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
    "5sb6AttTsuuS4MYhFhxtJarYwUctGveHBnHpEUysmSnhMgAAjkqrrMvLFveKJRwNQUh5XZdhyMRoK4pQZz5XN8Gr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s9FgywEoffkN2CtELasdcdeg6HArH6i8ayuVaJBzhcxLr3mwCxeXDFWcADU4ydoueZv1mUWWpfoJ4VjohNy1Wrk",
  "key1": "kWvJBLmPaR7zgibQQN8wJ6DLVKzxa4huqGE7zRAkWaAGUpoSfHKZ2FAuapEQDsV499MDUu68aF65E8K9pFEbsgM",
  "key2": "2MaxVJuSx6wzDVyf5i2vfEeBdrASr9djYTccufMXZM7PmEEteF8sRRf7LDC9QZd73GUV5cAyYRAraPijftUsjJMD",
  "key3": "UHyNUBSuXpdbnCrceJNiVPhfuAYmJ5GPQ1ftMAt2wtzPggoLhxL4o85EHD2ePkPf4yN15sfFrLkjmRaWia8MNZb",
  "key4": "5zAnhbw3qEGSwyw3WQERUW62NaZjHKoSi7adwYBovjfLWu12zajQfu3EtbSuduY4gEcxVtxGDvbJgwVWKURvKzCA",
  "key5": "2SgKSNNdFWHEYhAZ5gnXPXhLhLrTxVu8RJvqBwQnFLkyoHcdmjKqmW4syqZyY8WByKBDmdeuVwg5eW1KyHML4voM",
  "key6": "66ggGR4mgit6VNXokzVk44KMDz4dPRivT9HCVE2ehvDJk258z2Rqsxykx33UEMYTuyVVaDGFzhmRM8gzCmNC4UU6",
  "key7": "3CiqzuW1zzWE8KJB64KFPbHvAZcWiBaZ3LQCRkcU7SidL78kaw8PK6GWLQjSfrd3q8FeHKDXt4QWnjv1VjteP5PX",
  "key8": "YUEbrKWBUsciXZQWfrxJvqxg8Mf9QoSWYt4rEknCbx1iKfQTmoAZVce7EAYenxj6oEefq9EEWKP1S2zhDWUNnbd",
  "key9": "eEzdDt5NnyYr3hH4TXEWLhCyNV1o51oa6UR4QwZ3zKr3jvcLjVeBYMHdTHaWTnsQCqE8nQMAce3P36gprMyFBnD",
  "key10": "4N1E9t14X4GrKhqavgG9yqhnThfjGPvVTCbrLWQbydRuGdWLNeAd5JkNVbB5DWeRvUvyKadUyKsdFh9zdP6cfLYQ",
  "key11": "2mNNdXbL9wcCXsSedEEniJuFvcV8jX1UqcyZHVBjc5ViTDLyDzt3Vfh9QDjVZbkxKrnNuNPYht9EJsYMgWnzxLzz",
  "key12": "4D86H92sxtrNimiEkT6Hrdpa5RQbjHxCGAuQv9xnYCSBSHnRVcVqs1jXh1EJkHV8PEi9noAnVMDwR8iUCKSZLh2C",
  "key13": "47vWKrq56sB7MkQNfmcVzi4THX33HAbuoNrxCfWSa9aHUwGhJzk8TKhonfkXD66KrnGf2X3197izXkAnZQCKFbPF",
  "key14": "2WxMVaCXugLqjsFrrXLkjhC7aX1YU92HfF5kRLZMkz3RwFBtypu75z5kEddwhtAK8tcc3gn2ivHwgNbq3YUtvRtf",
  "key15": "2z7xMnstVr85PAGymLtgGKmo3jSU8yFLW4r9FAVJgyqhG5J17orYnmPjs5vkvkBL1q68UbgyonPUDd2cuLWQv5uL",
  "key16": "48ZVy9cXEMkcbBrn46vPCYYCLeQk2oh8vP18G74sgdrXiTs5uAKPx7Dwpn7sEfPNVxvzQc5u96JAYDXa6xA4q7Cm",
  "key17": "2K5Q3YpzkRgDCJYvT6JsTK5XR8bdwLKpq5tJkWgYGBrn8J1QuUKkpMukBepgS68Qmjv6aZV9qE9w5nQc2nwBBxmJ",
  "key18": "4uGgq2rZwRv7BSptEWwPPkLrEBu9G7PfRVFs5GZLA2gRcuYK6UYXwUZyucfRadGcFxB2Kb13TCWyyRLYGcK1keiD",
  "key19": "5kG492vwFxMCpFFt1KnwTVdDzfKQRmk3B7LRz5MtAmyDSG7bF9caeqZGnyeae2opt7MHrQN7VMwLgsLhRB6nJxzR",
  "key20": "4Z873GnkdHJ3tmUgibBwSKV3QV4TGXL7CzBGMTpLNf44x9tpZB31dzL9UTq736sqh4TTaQBrtXdfXka2iFXyB1fs",
  "key21": "2MBm5StubzVDBUrfysZMjGNex865rbZAz6U3mxEniaxBXt1mzMMuUgUVLc7w2wM2Pak4HAn3mwocMj8EHfmQgwDv",
  "key22": "5VpqUW191KeK4veyG71hGyqdts4ongJAzehDxMaSRndoPKqBTgdZSBeYaWZARHAZJmdoMfquGjaVoGWBKCUKXPxF",
  "key23": "44B9wH7yZqcc71SLuyS2Hz4AjV7oDViXkzraLbxSrBpVrJZ641Y1dij42Rrr8XJyGkDK2WmBc9oPS5zW6L6vruVU",
  "key24": "3hY7dDGxD2J3ERHjiB5mZBvwKtL9k2JWkGBMtCE56rb68kNpVy8zUrJT21oCFo7Fc4hnwMPGfts6mKHuTYBJByHw",
  "key25": "2uEcHtXEFsGZKvCsa1o8yKs9PGHLSJtMTr2StByA92xR4cVg3H8Jnyy1gUMXMxASFWx8rrjTb3bPJZhB6617weNS",
  "key26": "3TnsApFKaiumju9YkE6YFFDrA65eUm9z8cEuDfon45Es73as9VKb1zFS72FUCeiiXiHXutJApsWfwYsEC8LxEd69",
  "key27": "NjpygNxBPDhbe8k8LUB5g2kL29xf4DG6CjoKmqF9EzzByHzWRJs8sBRJSuNX4cZbKhLpFnaj96FUAHbYbAMUZzj"
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
