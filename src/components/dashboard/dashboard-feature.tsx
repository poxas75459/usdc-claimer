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
    "39hH8HNSJcNYi4zdVJNdWZq6QxidbJiZSHr3uRV9xvWD73TzJ5adbKdAsKtnci1bb4kCqNNtJMRoqTzzT8aSuQvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RGNgdYqC8nM5kur334BGvqCb5vFvLGut5GkdhN9TkAM2ZZjgEHEhkuvhoLnHH4QYQi7DKGAwmzhRwzA1LGERasw",
  "key1": "2BePMNLfMogGra9zF3F36AqxZjytn94uEGMrhRESEZtfzTzbA9NWWQi4684gc5SjK56UzEFp4vnkPUpySYfXEwLK",
  "key2": "3FsdN8qjqeFrd1QWTohz7fANSBdNvEpgQ3NRLs23G5mo1qxG1txcXABybCNFSEthQKKWxKbRnCNwheLLRvMSEVq1",
  "key3": "aThSpQ5kFSRRhE9UMm71yPKaQjeNK4NKyW87PZH3vRSF6B7eEPzA87N2WSpobR2Mye6unvfYorj7P3fqQaWjkJG",
  "key4": "3wcxw4A8888WuNt1VSbwgs8ofNVtnZUHZmsyeqr7Zvd42yXkpEaiztvGnh4mgwQvD22xdQyViutNbdcKiytTu2sm",
  "key5": "3R47hTEGcnVL7CkTmBjtbJvTUQ9UYM2sVUrszczekCiuDvRb3P6J2fLtgyRQixYKVzw35PNW9g7WSNB9SYcKBjDD",
  "key6": "4uwsagXxbJrDDeA14R1rGFMnJCd3TGcbn5k7pafjnuQztVoab5rrEkfGrfNLKavj56p6p1pJh2ucrFiXRrtojy3x",
  "key7": "3vChqzSSpNrynjbf9nBc32vEvYWgpsJEZU5U2Kp3qdsuMVAgmZTCXqMqETPE43bRtjJqy2y1otGsxwExJi8J6qiH",
  "key8": "5evBCJv9xPLzvTpdmoTrfDMbunK7KEDvVKPq47BwfwKRWtd8bC9F8vKVx9esyWd7uo2F21q6TiUicNqR9RFRD7Jn",
  "key9": "4hbu9C4ZoCRcVaxz5wKFoaED5n7Q7LDZP88hoeo8j9J5MsTReS5wA2hzcMwPHNytevd1gxQiUihryws9BjbnxWvF",
  "key10": "2Gbf2TP3Grurka5tiYi6yxA4XALovj85rtgg7ZVHuE3T2ZSGddZXp3c5WJWDAEWbojaG5xzoHRbV6diW5D42xjih",
  "key11": "kZTzb99kx6RaR1bqC3m3guNPEGARmZiT9cVJaQHxhBcHLWE811rdMZWi1UmRuPjjvmjiSX5iomVTpddNnw5SD8z",
  "key12": "28BJ32aQDdMdH86dZZY7s2nJuQntfVVEbGwziCdzofMuzM5bLpByoaUhr17LRYjXPL1DPjCc2VNei5921FZ7oJVQ",
  "key13": "LfKM9EuKn7G297xVa8F1QB2iDFqUYEGHnmVu4hfjeSm4a2hSNW7wxTW7aaobjBnGy1dyAYfgnASqXZ2p8S7CnXV",
  "key14": "Jg9nNLXruuGJ4HbWrMwXq3XFbk3ShxSTvTS34jt972XZULQe9uB2AaigEMU2o9CfCcBcGtPV3J6ncASV7HsQf2L",
  "key15": "5vd7FqVAVwvAtbyB8affaMrf7AMpxxUDiEz3eKQ6g1JKK6dLZedZ3E8XnvHPiEJerwFgqHDkEXtA6B2MnofCEmQL",
  "key16": "7sgoVWQBJQ6xasxH5s1u9n6vE5mETZDnysfcqrCzZWe95zEbC62iUJEDaU6yoJG8fejAHCoVwrED3dakPU8Znam",
  "key17": "5MtRyVjzTb28H2aVWS5m7H2MR5gbTPRQAfuyKkXn42TVDfcCrg9UnSvaMt6pW7kUQKiS47Mc3pX4gSAknQquze6w",
  "key18": "5TQvmbLZmUAMxAP5TRhtkd1L4oGu6GMJWjBK51W3wGT6cS2NtPoWxWd1ZrH3ricgRaaeE67sjZn5NNvfdmeS4DiY",
  "key19": "5jZ9eHLE3NNbafoEspDkHv49P2WNLnJuL9ZitCSm8PVNBbNYhFPZewNCM7WLVSsrEYZ3QHHNBVAFQuPvF5k8HqyX",
  "key20": "419yD2fm9EC6y7yQCYtFMAXPGufWZK9C4XAk2mArWuokeTrFrPxUx4qPpWzcnF6cvyqi5Er12cm48k9MHoQ8t3Fr",
  "key21": "2oh3sPzmPdDfyVZnmTcpmWg9wYJxDwmRcYjanUkKTvN8VrALbemUYXQmYiY2HJRGtGFqYJMttdgfqmyr42tmoCag",
  "key22": "vYSUaNDAnUUF928AeSn4tyDLToMitr623juiN21JLTfGdkS66EjMmfBL1ro98vhUDaf6tAaS7bdooXNSaTXwCSZ",
  "key23": "532mbjCyt1BH72x9JZL1aH7pkcNB8FEj7JRnRu5cCzAXx6yNp69RJFJwo7jg8Cuf4myfjaAb7rKXoSd8pfzE7VQQ",
  "key24": "3ewRqx5w2xGrMV5VScDrSwzXtf2EUSatFdjNmw5LLsiBNaUFx4VCbVXm7NRrN8rJ8sCpBYzUhLPoQXC8WkL1CfjY",
  "key25": "5Pbxt8fdBoGMuCnJbuMexkGy7KVpyKvwCm1J7kC2n7mDcohJ5Zc3n7mhfYdHFyGRRS8iYVf7QPXoXook5VdYJawH",
  "key26": "8JWkNDUs5Vdb5GgP22gBrs2AsJg4MNtQv3Lggh9nLNCZxAXvG43sWQKNEyP4gLL9UYsi7W4TXbCppBvLH9Cs7CS",
  "key27": "2LiCLNQAfCpsk2upgofoWDQFjaihwA8NqXmwLHhm98JAz9ENBv6b2Xk79TFvzBEFYiRb1iLRU3hc47vBYEBSfgT2",
  "key28": "5TFzdms1BaYFbaSWSDHGoDYjTtwW6qLpYviKNDvQWCjnbnVZNzY1eZneb2KaYuF1oCV4vwwUSRDF57XUSicm5k4K",
  "key29": "5cFNwJ3JQKWKvobLt3odxwmjPrekEjy4GnwNqNrAXkuDahhq3riaH25dCx9SYf65PT7yafbw1fUg5eDEBvWFrHCN",
  "key30": "3yuNzUq69MAYBk1tFB8iwyHicT6rWcJkpEEpkkeXNMJdEsjVLHdou83tewAUwynRjU84qDjLyRtHLUY2oY36XbG2",
  "key31": "4odmZvAzJ6ramVgwiMNKrj87UNFKp3Dkz7jMSw7iNVPAX76ze5cAtn8vPDaTfRcWxEubhkFQqXWXXS79dZVZRoXU",
  "key32": "2iEMrjLU2jaSYZC1XqbmQVpL6DSqrrASNrx2RKZdVMtJLPHCpyPuLm3YX3QwJysvueURf22NQnjGbFC1BBNPdQBh",
  "key33": "E1R9Q3gwqPfiXsLLPLxKgDQ6p4aKp5NFo2xznxbXSydAzWD3mNrgVAV1dmAgigQ6GhbGjra5DKjGdPAm1sTbf1h",
  "key34": "4uZAaUmdvMaNa2PhFVCHQJhscNz8nboV7TaM1hbmkQaWevmGVk4mZp5SH8XLB8MHL79jMYeZY8mCzScEUk6PyX8R",
  "key35": "GzGuf14kKinYDikgj4YbaXaTgPyFJgUSkPudeYFVrkgT5xDJGzMro1NvBHCcL8ejSV1Kii3BmstU5j7M1cE7vRg",
  "key36": "5GXFuifP9YapiXLRVqYgwNKx4jXJ5EzYYa2yJ2qoC7fpRTW9rQd6n963kMoWySC5p9qcxFEDdhamtLqmzQYpeNc7",
  "key37": "3B8GZSM5KqUH1hYUJY7mr8Xd9Qzpr7rSJg3uZgTCVqxXjVa6B7wv5QnVpMhgukxNuKHTMgRvwmvgHfsVtsWmWq43",
  "key38": "4MSaA2c8LdY2gfxAzBnMkDDwSiB6sgNPCVeDf1bb78bgG7oRF13naXb9bgFLmZjWruq7D67z1KG1oRETL8vryt8s",
  "key39": "4i4NwKKm9RSTeqkLT76PHezdt5cBxz4NH9eShURVzASRXJcRRKqW8i2VRnuw8ru3fSbrmBH8LJifAFHxwjKavjYn",
  "key40": "5TJZwEoa7cSNvV1LHMu2a6L9qtZTa3fEGwFMPHFi7k2Jm4fTyhcR5mR3MNstPcAcUViUypcHeuszVmvExRUf3bpW",
  "key41": "WAnssmk2oFURQbmh43q1faDhdGufdhwvfordcsBphQhstMYieD9EN6qLXU6qnNvuaNpsxa2jP95r8xJwakeAiEb",
  "key42": "5hLZJ76otmhDRm5ZLb5ALVBdoLnpGHduKRseSN3R6zDeE1vG11iRibERSuLmLBm86cuHJ8h6p7s2EkhCeNKDYzKj"
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
