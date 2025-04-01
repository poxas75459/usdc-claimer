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
    "3uvhv77JSfz7Ztu3g7Yr7V3rBMkT48n2onsaa9njGfxaa4d1uLavbm7gjZqrQA4yxZSP1NXFwFUcmpguGiVRYUna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58kSChYe1jfa8XV8rShKXMfJyZhkwPYiwuez1WLUVsPdmxZEhUvH27hPM1fB71V7Z6Le7EGCwqQpKoPVQj6nDhem",
  "key1": "482tCinmnShUK3BJ4HYVCKrNydL8NLmUweVdJ7F5QBgRAfjwRE1AzCWKiAaERYAYUtkd1jVJrr7GFu9s6fAMtt8r",
  "key2": "5XCcZ5Fmoz4x4DQv2KkDcEc5KGpZ9w861o5bmnbxNjtRPAwa2RPh8MHYQkJjVeMEcb4X68rLM8YbpFncqSF9Bknb",
  "key3": "5qzMbPAZe9phKQLopasneaNDRTkVGo9m8aLveZvRfAeGCHW2Tct6ihizfcHCkrgS98Tq7cFZgHttNW8FLV6abCJo",
  "key4": "2jANwjMSxjt61DLXQTDhB7h5Km6qahNd7PA93S56S5cNsWcgySgRfYpMZGBcEgUmDuasufCMubm7YzfGhhx7Q2uC",
  "key5": "2tvRtfoHLazn7rqiYAHTdsnKDWt7dAazyzdwKXAz6LpVWKJbsXRR1rLkDrJLCRxhyfzb397AN9oJfzzDYv47iseu",
  "key6": "TgQeGr1aGqpzTz1imzWk8yK2sk44GhktLd52c4nv976TivVpCK1otZBofVho2y7ugkvQkvNZZVwZDhxGntdNFPt",
  "key7": "3TE1UpZNMY9g6LM15aeVGkL9nzMjUjQ1jWUfdSGEqgripwWzEK88cA7w8GStFipUMbmevGR76TsnTrJZRYgqvMcE",
  "key8": "2JYgz4FNLqMWM31p395mb2x1Bi4DyHzxrnXaqFt4Lr3bxNQ8kpKrTecdz9PLawodamtbeBiePSqXacCyA6WAdAM2",
  "key9": "4fUpuQ5stTCkfLWZTrc578w37JKpXdCAUNvq7cbBaLWBXR8ooE37byTHjG1p1YnVPQhwRun1gBJmYkw4yyN8pkb3",
  "key10": "5MkJDfwkmJNy4xwVoSSb9aGW8MW7Nhd8HuQsRCF3NW3w15YkriogCS971DhwNJgcarfVqggiAU8kPieiKqw6aWWe",
  "key11": "qMdJqrKRw14dG6wkQxhC9yLjDFLJzq7BU7v3qL8ADK828v6u8ALAjb4pLDdZf5Wv7VuPQqdpLzdgB14G9z1Ji4m",
  "key12": "KHtz8seZLjuQbdva5cKxyZnBap9Rg6EdnUFuDGY6VrPrjNVKtuzBJa2WVKQR95AWddhrzyRAb4ccdY7QqoNUQPa",
  "key13": "2LzvTN7pGrrdHofMq5Z1Hx6QdcstR5aJdo1cqkGcEdpkcjfds6DxDqTJAvjj5zNmVYcWn9qp4niqwwczMKLi8rYL",
  "key14": "2YSpzimmMcmdZxcLZy2TbTVhDLM2978m9B8TcgApfN1asx9C29bNwDLevU2FxzWXNCouNyokkEHBjk6gLdCTpVSY",
  "key15": "3HFsnvbAomNyGLUBWxLShXm5D73fk9zST5PY4RCKvnWn7E5yG4s77b666Hts7F2PKDNeV6RquA6ByLT3XdxoEsr8",
  "key16": "387dFqHwSxdvDsBDcKUNnAUv3rgrb8fdVeefAadPtcUCe31FdS77juMBmqrpzaJqZHUrFpKNcGPHhM4xgHvNXAM8",
  "key17": "4TXKxHmj95hQzY4DD5jDGpYarukUkTU7F1Ls3nUH2QNiQFSEy7gbr1edzm6NacHzQAHvj3QVBTN62yRscMLX5aUi",
  "key18": "4k6HRbb2G7g6nKJNDNxF5qoMaVq7WaK9XLJr6sbEmzXSnUWcfeiWv311ZQNoUorga2ioAA4roJfbeer891hyQzNw",
  "key19": "3tEUapuCNyFNv5GVoTSFWTKBcm48sAxTZRVVumpN6hFesSWQkzpjyBcGJ5LrLCLxqhMrHr2wJgTEnaDExziRmkP",
  "key20": "2sgnmBFqUvfbQ9nGEPxrWqNuk6zsFXQ5mR4VwqjFx9TxDZFKKpdecDiuMgAXXkS1yYYLb8tW6TbbyZwtQDFjf3cX",
  "key21": "3tNW2LDYVCyogopowhuZw6xkSYjsMGEWpfQCs7nJ8M1RnbToQJc1No9a5D9p6UgvFm7M4NYr8jvXZsSAMkDaBy48",
  "key22": "5Z2VZVoT44Th64ri2CKWESv6Ajd6keDSJpVFFAryuifNYvXrsGMCyZ4czSe2VAfRv4b2WCGpeQf49WxkjfcMxYuc",
  "key23": "5tk5qeRHJgQmi3dWrqE15BKo4dfzUvKs9CzeQy4bYMEn84Nfhi5YunjRHeVHU53wLhW4Vt4WAcAcmHa4C42Fr8Co",
  "key24": "51z64H5bYztHZ11octzjip57sGgYkZ1b8XvxmqPWbcoJGPCSkHRTo8mvAsqh8WAdvb8zomxSpwP4h3PtpSngTHjt"
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
