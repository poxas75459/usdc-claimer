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
    "4Cox8ah75y4ixzurG7oCSVQhvKpT2qW9kFoa7piwLy4Fjxn6V3eH7io6NfRbNxaYcr4NUhaT6Aii5JLomasp11wQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bPDfosLL9jYAuPqKdC27GUezGbVawRsiqGs4gUy9vBytPi1tY1fFbSyPuA7SdavPkS61hyGDW5vY9y2xdGjZ19U",
  "key1": "5faHUyxdQo4x54TNgSr7hmM47pcyHY1hp7L7K3VhfVu7inUqSVZQ5V4hDrd2pbagPgZozQ5xzXv7K65nA9bxzzVk",
  "key2": "2RcVzz1Cg4J7AZpsBc9XKySPgQYhBkb7J1ApWqGdM77egEWGnJa25KCAqQ8ycC8dWsyweBgdTPmFL6MPELj77F3Y",
  "key3": "LSm8RkGdyh9DQFrWCuzrLd9QotXyEsE2iEWxQXHSZno2WRndU8Dd27JkJ9W6a1Hjzu7rxTtFsVHLt8y8x7hndyU",
  "key4": "5rz4k3PgSdAiZH4QTng1RwZ49GzPnreBRKmBkVYoXPayN8ZQYWY2iiKHCMsJPaRKwGzXwdDjhyaNxZANgTCwmrDm",
  "key5": "A5ouyvm1gFWubY3Vrx5War5MtS7gHJrq72xVX3ZotSmbmzLLhGtJdJusMNUryqjeYN2cNcYhvJFLtbHp1Bm5kxz",
  "key6": "5xhEM2kkyt31AzAYkvfth4vWJDAcguLRk9VcY7cxSFHFxhfwCfaRgNgMG3fS7pye2uvNZXS5voZVAF8jqqXwZ9Tb",
  "key7": "3GifrTTVcXhV4UjT6tnGuG92vHkCgwyNuS1po9Yu36HrvbzrWakNJcs5izhadZgjEKt3EYkmjy1oKUdmm6qHzjcH",
  "key8": "FMNrFzV2FB5R1Lm2ST9Tm6LLAYD5JznJ1Ph6n5H4bmzXmKdre7QTXJRm1XBsjRThoCjwskxKs7yjwdHuDiCh4LP",
  "key9": "5ZJjquwLzB3vadUwVYXMajCthJ1JhE78g1SLVJ7MKSw7uhDd5pJEJ7WGrxMWeWz53x4eUEZsdJWJ3rMSv4cfdGzz",
  "key10": "4aEX915BtfmyHWcg5D1Q5cJi79iKcqLXHcn6WQD8QL5kXCGsEoMwYXYudiEotetWoBqUoDGYHq1nxspdKELJooTx",
  "key11": "LZUjPe36UcpcNLnq3dUzfyE75pMcqhs5WrhTD9krJnZRiCTnAiVj12f1mdFYXbJ8mspVfD2jkMPA5uPG6uwhDHG",
  "key12": "HYQzVCXDmQBt3vmWARkScBd6LPr2LAsffAWBWuPXjvzyUcsBQnoVoezUwXUScBW2AobjdndPU9kYkShDRYMkKkx",
  "key13": "4M1HeSeuUaK1dviqaRDNfci6NwEJxJ6QsjA5Sk2BC52KkE6eqXnF56w1QaQxz1VYzQqkjkSSfdKQrPvoPpB1T2SQ",
  "key14": "5LkTNtoR9BTYQ2fwf1LwVvfXG7X1i9u5Tg51D6C5aenQCjDbcTTvMrWn15KSaC2wUaRqFp2yKwfmqgTYZkJ3kDem",
  "key15": "3fLtE3rh1RVtfFnGvs7ts2EN3C99gZ2dJQBsSvXMqLdEA1q9XxSiYeYFXc7UdEZgS6T7zEtPFc4hAeunCGg8jhDb",
  "key16": "3xKEXZodedpn5hK8ro5yehytKc7EQJKYFQocZK4YQja1UcbTz9xRGSVK7i8GtqNy3t3mHjLYBT5Q7sqPDP9AjJ4A",
  "key17": "44Gym6c4FFZUXN3weBmqoEY5ej5MEHN2YJiV4PPmE9T538w3aHxB3mR5Mqb7nEmSQmXBHJuNAKWjxbFxJMJVNvPL",
  "key18": "57BiagqSJtfqRYDEmS75gdmNKgERceEuBLXg479FQG9eKcPbrXaWEKmFD7Hie6a4k4LxGqU4LUP6jiFCwMdC3Fpz",
  "key19": "29oiaHRF4qzM7EoJ8rq9DdP2uuqDGcRtjrpvteofJ4wJFRNWt6Fy1AS6bkJe4kvSWzf1WwTsU6jkfBtvB2RGhobE",
  "key20": "4q817MzvNj1sHUeZ4askQoScXGCgUWX8gGZE2i6B5i2wo6Km2ALMcqE9p32W6nQuJagQxGMWziwsakMSr6vgjmqK",
  "key21": "3V4CjxkeZhGSUnntXhqjLEJVY5jdKU1CmMxqvUA8wdhRxTx5dVpG6NxqgsV6PZPGANzAdDqbXGfjnKayqHttyTK7",
  "key22": "2Kr4qfJfPfhLK77ffXtsTeneVTVcoHANVsw1KXZXtvZ48a71rTqkABsZh89tCkGFwGuqFixWhjWMMyXZENrjXDyP",
  "key23": "34DA9DdDLNf4SsqV4riY9dh75VNB5MA1tkDpTJDfYFVb3Dq6147T4whB9U3uQWbbT3PDSCVj8VSZg1mR29VGebm6",
  "key24": "SM2vvwQxXovWC9vbkHKyS65toAZ6pHn9AWuFAd4tDJVtAWHVPj3o4pWnsLMq4eNDvHY4bcnd7383mZEpYVGCivu",
  "key25": "2St3T9sNPf1UhRCd3SXwG4pas3ZyXV8b5GALJz9FmXwAz8DPzukbyKf4jqT7viCH84NaSLmj1pDmNUHrgFyZp8Mh",
  "key26": "3NdtjoNHZmx5LW2mSNQsHdCswvgDyuFoFpCVHR6SyrqnVhQi7CmmK7LBNq1DnVKb73K4zT58NY64YmZWEsukbYu1",
  "key27": "Y9nT2ZP7GwhpGyxPV8dZTMdqqNYwxqGppH2f8SPBqpfvEYybS7pscMUtJFwm8dBahKvFpVBff7AZgksCSbYUCvV",
  "key28": "2NujSsWLUzK1n63xThBTfbPP3fNoec5EVh5TAgjZZGBMXNdZXGzTmiXMSp3eoLRmyLrf6wbLvk5fhBiqesgVTFTC",
  "key29": "3kRRYvAQxsE4BQvCfUn6MGoVdo57NKqMV3X7skAqng7Ahjx9mSGaEGGsGCzDL7jSuFTZG9YZsUJAcoWsuPreyxyj",
  "key30": "5xpbrUwkmcK2Q42oQekVA4DfsQ8WKdFNR7KUdyJxYZe4rL181Ecvej2Eigh7SRdZ5p5nQVaWtK57gVphpymP4mKu",
  "key31": "3CqujZqqEsu3L9hVmGVaBPT8BuLSSQDoLynkuVeSQBvwP93xYkitiC7XbqFMXdgmGLSRyzoTR3V3ns2EyajWKZHM",
  "key32": "qCpXAmwfq5Mn15wosHU2CmATmignomg5FQNNhKb45x31JdUBJJPFFFoZe5fW7d1rgho7SW5Lz3RD4ntWUdgvw3v",
  "key33": "53GUNEvirNTbussd6PTJaFcPTqDoxWbHV7jXRQufVKWnb8ynqLADThk4GjKWF9wd7PVDFXm4ZBWGA2ZzXomTKCwN",
  "key34": "Zdu7oyYc2kE1nobSqShdxGZSYJYr8AfLPHj9LkEBgnKpKkVUspnVFhKjrzxMQP2DdcjFkc2m7SpwRKA6rVZXiLn",
  "key35": "2nFwgQ1Vw32NxeaYLx4b92PNttLUAKChgALf1WpR7QTXNN7E38AmN91U7HJsnxKBazcKZq3HexEngsv6xogXebtN",
  "key36": "5946rCysGDgBNov1VCCok2qb5stoy653THNkTT69fmmZE5JCbRK82MTkP3tz9EtM7XYvQ2jbCGjfyN1DR5bdURQz",
  "key37": "21DXiRZeuZQu6j83WZqvwTCfkFZHWMGgBcvxVFEkX8qmp7GLvjCbTvzmib8PaAyLjTGM8MzkJ9pvvcByJPtEJEhy",
  "key38": "zcDhQbt8sYPYag2TdA9h8CbCQx4jNeQp8DK1fC2Nrrd87ChwxRnJz1kSx2sie9ChaffxkLpQdk6GhtJzK3sRyyh",
  "key39": "3ebEphXEeTEZFQpw6txwhezpww8mUWkp6CKxWGReg1xds2pTnxYyeVpccsXBznibgR8YHpfAGGsLETzfiExdfh15",
  "key40": "4he5HKUZoraM2cfiLT1xYeK8KyPGEtEJNGqdQ2phU4NA8stBeTRgoQdgcMwRME8QpGoWQezNSQ95hi8vHQ9MW3yk"
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
