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
    "5JGmKGERydihqgg1MvXmRkcQmZhRAEoPjCpvcHUrZfPC71xRvf8cad2hrzaPHzJw11uuLyiC9oDp1RNrtKERVqao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44bHdwBwVTQUJWWnxpwkS71U7UaqE2FfS2fo32dPdQ3KJGVC3uhNDnA7ZsuX3Kif2iJRS95eRpa1cAHageHb3AaN",
  "key1": "485iAdzw5qB5d2EnAfueteoJok2bf7Eeuj6AEAu3SiGJBWxgA69poy9pHKJF5A2KAg3jyvUB7RJs9e63skfJ7Dy3",
  "key2": "FRRGwMqJmdYzTMa7Zvkek5pV1LXPWKwdfFrrs4g9MVXi84xEzSpLTXLwf21KBfUgtKRCao3ZSeZNiHwEum8tvTU",
  "key3": "52cekUhWfAwis7JfW9jBA3PTxoAnfYhb1fz7YBXXCPMdpUnJ5RCfbp1sZMHpVg5sfwvCiZtbFNp1CjsQWwm8r1Jt",
  "key4": "4QLQgNjxMnpSv8Tv2cam2pUQSpceBinoGTZNeKCXMekz5TvNe7xrTRZyxEFmWsxEi7SvSwYQmyQdq6uKYA2HeRxD",
  "key5": "4WoTpSxGojib1N5oXXAVJ85jWKn4UoiH2jD836J6VFmK7HFwrSZgvFGxqqrba6p7tf1d4s1SMMvoaXZRdBCMZvJB",
  "key6": "1Yjww2TCMsQxzmdfh7Q2umKQNa8xUzBVmgc83yMwU9Kgt51JsJfNzhP4vkQAm4YBkrMuHSp91CDDW16Vwc1FiY",
  "key7": "5hQV15yCq9mN8MwMXbThXe1nvCeEou5oy3Lt5GT4igkTzKKUq6FfZbUwaNMmfhTZYG8eFaW8hMpwznUebG9YBFYn",
  "key8": "qk1dhEKF18GAXqxT8QxTPLMFYdV2Brr6rPjzQCzShCyR9hqqqT8gNMS8n8fcn7oaEQn5kc36kVTesDktvnTxADt",
  "key9": "ocG2rgNzBRP5Ac4Mpn5ro1AbPgz5f6SUoTaDNh4WaDgYtMJqheRmBwCYhe2jRUY8PcAEpkWmvZrc5iXipRejggp",
  "key10": "2N6c6rkVdeqSkbNdyb2yYvszc9PJxVyzdrfVXVEXUDTrkcUb6VfyDST6WejBjaW3shy3XdDGSb8La5CYaqyzeAwP",
  "key11": "2AsQVcmn9jmmDbQNQBbyBdeAUyZkmg7EJHWvNohGfMviFBYrWb9A83JrwzVzCqZpwaqNYU4my5ecRV4rWxrDkfHL",
  "key12": "32tzp4RBxTHwPKe9uLn7wzSj84uwu15ZN7TDYeVUDm18mjrZc86uMP4jvK5YYKaVqLQSYLaMCYWGWfR3H5TyR1YT",
  "key13": "4VbVkH6jfZDt3vfQQDdfVS59nAQ5bjH8b9ZQmMazeRbKnqjtHeo3r6fGYLx8rapxUE6BNfab6sGkw9A36AR597xU",
  "key14": "4w3SYaVKHQh1nKjXrZjYDUUDGe6cmjMgHw2ec3Xhi3wMyDitEp7qA5P8yBvT1dV2uYnpTujwiXctXgaCGjHVkHEy",
  "key15": "okgHBCLPRKsDfFbVPWMt5mZmMzpfUBWGMjvTiXDnAJ6ZsAq8HjPThscZ6oSXbNsaU6z9nnBLCVwHPZXfq52tMMj",
  "key16": "52tzM9nSpQ2YtGvXZSSpjKhYNbSJvQH46MvPw5AZ5g7LeaQ4qBWKQApt5tgufXTTVCBmZkPXkTUjc3dcAHetwJLe",
  "key17": "5jNx8wJkMVqyo531Y2AGc7FmMdbwB2CvQnzmAY374nkmLkUeB1KJ9Txw1144p52RhQnSm3jAobJc7szaodedyx5G",
  "key18": "4yKutaVqDgnSpV6XyoyY3YLE4wPxSRSfFRhpB4sCykR3zRNJsHJ4SLzs33CJtncEk5gioBARmNxEUgHWNYvHWaei",
  "key19": "2AZRGEB5pJsjVQgY3VeAckF8KfC7zvnnKh65yJ9eZoVXspYHKag1Tc4Lu4xeqJABNJxy1hkUvDhAFBXbXQG5HpT2",
  "key20": "5yoQ2YtjtQn1qfQKE1Frj8ckk7BvnrJ3FKK3w64Rv7yn4GDezg1iP6QfuS9UaBKjuHJLmQV8osHrL57rYGbTk9oq",
  "key21": "2eJ1ntLYD7kBxNxSvYLyiGHkbzgKMubYc9hmHFacNHFWrc9TypKNFG4xgaGf3M1rPPQqHMsgcdboUMZXcq3HtZDR",
  "key22": "4XoW5rpEhkztRwunr65gfKyLEVgVq3DXsyckne9vh32C1n6ayPkJ9Qwjy3oaEFMaQoU64wre1oNkiQjvB6Szyn46",
  "key23": "5AKFCNpmHsYAPTDKDvBUQt2ciL4fDeVUi1h52p8L3nEUwcaP5zuUM2n9gX1LucaBwrK4gcScMyXbzuRHne1zeZ9N",
  "key24": "5RF5Ah5w3okmSqY2Mas7CWi4W9cntKz1yXE1FE5miRyZdBnczX6aXDWcR8MicVQtjrc9SHk2z7xtCk3m2eQc9Ba7",
  "key25": "2ENm3Mf3aeaVDhPxyU7AZUE9L3v4v5fK3LGJco6u84WbzayT9AqAwPgLRibV9cM814uKR4V2xsAfRCM7CHpFL7SZ",
  "key26": "3UT875ewWw6Y7HTopZXPsCY37HcR78YUyWFdjFENP21s2C7PLw9cXdiS4GznHmuv7DCSKyXGSApnbtLFjKECXisk",
  "key27": "MJNEch1rfiAX27syN1GfQUsDF45YXGbjxKg9C4Z5QE2XuvCWz1vrWN6E1vjkJC1edZkMQEWc1GBBMCzFNoVG83c",
  "key28": "22tGUZrjBfDppgHqWKeaWcFh7uJrQJh5aWMiWnvs2DGK4dCRcVQBKr51YKMaxchK24UrfvoSZJ3izEyKXbNemHMo",
  "key29": "oQPXeULpWZfryAbABvbdFAMQc132rBerRCENnpwACHqnZ2YxJCTwy67XvsZhju9t7xvxhNrhaRWDE8K7RmdR2SP",
  "key30": "3YN11xF1yq38txtMeDr2NZXVtzczZE298e2fD3ZXihmVY4pNKpVZ37nV5VARpRsfyY1P9PCRM6uheefqjHGffHEM",
  "key31": "2bFRPXF1EcTAyEUJXXE2zt2E639T3ERcmEPqnBriMAA9G1q1RKckxpwzYEAQgaKTnzCPKCADZwG8AquNewEyiBQj",
  "key32": "4Gav14GaZSJ3mwANEfSgSzXfbnM4EsPQVu65MifJJuTySxcHsrjw5NLbcsGP8sVCQZWFfJxgHuzQzGy1mqr8RM3E",
  "key33": "5CEFRD3DSsM7f22Zm7N6KpzXerJUFoRAMNFBEuDpdFMKmRuZnDsj5gWy9U1dQoBX4H78nPDvxGUXqqAE98yT5dNa",
  "key34": "2CFg5xidm3dDVsUgnbRZ8WBkQTbjaAPd56iexjHSHVE7ohfxtnpz84tugcm1zJGHjvbQS36HBCYm3YFGtZKhB6Ux",
  "key35": "5qLPp6v3DNAiM1uqPD1rFoqRZLtdzqW4tBQESAjWepKdrM8mwq8DR44zQbiZ89uyd4WxfkSZcnKcD4iiWdfsiR3W",
  "key36": "2bmuSxKGnpJXqiVrWa3TtL6aeQS2h1SXrcRkkc8DfMmeKH8HSAcpoLBqQGuas49X8CfC2hPstCnZUexQkuGmPttE",
  "key37": "5x5RhSajegTKF8RKDxbTWzHSum5zLEy8fAixtWnMaLL9oKcyux7NZ2fVJohw6NLGadEZ6BcekV3Zn5WHxK5MN9VW",
  "key38": "5PiAPmTg6Qz3yfdPJCFYbUtYMNEDnCfe8UPg9oHdHGjbFfkonafAow19sa5G8DFp9iQHtcUnrcKmz9XweqgD4pER",
  "key39": "59zRxGpcFhHK47k2ZSbQ1P71PJv614BrCFsxJDwkLBhHX2zxpmWjLGeGLwRxgaxrqV8TCmva4cvAeCnwigKdXbfF",
  "key40": "4JZ7AM3sA92m21nd6CmUT3Cy91rFThNLK7Vzo8hUKZUWnNzdfHoRg8Xkj7mvdx9ZYyV6fqa4JVio5LPNPFYEda2w",
  "key41": "2dCUaG1ag3vKWcfqBoVM9uDWSFBmTAHSV24EAmUF831n2R6KBjdiDFyJvP9psgkGQjU3jMS83AHsvmKHgXdErhwQ",
  "key42": "3kpdwWK4fFgPErYbd7XnRTvkk1uj6XRwM3zPpaab8aZFzxbKu2JL5bdecxoU18zMUa4cPHrnzeGZKBSWbKcAM3bq"
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
