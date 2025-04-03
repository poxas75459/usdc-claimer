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
    "2xr4A8QFhUo3SzLVAscaJvLy2DPoY6a1rEiDNXYAfmwrZ8MRoP9rfsuybxxdoz6cwAZtXwDeprb8TidJzBHh7BVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xbs2irg4YTbXR3aWHRWS8n3qQqah6nsjh8JoZYNHLRfg42BdanJHWsKfKbbhLZjJvrAuNBPiYCJXyffXc47yqRZ",
  "key1": "2WcAasP33SMjtAPWn6NvYcRNMKyuuAKjbKQsNFswMyhipwTSU76BNSypbrJ7HcZR87SJBg5RRrqpL2YpSPeKJqjb",
  "key2": "2ormSCm2Ac9zGrR8ZE4JY61R8dieBiXdsKz2V6d3iWmQwV2uZUZadsaNPjaB66UyBTeTd5LCkNM1B3vYvGJFtTS",
  "key3": "5RtorYBXzimD73qppioW6NtXn6mF2J7ygJnXERdprr29Z7nQaFskyrrzuc8moA3tzp8zMnrLpV62mrbEHFYzni6J",
  "key4": "k21MctDxWiwTNP1XY6RAT3XAR4ukUj785sA96NnsGn1MBb8GT92eCPQdwvZDM5xjWidstHQeZNKiqZmScFAiyRQ",
  "key5": "4ZG2oAVgWgZGWkPtJyH7NNCD465PRUyK91ukxokq3GeXXxGQkTChpp2p6HYeYFdQm7fLUu2gCd8mgkbhidVmq2TZ",
  "key6": "LwHdi3knSvuCVk9XugHmQ6GM4SkKnLhSFccjAqrzymVbcWvPGkPjr5wVqgKkjRhfzwP4ksLfQwVQgecRawZBZ4f",
  "key7": "63uZ6vZv6boStJbDdtWKgGxyMYZ3coaZpXa7RCUzi39Y7jMzouB68szo7Kv6178i19wpSXSjSMTYxLWoRLs1JRCm",
  "key8": "5Ax5B6QMZqfHZudawbkRFSzieEVQLZhB8kx25nFzNbfDgjZQx7Pf7ccBSMSu4DE8wWmpEEUjLoEeU8rw9w1YA9qE",
  "key9": "58cg1CSgATRBLygbJjErRwtYiSB4pWDTryAN4pTDgPUvQJdegviijWLodY1VgW5QsWvWD81FeBj5WHWfge7Jt8JE",
  "key10": "3QVWitqM9xbvXHae1MNsxKqEqiWnntAWo2Sg9EBichA9crirLK2u5qzDADKa2wXuqVYpaR7V8XckheAr9wo4ayww",
  "key11": "PaZwfG2GZKA1dmZKs2cdRGM552rjoxmLgUTpXtqFn27qHhggxeSyyAecG9CbagdnF5T2xx8Gfzj1K9LcptUny5Y",
  "key12": "25x1t61nN4i1SmHkzGn4pyqg8RTxNtDBRSYS4U1UTFYeqcwo2gyFb4mxPyC1xFgMhDPkyZk4XPeQWDZna3X9t5VU",
  "key13": "SuiqhTVBg8smVbLDdgYN2Q3FY9enDrxzUGHfXaN3MfPENM8iwt8qxt5Uk6cqvqM3k1jkjfnzmvSKqJ8iuy7zhnt",
  "key14": "5DYary3NMMHWK9ykr3Jogym2h84k2SHqnFdxAw2yAo7UJGVRQCzGBS5LRGkWXY4mmEDpk1cLXY2YU1Jnbdm3wKcZ",
  "key15": "JqhBhe1jaHNs2Lu9YK6azZ8wCCtyvaBFtasiyups5VMyQRb4GE6oXnbmtxXG3b3WSmJrDpyTWAY6CsZb2z2G395",
  "key16": "3qZMnCndHxBSyishZ1QD6KbzhL5HfSEJSXkZNHcTL38x62TrodSC33ajtfj74Ek6HhLXF6nWHue2JG7AVhnEuTMo",
  "key17": "zPEGHxmyEA7XPT85KxiPgKeEsptEjvkQjdZaFKdsj7MBubHhWgRNFdnZVKjgPYT3mMhxuq4pq9NUQF5DF7ny46D",
  "key18": "5wyeuv9bzv5b9Xe3CJzfbNpmqdLs1ms8qrSkVdCP3XPNXJhnLU6tWp84Tk7h6BuiYt2sM1H1Jr82VjeXfxkExUXL",
  "key19": "4WYVY8WyJuCQwFy1zoXy23MsAsnvnNtHeqLrcoBCgpPFgyezhGWfzMWLPAVrwiZ7KbewrNHP2N7KgQh2jEJmdbvM",
  "key20": "2C6SEkrN8hyJMDYW2CN36oHTdr3odekwggYbgByk3ZnCV91AteWndH1Kjfto4cuF2SrobjSunjjXkEtKpLq3o1kb",
  "key21": "ARxpcgSCjBxzZyjujew5VLQpyYAmct9yv9T1tAJPFL4PtWM9KKHGLJxp8wAPtuUrDoAnpNAMQZwnSNKaUC21iMX",
  "key22": "4fkhz1yLb1xJQ1ixDgLkPgodFsj4jbCg6BQHM4sAXD1V1MJQzPot9SPnkbxwBe7xt1cjdHcbbnvoDwUpXSnnT7Sh",
  "key23": "5wgsLVVYZeXgQhkWqFA1AdA3r1E2XU6RR3k16zwdfJhM71E6vve4RwLb3KWnwNYX1qbDckBeb5sZDeMEo7Zq2qkJ",
  "key24": "63k5aR516anXhbFrfNZaVKUpHt4H41vB5sTujQWc4t5eoMagJWvFNhNdKXaXXXByDv2jhjNddFy5bzxqYmCoquvb",
  "key25": "QHY2QJ5UW1i54CrBqw1Ji7ZEct75L2Lz29QsQMLEHQMKowRvjbWKkTG91cH6V5EyG7n7GYFZvPNQKcZnro17Rt9",
  "key26": "2vc7HATs4THDQf63ehewrvfLXBZDLaqzffSypinvgTgfd5HGh1VsT6MDqQjRM7MyoGohL3jHy6ajj8JyztB9NwTt",
  "key27": "2BDwYvXVCnkKKBNTaAY6VVk4rf2aswjosettYJrJpQKQUNiEif3xPXywSF8DYU5HS8n5N6cDAcEegqpGZN8vrH4m",
  "key28": "5v6pcMb3xCh2pD3MT517XQTCtsLfYwvzmuB94wKu7hbyDMJ8MykUAD2tCUwc9r228216iizLBarpaPpq8tY39foG",
  "key29": "4BugoyPn7Y7CLR8Jc9zc8ViRJWP2XXBS7Mj5PEcRucGRg8FttvkMWrPmfmUQt2FTX4oZVUGrAL25749SXD9UvKKq",
  "key30": "2keyak2f5sVhXs3NQE1LGYbX9SFb66w46QvvRkKHpSbWMAyDHSMfix2Wedw9nwD3twVaCgKBvAWMsjeyF2TcsE6T",
  "key31": "5nSe16wLpvoyZPZ9Ge22Jt2cLL9WiFfDekTfneQVSyJUMV7fXB9i8RxZV8CbH35JLesbkzVLqJW2JTqmyjiLyTiR",
  "key32": "2GbLRjnnfbE52KVD62ZpNoxKmhnFxawPadcSesnSUxUTPcic3YN2J59YVVUq92q9EkPLjenYwnnt2L8jncZiffL2",
  "key33": "5AUsQCVhZQJAW4ZmJnnhGoFUwoFRhFr6ZqAz5UWQhpP4rogJCDE8ULf7vjkWrdaYSzgDB4ZBF8QxWkT531F1y14b",
  "key34": "636rs9Da8uC68UvhrQ7uGyVmrGj9Dm5jvg5SWXZvcQrBGjJGx7fNUvgR7F2iXgs2b5VDS3N8gbatmwSYHGPaXpWJ",
  "key35": "5JmMvb7khkpBczsWpN2PyhZEJ3XHuUuG7G34JScNb8K21Ab3gCAySSArMfSy2ofXkAbpAB2d8LkxmvicGpD5MV1Z"
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
