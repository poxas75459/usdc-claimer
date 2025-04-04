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
    "55dHFiLH1UuCddak3HqiTwuy3PzeCFVWzonU1UpEjRaAM42EqT7reKvuH3z8NyqNn8FEC8US8hp4WfYANnK1JC1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GXZBm8TytEAmh71mJeqf8aZEGXHSZ4KKDHbfiNkpX4A1mnZkQzm4sn6eTVZrtcYBGL3wktQV4VX2KbwH88Ca66n",
  "key1": "3t4MyjSNeKt7QzeQjGx5cGpbnJiJKLRS5oFq6uK89koXoenchpXoy3E1oxeb9nRom1AMdB9qkjU5v6ZD5Vvdxy3s",
  "key2": "4B3rFucSsoerDjoWPNjonaCdnXnt7ZoBeVuzdPfqf7rJwSt9XSN21a1y9Su7o5wTziRNLzoYp2rKCZWf2Ae7KYr5",
  "key3": "5Jb1PUxMAEmnj9XvKiXT6Rp7588Y776FvK2ATbFtoXEA3zTtzUhCqvhbXEBqkDYRM871xqST5r6UNLPpQNi5VGQd",
  "key4": "f65yZmLHXEqnm3JUhyAmBsspPDbcyTSRQnWLMgFrhYmXiPfaNEJWhrYDVUELvSiJMMbTXCmAGW7mcxN2GkQG4Nd",
  "key5": "4XoRBNg8nLfCkvv2MzVXsXn73QFxCftEJrL6RuU4MveWvaWjcSb3T16SmfmeWcCQ75FcY6oYAwAHG8s2Cxr5dLH4",
  "key6": "2QnQ6YdgdsqrenfTCvNyLWiFK88YFynfzWTqaFFZFizsQq8qnSN95JWGmqWzDUQs6dYxbGQtsuSLVHpRSazJZ5xP",
  "key7": "3DmBnCP6vMsUcWeRj7TVuCEtMZiGbqapAiaxLLnTMhCox786AXjtdjNhaJdKV1C6jGpT1uEAbtxvcZJxtQF2X1zx",
  "key8": "4LXmbAEGsxkZFcASdc1BjFD7oijFgUGFMuKwLWxu4N44mXrFfdhXoQ8pSEeEJn468J9shnd1StJ5STot4NPRdYfM",
  "key9": "52gWY3oNma6CuDskAs87bwyTNNy7kHSKNppW5ScAC8bxMF2pDGrK3Jhj5ujQ8EFv48XYs8NvRDkEx7gRqDDQppvZ",
  "key10": "ycenrtKy1ntiKTmUYFA1HUs2i5MMq1QH3fXvfRHj5v17iZMhegExwtXLS5YmfoaMNnT4p1ufoF42mDg6DerGSuR",
  "key11": "Wa9j5rbRCvrL6B2fG5QWXT9ScqxEGaoBdn7pkBmLwFCPvZK7VGA5YEbj2phXPnC9eST1thX2QYBYPCht9pZhXvE",
  "key12": "4yLp6Cex45QRCUfETg4JKqgJJ2ddDr9Z5g8H1HAeJTLFKN8BUwzGH8w9XoY74a7xZwiqGrnrhz5z871HZs65MP3F",
  "key13": "45cBREVxskqPxArXpmcCjEYDtFwFNCEgu4EAs5cKvHnUgm9ycSd1K7kKXUt1GaEJHgvrpYpFgMAsSrF67Dceq5JG",
  "key14": "4VoBCnnVHjUPXZq8RFxX3CUE8WeYvsYNA9JLjQA9QkoS9mnA2HSVtbCeTyPV1g3EtXZF6ftsMqXN8WU1qGCihjYH",
  "key15": "39iaGmW2PVvfxVnksQu99wZ3wFYRwWagynqfTev678DVmMiQtdV2xBAoGKfu9hK5W7Cjyg1qFo825pFoEo625vaM",
  "key16": "5kXwi6tBpCurkBV79zRnYyFdfpHsjRc9gVuFZgFLaAKnB4LgYyfwbD6FMSniquHyEHB4q1vxVT2oKuoU5K9cBbqV",
  "key17": "5MCEeP72Ytmb7ijN3nhDVcyMTdQ6F6asbUsKArpZCcNCNKXks7jx7g9TnHkbp3xZACnfbSTYSoJ9et5fW6t153j4",
  "key18": "2zRXLwgqAAMRZLhJ5ATxQUUwEPs4eFD56proz5D3DgxqcC3i64XwuxYs5ZvABsufFSp77KTFa2fYzzLDgbbvPY5V",
  "key19": "2fSoScYPSdpFp1eX2txPTAL7uFNZYrBEU7YLtJDWHuHPAYeWmz8W2hkbDApNauCxcwutRxfo5Y6oidHdNaskpRVf",
  "key20": "fJZ5iNFcHsq3Ub5mVtjUTGCLcWdBrLhKvMr3Es8kaBJDaXxFz4XcuBTcexjZ6HETmfC9fzgskJiYmFoFfYrr1ZP",
  "key21": "3v8f1rPWYd3PLscG52pA42REkbJdeeefLom5iuyPwJTLHpAZx5W4ZziYZn6RLtqJqKRKKieFWzitoxG9HP83xoXp",
  "key22": "5K1VGrfZztn24tp57MpjdZvZH12NkaeB6PMuXRRx1umYmKCvrHMHstPcYeCAN7D5AZBniWUj6x2WRxK2TmBHng2",
  "key23": "4KcJsBUbdGVyerankqWaJaeECStQh8oDrCk3wjszM6wQ8ezxRv3VmwQ96cSYw3Cvod94RZ5uSvY7AfijHxRjXyGD",
  "key24": "5ZoM2JxtUApRUbaogqZuw4m5VC1gXAY8XkfTKWNnXqrizowoueohSvFbpF6yiwz2nWjrjydEpudEQibwUNjyhgyN",
  "key25": "3LkJfhnQwwqbrRfnZPCPHCnYQo9XR7DkA3Jr8CG5Vq8e53xqopLC4FhX8d8qjexu1MdraNGKpamCC8fLSMjNx9Lk",
  "key26": "5Dd5xoDidFaniiMV67qTpc48whcaXC8SdNqXur3da7jPB72ZLpxhbciGPNXcaJoMReewbZfQPxAcbbuxFBWzwSa5",
  "key27": "64nxCdsSQn1NsAbJADn996FsssvFrK8xCX2JvbdnbR24a46gbWRMri8ZcHis9w8qGNkhpxZoocyH9b8zvMFccfrT",
  "key28": "5yEAyjPmhAS7kaxW4t5nzVJyK1PZSVr7nffX4SkQyJm64ydmArzkFztub7nMsGzdRQ9qTSyFNwuKrAVvbRwGTzpw",
  "key29": "Who2gfY5JQJWU8VJZxuBZrEPdpyeXtMFEUA3vwYkLcLprcbvLL3Lrt2vLAJKiv48rNBWKbpCq9FNyQKW7XYaGZh"
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
