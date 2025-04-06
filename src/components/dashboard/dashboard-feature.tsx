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
    "3AhRVz25zor3tJWKNKEQd2y8Dtgizuo3Z7uCtz1xkjU5kT1YLX8VdL7AHnKR47fsrLP9F3HFeyCnnBchWwWsCL8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KqJDEXsUo7DNqKgkgV79exiavtPHPa3y67tZ1MWsyUJNwWSfnsmVSDeNBZa1V5ijax2M8QYEFykfVeFdHCwdGBm",
  "key1": "5fUmAzNeXZW84EhA9Ha4EMPzTAkDJvkUDHrbpRg18Cbf2jg8dMS2wazdeVMCU8wFuWFTN5Sj4TbHTnKYJr5wcgYg",
  "key2": "5zVP7gYysUwEWzJqionW2AUn3pB6jduijoB3M5eGsGQRfZNtacJi9b4CNM9nG33XYqhY19ZQZ9mVCDn4Sd3X9Rb",
  "key3": "GpLmnzDViMj69bEWzYgvN5gkh1W9kA73yyeFeNMnZ4hrCXH6sNaehn2r9uogkcRBjYv1R8kTF9CMZp8mKypSes4",
  "key4": "4Jve8WBwRuxLzYHADHxQ5VGTDMcVg4BxT22fbjGxcCapi14DaARA92K5YukueRiezvM5ZmYhxD1ZwtW1Wn4Rm8ju",
  "key5": "4kSauAXeLT4mM1ZStj9PmVPnY8KXftMjEtNVYe2jqLAYvzaByGPNtTRP8fWhFyXUwa9oofYGGJgYJAWDMa6oo9j1",
  "key6": "41K6Lctu5WwSKJGtXfJorqFKQEjxsTHgyaQvo1zwyicQQ9ney5xZXe3kregtrsGemApCuihSHzq3XAMbvxnpQLru",
  "key7": "313x4NU42b9vXUAsztjyd6K5VceXeiyrDucS5YDPgts1umCzbnMTA8qxQuF3xpU44GdAB9Pygw1T4fS5MRugrThC",
  "key8": "8kWwXecZJ9JsgxckQqEZqqF1nQ36r4SSjnF1NCiPjMkoLrh7oVrXNXRmxqJQht5mWQJQpympnj22AaNvS8sXqTL",
  "key9": "W7WDSKA2JYQVXhyuXeNVAPvpCX2UWqSvGgiffE9nt2nQANeKW2hJEfZxCCfKNAjBpAfPUidXzJBZMT4JAWyMFEY",
  "key10": "55qMkmtjXXErdcHnytaTE2vawY3JfZDud8UMFcAMcckHktwR2mWduXcaZMh7RPAde3zAx579ZLa36SzYfspxkWdn",
  "key11": "bSSrEzhGcgMHYYN5UxAr5PEmXZZBT7SudbBEXVpxTnHBedtZogwbc9xg4Vtsx9XzCSdYjmCt72s5D4v6fwSAJj9",
  "key12": "2Heb65Zg6wLYejRGdbm9ioD1PAiS8AXBetfmSL2CuRKFNqK8FNCr6V4ArK6uEZLF6hR6cnyvXeUTUDJbVfRSc7NP",
  "key13": "5HwiJMNeMKLYEf1x5qDKnrcEn4miQQWxHb9K3jXe95TGB9FCRWkaL5GMXWsrYLEuLGe9XGzpsbEek5EV4WEeebnw",
  "key14": "2KUvWRKPp3dCm3sZjZ2cpHB2vdSgPGLBUauGHwz7LhXQeVzVrfK6tG9ZfdQGGDWakjZiUywR19itxfa3yPJdENU9",
  "key15": "5GzR9Z43jx2FCg7PbKrPbtT1VCpxfkZ1rBYtNKmV9yGzsK5f9app6J8ZD8J3ampEpt7w4tuFYHWhqKmUUPrkhSDJ",
  "key16": "3hwrTnfwJeHTFMawdRXYK8EdNSnbW9CwQSV7Qw3mXn8zmkTjpN6mk1r4jFZUW8JUivrfaaJ68BoQv2Ga8rQUwv67",
  "key17": "5sRuTdVSBw7jRSfaHagw4DshHXEjfVGn2zsJo1ief8io3YBLQtknM2FGG1mHZ7zCtARk7WXCTirSHAswhV8dJbx8",
  "key18": "4fqDfRps3erf4A3ydTWrFFpy4FPYL3czUuhJGjs9PUuXPDGGy6DgPut1cuoRQLQNZC398XwbuPtaVRwMpDERffRL",
  "key19": "5LGshMu9c2sahYFuB5n4m5SL5uEXwE5reUZfwgtiJt8KtoNUtiaAunmdnBybqhiq94Pm1Bx5rAK1jsft7dfrC7qb",
  "key20": "4Q7QbBhuGh9vxMN1nCXotYRcSjXkN7xTNYsfjDdRVAH7GCyMw5dpYFohChLLgu2tsUujTZNMwvFLEzhaGUfRDDdB",
  "key21": "RwtwagWGnfz5Lh1ECV1up5i2ESEsR8aPbMJtC5UwBSL7WjwwjDqd4CrEa3ky7iTS7fR6cmBv7SC4DU8AFb5xudf",
  "key22": "3c8fnwD75sj6Ssxk4HsC5wCbLoBhSGyhfe8kCzksaWjfcWvtLa9mdRjPBMPz7HWUSajZqPBVXfkDofpr7nY63CD4",
  "key23": "3Ziyr95FvcKToQx3FDZv9YVBXU9k5dF8e25RyeYXm8PcbQdbiJrXDwumWntqEPNYfUif6x2NVvSbrHBk6c9KevWb",
  "key24": "59Q2k6iFgRNy7iPXukd83RW9jYNSwk7tQqF7wD1XX46zbt2t4zM59JQnqFtdanQft6ieMJMQpYJJbjRdK4errBGn",
  "key25": "2wG9uyjyNMYiSoeXSNruHNgrCC5P6qbPR1RzWmR6DKmpGeMTJwzpb9Rgf3ccdGqLDYG1Wn6CnnvgjPBFtxqgJ6u",
  "key26": "4jhbnZQeALRDM8fg869iJMtVXhCpuaxwGD9fCSnfq2MDD1my19JsLDPi62zcNiLkeX93X3sUbf27yrSzMrdEiH87",
  "key27": "qX7jNhgHdzmUjxfAyX9KeLM4P69LGFWrvDnevtoBwCs6ERfZ8GfFX3Mw1fW8LfCJMKytmAdGvrid9cdEu9qWLGn",
  "key28": "3QCtUENX99441yJjyT9s4D2mAG7HtuddgqSj3REvazTMQxbkFEhBgehPDiWjKiaQJ8uWtVGxPBTLcDj8cvWojZmw",
  "key29": "5dPfQd2axTSio8PxbmnDLXhdVCTf4wA8cYXwGmUyUK8n6Jw9EA9PNTZNqMdvLCb5wpghRXfgsikstU7VAdcHs354",
  "key30": "216fJqvb713DtBruVLAz8Scq8qNtnVSw3S5x11k6PzKFh1FysbpvqpsTJj8MZfD9ZbJdBePgJrRdQfUbNWvk8gr6",
  "key31": "3B4QCcyXwJKcQPZLgiXTowY2dNQK7QPP293zpaPjEQ2SwdnDLzyGwAPVLx4UpJSkLkJ9BncnSGMJzQzP1c9WJBbX",
  "key32": "54SiXXcqueLdSi4BNSYXZYqdMtzfRgu1VEf8ZhazhBrMkod5SQCJUQei2tEFUPQwL8gXZqNN8XCkaKmKa6HqwgBz",
  "key33": "36Thx4CPiPLNtLiPggpfBuTC76jwLmzYaPgppFB53Ykvfkexy4t7QakqYgEPdVsXEt4xCkQCD28J8pLgUADZtRfS",
  "key34": "3Mzt17Xx8bwf6KiFWPB9Nyt6DaewSkaVsszujkjpU93xi57Wu2U3LdwuFgmKSHPx4kiMYEMxr1MFaKvZkqgSZoj7",
  "key35": "sqaCvD5cVSftskRkZQgmGbapfBdxpFdjXh948jsx7HWdQyZS1PNNeL1aQLFsuZS7yt5eA4GLwxF48M5CR5ZR8VC",
  "key36": "V8qrUUKAcxxkFjzjrR6h7cACP3KF155mXc2DYrWFnyREU6B6dqRknjQNp3Ndf1QjQ2F6CqxiFfZCvWjAYL6QQeq",
  "key37": "2urSMmh4Gz9dYq5r7oEBKcAkoUrvd6EdNPceWpZfkTGQYWNyTkoPiPJ57B7ZwtZwczMCP4SyGdXYmRgXwiDKVnwf",
  "key38": "46b3H6M85VC3GUxjiS1RfexBqhr4N8sSpe4tJd1xFbdPoY3TSiamD5yp9QdyYQvKHP1VizJUKZdE5pRP6GhfwJk5",
  "key39": "cy7Ws2Mwd4xQrgR6WYQHoasrYRqPz2W2c6RJ54SYSnsq2Qj3K9xt1rSKzoWyH72UewpvtN3hijAJmHz1BAhqffF",
  "key40": "RNFfJjQtuTz6L4PkCaJaz1Q6umDTBodYbVfP8gG1NfYruEL5AJhGaN3tg9XBLFLAK3pmkx95ccgJGtbhKqJhwmf",
  "key41": "4uDnxiAK1aKGaDgjMLT6FqYGTr3HM1FeY13PgNSvWNwgmomS3zeNTx3fjaYMiMSYBi84JyN5Z2LAMVMHEAoYtWjq",
  "key42": "5kcP4oho6M2EoUGf6RYaBbDrmzAVUF7GpDMpXnt9MR5o6U8ar86eytJQ2nFrYzzoQNcinP4iG4GvUwyZTyD7V66i",
  "key43": "5RBtd61HVFouP1jb1gMubAKsCVdzjhaTU6FjT5t5onXuMXSXxfrh5rwUTmVCadzhA8ULGcRWS33hhNDh1ogj5rqu",
  "key44": "35En6sNLkeaHDuQxeww63KuRuJSr3oU9zyJxnv22cPa3LFbttv1LXeLHzL95gDuPd2jaF39xwrutfz4pnvfQvk6f",
  "key45": "9MVbxrHpGNdYFXSAY9F7rYRwnHgTfRSJqA7MroujL3xjPC34486bbEru8empx9gFU7Rud1BEZ9es5fmk6sxTKSc",
  "key46": "2rLW2kmvPjsciTCQJkddKVA7iKtJYVkSaJkVnVoCajPAyHWaSpBpaYnvpeSUagAvUegCh8WDtSLACKH4XPHyWLCm",
  "key47": "311penEYCJGqoNVTFkwnCz2cs9u1xfNbTYmS3nWh8JKxho1wW1RZzHrf2rKCKcADZHSMqGFHMVA4wiXfL9Kd3SPp"
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
