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
    "52Cpr8UYD5Jy6YaCumX8ch5LdrMMHwfS5oabbgFfVA6HJzsN1UeqDxbbS63zSyXZNQDT2bPaLqGKWPtdu8Qdg2zJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39SMoxHxWgUVs6knkTK8571Yx7TuhXyfVE7JuwMPpYKp9Q7mYJLgLDwdF43czs1D5oTLwu4FLmBbfR7U1UyMsm65",
  "key1": "3iSTR8KpsbwsWun9ZFQY2nFnLgGM24anNyu1boWiw2u8npfcxpMg3Gt1Y7uDbPgYKc5moopXBpcwSfpCVBvECU6n",
  "key2": "23oWH4RCsZkChRRqCUosrMGBamUn8KYcK6ZLxwnvPqc1r1NHEa7Y84kbTW9GmzJhZ2LRMsmX3QjT9npPdVMA9nCS",
  "key3": "cdEexT1XTduEFibDESoisSc5iqor2da61NzPsGwW7gbTvoYRHMAU97APNZCV2DKHrtCx1R87uSFoXheAq4TQr9V",
  "key4": "4x1gBfyfub2Cx2wZWpWhqUyhBzYyakB5oE46P8tpw7eRCTueHJ4wawd3Z2qNXrNF4zE4SgN4yvivvMV8MTBv2r11",
  "key5": "4jRzU4WmngrLCBJqQHPhvPtcmxULEpSLGRceJmARvSXZfxSuKpKt8dv1RNSm4rAPbEENRLowbRZJp7cV5cbVHydg",
  "key6": "cKFYGFKsrCfbMj1cSLngVLxb6yJDtEukNNm3dsRjHrkBBdwAbLqb5zeEt4YaMowJR3yKcZgpq1XsJvxwhj9vPpa",
  "key7": "3cqSAYKFjTos1tyerENw6MUGQyhdCCAwP8EGy2aK3tYwwgHQiNP6iDuN167NJWXvP2of59qVmuhp3R7YRGAAP7wn",
  "key8": "y6hj2jhrTj39BYDv1HvxXC3Z8XUHXX9FZwSrUUkDXLGo6SiFzqBr9ek54Ahv1azw1iPwqheUK788zDgCn5zkMR6",
  "key9": "4rrSRSmEYsBEvmiu599cFQQZNx7R5DsWAWeJphbMRxMEfV1dA4wRKgHskR291YD1g5x9jpF6J4viK69DvHnQ7dG9",
  "key10": "2HHDcH6Y3t4qwe4rxoMGCT635dinS4gLxtud3GpV1yEESp4kpTVy5YBe3iXmwRGn2AHCtvVQTCNGrfDBegWEWZVH",
  "key11": "JbCRwYvm2enchQ4A13DtRsCAE7BG3bePeAQhgRmcjEkswDninFnf4ueQgnqquZCYb49MFyeL58ZfGm9icqKmDVa",
  "key12": "3gYhGfrpkg63CLtc1xkdQFa5vszUGZw34LdiBU1MWpkJTE9jP5cGBA5WBUuCS776tV63EDvHNd77nuXhYZTbH8sp",
  "key13": "2JVtYczhJTFYX1pYt8aygrycKUWrPambNtfuSjKJiTAWfpfvHmZ3JfiNUK4HT78ZuuZnohieMpRn7RgT7QreWqxM",
  "key14": "4g3FBEfHSY5sjP6xqsJSAvFs2ckDjE4uQyA36W1ygrmUn8MAJv2eSZXiby72BHVaKGdzxZWNK2H8mdkUg11QCwoj",
  "key15": "44cHMLqKDo76qsvh4tFNESJrKsEqek3kT6DNxcKZBexdQBgv3KNYUhZx4MVoT87rVkoghXWAGQFWdfXWr1RGVcFY",
  "key16": "cngQCWy4KeHCexv3rmtTtsACmH8xiE9Vt3g7ry1rZnx2oCmhjRDEMJDpa9e8UZRbdWe6k3xNhCwL6HXUycNVQCp",
  "key17": "2vMfPiGLCxTLoVtZTixrb4AmFnht8PAnLLruWaaaHDbTZFcMSrAPBANFYxyp1puXPMADjG1kc3yCCnTTG3bZjGv3",
  "key18": "bKGtbqkXpSNcUfq555wqwYD7KMUkdwhJG34rjWAuMNQhyG6UPTYwWe2WxYzQMG29qTr5rVPPiHvEsxDsmxTYtTg",
  "key19": "3TvpB8FaVSPJcL1RuLotND9rC3eZcKwEm77i1nUDQfGDjQDc6XXzm8cqvpwJH6jjwJ2LZh4Gs7zZGLLVQ7ugpWUw",
  "key20": "2uvcYVXKVT8br71Mu8p6NVr4TTkYrYLcUjh14xow43mQ3gakyYNNRDoynoiXpYtjZ6bndZrWoKNDNtfZSWtj5wMp",
  "key21": "wvPLxkHo5w5oyu9X38i38hVbnVbVapH9suHmw3v9xwMBeoxN29tC4pBzHCb1oS2nF991PQ9wCign1usqGbPj19w",
  "key22": "5dttX8mZW8ZkQfJSstG9XJcEGFJwdc9vERxVTnVcSUD7aHc2aKzZTTZjaoSRte1oqts6628JrSJT6z8Dre2WKzGA",
  "key23": "2jYoKrqaFzfqGaceGmXapKk5942d6bMd4wkSQaGgXskiVwM5qiRmkEvM9TEQVhm2uTodS3diBDNMuPUTakE7btkQ",
  "key24": "5mVEtkkW4SULzieM84W634QmATeji2oz1YkbyFkt2MjtnhmEhN1dKhBAgMtED7iqfnXYMbJU1CQUmyGWQF9LEXVM",
  "key25": "5pTb5efZHixjmQJn3GDucnA6ptUhGr9xYV5uhnhwjCcPaqt4BpKmwvVF98ifyKs8d25xVg1KpWhJmTXVn6UpUqoT",
  "key26": "Zjb3tuBkFqZQ4zEzKpaFAydRL8UFB1iaFQudi7NAbrYSTk55ayGGHX6AjrNKpVEvi1QjorovaPNy8RnQHpMWkCQ",
  "key27": "218jwGnLHkUB6R8zazHrJKdSGgMo2vydAeN4wDWsAt7zxdjUHhWd5GAQddN5RmKLiggW9vBttPazoLk55v4ncjbY",
  "key28": "3S1X2rPyCojSRFgTv77cNwxVSM2MogQSDnHfczAbkVpho3fRr3giBkmjzGMAVzYWaTgzYNZgxs2ESqsom29hi2CF",
  "key29": "4mVkWtG5jeKXpLre4tEPt4teqKzyS6ayaMmQzSuceaD7tLoSDAa94dpobXQPgxscS3fyj6CRkWD9KjksfbmNi2w",
  "key30": "5AyByxePzFWVPVPB4cAKjmfAJ5BTmF96fh1AbA4bTgjQCdEaoqEEvG1idsNaBHBjRnB8mzF19zEPZiqete2WyBuY",
  "key31": "3bMx8KfViZtW9YHMxgXrW61b9bKCKLpuJ9GSM9xCEeFkoHY9cz5ayF1TdqKFUhTFbwb4MxAvfy1RdvQNbxaDrxph",
  "key32": "gc2BkJLrNDNbuTHWfJytr4xJXd7ppbNKTuyCGU8EEaFYF9asyivo7RmxYZjy1fA2KzRpkeD1rgAc7uDNK6Dimvx",
  "key33": "LdimDvG5uBVKS1DDUexN6Pv5XGjeRpSGDDMz2WLGbbLWVMBxRaw8s4jY1YYh3tPRdzXBG5NynxuMsmUXSPhgHRQ",
  "key34": "6yi71FVcnuTd1n7tksQwhDDYVeGe3sM5oGwsnhJ2Kc6sBuoKBaT4e16noB6XoJyXygoPLuDE7kssAwGycUFVXvv",
  "key35": "gEFoF9cv7CgQRnkLHpxpbqikgmj7arH2yjPHo5ShZnJjeyboPieajLD4HG2fMpRWp8oepbDLRuu81w4CnCdKS8v",
  "key36": "5k8yKKBWtZxo18KJmLFNQUe4x8qr5Dwyc3Fo88hYkJKJHYcpg6zSeQ2gJELXcsEsKezgh6fvxnUNjLZ6aTwLgMwC",
  "key37": "XmcqqDDWpkeQ67kFUPPq3HUVnysHykJJskkd3LqSQ9nZzd4RJ5a7KkzUMfY9Hh22BxinKCS2nZBuasjgi6Qg36Y",
  "key38": "2mc1u6wH5BeP7ihgFN6kxHTps61UwmuBkLawLxHpyptmaGLDJqSWN33kiRn3FK4YxEzb3qBCTRSqX1BekCv63sgp",
  "key39": "4gC2C5UyS4dcPXFLx9Z63LZa1aw4opwXjeZwaZ317P6t4J1yfVpYrDBzxYPL9FZZxgR92Wrw6BXT95rYC5oJovoF",
  "key40": "2Gsr7fjC9E6NwtgCm39vmpHr5LM4MsaVQg67FPNGiyV6ZPkNCVVd4yfqfUoxNauVvdBGohPX6zZSBBMnVXRuMbmT",
  "key41": "3AX8uqJEzPkzy4HESTnR23KYEkgBmnfBTA1N7Td9bJzmmohR2oqLdKRq9SUqacCCx5JJNrT5JFxtUTT88eFR2NJ7",
  "key42": "2mz1cRyyR1Kd3EjB6cFj6JdAx6WAcqU9RYgtkiMMM6XyTJvn76zaduQuk5H2nyWh5maudaJfqFTQ8VDAfLQwpuNo",
  "key43": "5Q3CcL6KM7bi1WQJvqxzW5ExUkPL96BXW1KkSksj7hv2vCYMKaVgt1fFL2eaDKQksCifu3parxVwNr9StiqRv4Lx",
  "key44": "6cwvLWMwjGrtCMKjvPeLNsfQ2HS6WGRyBFjZDnURXg5YFDQ9HWwL2d22vvpXsHHiHxqbGr9CwvmJJmZU7iYjJsL",
  "key45": "5WvivfKbjU7iXEoseKDV3e2S4GhBADYdotddJy5Wc1Xdf51YEjjXCfxty22RKDPFfw8dJZZVBTW9twf45YbNrCGp",
  "key46": "THjnfzCQZSBdgGTsBPuAZbiJMxepKJowf4Ho4jwS8vkLRNdZpaaSFCL8HN7bg9qX2m72axgJzveDtcLu8wMcmd9",
  "key47": "4U5M1TbAtZxmuozvgBCnmbb23Ndz7rjfdn8nuG5NMEvn9LocZP25toYuisUNz8TeuUNePtDM68ZNsNTEDn2iSWJc",
  "key48": "4cDT45RMLp8Kn7ZKDjkvuxrRJ3tYSYz7BFfErYh5SJDQtVb9fYa26EB4GXzHqzWx7t5xwiyzo5CcvQNfdpLdyszo"
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
