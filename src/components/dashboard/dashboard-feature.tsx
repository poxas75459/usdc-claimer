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
    "2tYHQc1fSXxwVdSmvsHcNdVoGkfgVPN6hRw48ZEC5XihhrvzACytoq27uPU5BUSmbvdLHUqd1T66bKfhns6XqZmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g9QgTkdqBfr4U3wxYMHNkuKdtJKJp2T68z9hCQibigZrThqmxMppajXJm8HBsaBsdfXKS167yt9SYoXfjvZkgvh",
  "key1": "2HT15kiC6B1y8zGJrgF6fD7WVwE9dFZVimkuMdN17WQ7kFo3BDdqbWwr9TrXy4WBCMdzyC12N2wtYwoxw2NDzbdE",
  "key2": "5ZpzCo8wu8S5vSnr3sPnFcBbUyJRug9KdLFwD1ZWcC33NZBa9Paf6sqdiUiurXfeMcMRcqW9uUEbyrNinMhny8E",
  "key3": "4t4voHkRGUVZzzQW5UXhZjLC4KEZSebJ62YxHDAYeCDppNXpR5EoCgrXBCaNQrCQTgcyHFBHinLMK3brujRZ3ssy",
  "key4": "39gxhFr1LZDw7P8uwerzLvKzVdaKqwDvob2SSd7cWzxvrfSDceVzPgRh7WcsWMQqp9cZm1yBvrnwDLsrFkhtqRbF",
  "key5": "2pFNJnjKHKKGNhnFL5hXJq9NZ6KNq5HgtQhf2dS8bfWz88R7FxKYQYJHgA23oBtByeLPxb7ZAbxM9WLgebGYEc7",
  "key6": "MWS3rQkSDbDTaTiaDdQaJhWiA8uGCKCbt2qirXE1er1jXi5UpiwLU92mG1bVSC8mX1ToBcA3mWSGCva31ykYGwQ",
  "key7": "4rshNrUacsFkaw26kgWW1rg5M7m8C4UFeGXtzfP3HRiVbW9QUihqfU4MugGWqv9okXGPZQ8cGtmHz5gLXzoQTpma",
  "key8": "2a9UZ3fwZ22gdzfGgkf34vXESSyuJp4UMdKMgBthX1JxF4oPboEcekCG7bAu65wDVB1LH6UwNgUzUz1LtKo4FoKA",
  "key9": "5sHvQcBnoKFmLjm5vFkTEpvMZ64bgjjZAUzHSbLBCwcWHGDVNRf8CkfUjU9nN9rxMSsCnFNxTC3A3cwC8TNN2wJL",
  "key10": "2L9GbaR4ajcC9LdGcjNwZiCbtuXFWy5E5PZ6K1GjD4JxsKGc7Dr9Hw2gr2pe21Q7ujHA73Ry8iLGwtfvSdH5axoS",
  "key11": "AxPcH7VPTkQUqQZzCE3My5sbLDjvBn17bsWjZNaasqhaMTu4C2Mjnjpq5kvLDCA7W1945f1MEETZVQbSH4yqZ8H",
  "key12": "41yNpfTvnFGnT5n8mRawi8zEz3HvceecpZPkzKW228K65ncFuQZb4TCwPfA185pQkK9PLiHn7by9UjkkgHk1GUoS",
  "key13": "55RVPHa9nCQz6s7ZTSFeV3XCsPX9fg1rnFanthdz49tirJfvuTARvu8c5172CF14vt8ruXcNYfeX5bb8XbZV6V3k",
  "key14": "2YR3djj86brQR5Tz3JcB97PL4zD9zq16S7pq3i56QpLGntKaZw37BfTwpCGUQegGxSCdLQfo3i9jy53MH92BHvBX",
  "key15": "9pfkDiftzJzkEhBT3snY5SfZwwLTVXbF5Qiaj3qVN7uEoUBuMr7NgZ3Fqk2URyJfNveiUwKBAuxo5xjwAKZWi5g",
  "key16": "NoypvV3ozUhRZ26FUxjXmqxD9qo7QL6XYVjpJS7DiAJnQHnjWCAHrVHySQnPoPpiFMxrsb9FwTMEK1hWtyK6f9Y",
  "key17": "3UsyVqAgdxKDgvnTosPcQjtCHk9Wd8BAdZrfSfPFsokGoJ2ZPvn3PMH8ngwcM4drGopwVwaqSRf5NYtTzdAGocoM",
  "key18": "5ii66zf5Z28yakN1v1LsfAS7nBquQhD2GS8poHw8fqHygEsUXUhGYiftQE1tM6JjKapRqfJVkLZA9mPzjvFCx334",
  "key19": "23roHa1ngofmFQHVGujC2SGXQjeQnfba2xZMS7MKLtZXzSnVd2upeYccRgyD9Ey5KPgWLbPSppSS7MsYhmCxMbTb",
  "key20": "5HnG9S8dfMTQDU62e3iRjrV154FTsDCXcmqGx34gwoNomkh9Lq9mRXEHpPsfNnJTpmUs9KuRV2UWJpMZhP83vDMT",
  "key21": "2YPfUvUM2E6w6NH9ZMAa8rErcRTGYQGLZLt8ucEwbERrMEe3cGDGkVcPaJAWyH7Pj1KZvDWZABW7Nc4fp9P9tXYL",
  "key22": "5LTWEptJMBQ5JPJcANNPZf52U3mjgJkMuqJtT4BvLEpE99FG2v8QuLZw5RewpWGgs7YwkhViehQvyx3ARsnuVJMt",
  "key23": "4vFe3uyiTbNKM76E3KENJB4JopDQA2TxUqxts3oaGBehmYUoBr9zjpdC2YgAmePnhiYSdN4nvfjwbPu6Ai9mHs8K",
  "key24": "2kJYeE5BJQWxECXeLPANJf3ZfNa4mix8DRJpNERUEPY12XF4m9kVPsiBrAkVko3QPSyLV26QJNork5Fb8549WUpi",
  "key25": "4dyH1vsE258ehqBkgXGafCe613ttbTBrJ9AppgYmkgJgRtFWPLfdrgw6kdDgf1TNxQgcLgwFPYqAVBtzhRFnszVg",
  "key26": "5s9rEM9pTxPMgE6Kq3jZwPfxqSByL33uLFHWXDMBZktNk9xfVv2eCCDiCxS6FgxumbjeEWRuaWfCYH6wPnMEQY6W",
  "key27": "5gp3xiciaWLX5GRqA5rgs7U6FDVHWhYsxUEFsezw3EzjzHignYf9usrivNVuXB31sehvQatWdMyokWWhAg3LjYNE",
  "key28": "2xRfmTteafkGkN7xzyT4aNUu8a5gNE5K9C1umpLfeofYWDP9RuX2B8YocDQXiCowpth2ENk8pZNsCzMb5Q6mECb1",
  "key29": "3JRuWBcNYweiC5EAw4U2oCJtWPiPAynENryRqjfnsTifwNhF2GDpwmNWH7vcmN2KcSbTimcTNAA3veGxp6UZBMn8",
  "key30": "4oLe1wNFWdnfGWV7t8NtgFcfhDcW1inBFfypmQGTg79Drkp87J3b6NK6QvY2V2oVWDYkLGTPFfczgNSKJY3BSYwh",
  "key31": "32ZBVtpx42ghUKpQsnQRcvg7pY2XU91MHZ2aAStWS3zLnSgDF2x5k2GuofyP2pZLLFkZtptHnUCM6pS2EAdh5MYr",
  "key32": "4qPSzrzTWHPL2ARz4DNn4bXfxoQTHVzCCyH23K1yyaBtJgbq2CqBqGbRK1xpRAkdzhVt8Et4zAMq14fTvieH1if5",
  "key33": "2DevovM7zfRy33acNemFJ6oDqpNJ6DaUB2Cd1WjRU7eBbphzXaBUnUJFE88fU2JRdpVkFiWttH3C18cGoFQ7zFAR"
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
