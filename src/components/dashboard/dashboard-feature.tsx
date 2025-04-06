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
    "76ZVyEnRqaPtUwFHtYDKmC4ShQQz17cLAM3ZGiKwagJP8Yx9ovgLCwpzKWzooZHQ4gBL8rR4Mi5JeLcZuwu3W4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VxVDvfgmyLe6YA12W3m4dm8EtNUtBLJG914FDANxFcUZLK3tiME5NwPqvFidzx3848HgusLry7whx8WXry8zWmu",
  "key1": "2gNbEVjWZ8sLxXqGefrjhYuieSxVeUKLA1By9tNNdyxmmc5TV7kfNDSJ1kzrvQo3vvKkgFUgBci25jLizHy3gWt6",
  "key2": "2FeKZsa6pKNiNymSfyTKZ5VXs3Q7xhw476VnWiuHz7nFJ1yFuNZeYXasGudbV85rw35xZBYfEbWXyV2hEoaPaDgq",
  "key3": "4boMQsuoPza3QBjMtX4SAcj5XbioBMR4gAC81ixmVXqsn6s48j1LjSioCvzUJqnr2cVeE5swYDuCZ2NUug6xwcSR",
  "key4": "2MQndcw2nCcuRQFhVeUDX6yFfvJiUFAFAGi11XreZ4E19zZg8iiK6QrsZLxL3KHC4BzD83vQvPHXZq66P9rxpfa3",
  "key5": "597W8fLQQGWE92Y28r5BFstgqQc5hzstoKGcU8dxxLQf13oBPUMi8Xo71UFCGYpHjfxgNircm9npEtLdL7bwALHv",
  "key6": "66Uat9DND9D57gpsb7VqwxhFxGuzqSs9DgxsjdHDoaXLjEY1nSvZ8mEsHoFnFQaLkwwektGz52WJG1L8vPhDVVSs",
  "key7": "3H4qbFpkyZthbHJnc9QvvLcD2qZN1UH7cQKzV3p21AMye2kmuzoiNLTBGc7Lbodx2e4uimTHTHThd3gXRAay5Bzb",
  "key8": "3GfdWCpJwE3tE8xjED2jd1i8GTRv9B2ejRW67BtDfxMh5B8caB9o9GYqqeEqcQyyu1cG9ghZTfS2omuXfMhjxLvz",
  "key9": "5vmDsPbha8UWvks1dG5oGtJvYD6Yc8pjKQXLTjbHtqSih7nmfCYGeS5Tbvuvq4aA69fU1qxfATsTf8fnX91Y9Qop",
  "key10": "ZWgEfWFBAGTmhvfJFQaD2dqPkFCLsoVA6m626ynANDr4hTQRAVXreMDby2JMowGcz5tgLZi46zEj7WRV8kitSzK",
  "key11": "3ckEWvArBsnh96cvW9xwEybARL5ovS2AxZzVtkdWHp7UZpyWsgKhF8o2DHaqpsdMQhcYYqhCBz6Dzs8Kxgp27hQ4",
  "key12": "3MEU7Gf8d3BJ9XG41G4sbNpTvsGPSFA7Va9eV3gCjZ8maKxhTCCLRVzgg4M7NLhhpZrVEiSddRV32eay7rAjwmZY",
  "key13": "4FzF7juZzkDYqdSUi5rWumwSRRM8fefPMb53ZqsUhSMjTPuuMn2SWC5yBVgd6V1ijQLmLe1CmtWgiq9zxP1K3kzo",
  "key14": "3wdYSP2UcwKcpgokcJGzG8MYMoqrqrU3jif2SyKvPTYehZnQpWgLo8K99QVnzzko77W69L8jgX7MLnkjyeZBCU3N",
  "key15": "2ToqBzHw4DvoLBDoe65NmTcComhp94XQgx8P5NALmpA4F1YvrWr2R9Bmmm95bTPZoTQKUsv3RgKbcEveK577tNui",
  "key16": "3jbYxv9KXGUcFkHcPUrabv2XP2V2HUPUqgbzvJZoUcHFZFuKhsNNoWBNuGmmReP7CDfCCqR4hWpk9gQ6wt2mxosN",
  "key17": "zK2gsPEX9ZpGvCxy1Bmm6KuHkGKgAmoyEqkP8SRVhcxMYWdXkHg2x4imaTnqawXbesYmiq6qPZMVWAhTVaCfykd",
  "key18": "4fqFGa576HvmQRqD8anhGZqL7CeEaQaKJECgiT4pKRmhhD7aNoMENv68sBEFBC8tw9LCgcnaRibbwnyVhobEggCF",
  "key19": "5tuWr1YCvYxksyxyFwRn7UFkhEnsBuo2hoL6n1iodWU6eXQhSFEDW3uP6fR9y8UNKBWD77QXLRSiBnkk1Lx4H3eu",
  "key20": "zSAqStZVVtsMsWQzc2sis26YkN5hPFPJ9gH4opBDeY7Zijbb2vjjBgyMifhR2Gb3xHKiW5qj7LSvi1SjPyKTCx2",
  "key21": "zEAHQ6hBLHxun3yQztwVG9gCBZCd2Lx5vVYqKvPBfGCFmxJLwpYrkxnchWyWEa4J7NA6XGPpxme29jEcjVxxB4z",
  "key22": "5cBViYx3VxccjewNod6BuMLNGZsbZRmb9V9Kr1psvNYH7JH4Zm47wf5kR9aoPx9iznUnmSwGZYw1cVFp1MJgQKzA",
  "key23": "3s4YqaUTR8b9sF3WNLHbLpD7Qy7rAwcUzvMbM27TFk7wffYBBtgafxUZ6vnFgbGai8A3CHLU4s1xCFrffJdSmQSA",
  "key24": "4YhgUsd2iCjQeouuGSUJdMu22ReyW5Dh2HpKzCFAhbHqQZHvCATz4sEietGMWiesPDrooYasTPHuUxYf3JxCURLt",
  "key25": "2mLhi3K7EWnL95ZcaiM7qfN4kXZLdPxJKgH755TgmweR5EDA8SFLZJQ2kPfDr1AiinRCpVEtRf343KVnBLNGBtcV",
  "key26": "2bx5xaNshMkUaNNNvkbrLLBY7LgJRKzFoWRJuYsra3t5fnzbQw71ziXafuWxCY5YU11TwNSuRy7EMWhCRkQVJqJ4",
  "key27": "5fJntZCu8XP29PRUDAQUVwz7cW7cj9u1eCvsoSwPpuYTZFzz6mAu1gBVUkQSw2dJYTYMQJ5br8Sf5qvgrsv3awDB",
  "key28": "39uq31hFceb55dy1mnHxhkJb1JtqiihLzjt3t56LGKSB4tRx2BxRmQ21JUXUAaUg5txX1o8Z8LQjPyj5VSxLSP9L",
  "key29": "57LkBowEUW7it8qv9rtwucG42gUSCeP77Z754u3tVAWmCZ7a7aoEXfH36axPiDRgGXSwdU8jDEfmv63wj2YRPzwC"
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
