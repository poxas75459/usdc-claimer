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
    "5nCKL1BPYrPHSGQHETG6YYyqw2jwJsPgBLzxftCWnMg8eWqASmDW8Nc1v1ynMXFHiRxiuCHqGVbkj4pb9s79HfAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wGnkbJTQS7CRJS666HU5DfqdTnitCQWGgdCgJZ24nJdvEWVmTTLuYxAXVXRAztmagsKeSZWHXnizjZZeaAjtiA3",
  "key1": "HoMwgHpA7A28EtsiNzPQoqj8bFNUkSTvwnPCh6pm4UueNncdmcqxwKz5YfoWxcpkBnbJp3YtGXDCb9daThF3QFy",
  "key2": "3fVt2AMQQkA3toLs4R4GNCAb3N5kFvf3JzUaKkfeNurgTwcGaPJY4jW2MwLdmjYNNBkape2dJmXv6UimMYfD2k6i",
  "key3": "dkEYiP9NptMzJurKsxFvtd3pQcccb72WK4UwknTP5VaFwKWTXgJj3jFCMrpL7E8A2GsyBRRQY33R8aUCowm8rWP",
  "key4": "5a6LyNCvz8Nj2iMEsGYtud6mcdvtGZ6S6cXFvCC2Gf1Q5vh1ShTZqrACt4ZnS9RQWXKuJW8kK4zTnYTNBLX21Kbe",
  "key5": "4qEEdEGApGwKX45J8oxGEZj2z4X3Ruzs7GPYGDGfRYXVsDRW2yiyHsiQDXLYwFtQLLsmoThdMQQ3bVi1LYBDPqQa",
  "key6": "4MafRZPqM2SPkAhHzVAkYqvByNxWwq3pxJvyA91PAghZDU3ergDgnUEXvu8J8zNXH2AzuumvjffnbNYsdZPHkCee",
  "key7": "SxHTyZPWh8ZxcwNo5KnyH7Rm9icxzyZQ2vM9TJEwf5UzjZQmVDRYHD6aiMm5uMbtEvzGETa3mbpq5rVqK1ELeRo",
  "key8": "3VbEj2yeMV1rkU7B6zgx7jysBNRDvqV6NEsB8RWhCYGgTNc3hib2RGo5cjpVp5PxBzLLGPEHJqe8TA8x3U6WhEkR",
  "key9": "3vrTBPDfQpWN6edtQ5P46uvi2SUqC8taXmdu1spcztTYxp5x74sT467EHvmUxMqHSLuFXCYyxC8MAKf7j7PeT85L",
  "key10": "pSrsMePHW7dMeY8t9yYeDgEf7Q5y5ARbz4x4G7bQ2dJAEwKMuKWvFwQT4AQJ4AnH4MCTsVeuF565yMbDhBUSGr6",
  "key11": "3afkhTjPpoFEChL1F5nynuQTc9pieXRoQePfS5aaAsSbYdKHAzaHqPksyqHV5E1SaEjiMdLBsSuxjSGkC7qV8BdT",
  "key12": "4AbLWNAFrEanCiwJtuUZtQp6dipwBzvgUSNvTFXKQhe7h3JH2Euyzh9azfnwNBjAAWUZPoxXE3KXdyJtTiN4Z41a",
  "key13": "jcqCk2s7LHSfwUy9sZSY5z1vGpnYqLmp1wmybzsN1pNWtDkDQcMuWhWfv3p7y2xgBh9Q1LhYwUZgtkQ9oBWFoX8",
  "key14": "2prhegmUnqBv1ZCMC8pQcMfpKXhetMXbCHjSsJCS832ZnUqU2EDn3Ng36QzhDie9Gc34ZaUY51fgrzBGfUjYGcNo",
  "key15": "3GHceFcEi9jWkugaLJGYMpg4RmYwFb63t7vHmdcZHnQpvGndGEwahtn2goSH6Q7q4baDjPQMV5XuDatnvP9e6RNq",
  "key16": "3DFAebtVsqfhCcox5tonFFCALoz8qAPqijG3ebtU8JWQ2Kdmni6NzDjqVaqGJzvMCCgaS7rJF7SLfUwXkWLxGiNx",
  "key17": "65qLPGN4VVShESEwUd9KHexffbHKJxJVUSBSFd5JTaxnnLX9JjuxEr28tgGHAYnvvUgspFfU4B3eg8AkDwJZDW8N",
  "key18": "5vWMJJsuNz19u6N3hK8QC8LGHmg36ZF8d2MpVkQ9K328NAo1Y4TQH4PyutW9cRp1Qon85j25NtRuKNXaNo9rs6C4",
  "key19": "24aJKcz5WbPm9L87RCkRrU3q5av1zZkC8zoFF1kB1VkPzivXiZX5H3MnzLgTa5818AiTjM3qgSgnbVtwCXk5wK82",
  "key20": "4QUdHvgow65RJNXMKX3CXqrxWKDjo51j8noYPyKqSNUgwTtKacYuw5tNMadyAwuTn5CHHKao9fLFoEWzCVZa8RqG",
  "key21": "4rKqcZNhCL9kQAFUeYxhZwc3TmLd9xy8EvVpiBGyZNziaT1z1Z8KpcWnLpPTAgciv4twZiNjATuPNGVvesUvg6hG",
  "key22": "3LMuVNTe915HtJKH5PtAvttE2iDhWC3Xqk61TSxvtDqBzmcJS6nMTCGysQcfh2FqHmhREs3afrbW1QXpSUWs96Jg",
  "key23": "3gH6NTyLgjw5Rgjvn5X624QdXvEunhQXiHEWBE5dXAA8ELSqXmXPHBCww5pdvoLn3FZXnFFSqvFJ8mZGahmDwHfV",
  "key24": "5vqcoHibE7hUcFBACtsZZDcMYRaak1kYpA3J2keyReBH6yGNqmN3o2VfnLcDNYCE4rqrg5CV67HmAqneY2RhJYyS",
  "key25": "2Q1xAzpsHGJzqJgFxnhSy81PSc6a1TtZ82xnHX4oDPqzLAnThiLnAi3eB949iF6CiVQiT7SH5mQ4kQeNfrX37oro",
  "key26": "FpV7Gt68JuQAP3R4LVMk4GHeZsRQaUYnPEfCYj7qWRQKmyLKiKZ34wdCUvtzLgcNbk5igmJqKmHPjjjC1zpyxpL",
  "key27": "3Zo8gQDnWhRoidghnbLECBQhSviWfCrtZMfP3pmCbp7ZadxPrZ5LGTmUhwkpSer1ve9vKL84i3nYdek66j4LguFR",
  "key28": "3GpPZ4VG5doSu42ucn9DdmJit4Qp1iypySv7H16W7wmR9LJuiUwYAoWozC3YaMU7GVjbm4yyX9awVueQCdiJYeTP",
  "key29": "5hfNeAkjfuK2DhmePFoDnk4kkzRdJoU4Dxa9ZzSNeuVHgdsSc7tX13PCReNRjYkrAAMttaRXCSe8ujsL9GyxUD3b",
  "key30": "45QfCbVMFqCUkvSNNwBAYD41ZA6VBgZBGeSLkotME8xJWGkRrtjfmztTH9L8y8jpKJpZ5nCouwg1LtPukTcekdjr",
  "key31": "RMfDtMJHMscQcqSzE4ptQDkm66TFTZLg68KYXHYwYtKoN4shPh8MhehPkZ3NzCFt54sUYEG7K8uZH8uSjcFpD5h",
  "key32": "3egimZb1k6GZ8a6EobbnqT99fjWFTL6hkbvnZ3Fm9c3V5taEW8rNsfmKkHYN9VPgBm3n3ox8PHtaLzFwYnuJ8yQG",
  "key33": "56bU46hh8fSyLEwMJFV7PvGveiJn9MRrea8msVNgcc6gCXRsMieGUK6q4tdVuA3LXgY9wdcigV1TL2fSQkbjbuU7",
  "key34": "42mPMqwu75QiBMDniQayDeudkkjLwigVNaRsrMeyZXhtHpBdqQ1HbjtruMDvkBfA1FQxq1B7UphUGQz18t88kYV7",
  "key35": "2snZfiqiz1wqUZv7xrk7J6rxbCWGHBiUtMogJca2DGscfgo7CBBzdemuqsnHv6DpbnsYhDERaR5Zd6dqxAKR1eC3",
  "key36": "wyCUmrYHQtxJeMAPSqf9FfF7B2a3gzkQnXRJa6187Ta3KGWXjRAECNUnaLJtQoLvbREM3g7e3EBHxqLmqBueBQW",
  "key37": "2e9qCN9k5R2h5z1jsapmA2V2Nog2zt2yQRM2h7DaqCUodmyswcEC4aMq2kKFASEX8oJYuuBYFZH1TCGTjRwwiEnb",
  "key38": "5iTnq5BWZF71nZV9crzPqrEoTxSAaE7gKcQSMLjWtyWJom1RL7K5LzzDWk8f4xVy31BL3zNHPNZDw18R8sv7ZVg",
  "key39": "5AsoV3GUCZUQjfdueTCNKJwhYzTbx1yRmrQxBhySZ2qPq6gKZuxK8uRhqv5gmn71sNk4LGTxR4VspGmFZtypCofq",
  "key40": "4PPDABLx1NZ59fx93i2RDeev3GG5AKjkfA2FJmev1KHcrrLBjafhsHHz3icu2CdmKq4DyjcrK6HVsKoYx1yTNc8C",
  "key41": "W57sBnicvxbmGfaHNLtHGXqK6u4tfrsZHQSbdsWM5WWadyQvVehoH2VdUCzSdQBQr9HR48y8DgBtGDzbVGNGeKw",
  "key42": "3w8FuNrMZfwxbCsN4NaFBi2MqDUc4r6QbqtsY2ADLabaBqDZzRoChNzqtbuFmqU3s9G5pNxjYgxhxPY3ssYosfnG",
  "key43": "Enpx2foUg7jfHAZ4fLhM53acUVbtoRXTnaC8bpTwEijypk6ZF23vEamuF5KWcMs9e8z8it1K1KmogUzE846aRk6",
  "key44": "4mHbk77x2oLzJsokikMoD89z4utMMf7Wc9jFNBSBQzFeumZJGb9xxTxa1NFRoD7HYSTC8X9U8nrfaYwXWLndD9GC",
  "key45": "5qmLmijqmg2Ao5AEM2PRSEC38E4MWsM7BM7LyjxPsyP1AJvGkYZbUMNjeUAXVTA3C3sbauWuPhi7sjec54Mk6Ufk",
  "key46": "2wGgiqRYgS6GDQkEgjfaMNHxKgd7STua5k9T6h9wg19Q7cpXmUashgs1jKFXzi9qbhmGwx57qekQT1gtmTLUF2eW",
  "key47": "4kwg3Ym3yHhz8yEqFi9KKdeALeEPrU64S8WDeTxr4qhwSceA8tDjtuHUNczvKHgLRDQktHuyuvjWbfu3nPKJCMK8"
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
