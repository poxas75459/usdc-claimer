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
    "2drsFgEJx5LbbXSFPNSc2xejg52ivdDx3f9vzPVuQ7K6NtsbnyfjbykYq8w4Nsb3tae5uQDirH8juHcDAnFbRh4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57douLcFY28dW93iM3dtgbgP17DmhC1HwZRTgVipg5xA5dPUrRWbNz2dWBYZEkroSU7D9Uj6SJoHJBcujDLcCU1Q",
  "key1": "4VGzFWWXHESdQBAdbHrbymsXZy14CNqLLrX9i9fTfNUD8RqP3CdNJfLvHDjZ47i8bLQeVuuKKsWWkwQf8scmiZ7i",
  "key2": "46YVcbZ9WZqsQTb47ifUBTeH9brQMkGphmM5mz8hckHLDxU68buCGXz8CuLQsQXRnCZEVr4PkCixDRBz8tNUKpmB",
  "key3": "449r2X4w2XBQvB4ccMFUJztFLkDfdGsiJFUZrqejnJ5isTkEiLvxRPv5EX75yWE1c2REVpsy7zeZAHKUivEYPoS2",
  "key4": "277CLyPTsb5uquP5FEE7u4NuCsphhgGdUoGHASAnkZHnouduD7Gfzpp6SxqqzkQAN1mSrxSukULeT3REuNMhQU1f",
  "key5": "48Ws9ZRbwk2x8fV73d6cPuDfPAZP1p6CaUwTjj8ek1TLyUD812AUKGvoy7ZbMVc1ezh3euX2rLvmbRQia8kM5rpR",
  "key6": "4uHE1nDHF58UVbUBuzrBUttjtDXMAU77J9daPsSPkD1TDHkwUtXwja6DCwCo1Cbgx1xzhScU7kQEHrHBndnKrxae",
  "key7": "491LNF1Knma6KgziVKtYnFCr19xfScgqSQooyZg8vzukRXTRdn2UkMPswh7z9bDRNoZwmfzWDjJUZGmPpvQt84sh",
  "key8": "X8hsFEEVUkwi2NK7HnruqeJTmPHd49fLLvB8TX9fnr85wUd3vHVFguom4DqPumxyDRb2rF8TS2LXmdRhWPBNo6C",
  "key9": "2EcVDeyeuiZqEb5E19KZDk1s6bDciZ9yQjCQhYCGxNDujGknV1SWQdfGpdkqgYVJ7Y1E41qV2DpNdd6PyWMnVb7u",
  "key10": "3LSYJijCPPFRvxvz9qMfAuomB7bf9JJbYKgxk9wnFrmsxseQH7bgrULJfqySWFeFDpZh22v2ZL9wfVabuc6nSpxe",
  "key11": "4fPh1ghKf9ouBUFSDrWSk3kx46V79oQg8VhuZjFkCFraL1VPmnSTxNxA9Z7kCcGSuBVwBpk8syogBXDAXrNWxwuc",
  "key12": "314oSFeeRuD9325eftwonNiyhR2EF75yXG2Qpia6XSvBQyEsqrkJPBB5grPjyAkNW1p5tvaZBnTJAA7f9Fy6JmNw",
  "key13": "4dc3ZegLka42eWw9U6vWKxdLAK7fEJ5i4dqZSzmCbsjU1dE9z2oohVAxpziPWUDUmXmNMENcU1MfnMYSnLeJUwKR",
  "key14": "4MDTADfFsfYzM2tMC7ujAuQjS3kpPBxf6Zwa5f3nsxGdjwzoxug1vd88wpHrgJXa8U7FXqhh2p3JHT7LZkoHaFib",
  "key15": "48gKjeqvAip7kTPgxs4R9rTdf96jff2pAfG3j2fLSpdLCiQTZSLzTvaEknSyUqtYTWPawfhHCxz3bjtFDHoqu4Yq",
  "key16": "54pPKv3d5fjC1fyAnwdNaEcfv8Fg8shLi48Co6YcmTSL7RFYwBU3vLkpGxVjZrQea3T5DiAANLhK6k6jwQSVVdS3",
  "key17": "2FNzs2r7pNVUGoZYAk6WM3vP2oJC9nTZg8eTcV76kzZ3wQj1Zh88pcy9uVnxBugpXoVSFSQYanuwhjKbw4odNahD",
  "key18": "4x1VBHZ5EAED6P27qeqNwMVRHwTFRYC3Tbjahm6DdQDKSW3jv1ThGCLbU6Q41tRiL6CK54q2CFLvebgzsg1sCWMP",
  "key19": "5FcZJYCk8qa4ssCZV4hmZw4trf8fXuDck2DKpbPxLZN2PnrHLmYBgKWNsdYDMYgLBjoZsvCdb6PZZDv7AwFoQ8mW",
  "key20": "3Be9wfqdmsoyAq5tWeo7Tq1bYHyvsqKLCe1cZYdNTJxsoaoCC2uKiUB7vnydcCZPtHUtxQFDs2YyfkASPjRfJpQJ",
  "key21": "4qKdfQ5APhiSsKtnpsoTdzK6CzoijzFgNivHYm3zNV3dfup1tUbR1vekjyCT1JxtS5jT9QsqnJHZ7ggeMbyWZ1uG",
  "key22": "g7qy5GwMQxsGynhT4FWcn4wKUiEzgYWrMUAJc6aNDDRHcieg3tjwgGNHvvL9giU9Pjn7QFsRg4yrMaRYfFz2CxU",
  "key23": "YyFCV9NG5eC8xrre332ptdfEU3TNGdR2fB3gP8ruGUGivE95n3NFgL1TfrrHYUu2vthaSfSy2pPSKhwtJA3YAiy",
  "key24": "9PN27XPREmjoC1BP3V6Pi6RDfE2PpZ6dp1zP9wpGYU4eHEPtZT9NZWgUVv8vvznGtiKJwCjwfsqUekaDXKBFvKb",
  "key25": "4kNQ3jMKSVDL2N7E58cHmhBihBpwJArvvbmRaa3s2wTR9KtbiJzi3s96MVJh3DyS4fNV3TSkLU1YTA78CkoJUpMU",
  "key26": "3sGHHaCvNgNS4RXxfr7AF2SeQg4pCmF2gDHhfZPvEagZKqxKhDJZ89Du7BdT4E4xeZTssDQoFR7NfTJkrkjJEGXd"
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
