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
    "377Wc4dPDZAUVkShHwEY3b8F6Rarj29BLTNwr56ckzHarDGLVwfwASboMq76oDCWnGG9JjnisTaB3d24CgXE3GcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AN7yk1xBjMx5DJjSqwDvbD9p8JCWCXkA6wQ5w669J8sYmy5BuCEEMM2FTkoGB6jpze4vjqK9bXPVm5A3ekQ6qVr",
  "key1": "2CLxYKS1QmyusCLjdtypSaQhTcJaUsRJJZSc3sAoLq1vbERRiZ6RByy9suDdkWR8MLG15UchvYD1BG1WG5ryC8zZ",
  "key2": "58AqHyKM9EsnTv55M77AWn6MHPgnkW4xsgSioZotJczW3dRmpownnFVYcxMxpJwhdgnCzuJydamKPwnre46BJWAY",
  "key3": "4uoLrKJDV1aFZHcrPV8sPeKFY2bnNodcuPGsVV7H5k9mTEfxqqG1QGUmGVS5TrWEMWanCevUoXetgopxvoQ2xuB",
  "key4": "3YxC97EkE1ox7PvXMpo4g4R2iUB75RSyWmGpKzuX8tsyXX2Mzrbxm2a8be2Shi4GmxmKcR6rstK66asc15vznpeh",
  "key5": "3YDHQt3xtg6X8pswnCR7stPygCUjQnMjtAraBMC9VMZCt6JCESMJUR7WWn7sX4fzPanmDcGsuxBqsFuLNtjruLxZ",
  "key6": "3RnN8Ex4VsbbYjo4L2duy57D1FfHQzCag9e1KBKX5kHx4Ust8dH9tVUXvM11ZtP5y1vXWj7QSTYJuQ5MQfsr2dGj",
  "key7": "rr63QYsGXNTkGtwi48vV34eEzt7ttCoRoL8UsSTknCP7SvRMGwMbyiewXUR4LARK8satFBq4aVaFuYC1aYv3x7w",
  "key8": "654yxCuGtYJa1wiajhJef2ugcnV8PZCzNC4fPe4RjYWwfCsjo4W76D3HXi9NZcwHykMkmDJirYBJLyRHYH6QqvzT",
  "key9": "3BKrxmfbU1Bkvmeg29DEFuuxo5FSUGw5wj4SWRKcgXcUM1tYVCs6vjUNrnB6fNgq1w7P7rS68MHQUxzkENvT33kd",
  "key10": "3gFSqJz9Hrjtg19YDh22y7AaVaU3NwgVdWpPr9aHk7c7X8scoX5LvdTLaaAG5m8EXwuCce4jK9EFtE3Unq9fQzFD",
  "key11": "5uEwwQwQR58Y87ZGvKRA6oTA7RG32LLg8mFtNJVEZ1GLTPCtazaeRK9pATSCmYbxaMhsXofmEuAstmYcy36Dw3XC",
  "key12": "CRfcSXUtbZtNa2cDkY6z2LfLFkHHqhQXJaCsZ4F6y2FERR93hgiKnQGEPBjUeNrfeiNwsfXCdYoN6khKatzK52A",
  "key13": "3We2aFJRNtrsRs3gpk4BMCwVesDWwPX3sRBzBGyY8GSDWpPHLgDyiUtWaqiKdiaZVU2LEU3jejrigxQEk1LvarF8",
  "key14": "3bErc7GV6veqQ4kPEGuNGcbfNQczfpdBavAkSaQoM3LqeV7RzdkkhL8QH8wQHm5WR7RMN4zkUGmnVphdhGAAeZDL",
  "key15": "FMsSZj1iQdRAnesrHjeeYuM4D4CvVY93VoTggfYDRUxrwTfLPa2FDPU3bBzZ2cFzLxy4bKTZbHRjHFmVq86whuY",
  "key16": "4DCmHkhkirGETQqWZqmHzRS2mFKoCKLiQKxaQGfXdBjnuqMVVqcKsngGwbZEqiYBGYes2ZUMMAqbWyC4j2HKhD9N",
  "key17": "57CwNp7MB4T37SjH6kPxdbuM8PJ3w3AGNDNiFp7FFMD1jgdtt5huuQAVWeUzWxXgrG5fpdzLvo1VXkRZgX22PuMT",
  "key18": "zjumbPSZahtw7XNPjsFiw2NWMbSVZaeiPs5CwJ5a8oagyWtR6ErYPDucGbXwEYRRfTaeacebMozAReG2WRebtFW",
  "key19": "52WCfcTzrgshBgujJBr2uxtGx2pXSuN7yC19iD5cBmEZG6rrm3veMQEXWjDmmsqCUhZZxXd3VNNTajPagq4GqMTU",
  "key20": "3TJGVCK3JurJFVbNJXmHSeup5iaNk5eNFSUpnVQSUF9CAEGgJpeREjMmEAkojBu8QHmioZoE1GVpictFiXGFEg1G",
  "key21": "4acA9SvtQNr9uTdDt8mT8Lg9itv3mwwzsxRXB35js4D8Z9aZtsKbpj9F9CfRns2sLhyJY2QkqNUdz1XAX9tcg5aD",
  "key22": "2HpWnasf4mVStTbS6cn1LZnP2uqJQnSTC944Uf9jwqAKUTr5VixZSbYgW2fqzT1GkTine24G4osQaQFM8YwUwBnZ",
  "key23": "3Rs55FbDVXcM9tqf1465TCRyHAcrDAWLSZ5vs8XZuiDr9e8oXxw8waDERC7PAkEt499gBAUjL7TgTaQfqjXarnhN",
  "key24": "dkFY12wjQTmsmzMxYpxT4xa5d3R47y3an552FxPnHk4jm6pq5nbGaFRt6WmBkVcJMvwvQDoy7gQ6tzhHa2jkoHV"
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
