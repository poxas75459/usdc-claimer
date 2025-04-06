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
    "3LjUmAF8DibWibeAFm3Yu9uB5xYPhagZYUd5aaCShULqm6CvRkBzuvwDJHTLnkbybZ4XWenLEVosmX75fmUcRd72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SGXQ5i1PxMZnhC6jpLX1vHzT3TrcSaK142ea8Z4wLswsUc8vyQHJbTpD9dPBNNF3suMDX3W3xZGt3qGmpEN98qj",
  "key1": "5CFSoXMCLfGvjfEmSdXwVyPUodva5whT58xwgX7bhMThtLsvJqsT7AFPXJDwZ1Ehht25ZBMn5DYwUM5vFvoiB8Jy",
  "key2": "4fnv66saXYUMnRq6wCJzp3sHfvGcjFKqMpDozCbCfr8F3mbUgzonsj9CFdnuTQNMcgQHzYhK7GddX2uQEAEQ4nfs",
  "key3": "41U3BZq1brtqaLuMpyHCt99AhBewkuztmRDnNSSo9F4YDhgQXPxnmUyixYpT74vyiedsTGU8UbENrsX8ugiakRge",
  "key4": "5c6XPA4VzjjUPHXjeqvrFtGmULiuBwxRVewh2znoiQzNQy2a3Cswrp1LF8engEohJ9Gv4vNUVzyuKvVd62KLHgSC",
  "key5": "2BE1Sx2C8zUQwud5ZLo2UHXzQHtipfv8GKNnWDuSn1gnZDzM7TFqitqZvT17Vb3zJQy9sZ3B7cJvcfu6Cy1twPkP",
  "key6": "2hYn44r79eguAqzB5k6beBasuFRNRLtqiqC7yWQBTQGXiDkgBbmn2zSJ8GBn3a7qEuLmHXzUfac6ErnJUe8NH1fs",
  "key7": "5J7itYJyP7QomZUfNhQ2jEDM1sPTA2wsNcHbSJypvDLpzdXwXMgxnf6m3dkL3BZA1KFF8ANfbgVs3guR9DyLJchL",
  "key8": "4ZSuTJGzuxq1ro1hYpUgtbUXGgQDjqfy6jm81yZkWBVDkix8fz6MjyzytNYYZFXaW1K7hqMvCGT1NrbBh3eZPqq1",
  "key9": "3RkLLB9SZTkm6K6YeAxaHnkxPoemqnYfapebYbBfK9JGe4yZ6dNHCjRkfyonTsuVAYS886uJV8rg2yb7wFF5Nt5T",
  "key10": "3yhizAgrKYd1sukgnWSBvCdzuGdrdSf8aNrQ4S3aH1dvJibmQcbhyMKqM42VCy8vJ9PsRMiWsjPmTMrCkGPWUHj3",
  "key11": "5RZyvVSxRwpK8iYSvBtwMMzyvGgQW5JWR88W82z6hYuh3VYfx4N6Ub9nc1h4GCjNFPAkLZ3mDj7ZCzgUHf6zf2XH",
  "key12": "2gc2jDFnAMPuzdWSJwfosy49GhFFqW6VxfL5pHme5j1q1gvd1C1tSj3a3BzquD4B7ZXg2PgxrhSoaVJCWa1kvy2b",
  "key13": "29WyfzNYCMzy6Vv3tWxf2gUDGTFzDEwAzh7c4WJXNvKgbWe9rFaCNbcWjUCRhBgJkmCoag9iefYLw84KXS8GUSpe",
  "key14": "TfWWcDTyu3fWpeBcLv7ExHgcycDQj6yQ4xLhLKpgpLPd3qu3nHtJ9ETc2d35nSUHyFQpzuyp899VJMLWXQKNVPG",
  "key15": "2Xwup939XveyEZiCPiBhHN2iGm9FL4braCigfr2L13dhGYdDaDnKHrPXh11NM8Lx3tYu3rX9iRceRuhVnWyu6QGG",
  "key16": "57UfpMCs7Z7oMspmvPH78FTMQwUDzejCo4Dm2NLqqPvixXkbKazD9Jhwxqveuy7TjpMpwioRaHDZA7RJKisfS5hz",
  "key17": "64TMfUSpkTMk7sTJmi8t8Gv9Ti8Ni38Ufy9cKQzZUNBhoA1rob8AcP8wLFKwuBj9HpLi8Y9udnrg3ha18P56Z8GS",
  "key18": "4YnXgLiWm6q5h5ay9AF5tJ49kLXbNMpnuJj1w7QWuXwXZYrJZXpVr9mVsi91TtdpZu7iH37Z8agPK3LphCjvoaFM",
  "key19": "2cy5KQnFwnuteyrwUgNJvr4oCbhcESHqsk4P3mdUoYxjPVFMKQppXRYGMrqA2VgQbp7aNDkYGnobpV8vdsrKkFMA",
  "key20": "Xzup1ZdVD3QmCDASaHDMUMcYDQfRpvHuAFXVuAaU2o9cFreJqtnw28KrpZYr32nDPCzN4tbuigJRgs1kq6MkYuz",
  "key21": "3J4EVXMfeAFwo7C8xWbQj3CahYKj1w6qjhweuisGceZvpRRw3ejeeLjU38GmYAGGc7q2SSruwmzQwQq1sAbhigPb",
  "key22": "4GY3UTrGZe9FABNF4CBhPHD3DgR5LYheiDYECjujmo1d74dfJPkQAHPk5XdmqMQVeTpc7mYASVPjoGYH9KzjPSxb",
  "key23": "3VqumCTfs7Pxw2563n8So15GHaPt1X99qBrKYHG5XzpsgNHrmCfvnv8w596ZYpdDQEx2HaXgywP3rqFBdA8zmaTz",
  "key24": "5ghrio6XsZ7CkRW1FivbRZcqp6mUCFuJJViCzT7df7VbB4cQudTJzBmcTwmqvJrd1PfaH3ABDSBDQzc4RB7qQAbx",
  "key25": "48u1S7UKVoTbMo6WPDdDnJcxDDvmmiVNaHGDPAKJFkPKfSMYvBdjn95VLAf1aYBb3oXPKhDgHHAWuLkqVjV99dAC",
  "key26": "hvfbQjcXsRUpCzv5rZrvx6uJ2wsv2vn87Xypk4x4MMqGXD49h2QXS9YDdRP3p3N4Fd4gSP1q1VMC61gdfemwVpz",
  "key27": "3bgjKxQcyG1HKBYZD9pR8mK47qVWLrvf2vKLWcSXvGDfBKGW4BBBy2o2C49CHgjWF5BVLqC1kBFEi27ic2SnJ9LA",
  "key28": "5rw3nR5nwqWCaetKCsBsQ3EXEv17G6JxdDMgwMkqHuozcHxqWYACio9v9zAUG9wbkKs6aAx67SFD77teekMSBfSB",
  "key29": "cYtuzezP3UTbKoYxmoQEoVWYbKMojK3B9nKYVPVwVn9miotnSmuP8KjKSYbMFDbfusL7iK1YTDs643xXe9KarY2",
  "key30": "59xxjrdQ4Xckt4md2ohXvxpdbdZ37QKrHXUfa9GjZSQuBnyvX7jfWRYVh6Q2oQVJtF73iBLhXBCiX5pXHgKBBQ8N",
  "key31": "Sa6zE6ndKeMXcsP6NK9xLNGKvZuR7YZsqGCq9eUnupc9LGdk2KErQbj9sagihXcGXcm9HwQJAyzu81wxFLHxckk"
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
