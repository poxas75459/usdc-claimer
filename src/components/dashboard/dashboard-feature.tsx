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
    "LWukoVxuTENGsZQtYx7LixAgDP9j2EYRVXsp99CGR5rokdLoNAaREF3m3SaAWpUpD7My6wAA6oYunYqEXu9eGWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WThDenE6Hz62pTzoNBDZiXhg7Aa8TKWTbU6uq7NWfZC1Wn5ERQGUCd64MXgcKSqK3FPESu8cqSZvaabtyijKPL4",
  "key1": "5BQ8vZWBGkMce8rmJ8oGenbdyDwDCkSC2UFmqMzXRNXHqvzTtQw9RZfYkAFVjq4cfywwRezbxbjFYs4bxuUabrYU",
  "key2": "3zkbHscqC7q9QoysweA1amtgkPLEtrBUa7PRhhtEZPHJu87kSfnifbP5R27KnUGSrHhR1moz7E7s8zbuZBkLKuaE",
  "key3": "3onaMh7bhH127f2G4ErGUrCzz4kmxi1evqnTHX9n7ohiXvHf4Hb1tE4bUuxzdkMy8PoEotiJSEDEZtK9UHafhihy",
  "key4": "phuZPzc3G1D5kP6RZr1LwCrpWArisWy2iNbS7qQ1hNSWWUsJ1nMcLYHgfEwkpCZf2hmqnHfPPhujHjbY51thtC6",
  "key5": "3ZNVwMS8hteKcc3NVEsLczMjd7dmtXkDyWAJWWxmBFEGRZYkLsNQwDjSbN3THejdJ6AEhidnVBZkoUjdqoiXrKdA",
  "key6": "5uA5iQVm6i6MBoCaEydwCneiLcmLnqSrhXnUHC6M4v8jX2HytXHuVWLRzd4DWfQYjhK7B2jgxrMMbdobYZnHwk1R",
  "key7": "4qQuABuwPKMAB31ZbiFHRXP7NFVjgsu9xoLzrkVZmPoFKgfSzVgjnpDTwGj9BW2PaMZ5uVirThnFjc8J1WuxrFt4",
  "key8": "2b1VSFLJEfpqxHaxpxJXAteFKSdQuZfvALUsyAiAkruPQRp1wDdZFwT2TCoKq1UhzfAdyhHv8r3p42Vz6Q2s6idi",
  "key9": "UhcNhci6o1DDaGpYVTadJAHEUvRf8S83fErQpzMQ4s9BwDwFYcMfoAKZETqNnDcprkTs5m5L4e78RmC9gRgQA4r",
  "key10": "4is6Ehfr5sepqpNHA51oXUux8qfkSASyT6WAvGqkWxmQbENb4XN2T8TGScKJMk6st72HNw3LnXyGvKKWWnTuEFNg",
  "key11": "4eMWCNkMSKrRvHKNZNs479AY2jZDnzpdyovVwNy4HmuNpSVhsCL5T6KK4fdhfRnUwvuYqpDiodPn9pEjQTG9dZTe",
  "key12": "2cYfvcHKLxEE6DGUkKi9xz9eFNP49hs8ZzJ2WeMkZGdpcpSYAPXLunZNqK4u4qNQypm9Pa8JHKYX8Eoe697VJQqX",
  "key13": "noNbVa45uUXC13YoGoCpunCE43hLASSkP2nHDZ7q61oth6HTL6ycUEsb6RXhBvE9afbtexKkPuj4jxkWUnvtu6i",
  "key14": "2cmi4n8UPs7SVVCeLjZABDLXMmsXtU3U6pAJCvrmJyzfcLcLbNkvYbHmQXGizr46kByV2qjgqeCdRbhHR7eQ5Wpt",
  "key15": "2DW9jfz888LLcahCh3io1Sfy7xwJe2vat9Yt6FTZhEsFdsgGUTdf2dSNmcoJwQFXPtdG4ofQ392cez2mH199v8YX",
  "key16": "5iaG2ArkvPD4TPusmsgUZqE7G5qsHU442WkVPTb8suhB9WPTG8Xm3bZkNsfrkYHoKNf4TkNR8Wehvv8zHwPnwBQs",
  "key17": "3pr1mL7qk7D18Lov2a1ZTgV8g2zfBXEfMc5NVuJw6biTkBF7ZnU6CKeh4K17EjWHJTiGW27sWVuywXa2qCzSxWhc",
  "key18": "48ZkbCGQGoSkahBpoeqzUosdKVKVpe15ErgvTpVgD32EdFpsxGELMPACFoQUv5KimNhb4eoVszD6piB8Pcm7owgx",
  "key19": "5v2MYiUbnV6iDcr6yUYp2XZV1kitCSe2aVqyF8W7PiLW59bGp9CzdDJwUuYghuncmyiHfG65MYkWv24SQjoWRihS",
  "key20": "2VWJYCbVfxrh8GFzF8wSj3VBK4dnEpNCi11EXRRBHcqB3vtHqH23FznX6pUuJhBn4nB1mW1vwhjuqiRxdsidCztQ",
  "key21": "4NGQdB2NAbxYXwQb49xxzjzSis6DackbZdw5BgeemeX27zcT7D441Ft1EzmWjhHWsHUSZQeuQsz7M28jZaSEMYDd",
  "key22": "2KvP52crWuCVkXuowM1DGCUWYVyBHMvg7kZTH9oa3G7qsbnTRX1cN8oPu2NRpX68pduaeR2NquyrsMzVTiExcS7F",
  "key23": "2TPCWbutnR7TWhehyQwPZutivLCVvvxSn3kfiTikvCwD5ukVABGYhXKiTwjacBHdQ49QnRGiabAZPh9aTzfqkLiN",
  "key24": "3Chs6cHmbRVvvPZbPLoynERgkubt9QLMeYmSb5YydnkzQZUg18ZpKHTrsYrhyHKPexhjJXk6fXSheLtmS4iYSssK",
  "key25": "5jhrmJRN8gz6ekNAFV3GwGhU31BB29LWjqU1D4tKpSgXkxz7FYndxcXMAWk7ixkLC6vcnnuTmmQbcnoqC6Ji1tY8",
  "key26": "67DsZcjjALsGcYP8Tyz4nBLjP8tw84cTgeqHtJR5QoXtgBR1rCcKSFSJnckqBhqQsdirjqeEowRTf8qHpDHqwAwp",
  "key27": "98cX4MxjhprQz24XZ2TaMiPrWUCJoXEhjR13j7xTwTSzesKVzm61XPYY33EKNVFmrju4VAvrBfhXwyozhTW6Jpq",
  "key28": "HQcukG8dkohaEVgk8ucSGg9dqwfXDSP3gMpnw61pSRy64GqvC6PmvPxrcVgBBToTF15KipZmBys8N1Key2nterb",
  "key29": "3cPNwDpLTx6Jz1nZra85ZJr7P56xP6fuLXzywSmPUPBdwaTHkMDeopWWZhyDEWq6JwmaVGrNGDXKMRgJkWisSjgY",
  "key30": "52BJ6wCGjBHFUsAAkSTjuLYHb8SHwZYiaaxA89HLsRcxniPRvfnC2nxvS9917C1KWSEgYfTWyMCo1XYrPYSn6gwS",
  "key31": "28w8DWvuq3LhxNN6Mfd2r4mfjvRS58dxCvNUD9Qxe9xvRrzspzcHVAYLw69TzdgAvRdSmEGtNFRB2MNw1TxoavzX",
  "key32": "rScWF8jcWbjxx9Hr3WE6V8VutfWVLfJMyZx1PmjndjdPjxKkjUncQHys9TMTRLoNyA9WtD25vTtyNsLjW31YuHC",
  "key33": "26BDmnSn3qefygewjPfRECHUNadyzWoEr3a2XdthUHkBikDkqwQnNdLKqP5fLPq71jrVtmxSoAhJpVv4Vd3K2vGp",
  "key34": "cRQQuaozXgMBj9fCnwkjDY8wyMik5GAmFuwvErBxFXiNLTzzBGzS5ZxXSL5YVh8Wy5aeFmVaNvDNQhd1oyc9o7g",
  "key35": "3FxcGhKoaFtTFJax2LjdsmVwjWmCugmTx42GqNbZeb2mnhbw6hpWgdPJntoc1URBsmmZS1BD596R9Xbchn6tYW1H",
  "key36": "4d9ubkxxymb6z251LhZxYKqz68tidKbxdbp2YbeqtKxyxwStrZj5XBps5aYS7pwF9AVF7g3DWXHnQmkwBR5TKZXh"
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
