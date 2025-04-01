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
    "AFbfyoc2C4GXTAqxGxusYMtKWEUaxJhRzScQZxpNywub6zKWn6ScjSuciFXzum3pAaZBxGuV9pf87rNZKw8QVvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5931gru4AUqfpNcpFqX3LVqDJGJQDombPuDzstoLS25h1N1UcFHWFoaXdxFqtaNfTsXnDR3pDqcJkBA6x3LrA1hf",
  "key1": "3S2oqiNL8jnaKGMGvTxDPrQrshuzUPswRP7J989iTugTELbAdDrrbc3JZWdoQGoGUuRgVcdFYNhuACbQq6RzVwZq",
  "key2": "2gG6Vc6i5WD5mmpYyGQPib6Tr8K4sxfaDMB9NkWLkJjtfxCpuzYTzrjUqvgJaZP6XKEumW3tkaNDXMYi3Pm2FgFL",
  "key3": "uTBUGyEeE43SGSJzqR21CbK6etirGomTkAiHnjonw6s2eT2FppmP2etvPVe8JYn1RmjHU6tz8T8FcchtrkJzifE",
  "key4": "2tbehmDoEtjGuNoRP3HpC87P7sqaNkok4Jg6zt2HWCcY7vPvyfFPMMJCwXFvA5uzqKe5X6gViKcyHC5rZbmYf4Yf",
  "key5": "5zCRmF2zwWiraaTVZNLFVmNifdUh5MKURYCsbpLQzvTej2BeEBq27Ft6Ka3wYEZTdjvWvhk8BjVkQv8BWwwqKFdS",
  "key6": "5K1HSA93EZCw7xM4qkXXxGXcKtAEPQbpZEXqD33mZGWVU6VbKJNNVcwYvZEEXdc1J2gAeW3qQy2YFmhABQqNVqxP",
  "key7": "2Ke8D4QKcrDyh2TxHt2GF5GfHvRA6kunuBxcgWDYPmZns6xndNAtcctU4ZXhct8E4pyFsf2WH5zJMx2RLFKWzPNh",
  "key8": "4WnFT6RXH2bJevkyeRqb5WWHvpDgT97spKeKVhj5T2YDSB5XuvSUJqyNFBagb5ggttf4Mr5u1bxqQFzBpBkjGfpc",
  "key9": "2ZyEwJBxUwqpkMTxXGqmse2eDm5BgXpuuPrtVvM4KfAMfDFVyJoLu8czWLPVkAwcAZKrFUyojVwAifVuStrYsENs",
  "key10": "3MFedu7Mz2mZHkbskDytvvxHtoeziufzdNfsKeMhtfg2rfDXWtBbY2tbo3eKjiPTxzxF8sayRT2FX3eApjTtDKTo",
  "key11": "54ZnrSpsr1rrpBu8jjunSXnCmxTAc5PdjiMbBxZcJitb2w2yySjZrwFzsg6WRXbsNYYamUvY1E6Kys8sMPz8Rn9G",
  "key12": "4wpwYkhERXAdrXWE6vH7FVXgpN1ujciZ1G3y2C3EKRjwRof4UVDJaHiNXxws1wAQ3L3J5pQ29FnomzBc5iufv1uW",
  "key13": "5gdp7mgYLFEFrVGwWkURKgBeujmtbiEd8XmurN35mjGhheXJE516nomzpgJDEN9zQQVPCLL4Z1EWbEXgC8jzYUJu",
  "key14": "3qAaX2MviFz9jNfD58rkYxhYXM7qZuWgWF78go2TY43B95bbAtYxVhcSfAdFJid5Genw6zo7mG1GRGvKwAGG6n9Y",
  "key15": "3ff8HiHNRXngq7kaZLcGC2AQjQjFivsTfxMWGyGRqA5UhqfQqfUG5YWArA5vbBWqrwgHRjTZ5KWy8DaxuQoJMPG5",
  "key16": "5nDU8GvZiXk3qMtx6XXRqCDiWLyNfRDcKtFjoT4Qvs3kBw6wLL7Bfv5E4arqTH2UJaZKTUfSdWpfVE8xqrWcC8DY",
  "key17": "Ym32Mvh7D7f4ZoMZcQW2MzWqcrHNLxFDfvoNh8hFKsUkYkXTwnXZScuuCyCDA7mGEcoN1m5pmUsnKdMCGPPiKuw",
  "key18": "3q13JTVgpTuJxCvv5sn9XMCebgN8mbqSCLFCY975zdGWcDYzkr7LXVdYZK2KpzAT9srKbh8ifk5XobwfDeYMQXrb",
  "key19": "5KF227CLRcKw56Sdy8rioRdis46x4twcHakaL8evg625FBjQj8immXisiELH5xybWNeWEiLUdsLG7yosoB6wAGur",
  "key20": "66ZvgwYBWWNGCt25RCuXuHkvyg1qmKP7MaRCJ9sY18WkQAEqTqFqJtGua7FuYLaG87dnVk9XcnJ1h84hcfryGELs",
  "key21": "34LuytR5tPGJzuWj3hjBaxYZLwtZmuhQ78AN2B8MuY7NWVx4ZgW9LSEChu5PjiHkxPQs1NBKikjHvq2mFbzjU7Dr",
  "key22": "4R9qV5JSj6XPL8WTXoLvUupe37GNXaeNQpjQPMWd2qAecrnrdkoYPDU6hUd9LN4LdNvBSTaqRWgAbrFxtCEZ6jtw",
  "key23": "YC4Nskr29YRptkrvBM1L9F8uUBfKRYn8K8PFVW1M1m6Jr6Yz6M4d7yKBa2HiNPKUP9JE8LsaoN4z7tAZF8ebhWB",
  "key24": "3LFHFj7BnvRrMLBZqBZLN8BejY3HRZr2JF94evG1Hg7weL8DrmE6tKKEhtf6pbNjpP8qf6KznRbnQs41UUZE37JR",
  "key25": "3CAH4BARBu786phjanYs5X9BLPzbozuy5h4Pu5v2WvR2xkjjoUezbytzQnvECEJuWEXnApMt5PrbMoRjJKUcYdsH",
  "key26": "nANSqBYeV4XJpRm7qtikzvyLFqmSQgNooca5a8WTusVuzpoyPG3GX28SJ8i33BQUxmLMRmk7F5qMauCCdW3fb2f",
  "key27": "4RMSkj3d6t8U7Rq926pAbexqc81eNrUaYMUr7WFKFoHcFPjY2ex7VvdPxHuzGhAtZTwk2pB8tpZRvrM7qztwkVfW",
  "key28": "3YaaYyb8y94VhxAPstFQtmKKPSSai3Y6iYqjertfFkbHfk3cqSBJVDHKEuttnCcJctNEpy9z4X3VGVHyKJVZTD9Q",
  "key29": "3wBKD8DtPxtuTU9Gz17LKmLjEKQQv5fWZSYV6vTTsCvmrRbBBtBPQrp15e8giuK68gGfty2pLDTmEMbao5Uqb1AE",
  "key30": "3kRxixGF5hPfwLLsDccmtDjJP6LQLK4GByKsk3YvVbrFa3ZDkZWJEeSpciUTMAdGASZgnARrjRkaECVL34Ett7p1",
  "key31": "3gTSiA3DpRJBrU4R8JZivyUWXqYdBj4oAG6kLPzcf23QQ74hW2ZYuzBY2JjUrxBiANFiiiaBuVZT6AahkyBaYH1x",
  "key32": "2ryuq7CRAx1bzsEQ51zu3NNjdR7MhidfxNoFNadMGM34PoL4H6rmnz28Tt3AgfQ5wru8iBPE3xuvPnkQHNz7jQfm",
  "key33": "5AzhE3k86p55XVsgaPsox7NRhhkDMgF3QobwbHPmshx5Q6piFrvncCQppWojYZZNR2ALuUrRNXtesun7Mdi4KLCe"
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
