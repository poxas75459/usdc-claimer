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
    "2W3ik7UVT2PZEh625zkmrifWj2rbcfBbgMTscXvW9h7bvVYWRaMvn4d3USUBdYgz5zbCus4dQju1vUeWhYWnn2D5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wfmoo1EnsTL5znCS4F488t5mgsT1hGpWdZ424dHpsR4EpR4P3qMnmJSencC6AAgmWu7NqYX2hcNfK81Hcy2JTkD",
  "key1": "2DL66JwUAi23mqtUGYd8N2KDh2JfPBhGudEZ4nGAiGkuYRqt3po6QiUw5B3xBBdQ2Q5eqrYxJtVeZpWxPFXio7U4",
  "key2": "35hjNtBWSWMHW4mnmzgRNnYvczzZ23BRg7x9tzVPnELhEVL3MSDSCxtqaK9Sep2kbLyb4tARFY13eU1egz19Vuaz",
  "key3": "4zec1RmzzW2qHPeVLBxtWNqb394E24dX4mB21w5fo6oQN7Z1ymWUeYtxjJrVJMfNwjkNww5Vna4UsmcuCrbLKfe9",
  "key4": "3hqu9GjyCA5AWUeqQ4PFaDpH7W8EGyGceMBsopTWzzJ7wkSgRpdEAfdoVAihAM59zawJnfcwNxBJ3tNUSdanr7YB",
  "key5": "3KdpMkE1jTPvFUCo2dSNWYXzXRGKcEbgqycjz3kRBvue1auGFP2WbNdwAmHZzvwuZxjUnTXHaz6a38VfHkGdY14D",
  "key6": "Zgpxw52qLoC63mn8inmDAmFcFxguj9s2KfoG1jacUsDjukGetd1JvwzPZ7dz2t9M5GPwb2PsLxryGCJ774o2Deh",
  "key7": "3zbAczn6aHx9yqpzybwhCCJ7vCMVbWjMWB3iK1FQBjgbFm6kNPFXVfgn9tUyKvWiHvJmyw1ciZDDCzMkjCJaBKgn",
  "key8": "58aDn1GuQJQojKVR6EVzkBpVBpq7wBx4UTWC8c4cPpJGvCrniCgCF1cAH6v6caidH9dnj67ALZokBXDxNeTBiMrc",
  "key9": "42PfdDFR4eyPXDq2SGPnKBaG2SV5bwRPYKWLf3SNVPtYnT715RUMg325BKZXpGRLAjd8e41PaF99jH1Rn6DHNcmu",
  "key10": "5Q5Mh7gHpawzVYqhVNX6rev7nERVHsPZvfx5ytXXK2vJ7EFz2h2Cqv8d89VZwZd4TqnD5nh7McSRqbpkxta5Kndf",
  "key11": "59s2YPfS8KCgqAJd6DMNEA6xYK6Et7KnBdKRN5dJp3NK6RoqQSBUXd5dBV1BWHZZGkW7jUpGkF4v7pFBQPX2KnrS",
  "key12": "YXCt9PZX3NUp4KF4km2hL9fVGVFxtXzCV6Dj86RXSFbe95LtpQAkyeLPZkC1C57ApUMXFRX9LtedtkPvPVcjPry",
  "key13": "4VxyMgx4PPhq6sA7o8ghdhxNsNSX5LNK1J6NNw9G8YWALtprhAHiMXSLYFQ835Dc1ieDTwn8Rzh1j928o7DUVf9d",
  "key14": "4Xs7tYugaN7fUHoX5MaHKajUCFgkKjLJ3c8hTk3ppXjZvnhXaYR4TmBmArdrrCiryLzijda25QaSivdK5yyTtWBk",
  "key15": "5kYiqUFDqKDF15HwN65xkQhHN6e2Hzam4k5AoCTjQxjdykqEHBv33fRCyTkoEHVZGP7VyRCS6vJwtMMCn53bGqZk",
  "key16": "4DcKFY9iyL4uSpShWbA5ATjhLqEoG7upNedR6LCC3WR4UMySyYxCLtY7i6PsoEeMcRCRhjjtfYKTvqLcXEviyAG6",
  "key17": "2zeG9uS8VUo2QBPRKVGs6PGHSfvEsQnV3GNca6pMFAkiRadBnpbznogHyJe7qgryUVWyecjzVfAH1F4iJTDBJAQi",
  "key18": "5pEarwi1Cb7RVNHgr4EgQurusUxCzFhwW4MsEkxz4kUQ6opEYHMu84kqZhj58MK3EkxpLsgX9ghoXrfYodNPwmVv",
  "key19": "48jfb4aFRrJBkRhWxPz9YaNPgsKwuFQRxWtsJK5UxWXdnnky4hBiWxWtQRSjcJcKj2eLaFH9cCzrk9apvxbzfB8n",
  "key20": "FWkoL5DpGP7P1iLunY19pJifTcvEK8whZRix79yPyy7nD6JNLXJbd2FL4Ck4MQu5iS41tbjpVdteUtdTg4uyP1v",
  "key21": "35bWNxcaV6kvFSDP98XwbMRH8TLT22XqLj3PcFwKskL4Z2fTruvfPJZj56gpqL8gz7qvFkrfqYh95RfpNFsCDs6r",
  "key22": "5Tavsp2EUcqsRvDjSXqaZyAjVyYGqWvWyFPAkjGeoyUUFLt5kpjQtWfHWEGK1ohqq9NhLKR2boYNFBiZE9c974CV",
  "key23": "bRrGoZuZhL2BRjxDKAoqsV9REMN7CkQA3DatL5AZL6fDwuubNDfsNNSmxAtK7119LaFeKjLcKr8wxSwrvQT5qo2",
  "key24": "3fhuNmjdfNw7f5R1mNdX9WX1aNWTveb2YDonLnq67Nq8JZuV7baoTBkbJ7QjTiygQUKynsbhufouAnXbWPyPuPei",
  "key25": "9Fi5KSE5ZWY6mHwwHVNxrGgQ6LSzihm797GwSqUnvwbLZcecMUeexY4UZbuWoWMkDRrHrbzJZ4NgTSSGhphVKYm",
  "key26": "3TyjkT2k57e21hUxJHJiDxEWpVVTwJ4oBnkJ62VZttM5vru996z2R7YZbKnERFJSNi6XEz3NueJYuZZw7ut6hpYx",
  "key27": "jEQn7Ee4C2cuA9Y4Vb5tf2FvPm9jZBA5gGRdbTwhJ2KwoCwDWFFENScE9dMK2a7C5comWCRDrN61Lrsn8AgX86N",
  "key28": "3VqDJyUmCRtwbWrNG7hgp5FX9pHQyVkWdgidT45KLfvuh8j92Vkq7Myfg3hfNs3wbCHmuSnzwSokuBS4VgWP3Qdx",
  "key29": "aDrN9cboN9c7RAajMZKgeXihu3gzBbFDNkskyyYYp7URizYG9hvtujM9oaF62pKaffCKbCQsRpAGcovE5BDD9Ff",
  "key30": "Yi1oRDHNaC6fehHSZwV9CYUM9NLAQtmagXapWabo6jvBHVzmJbDujgypg3QhqsggbCQmPdDfri5vM6TooSPsPpy",
  "key31": "4ySTPneowbHvGcyDnxEgdhGoAwNHa9fRRKkm9sCEpvuNdpDnAecueXPCsXyruxhmGVsgFeYK1dtTi2gfxAN84kRS",
  "key32": "dhUFNaJhh4hVBsRmTooKbRBoQK8guZQNDTqKPoXAELLbdgMVydNir1y9UYVJuDCe6SMiEJtXjgHehkTwJULSukM",
  "key33": "2qhSpamXSmaFsFgfrp1Xi4uzCWL7fsDrG81mToUSCJXj5hkequrNmuVS2DbrQCVPKFvMz4z67G6pV6mrfRTbpNcd",
  "key34": "2TxB4ia2Hh22P89TmWsKKFZKBRFiP5AmfmsGsFHJSPR95Wv4Ukon6NTD8gGk74tL3utA69LQ4QJoACA4tVD8sKV6",
  "key35": "fuZtQgWwFbMGTFAxz3oheGf6aiRecSf4rF5bigo7aL5WDY2XhGfE9bLVqnzK3MrVBQ2yQEjYyyhrVFwwxXi1AdQ",
  "key36": "673tLy65FQTZvLHYZCTbfY2zWnso92FUg9GJp9HBghZErVbhqnkHa3zCLn3xkKYmDSjnH4Sx1iGABYbWuJ3BoSAM",
  "key37": "De6VXK22Db9vttuJWgzZvLp2UFWyxWRtfHiv7G785YQogQ8h9iKZhBEskVFxDpUeg17CCcm5273hea5MNsPZaSW",
  "key38": "3dHgJmbRRAvVv4GsPq21SWXNRAaCvZMa4LmrYQEEwXK6Eq3d4CRaZMvu2twcNZFVra2Lh14N8eo8yRUgwbSocwqJ",
  "key39": "5aCQyYGyuDyfpKjq5XkJZuZBfvmo9y9EyYa829PooB6efPrPcgF34esxQHYhdhXy3xoRdFxuthxfNGDjtPCTqpbt",
  "key40": "5j3CtW76XfimeKWxdiq5WHt14HhRi4F8UYwbkz9iiphDe6ypcqca8d7XMjJcTnimDw6Akm6HoixPsiEAk3ya8bhy",
  "key41": "2NacZyvRQzUHZ5s5fUyfFZTjazSMY4J4RgrNdV19Vk48HQxEWcSPSmVQXzcGPWGjmMC7DHqyvCJNV2aKZZU9rCbF",
  "key42": "65TcDyr56DpEJEErzT5rH3PAwa47hb91NGrqsP9L3HShSbrqjt39jqPeKN9qHTwxUKM38W6sTBbbR6RTB9tfHCFo",
  "key43": "3KUiqDUMHJ2wRi1HzRT6vMyxh2TzHbfGukXmWjK6m4rpQXitsqYvwf1sTMnu4PXuxz9vUK78Zgiou3HdPmcokDsh"
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
