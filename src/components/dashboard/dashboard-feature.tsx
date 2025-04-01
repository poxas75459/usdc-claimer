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
    "3o7u9fKvCyCEKnrEdimN7MwML5GWSuCukNPhYrX6VgSd6pX8E1To5AkLHPXCSfGEukEt8QY6h8Hv9pWQsdQV87gx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nFJiMHJbcpRFB1rJvnunpohHQyehJHBTCezyvyqnRyn42YvDurUgnGdNSnHeYyUecsPKCcTdkDWJyEia8sfJ29v",
  "key1": "4pghRdVYZpnrmeoTmZCqa3A7inH96mGsmdQx1Lr2dFuKeDZjSVyB3mBK8WXNZxRZ6KocVXtjoJfdDXVkWhyWjCA8",
  "key2": "61rfNFZ3J74s12JULtk6qbZrAeJQNrBoug4szc1DXfDM2zMxiyGu2j8aa9M369UhvYzSTVh5teC4RqgEDMRZeb22",
  "key3": "gtoNzkaRD7Bm6rPxwjL3De5JVoHS81dDTM2UMaqq2bXYMRUSRqyceWn8sxMZgDeYPxX9adGbeztPjdJPsaqSZFG",
  "key4": "2ejTixtCMPYqsKs3jr4sDsiH5w8WquKh6Ace2HrGmnfFKGva8mc4ayfSK2nLWeGFxXZwncebvp5rVE4JLPjhNMgF",
  "key5": "4X4jG5uFHoFZAmd5XzpqjJNhxYomEtFBjwtBayrn3QWzGTxvwHd14qatimeV52aiSKu9crgcxGPpCWnxDf6eNdRp",
  "key6": "Ado2yT2m3gK14yGSaRLN6PY8ee5LsguiuWemLb55fdqhpTd8SKmKZCtyiMTruBrZZiT8umH5zxszYdxRKf91PQa",
  "key7": "3LSaLgsEXfkTMYPdbAYxmsyqq8BCe91fWmyyfFxg9JDukjqBLPcYwUkYAo5SHEDfR8XZsexUzJUwjBXj8HzxoehJ",
  "key8": "59AjaN8mXTRDZNi5CM3w2PMEBfksNNf1vxLW1SdMTrEiWGieweYwyx2Ufp2P3f8DrhxfNafdTcSTQqAVwyAdUYs7",
  "key9": "583u7Rkd1PMLMygmfJmfAdaiKqLvHSrMiRNF7PHJkt8YfDZnPeDjmN8U17tAzvr8T5dhSLYm2qU5nSE1tugg3quQ",
  "key10": "277ScoUTefuzh14vcxacW6eqGVV7tc31WNxSnwU66t8HBi8CF6yjqa4oiyTouCg2PU48D52Y7pAqyxLZrxbiwbyd",
  "key11": "66PqszX1zgdwuVCTHqLycewRj3Qde2xSsLdoCDnuXcvQfLJdy66i4ppbdJP5bcLG1mfAKoQJDSkCHpVJE2SNFMyw",
  "key12": "4byvZQLBXGwJ7wu5ckkFJ2DFdpyqLqCWWL6NeL98VxiLZSoMcKEfvywrr2Y3tHy8su9AgyKVA8dWcP3gLYgM2WN1",
  "key13": "2muSuwSKfTBXKEdzPSLUZtbCqtGu8LdcVMf8P49nrc4oFgz9ujMDQa6TxnxbpLRTYry5AptWr5tUVKz8sQY3TJUW",
  "key14": "5PPTU3VNz5NTrJs3LPqEQfZ58rUpQX5VETDUc9dG9g1nFa2o2Rcw4YiEM8trZPfC6Njx1yyYwc8wT39PWRQcsz5a",
  "key15": "2M5EaC3FZD7xoJffb3bDFbHyZA3dDKtdJMZngradmoTq5Cap3WNsX4narGf2B3uwThQw3tN1KdsYuZb5PMwzNS56",
  "key16": "3AtzHPyxBrPKnDCJSmoqjL8WRTFgfTHhrEKYTBL7M24yNXm2891S7E42oTDZKxsvJ1Bn1YjtCxXtJjMLQnfygJWq",
  "key17": "3MXggChCUAd7QSzw2jvxd4Kh1CTaSsqdCicYCVHSkf4PTP3zg9m54W9DjdQwx7x8qJVG1dbvYGH1T5G4cK1KS1cZ",
  "key18": "4DKxHyVGfn5XY4Fu3skWgC1QyyG7CXJXvjJEJTvossAKmfG8G44zsandiyb5fvxA4vC5pS8UUpqNhjgqMN5UrXor",
  "key19": "355A8CsCHdTso8QLZz7xcBkK5DURrzyCuWgSALueWb8J3TnCLA9dMfCPnVPAq6fNJgAdPMWQ4A6BFaeBpMgw2MYR",
  "key20": "i5WrZyS1MEoB9teKSYcZR81bar3w6dXK9RUUHVMznDSxLWVwCXiD6UUNWE9Abc9e5qvWcywFkAdpi4zxtAysgDn",
  "key21": "3LoW3uTsBqyQ4qqV6x4bxcDyzSVe6NJ22g4MXfZzUrSLWStuyqKTZbcJYVdywEcD84uqapFzH4GAMq1xgKAt9RnV",
  "key22": "2kDWivrA8DLnbh5bpBbxtFXekUjayN5P7J2FCBDwx2WDkzUytmZEBGtAusNSXGtPFUCyop4ZRXd8TvF6rqt6oipf",
  "key23": "2oHzy9pe7Z2XUDLmeG69rr1iZ7j1XxsWBbxYStfCQXpZ2cJMKLBpgeKMurZ8KiPMXyVFFASXYj996KadMEAZYTnb",
  "key24": "4eFc44KfMmrfYUpMQv9AVZ6vuGoiYX4uPSiFtm4siWbnCfQEQ8wMjST5pPkCivhu3qBzB1qxgdQ7RyoUH9Bv5KMC",
  "key25": "3JQS5sY2noy1dETtcM61puSyRD6T5d1R3hXMn6nfmvgkpKkzAqAMRiPveQwvb6ZnyFh9VAiVPBr2PhZdPhop6Wrp",
  "key26": "5v81No93pg2doMLP6jhNVC5qVZgjs1LUmRmr8PCMG9LPEvjNSeeHLZGDjqvrd5KDZos1Wy4CmKRR3NZLsojQghHY",
  "key27": "4qc2AuCVshSZKgz79898tWi71Qxpjcp2RjrZDrsAqT1fVCkKLLEn6qN43ugea2kJaT6PwxWQvouZbvm9mKXRQDDD",
  "key28": "31GzU8ojNM5ix3iLh9SSoKSABW8QF5WMWdaz5xdCp99oXgGc3AnkcqhFfdDFe82h7HYJe9rUKk9DoRFZ6vB2ugJW",
  "key29": "62rQ8A2KhNfDihwii6y7d6kqDbs3f7HMjfUPR8LBxisXtba2tMwxEm4d9rR32VCAMpCXULAoUGvnGukfmBqzkEfv",
  "key30": "315QAb18e2vJpZfYPL9GdyWGfVNMiq4S3aTmRL46qLiUkeCW3brvhdwWuTpK1gbjQQG8XFJMcxa4jzfhyscKkv7",
  "key31": "4GFV3wKttQPnc9wQ4V6rhEzvrXiAV63f5t9EbGJuSvtCNkVSgSqiGKVQVfiFrXGzVg3remPod9Rr5mbTULyBPxyw"
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
