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
    "5rU85NRiwePHWLeDqWGqJRtZtEXZ6iC9PZ4hUeGwHnQYpVqtYz1HiUEYEaRoxHTjxg3snzmqkLa4dbnoVZ3Bfvj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tro8Ug85kAmSdProiUHPXVVCk96xFc3dMBLba9oNcSTGvZSGQ2K9V2RLBSXiJWQrgUMavoEMz7dtTDhpEx3heEG",
  "key1": "5cZD5Qvv3DcFBP1GyxPvbkREFzbfkYBkckNkjg1Li1CkdwreBSxJVzPyxWPG5rxv5NdfkYmvBsgf9DYCo1HPBavw",
  "key2": "47pSJnopfRxwvaQtjU6VZByJDp8fWhZBWW5TtcvtYyoxANCWmHK8d3k1fAU48U6RTj7zh8TfuCj1kfDfputWFCN3",
  "key3": "5ZEkxoZFTukZPXQ5ft2zgy5uDaEvaeyTizStCLaA6c6KyUM7egs3HqTg5iMetuh34YPJfn1bPm42SN6wPUqVubUA",
  "key4": "3mfHLFBB8mxyeFVmdNmGBCuBK1rNuZqpsvJa4p3P25dggUqmGertnJ9mycP6HZmxW2Y3eutczwZRZgavdfUVfB9u",
  "key5": "4Fse4jrEBs8FM5uwQgPrPapYhscbWx3dWmE2J8uFjWSmu6XLbvnpfPTudaB2qwR2W91yRuw6oz4W2YHjWZ5a8UAF",
  "key6": "4dM2uW4teNiP2KJZYfp7yhjbpvBQNRp8TtcoZBsSu4a3fKSERJwcSULzse6hgmriNUYNe8r44KHVtTiTmaAZsX2q",
  "key7": "5o5awNj6LYVZnKRYJmCjHwa8p8g2n5sraQuAfbAHgucPc5MsLrk61D1GoZohfC3RArwjsPveycYbFvKGpsFkJky7",
  "key8": "3zxriVxRu7fj2TCtyEtu5wMijUAjMVBgo1Y8HVtzQhZXkVvNB91mDiWRQC5JgSJgdftnT7VWJM1nMaW5v7RJ64MP",
  "key9": "g31U88rQYh3E42ioShyoT2RhDZnaGrbFhUz7io7sUjgyGmtdaPRZ87qXkAMtiLf273XkgAD3VbhjxhrXLiPF6FP",
  "key10": "48qyPv8qk6duzcXyXuqB22k9wSUM5bWsEkjNmM6uMe28ybcXvngJ924qQibujHUoNraSU3VCNK1P4azZMqawdAzR",
  "key11": "5JBggEX7NYXyF9xHDDb3kRezbeMzd9Qz6XADV1T3hpmU5UW8gaYvr2n3qYBujxtsB3uiSeL9WsqzycN1XNbJrR6M",
  "key12": "3npbbT4u1nEGhn1QbXKw4AwDspsUZNkFnqzKSAchfwEvAt5X3GSAWLCV2FVQMbfAnxgSmgJEnLBMKb6bbYaBfSM",
  "key13": "2zUMpMqoEzX35tVfejTyPsps3kQfuUUFawayMG2vGaBaH5ZTjPoN3x6TdhpMhb1CwoPKaT53sbQDB5nM5jYt6VBn",
  "key14": "277xzUy45fTpW319f345WtcZnrx2mQB6m3Fk297f9Fu8ZxP74YAaEqg3Gwqq85jWeJSnf5amAkTS61Fq4Sg68G7C",
  "key15": "2iuGjXSYv2r76eZE9p3Jh7ErQRPQY6dmdL2bGYu8zyhhnV57ZrbcyFHcPcR4kcDi1XiSyBAnNKsABg234md2s4ta",
  "key16": "zKcY5SahYxCqDK2hcNT1BRFAoQcgjy5vS2CW3kJWXgiiZEGRKZknR58a8juTPFBMeK4qhjRGQX4qZe14iLzW9bx",
  "key17": "4PQ1suhUntKYibUcMpALixanzU6sPC9K6nGxJX2pjWUKz5raHY5wwopvdSCRRuUedr1GR7ww1edZQzjKXEdkqUs",
  "key18": "2hgEqm3HXEq2xQvpDGoBjNMt92dqusfr9depbecQjHYohy9nS8Yr2hgm1PqJAkdhBwnZRHuvxT6ioNUqAT1DpM4i",
  "key19": "2gs3Na7UfGkzKP4VMreQHYZSi9PBfyvR4PRRXtc84xNQSeJitpkV99xRPyifubKHGYfAJaCAiqpSjEqXEbMRT15Q",
  "key20": "5pLQeTh73q3GvuaZbzXEjWovDg6nPXjCntLVKu3CPeNCdgx2SBGqdSjqXXGSh58WWrBTyAuySHfE6wm6Q4u5N1DL",
  "key21": "57C6xjjax9cSWZnnHnSADYqtz9eBuLHqni8gYzqz5zW7feMjMefvNQzYLKVKdLEwCWiMrznEsH2hg8JR2JKypTsn",
  "key22": "5aSUgd51ee2wKEMbHoNHJuxy3rChtnjsXMV8oZ9Jmv78V7eq9ZLa7YaC5r6yBds9tx7dcYuWuFY4nBorUkPLB71J",
  "key23": "3BnSTY169CbwzefkNv1SCjfd3a7uBGN7Y1LHBGEBajikiKCju8F6MPMiCGYfZP6KzR7kUu5R7p1aS3tUF4rzMjyS",
  "key24": "67Hdj3gHExmgWfGUzYgjaqGfo4HpuZM87NRQDAwB7fNvzfrKB1Tgghrw1eDM6jooAiauuQFkTvLM4rbk3bUHK1X",
  "key25": "3TsvFgQkkVW4pg79Adm3ZGo9vnNzJfsyyyE8Es416RHwv71sejgUcScX4YNHxaJhuWazPZ5yNJzi7Q8DZgKCFcaD",
  "key26": "6jdEXa9euiDYAdy7KJxXoE8KKqsXmMWYwPM4o6EsLTAxP5HMubj6M9ThztqucSS7jk1orNy1KtvXfNBdCKsyvLB",
  "key27": "3C67e6DEcjxPUxQiFV1Xf45UbA4uQHoCz4GeQVfPEjySJRgDuwbbnijFFAXuhwGa4Hja1V6iDhqEWiqfe9o1YNei",
  "key28": "26wjtyE75Fn25AVin1XBX92jBoyw41dVMRq4qmyRaFM2b3HpuLJc91hSHZ5FiPj95s8AK5Tg3ZMXLtoRpoZCNmpi",
  "key29": "5VXar5PWXe5jBkMN3Gtdcf8QeK2b2iBA5jYK6EA78snXeWny4fxTwSuSsRANPZxnpZ46qFgEgYc4UcbKfeHH3bxt",
  "key30": "5BpnAUrQSTq2BwqpTaHf81co9rizpF8UKnBTSgcqZXhWg3G4JTVuKGJcCntV4xCAztzi8AvtUq3tV2uWChv5JgfF",
  "key31": "32S7WGhT8cMgRTMfr3ysAT7MYKYyehKrJ6VoZPCqi6tPpuMf6Nu8oXk9DT9txo34R3h6L5ztcgnxiCnQ13xc962Y",
  "key32": "25d4uyVX9WYC2oehMVmjMjTR7Q4ZT4z7PkrZZNWE5P5QiU6F1SCxU8tV1bqMvY8bg2CH5bvfaY2Wx81t4tvQmYui",
  "key33": "5vrGeqsdPLMiZ2H5nKvfxkgYTTzJSs29ncUziW6MzV9kUTyw5Uj1MWiFAr9AtwrVAqGeg8Tuz7P6p7o5ZEX8JJzR",
  "key34": "2wztSaPseeCTVAWVDCjarWrzdfyGG1kUcpA2yurBjxuiuwYJgqPSBtmCb5apmZkHz1z5YdBfNkF9HqiYBmJnC2Vr",
  "key35": "4LiGyTuJxqBqBfySMYhxj79WsyFSFfTLCdpr6hyGrprUVmqapzw1aCpVHqPt4wau3zmDzCTttCgY3KgEJiWmteEz",
  "key36": "5XzRLYqR6i5Vc6xjEomScp1rqYPjwCREUzc89ohjthZYFGgdwyPu3q1zZtRkcY5pNpingBW4sEbBqLR3qhQiohV8",
  "key37": "5XyTAPmJrE1dJPc3KxQ7gqBJ2oGd3DLBu5W1eTvGU6vqXTcib8WR8gRqwnKWb2CynT6qgiyL9rFSdVcK7GkYMvPb",
  "key38": "3bWoe7RAkTDTBmyfZASRRynigDx3zdV1Ew33KmYtvtzHtaKe9ePuMYUShmCKoyoQ6mx8VdR8aQm4nwrfCoN2QzEM",
  "key39": "4b6mLXjSLtt7hmqwaW6FUYFqx78uWQckCJYrwAWg8ZTg8xR16QvDhtJkQd1M2ZhdWxXSj8JAAWSY2u5qZoGadAQ9",
  "key40": "4KAFPLGJMMx4iM5QdJHVVDck7LVsw7d7JCfMvvUqYSGMG5mkHCx7Ss6PW9FNVs4SnNCg4zS6ttcQDw5ajU7gnCNz",
  "key41": "4ZyWp7QMNSYzpjoskLkPJLiM96EXEspfBoVrap11Wav38fbzuW4LtFRic85d3F6FDpkw39hcH421Hq1khrDcYWRx"
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
