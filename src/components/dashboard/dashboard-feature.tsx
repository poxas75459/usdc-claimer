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
    "3wQ6itEKRWZhD3WQAU55nEBd6tSaurBQ8NYYgSZwxv1NByxw9LmX2srKWJg3HYhhfKsnyxBYEs7LTZeypjob5eXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w5a6AGeGvH2VZFnjWZixS2GPJfWe17p8GUAFgz7npQf9kFXHMbXkW6dsFJCz12SZFVyGFeWATFxtMXUaj2knHf9",
  "key1": "5Eo16jHVWQjPpBs5u3HvrxhwyimtvDNdab8DPvd3GAvp9DMxPLMeTEVki9WbCV2XG7k2anKAdcTfu9Rhnpz4UmD4",
  "key2": "23vQibZ9mTewjFTh9xdMqayTgR16Fji66iSXeDADVWpoizeDmAyCsxJfHfYAMrL641kAxvrMVVadcxm8pQDDPmpf",
  "key3": "3XAdhyp5gjWfzSqZ6M4qTZtQpCPVB8GooBUETs7HxsPXtgaJjXA27aTDsKtWpdT3anmD8KWm7hGbtGTuAeTUH6Si",
  "key4": "2jsAgXAxr6VzhQEQWRijA9feDfsQcv8TVm7v7ZRzH7y8BWem6w2V7mMMu2VNDS8jX93S5wYe5N3oV3nmzBqNRn2t",
  "key5": "m5WwahCepf2jjhFHn1okUwQJ17gExdTfo7WaahKU8m9qxT2YswuMBaLnWrnyFzbrmxnFRpzB9tVtFLrB1VpkFrC",
  "key6": "2AvLdKr562aWY7zAb59rD1Z3eAff95f5tNBJshp36xZPURkfC3MKv6oUWoeX6XVnCk9P1XqHNuB9TQqSGhGL7Fzp",
  "key7": "DHZs7G4vo5z5mSN5RgrNXhkPi5UVEgoqfzXVwpgyEWb3ErH8uxdue2f8xQQRZyiCkx6gQGVvBFixBh5QmoTfEuf",
  "key8": "57BvCGLTAY9WS4TAoQdF4ta8XqEFC93qqEZJaW7fZarvZi8931iNLbT89mrA8nqmg8L44S12PYenUR84YGPPxfSU",
  "key9": "5wxwBNnPxfyHXjQpwBc6TMgsFDYeTtTJL6evxy7juCcuv4WnSTsoWaXoUcCzcN8cjqHmZy2NKyMNbzBhc2J1pB8o",
  "key10": "tGweeFxLLy8upMNwASsGVG16YMoYkmMnv4fkzNY3SPZbaNcWqKAeJARvzoiTXyf3GCxWTrrnaMRghe3fr4rjHrN",
  "key11": "5ey9v99rhM9sXx1VuSLAAuE7yXwTNGsjqqJH5LNZfyhqGXGpJ25P9naUybakaPrnb4mVTmZvtE8ZLewDwYm5vsz4",
  "key12": "Rfai61q5Xv7b12LV2DSruqi2ZdNGdnoUeqq8ww61ivvPDgjmeX25hnjBwyZHZbTNvofCZJHBFQxyaFhSwTest9x",
  "key13": "3mWsRfStwu9pD3vRFdrLeycHUC1aLtVAu3DiWaixiRYDpc9vNyUpM1coBdrim8bQ5ZpGkCuJCdy1anvuViPHZdw4",
  "key14": "22uZDvzkiLTANjnRZqUhWMYNC1AzuxSAJtacZDv9dRPavk2PYoG9fnPmE1B7NbfYyN2TDxwXEiyF2zJtRweXoFd2",
  "key15": "3MyVWTw45dgAJXAEtGnDgU7FBDqGd92VDwap751pQN6YM6QnWHJxp3kAWEmYTLx3mE4v1jTC9izqRUestEnGi9UR",
  "key16": "4cv8E5sddB6UjqAW3JJREyx7JubR7CFAiKR4jTYVv6khMTcC9hXiwhcS49ZBogyeGYWPYtJt54dVLPaKFSTgLzj2",
  "key17": "4iVhEmGFatKSnd4uMMfiUfyBxxpcM7kPMPvajJRA8Lvudrexi9gfFFTW7UBxipv8FuZ3LPtSF3scGYisqoow86rr",
  "key18": "5DcETwV7GecoAJXA1JzQkfT4fcDubKZLU3P339oYeRZGUDqLQ1PBmrogrDmB6mKMW4MaTHCUymK25G4TH4g4fXym",
  "key19": "2nQ4zqqteSG2HEMLRdKAvtP2UY8EKB9qdNGBhDzSyLgrUZzrAnamCtSin5NgYcnkPSKVqiSfjdfo3PfyVc639wGh",
  "key20": "2nYax6JptbGEQgVFqE2ciJyKWdzTs9gyQ5HBWVuyD1zXXmZQVzN3CCxp4Xy8E94sf2zqg1f4HEG8HGyiwMmkHYZV",
  "key21": "2nKKvWf4o6K2UDWW6veJk4q9U5s3WZo441aNQFCdtfbTKH8TXoc9LidQ92CT1ASDqpC1RzUGv4Wy3RZvQxSwMTDt",
  "key22": "28b3J7jDhP4vSW43g6epKGdBb3y9mbeoJszPq3SjFGY3aAUXci6uPkoiekMD7Hbw42YUPKWbkqqtiM3ThLd9jTNH",
  "key23": "2kwumEYuX4g23M3Tph1DKvoksbcxW6szAdhyDMV85kckW79ygRaggEJRhSDgqSbdPBWCdvq4C1jS5iT9aDPE1AfN",
  "key24": "4xAqvy5xGipnVBeyvFYRKuXCmtUdjEbhzwSQomGZTAJpF1Dyhx9THpoG1r8HBpCRwdKifMGj5g6KRJ1YxemRXdo8",
  "key25": "sNFXxwCaBRmPHKkFgjSDQp4EeemUpEhh6RZ7qsxUVFCwwrfKwTwLjnjURg6VkQbT34r6PhJEThDRz26qpn2k164",
  "key26": "4gN4hHwwbnjkFwG6E9CdzB84MwRsycPJhoRtUp1VDdznQAvu6bBTxWdsimWzwtHdw2jYQoiPQ8JCg6uyHAQ2CHzi",
  "key27": "JuvakpihFAmCMBeMLcUYAEsiGkBHvNWNaQBwgJTpfrzmY2qm99m5ze8wtTEWkLxieB1Xy22yXhbXXGXjg6dUCxi",
  "key28": "MExR2ro6pYcSySAwXjDNuZcbWBzPS9hsS34HbyzksWz4ZneqqmQWrMc15r6v5Sqoxn88Uw6VHsaxASBphiBLy7P",
  "key29": "3onytFysKZxwCiAsLyyBfvAFrMxj73H25R5Dh2iyh5Jej6KBME3Bmu6EJGb7orKKtHcaPxCorYiJZCAaWYiRdvdB",
  "key30": "kNZ7usgfnE65tAyvEWX7wvJabhbTKRYLQprZzuYgtqrCwfa9c5PowKKAsjYH1DaVDebX3cj1oJo5mL1GFWUow6j",
  "key31": "596ivagpRiK88P1LbofUhFwx9QgeiNCfdRb4oBFCz1jmfSQyqTkMh7rypM7KHcrDinTHKstbQsPFUijwBB55aAS2",
  "key32": "3xEJjKM56YezKfdxg5uz7GbewuRks9uvpEvLHPCU5xtmLSD8R3xm4XdcxPGdrs8F7gDB3eBMhFmqNh45agS7GU79",
  "key33": "3SJnxvmgjuGcbeLVoM4t7rW67KzWAVLCAVVKVeUeAHXvruzeQqnNuhL7NxbG1LW7rsPfDWuaqSrBYWYAmgEDyVLo",
  "key34": "2zZUEP2rETb1rNJu56wDDsekVxtPs3qZG2e1fVFioPGTqu2zCjHDiWeUvScLMCDt3ErBN1KVbjqZgvMJpgDjT1Xz",
  "key35": "21cR8aduyjBTM1qZSg2mN7KtnU4XtBTdVP8ADpLP76Csytp61yJhio85cTWATcLX5M6fujp56xXo5VFUkSiWVxVL",
  "key36": "4KzeVm23KUK1Vdxadud1fmxT3Q3yRoJsygzk6ZPTyTyhHHDMJ2feC1WWNqCsqWYygY1Pb3Z47gRSXwA9926gnbH1",
  "key37": "21xBKEUeB8gvAhmUwumQZeLq5T7x2utpzEkr4TKoSVKRdB36HLsm4seGEaZaKnwHQNapUUQW1zEG3cqVyvry3M3c",
  "key38": "5EpBRZ7ZTnDx1gcQrYHdrG7pYCNHnDZsg15hmZc2DpLv6W2ZAo248xk5zTZWFwm6CRAhQRVChLM57BMybQEUaVje",
  "key39": "4qoyDHUBAHRXrHxoJ9goPGkTiC2xzGkHuZmdk3qtNpqjqqNSiqtoXhBys1dTYKTc6f2XDH42Yw2AWqA5zKNzVWs2",
  "key40": "3xiuSBBvQQfyGnHJ1tLSZUC5q1eMKAK1d86fyTWFY4PzVdUPWS99tzARqScDiXnnmta3YbBfxwgejH6TkBgwKzbV",
  "key41": "3X42kAZzWaMXzkK7m2iTn8rE9JARQMqpZ1NYhykiNY1rv5rfANKZohSiaJMbQVPPUuN86M2s6To7tTwx1wKqoXpS",
  "key42": "5MNHiX7VRixqcuCGYkFR3yMmuJ3wdJnNAz1zm3Qn5yW3FqJT9Gwsb46yE3N2SSbvywXH28EuqxQgmk6XMBCHA7AZ",
  "key43": "3G6HNNzRYb4Y1DrWd5aGJFZzHytLSzMbxGphXTMrzFYJREyimn9wNbwQBAC8y6fSkCFizX6eQp5aRRoyY2kY2xLD",
  "key44": "3MXxPMVkL4wmJusndg6raDTxnZ1xfPPYG5fNUBt8B4vEc8cRwbcgFAUnbwnDnL1JDRsJfuzuDgqTUuuEHsua1X7h",
  "key45": "2E3uRScmFWdFvapu1Ljy7bb6HU9kwhqsJaAe3LYneLYichHm6mQE7XeJtubH8Ah8KZ4jEZURLRCPFR5vQBkSpZcE"
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
