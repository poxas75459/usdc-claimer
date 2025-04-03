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
    "9enPbm5nRsQYAaHUSVbrJX9WikskwLTN5miDwWee44uYALonBz8JLYbcBm9RGj1vVowVU3jZLFfnziovZggUrbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "azjVrRTXf9y9GpiThWnBMFxykfgRFUuL32qAuywtPESi6YoFN9LqBzxBae9Pr5qG1YoJVr4efn6gDvgunbrR9B2",
  "key1": "5NANCscXhtnt4ynpNBzVBJ8tW4XTJpLZkP8Sx1YNTVcwwHSH3WMzGgKQcFDxHFUMRUde1k8f13Vsu5Y7By9AzsAa",
  "key2": "jLjGMc8yaNZQ5fakYo2aP6LT6J1i272t5ZxZMRw5WYP6kC6aoye5a3L1ogep8Sb61JJGi7CAf2bHDRCwb2QLiE4",
  "key3": "3G8E3h2w7gBr9AiVB5jQwogFuye5cXcvsoiwRPW9UAPPNVKTdMmpT1S1TRqFN7S9hJKjUCfTN5W9nCZXCetfp3Sr",
  "key4": "4wdLnYrFBvgVYfH7GXAMaDpUeUkK8XKpuPkhm96EaHeKDAbLcTNvH3LMC499JVFpxRzFLyQcieRPktUdXfMpdtiG",
  "key5": "4ZzXqSoEFB16V5igrafvJkLGJy8PrhTKoBPKeduHZYutjqxerin2c5L1Zj7Zgp557SQGwVk5XnMXDZ39AT55FDJk",
  "key6": "4uszHrRdYbm25T8ncz49ZqSPQ1m3b6XxEXK3bjymyNk5efP3ZLKB7nsSoaKN4YYkLgBGYKYYm1YHubWrAtZAnstu",
  "key7": "3dnuA2n3MFuk5F7u4m3e1SiSsivXZNii3xjvYYf3BCB89SneGYz4JPmUKzcyCzse9ymC9sk16V5XY7tfaSMUxrs",
  "key8": "5DxFTHW1aju93zj11KQCnZCPyByW2WjfrL7iwuX5MRpJAoktwXPCAGn4rhmAEJmywmjjsQ7T4xs1BNruEnPbF7Cm",
  "key9": "5swJG3vv99S1vycArULMSyrg1kV27Br3sjGEfuFZVtmrwLv9QWySCoszADmUJG7VRHzceqyGnzuWaWuBE1KBfjgV",
  "key10": "527jW72Agh532ayf4MHoMxFiCDumM2atRRhw3KGtJkSvD8BfUk8BUF6Fk1owGX8TCHjSRs1LMG4cR4MQpJrMCS9N",
  "key11": "Yg63h4moZ3PsjposY8k9jfjkjzuF837bAkcCA3oDGpRdkTxqk8qesyfsuw4uXWjxBJzHiwVYMMrnmgi11SL6VLQ",
  "key12": "438xFxxs1xzexiGsdCU3mGJmzgJqABkVcQAv2UfQmG9XYyDZhXqxUxWZth73FiQiewbdPf8AmH7CNku1pMJ9w1yY",
  "key13": "63ghqy7SDAgzZtu2ACrMTM2t1mxaZjJPjqrDgW3eRAJHjikacH2KCkGKaeC1tbFGJD3R5RqZfaNkwqgtCBq7bcY6",
  "key14": "KrnXqpNZbYXCVQXojjuBpEeii1DWR3H3a5Mp4wZ9at85zohsXJam8343dWpu3DFsEBxHizJAZ8xve7tMdvGN3Cz",
  "key15": "4Y3NPVJLdHfRM6ZM2giDkoPpqviYXGJBuruGSSfwc6Mv7nMB8Y7Yrp1beKZdjn3gn3rQfoyQ93Tz8ebvjF6SCkzi",
  "key16": "q9iATqFjzJPPYBPJ3tX9JFGkbyq5ijXdgXxrdkxwfSSR32CaF37rxySvdP3oLJHyoBGyRyKkrEvKSoS3mvjWtcs",
  "key17": "4ESm3ANy77mag4RJZ444uEvfCdrzH45TonsKDP7B5xGNMVoxBsbMEMT3u5n1o4tQPPPQL1oWd7j2cBoLSN3TVhdV",
  "key18": "3r4c2bALcFEFgXhFypuYYbsWTrgwxunveWLtXFENQAVWZCGisAu8ZiqHgmNz9QEYxcf5WjKFhjKBMZr668gcA3bE",
  "key19": "4kCFJHBZCu7ZxtPFxrtasgxvPh738GyyFNSR73EYETnQr5zXGpyRsYLK4Xmf9oBJsgpUL8nzbk8PcQmdUJqSgEMr",
  "key20": "WYxpxxbR2uYCAViY5jCgUQa1yr8Mu4MDidMZPHr4mVD3DLyNdD6Rj3LpTCKETeQTbmM69bfn3zBwRZGBt5vLDCw",
  "key21": "38JjAnhYg4jzfEQBw21PEEUD3gC4Z94D2DfvtJxfe5P63ya9hggiYBaWCT3MDvETwcTaLLrtwH2v4Wa3f3zxGwv3",
  "key22": "3N6gu9T2yjLkb7uanqmvSWem89RipZ7Hw2ofT55bcJf1JTpSCDvn97xeKEStNzVwMY6gZjC6FcVcxvu1EPr28VgG",
  "key23": "31vHstTVgujaYuT4yDB1xK7p7AugmZYa1vo5BkkA8r9coP1r1tAUazeRQHC7rotcXcXVfnbsN9L9b4vBgyq9z9GL",
  "key24": "4kCHQGgrKWi1L974tJaNiu58U57ZvCk34CeLGkJ6rmXFm9LWNSQUmxdeDrn2A2KuZkNgfrSpEwmWkgivP6cPVVB7",
  "key25": "3tehuCU1AcutxiACxJmygkbkMXYnsvSZpgEJ44RJkXgErhDHJrwMs5JRuWBQxYd5CPnhfbMRUL5rZkxHTNiBn6Yd",
  "key26": "2MoCWAvzScuPb3ujebS62KdrkouF5jbUe7AJT1xJbnVhyMraoxtKMYmMJ1aBhmwyUqcZDS7xKwRtPATpYzx5mGXR",
  "key27": "MmfzoTwzAwcQe2gnya6rAXUFMcJqUX25GaUUjLBTAb83d2DCFXPR5TtCjyiKBndx7HTvJWrTjR97Mv3Z5xc4ASk",
  "key28": "46xXE1P8wAz4NZwJw8EszoXya272RyezvgiviKSuc1ctzVj1yVkFkyUJY1sarDxRYMaKJpBr7kpK4yKWEdWgxwjM",
  "key29": "aABpFqThHBc9LU5DtcSuja6QB1X17rZrCkw9gvaGXieNMChMvX1JRGWJCpbZD9GD7k9sfxXxSSwQzyYR6zT9qkQ",
  "key30": "2ZDkswVv41DKLf4ed3nvujpDS1Jh8qQ1y7zUVTeDYqnQrCHu4L1jxGFVuwsQqdUo12K6k14EhUPju8hApiuJSMbt",
  "key31": "2tvstLSHNy5254r81G4eHUkdWqqr64KTNe69mENgEQR7SakLf5xBoAjuj39JwBfzApyn5JcZT2cdxeRSvzgbXi4V",
  "key32": "5bpwQXAQfdPp9ZnchLibrJ6YHsDvimLMVM31V1VSTXwz95GVEwkW8bcsdyUbkgyNwJcxzsYaGYavi2uPARjYsA24",
  "key33": "2GYzzxGq5UDBT59xird4BvZjbNtZF67tFfoWh8DdPZs4pG9tWJTn8MciAbeyaEhwmx3MfQoDdMUmz7j67syzQFjm",
  "key34": "26yfZb9BnBbTNSMLoTmmYz1nhqy1kV7CK5CxZhambxbju5VqyLB5HaET5s8hcGKes6TkPgfFKyC75PLvqp1vyrcN",
  "key35": "CY8d4gmgyAYd3HZFXDoX61VXtwyjuEHDKXpBP5qitCuJ2NtsZLE532kYmjSgASGzs4dtQiBP1DWdPoAyztgRH2u",
  "key36": "4DmNWUxAgv6YedokT8aE86CZmP7yTnhavr456mbNo1GSBoDzGSJ4R45KMwqDykRVve2QgRVQicZ4DR9KJqpZtGp9",
  "key37": "s7vq6bjjBVRSx9PHeAZVdaqPtvuGV9VcLMBwWRhhC8jgq18jTzPMDXm4xaQPFYTHQd1TFbkS11feL1mQA16LJYj",
  "key38": "3AfyL6qPWKSqfEjTUE29tRY9ziw2duKYisnfD16wgPQZjZb98vxdtd3h9nReyxEREBAefnWFJZXtaEHNbdgUbvZp",
  "key39": "4oPVQxARjYYd3G6hur7QYTGeCzU7QrHxRjN3oZesrnPBG534W91cArJomkD96WwSm7wzmfKa9Rb5RzbYAGG9Athh",
  "key40": "4qHpfBPJ4EZGjbgDvX6sJ73yKr8FJUBM1j5jYifp7mVg9KKb8jbuE1UH6UGAXrYUv9vmTX4qwqANHzXTgmgHz88B",
  "key41": "2H7dtsaRQn3nqgKDLPEdag7XD8mFehuD7TaN7h9rjKiocm9wMg1WV8BtAb3yAkUTDKNiQeuUUsCL2uzpjYyFhJm2",
  "key42": "3aewumam7hJm6i7bd2vRkh27tv383Jdx2UfEs6dYbXa2GxxPaURzwXGZh14T9mnz5ZkREhVpeZtLq7baXahCQqzR",
  "key43": "623aQKuCgt2RfJcm23nrsTuuJjxhbDKDmpiKTpWvViueDguZWnnfcnPgDTCCZdQfhf5A4TcAXxQnS7Wsxd7shPSg",
  "key44": "2j9McMyABnQoNAtWUeQ1PsQDJQEeCp1FjkEcKR4fdJ9YnJ9ZsCFTLKKZtxbzyTKrY2Gj9LJTnQa2JkPSpj1aMisd",
  "key45": "8MFdqAkPbr1u3g3HXZsSNtzjEN52HRtLWm7CHQyPwK2Uev8LhaCaCfMkh9zwwCBaD4Y7Mw5zUVsaFuyc69mozWh",
  "key46": "2gJpLYeRW2GbkNCkPzxnQtGeR5N4nDfpMKbYb8D1nDnbEZVPsp56FQ7qwatBQPVnVj17oG94SBBkpCXHLKbw7H5a",
  "key47": "L2htKaghXYgmTBQ4kkWBs2odH1jk4a7jjuhh7GhVjFoqVZUBw1hMAN6QLLA7jp85hJqbDXEjYQXWC1z3vk9L4zM",
  "key48": "oA78RUVaLq46jLwBDbEjSvwX715eu24YKn7FxhoSTre4uj54z6tKU3cy4gfWskVheR8hE4bPEmSJ2jo2nHywsLu"
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
