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
    "3UrQPW3WreBPAuyJHHE6rMCmuY8RxSdPTKxqWrCA4pdDGtumgeXx4632DksvhSetHBzLCL1xFtCwd9JFhzC19wdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eZg7dEXbiyKvuEr6FEpsQZTvwNUjMqakV3mjY8cqKmS9voZ1Y31y3vgjtiGEDR3EZ6Azz4wS1pD9skBTWiJnmtj",
  "key1": "4c9DHgETbjmun4RJs7w3PvMGjsrm563GVqVv72AZMNnU3DxZWCzLp5R8SUooGKzmD9j7erFPawchG35L9UmSVhYs",
  "key2": "3H5Ta2J6DUrxypvXGQu3DcCHiFx2vv9sPS6npuWQChABUiZjU3oxSDpFZUWRUq4KCpMy6LpCnpq1HnMMyn5MUwps",
  "key3": "2ALy7SiWSwMiSHM8YJVoVPwKB9VZTpwfP36WeNozeqB7RQv4JJSgt4whPu8VaQdQJP9rmvPG22LmCauPybNVZFyb",
  "key4": "4KdSN2aGNBfaMVFsnZDjthdf7PVun9oWNnnMrPkxJjXSj2PNM2fyC37R4MiNQqLKk9Rf1max9N6wXNXEhDZhZy69",
  "key5": "55HWskhTxj559PLvZK8vnFXCBVGnc5NTuVudmSoSKqUagJUUzQoPVHER7E3NY6TKR7gTN7yT5kkWQ1ifEKjqY2Jd",
  "key6": "ThsrwDnGrrpxzvZxBFSbSkgkoxpv7eC8PbsVF6CiqQLFPRsgrGC8kDEuz4WpRmLLospijAi5AmBX2wRSsnPHN66",
  "key7": "3ddfdw9sFTzZt4SaRC9duKgQp6ZCpTMhepAHFUhc5gBGESME1XRkRmH4RGXQ3Eyfw6pjKhm6gmeELHiiucCPzY5a",
  "key8": "51XYqcF8jYDjmjWCSpfPNwM1AEAP9DfU6yZuikjCvKqJFGNBCvABqiCnuw1yL4xDHh6BfA8Cip5rFAD6DXwWsQzk",
  "key9": "4J1GWRemWumskYCpsxmDHvqnnk9ecZK3s8in81nLKnVTM3A2dsasjZHEEVYYvXU7SeVydvLkmFjntKS24Cg8b6e3",
  "key10": "4LHc3c2U2ZdiCjAxg9A6aybRucssNwXCn7pXzAniVdtEXKxaQ4hEy29mhamaMKNXkUhoJ3LuDJbQuqGMZhWNvXgC",
  "key11": "48LgfbKn4Hwvmb6rowC2dT1ojA5btBKPuMMQ1UghkhEwMLDxSwN4JHNuvg5W1VZwNms63tQPWFMorNpzJUB96B9T",
  "key12": "S6MH5X1fKsiXBwmigUGyqqtGGjNPYvo2PhmttZ6TAcQoTa7fNsf2ANGeyfrDSDwgXZg9a6ZykkhkwPW58fh8MdJ",
  "key13": "4BynVSS7xoJ2WhbnVGXAXTq8WLP5JHQfPRdpFBRUHQxdwKLFUaX4yvowz718WFQmrgwDwMZJZSLA3kfNz57qQzZV",
  "key14": "gJkF3UYoeDKBYLqUmT8UpoiTFinXLyzL19StWfAPNMN9FG6GnCj6yEZRL5qRccUBahtYnREMrge8mfcdEHBrYud",
  "key15": "66oKoZHdZtMzYYFVPsAWKDvETFvCoh1oQoETvx2MQjgd8jrC6e6UjQLuLEX97CD5PQX4nBPowqbxiUgeuiYecq5C",
  "key16": "4XLQ2x6oRtUzniB7WLFmCWRTuCpNtPEXs6PY5CdaXeR9E8J65Tc61MuumqPcgaGJZ4ZJ6vy53TKhbq74tgA3hu67",
  "key17": "2iEh3YKTneT4HUR1SJ63zx4f34QTnBDhmcXJm8VkoVynNMVrWgan4sv2ETEyzAdvuZzFbqZibcjDHDMMmnA4EZXV",
  "key18": "3WduCgc7SM1mN7cKLoH7GN4bgbjL1WRjq56bwm9D4Dmigy5UyUqMgnsrmxonzY63YZW3gmEUbhrLXcguhYCyg4kA",
  "key19": "xXFUaXyaGH4kusJj2HxdDwDaMeJsbFTAj9RvGp8NCV6TMuiYcnHEnumgU8JeCnqMNwAJdxy6E5NC2rdrSBcrUfM",
  "key20": "4Q5wMaVXbjfSRyymfkM6U3k46T3uDM4xzUfhFvbP7tVqAcKRET1ENqdwSPA6fWEWpf11tA9BsDfQx3Ss68QkKFGP",
  "key21": "2uVYexZN29GHimnY91FpVy33pE4Zpc8wMwA5a4AgGgiEn263RMBVW7ep4HKMcpLZr4stDyhGP6rdDQjHQFWhKCh3",
  "key22": "4in8tyLf2eGoC6QXKdhDAJKGHvVBjXZXwgGEzVfvQv4BH1uehdZcK9xHqfGLTVs7xG76i4Ay3YTGFq2fyty7P9UC",
  "key23": "5ZdnHJ6rP3h6CVqR8ryyAmBK9LJWK95uNnjYowvLoHF7Prx7hi4Y3YzPSs44KyPi8pc5RqJwwzi4JRobXnfVt9eN",
  "key24": "3STZAgjkRTmViEVPeHnMDTAysF7H7hChiqSpgifghozumUeZ1dfYAY6mnHyfpgVCo6h92nhTRiJxuT8j3v66hVc2",
  "key25": "4jCueccChhHESTJ7xQw7r88sSaGV5zkJzRxJSe4bJ1AqBdKJWX7ZGrGghe8qWf9QfEQ1DrUr17W1rerPCm2686ct",
  "key26": "2THoFwumDKDF6TzKuXUBc6tzbfBsJuKm31W9qs2L4eBbrrqmV5959NaHosDgP3dPVkcNL9UGmb74JkMKQbDgyMCB",
  "key27": "Z7prukt27pCpCio68tt858TxfVjt7RfgTniz68BHdSbcpH5GXS2hpx3xEs1k4t5nNnhNBap9zU4C1y7UXnEPj9Y",
  "key28": "2m3p46GuTjofEkSpkBHhHLUWeLw78MK2QzHPJA6obCsGAMEU5M4YAm4yV1gTrJT9sGb5KMsgqoo6E43pE3XS8UnH",
  "key29": "2NGnvFtqRaEC1WftXfPrn36aojz58VpYrjeNzkK9ACw5nkxuqUBF4bgw8yGz9hdEvufGL4gHhE8fnQDqx4rppjwD",
  "key30": "2iptyirAyhbMAA2e4gnyEarZQ51pJ8QAMMS4J7ADFBTkA5LssHBViUECyQYCbeN4bQCGjsn8A5oSB13rYytanWPH",
  "key31": "2wFLqLXUmvfvQ67ipSRsTXiHuhPoUZveRekHZr2ru7XFXRMRXFgqdT4iABhFY33CbJ3vDMXjc5825stCju829ydR",
  "key32": "2VgK85Bm9ZeRDSJts29RS5PA6nRAEjN4FhrT9BgJBCqK2a2vLZXyE8w734o9gMqy78PdTPsw9iCCAP2th7nk8aCS",
  "key33": "2UXbWjy8zpHEpQHCkGsiHWvQBjTT9N9cpwJHWuEbEjkWD6rZrABDEXSqtc86NpEHsTdTr5mdQW6zSoToh9kGEm5c",
  "key34": "1qHQRD9ZK4az9QgZbQoc7cy8bFni2tjYyWFreMXFkhAZfpTeyf678YvBm4E7e7LndgjnjUTUrmnnHeK5xtgy493",
  "key35": "2f3muYZiombAhCWKTeJQtQ16Fmy6cBT12ixAynPasSFbt4WGZw2PPgLpqA9YDyPe8zmtAsavtaiHbR68EvrhpskT",
  "key36": "oex6mq33JdKF4ontuxwmFKshhAZDbGTH4GwNyTXWmZjnL6CT44qzXtSUV2p9a8D9rftGzgsz7VhCg6SPuZoKCBa",
  "key37": "35RwAiwtkmykFyu1vuWsV84MMdR2fJTyAiutQqmrZ6yyYyGz197eAmP1QKyAs31YxLhpE5EvD3mFPYpZeFwM7d85",
  "key38": "PMHDmgDZb7SqbzKDyBbaYd6JV4ySaxRJaftpvJaQcwvakKfKp12iWRmEFBHgS6oYgiea8SYg6kozmADTH2RJWdh",
  "key39": "2NjdHwG913dLcaHxzmum3b5pdwTLT8QdarnTLJnTe1vRngNZY9gJRn6YoQRrmwX7QrrJpAbz69HdfXZR5MTKpFdp",
  "key40": "4qNoM4DNM2xNmVr1hf5Qa5HQ4o12JhWVMBhSgkDbnoG4P3VDV92xuG5E2sT8cH6oRiiRShQuUBVx2rRYNhvZ1RQE",
  "key41": "b5na9M4BiRizgxi8aoPgQ699g8P1uwmE5iRwn2FCFrTK6zunWXiePqteZDubk1LMjPwMB3JkjqW6yWWE45CE4Gr",
  "key42": "5CwnLqkMzkDgEESY5K7dpLS2jAxXJWmLXHPoAsGnktfo4FdpejHVWrt3xdjsHSTVowMoSFLqS3rKxD5YQTENeYHi",
  "key43": "2Vjj2U4muQCoJdWXEsGDLrFLQypy6mhUUXLc5phH82M6ALxVF5V6t7cChehoMGgWSwDhe4riAdg9K9rpwWb5MsQ4"
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
