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
    "foKXC67tSZV5cxM825HMKtc6i7vE6fsMcbjvifD2tDD9fdrbuCzPcKpihNBbDNaTwH26JAmkAWtgEkY52CXqrGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o5eVEBqg92X9gsV2WSH79gy41JMS9cbhMcsybuvrW9cfyEtfs9jcub33q6Fd3SFTUhcQZ4rqxSpVDyFhjBFfnFx",
  "key1": "41ehiJwMaNspv8fSMyoSQYAtGZkfb1myvSWMNpQtR1wNCfBeU6Nk6P9SbzXxgWK55RBkTTKRNL1i7kCubSGoHCt7",
  "key2": "2jene7USgyrLXtyrJWEWeLEWy733G9igJiCZvEY8T3ej3hGJERAnQgWReVW7ZNRTTx5K2G2pYQgJqAGYQ1MT23ZF",
  "key3": "5FpGY6Tchnyf6qZLRdrdwCBKYv6FJMtMT2WZGydkEc7do95PaDaTqGNYefxNVA7PwNprgw2cAD3UKdpo2UQVj9zn",
  "key4": "4aAXwYNmNwoyirGeoT2gYQE64GYSuaBsE5NqwD7cPsM66djUUWdrB9grPzn58CBNfP5aFjqUc4BZsBNYFQSEJuYQ",
  "key5": "2EaGvcd4M2eooCsY81C9Qpgmu4Vo4LVNjs3iqxPXs6BfST4nf2esf35UX5srE17a48qwPoqy2KcaPhH7HiMieX9q",
  "key6": "5XVrrtoRhXivPbehbsfoss4vybf7RKqU1igLCZcy5rhaqaJX1MJzb42n3F9LeT7UxXDnWH26RiNu9rii86XKDKGG",
  "key7": "4rmBJVPAZkTEmEzJTVKE4CFGPJ8hw1bHtxTxyMBJxoTRYgkM8A7rTDJpFF8xUB6PCPhLDxcJNvWGpj7A8tpfwRss",
  "key8": "5ihC1k5Q8WKt1weuu1Ly4oTMRtKajafzgdRrCm46okzkY6TZV8iULumQRsbeDcGYDSbcxXvzUCDUZPZeJEVDRi1B",
  "key9": "4SrQh6TTpDkqQPzF56GjFYjpw4WRSD5qaMMbNjfjafg5wHBWoMgx5ZrvDHnw6GnqUAz1Qwh54LXDpE5XEveHbtrc",
  "key10": "3AXzDF5mTYTE6eiBJZLX9Cc8wx28YFSgiN4cvVbbWRjPVwaTW8q7jKVdsFv1RLkhxzb5kd6sz1UMwEoCNvcZBUWC",
  "key11": "4YJzau4qRQJR1r6YjjpQLvHYkgwx9oEJFHYmcz6bmV2YdqcCts6qurX7k41Q1ocx2FAesc3d5h5kxBihioJSsZEi",
  "key12": "2827XAcJCAzSgUERHwNMVHPrfVvLFZ9LXFvP84y5UhBMEJwy2vjwxNJwDhPDBUdNKJ8QgjKCWcz5KfqUNkA8pkRz",
  "key13": "3rTLxvS7ra3H1CSNDR64KMkTN5mdoYhWgtufi4dqbDykWE4ynqQNpCQLKm3n31EkA4VE98GwwTc4h37SyaaaN1mF",
  "key14": "QAecNkbiXP5eWvEPAiHEEsHsfcZn2V9ehxvjPGDDY69eJT3Zr36Tin4tg9ekJdDAYKcoUtSk5Ri1kxRTooz5Fmi",
  "key15": "3D8BoHx25BGA7VJNmhhKGiZigrVSUJmRhb3RMm3xiaEP58fd3yFVjhaFg4u4c33TZZ9XczgobNrySspySzatRBbV",
  "key16": "57Xg5jP47m4yoHfnxsYu5vaF7Dafwtz4Jifkp8XRdDAzZF2cgAGwwqxUUwmuhPp8XpZCoARcSrj5p6HkTsbbsygs",
  "key17": "5UBPJkohHCFvf6YdTAnUQq3LAiL9bHkjWeocTVfsz111UPWorAUuuX4B4Najtt4sRRrxjrS2wVw6yddrNENjhPgg",
  "key18": "4KkENE5teUqjTRWvasPLYMg6AQZ5BEJ1NqcZrhF45Uvsq4sh9JWDsyuq7euPy3vAyHuDPKsfWVeHJqLrAd17fJd7",
  "key19": "GX9hsDrJvp2QkaVNoXdYMEU2sZ1XS8bcRTPz3GeU8p5pMy8BmLWwozdnN2c1EKWntpkNA11gC6EYB44AdNAabaC",
  "key20": "4ZLdiq5fdJqNJR2YeKkMj5brwsaja7sQVFDyyh47SA4ya4VBkSTp8Hb4ENgZWxZ4d2k9NsRyF5PezR4TPEei8Qf",
  "key21": "5JSeLVHGKwq71Fk1CnhhzgSrT1EKwT9M1TF5na3WvBz4fghs3jVj7PoJQC8PbuXJUJs6dGuJGNj81mGdosWgHjDi",
  "key22": "4aRTYuv3j1zVevgyhCVCDhto7iWb9X4hzTiZx2PW3YcSmJTgQ3wAovK7arQK1EFFqqpn4FiJaG8zAr5pmcqvUpV",
  "key23": "5Ghf1QRXH39r2Wf3pdvAgARAftJ1aqoHH5butriPH5vPC68pq3138yV6W3AgeRka6RTLArMt5Sjdk6NbgrBPhYDC",
  "key24": "5Q4r3X2NpvrCTHcJAUPysJ4bgvPPuMTfy53P8uZDK2HasemkEBU8zMpZgS6F6ma52S1Yc5UVkv4GssKGXdvR4SJH",
  "key25": "3FUhq9kvYwfFrRqyswkeor2M5dFgwKDwRZkEdKM56qaTqCEa1v1kBupXJcgpatpq1nDWvJt8dTYoNSFxq2K7CY5L",
  "key26": "2qJwxDqrakDYanS58sBPaxVe4sksSZ4QTK9xqQqXs4MFey4A6FxKXPPRzLHr7UyVffrDdVhwA7eyPhSJb48dX81y"
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
