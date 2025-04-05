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
    "2qFCe3UTrsco1dLYQPUy7wgu1hobQM3Uk1JJWoE4uHwmKvEcNhWs53sQqR8Yw8zK8jPmhPdMjvzKV3qg2SGuww8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bC3Avzes3EDEC8cqn8MwnaCX1Xip4Trcps8zqh2LUfv3Y3BCyzkQUP7sMdhTgyATEYRqECyMPwvbmHMUtTs3tQU",
  "key1": "3MRH7VqNF1zuAGrmQzSenz3uexVd4M3Q3aVbScAvHwCf7DzJtfg87hmUybZEYB3CHFczMNXf4GcHYTKpnXLxs9es",
  "key2": "3MUSCicaE5sSagj8JTpsHwQXRhsy9TdKyxbDAhgXWoUREZafjCraoa6vD5eAs5Sn7BDR9tazPU1jTqJkNuQdBnce",
  "key3": "4uNkoWj1nDqWqmGMXuC181azNffTs9f2T42owbad5iSKtSLhZ4NXn4Ni8yhSzPBNkj6UBuAWzDe1kYqgiR9LuH5J",
  "key4": "3QidEcC3RLh7HTA869e7T9enEMg6FZMFRdTjZyZH3U9bapnf7uh8qLnrVha7cjknNfgcweff4bdA62FWwk5Gap5z",
  "key5": "23WSfAbU4moQfm6v4x5KrTgzff8NCbaAs6KYMuKz6rKFj5HS1mggCwoRk4fHDxf4tZDCKPkumw7ncWNcbg2KT3vM",
  "key6": "544bKFEaE3jNVEpjn4qzDBPdo9mswfBbopxMGuqUFv8gjBWft9ABPmsHcRGheurCrdCrWJeMjNoTuo7JTc8NEDSd",
  "key7": "sMSFif3MjUgThhq29Qrikw4nesn936CCij1WXYjwozr5DGNexJwwwxyPV3JQCdUgNgm8cow6jy6NosLWkrVueBx",
  "key8": "62v6zrvWAr3ZiGWKy4cSFuwq5tyZxtDMVXuzRKYwA9F7uo5tfGLa7okhn5rwfUc7F7o1Gyd8dBXSkGWj7t4ZeKSE",
  "key9": "4s4C8dfeAZY25KHf2R6fGX9s68jrM8SAYz55BbaCZnDDVw9PTRuNWUBcuZLC1mGasU5MQ7XoD2FEgVKZ7qZoSa7R",
  "key10": "3TqaAjJZmLcQebSnjjoEimEfdwa1RCjXvcPd5LgXA2YRG1c7V9rvgy5vmataixZn1Kdb8QYpTbrao1KTjuxRNB3E",
  "key11": "2CRsaB8xb4zWwBnHdSSG8E4HpDHsPSvQWQ39zcXuWRXrxzsyef2zfz3vyaYj1u3M1dyWu1Cqdg3ut2oHEqvqK17Z",
  "key12": "gAypLhgby9dSYJiWxjMq6WPuSfFALP87QDLkMeXvMMmozLJq8P3wRZ53z9MpzN581cTBMP1RGsgKmVNMGmoe3fZ",
  "key13": "5fjjP25RTD1HRjcZAYAsQKzgeUkhofU4zXkqdUADmafpNAG2kEak9rUfeUv1PwFNeXtXtB16FPmFKby35gdVKTWe",
  "key14": "3W5iwsp5Cqj4MxfuSWzjVaaUcHZbnAj1n1r5ZBtpu3FRGg3njZ5femUoZNX7ZsWBHYfqNARV3Msb4kTT12kjC1WG",
  "key15": "5QVJYCa1oqwx7EEETPEXhEZ7bAf51xLVqCNL48fwMZmq3PeGJJq4mKzfPLmeyPGgSwSUGtGretvnfqVgmmD2Si7Z",
  "key16": "Ux4g3Y5jQELuJZ3r231sBMvpczEHuN2aUtqdWjk11xXsvdjK6xZs2uprHSWmDvPnkwA2ZC8cYDH8tpDZJhgEhtc",
  "key17": "5auBaWnUpPLY6iYCjZTaokc8bwH7h4CEUbWZvapwwh9CWRmJK7FTwBHVmQnvReb9VwDXquikyXa4VihEXyEDEipK",
  "key18": "3Y9qLE3V3dBerivSiUeH9XKrG4GHnqxr3QYR9AEHDNDzqkcSZoer57vcCXihCzmYDhqSsmxorcKNLHBLD4onJZEP",
  "key19": "61f4x3DgHs43CEdeAhEBfW4WqFYbejEafEwf9Z3f9wBwQNBB5XoTckBoeDLZ6n5Y5yJgw4RueFh4DWAVaQVfQs2V",
  "key20": "4QxmNdSSeK5WfFhQphqTy7bqvEyNQLBiYrDNB4GETVbtqivDHDcGeSte3FXxorqSxp31KHkuYEsFDtjWESKhuz83",
  "key21": "5gz2CwHns4Sz5U3rkpPPFY6mdDXR7jJqpStdczZZTcdZ33Y44JzXd2KKmzZUW6iV34d87pN6LRUxUVW6cu3ZuAxt",
  "key22": "4a41STHvuH4qwLHU24hDam2YUGsDyemayhzYHmDfgzGDyCECLvU91EUno6edLWiPHx7SjA2zwy1pJVSW6YLkD3kf",
  "key23": "3D7dX3uSmDBbJ1pTriNd11ufGgNRndwpQVCjRqnTGQeQFe4YsWoY9iyb6geDMDCdwQFmwTsvpG5PRphcsxZvNLAz",
  "key24": "eSCvYNVWkGyCXsckgEFG2PR59QaS7BDNXwFT9618V5eoujBY8eRCq9XRbb91vmiWjUR6qP6tEvH2Tp3yUc2kaa4",
  "key25": "3RojcCQUwgEBeaRKnnjr9MrFwAXZ2XQnx8Zj1N9gCzw6U4j8Sbar5RADLKBLB7aPdC3RGrR7cju44XLdrmBFrD95",
  "key26": "2hpaFuVaY7nriW42eBQ22cQhLCNcLX5uJW6PvD3uXwF1LAiFzHrYEbzxViJsHL14SY5MnQcdhsGivTez1zknP6ej",
  "key27": "4ftpHosyEBBe7StraB4VVUe3CBmHf2dzX1CrnapAMCy5QyeTAM1KkKWMKb6HD147LJJb48HDZpttw4AkNHWd7o9j",
  "key28": "5TN1Dm65bfx6HnCz2b9XmSKSYF8Er9SkohCWnCNzQHoyLt1tHr1z7mXjcX22u5ByvAUD72BRUW12FBLL5KVaAmnk",
  "key29": "62biFLm7xBvJL141bRvs8yUnujNemWkcMyiczyKFWKmBSHTKvb8EwKB1aLZVZ37R7ubnx5jR84bbuMCG2tKAvpNF",
  "key30": "3yho1tno7eF6JF41C9qJZvnp1WpKkJYigLRxrPGtb9JKcETAP3vbsgpUpmRASXga3ixFhRZVwjdVsSg8ji4KUvx7",
  "key31": "4b2zD1aTrPWGQ7aJaNAbDQmXh2EvV7igLFX5JGZRezP8RJ1Fp9fZaCG29zxvhZnTMvmdVAHWM27BPb1FrMYWwFi3"
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
