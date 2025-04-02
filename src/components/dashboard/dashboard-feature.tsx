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
    "2PxN5coowQBvkWsmdqzEVnzNwQnatmyXrnS76AHsymDiEDA8bApT2JvvLujKxkQvNboKPmqmv4pdF7BHe18dLE2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yr31z5UZLC4EpMQs7a2ndpey8ooq1qKddzC7rpxtQVWDyL9Cd3scVLwbhPXXjWBTzWw9toqWaYJAY1t4R67yTg",
  "key1": "ZkH3binyCJPfyfpos6TYX3vmDikGorTJgkp13dwDR38GWWtj8ume484jyjf9H99BQbAG4GDXQDPt6iJ4ABQEius",
  "key2": "3hn3UQwZQSdF5cag2jpAjk33NdcJ9LNjwcGnDwoTiHLWpC3K8M38KsD4SN4rwBpVFvvoq9reA7QaNLTWDianMZrB",
  "key3": "3Ex28XuhA8rJoknTU9jjAs1hvjK3d3p8USy7i3enE9BAkiG6fH5tCXpVhEyNRAXhr4T8ysNCHAAoa9Es7ZNcNHmf",
  "key4": "4D8kXcvX3RfV1uPHXsf9x14WMvsaED3YnUDiQbc6iTfi7DG7YTr2mNSXxa9SFRh5TuBC7XzXHwtVEQojWMZyPyvw",
  "key5": "51hFknqunnk6iJcNtEuNY1GVxCiAqbaEnBoukNEGu7zg2qawZyAotccbKTqYxruge877F9SCW57TfhpCHvTYHDUc",
  "key6": "LnbaiBdiZnjTvcVoSLMsjpttP8QfBQ2ayUK53Ufnc66RNd5XbjyunFRSnMyN4T5mKSSV6qfzu4UGbL9TMvLLWns",
  "key7": "4ToFVioe3sPM2YFopXZtWedHrjVtSVUhebA8FpYsid9EPb7oXQkkwCM8MGictVyFwVtkZTi6LUiYyX1FNo8b7DaY",
  "key8": "477vKqHqi95RGyk5r3hFS3vt9GnoBP9wZRKSNzfkMT5Ays88nAc3b7EowFNxV1AMkqoiL8ukLrCga4dmAspb9dxk",
  "key9": "3EdJin3swaPboqfsr4ML3mmcsEfH71bGHCsPwgRctzW65dpfrxVCyMJ2p9biBGPtNjBHxYkXmZhBcDK9s8Yb4a88",
  "key10": "Edz5DAThN1FUiBEjbbbrjENJgepG12DS4BjQxEG6rvxQevduyAByskmRCccPyMwLnSc6LWC2Uj9n61aVFxskxHP",
  "key11": "trJqb4sX7eMYdwnZeomWpPfouiFSgqGZypZx6byw3pPdhgwQyNzzAVjojuEbGCjXe78GsTwXgdqLbXfYWXFT8ZQ",
  "key12": "Coe9Xm8eUPrF7HQGuu67i9BNq3Lgc7rbDbhMrdt2g1DRh8MbDvoWdKRRmEFr7XKPgmjj2ECtHoqT2f9aTr9tcjJ",
  "key13": "2sRDjVshG26D8uHxfVSYqqEnMjn8iAFzrJDiT24KkSRFxd54PddQ8utiEPmAf4FbECZ8AcXDJNGN9ki5gRwYMCrW",
  "key14": "5j4VGrShkD2MpmpGT26ewDADvfE26kC7bzMxUZqTunXLgTC2yDFCoqoiWnVB8NVWKtB9FEmbnFhjJambtYYbroQZ",
  "key15": "2Y9cQmcpzMeK5sUMirM82tjDjEWTk5Hmi5vkSo5X4hnNUqKg37N9ooSnvipRaYpwzgVt7SgySRbuU1pc5kEwsxRC",
  "key16": "4xEwqkpjXWe4ZviRFQg3hWj9oai3uT1NmkUJK6dzzxhHy8BdNme6w9KHxYuQnDEH3a6p95EZPyhLEPUhSG1UKuyi",
  "key17": "2HF8cJ3DdCqVidALRNzE9BhGgxUao6dLcRHF8v1YgLKiPAk4nCPBgZ58R8k5ZBGdDHcXaSTnw5RRymzf8xJx7VYM",
  "key18": "4WvUUZ8aj3RDvyKgWq8q7hWap4tZvmcZEz9ChUMXnFMwwRQAcwaMVMNpe45yj7R35mekHAKRP3AYdCu12nEGq32B",
  "key19": "2jBAXVyXBWPveppPsPmFjEC45Ktaebyo8swL6urhj5fbcECfDc8wQREkF9axwa53iHtBN1YN7iEWBLNGUn3PFw5H",
  "key20": "5yQcgWwZ4doECkT7CXpwK8mHqQhRyCQajY8u7yTW1M2zAYsLR7HLU1ciyaqmUsKym31xqLokvLJtiBUfB4TLU9s4",
  "key21": "55tBMueqz3nTycXVFAHATGxYQvXDDE67RRNP4xhf42pEuPoLBpZga8QUdd8esq5df9NoGMSVsDKMfK45aJFbWPNX",
  "key22": "5U7sAv5EsuxPgnmN1pdXmGjCeo1pW2cWfrsXsfp9231Pe2gzTd5t8R4c9b45kVdgBCWd1YMAeps75W3TFu2sr9CQ",
  "key23": "3LKMDZm7wG5Q1FbFHjw1K2n3w1HC6wkxVJLBAefnSx1f3yfkDrpgtxPXbN3Tu2f9AVWUHL4MB11ryu2JWHwU6856",
  "key24": "qGi6K4wJkX9fCcVgLViFC4TLhVsgbcsFJqywuZWoqppLMNGkKsSn8XgpBm9TPJhYrzZa7yk1eEZWmJwMimKmbsg",
  "key25": "3vRAbYM8PdhHUCL9oGw1VEeUR3D5GiWoP5tJPbdfioFvxmtVKZEbxxB3dUX9bQvFDR7FaNfVBTkTgVwC6VHh4kUW",
  "key26": "3eVoPSQFFvzdJAEuPXxNCJ86nteRUmtSrEAuDPrmrc8FHn1gHNxqXUGfmpcmpCyBPubtjTMcBvZqofYfoPgPBefJ",
  "key27": "4ddyLMkSGQRLeZtLMhnKuCtgHnzFQFxvJ8Mq9Q54wQMAmQ3BSFKpwhgpEf9SuMYQH2SRJsz7RRG2LZLffSsNBEEL"
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
