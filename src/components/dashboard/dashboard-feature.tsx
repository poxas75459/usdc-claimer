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
    "45ybxgKTK9Xo9HDWHdn8qr1i9SNmWbbNQfkC1g2vmsL9xzUtwY8sUcnErxWpk5Uj3J9qYsdKWCevN63pDafxGQ4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eGzvfcM8Ho7asV79xsU6ZGNN5unQLyAyqxsPqCv3akaZfQXJmzsaiMxEfNLFdtKzZGMZcobDVuN86wE4YRVq4wz",
  "key1": "3DV69rmBqGLSBkSzvutM7QEyVn58cWcUAZRQWAS6s1nVYfq4ZvPbYFBc75jEQ1LKnhpzxEtbFTexamqrb4qo8hMn",
  "key2": "4ZepAiDQmGhaxtsauL6sNqnN9rEMiXn5ZB3SQ8h3eW7zjUEwkRqHCza6t4ozjq6kUHAvXW3qtQnknogXhBDZV3Ph",
  "key3": "4WyUahW5CJjuG1rZGe7hjBLiD9xg4f73aqFfjdnUV1hJ5qQmyxPgzZDT5JqCG8YnXBEfgW5Sgp3PLSjqEroys6w4",
  "key4": "5TrBYCHj7f7mrvNBtnurKAvuWVKVbuDcqE496Kbyjizmf34ftF6b6TkJZqkwtK45BqtrUkvt7XUtPCffVGRvjvN6",
  "key5": "5odrmSXqyTqUJAhGRKc3WkT2hA5sELogJCVVqPsQQjPemH8sh3zBw54h1RU8nr6EgpZweQcTp7BcoWQtq4FeznYk",
  "key6": "36vRAY7p8Dur3eDBRtKF2LPxDAwzMC8YejBwgGA6z7jFTYcDPiJCLaaRj9JWNx6ciKwkqyAc3BBhZSgmLZsHMzBy",
  "key7": "iqswpn5S2gkbkkDK1WPGmHoE7mL83JkoaD8xNVgbGUXnw8KU7ypeJ1D6H3zbJjtTAjt6obnNDPsecQk144gPN3g",
  "key8": "5MtiUhoqVb7ZhNYWXALfLNRieh9hb8AMYhQ6YqkhK6RVd5bCSoKGepUCugpDBUysvQZDVsUL9yhUqwTXBNMvktTB",
  "key9": "63vkJBXdNRQD2nYGjTkQ6b2xo2KzM3BpRzb2hh7TFGwgL2wcV8J9kpS9ym944QiPJnqPB6udKUqX2DprvwBDcjpt",
  "key10": "3Hon167VardmCVwjrYUvEQzbLATHCE5Df88FXH6rFT4rKHkzCsBqWeWM77Q6ReHdimZ2RdrDZTFy1f779kFVGvZe",
  "key11": "4MMtWjHQUWxDZVbq8kfhxw6Z6QaxHR7hhkcCJNPQrhUaesK8zsFG446NCpVxByMK1GDGN8As48tsZzSrjiu2s9JM",
  "key12": "2VF51bZ6ccTS5HP1zFPjUKR2gek3DKz4CFcAhd7d5esHzJ1kuVkqxK3RLVBydrXy3nhfzrprWRTGXLauNuRtEUEE",
  "key13": "26RiiUPmwYv4gCUJXRsjrNfPEEbM638eguaeVkM5HeSiRJLNbi21WskmmoV7oD7jNq74hh9CBfbw2p76xPu12rTz",
  "key14": "2RHu8LxspcW52KJbGYMHh94mKLkMmdoVvuNoXYjcwBykHLuEhDKp1oqpoz5QLLa2ydAFfjXXnJWs3k5rdcd5K1V1",
  "key15": "58wygWsGGEhhr77yQ7rL9yRodSbP5pXV9uMRhenedGgRpygYr1kz9n2Hvsax74HQZawrBfgoaJoHJN4wZjWVtf2o",
  "key16": "2XNvHhQUsWsKwBpcA1VYGqNAnx44GvWwAJo2RQQWJUxYzp3Zdjtf1sUrdaho1gUHTrwKEwdRTo3yuL6RaFndM9Js",
  "key17": "38C8mEHsaBwL7DvTcp6Rog92p3ayKxf9zygku3UQHzmSjWieK4uNq8vijM3U7Edr3S3NUUrf39jVDHG2kdmVKmSi",
  "key18": "4wRvJ53DwM52v93ZHVrbs4nVPqq2dQWroTtmPovPZmuGrqWmySpeRSSp8ZMwmdKzCV5uWhh7pVB3qWhLGB2avGoQ",
  "key19": "xrgoweLkeGrY4M7WUz3XPW6BSM9CPcSV94PbyEe7V2kLnxBiiYCn46NttrT6mmsjZHSv6o1V3DnyDfF4vRxbu9x",
  "key20": "5wesCN5vqJ2Vhyxm5ubvdDvG7rcezWCSbSzB53ffFd8TXQNfoMEYAWJCMZMaGwUsUQLpE9Ddh4yq9oGZGckxyYBD",
  "key21": "3a8HCTzN5oY6kebg7SzQPVQquD6vgsnn2TQtBNE63gp32Vvcj7khDykbxSuyRAYtvWxoX32EuCBR8oNZgj1L3toK",
  "key22": "4cfjmovUonchSbEmqo5kL4jN7gUPDSNtmRqPWmrZ44MmoKPHrEN1fhHM3yGAL6y2MCv7Pg5FWVsFYpwNs9oxZsgW",
  "key23": "67MYpKtdwDbt5D9TcYC7Y9VQ8DC9njPn9vMNmMCFjcYBu9hGP9pe8TavozyGmzYqGCSQe31VBmWvagsCgnvLMQei",
  "key24": "3s96AbFMPaSSKCkXURjDfquvuwPWHPG8dWcZ2HCf9bBDFdaoCHZRmnz8gu45p2i9rhuwXRuG8nj3LcD8XM4ZoHXJ",
  "key25": "621dAhNh6LkwZ2nqkxJvUZMNWJcGPfu9ejKDdVuPV6zTgZ1TiuGwv1fhaAGnL2srGhJ2Tcn1yqXzfMSCmxHwWcG3",
  "key26": "4Pk1725kH69AW69Kbbx6yren9pHb5D2ZX5kbbpdSWozo6Ctq2JDbnb1TVDrdojMd1vGEWc87Hqc62WK9P7xY7cep",
  "key27": "3yqyko9rccUK5fQWGH8tsEauNHxaeZRHBmXRLqkCsKtfaaYnn3qgz5ce1XuxT7yuC3Qngjf8DLcMPKyNftY3pKVy",
  "key28": "45XeAPiNmSdx2QdHXbJtHLnpZ1yhudohzAtC63vBvBRNUC5fd3NfXHvMfjMU3f5WRmVcs1au5KDsKy6jR6JnaNgf",
  "key29": "2pzYjFVPHmRHMxqJeGeYEYUS14tzyCKmgSSizDsz4QkRpvxna49R3DEN7u1vkGxdyMEtXnQyDPa79ZBWq9iUVfNk",
  "key30": "6FNvowNRcacoe6rdfypJb7YYTx6XL4QVReWkCVXkbYW67RuVUVYn4xAu3DtRTRPEhUh6WZkCS81Q1qywHWa4uh2",
  "key31": "2YdnYn163haeeRiFaUH11fXauHb7qRHJFzwc7JgCojHjCnGEqRCyd9SGSgrrZGtEqPsfr6AnZ7UU8GjJrtHh4pM8",
  "key32": "3B7sEAQBLmoDAeoWmzbWc56TWwa1FUw2ziX5jqZqcP4Jbjo9hD4CMnoH46ZDKXek9G2PGR6sdutNWiwvsb1tbqSR"
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
