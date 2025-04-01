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
    "3ZbbRKDhRwTY9h48wEv6tmvaFdvhLqpT6ZTdhKb7Sn4DAGkdDwuFNLNPN8wJ7HcKEuX3FoQ9wda9SzjqKk6kxVAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nyWDS5nS5T4bvPsh6bTQcgcDWA85esGyX7zAsAFBy6WEXSG6HbJEdVa1p6bmB5u5eBEUqMB2dcRbwA98XKPDbtb",
  "key1": "MF6jtJm7MHAaeWh1ad9Q6DF5dE6JcezFPYBYUEckmDPzpNYWU7DppfECf46DXxDNa84q2ZupnL7sfGga9LGj7Eg",
  "key2": "53Rhvz3npYRuAmkVqrvYSzJnQeq7adGNZeu95AGHN14igKDNrd6D6ihcN6cphZaEiYTcP5DTXvaK15rdy8h5ac5J",
  "key3": "25VCX4ENtVQ9D7LK7cGi8QNsg2UUFC6ApE5ZBDjdyDEYV2JR9bA6ChtYfTQamyBhGrXMfjPZA4HnecPSL7gyVAmt",
  "key4": "4cf2fAwE4nLq14NFdnntqh1ZYw67nRxUftNP7fDEKToknp853ZtjFmdxeFoRm6dxQ2MHMtc9jcmRFkg1QqmU7e2k",
  "key5": "5KTpKo3GHmHtEZtMMQAiGp4HSsyCc1frokAQcPBX5b43quwiHZV2B5n7hUr7cr3AVfSFUavRXu4T7BnSVHAWJg3n",
  "key6": "4Th5KgMrsq8w2kTa5gLDWDfsnem5xpANPNvhtb9ythb1cmPecQjce2YwEHGaMMgRGEy1y5dELoHfuhPNJsyiWDZQ",
  "key7": "2XPymK7yUbaYUuq81PL69mi6rtvcKxm4yeWEFs2mqphVZyjV3Zy6wdT33t5XAzPVxGufKZnuEbKp1ZbSJRoUSQLe",
  "key8": "3GyAbftJZqX876LsnJ9Y4uC5aUA74Vf8GpBvMBWbEX6RjnDsjT95uNs1MrCoD76bapabhPL4Tzv1EHiBJ3FjpGY3",
  "key9": "5LJpdPH66VGoNdASyGhKREkE3FPJUkGaLEzt2kUrTjYdMT619WdNxvW82G6ZyygzYFSTdL6SCiefpjKBmTmBHNmF",
  "key10": "3i4zkSY67n7qJqk5m8m4JbDEN7BJqZvdUUaREj81Hf1Moye44sfcpFTRj3SVuVtcdxfb6jqz8JecaAGWuM2q7CtA",
  "key11": "5ogB6dJMD1yw4XeDzunksYMuR6cXCiQNnggSmnXAXSeVCobSCQRqAWyd3XToXoLnrvxqbPmRkhnceEtg5SJBBvkb",
  "key12": "3PQDQcGqyWC7P1EPmoL2qjXHvss3zcU129xdEdFiw3aziCGKVenYmQMjKqADJQaab7FERzWthFi5xZgKp8xzS1Eo",
  "key13": "4SPMJKeADaabXPAqN6PK51wUVDKnUxTEkTmz1PSEmGRR5by9KFDDpCRJa9KSwCKBFe94zp8DWdsJcvkV1Kd65z9X",
  "key14": "3YyhGPes4vXBvmDk9xUpneakF8CG8sE8CTptFroAiZF7pSQDTowarRsF1UbRtUsjoq1By2LRk4xQBZ1vPotn4t6U",
  "key15": "YeQG88VUs4jx1SL76fZ3zsTMoqwrM196d1XQPEJXYosZzuwFJhFftYu17t3HGXDYixwK9vYuLBHK8AHmaPiwycm",
  "key16": "5HVGbGXvK1UkEhGCKPyBem1JycE4zNFtD65hvscuGvHCeTLEMSutbbia5JWzzEsyyikBP2DUBcuFHiKphiMEJrge",
  "key17": "22Htb3XbG6KrCemxJTi2iVMDUEYWHN3NvqS3DJ1wLV3awrfwXWFMdh6btJN7PFWcrKdQ8pBdoisLRKN9kQCSm1vU",
  "key18": "3ZBrBrmvAvrmoMWr5Aao5GxZ3SeuK8ZejDh8aNYGpH4cXhiQjeq7o2uvoXQk8FgVYReP6oZanpzv3yfbr1AxeXM1",
  "key19": "2y9TfG3yXN8gxzgpQtz4BMjjawbTTmDFBpiQwJTzuJYLq9cZAXtxSr2mw7dJDR3fNqx2EUe4zKUgx1hcSWpv76t7",
  "key20": "8tmvtVsYcbD2wKzFp667URrRNAnJLqUL95r95D3bVJgpMBpAzRqYeYx6Vkifu6FDdVQu2n3LVXvJa9Go6XDb5e6",
  "key21": "5Kxg6CwpvN1ZVvzR4oYBKya57qnwNtJCgfg6oLyBZqCvSJyonUvT8Y4TjP8C5eAHttP7Rm1DArr32Cw9idrXuo9L",
  "key22": "2R7GY8rw59hMqaEXGpJ88weo7e1TAvD83gVjCiTrpJ2tMRzd7ogDRzsEN4AwXZSeTnCN1GThS8ysnHxjiRu2YSy",
  "key23": "3tsqzvCXZvz6De7zGNPrz1r2scbKuJJvQTc2uoDBtooUbC2zagwwT51pKxY3bixXaaFWLvrGkKkZtnrMMS67KjSo",
  "key24": "KFyzf71hwH26KzwpGLq1kR8EmoPxnnhjFL4LjucRBNpLLCnz2jtX49k6MQJnGZjFAgJSsnohjXBz75tEBrjcWfa",
  "key25": "4wm4VspTxSbfcxkaiQiNW2QkMW9VkxdmsSqdqPMz2mtUAcVdJ9wfrRb6B5hYSp2uqsYVFPcgBdijnADyVqAUhpJh",
  "key26": "DjykXR6Zt12pHymeJHoGbPtM5WqMvNtbbX3TvkwTXv36UWkJgvaB7zaPW3kVzw2kgwWHjF5y48AJCr19cauXH5C",
  "key27": "5wcBTwctck2d4L4ZGboAHDZAq8ZpUTsR2BTUPK8C5cnWt5SkDCmC15nAodY3XY1dYY5MzLMtUWKJy6CRVBV7dj49",
  "key28": "KWkHvG59RmigFrTzXdVLCXCmTyu5LbVvcgJZnZiedca2iCnVagcfxSeKgmyZV49tmH9A9DFhTzb2Diz4hGdsVe2",
  "key29": "5eYzdYiqPGw2GwejEAajyNno4osBwRMZuZLEb3UeAH112hq3JQ3kfMqn58r9zKcxxo8h8oYNJMyxS7pGkaHn5rJ4",
  "key30": "3qzdSex9QSM19UKXhjrBjTn1StyGUdfYJuSDAus7wwKxAbmqftcqsrBvJmd97rfeEDoLyZSp74FNbRCynxQisw4S",
  "key31": "t2jfjW2LnVnbeeZVuLgBqaxS6B4LKzHY3cr7GYTkxg3AydD2kdu8ygGoCgJztzzUjPdWHjhCRPzSFiHngdQYXVv",
  "key32": "4wEtAZd32p39JYyaG9cKwopkTMfdcVQjzzVVXzboGBt1csaBRopGBrJXfv8S3uR82nXteJFUSpEsiYGVK43NKcp1",
  "key33": "mqG3QoNSgLpW7uvgGCxBL7S53CyBywUYyqDB5jUPifWtzR96WurwGtD56qXg2qNfv9ezemR1DRG94vWD2qp37A7",
  "key34": "3PbpSzY2M3aiqjfZx6Zz98zRxA799pjeZBNum8ME9moKFzsc7KwueK9EDDzB4VewFKa8zHVkrDQNBEK4zG2tgHfZ",
  "key35": "2U4UFNJN6qdGaqmsWf2W64tFhrDD2f8We2Qfj5kFjY7YEEJdAQjRDTD3U59kAzUKwMHiSaAY4WmpQcvKoFHpXNY1",
  "key36": "2UrDB5WfvSmCy3GEmx5y5Wd3Guog4Egvgka59fDZjkL5gVhnqZ8xPkwbaTZmCKJiayM4iR77XADzXxvjU4Z3SjxC",
  "key37": "3ctmK22c1jNan6CR8UHeSAgi6gYJrvsxZd14mjeJhn2vVgmk8YYYcqF6h26ZK6yFb2TSbYKiVduYEDRNVJ1MRumW",
  "key38": "pK3TLcLqbG2hxQi16r1yFg4rXtgXHz7HPAC6jPDZHjLAtbZ7CcejxXC2jtPFC9aRqGqHArUhYhsjXEPtUKW2Dbq",
  "key39": "DmmYdWdP4cr4cAUccH92SgRgxkgZboa9cFHL6Y9A7rMT9E2fXCYhvmyribd71yb8Efgey1MsVT4FXrjxFLHG47h",
  "key40": "4FvNCvB7bk9swxRHRsVPhWR8XVWWQrwknkvB7M5h3Gb3Z9Mz3WMCtog1P2wjmvWUEyJtb7yv2XRogLXpuoUBRMqQ",
  "key41": "3KCFMZqv4PTftt3H8NqqhJso8RVRKv5ZFry32EEEg7rNqmz82an8BnKM4ogvCUdhZPVVQ6DoBjRCpYNE8SEL1KfC",
  "key42": "59B41b7V3AFWdUu29hhxQnLGk3UqLTLwf49f23ZBjbgre22v7GxiEjaWnLDM5EQBBsUdUkujiqCY9VMBBzycut1J",
  "key43": "AysjSNCwTB43UpPTbHEPxm8xhLB7V4HbVpid4c49NCJrAta4NrSeo9EvAtiNUKqnvadT9LhiVDdephf7BVt1LvF",
  "key44": "3RXvkYL54nVVLc4dv9ZABEmL3DqJ5yCmHkziqNtK2HmdtrQ2v5gA6tv1r4bcbBoy3k67HFaY4pNHWRVDLSEyDT7M",
  "key45": "3zyJ24vScz3kxAnqGcWK9YbYckwLa2RdbuVB1xmGngCdqpcRCTQvMwsV8wFcaS12J63xrZg9baLvS94toytjNRiD",
  "key46": "4Vtb233XGP21jYihfX2J4xjq68ekLo5mLpk41YRsKR8h65HLtF9bKPfuLagJBtuJeNoiZA7N4AeiYZitouMmDwNn",
  "key47": "4rjvAgPLgXgTobRFy31i7hmfpsLVAHYALcVbwjJCEV8vQHeZbwBZmJyfkBF6nrfaaXiny1YpopdcVD3SqVmNsNu"
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
