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
    "2hEdru9eegCrHJFZVqh5jbJkRqYWwU4QAThqucnbTApLs4FLixT1NjLHTmjg7RyCvFrPHPrVxZ9fc3T61f2sc3Wu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65HqBTeseff5N5BjHV1PbivcsX21NTHZsG9H1FT62fXpGVzibaxJL83LpMwkHyChJzVM4UibxTK5xbU8WgwWftQk",
  "key1": "6t8W6zjVkELjZ5oaPENAPWUCX1HH6GxdjHd3vSpVCkbaL2V8cJbtiv1eXoXgizNrkrXzcBwRXeGLYjdsmYP56bH",
  "key2": "4AzXo8JDwwZm5XhmHnqhWW2rx9qMANsK6vLqECueN8dDtue1BPFou65JqY1XzXpX61P9y7m7EQoMPhLfgDoM1gor",
  "key3": "4WCpDbmbiqvxEhPVtnTLqWa4QPr7Da9ZvYX5eT6L6KRYiRjYPrWReEYvBqc4Ze2eQrHkKRBTdutcJUytbcF68MMm",
  "key4": "5wmmgYW1E4oPdH4KKJi5tQBPZNCimNpDrFDK7yXUoN5eBm8gxHj6TDusfffNRpw8vV6Bg9bQEQrov245jc1yL8pX",
  "key5": "3i5pXiPH4j7Gzj59n9Rngy9k9BN6vZT1pLvVD92rkw8jKWnkJcJNwfK3Wik7Yf9P3qEHBaNLBdvzy8w56rUJdpP1",
  "key6": "3rwUUaHDHM5TTRmrD8y7SFQfQfEgJfY1f2KXEiyPrWdr6BGi63K7Qwgi34HA6mR6JBrDEE11UxvtNmeGPwwbAAbF",
  "key7": "5Uw4azgq9yfR9YL7sNcFY2ejmujormXYGjNxAHLAoKdCM5XVkamcGLRQAurGJ2wMwmQtVoC8HgvyWanU9Pr3Sras",
  "key8": "47JTQzp5eqhdcFvMFNaLSQnyMXc4rdmsMcnt7ScS16o6fDMxrJtcJa3t4CAxs7FgCJHux472xnxV7kmHQU2j8REG",
  "key9": "4EAFw5WMv7JmtJPfdrfFQtWzXj5nUXoJyNqg5xXecK2GuYuKiYofi3JVxGNxySuqw4SC4vpKfNTHamoDnpTfMoPH",
  "key10": "57nQRJQQdPPZSiitSG7JshuZxXphF2d1usBRdgKm6uTe1VswFXobVVjWy4E8Z4RXDS645mKTwJ9z1ZBPcPMVrxpB",
  "key11": "4PQwwMAfKezBEfLL5c8qB9w5hdyPNoeJjtoGaqYWeaCC8UgQt7z7MNA1cnepPzcafMHd14X2F4hiVWthh62HterM",
  "key12": "35YWKBMoYT13D4JRmWDGo5Zcd1N9TxvKCSC338nJrmxy5ZSNv5RV9veJT9TFkTwBg8j5kwWN55JFNUyTFAMRNeSK",
  "key13": "33TXXdKnN1WWQFnxxE4xF8XdGHQWGJTiyRWu7PCFm5CEFPzeoi7xcLFDM7ym6uDNearbepZPt6C2hXjTyF9LE7nj",
  "key14": "3uzTBwJAsdmrqLkogHYcYHKufzwRnHBh6A3t9NMmNFbBYwSRZKreTQFRmF65boENfM9MzpBk1Xu6NZ7LnrSwxEDg",
  "key15": "41P2nkWnqzxAeBHh98oaoievBwc1nz5bMASKVJ2thJ9ywK1FuGLbthLQWLEMYp3BxMHtWBKTDkKXvKVo5jZN6auT",
  "key16": "5CzAGeMxUKfzpsTwmP7AKXvBfb9QUA6SUrq6BQjUuc1gtd39U3xX1Kg5qf1Sph8T4pR69BCguzDFB9dAMRsWqEJg",
  "key17": "3iRyqB1MWPjwq8cUdxpMUrU2u8T4Q3YSxzj2jboDPNoHqEDmU9v9HyNa55wxfaqJbt7Zg8PReA1AyXrz1mfDJTXR",
  "key18": "5KXLHrDWwBp16KJtnDT95bHNPUo7GXQW4ZcFT5S7njANQMGv3Bq5yYJdn5aLyyqTEpHdp6uNNKrvB35XDLcdRUPd",
  "key19": "45DvmKwJnPibo3EPmG42vXM43x9zUPPpFLwegRAypK1dGJHzuigFag66uEK5id9dJ6jijJfFPcWAUeMjKnZqDHho",
  "key20": "5GkRGfcUugdVHLERvSHHA4hf6MNApW63oK3X38TMGyi5TsdLi3fNvwBpMJ3p6uGKaRam9bbvp9fvMD55cggobWtg",
  "key21": "zXoREp7aC7SqXVRd6gYpYEfeCo4KFUnCJ3znGCpQ4jJ2VEkkYqG3fCX6oEic7WMjKsiv9nkoFdQ6TJ3KUFU415V",
  "key22": "2tYafmrVdQBUBNXB4X3uuV3NT6161PHYss4ZC2anPubk1ejXqKaeELTXL4PDVkBi8NRgwRFQ7igeLvNs1KPqgWMe",
  "key23": "5WmWWw53HPm6Z5wf2kLTHy8ATFnJhvZxR9fkokfCMUJvyWmoySJfXAYrUdMjosEsZPArnAV2qbrZFBBh1pESBERw",
  "key24": "4k5iAJXeLqo4ETf1g6oVguyBGXJpujm4YfCX8tfWBKkgnfkF7vNRTg3Y4k7bixAteP4a5hrxcX5WDN9LdAE1Q8R3",
  "key25": "4qbEqsV9pGrpN6H62VvHVMbNGsjCT9VLzCd7EU6Jmb1t1ShDE5WPqgLTdZ2BnURnsFPWXaZgDGgiYEQdTbKmf9Tx",
  "key26": "QzqpdqoMod3RGCA8m7VvaSSk8zRN6SxmmgKc1MAVzXesopsbT9BRv1V4BX2scDfKnbxN1eyaMd4PQqKx18TqARB",
  "key27": "28Zds7jXmQrBMhweWE71DphiDgiJUzh6UoxUtANc823xDbvbTzNApGmahJbxQRwhZoUrbuonx8kyRAG4Dmw8TWJg",
  "key28": "pEKzZrQyf2Nz6SMEgfAN9kiaeLrRdhhVHmgqJPUKdT1YyRVBybRyMFr6zAivhiECL3mEoGJP1YGbXguSb8C3yLY",
  "key29": "2n9ZCRvkHPSyBLCHPYvWwVpvqqmVt7uoMqYBSrbo3MHpnzLHW5wHyshs4UyqxC72U1pbtgvqjnzpGj6GaaCPak5r",
  "key30": "4xtcL5fysRruxYSYpaVUcvikmxZ2L33F3eFzfxbQCLuvfSzWUpd77nrbtCLgJw5VzwhUsgGcenYceR5xSqk95Syo",
  "key31": "BkHu1bsgw4YJxGEEWa2HXqWUhXUUPndkWiQ9QXjbbC9meGXuPgU7VP96sSaFwZvFTUb4seRLvy2BieVQkqEL6xK",
  "key32": "5p9NiDwXMjoMmSaRefvs425g7Dp2pncurp5Nm3BspVjM4YBt648HcefdQDZQg9cad5RBBMvzgdaEjB2z1tobWduv",
  "key33": "62urKCmJzmJrRjzJQCZ5fcJWxyw8Fnj5kKUY3LwydfiDf4EP3bzEKoH2sQWaHXibH5eieY7vBtVgW1qiPRp1hJph",
  "key34": "4Qn3E4z6DBoVSEdnEV1WRGzE1gbFVYWedpGyAuZ6wyWCBvzjxjmhgBddKpxrpwxFNfna2TdzAA4hij3xwVH4sdos",
  "key35": "5kMC3HN9nvBcXdocsyhW7aJhosnS7JWYfms55JvESDRoABbHzmT8gxMN4Cy69ucijpxhD1F7McFPaUmS9Vx4FCBi",
  "key36": "462WRnVA7WgRZva5R8Zq1t3j3iXV5Ve6Nrotkqd89t9q3BrRtecNUPhCMrMtFKaJWuBeY1wdDtasdAHkrjAdGeQw",
  "key37": "4JBziBcMDkGH1J2aVsT4b8xbHyoJXgadk1CJ3p25p9q2nMY64jdnSsNQ7A4wU8Kw49rYWzkeQ6iDcjv9K5eapGFc",
  "key38": "5pZDtT6w1frLZ2GHKhiF9hMV6izdQwTKv9G6Y2sXp5VZ8GGA919pKvnBvS6zmTVbymjKs7CAqAkqPCQMJZfcufg8",
  "key39": "3hyERjFMrLsdSrSXYsf2sQhwdBv4KSwHPhMuAbshsDSzNHnEEmdeBmkRvuzPPZ2eWPaHoWfRqzeDqEhLCGm6Dn3f",
  "key40": "3vjWRLTa1pT6B7uSX7jqEpR2ewHBvUC1v4c73Q7B5j5XBT2mxVoL3e228f49VVAFPYrfFXAqRUcPTw5KAmS7V2SM",
  "key41": "2XN5KX2oVrARK6cH3jWGvkSfaH1JvUv69Q8VpeLziGho5DggaHjkp7Pdg3xrMSYDyAmoLqw9nv4JrpqxDtxwf2fF",
  "key42": "4zh4QC7q1RVa3aom2RQXWxTrwAn3M3ThUD6WzwEfjdU6NaBa6RRF8k8uN1urmDTzVZqoKPxN97TPSVo4zbnw5YVq"
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
