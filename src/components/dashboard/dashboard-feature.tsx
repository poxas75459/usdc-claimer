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
    "5jaSzscfXA22FL3Vw5iUxQbGz6FKMUuMPLWTBXmriruCQnfpKcvY2xoq5iuYUmCMQdeS528twNate3YGw57JpSpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QN4qr2vKwpj73wsJFw4gE5v29m3Ttrdf4WbTycSLL82ieJsG9d5MqquxNnoo7wKAYesRqRzamConVubptwo9Ad5",
  "key1": "5HUkxpawQmC9eWZxnRMUeD3b5naDCEfScVv8jHMR4ZwMGP9e3cpMNHL1CeznMHwzkocUBY6kBkBzPqMV2JpKUWkb",
  "key2": "pGiLwmUAhzDdCCBSLb1evmoeDwZPDqrC8f4DXXjLuyjsQXkZVKYQ1P4UVFL9mBgyBiYWyYaAj9V1oWJ4CvXVkhF",
  "key3": "4H1fquDZTiQxF5MeiWp6jTdRz82PV8uL5o7NryfbZHBuDMxFCV7AV8zoN3QxCDUY9xctSnqxGZwTtEa1xawEzHhn",
  "key4": "4sgtvXLe3joXWWqcXhLyB2z4brEz2KoCFwyTP45xqFkSBs7gAepQAyUDBfg6VEtSzJ6RY5HbvaPuyPmrenmomiPM",
  "key5": "3oVp39Jye2xiLX6E2rZagews5nXJA7nQS61HVsTG5iSg64vifxeoei4pYWnov6xFLPPrB4ogYJak9Je7YkAyWk3f",
  "key6": "5nEbLzvLdJticjsT4GWs5Yr2guM17EoB47xBxDErurS9R8oyMQHm27acyQf9bjKgDn5fEXZMZaqLyX5ijwp95Ww9",
  "key7": "5xgt2UxTyeE5XAi8hsfnMek687RapX5MKrL8EibNA653Z9nKktmT4vr78LeMUGEqXL4cJC7KECMQH5MDcu74wtDp",
  "key8": "2ukBU8RudW7Y7Xu2u9Gjog8vrfTUfrm6SfAxKzzTTBhrkhscH4AQA48yJJKoekjiux6AjYAisoeXS7bXvRVLqACe",
  "key9": "SJi9QdGgpGepiUq1XmWQcE88MWhKQSbz5M7o9nSRe9kCpxYXjFGKHGFhSV6CD1h1Yv5ghDNyefbrNbtir4rMFg4",
  "key10": "5Js7Fo5VTjuAqXgpi1cLAAjXhboYDakUkGNrTjw3TdYZipQ1rLgTZHr4UiZy4DT1tC8ymm6U6FVXCykVfDwjJPQv",
  "key11": "5JTU62kaw2H3if4gjQ7mNDyMkMDwM89tejqC3dgLfwmrG9ssLvXC9DS31WaMRZ7XNYQHvCpR6V7mFEg9jp898Lg6",
  "key12": "36A7X9ZqY8K5mCy3S8knUvXR2iMYwo8aSJPaq4CgtcdfFv57oew9QwKE54t1ovxU2TYkSv8jiq4XoBnqBFEptzVu",
  "key13": "2qco1A3zXGTgsg3yFL4xyL4XWUvntARu9WjDPTCupomKETUyS8TfMQteXyAprVp2QSNBvMa3vhNn8QkhFwUr7V2E",
  "key14": "5m1poczuEpqFgyBnaSdp827ZCUByq9HtmFipLzoDje1oxM15C6ouBh3Nr4DtrTxdz7Gmf2QhWoFEeTpB9gfKW74r",
  "key15": "4GxRwfzxizCGz7YEGHtfr3foPyB9bUBazdPHmqqGNmPG7AE7J9jyPBq7S83KFvDkaVU46vnXQX6DU66BMmmwwE3v",
  "key16": "sL9QuWyaiP3oXbYcLh4m8yFNYK6qkKnWQSYZvVKyhE6Xyx1tJ1vfrMZzfTmtwb8LLqW4KC8abETesES4EPnAidt",
  "key17": "3WUpfq7QmQXxnZaCpNRWqMJ6pXDPqnJPRNzKWhj8TpdzmMyd9iKTXe8tYoq52BRfWAG8i2sSXeryEMsVsdZykKHG",
  "key18": "j4peubudpS12inRdDF1SoGXrBf9YD86CBQYVHE8esVNeph2ejkKxJ9PS1HtEdf165gTTR1YQ9hJe6YD1rMqsCF1",
  "key19": "5ErxbVCjKVi9UJQoadpvgfFJemFawEpcxTxePAdFnS4DnRqTBTvRvhdAC47nmRLEu4KtJtUwv5YLNEGbRX1pVMtb",
  "key20": "4Fj9epeqcTFN2fqtHEpw3MZZxQDgfuLH8EAKGwVUctCDsxtKhQT5cX4kkGX2wrT9gArqsLdrzbmvfvAtR2bxGQGz",
  "key21": "cJ1AbkjtrMY5N58XkvSVF89bicxvcCZDeMhbFedWgri71PGWyejZsypsDbg1PQLjF9CyvXdLm2MUr2nvRFnWybm",
  "key22": "3DJpZQ3m5KKCzZLks9wzRoeHSXWdA84b3h3o4hApRo48YjveT33uZa8iqA29mW3WqPK4dPuRhhtrq7ujheQFzjK1",
  "key23": "3NSKKfpF4J2nwJWSc11RwksZjaLURs4mAod2PviTQFcRTA77RQvJqrLruXaV8UjHcfXcWoi5c76iX1J4xvSEbcmg",
  "key24": "5MDrV7KhYCYeWyqVxT3Y1jADqHGxcBpQGskhfvQYT4sHRmP8wZ17TvPzxsg6jvHJACWuEqB5raA6JWGe1YS7VEjs",
  "key25": "5hkkoQZeqezJzGeuU7dUxLRyhuX4ShxNrQoA8eNKHNu2tmZyEX9baPwkGH8yyjzHkc3BDxpGYsRuPFFhsiZ7V4UP",
  "key26": "QhZXWbwrJQE8EV1XNqQJkJC7Jb3H4Q9ZirnjyJrVN99LAC4q6BQVPH8AoyjkfeqzoeTXaQx5x6HHJQrVfcEqquk",
  "key27": "2b8K5v284jg9WcqoZzs2vfza7H1ayEgvF8axSiSJjVUdNeq1TvAraK2ubDNjacgEcRhXr3YHdriEcYew9qw3m1WK",
  "key28": "5aaZnjW2yx81MKxY1WePxDGWzygsn1b4dEyYthqrKoNzZSR4r1Wu69tgYhjGpFiE6kzZAjvYaHy57SEveqcbUUqh",
  "key29": "66PsNo4vfpqrBzJtkvCBHmdffjdbYxeHHs4iJvcNPKavCrAuZGT31Ak9pvW5mQwdZE6cUbXnznhtLoq1E6nLwRjJ",
  "key30": "5tz5U7z5V7cr7FLVsbtYggTZPpH6kbQqRfC2ZorqtPXckELDBoVBFgSqc71Mnb72944szgjEBWGbgqRQ4jMcHHX7",
  "key31": "sxX9W5yeDFc4ykrcL7zGuuCyDwMPEv3QtebsD6UhZpmFyjFh3aCTKYAmtyHszDwJqMB9KHepcS5dV5SBC8Rxzdb",
  "key32": "58dQDvJ5bB7UUP7wbtgbubFEukASsZoNqhJKW6E2VgyWgkMR3wq1auGkT22bc7wrem1s3yh5bwVXFFxAZhupP1Rn",
  "key33": "53hmk5vyjTJ8g1ZeGAizpREEwS8TwGxK2oz6QH32RTvyJeEiXJYLgZRDYUoVxRcHTvj3ny9EmbmaZLxtnVJ76qG1",
  "key34": "5NpB7kHTa9gkweGkNDB3NTNxLFSzMLFV6QDA3ZppayxFoR2iRVKZ3i9wg7mE6rKba8AjPLTa3xRY1CTSDpGcFN9D",
  "key35": "JQWqjwvTFBjYTnptZnDNLQKHooBg727aM5nkkD8Zjs9QxJ7WUKF9pzZo9mva6yQrjyuLgviB3jnG3g4d78A8Yuu",
  "key36": "5ahgVEnwVw6qYU9yuZWqgFhiK2sCutVE4YtnCeRjaXmMoW6fW5sX8J2VP7WBuHegs7bycLpiKms94Z7pv9nESrP4",
  "key37": "2FwX2U1wJiDUrXfeGop8pJxbkyMUBhXMMKdPZ1R6powbSCZP9MdChGvWZkEFTgbMBhVySVAhrzqKse2E3Auep3NJ",
  "key38": "Ph2gQjpG8cuvbvPX7aSksqoiswmXDP3wNSwfZSvFecQNfYkt6Zwbkrrkaci53cPWpNy1mVyjimDub35snr3YbtL",
  "key39": "5x425dmLcZecXiEtuQnKpQKH1eNaZMhgmwUuae3xoLJu8czanc41Cn69az6vt2bdYvuQ6o3BFy9gWffmoJeBHmUV",
  "key40": "5vQpwdTxh4JtRVsdyJ6MrawpwUqVUsQpMg4xWTcjAZ4kfuouxtJxBWdaBUaduFUZGyVFJrpT5tthyBNFrzQ5HVcj",
  "key41": "3Mbe5fcYkVi4boKKhA4rxVA45bpNc43Q2rAbvqxbiiHWi6rd6GZuNeXphJVfgmaGuj38dTfEkLy4YK8H5Vyi7oEv"
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
