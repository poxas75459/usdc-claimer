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
    "6BBCoziNszsD1kuZJZ55NdU2dJQK8YreqZCsVkPuSnCgp2tMUuUxbxFvxXkJ3K2b7fCsnvM8qde84QQKpLPZsdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s7i5cAcnfd8g7pQicQL8W4W4w5GiCWoG1UUBWNcoNoAeZCFL69Xiyr3aw4vfv14ue8KowxmhMcy5T7WzpiXHqJU",
  "key1": "3eGJVuJPCcc26xF88hTjXQTSqfFPhhNjLFA2iiGrKpRf1g82eaNpUhNv4Zd12eGB5p762tS4kH3VCN1Qd7xigRnJ",
  "key2": "5m693DAGBsebhtv5MiEqwU2yhFGaZJDfgBj9m91S5Tzw2NZek8mVeLoBizsZwVTsZ8yAiWUzD54GqVrjo5turjYU",
  "key3": "5kwhQUg331EsUAuTdSgEumMtzyBocXmxGu4GbnXVu1Z39Hk6jPcXR32RJGDWqgRfqfpeSopT7zR6st5XW5gXXmpE",
  "key4": "5JzdYG4MnEe5WgyETGcfZiaD7vk4cfyY4v9AXDZuM4Mhg1Jycj6zS7yiM5hkK23B8dRrEG3dmgZXNLW8p4gSJMMz",
  "key5": "3rpFLTpMobarWux8mbcuJvdjvuDcJLZFEVEscQLH6B8diRW5a3m5EeBxGkZewQjEHLaFqgjCEnNWSYxokDSMnNN1",
  "key6": "3qBAfxmTwsafVVrK6jd98jwiHo4tXPuJ2STcY2xa1TkfH3Z1WMn4rEr9TH3LwLyD3g3SxuWTJNZw2FnWjjpqhqx3",
  "key7": "5JpSVgKQ76AYHpewrxfjucwc9C7W1EotyrLTLz8cG5iLyHRkFLCPbVHENVSBU8qyLFP24zZurUkd4CQeT4boDZok",
  "key8": "vECmikfZZvPfYpNPcUCisz8aKHuTcfcYfFBDFGV3FQryV24bDaRooQTPbLJDKWmXjMZykM28b6so1UiLMS2ZyrU",
  "key9": "wcVjM2hb9MSvtVdzRkRa8ARE8fRU6aeZUMRKpsYdg9sF6zEzPP3SwuAAXVH31GysXdvY1wvnVU2i7TW6gb8epGV",
  "key10": "f6jhPZxmgP99yxLExfD1STwot8gXf1NbcVN3KyU31BXPZEpohKNMXAcuJs6XU1ed4uXHE9eJmr5e2JjDtUZUCj4",
  "key11": "4eNRrjVfTeQtfXV2N93aN1XhDo4411RgaPM83PTJ1Y3WPH3BK3Zp5KqneLRhjJsZDxfhmRe6bspvytZMyrtsQ22C",
  "key12": "7PajchTdkAeoqyo5rWADkoQgTD6mi3JsPz5eoGBuvfPF43NFJstU9MgabfaCD4VEsB976yGyLdYSm6cKyi5HxVT",
  "key13": "3KXjM4xPAcEyUXcsd5S78BzaxbryJw65BcGkaxa912C4EgbgWAwDonSTmmdfoLuxbtafLNGGXPWBRAS3GkJzFHVu",
  "key14": "4beVom84X2Cgy6BxqnY3ikzhRvac7bhL1Gg1iiM8qqZ3Z678HSxEvtLEmA4hqDpCBGhpS1enBov7v743DvySuV9m",
  "key15": "3mc5ZzEk8MEZ4khTNYUbDEKhHhtozpW6F3NwSAs2a53hq3HTYcXPRweDXwQZhV7vFXNinKp2pAGAScr7huz7mvmK",
  "key16": "4MTUkvQmtZxrivfqHQ1EAeNwR3unWunQfYeGk1b1XY9aBUrha1VkhdvwT2AZuT3P6m9VQtS34AnUwxrhtqFt97XA",
  "key17": "3WSymuUhHTjaUtPsYihkYkmukkCjZBrtYasKA3CBrAD9W974d3XrRvVTe2pk7w1ThXoM3Z7s3Tfn1LTXXAfxubH4",
  "key18": "4Ay8bVeZ4wGh3tPnd6kewGEjr43PRkwjXZBYkVDatBBDAQEtyFpk2f4mEUxoYubigScN1aKkPYwzw3YTxxxGXEUC",
  "key19": "64RsJ4LK4qSaCyonPGQ9vAqLAgtiimsPxXXJWV2JZF4WkjN72RgB5ikDjz32WVTSWU47qxCrmnFennMzciA4jZjt",
  "key20": "4JdcL475nzPCT2tvTowuDZ2yzHwrkignPzygbNuf5nX4gEVG4naHhc3WZ2KMJT3o39cmDyxdMUsfPEYV3SAUHwYZ",
  "key21": "4jmp3HeGvGRUiuN73xur8ygzWTg3DnKhXSzspAgCNzdwVqE1FwYfhSim8x96D79mhojq8oizgvdChpLmgijeFMzd",
  "key22": "5CFihttpM1aboUgJhL1y2zFoVC6S8GTn819gdHpeUCH7VHN3Cvs3QF5gbJqDwAEy6iBdwvptV9aC8tCoWDVz6VH7",
  "key23": "41e6T2sHDvULWvo9MGJPexddpRsFQkzXXxYsNhFY6MxKHkKdmDUffMuJhPx73jib4eJnwZjqt6bJUNap5AxoHhsS",
  "key24": "5wnyiPJoNJqhddYW9P52GgpDh5UQgJzsgv1SSdRGCTSzYkZ8fzufqWvNteUNFaKcc38Z6TEgox4CBAMcXXEA2ckT",
  "key25": "iGoWdxugZpRAhLwK19BtMrK6K1MLx35UgynSFLfNq5UL2BkKxmyuh8NfJSVm6WAX1d6kcffoM7JxSZaUKuUEGSx",
  "key26": "5UQxGDBH9Fx8RiTMcVrvVqg8D5nJHUH7Xn1AyE8ixGjeNmtUTJemQuYhQUgoM8V9VdiG3Zg5W44zx361gx3hiVAA",
  "key27": "4sARmWTHaseyrwcRpGRFjFFgStFtMgoKvYhkuYioEnVzH1zpd3vq28XPWTneYfHcsAeX86k1FHoYXoVaxfu77pGx",
  "key28": "2sJc42UrzaLqoG467sGBghvSYPtqz4PrYA5cBmHkRAHADVAoy1QPmVwpGsiPhz5NLNrJEZbJgQkBzoT2La9n1MMK",
  "key29": "gycuvwBpAHubt1dcRwhrbi5AKyug7kW4KhNAikqG9viNu2Pvosy5k8G6bGwV1DjyHkR3DMqiYSWUCZhJkoGzzwC",
  "key30": "4r33Vtf7qajP4naaP3ANjqTBh4KpWx9Ue3VcaHZ24zrbJUodx7vpBM6CtJ5EniX9jfrDD2qpCJErRfG68MGYUHmJ",
  "key31": "2MtgRfm3f6H3kow2YemXXLjDRwXLJQZoxuyDPCCguVowEeEapCSfpxiucUBU2i1oTq4r2tTwvraVNFSwwXJ7N65D",
  "key32": "c9HxwX8kDCNMppP8Fv7DCiqpJFACWi5VXN1MZfPK2ebuMScHEQ7c51RayNHn7QmaiRLpWBVWYEZKdds3BADWKNK",
  "key33": "4e8f8ufFdVY6SJsgDPDp3mpLZzBjUVKDvneDvYceC3vUQfUQeUc6mDt8xG3AAnss6JeaheNLt4912YCVN1UV2Xyi",
  "key34": "4FKfdVVr2F3cDYxrgxNxS6YXfS2rAUwjaAFqXKxjNz4iBcX5D72XTWX3PoWPavreHhtzr1D3KgifvHWz9CPAqrZM",
  "key35": "3i2WXm7myFnwXczjXJusJ8yvf2wCTBJwvTXVkPNtUESPndjHUKBd7xVkvv2qdAG6hPYexGq37wSQK3aMKGEvASS1",
  "key36": "6gF3DqjRpBTrHhDmFBzD4vVbUWaeMS2Yt6VTcSYyzXKibjRKhHmCpq8PbqcPUYNos4ModASfHTTAzF1U39gVyRv",
  "key37": "2zgYtsrBSUpwZUwFJLJVUVtC4zLzgf29gqLwowRsGrNSnxqp5TumqqkBSNzN618Yn5cMvhwVNhhxyiqso5SczT5N",
  "key38": "66YxSSiCxK2YU4cJ5h8zN8cnCarC45uofgaAjbThaqZjnoLYdVKte4NdbtCrYSCT7kNj6WnU1VoS6gBEPmEKfPek",
  "key39": "369Fg54vXUPX2cP9K9W8CkF24faczgc5kwMMSuFux5iXju3JRDJhmLX77zZAjQdtsvcykyG6C6GRqj7kBDZKPLC3",
  "key40": "5yCr472hFTKw5WdVJjRxrTw6qYk4s1LxArnDpXioU9qUAmhteFw3YNTuCnvyXBpxyej8nLfAKdGmBjGDXcZPPP1H",
  "key41": "SEvSvi9fBwqAVmwCzqSS8v65UBbQFWJ3oaWm7omHgm5GDQxGXDGiLSEgTeDiVw7tjLGYGDJU6Zrt7p7CDczCDSk",
  "key42": "5UUU5FJf6Mm2ZVo55CTGJgnfhSe2bFbKuqWWCf3CVjNd2D6wwmgReUuT8WiitokoVRptMQeqvNT4TnfafYo8WVWM",
  "key43": "5FLgxRTfTeDkaHp5oCTBiVEsBPXU9XZpQt9oPXcjhmtNPXP4kQZLS2UsBwVSiyDNbN9KMkrnEDXqGYrv8PQawyr6",
  "key44": "5QzAHFQN6k3f6tMPYy6ktvkdWkep2Yt98jMer8XJ9kSNB9W9jxC8Caixo6rnoNBsn71wQTytCkgF2zcSVtmrmpD7",
  "key45": "mCAr6BxTskuhHN9BzTZKFTr8s6coyUesTwuboXpyuRcWc4gSqJbW222R7UKQzWe8fFLK62pgF78Dkjz2K8XxLNs",
  "key46": "4mFypB4Qxvy9bEufhk75zh1LLjReoYp8epaui963zjNujkRDY5WLKB9S8U1iCFP76mbGLox2hvcfQzPBvp8M7z17",
  "key47": "5tLqXb6Yk3WNt3rpCQUJMETCxtk4iVMKYajvHyx9taiqzE2bonbiwERgnybcWtr6Q9wJ9ZPFBLR4ghAK3wUU49qb",
  "key48": "5DwdyV37U8T9g4oYFrACY2vReXqTJusQShkp2XhUhFLA2gbwUBbKVcYropHZuVeDjGe6uoouU2AkWXDkoaD5gWrA",
  "key49": "4aSkd9fL4CZJqJM6CQLzYnw3eLbXSGK2hpgUs3amL63YFvYwkdbzhXTVkyFTE6mf3tzQTPyZFT6yA4CV5HGFeeEN"
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
