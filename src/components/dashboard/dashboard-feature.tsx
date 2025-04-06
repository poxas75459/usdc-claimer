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
    "21gfV7QNB23AsSgfWGAuAZtH2aV5nVbijZ5PB6cUHZJsrzgE5ZpNc8deUW4gzW9SVcusNNSax5DeWuUkVsNTW7f2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45ALHvd5rXPjgDWKTZBQ53MEYs77i12X45qe5RGDZae7DDDzpKVfNzTcA86rieF47vqLeJS2gbBQbpoXjkh8Uoau",
  "key1": "5C6e616cnZK4NeFDydXAAdNRA256egNNcDEtCVffkfyBxtr4p3t4iaMjhAxMc2mc2S1o84x7qo5HBhvvp2ocjiou",
  "key2": "47nfYpdXAgfJCyWwbwG9j6x8H4887LXhsSAM7yKypnX6RLhmisRh1ANCwcgzPNRdGm3qPxJbPJUoBFc1jPehq1wr",
  "key3": "45kEekxzo1Djpnu1ZoLjCaCj8nsjyQX2587iKyaobUYCB78G6f9oFqsiQJpgKGcL8DGZHyjKVBb218VS2Hva1PbU",
  "key4": "4ZL1ZfFb6KMG1kcXr1WLrtzYKvd1CqMyJEm36nhmHiX1NWkHn2NmJBECa3ZoZZspntnUpZ7h68fuV9LRuZbcHYii",
  "key5": "5SpixsQAYVAYcsGrwPSSU1Kf8cTHRk3cPm6qePESud2o6pmK1NHe5Zad6Anxn3RJWWE2hEY8cTb5EWrwNbPLMcvH",
  "key6": "4AVEpuPZG5DQRVFobvNW1fdKPMeuA179CK9VNkuaqmGjs7TtC2zCqjC29WCjkwGoUqB3DT8cnUTQmdHbpEHUiMpi",
  "key7": "67AUruU6i5nwrRkH7QnSH7SZyXptV1RwbRKWAaRBPfqTZCfFxcMU8mFLZGxbs9ooBvLYVLraTK9Jw3dCbuFVN4iD",
  "key8": "3LqyaNFzseCYbE3gxETYyZUd5RMrfxwszokEJefMkbvXs3LYPyFrffaUZFRqBzrdo7jiRqnCUpgdyNXnVwPW7AX3",
  "key9": "43JScUBM47JNRXwXdYabrffdkN8DGibs9Eyc8uUfPv9XvjNeD9wKB9orHo5xsaDfj5Hs3UWk3b9JNxntkT4kjfMu",
  "key10": "2TB9jTidmoUcQBRXdnD6xYwAmdsjdoyfMxahJP5nieR4Y8QjgZp4KwTJGZrcQNnKV6MVH46wrXoJGzm8GZSf8n5B",
  "key11": "4dyDVGQrJg4bmzUyTWMWo5Ht7rzb6xt1tkuqQfjjSRHXZGME7ip2Ai9cDrZnj39Vi5KENnDWoGRLB6PjBhx51zFV",
  "key12": "44wwRCqKAQaGhiBUrAANy3DB4pa41K5es29dQCGtMpNfvoEmJthx9MdjrPJnW2b6yiVFseFcMcEHvsu84TZF3WFF",
  "key13": "42J1VAv7obzQiVxBsiNUrXcMQfcWe9MifY3RwKznCt2EpX6AKLZBxREQkEZn7VnZYwinzyTFvtEQu5YdLJUF7nux",
  "key14": "4GnvDWa7Tm7uwjkDqFTsiS26sXTNEr2Wdomy3CBFtpTq9EqjeVMh7Y6nGW6zdDnCsv7kjS2DUbsjcfFS6nF3kBQr",
  "key15": "4nbCwL1ygM7vnpygrrBEwJLgaeKAvW8mcrNWneu7RasYAB8gapC4ssbXuCxq8Pzf84grgxCss7eWYe3rHoN96Xur",
  "key16": "35gWZNCCWFxK6MXqWT3mcvopGqLPojdJy8fBCQNokAS8WCJ7XGC1DLr9RFzCFAzafMU4VfNveCjNDWSQ18eMxSJM",
  "key17": "3QRXQvXHyHBBFJKMuRsYVQwxsi4HbUbGFutyC2b282ryPt821CLtZPYAmokSGiMpf5tuwWy53VYdu8jZh1YxxG73",
  "key18": "4e11GjKAdMstMCxAnZEo1k5qwU6E6BotbWqG6sEjfdY1HhzFL6SvJvvX5NR76dsA4aM5VyJhdurh7zNHtAhmtUG3",
  "key19": "2f5jwij6goPfHscCMyFN7xxMRtnMe9WhRKYP6qBNt1Co5uxr6wsjeLViu1aVwUBMn6MH4QYadHVR9J7RmRtbcEuG",
  "key20": "U9b37q4ZhRwteyr6VAwF6b7z34eB3mZWsdoX3firRZHro573yM1HzHvSqnp5Paaj9P9kLgpaNMAvhmPzU2CycwS",
  "key21": "2Z24scERZfcaXgPbtqd6NzwAH4FKrqjTUj9ad2fMQ7VBTQrYJn9xdZBBbL8CiMqKfDST8QBPbMNEvPdifwqqM9UQ",
  "key22": "2EfaVy1a86aEtjBdBQbLvEdZ5sPvv6fk2i7d9pUvm3Hkku4T8F2uFdkSiN2oYoKQ5jD5w1MBiHoeFrdzhoiY37mn",
  "key23": "4QFUvT3iMa5tHXMMKSLHD49BFPnRozYxZrwG76NK8fEg6V1tgeELNE2W5996GMnpL2UhHNhdBky92JxR2KUxTCLW",
  "key24": "3ZqRR9EdsQ6dwKp5JHXTzeEJv1oehV7WxEcci1Dn81wERJVn4G3Dku8TKWAMngx1pUzoAG8Mpg1zZPVzfiNHHpnK",
  "key25": "6171RWjJpGxj7CuoeJQMbexeqR4qcUqzCyPGs3gymgR75YPG2PEQgMM47k82MZVrVx85c1RRdLex2L8tm4sHy2j",
  "key26": "EmDsp9m8cjU89w4n46dHZChXRaZqmCRLLaceBy36BwdatEXkfePkR2VsvnwNXik2bz8ZbuCFbUrgjev4S842PxU",
  "key27": "2pzRmsqdH8pvs6bVBqYmALQ4JUrWd6rKrD8fwyiVNDzJoc8THriCc6cNqKeFBV1QyrJheA6AWASuhhSrkci2wVAs",
  "key28": "KBeXB4gFyJA5ixsYP4ijkCMvr2rDccCY8cwVmU8hnR4YJg7ZaZDVasSizb7HmrzptPcALjq54HqUTXm9pzXi9aq",
  "key29": "418CJFffSN9uyyeCoudsM2mjVjrXuDjCQwrkLB5rujHzUFy6FB3BA13RT6v2c3W8Sxcv7khjkpaTabBY7vk2CGrt",
  "key30": "4fZXE3cu9Wk6xVJyiMQ8RWJuaCYFiNHAPT1XWYzXLR9pSyAQf2wav65y96f5wxpefAsD9hfH8E2LFrNAfKR48YR6",
  "key31": "8avjQJWvUbFxWeFX3iRUfEhM5GkSNAxoj9nxgTKWxRu5fwraF1PKqkdorq6CKqH84B84Fimx4DnTLbEEusfSmqG",
  "key32": "5iyuJwBKRxueSVD3WwoJTwwMJ2EXv6BdL2SXQKnT1841D3rqPAvZkDrwgePFFLFD2j858U3goNP9HWwN2w2k7VMZ",
  "key33": "4tn2D8iTmf8Zt6rV3TTkhAaFHuXpkNcAetmai94S4Th72ppPri5s9m6ZsB2uVPjtcrubGsNSpuMPKzoXcSGXgmLt",
  "key34": "2EqAMKEqgbHDVKfQ3gg59gJUmZgxxnyqtkjbc9fw5FkPu1VS9V59CkNAfKe8eoHAsE3Ddj64jPMNGcvysvV4Yj26"
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
