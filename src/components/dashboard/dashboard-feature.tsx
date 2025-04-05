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
    "4Lf3RdtrJaA2G82ciiW9ZKjRQgxEHaV19dMevpsPnGyZevAwXnb46PSVDxXKy8RJpKRNnG6pZTKxg2h2BWXamXC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P58TZnEgnNQGqJgovZwsLSZ2zs6FC8HW6GSodRhRJUbctZTcSGe4YiLkJAjd6noqmJQetGy7Lyj45Py6hMwZPmE",
  "key1": "EVQTzVFgVzQkYmYTYQd2zC11uYQPhht1edkEKwtVCvPFehmDGAxT72mHjq699QLoehLwC7DwB615PamSGwvZ2M5",
  "key2": "4Uc16gzc531PbkoadR4qEFu1PgkyF1Ci5RwqQAuTvqqoSkEbLzRzvA8rGyiEV3ve4AbdfHBdrccivLLDJYgZ38fg",
  "key3": "p7Yp1N64WbLVGkCC81aJ2zUjtZtC9c2utXvBmey5tiMhDebLnt6W3qduMF1R9PuJXWYxz4g1uG5KhRwemRXuTqk",
  "key4": "5iiYZ9mV6PiecExVz9ZQDsZywxgmLRvBc25dhyx1X6udqqdEUC5xdgdu7qbbhW8cBwEWffwE4gmusTeYtRsCddrz",
  "key5": "5WY6Q3mdXgmGvG6rjiQ5hM9sVsfSia84sUPa5it5fzaLVCfPG2c4GWEz3G7sD3ttgfFudCDQApUtr73F5YvqLkyS",
  "key6": "2ur3Nc1NtMNg5ZNeyGcTpPTKpcYRuVAY2WCqFrHZkoEeZhvQQokygbQtQzjzYwpTuDsuh8f2xipqMWEubYeBqG8X",
  "key7": "4Tq7Q9VHjHLYdk1M4CwVdEHcuaMNCztdUPC4CeNATQDNzi5FBeBQ7DfEccbbqFhgEUbTrroR7gnRzxP78RmNjKdz",
  "key8": "5paA1KSP8cFjKSBqjqNFLbZBPA5vHwp8qcnBHxrrKvR1DWEjGkE19GJ5uu2NBiKwrkqzqAqfZcwuVmkfExuE9BYC",
  "key9": "4VewUQHzzE1vNjhtod9J8WW34mPHze3cBTHpkFjYxgNtf8dM9Yia93wcPuQYrBHrYbZRzQZaAWHsk2ZrJE3YY4t2",
  "key10": "2SRKnq5Kq4syDsz4rGK2HDyWn1H2Hv177322QWKF2F1skwE7yuRohZuECXB8uzbVdrJ1Z5zar4Lwv6Kb66bpBynQ",
  "key11": "ghw7CcNE8TPC4V2CX2FwBxS9vw7MM3m1biEeezA3UeeJKUoxTEryg9KmComcp2Z4Sp58qn2H9L7kYD8tH6gjnoH",
  "key12": "4hHCLchweNg8P3Jq8MGRBhSQF1c9QL9QmvuaKtErcNQTpJjTphBKwXJiHArmdaTuSYLPU1ysQgNwm6MQz8PX8vQ6",
  "key13": "3kR4PFqbRRAQEgTtcEkqn19c4p73eonST44bBsFGCAcTgsxBVaEopRXkXeLUwVYYu6HVrtS4cm45sKxvnVomXowQ",
  "key14": "5ysiz6hg8gwjyXi2ZpZ3uYRiTk5YudrJ3kj2asW9aMiLJT9mKSkeJvuGrhvbdcyBMadka3WtSZqDPhzjaDQsphF5",
  "key15": "5ndgBsJH1UwZj34f1tNnxwrJn9y5nezCRR3DENVgchxfn3uzSMu2x7bjx9YPKpHK6kVcj4GYDeDudjhVi3HGu5Hy",
  "key16": "3eN6gCaJL2AARVb7E8NG3LD74ehGboSz4koAqnpyLVjgBrqUMgm9Q8jph7xifpvtcpBURZfNeZgz7mERfshXV9bz",
  "key17": "45F9qfPuRaj6MpSDenykycfnvLJnkTPfjhZRqodVqGKn4vLm1fCt84y5QLrZef1GcAei5BYPuP2uT6fF8KQoHewa",
  "key18": "4Y4evR82xKtqSVmwsQu8ykJBnoK8VaMJNrBPDnA8Py2tRyskz4wuFxbEUmmSKnyHB4JtWdbumYoCWCKX3hFe1Xfp",
  "key19": "67esymTChFBhJCVX4T92mMWQLpP7PW2EKmC88xcF77hUP1JsioUML141bvwDDqkeo6kwQDzN4v5mDq1iK58cvebx",
  "key20": "5uDNj4RXcgaJnrFgQh9U2nx6vJN9WZbLwkvMBSWtD6jQFwFkGim5Kj9NuiKmuv77caC4tz7itSL5e388yTny6DPd",
  "key21": "24t3K7iG9TLrPSJBzRX9kWUsUAX57ksBE7kfs6gFfXncgZdykvXvoLyUjAkMFQ7YoR6tSEg8KREVzpUZnuRGDSNC",
  "key22": "3By4wt5ZwaFx53Yre26KHAUfNoeExTP5qN3pF6ibBRKjbViF4SPaAFUuMNnfmDif1kj4DzV76encwGqXnsAnWnGP",
  "key23": "2cMP7rLTECE2aL3HnMt7CtruRgDnXPkcJ15Gwo5aoiejeuoXkK7d14jhFnwF63aqdcGgMsi2MhDdRCwTnGBoK3YH",
  "key24": "5xn5pyJNHQegXhtoQ7ENgZR7vnmJrbNQmSSeD2S64mLAnfP9JdpzRuwSKjQsovVJBeUuzbdg3iRq9muHjxfNvn3b",
  "key25": "UxbciwAZ37PEEdV4UYEo4QQ5cg6L7CGGBvpfwpHq7ktsCkPSsjYeVqLz8Kjp3HQ6AtPKbewnpXiHdLkGH65WucM",
  "key26": "3krUXPfQteTBTD3NVhRBfRw3qG7fQDp5rGtQApdps1hwnXup5pZ8HQcGKSHyBYQexXKTSThfjNT2AUGdUNp4eDnP",
  "key27": "3RZdLLLp41MHvnAefDFPvV6dMbSXa2ahUBDWYgiuYPt7fXCuiHb7FcFsMuehotTWFjEL5QSV6Ccsz1Lbcbo7oqhG",
  "key28": "5dEvfLSsLNuKtN83Zbx5ymFuto2wUesNnTULpmwhVAJbRwSn9SCJ9owPbxUk9jEw5mNGQEGPV1jP8B4aA1BFvCVA",
  "key29": "4hXK8RFWGcdYZj1jNXT28itvwkqddxeDSLUxKFa5MoaCXa8uQ5w1kwDk2pxU3LYcFqrHTnt4P3awqQwe3cgc1TnN"
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
