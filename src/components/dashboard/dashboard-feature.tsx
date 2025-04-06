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
    "W2aw7wjgbCUQPdrrJafsfZh73h3k5ay2Jzw6X9WDgawfnWBfsHpUJdTcfrAdh2Da6euLSZRfPJdEKahEqK2FmCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tfawnDokmeecNsa97Ck59V55i4b9QtFhPPsecryt9suJA13DKjdhPbFdzEet2e9ajaybn81kZ95i1fPpyzaTCjF",
  "key1": "2uqwmQTQMoHbNGfk73A74tNC1N5UNaBpnJEsFRA8pWv5bVqUVKE5n5t2xxC7xkbLa3EXg7mGMKcs5iVrLe5SHwjt",
  "key2": "4q8NnKVd3tFRz154tEFv8MwxTUL2e3znpKsfF978EdWcLW1g1NYXdkcSPWLHoh5PREHjBqUcZNA3AEXybp51yfq1",
  "key3": "3cpJuzXMgomdFRmYiqrQR61LMrHdbZJ17heyVcBfe7KsvjuE7gi3H7Li2ehCzX7sk57uHNbDLTV5wCitmKtwPwss",
  "key4": "JQAKi6NcKo7a6Rwsy3pC8Uf3J4F9F7eVcJ1JBCvHDszgdDdNqfnV6vRLAxAh3KSPyccJaJJiJgayzeBMqjjquAy",
  "key5": "5WFjcMuxoHQ9FjdEFNLwpmviEBQvBCKNsefuyXwAQD3AaxVTpTh2LQmN5AZzi8VMS9RraV7W9iSZyAH3xVSd64uP",
  "key6": "3kuZ9RoHQcBC4fXUSsz9NWFBD97XcXDTw28DrXbVsPT7YFAgqw5qz4iSSpRWWGMvXPyAZHH91EpQX8Ak5iutUV4U",
  "key7": "kGDZStP1J6mnFi5fo1KwJpsdReReWhzqYNAnL3RX2wuEq31kmmW28HpXXsN9kVvpriCVfPsyru7AGiuY31g2d5s",
  "key8": "3uftAzpkiimDLi2ycvpCp2UAoKDUQPeTg12HC2R7gXcHGqRtfUYZABAa8ZFCxT9PX3Vog4R4Rr5q19bTPPZKaAs2",
  "key9": "7yJ1TN9LRuWc28pSsLD8NWHL7h3GWdETgLZZUG73ShdWBAoKFyg28A246QPMGhJAGFntTcDRVY9z2chViFeR2GD",
  "key10": "5AUnWDmmXR83PvjT1D2LqQxd48AgEhyRgNjRzUA2MNRBQua5ahzR65uiNbwAtZznb9ZEnAfMi1zNBRgK6pVGfFUy",
  "key11": "4cbfkkUkbLHGNEdgDyF7kRJSVG9G8bQqtMPqgTDrqb6QDHkWJM7zFoyCfmBkaFn5WXrM85b2S5QgFWCzwpQXkZ8S",
  "key12": "5Dq4Z66WRn2iaFzBu6iaqw5jySRnDh3QqhkgbKWLpmzFa4TikgdNxwFvskcsM3wbexEfN1BKmiX6x6MdAsDKwmyG",
  "key13": "4GgroV9dSQtuna64XnTNzdi7uxkm2rg15LAWLeZCgdMEFR84DvXDWmPBFPAuKCWa6r2FyhRHos2hcvzA9J668RcL",
  "key14": "5vypNjh2PFuiX2qXKTZ3Jy7a7KPuyEWasuLJbgdjAmrqBxw8RaPPRVMBVZNhvHNbFfWFTayvJkkgUDq6cvGUq83g",
  "key15": "2dbHJJr5u8PECavTTVUMv77NFHuZue5WEnEz1HEzqKijcReJEAizF957xPKDdYYRb42LzkVyrSN9JmTV2gGTcLPm",
  "key16": "3hyi4hV9rnnHsRKnh9kj6qk8NswNNi5qfbuP3Jj8cUSCN9o6ovMbVgiz9zGSYz6mK8L5vyJMa6ZKNn9FnmB7xA4G",
  "key17": "2mQgkBRVDd89k8h1VcoXyGybz5RrxNVJmPR1FgLhTdaFNkNK6EyB4J72K1ZvRKoSBbgUyydk6hx8X4F4Sq75j5eK",
  "key18": "36EXEXVbrztU7ekUSYZN6Tvcn1vEmtdBHaY5Tii9D5m282rKHWzQcC6GpziK5LUhzwbEGLcUH1XRF6CPjUSZV4XS",
  "key19": "67L7DfSe18Uk8HQhpqE36kg6pH7depLhdBXHNU2JRqHmuX5mK7Do9LVZcnW9ZwsYnKkARqceomjbhAqQmfhcbuGM",
  "key20": "63m5J8fcxPo5RZiA2vXnfAXonPkn38j9e7NaRmxLD7LKFfaYrsA4mBBWzqbqThjcotN25M69onvkqUqwYKDpw7dc",
  "key21": "5UGCdVqsqy4VBzePgaoStXZDD8bsrrUNBbJ8XRAbj56JCceerwD9pNDx9FFgn9JkA2cxfXw1KtrcbBbYHKbYC2Wv",
  "key22": "54o854nTm7fHLwbPs72pqmmxhLV7bfDHsMkxvNDsUwBmGvWKNMB7C1doFGxsw8jvLGX7b6YdssZegjoq3bNULWfF",
  "key23": "SUCayy7F2BZSxRX9dqX4i6ja1CYwbBNG7m7WNJekZTnXfGDxQUW54Gtb5J9LPgFZNqYsQXF1MahacQ3N3fGCytZ",
  "key24": "2TjhJHeoGcSNw7GEuVDDjWD5xpN8894fUFNqSsMuwz2m63WiLg87ehjYaqthE7R2fATXAKi7aEQridaJJ2VqxpQ5",
  "key25": "354nnunrPMhXXUd5P3ojCJcz1uU7pRknYCv8qt1mkU3dTVJGda1tib98g3xnBZsuAt1JZJZ6ViLxBp8xNFSZZyR4",
  "key26": "4TPw2wUYTiNKqW3yiYRik4YCQLg5j2WaE94KMPjpthBvzkeoDMVffNovKXggV7dEqZjHALwyZofqbWhVuKjLByNR",
  "key27": "gkLnbVcMGewQBuvuDj96VXkpuqNncPHFFPGRhyrwaetVgHP9Z1ewZ4fcdVRzXaHi7gPvnnjeonLbzYpSSMLxnD5",
  "key28": "2MENVEspUESjsW9TUZxQt5cB85FdvXfBHwNdimjKNyCR9Qdnanaoonnw5zQ3XqLNzCVoxcZFT1sU7Ls7a7vb44iP",
  "key29": "TnbKoWiS495RVgAj2P5bqr3NxeVJjZDYHK84oK3SKwce5rEV9yJhPDr2DsDsinr3SPS4c1u6bZj5NSnftnrruLQ",
  "key30": "dhnS45qMpmUXisj9xmBNyAQN98WTJELhzH978ffGHC7MuKCNX4X4QLdi7XqBMC4n8rz9SFNzMh2Do5hfsYckHkz",
  "key31": "3NJgcVFRLKdXe5z6LihFLRfX34NvRocXozRVbzcNE78ZpEzGXWJ7sHPBQmDny5YBF7a4n6hQgnko7gtDGM2NoYYr",
  "key32": "2EdW8S91ezxMJMmuwH85hEDJG3VhZiySAuA7VpTs16hLeX45oGpE2bfvTdqEek5jcmaJ2VQdyXbAncCAYZa6ZoxM",
  "key33": "38TdhNsAK1JoHNADW77UXrnbrwq9zx785mW5ojBGzGouobBP9HDSFKC9uG4vGV7HgbmByT9hx6AHGeBbj6oS8Jaw",
  "key34": "4Wta4RuJCX3LADqN9fKRcVL489k7dwG2ZG9qYu5eU4zi76oBnotkeFUryuKazF1vCtb1yYzUJbhsUxFo4GzrqCXS",
  "key35": "5nKDiREUTLyfNVCBGz5qwEzGjyu7gL22y4BA9kHKu2nX9LWoz4mWPW6HutZhf4BCJrs7ZR5EqWkX4wZsAa2tqAur",
  "key36": "S87Kta7jwANnZtRgkEvGgwnkwZrcqLH6aaCi6YS8zdBqMbWySmbAYZmKyKDsxvBjW1Kn63HXhxCFFeWM3ez8LKU",
  "key37": "2VMTavMKymPN5JvFRzzeT8mgGAmDBaA2EbNMhyyVx1LBmTSPo3pxYAPWiZnkqEpmxXEnnxx8ZP19Rg32qumpFM2N",
  "key38": "QNjCwckrQb2AKeesXSo5M17y84kcB4u4YGzMShyeget8BEs2Cv2mcEwM7HkGV3Mc4ASk7QyXwUUV46Ehjz1APv2",
  "key39": "4jWgxDiVqgvn2juJAb9zE43AURzjnU8gjSRLmmvYYNifWB8u28ruT9KEDtrcXf7mmGJjbPPf9DUsmnc1eRNHL2av",
  "key40": "4E3wjv9tv3H29Rx78ntNdhgg2KJ8AXVBt5H6Ebs3v1u3hNvsjkjMC2Hr8Uor8vjhvfkn7A5tRvaMzdbbQRgAR4RG",
  "key41": "2UtZebSTDUX9XvoGzXh8fQvgMDPbA38RaAqZEbk78UMdZ9Zf9Xm1nCfmTkJkGs5VNDwrdjsvKS9Cpk4sXXwABgtk",
  "key42": "4wCCXZuDAEih3AadpAtogN6obkDBwa6jCQ24dErfiZnFDAwzUUhotpN3iWgRH8WJT3m2aRjUtsBJMcbtZR4fX3uW",
  "key43": "2jRtK74gaDF1N3aKnVr2quPXCCgBhFjDrb3mf9nbamLgy15jTpKYS3j8LfLjKyq2tY3MfjdtAUEpfhzhWZcCcEJS",
  "key44": "289tyTYVNsAzYpmo95c7mdbdzqXgAiP9d9URNqsT1U9F9ryC7kSfhe1tjep9dQh1hEytoZh9H32YXPewFgd6N1bD",
  "key45": "38VadAsXXhNK58DAR8CGVHfDZGWm9YjZHJ8xKMDVn7jVtuR8oWyMZh9hdoxtdyExnT7oTtnxrZmEyNXnd5yy4MDa",
  "key46": "3gzKMW9xxTEZCrS3wQaC7HihGtedHf4cc3BxCT8gkbgTeob67AVEBv1MX7dewdygxbngJMhXTx2BS7qpZCZy3HiL",
  "key47": "eSmmCy8DjTgVx8tFaWhGcyQGMDbtHVhYhsq6RmZrW9MxzwgDMyPpS5eRMp2HRz2MAdpr6BrWiecRR8kbXYHPTWV",
  "key48": "5tshECPAhHugUMBSaai1J6surfNDvmgtqpqCtDJ6MgrSMhVU6cQPm9yYjxzyvoJn3m1XqJkgmNZnQAQvRYKfWH9K",
  "key49": "4smw98RepLPZv7WsTrNmeZxvAARuAoUTWWSQCibhN6FpQGgo55CN2vjYVKN3Tor2sFF4BVysjmhSyFC3GxjU289X"
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
