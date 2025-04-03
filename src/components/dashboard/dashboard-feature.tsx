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
    "4yZgNoLW6VqaGyBZTKuFnVKucLu9BfCo2ogKF41A4bzXhPVJhv5MNwxaCc1BXxc4MATFesmj8LqothJuHgaP1CWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4btMFYTstNuenNjCScuk3TzeNL27sDp25JGnwzNEkFzx7Q4MYvD5ET9h5GK9ri9MH2vLv2nm7pKeQiTfPVCfQyS7",
  "key1": "3KxWXtZNFeCyoxtt5J8bwnUcWno3ePEY8WEQxXG3yJNiWBUD9kYamXvi62E1zzPfgjNjHVxWvA7xKq6ZUzjYVdRS",
  "key2": "61CaNyun3Xnud1rjV5RZqKGpgScAhMk9VDWK4Q85Tb2Lrk3HVSwdcCTxfUmgPF7ffyzAyP9Td58PcuePS9QrPFuf",
  "key3": "37Xv5ujowfsvUEn376EBUsjEZELBnEy69XXH4mEUzL5yN22UZ3psrhwEMMATjGwoJXsnA4ENXq9WUpk8tYvnzeRY",
  "key4": "5FcJcvF4fmEZA1Vb5n1RxR5q16u12PRg9dvk1H5XoyT1Cw6gfhrn4NJbKjKoitSNczRN5Yk6X3aa7ZKXqBUZ64fH",
  "key5": "3kHvs79hjhYA6zRpK5BBdC52siEKp8x2JNoyHE1fRKkzv6tUs6Syq46w6LQVag4Z6Y5eZ7tCwNH912KP7CUgie96",
  "key6": "3ALAMH7ffUnYQdmRJWhkBsJ7RFHdLRtQTSMzmRC9T3nT8hiNuu88oZnNk68w9cZucE86EEfJudPhGwnQUEmcznA",
  "key7": "5dxbPNAE9eDT1pVQUSvrPjzL84SDrh3GA6JnJufhN8abVqDUkoCcGrBecQXgfsmxgVBaNX5w3fPvfExh4zg21W7k",
  "key8": "3ZY6CZRVEAzizLadh8Z9cUWvoVvBUaNC1f1FGxSnZ5wR8HQjr5YS4dMbJW6RYpxocpT5eVXCWLKavoDL5EZkw2dg",
  "key9": "33PeJXdZup7twRgNXBwY7pftdpYPWBoovSX7PVKJnYYJeuLKdpEWSzxMx6fVsQqiWmyLgUdofTPA2cNBq6buti9m",
  "key10": "3NagRiwKLaVJCTaLNZGRjnqFdnEdae2RyArpQFdATwDoVFNjxSZ3JgvvE4MGmH9JzHfM1sGnqTpqv3WB4ygj6tWu",
  "key11": "3q6ucyJ2ErQg1iKKraCj1mcJuRBTTTYuWmz8HT34o6QkP9d8AWFxLBDcPEGTfvErJ6nMu57JhWmkoPSeEiwcV5Ui",
  "key12": "599M28h2AMpyTr45oxCK8oh3Wmo4cxuRHdRykDC7tHuQLEfKZN7cXnqWzfwV4Uwb1NgkZcy5Ru73HTNSWu9qGnY8",
  "key13": "52H9Dyd5QKUodLsQ62aLBHkFhPgQFnkj4W2B9fSdc3d4TpigDnhFreUant813jVnvs2xWxAdJKp4CnRG6938A6Sk",
  "key14": "5J3pbq16ZNGt6A9ksatcWpoBCqszDDb1a5BaXnF5BrWXwh4qdGebN7nzQ2DfLbp7N6NiEQVVMxCyFKRHceSdRaNG",
  "key15": "56b1YgyZvovtv2XhwxgGnhK961CH9pHdUPFfQ219x9Cqv5skPAMFqfAq7A3qJx7SWb4GAhuywfP147uiFPCbj7WS",
  "key16": "Y52B82ePhmXwX2e6RDe1ffS2JuEjo4KLFzBsi62f69UvcxBJ1AAS8HnC4DwSvhaFWHBDonJJiucCbLAFmgqiUHm",
  "key17": "3C13maAs3jJ7AdhVB6juTBEbufx5Jt5yD3odExVaFEFvN2GLs4sK6kTHgCureePTNt5CFpdrYEucEWrHBERGbG3Y",
  "key18": "4iGrdoAcHhqTUt6tqHkiVstzrgjS2m61ZW2c9C6oU6GcYH13DwVEMVNMiLgRwoKG7PeytBiEeF1UaPYCMrWE2mQi",
  "key19": "5B2YXydfN3gUybvuPbSnnS5LCzHzBmzLpZFCveCqzt4V4FzmnbbC8vFaD3C9ECmpgFvhMHqjV25wpcQr5WrRiFsf",
  "key20": "4tRwcAzwzRkG1wjQehrWPvjSA1SCZUWJKq4eQZwgXqCV2gjxXcK9RpFK6W81wb2p7jcDYrzUnxMvk9zCZnCQGGV7",
  "key21": "5aj855aDFKSaQGhKgk4TLb8N6W7gn9Z5HzSU1kjsRtgwQpLNS2jWPWiWuSXKApYDh1qq8FVrqbq6CHvVrMu6CSzV",
  "key22": "2vWR1pemuQnszSYxZfdQJA5YxAWqeH6h4q7zn1Zc3KovK5JXJzmF1yF5bmyTevJyLbxZhMVqy1b6EQKFVSedU5kx",
  "key23": "3Q32kf9UXzp5AnDrPqgz94Mq4iJKiMppBxDCHm8mQjok7jirFSP2aQNg21uEzZefwrToBNaFhD87GvmuokrjXK72",
  "key24": "42DTLPaDyiihcvowsebZUs9dU7USYHp4y864pofhH59jwGhxZy9bUNTEjx155aykJZ7EHrYswuu5PspToDWDoncM",
  "key25": "4ZrB28zdYuoj7uh9FxUSAr4kzZep2vwRZ74d9Bpd2QZwqUUo3ameyH2Lhg1KPK5vgTMgi9SJ1787dSE2iVh2cedJ"
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
