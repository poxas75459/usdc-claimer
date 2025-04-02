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
    "NFKhBzHXeoKGuAEyUg5RYeCCAziEfEo7U8CiTbCxsAAGTUsbyis3eEYq2bmchoUo4JHwukPj59X6D2fiNPSXTb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fLR7y6ux9qH6ZRmVCHBMBtkchQ2FhnQsRTzido7gAwo4e4eyPVwFggZXNjrqdh6jHBv5eWr5KGiPa38BCkt6jBS",
  "key1": "2rsR84Nk4NRwyDHHjz9fzZiP7VybVoWGXxJqGV2Z5MdVvvvrNkgnaxW7Vhd4FamnV2eM8f3RKsxZoYVeT68gaj8c",
  "key2": "423JNZkcZjTvZ7A4EurE5uh6bf3nNvYAM1UNb172bgSX5f561XWCmXgcmQ8iMNjuXB3WDbB1EtW3za8PoSs6fEDP",
  "key3": "4Fz35sLosgZvvfjjLnyWx4T69cJ4HzGQKbZ8jdsspCCH4puDvyGz8twn3X49hy8WtcJ3DbJs3gwXJBZhKPG8Yo2s",
  "key4": "64w5VBaPMSAAo6UBYFNL5X31gG5ozB2KQ611PaNcxAMvGtkHFqgbXneAxqUW2bQR9m71mU6pCLeMTsEyJRue5owf",
  "key5": "4htrtNf1E6XiaQBbhJuNo8N64wCV2yfpntZcA8wB9aUKhMEH9Wcajqir19pPgzieB55ovAm9Dw9va9hXqmcBqjvH",
  "key6": "57vz8jGtCat3BHQcCRwV9YkAeXrTSh9dqYUjg6tB7mgqtnzkLScQy5t6QzbyMZYUv7teyvwikNkSugKpjqojTQmz",
  "key7": "37Q5yZGTZY4CqLWJrtyAGEQbPLS52p57CAXNy326JcPEWfpYihnY9BYmt1zpFxNmGLSunABDR4JEeg7BkjhD1TVE",
  "key8": "5vpCrjUhCXhQZKQBhCBEVhB6eQdFWwqoUniChhGUd6SXbFqHE2S2Ew4MXvZaJS12Y8khpDqnaN5H6n7hxed2w3Zp",
  "key9": "49SJgYSmht8npf3cZveLnQnzZvVwpyXsBMdWhGY4THyhWeguYH7KQyGNVpMmRzUpeGdVfmQWvrZyRPfbzotZvk7g",
  "key10": "65ibLdB5j4PH3UsWi5v5fRFn26e4NyjWoG4rh1PR9NNHxsRzbp2YXgWF1G8jRxHJYwSMebfnhf4DJKDiH69MAojq",
  "key11": "2sur7RQcQnKehqZ8FM1tCZZWiDVymGKzFXbMFFcY6U4fQ8WsPADZTXrTNw2NR1DKGPMiCG2HA9oLWVs8u1D1qDjG",
  "key12": "YgZDoK96794PHuiJ1tNS1jno8bCxjWxKEeR3vno8jFpxEUDF9Fv4UuRFjSprhZ2qh1URnAsEzhoSw9Zt5sPUCBP",
  "key13": "27NNVqgHK8SvwZyGx5k4LRy9qhw64TQL67Z1qnQWfnPpD3ErJFznNhncTDH3PJDGAn2KxXCx1Q2eKzzyB5rwhReS",
  "key14": "wPAVLzsL8ue1kqAk9EkGJZUQfNdpEA7VJHtnhhdzRBZe7uBW7hYXzZAMN216BqeH5qkgRGUGxC5wtjFMapuuRN4",
  "key15": "39zRxQZnS5Ad8U8tKPZMpW3B6Au69uUTK4WXaYv18MdN8PAdo7jFMbZPRocZPgZsnMcMZ9QfHVcrb2E5Y7qYCVAo",
  "key16": "4nXSz4r1D3i9zd1KZGTXZEiPPcu2Q9faGtDtMY8bGVD31oiqeq3Lg2YBSLKgQwKoRwxBMdWqTq2uD1u9aoKpm9fT",
  "key17": "6P51xHCdgH4ZP6M6rrGePkQhvGSrdFd3go8N9z1cVJa51Yvk8kzfL3wWLQAuVE3B9VenxeRuMTJxaRTL2SRuaaZ",
  "key18": "5KpoxvdjETY66SskCmexy85fHtW1fGwc3NXDW5He4AHQsBJtVissxZKzf3BhsfybvU5enqxorVboKLDedRM21QuP",
  "key19": "5WTP9ZtCiJYVYmjoKbKCQ5L9wR9SdSv2YiufbncKKCR4N6igVFuxWYKrJaugec7cEVyzryeZs2EEhZcZzx8ynzZM",
  "key20": "3HCAuvbCQTAhMpc56kTHYrcbLEMs8G3ssmY5wKC4gnGdYRDz9oyMYbaMp5A49xaF3P1YfaWs7vogXcLUpsLXAYK2",
  "key21": "4R5ZnYQ2Bp41BLYc4vxqAS4a1zymE35rcc6z3NWWXGsU7q68NpTLyJD7H5dGcLduXe5atFPzcEjDdGUQ7h5xB87Z",
  "key22": "35BiVpG8NeMYTyVXdUhrwhFtSHuvfmHiDvAriG1SUXZ6DrcMTe7WqEMkCsYf7t5iqAN1mKpaoWJwWK2MWmQ8z663",
  "key23": "44CzbjJNE5XKgaSLagijLLu83J7dz8YkcgR5i4vpajkdW9ZwBAfSqBMygV9pFejxSfvDtAKYasNbET1Yy3PfpVa3",
  "key24": "3fMhd9hpoYHreF9PXx71fshu7Mj2tASVCYma84NCFjTjuXix7HykpoUyXDvxiJVKHQSyj8qb58qanFPuQYycfHtg",
  "key25": "n4zGxhGTdHV33bW5qWkPLNHUzNAswwedHxorqAbN41rcYTSQxBKhUm97eN45pWcxRWHChbVZNUumpggJ3mXFFkh",
  "key26": "4dyLRUiJzmtCQMgRdsaf6QhJqM9G9uYPRWp5VMLq8VioiFSPPfrsRxVJeaBnYxFBDEZXfLmGsNk5RHwg6p3JtSHJ",
  "key27": "48HEWZdWUZvnFRwEw7URRr4tcoL5X4oquFJKdj2hE6FeB3V3o3P4z1UEwVsjk1pJPkoVg77kAdPAuReKCA4gR6RL",
  "key28": "3vYg8Ztm68DLZKXw9YaWyQhkkxPZVDJ1VUdubGVQXPuXp3C9nGQXVUL51f7t6sCz2SevRLeKofJgXzDCTviNKewT",
  "key29": "5mUqPp3n2bNmLeKAdvM4mnRPm4kZXttc2vQLX59cpFH1bLqRULUes5qMzK4orGcp5NC27nb1HvNhvCbf3fmCGVS",
  "key30": "4b23rLiPDpyxtxKXo2C5zxruVrC2mz84HpWiFE5nrXzzgwPCmMRgZzZPMn9ey1h3nCkKRuRNKGBgwTLFKXThag2"
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
