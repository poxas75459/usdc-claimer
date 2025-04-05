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
    "4u7dxvEH6QVAK6njr9KGzyQKxaiUZWdjn9Y27WpnuKc4w9KCTmAfTPYsduT6ejnZiUBXkCh3rYZfuvJbmfjvoW9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tfiibm7PHduHaNgvy7ji17ZCKjosiYJMFwVgKAHiK7FADDcbmP1XAH8zJ2YnGo8hzCN9ra25FL57bSbhegbuxwm",
  "key1": "yjohY9YseQSCJvRmUHkWMykjEkc3VEPU9xSh8ta6bXdRCFKD7nGdz3w3zRfh17jxR81o8E9m8fDYBBGcZ2heGsQ",
  "key2": "3Dffhoe4qrog5zqDt2eGdTkAt7PRLVqn52c61tWH59xxUwdLhfF1BQrCwNh1xrVXvHiMKym2BxvwdR75JSn5FLze",
  "key3": "5HoGvmrXiQtUp82m4VyoeUTse1Viy5cyPpmeE12PQS5Ye7mSXiQ3oa6DMXRjfBSpPHjSM3JuVDtxvEcoepnKgPsY",
  "key4": "5K6VydKy6DtKd2H3AvrRDkVrhmK9YjP9erBbXtu2tKM85GFeajCWQJAKTtPXGKn8KJhdMkwZ5w9CsiohGbHV48bk",
  "key5": "g7x1ocHcVdavANmee6nmKdZWzTrVHx2zGxU3rb42yiAyrhqa32PoGG82GMZo8d53AL4Xxq5PiA65AA9v7ykJ3RV",
  "key6": "4NDuQF3yZPCjr2WsuVGjANU6E4dVtH4MYp9DDtyjW9GG6zzi4WQS9yua8S6TPEbJ3a1AEUD8DPHvw5mBGbQ2xBBo",
  "key7": "4jCm8YqUcwtdp17iJcRtAeSPdSnRZ6hAQmdzkSzpUQ4kdg9225YAwKgY3LM6ghbFqmX3B5assw6jni4ZhcjfMqCt",
  "key8": "5WN76aiarhD2v3FREwi15RWbYjZrw7RWrn1SwaAxA2A487PnmQ7Y77Lu4H1KoAx7nTULCqzmbMdFtdC5o6nUx24Q",
  "key9": "5HgfMmswkm7XuyL5rnv8q4XWzCEzVjzVvaHC31CyKn1MKJxnixBNpzwPEZXQD6CBshA3sYqT4AhcvPsekA7i8wmt",
  "key10": "3EY4MQfsCPx5d8Lz6B5RHT148x1wswjimWcG8FKLLuCXSsAjSvDKJfHtSJg9BopUpij5dpnLRAk8sc6WGaaNQvhU",
  "key11": "3tt6q2Gr5NRdWA78pgRZMopjb8L6Hb1WqxAxWZTc7Tu4thFjggkMgGPh7PMuBLPmQNfctBg2JAg3qgEosmWjSKmd",
  "key12": "4RK59dy6hW4tcB3FHovjmRxBKgJG8N756KZP9sejtZUZnpQ6Pm7u71WmTuXd2ZxDQcxudfeQnzyVDDkNT1Txvd4L",
  "key13": "5daCGVY3JBkr9mAtKmMk8rw851sJfEnEBr2y3oC3x4TM8EhCUMF4k2Pg8rAKunTopYeNe4fG7pWeWYFyV73dhTmj",
  "key14": "2fcFEmwsEhHcFi4j7R9tezHMVntNf6vjEbKT2EHpNPSvknY2rRqfHKYYt8sHdWvPLzwqBhSQPdhDGPt3BdLhUpEs",
  "key15": "4DgwrfgfGUJUewPuo861vdERsRjJc4cSkYHih9Lb6zghKtPKebqhmJawn7x8q3tigkff9GYjJCiNB6azAvqU3RTY",
  "key16": "4gf3JR2rF1tvRPnmbxsXtGSGrQHZoc4wsq3LDuMrwUr6ijCuBpyaWRa8rdwwmVYXEiUxHmhC8StY9hTQ8hbiHCEU",
  "key17": "5Gpg7p5ZrJnV5EoBYmqZdDEgj2YZj4zTyV4kQUKbwAjkn2AoorUSuz4oobA8nYrnc6qePDCzFPWxjTKKqkanMyN5",
  "key18": "4g5a2j5qxNLfQAeWEzavQrn1hW13JdVtH7QVfrCmfjMJYdFxYmejHteFwaFgka52f13AF6sreGpG7HsziCNz6ov4",
  "key19": "mgkVPooETdFsCBXVUw4tng8pBNQ5t4jCy8nJM8s8HACT2AuB3FRzqbpPCyC1y5CR7LBP2ChWLjss1F7pdGTxaeo",
  "key20": "p3QmFEcDe1buTMzQLZVU21BCZ2WzQ6Y3w7AYxpTgeNHd5FXZSb6TGFnpJSzAiNyJxqWkGqM5gLKaCqUhNsguePV",
  "key21": "VtHVtxw3pUutmFKKbfez6h6kWucowTVSKYLsvpCMS1V958ensaiHojTKRgsMRRqBC8jPRyh87YrJwi3J283fHSu",
  "key22": "3GVNAFg4kXNeUvVosZKsF7yfZvTRacSY3N4AJhFKLbdGaVsPTw7GDCxvn7Uzj2YtxWz657Bj2otFbnqmpic3DNB4",
  "key23": "FQkmgZuY4YotP79jbkUXCpKHY4KtZxEn4FyX1iuorBQ8Vbi4biYhq2ueGKkui4Uihq1qK1P1XEzKXuHNApTG1rK",
  "key24": "4cgBd8Uv7LJahhpQcq6KJ2NNHutoCu9JGkuCdKhbru93XomqUfxEncibinwh1ERBkoE5vTqBrwDQpBDG7ozhZ8aG",
  "key25": "24dknu9Ai474XHgFxsZEPHaWzkrMDxynJUdA5Bx42Tt38e464jXWHTAjrLXtAqHf3GoVGKr1PX3e6kDHwU2AXbcG",
  "key26": "KkQBxWQgBuT3VuUSapD6XKXPuKXj4tJJXfRJ2y2xv4QREB8TdnoQtCCcJxwo2SgyQma8kz7Gjy2adsWNNpoEQBj",
  "key27": "bfMGtVaUeuQvser5RpmTooBZuNp4RVfEChsPLhVHVXj1ikzgDB8yjrYE32y63xR8XLMzuifUMyEhmXzKkso1cqM",
  "key28": "2aj5fiF4ZG6oCZTa9G5Ktf9oTmbSr1rRf6gtDe7Roii3AfPvxkKiJf9jcPAXNdmqtxTw9srEB4CE1dx1Nszid8BM",
  "key29": "3Trmhn1EK8rspoMgcjTrRhwE4nk4hjDH6izjAEVVUvGxuL8zxQWU2fKP6aEuxB9PuncSK6pBjxvmX8A8hebabSJz",
  "key30": "4pKNpjvGx3wi4nqVkFDddZP2NxKgywjjNsgymocdMPFiQ1fncdgtHoMJszdtaKv5KJdqrh7FnWfXSVKCLHGMjkTQ",
  "key31": "4LYGQA5TmLkeQdmCHvtMwYeYt8v3ggvgSzfkz5XVce9zwLzZideXijQ9WJwZgpMis512XNAqJPunchFEvw8rF4pX",
  "key32": "3o8ev9ZmAv6eWf7binziLUMuwwdEU8GgJj1dWYfNZ4tE3Yd2AEJcrZugrAMyjLJ86zUruUCDmH9LN1ZYUQQ8Ptsr",
  "key33": "2DP3HbmfungjkFD1KMPmuYmcHBARnjFhD4kkWfUFi8MUsmV5K9tdTx4Rd1Vj2s4qCB9DA5tiZEdVbt18FqsQ7TxK",
  "key34": "5hGrP1X9nNQgSJMLU2Q8vf2C6pwLXkmW77aPcvjTCr71CvwLYKgiYoQjdA28aWbCSuq3S2G8zknjoCPsuj2gBZFS",
  "key35": "3DAyAjjJHS1BKAEvrbyJb9679hvt5rX7kJPkKzYhFGv1kfqJszsZpLGFoxSJtKoeY9JrRLs6kbykGWZ1QR33SFUW",
  "key36": "2b5uqorUqVnbtoafBYV8Hdhw5RWp4ZLYjdJbrFESsQKnJptSBTHuyruvzf6vMcQgb4tj3WPe2Bft1yH8KEt1oic3",
  "key37": "cH7hn69qQzxzuTLYrvxL7Min7q3o6kwNk9N4sy7qz8HHjYb5oyDWPBmUVBoYEudgWr6TAXBXBnhPJeABzQPuByt",
  "key38": "5LjwgqWhJVmBusJa9Mf3xXgwKZ7qt3LZZmd4We5cFdHPYg6FaN5tiRdqo83NLYtSG8PPbhTtYd3dcTicGi1hAaK7",
  "key39": "NJ2f4zQxhzxqhyrUCGx43XRHQZ4TZBHLsJ76gSKTJt87wpJbdVCGmkp8Yy5i2532dkNDPz2bpKwP6aKYCTpg7gK",
  "key40": "4yEhMfXx92aGadHRWcex1a3bFVm4SauKzivVSswYoCccYZWs9EvXExWmyYbffGqVbonU8e8MnHhz4v9HfcaGSS6A",
  "key41": "2irUzGuEv3RbXU4PysGgr9pK2VN4Fra4EyRCek7kgNaaF3NRjbjo4j5QyGWMA9KYAi7Garj6HpPXk7BRao5kLmX6"
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
