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
    "5TVEM92wKcKTqswLxXB3vjC5XBU8RJqJirosUaGgcE1DncS8SDUntQrxDKFF65CnVxdctbGDic21AFyz9jJHkp1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ukqS564Qz87wWnJ8EjXLgNRfM47N2m3kZaEcSiE5ockMHbW57TdNFC9KjgWzVKZXKW21Y8oAcPcmTCFdg4Y9ofu",
  "key1": "uctMCKCBAAWBw6Mz9Gnij6wy1Bq6nM1BfdYA9jwXTk4CL7cQMcwLA9Xf5V3wBUyowNoPDMHegaq2fwiXKif74d8",
  "key2": "LMMrbYYMZu3ZTnJiWpxozLfGCy3WB9r7ws15S2i7WZU3h5i5jbnBP7FoB7MgZsvMFDQKfE47qBbfg5HKMLU6wNm",
  "key3": "3bzwPSLydAjdhS75KhCaZ9tPjh8174qJh6DZy7Ls9skkqNbaQUvTaBynGmnqxGFJPnaCdZZvTZJEKzArye5fitj4",
  "key4": "3jHrHDw7weSTkXtExogsQvQCioudnPkRAD1Wx23z6e3weAvo4rTmNv3UWiwNqpM4GQrnD2KZRje1kwRwWedLUbKP",
  "key5": "f8YLLRX3zGYPKsreYHat5DB4tmZd3k9ijhivzCA9m6iQFbUcQ2MGwERe3fPjeSDM5imCXa7FmsKzkuwZqB4WMtd",
  "key6": "5LPiu6sLvA9kDevaGmvTD4nAaUFbwukJyhnzFm5jhBbAqWk66UbbxHCy7dssEAZbHrDGRMHWtBiveRVWnBGujnSS",
  "key7": "4TogcEMfFCWsTz3BeYZeV6mmZtnAaSDzXgNcBYXVf6DjXxVuh5BW2Ww9DK798HBoqszqPu186u3KHgs8RTKUFZQw",
  "key8": "4oZKFebULFXG2joyWootSf79o7sXaMw6Ty4eMaxHNCEmhWJsVjdBTis4bpy1DyAvFy4HA9wr82Rwx8k28YSZ1okT",
  "key9": "3idWNHp48m8ySsRpH3ss4wiStoKf7FEucSLU6BsaW4Evayou6M5B6gGeh9mWUeFrAJZ5Y85ZAP11Ta3bS3unV6WT",
  "key10": "acHaCeZ321F8YdL88VFrqYy8iU3Ng9h4MfLQtUAv5W8MUwjfhHiBiSSQY7pGYfCDdMuZbVsPuUii2kwyXp4aGZs",
  "key11": "cfKPBwxBLub5Mvi9HbrJeoRxLL8oKD8UoEK5xHUGWjC6MG8rrERZ6na6M9M6QjpQuq8t5xLEDQA2pr6AETfJD2u",
  "key12": "4qvM6GcV65pdQktY2bYqjKfvkfQ9hRjT1sa9J8yT6QxCZ5Vkgf3LKDnbZPqdssWAR27xP7edrmyTbKDEdoVhphbS",
  "key13": "3YuxWPzayXh2wFd3UyuYxtUY5r6pTr7ERnMU9pbeWXrbJdcpRpNG2MXwXeTQmZqn54ztHVxbj8Ld4cpLYGb9wDr9",
  "key14": "2FUo2busD2PinRLZLroxvcSJVvpTf8XVkS1Q6S9SMobFffPPdg2WzrwVodNYVZiuQBMMss65pY8qernV1nQGAvLf",
  "key15": "5kCyaP13bj28fUprMVgjES97QKfzw6iacD8xfEG1u9nGyBWCsRa8RiYnX9sJoEgM1giNeVLiTRXXQJD2UuENzxj2",
  "key16": "s9uy8dY9KZntj1kxPQ4YizfM8jj5jytu1tGMD9ow7WGcFAC8czC4LEpx4eeSsGyTfKWftwyVSEaNxNuWbLozMXT",
  "key17": "52SYFx51ecSRpmoJ5vjvHUTX64tgfyG9z6LiRSU4wKeYKpi6EzDFWuctsYNss7xHw7cEufhezEZgDjEAzjx2twa3",
  "key18": "2HDEjMWQSx48EWWyRU6MpYKCHXtRhouAsLJWEdpTm2ZvZb7HLSdYmmwFdobwdWe7o8JwgKy55mtQPKyCp7eyRTXR",
  "key19": "4hWmZ7uGQumyDvChYFrK6JZAVHgnsGcstxFgzPxhPbiiqb1T7NbH2aDuEhxap1M2tC3cnkES4Hr65ecedGeEokdz",
  "key20": "5mwv19DpmeXgPiVYFwY2AZJtYUe3SqBp8yEDYs9TanwUa5fvZkWYQdMEgto6Nc2VcJFPcLb8qC2RtPRLiniu6xyF",
  "key21": "2Rhnic5kjHdN2sMtcVdWwV7zsQwqmGYdF8A7JB2471JThxWWTdfCCJD9pUxvtx5LsiA8cjS3zdhtUQJX1M3jXDVN",
  "key22": "4Zh1zoFqdxHYdxWsKjKDv4GzcJ14WUrEjSA7bTUNgZVbuE5E9XJvxcqnjHkaWsFqdMiHbjyrdvyQQb7gMZoUwnQU",
  "key23": "4xDFZFsebsEmLTp5LdzUFpXMfsXCUUASLqwaN74LddqkGyp9hWCTkWQvqhxufn9VbPAq7B2jL27yq8HCVbFUQmnH",
  "key24": "4stKRCqRs3Nxp36eKSnNti3q3KFjBLczEUBdeGuEaVziXAj1EVyvbG3J4hxzNFJFB9eFs4W1PsR5MdGVNSJFeCRd",
  "key25": "4kMjd725YU5zx7ncRNPxoqXLdZwdonkVsVr1r556fHrw3YUZBxen1nXnRr8mDH8w4RwX9R8PrzjqFW1DziFKxL2t",
  "key26": "BdKL5F16fDjQ5W3LUJFPg5CcH1vzaHkrRV2Ca4LrRZVLXH927s9zquFzArceTz1UgHkFBNmYF5kh5DBgTzwuWKR"
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
