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
    "2UmezseZm1ajYcXZXNS3c7awDWu5WizR1bvuUwHwfmjec3ypKtebRy2ZPujPy7KhvmY629XSP2NHZU6etxJMkroW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Do1WVWSCZMngbzFNwwdPERi2jjqZiJLKpbpmLcGUha1JfMoGTxLfu2p5LiJaHARCybiBefebxMgsLwn2fQCQMPE",
  "key1": "2qKLNFd9SCVihBLWUNhFqgkpgCrSA6NmzN3JCa87d5GcpzAUq55FfShYxCrGhSXuPK4p9YRbkSKsQceRZvaZ13ZB",
  "key2": "4C7KPWWBFxc6JMHVUYwbTVGjgJTmBz3rXYo2Yj2HYd8svrXcgoRu7wK26oo8oBi3ZS1jUJNLPmZai58cfbtWZES",
  "key3": "21Zf4btQqZ2yWtMqgsgVhGUNC9AT3yc5jkq8mwyVQwGRUGkn4otCjMgZ87yVqNYDxNS6g7yJ1ghbjm62MeqqpXzC",
  "key4": "3Fg4Ln5RZqePxvJyu7vTvvQesM3ZoYKASfvvaz11pMbGBrg83F8aEMFfCfVMp13o5njEZ4n7eJcVHgd4xsfmCY9y",
  "key5": "3G16PLhHyzjazxeyyA8L3UaBEhTQeHTLqdxmoH6qBESxdVdLZTSmea5kmsaqs55uGb8HkerNRuBevxAyQtsycqfn",
  "key6": "yXDPbyiJSUG1G27ALuxSBQNdbvisZup1A5S7TtgYBvv7zJauo7uunN7iyjWfPuRmPMy3hThaKRCiaX3WntxP1F6",
  "key7": "2DXarUDNDmDfmoLWUigZCoVA7YEAQv7bYLp8LsCFbGZjocCihK37nyHhk7rgN5q2biAooTQv2YZr5BHPNvuZEP8F",
  "key8": "QS6bH4GUSkmmFEoVpdZ4SzfBzUxNHf5YghReusaH9DznTYgytQbcEzissDTevt2yLPxh4o7bj8p8EZzLCqtPF1p",
  "key9": "4pgvt9McdYs3Vy5SmviZkfrHhjPmtQn4X8HopuEvbBkw88X2JKAScbLSndHv1Kwceq5ac4o8bZoTg7BikARAMVbq",
  "key10": "4JJbRSHTRaaPfaoUiheBTumE6E2rqj5ZCpFgWoKSs1mU5L2sFstAG5BZ9btWfjf8pdVt2P4aTHr3ibFNsmAZVhy9",
  "key11": "5i5YdFCbvTkq5Gs7eZ6a2V6LjGtGEGyFsUyqtKjwdVP7qhc7XwG3HQF4GaPeyMArmWA84m6a5c9aJTnmmM3CayLh",
  "key12": "4Sq81qz5UmKxGxG4oX75A7Yv5v1n48RfkS9gDkpnegAMEew1bfyu5DRmd1xnxnwj5r1rBjnHXgKvZ2ttHaE9uJ2W",
  "key13": "2cRr7aQbv5to2rWqZvKPSP1zAmo8XDLMcvsCw6FGGiPveQiYcD4bFQd1Nwj98wA7qXQE8FUb4dQ7bPvxqgXo4qQH",
  "key14": "5DYUZYbgwf2cvGiaG49j3RWwesJRZuBi1JwBJSAE8SfwRvcqNGiBF3NJBqGYhDhNUMwPw4KYMUoFWNvvpf9DqVSB",
  "key15": "3fQFi6YLzVBaSvWipayckSMqVdTxGcCdURoyPY6kYktGjpBwcfo7vxoiyj7ZMyzE2K7cKnoe8yKnsbUX9hfcFUxQ",
  "key16": "3tmf6Jz8ETJd8CqcignmLJy5hrumWabLzDWtJWfNxtTDoCtiZH4HAGv3b2qYfnK6DMKxixvJob9BAcPipvd37rMn",
  "key17": "5L4ySTc321hfdnfdXJEdKxB4uihpUkTTYLwiDNCAV7wLMSdUGEeYXNBaf4keZNZDuBvuePki4iMHaavtejMZ2adz",
  "key18": "2DMEtsiM4dvM24Aqqzb46K3iHz8EVaCVprh3o6BH8TBwjUsZe4jQWkekvPEnq2wsK1uhtAikfdsUayj3JMHNyQFZ",
  "key19": "JHoB8TZFUGpfBwzurVodZ96Q4HKJt2f2wMyZJPLejfjRQ1tjXNFfu9thZ2YC5pSFJMb7kJRikKQscohCWqC1eJ9",
  "key20": "BnjJsxXuvQE9wxCoU4CSQgFW7y931ErHgGdvWTuwy2NQ3M23FiPLbshwDqSPjcBSpPmxAkBqXSQqRtNURvJetmd",
  "key21": "22uxzTBg4ZkvGAWgyeQdGBrKdSpbj4aisEewRPyZ6n1SFxxaDgawUmEFDdGXiV3wnKevF1QsThZazm3mc9q2VFXG",
  "key22": "3aoq45MiCYjBFSsxx7z4tUKLFKBQnhD7rsChFcg4TvdFQz45TV1JCDo5jzumuENUkgxp1s6FxcXrFerDs3VU96nH",
  "key23": "2wyUj5mdd9AtABF76SQJfNuxvFvBBFDd2Uid2EgYG8mTa9tJu1QehAPKGcDuokkPemk7eHinWRoXHQgY5Gu1rNK8",
  "key24": "5eVmU2h8Z8aJEvRjGmcEYcB1pRu3QNHN2oUyvjaDbTYeoP9PzY6VomeGRJf2VHEuzbpGbR5ABF869rZ3FBFBN5F5",
  "key25": "2DesC5g6gUzGBZpCBriAH6wRr6ozMJipVcP81zQNisrzx9ijy2tmgxprVH5p6w5B5F7wW6pbd3tHPxyvdzPtoCrS",
  "key26": "4aiHHgUdpEa91MvcTo2jTgsEmU7ZpmXBHMsAJDC9sJtsDkobNam8hckLAW6E8sYy7tuRhyBJjmeLdM6ADkLud5UM",
  "key27": "2yjttKwT87AvFptyrfEcnLZHswLKmMxZ4VxdUjScpTNWVXdXJJtTrcMbXA7At6pgMamHZQExyw2WS13oqtgfPMsU",
  "key28": "2n7u5GNLbNcmiXcGjFSqWBa41rWtQZN1NKU7CxY9FQqJZsxbzswHBPGy2n6phQvvo6suvKMdV15cT6w9FaxtESxp",
  "key29": "4rLv7pE2UPyCETwuQC3zgkihM7Cscyq3ZVQTNhuwdwrAC2wkRZ3VQPfXGm3GfaruW2cMnjz82r4cC451y74U19n9",
  "key30": "e6H33jRM3zBMGAo9doxSdEzbwcYKLxMn6n8cpavYC1v8qKjxUuPMBBBqNTHrgxiVJbCmtrdibhiDGqW5tL6jkWL",
  "key31": "2n2hvu7doisXVUrccBRZwGVexRJwfjDDKzZyFQasBmp8pLCKkqR7PKuCV6GCQt9D7ST4XSPrvHw7gYkVnQ7at9Eu",
  "key32": "64uz7xj5y17nbPTEGDkjF2LBS1intfYThf3GxpW2g762vhENfttWSPsBxehdZ9ziF13Bjp1gH2EEAL5EsGMcT4pR",
  "key33": "kMZ47TyM6KGQbFuyvZwz1WG6M77eg5oP9nnv8hUPmmhQCQZbAtBpu41fVSKAce4q3Ak8ZYBrcGVMad4FNzMQTaw",
  "key34": "54H7nB6Xw6RJztyaf7XscbBstsiniv3qUoUnE74kUBQkqcvA2uHnt4Mwj3fjSy5oyYkkjhAmc6bkQtH3PeFU4FRD",
  "key35": "2fDpdMBgU5qdrJohAfE7dTfiUkt2ZTwNt97Z5H8HSDJSxanLw1VDLUpksM6KeZXMQszVw9y4yZmKs4rEg2NdNjrC",
  "key36": "ev3jG3Dtuhw48vLSQDb2Kfx62CFE91op9sZxmeeeJdjixGNBX2va1dKGr3kZtUTmTHkXMbZQNm7G3di2Kqu1qeT"
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
