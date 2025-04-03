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
    "Hkd9M3WKVcdw5EQRDYENz2R5Jee2mDRy9kHJTQhCqBWLb2kW9qRBTmgEMUkAzDeSKUwsMDsXgrT4DptMikMb43m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WwRs1f3aFz8BruPFF7vwAXARRXVygk4zKVFJMkXRVLUm5Ms9mhMWHDFLFMB6Gbhw69WB7WjnrYKS3SKu63xuPLg",
  "key1": "3oKhQQbkzqHGdmqyvRVEQNk23AXXw2L3YWPdnzhq66P18yU1Gp531KPTmoyReFtjwQb81Fnm5LjA6en7XGgE7N4Z",
  "key2": "DcsF4aBDq2MwUviNt9be3UXzxW6z7Vgg5zqH2HXwHbV9DGXs6ETowmEncvE1vjfYuZwwWjGN4WRvLDBBTxpGGjK",
  "key3": "2Sqx4HtixKDKPPu92v5gCZUHNtW1Anb8sRscKWaEu1enS7bEcVqwzXKEWkNhpgPZraRQJCqta1mnPJmCE1rUzsBx",
  "key4": "23X3KGN55nmBBVQUJdJZjBuzQdkqj4RZkUWvvparPKjeWbd2Z6TcFKCgmUhEAYQhoTFzZN32UghmDKSVpei6Vkvn",
  "key5": "5o6GGTwjNoC9Tgw7JNuWRDen8jZuxwBExcPGYtbF8vNrqwUaW9TbSXVJL9u3L2maZyjVNJT2YkfRSCiL9j6jzAva",
  "key6": "3NQKPwGj3BnWgF5AhEGfkNrYnP3spQCuGEUDW79J3N1rC7TRawRKtHhRQ4vzZQDqQuheTQVkmYDQsQacb7C8fwVo",
  "key7": "34Rz4XJwyTMASYWBoL8ycuCPGDxG9UD5XYfWViHzFYiddhJySWpJknFfPhBrysghviDtJTAUnkorneEuxNf4CRoX",
  "key8": "3eRXKsuhV9W5yWgTTJg4YALRfoodpBmUpcUyLJ42wBfcPJPVg44Mw6f7b1cg3ys6Gqbwm4WQRDa7niNyeKfrjXyd",
  "key9": "5mcaswWUg9CFvArbzD1cpTQWL1kJs7ccCuT1jc47xYw9dWh4jmz98MhfDe942GRWPVLoJvrs6n99gtL1bfYscV5U",
  "key10": "mpY29GYEzgpNPTXd7NTnTSz8DBCp7qSVMogmTURn35cmbNT86b1W8NUBueFUvtqFydW8sBkmbfUpTMkB6ZZAdBM",
  "key11": "5AUVMrtHb7xww5XiHcNYD22Asa2CvsVwJ4mHZAcjf2NFXPwz2GD34Lin5pSVjJRCKwoBMeApt9Y3Kcrfvfx5DsZi",
  "key12": "V9q3dRP9PeK7y3u1vaXggFp6N2vcWiVb2CTRtNMFauQLiUnzFftKJqhwRwYvTWNnRhzkAfyxWmsbF6U2Rmu2w8C",
  "key13": "3SUkbWGLDYWVWrmj34skqXLmDMoD89SJYW69kDpqmAFbAjJXyHbbdVLHjFeCFH5vJHxzwoyV3k8FMJ5hCwU94xEx",
  "key14": "5EGEf9fiVCpD8VF718VzDxsTRDSTndpadCVfe5CaaHfFRmfEJ8b2PfvKo3XnsJ7BnydUQMoh5jjN7Kei7YQbnpzw",
  "key15": "UpoEXw4RjuZHB35RdHoeTy7abtr9a9xA5t3LtzzkD24pZRuPcXe54vJBgmiuB1n666rgUobeXWszPFsaNyQWSSz",
  "key16": "5pUHeuNFwiCRChGc85WcNRkPnk2j93KkmUA9XJd7Wdzaov36mJwvBtJG864AmdqqtHkVBPymJiWnDBAVTcR8B3rF",
  "key17": "KUSM3kFFXiYwh7F6s74bYHT4nenNnVrmYkVmCDQTopw4G2xMRyvZuhhBP9xavWe6HdFnYaXo6ZqyxsLnaaaybm6",
  "key18": "5LPfUbUrBBZrU2FvjmKG1Au191ENVFnyzWYa2HY7RXUeNhJAohZP6tQMJ21GisqXvPLPJfechzv9h4xYdL9qAvXp",
  "key19": "4TN2TijxH8mrW9R84qAN1MLqXcfY69vcF2HHfZobWZEaihAA2A6wMXYyvwqsaP6bCYmdPUTL1D7NX39urWj5gYJo",
  "key20": "3WzCTtnXvTn29ypwtbcoUDabf2g75iH1bjdvMniXGL2n9hgNFZZNoYtNxECC6MPWW78n7ABUVbN2VC3GK2BWrUjo",
  "key21": "2at7fhBaGD7A8v7wnCnKSRkQHrvU4nqG3CjTvS7ggpjvoDJCiqPXH4QUnRGGPg6sKenUQyjLyBuJrKHQWC4WdyVv",
  "key22": "4xS5tegpjPZu7HUPuraZMBY11dbFmuHbvwiGkNpNLYbnW5y4rG9ZR9yVXmtiMyTwCP7vDnK724zUKPL2WFCgLnXs",
  "key23": "3UKwcZbrPfLt5dj7xUokYiNAgQqaCp2pyCU1ChgUJqMGJUYsVRvxKoidaKcT6VsgVemsgWjYVnLLzKCgbtMpheqp",
  "key24": "5ZHtxEG5whtAKNBNnHgATiqjkD7Xkvw4t489tBJmazgayriyQrCYNxWu2aEdtGMUb1EpFJ29LjXtCocu4o71eJ7e",
  "key25": "5FWzwtvhnutLc5mBtzUWxRRqiFXJH2cuMZD17Uz5LmX2LMrnSG6FJDKjXLsdoRjpBaFCf1Tzvf5Vu5HTwHErCmJi",
  "key26": "42edMjZ8smCCjw9fUvL4ZpcaA74AnASnpjcstrHf6RQ2qpSrWt4fphPFbnmQPV6zbnBJGy1imj3Z79ED39aoGqEJ",
  "key27": "5G8KAnwDhtJ48vo9bDgSJEny5DofZDHnJpADP86wJbfPJahJzw9vmy17JhZeiERuUhqy899reWpF7gEaYcP5ynhT",
  "key28": "3qBJK2DDUPdb72qASmkK8hLJ3ZJ8watLCn1n6rvsZyedCds9RiA6mB67LFFCwBj7JhHumZDVoVLopDuxtUi66iNz",
  "key29": "dwtbnDhYMTahwUCcjJPTzQqgxEEQ7qfPutemacL9S2ZsSySq2F644AfcacvHmBRiRegYADG2s2v5QKPKnsMQEZu",
  "key30": "4QXyhZL2grc4dQX1pa45zN5LNtoNsnAN9gxtWBcPJmB8hDKMagXWW77cVBLXgWXR9D91xoPQ937pyJtrg8S8fUkn",
  "key31": "4dnoTwfUteK52DfjmjkqUjEJdBq9NkB4ytov27CAR4CgmqioTiwL6cQgnfyYqcRJ7AyeajL3k7P8SVv2dRwSyjwi"
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
