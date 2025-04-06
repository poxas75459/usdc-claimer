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
    "24NP8Ze7FQ8GxaMk5peKSeA2nj9nbJyyqS5tjr8DD1G7q8t3opqwhghGUscZZ2XktyQbf1Gt6FLypnPmS7MP6fiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HBXozL6D4HDVcFxjshuNqox84fPNPn3NctANaeiv8XUZttmWQTGhymxEHtMFnzguVYQopa1JQJCycrZh2LFwuWF",
  "key1": "54KM13K12HcNJoar21nxYUY1Mwc6X8wuG6EDzmibuBYFCDua7h7UyKd6TcF1rRmgA6kDVAqsxDqLvZwNrgyyXg5q",
  "key2": "2EGHMsyt5nUGwXRB6MF43C4NzkM84MRhjAW8neDZ1fwyv6RKu7Dd8mDTY7rwGZCUYX78LzuJupBs4rxjtjXWi2Sb",
  "key3": "2VwfsfQsu22nWYSYGGi9wCBe2MBjYjaahWdkqBLoSJjGBbW2JKT6LeQrtAWWeu4KSvAb6ngeKh9cwDEng2kVeQib",
  "key4": "35H8rbicdKPiGcXcimAsSJL7cU8DkmGHhm2A1NohzpJABSEprwFzJoERtcubuPMAd4Y9q7pyKJMhfkxMjy4ZnDs4",
  "key5": "2t81va3KhgXqDHyBdJhVhLP7Qees5AsooTobw2CjBXDTbekRpjSdRDRKZS75htohSEvPRdz77KDAYJKiWZ96GN2s",
  "key6": "5Tir452PEvuwDwn8UKnbt2YegwPLqkmNyfY5G8u3WqvZJTV2EaaRyH4XpS7qyZyYJBb7tZjyunZ1HBZXxBXCFbEz",
  "key7": "37e1PYqr435XzKF16PxKrvMZVk9UPk1foNNUJL7c1mD2QzqddWNTAT9FYDqMXZPg4FhRTxVgT6RHAt2GLpJaCE1r",
  "key8": "3mp1r1PmmFRSdrbqyaUGAkwaBCvzpsRdppM7NBDAGSHj3L2wjx91rntTooKJoiD61ga3LtohkWQcHvE5RVGM1gZ6",
  "key9": "Y5r6WdVUebtaribEe5632Bv4scxkTAwX48nZoJ2LbNoA4VjsKHbGwSRHGU5wZMMGRsMggNY3qiyBrFNsT1gaxcn",
  "key10": "4cRcSo8GFxm4Bo7GL5GFuXKwgyNXSeH2A3ZbuqCH5pKWfxR6rmVsiuTdXCR1bnnMRLaHRTbGcUQ28x73KEZkh9As",
  "key11": "4LEcqoQqEa9ZTjeDSPu7s6SJX5REhyvPjATuKKndcTCFo1KnvX3exoCfDJb8kGKh6fzTNPNDX9A17HkLzSKBi5Am",
  "key12": "42qd6YnXcqJRQycjsXeS1DvqxHbWhH9kvVaY4jToA3oBqHBbCSkXpUZeH3JnQGAQHsN1uZfy2YAYqYLzyPvhWdtt",
  "key13": "5W7hzMeDBzg8GRsyUDw5T9B8f5gRfRTvejscwjzcS8mocPZwSStoK8purXDH5cqcWjmQ6LRZrBmmpuu7E4tv7qMW",
  "key14": "3QLschSJiArjxi2EF84QDwqkitrGBgnkCtZsfbVfFUzMWRnpCvPdwNqEi1um4V5vo1FRp2kiCUhr8999zhFVnb4y",
  "key15": "5pr2Qw6bjCxnZZjiXo9TBs4wxWJda71ZptUzwBbw6Aem9AjzfwY8wwu1U85ANFdq1ry2XDi9XwPdszsBbbbh3Jh6",
  "key16": "2BD2LgveibGLCyBP266D72GNRLdopcSA5LEugyM2yN6irT1B5kjxuz2jAc5Z2fawY9asXccRA7LBjjzzZ7DmSVZx",
  "key17": "3mygb26sWYcsv7JtugnMzvVMDqBrTB3V3TAc7K1DBjxL5p8JQS3LpkTxueMm73UuyjZVGLbxi4s5EhbTtEKgspua",
  "key18": "2gEKbwxQqGXqKL7jbHSv171zYCBD557cMQgWbS33pPUgGfosqmgvvnqcsVPGnVg66RXanwrbyGobXeCYhEijZoZA",
  "key19": "4BUKz5LWKJfcbT3bPjRWSFYdzgg56r7KyAQZ9BGpQJNMXQNMhSBBg9xHngarGoQeCe2fQiPkYkmNx8FcdASjEuE",
  "key20": "2RhqssbTzhYNwcJKg4wWY3wrbAsg4nhd7Egugw2aw4VUvGtHodMnfcxBbB27t1ketC2aZohzpuqauZi8akHpzEE9",
  "key21": "47nrSo7fDz4i85MgCFdZ5V8eX1b33H1h8Gxae4o35k45QDWyQ9LAJbR4jq9eK9jwVoDmf75e14RSBmTmcGtZoVVe",
  "key22": "5m76HdDcpJb5Tie3QaTHmwaBxnoXPKiNeZC8TcvxH6uBAoWNakY2ZQGCFR5JRKT9zyzJM6VfNygyViVW6QZBvVng",
  "key23": "3FU39rXKwS669P7gQLJAFLQjv2HTrENJ5ysrTWyy8P9t9bhGU9uf1ZRhRJMyGftmTCKpB2nVNCDBSehYACa72dn3",
  "key24": "5P7UcGQQd5nguCuuXcxz6w8FFTiSSYQXey9XHpsRxuKHYbNmqCkqyaG1sPY2YdnsppTw8y29STxbcq6zbZ49VBAU",
  "key25": "2oHqYyG1CAAEw2ieKpMwcvP2qnipjHxnkGJhEw2gFAN6MjyjpdgGSYkE1WZjxFfkjfNLzdEuNeEdoay9oPPeWA3H",
  "key26": "4yu2fLwm2Ew3NsbkzeXu7Qrp3RFEh58vf1BR1DfTNyeCtzKpz5nQ7wmSaaRX5tvH2zzUnoF31ssXWwVcBpDmhAxY",
  "key27": "2TCnM5HF9MCCEGCpyS2HZK2dNxufLCEP2L76huqsYzn6ppkr6Jj1dGsAecFxz3tDvXcMVDEs8a43HbBXYRyTSBGL",
  "key28": "648tn5pgxjVvHN6KqVFPgrsp7Ru5CDLixkZ6fR6Ptj49Ha5SLZz9YKYQQccDadf1DxXiBksjmotNkryU2bj77w43",
  "key29": "23LzeGRhX4FeH7ptuzD9QMMqBa9EC2krBJHQSPgsfaQC8FZJCarxuxopKzNWUWtiU2Hidt69dQRNCuTCSAjyzpPM",
  "key30": "24YY8cFm4JC8Zyo4YFrGhQWtzzqM8ahCekudrWcTgcUvygLHNezmxmc2W4vfFBsKcfS4uvcQ6xUvgWxWpFJg78Ti",
  "key31": "5S45qJnNkAgJBkmLZJ5ndcCyY4EPvtLu1aGVjnZUTa7sEwFYmunQFUZV34EFGu5EcvFp8n2x3VzYWtiWjkUfwJwi",
  "key32": "LATJ3Z2WgH5aaTVGwju3CLP5jM5dbC7gtQfSH1DtxxvwZZ5cCCHRjsUf4fkKUP6VDp3D3fN6SYFy3sSwzfNLVHk",
  "key33": "2iW7zcQdrz6PnaGYuqHSdMfXCPTnTU1RzgN5pfhGxPUXuzRVTvCLkVHwjh3dF8JZDKWuEBBtC3oe2eZvf2SWtukZ",
  "key34": "3DCwHC2EscURuierRKu23zsoiCMf66K8U5xLuaeNNshL3XaFiU2vYUiTPDYhjs1qqBitQhTQbbmgcheTYtkmzxve",
  "key35": "5YLCZvPvRrm5ddAWHeoLXY8FQJBv9tG6B2ahPU1nUdJZkENQpGVagnmbrdTn63XHUbe48xBNHU6gHvakJyvZn2Jy",
  "key36": "5RWQNCcLdsFmxx8KSSSjD5bS5v6f9c1vjw7GZkgYcoAGEdP6iYePhvcvhkdcys457BBNLECWNfrkSZbBFTBV4ax6",
  "key37": "2rP1gW93WwQSKnY4XgpbLEubqnJ54go1zHzpCSK1eEwQPbJpXn7ySKSqpQ96iS3M1gr3H1DZqjvYKMhLXLKRsYs",
  "key38": "3jYwdRK8d5JJ19gD1y5AELANtWpwS9hrEpKfUqtxpmRmMf2iEqf17TS1FUfoxFadwz14deiqPqafJ4YFyHF3MC9i",
  "key39": "2XjgSgZkCaUtzbjvEtrzquW2Q4ojp4qd8hYXEtyMmDncoSkAgyVsYRZRaGaX8erWNszdk6fXuGNMvyXSTD6jmCLU",
  "key40": "WGsD6ZM64usVyrNrhWqyCDsZLJG5qNkQXArJyAG8wYj5vr8i1tgZr6HnTE7E5aUZpSjZRENpA2kQUkVdfBopPtZ",
  "key41": "s6uuWaBBVQu7fQUE17qemfgzLGtHQA52ofAWG6DtA9EjR4QX5iRfJQuCon3gV5gCRRL79NGkAJEcoEGEqeyCuGG"
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
