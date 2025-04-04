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
    "GgPYCzRLuGvVbLeFvRWqDD31J5bKhqpSqCX4HekYYbjra8NHGsJmJ25wHXzH5SSnmsCApsgyXQ7nq5hcxageJR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zuiqUXa4BSemgvbfbx8nm3LZHBFEHTnVeokMiiReGUwGRNgTUm2t2MJEABYSr3JNHQTdBLnnkJ3Gfesy3pna3Je",
  "key1": "482aHu3DDP6Rerz1GLX8L2pXRtpahvcxJW6bTB7QWBSihjW2SYhERCp6HkwJM12Dap6BEt4h1gfKMKbBxh6nH1aK",
  "key2": "WLmku5kAZjZhbybJcgiTbm54Vqw6m4JUewALQXEbt3GugRPbMeMp8G72oDUHz1UHuU8nqwvETqNHdhd21XgF6ZJ",
  "key3": "5ojiGgcC1r5tRDBw4utdqUPE4uQYSujNKzbL7eZNEcZGNWYMwzQbxJCKpZka25nxPiPcLiGeWSyUFPK7mG93LtLW",
  "key4": "5bBSDqER5eHifB65F9ySYwM9wgvtNYTaxkihEEKhyR8AAaKtbPjxwim5Nj1qJeHmEKyBwJm7WooaVbfScRXxeKmc",
  "key5": "4AsyMA3iDKQRovZHwMXEu7bEy92Q7jTyWxt7HD9i76T9g5rEDSK2dKUFvhMLM8xwf9EDXVzDDDeGgnqqitCsBqFA",
  "key6": "4XZu1t8VjzzVhxVhFHwYj3tFdNycgiAEWoHxBmnB93YiakRZmbAXqy1rxhBV76W7m6FbEyWHoGF4k5d6p22CnzyS",
  "key7": "3QDR9M3YCf4Ys1AxQXvj8NhH6kaCTQ8SUq76ncVEmrmB7EJMxRpr58uXMRmLGP2sKaJpS5CU841smphqTXiZ6vEw",
  "key8": "4LrZ7ebvaui5cHziw5X9e1YF6HgPQcZjxtZ8NNtUEJzHnhvJVbsCjUZZCmyfKWP4pVwzCx29J9ffqvc2xcmvqM29",
  "key9": "5jht6U67Uba4Bhy28p9ZxhRhM6WiLYhKgBPDafAfXkVRFXKpgR5rxt3T6dYhx5FDVWmKNBJopUWY2gpBvgF5umzh",
  "key10": "5kVA8uGc3V7NNEUdezwLzpsVbNVu8hR96GcFdLnGyv3NDcGbbj1Y4S71vQwyqaDC6DST7pXRxvBUmM9CsWXLZ7cR",
  "key11": "xMRWMFcJuZGkpk7zn67fE7pP3FG6wk3VU6Vhn65989h6CcYj83vxPwiep1T3VYmD883N9NZj5EXDFjCcE4GAk8J",
  "key12": "5ZfWYP2UDmQqA6TSjo8PwY1rkmjuY4Bzh8cFqaJijzz5U2vnYoJdgLL25nYgvCGcbziRfjQCVQ7Q5phpfcnuaCvz",
  "key13": "2N7e4WhDzqCBb6rpcAUnqhNtp1VJe7i5hCNL9MZLoRWwbDCbpsVV3EKAzZQf3crJjfyd4mJwekbf7f5KNiCHays3",
  "key14": "5Ymzq75Z5JeAzegdcCSkRGTMkB9g1XMZXKgpCHEeq2sGESUg77xAmHoF2bVwJYHi1Dx3n327GJFfii6iM1J9Gf9e",
  "key15": "ND4xMxq8R4Vxics2vbZKiZBypBwwyKYdmMibyqogUHrvwNc1rU3sd7yZNv1JSP64subj2WCmNeGaKTA6sAMTo2F",
  "key16": "5u6jxviumD7S8gEr5Z7rqeRBsFjMVjaHbuS3C3oi8ff6WpVLFj3UXhWkTV6KMFpdmbEL1UaJ2QLhSVFfam5b2rkV",
  "key17": "4pqm84MsEugMfXX8ETFJc3ALQ4pGEHKX3GDMYi2bHewVzzw33Cry9rc7nM6bN1FoM2jdXqVPANiMSddg8bFT7bNT",
  "key18": "5Qn96FdFwMMetTMRKtG2jnDs7B4N9G9mtbfgw2dXCwDCUM1cLqHQtvTqf41hbRoDeZCLZKKdfoDTJX72S9bYay5e",
  "key19": "eTA5P3McLdqdGfw6vf9KraMV3Fz3dhMFzubooZpoRdbodThTN2NGXkXNdaTF4Ufg3JXKxpynMyfsR4kAVHtPTzE",
  "key20": "4NmBrqGTvMJ9HU9Lyas2mUHsqdkcHzG23LYVvfLjcoZCsvXt5pJADuSrFTQ7KxBEh9nqYTzUkWpbdhmLNMYLZcUh",
  "key21": "4PGw9cVXcWfTw2bcw3vJGv2AY71WFttxpri8SZEhUNx1BGer5d5K5iuvMQeHdMSVYFZLcN7J2uzRk2KjLh4CjXx4",
  "key22": "2hCEGfqDEvxRwZdfsbJ6Eg44oEnojAMsuLaAJBUTTEzF2Txdu2aN6QSyL9Lugm2NQo1hDxykTC2KwTkpzZYb6kx4",
  "key23": "3cRmwnN6mSvtwjnCD7dQ9H5gagMM4TWeFT8hzvqAV7DFrG5yeQvDpsN5JLmvg4uEqw9gPCHXjbUox8jGZYwieRc4",
  "key24": "qAKPETebV6sxpysa3M59e2sybMMZ5ErnEUbotjEYC4VsVhUb8ahUAfenkB2qRVEDsx1QZWTiEV32w8xsYyPwckn",
  "key25": "2Vdm3FjWt3NkSS4kXT6BcDWHDG4ok1ho7K5QSQDbzN4R4snS46ch1wsi5TcPfaDd5w33NYuk5rjfWhwLeQjnAxAt",
  "key26": "uWA5mDz7DJj6pSCQfM4yvtjhAcExAh36E9LJXFn3DjQrF6HwfhkE3PyQgyWJFAKa2tretbttjdYhyMLmzpDkkUk",
  "key27": "2KFPuncSvp6McEB71RQYWYCQYmqXJe5iZ8aNpXtePrrHhwZswjvg2HoUfp6s1BXtQJvE44rE2uTd7GXr4z71DeC2",
  "key28": "5B288FLmzwYcqWKYaEiSwEjdsL1AXjjYjuaY7DGAj7u7fthKQ23epz2xvJeEceWdbszDpgsKQmqMTAYBBNUmMe6h",
  "key29": "3Am69enSeooSF9B4xwBsbfwyvYzVoKdN17jnndCsSugb54DhNXFeeKYuTkQ7LGGL7EhqrzfyH4hYDbfjLiJYpsWw",
  "key30": "2f8umVest2vQ6f7iwMAAAWS2DD1DLsuNppb2tYGueW21uihPFtTyTeUCzCbWs1zUF4BT476cNZfe57JAjShWuj72",
  "key31": "39SpDc8fJKbykXHVdNTigXErzLwp1uuPFFiT9JKEbMLf7C8c6o7L76TbkPwCajgXVcMj4NbmNHucTLH6Di4pFcon",
  "key32": "tSUgFtw5YBPyUqsg8KdhPU8VVRd3X3Cix4NQB4dAS7k7R2G8E2NWi3JTaLKgRDQAe4YXKnif8GPRW3HigdGAkbC",
  "key33": "4w5GHCgLewzn2NporYqpWGAEZRstRXPX8VK1SBXZxk7GWrkkHcHqxSJnFuVJ66ngwkrB81RY4g2p2s8nbE6SxBKZ",
  "key34": "4BndH24Z9bmArAFq5W2MhLfads7SyC24VMmgyvD3VGKSrwz26QE9BtwXWZjFwB9joaiJoU2w2Mh7hAQcqcNsBv7Z",
  "key35": "KPEv2e1Yfi6ZDLVg3eBz43Zevnkvy3ssVuSbzzLRXdDxzMD3ojEM1Hxyy7pdtF4V66Bv4bhwHgcLdLpJGYrqcuS",
  "key36": "5PLGux7Qd53mRSmpxqzXumLBYyTVnfm5odznPGPvsnKGZMghhqG5ZZFiZWS5SfjPNiwQ6TxAZxpbFEDEpAbhBazJ",
  "key37": "5vUKgvnxRJa8CeTkQXxpMU2H673rW3bUvhmNLFygqgXUFUp6L45dMgQpBuAQgt1vYnmZLH8PVpioC29ag6ktoxHX",
  "key38": "2ZziwsrkW7AJBpRrjo8MQ8SMyLsCbSYmCatvnYJB7PW3JT2LsW7QzAe22gv6fQHUcN6NYuVjBJ7mnQjp1RTCb5bk",
  "key39": "2uQ5hkMwtgK6gGSiNVaHuXHAKBjKYDmo4Ap7WYrQNaP9RiXnNMvMHGWgBhwWCArnGNzkVUXDG4p2KEWDF99WcvSF",
  "key40": "3uPKW4sbQfsBaPK8jBwzuNX9CBta6QEsVST3hUZWpyfKDRMkzwnekkERTFdqLBnduTSJmptdnmvtP1izZ6keBsCS",
  "key41": "5W7K75K4jiqJ3rvWPXiK4wej8pMv8MHidTeyMe8HFwFNe8vgr77RDau8kocFZk3fEZQuzeLaeFYHLiyRJJPKq1fj",
  "key42": "2ecHtUdzCrPf563Ue9yCMnYgBkWQidgDJcXQDiqhH99DAWZsBR2UB26ntsVA56k8R65JDBR4Hk96CArdz3qceQE",
  "key43": "3NcyYfgUt88EUGp92tVwwqHiFfHi6rPWBCrjR44qjXHQoJTLccF1r6AxUaATFm8jmSgEYF1Epv3W5HeTMRFvjECr",
  "key44": "3vEtXVo4ai5zeXn6iSgTDPpCM5YLgsWkvr3YDFSvfErgA2AhmWYWRM2ip4hFzh821sxKmPKXZe879VetddHibdAH",
  "key45": "4rQQvhQRjJYFhdYy6vFcj7XcGr3rZT6vEohRi7BziXw7gdbopgcn7mtTZyGPpAC62sqVfrQtzZzpPBF2HsfTBndW",
  "key46": "537kBDpeY3Hb74aCw5VNLYcC5tZQVmQKQ7i9c9VUoeDHySLgux44zxboaCLwAcCsh9xV1Q1UNYwdUXLGRqjzsqTr"
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
