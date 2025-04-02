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
    "66MfURhrBm4te1Wx5aJ5jSp7fxCZqua5Q2kAve7DDm72Qk574UgjVZJZNmFqXfTdbRKghLqELLnsqBfYBZz3QM1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jhVYLeCFLPBdBUxEprQPKX4MUE61SYbMT6hJsHeX8X5r9GLZK9BVt1yYzBpJWSFJfyaAVWke3dD3S6FwrE9Ygm1",
  "key1": "5DPFA6qNhK9LYj8Wx88ARnHyhmmxpuLt3t1pvUBok4NNU25BXr9YEHyDtujPASHGQ9RLdyGsg5oV1RyuPJHiyqeG",
  "key2": "4BDbgsaoefmCmJpvhgxoRxKRL7vbzZaJnkJNGFw7YhKLFMUX9Xiz9ieC7GQfiJN823iANWdtmbkX7Ee3T95CD9mF",
  "key3": "2E5VhehdUHiAcEY48e6T5ZkFMWmaT4y2umesAdCoFN1VZDjYW3o58RKrwr5evcDEktJhyQhEJWx7JZuf3DTwSfmh",
  "key4": "4ETApzx1ZK67MrqLt52Q45sfhx1YqFVxCjQo2XCm15YT5C6n2mJWkyhWkDWGAQuAzDykFSMSrvg8ku9Ew3uSNkVM",
  "key5": "2ALLekYX9doMmSUCjGYpPJwJkw6cXfPAZsnZECks9QMxHtevYZPtpaJXutDjY5N96eTJnenxpzj4vDXmr2Ux11ZY",
  "key6": "4aRq6iGwdAMdxStS8eABeHqYkW5jMK1BCr88x7Kd2iTV87Ugy9bUw7e5mZwmnVeFL439wdNe9QfbDgTaNzaS1S35",
  "key7": "2fsQJfPvRWtayzFpp8BauetN35QbSVsjruXuZj8q4ygBmrZ31aNE6CNrWknA6gnxsX6S2wQwS4Hvn9MTRnFvoa5U",
  "key8": "5DE473PUn7FbQxPQ2d8sUtsL9Sb3fUSzsrKV5xnsGzuekUtqH9sCnv28S1C8yyxcZgPcjjd2JjRfJsdTwjYLvjLe",
  "key9": "5zmV3te3eGhvW8MjWVmujX8M8gNFJaP9j7vrrQwmE6sePY2SEmURkqDE7Jk2PeY63AGGajPoxY71JU2KYobh6f6X",
  "key10": "3pUM1qsZXbe2wmKJrdSm8teJCSbunc1v5FFBBXrJAoVrWAvbhmzSh7VvNWiTUHdwLQBtd6BYZpVamhjFr2WGNPRW",
  "key11": "2CU2dDY3j2oHQX8cCUvWr34daTUVU7nmT379h6BQoQJzFVXDzZ4LJ2oh5Cxm7B9aLwYUi2DDsKZgo1THVxCsKtYq",
  "key12": "Pyuio4YJRWMSaPWH7zd79tiYjFRwHBE294Cv8zvv5vmESo7VtuJYzFsMYNtJXfwHiCrWwgGKV4PuFDMAhREZBSv",
  "key13": "5ecWR2ppBmM2G8LeLUB3AZLWYFvSeC7ZaBkWVxJQfF9jtfRTW8aLFxez429HGqgMY6efwdioHjbyhtVTknDb4U4J",
  "key14": "4zRi1Xw9fcsimvhg9p238uSSfWCaPdhe7QET3G2hGjwndVZJPrKMQnBBpdXcYYqfLv9jajEkwqvGuVzBTUEfZqqd",
  "key15": "3s3Me7hPmMr7v3odrBrzGjxoF9tBr5y8XuG883HKkEGzyNVkuZK2EzrZvBU7q3nYPogg53PxYv62dKCe51oS16Vp",
  "key16": "4NxuiVZdbCm1qHEc8N72VZzCDYQTbrhQiZDzTNV4FSxrC8ccg9ZLCxCGfkiNmrqMpNJps4Pq6pvLjRPyG6zRoea2",
  "key17": "3jUnHbe1y1XjWvxgVFtJV1jurNo9n673Xhh1jsKoByKKCnpNU4sK5XNSPRasdBsDTUnrZrc36R8DgxMzrakUToWD",
  "key18": "2VrgLaZMwjmx1DHdpa8BajNnMNaCJxXnWuKsMx58KnCDLxpoYW4QmaCCcNwE1kqQ1rGCNcYMUzvuJgijpimNceys",
  "key19": "4XpkThh7BsR2AxdMjSjUm6KUtVhB5pfDLCL7ybWVfco81jVjoUPXzRsLSAJG4gtjLLBbVLSjYKP7h1zRk4CaMAMU",
  "key20": "FBK5GWTNQEpxVvVFrZp2mCrBMkKTbM86wxVozRRcj1rm6VyKH8kYoxskvFkrjYnQfWrixXp1LguN8NQVkvRucfU",
  "key21": "4RcuddJdvfRzZWYFpdZbwaq7HuVQD2FGXWUSp5sATxVvgAhnP5NEnQsUMNsN5bqzHfJBJJNSeD9nDH4rvcovft7F",
  "key22": "vKiPpiZ4ARjnn75ozwenPsdUxzhp7UW5HVmHCuanKsdK4CMxMjxCVvK4wj9uhWe8iRqvuXyf3ma32w4hfeu3tzR",
  "key23": "3Qre2M7zDPo71JYredhsLDwBt1toTLLaBmfbisW5HeyNCWKi8kmsbQmkD9n13nvma1dnJe48peELBTua7kRTWauD",
  "key24": "3C8XTCeRojGnEygnTYptjntoTK1E8j1KfqrZpYy8unKU2mVC8Stzm7L1YKwcC5UfsPHxXEMhGayGas2cmG2MdoQQ",
  "key25": "31xNX8uFUwehjvtqEDVAZqqmd1hvyVtWNJZwZ7XFvDKtJHmvsKjz4M37xY8U7wmDvvnmLbS77aiRNyQtainws9r9",
  "key26": "2G9orVoAaoGiUJrkSuRdXfNZTee7zCEc23aUNkRLRAeViiVVfe5R2yTwMfukmNLwYDikPV3QZic2brRRXbR2pqoj",
  "key27": "4Kp4KN6fj5JxadhCvk4pvqB4aiHfurYLASFNchsMn3x9KMb9CgJXReL9Nn3BvPtderYTyB23rw1Ei71QtD4qmdBn",
  "key28": "ufcX6JpkH5b1ogVbapufGpkXvCKCBgBu6KMr7m68AEtgbGK1jZETdY5x1gYJooP4d4t3ad7p7XroHJ67BmSbCgh",
  "key29": "qjRWKx9m8HMNTw8G1xmWwrVSrJ87DVjWWes4Ro4LSuRgUUE6XLPKUCWLfPc7Wb6c3uPqxi3EGK4HN2Mb5kTrzuQ",
  "key30": "4Qk1pSLjD7FfmBAp4bY15T8oKryoyduFBfr6EwT4Bp5hiDhKvUqicvkLs4Uvx5TTc3Bw2YpM6ybQJjtAAJ1Wve9X",
  "key31": "bhDBJQS9keYMU6FTMJDwL2ooabPHJru7qNGj6j3EudNFKrdy2BTxsW1duuusWYbs9PY7XWQoP55VNzvKpMrT8RD",
  "key32": "4crwERQUpWa8otxZzbSxudbwVjGsLhARyRurQVYGRB2ocRKqJ86VRdPGs53hFbsz5eagR7DDXs35K7bu2ShuozBQ",
  "key33": "2NX5hLidtn2MFkP82xbhNfCGYtG8kVGWrFrt4CnAbvj6TAGRuTfLCKdqpirn9qdicTA6MnDuh9kG71YK55cwNgC8",
  "key34": "393bg5dAMwTofg5bQb2iZ8ZPpPADzNz5sp67m6tCfdDRTjvJChf4E2W2fZoqiVKbokPwSNqQ3BRY2GirfaZbRmPk",
  "key35": "3bg11J1dk83VZNAFuEs1QvUtQcgwC8VU2SCVEfAQ8gK29CTGTNBtDZTeRwjMhEvpjmTwuyKjkt7eczDVu9qUHnwG",
  "key36": "4bMYdCUpoTpd4xJBk4ZXngYKG322z1FrqC6X8tLNvyvwywRux5YWrMsgtAffVgpNtr1pPt5znurmDGQLf7QeXumE",
  "key37": "3ibDM5337XHQeWpZz4DVxyEgEwsrR6GJnNak9CdaHwDJMUxEGKkGgYqxz6soGcRvbsJAkzQb3uQuGZAq5M1Nm3HE",
  "key38": "3jRqMpNgy4Pcck73SjR2Pn234cP8X91YbNVgUN3c9AJB8aovmHXKk9kSQhYxFhiVifbA8ZRx5DxK224jZ6gqrapS",
  "key39": "4aFyGXC8qQgZXDRL2jqkL3ogtfwrDJiJEWnwUtKbAnW3jYfsd8gxiiyFxs6XFQ1qv4Abit1HiEuW81Jpjiy9wRpK",
  "key40": "3ZjY4DmJV4marHFrndEZXKv2Vtqy17xsnnMXGRcPun6t7iRKTiaX1sY5P93mq5StcxUAPpStknaEFdYWaFTkoWUQ",
  "key41": "GgFUkFZgn4CkB4Sj1tG1KBqUeXiVcVbmPKPMEiqrBRmX1yG3cV7WFsphA7DXKU4epbkfiuSDrGRMDH9u9agtjvy",
  "key42": "4bGo9nBmPhwUHhxGFBA8bHDL9vrb5yxR11ZjWNxpi34kjeuRCB3oupmyUdeF1oTu3DmApWaDrt6RD6Dh4aJBvoYB",
  "key43": "3RXiDxb9wyCNbdYb8G5JoAwBNSwJDTqrkGyJtoPf3MFpcZEchERtZvkjdytQ6h6wepBAG12Tw6Q7GStMLYuHPc4N",
  "key44": "4xLD763TXKXFvQmBzY3cWVy1Jzp3bucs3TcRauxPwjRFAP1izfsDeAXVmx7s3hnNGi7Wtn1JwrGZbFGNWUzC85sj",
  "key45": "3XPt14w7DBWzPCeD1KH9Xxe1XNAVoWSMPcQi6dBexxtNBSMp2qufp5ftJ93QcbCQtzwHLJb4b71SCrzJWKk2Q8KA",
  "key46": "mZpbnijLm17Vxkb9pKRBZwuBaoAb7MDp53Fpfx57D2cqoHZzKiDARHAQ1pjnfMgr1TtHtR498mybvehtiWsBmhZ",
  "key47": "32XiEJK5DgifQ5hcQ3G4j8qr9EiYqkvGfi3UqUYf8ZeHCNMok8dM38sHa3utSmZ1ZBwLUZidUCZDgbDoJXbSTBNh",
  "key48": "3AMVqQoiy83tm1PzXAaxuAPDYNHcd8FAPZVKB1vBDqousStLktUZu5oA2VYvnHmbxH693MLeedUvMw2D7hm24m4y"
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
