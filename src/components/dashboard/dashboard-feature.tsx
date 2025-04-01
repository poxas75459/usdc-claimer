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
    "5gUiyLTbha9W6cnfeXSaZdySJJJR3oi2NDWfqRLr5WfiLdm4tygjn3hXr6FKUqZAuMcNDGGVNAa8tmo84CknnhT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Mk1zkXXqB1UA6v7bBbCBTt3S4pU5SxeQsvqxLt3Bpby4EvpRPWngDhrWizQQEP8U3jiexU5Wc9utr8Ajaa6u7G",
  "key1": "2nETYX61sND9NUaNiB8Vn4CBkXqRRUW1TM1WjjzidtRsoZm5T2s33c8tSt6cjeLSTfNE2V35s9ni89p4y5tVerVM",
  "key2": "3wAF8CB9vxfo7UUodV1xyQuQZLoHssXywYmEjC1vzeY7TnbjNykDCGAWHVBa8vr8S99W7MnJmgaC2kRudbzxAzMT",
  "key3": "geHeJ9DJAwkrYD3eUokx2MjgGXR91uhthmhDi3bpGWAFaxETQs855cYkRbccajsurU8pia6xdkMaj6f6y6rwLhS",
  "key4": "5nGCin8bKjU8gNd45StCSm3A6jeoijWJjPCEALkDxnGBHQGUiFp6cg3mwcJzNXuDEmaTNyZMGujoEXX7CE74Y1vr",
  "key5": "2mk3DPG1aLsvivvUsd6o18rv1aYULgfNiuGWz8QdiujW9Ksq8fA5nsyhhRHZ8HdBv8ZVjCcHHGaJ575V6PxkKxLW",
  "key6": "5ukrvSY5kLZaWn38FF1GHNmidZCoP9zuuwvD7mJkdabaZDYW8zVJ1KtdKqgWRxndZvVHdUzdTh72gK9Eh5Gup4Dn",
  "key7": "4CzVYZepNNGDYQXHcnsAkqyzuVCAuZjqfKc5FeTr9MPs1Bs6mPwiC6o8t2zP9sWdaJn1i8A7XhnhnPKthf174Fmx",
  "key8": "4AzjJwu2x5pQuFk8EpANNRo1cVxMC2imF8HGgt4epfm6RoE3GCwJAGqHrXxjAkKZKBAQsKznkMVTzTKaVS86FqQV",
  "key9": "5GA7qGEk7TSC2u8yKeAsUARDErhzsQGknAGCs5LecS9ZB9DBK9wqhBata7DxTxhbkcGskK1pK2uaqbJETxUewYsb",
  "key10": "4r7uYZdu224v8NdSMf1LcHBR4sHj5DjfD3hWv4ekRHQK1vBAVWiuPirizydyUL1kvDvqpgMNdj897KGVXwoeNMiR",
  "key11": "5exXSB1oc4jzp12dxDDAA9qdJSpo7NSsLgwGECJ9mNAKTbrMstFyTYvVqncmpXkY5dSA2VfoPcDwrFZqmfrhnGrP",
  "key12": "2wLygskb8Ztkz4RVo3G2qTEuqZUPwVqH8oXPY43nua3Uf3afDAqqh5dmRLxUBxZGmAZnF4g8QGJB7y6pJ4MavfZ8",
  "key13": "3djNysB6ULHvkahx9LWWzRPADhktvD9YhBd7sN6tXBcTFLFAi39igVSZ7wmhA5LxC4ij7k8gRfNM9qWN6GPNvtC2",
  "key14": "4JxsZ9LvwVL3JvyNg9Dsdwxam38a6MjiNZxgHizwDMWrRtLPEKdZMS7K9VFAWeyGLhgots8bQX25T3oNEhE9tHio",
  "key15": "9gfgRcjhbrGnpkzorcsqmUyNKZ6gYBcTrxDMskxV2JgeaEYYkT2zKQ3HwLX9SF88XzvDVEHAtomZMFhWcQZAqr9",
  "key16": "4mweb7Zpe5mp46y3yXmz3ULLktnhMFNP51mrPPErdDQNge4ZwVAKtWyDhQzxQtMeUACxaMdTjzwDR5u1sAZbAoVk",
  "key17": "31WacCB3umFNEsXgefP88uijoRdaoS1vNG5tzR1GwQGxYeKBUhQcv5XyLLLTLbbnmhSkLvv9Mqitq1aUU5mfP1d1",
  "key18": "2oF7YueovKQ8VBCzLEYbK8Ai39rucP3AiH9yudDAEw7ASWpVAbMfYwA3M3gVZX4Tfo2949VLSJ4frwsx2PzWk7LR",
  "key19": "5WpohATeCNM85Ur7rEiwfQKYB71WnLTbwPk5si4X1MxcBuBMVcVH7HGtu8k2Bj1e961w1AVBmskX7hk6Q9Bt44A6",
  "key20": "3mC4KgNd3NuAUkyKhfbZodG97qQ1ynrxVzEF3Ky87nxhP7cFf3Qc6Y7zRGjajiJv9yg8uht1Gw7uRLFsExdP8yXc",
  "key21": "3Hgh5Lf9LTEVoh1uHs63oJT8BYQJnmBCWTTmwhBLBUZcJiXhMMMFttVrfwMrcpfCiXiK6gcN41xoTruzZKB6ne2H",
  "key22": "5Vg4RBx8VuNznNAGaTBW7wdTBFNdbdfGah1AWAHHiB8rMW3bgKwzA8tmoVPu3tPif1GZEEKSPxvcvSBhpD2uzpem",
  "key23": "5TEVCxzz4DEH2xtyDNdMBYA2DxPTrmBiStWRw64rFqkrfWQ5qrnMk7MtYsiEvVGUHkeEx9mMiGuUeuXFvB7PNa8K",
  "key24": "3wFFXAEkXuQLLF7nefGYb7NKDMTXoZ2D9espg1vko1dthNNCWPLrYNUAVHMCye6ATfRh7z31xfmYpNGg6CMjKpNt",
  "key25": "55HMvMVZQW1PpHP5YJY3oSeZDzVg4qikHAxt72SJba7cyWEkmGaoXEVpkzdjxTfnXA1s7rNKXES3XvhnQh4FuRG3",
  "key26": "4qzpWA91ZRraALbj32FLJMuRTwmRNuX5Ac61Ez7Cn4tnYqu9YgwKTgFjSNMCFvJDfAVDWopQjQTbzFpQ2DzFvMaD",
  "key27": "5j1Naf2rm4vZKFmRHt7Tf61v4sAJAxTe7uKZKGkCnqgkiaCFyrz1G3MGYXUuoNNswPisoHoTta4ktTHV1XaohjGA",
  "key28": "65Ze6jaKmcQzjB3fL4ar9x2Jzzvn6AeFFMUz4iamsrCwcPrENeiBg4oRFHCPVzwUkYqoERr7CSKL8bDnsGP1k25J",
  "key29": "3nDyaxEWCxVhhsTRABWNUd38iq5VrVSaML9GHKF1DTuidfoKKHJD4LRRbDaQDqo93oKDTTGLtGcSNFobfSSgSwPq",
  "key30": "2ao9fSZJ9ntKvm8AfxuFGiXJFHux8Qc1YHtDJ4kQ4jCQ2DP3ujUs123kELgcmMkX8EGBAz2CZVmegHiPycRyNA9u",
  "key31": "3kN3qtEXsX15gvsyU1TWMQagDzd3ur1kswMmB2p49GLT2dMrKWDc6BgBuQ4ipHtzoYPZi3LXBsNphpmixUgPdPWh",
  "key32": "2z7Hdr4epwgJBReESW8y6GgnYCBc2kkG4Hugb3dYsu8E5LDUSe5sz8k8ZXEWH2779iKGPdb6jz9TuU2d3FGPJvUx",
  "key33": "5Bq8PwfxjLs7oPL6z4vbP7kg6gw5VKSMFchR3j6JPsDpfdUmo8SCtPGymRx5r3Cfk7MsznLZUSQaBQ1Z3YpQmnfw",
  "key34": "2AAuRBEdLSybF6r8HFJ3CZrLsX2KdwQ8MUnVGUp9Xvt5uNJLJvSKQCLJ6eCzCrcdU8TBeki3DbAEXFNXEvDsHu4f",
  "key35": "23AewzYRoHMWaS6u2V2njhTVvW7EvNZ27SZYbbgeXn32V5F5pDK97yTCidTvhtCbcdtutgRVYpTMRX2KYPqFqoCQ",
  "key36": "5AJ1c8PrJAAx5cmgHFpdGKUqmBdzj39RLWEkYTGb5m7yh2jDm1vqKGHZXsnzWejYuVk6ouKL7vJwJVWngG1ELM43",
  "key37": "28W65xyYaRQd4X27fJrLG44zvJ3hrw92fVfZRvsbLEapUwsoE2vmWUQsSE6KqR1rEzd18hLa5ASu1gb6GwkhaeYw",
  "key38": "3rUPTV2kfBnp2Fofz633iH6NoavbFm28NwNaXVLGeg2Lkwp85x8upYRrvjWJwpDJ8uK5C1djQnn2zG1KtHPREEsQ",
  "key39": "4MqcmmpHsSsf9Gqq3HwNHkMoLuywwrRk3pHHfzEqEnqJEf3WC6FC45D32WWDH64ibRX3XEn2jAhrGwCYzhoAKXA1",
  "key40": "4SMX6FeTucgyVg6TWWB6rmRKHgQiQCs9WDgvPyPoTQaSbcE6GTvuMejKQMppERibBGZY9wJCiTFF8zVLsgspYZ6k",
  "key41": "5waidkmPvJhGs45oJCwL9o81fxiva4cYDVusWLsMuK3JdfZcWfJtthRnc3KjRSmXQHLZ14oVwSvaipeSTMaW68Md"
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
