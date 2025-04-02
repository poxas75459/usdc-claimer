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
    "4YJ3fkUTGJ61u4rwWbBWJLGsErzY38xzQZg961jVvGQnQopB973gaS9Ma4zD2UuWHHYd1NSAxG9KsnCupMbzfUvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e2W7SD7Qs92qCY22qvm3bC9ZLPDzsHybpdEVoHBbyoqiBMM18LRPneZ7P9guAro97j7aGGydkqvALTm1qiWM6YV",
  "key1": "4arAhHrkebvs77sW4jwoxMLW4vcZQ56PXNdBT8qJdVW864oQ83HbSY86rQLAGvgXDqwawHczRDZ1uqtRBqVENfe1",
  "key2": "5FVeCErwnBvrvaZuQMNCRNTQeKfK26cmJBEEkFJvwVLKMkncKNp7fDyQgVuuasbtAwaNz5A8EruqMAYhNYZw6zDD",
  "key3": "A5iQaYkQNbNykvP4XDEpkvXcyoqsmz6Gyi535bxTo4JTrVDgHqMMGuQ2X8ih7MbJmX1pq2vhnH3MgSkwwJQaTKb",
  "key4": "63uwWGy9heoDx77f1N2zyBertbVU87NkSdFeLyXHTaYJLG43txGsnkspRb5q116pZSkAdPMwWMiDBPqU1YwcaXYz",
  "key5": "3ES4WEXvKCVGJoHvyZymL8EsxJ2bBWc9Q3SZWK26fvtRBhq6ctsaygU44wPd8k2a96zPq4cLxdWGJjPwthWP4ppJ",
  "key6": "31fSkT6WF52LFFwgD74AssRN8BeH3ayJgMxxXSVj7K4AhXYwJdUJor4YajK9AK34HaDDrPTrRF6t7MWhEv9qqZtU",
  "key7": "2jGYyRRr6dWLSJJiRwAAfEqciKX8Czd7YdQasJg8VtwTydLW7of1KENBxV9JH2GGFpKpSDELAmwpRMWA6ZBMZQo2",
  "key8": "J4VAmBsT7SZ3EzedeBSv91MB4XjFtfgPjbcWWvYdLzhhKpUejMRSrcYN62DibX3YVNGJfB98duExSiKKE4rGW2i",
  "key9": "5TPe4QpEoLS5BRGHEQPZ3jQcnQ7jHCdU6FbBZwGtmigvqheEUD8YzvaDJ72cfHgRTf2JEtwHT3jwt7gcX38GEguZ",
  "key10": "4pZrwngkaQcTsBCaS24DQidpWMBAcQHYYkCYd7TsgYaWVYz3eEFKRe8ueW3rHJVBXiJLQB5ZRH7sVnJoJCZuWV7V",
  "key11": "23jsTCCLytLPJJFLPPYXNPBszEfjJF3Asa9cE2ZiB5EcByrx67eJFaK3i7LAycfYtdDLEEhuiHBEzAWtjL8jUPSB",
  "key12": "4xTApa8hGUtpprKYs2yHSYoch7pqfaYLYDPJ4a4gSmxhLcHNYhrpYMg3eJNZBw9Jm2BmRiaD9EunVbrDKsLsxNVM",
  "key13": "5HnbScmTXFhtEaWTo56mYSiYDLkSYxrJH8u2QbMLsfrpP1gUC9zcP5HuV3HZTh2XFxKLV3mpsbA5kot9nf6Gb7L4",
  "key14": "4XpUVAiT3DmCXPjioqLBq9r5F46nJjc2WdweJJ9mFq4Kym7otBa1vZTCSah2C9CbTwfZQoc6B33oVsT1gNcSadr7",
  "key15": "2LGYN5bhCohiC9FehckeND8dEuWWd3MdD3Ft3tbVGLWD7xk9Vp1u7rzxMDYVK6ocrYovvzfRDEA3mq4qE42AkD6T",
  "key16": "bMvEJPEsncWvHLaLSUhxfQsqQCJWYe5Gufpy98MiEgJ2djDhYAG1dv7YEiwptufB9JP6drTrdWrUnR6TQHVzVU8",
  "key17": "nu5LNP3138Vq8oahECwAYV1PEPKyAPZKtjtDJobxMbnSAtXFMptbmuVjLiE4Xn2DH43W83xD2aEmDLhxZaGV9xt",
  "key18": "47NqyxVW8honT42sa65JEMTtcCFzuaLxPBu9G1s1KcNGcM13sdZiYWKnSZHXKXzzrAKqGQcWweNwsvAeZLchAozD",
  "key19": "2DxGcZo7vEPeG6YwsnUcc9RStmC2vKUYKXiBRm9UFM9kB9CpAM85FofSsDhyKXbVHbvSnre9tDKkQUvSsACRyhoT",
  "key20": "2VPzwY9wnt7X1GbXtUQUAes8VoQ8qeYnR7DTkhQ3UUPNxe5hMW3FTNpXpQgFmqcFVP2tNFvnZWcN911CYpf7t4wU",
  "key21": "2hTVEC8EpPcn5MGu8pF58MDpCxfGdTEETfwXzB3n4ng736d9uK8bPip4FJpUtEiFCgLmg6kbwjEapTetvDYTyPTa",
  "key22": "5QCCwYerxsXxi1HN34t8ypceFMHUNXznYLxZQnH487yNjjNeCE33n6RfE7mmJzrVH7vpiEe5fwSm95AT9wXGyaWJ",
  "key23": "5w2XkpHyavxJzH18eNSgvqN8DvN5WoyHVuriWBvcjWbEsDd9Q3g53gwq9v7TDYMmLRWLfG7DBRUC2zQPqttd74C1",
  "key24": "2JKtrWSkNRYPJLX6zJogxCgZ4CKY44hedH1foSLzfBsu7fBHr6RG4yT3xwS3YmrTX9THFPbq2ZJ7tL6vxbtyXjsk",
  "key25": "Vdw1qm5EjZN7GiTiGN2Dr7TkXNGmDbZ9EARdTUjFnKijcYYQUSpoUAa1rwQcyYs9RsN2HbUkWcoQksCvfMGUJd4",
  "key26": "4ZKNucyvykeFXzXJZukPstYJDuUoBGkCC1Tn3ubK4Pq4vB32oowg1vBEExHb2wPkC78ixp48whxDTvBuwBuFBapA",
  "key27": "3G9P7b53Tehd5h4q7xfUTyxp8MswH9BV1nURu22ChpwQgyua92CCuF9f2L3HwNP5m1NCh85Brx2vLxnkkBp1URpM",
  "key28": "5CvrxYUQwQBK5N97zHyyk7hYQyVKKkSyzAnQHnYxGh3gYZTCDSrJn5fbWVMXHyZxdDXujKYSjHZVL7HW1dB8CcPq",
  "key29": "3Yekzd1EitsbU6P1VmMnr8sN9s1uzrtst8xszFhtj1G4w7BU4Sw1FLGKWcGG1NHUaRm2PKuYZBiLz5xguGZd3TgQ",
  "key30": "4oSoGxmxuGsQHkpfPEdaczb6C4WzUmQ1giVfNzdnjg7u8ov8WWzJUKWnq1x4XhgqkPuuU37m87aRtn1pb6jQ7fEr",
  "key31": "siynqiCFvQVRXbSr2Tep9g2DUKnuwKfX1y6qSJWun3P9dDa3nzNbUzGJdmzcQ2vtBToLFrmkW3mW6sTPaf5id9K",
  "key32": "41vYYp135dazkuQyZTHW8QzBUXY1XMrNPUun6QycbvNYsHgEbFzeY2jH3sx8eHNNNc6FfTd5wHra5Q1in8Z7Z2YA",
  "key33": "59ZUXgHqXN3bcNUq8cWdMQ6eLSuZYBnKpAeaAAAk3CbRe6pmwip63Jj3keKzVMr6vJvqyDRqgrv5phH1zny5xeQT",
  "key34": "zFdZ4PxjxfuR1YkSz6mBzuBd5mXrirXiLusNauvJ7J2viHxtAsNqVwXZqGk8y8GDYNXaowM3qEdWSdDBf6VUGxm",
  "key35": "mN8C6ucA5D6392vYHCPHTs7EHLa4fMMDisLSCi3rxaw9u688Kk8EL1uHPXo8PqZyiizah6rFRJxaEgRXcFUZHFx",
  "key36": "4USZwsPKF9C2uDGDVBztF1XuMw6GhFLqS7ivVXCmaFDVCS2BHe4L9vaihNd6eKWrSQzjbao8bwc4WLZxKRFMf9QF",
  "key37": "TCqacu54vo7Z68dhz7L26soPtN9T6bTg1LrEdaqCEcdk4EoB3ZGDUowjJg8txYyE3TCG57Htdo79ZKugtJf8JAy",
  "key38": "jQo42WKye6yoMfkjGNgXyx88onHchZBqMqrF711qrsnTvR37RkxSNtaUpVmgxHqUABRhBp34vPYKxbNkgH2sDtB",
  "key39": "4D3JRgXbyDo36wSq8ZEvcwofHZ9MYGoCrh1eCXsPArkoSasQNXy7X76zHHcqFVYdDbYXJeLfK9eLGQteyQGXkPbY",
  "key40": "Ua87a1UZVkuGgH8i9fPo71vd3B3333uDBqxDBYsjAsExAb62f1tqWB4kVPaLNQ1JGVW9yr423rw258prNrFLaKZ",
  "key41": "5id3nRNL9a1Vn2SavJekwB3UYXZR6WkLnmMLZ6gRhPxrE5jeVSANkzF6HiYHh79JJopvKsnTKMqfmz7uqPwttbu2",
  "key42": "2ePWpGKkcvdWuizuHVxfw3ijYPuxJjk38ZiiiMr4gLszHF68LwBJgnCUaBTQTXf1yM6aSLGfXsoJUY39ZSWZuThe",
  "key43": "5hEMaUyU4ZLhPz9VwwphQPFBjQmCAkmMqTLiVPEWPvTCU9kivEeurJXKraUirpgbt3rct62q8evyzGTe27mUFK9T",
  "key44": "4uCFij1ebdw4cW8StyaaKCKajHjwm3U31qeFeocE85Uo3nZyjd1pNRmNPrG1jPk6h4cWUwaUpBqpRUmPyaHppVux",
  "key45": "4ftYoXxSAWMcCQCA2cjkyZpypjeaXKW8djcoQj7BKHxNoUwJQyH8A7Aj2qq9rpKEQS4R6i3VXBMQyDGwhf85E7cJ",
  "key46": "F22v4yNHGDoEdshamkSzzjKBvpHTSfiTBDJXGv3GR3qakhEM5XfWAhjsDpvzpfT6mgKig7KNpZZSwaFXy8LytrT",
  "key47": "2GTDDgznpx5HV3CLWE4kVW5bajtwb6viJnzw5P9K5bsdGJ3K5tuETxUWYSeqxdxVQN7fXSGW51XbT5jVCXgbG7EA",
  "key48": "p6b3QVz7rH5RffzaELCbz987Qryt457nq7NkXwgJ9mjkp9GAM1tTVyRvwCC6Ha4VLM2hcsmL93ptJRasFCDKEKy",
  "key49": "3kte9SAFDtpFVxJhHrh3DmkA7EDWHD287DUZupZgmxDoMomep2zjUVRbR5AXcr894w8DrNSasA3SVJ1N3nC46hMq"
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
