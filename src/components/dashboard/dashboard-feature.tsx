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
    "5kjtrKNBDyyMzbWDc9SG49RuXtWH6ZQdpiianDFmejm9Sa1NpshBSqb9tnpdBJF9LWwHfWTEGYY8MYeUEmbwugus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CmACeuZbEGTZYhpJCcmTxwe2xzp3Tk51d47pUHe7aoxqqU6aNHbYd4qgmFmBFoZh5LxB5ucgggxUx2NxetvQnDy",
  "key1": "4ZhDJfSKR2oGUoiKWQtzX4E6d8waqnjPVw2WjrSzMxeYg7vjfaneoABedcAnSJxH82cLS2ndhujQDVoTEeQrGbg2",
  "key2": "2FBRzgurHr4LfYEwn5dzBSh1RMofJjRKis3HbRTwZUhyQAcYUC241VXZai55vF32ay5sjRgR1iaP9ujN7t6jWtxQ",
  "key3": "25fJKgS96M4seF397VkKTbbjj7fm5Bck3KBeCco4Szb9CNW3grcNVA8x1u1RWq5P4L3V2c5nVusNHJsgfa9xNgFd",
  "key4": "61t9XKoEZFLmxsJzty9nW86ibiHqgxVk4FbKmpDAsdT52HYmzHDWiCvnJFi1rG8ywNv5mJ9K8VSck8d8SDPFgzLp",
  "key5": "2Ds4XLeh4UaqzX5492ie3uAVyWe1hrxgEiQRutBTqBk4FKKQmKHjTaRof7aMnJdsHtKi27TP4hYpM7kdM5EedfMA",
  "key6": "3T6LxvdMTtfZRu9dypFjhNrCioJ6YFRK7TaSCasgf6nHbae52K4TNfV2rJ55jrZ2vgAqEjJf2k7KR1wgn7PNytY5",
  "key7": "EZDXUKjdjWnDZNKLSfBqqgxy9XAv8yYo9Jtjd2vdsDZJ8zoQNZw4KpLvR7F9QBRCsrbCFJaegy5QrPB6S9ygtP3",
  "key8": "3xXAND5rwMGHBRx3qMK9gSEyKopA28xD67bdzKSuvUa7kUV28z6gAWu7eegPJ7WNXSA7WsNRpLXj2VMnNQGMz6K1",
  "key9": "uKdfQZrAKrgWHr1UFexm17SN4948USnXbMhZ3oPnKtfEQ6PVDaHKAgLVbKaW9AfJ5uz8UoAJNWgWGZEfJzqtXzs",
  "key10": "5UZEkasL1whYhWU2hKT98iSCudkN4U8ER1Dp6crQuyA3Ku2enBu9wxYnpzxSpdYFxaftGL7Fj2k6Gi48yshtQ4F",
  "key11": "4pzLJUWfd2JKXULULV6sLeLQWbLfcKHDqemufEoGgcqNuB6pmhH9L7MttPoiaDNsoJ1YJdoMvxVcPVJrhgn5afhM",
  "key12": "66d6WjuPPBLKNt8jACq2eHAWxWkpbNobRn2HZwehQSzsJE3Q37i7UVWSVLQL4CmU4SpisRNhLVh2GjYHzt4W24eN",
  "key13": "3cYeeQQBx1YL5uHM4hpQK2ANgb3vrt8GkpJuP8PPShGZnq2c5FREgKwMzB5YU9SXneb1ADK2SXksw5SsvTT9CgTG",
  "key14": "4ZHbnCCfjvZpEkZBLpP2azhzPKvbTh7ro6cTgwD5KWJpCFiCGVCMubuyyPyp2sCjuZyAPvCPhYFmgPrH7KiU9BY2",
  "key15": "5KPF94QJTU5S3ZMeTikze3smANpHCy8ihHVuqLBc5fqLgfoanx3kcimE1Y4zHTZwZJKFXStpWD8aQgM9LiS9uUp2",
  "key16": "3FvvUFnA8zxJFG22FCs1AStNs5NMSC7Es8QRuhTz4fTE8mzhqRURJVPTakQEvtjyJJac9TFiNAkqz63BiQFw8znj",
  "key17": "31PyZMmK7CE3tFpwxFCHz7mf7QZJ75YeKuwS62kWZpjPY1K8L3ZnXfgF1ALeQK9wZ28KFoowuhqiTfJ7cQw5HYAU",
  "key18": "3ihqLvu7qCB3x7vCBc1zWSCXydRJexeMbjkEx2GB1vFXTyDVdAzg5vNCaWBfd7cUbLwngAcTxzjCyx7awgb5o1pE",
  "key19": "3sp2jrKuXNJMNgr1w4cpDSFUz7Capm2jUdzuN6mYmi8KYzWKZMsWbnaQmEzZLLqtY5E67Wx7XUuu7deQbRwzHtf3",
  "key20": "2mpMV8D4AmTPCTZv6C7QfDPu6hNj639GNJ4sVinLH9C2q4AiQiJ7dir1BdF2in4c7kAkzzH94GBYFHzp7RPP13XR",
  "key21": "5Q3GMPSmFH6FPoAw1vANFUita8G7Wt7sJqWFvE77KTg7UMwijhdvgWXVjFA7vC23pNbWQxxr2UVnrJGmE7T5LcTd",
  "key22": "mdMsy1qsf2P7sur8Tf3Hmsa4dwNNWBJofn2VK2pLzGqnimqcZtbzfZoMNBbG1xGBZ6RA2QpDndKFdF4gGbrt3f9",
  "key23": "3aXo6VBHFVExHtjbtntCLhpsGpAb61DKhnho4ahT9uept6gTbatv9Ak1Sz73dCsdHsk23xaAgf87evDxS69iZs7j",
  "key24": "24HuUn5kA3A6zbQwXVm6C7AtL9eK5nF5ohMo1hZkrqvcTUUEy6pKAbyXrBTZdeLSk78sm7Qzhv7J9WSGmPnqX5Vr",
  "key25": "2FDF9cJ22wwcw6QfwvPNysdLDe8xiXNGEJ3z1TAxDcszscJgVKA5Q6ku4Dd6BtArq8EUBMsfpWJFNzU4TAqhY7yY",
  "key26": "4MHkEnz25hgyi4ZmFxv7jcq6GdSDWsPrFRxKGhGq4QEetAY2neezfsynF9pSgNE56B6H1sdK4kHJarUxbmFRkfUz",
  "key27": "4aj4rkgoor9UAAkYuENYX2Wh3drk4Sg3uTH9QrsLxgG6JG1ozFUk528darh8cV9Mbn8sPRJtBPrRmwoPmd4k8W2U",
  "key28": "4fbauwx4qPUFpQqMuqXXmyBCeXAtXe2EHoMrrmTQNPbUUTPKBGxsmEqLCwpjTcLdVaQMimmigzbbdDNFyT2GGZDq",
  "key29": "4MGc1wzD4CvksQfEkGtcfW7EkKpVdoYuNBjah5wijrNG7AiW8xzCYQSRuSdxCbXPyXLc6ZoRGyL2kfF2ZqfPS2uk",
  "key30": "4gtQoywW3tq32mdwzZLDQ1QVFCfG182UiFfdJKQ1ophrvcvPtmdE5XWJHaNTSTe7WEeW19Tdjp2JUijvXdHUF4yT",
  "key31": "2rfXN3WFnQxqwvHKFUMKfEDYrMEfBfKrLWqMQv3waRFrrNjwyoyRCr413nDS8Re9Kc8TXKE125KZ5HDKf8EpPnoX",
  "key32": "2M9Nh94QE1hhAaTPQbVwdEn6KAkYGuv8rxvFTP4ApnFNkGCihAxPWkkXHiZdt9sf36GUKyVcLLnr9UnUM33CEGiy",
  "key33": "3BwvZfTQgxYmTnNZ9DtBj8jXPMa2u9tZjr9rajuGd1xBr6andGLjon4e7UgsJ52ZUrmV97FZoNmLzEbEVX3ahQQy",
  "key34": "3Ndtm4D6jRwmbXzRSZygfb2ViG5t4GVhhRq4VwHBNyJTvg4X7h7ft7KvYjFDotQE4JHeeMD7Yo5aQs7wMk1wFcKu",
  "key35": "5KfqWGtGqvuQddM1Gii6yZnkVE58Bru2F32D8MTFpRNsW9DNcK5UKj9jXMZ8pcgkHVLaqBQNyerrXo7udwCBUK2U",
  "key36": "2jNeeXTowv5fit5kvvoWgZ6qxPSBk38ZTaQxM7PZt1SYZmoFJx7oA4yANvzS8fBT3ZK9hqTmS35yR8RLzZ292RyJ",
  "key37": "3HaEkiW3yQXYMhb3wEsDhi3bghBsUuLrcttgLBmfAyagwPYKSoeGz4e6j4Wpnhqgi9JWS9Cwq6S8qW2weXkYnpkG",
  "key38": "4LHbRBo9iaDCfJzWzmrDp5E5BMBYxCQvQreNy8saWxU1ubDwNZ8EtWqPee5Mtq9quXzC5hcVhXTha7XmCKws3mT3",
  "key39": "2v8cZxj3Z46er8fgUPhSpRPP8YKemaHNnFgLshYQTEek6s5y71TfXVbmT9S1BcdBGjtbbJvcjm8tGXbeMsCS9SHd",
  "key40": "GcrDQ1hxrmut5hW9H7Vq6LuNpjY7yKq3PVcdrPuUFFSn6tkr1EPcGFQGZs9958j1xgNR6uJGhfyoevriApivd4P",
  "key41": "3Bs1aqDaghtpHhnK85dbiAWYjK9HyhQJzNKGad6aqZzT6KHHSbb9h4TR2di9WzTZEQ9FgewsPedSVnjeoBpWGMsV",
  "key42": "4Z6G6JA988t6q89DWMCDXCubL7Y5H3KC8t3zUhZ8y3RF5iWZRALRPaLi5WeQdsmGnxPbphDfqZ8nXGhdzXeVanEz",
  "key43": "3xyvJZ5ksBqvTxjp9wmFhZqJDM6v6J8EFPkjfUWbuZevL2J9ywUfxyfxnBt78zys2MRvyirhSjFjYyA53HSWquf8",
  "key44": "5Y19XyCnKp7T7nBumGNPR5DHv7fcnWT4z9na1ipV1ZL8xqKWjbfznWAJSmpKdgUP3yA1VrpwF9YxZyNqzJKCMGeF",
  "key45": "3Jo7PQKqCeiCersLCUj3vEXdqWACFVYs8r7VzHS3ukvqbaCq9AjD9D9Tg2CBBBZLrc91QRQqqmBNnw1Z6nQ5iLAt",
  "key46": "3v6VV8WAjCHBmHGN5cRAUBPAW2YTGtMaFD1ieAaenwQ2xP1t1iZN7x8kY1JYp4JAwcbgav4tEL5c8CM33UrrZCAH",
  "key47": "5KXf1BrhnVNB5HgABiwAVTXYFRKYLJcQQhHKdHwyP5THLMX7jdZZrWHJMzVCZpG4eT8gDu3tjjz8tnQLe69bQzs7",
  "key48": "3mCKq7fqy1FooPeGxVdNZ5vTMdieGwaDmUujvZ9sJFFopc1fRHUpEzAwxcqdpB5N5iT79mQU55SLyAPbX5vdn9Lq"
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
