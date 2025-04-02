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
    "8ijK1FWkm79F7GGkVR89WbPYdruHPVjzwX8ExoaGDkK4iGNVpwhYjofMFKZL3kePZcokpgvXvWDiLyKnr9HCf5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HrNnVHuqybE62FkY5cHArLonT6ARLgwLeauWBhJbhxF9BF5gfnV9Xg4dsEqW7LUrDFY2rQypcqVH9xFKiPLjNzr",
  "key1": "2Mb9c4hk8Tb7iveCUDgCmQqBovJTkBRVNjdyz79fvTX72fcZ7WJbY4bedYHUuxKPWJughJqzLaxnvYcpRbFbXrna",
  "key2": "579hpn5Ub5okswwtYDBTLUZTwFpdnqEyopKhAYfpJ4YVDwZUpBDSH5WXv3dBa6WE7oD8cBVMsRaq7FNsG2CYXuH4",
  "key3": "35Sp9vi4tKJsJ9hth6WNU2rWZDQGeFYf1g2Y1RdPf2p2CPhr793nhaMfdkH55ABRot7o1pFDX4qHv6hwct1qPoB6",
  "key4": "4gUd7Ev71fmztcgPY2ZNjPzZWWWTuG1JXN323Cpz7K9WvQa4JvMBJKLf4G8psBNJn9cWf6iLV3NxWxUbWZp92j8D",
  "key5": "Ya6L5p39hWAns4TGHzWtrHJrvBGFXqtCYB9zwZta2VzHqScCN4hjXAowRy4wxUsvEsVb8WA4yQUgnZd9GFPPbTW",
  "key6": "5Cz5hRBKoR2Djj9QScCVUEuP3sVknug9CS7cpKkyxfWYGdhV1brnLdVUJfVasXAUFaFNoZZBt7DtaNyjXNwt3jtE",
  "key7": "33GGK1dmgWMfiYhsDdirwsAin4Fg21D7g8kXW6ipVm88P1x17U3sdYfhSHGAkXR6QapNjsdFDcchxuKoHC2XoLxg",
  "key8": "oo2BqC74qR1RV4AyRa8Kic5jVCDKSGEj6vnZVnGQRaxJ89B1aUndfschWDgevFKuhvX13ccamm8gjSsXBoZf1UE",
  "key9": "7jyscHW8eL3XfaWKSZUm4BUZAzZHikY8sVvHe6a9bxwMHUiPuw84Gz77TsamxTiQ1pWJRWy9UEzXhTeM3yeyaXg",
  "key10": "3jinH8RrYj9wzvMD8ZDn5KWzg52KyFXsjABoToCmuieYTKDHG5XyDp4VSg99MAwY9GevdiAqjUws2EGT14ZGU3W1",
  "key11": "2SVzH1D5FtF6pPEdTg8wQdPPEHfQTmdDLEiGi5daiEp7VemunauVzXdpfRmJK286ZZGQihSWBLmYYC46UazcYPRD",
  "key12": "2k66QvHXXEV6NVt9gPhD3YNrYPihRdimhxeinPyRdGBnN9ey1iFtCfN11Vbd8jmfrTvJWjhowvCcZeaSaGjXZYbK",
  "key13": "3BmsZXBs7nhWdEyX69efZxzN3B6Zmnx6JEDNwgU7yCpszstsBRBNboSfHpJX7N1AV7vJF2c8UNLctxiyJHTNDZVW",
  "key14": "nHDwaZ7piqbNjsoNBbzwxZoCbifunG4N94xMegiprL4ChRQ1ZLdq6d8iJnt6djf3UNtgYCczSCzC1wbaWtHeHPA",
  "key15": "5BJLPCpXMcytWm5aUe1Gdg9Hvw1V1oKZcnn7xiNqGpUnWdA3KwKhiLzPL6tpfrpwJfVBYoTa3fG13XBtzsi5AyUQ",
  "key16": "4qCj1io7MraPfAKGo4a4yqwz3q2FDjsCQficdMMiSd3bM7imy9faRNM6XrcGeRWiLZnQrUSiMgiU5wcwJsvqjn1S",
  "key17": "xKHnwd9XZkEAyVTofugThA14PcG9efuVsAud8yuyhPhxY5jTTKnZWGHyYWuDdfkX9a187ffLjc426jZF1LXqNLN",
  "key18": "24QKHKYaRPdS7vLc8igJhVSDNpi2B2Vh2FstM7WectwLRWUXoA4GUtMhhM1BCCF2G7qybyAa7bP1HuCapM3dXsVK",
  "key19": "4uBeKiby3CY5HfHsGLhm12MuG9D8C6Js546mWvwPKwMg1J5qepzNXNC6R3FMTN25SkYEGUEb5Qt1SfVuqAevWN1J",
  "key20": "yF5NK3vxyUETKqx43R2wDhT9cT7a99ba2a9NaDtmAMd6Xz7189gcos5a7dP3cpFtkiYoyC31rj1Ykat9884HMUc",
  "key21": "52Js6SifdxmTkR2BRVWbVBBfdhgo5r13d7tJySSoWJswFXepcx1bSKEfcgeFgZfKkLcEwM3HZLpeYkQUKUTZNwiU",
  "key22": "3TMxRT3Ge1bAFkj4B1diJhzjuRTjDwHGeYPW6o5eBGNHwC51hr1Lz5v9pdbATqc5X59vRQz4F7ac8UJrfBR61S2C",
  "key23": "3Wgh3UeV7CZM6PLNwJNezuRfChwJRGJy3qCPDRocgFx8Qc2dEhcw7wpdJZVZRgMpGjvbDqArT3j6UearmjMSxeqy",
  "key24": "4tii4YhQPDkY8mVqhj1LFddE9XmvaY6fTcVMbUv5qcMiummrHi2eEFXWug74zN8FJGkSiEDTJ7NowCCnH58Ctpyq",
  "key25": "5qG1ccmZdvmJYijJVFme3mn2yyGWaN61Nwmvyw4rwFRf85AXVf8rL45971nbgP5orujBZJdr7tqNs9xEkJ3m7uR2",
  "key26": "2572Y535DLWSoESujUy24KDgHhThzkzpGyvCPJLTANPJVCgC8tunfGv1KS3PmR9u9UQhJyuFMyXSNAMth1A6jzg7",
  "key27": "5zn2E7XvJ7ifEiVB8fZ6L1xYiW9E9KfUvgkCej19bPtz5yeToPdPccrvU9TtKngaewtZeri8gWGsNckCkcY2xnW2",
  "key28": "66tbzpyEb7q6euNuU7XS918S4EikgqEFvTTU7Ch9JWFqn2GXMnVT4ikZnQ3n6NhuR3RKB8w1LFHALgMjuZz3ngXz",
  "key29": "3n4j8ZseS1XhVYdTaddkhnRkjDnHCt2BPxPTuM3bxCZdemnzBcBQtUwKGKjpBBXNeHuepnSNZSxnGH1rmKJpuWgU",
  "key30": "wzDnNFpjUHBkTGjYruQxTpN4xzFs9kMVuZpiDjspFS8rsUe4Z22g4ErgMxoFYjhV6AsXijLRdySPFhqyd5NpdBH",
  "key31": "3QoV59f1286ogXWUf4aquYxREeLjqxFzGrv8RBkmDbq2M4TsPdwBah1SjqRqWTzybqw9TFsF13RpxkSoxxF4QdpG",
  "key32": "341H7muUYDAJjaRW3txEfLn5k6q5UwVVTjLBnwZqW33SjgVHcQSTorcxeYEcMs5PmRWAYV1yqnd8n6reoWTHTyzj",
  "key33": "5upmtsSRJRskvWJnzvCpFZUfMfiSgWAW3qbqx2DnXVe3fufMuAhkF1JwXnzYr2mmdtN4WwevvXYdWdU9WsL6bCnL",
  "key34": "3evm21GkPoEFn1zo3go91yHn8Xivhcasjk9AAAnLDCmXoKp9ece7xtQGsK5uWhBjAX3ejuxSd78X6Xz3MutM8BNj",
  "key35": "4Fh8ZLRskQbD2i24VCooiXpapMo7U42YsSnH9CH8gdANm8ipCwBXwCfPyeHtX3bLs7Tygr9r2D6Z2kyjZgcAEr79",
  "key36": "UXm1eeENd2hf85nJnD76VhXMUoFfu9EvqJaNoNEQWv4G7wcmN981QWEDGzBLFZTUS4HTpye1UL3rM3mcA8fHzVb",
  "key37": "2AjpYqyQov6deXuZtC6BYaemTJ58bC7ZyJ8qG8uxc5uTMzbfQwFP8jpYJKTJwLZz4PPjMqi9JT5qyz8hCT4MczSh",
  "key38": "3f6ooX6VsUhidY67EPYHgaohihLsGGW6iQELnQcAfWN6pWDt7DKPRPtRSeQDbSSPQUKZ1r5XbXWsThVME7dgvK2N",
  "key39": "3PPnPGCNrBoDYAAAx9quwSDFM5xfqPTzTen11jsrJ2sQAWTwupWZHJKmkhSYjuPxyC1GfoKKXyS28vUkmdQEKseV",
  "key40": "3UcLCtTEE1aWZbxKN8MCoMRNdrXuExdLVbUuCipHAAidA3hCvCX566BhbpkckyazesF51b85WfpXrQ27FGT7opm3",
  "key41": "49xRm7Q9Giwjhk6MeuXAzYQ4jUNTThxt3mZtt43R6rYTpSr2ZRjRwW4zwYNjkwDPgYHfH4zY9z1GLy2dbQsYiNhS",
  "key42": "388hMzHwvGUwT83uHMARQaHvdcguBhPFethTZQ3qUtV9dG91mHzfM82mj3sDLTQ4AnNgQN23omMFq4X2fuTfzSKF",
  "key43": "5iS5pJuSvBYRtt41gZvCRaxzNPCEM77U9KRznkWpckX5UyvG3ZwT6r6yKNWJkPpPuoUF2aRxZwNMi4nsF1gqvQ3g",
  "key44": "36BbkDJa7qxAQNoi5PGVrnxP9346fkUvkbKdrQXD86WGL5cFPdPX9XUuatNrEF13GG9UR1KmNtm7t22bS2G3n2Hh",
  "key45": "46fKbyvEhkn8RniuBbbGCaJdAhMeKWF1dX3YzABFkz9dxpDk8dzsQKvuktdfcTrQRWsZsw6Vt8LTHxqegMx21F7B",
  "key46": "45Zr44hQTLmgsQ5agu9WKmXhpifrPCdkneQiizsXPsWd8KQgobjUdSrbhkAUkiXoUJTJ6Eoq7N8PJJK2fubsajVb",
  "key47": "dhdbBJfwmJTsZjUTCrDYM85FkCqpuKTvwL8KqxYMdGvzwz7xN9wJXfru7nRDEFDaJg9FwrSFu2dHJ7JWbj9mqAw"
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
