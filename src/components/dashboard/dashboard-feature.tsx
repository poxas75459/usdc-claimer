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
    "22uGrSKiKkr77Lh9G1g3LGjwTxvSuvgCQgdc1S7Pvp4hgEPbzqJWyUpQLqn3q8m78Kty5rHFrZCgmvsjWR8cPzy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QsGqVebawDApTimCSWuLtw92okEK5hLSyx6bvagH5qQsrT76fUo7qj43vQM7va6QfCGmzXuSUgL9iezo6DJaB4F",
  "key1": "6B9prRagA8MDgVY7MaPgUyxdShyb2NpCvD3dBjCQzm5PMiKqBZxt6uXZgmK6pYRhm2Tixp54vuma9CVVSYDoXxN",
  "key2": "2AMx6vd9EYYYALdgsbgn39F1343TTFf7zVkFj22ZXddsJrPdKGHPdgvQXf6q1isJ8QBBr4S1hJAKgY2Nee2GaUQr",
  "key3": "3eGrYk17btx1CUA6gose7cPVqadNdLJvWU6SjCj7gq4dbZKFGghcRpR8eLZd9HayNDab4oyHpD6Axb8fQs5Vim9d",
  "key4": "5oH622XQ3JKQFdZjfJAXkEthbDvWNdKTrYGt9zQnfxtQsmL5WRv1z2J4AdPNgyhSe99VMzoCM6pVc9jAzLEVPymh",
  "key5": "5tu4L1xVp91EeX5MsE6NteNv9KAakrUMk4odty2eY7cvPBybhnM7o8RBmZo2JiMvknTWCeN1G4E85wmjs9QYrp3L",
  "key6": "ptkiWEULdmgtn6PhtpNZnDrha4eBgkev2238pUpmkexZ9FZfNCWFVdvtt3Jz8iEoWAwXKqXTP2zCZdmojr5DyGf",
  "key7": "2RdiVqKHu25GeJbNH4vUyaqup6njYPJoTQRj5v7HgHBwshYCvpzCzFreDTkFnKrC6nFed6cYZkeyJdhCcRgfXRba",
  "key8": "3mddYeRTRSyaUJaHuPMAw3HtSNQtS3mKXndBgQHNir2mJtAQKpbVxcjxCtxrBFR2z4gJuUz7or8EVEzjz3sQgrL5",
  "key9": "519kqLoVyDYxkLW4DBY2UGnAa4y7u7m9tQkk2NhqTnQgQu8w2Myz2NLrZkqPCayh1G4rN4tpDekr3rA86Noy8Qkx",
  "key10": "4Q4Eyse6UUpGoBkqKGoKeNCCUmruY6Fo6b8Mp5dXo7AUtpd2mRAndaEgGLWBrqQisKbFxgjiTEG5SaptzaAWusRd",
  "key11": "2RyKLyDQbRFnbCJy4MKy2avf195MQch7vhxg8pSJmBJDgBetYGqxqKbvAuThvXYWTXEGoUkzzyGAoxFuTSjb1zMS",
  "key12": "aYGH3DQRkqz7o21xKqq4ZgunqXiPW34dNd6muapZtdVP52oyEaUn9TpJkMNrjLgJ38ZTtXixmJM2FpfiRkD9qAk",
  "key13": "j1SyKsHBawhpw4F2d2mnwCWsuwiTkPYCtYMr1QnrqremKnFdh9uH6b9DdKSxb5FzKrZYmmQoL9avqhQLh1fkNKK",
  "key14": "5Q5z4NpGHv87ak87RZ85bdMdvMubmeKBWxwXTqRy4LEohycK2dgdJp4LXi21rhT1e36TGW9xHYnrb7Hi3MCnyDzQ",
  "key15": "2EACGbUBRfdMEmkWyo7ezxVPuW1iRtpBzZj3wEoaHJnp9MKoqkPpKZQ1H5GmX5NNVRBUeeX1QLjancSMVpiyA2Uv",
  "key16": "2C6L3KBNNYjNHqmGgtypTak3YjTj2DK2zbjDad7ZiXmf5r6qqwfVkfnzXtvAE1ycN8rUvMErBx4JZ6KfaswhH3F9",
  "key17": "3Ygz7cF4aBB5EVX2PPwZMy8uKTJnXudnyCdEdvG2q9cn9ePBVQFyVgQBMjCPrzRfzqwdoBQjUdN6CD55cLke9TWj",
  "key18": "3kRF85CwwsnL3bHZ7v8kbgPCc7gssGMqYHDpD9UzLM9oZWsLrSzM4SZV5pvdUj56sVpX9T6BWMnb1dBv5ej4j4hg",
  "key19": "zFEdVZWK3JjyX1RvQzgMzuJro9y1HQnwo6mQzeAtmtSRRwiAbrPMfTVX1f9CPoLAeerufkPRMxzD8dDfURg53X3",
  "key20": "EhX9Z6b1eQej6F1js4fhe4Egpd6oMR22HdzcUWkkYTSiDgL3Bbj79YzpsJkwdeqpTUAB5KiqUioaWK4fuWHSKEs",
  "key21": "3e3eVRGnXqvUCRei9BDQtLogacTWYHXfY9Wka3jjUwitF9VzG7q6nAPUc46aeiqVyes5dzAnKEenJ1viHdpomurq",
  "key22": "2LWbpVbbDc8iuDkTwNRtfY5wj4qoYZayg1cz1P1Ph3oVcgENcRuusJJ79FCpv17CQamLFfJekNsALn3vuQRbax2H",
  "key23": "5JkVogdadMzy2bVt8zmUAHXuBAPYAZng9L3oLxErwzrA9NXWRAcKfmhAsW3tggKMLPzuRgfHMjawW6eiHxUvEgd2",
  "key24": "5LMx5yVhirBgsg3QhGCUAngReMrq6aENJRVqFU7bnyxiftWxLjZ4ksjzSbpxUSQk2HsHaDL9K1xwCLPYLjUMLggc",
  "key25": "31yZmsMxXNeXGYSXkWNPEgYqzCfbLJAVdLNYe4vW8RoatJquneZFMgDmG66uZaxH6sF7vAVTvuDJ6dwAU6Abp647",
  "key26": "5D8vFeeaP1LGN6BgQfevVxT7YWHRukizURFetCHnKWTc8XBjRZ8bYvx8UUaT9Vud2SyAnmdxX4K2qWT68Y82HQFF",
  "key27": "5Esk7WAKaqdnekb23D3aDjgNeqg7ztp9HXUtaECt8Fay7Xm9sYaCaQFhVbrBStKUaoUBz7KmX7tWj3zuYBMZp75y",
  "key28": "3ja1vLvR51WSu6yuNKX2MQXi7gx4gX4LNyp1Zn7xQbPcfwAW1gQpF8QJZ8MWUUosjm4NCmpRtx2UaeZJb7JokkTL",
  "key29": "5Vou2NfkSbZZ3sCUWAv6w62v34izb4LLdJbWsNGPkj5Kf7DbQUTRuCFfQXPwT8yiNWngVG91uj5DvKc79fBrufG1",
  "key30": "4HmeRMu2WwWDaAXf3nrE4vrB5z6jhT9wrwuwSgzXJQ5ckvWbXLH5JP3NshHXoVT5YzURnzPwDFDy1jchCWAeKnKU",
  "key31": "33Fc3m3u3uHR1SfWTqdwe4rLvpmiFtj6u3b1nysN8hnnTFt2NbM83vEVLjZV7xwrSSpMK1r4iE7wfXAvXFgvZ9hX",
  "key32": "2Jj87LmkBoBu5xEFmY6WTYSXhRmC1jQ5ps1DHyYUG3SnxiqgQGKfhB8iRhZorRuuhxUBpVuE3eLB4SmdPssW1Nuv",
  "key33": "2TT7yfo4nMm98G64mUugKFtBEphX2C7ZqfZecviSCrqjeYuMEAgRirryiN13ZUXPrJJ8M5UhP3WqULpBj1xjB3un",
  "key34": "2cz8JqYAfunuB9FJdyMHM717xpG3g3RF8Ao9aLmEks9Fi6rrZGv42HoVxiTnUbH7om8mrXBM11qCdUy3umh8C6ry",
  "key35": "66kY8DWJz3GTRDsraq8LMCcmCwbD59ExqTLECBbwsTtbjbkaoi6h8aLELwD9mkmvGoERf3DADHZzqjvEgFDL3eXJ",
  "key36": "22afBkPF9HRzK6sV6fe1fqDr2Kz3UV2XDjVvZ19GMMeKshie9puX85bBFnfVcR4YiDVqtvYHRMr4N6mCMB2qEe3s",
  "key37": "2xMDmVmEkPs6xRawJotHw13pdU6FGrsgPxNwSEiye7PUCWfNrvp9zKXuPXg9ZdJ9mKsahE7pE1QUrmswifqLzJtC",
  "key38": "2pJCh8oUXJzRc1Jz8BbLRYqZs3NggahgXAT9UguzLB3basJF7NHx6pMfg4ncSpjxKq1PUkcw5FpfWWXZsp7VyDZC"
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
