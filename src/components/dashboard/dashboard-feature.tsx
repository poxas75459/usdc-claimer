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
    "2wiJs2kFUcFsCHmidmkWopYXdu9bLyiuq9mEwi5QkLvgC3UZ2njTetDFhopmRbQgN2vRsuKtcBfJ3W2gV8f8A6Lx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s9o936znr6Xu5S9yc3BshYSkEG5WofAG3hdFCmLQpd72PWdLmM1QeymmA5nPZvBbEfj6eMRGn78ffrr1SLsWpv1",
  "key1": "4MCUh1pmM7J5PXpsggS8hBpa2Mnv7Cu3KouBuy6CjwER8gz5y5QzQtV2Q3R2TEEuLvZ4Miyoc1cLWnodvudChGKy",
  "key2": "MPTcYEWkp9PNdisdyfRz2bwSPshPRtAtY5snHjcS4LY4L2JdKsNnKm4y4aeZ7GWA4NcdycERuZnsoWdua4FFxrM",
  "key3": "31M9zBNkKsKEQGsUM6FfQthx8CGHLE7ASeiix7FLrEsbrqqtkuXRk9Gj5R842SK9w4uB4m8WkaMgczGbk7okvQY3",
  "key4": "3z4xmcJVND7rFYbv9b6t37MdB278W46tqDmNFRdZJDdQxGn6BYh1dZfk1giL6QyLWimnfq3VqDymtssmr8a3jjSt",
  "key5": "ySf3aVhzQj6icL7Mh2HCprpgcjHsv5N89odd3tqvgyuuGUAy2TfG4sR8Qcyyimrt54uqS5FFBB9wcfvNjLTpdoh",
  "key6": "wTroNRPMEDzykeuo9QhT9RodTUBZvbcfHQ8N6vKRcRBRa3UwbFB6wfZ72PFi6NvmNXhdgJphix2yt3tcFqQGLsn",
  "key7": "43m1V7RqjHvREqdDcMgQLMAVPJgkRodViWQYz5T4Du6VLvsC5sQFNHs2zyTbpbxBmwh1XU5rzpDxip2T7QKXiSxK",
  "key8": "5UhqEnjc1YYmzysqY2DrAp9gG3HEXt8jU1XGiXd7BdHefMdgYbxigdJ9GApjFmL2f5Adf5TfmYLWpdimfi4F9MBu",
  "key9": "5n1oBsuKpkvsFiojgtmnko2nUAqtEFHTXuz63xdvtwVq6ixsFTw3xD1EcN54ucf2XazJvipu9S95rE9UvWtXM8E6",
  "key10": "3MgrMt4yT5Hx2gGXC2xE8ANcgzjSUGj6nucR8NZwptur6te66xH3dHCJjtd3aQRbToEivC9tirBE53Fjrcn46hv1",
  "key11": "3JEVHyfgtQAVuNKmDbPCfAfYkUe2koVE3U6h4ETePAUMjXpVUATQWWe5ntH2ncByuftFDtdamkonBiUWPT3QGwfb",
  "key12": "4YFg7TkhB3EyfoJpio54QfwK8u6WFtV4RmafJVu2Auji32zQqWf8dtPSiYgWcKUdrLgnak4rMBUjQGXajyENs8PY",
  "key13": "5Yi9BbrGWfHrcM87jQ2hXvGN6RUcwhijjfUXJjTBZouSTvaVGafWSdLWkAfwREXehSrHuQQn2wGygsewBrH1VZeS",
  "key14": "5DnigoPQFrVBudq4jXy1BeKriYfb3CBNz7mrikvNDMx9ULsVCJWHYZYCfQgkFCHSQoudK5g3PMPuZbkMFMjSWH3m",
  "key15": "5dFEoiEUhNSdWhbbTASZGXpq7sEqfw7YSrX7LkjFokFMJZQmpS8mFjG8ZtAwqDaNZR58PpKxLpyYBfe9DNgBPL7",
  "key16": "3492LbP29rPKAHTA6NMq8WkSQb6a8DUh1m9a8z9zNfw3zbpk16cD8QkGUzGhyCBH3FuGUCu9UZR6xwnceiWMJC2W",
  "key17": "4FSHtvaigkQgcTuP1B7uihpEc83PY9uEyGKdyArsZgp98xrhWvFBqUMcgWAMAVzUBUBB4MQE45yCgKqCwuu7NvTr",
  "key18": "3qR7P4Ytzamjqr1Mhq8A1YGZFprmku1czc19KAZxbJUurVMgTv4yVvYuWZ6dKNn5mYgK4LAgiQkxnDxFX6n8Goqv",
  "key19": "csurSCBw1hEeepkeBUVZkNJRve3NYsiw64nppg3dsx8vtHr1BaCMVd82LhSc5aaJZTBXrU8mM5fcFXGx143xugy",
  "key20": "62QUC1eqkaa8YjdFrrVApdRVmXaoYTNFttrcn6eCFdbbMYyv5YsWqCkMRneeTDBteUhTbeZh7x3foTmR2CA5iEzi",
  "key21": "28Ae6WoTXiCvUrysaVgCg3RHPrVx4TAWNVLcJ1VhxenhKukojqEkP3h19kkNafAL4CoNYcW3yd2kRoAkdYja1AwK",
  "key22": "5nkoLYf635NYQ4RdURuTKwSRoYA6j9GJXowbeJNDpiCUZQmnJdYVqogQLGAuN6izVAw3ef26DJUjnuezEjjsTWY6",
  "key23": "29p9yvPptbSKDsNhtghyjV1AxKJTaicW3XdyidPL5dJirs8peWi3azfELcAM2LMnhsKdcNZbeQathrY3wu8atTTg",
  "key24": "3WLENEe2ojsvg3cM9LyvAmHpSfuTqBSjoYRQNhKWfz5PabhJxLXVD6A1NMyhkYty4LMCvqrZYSKEvLT476NHNY5C",
  "key25": "4JkUGrtXKn6p4aCX6ZfzFhKE2kU95CCqe2c2obHMnCwQwEgJF2BA5nWLuHjDy6FxdnwspRox1ZV5gDmGJofrUkoa",
  "key26": "2PJxxkHq25mtBFhD6RFiS7MigsFG8jXP2HvztzwksvXfsNQQNpwiwEmfUfP3xpaJqHcpejDRyGBGtNxaGMha7vur",
  "key27": "2qmW3o7YKc77dJpLzwTtteQ3JSuYDioxHonsVEZo4N2DEtfmzHSsLwgHSMxuZDPQGUSvx7g5JaGzohtNqfEE76kC",
  "key28": "58o1aPA5ADZpVggzhUWNb6Qxy9eBeS34hooSkhyFhxr6imxnR1sTR1jzH4T3EDNsy4zqRHD4zr9oY53gipqXFCGT"
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
