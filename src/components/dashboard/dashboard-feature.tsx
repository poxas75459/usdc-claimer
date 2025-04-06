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
    "4QxPQTVXp5FJiJto9wjziTi9mXcpzYq5oRT9f9KF8RbFeSgcFh7BoY7P84Np6rRa4mhTtpZgt67Gww5PdiqEwD4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ievTyRYoKEdmd6sSxTtdB8krbCZkNsAMsrkx4yqeQusfH468uszeMLMFPAnUU64pQtrUte76ia9CYaNiPpecHvf",
  "key1": "v6VgcpqiqvycPxJwQ7wMeQnzKDSorwEVvQahMu4bG1J5Wf8hMZCByNnWsbsrYCpw55gjWHyed22MXtPWr4nTVTv",
  "key2": "Eeo7fBjzieuZBQJtTvHXTKCgpB4hbVKvDC9tqCsAFALrNYaZkC2imARq3cgkjoXuruqDJUrHxMjgMMtAEYn69Gd",
  "key3": "5qjkagYqtM9NTAQWYRXrazrWza5uoncRsahAn1dhftkLXZuAo6qYaG8yTSKkmkKoK4UKGzZbCaJGk4LhgYwvS5xQ",
  "key4": "2BAZaN3Hiuum1fbPJnaawHrchJXBw1nmCYNk5HzKVaLRneCLfR5qmTckHCBoikUpD8gGbnuKe7hK2WacjfJpZmDa",
  "key5": "4jNnnyivDM5MaZkieNHJWshqr3tcLE9xmH2bo1Ph1QpntBeUBXUz3KXV4GQqKynuoMHWc2KJsqxjkGqY5Zm4Qphj",
  "key6": "3AyP66Cvzhz5NHQYdmTg2grj4Lf7rrF6PknC58AAxsRHicHBm4FPJr9oX7kqqAf47RQW1UhcW7R1R1uWjkHQsPWh",
  "key7": "2krJqfaShYdx2pgpMh2h6mEtvPBXfEH9ZVNb4kkyL1vxMoRH45CHgDbfShegb1wYAamPFyf8rqCZsFLMrpWKfLHU",
  "key8": "4cM1x6nYJWnUGDsw6fV9N5KcQRi4vpNR2jFfSjoB6wiXiag7v844q5mrdV3x1qPvEMtiypmppr7F3Lecc8ezBUaS",
  "key9": "4pEj2xBphmUzcfAGZDF2qg9LmHbNYnhuDcK24BogdgpSVzdiXJQszTZBPkxnE6Za6yXSf5cstwdrWJwNiE7cEHeq",
  "key10": "u9knuBKWtBbQ6WzqZogKbMoaA3Hje86Fa9JpJL4c4ExmhgNwfAWD7hftDSEWoxbKLUkBwSK236JAhKuaddemfXr",
  "key11": "4GqTpMB6SRzykewxrBzqyiwQwCKV63e4N1veVPxQsDzufgPXSQMgyi6SVQrnBXmq7dxNwZ3dtTXwnYm831fdiM7j",
  "key12": "2swrykJKc7Rb5XqM4TDNJVuRmRP6VCR4dmdWBWWY1PhMPfJFidHbDQ55t4ryTcysLHgzdSL784WdoP52LGcqEmjn",
  "key13": "465cqpDSgsfhHeVRDdKecM7NjH1acPYYoqg1jAeZfVtZNq6rLb9dnWFWmipBCzYNRSMvsq6EKyzH2GgxDRrmZ52w",
  "key14": "5CbBWoVVcxJVCsrSjMkBHuffguRLD2eBndjcsS8RdvXLttpmRZFKDcQAwf7mGVyof8qpBHg7qkFjPxL3MAxywep4",
  "key15": "h2BXeyUi3wkjdaMb8kSa9EjZ1mjnZD5uGQSBhPTkgi4XD6QJCT1F6UG3d2hqCMuowNnok1YPP1pp7FtQ9ZmjzuC",
  "key16": "662VrN2L1cckMemVigwcnJCSYAzeQfkLGxSMaAvYH1nFN2YRHfgbbY2GQxxPgKqwgGfmsYMVMrVoYZUyFrLLbk9e",
  "key17": "2r73uvgcmk8WnkgHm4CyFmx3HwfWc94Pmr4ypswsgFy4HvChPo9a1wff7stUqHHAqQiEaoNNwhArEBtvLYikKfRw",
  "key18": "Ro74ak1wqQroA1kmi9S6NaHbZursQmsBcSppowa2eUHqpEgTSgd4zzFRrPSzSuFMLsKKNsffuH7HpCF776hdR8s",
  "key19": "34KAQswy3azjGf1PhTFeRdmNLdDjJBhhsTejDM8472vcwPDGq4M2S7BjXARTavU1AFyeMTCajPKiz1f43SNZQPLb",
  "key20": "3iPTQnBiXvCfvYzLp3UuJDBhJLzCCQ6mP1yGru5WB5f31reuD262U2QkchAbWpyoZYP2x1vDwLGAP7rbMhKJGfpr",
  "key21": "2RuctNzYgUadwPhsF4rHYeWtZYQgm1D6LE7bHrqu2qzo3xSc6zJ1WS5j3iFzmfFAHhcvZ4v4inyZcNcxLCsCpfwH",
  "key22": "HeJZ1TyrA5A79rvyU39hswLhGBarto58kC1bVF1gBdc4rNqW1yF1edYUUC9abqUa1MHYv8aymynfRWysjXQr3yX",
  "key23": "3Stk8P36RxH9u5sgGsfXwEPBC2gU7Tq3wTgrfCupUZJs2ULmjVoGHofxAtkvZiwjN4VS52662hcSnPuS7r3vhSBi",
  "key24": "2RicPSR9ut8ALyNbyPeQ6zML9CrhDY4nM9Fvd99bFi4hxs9QfWvZMzQZWKkNVvETgcVkqUaSrGM9KtCuDVmw9jWb",
  "key25": "5E3adsDZALs5EcvVt3A5TS5VdsJZEfVaB1xSQXfgmaV9PCEmarVPQUMLWP4w9Bvkjradf3tqiZKv8RgdMmcyyALV",
  "key26": "3ATVCabz5iRtD7gzMCUQr8uksvGoRBgbsfpqeVEWQ6K1UzvGTT75syXipEp4STk4Q2hcbSZ5kYvqM8dH4kXzygYe",
  "key27": "2e8r6QCdt6mLSPRY1JCZ7HiAwGqv9fw6ae8oKKcC5Ss6K4nAbunQ4HiCrZS9yYajJJtEPXRqEPomDmzkt6hNPJar",
  "key28": "5ETQoUQdsZRTACU2JknJLT8AfmNSMihh7ELWicKZjzLE9gdi67pesNYXq2ES6UyQ2gnvmiaVUD7tcdM5HGSgMTRg",
  "key29": "2DUoHRZ62fxmRJrPU5ZfAcpFjqAYKyYupxV5KVrpjW8MJq4DdMZC13S2yRrWyRnch4BpUJGnCs5EMCvFCAz4M96k",
  "key30": "51GhjDdrrLytSPKVtQxtxctjGrRPeDWSWQyJQMT54SoksabwemH4Bk5RhZx8khWMXwGFwGUUSJQLqHnCjXX87phA",
  "key31": "26cQNFSbbve5AuJjiNFc7VS41qkB5JRyLkpRZjaA3XGdyFJVeRjy2sKciQeL676Y3w7jM2YfBp9C6ixYh6JYbpZ7",
  "key32": "5k8Jow5MLwADQ4edmvb6k6WmDsTmunaq2SX2R9Mx81SfDUrFZxiyL5Suj2SnpsA2tjUYbQzPRvxdgRir6BLETiGv",
  "key33": "2QQXPDr7GujZQYBD95aBw6xMnqRYdmytwaXadWQTW6Y7QNMFLNe6w21RKJWxGwtSJMbUW2jtkC6eoaAef7N6NwRi",
  "key34": "61zpQW5dg7pT5xKQ4bUzLPC9YJN5iQtTPwroGiiXEdbEGkjjPCGtnXXkjFRrRoh5hAYwK6AkBMj4WZ4W5tcKzz9H",
  "key35": "58L2weTBQ7Mc9s1DNryGriczNxt155HWwNkaZZeJfep2BWmoGPBsNZxQmJkVtWRsjLGCCVEFQp8nTLVsanurrrKs",
  "key36": "2omn9ZMX2cVZt1UuTRXSjktPbmo7LMyP8pPa1JsA56gJHN19f8rUyrqBm4zyAqgCu8GrCiMYh5UYJtPCSXz1K1F9",
  "key37": "5Naj3fbocSjBf7c7buSuV52F7hm3QezayX8W1dcRNwqss89w3tTbjbgiZyCewyvMTQNSEzrxs5Q1sud13vVYygXe",
  "key38": "gzPMBVJSn7HaW24LDioZYnjVxyRJqaikhBxgfub8E8R8Z53F8iTYXGPW8eZofdn6g15MQCh2qJU8jFSnLo1PF6W",
  "key39": "3YcNwkANQoTSaRkqxHMjLNAC1S99Qh4oughUQuuab8BJArWA17Cn6Wmbxn6Z7baBarhhHJUZoqtLYE3yDLbsJ3GW",
  "key40": "5CJqEx5zE4woHrNkScdR67PQ8Ft7F9XypmcaHPfNrHuNbuckWei7UiHTdidoJDaXJTHvftn5neuWseB9eyh7T4Vr"
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
