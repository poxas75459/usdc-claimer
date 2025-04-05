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
    "3qr3JThLi8GNghNW9bUHQ9WJnkQVc6rrbXNuytS77iEftyfYrhcQANL8qScknPKtskBhSDoYBnAqohJ9S4dQXMfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ceqks68fS72HNUgNJtFHzMk9YbTxCfcsyA23nMqxMe92PpiN6CHMYXDdtswWHKfQYJHMsLjZjcwaE4s1aEKQU1M",
  "key1": "5dgBGxVzbzGYTKtTEBXXjRYdoM6cJUqoduPaQJWqMZ8N6JeQzSMpN2nM1eZjeZxoLvdfoa8vsYnez3HZoo4TX6Je",
  "key2": "32ANyyWwUpGZGFTzRwMHgShpkuuL2wANek2PNw5VU9pyBmtzFLa4g6uygZFuUgcoBptncdYmqAA3f7ADTsJgVudW",
  "key3": "53vWrx5SvERNgymNWfAiX7Rq5K2tgvuz3D2S2Qk7AdaxXaZjYkkiuLSjR9y6CwtNMAxJfSnsZtMj2qqLqK9LNkDe",
  "key4": "2TyQTPCPSSbfs5mUdjHMXXrRJhXBfJkjcV1yHTfCgkmAiVeJvLnYnq5epfr4M1P497QG24MTBzwTdHF7kutHX3Hd",
  "key5": "32dfwX6rySUU1to2MWwzm5Vfe3KQnD1bTiTE5d3efuZ9bDe2gmeeszzRepvdVUJi3P5tF8AUV7FM83tdEGKH8itr",
  "key6": "3NmghHo2ogpTXoYrDeaRp9pWJi1kXdJAuFwY3ivZdArk7YvhTrdxxb1PZn1H7ECGuaqgHnc8c9bKpPSrQngZijJp",
  "key7": "adRkPC9UaLYAVZNijcXEHaMrcJRE9YzoSMm5zUxBUuqdpzaV7QjM6tT3UHjRkNkdZ8Fcct9E77Yq64rX9YVCd6F",
  "key8": "bQifC1XkT6c9rALtbwJBpb9XfodiPDbKkLLqp6rkmdioJaoSMxL5XBMeJgeEphVsW25t7QzV6ZtP8pos2iHsbn9",
  "key9": "3tdfyNLgaPZUnxYyqDpDYXMCuRreZvXXVrW4tj6xyFZuYUYTztuGjg7nTxup7T6kRjJ7zDX9XcHxN9ecbdgo13rS",
  "key10": "25aSqR3dsq8977F5QwLMJAXZtqMrSxcrww5oGSMmng7cRJJ7fi9UESDewkW88h2d2fYyLhiWbNYpNd5rnn1u8bP9",
  "key11": "4eerB3KjVZobKCvU38LNuY66S1emq5CSuSGeyUKXN7J8BU5oGkQfYerPuZ3EVLoBpnueMg18NKRqZ5EC7MwvVsAb",
  "key12": "fZ55jShyYT7Jz4MJSUzrVdDmAWC5MH6pGSmtA1qyBPrjaSoxZXD5wVLEju1Xcn6Msx4SQVKnVTHPwZeYeSkRQR7",
  "key13": "4dnwjXB6UXo9PHgnnQjLB4AXKBmF1xH9wXurtHvdGrGpU9BsBjLMCyB3TpmUgFyTtAEG3nNipddF4vpvhKXNxAFL",
  "key14": "43hHAaf3vWbKk9UTn85cBdPLbU6wKCGcd9xEdGxjLGUHCxNBrspnYYG6Fi8DmMiwqh2EP5dbgB18p8e36n4EKSpf",
  "key15": "fw2UnvXhmF2qVX6WgRKzJN6DraJsZHKcBBHzsLddZGZHa9aM4eEJgz6uL4obgocGbc6hPkL3TuxzaRT5L4rwGmN",
  "key16": "3SwxwyYmsm5N5erbcxknoAKcEJiLss1VzWbMMdpWh7ucTF7dVky8nFUMyLUykh9MRZS6PcoMXUm9WqhYBhWwHnbo",
  "key17": "5R8J9uMNjNVbzXg5LeMUcRNkNafVLumXp8y2sZqfDCY9b16bBToqRUpfGDp5Fbz9TzQRtwRFohCiCxyF1up7d7y3",
  "key18": "3HbSkcHdW9MdY44ZkSaoWP1yynt94xeYZmHiViTjunFDMAYaCENuLXF3DE24zdnySveCmBFmZh6mBDhgKDz3NwEN",
  "key19": "5Ww7qiL2ACaSxCsBto9nLz24o8ndVrxQmhPKGw6sdWvRwPYsVwBz7XDVMMBGtegArPsUuc9HoezdfFzeYppmyJ34",
  "key20": "4hqs5kqwmqkdppxZsnrw3s8P7Lsj8LQkn6utgT2ZexTqyejrteu6xbKMZLabLMNwdBA7BgyXX91de2PzKnJFWDbC",
  "key21": "5Ax6VmheGt7vDASgNXdqtKyCUvJ2Prg4JECYfiCybMZFvjr5ZZKLjbXmyeD7WY5SqNqsk34v8Z7Ej3UBFpAmyMxW",
  "key22": "3pYy2uqBPnWjx17W3LRf8QP8V2A9boYdm6vWMof1TiK4pxPVQiWx5CtB5ytdCBZpz3Mhz748yvMtwdJtdWkgKpsX",
  "key23": "2jukSeDG8Wc32h1WTmWG5yVUhFRfUHawvZrKPxepYPp5zn9dq6taoeZxFDjpgQACxtaZvyN9zvKkhFBNkXteQouS",
  "key24": "3mJX48wg7LvWScQZZ5XpCj2cg2n6D74uVLxaMmhGwLQGEwsM8JkVNkwCWQK135G9CzTJNWBKfxvvFTonESe35YqH",
  "key25": "4YEQEGvAY1stgQ5kCUkgjLuegX6FynTwtkBvoXkby8MRxNZUVng23zHeMrD62DCdU6K5UDn3A4d8KyoiaogLoSeH",
  "key26": "5SWX4ewVoYWBFSttuCsaNP9vCBqbLuUZYZ2hRj4n6p3f4hmhKnPwagmWEefqRanEfdL64A1m58ViugQEuvzb6Gz1",
  "key27": "3dQk2HrU4pYB22yRj8kEaMuXaGYSoi7MXKVsgvDWTe46uU7mLTLx9j1bqW396Fcv2VF7mysSN4Ys1PaGs9nhB6qr",
  "key28": "4pMgcdczk8W1knzjDNy9HroDLzxWzepCKWyx5dDc246M97HPWNcrPnk9p4WRpYGyKRKWoarBKxeiatbcXC2gCc55",
  "key29": "4NNTfnt2P8RuAby2zQYdqAUgbhJphok3XkqKDDfV2ir36iZYi2zpij3idPTxE1yegzpjJ2BhpiX6pfNDpKpejrih",
  "key30": "5pNfjUibxwKYmdbC2kwZwv93S1T2N7Hm4JxEJwGvM9Wf7MSsWttdBbmuGa6Bwigfd9pmfiQdUKZZWdFsbPQzu5Kw",
  "key31": "4NfKCaN6cGPzLXcQi7hS9iibaRLEWegjcaxbebMz6aiLaSaaH72dDBNBMcAh4YVdZQNiSoX5shvBRAbyv9XztV6J",
  "key32": "TAGuAPUVAZyDU2yo6JC9uzPSPmLrU7PawGuXr4FePn2BtoLJ8MfCxg3dTookyQZWCHg8Qb1jadmt2Zj2cG7CLaU",
  "key33": "d58bHiLb6gV3ZKCy2cqtQtcKJeKSD4AyAgZBTEhvYb4ZWep4Ge6D5b9deCzKZwecmtxpurpcEB7XDbfTE2MeeAZ",
  "key34": "5MkWSNzkUxS3dDjYU6Z2JPLnPMVRF9tYaDBC3n1NvwzmK4SN1b5iatEQmg5Vpq19YRbBAni8Jc4xXr9qxdsstJVD"
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
