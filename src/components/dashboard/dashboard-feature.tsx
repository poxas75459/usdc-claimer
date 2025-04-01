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
    "3wmaiMnTmrzA9yABaFYbT7QfUcGpPZBiEZ8Ccf6dh4AgtfKxYemyuwDemQHuPUrSrzXUjeQSebVrC2Yo9aBQrmKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gwC2BPBzeu2HMuWegxYgiuKnixmZpSe4TGHRspmsviKz4FB2stPQ8HduW5SP73Ra8CgoKy1r6ZkGbug44R739Z4",
  "key1": "2DLs9EVwP3W9A8gk9cjCrbGGeCbFMwVrdKkCMuBPDfkmq4TgTgsThW1MQvMHTbFVFfT1Xi1HvgSKmkQ92xPxf3hi",
  "key2": "UVSgyt7roSwt73PW854dgEBGAkdy2nh7EaWq8U1hS6twyRbFnNmqbVdwETmtLKfTntzoxXkh1umJAGuidyq5pWk",
  "key3": "4KjKpCnBAfSv5MMetcAYDu4adRxpwSYx2vKHQkXvx64PCKJQYppREMEAHe9ZrbNxZxQM8kRF8Sa8hVyAPBGULV3",
  "key4": "4nRSRJWwbD2uQ1Mj7331AL1HiXVbpW3uaWtHe2QJmVqDAj63jmRTDMWpHDxmtyhu8t1KsEcgdSrmTucboLhoNQ1b",
  "key5": "wvy6uodN62ZzPJA9FxjaSaoZz7idr8fsxQ63BTD9ETQ2UGvtvdQme69SBZXLs1a93bPspTYwktDLzsavhSDvfnY",
  "key6": "3bjR15bPHKuFpp7yBFGjbeLW9dVYNA4t8M8bUc2499H9NhePHhhSRfqctL3vy7AXUFHAQEsZa35LRYVQdUvSaRsx",
  "key7": "4x9Y8mWAiFA9H4UAFq5Ba5koMgETnLkJto1fF6FdPWU8U9n9DA2sFRfJwiH4gmjUFHTiMhh84YQLUt8gbY5cDkzi",
  "key8": "wZhpB1JmmXVgmq4cTqdo6CnHXvkqQFddof5gKS3mNasDStX7dAcuSqcMdJeCNFVTovNpaUhvxsp1MXDCEMAswcM",
  "key9": "fEW9LUoHvFjimRX3PuZziNt9gSkSNsDLuwzMUCLCLR2DcB5Y1GkP3dETgtdthxD3ATMKgfzLepcbAF9UjfnbcX6",
  "key10": "zGfG6qVxyg3ANRsz3Vf194ZhpBZy7yC7B3P42d51yYARi5kGxJ7RguANPDhWUJSddD2f8a1t3z49vYqvhChdygu",
  "key11": "2sEUYYdaNxDMdTPnLaodEfbeB7y5XWpJTZNpFY7UVgzZCvg9cbKnXhJQwZQz3GFKBRXrjqbaJhaPLH3Ldy5RRjm6",
  "key12": "63SEm11o1xi4hvXm8o2JC3uupBYUTrmsEKcRjshCAHobjNYGgQhKF9AcQyGrVeREV8MUGyx4MwARBgp1cERRRmML",
  "key13": "3FFpzocr5wGYaFLWDvs7r2y5uUXHUwVVfs9soADJ7ZJhCL9CzvtKJvcpWiXH478yZxig14aesKPPKsqRBpNSivni",
  "key14": "3F93nRtAXuLsiUHcKzQkGEFA9SW9icv5rm87cJiu8cF1UZMa2X5Q88tirwZRfRNptkTRansqsCVsGjqQBSmL38XE",
  "key15": "5kodarvLzdHYzxVTNbbp7QHhuXTW7P7zT74hNbGokiFniidJf8DLtZ7qxGnhkrJAmi6cNrhiwnBRhYJJ7HvS9b4R",
  "key16": "UYjp6iGfqaz7dTZ5hhDu4TPwMXpFacCDhiYQuqTR7hSzuescSyywcG8i3ca3tJL6HubEG5zoRE8pVzTvJq6D3hC",
  "key17": "6MQMfhfnjyj1xBeaLuJJnSD8Uqa2ubjuo5rQBpci2AL9RMKEPgnnQYUFozH8PAA3gKvB5JhyJpyfPifeQ73Jr7k",
  "key18": "4wUDT8jP7CBkbDDhprxCVCMQVhafMjEBrU5NJJWKiufBLiLi7SQYvGGPF2EE7VMrJPicoFzBpLc1YrAJyATQopQ3",
  "key19": "2evA4S9TJ1f6tnA8RANQgHMZyVxW9F6yG7AocpymCPhxTDZhF5fQAvL7UZz8TiMsYG5Y9cHCTJHLJySHgStJWJhr",
  "key20": "29HLEkrca6fc5ER6KHtCpQRShDx8DxefHFBy6XhnNpwrGeaJdkPC4tfmreeF6nM9NCkn1hoo65byvriMikV8xX72",
  "key21": "3Kr1cCosrm26v9jTibvaEokbjzkPsXp55GaCPx2xFEW1zMekKo9cogSjK5vwnVQeToPbTdTqLuykxi87Nr4u3wrz",
  "key22": "2AVcmcsXzf1GAyBDeN1MPnsHPZKs76VMWAXvqaaXbtsrXzfJtAX4LU2u4GWsr7mMc28jFu4hYZNGU3qSPgMAHdrZ",
  "key23": "5EpaKyxmaGByW5VjTbh2HXsCE28AaxYTgt9mzg7yauWuWqtZ5Sse3j618Xyi7oMSANA2UK4YPr6b6RJ2f2Ht5X53",
  "key24": "2mEAfoQK17GSA9mgZdXvgbb75WpCpWPrUMyMsr6Fe9kWLGmEN92ycMb2xt4NumknCyy6V7okAQTLUVDw8ch6QMQH",
  "key25": "4eTTk87qxRiPo6RDrYySFckkkTd642uUB713fkxDDVk9rBsMdt4GnjaeToo3tegDsfgo8UZQTTnsMJjUqrpJ3fXi",
  "key26": "4hKoLypitFWxFhzqdVNfBNjtbq3x2CUXa4wCZYzXDe1sR6aLvFrUtPMiaf7fgyD53SSNFe3fSSVYyGxeQiyjC8mF",
  "key27": "5ygrgEiZxyKSThHus7Gop3XUswrvn3KqpB36Wpxws5tGwJdgop7yvQEyRvz3TZSYz3wYhoE1JJZmtMkY9tC19ndB",
  "key28": "4KPFUnG766YfL2oedU22rK1zw22ePPJLyqcUrhvvmgRcDiH9GTmnKdCyJwoq3hVDvFGrCzTpVFRjA9oh6VMzY4oE",
  "key29": "5XQN9Hpaim2f7gpW2ss1R4WQquqXke8UrPNFsRfcrcJQpZGMaU4XgwEcRUF2A2Q8BX47ibP53MjXLTEkba8zyc92",
  "key30": "2N2AuS24iYEQq1UJogHaCNU3758DXsq7eJDjjHV1Ymvnqkj1HDZEiLKT6zcHg3Nf55f2hM9LkA46yu7iJ4YgoRZt",
  "key31": "5BxGzYSLMQHqsZhgy4bhK8XtZqCwS2jyNEffVAkXAmMEdhggkCmBMA43H4gRov4Gaovxx1mezJmMng9cxcVd4jT1",
  "key32": "44zufFfM1UnogBqCQ1YkHzN1uf2TbHYsC3qJLDYQh25tTC2xPWBtMUx8XrJY2MdUvksW6oR8vqEHXrchkMst3cGL",
  "key33": "5QfjWuaKMmr5zE5h7Ac19xNTgouYZPXVcWvTjVGLkU8vZAr1TDZnxJiLX4WRifcW9y8d4zET3RWu7XTcNixSdwTR",
  "key34": "62GmcyzWH4zKQw43MQYij7ipiGYGANtbG6HqyBTpXs5zL6SDccx8gtgiKBqkzyrtgNaqNKbua6rcnYq4ecVNTg8T",
  "key35": "5iz5RAugTfoqLoSt3cnVwpGPziyLAbv6UG5ad1ejecaJTCQdn14pCisQULXYURTHqsHLxHqhZLawnDdorxm22TN1",
  "key36": "3vUMmKEtmpxsTMfxGrFNRtmXsrhQHdhPfmk7iJuaRAPVbFKnkKtFPAe3w16tpJrmQ9i65RsWgNzHMNjQL6cuSvcT",
  "key37": "3TKopkAGrZiJQsENjQcXzEbUkHzHoUsSdjBGeqK8Qpc5W5hvGEr7cX5SsReLQ9NpKREhUeA9WiFqMJvTRAboT5oZ",
  "key38": "4qkE2X6g8nn7RkZh2P6Xz8uAed6mQLEV3hgcUJt5iUtaEoUq37HCiaE7iez2Khoi22AL6qDbnRhFvo9Sis2GqQdJ",
  "key39": "34XXuC2KFB2AxciDAV58TJuf4MXPdXpToiyHXTewTgEbCD6j6eY5KT5PBNVChdtdccnyf3gteWxaTCf7MDfWxPZA",
  "key40": "x2PcJEW4eKD62zgy6TuAwf5ExNaFXwhq973y1NB7hxyA44JtybVinWTgDarX7KMLPV53K7NHgPYZHdy1TdqHxcT",
  "key41": "5qsHpcCK3YQYUPcAxD1JqWk5xJgTEiBnjD5A8urXoboCAJ7VGgYoczWcCufdaetqFAU93KE4MRbM9DhaUWfNnFBe",
  "key42": "53veenwGD6AFTYKTbPuDTTVeri3TcHtQoQFgWcYdwdNcHKTQLAi9ogUdFm2v8aqUZKnx5nJUUoH2Y2g74doeK9WD",
  "key43": "2ZV4GCUyVJpdxEasvkanxW3Shf62kHCaxzRnXGVfcWpxrxic7WsxoP9rvPvsLwip1nEgv7NkGqqJAnrQhkb9AJM6",
  "key44": "5Pr6VXTHSoHFSjsM1hG1WobKmr4zpHiFJ5QowQAczna4zjGHgJDy1iE5juBcUJCRrqTFgn4QhfypQM23gTWmF9Pg"
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
