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
    "2BvEKj362uXCmhh6A3Mxvab9tC2EMqrFGCs4fHzkBZ8ceSFwDm8cUMW8znyq6yuDbJPNR5PFszRPCTzFgf6noCof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kZCpNe48xJYRBC6DZRBdrjDuFR2RawmtQZmHzYTWkhuEHnhHeFEz78GA8kTq1qzvvY7nSUGzJ1N1QQSmkzcJ2hV",
  "key1": "3j3QmDCBrz87fAPXoYYLP69oMSzTkK1sUrCvtqWbLF3ZqnudmCDt62JWvbcigAaj4HZQBYcc2mcdEVNbUQYjQTh8",
  "key2": "322ModJfssze15Fr6oTtYnkSQuUCiF5XZZzCtLc9TC1kcVFQq6vkdXFptvyakw98tefV3Xvmk4goZV3d5BKq5nRd",
  "key3": "bdMafmVGVC9YDd4mnRsogmP7mWgFRKgCEFeTin3UufkuxaYDZAiwQjCHsYrjH8g1YUEUyDEK7vp5pH75zpkYvSV",
  "key4": "2iLrvys7aUUsRx6676sqmFvZGnVRbRWkw28WgiqzDMZ7iE6JkHFrjicuN7Jbd18SdmSjUzbiT44eN2zgeCrFBpr4",
  "key5": "3KpoH4ahLMvik1Bw1LQ795YLvnFe8SrtBhg7mdFPhUtfoQeqrxRFsjh3eMf1t2cT16otHC6pCU4UScyrqmUYMtTx",
  "key6": "4g18HaEwVw8agLV3UybpLnWUobhaXVwfe83CEcQCC4HqzUECVQ34BP88tSBJKJu3yrX6b3AdhncEM1gRtbdbgopt",
  "key7": "CWVWunXuTYedAnTTJTgPrLgRpHEZ9ASRRouUrqV5Y8URwrYD2oVjhCiN4LzAuMLMobzECZmd1q1nuqqRMGiufqv",
  "key8": "3Cd7okfnBGwZeqKZYJVx8wN8tjDEk3hEWdvnfpEiuf6jtX1Vg56YpVRNYtboqiky6V3pK3mGPTHMiXkXMN5RM1rr",
  "key9": "5ysLUi2pjg4vdkp7jXUe93ZcsdZfZNxbYz5JmCgCmNein5J556THiVUQ3aUgqvRRgk5QfTx74Y8i8S2vnzWpjbxc",
  "key10": "N8HpKcUsFwF9RGNEPqYddahirkadB7UTnxnQXTx1WCrwfauufyxoG63xddoZPjUMi6xgoK5J4jeH7o5T1xzW9Kf",
  "key11": "5wCTTm5vX232DhBBVRrSsvrzjgTUFZH5otKLQpVAobxQtBqSgZpP1kHZBSrp5jrkZ4cepv3oisj5hvBfVDecgYmT",
  "key12": "4M7XXg48vFbrMp1JyEx9468w3g9Te9mA9prENj1d8iUZConsrHEJK3PZSqfKuDHKzEo5ueMEwVAwEGW4fuYoMPHB",
  "key13": "3fDYgjpYvQVEZV4znvZqenfEfQxL2bpHJqjHWi6suhwXP4gZYQPvhMhSTJkqbqicmUpEX4Zh3d1ifnXGbVwdxfXh",
  "key14": "3ZCN59gTKNfDVU86hUyMeRECKnroyJMFD69B2vCMm7h9Q5vsCcrD5GW4UGJTGhTVDtC1h51zHU2aReWQKRKn6DB3",
  "key15": "UKKP8sivdJWstQ5cr1kWqPkQi7MHdnH1EHEcqQDh3ht4NVX5rdSvvsz5BSBQSCXtgCGM35swn8Pc8aBMDNSyRpx",
  "key16": "3wg7m3ZUiKceij2NErTy7tdYw89YHDZ2KaX1aPyN3LdBNDDPVoaG3Jozh3cRrjkKx6WNRedcHTCHDEMkN2e5ZGXD",
  "key17": "2WZvjG7pazwX2sgasHgy1mEttDHeinekEqmAHiuXoEfEUvHCLww46X7hCr4aoDyiW5ZhcsFF8MXHBGZ62pPXx2KT",
  "key18": "XhF8JW4mEbzg2E1GTJNVck4YFzCnsEuxfoYcqVg5HMShpgoeChKoUMBSpUGY73RTd1qYJJ2XUqikiVxtQwQTqFr",
  "key19": "36aZccyznPf63tqWfnyZxSJ8LiiBhJuxotuBV26aHKStYzhZFQKgSyxtdf7ArCvjMFhAyo2zfJ2ERVg1zZFtQf8e",
  "key20": "4puenipgN4syF4tdtMfUsaMDQfS7h937Yz48VsuY8EMHyj8EfnRfBBSXm4HjrXxYFNbVHHpEVwRtd1ckaZzRWeJs",
  "key21": "2k66WVGwJcmLEiQq82apFdVYZPpE9HEXG5n7HoDcjraoAGQbpX1TKPwvp1xptSdPFy6pKdKT3UZt7L3w2QfnkNHq",
  "key22": "2ak7cQFh6Jpa7YsAbXn9UGA5SZRPDjsA4ydBspSS1P4QaFTrxbTQx1tzjQdJztzCrErDt2kpK6Qw24nHd4uS55bz",
  "key23": "61xrvNPuMLHWtR3qrre373uE6ejyf8raG9NCKXQbyc4m1t1pYff5W3VtWqJsp4f3BprQGkzMGDRzUvdYyDaHc7Qv",
  "key24": "WZHDFEoqVpCmYLqAHQHyDDUD8nnHqtc4SqwhTjNUdfMmfM18qiiqNmzrsQtmDFrYsymc9BQ111ugAqCXSoLc4hk",
  "key25": "3y7zJ8fDTMieUThL5Zk59Cxvat4A89HvXS7dqT47bwsHtA3XMnpQmsdMfB6pDhZJsPTycmsikv72fQwrNEoDJi42",
  "key26": "ZvXR7VFNtsyrKdR67FpVwRtAux2zMu19xj5tmWkVVKDCxnktAdiYBTNiMPvH5euEYgWFub2XfWDmhAhnsCeVvRk"
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
