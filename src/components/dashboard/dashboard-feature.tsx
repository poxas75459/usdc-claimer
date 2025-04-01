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
    "ARpve3m15q7auBwU6dhJhQfNACAKYMjaiXs1NBPMqaDEe5u43A4xC9prqnBjHqmDKNYCx5APupMKzG7mbxeyew9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x5NumqP2HCYad9FuNQ9Rv9swzSPgwv6C57z52M2dXbcNEz3B67LiitrmYXNGhkrEoAGgHKnKoPw1NdD1MUaqKaF",
  "key1": "4LSjwNieohAt4duRzQGXMjezpN7qFuW8CWZTsypbeQo7425LjtfkekusacM2omrMXGj29pjW2wPXaSyUc18NwyVX",
  "key2": "2kfnStUEfu7RabpEPMaskv27rVL3bRCamZFghmVht19BSUVB66Xq8RjpNcaA2Hbx2zw8j7aAy49QxTGNW8ibCdTT",
  "key3": "4B8253eGDSFP9LPTapWrmLQMdSeBePKjpqyKY5P6x5pJZXKcpqtS8qPUajkkJcL15gkFQo5kEeZASiRWCjzQRZqX",
  "key4": "2rKQvcwnMjyLJDN1BwGq5wtyE8CCwcuvDdwQZAqUPYXa6dFC5cmrYjLKrKsQepPpVoRqBokTm92onNLt4YZPNmm6",
  "key5": "QXBKzJ5DeB9cyruJmtiCUqezxCCx2knuxRx8D5Le8PjHNXDwyXEN9ktkvcu21jYjbNUjCvxLuctK8EXQCGR9KNd",
  "key6": "2aLmsoaEBQkkjyNmYnhNU7eZr77UzSKT3QLqvi2fQVsAZLHYpn3CUBgkPYNn7vu2TK2VvVrwNBJZ7YSbXUUMuGgc",
  "key7": "2j8KspQn9JN39GSsaQxVZHwCmn6tK5w5CQ7rkbMLRHJ6aXYCisb4CUX8tpDAGviBD8wTVE6sHwSx6s4f2hfghxZ",
  "key8": "3sHXnkijAqkNRCT1hjAjUr6Rv7BYSqwQbfQWxau9k4TAuUtnQabcGpMxwaqS7oTQamVzvV5Dsegh2mC7mFGzSWGN",
  "key9": "24RNobrrYCbDW26LqdJHYt42CBeCaQ4yLAux9f3c45FfK3Qnxb644tZNQM3ZgMqh2tffDV3rgUejVejKqyA3UvJg",
  "key10": "2dFwNqmY6XEY6SpzozDHL9fEZx1y1XPWEkn6d4R4Cqabutvk6FB1RpBs1X4cRXkQcUQij1EjRVg3U19urVbddKDk",
  "key11": "3SQyBNZMGWmKev6YgaMcxzNXPSyrP72kFWR2Gm965aBZxsZys5szLZiYVGyZzeApvytquicBdVSnDuCkkz9aZHiN",
  "key12": "3rNJtWnD5ef6iBQf6RoaGbdgdjJVQH5aNK1W3YwUYGqfoYZY27oa7BkVGij478RU7dAC8acGBuMtsknZGJLx2d7c",
  "key13": "24BTqmPoXpx3MDLNDKntd9BUv97n9XUDj5x3fkLs1WuRLMtwE7SP7GYGi1rj7zYJ6dHpBvRjM9gfWUXA4Dnon76a",
  "key14": "4aLUmMQN1rP941HfNS2nKo5dz5Rntdq6AZ7XknwJxPHUG4PiKYWgBXKgsWbFXKkQSp6qhLYWAXEcmpmtTiakX58m",
  "key15": "457pSJHhTFrLPG4BcCrWVNjsrQJ4SfrkVWtsZFbU2uCga6Hvbv6ysrTTgL5muchsHdaRbFeJFyoiQErvtqcgP5p1",
  "key16": "34hGtQMh4CdyVqaLXo9uiyvvEw9xL6AQBG8GMmE23nHhgmvobKWAf8kYfbPYLscHvSRVHnSNb3LS9th3DabiYa87",
  "key17": "1N4a2R5X1zk8kJWAnA8JvMxbJRCM8yq2fca5ExwiZsqYt3RvME3bhoqTthD8zfRD5YjXRHxExzVqz6sMkngb1nE",
  "key18": "wqqvDm9v8exxShpPzz9fVxWKHLARhNYPt8mPzb8ih3kQGa86EzJu2C5TMoJnQM2cTiAeURK18FYokRk8Skm7J9k",
  "key19": "3pmJnZKaqXxTNrmyRZBtm7oFNtZJCquJbc3Cuz2CmubcKC1VTwdULGgUmEgeLbu52Fxt69St2Y9G4ujn5xP4TxbP",
  "key20": "2XKKyMH2atBPYN2hRps5QhtHPujUGnAVa8xR6EDCDwNLT3nZeoG5UKyisncFJS3HB7Z3ZJKkXcrZaCVTCdcDprjV",
  "key21": "2dRGJ6Fuk8RRDwSGkfKU9RvzZPCcfBG7Uuo6jGiD5rAHBf7x3F1BvJrBPz1ZibSPBuxxAQk46oFR21aKr9vwDWnQ",
  "key22": "3G1paxRJfrWDUyi5yqoYi7RnAVqgTr3Bwghaz1M1ocqRmBGXuSuNkQQJA9YhA5pCy6tqgZ15sgTt9GzJ3aMuiHRE",
  "key23": "2XuKXPEPCVhMkPdLyw1AeB3XS1mqecnubQn5J9zzghDB3HkdxdXiPrAuiMzJdcAQfGnSxd7e5cF4Vxc1c2QuG352",
  "key24": "a6nDKaAW86FKfuudBRraeFaysVQqEirhfYU1MEpowG1ePiGtbUrAgBRmoQs5RHpUgcpgzwiarcsH4V8NR6reqzs",
  "key25": "TdWirRvF1JnvVq2nxjMmd5d6tav8wpNqhFctKUwuqYc2h8aqTXXGqiVwrheG7439qKwRrR3dck8QC6XX49YBHk9",
  "key26": "3yT8JAayu7eWtXU2tUWdoX6mWLprdks424KmGRR4aVBBfB8ESNmG2VGF1fbvZuv6Rc1ZWHy8GKChjGkeamxf9LQS",
  "key27": "3Y4FmKUjtcadBWEHdiHgzB71vCdE4Xto9Z7t2bPAQxkQQaU7jwtPXAHHo7wiGvHqygP2Z1kA1ovYgPXzmHJKzMxe",
  "key28": "2pW2stT6wqg9F4ehyAfDLx4NaTXawgcVqAJRGqEvte4Y6Wb2zNJH5FTp36A8iX1sSkcGWg9Jv38vrARrT7DHRkjY"
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
