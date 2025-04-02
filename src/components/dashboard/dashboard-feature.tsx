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
    "2UmNKg5EHSvwbjSSh4xgNJdu9i2PQwM9ddChMZiXBZ1EHu1Yf8Dmuu1Bt9rN8Q8CfLBd7JSn8v6rcSttCfgty7MX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RU73sE9XXgQf1AP4VjhyFQwqHESzHJT8MpLHNwUn7FzNgaEpaDQbKwSYpePkEvQaykKaaDNGumLEwPVNEPxkVpC",
  "key1": "3UK2RPgi7zXxT8dLiSoxXKcg8PemhXnjkmMnuH1FHWyevU5tUzPYKMqtePxVBYGPKdeKNU4pTtpFhnsoiBpjB3wM",
  "key2": "4qWMiPVScbvkKFe6VuvMtnsyujkWeQtDzutqaBoQUsFSA7usmdhU2zmKvhHuPBEn9RhXKLfeTCPWUoCQpBQBkruW",
  "key3": "4hmvVAKmLfjU94kWsjGUb2DcSDzADmVLqG9Lz1r1vB8hzrxFFGXgB3GcPGFA4N9L1qc5qzxCmDiS94iVvHinP8ab",
  "key4": "3uCc3NvvXCANU1CwSzhXtjdE9txv3TsJvHTZyYvTFpkSLjhZdwew6829fZDBhYwRh6CQBRZJ7dHkLR2rS329ahqE",
  "key5": "2USppkoP6ucKUC7KSqVUcFnUntKvPmmrsMTumJpBLEYQ58B8aVD3j9v5idqr3D6iok5X46PmhhPDruZT1keYHcf4",
  "key6": "4Wc8iinAY7zVZhSPzUiVghTeeyvj9wUMtb9zVDT8iGQEF9kcuREATzpuUPU6cVKT6EhifX2MzuW1t6W7HMXw1znX",
  "key7": "3K97z5H5hH6suf6i2VEuYtEeNshDrjBAi3dV5y21zBLpciJVw5LQUCRNHpxDm8AzLKdPerKdC9cd5Z8suoxvv6q9",
  "key8": "5AZP2YjsnMiUT6psTieBLDjEMgADn6sRFFg3zuxvY7TfUyvC2SyHDwHt7mCZ9Sdvn8WsPu1cKdYeDZFoRxw16M2c",
  "key9": "3SRS5cHCyaYAcrkwyT4EUeYf7mtvfMpXTN92L11bKb7MUwu7em6VN8uF2dc9P4itjXVFE5VKByUyStkHwxqyDaHv",
  "key10": "qRfYVPxhqxXjHaaxen6vmGB9jYBewKt9giP99G28yVh8M3tHSdycAiAeRowfEZKxc8QDZ1gvHRskcB6bdoJz5YX",
  "key11": "3WjniHzqKrC3wjAJzKMeZQ55JyXKS88D6QQmBsmHF844gFibRzZ6yenL3yCX2n23twduAB7PsNMnTh3KvycDvkM3",
  "key12": "58H9dWeTi2QKzunFHcn9iNGThFVuvgCcBw6FGjaZLLcXAUjVHns1c9xLFFh6aEWvgikLgojMgKn1qqkJ1W2RqX2K",
  "key13": "4iJT7VDAFBDZt7UAe9q79e9CKfr3FP9V3hBW8XZZM8fmcCWpPekz7FQJ8pKs8uEwVr75bPmxE1JAvAGgZ7PX8PPX",
  "key14": "5JdReJgMYdgP9syF2Nxp4RnNVDX82sbtmcFbKUiJXB1eeGYMN92VvFcZdnEHqsv5HtAcPrnNkQSSzU713vXDLHf2",
  "key15": "4jkwKDsNhzoNnB527KmuK7GYBZAqgWPwmEbAvt6mtG822D9adEyW7NCnggYDiyZ7MxrcNftQvZyZbmTxbtkypogo",
  "key16": "3rpva8469khZL5eeSURoMT8PjR7LFQ6PLFYorY9XjNTabSeNWyZtwDtoSfSEhPMuvKHcK3dyruswG8RpfckBvtst",
  "key17": "3TiMk69xWNMG9c3PaWyTYKjDkJeekLzxoPfWUbh4DP6oTWjJCtvSK756S4gxLujFfHpTJFEcmxcnHNKDxNC5tc92",
  "key18": "3Fiym5bngewBqC5KYZnXWX8mgHxjjevUdxKLHDbvPbKEecw9yqxBArqZn1DN68K8PtRzkEUoJiumhnT1sD9B8Gyi",
  "key19": "dc3wdRzRoAmvug6tWDz5WMu3qBteGxQhjyWhCya8sQL7k4Nhtbes6DUnP6UvC2aUNR8MuUQsASpuxi7anCHWgAn",
  "key20": "2LXp43ngJ47zGD1qeYSkYFzVGGCxNTwFAgtr8dUxShTzGRmikdnbsEpiAXR88T6yfn4v3SZqK6dHSRy6h4fNfrbv",
  "key21": "4HXZbBXPNLSQzooospyWJVL2FmZfvpKPQjZFegV2EU3gx2BjuwokXLdNapHcgVFDpYt4m6syzN1iuZrY84wPrwKr",
  "key22": "4DotT14BLtopNzeaRHuowBVHpR6RHEPHRuJsRgXv58epTW3BuAnYSbZhK2odwkgXqssKi2GxFc8FJeMAM8bdNJmo",
  "key23": "4yn9na2kisjwVqkaLorekrANQZe6i1kTkUH8EP8AqFrMVE6yFJZN4mRyRtG4gCGtSoet4NsZNwxZwpQoEyvuV8VP",
  "key24": "2AhLD7uMtgYDhXqHUEgjRHz4WBfDRB41s8DCtkqX75V1vAeVi32j4AYSehfdEDedbAaECfwpKMKbMxEszqpFpk3J",
  "key25": "52c429MGPESUkGW6A97KfTqYMGECVZTEXZ99gje67CVCCNswRCnoHE9S4sxkYez47fpMypnwxtrMyRbcTQZS9wYZ",
  "key26": "4WVE1f1p7AnyXPWbK84VwMvn5mPYySnzmDNEtaErCBf1zqYLkQ1zTHRPrNLiW8aK3WcUKPpedpyMqxrFjTjH5paH",
  "key27": "2XNY6DrSspyzGAJWiaNNo8FSMpx6bhiMq7gixFwLV5C6q7HU2cFdAKM92YpvV9FAxZjQ8FnA52CvPc8q7MKbhAbG",
  "key28": "2WBjojKj2yBjTWSrSoJynDqMt6t1D95WqYWafna2KWZkUHEpza56jv7rcRqakGtbLfDKfdfvffaWCt76AR2Pu3NU",
  "key29": "3yiGmXu8bfMELVDtKZrQD74e5WTdjwDPN5aFzWgyHbEJZqpApFAnErJZwGfydAyzPqo7g9sy16s3MRPm3eU55iNf",
  "key30": "4xPDdaeVxgVngWqDwsuhsgU5wZJJwDR1TvNSniYZ3uvrgRrAZ2nFzdfeBtZqD3JRa3d87TGBuVHKd9HkpdEk6CyH",
  "key31": "4hduiiEJdL2BiTEHQhGDRykrLAq8SpL8XT2B4fwztJwFB6KH1DixQ84bhsBdMjfBmSEvB4NyaCrCcXzGyFBVDSfV",
  "key32": "3cBpuFqwGDAnVv6sPbPBB5PoPXSUXWaco4UbKuTmn1wAhXjm19JFqQEMvtFU856yPpHiGoWfffwcGwWb3EbTw7VZ",
  "key33": "4fi2EJpakVb6fN66bEGFLenprFmxTkHzwReJ4nYtEZpMvmepmKDFN8WjjiwHTn6rvx8KvrCmnq6qkHd5cbjMSQsB",
  "key34": "53e74ySh6qVHnQpP3yTZMJUwShZSmeZQGPmA4AaYtVhYmSVbUE7Xxq66HvYw4UzhebVz2M6d7CD4L2VjDWQE5QgH",
  "key35": "3Bbcqqk5aD9XLeBG5jeUA4LuuSVmdwUpommQgN6sbkc5d7dMT2hfRTdd7K6tpcZbZVfPKi9Cgm5zJsE8y2khUtu8",
  "key36": "2aKuuBFaAS5Rs1mu5yHELYPiF6XRnmgot4UQJeBEGeoWCjFWGZP4Dcm1C9YaRZRSFwX5eFA1ig3cqhDqjxexss3b",
  "key37": "2sJ1uV7r98Ruh6knHp2VczbHNgwZ7kHVkUS62o6cezdgL87tbkc7S8PLoaDDcYBqYmHg6TxYsBuEBei1oH9gouxY",
  "key38": "2BbQzjem7NPMpiEVtEGaL5heRw3KGSLxjosLv5EJ1LNqW5nhWhyZ2KnCezxCTYsDhnC3YPz2pUvFz6gCbiu9JEQe"
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
