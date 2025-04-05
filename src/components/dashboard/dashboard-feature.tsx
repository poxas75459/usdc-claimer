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
    "3emS64NttUnnPofXN1VdujKgn17ZZFSgn8Q5VWmdacLwPPJsUG5zy2cDwncWRodAjRYXrxaCqAH2YbFnkwqJshoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65RNorSY4XXRHcwe3tS3wLsQtzcgS46aGgdhCAw22UGKeWVbxaKxA2RTgo7E1fQrbvZ9Zw5rCM2ASzqqPfiwHtGf",
  "key1": "4YPbf7AXSd19UGP3BkPxa1Ev58Yt829DG7crxUg9E94ruyDiHe4KUfxRrbxbtWcEp6HtSVdcK4hhmD2ocjY1QLdU",
  "key2": "436KMPaF5ynTvNx6tJe3WZGgod6ezurXtmVMXGsdQQgvdZpvqW5wPL6QajfEujJW6ZrWYJ3fxcvGjxMwgHVmkyxY",
  "key3": "4yoDF6jWQj6xouf8oktha4qPJcsdodkhQrUnLiLfP5dsU4KxDGrK5cETADiEm7UnWKq9MndB8xyyYw5se1zSRnP5",
  "key4": "2MR44hByEFzLvvM9CNjrkzmq9hCYQLsZ3fJ8srkFwg6kEUeUQHnEncjAUvk4xrJHtc4amffAREkq7Mbrx3XfJmr8",
  "key5": "f8bswDh5LSCfpJ69JEykTEZaLTWCjYZi8WhzPa1NLL6WuvCr3c36Q94LWXKRpb3gHavMJSmStg7iBgAhw1JkpQ7",
  "key6": "58pqxPJPq6sNLoxUv7xUz8TUyXvqjsogNcsXV7L9G9v5EhdQkCZn8VNUurdFEZbqTHkE8nNn7VQAk7QvsqgE4QZa",
  "key7": "65rPxXEGw27EY1XwZKnL7sVUrvCqCMA8GTLwdcwBohXZvWySJR2AoVkJPEym9Rif2aqsEps7dzajV7QCow9xwXfV",
  "key8": "2c9bu4Cjw8eWpye3aix1wkBhzjZYaT7sBXgLsC4Yb6953vfsyLRK6BDvjLLnQRHUf2R3fwFaCkHwBi212YPphfqz",
  "key9": "5ALTsUyrowtoZzqy7fAMLsB2oU9gg3BxdhbM1W6sx2KTHQihqnFR6bB9dA2DMLKB6bUiuFRttMjProBA4TwioALQ",
  "key10": "2JMaGwniABPSyTsuGEfwd9fJf3r9fcgF6VjLv3YwjWMYN6QSRK35rU4NJAidAdYFkFF5WVtQz1q3WUqfsvk1TMge",
  "key11": "7AYWBSHU7n7gszHPes1hZqGqSNbxZeYvBb6QgTvh9HTJV1UurP82cz12bmHstptA4qt38inWVaun9gSVRR1rcNQ",
  "key12": "5PeV9F4F3cs4tjMkx3bftTseFwmYXWMFasKazhXZF2eM2ATWKFfaT27AnDCCMQctyiS1oQnD2Lx1VDyqpFW5d6o6",
  "key13": "4RjZ9L4BUtSakUmixhrHyn37FxUBeVqfT9iGtNw3pd43inqJ373NsKJeAR4M8dtvUBmgksBEneQ7cZ8y83dJio3h",
  "key14": "5uBWBNRPRyYFU6hz2E5PicXvKj2mPwumBk2w1WGHtoxKsUphwDPez27ZTm1cdPEVXRU9TnX5nUV2XA2Lv9XJKzoH",
  "key15": "BRX3fDEE4tUii7776Bvnggp6SvSHzmprpSzMEmND7JbgM68THPoAudxRC5zzQM3SyniUDSWjzeGncS4ZMYtZ4DX",
  "key16": "4WViQSLnnKb3LcWzwKL5x9Wd5DfeS2e6rVSrc1XUoHrMPsWM9opxpnnpFVKZiCWQD9fWU1CoEYXLWAz73D2Xw2YX",
  "key17": "4KsQD8TCujcsw99uRVAdPNEUdEFAPzu6868GagXCFENozSwAjSGeMtFwwJzMUg1YfsSCfKT9mVry9fv2UGXDiYBx",
  "key18": "bqpcLig7oV9Tmq2JzP7we8zpQnxB7RhPgoWTavMCNiHj4v3foiAsX3tWBfwjWbBjCznUu7v5CChfuRHPxTcbxJj",
  "key19": "2V9CUo8mXa2XM3fgaS2iemEYRhWWcDjE6iPhNpA4Si47bsxBDee8enDotushzhDTGMCaDmkKnYMHBfKH7aFvAL8F",
  "key20": "5UD6WnXXcpyES3CeAbSe5cXTZp4pVkJ5yf8Vgn3BW53jiMiQEmKLaoGB1qBRCMH6SRxe6KXKFuyfVdHYy56hbSFS",
  "key21": "KwJxHaacugaxm3ZPNNgHP6geu19fub7iFuG8bz2yN7PbcQZuGnnzCLvexNwrhE8a6jdHDDrXqxyUxdp4hdSH5Jo",
  "key22": "4tTe3TVLVmaUEYQjbbu9go2duQZVUDqDk8KAto2YR9Hrji9dx6S7pAQY4wMdG5ZViPLRbU2NBHuKzcvsUigK837f",
  "key23": "4e4zYZnhAzjhHtEZpLpAyqDYLMpNVtFWpLDmy17oLnPbe48QDMz18LKy3hHysnb75W37cDdqPMN3LZWSuWayz8pS",
  "key24": "iEbSN4fDZaqi884pjgWrpUJjSBdGBTTYncrtF7E58XHAHmXN4i4HqM7XUWDBHXB8yQ6qES1uTMdjSo8YmtGaDqG",
  "key25": "4d4FZHryrYbNEYKbxTBSYqkqag9ripj53DpicquEXsCA7QuDBNtgmChUSMRU85uB1zuVmohHV2G1evTkgSSZPP3d",
  "key26": "3LWuhYw9rJjwfGgfJgc1p6wEpbKZjcFNUs4Vt5sJrmAxho6HLVQrgLRy8SycUVxziMhARN8WkyicYS5CzZowhGHT",
  "key27": "2RD7cD4yFZqzT2NQEFZZuL2YXyCvNvptksadhZv5aDcqafCsQquHCTdrR8RTJAjQAbWwbvkhLP3ChTFmCxWf1CRk",
  "key28": "5JR7PKPZL9FEqvPAsEGMDws6dm4G9uRBuPW6MpGGoJrRBw2dKVdPd97zyfLWZg9d9x29GVKtgL1R4xx3yet5c1Fq",
  "key29": "2qnhDM9g3Tsk9fZ8HNwKgty9zvGq23VMBnJVfX3C88XKVmNHsqiQARt9PpepkN3zw1C5d8hQNuN3UGYJeoV2owdq",
  "key30": "WjW1aL6ptsXcLYuYga8MYEamXg3jqr9Hm9U8RyS5pD9sbVQomzdg1GMVGe5yZGGwcx6BVqHvXo9BSfXGrzgQPjm",
  "key31": "2s37KaJQf6AcgS8SjGgo9u4sgUFd4y7hHzfnLQXJUHQz2HesZDWSAKzoyqjzXPSDujDZ1WNq6bXHRAPc4231XhXf",
  "key32": "5AysBpiSUwMhNG3XvYVq1WEekYPtpErCde4S6vaA2xk2sk68vL2R2bTQUYpxaUdNM16gq3Vg9S6r4AP8rcAxey5p",
  "key33": "4jYHTx6Zwvzsjz3tgnauj4iH88c9DU7RwBMGHNamo9EbxqkzTi8XKhJFoktP2MFx5ybcDNh8HACdjb7kU87hJHso"
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
