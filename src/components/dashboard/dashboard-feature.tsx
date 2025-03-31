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
    "56StZQ4sBTbAHfEcGgmfAJ7AxkUKkup8CmXkDZMhcpYsnxw2j4TTJSteyVgdRUa2CVtVf6GDbkuh99PGB55JoNiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42oHvAjHohPXeqyHzKYqQvtNn3NfE9o1MGp47sYq6Hq7pBgVvKZEPGcynvjWJawmBhVWbDbrpw2HXvc5ZobdLRwq",
  "key1": "3stRRHYedVAh92uC7Qbtt3st2qWYjPw2j1qe1xNLBBUZEmxYroy7dB6Y8jLAXtMBs17hr6UHcbHVtdgYzE2r1i4i",
  "key2": "4Pe6UDrafKAURYCaeAGjpQMpgMK2tLmKQUYh3xfUKDYx6jtzxjVLcSnESt85MpMNQyBBfuarALdRY795bd1LbWLy",
  "key3": "58SSJfn8U2pYa7B7MPT9A5E1Vzv7wnGdShQSUdWiNQ1XNTT5CwzZwv1kSUqMQfKKSuaPAdX8dnFHAVfDitUzbExK",
  "key4": "615ZpgHeqq5aWFenk7UEQC7VELLNyWX8tkN2RjovK5mKom7exq6Sv7oHzwQ1Yvh3aC6sxYkEuKCWbkwRFSvGQWKn",
  "key5": "4hMfoH6eXo9r8Jim7JhVMtH7Sx6qFZGpdL6Qra5F3qcxt5ckfJLrXW8P5VZm6YZgjqpkJ5Gk7hK5QErfBAWzcBxz",
  "key6": "5uZoGCFA8nxH56eiuT1dX4bJPgmZj2jmjvdFn9kXd6XC94njPJfh1SEfHzMA9XUWCTFefDS3TDR2i4xJuYyXeHGq",
  "key7": "54DMWa73CZH3SbB6SgfLTj1t2Y5uWcivUsFf6HpUN3eELppUTewrt4EZk6o9FQjYCW6TLr6dWasyy262Dk96Z66U",
  "key8": "2MKzuC9FnyiV2YWksAadvieAN6t3bnEzVvDirxZnJimC1zGazehr5nYcE3T53oMMmBSctfBeAKyd7LV9aV9LtWoh",
  "key9": "5urUFeE8mJyqrqSoZ8i2MaJNpYyjujAw4mzo3M6xid1DuVmRSPtYKdRfdpJy9zJc5LjBQXd1wxQ8zf2koAwD12mu",
  "key10": "53KL4PgeijH32NHFuX9p3u7biNnEjMZnbTUdhBH9bYEV4VVTcSY91chZaoazpAsrHDyZ3K6gdcjDvXSsHNtXFBuE",
  "key11": "mrkwELFeAtPKXYNByLDa3eTFYdckgbgLcATqERCoFZYaSyyi4yNCinLDc4wHrKX9kFPRhXQpEwf917AEUfWxmRT",
  "key12": "5QuxZREn7KNC8JkhvGviLCpcNVeJcdvogtBZ65pLz9Q235KDfdWkrYM7Xj9F3LAwRb8BLwpeHuGLoMNNEjNSnTf1",
  "key13": "4KiwYVw22sd6Kw2g5UFg8aKBPJHdNXHVZ89h6iLZfK2WPtWf7J51m6L6E4Nwj9hxz1sxDBw9gzHRK7dPLTCaM7y2",
  "key14": "24BCpuWDr4MxHDELBz97guWSMHKrsfStZBZbi2VJdzRi2zdbNPaaWZKyXgYVkDkcKxK3431tUQer7pPsSjadpCCA",
  "key15": "nDuhygkKpk7pyqHBckAKMdKTAkvwQs9n6d3QjREbjiYfUtJDdRwDtha3sP9HMyu2QX8HJ7oMryULpmRjRthjzMg",
  "key16": "4RJqeW1tFBvn64PEu682uUo2ehPYkQcysQomHL8yhgWBJzpLszaGMkBHzhVyKZcu7E9NRd8SSWs3FgpmfctTrvre",
  "key17": "4sq3xZcCPETD7musKT1u6eNi6cxm5Cr88QY2NjMLj2aFzuX1nkBvgLovTnywuqEhcEFuaFx1QXjnXevXxqSJeE2y",
  "key18": "WLDAoL562d67crH9JEJt8saSFZmQVpTKCCJnDaMebDoFF6LcXDei5k3qREMHfgsWJGv6ZyR2T3Qd16W8Zkh6PNo",
  "key19": "3GjtLCGbFFzA3F7HmT43HXBDXr2PWMSBTJ2jtgJK3Emt8yadxNjV7Qkw85NW5nSjXLMnipXKbmpQnLgwc6FpUafk",
  "key20": "DqvMq7B9hxoWdMn7UcvkUub9u1s8LhL5Q4N45azfw8g7Dn9DKz3gAtsX4LCWT33ycoiJN8CeBNt2o5AXnNd7G3H",
  "key21": "cxns5rv8AfW7XFApr4N4SW6LKbcBcxm4oih7bQvBPnf6VtNr2TiJziM8Fsf5yS9tKbvfkxkrfX4LZUcwrBkK3g8",
  "key22": "4BaXL4LmdWkLBxcnuL6BZboxzUWobN36zjx9YLY4QYKLc7FJFRTHPMKmWbyKzZBdZrbHGy3WnMz5VNGJNENyWfQQ",
  "key23": "2PfWAz6fJbzGt132ymZfswKfenGjceeKVfVskWtaVWsX2ErM5u5pUsDBeuX8yFJkqna2K5Huj7zv4Bt3rjCh81At",
  "key24": "4Z5FXAzfaACHM6iCqxDTnbCmKN5UE4i6bYzwuxfQzrtjEfKXJKjyTbZPqxz3YQTnAJnjPE7DP7xxkciSAF6dRVKj",
  "key25": "4kGqBuADLgn7rbvJXss8MvRgZoEJsm139DmhMNybnNspgmZqhWJ9mdS63YZqRczJ1iTky3ZBriCaZZHfkCBxG2GB",
  "key26": "2B7CuUH5en2m8knysZwxspA58E9n7KEUiJPdFWHBixkovZMFUeTkNdnwwp5MZksgWdBfvpWFFLNeCAhF2Ru8gcJZ",
  "key27": "3WUYBVsFWYnbRargPaabWafmfvwpkhhsKk4vPoDbmyEDgZNh1snFnWTau3WXCZYVhRKSBu1uTutDzcPKTgsyd2zq",
  "key28": "uj4BRmRLP9LXtfDHyGgqEKFdygWN517EwvYnTpjyZ4qksvmntriycqqeTF34wXZjmetjws8N8uWwfx6HsriMzTt",
  "key29": "31L1VB6oov1cpH1MNLUNFnGhuVWhLpgcV3Z8druuwd7DEGcTXzb55mt1JiuT7KPyy9PG5bJxsbGmZEYK8RPyvdK6",
  "key30": "RPMaPq7rZkuAQDNciYjHooQUEuzbWjnUTKYU52JoDK9xHvAdAe15r7NaaZFhv7hZsm7Tc7E8gVujyVexaPeuU9t",
  "key31": "3M61RfNRxpExH8vV77wcFxuRdCAwRBPS9G6Dzn79jfnyiUKw81zgkt4ZJoXKaUdVAEftUWnPQ8HLDxi6T67Siedk"
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
