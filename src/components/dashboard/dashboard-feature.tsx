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
    "2LWAysXaPeKvcKUtg98taMbPwF1f4728z4hzAd7ZSJDpYvL1cssc17gWLi99qWC88KL5iM3JA2sy88s4xBkYip5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CvQtEWtCNVhMAoGwdqLdX39TiCjEC4FLtBac2hF4JD2yZcsPqqggCrjaWPtk9jcRwMzCuYt33enETCHsa8SXjjP",
  "key1": "3d6DqRYq2az1jAW8BJJecx3ZfSnxwWoFeXTuWM56Yo3hBvbaE3aCUKvDVoZA1jAEyADLr2cH9b56A8bUpyWMCBcU",
  "key2": "2V1WhSPkFUH3TSeKRRBoVaecaSbohHMwEiLgj5oLPtSHw5eLJw7Q3pdjR2rwWHx1oevbvviTHux4hRUNwh6BPTkR",
  "key3": "3tN2SwuALoBL8wLtKE1DHUGuxn3fBY8cv3fdSE4msawbYFcfdEC3y5wh5o5EGQ6DwwnMEg2m8LiauhFHmQEPZUYC",
  "key4": "2iU5DwKVg7E6BWm9ZiCNLS5JmGK2gz78SVdENATWh7m3mwy8LkKTx92G5e7dj3mvp52vGUUWSpFkWBax9s93Xdiq",
  "key5": "2hxVnhDEy4QYs5CSMWtsga3KsEfTZ3AiTgnMP4QQF4Esucz83CyCTFJy2zeK4X1orxJCAZrGDyBpEQTn3nHvnjuD",
  "key6": "58ZEPXjGRpiKW7PCRLNeYBcVqdTRvYPJkEStLTER3A3AxMVdKUnsvS25TzGG6JEiA1wjoshzFWebUsrpYFLcaoRD",
  "key7": "2mHfUmHEhexXsbD1sabWoMW4sWBT6CGrGS4oQaVRFpSZxahFQE2iBWTLLmbkndqfbHbAVsnbx87uXnnLaPfTFUio",
  "key8": "A7htyZttVPDH6u336hGnDieCpAKuvzgGgFzTPRiFMkTSJbseCeCgMauTvtmbEfre2jK4LifuHstfMfobuMogJdU",
  "key9": "3L6qXu7Sq5uYgzKTPWpSvDuoicTMF48BpKnSfdt2WFxhuoZj1yp31u2qH1yGeS7ZMmeQy6thUJ2CnyfvZFtYgc95",
  "key10": "5Xzeddj5GBDw87YW3nQwCzrnK6hiquQ7WqhAs2d87jnKojfe8oRU6QoVQiqE5C1LAGqZtFhUXPkhfinkbExm2MDp",
  "key11": "3D7X8Yh1btFojasDrq3AekqmmYHNvYmw5hqobehNnKUoAGPQ4QPs6zL6nomzP3Gb4M62jawzEauUWLBKA42JxXMP",
  "key12": "5pHB3RdKcpQcavTWppS96b3cidsNB3F4ASrfYnsrhfhURjzPtSzUmVUStZAt8jkjhiXf3g36TSdFdU4DsB1CUXXw",
  "key13": "2mmT6k23LQizXgyRsBxn8Xcznd5mj1viGQjbUaY6ue63jJdcJoPFKj2BoyTBjzMJD4kSevg8oMFrC1bcp1Q4mwDi",
  "key14": "5iLdjVz7NtwTJnmnd3PweTEs68TySCsA2E4oyHpfYjxq1JXuiM5wGeD7ANCjTujj3gK3KMqkt47BCRq8rKiJ4Lza",
  "key15": "4UPqKTnnR8DigmT1ge12s5FXnJzkE1Ej2PeWRzMD2sSUgrtXQLJmeaHYynTHZVT7wcVECcY4iEFUTLKevTCwAYT",
  "key16": "5koiMuGTXZGjPM46dZccRdRA8a4QzqUMoXUMD3Lxz8bWqR9bD8Bd6XgamUYXyD81oy378s2LpZsKnZhrk61RPy6U",
  "key17": "63poxEYAfUW1vhjqZbMso8zpr8UbMqyzkZuUow1M9khfS4FcPncrYBhpDmaxQksmTstioiYv5CGBcUywFXVim2bu",
  "key18": "5Xrxii3wXf3aD5FNM7zBF9jFBzvMGrkv1bjCUUy7sEmW2eD1jfNyNamDCAnF91jynDEPqfSBGqrA6VoxzuJb1u9y",
  "key19": "3nS7gnPGmSe9DrmajpvTWpybYi1zYz9UsWzkVdm1VVrXP15XTctPQMzpHWP2JQ7dgqNRpFNFUn3bWzxcYxu3qfSY",
  "key20": "WSFX7Da1q82XvysiAfz2RjKsZGTTcoZkcYxYABBmzTEBnbV1MgNqsxXw4wcu4JHBFZg2Lh2Rz5XaWkQTCSB7o7u",
  "key21": "4RuWZLNDuNyXgsfBvgoSjvmnrFHHqscuuKqowGBSooKbpRK5BfD3dT1ZzJNQ6zrCjax6evymrP5H9WpvVqvt2zLD",
  "key22": "5KiGHJqUNitk2ZbNraamkTcngvuNZeio5WAdwtaLimmFVXgNak1Z87kaEFG25ih6UKep9hTPfHt6TjPAtYfSNxEe",
  "key23": "2FLibZqRrZCXTGQca3XkYyyvdLMrUN73VFRtf7sKWDHhn3Vpbkd5bziGk4WJNoiyaaBimDFMdvaCQpUEpYNxYtX9",
  "key24": "41U8fBifdSAzgWDxHbxeQMsUcdV7jnkkuexHrid5vDWLumvHvDdYWMkWVwkx2sAKzQHffNJLHbQQ2t1GMoQyiCiC",
  "key25": "5xXCnhdGVFj4rQLBVxJ1vVvNdeipavxDfMEh3fVZtzJNLWwxKwVowpzCjcvvtuhpc7bof98Vbrgx5YG7hB1M2CWE",
  "key26": "2Ry5o1sFdLh6br9nn3ysUcgY1RyrpsbBykQtLwJgLwVB2iqPMMnkMNgLUqdHsyiNu3TZpvRbyF9d2Tcof1aswDon",
  "key27": "RgfEVZ63QKYH4iU1pHKMtK1Ugaon8sDMMsB6Ao3D5RdTNJ61gFBpnx3tL86w94rNfBHSbBYsffkRRxmP4dx3VkA",
  "key28": "2z1iys2BiuwB44adDKgi8qKHnz9RRAbaghq1UPdfmguLDaftpkFKfFT1cnDa7haQSXswBZ6FyDRby3G6ix2GaaAb",
  "key29": "4oN6AvyjN58GGXnZPESkQqD15Akq2aPTGgCSHrj3Lt1S5nbepqty57gwvdEqNQ3iyh7gHSCdXk9tQjKskxHYpqAa",
  "key30": "3Mh5KhG7QgD8bB1hhMjMWBjdxnXpRohjw2HSEHhKAWGHsbPK6Nmq3fjEJzzicAAJ5eferfMyyV7cDgCaBBNVUVRD",
  "key31": "7jdVqo2Gr6QdAdNLsxA7wZkpWyG6eguk3PcRu4tEMt6BXeKfWgnQsVhk56a5xA4DNYnF3aPFGtdc5obHsAybJSE",
  "key32": "4EmagLu1EYhJCHsRx8Hi9CyPCmRfzntjWbr3xXfsKkhVuNdi1kbu3td1Pz516gqStht7ChzRoTpTfUMLUFaPSfk",
  "key33": "4NfLrH9KDY28DDe49XN8EuUQhrjzUWJhvVhifjSxzCRYsVXbUZtLaktzeztHjgj7Fq4zFsnNA5NUCVsARxdUm3hT",
  "key34": "6o5ED6FKX6WukhobvCaetoPDoWqwvVXVjpJQJPEWJN3gFfu8HRBns1WhvCprAweUpVHw6W2RbHVVgZBVRMD7eZf",
  "key35": "3iES9AGsvhcZKBG5FB3cQY8BaPDCrQK1DP4rbymfxhHSnzNJSzxTXwkXBQGgThKw4z2Y76eNcCaE1yJtNWS3fSRa",
  "key36": "56zGxaxNEU7k1t9Q6aaNwyKEkpF3TYGXHS1TLTj3H12DUgVYtxjCrZDb1ZacptbVoHzE8WqvrGjwqSc2QeCBGX4q",
  "key37": "hB6CKEXUG8C2ZWJir9WE1kyWAKUoQqCAN5Nq5iThhtHWZuuUtommxi9NWF9SWvqEQgz7T3MzN75ZA5jAYcsTrqF",
  "key38": "je26CfqNxk2RPyKC1MosZHi944qY6M78NnAMBqVVwV1mZTsp1az1RoMRQcH6yym3qtTg7C1eNhnQoSrfK8oFGLp",
  "key39": "5NqsamtV4mU19t2AEg6DjufypBfNP1PZRUxkBpWaNB51X55WucrjCUu1nkw3DmvPpkhYYT47BmUsmFeo9TT8CLi9",
  "key40": "BYLyCywcpBWnq9naiGhkDfXZaGqyhn1VQaPQbioF2e4q9SMmbU4shdzP16PE95GWUyHP2WfuZ1jnnPSFgwqYuXS",
  "key41": "2ypx175HL49Hr4uMYFnFNoqwnqfBixEEHduBsjFYoAy6oZWfLiP1DHqVC13p3AxMkcovDf5eAee6NmqftM7VErHM",
  "key42": "2o4vgjd4WN1WFFeP9tfExqBfmHGk3s8HHjDSaCgxN77B8Uz298aaz1hNoHDcReGU8GkvYTUnufc8ppg7PuByvNAo",
  "key43": "4ZEjykWGN5Nk79vmZexVDD9PCAC9VX591mnSNu6dFd8jfygnXtgJFnykndRbtFvbnzFp9LGw835rfovmUwgxwzhs",
  "key44": "4RbiLccjkoJiu6JqFg6HMmkdgGgza6doyJtkJVLondVsy2jDpwuBoc9NSunxCWy1nDCtz6SVsukMD84JuqYizVMx",
  "key45": "2cUAmnLyHZUqUHTmaQe8T1Wm85oYQYTCE66VCnmqX2mJQuK8qRfCa9QrTTvRVAexLxErhtwyTpPEu8EWD8K5gaRr",
  "key46": "4zKNk63bhc7Y8cT3TZPtaUL2Cn9ynfqm2Vh21ZCX2RydkMT4RWbFp4irFjFn9d84TGdQs8nXbLEx7ERcvUh8HEKT"
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
