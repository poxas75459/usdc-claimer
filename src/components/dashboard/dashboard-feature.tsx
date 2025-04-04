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
    "4taWwvjGuvgPvsubaGTKoEKQGd2qb1txmD8K3fuZCzYfTKHAJVuJRqRatfsj5HZAAMpmSTNA3Wakzi6CkihFeLAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xoWuRNAGped5koDrzL9AJZDPhdNzZEMXRF77HV4pjwx8iavpzqVUUPZEvK3xrdWLfi5r3hV6YUi5iePRmyp4L43",
  "key1": "3pV3kkKfRkcbY7wMpF1n8YhJcLD4VQYM8AHFvV42qJj2imtvXjxTfLZQL7Nn7CohPF43j5Xjs7VHSKtjQdSdwKF7",
  "key2": "4MBgUw4aUMiSP4BZgDeXGcS9aQuC4uFC5ixL1gyvC6GWAwyk1XGAe93ugFNsdeSmGLrBv5AoTVtuuEGVBwbbV1jw",
  "key3": "3BX6thpdwUVE8XK2u3WriJobME8c1wfVeM8MyYkBMxQewMJvcPfMEeaPMgbf24HVmv4qD5RpUw6LoJGCWcBGp1iY",
  "key4": "3sCRh2A7goWtJER5sWHdhyQnxsYQpjszjufknHHSPuCaGddjEgVVttCX1ceAuX8ZNHun5BTFWPfNLqhqE6yWRiEg",
  "key5": "2eJRM5uy46JBtt5zjFmwWt7GNoZkG6xw4KnGWQ8Z5tvvmcox64G8az8zhTTB1w4uaohimSmXDumGZBmHpz9B32gG",
  "key6": "4UHCX8QPxzNomAXer8RM1owaiQQ3pWHeJDXpeTBLH6Q6Fpd1oNzEZEmLn5GxQzt4JYsGdUq3HMu71Rf28eX2DXmn",
  "key7": "29E7GrCS1JKThxgm324CgK93ynAkt8drTVDCPhyPA3o5HK6fmNSQfwaZPxLyrKwxGC3FouZHHBBRWYc2J9EfmR71",
  "key8": "4v1mZszGRqDDyo92D7dBh7aE6EC4hHxyEN164Vn4BWmmpi1FEZ54QkjWzfoSatvYz2p7i8scL78F8tHLTxuGFpB",
  "key9": "4z3ASzwXDDEmHjPVaQJSkdgjw895qJrk2BqMgM9erg8WRru2no3Xb3xKQEutroiyCau6NqVConP9mZhC9CVnWZ4L",
  "key10": "64URQ1ig946m1QoAg7iAst2pr12wJidx7izULVNW4Vc3823oXyKvVoRMAsnCLSrioG1KvmhMhkmj4M8NyW9VTDmr",
  "key11": "4SWNMDNLPGTg67VHPkxFF1tkhAuApnVH9VzGmTFqkyPkyjGByzHVuRLvWBkmviACjLEq8k5Tg9nJV2Ny84Nn5qW7",
  "key12": "3i19k6FsecB845vP5ppAwFoRZ3XqRoG1DVwXmGhy9PkCThhUyACtUEM6nPjYXnT7qWraJ9pWD53HD4iqq7indJJp",
  "key13": "3z24KZbt1qGEBu3zBJjSqFgfwgs4NeD4no1Tba5tiG4GGNRYgim8mhSaLM5bz58LjVPhvnCdiF4PjYUjL47BMbY1",
  "key14": "33dju1bEQWH3ifZqb2fvit2qTBopGbJKDNYvEYJHh6RvHFUgDSNw883bz1mcXpBP2wUZ2fSmnUVFkohJAsPMPHLJ",
  "key15": "5KbNzsU64eFbq6bPcsT826NRbLBfztn7kPuJ6rQtob3tLchuLkYUH7y4QNuscxy4pzMzAU5N8EY4kN45SfJc7RvE",
  "key16": "3aFMWPNi3QvA1YRYvsk4Htj62Sap7Yu7P5yNmrmh8txK5dTgNYfbzqJoeF1EwZjAECUiEdWRuVtpbbbpC8m13b8Z",
  "key17": "4fVoH3n4F2S3wagmyJ19du8jYubQqdKR1YUNWGTUJTo4pT5q8QF945D6gA9681425SN4np8U8wzkqJafJZi4WXcx",
  "key18": "YSWTVDR3zEgR9Mthj7oCc6xf47iS4X3HPRiY6LKo8D3KsM4c166YBSNJs9cMYGzLXtz9PvYt8MwYBSThadWsyNj",
  "key19": "3xToJCKhaJXp7rC7BbB4RsiFnBTWAmy6qe47APK3AuYki99h11jN7Z3C2rV5eJLjEi3xyPQ2AZeRnPiTFR2uVLP1",
  "key20": "2MEYShVoeDpfjd5y9tA9TYpM2mQSdhVQQqBXagYPRFVUwr1xEKRUUdocKVpCGNFkVM8ZVGk6QxJTVad2Y6LZtvwd",
  "key21": "5GkWf4ys8DuWLkg7a4AsP76kF2rUNQV1KHr5rDWZtunoUwsabgcJyUTn4HkPVw3JHsM3RdB9cyZQNjDGtDrsUpmk",
  "key22": "51xHDb7TVjKdxt5L6kpHUQDt1Tu4C3abWCjEntDCbDeJukkLqHYym2NnMW7r9xhGiRjCt4JHp9r2T6iJmkMhiXb1",
  "key23": "2u6jxjtMugTDgf7QTaYXfBYqiMfMcxjGsNhcJ4M5swMXvYWhVzitRy3qmrhpQL3gS8x6iMhgTChxmGv6WUUm7NKX",
  "key24": "S1PA191hSRSSnYUwN5H8k7euyM9HnraNRmShxdcL4pmzukyy4WogTChFAfe8eorW4NoYGXUT4JmvS7z3bfPK1bM",
  "key25": "2yQMiYAcB2QZ2ZQJAuuU9DXXJCGNu1H4PkR133mXbZVBM8ygSmUG9fnxZ7o6YNxWQBDUPegCjVLyytbvdJbBMXcd"
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
