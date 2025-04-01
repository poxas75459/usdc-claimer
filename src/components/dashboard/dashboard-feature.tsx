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
    "2Z3qzkfyukfdB437VRWduvnZzfbPQwbiH2ZPhbwXg3hwucBhk5DdEXnwGF2YuVEed95p7TWMEGLCi3Q57mriF1wf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HmXevaR5sggWrduf9A3hEm85xzjwLtLiV8eHL2au2wh52Tf6nrzMBFriHcNdgxUKZy6H3WPi5QRqdrq8dWm183v",
  "key1": "Eo7i3mZxLT5uN4JnEWUGfdhEtpQty8MqNq92Wr9asS4y3DKm8PNZq4ntSbx3RVaW6JZfCaFueDjr5XZcfcZ3FA7",
  "key2": "3rAMD9dtV299c73acB5kasqrxbeyMiopNALNVVxy6ecvmTq785j1DQKoizZUy5wdYHA8DJEkAfjDZSHL1Zd5BYsz",
  "key3": "4nmaud4rZq1SvwQXczB4EjFMqnfFoRfnGH2CzLzqw4mCodxy1mmuPzsBoPQ4iR2AXCRXZNFmiD6tEQVsqhcjc88j",
  "key4": "3YL9jMJbBTFAEjnwpB6D4ZmoqTHT16iUWN8peGL4y6QsxMHmAruxBJwPKvL4qD6hQrxyZDdjQmWdtHzsErdzLE3H",
  "key5": "51a6uYWVWfAKMKuBeuFTiwQhCzJgaTTTg2UW6nFMPT8mYC1SaDTNMCCdiTPBav8pXSST7cFyhpyqmDvRwz4sNigM",
  "key6": "5ZxBZic6SkDU5FDm5jVt7jFf3Ejv8eZ3JMWU1M2v6Mtry1MGtPzuJ1ZFAZJBssZ22VnuexqzSrpJjPNyy6mCLpUL",
  "key7": "4uMBhtdGSAAAezqpHsPHAr88msV1Rq4X6iN8TTLgWSZB9tiBJPWLpjFamDRzSFqiHZJB5KPpbMdYqRo7edzhQCtU",
  "key8": "63ea9Te2c17npHvdzrR6UkkmtR3DTRMxeMNYDUQT92z9oTmEejQBbLQVwh4tGXg3MhipoKWdTDxjccaATAVXHp7K",
  "key9": "CLtXJZ3ikEoN9GxMicH9FDY45NG4pzufRz3wtv9z293Yy3KFMu4FVyTCgFGoJk7f6E19KWdhPn7KUZc2ZaW5cLv",
  "key10": "2Ts5u8dKEgxe2vUigdXYG3oh21mNwWRubdCT9RA8jSKA88ZDAAjbQtcLx62QmvMh7FLQqSa7BYU6U7JsapSW1FTw",
  "key11": "34CyJmGrxbZHNZTjuvSpWjdbFSQwNU7cDfd9g8FkE9PV9eCJhK7z9Xms88nH8d2vPkfqBVBpzE146MSBJff9oFos",
  "key12": "4mrd29i1SbubUDMD6wUaWUHK1jPgQ8Ujpc2PfwTEP6iXBdBHh9wTxy2cFQjfe4UoTfRGJJfgUe3YsVxvk5saPYfL",
  "key13": "Tgwt1p7mkNMRyo6YVxrk7b77D7aUP4kyFJGov5W5oBrJNhiEDLHo1tkyGzKMBLhJuBB1geowKCpYGz7Ne7L9DW1",
  "key14": "4ZGGj8pptVCy1xyy2dicwTHX6znKXYtczADajmkh4RobJZsZNioShU8K67j2mQzC5BrKUZ6Pj8QLBojS5UuCHEhu",
  "key15": "3WLbP2qxNuv2pHKEte1tYi9aZ2xRwMsge76LdzQ62iRUtUrTfE5hKu3QeMSRfVhTSJ23DnQNYmcccvW2eWjUMdEG",
  "key16": "4hjznoPrrmQrkvKfJAtQeEciYQAZJArofDQTUN4wnkc61cJcsZLoNw2wyAzARYxEo2xAkZKKKXycqvJUnohBiF65",
  "key17": "66h1vgnoQdhvQuEhDNXp8gkqPSWAJoZroM81EShGTkeXZ8SBovkQi9eodsf8gYphs9ff9MpVRsXmQkLtQSH4a6VB",
  "key18": "5qbFsyEDKNEGDzdaXpkJ6EQA6MEVEJb6RurDkuy1wYn7wFVCn69hG8nev15s52pNp4jLUt8uF8QvXZg6WNRe72tz",
  "key19": "2QHEzbAtQco2zb4SxWh8GM7GcohfPE1V3TYCsiZhwtpYk9hTydMEYvt3WNT4UMrjbVmKJsyHhpzMiRzHKGr9fasR",
  "key20": "3kgq4kFTXyPZAa6KFNsuLodRCAhR4bYZMTUTWBew36HLFtEftrw6rYyQfX9h3gouK1kA1SMC8H1WQuqeSyrcU6cV",
  "key21": "kGA6B4RtAvKsFpydQ4aMx93j33jTnF55L8NQ6wvEq44h9ZQyjAqzKfaHQ8KsKtVzmUD5DNj1TLKqVzweQW2V59G",
  "key22": "4jU1xpPedjtQTBApW9uVGjLu1YMDYteqeyXfX8bvxXAdSXkyK2apCyhsCQFo6xbdHcqQBXdXgHeH5yRoSL9YkTGN",
  "key23": "5psC8Yrgs9DFbXy9PysMQNLbo24zxLh9HFh6e6m5riDd4YC8gYuj5t4pitgLh3Vk51qs1WNtMPJx8ZxMGFJBm9wc",
  "key24": "2BMJpn2wTRnsnShuGAbPXYyMyg7JJ7LAmNYGnP5G6RdPHZNTbphC4R97MkEt27bYZKX6LSEkP3hMGZMo9nFGmsru",
  "key25": "GUxZP5TxbxmpFAS7uDXyNwE6uYXcLTCqJVxyhDeB8vY8x2dkSBVYrjmNwDNM6wEJRjJxMpnJ9jhPcxEE3puBiqN",
  "key26": "31bcgQGfJi3tNXHK5FMTuvACpVPvcFg6sbeguNr3pxv1cJjAoi14vSiCVaATs22cCohbfA2qQZ3GnfHf5jf4UKxE",
  "key27": "62r69ZdZLqV9iK2q4j74bevyzwsQHL2HXWePd5uhergSTB99X2XiSmVzPB4brnVKaU5WVCSQ1g3HCZaA8iKZEFhs",
  "key28": "3fSjYNAmW8beQ25zuzaFSgLe4q4AZTUTGuSKKNQ43Nak7c3eEPNdhnTTGEXbpXET89uebMsghGHEn3HdDun9W8V3",
  "key29": "5rY9meiLWwmcugk2WEHy3wW7SjMLNj7QvWouatzoAPk87xRGEERTsaB8mXRzN16kvsrH8Vap5sPDSBLZn9fa2UBE",
  "key30": "BuFjJADdG9Fym5xVrFZ2aaFbHEXY4VwJGMbfUGyrt9cewU4zyh35u8mWSzZYWb6jn7xqHmDnz3Ed1UvFUHCtJXc",
  "key31": "4AYQTyqzqjvMkKJLLQqNLAvPU4u61XkJkVhQNdqXGgqk95Tr6KQAQTaPYoPNSdL1wb8dqyL6c9hvqyHCs4WqjrNK",
  "key32": "4NkdYMcb3TggcNF1Jra2CmrjVBQLFWojmAb6Lfcx3gwthvprRYMeAV5rAU6P99REMJggb1pkT3T1shGVckjaoV1a",
  "key33": "4NrWGwBxf2ZLEfm4ePjUQ7VXTsgm93EqNobL1nmuz4AhAaSsv6LyweSJKnfmrb8EEqHFmtTDZHCPuRvwPwULbJej"
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
