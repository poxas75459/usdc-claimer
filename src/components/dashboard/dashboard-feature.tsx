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
    "5WjVuGicUbYyHdYL3rDjWwXT7kJc3VoicUTiQpNw6Eq52Y9SBVN6sUmdwLtKmYYB9duEduKQYxWGvTjc5wieBAkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vuWNsBn7GydVJ5dyPivF5ufP3yu51FhXXmgRA5VvaXcuotiKjtVjdJDfZk4Hz1qBR8NWXm8n2M4nMmry85bsjsw",
  "key1": "3X6WfTVVUMfXw6sfHs3h43RUzGqQdiCgYiAq85ViHQUY5ot3JBypgc65AnF9H23sfoLGgtVuyKoSLev4mTzneimj",
  "key2": "46nnh844neCYHZHQCzCR2FsrZ6zCr8bV1V7AVsEQZzNiZbJu5t2E75xZEsGHTEWrgn5vntygWvnJF1VMsWk4VZk",
  "key3": "5h9WxE1L5fW42pcw6iLHzjz8THgxS5k8KTBVecxcgKZWb5dbxpZR4PDYiX7rbSFRQzuVka46DarN7hQQaHSNjeiq",
  "key4": "4xYBpteitmY9vTT2uxzdGjAhxLDjXoBtCFQPVBbve9PSo6Y5ta4Fuu1Mk4fvnSZr7vaM79rCKq8xrNxZhczpooi2",
  "key5": "4YBuAPjA1J51xccCtdFRCe5MZ8nSxgno7TZgBab8dGq9oAMvpqcKT5MnYz559ybt7dCiiiNyWmKKHad9hWL5i6v9",
  "key6": "LMApy9LjEDwAAUpqaMLQH6PCoiT2jWQDh7hGR32bv9rR7e2yaXQ98ygFuotjAZu5wcXtppM7yYuNrNqhbryB2EL",
  "key7": "4QmF7j1M3UgSBPSToB2fFe3ph8k9Mgmv3M1ohty6q734QW2w9Udiat7Mmp9yQ49bvemmzxt5LuUzr6ZGPc2XZgUc",
  "key8": "5FpzYB5Ps6n5HX2LpxNvKjX7G5PowomN4gfFcBVbLRUkqFBcPhXmwZCtXeDbsPCfx1KXw7vWHwCi4iWzfEx7x81f",
  "key9": "22mmc3fPuuDY6kM7kb6d2ZCfxyCSnY4gUndaoQB1hFNvrKqJKfERfCrgygjus4V2hsx98hEgk6hMJEtxfgpywSTa",
  "key10": "3zgs4JUTPfvjbBUTaW615YeTB9Q7gGkDdr7cXjLtwjVMUr1TiKZAihV57yGZmtwFdaaZWRMjtnv3e1SyibJFtDVZ",
  "key11": "5U74g9CxGjuMfvaTnonFeAVwhuWebsqaeWfwMtAKj5ZZZVFSop1SLdFMetHewuKJzLmrDr9KqiUo4D7jwEAEhnTn",
  "key12": "2PEJGnrHTxuLmVL3wrPgpAFUwmvooqbiUJWV7PVB4RVLTmWqLrG1y1KPmEHTRp2PvgSDWX9VYcYPWg9wzfhr83MP",
  "key13": "5Z1kvfqaGoBFbBkfm59AZVWS86pFRr5mjHnD16yBAjStk9yBBLU56sitPqCYacj1i4WfajRaLp5MqyzWscgtLxXY",
  "key14": "46nCTNammDZiU9aTN5kbiqB3HNZMUZq1F822UWPBvLnS8XPSJe1m7V2UE3e3aY1PVoZ8hzUexXju5sc7cWNdSrsS",
  "key15": "2EiXEBkoMheruf3PJveMhb2T1o98ctHCLsTCys8yeMJwozyZqQnrHEAXUcuweuTapXi6wwwv4oQuFKuwL4QeHtPk",
  "key16": "4uhVWAbcKL1yGuNn54RKNYWmEuPVM2xYFWFqRXe6heknjxxCZKDuLauq2H8YGjogjzTEjGzpN6CE5A75f4Amicx8",
  "key17": "2JFmfS529nU2uQqASE5bdniZiAGSmNEVsvFHhr6gYU8Y7Cwa4bwmqP1b8cHEcAppF4JVFWG4ojrseEDG7kKZVEZv",
  "key18": "3DY77DHQibAviqZ9zksoLRUEmjKEpdnYz2pvoGSPqpbTANeqxtJiqrKd4roxG9DCgzWzHjpYStC1AfapQRVwNiU5",
  "key19": "2pQRjYxSVQrC7TrNWWUB5dZxf29jNtw5WhHJzr5hXqJiQfoQihCm8Y16vCtk5ob9ggfCrDZAPzwWrau18sMvRSK3",
  "key20": "2C1Z4AE9obeXxmq8RZTiPAP6wanwjuSnu4y1bmTTBK15dQvNtFbAw9XUeiadnJjKKsJs3p7pxb8AmemKi7PFR7Nd",
  "key21": "C5a6R75hoRMozwkFEA9XChwH6QGufGq6ZcW962cCPWm7psuDMxV7mj33aVtqwUMRQAEKwL6Tev5beH3oyEtJPyG",
  "key22": "4EnKBBM2VJ3otFVbkXLnpLrfUYUucxBT5pLyFe9uDo71zLTRWkPE9yaMuRpyiybMRAPWvhWg2FP8qrwi8Mg8i6Bt",
  "key23": "4xWc1WthR3dxvPbSgN8wdRJ6qYDQg5YDdGkwU16CujG6MwzM2aw9i5Qk6YiVJUYwrACgmk8iYFzhzbBxEHsEDwxm",
  "key24": "5GXTNA2sWLLaFbekutv5xtJ3ivUPvuDngehda5J2epWcdxUhCySVHazGM6BBsy8as98P5dwSxkXZhU39HYtV4R7r",
  "key25": "B7NxdxVdkvFzmaMquvn8UhhsiB4CEhAFsGWGTsnqcBrAmoSZM4HLsMSADcEaR8XGAKXDURDMArkHW2LZUNc8DyV",
  "key26": "51cVAY7xMkFZgE1aMmE6tUjQ3RBkwUTnxZrNRMqb1KaS85bAry5a7DGpu3uCc8jJvhccDEiFZ3BbyEkh7PDxX7Nu",
  "key27": "bW41aUyUTqGosNqFYhQBR3kB5MWdhd3WB113epT5dfCMj4bGvqv4rcKhXxQV8i1ax2SrwMhbvpj8rpRkcfaRfpj",
  "key28": "g8GJGD3mjP7et3JDuwyQYoJPEDjJX4p3YkBt2bhxEPKhwwxq3u72LHSB5nCB1ktAWB4TwiEMYf6ZXcKzKzJ5G3D",
  "key29": "2McTfkwsPCs2Gt8TqHHBBbfpegRBbnWhBX4pV88NbNrPBqs9AtseaZH3Y9BdE1Y1u9DbtHr296RtUjMbrZbirDYf",
  "key30": "4XSC4Z8UFnAz6YnZcHZSdtGqH8bwJwkKRtUB3vEq8ZMNdYsaRL5nw8VAGJirViKqtuM5RjaUkY5m5iKZQJR7TyrR",
  "key31": "p32S4Z6x2foJYoR9exy5Mofr2fiAnydXJrgetY1HwZP1CXuKZKZC6asFYD6xNWCDezYzAD4SgfqeLhpfABST1qh",
  "key32": "3pLTyq2Y69i3rG41AFbgzUGooQSXG32mgtHBXHFJStVrDdR8gkwvU6jcmtRswdRXQyeQEbWAs6Ey2KQgewrrJF5P",
  "key33": "sSWZJ1pz18iK9K1DH5raR6mR6dtHwRuSvun1KKSyHwVRC8nUPMccchAd7JBwWHLbMu2wHHPaMPZNanGvKDdRyAH",
  "key34": "5jkPgvTEgJyNCWb4oywRRdtTs5JoXGXxQenRQrRQnMwsFDS1Lg8FxutAS1Hx2P5YbHbEebnGWif43qgxhxqCsTJu",
  "key35": "5oVSxPrM3Pu8VqfJ8J7YoT9tSGt3gSBvq2BsxFc9jmsbwCZo2cprwjN6fQKCvFQHMMvJefLwBuaFhBDyRRoGbxX6",
  "key36": "5PGmyKUmMzrp9FQnM6YnKwPMj6BhQBE2Ui4YEDVsV64Q3S8kR8jWhQUgoLA2YzrDghUDWh8u7D5D7Qp9VJNBnaYZ",
  "key37": "3HJER6JAwzuJL2V6omeh4tmbfJTc94Bi5mBrvF82AnbgtU5dkpJmSsUEbRVZ8X2gfsP3oEmKT86kEkcrxEzMzbAa",
  "key38": "5BWrGxUQspykYCaa5eu6m6ZCyiinQSWSdJHQNNJxqpnoCkGUoX2EHfZ3jj8oUmchRCNVSJTXg4pM9bBdhnbvAdpa",
  "key39": "5NKHZPm4VmhZ2fryHf7YwMetArwqbeH7DmoLpp2PqmPrugR36anfmK5Qxm1puY1ahwbT9iNu9NCgbQ6Ex4vZ2zc9",
  "key40": "5VqXQiK98AJiFkKddizsJLd4TrugJ7nMNnoV9QwGzrGMTuk3W4TkfBhNyWZgW8krbxcxrnGRKAuSwW3LB8fcPmR6",
  "key41": "3gayTQMPxtsZtMTmitzq763gzzfhb1HQF6c8gZuCvH5bYU1oDQKZEnortV2Knz1iZqpkVmsg99aP78W3NCDVSU1M",
  "key42": "223fBvyNotzgjmCXJf8ZQVUMeZeS61Uk5fvgMyN4LVYmAvsG3KgvcQ27LXn54Go8hcA4s3sxG4DRUiLSBRVmx6AT",
  "key43": "4aoxpAuZ5C1RgPncnBUCvsCghbvSwoDDNL3tT1ndH8sQSPYzsNgqZfhLBxzjDSCLcAZeSp7baDo3b4zhN7Bmjreo",
  "key44": "5ShoQ3URtca2919RAzsLkhwjkEWToYBm2hHca1aGsavfeErp8qae57xJqzjzZ17U5UrzELiKvBorfiLBjWmPq19F",
  "key45": "5ixM4PGKtCmVXpzjbNBGzz9a8N2RR2QvFms7txcVwqZ1CHQSiP7TN92PuqoBBPzctCibJ988QWNkTtYUuFmvzhrp",
  "key46": "3xHs4QB4cazsbAFzdrjfytpN7xrwXQyLTQr8GVMbvTzA6d6jVNBpMSuQRbNNE9nai5snK2nQLvkk2sQr6bqkJ7XG",
  "key47": "49gWcf8fuseoqABETz3ZrihGZmnM1aM7bmACYToGZS8FSNY4FaoG5DwZaSnYreiP7SVsVe4bsmErxCf9F8CHoKwN"
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
