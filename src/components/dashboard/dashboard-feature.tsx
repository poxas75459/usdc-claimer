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
    "5fDd6Akgm47AJY2WoAYyzc3uxs3TeqWKw2yNhGESjG5e9v8g65YZmw3krXQAPN4c3BUmY84AB6Sa4UxDhdnSGb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WGZaowC4Du7VJkDtUoPDpQf7znbaKuCkD6HJ1c5GARiszxNKENMB1spmTGA4LyKseD6aj51jarj2YJbuiLhXp9y",
  "key1": "4jMvKTVTmKWaVpRJG2h1SSjMa9bcMzLVWKHma7cLBqHuADaepvKfNzBPHYMJY3rF8JrhK8AezQxpoyN4b8uc3euj",
  "key2": "5Y9B5wW5UJFGLPhjiU25EWJ2Ly4oHUf9JLfmomximdWie6zRvHUVXkGv3ur31e1ZwjigSDjfdN5jNYqCzyuuFTFC",
  "key3": "5iABQASgDTZyqtMUFvMpKpS7GBfo1V6Q8M2omdVvT5a5cvpiG37v5Tavsgpo2ytVMngNMa78LTyKJSoB51MAHNov",
  "key4": "2sC6LPoGHEE8QSGSU5Xuabpkc1YHzgQqtWFAW9XAorFqJVG96HD6nEaPB6nz7ARkdLePbhCcZ3YbpUiHE1veCyJK",
  "key5": "5XMGerjiyw3Kf6MnL8hiW3ThNTueksQoToPTZUPQGT31WBCf35KAnFLQTj7yf6TP6vRwCDRKdFRAzFdaiDgz8h3U",
  "key6": "xjULtHVKFZEbbZz7qsDPdXTs7U6c43f3NfUEmydVtiRQj9vpAFEfu4FsHPQsvKquaWXU7bqueEukoDA8gB1BVcx",
  "key7": "2GmhhVmrixzR4T7QMgfkKQbiKxyTzttYJcgiWUuyhq897TMZxxnUtTgiEXAHm1TVVpNourXoSkWa5uyPCuPmYyF7",
  "key8": "5XT3RR3kAd2G651Tf6GhxZGd51pr4N7UBo2EBCZAB9BuFAJcMzhSWSyTASaQx1ogWqrzGtc7twX7AGsLnsdsgvWc",
  "key9": "41gngzYfDJgUdKDNTWBoEnf7DLfKUpo8EVjv3dFLYNkz5PmyXho7omCqLpqxqvkp1c2LE3n7kgSX1W698k9ufKFJ",
  "key10": "32gXwaeF6i84T6EKfZmWCD2CrtnWHU45MVMEh9bEDb2eqj8gbaeHcfb83JFfQFu2SEf5NCcxrVDpaGJtn27P7j25",
  "key11": "3g6rAF19GAvqXLtCouo6nQ8dzqg3sMhR4wwbNoK9WgRqkp78h6tvgkrET15NtTKjMYAYSUnBg2jnacJW6imh7tFz",
  "key12": "2saPkD2RAfJE68vjTRsvYEP1r9urY2YbPsQUa8o6mFEPmPVK6MnUM7nx617Mnn5fxWXTn7i7nacnRRbrTmmVzwWH",
  "key13": "3jx6kbUtHUtJUXJHoDHBkSpr7E2FesmXugqWqjY7DoVs9eitWSRetoDoX8yLi4XHGbEzSwLBCiLQg2rfip6LgYks",
  "key14": "2wnK4SMFEqT77eKsYY4aCoAYubW3DdfsS8pnYuV9Vhr4SVY8XNj4mTNwPUWdY3XjszsXKwR4VnBc84u5Qjg6D4WQ",
  "key15": "5VADdWaNERgAeB63YwdrP4zfNXXyojjYoqkxJsyDAXf8nHxN2Toq7nqcZfp5eYQggycxmcYt1qSA9192UdJAiCxU",
  "key16": "4QNjCu3hRHVhUGP35kZhjCY9rgzF2wGwGUUM8oH8nQig1PUY1iojEpA7gg6SpvDNExctxXvZyVeeUmXhCVapYixt",
  "key17": "5PXBWZ9GXGKwSJC9wEZxs44Em7SZAMqd2ZXW7W7Qj2wceNAeAZvMkQgEG8FjsbxJ957bAkfhfe4LFDFViotQWkBR",
  "key18": "yzNYtozdyiSWmU3wBCRLjxUuxE7rSXsojDxtQkC7qdXBmbk9aQSSA1iyDQgNEuMMpo4utAtuio561h8JbTwcfEt",
  "key19": "59tuvoWSzBBy6TWT86sBCQjJvfBWQK3taBjHodc12FD5WMDK4WLJqecYwX4yJRiuHNy67nMGLwVsvjENUHyUY3gR",
  "key20": "3aCeTRjvEXgEgtQH1FD2fxSERrBjLxzGakwn9yBuJ7G3DkNSBpLb3TEsXmqEt6U3Hi6eEbgwUgyq9tmTKmcjRZmk",
  "key21": "WpMLk789zgz1vWiZGW8QLNY8KYGrCcXG7FXt8LdCfk3xR6hV78DBdMrQhSDk7Tm9r1PW8xCyp9iqk8zJ9md1tZD",
  "key22": "3phvXTp22YzSakqnepCTjGagJCwwQ9fKdyLKfzpdBT3Et4hDw5NxzZzK2fLD5N66SV4P3FUTqDzdJB8x2ZFapdFM",
  "key23": "2MxJ1XJaqrw9npKAfXsV7eE4WSMqWWJ4DJGkAehS1mC7YLdpnGd2JqTcU5YWSrbCQnCMC8drYNC8tdHh7QeBvCHd",
  "key24": "48wcrE3peADpaM6efNPjVieX7MUGru5QPhMRuPFRE4obtMDdW31TGvuk8woUtnogBH1XQuRJWfd8JZ9jbWkxqoKq",
  "key25": "rjzfsMgttr5Wdu3aQnoYHrbdjbgWZqtws3sQ4EZ1kWy5dv5Pc1qmKXHFDJxCcAkw8oxEGiVZMidam3QaTaisoZv",
  "key26": "4aYebRYNA7NEkh7WFzZpXwp423yrrqDvw5s4fAg3HEEZBbGQMfLtR9NoF4NRQydd2YV5EAffPAgQB2ipnB98n2gV",
  "key27": "2WtSEPER9DV3aoakYYL3EckCC3LN3SyocxdwCyuKfKhJdvS14iFbYhuxDnePp3hYXLH7Auw3m1QgRGaPCE5UEsH4",
  "key28": "3CKe9JvExnJGubFFEYpE1DS9E4hFYXuhSErMs35y54LYjkLbuzCps52YGjyTYMAtq6FNNyCvEqfuZoexRm8rsjZk",
  "key29": "3YGtg3trAzKTC6dMR5Y8FM7yhBVHRWya52rHiNs6r6wMHEZTxWEMMHyzVE6tyyjWHKzpr22VsLs8KTNgLprakk55",
  "key30": "4pHH3ZuV2mbaKzovmbkqeUBNxHLCGfNVuAtexYLse2bMtwdncJjcy9Ns3btmnsRBUQeYpdVBvF3RxmAs8hHTwKJC",
  "key31": "2ZHjfgmjxA1iFLH83bvpVhgswEiAC9EaTnirZzHCZNvEcJaEbxsbpQze4pEGxKHGtNbunwioknUWM8yrJxoc4hoD",
  "key32": "3mfzmgVKuMkDu3qUWKWH4YFcQYwjP4xqR961f9nXmN3ppxEYaDR8FXEhGx9jXkNPp2MuDtXyWcjXdeLnPfEXYSSb",
  "key33": "45mjMHrTrfCuvo5QidffoPtdBnbUvLxdJC55T22LyJxbapLjFY3QHgQBjjNWhLnTMhUGMjUkvLe2a7TqnBdytYEk",
  "key34": "2RkK2vaPHjHdyGGeR3GWVxEfarozUkmWvKKvDm2aKGv3ZB5YPHpmoWc3u5jxBV5pF5rNwo5f18SLtz4kLTZoSjgd",
  "key35": "7ehqWQFXRtodLhw5DEEUZE9Fjbfxbg3xA4GxqoFWr91GrGt1fNYKuUi8AAtWpGW4Tv66Y8fkogNDcshutFx1VEs",
  "key36": "4k7G9cmWcRnRaDYSyUxwBxdoXku9qidHqBqRv9yU7z2qTJ7TVPiosUPqa1AJ35cAvuY4GmNwkpNafjzDWRrMA9E7",
  "key37": "3PeLoRouc2seYdPBjYPSKr9yUuBEwnRGfGmz6RXvipwUVAeWrT1r6VwpmHHcaZAaHpja7RVyZCjedj5GdaCyco2U",
  "key38": "3Tx6vTWcJqJJENiGuRpyKDDDWoff8vQ8bMVibgnieGcvXUyha7eVULQ7hrPTVKqVQzF5fWXe2YXwWi3KcSGzM4XF",
  "key39": "5MWRxXxPwWwP8FRUio54rAkSkMN2Gt6VRAiL2qcfn6KxhirwM1e6SJN7gBdsTmAzduc3SZy1h29RCquWxEWwn6EX",
  "key40": "2Xk7SXBnrbnt2Lh6EK6D8UKkui9f7CndHfcneR4bZVPTc8xEgN4ZPNC9SZfkj41sYLvovBbdpHn1M7MeUrNUzEgB",
  "key41": "5Up1NJnUyejDSfL4tauvZ9ahrKB1QuH6zxEjj5pnduSZtwz6u75ddwuHcmSJD4SfuNVNeoUBSUZr66HxYyH3yC7S",
  "key42": "3xDvvHhyKLh52kg4RsBGmD6upGWo4ETLEA4NdXV2S21hAXdxKuY73kBd6zweHVsKxpWzH8xLYVsQxzGTbUZno3kc",
  "key43": "2ttvZLEMcxe8FeCZ6qG4dTfCT9goQR5FKDRaD276BWmJ2sQrX572ZjdQNbeBQoqWwk1R8LhY2MHpj2K7z4UvZQMM"
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
