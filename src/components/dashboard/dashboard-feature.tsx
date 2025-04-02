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
    "2RdysqGeEiZUE8PHsCrWUTxnLAVYx1r6BnSLMWD1iQzP24sxmmE3rNsQvDRK8JhzHrHrPZSVbJS2ENqtvqVh3gEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AXZRGSJpFda3LfMHSNerJgvpv4u4tzbWt7efAYBbDxDiiBk8pVuMYQdQi24MiNt4qZWMV2uWXAh9dB33vJCwZN7",
  "key1": "YH6XUcFJU9kMLqgqbiTu6nsmYLefWgNB5KHftcEs2Y5hwMHNSXHQs5Cc6n7ctGxFcJpp1xQF4yYdMEXEom358c2",
  "key2": "2BbH8UGyQYHVGEsQxkHD1wufatLe78FCBHqddoUSVENy5tE52uELq5QhnjGc2ZJo6Ce2FAWW3Nb55gQmSBNkK2gf",
  "key3": "3eBnAUyTX66oH3TTtkf3qKfTsRCD6MH1BbLTSEovLWjU6wmFUUWrYvAW3v5npzZRi83X3YNNNaeJyGwtB1X7yarr",
  "key4": "5Fm52Sb9GysARUyMudAvXqtQULmSZex8VCkqPCAPB3cRVBHw4ybV5bjzsXC6xk6h7sS13dcunMfuLyeFPsbFhwju",
  "key5": "57BtKBdMukiNudCQdHTsbPfdycePxRU5FMZ2tpaJLmpN1E2aJenLyhPD9Wg99WDRx4w9FBt6HforUW9bKBFpDFb4",
  "key6": "JXn7m7PJAL69zwbtVmzcKxMoA2FL4WoYaMny52LVoXbXoQ6ZACWWhfFBJ3x9VTxpFenWyPJiu9Qo9BLdZAWM1MQ",
  "key7": "8L16jRzyiUv4RHD6oEt8pUjMkN4TXCgGpp6XT3T5xFdKko53dywFk11foqnd685XyRgAgfaSgTBqf4EasLjb8qi",
  "key8": "5DBeXtZgSPa1uLKAzNfUgDAHGpbbrhz4ZXGKwfW6RfZYREA3MhimdZY1gQx8QhWxPhbSrRGi17cYzrbgojj5rKxc",
  "key9": "4HA34wF2kJgj3puJtchZgiYaHHKzEmzpjJ3ZrjG6dC4BnuGW6yux4LuVQ5VFh5usCHfZz8G17eowkbr3ktu697cf",
  "key10": "49bAzgwFHQiDg3yqJwZtR3d2udf8hixEaz7LNg6cov6r4VhWyK21wDe9AHQ61QVEtiBYmhAWZDmw8uoaaVRJhQDJ",
  "key11": "RS5uig7ZUKVt6Qq9BHGP2KncGdzAred2CXPGUYvvcM76sUwwihXLHn8Bsnqhxf7hrgU6Gn6YjeYrrgScqL3QAmW",
  "key12": "5JbHKJuPqLf9ofWNw7VVEbXFYk1VZgmJXE8Wdg3i88RE6sqHLqMTHUqP3qZAi4ULkeMXxTRXp3n7dxxcNsw9pBXR",
  "key13": "22S2aWAM5gkhPpeA5sEYDuNvpjn5FjUqmM4yUNxAw4dgMpXv4kZeoEvofKJBr8BBAkzCiKcyGZcAnXC7CWbfwefJ",
  "key14": "83JXHqB7h9UmoLhYTXZfYS7jv4Rc86uoFtghiM8bvnnBdwjzRWrpSh3KUMBfpQUTShUX6J7zhiLCjGM8Mmn4RJB",
  "key15": "2MLLnsWqEsnZAtVJuPKzRmJiLSw4TfmqaYYJirnqz5JKzyMYCPnpx7YbVehn3TcV7rHiBVatmojyPsMVCRkktbjn",
  "key16": "5w89ydHvgpVfJHErxbqmQrMRkq5wTWouwMhMan9F3xEGU6ch5oN4g4u3cWd5xYuYn84e2kY5uApiqrC1Pr1fuhW9",
  "key17": "4wtHi8kTwrNx1c32VPR3733GszQp7FJFGAisFkfaFmuwSGGtdpo7SqZdJzJHFBZgJfmowCNNW7hS259J3Vp3kLWi",
  "key18": "5vgc42NsJxiVWpjcHqvjnKbFLqBMDGH8u82VnnuDSmfgbdyyookU1J6PnD2e7G2fVoH1HcqocT6oxVNHvroHVx8Z",
  "key19": "fuMBXEXge6muPQPqqEzi7ARaEgZSrYVRGM9grMgGipHoCAetBzsqUEtJnKJjqTsAsf4Yqwm7mv8k5Mi9gG6naVZ",
  "key20": "5assEhxsd6MjM5XEUdLKDL3r6fiCNBp7BniWCAK2HaRHg8osY72Yhjhvh3uc6UcGdvbMFoKhyWm24dtu9A3NASDP",
  "key21": "2MqrMAcZdJ1zM1wvKHS1i8a2bR5YnYQ8f3Dg29wZ2CZDdgiXSWLi3xxPGWG3iYZu5zUTRNpYW6hrxhV6KVUq4PCv",
  "key22": "3SB1yjS3qGZTBakSddMbAmJaJeRCBxYoLLUvhHWUAQxEd2puXpxcnHBRUYiy1vkMou29UeFyoFF2FwmHjNycrsDJ",
  "key23": "xMgCYJUz6UHr6LKwiHbh3awdZLMjfzyvcFCkm3fkCeYYqAesji4QVQEFpErPc8AerSAPaE3r1nwayhWbMv3y3C7",
  "key24": "TaugJu5VmdiqtNU5Tw3cHVMnBfBjwAXj43tGSJ91PfzXCQuCxHcnVBVyXWTAmbC9uCCyhhiAgryPExzrQtCKm3b",
  "key25": "kg4sLT4vRKZCkn1sMgyJHkWkYgoPufZWkEet5Ks5m7a9ya4ZHtA14iMgt51YMKy59inuuzrf3GPD6opvo8BQHYb",
  "key26": "4tHY4DWtvNGRKF4hQiSEzsMQWcihtm1kT6qb9Msfoj1Jtpvcj3aDjSk6YaMMvxB6QbFUJ9kmFCYb2h9jyzAeAadq"
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
