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
    "4cqMpbLJJmaGowREJjtkBXkRkL8poWJy433efhP4yAMuwHPCrTg2zEvNdCrVK3S2TSyWKKMZa5FdJri5GxVmMnNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ijBv89GWVENN357ftex2mpDwnMbhTMjms1aJbzT5Xnb72HzFBT6egDf3GnPUrkY5NK5dDkNfXy5ZZU4msi2SsJs",
  "key1": "5qLB1UVHZ5vDwZtfFrRv9e2GTwMDaKDcQuHTj4eFwvPHgWETjHAbRQKGFq4PcbhJyMYxrrs8tyePuE852uEh5FnU",
  "key2": "9r8V4rQi7DJcPXwMTrawGBEr31GU2Wtj8AX91V9v3hLdKrCCDDg4SkvtjAQwBAhxn199oMVx6QC4AwHosdc9qAj",
  "key3": "5DQBPqjUNBhYKT36V3Uef353QsNFz2dQkDQ6oRn6H8iXqstjzT1Xs9qNMddrnPaQczyEKa3x1WxopHqA29inadtJ",
  "key4": "KzX1xpDKb5G98DPTJnxFsSmCtkQhn5rqn9ugfN1TdqVfj9auA1ZHBAyEnMEWqbm6Ynkp5yDKX9S1wHKtxeuCrLy",
  "key5": "q3qypWSwKCB5Rek8CzZzALHFdkprFiKn2989qfTsTrcWvgwP8wvntpiBNKgGaGaaQLk5Qrk9TwJRPgC4BqNvaV4",
  "key6": "RP5pG1FwLWwj9Fr2hsaYWbv9wJtjBtPZNuwQzNFK55rjJXotKst4g7C5gvGio5qujNyG6tyZ41MkdYjKbzPoikN",
  "key7": "2jqkgW1rw38THvm6peH2pUKLZ7X8nUAbCc2Ye5UR2v6PSayNwvLRrbUBT6jB9X4gFK3zN9hYBE8CWC6ta4mKSZPD",
  "key8": "3rEPA8TL2b5tqoF1vtobbFNDnqTb5cForSWNNzqiUJxnsPDMHBdTFN8tyPNZkRdkNmfyLb799zoVFELLd3UnCHuD",
  "key9": "5EicEFjobxYbrPr7k79sL4WehxUL7gvN1ibgfqryyk1daNBqTH5emu7wfRnFRWubsDr7ywqDou4YaBBD3PWhnHxX",
  "key10": "4hxL2NZdjp6DY4kp4WAochW9pS7KKDQWGGk2VPu36eDeAyZpjG2h54yGH3syQH8P39uFvB2k3cnNekAmXwXJDByq",
  "key11": "3L2iyNTmKdJhLC8X98Ec4WmNTFxokUHj8SpSuN4LC3Ku45sj7SMEyS7EsR1cfoBgEeqiNeZS3TZNZ7xsGpZSEuFj",
  "key12": "3jCeuKks7i6kPZPbxp7QubTSvJ3C2LDCUGZLkDAJ7Ubgvhbizr81i9ixX35uTitkURdsVTawGnXkVZyUWbm4GL99",
  "key13": "4kEWRXqwRHiUfkk3nGMcG21HhshsBrkNU7XWJtbuMy3gXTay2DyJEzq9gCxJGt2dX8q8FrmptT7q6Tb8mNWvTSYe",
  "key14": "U4j5H7gGeAw2CXKgukTmTzd1T133avRvQowTS1W73J884KJirfJ5WfvgZ9wkv5dLYstnKFHSTSNZjBo4DCJm6zH",
  "key15": "LCx6rARk8WrLGDkVvbr5D4quuCJUtuD7cqGRCqbb24Bhkfe6zR8N8jQN1kYXZ3DHEknvEXGVkeNF4R4Bv8tBkQJ",
  "key16": "5Faw3LUUvrZJHxTsZTWV63sXgrk9Eabf6WHbR3uxoJzz95wRRWuVAa1XWasZdWwJyWBiQJH6uyxywCCXjxamDksf",
  "key17": "aFfeFDmyf4GTGegvzVz4Fum9PtrNWp5rFQ4QsmkjCFsxsbG1S1zvDNqjfj9KQe7mx3c32XyryBtKMGkUgS6xv9v",
  "key18": "2A18HyCbbXC6C4wZVrEV6zDXdxYMXbQgtBrGYtqQ8GbpVqa4AG29TFP6rDrrfD5bHKD1ic3knBYTHMT7eLffQLg5",
  "key19": "2gWbkwLPZAivSfJsRCyEzxkFS4Z2kzEWH2oJjRv2uwTYe48kK6pzV2PRubqHb4bwUrL5QD2aTXZNzSCVUq9qoDTM",
  "key20": "3fft5B76YDJX45gjxgf2omyCbv2ATNK5A51DwjXXCpST4bXCcUNYiMpgLD2B943azxDecPXAPfWwhL2JSCD5dv5n",
  "key21": "2SKkxiNmJEcvCa8ds8WPyq3dNsahy8J6UCrDnibqhzQSDg6A4Me8MekiAb4Am3XcXVQbs76iqpHACKh3AHbLukmZ",
  "key22": "5q1pFuCYqrT8AB73dda4woivfsniM4p9Y7ai2dKioeNy6qQG5ocC9TH1CGfeW4F86GNTLgZCktU2KRt9F2RMVcXV",
  "key23": "4Jk8dodnV5c8L38JistMmH23HipGHUNbTYdRYTicMUNxXd6d3DbMhMRJ2gbP6zCtwdiLzETZzLpJKggVPRKgkX5p",
  "key24": "38s9fqRnZ6apyTUEiuwSEnsTWqJN8zhLisgM9wvMSX5V2iG4L1Bmdnp3cquFpViqp84VnFM75QSJ16HgbSUfLPG3",
  "key25": "28Y3cMyxycq6QwqecUx7GhJHqxb5GzQiM5spyEz5XXKvDJ5QXnYDnEvxuDuQdTZBmsqSm34ST3oT7ZHtN9dedirJ",
  "key26": "2K3qwqSQt6QTbZTQCP4aFic73kRppPxezVi1cXVkdBjx2jYZrGSo2jknM9MgpzTdyogJenRVLMBv2nDwqAF5Hdtr"
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
