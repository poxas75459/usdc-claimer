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
    "4GkKhsN77GoxgAcievnusynZQAkoXREGTMMoUN89xnfz5SCbLbkP6fVfL8EbBdPnsZRoJ4XTTzPJbHmv8kJojYhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VP7z9P5uK8ob6Sg6DvWWu8oHUTVcf3L94VmUgr177VJnzwvtF3uAnLAhq4g4xeNAhZ4yEahtnpEaYzN8Fv1ugE3",
  "key1": "5gQGQq2B1MaiEr45D58bEGsTgPnkkw63nhXhKUEFi2tXAXbnU71A839ezY4CtQapRJRBEYJh9fm2BW2BBjYVcZKt",
  "key2": "4epHpV6Mg1m2WuwfRgKKKQB4tjbPQSfNLLXNHgMYumjmT3zm79usmbzQpWWcGGhUM3dygR2b96PhtxVxXTTUafHw",
  "key3": "4VjqqHaTgqWnaVppyraUTvJrvKpos8q3SceSBb8oAXRB7tEA5t9TbL9JPYq8WbaZ6Az2ScCTLVXxDZz3MNQC91T9",
  "key4": "EV7fFWqcKrRXYBGZbuUAAXQys5Dy3ktNfkQSKhuaknXMTRWemp1i4x4h5q4A446SX2NxNbtd2yWXXk1zTXuoU1U",
  "key5": "41GNGHfgntC4pkq2CJYk8WPS7mCu2uHhxWeKnCJY4CnYiWEneiPyZ3SeE9EwikHC6TSP4EDtgcgAFzs4JXJuSBkN",
  "key6": "5tPCSxmvXN6Cnqx6xpXQRmjeddSoqkWxZY1m2djNWRFDgDdrh57QZXaD6F3z8biq5TQ4JQ1fWnV1GYbCzbdL9BDC",
  "key7": "4kG3TM19CJ9W1T7pASd8PWiCJ2VswV7n4KDXvw6a6cSqdvqJAjRiTckfnMvkdbVmrsAA5cBFQsNCUtpYfTako3se",
  "key8": "47DnhF8Qgb8eqidtNPyA8VFia6B3SvyLmX6QUF5wmLaeodw78xDytm8bk9E6TNhtaDiwyphnkB4FBv3KsyANSAXn",
  "key9": "2MGT3Gxy56dsGimKHtEdhQdUmWXUD2nHq652H4qWDBJCdpYQCWBP5nd25FLPE2vuF4HE1fh4yQZGLZ9FNEDRmC8m",
  "key10": "4b8abEuzGQJRwhEJq3YgAacVunmSkMJwSc2mdu6EDshm83hJ9MAbbBRT4UuKWj9SDULn5tNjt4z38D9q4Bmpq3y4",
  "key11": "2KrjVv9Q8cNPFomeo2ZpytiY9uNBrRxVrraBCBzYaXpDvyFMajY6HoxciggFWFQ8odo2RkugbSUi8mQBgAnXkNRL",
  "key12": "5zGVC51ZwvM1kRUe6Zeaim4j4erqcDVAgVVpXQ4n83j4XRc7RwgvXd3VGvbsMcVeLryxc9ZSnPqKTmdc8cyLkrp1",
  "key13": "4scDfuifpDzzrpaJKTwoFkXP5ys2fYzVG2EQRqhzH783Tb44kWHn77K8nq57wpFGGG3BPjMqEYuB34X8Sp8p6q38",
  "key14": "2HyMVyJrpp1CnyKZFvyZxCYJLDXmL5evcc5EhtdpWKugo9faRA1Hv5YbYhtdDzN8rcFgkBsnw8EXXA4CfQEe5aE8",
  "key15": "5mYGCp7cVH3xgSWBKWpkTHznYNix9HygqMUYeXuD8BXYVQL1i4XHzMLezTJzDGEzjLL2mpHBysVBo6WB34Qx2SEd",
  "key16": "3prT5ica6auyYEyNoeczt88qdSULFPwUN1JWUs6EH5fvPZcABs6gLQDBEXqXmzWSqQiWpmZ7ToDZgqH5y5h5SXGF",
  "key17": "4ByYBbS2SDwDqukG1ufRbAn5vV8WfkuHWyiE1NkNDZi4d8wpAoUxVzfxs48o5cX9EytxYQQkC5JpBs8HXZpgHBsj",
  "key18": "snYG7DdxGVvpSsimAMaPybhkyjkxz51kyU3Bposwt3rgZhEPfi4JqbTXkdoX3E2Ep1dmF5CNJvm5ZxDQmMgYzgG",
  "key19": "4gKbtoiqYRuuZz8uHX7Kmtd4WsKXhmDbFFo9ynXhyPzcqnoVCgKR8AHaFQ1LZjjcXQMFrQGNU5MCdQc2buD8Drcb",
  "key20": "4woyYKKcXxVPsp2WGLAARENoCdZKSX446tBdo1y4Vjjd75MTuKkNDbD2X5uPZMxSa6t2wk1wpM9hp1EPtQhWGpn2",
  "key21": "4aFpYEszdxUF2wJVvtLbaoKMKKFievdw2zH6Fu8dr2dHquK4a1NaZkfMtCTRjSzJmDPqbUmrtB7uBHbX9tqQu1Gf",
  "key22": "5EFBA8SRzbPUvvGywcDxyJecW8KX2G43efPS5DAwR2FB6a372Th3MrTTpSe8dsf7q6aVU3JapugkXaYYQG2hA8RP",
  "key23": "29TtohV4Aej7mEUGSZBABaTc5qn9FsbkhPBYch7KnEmFweseLXZB8pHyT7dhxu2cjf1hxzzuLNndsxsX9HHLoZ5A",
  "key24": "oU1TeanAfYQM5Bp55aFZMdtYMJTXJmjxyQb9fYNvYUNwSh7UbzFZVMNE9ykMXHGqP4B74atTgVddTyJY4Jrr9LV",
  "key25": "5LEATkoiEDVmEMy9hg2jCRw7T86RRRpNhtgAR2bxXRUBwGkFJ3CqxzNZFMnYFzayDXjbLEqAcRqtrYinjoWS8VB6",
  "key26": "3cRtj1HBaFAGXsVwtchJqGWmV43G4mtdfUnGQnCLoZMgWLeDvZsqWVxGQRKLf655LNxhfG99esqg88nGmVcjCptJ",
  "key27": "5tG7LbC38fzeyQSKMHxo4HUSGivxwjKX8aavSsqx9QVApnMz5XPULTRBAs9SscbaYMpLuVJnYnJdTpV4uuWpxbaa",
  "key28": "314nsXPsMSjVky3dLjoHwmXAofJwV5uUhpd7F19Z9DpQMmhu6j7NtbNNw1ZyruFEjbeURJbtKiKdEdhmXBgrkvwp",
  "key29": "3mbtvqfVsLaa1dtc9BM89xLfFHfDYRDpQe9NBLMpMDvtyzttgQ57vk6LGiYUqzVHUFriA3f2gPGjX8dAkmSMzq8g",
  "key30": "51ZbCqEdMcrnTtfjiMUxdohqfo8FAF77eCyvYDmznfh2nysoEd9Hu7Wa3yRbg2oSC8C7H5H3qXWtp2ur2sRdC6hC",
  "key31": "2FUbDPkHw8g11fzQNo6XmECmCiY3wFASHGNgevdrUUtaWfhZQgztyXWCyesAv6ejRZc4VZEBMtLn2fkZZFHjn2AJ",
  "key32": "2VDG8nNpUJpsGxS6ajETobpa4Ge9KYa4YJmZDs3r4R8WmKd6tP7HUDeg7tCm4gJajT6zyVbrT2pBpB6CgPdu41Dv",
  "key33": "5XWNysLjArvboAJ3xwCrh8mAAZiAp6AoDXMYfiPmyducZ913jC7YiPz72QK8TPi4WbkKYjVmVNjNMbRdgFTywk8a",
  "key34": "KUYeVDHdvVrjbzUkCXQ1zQFGU61nj2w8Fav1mFyAgxSRCsN8zMtsgfQajxrb7GroXgXq96Vhy3zLGdkCacZfx7S",
  "key35": "5h3kNjp7AUbmZFqgjJGef45fHgJ8BU8gkUdwXJ1wDjvKVzmXiXQZ4YAXjRr4tGLq2PJN7BW74oxn3ZC9ZoinRRpL",
  "key36": "4e6aDDQZJkrdZdtw8QCerDDjffxqD78RSVTyh4UDi4Nvf6iHLmguedDmHGHWdW7YcYcqpjachYFDNfEhGUrWnhzQ",
  "key37": "gLZHwwVDJZjaKDE7rgsgYjAdbS4Hvcwm5j8th4MoGV8gyyzTgeZbkKWDVGBkUGCtRme2V2aQGt3q73BStsz9dbM",
  "key38": "Qym5tFQ2G2d1wmTsZi8B69tFHZh6Zn3H8QgiCFHn5Xs3Die6Qc2vbfB8aamvdN2UfnJUrsELvVW88Yj4jSQrkg9",
  "key39": "5YVDcJAU5FvoMaHriaaKW2LT87mNrHqa4wwbwTFUhtxAnRDzZPnKUdnSJ5N5JnbZ8P1FJdYvQkmxHnuPmD2kac5W",
  "key40": "4QRE8qXnTmCvUW4PBYx6VALw1ArPVW5W7tByNnrpNg8CNmeQgEVMTnn5nV6Lfu2g6ARcpvNfZ13cziMRWugBZJj4",
  "key41": "3Wu6twfM2BjXRrCZ3KgQQa7MaYsR3Asp5ndH8bdtExYKVaY7yck2pvTgTGnasc3xEqvecAshVWNGtaUqaidFAfus",
  "key42": "4He55apWDiktATPxYYMpKdyityqapuQ21qLstJXeyoCycunnzaPpzfwdta9NGDAm9TNQER6aV54R9Ra87aNXy3EQ",
  "key43": "5yambrPxMS65XgYbXojEPT8BrVLtFo5chHx4p7nH5usvpcJV4H48kFRGkMaxE4GB56XRc8KzhsaPYCww1N4RCgHU",
  "key44": "495v4QW5zabdHbFsVUzhvHBatYaSrq2Uc6qZWBGwAaDAjwzi7B4kvedLf7gb6TcAAraKgZgGVv8pCjYS8iJmedkC",
  "key45": "4oLkMEtWM7whkpEeFJkBtGA7C6WjxfixQgETJRFqMzzdUUf45uruqKzHaHZnK1JWEVAVD3m3eEFfBrjM3PRckEfx",
  "key46": "JHiZeNFLidNCgeN6GNFsBsnaCnDKcSgrFefxSZ5AJqFJK6U3tdX2rv9aZHRzsjsApYPPAZQ2TLM19UyyZNwsPgr"
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
