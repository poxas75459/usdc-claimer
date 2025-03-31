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
    "4axfJFX5Nd5rDu1LvA2PhfsyUtgvxaRz2X3VNaytfcQgHTW8SyZXzdfGHaEEybs7HkmCfCohv6DLibsgEwibBcrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kjAAwYG2zxAYekybfxZGJEVAnkKQSKFRTXaVdRmqDbDz7VznVXs3FSPsd4cjBbpgc3DoT37xc2ygTAk6HcsbJSU",
  "key1": "3DEFmFgCM99pFxw6tCM1fYRCp4sW3QvFy4DLei7q8p63DTMfUQqbLs1rEZkP4jroprhjEfpPeJAiF2Fm47jPF7yF",
  "key2": "Sg3fAbwXjM1Xdcmp9LerfjeYD1eYLUNXvPUt5m1tEv8arVCd4Uk6fQeVt5ynQHzzEwcMHethdWCmssiCw9TeNrP",
  "key3": "PoLtqTt9SUXaCGLGUMk4vaCvSPMS1qUDKiMVMYZVEsugQ61uUP3LNA1XsNLb7BsF8HtQYZ5pPtMNBc2HFLVEahy",
  "key4": "3ZJoMwY6agmL6RAcpmtNWGWMSyWYkUbFDEDQEuXqeQBkwpiMYjMiwKhwuepY5pfNixj5zWKxujz5Yb3irvHeytkF",
  "key5": "28DVVH7iCrQB1PUsjkUCZhaoNupcj66pFZj8fxK3ZuSukVsm8dHiHxWjPnGz6jYzUoSV6UdT5tgsjKfpGY8rGXiv",
  "key6": "KXvj2aWEdXiqp7sm979oonnAedHXHn9K7ETFCsGGT5nLRkLFkNfFXoQN7oNPEuD7dq6JR9kmAuQnpggujUKyhKz",
  "key7": "xJ6mLevpFZQ6Z6seYTCrjaWy71GTVwRrQTy1KWx2gvonqFHKYyrextEjzT8QQzcsfQFxDoVxvJhoEA8N6YWDiZS",
  "key8": "5QygUnHzVCURGCe26LnxXcDUHcoEFS5S2SF42rzVgSyu838E1p7Wt7CFb3znA8iB5t7MjYvmnH2evx8MsKEXKAjL",
  "key9": "392QabWKbYzLX41k1ZSCj2S3pckKEUZbjhf12Y7FAWXnwkaKV6WcsfsdjvvvogmmxwpEZ91FyFS3tjNMGNAPjtGP",
  "key10": "2y6DPHwzQGRy43fZ3SwyasCHLDGuX4wTw7WeZTVzwzCtzTpdPCqCrDqCpdWGHj5iVoTKxtnKY5s7yBwsEszVMcXK",
  "key11": "4dY53FxqukV1oguZEsgbGiYJ6vrif3x2uTkAVYPpELkL8FyHNU5UjGR8ETsdTaiD95CScQot5xeBnrjVKBK7vukk",
  "key12": "3gjwXBdaEKGuMNJbLfjnKFdXi3NBHaW9seGBT82XJVaCQTLV6sbBZWw776hZ4tzKN35iN8PPjt6jG21ZT1hTDLfy",
  "key13": "2XXGhZ8ArVj6K96JXasL2WCx4dVhPSK3Ebe8KSc9u27LnWGdNKfigYR2s4CZmdiB6mrkCQ9EAAHGf5TYw45eUD5H",
  "key14": "5AkvJN963925m9p1bADwjngWXeDdJtJ7NorbwCnjf2onjvrwbWjFiAY6nPj6m8jzH64nHtx4up3fsDkSQHAJtTZH",
  "key15": "tsY75AquGWZKxeVF7iJwkrZVvy3JtLG9ACjDD36rMDWqk1ThDnFwNJcpMEK4Gdq47HKpdX4GVvWUNFaGRbBbNWv",
  "key16": "3xntxFaTiB4yVvrNSBGwegdWDtW1dewAVhsYtV3x1QDq9SL6Jt7DBTJqc2kF38hwmRVhyr4bB2pP2BiqpmuRgyPA",
  "key17": "4PYTDMR9L47uCR4GvayagmEDFL6pLoTWRobcuma887BDJMrc2mCZrZhLCFTbmBsNAppZE5wSH9rSwFBxe7us7f1Q",
  "key18": "5JeRtGqPWW8GYrzXtFx4Zj87NgGkm8BHvHbkHzPTY9sCaEBqMqFYaMQsxBHHFS9yFK1knnhcnafQFQqQuNV9fNZe",
  "key19": "DQw74pdpUMMZ2k5LtWLx9CueAhqNuUSZrxzcmpYStaquxPPoL56hFAfdnk4xFsG7iH6tyWMATyTzneGdb8k16ht",
  "key20": "5CRHNTeDtr7pnPkmnaGRNCDfP4q77s9JinpVGMrpcxm21g8oPeZhn3GmwVyWHjbrnDyBNwzazKPj1hGKHMDRJKsV",
  "key21": "3ESsgaDLnT3YrbY85wnNTmxyZVXe8mMwcf3LqMfygEUtpYjZvgABqUCgb1jxsyudHpvT1jsbWFR2x4Hvy3udJeA1",
  "key22": "5H4KpKmTh31VW984y9mWd73n5V2DLyHJCY7X7x4Sj5P11sfRjHsWHXLziMP1pPj237rXinUxeLS13jhSBcA7V9An",
  "key23": "2wVQj1cDnZBpLs8TcLfgA9LguDjWyUMGfzPkLy2jzHGQfNKWmUnb4PkVN1vqw6szrJwAeMyBBWb3oj2wdv6binNK",
  "key24": "ZZaTimJeySiPYVe6hviupSLeef72ArT1G8SVHdsFfPqm4GwUdsNf9uAS3LSPv1qRsaXWFpDgPuAisb7cpZBEDDg",
  "key25": "3qvPTamHrmMfnbeXsyL4V4rh6fF8o63hx3adt3xLowidMGppxcrZkJ9avS75tcAbmyLmqeNHXR6PwW4gCCBCZxGs",
  "key26": "4zV6dpYLaDiZKkXxYAe1eJ2WaL4D2FaMirGyiVKJFHzmNgRB4yiiESKYzoMLhuVFic8XUB5US9mmwEa7HP2suij5"
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
