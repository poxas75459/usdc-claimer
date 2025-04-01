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
    "2dUx24YWojM9F7oqS8fqxTRUgsekBC2yvwnfhgrvuQ5GuBXBFXBX4dothBFSUkBWcodXi97qN5ywDr8wv1DSqAP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pnsbqr5SuTGQXMcfA8fc329huJNZyj2H6XiwdLaHsvSenSMapQL1AEdri3o3KR2c6EUivFu9LXWb7BTbKUYGph4",
  "key1": "3Jb3jAW5zx4niR8KLHsqu5YXLb8Mud81UVgDf8MuMQiFvFw7PdkmWGNBaBD6ifepZvidQatTJWb3rkbepARF4v1P",
  "key2": "4XQ6PqFc3PK2nn5Bjgb3dHTbFoqJczcFgyL9Vh815TXKmYHp3MrKQdNfgTn8ht1avps1A9k1FYcTFYcVYBhLH4Yw",
  "key3": "5D7BDpiUiDCW3JG9k5dRM4wfot6zzJrz126AEP9vpGxzKqURgJxQZrmrNFP7ExGN8x43yuZKwCwTwsmAQAiX2Eax",
  "key4": "4s1i3trEY3KnF5oMyi1jfyoLjgAVMUxfxLmTRCsi5nbpBNCEBPbEpdjnqjiXwTS7TGc2hiqctwFjtNhbP2yZkFXr",
  "key5": "2VA3n2355JXDE3oahA5CtEqVx8YyXniU8iLvS5XsQhacFqRAuTFAdxhBG2cEshbppdPVmFR9KkU1mJfHroxgUoXB",
  "key6": "3BdwWxmEQKExUKsRnbh7MhNMYFghZFjB5TNXoc5SarJh1MmCnoHrY8KsQcFpi8h2shmPRtrhsgawpuH1iUkYJA4w",
  "key7": "2vR67HbAAvXmPWFDoBM1EXcdZe6658PZuR9nvFSnjESpmLgrgxsQGRngMhMJcjbVrGZvvB9TsoW59FacnVBCZSkp",
  "key8": "59qPZsDmuiD1pNAqThoTZVMDJhLzEmGBSXJYzMG9LQ22GfUFFKB9K28YweNEuBi5YCUepwCc2QH8Kvcp6CL8egb6",
  "key9": "5gu8wPy2CfemeuZV2GMNwCZuBRhVrg8tHw1J1JtXfSHHJ6ajvr5NNRXVaw8hu9gR4DM5xdCB7zwNcajWZokca361",
  "key10": "J1HnNYzyZhFa5jcPY8LDxGbs2i1nzDd8woyg1HedVi63W5kPYujnUX8bLsRApgnoVoFv9CEfucbSX1rkEf7GtCd",
  "key11": "2YrE8TjfjDvQGyhiosTKZsETMsMnLT2wiYzfhvMNfYF6cVBowaXWQwtUZ5o4qdRXhdiqjBDfyHvKW7qRGEjKghDd",
  "key12": "2zTUBTHk75orx9dMPpkcLQBKdcWuD8DtTBA6KGEV43BXxEkuLN8UDpgQW6stDFQh5dwiLqeVzZMhYzuJCq8VDpxZ",
  "key13": "5Dj6LYEN8sv6TbiUi3op3fkao4FVrZPX6G5edTP1ZWisVaskt7Jh7i8Sq8XTnR6PWtWSps772rzKfKjmvwLTqzDF",
  "key14": "2B5uoXP8CBFAgptcY4GhaVNPZsATi2TputiYRXBg3WYrQQyj4mP1wrFcvrqCHAhnN5sXNAaJ2D9YJGoXXCX2bY2f",
  "key15": "54sfp69gJDKPpkV2EFUnU2w2CtTD24dxGbeEiUNKckkn6CHh3pJphcT1m4yecRfGzy9657vXEeQu7mMaBpJfQLY9",
  "key16": "N7nUwiRUdwTZqFqdAEZcx6J18XrhZqBShjNuer6VdabxNfrMp3o4CoaopJyeWnkQEktKmvneS3RoFvKGNZY9id6",
  "key17": "4SazEHPjwPWggtadnYZLSuNKouzKBk9vDmdHncFwndMbpWEKVRoY4wvFVbwgYFpPmVjRPGL7SYq6wsM34P9YpMsi",
  "key18": "539gzqy2dasuPsX3A8c18FKzQUBGdbnQQS9mtxp8YbYgMwEs19VpwTYUBHhS4jYWjgRv5HBM6Nm9F2QKK9xdFR2Q",
  "key19": "2R27zonBUAjgiLuWfvk2KfzLWL2L1xe2wv6rpSx7sELbo5D8UcdU4FddDwJp4VzYdUwiVLwQ4WHNtrfqGzosz3h7",
  "key20": "2aC3ZGtBsJGmj3ViM6AWU2n5RFVZrQr9ie2xQgXYmUqGKWG2v5hV8SATZJouKXsokEshUqUQrQPkZcoY9g8qJjed",
  "key21": "3brtzW1nZpscYVKxKWeSz3dDqX4oM8xNthyRdRaxAcjh2ZTDwG2HvYkDkRb2nfKjmYuEAtgcDRTrYfdqGBVsvNU1",
  "key22": "5tvGywwKDSAtfPHw7jbXUoHoyVyk3SpohG4TQgpnKCfzNH31sQ2BfPFHMT8G5uWquj7z1nB1TmUyCkhcGP6DsHp5",
  "key23": "2gCszDPAuB7BS96uEbMpuyYg3ERb8ce3o2Pw5bG4JHv7S4ZSHoAxwKQMiUC9jSQLdDo2iAFQLrz5xQifocNLcabf",
  "key24": "3s2XMsXts3iA3sjvmteQGC1kU1wA98WUi7HjMjyt1hC1vvWyFbBgbs9VVnATcVKQEsv2CLppcU2fUQkDANJ5wSNf",
  "key25": "3tpJejtDmusgXxkKmcujhMtiGdTu1ADxvZWkJ1fjN9MzPbHqVNFtTnP2EJatd1FKrfYPMAXGRQ9bYsaaM7hZLcve",
  "key26": "5eeQBVmqQxYKwJPgeQyE57vN2Fx7SVNAZNUyf72C1JDMAJ8XJwbnRXnwYEArGqk5DvYnbeqxmSjfpNR2q9gVuARe",
  "key27": "48v6GvZ11ycvHPt2RWEBXeMh3aNQUgycyoqx4vHFUuxML6FmmRQfPNb1oc6t82qTd5ttPuQu42p66ssThcyePHdY",
  "key28": "5yjN82CVqnckJznvWZeXj8BkbJTmcFkMrFgknJNEBrYw44C8mvpyY997c26CMpV7xidX4poy5cXQuwBAECRitjAV",
  "key29": "jXcko84QaLMtTLLZudm3KXKZRn755e67H6BVVLTV1AuFSzjDumm2ropCE8eYK9ap5N6mfuhkvY5fXXr7avjHmpo",
  "key30": "dsX9Qcn3aGjMkHzkNfuD3RpsahXE4rYydh4FvQA6tJjsBbLCZhwZQuWKPQEc1NXBaDjmatXXoE2KWva76AgPFB3",
  "key31": "3ra6rxpvMc74QMBX4qMTTmq65SJjRLro9woumoKJ5aVNAhEjV2HJ3zwwBgZY1xqTCtJyEnBvYvUHgQprAu75Jcpp",
  "key32": "32r7t2y1MqTqrrF6FWdB284hWKCFk4HzVobnArNeP1cfAvTrc7kjaSLeJGsEXRRNtdKDEt2fjowAkAfd6JifLqoQ",
  "key33": "2228h5vV1F3jJcvHbGpr6Zgi6xrdFcCt2qa8y9T3gDQCmtkpS48PixLXirZmEDDxhrQZa5XpitLrvxg7M2H25rcC",
  "key34": "5bNh9zT4xu2Q4j4adUwoERsiFRMTGYb4SJMrUJRVzP36bNiRn8GHSsStsDbDHqyvzWxwLJPuWSVzKvsYVwRPB8GW",
  "key35": "2YdQNRbATr62qTKQHS63G5aT2GdVT7QaYq3BqNmhsbwnXN731PSmURk4nYgTKei7fzGGg7BHi7yEWuwZD2B4dbhU",
  "key36": "3bhxRNYkJJLp8ApZwn5SdXoumoSEfWjJHDJheqbLhyrdYQQvWywtpsASrQSuo71EFYNYeyBpfkitVVjy5twRJDWS",
  "key37": "4yzBQEcNmUYqG7vohdjVeaYbUfqZm4s7csE38fq4njTuiSs7quoqKx7oJaGruiopkSjqNTJ4jhgeXCa7Tp76QR84",
  "key38": "cKwuR86VgfRKK7x4G9TRpq7DaRcxr8ft4zqxdBvr3cpqY1TYHzhkwCoAPAdCXVXphWLqSTz41uBGMvaBPYSuWVY",
  "key39": "2QyTKCq7QUFYTdpu2JyMydkz1ZVmHDR4TvXMj1ABdAgMFPerBCYUisr9uA5vEdUEuGoQ3J7zYpPEXSKPcXMc3RpN",
  "key40": "2SkfeRbD3BJERpsbsg4qZj3JNQiEwV9JZdaGCHvZJ7bAHzyhFmgssgWKLyDVYEFP9nUGthzi4aVZXp2G2q3NhtTK",
  "key41": "9vvVvEhgLEgJMUTPF7EwqwWeoWCWN1vR1jTdDNEx2FSLyWMnTLyCHhwfgahSkXWSbDqcN8gM1guc1dwYD3w7C5U",
  "key42": "L8hsFeWQnxLdwnmgdHjC2hfCv2XNjLyHTYYYnM72bD2QLpomMoXj4hrCsrDo12JwFt7Z3YoTgP9Spgakk5bZZ47",
  "key43": "4hT4RoUkTfT7Va35VMMKetwkkos8iewfhzRAhDqhVPEoaDUiujatMk8ToPhWvFys8FaVvKYQDxKx9AxTY6Lghs6q",
  "key44": "4hsXxGeLX3ZX9u7iw46AazYRuTdQGRuEjBzrdjTTG1jY1raMb72xUrL8fA3DxPQrKQX1BJM57od1fPKFcDcEcnaU",
  "key45": "2FoubJsvrXMUi51ba5pFZLNPscvrVgeHtovivbJSR9N815aJKBekNcfZNZwXYyV4hwrfxcs6rtzZKzYNto1Mb7RR",
  "key46": "5C1Q7e5frpZneXHJGH8jLhrcvJVDxBnwCoJYPEhJvvr4eTdnXsZ46kbTM2DqcMpqC7hD45Vt5pDDEGXPtUtxPnSW"
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
