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
    "5upfbHDzGGufwqTLrq5cdjP4Ax2j7ZobBEwPspT86MXax9kTnmRBXDqL5RNxNbBgVrbavMwmEzrBdnThVdouRkCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zsGuQe559yjN4xB6rWxE8qgRWATifKFLKarD842iNZ1jAWdrC8ZN5189gdi1DZd8RX8h1Nc6K5pCQeka5rw4Bni",
  "key1": "2SvK2ryvKs8PxESGFH6tZMLWhEZzxq8yEicNMUiJTfF72W9HpFf8tjmZZdcjYt3BimZGy56rSN4PSd1j3HyRZz8K",
  "key2": "47Emx2YXjZf6tuTtxc5ccRzjDbW5cN6adkWHm6uPaHAfECdYqwL5VfacefVsQggb97t8ye49ZaFww6FtHXdeaxwP",
  "key3": "5nQFV4EPee4pARKepSmEnWhrDhRHtAQt2sRFXfHmWHpJCjzCoGeH4CG7y8TPLgk97dekT6zS7wCjQwGscUdTfjnn",
  "key4": "5nsLBkNepb71FsZ49JPMmzo72LSEajqUu9KNR2d2nCa5L1mDk6sRshFnz2vEQctNZMUP9cUhJNfeemgNorafinuZ",
  "key5": "2NYsvqPaBfnjD9motaMT1TBUAHbm1kwXgAny2er5NWo74PxvQpvAETAKCMjusw8hZsVniCeHHJxEL4AbmTF8gQWe",
  "key6": "KiqMrz8xqvyMyhBBrXNMh7hGUemEhXBtTLMrRMfwBQMdoEH7jA2SiusPyZrtYhrUBnE5TQFJJ5KZ5LwFzqB4eGt",
  "key7": "5oJh3AEA3TK7bYGeDpK1cUcqBNrR8MpmFAJ4sZgeKcMtQ87Y5Vi5jUGuTLKKJSnA2GfPKJ7Gfb5VVEJ5ys64XP6v",
  "key8": "K14L3a1aPrJJDU7bJ3c2Vo6jUp541FqBQMMXYG1pc3GGBqU6shRmrx1FrxN5fpn5xmHpgn4LRAXodQgDadHuaPf",
  "key9": "3oiFAxvRRupdeozzqKt3EuxKNsWTZuxeTjzUgHT47CMqywAGBnBHcAeGp64CKs7hPMZWYePcb1rHqyuqcY2K4QQQ",
  "key10": "5PzdtYi3gehHzN2QHBpshfku1peYmiTUGXwPz98yoEpT4HFno1AGaw3n4mATzGZgv1ercrrBW52JguSKNaNwiVBZ",
  "key11": "3qUmVzj3gCpkuD3jeW8DFz4CvVe8ZfyuN7Lt3ZkTZ979XKiMuUCRerbh8QrkqKVYFoxwS4kWZ46U9Rxm1BUVD35b",
  "key12": "3BpDjfNGWQ2DuyC53ygyTRwwS4B8cJzNVmFrpeQKcFb8Q8UcEhsgJ9mcRja9b4XP9xVgzfok5xnJXxQdFHBTL7r9",
  "key13": "rJ7KAg3MfqFTE3VX1RmotZsXNfMvd8xGazGd5tLsLuoNBEsuxrdnkyEEfxxhnDEB7HMRpmzk2GFzK6395nvWgxf",
  "key14": "bGaBxo5HeebxP77o4mX1U4FbNwpm5p8wGzi8sJXY3s1PfRdSf2e8mgk5ohm7Pd7UmAqKSFcFPsxBjuykKDsXeRp",
  "key15": "q9BoHUh7taKtDsU7pBhMnYcZ2PzKvqnctSfbN4CGdvk1BGTDoQW4baDJCeXGkVACtoLt7BM1eRyCwn2dUYpjsZ2",
  "key16": "3QTXGPKbHpbRHNK1B4FwxuesFMEeFZA3z6ScxEbnAE8rrB4sxWXstWo1QbpBK5s18yBg5xgnEDyHo9kDCBijYGy5",
  "key17": "nGHLE8gzdBfAYknPKxegbB9s5UhadTduHw7u46Yk5a9498b8PUx9qEFP5PoApYBZ6Ewi6r9yssaW7sJ7UMGo9bx",
  "key18": "gizKtkooC5bETg59JZnEPyzf2dLWctfCtuRzKwdqKWhpRjP7b8rHAXGpX1H2SSE2p5pTQAPmf2e3cuyF9uwofrh",
  "key19": "5WtJgSvPgJMNTEjMP5KgeNxjy8uf84itt3UqbGCr9Gxw3sgYJYzyNjxj4rHrcj1evFkRVXxV1o1RN15YtCgeiG1h",
  "key20": "5f1weRQUf6MF4WaV4yHcJNAcVZzbHh4qdUbd5bgPdtx1ST178R5XieYqMkaN3tHnu4pkKS7L8NhjYFAU6S5YifR8",
  "key21": "4ueZMrZ15yGsE72KuPc7qjyEFGBSV9gewTex7nkPLkX6U6mtqEQW4CZnxc65Q2fP4BukpdDKMdmmm8Ma1mtQsHha",
  "key22": "bN5WqYtooo5zEo54BM32zthztow6GNrwifN7CKnynqrg331BWyLTiCbBpzEmrG6s1tEucSD2E8HFQwLLwdWggUm",
  "key23": "PuANeohA5xnSCiyCVvavFiZvyZhHcvu5WSXTHbwp1TDbsUe9xvBbmaRJkJFYAPRRQcebcnKHGh78D4dNi51kRXg",
  "key24": "51J2Gyc5846AkHhwfyNYa3HD13VdRaLwe4KGdaq6x9XoRRtbw1kEFNAj2QC96Q9SRdsTN4DeA5ySeEGxymZtNapV",
  "key25": "322uEUXmFfqnrBNf9jSTYZBGQWSpA6Ao3HnnKvdMmY7pCidGM2nboJE445FTqHvxmqN3rXJVAfXjp9HZrpNthksX",
  "key26": "5tRXQzqfJU9iPthSA9hTyhbnugDsW7cru5iRsnmb1oeyLbMQvxbdRsvATxo2eW7ppKbHP1qBgzdnYAQXSvDJRJSb",
  "key27": "2CKpbWw8ffUg8xt1uKVSQemnuKY3pzUCEUjfoKz4XBhLDpt9bNWDMzjefBdzxrQomrG86k1btYfxtbUsuH4m6WR7",
  "key28": "4XEyZZsBs4zdGktEMbqUo15Rf3N7Z8wAhwATSHtQhvBuUba3vkiGP5FqKhQQcMz8CJPeBGuJB1XXQVRcvB4cQMHq",
  "key29": "2r8rM8j7d2fBTQWnFdq2fb62Gj1afyMZfU2Ukv7EDQHwLEowq7B2o9E3n5fPmZpVNQC1gY1SrxoRGvYKFKLNBGrK",
  "key30": "5AB5tPZ8juDW39dqTypQzEEx8GVSAPX5F17tCsU63wyzMp2o3EqWTWw2W29bxCy7FUTA1EsSMVtvBkcdjFybkXrb",
  "key31": "2kTHMhbe8eDTxzKczMkSGhvJHiWXyxF4hfJ7am8MqxUr9aHdSGjyyCXPQ4MP9aBEKdattffwo1vewiRhbpYwD5WX",
  "key32": "2GfHhwtpfMbQfgu1ntFrhA2LdKHq7JPNQU1LAcWiSMqyJgwsq8ehLeLqQKzQ2ympWNBhfMQiLBn1eFDFqZAX2KKg",
  "key33": "5VwJCSWbF9Za7uvauNvFbSxD3cJbGNep1VHvgF5V7YJTxw7FkV4LNgMBw63zY2f2qB7SNZrrXcjh9MkdXfbbvqeP",
  "key34": "3SSPux2UEtQ3bpqRUHjF8J9PEXJQuTjLGWphDv3LD3rv8LdY6VrpTzwXgPfF2WV1yX9A8AErWKLLgN49k17s7Sgh",
  "key35": "xbyYYaxUKbBV5JjEcGNit78cPLbwY6fkR6CVRdm38mW3sfEwuKz2LhY1XwiVbKQAvVVw4ZZgUrygtHtNpZPubAJ",
  "key36": "3pdFj7ZZgoYESeadbwPSMzHgRuNuie4Gf4DfadrWrZBi1sX5y9spoXstYmCpXMyooVbgriPYirm6LgovwsiiKcQz",
  "key37": "d1HxKDzT3w4ihVVSbKRCEsQKaoTXgyBaN1sG83XWXgvPJQC7chxT3knwzYr8pP63Yxg8GWjPFz2uSKWJ6ofddm9",
  "key38": "2D1AKbdTtPTMfUX1UxwdigyPhYNnYLeRjTuy4bjt2GgQmzwHDDFaVKPTFnhUpZ4FH5RF8LHwFnATbtUgmxfBEqQj",
  "key39": "3z48eg6peiBNBcsWK66qZNhjAkYFYCssZaBnyNswaYAcHM3AVXqT7FwyZZaRm4iy1cn5nEMZbrPsAotxMvJBqLUM",
  "key40": "2qstoJRQj48CVXVmAW3doybecQPbEdwCcMBYCi4uFVCVoiSUxasxNpqD3K6n6MMGgHxQ334EGQ38mVsctgWDWgn6",
  "key41": "64wnBZ5C4HvS7UDHwMD2i5kL4WFdTAj8aaDowhTrUpUHSuo7oo5eq78oScwb5H4heCdj5n6fCzCCqHnihzXSSz5T",
  "key42": "3vm2fKreU562xYqN4fVxiK9vXNQNqeRQrShDuDiP94TLceJGDLt749zBgZLnRMvZ362ZzbdJV6gLBJwgNFeJpZHT",
  "key43": "63EWNDyZ55oybbhshhv6MQRcUnc7CAEgk6Km21gJgqh9qU9DgDTGfeW9vfVfvmWkkxLLZAcpvX3v2RksK1LB1wnk",
  "key44": "2i8NwXF4B4bBJrS9Zete1FWHtdWGYHE9UmJopCFP75GPrgEqzyTMayUmnFrReEH4jGu6Y16YfRJs35fbqUds5aUK",
  "key45": "4aBGLTpmGhAPcEsvvyspvEzRHdvVpQirzx2XaETjBueGtBdqf3R7xDCWZNYpBKWm8pTHYTbbXDeQuq2q3H2Jfh2S",
  "key46": "3r18Wkn4RBr1mjD6XobMsvrneWqwGLDBWt8sXEyHC7gwgE12hmkVuWav41ym1jmH3hP7vDhopSjweM9BHM3ZPnQ"
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
