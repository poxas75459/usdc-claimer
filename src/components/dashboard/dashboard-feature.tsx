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
    "5iNbwqLNPbFF22AVh9X1Ai44qtLZbRU93FtQEKuHUFMxpiG9JRyDNvpxfdSVankM5PTuqZkd5BidvcPVp3eFQK8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yHcZGqh3Jq3TXo2fYYu8gQNrr5cEd52pSrf3ie8Q9XRs6HqEos39s3gDtS1FoAahDkwVooXsNzFr6iypjQ5iDJC",
  "key1": "5XCvvwwDKZrQKyiTFMhWJybqnSr7HkHnfMdeFSo87PxoBZfwpu2zoVL1Jcy7GwRuCoqkJ7SSZM9T5nYFb6ARk2qB",
  "key2": "5nZGXJtBPrhSnX1vbezcqNvgL9Mc2xnRmKSnYJkdmziQJwwWFvYb2MC9J8w5aUtDQpR7vUFE5zX4oTc4P3j6rXym",
  "key3": "3fGFyesGLMPukyYpWz7G6MeH8xc4ujyi4JPPnz4qjQ4GbU8Hzja2RSPBiuTxtrH6nwB3DRRYnutXdrvRoiDvPKxD",
  "key4": "9TtFcCS9FceERHZUEaN1dQgrnfYTw49nx3J1CPx2y4Vew9iCgTmEVBNdkfmv29NcKCguXZHUmQwijHhWqLjaXvc",
  "key5": "2TD2Lk1doNfKbF4zwxuijmhapcXd9noEBBAqgLsUNwnnEuQdvnxEsRq5zFZBV1unYbqQSVKW2736McQ1pSmChr9s",
  "key6": "5U6ek13ttJrGiWjrPvmXFEC3w12aWfx6vWiYwiq69kytQaS7njW51XbtC4Hm2fmyH3XUhezWjZvEL4saMbB9nfUb",
  "key7": "3DmpeucbpgBHUs6rXo5oCLjYYcgy8jvzFM595GiNqpSDjygtXtUDrxpuU3hjvnjjUCKcH3FfkYnjW5Vwz3g2yFpm",
  "key8": "2NZAZmba7FL72JogrYjdq6gKXau8E2GPy5qxzzKTdFNxQvHFFVjPMace54zhVFms8Du2Wsr3YrN65pQWVfFTL4c6",
  "key9": "2JVhKR3sftze9oWJVYtQbDGf1JWX5DCaGQjmGPugkNbKWkkbv53UJ3qrCGECjRBbY1Gjf4sRmSQgsHfBrR49RE2R",
  "key10": "5LAaMoxRFAHEJmHewPrzYkBosDFydAAJsRxdMHxBiFGpDEBdjnD9ytqSW5cjwd9bC4B7AEpUJUHqAX5GR8ifLKak",
  "key11": "5EdB5NbqoaKFJqEar9y9F1Xfrhtw3kEkBH9N5dQDvaDr7oXYhBvntB43TopVFbYPW8HMBu1Mw4WPXFEgevSsNdjU",
  "key12": "656UXiFiAet8aN9sBDc62uEjLZNe2UFkWN1S8QgPvKwHHUyHPz7xEkEDdpQfz1a2buP8n6vpbinwp43DsUeKeKE3",
  "key13": "49VQpA1zmcJbTxY3RF63YBQzq79gjrqe7xx2FMxtnc5iTeKCoF5dqSH2ca6EW52md7VpRSWG7nqh8fjkHGG4psto",
  "key14": "2qtF8aqYkss31sYGP9y1uqZ4qknARqYaoPzXSUPBfVm4DTmjuR4foqrbFTLta9LNsQUgbWYT57T6P3ZaFxDFMUut",
  "key15": "5gNAhBRHmyYbHGPKHNMCH813Z8JcJjfucZshGBsa1PMRY2yGEt6JtKUKaGSh61nYycseVtdL1PnvK7szqogf94LM",
  "key16": "2uTP6LkbDawHJ7R1zYV4MavVtibRPSeS1KoJhgoLaYKD4AJ6iTWmXKu6aun1tJWCwonU2CKgApLqQvqCckvrzWPk",
  "key17": "s2Svk7jQek4f1xFTJqVPspnPmJor9EkZfv7zMnaVyBsEqUmv4o6vSS3NwYRAG9EGizdfxY3jUCMSEu75ay6LH9D",
  "key18": "5PvgSRTvggGmHxdxd9UUsSy74YAmcz8AyzKpxXnJXG2MrsHoeggAYbfHB36WdwXemTi1TaXz1yz7F3PF5WpbLsR",
  "key19": "5FotJNnaz5ZgbY7Pq5haB9wGX3ug3uuBSR5bn4qMRVe7arYD79gCq3cFh4z8z3aYYWkAa4qxQQzYGJxLmzLxL3Y5",
  "key20": "4xtbdqnp2sufmGM3DpCszcJsR3Nw8zPZv998NpWKCe7UdLW2bJX9UXLnpdPGPvqP2X1WRMFUNaJgsvryGMiAmjD",
  "key21": "3tsEvX3pZTeVWZyDc9QCTxSXtRBBXqtH1FhdqezSRktKJgJY8ZfvZ4XoxBjrin1bnSAqa42m1jRvz7f79Y6jptMf",
  "key22": "67mE7TninhoAFuyvr5dyAKn4eXXa1fKiRAyYCes8n7ATwmeWgPU29f4kVGsCWwqPncTs6WkEjcKZaKtpfBWkcN9K",
  "key23": "4GHQTHY7vB9UkpzBsBZg75ikA3yhiRzrKbj4gMeiLRLdcWtnLroveJLdLYaN4bomRL8SwW66QToVgG6PxmUjcUdn",
  "key24": "4gAGTcicoYCBjmD2nzawjJ3j3QJyyCimVwoSfRWz7bAfYpxoStekJyVe8YRad4A56Z4Hh8pfbYGhtw9b8W214AGD",
  "key25": "oj5F9b3Yabif7JR1vabxbDvesgqwxBX3fqzPvqZshRtrJbTdUXvywU7NMitkhC3RDs1cxyYry78PCQgjAdGicWK",
  "key26": "2gaBNM7pybttFAoeva5kaKQRuEJuB1K7dq6CykDg6EGhHfnmUHYw4WpSZt7LYWU9PbdbzdGsp3ir4gU9Rmud7c6g",
  "key27": "3j6dr4BczG8YPLLGSVDycm25NiW1aaSnonQbThq51AW3C4pVoveKN8P36bD1tG8cnfcm1zqvcDYbFB5haarn74cJ",
  "key28": "5xdvbTQk5VbyMxDgZkdxXsCB15aNu1KVi4QJnY6T2MonhNHqBUZSrTiTbtjZxkDMS1to5WenybEVdm7KdQSZHhxp",
  "key29": "4TRph5mAZidDF9ocgt6CztJdxPRwa4eS3adcBZsjrHBVoKuGcR2VzuKxU3g4g9h3fYpkwnYKGAky7h9vozmdfXf4",
  "key30": "3yxBoBkPMANgeEGvSyRjofa4TEvKPo2Gb374T3iZ495yLxfKcd1rnXont9RMG6Zk9vtMSEbs5cqcXFEtoxKJUBar",
  "key31": "4s2MA4S4tK9WmQodXCYDPtwXnF2wr8zgsNsT5pqXGyM7rEkADkRknWM9rQ7ozru3Tjm7mMvS9Lw4JxGUYj7GFLv",
  "key32": "3cwchqvQcNEH6GRBrSyPd1f1w4R6dALakdYEG78A3ty59EGu9JYeJMUxUtmeuXnA92VvgZzBbnhZW4w8fz4c2QxT",
  "key33": "5ZF3t5rdm3kp81JCY2g3ufbpCeQXP1RZAthR9yPRhEdHxCHhbzfoRdJ59qeaTraBA3fZK1NuDSK2N9YVaYTTGiuG",
  "key34": "66CsR3X2TWFxxtjEBDmaGvfeAb7xz9WFnSFZsZMyV7QopuViV1qKRJmZYHq1WWA4jsoKRD5kZM9xQ1iBFeVwmDD2",
  "key35": "RzA9e1aj75zY6zBfZcDZqytCGFocHLs7bgSMocM132p2LeMDPxw86oDjy3MSUT2kKjGgEWvBUJmGRLrTG6byETi",
  "key36": "5bZiGpg9wGXjX12yDXFCtTi3Hsxu8SFUiEGkgf9v4G116uWZfhzf2u4pWs69zsheeqEqKhBZ8TakBxD9uVCVU4a8",
  "key37": "5CLB8fKTukJh8WiEoYUoWjez7DikdagbjrqW7ecei7Cnq53mTmgvGXn1zAD3KGW8wDfZRAQmwZEj8DYBXea3A5Na",
  "key38": "4EVFmAHuWaswnWBPJ7EKuXaGkXVTzNiUabcPjRed1je1p9Jp7qC2oSTDV1Vu16EwcBWYktoMh8VX3U53CaKEyawF",
  "key39": "2uEaKqUspzf51bdT5qcQzMMYP85UMjYQjiQBMQK6HnF8dUCeqALLrtMa1gBnQNvL7oDsQzgfXqRTf1qfzURxTS2J",
  "key40": "EYmR6QduLfTs9FN3J63rVD4mPgFRV3F8a3BmsCy3MLsppDpNfr2Nn1ANS3pqF9hje135oxtUxpbmMxvX6KkuXe3",
  "key41": "26v4bN1cKTiSBvPPwcwNoKjQgw9mpQpPZyHPhKcK69EwCjXxopr1JgmZzhdBvmyUmptDwLkuWEQDrmRWVQYSmsXM",
  "key42": "675ddAYEHwSqpugPktgdxbfpdGsdLNuHoC7wsGgNA2B6KfpY9Eq4B52GGMQkSLj8nMQJLHrnxR5bNeuZ5NHWHU4P",
  "key43": "2nGes28EQUwnRXmPXjgDcwUGxsb7yp5j4Vo3YWuex5wKRT9JYqZMWsbbc5qXEmv5nYAk1svtD7E237NHrC4fF4AH",
  "key44": "4aKvctcnTbxDruDv8WbXwrY9vog7dAA9qoL9yJ4an9tGj1jsZPaE2jCorfPEGKzGu74CkM4gMeYVgtTJCZjM5ia6",
  "key45": "4RnXYnpiHNknCm1tFfkM3VM1ZK1i5m9T8oZwVvN74RWeR5tVPGXvcNRPp8Px7sWLJ4JvTCjtGAF1ut2un6erf4Gr"
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
