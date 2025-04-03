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
    "2pXrwBwFKRDiMoH5KUSQgLgfHRwAzgfhAFxVoN3ueKhXVZNocJY2eHtGVxVwbtE6QQ2VdE3TKeMsdbmwvt5G4RL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cVrnDCB49tp398Jb77YHzLUvS3ckrXDvJ1RYBWraSEkG4erAzTXCQjQEqc7h3dcneWpSqNLicYkdxe7ESXntoVQ",
  "key1": "4YP9teCsthkYot4dHrYsxKsizrkGfh3chF7cmKRwKtQ8kwjkMz8bBGuawDkaEcWJM263oveAziqxLztpHDeRiCAo",
  "key2": "4NcyTeSuxWbpRzuhU8q8EoGesFVkHktAhjBugrQ4i9NPKNnCD4Dn9yY7PsZLxswKapDXbS16tWTs7FWuM5e513o1",
  "key3": "3xykxnfGtF9pLEnWxPTkw7sQAUhbA1zaZ2aNuqtQH3SVCum2HWAg5WLSiwdpom7DxKjqEX393SbttuShvpfUyL8y",
  "key4": "5TzH42yiJxeRkSjBQjmtQSmp9YqAxKtPDMZGSR7vNMMpUT9oouDPoxyJ4QMjpdnaYhqWNGRT2c5UE1neX3SbgRWz",
  "key5": "SgpUYLJKBz7ehJx8xC4zcmvNSoEisHasFhBmpQX7U4FAQVgzmkWSxN58HyC9egV7QzvnS1jg8xHj5PWAwrxhRRX",
  "key6": "4E2r3Dk412DHDXw2yLDEkPaLmSzSivAG5r98YUUzKcw1X4z7GzfnV5mMz5xUnSQUBMx25F1uoep5G2AWYHs67A9P",
  "key7": "34HbEwNZu796quDo3FasEa96cT3iRMjGxQhqs8ukxaYoWUsy5LrjstthHVZNLs1hV8N97do7SiWUSC973Y4pah6q",
  "key8": "23EcCWe1uwjZLs2DQV6rNacQHKtXiQN8bncpW6aEWn5UB2Rt5ixyJnSX88FcxV5PMqUPoyNYLQqns7NwPfSYCfuW",
  "key9": "ezANMd2F16MaRKJXKBhiGPYtR6CWcKoi7yGCJqBm55FZLfwA7jGzpqNPLGce9KuHmb63ro6CmqjLpCzVgkpzAXc",
  "key10": "4kfM26zjWpUd1ZMqQX99B4iznGszd92h3vt6yDm3FiZr6W6us25PTBo3nSBVVQ44riH8NGFpwEUCczL13Ma3qAVz",
  "key11": "48qPjjBMkkxMGgUzBihcL8CdMbZA1VdT33bH7nzuurwQWP5QL1ebkbdG24t1aQo3FmLnoatkvJ2TSFbSd9ULhfNw",
  "key12": "4LVENXK9AswrykADLbbfnB3BCY2C4SnNsMp74dWP6CmE9Rn9JUjDiDSppd7EUdW7XMVLLuP8ef7XP9k3GUxb6UJR",
  "key13": "5BiTVfXvg8LdBGEajjqtEsE1RHaYpxxxHPgub4hHkx3n5mWst9cXQ2vGr8DJTgAw3ynZCDSkRSYh19cXqsbYHajT",
  "key14": "237k2NLYMf49q7t5TpSM2uhW5STVVdFvWbRovKgyvM7jR6GcmrbfCQRp5tfLH8JU51hpF98MaJKSMteuoHGcvra5",
  "key15": "2SYxde6hkwiXLHbED8WCMvbUazyJkvahBY7C6EV3ctwBR78Q1QJPC2eLDG3EZPnwRdfhdmfSEBhC6izNPBrJyE9i",
  "key16": "58BcpTx8K31cBdcCrVK2Ru6WPGwYxuyoST8aj6mu4HiiBitrcGcy8kxhit5PfTgNYeM1e4v1uDSTowTddxPWV7TY",
  "key17": "3HfuixF6RRnKNbfcUSByhz5T8ffQvifUSy7WD8s2k8EBrKjPKK43SdjTm734MLQvKovB1LAgg6e7WhUyqPdYGrzJ",
  "key18": "2JBhNKiNGd6jh1c5EJkyKYSyjBdbDqeCbhQEVnoLGeQMYRWz5mtbiU4kJadWiL1PkNuz5jpJfMcwFoFmdwcnbPXd",
  "key19": "yz8afCnViWg7Jw8Rw1dhLgiJMJQ7Ux7CMHCMxySnPiPFMRszGZekqyf5g5EyYVZntL4QBbgazwtKp7kMwf4Ed5j",
  "key20": "5NNFYptbgpawHggP9amS7UAEgScGryJzYQSHrM6sTsYFHYS3Cwjmiyo2jmMNfPK6ffrL3FSprmdTF3FkESsyPfRD",
  "key21": "48XRnfArxQkPdEGauhJjHVZFa2n49usbDxsku8og1GScPhCsD7EhjrAG5SMQUgwY7rJmkMgu35ej1jfYY9ftSpj8",
  "key22": "25zjR8iQQPzZUGke418sxRib45voR6gKCrKm6P3ByL9ttptmqpmvcJ5k4uCvw1AyUmcLj99hDQEHvqKsDEa1bdVD",
  "key23": "eVSMfmCsqa5Wobq8ZX7PS3riL8qmmpgkN2gZCWTjPrVRgszaT82wgK6PFJCatXUMGeCRiArXtWAYaSYUcQdJH2P",
  "key24": "3Am2h1BRJ4kocJbsdJ73hTbrE68n7jwDdcZ7vuNSVAV18xGaAREHJhR8DZ1BDH1zqFmtkC74FN6ong1asC6mePxC",
  "key25": "4GqLtR1epwLrpyHridbEmcnyVBfAa2db49TQAvRDGkyMy5N3jy2amRD5GHXa6E9J9y8hq92rUG44CNMirLZeXYcv",
  "key26": "3Hh7j6BcaMDKFGBs8GruDShoMdo4nEYg99BnbMAKTfwMX8TS7QsjhzaPsQdNfZjp77rJSnKJLsCMD9eKwZgtcp5b",
  "key27": "2THNcBvpYw1BfBuPVusWN3jUFfpiVDQ5c9X2PHB6CQKhNfrB9NLkg5sHv5HmghGebowpngyHQiER4VjxWMfMmsdU",
  "key28": "4DASLsRcoG8xiS58fCWnkfDZAnnUpWTVHAqdb5TtBrfWqMRj6kVrJFXF4VpDvrGey9JokymbmcJYPTZRPdtfpmb5",
  "key29": "RKQKoY5bJGQxK7jvNWeif26C9rzEmSfP8Jdduhu58H6cRQ4uEBsTWz3WRSH8fk3FYsLKpM8TJ6pR7VTb5hK2Q9Z"
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
