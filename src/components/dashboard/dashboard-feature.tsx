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
    "3Pt9LTfE3kkY5bNA9wUnRVo3hhd8Lam6nBD86mirAiCu3RfSNmo9SGSnYthir9ZXR2wEHHQ2EDhAwDQTC5XyKBdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SsmqKMxqRoDztDB1vaSe4pxLXeCdtgpuTvbgCmJUQwn9Fu5vgeQa7qfSrTrorNBkVs8pigydJZQTCBhdMfLNFdd",
  "key1": "3ycK4ub8y7CbvFY2Za4y9fautz3E2NvX68MoFNjMJgkNAhXrP8vkVefh1fHGTscss2UuA1ZcDoHjrNCHmjwxpmGn",
  "key2": "3Swn1dXn2AVQ1djchxSz7PyncQCr6eAPkWSAdzcd3XgScbcf8kceD69mx6WHzGtqFDEcfcveqJJSf9aWTpd3RSXt",
  "key3": "2iyp3GXQCeDzpsPNnCTVBXoaL5FH782svG8WeQX2V13J7ZCdvTA3XDrxfSXqhpyBw7U8Kr2zWFTNYTZKMhNPNvRz",
  "key4": "3Rs9w8aHtKQEXo75XjX9p5XYdXojgr4YdX9g7vQ1MtN4qT7CiY3HUxNoSkE7Hsvxb68d5redrSs7FBYRVcdDKwsx",
  "key5": "5EZG1yKaWWQ2ytJ4nnRxwwxziLxfgLxEQVKwAwuWKU36xTZ5tNaiPSYXD15FJhkc5sVN7NncZLVbYhmyyzQ6sefS",
  "key6": "4oxY1NK5ptmpk9baF4MeHz1k8AHga8hkrng6tvcYB1Zjvanw3LQahGRC2fFrcpAVuH22NVTBQpfirWYRLHXPECwh",
  "key7": "QKfm9quzA3fnB2pHH8skDLXSzXRbUhfmFscDX43KKncNcpEhyoJVLz5PWFtBdsrSqGn6aQqFdzbcpCH9oHXwWw8",
  "key8": "66VWdpANUA2b8Uorkwyjcoz6pWrRexehvDTRa3WCHJRBKwucCAQ6ksjcaa5XHTp4fGVbxwCLDQaqrHb8WQBRoRbD",
  "key9": "3uwDrV7ECeYdEf4X4xnSHMbJfo2gxotkh1cXJdYRtdPFRpjh2sAALAR4vsFKiHhaaACvKMpuYjHnVRtSkdLirFU2",
  "key10": "4JATQEy2o89ENzSsmLjdDVGY1LpjhER8wyPswvf9CCijkV3kprtJymhKks3hXpHkmTDjKEWyDWNDhu1MRpJ437vr",
  "key11": "71Cirb3vGkAx9K44mYQwkguWydJkFevqzkHf4o9JtnUN2zAJECGG9hnzygkc7Bf9H8DqWfcXDhU6vNEqu17M5Rd",
  "key12": "4rLUTvks6f4GNwSp7HqfzJJUtRVoFcyninNzF7RXiue19m3pYWTeUx96cVcbfrVamAN7GXaT5CsWRwkgFPujBA4T",
  "key13": "3mZXpdCGiVqYUSpHzhVoMBBVq6f5Y4pwHF4Bh7jUDkyG3Bbkmx5GQNNsXHAvg2xVYxJ4Wz7Fc3vUNp62N1Hw6gUd",
  "key14": "4QeQQP3xyXRfN7mDi44rriCc9Z3LiAMa1Q89FPNaGFTEcMG4zE3GjPpyYTUH1A931B9ZNbbt9UD25J3RouF4ctVd",
  "key15": "2v4D8Vr4cFAJYRhNcwVnm5Pta6vwu1L91ax1uQ2CiYT6mTEpEd8AZ7yZEda7v9nVdpzxrAnZDKnR344BdwU5MxMc",
  "key16": "dcMbVXKvZZD85nUDbExiCGy7jzvSppM51XcKY1yB1HBiV4bGrNSeCw7CrEtGvC8PwNhbd8wWn1owVbJcPzK83qC",
  "key17": "29g7zXsx4VRZaQ6evGJ8u5nbAYNnjiJm7YxBJRptmFgKMNRL6jmknwYAqqysJUHZX89DfZnYYfsAdi2P2uVw5mRy",
  "key18": "3t6hctJu1yUNAyDMvmsfeXe6nDshwHDrDrmDXQP2QMcS7cKMVsyTsKL97ocZM6EHj2BETi6Nd6c6R9XZXtnLEDfh",
  "key19": "2yj7G1fYeBGtKDrJ3vHHpLUubyFodU188aMRM4mWwDsM898Pmu29Q3gpPrJjZTPizscujpFpXAP9Cyy82zES6f4j",
  "key20": "4NJ5ysn6bYoKGdWv2L2GTKN7KgdLcYqdSurCsUsFbWjqkfRz7jX9v59W8n2rJ2JYJwfMqbu49XepK1LDyr1Zivbs",
  "key21": "5fesk6no7PqUeQgQgxZErqfha3MttAzf62e3AZcsyeTefkXmK6TTeLFJ8tE654BVe4tZ7BCnThRXcTojZEBkvAUw",
  "key22": "4xmURs3emRRahxwxPukwSb2JMc3hmQvrhxypdyMYNK54AqxdpRouAWswJSfqW5inf58FkbaqRxos8wkDNoi61bDG",
  "key23": "cAPN95UBYQZV6pV8tDkZGCEstJCCR1ecSPhgok9qaB6LLUP88h7AQDG3K2G2iD5pqbgpXsZciWfX6YP1X2eQgtz",
  "key24": "3QLk2sz1pZs1c2E3hjJ3HFiKTTWovvXTreVDFkwLgRW1yk1ZPDj4gMfAtxvBwQk5UzqxYVhUu6T8Qwe16a79kS1o",
  "key25": "3s1YnPtqVUB1TGn4g2G786xJWCqQAyfqxdxMhcGghbUc98Q7yPdEEt4Yoj1Wwd5buL1gLHbCDW4r8fhHbHTcPHWC"
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
