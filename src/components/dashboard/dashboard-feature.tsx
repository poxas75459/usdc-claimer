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
    "8WkH3jsLePP7jeHunQoQFPbHBkEmu2sUBXutyzL9D3bXYUBsL7fCtYm262cbuFTAdKeqswba71NwER6qVCnf6Vk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eGC9GApnQZzn4qwB6ep4ixAcKhcM4z8PQZBQE9yhKtaBqyCVS9dKrYV2NRgd2dZyR7B91b1QmLgy8ZXQf4apgPZ",
  "key1": "2usYDW1hf9WPfcXmXNqXmjayZJipYzcn98dfLDCwL7T3ox2J8AfQ7e7NA2bjC1td2X7NVy1iqCX6Q5wqrC2i2EV6",
  "key2": "TdKk9dGEC6KQi48YgFJc3byQe5gMMWRCYA23LsY9UwoX3FbWgDZ5t9Wu4uykPWb9bEVgY6KCtdHH4e7uCSy77di",
  "key3": "5VZg2TGKTYojzYwLtBmV67F54T1nGvi2Lb9FtkBqLea3BAzxtqRk71ft3UNfHyxM4BRYz3FkBRNiR4iwLRZETKdb",
  "key4": "CksfSGeMcM2TbkWZaVxEPJJLTwWVAZkVUdNH3EKPWV84FZ4F47QXeoQm4DXgnUZc25q8gxqwddE2pD9Bcen1yjP",
  "key5": "32AtKa78Ea8R3K8wLpVGeRKZDkavsTQqA8pWZEepVx4M68rSkmj79Tp5i1jTS3jtSvBDKWB4JupiUeEVZHXxBP3n",
  "key6": "5qG4oratHtAuEe7Fk8vPffMZo2A9Tgczt3zgoi17CJhEsRjG5RkH3TYeBimPYsUPE8bL9h9F5bJGoGVkdM8Nav5j",
  "key7": "z4ZXBsC6aMT4vyPoQjv1BAAdMAjufxHSAZL7hC3MwtR97Yi6BBmEeEPc9aZfNLvg1ddaLK2ByJ7MCTRs9URyaWK",
  "key8": "392AKfU3VKTixyecuSfKtJPu2u8CQEjCyqUCqT1E7RVQgtU6XdjGosWvC97p6VWjUd6Yq4EXHtx6dbyYiVFWLLQA",
  "key9": "36iekK8mLrpd7KN8xYKXTHiNqpMiXCoQ6gEoPPeAKyhKb6z6vSKL21Kh2KXVDEFjPbRbvZ3JiNJqkPsjrLtqcKZV",
  "key10": "32eWt5Dir4Ziuasd9ZdbZHm5RjJqAyTAcLJYbKXj9dmbTLZTQHFu2xZ8WsXJ53QC7bfmm6rnpha1ZaSW453Eiuqi",
  "key11": "4NLbzxsg56YgnViSJFYqSyfUA82ZmFR67wptDkyF3jLNruGeupDZDxu94P1Yr9V6dQrBUAqByrxapWyHQ5uA8ZEk",
  "key12": "5VNZT3JaWCh3sunDmTJqVRMR9jazbsyx84FvHHbdJYbD7J6g9JZAC8YTogX25mXtH84aNRKLeNaxfh4seTLGi9ro",
  "key13": "2YRz8BFvAx82jftBWhiKYy3kxj1wvEUYSFPK4y6iC9of4eDkCoRSWwXkmvj1UdsDRHckW2mc1D1Nv1j3wRntgoTb",
  "key14": "5esLvigAYnZ773RVRc512GK2v5EoBnHF6L8RWF3odHFMsxrucpUaWtQ8A2jXLgMDohyQj8NUPhoaCSPVAwq1JUNn",
  "key15": "SQ2RZrtgEQErae7gbqrsRTVRLEsZm43nVCG9r7nrinTERB9J2ihAaq5M7CKuFkkSNaEMyqMNeqYYngmBptnmZYS",
  "key16": "2aCpk2qjnFwXwpSQQHs1W82xZXKwFZwRgijgEVUqE2Njb96m34JdVUkaTHcSujjhnRyELGbQE1DcZzSzw6rsz5wX",
  "key17": "24ctbj6n28uLpSvZW9jcceuX1VJsuEHyYSsShVjECtWM3jKYsnk47yrRRnX2o7MVjsaNY4yPjZyARPM6ZsCDeDKs",
  "key18": "3kACnMQ9Z5EKjbHtL8R7m88Gi4Qv2mL14KdzurC7NhJyTZ931PTyWq7CdAywBgj5B53Au3AqN9o1ittDXHZFxyJh",
  "key19": "4R7y9FMvqUvcsHdo1bvcp3DscAxjErMrD9LFVnLedgEhDgMeGLyubeshykan6xweqzExTz8yMLkRja1Yn6A9CwYc",
  "key20": "5Gu5nYScH4HP2QTyMND6mBQ8GxQcdRydsj394s3y3GEk14t9K7Camg46mwUaSxhge4A2TYVNkCymzC7gcMavTgUQ",
  "key21": "64nR8JRV936i3Qhg17NWVRPQ56ivcJKUi4j5KPdAAqoUXhN8AHaruyXCB3jdGEo3ezPiLrPDdBgJg2Jmb7KPWjYE",
  "key22": "5XyrzWRKNTJjrYek1LqUBebwUg5cPCiMBzWjSZ3SHkzZ7nkCjLVscSXbSD6GUqK38QAzbCcY6pf4GXzqhAee5Q1B",
  "key23": "3YeoJ3HaTJTJVavXSphB4TMzSH66YWpXW4XXgjdLTpaM778vcQuftaLyKbrjxvd8xZVEFM43a7uckX6VNhT2kc3W",
  "key24": "KMri1bSpw9ZfvRaM8pDHkUN3xyQ1aVE2gLuvkHvBF6NWxiX2agWY8FNBAiW1zqahaBHnezHdxAeNM1piyNKatUM"
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
