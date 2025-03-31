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
    "2gfn9ZsDg7hmtVgY7cHhS4j5PdHMNmnxKNwmbaKgDYphrKfzoR85xSX3uPC6eSqP4JkCQheVSV7B7p2QHKb5NCJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31qv3PP8REC6vzFeBbkLLCejDitBLHbD8sbj4NM55G4X6UgVA9nH1LTeJYqm1yi9vCNc7hKL52YWqbmLEETAVLvj",
  "key1": "CZhxwfViFtTv75JynuRC66yWQHANL8MkAq5vyf5n9f4K2umBiY46v6FHosDXXRiGmvrvj4QmJs1zra91zH3xppe",
  "key2": "2e1rrVitGM1YkoaAQUmtQ4Qzh3T2z8bf5SLn1WV2sRwHKvJ1XbWwk6vjyta4XocCkWiB9xqWtb4oCMZG91djd9Bu",
  "key3": "q3gqSX8ifDYCmWMB6ECaSvNLgei7vXswCuVpDtJDbHpraVejqzuHi7rjTsAiEVqTHTeDuQVHpNPsmykExxPk39Y",
  "key4": "39fUfsbTNKhJKn9EAeYAvBCGKXe982MK6jHuMfjgyiDrzvqGj5qtz9cBnAjnsyVSQSvBpBYQhpss2Ru4atKBJUwM",
  "key5": "2aiuheb4Kg1b6QLV5vDcHDsBghmiAN7tcP37N9mrFRYNJXcLkK8MTL4R3As6MPRqP3CxcCat9wdmD2p5Xvttavhd",
  "key6": "2ShJp6N48SvoyrLde9QRupwFTeNfd7wcf6Jicgr9sigFzedq8JdBWhJSVRsQ7xYoHFs2WaxdcaBXp9MJyfAS3FdE",
  "key7": "5RvnJdA8GqhUWtRe9jmvBEQYdpg4G9efMqx43t1p9QJk7eREcGs7vE3TBi2WtMpv9iU3TJouiS4qjWTfNTiS4R8M",
  "key8": "3Em5nvuMXSavyzuKXWxhnqESRgxnLMrHq3Vn12MBYYN9ed3HP3DB8JruhAioVfcXt9fJk5kJBiXtbGjYJKQuHph7",
  "key9": "5f8hx2cSYZvuLyRF55M3VGgDY5sh7vmE9Rp9LcEki7SpkrvTAREgRxFS2wtZ31tLNFzWUtNMMM2gP6LodMU8Jkyn",
  "key10": "RNtvpXE8dprMETrgWaSx7gANMf1Xpjy5jJNeVGJrd2iRuquYcWcxiQDUmxiBpCRjxJVD5NKnQBtytbUHbc7Tksz",
  "key11": "3gTidRXXUFTcMAVkMDD2VEuGdYAQ8WtTx7x8EkSNA9rsbMPhMZavYT7hPzfTp7ZEKu4j3utMSK3bYFEbWcwGTdUY",
  "key12": "R8REdDQ5se5f35NRpM1rKEAxpSgMrVxEEswBT8Sz4yBq4HbUrnRYTdezUFN6UyFi5T8vn3AiJTSGpDYRstaq7VR",
  "key13": "3fsv5hUZ26FX49P3FURrY9pf4jkhieHNDsFj4hXNB8xB3WDVNGHQ1bguoofMx9Ey1TD96WEsH3er4gJM5Xks9gby",
  "key14": "5DCmmLKhUUT8cwkowKAwnXjSstrszyMn96F6kU9VXcjQSLZjJBpis7fnnNQduvMZn9oXtmZDJxQZdbgNGdxT7s62",
  "key15": "65vdWfXaGcc5F29UkFdTxQxGUVbidy8tvPGU2xvZvCdTcZ4LHkeYsvxx6FD6yBE7s7qE5CFfMgmSoEmPFCQokbQY",
  "key16": "7Ms5ASujMBWKZPPjphb44W5firTeNeqFJibyd7gmqC8SweCAousnSmmrXy19AoTKnJ5wVjist1yCgz12p5gmGaS",
  "key17": "4QuE3cdopWiseLm2nWebcL8L2LfGELTGA5YbL69ZzG4GTrRhTyLhBvWiuJFCi3YWNt2guwfxFjfv4QwUHm8ysXJa",
  "key18": "5C3b34Y9jAGiUhE5UQF17JKA4HAcTRjPFBHQ4WVMjkGXq631mwj9s7m3f9TGr6gRdxXnNuqMx7Y6hHGxteDXPeKq",
  "key19": "5GgfLyGDJRZMycNRqfG7Jb2gCP1KxK1ZPJVsVaDn9ccwPoqafqEfrLU2kS3kckcQPwgfYfVemhNWHNYyVuUogkUw",
  "key20": "5ixRXxx3gRP7BeqQ2YVp4ykbXpJmKpkxvEVcx3AWatdVz1oQ3jA52ZWoePpMFGq3gKf8w99BUg7cj9UBWDQZo4r7",
  "key21": "2ysQz7fg8st9ss88DQsWqwmzJE1U6JBW1hKzEBP29VTU5gej3McKLiaoQ1MGaps7QSYXUhfJ2npfFqM5rv1GngJR",
  "key22": "29v22cJsGMtPCfRgrfZW4jYK4yTavefCRUJDABQpAVe9nGBvQfEPu2juj5beuKiPHvUiKE97rxvHW8i9yrrXyiNk",
  "key23": "3u6PhU6NJdNod1nP5nUHX7sfv5AJxXMeek993JVC3k4p4mknw6TpwuhZDkdEAE8hCFUxeRdUVVBPVhcqo2kdfJXZ",
  "key24": "3kL8PQEU38CjZHxX4xDNnWGGbCQtt5sdzT7ENZxvkukqGdjnmZ1qBdoUNVohtEYF3tz7pJf8yhtmgTzmHzeH4PPH",
  "key25": "2uqw52C9RPdeGK7qqus35Nb9UYg6BwpAzeYvdGTqX13y3DTtKJSHKPcPRAnkn8qJiLCjbLtsqXfzTyJFtT9wgmAB",
  "key26": "39RSdVQyX6p7QwfTmG13tSGyxtkDbY5rHPAhkta82qNYRipsAeYLrBeA6CH3VGFGt5YjY4NFdcH1dYYb1q135K9C",
  "key27": "2nppENvq697gcKjnhsbFqTGaJ7qqQsAkBaFE4cD6UxWDL7Umr1yYbCQDKB6ZHuy864VvLkfKwoqvYyd7B1co9nZD"
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
