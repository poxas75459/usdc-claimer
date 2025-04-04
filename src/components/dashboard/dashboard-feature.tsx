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
    "5DPuZn7VSKvv7FPwcKmG4ckRVqPfBmeCTNGPZwFY5zsq3ezMP83HHKavsHLiHKdepUN45yuBoP58Hafc6r6HMhFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CveUwECcfxrbkhuEE4EdpBjNi5kS68JkjpbmGtv1vXkjstyMon5Tf6JkGiCkd6g2npdEVxtQ37Qp1HDJaf2p6iQ",
  "key1": "2n3szAN86SGpj1w2h6yNyNddMjr66Qs2DtYW9VjoYyL15AMiDZEFk4fkXQnW5vbiPtKp95YqJAJY94Hmyozetm2",
  "key2": "5hv5zQAGQfyLMFVD5y74n7smzMzynsiFbFmKGNL7ULibJeaVVWe2uc9S5j7VNrgg5CbZhmTHs3A5s8iZYG2cYPsn",
  "key3": "3vrzdEW9dCkVsBqyvtZqCQLXBhjxxM4w9VDUuvy92cRtARq4wWANYm3hUQV3nqHLJmKtZcMRpcmo7A2tDSzWAg3p",
  "key4": "52jQVob8RuoibmjFq99DWc6viepUGyoE1w7QCjxAwATSxw3fLMTHVD35wEwgoEsbfi7hYUFtqtP5qCGzkiqbDhBo",
  "key5": "5J1krtEewjEVCdxeVBzmKbwVvFx4qyWXujYmeQcaRenmxRLD37ipd3WJNiztATQsS9KuUAyaro3QqzMmjkivjuq1",
  "key6": "53x55PxZhPKGEUCtWfXs7RZFZFnsAtZemnBM5njgWhTWxH6mGQChmYCb1kbfHqt8can59u2WJH4MCHQrN3Nxmhoh",
  "key7": "4U9a8v3LvjyMPRCgD6dEn5woo6f6u2GESs2KGsGj4WLshknnZR1o4BP5Jde1GLiR3byRUwxXzyjv8k1m68vfQKfp",
  "key8": "5DjkAP2DApjqm6YnUxxd98X6ozCTKEVtRMQqBeZhStqxPcdGLFtCHeut9VPZu2SXVuKeqN2b9UcPbC7hFCtjfHkv",
  "key9": "n6uwbirKv9mYwoLsbstc7Hf1C3HH5tggLxyFoJcFF6KBQa3GRKmjry1ys4CL4tNqaaMpkwEorxcLvrmwQnPJncj",
  "key10": "23bT5yGjB8ZQCMaLng8fdMRVuQDAUK9PwiunYNbE9gF38scokMZ3t1v9kgmeNxMWZaC6NrBAH3K6eCJ9cpKj81SH",
  "key11": "27UPXhKjzgJLimtXTn6wsL2WUDzZR933ZykYRT6VfhSSt6fB7C2KMtchMr5x24wYkvXcnBqaXzsEHCnMo1d6nyb4",
  "key12": "2VPDcCPizhZx8PeBtjiqeAni7nGUxMmvKhZGYPmDkm4fpkHiULiWN2ZyCQsj1yFZFeGVZtQwGtnUdXPnBhq2GkyS",
  "key13": "QqQyQakxaNs9hks5HxsuAw9PwBRgZw5xfm8T8YVrY7c6WjdYqkWuYRSGbUVwWhbgSixHe7wDKzEN2FC3rYkWi9c",
  "key14": "2GRqJLjAzRx9xZiRMfZ8ZdNWvMswb8R6zBaKF6mLeqSMhWhdAhCV3eMqKeadkgJpbgcXeP98jP1iA17px36V8ppC",
  "key15": "4adtfFb4pY6avxsbPbmWPNg5nn2BUmwFqH4pDXidB83Vq3krmZaC34oLJwdxMwPX78q9iicspkJe9frXbfKiYBnt",
  "key16": "CnWWDri2Y1DkRcS3atFjaTDLjpLf25fPDsMSggZ5F5G7HhW3bjPNhjMQ2MTEc9QPeRaX419dCoZDjorUaHT3FAz",
  "key17": "44tihJHSzughFnZj67oZR48Y3MmEyduiVehhn6ArC5GNLhaRLLwthnPXP6hpqUDr8e11yYqkLAUeq1TddZLzbee7",
  "key18": "5UFoTkcs41bCpxLFSyNF6tYAddwJY7iRjmiNCGNinocGgNgvRZ6NMW8bCFSrF5Ujk1P752g5abjfN8PRdWTX9SDz",
  "key19": "jYsVrNjaGz1LYDXuL4ehJXnhmYFpJuTa4DMnKi982MaXBp62fcGQT8GiPJDSNXDbYpwk5NVRVWEqSUNgMmVecAX",
  "key20": "3bn7JCNska12Hcoz5HSuQCuVLz2p3dMYqebKkaDWKwvpfpNDjnrvsoGvGE5zYaSy5CGr7teHaYJZtgm1baDXdYb6",
  "key21": "2gnZcDJg1wJdQ2mDmLoiyYh7LqqQzx5PBYDPxUceGm3U7L9FYmWTTYc5EcUzi8JVH2gSYKHRddHXRRhnFEG27Ht1",
  "key22": "5vbsDcbMRPU2DXxru1LAvWJz3gy92kU5E9NWaSgzhSJhGtxNmVzEBWVAnJahzwjtdedV1HDyMbjkVboA3Y7zQ5df",
  "key23": "4MxCu6iYeQ7ppSVjabHjpZRAxtgxM6nVb9EWike6VEx14oGYiEUohD8qUuB2Vt74pLncCKDT5TUc7Xm4yCG7SsQk",
  "key24": "52p3VyMZZ2HqWKjitJRrWd2o98GX26p3eQUZTeCJs6VzJstJ6WB9jo23PdxugtzYy4QzQaJ1mMVdPZzviAVWHBJM",
  "key25": "3LVVYCnECJNuUyrn2UtxCi9f2mnZCfPYFdXzHp8d8t5nizAaJMz1rMXGuHEt4esNBnzjwxkZS19TSfLkNgrw2LiL",
  "key26": "UkFXecFr7caZcaS9bcfBHtymDGy9271FBcC3b2eqYqHe6sku48xdrN6ff7XkTVNV8Nt45RnNqxFBsRkLVbFnbMW",
  "key27": "3MUxNvxawzWBpR7cxXqRvZequFiJ1ynYhoMNc195bMU67738uDjd1uzWeBtyu9GsadMC5yArQuJdXTYATR5fMWb7",
  "key28": "4JwLagyNA92WWPuZcRBb9kwzzJ2zDUxb2kCwCXembkHuMA2DMtcif6ia6uTd4rhWP5y2u1Gw4g7Y75soRsoq6jjY",
  "key29": "3qKxZyPXqUswVt3XjxFMHvxic54zaCTkMkDfGYuYPZ47JnJdaQYzcX7teBR8PoULtuqrhJ8uk4uomhaELw4jrkVo",
  "key30": "3ZeCfrNkRwpnj7o5c4GWfvPxiosPxX1P86Ck8uVyeqFe5yxKdrGoER5hFTPq41X659hL8ThdVnxJCfosX1SymNam",
  "key31": "3fUu5s31XSp3Fd8XDttUPCYprG9oZpz3TPUoyKzfdwZJnbTjdnHH9bn6MgJzbTBmuXnMoh8KziD6fTW5ksiGaP2P",
  "key32": "4N9JPKpcPFUt33iRjPh9CPwiCzGdwzvNg9TG82We2qLsbVQgKsc5qYdepAGmmaSVk1EPwtGch1cEWmWXkFwm1HWn",
  "key33": "rh4Jckje9hzV54vsKMotoQTdctr3JJcsCzxLyoto6Fs8wTrAj4vSJsNMjhxz1QRJh8ybBdUgXtb4HKpE5GctVFn",
  "key34": "5n9dwXrj7yamBK6SxPcSjwGUwx8qyiS9Kpia9sqkJcyEiGi5JyanknZGQzJhu5rzajKgiQx2EuZQWgWgByHKjkYM",
  "key35": "2PvfKpQW62AfUQya4Z44g9FuuvDSBn14dfhaJF7M8w7HGffWrasvNrAg1w5Zwud35EcdmpWgMUTgjNCcxQFx7BEB",
  "key36": "5sRZNf3XEeb1KkFGdeYJwzaBoxfdGpJHP4CayK331dF1GvhUXf3YGnaXMcih4ZiL4rAVz9aQTigCEBtfeT8uEHuu",
  "key37": "4vSnHt5namadRk2gvwmGuhA3JXt4cAPNoG3FdCViYCFrH6HWi1v443WkPBmZGWCcA6LXrHXj2gquU8wX7Mt8o6qu",
  "key38": "3u85YLZkTYHLUDFPXkZS9FUZRBZYNX8dVrfj3prjMMz7aZwAUkSsLHgPrEHJ9TqXAQPRicUz4KrdZTMJPCPxuDDx",
  "key39": "2R4To4n8gKa2KhvrPHkSdXaiKRnrL4nGneYSgMJ85EpCEM7WxvmwrWnV5KYeJE5uCuMnqB49ErZ3s2kxkEQvvmw4",
  "key40": "4hbCQeXMaHK4XubB6JvMdHheRr5MTLJdNayZYqcryQRNdEVKQjsDij8G8faGPVma8B6kYcgJ5wG8hw9GSX8epSjb",
  "key41": "4MCX3WndRsU2rmgvexxEWVBHceA7CTeqrLh6p5usoMfy629reid6TgxS4qRzeikpKzg1c4uqCoL9Ezf8DuVo4kJH",
  "key42": "FzsCfGXsu4t5M5bLed2wDmpT5f7KGsCqGBLxoagxaU9sQ9M2VNe3DmnWHYmsMeVTGEkzn8E7efvLePBzuWgzttR",
  "key43": "1ZWi5ntmS9wWTJiA9u7um92p7438KkR2PPyFvRF4XCpYETj12KG7QtgcQUjdDy7jTMdiZsKwuGEZkKReqncFRaM",
  "key44": "444XaW16Q6x7Bh5dMGsprHBQUSe254oBvQ5r67dtcyKUyGyzAU5wisHPCLFhGwZ1LBQ2on1yMvFpY8AtkSvqopsq",
  "key45": "4PUnBepNW4YPjmwrB2Szd6g5v7uf8aYJac67kH9ueS6gSXsTtK34eKbVziz9rmo6HrQauVx4heScxAQAWxPgCNnt",
  "key46": "5bC82MyUzqY75pAprVtEtFWDjJvmdFA7Znnw4orz8ZJoXwPUhHBkZNonNesahaz1iK29Z5WGQBDPax21BLRR4brV",
  "key47": "2ENbA4Wo1qD5ac7qWBLMBvzDg31HUxYQqbmzJP6e4p5SA3unUoCifbp7i6QEYLqHc4WoiHJRwMGoCwxWDPmA6fQr",
  "key48": "4tUHAT1aNfg5qc7y3nxL2WRQB2dWVZEgdvn2igedcmMP6AD56vdTEax8zW5Q9edLi6UcvQAUS6ekW48d9LUCpyF3",
  "key49": "4SL2YgvJxLZK3ue1wXwC3vddCqA686gnJVKRWqBUo4Li5AwaxbmY6DtnpkmdN9ASb8Dfr1EdK3cayqCSCCXS7jZZ"
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
