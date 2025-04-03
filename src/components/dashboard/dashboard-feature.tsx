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
    "239f4h8a7TDB5Eu1a35YkPnExi6hSAY323gQC81GRBc3JNsfLCJpdcLvgNTcEQYXmDE54keUpAKcuUukhyrpByDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ew5134gZRHgm7Zw7LgVJccxYWjZ1bL8XZHRMtgeZbMiihBrdh2S96MzytiiLVsraYLoazmkyiUxDjswCideYjYp",
  "key1": "4jSK5AWRxmt5ToKjZBepCEgdmkkTWssamN3mU9nX88gHfj7gAEMLKm3caVi7rcGRZEdd6yzonZjCyuvd7pXtudJg",
  "key2": "3e1WTkZcyEZhDKHAvkmRcrRJ2cadMJEstNBXBEfEyLgLYSSGqZcQ93yWTPqzhwZe1uXgDXLa8n8SN3AgHYYYrARP",
  "key3": "3DeZ9MfpDtyz1sagtonefU1vYzFhnoA4smQrvqCpai6t3hyw8SHWeJwacG9ePdV3Fs9D8vFwhyFtipxxzzHDMUGi",
  "key4": "2c82mHiRESEJ933SZV2YENNzsmLbyx4ztgnB6jzMsmKnX7eakXt4otXY65v7MrUnQwmMtDNvnXRrxqet6wG6ocw3",
  "key5": "4SDnpQKYcytyfnCY31LBjwCBAzPBEbL2KvRdXxafGMwnnYkBmVMrVdKDtZok2Brrkxr6RG5uwbXHetPMXmer5edS",
  "key6": "5LShfp6miuUReUfZmAhzbdvm7bhMgWJz4pxKGubU16uGXMb3aM7VWSDiA3Po1WdVADqzwhFqoa24NMDx9e5QK7YB",
  "key7": "5e8vp3MAxbGwBSZ7knH8YutpBHmNFiMhec4hcqaQbA2yLfL7WjJaqaEBs9A9zNLMYNco6Ect9y97waLs3ZHQbfzv",
  "key8": "2ALRg8kSNeJGEpyV3HuWuwUGydzocAKB83VVxZ6LJfWzTMsefRFzCsFFt8KbdkxBhj4wKJGMLFW8gmbTS4q4jqMQ",
  "key9": "2eCDkDssuis1XxEvwkowR9zm88xt6sYZx9ucDwh4CykhUtCgNbgKDbsC2WfQFn3dDAfSY9jLyk3jEJtHf7dRBPpj",
  "key10": "3zaUdAAkf1gSG7AZfMZPREDnv5JiYWNKEYqGjch6ZetG1CJwpPQ3QzKXBuThDBsiCoQzJZiCsmJoLuu1583EYQSR",
  "key11": "29ynSVGcgnzWcQxP5wFW8pL2GBrY5yH5RWa8q2sUVrkuzPK67UGsoVWBSAHeC7KopL4ja6jNM42h9pj7zNAB76wj",
  "key12": "4pRbz3zyyArPXhWjPJkeDset9GQDuXQhLsM12QME3r6dbq5f9FDfsQw5FEw2K39VscquFDGcNkYAq6HZJ9XNPKXN",
  "key13": "3MQTaNiyR5RaNgrgH7TzoKv1u9Rp2yb98QtpRVEgtjthugmttAom3uyMeNLTtHYsBQ7XDAhwGTUCvJ77W3tj9Z85",
  "key14": "3qBnu4MAqD2PBhX5yRhNHZ2TrNCnFPxBpChBTDk4dr1vs7fa433rqBEXxXcdyKWEftUU38mazF11mTmhmebYS4ec",
  "key15": "5Mydd6euhWNAe8ZvPr7f5roo1WG4MZJMqXruxCx7WgiKWmDAYruFmPHeAhR7C4HSZRe6CvuZjtKrwQqSygokhjqr",
  "key16": "3hkgD4paYqnRtdKvxy8CgQCLRv193K72cjqw53NnowQo8MPHar6NayKmDmcnGqPJJi3F1Qm6Na2AiNdReqg6W5oo",
  "key17": "4ijANwBpr4ZpPNd8mHYFMkzVHbQKeLZ2dG8bzXpDKQg66j7KMFBo2BAkmc8YmSwcD8PRGRYhUKSTgzVos4Awp3g4",
  "key18": "4aAeEScXeTdPq8feFfLiqpzgPL4zvzy7xf6norn8keb7cJrasqKK526GRNMENUByLtPjZ5KS9CiTJkGZofehnNk",
  "key19": "5y9LjEq2GrnjEEiVkcyNsJoenmGPrcGrH6daaTtap1s4imt3rj8syNkunAydX6hku3EDJrG3GrRWeW35TF38qUbf",
  "key20": "61AdF9UUf1jdPhcu42KnKYk1ZaW87db1EDNACdsPicwtiMQm3q2KDAnYET5p6VbcwxpsnqXcTP9S8pyJtGe8ij4D",
  "key21": "GuCQP4t7ANcckec4bEPgiYGasCe1F4vjf1BgH9L3uFrQkqxT6eHVi3bAMm2bWVgvhyCTbw65n5bRruBKQ6R8zK7",
  "key22": "5i6nejCHEcQp54GgNDvDd6NfcQo5Y4okZB22Js6weYLMtodvQgq3fcfJ7CrFHmcsph3x9xxuuutGNQdkg9jMAPrK",
  "key23": "GQ3fJRMumqcLFBhufwCN87uiQrLaBDt4gpNPgooxEk2YKt35fGQeqm8SR7ZaktCtCERbJNrECR3f2DY4i9SapmC",
  "key24": "4A7cgzXpfCo7zPLhiACX86gUUakNYsH2dDmqt5E3NeE1MEkbPHnBpeHbMTE2Br5ekef2SXjhUbCCELTPgQUtokJq",
  "key25": "5Dp6WS9kCCpqn9sVVFfi6aKyLQwWMrALTJi2oDVLiJjj8ktCHtMRVZddQgWaUDeW2mcdmtDZ5UPVVy3avyh1de7B",
  "key26": "5MJ34WZDDZDbFAZStv8LEK8eqxaujWLNwhCgQTB3mQa5fyjcEA1C3RSfyfzjRpwDj8YBzvz4dHVh6h1JYCBKsx93",
  "key27": "3b3soPXBG11jbrKXg5iQ9v4wXfdoe15Q6cRezrDXevb6YVH6mwzPcjKTu8tX2CgJEfi63G7hBHv3yk15EHhgd6EH",
  "key28": "2VjSvwSTAjBd1GQG1q1jCSyB24SLQ1DdLddc56NvowNvTzwUmNcygJxxPW2C8NQS3muLAuHBhd42Ddx1deoUoBbC",
  "key29": "5zukfZmkeEvhHmMw4qscFG5vRLkSJ6gSf4N6kYzWd2oQ4bL22rJB5GdKzp57Kseir4V6siF4pJk8ayAdyWGjPLiU",
  "key30": "2SzBdpzTEWEuZVqyGmNu2koo21TUbUG4T1CCy95HZEN4apmnc281UT1ehhnZY3KWoMeQicLWXotv4oAqWYJJk2bJ",
  "key31": "2Gb4hu3diy7N5ermrS2UyS3sTpHMUJPhrHBqbFbmRjjFjEdn9Wdwrjm9tqxg2DnworvYdjbmXjMiGzMTuXWXS5pV",
  "key32": "foGRyhBEQF9HhCUvA3nJDX7as48VK7CRHhj6gZBeEsoNTTuSWiJVoP8kbcwYNSYRA3rgsGJo1pwqZG5kia4sv3D",
  "key33": "4DSfP8PPW2HjrcrA7Fvimd6o173ZPCY6vka4moWCRmYo1f8JPskhBL7VZhA7iCpujnCHKrw131ByVcqS3qaqxBiK",
  "key34": "5vWAjJDhdoDLNNyauwAQvHCQFZWH6v3d8wpetBpmnWneRJx5f9uUPzcvugxcyZG6Rd5aQA83cPkiLUEkVDPRC7ZY",
  "key35": "3hj9w4P7GxXkamYxpVsHDTSCb4CNw5ZVFWBwqJzm2sA7oU8aBgV1MSzqU16SjryEYMCFsa2uiWkL8gRBDMgDQfWC",
  "key36": "5FoxFf7WsTdYT6NnBhyASLcQ9bX7SdYpzATc2k9mFCNk2gTvZcChyrDAC4ehTYB3eFo8gTUKGNPZgzfxFX86KQas",
  "key37": "53n65a4Ymxx7doeKc4zgZ1qu421vLbDMwEens2QkaMFRqHdohZTTEcBsbV2YHSPyMyTNcET8X1v6qP7WY9hr8cPs",
  "key38": "3weMP6GiD74UnuGWkE4TfEAJ5FLAvCbwPpB3FYuNUyyhkFtaq7e55AL79JcSJjpj9HBNh1hTq7HpC6AmR5kjMjaU",
  "key39": "4JBCcPS9DwX2ELSn7znt6gysWLer6DQ1VpLAn8LkMv7AbY91cLFLHggL1XXgtfJtbt7mdK9PzhGkwENGEVZYni8k",
  "key40": "4EA7eArfogzgrpop6dJbLBad9ffMykGEBbTqCDQDvnLY3Q6pvU942BFsNfh9Rc5Ra3QJkQB4hHfJ9TWYVjvbbpcY",
  "key41": "2JZacJC3AzP9gzt8srMs2mjNtZswT872scP7482EUp6PsaWCKAXqFvLg52oGRsKmQi7sUg53ib2ZRokSt6gkQ4ku",
  "key42": "2XxjRnixa1iDkKYzTkJ8wsi8TmvPDEWaK25D3UVUAhkTfp4RwmGjJPbyqGe6s2F6xNyMNuAa1qGBfBwYvS5HSzqD"
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
