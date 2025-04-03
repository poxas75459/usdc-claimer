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
    "DeHFWQUUf82X68gLX4MbwkfCFQ2EgdNav3gwG3VMen9rC3mzYJBULonjHm7tTQJg4s1GGMVgKCjo8qNtm5S965k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bDjZS8F2Sek66NymNHRTZmbCgrxCZCBL3dgQu69iizmHVxheYtMiFrAmnPQtTffQHf7Gd6j3B7LTNgqwvDYrs2b",
  "key1": "4qM8mEG6QcTXQHG2SpcxcYbyLgvLZvXWc8nDpx1NYUbwsUnZi9aVSYJyTGsuCtgehZkWSx23uDj1iQa1KHPJXyfS",
  "key2": "3Ngrc5EfTUx64fL6k8XAEAapQfmQTseVrvNfwF7XbyJJxzzJttPnv5Ba3TQtRCneiBUik5S27Tqzfca8RovYzow3",
  "key3": "4BLWceSg2ge4DcNsbpbi5zU2Xs4D9Yr7XLs6gGVAPk97ZVL9zQWWXFAqEjkEhzeeyVPTwKTUQKkYrtt48kegm7bY",
  "key4": "28FeuPr8Lq1sEsENrfPjGjBzKvDeFfQpX1G9TGrqbR8GvGn9zRoesRSthUzKufoBB2RWmiaczPPVVYgbpiVQgZLM",
  "key5": "67Kw6Xt139VTugDjDZq9uo15z39V2ibbGuF1UN7jtuvDuFzETCvn5g4KG7sQSt1UkQdznZvQYugMvznS7Tn6NPpa",
  "key6": "BCRFhsxCygV51y7LNTQctZxBZda34q34p7ye9odAcsVSbhL3Uf5NCKcz7menMdGs9RofAERPfMkgZtzCuzJPknZ",
  "key7": "2yYGaW2eNpPLjNrL5mgn3QAsJwpNGgvQGND83TUQ1p7uxHDxdAXYRiUqjHSLqZjfBbQt6fQJsXXvY4gjMc8T5Drc",
  "key8": "2rJGLYcjzLToCr5g6bKcmn7BhbCRzkowHQr2LP3aP9eHamTvHEJ8WAxdqWPDEzNPWgLAoS4kYBZNWxeqnRrL1hrU",
  "key9": "5mnjQLbQpfgh2HAW7xqx1UkyPU63gC1ZJvSpgGQ7RRax1QPxUTYSs1ALwz5FXL7HJ6Vf3bifUTKsyF5n7RWRtSeS",
  "key10": "2TZbhuGG1Jdw4j76ou8JdZx349psvcEFsxQwmyV4QghofkSuU4qxGKewnYTpxWen1aAnKJ9qvkxtD3UJMA7Dr1td",
  "key11": "5f6rejjbjqJc86nTtdZjWBwX8hGXgvf9V425NM9mPQh9ZTWw36X5XbxaMgfmfpWrncciXwFSTWu3RJnqS6p8WxKP",
  "key12": "4DevS128XmWBzc9UzPKMMPFVqmEzXTz5zTPoFcp15KYJDWxNHUz2mW882Whxb9AYyQ4mfxqMCxS9eZsjoo7pUwAj",
  "key13": "4RshWEqveS7fAAMY4iZmnRgp29FX5GLksB61s6rCbj3b4351deKrEeHNtsECXav3quJv7MxnKNYKyE6ivD13nogZ",
  "key14": "3fgZhrYeKfvLnDsMJa7RyHBq7BatLzgJDV7CnKnarNhjt2KCJS3zwbo1XYBzKG8Hfq5w23mp7SGdXBd7BCT61eSw",
  "key15": "3WLu5mmNQWRbsbaYWEdR8Sv8xUW2x231P3AYJbaARk7xavLzzF7dd4BnWAhoez6ctUrGu5RZ74Mpy652ztLvvpZ4",
  "key16": "126ZjkCi8erohj8fHE3esZ5UAcwhKtz8f63rhffYrBkpdxbX6GjQzBwSWWfnr7o79orVL2k1ygpfPByqHqJAtjvF",
  "key17": "3WXTuFi66mqEam6693BdngizUjYdoEnPRnFg5w2cParcW7yGBdnbuPpmRcw8t6NB3GNpFErCukcprT4SbxQUdegs",
  "key18": "4fRBEEKsqxSNQPDs5BPPyZkaUDQUQFmhG2P65rtGED5uXyC9LaMos1Q4bUhXLx4veQze4c4Nj6fwCgw8f2oxvXS",
  "key19": "2CLuprACpnBMPVbuPfxPhDQEoL7D5Nh9cPpXhvcpjFawT7K3fMuBz8oaWSj8hozJcVba31bkueYhu62qACR3zzHr",
  "key20": "5KPS4JC4HbFyjPkfznbmVrcfnYF8CnZ5d8p9w6n4CFwGeZJkQF26Ny3dqS7e9uHepjPYWYKwqc3SedTYiYKkR4ke",
  "key21": "5cDJHvmqcT1pSWMiqMHKRmyJ9NwZVzNv3Mf7QLRzXGfF97eTgHyvoZfCcVWyQ9xdH5PN3dgWWTxZ4pYQ9R52amA7",
  "key22": "3YxVx9W9fCXn78WpmyEiW3uYt7kFXqcRNHJoRoiPU7gV3ed65fkLwGRS2FPNia1JZTfjp9bzD1ykSfZqiYi6HoAV",
  "key23": "2KzU3yESCcBDXgUmpM56Rft9iUxSrmKYfXwEQrgmfUms5BSyH26oPNADVYq9XPPgWtyqMXf4RULmyLu652FDmiDY",
  "key24": "5hQGAyYp92Eth2Fpvfj46npH5HoQeJUCRkJxRGpjHg2LdyHkvp4cS6wqZ2Sw74oKUG6iKSHp2RbPvJMGHubJc9GS"
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
