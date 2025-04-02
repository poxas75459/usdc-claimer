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
    "5aEkbjvmRtTTuEoGMBEYRnRciAwEH7LBmMRky5aoYuKK8fz1YBEKeZMjKvTLzGVKUubm1rG9o9gWqYFid7tjcFJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fnd4s8DaEFTv2ZRW7jKf7Yv963Ng6n3NwiyxA36kGqLzbfjR3cgGZaQx1DKj91CA4QaXp8QcTSc4cnzXF9Bg5di",
  "key1": "5TmhxAqpw13vEJGFA6tvHzUdMQrdjb3CnPMCevhWiCXK2URB8Zf7bqUATfpiN2YwomUJVM2VF8rmHqzMBYoNd3iP",
  "key2": "4rDFCgm2QaaLB1Yr1tVjNPS7NDgGpBSoVch5vdpPmLMYqam3LYPvPSR7SVXqZhxS5q7kGT5TcAPqZZtySra1Hdbp",
  "key3": "23YMR3d7ns3nVEbkp3r1mwD2A5jcYB2aHDK47K8Z4zMGhJ7CLkvs6cZrZxk1XBs39QBuox1jWYYCrRcbBzPuHERC",
  "key4": "9Roo3S2UJPqh7qEQdzW2gHsmo5akpv7Bx65F2Q5QhaxF6LNpfEje6d8HhkqVKmqNDbGvoPVfBnWX8Jdo6E3mKJC",
  "key5": "4G1DDfY7KZzMto6PYT3dXe3M5Z8byeS64PypJTWYWFP4CcRJuKbcD5L2JW7dJ3jPBGNnBxTAmH4vsrc5M6cAfMfy",
  "key6": "5voNwQ7YdspyWnoLikYcPGHEy9xJx8jq5HCYnBLBmAopQN15cFP1UYPfqxF687yo9zFKMrD4FaMVB6cqeMA5FQjM",
  "key7": "5STTDsRBgkmxLXM16GNZvk23urBzQguaGk9YeuyHTvWVxzgNjxLcnuJvUtx99DK4FqN1LmnpVvp3RQ3YHgMpsTWD",
  "key8": "51FhiAnx9Ee1byqE3RpScMnZPP5zASFd83XTL8fyttmrMK5vrfmeHvKEDLrZkivvCnijCNy8iXTUwF6znM6Anb6o",
  "key9": "4UQH3rH26GjAF9yvDe1Z8cGeGqTLJdLhiSJw3cFMEzDY5xhqfNfVCwVn8LSk1Kxe3sDVd7EnuAeZkqa54cSr4b3g",
  "key10": "4pKJ35AYoC73NN8TS6ScHd8ZerAUnSqegAwCm7SD633gNtdKsvNevQHJvtMWyy6XQQMD9sChqDaEoG1Yideg9pVE",
  "key11": "4p17aH4pwPWsdo9zT5MSSqbCkkGBX2yhi4hUucYF3z2aA4JTFbxBAK9nJtUaMmXrvB7V5sEijMzWZX493x7ap9Hk",
  "key12": "3qZRYg6N4GbUc2JbaukofL94KnGxbMxmhFej4DFrNjE2pqNYVrV57zWWwMWq8g8sARtRFjmPvr9Aa6XEbtBPwM9y",
  "key13": "yC3nc58xYSN5fSyLjbFuqQqF1YBasrf2TCz3xxG3FVVM5bvEEk5puunrV15nYDviEdZqddSEzN2oMChB4up6gys",
  "key14": "4zmywCisW3Kvgj6KF1DWGnbGb1ktsJhAsp11VjFzisGhr8hXhi7FmF4KCFFTKkCKWqvYaFmyhsYFcs2wcRJNVRCG",
  "key15": "66ufCGVras5qcg6tAjXG24PdUjbFFBLUbkaRQHsJBeEDSj8WdWdJFoCMjf36HzmRuU3iuTRcDtDfEggW1ECeGJ7t",
  "key16": "4ZDrKzVCGhNJfv9bahnVkbMfwXhVkTLUx5AmSxzVAXLigKjKkGacR37jitCe5Pg8i4HhnSBkMARuisK9ENPzPu3h",
  "key17": "4fn48rf8Wo8cfzvSng2qH7VbFqwLqV6d126fyWxjZRybvCZV91VFwisUXsbKkeULcWL9SBBLPsZYN33B59KSwadh",
  "key18": "xmVWDnTTQpEqFw6c49oeyL6xqJoMk8T4dxeKcygNCYCm8noBSqccvbS5G4HxQiwTQtk7aE4AU1EZPSZCyCxCJAU",
  "key19": "48JMRZsQ3NmySvYDKkw6rhuizAWmgZcSSAN8JiqThh9e67PZr7ReDrUQPAz7cM4Re2EzkuktXt4daKQdbBZpvPGN",
  "key20": "428LQGdsNULVAVCSERfPSr4PY7bs6dPxa2i9CYwGdVsSJuJJGbdtiFR3BvezteHEnvUVniHDhDJwNvNEZFGMcQCJ",
  "key21": "5h729wTFRe1MFesazop9nu8x22xN7DSxvgbEHuhCyiRQgLBajQ3vSBWTDfpnJupyf5hwvC4ECJNxN2sgiWBuhUeg",
  "key22": "M8eFMdU5S3C5LtcdNHC4Dc4wMsYGnJ5PZqZNmivyxdtQY7vK9BJsygyjqCWedLdpaT5CKtTeqPgAuULc1VzfnnU",
  "key23": "4ih5pstsLs3SjBHtgq7rFW3PBJisAJgaCnnj1uYHNM6GVQitQLx3a8wnCqSCr5J54sRcnM4hvnHUamxfSdoAhVZm",
  "key24": "4z2DHxgWw3moxRW3135BfYQaQHznHZVxZBTspi4jW4PGnkFDfDJkpEcAcPeRRWY9bK1Dev9nc75U2zpoZwfNYDvh",
  "key25": "5qij8AnXFpTjXYqvQbY1qTb3AZJUh1L3smwF4dMaB7B2RkXS51kmeCoVrk8hEhjPevqRDz7dexQvvPsysLmsTxfJ",
  "key26": "3VXmNZsGdpwxWSM5FyBkT5eyEdTFZmX4vZyySGMJEHaNmhmKF9e179YNBt6cgaYbXPxoMQwxq5uvDda9PydRbqb8",
  "key27": "ATGLWneWtu4KBT1tYYXp45YVLxXJ6iUS1vyikpaNoYJPexiGgoMhNmCycLDVHkYy77dL4iQZTHHm3H9gncE3mDT",
  "key28": "kLMdQxEMpy6Stxufr9SXyYrYpDDC2shvGGYUaLAvrownLnsdJWDorpGgmwKCjFmc5fnWcFMtW6XAyjd63Jxf1ZX",
  "key29": "t3xRLLA9btTSLvrvC31T2wiTe7bk6W57QLtpJA47aYgxFpdPp7RGAgxCUZiamKG7XF7KrnJDaTkSxKesgNCrtML",
  "key30": "5vt7sP2S1Fj3gPKnTFDu3jmg6DU5ET3eQrrAL3MYGmUEBBS2sQZWsqZ4i1HKwvuVSCeTyUC2CxeJGiJ3wSki1pKN",
  "key31": "26bXea6eHHPsJ22cchVfRebzQRpcfyAQ4StfCTvc8cBQ4UcBLnMz5g6VmrMrGZ2w7SEsiNa7ZtqB1tKxSURmsBTK",
  "key32": "3MCUsWbGcVkY1Yppj8J8jWAQePHt77bDEdZZAJRkXUZ6tDGMuztwBD7CQfSRbfVYhuXYw5EMYQsiU9zpvLsgcgBC",
  "key33": "2xYtdKnVPcmpR5zGSpQiUnBz3QiTqQ5P2w8uWwzLgECRWgKQeQLz2NhFVMryXMVPfauzdVyooPi5EioM2o2WyPC7",
  "key34": "4zgu2dfp9iD2xavP71YX46VCfBPjmBt5x8pWBFAGcdDxRZYq5HbGF2hTzyYkfHDLDHLGLYEjJQ1XkQL4m4tTMjow",
  "key35": "4Vnj74PZYtjZj2JAMRz27j1HenKoeHpu4YKoD5gd7on6eb3bxco6BA6RYwSY5cDHVVMhK4q3HHQQPuV817jhSdwn",
  "key36": "soJ7AvUjz7J2tiGuCKycxhG8rhE1ja7ZUWVGzNRBv3TMfKAr6upH7DwkBtAu1MxbPmMUGetpANSEWPwfDEvRDsn",
  "key37": "48Ce56CH9BMXPD7e9CvmjYGHekCbNd27tzFVRdo4W5LRZMo6bhtvQV1AXw5xrFZ3Px3W1BoU18T2N7cNu54rF41e",
  "key38": "EtrRJjun9AMswnzrtJXBu433gCcSTCzKTWjApCMpfs2n87Vnh1Jr27tDzoQXTFYsSaZgjQsACkbKLQnPedJ7Kxi",
  "key39": "4Kx4fNCfwBLaWEF3aMY3f8XaMeJRNWppQ9Q2S8aufYVBVia7H5EohDFxzfjhMPyqAwcvWjY15J5ubMPoqY5Fm4ar",
  "key40": "2GYff1C5ZKXMNjMXt7HCvgQpuj7xP3QdYeachCAYLiAhbdg4ThZG3wggPA9NAmMUsQzq6Ly89xT8Bv9r61ioUJH3",
  "key41": "4iizYLGTPfWD9CwyNPVozG9nogmaBBX8LowsZRbJd79zDEiF9hRPNsXWprLfik3CDt63wrZ6gZeGZRj6DbY3BmFY",
  "key42": "55bvjYbRkycKQzWAAkCxpC7gaumWmxUDiL5ZMFRTmWBwh5fCjS7zCvMNykf8h9hLpdi23y6rkfofQtLa8Yi5pu5x",
  "key43": "4CpkKvmPwg3XUiwYvHpauzAemBzo5iog5L7HBZ544iBsgoaXCCip7b9WQrQdrpWRWQN8SXHXGTnXyyaR73nai9A6",
  "key44": "4sYyReH6q3Y65QJBnaawxNkvi2MhiZN5NPNJsMMqH4psnK8cxX9pzRe6tiPeBgrRYs6D2vwM7DxctPuGo8J2ztT9",
  "key45": "62huMnDF8W7ZsUa2QVF3T7kKZEA1ec4o78mfPtfJQpXaobBDh2apLAhKpu1SivTkipSEUnUcUc5aq8a4yStLWRwa",
  "key46": "HH1sGGZufd2MemLsXw9tukgqkiE9DFtaAWrL3AYB5W1NskwSWXKbJR8iabzTF7SebXZspKyBV7WEkGuTzjbyWYY",
  "key47": "33t7snME3Lz8Jp5VuzGppLffdtzUPCHcknAfiEpEH1n7xRQnojr4siWkWskfVQhSLr4Lnan5wmxyKgh5PW89KVXa",
  "key48": "4h1WfNiAcRMzU7Y5Vx8ayHvK6hF33uuPXNMJVps2ZiW69R9QG1QbzNMFkKat21gnDRqNPZKP4257bs34nDWFLF8t"
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
