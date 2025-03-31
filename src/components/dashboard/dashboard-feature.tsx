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
    "3pSEbw3UwcuovTLBfXGhSFJ25Y9TVPugWHQC7smSLgBK67GGGyLw6dLfxGMFFihutivmsPc6wJmDWHAbi428GR9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hq7adg5ak8Vs5edhWzvbAKMXCb5HvK46FWiCjH2KEwu4sK6gAyBnSL5AELETfyXM7eTpFiWJUVDJwtSgra5hWZy",
  "key1": "5ePiF2RxHiFjy4QE3YC3Gnoaq9y3kFHkapEeqTBMPLENxfuuXnxFNFiCV5EbLcVDFmHwBFgEXFjZPnkpzF42zuW2",
  "key2": "4TrmkoPUKmfiVPp2fRFraoMBmdXhFEah6aQLvmKonqVfoK2jN2JytNoCMPGq2voctMGWU5xf7aCrtx6bwpjeqN5s",
  "key3": "4nrqQt5NsdBw31VFBoxUDSScM4y7S7Da2mauuPz7e67q5PNCUDt5MUW3fi7uFgo9BEqG3VBptyNczKpZsYYhRxKy",
  "key4": "4yo8NFVWVGdDt6Yz7xwqyrKmrbh6o4PencNjdh3MdWHQqjXzQn5RWKygtDf6emp3U9Z9YZTRTTa7QxdXSoq6zuRm",
  "key5": "4wS2NqFXsqMaXDTwiybM3N51RNMGJRzRFJx5QzmqZ228XXujiK9MBSi9v4Ns7mdujegHT9tRj5qQUXrosL3f6oRo",
  "key6": "3gYnve1T1qim75aXmtLJLfE366Gnzwuo1BSchy92q818J4AZRSg4EvXQh4G77LLmx3E6RZg1WxA62cJWkZhrYa1q",
  "key7": "4jydEbto6KPjXTH3NfX7SAATZeP1LbpnQQ8e9ggfoLpSL3ksiJhJWn3Nu5hHNFYyiNTGM5XPW63a4vhGoZU9TR8G",
  "key8": "57gQjpXwKCXuuJhD1G4q1H5UrCAF1j3VLWLLKN7Za5Vtho5H54BwhPysuKP2jw3MKBP3vCVHpDJ2J4tNTuMt8dHT",
  "key9": "QmkL5rscpgQqnbsLuPaDPSPTTN28Cfek3HWhoXHMgSCng2LcYrnavYFHpivjwVRcd4cG2ZzR3hd51SVcxfue7bV",
  "key10": "3QFym7BvfdEDNtQkQZSgiJMxjcybMpRmQKhDJeBrDT43RPFh9TXQjSDBTj8TYGckKrzbeV87gNxTUZhqraUFbaAt",
  "key11": "58BKdXHzFs7TuWVGt5Q8wDFCFmvMBesMxvFCEg9nworEMzNNE8LzipzkmmL3e5pVuKrzER3MSsWY7VufnawWQdvE",
  "key12": "25EtAeQFq7ZisnJiC2BDKWZJA4aZGVdw3RebNahaY4tS4TZkdhXyRkZfLzv9MmSQpWWeXpkfqqNdVR9NJU2Pv5HF",
  "key13": "3NbqSR6G4UDEgo7uReLFsK9Wrzr2ffTdXLGthC6sdWrBuHvyDYBb2c1aNUM4J158racc4wkciQr9iHP7Eb8uUymw",
  "key14": "xDGpnGXwU6NJHwhdkvst9d5A4ZcLHYUCPaxgKr2ajraNg8qEQZ1V2H9Jpv8GKvtAUPLXVXrS2zTLkmUHAVvEmiD",
  "key15": "QvsxqvT7faDScdEoyBrzUP26ZPtPsfgvDeEcXPy99SXV5sjxs3zBvfJ7BTGy3YAWDuzoXQbNrySWMfjNSuDUjTu",
  "key16": "3madWPJbGh2zVa8EVF7z7yhmNDQf5SrjYg7sLpMHVyHgTvDx5dWwxMtDHSr6KYdmvTF3JE9ziYGVXnc7oAETYsmc",
  "key17": "5YAZzo8BiBuJci7gdLMRXwgZsSGWjjP6ZVx5qWgBFLjh34mU6tgJ3V7HdKDRR9QiwnUmzagynNzZcAETFzbHiP3b",
  "key18": "4pkkhvaSrvfmWX8Na6gjzZW3qjtMqueyPwm4mPnUPKrtrJf2gQ79ARuQsM3DgPowWAye97RtV5RrzCkTsHQBbACw",
  "key19": "2J437d4vZrwgvAuPqJiGFhiiD4q7NSHMv7B3jzedSMzPJwdNEF7KLUmAcBJU9RjwAMr2JoxT85XRgcTAjqGEWWvw",
  "key20": "2LLMzYjpt8ASQnD5cUe2iAwiThrSoe13CTscPWWR2GfYXsqTJMZHQXRJx5FMqUNyyGfaKxumVAiou6utCuekuTKe",
  "key21": "46HKyuvvDr5fcK6zWdkH9KhBf2v9yeiPVTohgpvaEcZN3P6XUpGNAdF5EBtaFUcUH484y5UPHSTYZ4Tx9w2d63Hc",
  "key22": "4zWmH2Wq3LzuiUnzNzHwxxZMRfPpNR4hApm4CZVEP7ooEb7nurV85KM6npTt3KGERCtn9BECPi8eHQF3Pjzf9tEC",
  "key23": "2FsgEmGzfkK7mDTPnHPhD1ZVg3W5ZgmyLLHwHCPSn2L2j7aZ5Gm1TkUxR97zQQvMdLrNY3sgN9JZ1P5Q7XvLyjKw",
  "key24": "4uAPRZoY4BSiDvaWmmDhN8UPUKBvyUbLFwCSpsEAqmWFtQbuUNfnVsjSiGz4YnL1LnFgSrrQV11pGy1bCAnxudED"
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
