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
    "5MabSuumDibbkj1VqMWKaSW82cjt98TrfSyhXonS6vvtd8n3e8sMLax4ACYGUq2qQoiNXpoSgUNKMV6sxgJUebPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mA5nhiQBjST1vUsyzmAYTJ6jrse22Dq4HSUwvwz4nadoh9ZaPRAMGajwcgT8NmdN9pZVNYezaoE1ouKNSAQLXVA",
  "key1": "6fdSLjVMFXU94c69R1M4TTepQWTDNJXuxUYyA8YrGxb2LeXPif889aEcy9vrDKvcGoHjN6Ho9PL43DRcoa3ZSsS",
  "key2": "n28DZxoHmjmiKHdQkc9TwHqSGimjq9fC3qTzLniP4eGaDX762tKsDGC6ZrUMY3D62BeVS5aYbDiXmFCUvkDhXiw",
  "key3": "2cRJRa2y33KGhcBXzgdM7PWA4mBpBwcggH76z1hettgP2hbQX29PtaJSWQRLMJ3FZNBcPgwniVQGFq9HaHoE2MLe",
  "key4": "2CXz3bzNic6G39VGuUiU7Dq2uqrHmFUj3AFxSqaKEMChxu82R3np9JvQSScfbsCip18cU6mc5QaUxYpULjvmbJz5",
  "key5": "2yb7PvFeM4KpCnJMfWXJ33zmMSjbtp9StKYebwmKM4BQU8fmUL4yZhEXAr9aDCwiLJm699tJSp5nEdtCQWR91Lgw",
  "key6": "3k1KaCF1NErKJwXBxSn39Ya38N6zGHSR4bp32vGqUegDRu88TJfMbEyESYJtLAA2Lh9t12SJcYNZtZ2S9Wk9CxKo",
  "key7": "u4cvdnT5u5WGQSUD1fiowVnobzafV17zjpGERJnnUNPPsBY8rjSWenS7vPhvN9QQw3bHY7LZsogMJb6mZQwGfuu",
  "key8": "65PetostRgZLQ4FS496oNU4WCTxhNbnSHZ6vzGwKoQrQHWmNAAq9wdg1m2U9iwnpnTujNoGcNzZKqphZNmerbumN",
  "key9": "4aZR9efw6pvmWfEosAmuf28zSGpyTQYfDQYfjgYMwqRJkZUEcgCjZXWN8kDr47KkbqF5mXL7GtNKKF1WH1SLXyms",
  "key10": "3tbT1Ab9M4LYkpDM37GyNDNyhHGySYh6X1vRxbnuhssqWZbAwDrtpBjJM4gqP7vSFGjwHW91MSaPpUfHPWmHiRD2",
  "key11": "5NTdGzt7eQfndLVYrFJkzdSj8KzKJHUso3jfkK7bvsHYGzJR6jPtZWu8wP85HL1oswxpCRdYqtGigoJYseWxQquk",
  "key12": "4X4K6yKiA7V1DVUcuevub8q15nHGUrZakB5gRpZ8xUmUGkmJkKGFqTKqtUA3ne5VAsM47UUXLkU89PpEiMCDNQBn",
  "key13": "5PtbvmhAMCqFRpmrKqKu3jbXKy2tKfxVKKDCGmrUYGA4MtbwHNx3dcHEXEEh29Lz3KRtcJDTdvHV2ngGaNZWV8tG",
  "key14": "4B1s5bbvv5zxWPq1Uq4UFuHDP7QNkGVAn3sbDQ5i4m8XJKzaHf6nxoAmb3EjCULcZ6BhVYAtBhkNCH89mNRBYQYH",
  "key15": "7Nf9TS2vEbgc9zS3mGQRJ4TsMRN64ZNChdMsoY8WmyJL58Qt6rT5PLaefHbsNnXjibVrxaHE39gjnKaBpEN4mdz",
  "key16": "55huqwGmihto2HwyEfdkmJ7y5AR1a1KmzZrtqWK8DnXLs2hUbuTnFhYiALZ7r8mevYTN7rsnprSL4k2cpJhG4gx3",
  "key17": "5XQd7Jo22sXXaycAd4QZCAuYwsh7N7g49khTdqk9Er1ueK9vXzoA4RJu553HBRRMu95g6M7xADn9XbWznd7kpdpt",
  "key18": "265tiBesiimkCon5MyNqkLDJRNJRQqtdRqshg2G31Tf2UCS57KUkKEVV3mm7kdCiZUMEgyz5wzsiZSEY48sYfFUq",
  "key19": "39xnvHHyZrD46LGfhPgCUtgfXgv5y7o4XtzQnFmfhxFvZECQ2rrgQNvX7LmhsGErQkvj1QbWcDoLseQKusbzPQxn",
  "key20": "2pvrqAu7mGxH3UhFeXhhjUAW4hdCF1wkqVsBAdnYK42SA1MtqSVqJbUXVv5wQwrreiV3D6WBk2jtnc5fpL5ZkBM6",
  "key21": "2xoTdZFo9CCjA3a8cattFKgR9tLMZKdmzqdWrD6QiuTRJNRcbSSNbNJ532vJyudyHT8LgTu8tmsSj1Qyb3ZWkyVH",
  "key22": "4XfA3ben7XijSDJo2wCcKu8nGjZPSPMZzzhoGDW2iXQxWSHFwfQ3RDeYMNamAE9Rdf6NNXguyF7m53wL4k2A7DqC",
  "key23": "2GNfJVCd3VDTS1gpR1yzwUeMHtCT1iBzapdDFSJekBozNd48SrRTc3iTP5qFvsEKgeSq9gvu98fAZCTbt1xbtT1D",
  "key24": "4f42m5hJcFXtXVw1ht1nZ57CF1Qnzd9rX3RuNKB2XNAZ1yL7SrmwbVmYKtFKHsFPiivDPnqDUEKED1odzX1D5ZZw",
  "key25": "QmcWG4ETeGLkGTYCN1fL1X6hhAvXBE52aVwKRrpcRBBfhQKfCcshCtrUEFucF1Dxo8DbN8KBRPbTyea2krRXXkH",
  "key26": "3hg3qQHTgi1h9ahnjcKtJQU25bo7Vz4uNt1r9jSc96g2iNuf9TS4WndxTKrbBNDB7B5CEFu3wWUKrqThqkfZNAVx",
  "key27": "2kj8R3oh8YTQG8gsawYF82ae1hbpYbie3kCwh5gaGvqdb9zqc8ibKXZgRMdxAdcWtS41awWoLMYqnncfNrdp322B",
  "key28": "4UPYrh2csUJ3Wrm8TdzZPBkGEDo3Z534a3AC3uLwLY1aJ5TYL75A7B22auucoPX22XTzNwWyi8sk729VohdWArU5",
  "key29": "cEhfz9BwJPnY1kHQGqWaqyciuvEcomNWYJK1dKeYP2nheLrwomQZMdqBvWoD3iXc5oygunxWQf8U1eiAhojSVKk",
  "key30": "jYzhPx73hmm6wJhcggSvYF4KvaeZpnnJzmEcXx1zJumMtbqqn1eLxWYDZGrSvV8NNf36jiZvdvKKpep2FoRYHa1",
  "key31": "5RKE3oWXS2CyH82KJBCHChMv6KNk9oRPpFvE2WR2rxejwQZEct5dBkSHcT6zazn6U4zapuRyfyx8545qtW2ZEg3D",
  "key32": "2qEcuCBfd1b7r59A72jSK9omjBKSeg2B5MstAKKCD9xVHnUYVA4jRbmE4i3QYiXLAUjmsA2YTzjGDaJzAAtHN5AZ",
  "key33": "2gUcMs3xXsuJ8joG5fU5FVzqA1DF3hLxgPCHT9SVGe3Ap12GZGazEmZbPWxE5tRLTMkGTxaQQV2DpskzBADJ9q1",
  "key34": "oBvSM4ipdWNnsHKrYvXs8narrvmY2MA4wasPDvcTySX6WZFe8uU5ZLZC88z4kYBNpwh6zbGZhNdXB59oCZMoxFC",
  "key35": "4sbVehi2dn5eSbJNtngH6W1HmqfHy1LfsKJh1xCdHxyQGdzWQwRk818dc4cjgssAKHZLA4vq16hZDUv7p7XQTnRS",
  "key36": "rBaEQLsfG4jTjZzqm7rXAmGp7NkbsMFuSHuupF6K1sMBS9pZF5o4646VuPrtkAW3ogVHgkKi1SuRXK7qHSKr9zH",
  "key37": "4hWi7svbqrLafTBY9y2wNrrmsjQjruQDsQkwnBHaUTQzyvUighwUyToZm4VrV4w86erJQjhyrWE67wHng6DbHaJb",
  "key38": "2Ksw3G3CLY1x3AniaE8NZCNinGu1aywbDLLd5p6XHzhrazsqf9RUWfvLt9pwb9TNGxQ3sQrgctoeqZ7oKq21R18f",
  "key39": "4WxKrHCfvsjBV6g6riovq4Vqsb9jmxAc5gfJkvNCyPQLJWdwMEHeyNsc6dt5kUKrGNxK2XuhedkKK6dDK8Bk6qBf"
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
