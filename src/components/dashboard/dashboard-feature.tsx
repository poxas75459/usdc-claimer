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
    "36Fp5cN1aBFMiZeB2USQBFqj41DQqX1Lx3HKrry1LnWR836djQU4xgaVvUZ5hEQfRhA6wcm8DYhNfizbhWwQHRCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EubFabtGku841ii2Ljthj9C2jMBbPN4xPaMtqs3Wo1P4NEXtEmEthGGe693dUcu3ff46vozsKKTMQYd6c87FaLb",
  "key1": "c2THwR1eMxYS5tmci3n258woGMYQFm8yUQMv9vjFB3F7PaXBJE3bsisqP16DubiZHdXvsVUL96pZo34YchmYgAm",
  "key2": "3QHh1QqnUDnskv7fzFAWJzF3a9vVGWEPqMaa5LBpvmdtFgLV8THw8PDpnbtv7QbAmofQ3yHDgpyLzn4H6w5GPQJV",
  "key3": "3xGqHuZGnYhuaeo3nKNfmvwvr7YfaYBsyYcnDN7az61A5riETHt8QroXLtX6ytrNCMarhieyCCgnhXjzz9byVnYq",
  "key4": "3wDGe1yRQevJ24eiw8RAtEKQFWLw9tP21BHgW7hnWaJgPTZr557TwHLMdTisu4dPmFn7zAfzT9ohSw9KUqYAodw4",
  "key5": "3LHqnWi1RSgnEofeDW84j6riXw4s7oeMjQbUjUowohZCyDU5xEiKRUcZZtrhTf89ZxytmwC3ooURTXZhJ9MvfKhb",
  "key6": "23pYH11FEkDkeLv1Yjst2vnZkpqeP3vnBJrEa9XN6UPTRqTvwcS9CNGn157MR8kBsV59p8NEobB5A32S658xjw9i",
  "key7": "3hE6i8ZRTDCrgMoAaiRRF4zaMWiTgCtQCLywpfmVjiytud5exyrBVnL12ftQBjYKwyLjaLWXtgbYgSrsWUsoXV8J",
  "key8": "gRzAScNnvvbw6VaS33Lua4qZDzjv95Y3RFUjHiAtj3MNszkGM1ioMB9HR7HKa9rJNo69yPuXjDubLmArBqJBJUp",
  "key9": "44Ahq9V7fnAcufABQXCdvWypkUVPGXoJbMbmByh4bK3jNZyi86YyxBWuyQxeVPfbujRTXqX9atueJsiEzAAp9Cpu",
  "key10": "3PFHUEkde9Pd7tKeaQQFuBqkRyaAXFAPTwCYNKhEUZDef4VwBzV11LFuWTfv3uiTNzwRk9PqxS5CQayYdXdeLM2p",
  "key11": "3cMtAkVBRPfUqmFwP1QkeE9xUBkVjrQRpejwpoz6p1pxNyGAaQtw1bLSFjPaGUQcw4pVyG5bj8H2M4knY1Bqf3ch",
  "key12": "5cyT8CF3UHibemdGpCxPhBU6ep9fZacXoqCPJHDsR5qYMcKxJEg1CRCRPZEFHMUnyrovKz4dMPAJq5eVPMVHTmWV",
  "key13": "3T6BTxJuX4hdWxGYM1Wa8c1nWdRqPDodPG3tKc4btd9KuxcMxm2q9q95B2VhsNHGffpQ7U35zJaYUkicpqMANah4",
  "key14": "2wCef2QLMhBDNq5bTuhS3QUFcXxzyTSBG2csY3SmkzoTMjmb2ofzkZt62qaBAgXkCBzjkrYGvHjWiLbZZzsKSkSm",
  "key15": "5DmYp13bJZze35ju2CLe8Gas23G8eQ5CzeBC4Eu7iTcN5qAFuF8uA6nsbsZGfXnK4qmPmiA1V2uPoxpPqviF6NWJ",
  "key16": "2f33xXNjLu8Cz6AWGAQFajKB32L7NpLXrxVzGsC91qr5j9gyQ4MMhhqfsMqAW2kZBseThnMk9gcbddVNUBCAV9Et",
  "key17": "37qetyqm1Us2bmHiZD9trU7k1k2TN5TYtZzXVvjTCzzwiZE7qa2BYxJTRvarqXQsk8FBWWCmLuNqZgxeVYMxG8uB",
  "key18": "nDKKvP3AwH7Ykp85iR9cGr625k4NyQfDWgbJ2SuLroBw28DwUrCoViR69R9EuTXnpWRfejdEHRCgXVEE9Tztoro",
  "key19": "46vnbeWBsXjegDp7zG8QbsZZR3tdDpDcJs2NkA1Xr5Jjia1p6XdwAWNdCfuPt3M8uUo7TyJBe1sULQfSJ8Du7C3M",
  "key20": "5BduXeqNJ9D8k2NUwJsStu1nHr8G1iSBivZvoATvaKxjeT3eHEeL5h2NruTRZcPn6KQhGERZ5Y4MedLdSXLrJQXy",
  "key21": "2B8tAqMQgnhxtRMta4u9EJThsmTfM9h9uUHbnGHAe54dY8RNr7bJDspShBnZVsnjoo9EY8Rq4oMZb2oobXUi5bdZ",
  "key22": "5FT78cdHMUzSFJQeSRK5paEjcdq9o8ZyNx45WawGdxz3KbT2qgEDUKgTRexoViJAwiQexBUXNpoxY31c7NU1jyKx",
  "key23": "4iM8BMBFgPNbTKEFGJ6W6LNK21ZWAvcY9orGrDofmuhDxkc8ouDZr7oi8pAgnz7oCaV9yCvHk2Ms8GEpZjx2U7No",
  "key24": "3r5ifZH1zXSZo5QVxktYjcnptEVaRPXDZ5LRe34UeRKCb6ftmY3AYHrKgscpi3Q33zMVUrvAjYaj7WUSY85jHBmT",
  "key25": "3qQ5KWD2d4iLUYJvT2d7ATfG97qZKmbaPivu7RvAMq113esLtGZxGY5ZzuAA25iu7oEhAwHxDJsx48Ma61ixFUzt",
  "key26": "rW4JCKcw6KayAjdrEpx6XLzNqjMeW4Ta5woMvJhTACuhftJkVydW84Em95wihjWdTvWhR8EpBAaBFJF1bSUdukP",
  "key27": "3dCqQSgZZJiUxuwnfYAGWWzduqsjqCojgAvRG1keemWZeeDDYMao31BJZvLvf1ZNc9tB5fVKVZx1wyzknDCF899P",
  "key28": "avPkrGUoPivKqVZALiEdDikkduZdqtk5fZZHr3EygtPYpVG52ihFjTQxbfh85YZqhL5R1zDuv5pSTAayvnrTQD4",
  "key29": "5HTgnTRD2cGGGGS5VcX8MbXE88JsjfNfY99haSXawRhJD25SaGNgizzpELdkd6FdbnsfafBUSnAcuaSa6JjaDmbm",
  "key30": "43Bz4DWRFNRizLJkiEqVVr4Y68ZMf9unXsCJjuZCunbeTJ9vZwP21x6u5nFGHjFajPAct69gUgPLw7ENE4MCnwDE",
  "key31": "4pT4YojD5wiw4mzWXeLADZ9renS6cxUtEcaSwx4kc9WikarCUJWhjbR5jeSU1nJQ2y8nMokhLivbo3can4ZmjiaW",
  "key32": "2cSPT7YeYvdxAtcCUWV4gqCFc5hZPJfRGYsYiKTyCyfJYqb6EXPRLeimY64FFXUMFS71ukAAcSe9ZbddWFxfUuo9",
  "key33": "N1nqm5WgGJN6hyEDsENmhE6kmHsmTipPTuQ928oxQ5ZWUHMqupNMbh4AcoYTaHf1mP7ZvbEfwzPhkdXn1gEqbSV",
  "key34": "4GmWvNRpksHE3bhZ2BVrcM5CRxpWrGxtxKWpsppV7diutrMpRz7wQcyxoHQpCcLfSuhnLy3NBXEuzBor8Xov3wyx",
  "key35": "4C8G96s9Kmrirbxdjm4QhvgT8qBb7rjAKQ75fLMFaUppievxSj8seSRusfpqq6MvBq8RFb2qRXr7PHoTbYgqkuic",
  "key36": "577yPGtiJqgoFZ41QpXCivHEtyR7PLLBJFGZAuViQCJWLXf2Hcj6Q3the9vq7x6yFkvYTri5pb3wR1cZ4CowGVX9",
  "key37": "4JQCw74QLyhR7ysqfcoeVEago8EhzkCLTcZKV45p4A1BQEn6tT6CbqQQLZtjJLe9bGcEvGQAdkZNuZEZX821azs1",
  "key38": "5EKNUSWToHCkR6kcpXQ5MUwNZUPoYWJXsRjRaySmzY3b93giDXp78GSg47uoeU3MbRbpJrPzXVMjiFZ2VBvZP3tw",
  "key39": "5RPxm4VREELeYDsEUjHuPanTtsL1mxeweRygs2AivVtPTqVA7bAFFSFCawcu7whRPUppZbtBbq46s1KjNn5HdZ47",
  "key40": "2ythLL57CUg4nSu8F3v6ZYXcUDpMEohvd719rGSU2iMr6HZtK37wCMajmYw9mccoX1M5vcGLF1rx2DR7UmZTdtv1",
  "key41": "2P78JxJXvp8JsdRks849eT7UPhysptDiZQu15Tjkwvrwd1Nh4NTjnyTkjTAGekUn6GuWj7Uj4pcBqafj7UCRYhZh",
  "key42": "4PZrKpv43Ygrk6sZ45KyjimmLq8GHs4vDU957JLMUd2NUZfwSe8reGjMPacFaCCve6WFHwtKgEz3J4hjUgJHyrUz",
  "key43": "64fx8yjtcfNDmQmCaD3H1Qt8EK7CX6LKEya6p8goof7qk744iUmN1HhH19Djnps6MGncsosG8nXN9JY6xyp7U4JR",
  "key44": "bfRZQBBvsudDXRuncj7RZmafqCm2rWTfnsWXcTXtdKeQAkYxr88m61sN54ArCxhDPZkbLPhTQUF8JbPwtVEJS31",
  "key45": "2sJaT9a26PeLpu9QTtPopL31r2G69fzpuFbQmFVW698gtSFNcHAjxc72uMP6Y83V7DZnkHRzCYmavQjRxdvZ8JvW",
  "key46": "52cbXCjn4pLvY2zRBpYh6QZKTHokzDejXVALpXoomPP5AywnKg8Dmrj7MDFBdUBK6BaPE58WtdGkTbeGjWDX6vwQ",
  "key47": "4FaFjtcBNJmyypunEVey8U3APqQmsTBYKK7pRbVkPFSnbDJzUky6JLSce65NAcswZYYYRRLa3zXFRWjzXSmoXxv",
  "key48": "4iJyHtZCD9LnsAVNNYaDRKR1SfaTYfbnTzeqB9cdEd1Ht57Bt5WhZZ3p79bgVpeNoBB7txwRmvP6x6VrpD5qgqnD"
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
