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
    "ydTtKfrpWo5WopG2j4HbnFm9TXf72NwqfiTyW2bBSDAmceMNTZjT1VZZZKeqjrmAU41z4r8xBewQ5KzBdTXUAUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T5Kh93TWZFjYRiWdutqt3pz7uH1L8WSy1wzrQTEZfMPP7YSNqRwFhDKY4hgvN3ikCKSdXWJbDFhqMBd9F2AmYUB",
  "key1": "2LLvM5GuRuwAQYMqnNKh6PhP29rST3JbRqGyzqFwpvpBTf67wUoxq8UvXnuAQEPVR1UrP1GDuS9dPayUY8pvPbMm",
  "key2": "4PQ9RDSpJb21FVLsmFG3EoVcCzwCfaHgGfMXtLTr8buHSeUnJjNePiWs7ZXPZxKHXZmAVX5kR72nnU8j7TqL68UV",
  "key3": "5qJkETjjYui99UVkT4PswLekiXwCuV8K8KJWh9TD87ZQApgUfUGo3MMHjUjHfSU1gf7A3ShZeYdj9RfeJxZNiH6m",
  "key4": "4pEV1JrUDnh1QYF7qNXpApNgDrofqdqsPF8s8865zWcb7EH1cGTvXjJ8A7yhtD9KC1F9Q8HJWoiqNHij3saqs6ix",
  "key5": "5Jr6h4pY9cz7PxeEtgWKLNdVL8KEiZod2UK4NLmkeNbiRPK7b2n1TpJ1U7zwNRtinjt2myGqTYXLUu1UbG3pLQMk",
  "key6": "4qtiFC89mq4CcjL51UwHvboFtKQWTjyaw1uPpSDYoR7ym5fvcSd4nD4NRLEzDQU2ANSACtWHBZunBUZpd5CWiZ7Z",
  "key7": "3pB28zQmtka2nuKUw6MCCedD9SVeXfvpu5ru5aUg2RUZPk5sxWYx6pvBQzXQB4rkJodFzFbqXZBxJkqQ2UHoPtnF",
  "key8": "4sXDsW5Z1kK4wK89SEcRMn3a8ovLEbuqtaV4n8kD4r5pGqmeAASswrsttTFRoRWdB5WGjgmRx3DtM4Keh6LYeytQ",
  "key9": "4jMXNFjxLWEkMeabx1NYWxdx1g4qCnGrm6wnR8eEia4h3KqoXqzmTCWjMHgBouUHWYXyaSFYCkRkEMgNMWEmaMk2",
  "key10": "dcZTTR37d4Rp5AA3qKT5NxQZ1wbtss38aPtr1vbCMUmdTbBbsNB15ZVVN6CWebjR5UTMUPM9VHk2svw1sG8XjyS",
  "key11": "21ZgAkuvUkWRdRqoekuFKd5EYMrTDkGavFoZbDd7Cf3Z5Z86XH4s8btXxMEphnqM5QXDbvaXiym8F2k7wmaBSoVo",
  "key12": "5Gs7xcMiHuiP5fNm99zxtGUrJf1Ynp4xfSoy41bPVwGGjbjFc9hKx3thEtvPtRd8trKQq61f2uVDyLVFHsLxDrqt",
  "key13": "4BKjbQ67qwMpT8w4BoiTTz4gW8tmfGnbRAnkp9ZhyFFYLNTzwzb4XPCYw5UttytSqnGPXaXWmNnPu1HNjdUSPKfd",
  "key14": "3VArXJsCWrrL9hW6SY4JHAfp6fh7bswZADTXjMg3UdRLfcTgoymRZKZG39mxSuzU6yhELATx9tad7xNR3qP8i8uC",
  "key15": "3qwL9NRupQwqeew6unqb3T7dR4XQpsvjierahbfwpGhaqmHbgGDcZNzCt3aoSH35J7K2y6VcAHfzPYGhrXyp1yLm",
  "key16": "5k2qjY9QPBVz9438q47KnSTEgshx5XTfZR5YeMnac8ajWr4VZotDvjswcZeTs59qA15Q5hzLAR4S4WDePQLPBc3f",
  "key17": "Pqd3CDfNARr42Xxh9EQuJh7m2LonhC4zmus5tGgsqPT7XHeSZQH75aqSBazyZQx35NRQJsznqqFqfsCujYfm8mQ",
  "key18": "MXhNPd5FURdemYBrg1ssJdERYPiJXRBf6NSpKXn5qi4oyGwtb1DVxnuCzcmFJsvGhZ3irVMLVaSKwwLd36nBoaS",
  "key19": "3EdqsB9xQDoGJyvcDVuMV2UgiVWgjn52qvNfq49jHi4Ws4K3FPr9waqU476UnuUwaNPve6jQLopz7kVj7Aqo38cY",
  "key20": "qhE7PGmb5887fEtMBHtJj8hhxnsGUL3NmrEwYz7j7XE2nqnpfifkF5EmfTbyPRdoHBQDHjeFA1sp1K4NwCTX7Gt",
  "key21": "4XBy887WQkEiCxTYSM8Y43w68tjWU4VqpCjMfBSJ56RSaA7uP2Q1T4FbrSxQttu7QSV7TT7hCqBwX4WPCG3Th7qF",
  "key22": "4weVukWH3mFxV9xWibDjLEFNLgSgaMXpPpXgf17mJ4kj9dokuRKDAN8nzMNv8AsdY8Xh5D5t9psL5Nwmyj9d5kfk",
  "key23": "9SHtqfiFSfehvXyDpU8qf7nK2owrUjoYzG6pWWUFYpW9tKbzrcb7xzHQ1ppvmyw3CW2vya1BeUWhZ86BmFp1B59",
  "key24": "5LdLTDTxrq4zhQGkJ7MUt2azroTi312EdvVe5HquhBobuvhGcNEiygRcQZaVUWabsJRiHyjYj5t9sUTT9Mw1xE12",
  "key25": "2hn6GuA63yFWksCJhNNxu37zYjhPt5bJCrUjeWiHXZ5XwvZxrKYD3xTRELkLC4CpdX9dbA16bW4RsWrg2tgM3uXS",
  "key26": "3qwA5LMJgaLMw1A4stmHoHhXF2M1xwwvCvV8ks9FH3kx6QSA7jiFBYe2LyhahGbYnoYhejcJiWmeEP2MjQrxQkhV",
  "key27": "4sf1REHLwziRSpYwbTrGd2nBx8HJYogFf5qhpw95RmjxiCJbybtxBMHrw1p5cNuuKZ9tnscHH8CKyhE93VHWXEn5",
  "key28": "5ho3AcahM6fHnbXpWtiPZXVSudQDyQufSRoPpSrXYWTjHVz36EhULQowpUSUUPcQZaruawPSspGxY5Ymi7ichSjL",
  "key29": "4c8G1pY1GtZWcMvg7RmsiDf4D5NAJtQQhJaTHaeY8fcPw5MPJGJe1p6kQJNpUbWythxupsZv98ojJn2fngFGgN4T"
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
