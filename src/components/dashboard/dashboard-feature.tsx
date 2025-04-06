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
    "4zb9VbQjSfa7gxGnJnWoJ4krWwHenEfgnbih1xPomDQBtKVf16VcewLSXzsUGBSin8nmyX8p3HWTexFfeGTRteuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hU6Xnxok1dikiZJY57V1FkBeM4XHWN9EeAK123ePPDi1Y3XGqscheWXQoHEjxVJtju1QaoC9SahtesDyD527ZpC",
  "key1": "3JpvsEejem7oxUatffmqw9QbrDR9CsepJ2Kb4czMLm8TBPGuTZBwTWVaFfVNmF1rQaKu21PTvzbDEnedbMMsKDin",
  "key2": "4kzJ95W5eWuuTdaexpwdHbiHY9x8PP42PcmCp68es2TSEeoYKjgnr9Ad3Cm7Qbuj3CbKdbt3EnCkSJSFBFECLeVU",
  "key3": "SQf4GeLr9wqRZwKmo9P35tT8X4p9ze2tT4kE6RUUikcqZcedQGY71e8f2tGNYooyEs98P7xQPTk1Y8RVNu6E4Mz",
  "key4": "2Snu2nxbf2ojLnpFtKJejC5THXt1KHT2EYss1jRwsu2RVAiifPy3SsN9u269MUWAwbsjxz3Ht7U1kg61dVixvjQz",
  "key5": "2WuboUWAbZfSHhr9urAcB3NHUMdXyxnyB783av5Tf2N5GrU8MvLwAVkSvix7m3Kdiy8E2HG3s4bqPpFzoJ5vhN73",
  "key6": "3mCgTiL63nx6dXE6pEWUEkG6f8d8ktGXZitUychXPW4aNxFag98vvWra6apUrqV26Whsqpp2EyvtBgb7tk8RK6U9",
  "key7": "2MoEMYGsH1kxoejbeScwZcwt4VfeTP1vyeEzjKv4tzMZuqJ5Zzu64oMLbyexNUjbehzw5LbiVrUuGmVXF8bu3fed",
  "key8": "3unQ3tNVu4dBqrUorL1PPVJ1gamuagn4MBPAsEG1iJ3bZV8USuEJmomyTAR9dNUWx6pjxRuWfp1FMEG8MFoSMYMu",
  "key9": "3rJgs8dBzqoP8GNcRSdBhZhZ2cQHvv72ZdLrmDgR1ao9Af3qwmjSPNaiT1co5DxPh5jfJ1r1Mt7eHg21jzcbidvd",
  "key10": "125Hyop8rjmUYZsMuWAU8ypThsMsGADnyeJjh1KmCnjqAogwezq6cjPsjSUF3ZX5W9HcRTT1GxGbUEmMyvnt5XbF",
  "key11": "4eWzrCgqq52kSxvCCpdCGKG55QjMQDVjocCn9TmmJSqBWud5GTa5MYTENDDJgmeejfHUzt8ZvyCzMB3Z9jyQzPwg",
  "key12": "4texduuvUCuoA8jkxEmg11FWkqkbyJJiP7nPpqeG2Vhyp6eNRnwF1FoKCzzrzq2UGii9tA3m5NnM6bbfNAAYa1s",
  "key13": "5KH2sBW26qPcSM5w3N8ckArxcV84CniiBAT1h1NBWcvoQKeXoj1nGF5ZttUe6Wj4A9jTRJTRDFwUYEBt33x8DFyu",
  "key14": "PWkkRJb2thzKzm89FUA9pNDxEMDh5PH4Q8HCN9y9vb2MJEQLYAqQHKnPXuydqenLhbiMa5scEdiQfoRzSu7zj1E",
  "key15": "7w2Wu2XtJFo2URLyaAGiKExp7Cq6GdS6MSwB1L82Ae4kApbKpLqfJBRq61Q5YxHbzhuYdyTZKWwMYYoyDcVe2EL",
  "key16": "2BsiMJ6GApmzqTzzionHRU8nwnXp5Fu3dC24yDYrDev8yvv1qWwG8H2VMrArQ9GNWYZupDRdgEc156tb3gHFyGQY",
  "key17": "55qzAsZr1fb7s1Eip38SnGpGghL5xs1FPwHB3cyDr7JRoM89DSTWAfMkPmmtWuZV9TVLoAdBUWax322zQw7N9Be2",
  "key18": "2H4QodXusVH1wZPVHwiwfKjWvcjnwPLBLgXFCgRsrvsk8ht33vZ926wr3seQK3hpyLGkRGGtee1ybRCbTvwShC6q",
  "key19": "c5E9qRLJmG1BnN3DiDzivKwhJVWRw9C77vtixFwEra4EgK343YrPPHkrn1jeR7sSbKBZKtAvqdbyMuwBRT3hQYn",
  "key20": "3W5ZwZNWxdJkMtMkT7womxdf2C6oCpVku61m6kdnnv9n2LhBdtWR3bm1aGNhP6Ygo8kn3GnWrKABVauzfYECQCFC",
  "key21": "5yHmNUdUmzZ2nE12xa8Z2xYC9yLyR86xYvjUfqfS1EaUwMkKAFaW6Qtzz8CqD62aCu9FV4WbwQKZKAbhVFnHfXCg",
  "key22": "4WdGV5JnmpjDAnVWxNcrSBBvX5H4gz28CAJuQ3hTRZBM4im6ytpEfVfKzBbpJDCP847EahC8fdjFp9S9YRsTtJa4",
  "key23": "5tXbdQMWdwdsDYqLXJbXoXLD8TVyoJk5ftnWmKNpKkUvN7oBUBLipGp7fvqjFuCdicKArX9cLf1b41qmxcQ9qkZh",
  "key24": "4nmtwD6uGXH16R22mR62j8dhqUitEoTYCRe5k5ipDqjEK8SY3xfVeygZ8nrTKHuwYFhXuQUrrqJoQRYwwxc3TcjE",
  "key25": "42WzcSwJoSMJ651RTUKRHbKKPBBp6DKTNTPp16qyswcRuy48gsWikMg13ANo5W3jKvocbWDkwpdExTzRv9fP2BSD",
  "key26": "36sQKaXMj7mug1gwTTihbpnmgYVJGV1Vva4bPPBomPkrdRBG6QStjrayoaFpvu3KEtoHKxoc9v7rT6Ycj9hYtf23",
  "key27": "4rhLBXsvHvD8Kggsbu8BijT7PisGb9amxS5g3RcifsH4oijgobi84AyfvAnyR7RTEZedevAENADbf9VJmtYC8rni",
  "key28": "5mz2XFTgwAiCGi3NMo8JXK7HiyN6cULXX4wzWjUHDEcAMCmes1UKTmSgkPBCh2UkmHbV7HALryF9z8d18SagWuUw",
  "key29": "5gxovEZbDgSfkyMxf8SGTvDgkVwzF2HZR2TTthGEfWjJ3W9zNU8RBBshP54jon1b5yqWTeLRR1Mbm6epnjhVF9Wk",
  "key30": "51hUsa69GmLAmMxuj811jxykjUR5WJU7gutWrYkj3EMwF8df1p6mzSAtaY6uRrXaHPuNkZPgWQ6vFbDwdHGVWvxp"
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
