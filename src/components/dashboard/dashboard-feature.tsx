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
    "YVafHZGYghAXjnRZoTiGCGidnvdYVx4P4YYSmB1kRFjpqNsV6azdvea35MjYgSeej1AQ9mSi6QngaXS2apcgeCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44zx7YqePmG2GdKR9j9ihSenrgGoFuFJzZjiL4so5bUxwwiFyKxSicTJo5BTggTjvoZYtV1LZdRpniRzNCNt44is",
  "key1": "4DJH1BV91rJS7yXH4YztkhcxG91c8VwETeRvtmFMeR8LN9WVaoCGB9Gv427hDNieh5o3KgTjiek4FDHNKVHcozPJ",
  "key2": "3hknj3x6cpXWB2Dqi2bnD4aYj1mdCicwJqtWdKcCHYmgesar5CpnEj5VbP4VNS745zR3EexYtJi2XFgP8hG79Gwu",
  "key3": "228QuAb3JACWqo6kiwsXvRyjtuHJUWMTZE8Zgcepx3vqn3vBJJeAssJMsZWG8jjBYYMLDf3GnXZkdeXLY3gu5KYF",
  "key4": "3Q77FTmaXUMb6i39dgYeSXYT1GuAzkf4F5kEyG4vZwNH5AoFUEdMPW3AtD8FAggjsQ4x6dABeWPRyrEFozteAcoG",
  "key5": "2oYR3n7c1BA6orP1BX3JBepPpRcKPj2EXxWjaVduMwdjex8QKcUMLqKtEYoRoxjjc7BeYsuDe5WVriw1sgPf9gNL",
  "key6": "5Qm9TZiSiHRkoktQnqwu5BUivmB3ENrwJsgKxDC88pbSVUHax9EfERDXztfzFbNRBbjFWuNqptbBhkiQ4jiKKBVS",
  "key7": "2wMPTfuvh8GJLi9cTakKvB3Dna6XSvfWbZH4PjLoj6c8KKnCaDmTvzyGhHQNZLjYrj5ZCEcHiDM6as5L4TXm9sgP",
  "key8": "5UB2x74CmvhfRuqUj2et28E2xq6QDHzmib7UiPaXSqQcq3t3GbwSPNfokhmaTrtSA5z9UNu85gtGB1tg7KniZcBc",
  "key9": "yqD6HkhJ2FxNtKjmeaAR1eWt4gXWPiUUAbQBKh9wy7xx2V9HYoM2DMcS83mJHqPWmiVG42MwfedQ9FmTmjfFSHg",
  "key10": "4nSELaTxAdsqZcns7amST1y3NJ2PPX3PdAc5ycaioSgeu5nSvr8iPZ26mDFPQ45fjVhBo1x6EHoZpQ3cptuno4iq",
  "key11": "4qeqHK5Em8XQy8AG72txTeqfTGCdEbkitLH9bNqqxQiejxojWnueV3nchHDmAHaQPkTcvMyWdQJ1wKeFu9NA7RaH",
  "key12": "voFNV5fkGNgDmqjbech6vACue1q8cJukvbGswfr4K8cD7yJD6df8V4MzA9DWeomcTBdHwNCAqiv8fBAYHhFoPnf",
  "key13": "5oBehqXsfP1RL6xioF2rgrFs91qA2tmzMWHpofYojnLzyYR5oi8UgjnCZvze5sA3PCmqzygh4T98aayXcLv9fTJJ",
  "key14": "3ogqiEpUms72yyB9Ga4C7QEaRbF9x3LLtZgh3hKwYDBFGGbNWnJVQX6T62kxPehS3CxHc7AcQ2QNqoFzNVAeFU2V",
  "key15": "jQhXKK2X1V9M4Zh9w5sRCNoUehJoMqLhi8SKkaM9geCncvtB3g3dCZrtyJ6CKU9Q24WdtwZNAiQHz92zQt9hrsc",
  "key16": "f7V93eyUkPyTqPdTc6FgnLr3TAuhYAfuFM2i8JtDEVDuJS1EzURSEwBdhMttDjrPna2XeH5fJ2rVEE5zD99FzAZ",
  "key17": "P64oBz9Zjx322jE8P3Vehs549uE6vXgbtSPyr8bm7QPVX8dGngvzf4wE3VqxCTfxfEUB6p9TpAftAYBWoomW9AG",
  "key18": "5st9Ug1QRvAn2hSCjvGX4sjhBZGHpGKTN18o6HvuGPLdpdvamxRdZ6VDGctQHcKFcF85ikStD4YaDKHww8reNkQk",
  "key19": "3gDZhXysQ5KEZR1HEQ2ythvSw1FR2AqCbJnXvqvXFN54UUTJRAWvLr1piTVBKpPZ6Jb3b6zUsh6upHAS82ybqrbd",
  "key20": "4H6DkGyDVteroiNbt4NEY2tYML9kk2yqHvioVxBPBtRsURShzZAd1t3AL87KA2hwBuaHBwWjaPL9pE6fJHXmxzf7",
  "key21": "2dY8H1Y1Z6DjGMyUeHWfYTZmBjR3sBVAKKgS1yyVZNtJLHwZ7tYQDzzYyPbKkvZj5UV2rsZwEbzo52jDkEGr78wp",
  "key22": "4wx2RCQSFoh5zxQvVHiizytgJZbo67oindcboYto6PbF8czJGo6h4ftt4TafJnWZg1PW9UTeTuRdXzHoqfD5TTvs",
  "key23": "4efiUGMetqxJPNuSHzXJrLjFYNLpgfTyz2A2nPhiLS2goxxjRkPmmQzGZhDqDR8xdg4JTsxaaQyEbfgtkZPqDrmX",
  "key24": "juskTHjS12R9S4w7MU9cz12j6FL78swEKwB6objZ5JqP1xkbgReSW1aVvfx2jDXbbiLwq3Ybnzhqr4KcQFTt9i5",
  "key25": "4WhyGri39H5Daa8pb4EfcCzkru99JupuiqAvazuXqE6FPnhBvdP7QsDbWypz4FucfUhgW9oajjH1Y4d49GQauKvC",
  "key26": "4D2ywzEvqXyFZq5Q72pBTcHBw3zujabw8WTkLud1w4y4L3ENoXHgpuMNTvLr42CwWXRUtBptV7nzB6yqGKWqS98r",
  "key27": "2YQCjqYgcScRZzAahSyxhLyp4TuiuEnrwsGuNXeoJFCVs27ytkQKWxCHwkPi3denxURkNPtHNKsFEQmaQo3RitJ2",
  "key28": "4AeDhysZceEevC2RvytdnsBAzF74jycRkNrTbpBziH5po9tPM5aNdxAAHqnYrxbBg7v6TtJiDjHa34AqY3rdxW7K",
  "key29": "5zZG686uy3UhU7DkawJF4vQRdwD7BnbUYxwu1zztn3ivaB7M4XLtrBcsAByTqmYjj5V65rbC7WtZrc2f5yLAJQPd",
  "key30": "wJEuJKbBPUrw3Bzz1HcEHTFziiEQAAntJB4QCCgFG7a9Qyw2LUaWQuXBtjUpFeDHjmoQXExKu6jZD9LR9ABagux",
  "key31": "A4SuDvKP75PgwjigoJj7qFb9sib51nJyzducBdUQfztUFxQWUwiiDqkuZJ1XDpnrQmUyXJr52PncVqPMsWxH7Gx",
  "key32": "KharDyXZSPo7Nm77NZJXUrNcUkwv87MZ2BiZf6jE9w553Qpfdq3XBkVEBvFTxwDtDUC9HX46sqjRhQEpYhNWNrR",
  "key33": "2rNo9CGtv8FiCXv5htovuCuUyYUvSvApsGP8kso4mUrxjZq7J8mUHj3reoSnRvMu87aPxtMkrLs6um6iUYhTtKzz",
  "key34": "2YHzg8HyBkFGTpWCxwVD8puAh83GjinimusJ24VRZpn6hzJ2t8GbfvgFyxQ8tx9BbzAKEHVhDX3s2WeXY21cs3tR",
  "key35": "5VH8m3FVcS3ddbnwKBr68nXcCQrvvVJCae66VVvBf4ZMBCv4tGGaT5oqsTVwzfVCWAEEdvzMHDFTatAywczCh4EN",
  "key36": "N6HpfbkwnPVyU9PrfYmnAMxnKUmhUACuaX4gfdLdPmKCzJXjTweGo8PLzA9SeeiaSz2Qz6k81x322Us77Roz8Na",
  "key37": "QwPLBU6J6ehJpX59anQcsZXQw2YcqN4Gn8G7L71KNbLxGYmj9qhucecEcxXhLSCkRnTB9F2mtYdGVFPQkMdnq8E",
  "key38": "2GKBUeqTUBvVpRVfgwgwdBHkDmACuqAWmA6vERMEXZN5UZFemuUSddK3QzP5spTe2FttiFJnevfg5jSCpMh6XApD",
  "key39": "3YzSkwBte4WHVXzGHA2qtd2a9Ucc23txwUAY9DkoBTE8c6kuEFgMM8iyuDsQxc22EM2Z7EKEjKsGNKBqoTh5JTdG",
  "key40": "2y3b5i2PqGDGjPcxStM83pSWxJuN5eMd8LeBZbGyvi1zzmszMZG6cnt2PaGCxck5v2KDpjfAiMVXtigLwzDRAH9h",
  "key41": "5AWgsYM9Hgt7Vr8Sj6SkSjBN6oLA1WYnTEN4TiDzXHZNPuzgcQwitH4LFnVpqwybtdYuTkngMqDBroarcLNdczDr",
  "key42": "3a6mcyhDMsNTgVgRv3DeRxbWDUSSoHnyNNbMVspVGXmTwTvffbj1hghF9VRdtg7V1iL6WB3JN9FBMAZefuAF63WR",
  "key43": "5BBRaXJ9YQ6WLmEjaNSeXDFFcZKXDwuUEc26dYu5TL2BjJjFzByQAhoJ2pkADzffXezFW1nXvkLvQHRAVt5pbZRb",
  "key44": "ZpBZMhnrpBHogtkyHSfxW6NmE1YUPViZDJaQCpaXWYEDfw2Sanmb4MFzdPLmbHDKLaDz7UeN6VNghAVFjkCYQ2d",
  "key45": "3itBzhPpURLvhphr8fymNYkWtXUb9S35caYTMrBhdvrdHiPeaKYCHEWGMZtS3M7wBcUbLhdr8EBuLmDtWj5XmWoZ"
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
