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
    "61H8c3N4Nyyp1rgU9xK4Wk66qEYF3yYWZKJGxUEGuaEPbeNPZ8ujNyRxpFgwEv1tdPgmNfjvHvm6bSPNHiJXzDhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rCXDznYMs39qBHnVP2tmMqYH4Qxr8FAF2yBXDVKuCQGispwQcwy6arhWeqDB12XYjyjvXpEQMEycYvwoipdGAYX",
  "key1": "3yWAypEHYeHiP44jXAFjpmcmUkWjV1aNHmcJp13JhkL3edQNhAoFA5ssqLDHRQwgQMzpV6e4Bn3rAKDF1vXTAig9",
  "key2": "3KY3cxVCz9TXFvFSr8VQqFUpmLkhttRYsqRC2CiHziZ9JYBTE8NNE35Jei18wqFniDJPNyru5gacFNWAV1sVjw6J",
  "key3": "2ZvPHXxcU5LCxfP1pocspx5tNyUNy52PnDr3KG4ehefaXr8y9p1AtuW5G1Yt33bRQ4or41FSYjHL9dYz3KM8ZtFL",
  "key4": "56LFfx3hJ47C9a6ERxqbyGrTvfBmbcG3gHq1uoCKFxEa3idxzmn7ZrJ3xMR1P7idwiz61RuxPxpL9UVZNwHEK7dz",
  "key5": "3jKez3yiQPqQypzQjyFikoJNvsec4SURJbb7tp7ewrmPbN2C2Fd4fbB9JUsn9YBENaR3NAnprpjHnQmsL2XpABfR",
  "key6": "4beA6TAquegYPxGX2NYTBz2GK1SYCBX2hTR5Hg7yrpmK14xxwwLUdtYTpsFbBYYqNPbmeUFW8ecBZYQQ2LTz92i2",
  "key7": "RXGyXppKCWdBbGhzp3gh6CdGa4qdQmtGddFohMvdavFxLkigY1r1uUjX7bttKN3boSx9A3wHyxFWZ81bvuNeDD3",
  "key8": "5cBivHCivNLRfEWwc4SBZZuREi2R3L3yUDt98v4sLHcPQg724Py1kAgzz7dbkSNXRv8k9CFemEhB6YxdKjhyXkeB",
  "key9": "476y1TViyrbEqjyG4agYTXehG2GS8XNz2MPAwBSMz2kgsBtGVqwbNqLa9svYYyJx5KwQtESA6Tt1q6QmcA21Rsiw",
  "key10": "wcdej8oZxsLF9J18innawb1C3PWucm3QuWqfTtwxR4icq6dVsvmnCMmZLZCUfazzdqKYfk6w5UrZiv7adfbLR2C",
  "key11": "51nfhjahfdnc68qLHuvEoaQtmkTzrtFa5QdYa9vgRYys79rwzH5izeJmmJxbgyvvNpCier1cL6uxHnzYLLKyrQh9",
  "key12": "22XFyMc6vyjThYyAuasTgVpLBNZuULqSrUm6ZsVgoPgMUKBNW2dBza76YQCnaUc3S1nMQczjG53ri2vU7Dqye72c",
  "key13": "YCmcaS4c8na89Dmi1XSe2U3D1fri7xkiw3uWdAwhR79kW7cx4ChWwmuaSdXrZBwWLqtbKaDutYC24Gpf6tZAUJa",
  "key14": "6692YF4QgVtTSdcgTH4jvbBQUY4t22rtVJC57UhW7dDeU1AVXXrhRGfPecvZEDWzd6p6bR42cWMAFW81Wy3rwbs7",
  "key15": "xP5VfYPq7ddKdnG8rdfB3BvhT1ppFBtMgp5mXVSnRMR14CBERb1kff1a7uT9ncHCHiRpBGL8fSFjDf8y1UWwj6d",
  "key16": "39MMEf8zERjewGDDpXoSXBxcTMeRbQZPEB6VwHcPMA5LiEnuNnVQSmcpDqMQVuEjGDfg8DZ45Gdivq7mHB5gbQKQ",
  "key17": "zuRoZA7AQZoG41mjpRou7MjGLvT8EP4GzqQ1xgzVFz34qNRXXEDni1eHAUq6RLrp9TU4FVbKUdHVNudBsTHsJ9x",
  "key18": "5WKAkbsEN5bN5RX1XVt8ftoRfikv4U6bVSEvLQazBA5xDhXQf6JRhgcEAiDew1cdaA6CjDFCBAnNdQthkGJgLvbW",
  "key19": "EdTbnvFumzSPQGn9cMEtqXhMMuvQN4VU5CTctPvsWmcakwEPQWA55pwjRwzzGuAkdavDqtLKSzkUQMRa1S7YC8d",
  "key20": "5niUiHazqqTHEfqVZhLasE5nF7QfFuY9ArU6cxbXoqAUXz43H1dyBwu9kG9JzPBqejNuBhk6UzBVDwNUUb8MYo5t",
  "key21": "pv3srTWKjDouDcvjTT9GsuUMbZo7igyiPZJnCZTZZQGgnb9hfyWhEcQZ4iWemJmQQLMeFKuwxT95uZh3bxT95eh",
  "key22": "3pqXLCrtWK6vFZiRjKDnkJeaSZbA3WdgQJapb8wffNAXUQhCwCyVKys81WHPivShPZcyCqMTUKgjJ7ve3T4rUrAH",
  "key23": "4t1Z2dL8vihXgk9QACBDA3iYVcYwwsEk8c2S8SoPmwi2HSx35eNawihdaWJmZBpFnyDMfQScF4XBxJBFYNpLdsx6",
  "key24": "4P7u522pfk611Sq5H3qUXLqDNNpvV94NndXazqYwdyRdoCcZJBHaYmxyrcxe5aeZoQGmmvDF94pLfGyGmvtGdfLY",
  "key25": "5voJSRTNE5Cx8CgvLQoP42iyFaJVMh9iyNSp9NKNDK8P7BqGdZfrHhG6YVq4Ap8epRp71HX7kwjrbkrMWkgCbkv7"
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
