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
    "2MoJmEUpksihfRJU83sN6nxWZ7nwJog6PVGATdgQfxMqJFLNyy38k56eobQ8JKvC2zELjCfDo7jXRdgU1WpZuRRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37J88djgTTKcdFbJ9PTqFeyZwm1pSBtSXpZbaxfHU55yBtvqJJGZBMUVKh18378gc4qBEvZXyeTMqRqZTyJN8SbN",
  "key1": "x8TJceevKHpbVrsbKkQoJe563TecK5hTsXhgimHgk9CeMdkCFiWNTaGuH7HhHEmq5sQSpVPsweQkZmYeFcUmvdp",
  "key2": "24zuSGd5LiAujT5XcBYU2agnv2qoF8oEA8nt2Zwh2GoEnhEmRKbHXa6JXWAWi2QB1RsnRPsqCfN6bk3AAtDpeQkr",
  "key3": "2ixgADVUJGz3DZgsBUN5yjurY567JGgQbnptL3UjVj2Qw2qWJG5XbUukP89WshUvRHeBwhXWpTQzgsjT7QTNqiwq",
  "key4": "3CD7S7Ms12nyirGnPa67YcaHgFxQv3FxpKYrhXJiDwq2DvmXqSnqP8QQHtpwvNoRWvVVThoVcP1nui6PGVWrWeo5",
  "key5": "5BqbsdsXEHhpPcVhYhEPB7PKPy2GZEQXQVMrEi3TqNaEUGaX9UiF3BFhdej5E7x4X8TGZmTqWiYen7aoYQRpbVj8",
  "key6": "27uUMjc4q446kzsvZtHHFuLMbArEkfLcW3SEKBG4irbDUS2K4WMGDYPu3RtaJmqEx7QBfkEtKgk8ZS7jQGkbveuq",
  "key7": "4NsMRrnBgmVVJ8agP5TW8umHXx3ubUDkTdVSEqjxUu1VpNoji9hHcwBJD8WtDG7dfMBHyVvfyZdWkymreLL5eXYa",
  "key8": "5RhG384BJajZk81yKrqq8BYvPD8pvWRVz35KtUGv2PCCpnLQDb1jZwmaKjVEJBSf1jyZMEqo95CabqvnkuDhsynW",
  "key9": "2ZRuXYMBeER8q2kgahm5CcDGzdVxdmgQHVS3qYaj2AXQpo64b3jEdHTtx2tp6jn8GcKqqgJhSRyNpacv43GvEnND",
  "key10": "5YxzTgwBStqc8b9GedPAZz8JXB5bDyRfx3rAVXUp32RdyxbhhRFRJmkKZ8aEWCXVoKVtMPP9NdPGfNZxKWH961tx",
  "key11": "2xjYsxyBPNXWRPCbr2jws85RKbqynawyVY8wqvJBxe9hU28DAHDQkNizX3aWE9EGT4eguzg1sz6cssVNrp6iPNN7",
  "key12": "3ojE91cnNtDPG2XoqK85ZFsBUKPB3hhWqWBvf5TR4Xmad9wx1vok2jgFcYV2QDaNfcRDNh3LWGRZt2i5YzhVLMR8",
  "key13": "53HB9PDdrm48NtseqP2vicWa8xfYw7Fv4mp1gQ3rY1xZXP4MeFhcrQVGb1Lnh4GvTDNAarXnVzKJek96mgFc1JuX",
  "key14": "KZcM92CGwXfpRJGf8XBin7ustzy3ksnfe2KdCRjUvi5uQKiN5WY6zn4Mv95VjCNWDdmZX1tSPdj6VEYCskNqZAG",
  "key15": "4Z5Srs1CdGSUt5Awca1AXVsheg8x3LNDGM7kQMJMN7z5QtHhk41mSwtjtmLf2a3oUR1pdxNf5DRcRPZSebpJ7Lax",
  "key16": "418CiwnpGqxGAmXksd1zPd2vXc3Fqjg6pAoRGohvSp7WoXqWRePQWyTwP84G7R3beMGp36KkDur9K9Atp46hbb3V",
  "key17": "53qLudba2TmXb9pYfFAoXq8iWv5c6CDTnmhqWEjtRCVNi5LXXbwYjvndu1peHuiS4QxZsvxhaPiHxqnA2zu913eE",
  "key18": "2n5gU39jLU3rZGx9DzqReEmb9ekz1KrxHbp3Fh2E5miWM9GXZ6KiBZtKLN798q5GQzNnGZCVjmvKqzE78efihYrV",
  "key19": "26jmexgv61xJk9zsqVFrKeRBPGKt6yj3UsitVMHZ2Q1aVpmgZQUqefFPwzRzUaFz6rWHAL7cncXiAU8Z9D9bPrz2",
  "key20": "aTG9zntnqqFmyiddjNvQ9NYH5EvpkWxZNNshg9NwCoJjqVKnzdq9m9vvAPkq3vKTMZBRBRUTYdZ9MBxoCBU5cQP",
  "key21": "5yUStMxe6dsnyLJje54n6763N1fLHcLb6imYApZz7tLZQx1d8J5b3LSvBVs5zmppuyLA65rwKh5F4ABzjj3SJqAN",
  "key22": "4LnCQirYYM2sSQrhvLwRZbJkqi2j2HJxXfRPJgBKbhhVCti3yF35HGkTzMBfkV7yVPUgkP8K3C2QhAkfwtdYeCKd",
  "key23": "5wnemCDdQ4xL3YNkeUuHNmFjhPwSqqP28MCbiP9wNfvZQnhzEnTUJxXheDYidviFGRCtvw5oeUPSAandbm13TfYH",
  "key24": "3pqDeWatYZqv5Kt9hzKGnMG1eTNeMzFMo5gK7KsDdixwiv9nq8SapB2e3QfovN7cvZ8eeQbB99brJ2Ydh9HfDHYN"
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
