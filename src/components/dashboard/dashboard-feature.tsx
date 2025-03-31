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
    "4N7vs1kaa19MjFbKJnaZiNaFQZTDKGEoZseLc1gohJ5A3RkyKU418HD5HkXP9SPUKY3tTm3QXtksndRANjkyT9UC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kz58tP6rVxX3K1Y2jGevf6jJ5qAFZRq24DQUT9TMGUHdUpDtNQ23bdZdjs4Kp7TdgSkVERzCR6c7wTGkDn9NrYH",
  "key1": "3E4JBVQH8v8GWRS2VoBJYCFT75YmSb1s1EvSW72JbAsvVc3JNTanBWRxQNdYdGGQQWBGbC9X81paAGyG8vpBiXV9",
  "key2": "4H4Gwmr81tjxjEUUsYiKToFmLAspT4sTgv5o61aqRc8nZH5FqSMnDqCcLJ1VmmY465pZkUfF1hQ7v5WMRoYm3iaU",
  "key3": "5bRjCybXWnybQbvv327c5kWs7ZuKTMDkmGvc2L5PH1RckV8qgz2xxcuSWricbVfwPkHzaM1KRXcBGb56znYKz7nP",
  "key4": "5icKbQxm25PNRyNgyQ4LPKCVVyCmsQq4cN2vhGCVq2RxeZm98LR62m2Aj4eDJjyjYoTPzgTQoaFnU2JPPC3wds8t",
  "key5": "2pu78TpAh7jN8SXhpKTLZuzxbR8qY9y3H26BPF9fn4N5s3PkBxrGa9hhK2n8jLYu5Ei5u3wPPwz4nK25fdh2U9ny",
  "key6": "2qYD1jLb1ieyBzvYC5XGkCRgCBeK718S2Hp7ShjorAJgMvHFiPgfJt689zbc8bk7cQFbuVpMhT1u4U2epG32hGB1",
  "key7": "4Wd9Hqbf6GmrYb4yqrfW3rCm4PNkqXbwb6xBSRc6vApbHz6bfsyWyg777EMBu2T92XLvTXheWgjFsAK9gPLPMiXT",
  "key8": "pBptX5u2M266fU35vW9Fe2JoS7DKs7bKZc2QrR2EfaMvzC6p4ocK7YX2XvbLikRxuadZ1LeNzwN6vpfbXqLrHzZ",
  "key9": "pabnL4mUqswQF2ezSSsSFYYYCTL2NqW5WBJcQdAY2cmibY7NnPgNP7t4roQKsiko12fyr3yS3aKkb5DinytgZX2",
  "key10": "5F7QFknqGyt9s9xB6jrJwqPW7PCZ7w4eCFspZQ636UfWenS2kNBTAkJwFatzcxCfB1DRhrmgSoKdAYtqmeRFfBuy",
  "key11": "2ysdhRRXSSsZs5LK2SeNxi5uAuMdGXpgaDso88R9RBzN4A8XK1BK1MT3XWUga9ta5UbCmpxCG1FTtJgL8fPGmdD2",
  "key12": "2rbgErksX6MkK442xiFrbFVyZ29sT4VXXbDPPJyZGmA9i3S9rNF4sU7Z14pnLYfJx5YjfYCvXEffm9NJXVHG1NFM",
  "key13": "5ZEtpcr6tbeQgnfx52QGRHgQyJRSnVoW2us6XwMRiHN8ePG2HzrGBvLBs8MGfyE1VLmHm9ggfUWPvHLVBu8G8rd4",
  "key14": "2ihx8g1FMBn6Rdj2WtQidJYcmvxZ2rqK37u8dB5uQnbJNVDWngDMgsaprMw6p7zL1AyTHEKgHFRa22oyaXFAdbem",
  "key15": "52LbFBqvg8xbMK3YZcD5GeGkNg3Q6vCCY5LYdSDzojFfvN8XDPNLAgiP8NBzbdtg9AFPgrJRSZVZXSiUxJqWwhbq",
  "key16": "3hcG144sJwHRNdv1NTyysUSr7pYzJ1rmiRZSn1eHvTKRWX5nBb1t4aYKTQr5xSNcSJHrNWCeYJ1arpV3qNuZZbDc",
  "key17": "3pgKrSmSKJpZMJHQ8Kp3CgSTSBoUBNcQmdiz4inSB2RDJvjkGvDSFahtWPqzLoMXsSyNFEdfM53hzyjq9mec4vd5",
  "key18": "3h8c2r6BXvC1wX8dFj5KGthEC8m4dVt7sGZKJnumAh6RgcUYKFvNdkXcEdtY3pDvuKkbX6B8WiB4DDnepCbv4WSv",
  "key19": "NkMBkawYAZ3z57Lw2uii36JGxp9PJtn38DrzqgzfoFoG5Yym621K5DUyPMqvAGC1hHDFoo87XSdcrnwBxrCLrWj",
  "key20": "4ErW2VHQQ1M762K5wG39BcH5NXE2ENSPU41JMsQTarSHmjfWrJLhSjBaM3h1ffwFBaigLsHKwVVuEWyLJgLi37MC",
  "key21": "2CtRtRp17AesigpmTjYfCYd3Wfpzf8P47C343xRN8eQXDRcSX4nijqBuVBKwh8q2738YrxHZT9YBQw7tsdqocJKi",
  "key22": "3xZjT4b9Vns4nZ2LrafNqxThbsaVN9Fk5tNHr63w2w3q2MWyosqwfSmfeDRkpvpbYH2yKxJJdw9rDKJzxXG9mbyY",
  "key23": "3HxjDyDGDFvfQsUjbHDcu1q3XimHueb5fBY7AJLhgHy8x5xChTwmLdM4zqMCdG9m6WGTJvyCJis54y2Qv2FRKNMk",
  "key24": "23HTsxdLEiFt6cJQ1JahxCCmxs7auzCZpzmBbh9c7TW8iG8kxorRBPAN1XXm6bmja7dzwfA21RcsACKe4yo8WaKj",
  "key25": "2ErJBauhdeT35tqoTybzEqv3AFpUq1hWLtUppmGefuwb4H27MWusxzp39cJREBTgjGBaJKPvPV8aK2ygATQmjtxx",
  "key26": "65G75PMpBcYbt6zP1StnpcwD5gTVQTTZFaYx7TjpD7VxJtZ9FyDDWgbrDjNKvJRWTjLFDLYy6sspioRzymwbzXVS",
  "key27": "2gdJk7xBrjDicyhbr9dYiiQALF6r5ZFuSeYDywrFgkRjyzKnfcoGVgWVEVTiXXWHs4Up8gQaWkxEWzvt7sm5v4wu",
  "key28": "4wYh7duqUMGnHQqPGgaTjgsddKKPSt7xwR3RdtKJL5KgqeP6JCBp6pW6U3mvzgyB7Dr9yEqkYxW12RhvpPJQzoSE",
  "key29": "BrKG2ST5uajt5fkNi9csaF6uKvwodZPH6sbNvBnycQppboKyUxFboJEYS5ET3tSiU28YMd3veRfXEq8ZkNgd4jj",
  "key30": "57wHPWdsC1751u3u7ckotjZLT42BMJDyaNr5zY6r33TbpCjfcsQEqC6zb86GAXvpyTtDkXDz29GRQM6qptDEPie1"
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
