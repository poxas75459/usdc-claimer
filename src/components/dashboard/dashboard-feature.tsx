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
    "R3PAMARBrrzCkUXGwJh2HPRdgo5mzN3vs1eNCm8hsFEsJLC7CzGAjr82FeMj2LyqxQGeGigKe631ZEwCPRhdcNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HcDArwGabwrSoFoHZ71tkXyg7zQ2C8drMERxYoDAUzrmN4pzgqJbGCwDQrDcgHwjMboEe7jf92KPsiRNW1wPwWH",
  "key1": "2j2K6oj6XnEdbiGEKdYZ5cnKUdf92VB6hW7pcKnxPfgn7N2TreUvvtAodVUYR1jgdVAkTwZz8qpGJ4NbYGbvTwpa",
  "key2": "37kenL2WDzaMnamQz7sZrait2C8hNZWoSB6qA68gK731f9wkZf6KBib9WkAmPFXKsajuMXH36MDdwxGV371xTtWa",
  "key3": "64sCbHpQe51Rd3Hx4B5a5ptJjexao4ZCVCuuGUBwLEd4YG1uVrJrMGD26U7HV3AwdZJh2w5Ntj3XrY1sR4UmMQVa",
  "key4": "JnviYQryHNh4ZX6scKuxuiVdqqF4rA7UztuKN2q9W4B1btBdizFadZt6tCHgTcdkqXqwVq6n4rD4Y6yuBgFHDkC",
  "key5": "vnLL7f7v6L1WZhdtSPmgvsmm28diyaNvQgoSJfasDvRqhTs26uBy9QkAWTcGbvnYGwzZbRnnqHpxyvfxcmfC4Pf",
  "key6": "4hQayw5Fp49K4zQPNpyZxXmnVMHuwv14CKiv39yybGZp1x5EA26WkHbwYp6LhomV3oGnUvyeXx8P9Kd3c4xZ8dPF",
  "key7": "GD5L3y29vSF49Kuth1pQp4tVGuJRYtBEoM5vAfUpvXogC76fAcrLwSKRXbaQwjTNr3PB8xPHdZ5PNh3JZU5Lb7T",
  "key8": "25xtDC6kZf8gxfLUh57t6oVZJAjgPztfRv5iKLpASMaHc5CXgj93gNvhGcQUAvNP32oQFZRua9PQNrV9yQgh89jF",
  "key9": "41GSe923c6vkUDEh25q2bWeUhGQ1MnewRR1umgwc7eirRRJZuqLViAe14VyFGVcWhUJ9Hb9YDR35QZS7p4HoH1XS",
  "key10": "4ozwQmjpAvN4hfh95oTtFcgxGP6W4x8WBg4Gg4PwhvbrQtApZEh3Jipv7gVJhAdpQ3m6sDMpyzZez9wYrESrCbcY",
  "key11": "dmSU3jCGUnNFVC3nNs2A3kErB6eG8fRdLHbjxZDgZTXAT7HEbgcTGKkLYsKft8dwoEA3zVMaPfpAFKN8DatCD9H",
  "key12": "2nt7vv2tUoxqPKTP81MYhEyCeSFjHSTxBGYSZvehT1kB8dYuWk6WdgKrp2Z7mSrnheYUa39CdZyv1zeh3BCevLCq",
  "key13": "5BZQ6jjdVcA9kTT8RV2tStefFuU8RKP5uqFK4Mz4xJ97tYWVaHSFEFx7pyqwuvEeiKpmopZxzT3przR4Sa2NM5pw",
  "key14": "5ABcW8UygwKTT3bZjNtZjQSDq9hvXHwWe3GD86oBW9gnevt3dafBeeDnNnmRzTATkj9FCUjCjcLUUMXF2vrTcZRx",
  "key15": "218diF5UgNaZfNKrNdrctretpcFUvxY7wCPoDvUjiWyu4PbAteH74KVrQkajrJf7fkLnovd43vfrBR3yHxPwccYk",
  "key16": "4BMc9XDLKpmiMbbwHPTWdXXfSMD6nqsRwXqbs9HudJmcEm2JXSNvHHVWf1rtpEKj1HdaUVDTfipUWft22YxEiKFw",
  "key17": "2h5LfbC1N3R7kBn8LceLcUdyDHaeVGJ8uEsBqtbhu6bXL97QXxWcALnHsLSgmQ3QgGEd8HiaypJFNjwTvDqNtbgf",
  "key18": "5BXLyyaAbkLRo7Rt7HrGLDbMADYBfhpZcTwDoKV5i2JRzHEFbRrL6doEpX2ec2f5MNFyaQDJsA88YJ11aG4GrZEG",
  "key19": "5z83Z5rZzpJPnuVCkaXFrQM3MhnPoqd4rEphuMB8Va4NNBG5okgQHtK62NdcV8H7KtNFpwBFtbg8K5cFJc6DnmVT",
  "key20": "5YW9uE7ciVcPRQZHVv84yeMrYjdSyGpbXRBDw3EcawH61iPKXh6YUcDdtAH2xGZ7B7nXPVT2mjsRdtdmrBAF869f",
  "key21": "4Ub5hr33a6icNAxGoUTw6RyzdHNUv95rLpqLbL6ZAGMwmxEEoRkdqxVufVkBQ4cG2n5pSqrSW81iAZ8fVijeXnaN",
  "key22": "329rS5yhSG1FaWtbXaznZ4Z1rTisPhnNtYPmEh6cGDA1zJGwHzaE869ZiMG1nG52rwCEkUmM5NaPoTCqd5yzW89i",
  "key23": "SfmV3NqAipyfTMCMFinbnRqBEKH4tT7rDu7cr3Mx3edNm8vHP6oeP3RX4sKyPdtLD3HoTRvktnu7vdWj9wpjW8c",
  "key24": "22BwfkrL4X8kqJfKqRtVEv8WoQuFR9Bug1akzK9ag35RZdxe48kuBSErLW9vaTJQDw34mUFt9gNaVGuDiEPPSayX",
  "key25": "2z5ABjfg23qTTCgF7SwQ1fwdsXPm1tnpa13Dwz4H6iJi7AwRNZX7qhmEBPEGB1r6kTX23mB6Dpr6VPGgTT25Ho38"
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
