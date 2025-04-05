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
    "tQi7MwezEZsFsrofmy3HoUfoEUQw2TkyDz4EkUYzkrdbKvo58JnLhX6dsYNDbqyhz4tFXn6ptpafEJXwo1774th"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X2AasEXTFrQhNSR6Fy9ixu7xhkqjJNGVbejubVDogJsRK1wTqt1F5xYUxHeJQsCuRsxesLLuLKbnasKZFgWKYHo",
  "key1": "2PnjYhgtZmAXU555sNFeo1ZCEvNpKsZi4jPANoNeKJLBVajqLuZnNeqTdhyqYvThitakbWVDPmybSU8AH8wiMreZ",
  "key2": "Y4Xu3NcxNFAKc7hNfPTigqHPKFrhX3ngdBJs239iWYYTMZrgWmsoSRzSjxLhndrPxndLzxr91witAVQh12KPfba",
  "key3": "XZkyas9geruuGRbf8yGwPTHzJw1LB1iN7ix21YrNMZRtX5t5z6Jzex5ta6A5uCQPZ2RG66XSUBJ8dnPM8BgFAsj",
  "key4": "xuvNWqJKELrsLpfeXjTfqwv5Ju4XFYzPwNhzFZcUf6Jyf1LkMsLR3388fNs4QVcz1rCQXyV28VYY8ETCVdmM71d",
  "key5": "4vBW1x9nWVgtwyP2sS4ZgV4o69Uaym4yBgEjTCY5r6dGdD14pRc674S5A1XqzPP1MvQ8rYJkBidGpGRvszo1CPxU",
  "key6": "2468VkPbhghoiW42qyK3X5T77xCTiDUuehxzAD1CW7Ah1BFQbFFhDBeq9MBAbQXGmCjkaszdjKV7MZe8mNqV12ki",
  "key7": "3ySYPkowUQiyqGuQWdceB2p5adB2VBJjeCVyC6snmvkFpvSJgCYtKHSDaMkKoSNnAD3ZBg9d1YZVvUBgHRVFcASs",
  "key8": "4ku3Wo7is3gTexPGx16sSR2pqR3C8KNtM1VfvJidq371QXLvim6ZMDVGUCknBjJayQKEFpAkQsyqhWh2RKqi4oTL",
  "key9": "LyPMSPSwNf2VXYgDt23pEqR8Pp6vcMpqSrxEEhbX1i9revm7ARm58HcQE5tk7JkuRJTxwTAm5hneBpFS7Tv4Yn4",
  "key10": "3swmYfbWWxAngSTVCrKubpiCqj4eDKdP43YJqocshQefuxzdx5XJffDmgz27XwKS7JRoHeBmme98sysj4xM86G8w",
  "key11": "5jXuNkuE6WckaZQZUDuXzRFPP4HXdguUk5yvA8DdbnajBu8vsSX22wAoveAUhJWbNFXcrWKjJC4xwiPvfcMJexdo",
  "key12": "25AXoWJRQihvk3eMyLec7ooWHSYcqK2UjCt1E22kf61fUDUisjN691tEL6V8hPbNMhsziPN3VJT7vgcS5GVWXEAC",
  "key13": "4K5hPR1mydNTGHp2ewiQ8hCDYQh3MgfNPqjXk6hZAeKU9QpKKvDGcQkQi68PwcrqmbGRoFzrbojuew9Q1XaqL8wo",
  "key14": "22aBsQij6oSo3XyEe2fH3xLPyEWoZPBgzGRYHTesimhFHNWrTaQFvVbs5VCeAGoqcNBk4Z1jwp9hgKzDmFL9jNQw",
  "key15": "2Km48KGspMdhH2g5gaqW5Mg7uNQVviWRYdFd8mZAmPGmU5WwXJb4uj3NNCKV1XubRnWGQqsrkAZcc6CXU4uzq8Ud",
  "key16": "4hFFn6JJ4eHECTWTSFidrErRKV2ssHmrQYwhCoy6JxSZs6icEBr2m1seNLsYXsBekX3Ex7pkSn5dRCuZKtMEw5G1",
  "key17": "62c7oWi3Y4B58WaLSsGwQCZUksdT6vKWKYgVmDWhFWH4wVBuBGTwXUs82ErY8td8SAnHfXC87yvebK6HBxsbd4cS",
  "key18": "53DyG1np8F2NZikxVmYgjDxAkV8Bcx1pS1jBwWXVJSorWxGywaXrSuHWSnVDTMphAbAwwyuXv1tfjvmNsKkZ1pqp",
  "key19": "4GxngtsM8Kat6RLH9steeuukfa9F3BF7iNanuJQ4YPtoJCBu7p1BxCLhU8WZU9TU8QUXRa8UfDVrVD4NqYs8nuXM",
  "key20": "4cmxqhB6urs8KpVFjDbcRWd2mEi2TWLkJ5Wk6zueFGX2XdB234KtL4Sqgas5z9JBuKyqjiUGGZj3TsP5vpaMQgSf",
  "key21": "saXRe9Xsxcbn29dab4Ve9bgs9sipM2TzZyQTNCS2zJ3m46f7BEk9q4h31LfhDqV4qmq7LGJfduDgygcGGqf8EQg",
  "key22": "9MNxSGjdXPMqX3qdQPM2JfVvEcNEfANnKWJAx3j5DEToJ21aun5Pun5Mb4Dc8VqoscokerBNWj3bT1c3FURjhDj",
  "key23": "5zwiNCbgGRUmqJ4BmDtbGdvEzNPyqKwPUZTdvCuzRn2UDPHyGKeTCK9ddfeCehEpXtBWHS35EqyHy5txPX73kQ96",
  "key24": "x9nMWyW9QU4G2fs9zLGiWVwd5qFTQ13hHdvMr43u69sk8oNog3qtE5EyYM4NRoHEe9DGcxyDn5Gt2TAaysfiy1V",
  "key25": "2fCQMSm1hfYxbrm77z7icwPEZ87rZGA1rNtET1Dc1BTAR3U27Y4eohKNUuoeLz9LunAHX94gkgSvYuydVif7uXmW",
  "key26": "2rgKtQ3xhziZNvMtoJo5Q5xVY4Sb1sjxmsZQrUPmt6xVHJYqJLrNA8gBtRHjVkJp7F1nXiYrU73WLn6YCPjkfqmr",
  "key27": "3rGd4zoApLgT6gLXkhnrTdYDq6PFEYiTZRfsAvBKxGdgZf1sv8MqFeHbztAABBcDeUNAkbo2kLmevcGJoPXuD5UL",
  "key28": "24cBYV7aZtSq6SeFUeN71G4wmGNTNmEUXuQ26HzRHSD3bVbz5wKBp3qD7mrHKWuSeEKTNeXgrnZhmFoErMZuxo2r",
  "key29": "5fbttr6r9VAv8nAxDkxe2Mqxs5jpqzdDdWHRVJzaFZBegH6RmGeFEDQbawLPsBnAVQvwzsWdL7KyjfHhZvtAyj93",
  "key30": "32B1J9Yn1VW6TDTQ7CvsrxyQSD8i9JdAfvVky9kU3vJQcV3EK1WSxqfsS3Ec4nbhyUzt58U9ropn8jchPm7CiJBE",
  "key31": "4J1vvRFczwJSRnZBd94v54rxN7gcXSNj51F7FRzDHA4Bdro3zVSNhSh5XZPdDhrZNq2WoBCQBcMK33S7vCHvWZyw",
  "key32": "4CJkHsKZsMEVxYFrz5dqDmRXkVo9TJ973fAByZNV5JrbBsNBoKJz9RdBLBPNf6tu385JYXLrtp2JAVwPZskVQDbD",
  "key33": "Ugp3eRkDy6LBy4KDGKijtQxuDfAWzgovQGroa8KuqtEBPWrMpWEE4KNe6WACgmNgr8xi4yQ8E24c7vXjuKAg1Vb",
  "key34": "51Gz84B7K4rA1RuYYu3LfkQTsgpH71StX24Ponm6i2dbxsnjLDV482K16NM9qkRyYcac3YDfrKTLu1F7qkVtQRqs",
  "key35": "5Fk3RweqHxNpEHADpqVnGphG99DGbtx8zRFCXJteMSFZbvR9UFjyuf9Y1Y8z2JNCioqCZZFPdfupGcuBrrZW9iwc",
  "key36": "2nutcZLXskoKChBgc6RZNjNPqgJEx4UpHDNjqDvToCLMCJG4CQ4jkDrkrdL9WxfBrAxJwDCQDbYgi1gd12ELdK1t",
  "key37": "4cpnBfduhrWsdJUXnMbmRJW3axRDNRgmwXCSm8DJwyopoFtnDrvj2bqfsVvMXEtGXnz23T1X4MBXfTVcKueB5ybd",
  "key38": "3gp6C11Hq9to4sBbt93wvQ4A1pCLpbUMjFof8c5RK7kzBCPmjuP8ViDqVMWMwiNiWRbbPRphGfqW4PAiD2dvzXNP"
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
