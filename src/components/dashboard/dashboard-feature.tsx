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
    "7fUTiPGJXQ3FbKX5E1pvHRqctMA2CexhYNwZ1vqS3dhTJ6rbJSCyuSkeianBm89okeu4K4aMA3dE1KasRM629GW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F23SsNWBaipqH69C1TqVXZCeuJXFfNsidNRjQaJi24TRhfXauvrX3RM6Yr3MuzkJVjtju7KUS771j7G3cubjHb7",
  "key1": "3JRqYf1GncyBzE1p9ZnFHHBRx7hCRUvY4ApLx8HUxuDZtUAa3aefmPc8bpbKfaT92DQ2FouJHLt8UFNALMHRpSdJ",
  "key2": "5WCAy5yJdJtgA5TsVAXsQ2CKAAcibMsQvUgn3ZB98j5AQxqcvzXMfWFgZTGA8pLVcJ6ubjGaGb1nDRRUpXrq6JBP",
  "key3": "9B9N64NDqhoxjDN2d3W4iTVCEyLyzZ2M5V97fjm7XCBE4B5MAHt5GJAcNwWRrKT8PhKeLaCMheD692RYLVcm449",
  "key4": "5DNknSD9nVcUjQTq65aCuUeXVM7H6z5jSqph2SeKDWHVXLZidhk7EUmU8N8XvbeY8g1PwwJNHQinsxA4kiKns7SD",
  "key5": "4UdPHWrdf1g8FtBxDjrhnrqVSVzWj6ajtkqLiJkjNNsVdue1Gx7TEshVaLe2kWybJVgjLht1X88MQQKFbqhQciaT",
  "key6": "BoQjUgQQ6p7uaaX1AQjMh6vCCfrYobS9yFaDSKs8t9YFNCjwmRZJ6J9FqE7jPPZNjjAPA6kf8G1bUsrrtRYkbpH",
  "key7": "3bjzhCYAzurGvNjGAtJPMTWqKvM4Tc5MMfB4FFaaa8s2bGZP3K8nThAGNf9PxEaNb6xX8K5PEXJvjtN4Q6yyK5QA",
  "key8": "4ezrgnMnfoKXGDxy5Nd49VEDxGHdCys3Ap46zaNAWP3S57rbA6kx8cAx2gxyPQ6a4pqSEHamdXPoB7L6CZMUkSFw",
  "key9": "27JEBDxMmJTNax18z3vjjTEfeWAXYmcRf42KxupoWTTdUKJkV471BnZ8qHnYceMbpjaWcJmpw4wgo8qHt56FwE5T",
  "key10": "5oMVQwDxh4pWEDhs3MAb25Ht1DUDgjvzK2VpFGCbQh8ZPNuxkXbT9s1kDb7xYZwxUfZgerLZdBP31RGKRvPkrfAB",
  "key11": "5JnUjXaiKtJXcne6F8vW18KK3aiLm5EL7V4BXUGJycKaCZUdvDQpn6DoBWYxUEystNZrLx9KX5pzWFepjmXKeW5y",
  "key12": "Cbp7J6Rz1g7TxjqAbMEnmvH4MRExGrQKVPCvYgAGAqCM1Qt9uZ2mPLzpVysrRKqcEee9gaQk8pg9tBpYCLUwqCk",
  "key13": "XMSJ4cdAqa26bUUu5BqiCyDuV4vRpFPPH8ShtDrRSQ1LaLciET13ogAegyhHJh7ysJmNbfaEM65REen4LSrwcZe",
  "key14": "2E9ZKXvBURkT5JHCuonfRg9zgTraF2xGVjr9GXu4jMfGQjqzaPJRVpukSv9qB19uJk86cvvQNBgbj7aQx54BhKNw",
  "key15": "4R14zZUUJBhKLHhpDRZ9DQAuRyymFCbdV2pRan21HDYTCyLU1JcvgyaGmY22FBhmNduyziScegh7SjyC51BK9v7Y",
  "key16": "5ahnCNHVzy4C993374nGa1G8aWqQmmux6PYerV6n6BHLNv5HkizzUnrqr4BfNddXXhd5T43DXA1Lc8TKASpHKqRy",
  "key17": "Uv1wjAjg91231zuZEjeBurWWnv4fdRAGCvQyG2jhSu9CQjKoNQLz46em5RxRBzC7qj19qBELqfCyDKvtYPKwFpo",
  "key18": "36beSaf2ApTi178LxJvSAVg8P8uAUhSds4ySk56LxGoHtwNvD19Njp2VPksPCaQpBbYibqk1cLgaM9PX47GQMC3J",
  "key19": "629M4wCiMfvXmFLUtrF1cEeTSrJVR3PyFR9nR2zRZWHS26CY5njc4J3NpzJDY5NAQq6hnvnBCJLb61xVtRU5YCwa",
  "key20": "3ngWhNYWGZtsczJ2itDkM1hanK72S87EZrCj7MezjXxT8MhuRWqbiGNi2SKMfZYu3TyLGgYAnBzTEgkWi4jnGCvm",
  "key21": "42gSf3tMQUCh2ASdogfmpjg9UHfwqiWwkQTK9NygydkQdcsMDtk8aqJsuirw9mRA9rRbSLz7XcR4QxeY64dnGdsW",
  "key22": "szTxmD6f77hjfz4j2NVCFPj6GcgPtonRb5QkqcJ2y2dvJnwr3CvZMoBCArzVsykzfsS2YyHKaj9QEeYJEdNJrQr",
  "key23": "4UGH2kKoQ4EtvFtE5WCi7N5G3Q2RYPGSn2zHAAgtKqphoMAadUXnj9cMPwDp1Vb3gN21GbxXDejguqZ1khajFS4a",
  "key24": "hotjr9685rhRveRERM5iBK7iycYhdEkw1cBLYUKaZUrwhRjpo3u3qf9a1pcRifGUwJpAhJtb1UfUzzGqYoT5tNS",
  "key25": "SXPjqDzV3C1UamnWtVvVmwEqd3xPS48HMkLJyqsEcqLgTMpVEmLuYHbqS5sJKpWzRAnhd9iQC1GxfXSsGzAMwAR",
  "key26": "2DjPmQ42geLWykdsMArRPttvDiYAarGj7idDGiLiDbYmjQXGnh2gVJaT8cVPHKY94GVL74omrzLudaksHEhANr6z",
  "key27": "3Qrb44fCg66hErzp6g46WcV7j96q48C6hSUjA8TsSwMLzD6LGLCKkLiMakBosLAytnvc4ayrLpYRRUddfuGzFScN",
  "key28": "65T7a2jSfmbMiaR3YPywjjWKDpZUi2ymPRGMLWGrNZzT54oyUJkBGL9frZb9fnoSJzWoeAPU4X9nrwpsgcZeurXc",
  "key29": "GTzihz2jKQ9QcBTExMFN7E9vPcJBQ6fkiNydgozaSYXAULybWamUnT5ino4kiX7GjNrPtGXwGME4nmRJULrca5J",
  "key30": "5RXtWKDxqVqksmbnsTyr7uj5DrNzDTXPceXPnfHzeQU3c1s7izSkW1tkvqY6LATY2CWQEsHfCkWnbHRoaDVuhzbP",
  "key31": "5Ror9qyJ3M2cqosW5EKx3eb7pZTaoFm9uuvRPY5gg3HJTP6GthJNrk2u4y9CHFiUerSRntkTrgzCrEiuYqEAFzqs",
  "key32": "3PEyBqCgk8sWnpYvLJq8BBxHTJ377xFhBsewLWwRUBbxsrfp5vPerhbDjS38f1bHRgA3NR64fzEE2bNAeNFi54rt",
  "key33": "23c1MXgfGmi83YbkpZEPuaD7Rqt2bEXFn9tFrK2ikCuMNjJqthr1z2Cnra8acXwS8zXvmkPdLhoBnamBwXCRK2Po",
  "key34": "3BVSqBVuE5P21FRGC3EgbwMt3BXMZustAHvLni27WbaUNBRgEjTgeQAaoum4hveWw9z5TJWxy5qBpYyXxwQBgnUX",
  "key35": "55mr1FTEqr11QANzGSEgUZXyYtEBEHRttpiXq2oQmbx4SrPLR491x9H6mpnBnf73MSgkgW8Parq6w3UvM2QtvdcP",
  "key36": "25jjMTShosEjMzLpqFNRAtWo14wNRT7cqM6f9aLj5mX3V5KVQsMGWFX1mMFVqoG4rs4jzxTERiFVt5NfxKC6JPr8",
  "key37": "2b8rEWUY4PCpDxtiAiqzNhbFBo3r4ZfEDu9urrbNan41bLEfue23b5KqE3k1eMDFEMwWiXmidvE5A15un4ksD56x"
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
