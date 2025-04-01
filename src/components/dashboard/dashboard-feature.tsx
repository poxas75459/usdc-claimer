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
    "3kqrW2ikCschonHr8EBx48dmuxfTZaFGDqfY1va6drRKMCj7ZPrZrk2UAXog2bvdhU7FnX4DAgs7CcFxaj6x8cto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BFtGhv1zVsKU6VNbMChUu5czERxMLi6btMCdsFhDANNJrLE3Xats7MQarbm6VB4HHQ2P2RAVGZF8PxZAixLEpRX",
  "key1": "5pMM2CCMn5YNHjJnSXw14mqAytMBtYYX2G23RKQFRjyr1Ga7LNnsggtrx2vfekhBvi3CoXkiamYjD3vuGFkQjafE",
  "key2": "yYQYVw4hPtfta44sVLCsMfBa7wD4EbyPiFL4hqnaGkcehDTDQF3JzPKMDyCsGKK9fC7XEpkUmeqN5E6XKNkxPjC",
  "key3": "91UWEW1QDE4H9uY6z5yjqGb8YYWDUUwg397UsHy3aLvs9zTmRCS6k9XiHAS6uLTpXconb7DoS3ZPusxPrbwTo9n",
  "key4": "4vTMW5jzyjS6NEES8Sf1S5T975ZfxF6MiPMMXbYqNdAT7zKNdgRLrod6Y9Ryt4hi2d1XTUL4dLfTDHsHdxAFbqs7",
  "key5": "4h5V7F5jjcgRiKdqPWEJPYQaWCnZNuFTP3ATaqP4NoANXV8Z2AcrGWqxvYAoV9Dkhfagr8FemgaaVDoAk4HS4MM",
  "key6": "4VeGfUw6LKPxhKrWYa7MvsP3Pfor9EJDfUCKF8cMVdm1yLvWPGPNTXAks3o4gTBbFHvG1bt81BvhXiBrFZEm7DpN",
  "key7": "dvgyHUzNx3UK5ueoqbB18TVUP5fnhgZ64eqpwHyVLeZiRtGFxXQw5YNPDovyswqQjCfRFrR7Wnjw7TJ1qYCNW1u",
  "key8": "2eezLaYpabx7tjP714SU6zFymacrsHvmZXHhw6zUM66cD59u1H5h2g2gv7ZigDsYt8iPu8CpN1N1aw6ekMqw1Y8T",
  "key9": "4zSgBFbAHXTtj7eWXMoP55MFBRhqfdNuFBJZUYq8yKpdzfFrqZ35EKZpkLs47jXeQ1LKhFh9q1Vm9BcFvGiAVhSj",
  "key10": "2y28bF4zRQstPuECJC1yyHg1MKcHZWENCqSBythZNcP9nQ9puMxBfYDAF1vRiXcGi7o3DENzqEQ9dppNirAFz8Q4",
  "key11": "zrxTBe6V8oW3WbZ3JLSUGWgGTdPey7qbjtz2dWoQ3WCJDua2u3Kf7fT3v5juBn4Xf5FobsA6JftTziHHw7jNacn",
  "key12": "5TFd8Ljh6vDYNyAkLTWfCVykwQ8GYQ4EiwSp3TWiMx2yDnWx9jrWxp6do8DQpBx9MQGj8bQajXSujxThcYfMfZvB",
  "key13": "3tJFZwJ3vQteWvVXUGw1bzhHAhZjMDtdQ83CXF2xM2rwFDkWYntJyRvBZmxrohkZ3pJQsjCapcjkbYARaALtPJ93",
  "key14": "2eAFi3q5mDcqdExTwYyyNL6acazkp76hHCkwePBKgBmUzdVhmcuoVrBQHwtFN45atNZg7FDpWqsdKcoDzgEA5miH",
  "key15": "3zrmaioBvu12ShLTW6mpNBuLU7FAJ9foS7VGCuMWR8G2zpFFZXZN7vHFBSXTP1Kwjj1trFMjwu1Kfd8oCG1ud3yM",
  "key16": "4rgvXBSnJz2r3nXxumXF9fv7ujSCmKUa1vhCeFH5y3kiMySe1DduP2aGQABxSvH1X5TAGFW9vNZ6LbGsLXxf2AkN",
  "key17": "36UUCjtkHGTAxsu3KCG3phaX6NjCdWM4rsEgfspygGwFCUGmhVUyX4qMmjVi4SQuPYPJ3shPU7D9M89J9mQ7acH",
  "key18": "49ejA8vy6Xr3Y4pMTDqd2mAzNoXqq6BoV4uaKGVkU4vUjVPTUA2avmYmyAB4FmZmYuDxhQZAYwmbRnx1uzwzj3dj",
  "key19": "4r26AwghBU4xfNz9Nw7YtTmCwDdE8NT9X9b2Yo2qiizwavYioBubrYnBWquieCqTHosnTY8aDkkv3HeR8SDwKFyL",
  "key20": "e6Gns4HGHiVQMA7YCiKaqEsTpAhSif9ReKm7kYmH41GkeuV8Pj5qKq6xL6zBFfv8WV99pMseWBfqNKQsWgPXscE",
  "key21": "ZPdEDwphxfMCxT4Vw1RZe6nVtJ6jYonu94ZHz9ypbHLsPQjQTZ2BRSzHMvgrnNNKzNR9BwUNupcLrWUz8NKdSMh",
  "key22": "3Z2fRv3YnyixRNhunzHbXQvQEdfVurDsAmsE7oxeZGq1SY6wTY2U1SRExp5rVvExtA8YDV6grRaxgRT4hibJ2MT3",
  "key23": "55qP7NbvU8pfQN4oCa3XR1KpApSJgimaXqW4R3rnRPsUMSUBDVHmgi1rHAif2Ym6mdZDfPMmEBM1BAuxd1T5McQk",
  "key24": "2PYzG89PzrBsUuVyzTghnU3ZRcK6a8bJgXJrLwJF4okNoMC7ZVnhrypDnwz9GeVfZjPJpxrEQobTizMSG81nTd1o",
  "key25": "5azhzr7qiem2mpFS2J7LrcrPLnoTw3bo6UbcJTs8wuNH2BUCqqr5AjLFUzkWWDaGdY3To6ny5CmgRbZwJLgVw5Nk",
  "key26": "4j2AkvCGMP38kzLVSqECL6bKa5gxThpjauSrTEGnHc5ruHHkyiwRdWhU1Z2RLkpx5mHb3taMusMnE4w5tDRkXnjo",
  "key27": "4cUon3TLXieZxWfoPYwQvY3iu2ZYpJrgvwtJwUcJdgFpTZX8unTMndEqWGLhhgDhLPscKT7UnPquE1p8azgAbG9y",
  "key28": "Tu8MfznKDL9DRtJtEDXm5bgfnB3EcNgodPioAjoCei6HSEt5bMiABQvcNH1W1Wvi4qVNHsHKL74P5u7wrCGU1jE"
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
