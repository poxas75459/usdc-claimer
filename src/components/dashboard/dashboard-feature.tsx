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
    "3TizGkJaJNtJckq1HDy2MsPG78VKQXYJxzSLqvTMW474ooNaMjp4ohPpAQs1TZPNYHpUCb987SsPwpuYJbinSioP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qro14RbvBdSFnpFEsNipahz41sBa3cRjAc15ghTrgQMtgRB8ryuqgAgrvNxw1tUjUGpmC5RFc1fp2qzHJf9Zt5p",
  "key1": "V1sxW6tEPxRbBfwd4cXZQF8waWzmTum5DMFqmod2oNreQWdexJM9DpaZqkuEKYrgAyAqN1MVPvRCr3xyaVxEdZa",
  "key2": "3vJc6wi6zJ5rRgPpq7ZathUKFPgDYu1BMBSFxRFuBRzEart1SrsXddUjUyEze5V5HUMGD7WBHdh1uQDAw4yYq6pA",
  "key3": "93qC4onCesjhrFcTUwpRXPg1JkembtzANERr5KN9W7FYrpPm44djXrbigNFNGGedhA4VUYW5MxAiDBwmGkmNaVp",
  "key4": "4d1pJT97CVdtthzpxG2uVDFnFLTL73QWFnof6DHq3SvwuwZL8PG6YiBTwwqtFPZpXF5FNeCWskQK6uUX95WeZkxc",
  "key5": "5GE68tWH6jSo38yADxgEtaFj2sdyzbpXJx1TgfR7BJrqVwwTL8v4hsbjpphUZz6mavdy5dwKDJcVPYw5q82wUGKs",
  "key6": "2ySCvaAvpxvJmyXdyBHBXpKvu6q6B5QWa1N92pr56y7SRe8VbgEeLGmUZhJQDqBXmbEJ17khiL8XjQ4GXHniRqWZ",
  "key7": "3uAnZc1GLSL6htvPTDsVBQvAL5UgkK4SLGNE2vMcWXhB6miNLEtssUgH69CARzg6TdQQxYM7M47jccA2HTf2psKj",
  "key8": "4q5FbfNQYNsTUuZVampFzRgZafYPyP8UjgivgQJvnn27MMnKa6JAUnMPqMUW7YkrrziYATdACvuad9koFZTnBybr",
  "key9": "3LcDfdqErzY58SSDAQogHVKs5PrSCKkFUVm76MDA7zKB6upP1JvEBhFWdyX6KfVQotVX4z2nq9oRDWEQ6yQnLC4b",
  "key10": "25uzd5VM3d3nePwSEB1z7Dn1AUH6fx4REzXJoNt5vFRX3P9mSXMkfh5TteD23eMhXbxqCMpQ7tqmB6V9A3ap5Cck",
  "key11": "5avoJVGiGe42cZqh3BY7W89PmYUmSsbwTCq6ww9R1LBnnUVqCxuXMZiVpFRVYLT6BvY94Qby6sajKtWeh3BDM13R",
  "key12": "3LkBcgHoLBzEiR3x3dHojr4Cb4FkXCsrw6RfKbmSeHXJ48HL8AToHSzDJfxwMgHLacAA32jewBQVPPMeS4hWLyAM",
  "key13": "2pDjrF1dKDP86dMT4Fyw6rC4gvJJwa46rmcJgf6d5GzxYPvjs7wwryVuVjHRQBStuSQ9Md69YXCdmcFELkuusYqS",
  "key14": "5N8pEhesQT74cZwhN4VvPG7Ng6GgAPqzvJaURmFtWm9wyEtaGW2aS4xL7ewyw7zyThUYJdo6f2ATZUy6XZcNBpJV",
  "key15": "2xqVwUuRnvpZkNXD2Cax9gPMwAjCdBZoyhqtJTGEz4HEdr9MoxmG4YywEumE8GCGa9iQju6Q3uh5cDCd6Uq2aW4a",
  "key16": "5RiYVWNtHKVTR5648rNCCWamaoCnMTPUHVcqUjXs2coW3ZmronysMqiPbTgNg646N23fysbrZgxqunpEMaoQmBMT",
  "key17": "5AQaySzzL65PtPsG1c3ytpwbjBfV3CwJ3QdbpoXayaYYaskABsoRFPteg5w2NWq8thrPYcehii3uQNaRJktupZdX",
  "key18": "5uS77qqg8EkjpyEoFVYFbNjb77Z6QPrAQwQ7qhaRxCsBgxJxXaELBGivJSthS8BGEwkWSoatScT35YA7HBk3vK8m",
  "key19": "3zyL27meHJ29ZnuhACFJWZy8gTyuosnqGMiDXQCkZd89M2W7Bftdp2gwBktXwVxK1Vn91NNUrmuyvsL6omHt4tJe",
  "key20": "2hPW86zCHiGqEbZ89W4bn5MF2niTE8VWReicVQTArMvu5W33f91mRmQ4ktFXLVrnKNvxFM7deUwLVmHGn5X4RJjc",
  "key21": "5a9Kxu9FTK9MYeD1RPUcRptCtpoD1FX18tTzrCqB1UFMvXqSfLwvAXXmJLu61ME9iocekDJkYrZ8P9dJevAy2njb",
  "key22": "5hBK1Q1xGPouS7tTYhdcnopGFenkDpCmfj7SLWJUzGLDJW91eCMCruEVKnunKF83diBaQenULr9aGiywcfJxpNsg",
  "key23": "5riP9C7cGGzyMcMcDv8ALfLJd4wgS7Y6dJNqKcpfRtxHPegKPPdJo7owAodFJKrPdytWxQdAe7th3wKbfe3DLXGG",
  "key24": "1NQhjx518pkKrD9budkoYgm1BZ9z4K84mGA8FX7sBUKEcZ32XnKF76CRa7EwaZpnVcsTEUvF351CDCrbcr7Mrmb",
  "key25": "u7w1MRfcVTBu98AeQKo1XGazXYMaW1rzLyUByLgWsDDApwPUZR2yau1jwoiK8AT78NKMfEXz2vuyBEireufaKXX",
  "key26": "41zgpuexpPBmn4ftHd3DPEAVTr8DPJSKc5PwUqezpTuWKeba5rdx7G9H5saUiUsf19VvYWLaXKB28BVwUNPfG33N",
  "key27": "35awr74SppR7YEhtQDyU6BtJpNnk2FydeaB7UbyV54LjbT419aF7Z2K7GBqBt9s9zhC5W368tF6ci64MWwaNc5QG",
  "key28": "448fYo9zKgmaffGtrdpbWe64JPz4oxd19XqxyaoPbdEA3w7hkLgX9vAEpd9LFPJumTn11HG84CycY8HwXw5Q6gYw",
  "key29": "228sFuVxDTqv3ZpvicNmX1TsGWRhN9LsPKFZ9L8LtGS4A9EyL5xUXyCaXcKy1Cg9PY2pA9mtaJ9G9ik17FhcZAWW"
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
