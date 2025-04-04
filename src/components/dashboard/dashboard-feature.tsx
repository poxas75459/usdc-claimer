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
    "64ujGqGQjuM3eDttTkeoXien63udYuR9zNY3v4vFfMsLVipkSH888uKoH2KXEnDGDJ4iQCq9WmVad3hFKBbpGiue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3evWqXoESpnNyWYnC9x7NK3nQ7hJ1h8QhiHSr7ZEoK6sTr9VZvfVtDWuNUJAmnuDPs8tqgPsaVNDfkrEiVzfQAed",
  "key1": "5wkiQU5JHH9ksA85Uxoz35Q1WrHwVev2zBPe15kqyq16YBa2V8RmiRAvTm2RGp9SzXrFPafHR7a2AE9Tgoug9kx8",
  "key2": "2ZMJuUkaaTs4TkQfWCRhvkJrmvki4fyGAVgNCtHG9hjiZENsDGTyYorTkRfQM7LqYfh46XvxmiiYH1rsHT8EubiA",
  "key3": "2CvoVH7CEJwR86XxHwBAyCq6rh6jZpR22y5XEaDHVPSp7yU8PXxbuumXbHPqYyj721tgGEzburMU3vDKWhokhG1n",
  "key4": "auXKXAe687oGkVzpBdJJjN4fkRpvnrMYetJvmURWwrgsEY1E8ZjDHs2iATSDArBu2DsKHkNhaiq8y9Y8VjnkvPv",
  "key5": "4fAdvs5W6Phn3K6WhPfwQAN9GA72GwTUtB5rXuTi8KRPNTh9BcF9neSZHa7MepkVB6fdDY9QvG7ZA3DTXieG4en6",
  "key6": "5ENeXM7i4UkX1s9LwDFLR3GCTgTetRq9WmucnYSdNudnYQuiYyWazTjMFR5fDfqQcQEW9A4X3CeJ5fkZbFpLA86C",
  "key7": "4ptUSSgrNCd6M9T7PyfWMnN2FwAyHJg6MjwN2RbQd99gKm7HJfnGMy1ueaXERfi9eekZqf3ka7aweej5mBzrTVcS",
  "key8": "3y18GHgaxcV7EGHmsscn36zMgJNTFQPkjpcw7bGsiscQQWUEkP6DAoPxKS3BsTXbqVbyzH9aBD5fUxC9gQUWTC7g",
  "key9": "38XuLchX6vwYdvztF2tSkvU8Q8JFjwdbAWmgQHQSKuC1BucyrWdMSDUuMaGRMGpJXjqjXaLHPR583SckZ3iKXaD2",
  "key10": "2a6kyS9RjYvf6XXAd2jmug4pg8mrApAGiepju6Micm7yfHgSmKT6DeSstAvaCNQp4khJjib8bH2Sk6EAgd5cN1ER",
  "key11": "by56JnABGjpuxi2JXvd5jZqjBzerQxoyUwNcmesMamVtVE24JyBxMfT82LqbPdTns25zXDpNBtNApjYwFsmcCTS",
  "key12": "2QbYJ41ybhfrz6dva7GruzB97E6XQjgkP9rUHZLaatvsLF7jiagiXs2xsMUfQEEMFPJ2rJadppsW8frvsGveUgys",
  "key13": "2HtVAM7nHWNoPQn148HKiFmHXQjRmDihaYYAZcgvP7wvgm6EUDHHRpTnXZQkCwz12Yzm5ketQQ4WdcD2L6bdxnVP",
  "key14": "666aeXnXmrFMqzLpdgEe1h3pAtCZKwjsj5N2npPy9SarY4gZF9tiF3kmrbzLXQHhZjudeWPEjRPVZM86Xsth63Rx",
  "key15": "3cnJVHrub6TBMXWC6uojiunyzw8ZJEz7DWyhdTSujnytY9xG1jvXfYzSfdLsfeV9jDLsdaGcaWJCfQQ7yuWBQBHn",
  "key16": "5CdggW5Nf2uV6GbEXPtJdonR7AamJaik1sCQ3yoVD1oK3B43U5jwpX4mZRzcaYXUCRPa8bQeb3kYvV9MKheUi4Ps",
  "key17": "3GHVkmkUedPb3yAzBKo61bPnVqJUqhLoYEZ1wu9NaVMADJHuLF71BHUbZGCqa7NdbD38cva8U8w8fLSkwDXHua4M",
  "key18": "3C7vGzNsQooVC4QFkoTNwNQScg4gYmY99Q1DKWDAWbhuq29vwbhxSWH6Emfe5NRhGG1KKow3v7nYR9Rn7U7TkNy9",
  "key19": "VmVt2cN2gfVKksmTaF4x8rwF3jPFgeZThE44MKxyrk2F67b1LQ24TWT2ZQ94QkqHvgyJnVxuPdUMEBzTjEQNp7e",
  "key20": "6rkgUAkcL5du4Fku2dpVKuZnqwo2KAry3owTru5AujwefsxirPhAy85qS3aoeyZRrXKgfrTT3PdYbVQvAT8CWLJ",
  "key21": "61VeuSkwHDdtsYZAuU5GwFdM7itU82J5Lk2XDW6WPnQibVavkYFZwYFazGvd5X1DKEnSTRwqnBBEGCcb7T6P8LiA",
  "key22": "9cPyNeBhFVRM3iEdDmpH1RZB3WXJdyz9WjcJ6dmRzFBXyGKe3LfbVakLvsdgwRvpwfsJH1RJCBBUtjQURumtKRc",
  "key23": "2kLjBSGK1puWHY54GUuf8n7jpGuv14mQZj3TSDwGW1Ln9EEv8fTwGNd2mXGWn2veBU8e56yBAu6dZA9YS8aQYTPN",
  "key24": "2874UjNhnrsw4tgb7YUpMxGxBRsYaEjgtQvxtCt9Tk1uKremAc3bPkD4zPt7uuxbVSFrAKP3bKCJpmWygBvmKvXb",
  "key25": "EpdW2jerUR1WAwLw4AzyU9jKo9E29Yqhv8uE95woXAncDme3UfJ6LeHfZLkt3gsNYPRA47ca2rMbiPL3v1yRq9u",
  "key26": "67drv9LLqhgdBU5oPuPEbNiWibEbJS4WDjHxfPPG1yx4FbLK472pdhYN6qWH76EbhQAnqMHfP3GPZmcjLhD1yboN",
  "key27": "4ADQXQ4xnZ1AyfFEr3EUYuky5VfTEpBdmhkrydJKDj9a7dc5tY4W3rxDzJajfJ3BaeuhReXWuCc3ULMc8QSvGJ75",
  "key28": "45VGUHXSEt1SZ5K8kwPuWsvRjT7VitapnGHrEU3YFrRbBUWCMixEsSfYvSJHiFNPGVe7fitQK44qfKQbmPZRjK8V",
  "key29": "SL55bk9gVykN6F3vdbQ93ZAXxoeaVuyht4cr39fz8i2gnsWejqHnY23asdh5hPXqSgFjCxq7hkg2WD2jEtNcqJX",
  "key30": "4buyi7ZSvBvSXJ8KyMbxQeTZgdSRkUoTr9Y5kuN7xc3qHB1tV2T36dfEb1DoNjzMszKroyHzqaXfPb47577yUAUt",
  "key31": "3mivrYJXdJVXSyJ1XBLLoYr72pvN4XvNiEfWnxPmat2HQZuxWHCN5FdS2MhYTNYFCZnsNtguzAV3DDAHaY4ST6Ba",
  "key32": "1JEwgZ8JJ4rYun4EkWkuBQBHVxtNQr6keQbyn3m7kJvEF88zff1JtVWn2zzAnDr5bVPUjttDxSa8YSSM1m1tLEt"
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
