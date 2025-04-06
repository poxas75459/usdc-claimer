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
    "2ntZaCFru58XFsJkj4ST7oZNfJaSBAQHbF4LV5KKrfV8ywG6ktQw6HVNB2Eaj1th7hhV9deRYxpvApePrP6xhahS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WW32aENg2P32vyCxuY6DWzFs8JUQUgPHU3aaHdiUNRMjr3uzKwJn5pq8ptmYH3kru1gHhMAwqSs1u8mJhb351Cf",
  "key1": "32dVCaa4ijmEwpG6fCUd4Pcje9stMeTzMaueCnciWYLrf1ywfWxuhNoc62qRS6FLKqKX4rHiFn2myn61PyMVRTkB",
  "key2": "5vP5EkJPMSY14GKzzF3awtzLXi2q3t8tYnQ9KDkPdQ56vnJz1n9tDDLT2yeRFsfwExs7dW9b2uv1Xmaqw72JvUdN",
  "key3": "2m6doJBFuzvb2qXmXfWDEmGmFXvDEJJ5i1Y6AhiunHHuy5xa59Fs7fdLBEKTit9e9dne4NFRwzu2KX2gH6RXVRKJ",
  "key4": "5ysHroACLJXAFww51kDEK1E5D1BCvsiYskYN9EUZTkHHRQ3r9PGX5QY7CbGe1PLgLdTMuViqUkomms7sJoehSYUF",
  "key5": "5PjmzCBozxHWSQFrTHsDzuxKBP2um5vLWMahDKnhBoAwa3RSHPaDckZGx31jy4cee5Fk2fhRz59unpBnnyX3jZkJ",
  "key6": "5j7VsBMydeqi4jBy1jFC8ZZxfEsyCGR18DLY5SHMG8Wf8c93EF1VyBVUN8pdkr1NDfeihAiDNzXvDEUPeu74UD3u",
  "key7": "5aGbpoP19YchCASf6JHk8ozKcAH4VaMUtNtka8FrRKymuNsBHX447JmVk1zWvoBEkoerDZj96irWaEW8sPq8JRhS",
  "key8": "3VdWJfvyCcBTzWugyq3YZuYVKCfvDpNNsseY7FCLg37eLNKTrbYNs8UqK8ekh5pyiMyCn3uW3wbhgNENB9k2phyh",
  "key9": "4Xkkr1zK2wnJN1cXpcfPft9C4GhbYNZ9QAief7Zyq41UgvcpeZXdZMS4posQr8P2sFZ2iEZW5rEtFGWDF63fGcSn",
  "key10": "4ZUtmzhwf1QM3dqd78ZwCwtw6LeUKhaQzCZgvMLSqLwDk5zHt7FbJpbjvdaJdTmnVrosYGstavHrQf8UDpGVbmxu",
  "key11": "5rqsj3fTRdEdJRFdQoUMnukEhDEtUgBmChnxPd9GQNJz8BCFFKQQX92v8H6rB762ysB3k6auffx6kPvpoL3R4YmT",
  "key12": "jvEqdgnTirhh2dmhcUTnaiJw9mzFXxPrJggGPTN3RWBW1gfz4yncPHaxcpxBRsvrsRnG7NY1htqTEnoDUuw9VjR",
  "key13": "22EZtistNTcpVTQoF67qeWCRc8bG4uBQGMr9BpzCiacixni7QWNtimdL6Tf2eG5oFa2H5qvUBUAWyvkQ2BxHTmo8",
  "key14": "3MSvTw1RSgA2xgtHT32bu6HXAtS6KhnCoaCn66siL7FDRLrB2GWXMS5woHofJVLNx7WEjt3NgoJig5PrjrBxMvBX",
  "key15": "4umqpRhAaPJyHvcpYzYuip1ZvWsrspwUvKTMCXVjm2EEsgFwmbbJyjW2BWM2QyB7zLMufKnfPy4NNetN1zvZEg45",
  "key16": "JtptTd4SfDHWgvwwSMVUnd9dMrBUAB4MgYMt8GKGXwufpEmAcP36AWMmeRH4dbW7YrFDsgCnYFR2McuL7ec5KC9",
  "key17": "29dWeMqknv7RDmRXtwUn4iGFwqckmMguX5GNsnVyfYyDNf9dazbL8jNckxk5Wa4oQas5oCTG7ZGrnNLXQ8MXmorh",
  "key18": "3qtw3WLvTb7DBRp4WoZe9NBPvkuL4TKWdGt3YSpTNfShiWngP4vCGJ8URFKP7MocUZCPArcqTBDua2A5gYW9dESc",
  "key19": "nNG66vfrr33ePqvg92qr1XAiCcfrhpMqEuxT5sd23jyE4J3utG9JjNAYLPtKC1xoCFShV6f4gQaLUidemuZq7jp",
  "key20": "k5w7PgDcdcy6iQggBa5uCFu6oaCJskK1WJvPoRFEdbmDg6apeB62GxN7V6ky5jzhsv1U4eghyw7kWNgBLpWkV4t",
  "key21": "2QNHmEgQmP4MgkCJTVGDLZEw6z9rqkQ5VQq13CfvCDzV1pYEwntMRspiJwiQDjzMtZ3sLXU951kYjRBUYtCxwhAL",
  "key22": "2mEJo1B9jEG6M244KsXiPhZ6fmv7r242AwfhN8zkrjXiMVrFnLusQKKJ4vXFoC3R7UNaBrPVi28ivFDZJcmX5Vtn",
  "key23": "4kSzkcBdtRwESfFpnocpESwqjeyt6VRbvQenSoWHAj23yGFDgKyhtaB8qg9e81xCyJND7eENjVGFJgQjrnYbRaY1",
  "key24": "5v64Eb1ow8wdix26V8rBBc49kzmWMxkQ9d5MbqwobY3N3cjKDiksYbXujHaKa97TRQ4TRPJmPHQp4cK5J6nxNHGM",
  "key25": "2H6yT41fGshfZgkfYGJbMdvpjBPH3pcEsFc62ojsKGTZPCExrj4DdMB7fJ8u2rhovJJ3Hr4F3Pm1ctUvupYkCZte",
  "key26": "2eCqeopsWzswYhu8PKMW2DPjzKiPwmvTV8vLQYYRVtmWPMST7Gkvx9fm4EaQd6aMikfdqkTDbzhCxvTyi56D1oGA",
  "key27": "4FewPMeCapcwt8xee8xALGE8kZvzoCD6vcz6cKDCydva9RhRUQ2zuLNj64Tc7Mb148xtF9aM29GPPtekDVgtdsdH",
  "key28": "5i8Yoqd7GGYcaGjU12HfjtAe7KLodwPQmiRiq4S5sa3zidCavbqcvbKDft7K2d4Uq1cVjnaSh8cnV3dLF58ZUjQ3",
  "key29": "4HsvReCGUan69E1dmJrMFVHN6iJWWsxwqxQDfHqNutZNaH3EfUJ6fijcxMwW3EZeA6Bw6r9C7hG9jRmEhjqZqkpC",
  "key30": "3myv3cAzta5HgH9Zyw8DN2FBUSVSJwFuB7am1yvUY9Q3fCTyGkvmmJ1cfwZNzm4SHR9cqY6tCtY9mMAqGguCZ4sz",
  "key31": "3XN8zRTWGC89Feze72zpQUVEBQBhEHjwuyMoYArKdJHdo3LVZ7mRWx5kU7pGSBqF9kLM2mjbREVxvTCydanZsWmv",
  "key32": "2dyVqk3Y5NZgqWWFGDZTsHQF1fYTC28qWERGnC8nUG7aqqtHMNTbXmR5ySXmTvSGcmhRo83gNJ7aXTDGuH58qtRF",
  "key33": "5VftudbS5xwKcZ6m4Pr3LwDT8sRo6py4VQ3rU5oAtxpqGyCcMSFMCVWTp1UTm2oTa79Ps8z6SA2L4dcmr6XCRTLE",
  "key34": "5Rz3Pga2YUKcDDTjFen2JngGnApKJjPxnLQLkg5kvtkcZhrCMboz7b4huGjBJtMK6ifMSQAqVp5P1xKSzRTuDouz",
  "key35": "4nTEVKHwAEkMArDKvyesn4ERMZNvaBRvUt4Svdja4wranu3XheyBRXyXmtvbBiVu4Vgm7ZDjsAYDU6aY3T6LeBBN",
  "key36": "G8ar4gWPb4YdFhRiBvfiPPzRQRVVWrSYoUXTXVwFhCrtz5CTPzwAKkBpQiGUkwztF1sNvxLLFwfm4sEvBVJT3jW",
  "key37": "2E4DjdC4bo17PEbr7R3DurqFgGnpACnsquhpZfTRdZ8XFEGkyCw5XdEg6okpEn3yyCTpgsbRGFDmVRqMaSJvKTVc",
  "key38": "4HEHTLBdDGBM24UHms3RwZdwoiYTox2WoE1ZKBa8PDyDC87fZGnrSHGW7sy27EW3ofNoJ4SJzqNa1oLCPUqVwqDE",
  "key39": "67gbpkMYTapnYQhJxLREaheeEx5pZjLWpHKFknEN4gRwpYLLwLXmhFZG2yTNqRdur3qJbXpGDk4Q9DZsAAWrnK58",
  "key40": "66EvcvZnXyxrYfqcbtzjtcXHtsSigaZZ5JaYY3VBXCWY3T5sqhf5gmUik747PU7VfXTAhkS27pgnNGHbzbzsdM1U",
  "key41": "3RAXyEZhRv9mcmUBRcKt7fBXdNjN3w3XhiDj5EYBZRrnfZANXQifqGGcWhhe3BCW3kBhthjRR6zYAtaoowAWxMjX",
  "key42": "2kq1UX34cuxaCeTbbMu4bmm7A32CReFhrCPsfnCvXW7sfTVPsgbqALX3gLqCuLUEvZaiZYeatvcDaCWpHmNr5Xvs",
  "key43": "2VC4WBzkDhV9KvyH4uGEWvHuGDx4PeKVY9tYhM1ugy3ZM6ZSMUPLCzMmZXDzHgLaGYEX2628Rpp6PNEaZeApd5Ew",
  "key44": "3qrzvZoyhr5AWzQyZZF7c7FtjP9iAotspNK6Twt4KwBao49bZfvfaih2nZSrwBUJhdNWUwyvuRnKZNyR2dD98bWJ",
  "key45": "2fbmjhWk6TE6y9BWFJfwYpuzpMqzrczCjd1v5ij5YGgcKsDqCj6den96WTqJ475noYowGvMFz5UoRxXUDtmtevTq",
  "key46": "5t8ywC8qRdUBv6fSCdbNWuPfbNVJuqy8MUYzYfAdUXaves5MaqYcXAiDGjLzEG3tyuXca35LjuUA2LHPujveM4x5",
  "key47": "4RkCVoZWqTYieE9yFFNbT8kmh1QeuQQcZgNPk6n8nDQtEhUDJt1bFhVvWYFsj369c7RTeJqt7tHJrU9nqHaAxFu6",
  "key48": "JfpzxB9b6m4pHNv3YtW1onJCPVbPKmQDP5RQ6kTrxTJoMT99MB51PvxCDnvYJCmM6iWqr3FNhMNSBa8kqZ1JPcG"
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
