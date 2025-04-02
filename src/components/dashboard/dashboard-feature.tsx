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
    "2isovYBq3VD3LWeKJakDZU8kwoXjoBhjGa9XRE1VEfenNmzsGW9SMPYXbA8dhcZRdENxzAKbnKXgvpmEjdzBBJDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YNBzacohy8csrZsenSqQk3TMZRFVofrGR2XALtHAWPuuWHFc57jgVFMfodabRbSgT3sSd3ABTo32EL6gakddB7p",
  "key1": "4mQJXv9pcQnCxJPLhrUvyzb31DfJpXqptTYrHxVjZgQMJpZHT8v4eDzMUM43pxDpVQcQtSzrLaGFBYUC3u1oUE4R",
  "key2": "xJhbbtnoL6HMBcFDD5Kst7PKMpGW62oBVtZb9EqzpA2ojMLKjWDvEetprcxnWyPrTpjxEfLZ3nAvt5m853xJ8Xj",
  "key3": "3Pe3zccwCMheLqtjfPYq2ia6ufT3dRw5Ft3pZfSDn2sYd7MnQAj1FASUW2omrGfzBL1ADVo6jCxwufDnb4ZeuvxB",
  "key4": "4bwD7C9XQEhRh69Go2XApaXb1XefKHpmGsT7SVd9En3kbYQsQWo2ggT66ZDfQ4X2Rqc3cBgfpKQYbfR6PkJr5HCr",
  "key5": "3Nv89saq3kG1JayDqvtGpt81ajrAV88LkuLQwf5nWHsXynpEDTBFmFqaKvTc8DadoX5tyvSXzTuBwCiaSKjo6C8q",
  "key6": "4aY3KDdw486jETfjjmrDzx42KQneP2WrBWpczX9FHi98jCfpyQz5bTzUcnnSWsQuAaVrZ3WirnQibzoMnMBiRJQu",
  "key7": "3ExCF5nTGh3L7z5zxRJrATbk3Vc4tAUuMjFy1mqhTpxpsaQFUnv4yyNdgR9senNLCvmYaxm9u23v8s58KDXNjyvL",
  "key8": "4Dhr3LCKaM5bFPCzubt5ER7ySPpfu1i7cGutjuQAnQMKXJCzKKbBp4EsEzm1k1sA98As6JL6j3YE3PmNk9YLCY1x",
  "key9": "38e93Mgo8forhtPvGTEZduYEyh9M2MKu5UcqCtfNh4TdXE7vrH1vUKxvV9teYGrfYYE5fTe26KSibsyhbnWsXJBb",
  "key10": "3X2LDQ1KiUq58wFBe8UjoDx77in1UJbj5EwC6CpEmDzYeNgxqbeYt4NREvyjdvKCHj1rjX89pG5nnLZpFuawbdDb",
  "key11": "3pJKyydeUFccBWbAWqtESUVHiXvVJcxABFET9eN3cxwKnWa3dcFBP5BNeXBfNBiFtQL2i1XMRtHxWK9hzNa2gQyf",
  "key12": "5mkFpHiRa62BLAtskfs394gjK5Tn99q8vk77aZTQNJTdJ8urAKATYeE8AjVnPLgjdYBBdKAYHPdynyjPdAsWtAJJ",
  "key13": "4Bfmv3XrkJ69sdRn385nyyzM9g6aDJWYJ3xRXNCyA7ZXHCnaNjTMo8UMpk8K69xfEpwbKfTsRuemZUgmm4RJ9TiY",
  "key14": "8qfJ39YgQXou2JgDpbLWMj592WGuDuE3d58fqYShYdxAaSbWtqAnREb6ucunp3p1X9zb1uAmqTrA5ND3n8LE5gV",
  "key15": "3g4hX7dNhb6QMeQxWztTgXGShhcuW8XtmHA4zVrcwfvXgJivq3BiwGzgpL8tG7eQguyVkdX29XoaAZQiCm7MjbWy",
  "key16": "4oAQ7H4vexL67rVX8uoAiVLybRxJQAqBCaihyAr3LogQpmUt4RcPbn1ej4ezXJwxXVj9QRSYkAvPyiZkgQCj8CQk",
  "key17": "4gvEzQFrdJUxcdFgPesZuSAczz5k5nixC66u3bDdCTtkSaHCQWvs9LKFnDTZY5LLt7KQ1kvvJ6DhCPxs8Brgyizc",
  "key18": "XqM6bJcJjHaFwX655EtTZqnxidzYZ5ks5vBK9MntHRTBmWgAFBUqejnnarsJ9Adjo4SpvBZC5cPDFnNLZeDEiP5",
  "key19": "36ded6n9PmtQNRCtVyEbEyv3aH9cEZXpo1dLYTwMPGRAwU68VhSsBv6RZ9YWRPsFgmjBZUBGSUEXhEwYfMPGVr1j",
  "key20": "3mZKCxVgA12fCbbCxt1f863MwwLq8BSNzXYNvdDneiHrcUmCw6MZpcif3AqV8hEuvncBotsxtGps2BJ9u5PzJYxD",
  "key21": "46UGxGvkSCvR6h4hKkZ7jk9JgGEUE59wT5FbsCZr35oxRUJwEYXmj1azgAmPFzLuBMV33zBDJNCWS5vaa7iMPT67",
  "key22": "4KiU9gfyUMvWCr5KbnnBcPAwTpUvDQreS6P6QV6MH3TxU1rYYNmADmkio4gFW9CVu36b3ps4wEbGY3QusKZA3ZzW",
  "key23": "5NhFPGTwuDBqs5rtxdWcm34s14keynyicix8BYRW5ypFd4Acr7L1WKfGD2RhLUzWBXNvN1c5X7vMVxw1ucVXqwAG",
  "key24": "3j1znQfSf4ozku52emHsbo5zmCSTgmqt1JMvsqWw89KFWFFR88y9F26DHUo2V1VGbf1pjAaVg5m8xx4WEnKGasan",
  "key25": "5ffpGr1iRkG7XGfhoa8wSkNZPpZenDaqVMGTD6EgAQ9Q4PNtNzTEGdPAadsU7njd2hfqFuwyPBVPVJhKXKHCWmeV",
  "key26": "2Fm1cRiLnSbM7VFe8ZKTgALXZvuubTpyokmitrQv2uYCcEwQN3SdLvfuJQmzofohwaoa7gRc8E6wQhNn4C5WNFNM",
  "key27": "47cr3gkcS2TZrYVCxa5ERDXMDwiuMR9SHtqquewV94BY4NvC34dpEEpQFb3CK1PA3ckLxa9E1KwaScv3XsTwa72",
  "key28": "3xpFaDRhY8WRLaxK2euCSQs9FxoUdYZumB5r2AJSaxyCvN8uMzYvUbj9F94mZwcu5cuA7WAsBomSpy31nBXWxRwa",
  "key29": "GhCpVVNPNNJHrz1i1Cm3RQC8HgX4SSi8mC5b15fAt8Bt3uVT4Yy2E7KWfk2MwQv5qWb1ARo1AHVXeW1RWibAck4",
  "key30": "TNJiqwPWJ83QYu8WFjPeNrEa53p94AbckzGwU4kuQgSM6uQf8546SeR8Kc4cUR4KMcsVfAJbh4HBgGeSVCsTHY4",
  "key31": "4ThsmyR4UwYWEDQdx2T6W1HfAZSg5R5rXwXvtnyqG7LWw9MiBgrhQNq7WTNtoexfKXQDz6ymz9Q9U8HeoR6qd8me",
  "key32": "49dJZjjgTLdRR5FEfsFvRXbHkjpL34o8YHvRvUp2ZZWX9GJQ5UdqZYJVudBZ57Tfw9cvgGGd1XxCwfLwsxcfhfsQ",
  "key33": "Mh4vYdKr86ithJvjWxkf6jgwUfYDnN1tTWfLgirAchNFgSjfSnR2ARVgtrKUhtbUMiPN2KVLt9VgSir3rJWGfVP",
  "key34": "scr2BZnW1KLrjEb8Z3WPHq1hxAhTskuaXimEV5PF1q2oK4wreqnpu3RnXFC4K1HSfmMFoXX6GJBEBuvwReWFzag",
  "key35": "63dwHVFw4wCqijSKMyWRFRFuK5BY1cb4qceMVz7GQiGttm9A7Pxd1wVW2z373gb1AQMbMRkzQK8ELyfcyeyZyWpU",
  "key36": "j6E2sTy6A6BQpRVJ4LTssgMayF71p15Vg83MMvJyWA16PKDpKFrANtBESkkhZX6y8FsW2TXri2UfR6Qo5wuRSVe",
  "key37": "3vqBbYBNDccCMv1hmPzk3WWSvKCgSMD5RXLTPJHMBqKaJe6ew8Gp2hx2uwC1B8byqtKaVN8C69WwGXg4GBhb64D8",
  "key38": "vYoEaM6QPBdMsTKD3DfjjHWB583BZMyPgDTrtQWYCinp1un2DnDq5ahiRa1Y4wCTvLQ4dT9BLRnCSL3vuMhPJU7",
  "key39": "mSaSfVBZ6KA3MSdNeLjhqSo1x5NdfVgwzejposBnUGNCEKpd626R3Sw3THL6g1JmnLBpYKHjqacRF3artxHXUd2",
  "key40": "2WuHPG38eGmqVcXuy4MQhMfyV1oXyT2otapQ8gPorokFHPJndzJoY2wo8CCJRhmJjy9oaa8ASAGbN7KqzKTYAtij",
  "key41": "2zCdaY66ww2sVEgtorr5ZQJqPDRRMCiZL5KytiodsAv1XQsUUrak1BCNug8F4SikDbA4cuyCREoF11Yw6zzUGA7Z",
  "key42": "3tvch5ng1MT8kXkHZRDwTQyVQWZJEEUQiJb8J9pHs8h83L3VqxmQbMyWwWDdQeqRWDqp2ayHRKUufEU1Xmbmqfh6"
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
