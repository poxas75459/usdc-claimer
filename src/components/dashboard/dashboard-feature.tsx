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
    "4qULNUwbcYHgSRGtwp4rgvAPBzw3ke6YNMdMn1ajXr8uLrFZGR3EkT4BFMTbefqtDcZ5M3wckTK5dDg6ANVF2S4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b1myy28DETbJbEza8wK8m66hrGgMrrZ87gASbCrqE3oJtHPnahwi7EDN4zeNtE6NX2YyvZLfGTbH5reEnoWkRYz",
  "key1": "5JpJu8Sj8o6Bvxix5ZM8MUXgDiuhCFyMb1qzf4fS6xtAYjWBL9cWVZmSTnSC7jaiMJLKNYAbXJ4XXaBUwz2zHiDV",
  "key2": "28obRMaZxEmJp7kgDVakYggzqmkMHMqUfmhCmsuW96RihbQmpXcEXidCMPTphCeWswLbuxytRKJ6yeNr6H54SMW1",
  "key3": "5px59rokYGzLnDDuLHH7AmnGpphLFKbKRYfWtfGtC2RhGn1oz6V1rBpyGwNdL6xjyFtaRYGduGaoF5aQuAPSjMPA",
  "key4": "4zuD9AbjiH5yekhR7UiSioMRW3fMh6VQtvxepKvMJUJ5zK2YZ1cSdZksmSkF1a4U2W9hx9C4N8kUnERDLyYEKEem",
  "key5": "2XicU4oJuKoVTwni5ty96af8XBVph7niTiaDauwgsoBKMyQHSh7xk8fu6kaeNMmBYiZKXzqvkMytEiQSigpRgxht",
  "key6": "8wzquCjLdmdfiX9gEDN1F1pVir9qfVwfGA4UVx48HvJpXJaTUoJjomSdFLyJKrcR2dAVuNCLthTARWQPzTbYxwY",
  "key7": "4KciEkMzD5Kq29wzkhVPJvLBmWD4oMs37EK23pUgsTqTTWisJrE9frM9ekr9FvamKEvcdzomXap6fsagkPUua3CU",
  "key8": "4ucVKRfVPrrrxL1PAgtHRB9czfT5ArzpJyu1a5aKTCrJNbW5qnWidyKvwS4Y24UbqbexNXZ4xmo6KucZDxj2GHKm",
  "key9": "2B1d3XH3DqxMhTCytb942Da8XLnPx92uyo9gEhpZQL3mWQzmjcNWLGgDn8mUfrB1ciUP8mciAughZdoUrAjsxFpL",
  "key10": "2p763eNjWXGQH819uf2r53yjiwskAB46i7t1gfwajYYRJZRkJhg31P8LN15c1R9uuk3j9Rvxhqcx8TpMQQhCbw6p",
  "key11": "4UaTLQnLn3mwbsofwzJ4NBEkbMrgtpj6qZJKmgtYq4QjW8t5VaQPFh4hfVhaDRuWoTz9jVBEUQzQrzxdFJo97uTj",
  "key12": "51Tz4YSx6Eqt4g9dEtYn21roHRSMhXVxkQVXpLEvvmS5hqGbPQP2BeJpiC2qmXVTUQM2puZtocLDCv2bwrKnbRGm",
  "key13": "3SC6VxiJQPHFLRD3ErXLRTS97wKMN3X5xgTiEDBf1vxW9WrWdiToaMND8tzMoH8beTTK5hZzpyCVu6pntK8zKn1w",
  "key14": "3WvTzAhsmVVesQ5GtUbT7saLQpTE86NVHJKkHznxTYxzU9ZU4sqvttApk8CR3jgQAijugJEzbYmXJSLXkhEqj7rJ",
  "key15": "4MFQyjgqAd29LFbQSFKiS3JH6Z7zbEg7fXKogosjAkMXM7bXHmng6Kkk34DVVhuS4NpSV9hEuQ7HQKrvo1aPmvuQ",
  "key16": "5dB134xAvFevzPrMmDWp2Ny1ncZw5L33Uukkioajw24fWGLAHpSkyhgf3xq1ZSdbAMi9sXM7MtNNtHPhSfmZLsvg",
  "key17": "3hBTg4m35Pyap3PppthtW9uyCch9FVUT5NvRGVnAJq7TiHy9euXYeydUaw8Fsycoh27iSQGvNQEnCcWbUWKEa8Yi",
  "key18": "4EJQPnB32DkZLo3YhKyFpLbSeoNrMgEdngskpzBTSGbENf11GSjvqgMzn3BWBR8hNDV5i1VD6Wmpe8uR3sdx4HR3",
  "key19": "34R8utD1RgW5gE79Ask2PidyiaHSK6yf3hpVj7wi6KBKxgFSMw88yCSAyi31uTweJREXJtgQa4MpoHzsDhRsZBLq",
  "key20": "5vjax1J6sc9bVi45BJFwf3YrfoWqy6medCuTTjmzzr7aUCQfiBVpVuwY6vdve4Xm1mfWjt2JBTUvCVuS1JvH8bRp",
  "key21": "ZiJsubbHfyPZFeqnuVayRwR8AUTVkEZRPmfN1eG4xkfhkaDP8R2iMuZywQgXdzSUQTMZRCDxxRPgDVA586ZWb1X",
  "key22": "3ryiFLCvRz8qsveetJGsAWB6mAhz6UVyVyPgJFKZEyz3Rusrh6jGP7Fk1iFzhXCeiHMfp3dvu23UUU9haZ2PXRtH",
  "key23": "4KJaD8NwRMRcMekd5HwyCnK7EMv6rR1Y5KcjEafC3jE3Tzbcx4j6vEEPpT9aE8hNEQvbfzRNayntERoZpcTWAMHT",
  "key24": "66wmX1cWK5ZFScTHwrdfBHzt8mouye9NPTjCWtFeCsijipXSqXoBxiyWvMeGUJV9Epa4Pk2wpXnNBMjntiVQWtft",
  "key25": "5QVf4gyCZD8Gf1ZkLsTyTy44ei7SGKenU5yX84cQMDXXQoK6qUFYNCJgnuZor91XzyHk2WsHNoW1bTeYKPgk8j2w"
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
