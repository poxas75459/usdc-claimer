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
    "5hwGaRGmjX199wsaBemviXk22Ma1bgbfHU5vXwJESTA9DSafZo2SW1rrjzFwoHDdXZnTG7CagbJJjxAceNpMZqBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MW5G5KE4hc6QDwM9mjpTmKpE2JumAu29CJqqwfunnvEXJt15X6YBR16mitUFoUPVLtsCJyw951GD5SMPsCkupd9",
  "key1": "5RqyYjg3bMi1Gk9dTZaFfgaaFcQi9DDKUr7o7oo4iyheYEm31YMzPsUnK33VhSuvaSocZ6k8a4dLAobqecra4bDW",
  "key2": "3BgQurj2z3XKaTW7Pc8qAamQFJi912UbV1THyJvo965ZbpVe6TNybHqXLHEbD4JQ8XoLweo4nusg3SMWKMzp6o63",
  "key3": "3imw8kqCNzt2R3GYjsEugHvAxb1pt7BjweNP9DVKkX4ecfMgpk2W5PgG7TqVUa1BHU8yjq6x1sBqMo6MW89cFfcK",
  "key4": "5YHFxwJQW6okudLiEjNFKwEt8vHDzjbuYm4npTbEkUCnepENh66bXdncpPeqRCUM2YeCu64sLQniWUxxp2DQ81dv",
  "key5": "kMbWHTjcwnZeM87dn1Uxn4hAnhFCp95rzfDRTBj6vrbeVqPvqSfPDzBjW9nwLJ5id1Tx43mogCardL7KnKR42pr",
  "key6": "Wj5bPE9nXoFEwnP5BS5R6soJxtyNYywyVYnqt1cm2FsDP3b7VWDcfsYNBgrHTtdg8rSrus3RzgyVnuGRz8U9CUC",
  "key7": "3coz2bg7nbLR4zoPpgkf9vfxftutiizvwav5RKmNmvL2zX6xoF9MQNS6aes4j7scLxvrHJrH7tMs4Jt89gpUJVmi",
  "key8": "3WzvQ6kNQQd6D23XkTcyUYKCpUUVCZNn4og8g7gkaJAh3Y1WQG6UdL8Fa59MBRnKQkQahY8Uc77g1BGszAktu4uh",
  "key9": "LM2QAtfneFkLemY8hygFHDa9ktPbRaB426xREzgmzyhcHPkguJJrxuXQdMfDHmFXRhbxGt6iEAymH7SssztfxGG",
  "key10": "4S3JaBrfyr1vVaBmzPUtRBTMojyKu2yQe2w7HcqKcpJXiBFrWiYqMWJVbZ6wGXLVMBhyhAvEAuAHJLmG9rPbgQiM",
  "key11": "LKyKQnQXBZuTmR5evyZx5BatwCgZoNgxHY1Zuai5ixY4MZjWPAnJ8yLET8FidSZZVvLdKeQmiD2KXPj2tDdDjAa",
  "key12": "2kndtGaqbCDQGwFq7Zux42y8RWpMsDKLnhKd2iXpbxikcqc1SnRHjMsAH4pnpM2rHZeerjQ7ffuN9NnvjdaqgPSi",
  "key13": "2EKggSR4GCmqENpULAK312C7dy3gKeVBZto4FRdQ1k83teVEi7LaGc8bPMQQnuzHFbPG4pEhZbpntbyVu6kMQmKG",
  "key14": "3zwmjxsyobeCumVgMEpe2FQvB7icd3WxPKAxuCqP6p4cUQ1ZNfgUB3JSRkzi8NPy3dxxAUEFsXZHgvBa19viNb6t",
  "key15": "4jdXwDgBv6JyZKwDtbWVvYJdZx3Wf4u3WmgUTHb2PHhrrbQwEjzSc8WoVZpyKxdzBGVSH3aHjYtErQP2xLdjdGeS",
  "key16": "4FUMaogY32Z3S95CmxvjxoGmtJzazqBR5mfr593yHsHFq6mmKsHUcNdjdBfhXRgRBK69QevFtYNZCQJBc5zfN3Kk",
  "key17": "NPs8eSr8qCZ7Ss249omC89RiXPWmEfXCADERUmeF514NNLUrygipU4M2ayP79fdzgRQNMxcAd9hyuHbv4w3PjE6",
  "key18": "5M5RfGVbQFUtFDMs2p1yUvTXTXxeD5eVG3huRqRAxbMeE2Hq2B1QVFhU8uZKh1NCt87p5RF2uCbvc3rBH7LwgjyG",
  "key19": "2jaDFxUHLoFfhESDkhw8UZTSWWxaEhJzeZzpdnf1XcmxQUkhta4f2EUzhC8fCCUGCDUEEBXtTGGkmCz5QDmKjKjQ",
  "key20": "2LPEk2YtoaSzv2BHiTU3GTnbPRGCYjngNBW7L5XS8WdU9cbmjPQaAVaEcjkUJGCAJhi67V8bhsPjmng8Vvv88hMw",
  "key21": "3PQJr3ePEccWdsmceW4U4ZA9ikudHYskd7zQTQirmUk4NLtgutifbr9NHdRRpCyLvkfhETUdXmtmHMZXe2Ja8aSi",
  "key22": "pQrdPxj2vpxhor7ymZPis7PdZcgwztv3znh95NBcP6EctDTiqRAZ6EJxaeNrVQm8481nGARERfb7fx2QmxdCtfc",
  "key23": "NX3D2kSTu23AWrGZiTUGEzbLF7aj5T3cuFRAnLaH3NcKPduGMeogH2grtTnjnkLiohmuLDhRPbL46EJKai5TJCT",
  "key24": "22cJBagaiNC4L2tu7ZwDygAKMqPENTdna69JXHtN5rzNogfK3hWQfsCwceWin1a2N1ej6Ngus2b4oSbbVvNvgDtw",
  "key25": "5WNJs2zS6ENadm9ACkaN19AA4ohmLpWW9etSTtV7Ze32NJ1e6xVhGzobXX4tBmfUrtrH9dGMCJZeRXsi9akhXUHP",
  "key26": "2TtkPTSq5XZhDN9TjGs3hqpxQ43MJLgj1pTFCfk4BTSGuRKMEGjsnDHA28yosSUHMRFvCEHFe2bSP3uAhyz8w5NQ",
  "key27": "4JnN6x7h8wQegzPMGPUtojY21sx4hNmuLT5SyYJMAmRXUL3zKkLD9LbV8KppP8Vv49PDethhyeBCpt7z7KBrez4",
  "key28": "7CiKT5Bko2iWpW8j82kUQRan47V4pWXKserBPkR4Bec9NKZaTYh8qaV5winAzWCyhR7chc8dhqyvPsvwjnkHHv9",
  "key29": "2M6PbhvakDuy3PquLx8mek4SscojqXSqTxqd8vFTW8J1ikyF9iQs9unn5z7F7uG1iphPkvEN7cyXqaRjS5T1xfwB",
  "key30": "2VExunLg45CaT9iHusBWDRTTCs27dEmQEbuWzfUdduCDLM25tcYPj1AVGc9YfjEvNevTCJovh19BbYkCUn4dZwPB",
  "key31": "RoiQNTyp4cXyfR25aVDcreS5JSLXM7S4CBmHhq3VfQLjFSW4ktrRhm9YVFHGJkmSAfWER622QzEHFv1YNtBUTV2",
  "key32": "2ZApVqch4H5yqsxz8cntJwKgn53ExCBy9n3fHhTtxwKEsxscHVGaGvy73PnFjhMkHynKfYdHtmuJAQ8xBSBzwiaR",
  "key33": "5ZC3Akur6UgsMyahS4GDmHbRx1WVo1QzMY1P2BGM47yhz2ZRU67gxx69TauEV8YtqPGjBMasnkL7R7M5ayEfFLTV",
  "key34": "5FyRahFGw1u2huyNKNmxvP8Gn399aeDgxLXbMwUZmQDNDNqydj2VMQttKEq3cyqqY5a9Ji7sQyHdmd6yDbaCpooe",
  "key35": "2iatyYuPXgRkMe2pkqj6SwnaDTcQyYNNF8SRrAPbr8NjYGeV1UA3BUNCqZWvCWzVF2SpDA6PZjX2vkrnSff5t3Zg",
  "key36": "4RGvy1PBc5siu3UCbkME4mbMAWVXhaGvFetS1XdPB1qbVNW2wLugVA2EBb1x1pWC53TFVALSZ8cGtFPnBUefmjbH",
  "key37": "2SeYSCfJmXXnP9ppAwM2mRdSVnpFaAhkgws6eLGqvXgL5URsXGyQSW4n75Bmbhp5NjSYjHRhc6Y76LQQPZvSX66L",
  "key38": "isgNTZ164QvhcS21tzypaprAJQsHPANyzWGDzeynxPBZHf8sFuFdHgVcGjK1cFUttC8KCvwL5JMkCdSLbQ1xvag",
  "key39": "3MsWczFG5sA1cuAoCPriY1jJcFehxgdb9Kuk29C9ibrruxmoQdmkjdgDf8JRE3gAfMFipdSGLmo2vjvPk1Dy2xUa",
  "key40": "4iiHmjRxFoCnFcmrxYNcaTxZkBtLoKqWyHno9bNDEhWzJyDpaPym9SE9mgNUrakcjHDE1maRFtwV8t9gDHHzXSU7",
  "key41": "5Mv6yWztdwarRrbiWUW9ZSmseSUKEpTFnjx3cke3cvuPFfVurrVUkgpuEAhuZdAf9VSQmyG9Gm2feJNZtw9GtaDf",
  "key42": "MrrVdYe14UR32WYxCYXRUNRLgB4KPtQhVtmVbNsMKEBoysLFJPyQzM4QTdvrK1pcV8nFz5qqMkX4uPyGDkdyhGE",
  "key43": "4n4qdXMTZ9DRMns6BRZKxFcf4R147WuMhk87QZiwG64iwVtwZugqz4msbvj8YVffE5yravnk1X2hBNiC5hpy6ArE",
  "key44": "4aw8o19L563VcE4o4SKLqrdRJrGfwdciNtwKQqBBELaUQrkeGCpui9uyiJp6RfoFi8vefGa3RbSNtiCUPKMSu1eA"
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
