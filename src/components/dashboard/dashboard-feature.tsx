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
    "2Pt6keQSVbky2j6f4NFju7hXFFUj9StWLgf5Y18rn8G2WULJVgx2Vx329ooWfW3yo8fvry8ZCeGuooZq6wCTSxeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ChLCH9Lk3WCQZ5FZ9wyWWZ9UoWkcLNQi9pgbJkyPP2DHGuh5GbgVoVchih2s3zuaQYYRmQaS8MtZcWEYwKb9hjw",
  "key1": "2doyWYxxTFTotstNRsTyCRTXoPgTdKNjnP5DLk1c8AXQSWZaefSoHUoPw7Y56pt3D9PdqRokpZX3CjJvJbmDrEYY",
  "key2": "47m9dhva86gCn9HdqEcgsG1ZUB7VcVidFrAikLj6TtTkFST6VgDZBYog7YWqVe6znb8eJ3KSyi7Ps71z1spoVkGX",
  "key3": "2EDFyTbuo9uwn4DjbHyNresQxUNfaWcM2ixe9dy51K61YyF37KzKyMSdP5n5CrsrwBzG6cs9fG2vSjKVa3XqP9sN",
  "key4": "2fEWcDtzR5sQShCsYmjHyyprkAQWHbP4Ppijfw9Y8i7Zy7BJyPHJS6SFUTH3Pzhba9XuvPDPxrfpQHsSoBHHCvos",
  "key5": "7hZgit54hLHD6JdLBXACHc2RCRJMcLoEgrDBhMCS8chDhFvxnpLPm2roEbMThyuLsrqSp3BHRbW1jbV3UhzqwAX",
  "key6": "4V3e4RTpjVqvcnQxn3odLdfBGuisEwrvFw4thpn9UH35R7GGwKKjTaCd9Kyad8L2E5GANo6irU1hSFwBdkNJnPRW",
  "key7": "2mfwj1hyp35PPoAGY1jo2Wz5N2xDpo48EKxfJAE1JqHxbAQBh8ezGPnbNER1bop8mSTaAKS6dzysk85DNdNnMcsG",
  "key8": "42tf45C9oiMg7Lund1Kbnn4wPB3AbnBQ9CJT8yU17r74bKXasLs3JKamck17mTSzdk2QrxFkVQeotdfgMmtHBGKU",
  "key9": "2C4TNFUJUjGkRWTsGrzjDniDdjDrHmujm8Lntu1YHNDtTpFKjBmFHgHiHw5BTyQ4AH9Wu5CPL5aSQeJfVWeUZUDR",
  "key10": "q2QqYEzTq1NrjuZiTex2dh1mHAXQGyS6eC6QzZcPkZJZzgvvVCpniVVAYCG8toJHopq8RjdbHTKtdawvw1ZqdTc",
  "key11": "T4PzJoaQJ2dGirbTASxggMDp6wjeeso6J62qyjH77FdfnsZcoGhYMYRcWLavmFhY6bdWmoF3k1C9Vk6oPVSBFEB",
  "key12": "iQWq4V1SfsLyeuBbv55mpY3YdLCJsZGSSbAXozLN2fabtaX8cgN4M438A5KacDqJ59YBgjZBQPETzTF2GGtHoEZ",
  "key13": "5u4PPQ28r1qqiCts77fnjaghc2XgGBCCR695Q26yMGE92iq5E3vDgx6mPaBj4wPD4MT7YysLdHLdZxfmawMMQ8o1",
  "key14": "2V1kS1ykVxnX8NKx17STnnYy5gwyDtvJm2g4WpcuKPkbuofmiFXAS377hk63r7g6eaMp4cGn2WbkYeBAs8RfCX7R",
  "key15": "4mTqH7YKZ5nzUGPS3XSTA1agR9ojHDS3QXyDn3VjqpYXxHFNfTKAfxYtHtHCTKRnVSQ8qthwwM9WLqtuZKM8TbFe",
  "key16": "4ijgYNrrRkubHi8hsnkVr2cdpyaWeSZEQfiFtVyBG4x89nM1G6dPCA6hbDaHjvM4uw81RiCmvqLBNZyn8gdS3edr",
  "key17": "3AmVPspTdAhXcFSJpdLKPFuAc7HA5L4bbAhEpKPrSgW4NbjY6RxJLvRgHQCREJiKa92aSHG5CuypA9JMsfB6FzYr",
  "key18": "62K5hkW5XSVtPrjzV6fU3rMooytVgbEijRAG5w89t6fkfB2d9oq4JcK2PhncfvmPEV22aSV8xxvQB5JETnVxudcw",
  "key19": "2JfoCREvueEeVoDf6HKRiakDvuqBMeV9pzNtBeYAcDh8ja6HoprQMMJJUd9Axyi5gUfea2PmQCa1WtThmsEicoNk",
  "key20": "Z4xFJpRPfSFkNjZgiFFQhQfu43XF5kmNkCeqRb5ZqSyfTzM2Jm1oZHAyEt1DTiNDsmB8sJynFWXD3dvrtVV1pw9",
  "key21": "4MxJJCydjoi8fou3hPqvb2Bk4mU66YdqGoakafu5VbdnXpHgrehFZ8K9EwgJMtTBcGx7KU242VPccomgbvK6D8ti",
  "key22": "TVkrLXN2NuCsN64aXv1Ch8i3pXUKtKH6Rrs6V7iqkHtd3GMtSL9XDEDN29nkp6Ad8rhUCXmArhGWtqbvBn5PSWB",
  "key23": "35WE5sBK6QLrQ1yk1oskiEjREjcgsqaXRhxYqDWx2h7qAQbLbJqH9jPMJbuYq6Xa6oLgWXg5DGgrMGpEDGaSZ2qB",
  "key24": "2uv7akX3votF2oyc3ggT8pUkWV1o4gdL1XZD2EwbyszXc8EHk3GnsfKB5TYbdo2yf6152di33sHavNXuf4wU3cWC",
  "key25": "4NbdEjkXKEP8CQP8jaR5Ceh9ewjCXMg2DQCExVkBfPZFXqVvgX4vzQns1FVXA6Ghkz1hip5WNqy6c32FvarCqjSR",
  "key26": "3rwk383iNaBgE5Ag1HvSJ7m2TzDe8GhGc5wjNpCK8habzm6nN5seFTRan9jhvG2DxUYSrVg7o7AvUmNXxv2DFzz2",
  "key27": "3zJNck6EphHjYFyXoVELFitJpSHk21dbR4VN5tjs83TLxPUgw8stdPcUhfQho141bsxKKtjgCmuxR5PQPePr9ZyK",
  "key28": "5qqR6faFoxncKNV7XQCwoRFnMY6wkEUcZQeQsb8Ws2YNY1iULw6xp6oLbxchxuA4ZaW9aLJUjXJQF7ot9AJhMdWq",
  "key29": "4HH11Vx3mwmDUheVWJrVLFKc423dvtjzCiFxfk6MtGATQ9D1zsmLXiJ2k978w6NfkEDjGVKkfUsRMuvYsYjqL78Z",
  "key30": "kHhyvxm6YrGuwDogcWgV7ssonZPrgxwUE9QUdkbktHdPTTiAH28oRe7kXwjnbxs5fGkuC4uuCJGTaE2Epksr9Tc",
  "key31": "5Ac5fUFfhpvSeFm5jqDzpENP47c9At7Qhr7Fm6BQSzuJ27SWJGhnNcdbttMzZM3keidnGe1bTJ9Mp4UUMAQAiB37",
  "key32": "5S12ZtMGsq6b1v8aTsDHg7otEq5WYVFMrmuRn8xqUZGdA2UWLvnQQMc93Dfqp7FkKpcMhTnxbwUPPESPQz7qRsWP",
  "key33": "e8BebSdiU14xwMhGtPRJULiNLLx7DxwftMM8G9HTrZRRHUXEhhWaYgvaUJ1ztvLeAUGKYxRzwGHEBMy8ZLkxKXm",
  "key34": "5nBFpQiHLsLUPHbV2NjGQ19b8u2emgfDSvDnDN4cQ21jSHSZRYvWijjMQaUVKzFD33fXmoAMjZxxNdphtEtJtDaa",
  "key35": "DmNAhsAapFATPgfqxZew2dMgvccSgPRmmuDE7Rf6pwTsoZDhfsqsX4d4aAmaxLWXsAdRzjq3ztBKzmHS2cfGT57",
  "key36": "HoF6PDLcRusjcYVFBkYG8knxeMt3P7EUjNmQh82NyYi6BRh5mw4uVPRYUAXeTSs7k6SLbinvBcyzzWocLPoLWhq",
  "key37": "VzknauFaHgE8UmjzmkWcZweWTntf1ELipLnYTaDdkHh8b6kWYeBapKfWjty8EsujLxj2BxwGJY5fmBvMDJnx2sk"
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
