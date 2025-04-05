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
    "2ZeF8rxNR6DYN13tB6CJK3kcDB9FgZHMG2BNoXhciP4qn3X7VVxECHvh981ooWNgYTA24SepjTtvikjZZJTjmvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AKRrSYP5hkLMF2U8isJr2mfgf6c9irXH4VFxPNtDTLDkjFuvWW2KzhqEJC6SnApsiL2wPu6xD1rP4mgAHcJLNG5",
  "key1": "2pytXxWrtioxhXYsgVaxpgFuzbK3rQm8MRzs8gLXmD8yS8WgaUqQATtGnUQnbvgJiXCjRxmw6o6jPeRGcKrDwwSD",
  "key2": "5fwp3ZuWEXxUr6xyugXiyK53d6NcERfeCXbV88mi1hJJDHYgNnX24QV3Licbi6UK3BNoGBj3CpzBrfWJetEphwZD",
  "key3": "2bq8ewM1oAL2Pp7fe8SzNr8SHLJUAE31ufpmLLZJrPMR1BKiSvwHdP92RZRhi4UJ4N9oaCepGidDjsCag3kaxCzU",
  "key4": "2ZtmY5ZhDZrw8WAA3BadJnEJ6m7zbYXToixWMJFZ8iMBvAJq1k37PJHXZ1q3TnbaFqGqpxzr7RoGgguuG1Pgbohb",
  "key5": "44vosMnCzzP8WAx7acCJu4mCxohrWDaAPzbWMe3x9NXzdwUVsJZkb4xQZBwNtEdnGY1KeeAbAoYUpzgJoVMwWM9f",
  "key6": "SqBGkPZxkCWANGrmPd8Mg5y3mzChsmEkMsJYHL7YWpuMjMMPorGwjU59bMUH3Fe53WCczeTHuseUuPYmwiBvoL9",
  "key7": "5ZRDdGSmEUGx6LJD2SWnakTuVgcHv7KGvFG8JXtkLohevhcZfvAJym8qE7Qn19XbSdCuHNHfNmpqKhdfpLYazPxS",
  "key8": "67187aQzwpL9kqgkA9KZTuWECwLiMTRrUGUPgCXqY1wTyhfJnvvDUGeey6hFNGBFyGtsMdbvamd98vaBBXZFfPQT",
  "key9": "5Vcc9EjKM188UvgmKynVw3mZoyBH3ZM2cXKqhVY9GfYNLYr2ErUSjYrmzLcu314oqyckZBjweckddwtfndekZvrS",
  "key10": "4LZX6e4DFaGD5ggVj6WqsQwgFLXjdP2ubjTz99VGYio2yuoKoaJB6iSVwLz2ZFaRdMRL4AiduP5acEnvnKwU4XnQ",
  "key11": "4bkdmqXWaQhPyy8QisaFKxscqgcEdWaVBkFGhfFPGc5aBa5qdawVRUb9jXVnS3JhoDnGwDuHuD4ErBgZCri3Zvrx",
  "key12": "5XiY2UYk2LeFy2AzP2PQD6gvSSm9LzJenhDEJ7EKLzFnhsd7N6aTWT4y9yiogbAGg4qCRFmfACewsbLckMAYMLfJ",
  "key13": "4z4vgzc75J59yzjNWwU72Sudbi9wXVD6GHNjyvy2LhrQuESk2S2Kg2Gz9j5zZ7eFjhnjSDyrKnugNTZQ6x9GCich",
  "key14": "5Y2yRZT3xYNWbMPGk2TevZNMfwVB4UuVLUqGgN7Tmhucm3PRpcWLFsuiW5MpELa5ytATjjg1gfdhEHW78NiZb2Lm",
  "key15": "426RtYQdYPWJa18ie45Uyfa8o6mWjDtQApPhobUYCX9Eqr8JqF6PudjRnpYxcSDZdUrJFWnBuPE1maKhqFM4Xah5",
  "key16": "2A9VLxRMQRW7Kf7eE7o1S6SfvfmoHVRNGyzFZWmZiZLLZnRi6mAKLbmHjnYGS965ZnVhRQZ4iAqXAn7L4X9qhv5z",
  "key17": "4XSQNpFJaQ6yupJfZQBT5Fttf8eqNZZo4NbdZSkrpSSqa5iBkbxZA6yirTaDTCasYgFqdDJQ9wjus2Jmy5UwyVYg",
  "key18": "4dK8VaJZBYNGYJU13uC4cZWQAT911w75LjyTtc47HttGywB6ubu3HiXvXUaFVCSoQqzZNwmhvLmThbjEcyW1FiMh",
  "key19": "457A9vZzkQhrnP7yip6q2t3rp6Fi2FCaJXaNo9d4trJd9YvCEXWvpYfmz4TGeXkXuWC9vR9CkZborfTPJoSXoQN8",
  "key20": "5hPz1wwnayu4uQsPtf4QuJfDLmLxofN99NpyBXJLTFNp3tSd7wQkhsaZEsTs7M5QkF49kFoDQusoQYzwnTL6dYvZ",
  "key21": "2iuym6ZpUCH75THxJv7MqBaLTojWbfkTgdjFWRhPcpmgdHKeVadiJwGBc7LcP11tyyqoB8TB2Vko5LEkGQNVGmet",
  "key22": "3wzzudyND3AoDFTswhn7ffTNCeVJDXmAL2jz2tCRPGR7MGbbq5Fexp6EcsSD19GypRPZYrwGmKvbGFBTPmqdDmA3",
  "key23": "4E1ieyeytFgi6YmosmuYrah4BSVEpNXL19aBBR1BkPDUJdxHZVYsGn246uWj7yoNNMvC5KD1qA1887CeC6dZsdiL",
  "key24": "4jqPx9UPq6y1uoZQ43fAM8HtaGr7QsFwPxoTx4BdZmbAZqiH2puKcWWdtjfABaJYznoHq8JLAkiNRhK2kqh68Jzg",
  "key25": "2p9DffGnxRccx4JiQzfwsXvQHE5Mhk2FttiQKtJNZ8Ayuj6tco9e2x7qmpmWwBh8scHK4GngdwJF6sKX3Rsc3wKo",
  "key26": "4gw6a6d5jp7tJQBAA15PqTLZFEk2zh8UXk5AJLyqxiTktYLY2FGrgMQ6YknC3jpD9rpPnMQbeHQNJvs7TTrRRq8",
  "key27": "47YUsK833fe51XgRe8g5BV2SAVMWmZoKmuGbi4578RB5k6uuhDP1aiJ6qLq18n7wW8fdbNofJkYn465chWi1ZWpm",
  "key28": "3YNAfBW7XnLM7vG46uVD1GzcKL3AxeZk5XgxryKPHsCCojutfyCZQsdTqrvmatnYUVLw6X22NpRArHzbZryBRpud",
  "key29": "5DEnWdrBVx7JtbRWG6VYWukVyiAFEjJz6GLW9gp2Ue4qrBeqpmkubbdmd7wyaANpq8J24yUbAT1GbjrBoSJe56Gd",
  "key30": "5oBfVrdLeASh1N4vWw48ZP2gKyaTQf3hgTYv9s3Y8C6JDWwVjv99HiGVt5tZJHwT4JN98FT7gSp6Sq1anDmPcUtf",
  "key31": "sCVuu4iSo8tkAYtQq68NBUpCamJ3rg6xcHeNrrDxyupJZdaBQ9heAkhEu2eDRGpWxhCQCozL4v8FrtNogHa9qV7",
  "key32": "vn7r4uR5uB6vTfbJqgsoV1antzS9JdMzP5cCy1s5DpzBGqLyPKwzvD8am1zH1B3BsoxEt7JERWx7qttaMn5kFYZ",
  "key33": "YrRYcimAn6JxZJD5h1EKTR8QtKX9tB8AEjhVnumFTMxexypNWwQGiE4mpkJps7pYZ2uommXTBdKARYnoUytG5MZ",
  "key34": "3h3TArxJLn757yJk9qcpy7toDtiUFoM1kE18Ni4aKSVNmhBcscdwKQzy5MhScyFSv4dUGc7jVA1avTTKPLXBJGQU",
  "key35": "4bmpou5Njh1egbgiQ5kJNx56GA42j2QLVELWkegGCHsW2dXw83cPwgmp9VAbxkee6ak7A2dRjTYHw18yTY7nLgU",
  "key36": "41myb8Wcrz3KawRypAuBTXALz25fvBaCLufEEArXQ6FPfsGwE1LGkrQPWEK472Tuuk8gEyPgSjRgHjuBd32XwWaa",
  "key37": "2YEKbWAayyKDHedc3MoTUUN7CCpFcDqJoKTDE5enqJCDpGKfq6W5svMJ5s4Z7RWarSxXRt8WeLr5oQnTfyZNa2XB",
  "key38": "5Spe3GDgDniBtNqZxMNWDinDAGaLHrew7yGJBgtffBPYULAJX9DrN9zwBzZP8n1YfLJZ7riL7EiXunrZpz8SvMh4",
  "key39": "5YpcC2onJX3TqMf1XdRwrY3NdWYj6dnEBESP37gvmRNJjNPdfvzmSCfG1dNA4QSkKdKudgmKq2NttjKft59ak4E7",
  "key40": "3Bsy2kEazUgv8E1p8Wsk5kgs1ycsBbuaGs6WiddazTZn6i53eDsXzx7ZdVnDYtVBLgnTPntYfGSKcUZcByzxbfbs",
  "key41": "3RVGGPXu1bZz3KBH4GNxLzzwhuAzQHaXCxRtHeNq5yJ3eqfdnFKiekq3tSHuB2dTKPxJCFZn5ho5nmVrZJP5U5Fy",
  "key42": "2S71i4ZCRnRdUbMd8WciWxeRBwfeePZGvm9XuEYdJWSm69mki2VcdkaWi3NhaUFtDr8t5NAib8hHXebLJrkG2R7i",
  "key43": "qHZ993P2Xo4eYhRyqBwnh4zXHYFjWhwpJPrUbGhJL9WcgHWsMTnC9CQn5E5Bb7hiE9Yfy3gFYt5Lu2syFsecFBB",
  "key44": "4Bz9bMAdwBRQDAKnokvaAjjoKoHf9vy47S5yuPnUKiuF5JEKiJin3Zzfv8qovwhA8tWinmGzeTFfDftx2bQR7VwZ",
  "key45": "qCDXyJ25WHAJyrDTaw44QPfLooSCX2CF3RXjKm6EboRwXN1vH3qP1GUKMoeEE7nhU2nJp8JU2znzSiTWeaKJDu4",
  "key46": "4sikKn6r1foVD9dJb2TGP4MPYgZ3k1z4hmffxvsYNGBcFfcthv9MzdVNDna7dtaEMAwhCbz9ju8ZrNw9DUFRjKtv",
  "key47": "38BT5iHiMBoab722JLdwfqTeyrj2SqLJFnUAWQKA7tEKGAdtFtenDiye7ZmVC8DTkbezxvUJh7fCYLoncXbGbkCY",
  "key48": "5wH4WWpeMv9Urmv24LKMJaqHH8H7JTTkNAQ86a2eK1yBy6pkrgiqmAFLwJm1v6thZvnWnSAwiSmCUhXQYjE7MYxH",
  "key49": "quSPabibyEuyV6WesFLJ9Tn4VYZP7Rcbt9CXRnP3FKg5uBmavYeXcdnSZjaErJ32JuWUEjpoq5j75KaQyGYXw1f"
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
