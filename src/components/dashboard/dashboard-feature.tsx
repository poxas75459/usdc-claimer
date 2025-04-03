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
    "s1HsUc1GCiJZKFTtnxEKLz8MPkrAD1Gp1yW8aQXaQaj3Zzqqeu17R82dxqFw77GGxMJ4oMiXiKaXxvjgPGhaiYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KjUV3AMoZyYzQzznQHuogyQH7WmtXJPc8uXLexFgMujs6bHdLf4gQNWWfHAMVkahhrAFQA6Bv1UfPHjsfCtCttF",
  "key1": "31Y9u5nudLjVgttdrdEDisK9nvcP8vxKRKgCNntxmSjDrkSTRAG4CBtvMz1dD2ovmMMLdywdSmi8gt838QJ8D8Mv",
  "key2": "3Z7KDYyt5swubzmo7HSKPtJtQ7mKuWtuRiqEapm5g6szVJuKAVNw1sgq1XxZL5WnHAxnMhC9pFH9PEb3388tC6Cx",
  "key3": "3qyNkEDArF3nfRn2tr7NBMWRhbVDtBUbvecSrK5vhjU8DK9JKn88VABGy2F3MjGrjozcYdxC3DtbUCzV5MthfyFU",
  "key4": "5RcRzXYRCZrcCkzeos6XQyQbNxgyV4UnvhnodrzHf7i97Sr448v2ZZVwSRUnusciyYLVj3oT8AA8bo5w2ypCBsQj",
  "key5": "58c27HgKConUueAPVoQxpcAsvv7Untgd3KopTPoytCYCwEKm8hGqRGQZTFfBrz5kcUAxxDshJzNhg4xKm16jwev8",
  "key6": "emLmMJKTVKesKq2aQYMnccK8vtovKj2WfkaVadwPizh3s2whJ3i1wtozhGMJsRVF2Gjmf4FiCfHRLZ9NvToLBor",
  "key7": "21vpse4z5FuYsc6x68vujBgvosrxeo7LC2iHm86KyuQgSw1N2rfHDwxpLt9VfPpRi9D11y6ZcyCKrW4nhhP3rj8o",
  "key8": "61W2jqNzASb9umTjnYhGujnHKuPiuZZu6Y1wmQrVMvQpDy5yXQVzSbp3E25HwiQ77oDwaVFpvRineiB22LjTFPn9",
  "key9": "2kLeqXvuDCJeq5ZQb5y3ByjFTTmUr6pyyhF2u75tGMEPc2hKeM4WJY25JbJiz649utBaCdmqgs1qpZwU6q3FGhtp",
  "key10": "2gRtjWVGuSWPmU4bDhRyQK9zAs52DGB9nVkBQ3uVTHhpnNBdN4yKPvMYW3tmzcmbMzVKd51cq7h9ZR6PqzVco7hX",
  "key11": "KZTHuzpDqG93vrn8hznAYEQBaU8a643YwCs4oD2ZGxb6iitxcBHWmmZkcGrQgUqYBKLFQHn6h5CnBvTB2V54xr8",
  "key12": "NnsrhZ8o5NiZHy7uFyX29zvdPLiiMLUyKcwddSuUMPjz3ycHF8eKmSt7uLZEckNuTqHJTFEfAwPdVHSeYj9FBo6",
  "key13": "22yCU53oDXdsNwFCe6kRmWAjkNWg2BoGXJx2V4VahiF9MP7RWfAtzJrGu57bSkqGJMQc4fM9aREXHDsP1tgb1nVV",
  "key14": "3SJRJHT5EdVSvGcHpnMxTakwNXBjxfehcZw8XdqWtasoHeP3LCB1wusoRjj6isvYhQHjpZvLr9gECjWtfuX4kA5M",
  "key15": "5opR5jnGWFUmmWW5144ShCTLDSpYCJbyGCXbz3vSiuyWkXkF1ndQNvtFS5ytt99VZ4xn77oEUkWnboHpffD2bTcd",
  "key16": "5N6MXtqWnFEDMuE34amZAP3dyD5xayHzrKaN3TLmzsFDfLeSq2HYSYTJ6wtyE2bUxCpCzxUPc9EMmJSqZKCYoh7K",
  "key17": "2j52hr5VsinS5USZuyx57UQQFS69AvT5HYMQcWo9Van31JmtQN5qk1zEz9wRcfAxihsq6NH1ECc9tidXNdhWbMBh",
  "key18": "4cLiLXFCBtW2mwxUZSqabWjvvFK8tprtpQqG9CLBsSZU8FLqwq1fe5MLWP8xtM4sRAsKArgtbGM5zci9fPRsHGuZ",
  "key19": "47Cx2bui3FzYhgJkCCSVHKPSAy5gcMHVHyxTRzQsv9XLrCVVZ73pwSH26QJJvXfeHXX2W5EGqzrqJ1tuGg3bRzME",
  "key20": "3eEsoe4txmfgw1Ad7YwNxfTbGV2d6BARPXn1a2chWQNjkyRLknhUH5iGDgYdyvbMGg13AMgd4peEYgmnMHb325LS",
  "key21": "3183AhurSxVLYDopgkZuMVP6PXxmR42eHVtZkmdsnP8Ykyz4TZquu6Sm9aCFQWjBgBPjPZvUxBx2KgpXMoJJx1nS",
  "key22": "3kFTagNJxgaH9GodK4VMdik4n3FeyDKyGcd27cL7b1Dv98uUs61FZNu86gehHdzkka4N3j3FLznrm4fv2nvBNSeC",
  "key23": "UT3iJTct8CUNomnrf6JnMSwr1EKiSu1AAwizKgozzAwJTEy5nwajzu1n1gLh2wuDQpd6hD1HmzBXZPYATraPc6u",
  "key24": "AHXuRaQCNz3WtPvpTsu6b3At8i9QpQQ9M6FEvz8JNGT3WSg9iQ4Apzr6qppopbnoDe1WRTymzkiuWDFNuup1gLu",
  "key25": "4VxXaJCzFpuf5Zc1W9qMexuUVuYJumkMC4EFcWna8AXhUJ7r4uh6h11mFGdZ4iALyvLxSd7KjQv7ekLbMfJQT3Tj",
  "key26": "2cSpLss66wSrDuDB44Skfd44m1zrov4LMmw5LPd4TdmpXX73osfeHfxWc2UXzawCiDkrctocEAj636k6BaJBKd31",
  "key27": "5xBxZDE1tyUNGc3g9fwZtWURrW4CvLp9swpV5snTcGvANbnhnZTD8dmninhvPoJBtjobvgkBAvxogj9sSCt3bofX",
  "key28": "4BvdkWsGd5atnXDayzqixa6K2hLtfm42SbBuarB9mk7jDtAzEHk81HAMNsbcUbUvvEb8w9scH7RVXEx3TTXGcCfg",
  "key29": "2PqFVWdufNeqyZjDPJPyPMzK4vMDBdER2mWMqaWEMajT2WHzrJ45iZ4oD7vafajWNupvt72Qoy7sP8fXPF5SVf4H",
  "key30": "XUWsFGP5pUYyxLCp9TT6aysgBiryCNPPXtiRXwd7bJ9tN4psvUtyqstHyewfZveAWbGLSeKttVLuWE3GUxmENvx",
  "key31": "4TKy5WpFNc4wKYtPFRtyFygG2reqAryGxbJ784DMJeP4QdcfLhab4X9CjmXq7JzWfGqFx6FK7K7GYhQJmAheGV8J",
  "key32": "5YZK197bM7kXoxoWoLtpSzYiWaVHZUqgv3agnGn6RgX2uqvGEFEMHicuAuQryM16T5SNUB5HSQx9KfSRWykHfSbq",
  "key33": "4sTHYqZwo9gC5Lb16vWBKug4YqWZ3QoeUA52xCgYzbbNAjRb9FawpkDsprkz34nsTbNhraM34JaqE67fsra4hubR",
  "key34": "5iynFEaQmfiG3p4iemZM9bkrNvqdhJsiM8MbYaNEZWNP6189BqgTV6JztYtsad2ok1gDNSQt7dmwcrFj53ZZLg39",
  "key35": "2RpCp2oRFc773ccCWphUxDSnxPxhWdFriG3yqy4GCRsaUH4c2YTi9eciPX1xE9JeA4DS9W6dSZjupgPVpJXFKuRN",
  "key36": "3xzkq1QAoM3pNVH89Wc9Tw64a98vQp2Pma9RDgxGKzDxsx8uWA2AzvWFErG57TaSRF1bcZ5z8skT6URuaQmNYXDK",
  "key37": "5UAYy2WLNLBLGRhE7rGiFLf8Dwi2VyTEAdVjQPKgPXuVmUBHCV273TuFf1sgbwyj9C74WF3uPaYDAzfw3fPdn443",
  "key38": "4Ri9oHDUitD5mvdJGF7W4r6c6MMiZor6CuxBxh6NjcQeu6P7Dc5vQReqJETCcsNj8MYtHuxV9a8PxgJnmtk5JC7V",
  "key39": "3CqLhQy29gqJRq58q5Jf6amvCxD6YVUE3Tz2TNuhdid41WBAWYKxySXAbnykEnXQwNK5vHNpVHhwL2v6AwXMJzFt",
  "key40": "4Aby4bjGHdQ2s2ogy9joLGcjxNDzEzGuXNfK7fDqZWCeEjrdBwReqpqBWaBtz7q7xTUVTx351XSwfPNGaMgXZfLF",
  "key41": "ZYyMNkgFPVFGVC8aodehbZmW2a6CtpUgqJjhbTvBzm3WRNuGjTmfSiYL9oU5tB8LuL2TRUJb2sWhRGEv28NwwMG"
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
