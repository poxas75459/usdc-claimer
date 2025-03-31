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
    "4sPz7MeA3QwgMYA4GiJemXiWWCUncrB3ZAN4xKTskqDj4ALnffHLaYKR6RaTyXQoXpKvDqHcXexkZNiPX1HB45jS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wFof1da4BwoR8m3o73CzDhdv12A6FYH2vkqjQBBcJJTsaXfaxjKpLsHmqehThVwJhm4JQa1VwyGAvCwJbtdsgnn",
  "key1": "5MZj4bVBvLWwGy26VuaXbhKzvDVG3wFecVGJaHyaruy8GMEcoAHtq8eqLTH3R2gwBTL7gpbd3m8XGU2CAkoPJ1SW",
  "key2": "bGcjbjzne6K32T6LvCMmW8CzojnQsgcfjxC6kk8mtm72RLDXh387qGXkF4nqiNXHbBEPFxwCzWh4XW97wq2NV1X",
  "key3": "2f6WhmFQkn8HvxnQBcmNhm5Zr6AXvDJ2Bf5q1buCMTsvcrqsCnb2W9eM5Am113MTJyftEBMqGkdtMEL6hgHaeBup",
  "key4": "5LexYLLKYTZ2VZVE4mGbuUhdtvwiRAnUTUFWoHCmKmnnEhMvd3ddMDvQ6qxLxv1vvSSiM8NSMfakbuhQj7vKXecY",
  "key5": "5c1HnT2aMEemEgscZDoZsKK1bf8BJfPWmNdGqqxqd7jviZHebcn241vekjpo8jDEVpbzqAYgxe2Kn4oDQhWi2ZzK",
  "key6": "3r5zUaLMMC2WioPCsh5uWAK8gv7WQ8Ykt1hnK11yC3K3VS7PvLZ88Kk5DpTbvz6tGwTGd95rfsMjUgAmTP3tY2SK",
  "key7": "4LG41uTmKnWtoSgTR7LC8DJC9qK2f7hYGREyesb4jonAw1UrRdJT3Nq5MfrqceF3hjWFW6VeMFbbgcYT3HmCBMyS",
  "key8": "3FBTRbbdrT8dWoevp7Rn8kgHWjYstuSSVPSeag3Z9mZUSDnJ2xsfh8JkjA87bi9tJdtFBcFcX7ZXbTcg9926eMam",
  "key9": "3LNsBuU5aY4rvDaqUEtg2R8SWNFqvA7fnqajDwibsHiZoKJnJ9z7idHLoHE6mLW95eyZuakdi1CAEYAtRood9ZXa",
  "key10": "5xR2FY8XWB5dEWw3Bway41n3PrkRQa2xS5TVTPJrYsMD2wFW1eRHmdifjtsyLWGyhJeA3xoNsVRCfrbqMqJsXAne",
  "key11": "4NF5mRMfpUjhkg73b3jzeSKwaZGf5x3PxbMBmCfQGUtURaVkGo1rVB2H5bV9452DbdVwW97h2UnrhtvnvRzrKyzU",
  "key12": "22ML5cmHE8A9dwRMaTM9ARppVekUda36yppJ4RT9yMbDJPTLy2nXUGaouBCpc6oatp2pLyPnv74cdKqHLwQpFfrz",
  "key13": "3x5w3mjMx9DVhZ97ran5NWWdzGEybemWirJUzJ63EwpZuwCEE8kaMSbzJjE82sJei9Mvgss49JxBXRSxPoPEQ8Jb",
  "key14": "3R7vhnx9HsGYhcDPFaUWEhRuW5UBYiA2E8J872jEh9TSVvBJFMfRwjgqpuq5RjViZsfhprVnXoYHxtjbtvePyrmH",
  "key15": "DiVzFNsuNoQsX7Dru2DmjrMLN36dGDgF9mopzLnYpvknNEpLtYWfSLhyWPQ7x65PdEgCoP4HAc8Suc1b5KMprxS",
  "key16": "4AX3RKndpa6vwD8QKHeEt5LCHTYyvaf3FrqHQsXj7PEXxGpk5vu85FAP2svQYyR9spVGtwdAZgdQGUz5AFstRhKE",
  "key17": "2R1FVGVziMK1jy45hNqSUYYbder1J2EVsqTXWgKVNwsQeBb15zSf4NiJ17JMudc3U3SStJW3NqdaKq1TfXWmELDS",
  "key18": "2EgsN6sfbBV9CQDfk9Foc637iV9tT8vCmuSgMByNNkZDiWYw8QheqSb2NpXv1FaMNm5gNJVR5XUqo7vb7WJSPin1",
  "key19": "r7XgmA1K3gA7Pdkfha83zQnMiWWwub4dSTESzqaweKhx1jUEKDLxt8oUdbxESTjaEu8uChvYkyz5dQ7XRY59Mz4",
  "key20": "4ExwaPF8LC4rC9YKCiWzV1ypmVyPfPgS7weuniBzb6UaWeK3oBETc8znWePPweUgQufoszaZ8azQZMwMqoDbmg1m",
  "key21": "QEdaAB65gY7SQSXi7Pqa5yu87GibbBBEJddVBCCbxHjUZbsx68UoZ3KLKoxqZtZprz1mE6L4hzby5HXyB2XKTXN",
  "key22": "3p4UCGh82sNyDgmqZMy6VTkytz2xyy72nbK4S6R95HMNLmdq53VMqFvK5Ke24kySigVtHCsK7MLj3dFA1axhJkUm",
  "key23": "2wVLCxfEVePcu7TH5ToBEPYoo6Y7L6xFhNNDHBUA9SnVRgBTZvEMeyDBX1TW3PhqkkHfqfkc6D6WSTi6T3XvDLnL",
  "key24": "7jWnmfvrmNX6UXba4MT8te2AVZsoaTXyL2wFrh6WMtxjFMxW89dMs8ZAE5qaXuU1rvhq9nebBYBVyncCyXKiawk",
  "key25": "3PCwbupVRzZULtm1i5m3UwVotcmsfDXfWEs4uqRgoMRWeGsWCJgue3YrsnM38ZWDHP6XCKXj9CfYg3pCoPPDeACR",
  "key26": "3G415Z9jNpyRgB7xfBbs9QegioBEW37cfPowLmkmBAtFLjjexU2qSBxEWuE2tHH5Lp98v5TbVHsWfPBxLHKhbm17",
  "key27": "wHnwo4t1d7HY3cZcz9j8zhvnr9XbP5qYA6ZtmagkoP6GeYtXKNb4LAaAksF9zURuojDG7vjQFLBxYRFu7ngR5xL",
  "key28": "gyKmiyrCuKq6dD36CzZcdqFAFKdPZTkwKHkqX7MVB6N73Vwm66PpoemRqSG5CZZhYxDpVxDbSVxXGUQ7bXs8BFY",
  "key29": "54q2vrMFwU6Dp1kWi53atdejWbRDHhhf3GJ5Vd3cG2xg6sMiPxCq6xgaH5s5Z9niiESLJh6W1qvDdD88t8UBaGzT",
  "key30": "5cQ5hXzfWFDpPfqiQM1WHMsHrf2St4h2FcCM9zZtBcERLGXJU4kuZQzE5iUBLNTxr8GQE7c2judc4jNcLvoeoJfu",
  "key31": "21yGVLyu6dTNH9RZE56eTTUE6LZYAgiQG1LqvBqev3b9gUnyMRZf3xoYRXC4xh54Bo8bmhtH3kvAEZK7MtaGig3Y",
  "key32": "66MT4FhhjMtNXuVpEvhFwLssPAsU7CoyB7pFwv14ZFpALfRDF837EHSrwjLBBYD6rHQb6GbYgA4h2fkHQW5buFDd",
  "key33": "3sVZD7xMaaFkduUBNFs3N7KV5N3ewNvS6k3527G8y4Ekv49vxpZvFH4xLeyJdkWK7YRwg2rmrGy332ganN6gZY3Q",
  "key34": "5nerWkFfNZRvicRyo4NJEXtYwDWmZqmZske1NHGrRGYW7XGuGtQHZfU2PnuM5mhmx6SvHB5aN1BbLNSs1ov5FhTt",
  "key35": "471zAJMkVJ5rBc5s7WStouaSgVq13PSEYwqNmout6DUcTPxANDggJBQ1YEfkSrX2FkcLSwPTouB1Ynhrrdm8Ro5j",
  "key36": "5mMmM88QWyvzWqLeWXA1WamjEVCHNZduzys1aMCdwyhQEawtMxW6TtVtjL5JZNDMvizi6KxJZ1fMDyujrd21QNKp",
  "key37": "3aXCSWCNcSts47jSTC23F7zFW8V27GdgL1y2aNQ1uuGaZwd1BbbQNBYMCnRoCEdpgXJQinDYorwHsMhRh8D4gwiA",
  "key38": "WN3zB4WKgtcnWjGAjvqSr2EKHqVjkdCkbWoM25Hss6mKbHDFnxtyoJUo4VkY7WU1zZaYPDZdM3L465oWuEYAY3t",
  "key39": "BhikNntgBoLAp36YCyrwvdABAnUQJrtnvTsfWSR6sdFcZZ4x8cLBvmKLWLt5UDAcrE4rjAWVS4rNcYfxsNHzJVG"
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
