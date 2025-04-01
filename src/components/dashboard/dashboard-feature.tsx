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
    "2cMEPhPaTarbB4ftughPjC7fLxMmfcx7g9gTyPHLCFhinGnBCJoQRRAgic52uQmsy1qrAEaMbKsWyf4dzkHEz4Ut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ipziCTRPvncjWY5RSMfaa4Y45wQiVi3cfLVzhGkMCoDt6k7fkBuDZDVAfbSAiZEicKv8qj3RsjNbHivTo9LpqGo",
  "key1": "N5CVYuMLcspj3mspRQMv8EUbpBF1Mj7nvnH9CXmtDZUh8Sf2XBbacFfw9EiFkY1YWq71zWXF9z6HDm1zyfiMmkK",
  "key2": "vmS2ENGt7nf1hCb2u7jUFiGzpaPCskqDEUbT7AL9shZUqHtmvAsRHnQZ12Ey5QuhZR3CyKVWdwycbAyA2xgrtTr",
  "key3": "2RFWZ3VUreKFLhs8xZyUhjFURzTpq3pyg9Bw7bTk6t6YsfZ5PVrvcGUFyyck19pfaFPvuyWha4HUQzoqy3eXoTUv",
  "key4": "67R57F29QCAcMzJEUpinZDXpQjoLCfZNz7L1XNhRfxEbhCMib4Pv5za5DpVRvjtJv97AKkLpHQvoGWEzka8PbFem",
  "key5": "47UVfT2Gf9PQhdmMS8uswmsR4d7RK98iJuVzVZoLqawPPzjhasAb4ALuJeN7WeESNuCLnDVVtu9KuLFKqf3FMW6a",
  "key6": "5AFsWqqBQYd1JfDnKVtAhmmUKREUW9R6CWovivU2T8zhWWMucuGT1HR36gUzXUvXMLZznz6vqyDLik3zs9vc7vs3",
  "key7": "3oW6Pnt3meyrkJnKBkzpDPThF4M6Dvz2ATevqmTyeKAKZNMAxiCzEoK4Q1TRG8yXprTUPSF3WCsqbiBgTjFrtWp1",
  "key8": "3DkQ4atf5XM9H5YsKDhNCrNgBnm2e7mPn4C5uTindjpGgc8krbU2m6351ng4ngeCCQJcPzsCS62HeSEEf36uVATh",
  "key9": "4g58FqRYoxkq8kQQvQvM8gYE9neZzR37FZgRaddxfNHapjiaQqddYM4zVBRcWZPuwWpnkW39zwfTTa39HVDv1GFg",
  "key10": "2QbBGjbZRQsPX9DNMMAX7xsDT5Rh11VqoW12g6yezS7BBxg4J31jo3YJjQVGjZyGeLrZw6YEMZgsAHMWWecVohhW",
  "key11": "4d5BY1jSLQSc3JqMxPNK8QnNCWyvVvhiwBgPeBLpZQeK3KWKtUohH1V5HDQJpWjLyoz5WiLaVJ3xw5pbiP36D8GR",
  "key12": "335UzGFYoSs4vgBoxR8B4mBFC5AxuxuyX9uhHDGhhuRT1NV7N7EWNrVatd3AgUmkkNzkGHAga8qUTFMDL8xk3sZb",
  "key13": "MxzwUS5dRWYa6MVnnW9G4DZXtBKu3gFLYdfP9pTCjmAUqxQ6x2itJP9z8Go52cnM94jyGah29KxV8tqSo9MuZPV",
  "key14": "5FAF8tPUUpApEN3Wipb8ADkkyHYvNVHfRVSDWMcu8YYY8N8dgLGkYRTPMEdAm8CCTJ44MxwJtgYaLWTi9yBQmqYK",
  "key15": "QWrWQPBGhRuQCm8ycgmdsSFENiKZN6FiXnimRRs1CVEMoLKdg1hc2WBHSCPC9NY78yyEQBVXEciX5wZuJuArES2",
  "key16": "4eN1Vu7BN7ejow1CueGu1hwiDMrsQeBXhzsu3VQJ2CuQYghFGXU6QMQUHxQmEAKMXq5yRZZBMpHNKBmFKeA1k67r",
  "key17": "5r5ABpPvXReKkDJE5hBnTfSgPSi7M5N8dNrREZekMRxoMiVuTFY6sj2BZ45z6qYDr76ENjWqy8u4pr1fMaBSRd9E",
  "key18": "3XCznHkYcVc3ksYPcr13w1HMVStivZHJsv6edh12fnWYraDr223h1xghktiAHFC8eevRtxtzZymgpXvgfgdbNQYf",
  "key19": "KwSg8c9mJcCjdAejwJpe3nvmWWFnaUNVFcmg5fMu7hGufkvgDTSdDrrXEw2Z1Do6v4RMeusbgTeEpeWkBGBbzAs",
  "key20": "4pF9GR3uUaYmwuKDf7RkYunLTSxoEW3uVSs3c6VUzmG3wHvburvDCddfAY9xXxkvN8zubMkMJNWAKnLuV4LSpPud",
  "key21": "sfWqapJmTQpVkUpCBX4t5faB254GARe9zZJRtwDjr4Qdx1orQSzEeH21nd9N9ejdFh8HdE3iKLUCu4aP2orMYAm",
  "key22": "55dGGaF6LCaCuiPM7Na8s2Vg8U8qkQ4pECgU9AAS5iKf9LoRNBUB3n3nhqQzTijXaJGukhWTzn8RwoAiiMRP6M4C",
  "key23": "hcAtpwzivttMLXkMigHxWkNEjMbbNyNQTsgWpCNKKK1JzCcqaZ67wy8XYfknem6GHt8STrP4YKWQAiGwi5TCJJc",
  "key24": "3xuUPysVqBK2ig4WMVpV9HhnjWgp7DixFkidjkFMx7qtdNM1AGFTA9w2tbsb4874VtQAjUFKpxi7tB5gm2YVXWYZ",
  "key25": "4dc6UhjEFfS6W5qy62iWa98Nts4MPzpsP8fkDndfCy4REiHwM6k4PXpYnJAJoBUwDmLzbFZGgAQuCnSYy5wcXea5",
  "key26": "mPjccmM3RD11sCuZgxztXqceiZAUYoLqWsCyQM4Nn2LALSVi7ohWWQw272FJf5bKzxfxRRPcPBwf1Jt6jGeuyi8",
  "key27": "5oQsYgyj38hp77nLCgovJ3zsvyWKpGRdM5Aug5uXWFG4d4P4PaMFDRbZRG5CcdTrzVsHLbGqmDCYBe7DfBqU5h7z",
  "key28": "69af82ZXLCjet3tEAx2A5ogDFmwemvrrmDmndGpCUcpTa17eqUSEZSsdpSYestnJahUjkMbEffxiKf3gyxMMtym",
  "key29": "3bNu6YGtnv9GSjje7WSU2EP9h8yswVK24VQArXQT1SrrthCzZtGHtgBq89MP2BGfKxy155B3oMABmo2GASdquLxz",
  "key30": "GYtw5tqsk2mPHHmHuxxdAcPAhptsoZGJ7e1aPvqCdJmt4bvrYRBmLqzh1chWF3m45xGTanYkdMsgWpQ15XoZwiN",
  "key31": "5Jdw32wt3cw6uoMiwLD77NhQQESpcCSG9ugjnRhnJp8hz3ZurZu3SapaEHR5MQZJqAo9uHHXLCcoxUSLcpjXHWY8",
  "key32": "5qdmz6WxjuAepfAnYFz6p5ZkNHSuumMTWzDv3siWCDsBijcyLMGffHJtupYa52NNg4PWkQfGMSCDPPFoPJhcgMy4",
  "key33": "4iZrUShTMVb4d9rkomrTskVGn3QboCgRNWr2Z1PVXjEuCQmLiZraxQUihbdpsN62R1ifVSQpqb7n8n8sekXL58bF"
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
