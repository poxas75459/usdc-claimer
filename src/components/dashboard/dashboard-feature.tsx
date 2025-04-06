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
    "5ukdHM9w1hsVdNLGFMzpgNrbHkVzYht4zonZ9Q9f8tK1tVvbPZFPmKxtz8juZ7fk4A5umW17L829e3cK4WNq7DNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yr1xbqwKNMqMMHx8n8FsrR2xtr5HBihLTAAH6ghMDezXLM74x7j3vf6mfF9dEx4fWFZXwakekyGh8toAFqGhai5",
  "key1": "2cREMEJ8PPr9x2ur8V3yYjB1g3u7trfmRUeMbb9L6y94SGwJ2AUyR8X4KvrvKAZBdj8mtv8FgQ2M3onvEx8BmmS8",
  "key2": "4LB8H1hSEMhZYSwvbFdHjoq64KGiWZvxmnvmysMY31rHpZxUiumj7aHjtDsxZNTXTXPa94x8kGEjVx177JjFrhRW",
  "key3": "38kPLKJAyJkgm2hUGKYNuK2gwe6uRoRiMtTjcSfvLRknXeRtWnRpTJYZ2WpdiZsJ9SbWGa2hs9oTcThy6xrTTWER",
  "key4": "AyMpUdtU5asPjjkd2AGFqGAVnxBaeaF9krSHtwUdSJwEDQ7wDrfgxnyAzvh2uDNZJF3yX3gTYuu3fMyVVsdkm35",
  "key5": "3uJ4KBB2pRU14QPMomhLu4Xt4PzuWnemSTCX11QS3YcVBaMKi5u3VSkRzktG1imyekPQKWFQPxDDMfm4RbFn5UxG",
  "key6": "3egugtULejpCewP83LsQzdMhXjqZHPhrcZaSvZ4CtFSQv8H61kQJbABzKy19DzHS3p4UcxjFpesiYAAeDiEyR1UR",
  "key7": "2zto161a6RUFB7rrC8MqgV1mZVGQLysTw6SB9YMczDkEqCCoFEu3Hbac32xDbQTCxKGbeSmtE5sgK29MHyhHRohQ",
  "key8": "vyQ4ZYjJWdMMXz5RbE4BsAx638vHssWPpF4DjZTZq2nqo6HZVKvjtKygF9ijnpw76PY1oVGfeVhfJtBjq37KT6U",
  "key9": "3DWeSeqBzVPrDG5tK4WXH4fKJVb1VpLLffLXTgQtZ8iUehAGAe4ijyFZc2WEaKfHpKzYfYzM76irNtPFUivEEyFc",
  "key10": "2edvWqRuTYMHD7dZBHUszcPBcpid74wMdp5uNj6t2KpS9FWrpvnYkKJcpSHL7zebXyeqiuEq1or6rajyo2xWXRBp",
  "key11": "3vctxRza5UBBNwibQaG56oKqgRNxkremL3PhMRgAmdd4DqE62YEEARoCu1H393XCrGob2N2ykQqnju96zbr6A68C",
  "key12": "NiVJpNC8UQDfk6bmHvZ9sARmLWx8fqvkop6VfsfUQLkebsZUKQoaT61VtsGRUekpx694CbpDPEzxHUXHjVC5SRB",
  "key13": "4cssiRSu1rscYr7yL797V9at6QqmroBWUsXXui8AVrrvFd99T1iRP43ybEob7PFmpbbs8HDyUN4mLatRTSxjBAdN",
  "key14": "2mbNGzt89mdnfn8LvQCLGxA6MrHirfDFnoepzYgQaxS1mCBTTPns2gcaUhwPfL9NkSKDkhrPnTzFgD18zVqjcWEU",
  "key15": "4s3emgMoJNW5V9SuBTp9aiCiLT5SBroTtfbRgb4oAtnUkccvY9fMtb4irMQfeVwW8xkay6i9Ybo4AdCAKHKjh51Z",
  "key16": "2MkiDa57ggS4Jb4uWS5U42XMFnVJUDbGiCBY4xxo8wyZ3BkdJKXKtbeyJ1cBmrVhurPtsZo6kDf3NMfQkvJwE5uq",
  "key17": "2vgPzVZx4Jy5WSYayk2Zub9jYpPuyiwLUK1MgVYyVFLmQsint39JqDQ7ojj4zK5n8Nvppo1GdwiZKXy67HQUFUcU",
  "key18": "hKa1vmgtqV1Q1yU74ERGu41TaWcMB7Zp51e5sk8R3AnsbjMxJtZAKC6z8uqbcxUVKVtvBC6NK4WexU1hdSMJy2A",
  "key19": "62D3hPke3MasGrFwHUKyWjZb1BRgEB1VyGFfU5hxuKq8G9Unxn91EZ98z34Z5NRMFdfi1wmgQ4ADcZKi9W37zxeT",
  "key20": "4gKNNfWCZ8jGAqiwTiKw4uVGYqpfA3F3LXxL7tkEUJWAEuCQNEykt9yscqW9udxCPLGpbQHppJ492K2hP8DrjmZQ",
  "key21": "RDcNyk9CfMGvMx323KesBVKifHrcDm8r4BX3eCReVAH8u2odU7FD9B9Z1rUcjvUe97MgRSK3wJAss9sA3WEG7UY",
  "key22": "21RqnYzZmWnhetmqDCnNd4bPnEypspMM7jhuz6cEjvmVJQgrzDBoVdBHvLqzGU3DGeHuzbXKoTRYLdXL4hER6Z8q",
  "key23": "VQ94KNzRMRxKxzHgcCvzrddMsAS8B5nUPRcvPfbKzpbpBZCF1UwLaftX35ZrwhUcDLWPYGbKKqX2RecFpwsvGfb",
  "key24": "4EtCUjBRa8s4Lm7w8qdJ4yWyn7dnhQ8KhTxv17SCryhkgoHJ2BdLPhHJQ1QuYteq3WoFTeCRJK3JtgRJaQ4kPA45",
  "key25": "3uAmAeLfyguK4tuk3agnE4Ua4yU2TsoDkRiTBQYhR2h1TYPNbFXMMa97HXgrdqm57Wobb5yFVxqsBAafF7X6meF6",
  "key26": "KQNAGDJfLaHT51bY83x3EfFUXkHAwCiGBZspoXBCemMr6qMzzyhQCZVdwjvfzxt7zW79paGde7nzSHuahKpPC2R",
  "key27": "5oJzuHoqCAbr8YhwgjmVKobbCmGEHQYgH3gXMJhuoEtZ4ZPnnNqr2bUFtTCAkw3qMLnDJjMEjKYk2NHRUP2QXpnN",
  "key28": "5VFmfMRQzPig6Pz6onXiTTxiEiK7RPtJwYDvmu6w95VhWFf6RJ5ctg2SqRcS5XLYQXwdT7ob7aMG8ou1cy528s4v",
  "key29": "3JD6zsGqToCtXAjfHA83CFigBRoRoo7JM2s8rKyGVWzEJkfJFXiepgBk85LEDkNQyKRHabuijKvonXbWxi9unhXM",
  "key30": "54rTxGCfeZHwNBqi5xMJkYYRH9UCAdtSVX2tQc5KPD2nQKj3GJRH4oDYd1K2kfyzfFqFvDjouL4L3vwuRYgwCYH8",
  "key31": "2HLru3hSUivD8Uu6anFQ5a5u1RC7p5s7Crypvx9vASSMkT7JjcuH8pVJj99n7kg2Rr6A4mWobd2DEC8C3oPTSLur",
  "key32": "2ReXwVJbstvddJ2jimULc1iz5soW36xqaSj3RJFz3z47UbE6Z46RspVunwP3QtPi2Q99KfxXnnXoxpcnKtVrgBQg",
  "key33": "5P4Zft5xcJeMZXfazRJQ9jXGDbf8nrnYjPvX1s56ZAY2HrBhhKJvFXah96p56UY2Br35w3G2CWL3feVdmvrd5dCs"
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
