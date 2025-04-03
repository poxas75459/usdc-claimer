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
    "3b2JLGTpjSZ9YkQxf2bbVA5pBcmmfQfysKDjwYeZ3tk9235H44bXopXoJ1stxaX2cLUwGvrJvWzMox2zsAJVtkFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YcREA74DCd5wGAzG4LxuHXRSSxHeXYKct2Y6mKNJ1p5SAEvoEpWm1ZC9dKp9B7hYWaGZR7sx3D8PEcFaFZAC2Ai",
  "key1": "5yFTyWpULCYuV97U8Qb7qVN8i4gWJ74ojP3kjXRPduWNTicU7nkc7T5J6VFTt4zvF66KX5Fv9S1gYcmJE2G9R52R",
  "key2": "Bxyco4oZDcL5UH95AtdMxKdjy61Kd5gzEWretoKANE4bknbE9aVSGRsPQ4z6nhBu47P5a55oFK7xgyrTT6Tg4oF",
  "key3": "33fbM7uezBAeDY2TmHC3Zi7rc5VwUZoCrCWtqeYNM3QBf7P1aqxqD1hHRdSghQy1eeawaQTySpfxdW3o5EwFpcZ2",
  "key4": "35RRck526BpZPLsMBn249ZmW9Eq1cCi8vpk7uobvgYXPFD599S8CaHRHNVRJuCpQPJHt71D7cPrQFufC1XWFHvzb",
  "key5": "39iALEWNoKCwDR3Xir2ysvL9ga14QYpoP12HNZDFJNqKsWEYx2Hks5WxDkLCxTPPUe6pWMPZ3Nq2xGkUb2v2baAC",
  "key6": "snxQ4RSMW7qatL1TM9SiaEZaif2jnU9pZV7caBLBCrqunnQQf3dh4G25fB5YC4nxs6ecD5zQVTgsciuwsw3bJtu",
  "key7": "5ep1RkamGQtSiZNfe1hQuGyv3Ue8yoTLm7c7jN9SNUfxtw9FfamDfWcRvuTWuCeyvnXudZ9qkr4NkeYs67ryucXM",
  "key8": "enqWZhTsa37DKokdbEeTC2zp6m4nrJZYtUnHUfCJPBRnAdiBb7q88PntpDJ4SVdTVETmBgR46DY3DJAnmEGYJyy",
  "key9": "7XUeoHzVxQjcSvrp2JQtyefr4WLVLc6jVW9R5dVhWo1d6out4FSnLmsYE8persADj4hyjH7UvRBqbTrsdVNnVzH",
  "key10": "4pgUiuzdtWE2RxsiWTTxuqwAq8XVd19JWqmD8SK2gJWeXvgHKTjdFuPmvK5zRKTcBdxP1uV5SNENGaP7KZhETFVn",
  "key11": "5NT3eqigULUwuMNuycNfvXJzHwaiWcex7mg48xQDGobQRUPfZjCHfxeA8jHaA17Gd9PsTNNzuJMbLLr2qcnW32cp",
  "key12": "2Gsk844uZHz8HrCfY9JJFxbbfJhFHbfyqLJWamSMnxfPn5D6H6sT7YQ74PeVFYWqq18cxZ5sWgSYyU5QLpDj3N6z",
  "key13": "5ZUCiLWfj7n1WoLti1La5Wt4U9H8oV6YMcqe2LrHR4GPjWJWm1JQZW2X7XCuRKFNBwx8XGvBYNeEr3RhQfx48r94",
  "key14": "494RJSYArYN5TxGkeiXdRwx3psbMZaruGDH3htCJB9vdFAcLZy59sn2YsJEvm1KqryDJBjv7rqEWyMsz34E5afvs",
  "key15": "56vyEk4rfPevdHY43p5WEQ3g4ASGZsNgZwSnbyZWmFmT97Hc35pPa9Rd33nwv2UBnEaE2SEgctLkeubawGZtPY54",
  "key16": "5QXHosRKkpFcyiEG1SWEL7ybUpm2ajKhEdSibZPczVR5vedkQX3yyZFTQs4UAu8azN8gGwga6Lmopae8FFjcSpeH",
  "key17": "3nN1yAzsErJgz1nw1z2u4Kkvnn8yWBqLsE6dZh8Qpw4mKLRcEWS24kVhVDMAG6z81UdrypKNTw2y5GiLxvB7hwPQ",
  "key18": "29YUQDzUjykdgZVuiCbsQ6C4AfEGjHf1iyxxpe8DqAYinC4FeFEHNBbPvAHfepKvxxwoRAC2xxvgUSKs5QMMNbf6",
  "key19": "2vJVfeeeyV6yeE1K5QLvz5Y812J43kSoviMbxkzvXDjVnXWdoUBkT2tGLSKbLLYnK9ZBzAVqiT51WzDHZAKUdrBH",
  "key20": "2JU9PmwC4JdDeekQcsWH9hYnjXPJupnJZvogJS7gghxu2c8GbJFXnVdSxBeEE5CiyU7VzTTCTUmKWQSTETFb3aLQ",
  "key21": "3uhXdLgu9iBdZs72XgGDQZFxpmQabQuuDgsKNLoGP6FCzJT2cWiEU1K3j1LfNFRpqwV3UoJEnowFFPJmuG4D5CQt",
  "key22": "4diADUEcfNrD354GPQNMr2n5tJkwTxdeMYWyvCa6PVT3GmzU7pLM5AVKqnwxXhHLDGWafRNf9xR8ifEhBa89QojH",
  "key23": "2Ksu2x8sWKEN4g6LfSzsqcv4E9vanyT83T8CDrmNCBat1UT9d1gjwrRJtpSNU9jbn6Swgs3weVt1GLkMjT4sjfab",
  "key24": "38Hynapj4ag6JUUs6sfkF4ESFdbc6zwUQbtEm7X677pYnSWGRcEPDLxMW42Zvk94vCrw99Hj9HhpmHHMsG8iLVLz",
  "key25": "5BiqgbtuXjwHUEY8hCLZ92v8dEa1BENkt1iQWaQKWksDqZ5r8eRBex5LPqCc7Xw2pkJAAMWWiGx8bzkurRhfP7TV",
  "key26": "61BNAJg97axAvxNBMBwdnQDcEwqjo6t8wVKv9y6WWjRi5Xmp7ALJV8QdDTYob3AGAifUFWoyMV8M348Y6MNWzjWD",
  "key27": "2o3qaC3mQQhDwabMwFYbvLn7qLGhfBvL8ZkEwnnGRMaCT5FEbdkMaRYNDDDWpzEv94wj7HKr5nTUjBbyzAGhUec7",
  "key28": "28VKuZaGEGVukMQHV9j15aPnGphYANFh66P6XDrdZZaUnjqMxsygYGuwRShHt8GBquukaUUWEJ3TYs9KjyEZK3y7",
  "key29": "4tJaybx5PxFxJMbop4EkdL1anewWdzcmC3kusVd55a6FKApUihFCzeXoZNhSB2djiPjuCn18GqsNbASbBb6Krddd",
  "key30": "3qwSUSvdXeWJzhAjTbytvWkKaRzgD6DJaEbkQNXVHgix2qG2oGxjmbUbwszRsCuWySj9vyMPBGYM7A5xhu8CATmE",
  "key31": "31RkqEfNPMtJY53rqJCf2sfceujgpeqfTUCfpjW87GBEi1E5DsTzrSqiTg73ZksKXwpDUC4ziTQKUa98By9hmnKk"
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
