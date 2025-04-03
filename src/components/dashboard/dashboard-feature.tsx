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
    "3eVK7q5Q4U7WzYig7Qr1t1dQU4xiSptnLSeMFhSuvbQSGuJfo7r8vtYDqadJEPrJp8ntwLTFVTdEpEgErF2TFJLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NdzPvJtER9hUegzvhz8bwBLBvyrEqBzWhCKWqiXNcVA5EVrEoZ65AyW7jJqV2YFYKZm1yZcPETqbv5647iRCyEF",
  "key1": "42EAjhW2Sk6XLpJ7JD1y91ymduycnUV2CaRMieqUqJDbn7zmE8KBoYykKGQ724gGRrnRdLVADquajzMcEWouiXTk",
  "key2": "5XMJT7GUFuWDBi4wL7XErqEzmEoheE6aJ9dZxHsN4trMrvRznUwGf1xzdbZQTzyxUAwGSc5QQqtweAEUSRcMbgmR",
  "key3": "bF1KpmaXGkTXgY4eyGF2xrvrPciXVC5eQiYVxDwWhRRWcUYvkq5jrwBd7KDoKCHSLm6Cjh3btCCaX11Co77MDuL",
  "key4": "64wxRCtwmDdWQLBucrJUHuGdQdzPiRJtdGcRsmGXRt3kQP5YehoDNTCWubKpAmszQEfYGfW4Dr467q5tra2oZAsu",
  "key5": "VB4UdFKKbdV4r6U1D3kGsvyq7EGmKCKLUzi2y8JM5arE3CgoTj4LnnTUyEx7GPowWC18a77eiBGrg3RMaEUdgAt",
  "key6": "2SWuoE2uZwZ17kc5ZpfeKiyyca9EV4xwgEbU61NuceXXf8WTqgoZjJiif3FkULgwS2A84tWrg8qAp9Ycjm1SB5xZ",
  "key7": "3Xf4u3rYhabGNnTCzTYp7sc6T1o6rZ83rryosHrJgMqvRZPVayCJghhbYZnm3eLie3JtZKXj4TRF84FWiFgfV7En",
  "key8": "2mXS34NK87VsRGiwYMGRVUttegdpm6xEEyPUnB3dvSvasnMYZnFEZ9qsCYcBkrd3NnKCLfV2QJ61dFmYGyxcGPvb",
  "key9": "4GUSZDLH1ghdffotFawSJVTbRKm4i4uruSBqdqWQvfbX6frGEDH2AweT5wneo57XkanZjnjSXfecb3wt2HbNwmut",
  "key10": "2n8sdhYR3t7cbAeqBCqisfi1nARY9zJZBnkCMQXTDigdfkJP8QUNydtTF5z7XP3vmQFwbkAHegp1cJg9B7KhzyDw",
  "key11": "5RDNPrYAyp19ftwXGvt3ySqtuAbegYzRmtvKVwfPdVGRNyp84WstQocL49DEHfKQihnWtffC6xdz6TrqHNjVUEVY",
  "key12": "674vFkXDM2B3Apy7Reo2D4a8FrgLp6AvKKcaSZYATVToocDowzw4tWrGcmdPTgar3n1JvhBKnUSbWz2qXAXwMffU",
  "key13": "3ow64hRtSgc21unV3Mt2UrxrPYxNYXWS6dyv3JtbaPumxdiseZ4s4kMEPHvsw4o1Lx1MRv2nVJVFrjSCeudKEqhZ",
  "key14": "3jVRaFf8Cu4gq4oC8FvfyU49hJbDbJEPvjP2eMqbMh2x71NkwkPddqqwRC2BB4XZwjsWooRAz7rHCeQUwMrnKwCs",
  "key15": "39ZwWZ5eBMd9PorjKCbkbLBG2chCJh8xtXwzwkYhYL7dkKPcdPLFCiX6asZw5oQmg9g4i8wgpsNpqABFAde4eoQZ",
  "key16": "53ix2cbqcx3PEzFsXb2Jraek9T6RBf9zqULrS7mL3nr9xysxvMAQ6vW2AgLrcKbnjpN5dA3ZUAwtrg8EBVRztHSY",
  "key17": "ffQrL7N5yky4iGMrZhaJN3cEZWeUTyBqCtvE7Wd3SPHYtrPDetczTEzU3fuYg6xkARpAsdbbMfVKJGoYbWQDkkh",
  "key18": "4My6pJHwxuiy38jLgX1jXZ7JfoAognxjMPj2YuQpg8G9LL58hdozja5sHZ28BuSRU8eYoqiwFLYJnxcgqf8Bg34f",
  "key19": "J3UwfNA8bJZHXEa8MpuZQyxzanKyF5eV4ubBkASeVR8qv54GUvGvziVHMdzaThcNnMBXuGtwsRQPcwLqqAUwRaj",
  "key20": "2omh1dtHLePZ2hihGj3fG6PsgViMSHsEXndysEDXSiNzP5wKZ5hN3mo81RH5noje218KutxSHp7DKm48Z8jQovDk",
  "key21": "5cvexNh8gFK1RoU7Nv6ARSdQ1fhJsKaKE3KrNeuy83pp91jzgmc7izXYugxruu7hCSKxRfzurruDiE6RskwBHX6F",
  "key22": "5LVLYkWFcmNoxQMnziB7mMJZK5MrYGDKMvPV7hkBeewoyPwYs5GyznzAuxNv6bxZ1USmqT9mRjdDWN5qyCVtymge",
  "key23": "4rzRXNFp5hJdeFSrfjFJaTxcnecqGJLZrDxx1U46JPNuAc4GL9uUWqLY3CjhRLsQv6C48GAU7tSiW4JCCNyn5e6a",
  "key24": "2XNG8UguDQnR9wU4YQVK6X7CBjNjdmsgSk9atSphQL7NNUimbcYaQ2i3hKkbUBThx6p9hcuBQxKqTxkiDh5tnG7o",
  "key25": "2GWQ9GR53GW45NtR8YDf9hsMAVhhqBB3uAhDfXp5HhtFRCGUd7dTYBLypxDfYVQMGwZ5jtieZ853abrMxTmg348V",
  "key26": "37KX9SUiEFXh1g652TtYVXeC9Jo7odyWCSa3BW2TPZzvHQ864keSCcMxN4jDQGpYYxRJG4jEFXzyZVxnZVz4p4GJ",
  "key27": "5To9taNsaKtHUuo3N5umdDZdSBC2zUABFUGc1pHNnsm35xyvghNMZXh92yAXkuPhB5nebQbRDBE8vmKPVS6cWZUB",
  "key28": "3qSLVrGXaLhVuAh1H5Qqd95XnwBjz651LJ5cbjBU33C2fPcZLjo1Y9inUGHmVEKiHEet2QkVQ8V6F7igHBGLRLpW",
  "key29": "25PgAjLpWaSzPgi8CB9hvPSFsa94fpYzbD49DPiB7Hti1f622jTacSmQd6uCsQQied87xv3J8Q8KLpDkELPDdL3j",
  "key30": "3qzXRLQMMUsE6rJh9d89LTGSPHypzg4v5JgSTHt1dizzfLmjGEpHqjJ6XB9J2o1TidgJgBujGet89VUqwLrW5zzY",
  "key31": "2C8jis5Eqcvr5KhKvA21Sr9bgecrGGRcowTsZXKEFacxrJhNt2mVyvzGDxj8dsQX4omiHHRnobb87WBxi8k1fE2r",
  "key32": "2ZcuYUwb3qPkcNUxU847M8WHK1zhaa3pF1RBhAW4dAEC8YM3A8K1dY5AZnqVKDxxq9LMQTzEFLekk36rfYu5GuDf",
  "key33": "4iiagoh4kNyJ2sePfe14XDswDyVFKjAUqDwyx54FomKC8EpwpJfViQZm8KqrQzaJEPYJf9UN2u6LqRKaCXsC9oQZ",
  "key34": "3v66cpdngTZq5DrjUDZhGRAxjpXFWoLu4sicNfjfhsHUREsv9DNZhCkgXzwCefxwdG7YaUrbnePHi7LbjagKaMTf",
  "key35": "2x6zvV9ukntwjfpqUT8m87vXnAsuQmC3tukQ86Xbh9R2gYjJAiFR91nyujwYAaKfQu63iugcM8THv6o9enpniAHw",
  "key36": "2aCaZfL1SpUgYeU4cDZNvtYYxh7Kfto2NqeqRcLdeE4seUxCQdrh3bpdhkcdiMVZb2QsAbvaRXeiDEW2vLA6rHeg",
  "key37": "2dRJn3zDQpKtYnA7N4pMgoUum9gM8CLFAxcLNAZJYKJ4nX3pgzAEqs5TNC6EKXe2AusLiKyFQMBTq83TBRbSr3Wz",
  "key38": "4wbQNAeoDgsHth3Lk8UjxwR2eGFNFNfiyEJkrYc4gKGT8PchP8NAdpgTDVpAF8LFYDQ46Es7V21a626cQrN8T1QZ",
  "key39": "Gctgkco2oYLjRBt8hMjGqnYDxj1Ae6SAVu838yrihYbyWBRBhq3e1Pwd9aN3KGd9JwjR14coFCwu2FdqGL38AV9",
  "key40": "pLAoNLGef98idicdepjYy8J4XJghvwfMmBYSG2A23ZHBRSbFTR3Pz9bD5tsdV2bnvibFTUDmGmTtL1o5KKrTTwK",
  "key41": "1xyRZRJTd58Av3VoDMW9qjzsxmcRBFWKeKWjuTZx3EcNroxnNtCCAuyd6iQxUo7QG6sVH9JS6bCviF5PupvHxce"
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
