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
    "375ehTXJcaRVeAt7ySTn1exqgzJzLponnTLM28bznxopC73ZPqoRLrRKVUmzrFabsraKJpD54bHrVucfdWGSPFwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aq5sniWccmghmVfxsk8gHo6bq45zseoiEy1kgu8Rg2WGCQSVJ9fdNEXh7DCn4BH86SfQja5ZfdUmewC86vNCmbL",
  "key1": "47aLrHuhyHYFoinqHPsje5sZeFgSE5bsoKmcjEMJrEs1ZpEruFg5kiZbocWTaXN8zU9e9shZ7wfAbwh613Vp7xHu",
  "key2": "5dNDC3MKbEN8rog6ekHCGbmQsSA9BhqG3aMwk6TJoSUim49XPiGBPAcPd3nympZPkUu3LMKNVtPuTEi8ncvBejkG",
  "key3": "2m85uRDk7pBi5Eir7DAJfDojSR4rrqNX2UCLVuBTdKtxQT6K2zN2t7TDYe7gZyK46N1m399QeEWBAzjZfPQNBf22",
  "key4": "VAboZvnnaLvfvbWsxhwE2Pa8tSfNAWnS3yfADXP2Kjp5X9LFVb1HQBbmk1hjMf1KHKPKchWqfbcib4aB7zpVsPf",
  "key5": "5J1s76nAtP2QxxFmBwMCzhhAPGeKphsC4Ta9MpK4BpeGtAiVvE9saHG7MmH1UJn2FqwSST8PJtkhngPSQTMR1w4M",
  "key6": "5sxqyAbrSGQDLDvkUP78BPhRDPrENddmbU4cX6k6EJZyZDoB3uEpfDVabYAodfNLpqRtisKDQyqN1YcXW5aLZ5qk",
  "key7": "31NhBHBErc52JXo1aKydeWnkLijrsS5b6u9hcaPc5U4bQGAsDTFq2H1oLvx3q1b3Sizomiv1jkef9Rinvif5cWGJ",
  "key8": "36nTCuTSDWDJejENK32VPtara8yZbdLctECn23K2ixRwxtvAAYyZcGFcT44bDcN26to5g4Eb3t7VuJxg44636V8q",
  "key9": "2m9thQoJaKwm1MhLgNbFRDaTA7Ns3tTRBdPceLDhuYKmrEAndqLg6TxYWWCY8PpT1Ghh2wtcCqvx6jBz7FtjWMze",
  "key10": "5qaSTYiWR1bPrNNcYefh59y3YJ68nhUA4xXXgyU4wS5R1b8xQZDd23xCNWJhxL1PJ8ccdq4nToMCgDnR8QnQds1n",
  "key11": "4RYJvSHqC76bhFHUKUDpAu2paSBrPEHe9cuhFnKsLvGFnGrvVRZAu7ksmrxfPUhkFfwEJhTn3Vm3PHeJB7bjWoHN",
  "key12": "HUA8gfstc4NaJp2VZkW5SjknVg43fssS7FRdcprTdzMCbwngKVwksy8e6kSMZGm6udhp9EuDZMZ2HWUNyhcKJb4",
  "key13": "5eJzPDzKhoPUKLv6C52waHkQ4gJJtKZtNeVVRuidhgpY1KCxFXJi87oPR46b4vVT4J867LXN4qtmKprMDYwHQGL5",
  "key14": "3CGxe47SftBeLj9ugqwWKAwHY9LAXQAWWeCeeJ38RAehqaf61gxybiz1SgDcoTpbWDetFRsVCXnUfw4iZjWr3VQK",
  "key15": "66vDMux8b2k69E5gZMRkoDxmNYboLwTWtdXCWyaFUwzquNcRgDBdJCG7VJKpKT99NzfrRrUofTs1ABiHk1ruSWGn",
  "key16": "4JPZgeGqu1ALmQh3ZJ37hwwxErWymZexy2UGqLLSYKKqJwtJKs9wGutjGzJ7G6fuBsrrxX2ZsKTXuq3fFUy11Jnr",
  "key17": "3aYXaUzoy7ZqS18rbAhqZjHEgt1kKMUmuSraXa1DDHeszzS33o2L9VC1x6X1qTS7QkBg4PF1ReZBhYrWwhtJdUEh",
  "key18": "vLHAZKgB9veTj8ioWqQTbn92u5xGBGSatBCqxT1RMRSx8SsBRvQMwgfaoNDGxgbirnyepxG3E4DcYcrT4qPqygm",
  "key19": "3dE8QCJwXKm7yXDsDLA6CWgeef6NkKWF5ypz5QkRujfmr1uL2AeTXor5eCAE6TVj26uqN5AGFJ6GBuaqDb3hGosY",
  "key20": "4icRW1VZzgMyGYFzxexDYThSeBFdWE8f7KbD4a6DTjH4ood3vamkd5w3nCoRx7dycEeEqDFG6BBUABMcFnbYhYy3",
  "key21": "1Yt21bXK7FycF8FJkz93goNpB9Hmdr9oaS9vwyXvEqjvUurum3Bw8RjcsbTJNgenK2qU6gn59Mf9JFWCwUeapYs",
  "key22": "4wYpgvKiiHobAxsicuoLrdRYhB3R7gXxsobRr66n3G2bwTb7kEfBt7NqN8HrC3YbXn6HnFBoU3sN3i48847vrBku",
  "key23": "3EQtwog1wdUe8262ZJ2RqkrKtrAFSS6tnPjG4thyDmxpjNjnTznSTNzFWV5vW7zpJb4dZFC1WuMSFogzr3tcBFoQ",
  "key24": "434yoN5zc65RguJn5q5JPJNiLn6xb7uPJsN5TjeaQh3skec9a64iBchbB4HT1veq5bkZUL4ETaLb22uYM9ZcjoVR",
  "key25": "Dc2B8CEJdkWPAZShWy3AGuRKar61UgkLdcRDLSqmW6Cm8Pda7Bu9nmCJYB3VPzuQpui4KDsQ91NScMQDJpkT2Dt",
  "key26": "5xsQarezWuDk5TsTpm7bFfkmpX7ss4w9ag14STSZxN2qzPXdRRAAbixmMCDyKNTFVLFaQPxRwxCX8RUYAkZwW4m8",
  "key27": "TycQTstX1atLzC26KkKdgHGYJKFGCt1dMBwGGrvyjVGPkeiaeS5UMsxhAr7BqhxWdBA8BhW3pSyXkC8re9XV7LF",
  "key28": "3AhFFoA3huqi8YVu7hCKKRa2H4zvoxurzfgGcuGp9MW1WZzMqeWVBUvvGbsfGAP9DdBjHRvPTKnDYcCcWVSmwtgY"
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
