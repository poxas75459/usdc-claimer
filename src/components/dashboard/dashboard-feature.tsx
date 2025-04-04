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
    "5iB2WHWE3FDGx45AMb9cmjUXEEeQQ5EugKVrhbtVcFAu2bnALxsAzrW6pactzTatXfrmWE3cHbij6ZNL8XeNmU3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NpG8VpZeDbUx2fEi6qwba9uXmQnHcLvbj63GYW44teP8apiXKA2Kj6cVtAMJwv1fLsrYKixuTQf8MKW9rdDkoXm",
  "key1": "3JukSJbJYpaeZDsdq4yaxxrMbzzesu9pFk8BJMmtkmEbEKLkK818k7s4gGHCety3qu6C2S9pbS3yb5zZvcTMr1Us",
  "key2": "63Pz3Hr4uffjM6KRRaVtvhK3yBijkFpTayxDu1gpqjDyUSATu5GCNLDMdCSmJFBcQnBjfhA1KUVoHTpPwS7NSnL2",
  "key3": "3SToY5yYmiejV4hFzzCeekJdPjQBTe29yL75nRs8iWMgxwAMGRf6pLS7W5PdLQ5GMdsg24sFJinpNLGHPZMRTftC",
  "key4": "19so7KtfVVsyuMrsZeETV86soj7MnmKJCV3XjBzP8EamVQpq9J1LYkPbTNanUN61Li9NWqXYe7sakjRkkEe7W4n",
  "key5": "3u6R671bwicfVWMUYSbrwy1kcPtbb8osKaNcWsXtAfnbiLE85W8KEz2byF4zEeQQf9rLLDHfAHcNEpCW3EGk4TUE",
  "key6": "4UsnGWkLZm1KgMhyPKftfHhobMz2RxGSnSPLgkAYzxWZVxs4gQGBYXeJPZqVEuUWKRzKdCKcuJDiXifrY5GSxm6X",
  "key7": "2zwvwuRhdus1HvQuAtqL2joBzcdKoqjQfFVjqjyPrVEZozjJVH1AC5zU1JDqMNq5pEzpTxZpaowF7gBS26Y4DwEx",
  "key8": "3fAK4ug3tv8FGAHLxTgzZAv8tU8EcTc41dGoh4Nes5k51K1bJqhPrToiYMd5Ye8CiBw7AnuobZfBtzrV9dPdpVpx",
  "key9": "5K77B33wf9g4pHpwm23z7V5gHDVKghniTLVaRXDT6YMdW5NpJtQTUyzDHAYEKBwK4QRiuVHWX7CREXexmXj9FEHj",
  "key10": "2RWRgJ4GL3M1vAz8xxQPixwUE1KsKPrxbBz6zXgDhW25cmKCDSMxYZZzSKnKCHBVQvVynHaVGMVaX7BpueoTS1aF",
  "key11": "4DPFHMM1Y8aFHNFzNn38z2qzyMtVp9oRS48wTBrhvJ6Xh7wkpREoyYaeit9DMhzfMZD4cvajKfqASVnVsNTHxyHT",
  "key12": "3nYZXjwzuUmJYpbeB93YbSq9QAQJ2QuPjbYKjdxvugW94k9tUZ2xjPWxF2pFPdDdVnq8HMb5Qq6MBDufpjVsPSDw",
  "key13": "3nBhqD8ysH887x6UD4VSHWThPUY98qqfgR1j1D4NwJXmed3k6J62Pi4vHggYLZZkWAZ6kFmwizToVCTVbYmeEjm9",
  "key14": "4v5qQ9aCVHpHQ4WQx1BGfVwNEaJ5wGe9Tv6JTVwCyRx3xgnV2ecEVRz9T9WbUri4o4Fpqa6DhBephXNhb1Puynyj",
  "key15": "3gE4MjKEjp8bSf9tGyxgCevgLkEM1RtjAQreNQ28M9FAKYho6WQtmA82A5TEwaA8qXwiL2CMxA3zV7af9Ln1aiRs",
  "key16": "5QVN175Vz73CfzCaDrsasHERGve4tnssL11a2qyobtMsCSCYjrSCvD5tU5tVZvNEtGxsFZwrFSTpAy8DF7ZSyVuK",
  "key17": "3UkE3RjAeKqWKNWTwNkmF2M2kzeU52BkPmFmHLXW27uvyF5nE5S91PyE5V9V9QXwMH6t3HvgLcFaEr51awhxqG1p",
  "key18": "3Uht4FWvjr2c93hfgphZ3U2MuEArSFdr97SjYVaP2LiYbSUDeSZfYLbwKFbmMuPQeGp6axh9kMmRema2eUHgfzbK",
  "key19": "5HCahbLAFw3T8uz3DpyyEkSmYE2nevaaz3sWTrBr1bX8yw3YTwkwttbCsuWu2gwwwW9HkyXXcCkNeoXHiB3Ud9Ri",
  "key20": "NMSBxYiVqiyziZwvRAEbD2PaHB1cbDtxK9YQzmhmh7ah9uNk8wpcY1n9WtdoP2UQYt3K6rbC8wBrgWEQAG4KBr9",
  "key21": "25wTU3kPiu3LWV5CUW7A9UEstHY77NLcfwmRPFC6WZmkqRVzVDLQTzMWeP3LMtRAB5B3nGnwcrMgNc1MWL3PToHC",
  "key22": "46g6pZbZxF8LzUR4bGa5AJDDMLCv2zvpQBo4ShWCBkPiDUPuUVFGhbNNmUmr7DjEFEnS5naRKvEX9kx7yLXjPhQq",
  "key23": "2QuVfoe2WCKGbRqiTadkeixfdmWN1kuejLS6aHYC1rEDKgUYczrybsbdX29wikfkcqZTxMaaQZof7n4sXZcB7if5",
  "key24": "3X5w9bw4STjGJmcsTt4mvXKqu9aCcJXfRP2ESBU3dXckjJQqNKPwxWbiMDQe7v4RHd4EPZVKTi8DZPyh6QKvnp9D",
  "key25": "4dWDyUWyujAFAtjAm4hkzT2yjvJTF9zY5UsykVezMzWZ33Dwra4E79khhAKupETubmQTx3xCEPXrJBTFKmaa2NF8"
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
