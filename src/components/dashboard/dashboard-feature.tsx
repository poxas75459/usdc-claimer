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
    "4cZLjwh7SSW8f6oA46dEGVTYzkAvyBJShA8raLSeEv8KYXRBbD7CQUjQoEQ5qocxZ5YSkQ53riEKc4M2dKC1b7sf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kjXeoGTEQaK81A6GcqvbyQ9tQ6xPqscukbfyThnbZQuujf82b7Bmeivm4cCRB6RYascRQRbqDcJjAa69GFzHPih",
  "key1": "37qDfcW5qjYhPv87ZcEKmRDPmdaR1NUfPvpRjC9GkkNydBy6sgjg4QNhhzAh4Fw4MzJUdWUnLfGzhpk35EiF7uRa",
  "key2": "624LBzuU7T5BL2Wju47ePWoyLmZPTjG3cTjoUZiCcJzsdG2REpEdHoVscSPgnFxcweR9jBprcAk53jNnUZ5TxEMk",
  "key3": "4NJNzvH4KdQ8SgoxqjV9C3yeP3fBNDhBaNeYB4mPMeDTvxyUJk8KMf2PZZsK2vjK6SzcvLWHsXCQVeMCg26zVNmh",
  "key4": "4FfdiTLeBKcgERyorBk2ecH41rGFFps6ux8kgmvNhBnhki3sFJSVi7PJ7wZjgq57ebGnYvJgebEUSmLcx9t22sLr",
  "key5": "3KAAZHjasVcamb8v81TQ9TGUvzaxsJqiCULswerseDUjbEUYiU7z9nTQqmRmF5144BXNXG5MX1ooo4NoaUoTDy3i",
  "key6": "5rGERnGZc6agLDtp18vRiN79Gj2s1j4xbW3G5a99uZ5XhBmCrYQH7dQrptsbshNsV5zbPaGGGpfKVutfa25GpUGw",
  "key7": "DHDAKdJBaBdLJNyry8DxQDwRNiq7e9VbGHYgED3tNzBNZgwfwRthUdaAoVNdFeuDerbEHuYBMkZ3Khkvro2BwxU",
  "key8": "cidbHaJuj6kJGQUZPug5whRyus7bCZFtZtVFeqZzFx4Tf3uM2qc3ReLcubAWzusqJYmikFhdwQLz9urtubAwy1j",
  "key9": "2mzmZeg648cBNJuajqJdHrzhnQzMsoBjtqbpTV38s8NMu7EypqQcjKizVF7qcxDMJHaQaPhdWPr5JJChw1VXVfra",
  "key10": "54odR7V7sJhqJxZxutBdQ2okKyTB43SMKfbKBTfe66bf1mVesSbdckLDBpspUWjNoTFC2FqHTiPMt4fuc2rh7e4r",
  "key11": "5Jnj2SQEuvTedvUpd2TNJAmwUSotfeTscNTd2XsmSjQiMLqSBX9BJntU1dQGcsn9p5jnk2cBvbui7MqbYmhX9zdo",
  "key12": "5maQ1e6HTa2qsQtE6F7yRdVvHh8SQEQSiecGMPrfF3FMiQeYYVaZBpVsUHCRDtxa8guS6B1cCXhC2dfGGv8CG6sJ",
  "key13": "5rbBf5peZciF8nHv7eNFf373HGRfr2XoyGuew3e3DXHTaqg47jsChTrerPBHLGPgTKQ8gXTNQ5uvvwYoqj8o1RUg",
  "key14": "23fYXgLtkw2drCsxKHixJ9fXB3ZBiAVugRqzVBKKssxTFfo8LSh1Bnizm5AaaWfY1ti4ywMa5gDPFNtSMMJqwtD7",
  "key15": "2yfKasaub8KxwdEztdRixRqemdVptcRuAifaysU1j9KpzxDeLrNyNHjhiMiGr4WKKpDe3AAdA3hZnuytvAheww4r",
  "key16": "63u7Lmxp8TD4wZ8u32zfAURHcHY6Bddc9xUyRKQrpSjiF74hFPaKVon4wQNQx5LFqMuMhmATKBYVZSvRULZjNgzj",
  "key17": "34BASrg2WsXuMHkQwFcSL34chM21dKxPs4t8BkR7MfcvVKPd2mSn438eNcQZG4DbWXGc5TWzh8QP8QFwbYRFg9eR",
  "key18": "3GEJwasUUf2PsLwvEKp9YNK6X7NyPjz8q5WxURxADoubB3quJDpmiLuNz6GPt9MR43aJzcjYFaCFXCoJ9d7w2R8z",
  "key19": "298DyqQAE1vttFth59SMwveVspvwcCJZ894n2A1fcQyTzsAfRQtnUUCxxBRhk8ajhmxYNcCQtq8TKbWYW91VT9hz",
  "key20": "5bNAQviFdvQEKaJExq1of8Yt65CvPehBdayGpj8d2KEGc1mQs9R7T4Qz22cBBppEytejknYJ8ETm3Ufro4wCnM5X",
  "key21": "5jipivj9j9ta4UXC8aa2yd6coNrL7hT9eHuAKqB1GCRLMZRFBWdjWCSfQjpjSWgrN7fky8Smffua8CMoSH5yVgG6",
  "key22": "kXb2hPCaHWwU8Q6b1ZQsgfjeecXgi9Bn6BUeGrRpoJsZZQd7egbbLX9XJhmue1udsSmptMDrcZBEWgfzykjc4Kb",
  "key23": "4bF6BDoAHPF5mp97iA5prj1W6Ew6i2qHjkUaNgLg9uC4uae5r98RqzbV7YGC6KF9oQiEMBMeiBK61NkXBxJmrKjn",
  "key24": "48ydhvQrFSBpXrQocZws9a4c9y3hL44adEbFvQUWVtyzKmtNFXG9jxyvB1cG1E2mcxuf3ttER9k8m7YyZVV4SCCj",
  "key25": "2P6MQTSkhjtYAwqTwQCTbKuJEpG7V8B6Baf88V8DXjZj3mLq3zh6215x7JezE8xqz4AgfrKsDucns215Na44LZHe",
  "key26": "5LRuVFtwcE1HkeZVKckVn26hujj25Vm6vRhSndjXAoCVWaY71xUDi6VFTZ1oCTSADFQnAGad7PGNFNrYZvhedhGi",
  "key27": "AWQ9a3TmwZXo1YFXwibNSeUZ81tzRLHi2Y8i5mJGJVRPothLLttnUAuAyPJxN57zQqwuaUoaCDNdPUNuXzg5yF7",
  "key28": "4zQmcKciFJ3kZVsjkdDd7JJ9GragJ3qAc6tECuo1WYpUtu4C97ouneeDQueh3KqEv4q6KN1n1zJnVDKsZMqarQcG",
  "key29": "34NcJ2TfJbxfv38ezAW4zTtThLM7uG8J9oy88qCrMvzXWx7uDkhPWDXvdWhFhMXCXUvLAppw22Jt4Wf44exZoFeU",
  "key30": "LeXXrsQV3HpBfmRRMBo6GasLF4oziWoipYVqn5TskqB3DYABXxEECw8g2BnWuiGtCUMWFy23kthAnji7JopQeLg",
  "key31": "UFQwJNMUMPpvTbBjSz7cmmMeqDW7yEhfE99thRNMVXGG3qVk1yuLKWiqpJF1Ccz8awAMnujpx5BewaPaEt5FJ3v",
  "key32": "5DyBB3FiPXG8U1WLzxstCsDxWF5iG9Z7CBcrmX5DH6qPnFBikVJwxSiKm1J8g41P27TJtHu8CF4ED1i1jpDyjAws",
  "key33": "D7pCW3y7vHvxX8QrCZMEL4oRXJEnQ9aZV65Js9Tr2pMXrts9veipqavrwvFKdyXbANTv6AAWsbyFJmgMoN5A5xo",
  "key34": "5GDRZxFUAthtsU2N489tQoaq1BEXKv4XaCgpbYVP89jgUfn1ogJzb81siF1oKzfzjkpyeedBLLJGvhDoGsmDE5TL",
  "key35": "3So85BWWcunie7kg467Q3bXvjvkdziWS3oHR3vLjJcnYV2MRQT3xiDYqQtpca2GdrrB7QeMnysiULEcQYnVZNojm",
  "key36": "7vi8CH2XR2NFdgNM4uLKs5zrcVQ7f5sFtUyYqsmboUhapTopTb3xDT3EUedrVEaVkhR1VKEf9pG1Bftk8bo8Y4R",
  "key37": "4T6w37cDZmvRR4tdngJWCu65XeM2fLu22Wh6QXAKAUnxN3M5RWpjnhXJE6cQRTRTUkE2qhk8R3TGbkmAwz5GQUbB"
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
