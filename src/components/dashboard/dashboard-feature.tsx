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
    "553yjxQChHjxAzQcQSdyLf32fdFTQE4nbkGLWv5A1tfdpQ2ZTDKVKhJjhQVkD7aKK5WeRRsb71fFqvPKfV3jGVUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xFHt4RfCHFABFpaU7V6LK8h4ppbv2hoKA8SKhCPD6CT4PX1bCZXSnidYx5ERaByaMHHfXAprJmcb2aEvUAAfq6o",
  "key1": "W6JKVX8kTtjEqEQrzWmUDi9NcnYTd8StktqNe4GfPHKS1TAfik5wF3BMijmEFL4VMXHT5YB5ZbcumKkPBAz66UD",
  "key2": "2EzHavV3DnfLbBLvWghopDUCtRvDBEsShokVDes3SfStAv8QBEZgyfGV4THiUFh1oy8Kn3D5AiMCKmjbkkL9nf2m",
  "key3": "2Dn6SpPn3DVCuiBN5aEy9NZURhxVcsbhPBYwo1tw5y8WJAUybryoEeNgBPrpfZXGGpFuLBL4m3G26brjEUUWDo7E",
  "key4": "23QTDEzgBqKnAHzKHfaHbagEhD3sVKDQ2c8JzJE1Um8hziFbAtswVHqiwciCnARKzYKHumUa9tfGnWq4AJ3CVL8B",
  "key5": "5rHTuJoNnwSMnNXr3LCDXSmCcPcgFZQY2ftBjXr29zwt5e6UfwYcNUikQAjTG2m8rKaLH4HYHY2MJcHrQcd74FFY",
  "key6": "2r3iTPKU2RgcrVS63uPUU1jCzrSJW26ZrF3usEGBTz2i5XMLekbFEwcCnfzMBDBoMxk1i2VEGSwW1UegXgNFj6K6",
  "key7": "5XHxEQcQfezzC7fDDZGcQvTrFDu3eXfSeDN9y5jVTTB4gqHjpgyBN2ViLNc4XtnXGQ6G26StS1H88mmHgEZ59azF",
  "key8": "44Cyj4vJN6FvbQ8BBXWLVK2CZfmHmzo5bgSqbXr3Jg8fiMiLQtohZ5SqGwrNeZ4LtKooUv81fbjZujDs8JUnopDL",
  "key9": "aJj8fnTjZSQdgzF1U65cDgrieScn2RhbPTxK5bthDgP32wT4WN2XR3wdn4cUgfcBh4i4sXivs58wNGvnQoxtr2n",
  "key10": "21xqCCmcntGUQ62w5dzqLpUBfMY563iGd7KmtZs4Zi7a8RAEyvVnKWf3TWih84LVbLGByVXQaoDTRMUpSPQYyA8N",
  "key11": "2UyLpT6TzSYP6zNYHWDHwRrZaBPiX1Gy2Q5H6FKCqCWABrmMu5visTduDNsQDJkT9TPPvxeDCzs565SeE66cvGor",
  "key12": "4FWHyGNqS2iEJMm9C1Cc9QzM4w1j7JhEnbFerK4q8DbspzcxQ6JL61jHuckdD1yBhRL8RjLbXCWozFDEkB12y8xk",
  "key13": "bHD25P4ZanWAtYWht3MsuLntUaXV8CJCmWEcLYU8u8WM41KYXdh8WoS6rYSrJrMoSXX9uxGeruaBcMQWi5RmBZX",
  "key14": "4ebRsR4Pji4dmnUNfNuU8P2CkA2K7wbdRvpqzumwhUVsp1M28PKnRCNru4hf1re3zyqGnkSc3fWDrqkTptWceKG5",
  "key15": "VYf5AS1Xa5Fvjso5yro4XxGymeniqWLzNg5c4PBGfW3mUBAbNSXKkZhpxuGoSxmrTQmG1otwgvejT7gBpRvYUg1",
  "key16": "3pvWNnAnRm1sHjEvdVK9H8uN3YQE44hVV3tabkra288ifp9r1gXRRSUWU3nEyH5RvceUh7X6aJ6mDaEjgceKiLGQ",
  "key17": "aLMwbNWk5McEMArgryaEggCUM8JVSE1WGbRZyPf5RXV47FGEZtzQbExULoo3eQmiAaCenhsnLykb7zYuBySqUu2",
  "key18": "52PJn9MMdpL6sYXxY6BHgmv19xj6b6At6U2cUcJmx7PUDnHA3gLErqf7DQeCKHEu3axCGrb1NTZ1JH9STT6T9XSh",
  "key19": "4QWNHb6hw8ExyEHvMWig1jZ9GrP6w4nc9A2MAVCsu5wFfy76b5mHwPkVDoPu2wA7ZG72NfDEGEtgx7ekvJfPmxD4",
  "key20": "4ZwUZ4noPmWbkCjyu5Attr8UrcdrokENPCtE8zUbTazsXo3RsYeKot7Rei79do6NmubjD4TG6uzLc3bAtGGPeVoE",
  "key21": "4835qVNefyPnEuiF1oY4Lc2835oGG42stgcHuv5thpmgEQRDm3q88DQaKAnLLbNG9f9Ls8nnLtSgE6bLb8Fwzdf6",
  "key22": "3GYDQZSTLSXHmhw4QW5MwnmqeQqc7HsWEh7grL9ycCds52MgwBu4N2m29nWWxAbNuuVFv8nNbNguhM4dsPekAYye",
  "key23": "4Wh9PTx6d9dtzqDeQH5zWLYUknyQPF8g61pDAzDdMaGiAnGj7BqdZk5YUFoNHAzrEeYEVivrvM9gNynmkbhAmaBd",
  "key24": "5JMJftLg7ayvrmuj4pcFDc2qpJPyCP1EPed3XNHbazCWzznrVumcNd4ZGPQbYbmVEVTjA26HoS7Vr31QgyPbpus6",
  "key25": "2Ny7eycodw8B6Rd8mM8zbiFhZKfXA4tSURA36nrg4QuL3Tm4FDTotUrk16rU3yXp7Vafun3SFMGDkL3yFvmf4LEX",
  "key26": "3HUwCuMwsEAn5SV1ZhmGp1gkudK7UZnJuSb57iBK9z6GgM22B12UaBkjiwawD87cyqpYXEUy2i1Qy2A6LzbwKWmL",
  "key27": "d4sA9kf56yYKTcixjzEjMLSAATEYPKqcGst6Qz9yL6jnrXSEWhNF9d5ju5o4p26tSmJHGkM1KnGDfLeJjKeF386",
  "key28": "5rbfraYnZBEfPLSM1EED4imFYazjXqdFK3Fo8CHDMWFAbSeioiYRxhi2wxt1MrbBQUpGzRB4GcRPunpLV9JLf8Q9",
  "key29": "3ARcv72ffWbsPjYdaLzvr73S765ExAX1jMgnKT2gAzLujf7QwntrbmzSyp8ocgAWiiwigDQ9hsRKrZBvKKx8Mv1s",
  "key30": "5jJJF3DK8GBgtHsLvWq4MvhoYkWFFrHg1xGRHE2VZPDazLtDDeEuF2Vf3oZhpQDBpRBWi6mhg7SpSptQzvZJ15JL",
  "key31": "3W9Yrjj1W63hCB5kx71u8UJKzF3UTi4iN1RZHsbTTyJjTZgZuGdfZPdvQwF88eQgqviA8hmnf7b3LMDa65oi9i9Q",
  "key32": "2KmFwbsEmQ8tAQTDZHs6HEbWrQ2RQWHB8GNzAHQZ3kSbXm1jALmwUF2xof8UY49KExf6GWnTacN8KjRKRKYZNjeN"
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
