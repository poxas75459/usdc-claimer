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
    "33vHxnDLC8UV35unV4m3AjXnejAmkp1tpWwomkdu2oZSJBJtEo6pzFvxNXMPJA9PksLwctVvZqqSzPVwZ4VkNdvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FULnf1mQ9WSapAfZUVbfQSJAw2fQH7onnTDxThs1RtqwKGv2j3hDwohCKmsNCYm2LXr6YPienBki6dmD9yba53j",
  "key1": "65TanBRD3Dk329rxVbNx9ZUn46XjLRx38nyPVqGa62NDbitc7sGic5PYknHYur32YTrfkgk8ez3i48BFYEzaPmBz",
  "key2": "f3DxnkbZz1d5pgkn6kc4fekHESNFDZQr5DCo3UW8Fv52ZLxqQYnQUiNgkenez9h9uFhN6DLd1kyD2MaCMnFEoTY",
  "key3": "nUpvWgmt3CshqqyTMu4AY8TgBtk7p3nDBe8SGmCd1YBaBWtLtcfcyc59Qtykzmvo11MksaYLK5ELrU7yMC5QTJR",
  "key4": "2V4mZLaq14eE7DoscH2eqDjtaCQ7seZcT7HfZbkgvGRSYv7XfKSEqnM2oJPtr8guQ1Jgz3xwmmM9RnubkSUZQqTQ",
  "key5": "2uMvhNXad4g9pJ57r3qPAairho4EnpB6QgsTQVSeJHvWPnhHWgbKk1RcoCuPARyR9iwc5PpbdoPPupDTAF2Xh8Ah",
  "key6": "2USPy19SaGcpTRvZke3yNFTEHE59vriSbxq5B9C7u2LxUwDnsat132igsvhtZkKec3wMUqM3sfePRdxTv6jXgr5D",
  "key7": "5qZaJor7ExuayWRCFbQejCSU4dpm6vJobSbDN2vUMLSZGiVFQoj5uVg5nQRQ9pVxdBV57tGXZQ29gvFpnSLu7uAQ",
  "key8": "2ozwLL1VsH2w89mtxHCPqcNrge5wEQUBq4sqdKVYrd8AnargoN3kGHmEMJx1QLM6k3cEqM1Ubuw2VaDkWutVUEDH",
  "key9": "58Nv3npp3zYC6RVXsFtniCGm8RWVk3Bho29y7E4KdpkiFrjPgwWE1e1DZaYhgEpca4Ytg5gcPDjPmXaK1RueRzuU",
  "key10": "5sYkwHB6VLa3Cn5Y3of7To2rFdBqjyAus2ZdAR4oLwbgswZVknigfrqbgZPpQduShtcpiqK51LeZzUaAi95ZXnVH",
  "key11": "bhv7QEsV1ZkrzE6EPXaeuFNHgbSJ7cShgEhbURGLydNXEHCnSeEZVJU39VYLZPkc6SJi8VPKZKLrF9Fb5M6RQYb",
  "key12": "z9kR98JQme36zrmkFEHMjmBfyBKZgn4oNewZRE3vBLYvokDMbcoboPU8HUPmtNksdjgq8dT8hWoZoKnhS26AoNs",
  "key13": "2kCH1NhGNiR5nrQr4XrrQqYd7TYpuupYYjWJ2SapU3ui3zD8MeLGok6ch4caRZqM2epQw2bwhm3t4fraBVBteCrS",
  "key14": "HiW7vFj1MxJxpWtQuP5HQ1osmw4zAApqtKcdWtPKZNknhzKz8Wat9eGTiZWAEiXmmLyrGnckjvT7ajN7DgkvH2b",
  "key15": "CeGWnefSz1auD117uj2Q3FwGoZgBWbECsuw2oXjdoVXJeL9m9X4gTCY1LJa8kgV2CnufLgEuGAFDRm3AP9ywm2x",
  "key16": "3b5EDrFpZrFgTMqe3Jqcr6pb1u2mvwSmH8wyTQe9kW6wGyrE7jroxcvKLgXeJb4t8EuVqEyHVtFt14ffs1L8vo8z",
  "key17": "2sLYfqzUUFgAvgzNWz9LpFUg8EtL6ERSSzBacRcVCxH6bUJRZuyAtJNQyu7go4jSXx7GKav9p953TBuDumNfMAsT",
  "key18": "3E1hCtDFWVso6meyfVjDpcXRMwCmjeUVdVwwBAGm84GjT9DEGSMZBC8VWQuBddCNpSznxceE97cm1uysT5xxHJhx",
  "key19": "3ocLBQZTSrNXScWk21s3iSg7TxucXNJLon84MLjMDpBmLRfSzu1AZfFyNLUJajha6pBLYo1fpoeXtS74Pi1Ez5CP",
  "key20": "4UAQdpKmcWkV5qgBs7pUiyJpqHyMhZxabmDU4Y9ohS3PPhHQgB5bR2zCi5pTczUVsnxHmFYRjsVtQzpQJLEnQyDD",
  "key21": "mnEchPyXdR8N4eTaokHNLtiVY6EoFRftTQWThyjKvYi6vD49NWH1tbHsH1RNbnYoohTsQEZKUQ2Jres45QMFQvL",
  "key22": "YDrWRrFAj7J5uAeqNEAjPzYhpWiMMa77RUTBhs1oyC6kMfUBNk8hgqiDWXXNozPvgy5Dp38qGyVZBEhMfT7fb3n",
  "key23": "61AtHDX5iJo6RUCWkoVD2ppA4pFSCwXtLU37WQyxVeg6Fva4KW78ddf3ry4XLnC8HmqDhW314h4jRJ1qiM5cgKeN",
  "key24": "4pLjsUJvc5ipcukEV1D7WDsMTrTPVyEK5HHywq7w5Rdzjm58hVpU3mEmgDS29Gxe9tSboMmvvsi1XJeoY5YAoGYA",
  "key25": "2WTEFSbpQkZWZtqkGLSNdH21J2y2eMChoMuZTeLFm3gb7kN34nciDB8Pp6V9eovHxxY1CNhgVXpKJtrtMjRWXdFt",
  "key26": "4a7ZoAzTtPpNr5SodqvDSNgNAbNhPn8VDWfwCmDzE53SarXd3mwDFVy2CaMNwZAVQN89kVDZ9TM8mHnVuKpfBe77",
  "key27": "32bmJqNr97VoEQbN8kPY53puospEoXtEV3cfgJS7uMF9FKfhVXNeY2DyJrnJFmVCmVJwphGRyyJaA64yuuVgs9P8",
  "key28": "45CS3b2RYrX9UPn7y198Praw8MuhcRNfJjYBXZo6Fg4Y4sbVCCx7ECqFA6WyPMkKc2w5BEsuRiVoYECKp4JCSy84",
  "key29": "5WWHhd3E81XmNqQA6hS5qRCbz5mQ1cRA2MaM1cqiQoyVASJzBGbQddJH7Qbi6HAHXWcWKgxNFFRrrTmPTri1ZMKx"
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
