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
    "5DuXKWMRX4MgACyT5H71w5UadQz66cS2iGEN5DQC7tDFGEmnXrM8zWkgXxKishnWf4bzhRkmoyyg48bkbamx4NNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eVY5hYyte4FyEEdQ6e8oTNSBfr2tQ4YsuRqLs55XrzNe5y8uMj9vc89n6fyqByTNmSwC4weH34Z6zKMUTWr3wo1",
  "key1": "5cdfCowERLRQEdXES9iSBVknMrfxF89embgTxaCWHZ5EmPyzKuEw125ceKyQxRBQD7xH6KhcV2ivckpeA7PG9oQ5",
  "key2": "5rwfw3vqZHX7ds7oKpT19GRuS61Bt57SSim44NrLxmkEJSaMGupNkXsmHFcd9hzAwLEx6snu3bwyHoisCH3D5crv",
  "key3": "3i6iNgpm6sGZPnQA4GiFanV5F854UvFzVrgMzRZCDChwravZTUDvzWhCMBcLM8SGbTn1RPZQPRagr9tfBg867WD3",
  "key4": "k5kQLRg2tdowXhmTRkx9fXG7svH8uMbvZ6ghjEFgE6ixRG2NnNniujXKVAuhE1bf6hVuPuLpx7ETgYFPnrErEJ7",
  "key5": "3U6YYHLjP8LEbFUKd3GQJn2VisvY6PMP6hW31SJg2jErMVTsi5AcWdCXCgjPmgriD7zuG6VHTwz91GFJPFgEjv8A",
  "key6": "4wSF5kP2rvsDUeVzcg9WLnKPGqfmAyUes5Pw5zq9EDcobd93UWuaZTU1rDuqViYukWBNsCBRrHZC93cQxJPkakJR",
  "key7": "3v86DrKExbfUWibGTpTjNDQkE2od2HEQCz9XGKBPvtBh9sJX27MaYBhEEomQNeQNvrW4AEPSihFx2JXXuoZpbYfU",
  "key8": "3TAEaLbpvSkMzb2nzp2CuxPBpcTtB4GffdBQMbZKidJyzDbKGVchRTzsLoFnbJxF9QzFyHwPn1WQYZbvj2rDkiRt",
  "key9": "3xdmaX5qyMySJFssUnUkPva2L4LJuM2G9C6VGSefwFXfKtg9QdeE5RdZ8AxuFXfaK81EZU6G9rXKSFHJvLTTwfxS",
  "key10": "M5PjbEtVpiq15tDEiUD1Lh1zBuuKSEBn7otuREryXxjeqdviqjt8SLzhx3oBqJRwdSYpYj1aga1oSM2vr1q7Shu",
  "key11": "3ooTmMqCaXwyLoprGsScvowKjhT7HbUzDk2Jyey5pr5YmrgM5yTTGp6hBjAWx85uJACdcLLxUA8gK3bvLS2UYCWV",
  "key12": "4wetBvFxUkKAuNWgRu8CLmzzRRe3hFzjTc4Po7XAykghhiK94jS7ErZ99Cu4miJa7tQq4uJ4YL9qXZnut2kWADrT",
  "key13": "3AoKLrjako1N8EE81USNYLHBWNePtVsyBRFXPfAN6fXJd2JhsMqVMuRBopD2fVtpU9CLkRP8EikuH1b4hyJJzar9",
  "key14": "Z4GixarY62LNxPur2FPNFuRn1S2ksgPehRMFcydY6fucJQejKstkyHYKqv3EHZnXBsR1Ynz4tQ52qXEfVcVR4NF",
  "key15": "3fZCRH6q9ciBWCTkQRdUvfsHgcGcWkEZnFKdD8n6ecRf9JevmzC3qRTu4Sy6iKaqpz1EVafQTEcJrkV9tPirMShq",
  "key16": "5NdEUZmAeZwKZPZC2RP772HTXJNpYW5gu4SRmmX8rnaiV8UMwE4uWTyaDtNiLigL6vjjn4BmrGEDU8ie2pNsVMka",
  "key17": "3DfYWKbjSv1cczNVKQAEHugtW3n3Krmt3nbY3pMDQAJGW8SCXHEVHt1cCEoJ28yrGuW2qW9NWoyTajuiHSZoTHtV",
  "key18": "2Aj5euqWvMT8HfP5epfVHHcqDveWdDnVzXeB1V5u4UBZvnVpNfGHGZ5nWx792i81DkQjmS7p3DeUdjbh3VzacrFj",
  "key19": "4UjUNpuMY5LjhTTEJyomvrQAYwWenxxTBuoyCWi8cNAfWM1M5krLHcy7wpCCwMz2ArJpXaexxPxqNFqht7DTB9oG",
  "key20": "mSczo6ZcxAFhc6RL3oNcu3Jk7AgtwsMBRisJJ5Ap5KwT139C81zvJk7Sybsmq4jm2BVRx1mukE1vBeZoiHwttdH",
  "key21": "3Ke6PV4TrYWJSDz4jEhnkv9aC9HqJXAE58qWYAJ4TPUbfX2ZB72Hrm5XkPzGMQPrYHjv2LxLNPWgYyLA7r3ayH3s",
  "key22": "2cSuyMZA2PypJQBj63dzs4XJuwNagVga2DFodCAvPdZn8LbdB5R5xboTF39nqNgPqkMWcXTm4kHcii8V98e1RUtm",
  "key23": "4aiCa88PeJLtnoMfazNucV7J2hxYeT8H6h1gXykoYRRvP4tKGpSNs8Uoc6ff5eTVTfsTiHawrQK52iMRAZGHDwEJ",
  "key24": "4gNQJMnePNpEtstrJ53DtQAa83PmcshB6cXZYwyJksBoRzYEcSN6MHY5gUDaWfUXjzekuz52YDbiNKob61gqvmGS",
  "key25": "4v7XdV9xv9FUFvDBpk6ALzBthvQaeYQL9gbm8Wxhv2UAZMvV7EAi8vd5CaBMYz1erVi2yFYWZ7asTdbHbD5k9Vy4",
  "key26": "oP7AgP9hEP3ZMP7ZFozzqgfqtbbDt8fCTo1DqnMQ6hLUdFkMeTfbpQceEWfuoDUUxV6GiTpxXttxzappxPMz3Zf",
  "key27": "3YUmXVRZwLv6cYHHFimMpt3TyGjLhM29ynYvjPwhgunv44Bng3A9p5k8VZVweK3EETsEXty9TtUfuFbTPo8hKYhZ",
  "key28": "3q6xqa4L5ncGGrfKsVH6h3sKoaGg4S3gruavRMgratLrmdtAtFtmZHr2Loj3bak36mx7QHWLFYbYKJLr87gPCNNC",
  "key29": "2Ed6ct4x62k4fJWQwWWdcPvqZ8Fph9EL4WnBmxz33FgNfyePTuDy9Qnpdo8geoxQFVef6SW9zc2W4XgbrTmeraNw",
  "key30": "2Aoj4hD9LKcAVYnci56HxrVrcMuzn9cxkMdiK1DGg43XQPXnia6VrfjMf39wYjqyEXXUz6i8toM65DfiLtaxnsW3",
  "key31": "PH9krvQtGVcjheqVUhP6ViNgZrjxLkSZjAJVzx7KaNueKBYPPrhbiucsKcEGMN39JNTh6ux2ZYK4LmTzfac2LTJ",
  "key32": "5Bjn6phnWRHoc6MBWTjRpaGC85U8AjC64TGB2HEAchQq5HWwa9cJyXjKiQf9nZY4GNwfyCdPVuePgNheK2t8Co9k",
  "key33": "4xRubN2FJ9Cv3LXq5hFfEWC3V1RhdQtTKsrtpqmaJc3g5L2WEw84tA2wVoV3s5djxZJeb31KZ1pShkbkYp35zm41"
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
