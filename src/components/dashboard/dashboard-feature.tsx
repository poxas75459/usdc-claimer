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
    "4NFGKg9JrTyburDwc27cMkq6MYqXkkjGTnKBTn3EfayZacKsS9aizjRiibsQYUni7fbpoQoD9afWxDjjBFrFe7bo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53FfLWetRnrBwVC5r5jQz3Co49egg8onFjn9ptb4NQnnE8ZGKVMhHyUYSzvFXFZR6xthaLpriF27JsM6LuUhJk88",
  "key1": "3PnDK3KjSWHiLsMGxCKB5kt6u5xxck4Go8LcpMVFf6BXhnT6yZR2WpxZxoxMyHopCQAyyJiunv945rxpPtg3TqS4",
  "key2": "XwDD5wFZ9i7jGqJpy6ANV7Q5LK9SEknoke22R9QMnNXqbEDks1sWpWe83mhg9DcScvBUfXv2CtRK1JjqBNSPvv6",
  "key3": "3QgoEqGjHQiG9EHke8rkJeFJz1JTF9Bt3kQwU2uoso114YhEkw8dmPUHo3pLXiT4KPLZ5pwF6n3gguwSB8NFzMSo",
  "key4": "5L4Yuz1GaaMSBFbdzbPuXfKp57hL7GnEHvcxYJM59jMAEbDqeakcPy7idwxkRtJLXz2TBL1FZXVivqJHcXESBNKe",
  "key5": "4WEoi93UWXoPCzwaqNmvrHR8nP6vkV8nzsuydbXCnPWXzcaZZcQY8pTxWwX9Hza1knMnNyQRZv3ALGXEyUzqhZXR",
  "key6": "Uo87Vzv2LpcyfAiFTWLG6yEr9BMwkRAPJL7etpJzu4vRfe529mWxwg4MCrZf6FiZjVYJiHWLUCVu94c1aGqNuau",
  "key7": "4zHS3LrjNin7iBszyRsH9ynMDWZJvhjxZ8CVpJ6TYWUWJ9rKrjREUnYfhGZpfVZfSj1EVX6EknTqoKXrDLz8BATR",
  "key8": "4EJDdJ3DBtw8R1mgdy4RFGzEosszctPvCWBS4dJFBsDL1jMEa43EUbFjMvzb6kPH9LmK1RjihMNrQe1nLyX2hG42",
  "key9": "4Sr51sigGdmrKmFHgLsuWZy6AJx4BkC92wb8xSbE3udP7DxCVoHD1mc9Bj2fjQAPDVzo1B4gGVpHUZaTjKuGY8Tv",
  "key10": "VhRe1ep6JMSyFEHpxURjf9i3SsXqWboYfZwcaY1bDwsfhoA8CSikbAFQkyu5fEHC8sCHfwJvRKcz64vSQ9djwjd",
  "key11": "3vJ8RjCpsLeUfFJEdfXWsNnNuP9FkrdKio6Q81mkU5LFr53mgJAVNi6DctySUPbBrXa6bFSU7eNgujkos9bC9Wfp",
  "key12": "t7Lq9J117Gee5fNJQerRxTBqsyt6w9TUdMaj6zVjnZiJtnGysGeTGcExkAeZLWb2D8wsNsHuwLHYKpEJLkiMwc3",
  "key13": "2WNA2sKfZrJH6c3cti6i9vxCR4jWDThSnRarXkwcq9T6dxt7SKm3CTtCMqz5aay7dthN6qKpcPikRoTh1m5fa5E4",
  "key14": "3dePjK45jnzpvznbVPwBLgRA9ZDW6R19Q5J3gmD6wU7wwhmBncRMZt7E7cYApU2nMAQu7iHPFK8vckkkai6ufKKm",
  "key15": "5ZDTRi7s4wESGzsb5cSHKPFMqX5CXzj4Eu8XeapEqGWueiSU5VxYVwpUVaY8id6Tpu1ptaQqJ8c2qAXdsZ8Pz4mC",
  "key16": "4i4XEudHtLn1dpwfB88iwE5zEV1wc4um5qAHCzduWS9W8ksssHhqdvzXgauQPRXBMkiYiprny2Nm8Nv5MDue6oyR",
  "key17": "afCe9TGgoq1wXAkSaaQ9wFXF4Wsww94Tuf95Y66m1QKExwu2ppUwKheosrGCukXHiKp1mY8DcoUbRexH6m2zbot",
  "key18": "4KykR7ua43gHTjd9R5rQxcH3q5rGL9iewTQsymTkMwNM7VkNonppaDRdnbKTBFGfBmRhMd7urHb1oKyUWrn8QAy5",
  "key19": "4Vf5aQJywaDCA9mA7d5Et4F4Sj3sF4gaqU4xzPsrYkny5JADuLmrzP2n5FruAJCKDkQK52TCb7JGWppXWk7U2CdC",
  "key20": "5CwBQ4h8pzd1X1Gqqekksg6kW6MYxgsiXudkmqL2uh5EyUM86oymMdAkxM4UuV7EmetfLBGUDaZfXCC68iYsgj1a",
  "key21": "PWwufYQqjmU2sPLnHAkL6gtiDfHSeLa3Dkn9dD99dT6aNiDYy135P8RCDpCikftsH86EwgcbCBm4Z7VB1CkCjyL",
  "key22": "LT3q2EWjb8qbMLdRXm4DJafFVXj5mXxmuFEjTBp3gnhsi4eMypPpGaJMWhz7MYy6JLsJPPeSexoBPQWRc6umnNh",
  "key23": "3WSMErtURdXEyqJioCB6Taok2CZ9xjs62MrLy4AGtQRCBiptzXzu45QrLjiyDgHVzTGC4o8WP9rYguE1EjvvJKzv",
  "key24": "4p9LdAHARPZJFA1rY4DCgubuKmjgHMpKL3FjXFeHNtFneayiixoF6QE66hF8fjZxLsjr6quHJ5GooR2Ne8Sfvf3r",
  "key25": "4V5Pr1zLcvQ85FnaEUCfikeM8e6bm5jCwNZq2ZGiCDC6oBpfMWVnRNZHg48eU5RgWmdwETgv7pFZ95NGEmrvvem1",
  "key26": "2Y9oMmp7ak3KQnuw9SLb2WPA5foqBW9U3wTuhtMYaciZkDUvRVKxpVE6mED3UfiihH2nwrajLYNBzVax1xoww29e",
  "key27": "yr3Gh8kBuVhC4uDGtJArwv9LJw7kEkAiU59Mg9Jf4eLyKaD1GQGW4rhT2pY7CxzyWX3jkKQDqQKdV1DQ4fJR5EK",
  "key28": "4Kjw65WQAewMARhTR3VGL9eRQjXXeg6K2PqgCNfiFpC15cbh3jiKXPoY97G7W3oor6mCbMuNhHSLHxfM9Q617vZR",
  "key29": "4LtTiqPsau1St2KuTLyBoqbiXYcttH9Di5qaru3jWb5Eath798Rjx4t8AQ4H4fnyzVVMPEGrPcKiJrux58E9iUGf",
  "key30": "4YYk9FPnypc3CnhoxqAt1dXo2YWNcenEHmnLCkW4e36Jej6vz8fFyW3Cn3hkZEXZV4xwyj2JZkYjN2HHH88wGsjj",
  "key31": "63AnRLRm4JSB4Vw1Abt2PCihacPHGJYiAngQC4wpSc3ZA18nwiX1Bk2o5Qp7DauSGUajnanUvwareLo2ZhQLK5k5",
  "key32": "gTjHqMog3NAELzQ1jtvWSMK3xwNVm2mkyCbg4WDRe3Kxg3qz8xsXu59VszcRrigK5h5q2Wpj6GyiqvWQAwUcy1Y",
  "key33": "2AakspMU8GZLEyrvmtYpAs2rx6BQ8cWvcWq8D2KoCWDaRa2aKkaM1LnnwdJuSHJiUXcWmRwxLudbZWnehAPYHtvz",
  "key34": "5Hs8cMENJJx9hfiFm32D2gbEYz1y2KX9pZRRxp7WVNqBdMR2eY88s2sTLe1hBiVrWYjVPKa2VzVKPf363iaYiSW4",
  "key35": "3FC2uKQ4DrUcCc9FqdQEXb3M9LWeWx6mnDeDveRJwxJRasti2cGxh5fzRAmpUqM1ByUHBZJwMP8ms9Bk7hXkM7G8",
  "key36": "2rt9FS8iurwscJpgGwB7u4oSodp1YJY5jEWdchNjmKkb6Z28XYkb7Wj2MkhPty8LtTGBZZBf3ZqzWn6otUAaada7",
  "key37": "2JAbX62ifYtBt8Rc7shWtNS3kE2H1iNGx93oxiucQhRYogXfNXm7jHGM9EwyZmGsYPiu8q1mavNuXzHASKGJnoh4",
  "key38": "5HLVyjXp4YXTQSbH2eqzwEBESuvhm5wTth8vor94khtScNmcPStKYBUDjANtD6rP7LdE7AaDwqDKTHnvLm7G7fGA",
  "key39": "3fd51zv3QK5jXyV9pLa1ssM5qiWMSjLYLJqdRY1NMTnd5m9R9aHj7bvt299Eg4XAu4cMewQa8fX3JGYy4TXxegEo",
  "key40": "42YAR9yBmY3GqxwXm7TuiRNbcMKgkPvZGAjBKq5zZQWpRZc78QxBauawtPeEdKHMtUEyTT2dr355b8GwqD9BHdZk",
  "key41": "3g6YyEFux8WdciAvq7hz7suvMNpbEBiQ9N4Ut31gepuXAgejgUty42kE98NAVHacgnnt9fn6D66vMsZqDyugPcMz",
  "key42": "o1HtaGv6sjuKnz2naaLFVdqXYighiqapJQBAWjQ9knVjVFFwEoaPzmSdU38NoQE5JVvRvJZiL4Lsd6xEF9T1bzG",
  "key43": "3ttc3v6YT9yTNpfcxXVWfy2HxqQ9yUDQhvt7Rix8xLAXTTu2yty6oDT8MEruyGVU9uL6jsXiA85pnyr9Jvg5hfer"
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
