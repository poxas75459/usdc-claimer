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
    "2FGnWHnLtwDknvg5641XrgHEtEA94qe9eSUr2i9YkvSRzewrq43ATH35iRGcx8UKhLBtDapK3VcwCNMXMmUj6yQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fLY9KqxLnvLvJovGfx8JU1fxWw3BGrEWk59Py3dHg85VKV8iRrLWCD9JQm6hZ6daXvbzsXNxGYzXU1juBfgD3VW",
  "key1": "1RX6JoGBErKj4uKZJHCYhfQpnv42opDUdCTronMfraj96rmMrYN1x2P2Cm1fBV9YiM9eXPEVkbSVEK8q2NYC46P",
  "key2": "2ndT2MKTMeaT9xW1cP1RU8dVq2L518bmQrAwTs6hV2dmrYeAPC1TSnrabGs1o3VdYkf4FYePHXe4zK9jdzpxGoAF",
  "key3": "efmbwrzpAhex9yGHTEasLw18Gs3wP1AXnheXVfJrM1ki5EHBqB4E1c9dQnMKMoUdZM6BGwMuxhQ57ccFZ3T9KsN",
  "key4": "3LQv8R8A4xt464cKSe7xieaLh9wXkB4QSwkcgRofdyTAr3Len4BDLYHHgPZxCsFc5JLebBrQpiACToMCmvw5wVhe",
  "key5": "4Eao8NzpfeyXu3AFtGntqgAirEnD7DYMJXaVdJEZHpkMkKHmgFNFPizCZtAmmCUaBx1Vi9pxpiiuqTE1mKGnbTk4",
  "key6": "5B56aNK4WEHWZL6ggukyPyidRyCRsXY4RdjdwqAQmPHVj6DCvRcj3hgbbbTa9RdsM1brwgwr3tXdLpbZXocamyxU",
  "key7": "4KvvsnQ8xhFgzzTxZ6duQ2jCvb5FhPAuCSx6EEjT2qymZTg3aHN7ycRmf4umbWDYf4UYeJuMwHkYqAJtjcFRZ3P1",
  "key8": "C3EozN5ojBc1bKGBdu9jNoSeD3wrcxxrhhkJh96uqTbwZeaMi3FX3EbXdy3hpzXSSwYp96KQAFnoXsuEgje7Q8S",
  "key9": "8C8S18UrZF9aEgaDFgjHU4ptDB22jQHs77sdnfGKQSqQ2jyMCRr9m4BLAmkQ8q2Mawso2dCQTUKXhUYRsJKmggq",
  "key10": "t2N4H8R3LrFHkJ9CVCBCqsd4KVjUsC2EsbWmPNM7MRagFtcwkHM8gbvRMegZwF761WNZkTn7Ri3ehigPgGYvjHW",
  "key11": "5EAT6D1pzm6oZVgH47R3DSqLQ7HzrzyF9XhVbpeJD9xC7KHXGE4kM32EcdwkGPi2Hr9SYUSoprWBFkn4LTVqYEyV",
  "key12": "VJJWGM8zWo4skw2zr9W7rkkXmQxUbViq6VFZthsan1keFZT5duCbQCBz51VVa6Vq3CW5KbhhWWRfLzLvgjYXgRC",
  "key13": "2552GCL4bx6FfwAojXRvy6rnSu2tFaXgdmoFwAT5EfVGCgi1RUZjNyzVczxTD6g9omCXmY4EKbNUcp2fVcFD23ru",
  "key14": "5ug8ChF17tiAjCbzqfA8RU5iLqRbicAVFjGDqpUgBbe8gcvX6bdBH2qH5an7zcvvBpyVfeLFf8HgXGLrJeazyt4X",
  "key15": "4wxMtF6CQfwoejLmBRbiAkyEubm9zYvcCyUk3MCjEaVkHAouDWGwwJHjiokqULzYHrqnNjVdWRbRka7B7fURtaDP",
  "key16": "2WQhmki4ShDXcy5E33xAXPfZ5j6RYVdMCHhH4Yz79pMJQ3FCi9XSdgaivHKSDQmZgB6ysgadwBYJu8cZBaSNdHGK",
  "key17": "XrjGKSTo2cQ8Awqp2Nk7B6rv88URDCKxXhGPua67tKiFsyxZ1sbUSGoF9bdb84hFf3jacvf618eHVm7njM84RXd",
  "key18": "oH2CkRapTiRDBAMESjTs4rskNKuqNXJKn8bzFWYuFa9EZC7vtmaCCBrTsrr82ozX8SU9wdQJ8Kp4YAv7xSxzomP",
  "key19": "38xocqF8qW3W6ZUYgAQb9AnH6DSBrGXJyAPEQnZdvWjVQWdXzkAtjCBkdxYuS3tjAHpzbM57pAdsuToeyB9AQrjL",
  "key20": "42WLduAufS8ingo6RuBVj9c59UYhSxDQW9xn14dYEd4TwN4szJdtkwLQMMCH5ZehnSQY7tkzdGbwZkc3vq85aGeU",
  "key21": "5jWP8bZBo2sRGJFRpejHPdohsvErLgiPGoZikz7oNLvm59Mg1Thfr2rA6SsmswCYiVKjPaRfY4MKsCdhkbod4rXg",
  "key22": "4cGf6Sr8Yos8aGgMBvnmetsko96u2ApBQEiUuUdFUoDzWDTQcEDqmRQNGoba9utegNkkuZgbY6gBQzssgSv5Vnij",
  "key23": "3pZktJk9gSNduoZg33apP4bnmz1giHGK4uE4KX1ojaLf2x2EhRpVPKB3Y7kfcZXzLNY74JQbttJDsSNpajbZa7ib",
  "key24": "5g1nHiqhTwpTxG7ts1zQUJxSGeJUSVZxdrGHBbfrtBsN7QNj6mFC2pLGYWdUGzzqEbP8PiNAZCTm77qxNkAB6F8R",
  "key25": "4YD7TTTpAADRyKxAVLzP7d3g8NpyqgYYHHGcpd5wiNqrukSZz67zk6aMCMQ6io5goBwMGExFeoU8Z8m7xfenVcqd",
  "key26": "3kZYtjZ2ne5fsbBmTx62t4eRet7BCvB3L9cHdiYC1tvU6Z32yUZsAXfNSShDcMAoNEjt638dqAGnCndJYJU7yCca",
  "key27": "4maMyVhzKHHLNhohTMc9Z7ntVx6xFX9VKhBrHdtdwsf59pWNPZUxZ2TjZpVMPrBf9DnSNWJ1pk6Ead1QsrbmiecZ",
  "key28": "3CHDCpt82TDgadH7Jpqr8aSMt9PdxmYDSoy6AmrAUk6yVZyF3YYuyRmfgxHHLJ9sHu63uzMCene37cwy3LPtABD5",
  "key29": "57nJ38nM86UVjuEV6wbeMrKQ1biFL5PCPEnNtRxyMFJHY4wbsZJPjLsFFKCF64yd5RfzAUUA7HMdGePNRf52XHoc",
  "key30": "33Ucit2uVa4cXfDa7FR99KdLUv8UMGP9eAghFEDkihYsbqB9r8wrRpKVq7WWkkNV9ywxPdj4ZiJrDLMdKb6Bb6wp"
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
