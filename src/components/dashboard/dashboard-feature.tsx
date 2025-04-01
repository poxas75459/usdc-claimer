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
    "5Qa8FuwFED9kiZw8FkGgvwAMadCyrMZozRqvWZcWbUyPVXPuwFYuMPMumTeoUhATShRNLVY4mXhoL959qbbU2S1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zU4EY8oye5eLNFcL2HmMpLGtvcofuT8Y5Nonq95GsonsBcKW1Zc2JtmaEzmGJg6x92HvoRWnAAcbY1NGNUef4tw",
  "key1": "5cqZcDUfpvLERN8qb2UMp1Nsy72viZFT6hHoLqY2WdadM1WSqpvPPwhDqGob8xbir7zBXom35FtmWK3DjqSdEmUg",
  "key2": "29iCud7jWJz7LWm5XBNsn9koGSuW5n5TjyrVG9iNzaGUsuSdcTaQjrWr2UjpMwFRV1HnS6DcDL9HRAH62ZUrDb74",
  "key3": "UShpAimHmn5i9amsn7H4tJgZ5o55oboxa7zFRBVeithtro2WGv6wTuY5mJs8qj8EUtHM4R1MkCepuoyiQ77L3hJ",
  "key4": "4H7peMcSZiu2jG3XBBHHBSVb6uYNvaPEd1pkwFHZmJEqHYDtNXxTZbJZ3gXQzGYmuwiF3pWRVR8NtL9wdNZmsqsQ",
  "key5": "5WrscX29PwprjKkmmMMGsyFWF7FHTwiruWU9zaYXL4BpqS5uAK6HBqbiGsYmmtRx7fgztmaDUxFHFbAXWHVXULkZ",
  "key6": "5fXfQL5dALLCFm5Ciqeg2jzpvcg66ZmopLAqkFU2jSvendodRVWfweLC32NRJHQTbPMV8RJzpN1vmhHypXQrC59D",
  "key7": "382uyAR4ByxBJcY1VEG6HUh4nMLM8pDPcWLmiPzoQGA2C6Aq8AFxPbLzdoGUVkoFseX3mfnu222nZWvib37Q5Z8c",
  "key8": "2QP5Sa4eLP5ER68fCoEjUPN9hvkobudrY2sE4H4S9VGc9BYGhGeVGPqXma1b7Bai8ABT5Qxojp5wCvUaK7781w44",
  "key9": "4qhmSfu6gYeS8BtUr6QSyc8CpNV2wGaDrfzEGo4CGNkC2ajRV3cRV55WSePQmEsdf7aPh8n8k8JzpvYK2BFug4bG",
  "key10": "5KRua7T9QGJhpgETfmhvZQPPhVnKoMQgD2zn2BT8CVW3i1H3tMo5cinWxEDvnPLq1AbqwgnzqAvwEnmKG9t8r1jD",
  "key11": "2vu2zhom9JSG2Wz4WmqPkzdesKM4NdNjBXh9aGgsxU8TRsKLj2wgxcTkncEg14FgyUZPBg23q72VaGtC99S3SsAx",
  "key12": "42PisgnkiXYvxnbYyTg1QoU1DRhxt7HzTfhG1F5sGfnGjRFAgHeNRdA9H5LSzKQEeDwqvVtbFNszKLVxmAEVFpwG",
  "key13": "2to48HJRkKY3oxbecUGUo7upsbciXVqkGzpZBN4ykHcuzEg5riZJHm7ZdPhfXU1NhTBiWvs4U8apEX62jFHFrZcx",
  "key14": "66nN36CSKCwU2qEzJpT6kn6bg5Nb7PTATdAeVAdrtxwJk2Ty6uC1Jhdfc6e1XZbm9pVy9GWVQx6dVtdSFE9xNwYz",
  "key15": "2kYJR7wWV7kZmTuLGP3hNqm6Ca4ogjznd6Vr3DLzE3PcA7Q1EJtAok1aMuUUdeootjNBEtV3dpw42xbtBdoWX58U",
  "key16": "4HKKDKsyZoNfFjnphLrT39dpchicgjwuq7Pa4mkwMxVTBDtaJ5hUU2GiQm1wT5HFpW3p6d7DThnkUeAB4LjJZr6r",
  "key17": "2W2zTn8ufJkinppzYLHtoKtCVtgMxG2vKom3LQ43PRgVwWYcaAQgkDgfR48VvmrdHSSDiMnjuuHdk8Fef4RbXF2V",
  "key18": "4XgNWuGs1VfMSDhcBz1fF2vqeZVNAicYiFUAWV5MJgYcdNQx3HqJy2osPFb5oY5fbjqTcwKJPSvmXsSgrtZgHZtk",
  "key19": "4zJxy6VDwEgc3TkEWqHua6zFhXajfh33TC21LVqvcS2q7WLx9azBqd5oJZy48AAWrxi5mtMET1ZfcUdyL6M64asr",
  "key20": "4AnTx7KjyXXQgCC6ZVd2ird6HVmjreYGgo2rAb7it8SLKE327eXpQUqyGzMjxjqQzZmhCTF8Funep6z7FcZCyGNf",
  "key21": "2kTDtbFSDeVgrBZ1dBpJfr7hg9QZqVLEqHgFyZ7ya1K8XZGTWHa7itqoyUxkTdEfsJRxepF9wqGhwZDiEugE8psU",
  "key22": "5gofXaTSHRBexFFe4cXoKXGys34rYRNXBFJoaw68WBWXnMhBrDKBczeTwwQ4HVyyVLevckgCALTXhv22m7ZH2EXL",
  "key23": "4KbPfsmXF5WCzR1G1CWtaj8V3ra5JjfQS9kPL1V8Q97fJfVeUW6fgkDU53puUUektdZWW6zVULgj4NBqEtgTcSug",
  "key24": "2fi41gKTaRafNHJx2aym5emA1ZUufWEPyqgivYB5eU29Vfh2jd2CMrVnfYWAVS58gEr2XFaoxFDENgrVhQvzJmqm",
  "key25": "5R4gaoaKRrD9ucZ9h4Qgr2LLdLEivEVvvHYVSGr2CsqPHfZT4EATtVni1ikdwAi8w4h1oNu49Ene8jvVMM1vhjck",
  "key26": "5u2Xp92sVZ4A49zmjDSKxGUTtZBeDWKGftLP5ptfpt1Y4r2KuWrYjBLUZD4TWu7wViXKG2xf9FZ2JN18fY6uFW1D",
  "key27": "Kc6GQ3KNG9ZJqt57QE56nA1JGnDR2RBR7neNKQPEs7MWVmhkuA65Dtk2SNpy4Lv3bPmzwTLuJi6gGjDVECH6pos",
  "key28": "51k3C5HvEDDQS8C5DoF9LrokKwkoQxbdbnVnNY5jjRspNVJqMGrEotbnUnvBWVSnrd2yXpvib1dPFV2c18hBe1wA",
  "key29": "21cFLdcU5SLFVN8DjquxA2Yx1UtiXbf26DPL7V4WFuYHeZummmv47KNiCRXbrc9yMQmrHnfMMtwY4EyASU6CnTnm",
  "key30": "5omuLj5t5C6c5M6wQbKuJ1hE2bwuYpjDCACa5zZFAdtBTSTXAHL2CFZHoWZwhpfcrSfuLr4mSUjvHrD7FTJzsD1C",
  "key31": "5Nw6TULc8zptWwofKQ8ce1Xgc1dqRLAuBbrHvAaDVbrB1b2XP6tSnTt6v9K39JeAS4gxHwjDBfVkUPaZEHhSKEUP",
  "key32": "3bZzojVE5sDEFhVtCwKdqjnHo7ALkEeUoECYSfUZvTULi3EBkMQmKVvSR4wnrpxJ1wJzNuQchTauMAs48gayT14d"
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
