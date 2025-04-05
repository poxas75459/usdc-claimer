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
    "63FL8QF94vJuB3Gj7RrBy87acyBnejJV3z8BK5xwup6vGsaZ5b71mVYqKAgmzx8AMYxsZT85tVGdbQjBitBhx4Hi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aZXsMFZvMZscNuqCyJoo42Ci79ZtMQvvif8nzLSxKYQd4TRFAdWryo8zj3oFaHjXcxL3QdmPAet92AVfmfdUQDj",
  "key1": "2kzrVPuFXPnmzf9cwpUs2muMqi7or9FEQAbHEUrev2w8cNRduyDu38ZdR8UhEHBwzh52Q2c2mitx6NR4vP3GoV6o",
  "key2": "22PxK8YhbsrMyyMNjqqkH3tbaTi4TUg7cshJPExY2Lh2R1r29nZTVgAQxpqs6j18wPHtHfebDvfG1H9EnKP1NDiU",
  "key3": "2yUiuTkbWB4k9yWQfTP6MkK8v1MbrwrTTEGTqW5R6QuM7bGUnE45WPyZ22BEsxYSQEeotJfjYNMytdPEWaA48XU",
  "key4": "3pWm3QQ77Q9yUFxSGcyx8AAvNqXX9yhFrvhyKoSScbgfgbCaN6RpDLhjJ1xL1b58hW7fyL2KmZ7ouxbZtpcGGUrX",
  "key5": "4qmPMfrWTCE4rDmTEyPuN8y8v246MdRR2fgaE9U8VvWwicijKdH2Pdwau9YEiVTqRX4D6HM2gsokWgWtF9KrNASZ",
  "key6": "3LGNeEhCqDGaDH7Sejf3ma7FayKeWEYuiEL1rhvA3S4Sek1qvXm9QZVgy2hyq1CKJqV63JN2aPVHJV3zdbp6ssHG",
  "key7": "oJ5HoM1UiPq8R912EEZdzTSEjKw7KaYUw2gSZqBZdf9quih4RQegDGEeMPePQWjuU63ZxFtRZeoC2VSVbmp3jsx",
  "key8": "3uxZLFvtFv4QevqAGqRhJKzLr5aPa2TGsfS2KTRr47fYBLsbnFd7p36k2nGQuLhsRSuN6pbcpuzdVT8VJSi51xVE",
  "key9": "5JCcsGfAJNaHYw6Hnr7w5tAJxS6Wfkx4veagpUEFLqgcdrCwH5kVUWFEWJnhpuN6AjKykDbQUBtazKvEGu5GvD8o",
  "key10": "4XfCtu115GdjJXL1Yn2tTRq9TDDMEnr4NhYWUocvvx88uFPvCJwthWojBWqP1TVgTqmbDoDVdTZAW6HCLfcCEpjk",
  "key11": "TBF4LHZ41ybSHNaiMxZXS6gZLkxTseBJA9fWN7kGFuXvPsZgKH3WBJM8dKEsjMoQcVsNihKRbSw6BHJfaFUZxKH",
  "key12": "4KnfQa4pXkkQLqzGexbQY3H4MDgvzP9Et16y6SzMZCBVK1L1qUVNd5P7tzi1xVNnyR2EuSkcUCGHWXDcGBt99MC5",
  "key13": "2AcWLHXyhiBCEueonomhRHq6JVb1e4BMPfb9KMM8qW21RovCDG4vcDzFEm2uBexSQChPYvjnKt9Cz15JA6Fbi56d",
  "key14": "4xX93CZZ7hEspV4sb9FJC8mtzmcGWrM7SAPeqHhaK3BtqsmQKVdKVmrqhEm6Bco4UcwVSWE1fvRtVuqQoWNsHakm",
  "key15": "3giN54Z4po5goJfzHxMQQMwonCXtDrCNXjXE4tvnCc7y7V7UbHXfiUCpzFfhmtaBHPc441MtohhMb1AbaoQoHzq6",
  "key16": "MDquFvhoraSuVLuMw1CcabA55FNRtH7fTKjSA2hWxxPt5NEJ5VxxDFYqiEBhqUKs2dnMgEU8sJ6zGASbHRcvsE8",
  "key17": "38jnduL2DPRG6wveaWoBr2GB8e9Rmg8iLEbjRMt4knU9omkf239UxVFFFu4fRKJzJAUreLSTXkvcLkYXRrfwtByA",
  "key18": "3nYQBBoL78A1ijjDVBkg6KkctJBwrs2H32hmXDnNpnMMAUeAQeWZZwiHqXM7d7TvioUKd7fUSpHBVtPbp3yUWRze",
  "key19": "5WG5iE1PZRjH6mwGW45fnZDbneFbkJxjjMo1XfCy8GWYt3DMAEdNLbdfS8K2z8P8G5yiVNQBUjbTp2g1WkhYiR9i",
  "key20": "5ZFDcV7JSJtNtrBhMp2dimsog7SCcetPvBaFm8WXAc2g2ZHLyz3EhV1pBoSdzJMxn8Pobb51wRppLZbNDdcCrFCE",
  "key21": "3kUWJRCvEHMP2nXgGZZn2B7gWcfd6HLxjSXPiQbgo7VueKiJYt4zqAy7FjVLhnbTTDzAxSML6icTuG1ZusLe1ATy",
  "key22": "4ZeD4BESGPcthFj3LXdWBGawbfQVeVyMxrCBF5zZJhHp28nw6xwfmSKQVjxjgKYUE38vmSipDzbUjK7uMJPrFDYx",
  "key23": "5FKzpN9s9b1KSf42wwqgWiU8XZXNHvRDgPQp3wxH2cqKnaLfCGeqQpnveFqMy6hM2RP7Ci8rxhrJnjAEfHbZ86bp",
  "key24": "5HsufasuxHucVUU1GRiVCM78x5rA4nfDeJmRUp53DNvd4PpZpwLnnQ6tEVrpxLf4UbgZXqZxFckWNXovT9r5ZprP"
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
