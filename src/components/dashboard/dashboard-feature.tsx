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
    "3F4i3UPhZyX3zvHedv9mtWeY7t6r1xkdT8is94xgxpnvi4zsWsq8r7RwnYQa76YnzAgrv1wVtEb6jP8dW6EQz3jj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28BB7gi6ThhmRjzyPGaKkaPYBoLZkJaafswWYiDcF3VEP2uHcHcLCF5LHziH9aMLzT7hi8Fx1iFYyQihxEEV8x4T",
  "key1": "3XSmcAqkYXpPR3ToyZS5iXUBPJoADLY4NhAjoJXbqGD3wYejZbHgsbGveQL55JUeEqCEL2AMSntAXXa3FGbmqBpx",
  "key2": "3eMLS8fNEibRXgMfRDNo8fogqiMxCjR8REuTwHEEa8c3xrjDCKR6mWMDHqepbfoi1shUuXHxMWbMkcV7Qvnwu6j2",
  "key3": "3mD6h2m57aKtfh6Zg5ubM1Yd9Q9ehaK5Fr7wvTTSaxK4zyv4J3VQ1v1D7QY2Aw2s9fcADgzkiTcheH6xa43YgL9T",
  "key4": "2MYhpqHzUPqTPkS47pLawtdVi6Co8ZA9JRLQkYpV7MmWvskYRbqHC4a7tbMNDrPDEBbAgMXrhJJMpdW3tQNvaUeF",
  "key5": "5iXrFwy9TSi2RYFVZMjLv1k6x378g17xZsf2rXSxfwH2xVTK42woxDkFPYBuzGtAJCDshKvVgjx6AppGfwwRcgWn",
  "key6": "5pUv5u67BRg7pv5kUu7LcSY72FFnbzoQLTwxExXja3DHkByXWwSxyFBY98SQqKf4UhDhJmnnfr1zYYzftkg3XEnR",
  "key7": "4Yy7rvTfwwrgxegbZaSSfuhSLyChjNr7HJusfzhH2bjiPmiWayhPBGwJfhzHTv6FEMwkCVqJ8tGo3XaLQ5t8Sk3W",
  "key8": "UwZBBNtt6nzhMCRL1Y8DhXeKNehEh3fkX1tCaMtbVQLxMZRWuJoqiDJt3jraiFqF6ijQV4BKRnRvK5wjnQ3Mk9c",
  "key9": "4GZxRxre3aFarjM1UmtKNGTkWQL3YXcpCPu38aRcqJETyCRV4amDHGxc26D45Y7jJ7BAT5d1PbxLHsTuftnT5n52",
  "key10": "5BcgKpH2xBLsqZ3yr5LCfLAmR9nrz6EP9DDAyZPGysjwTfd3D3YDmdzLaWeEZXjASP5tRJJ8Gdb4JAFcK3cWq9Mh",
  "key11": "58rsgnsYrwcagHGQZnQJtgzWMM9YquwpxCUefMenC6XS3t3UMpne6i5exE2dD18o9bBeJRpPTuY7tU24NrczjvTz",
  "key12": "3wFZS6v2U5hQW44iFnrbEdD2VFMAbcAV5niYYcAKxfzPk1w15crievfSJ99PWD5eUs4ectyXB6nnYuFS4FLw4Mr9",
  "key13": "4i9bb8PFtgRaBvby4GxKLNeviMkj9gLYmX4qtzY8yrXLC1kf1HFrrbmPnrSAKyiY1P9R3i225gmWuu3m1TcVMLnc",
  "key14": "4BhWFMfPv5eNZDMsPhXggd58rAihMZx3pibE3D5HgyBvqbrHUkH2hCnD218pD8eVhSKmzz1GKMNMLYBMTW9t6brc",
  "key15": "5NMr1Z6MgyWZwEUZLTkuArjKtWNygUHAgLKyoCczNUjHJAJPrNZfx3JmQxGFp8J3oaJiYubHfMU4kN4vXZ7Uhtn",
  "key16": "3skgNjTbsCX9839LK1Cpxvs8wbwcXQXErxXHDM9XUanVMJwro8dHG8j3vJdGgYmmyAtM7wTfAbTmuicG2Rzxh3Wo",
  "key17": "2D2QaDJpZpb1PsztLK9NyyVyr75H8PSNW5qncjkQFxgvs7L3X4QxaXw7fkYNcJoWEEEfmUSfmoKjGWRkWGdKEsbE",
  "key18": "5Au2irUgiK5HwAzKKz4HKcDHCYghRd2PZ4NrTiKTnNsbQPw8rKpSCrSBABXsWx5kfGJxryRyAQvaJL8LEfo7mmMe",
  "key19": "4mZd2dUmWAwVhm6V8jEzsQFZK6y7vtnBmxsuxdCeWVFzK4ifeomcPndSm3Ewsi4FvDTzeyp7zcHSLnn974h62NEq",
  "key20": "JmxDM9CADGetabmmpLkY1quTBcRnFUVz7Y5SiytMyv6kfHRVGZ1J66hqhW6VRJ8i66mXKrfTbnW8KUK1zN6Q3qV",
  "key21": "zcB6EUTePjQKkK73Qrw1QQ7KoCnGAJdA5pfCbQLdUWjc4QfUYvPManGsdnfhJiejsE8pMuEE8dsRRhjtaqyzcN3",
  "key22": "C2peuqjkSNEUon1yWnLRd7Tb9hmUqHUhWD4j1YhaERfWT8jRX9SZziyoWaARrE1dd5nEVxkvLsEXkPa947xp2aF",
  "key23": "5ZDRfbnCaATxhQrKwKVyFG9eGCbQri1vPmRsd5uxjmzPNy2ob1CR6Z7kfjKL7sJRxP3ay8TjLdPHZJAYzjGTbAw9",
  "key24": "5RQZAqhqmUxYqJcGzcAA8fS3ygwuqXzYBbKEtJt6J3wTgRraqqGFm4ie4JJMT5xn2x1RjV7eLpyuyszFLvXGVtA5",
  "key25": "5AqSZCG4Qnv9kmTsxJvFJmxiuaUWDfmW5gVXUZQaUf7idU3xTJgxEDc9VKFxyhPNUSWtqP7r3bsscje1r3b2pxK3",
  "key26": "5Vhr7DayiQteTWXG3BkjDgvEmBzigjfB21zCmpTxUgxsyWqST2vALmuFYuJLMKVaeCGqMRHyZXjg7n8CADFpBCr5",
  "key27": "54Exh7PnwzvZWKG9rMKrkdpUELuU1Vr1FaxqwzMXr63Hcz7av5Mw2yKK3TXmRA2FBCRzGvxu62TRtA8JAZAYsbug",
  "key28": "2eeRQG2Q2eSkByXDSKkRrMZcKQJehrvhHG9puTgMxAtSGBrT7bMRNd8h7SBXNZtNe7gsWyLpmNbxeW7ZurManh9J",
  "key29": "54iW53B79SjyB5wvRK8aUjQTj4trHKPA7gX1tN2Nbsv2ExqFx28WmMyJjSB9oMgNQpKQf56kEPRQ7XaPS415LSo5",
  "key30": "4ShdzTs6nzUJYZitCNGN6aLf6Mt9MuUdUhZPHYHSF6VLjhwfm1KFrZVNxXbHEvMRVxJCBAdPCGTZqHBBGqKmwEii"
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
