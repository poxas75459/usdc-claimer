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
    "2jFQofUhHi1vYqJKenudEehkdeNHAeMNF91WaYSF59HmJitdUeQ5htigDYNP6kRQVQmtfCjvVnbQNuthksh6T7oY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bsgmP524YqGMbknH4qLsesnNTCUSUK4EiAEBhfFRAvTQ3crmpeXkRosuLdq4UnYreV3Bh2vua7PkLHN6uMu4nxr",
  "key1": "5DeLosxWtrHWVd83BMKeZUBgqde3SaHY7XnENPMtSCnt6fFZ6zwiit1QrZ1ACyn4mmBUkhkUZkFPwmUfMxtmff94",
  "key2": "38yWeEm4x1mWTdKvACHkoWRPa5mJpQJ4m9VMjnzixZxwuuQgqvC3kyXfrCicmCMaKciHssBPWPsMiyMrVV59noCy",
  "key3": "3zQ55HEy3T9exFpBHcdJfJ2rJsDpBHq93PsRfMX728HZW3U59rDDrytrC9Jrb9zFtN9mRBxcaJAEwiNewHUkP2nr",
  "key4": "xGk7mQvxyd4EUfFwQfykt2AUw55fcw9iymZUuV1EDV7iuFcq3XQBPsvYnqvgrnbKbkuk1WkWaKwSnDqfmvEio2x",
  "key5": "5D3sGT2M8W3PGpueatxpC8FQrLafazzLVY4ho9wnDfQ4osBAjnNj2jUzdpAQZ2WvnAH3sz2vHvQhDFuH2RrJHdE",
  "key6": "YzYsnq7bXZXs9bX2XeGn3UyJZWxymTBCNXE2sa4mk6VouKnDkxDG8mF7SqbYugfDVsAfPnwd5SNpnFAGaPMdo47",
  "key7": "3uyk4kT2iJELWPbSw7wFVvFqzyVE8Bk3n8SksTP8kVsb3xtQ3HkS91hxSNTkqxgp2onsLN8eBpnssLDavznYhDEA",
  "key8": "52YLvinyXF65BPQYkAhfCkNiJvKtMUcPTijKFJCeSgddwKLDysQMRLp2hSt8NC3sXfwoucvHvQnG5mceGpiYy5Xf",
  "key9": "5WHar9H6QTeX477Zajb3fTu82nMWpPSKzGuwAP2Z8dabpMH8K3GyYP11YsTSg2nar7hXFPPeoTsFhyfRjeqg3swX",
  "key10": "4b19AjUF2pbUTbD1eU5HS115RRJKw3wN7M5ikD7tdU37Qgcn9huPkxwZZNndyejm8v7sgmZFhu8RgHTqcn2qtub1",
  "key11": "4rZT61JeVbGLcm51AxwxxRtmGcTQfXwoYnZ6edMDC2U2gygPaRUMathSQ8J4TjCWB3eMrvEQQCypjoR5L3uAkL95",
  "key12": "3kskT1vLzNLETTbWfVqBcdnjjQjMg9XK5cK6z1J6A6pKpRHHW3j6yRGih4L1HEM3qzbcGSiBR7EaXP86cotHJNct",
  "key13": "4uX5oeRuPtD2d5wQxSteK5hYwVoG2QQbxvSeMAwiiJrKoz8GSsNYavM8prgdCDxwsq1VQwab6oqz3aQhZdLq28hn",
  "key14": "58M1QjQTLftDUozrDYJ91eXCxFHT7gF3Y4QpeUhFfPoGn4bHf1efbY53SLE2soq4UaAcQRUv5vKnazKfz5wDaKhn",
  "key15": "3TooG4zG4VmSk9VxwcDXBXySsXvqXctdQ8AJM9yLuvoMsGbeZNmjVMzx8C5j2CreXAEcVnsb738sPMwhGWgrYBom",
  "key16": "61xFrNJiuS8TSBsAVYGYLwfR95hcorBCUG6ngj6PdqFFoKoSyiBrsReBZrjKcZq2Lo8pGHY8AXscPm9cY8PehJv1",
  "key17": "5u8DJzAGWp4LuCzychoMZXRMjn3tdR9CTi6jrjczyFBS29sLE2zEyQL1CBQyBUbvyxq2bRyHuY5QtHeW9ZvAXTb8",
  "key18": "4QKDEQChP9A2tEjG6hbArM3JW8MN2Ev1BptNZa7xwoEndv9sggqkjCnjZMzKJZQTzdySEmEg7MifQHX9TJ4J6Rcg",
  "key19": "4NrHMFVvo9GtvsmPaThpaVqMqGGKN2u9fi2CMnjbWjfj3XSwA5L1NW56HigothSFL1u4Z8a9x25ptwzQ9aM6sSD5",
  "key20": "5UcpUpeJbkjLNPc6AAgk1ikGPo4zomSm8nDb3Ucfaje1yarD15iSdntH4iC9nqQLqerPoLQ7zLDpZ2WS1AEACzFh",
  "key21": "47CiYF2Sk1esdWN5XG6x7vLgzF8xyajMwkRZdHvhDyZHYcjDnYNeHBvPD6LveuhdQeYy8dfymzXBjFgLddk1CJGg",
  "key22": "2R52DcmSZwXcsNGr9oYkzKQS8u21yUuYoVMZPF9Vc9m6FjVr3mxtaR593d8Mx8V3pdgunzx18C9q6rcDNMmZe7Uf",
  "key23": "6QuB8oUGpURfZt6HepDtt7YztGLYicWUVsQXY1eCUxgAmEoDfniDZBa98AGBmqiZQx2rL2DYHioaSvVP2HH68pf",
  "key24": "37MQ4YDLbfrn3tiB8g8sRPvGCEuetPjYak2gNQmUaK7ZdWqC611cmVGR6wjJY4n9kgX72q8qbsTRXwe8d4oYxXDq",
  "key25": "48DE2XRvv8DWHuUaUt6MfQK34zPYs9Hvui29CscFd3fJB27CVKijGXYQLRanxmwyhNtGsrMckaL6XkCbKgj1KpFE"
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
