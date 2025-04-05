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
    "2Lr7HEbWPSCashPRxZyCx4SLnJcX4U5UjDuDf8TV8NVjKTrukuJUHBnXsv8dxuX5vYv7xqDqg5HprUoPx2uccX2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MCPuZd8nZxN94P13DmVuaQoXiMNQDFmJwrqk7dRpZT1Gt2SRcPXyq1uMtp7K24QhAAk6eNSu3RhvJMRMM1MSV6k",
  "key1": "3p8SAapWYnJfqc3Mgx4Zsmkb7CSi7VGhtRkjuAdRbfc4W2kWCuM5PsAqz4oGavbMiGrSSBYzWZCi3nA669oBTesR",
  "key2": "rVgNp67eGGoKyhzTuBsTQTX9suCt3SQ5obZdBeVZfwNF4CTSHb31X9Zg87jwy75SiUTFz85mKQCZKUqpMP63wNM",
  "key3": "22tH7WXLpiHwxH62CD9vjCFC3NCuQjzD1oHZQTitsevkE5CssTtdb6cwWv4mrRiwPbMKgSq4wAGVVkkYBjzjRyEb",
  "key4": "64nHyCXeAn5mhEvGQJNawiPPpYkWeAHadNNbea5zmftEcNPEMMiN3wUrwQmsE71Xwemyveb3LqWbAYStUvj7uU5y",
  "key5": "4axxGkbkwVi1KPSZntQR8y7Lkj95zrcp4deXwEdSymaBu15bMZjXx9t4yGigBArfq5Wa2XV9tP9mf1ssufCUar3X",
  "key6": "4mCAJBuJaxizyUA7wshssLc6zZEJ1Ttwp91KgYkT55iDUkHxAQuW9yXVUewcvWnTMvPUZriNwGsMBpwDGt7HdVkK",
  "key7": "4mLSbevZ6ZTHyE2qUVxotLcJ5Km7CiosP2NaNPsA7qAWbkk8FQQasLsUhcPguwR7s1W8CJUME1UCyrmisCX3NtmL",
  "key8": "4wkZnTP3mHaGpTjwgSSnvGWW4GpjoEgNoCddtETUaUSLmuNQDQ6LqdqGJRS4kM6EiiZUYmcL75DwyvgQjojvKqJ7",
  "key9": "2NoK1hJv9TpLaHzH1R3EoKyNuzCFbP785owiH7MeFARa35q9JHcuFHqGR9ytLLuPPajbMkTvkMRgBKZvpAC4c1BC",
  "key10": "2jcKvU8Au5cFuzcynC6ih5GNNp9qp1HrauBvLyvaueRSxWt1e8Jys2Eu98AtxSCCSXaUvMXJb5u7RRhswkuAjnyH",
  "key11": "8m8KbafQRrbouFsxHYoLpjghEtPnF5F9cP97k4RcL96BjPbssk2x5TryW2NRsSuhDfxcRRBtu1TvznPx73VsUVL",
  "key12": "5W3r67NdB5whAcWrbB2V28N2hUzYo19MNr2wRsnSRYBf6TR1sAdDSKqWvmCXwgZcaA9boh6Mnr1mKtFQ6VSwVXqh",
  "key13": "7kqk4wBo7mSEphuv6vQxJgDJGN1oTBYiEUKrb1e33PpdKKHkY9w4ySDQqWdqGZm5k8PBMVUjDspfJhbu71kEbWE",
  "key14": "As2Zz99PsHmbj9jDYdGY8g6AasLsDE44yWi9wbUpFY3yLqK4qheYcGDALeih6AdoUmYQATUthG5RGFvMPAWHxdj",
  "key15": "KaTXsbXVXeSP5AnRaU7KywctJofsDkMTjcDZF4ZpGgT71QEoB2XAPvaUPYNdn8WbkQFicHBnjfmzYBcdEfp1wEb",
  "key16": "3obdb5bdiEBFyeeg6GNdm3g76B5s6kBpenbNPWhL5hSfwBqMKdzaP2Gpp7wqen2E9yHVt8TcVreLq3TFjB3m2aQ5",
  "key17": "4hDRFsh4YJLk6NsmhWG7EvGaNQvtq5Xs882yQr5FujEvp49UBVUHmxuNUEQEuGUGc6RsGvG5T5aEnuSUaP9fM5Gk",
  "key18": "4Cj1uGeiEnEboD4g92G8We4FKSijM7xR8DetqXFYkpW3BGU8VHeUAvH6ahBcAahQyNbeFg7sn5mqRWjVSLrPs8tq",
  "key19": "5F25e8uRj7djPX7odDwkcF8gQxqsRnGKoeJyt1V4nzx9Zs3uNaEF3CaUzCDujG8RT2keWc5Sy8TYKGZ5VWSWuenA",
  "key20": "5zJcz5Y3wBauREf11X4zcXZBwUKunUDvJUE9685K69aDUxduxCfpUnWmN7o9eFfWMd8ZukE5PcCtijBJaXY6hQFE",
  "key21": "4RfrpMEPcyu4p6oD6yrPD2FjrLr4Rz7LbzxCeuu6qVAjgvEExNAMDNrqFvcSDvSSZ5JeLZiEcuFMjm1TqgxGUyFw",
  "key22": "RAstAyDSscXdhZcmBZUwy8bD7L6WQ2Hnjov2FrL8Dx7C3QzK2mTkeRHV8s5tqhv7cCikpcwJJ8RMJD7HuW3sTdE",
  "key23": "Vz6vVAxLEtLAWiHGsBqcGbbfviDS36YBrUR4BBom7iQESFEgBgcFjd7vM7CvhwGYmu8vm77pU3DkUkz69DVjJ4M",
  "key24": "5bkHMPbfRpjKZG54aULCyAJN1ZSR11zu2TH4orYicnRWyXKmWrYobJyii5Kq5c5aVuYC2XS9i51t2uRUeNmu1z4d",
  "key25": "3nQtPtrGrTokNcfgf51gh2XyJYpe83nu7VaNTALaVwvDhpRmufGKSeDJ2exvaT1xdUdYvQejibhzwVmYXA8JD5Lx",
  "key26": "4ho2cwRg9y146vcQZeqaqYpYbnniFRDeeYMAafQYXxCsPPFxKYds7jDPHQCtzBmCAZhviDQVss9N1uQa5fUmabXW",
  "key27": "2Zf9LJtP743WAD3N9kjDLJGLUUcYTeUmhjjWLFKHaZEVfG4u6TQgB1ABuo4McdWNQpHsw92kzfQUyDxENwb9WRM",
  "key28": "FrbPfjPcaz4npzMXJMnTpt5apzVXzDyXgRUsD1t1dwKXBF8F95xbjfbhzcS1r2gmpb6hqYrDUhg5HSnHDScKk6D",
  "key29": "4QEFYxqBg1hQmvtnRBHPosziXHsZK6utrZNKahjNXssuGYVz64WJLcf1qkyHpqx4nJWCDZmB5amxEy9Sw3BTknAY",
  "key30": "3S8KBc6X2AAKtpYixtsn3P6C8QnxPaTquFhsK284FjFzVrFruVHZf1mbGWjPEDbJtbQE5ew4ZB6JHjtX3BBeh9Az",
  "key31": "2GPkWGvdSyVUjkkHdjnNMine7yu6biknFx6CD9b8RmN4LxBDv3QshrxRE6xviLubBCZt9HQjPekbr1ytan6RVfnQ",
  "key32": "5kRi2Xk9uyNYQ9z65YL7utXdtdqVasJcy4eSEHa5usgi5hK4eLM2cEQPXY6W8TYUaDCcTr8c47zeA4xj3L91nUAG",
  "key33": "5hZZKSwDtpiAgYjopMRxxfiuagqo2z5QA8BccYyFvwaETfJizCYd5qERCu73vD1riuLvaySdTVdV5chMj1ToCsh",
  "key34": "5F38CbSPeHFXFg3GpqDhnmFRBhF5crzZpjEFFjQ4ACsqktuPbozHnDvTqGL8YAJHaYj37kY2o7cg2dr8ZwprfJrm",
  "key35": "5vqbpbaaHhjMY9WjmapWztG49Ej9LYswjjA1121hSrtsaqGnjAEpen3xHgPv9QJcASpVb6s2jtzg5VKnrNnTtjUb",
  "key36": "5tWxTm4vDTSxk9cDx2QAdY5gtA6GhQrYcywGpFH2uHegoCZW4JD2xPndc4aM1MJEQbQFHEsBSra7FJvypFYAPUGt",
  "key37": "5H3XJGXYJdkdC1dRTi51hBEHksCrdaTcMcu3LAJQ2RYn2bBMSXp3PpCnqQA9QrwwqGSgt9E3f8zEmTs3d5wbmgwJ",
  "key38": "7hGwCnXjqKZer9Hk6bBp9WjpSGY9btrbUWHi4JgZhbH9niCLfs5Q8zSqGKSC5fTSYDJnToLFaiMEFKMJwbdANa1",
  "key39": "5AtAV4R2z8MkeQqDBRUwiEcG6zGNFnSGgFAHP8b4jikZyRsCHyaJ9kpXznWScPNkDeoaueYiWzzc5ZdMu5rYd6aL",
  "key40": "5PnJHkoBeNj6stLSnxCQKZNpc47KpDCYkNSML3PWiF2Bc5PuGQFsuYf1N67542qn1NrzoS1XoaBv7eoMSwAKjqLb",
  "key41": "33VyPpZM5btSwsRLBvXifqjovicZvBeb1ybUaWsb1eWcg6AyVYMpZByEq8PfhyHk3r4bjJd13aEJWAqyiTJrkTMm",
  "key42": "3iAmxBe1wujEDvHHomDvJcrpu9qqYQaVpSvnLKVH1qkNRmwshuM298SS1ZvrSjoWtTRoQjtUQYTjVBP3zYpSZT29",
  "key43": "4vNz5j3zstZDfjuD1HVhU8X9F5733D3i9RTn5aqy7j1dx4wuJQ2Wo19KW8tCAyEHrpmAKC4B5GQ1eyaVevKzrr8s",
  "key44": "GFSovF2e47FhYbDMs4Kjj8PM5L5Jq9ogJE7rfLkFz4PiYJ88WUa265yeuV2PP4Ykoq5Z6N9NuhtD59JQkABZPew",
  "key45": "2tgYB16SM3CFHtyMnHuPnq3AikG8PkKi1ekBWwjsaABoJvi2geo89sLHWmpkWdJ3fU3eBa4zuDTWoExuuL5mnK11",
  "key46": "35d3XdM2uowCSyBATuCdpuHhGqkgNNSK82dhFiivdKx535BH6mGUQGxcdjxkYaADJuCUwXd6aSUUVtxhfUpMELdu"
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
