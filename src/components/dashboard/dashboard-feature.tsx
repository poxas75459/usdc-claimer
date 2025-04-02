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
    "5CM1LsEVGaTACsFkH8YnAWoigt2rXTcx2qyXsJo3bV5ZTSJbwC8YBuoczy9YchWRuv4if5Jq4KK7SzV3SdKSet2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xi9umwWJcHZgGA2DTe4t9Fd7UT2qncjtuKZUNwpaADiVQYyzeHdjWWFQn5fUdJA1i7CrQv9xscDwRwnhznXZm79",
  "key1": "3KX1mfcVJ1AfTJsP6yCvdaMbkhL9JFX3hgFMFfPMLGQq2xrMpjisoZpnAhFHn24TXAJzGT4uU6WCzmM2ZkNKnN6C",
  "key2": "2rDnHxR82Sxmx6AoppjvcxvQSq4jNHRjqYRtcXuR4ubhxQz7MPAKYyQCEQmJ67npbTbcu6txVrpqpNQS3GXHGayH",
  "key3": "2rbjZGqdmTChQPsvfzbdf22xRGsiScWs5bqJ1snRq8ioZo6Moeh3s5iMD2eStFNUNe3ReJGwQunVShhVVnDDk6Sd",
  "key4": "Aee2Egz49am1EkJh7pCYHDDfj7wH2U5c2Dm3ouytLp3Wj5s2zCEpbNsv7PFWTRAcivbhv71qkGxcfdoH9bhNmDX",
  "key5": "3D6pc5V7XNjbVNFUbj6yXKh9dsfxWpDgie4rBDx18CEFjQRjKfwUFXcRHAuHrqkBTHHXB3mV18HjCbNC6nMfF5xK",
  "key6": "3bJE1ueyaAHB9QBmZFjio6uvZiqvxw97NgyEQ7eSxxH3jLwBipDXdpbKmXQQ8hwQG4MrCFxeD6CVa9Ff4pFRXcix",
  "key7": "45qWnbgfuARR2A9c39piqy3CSBrpzQqV6yD7DvnPNn1m6YeNXrSwSLWdJbu9GVRTAq5a6CgznY324BRhynF7pxd",
  "key8": "5SthycEcN7vfCSbdB3h8hakVJvujtbMZD3LUteAJwVdPP5ud4bxPmQrX5nGd8JtSbxri1Qp3UQ44bt6SFQsMVzkf",
  "key9": "55SDvHgnqe9RGLhVQB774W3NcJprxopbJb3Yu4H5Jda8Dnt3mSA8effjh2D8B9qgpaeaBZyu3iQXxfgoK91bVa6t",
  "key10": "rySqFvPinMDprmJ2627whvwDJSGyPpa69Gsan52joRmhfxeQJKLZFU75yS8U9isFtofmGEVT77mYBy1zeaU5W7w",
  "key11": "5cfQSVcdiVLswi7Tb9ccttdcxcuE32LbL5V1R1GcrqQ9UittxugphAGNeM2sTo3tsZkYqxWeg1MayPYbUbPHDCMf",
  "key12": "2GUZ3DKMdE99pBHyynjx5w6MMZrTFK3zHixC7m4oberYVZUnQLvEq1Dwm5BCUSm1d1W7KSurdstCaGUJDY9m8vxq",
  "key13": "478uRhZVMaNCy2S2keyuggpna1EPRtR2FcbxQ5pSt23xf55eRfgPWKSc3nN8PJMbyCWsR2YBihaV76HMgt9Dbfhb",
  "key14": "4PPkdJPo5nfjv3Z9R69Pg4qcyJArtoVQ2BJtQk9hxkQZLzBUYKNmL373s5NyiVLkKgcndY5HjLF7ZgM7n4a1agTQ",
  "key15": "4s2m28ixsUyY6wS6zKW2gYsn8DfGprSemjnhK1QbPbi32QS6j4N7JyLJVzgPaUjiANnEqp1YE92F5GL6cMKzpzx9",
  "key16": "21sdSq7QWL58eGaprTJoyGA5LZagcECsVymQuLFW3r1JmFh1zMdLurye2AJDZSXBLWy4UWGBtgUbozU1CuM5KHdS",
  "key17": "4NASU9srXLeM14NEJenJEKKbtBqNeiguSGHChoqk2EtVux3xh8mi8LprriXCQRcuMCCxc4RsmLmVFaPFu99JDSSc",
  "key18": "26NtcJFDTbBhX28Mh8taE2Bq6UTYy6grMDx5b1SpiT3127qzXyo17W7MdoisVNREPusPDgKLPi3iveyQ5T5Kj3dh",
  "key19": "3hpZPoUWz2VcT1Lm3g4stHYPCkgYe8btanB4UohfeYFmkLbgYuBYMU6k5TsAp7PEX25MGxV5xwbwSYaQEbMUD94j",
  "key20": "5geUsHTZ8SdJHVkXJwgEgd4AKHZDUG8iAMXCRDzW7mJQoRPwdKJDTTWZyAa4izrQoMpRv52biZajJ3n68tPpipNe",
  "key21": "4vMwaJAXQoYjq1Rkn17vHMvZmZQp6m5rksqYovEGibJhGnBYs2miVJr3ToewDqvfUZtLnPWgCrkpsNFfZoTnfjBt",
  "key22": "4zEJQ5898qwmJCWngYyTo4DkCZza5eNcs5eEFwVQQni4yBENM2ywfVESY9j7TQjC142397r6tiMmRAsutDdmh4Eg",
  "key23": "4okna1jMBYmMkwRSdR9LmwXB4DoauHxqQN2GDH5b3FDB8mVmJun2HDeocpxa8h2cvXcP9XjcZsmqdZofVbstCVHW",
  "key24": "2dWwiCTtfqeFReqCztJBRFY53e8HMn4DpxLcUwnR8X2oS66a6nauMGrYYrU4axXm84dtUwbUukzNrnTEtaasNqzL"
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
