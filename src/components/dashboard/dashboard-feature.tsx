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
    "ZE1m8gDEpdMiktQLqYJJNCUfc3ervYyhBsHSavLWkTfhpxx4HoPKZToxU99CtGKqJfWMkFpyj7mbXWKWyUjRrqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4acCvkBvZeprERwcPFV2tVFL7tJhx6XdBemG6mVGDH47vYoZyA66BmUMsTFY1uQiZ8RaRGV4GE2c6HzU8pPvBEDr",
  "key1": "4EEeQVR5Bbv1NuaqbhkkcwpcfXUBv8GkwLiLZa8quW567j2cG9P5kVSdeJetypDkQ1CEMgUbPbZd7N79sknnNnLD",
  "key2": "3wnvKYFzN4WCR5s9x66QqrgUo88WK91JhH3zn6Wm159EW3p7GeaCWwin2jCWe3bbkuUgTsZBTWQZEYBoC5rAd3wA",
  "key3": "4XjXa8LvYndYT9Ym6EVhRQG1F7YxeRyu7cXadkKDCtWDfZHPPu1McSbo1sXEHr1cvE4ekquPQgR3zA4ZYP52UwPg",
  "key4": "3cJukyswc71unmVNHjWr7Dsn94rkiLGpnMBXjGBCs35rcWWRsNrcmVaZs7Vh3S2f3HC8jtvzuKU73hh1n1dLqhqD",
  "key5": "pKMS7X1FhTbon5ntrZD6Xoz3DZWuw5keSUdBYLAoCSq3XmNzn3CgZESQqpmd9xkcBFYvpjxQbYLA6h2JQuyTZJw",
  "key6": "5seTGydkHBVRkmrWobdmPSimgo8Q9k7bUP8Zqt6UExEpQ5PFmEBBJ4rL25s7oAG1B2BgfTYzJYjs4mQNgoTi1MV5",
  "key7": "4g6JCu8z52aAQgHZ58QXmJHXydV1TTWiLQCsLboR96ddyg6SQYB4WadjwVGSFUL5tYDoVBjsmyABjpKYoiM8wLoo",
  "key8": "5zjkR4aEDBSriy1aMSLUEX9zugQRvEugWpywLntFARFyDMXHbg3ALLZ5semwHVWURADL2VrZD3aNurFUDscT9MFQ",
  "key9": "59DrhQ86NdbxYB3634HRixPjJUZQLVocVWpNbp6axVocTr5nUgRVoq4Rpz5g6bBWrxVB4QRSmmykgBNujoZxR1ba",
  "key10": "4zCER5PLPYuivYzRjisFq3Xz5ZdzqSP2evRKQe2QqiqtxwLMhBJShVFvXMupUQ6fnefoifyWKWViAdghJub5mRpC",
  "key11": "5e4ip3uThoo7y9pN5z3ysS3efoJ6B3pXF7DTCaqRLoBRebX9Pdk3fQ2CGQ3X1r7B5LGXU2F7uyN7eDLb3AGCsWr5",
  "key12": "353T5S7wjsEDdHDoa7CbZd7jEtM5yGBEUo7Mwt49qvJP51esdPyUDfjnNEXKxeQn1zbfm1M7WAYURjs7MfV3mdD",
  "key13": "2KPyCRYLbVPKZRimb5MTbwUjAmCxC6f6DPGhxgjaQEmYbNsgSEzMQWZPeCvTJ7idrX6LyG7Bw51CPy313Nx6Dwab",
  "key14": "31m2Z5wwChsBjEwbxkm7WxEvHJ1ivK1q5nME6v1z6u4LtoCLHVN8r3KbqVkvZnD2XbNvWENonstiEtt8bqPKfEoP",
  "key15": "6xxsZEQDV4NM4uo4kpz5Afei8JjHMTWrvVTYs7KcfVsYwBBw5a8eZQ1kRoXDoyTVj5yy9jRo9FiNchbAsk8QaXA",
  "key16": "3taHEUPyptGQ7pgAQLViaFyScY8rU4Pazi871KWaCkcPiEjaEMrBSwy3xjU4cBHDMU817vVz3bGQvjt5CVKvgpcL",
  "key17": "YmHYeoZXPnPfM8CdmLnTwSqY6qCuWD8rQVj3Z4ovQCqzJpHNpVBB5nm4RUyhurJMrZZye22TTxKBtkgKn4bvezR",
  "key18": "1y6XriRXEwFe9Shj6om4fidbdGf4iNVMSrAiuRgcAXTSCCNZg8BWpNwQwnMXfGGJQX8n7AjFVmKZMRYBX7tzLNU",
  "key19": "eXxoRGQthDN8WsAJUXbQRX4D5gaMdKzXHsTShsSpVGcTj4u23ZdBrpwTqn7HEWQSdy8mcuQBJD1ZPRvFEURzwDP",
  "key20": "5q5WUqxmSvP6sraaJn9XJ3CqbEen6RbFyB8ZpFLPX5CBTLV4zCsoK1W8Wm1ZXs4E633uepA4z1ccQ4HHDCCQVwqe",
  "key21": "2aVTbjXJq2PG1mzYHa6veucxgwuqmqFXp1kNUXdSPEZ3xS7x79Z6LCFPcyFtBhth5hbxKSB45AG2gvykeg2SLYTo",
  "key22": "3mSeUwuYwwPT43y51xY391isUKNvHhwNFfBg1WxnW86GnvVscyZWufmRhuTvgUd6ivMmEWAVhCjbpyAhijp1wTVE",
  "key23": "2e8S2F2PnDMNbsydDvKwjPMuSg6MGdm87ph4xrUPWgpXqZ5bjYEpWWeFqnDBFajnREottVdRxvBurFEEfFcHLzUN",
  "key24": "2TBK5NWrtU2q1zT6zngEoLPw6DKxWnxFWLSWooE9bsYYGuJbBxWuACctpyEA9afBgGfyvBsDTmV7CUVeRBMFv8J1",
  "key25": "4PksqH66ZmoSb7go7AT56ogrcbJ75563cj5VEjFdyHSWqgWzRpFVJiD1BE7yoSyZEAmKJCQLJoW4AJKPdgRTnRak",
  "key26": "2Ved3nevfd5YZre3mRcL5N8YBfh9U3nTiopr1x5FbHQwqpKEfnaHNAjNNLKQXS4xeDucpZ6KnpkZLfbEK132aXoi",
  "key27": "372jNWyrjJadwGxmVPcyEfoHuPxg5J2VjgqkyGFgMT32tFX9m58xzx4VnZByYU8maWRHy8kgZ3eJ7PWUFxgXyjwS",
  "key28": "3WD7MvDC7kKni4xconnzcSbvP4d8zpuJDAZvhUAG5avxb7H6Q691oowZeMYeP2zWQmo1iQS94V4dFV3JgE4Az8Sv",
  "key29": "4YYTjmBdgT8dBSSFRWPMYj9RmDukuKpd1HH4i8eXpzR2AJmBd88RqhmjuWUU9Y9uqep57ZmxE4uXW5XTQtFuNWvE",
  "key30": "2P9iE59hbXZnbXQAPodBGA44iRrSkyCTB9wawh93QzafEouaDn2P8Fy8n4Xpkkvw2743TxGaJtgVMpFypCDSPRDw",
  "key31": "oaBGy6bnLcCuftV8rM48Kh2HrFNwasALgSD1Po7XyX8cUfvMQ4zzSNz5XwZU7wmnnkJo1UL83LYAwxLyYtB3Qm6",
  "key32": "5ZxTzpWwuEeUaFcTbP12XpQo1HaaeSLm192gVU8jhDWur7Wiuf7TaCbDbjh2bGnsNN9XSE8g29aqzFwHHkigsou2",
  "key33": "5Lqt6thVtc1cwvoecTRc1NDXbVeKYiEeMMPEAzGzewcFpBWdpqHr13nhujdEMkmkdeb3VDvKX6LLHsxdU8N8KYU7",
  "key34": "2unvvyYQafFJjUxzv4Gkj6MDyN7pesA4LPecM5ng4tZUxYr6VPy8NdJubu994caSXZ6csDrEfEzDU9mQTbFDXnmc",
  "key35": "3sXpFtvoMQ71Jum7RuX6DeXDM4HhacFejU95k8RKoQbsRoSXcSo4i7J2iCpgksnc3Va3CtZAKZt3mHZkyGJrtzD9"
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
