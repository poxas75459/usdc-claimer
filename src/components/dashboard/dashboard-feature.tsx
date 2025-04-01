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
    "z7XQrzA9NfXbffkcEo77uKdJAWiN4ovNQkTFtJ7idzBYv2LGCWi5PzWsvqh31jQjrBmHfwMv28Ap5EhXU979T6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KajZYFrCo4cur3pGgky4jWgQaRVS81G2mkNgoMEZvsT94AcJSzzb3WBnHqP3CKN5y3pYwV68Juzk8BZeh1NSkZD",
  "key1": "4TmoBQyNbgGxg8mYcosb1u7prJ6WZGR2ic2cgDVVyg3zCv86aCC2gPAJ8Pbz9pQKJzuXHRENhhdjbR3hCZiyBZuz",
  "key2": "5RhqZAHbcht5qkj6ARCqnbNgVFDpuAzuMv6AkjCVTyaAi32NsMTdCDqoP4TPFXPuorPgJHRgE4NY9tuzUPaJ1zj3",
  "key3": "sumkHHVFquVJch5pu5QkJzyzLXHZ3GTedLuhGawwEaAatJVrZJukRBV7VhR4iGfmddXAQ3sJ4LnB9Jz3d5Vj4Js",
  "key4": "3pmkLseneHK4db4CRhoZXisbJqyaQScPuZBcrLNmAA1aaU5gaSfAJ43opC7zXjZuqJpjG9PdN26VL2rh9epPNuHm",
  "key5": "2K3TNvWhWWFcpMbJj4nFCE4L1v5a1nBBfCsCBGZkc1CPKcQgvk3hhnMzzAv9fLSpsAZ59EqEZy4ynivbUyMxXJef",
  "key6": "21aECeuxaDQ3hA3djpWiVskjjLXqE7mnaoKj62cAH69ASnv7Viyif7sR8rEk1RCkZjfwE9v1XarXuo4JnPR5oYHP",
  "key7": "EX5YCVPzKrDjdR6nHJzaevNQQ9Hiq6wkgejJe9HZRz5Dv1QW8TStXYbLwRYAv75QiymJEgND1fU4EPZkRNgQebP",
  "key8": "mLWE9RzGQx7FBc2aQ2hcUmf4WRtgKdchpJdnQDTKbbDix6ds6VnJ1yByr6S4HkUb2C44uCsjUAWCeSGU8RQUzJj",
  "key9": "5DhT3AsHoyGzv9VeFrbJewxsww7eHMdZdoPUEmhgC52dQXzgt9JW18xrt6cSYb8xrmohbCtUcAutq2EZtwYhS4QW",
  "key10": "2zphJsLufVjKH8qkw3dr38nRxse66UDrp9UTg7xzU59PV3EJAmDeVXyaRz9z7XurBBzBTawEBGAP9DLEeDBaGZoh",
  "key11": "5xd67TGRzhP4Zfw5mzdMgDNS8V8dqF9BVi1BnErdRQZ9fZoVwG8rwA3pLUyNnUAnd9DLErpDjQ1L4TqvASQswV1o",
  "key12": "5SGBsYvaB8YE7gJPFCwXTQb8wcCiyhUTnhGLWj42qHujA4RY5cmPGaXTnADqaNHuf4DArEnCq8Sn35S6FmXL1Rdu",
  "key13": "3m2PoLffvkQWwj4yjifisvEbdbaKXJy1zNoMwRCN6u1gNXN8upm1bP7WjGzi8HsaMJqF5SscC2RHb6FpdKx2NmJK",
  "key14": "5TxwcT6yGVShXKc2HtD9YJtYbd1M6fp5oVwYW1hs9aBYVYVuHWTiwhB9BDahtP9y62zUHWJ3dP29KGsBsdqbsyBq",
  "key15": "4NS96itmYWPcHxJywj9Xg9BkfUrw5RFVNtVYD8s47ncTjnSJa334NwvbxnrAFgn6bnHvVDb6vrxsTkwjyjdNxp8K",
  "key16": "3rYKuiKwyT1sSRGHyGb5fhQYvtkZaMefA1MFcMnHztwRBGALz9tXv6v4iy73ekRoytJE4AoFp1jFE2T4dRjRz9VM",
  "key17": "64WV91sL9RMgbD68xQtp2W7FfNcRsMUPn6m2A3DQ2ZcP7HczqqbVLMq9RLkgmhx7EnEbPeYc3r6pNc5kqquLgHsq",
  "key18": "2qNAKPE9mR6FZB6DXpHqUyWzoLby1VCRsUFgeycQVYPM9ZRMP1Neo1AY4anPX1aaJRPHHk6Vu96iBQoH777RKaUT",
  "key19": "3wok1Kn6watzDp1ZRaMpbHZLiVh95zPamwThzA8azKBNu2VH3SfUy7pWR86H7cGhzZ7PW6RJd64hkKL6DnDRteWc",
  "key20": "iFrk6CTkVdLL9fkvKGFjc18Fh5dGbwzeCowH6gyNDn2KLznhRXw8EiRLrPcjvH7Bmum3eVfvh8TwgsJLWGPnmFa",
  "key21": "3gUHayVeXZ8UDdx6UG4okNksr3KBmNUcWDXiPdFV3AoGf6rCEaKdpZ4MYerCuWSxcDPcEJpcNDW5TyxjoN3ZnEZn",
  "key22": "f4UwnhanAB2zPyYLoPuvZfh5kX87qwicZaEy8vGe2qrRKLg4X7AtBTkZdCYr44XNoa6wJQSTqxsqQ2fsXUdZLPF",
  "key23": "3yXx7qz2Dyz91kEbnYS29oYt8qX9gpP5VePbnJ1bHGx49sSW54TH7UP1NutkrgMHj7A949HbR955eEWr3x8jA5kW",
  "key24": "3Ca318kjkhVeK9bnAhvVhqWHb9EXxBLJ3W4T4PybPbcLYBKUyq3B1rWUrW4mCzHEfusff7F5eATrvFJS4c45GxcB",
  "key25": "2ohDGtEcntvehgnjvJ8wzxnYWwnaqxiED1nvh9D5tsV69KKH9bQ42teUfHhKDcUA19MDR5XrtLX3hWxQXnfzjQb8",
  "key26": "3n9efFZRsd4ZMEUB4BSLxVTUocZgrWb54BSV9iYbaMNewNUS5mLg9gZjNmG6zUcQi3Pd9an72xVcY7tJ2M6NzNAe",
  "key27": "s4Xsx2YpJ53iEDWq3YPdf8CW3X2NsqQY5mvT933BeM2CR6WGGoRms36QoZP5ToYnfLNLGWbPiaufc63eanHZpzb",
  "key28": "o1GHm5Trn5X5Hi9hiNNnC8cQSNPDfSq8a6GvYcDBRJsJbewmCyCocr5wtAkfK14ZmF3ZDtj8gP5e3wnvPnbDiDu",
  "key29": "2i5gKZ8Tcfev46WeKUtcCuCMJLNdDzE3hxwR1jPpiWaT3rRq73XZhD8vqZE9UojvWvWSGMLWrynwDqdbLq87UCKc",
  "key30": "3UQcyPK3rabeVWN1yjmWnY3o1vmeY2nh6QoqgeKBQcMQTbdbqm8B8RYBXDxVnxzJjt523GeRxo89pbNpHpgHnjvs",
  "key31": "5ff7uktpDEms7HD9p9YhhQWnhTfdj4Rpbn1H9E9xFtLKhiyURpKR3WfMH3GL8auHQUtzZwAc5PjJ72TFNzrvHuy5",
  "key32": "3HJ9GHVSTxTUWqAritBsMD5qLwQ34K28Ho3eNF94SPCD3aVciz2UeqNczZxAxVZXudg7zEURxkMjrrrZq6s3f6uD",
  "key33": "44JjYFjeDneEBFKsr4BhNQeDpx6MpiWHZn5JbgDcsALpwkDxYBUEVad5t3AwvntFVuxEF4FZM9qxfLahfPrDwH3b",
  "key34": "5Tgb6F1e4CXmsMXVc6aRDP1sfzFxGjM8EoH19F5yTeuUfGnzh1kJJtsEggEH8ikJ1sFLvdsFgifg5sb9mnHXJquR",
  "key35": "36MqjJ3UuYvmM2jaSRVXacqf4DLFzinK29NjPK5zMTgskc128DhLYbA3jVHDbZQ8GpCPJdbuUrZVQanH7vZuQkBM",
  "key36": "btfWc9MkwugeTmJRAZNpJD68fWf8Wn3b2XkfeHdgkdurSkLJ9Hz7ixZfAjKSmHskPgDu6mG5rcBEZBw34fKhTx4",
  "key37": "3DuhLMj9gvevyACV2uoDdtyZ8gCacXvaAeF9CxJP61aw7248sshFHRmXtVRS3YNL73gcvKZAxNdLG8URK5hQwfgx",
  "key38": "2E8LWeVJ2cbPfcBqkwaLkGTqte4FYxVcaGTBwsm2nmKzLRm142eSMNGhNPsDT3q2LzpjcHf7esjVeWFuMMxTR87G",
  "key39": "41JDrzUGaF9YsHm92ktAiwtpYVUa3JKyVwAVh2sSG5VCd7tRvrUykEtYztDE5Bg932PBygy6V8grFk6PNK2TdA1A",
  "key40": "26tNYwwjmrEBKrEWzPY2iqyY7PXJppBcn1oVGGDurZP56tFmAyLoJgr9mHE1kHntFfMxowZWWfnVnhn5S3dBLZCj",
  "key41": "4HtVJpwZfK7RLGvx1Gcenyt2WkQ9wQeBGfndvhSepcGN1xnwTwSGVppsxv1BAJ9EbuZhrrYmpGTSw76hawS3cW4",
  "key42": "3iPgQh9QLQDoqti7yaSj7N4nHkSszPQAy5aZ4yw4vGSdLNnGYNSCZqVCUtsLsnjRzLHkcmWJjjMebeXsXTULHPvG",
  "key43": "9D7GX8rxEG1FNoebdwQAo6HviY3Lcw8gFTa2QbPNMndD9Sg25HHYbXBPKE2JHWgv16YpACs8f1Bb88RUKbQsrfS",
  "key44": "Z6DVEkFGEom6yLBrrFLet5LipDWcGNyL7rXS9FCHaRkAz9oYpihRNQEf5PB3e2SrevpnTEVbbT1dv88bDSgVLXo",
  "key45": "Noz3HsDVNUqQ2DSfAR8sVYhUnfHUHVe74qHdVKbJnmqUccmdTyXJNDDwnCKoyqHVvxJt6Zkt4kv8svmYLzUxRes",
  "key46": "4fQCuceNwuJYjreFkQZuX1Ju8MQBXLWCJ3vTnqE4GvdPB9DniPKDmaMnLcDrWpj94J2H9TGTrkSGgJgMiyqqnbLY"
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
