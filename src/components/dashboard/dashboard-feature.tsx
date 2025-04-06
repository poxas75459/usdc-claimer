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
    "2eYqnCSNgU2UYhQPNpLuCRbJabuG6wxSBQ2gvkFhDke2jkZcfxX6DmczDv9RoKpr6SLXuZ4XGo7tXtwpreAFzydH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dwskPaokNFLjWkR1bqz693XYtKoix94siXyhsW4ZpuKfwAVwNsViGS6VUeNz8kqo3ohFsCDTq3S92WaLc2pFeP6",
  "key1": "4piEfBxxDVpLoPJvE8FhMApWV6SJmKb5nzkC8hRQAidRAYKkPVgAVHJwHMftRxCSuSpM1vsUvHtiwAPYwU9JViLD",
  "key2": "4xLnoQyiqJgCygTurobZ6RgRjd9RRct32HyVBzctk8wziSZrRt8rt8Zn7hJJEEfSS73rMtSENxU3DtasKrKJgXaR",
  "key3": "2qos7udx52xVS1CFRBER9FDU9yqC3wfngHQhSYZGzCSoDv8JL3irPkF8tv3x5j4trR4evit8wModbLVz5Kog9NHy",
  "key4": "3xbSsqsJkH6ArevyvCa4JWJrMtsTJARF2xtkLncF3NV7AEQfKaaUVgofvHnVJX8EWYUP5vJnsBnfPYy3mZYEpYsC",
  "key5": "4LhQm1HbrRHfMgYfpPbdpVXQcrSJLKxuDCuTJ3TKAb8NuAJhr78wEomrmmaHYX1tsGX9mn8rxpyEwCNN5ziRQsww",
  "key6": "2YLGHN8BY721Pg2L2WMe1GiAnGC3Wk438Y6NLtRiZaEB4cTvTwuVC1hPhhWpF5rWrcXsGA5fw7gFxXGFAKUu96d4",
  "key7": "2LqvqN7DYcg7icpxwtTxG4iHPmgpsKBrrmwRp7xTd6QcLwzaHkaDkHR2coPFHutDkEUxP4XCaEvuC96vhjACqHrL",
  "key8": "2ms7hnPC2pmGkWd77p4UqbiJ9uNGgAtomquNW2AWrLUthenwn61vrMxjnu7xwhN5DTMJaqaJqomypQRrWFNKc7Lz",
  "key9": "edz3zhuv81CchYtobLhiLYfRhYuwEMywNft3HepRg8ucLEpyx4Tczadz4AdD8DuaCm1JK7CjhfbdXx3jqpSPz4R",
  "key10": "4asqaPNUpCD5oUNM9njKYTbuYPCqYh4K1sLTGKWKjc7nDLutAVy2zrBmkFmU4un8HzWobr3hs5xNMMQmZPejBN5D",
  "key11": "4iKer2EdepJPtwFkAVmf3grpFaqWWKoxZpFRGKEKmWfgwSZTtSgTnS5FvTccMYmb7jkwZReFsRJVCkkKJckK4aHZ",
  "key12": "3tma3rRwytju7m2togRJgVpjoZvPU7je8GRgJpC7vHwL3Mz1EyN77MFQXomA2xLU5RPzc7oZmm8Q2s3cZTd6L2en",
  "key13": "6HX8er7kUMQVajV6m6noPjSTqQWdh5VPnwda2dhta2NZYA9vDefyg5cKp3yEZUMNkKZrbzMXyYF5f9viuVFDNPe",
  "key14": "3srWoMU8cxJoZ7rFPW3PMeepW2XfDFmPu7hka5G872zkTMbHHdWM3DnBGRjzxzgv738h1y4gSVBh4BqjnBgee7KX",
  "key15": "4sszvRyhqtkmZxgcDiUbc956rAiyDAwodU7W9iuszUo5qVKtoAtyitquRxS3PdVS3gbFwB9MnkKMu7nQZa3VpZLj",
  "key16": "57zz7yePwKBNgCByyM81c33yP5v5Vs6WsVgKQKuXJUoUgpeG8QQ8RMZH9U9SdhJFHK51Tj9H9TzY3u137aRAm2dY",
  "key17": "jhWXLuW1oXYFY7thW9QnW9sqCwQWaf7jAQ2hP5EPm6Dz6Dvsm7qqYixn6Jew4d1nqJxs78ik2xFA2TbhKkbnsik",
  "key18": "4jWNRB3qRa6p3kJ6zuAYzX5y6f7BBEnV3eb2w83o5YHM5qa45ZJBnPPScattVvaZhtf3hHorxnZEqtweK5N1pf9r",
  "key19": "3C6E9t2dcQjACgMHbsQXVebifF9emngqFX8HDWSzGUVRyQQVPf6QTPm5wPAfZtaHu7iWYr3PkkHW5sHJLUDYxaxQ",
  "key20": "2LBuykb3SFR3jJb6BvZAns464msfmrtE521XKcZsq7i7oq7dM5jGdC9Q8WLU63JcfW5yfmYRHHG1rBjh1BqN9YsQ",
  "key21": "4s6Lj2dVuE5hcbJZGeLHvPUGP2rgtKQT3ZqqJESASEPb2ybXfYPUtAAYUy8VCaFKJTvnuSagmtzB9X9iviFuvicA",
  "key22": "5nVF3SDZqwsYSuz6efLAvdvfVQkp8bzmsXUtPWMmt9uUY1U772z2Pa95cuchoSCZqU5CeS5jgTiQdFm5YPWLTYgW",
  "key23": "3BdN3fqSHBkkXeovwnkH2r7pR6wzRF8W47HwJiaBt2vP12tqHfkaM3XgNhmHh8PjYqcZ4kqk9MwtPCdBztNm8DP6",
  "key24": "5WttFQuFQ7wvtvu82kumwKSvnccEPWdVoAXTpXyXk3cFbZTx1Pa6UU6b6LSNfvcH46sa4eR1Q4v8U8DLgkYqkKW5",
  "key25": "4z2EtdQqh3S7d3oSDnf3f2uGxBsGh8Zy4q9F34smsqrsic5EXfG6Yru3TuPw9JAu3rabZL5TYF6GqjJrbxxfLVc2",
  "key26": "ddRAuWW6E1t4jQYVQhzRjD1NfEtVp8PBL17z9X6hUqLDChkQ9T4z5EB1eyxxXw9hGwHYuZx7ap6WBS52ALPwei8",
  "key27": "4WRvjmcbqGTkm4AYKyxd3kEfBQA8eyNwyuu6fZzWjP9bfqA2WSRVLmPPwFPCst4iFRcdFv7tKqMfRf9GZ5rgJuEF",
  "key28": "3AZkW1HhKWxXxcVG6cKNyAPNp9skDuqgTV1H6dT9HPwRDqicU1kNWjzWcR3D9dCTYQ3NBJKvaXUKgxeDmKaPedxb",
  "key29": "S4J4vr4Sf2gpBs3oSbXLTYBVZ4u48Ldff4cJAWcTJ8kjgTGnFrt4yEsdAwujdhTe9u4UG5Y8a7yLFJkQi32Kp3v",
  "key30": "5FKuscnBHthpAxUKfd1EkdkS77vvc7EJvV9ipsLasomGbqwyC7yaAXhUbJuzjyMX2T4gzwLAzFw6qqfLh5xwm6Sb",
  "key31": "4LvZaph5bA51DSE7AVCEQA6qVVMLbo7F8YgVgEx85zykYky9PRjEbqZ2PrzEHY4BHJMfhSicGdFDzumrduz2m6WX",
  "key32": "4PZ1ACAW2LwvtpRGz3B7wFCUHjb8sdVvC6xjZRtsYbLVs7EbBiLHGfnJvnKTa5aUt89e7746LcoRFwfxvkqRbL6j",
  "key33": "vDUzEq8whc3FCuiza2ddnTYho13jGNuFnNH6awFh93BVQU3fjaDUjHHM9FBkZ2zLmv8DKdMjJ9Eq2BSrgGqUakB"
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
