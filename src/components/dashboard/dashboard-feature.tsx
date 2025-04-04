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
    "61jo5pu4BS8AXid5NwrQhiPH3ZoQcxgfVRdw3EripPUpA9PzwjxXBz4a9wtqUSsTxEojzR3n2edy9LibSDE1Wg4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iq5jGGEA2jjCraTdLnvhsYcoHtGCe6hGzytuohpwZqgXSTF5NHid6mFNt2qYHnNpqfsHTKRNAqTJRjUcveJYxbw",
  "key1": "5eipbgkNKdcZGoXgnEhVE4vQAfRFCUcpFCiSHcPgaYeLsQw5Xkv9Evd6MqLZENseFg2qJr8enWktc3NjB4JBrW7J",
  "key2": "4yUHbpg2R4GxMxbqVTqeiJQq1mGcPZBm9T8A9UynvZG2JVSFTaMXhXJmNbK9ek52DyQmDQ3mj3Cx6zdX3fSPPa4Q",
  "key3": "3V3wxGdzW2tGs8h6WCBSaAu2DbwV2UbpMdDaUR76uxjrQVNvpedDb6uFBE8j3jWFvLYLwjB9thqRV2V5un2GoAR",
  "key4": "46ELBR2f9AG7BRnhp8bu7XSm49xxVpacSwJzB1mZXnPCg5AEQMNFwWUG2Td4nQfopCxKDgVobWFBd3jMkyVkCtks",
  "key5": "sGzUf6Nn1fCKdMCSmYS6PXDjQkUv5hq7kR2b4LJhCpgXW2HGBZyE89uKq78YyZ8Nct2FnxUaJFYer4BEaquww2o",
  "key6": "4GdVwWSvD7gybEJYzYdUquHNjDJM7MYZGjKJtZdGzZf7CKQE3c5R9d6fTGRC3LzKaZFLAZNET5Qgzn9Kcb1QensU",
  "key7": "4KKerR8aFBUFPkqUgfWGvN1gxTptBpNeD6MRjFxEojTnB1qagaeubrG9KaNRHMBKZGpwVWW1YDrkyQGDCtcr3a3K",
  "key8": "jd3Kh6FJMBvJDEkQh2ducNQRFUoDvkeHTEZoQtrCshLHW1XG6mLbrYAJLVGpqSSKA8K3e8j4T2MPY1nUC7cCwmi",
  "key9": "4TJcvbjP9wQAKbNicFzGFAyeidhV9i4an4DKgFbeQgFnC8rJZMmGA6a82xmeLrmdKPezHUQsLphVfjtbKEywE6k2",
  "key10": "2LX9oXQKW1QekkYzJjtn4HLzp1pkh8EQCiTF1Cbm2LFCLJ631yLBViK2Z4dkRHVQrajcfTF8Kvn1z1dsT3ZNEzsA",
  "key11": "Ng8EVhB2ahaNbkAi48FJmj96XyDbX1v7H7u3sQpEtoh7yb8ZVS1asHxAR1LHCTrE247jzsUbvHxzFEomwo8AnEq",
  "key12": "EYFr33ekhsyW8Y32Kxg4Ui9uVV6xZNpe6yWvC168iRKNH6ohBnCmY2UvCfK7iNE7Ciw7DxxNhvr5uH35t4YxRvP",
  "key13": "46otQRhxaCdJtsjzRHqcdiReCELK58Xvy6CNyvoyAxT7FiLoUQ2vE7P4q7xYgkLUBUo36vLDm5FYV2M6dX8LT1mZ",
  "key14": "4r6Ptioukmrr4fpq5aw2aPdRqcgBRkRpWEePAwLmnhL2WM8mDknKhxpQLV27ZYjdMnGFH4QmDQsrHZb9qhFvgseC",
  "key15": "35QvBCiWa9HBDbo7TFAZVTJ7zZPBan2eqLXcNdE4WCfK4V5D9udF7jptgXGtN4m4WwFQPjueMWD727TpoTWCb7Ni",
  "key16": "5wryJM3NVYJ1SazKP392hiyfEaJCgJFSvavGKFSoxCHtFU3ZuP2JYiTQ72YuavvP7nj6fHEypp8ejyKEpZPaY7Sg",
  "key17": "2kJYW4cSibpX2hrTXLJdpUyq8f6Z7ZeDrnsqmyfPmYiiQSLDbySWVmWtp52DdhwdA1kokyvyAE9uhgHspmhFjyKb",
  "key18": "3SD56D3aMXdrPNDUZE9gqucjYxjj29dQ57fZcao8E2uYfPXx6CeJt5Pa9VVh2dVYBdXzpA6g4Xm3f2VoaJ9VMeKb",
  "key19": "35RDTGPkQDvEg9hs1ebeQrNkYUdhNdYNr3n7Pe3mpqdn2cKdiuaLmcX8frdsj47SQxPde1RT9XJSXfXHrvX6LFC7",
  "key20": "4JiCRPFV4Qs5WHfSRyp3ex45nJsxJ8xx93kQXDfa9pSd2rLLSV4QTYwtZCm1cV1WEt5cipwrFsbgmw3k2PKometJ",
  "key21": "4bt5gRdDhfgtrqr8AA5FPJHcx1cpY59FejrN4z2JYC3eNmfTdbXPV34mHfzHd6XBbszxSxX8RKXEJNMpcPzWNQrR",
  "key22": "3TYhjCK5z2jX1X1dK1nEdAY96XYLqEwndTK9zchTvJGz2W1GCsuQWQkZZgLCr4qjY6TfPedpwSaB1xmEGQBEG1DY",
  "key23": "3PoianeoAKfA4t3fL5hH33jJhy3HVzZpAts9g9K1t4Tba7hEp4BUzsJeb8akrBStVEZt6UPUuf6kLf74tpZ4eZSE",
  "key24": "3Q2Nt2xMmqyLLmkdMbhkgwCath4VkrEpXd7wb9KnEjKq1ZT9vmuSi5HNtmLcULx7PGv3jbTmtkxDm219ZbnVrT6x",
  "key25": "4RhD2kM8EoyMVFikqCLKsZ2CtPPDCyD8r8JtEqmuWCh3onvRMxqoQQRW9MP7AETWzQxKZ5bB6KnG5DnzR55NNYRk",
  "key26": "1kY9GdnGWiku98K63Gok8TrNrugash3q6cWWoLKEdTEF8jhDzUnuGezMiUYATwFkz4V7qhNxtW9h4gcC6tCfwXo",
  "key27": "36b7ehZrqifi4gFyUkGx1TNhBf9T6gKZi4xf2mHTCwdJHC5mvKaq5YQhEPV2d76EhroAi2Kx99Ve9s91eniRA9gR",
  "key28": "3UwPmwqPcMTtMNUGipyLD8hRTPGKd1yKtztQEm54su58ZQQxvHYHT59HFq6x8tw7RoceHGi8nrXcRg9EmRaDMxvG",
  "key29": "4s8ys6Lpk41JRrPRvvuVwL9bTCbQ5ABK7ECdtzhDZCBR4jyMyx5J6FJkGoBtNHyfMVA4DzD8cS8JfagaCyXVqVbi",
  "key30": "2UbhbQ3S5F8nQHjk1xzM91A9FUwssocQWitBzM6NJgwp5cKEgEuPYC3RV3BJjpYvSPpZ3P3jmoZHBNxgAwAwM3nV",
  "key31": "5aCmDoT4QjdRV8guTSLRKj8LFUYu6wY9xEPH83RcgbzzYJeW3PU2UtJUYDJPZrBPDCH3q76r9F5iRTCRpsD9kYUT",
  "key32": "4jBMmrxUuNS7PDVgBfQNhEPx9izyUFYhhW9BM8Nvd9CeyuFQ3ZGJS6GYxEVpHaHVDjWyh1y4bNzcdZ7Y3wpKxvo2",
  "key33": "5rgLuivScpimxZJWMDatM5YHYMLaADTdcRq5MBW4pSu8nKDZ8xxWi84jFDtKK428oY6CzGr1udD8ESfL4iXkuyks",
  "key34": "2wCJzHitY69eMiuh2nm9WA2oHRSjPgFgpq2F3BnJAi2iynjQWsGfLuKLcb77PEuJes9NXQiH3EELNdaWqzpogdns"
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
