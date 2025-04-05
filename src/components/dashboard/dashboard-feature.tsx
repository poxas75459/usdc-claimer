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
    "4p5xbbT9DzpLFMG37nPG9jJ9162hvSL4JDbRar9PHEn7MyBiMRrU6KsCwUSaAP8a3P51PLrQZKgTb171CmBMxiGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tuGYb73TWv6rA5c148kt5cj2C1BbKrGhQSgUGfAZSZHuxrMzGETPPfbUmFowrSouh5NMaKBcVVcfGueSjQ8nxcH",
  "key1": "2NCpnnDYkHkx7fvjsLgUFmmXRDge876uhqWcn1mhddr4VbVFVrgx4whFcBBvcWMwQE8tEz54fRnwy8iQkJAznXjR",
  "key2": "EHoEHneVifgvLzs7uYZtBvqdnvjPvRWK1fRvVWb5x2zp69G9BTEBs28tVSiZ9f9oo53oQKvNAuN6e7rQzmZwfVk",
  "key3": "4RAxcd99VZe1gwsgoBiKmmhTx3qZA1N9ozfBTeX4kjzRR3JociZwiHLRnkDrHbR35TusTotfC6DnxjRZKSUbohCW",
  "key4": "5DixDAKDCg3GnuVSYrujPQMn4HfTh7t6MLRZsCi3mCvRVwMng1pLRc1zYJvoU9P2qg8w6pJXZew6ws9gebGq8dho",
  "key5": "4G9xLqFp3GkkHRmerRbwd6PoymHMHPCYEHjJnxpfvDvs8PqZMxBSW4i1ywJgGtJopnwWuEGoCBre56dbs1Va8Crr",
  "key6": "2A1CUeco33ofNrAvSDrFyegKcE866yD6LRXcYxFRJCUfmTcjdgKAa8dgwNmCaYFTsN3BQ43dbJ3qcHz6tqJ7SA4u",
  "key7": "3uKUinPVV96Z69ZxfwhfyL47t9TrRVAXvF82xpjDPZHk7UogECGdjhZ4P8f6E4As9PubMU8E5j2Wmn29LWZpRPK9",
  "key8": "477bE1jRA7EkrL6XWAvwk1bhz4pLBpEMqbSLBKLpdHbsF156tS7j9cruMH7fDGi9CEba1c9rub2iDfmJWpmNzTsr",
  "key9": "5o2msu9PvxNC3cZbeeE1RmgsyKV2tJRYMS4NkzNKUkGRTisRYrQTc9yztkyqcH96NtYiEwHfCQ6yqjAZtAK2wkHb",
  "key10": "nhZhLNQrv7EzzntqxYjrpkr2fBQy78nno1kqbCiB96uUzBFabMReXUFsWm1Q33gw9eZSiivv7me4bw6LAuRgDHD",
  "key11": "35T9rQV7yDPJBWerwJfEUUgX2eG4kupnqmNpozdL3Heu9JS3dputxmB4tqdq4nSyEqgBmxqFxnBhiz26s3qFRHnx",
  "key12": "55kFSNeXdX5uZvZiJpT66PaxFtykryq7uhG1BNfVw3uQbF6vwreccg2e4pM5na7eSaPiE1LtP652SjEgpQLDACX7",
  "key13": "3LLg91g4Z24ZQBsoLi8w9747aWmkuhLXzbCUVCpFm2atp19DCdKcwWdmQm6eBTGSLEYJ6GVaHvQ9VuQ9qUe6Bnad",
  "key14": "pCAhQhN2zMdEPgqwTjz3kiQV8v6PYAXwVAKUFfxb9UFJhq8fwLxTKbZGv2WPSJUmGb56qxeJSiyjvyk83n4Wryj",
  "key15": "2MmhAn7SqpyR7xBTRMydhq5rv5Q5u8iX4Acade2cLxoW1kD2nygrsELEpKMkV9hvLa7U4sRFvrcYcnkQtGvXN16h",
  "key16": "ktCE4LtZZD8DDd3xMNdGHzMc1R1KLZTVeY8gyjSw5YVwBpgZsvjDqMSf7pezgHMKbgxEciJiJxoE5xh53s4tgWB",
  "key17": "5QwA2jQkfPjmZGNojKtR28vysMYphviMt2Ms4CGQEj9GjAYjMcmXrAV5pXWiXhBwCRFERYzySuUEsiqM1S2szG9Q",
  "key18": "44q8shMMUAGtiW9wmdMyQQCWU6rhwLqL4ymBC7PDJ2qFfC1wCrb7HnXDV5HFi2HKEXTDBsCkPcTkoty1MdtAhk7a",
  "key19": "2HPgXiQkLfWUffdq18caZQer9qsQRaJRQhK8GsuGz7KTRi627bxdGmXhCQ3dXTMVAPeA7wzZHp79FE5ZByeEq3xb",
  "key20": "5AMC97Zxu8663NAsXGvJ1xyBvG3fchLTSfobPgiJmaTdnHH1xKdsYsu34i7duLQ5xtmbaJtWuvS6BnLax9SUuhGL",
  "key21": "4S1DZuYgvvWj55jWUXSAWA4YUxvZTnRXhTcDdayHKtNW3C2amUJH8TTD779NDgd6uTuLdytSNhZMU4XwbonGs3LJ",
  "key22": "511m9heeBMRrq96te6y6fyQSw39wiRtagtnAHdPDEW9oQnydYm8JTo9oYB2cz3p55D1teW3mfB58QSNCTmdVLjrW",
  "key23": "3kyB3fuZmXUa6LJGZZSGbBpbkuEsUATfUA639L912TvehNKX289gmDMdFXQUn4Cmsh5eiCNjMBq63oRgEHV4tPxk",
  "key24": "4SowR6WaCEei9v43BXW6ei324EbdKu6ytHRVS1knHdgkt2ssSNqr9bekXMspuxjKMyLhxzUWcLKkXtVrXEHNq9kb"
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
