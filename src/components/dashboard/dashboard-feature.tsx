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
    "4ANDQHJseDjsnGWCixXmWcJabfACVppsCBeMZ5z4AaiQ3MD8poemK8G9dA5nfSGTSDmxatV5cKk14uL3M3K78Rp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WWTdiuZxHjEY4sn9VNrhmTZUCKSyXg6RYbpfkoAtCagQhL9TqHxtxLgi37kYAgccvJneqKb1e79q7ZvYC8CGBuX",
  "key1": "574kfZvLokp8Gpt6tqWA8G8qfnQxLcJAgL2mj21EVzfPrbMgkkTh9bGosZQ9VerxMP6rduxXqDuzxsYxiKJRRp1X",
  "key2": "2bF7awhPUviA4QMeaaPazzrqmNRauz3aZ2sUcVMrSTk9fPxNdKvnvj9wVfVWEQ188iqbhhyBBbbgnosfPag6W4Ao",
  "key3": "3DEWXgQ5CbSBKdQqHWakHLsFRLzeejYY7ws3ZMJGNGoL3w8jEuweUr47jA6jhT8oG7x3eyuSatnorUheexUSUYi",
  "key4": "5NmtfJywEv9Z4VN8yeRUwEGNpEUL6sg8u22w2rBZeu542J8nRfN5aGJbqc3q2s6vTSNm8URjTn9HtWKTrcat1StA",
  "key5": "2Z9vpUWCSzki8bt9ukLe8sKw3TcyEhZrVB4qFia9na274Gpxm4n6b44EmoWT2jgPZj6iJRziEBNepMcY5YnLd7og",
  "key6": "4cFATBuEjnLAi6kcDpNUNFewuVBJDUCL7zLyG5GQAXac62g4XNaevtYQ1Dqi8sJA58o3DctCcFXgBZthJLZdPdey",
  "key7": "5qmfoT6Lis7G3Y5TYsTfkSPyayQTzL3mVwdDU6qgFZWNv7cjDAkXtyTq451txwL4j78tNCiDWdjNoJkqFDAecCk6",
  "key8": "64P8NvTe5vw8JmGmWTQSaRQGJEqBP2MdYN9u8NsokuZFgXEpFRKPivPiQwZmpzoW3dpD2uLKXvGxE9YNH1p5PyJU",
  "key9": "PcPitf4hVgMkkZ9uMTgoxED4pPGMgGndKD5iEy6AvR6UEK6apkqeLU6Jy8bcPgNNK9XVsW36tBR3VbMUCbapBUW",
  "key10": "3zcAgXTDVMTc8yrVJLWphe38LUz6E7G3EYiXXo8TK76NiHPgwrGzYC88k51q2bSk9KHXMdFrRdyJkQD13Dy7W8Je",
  "key11": "3PSTKTde5RfR1qzn7cJktnVtFAdGku7FCNx9tr3UHpnhigxLPQSLqZ2thtQurveCkc4BmjitHw7axnZvZo9vQfQQ",
  "key12": "2uYMHyfA6qPco1hfBUrSzTxLvwZMi8XTuiE5QJbLjffaUbGN9wknwtu6Ukf5GNcr5Nsje4xcJzpsHaaUb6HjmKuL",
  "key13": "2uLd68Qz6GKNS9ZYf86WjEhLEjZoKacadWDSK3Pn5PKhhyWaSQvwaZ9P9sNK2Stm6rime6V1XC2mzgLXn9KzZsJv",
  "key14": "3ka6TPYvXBL49Q8pASTdxBYe7KY5HykV9ofV7uTgKZ2MFTVYrnv8zhbF649PK1QBgfNuGzH8NbtSUcoTXfFK63wB",
  "key15": "4ALXLwT9a9qNazzfJzHfXbxEjeVu3S9guBiqxyUgbACX3tjnQzQZmYp6UGDkSgfVSBqFF9siS3KJuD191A4Y28zv",
  "key16": "2uBact9zpHzAYcyJ2bucjFskhYefwVFremnVfsUdoCoEr32SuQ9gffBN13StAhSKw64k41sK3r4hFSjnrVGx2d3b",
  "key17": "2WvBbJF3RQPV8kxqNtaviQS7t3vzvJQtRuN1FadgQDFZ9rh3SqfnWmPrEyYgjMZwxZJJ2WqRc4BtV1FSkQrUrw12",
  "key18": "2zcZh7U4xaW73GVgy7hGUXuicCkRBseoJUXgrsLJxsXSMcH8zW9sFUyYSUhK6kuUKeeVNg6Hq6AHUYnQG6T1Uy7q",
  "key19": "3zci2A27Uf9JdVmgbDGp2ECEPnqYCrWsmGD6fh1NqP9g3exmfB93dSd8FQSoAUC6K3GxesvCfQnuk5Y8v4hfbhjB",
  "key20": "4zoGsa5Y5spEyB5abmmK6gvoR7HwjLHVwvrh1uBxL6URyApdK2gaD1fjn9apizXVXsf4WaVjeKsTSUpibLhZoRX8",
  "key21": "5RJ7H8EDh7GBukVhFhhu8GX8TCpgbvAqot7ioGg9s4m6qG81rg7gNzJ6W7St3Xp6cn9g47En3YyQ57yej5MkRkXf",
  "key22": "5pKn39K5Hr2fCBWF1cz9SdWYqSYziBAZY4aUVgqnZJ2PkcG5QNS1M9SEYcRrbuNVzXXsc1KWB1qt6Z14Gd5H4pCZ",
  "key23": "wLwayB28k2EonawQsFYi37iLTEwMaSbGGjJP145PEa8amSrbr3mApeoyVdGxd7QvffVr93wDtpLpykio2fBPVMS",
  "key24": "4VJSdgF4yY2rtmXPbL99y2Fxjp7N9UM5Yyb5szCYLrXTSCqwMGPYFdFcWYF61Bn44Z7hWAUD3jM4xCEFf3LbBBvd",
  "key25": "55KtWkeUwn2vmpvkk1SARR4Z18Kfmtyd713PwsxPsadhbBbTuqhBbKhmPkor6V2ejRds9iCsBdBQD1vY9vUzrfgZ",
  "key26": "3S7SVSgZ2tiBgHPmJxzABVXpiYzn9jk25176nNcotqmFr2bAzN82WxTtWydu3W9Zsbrfo55tmpss6A59chwBtCzU",
  "key27": "639wU2EpvaAjUGdAR8jSg4S6QSybhT9LK8pb6XnXLJ1NYV9gpZiCxWJC1htbXxsM8BjJ1wrsrQJF5M3GNzZT4QkD"
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
