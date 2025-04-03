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
    "5uX6qthHiKX5CtzyoPdd7f1VUeeaXSqMv9iVpAsjyAiToacNwXVu1ifF5UQhChUJaUoAFJAhrVUEXzSaSdrSiKJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XvkbcBRJ4jbn9dcSwFoACyQRXQHqx3RDVQdKkuzHKyBQHwoW1vf5YDKtyBeMKpneTqgEuFwr1fAg7Hv2bzA6h4J",
  "key1": "5LZwGmjNXkeqabnKxzBTSHsnHxnfv1wVPgd5p96vK3edfQKpnHSDMUajpJUjcndnBzwDM2sz5BFunFhuLhS7AUdF",
  "key2": "4Ws4nPqJpLcdChCUz5W6yP9E9DMipDMtdQQxGDxaaSjT6BskSqpzRNFwPgDHW1fCq4JQ7KZmDWHdNDr8M9XF4nXp",
  "key3": "3xsazwKHyrs46cYWAf8okbL5wX1yvEyZwf8uDoXmHJpSt5BXfpvR5rydKXTt2F1UR9Q5NBpzweQ4NTTwCPLcdZ2J",
  "key4": "M3m95vzwQgnLo6fM5TeBL49cmZhAAeRsgrZ8V3J8mMDMAF2dPNEvdubMAvZwP7bLuFBNaoGqAooCQbztBqvRcim",
  "key5": "Y15FGcWDTc1hU3Vnb5U4oDVFoMQCieUaYruPLL3pCcnR9qpa8771j1GRyit24D5f2gUR1repBECBhzGxERv18KZ",
  "key6": "4yajrpTdfAoXNSZUELir9sRRbjaknqcTaB62GhoBj3ddEXtRHRQm3qD3BnKhpbS1rCK22kXYTYVqNhc42mWzQM5W",
  "key7": "4xb77tbdpj7vxN5WCCK7ZfPByCSGrSzF2d9tJfaD3JN5bpnQmceLBXkrtZak7sf1gSSz35p68TbuDbALdsgJEN6w",
  "key8": "5iwK3dbSFYSvGstKgDGz7Pw2cFd3ndTx4MxgMXoKLxiTM5nsWNPkok6CQ1DVcqtsx5o5FYM8GPKQiyexecfNbaph",
  "key9": "3ekyTQ5DphtDXo94KnQdv6BsjbFo83cdHw3iqT8mCTGV3RG18rhD4ZotqP27FeRjqBpWzGpB7mhtDH4e5Mcc9kAL",
  "key10": "5SCf4ELFA6uYZFcXkk8fw4uZTRbvATcvMVkoKwZ2zcKrCRsUcMFnoL6E11Kjaaurz2yqzdR1o3pHUA5Uxw6RWwfF",
  "key11": "4xJA7UdbhE74aafn7QTQ1AFgo6h9bAb2QszQA9RRPd5x2FpkadKDinTW6DT4ZQpLsitwsSnEVzRJMMssZ8A4VjyR",
  "key12": "4z9cJET3ZHTY2hKt26QPBjfe4VSDX3mECtCSVGVAytXHWgbhWHMaEqRB9zNZK5wX7G1NZUpez4W4MpcjQz1gnF6B",
  "key13": "NBdJ12j4KCpxFLLEteA1Cfskigtowe9DFMPnutocemaiAHMjEFRcFp1AKjstmHqCMAejSjPLCY2HcB3Zc5BQHqn",
  "key14": "3g7R9u1Ej7hmMVQQ7JGrMz6j4n7KMWN9bcRP2TpGCddWF9gLzVPU9uP7qpmQJ7ZjaAQHH4TcrLTggUHd3WcrKjoM",
  "key15": "9nboTezrPimSP86BWZnP6bfDCJVwW5rNvztErnYqz2NuLxZtP9ESPk2y1CfXg8Lf3rArjesr52xYSK2XLmyqMHM",
  "key16": "54wChVDXwZK5nxzZN48dGfRVSbdnB2g65aJ31vfxh8E1eToVuZ7zsW8fo3RZZ7NK2R295CCkdvKe9XSrbtiQcwhb",
  "key17": "5JFW36k2oM76GH2ME1NaqTn9CdKVWTARYoXZF9yKqyzV4f6wBrY5EQQ2VUckkCjLJH7X28HhtyM7NSpqogJKgpt9",
  "key18": "5KqQWvqNghVwZkKAFgwVoqSf9drJqbRbP4A4rE7mcpPf2TQWHYydUhzNmHHeNNNLPggKSeCGduJAH6FGmmoUgf6Q",
  "key19": "4VKj3MyMYqjfZebfutC7ue4uGemJFkLzpKz7ariKfbdd3jzbYuyvQ3yhhrULSUv3YRo5zPDX3ZC65YVmFJ36BBCd",
  "key20": "kyN5CiGjToWSCj1toAVnC5N2dNMfDxSx2KYQBp7Aq8rVx6sLnQsGyJCFex5aXvbUu1uW2ZsqBno8j4eB2zGCWFv",
  "key21": "2vjb4LmZtmLs4QCQmp5jfTBs5UDQtMT7ufEhivkGh5SrgaBhbmyWjKmr1cKVLTtUugJfqf2ATzp5JoJwXdQLZR9M",
  "key22": "3Ncqq8MMKMoh3ye92pM65mhGDwc7fGv6U7yNFTuqCfwaGgf8bTnsKrzhFCQCUwALGnmaensTiJ6zqUwPAKNgQvu3",
  "key23": "4TpFwqJjRLUzRmdcDJNarKyHtq1biUAQBa87ztEKnaHaYddp9vqtufya2VDBYqMat4xevRQAX4trNvUFdVTF9k6r",
  "key24": "34s6cc416AJMyvnWvmhUMmpngu2FnF1AHxYHrstnpQsogBmaXfsSZ966Szib4qE36A7vnYravoUK61YoZZ4WUEMo",
  "key25": "HUMnzPnDgibgPDLKu82Fe5bYnTVZhEWn2EgEpbsWzWCCCTbj5gsDBVgNs98mUF6d4sWLG6TCrKWVShNNyYdSKos",
  "key26": "4YmhWUaqXWj7UhC6fZUukEXM19PfSpZNsUDPok3Np4knenBpwNyoE8tp7FVSFPkxLVw4WgAr3BeV3YxghyzGYidL"
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
