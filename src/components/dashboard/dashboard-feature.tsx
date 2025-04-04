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
    "2veRayhc1rNh1P88cnVyK7wVSn7W8uxhKKhBXdpkHbHh45meQRkCzTVBFM4ejKeSPAH9wB7dmT9PYnyyVXXaQnaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9VSzMxEVruhijgpSnN9g6giQHG8suRse2uQE5qaLcDMqPCa5gGzpoT1SNVg2vg3noLmnHFXzQgWc4Dtv8F5ZyNM",
  "key1": "3Ro3c5DBGGdMi2ukRAdZfjvCsb923hrZfMdWpbcKN5WJKNntHB3jt5ZgBrN2b8KHd4KEu7frtqebqL3dcMXpN73S",
  "key2": "3aS5EzianBhqeFLNHbomD6pAgS1F6TjtSSbmaqkKAuhh7xreGLhoK9dVH9U5GTEzFmgwwoUQeUeoNj7gx7pFUXwE",
  "key3": "2ishDwgMbRKupft6fC4j7tNd15ZMRpNcqyvfwZQQv4H3DNuLNfdB3bmpWKUMBJfWb41kjDoKaJccTDHRc4SFpkXX",
  "key4": "4vYSzqqdSXA5vwZHDeZGiM7QsJdg3wPkLY1k6DKcB2htzHhmFsUoGDsntwZLz1vFNkaWew3Hs8B13utQijhCCcBi",
  "key5": "2LLJLpRBSwJ3WKha2WVnmLTazqAFsb9QYUhd8wBbmNBMSb2jog8uDpaJTu1ePduNFp2AKN64XaWxrSks5QMGKeV6",
  "key6": "32m3HE4X86HBMvBCS4YyqagkxPSEd6ZVVRMaXTwmHgroS5b6GAf54xJyrfdrj1XCycKJNxCb9wJaZHrazmR9WbkD",
  "key7": "5tKwsPY9cedoNJ7w7EZxcYh1VRnEQNiQ4gfXaGwKsP8RKJRfCr8xc8bfsHjD8sadpqbyd4T66wr1yu2ACFZB5pQJ",
  "key8": "KNcgYdNSB3bTT29WXzCXD9XBvm3btMBN2G29gjwgpqWG9osWz5aKBaSY7BDtaDBReRc5xmWTVkPRbNjptmFw6ak",
  "key9": "2BkWxXHzHoB3XnfuFRBWKnHqfYNHvGaFzcVoUsQ4uJPjgQWK1a5i9ZHWH1u6DZ3kxBfd96oyEidXjvBU1hnNi389",
  "key10": "3oTaihkiaUGaSMQCmf98eMWujeseoKAxoqLiMgpAULaG5Rwnvo99Cpyua8oFCngC7iYKYDkNtED1ZKmh2uW1T3vo",
  "key11": "25nfWbFFmTaC3yNMNsaR1y5qWQrwS9ozySDaNmyK3PNpLNhGyYRMKL6pjKhbppFPP3SsjoXjzptzxpykWRrdhR4j",
  "key12": "4KJGfL7RcE3vhw8prUGRUL1FnDMGXPTqo88AEdL54gYB6TA1dBgMMAsvJHGFKNQ2pNaAAzbR8eiLSZFzHG8DWizr",
  "key13": "4AUL5nwV4e6QJ3fUSszybsuLdMZeBVQ69neNHrkXB5hB1HQQ4dhs1ZgpWkPQ2pnXKff3PMLiHLjJ6h1gyArg6LEU",
  "key14": "62XMwMYqgGy75xYwwRKsoaNvZpzkwaCr3GnTcXwcYq2N7CirNfTgvxb7WCy4PdWLs46QfnLiT2oE8QhptzWCJtZ3",
  "key15": "DD3PfzeEpLtEx8hcEHSHnVWpgk2SPUNHX1BWF39YT4i7Lo44HYtUYDUab4quUuwoDE1qnT92YALXH95kQ6Qx6M1",
  "key16": "4QtqDtsJy6TDxaZuw1CKMcS6RvqMuc95C9Ajyw8qonfppiimrhbKge4Q1Fng6q5WHrYqwacYNncvMo96B8zuvJr8",
  "key17": "2QjFTe2vwWfC82DbAB949hDKMcTYCmXhnbzKFA1iSCfqEBkktpimzHnetsyKRg88m4yQGHzhRvWCuvaEyav29iqx",
  "key18": "2dGwKRnxno9NMqjxZUq5eUggGsqC5C68qXEHAyreYmJndzBbTDAG9qphej9sgM5g386Kpt6Hgr9W2LujWGhnwM1v",
  "key19": "63Z8vp6oe2k8hhzm737g49GnPdMn5zA28ReUfSdfaKn3tLB2uaz64nJ2q2N8Uq6vfT4bFKn3GJdUbyjMbHu9PUuy",
  "key20": "4s2hrL2c7sEeu4AkT4PcP4HLhuCfTU5Mmr8Dy5nKYaB1nqV2o87Dg9qbCxAvmfMxETjXuvuuS2fHwcC8VRLBmxC9",
  "key21": "4JFWsjao2coo1u3JBNzPncT1SSogqzTqvFukwpycQ8HN3vyNejBTGsRQ71RbRvLhjhepJxrY9fP9mxH7setArr2L",
  "key22": "3n7cckhF46bKDXNSYQvubvTHu7r5e3X1Db9XvK8fnokLFkRHWqHm5TTqnpqRV7hNcbsrqEzHqADDcUFiPSbw64Tq",
  "key23": "53P3a1kL2fffwu1x8Vx3uNsZdwwqHfvtK1wXnQ2r9dLqSTeCPiQAAJJHVLL6N3yuMoBH9vh3sHH68gYNGZYDB7BE",
  "key24": "3m4sHjsLgaFUFsM3UhL41q3w3KKM8kze1eLacLSfMZ7TRk68ha7LFbJwNbYDo6DRg333u3AJs24bW7EbviuQsM8Q",
  "key25": "qRbYADm6np1DaERDS59G8BCbzTPeUua7mqSwr7kvDSQsZeMwnETJs3o5njvNLkeyQuPafaovHeU7ztg3Fugcrid",
  "key26": "56V8ephehtXP1uACq3sakuNoVSCC9mypWt11HEYaaZjGuAWWGaaC369SRyt1LskE9ySGPadWvSKCev4ErRPEUs5z",
  "key27": "5gZvCifmLSPgdftgi4q3Nj4rvPAk6cfv86eKiFQdX25FK6ZDoAGkUAjSGGPNqZQ4oArxqhG2dqpfdcLZQBk3nnzH",
  "key28": "5MenYB1xKGDYm8Zxkezow6WkDe5cUpiPSn1yvA7bQDmrDgxzcXmUojnoKDtuA4zuYqRDE1jU32Z4LBnmRkJXEaLp",
  "key29": "3FPqNcFur7dG9Ttk2QpTy1f5oehdFby98jnmLStxUuLxbwaypcFC35NgEM1khqXyPdnfecYkyehHT1WM9KMorJ2Z",
  "key30": "Lto3DArUNHdfQUnt7vNFVSNRLm6QERqJTFZbqadfoXLqNBh2Rukv8rsdkVmLRfkC2ia3NKiBoGNmD9H5HtSDL5j",
  "key31": "uq1JvGFZSAiaTHBXHU3E73VzKqzLUcRvAg4CPQKwhM4QNpmvR2bWjheEgUSG7EnqVEpS1EPFM9JvrbAa5qxqtdJ",
  "key32": "23zAQ1WHemCEWXF2LqAV38JhEVhZtX9fKdkM6dTai76evVnvg7Wa8vY2G2VhA22rgs43cG64KHrK44ZoyL7guQHJ",
  "key33": "5YYyupgHZkHqBAn1nf6Hz6aSLn3xxzUBcSSq1F5MRTUsQ53C4QUN5v2mMycQvgMo5RPdPTvwPpp7EspQe1wD886N",
  "key34": "2KChScKmQA4XF7wrSnDQsu1gEyTFodvnA8njUHvmxHaCd4VBGYo8NKdFuRkDHioJK4vrraJ1ctSYGTdbJtHBPnYZ",
  "key35": "jDrRi7PdBTwxBWLVbqd6owQgyFqgd8NfCyitjgx9sQzqfZLaPd29ygXvqzbD9168oYCFxLX5oWQjsVSkhiVZAmp",
  "key36": "3dHLmNSY558k2xn1w2DDertQLCiacs6862p1Q5W7hH6xNoD9gVRFdXo7971NJmYGpS8AjsHNLcnNr9ia5LNxx3e4",
  "key37": "31rDGKeMLUxpG5CCurhqeKKeocmujhFWFo4hFBhT6YDNWobtqS2v85joywPd6aGVbPxgDSLytUM9n5z1ApVBUt2A",
  "key38": "2YU8C7jMPixjBg5Y167aQ4esnU5MeVumkvc4ZMQps4nwNodLhZGbbds3mVTuxKKGQgPgVvrQub8oSixLNLrf2mTi",
  "key39": "3g6VHUNeRH5R1MZ4LCmTGQmwCvtoe5XuQE9tkt76R2bcowBwX7XgyHnZV9tm5tz2G2vE9RWvH87WqSdSBCG91J8Z",
  "key40": "44MwiKhKRF1HKHcPFErRpiXY1PQQ3hzvyKLchZ3g63xJeLQACx5X1y2vdEQ1Cx6ioRxmYQSFR44HB3GcJ4J2Dvnj",
  "key41": "3ejAKQvbQn2gvg55hxdKcEQa4jP3xiWvJv6QYtx1ijaosY3uLrgWknrxfWaBypaStqnfTNKiWjKHqpn36MQjwjZs",
  "key42": "4gcmEvwCXwigfV7wR77hYP4m4s5s2ZPkwcwG5NEiiVt6s7NTXZVABnbmVQWuDVENowiFGPYWkonx2LzTDmpyeq2U",
  "key43": "617AszqTafJattpLWEFZVpi2ekt9C3n3WH5cQ1XARzgpUry1v45fPemjaYPQeD1YTNDW5WJbftv2pZECQomdS7dZ"
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
