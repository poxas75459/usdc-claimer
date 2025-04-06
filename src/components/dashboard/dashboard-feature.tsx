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
    "3VLxZPwrhJNE27LBpsgM1XjaHKMznugfet1xnxWGYBA5CmsMvxDunZgfNahE69PpSoEFpgWW4RGba1QqbYHLepeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EYEYkF67kgH8SjLtos6fCWFLdcEkvs39tYuxvCYWtrTMrWkUq9y5psTYSPTXavPDGEoa8NbqmYrzFt7qDgMz9rj",
  "key1": "o9wfWyfBw2dfdHz3yCSGyT5iHQB9ahjCHaEjgzmz8EfeQv8cyn4vd1wipxrTe1PhXCQvhGXH1hk7fXvPURWmZjC",
  "key2": "Bz9y46nGM2AcA9kzexVS61DCABE1DdniqexfG4UFahRr8nweXfq9TxJiJ4MkEVnV9MELfHJ3ewWvLvz9XyQHszr",
  "key3": "662QVjC1vn7WADES5zvor8b9TYwHt8EiQ8kUCvxp59B8BFxvb1tVgMqkicu6eZJgBnKjbrgDFXCoNskhhtex7LqT",
  "key4": "5iJwVMPfEyFe6GHXY5HV6L18Svi7MpFCS3i8YP7nYXazmokZMd51JWsmsreihSdtVFQhq53hp7noM1x3LfPTiHfM",
  "key5": "3JBkoTv88nptGBy15eteZEn68zHPgNdmh8K2juuFeKxKKdF8U8wEjx2iJFes4bBvA8grjP7bYkULxmTsB5TRzkd9",
  "key6": "5ughJA8fhkBxKCVZq2o55YXBhxd1Ftu4cL8eX9VAnZE77ewswTw7DUr89CpwV789E1QAT1DZJ7pLhyUkoHTQfcar",
  "key7": "3gQNoHaR5Zp7aBXeyiWGVhzQRJYSWmR8zLJ3fkGTqPiGZ7tbPEgZQ4HG8rqUHrNUHojMwJ1C6eXjbsxzvPNqvENf",
  "key8": "iXbzm2iv9ySxTBqYEYts64LYMN2fwudyGiBXb9N7cnWasYaD6ugC7AjyKEMG7nCrMNePtdXEU8ddboj3PrfYCPW",
  "key9": "2hpTZWhqLEvmWcQ1J9eyHRoXcnKdgKkM756V4puzk2BvrTjP8pvsSTfqiN9boduzZ48pXpwqAM8ExJeTnA1SY7iz",
  "key10": "4AVqca3y3A9eDsjW5qRYVunoicmWieATYCPym9MoCZQxrarWbpkQ9BJ7rrUso33c85TkrziHhhQUFWwcE2CkaDYh",
  "key11": "3d6tUxK2ZKprYEPGizjp85p67B3uAcUT2TpEb8ek2gR96VxaeY35R9ayxdZQUbiwB4t7eXoGvJqoSLy7AEnvSaAR",
  "key12": "tiEc2J4V5KkxQ2AJTQyZdEqbP7FMyNqfJnNbx94mLY8wD2tsUkjaqK5ALt976pXavhaB1xdjsFEkexPp2DUjvLV",
  "key13": "3KpG5aJQ9nhyKeZE3YU5NAaxc1f6yqMC1f96QPK3skb4APRL2KCkHMyfVW45PtSkGj4PmMtzBe8NszXLcihL5YLq",
  "key14": "d4UimHGRMZfqyQEZrjq4pM7rezDXci2jYJ38MAff4Naa29LUrsTZ1cf7Yv7653C3E8XJ9mRhgwg6PJuii7gPZw1",
  "key15": "2a8Q9vBxDNXxCe6UGgQRTQk353FvgXZY9B9yMc966m95EgMNAaZtB6JrH6MN4CwAvSvLZTy16ArGjsXHMWEXNiCQ",
  "key16": "5K8VLMh6rNdsCJCfdHwBA16WUHJEBdfZiPSgD77EwCdu5xUT7RWq42WgRBm6JUjB56h1dxtozEU7jxrKesUTMeo6",
  "key17": "Vd3u8jovda59T3nh9DcfWJvHFZVjyveHwTaBpkSXKaMf4ED9UEjh1pvgqnXz68r3x6qyEggq8HvDXnGyUPhnc9g",
  "key18": "5UzEizvNuc1qG2NLEtNNURDSNK5eXp6j5QgyKUey9EG446btGwfqX7RCvCKKsHYrAVY6vcLdz3y6EeXBM3yWVx24",
  "key19": "nCEksJ4Gbk7N8MKpq91ue5B98rgCQKiBjxYQ2wXpz99g5exkKeev73r4WH6gh4Di3LeWafb2auT6QCT2xcm2YWN",
  "key20": "2SW6gTRN4A3PD3hBamxkjuAGBf4rQgM9n6e7AxJhkEcazLCve2eoHSazGgJ5S4EZCyWTHCL7UY9UqoyDwVGZJR6L",
  "key21": "3Zb9bkcLzvLKb4JMnCKg5qcDsxQNYdEx3p5zC466GP2yd49Em1d7CibqKdaQgLQePjFmzdPFvw9XuSvz1rg1b7g3",
  "key22": "26wdh5yQ1BKAzhZVdxobuLj5R8isM4vPcmK955NA7hknDfFdJP745BQW86x7eXGPJkyJJ7nrApMxpn47A671112b",
  "key23": "vpMrpC5gLi3JmPV4YAbVXiSF7feQHETBwi1W6t9ojA1xK9WMLvunqFWX4JM5rrt1ewXdBSUgxMDBGzqy3qNAXMH",
  "key24": "jwJJfxqt46BMFY2mcXMnTfznx1Hg766kEGvMrTj6gXEzVQfZzCkzMkbm9fEPU6DqXWdcXLciUMkDicPHmk8SsRg",
  "key25": "3J2UYCj6cVsD6Uk9Ft6QCEJUJTUUrNmkP5dr32AXkgkjZzVgpRBnMiJ9wvbyMddbGvK6i5A233rPCHLUQ1aWqWY3",
  "key26": "3pG9xQ5qwTVa7RtKZNTxcqyogdHxJU4bCnpk2N18waDhs3oXeebRizeectv636HSWmKKBaVxVfnLvyPmBX2tjm1X",
  "key27": "3N8yBQxqtCHMqn7mTfTFPkopTTPs8UgZknM5REeJmd2eo8UEkHTe3M94moFtBTbyWiRGPuEDRB1G7ixjqfcut8Uh",
  "key28": "2uzeBGhSEY2uvPZYZET9RPeLacHsYHYkcYxfTnW87ybntE5jdmeA4opDNgaxs7dwfvbhq75DrRRmBTWc1QZrpV5o",
  "key29": "5KMzRG1fAsTCfTNTPQ3dDhfmGdpassSRyj7qrbi7FDPK2n6asxEtcyiUYQx39PZVDy1jahGBzEYkrswx7hKvikn6",
  "key30": "CbGqXmms4CBY6XHDD5XabNQSBkkBM7HnCD5xYVg4my9b5Y2GMx4gXe4DfC3ojvAMePvsHMGSqhdxEfmRmxKunyL",
  "key31": "3VdEUPyrgswwR97y8JqjgCyzGS8DqV3DUZSsCTXkUWfNm145PoA15CnL1vSg5UFngPCXUN3RNG3C6QEXQdqUNXVf",
  "key32": "5mLyHVFNEEFh9iDn3zsVahqq7JmBYAw1378N1mrp6EZC3jmK5WD1DQqH9Nxy9YHgDFbneR4eCtoSe9HFLxneeKnp",
  "key33": "4jnJovykaAvuup9mrLZ9iUj7xj8rSfvm9NbR8Tig5CrHp7m4YpapFcbUmTeoLkXJrjYyBTUQN3ALfRQV5iMTib51",
  "key34": "4W4T7TGU3URpzGsiKPt1ndyV7bu5YBLChzPaufzkMptrNZVh9M2VTFQvA8iRJ8fpv5wwnzmM5SKApX5P7viDNXsZ",
  "key35": "2JjwrUi58qiEZb81AGwnU782KAdEmNabJgzB3WXG4F7SizD7ooycd3dn7SQfrpuD8pLrME8y6H3KR4HEBgZa2eFs",
  "key36": "4SuSbBUNaf2UYW1jPwZxTZcMVJk1gSQeEr8o71iiH2azGbqkZKBKE2KBoYybMPZHFwpy4baK1fUkdL6iR9bi4Ye5",
  "key37": "QvwCqrbWYVdCroHiHmimkLQaJk4ypxyARAnrPV85aNv2mmLQJdH7kSxgLb3gNuQtQfy1WrXB21PfFasnk9pBKPm",
  "key38": "2VN9zETFZaxqQaPVmHS4AppnYreheeG78KdAcUNkDbVGQAZuuR3Cvpnontzd21JH7ZYft8priHmxuAF8PbXw8RWL",
  "key39": "4H2GdQmcXwD7QKArJ3AmStp4QXxEEMoKpyqDtPVrkfyDAgfvA9QHnSaoqq3rnSMGkyTvHszdNMYHCVWq2ginC7o1",
  "key40": "HQ9VrXqGkoFXYkheso728pXPvR3EV6QSRNDG83FbEnwcgEXEHbYWARhTC75joEVDsVVf6NeUsxmT3kVxn5iryB1",
  "key41": "3ZJj54CgpEedTDwKWmMqT9Vz5mJWA3eLcFX8KuJyKsihqbJ6rFauxMBoGdVzyy1MkxrTgJeEGsh91u6YbpRFvk1w",
  "key42": "5GBqnSGuPpUNAwznt7xmMAectw6uDECDe85rFS7ui9octA7Ws6J68BHRr7xHBQqsSMSmxBRbTY7bKjjrbdhKN4t7",
  "key43": "3xoJxZ3yUZUwsDeHqCK51osvYkZu7tZKQmFQi9wQ3YZTEvN4cLRjMG3fQwegTcvWkU9DTq7ppBDqtBeCBzRTRQU1",
  "key44": "9SYdtuU4Ek1FzUHxRKzaJVZLkHRo5zs5mxvpym36PabsrG5UWsDDgA9hium7DPTbUbmmoVdBoPckZ6tFU9nVEDw",
  "key45": "4fsdeLAnwuXdEh9F9uTNd2Ef8qiYGu4G3DbTRZEFBPAWVnDa1peEaTn1D4GTc45dL3PZhtXEX2igHNrw8MvZmyLH",
  "key46": "35cegUNLK5578bryZmVeTRAyv473zyvzfo57NXXCqm4LbK7CgZ4eixtGMXtC6vfTboaPCbgqBKyshX121t3ewGDo",
  "key47": "5vM1q8stCYb6pgxYUAdKG5G7vdCyB65MfuiKdUdUe4nTXtS17V4MgsQgnPFMfvWN9Y2Y69cs4RGTL9CWsKPmM5fr",
  "key48": "3fgCGq2ZBAB1tbZgxZXUHkDcAsJmrcKtpQw7THMcNetpgo426xXdnLfNrr7VYGTrz32yhn6e5GtRdNNEfFH8qfqi"
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
