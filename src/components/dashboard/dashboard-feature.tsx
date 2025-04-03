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
    "5K92NTQxaStvSdLG5j218P58uDigZcFCyRV48s4PS6xm22ajVkCwcSz5RbTDLiKzMr3bRRgZDcgk1eVb9vyb2YAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eMcmENBYhDL25pCAEYqSfarpCfFjUbJpvtYzd3jf73ruWSSaACTj4L3qAgg2kN5EbeLTJZUD7TtozfaGmHRLY3M",
  "key1": "4HGZ8fygqSuiikpuyxxRyKaZKZ6gmVxTF7kpaqxj1iarS1B6dUSH38367f4Lm3xaHfxUpgMcenp5X5UkdBVs8geV",
  "key2": "4AB77a5Ne3PKMZRYnQwvsF4hd62kPz7DRAqJqz9matRpTDKaTxravP2wHNKssgDjDGEs2Q9eS8EqRLfXJ6re8gbA",
  "key3": "4tbkinnAr5BxWy9zq5DRedLXKhYkxVRkUMkfUG6irJGo4sjaCjrq3zdjvMFhVfPaQ3YVkqdjqwAXAK5aVUH3zGz4",
  "key4": "3bcWXCb8uHSDMHufiFRZPr4fDz5c1ryc4ngY1ytxFr8GW5AeTF9NqJgUuax98dKUexj8xSKLnGH9SWTqtrbNrLx4",
  "key5": "4rxuQ3HWduHfseEv4JewZx6Bto6sbJcsSq9xoGvUtg4DKZV4yRLX6kcLoymDnJZBvDw5PrK4DASHVgDKtdykruWj",
  "key6": "3j8HS6dVTkYGKBqkDxx5hxmwe7EtDjPQP7ywZwTJKkkazGY8UzZvYeydXueyS84WDG3KCHeeUUJtqW2fwYo7K7rF",
  "key7": "27eZJZvdH1rvAza2wEqocamr3mkpisdfEyr5vhdjaMLX14sDoimmspx3G4cVTVUsMW2DBVoi97ZMKMaLjGZrdyF9",
  "key8": "2hxJCQSvBTfRjctKbXfqkaXGsMfr2vboe4pLDVBMXywVVsMNpAf4jr2ANMfTV6vdf8LKSWWuSqMzY7ZjiCZUs1We",
  "key9": "2MYUfoYsuL6xoVNVssRhjLzvk8GWu4zTD4Bgbee73U3XU6be7SRAZM1UCRuxga3jW8UVVCwArUT3spaXsMMSz1hr",
  "key10": "5WariXeLWUWbjaUKRJpkqHgEkPry7ssWejgK6DgVhHQvJoezFaMxcXEgetFGYZvQ92RxLvrUEp2aJmh3csN49skc",
  "key11": "V3YxhTPeWDMQFBxXBcx9WCsMazYQ7cgfnmJv2mQguzuvW18tWibzkksLQDe1n5o2EKQL3BQq1vAFXusgVWMgfAm",
  "key12": "42g6vAc6dHuP66G7tGu3P49hiCSzvMtAudtDdgPmooSaAj3NaydnTYUBKrPKBatA5vuSG6yHk79EzyY6aWyR5vLc",
  "key13": "28sf2ebRkt7rv7kjv13fnhu7v1t89fQwf2wpdNYbkfPADBMMTNbaLdgjguBU9GnkMPaKFePeSJKGQttGWvzuqUYp",
  "key14": "4WPJnWu35L7CDL66wdEeDzudLedQtTqmk2zeaoX3v2fLGnQ9EJdjU7zmaYfDwSP2qJaGKiVtn4Y2WohfdXRyXWec",
  "key15": "2h9QTQaKEKZpFfjo1v1wvfGTB6VyFinpssXTsP7K6CzZ4UywmDN3jFXJ5zfVQsrnBGm1p15mFRoaCGCHrzQSQ2tw",
  "key16": "3rfzt33zAVwJ6mncnbFgK5UYHdJiNt8rScjMYbMHA8JRU22TTD8BD3HqTrcMeQLik6kngijtqNX4qiZgNRDNSvR4",
  "key17": "5Ru35PNKLodbeoNwAup73A4hM11A1JTR4hSwzfuyT99yDtzVZEMFZj21ih4krLQPBrvAvzQPqYD5UeNq7TWtu3ut",
  "key18": "5cKo9EUEK2g8BrxDRLcKyAPmwrmYfHpH2MDFvPNqYxoN13ttLZE3gNHPuN6w1wNEkghbQXy7thAgJr3WMhuwTeLG",
  "key19": "3YQzBepCgd9Au6f84YtSNQANgQTjeFAkwWTz79uEy3gtQkqan8stgkj6FbMT4ppAwdA6EpziKBkBsazzxgDCW7sE",
  "key20": "3YUWyxFXoSTcf5kzC8VgdgAz5RMyDynZ9jKgJFYmzjhYbZkjbnRcwJwLQV4V7Ac7BV3NrorETyAgDKs5zG6hSDZr",
  "key21": "4enD5nUXSfaX1xeeM1Ct8CVqdGeQ88RdXg5zQqUu9KYhi2KZAHPkhdNaNf99HRuByMGZ2aB97Uvs1RwRJydWycad",
  "key22": "3kndDfmeAGhn3ZdmMBftAjAsfEBhKAfhUjLsGQJrt2Ex9LukfnemSzQCqSCugRr8UaF5FZBfvkFjTqcRNKJXWchn",
  "key23": "SUeSnC5XqpTa35ttwobk1Hf2Nt18UieyU91dLgXUpKZDeymaTwkw9KgT1rNY4GyTLJkEMRjb3S268BcDTH9wDgJ",
  "key24": "49PP9bhWQe5zq6wEd1YptSLw5YhEJW8imna47RuLVftQ6TNaWaocKuz6kqzT2rY2jW7B5PW9fbHimEkskdvTL9hp",
  "key25": "3QAz5zTnUPMBxLb74e6xA3Gr6S4HVmfivCuGhkdoiGThrPuH4ctCAnJWtBkcJqmr7Bs7ZqiF9fq6toxBjjXdB6ut",
  "key26": "2Phhp8yEU379j6GF6jFu9cNvMGcRLQCuy1Et3EsNgBm6hgsn4zqDUtZTosRzENpx9DNpPySwvdqmfkUXRe7aVUYy",
  "key27": "2futUYxXSArMz8nP2x3sTVcs3Q1tkTKJjSp44fAXbquPUqvcMBQAxPNMGMfKrntQpSKs4gysaND8JkBdgtXGVfsH",
  "key28": "3aG8v1ENkhJsjxYhCU5jm2jdix2kfAEeUfjRqnRk7uUCoadB1yLcRXka9QPksLoeoSCk3KBr6HhbYmdAQbun6e44",
  "key29": "4Eq8GzQdN9jwd51WubAbFPt88hiBX9pNSZTo29EhqhobALjixNcBwtGQFTt897Kx3BC6V1r3B9SFkWeqsqwJmvDx",
  "key30": "4gMFgwEaKQiZH6WW8dUcDRxdrE6cwHSshzb9qchorWeA83DU9avPWHyQwiheA7U5UayaoNhgNZaH3brrwYbB1Sh1",
  "key31": "3o5XdZ6yyxeR5NjBQ1BUcGo96VwRe7gLWEvqmGESYwAfWskWJG5fE8R143kQRqQj7iz9JDVUfZ9RBzaDCsdQhi5E",
  "key32": "3SjpUB6MkNyxVfoLCJbavogVPyF5vVTADmfDdEcK7cDLsNag3ZMtaYKM3EnQQDefVpKZuEhaeRq77W6eKjmGhavh",
  "key33": "4tVCAvtDkk28hr8Y9on4JSWM3LwZxD2dVvRfjqLDn33cQaQERcpz15FoJMWgmGoFYRR7rGa43PNbw2VfWeaQ1WuW",
  "key34": "351uqBgUQZDFkvJCirp1L2pScuA381iT14RYkvF1gJtCNwfXyRwELkSRhVZiDUwvkBCkDhBpAQC4BTVz8eVfgxEb",
  "key35": "3x8QT5C6PPWydtLA9YZKuwT9tcmuH9WgrGYodXxR7esZikxsmwxzzc6ZRYc7EbJ1nC1oUvFtRcT491kCYFigE4s9",
  "key36": "5sPFwLwPgDCat24jdA6UAMFENc5m7YM8jgptQj4npEipcoWtcsVgBETRJfjnDMxGH6rZfYLQWD4zUYNjimh65FtJ",
  "key37": "49NnU6hc6VSyf3gA6vWhDKHGYTWADiJCj5mXx5h4jjD1VizPvSiAVrT4ZgCC1nhXFWiSABVBpZZM9SARBLnsPqk",
  "key38": "2FxSwG6qHUjMjizdRfbbHd1opdr6kEye2PcTuJZMoHaTCSGKVd7tPwAo6JGYNnkpyKZyd6svLBdQRQLfrnLMSDVq",
  "key39": "4uktftDzf3Zjir2Hvrcrk2t2D8mQi7kuFqdf2bJuuMU5SKq3NnsJ2sRRiVaKLvRXeBbQy16shWDYMcYt9ZYyGso2",
  "key40": "667ZDHyTYCVVFfgmKGHYrhK27ryYeM7M6h95d1syqvNq9j2U5J9sWq4LgoSSca7SeYZxkU3Mnfs2BQhY4b8sm1Kg",
  "key41": "4p7VgzmWMUCbcavKJ7R4ZHfFN3yb9g1ND53HRGLd7t5Q2NrMLEosB3Eqrgvv48ecjs4rmiJHkBJY8GbXycrrY9Nn",
  "key42": "4dQbKcrstqKRrYeP2m3mZRabzHDxLcqJZfs74MMnEkYw4Cs82phngRUchRLJHQMqhBf3g3e4oNL4pdbMee48JeGQ",
  "key43": "2xXRpwoUzFqEHT6qJ2vk6UsMUCqVU1iL4TavMP1sRS5fk3MCDpfumbvrWWhS2DuNFFrYqAtTHMU9S3P5xAD7rsPL",
  "key44": "4b7z3Q94DAqqACQAiS9FDCWFzThzt79FqQoRKCjgxma5BzFb3qfcu8iyraffN8q9TFkwm2Jq3nkmEYWKkYznpsmG",
  "key45": "36aS73AtY2sYir6j9ZSR8NjnDRLTJjaHcs2J2EaJHyVv3jZZFCV6N8UwsEyjo23UE1JZyqfjFb8DYu65XAYNKWmf"
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
