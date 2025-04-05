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
    "5kGKNzzuXkuQsnGTxv7Gq3UhRT6dVmEnw6WdQVTY6aDnwXDKcWUvMz2uUSqcjBzwwPgseCLab6TZa9PHKJJzZ5X2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GAN1Z8aZPQEQ4unqth8gznGwA5Unrgnu8NNMqd2uyehSPdA4i2thZxUoGwCqpovC1oPcHnuqMwMxtoHEENyFQxT",
  "key1": "2bTED313eER1qEUfjyFKND8wpa9NPK4VVpYfuJkfs3c9VXz5gGYJskD4mneapAtqBT57F5KCj5BnKG9f6QyAH1Cp",
  "key2": "3HooxYPxm8C1ULtcSwwePFRb5G6LY6GrzTBsQ88uZoPLYd2x2eJiZEytb8vUY55t2Tu7rLG1eb3ZGsdY6N4Yie4",
  "key3": "21LtVnYVfGbUcYrWGSgVr6c5Rw52n4tpZqqqCtmL5ivAQUSKmEJBCMt4gESv9Liz6ipZxKkQsM2kGt3XXigshynM",
  "key4": "MndRebWwh3SVzDhe74tmMo1gsdNhDM1irbWQsUkCLh5cQXfrti1MpX5HfZPsGwF1PD2R6P8jnNDLFc4uWPjuEE6",
  "key5": "P19LoLGznzCAWcbiiRhHfZeV8ywsXHYKcAhd6QrWSeaguBXLLPQ8cmHE7eqBt2ztssqQ2E2bfvYhchqFhremfX7",
  "key6": "3guaSXE7yEUD4Jo4gS75may4KwerhLju39hmRpTX3kHQczMUbSWLnDtoybb9PTD3Tgu1FmhFXPcEiHNXgZLSKEWV",
  "key7": "3KCvseFhwfe7d3ftJqDum3nEnX26AzFmJzGLNDSXjS67FqRzYhdJMsBZJcpTHtPMt7ME2DowTpbk2baSBFxW3wrr",
  "key8": "4jdPHnZYMKxsfY15i69FUs2xT9ypzLvKFpKmwxJfFCPrFw4Hzh5kcnDicK9wbf6w27MTpB9oMD8qbkcLMA7qsSjU",
  "key9": "5SfuG2xUyWmXnmUKmsR33jjrzbWg2KBNUafqCtJfEhJAxTaTcmXPGkqK7dqvyntJXv7DD9fzRru7J9RLWdEMLXsD",
  "key10": "5dowYFRL4vydzjoxUKuPnSCuLmPTLj6EhT1wY7URCJRSUNA84E35CjWYbkhXNhWxw5PDGRts1GfiE3FVCMTa4gs2",
  "key11": "5RicK3XEdFrnJydPfqvjGNJLkEFAppJmzVTVanp9p36aHHDH4UYBf7zFDrxVhzTzmfzPeKkzUdpAgGgc8YrgXWHW",
  "key12": "2myZB3yDByiU4PxuCA9QccGTrC1VSywHNNAGBgdVddoaF8ame3Aias5jSkDAYwFxme4jfcEBwf8pQRVqZqi6VUmn",
  "key13": "3VChcH2s61mtAjnvmSFNN9TqnG6C9N8KzKXtSas431ZhgzJwumR8dneKYfVy9Hqno3jW8vbnZoBK1MENPqKud14r",
  "key14": "2Hd7Njrhh7naaXUyQRaVsznJHkzgtoCiQ7zE45V6Z4hR6SXuAFvAfaR7CpsW5rWpUazgfNqD5zfGBTNfqNaPK55P",
  "key15": "qJ1HsrwqpB6GevAixCUbCHStgo1QoGVsuKTCX1mfjyzhnuFcafHNsT1ZhpZ5aVDvYuzBbiiW9HV7ihWmWH5dRC6",
  "key16": "2NHrkpmrxhz3uaBCNUKPZfy2neJq4fDuA1osYDzQW8Y7GggF6rXjDtsYhx6EwwiwiiosqZDdbq97dwCkLVmjVygv",
  "key17": "5GD6Kcn98JhWKywbxwvYqfNvZzR76MgN1qFMejTvmT2mn6hyuabViXb6QsWuPUqHEvkpAp4aGFG7CzGmQ2auRpP5",
  "key18": "347Chxd3vmhYsM1kFYEioT1siEjNsB6G7Hi7PtJNTxQY1jGKyGoiBF6TGN8CFYbm35GBZZufeaAifXzLBMRb1uq6",
  "key19": "2Ft2cLp7CkKtcduk7tndd8xf5K9KgqXCZX6aUzdPB9QAMAN4ePHJGrFr2FAwGmcK9H8gZkbjdeS8KfHmcA4aBwNX",
  "key20": "43Det6UJ7jScoZWTBUTihoof4CEMnjqgnyYnAFnaibTkdFFGZ3spDCDvJrQbq77whLvWaYvkT6zsWcfDw1Xs1SZJ",
  "key21": "ErC5HS3PxrdLmkGZwLMwdfKjEQHyu169GrvFoTSgQ5MRLa7vwu4Jy9Ng6U5fL3d1h2RvFqyz53KQCvUkoQFsLrn",
  "key22": "X4tM72H7EnTZv4jPwh5959pd4Fv53MSaDbBEijpZ3gLKWDtvXEyiAgmTNBDY3GTgngZnwWK46SRYr6tC8wT3zZw",
  "key23": "Up14XhRboy8ykEvAjEV8Dpfu2LWNLWUskt26Vy1Q65PgjWpzbykfnVfgRsvBR8HrjHLZeVNg4gfs3TruCMM9b2r",
  "key24": "5TpApPPmCKDRF7wXsa6891hJtQLd1nswbBmsfpWo1uL8gvauoLNHjs2W4vngyGNraL2EsUQBFVv8LQwarTbahi9f",
  "key25": "3cfnyAxVJCUVvf5vKGj4VNmaMLpHF4oRRqQzdaRpm2c3cQKhD8wNUkQR5h4PrNWAFFsw4Sp911DMrXTfMk2a7T3s"
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
