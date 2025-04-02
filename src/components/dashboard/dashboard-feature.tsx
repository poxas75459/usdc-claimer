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
    "5c6cfCm4wuSh5svgz7Rs1oJPki9KWWp8geDbdLZEhhFMHyXKbbj4c5VMCAT4CaD736HwhgiemUcYckYv8fjpK19z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2umvuwfTZ3VcZFyJuATQAQmfevKjRvS3ZeGZn4k4fEthHaFhZYkmYGMqjFF35uX8B1brMuQfFs1R4wVneyfcTPKE",
  "key1": "55iYPV9soNeNq3YGzAkgykdNRcEcpQFKhy1YMmfzZhvaBYNsVEaeNZN5AZ2n69m5XGrnpdveQpHfM7bwswG4bZBj",
  "key2": "4H45BR9g1PYMFX8etrC4HBu47gxMEHL8R8uDeaVtzKctpS8bZXbxwekiC7KLYWXJraWgNXgk4BdkkaDAc3CxvSuu",
  "key3": "5skZ4Ph5nefszDr5vYyAQe5QoCVbmZwUNqUQMyfenGR4cmvqsT2w7gNVMwXCegAgbPxoCeZDDLGJgUzn2cbcedTG",
  "key4": "4bt4X39o3dMferATdQ2T3TtXJA6UpjZ9aJfajf5imzPKQDLydDSQdLN6zcWaF2qF5KEofDyn56cVBBf1HFfPeC2j",
  "key5": "S64QNLAxqTzJeRYhpcNmSSKQzXZadKJdXEBmSMe4K2M3jhP7Ybq8z1M2Jdu2HWnZiHdRE1Z3UJsWzoFayUgXbeW",
  "key6": "2LE8pbJdNmAvGbGjU7rPYzAPyCJREfwbtumFxd39vjBLBvpPFygYf9tX16YswRwLC2WXksN2k9x6cmAgXNMgCF8a",
  "key7": "5HUA1c58XWRVyQcPESMCRDaPNJhiKU2tm21PRFbpv4RSDJdn8x6brfTkiXey9C2Egaq522mX5fucTK88Pj49BK5k",
  "key8": "3Qz8GoLMN7sYdhqctU3kHRQ7diTXJk9WueHFFhbyVM2KocurMZWpomYSRJWGpuHWFxM6GK1PsDhnXhgJzpAG3rJS",
  "key9": "3vbSLAg4NUUgtQHz5kM3yhU1aAT4tEGjxWHJusqMvhgsNnu6wFTYJCHmEHDEjtMLHqQr3a57aPajvzqwq351XbH6",
  "key10": "5hQd86hb1V4cCr1ebPHhZ7QfQe6KvbiCk76WNZHq3uwahGffehcooRiRApGpUvynmoX6WYGcW7rTTy9aPXF2q2Ub",
  "key11": "4MsSM5yMzX5Jodsf5ajzazL63cJmuNxCZn8hYTTy4pkVKRy4PEpBngXSQwCS8gRADoJ2GhMpSjDxbX63fVhhFShe",
  "key12": "4jWBpSMpbUXVNn36dGSrGqBXMwkd5KF5mgKNhFA5V4tXewLH1qyh394tz1b2TXXjgwwFhD8iBZCfiecP1EiD6Tix",
  "key13": "297fUJrohLE3k6VqxroBJ2ACX2ncPAJEJ5iqcqtn8bTUuobcGJfbHPS6JcD9QCT994A9M5AVDJ6QpNQeT9VFs1Xb",
  "key14": "45aLPXYfLinTYjndZtumYpNw2XRhF3zKpFLPcXBheUTttyakzTyT5D1wSmLDJUncn4NKBaEbZLHeuL7q3zvDtv7A",
  "key15": "2ejXHEzpeL3iWHTtf9WmyovWMrzGXm1BN864tLPMBxzPgxrTJqA7yrbBTSKNqaEmLMe3FYd9DoURdtD7TaxuM2FS",
  "key16": "5opH6oz2P93ZaEHtkBFod2xNuvbmdMLrPbGqhAG2fNz8nVND5SWfuTkYa8zXD6ds2dqEzhFxDC4pGvAh3hxZPRR2",
  "key17": "4FeipjND7s2c6pxtC3TVQxhUz5Yrv4gDnbehFbeRZGB5hEWNryWywSiiLvpynKnsnf6RKfkm7CC6nYYH9ss81LR5",
  "key18": "5R8E2MDDjKYxRzd6mNiVCfmVvw6QWkkUVjdHMQUJMxrSuhbTr7pvAoYPhMnLf66BKr83penHv6wz8hiG7DqNHX7o",
  "key19": "3hFNzGW1yXHPYQakHzkAQWKVdm9gzoi7Nk3oQk25aSvhH9VHuSm4rqUbQ3Zn46rDmnk6LPJ7WraDYBoPzQbbiN2",
  "key20": "4GyyDgHT4DSYY3k1YZQrgU2uoX6VhwCUA7nSq5utf5cp679TnDfQ766NHrAJjV8Mt3Soe9T6ah3dLdvoMybEQMM",
  "key21": "3xVN2kxijfN259ibXH5ssoxeQ32VXeba6eos2cXNAqrAnNkNN6Wangu7ji3ksRgUXrpEdDbiTpzq2zeL1kDLW7FU",
  "key22": "Q1XqSSRQQ7nnyjS3t8jaEnaHzB9SX5nwhpXewJaX6G5SNYHuSmXqgK1JLBiFam3GackZiXZszYST4CP1DPNRNmw",
  "key23": "65eewtQHLLv9o7TGz49YbfTLTdgupb8YriGYr1SiBwogES6d6aza4zfjwDDLyUZLFU8CAqDX5wfX1auRBEgvYwWU",
  "key24": "3XL7pHGKuxWafYcaQDknMiwEApCYqGAdjXnEsuY4X5CNH1AoPT6byFUcPXNz6FGnpKgJocaBML7YLBdbEFXkiB8w"
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
