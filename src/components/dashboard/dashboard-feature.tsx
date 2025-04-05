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
    "q92AZBsCdVkDpLrkB8fzQtdV4UnZtgLez3AvvxaBkxiBt3wD9rZDbGs7bcsd9AZhJdUxo4bP2TrDotrbVqdF9M7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34oBrr42nFU87An4ryovwx9EHJPrDhpCmUNtSb3RXHcZ8816iq54uDXRUcafGmSEGm9ih1DD3MEdMpBa7kgnVjZ2",
  "key1": "4cThLNtsD8yfTgSonaZTZW5B2nXJm6qGFkn528uZ52vTJ7aPS3C4J4NrzcZzaebBbb76FkfD3HMVwsGf54NANgPj",
  "key2": "5Z9r3N1aP3iAVSiXdKZtR5yT6snZ3RECaAtoaBkCVHTiMMxhA5WUPjPhtrxwMSBP3rN6mW9yqn6F5pX2JXAQkVct",
  "key3": "5jN6Vf4VNn1Ln1juEed6hcW1wpzfzVR3XE1GpT27rocdghPDijs815bwjETRGvNLxc5Dt59hVe52vMn1tryYWtPd",
  "key4": "2crKtD26vhPjxiAj5HxLBY72xkJ93SF5ETMsjNvYVLX7rnBybvMhmymbB15ee74L9uAkBkDqDcB8XzjsWTxihaQL",
  "key5": "5h4WBuBPDNdhvqE5DYSb9prZyPWM2pjPNqXzxawsDKXbowCMcMspBrPEnUg7PziVZ2UzTk8U93V7eKix256tE1t7",
  "key6": "5BRgdjj1sByp3ofhgDcFAVKT6oB2fiA5th3k1Ax2LAtrh5WQnLbnq8d43VmW5uqTA1iimg8aVcvsExoJm4XvCczV",
  "key7": "5gC7yaEkVqpR8omJ3CkxyikZKufXvhkxg2g5He4Hfi8F3cZieQoUNXPMEPe6BpEKUpoWDaT3DuUmg3juBoNL9umj",
  "key8": "5ZtTbHzbFFM8kPWof5vU3BPorGNeur3k8Nqa14yDcT4tAPr7UixHvYbZj25DSCtzmj2XkWGyszr4bTSpDuRu6bAL",
  "key9": "3WwpMP5FxVMTNUxXRSxtq91maURrt99nCUYyEKh8NRSmbi8qNDXDSp7sRtbUyjLBo4CsskFpetHvZE9D4TUoS3vA",
  "key10": "1DSP87VFCjN8n39mMLzRiadD6qJqvomvvsuDDNL8oxwfL82w4JQVTeLTuT1fw17n1fJYCc3U7uBLJgXVDqZTRYQ",
  "key11": "5m4EMH6jwUjLGBaxyLL4nyLW2LxPDcEtJPVpZtinu4VWBABJr8yQzbNajwsqD3WDZsG5Cp7gd2RWLc79JWYNZCrC",
  "key12": "4ru1ZQ1My9EGLnC5QvC3cZLDTDuCbKEWh61YGTz9tNZecuAprbaFY81czEAme879Ax4TZnn7eDxTt4EsDCeJh1Ci",
  "key13": "3EzrcHQ9jLvD9RcMyvZWcRc2SeosyGpuAsxW6XhjAsw6cNwNyi8LY6JKMmBmJPcYm2vaY1wiz5i7qjWpZ2DNWD2M",
  "key14": "4iy8PfUQfyR51QEjeQUcghvscvXhV3NUtB4TzDQGnkWnQv7TwUz5ZN2XUWMLbeMsn7cRdi4JJgxBLUivAwws5xEj",
  "key15": "3EuCagkPnYofJ61iF9dgFgKFPN6qF5vVUewUA5xvmbnotqN5R4hLMXzMjQs4KXrAH2pc68ZSEzkdocA5nPWvPcjR",
  "key16": "wmzKMSpNFKZ7dTq7p1WwTXA6g7Ejz1dNtgGywj4mTc3ZD7hjro51sX5GsPmCzvFnGWKspc5Ki12YdshtpmRPinx",
  "key17": "UqtqVHJJpTAgGb8rdA7oF2CC2bpMUQTb4veNCLHvYAs12UMZ7fzXZu9tH31teSzEBUD6a16Kb2p83i4Qj3KLdGs",
  "key18": "66PSkCUYYaKjMpDgYSDNYFyjQ679cFa22YZA8Z2cU2xveUnmx4c6hP7ovPC77ALAa4PjQ8TuZvPrfpzu4XN8btPx",
  "key19": "246J8HR9fubATAArrJdGYief85gd9KTm1jdavzpWJeajWth2dr9ygAHqoJ5CnKJY5YoohSusf29D6WKkkprUdqoW",
  "key20": "3Xb9fTScetLfzu4wKsdMzVmx7GUfTP8yA1DaXD6nSQqYoxUsKY2JhJUq3ujSXVGuM9tTo87FBuuE8gpMQHyo66xM",
  "key21": "oGAy5SSWekAwW9m1sWRmLJm9JSYyrwGes5J2S1FBkMZNq8kVCGQaW53DdwSUUXnPMYjpnKEBC8vXcmHGLqRNwzc",
  "key22": "2E72HLFf8CxV3qHV7GQJz3zCFVAUNksWYdaMH86vTMiiGpcc9bnbBE6wSDtzQztJS8whsvHjBqtJeAxniXzidPUT",
  "key23": "2qu8m73mjURMHJLZQKyrzrFr94ZavhYrzZrsQ6DgFtoLJVZU8bEfZuUQsbfX4zvcbeVjdoPWaDpYpuRFp7GSbkpd",
  "key24": "QKeY5R3SRMLHRsq23nibptvC5ec1NaMeeNnk2EDaKSkBdSdN2MCt6jHRN1qKdCaVCjmZwH9uL9ZfaRPcwrsPzLp",
  "key25": "4X8YioSWhCU8Lpv8rY9YtXoSvUD3pvLpUvtvbbV69CDCEwE2CRqEBcnzNWAUfKLTP7oQ1jvAYACwRN4s4HsACxqG",
  "key26": "4QW8og7tCVrybMqD1KW4qS6t3Q3V8ginGJm6LcpSGE5zckuEh38pnoEApbHVfYnbwq1AShb4YUhYnHyqtmavKeaJ",
  "key27": "332R8zhkj81rsWwx1VguYUAZAwJD9GobvreThBcsmHQaaiHDAh2ebTXxkYDjDccp556CL6BcFTHPEC5zCKSs1bYD",
  "key28": "BhLF2hqcBXpvq9JcUVv2JTZ6BWpVmzCqt5EorwkVa8D7oXQtzqKA115QfGosw9b3fYsvadEG37wQwDcucsWE88i",
  "key29": "2pmC1vHQRU7nwb8gxVVZdpxsg7g12popWDPr213exWheM79QaiYU8NMJEYX8azg8VttJqQPh4nMHQsKc7W4cu8Jo",
  "key30": "2iZSv5u4Y8WFtXxEvkQww1Z1vRxtoJ1aSm3mX5GgW4Evs2r2uTCcK4MGDksB6uCvaM46e9fj2ZVZRPtSiK4Jgk1c",
  "key31": "5NF9sJB55vdnKUna9ek6Etx8YjfgvGcwGczHcmEBKXNhdeXCNL8mZFoSzRU96ZAX8gX6NXCY67ygn79KmuV62VSH",
  "key32": "4V3wfViPaxwFXsAqshEZGMfKgmmQRbY5KiLGtUazkMGcheeUzhaRS41SnMXe9Pw6xp2ziapgz9sbr1cyqp69Uneg",
  "key33": "2osP1Dr2qbvBLcHWHML2uyncc7ddjH1btCnT1ZrD4efD3q2dqG89MJQcr3MyQBXB4kAE2hb9DqusC9TTXG7ZZcY7"
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
