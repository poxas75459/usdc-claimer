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
    "2TNww8yG5QEx8xM1v6E7bfhSUQvM6KU3FmGEK9vmXeJnLq62dyJ8sGaEPNGBpX9G64x5qWpYtLcaWGk2QMQPaCnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "574M7h8ESKhigkTWsq8dRdxkNZ64deDJtRk6L9wuPuE2V7BQd64bcD4qrfqbuvK8HmVq3muiYdR4ew894c4puzvs",
  "key1": "5PibNPybxWMPWymQURoVcCiqAq3XpBSrqTJKVtNWwR854wLWMJrkp23EtULg1MUgu8ZYujFrzpMRiHkXVnbDNhad",
  "key2": "4kKMGoXnNDZfWavg9TzTa8oUB1A4Ji8K1Zkz4gcUaXtsaPZGAVsAuiAWozcY5aL3cBcmKEKSU5Gku1RooraT3ZAo",
  "key3": "57XcBCNAhs2vNoRcSotVKkRTw8mBUArScxNacmCDAiYQkHwscFdiXwgd9JVwBDghNSnnBrUVcRi2etWawu1yXtrE",
  "key4": "2hbJMRd5V7KctgUoYQ8Dpcy3fhYCUSm189gh2nvwyGMEmwNXrPd9SiMsNxTmMs2kbr7iXGBm6N9xJWqRN9DUdkG3",
  "key5": "21NFdCEJD5ESNDicufcFzxktisNiF4Lc3gBVJtt9YGU9JXsSBis5aWwQSaHSsAQ4qQcSsUASHKtqxZTkN4gkg1Kr",
  "key6": "2z8jfSAR1DBfJRS5SUQ7to6bqQPf8NvVy3ba4DSfUw2MxD4745oL4uE8UQfwhqyzP6x2bAXfKN2mq8UGXQ3Hj6pq",
  "key7": "4DYxcLsAAsTdaUSjCce2TZT41hEPV1fk7VQLgm6GWrm79QYYhKwn3Vc1bDXPGPNBQ4yPmxZobRinUg8CSj78dmHE",
  "key8": "36R2wGWZeiQdrkM6z3i217Eqqz7r1MgbBuMKbbTNih41ACN7F8KC1JmLidhVUm8Jarb2HfPp8YvTTxS2bSnbWdPv",
  "key9": "2o5Psr413tSQ6aegjMH9KcYXQXT3mUpZx3kjUKyGd8iYSmSqJgiVVZ1VbJFg3NVJHPT1PdseQJkWFTM66RMHSB5r",
  "key10": "4hQ8UsXMfHR9JKicHPXetdwVDcDxYmphYZc6zqGqZzFKiiAAf798u6hzkcMpAnG1V3QeyVc57vRXsMKBcoTf4eqL",
  "key11": "4fBXvGf34ybs9doGQv7Yoj2DtToR4ENfj6LVPS5qTHJaW688UsaRkSxtXQCAPBZM3RewRfxubbRdhKuFoXaW9JKo",
  "key12": "3pyQ1iEN9FoUcvprQNQxgmECg9CCzd2puYiEsXfa7UyH7hNp8v5ufXAFL8mF1Wt9TfmrcZ6eHxFcY1Jg3Wokb2ms",
  "key13": "2RzLqMYEyqMzYTxoFM2UjTwoFFfKcRZ9aMZbAkFsXVCwmPG8xjxkkExKvAuKXMfChh81dA2QrHQQy4DjP2Afixhu",
  "key14": "5STuRMwjYDz7jfjuMyAV1UZEfzwJRNKwRnrztd1oakBHNLXSbbag3W4xT8sHEEQMC7Vgp3W6djyrwYXayWHWyq1n",
  "key15": "2beoSuuagPPDjfbwLefjZb36UdHhd9vmwSFrhAkEh4Shq6KhV7tPmCsMaFa2KBPVhoGzftxb72nYNvtEBA1RJUTf",
  "key16": "3j5ZRqkix5bs9iZ3QUVAjWndZrKXUvCSNHvqLkEEpygPhVEr4sgtHJBXy4Tn3zG3SKNhQ5U66XBRianTQbhVVEpY",
  "key17": "5HW8uKqu5VG62JigUahjqiLamR4fvroVdK4s78b6uB1Chwyn1s9VFggtf4a2QjVkzTipoukDSEnVf3pPbfoNDwnP",
  "key18": "CdEPU78tmooXYkob7cyhy29XuhznD5UcDLEn748o9fuLtgvgZ3qm7y29boc6puMQAz1fyAJZpoomcsVNjeKvPeW",
  "key19": "4o84o789CvwwjcDW6N53vGF2Jvf9S8DMWEm2n4T2bu5NPzQXb2vvJL2LYN5pGVDjefs2ZekqocqjZTcDCHwpy7nX",
  "key20": "bo7np1pCapX8wNvC2UcRvrBbpEuBFc8H1xypVbjt86NdN2gFZUypdtnLw9dHcckmWjWuaGXoQpPk7FyEVWpzCWs",
  "key21": "32JU2ZBA1jLWPqyhfZGrr3PNqXtpNsqJ1cRA9HhQ9vbLbBnoiqesxU892h3eR2ZTkehQZP5pHqvRb7Wjc7cgHG4f",
  "key22": "35DpGX4VLSc2oEKpmQN8Qc7aonumuLK9Vg2DWbW8YMMUqUZ7WuzeNuTTHHbmh1QYcCqvKgbLvgtse46wshpKBHpv",
  "key23": "4rDmueEkvbhSVFooPArdi3wVBHcEQ7o3aNVDXnPYHaB3BfUKt7B9Y3u9L717LQq2kxWKarAHYzE5USu6wQejpbeM",
  "key24": "4bVoZygjMumWkH1VR8EPsDYBcMyr6RtzB5Zj1ue4xZp4Tg25DvsFJ43xwqkMVbXvAT6yXEdyhbyefbF4obS5cX9x",
  "key25": "mjPVBzL82BhraFMvkfMh5HmRgVs3Ahs1n4xemqaVfLmN5BemenBPYJuALLsybMseddbxoNjyiH2e3p2QpLyVCW8",
  "key26": "62q4oYg4AUvvuq8YrDh8HxS2dbNgYwGdyVD1h1o8yX8bpQcXLE7JDMBGcQoyvVCtBQ91V35mmTqEfKXfjEQEnLpZ",
  "key27": "3gxHgLTvUbQZtgXkKY784v4tGp1HxNvdLyszJ5eh31qnA7RZXPTQyVCAjibt9rmZDbhLpCnPnPAewtWrLEoTQoSd",
  "key28": "5U18HBiS2mXU27hCNmVK2CnWz62UJU9yXdeUPWFNcPxWn443HxXFduzjnBmBpMDV3h7nUGkCg9n2Sp82Jmhed11q",
  "key29": "23iQ2CR5YXoxnWjnLnZ7HbfEsm13AF4ssXY6ZHpXLbjMfr9psu8ouV5WupJ6Qn8efgLcKm8hkYMPG5C3uAdi5CAz",
  "key30": "47Z1qAdEYDG7ho8KLJFpNnKkjwUaB73YooPfpAxK6vydZApiZvvbZxLefPihLkUZnpmYdAkCSJX4xX6QrAaKFwAe",
  "key31": "47ZvCrcy152Q9JKcwiSRVqLyD1ZRDitxVFRciJdj2hDcEbXWWZht5TERJyzFgDkYpymTBQwYJuFZM7EEsX6zSNuF",
  "key32": "3Ki6XVqP8EteXoAmPM7rHJX4Q27fxYUJdEsSMfdirsbNLvEQ85YVUyUG27DynBPqiDNicANyZnf9KtREisDJkaHv",
  "key33": "28hvUurhbkUY8Sn2yR7F2o3KXCn9j9UXCiVUWveaM7HkuGQPMovrChzMi8Vpb4FCA3sjfwx3xW4LH1764hfNo1x6",
  "key34": "2kHU3ep6JiNc5T9i6AB9584xNXJRk5xCaVFJPD3DxjLNreP6peJnkMfp1TUT7G1tWWcq9qFUAd4BDtB1XUwUqXrQ",
  "key35": "3HUzu3wHZrfMQFUBaqfpMNzwF7v7Aii8WTFf99cG8MKm1CvXKpgJpN1jW2p8aSdBpiHQLne67P5NVhM42R1i78XF",
  "key36": "5mhxqn6EihwayKPwN7zZQyxyjdMxEsbKc2nP3cH3ZSLYAu9HUa9k5427PLfhf9Hckzg4kDrJ6eSgQaS8UzgMkUFa",
  "key37": "YVGD9NPbRRTdBSdNQuCiKCTQcL1XPqy8zQq6wXTD7q5EupGYLhVJjoWJMD8QW6SiWRQH5aB1ep3dmvi4HSKN9eS",
  "key38": "2saBbQbHNP4h8NkRkvtLSJd2UL4CJJ566MR8yBQRJiwxbtV65wvFMMoXoHRqLRATJyoUwLwiCttu2AR7wjy1wFum",
  "key39": "2gRMmSZy5HougJzUNSsiChGcd5oxhbAM2AMyutHzCyWE9QNmNEUSaUxevGGJ4kyEwXLBgQRY2nGv73r9GJoLmjUg"
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
