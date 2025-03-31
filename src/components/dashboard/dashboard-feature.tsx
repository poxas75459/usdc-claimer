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
    "5nbp92W9dQSjYKsUXNh5cSR3kLY75UCD2qUHuAW41oc4GBHS4P5n1yKVUBCnJ82UNo1YczG4fDCjPSgnbab1mET6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZFwRP7gg9y3keSwtbhL4KF9Qcn2Nm18r4rnwMUpN9EQcpNDS6qduwDBtfNikMnhEsGv6QdJUf3cb7RaRDrnafaY",
  "key1": "4sq8r4zBc6bhoTMUo7Jg544gwD8PDAeNqvkcG671cx84wvogiZa816T31xqhcHi1QXs4DbzfRSok7mm88TAcc7zo",
  "key2": "27FMwo6qw4179S6U4dWFG4mRRaaWJLGkfqSAHQf8Zboix3iuB5cqk8qEPqUDqZgaRnXLgp4Yg5uxMnwicYSuXZY8",
  "key3": "5CaXH2LfFfBYRJUt927nPdy6kAPomchk1k6nejnKZNeE9r6miUqjauLdfDvrWnysrnwZ9XBSodtA8PZ9nGFUXAco",
  "key4": "4wwbq8jNbqnDcVqHbsd8qE5n7dHYzH1abtgegqyqDNw7S6zVS48WFEMa5ZpiRSokQYvzAJfomo66CTDhZ19XAjNi",
  "key5": "2cT1CTq2kfcKFwRjoz2mbg4eAcaYoXjXinAHyUYjaSsFZNsbdpJUkewMEm644zTPQpxrmgnjVLmhkhTP4CdMXtRv",
  "key6": "53H7mxSRGFjnbz6P7PKSyFK9ydbhtQBLEaJGBPnCdmxtxrDbmX61JiTs2hX4WiMZ51cbncKYPKFMvcUwFmRG6rR6",
  "key7": "mqzHLRwK47wksoKqxFVBVjxwb8U6FfZDCuiepcCoJH5XeS6rspE3nZNYAWytS7YxjyUsGaxtfBivuhvp5mEorVu",
  "key8": "F5zeVCVsA371MwG9hTKs8Wh3XShTd3xBtHgiJSXyhiNF8unHk82dJfphAgpL8cLQjJPgydP3oWCyJGBVT5WZMeC",
  "key9": "5yTfm7iPZ2CcsFCf1LCUtSrUDnEVs7GEPrrXXNBdAUF9Uhw6XizfQYA5PDCFwcU7ryxxGfLH5WapsqGy3rtWBECY",
  "key10": "5YEoTdiU8GJDp95qQ99zDjxyauMaG8XKNR53JSYmCnAyZapaNSUeBGh9t56jq14NWJTuFFhanL73of2evSHm6DTd",
  "key11": "2yKnjvv59JYNWMQmhGy8QVY3om8KH36vncAsi9fHPKVG2E7bzhkiC9cAMuUXYig4gZAKVVitFimeBBoLFroVCx2R",
  "key12": "4TkGZbhcuETU3oGSvTcXJtGgc4jPDA5K4v1zJkzzKxHdbJ7ECNYKnXN4wMvbdsBP6MWJZZjk5Fwq6sGuxq8vpi5z",
  "key13": "5DWj9Tz7nSv2tn9EgBS72FMx8DeHGRZLAfASdSS151tFrP7kxYMw3gbtmvPSAsxHm8dvgb6HimpTJPupenBXrPrF",
  "key14": "4c5rraRaHiNzrnT8Qw5ZjFYxAuMBxy3ZWW8nUHgysK2R3FtwsQo7fNoLng89vg24QKZz4Ae9t3qd9soX93a1ZXZY",
  "key15": "2SwAiJsbyP8F3vyKQ9a5cnUsVBvX91Br4BAZHeKd6GtTqCRhwUQLBYnpNARbqNKKakPSfkJCaigoRSFpZshVF7p5",
  "key16": "4rU6ZTg8f5nqiYF5Dvw6dFhN6iaETKqvawnxUPiVYLmJEuobE3TJ4ChBbgVumMq8oiLhGstYk88dmTkd2Pr36CMv",
  "key17": "4HGqZjtn9J7L8C9HH42uUzqTNu9AkWGotip1VWTMNByeLNKN1BmQXQTJsGnFktKVJB12XhFB7hnBMAqznmcwKFUS",
  "key18": "2MFnyeUXiobyThxCZciiGRFriAN6tcCtQg4PziUYCFSe53QhLHBqGpAjEKvb9hZrD177G6TwNYFENjs35vFknR8E",
  "key19": "3xSY5esoUshZpQakBXHnx3dWFVZR6jz8DLGxPhViV29d4YWjn5uTiDiNAtyjPzXeDghp8ArVt3TT8RCEZ2Vhbvhf",
  "key20": "56h1bijjrh7TbZ6JSQzNa4o79NEBEHhMMagrFxup5jALsQf13nd1m9K2467Gkv6zNoFLuzAfBCNWuN3DqLbgtnqn",
  "key21": "3PMLqwGyds8HQsdQtYU1LJnD6AxPabjdJiDaxGKk9iP26NuLJ7ACrANBNVYnUDMB83R7tTPAhMaPh6EsRLwGqruU",
  "key22": "D41u4mBdap2GxQHv7NhWBAtdPY26PovFp2RvzjhowABm3spNREFbWsAM9BeRPyMDXotszsWkYnHUFnLMEGt9gxu",
  "key23": "4Hy5mNoqKm1rxE1GawCGVYwUdD8ZfsG9UpC7zmZJToR9BjjDwuaQyYqqzUj4KqpReY2pGBBoYoH8NYQzqJsbY7s2",
  "key24": "3D3jqzDoGFRw7DcbzCZio4AmVjqbLQibNPqs1EQS1p1ifYx8GUDtm7s7S1xzV9AGuo87qdGEcaTS1krnWZaYbUGW",
  "key25": "4Na52WyiUN6NdWm6sNuehkmxppguz2KANkLtLigcWRxpoBuSHL3NBHjFAET7J8yvV4fAQ87pvc84PKHUywwcT9YD",
  "key26": "yC49htkJgWDHbjUpNY33u7TbHRy8sHYk4kT2JKr4qDWuirDyRUFV2x9eLdFJgYZoYU4F8mftg7yLQBJgAhWKNXJ",
  "key27": "4Em4AbmnrPkPwU4RmSxNptnx6veVHxPRN6gjFjYbJvBE3EPuk9miGhmwTbz46LsxpkEKxLG13wWoX61zAfiT4k8i",
  "key28": "5wnZPf9PL9SZTBZRCLPoSzj6ez4WpnWJd3UVnw3GC1Qnej1YcZEK9arjZv592WFc5FL2FbaFyoomtNCG95Y3qFmh",
  "key29": "2XD7TykHGr6HvCRZhppe3hFr9Zaiub2tMrt8BP7GLVPwHqnzrvhMCeyb4GgeyL9UjnmAYsuM6jQcGMnwcVYG7Dp9"
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
