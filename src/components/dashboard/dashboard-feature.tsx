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
    "4LpsimRZL4LuZsqG1fHAmxaVhxyLNyKpVdCmYQV1hKPVoBonGmSbg6rumdGbPXtYwJhH7LdrUidb2dgL93m3oedX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bTC6NYZgTAix2jc1seFZSsxBtobAGCKvPn28CJRRwXUDiaoD8F5gh4GGshzK7osYTVtxMrZFBqHLhRtQ9698joc",
  "key1": "4QdojiekxmAK3XMAiEnm5Ddr9PGWETgWQxwP8iFYuPmNDxeWGtDGe4HBFBTJrt6K3x8k9Ar8zEcdxxJUjhMnf8mq",
  "key2": "4Yxf6u1WKyREzAwBYy4U9ykJ2BoM6Bz3Bf4JF7rTXxqC9ny3YVLQJs8NAPSQvnNopeEJKWSwRHb8aUUdq1Ui4ztS",
  "key3": "5Xzn8H8FeaCzcSDr65JZhGhAHJmca1CUL2fRZjtCuqbJXWud8ua4UNRhim3XuBcQTwjXkk1cHx3HJnL5UmhGKTyF",
  "key4": "4Fo5gYaPmurDnrHTXzn4xXdwkMN3oJ3B9D7oQeERpbVABVnT3AfuorEwdVYAjsWAJ6RTkj3wqgBQvfno5n1YxMW9",
  "key5": "4bK56znuukNTFwG66iWKW4mkv2jbWjNzxMQK9XtyR1SwYb58bDBoxCsqMeC6fp1u4gkpEPsiQzSYLttyz2vZhSKy",
  "key6": "3EcVYG9vd43HyH3gGL67EDtC7WMm31LSLq7m7XcA91W3SXamRevTmW9DXJWLLc4yJT2gvTVwdX2rj48ismk51gtw",
  "key7": "3orDBq51PnGRWpyiw6PuSkRAabyqJdP8XKxRQUK78wRhWrHoE2EWiziafi4YNbBVxfjCpVg7viSZaawtB92CuABZ",
  "key8": "XV8GsKbMgFm7GvguUFJ9U77TLXGkPsKYtgdKW5KevsjK93EiNcVtrADYa8U32vdBNt8CDzcaqqxmrCRY3RDdSdm",
  "key9": "cUKDAMzVrdDczXfZbj54hAAk8dHsPSh2CRVCH7dCkF8ZyUS1HkhhtWrX4dC1P27117fgVtBsUQYuJNrY8vzmvFW",
  "key10": "4LdPfUiSRgcFGDmm8NPZrEUrbZmBhsTNqG3GHAJfaZhgpDgFAXGptgdqquvKAEmpaidJPnTV8BZB1DpStTSHHFFp",
  "key11": "4roDU6mjcGvWTmFgj6edEpJcjKg9CogZo9fknvdWPYPCZrZBK1fbRuZSCXmFpAb5Nf6a1L3iBJHEKvZmN868v7Hd",
  "key12": "4qSgkgFKeL6J4G76PhPN7fX5JyDUT8uAoY24BNshQLpgJSwAtptgTBL1ba1pM4szhL2uFShcGAgBqLyue29fQFNW",
  "key13": "3HHyJiTu9v47jrcWnenz2cf8zVzJKzYLbqhcvHaxdWvZEkHSFKDmSrXwPtLgTfRDWoearHV6f2i2qc5Q5efxh3rL",
  "key14": "44JSxR6g6rBTk1XRNttcgsBm739mekHzVNfHLqEJyL9DGTqAvxnTq8PAk3Rdbv3KL3JRUMbToam6E5HFBeVm7YGx",
  "key15": "5B3wvvzopWPmmArer7B4uiiAF4vFNUA3CYKgnjFCuuqwqm1Tb4CdcZy1pXV9yxsfmixSZf2Ly1EStvXkZ5dMnSjV",
  "key16": "46m3AuJaeXxihctwUXo79PL1WTRzx54wtW13nmv12j8pDn8iq9tRQDqB1tDymHfXgDSMcnrLCT95Yc7jjDMioxq1",
  "key17": "4kQEzrbebredhL7qihrdaJNAndUffFYsSH1D4TBRg9ZXjYuFqenDEULmKMFyyDpUswwmsKhnmwxGYdwGBFV2xGc7",
  "key18": "5fVWbHRNQRivc3ZfdGX96EZpVWMGatonMgBGnPHqCKFnq86D8vAPf5cvb9REVULMYZNjcaYbFSQcxFXFVkBsKn7r",
  "key19": "1Lmk76HLsCCaZnYSFbnkEPJDrQ4k9NdPg5NvHX2PDbNG3S7ct9LzwFQtos1AJr1fBZVRF71z8tmNP1PuEBv7yD9",
  "key20": "34vUNmbeW6k3Y5mm1pb8xqYmaw5mKKduQcEgzWcQ8q1YoTqAqbdsnuBsnGPe23u8cHxau4y4DxCaketqNcJbm1oM",
  "key21": "3TQd5zBGKC97cUXnuvQFDQvBr7T8LEV7V3Wyw4e2XaAt7F6b2mvx3fC5VMLfRpdS8HR4jmkkeY8obvjSFwJQHfjL",
  "key22": "5FRjBhwrACiRuuhP1MwJsbCCoXHCeQC2V33P7KvYYqmATUrYg4BoighNDGjx3abHcE8G2mossy3xGrE2R8HuW3pU",
  "key23": "MJk5uMfPZA22eBCYqjaiBPvHZLmoiK6gKyWnfSR2UXxP8dzyCykM1yVqwjJgS1FY7uQGYVpucocQr87VM5bnyqu",
  "key24": "4pxxTuLdCqrWmuVVG799uVCMJZe5GAK3AmTaHnVa5AmKPguqPT8MQBNPXfkgNTEUw8aitQ396vojhuCfRFthfWq1",
  "key25": "3oxbXjnsLRyUURUMfBf9GJ3QHgZ26PN5wddPK9e2JatVDx61SKPneibfJA4zXTghgvgibvyfsp5nevvgqWxYGpgh",
  "key26": "3YD5SvtmYqnxctbfbyPpPakz8ULJ4FKNEF1xP5EEq1JsUnQzbNP7jDs9TJpw53nKkjCftqqXkARVG26SseSXZH2v",
  "key27": "3L63j2uYWbUJUoLnAc5UK3xzMu9bAnR2ttaYkztu1hvYVdy9V8fXN5vZfe4ACqjPhE3uN7vCVQwWrdmzDjtGJiBV",
  "key28": "uhe7jNaTsfifcyXVHvvjymr5JSbhcQ1xLtqJnjagcUkYxwsdo691GozpKZXjJsPhpbUVsRqNVrM6Ps6URmXmXat"
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
