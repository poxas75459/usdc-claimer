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
    "24FiqZ9wszuqjycajvSS9ooTnaRrKo2ERMq7bJ5onagCCUTnapAmkkjyaSTUQNe5sWQRJGdmfufiXFZ4uQHxpbDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dKC285bnWdNFyGsRQoEqMCGG5Jjdh1dG28de3HodYgtis1e5SXesS1HZ2tbTGSX2i1ddkaTfVdrjCgrvUsjvL8V",
  "key1": "63e3nQe9qQYPzp7TwDuAzst9JipiMTyoc9R3qQnkmj3yNX9MtNdMc7fouKgQK2ViVxSC7QdriZpgxYXoDgocDbSP",
  "key2": "3Eg1yPVyNtiTCrXyGuBWSkYioNVDGK1AbrX2ho1dtEqf2ZggsrfczibPndL1eEHjjKx55QTahdGqE7H3XLcZ58xL",
  "key3": "3uWjUg99b5ECBYu6gr1Eze3UKNAGbyrDt2nnAAUPER5BFwT83VBGXX2NpQSUeHssVc75BLgxYLbjGQ9Usy84e7wh",
  "key4": "2UGaAfXheAzVrDGGrhfVkKGHBPaQxJfzS3gD4yPaK9cugcb2aaHq2yr2T7Yypx8gLsS1FKMTrNAwV43r8iMDE9HN",
  "key5": "54usfGpWQEpP9iMjjjp5AwvBgLXdetpry3Emoap3BksdJnakjfgGx1Ge7ggEV7sNMMaf6P9nUyxdPzHCdBb9se5k",
  "key6": "4RNrU71hkZqNLwFPoxKJfsTwRCmga86AGZS7nG8TmhC9aT2iQsJsE74fLV3NmaS7HoDJLs4pXwPSuJpLpbBqZh8v",
  "key7": "3hYAv44jbJmcch524jzh19R6LGVk9YAkKcM9CXAb3iAgP55P9a6f5wfhiWcwHfEgZNWnphifA1TvttXF7xraiHrv",
  "key8": "TuVKWUmtD8SySmCfzRvFu7zZcQvU2QBNNHED8rcS8JRAt2kKHTVizGFgiJxCWHcEnQN1hRDWvkgDbzGSaETdBAe",
  "key9": "391qLkspKfWCssBY4sjyRgqmEBkzBDQVXNxWjQ3uSCsz4hhmeR2h1efvAagKTkW7C3Y46REviaASHHtSDp9kByXw",
  "key10": "tMdny2kk8LGgEjHiqRmDA3FobbVLfth6f6Ct26b7yDRStWNg2vs8T9CGhz3wjADb6aWGALTu9QQC567C96Cobmd",
  "key11": "5fCvmrjwWtkFA8LnKL3zTpvjyGnh9kd8eMSpHNKux7Z7baV1qiw7c2zrTdf9udWm7AbKXorribJTfdxkddma9frA",
  "key12": "3sLPHZ3unnRcqoEJUa35H2mFtWp1YNniv1RJcfnxVigvmBDgiVpUPwkt5DjyMSrAWqtTm41yery7jp3DypSGBbed",
  "key13": "3imSqEpDMgqYb4a4YaR3xLQgPmZuFtaoYrdDXQCZy1UqWnEgU6qf2YtqcR8fvFnPphMuuQYo9uEpyKxT6BGXA6qK",
  "key14": "5JckpABkHyhvabhYfqNFPMQYb7CbWCkrWCsyctTvjYVAEM6ag7HUC6Rmc6LqSecG4K9MsNC6DY6iRVFHiNrBv8Hq",
  "key15": "3jaSfHez9aymKDtECyJTcLfAGSwAezU6BiE5gr1GUR521FKmXVoDYdaJeEAZGsNkVDLEQhnyjouVhyifpqtQL41p",
  "key16": "43LdPh8b3JfKG5wUT5S1dAERebcpX3ccGTmpcraWxDCfC7aPS3i1cX8NzU6c3PduiUYCY9vXRPcM8K8Z1bHkS9dC",
  "key17": "7JVKwnVUDuvoWyicDydP11dj3BZZdN9GtbQiow7qsBznYAxFRhr7K443P9pwuy5zxmATqbYTRCH28v3uCTCgGzV",
  "key18": "489BGrdKrkeb4N8KwrzjGVDVwsiQBhk2Y4kbR5BcFBhBKsEss7CvoTjxKDzUwnFBMNGBaguRuXCyQ2SBe2PfEnzY",
  "key19": "3La1RfR8cpSyx8aXKqEXNnxnAe3SR8GhYAhDdzbW2tbDoemYxPKP3remdMBQoQT29xarH5riBfXmC9tUiL55omWv",
  "key20": "mxn2ZEzww4Vf8pdgGPkfsBZmL9FDKachJoUz6CPBPWK5TSrQNYaz2PFyYVHZTiudRHv1Gpmk9BVUvQQGf7ZzGgE",
  "key21": "2wpaWMQB5eoMxVKfWAgrF3F9YsmsXXBSnnvE3cgfGJmRZMZD55B7LqmGaAzimpBaYJfSqNU5QNtLuWMfyHg3CySq",
  "key22": "3psn63w276Co6fMp7bDfuSEdVqxjjSMu7aDveLFqR6NJbGxgZsMfJX9vzjkRUqXWazJrVTDBHg2CUGwMw6E8r2sj",
  "key23": "2Z3d37TkUmhJSV6GJVK9noWjvGrfUk5SEEZknzPeGZmBQFMWudkEumFw3Ca5iywYrVf8248PhfDnDb19oscMA9F3",
  "key24": "AMj9MCJwez5T4cyGToZGXSMJokbqqunssRjqGZovePJZGQkfm8DVRiHCW7LCxm6hPTQD4GyCwVVkTLksvVUu6Gh",
  "key25": "51v7X3h9uagbQFudDjPjfpbnKfkFst19jEMHz33UxVfBbpVoRwmHH6BJM9wxdi3jiVh2rJL47rotgxqtktANxNha",
  "key26": "2YxNBXbsNjoETyfVJckTBk8Lz1wzRdTwB8qYyhG9NEw6NdWfR2MHspXKcnFKWx4Ns62KRAjA7WocgKrDcXbFbUYE",
  "key27": "BLnVgNJGvSh6zbNvZ8GhP2Vm6n8iCPDaZ8JuviRnGT14b5FLppdFDJJ8FHjbnSK4UKVRHi8S77kcoewaEgTgPVo",
  "key28": "3RLnmy2AJyHwvVDWHVwxCm6YSE7pRdV2BQMehDyR2526toapH5iauhcLej9bn2XmQ2HbtYsAdZZV6Twf68QsTdYr",
  "key29": "5MyxjQsbeA3QsNQZwBBtcqXeagGZ8r75EaMNMhqA5zXPBXetmJKXi3RhZWhPR9R5u7NBXX5gm9MMMy95USXGXyF9",
  "key30": "2JX9u5usoYdVSdQKUSrShjELcQNuikxPWvEbBnSUaRrEX6FCdiLtCRzHZ2Gv7XHcgorr2YkFcjGpuhdKq1XyGW1p"
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
