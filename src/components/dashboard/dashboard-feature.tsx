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
    "3k27t1n7Yf27qr9jkxkFC4GVUhUWnjCEvz6o353hxcwPnN3ckcJyq36qAKpAVRBY28cDLaj4TmZpNFyYrXKB1sr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FBcDButzVsf6DPaMnxCsxuj3kYTgswZujexk7X2gkfxDQPSXNphB2DQXPf1DirwVJDpezLvMbXMLqqKMvTLgczo",
  "key1": "3cpGxpjRcsJe2uvAyaxY5QbtsQhEj6STxyDxoeKjh5j8QXWAucwbdRDbRRLo3hhU2g1xXdAVc2mV6v3yBs9DsTCD",
  "key2": "21Z8UxrE5sd1jq1y2PLd8Xx3oA1b7SXqUNzSTdWuhUSGtgKg5Ne4XkyizsgyEbsJ6LVLzjJrnHg9crivMR2GgWat",
  "key3": "3UQvi7LUy4CYNcmBmAaK8LjtyDL77JvcoBA4QPR9u21mNGf36dRQdLdyHTB6qf7f17egGK7fUPiEURhwGGTNwUvB",
  "key4": "3FUyJNHXMKJfh5g7MawMhxHMyDrfT9vuyhexwDUE96ys5eEAspSW1eu6Pjk5nX53ou6DE1ayDDsQ3aMxHCwsbabP",
  "key5": "BSpsi1xdt3gp5gFofVRwiArtqaKFy63NEfcXG7nmT6EJrxuNAk24swDsodzL8JJSUR8787bKF9RDpqJqJdGvCNY",
  "key6": "3qH4nRuxMBJEYrTg9i85A2DKgngyaGAYQKTJcbjbAnVJSYjCYVc684aEF2pRK9SzCwuqkgqiqcLPYQYHzQ6vmJJ2",
  "key7": "2fBj5trxMpuvm6Gsc88h4Za63GLtjzPUkNRp1naPZ1SLexEDXDQTrtJL6dhYYt4BEgZDNndcsccS6U57idjufiZ8",
  "key8": "3y1Bj3HfsApuouL7yyZyWXB4Gs5uoWurW2mkKcBZ2NfdhSYTTfAksw2smyTonmGvoPexD7S1qib1szY8wH55kAnt",
  "key9": "3ZYyxLfrgUfpqRRHz6oXwbqye5dAQcW3MUKtTc5eP1QFB2xP6SRaufSW1GEXuzt8zQGZxz41eaY748U4RVscbEnn",
  "key10": "3cf2TDUD9pxDAy6ojKUuB7AcovTWkzozgStqg2h4jqiKdURvJkzYcF1jpHAQHeEqx4BrZyxtuANczZUTWTthDC9K",
  "key11": "5kXzfkDExKt4VXWZXbYcHJrSxgUBQDCSABB6pFozgPXhpg9fRXVVc4Q5Rrg4WLxSY8MjHmz9gkWxHFmDAJeMRF26",
  "key12": "GNLjyJPAuhGc7qViuwet4JeXU93QgV8dG4tX4aRrSgJMwEM6nU2DKAVFGVuGGD8WyRpmzosUYNyk2NeBHdWyEKJ",
  "key13": "2734zA3izSJ22BVppzvJ2xYiipUce7MpqByHmb2AQuow6WeQHYC9iXgxi4hL7gfkgdCdhbtBXoPuBoYRfkiUCGQm",
  "key14": "4jVX1ZahCEe5ade7f8BwbC1r2pdywQu4dL6Nhgp8GHBtkMQgcpJ2h5fp7rfsb8s6jtUJGYhBZugsk8ocmYeYPFCU",
  "key15": "2jjuEoUgfi8iZKJUksa9cmDPcSUppGS9fNuAktp4AZ6Sx8feb5H2dhhk6otjFpvzEhM6G5jpcRhEUAvvaUy985uV",
  "key16": "ZLjvXX9AVXuEmHmAskCrFcbVNQvNgK7n6gKLon6UWPnmpw7ujXKJvhtFpkXjhJh6SPi6zXTb9qyd4dxqHdPhfxQ",
  "key17": "4J8JTESbPZzhTWHYGhA1yMYc1jLQpmiq7Cfn4HRp2Rrx2tKnzH5tFC6ELeV7CDHaXJKboc8kgkoNjnQawfUQimp5",
  "key18": "4TX4wHjCjtVuRSjg8vjQMDGxs9xdZsrYq6xU8sF9FitWDpbNP1Go5XV187pQn9hVoUg69pskQ9JkThrRMTxJMsZe",
  "key19": "3JuzjkdwnxTsrkZ2cfozombtaUSaKEnisfXNwMkGFLXfdSy5EMpztqRjhxqavNt6y6gjXRceXqxrCeeinAfSKtcS",
  "key20": "4v2QTFBUsgW3mRrHLxbvbZN2ePyZkoSJY3ss1eERtL3aff9oCA12E27KF5im6C2vgWHZPG5TiVHFApPyMFkLK89s",
  "key21": "7B9ggEf1itpmEeEgUvaSg563R5FSEy3jJc1fXpU6WJ54yd8LnmuKkf5Wbi5r3Qieev7QJMiDEQKk1FUjGKkqXaw",
  "key22": "3mS6nEyhzhL9dcTLHYLujcwnFH9N3f5UmXsKMoBZE8sUhu9WinBwseSTSgDLdLxR3ZNKCqhgcwTgSQMT6x7njELH",
  "key23": "4UW9sSsM77BmEnMUvqxLYr9XJkYehTC4H8L34xSBgB9uKoMcTWktBC5gXZ9oXKdhy34Fs9TPPkFmURBjQP8suPUh",
  "key24": "2RWM2TnivroUCXDCEnYBVzFk8wHJCctfxLs5YcBVDFpnPxy2Lc7qwuECHeuFDAZrDGNmmZj171wYCPbDAEqJVmzX",
  "key25": "3wZdsGTGnjgwR4wLAMXAAdQDJAGg32yw5QDDYYBB7ipznBvVRn99QeU9a4GR1sruideiGx8n2mnR3GibkDdbchvd",
  "key26": "32AH2cx7JyRYgDpDrv5GE9WxnZcqUhcBNjMWgPj5MuGQa7GvgBGwDJjQ3VUsESsPh8zLKsms3xEzpA7XkQnhxUTp",
  "key27": "3L2d6zR8nfZCZzMJ76QEDoQffojegL8R6yLLz5TXE1u7SjPnD1NZvK5noSQ1YF1Na3mHuz3bPMmPWTZGZjS3UC63",
  "key28": "fo9jXsPyHccPJoVaQNjd5LNXsEhYYWDErbk9egNu9639QEPiMpwhW1BPNVLnSes1MGdXuYDc22aHFrmFf3mwQRc",
  "key29": "2fhGsUEkMT9DtV4APvuqCTvTvZAhjjREREnKCURh5GHrUSK96tazQSkFwDo995igiydddbi95zYB6jNv9j11NKwn",
  "key30": "xxBPpyMRRWLWMp5zeaXuDrwFdScYELZR3bjfam43TnP1RFNnX7Fc3o3NKJUQGsrLxgrVZzsBYaDPjhbzZPXCH2M",
  "key31": "4bcpgPtCWNwb85tpNegmNUPzBP2fCv3awSjiLwunba1JSctggkzmZS3fFZ1JVQ67soUF2NBTAZDTRHjRNPY79D61",
  "key32": "5NFMzoT2bmFtuSNYZEoLuNFyThpTR9bNGFxaJDgqAVvJXLTzoo1xWTBwmKDTMywSjotCku2nVNLdNGpWaqZZcvLW",
  "key33": "bYCUnyW7uj34kzTaZYP3JmEHFsJg4TdCNMYodyge1ffCK1V1zxGR3x6SM1zoyhGcNMSGiCrbQjGvxJgE6QdRNqu",
  "key34": "567dNNkKhsKruKJyxogaoCVA6VinPzTjeLU9KtyrfV8fQAwo8ys1FAE5w86bNBXUCvvjjtDPgEs3XN56u2bpYSsX",
  "key35": "2QrWvS7GGYMCtpay8UrMmGehbcRozYAKepixhXjvdRFSuHFekM6Av68eGxhFAuGqETDwNRC6yLdBigV69HjY29s",
  "key36": "sEwSwK3WzxK3CVSJb6LVhwSaMQoqvRd8CU8cANm9eetDpuEY7Y4mukbAyfaT2Wkn2wV4DqcFiXWTwajjha8RqmP",
  "key37": "22G72XTaHmAfX8wq3KvY14fAwjN4iuEXmotcGHxQutaQt6D9EapZBVccEvYbThbcxNSUL2z4ZSf1iXeQ1ZUx2249",
  "key38": "4jJmDV3cLcCcTfFbuXr4A83ERUNrVYnXNy35asJnZRKyRKEZmhinDWQUHiCPmzKtUgeQfTSVdoaZKSNhHWGEgz9b",
  "key39": "51JBhTWqyyuikUCxdSqQmhxZG3ybWHMG3eCvAFotyezM9JZv8jHm8JFNkecvydMyYycizLueDD4Unw1m1x3HgPmV",
  "key40": "iasjcy7zm17QMwttSmpf4xjoS9nLRGb71afiTZVrJrdtZZe3qgphdw5Yrcdaq4rq1CNLRDSeA6t6YFLa6j5NELK",
  "key41": "4UjW6F5yEjzSJHKJ5MCGDSRUKvh2qJGMuAxX37DYu686YAqbN7A2ENRWFE52s99yRknMbXTXyMx6VC99ZZ9kwXub",
  "key42": "4zJMRhaksKBVbg6DEdnyWJ73eswz9RHkcFRdMvAebihzJdYJHGJhS3aacqxPMwyzWgXxAhqR7AvkXNwc9dfK21qC",
  "key43": "5JBeZFDcWHLjsRjjhJiv26yCWqUEkjMYSKAm9mjpdgwFiBD8gzCDX3mi2CQtdFwDHSuToWPnZktWymoZvEHkAWQT",
  "key44": "xmQsuDxNJ1Jo5dudeGWpjBbkTTBkXN1tBd3wmVPdyqPVgyc1LuVZDG4VBLnXiNr4iiPyn2d32oQpCkL5bqxH8Ue"
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
