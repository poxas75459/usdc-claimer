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
    "3HaAcKGqcmrTRGGbEKsABGRzJC58JZUkKwSg2c5ywzPRDFehzSHTdVfRZgDM956GEBpoMjsw3sn74sLxhumwh1hL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ogj8bK8SkNGUy3G9CwEgSaDyXeyD6QsrpbhsB4WwP6g1udRjqX1fdoVQpdNzCKLVUksH2yJT8hthZDcn6krvLr7",
  "key1": "4LVMmB3eXEKSLZkF3NZpEajGuEooDMMXuJaURFAvJTNfZKPmyHCHQFaV87w3UqH12dadfD3ENx69KiatVEW7bpAW",
  "key2": "fTuaatFaJTG5BoP5hXQSMa5YxSYQZ6ygkDatidNzVq5BZ4UxsLXfcT23QiDui8J1EJmqsbrr5fYkePaEhRB8krY",
  "key3": "duZKtA8GThPnXX4gDGTqNvoCTy8az2T7Vnaert6MZ75PwzFD85DJGjEWhS5dDxppFmeKKGZdgQFxqFPMGsxQkwF",
  "key4": "45q45uLsyCm5XfxvVKGiUh1yL1aA5EVBq13fFg6KvZmd6WfXS2wFxwh7Rd2VhFCoXsfv9UEuwtW6ySqGwhGtfXLG",
  "key5": "267fJULwHHscT7W4EAbThdopYFEzUgV37HQVXNrN7U7AumntTJRMv7z8eVkWpUwoyNpjHaWYZ3w4y1UBe7FhT1k3",
  "key6": "oRFxVtvrix1M9yrgDxdknp9dbxzbuhS6DFGVfJtzzufthkF95cpM5u5PS5ULdkZqM73bnh6hXi61XGb9SGT2K3g",
  "key7": "3X4tXnrMxQSmx5Ri7qvNq8ssnAzxTVLDWTzBcsS6rADG3Zhq3BqrD5H3jV9MkXj5fRPtxHzMCyxVWsCHE2AiWrQb",
  "key8": "38E7ZdjPpdj91TDFDYZsTvSryosvECf6Sok4q8JsFmXuZZFyYGCVmHsdB12Vd16AMew1HYDGS5SmCwJ4PLmoFKAY",
  "key9": "2YfFeoa4ESbdTtLtbb6CV9XQSjJJYkps35uqDSKwVyaDzkDsRd3aLtsG6xe2DnoG7r7aSjWuFyXK3aNoqsMGdy3L",
  "key10": "5R9yAVmg3jmPVbZRs5KCWhbj84gYhQXMmyS787cBi7DoaGQ9hBvcRPtzvvW6pWuxvfgWffj8tJYH7TW9F3aqZoBH",
  "key11": "am1vfikPHMHYAkLGMUfKhaxzJWk4Xg5LLKEocKm6XmJdoBSALAddNd5jFx2Y5oeRWGjzwzzRnMBYAC31H8J4x8L",
  "key12": "2FF2ssWRnsC7TTZPeC7p4TWYtmdwMkK5Ri2Fub3SCSAQhZ1nUzctR5bTYiPnS8F49uafodgV9A2w8T5VPb2epYb3",
  "key13": "FFTLYzrWCoF5ACDGUEtpsn2iKrP9MbPwaKqUnQApQFF3cbzoQAcGsPFFXVyCNrRTGaMy2XAoZ6gZfjGyycyFVk7",
  "key14": "2pyajQk4XnSFw5WP2tHaU6GiDBFmztYAJvGUk4UnfwovpMT82ZhPi3hQ91zY1GHm4f4iDVcBxgp5mr7H4sute1Er",
  "key15": "5zRakFuvGeMEov8T7NrKvnxvwMkk1vUXUvAtSQsd3kdg8h2bXNQo84nKQtfFXfctRtXGd388wJCVtGw3Eieg3rfx",
  "key16": "EWAGzrNMBXvN2WycUmiYrNqsbfP47A3LKb9kz4GDyg9KWZoUxpKdMBzwAAgoZgg8qirqGEoPic3Ucx3GSYiSVE9",
  "key17": "unLtMSp2myLFfQ3vfNFwJmHJiCArtF2LoFSkT7GLWhG23jwNCgoCwQVcxaoLXkvw8hBF5e6YRvfubBVaoQMiGgc",
  "key18": "3uTgxLR6o7BiD2api11o7UjJ46SnQRdCRUf6osq98e3ZTZLvXqihS2hPzVmiwcpwxqAieLrpw6Hy5xWA8vCM56cY",
  "key19": "4HX1T2S7vAseELQCzBhGGSJmWwnCdxfxyx6Y52jYHrSB5YWLGSs5rER2FiNmy3Rrh4oDipZD4GhE4BZiLFe6fRms",
  "key20": "2c2Ywxg1qkuToG8rwjAHyDgvRw8RpeENFMYMGum924FqZFfiSLh1vuPKQoWMvZDCWNVNMon3rudEiYkRiTNpn6h6",
  "key21": "3or4Vu18ZxfH9WPEcPVuw7sUD2jTjVJQf64w2hZpCj2qdE53b5CSxyfZYBkxJkXA8TTFrDmaMCwsxJAQMBo9p7am",
  "key22": "5vuYZHWyrZcY6P3bw3vvqPbDFiEudxppjoh2ztsFtcnduWHy1JNkZtjj3LkkjC2axGgbCLQApRQzXpzvZFzWLaGq",
  "key23": "2t7tNKAUKqxpu6FCf7g1P8NpgueeN6PiPXyxEywci6Ny3T1KdY3V6jEzqCuUxKQRP6xkfVqqxoAAcSf2D4UFtdQq",
  "key24": "2oA9fVJ5GCmapRoki2qs8eN8XfvzHYXCYAko61u9XiaUrhH9cLAtoSZKQEwt3VhB7umWRwPzgqzeKJmWArBnkVpM",
  "key25": "5FbFY4pfzoHHxQzJ3NYSWbtE4Et6SuXn2RpwHzYh4FpYFS4VcX9QGr3RvHS3HUEnUxeHoSq2RjCG8DuyTKQegWM4",
  "key26": "vVz29imymosUJ95DuZE44NGqhcdTThi3Fso8NqnuACxmhVxy527JrK6cygX5dL3TruUBrFFCkaRc4uAG5j3DLAM",
  "key27": "4XcGj3x8FBrB5HMjjBndwBwn5277MijbGrKy9DLPXam696ALwD45kiig4aE6e2FLNR4mMTG1QYCJ6uDELnv6WT8q",
  "key28": "4Z96pFq7FaRpnz94eJRchSULKzmKTzyyCd4WPS4HESDxhbhpAdu6dAp7NpyFq5NN2Rc92poLvoEdgt9BW6qWKcse",
  "key29": "4Zc5cpykGJehvAs85zBzDN48EiurgJhRtD8ZcWeaP7hZ2LVYsgQEEw6k76hNCqFyGLf49R9hpG9ybdmpramHJr5Y",
  "key30": "2X8oe42KugbYwf1k6HytgDajh3mhkppKwnbJqvbw91UWTSwC18d9LAcYjtCxQNDgNXhJfyGZPWWHAL6Awa3Hpjyi",
  "key31": "436AmHGqxy4pznYH2Ne4m6N6FtJY6zKWensnFPT98rSkyKCV2vMRTxhLpKB2TiYU4MU6XEcHPawejuWbN7HFP9gB",
  "key32": "UdntTG5dY7NhD1M5HD6PPT2rHPZpSMCPPiSdNgaVtFKqHn998vGRb1ho33Eapc9JLLSzHQJu2JNg3ej7EuFTda9",
  "key33": "5W3G9zTuSXpPaP2QyejZpd8Uun7NNDF5PkuRqQUCvjHxk2z2xvNUpcYrQ3ckSBFhZWecaPoQvKJMuQPg8VPa3HW7"
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
