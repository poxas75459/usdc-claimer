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
    "57wMhtPLYSNxjVtWov6QG9qfJfBJ3SXZsAt1m1N7ginWoUK3fphkv6GAfWERQi54KcL4BwicmvMEQfoUXDa8h2Ca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57RRAzPuVseQKnDUZHBfWoDuNsqNgd1iB9j4421onDRbEU4hJ9XSQXkx7GnQrMf2vVTEtsvLrgG2KdMB2eDHrE4m",
  "key1": "4RSqM1yDfB36kK6WnN9sf8dcZSDBAg3QYe6hgKZoeP31pUYvburH384PJXfdso1FD7nUkMpo1fTZYePKbCUhQd6m",
  "key2": "5rACSib4wAEmJUg89R6gfG1FiSiSzsiyuNTMiQFPwi2EarPhn4SGD2jJE8PWUzEUKBqRX4MuQVKXtx8ajZAKmdYB",
  "key3": "wC9LeRDXjnbVvky49ECMuFjCNEHMZ9KrKs1N4WsefEzLHYgKxnSUWZxAyg54FCmDcxjtg1TazG9ghqE8HysvxFM",
  "key4": "5CG125QWZiQ7QJzgy17ZFW2mTYggNER82tUF4DxPp1owQgexZZUcpGV3i2JBwuwj2dX3Z7M5Sb3WWiKf6XNKJtfC",
  "key5": "4KMjrBsf2PVqMGB2XtH1QeYaHue2V3y1qDv4P86KXVxMdRuM1U8oDbN4kBm7rzrm8Mn1fQh3qbQzEJ9QsADrtMab",
  "key6": "iUryw6n6Ch62eZVEtfPUXDPAdmccPLnSE1kCZiS7Nx69kK1J1CXoomkqeiofvm4v1ctMBjxWvEufxZWu4iwMdxJ",
  "key7": "s79ktzXi9Y1L1g3nx2358beYxccYGFDozfmSgZ1CgJMAtdyVdGHKWoXY2ZPyNvCKumES25BCy9iDY12xM5ncGAJ",
  "key8": "5LwUTQmjNYArr8HjV4HjTeJZqqBwNzzK3o9Bc4BU7nP4uwTjkXcBG67vezpsgsobSFjMKcYPJsTcrzgtDNmbxYKN",
  "key9": "4jUWWvXoEarvwxAKrUAS85D9Y99hnNL3GQT4JwSpuq8wokUBswPuqGC4nXaNbkojeu6pT3F1NcweYMVP5fFCWS68",
  "key10": "5CeJ2AfJaCeYXZit9UvZZTRnPfJpJ34AnU7XZNBLAW78cGAhLWLnYt5oKKixMqmsnH5tMRMAwnfpB8bMxofFYVCK",
  "key11": "2g99tqW7vacSTxprT8VN5FSkfebXiTsp3hrWDt5SKwyDQVbQUfTtcbH26KXUUzruW1xPtoekNyY1XXWqN7wehszY",
  "key12": "5rdE9verbWydFYv5XnYGguY6SMaA6uBFrCtAkdGwWfC3GLYdYJhpJZ3vwUwNnwnqtewyzUMNi3kDv8hYeniQb8Xb",
  "key13": "4Ewr1NXyqAxwRJqHZXeZbtNHtnRjLCiGcm8S4u8GmXKMQoVYwLPdRv6RiAXdUBsvE6CJtkYHUzz1tSnGSeQcaVuD",
  "key14": "38cJU6G7vHY9MppstbgEsGBYPNVzgFkVjmsz46xC892ZAz1nA3Fte8k6TkP2EEiLc7z1qVQREPrmjGxMRX4jJAJv",
  "key15": "62bmtJpu7wig5DpoM81DgNP73whWV3HwnuefqBCv6iXdUi529higBuevtLMnnYEJXCiv8hLHteqQYWSgPFAXtpCC",
  "key16": "3uzCuPrPJUNMsQhyKrd1T1YBfufe12RecwnCv4UNAoKvj7sM3BKHdodNnGqcWk6HyNwinc4ADbz2nbhEGKbFPFnX",
  "key17": "2ZKfKKBpkMtGH6KZLfSQ1ZUvFYsMMCqLAuQ2DGQH9muGUwuy8rUF1Y9R2UWdtALxLEdxDawW2HPsV532u48RFYxL",
  "key18": "2VbWXowdpBvGN2vLhLYr6muW4yk4y5AoAb5KEofEsMCVp47VBzohc98Abe15Rcu5vks4xfBJ83QrC9u72S8cqWnM",
  "key19": "5TWVowJsajctyvwbhinC5x3UBV1vFjJd9rHtfWQ1cWZTcAkeuNtdRDPj3WqXTYpZUB4bF7kdtESE8ns1j3aB6KcC",
  "key20": "5Sg5reGgAh6UwyczmASbtv2D7jcGhu3tsnXDUukVVpvguoGWLeVWPYVrsQZmdS3svGdkYFGPrsibLtsCakB19UZa",
  "key21": "pHDUyeATNXBBryLKeLyhf4GWLoJAW5Rpmk7iEFBJyfKkaquqLiQZTWD3jr743BpVXPrbqMG1eiatiNvZkuqjqnf",
  "key22": "3Dy6feS11XWPCDTsbX3q1cMMfhmnBbKs9CsM2r3dpqRDBtk8Us4DWSS6u14R3dJiEHrcbKiWi3GFT1Ked1W4J4xQ",
  "key23": "4vwVvoiRpk3XfEgu8CtJR8J6bLM59ecmvEuDTqKi3bsLwBpUF9G9JuhhpFsT1oCHcepw5XPLJmj9NpwY2kRDCna8",
  "key24": "2wJZnqYFA3dfnJh5hfUK58a7TZPZsPwV3yGpQA2U8Q7iwt32PTGsQfq6JbLMwMoQLQptZpG7Coz2obr9kgfntHaQ",
  "key25": "3JGha2SSYPbh6GJvbGJkxZ5QfGywCTxKyLXMHwP1NssgdhhtDEDmmedCwZB5sDMfME5ZJMiMBaoezKNKSJT5eiLW",
  "key26": "3MRS1QmRiQ52o7qgUygDcw5qkSiRDH4531d4GwiYvbYNTfjeiQvSp8GURZJGC6jRX3CsKSeMgvNDmuApf1HKL9iF",
  "key27": "N9D9dtJG1HSfoiu2s8qfFNJf23cDdcCgTEQ98c6qfGzg9gLEC9kdhLFfGBzu4N1cxRa8Ja8wudyZufoR8RqVJM7",
  "key28": "58oLTVsFDE9NpPvqeUiq8wwxhDTVMxVoXUawSbrjKa2UpCd4BtkSbUCPSfyukpQLLzbwLkMfnbg3uzGri836LfKw",
  "key29": "5DzAibDftg3LHU85bMFw4uUhT5suF9AozUV9AYSWov3snGiuxVuLtpCBqs86ZAqU5aeQeoa24Ko9DoSSjTTZmjq1"
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
