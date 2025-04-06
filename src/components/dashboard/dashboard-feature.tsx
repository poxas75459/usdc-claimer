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
    "3wA2nzwc1n56DP2ZjmvHtJhm2v54S4QkZVRmjJSWSk9HC3dtvM9ikyXKQfGsDou7VHzGqNhystArRxJ7adgjEfMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eL8o45YFgEdqGSFyBzzCo4F6HkHuVVKvUAMPsgrjDroHVpajDCCkGYbNaDjhjMBYCk2unoyfNESiYSYUkW93QjC",
  "key1": "2fhkk1Nzeer4d7n7SKkxFajhZWZoNyGjWFfCeoVmCxSBZKxkyPSyxZvCNYajiVw2CqGHw6F3rCpN3ZVLnHcDMKyj",
  "key2": "4YkTevYoWtAEypv2dZsaVQ1vZXEy7BdhUu2YJL5DEtuQkDJaDzRhUhJx1DomAdsDbEs1zFHHKjTvbyfARX5HbJwt",
  "key3": "3xkwNwXrCi61VXSySkTAp5Lhw6m6RugiPbq5unhAtkeiXLoPc7ShjEAA6qhhwJCMe1kVtJ9SZEMLpcq7AR8pMEya",
  "key4": "4pk4A3yiAuBPThm6jYSbZAULZJXAk9mBTnk5prJT5jAf1AJmUrZ1787MvFX2z4pUd6vBK6Qz2wSg3brZLwobKjrU",
  "key5": "2nqhu9MmGHopzNtRMUdXdiFuzQJyvzBaws6wofhdyJUHVPtp29CCV1rvUf8KwYQzKHA2Mg5Q5Zv768kiWsKXW51S",
  "key6": "4cyoroUeGDScoPkhpRR5um9DjtcnNm5G7rnGLPZ8FUNVPC78y2NiCZwnbgetrrBbDYoXNH4jskam4KNH6Ho6xdUt",
  "key7": "wjxqTnzGGRzyAHhBedMrgdTKk2zVBNwAtYmJuPVneamZMVmW5qQMKpMpcSeMdR4uu3D4foBXiWLVitDJFrgW733",
  "key8": "4cUwNQ1ayj9ewU93zLZPsZ4iiNJQeBEGZUDHzwWseMFEoMBKp2UnoxLXwzsj3qdXHcTqv2Qmx76CxnHk2EqRJF5J",
  "key9": "3TPtxRrbexKmRVmUTFtRKVm9LpyRB64XqRiH9cBWew48jQ7RVKh7r8xaLWPimCv5L2wHTbsP1SBEgtexZ52C92aZ",
  "key10": "fpXchnbn8VZ9Zz4waFWUrKNBNk2omCjT59vzJ7kGW5K1PZVcZ7stS4vPWpHamaZKkaqiKVCLSDcLRJZV3CwdTHH",
  "key11": "4PkHoAPCWeBDurMuYb6u4Pki7yGKyaVuPn6q6CZtpeqx7C4QC4zjKnv4oT5Sno5Ntz2Zs1pJG2izmCzT4sW715AP",
  "key12": "5G9vhoKoQqBLpZW64zExJgwcTVjnnJdJEzGXiCQBxvznDNwWdhUJmoW6Q8YNo9f8ENZARkoi6XbPhMUPJwSDnKCA",
  "key13": "4vBztsyHZYFVLqaAH5nPkdfJGR8hEN2663TLuSk7knUTfDGadpwAKY78CFtz4R7CYKLja3e4Nov8BjgzZkMPTMN7",
  "key14": "SMqV1bZubg7rzQk72zaAH4vd47fRXJPmNksjXDmDF4D3imJTvNsv6VyNJc4x7M9Zpjg5duiE4HUaGkP5VLCDzwC",
  "key15": "3BmsPcQgbruUPnhF7hvWcJ8MjjdkyusFCypyCrkPrW7rVchyoJLyqLp1f7pUPgKUB98jp4bzuWR5KhkErn5hiBa5",
  "key16": "3szqhs2bjgj6DD6kYcHT6DrDQWUsnZRRrMEmSGpPxDy48C1cWPC2hThhMrh9yNQ9F8UBin53JneKtpJtYqMmAKbr",
  "key17": "3HTCXKaH98d3DCjwvd3GNteiqAL6Y4ZFW61TDPB9692Q69tLUPp1W5kRiAw7kMMkfnBHKoBkgLGy9F4L6G4WWfPm",
  "key18": "57iKHxBdvmumYefGDETg4u93npcctARkzG8GjxhbsPRvK6yn9t3yzSotj2uFo8CqA7FUAXh9iQKmKJDwrLyNSEUy",
  "key19": "59x4Kzq9K1Jxg7yS3fJ7GWpg7VBmgGLPny2gQoUBs63yPU5zH93TqYWQqg4Tg1FpCgyt6gr7H1cQsUtBijvFXZYz",
  "key20": "2xdjhYx6qpUscEicLQeLFy1DfE3atGhec85RJGUcwDrvEgJUWi6tamZHrwAnDH6TnPyY4ZjCbgcReFxFPtgTadFK",
  "key21": "SLrd8qQMPsYavvkUqWehFdwSFK3x2Vr2X3kd76LJ3dDhYE2AsFmD3MUmG7rywDXwh3YxhM1eAyoNoFyJztX9s8L",
  "key22": "n3oeVRkTPMSXfv14aASAJdXrByo3qJRDxQet2QMF989xTTpcfPTvc1cQfQe7xLURvcfs7XZsGJjtyusTF3SWdFJ",
  "key23": "5xmoMqsn9CvVZXd1DqyeZjNsLo5LvqrGyq4ptmRFdQZEX82U2saoYhtQnHv1bDxSGC4Yfe24fyTwfGprJmaJ5m2o",
  "key24": "2ZpSfVfkFAVs2JJ5orX1NLPdx6Nb6ooJ49mqyuLDEjswDnxMA8hDPDbQUxR6oYFKmCTxuYi3NmeLh62a8KYM4RRX",
  "key25": "2ptknyyc6LRYQVpi7SzJj3c7qc5nTSDsmFhNEY9fCCLKwiiw4PjJg2jRKErjPTVLNXa95XNyVKnrSNav3uDZhuK8",
  "key26": "2UF5FccfZqs2bMxMnhv2TmbNrj1NevxYrHRTC71icmKmrPs9HiF5FLzcaGSMb2MPoQqW5juZ1Ny5uqZo6ktD7XJe",
  "key27": "2AeWqz2LzpiLnBaQjYC1STtfF7ba3wYHekgCTgHHWsdP23gag3stX9KkQLVYRvseEHWo8bwn2DUNaFaYVQjMwgvC",
  "key28": "21eWezz1Rhnbexw2ij8ZMc1qDKhrTQro4KZgFxnbeDhqx9zniD86Fn99BLveMvpTPeHw1y9RMnuz4t9xJJuU8pRm",
  "key29": "42HaaUSDhzLJrKAQ312weuqHnkDunszQYx8b9zrnpZMQ6hHu2iQM33Q7jrsypmfbx3PSncbcdYwXsyLcU3SuMHvd",
  "key30": "QdX6nuJzttoaRG7gd7ZfMRDJeSSmmUwGqw3SciGUXXJNzndpSFUttJeGLSbFLzcxXxQerhAy8yE2rNetnzzLNwa",
  "key31": "2xd6HHktP1DeTvLZ2zDhURZvKb8cqY1PnjyTQwN5gyyWrDjaytUxuuGQwzUCSPK79dCkPyq4XeLfFLdtGQbbcYD7",
  "key32": "4SkyN7upSoScvnoVVMFXbfWHnSosZxUMTKoans3Cb9dAVjLuuxxpDv8TpUABVkPZ977NuYZ8v3PMScAtumfZF6Gv",
  "key33": "677Uir85piLy2a2VKM1NPpSd78a8hWR7qsd2yTbFZ5SwshYJfdvwUxLKk6GxgXH3SXNU6mpLr27vRuTn229rMZYd",
  "key34": "39QwJGdxEecNQdkRPCr5aaHMXmDn356EzjZZFnpCP4ZfA48P4q78JMFBK1PSzeTRiwRnbGE25rYrYaXmFg7YueEn",
  "key35": "37JBFeUyUws4Up4294VD3YqNXtryNkyBrz2tMMv6woxfgABmkZcbqz3eMqRpX6avCeeS5Ds3FvZSbKZMHEis8Xjn",
  "key36": "5E3Csvpx9ip58p8h2nhavnkx2Wh1YLRNv7rTu5s61ff5UJvETRUdMat2gWnrrt2NArM7bZMyckxRWZTyDDb47q1D",
  "key37": "4LcdNZMsBmowM4p7dpkkaXRa3JDDmtMnB338QeMKQ7uUCDkw8yrUUvRkwuZjTTzp1YwKeUUb7Tx7j7K1Hvn3uK5X",
  "key38": "29qceCz2ZWPkEnwDsguNAsEQcfZUNBe8MnoHE1tjmKhqFe9fdokE968rAkCsAahTQLBhwhY7wuegr2BY1MdNZFiB"
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
