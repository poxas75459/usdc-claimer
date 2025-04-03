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
    "2tBcePUfWDZU94a5zaPqMuCKKoPSp9kG7bC9AKnfUVHuUUYsAxd5392X4DywDBT7ZmubrHfGHvLsHudzevHsUG9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uZhMmv3eLermf5rFR2vvV4UNC435uuQniv2pkansrxxhwgnz8oKSu1yDwNLdQ7B3SP716XPWsh7ESs4UB9Dhrbn",
  "key1": "3Gt7xT3dCWjLLL5enjAbXSqSCVowdJMVEPGXdH2otS8tCkXoJ4eJSYJyQhcWRimTw8Vg2og96dBBT9SYHhTJk8Ca",
  "key2": "5tuRP3tJoHg6aDhgBKjEcD9CR9xt438tmoBsU1AQDJAPT9e3KxF9dGc5MixHHxhXeFG8NmuFw7mPJv9hbiTDrxud",
  "key3": "4poNUdaVAmTdHgUAoRW4ktEMtV28quBYknC4gBNjte8qYZ5JMqq6iT6WLxaqpss74xQNnh4w5DvRNXHqWkRqiptJ",
  "key4": "5FubnxjubtisUvTJEf6qumZQ48SNo2GxjV1qnv2mvWb7Mj5ABkMqfHqhwpQEfk82T8gzKxXW6DWrjyx6HZy8Kfkt",
  "key5": "4iJdERKDazH5nCJgQgcrqqkHiBdYgNPGUEVCVB3iWFnQNtF4rC1pNzHbZXHEd3wLoek3Kj4tEdndyeWScr3TAqQj",
  "key6": "iHZ38H2CdRcAvWrhPRw5bA8VQJKEVFFwPYveZHKhK6gXuAfGHmtwSbxjtL63JdpG6jhhhozuKQr6WZzuVVXsZGY",
  "key7": "5pDhXYXderBkmtHihLkDXZXUiycj4ViY58eScU8YdY1bruq5w5UnXCtnahb3JRP2yBuzhfQ8uZP9eN4kYz8XTm6c",
  "key8": "aFTGsS9jD8vmWmJDB7KpMFB4cewwvf7xKLUgmRx8tdSPcr8zr72EEBbgngNbt7QvtnPdvaZ4WfZRWrxzsgoSSE9",
  "key9": "4WmkVHvSJjTg66avLMRWo6Tmimm14EeJnv3XzhZaCQ6CG1GPAdFyZ43ucWde2bqSKEnpBtTvuS5dyXZjXZsSC8ic",
  "key10": "4VqTd2oM5vfa5yTBmnQRTFg7bE883wo5XzAZHVBugVaKNXZLrGrNKStVwxsX5c1qUjfdGdo2NjMVWkezZS798NwD",
  "key11": "3mUR8uYUTLUJerJpe5wU88HmLx5bP4k3mGun6toNXRsPyCPKPBzDMjGkoHcccsjTaTU3LnKE6jRmWgQsZuG7JQ83",
  "key12": "4okPjYcE9YjdnNSipP7Mpv38ijwAnwYtQmTtBB8yZZ7JfEzdYhCTEfmo2SVS5nAfen9QZC8jnyaWakKYBdXznhdQ",
  "key13": "4qj3s1H9VNYbtbxKXH27tLRAiD6YjtKyJY1S1q3pARZfoxRaghBqRyHUPViJ9LLTiHMA9y8CYxDvbFcB714qAzKY",
  "key14": "45SzBeNznSW9fEwAmfezcR8UMPYMNKcVsCVD7v1rim1bypGTW6SprqxTvo5fkpCXBCA3aZPCZLwsWWD471BMB8Xx",
  "key15": "3T456GaeXmbcuVH8j1ykwh9kneJfqeuj6Mwjxwg5VehEEWv4CHJN4NtKbc4ezRr5vDxG3VTziYewN8GTKguK1Lom",
  "key16": "45xVuHxv8umNZGC5SEstx7ZjD7Ynxvj6FxKi8dtq2JXgLMrJYHKs5snuXnHTpBbKYyyAy1hYysD5xrWWymjpn16q",
  "key17": "5sHjpoiVD7psjfQ9E3jRm2ziGFxjBh4W3AnWojNGjAz6g7cquZsLQyVJ59xRo3WPJp3LXuUBog4f7g4psbFiaJuA",
  "key18": "46L2tiEdcudcTHnotXADwh3aH2MdZ9zYeuF8gqJdXoLYWbs1k1Q9vS7Y2N1mTUakCsF5rewapy98CPMvu83F5npC",
  "key19": "moBLiLKGdkMNyikFHvQutZkz732Xqf5xUDy9hTAjwCPoBFqsXQf3zdaKSCSQHRZ2ULBEhzn6dPUsvEn5ap8ZCMz",
  "key20": "5ZwWCVhGdApx7BFYcFbMW6xGGykejEf4mVA2AkYJERsraYsTAksXSzdtCyWTvX13CZLpUka2xFJAUcS3jpdxtFhc",
  "key21": "4orzueCCJmXyhxqv2LVPv5EYswDMFgudgtdCgy3XFvhc1SH1YYakMsMM9oiN1UZJuENA3uWuhyiPi6f2SoTQsRjN",
  "key22": "4GUXHsi3euwjoijvVR2Hixkw7PsVZVdF5HQwqeG9TqKvxxWoDSUz6LRy2SpDJkdueVeGgu5bdDozLgsD19Vgd9CH",
  "key23": "bpMWgxKvxs5zWZqbGtwuvZ8Xd94pRyRYXrKJJw2XEyYAtg24Pqme8h6Kwdo8TwQ3Rq611CCupQKoXN6RLUEFktU",
  "key24": "4m9hoDdYT58QWaMSeaD2R2qHvUAivFksPZbxfkD68nraXV6AFRTaVsYoQZNZJsMvF1MVdXQhinjcqXS6tbnxT3pY",
  "key25": "3xoED6cm5M4xhW5N7hoJBQQBzwhoy6pqYuWoQGGSZJM4Wx5qmFQ9eGRueyxJfNMG9jD9AffaDKq3LSNLdTv3vCZe",
  "key26": "3q34N2om1PovFvxwK4quNWMyxSqtzQc8hG6DzugPQxoYDVCim6CpdDgy8DcgJdRm54qbDNnVWyk1pbBGVtVEgu89",
  "key27": "2XNAbk9uW3mMBizaPx9pYVWDZJpbJE7Qt7QnthEEpvJi31e11q8QmvzZYZySMvFviUA85fEirvzREP3sj4JCUFsT",
  "key28": "4u1ppF7zUKz8GSWKRuL44CNJHDVGGsLu8KE7joJvPSVj2PTKSbSk36RXAi7rxcWDT4RVYTbvJQ16L95caYwMSTYC",
  "key29": "52GyyFqnfyQpDmTvopvpS7TwVRQh88DDeueV59KLG1Nd4gseKJSskSZUN2g7vcgqNJVo3gBDG5RvHzP2XU3CwoCo",
  "key30": "5qaK93ZBTySZ3A1AMFNFpmub4zWoSws2YPwYvE8d7s8E88XbEag2m81Azt9YLWSzuwqhEaqRHU6V6vt1NQmAbMQc",
  "key31": "3u8iSVs1AEduL8qXZqWfkoXjShS1mPnaTJA8ELdzemvBqtstu22RtqPgVWmSYwt94z2mhocsbit9bpAU5RwGiVvp"
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
