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
    "2GBkAUmUxii4ZQAmTQUhd8WTgM9J34LPmGfviuvm1KV2EYUHKdY8FAjvStpwrXJT7EDY3jn1Ke3KUnGV3ZHwopSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fbBnWjzddoqGB7T13CthQRJjGZ2KddTsuzmLoCJFG7cFsK9rGWEANbzpn5GPwQLSH7BMxZazhtVWcwNqc6s8M3m",
  "key1": "4U4mp6nCJLSepXAKwPNQo5oFiSf3tUHcyZdzt94Ct1V8S266BWz2S5AGZZ7TU775Jdd9qUmqGpuaUPfJZ3W8K3mV",
  "key2": "4Cwf8nXmTj3nt8W3Wf2JcsTpRvnp4rUnU5se2c68r4EbeNf7xH3VuiwtV5aDCabLWhoaDgoeFETy8F5jgkz9i42u",
  "key3": "5jfRbuDSLKvLtKyrm6Hvdcf3YoEVcMT2Nbv5Xp7p92azodAMbN6XqDC3BfJkd9ZTWMzv5jv7DYZMsiL8hDcVdtn8",
  "key4": "5VovZ93m5siJ4jpqdc86i3B2oibhdaeLx4gsUEt39Jh5U8b5DM6whjgGawb2c76dFrJULVT7svkqJEBTAXhXKpmC",
  "key5": "3F4T9fYZ2NvKHnTcAeLRbvMqWR5ezzt7Xkds17PUDZdFp1BfcXZfG4g4NCuvwUnTC9wDNbQGvEpPdA581mCnmPWn",
  "key6": "5BWhTyF53SD4nqc2DYJ3Z9cn92bxNuKG1Hr2noKxhoqExzqJBB9nMJF4Rr8hF58r7yYesGkZo7sPNem9WHpJsZfJ",
  "key7": "MTA9eDzeiDQKDSwgVSTRdbTkXTPtEAxBoAwfsWYdjFdRsUknZXr3ETtgnECWFsY3bxkQ3hTuUP8jC3VUJJqEvQh",
  "key8": "2nAGitgbZgdZdLctUSVPCD4ExWeWrvTaSCHhMAVQ8kiinBb6LHdHZ56jqkwzgFPmaT3EDjdvQ5N15GTPPg2hPsgc",
  "key9": "dc9dXpD3n53rDaVR6o1XNWiQNhvQ8dS3W1KpfBGWWqGdeWisKPAtXM8e7J9neobBt8jgNdUEX9ghP8SToUQjz8V",
  "key10": "2mEmEX3oWTpg12uadyBG8iwpCsLUEQ7JDQ93wt8Y136hM7ojTPZpCQFDfsYBnNNYh2d9om6zKZyo2fsG9KyaQV7s",
  "key11": "5f6uKsupYy4vsCRQyKG8FPuxzGTzP2EznFkqRmgaVobymh6ygwsNZRn9S7ECqpq4RQF95FnNUnkmqPGhodxiATvY",
  "key12": "ATWdL6z16sCScCvWwXsaNeSYUMYVabEstTbkv7zAnjA9BDdFsxz6wX4NysCHdAgSkJaphf4bo6VRv5XUS2xosUn",
  "key13": "2dgvPpvcnwYmHPKAuiPKuWFerekqvXtZjchoC7tsaLjuMSb3LAD2UFJs2xUhz3Aa5b9k16jo96UKfhe2KpHdrrZ6",
  "key14": "23jGnQiCZbK4kcdxdUmEkkkckJy9Z5HRsrVCnTEXrU4DFkh24oqQftH7WupgpvL1MW6XyyLkG1B2yytUtbDnERFZ",
  "key15": "3XfxuSiTV9qK8kuXn4yF8zRQpTcjwACVrY186FxVEZ2uo3yjiWtzjxjGdZK221yPijEARSu1LyJiH2hc3mvSEJPK",
  "key16": "5gc4wc1WwqqFwyQHKXVxTtUbF5BKEGmbhkJn58uaqF3Y7LpXxWVDSBfYSYdsrCXNx85PYv5r3MbVHtaRjPnTTkJZ",
  "key17": "4CiMZDumXBLuggdX9asWvALqkMmGUj3TUCWG6vL6q8MYXo6zWhQHso8C2EARHpE7UUxjjo4cME1JBGdCXF3ySDuj",
  "key18": "2NbipSEoBDeciSGJycwo3vyzvSysoeSG22T9aHrMFfz3HcfgZgW9mHu9e6ZZukGounByYJRsmv5jEPecEjUS41A8",
  "key19": "HLi6r9WznUr8mpbGa5Zac6QWBzP5UdrRjiHuWPYDKW7XR4mmwbKpcd36KCUcjBavCaDq8pur1PiyDmSQJQsLm5p",
  "key20": "38n9CJCwoRvxzXZkfEtHs4mT77U3goHyYTymD4qPoutyTSPkC9Hri7RtkA3hVrkcXHjuTACaZ3Yk32uBQW1nFYyH",
  "key21": "2ER1i7eCc9fBU9uFDmsCANdoy5r1tymcBEgbtjTZTcY2VRmZ6DpRqYxLy63zs6d8LLPFBZ7hyiqNY9SheQNrjiyd",
  "key22": "2cJXxEtLGwFqqyvdQ5Bbjo9EDRARmvpC5ULeWuERuJ86bU7nwTKYBNys87foraoEM9djCFmoXdmp9HRnG7PAWv1u",
  "key23": "64qevKZYCevijB5LpGKWpiEmrK6BPaGpxpXMY67kauXbvtfYmvDqKwQUh91MJMq3qKkL5d979752DYRSgfqKMToV",
  "key24": "5c5bsQkAhfi9rJ27buSePDx9ADbbPsaZoVddQvYcVua9ocqK4WopHqAr4vqZd8aduA3XwuKsFiDrM37acCNrVJ3Q",
  "key25": "Y9S1LHCJTugETeKib1FvL9yb855TpFa4EkGwT6rBj4uheEtAdwyXBxVfD4AWYfD8st6a97YqYtF4Qu9bsnMaqUy",
  "key26": "a9pkFS9S8WyyQKQPYFjUmsfbKktK1YU44rk1DcUB9PFnoHVuM6S8LvoMZeLjXtENxSvABMeP9JD1RzHXnTppGQn",
  "key27": "5FXGXqwUqnAQPcaW9uN3TeWwjfdUoUE1cSDaUJLEgugkwu7iS2FipMKRXVPrdQrG3HgYgkih8puPibeNhj6KcYBi",
  "key28": "33bKWWAFi9rCoGN9Ao1W8vj2QmVTbFong7ph8tnDqTF4HH156taZBi9LjKCDsHd6ocvjozjdwHsuU4RRvx3esR7n",
  "key29": "3KaE1HEjY8GTGV4CyDXbtz3jmR23pXyY1i3YWDpn3Yqts71n6kDVJUQgbjB6ZUkiBXkSZfEbQPGgNGsXZ2ynrF8j",
  "key30": "5ptLvnwWLCRKLneBLAZunQnv81KThsD43P4DaidPTTGwAK7ngociccfVcZ8gq2epEmxDWagnVyNCx7pquUeAkVg2",
  "key31": "2B7EwQBUYPZPPK8mCWDuEFxcJixTfqcmDDFb8ECRKLwbj4jPB4QzDDc48GU7CmJ5RXv2B1Pn4sTBkowYWRx6a5Hv",
  "key32": "4sySrvZdhMgLn6Byu4QhvU6m4z8xULkFzSBpQiFQxqfjNgKf3cN2zeL5K7cx3NB3kFvPpkpZXdfGiNBSbMB5VShm"
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
