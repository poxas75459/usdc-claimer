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
    "5TGufpQFJhX7Ncqod33xTLeaijQMbYWUm1DSjcMouvQMNc2hQmpZnrqnzUUEVph3ZvZVzsri8Ed1BE66fJHPvk6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L8gWSjhtGmsbxidwVucU1zy12EiAUpvYZN8eWGguapW65MygvR8G4WEBSwdwAbovaNJTGppbaZrdAufA8eMHtze",
  "key1": "2onHCV9LUM6fDUeK3B6JLH5TGZgksAkkSny5eyA1aL2jDAR8Ec3L8GrfYiDqxCfgxYAfBmn4vQ59FYqeg764nBMn",
  "key2": "57LPJYPEvpnbD4HDWFjjBk6gQR9YoQAGY9bzPvDp43G4G3dsh2dXeu1vPAaZTF45VUxEtyKRPstiK7zHcJpxBv46",
  "key3": "42zzqjohbGqz1Q3wrfjqsJYdnjP4gEUtDNx4oPDHTRJfBwibP658KJdyt8RiHWTNjGNU7H9jH5m9GbzPPq5SXRue",
  "key4": "4J32UMNA5KJFoQg8Pac8JeNgDYFoW4UeuPtnCx9KHvngfbMGDVQQuU2fXt1xcZE3mEZzpXtoof7is6MmvEzCZ7fN",
  "key5": "cayRvjvN3WDbJBwiVQnGxC8CWHpoZwvqJkwjXtQXS9T6a5c2SpqEHGR4G8hrb9Gy5jgkfJ26LxQusa3ZjCMYGAo",
  "key6": "29ngednHPUtzruTgu5xTvtNzqcZvRpFHgJMZWtQYsnuoh2JPrJFXJSppysbYetbhgv7mbgMini5q52KzjksehQGM",
  "key7": "5XnK14tYevp6v9JbnmBR1JGb5YUgGmTVp38xidRmcn46ETzy2fPkKuL2b8WVpKNrCmJPvV5NKarMUJ7GruNcWxgh",
  "key8": "YcKi4oyVo8Xjy5fiFkNfCSwn8QkwH1usGe15btphGEgNmnLX6RNLJeHSyuzegXqD3kFkzrdZG4vS5h76N8DvGx1",
  "key9": "4ZJgU9vyBrcefWmxz52V7Ja9TLcKziZKYJozA2ioUErnQYUY9wZryrK4awCpHt4WMdg9Xy8ReiLtt9d8z7YyCrvU",
  "key10": "3XMrS4hxrR1431Puzu3fS8ABa8szK7YkLCE4GEUvcVo8zgBMqnmFLd7n66Tvz3bvbYYKxy6ahtAhLKrVLerDJBMH",
  "key11": "4ZL1PeK8RsfAFzti7SuMEGHA3CTLWiDRWLEpH2H6He2JJPv5B4yfMCkqMQDy4DUe9HhW3fuvyZNDU8YWNi5cyyGW",
  "key12": "35XGa1k8qgPM7SJu3V9gXnXRRBErCauGiNSfy4cMCefZvujDYY2SVAbEbyqKWezGA57JkRvgvFVSCNGkNzA2caXX",
  "key13": "4wNCU3tGgGg5e66Jqu873gnLfsRnXD5qyk7mWdzQHuwD58GVNeuoAKL7rGGuwBT6VfzSGM1YasXXtmTj7qUVGzzU",
  "key14": "4EZwZnSYxevrmNZpwqLwgTYgEXzkQBtF7CAc3TnLnfAWdktVZsuGLUScuKSbsATVjJN6jtXNthYUgAqysNkR1Uxq",
  "key15": "4ujvwwiaZJULA9s3Z1iXAsjpkaS2kWGSWTiauzvriR3qdJzeNR1d1aiqRPeqk4he1DhdPF8Bv6yzFGsVCoYPUdep",
  "key16": "4RvkUiiUV6pxfHLHPYzyeL9eqii6BYcV99WEZc53PJr2CsQWgZDBbzPSpuVcfA8cXJ8YE58X7drrwqnGtVernNbx",
  "key17": "3qJC4wkiqRn7bDMcq6sHZmTyvZdbe8cGRkvcXMVXVHFPbiRdJL9fnCL4RkWmGTsDTBpXJQtMy1oUVjZvnkdmrtSQ",
  "key18": "62YavpTrrwzT3uC3eEq6sHg8u2aU9mYhTHwnXA8oDDcTThJcjnwkFMsbrZrV7Q8BWZFezUqBb9CESYVvzLLgdf7d",
  "key19": "36vqFkdbHBv3puxgnWeKGz4rgQddPpbTJBQuQHhvqgZym8qNChY4N3todhiXFMKoJBuLG2dxt1nKrqeUmY8Hc1x2",
  "key20": "419BvU8EyTkXStbcijPhqVRC1uLn3fJhkw5A5EgMAx8sn2xt7iZAP1yDrb191MyjGmkoFsm2QX1y6LNZKsDbDPZE",
  "key21": "pwBmUzKtzr68DNFkVQyGDGyynJeTTZczJQ5eXtGUS5Dw9oCCxewwoy6aD16iX12QN2k3QUG3pWATWk3fa2orrET",
  "key22": "y2cpToADi3FTyeBBj66zdEJUXWgaJ33xXURzvXZHxGbTRqv6ZCrt4Qu6XNMfv9d9ZKABZFLxKkvJQsZbswuB2ve",
  "key23": "62SfNtTf1sLhtgacAMLMAFGLN3bPGmgua5F6Bzpwn31iD5sdoADc85svavF8J2HFQ9RWdNQUW99h1hMisZ2YbED8",
  "key24": "4ydQAkNUS1MgRVcYiqPGB5KJrJPpSwEUjW4h9XCDdSv1svXefPrJ42FuuBBhwbseFEB2HJGWasBeZez3j3vyb6nN",
  "key25": "4c1SkXmbfCM6P3GZjpZ8s8GBWF116LAazgsQfcZ4ff9dhuUNwVJMALvyohmTiFRPioSeUTR1dkLWSNwf5ZE7aBQa",
  "key26": "52Uhq8jtTHiGdFx9w4JevrrwZevEzZ6ffvSHgyxVZWNEy7mUVbsCBhXajKtUSRRQJhiNwn8QW19kbPDKS7eRegv9",
  "key27": "51qSSxFcmsU1u8cpDUkwfx7nmj8JGTbf7raACbA7RQ96aGFPf9LxY8oeac1pmg9CEMx7qPPyBRtjytyJXRpnKQmY",
  "key28": "3Rb1wbgStzyQWHUzrfyStrZyZnKizuKtUPZTnXKNHNKDyuxrJjakUnw3y6f936ZgS8XxtQLjHkdCLVUXz1NeHcyJ",
  "key29": "4pR8VnfBdVDRYR6X5HtgiqsXYqLxvxZSuVNvN8fWvpxc5Woqher4QeN1CMV7t8WCX9xmASYLJpUAkuRQN8zi5dL5",
  "key30": "2Tq84iY7GeKYM7b13cM87uCoaDYLNoC1Z1E2Q2XRMCvbWR6biMNUdS4AZ1AQMuuacB2pdod76CWVQzDiZi8LMks",
  "key31": "4ZCU5ejbCSiPoGBJL9DmNLcPevWKzP5FF4xxKUM5RNfY8tz8UVE7zviDgz2NDCmj8eudGXZoxd78Zs5ubSPpR63n",
  "key32": "3q3s8PFfQJ7nsarWd9VzWudkfyfk7wsYPZWSAQ2c57LGAFZYeJFeM8nweSn85AvQ6VmPSdbEbF6hDrU6pq8u22UH",
  "key33": "2K7p89PoNkz7BDomDtZfWpzzUyNQT8SeKrZr8vKPUJJKovpkPTGW6uxe4EPgFdNGMRx7Ln9xeM9pUCyuyEdDwCvN",
  "key34": "3QBRB4FRWLQFps4xDb6DvCDBrU6uouteTRxPs28tN5ghKxXWQ7bmzj72LeMnkCPD1heXbYkXUnDxZ3VQbbCrDr3",
  "key35": "3WnkRLTKWzaiCmd1y8P5RAaMWYmdJtKCuE6DpVD2TwsfJjvzV8Y1185hpbLbM5ma1AfohVVtWC8ae6acNYET6A6h",
  "key36": "52LMbV8y38jWXkVkMdc4fZ29nErkgD15wo773SZt5hUc4RvFYwiL4CKpsxx6Eoy1WLGZotD1mj1RcrfxoxztNu7B",
  "key37": "36w7EVGzR2B8dfquKeGau6rYp1QCmkA7r9DRVjU4d5YHGEoxcNcJ77wcaybikPPx1pNS6VHesvsGo7YyBC7BLEs6",
  "key38": "3R4mgFyQgdraoxEkcZmB4vwqsvaj28AqKSYsYTAkhJeC1VWYt2bqCXxJV8KGeocywDNp4aT45uMnG4rUHUeyfA4v",
  "key39": "4RedWSoaLkbRa868yCd4vjPz5XE48fNkVeM1UXpRS7jtHVYAwRYyjbaWF6gKkypDc6iJ79icscoM8dc8Ms92SG8g",
  "key40": "355p4gu2ch64ys7Y3FvFmfpFsnhNVxSRto6uoBFPv2Q4tnzTLYhZ3BpUXYCXvsJL7vnTKqWxaYMRjhrRxy8QUmHo",
  "key41": "43nNBc1vKYqHA4bdq6cpf4EEnbvPbZDXD7yCa91oubwNn3hrDAtnHLbPTgptBejY1Wz5fi4SNeVwQcYMSwbN4beH",
  "key42": "5dwcyFX51MM6HbrKUfoMnFndwUFgVk8PAVWQXRqFQ3UKck9xRZzRFJhe5gQrqmi84yW5C2aEx6WybG5TTJkCi5z5",
  "key43": "5sBfxV8ahLTLwU2KVyJa9yP1rJZ7YNPh1Bwduia1jfZAmqTPyPxsNcQEKPM1KYcFoXZyVFiKkp2XgxcUxF12yU5h",
  "key44": "4pgsJtZLPgZNMD317yphs95y9qKjLpQWF4kosh1G4TmywxhVnPU5VfYH3Ywvi48t9WitToNrwUe1VPucS8hQparC",
  "key45": "4r11e6R3FqKBEZwSZamuMBYeWsCXztCWZJcNmRhNX53HNhVsNicy4zxNJnQofA5Z1Uwkxtzv1wpZi1nf45SNU6hR"
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
