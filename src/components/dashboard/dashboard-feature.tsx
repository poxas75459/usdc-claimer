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
    "3e1XU946zFBkCMoTf7L2Vqsw5XFYzeCuCsq7zHskAyLJX1V1E9K1esnM1LTF12cudsxE4yvPJ3HA5Qa4nqTz8jjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VqgVxTMWUPqv93hUxgEXS1sUq2cLb4XG7d7MS1pdf74A8giCu3MgzyZiFFFzgMAQM2SDnDxmTzZuNK1MGvhQUQE",
  "key1": "p1iRRFZquPneoE4Cq3UHSeyMMVLgw39paMUSaiDfDWYB49ENMcny9pGTUcSD89M3zpuX2YXXeqDYBLog2dxqytD",
  "key2": "51MEMFKhzBMNV76r7syGHXKghuVmnuKUpn6mUju7En5We6w1efv1te5TBWA7TTGfm4wdBhBzZXQk6AmFfyNWuNMM",
  "key3": "291hCxfESsxiTHvMuiGC1rasyLoJi7uzg2AZgXpWe7DpRgo3HitvZegUuF1CmKXPpHYP42r9PLWek7aow9xMdJve",
  "key4": "5v95g6HcS6fmJxhTThUEg8ZintRvdnZX7uwSi6dDa8HWEDpw5DEWzEwdPkTMYEwkL8toKks9HD93xU6bsHb8Ge4S",
  "key5": "3ABE4gibc3JDAbt8dsQ887NwwLMVxGyVcq7LmkRCD5YEeMNTWsiQUQ5kpjvtpwz5jUMnQFX6XoWGGo2qCSYfCdhX",
  "key6": "2e6ePxEz51YA8cALdAPXsiHu75Tr5jaoXtXGiZqZTkiBiVbEcfGnw9kBF9msNrD4j2gVzxbYY3DqCqgpjCLAUKa4",
  "key7": "4RzzYEcsAwN16uanqf978Tk3xJnsAz7b9cjv7GJtoTroqmbuNdAk6FNSxsZH52nbSnKKFQwAxEuqm3XFhNWNkTAL",
  "key8": "w7KXzoNqDk82XH9wk8TuaBMypRQbYRZ4oSkVBwCDMXcztP55ictWTew5GXSdtwSX9a11cLwKmCPvL2n9BdmDimB",
  "key9": "63EykbErELAmFxsXzUfECuoRhjJQ2GJ4V6sBsXJ7Ky2FDJUgwfVSLzVABfLGpV4NJBCNL6AyVAgGJrTQFNBA1n8J",
  "key10": "448Bq2cHgtF6P1R2QWWjzLzc4S46TvQyonECjfYSPpoiyJDUTNiGoM3VSigZaUcC8ukiy2kRYBVHzvZfeN9ah5sg",
  "key11": "5NGaXq4xooT9BBYvoW4eVviwT6mSQrttUcatJvJdfAnGcKarNyKRnE2WE4oQ2uFGQx7dHecWxyQjF1LqkoHb1vKS",
  "key12": "53QfES2eaQoR9tCt2mdGThx6BG9ZgJAeuiovg61zrpGenjoWb6osShnnxwvzS69MrRmuD6Mo915vhwNHEzFQeeRC",
  "key13": "5UgT4zmQMtt6JR9k9CRp6EhYe5rqKuNxBiDjkrdgpWFopEesz6MEU4TNpuGsjJYH7EfoDQJ59Hzbgke1BAvdYbeQ",
  "key14": "qZhkxpDhPVi65KfZsim1Mqneq3RRnPGqpNSiLw85yTwC3fmtn5Sob3cBemLpQk67aQAwkSoZJjw5bPj46irzoks",
  "key15": "jx3hTvxCwRT5278VDqNXUS3k3V7kXyaLnhsuaN2VqtYgUvvNTKZjbb4RBYEoC9hrodXt5GpQT3WbUQg7eqmGpQN",
  "key16": "6fsbp2RPJpcwTZaH3pVkSPXBYamVrMb2qtPKFEekPWP8xPfeNaXqCGPdNi9zovEEfQQFwAP2vA2MNvk7nT5BJkn",
  "key17": "5d6ur5w2oYLwWfjRSscDRKL4S6h6ms59E17CTz5SD3FjPr6JrDZDMVgYpMicnbPr6WoCD6GiFERfa3dBJ62TfKbs",
  "key18": "5wbDr4u3XVwAR8aGngjVEfsuq6ctxU7zwLfQSYS4TfLqNBdguvMTFQDsoFjP6tw86XePEDdLbCtM55QfSCqvrZzZ",
  "key19": "3eAGMuNH8bZKGFfniWp48SNj36bZmRuFE4aLtwoyfy5Rn6AaJKkYaJ17oynDGKtSXe8MKCpc3jJ5q8pa5sxahciJ",
  "key20": "2whNV3oc15LEKznqJsgLrmAvd9empxAoA4EL13mLQhu2xb2wm68QF1c63Y2LFK5dxBSfTmhJKqkg5zckamzeUY82",
  "key21": "38suAUeo5TeyDLNYXTqVnKS4Nu94twFexcSaR5hyiLJaC8EHE4kgtkQD5GJXfiuGfRh9Hmxjst5ipFqJZp2PyS24",
  "key22": "5xxUv6A9W16XAGjneE9DEjxQpcJroBWm5kGe8xcgkabwn919mxAzuUsqBvU83BscK2JW7sbkfDf3Z7CCR54PyxXj",
  "key23": "2mHyyCCBL7n5DKAY4wQEwjhZ9EKNfdBXHeC4NkVSZat6krmawgwsBkykRPQJVyBj8Msqy3MgqmGEpDU41YjCT6DB",
  "key24": "5CraSEr26q5PCRauYe53GrAj7Nh4p3MwvfeHGQ86vvVhvEbK4NNxLGj6PjC7jKtSde8VUQbmZXd98xZWoTJjx2sK",
  "key25": "5ynPAZpuHk4iPuNvDMXLfYNP5pgjEQqoBgwisrqECbRiDGQpqBTjZAB2Gx4C8DoYhiLGKEWF1u3WP7giwQTBoTuc",
  "key26": "3Fpc6USJv81CitLbjdgWPLPkhku2PoLQY6CrFkmJeHZ7aFGTkyourUyLnEkiWtbcN3fsanjRxpgXPt8Xq63wh4BG",
  "key27": "38BKoGJCHtwdeh2BCM8jCL8H4VnhsgF2yoXTaDPcGsPP6xeVb7RytowbeGYVgYvbPyD4QpDzTD1UuWAneLinQph3",
  "key28": "FYCJwX7DDbJGJsNLdH2ypKL3eiuVKy9VAH8RTokqPPq13wWxMjiLYu2SW8FBSc6yPZmyEWFm2fg96BZnfMCbgn5",
  "key29": "2Wov2UkZLqeR4x6MDJqoVKb751HN7qXEvKv8tHm9go6a5rsSXNb9rxBRz2ktmr5PBwyF8wQvHKMCXHup5PkXnfxn",
  "key30": "4HhbZE3zn2XNWzVvJGuEgHfimNXnNafVy226RXq5vswJiuFfwQmvdVvDiEdRzaN7cqJJkLZcKGc89rkt6UPC6qXs",
  "key31": "3UEsrYvNYzLzJFkuqAFcs2q8rqGVTCZeTpBXxppFke2fJR7HwbEu6zcD2X2LtkjwbXPMUscLVSP6KVPuGactsPan",
  "key32": "2EWiSdz8TUhkea7KnUYskKKHaNbLBS89o11VxfcMvBtsjpP6aLDzXRYhWCeVim8j272hd5qSZqEdE6uHitExEmWA",
  "key33": "62PLYoBZrJcKSGKGx72DpM4jqfJfstmo1QVBnUXdAZQxvXZ6D1JfGZjGcbcEwYnq5PpwQhJE6NwfcNt4uDZMWQyC",
  "key34": "DV7zqANT1SeUMa4zo4EbK7jTNqBjRVdohrrADVMG6zpcdQqLQbmo6kqjhzxN2QZpmRq9rutTrudgKyXmf5HgQVi",
  "key35": "3ejiSXPrNap74fBeaSAHs8aTGCjw1qpVoXXicusMkFB5gwwtfwZjPH3d53nfFoJ6gx4EhFNJacaCkTvyJ46FqDJK",
  "key36": "448CPR3VLNr22tzx7zY7ePRFscZmcE5gkimMAxTMERy8bNzQCZvSvk4LgTXy1WNPj5xJX9GDwEHhX1zg51NQeYwo",
  "key37": "2rCbbS3ZHYwgsM78mACTxNrh6bXXwDcViCzjmf8iugi5srMPCH8Zd3Z75iqPZBrWqBPdnG6qdF6DPSvWLVuJMThq",
  "key38": "4Kb3r5vynHZmSqXkYutwhHhkgrUgaS2GVykqZepNSH94reqHNR2CZyrnPRnNEptqyWD9W6QfgQhqJwN5KYaYjRHc",
  "key39": "Rs1gLYhEucgAHDca9v1KfoQpeVe5T8Lo6LPfxwgFpkeYE2hHNsTbRKTn2T5iXUrCHnzREci15n8ubRpJgUexMG9",
  "key40": "5t1Kdh6JwPRKEgUJUpCBNEDTHvqvH1HJZpPzeGSfUfHC7siqMyrbHs94AwZbiXWprpsB5jwq2QRpFfix4HyeNRxf"
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
