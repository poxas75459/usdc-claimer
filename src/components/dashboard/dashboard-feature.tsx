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
    "3FMUc23zM9TjU6mAybq3f9rpG4XYA9P1Yby3CaStUHZUoxM7KvD5ncS8ZgUahEdrAsUgE2oAU5fQ68yR2tD5oJgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ekg47ZbVaeqGtwkyzoYkXxh3SA7GTRwEqC46NVMF9CTpk56YeCdDx4hDLJMFfnFs1LA9i7X6i84P4R5YQd39i29",
  "key1": "223i1nxNKNLNAj9QZnpGJr597FM7sDFKCdLvReV5FeTupNe8So4pDatkZtaSx9BSAg6cDzCUmUwwzbUV2EJ5LtK9",
  "key2": "5taSMJV7kfpyYf1PoBceMkZTpFvEZYBuELRR95YRcRMWh2aV7y1XLyND2SFCZH5gMQo6yhcn29xR54nBWZZh4Zxo",
  "key3": "9XNpM3xwsPrwrTSNCPYcjCarxHG6xArZJCq8edcmcmcVJw5jMaF4DdWLfvaWnJNoS9dKp1eS9xqpwVXYTTivksg",
  "key4": "4Fs61kHWa6xDhkjrZnDgoxVHHNvMK7QVVgjod4xeBwiGuRMZazLh1bwZ7MdVUFsWgphXHvXp1k7dQxX4btCBwBjE",
  "key5": "4QMH1oCFt6bdLi2jsU8ySGWXGwvHuFSPJoainaaiMCeiHiYNhvPfpRMB66uU6Nf8eqPxsnLpWvDweSCG9Z41ujYD",
  "key6": "o5zRujE7rNQwdD2E7Ww2caEiE9nUBDrTfADaLXe3sPEWVRd5qs5ZHYNwese6ogrpuYUPAGjmFKna7opUVCaTdU2",
  "key7": "2FUh6wAiZTdFiN7ChHm3iPBQzQ977pFkzTAmGYXAkn5U2LZfS9HFLXFzo77EHiaPp9mn5rN5kQnjQEwebef8tz9Y",
  "key8": "CzqEgmWwBoBYgW5if11YEoiTMKjDyor369iHEy1GJgMJbb3989vewGVBVfaTQxq4o8M98QXHakQS4QLzL1M5ZSa",
  "key9": "5Hx978meM71mPkTQ2btbbvbJZF3YEho43pT2qnsxuZktGbAzyLRYrkY7hJuN1dLn5y5dHQbFD9GFtqJCx5fyFELF",
  "key10": "4bnyT6YmPUjMXyHr5YQZvyxBYmoEnvWvobKq9LJBBFX4C4ccJe4YWtnHYiB93aNCuXbp26MetnRgM5YiW8Vc3oqQ",
  "key11": "55qURyX6sgnK4ccZvy9cWNDN1U1nPmfJnHZQbPkYGyWuqrhowe83Ay1WL3goHUagYjJxFuWuWS1aWYiF6oQzfSgy",
  "key12": "41bcUYt99iNwvjoXFLEVcq3LHXtM9xwkqSx13YDhn4MgK91Khrw6asVPdsL5Qx59hntVfbMdwW6sDfM4sHZSTBFd",
  "key13": "3q88MWZiG1d38YHHa9mBNAWd1fzcVfPg93cE4soiGt6ZXgoqiLDF3eBgjadUfTiCFTmEiZpr6pFWXsAEJTebiQkH",
  "key14": "5PQq6XHAXDGjZ4ZaEvp9byeXq3r131ewBRtq2MpF7mNV1grYAmXSSxusfeL7ohHBmitKMCD8at7xkX2soGJS6Rd",
  "key15": "2BScPAPh7fbJgEaUev8Q1iFnBafBM1esqYvbGn7bQCcjJVZobcN9RkCnbdrEBvRzjtgkiqfUSDVxbG7Vsftf5rme",
  "key16": "26DWJukiqJsBuWz1UJB9HFc8gnKtsQ9Xr3oq6rwH6JXUVxTZJgE51siP2Gz2dM1Q1jhi6JwVLwwWgXJ28jzET26Y",
  "key17": "31gmhHwtrinsctrpokAfTQUa9yQhskBHPuZa98mmGU7Z7FGUb5xD1eA66E4u729VZg3MYEsEQjQpJpN2mvdkqwNa",
  "key18": "2VWFvMmELpzMz1d46Q71WddyG6ivdwPAjm79YDqMwZC3z1uAHPLMZH9BbnhoDqqiHgsFLn1oiw9yRS6pWSCDj29U",
  "key19": "3EQz4ZNYHNSxp1EKvGeYjTeGiWktYkZf3iGH6Q3to4in5VChVM6f1HVSoFN1LegWFpcDHMeuQwo3CJZ6bNfNCGs3",
  "key20": "5GvhMSzkdEYnHRd7YJSmosLw4mW6YMnQvLB5MJ9q3rsXQmqa6MnNuYauPDWHiRaaGT3PqkUVxiFPUV6hVhNSZAWr",
  "key21": "3MdWnXXdR5yXsU9FMJRgDhae521DyGPZS1GAa67oS8ovWxM9FYg5na7EtY9f9Q13Ny3x9T2mwqZM6r92zNXbLRx8",
  "key22": "4JapgUC3JSN7iVD8v5xGfvAUmhYehyM7diDRt9RFPRLDCwpey7469D7MKafSi18RRkcnqVB8U1jsBpsm69FjuVm7",
  "key23": "3KB2UpptffneHoKXKnLxV8BzRsKoXXVSCwVdZtr8gtgyHQRGzr5hyW2e6S7uMttUEDFUmSeVn3qV4RRUMoEqy5AV",
  "key24": "3mmfbatbL6vHyA1f467Bs9b8ZP7MjDdWhhTQJFAHye8fubSQLV5CThpjjoFh8zVeuN6MmGPxuLVoseB2pT87WHSA"
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
