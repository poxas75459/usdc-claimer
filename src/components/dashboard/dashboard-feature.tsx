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
    "4UeXioSq3jH5URbaRynDW75r1nr4s3ExznhLBUpN4oLvrE25NXNYd12kaP8BuBPdKJ8gCamNbakyFb4nEQbVF5FS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L7J6asDzygb1xVUWjWZWTPjU9ApxmLxJT49fn4jFyt24Z6hTfpqGKYwSCYUXsSdAyNbSs5RpM5DFEy8PYd4i171",
  "key1": "2vkZE6aAGewV2kCd9BwqjSmdKgMZvXMPBgBy8Py4ciUsULnPrHE78aHamGhPoCW9RyRBjMaJmK1SnNVxdvHsk4NF",
  "key2": "4e74RtEshau334jQmMw8tYcMAbNebteKVWPsuyRp4cAb5FakF3Pp4iMAM2fJLXVmGHfngJ3UfHFUyWAswyDwK1uX",
  "key3": "3d3d33gmz9TyVZbAXNDiYKZbvVZ97gm1RnnAqW5WinmPAWyS8LzW1oiecC65kcQrqgaN4qB7qfWQB3aahcdL7iuM",
  "key4": "58HnXcfQjYcNjXF4PgudURhC6GWLBXqvfALhW9cenMQFHGuZ4BzJ2wCWwBWuf9sAt4g6eR2xq2JNgKYBzXZeTvas",
  "key5": "2YR8YLf2mF9LrXu9q94E8epLiTioYvLZRkUDdYdcrvQD29HT5vhje8CX9mB9E2X4yR99f74YcKS6kuiMdTt3Y4MU",
  "key6": "4CnX6YcWW9tzZzJngqT1Uj9eo7MWvSBtNmVCvcnLeLA2zTEqLE9s3B5HADsMMbkQe9D6JDY3Bj5gVjPZdHLgKhgE",
  "key7": "3GakWwtKxNGZxzJPcRRvHBAJYRvn89TkSv1QXZnkj77nJ5Y44uTfv3aw99kFNkYRqmXQew2ddi6MVufgPtCejARQ",
  "key8": "5MgdesMQD56mEn6AhnARtPXSVDCAYJ615374o5iL2Unn2hwfcLXe7QRRWPy7EZfj7cZ272NCGec7hsBa7s6zk9s4",
  "key9": "5AQW8uwYkXpnYfCaDgEnuHW7u5PPnnvQhjRj4cUhnANibo3KA2Daiv5CaB6pJ1wpv9ghfH6Xt9vwB1rZLC5tp2Ri",
  "key10": "3KWxBhNYNRo64xHUZmrA9VnKvfWpodWirXVs8uLV8YhHFQGYHqXxu3DBfGyjjZgie1dh1tUnU5EpTZhJcHEmbVLK",
  "key11": "2784w5MEniCTkzS3aedaEAkoZBnd6QSPMGUaWPhZNpgSm3MVwWfJHy9MTsQmLTdWQ5BSwWVWE7P93vH6dSQfdE3Q",
  "key12": "64R3RuhzuABfbZVPcvMPCGnDYM1EbmXor8zfBTsEvHDrJwjaZsE4ynEsmjfmjtDxR4x4Zg2wGsp6BahwEDjEmUcT",
  "key13": "2RdtNDpPMXTByHKtAWbY2pVTT7eg8X4jeQnvwfAhqRZ5b26FqWQQCwpXXfdFQgsTAZuU2789rEhv2J7aZwJjARC8",
  "key14": "2JcJGUMijmRmCs58btoAqaPa5V2U3sFDtKn6PWB2or7bme2fQrNQSPhGTKdNgJ3G1gB89jenuPTjS37dJJskkLB",
  "key15": "45sKeKeXwwdUCa95sktzGEfftmYEEQDosR3Q1n3rntfrY3EDRtPDjQRny5GrHgSKyH5TxwXNxLMPJUyLGzy87oNo",
  "key16": "5NhY8YtQ5ZHbV7ZWak9e2xhg6Nb3XSJ81N4dqeAxc9N89CvaqSwri4AncwhmX27bmvgnzAZhg6qaKwQwcqgPwsbM",
  "key17": "wAPQxKPQ6qg8fiEze7Dmj8CAFfBj8ugwYTMinmVG2TfgQhchckWBekJhKvUwY1tXEEQCToTsdgxBSDiGSK5c9ks",
  "key18": "2D2sP7gRLMUosbGCeSafqjFrfotpGtxrPH9KR3QcVRypFWmw7HxMdjGTLbh42X3wKAyzGHD9Le1KJsdqW12ZyLZb",
  "key19": "4EkRWjrM31saPokECJJAvFPryrBF2zLixzi7HNERFajgubuN7RbVKnVVs7RnfU9CD8bUjMLKCx5Qei9PzNEPM1rB",
  "key20": "5j4ykbsK3m6bpVJCQtFuBQ7d53vqpMRH2TGCAyXqQs9gYWYPcRyjr9GfURF3QkYmMd7dGbBkS98afiQ5NsJ91bTD",
  "key21": "sos2VuzxrLxaqk3zdRqpCneD3YLrQhTUNyQHZjRymbpfNpGDDJUpX6mKcvDhQbc343ad3opq7b3atQi2scD9T3v",
  "key22": "5669iNqaf26i7fxA8MKPB2twfz2bmUA8Hojqj8KkmHg9EydMALkLd1S5S7qU3rPhLq6uU3t972ozJtDnMZ1AHgEu",
  "key23": "4D1usuncJTmfcixCipejbnUWrXPdVzPVCiQsfLpfokcWfWnSrs3Grt5TDGzuAJu811tZxWGMajGnre9G3Jfeqai",
  "key24": "4bsQi49vZjoj1VSmubX1M9FSbQJCizzq8oaYS5XEG6q5udP6oGK3GZvYWAFK2pTGLGhGvNTCYUC2R2P6y58r6YNE",
  "key25": "2vYzhs1q9MqJj4Bbsz3XSS9aKLChy9TcjRyjK8pHCn6EyxNu5Bv2aEEEtwqx6gfeCMeWGwR1cntR7G99abnAt5k2",
  "key26": "62MCiGDMi7C2GnuaeaXaC1vsEN3FJefUPBhGpsVLKaLv4pLNtGiDnPNDJpMdCkzdghPbPsGRjGTTijBYnNwz8eJW",
  "key27": "48J6EnJR7ck8kA2ZDFBaNXnmzmQGdWr1TcbqEf8EYBZCzMRmGBZJ4rSZGds4Cbqz7fXFyj3jhjRCFoJBTbHuLL97",
  "key28": "5GcwNiMdHtd2uxxXrMi5ArWcaUFXdvPE9MnX1EFFrpx8YpMdGLPFAj9nWn47hF4P5BcuKMkR1RfjpkX9ZndfU1dD",
  "key29": "23ebbBV6ZQ5HeV1H8uascgq1vYmNGjTWfJLFsE81NygDnhjbTRnhuXSiUDP3oiNiRfSWWbcPb1uqvy3sf2mw95kJ",
  "key30": "HrRK7EBsNHkKjxednCB2YD7nxtPVMwHnxGe9D8SLsXHFB8XxfS3xuGhFCQCRuuceMELaEHj5j65UGHwBwLvysoS",
  "key31": "41fryrvqHKhxD4hQ54UuVMTXWKZYRdHwq1qZ7FmBnpwWr16W7R4dL5DzHDBvdBZmWgkXT2avttfAtFbeYWp7mWUD",
  "key32": "4SMXLopsAvCvDMSFqBJD7gNErV9ihJBjMwwfYAAwsarTZNt761HBc6YM2eCXtcdbB8CA7gxEMGdbofhcmVPRNP7N",
  "key33": "5bbiZDLocowUE7dU2qxRbTBHK5ompoJiJZjs9cctrcQVpGLy54gvthCHoLJHpH5iba34oz3stXKCH1M363vZ5pYG",
  "key34": "5bPFPKTKWxzzg8rkGjEnwbTCvEmQ9D3RHbaYPFJJEwBiuW9GE7J1fggAKdhUFBtSMe2wSEbjQbopaioccVQgthEs",
  "key35": "UXPiBA1qybbAdB3yTLmDnWeXEHdeYK2LKfCC6L7JeoV1yoBpN5SFXzkQQ31yGeNXGNYFaURjM1nUXYyS4j2hkAp",
  "key36": "5qdaB7mNc5mFRouggxb3tuHqV7Li8yiUbgscrcLBavsXHfaS1uegUtao7s5mTjfam6tPJrGm5bJDFUoJ1X7UuihP",
  "key37": "4HAsR8o5gNyFQxzhx3doLsoqVUKgNnUM9yEV8vgvG3kDspLBUCbSoapadzos2hv8z7wAoyuPb2JuSe91wgSi82ag",
  "key38": "yB48639LQCJNvU5fr99AqyTwwgSEeRwQQyj4GNeLc4K9H6Kica9WdM2vMKpViTHvoBSs24UfKybj6qmQw1izMxx",
  "key39": "5wjsPDSsEMeh8tHgWrhmAubzcB2FYVZhvHvhancYF5ZHRQhZoXUp4MnFgFcNVUkvQ3x7416zPxkTsF46GqwbnnAH",
  "key40": "3jmnWnsHEdg9atJhJdfCg15kqWdyBjYo9HmAE8ygHoeXRctE6HRLJJso93DxK4eecKbiXWAj3DymEDdjrwcyVoH7",
  "key41": "2j7uaf2skS8X8qvDkqBDWzZmsdVGMZ8h3EQ8t3m6g7QjJ3juCNV8PZzdJcT7Mce2qmxHsMCFvWCdec9hPR5ypxMv",
  "key42": "5YcN39CmCLduDtvJeAotAFNPEn49WN9vqibRCVECMaCVViiEhtiTXMhSW6fNpuaNdRG9PxiabbsQXQe6dboQa3bp",
  "key43": "54rCfKC4uEn5kc2NCHqNL2bU7WZGhWYdz8QL1xpWg1K9MrQrzzd8HFmr168yCxLQDKJuFRA3MdrL1Wr9JqZb37tH",
  "key44": "37B8rxNeeuLmzxrsm6SMmqX2nhthMT9LCfduoXsx1nMHpZcPLuVi3jJUiMjzBa7G7wGGddsa35KQpf5cdNbckcvs",
  "key45": "3Xerc1FVgXP3WJqbZoLxvYDRf5FnHCtBjwXYXXpSkdniPqRB3iJgFSdKEZtWGvrxYC2GXYFv6K46jCHMAzRREegc"
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
