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
    "5h2gzLK2DeeY75bQiW99iegH4RdjSCEvRbsMqtS8mMPipBXgV4EqyBg2rLDumtz8odXVKssHSDmEf4TbBVLZK2fQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zBAc3BXKxciWvBEgQXFRmCxUG53AVtSLz3GXPbuvzvZd1EbefbADFjuyNhhbWz8k9eFWWG1vu1MN8St7W6ceD1C",
  "key1": "4SLoMz4KcowFEumsGn7g3SNwfTS9rcAoUJZQzpkToBwZmKPm42jpPaKm7S2vWhzkksfUdtYsxb9qcD1GoJVjhoQM",
  "key2": "4wwo7KuJ7qzNpg1PVDPR5zmJecx9b6dXMo7yTgWUwTq3p57g3NNqBMZCTNPRpLLBHL97xxDoeC2DaWNewkk5fhtb",
  "key3": "3wj2uB9LyYPhd8uauHewwHmGtJvNbo5txG2Z77HzS6urvsntGahryCbjXNfuwsFosEFw4hgtAfuMeNvQYVrg2g96",
  "key4": "2vwXfiL1wwc48YPFmt9zyxsUHYVff9KrVz9NFgptVeRMLYsYoxocurcivxFzcVbghhYWFXmXP9mGkZr2RkWL2zra",
  "key5": "2DQ3KndoHh567tdfi5L8f5pbde6LKVdENdm2k7SUwhNNt1akzAXNGNpyYGZjdHcQU1tbcRSSJt8qj1HW9MfNULrK",
  "key6": "nN9e58c79hds3jeyPcFeMLaZabsHiPL1AFS9Y7ik8N5fWkfTuSFLtqgZoxHoQBNRzB816WJSvgjKVTajHjaj2oY",
  "key7": "MDPLzn5oKrXbMkHKjCuXS2pDnimk7bmvbiCJvAx31Tz62Rd6vHB23qxHLk4RpL1BuEptUn34XDeNWSiimtPK3Fo",
  "key8": "4AA4pooMdACXpvpE5wtVCYC6TfRtCzY7Az9M2hGfQ4PUtW2Pg4JY7AKQe9R6yK9FPP7PrpAMfF4udN4S18SWt3qL",
  "key9": "4xr1DQHoncREby5H8MUnTytSaKzHBFHcKeb2tiSojvVPG5XeJMjoLXtk1jTa6EsCYUhhsUhrMWPDDAU2gtrMxsCb",
  "key10": "RW5RqG6p3mugti8TrMLZidNbDRmPYkFKxhBDtadBAbgiyJS9inftVgCbSAyZLLHSwTfEv9QQn7LLtmAyRAUKT7i",
  "key11": "2ZkRYwS9o3RzZY4irezRMnVd98VxN8wr5LgimBzLWzoUF9iJzZvehQxAXfZbCFwzZoEcvcTaZurigSDt5sANYe9N",
  "key12": "kJkQD63uqTWWwWF16xeRArjj6HAArSZPq2gEPqaMLwoU7Dp361454BpUqNBEwWQWgFaqLnbh8hpcmvbrBvsF5tZ",
  "key13": "782wSdxLPsYxNH51oK34C3QBeX4HzfSXkAFcLrA2GGJtN8icoEeBJ27BFd1fXSfSA9xAxQH9rn9Uu8EgCbTdKnC",
  "key14": "5kknWzQe9hNcmRmYiwsVVJFsGoxnHJPBYHfM9vyyKmnwoh2hxYkV2B65FfT1J59YipQDJprmriJGEKS5k7TaLQXZ",
  "key15": "3U6NH7iEgzBC3ZffRTH432tw9hfmjRvMWibmqzohg8szRX6KiXzzoBRsqj37P6anLZo3vu8Wpb3YsDdU3LwaL54e",
  "key16": "4uy3AWdBfrrN2rzvjRGBZeCCLNJ3hhV2GVRMn1qZ3dYuygxvYCDLxV6oKc8vtEeCJ8gG1V7hBvW3WpX6tFRtDT4b",
  "key17": "5HDMcz4uV3eUA9ncK2PVioeXrLXRh1TVBby78EiRUrdULWc27VVMzYqoARim7WmmAksCmF83q4qu3Mem55NFcaET",
  "key18": "5ZPjxpSY17zG45dg84w3ue23BUg5xki45LKEa6AqzqSPxUQnNiEQhtfqvGzSBKiSuj1XCDiNHD8eBofr3RHdAfRa",
  "key19": "5Fq4vwnT3yxcBHb75Dk6YzypGULCCgTyxgmAR9p7KWGUe7cfnBgcaBvvxVPXiSMFjndWqETH9gGx4bW8xc8qunkV",
  "key20": "664UJgZ77hFi5umuET8iAZimar6KowU3gya5RviPAehkSTHFSX7zCoxvsvacHFM2inAhgbuqFyKfZiefmN1wxfHU",
  "key21": "4kYYP5eZ7nBo5NZwY54pPYDdG7Uvvn7R4oJQ8HUfKVkMXK5jwzR8CgBWxdZRWFTadhng2RV79pHhw3E2o4tuyZrf",
  "key22": "28sUij3kPBJWSW4ZQ5EQBCX7WouYE3yicK1PGjRhLvkSfDBWReL7tNMcJgunUPdTdaCmiGUqRTGu81i2MM5ay5UR",
  "key23": "WX7QXAN6tGTMYT3U8eKPhcGdz4h3pm6HGRECPjjq3V7wPjrNU9H5kVp7nzwVxFBHiYKLaK8xvKVT39PG67jkei3",
  "key24": "3GmF9WsQDDyETxcBrpFCD3UKFqrmbXNuKH6zAYoQRbMF6wtfZyiiPQPSZat2VfFqAmxRp8kZJFauHpCUCLg4h3fH"
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
