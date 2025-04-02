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
    "3VgTHXyTYdbRbFR2iccixK3bqsuNjk7iFGNpRKjLaZcyzPfpNBpeiq2orifF3vVtTDjiT6vvVrqdV3WdzSiqSKb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HuZDURLQs7tgcbhZMZvJn4Pfw4w8saHiBAfBzCD8jVE8PyJ6b4tvxTcM7CfFVKPDekE9oxgUD7hjR9NtQZP3CW6",
  "key1": "9QGT2YU73vZUf7fnT21ram8PGPGhTpSB6vs7hd7kPQmxcWz2yqHm47HwXnVVmYhtm69znmw6ELEoUGMYdFv2GDx",
  "key2": "4cmRFJV5eYmf3WEKmn4iADV3ay2acGDmirnuoC1MCtjp3Xma6KDHU3UaSG5LKUPRRiperCRxdyh8Q5zeaYRRzCgk",
  "key3": "3Aede1YpjKXTYvK7qxHw8rktjWDJbHeTs6SJFQennmXGbWqRHmBP9X121iHMwKHs2LdoWWnscRtHDhkr6Hs5fqZE",
  "key4": "4c2PFbKGp8d1L1kQrFe4Yxt5azhFEGh12x3mScbbLYmjBj2NRt4fs85SbV42irknn6RNX43H21gx8tivMbRb1cPV",
  "key5": "5NgkDQytP7bc4uLKnFYDB4sfSzgNPiyMF9HGW7fF1iUx2nEnN4zZKv3dJjxnUjCbVfPnFep42RsMwqN2roZ5GeQz",
  "key6": "4xMQDgrBdZsGbx1ypKEDVScKAFzFDVDEA9AgUKei8cAU4HicBqA1w88BmWJ38bBZiBTRNBQz51bdakxDNGU1mn4k",
  "key7": "5eZsse2pfo7D8XhKxL4reJ5Q4PDL2vFXvm9sAgDayBFsxEeKxbcZRBH5bEcWYK2DkYJv84XNfeDKNDYSDvPFDPkU",
  "key8": "38wctBBG4Fs4iTgKD3atphrqNAiD1ntxqYvCnZ2zc1G8GghRApttiau9QK9AekJRgt9YPDBoccwtvWmoMg8MNWr4",
  "key9": "43CbpEDvZNXfmHR2iXrtnMv8tQwA3MA2GGrqyDAHAhF1htqLZ7oqjAMh785QTFzJqXFxcTb8Jcu7cofHFxgNUQon",
  "key10": "5x6bJE8kfY1kbCB3SgxUP9hzD5Jocev4SSr8iZWJJVXrs9EBnKkWTztTxwfSDY1v4ie2rwzMtcCikfL46PD7i68b",
  "key11": "3WyzeWkZcYqvbMdcV6enNenLBBwctuD9CroaXe1RxMsb2Rbzu8PbL6weLJkqeXKM1ZEcuDzgKoHk9PyvauPykxMG",
  "key12": "FjyKuvU6JppTYnKkgQ8fQNCiAiUU6D2PiEs2DxEDvvQA8RL8AtKRXs9euQXp5zWF6SxrXFpCf1yfQ8CZ2Vy3182",
  "key13": "3kJ4DBDfUc9Sv4WwYVqLPBLrjk3zwFYVdCap6xNHKjPqFYoj5PfPmQBgXCBBRwtARi1w49hx7AiN9S9nyrdb3g9A",
  "key14": "3MN5CwUTnqreWP59ECmmEh1rDsRK4fF4DnYNHh9UorDK9EWMnmcX7WadALg2ywSnypoBFpMDfH4UNYDY7LVAaXtX",
  "key15": "3TMnWxCz3AuouYmPydYFoLCJW6DUPydrKpgugEtzyASYgZkfVsdLEL2fzpyYS8g8thwotV2BxAEJdrEk43TzhFU7",
  "key16": "42bJhVdLzrMhNgeDhkP8eJVvcm2nzFrJXehJtFr4Tvdz31zsB7mespN7ZCDPacfMphcYda1rDpBETWxDTb1P2pSb",
  "key17": "BQTPyRDCyb8tALtg2BX7jDg7REEXQFvHcJM1wfKz3DFkbuNyP155jhXUuMYnKgrXraxgyYU66xq9BpdGKwj7VNF",
  "key18": "2RWGWnZSAj61aAFQ8AAVknYPymQvgY5wWzYZx5rf9P6an6uuRPPQQ5FTpmgarG2EGj8zevcAQzz1kvzp5zqgxvwD",
  "key19": "4phbWzHmUF9GGEYyhDb17VqTtQ5rHMQhekpL8tiKjPRr3CDNdSqXuUktvceHNWMLzySDVwvPfDU1rsnDjPzmqeyM",
  "key20": "5jj8DV64Gs6ftexEQTuXWTbLfvyiKA8zc8JSp2sSrakhgQxNpvXAm1yy6NufDN4c8Lcgkt9vKAJth147WHPHkpJ5",
  "key21": "2yCuRv75tA52srqUr4xVJGvQ61Z69piuZHK9q3J47YBcFpdwMkxQHA6orNkkqH41X8Cn4tDiH48eipdZk9AnFHzv",
  "key22": "21SM3FgqFxcMfx3MmxwwB6ZFb1LwfjHLAnFPJHTXVHdUhhrwPEPLaZGW5wzTXbGWBkxpPJ4pv9ALCCf7vSZ9pG9t",
  "key23": "hdsVwfejKSHHQBxfj1UizEsDqQu5AA3jmdosJx4kSHQxjTtAE5cFxDeYPnhmrmh999ZvsQqXnje4vaDvF1K7LPM",
  "key24": "2iFMFTfEh7LXhBYJ8MAQjShbdYYqXaNizK88rHp3K7QDtRwobwseit6m2YHB2gMccZm6p1BZ5rLPtPPcBWrktLPc",
  "key25": "Y199MVnXwsgFZYtHFePNLRSXRJyvNeLEp1739XfBwaQEvHMnmL2DcrDaAs2D2ANJSjn1Dnz3YhpSpBMoGPEQrPf",
  "key26": "4Uv9eYo4vyzAM3aLMSHGfdGJotU5u7T2kWhj8ReC1qEeUTyFdRWLPmTcaSCHbWr6ph1qrzg8aWo6HTKG58xTTJ5e",
  "key27": "448dYfmvkYyKipXvZLKWqZ6tycM3gbcyA31XUue5E7iPkWvPJDWycFgPigLtYmqenY5qcKdMRhBnoxqUUCkA4ZaL",
  "key28": "4T1NzWDjSq2t7Ckc52uqLC2jbkMEm7u3iKghcNRGsGT3VhN2ELzEXnWruye5Wt4uCtbCN5tMw5bgJKzXp2QDdWYZ",
  "key29": "7Yb2UwXq5pPkYuNmWFRTPYGzg7EGmMzWri86BBgN2wtzcBA8xvSLNgRFFhan2cUqu9q1tWQ57EKtCYRdqSAQif2"
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
