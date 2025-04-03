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
    "3nm3zbfL1Mkwn5NGzVBttCjE7XEu6twmrcjXDStZhC7wspH8b2RNHoQd87FxvA2W2czzyvqbMG5HcYeDXBhcJMMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iQjEsCoLQTU4Pr6rM2vzDk1S7vSq13ZqkAEyQTkJAY3Ph35REb5Ng5deAE6V8SuVVmQqzaqTzo88eq5BBYDW2vV",
  "key1": "4w6q5iQFQgUETJKmfPA9YMeQ2S4P5frkUaHnFzWmXkWEtMkqMrTrxuUffuRgc1LWdxEyyWXSRFkhSV534953A7ox",
  "key2": "2MZsPmrX4FsvoRVDzdXwbWaN87KbJuEDBDGkjYseCzHEq6asKJj6jZNf6neGBt8VPyENwfQQLWRtQK7gJ1msV8e4",
  "key3": "49CbQZmig2VWZbsuNQ2ysj6PBL7L42uBDyFppYbcbFd5pUm2LxVBs5PbB8AHJ36caYGgp6m8b9SQkSB7NrWcYzRM",
  "key4": "5DYi87np9yWZafmnUr3Qaap1Tt7FY4H8NNyLT2wLvQ9oWR8PYkPiCFKj92AMYUjwHaNRK3cxSJ89gBmVfcGGTPpf",
  "key5": "32UkWBvUENYYY33micpu6bFfqzRkzxXv9cQCF8bL8y1KH4XKkUcy26NcFrzvvh33wvJVAoN1SAUSyUV74BD5Q3H7",
  "key6": "53jdjJVphzcegU6WusaWp9ViiiX59bY2cPa7t3wJSmkdfYAhKpFyh9VN3JREtUW4LiFS6hDsHzunqGhmise8pQQz",
  "key7": "3ixKs8mviTyBDVeC9shDedeiQpN5j97iHWQ5SeofjhQDi1tHWjef2qZpG6xd7GRTYFDxQDr2aSPaCGvbRjyoQYtR",
  "key8": "2Ps3pmWD7tazapLLwBgrXYk32bHhwaZX7pFv831J5biaBy6yp3GSMiKn3GGmqnPDS9AtC7ReRQw62GuscJSn3GQY",
  "key9": "5Tc2HWojRngkZDS3KwyasMwf6HeytRqiFnDr2UzucS5adXS7Hsgdv7PSVUvfV953kr42FbjFpxL8YcZZfZe7fkLx",
  "key10": "WwnLcQvBUCk1HBLVhwcSHE9XphKPA6ufjXnRxPoh24HSuFybnm4USbadmSQ2RYdyLme8jzHr3R2EP1MqPGKT3UX",
  "key11": "4qKRqaJy6tpYQg7KVzX6Mn7GNaJ83DV5U4xiBBypsxZCA25TPKMyrZqqHEEeKJ3GwxvCMTYPe31R3xAwVaV9QvHF",
  "key12": "2UaXzYFBzDZqJAiWjkWnDKqVtF2oH8Zkr5X4AodHfCGqruDM2PF7sAssueCeESsqRijoQiV9nfjm6XUJubYBR6dT",
  "key13": "2Ek2nMGPJL3bZxH2Pn24bDE4yTGGK9oHWMmeTjK5ENpzRPPn3EFuAUporZFT9ED5rEojYHkP5hjf9HDuajpV5yiL",
  "key14": "wfMns8GMUSWCUVrjzNHQeMZrJvtgcpHH6ULyxZAtK1kaw4zWnwFzSSh4XxgbnMxUph2cAnnVWbGPPRS6gQLsRR1",
  "key15": "63gXjgCRK59ex76G6iF53ERwct9cCAzND6SXcSjcRqMAifQfkEhUwrwCi4tBCDxPsZxRmEAPdLAnyFpVHpW4Gf9v",
  "key16": "2TP693aE9nnRk3Mr7mPTWkQtn41acmvQh6hjKSLLKV7a5kdCrKHMsG9ZvL3brX9AYiXSj393dsy2mcDguJG3389B",
  "key17": "4hRTCgwGcwpKbs6MD6STKt21ExHRWWSj5dnmq9sm9cuQhCYtNi7GuwrLfdJG7JMfTuJHWodenHhQ6vwUb2U5YVBb",
  "key18": "4kFbHtNUJ6aH9DFaqMjB6mBLKyFuZV1MbW7bDxBgmWLJDAdePVA8rq9aRjLW7RiTAerBQdEmgjf1H5RfcAQUbPUa",
  "key19": "33P4LK7BcppBCDq3jXrfEDDwvcAxfuUHCB18ip3hp3P5hj3BjYgeYX5S1pbYpYA1Yv7Tw9zxogTixdiDxoDd6XHe",
  "key20": "2Hzrp9Eb3GambcBNVpFYttWShRShe9PNdTnRvbuVzkAaGbCpwoV8VEnLcbxJKqr53tcfk7PtUdy9oBEHo3wuwd8q",
  "key21": "3zz3eH9EMdge4s4JHJ2FbWyekjr7hMCuq4Smrx811fKfiRX3v1ZbyuVwWvLauVNwkn34j7mgjVxS7dTri3hu9Xuq",
  "key22": "3TKqX7cAQ1A2WLS9E9hD52HGXnej71Rk9ovQrbrpmggo6o1LZ9se6nDSZmSzAsgEEmGZBbJCge26arpmM5jFnSF7",
  "key23": "dra8Qk5RMNZzT4Hz5EMstbSiHYmHC4oEH4TD1vi3T4hhLUjrHsWMhvpQoJX2CyHVuJuLRUe8PtK3Ty7caNWZCPy",
  "key24": "5sfXqXUfmPXmAbcv4fzc14pKC6mpovYS795MRkb1VcfdbkjfZ77Qbv7uskRq3ckthtDLnEu4nxer23fQh52RBXhY",
  "key25": "9trfS6Wz8SHffPXqP6B4bPTY64nRbLykEcUdXyG85w4cgaVXknzuDEsXxP1oYyeFD27o5tfiRfR6aNCZu3PXzHR",
  "key26": "5VRfvC56v4MfpPRhDMgddpCCSF6QZLcqSM2Pnr1U47MPTXAqxVnHmidV9hLw9Ak29ZYy7E59vNsubafcwKoYetZ3",
  "key27": "5gKd5vxuSCDBvuHfQS8uporpkKKMhHfmnr1BAhXezcH2ifmh5t1dHVS2nqDvDw148NucQtw7dCGY1Zv1aTJTyMZx"
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
