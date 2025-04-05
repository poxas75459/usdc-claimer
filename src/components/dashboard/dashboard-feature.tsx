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
    "3ZRFg8yoaeHZEbcY346zQ2sZrpBrM8omfe6Me3GeMiMBdCu9CdN5Aewu3bcDpKhRVYojw3HBxGEUiH6KZqmkNh7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uxJiYCDMa7ghprbbVSvbTsF2eaZur3WSxuse1Wmc5kEMPxRstXvn7rPdPj45ccs8fG3fxP7n65Aqx9emM6VK9i5",
  "key1": "5iNrPvDj9dgB7ymx4LwLr1JNNK7X8uN8WbPQS8VLN5bZjJoYkuvdfniLfUR5Pip5QVRBbTQ3GRT7VWvaGwhHgjSj",
  "key2": "sYSDKiYWXRPvhssnrRZqctLBbQudshwLpmW4wn5bUrfHhoGnj6FXZxtAt7xebsu3g9LhUCB5LHkMBSujnv7DDov",
  "key3": "4iDZAYZFbjasdR5ZYvoHuSCCxbc3Rtt4SoiTVErnyFuDF9UyDtdsB2tGeYCWtB66ePoZEVokKXSqtdqCTLWkW6D7",
  "key4": "5cv5KD5oY7u74XEzXwVPMAVhAAsgaybC9W7QszpPycbewVBLXFZm6WDE1yAFLFvq2M6pMK3JtVr77qrRvUWFVZLq",
  "key5": "21wdoxS3sVHXqM9TVjYVciFVMNwREVSQWTzc2bsuZHykFpegdbdepMntCvChjeiniosEGsXrSxbMVFYuEwEGBXqk",
  "key6": "4YsLVEHiLKzYnfWAH3QYYsnRUTxcmdVvQ9LoDCUPdZLyRep5dqF844eupKnfxDnKnJB6BkfKqmPFsGPZPQrvDcqo",
  "key7": "8j5SaKdiq8cL2o53gkqXEt8u4s4ukkNwbtnkZ793jy3mo5EAy7WL1pkLNPNzauNteDPaF1TdpQKJ733xwrcRPT1",
  "key8": "Ube7qLFjCa3mmYvC4E1X8m3EK3G1GBWHRaHgXK8MXUZsDBipCVT8JKRXTtgSmw7thZw3VZa7uiLp59Mp45YM6dt",
  "key9": "281uXbH48YMevV1mg3Ld6ipMQArxx3zmbP9UXJFLwTLn7Vs8YcWSaW4PudHgF1Fa5oVMA7hpWs2J1C82v5hpL3xv",
  "key10": "3qR5dwzbDeVC86LBuSsQa8DGLv9JrDMoFmMS84BtnnMgbmWYwfVS2FFihSdngLa41zyjDhYWXDZfzB4HwpTmQMeE",
  "key11": "2qXNjdTk1v9Fr2k3x41VBj4JYtn1SQqgj4vaAFcddBKNG3XqnofxiDhFmo4uXVcnjzR5Tv3wEaVKMNJmH4B2Q35r",
  "key12": "2XNG98oFMw2Ep18NDvGcyxgq9qB4oVbUmArJ5yZXNfqgF7ZSuXSat8NNZgmYRC6z67zoWo1FNecJFrrhTGuKjKXZ",
  "key13": "4GqM19yp2xjWBUYhKv5ypenM4UtvJWk1H646DcmYXVaziWmrP411NGVc8uBxixMUE5GkSjUDZj3qvtbmxwdDZPrT",
  "key14": "51wvmBpTQWSjzx7hyrkv2bneY5SVccpJBXj5cUNcbubkyRUJiRg7JEhWRCz6cLLEkQXFTbKEyZbtdg7zhqbn9b9G",
  "key15": "4KeG1RaDd5k29RQc2avrQhccNLtcmW1UGysdQ2KapoD2tW6UegYgjqBF8148e5Lthnx235NDZnWL26mHVfPqA8wR",
  "key16": "664rzVktDDESVRJMQPUw6Q32ALTjrk6gpmZGzcvMsRQ9ZwSJyZa7GFKvigzryjiN994CduxSFgMukGxcnz9NWCRt",
  "key17": "5kryNRdr3Z4T8qBdKwJtAekEMTzEruk6W38N4nWV4KSMGJW7RZDqKsux3oUH1KjrNMmaeThZ8AVTox2kv4N1KoHD",
  "key18": "3g5cMWAvdMvknqNA6APzWXcFfDNEhMQezxN69ZUtRvW2cBWo2Tz9W11NEr5Qy4535tJzWz7HbgoofDgqCSfTsM2V",
  "key19": "4XbsYX8zNqxgyPbA4XEtNFwb3gLsP6eJpx5rauCAYcVPXdA1qiiaEiGu7WXXRWLNvbsyo2MacKWVyaooWacWu8pr",
  "key20": "4E8e8RKBbKAjoEJEnnUf2AyF6nEd5CtSCqjFhd8j9wgKosjJMENEYDAhBVjC7RWkF8WtxY5Lje1NpuyJtgD9t4yB",
  "key21": "4PKXp7nJcUbYgW8arbeiZgy4tcChFfegDca8uTF4Mu1zJU9AcTLzunmNBmfQv3eDAhKapDGNxmD2KMAPdPzHmXA8",
  "key22": "2AGwHb2mNueR6E5Q1omyJgUDHZXyuThZP6iLQjU43g2FfUp6rpHzngyCUezj2vaJzvdgbTzJZpKpP9bN863EH3vj",
  "key23": "za51Gr8wYBmpvJ3TBVfxsxmoCWBg43zGCtG6jVT2GzxtwZqvKcXkN4bULdLJiE8N5gdH7R9XK39LaYqe8y6XXsD",
  "key24": "5RgGPjAxWHujrFEMJx4Ew5Je8J2pH7ymF2pKdTCdb7gzDg33WoVJFcBGoBfU1pbuVGDjbcWRpCpptT4pAEiQKdbd",
  "key25": "QuQv83s1fW2Ui1WxvSmJiptdZHmKoCCiYxsiSv2TfsGnN4iWNyKyofjeuHstQXawnrDkqmgHF58YTmKeRNoUnJh",
  "key26": "3DUAssHwhFzLwnaS9F4WQzCSbvRjhzNNzx5kHxYMxcPZbcWeRJ1L9q9uwzGzYbgLLX2P5d23ktJD5EfGeFvKbMdy",
  "key27": "3h6aQKSgQSeBevj3Jf8XwKwFYSspXxrKpj8p2CmNmMCVcfCahvaniYTyxHs22g3LaUZiNzxJqZyN67uDGmw5UXpi",
  "key28": "59oooMJm34LBsbQu1KqHiQv9wzCo1Njgw6nZdLochV9wMvhM6CqzuPqgCwnUp3DfvB6kAFVEsb4EpMr3iRQ4SUsH",
  "key29": "BJ4ApBLFTFytwR9Vr45VfXtg7bnTmQJJaG92sPFgbNCivvm6dvDVLfNuquatzQc6Fm6c2kmABHuFDRpouYPkisv",
  "key30": "AcgWHmV8cJGb6zHxCX2fnuNHBPXTZLsdQ2iCNqPhJuaZZ1etzV6MgS4TTFBTEPs1mGGm3UNCtBnhFHixiqpnC24",
  "key31": "2BPkswEb1S7hf9a6vLejyT5rScR5vtizd83ox8gUMAYrhBYX2iMua4nQMHh1fMsRkAASMpLEz6Wjgu9qWKBNiGEC",
  "key32": "ytPp8wu5GiU9gpCEGgbvfNLELSf81yS4s2MH2Ef1G9LLBDtVWb4UUnKExiW9KfwTNJCef7L8YotW9oGYD8ubgRT",
  "key33": "3d4C1nmkFHCS9R6wccVtkJy2S3ySMFHQqg99nss3HJa4tqM1x7QauWyG5VY85PDvUvNAkoL6okKyPz8RuvVSpmzt",
  "key34": "U7nxRWxHAyEZVCPgqQa2yk2GDTFQF7Sfhav81DZzj9X1tZjEzP7DVX3sUKYpsorY4n6BRN87JhXUmfVkkCV9tqc",
  "key35": "R5LafQHbGnTsvVvwcgdryJ3z699ngfdqsJqp3Lvk7fsdvzJ3Tn3Sm8sKr3wEFrHQFf5asF5EGsHxc9TmtsGfiRq",
  "key36": "4Bs3ninQwtxTa4JY6xQ8v1kyrDDBnkdEj1hj58WDsGVtHy7Ubcpxtm11qD7Xn8YVtcB1YPGy6uKt7XowAQSQSKsm",
  "key37": "2wCQYSS11r7jD1HdGguBBNAVwn6NDn6DWLePnin1MLo2gThDGtPmKYFQTGarg1dDTjTFiaBi7j5SC9AUfH62zDCf",
  "key38": "3J1sdn4oTgbVdWKDu4nisN33DfeMQMYdbbU3rnfRuLWAvYfsb9qUUsd2HNpAJCSYj9xqdPsfygt15aKc5zJQjDZJ",
  "key39": "3YtUacPmiL55YVFwrJ1dTDjMPDHzrB5E2x2Mj3QaiU63YUhWwmrGD1WrQsSk4VbDx1onwj78FRWvMsNzCocWCqh9",
  "key40": "2jMSpPSrb5MkAtBXuAog5SWvjCKuggvtFWmLwDQRmpewp5siYGwdpHiQ1Wd1YhdTp1K4sZhwPdLFk531UJpm4atF",
  "key41": "2ZWUCEqbFjtR295zrFu7ELNsLrbcrdU6o97dDCeFYyEvrxtEYyaeHRjjgNfBgadv9mBtbXWS9z4xtA6ijYfjJimo",
  "key42": "4mCqrE2cFeMNeyRT9fT5wszBjqWWokiVQiu98ZAj4ayjdtrHhsWKGQQCG9qV2RUFp4U2shDuqiJziiBj7NgELdgN",
  "key43": "4NScfBmyA94V7FQZu8rV28xymrT4B269Y55j21AZHcTKe53yt5TQSkJRUEoZYPydb2NynzZZNnXYSD6hz67SbDfr",
  "key44": "5eXKwQfKx3SZS2VypzYXFZzR39Q1Jr6oncq9j2P1s5YX1FLcNa9cezFL3vefjseZu7npXUEZR3aUvDFSfZXEkF36",
  "key45": "53ZpGDSJRy7ARg3pm2TR8Hu2VEPmFigZT9ZTtRWrs7nB9DuVTwq4d7CmibvVV96tNkKKp7TK18R1xTqBBZdAdD3J"
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
