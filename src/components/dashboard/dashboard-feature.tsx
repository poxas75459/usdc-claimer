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
    "3A9bdwJbrRaNMD8anMwXBofXurTNP5HBiYwZwVQzp3EbjCKeuemLQfbB65GMZmEfUMUxkCwJmCgnzcB5wLKTVvG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QwNDP4EfNyMAjT5fiU8PVzRnBbSjE6YqMfCnHWgQdDfYqdNW2WupMambkTnw3EAhgtLVWBx7c2iZcVLnA9nCyA6",
  "key1": "5TzTKSkp3XLDXp6kqz54FR8TYyDQt3cNcVujMRrLqE1V8uPTWsZ5vmNn2jjf1FCXQY8f5uBwt2MUaC44ogt4TA42",
  "key2": "4ZC2Moh2yXpcV6EbA6f6jy9kCAEtaedBaHaCrZa3btUjJBxMMfAMCSiSyx7NqkELNMWahaX3d6ws9SB9NkJPYpkM",
  "key3": "2FNYBoTuVikjNxuiMQiYqb4yosV5m9jNXcqAu22p5xu7ad5dLDH5ZHCbtmw7vNSnHLiKCPDSdMQtwKdLMTEgJvvt",
  "key4": "4kLjMBgdzgkHQbQrPY17mw2D6T4FxVa97KResvUJig98Kz7NGas4uxvsxbyX8P3bw5DUje6NEGxbkbUPpKqTpFcm",
  "key5": "9GULpGqy57ZMdq7ZMZGQJv9Jbk73r97AXuxLuyJYjHo1UHKnF4g1XdrXASFDpu6yNevCiZJYg8EjziNSR3CMakz",
  "key6": "5CsRPxtA83NSLkoQy8mPa1AQNgKzxJVtRetRKEMx2Devm8Nf4ou9Zw8BRFHFkeNsxkKoU64ix94JyYtxn9PrHSGQ",
  "key7": "22Xo7HG9EMPG2NW7MKLdw4wKzErD6r12axdmfGGhNYYKnDxDvj91Ngf6wxNwXVq67PjV3qV4AMu7QTGAvwJ3zy4J",
  "key8": "M6VucfGU4VZ45xNdMMagv63wiUV1UanyDCAYx6sbq6GgZAe9gDo4FH2vZXGfYMnzwzpZvedHtr84tgXHXwt8Tuh",
  "key9": "3oEEEUYkGo9jbsyu9phP3qWyxJdTVUDFuFrgugA4GtLzfp4ZvT1bPZvtZeeRfL1BquHzDtWW2zZyK12TyPWzWMuz",
  "key10": "ntqfSVDL5cam8sbQAYmwnmvnZgKFi8ZpWeyfoboBAq4WCgJiWhHo2JQSse1hZg84U5g6wbfUymjjSXT2L1CyGo7",
  "key11": "42tWNuwjaK42nqDdarWD4agYGAYAt9by9nLVqup63SZsAhz7VGDGHEAP3LHVeUfjq5E7Y7D7HGAvYenXLpJ8u9A",
  "key12": "mVdNNLMkn1SVwjsUgyowYhTE68xo3TJtoN1fQJALs7ToVqEVjkqiCBdQKMUDGkvdSpUoGSKhvBPRVkAgREGxpsR",
  "key13": "4ixSK3cwGvJhHxWp4k5MCyMiJ9so4MDV7Ji1hVS6v2JwRjomvr1VzZbDZ5EZu1g5sRHwEtZe3Y8LYUZXTUqr92Vw",
  "key14": "55f9api85MhqN9gCv2zUa31QZC4yQ9H8771Doit77tyAEojvibJKN8qhMkJtfS84tYt1SRJFaVoV1zPbt5fxGDKm",
  "key15": "2MMe4RXZJYB5DZgEnqCQcrgcDV6x5mojxstvt85g6g4EGEZsoULAj5FJ5qGLEh8cxagG4GZjuA6tT6F8a58UP3HK",
  "key16": "uoh5XXvdgjQBuBd7o8SsKg9amsA1dZEaJj1Pq1kxF6iCSV76wnkFxk83uyU1TdF1niXcq5MjAFeuw7WhyuWEWvj",
  "key17": "3MVNHZvMtog35pHy5JpTdXxFaqw1R12rCxcqhjxEPP1DSDkCVNZKjq39YEFPFSX7NMKEPgy2Uj3HseZy5EWLcdki",
  "key18": "5RswHFkVcyEotKVcqz72YPmooMqktNRdBLuQ3rSQRU8dXMVZmHEogVVngJzWTwf2fP6PTPPA7eqdWD31Db1UgRoy",
  "key19": "5pUoCUAm2wjvpNzrbYv9YrHzE7WvbD8YySAmPCaGcwa92eoAXp7qfmkVFVagmnKdQ2Q4MnFQfXUkwwQRdLXdvgSF",
  "key20": "4RCgJNFPp9jtscynmBLPvPGfER1RUy6XG98u82ENxdqecR5NXHGcgr67gZDSPRdyNKPgSLeSRxautvxPKoFkXmgG",
  "key21": "3GYSiKTYLJmVYAaX2ugsKFXZiFiscKiBKrCGqKey6YoDpSaWugSDmrBdQ55zwRwjypda84p2rxi8cgYsWq2TBALK",
  "key22": "2yo4zT8iCjBLoxqbH1e2YYkkVL8Kr86yDUUcmGapf5vZemZVmvS5sUHygVfUQFcM1RJfirnV6zUQdXoKKyroZXpo",
  "key23": "Bp4GEhqUGUT6QMfwpHihnJjrXPsbMewPxBDSaQAhbT9BxC7KZv86GVrF4cmBxAZoEhg9HRw64jqUQrfat2YozT2",
  "key24": "28bGuGdmMBkTyTDqVDzcYnoPQJz6qFz7WqnzcxjBzKH3JHDmcj5LUh8B88sZJo8Ecu7mGdfuALn2zP5y5LKou88G",
  "key25": "5rRB6W8F6dwQYKhGY6tEvP5ENCXdMrjpfBchqN6U1p9hKqkBJvnkdk59pUEYQCdHzdy7QAnqmpdw9iJYmLw5D9aE",
  "key26": "24g1awvqhBtwujb2yGSPEL8xnfuvbr5Tw16N1JS1iAyqt9KasjABiP577sAqoCr9dzXWpnH4bpSui11AuPY7swwB",
  "key27": "2JRLtSGoGDYLJCcojb4nhpexHNBRtj8AADPKiaZ2hTiumh176qmRu7MLVimLKjdHoN9VrNFNgBNrApRXAx6semFe",
  "key28": "66iWhBHAuEcWpokkY8rH2NzmRSZhvSa21jLa5BJFUbZqpaSEPjtLBAy9hRwNBEtFxQ8TyRwhYwnHxuHoVnnBc1m9",
  "key29": "35CVvDtYGYjXtscNofGYjPEXYe2iufzjYpcuuvDyAaXMudNCrrQMo4MST1DfsATRT3W4Y3ki7P15qZLK32mz4bnj",
  "key30": "pX9YrwCYgnaXJX6cG8sww8cH3fUMZvJKZCkEhxX1x6dCcX1MsvXKr857eHFwpNaoUxdXgk2wohy5cyWWdeT6Tni",
  "key31": "aEJ6veQqLnp8JnM2Z8mQx2HeRs7WCWrsTQwQ8CLPzmzRdzRfBf2rXacvYbqBd1KmHDQ38qySuyKkPu314iVCHop",
  "key32": "wUw7EZkGgqYmPH1omis9jbMVf4Y8bP3LWDVtVBivb6o41JfG9aryseUYDdf3gLBhp4RCmEgu1j5fekckywTKarv",
  "key33": "5xZaZh7ZgWrQenpVbQmYmM1KFNTQt95HmjrrSNRdsWsVq9AHtBUZsViuTFvksNY3qhHsBBn6LFiYFK2Q67HJUBiv",
  "key34": "36puuhJQKvT5ENVT5s8BogRmSqaoQYhpPnj86aypfo5SgsmVaNHgrU2kg7qtQrYfMHTAyKUcq9wTR97QsUqKfbic",
  "key35": "3d93KR585EwixKsfEcJVzZhbSzfbKaZVgKSVArhVARXdgN47NmcACEoJk9FtRsgqx22MpBZXif8fNWvy3RedVo9S",
  "key36": "obJ41d2E7DFG19TyM8rwtTMqxt3WfcLEnistUH5NgsafD3yDFfHw56VkidFnhbuQuKieZTZZQN2gFA2czPq7vrX",
  "key37": "2RFhKN4nFQfQHYQs5NBLfKAnVzQae8ygBYGxfUDP2zm8hTea7gaiuc4skzcSyAHK4YEcxvxCszxCwA9c6Xi937Pn",
  "key38": "2a1UZ3AS3Npc4xfVb3rsYL6Bykb4zmSsYwpz8saBvw6JFbRoLr6hjT333RbY7DjddmyT46MBtuKu3ghtcvnqZYpV",
  "key39": "35g4rNViVsmsmsdAdS5YXo91eCR4VaJLJVnbaVhMLWdGSRbDXcZHo3s7WuhR2L2hsZHQMfMMpwhpcRj4QAbENt5P",
  "key40": "5Ws1tH95nCvxgXpFD9u5Buffk1mDLQyFipckbkas5MpupAHWW9iHe9uKyeRKeRwqqLTQVyD5QXukpV3q5KT64mnY",
  "key41": "5QHLFbiMFSMjMsvbGbUrYTerxo1AsJ4ga28vggwTeCKsLEQegyCU4ppMsGyKkTcjMifftU37UojZStHyCjcSoK4W",
  "key42": "4EWfj7KSkf8hXNKtHAUXmXcRSkSLvUncm8S3f3HXda7YoMbDTA1rozVhQK2a8QV3QD87SEKmVBH5WjQEHr5bP9uE",
  "key43": "dJRVj1w63ZAVbdsvFkBmEiinJjBwd5kvbH89cXBmBcsPxekycLZgqEhcFBn5VHQFL5nyX5j9M7WSKuY63YrCrAD",
  "key44": "2ojprYFRFZzYxMBFTM9JJqrzHAAfprDGKUt6WPDkJcs7DbZCyY2V4Y8EjaNj13SDe4ZMfNTpiMbhtb8FiKRijbdR"
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
