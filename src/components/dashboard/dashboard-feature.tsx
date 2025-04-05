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
    "3WhcFynXU732EsPFhpnzggJUbC4dJrjUVqU3vRRfWxkL3wJeQ7TRc5RArP6BBaciq83RpkDACKZjEv8sSX5YnoD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MqwQ3g3pbPCmsrMmch6gibH9aD85CB54A9dSYqVaiNVCMyrMhwNrSbRzEhzvBUnVSTHjSo4ytt2p53Vscioqbnj",
  "key1": "nVsm4x49StwktPE6QTwVe7cvUpxShLtX6QFg2pWgeph38bj54Zy3GXZ2hiEBmHsSnpxaU2mBiGwEEiSwqmRYBQ2",
  "key2": "3GHuPY4dN7e5wAZSn5ppmEpKEhwLRYH2jXxFhCjvTJZqci5sE3vXaoBcqn4HGmcWQH1n5wKYKWvKwGgNWxLRLUMG",
  "key3": "uLycyEVh9eb3bTM2jYdHPc4jSRn7SoSnz8uALUdrDK312nb155GbE1AkvswijcntT6hYEpJoPuqRASLMn2R1UHm",
  "key4": "4hJ4eWFXSbtrPzLXpnHKGWKwPuZ3p2xMscxtaVv9UhDHbXWMJr5QMJf22Bhw46BfCWZwkkqmEd9hfZjUxkH9i9SK",
  "key5": "2Vr6cY4ydh2c9xzgVfV89tB9zZpqYbcSACuUqTxbfwDGAdL9F6M9s9vLojaGbr3pmqTE3ZNBH7XEoC14nh2ve3uD",
  "key6": "5mhk2QNJrzKEEpRz2HqkSvyWGoDhXFJRZcYiGmnmCr8AiCDFg5YLXUUcQAcJTfWF5ZyLKDwwRVMEsM7GcCC5yaWV",
  "key7": "3guKgVC4j8MmKB1ecD86UmgjXPe3ZZ1gVK3ovk2ZmUrkkhecFTfXhsLsx4HUtiuZdCjxZ54mndVB8L29zVujrqhr",
  "key8": "4HmhLETwQPoEQSWdVxpaF1acJr1HiBoREidWRaoeWGHrcFfPLHxt8Yj4ZdNeWFoeN8ipgVc7D877Jq7uj6tcC3Un",
  "key9": "4ZFzFCRR6QXBk8WC9YpygtyjVLNt7hTmY59rvvDyojuPBWmhnjfFo98ziFxMkkzMHwZMYFiBp3QSXMA3mqAx8Bdh",
  "key10": "3ibSSDmEjB54zP1Ag3D9oN9mEvXrMMoA4prSeVs11vwhr7bXUtL5wN974VViqTgfGQUN2AVS4J6eGTWZrfMSDjCp",
  "key11": "2dAtwKs1iWmNN9zu8wsXszz6dz6d67is1P4NCsFkYBXTDzZDsd9WaqeFCPCwhpMafoHy31MbZFW5PLN3VUgMeGUG",
  "key12": "23WuxVPLiJRkKQAjts9k8ZUfPFHBTNVwTTUu1AcqG5yxXyfc7mFRFAg83h5AqbvpCSM7TaXbhZxeug3T96fDENzn",
  "key13": "2h14gbrnkVCDss75HvtJAU8mE1MnfYt3ov9phrJpsXP5uBa6pVsdvrPeors29n3D4V3sWx5ZAVP4DgH5qVsXq9y5",
  "key14": "2cqC75UcyzvqWqFMDxRZ8tk2BFBFPwjE1RxN7cxsZdfr6r36DqYaFzXZVTHAhfLg7eiLR9qTwagrzhMv3PVJt9wQ",
  "key15": "TDFpWrPdMzahm42twne1nY8tNj7ZWFqbE3DAPiM67tbd35aNxLCrNSAGUTjvniBmRHJo8JFBeQydVicxAyvgaGR",
  "key16": "52THuWPQXtAkUmHiegugPNu4kLZ5uEuovjc6SqQ9Kvip2sXTfYKYRQFzMEzeWbkp8MA4LpqnKrWxxyAETngXJViR",
  "key17": "4bkiEwQNrW8829E5q1dNdMgTMkR4Vy6bLFMByMQxAwiHc4CZRXQpRJ4sViyeFhny5WHTy88pp4hYBUmJku4hb5Co",
  "key18": "c1K6TYDje51xv8jbzeuEZWmapgRpVHVeN5vQMvWbsVjFz8ACaqBK17sezYWt1Xh7DH5iZHmsABqgNBXfnZ76zFi",
  "key19": "XdEPBDMWJLQ4nxLL7Lv5Sy2gsgaDtXLJNhgESfvbcsfCkJVNsrAo7HFD8Uw37DJ9GunhvS7nHY8GRzsMRcg7rXV",
  "key20": "4maGaG8qvAf3JyEvbEgCUjVdvKercA7U5ce5Kt6z2QsdTFBpZGyGydeUAbhXBH3DeSdjE9ii9zwzvVD66GDQ5DzJ",
  "key21": "3xME1pnQwcdN1yH54nigXDYvoiLvmAs5AFZkWDQg8HQ8UH5SZ8UXMDGGF1iiTpa3vdDz5kQxJuPurESySWnZDSnD",
  "key22": "aUBLVm6v1gwjBfc8CwE48ZiVatozfnnAxcVabu9SNbMopYv1f4YmqjJLzcqLKtSRmnLMHZuifjhTP7W3sdL9raW",
  "key23": "5uToMp38UTXUTh7uy3Pt61zqNyPPEaFfiyD21NJRZhVkqwSVJ77S9NEmgT7Ai4Fk1khhQpx6roS6iY4iEiWDbtks",
  "key24": "fBpQ5H4pgSGd9tU4xPpYP4qguKci1dqXEhiz7cNpJvWVqgh4SJgFzGbpcMvAvTnHvPFbeLUcPeg25aYBVodPhXK",
  "key25": "2b1xmZnC3NRuPhVbDW2ieGNuumy1pt1oybW5kFc7AFcacKe1JBVYg3MS7GTBMeGyrLr5jeGmVPNZ2F28YCZSns7b",
  "key26": "bCpBjgAQ4ysLTgwRny8yZGRmE6D8NU1gTL9KsWzbdJfD3zGQ5g6Ti6MwtY7aSGLBnbHoG3MveBw9Z8yXn9CtspD",
  "key27": "sipJA3zGric75Xvpi1yF3fsqEft4CiLa3B9asfbEcuUiCrTMMmsvmzNQd1cNQdmi3q5aBGYDsPRV6RbAhMqMD1m",
  "key28": "3KFrx8x4JSUCTZTdcPRFexunitRB6ApJavVYckZrDALsWt9WjkL7RBU77gaKBEPAK2YqXSgUrfURaUEBZzhmYaiJ",
  "key29": "5q6dUJzHQUApx4Ygpoct2KPimhVLmUq6wo6U2rgijRMGCvUrjkzy9L2kYFw7xG4dQBPfis3CnMusknK4Lam9mxeg",
  "key30": "4xj4kZaKpx8ibVvVrLXwwzVXZCLbAfgBDTyLwMJ4dHJ3vRx2oCLYZ32pPczztqVTEhsN5bs7jsMhvcYtPRBX3coX",
  "key31": "4q8sPv6TwHb2b9X7CuyJKXBST7PeeJyP3uGwAPUY62D5GCS2gPWzGqpo37LaACYU7HA8uceSTmMbfrazfvccSHTW",
  "key32": "oz6eeT69bnTrJFdAtfgZxWAwyZPhBMrF9GpJhUb3HwZfb5E6BE2Enec3Rq7yBTG7fqCg3eEz9dHwt1FDe1awXXM",
  "key33": "3d6XyHNXA72CMcBKAnJLyUf84ZwoNf5Yqym3M6wWUGBCpyuG3F8kFimHu6Qj2kEZk1aHiJqdjUnFKhYoKn61PPfG",
  "key34": "52SCzqsbi5PXMec4skwguZ7UZmQ1LV2cQhHb39LT4ZeCg3upL5FnzCvkY7KaCVMNQLeuRiCp7c7GhnsdfjoH42qe",
  "key35": "5vgxaXF8WcQ5r8cbmUogU7JtDoTmpKGzGCDd5uzpxSBxofN8LteDFWVz34rHucti6NVSJHDDKcpRxnPorSgA8gXd",
  "key36": "tvfx9t7etsyiy3NhzGEzMNnmWQMcMjFgudgNZSdxBUaekuipytkZxJjxbjf1nakzHNthGp78xjGmSEZ5iD87ieX",
  "key37": "27RVA25jAoUvpkBZKyT7wQHK9RN4t1uDSz7jz3HNQT79g2Epori2ttiwQoWCyJs8SLZKNhejVVSSiic3vawUojdH",
  "key38": "64MWtE65UuxK6E6z2JTnuf21zvihpEDBUe8o9EGWHeiiH78gBaBC33AKBLnT4uyKUeJVyZwn9uy1geH1rwegc2dg",
  "key39": "VqL1WKcRT24MMCjF4jUSotTTHNXoY7sxGEDkkt7ndebs9zjxw2yjWw4U5k7tfVCe7qScDWyv1LELP2iDGLJY8wa",
  "key40": "o96cnvD27u8HiNMfjtPXWE63EB361Xf2QtRHsfjCDuCrFT2pUi54w9AttLZ6L1gSGWkJfBEdSzD4XCCjU1QK6rn",
  "key41": "2XgCj8ACdgnCr6GTm39stDQeLkLBy9G4bGEGshDnJWQ9F4awHk9iCwaCVJUrAFr7GrqTpRjEgjwqDqt5iB8mYz3h",
  "key42": "4rBYkt69YAff1bhD7ZrDBJrc79bHCYghGMM1jkssXk87DmaCmsNSz9AwZbnvabCMp1nJP9qLDRv66fBF9vzLP6Vn",
  "key43": "3xUUDCrwdTTdwLYwqed413FcWtvbvvVjgiXZdgZDJ7MEnNRsZv6ZbhybDM8dvUaQFPEB2WHaYkt5xcLds8qwz7Sy",
  "key44": "4LARSh3N5qDGPCAftTjLeczBymGrNVRQbUhMe6D9Tu9rwpT8cTp9aXFVgPLnM475CpDNc2NFTRQ9xxZXjnuXM9KZ",
  "key45": "42txoh1xkGKoiW4YiyfDnciy9zaaHdfmtkhnbpZi7J5Xx9DDCBe83TGzn5SPJ4iczBpZaTGsjSsySWZga95M5PAy"
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
