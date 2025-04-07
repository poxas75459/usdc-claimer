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
    "4w7oDPBAG472n8mKzLxZxzHSEYNKrSQ7cTH5sg8jhqhPKUAcmv4WmJQXS7RguRy9TqtEgbaSgHZe3vzEBE7kU5SG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LnG8WkaTP9aYkL4r4U5jHZ16aigUWAVPUf7wv2zzz9GqH4iCJGtWrEKV7MhBNg8cPB2s2KbpSGiXc2u3SEQXShH",
  "key1": "2BirzVHAQSKRHLCQ9TMTEyk1MRScruLStURpKCPAWQDEFPH1jmhfiZt4Mv9pptHPTN4TKoQFzLe3GSFFuKy4Waxf",
  "key2": "2n3j51hrsHmUkRZ6BQkdqjsHgWiHFAd8enTGfhQYbb3Gga87aHeT2QPVqhhBWXi5KxQZwB3bJyoEtxH4SoQpo5nN",
  "key3": "V22iwx8KAVESuRgSnRPrtJ1HfLnWw5X9BDofRDp9y5mhTUTkhs3CmPQyDD1C7aX88264nM1ocB4wwhJcrR6L7k6",
  "key4": "3YBVxTkr5ozB8QnYos5FHcA1QFV25Tsr24mGvRWBvTnSbwybstar9U8hH9aivtZuaL4gtv5ydz87nSk9s25p88T5",
  "key5": "3ApohboHffc7CGFnpr3HPhiKwsAzBnDxA6NeKW3uXkT8GVK33pv7v8vorniD1dLZpDX5ZAqoKPCt95vgHLeNGbdQ",
  "key6": "3HW8nfXTqqugjxJaJodwuNGfen6Ba8mEas7fBuU8kq3qMgvxGUq2bB5x68ABiRmXcZ7YcfnHMoPJPm8eLast5GAU",
  "key7": "21XtPRxi3mdVyvP2xKwmViyezqmPwHEQLxC9p4ucMnwHMpGobxxea1JC2Z7EgfMZKAxffXgPBMMvVxUGnuYPJsYM",
  "key8": "4HPAvcoMfp9dhFYiUwpZfbNUSDyXs1FmYz1gfHXVR8gGmgQFQRBu6pnbcAS4oR2ibuMkUNdFFgvSDSKPVHEWewAW",
  "key9": "21ZmaXUF4NK3A4MM5CqrYGEG2yaY5XF3dNZunwbyyJJnWPA4DrHLZvHEhCsw5NdMNP3puc2sG7NvzJpfsvWbActZ",
  "key10": "595KkrdjDA8eqgtoWwqrYBMToKZvpzHMWCaSq7QU2AtWaeFJXn7wFQysH9WyYMzHnYmofcvkWs8oicyjzRCWyXs7",
  "key11": "53rWv1CaAmYH9nfLEJfkdXJVfxqzneeWcmc5Z9Zits7ZCu2jpQFVqQSvpGWvxELradKAx1Pka86ubJVfaZDcA46y",
  "key12": "L2YRFkTjRHXdvyzLdzLicJg8buRVBWkLTU26qZTRNiPpZgMNhH82vJVocPt8EZkYmffFDTkMY9ysfffRoMjVFyE",
  "key13": "BPqVumGK9nMwYy9tQup2Zc2CsCxVg9Xycwi662F8BrLvKJS35CEQRGu6vTjvVYeSgw31Lte2pypnKJaxmzb1jPy",
  "key14": "54SD6HdD67TFWoCSf71yUSzXmjcAu2y7vD1Jg4q2tmSyDh59qATtc9CdpZLeqQRM2idPxAiFm7AXrmj9trevemJY",
  "key15": "4kTozteaymgkHGjZyoMWbSYmYryk2CHBva175LcHhnw1SHUhVrjykSFrJ4N6kJGkeJg9dVdNJLTqyKCgBE7r3LDf",
  "key16": "2DezQkSVnuC2cDZ4JPjMKDob4JqxgyKoevF8PbrmPvsaW94iwbmiTDXiYUx3h5wETo5ERvEM6wJnmi35v89xoYXa",
  "key17": "2ZaTxupsJn4xyNERysjJejKiS11gTRCiFtrfPVo2HxAPtATnzpzpJqDWHL7X6DYxMdJyTZZHHGCgazfWCZ24ZR11",
  "key18": "4Njy9st3L4CvuJeh3B2SFq7HY5ihNh7mYccc5To29qqFDFVaNQ6jVTsu2bq9AVk5YwXu9V5uGmaA9axmYNcxJc1A",
  "key19": "4gUEV1RZXjnL2aQXsF1PPZwWu48TAyVgteg3xfUrvNRz7awLeqGWPDjo4xgkXJj73u4BbftPJbxbRDCCS5PvHP2t",
  "key20": "xZbZzcae6fProir24ep9wAUAKP2WxKVTfWD55TAPbDYtUDxbCg2vkJFzYUBCTM8ykaTXtKDv9S8Tbwd1PaMALe6",
  "key21": "3ocCEDsfLzRAF7gKuyW8Mb5Lsr1BgrfwmGW8jMQgQ8Pjp81M8oHBBDvusVSGVaSDmKMdjJcATsBTnzxjdf97uXSa",
  "key22": "Bhh1vBQM4BJeEyjpu8btxCSAYirymH7zaKmKU4waqAEvkp79FdGSwYBus9Z598buPFHTzfH1VzkajzdzjUqD7uH",
  "key23": "4JtsYa2hwpssED8DUMixKVY1upGmJYx8G59CjNgzChbRyUG3CYfZzRz66AARKrTewxcNQoZ3rhi9Sn4LRih2k8P",
  "key24": "51BEMA5pN5ubCyFazHqvJWLNMYSJsaAWAu3kRaeTM2cFsgtU6LGGZsXvzKvocZr6oa2AZEuCxpsjHhm1phzgnUmt"
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
