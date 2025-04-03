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
    "3Sh9tfnZncLRaSQYafCAUUuniqw8jdukWHYoxvP7wJcTyD1eUPaesSuq8dVzobLeGJmsn2vcAfQHz8u21XUwzEq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MZfauNMburUBYxBzZw9WDHKL3dEzVav6H9agE7SyEuJfoZa2EnanBjVGt8xersMCW3voPkHLzmyMmSZySWaxYXQ",
  "key1": "4yfP96E4poqutvVw9wgcPhUbN6Cy9wdiRC7fBQonQSxrbs81AbW9YEmqagV3XZT4Pzwwivik1kifNJPHvNCHsfHy",
  "key2": "23VqHo2QatgmjABSV3uSzcSWv11S9XxMq9JB6RN6HKshAWjj33hv4MnZTv9zENQKHmFPwHsUpX6YAetG3XPqHsA4",
  "key3": "7gS2LtRvn2z89Fcm49LccnW7rRr7yqzRpcThkJMJUDzq7DgZcezaiFdUdzeLAanBpfNE21GUQthwSi2Vh9hTq4U",
  "key4": "5aRqHU73JaoAzjTwgb1PNUDo9qFThw3pRjf3puLwg2NgNqQ6NgoTbYyuV9q6kNWQyZPe2rYAFZPMadDQMQwSyLGP",
  "key5": "42VnykpYzvHi8UvyzQc7tf3XHjgvmACaEPECBFDQV8jajF2c5zzKifbGt2f6RqNEDDhxjeVa5GcAK3PNPChmov4r",
  "key6": "3gzuS1NPdWkLAPw95wcC2am6cUtg6A6rSmAmzTk5a4cBqRf1VFYQivfNzQH79iq7z86Lerz9nrPvboY9tPiyjyFT",
  "key7": "2Ask1UunAsJx4Z61nw3Bb95iBMt6jvfJNwqwqsyXgcGhFe45s739VMdXqLbff7mUR5PwjPq4Xp2Xm6WTEsjZ6u2o",
  "key8": "3Bw3jpxccJ7WM7ekkDTT78jfMNyT7gyvyG7GjSVyPwgLeHtNipU6AsYsRn9rBYicZPufeKuxNfmFonUDhB9qGLTy",
  "key9": "2dGhWSZDx3AUb4ZG61SEDapduPrBMjNu7ZtiikY2qh7eDBuEPmkQ4Zbt6Xa6jEaeJY89pjnnyBpzmuFJS8wHDkL7",
  "key10": "5KEhtQyGqfDNGKMhBLgMimsVyzgiKY6pCh9Pp4rhVUP3sEi2eyEzs5YDb3oPpV3hKF1mrEnharYg5T3nmom6MpC1",
  "key11": "5GNcNnT3BcTwdw1E4VfVpahvPpZncZCA6CRQfZFujrfNKy1mAdMFBSvBSLJzi2BousS1ARYjwohKCQTdwxDmwXzv",
  "key12": "2PDgNtkExr4z1JpBLpWk5Rtcbw6KBBqag4XTDPJ6K9h1iXPgvbXhfBLLpPkaz9gw9Szw9oxDZ3PwUUQZcxyVtH9E",
  "key13": "3TzfGVqqW6mHVRNabZPvv5PdNPh8YvuURDwYf6x6PdfnkweBEQychvWwcPEyK6vqu2AkFB3nFrwj3tHe5dLA35tH",
  "key14": "4qS6x5SzTo1zdtWt7qWyJiFy8M7svttEUFG2YfNaDMGnfAUiFxUjxxXBiMtqaYTG8Y7Nri4WsQgZMa9EsoPxUkDY",
  "key15": "5fP26FpBTNbHKJpgphFzsE5XGhVfjWNkccUUzLCeskGD7ziUawzFyWdCuPSNFbE9yR8P25etskhzEKbN5TUgeAra",
  "key16": "rWf9WUxhWCQEt1Ds7NeQPjRoooJSPEDF63Hx3LFpdW4SYE7sNG329cxYFicsmjDfd8oy9yQkuuWtUMzCv66bUy6",
  "key17": "5MmqJ7em3mxKDD9zoUkgynG54dXNqpmAaJ9oU4qHtrq7am46nEg1ezDrqQjidxx7tSTymNi7urWcECSZwT9Ludqf",
  "key18": "GBvkumKNXv5guoc4A2tqPzkpwowRvxXL3HEMVHo4j4xcqh4mBNAWVrJabsGHK6jHuo7YXDqzz5V24GL1JyeNVHX",
  "key19": "5tAZppUTut4vhSgQQF3A8U4j8WSByJorJrRGmX2GeE18UAxxmXhxqrNosbqdRDjk4crhXVGA32nYC2LcTCqYJDgg",
  "key20": "3PdnPjwSAGmP5pFRGCY7Np4s6kby8fsKYe5f85Y4brLKxVA3yC3GveUCjEJW4oYA7R74irFCAcVoTGjpA2smsiJN",
  "key21": "5BDREEFV7dhTuyiuePsmULZDP9ZzdmSAcPvAMHeL6roK8nMEwuMvsXYn8rXKC8trgCULheeUY23gxCo8PTd1Yoe7",
  "key22": "5QxdNtz1DMWva8C6S7NajrTFJGFBecFkJTgxWiVrncEDXVGLMo4T2xFVoVVzS6qZxXwjsCx1HZFf7rSa4ztvDvfR",
  "key23": "7jp6xFtshoFDszmu47Gi1Ufgs1xHS5wR13ih5GeSUGt7kUFBCJyKb2YPjX7m4VU3UztTyXmJS1GUqLZMajLdLPX",
  "key24": "5FNWjPrSXHg6hYVGE36686Jeboe8eDmZgTE1HmQeYHXNkAXupk8tD2x3stCCEtp4Yr3ZCg6btrfvzjWR5cBD3Skf",
  "key25": "3VpzZehvUMA2ZmafxBT4fTaTB87kjGEJyQkP98AkRTvFLJgq3tpHzH36i5JhtDvVGrXECDtZ9yH45Yfcmst4zW9U",
  "key26": "23LXWLNyHvJBLDBsQi1q9KT27EKiJKm9zLR5VeSenGyXxKV6X2r9c4FZa29PLYB2MPiSrqVhmax8dD6avfiPexZY",
  "key27": "4QtftS1LLeBKqttGtaJdo6H7HTHDgrXKxzpbyTFChEeBkW9QsFHzihYLvjVQjzWtzQdx9Ei6xrw1VQ7QbBRPeVK9",
  "key28": "4W6qdLJEmDsQ3hqha4DbCXre85HUmf9v4iFN1FpoxZznJfnET58bJXbRNMsFNmmXodSpExapi3Z59QBLubfq6RUH",
  "key29": "24bkfG26W13tj1jYWfABfBXdc7DqzKsrHyWxDRpuY76Av9Wu9rv4PWoJVk93K3FbmfdQXmauJ1dvmFzTmsbKATK6",
  "key30": "5WNWLMCSaV8gLs6tfVBmER15mBjcB3ZGheUx6tqJnxpSMVifrJxRSyKF633sTYQySXrfNiudL4fC8M8DJgtRP2Nf",
  "key31": "4XbZ2sagb1LZh968Lg8p215fLXr6yrVxv6C3EYZmwXcU4WwvKvEaSUPyHY9HL7HeKMph6fRtfyP6ver99StHZhzr"
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
