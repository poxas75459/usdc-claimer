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
    "3s2VxUdeK6bPbPhQ3Wtb1waF4Sqn7HZ9hrfzNxqTKmHKXgXZK1aYAnLVp8quRyWFdjumX7nX9ZE7J6QjoRd676Ux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LvLpefQcMis12wDagFGKjRrHj8ToN56sTMqrw3gWFc9AieyB98as5eE92ddAHAR1nYNjeJNT9PBBUJ5VxoytF5T",
  "key1": "26LAKzmBRYbqbUw78q57eBp6Y1JRnki6wAby3LX2fjFMWun5ugdZUfN5SxYwMk6LfQCpraCs93UsZAVojDMkweN4",
  "key2": "3K45wGvr2WwGzbaZ5jMY46UWEpGhTNqbrWL94Mgjqjv6RFmJJnaPar3xNJ1uYaPGs751rTbAXBBiZ3Ce72y4fYMz",
  "key3": "47hwhkUBUipEJsmyNUazKVKkZSh3U2Q8vzGibUGRptM3rncxQfEMNgQbQu9KLQ9UpvbS2WSX5KBNxABYLj7t7FgU",
  "key4": "33mpFifQFZ9Ptcgmep4tgWG7K63BLUWeJHBujNefAnbnUi89EbZhnYohm7bxMtiBdUtbnNiYSAs9NZLD6tm3muyq",
  "key5": "4YpprcSRwcAegTU1gthCrcnXhAbJexJDaMePGSAEYypBT7a7iMfbKUucREtLSrDP6GXzQXchZfkZJDUUoZfedLPp",
  "key6": "43d41kkXAPn71sPpXrUfw8GPLwkHSQXeSsMiT85poyPmmH7G25gVM2FGkASNRafMerFY6odDMrEbp9vsFG5USY7x",
  "key7": "2NqUV9pAuqH9UQdHaggztk3i2HRHYUNpSi4eMjZVBosJBwB72McpBHW6v4zJwN31atf64J7X6FyfzneJbAhf7HDm",
  "key8": "CDXrPyGDRjeu9r2wKftKJQFmGuZtHMKxV7L8cRDaKYthTxx7fcT2genG5ibjLnjBxidMVYMEtNGxVETh2DYNrHr",
  "key9": "4XostG7MKi8BKk2N9vhhUq8YwANAsV6YmJDNYqYH8ddjhsatcbPpxkWiz9rZ6suo7BkqJBcHU9seLoSLkU6TghS1",
  "key10": "41pX2G5knTiGh9vDPXNEC14bTSiLhToat234Z5PKB7gtrE4y1rcB7gKuaUAMa7VWZ7nQNMeNbK9ea58Yz4jkHXAV",
  "key11": "QFcvWxDcApw2sRB1ePJrq2EQ1w6zSpr8VA57HBpi9NnN8xHjnmBEytZn4XuGWFSnbb8EntSSGW48ZthrS2G2GEr",
  "key12": "2ovuowUDZZ2YrG5dVtxbm5652KsiGdosbERfdrKTqepXhACAn4GtqS6J6kniNR5opGy9vhqJWYWXPd2cfCidKywC",
  "key13": "FC7DUmfBeMf1fcG8XH93gAYb5fv3J7Y736Q4hfmUcBuK6bgHy92N7UGb33CbJjZhqZdYqnFbcWmKAZgTmGPRKxh",
  "key14": "33aS8fBVnpwfWTU66cwkirsp8LM57SrWfAMJ1mKfuocqfkQtTqPtEGkyx1EviqNojonSFu6bZFRL9AUc75UpprFo",
  "key15": "2hY8FRaLhTNXXAuUn5d4eUHEkXyie3pnqoNuGsw55AjTDYB7xKErp2JFbnpdHFvzmLqBDxUXKHLHD6Z87yAKh3WU",
  "key16": "2PxcAnVRLU28P1H7VJ1XzRZeG8n7tjS5AoqiC6RLNiQjsuQCDa8KebXWPP5rGqW4ue9x3g2E9Y572s9egEb2gmwh",
  "key17": "55kscfBw9fnXRDvFcB1vmwe1TQ4cp5pF3tWvZ3z9mCsNoHZyKdWCXhqV2vYth9suX7YNoVsNeD3cXqqrMu9Y6RHq",
  "key18": "3oEfj745v1AU7VtW7SHyjxVLpdRtkmyGk7TX979f35MzKMRDPaqvQMcKNiv3nEvzczKECcV9sawJj9v4dzNwf98T",
  "key19": "4V5csWmcVX2tgFWBh9TtRpsDVVA9KNu2ymW5Wfj2WozUwxUN7S3rYp8wZcyNY2EzuaUgRphKs9eVESiofhGYgW5C",
  "key20": "36BFbJbbY43yXqiTy3i6QnDicj5s6SDjqwE2zNpFoZruqLArWtvvNcHZNix1jjn2BsQVuFXbNF9rKwhoN1kJzkmh",
  "key21": "4MdsRnn9gELwrBPDPRcaxeGHkDr6x7nZV6UcoBt6Vx7Xq454KLmp7iHicddYWR4wxSpyCAWKis8BjgJsh83rQcKt",
  "key22": "3ULbJKwTB4SozpqURMqcKQWowuYai5JkVKjLC573pfcTyqDjCvhNDcAP2s7rGNfVEM8eHb8a72s3mynovgiYemrF",
  "key23": "5bXPvrS1f8iyrciApU5Ac3oNf5AgajQ59qYWjxLbeczM4yPLzXWT7MeWZbJS7rcqxnv9XUnLSvBByoCBo7yS96fK",
  "key24": "2ZM8EaPHZ46CQ1gWR1nDwqjxDZYf5ZTYL4rCuzaLLvAXsxRybPvhAgjLWDmxY1b8vrdXd8gGRWcHppn4z9hqzjCJ",
  "key25": "2gBKisaNCEhWwAbHnKj82axeZ8oQL55DAzPxnNHoBUSkwTBtesv1UsX6Pmd41JidmYMBRFv7trVsy7wGPcBjkivB",
  "key26": "2GCfmPr7kHkubcYsH3zgY7Ro8rw56g56zPYNiHE65wGzkQKLUEVS4znntDibSkdiz5NvU7unnggEvnmvzCNhokWK",
  "key27": "5Yh8vqPy2pMvUvnEWA3PRYdzgW6td1rm2sR4Bmw4piD8GBsriU6otCNFhYx2KZa6M5KbKbB5ZBV5drD5fNNG3zrD",
  "key28": "3Et32xcaGUqMuvcmZSsavKbz2UyuvcVGG13gHqxb8AmzaibA9VijJhz3k2buZwmwqkBVCUMJ46KPMdxgkCziYLDg",
  "key29": "3wdb6Nj8pxADJEzkyhENp7F81fbZdNGzr5Px96Twzdq1TETQaY2ALYXxZ8uTjMuRa9fzKkRx14ogBwqG6vrp1obh",
  "key30": "LFCFqvLCG8vx9kiZbmhguF41cLTkq7zTeGWTxsnZuivUMcV7QzgV8Hdev26hcZDNBUPY8Jq7oXWr2d3k8LFuYk8",
  "key31": "24Xme8KKsbymZthKrDfQpYjyhszz7f6RZ2nDVAEs4ai38LEhXdnUBRpgFeoPmy4U8BBDkbgM3odpkuBXJzSSnb8G",
  "key32": "2GAf7uP1YbuUE54iX2XRPYQHSnghdc2aV6CQudq2G9GvaMeUjmtAL3G4CBrHWe74FJa5YRdiY9eTc1SpjE6G2cw4",
  "key33": "2VEYRU6znhAAibyhbZjYtQPr4e6ytw8aYet5Ci4Nqy2z6mE6vRzVNny7VQhn1fwWUFcZ72FyfrDhipDT45pwzsP3",
  "key34": "4ivnHmFnUGNA9du6hv5iLcnVVxczNxKDfJTH9p9u9Pg6aUy39Eowt1uMbxQaWtbaRzRtLSUtWUac5pCMwWYg2qQY",
  "key35": "4NRfeD68rq9iwaMxzUHGba96MU5TYVuqvWjFhSQv6xkgQT9MK481nqvvyQ4Wk5G99QHuFEMjkh9tUzEukhr5FDQp"
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
