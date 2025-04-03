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
    "7jBjxLvKhhrRRs85CPjSiySTZe2iNsmyykJJFMakxiEpqnAGSakEALCkdqCoLXvqwUHHidYu73es8pULeXsdQzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UF5zr7PTdopN1fTotQdd8MfAUoxqW1kQy7hkbHFGANp2iBpDvGsW1iYWSHgtJgHhv7TvsifPpetyypodqDepjrS",
  "key1": "3vYFVtbGd6vRGGfZ46gVVf1hTPVvm2A1Zc5b52mVGvM5VEjRYQ4oirVxd82ytcqqJy2E7yjfo24iVEjx3Z75rfu8",
  "key2": "eXPs9bAWEUfiWcmyFUXHVsPErDiA9mEafg2Z2EN98qJUFsvcpoHX93UTBBs5uzveafaopms7TaXxTkXZoBp12hx",
  "key3": "61wGUxiA3PcVP1P8Qx65mGZyJhCwdnSRkZHeqtv5yYij22NTLDWQm64sHxJ21kLUvyfSdbZwMApu2jP38F3z9axg",
  "key4": "2VZRBZCm5r71xQKqed19hw6aUrGHs43g3Zd3GGAuwz4xtHXAotFGjDkXNySUvtTdmkFEpGE5ZAHMvoF1ot1tCmeK",
  "key5": "2VW9truG1wbEjo6vbUo5k2wC8e4L8nodd3xCjBt8QLBp7pzY2tq5rJVAUSjnLJ3c7YvKqEaGw8KT6yaHqatefVB2",
  "key6": "4rQ7Zvpauc5XUpThGhWYXKrtmfSTF1Wyo3fzwkZFzGdYkRtwMz7oQV8CVoPskgBFjL3Q8ZXCosSP9eYpNEEhEiPa",
  "key7": "3VsmHBoJdd9BBTZ8r4v8QFCbY7oJgLRV1Q4rrJ5WTDtSqjaQh1Qx5gDsSpwR9v4GUNEQzNgKLM9pJ4CuCvjfdD3a",
  "key8": "3rh92ajKkY7Y25svSSZEJyBpbCMcj5yyuds486cZowcvJXXvcNbGeCB14jepTwJHwoNmEy5zuzFyy87mFLQsj295",
  "key9": "3MFRwBRdaEGpLVggVvwgJEp8NLogrRTeyTcowfuguQw5FTXxuFBorNSfqB8L3WpJWKhba7qpMGa7NfrNg9BLkRcb",
  "key10": "2nfAp91D9s5WkepZ4jsqh978tbP3WFPwLbnY2GBfb8zjKaHnXt3r8Y7kdh6rEdA4suhwtbBx6gANJ8cxxAte1oPQ",
  "key11": "18SxLEanGsZGHUGhnvWjJHiRWYujy5LDKJq8B9LkGpoa7JfPPB1FFUxgYuVfERS7ZnLGnmWZkvrN85bQrsnDSav",
  "key12": "mvVCw4Zvj5WQuXZkkcUEEXixyff7KuQxgtgd1qrnyhB3szAVsB5FS2ueiv9jhi9qTy7FSJ5ui4HtiBJeAPcAuAn",
  "key13": "2EUSTTNAvAxRh8qPnEgRtswwxAhLJtzw4V4vtAq46qAyGpjqHEspaewg7Pzkvwq12vvwsSYSHLsw6tKprQr7jay4",
  "key14": "3E33fdmbD8c1Tk5kopRva3PPVtkiXkJZMpXrS68GJRz2EVbRNM7d9oKGjnE8Twuzr2N2Sjxs4aP1mzGACThQf7HW",
  "key15": "2RaisnWvUCZUdKeMCx2XCb7a2d2UWP8xhCXZ31QQj6RBCGu241tpWNXShNXdMu5FPzpYzYghLbp1tjJpMcwbA3qT",
  "key16": "2KpbMDYrVRQKh8yMAxJTrqUS4U5BLTdKd2UGx3uF5vuNqPcMRgeowb4Xo1NZcXM6JZh3MCKoEjU2MSkodd15xiuB",
  "key17": "27ghumAaTxN3YTGsvQdqC3EBLxm2MHHxeuhHf76GvRMpnxAw1ynwj39zTxi2SxWUZwLYkp7fEPmxpw9sPruQQVk2",
  "key18": "3eAiWxukUp8vv19bkpCWtYYfamA34TP49zgU4SRzGKPC32BjKsYjMSYS3fDdieK5eKh74pxzyK6D5mhyTo1feSj8",
  "key19": "4GhuxvvSRm4hg7E25BkaG6gLTaMpxBaPMXJRCaa2mWkxZW82myRE4St5HSHtp61tykZtSLTGr3qcFL86z4pAsec6",
  "key20": "5PSQvmPPkBybHEjm4iM6MZs9KqiDQV3ndrmcXp3WP1LnRYs7FjCoAaPX1UT8szx4WqXXa63B1oCufS6BDVkzchCL",
  "key21": "5wjcHA2DUwE5m5yk7dFMsKRtm9K3Vp2VqrPpmdxRTjxVmVPqQspneHyK3XPQv7KZB5Efu2yKhSf8x6DmwYmFhUiv",
  "key22": "27vyK7FsoRAjP6zGZAP5vYuTTsRwRdr5Cd9EaFZtHaTKF1HDzPhT369Pnq9MRpzeRwasqpYr7UeJgU5FK7y7w1xU",
  "key23": "4bJioYsvtdEKw5Yk8n5MsfjZA6nnZPiz9jDmitsfRnuRVGairMKA69T492Knbrt3BYLiAD4gkHwN4o1xCudXtcY8",
  "key24": "5jvueWkKNMynd1wiE1fQB6jcojLUEenWH3LjezTbPTnoqVehyK5zNGuYXym2dq2MH58A83RgsskZ3Yc8szs8pwT5",
  "key25": "36Ygz6CcSELNF52TgZJ4LnWY1TXkVfw7c3pZ97MiSJ671XtcYyNiQEz2tC37qTz55UCvV2uiR2mevPA5wLRpbG6J",
  "key26": "drs1ErTmFYTprECVxNn8ubhMt1ZCqWqngN8epc1aNjD9u6hthkys2AjsVcajvrdfg5PgL6LLE7m2okwpnb9sfDX",
  "key27": "3kDJHygYqkfxYHPkYrXsEnEtEaofqNwLPqeQSf5LUKJWbBY46v6Deom34mrBekqyqaLPWW8okfebUi3opH3WL179",
  "key28": "qFDspCDGyhaH8qmaSeESAZzQuHfk7pKM4Nrae54VGTYMeQevRLkvh9UyFeChbAPjpuVqpHMwYs9TF9WbYFktxN9",
  "key29": "kWuo5xEeKvgdSW9mGBFNXng7qXNpKXQjUU8CRdSHtGrPabC7tJZkrCtoLumNwWqaJbrS1NVUjeZhX4NXDP8wo6J",
  "key30": "3PhRf5bFPv6NAqtHrg6dwidi8obbWR1c2j7VmKHbVQzt54KsiSHVsSjaZShsWZxZGvbghgRrYpHqAKrRQ5MNHkvN",
  "key31": "2BFrpXwSPvtM3fWb4CVH8DxS94UYUYkCrc3cEUDndSWEAzTGKQQWq1JTEfP8ZtSwqjWBSSDXqdprMDxFbt98ukYj",
  "key32": "3TgdD25qhFFpEYEbFFFnvBtnQPCNZBoTFYSaBX2MLvs3zbEMNb8sGUHNs6tSwEH1hHh7Ed13BuWFczde51vGEvWk",
  "key33": "2BfECrpoMYwWS384mNsJqXMDjQT5wTiDvGjbQz5iu6rQMLiyYEHsAw6rww3aZMgpNwLMya9DT4juKvvDEw73w1f1",
  "key34": "3MMCATe8rxnR7etQ3n3NrZ8EYavaCyHNUmKen76YfaX7vmdb51pGCQQRFjrENrbxUkurS91qkg53EagwHAdwGaHh",
  "key35": "2uq6pQpf43SJtCyCcBoWnGo54LqaNLPQgppRmXF4WnivypADNyDZvWX7wfjZhuhDM9z8Ene28JryZo1Z6EKAdegd",
  "key36": "62NWWHezW7UkyAEYyM4MMppfN7cgX8ssoR4vSeQwwURH5D7ruJYirj9M8vraaLsJpkmcWW53LFkLKJeaj2SR4RuJ"
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
