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
    "rpaftjqPvCWjfb6Z6FPuQGJPDAxMoP6cMrovSyMe3gcBvMgryXai1NY8bvyCauceqqo3GaqDnfrnxTU2TTRbEQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2efUz8UVZVbHHpZu6e1RXAEXGR7rKpFvSTRY3jmL1MkLDuxXRHZkhpsr2DiiAW9Wf4UxACXAxidzdiztsMwuCpk",
  "key1": "2RiqpR4rtW9Xthg2dCifNXfbPfbVQW9WiRTChVPfDjy9Vxn3m4ZYsjV8VUhNEEtr6StChBjzN5AEVrX7TE29kqeF",
  "key2": "64icscdnWcf7jXh82Uce6i6JMkh3QaECuEC9eDsMkkCYRaryHJKKpQtLA4qNFVpY9KtQG477THXVmQT6vfP6vUrx",
  "key3": "wF4hbyue9F5f4SDXCrNivofeJYvxcDSyPsP1zz2RGhydda78KfVqR3m5TBb34kSuWaNwLaZ5yrrhLHDSQCsXZbD",
  "key4": "3YzigcopLM15bFxvfKzKg4duh9LjRvUbKN3hfkacfPogdMHrhSvLffpozDyQqe88rqM1K52k3zFcCsQJARtWGn8V",
  "key5": "2bZhG16mzatNuxXcNqq4yXiChKoSAyvVMHnVfWoUjycvsGswZPHFK8dVpGzfPAyWUtqrhhLFZvJxdLosiFoy9eU7",
  "key6": "54gMTDNCrfRQP87K2Veb4wsvrKhTM4dfaiR1fZm9GPJjtBNyVYWFLNoUh5MzmHGHFev8xu4evPdAm1Ro7CqNHi99",
  "key7": "2G488JXZh5419YGfDH4E67MEvkrYeWXBzdYB3bWERevhpwSMGGoTG2LLYKiCH3f1dTiKtZXrJu9R6vgXg4kk39fR",
  "key8": "5kVmWPeTgNfc385Z5ccaroivVDMpk1FhWjDjLsvEWbyTEsdDSCEWFKTfPTqgPn4ES89qAw6Mi55YfN1UJgiXEJTT",
  "key9": "5Bf7ZJxgRVA8xoHy1vj17vjvcHU5sJvA7oNop2yPYy2LoSnbrK6JHDuvfeVcRMicog43Xtn8BZu64grCXnzbQ2ML",
  "key10": "saPmsSMHWt8VphGWYeCdHMiWDvoMUGd2ckBei9Gm399qsT7iaoas4MMeNqU49oNh3wzYrcyrHsgPWJPzD4eHhpD",
  "key11": "5fizFkVd4yYnNrcFF9nkewW21kiEeQ8s4xpFMpPSzX2Y4qxSDo6hSZ8A5wFn4mukipGszAPDhutsAJiUPysXkpFZ",
  "key12": "3KYrtNaYNqeTH6HgrYBmKbcPP7TiCrWYaL8eatPbgGNUnGcPjVHDVsfFEbAteAAhPxuFrMXeFfqcwpjE7ia9skfq",
  "key13": "29PFS4TQ2zmzhjEPRFXDzryY1HPUX7HEYtVW5fKWLRwyZeXGCQyxiPaQ6NygDiNj6LPQmDEFXZzuuzaUebk3Rh6k",
  "key14": "3pBA7Z2TbskrcujLzHh7k5Gr5uDXp5j65za3byHefYxJr5UUBJEXU6BhZPbxum3EqGrSvaQAFSmJonxCCLuxCd3v",
  "key15": "24eTKVvaU8TU6FdDk1mfQAE8o4WrnWMPzgw7SzSPXa98phi7wutvEka7ijUJR4siKkRaGQ9RVvzgmGrcn7a8dAoL",
  "key16": "41w5YPVBzY2SiWXMH7PLdc5Vh8KN5fyvZxhSpARFVHCwBZGLyxgSNHdF5m5zKyRW6b3A3bW6fvb9kcj65Nmqorp2",
  "key17": "2pdcGQrxjEc19j1A5psPxU9fFz4QcnLiT1y55JyGgfSCXP2efz1AerhBnUqtGvcwN4fnikFBhTyAig9Ljwh2MkyQ",
  "key18": "3UVNbXSHCDxihHgGo7uiagiYuheg9HA29aoy9t3KjrJpUxu9HwJvxc37cR9YPQAVjDSpkh6JcLE5ysEitRwQ4Xtn",
  "key19": "4Vp2emV1K3atzAzTg6gccciqEsBYFaqBBrwqZhWg9VhdWsumjmkjsXbBCxaUhZ8dv6Cv1iucgSMz4XrELbaxNhdx",
  "key20": "4noMUcrfTvGSpnGHBu666JWWwiWZEs4fdsuWJuDt5n5LeCu4QSbSTYCzzmCqJFojsJFvCyLV8jxJPRfEWJNLzGPH",
  "key21": "5RLuaZk21kSyqcVE2BwaBeKxyajV1DkyegxsCat7GakpxjhTRvfiUfwkbUtJ6iVumKo7EG5g8ReoSiFx6JrUYCaH",
  "key22": "GxzfWwU4WznDVhT3CQVG4jtYZg46fxb8CSNdy5mTrVWA4TA4vHtxgZN2oWcvHMw461iZdZESiwoufbSeTYDqGnk",
  "key23": "3hRtUTvYJ9LYj2S4ExgUkGby3wjTxSrKuKtSanFkD87dnxzZ2r9z9vmuiuLKGxoPkPNwEUdKafSJUdAdgzx16KF2",
  "key24": "4u2DzbrgJSUTRnUfTKf2g9cfmDvAuSktLW8zys4KQ3FAWhwJnDXiKSxwzc6jdxfQzQ7n88PyuXn8mymgdpZzApwW",
  "key25": "ufC9S5YCfAgyQfRejSFpbrhi9gEsQWZTah4sTAKaP3XpgYJF6c3wH2RQUpqjswvSM7ibbFSzEuujLJqP7GoW63h",
  "key26": "3tcmzDbXJJ98oNgTtxAPM2VphVQDC1ieU8pJ6CGJj72MRjbWzHMnMQnnN2mFwbGzdYpLKtpKPyoL9PbdCdB9SWpa",
  "key27": "5mesVnDgPHsqoBSbfLJQTex1813F7QNJj1Gbhzut9XS7kzzxkQCBvfbjHrvTAqv3rEREJzvc4J62ZwdkReXRB1i6",
  "key28": "67DxU7C5QpG5Qp1wDU4vJNrWpsQWnxF9mv783SK1Q485gq5S6xXEdTit4K2ZPDZKmtm6eXbeAggCc91QMyBrfu7q",
  "key29": "Gpx19HDDqC4yPD8CwaLBv9qPpta6yvvXmHi6LrJSBec96NMHnVikAj1DKRA6nmX8MtSLEqKedG6qCMZfErsCZbj",
  "key30": "2k1zacsf74BNJW1DM3Z5gFDVV9HafuBJ5LuwVUwQWMV7wHMjrhLhttkVDTFrP1B3NvD4ASTcQhg5eZaZ5TpEUzP1",
  "key31": "2AnihhkjAbXpFLSX5GweFK3KJUBzBMzuhbJ8pSnCtZ5rk2JdcRoLZ15eQCxaitjAgu5AyGmaSJVaEXCpTwGavgjw",
  "key32": "MoAWvJcV8MiDrcoLVbfvC6GJSt1SybeMnXKs4hnr95Mp8fUn1U3toAftcAfjqdUTFbeGybxCCS7BABTA2uGGCu3",
  "key33": "65oJ9N78mH28mVRwdLXZvh4BKG9mKP4V4MSTzyddmdq6ZfQAVsQqJ8XgxpAP4r4Wy4WNRA3Ma251Yp1R5XKwKZJ4",
  "key34": "38qtC6Hc9WJfEgvLdQzU8r9ywMMH7T97GYofeYxDB6Q4T3scrc3kVx6wJPCxQT195eFJzWYL9wLep7f1tcq7YPnD",
  "key35": "4oje94y8SFXdgQ1BtdGivZyjPBxoL5pYHDmPUivngkhdBmMRc3yFgEdYbCHc5T7gzY37KVe3tLg6A45ZCSAtewe6",
  "key36": "91dh4NziV5VDrrUq8TfBsaU7EATntwXb4evDuYMh48QewZr8ZUQ1hDaGntk4gYFhHgBSXiNrzQbC7niGiyqTrUi",
  "key37": "2iYXdq2326oqDH2NBJAWipA7jBXwXktJVw8JoiBKGLYHYuH5o1HwkBQyYswLqTkA4TXQAso6PzeJ73GmjDBuXAWs",
  "key38": "5RYqJNUTiePQVHThyFDinLkjSniyH4ihpnucYcLQNQuitqXTTxkRwmdVwXsM1SgzSjU7Y1gZsQz8FWsczqAeekyb",
  "key39": "6WrqJEC1R1T7otJKQdd3GL2MvSuvViv1mYqcp713vgo9sEMXCJ4AEB9qTcuL1CXznap42UZeokGqPB9H14PX2Ee",
  "key40": "3rXxZym36uqsLE4ePt4SqBdbACzMcMPzsFG57wTf7QSbkXLToJ2smcSmNp4VtSxRUVG141NAC8ai2R5qiCkP2dag",
  "key41": "5e8So82dLGEXnRYMRvYjJAaW9wSXffFGJd7TReJ73z4A3bA728Zrb62AMXnYbiUiQu3xRSjLTJjCtjep9t49aQs",
  "key42": "5rnYxmP3wQWSkcZYhASohYCAMrp5g8mbYQTxk4HG8Gw9gqwtReX3ZebgxjGiuwLyr5WzwN7vg74LmpsEswPSvbwC",
  "key43": "4pQPDZnChTQpdwmxZFjXwx6sVs5UfDb322NN68prZyRdkbWvytWCye4wn5R9jNC5aKTybP7WLQNdyqfDLozRuuUD",
  "key44": "5qZgCXS4u1CaZxQtKrXErTb9Zfk7VKtVgNeVtzCpHoWa9vxahFf5RecaMjZPg7Hg24Kp9FdgrUM7MLA1SdMF2Vx4",
  "key45": "ZNRWGXJdikn9EToN8XnWvdieN7q9Tvii8WYNJCzsc1BZn7iTYVu7X3pZejbZZgFgCrkXq68qdFQoSkFmCxJPinT",
  "key46": "ZmibNMfTGPw96krGJYmXBKcM9XHwSJeYoCPMMyEhWQSsujhj9JizBskowEXC2N1bkYzyziBCW7tqdWpG9uvTn4B",
  "key47": "AZD6tGHzVqqynxYE9swEhQ1exfwZMgb4qjbpGuWhuRWf2aJNbRNE8dyaHsTS3mgqhNHTJB57ka5VNjXrmqpX9iV",
  "key48": "bMeDLfsdzos7i9yXYhGhFibP4g2bVutXfUaw8cDvmqReTAmduQmPL7dBnEv2rpes8cbDD5c3ZS8h2qFMoyvVJp3",
  "key49": "5dfnKbunzPBRGgHgWbwTuFTAgQonYH4zH8eRo5P6C8JjhLzobaoxSjkJ7Hpt6Nhc7HBEKGTiXYewjFsZmjeQfU82"
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
