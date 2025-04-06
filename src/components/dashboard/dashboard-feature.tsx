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
    "2EC8h2k68oabxWWxBMUZCeWoaJuzzzE2FELB8Hc6s3i2ybKoNaEbCSB24couewoQfUkKe6myo91YxaLyJ9S7rHa5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JFVnULgxNx6eu983pRwTEYmikMiEcho1V3tVrH4pBoMd52xs6s3ANiRouh5tHkSNkAPxoNt6iWrW1GABwP7tKj8",
  "key1": "4GD2sv9KwtN7Zvzr1zzuC56XWoHpN2A2avQmXrkdqjfaAT1w4QNCa4QRhaC56AxcumUwUwtpbSB931wF4iV5k4ac",
  "key2": "5JKxcH75rBHjqAnLhbKBvJUMrPDhgByY5BcT1WEbqLGCmvdzThCPaAL8H4ky8sEsB9amjg8qz1hE74Jn5KcoDZjN",
  "key3": "5ksRZ8uEz3Gm8XANzExRTGHiWGWgxCWwn3cwsUnvnewE3pVUjfbyniKj7mvKSGLmr7zUpDibzC5E7ZhH4C56du4L",
  "key4": "3ToTzHcyF12FBLERfgoCGaRgDTB5cqJGby1SKTbbznnu9dyxm2UXwSZsFEguNz6G6nyjq7d9G5MNQpA5sP3VwUKX",
  "key5": "1wUVJiDUxpy4eBryAwhGg3irymz9YyJKFGPmkJBFbwV7kHNwweS8WNZWAzDkkQW577Qsice8TF3LJCEPKVhkD3c",
  "key6": "kYvoKJp7xCTGDvHWCaP2JLt3rsqmieTVTnCPn7KkxmXC6sCHcCZ1PRYm8dBnVveJA4wrgFoimvw96iRx8H5BXCY",
  "key7": "2HeYd8wFAebadpsz91VWX1AisQQcWJ4QaWj7S4n1eN1QnFYNWFFM1SjZFtiFmTNJLD8vQMCysdaWtpLkhdBtftoX",
  "key8": "xtGX15XH3hqoZvJ8pCYFAGGoeC8HLwtD6JZzXhiJV4pt4u6tyVdrNmT6LFwB9beC5etUvGfmySbAki7CmvJbuWK",
  "key9": "BS59oTo8BraG48nk2BUAseWUzUFEQ3x9kUUx1TkDav99V37xcUmt8aJoBudtCHcBzThDmQPjDpPQDbwKwQntJrx",
  "key10": "2S9u96SUyJVvKur27kFH7GQLKZvqpCPJwKM7TtF47dVAMQcUGmzRErRY6ckfLVv5PJ69woKsU2WqCDBaFJR2qSe7",
  "key11": "4YfdPfczGkyFnjcTXj6NkBnf6SkM8eYe3uqoPB4cXuqNs8YZbyKwFoK7PGp6G1bKvQg2ekvmDr8u45JkFRvSfVsW",
  "key12": "3tHdNDJWSPyHozuFGx7KP6vYtCizxeyNkg21WXiUYvELRhhveeSmkUeWirGdsoi3SgDwKTzCGhYgLb7iswPYaei3",
  "key13": "2pkeFfy78jLrSYndQ1ReGktSDhTntJycVQfoqoy29v9mBK8RM5QgV9dp6VpmuchsRkYRPHULGDbsqDC94MM7kgxH",
  "key14": "44BqCb7H25cViKfwZV2aHV3PUU5vCFX3daya54sxDxxx9apCwLzBVqDaSoj8V5Ahk29XQhqjn2v7zyWoPLUYdvWk",
  "key15": "5vJLRKK23eRgmKEyURkQdqULLBsogsWpXsPuJEpsjke9Rpve2sc1BHKUHpTNxxJbZxUhHmGULZ1ZQUigxgoApaE3",
  "key16": "2vq9631iSf8j7HMZSz3Bb8MFEVw8fcSWUcJ9CaRnzDBMA5Sj8ysJBsJpiASU5NNGXk3uiieqJHTy5a9UNGcKWZ9r",
  "key17": "59yPfv81APP4ZcJvT1RPBwszckDE7CmGM45dQNikHG4feVu7wsNNRiJhxRoEbN7aPPceqKwQECyyNmr9XAZz1wLK",
  "key18": "5hTHu3hfD1cWEPR3VcapXVoSR7brV65BTEshpBokBvBvAhfZsmMDf9xzNCsTQoCA21MkCDqmFj6cRmr5LyiWkzh",
  "key19": "4wYQ4vxnqszNkMLtEPBLV4Qfdgh5HRAyq5yzC3pscdYKzF8zcC6eimhrWVVahwfFqDxuixFBKBCfYLnBpNi1ZsB1",
  "key20": "3nMg7Rk5r3SRY7yfsDYnn4F2ZQEfU8Qi1CTomMpbw5spbZVwsDskZafchwjnTiFSRYoCKyUWyk7jBrt1Z9onK79B",
  "key21": "RpdCDjxGtK7HiuDrm81YNbGp3dg6H7D23J3CDAxDJxACb5zd4ek7LpTt8gbDVuR2CWYURP9DCGULSwytMgWY2j8",
  "key22": "3A5TcDnih3B8buULuDzi8iJzupigYCbBVgSzff9wBy5DoKPNuioJKDDCw9gjUDHFZWtGTw3BwbeRX1WTeemrAgNF",
  "key23": "43Faiypx2DzfxAKa47Xhg2gMFr4eqCbN2qyRkDbVgpPMMM5ot8Zz5r92Qke5Z6dZECeyTb2KQAc8epjudzG6ADTf",
  "key24": "1Bfcttz6biWM2zWU2TZJvAmXMYTHAY4pDpdZwATPSmLLa5T3Kz2pK6865HtbXPhpNABjcCgkGo3Z7GuxW8FWHC3",
  "key25": "3hGLzrTMceJxWdmrgP1NXvZGsh9EivPXqscnudoTEFHA7N7c7Pux1sgMijWBxhsLHbYZTTwxmKnQcPJXgQNz6Z6D",
  "key26": "5JbtuV5dL8dswvUcFKzAxvDAa8SJkFqU6ffmu4TUtwTFjerhGUXPcLDueskYABUxDC5bxMrwd8z3XsYcSp4cwABj",
  "key27": "3MRqkSAyv8L4wwRwAMRjbDU254dmNi3gUbx2f9U1HXVqp7jwt8cJrsUpxJC4LM3raFdkjE5nKGFw3vPhY6Bv3xyn",
  "key28": "3MXaH53m2jHmUTfAtUW1Wabvj935LiadXh5wgztgbuRYdNu18dYvELjncifdoYGckt28Y5sAQr2ZQZZkq16MMiXf",
  "key29": "2fxTEymM493AC822WaequZ4KDBpN1s23acF2WSCw4yfvSmmBgXQk4jGyEC4twpC4mUDXQ2G2US7354TuhZqL5LCQ",
  "key30": "4SMjw8AUiLF2p2CNenaJw8Yscj8rzuZEqsjsiAQeGgyziMDnRPtfmbob3Ny9gaH1BuwcntuYs3dgtouBrcpuMSXn",
  "key31": "5jmDNehKLeafiPr8QVpYLjnSFmzq26mKv5YHzn5QXxd5oAhAcH6RSWHwTRUCvMf7RYamhD7LToTQkRxsRf4eiw84",
  "key32": "DHD4bA51JfkERTURyrhPAT38SkJtt6fuDSTSn8dJAT8U8J8NAW6veHx3ufBDFtr9Nw6yFD3bxq2ckNAiNTUcN51",
  "key33": "4sGkeU1RDGtRyiC1pWx2WgPU6wRrMpWHzi5VBgoLPoLVx7HsQzChRAqXUCpjC5yAV1eEpQXrKWjV2QZJmUrEVBHD",
  "key34": "3MSxpAmbibf55jsUWkajygXE4MYC5xEodHTof3W2KdBun6Uzu5JW197nQZBLchDsMKV5JV233NKJzfJuwDUwraGe",
  "key35": "2uk9Lj9WZF4z94ngz6VkNrPeBxy5Ec2UxGaBNuM8xdrGK1eWmfrgXCPwWmBVVuB1QkcVQrcN8PPXgod9wjgDLKS9",
  "key36": "4LZ77uxgiMrouJZizYZymHpWrt18wSZyLUyqkbpVVs1z5rUVBkUfaK7QKdk66LY6AigAJamqQu9W9iezB8XSuXp7",
  "key37": "4FsVUjt1ZNi645pCpSPPwS6VDn37VwpcJYM9ucokKj6tJNxuk5yPYA2RiA9nwjFv82yateXhpV97UkZFGW3aZPsq",
  "key38": "tLnC4zr11EjHFcUQEPjGzhV632e9DuiaRSpJuBU3kY9snNxoqbPnuAFkPceLG94nhqRQXhU4C4yz1RCBVGWapQ8",
  "key39": "2MWLvu8dBARNfMK17PwjNer1xFQsK9ujoVSfBssegk6o1YWHntSXswA87Afm2TPBsd5NFaKEmwYf43c5Vb8kZ3ZS",
  "key40": "5jDaCJzRmm1socoBJhHP4575Qmu2UizZXAKjdGXjTU35N42R1sioEpmCt7frSVrr5nNBR5C1ouZFchVqWUSYai1V",
  "key41": "3NYNz6cVrQRk7ZfpDajswaZuLVmdSDXe2mu1FMqYGBVLmuu6eeiJubuKD6QxbAXw72GoaiL2Lqcdk8QnniHXY3dF",
  "key42": "4oXc1xZWLoPLg8h6uECJ4Lu12YnHbX6ds6HtwJ9TQYmtZE52bNb3YXcbw2mo9RZ5PwGDEU11th2wj5bfbfZDFAhu",
  "key43": "4hV6ECutpUtGCYgiFUFFCV7qptvb1NpPwFX358Equjnq8nRLc3TGrph7kuFX4AdgrAAUaUcTwdyNnYbncwzwh2N3",
  "key44": "JcyLarubZXTewRoQnDkLbrSrp7oHSsR8ApprhKqdHYU81FV3SPi4fU31npbxixkV1ihw5vYeUSpRSwGDhM4BkfP",
  "key45": "41J4xxo9pdPd98AYuRJkjFCsPy9opg79CTbL2yfZiWpP28m64eWJXvF2odp2nEaMvQgHDHEuEUdLKMiooWuWaTDg",
  "key46": "2VCgR96Z9pdksURWp5tXPJwhUgfomGZhb33EB74nfmQHa3JQpWyhebRPG45f7iSALvjwTLNLEnD4JkcBzYWjELrc",
  "key47": "3VoLasFqne8J7TJsPVzXZvHmDj5XepGjmfYUcGgZdvPFVS8oNJNr4TRij5XtvRFqfiPb31j9Z1vG5u32Yb1TFShq"
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
