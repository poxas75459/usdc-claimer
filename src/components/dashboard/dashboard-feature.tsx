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
    "46eVDWjAFcHz5WBNkPWnFnvNgBstNigrHuXhiqMUFik2YzUBPZKx1RYg5XJjpHehnamT2Q6cohX8t7xu6yTZtHiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5io7QFE9P1NTu9ToHs9kYxdiZzgfrMQWpFNJ26uX63DSx9APNVchcTQZ136tzn3WnHMCyqKE5zis7eUmRBYr3tKa",
  "key1": "5sYr7fZL8maoH9ivyHX9HK2Jj19Yeh68pfnqsqNZTrtuaM8hGNFSCfLeVJcqFYSyEQUDBwe32poMavJEpkkCTtSA",
  "key2": "56Zt3sBfhHDSbC3BSwDMFPaGWRNT3c1BtDKCMRCNiZxcZue9Af6tCBsH2b4Rv6Q5CqCoFuCz6P2afr7pq9wZs3Uh",
  "key3": "4ff8ho1jRcxsyEvuLGDzshQKWr8PLDZx4ixZjd9DhW8bYedo6xd3wmwVSELY9q7HQF6jjBiwKkqMHJZNXUz8zvhs",
  "key4": "2xhigijELxfrpMunHNDP6vBpmkmQVuQatgzo3hN327ivjMLGh24S3M9K8QT7uBHT3Nd3ycSBJYD5DuCgcYSTb363",
  "key5": "3Yd1CPrGL26mNcMLhJBQFENJt4cBWG6xT1p8brEhUokrvLTS3xEok2zNiRXuHYphCD8LDTeULhAmVrcnyMejy55o",
  "key6": "sZ3tYdoPLAGeDUFC1DkQ7Rmx8hBT9ZkbjVFqLstsG1tLbEaHQGGsyMyCzdsV2DzP7x4MPjJ2CLGBbHhdgFWRm59",
  "key7": "3GiVYrMafVp1Fpa4XT2ETVTXxqDe2oDuxzMrv5qQK4eJvyZcTjMt224pCad7TE4SYzBBgqNtUmc4kavrNAYnP3tN",
  "key8": "5JyEwcreb2oaMd8VKv2wyXcXj3RQNajVVkEsYTpkfdwyGe3JBbR1qmie18QpmwHuvaKKoDmjkMgo6ij8YszCLerP",
  "key9": "3Ff9xHELKY7Lgu2bx8Ym18ViBkV9anBBvkrAfWAUDkNVpnjjBC267oMxidzLZgMYao6xiwfFrkALHvhyu1MxVYTb",
  "key10": "4f1CAvwpJDyWTgg5x3L9t9uJMzHs6wKYBwPGWTWxqUgaF1GcMWK8imqdznF2PiYHdpq7NekW18bPgUqCe4EbVVtj",
  "key11": "5iqMiAat8MTbsiR6RpAPsZUWCunsCpd68GRwcxurWiWZ6dQZocUmC36HnDp1vd132J26zAnTg8ZkHXSE1yAkZLFY",
  "key12": "4myjk8488UJNZXSRPdz3riqzuYT4ibEhivicJDrgzpUtFRAyoqoMkgJncZbDgwc26mNEcUqGyxzEZGJJNbHYxWf1",
  "key13": "3MXZ6Ga3v3C5fVyVPLtdbM5zTBf5nqMngborEpsi6NW8yFy2Wqhitv8eVJVtFUf7gekSVfnvrxZMT61ZqhDoJCoQ",
  "key14": "4n6pxz4GA4DQfkRC73V5RGGz666ToDVdU4rS4pDUDGD5gWALejZDJ7LUvDVqiCRgD4PW27tXeAkZFFSrJmqEyRNf",
  "key15": "Wu6QofRxQB8dHrDVVvMQkkowECnk9nYEE6ynehm5Scs5Lad7GLJuLDg9mAB3GCjhWe9Xk5HmtGEzdX8keeAeL8a",
  "key16": "2yXaL3G2CtYP4mYi9Fs5eF9EqxyNhSoAdnndBrjrU6vMf7zkN3QjjdYE33PhRs85RxRkWEjeRoJtc2X29jp7HkwQ",
  "key17": "36AnLop3ZGfwwyv4F8BvHa5FjEEX1r9nvpfr3azBt3AL2QhwyTPoZPh6Gnd5MkSz4uithFhCA6LcMss8YT9emqY5",
  "key18": "38Gc2Zu4f1Q1i1Bbc1UvdvjfitJbJTNNkqkkAmrsRjtASECVSMgHVxtNGWE6eAr852mUDWbEsNtr5nt9uq2ei7CM",
  "key19": "2NXjE8WkskbXwSDCMcQVhhVZBn1iCoMVYrF9AzeYjsrTueoZLbp7oU1nz3EcxEYcN1AeLAotc5fVmMrUnKhmYJUH",
  "key20": "3JoavcZ8BvfFPZX78mShGPR9KJNncUbuGVB9AwAcCDcotvy4pjBQFEKGSVJD8sWr2aqmEAk9UicYS3mDb88QVK3Y",
  "key21": "4HnEdJSCor55mtKz25vSNhT7gYAdsq1CkxnisYYEo67WYqkiWTWvKFLNwGD49uBQYReZLH6H4V6shbCRuQRKQkpe",
  "key22": "jfVEsL7AfrCF5ySoGNZJLbGvedRAW7CBJrTj6P1GvaEyvFBrJCewFhUro3acjipybvHvrdq8Lh6jG7DRwAassiE",
  "key23": "3W6DcK43zRTo64UNo84zWp7eHJAEBaGyKXvivdguFtFT6vNgXAdnJn6irdyfhUwiAGRRcMoHeiWKpcaHdmMbgUh3",
  "key24": "JjEfa7RumKKsbGLVB2ZU75Wd13RB2QQy8uWKFmiBd7FCTpjzdaw88wpf9XsxLEQ2PS28mSvCHWJ9v9snv2ZsHyL",
  "key25": "43ibpw5U3XMhfDbCZJDG1rk57mixdzmrEwdDMNZFJJts15eaYHHMuFvR7xaKBFQ1J7n7H3TbWaEqKt3eBbcWN3fU",
  "key26": "5k4AmYj9JuezerJ8PAxJtVzdKGCUSdbPGwAJtFt8cnWunvhwPZVVmr2qM5iyHKv8MGvhNuGncEUzT6cKTbtGbu3Q",
  "key27": "5FyqoktMopnmaMN12uwf1xGQssdsw7XLXsa7Cn1rZvvkz57RMEano7sEz9wryhokuozoyFmZo4wid8ze5JvyjkDL",
  "key28": "3aBRqL8GhEAy1vgxEirA6QKv6b5V2RWLtPGx1f8LALcE1KRjSHAYEtDVhJTBcQteES6mkk1q4TnHH4t8KjLTsfYJ"
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
