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
    "2kpAKByS1isEKTzbt5wyaZrdsgSDUdFMq5Fo66wREqSZVAZv73AqckTvfrgaYfmCvjCb6vYZ82Vpuyykx3XgNrxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uUpWMNgGexVtTHdrmTbSDDwZ6Bn5d1KMwq67B8wXqmH9STuKWkAnx4sCe9roErM2piQP6FhRgugW9nspCzAGJkg",
  "key1": "5MQe2xxNfj4iVjLAk72dzL1m7WaDTgQdu2JkokY4GobEoZYS618StMJ7DgSZ7GYw399YAU9rsGqPnFkMgfnhzigm",
  "key2": "xTqtXkFK3JPuEWbEm7jpVkvDngdGN4YswRXeL8LNurcCkmL9iCV7nBa1KWeWYQyPyZfs36CsmCA1ctrTWQpNPeM",
  "key3": "5WdMkqyuzajn5d8zo4CCZQykTFPoEtrcwYsBYxXyUgHJx17QcJsNZbuznS1QFXsDaTfA1dajnxtTpgacQJZpsnFb",
  "key4": "4Rc7HpkyFfGrcrCkPRN74DvVGmWhn6Sp5TuR4gu1KWp7KYmGU1nkPVtKW7qWC1iFv5LWZfb6t7KqMDrN3ZjK5J5L",
  "key5": "5XkRhuFP9Eubp9KGnvbKnzBJAtBrcws889ZymgP1d3sRLMG74Fg8Lq3CbvafsdHQSJv21Anc7NRkhxgY11m1RpU",
  "key6": "2LywNVUwGdpUSXoCNm7vsYj4x2jXoxayhbeoDc5p5HQoVvnKnup7uptgEfp6WUDWXwmmonsLLx8WzfKscgKccmXy",
  "key7": "56SHdhrkgmUamXw5X3qUy8cVaDCFWeEdaDww3qnrieAEgSDuuVQjmGYu9kKA3P5x8iPpHvKW9JH3F1KWgycofqZC",
  "key8": "h6HASHjD1LCndjXosLutLCCp1qs5JZ5m19iao7mDZy7Ait89u1giGnZbuL1TDXsJRJsxxENxep1AkczyHPUWBxA",
  "key9": "4H4y9KXoTWXZwT9FAcHGLLgVcgqQH89Nufbz8xFJUKMdwvYjkEbpbqBXgaFmvR8ZWSpnyJCjB3WDyJehDrmfJJgZ",
  "key10": "4kv7d8SXEpKpCbYSPtPQiuxNe75v4fU8uAzvjHuSBDFEd2VSwcCLcVuGApY5YAzXzs1GCUcYNadxu36jAtgtXizw",
  "key11": "4J8SGChpFwxTubB2iYXXTN77Fps8NjRm9rZds4nz27n8a13LK6Fd5LqJp4nD9NPWvg2xoNLq1Bz3DJbvTv6qpBZN",
  "key12": "4uToDJABYd2VYq6M2d3JqnPQ4GLHoePv5uJJKTSRcWKeSMLqZ3K3MxPKByZWhQV2dhcWUrzRgkPcEyUwWmwjbF1x",
  "key13": "4W9zp7R8XKAAvpYChQmRMFnKZC2MaPpUKGZ1yzqgFtLxxusj9znitvq65tDtMCarnkPy3nsBthNmeHF2jbzn6cUY",
  "key14": "GLKbnMPE6EyGhpbSeRGohb7PgUTHr1vWXF8ew4csDktCCHS7yijwq9LpLNMku6A8pKwcA2RMxT3BEaybdtqunYu",
  "key15": "GRenRwcBKoQNrmLyrCHcF33DS8QyjBQn7XZyG9tVvQX5Skww2V8qoqur2uNJPimJjd2VRdZi53rPis6TmcaqrGt",
  "key16": "38oXhj741fFwZJR83V8Q5ZsVkVerFuLH46ka28MPCrabdcsuhJoZfPFCNjqmHfKtGXgtue9LBcDiZtDjqnF2PEXg",
  "key17": "5iPPU1o8DsBPvP4DNcmo8GDevb1m4AHJXDSGfgh9zp8nureGr3APC54gKJUH8xu52nfuegc5T7fDLfpyM6sut3rg",
  "key18": "4QhC1UXT8UokrXJVX7e3yKno1amD7vuZfejKksS8qAg33tDXQHpnJsdoa7N1feN1Kpc8d1umnmVpRiJkXizJs22u",
  "key19": "3X2CK53S3EbkQvySQKjxrU23jF1k3tev3Fe1rAVSP2TuUbuXD8mkjYRJQoVWMZrz34ikwkWvyBThXwgiKiR1jyHz",
  "key20": "5Y8k3xuY98kBP7F8Z3ZFCvjftHPzfsWhYpWy6hvUqZ7anX6CnhnSn9Eojii77mxLk6DnLQePEMj1BowTS8Nbp83x",
  "key21": "3e3yqwdX9XbHcdsGZGC297TtWCMNxznMsULaXiAjwTuqVUbr1a8d9aW8MSCDRTsaH55FSouBvYS6HCqvzJCyCBmj",
  "key22": "4C5AdCZp2y5JKwLnze2WPDDu9UzM9DERCzap8JSnRCUTafN1X68bWPRynZzJc4CmdkyheySAyGiZUdYhueqRDYMM",
  "key23": "3dvFcVrZE21SczwDVPNDdnPQrWDu2sHZj35Lan2ncJCS6y68itLJY8JFzzCnahzAz41u1qaX2zCM5A88NWL7Fuxz",
  "key24": "5Y21Roni7ZmTwDLZwCx5MVQDJA7xnrwEU2yeF63yaHvvqwgegZLEK9sUusuJzWTZgBVquqqYXejGSXR651WNsGvz",
  "key25": "53vZXZRJTu9K89VtL7EgTX33Ckqp1aFn7ewjbdu3cTF5wneVSKVgaVdDpKdUUc83oPKYy2RcHfaMSrMRjmqNAnBa",
  "key26": "3eNpCnNfPe1RKhCZBaH3UCBZiW5cYai3hUFdLxCY9yJP1nVejxAivASx1P7xXZFkt2WYfgewG1vmfAMiVDCWXkqT",
  "key27": "2ZwSK3Axx9RE7C3uYAfHfMgz6fU96gdGfSqVY6Mo72ZAqVHLRsRWwDVyusxUU7QY8YzDEtVDPjyPzu5Mfpw88h89",
  "key28": "4QiZcuDb8H2k6XJrQHxmf6r9AxqxLBtSi8zhGDQfdwW1YNasGYupgoPZBZx1aMynfkv9sxckzWmNfYSzARj35Cbd",
  "key29": "gm66Rxex8ZNtxrNb8zPPt9GiBdnjnHYJse6CDg4VtuixNyfLJiFNT4mwiZV9e2i7AaoV44nSSehRXz7v8GyBPCs",
  "key30": "5dEoYoJq49XRJZXeD2ZUjaBmKFs7vFtazgQnCquEFzC3L6yJRuBmPgb7HhxDa88ZT5K2ATED1i8JPaxNWRfrNSYS",
  "key31": "5SZ5eiM8X2FCqZ14ocS5RjJPh92D7WCEb1AksrVtvJYYrJveiB5VgRkTJQSBgve4sKnktwTHYHoHhWHLLmskCPR4",
  "key32": "Tshmmjn7wbEXThyUnjQvTidSmZKCv2GQuLvhxxXZpGhT5taNXcDwtqVzVqDDtGxzvN8xcNMcUHaSbT7SryB3kdd",
  "key33": "3wFMr5LRF9theBZXAPDESCsydojTjn5Xh1dUwbzCUrhJjnyS3EjvjSYymsrpD7Eo6exQP5qrVdMt9xfit1aFNW7X",
  "key34": "5ryZkB3fDnbQvLvkg5EakGur3npN5Hh5Y44kveYk6UzcUEAV5p44dQgRnGQQWks4fqzyzUXvDnPfXp3TSudJUZNk",
  "key35": "5zpYHMeh4gwW77zAwkETq6Uav3Y6vJoZqVDb3NKvbTeNxyVsfB58NFs7QyWzDxNKNLpLsVra7WpWv1NpMkgU73tf",
  "key36": "3v1goQyAW44EgTsS25URZZGXSu2vHXf8vCFmmGFw5wJCjCyv4qiNKhKqq8cystPPrzoUVgFkgN16X8fBGwrL7ksA",
  "key37": "2BSAywzgG6j5kdJGJfx4DMVdTxr5XVUKxiPf4RLiXi1uyT3ZftX4zBh5zU3FQPWg6LXyc6SWP3w93a7UgHNDyXL2",
  "key38": "5fw9MrcDwEpvmyAQrkptJKtKFAa4WF8yCxYoZAfaF2Wei4LBBaCVoBVAoAVThUdSKKHRCavwbTL2Z57AjtcU6yPp",
  "key39": "4cNPGn1pHBZNKmk4AsgHxaFzKhhbXvdcSJbcSMhSwpf2dbthbWptMJzA6fGcwxqdGnS9X9dfkXnnKHaWUNW7tk8Q",
  "key40": "3BQbeJWL9Bx6mGGyKuG5DisMHBNxVb51La5t7e8UN8iR7Dm9aP59EGHHtn2BoWrLL795sMvmNia8QpkkwJpUPY5n",
  "key41": "4EGEGMrdk2fc1ca5LkEEAz35c1fy9toB9naMuEy4JeJK7uvep8y6mD8jWkABs8SVLkp9FJjv6R8u1wWAEFGuUBjJ",
  "key42": "545L6EATyJ7uFonHyVt4RziPmfP4exe4eot1Vyf5rLTMyJmi399wFQrTS8MWcUUFHd6VbR1ctzhUyUZk5ffKM4FL",
  "key43": "4bvFknJ35nYGMoyF6RF8D289SBaezWmTeUJDfts4v8GV6Q7zdWkCW2Lsj9Zekru5D57xuYwXmbWMvye9vS3TfRGp",
  "key44": "ywLsekcRrqP5s1TAjNzyHtXVvpYwtMYirXLBCgfjVaYj7DzGcKKriXGP7TvJw9DHGwpygakR8cV7GcVxR7dvQ99"
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
