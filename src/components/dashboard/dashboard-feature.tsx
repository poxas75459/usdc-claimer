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
    "jMrs3y7jd6C7mXbusSjHF7ZJnsbbZxUFMzXWKYMiPc1Mvad1RL3xkcnfWek5vgiC181dtgndQuNiU9vJ3KMvM2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yFt2vApWxG7gJGs3SZxPQj9JabJWAbFMVyyW58CE83nLFxVkKVmqXToFxXzyWc2MG15YJYiwtbTPPmzAUWHrm2z",
  "key1": "5VSJQu5GMtPkd2TwA7atKr9DsDtpHTw5tY57V6J75fQSc7rJX6ieDzZJMBWV27EJyTyX7iz4wSTZNSgJjGLqEBqP",
  "key2": "5zz6JtpUiqneEiXtN26NDvHZBJwA2HBoZAdjoU9yia1HZ6ShNrdU1aKhm2nkwhAqZe8sVu9tJEufsu5uWUgf1fcw",
  "key3": "2Ppm8KRXH48wFpLSCGCjfzdUV72iUcbeMHFaoXcrYq1poYewhyAhAaej36gmhAZcBs4MfRRcSTW7nQbaSckAunJB",
  "key4": "5YgaYwQ6hp8v3BV13J58nRPXWUtEf6obee1tfDmSe5eBSJpEHhhrGFkzhJVfm2ueto9jTx3fWW9U8DA4dDX3GX6Y",
  "key5": "2Kh74vKHTKQuDfkVNprep5PJ6tFRNPBsHJJMVV5E6DCm37YaseBedF2hnuoRikpGf6gVAhFbvnKSKmyZMzL1hPQj",
  "key6": "28F2AVEC3sx5e4MYYGScVuY2TbucWyeN9a42b557ckLDwJUZL2TvJUnCKV7xcKVgr1v16NudQzAToJx1kjgVCDxM",
  "key7": "4rFdyDSHqqGp5BqaPa64ejvW9dk7ciEuKUEfDNsvvbCnFHVquRGiH13QheGpgMqdrs6xaoYjyG4hF9pn9s7kBoou",
  "key8": "2yz3GYGJ4bwzGpWgXhkFDAU25Z79e9wKv9PphwbnTsMpneGcBQwntumjxTnGDVySJofxY1RHJAqft2nudRQErwsX",
  "key9": "pZvER95JBpqpo692C12Nbio5e9UzGEauTCboSnfD37Mmb4otHMMsUFtotVnivFo6acH3SS6M7XhuxhLrJV4Grbi",
  "key10": "4FyP9HBRAvzJqN4EcsKvHfF3273SzTELLHbSCbSdeoJ5sPqZRTQn1KEQb8QpakaCaTnpRpRxEEixPhXgPmzicaxS",
  "key11": "78VHCa1A4MqkxXnMQbNzSNGarKm43Ri8GypZnkeJ7iSFdk8HFtDWeYgKgUSdyrSGA5uKW6YoT6Q3KPuW2Yo79Sq",
  "key12": "2ZWSQrmM7QF8pQfTcDp1Gqg8RB6ZoypTTL96GsWdf83fmadVHHAGgiapJSTzpdPf7Ac5tHzpH3KsLeSHybXSzL1B",
  "key13": "5GBNwnkJbLJzE95fC6K9G6PBdi6xnBVDSvuwk5CFFJD8V57P48viEAxuMfy6SPbLaDyHTixKhxC1RqrKZHwzHHkw",
  "key14": "3FVTD359C2NDSMdrWzC6J6VRvByhn4LixYKQSJHeB7Rcu6qMrF6nx4bzZX52XSDBXMXBaDAfkipzK9kD3tgZwcGq",
  "key15": "5YWgFkK1kDq76GK1YmQD7v7JSvryJaTfnDqdMA1LZgRGNfLTfa23XBu2CwrP1NBtbUkHMgoH5Pa4T8AsGecAJG5x",
  "key16": "3QAUW86pnUUwq78VmqwvokApX72gjMyHDPBEEyLYAPCHmVMhhKjWjgFYurc1fSPb8KG2LnpTxTDXpMY5rNfxNp1q",
  "key17": "2bJEgR1FtqFJgtSk5mHxj57688HkXEk4o67QBkRZ5vhbaWVFXkrCWQg18wsmgY7SfJB9D7xhykU5ZkdgEUpBb4eH",
  "key18": "5wS8cAXxL9f1apQvHJwvAdZNmpJpv6YtSV36mxBKwL82xGJy7PVhTvdqTy7hfHCNgHth8bUz328D1H8cTv8XrmNB",
  "key19": "4uBcp8CHgyB2wfTi2AEzqSpyN5v4ix9ZhSEqwoc4EDsgLPBoDUVDkcf41yVVTBZbtuxnwLnd4LbTM6WYqntNxgvC",
  "key20": "3nF1QkXh6XvitMTRREzQT445NMkANM287FMvG2v82HWFf419EA8Fi2wVDRerfJ8zKdS56dsVJ5TjaKS3AbScimat",
  "key21": "2sjxsXHeLNymhTVPZnnNrQ9UebSjZFJEgPRcggp9XexCtiNXUueiBtdBD2RBmRdxV7g7u4ygX2hyzwZZYprCBmBg",
  "key22": "dVKnPCtvz4xgGB8Amt1U9F3aTthEZLgdUVUSEfnsc29re5UhRUp9hgHhYQNaUESXbV83HoXDnAuiWs8y7b8zQ9f",
  "key23": "3um1dHjR6iUyij1qPgZheWiDpRrB4wVvkm5GMVUP3ZEs2JNp8wDJN7bYKWocZXeszW6VfXPA87cZT3SYtpisfxQS",
  "key24": "4qWXLDYLBzi1xfVFK2prALbWFkUdPmk8h1tKxaobzyhGixeQKAYqDE53Ge1jrQjNVGTmBABKVdDMDJJD1q82gSwS",
  "key25": "2C7nQvFNXKK5hoKgFXvwkw1dvxnFJyKqmstSfoNXA4o221vTJqcJxgRYkSoCpLZAGB327JFYGp74acXiWZapMoQN",
  "key26": "581NyFAbeupSHQ7ovwdF8AykcM2W8cdKmtqGpToF8GWrntAwf8vJVW2xTcHRctZXmJxd2xXbYG7sZWucEofAaRJ6",
  "key27": "3fxpeFNxts5uyypu4RYnq57MsjE5NPMipcfs2r7FJCAcSEHLCb9na837UksTdrzfhAmrNx2HDbnByH3eeSeaWani",
  "key28": "58TPUauArECiUYSxsMZSUfb83QrsMmUMqDFiRsUD2Engivi7a2vVKQMbwLZqCJ8UBPTnMLq5UuG9TmzGxpwcdJ8b",
  "key29": "3qLkjaermqEx2PPKUUnNiEAUAcRWBK1wJ3QP4EpcynybkxZXVqBMnWEM4eNrXoy8op1YikmqQCYNExoUCiatn2rL",
  "key30": "3poonDnkNeW3JAiQtUivQ3h1Yz7pvYqZzMTNBApP3q8VLyGvp1pRCvyX1UJqs5xkWdP3LSiSNjQS4DpS1DU8Ef9W",
  "key31": "46SkLRNnxVGRLH9jYuWrox8wAaUmiYkXgnu6KhkRjEvRthBLx4xQkHmqauyas3WZTEqyEvPzfBRGUtVDfqJrp4Wa",
  "key32": "Eu1TSaRPjnnAqmYAvbuXF8qGayZrChxsMYniWuC6RyNQDNbBYuuf5sVxUFjurFBPUA6UysRcStrHriFGJn1EeT2",
  "key33": "55B4EnRV1qNoAxgbefnY8DxaqZLq9DcFgsewoQdBHePxJCGQoyZ88aDgUeNUGnrVCZCKLvgUrT2hhBLW4q1vUhfT",
  "key34": "J9surgXzaTFMHci4Ejw8G1MvwJKqwJA8kQ53zcVcMRvpdmoeu6UXjaEaFTxrQYmCaTrCmBX5WZwEiaAKXhL6dt3",
  "key35": "2M3WYHtaRovK3EQT5M4oU9bu3UQPvH512DUx6cBkaCjP3tHqDjptnqp7x3nvdo4tXM9YcWkXQtyQe7MuXEnJfdiJ",
  "key36": "2UpgKN8VUSQGXnzF4MGocAkFS3FoVbmC8K2JSzTw5m8AbeHM2oXySeFaeEMRPPkJwv6s7sxH67sFpGdpfhFDGmXw",
  "key37": "3P5jN3vW8UtM681pnPGtYjw4LvLjcqipMfy2WbFNDV2jQDwvXiSX8YzFDZFTxH3mj29FkztihcJqncL6zszEAdZE",
  "key38": "466NS5w3TjgAFypGYH7nmtfrsb1ubq1v25bnA6ikqgKYLLeGoHF8qAzroiidcshTTqKqM1BJN355YoXcpdULoe5d",
  "key39": "cBtkB7Mosjg5V6pHJ5cUhvBTxEk9QL6dpM4Kb2R6jExAbdnHXP159rBrGSzGEAnK44ogkMu4X9gma8xrKA1HXFC",
  "key40": "4xmSqRJ8vSo4CHgyuMdZ2MQBL7fAUSPZDNCLiaVFGkR2k7u8ekaUA4VRgJK38yfFbzve3LvrEGX5FsXx7jDe3LR",
  "key41": "32AVkyEcobJPtZVc5bH6aGTufN1mUPqELQGJ1tg98ee7T5hams9iangHrvf6794zrkWEjfrRUso5LToauzsHw3sz",
  "key42": "3JtUBh6uN6cRUPMw8yyn9EWCAS9kNHncNwgnXCzMsmcv2bus4NpV1bTnNAiZHAuZjE239RLMjVcFMaBVyusxApGt",
  "key43": "5ZhqGEom584g1UbFds8GBCSjGPy6W1x3Ss7pC2Jzj91EcizrAoGDKLUs4x3h76PPVkdTxxv6iX2kbGfdcgUqjZY7",
  "key44": "nXV51HBRipFnQwjgXiD3JcMwYFw39a61j14MNZV1rbdQdTSWJeZsAN4baiTrUUWNpyYycjJ7kBPaMjVp87QZzPC"
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
