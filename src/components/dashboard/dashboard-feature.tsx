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
    "3GeZS7niqhGau5FUrkg3p49HqpppaPWgajCL1QgsF9DC5UgVFJkyQ4Hr3U8GSr24spt4RVzW9VxNF3rDvvdMiJYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K8ZeLbQD1Pz1n2TZRGQkyEHrAM35iiFLafYDCMyEVdF94gshSSRj3mdgrFCXtmNj8SoU79N4neRVwbP5psUiSuF",
  "key1": "32mUkjw8qtiTMnsjXxjng22PB3jrqA6Kst7ouE2oYc9kYCfg6MBrQy488nJ28WZawH3QVJT7RqfM4esWVeBx7SNv",
  "key2": "4aTj3nv4ycVrocjLmXYejP9SHCTwqua3uTp72N199FamNi4AyarMq4F6jnDGqDxr1TRn2JiCVCZVXJ9hu6xWE4Ra",
  "key3": "3cxZPGe3J4mjsbxFiVZzcj9AXTzawi4bDw2KR4pT2vxBtbSBwafjGn8wbXrxiVZssJzyCyF28iGpJepT5rvhRK2U",
  "key4": "pacV23m6hhApmA88gJ2Wah5eUVewznnDPoaW7T5U7bruGsYKcbTDUhdyL9d2w3rfux7VFg6UfasKvXRT2B3uAtY",
  "key5": "3TsGkEqfqxgDRCwuRaWHL6DQQwThkiozBQGaedofg3AuAhSm7T11iijxvEV78ro1pBJ2VyvvGAJuiynKrbBuzAgi",
  "key6": "3bzBoxaz5HH27c72Mcck2HpNHbdQA5B5kALiR2hsFaFkA7KkHP32yDqmUwRQkMpQdGG6nQxeRNJfovRacuu62Rtb",
  "key7": "2pDyoCrx8P9dYj3XdRoB6uyF23aWeEqGH3Xg9vZNszz7u1Dhy42iLaD1tEcZxc7oLUJ5XxtmPV3Vf83NYcCGXdpq",
  "key8": "3PA3G8FWan3N8v3MWuZivdo46Z9SN5hkQnEgW1rqQSHj7nqDyfV4bQDVx9mnF2asu3GjPBAv9qP3pwSihoEnW31D",
  "key9": "38Y4ruKVuTUWfDcRmuex5qr4MAJKuUu4VdqeexQLrkp35juxLh1jeP1Lj93BR1jFb9UpyiLY7k8tcmd2L9PzrPk4",
  "key10": "5YGnvJ1qCLfd2kGC4NEUsL5LYRPE68rCuifAq5mG7CzJArfjW3oDbCASJjpu4ppPkW1nYApV9gPXdMRUPmjuUy1M",
  "key11": "ofUsLHiz1uayCHLywfcP3KfWSTWreujT7rW1AS5GRFJ7h8Qa9mx3RS6tg7ug3xYrWCvaxqz5P32JQSbhd1Yp3m5",
  "key12": "3BwyjgqhJFjA2oQighFrCMmYs65P2BqgZ3vCoJigmuSLC7BzC2oy1MWgReqDNYoz4NiFSo98VNpX3QkaC8kAJQxk",
  "key13": "5nhAjZKrzw7yEFFt3g6ALSmkC6G6dwrrGtWJkd8WsUDLa6oPrwLvvCPh4FRdvs6thWceHS2UXe3AzJFv4nDLK8HR",
  "key14": "4jo6SgDy5XfjNdmRHHeYeFAC92XA5MUdck1BRjLYBp4qHCXMRpiN7o6vtbSHkv9PajBTefF5DWbvW5A3fGgvBje9",
  "key15": "66rVJk6FrHkgoWpGWJxRgnf4poVFefZZorFyGk21VTvMWhqGe5ig9snqsbvVhfcK7dvRTM7cMJhMQTkHEauJq2Xs",
  "key16": "2o6fh58YPyv5hFA9oigi1NAgNc73TDcss7EQ62LLFibsAsfse2uwBoBUobSHH5Fdd15KsCDunbP7ReqbcqDLBNMk",
  "key17": "2Ph4E5mHDAVC7uqd8xi42CxKqFaE5jEJRGrMhyrXWNq4qWBwoyrCSojDx5AS7YShaXS29sBkfKJgRtedUrFHv3qR",
  "key18": "4DNSUd54EjomP84LkPHKwbZUazoK99R7zQ7RDg9tpUKrP7FqPYRH1RxcvsheNDM5yj4bcM8HyyjmPX5MR9bvgM2i",
  "key19": "57z5qMttsEhb2Ag1SqYS1Rr9A4yzbRNigUDirFeiti8FbtadMpyViwb9xskX9ytQR5zTqw5VMT4vLDU57wCidaA4",
  "key20": "rQ3GDhXxmqixSUN6DYqdgtjJm2yutvPGDNfqDeDoDmGiwWEMNqHpK4Gce1QHPy4RJaTCeZA26EMWqw75kwk1kro",
  "key21": "3isaEMJD1cHijdPc3aC4uLdgLPY1Driy1tuTzReAQBqY4RASYsCcYMoqNHWNRYk9JE2KoA9uPu1cYqnsbLGczDiS",
  "key22": "39NQsQTuvw2o26qFU5yDqrrQJRHdJg1muawMBPnxCr89Fv88DuhGA2EWNo7WSjsvmfELZuMmRedjGfxmyRAAwPDo",
  "key23": "3ZZQaZUfNtmN6PmKTz6T9LYjdbZyxoUBtqM7kohTS3zegtYMYEEccYkogfBKJN7n28DtHBDcQhge137fQC9o1y7g",
  "key24": "4kvPJcMCApoxZd5ELsKVcrQnxNAs5bCQtTnneQsij435eDicA4M538j1h5sLdyhBVW5JdcYgT5smJjfWZTc6eugH",
  "key25": "21adQN6S1KwLxJKq8ognTV8qv9b9bPNf26LeZsFAkEDzg88qBgX63G1rcT8SEKPRMEZpdQcVvRxMvhejh9VwTRDi",
  "key26": "32ghWmc7p8JhBkXB5siTV6ZmBiFRg97EcwokvSqfaGLWkGYAP4FZp9RH4ACoE5vEH6KcK2bTA6ov7awF8acXhEzw",
  "key27": "hVBEQqHwbeP66FuLXZ2NT5ihara2pwJAJAktmWVg1t2kK3eTW3Y7iGWWcpuWyY7xASYnta1pnEgcR21d1sgEACr",
  "key28": "43K3tKjL4LPo2dKmWo9qycbve9UVvEb4jMqRDcr8kah2tkJFvZRab99WNxq2nLTSi3q6sjQ4jte6DvjwghDZsdUF",
  "key29": "4KhpjZp6ye6GHTRWoHMiuxtcNngmFDf878FgeoenED6x3rXsos1nxFEv2grauyWQ4fJ5zHGrThoUKjRBjagB9PvE",
  "key30": "54kBm7BeYFEUPeg7Yv3kyDcFYNg4o2d82bfYGMbE6ij6Ht8Nk6xugBvnCCLRJGuT2pprCUzhhUZLBT6WAdSwAiES",
  "key31": "VBtyEDmKZntBkqByAq9RZ2TmYsd1pqNe7Bze82T1ra4nMnvjNwU8cuxWoorBydQgurpyMH8BacLe5LFPuNpTGMw",
  "key32": "4XjrqNokETtf25LpR22P5SxP9SSSwMpx1235y8w52Z2g8KhmVQGsBmVdECZCjLmCnLU8Pgg8NYjjKCpqqAdQgbVv",
  "key33": "2HwcvmZobjSREdAgbNRsKfs5BHJY1oAVd6JNZkcgCUPzBvaHsByWqpEPswgYM2NYrKJfeWwebKFBet1jBSFDTtke",
  "key34": "bWGHCyVN79G75Lc8B1tqTr4F5Fwsvs2n5a6bEvd7kKJ3A8NQSp7z5mxozAiYqsWGaFV7RpVToceiB9rke2uwfDT",
  "key35": "4EZZJWqgox7vjkciMtbeGKMnQMnBYm8M3irLBq9F8hWj4cTF41xuPpaqrs29nNDxq75NWV2DFoZ5RD1LU9ePBhbu",
  "key36": "kjNmYUk6usMBw9M9eXkkpMGkCryajps53iKpqakLqYUzv9cpm5WN2Yf3PU8p3oYy4vLkkNEhwk5sfzmZJD1gRdB",
  "key37": "5AKGmM2nMaYzvExBo1ph6j5Ha19L3wAegaTBzRTf46VjNN511jtX1DWuSKgoE321TGoBjbcw2evEzWk4sAu2dhjQ",
  "key38": "4NLKV9oegfRZYxdDKvUwPUWWkNTkUUMobMgLVKgkm8a9sPZurzCZri4YjCXCtV8XsCYyySydFE2JfCEo37kGb6uP",
  "key39": "51aE1earBnvJ6YJU8kfSCnNdWr3PHVRc4MhTEusVb1DSgXzBgFoWLbnY8ERnYc7NRYSFvvPLgQfQjMzpMTqmbfYH"
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
