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
    "3uom6fpmZc3Eak53ZzuCVLMxyFygUczCHTLVydHYTxZQcDzhvZAZYNjS7sF8TFVPYL9YuygfytW8rKaR9Hr8DNhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bUJvwk6fRMGobEnsUU1PVUHVG4CN8s7WgLt8bPTo4Vz6EqjJWGtEyuqZ4jUrwtwu3LEwB1zmVcHSGYTPEjme2y3",
  "key1": "4T7CKjZ18C9cyU3bw5LwWzBC6Wry8s77KRgthE4qnk2NCZVqpWRFghBHPKce38topkExyYsWaqwQWTsHTW5gJpR2",
  "key2": "2tgkPmtdtciJ1VBFMhx3fU4Ej2RHuzt4PYZXQ74B3hsKo1BFL3NAmEgSEdmokwD3t1KTttG3HTv7ECfmKRHSfFD8",
  "key3": "4Q9ggYg99Josd7SoRDrxCvQvZnnkRncwY5fKzzmHBhiksP82PjYHjp3QiniD6ksd67LXCnTQpRgpF1do6oCf8TXJ",
  "key4": "5XTWKsP2CeZNULnKPaXuFiCkSuMU4smb63agrFn3rpEdfXHatBcCS8RFNTqLZXzHqWY1rNTcoBULmtkFbQbvUKfw",
  "key5": "Wy2t1MazSrzecKnX2c6ivp2De6y22eB2ZmsC1P74CA7kUn1zCkLKkA7P6kHwQYENvoGtnHbhXFh4pgoBzGsRx89",
  "key6": "5T83rD5UWbPTHTuFBDkvfjzB8qWDrqVMCKxSiEFZB5vtpTeXae5hsqfmgN2Eebq8turEHHYfaqoyKXTwGqo9mpVf",
  "key7": "2hTKHtTbdTkWcbfS329zgawjFe8HVUR8dsdXs2WV6RUan3dKbvrTVqF6GU9P31y5XafGMMAUtvhPuPrF5b24MS5f",
  "key8": "43Wr3NACADTeosASnRQ97Sr7ygVTBuoWxnqK56pDaRm1Beu5YbhBM9w7Y6VpPu3a3AZnUF5vwoAje1ztWXqZP3pR",
  "key9": "5o1QX9PaV45xEL1QGmqKjfEcdGx5ZHWTM7RmPvYTCtuiidHk9qSdYiZ8RUnpp7u62BBijvJMXaunGr9pGaDk6f5n",
  "key10": "4nQC6aNtCERYHgXnq7hdJe63i7uDWwoEw9q5Q4TU5heecVU77nEMDjKfJW6fjUKCiZ5pwzWpecsFTreMVFC7kMeB",
  "key11": "4jz8FHKgBtkEFgB8oU4J5WNfY5BtDJz78jm5cX5noZSt87sTLcZh5TFr46Ps57HdU93pphLYqXAa7CFY2sKYhx1V",
  "key12": "5QgnPHjX9uBsBsjhm5d5a8JYyCbkW6WdUqL48afgwWuqz6cFX2CB1Puw7ii8ThjKVuYFn9sMQ4swyrjvMuhM6BQa",
  "key13": "4eCpf6w5z3niPZJM4etaSGLjLZXxYt5tKq8Mkg9FKn5zckkUFsThB5NWA9jTfeWYkUfU4ySKpfQgQf3nv8GFe9Pw",
  "key14": "3u2yLVB6agwm9b9gxc5azGPzRELD6CnfoVfSHuDWSmR3R8vK2xqxPPY3MnG3s2KAXyMAzk3av22Smgehkh1AXvRu",
  "key15": "Wn2TNoD1BqcJBWuQ32UNPccJdfM8BYFt7LvP1X5AZ2yT8m8A5KHC2Lq12FN6zki6aEiK5tqCSc76i1SWpLAAENd",
  "key16": "4hdT6F4r1yhGWQfJgSUyFa29tz7tiZtjQbpFf11bNn72e7PrxeqEC3jXKiiG48rh9ddvgFwcCkHYQN3qdwuhmUwR",
  "key17": "2HMrMzVt4wdahiSsy18XsYYdsNoBekmgF9k8GENfo8ZcUuEwNvieNZM2GrYyhhL8Vp8XHTRorcACBCv4EvpEjVYG",
  "key18": "5HEVfG6hmWaUpqntBPonxPiTRcVHktke1bf4NTh4jDSsJiVQw5nqeubUgThmoMiRVheH7WYfXRfrTBTrPUThaPnk",
  "key19": "52tko1FZFJGK9SGW8UbnZJdHhsFj7h2iEdAgc2uVFyivTPZkmbQMPyYkH5XhNo3QQvWsHgWParpxEE7vEuFfDrbd",
  "key20": "2zNcCYqHt2X2wcqKa1zxDUvBo4fbS2rzJGDLFPvdaJKzJkVx4fuCVF1DyZvHb3V5UMpcnd1qywPSw2ZGy7iZ6ZjR",
  "key21": "3XLLGzoyYuFDjw3Eo4hyrQWrNjNQk1RTRZcYqK1hWCkz7HaD4dVo6RgJNsN8n4uBM7zW7rATeCHyqChiim2Lh81u",
  "key22": "5MUndzAXWbncaeaes1cZURWCBX1Hpq5xnYFTCeUESphUt6iy3kiFVYMDPFDcV2Hqq4S5jbLMbx1GzosWR2AnoDiR",
  "key23": "4WD668GvL9mMRqcdfbMBRRaWQdZhnDD4jvMg5iSvfR5nj1A7gpnrXN8rgRZT5SzJb9wCWGGarhuUhYUyPzezRTSB",
  "key24": "4vPaMQMP5bvx4qPznqhFj4KxTxyGB1MSA5PH6R3bzDQmycSz94zwmT7DvWo5ySBxrVqLiwjn1JH2fHFfDuRzWn8P",
  "key25": "sKcZJt7iPsNGpxNwdFZKGgvNa5Atedk1B1CwKad6YRp2WujBHz1w6qBY4MfdJEPefXpSCou1rnRgjgtKvpXQJc2",
  "key26": "2Q83zCX21mkKkLMH7YL6hPLh8kVmS81bCyCBFJKfeCds8UBkWVWMgZLrbxYpLfMfPadJv9CUBbSGcudANdFUfNEn",
  "key27": "3hhWZTpwePxXjJnzEhn1ytkXb1bbi415mDCZ3YyssAs5G5bP2zWyN5eSiS2fHHwQZdGn4WZqid3SxARoUDTDziTi",
  "key28": "3fnAyHLXjhXwAwynMVjUebDs4dXmxrkQPcNi2ZMThE43mtDukExGPLf5c8GRPqHcQGqarbfXoxVzcNsCfDmM47Pn",
  "key29": "5LV9WHEVVj2LttWzZDEMF3Msn435eLAvxZN1a7NWdTmyrGPexavAf9gbMothZkDAgFA3ReQsV5mdBSAacCYeW9gy",
  "key30": "2P3ZZsafyeqvnxZQfBcPDD1nx28jANmATR6xmZnUchqknuJe8BZJGBs1EpCuCJSfGDsGBEACshsbKBjBSCvYUUxS",
  "key31": "a52RA25bRwvBVnC9f5fiTjiWKH3oPB42myDBhXNUSvhWGUDaZMuQrUiLrS5oBUWSaNSVw7FvjwuQXqBJ5h7gSJQ",
  "key32": "XQ42KeYkQCwjnJmHeP6tWcJnUKW6mCrv6yTCc4uBg7JVXiMZ4uMEig742pHTF1E5Mr4BbyQwijzMfAunJh7xBmA",
  "key33": "3SwxrckHdf7gZm7J3SJsYYGjmVkbRSMUGsHjyP9RWqBhS9ct6GF3uXyzkrjECh6sUfJ3UjXrbbQpdY3Q351HYSwv",
  "key34": "3XQ7bBS2L16NM4uccnZxKY8QqptLFmK2atShqxvDxSJxKWxdocKazJoj292VAfRP9VCfjugYG5XcMRtgTL5mkBhw",
  "key35": "3VWUZmSsy7FQrBZuBQJijmps2Wn3MWGCLoNLeiRBZQm41d6h47RnGNnaxYYAzj3uTCxdGfSHbcDFcqxCscPFqMfU",
  "key36": "2FwU7TuXHDCb3NTs9Cs51KqqbSHSHR6FczDz4ksLPox9tesd571ZNVRqx9En78vkyVNiGzpV5Xc6d8nbnPDMFzBb",
  "key37": "2HGu6pFK1Vy5y9TuJM4DmE7YaPkseEhuyhEjYCLRdbCr1F82MrQ1MEPoPxUi54QenBdjMgSQmXedSENnD7nwSyAd",
  "key38": "3S7tzyuLfVAWPeiUK8K3p196pYcSReyNFiXG3PENMCTpBYbttanyi776VpiAweipRyFAY2rhcFRctKCA5j8SoDeU",
  "key39": "JrTxJ8D17kxwxRMiYQDv3MoynxQcnchaiZYV3Rre7JmKFLiMThjW6FhuHdSBWpbr6PGSc52A9xgLS6ffYw9RfEg",
  "key40": "2dPai4uH5yvtmb5i3TXs9TwFhXw9sL3ckpTUsKfLYS6ZUWjMg4ihfp9Ymzi1BmFVmHUVnRzxH8vgGwwW7twSAswM",
  "key41": "5Vae6CgNFkRoqtyQj2fVTD1tgXWA1R211F1uCocBnnBRPM7zmHtnJzeZBh6U46h5mdnhhQSA1n9vuoMEwg1GcFxd",
  "key42": "3vB8yPQNXGSWjabosWkUaBWEDXJugi9ovqCu6rMgpBDeQU6pk1o5iBbbR6AHBug6M4zvmibohmjNrizqdMo6XEBE",
  "key43": "5yR3ZyeEN4vVWXZyEfKita9GzPurKhTLzy9vmd9rACvk6ajyG4UzWBdcPkeWrJe8L5QsXjaDTMPQ1xShZ11qXokx",
  "key44": "3EHu3MTKwqQYVD7gJgHmwRX2YNPqrsePskQAUrkwkacUhwX4RkxwKTCtxKmJVMAkJkj6j1rs5e9FLzYBba9FGGCB"
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
