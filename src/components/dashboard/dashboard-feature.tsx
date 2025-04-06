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
    "4a6ZFD2vNvuuV46qaXL4fLKBb4rfxjPp9BDZooDh9ZYmCKViXbjeEzZMav4hgT4h79n4fcL5PWvWdDHaCdm4574G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BfaVCU2wTLPQQbHve4Qv85GQLizQnKj2Qk6MzyES8jAVtB6D2zUhva1cKzTDE8p3kYqPfNkcRmuGjPvAsU1DdgQ",
  "key1": "2mWebiaRnerVx5AnJgRWK8bC1Kronp8JaDwFMjRd4X4FkL1wsVvQSSwpiRejMPp6zUWrS9iPuYy2fZ3xU3dgCaJi",
  "key2": "5yP6Zj8m8eUZ84ERExssBAAtmCZEH2ie1N2dSU35uK2CBiZUUAfPKperjipYXtwpdPJ6yad8bUey1zS6UCTudYG8",
  "key3": "2VzM8jh47oXCBSjKPyQqDU9TgP49Exd6uRZyPBc4N3xcv4RrDHRegKznsyufn9mmPJ3N5pRSPBkXN9biezWJQD2k",
  "key4": "5fR67v9xt4ubNhnNqKCcupLgACJ7ZEgqKvMPceSgrWVpvdd9rEbmJgiWVnRwBbQ6rC3LZ29K5q3hE1ncwLn1FhEj",
  "key5": "2mKetebHy3cXjQWm9ceR53KNp3qHJfFu6hN5kMf8cmPqf1ivqUJAfk9BywqEbvAv5URktqu2zxEepCvJheEC213o",
  "key6": "4w515H4b1rb4Ta8BmDwjaDS38Y6Am2JZqwVnWHT897rF5iSjqVYq8tKbayYA4gWkNUggySaTUVhAiDzPXyLYGHv2",
  "key7": "3A7SVqzMVKLKDqtmLY4xJrqfNB25dxwpn93wWHiVZEspYtUrdfHVYY3bpQG4vHEZ8etk5yKX4AegxMREBHqkCPz3",
  "key8": "3435ySSA1Bco3e15L4VzrvCVu8RWRo3y8x27DfpNuVkgannNdVDsJm1FHBnff95XMGsvsR4g6N41b9ZMew5nte77",
  "key9": "362U4Nnd6s5AehFwQRegbxt6joCFpRVFDwzk2pxipfgHvMC5PDwztMXFvrJyzsNGfuFQJ9iJXqJWWpfueQBqkYc3",
  "key10": "4zoiid2zvf8vXVArRZdv7NxrVeaRdrUxEKRDvDvZ1F8bo1VyWsbg67g5sghWpGg9Gw9mWoQFaG7HKGMqJnuVMqHV",
  "key11": "i1DfyahEXAp1LbkEQ2FintWomsCTMejwHUG5h8nzGMvHsMS5tDpCN7GHfokezTXKxPZKdWPMBqnuJpqTocVUMTB",
  "key12": "5jQGsxUpPXqizQGc4kKjwLy5iYBxcu23d7m2yENJe7w1jSiJsnYqmkPyR5vsh8fXXEyFz1yaA6jhoh1oFet698mb",
  "key13": "5Y51w2ojc2UwLunRqkyVxBkzhHXHBncUfWoYgs9NQE6zPnHFsvNamZTpCeUfMfQRAiQPKUJ2Z8CjgwShSRwrPuHH",
  "key14": "3CuDtrpXvGoVW9rmuaV7frNi5V1G7oB3yQca4xUUQdagVYYi5VswAvyaomjk5rm4H5bAr1zTocbfCMkXamRocqwP",
  "key15": "NV7eTB65xpEZE5yX9DcF576u61PL4raexvBxvv9qF5QU5runC3onBAmie3uYhqWqot7cmeErPaT9vKQUqYxvBTN",
  "key16": "58KYndgaDLa3axmn362hL786cj57DNXznPKNUNFYKchTKNGjiSy9tYcxCsfE7yq6Kox1dqktv8q3zYqo6PvNvGMH",
  "key17": "9YWsSc9ewxDCDJ3QT15cbYexhfwbNzcmaehLwmAMk2RmpLnsn8agbQ5g7DVdpMapPe56yCuSj67D5EK8paGB32x",
  "key18": "2WAiXBVTXMtGsW1Ak1wC2fWxZikCsnsutQqFB2Djh8DhuZtNCPtRFbEUPdRxf5Cv2jzZqCBK6txbXoXdwUEkb8oE",
  "key19": "2HTEG5H572J6hin1BrnAxc4acPDBLHB1MwLREPic6fjwTVaKcc5mLg1wZE2MrCLwGo8ghu9CMGtPpALRZTQ2KXTX",
  "key20": "5SnPrvX1TQRxyNuvYKGtahY3dhu98ptvkFeHF1fauXC6ibgpBKcEzEASYvp83vCM2Dxobj8ogHt1BCq6J6pyyiCg",
  "key21": "5RtDnYiX5cF5UGvZSHDH3cEWy9M2MY5YX323SqGZvKtvdDCwMy1wtaxWWLh6Sm474Vx4XcrVy1AvMVXibEYqV1PX",
  "key22": "5b8Fq6TrTAJzcupb2MRJYixbzbMj9XkBLKQ1a1qvKEUB1QUU1dQoBGoEtqhNJLfJTgJGv8RJ8XVQm3wtaSVeat9p",
  "key23": "3JYcyG659jsPS3afrpSghcjjGfeAZiaBmjHGNFRttekUCwZJNiH2vkpc9zgNuqKTCtPYwu41wLQLCJUaCxFcqy8f",
  "key24": "2cCMxPZVDvL1BUdGWV3a1wYbCwsb4kVd6Me5YUa4sWCedg2QkyLpgPWaTL9c4hbqTVC4xG12NtYc7J4u4nteqPbS",
  "key25": "4Tp1eTHzkELFGQe9kfGVUYHgZyuobMAwekHARcGin9zTNLrnspec7KfPYfDnBWHzfn4yFXSsKHczQoB36krHwEwe",
  "key26": "2joNgTqpocW8GAhFw9JnW2sKTqsSyKP2UBfkjgUvhoLcfsnaHKad6qQGKEj3ufUm6yGErtMX4hxa9PionmBr7mKJ",
  "key27": "2DUnUJnw7P1foVy8ZnWdANSyW1zNkYGZb8JpEog38CedaKMM16fSfAWiPUsVvkWDV26NEnPJEs8A56zPXjnxnxKW",
  "key28": "AmLuUtNhjwLcbJXquN9yJJ4Awzrge9RPP7DxGsKboghRJX5WJX4e5aEEEZJGasE4sN8wjMqCcaA1H47qUPsgRaE",
  "key29": "67XgvJazBPfaxhtstKd2Ah2UVQe3HLA7fkgGKASLdm6aBaoDEgwnDkABu1Yaj6MaY2ieSiM1B1Z3J7C6kbpkbZRn",
  "key30": "36NEsNteHPv8BEhcCJJQSyXurjit9Z7vaaVcCV9ar6vkBXWWc8aoPkB3HrwXPbbV8vTgwiWeyS92yuA7y5J294NC",
  "key31": "3JPRTe1YDDSLLiqcW3AauJewAQuTSSFAdwz3V1kavhU67oQj13rdEWmxXhwz6qJ8NnMpNYmYi2PmqUWHEMARXEzu",
  "key32": "5FC35H9cTxKsDvwQvJtvqMJZdBtMytq9okZbi5gBcdtTErnLN2iHBCaeSfvFTob4cRx8UtyUCTEZBT1fqP9FLNN2"
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
