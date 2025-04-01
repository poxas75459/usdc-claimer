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
    "2ToVJQKH8cBh4gChiVqFqJhM71utkytfg5JDCFmDFUmUfgn3haMN7KNvmkPjFSR9j7v32UzHSrHNvXg5fBexM5iC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yqEWqmFkA3QTvTURiXxHdfTrt6Tmmqqrkxbqfre1RWsSKUcVWgTzFKaEZxkv64cGmd6JTmMREHMrVSBAACYheud",
  "key1": "3qNjwayAP5gsVQCRqgYEGpde3fwaKqjquqJo5hH7YyvbJerSq2ndWkGyvZ8x3tzTzKsmVBJvRV6jUrgaRyRCH3f8",
  "key2": "4ZdUFtCT9WoBhhuA1PDBYWVjt2b7tEPxUxzfon7AXS2VCb5STeuaS2fk1QMDCGAJb49DbixHmkxoSiC2oQ5L2MmQ",
  "key3": "4GhywybHWNnUXesN4u1UvaQ56wJFRGaCUNibUtSsGp8xbDNhif6guzZRAYHmNrtzrsMZ5yTnydoDPuSVDeT3tWdv",
  "key4": "2wxr5t8YWcAd2nJ888HZomN84HcTJ4SYQ8XYLwVkHZVJd7MHPGgLfHNWdYwjCYsZvHFpgPycMzzMMHkHC2FvPWHE",
  "key5": "3SFcJBr9pWqVGBtv8mhnA3jheQKAYjg7QqwtSc4fdvz7WMuVD7jX8VFLZvVS82hLUQsEHqBTiYw8j6DgYt7bmNNv",
  "key6": "49KsPYcBbRrGNWaU2oqprCg1g9dmmXaxa6motSPr7yojN4VxAC2nhU8CEeQvGugT1YQKfrCWe9H6U7mksm7HRrxP",
  "key7": "5W39fi4e89ZDmA7uGsr4KE9jahq3UPejvL9a3oscgJGQxUjEVibvij8oSCVqf46bj8VPGRdMGZtTg7eVBoZfVZLU",
  "key8": "2JWNY8PKcJDdt2mJ7npNKHyLQG19JhPKurCV3vjaxgWwqUXRbShhkuuLPZFKDPQttCvAm8fVgaecA1fMNQmZLWNd",
  "key9": "2WVLhpF3Tx5nyZZerZgFb5mBjojEqPKW3NJE9kgU4yV4g45po24RTeHzjs89xmG6Rt9ppSMRM5mRxRJ2a9iLJeg8",
  "key10": "Zj3htDEWHCoGgKAjsNL9fRTiCMPzGVygYqJA7hw5bj1QroGxwxnVqWzg8WNBc4aBtsb7SXENRCEtkAsjH81j5yf",
  "key11": "sYyGqpiDmHkWDq2QmNpc3DRZaoBVraFHfwaQEMkN2DVAfJXpXqPxsetcShHYbN7E7kxH1i5avnhf9t9dpvW71CF",
  "key12": "4eFDp7Z2eeHTZGVbNRTzUurU8xAdvuMu21g6xauUKViydFXd7727gUwrYswXZnYnZ38YEM5Fej1qyHKg4CTKZUe3",
  "key13": "j63fepJXp5hKhHgnKUZSWab8c9qDD5GagSm3w5TD7Qw6LuUqMZf1UEpGUdwSratLdw8V4kvf5V6aWJi9SexjDci",
  "key14": "2dZM8187QN2CEcKUCdfNy4XzvjK8uyFQe93mGGNfPgQ6dMAbcnF7mzherJ9Yyij44JTPRmmUgCjtGDEvos4zjhrr",
  "key15": "3LgY8p9hA2kjMJZvNm6F4QfnCTgdyseBNm9RJbBgW5c6NM45MyY1qeMjZwZW4SPfyGHE9J2DzCQDpieQtEqALQcE",
  "key16": "362uHc32N7NqJ9fRbDQEbvLPxPNSLTi4hArR97Vzn7gpeMai6kEXFrFF2czNmjnxF8562cCFmqUXKsvjuybARy2F",
  "key17": "5JJsrDjB6zckodHYSFqfsoCbNepkdcTqMHkZCR3kVZ2JifpzYx1HUxaqriSNKBTJzUmmjCSxGKKX2y8XtGaab3D3",
  "key18": "ZuwA8fTLbRykCMXcKb4jcd3nYnunUoAMecemh2vNX2oKWVBjkBA6DbNyLm8jT5UWJTfCaCYNwBwqjXeT5hh8BZg",
  "key19": "65yk4b4qy4W6PDCfg75SZJQb6HLtSWjU6fP8DyL9G6RPhRLVJi5TsVYeB5PsfMEfTMcvPAwWkPvyK8njMfACoqWJ",
  "key20": "p9vtXTJnxHrfbLDripCQReUS3p4pvW6BFmfHBdp2KaLqVcPAZLfPt9u65jZPGcUzC518anMSn53SjZVdzqrjPqa",
  "key21": "3W3RuQTUqB5Z97GVKdv1S3mwJrsjK5nspPbrBShWWWayGoiddBJQ4FWzZJ2Z9waJjrk9KaY65KGae1S5rkb9p3ek",
  "key22": "3NmbFRzj7w2NfE4ZnjHgQXuMeDTn8Bie1dLtrdVxQJCrK3YdLY5XcAb8DHv7npNjEafq8qot3cL3Lhyts51tjvLd",
  "key23": "57B8oXRTU2LGkKiHz3KX6V36j5ZQt16UYnn4Norvyu7w7rxTfd9BD5JYf9oMi5tWLnxdVG2kvYqEqHgHvCvXx4yE",
  "key24": "61m59wJMBe1SMhULwqPGDt5acdNhbrQTWZybCdjNRiVZDAWhRMsc5FmNpYC7Z1AAJjY72A8TGdqZNbtp76nEjeXg",
  "key25": "ru4vUQVcur6gweJvuZ72A4862AUMZr1yBVfu1p39CwQmwyq68HLswc7MJdnQUJDWSU4UunakwZHaoWXoWvhe1Pm",
  "key26": "yKckCYWpCYMcp6mAzmcu3GuZj927ueQyLBAEYJK3raPfbLxWDJDr58Ft9ZrBQumr2EP34ZXpFF2Ra9C9F4A7nxU",
  "key27": "2hwuKZn3szLDVSWrxFatTSaYfVx9AKo7JdvPia6NRvh3qz1csBVjaKgTheFCvohMpJzTxQwbYvoRgnjYseVHYEEu",
  "key28": "5djZ1iHRDrabDtcN19k8d2ZdR3jjgyW12QeNPWzpVMW1ZRkncRcStmPJHzHHHk2AgBxj8nE6R1bVatVoYCU1a3nz",
  "key29": "3kAtwJAydrpExnKpiofJ4DnL4Qd3G4HuEoRUFVixyDtWau1tstzzZiKtFAAqxMqWg1HcuCEg5hZL1f5ywSGaAsqJ"
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
