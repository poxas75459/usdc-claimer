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
    "4YXUXgHW4desZvy5mF528Qa74xTAbnU1H5384X5mJjxTNYTACkJCHbjRQRsz7KjYhwSDPmTNgMA96NCqzx43RFeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AvR9gmuwTTY2h6bx9rk817fWjuaS7oBuziRLh2Gbz3DByJfMzzrqd1EspE37ijuHycZPxMBBqkndZY17LrERfYj",
  "key1": "Uo5ufyzQA668GEXYhTN1Gmhr7Mf2tCzZmejYDzkT2nRNqZWAkh3cCrsS7NMzXRLHihNmJ4GHtCnft96aD1qSB34",
  "key2": "4ggJmBom5rgrhkzKbiXErKcCWCn18dkeEvsmUBjg7ZyFHhX5exNzaYZzB4PwVBQQL4aRfzAze83SuK9Bn4QyP325",
  "key3": "yrhgXL1UoaNsjDRKd1MEcuMraQTjdsFv4pvYWdPGkD9HCCLaiBs5BanitWpDbDGz2NeVpqb73TgysMvEisQYnMZ",
  "key4": "46EdmtrLWMbmo5NWztEAPBmNohwbje3UNBFnTNEegSvxfqDUQYD4m1oRSHP9qRZdaTGAW4JCuSngU29Y5BtXuttP",
  "key5": "5omv7KCsbwGFqGYfckTEpd5iTSz5QN3JbpNXyZFiemBNvsMPJUkv2spvxcm8w6ih2xxLU2PVS1CPuan6ybS4fnMr",
  "key6": "4fYdhhkQoRFkkZpr5vm84NYSToZyqDnUyPftro65vQaEShPeJcz3ujCfQvfhKWe4Z7Zm7QAgznUXQBJbYSPaKS3z",
  "key7": "4ds32HapZcgzXYHx2TQMEQBsss3oh8VvwWk6CxxumcwQYu1ZwXCJ71H5jRarZ2KiyhRj6ajJ9EUP9o1DXz1yBTCF",
  "key8": "2kRzSLTGrMNrJyqN6C9mNbPxuVevKomYzLiQohwQgMHCoWBiihjnk9GkCB7KMK2bNhg1JtckLnVKw58SXWMwXAr3",
  "key9": "i5NsizH4yAWiCPZhxrBAAeGpyFjv7WVCipk4BHdtFBZ49Wi6dpHd5vyRQrBiLLd36X9Y3fCjiNi49GP4Cq598N9",
  "key10": "4Bv4B3KekTbsFrmrVNeZQ2y1aawYSXVhdrrKSpQ2MMGEp961uHMUeVWqzR9rrQEooqeEaTPebR5GVpTFXgoj1FyN",
  "key11": "3GaTxfTSrqNjhdU3GgdArJyJPXRzGJKLoZYyH3xsN18qA4PxLNMJc6ACkXG188bGGbMQffBTXhGBUcqWpZNJGCda",
  "key12": "4AoPmMbFraCkexmL8TKHY35Ua9q8vfGKtJ5DTTvxZmN16BDiu4gYcPRQdvethydo3CfzbwDxtoFhjkuo16sYeqTJ",
  "key13": "3UqtaPhPq5hCUNKRUmwTv4k3kuaXMC28rAiq9TXR5VhpQeadTcVoCjh6np49hydTrYwhKsKTjhSEZFAPLEYrD5jS",
  "key14": "2nhcnkZXM7hZgVdeLTkUajTEcx2ApABsTFw9XbiaL42VFbUzvc8cceAbG8tTZhJKcxfgzNTktvhEW4bbPqi8pPHu",
  "key15": "3cgabfH3gE3kpNTHVFXqXy2tcV7tXowEHMm1zQtwjbJC1phEJ2QxAR6cnDdatYHd6KbKoRyWN2ez5aLVLAZYqjcx",
  "key16": "3wkAwJFSvkDQoyVbLW3jofqGV7YSPNRsuQaof4NqQzhE5SJ4aN3CvEuWzpaExs1QLuTrzc1Ffjtg6DNJP89RepR7",
  "key17": "LWNek8SeCJaT2n7rBXYgw5rx1LPHfBGv9yhFxd5Y396vRiED21WihPcxQokZJwWp4fXKzmwBnpfzxNJgBN166yT",
  "key18": "2cKDs5sYef2pmAd2qj728bEtRX1gcWCUHeVTcwAtTHixGVoNLmtHRadNs8rXfxcNiTymMrr6ziqoJ9efCp8HCDvo",
  "key19": "Tq3bCXLnVAZfG77G5YCNBsUrrvXPJGmBrSpJ1cWwkwZaMs1gHRR5SkYFwAdSFvjnhPnHQS3ujjtuyu3G97JxrJA",
  "key20": "3hFUKC678eS3G3HjGWvjmKACJfQEJT6GENg3fE8dwEBeFHGRjWFu6F5cLrj9du7Mr8gMDG62nXQ7btvuMmeMoi7R",
  "key21": "4F8SenyErY7YE4cKthjv8EriqbxSLiACqSd5hh1woi54xm6mB5RWWoB1CdJUJzo4vkfc5KPizDWvnjMe5G5mk2kX",
  "key22": "szybqBaDdKgTimxvHixtVhHxJkXuLhmVeMg5uwjSRfazTD6ApGcyMApdY1eQnHacREFp2swXcFeqN3L9v2AQda3",
  "key23": "5AQydDHFZGKkkrrVaKwr9xe9wcuCxR6KDCssHbwJg5qLwDu2qKoBfx7nbnGXW8EcRFa2F6h1CpVcD9RzxbRz6ZRF",
  "key24": "4s9wbZcqXd4uFeyX5ESipfs8X3E7cqPapeZNTYwzjRre6aHDpkL8KECM7i8K8tRNA5uiqdb4re1N9kpGcBAm9Z8S",
  "key25": "45mx6gCYyKETMuK1JJMdSDHtWWACv4Ma2gZbmxm9fXhFEEapXkWYdr6vWowUh3LXusTCvAu5dRbDvNZa4iBJmpuy",
  "key26": "5rViV5HZBAMVzKydzQF4VsRyy4LCXCvJjNBhaM889Yr8CTi9WuAoUtBCCsz9utUZwUyPPSmCwScEzPfVfboccXff",
  "key27": "4cXAp541iCpH9bsMmHX1YM64MFGx7YWpYf9LGny64m7epEdxM7SNqwPzwV3og8B5GvzEkQoUi1gKr63PKuqcbgRP",
  "key28": "21ezaTQ5yhDcdzpg5viWDCmjCVpBbQe9i7CL5eTm6aBikX8F7f7UvNHC92TKu42L4gGd3e2BddpPBSReVHykwGkd",
  "key29": "2bCG9yjsMe6uCkWzZg4e7nHZRdjBQWSUhR43DGLduPXrLL53CniZzTEiM2bnknoppwMFnceggRKTSB95Lz3umqGY",
  "key30": "Nt9uqHjWdq8CzHn4Ghd3jFThrXFSZvsmrfMUSpuTpecK7Cbhk2APRC4QWGbwDv9L2r8sXoggKW9uuH4UbKmtJKk",
  "key31": "5HK6hv5YoEnHNScTpr3wqTANBWA7T4TpUGAtnN45MaCdd5RfTTdRSs3t8fAVA35T74oqcpa3TC1r2N3V4KaJPcvp",
  "key32": "5UrvpPwBVEN8nGkYhHzYbVnuWeamV4bPTMe65TkwyAj3px6Zf72g7aFEmkYS7RGp89iPKbwvTqYPaBQ5UbjKcCLS",
  "key33": "23ij3H7285kPc4tzkMRhhzTnNeL8wkMa4PcLNUn9gp177nqGM35gcFxj2cKavN1Hdu9LbagP9izSZVWgT2stGrGz",
  "key34": "5DGxLdrYoCD9C1J6i9mibLxv1EhgiQdc76oeGFZAkJUUgZHupjPZYBVA9e98uvGrdfc1MM3XxuMz5Dyie2zuA4mo",
  "key35": "2UUYLeTSeCPgfSE6GZZxF6RKAinW1FiRxKXmUqLU51smDu6iTuqGT6tZTjMyZNnX3oj22BZVdsKU52ZbrpE9QTW7",
  "key36": "2c7GrcjN96orrvBuLH33TRo6AnDSufZMPuRArHL56m8eu6N9h2RZ6mbvvQeLTZicb6oFDfiYU4kxdcMKnVHq357t",
  "key37": "5b2hY3y46SZsZ3BGS3z1FMMSGrZXf5Ve36QK9TJoPCecpNopBNQpMu8QV6dDDzCVWwjN2bxz8vYD8ksUexi7R8HQ",
  "key38": "3TMbLRgmocCD1CoaEt57SDnAybqas3PvVkf3yuqSRPCgYEEV97EdQ9YVy2yXqzvbZdyXncv4kKyEXbuuTQ6p5XyC",
  "key39": "3GRvzn255cpY2H3Fsv1zYJYK2L1jYs8DtseSC8YWYhqaWcMjBqrs3g7NCUyWBdLRguB4pA7x98jiJCk2rXbX15TL",
  "key40": "22nxbsZn2m6X2bu687bUJYHjyozB1DYNfdqr4WF7WSiBYLceiiaMDhZmAq2rkcJsk7CXamJjwvShTqTUMjmhy45t"
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
