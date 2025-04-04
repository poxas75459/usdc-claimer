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
    "48kkhA4zTxw8Nf6zzutXEG26ZhmtXTMYFJn1wffPSbz2aZL99fZmNADHLDDiUhzhTrwGt75xCxtYA6mVWhg7T8wH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eRKetEAjcNkLvQUyDbTaY2TaoNjd9VZc7xmN4bPvLDQhfXpS5pWUNvs9veGSDzT4VmSazAa2FtxLJWu6zghLndN",
  "key1": "2R38LA4337yMHtryrP98wmaurWHvQn2ezSWxvBmpuEisJnntmNUeYdC5ejdZ6Kvgfr9djK9WPKVCF4ghZfN8ET5C",
  "key2": "FxbNCXrrMX2enSH2CpUXwQG8MyamnPZAcVqQKa97CagbFYKtsiSCroPg5Jh2m1zuRe39QWM3y3rthvAAgsPjZqo",
  "key3": "3mtV7cJqSHVz3518nRCYuUwcFnwdo1sAMfC3bVir72LnFXNWTnGFDeiEEHkyhfHYiJESMJcf2k9DRYHpHNn24kXq",
  "key4": "4F9MCfH71TxSHVPeFVuJARKtEkBq4qXDjBMBChSWnzXDsVumiqY52MHUPGdfGgpks73PhZaEAoePPzSpX7XYbmUf",
  "key5": "3uTNGTBsGdLa6PPMKVcodD5Bu1crAQPDzkMnpJL7pRQFyPj7RrvWFa3r1F22LRa2xaGHYqoLuvcZZ1MLv3bvTSAB",
  "key6": "2TXDPBh5LmDgXymPwSGet1WcHRVLXuqv45S8Redn8dMRb3eEopzgE89vpz8QUvYUm5HSnrdsktAaXJECVZEBrb4C",
  "key7": "3Lsi8WpsyRHj5673K4nPanbZUZWvMTFxWViJekNXUSssRgGEr2i2gtRnDiJE9LXuqAb5hGLuNVJ9LKhtwAjX18Ee",
  "key8": "2GzpLKXMbjrE2SJs6Bj2KKG3BtYY4BmTPpz3oj1QjVT7yB4DxtVHa2SANkacqsFUZyJCiLyRh12AJ9eVYdQvgENv",
  "key9": "Kkj276u7jNwSnu2C5riNNKCEp3jLmCFgaZtk8JxTTj9iRJHry5kC6EgQcgrSvaURnMNkaf3tBxtBYYLA8UDc3v5",
  "key10": "2fh2mQ6kHehKVZAzXBkVquvsMZykXrxnzLCGUrb4595xneSKshZiTbuQx9eaWN3Y3YKCEb3YgYARGHNyAdfTAvWW",
  "key11": "wqS4jAaFuMWk5c7hfVJwzXa1qEShzmtext9dJU77u2CadLnJkWf3nyxUbrNPfoowca8XTmS12h6QYHdNWaH3MR5",
  "key12": "2qFs5GceUKw9jBvpfHXAXEFaRK4C3xtvzvjRmEHyztJ2hNkEEmcZc7j9hVBa61dJfbaEa45CY5M676kru9b6amce",
  "key13": "4UhFponPQSKnLXmegpKSF3WSkkmH7SmAZiqWpfH3uxYSgFMddQbsh11BJZfFxhJWxcZRbTmF65FCd1gqM5D5yrRY",
  "key14": "4WAkN935SYS6WR8j6DCBRBoeeJ1FxW3nEULAJPErUSnVmXe52hU3pcwRUu4TAXYoxR7m9CmhADYy5woes59fu9F2",
  "key15": "312WeGzKgeTKDL1dV6kmt1exJ45VNxcbPDR7r2vZqhDZC4Rz8Hg5WY1Q3vNd9bA68X8vi3agQZsaQQs4ZtRZKE5Y",
  "key16": "4p5eY6RfijnPkDrVjusNLaRW3Pf9GMhnqpCwhMNawzFukDnXwvv7bNGwStX4mm5wB7LfYob94zCnFzeFDeaYhA1v",
  "key17": "4tAr2CBjmbiyYDcm1mVoAs6GS8cWyMFqfB2Q3XxabLvynWyNGE3WaNA56hbfCKnhErm9boEnbZTGPHBB34DAjAvh",
  "key18": "4m4VKtxStpydDCa9Zg5Havaoi7DxnYwmDw6X1kjCvSDSNTnFBcJr6wZFyz7P98UHidEJyrzDAmAomhzuQTtYQ8Sg",
  "key19": "3wrLb38qYaUd6zSQ8waANCdy495reKAF3AYXdkR57WLB1WgJi9FemC1fYB93c1PwHeb1eGQU4kj4ZXQMBL27M3Vo",
  "key20": "4HUUCBLeJK3RLfiEpax2fU5tVAX8c9pHmLtqPJUL8kYKe4yE3wzjXpFM1yCm6cvigy5yLEd6g89XKkmDRmFdmXB1",
  "key21": "4HmM2vw1NXVrEhayPamDWMq9iRsZfqWN6mNLSBpTcrKoG9Qr2ULF6kXsRiwZ6SSHuaMWBHiKNpBiu15RDbW6aZ59",
  "key22": "2zLnqy1ZVLqbNgpbBo3dwL4JxNQVHFBGPbrLSmoa8RgSWY1DnrG2MWUL8bB8WrMS39MpGxNwfupyh4KZpbhVTb1a",
  "key23": "AicVczJLsgZ3BuM8rkv3jBbf76Z3gHWk4gXp6bGRnpZvi2t1BpfGLhnH1uAVYbFEAgnr9mhjLZU2eCNtv6fWAWU",
  "key24": "5iXFM1nXSpKhHH4boyv4Exg38sgXQTGntcvdwG8cpmkajFT4Bdm1uruarVpejj5NXT8UjiLnNuxDPhEA5wi4aVra",
  "key25": "4LdmCLnE54Tyr2Y6xohmXKp9SiP5P837XjE4WduGxZNWDqr3qvodpq6UFpZQGxtHrer5PEAa9PAWcyRNS3QJwXGS",
  "key26": "4LXkUQ9zKk1XXb7nZWiVYCyshxnmcx1EkPJg4BsAF7yYjTE4iipqPWfgqLfvbPNxjp1Tcaah75f5pgWCN4abJ3wq",
  "key27": "49FEsuENWeXHhzfWvKQKBPGwqFd8DA8mJX68ucV23CyetQyernV6JtjJtUqCMvUrQcNM7CoyYKstRC9iBso2CdK1",
  "key28": "2DtZHGSLx54zDwRVdUCp8bYQvaeSaqqdUm2s59N6hD1JXGzT5SXc9njG5SaHXE7XRrUdzd8S6DDdsskC6UWLnK3M",
  "key29": "5HTbF91qaxGH5K5zU8a9uzviVstt8QJ9D8i4w6ShLuegu6LqQX8xxWpcJciWLSd6kXtMMLaTH32mYcUaCtKRWHkJ",
  "key30": "4rvma928TDkeHqreVFrSF1eALyjWYmS9fuYBSoZQ8SnsHtjS2PrcqXQ1q2NxgMHxGMeVaBKzxooQ9Uorr1jurTfD",
  "key31": "5XGfAiYC9X22zMtinnyUkiMagjHqfGDsuYQ6EaSeJ6av77QnL9y366oLQJdPW23XoNfPDzDmh7NkNqaV9LKX4SdY",
  "key32": "5oL9YPVyUU15NsEZrS6jPbrVGxNKEzsSwuhVFoGhogFzuTgaxbCbQF5obkqKQbpvda6YHgxWc4wWoLBgouNwHJtU",
  "key33": "3dmuARSUADq2s5JXf4QrDUT8gYFxLkYfrCKMd86rjaH481Sd8PZ7Uqa7udN8ipYvsVMhiW7sytmGNWYBkr5jWw7D",
  "key34": "3Gz9XuTTf2pr7zvMKmgmgjX61xBahPgkqrsMycgwLQXQcKkUwEwMumTagRe6NytZM7bPUhmTB3PqP2nq4yUcAXQh",
  "key35": "4JNHye48oHFerU5W1jKi5w5qh44HuugiucXL9gArGAwncUwDUGzL564zRkMRfrx5SzD5vbYaty35bSKKAkZn3FPg",
  "key36": "dVNx8oqJwR2XnW23zEThZiGKdLQN22BQQ7Lgc2iLL6fGRHKTxNpmj9aF7bXdgzofnzxT9wjCiHtvj4ygBhAA4ng",
  "key37": "64TaAcT3zm3WaEFY2CmiswzkKf1xsT1QidmyHsjd3Zxjiu6WMEDL7qyrhYDBB1BVg45Mc7s9iVNLBQ7ZaWgrn4aC",
  "key38": "4vz9yLuJQzgFFnnefjy2KYafnJLC6fMHJDXUvVJ3zFUw184qWupyk4wyJrm6WmUdvixyPXb15geRRrxQXb4q8cQg",
  "key39": "2oyj6oAMxtcVyGFsd63tdyvM9RRA9JVKfg6jRymbA4Vn6ghih2h7K7wpyXmSZq6JCtA8uAeCd5JREWp6VSn535zF",
  "key40": "2KD2pFxna6cTdGeaQLs2Lhah5iyTwufqv2ztBgUDC1kmHmAqUQXuov7ZfZW3FjEcsjBiX7fNESbZdfDkTp4xvzPt",
  "key41": "2F1ToTX7oWuJoH7wGeZHDFDZtPfqkCJKhNLv3Fdj6iY5ubNaMEyPdG92jbFfAdrWbopTST7TwUro1r69ot4VhY1f",
  "key42": "59j6u8gsk9MqhzNxNpMC3fChUwNyoa35bsFPMZVn1v8SyyzQvzrpG87K7iYeHmXC4DYN3nP3eaXzP4Uz74cjeRAF",
  "key43": "3m9G55xyRWitJVw2qHqWjzFbVUFuTV2ZKxHEukhA4ztcojionrZMY21Hj3d1jYTfQR8YeUmBDhjzVqMJ2WXdmjbG",
  "key44": "ErZh4eLNdYQ7KGUtW11LNdCxs5w61R73b6NdxwpKncmC1Wy5Z3MDgG8UkRgTYBrjwgdtis92yBwbg1QZBZ9FQAy",
  "key45": "4PvfPnaLMQ8dNTqzoR8VKRG1P4T4xGRP9HQre6PByDpnkU7R9AuF9AhU4cxZHfH7GYkk47ETy6r28bWTXTN2GEBX",
  "key46": "5dpy2Kv8UBdWGdEbVb6NLHoLQTwbx4xsHcv6LtXmnhELwojDv8QnZmobgap5R7RgUZMzQ8rqNwFwZVKsewKsDZig",
  "key47": "35bvJbdDmhVHSX4ZbrC3DGHRS7SsEvstmAoUenPgmzGPjMnPUmDZp2pcTVxoDfoWvk4ZQjYjCbGh9kdt4j3Bupkt",
  "key48": "51Wa49gnX8uuRGLhAahCcykaKatcJVtd9otcJ7wMUkQWqF3XQhBKC65s4rjiwVgJpFdsBrzqCogedFYJcYw32wFs"
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
