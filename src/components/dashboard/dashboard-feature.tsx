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
    "2aeBgdJxYXcffhhdfvRBGeUx1g7oXiWDyr3RzLaQnjPRGLWmajAQMECyzd9mSGJsHtgoXrtZYJjzCsB4DV8LwwfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zKwZSpxviarnhNXUSDsP9jz7YHJ7VaCfeuvRpP5bzaaqoNy27gH9tBpiWMY4LXbTNnBf9GBpSaBU5XwToidLWap",
  "key1": "2yEygxFouUdxLJ8MLZpEeyFSMp9sY9fYFTVizE7BnqdobFFyWwrEm6rpN9hgntEArs69WuM8iXa5G3krNeWSSgBz",
  "key2": "5rsXYz16nMH5YvxecxDyYtrsJAZ8WYQWAwojzV2V4wdrALHz3SBZwDTqRjf5Kzn1Xr7zoKqLRBgegiUtbF5xGTGx",
  "key3": "UfQYAqGQ1yGPeo2HEWE9iF6EtS9qbttzQUka6auXhXLqArvP2C4EQ51x6x1MawFf2QtAVB8uWbTzrvkpveUp4B5",
  "key4": "4vmCFgtDk5PZ5WnR8baufk42MzAeXXw7Tjsc3Cez6QfhT5cixLRpeDJhJ8dcqMHcebhGeiPr2aedy3KfneMC7aPy",
  "key5": "4xswUAJESHfgc7yfqrAhw1UF2EpaU282z1sLQphRcAEwGJ21b6Nsvy3hft6Jnk6ZGf93JCZSYci92DKRGBE487HP",
  "key6": "2tbp7QkQGBDMSLTMYfDnp9XQBuB6gcG3AfF6H1UhcREWN45siikwnbJSb2BdQiApCaGVHCJdAhyBQ2foWzwTYXia",
  "key7": "3JZ5PkFgBdcWjFpVD6Fh7wH2UfTmY9pVuHB3Mc6gaRdQgxNk3YfA43bi9p9sUQkn1uWHqscyrzCaxwwcarg58DAg",
  "key8": "228im3Mo3VMVX43xrUgG5kpVmyPZsa82mVL5e3evH8PDHy8wZRsHcSixotfMomWQ2MUD9xWzX9M6ymFeMKGs48Wj",
  "key9": "3dyJf8kNYXjTCGqVRAQdKY641DpEYqVkExWzqsUYqBLPnBfQPVf4XKqoqvHqXdWXrSocTLMx5JDbR9kwKHZtXv7X",
  "key10": "3htcdv3QqqiU236w1Cd7FTM5LEeBM8kdq4Q6f5ZTv6jn8gdMWnVV65Has18uzXcQvDZ9eHikVBCnmQsry1NL4D9U",
  "key11": "5JWnqrJ6hr8b5ioyUHTaBcMBboFfrBLQh2KqFgX7QKb89p1F21TRVWdyTMu1f3pXUfaqTmkYrT1gvepxNhnnNEwd",
  "key12": "31vuXzag4jc7WvtCCgUYDLX4zWyJz6bbFaAhTotGqkG3JmbWw81PkFatmFGN62mid42Rk8FoDwrxFpxSB745iXm7",
  "key13": "JkJtyfAzStepRbs9Nxri8pjYvzU8wvfNiBnYBofGNyiE5CLRT1JCzU4hsgFavDsi6A63uM9gQBXvFLqeVHSEfW5",
  "key14": "2xedNzFkjbTPqDYXxUt33Z9e9bggbR4KqFVCjMmWGfmxWSghoXPQEbHvYss2Ek7gQFUkcvgSY5ZC7f5iHC5mHGhM",
  "key15": "49be8Sb1EorbRKMddJ1vcvw5YubRDcLAodpj8rn7ZxvZpmbjWxcUssmMWemQvbTRQWeqeypCqR3Tay6s8hY4gFT7",
  "key16": "3FZ3rSTinexTBsdbgeesGP1TCv2fuJziCevgdJaYv3RzwQD1B9UxWk1SaZvTcKK4PQQU7PyK1S71rW3giDgwHypQ",
  "key17": "2BAVLh6EF2HRCfGeKUrU7wm2qWocZuwWt8aAH2DjEqSbFtQfkDVhFWPGKSNzuTQJt9wFdWqZs2krNTj9AbZkezEv",
  "key18": "2ykvBSdimfVZrXWyBkdjMUvGzf1KFqZGhSs2ndiCjX5oHx3rRsW3kqvbLdRUwkecMTWX9Z8aUW4F49JoDsUUNsLx",
  "key19": "ULgdU2ArCMNqwAoyUiTuFT2DhP6Te9VE9QRF7RndkoUt7mBmUCR1XHbGwzmUzYd4SLTgUkWaAHuscwzxCwyUhZm",
  "key20": "Y7vXtAYDxvD6S29tfiXBRTy3CGnZAhJAAWz2uQFwjvixNJWe7TmmwmUJJPCxgXjrk6BWeBRUFo3XWCYHjztmHYT",
  "key21": "8PrqLRHBr5wPSi6hNeKddFSGB5EeVwYfMDt1C5wdaxFmxhY7VMRaWcHrggTvYGjJKTwRyJEmvdzwMEgxLye5Lbk",
  "key22": "4ftsdzvxUAfkGJKKg9e5NmTPGvKwpp3BXvMG79R8CCTCqBNrLrMqsJqTj5vkNn4miLDvW4hrwuYvWXBXL3iEPVap",
  "key23": "44YTX83NeNJ1qN1M1BH9kraNscukgWsrSJY4nPxyhw5e5rgEosCqS3ZAQWmJu1xTKb4RQJJQBdo3pDPeFE3RVQ4C",
  "key24": "kRMhJgWq3PLNrCe96ZQysoHota5twSDXMNN4SavigHhMDsGGQmvbhrnRzQ3hKpEBHmShnyBSUnCv3LMuHHoqKbS",
  "key25": "3JskYBqQMxR2pX1K3gUerCv7wYTeQHSDHZrzKc28eEXmARuiedd82TPMc9728vZRHfQzFYk6sT9iYwA7hmrMCd8T",
  "key26": "4d5n1HhsKbyoSBPRwoDMGGfLVWMBCyMMiwDnR6f2KXnQVoTmYRKPBb7d6UHmTUqxQG3scYMsBn22ppFMb8MAqELT",
  "key27": "2Bdx3uEPTkaFX35S4Ggn46p4tA9XoCphrhcWDZB68zWHPhj8fW9F5mAVD6KNsXPXzLkLirpyyQvNj1QXWeyogwha",
  "key28": "uAw4GR8SZ7JbuXPYBYMAiQ65A1cbjAT4h5w5vZ5qPTQiBgFq2FR4kDrqrTsmKHGz8gNcEu1VkA9dcX4yizvNcsX",
  "key29": "3T8M8kts3YecsJ5S9UL9xax1hb1F9efUosXuBEvVXsUqzrHij6xBbhZ4BRp3vH16kXyCnDntejFt46dRkw1p35fZ",
  "key30": "5rWcRkEgiB2wFYDDtg8aewU7zUvZvKKCo4swoSzJmbRpEbgeGWDvx3WeS8MZr8FkXQ25q8LjEy3ta4AxNHvHiZCN",
  "key31": "CxyxyDWE8tfpseK7UPMv4BBm3wL1NfK666T5ovEyDg2JUodJX7Rm7fKhLnzHdcnWVhZpbJKuFXuW8KLgc7FKWFk",
  "key32": "3Ga4C4RptRVcnMKYgj7rayDE2GPYQA9nDkwNidPSQpgKpjt3RxEK7vqDUjMD5MyByWD88Zow4vW7gk5uLGSh3vd7",
  "key33": "3SMCXf3ht69KUP4CcaoLfHK5PTabQXzEHAuT6hSVMV4VbYthg3nhjupw127GCNZP1Msd2W8WA88Pb4qKMiScDGUm",
  "key34": "1SC2HdYkcX39cTDhEYyNGMFnySf5gR4guEfcRnnVY6U45tpUTTVieehmL4dHCnM68y8CXFRMKnk56cyZ4qe9Koj"
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
