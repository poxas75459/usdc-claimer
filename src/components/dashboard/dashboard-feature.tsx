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
    "5LRB1s8NhAtbWWWdUgCKX7XYJQZ2XFyaiJQA9ZSrs8JtsiKmK69EvYZvQ1M8MvoBR1PSeJDK6QH1WynE7YDNf8zj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y9E14c6GWJ5uJf5jC6efH9xUpR9ybzCDGh5LN8PZjKdyejDqCKQcLx94xwu1MSedobC6FbnHmDReowQK1Hs37Se",
  "key1": "3qtLBy8UpygsUkYnHxk33ThcDEn3PBQ3AFvbb6bxmLoE5U26ZW27dwoirHUgwKEdxinbypE1A4Zvndyo2W8hrC3P",
  "key2": "49jjdez8HE6V6DzRP8D7Wr124or4BgZijg9C9eiCKfgSvvuhdWdWYDKRxYYSUxGmQpys7rKa2nGwB2UvwdfBxUvR",
  "key3": "njG45Gd3yXRyhnwCeq3oZvm78J1kJPiELDEYtuooanNANQDGhHNFThESdwozoTptaSj6zyn8SUMzY6jHf5oSAbb",
  "key4": "4emanXq1rfjsaU2VKHDRDuj1s5jSDJKMNJt1JVsUfGdyRaY6SRPc9gAkPFxjMGDRP9GG3kF9yT6KYd8fRuVAFzNn",
  "key5": "5tVkqmfjDYbkxuSXESBzuyPsmQiGh6mZANB4AL57K8ApxUDWCxSpK7cPJKHkDvKuKUqqcCkTfQcFdVwYaAbo4oCK",
  "key6": "58QrvDzrEFtUrnookocXRoP4yAKvFxGKgcyCXJJCWTQmYY9UKnQuB292HMSbN2JPTLD5gtsttgD1ArHpQT6JLwgi",
  "key7": "4mj2zwK8UcpBMqPK87EdoVmhuPaTaRwQJU8e2qVDdmtZxEpREJLsdzMHXQgpiSUeFvz9XKpBRH2mxJZf6XKg94GQ",
  "key8": "5s44WeSvFJqGrktVoLJqAc2f2BN5adTpJEpGF8Z3Lo2AXb1cM5hJ2pi1oMm1QD4e6ri13Rp6ibohHZDUFNNPsEKa",
  "key9": "2jZpvX93VszST76SwMbcom5ds7wsC1jKTd1H2Mzdo1W3nKVH4inDZyD6fzQtQRFxBUsf8VbdDYvwYSnUG5Y1Ypxw",
  "key10": "4cV1KfB2rbsFJGmUfUdcZpv7b2HXxQZXUWRWGk3KLAPjSQErc41c6Yuk4Jaiy9wQardk4EtEnraF7a89HZkE1c4F",
  "key11": "fynuUACXDHTBqErziQLmjs44GyY5396rCgMQJzvoPTjeezSrb6XNhxUtfsoLXZWvD2Ni4kW3q9sCGatRA1pdsKR",
  "key12": "623byX7N9JEWmDePBWLaBJqHcTEn8VWhjK3X9Rav5uKVVN9Qtb2ESFvgrxQzs9LoqSihhSdDGJzACRvD2bwmXrjf",
  "key13": "4uzsVWvuVkB8cGcZeQqdes5amcuaFKLi2iUTs4Ew9szer8rCJ2Ss4rxRfnKXbMKn6RCBLKx1fRT1bmBZQPxpEQrc",
  "key14": "3AcxF6UG9Y4QAMyNG4gDUVmjYaezkt1X1cEWfyvkQntiYjYAuMJyYmizKuwBgxPdrPN3EtC8LC6kPFYTkTyNzGis",
  "key15": "2kk8mti8fQVWiV4EhW9usEQoBFdjX5PWE9wZjZxh7Cg3XJ2eRCfCqZoXxbTKWRQGV1of1TEpydVfzjrd3nT3rGUd",
  "key16": "2V9aMUMpWqnAVVUp6DLUyvK3zuFPkvKHVhFf7a6fMS5j3iBJUBdUJnFiDXdupxggfdd8ys3vELqECoa1cdmRjzVt",
  "key17": "2p3ySXz4adwGh3vYCsTjRvvwP7Un7D8ywnujc8ZbtzQa4ZPPbQ4Wn5cVQzgJfxoWqDp7SkUXpsjhrRMjbwhsZz6a",
  "key18": "4n7sT34oD2o8hNsymkXEqEb3N9X5G3cmc5p3QY8hmnGDTEX3x8zrM6RKJb1N9on9JSYvQxY4JjXthyffL6X4FSXE",
  "key19": "44UPWCMQRbC1pHVpX5gQqeBPLVuqiHx7qYwN8USZH42Rj5SDSzP7GLKZ8wqbxQq5W5wkF6EUwKjuEPAyMMGXWDnb",
  "key20": "25BEK4LaQWgDYPqRXCyshB8JisCJDNHWxDn1fpgnzmPy75kWWU5XfBP28VUitBdjxSP4awcQ9jj9kWg9a92NWogy",
  "key21": "4tCVjm4BtnpraiR1jTJ5iRVsdsdpYmqh1Z9nAj4z4yVVgzLZ85pjbGpDM4m51uRzmwSEKvnTeKhj66zs4jr8npzG",
  "key22": "2LWWh5QjzRxirjqboM63X17VSBoFUsdjCJzA4ArsgtpGSBaAMAVUhSCiFWLbvvDemoQZThN5EUD5DSk3cwkveX2N",
  "key23": "5Fgg7LSdsFn4EpowHKPff3yz6uYS1xmuDCdei6cvq8ddzTUUFm8TC9CW2RjtJZZb3tSxryCPaZKEkrLnZFdh2YnZ",
  "key24": "2V6B4K2oKRUr9pxdaawvC99a9iHgnjVxeEuVASLVXRTphzVMxJQB9ugM6nRMiL5j4ETQgCDwvU64YMKHJGvpiouF",
  "key25": "4TzY7nXLp5ghdkQHjXFKTiuo2JqfkoZywfU8esWez2X8h8yV5AMQc2NFA6yQLqas1AM8KLUb6YXVuUPdm2R78PVr",
  "key26": "2Tm9VrSXD7QwFzfjTTu7u2RAZf691dkcBMgUorMEkyGLHtnUfcQjkpzaAqBnjNWBNZdp3bXBzwKY7Aiv646mchjA",
  "key27": "5wg8cGfnhregTWByjf4rB8pdJhmJuZHL31VmPpRaAxp4Pq98iSN8AoCLjgPwUdz7Vk3TxoMBZCmijaU8PGfjUhCi",
  "key28": "2Wj3xdYpQKgrQEv64gk4UcEVES4Tvas1VLFaCCwNHWewWkifVYJsagVXVWxt1c3bpcdsb9vCJBUGevsSJEZqRFwr",
  "key29": "2Z6Sr65DJuYDuBAgYzLXg7oAmYHYMxo4TrhKWYJ9cxr3eGC5E8J4DKrcmvTnyaqDA9sJLksu1EdZ8r6eFmtrGD2m",
  "key30": "mfYAQQV8hGJVyR6r7eXFmtweHxzoywuFQDa3HSakDZ8gVBT4umkfSnXLQ2xfTBg9GBZBrFgCrkLsYJk5DPCSE3h",
  "key31": "3kLEPNU8DvFjQC72WvJ8HWz6AM6rWYuGxkHG2aZ4xqcUS1GkSGZq7fDUFnvSwCCkwJT3B5BKurfk6jScxeezhc86",
  "key32": "5129arG9ZD5rKqieGJBywZGxgyBMngzeJk7TbJ2otF8hHUgvYLPpDQyYG651cE1LLYbzrsL6sHsbhvk2WkfLuQwR",
  "key33": "5iS2PzenaxHJrT2djnGR8uYWygbnHNArb1CpJzkKyXNmyqUMtJ7RVCYsPDyxzDbgCyKuj7jAWy1ViHcA6ZMwNyYn",
  "key34": "322b4n92vVrWzas1terrdBFriTRa5D1JHS8hRSzNDWPDEtmmQXm3xQRWn4nd9gLCnbrxUo6nSqMZgHYQTXyBnY2Z",
  "key35": "57oWEMB1pgzrGTHQyC5D4sDVHE7SQ1cCtL9uWdeRggH23e8BPc6cTGkEuLZaKVAzpHXWzoNTZh1DcofNHmHXkdJF",
  "key36": "4UxJbMRK1877tnzjJkmzLNya5aQXvUr8KuvNtMUoS1jXWMbNF8dZAJQRtLvp8uqppk9rWvAe7ncCWCVAXgCJYJm6",
  "key37": "dd29QjqEYxmeK1n9UqPfTGgwGR61mfqp2QGTid3y5iRy4PdsPbuEW3bLmbYHr2FKUPoSuWJRaekvFvBCQYWN8Sy",
  "key38": "2TfH8QoaQQz2gP57Q3fVcFb74jz1nLreocQzcYLTniafgHsm8NDakBcYHLa1KxrGWAe7KKrw3tmnpS3fg6s8r25M",
  "key39": "5kY6k8dFhc8ucktryiarnxLhNWciws2J9RzisQqc8tNLUdHyZ6H3ENtvhmLpe98x9tCMeuvCRhnSJgH47BFjND3A"
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
