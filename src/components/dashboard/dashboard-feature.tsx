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
    "3xYbJwinQrh99x6xBboNQmPqCGLrWPacsXwoGfAoM5nv47qgdinmptLBv6yiqhHwAJHPV6pQratUoXBeb4etoLga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GdSR8kN35AFyUEc5bSJFkJsKooxHJnDHH1QRkoYZ4bDb55aKrgCbdoP922TncymrRQiFZsLs312VbxWhtKmYphA",
  "key1": "2JTgxyxv6gf9JkyG88uX5fxn5gs3qUm1g3mYALyn6Fo89S8isDnhY6vyhDEe4LTRfw6JY4VNCrp5eNkzVPhBmLB1",
  "key2": "5BiCurN5T6uoYHsrvUb1Z7tiyeaVTwuFHzr3MqHPLcXZ4pLKoGgPgSxLhhKBtNsQRNbGujEJZT5a64TS5MgL68Kv",
  "key3": "2JCrtn8gWT1wEohKZ59Z3sbatx18JJeQigZSD5wdgRCYsC5kHAoELBixXKdZyRdK1vXh6TrBntixznizc71wBCrc",
  "key4": "5g1v3X4oXr1s8rfno6JZRWCQhVbTPZU4Kbgqc7Q5L1Rm9Nt8x6rSrmp1ThK68qU319Fj9zYsZdtk51qEdc25ERTp",
  "key5": "3ZxoxqxXzVikSy3tfXFUXCg6TUrQ9RqQDaZSe96WRT9AU3fZVU25iRjQRAAYJTkYKrEzUHpiGDBpkHLRhyy15Rzr",
  "key6": "65RmxYfWoEJSm1xsMexC5wTkeYFdcmLiTVQ2mG6GhRUCxRwukdBivQWF9Ke37enxyQE7AZnaj3ktdCoHdQvn2D1H",
  "key7": "2HBEpsFifRaWKGvYzox7Uw1a7oYva7nJpN6MngLFXwUMLzUhQ5JhbFK6VoZZ9eBJqS9YJi1Ct6EWsNwTK2Tk4WLc",
  "key8": "2vr5ZAzVjTA55iHCE2ivDVaxp8DKoBqLbtpkLNfodLbiyp3MZsAtrwhWfD1Y1PckRn1LguaDqQHcERamaVZ5gRD6",
  "key9": "4pDfeiUbNQQhUjRXqyeiNWdPPZzCP952WLiTFQwpVfHqaaDfuDNDGn5EsGFEHMzieUQnjNLf8ehjSQT3LrVGgihz",
  "key10": "2mBqxfFHTFWaSUoR8cT3qcvL2fzvRszqENCFP4KHzHra4nwnW3c6Ak4UnEPTqnASjv5s37xH4zMBFbosgSQChRhr",
  "key11": "2C3xpsPiZezXzSgSEco8Ycuo7UVCNqLfbcs9DAV8jy4HbYuNTFtX9sgEqoDZAbQBA8qU6VEJ6QV3wcqKp821jLP2",
  "key12": "2cdzzRi9K2u9CsJyPhxC1V5f4AAvVtTS98QtK5uXBqWfuBP36FpNASaWWH5JvpDstUQfeZ5gTRFTSpC4kTqQT1Kn",
  "key13": "2QwRNopsyHt6myr5YVt1FWyVV1ziDx8DL7JBrdqDQiex6EZu2VPBzy1kJZTWApFBnniJwVQJjtm1Wvis5kggGonj",
  "key14": "5HmVKpxVz9ZkVUPZ2C5UQ796X3tNyH8syAaoZ9DiN5QQtuxSZq8ynf8cJoHoJaeVksN7kEQexCRhMyH5wPQctV86",
  "key15": "WPuzWDH8gtC3JegCGMAAiUokkdPQfaF5j7a6SrrJo3e4BTQQHSiTEaZbm2gAevxuuxJXqzFCpzZKEtpK398hm7L",
  "key16": "2WU7ipmRHcUptvfMqaZk6if6KSyQofp6XftHrAWyWq9nn4D6rGSUxrX4eUSzxvpzMBzCZAnTVv3zcNTW5Y7vCZZ3",
  "key17": "2u5ZXmUJ52M3pcFrHTGtJS93u2eRUU4Aev1zQ1NhAo4WGdWNeoqs2NDAACReWWqBuxyZDR57SuoPKdjLkvpQaGcT",
  "key18": "4noThQsTWYHtbmVfAGLFxmeYKqs4yKhfB8vG5USw6xQVUcXxbp8bcj1Ym1opBT1QVuDpWfjqqKDakHgqrwsyBXPg",
  "key19": "3cuH9DzWbMBHNa778oTU3MJAdhu4RQpbfHdjV8Cw3PwsxMxB71idHgj9L5XnZ5SUPbXNWWFkbquSTTsv1jA1QJTG",
  "key20": "4ZYuBK8nfDJqmQ7otjx2gP5a41heKDdFdqsJmKXQ8PAS1PDW91ziSwVDdcCQgQgPDBYserJk8pkGaFRrYJ9uKoH2",
  "key21": "3ED5RKfTKoQskWkK6NjCo98e77peFDVEsY74ep2hDTttibxgPjJerVRv9W94yg2wPpiYLgYEUWw1ebuLSDmrpSBh",
  "key22": "29rhwFqYAQku5j2KakwLumVwyGtxYGgUcwpxAUahXuCzkXNH4efT8gpqCTruzjxVK6XZNUdKCPGkpX2WuTWBA2Yq",
  "key23": "4N5rv8cZoUPepbTsTktZzTkm3PvPGLD7g2Xnh8AAi2aGfSfPtqQPhHeS5yk3cRJA2NJrJRh86Ay2ar3Zzo1GV53s",
  "key24": "4oVFqKp2z6khvY2oAFSWesdpypEi4hahVMgeijD1VibP6j6daSTMPbuJSc8Lsor1ZENAgdnFa9a6ATKjWG5zpgWY",
  "key25": "2hvA6e5vzEmuMgj5kCxP942qN5EanHyTpMxuQzY5e7PN75uzAMoUbXPz5dD5RyaidWpwh5uX9JE8MpG88RgFgVwZ",
  "key26": "5wAyYv4JRuFWzajinTCX82wdk5mw2RonCmsW8mqRgycRT11ArPCX6oEQfa4LM9rhQd2JP25wh471L43cJ9dKpTWG",
  "key27": "49g2ubGgSwAQ59DTCyEAHSor3qUjxe1zydXoyPZRyNDYBFMSqKqq8TeBQrraRwG8gcAfnkVDUF25NE8LH1qfp5bg",
  "key28": "36PvYu6MfNZj2QGWdnCpzEMJztbcCSZ3hRYv7WvkJt8uGiCLGHobmGQu1yD6ub8NLDgPvY7CvFZtJiHYnQQEMyxL",
  "key29": "WNgse7Pt6XPb62rsuCPej9onrfQ1L9NfiiYgyjG1tr5TpXRkHgUo2oysaY4eTGDgQrcRm8VPSRWjQfWm3Fy9aw5",
  "key30": "8L2FvdfkKNrPqKuCspiw7dVruzcykDJJHwhVLBeDCLZBte6CrRfivNmt8kcuphYRsvgEpYBNAdvYLPoQymqXzH5",
  "key31": "4Mw8sbeE8884aa2uiU81h5bwji6PAqcgozGfb6GbFQE4pdJ1uqE6Vk5zPTpWqEgm8vwqpAHmJUNvNPe5s24LgALN",
  "key32": "4FecagbvFMhpB5GxktwLRyDsVouMnLC8YibGq8Db9oYhi2S3nNrgRvKR7aYgzMtgqmV3fKiCKjmDfrrfXENxFqvg",
  "key33": "63gYY5N7ktpLcEhgNx5Tp443R6Y5Uy4P395Tq3FGAKe2wXVFr3R6hZtGF8dXuWhcqWhjNZ1PRgtd8ZndXPh3Vuzx",
  "key34": "rjZAk1xtp9YFRuQ9j5JwF69nhK1Bp7R85Hr4WgGLmReihmtwihxfkX5GcMfbRXfRDBX88VwSyWmCi8b148pECus",
  "key35": "3oHbNqL9hnLAdLTgXbEa1bq7y9Htr795qCDXPZ6t5b1mSJ2MvmzC9cciZba8Ma1KdYafTbMcVNyCtACqJd3scTm8",
  "key36": "VfdKAVWwhqsqyfxewxhfHQggVPfuuwWavaFY68p8RWLxtFyUz1u6Qc4YTZc7ZwMP2jDvsavo2Lhx5tN3GWyFcGE"
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
