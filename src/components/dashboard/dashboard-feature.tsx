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
    "53SDLNwTAAJJStLKzsQvJY6jGyiGUgNdxbyWFpwgCJk1eAVGd9HLDY35zTm1EH9Q4XHMrhZQkKngV31GB5zBg7ZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KA9gfN2UkGBpMufbZHs5bUbCpoZc2FEMtBCfMuiczXA3SimqzvWt7bFPK1sNZyAmKBft2uX6s5BDJ7LS8RCDjqm",
  "key1": "1j8MiM19Gt7nHcpPDbtS15CTGnfzXFeBvVmfcouwYkoNka2umvvHWbzmNHbxtvw1XLdQGtTbarpTmmFtgCMLU5K",
  "key2": "5ch2hmwc6uDWVaqg1p97G2J3nVt3LFHgZRrd2CEktktMfhkJy7aMS8pa2v35Soqd5vXrpC4sfLKvD36pkvYkHRCf",
  "key3": "26ztT6UdtU91RmTyphczNUEbgiPXHGKqcTWman3DPQYJ3518sY9Kgq2hzGc5dAX2FYAPRwwbJguAcKAfii3pUE6d",
  "key4": "35BbNG4pxSv5v4YmLbH3kEHRHVUFQY4aCbZV4dKpWueMpS2y2ghVuM2CUUxL48x82BaATudZmJ9it7M2yXcVz84V",
  "key5": "j79UjNvsGhSSghdcGTt2hiEGCE2iZSSpwmHpeVkSUhq5naY2BEnydtb2X9Jk3EATJTF1ZwkyukF5WawztUPFdYF",
  "key6": "5bdQ7sEq8U7tRyiHjZXyJBAK1zLSsNutBAgWtw5TUWNX1xW5QLVTBfwTTuFp85qJKy2nSBxfCkDivMULr1CfdbFB",
  "key7": "VUBYTeaNup5D5mbQamXCWGRTPkQNT2YD2puHyEdRbPZKNywnN4fP5g3yz7UvVH64Drzu2HA15VoNUPhQfs1DQF7",
  "key8": "4dWwH5TCqsLwHzAErVu5PRx9P7NWpXxh4j4prKg4TkSRS8BPF7G4a6g5M1MSeLMCd6ceS7pGw8atgUKm2cYH73Aa",
  "key9": "4tn8fozicWHUfeTDBogoXdTV3vy8tJja5CggZywT76TytLg3Qrf1aUbtYwZEFzQHvDhk5UqRwcKkVf2yyDtowGDf",
  "key10": "5kTTLMQd7nkUcCsTeVSHjhwfMy9BdWQYozzWYWyRFnxcmfWt5N8GV4Am1Fu4fjXPFHFDsFnaEtWucLuWrKNdrzSY",
  "key11": "51c6CswkttYu9SJYGv4rLTMQ2g1DoWKek2TtgHUS6TGuPhiYq36pJQDgfXK77mKTzncZo8uRN4m9QUJSigTMuE3U",
  "key12": "3R6pWkccVjjv2yAKJERYeo59NeoiF2iqpMoBgQxc79pwmwQNr34RsnKLFiXhrMjQArLKivJbTSucDx2Mm8mAfSrb",
  "key13": "4NJLTdJGSwTuTeBK9nS7BcGgSx2XpWbv8BKaQiTM3V1Ejp9zVj8373EkduUY3tBB3cwJbw1chKCbLp32Nw6TRvCU",
  "key14": "5moDpxkt6dTMLNa2MNzM625twWLp9U6JtvzpvHSFRxhkXkwqXgkdfSD2aC2pHm2y67ak6mAtpkUwZvPcaXJjX8RC",
  "key15": "226NYHTt46peQeQExEFwUMEh5RkH6BzHpVa7xAkWsvZH1WbKZpjZ8jynF5MQS9FqSTap47RgtbEhAhpdVLcXWmxH",
  "key16": "5FfJG33V6tsdqfvXb9F3g2pezoPVHAE74JMfZKKJfrnMVUGVkApY56TzFpdXFurtbzsa5MqGcNYEE2AS6yLhw3p6",
  "key17": "5RycBfv8ynLeF3ARLU2ozNqH7aMMPDLr372EZX32xZCErNLeH9YhpBuBAr58hNhHXeQoGMPA3nmNq57k5K912QV",
  "key18": "23AvuGApQNeK7vGEpRrncjXb1LMna7U8pT8xxc5YbGhxkPP35WwJrNjeLvaBv62z5Yc8uwAaM4JmM1XFRsaiSqwK",
  "key19": "2r2yWDrNtZ3DgESSBWWfbefN6kFRCyrjcELgHDyh12oUdBw2kvpDoYpunDsF71nZCBg2LtAHfH1sLuQPzJBtUfn3",
  "key20": "5anyCGUQND5vfCxLLSJMbBiFdeBG18opKsR9LmW38XB6jytiX5mM6jVSkubJFpLkqbYSBvWwmbJKyTpUPZLYNa2g",
  "key21": "4fxg62PfpBXSSyHE5JCvxRLTby7m1HhEJRbFTygEcv8kwkLDK47ZMf6LVzpaGwQvLn17CqjxzCLKJQYCPC2yP5NH",
  "key22": "3FQuaurruhwWKmPm6VekME9BPbEk3WZMnhNhUcMk4DCdMm9JjaJY2piMLAuSR8wSsNvXv1iorAJcmoyZ2Kq7QtnF",
  "key23": "3Q9NDkEBTxDV2BGEBrqGL5kmwYwVnbWphZiKxtpKHZttWyz3XWn7yUTh4wBAkYBki4db72cK9dnAKbZBL3DJCjGV",
  "key24": "3tQ7SXKtNxE2hoJdd3oUpJZPg1w6Pqk8HZ3DPWwUVcwSUYee8sDY6zFsB1dFKjciurBWbYr3rVPXGjKDEdU8m4CF",
  "key25": "3JaMvhRCiz6n2J44BMqAMq85h5hozBpNpUa1XYwcQ8tqYVF4LxH5ZGPADE6KxL3AKZgJRPCpmbhJiaz8vTGap8qS",
  "key26": "M3NJ9EoSeQcBpmmSTTEHMTqmLuaFaeEhc67T99pL1gp5tJ1A1oyZhvS1dNwpm59rr4WWky68PjG7JV3GWkoYkc6",
  "key27": "38iioVcnNvGi4afLbtUq8QjvrzNi4gWxo8GiPTa5odab5ve6C1TTNSwQLAZF9hSYjNARQXd4Jw1KuvRzDJRLvPiZ"
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
