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
    "epYZmZeVSWQ4g3KbtWU2kxsFAuQUKx8b6RnqSWDTs3qgtCfH5CVMKXer7ZJ5dwv3DbMtCGcUNF7imXQMLjJcbqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VA5RAhmG6bZrx8E6dPtGtZPvLre75GAvXa7c8MWPgM4LXJT6DSQq53aEV1Rr12mLCP6R1NLMYvP18d5F1tKwkyr",
  "key1": "5etFUnEbfAqdEpVsnfeCVpRkDTfeevVPmdoWcdfmtPXYLTJgE7JzCeDoi7z7iEDnBcpgRFkkMRgKVJZJJGZjx99T",
  "key2": "HxGpuewK12LbhBBhvZBiBwSMkSYMEcGmtaB1vV7oN5k2WhD4DVAW5tjcvoi9zTZnqH58wQBDCzSq5HE2NevnLy3",
  "key3": "2DkafTqjqA4d8ogr2L4wxLWNKT8svUDAZUihbcCCBoGsgXWC99WsUEo5TJ9PMpCNukEh9CA6uRioRXbu2fgR6jTd",
  "key4": "4EDKxWekgVCjeLdXMLMR82YSs5fzpuWBG9yEQqjoTmqaqNuQVPBKaXwzKPVwvdnr8cuWwdcbQarwUje1RgMZqpzr",
  "key5": "3mWsnSaxnF1r9zsEP3nAa9UpVCxuL5L4YvgRYJXxVGbDMm9brStYoEkDhXCb6ReXb1BXkf9NxmLzXYGxn85un14Z",
  "key6": "67VawGD5MRhco8CjBtqxBPEhRymuxVjaxkTiSPQFsG6tDMwoq1rB8xfXpfmuizhN2xEGGCYTZgRqoxiV1REhtXDc",
  "key7": "kQG3ZdNmqSfzVYHtaDykyX1DmxvpX1gcoSwwU9cErGuU4SvZGvHp29jxmRMUxvGMzx85jy5bgxrhQYins5FGqa1",
  "key8": "4UnKgY2bz1xtssntJjfx5UD2gojQFAnWcQxANRfQvarFtUFPLCNd9fvRdhu5zU5Epkschw3zWZv4vmbwukoPvE8J",
  "key9": "2eMrB8RWeY1PNtFfkLxJpe1BtBAQ8todBNhR28Jc1ScjxXAJLRVHen9qs5foN63BySQNnuCygt9aBd2Cs6oLCyhb",
  "key10": "4MzusDSUiHH8nU9qujdhk16RRvR6EXF6s67R3xQGGKFfW4Genp5P5DmYnSFPyHoVhYhvXWMks2YyicmotCcvXxyA",
  "key11": "hz5kVcuvxdeRsziP4VZVsEytoq2wzDogWfrphU4wsLDL2cfGr4NXqJEx21rEzYJyKH6nDQz7N8GzrS4gQo7vwtF",
  "key12": "4PajcTMn1k4ymZMBhpSWK99MhU5rZo5rktMs5ogNfCYwWsf266NvxXKZvQs1wh5bLGM3bmFk73ysYhTRsx6mFDqZ",
  "key13": "3bedAr7pdUmbJDkgVV3ivUY8btEDvaDzixqCYc87M93xGq9F5ozh9esYDFiYB8GDe96oxYgBmGCGu9L3LcTFdzn9",
  "key14": "2BCm1Lf5a8WCN7DEdaqVPS91D398i4d63HdAw4TsswGoVLXmzjdfdadziDT6e1HkXKYMqQCAjmNHJKjyE26F3iCC",
  "key15": "4dmXE3mPCGTikc9Eiy9vFD9ovAtcQvvVJqNyEwdpLG7L2dTeKeo1Pzd4u53Mi7KZZraEQRrGchsb5VmC7wJW8GnW",
  "key16": "5vVpANfjgUrNzZdMRyTZeta6DUTxCYbDj8HuvCW5KkDstUvBNm3MjQ2mK69TN4Z3kVpTFvvAAkFgY9oXMvHCUVmp",
  "key17": "66MXnamyjztyHSh9EDRSMY1jnweov7Paq5zZPK18kCQU2brvhd1VxGuNAxbYNUm24emVvu43xDPb3f5bojo5CgBy",
  "key18": "4TJ1JE5JHNDMwvBSUcz4BhpbaR3CFRsJL2dQqsPXEXs2TEUjHBDBX2rXGzfciqeYPPeoUTquHsb3ixibYGjzroG3",
  "key19": "imGzjfMtHZaYsAG3cjVJ5ZhdeXK8QFVN8W5tK8CbpdM3rtKABQgCSrdyWmh9vX7hsojQVV9nF5rm4d7DBiqpi6Z",
  "key20": "2Gqi5zp3YSW5x36vqLu52zwKoaU7Ub3xswcJN5prqhfW2Qg3BRVfSJRu3bbcdAWEey4mxB4C9dTCzJ5EaLgyX7WE",
  "key21": "MgqBVNZtSLdkucAmTqe5HUdD6q6JdeVx3tc1Ank4BmLkiNHqiAEgoT6WPZohVgPectxdCp3hWA3ANExxot19hn8",
  "key22": "4NctrvFBhA2VdGt83ufJ5LNhGN4civNNYn1r3qz3E1dt33x8i9dPfjXt3cctCiUymWyoV3fRtcbmkDQJAXc64SDA",
  "key23": "PaL7x7LpV34hnYyGUaJFp7cRum83UTpq5NWCcRzZc8DqMRaLwQEsCCFGFaLBXmJhUzYYFZBr6VJYvLmBmAtt6DK",
  "key24": "3sVarD4jKwkB1bNcuwA3ifFZf4q7vAskCo1tsexdrXH89qVNhdsG3A1BHUNtRvgAKgF7fXGokbxTFzcm1cPrfLX3",
  "key25": "5PkhhtWHGJMJMfzJJLd3GNPZWbTAVdMq7mK5SrJWyJmNgv4dGJqt9FkeKF2sCcVHzYqkkrk38Pc9NY16e4G24oxN",
  "key26": "3vt7BJQXKnYafC3H67jPtMqfYguz1Z7ZZ1adxGuMpMjZniv5eGy7jvYoaxUEZbZaLYX7bBbpFZmWwKguszkCZUkZ",
  "key27": "4M6ztUvBnzcQEiu4ZLtsfro1ptJv9nRKtvq8BNiAHLtTDXvAufQKSpFtb4ZXcqwK9sbqSVf2QQWiPC4KA8xNVcnN",
  "key28": "3FxkpEQbdPPSbAVGiVdaVRmWQju2mfDWamRQDdt1t2nrSLsZFBztHaA6JAihdWtrkaMHCqGae2hATSzB9tB42Vmd",
  "key29": "4QAdWENU7vHzQxuod4EfqW3enVFiBE42CWbsdvbjSCYDjtdUN23uYgwTj5uwom6vQ7Qb2CrMxhN8g3Yj9ND1cDDX",
  "key30": "24ZoAZzMHjFg289txXBAYsfA9nr8Hs6exDMZKtYYKqpEi7NcxYPmRcmfE32sZpEyNsC9oHokUHG7FQULXyfSTi6e",
  "key31": "4wf3EiZdo5dhhoXHiTYs715eU2m86txnssksg89Ad6rJrunKp9gEAZUcmrk3ChNPbuu1ZUopKDY6veDMRLZmvzYo",
  "key32": "3i7o4JzDmYfpu5qL6fcLxYkc2RJXrV56SiHmPeYi3wYp1jCoVRjcst1jm1RM78gDbctqcmtrqzsmMBwPhjUFjcJy",
  "key33": "3SJ1eMuGTbigpvT63FYesudUp9dvTRhLd4A969Jhk26jKaPkTFjVXzTQsBZsWtqyK2iMktQehuXS1vfQerrHad1Q",
  "key34": "57obWvKKGcNPDHsro6WMoQMcw3bxs2uhNniUS3N5ebzQS1n3aameX4kuukbKjneK9R1CuTzxe1pHL8CunfGP7z7n",
  "key35": "3Fr8vJvsgVXKepCVc341Z1w6Z3mtPXPUD4XTduT5mKr9fj9BXhHmbJZ3JTwkLwgi4Wb4VBxB7o4NkfLwMNFgBg3V",
  "key36": "38kJrCccXpeKRNQPcf9UYe7pd4tP46qvvmvXQhogCzKQdc1Ky6GQ17JTyqAUryoqLZFhLFw7wRW3scakMe7dBcXN",
  "key37": "5RJKTFMtThPZVK6dRHhPbo5HWrxgQGypQ9dzdzXfRKNXAma7J9hJSq3itEa5dqucbYMDkvFK7wcV2YRra5R1UaTG",
  "key38": "5qCHn5fLqoDeKNXmyLdLj3k9kaa9v1ghadnMhR2KAqZmCUx2J5rUbefeCbvWXCURn6eVcyQQ3cFGLp7qSX6wEVeG",
  "key39": "4w6dEfYE1u6RXYo3ej1bkS2EstPXw9mhkXWxkHAztvTbB9gLc6shitLbrjfqbBqbhhCo4hPLM42whudDH5sHJ9Ft",
  "key40": "mKMLSeDdC1nUSC4ahZMqn5cMfgPhkZHyBUmB8U2b7brK1RiGxTZCg5mkGjqbQUcTGxTwfLfJwdgawZRz4pxqvdS",
  "key41": "4AYZUtQeCdXNM7B5DqQSyMfedmZRig1nmzQpYLg5ZV3hZivnTArHVF4TtkEZxif4MNsgFEiGffQ6qPuYVchqsy7j",
  "key42": "678iUFLBsbxS7rNXogJybnDHFPLXe6JkUjdemLWki7fHUx7YewMuhid8yhFECzoR9vgUXwGbANh8uHqDqNYYSkod",
  "key43": "2rwLYS9NNeTF5ELB3LuVEB1hZTNBGrc5zSnWebXThabAVFZ9iPRbWwpEyfufHbdEAsqALCorfS6K8c45NAagXgJ3",
  "key44": "2BpnMHHBErgDQ8EnJ4umppMsenwK8PHVoY7NJCffMB6GutUiDqGSqP7NzmisY6MwQnmLaocu1k4n9z2s6do8xHzp",
  "key45": "2MULnEdCYBQkUx5wG4S6fbeGtpiXYrvxDWsV3CcpEaVA89FaWKnajQyUkmxhpdrFbsTLA7746DGuLo8pA8SnQkCn",
  "key46": "63Y99nK4WrcwswAwerrK2i9BkgkiXyvvihGFyWLwT6kFCrup2szv9esoKBSJJ2XX2mwbkdKisaY1Qdop3dHW5Qtu",
  "key47": "278Va5pWBQ8P6ZUq2pjrXXc7y48s8hUkg63yhv13xTYUwRk4BzNHYWam1XCb7y331HxVpQ2aTa4cNExgZJXS7bkq",
  "key48": "3NRmZvm9xAtbZu33vQMz8HG328ydaaP8b7DHreXpTjco9uBF4QvWJWjrWZK6aFhy5JSvGRbamnYTUMHGVQaELsZL",
  "key49": "2w1yd2m62Hsen2AiMKPFmWrVXw4KS3Vf9K7etTepKBna16m8RvHuZs8rMWU4uYsNFr5Eg7Liyw8vLx2JNqSEXKng"
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
