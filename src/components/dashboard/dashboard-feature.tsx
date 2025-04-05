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
    "4yXPs5VVkgJpug6Ga3zxePfVUMLya8sTpTbPgrdbtbuFXA9PLuMKGUeN6YTefrx7Mzeigfhaz4fG3fLvnwdftDgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XLDw5oLhAqM9PCV3TbtFDTfjpsCDSzq2p5wQZTAtYymHZVhwNxLJgZwoyMFPHfVcNw4x1a2Brms9BgpaoKg8Yzf",
  "key1": "3wBkBeEKA9FjuqaM8xAbbwf2FLKUyyGKFyP6WjxtF2wxx5N4reDpcvzxzjKSkihdYvyQCTxziMAmaSxoeegZHopg",
  "key2": "4HhrNK5gfa6S8hEwrsSGdRwWxrKd731xSYKeMpZ1Qb3tm7bV41RiXRQCdPSwFysCJF7B1eaxMh7atyTd5myoa9mz",
  "key3": "4peFM4KBXmcmd1nb39mGcGHjMYAFhLk4GSoBwj6yYJEMun2keAuQzk8uvAWRU9faPd56GhD2VzX6Z7KRRkPibdZZ",
  "key4": "4XsEHAepaJdm11C6UuYvk3NGsYjHU2gwiGhLzXa7Sc6QzrvBZ4AFHXtLY4SbCFUGVzaGfMt5duwqW6X33AKgVGjL",
  "key5": "2TFkzBYMhKRFiWyHK5NWfKH2Kh74kMMPmNxXyedfNBQnTAroguXtQ2jG3cH7TAZpXBNQ5YuxfhzxH1d2p4BUDpR",
  "key6": "31YAxJsAG5djTVwqVfJDQbTBFxU78UWowYqViJx82MNiZHfySWZdcavUCp3k16ovrXyMkNEJm9SjRhgvQEsdNjBU",
  "key7": "4miZhs3WzUVfhK6XHbJrEw6ARPjnbdBHURfGqBtnxQmT42TYvME8wXH3cJVY7izKoZ11ACsWbUx67FJXG3Tkn2mY",
  "key8": "4D36qrLXUSE6tbW3i3sLrR4owYc77tamon2gMfYEzSA7KQTYZHy7YV86Av2ppzkwn3AX4jBhhA9JziuDRwyA97JM",
  "key9": "5s26Ufi17xJhmJHve2vodTtdaGJKJBKE9HgPhJSc27BLQHq3H5NEWuKzBYCNnAdigx2GjXq9NB58yk31dMUhZhd",
  "key10": "v4x41RcuQnR4he19krepxwckhTmi4pemPdkoYCjMVgmKimcveuD8NFJjWyyFB7qGDWyYUuCrmhkghvqFBPGu8Ty",
  "key11": "5TyRE2jevLRUeWTdDSCoQM1nQnPgS6zapBYQYUd6rf3RV6q8KEJJjEeSXZPJLCzk82wHZPP8t3bNE3PPMf9B2YuP",
  "key12": "2Z6Sn8T4uhcDYx2YTykNqxFvLwRYsTSiqFWvC1CheyWDjLbyKNpvqG6AdBFyjJygMtDssKDKnQsKLTpyaddwAqUQ",
  "key13": "4aMBC2ENkR2Bn5Gxjmgj9CtrBukQwM1uAp6CssTSV2XwfW3u6ZLLReWhVjjqsPro6Zc6zkvtsoALkFB95o7uGXjL",
  "key14": "3pgFq1YkRhyDJFDhdBQf2egHQdXZBZiHgrqAfm56AxiZkFbfxqZ52oKpc84ihJnEjR3NKS9Qu2AKk7YxFd3MLFPE",
  "key15": "324tE3To5AxXB1o4WVjDMuqzkTMZLQPDEJrTM6fc5qZSPw73zmuDvpTf55SGqnjJJJy4F4L4855GcaBVjvbjs4gJ",
  "key16": "4hs9C17mWZ6hK2kECint4mtFL5UWh9UQ1bk477jsMRgxZwPGosTyGwpiNeBvMjUA4YAnzeNqcVoerU3GKjfwBwAP",
  "key17": "3nqQ2kbDp73VcY5wh9Lhx5JtxijF8ixpmR4MabExBAEm1Ax6isbSYKJ4ybAK9RdivQUdFBzeiU56B22iS4VkCmts",
  "key18": "2PehQWhWMhJajuG9LZ2zsHUQfs3j2FDbitgok1iJkyztNJ8imdTkvN8tAv2HL81E5eL1Bj7ygTQQfaYYCLW3L6LY",
  "key19": "4FK8a7kc9KGvjG5Ym3raVpfh3qiEDSAFFr63mTDnm44Ga9wshDPsC8g9Jqsr6EVQkEQtUDWJXnKtyA3ujaeGSKhK",
  "key20": "EPvTdeFXNWgBS4C8wTtv39XQLusMT61VBt196JadLwYxiCm7TSuRmeK6F54up5J6ZeY7Y1y5A5FocZ5utGuFrep",
  "key21": "2EJArrnuHLeHacudfXbUJTrSUfTb1cYuerxSEediQ6Yx4xArkiH5KuhGwjxuN3yLfG6RcNj8ohn2bjksAXvxoaaW",
  "key22": "4ozbzc6TyQeW96zZTrQjb9LuKrop449SWfgcRZzzwmy2Bvtu4Q6VeGKHM23u4C3Vufwr4BFpGJPDBMteidbRV8Ld",
  "key23": "ipgojY8Nn6QDe8ipyvrRtA5FDK9srkK8NHAynZXRXPcVuVgxYmB9sNsV6km8ddoRf8xiSkcvpoEjCLFUZzXh6ei",
  "key24": "2b62rs6PYuxaNqMabDFeFQaSY4R61ku1YobMsFePz57HsnY4G9gDRSRdQBJE8oHwnN66xxdp3mt7pGAEUiChjGeZ"
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
