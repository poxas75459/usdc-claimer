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
    "5VWJGss5RQdz5E9ixpkcPxzo6fZEvifERtAPeSSN3gsPWQhJiFPQzPkvyXwiN2ooN4kZwnAk4tzBi2QQ4FiCyUsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F2AwdZ9DcU9EFdB6MYaE8HPtNcyB29qA1N2Jgv7evKkmNiG5cnxugdf3LAEr3eL2gHGbmZheftU8rsyB82xhmw3",
  "key1": "2rnZFB19QbCr9wTiLJa2GSWftcW1q9wxX2Zfj3FP8LoagtHHq9uDiiYAPVq4TiooBeSkjk8KXtnZMn5PQYHLfgVn",
  "key2": "53wjrpkPH9bbZNg7TWhTR9KSo1k4AbKyNcdXBSWZrGrak75htibjfQ8vW5m4rfnybRbqgfBL3vMqXevRF1Qy4UpR",
  "key3": "5RRVLWhqNPT8y4bDoXxMUMp7bE3drVnpWrEHYbWNHWuwZmGyWeyYeD2AgWUhJdecqbDajBLtG7sHjhTAmhbzmSpg",
  "key4": "i9RGJQuR3cAvhKn36CoE1VyBVYHE4DZrLWZXjjFuKyruR4tvush6whs11AiV7wcRhsVUHRSoVe5p8Lr8XKkmgwF",
  "key5": "2WssNjumJvhofpNwFheQbVZXJbwbnDt5pXD7KB8YcS5L68x5NB8LhKtxgTJCkFJJdX8ADRkedikHrAqSy3bf2ddV",
  "key6": "27kmpEnugjxLTtFvQDUKAMxchCoBe5xcqT9ph9amgMZ8Jf63fbhAjcxLUQ2ZoZq5xLN6aPEQJMQ6bYKzqjScgafQ",
  "key7": "4sqEgJHx1PTTK6ASHHVx4k3y2HDWR3ov9pCVoy69VYg6rMzVZgjyBwz9zMY1Z5KzEpKM3ivXpRmJevS6FJ5X4jPQ",
  "key8": "33GXt61nQLxQm7thyysNNAPTx2r4RRWYhW2Nc6dyDGgKyHkJQmUPBA7dZrWruzEx12yYn5XnRwf5kRYHsnMDfuGk",
  "key9": "2kv7LCGaBpL5HrUe5vhXPNLvRkjYBkQMxdZqXEmveVNnW5AZG12j8KP42crAGBiENawJsZu2jVwQWarxgoWLQkzf",
  "key10": "TVNCAo6XpVG3UZrkGmVC9p9DTVDDGqqqghk689Zu6nXKBXGyr3mHb2jnWGQy24ExcbhCQiiD84koDVHgy4hMgJ5",
  "key11": "4Z8GUMjCqZ1NwAJJJ3749K2DW4CdcLtmZaHcubUmrYToeSj6LWajpfiHtDtcMaK16neRLsSWyqfPCmjnzZAngUqA",
  "key12": "3pTWRmsMFQFcfCmAxUnyixkQwjpGYi4LmaRweE3Jwg4CEmkb6qfN4vdp3FGW9SoUHQ7bpWBEHq7nwgCsM9jE6mcE",
  "key13": "3qP4poj9cgjDYVPoQGEZapkRuZ8nNfpJ8BLYHbUAz588Vxefovht3zyYtJmSEG8pqEyB6bZrwLk3KpMHZL1NPB4n",
  "key14": "3cdEvXoVvXGQBHbVRfFgkDqGweWAgnGygaQuEi94k34zbSenq7ia3FR5jESKvfpvQiRLiuVaSLzwXp1m7skVrBkS",
  "key15": "5NeqKvxYraVaUXbzHEnaEpPAQe2hcui1bVQWfczJJLanSQeDVo6xr4oscNpo7WMoum59ntH3ACAgvMCqJNr4ecQW",
  "key16": "tnXSpsA2unpTZEhvYN9eHnVVFXFqgGWufy9ZPchPe522DGirAD9WwUDhZ3ndCzBh8XB24BHE35WgeunsfbNNtmZ",
  "key17": "3e9dwH3d5qpZMNSG5VZpybe5qVZg5S1qLG6xq8Wc8A4MdUj9S6MTLgR3xAkwhRTfcUw2KgvhCqEuC7x3u5WVCXaD",
  "key18": "41p5G4HD1aJrFvG8jXftGSnL7v9pmGJ41L7z4gF74pjtksYQFarN9Xn7S5PgYGPT5gQXb5uMdnrB1ZeQcANBudC5",
  "key19": "b3Es2bXoKKD7MdeqsaaHvCW4rG3LdM8Qz25vRGmfWf3Jh9MoQiaMDsn2hAzs8ifD1KTUpqeyTBx2Zw3KZRjwuus",
  "key20": "5fZjZa8FvTye1aq9Pa8hPZKX3biURHqyGe3z68GVkqUAno3D6nRGME1neiNgTiMCr4SA15UPjX7dWWTasKH1EmAR",
  "key21": "Q5aS2RYjcAzY8zKdFvP4PHqXvWNbTmQcBfMsUKi5thFaSSNC6QHCUfJHRDRKVsxjf9tBsyKurPNzHZGnTzJjYHk",
  "key22": "3Dx44UxEyAZbVGp4tiBZkz4rfuYb2hVEeU1wQvyjTHpKg4Wrj8kVM5mHv2qQLGjKvrJ9Sw9RT6cs9Gt8jZqywyXQ",
  "key23": "4Hw1T5bi4QBDVRqTUGDhvzV1KevDd8fdz4Ut7rQV8mXisj5V24RPsa1e1EMp6DiMRvYEjEyJRx6KPs1t1qejqAdw",
  "key24": "3BojMu2Fc1vMNPPuyo93EY6Z42UxRXgRuscsNaw8bkiyNP4WrRM289xfNVdQwKZWfzmHuW8ESLYUwBGmW16drcQR",
  "key25": "A8XeLPwJsBS1MEoGJxzimxzERWGcsZ5Apr1jfQaPzdoW8yRt9GtrbAfJLfs23S46NT1Ggesa6dkUEd2yvSM6uxU",
  "key26": "2n6v53HSaiWyW7uNMTfhcyFNKyosJSKTYJimrmbeMsJV3ym5yKPX9Kw9Csz875S9KBmsJ46H1sVm5NJhfGU5ykSj",
  "key27": "2LkQHVekChyhLPdNEp1JsyYrpfTrCKdCocDc5BXHS5oKgLAvpeC1vNzR1RWgRpVPmP5WQex3DdzyQbXLGcPoLh1h",
  "key28": "3QxWPMvXmQhypewmjSYTvtiLVRQrBNvJ6puokjMA9kK4SByytRgsXYuRFMdCnGJipJ6Z9ZqcdC1iJtgscuQ55yf2",
  "key29": "59kLYBWUvr1Sa2cSDkWmXFEWmkMwuvHkMvQBAwoy9xvyvcj36m2w2pPFzyJGug6YCKy568yiLF6dwuWLYjYx91nd",
  "key30": "476kn2ESG6pfWFjLkbETx5YxvmL4RE1jrihSbSrAqm6yNUEcgSmsqgc5fTcSF3T4FHv3jcTKHTiGwbTy25LrLs8f",
  "key31": "5HEuw3V3n7MQBKVqYxzCufEkfvvtmtMihwfPmjKd8NR7YjQf12Ba7naPFaoAF3x5VCPGj8bW6dabwsDhYXkHDyEG",
  "key32": "YkzaRYWmeS4WTosJBcx1j1YTgYfk88mtwg7ByJrX85fYSPJLTXtd3o2WkozqSdNPN6t4EK4YoTyfVv3Wb4WVNJb",
  "key33": "5MibaTPBdowvgiqo7BRfsYBE1Qi8UoTaedZVMwHvixePuJpcNTSCgHb4FkJeiKKdmu62EeuxU4p36YSt5DRZzf44",
  "key34": "4LrttWZyD8GNNttkCnrJi2x3PfNo9qQW66HvzueDcqbd6xji5JY7Kzgbfb2Qb8Whg5nEpvoDHyCEr2DMbZtw5x2G"
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
