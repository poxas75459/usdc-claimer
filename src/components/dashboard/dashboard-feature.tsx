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
    "2kyfFWQdtMTeiNPuwP5pkJd9fLNzypztpP1ZTRV58ejSymT3woWqQq6bY1aGwhxKc3hVPyzSy2fUWyQ9YDeCyqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oNaPUicicizU9z8Tq2wxpY3k1mtTuZryGG9aY6eDF7xkAgr4YgsfgW6d3wpmHSEcCw5ahrKRp4xX4iY2qRRsR9d",
  "key1": "4V1x8FZKih4eQsiPgRe9tth22R7EWcV3RzXjVUXVunWUAaiBEHuC7aHGcqvGJ51VXTsbdh7fL65kfX51mv3xLetX",
  "key2": "jvtQ5KEbcZirQwPankdtiPRc3fTAwdS2Jby6jAkCVAQcS2KLy1RcgVbnBygmgg4Mppgbr9wj7xnn4n8LBFkFmAR",
  "key3": "2Ecp2itgeaLHwTyTnAyad825QyRM2wXrsznmgusQaSFWrrcXHg139SA9aB3cNkJFzappt9r9yw1uQh1T9hJ1piz7",
  "key4": "6enrRTeJwp3x8yBE4KT9wH9XA8d2qB78DR2t5k2bhcB7qwreBU6itQCdVmsC8BzD7QRm2ewtqJqzjLAczUyoEF7",
  "key5": "5oYKUujurfr9Xsbx7mfgswXGtqkE2N3H8xGHoma1qFEqwcFFuddgzJj7PNtCfzRL7Z7xzq2o552QJqyDpB8gnnQC",
  "key6": "4BNgL2cRujcYAYCUdCdze5MCt2NGS46oUMhW4rk6YyTJpeH78LN6RrNLvEsBVXUER1nDGia8HrjhmbCKBwsZPSwF",
  "key7": "38SzTin2FaVYHWBU3hjnEEGMZ6WZPvB365Gp8n4jTtdvZs2dkhGrC2mRbnS6yv1kPE5BCt7yyYnvk2AfZd6fZJf1",
  "key8": "5K3Y3WGBHkuMm1bVhzDTUbPN3TNrXVcbSVS8exbJbqesTy1na5vNNsi8dDvMysjVwJuMbf855kpErtroXehcFKuq",
  "key9": "366cPKEDcEUZvu2qiGeZiLq89pEZ47Xe8e9xiGbVqoRXJSRdM7S87obMSMNCjcw4vP4NnX7mt21LkiyeZaBbPiZh",
  "key10": "3uyUJf64YjboXPnnbXEqFrf7QMtL2qKgXr69xNSsHJrioQFcwkLYaoMva7aZperjnLuaKGk9BEiF8ojeb9HmqTtY",
  "key11": "61MfwbBf3sRySK2DJNTenzcFsrQwNw7d7JM97NadjnWHuniWiyrkbedP77cwTrmU7R3wn3WepUqDcLVUwAVv9E6b",
  "key12": "2nKSzg6KxZKbb4Pi3yax9Nq8DQRF8jDh7zmqByQDPmwxW4itRCTmULzJWoWWzChRQXXAcNEKyoPH16TapyceoBZV",
  "key13": "4zKKG9PTmcBvaUkQoXdGPupoxJbLFcffPP8EGnqUiLJvoppaBNE2ZhVm3YmWwz1YTM1Q3RcvNrB76PL7ZYSA4hRQ",
  "key14": "3pqotPt3k1A3jA4cDZ877TERjcmPdmK4654vPYpBrr7vnJAbLwhFCQHNAgQpahmaKAvkQs2bp9rYagBypxEwR8C8",
  "key15": "Ex3mKJUC27e3HBGypqTQbyj426zUp4C2JgAVBQ1vRWXZ7sM7WFuEznFRnpTbz2sMDRED79BV3HstLYH9qt4z3hM",
  "key16": "3Ug52zSJWcTmt7AUVj25J5vHQWeb6cW7h2XFAWRLKsyoLvqU58zJciiDy5TyofZnBsYwk2qHJF19ubsNWPHAk3kh",
  "key17": "53cSNCszL1N2tiAHaqnXR8HNAD4TTJfKzy3TJryQ24qy9bn7mNm8wBsPSVTSEkuVvDxPJ4A3xafFcnVhgMH6c4o7",
  "key18": "3taRyDabxGut7CbGkG8xV5hzxBEmWLGNxrfXamSdrdzquxACrFhF7euhaD4N1Yv5TXnUmKbZ8EVyGk58JJc5uuRp",
  "key19": "3vmMjUU4i4VddHbCTdxnEBngr9e6bH1LkLKj8jYM8dNBAARcXJSXiHPoRPWzHjQnoya64ho1ZQY7W9L1waaHN1K7",
  "key20": "ZBHfkiFvtEqu9THSTkQDLx1dkPWh5Eez2dPFAENmtjMyXAJ5NfVMEHQkYeLjoKTdHsrY6pNDd3p5yYQBoyVNisU",
  "key21": "3VVfSxZvra7Le9gk9AgeWvL8U2eWLhKvVw6JmgZZnfzFrgijBamigBZYyNdodAeBPnwfFZWcxQp4if3N2NA1gzQ3",
  "key22": "4q5ysZsHAnZZtWHXbNV81J9t4k8c1SSFTbuAMb8gAuortJjtdsvEgU68UYYbDHCtrcQWdJaHqHgNC3Rprihhzj84",
  "key23": "fZBdbS7Dosd56AhFLykFwtCrL1DUF389Rzp2WgFK6taBa1BcsZLYQunzr9P8TwXcaXaL28BQMG896QjM5Genakw",
  "key24": "3og6Cqyv6TY3HdKLuLgfXisNxBvzRhQ6h4jf7RBwYan56mEBE58GTy9TYAAseNtamuoE35bpoCjNqnvy7uCAaTA1",
  "key25": "1gx8Cx5iMic8s9JoTXTxFaS5Pu2ckqt23tSNWi9RXwL733J72bj3imZmk9NwEjsYKKBjQTbdxesqYn55fi1QUmT",
  "key26": "fnMxbGVcazhPfwf3TU52DMsccTQ3ej2FuuZ3UfNykZkPcbKWMWXXVsvSAUBfJAe13P9XVupDgHWQRe3pjr9DeBh",
  "key27": "2Z9BTj41chMtn9Kh7BbCSWFtuSFRjLf3qcxahAvxvrc3Hk3hkVth5T9M7QEV8YBvtfxcJGB8zpfGZUCcWzBfW5sn"
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
