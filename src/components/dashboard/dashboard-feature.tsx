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
    "3erjPaoW6bUyq5wt3EWzUngUtNN11vHALG87B1tDHnqKwwVgYJvGTPPHULWu6HeQKLoX8ZdeBJKRSg24YU7VWetH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53QyASDchKJ3RKLj4ucwFxDdwGuSLZYNYQ8wNtmqsG8CqEo2peDCku2nbmGLcC6pm3VoVJrr3Z281okGYGwHuCHr",
  "key1": "3Nu3ubMECf7QjkHSxddhpNH2xpj9C8aF6NvX2BG4mnj28wBRT7vptSA1qPTXLRu24onMjDjXKy1YuUUZt1vUcfL2",
  "key2": "2F4jBd58QARnL8DUXQeGnXchivaQisbv2jYmZvoCV6RNXJG1LenWzD4ZWZQeSmATht4yryAWtcywbfkd8uN8Gizo",
  "key3": "4ACda94J4nHAM3PVbP7ht89KHqtWFEwY2LMsccJCrauy6MMym8Q6KXjRKojBAZY49GAE6Q5eXyL3vjK9AGQ2aEp2",
  "key4": "5uMBKshdZvGwyuoDdwDNTyqAaxYoLpKHBSvbqsPDvTzqFDn2quRnPeLe4bzKpyDDpd82hgeFpnHpBLsmM9bu8M4A",
  "key5": "4sYEoAQxP51Vj66ph85sHjrwaoPgHeMF96Xm6DPomtXMSgje56AdncTaS6SJuDoBFScSCwZ9pL2HAxi1NrUGqmf1",
  "key6": "3sGH5r6u4fyWYz9oJSZxMSBfTm4ek7pZh8wEJg5WrmJRQtKC6m6EKGhFDHHAErbPPU1c83JRroHmJqqqdPrEJAuR",
  "key7": "4gY1w88jxhZVbWR4CrAE3SH8C1f3v36tHp2fdRQSRixX3HkCv4pn5HK7B3gx87i52sDGGLJdJEhUSG6anmr4DPFJ",
  "key8": "5YFkMckYUhGbvhVfqbuFMFbw3jgxyWnmicB5qLeHcykhjqvGipt6VD5S4Jibnihjgqu7zJ7LwFEBRU6EYPHsn6Nx",
  "key9": "3MSBtAEDStMBF74ZJyDNNW93MHsS7yvvQeRiq9eoiuoaACPoMGy132duK5Zj8pHAHcscvbDXatPXjuz3RKfFkYQT",
  "key10": "2hwFPwRQbJERnRro7pkiKuFsEQPNfj5yHnTyjtXVmuTp2nbXGv6apJqY8DYEo5PdxpsJuBW7zQRRcKHpEc5q8oCg",
  "key11": "5k1LMJ3FTNNq9p4EosbwF1UgmNpxHVqfTLL1iszxNMAfMm1NHZrCE5xyueuJDspFZhFwZxcMY7J1nPeXb4p3mpqK",
  "key12": "2nHa4BFFhT9xDbCVNEKHFMio8vYtWZrNf77qVMKfnpPgNzpjw7HBYtndokZ8nnPm5Mf2VBdCndVy9vz3LwxSzgcR",
  "key13": "2gDwHtSHXWZtodjpcAqXYs19C5pyZyD7ktD1G7vy8nejzGnYTaDsC6EfFnRchvkyyPU5dgmrMB9br3ptYQbaBMJz",
  "key14": "4PH5qwWwC8G1qwRQHsGuYv5V7ChY8uod4QmDnL3KR8Dd596EenN9Vq1XPBHcDPsScd7FBRqw7FUF2W98fr6g8JcW",
  "key15": "57yaWRyf95stm2ewAb1bKxyZyNCR8SKbpqrRQghMH9XSDSAw144twH4rAje71Z4NCrJya4vBEYoaahJBEjhQZKuz",
  "key16": "55Yhaz7kNfns21KFoozf9R6C9CVdrESmrmrDB9GdFDFVGyXWjtvRQyRxiSWoJUqrdAeMHnU9auEGTbiyiNKd2ger",
  "key17": "5Xg8V5N5a4HGoMCAoGYV9XXe4gUDPVRgM3kxfbK42ztGsGw3RPW6NVbWnPHQjF92xx4P7WCgG3Q8trFMngZjVzeZ",
  "key18": "5Zfv9hVkmWwDRU8WpFKM8jDeVk9rNPjkdhbus4o49oqUzexVaTkoCNv8EdwiKCB8awdGCe7Aqv4wLFP4NX2qXGiz",
  "key19": "4xyF9rCZYDixkZRfko6E25Z4ndkUanfPSb2uqadGASifLCFYtuFwb6a2881Z4xq48LZwg24LE2bU6LDRpVUVaquf",
  "key20": "4yRpXVwMoqVB1jntavWVSo8funVFC2vUfEZ7FYP1quuZeW9gwymmdN46kSFGJL6tBqZGEa1BuxUyPHaNUHz3X25V",
  "key21": "4t8bEFPuSbUcZmr2zN7nHLwSf5M6xB7B7HGDxmxM1hh7qAtCiDDeK8oK5RjBwosJ9sehazuDyMasYZjZoiU6ALdP",
  "key22": "3PL2tTpfj7GtSbyoerZWH6tyUpdAffNQwZtoeuGaH6pntM4TpHHEbpAosek39CDhqTeHWjKmpVMWkz1U2zENS3pY",
  "key23": "5YurcBNwZ6FD4ntM7za3qauXtX8QcpFBWxnDrABZwXhGkh729Vobts7s6FjCEWr7WfYGJVGWaJLoLLhh2Jdt5Gek",
  "key24": "2EBRScExyoxzchkLBhRubtk4ox9x2Wn8u3hbXZpfNz3jcR5N6zA87gE6C2eUUYLJk2f3mK3UVTKxqHQ1Mr9EytX4",
  "key25": "3SuEfXwgbxzGNsvjxoWngVQSKJWjA9u5JFHn1UqBn139oTVXwWpDmXPsXLj5iGxF2Z5cs2FcCWqjXb2QVXgxeC6m",
  "key26": "3JoX2gvyyYkCyCcRAaFDfGLgm3tZSAudcGXahiwEjF7Y3Kh1qq1nqStazmDWitSNVro857Fny8iZHDwmHSiZtEUS",
  "key27": "3vy6XNrWwRnu6i8w3VVzJryvwDwyxBFvr1Fsswzmi9raVfP2m1oepjutSn82njLHp8eSvLu5hSaAfUxMFwBK9X3Y",
  "key28": "5fhp968XDbJH4wkvFBMTMcVqNrV9vuf6CZkBZkrnvnm1TGAJbUFWsVSbCZzi7Wkxv5tof5MGoMiHuE8MApuCt41y",
  "key29": "24p5DJg6C8jkg5zaE56VGWW2L5kQRUsdfo68jDt3RxRkfZZGNPQh6KG6dyZUzP2Z6FK2rzie95M7P4DDjsQ7Ywi6",
  "key30": "tFepNsweTbeucMnNzrdfHcx98BqVzWf3eTJ2QqRu1iBqj5wuCVCWpDA7c5t7AcUVr6ajexJQwQHGu2DMejCriAw"
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
