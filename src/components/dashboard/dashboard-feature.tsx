/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4YKSumb6GffmtVvMRyYEWeYwFkfS9ZZkdMcJgLdhuF3EftXrrbCw4Qg4JYVK75MMQhFX6U9MbSdLWw3P7PXgXmRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MBxHdNXSCJ9wbE4yQ21tUwE3kEGzcdx7SE9pwqwRvGDW8LtzSVTRqMTRWZRaC2LzgqWYtS3cL7GdED4rWpaeRgG",
  "key1": "5dP6hv1WuWXdMMN5QCCueuranP59ysQDJbPvtBjpAzD2rAfPZ2q6ko4Hnz5RdURJJmkPAYmMyz4bw3B65Abpiwi9",
  "key2": "4zVTKrszc3qcuK3goq2US9PmvBviwhPJEsxLsPkJjeQKobvLDHvk38EWCtZSPyvHMZy4tzTwounzenYvE4o3uW7T",
  "key3": "4Afu8RWBHQo1p6ej3r4xsq76LJuxV9oiKqhu1Qkkf95JjLeQeKnuG7Ck6bxfo83XD6aizRL3sU5BhUan7mEMDk9i",
  "key4": "2rHteK9TWdmLbsZZpZT9x3P9F2WW5HyZMESU3DvLuZh1EdjpMtmoDafv5SquduBvFmHVYfYh3jbW24agayqFTD2D",
  "key5": "5DoysK3mP2fFear7gi3N19BJbXvytVPJNhMjNLrkGTzWhqET8bo1A8uAnbB5Asvu3J6zawZV3zVgrNXoQmHywLRa",
  "key6": "5ZwEUhetgcccnyhC8WNoFUbjWd91CU2t2Q35F8gaMJY1WTWMzBQspbjg1gjC3CgnPKhC9BHBGjuqoyDB6UDjagoJ",
  "key7": "4pRJJTsp7MRUUMQYS2tQ4UGXX9nruruWGnTL9z5DH2cFME4HsF5DSbzrj28b64Zuy8U5bxPFWjPU3ezbnCPVMZAE",
  "key8": "5pxnRBF3UVsbJJqt2NJrWxympeDTsWUhPxA8EzwUDPGXFmwgFAFiBHSev7189tbMP9N9pCcnmY67davtF4D8ktu9",
  "key9": "4NueGFWGfVrFmcW58BNPCqu5b6FRus1XBQGMaUGi9nECnFhM2N6SLJeKJfhAUFXF9WtBHwPbh2qNXtnvXKBPH6WK",
  "key10": "28aHkaZ4TwJXYpgnezGMwcZCpWbQDJjhPAM55JwuBd9qEwT3gDgc1Rwkqss37xhmQ9Vvi3eFdRGBfJDam3EeQkEA",
  "key11": "2ZVseo89sraeZdD6o3LWyV828bq3dbV5gsGn4tjHrofiHRMh62GuwQWUCtSrTHCWyuTVWDtUohuR4sKT3rqXzACq",
  "key12": "4Hmz5nNgHWGPZTWbZs2NyjNnkTDyzY5JQ1qs6PPrFVPKVVVGQLFubE87DHL2xe2s78CFr8r8wJMCHj3GziRHJWzN",
  "key13": "4an7yiuVLZTdCX4WWmiBoy3PooazuMTvHTpZNLRSyFyNHo4ubF7C8kavYnTHrZuUAucksP3d6JSdiT8nTRgD5Pch",
  "key14": "3zsheVQN5W1b7WB8Lwr2stHFjbaPfT7rkEQdHTXMsz4QvWHE69AmW8u5wtKn9nHLjTcbJ3Wf2rsDbL1jYFtTLsvE",
  "key15": "NmVKzhEBKZ3py5Loh6DgXHQ6qnyS2GbywpAftHfH5LiTTdX62N5JC9CKkBdDn99DFpFMXXKEkViTjUqJ8sHK6dV",
  "key16": "2XjvW3JQgF1Tur6G4HhaFdpos75jENdatsjRs9dUWeLzVxvQ1LCj1GeXLeZK3NncEyggSotnfvsio6Jy8Vz1QvWd",
  "key17": "5LL6G6Jda79Epd4W52eouPzPhmQNSyPektxbTNBqbYrL4Uw3rRDsX5L9devvJGdaWcs5h5qsr3PWbD5vQiqi2FgR",
  "key18": "2bbvWoKfz386bgAiXbDhmMpk3NGi21QbZ8VYLFVSi3FQ4dffzjPosnoMiFgX4Gv5e4HWuGcb4sfC1QM5mKMjhjLD",
  "key19": "4JmXSRdQPkAGXHe7XmngqyghmpHUTqRNPCn7SYA8Q94zjRzmiyEFRtokGCELWMbSyBFv5nkd8VD59kib9nEUMkTs",
  "key20": "5CBLyYhq3zRRXTGSuwWrstcAmMPCR9h3v5KcdScRWep86LfTi9bCbr1CyacafL857DGYRvAxgnP1k75xN4ffkKmd",
  "key21": "5h8LLY3GicYzHwwVjwbRueGD6oLYZbZ994voowKVyqV45mbXujj7nqLqbzPZGKKHGc1X97UPcs7cpFY9d1mxEf5J",
  "key22": "3uxnNada7BHLK6maFsmPvGqRGBp2akrjqFo1cuCLRwvEiJFCoFPh61717CxwkzX9vdAZ3nFWWjieSJsJtUDefiKW",
  "key23": "2H8xwassYVy6hMdGWi9qQv4Pst3TJNhxqxQPez3WCRe1h6BQAqiVccErCsjf2kBHZ8PjXT5y79STF7Jh4vDmLh4B",
  "key24": "4GLcY4FkqGTWVizq3S1yBYqcx7EbbQjLAkhWTW4izxrv6J3z3dj8eEEq1w8jZJuykHmzPmBHCkkJ6JXWgWeUVXMt",
  "key25": "pZPPh9nYK1ZJ3fWP3dsmdDfnV3WPc3bsgwguHtsAEJaRPcLGkFeK3XtxcKGqqKotvHvGoPNtYDGn2njiveRKCH2",
  "key26": "57tnHniMCJPgc6awBu6mmAgdrGNrm9JD3pygHHit5AvWQ82ikmQpLivoFZr6UvWPR4SJoSn2Wo2YRMUj8PsJj6dd",
  "key27": "9fLPWNvkitKP2BZ8QjpUcYBPAF7EMPm77kFSqEmxLfL8BMy3oAFESVmyu2WeYtdksEV3b4sN5SaBaBXVdULSsXS",
  "key28": "55QtsYo5A3Uwa8FuZv3YoQdPop8ZzVJcVEo7nCfVZURJcqMkxsZhXvZY5MeP8J1W7o7M2kxofjjSrC7GqQcjPkre",
  "key29": "3EfbDa7LVEM2bZLmANbj91Bo8cvEQC2k552Z7PphSJS8kx84bPZRTzfNZFAYkD6w3fDd6aZfRFyfcYc6XCe53w3Y",
  "key30": "5pxe4BuTo42kmpwJjDa36tBKVuNcf6C5zc3iJj2xxxScJkh4ze7NAUbrh1skAAvk3dMiTNfuBQwMuhJ4qwsRY4PJ",
  "key31": "4X4WVXL5QHW2FdsC2dWKuys414DxmfShPrRJUVLU8h1fTztoATM6CkR3Hsho3oqvhU6SyQXE5293qS9AkAyiKba3",
  "key32": "21oxeYjvbiZTGe6WLMZh8BBtXXcndwy7b6BUT4MK6gBHxFp7PZjcNtg2qGyGtEnNzSPGN9JoSrTRKMwJFycrooiD",
  "key33": "3rHpDudnRFbPCALt4cXdtg7BT24CKqdTp3Vn69q1aevkqrWFJAJHXJsXtiig8YUFvMhwXk46V3MUEWMMJrNSbZDk",
  "key34": "3i7pAwJ9DaxskYo4sBf1E5UwiENRc9QFBBAHqVsqcd34GAJ3rGFJk3LJjaoZWNxho4y7eStZQJHGsRM1V3qyowho",
  "key35": "4ngAsbSzVs4255axVymQpUjR9JS7jZAkJmuGFexVnxzyTLEXhHAoddBuhVuzp9pU2LM54e8evXmU7UMACsmJs4tg",
  "key36": "4SRnVybpLMm7v5qqdP3EVih3LUhQt496NycgYKTcYeETKwuzRrfXMvCibWdfL1fVBpwEfAgGdgzj5e89uwMYphto",
  "key37": "3P1YFyUKCHuGo9D6SPW1dTX5T8DPBq1Zzry7bTpuAUvqAwr5w7SYs2RoKGj6MB1vr2rxp4ECLcq38Nveayut8ZUN"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
