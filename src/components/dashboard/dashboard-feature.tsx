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
    "5ogxXtxCS4ix34nv1Lzb6YSvvTfx3Pgd57fSYjtAoXZ7dZgADU5df5b89udRh2J1nKsb7Yc9dWgQ5AtTicKLPZAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AUHqCLYiTTkfCYsVQmAeCPw6ycVL7jduutBmfM8qJyHFPF9CEHsnYbhHftaLd5HNDbKr7KD8quDZeCLTu2kvMRf",
  "key1": "3axSKMrRTKbP246x7UykzS21qWAYuQ3xVDWieRy816GyJSaTCQpbqdHfy1d7FESBJzk3irRGn8Rzy3SyjAv2mRNn",
  "key2": "Cd8goShrimsVgeYtk9scW3ctWSiDKTHBET43nZPm8nv9UW3wXfgoVpi3D9sX5Qqtb2WHDHimbzSAUan6upHVLF6",
  "key3": "4iX6DSrXx2izyHwr8p6jepVerLFPBq93mW7CgWeq6whBraaXvTFPviJdMczazRJhRQWkEpi9YVnpWdT6WyT6YwSQ",
  "key4": "56EZDuZTb5fz6t6LvaPS1ofC1DK9ekFDBZoPzxQCG5AubdEpKE1JYhrGkJ6PQW54kcVPTzbkYi9HWRjrbArxKciW",
  "key5": "3RMSLgYF9mvTJgftEJQ96KSsG1ZkaxuQmXJaMxLrBYjWxgVyUGxgxnV59DxWypEvYY7zgeoXZiZBkamjMnXzW2ve",
  "key6": "6177rbK2FhRdeZF4Jh5yhgEnbrMUikCahTMkf3ydShREvi8szGzMsLYUETkSAvX1mhkA9FJNaDaHFDGAxKrZVDX2",
  "key7": "2ei3SccV5GPoZUmKLTyGBeRN2fFfCFe5vEFBzScrYH7JvXYTbGY25CCtco25EFkRLrjagXb72MfAZq8xa6BhzQZj",
  "key8": "4RMyEFReKEPaHSgQjG29c8nVnjYTuhucgD5rkEYzoeqosTYhC38Am4y2vhfQfKFJDZwwsEADUpC8qjYf2Asgcwx6",
  "key9": "5Ub1zevvrw3aeDRDcJTvAUjrShi1HbQJmikr4q1KsSy8efxpnbXkBRH5vfVkwYRwJNffMryF7rFc3xx5tvZZo5QK",
  "key10": "55L5u2d7Q8yuRudb6dZoYcuKG2VA6BoL5p78Z2dKwauoxcJiXuehjKzm6DBToouWGBzUuz7M99sFYv81iaJdRRPo",
  "key11": "365s7LdmM7VxJjMG4p4GoEptyKdU5ki7rWK8ciPYErtkZnfUhTc21jwgx6myeeDhtxkXdUvNTFwfULFj4KGPD9as",
  "key12": "3PKLiS4JcY2nLPhNzKt7Wso3GYUmxkffZcAxFRnyM6KgMkigcsSS89atqWXVQWxGfSsSsTmRK8evEBtXMSc4M1bb",
  "key13": "2hphugNuGP5NqV4MR3suCoy4Mw6Qyt62omdtdJxCDJGu9514ikhLJkQPZUoUyd4d4umpnJbUshB3uCtrj8f1mHzT",
  "key14": "3QAeWKs7e6VQNJDADxXKkcwiw7W2fDGf3Mt5hRnTnKkH3pv9WM3oD5sVXp7i3pmxCHcQmNGBEQGgXRJiPY3mnSBu",
  "key15": "GmcutAvmgPFS5Ua1evCT3bXMWPDV3h1xrUoJGtyRL5RwTaNEJSVz8JjEAbz6ibE3XiCpnALjvtwnVzBzhWPDi19",
  "key16": "rt5oukttkjNdXeYwJwAFxRmeFmqiRovNMpjYxmk3Spn3rnMgGdLoRvv4bA56K4ecNvPSQBoY1ZEDjAFyMfjLSWq",
  "key17": "2EAyXouHgJHDVB27kNrVL2ZHDLHDdExd1akB4Q6653L45UrTrULnYfusKzpANy8t1nzjpFgf2Y2xMqpNqCf1NRWK",
  "key18": "5a6vStXRT1AziY9A5NfCoCWvWhVzjyx7CePjdra49vkQQbKSe4CuSi3j22omqtVyVeaRhV6x6JjozAAJHLfSCaT7",
  "key19": "naLSNRPsDp1kUEFNYPLqcCP37iiJ9vTLdJ6nnpegEWyWqMqcxGnRXRMLQqhS4mnybQA29ZBy4GH3wfXu4nTboGo",
  "key20": "61DE1AqB65i1S2dDeXzydHdUQ4DoAEVG4dYee7aNiPxjgzjKeYpxFYnMwya7hgintarar96hRE7Q6JBAeKEnZ3Aa",
  "key21": "4kV6dZKHqZJi5iF71yYpgo2NA1waHpK3NHhEchQgrSv4eh4VN9WPCsKQkXQpmReoyAJDX5tjR7q53T9gGdpGi9kq",
  "key22": "5MZ9cWzxwZAK5C1AKWof4BESWq1C8ugyMdUxBGQSyDehYBPN6fVjNncwsf8xbjtMXh35Ma32MkRH4PLi4mBvsodB",
  "key23": "2J7So1iPvFh1xob4dwoXewUfRV6tEn1XTKHjxPrHEHiA1y286ArfoR9Tf3WB76SETsV2j52b23v2gXu6oKJwrfRt",
  "key24": "5GyGjMpfQupP3sL7wFQAPhgT6WYFutbfg17uxN6kqL13QkZjpPzZWQtBhnh67pUdV2ACgvQtYvBPhaNu2JMAb9qM"
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
