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
    "2imUQzxEUG8QESj15tXP38wRg4JsSrZaqWhZguS1JVprem9B2kC211BtYoGvSSn51KZZdN6zxtw3oxPk4Kp55z1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5grAdHSoivQ7gCoECzsNnWWWneq3eHYGoVUS2m4veZ9CPs4LEQbpVqh9zc73vd2MpsACmVvEpcvRtzF2emXbXVez",
  "key1": "ZN1jsLsp9UWdtwXdZkMeRyfVHkM2Dtc2rYcJJ83x3XH44YLziAGQV8N1Dr9NSfqMhAZWfSPtwb6QACibQzTD4aN",
  "key2": "3jiU1rh5SPyxZjv5PZFgiD5hsKKmNfzybHLL23H31R2nSrpEmGbfLkPY7vKvFG28McMhiLkQ1Sp7kqRxfAmRdGv8",
  "key3": "5KYePbu92iGpz4ynbpam5cKkWhidjvRdWLUHwi94NZ5M5twqkK6VUzCWmXPhU7E2m25EkExNcMWsLjPNXmzHJkjP",
  "key4": "5ybhk3ZkFNwfZevdf4Amhv18sa2vCanyoNsc5Rv6rHy8VkMY8gPSKxou3pgSvAeUwn2cAKe4gx19RFshqVMFuyXj",
  "key5": "2idEGSemg2pcV3aKaRt6YTnozGgqvsWVqGbgTuutQgAwvqjDd8UtyeSZpUoAjz925Ka4KS1Yy6DayWwtJQd4XcAk",
  "key6": "p452m1oiohCXa1kB1fVkZGXwUnpAduHg8ZUfKL1i7qRJ4JAqGCmtVkzFuAzFVmEKPrwLxmJCVvQ2rRVcbnGEbRe",
  "key7": "5qxgXVVhgosyjAiW9Hoo3CJsD2dFMUTGqnr18qVqfo3NNkU1nEeko8AAEMg6bHfR1niit7b2DC9m6S6zuRsEKCgF",
  "key8": "5WhYN6EZqJ8Qjunt2nxu1uyFLT2ARUYa4DbgFBkCx19TzC1AQjrQG6vjkpmXZmJpb6FewvHxbEiexvkGe3xooGLN",
  "key9": "5dNaGDseYJibUtP1VcrPVMViSYdWxTLnfjYZALfr23z3PwxXKYSJS6wLATmJfdN6mBBXvERtNRXbANMnKXhjJBtF",
  "key10": "QomeTd3ntCzUfKThxgqjAyLK969MCqpQse3PbcTW8Pw593XzufhFDDYAjWcGqzyxHoLRZvpKWYtAtyRzUDyHiK6",
  "key11": "47uW3tPLkmqfysXKhRUKtnEXg67ytHdGKBfYV4rkthRjU7uv5U5rfZejoXGZ1nGBGtJCHCpkLMo6xikixRdUtuGW",
  "key12": "uGbQ8XpwSWqhnA9gxjdcnGQjUeFE3gGDvDRr4jGtGjUctcyZFXtGciWxG5Ceyhq4EDwBqSFJRiqV3SWU1HVQpYQ",
  "key13": "42PGJ4sZpEYZXpTh2WKn4iu1KeuCq9n7YRaZ3gungwEkGTsmcAWK6GBdiVzfCeYXrCwy4UAxp9N2qXeEiVug72pF",
  "key14": "e1WCGaFkay1jW6tfp11b6cmwLhgYgnpTnT1qLDipTqbfp6K9CjduSH2yniRYVJ6Ga8p38z2igSo3J8UDkWP72oY",
  "key15": "4TbQHKQuNewDbWp48tNyKBGcJ7vHkF2KReDQhDzGAEx2pKiV1nkzk63u2W44x2C7xtmSbXNNMrnUZfGXSS1NfSRR",
  "key16": "5umsodZhjkEhD5ZsU7BVdYzf75zZvxfGHLoAFXmePQgwVnqHHnt7EfTjrK6HFNGGLV69ojrsn8JRCmvM3dC9iEsG",
  "key17": "5CJqM14rovyU7ffZHb6vjqe73Ur3zGTtBZXFYx9awZAwXudD7i7Lx879hNG7ArC34wBzFLmAJaCfAoNLwjHs7AKo",
  "key18": "3tKbuuBgYEWjKEtPHV3J3XoN71SDLmwpzjPghVqMRT5ZNs9BgbDktJRHMWtsDNgmwAwMcuE69HvL9YFcbTt7hTfm",
  "key19": "2CyN3zRvQcwKpzjX4Xnf6fii8ZjGbApS4e9ANwJ5S8xSLmFavoj5d6AouVAggYXgCD4S9PCDodqv8ZbnifoGtwTA",
  "key20": "4xqvb78yskYXP9ggd9wAoUGuvYHkoWiyFHg4CjTikhFScD4HepvfRZLSUShH8D2iB5H5gnZkyw41varDeyUtLZHf",
  "key21": "2cSaWqWN3dd9VLrpujvrw4E8pjm75otEQgZHLHav3Yd6cjpQdBmT5asKCBJxrEyX5feQZMD1fxwCfiDCtBksdEHY",
  "key22": "4twEweX3VxyUZ75mZQVdUpVFp4rSZSShCJPXnGF3R53xaaE7jNFszrX6b4MEaXEkPn4C5jDhz1e7mUhv1A49tjTx",
  "key23": "3oTL3pdva8NHviyrianZSUUaYJMvQAucUVQbtho1SfhTjZjxe6m83utQHVK7r1ZMdytFFtxKmjcLC2ztg4Tci5qp",
  "key24": "5xhJDrjfJ6oZ16nsxBNZQvTaDPVjw3UcwkuYUCzPQFmShgtfrGZESnVycpbaiRdzzTGbaskysokWVq9SNTsoQzov",
  "key25": "5JWYNYejeZHkiAnSHBJQwBcm8Pbt6NFX8xeUNsP8MeU5wjna3Vt8xAX45j4ZVZnNqfzy56N3V2148cLMpkvWg2y3",
  "key26": "3wcoPCcn3G3r4dp7ehdupkCbM52GPhNQ6EbRqB3tjcQ6pwmxSjU1SvsA1UXCT99r1FLrxoSJ4Mt5nMk2mcZ9tDXM",
  "key27": "3vQETEqiaqMeZGdSnb8stDyWNUdJCkTnd22wpnkrWK1b5mZePi2RAFUiKktBfiRSBeDrm635y6JonVHGqgs4YSXF",
  "key28": "4gE1VVfCbTE6ZYTUgzMvHk9NHtGASr8wuFrzLoaKCHWNxZwVKGGtFKg35dHm5rEYjE8jV24EdhhRH9isZLpBW8uM",
  "key29": "5SziaaG6VSKupTwLFFkjRxCMPP3oSZGfb1XajHjv2McmK6DoPowX2c8BwqbBBvDhs6ScC9xQiKi1sgXMPxRGunH",
  "key30": "4N9oSximmrEgb6CsZbADQ4N9gYmfGNwJP3eF7oj29ZNLWEw28QWN7T4u56wFqY1danxvWYQp8fd5x4F3KsSZg3KR",
  "key31": "2uCm46hyFejZ3uDfbfsGRScb8yQP1hA6b5u6zrVffx7An1N53rGgrMKM4tmkERi4BdYJSith7FfvMCkB4HLb37tD",
  "key32": "qJWMrUJWBY3NMmwZ6X4y1W4TKurxDcyzaaDBDMMEZaguVbdpg3kKqA4nAtmn4Y9SZ9BmrVyFti2zzfkyRQ7jVcR",
  "key33": "47FnZGzELykfUp72JxAoCU7iWvmSEyAXB9wDiZuuZsivnYQMnwmadjGXXaszttGf7uTe67VLP1YcoRdn1nE8vhCt",
  "key34": "PUhN5yLca4Zde2PDWJr3oCbC5iLfwLznHA5cscKNj8LuiTcVujDAKtLoLfrtfXRtsCzRsSUibLm42s8MDLL6UH1",
  "key35": "29Hu42jX1Fvqv7JiyJci6847pi8HsuKj6eGXGkWfU5jXganHHSqVqahKAhcZaZEPxwJr8DpxCq9FmjLR4msjhWc7",
  "key36": "25wMAjKFWz6BfTyesNMwtomWfrcqU4MrLQSBSG9W6sPkL8wBxVtTjAbwFn9XM8rStwUMMxz9ezg8ZEZTMLbdzm2J",
  "key37": "3s7QNCvLZ549J33Q6XjHY3eK8vdVbuUJTeihiEigBEdqF3DNuLXB8R8DjSUFvLjyua6NhHJYr5KU3YKbaAE2mVjf",
  "key38": "29KNwdUb2G5X15UEpmYXjMqNMD6UgYZdCnkAXWNimAqRcWUdFgq5pKNpSFjwEbvfTFTGgpRaDK4xS8e5GnBhhwVM",
  "key39": "3TfgVDTPNDMrPBHQ8VbHnrMCdgdc5RXbQbvvWR8U2qS8aC2YonjXraya9mpJyxtGu3hQ6SptfdfMLwNfE1pWEpUi",
  "key40": "5R17e9t2NfFdFUQpoBr3PcSKykSoaeRkCSRV89j6TovrhLSZqnRo5pCz1yX7TsgtmTYXzBjiDoiuXn2YzxqG3R38",
  "key41": "4aCnZAzdEBeWpnHZNXvRDyB7LUHb7V6yteMAKkzLeeMj6opLcNYjyUJmnA3H9463nrCEhsEM5w4jGESUmtrc5LZJ",
  "key42": "3nXXu5JYPDKKXeVdMXtwV8MAuqfC2zU9ER3y5UxhvfKvoy6XMHbV5M1d3KUPXL4f3jy8bfD3MSdqsjXHM6SU3rs",
  "key43": "2mSu1tuxHRAiLkFbyiGN18shTqJe2oQQr3uC5CcKWBwm1gu71TPmx5uxJfUmrtFppCaAbLoREL7a16jLajVbdg1o"
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
