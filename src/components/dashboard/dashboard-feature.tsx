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
    "eJxzrRqwE6mpkyqoBnZKD28VNkcveo7rPHtxWrUaDtoJcC9inDPP5gUFb4DRTmhdzHRjcgTznH4E897CGPkMUWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47wDJbxrbZWkS11AZdL1DXxq5qx3WtdbgMNbnNCFgyBNKEMsj2jgbdUVYAgCmQTBsm2udK2cB7UJFLUjrmHDkhFL",
  "key1": "5FK6ebmborXNUbMrx1VjaSm5nhG3LhtNc1HKMMd698dnW44brXmeC31BqzDbpFR788HKkpJgHuoMG3VRFFbh71Xb",
  "key2": "27i4Y8z6WCfcCZT8RPUP1UMRUBMCz2f7LpYnSCjgVTZFhwPb4PofGdEWLxAijZCDhKvxJwam5YRDdavmJQkekYkL",
  "key3": "5QT7HurGKQhz7JL4DMSjMwbPFnx95YyDi7GU9Yyz2DjAB5ovFCEjrGm79VxBKuSUvrqBMfUtbguWCf2fax8LVZVu",
  "key4": "3u9rCELWHvG2roQNMP2thNVwriL8p2xDbhF4dvYhFf3b9aLhwd4L8MCaixb18mL1iE4P5ymhzZHY8gXGm7UL79ZX",
  "key5": "2JTtvCpdb6PehMshoZ6CQSG2Hkejsgc7iYBayyx9yu3VYA2aAqsx96DFCrLHfGrmajBU9utb95FUeXjET3KC4jUQ",
  "key6": "2oRdv1TYz4Hm1qoEhXtaeVBUhtYJ3HWcbyq2P3kKUhTMLaFgbA9hyyexSXuJihudw4Y67Tb89CrS5M9hq7iRLSPe",
  "key7": "5kmznaaYjy9w5DPiG6ySKk51U29zkADjoam9Gtpku4vAm1tLf8b4e2LaT3HRyYpxcRG3ATtCyCsfxe6S4MCMvChu",
  "key8": "MbQV5z2gqXXpfbKhCh9nDFXsQ52xod6vqYGzukALaXWG2Zrg7ceJvJvik3WmJGAqRpu1JpCn7y1h3YaZD62i2vB",
  "key9": "u1bWYBjEYBR6CMPAV8y9ep6D9ZvdX8SUy2oEbM2KSmpFYuCz1yB1pjrjvGX8UJaLpXxy6pJmMdZA44nxRD12VjK",
  "key10": "4fmkQMgWWJC8b9fSpVycx3cJtcBFxnYu3YgaQRcHo2yf8QUHPSRfzov9L4U4J74b2vKMt1ZH7QjatWksSxaMZB47",
  "key11": "5j9MPjSxuAQGAH8z2FTR2m3w5nDHCS14BkonppKCn8fzALgM6jf9QsbtrAycFKsnNCcmKiw83kgbETgkmrZP95fB",
  "key12": "4iz5SuY4X56VahK2eHQS6sgXzWXobveHeh1QEucGDYh7SMKmDKboxdGpk3nW1dMxsUrZMfhf9MjJtPkRMuZoPdCy",
  "key13": "2XH8cY5z7c79U5yUtwBhGuqMqWAZTUVKUx2SEXkLRZeHZvHonjcyqy5v3zb8LC44XNVfDRG7ADfQHkCu3m89JStK",
  "key14": "5wZFmBe8XMSYes9EnkJPsBHQ32pnxb43abHvYHbGzweyTaDTu8MGCCDa5nyWcDWiFqJm5cbcXpAKRrrq7tUN9c39",
  "key15": "2c7A5P8LF2Cmq2U2xB7TdVnhC7KKxud3ntFkPGTjpmYMnTB99rNWm67qjpk2yNwxDLYDk7TG4DjFCdNBYSonACkK",
  "key16": "4CYuhMHj1pirdrokhBkNATsNr6S7QirSjhHT9nLkEaeHh5BoENbWXoRLiUHpnjDfbL4EqRDjUqdRvz6sYPEdjLRe",
  "key17": "cJjijALrzr8Pf93DBMScr1C3GuPeW3auJbpnMgDzP5a9SCT9mmSjer8obc7NQe7d6mr9YLgw7f98gY9GYkSbufm",
  "key18": "3DeDQqUvthwtpdN7cHTUJGWvBtNFWMa5o29UpWLQWGQXqwWWEZab1jZD9yKAApJR1e8fXkcZeot6B8SiW2JP9NAn",
  "key19": "4hCxCSYm7hhU9x9zb3mbj55pcCtKAaDtNrajrzAznfE6oTntwyfNmk3qGTfZuKMSVVdhoFMbwpz3JCEFdzgh5aP1",
  "key20": "59EFy8AtdkDNger7LLqbcfoapeomJY9v9cFVUmQQVjPTNCq9nrFcUr7dZ4SN3Gubbm4J2jabhPZAkanFvLQmfgxY",
  "key21": "5u8sNQ3X3tpT63AzToxNrE7AbuZABhzZJ8wwNimcbTZR6avHzpczZMAEjsB66xw7BYMH69oCC6oxbXfdXFUDh8A5",
  "key22": "3hmTFitaY6VksnAJPa94CYkvL8xnJDw5BGzQsc5UuzDxgGLE2QeW2JFNLts5Z3fXHJzVAhHJXiUfxoxfR5iTR2my",
  "key23": "5WW8Xww7L4bSfLfHCEFpebj9B7Rd2HUWHtCPYrnayYuVYpZqo2RQmmhRyYqSScsnFuSGcmaW8mnim4B8te6tbcDw",
  "key24": "3p8Hyn9BtJEC8hvoAwQVa5oEWZ3KYLKS4XGfYSv9nSYe6wnjNo7sEVnMQW9QeNWswJg4oS165jqH8NFVwNjYMXiS",
  "key25": "2zhGwboDiPuAV3jtxETM4fCr1SMTqW4Xm34muBAa2xAaV7NxD59UWxeL9XP3gw5RStocA1Kfqtive7f3bwqjaGoo",
  "key26": "5zvvsFb62GTE2AncZiqYyjmJmoNbvp5VFtiPwgURRRwZHwZqVNdfrD2Q8j8ercHfRSGQMtxLKTrMCY2zPPDUW8Mh",
  "key27": "3Aa1XnfZ5k32wRMnoxcT2GdBigjPYc76XAmsvFLjioqAju7bi6jUWezvyhHjTKhcF9ahj2oH4yTFZ9nc9cJ4EULb",
  "key28": "2nkgyvF976kCJXRLmkHxK2pEBAgbBSq5KKSQ2XC1XqYfagyv8QQSKieK5kaHMLgZ4nDajxbsbn8RoyW9ma5PiRLW",
  "key29": "36ZniRLpvPF49NmTFEpSKti3w5YyJ7pFHJHopKTaonnyFCLXPC1VYNiJFEuKDosenNoPJjxemHHQnbM54fbqp688",
  "key30": "44Mpb2QuBejQAktPFwnpHPAbgXbo3LsQW7Fy5H7mxPemukJWkuyrSJX7vmF5uMQjMH3d7V5UxayzYhhHJ5pGVYto",
  "key31": "9E96w3ggMFKWNq1RZkMU1hz1QxjpvUUMJ9gyajRbovHchtCp3NPu3v9DvWZh58Whw2n4d88Lj3pYtRB5pR3qfpz",
  "key32": "4Brq7vdcYKad6xiAz3vZWuNYhCg3wJqhM1ECGytw21vGGaoHk7jiSVWdczqsAHuifJ1jKdqGm8FxTbEYmbNhNwrs",
  "key33": "2eZcqWeBWMCietiKqKwSvhLmmsD4vomarXGbXHLp2qK7kj58BYPwdVkQYFc6hN52BuNhsXnqDgJj5DbYidGD41i9",
  "key34": "4fdiXqQo6ebKtQQE7TaFXhcv8yZeDrnoE37HLWaVjwLedqjziCzjwNscShXwbVyYSA2sbmk1NLaNQypBQLYrcZDG",
  "key35": "2WMXrrMoSxioNzjW2PCrYddBSWKXStu8k3zzi31wvR4eVs1qiqZkT9dJKrZZfbpTsHSWWtpE7b8BvPcyXGSiLXVV",
  "key36": "596XZ7p43Y2eJXQSUir1auCYxgrEM2yFnYpG8bzqzUx9iChztqTJ9W7amBgshRMRw5DHHmYYMQ7zr3hLkxwVHAgZ",
  "key37": "2rQKis1T6F1vcrj1wrJdmRGpCzFyKDmjwfaRqbF375TPaEb8zWhAkgVXX4xL539sbcBx4WgNadUoZuLDE2qeAtLf",
  "key38": "29qBQK4amWCqjK3NbeMCCchTfAjsp2XiGRrLVEfRsamspdMQuUuyCwMyCYt5pkSsgYYgRFUFmmmFSwHiYRpB2pqh",
  "key39": "4B3J6Qkk3eccguVzgdRDvXVAAr32KW9a8wRj1yYpY3cicvhwiBEm8XAeg1B5zUtZkosvJEX61T7g8cjeNysNKJT4",
  "key40": "2J261T8Jsv4V7xZE3b8m6PtojUX8hDitRtu2wpdrGtimDE3htxQrRBQ71e9aDFCmuoR4PA9D9t84Jid9Wn6jiUfQ",
  "key41": "2ZCoBnco8BWueaFyjPeAhCTCnkYz6sxCHWA44C6qmCgGQoUP53PhjkhXtJfsvReyD6VPUmDvBbDyA7xsb3jV4Ud4",
  "key42": "55uzyCNc26ixi8mmfajnDuTXUvxWEuutjjb9muDuUvxeJqZQiJWTh7wmRRHkvohYASTHb4UaieGrcUYd3HvfFaPe",
  "key43": "44iz8Ejn7qmwQVHD1MX3NsyJ6ffmhpKtjtEuMRzWq3eYu7bJNH9g6hqwdtjv4mcra7u82q2ZHTJEezKghRxmEC51",
  "key44": "5eJcYeP9GNB8is8dsYn6wvdBDfCtfhKmCaGyi4eeuEwVqUH8dyFK3yW4WDe5fohMtR6BwAogWXLhuz6T9stD8EWW"
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
