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
    "2DNU5ez4gKhzv3wwBEEXBKb2S6z3ZQdnnNuwS4y64nHxd916ZxUW51tj37mfJMAtVUBjkN2BQ5MM4vnYJ4VBNrZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CfKswg4sMn1rwVoPiAwRapBPXGwNVSz3ujE3yX5VLaJ94tgwh2XsjXtMo1whN6BRPeY6fCG2r7ysZsBtE3UN5v1",
  "key1": "5gm4LAwcr45kbTNLtAND3oUSNEFEec4zVkeDhRD2xL8N1prbiKnCacJn4YZ82eCmovqDwomm2fMAzQQbqbnqYYpS",
  "key2": "5wUJqfPG3rMzNUs1groTxUeMoNepSCtfuxvnw1a5K8nnPcJDjuqueWFkg84gW6uZhy1otLuUKRkzUSThrcMySbd1",
  "key3": "3XJsyDnmnAXWs8grop3DY43sBetVvwg6rgcE32YRA3TUNwT5ysu1C94AzmgM1vs4GqoEqVMdgSJPVRyx9EagNahP",
  "key4": "3nwtRPWTk51BXanARVwRGBWZdnP1WxaxRpWpyzX18NBBJnZvUdK47HYPpFZhhYJSRDwFsmVNWQtjYKn1NPPdW7AA",
  "key5": "4EhENETJ4FBDHb7MQRFg5ERPXWAL9ErZ15Z5MZgdXufqWdps1oSV7YicEzzYt4rsqAHsU7yHoqmksiEqK6wRCGr4",
  "key6": "4akM4vE3sat7wAogQzSdP6uG55NcrN6yPnKhwCeN1qFRL2dAmJ8NR747cR2r3uYZMePBeCCmf6zaXv54vgheQ8FE",
  "key7": "5rpcizNQGZj1XBZyDrVNb7U3BXfDQaUorKR786TL1UUzsQzsUXFc3cTAYzdWa1K2xbrHdQos1hjLHDLuw1nAPSoV",
  "key8": "2C4xEUGJ9VXKCkB6X5hrwiGQE5wrqoqcr3x7W1W3QsWSvfSNyK6XBAF1fVEsKDcM3qUm5bYJ2ZrVh8ZC87as2MyQ",
  "key9": "3U1SrGqe3oeEqM6tJKKqAPAR19k8t6HFd5ggoe7NUDBsnx9jP98y7DXGh5Xw7rqNqYTEKbxgPNYmqAgXe1og3KbY",
  "key10": "4fXvMZhGRqh6EdeNWD4KY5Qakii4XcUWVp6wEGEMxSkkPSvLCQ2S7NxbuixZKZXscPTgYgZR2b3NWMh1h5U6GSgY",
  "key11": "5XRm388V7xWzmsYrKTLRrMDZMVeFiXM6is5fkmufd1LiHY92crfzHiyoSXB6vbky1yEaMaqEAJTjKR5Q9SKRMDAX",
  "key12": "jxVUoZYy8MZr5igMQRjZLfcwfND31t4XKPrqbp8GCCaK5xDdayg9MmvrNm57ufS1QjBqmg2XCpRt7Rcq2Lm9ok7",
  "key13": "54G5A8qFKodpYh16mmXKiu84PmJP8eEpVxjWEyKTPZFtaFYGJW5pJrUJV89v4GQowqLnQCX6ggcjVMJZ66Tu9L9J",
  "key14": "8fapdqz8rdzEnWD9iCc6M3vPjpr6qPx4LuqpjczRNk5FE7Nvd3sok1w8ubmPzkNwwXbqyKWipipgscfeYpmh7VL",
  "key15": "26iUyQrD7P3VJJU62WcEHtSzb3Ykhkh1wyFVt7HLZTMaWkcRiq9PiecacTk2fDJUNTcuMC4NA1JoguGeZbw5d412",
  "key16": "67LE9VSfSjn5DHxJB1aHMh19Lzx5Kr6GgAkVzM9orU8kERrKQnio5pSoqpnFZj1gmnCExYLvBo9riUgFNM8Jdsqo",
  "key17": "RaGH3LXLrjpyimkjZNmDZCvt6QXTKvQy5y59vuB9cqpTHVzKXR4ptd2PRmvVAMkbahHhaUB4ZxUibCLx8RHsN45",
  "key18": "2GNmbrWKg3ZsVQXaWnfjb3qPBCrJDurf42Z8MPKdE2NdQAtdSifPr8kk8NiqS5yxrbb7zxhyHF5xA9As6noRD1Xv",
  "key19": "3UBrUv2o1r8SSaRmQh8R3L4g26K3AKfBCuonHs4SBoUZZvkNDK3Pg3GqprR2UQAfAWW8eRg2LEhJxd3T6SPRADhA",
  "key20": "GW8uKV62LU3gETynzFbqiZET395hN6PB6LxFdqPgK2AessrAoTemB6fzoMrbFv4ACCkY1Kc7rNnvNknd2Hn9WzG",
  "key21": "28XsTDUHDxyLGWHiAtHHx2oPfN5DAoJ2BZVb5AzWoEDHT3nEVbZRpTQhE3b57PKkrmUnXVDYSanXeERMcKJjvWWw",
  "key22": "4AXEetpTsF8idVARawoorsNkzYnwRgBeariMsFqK6mNfjDNtDwus7DUeurhEiqU4r3ZXYz8hidL8EQ5zNDi1f9Hk",
  "key23": "5bjikyGh5jmjhwCfwGxueUYFPbnXEuQbKkcX6uZWNnfegnDyrGGFzDaYGhD7jNi5JmKFkZpy7kGVBmGiJfA5h47z",
  "key24": "4SHShDV3SzdxWNPNSzayTwD89u8fn6E7BJxjpaG3LHbKVvojPxSZgXLgrB4uv5honZqoC8HSLAGbgHS69Ec3Kzrf",
  "key25": "BJHWJ6vDhyZRF9LoaU4VBJREYWhHC4aEojmy1knZKmK6KAYv4Fph64nqxNDm4XEabuHfMqjSyqRRyYB8j44GV3G",
  "key26": "2CBm8uUgYXzHbr6BMiFYrkYBMsVu8zVQVVvFwFsEyJyhcuSnHAMLo9xd2Vrr3Qi1ffj51GQ6GjUbs5iEapAYpeY9",
  "key27": "vpYwatU18tnzbu4R3bsWLYks1juJeLWTMyYDy49PuAHgwEfETS9mv2UNEYHqtoV83PMbqpBHJWV3y9CxeqhH7a1",
  "key28": "3roNJAcEVzAadcNPVrAXauJGRSFiud6uLYXLijtTjFh1kdFmoSTURqYZQvgxdj6FVFSMGUsNZU6NDTZfb1GFUohZ",
  "key29": "24A35MeGW1jotQYAVF8uuhJVv153d31rEb2FFFwExNieyroEN6xokMBjMQ4enTFavG5jJcdhhSBsE4bxTP6gpjoa",
  "key30": "29gVAMmSMXVCYh3DbwKsxW2Z2tfbpVxwCYhhPE5CRn3pUkPmdeLfUoPWWm4AaX3TSFX7oLKiRqbsvjDfrDojRNQ9",
  "key31": "7HQEmiUVzLUox9thheNGMA8xg9i6KMNhDQCv7NcAbExYXEPnTvzjsiFf2j5AyJpsN9NAJiWSt3BFJ3b4Tn1fvVD",
  "key32": "3vdmW6hDPszL72dT85SnE4iN91atU6BXCQYrsZE8QUyQdtA2JLRZ2Kf8NbcZysEo7XMCNohtXEXfxPMQWfb9S7yw",
  "key33": "4qFKPVuY4jLQwWd4tiwW4JRHC2VsrrjtoTFckTYyccypzAxkmgVLV6pMR2NofmWxdwppCYgWwRoPfQSS4pLRaLHK",
  "key34": "67YTQJGmJhdwj1RUCGfdMGFrKX4UBoyF3mp6mSSxDJXffHmHKMCFQ7apudqRLeWv49zSLA2hC4tGjcQHYjer5BLy"
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
