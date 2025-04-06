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
    "4VAZcMdUpCBFKHSrKA37PAFT74SfQtr6ubTM6UMw1f1gw6N9sytnYcvANPYboZZrAbpdjhneihjSbwNSFs3naQ2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "odYNE9NHsD6vkkBHX6KQWEJdw7obStbtBg5bUpapzUR9b3MprQ6vk96gXsZft8L1ACgYd4aQj47nobwuuDFHdvL",
  "key1": "3AK2rgB3UrKo9kv9ssWMRpNuxo8BeTrZGzKvkCyWZR4neHL4EGgHVTxdhTudcwhJYt17MBFaSyJsmUpHc5X8rpDF",
  "key2": "5XmzmoGxwZrZsmS6gaW1mpurgQFgHp8aiinjT2MCwgrH4csc4oRsmWLuVqyJtLjF2jGjvnS9AtW7DusE9CW8x8L7",
  "key3": "JvxiRBYz2jHRqFLvXY3DTUMmmdMxqiVeN3Q1LkU2YqLE7TBjJ8rBMxTwCUSxAFhpDGChr54Pgiuzbc4QGgAyEe9",
  "key4": "2oR4SQm3KePuuhxPDzrU2Z2xkTxQFkRo8nQhDovndNiWqUHNgHGdsTu4AVqoNji3qa36uTsL73tb9QQPzkhFPi2E",
  "key5": "5s8uUZdzD2A1dD3AkyVKEcXtZ9G1t2FrMYVQugpAguMtEnMswzBexS4WdyuZkkSjvVv5ocZBce3o7mCQoANZ1k2M",
  "key6": "JhoG8Ja8Fjqo8wZ2mpWDSVfxqUrRdJYev3Wu4Xu1qaJRzbCkczKCyHDk1tNL7pttXPaQMQFYvj5psKodCb77mEA",
  "key7": "3D2GiQNiFDNyRcXjSL876cm1vnr2kZFGeHcSrwv4HUwuRFJmUFB5aKTP9R9gioyGnSFt2D5AdH5pV6J5Z2mTxMFH",
  "key8": "66QaTDyrv9Cnse2TBs1yAP7xiZ49VzK6puiyENtLDwiWguk4eeEkEggxy1uMw4HdjimCg4X41tQXUDLPeiA1AnEY",
  "key9": "3Cdhnvx27h3ARir7tbzE2sLaftVdxDxyqyVgRvYFUKAPK14MDCkHpitv2YnVfmaxx9YiQeXJWfD7122MzMkW9p6c",
  "key10": "3SxV8mMMgBMfywtiyC9mEPBWdtriE9P9dZN1UQoWqbossroPK7JdDCQyv1bAKqszs75maemjxMtiWmmG6Ymo9jga",
  "key11": "56AUJESt6eXL3yfnUhcT97AVViabWVBCJgs9UedXSV7D7ReVii78Qv7hK5WDtNNMeiUejTFyN5r9Whqn2b8YSkKu",
  "key12": "3b7m9JjtHBU1J3SukNPLyYxRgTxqjRS6VCDXMws5PVAmXomugE3pTgfJKRvvFPLAUu2eACh2dhgZe94J6Q8Huq6E",
  "key13": "5D3srKsFqvNp8oCseuRNL8qtUAXw3TD7KSjcYRbKgSpDwAZt5byPPhxMKGknFH9LHM8Ae6g18ds5MvC7kRsTD4Nz",
  "key14": "s62rH6MBztmA8JMKHtizida9LqimjJmGSXWNTFKhHHMfLTWYp3LWPMbxqrkNZAwSG4Phv5YJ5vfFBJiBxRsqqG5",
  "key15": "2VQyM2qjh5AbJZu4VNVxfN13tb51tLF5d1Uzc3hmfHo3Mh3bhFj9JKtrMbkmyETPNh9x3vuQhoDmtaHqrAti7Ahc",
  "key16": "HGxk4ZvFdjGzqetxpezBdXNeGYRVV958ECKGoD6em9FdRTuAR6JxW4mRLaySsHTkCwCBM4vycM1ZDCH5Bg8UY6F",
  "key17": "2HnA8ydzXyVxwgqrGF55KHsxtMFe3Erzgk3UZ7NZejy7pr2t2orHsnWS6uZ4CYqwjmUbAysbkjTqof9vWJHmAKjR",
  "key18": "guq3PjNF3ek4yqduXRxQyKEGQkm2BJuHdzksPUMonW8zHBBv6PzhAdfWPhbu24RS44Rf11UduW3qFD1cM79T2Gw",
  "key19": "25xcLp1etHsE55psbttcsz4FkpGmob5q6tbZ2KJAEGg7YT4YbN8ZdrVm13sEFBF3F5rz5pw49fHPVSJbuh6xW7PS",
  "key20": "2esKXBBzTC44FWiNhwcjkfwjXYvff9Dn1Sx5dAK2zRmdXoNkcqryBgJZSyoDdBvrVCGLfJzK76Mxdm63iyX5kC1Q",
  "key21": "qrCuDVpsbcXGuEsXgmeViQQQz3FdqZQzt3xG575bx1ru9BADYHJeCatNsbqzWwbAxQyesfndfisZPKsjd3zbSEY",
  "key22": "5jepqH4JXFpq3NrcfnGugmAxfv6cJxGQmqpYRVzBVc75Vp1y4FcwUUUu8xK8bU6sWWrTvbgPpCmtn52CHsA1bMvd",
  "key23": "2WcHp1w74KJ6L6rraqQnXZErY9WmV6MNpt2Jo7JbEFHwYLBG7vV3Pxki5jqrzzq3ua4FBrV4YbQQS23uLShiD45A",
  "key24": "2Qw2JkRNgHEWSQD3kxBc2m7iaQUtsi719A6kGw36zjXDRuJtrXj7wo8jcDyjtAjvYqSqQYEer9DLtTNXc9Fggc6b",
  "key25": "4BifNEfeJLYh1py8h1EmNGpAve5eNYMfG8YTsR4mN2D8spu1Q3RsNJKnCkvkWRUh79Ns9kU6VYoJNWDE3w23qyzo",
  "key26": "32BeN1a8hoTZVpFnB8oiKjPosXTBy7wrFLRjy2rB7iqpLXyXT42K7TFqs5yPXM8B7ciN1BYNP5YGasHzKbcLNPHk",
  "key27": "4NTP9RFe3DcyMLPFb8dFE3e71j7cf8Z2HUrUFvSBtnUh3vxQGuU3ZwtoGr1z2juV89CRdsG4Nm46VXD6aFMe5z9",
  "key28": "3PWvEMuXnP9vGPYxFTC6DPvENDREdbD5KjKJL3yDoWAo8uzb1nQKmeE4K9Yk44JrpZ53DsRBcVH5jWFhnNv4JgYd",
  "key29": "R3gkPy8EQc3qDwYYVHdu7enwuE6FEHbhYfA4miYAnu1NTsVR2ZmjfJizXc5tafKfDnWMo4F4t3bpz4Qm219XZLo",
  "key30": "4EHuAAi6JSMu385VPiGZdZXh7QQnjHv7yu1um94oNuqj2H8zGT6xsosQ4JPgTaCmEzo52Vrp91CtMj7fefeTMPAy",
  "key31": "4Q6KANuLFMKiu566jSEpErNqBye7x7fy3hShFBadYB9NFxvo1bWjmKDNpkLqQysdAtu8thVJ1Q5VgnQSXT9qBDgH",
  "key32": "3rqoeRut5k9sFdA8VAeU6seEMAAFtbEXKvyJMhv2jGHAGyxvMmbh9h4Sp6Evqx5k7YL8bC1WwRYG2SmTVeq7mLwe",
  "key33": "3b1FmdU8ZQhpTsL8ortsjrefSwwooHYeAj6ECcRwAjjHbCfsqMhrFkpkFWFdVikHXeqJu2XoGTCkUxs8yRHkNn4j",
  "key34": "2xZE6ou4o5gtRkXBXKt8U4JPUcBo3mdz8HcQGLNPoCFv32CfC8i8EvMrTVhtMircZpMPsYEhXRFKDKTSpq62EfpL",
  "key35": "5wC6zsfdGx8rY9yDQpVBX4w42pH4sD7cQFLRUw5rmta42ptdXGB2gh9aEovnAh2DmkVmYdqrt1CHTVR4pqgqPzjM",
  "key36": "4ynTSPkkZqKfcShzqwjYawp1AYRDuhU63SXBukqK38Fh2B9vNxeSHrDeykVmTyNBfnyw9ty1YXqZ5sFtBab5XnHE",
  "key37": "3yotR952bNK5uM8zMSj2X2AwkRHsNgTQ8X7YUnFpfSBXJfWf5xMfYiWj7MJaTXYTKdb5b3SJxGJAxjpBbLQVQ9s1"
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
