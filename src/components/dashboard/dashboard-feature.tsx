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
    "37BTv1zBf7Vh1J5rtQT1zaYFSBhtMpd85ozWw7nCuSgvEtTPoM29rsQNPTntSyzX2LNZgiSyqPqsspGKGCCtVwQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B3D5RdJE9DcBWnyXTSdx6Kk6S7YsF62AV7B4pN89w3iuMyhNWntN4pJdVY9szZs9YWHbEXBAWwffNn4zyB8HgNo",
  "key1": "LGNs9aVMiaVts2g8B312R9fiy4zFJ7xqS99pa3viP8sysufiJnHLfQA8wBbcnpUPz1yZ74pb7M7XsuqnHKfFyLh",
  "key2": "5qSwzBMJGMeGrrempe1K56kVn2s3Y3X4fHWhxWKMXBKHF8n2FJJLQUPcy42jv95nhVFcBCegMdVqaXZr4bc4De2p",
  "key3": "52pP8562Hse5BAaWX4J9ph53f54uBayxSE6PRi5Way6vLJgQR98QKyFcd3VDtdrakPrF2SsNya3vEuRfZdmhNqjs",
  "key4": "3qzZCZkYxNgnVVpotS71qZAkabiGYSFw4DL5Vwj8fc63f9nvLQDoNZ7SrBB2tifeih3SynQhxJbPY4CvZL1WHumR",
  "key5": "2sjmuCTbvipMyX7iUiDMGQFbBK35Muy4qdLvPeEwN5N3GWSd1EaLfLU5UVczY7oedb1bgq7q1SzTEPstezqAhEsn",
  "key6": "4vJwkktZW9WWhJ36STGF4hm95zdxoThCtPcHuFuCpCxFY31gUp538Uz5nYrFPamYrtUTo5bfjnyqKu8euLmsEDyb",
  "key7": "3UbE97ukv6TFrzsbYmd4VEpvwmw1ynZZhKtDZPh4XYtNgD5SP2pKGz5SbSZCqyoZabisUZ6g19fGfTHD6M4hiVP2",
  "key8": "47CVxTa1tMysyh4HLR7qP2a3gsXS92hN44BhdG9av7cPdDZMVVVSbvzSwWFaexrDowhEJDzMyAvbuLQ1s78rn2ra",
  "key9": "AfyUP89Tpdk75mGXPFx8KQ7iULdcUWwvjpqBNVvqpPJVseKJmf2TGBkpEk7wCsxMh8zXbo69d47jtD7oWMdV8kp",
  "key10": "4xVLtdnXnZX45xYYiAD1UytjSJ8QRowhxR5Vk7t7SjrRqaY7bAWP2DdzRt6aYiRvKKVdmEDNkjJ2ktRQaKQCzvVm",
  "key11": "w2d4apPpTFUKwsvm2m6faZYucVgQSuRkBAnCje6EBBrsPacRfNKTMQPQTQpHtLgh6S2gDfvJLPwzZ4Hojk42Qjm",
  "key12": "4TYVvRhyCjrZrJT4BygPY5sNQrL9KUvLgkURJV53eFisKBYbmLAULg5BHADcSjdBnfKV9oRwThzVuGbGSqJhsCok",
  "key13": "4z8MXNQUmWS87hsCvGqmi2A8qzB7cYca8XMomjdLzu1BtM5DrZSGVFNpUzeYruWA9CmSBuzyf58eYx9k5Gg2Nr3X",
  "key14": "4qKumz3M6BKgsrVguyaS92HUHjsmfS36rShY3BdoGFQZgWuLSUvPd1EtqQij9cZo9pds8eiuBbSwLfsnFQL5gL6G",
  "key15": "3Wn7L7GUPoc5hoHaGDvYriMThi7TTyu5Qq6BaUUsLTAnbN7N7aPAUsqEqgEW3NmYDyJgFYh4gUBJPNSeLDp9L4R2",
  "key16": "4UzH3qK5Ef6k8ZVEEqbhEhXf9o7nGMEG8P7NTZSHxstS9CU8za1nNFDrkYZUFoKAhE2fGZsySoxqCSZQWChLWdCb",
  "key17": "3zpnZkWBqHCsY7Ahu4ZYnzaMGbznhSQRZPLHzUWEDNesTksLUiimmkhZxv5kPTJ2RcxBrjydxwBeoTZJn74Gt2zN",
  "key18": "3oftXkgi8f7y7wVKFkqAcgxHS3WXtS5qKcFufgRq3218Aud8UMqRjAwy4Vb67jLqnUhXYSdQp4MpbUEijtdNjqSc",
  "key19": "3yKnRexYQJxjxoRAUfvm7miehRi5wv5GeUkjy5unrA3eAzWZ9UaRvkFXFrSNTXUKF5zFWiMXDz4ZGqKqEUqP3rDC",
  "key20": "64yL8djTxh6MUdPmjuMfBxU721bCiHQNjfHkCPsJaB1BogCtXkwgfjnRsyVA9GpwgGwKuWm2tWySfHJRm5m1KP2p",
  "key21": "4fnk8JN5yjUjpnqFpgci6i7hxwg3Z3P6unrYYTw1gJBWY3PJ3G2Gvbjam6MpP3xg9t31kb3Com6EY2f2Kg3ivV6x",
  "key22": "2PDA8Ltu8h8BBCVnTyVrpapoE3Xsh4SeqQQ6vkdBgTFwfDr7CYngVuqbqZARNcqAKfKPJ1Tu99c66r2WAMXDdwCh",
  "key23": "56WEEtfY6Q3M7WEayA9p1WNMxPqrp6DfBq3LA6hvCdoDvkYCGyvwc6Co1Dgja6BUDXJuyXcQpS2hd7ZgUziP656E",
  "key24": "5wnM6H6ooRswd2vXxxgKCVbWx1C8JvkTJ1eBtTKtBWioXdpjKhGPTA2fbv5aVgQA1LTSig8bc4dBZJKoVyHPMngd",
  "key25": "5nKShNTkiYs9DnD8LRZ3Du1G2UZ7Pr3SMbShmgU4QSVLbhhdL4hX2RLnQHGUWScikzBUjWHHaA3khFnf8jtGWSK1",
  "key26": "3W84mt5U2v6ujVpcyLyA6zhwiwbh7J1SeXxtfacW6gnHqeR7aukjtnfffDim7pTXGYnhmggvUnx1qPFXDnPo5cai",
  "key27": "4AJ8PYemrhLpBLGAEeJK8BzAybLons8jQ8eKExkAggcpwZ14GEd4GbL2CaWU47KC5Cd973p4JJw7uzFagUZEsHkv",
  "key28": "88Yz18D2Yrvppx5F922asNPSr3gE7JPmKR811Vu8Sy6qbmDox5YVQid1ChHNPpo7CM8Hx3NpJ5aLppvexvzGLLB",
  "key29": "2UcxS7vXFRUmNZ2KZK6bZC59zEUtWLeV33fsswNPfmYx6HRqXQzhfgMFfcbAw7f8WyrTkHDxVW4RWjAxgYzC2W6T",
  "key30": "2YGMA2cHw3BKr1dzYJyH4gHqZswCxiSQ5spQcxwdfztw1MJ8vKRU5iSgTxf6BwxGhj9qWmDDgNXGHX6HYpBAyb2M",
  "key31": "584PgLh43gtxrGxWHzxDHA1a6Aaek81WzstJiKZ6hCU8zBmC4dXWxLQ7xvct89hfv6w3brKNn3BE7dSymiahrxzf"
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
