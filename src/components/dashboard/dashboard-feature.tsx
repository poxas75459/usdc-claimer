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
    "rQMuFHpHQNaPCBrv6WB5g9ohEsCRE9F76Hjpy56jJmEZg7QW8b6U6h4ocP46Rtcx8ueRFqQrWZgtmL1TE9n6Rnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QSmQaW4rgcgNmCUhFTVAdEqGhcWfBh47CiyDXji6sAjnuhNtx6izEcrJcJaAysDohmM7EKvQ5sABcE8LHiZSc1m",
  "key1": "4w6PzMGHU5mjA9PVV5RrXWtCDpi38yXhhFByUASASaBGgD7MFK3K1HHaPj3xEQZ5dvUUb7HEcduuHaT8C4bTEDTK",
  "key2": "48iNux9U5KdqQYuSuSQ1tbesCXYW3SFfoEyChYNQuYaFW61j9EyEtp33vvnHWNruwfhN8EKUcJt69wnVCUDuQtmg",
  "key3": "41Y7GMok2XoeSahFGeLU6BHkS5ohwLHA4URKBsKJxnd9JfwBHYnbyACoP1QmPjcF4kZHZnye6Vjjpap3ZHV5Gbtf",
  "key4": "4npR8BqJXfz8Cnxp5dKDYxzRj5cZkfquAZiFbu8BhxiGpotANq1LSgb2sjCXRR4wHyEkTkhqnVKvbtEb3FH17iGd",
  "key5": "5jQjadiQDXBBtoUEzpfMCucSHTnUKXNP9L77praVgw2A3NUiqhTAvz7xrztFPATkAcqUrC27CdCWpsjwdwMAhiVS",
  "key6": "5LUqd8BjAuFifPEZ4GYkAAKbJAiW8jNrN7hYXowYochJVsfxBzKjFjSsx3JKPTcPmmAxB2AroJAf6Uj1kyvRzms8",
  "key7": "TNGQ9wcrfeh3QeTnAwjedqM1wR69Ex5xMazEXC2dAiU5YY4R472w3L2YQ1kqnzhDr4PHyieNWiHRoRgSSf6C2EM",
  "key8": "3H5dhL8aAJdeC9ieeqZuuAwkaLceMVRP3e2fGi6EzE1BKRKNFg85c8XZj45d6UGCQn6jL17aXWKFDxy6VjkF7k4p",
  "key9": "5Xk7PCJuGxXtsrYNwYK64cPf25uB6gCtyxw6R9diNKktHvbL8pXwXEjWfHFYpddKDxiSYAycZMnS6a9LNd1iqs2D",
  "key10": "4rW3vpqsiXQqKzrLwcrLi9ukSCkgZJPCdzRwe8KJE53ETm77FZzb22zXoiqtGPf4aQ55sTpWshVY78Yat6Nonb7e",
  "key11": "5i1znQ5hwNfPxeRhhmyQvYeuTtd1Pb4PkXRddUPkBwnFUuSVUrnm2eT9w7KQLRoHFohK9K9bN9mfb4EvF8bAttNi",
  "key12": "3nNayDVHaDuD9mm5LrNFZeoN61MzkBc9aQzsURaFq7Ug9t3PJ29DFzbqEPKLArkzPu8611A7Tfwm6HRFAvsf7Ltm",
  "key13": "26dWuLNa4FfyQqsUeqYMvyPCRvU6o4Tz4LPKJWC12Y5Y7ffM6Qaryd8ekvYCyWroPJ1zYBRzJA2g3AxYfHJ39j42",
  "key14": "2eMQbmC13pgHC58t3ELB6drQF2KKmcs8x746EuJFdz8eTDztG5rK61JxMRcBSikpsazsMECUBubiHb9vgf1bGkYR",
  "key15": "vcRF4mtgaoiaz4v8rr9136214F3Lbo6BaKpeWF2e8osZJxuP5aCWEetMzAwF11HQW3ZXZFb6zwzdrwqcppQM9m8",
  "key16": "3URF4nWFyqDLnw5P5Cxfmugn9cuwNxjZfhG15Ru3wvnT4mTw9ApzWLAJRgQaAWmapnPZGjHXNLZxEh9Zehh8vh93",
  "key17": "2T9pL6Mi7cS9mTJkR5YGjVk4nuF8MxRzMG5Dwk6SuvRXecaMm6JpBaCHbHz5KAxWFsboaD6hkf3QYneYXhp3D51n",
  "key18": "2idLqTSt7YjXDmtrs5LqXA1Zr9EsAQB7oNBX6Jdb9iVaPuxyFQGYNxV8xa2K28ARQFF3yXubuc1Nmwa7qZs6YGFN",
  "key19": "aJEVF3nVuXKzikktByUYeMQaJCdmDRLwS8XtgKoSJvzaHKRAtse1ehF1izpEskx9n51wLD4666nK21B1fmiTJ83",
  "key20": "5KbvedXavz8wkgwyLSQhTQ1DdAs3Quc7CFjWUzWBbitRELNuzAtejLGXdf2o3wqRVHXno7a2Htu3uKGzB6LYwoWW",
  "key21": "5LyZYHjJhRW2JxJowAXH86G6y5FyQSepWHYm9y1JEyFhGkWvsV4MpsMXsQ2EHRcKddyZq5iCqaDyFNtz6L2yd19a",
  "key22": "4XnXR9VnK7fYDUYxeZ9DwwpkznyAwKvWqiSkocSKz7my8TK8LM8uaZ8vPTWfTKGwbQioBJjU2Wb9oEGZCkJryQrg",
  "key23": "2fm3UPAscDU3ktsCb34vZkVmMQB9hczKvw1Br8NuZWuMZZpb9dAu9za6rr1j3MkgdAxYfJ6QUNr5sCiYvLj7jWm4",
  "key24": "4X9LPfz8s1RPLTDZTvzJRLDcPPYSm6NYJv4pFwcGk1WyHW58svA8UacmYomCt74nhKoYkzeqyAQRftd68usFtFD1",
  "key25": "2Nrovys3mZSRpCMdCEMg3Cf1Uwhknwby5bEuo9v3R9hWuxWjkcfbbtrNxyJPZbmyPU2cRCGeBTTuAwUGmH826yP9",
  "key26": "5nFTnGQXr9D2XRR7SQmLpHyE2UGEFA64yBUGuxEdUAcYp12uw1yA16wP8dTwG4CRi7PesRZLysC93YGuE6yiz6cL",
  "key27": "5gFFiTxZNyxPL542xPjaT6hH5tkN2beg7hangAJHWaJBsoCZxK3Lwbz5AsCPih8HAPj7Bqf38rD1fswdF9MFvzQ7",
  "key28": "35f9TDBti2ZRGZXQNLQWfLcSbznmAxghxZY6LFfnneQUNwSF6AQQosV7ogc6iKGbkxWhEyfTQ3q2BLKvVS8PanR3",
  "key29": "4dttameRtuqq3aDCkkceFqsGUb3fJRfcsn4UtkdWrTnNMqUEcs5JiAw2RHNBpJVzjqtBukJvnEjw33qKhrAYGwBG",
  "key30": "5zmh8nQ8KBDVQKhSRxMgojm9vT548VjiEibTw83jBE2KPTTA81fEXz8z3Au4i6nJDNCwB928LVE9gFwvPSHujrhV",
  "key31": "3bDwJvfBa6oeLuPCNkDZ4oKdmbDfuBNuW6U4NPETZR51ce2ccu7C833TfALhRsbSHJLSHNhi4NWo9LS1xrVYxaVk"
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
