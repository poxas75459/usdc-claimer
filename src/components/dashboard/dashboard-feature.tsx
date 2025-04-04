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
    "4Dgxm1pjquRTBt4Zr2Y2hB9VPbgavrQKcE8f4GE3dBjpq9Y4SKUzgtYGVViVMjCHrmhd5wpN3TcWR6AD9a2Nnz68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61fY2ojnfE1CYvhvaC8f3sVPWqzvrdDi4Zjx3QtS7BkhPs3ArYXPLejKUFwKzRVNU2KCW1EPH5PxR1nhC72GDaDq",
  "key1": "29gf9e5v5Lc9n7E2c55GRfLasNAGd2wrCRsTwSCwhM7k6cMUvpx5Aa4SxNqFHaWDBeKCFaSh2qavH1YjTbqmaUGf",
  "key2": "5QVGXjDKumd9uDrccKF1k1Z8xYcjbmmdaMsn1eRM5LCaPJKYTtS6Xueyayh1gTazBih2emVM5owH5CkFxRWXiqQb",
  "key3": "4qrXf45w7FfmoEEAYVKfyzGDDDCWRnQZFEwkcKsqW6d6eGU7uEgXZARrYEJruuUT5u1pzxksDu3xKHDYt99HwZjm",
  "key4": "3QMEWDCrC7JdEHezBv2s5jpn3aeQfd69NoXUSc76MfpzLSPVKQ2xxAjUmgoV8NKrPc8o4YU86CrP4X3YgaU6FSjH",
  "key5": "5RFFrnJo2VQifSSf1ShLjjx5EteHgjBShVoeXs2xZwv7mBG7NpezSQ43GgrrPatC6CFdEgq16GMz6jMQ3QPqJETB",
  "key6": "5HKsgsRLUbjcppaKt1STrNx6FwFgkdQpA8jvSfKL73fjxjeAxYSv1doWZRjC66Bu1hvpwRYhRxY4eduvFYj3Rpzi",
  "key7": "2ubAvvdwCnrn6wUHobHpBnFF7T3r2d6uH7pWZMfSbqshfbLqr89hpuDfAZGNFesdVC8nqN4hZyawjESJE3kp18YB",
  "key8": "2JkSR7effBpjDZzvoqFxhhapXAm7ADWaN6pZ9p39wGuUkmtCWqddce3akHDZvBuSgzhzbQKdVVzGDSqkjEM5PfG8",
  "key9": "47973zmVpz74rh2Jog7XRrqjCHNTcLPwjLDiMyfZwnvywC9t2UgjzftDucjno18L5mpNgXAx4WdUbu5DfhKyoGQr",
  "key10": "48yUUP5S1EQN57nJot4oE8WhvJ9rAPXvdabjDRq79ifsUYkC9diQ3dBXDHFu9FNawToSH7Qgkw1dTPRCowmtG41N",
  "key11": "gbJ5nWtp75VFDS9J7JWfbmGnWG72mYDL2piiqeKtSCtmaCvM9VNCeuXQfRXxqifFVmJM54yMD9amCR7dLCZ3YZZ",
  "key12": "64MstbGKUP9fnPqx9JQfdsqfrkGJye4yLexSGZe65thRh8zx6FVcse7ShgnoCdAiyDjGhCYgPrzrpgvmynY5xi6M",
  "key13": "3hHNB5NHzF991qEziBGr346wctF2TjVYvKWGuMa3vUQZsHfhpUpNQ4222NpA8L48tHEk3rRxzWfUUWG9yhr621hY",
  "key14": "48VfNeH5oHL3aJMqSJuM8DkpZY2No7EA6UJtw6cASWiQx3DgcwncMkSb2BUzgpSbVrHAHzSLoabuVoevQEJzXfkB",
  "key15": "4NxtiYC9GD3HakQK6mKi3GivAPwLtVUmLrTURN1NYweSVR99FwQkcFWs6JyYbNb6Nuex3ECPVUAJQ7QicxywcLBm",
  "key16": "2FsrqQc4EqsznukzaZVjW71A4KCUfSVZ6fvETey73kntMvDYU2tkDpNpXc9Mo9NGV9bzQVbiAQhPZ5YWyesYYGfT",
  "key17": "3z6Kuar3F4SWtfthrcmnZncWG1W8sku8CZCyCEnhppJtdBTJtpdJ8VU2smZbhwhPeepQz3GCGG8BYigjNtDXTUCm",
  "key18": "5Pg1DWiNiKFsxWxEnbvS2zVdkeRzePs83Y4Jkf8TQfdoKkJ8E9r4mnKzHjRv3E8DhYDUGTsV8VCZkd3PiP5j3Bfg",
  "key19": "36zQUprgV8SSALWJRH81mnaouk1BzzMRuJhecev9jMjcprZACYXBCBn5k9vcbesXfaR7SJ4dL6mF33bxMboLyGtG",
  "key20": "3ovFkr9U6x4nqbHMzLUnDekH3FZjeVybPKRMDE27WtoHWxgVJPDPkkf8tXiYGgEReUfdBUo5ahmSxvPRp78vG8Wz",
  "key21": "QJa93Re8D6rvKEF3nxEg1REcsMVu93oMbCDnn9Jn5Ypy5K3iKbvHci2KUjLM3v1hQexoKYjwCNu4F5DoqhT6SrN",
  "key22": "63zfc1CU8HAUJgfRoKHrRdxfiDto6pVEoHeZqP7y9fFemGDgEcrDAaRigNgMCS5ao2DsHW1MBQ7X3ockQjc63h7N",
  "key23": "CQd3yQwwGVwWgFrUJP9TuoV59nRLSF9cNeFEvW8Z43tUcHaDVMr67V3s6merSbwKLPKkWkmrR1ksEUwBAtWARTw",
  "key24": "4Ktg1rTGuj57c9Q7cH3g4MDLBCJ4LaNgHgQLtLUv4ikZrV3FKw5xXXPSSAjY9Tu9KAG1Ph2qpSDooAhpvMmH4uTF",
  "key25": "48vU6j8gEGuqYLundV7AhvFTxaqkz34vQhVrc8NbqDeBU78gKQDjHrsQkua3VyJ8weuDhcxaWWAncbnwM56ph1nj",
  "key26": "56SCCNKwd4TtDyYJejFttBASpjaEnN4AWYEjSjjpJ3a43qFbUKuu7jMPdF1Ppj8iLTGrH8puqtmnGpB2YUczUR3o",
  "key27": "2v2wHV7MmH2T8GAnGVkyCPppSacnCtbX3J9KHWwdgikqEsKxyzNVbUUSwwhcKcMtxEAvLiqaicC8mVYwctqgGkUM",
  "key28": "2c5Hmc1vEqvMoTrprWSovpW7VcMhoR1zcYegWkCugJJdNHTpNwNcsaAr3rKaQvrK2UGasZAXCdeMRMZRcW6kpL8b"
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
