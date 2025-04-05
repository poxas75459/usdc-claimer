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
    "4sFZQSDegTqmzL6S4GLXLCQdhFEjMx4h6CMZJdzRPBBQkrc63Q1NSrJsex7yCqFPLeD1Y8KF4gznikodcnLqTwXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n5NZaPRRTSHbNhmVYW2htCNK4PJhDm6u8MGMyQK4opUNuQrSUucHddQ1eEgF7p9XSfsz7yitkmHNiRKd6bWk1js",
  "key1": "cVs9YTF81Kx3ebBKkMfHyfYLvsMWNjYsoghaRVHrkUHW3MFzQW1tj94QCG5Uwcp7a3DYtWbvyiAnJYCxfbrnnBJ",
  "key2": "4QKyrwUXFjpE4Ep9eKuHQDXjgBaycSHGfuHqTBXAfs2kYFjZQGPXPkD2mAQT5xsMHMVTbqa9bNHiAxjLFaNizEJD",
  "key3": "5ccW6XDoY9EsYMwhCRETjicbKb7CCtqg5JMRJDcyTMjYdPLzFBBSFKa9CehC7xLFT7RmQrWmtJbmEFsELBcwF63E",
  "key4": "3kFFfRupdKrMmUKhf4and2KYVaQSZTpC3B1NGYyY9WKvvMFhffNdLLAx3zwyxw3CvgTU1JRK1SS2RcZnEQwCEbFz",
  "key5": "7ShXVkWGTxafBj2Wbd4jNGCA5Ynz9EPgMDQeWbXdKYyer49woECPP6BCVqp5tEtMeS3RFfwFoC9JgAUFBbCueKm",
  "key6": "2cZtGzFYv6G1qjAUnKQD3D2ztryMzh3Qvh8LgpqWUC9XA3Bg5FUMHxMMWLDvnFPKjKSVQC4HaTch8LdojV1UuyQQ",
  "key7": "2wCmhSxNKWqfyAGyYikG4HiRzimFUdgcmvRdbSSVdpCwgsZbGxs28u9w2MJZV8yvQTEPx9rMAG1Zpjt6Qvv6ga2S",
  "key8": "3GR4rvEa8xdJL2pCpStoTkKxinTzfyvS3ZbCvV1mMZk1DAQoA1gDGUs6hjMEFXEgiyFhUhPnpiBgnxMNKuVUjSRY",
  "key9": "4VF3r7H9uaMSEv92ua8PGucwANeZhXwz6YmMiVb8N68FHQVCyYzLtfzzxyKtiNtjBXVpEjie8QSEFGRWW8Wmiya6",
  "key10": "5tutcZkof5gDaupBD7DuhEAFpkcoK455AngNduat9EXkmwp2kNP8a2qRh6Kczni1XLQCaZ8PL3BAR4GJFe4qrBk4",
  "key11": "2j1Kr8VmtBxr5jScGtFHJw8PctFBAfuuk6jEQ8Xky4H38pvM9yoqhbdNdthQaLQ3R4oAiQf9FVT7oASBTtaMaCBR",
  "key12": "5RCmy3M35b47D2gpUd7ok4uqjs6zukP9Ms3x5inNo36U3Je9WVv61wPXry3RZStmmnfAQMYmu1uiFaVYkbRveZ8i",
  "key13": "6dp3tavcw8Qf4kERAEAnU4qxN3V7LBcV6TyhAaijaDXiypuXDRLLEoLVyDno9nSjq6Yb85SQaA167SjSiTURLgB",
  "key14": "3pqE4bC9xGHFdc21RoruxRp8t4krdFbZZ1kteR12pw5c2TQwY9kNBzBnA7KRN1ecLrMTafLwYZBGfNQmon8DjQnp",
  "key15": "2PmT25KqZ7pPQyh4sGTHEnrDbEQrw5ZusJJ3yJveTcyYBVkm6B12TbhZgaHUAdD6MFEmu9FpiWykYNnmBpDXwfXw",
  "key16": "nvSbMTVdf6hXc6rNfwwp4u3TnueynjCSZjb5JDVphy1Nus1fkLT54zWo5PMUaCyB38CfE1hvFF1YGHG7BULosaq",
  "key17": "3pq46vxKpWkP5zgcL3HfKJXY3mU91bmK57rN9cGJvdW14zNpX8oQtNrLdg7Ky6iV3FgUp8dkRiDDqM9N8JesJ1Da",
  "key18": "4VA46ZW9965ddogijygSXu5mdAeBwBfNGoFRyVusS574Hz2zzaJxeevd9HsSoaGrSDifgVxi3zbRGbccmYvhjW9q",
  "key19": "5ptzvtWXeYsh6cgRQ6zwy7WhZan9mvuJrzHgAX7ipzM77DczHDDNjrBpTYYv7DDxey4gPUocC2P8bU8fHKfcm4au",
  "key20": "2VvEaGFvtFqB2MRhynTV2nmve5psLRRniRcZzd7bkyWUTKGJ5DQmqKPnE8153KpYLexMzyBFS5UaeF3avN4WQdrC",
  "key21": "3z6sABZhtuD7zRiRs3yKhYSBzSB3mPWvUVEGrzJA8kM77gxcHs5VVyu7cEF4xPcSkC1ENwAmj8SQD8M6qDMNjkJg",
  "key22": "9qqrmjNCyaFw7ivNzevSLtTy1omSdANjSH9qHg8GkdHbq1Yjc8bsXo4mUUkEVfe5yKReWUwEt2eACYJZsropW6e",
  "key23": "36UBGYsthQsnBhHM8Akc5y7wJrxMaLBtq5T7jZPnMLnCiu7dZ4QydR9wXWoGum9jteLX2A9GvUrW9GkayvjUTqXP",
  "key24": "5UDTydcpVbQv7K5RN1kHzyWiWC6PDT2ZSjKexQ4tQXK1iV1ZBac3SVb1r26gkscB5ARiRsEznBNpJH13NM9frF5U",
  "key25": "3HpUGzWWKepNVCe3fsJMi26J1Yo2saP7fDnwydryHUSzCyH4hYEbjEtKJZY3LWzKTaMHn6kKMomR1nrCYrRRrPNZ",
  "key26": "5LzrUGhFBNPzVxfyQCcrFwo5RfwetN1NvWrqeGViXBXEQEgPvN69LwXbquL5z6tdx23tFqts8aBwdJUd5msdQH3M",
  "key27": "5HCtepjL3rSByRwRERgbxN4gFyuq7XrW2JE3GbhP3MmMcASKmVNTJD7Z74k5tg4b4Hw5Eqm7gviTjphytKdRiPB6",
  "key28": "wwYyhct9cyqRfkPRyTDLxiutnu9kkbWNLvLixzoTaP82kaeZwGJghN3DrczTKFeeG6zHRaqHWb7E3gisGoEo6D3",
  "key29": "4xWGutw8qK4ETCH5DZmJ8drCUqhXCgGUwvu2nPWc5j2DgwZYmyGvS1B8KdLdpy9hYR8TGQDG2XuJSKAYdyuhiBq2",
  "key30": "4Q5jwEdK1z8muSGp6WiwYzGKjSvaC87CshwRRvAqnoqeMpJSxj8iEKMrbV8LRyGYsQvXvhn7KfJBizHVwj8FEfSs",
  "key31": "3mBN6V9HUddXs8HoHMwC5aMJzDGQ1yR6v85UHs5syWCr5phP2MaSrRJgb5Hhrn7SxM4dEWBhS47i3634iiTuoV13",
  "key32": "4UYutR8MU5WJvJGwog2QEonn3cQP2otS3aRyXGNS1GuoWTbwKjxFWeCvAkV94TFJMtZQ2FUu96CYkxMtKaZ21wLB"
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
