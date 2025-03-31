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
    "35Cc5rQwzhQBur83y5kCpxiYpkZQSjPGQk4APVtBkBq1ehxCkvQcouMasUcB3WHHb5AtFrnZhTTKfu9ej9fbp6TP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z1GFRrzcQAVdSAZVvQBeWrm5EXF12oikJ2yvfk31ZVWXBAamticcPrcYwDJHYJ2tNfAaknKP9PBQgRvR7KE3FuL",
  "key1": "4MVDPSnsuLaRoJ5ydFzHikRx2zPgTBgFD7PDbwepAb5SuMS59UXht4pSeatVTmK9t5Hd8A21jdrhAVzqNirYFnVA",
  "key2": "pun2PeJ99U1MHizZeCyNATxfnSKFhtECeV3VUwwDXkd75AnxiQDm3YWJRSbzeScGRKvYbbdKMZtfGyspRn5Z21j",
  "key3": "58Tke5L1pWxs8mdrpP6eUj4YvstCP9NxU76tRZqa9qjPwLniQpLsoEY8m6F7cLFCPVUXWrnw3BcuFXkAHmNZ3RuU",
  "key4": "57C12xYKKH7NAXPfWr4yGnsGNX5ec5f9s2Y3UrSdtbm5gDkoXnfVsvB2997gK6h1ZuX7QscyFvF57BoHyRAk7uQE",
  "key5": "4RYVrWeQ57yL9xiiJKNE8FKE4d5LJW3sA48jTQ3Z87cdHFPitpbP6ekcAuXa1bkkyoHYK6mxCPuLCmS2kLDjFBJ6",
  "key6": "5W6wCtUDwvEZouv1RLhwLhWmFu3HhCuzU2Twk612qD3HrnfM8jNTs7pv2foooFEsrYE7m9hm6Vje7v9t2vgQSqt7",
  "key7": "3vxjWc3H5VnYLEG8vYrgAz2puPzUDYFh1hC3nyWrkytTcFQejYns6eCX7X9cfGYtSJAFVtit4ssv5NoVE95j3nLZ",
  "key8": "bPgA15S7U2Q9B6enGFoe7LkCUHXr7C64zAwTU9qLdTLvfoGx3Ee4TdmR2UpFbKt3N3LmdUVWijFJNVSqgJ2XcU9",
  "key9": "4S9UnrVBhWPxPV2xoqDgV7dGNgX2W8PSFneRsjivacHLJ6Kv72eQEi8AWtQuYqpynTpD2aTC61zX4n3Tj7WZSpf6",
  "key10": "2YbK7YmmdNURNKbRJNJta1fPsdoZYXY9GrGzXXFQy1WQgiDuaWgkqtsLQafjoRcC3TLM4397F6PKa5a8T1SoGJz3",
  "key11": "BVeeUsq9D1bjQawEhWSrKtLfEVqg1fcxSU3gwVB1SxTNkKxbCiTU5pNdWeWMTC3qmxGnM1h6cknC5AAQUi8ZYFa",
  "key12": "3W4Q5qq2b3j3Gjt3FstDpZ1DnVGcyoVr51kkNyLaBCU5iY3LhM1DWWx6GsZDZJMyzRw4Sv5EvS6tpWvT5wEpbDYN",
  "key13": "4pA9MWnv8pY7z1WGtkZ73sGEXco5U31g9V7Yr6Dhw336dNfiQj7HpKVrQyAsy2M7CT2h2KHNxrgygUpBFv4BJ2R4",
  "key14": "1Ki59JCeSxuPjeuayzGyDXT2emvpW41dTvAmXTQnGNCJ88nCZGzs1HzLowQmAvTDWnazNN2UZsbxrhg17YsSTMa",
  "key15": "2bdjQ5QAaTnRpMYDT1x18X42KR8vv9nnRe5TqhKur2Yx2yLBdmzpR4zZYQvT3u68qnwR6iTR1ft4xE6E6kXiWbhG",
  "key16": "5JK9Tjn3pTmbz15enrQHcVcRwvG1Liiwqt4gWt1oBp45xfrutSLyjctYzXzUTQwTojeveQUKJq2sp4bi1atN2CaN",
  "key17": "4ZprccWjfEsGn3YJ84VTPCB86nRYRUJptcw68uzmnJNz9mJ1WzCWhsT3MSXNenLLocYsCGzYkocBrsgCg6gbGQco",
  "key18": "3tddUpbQy7fSGQ4vG3WqxwzotUPxN44UuY1nsEFLMTRC817W5zMgpY8oXNHFtBsL9VrRMq5Z9AjW9uaThxwx2A6J",
  "key19": "3FDn6tuspBTtxRTjRqF3FZ2CnUK2A7yahtdRzmakyMukcF1srZCe6aM6CqRsaKydHYeLoYvivJzYthoBrVoJLyvn",
  "key20": "2jmxfX1Zz1rhUBmP5K9GpyWemQLdWVr1we3DMUuFG56uzRjyhCYK5wq7TvLXA1DqsFuMxkikwx91RxXjMfeeTPwg",
  "key21": "67BBJoYfXmCEJmNCTPmGDcL5si7ePQ4x11moxc1kDtzTbkmhYCJwWwAY5TmH3UnixQgu9FBirHJB8ejyZm4yAM1J",
  "key22": "3vHMXxUuwjTYr8GwhRfo9M4tS15JkTcwpRna1YiuCQjW58pn6Xps3hp6xqSBmUFezvanybjKBbq1wxxS4Zo8nrA8",
  "key23": "5JW3sypv6u1TECyEFiuyuGuifpWM5jBksvanBTSdKdHhbLAbeHJ6cZWLk3TNNGinwZe6Aq9z4ZYfZmPim5trmaXj",
  "key24": "D1ZF3LTVHnikFNBN8KQUBHEFWTj8rDEU7hKj6juN7wHRtX6y1HrJ2pRu1yQi6AmMb3vAkbR1h5drpT3gFR1hQH6",
  "key25": "5HtVJUPsxL43XyeX5JT1TjzuuocEW2wLAiawaZJNKxvzTyFzN2DE8F4rhjPQDzY9d9B6xBf1mXQ29yPrqSy2xVvx",
  "key26": "29DXtD52aupAqY3EeyTiVm2a7Qy5KMytMpShPvVurr39FHKsQLnTfycGLr62KCP3ZE3RFueXVApGDgJSmKVHUpef",
  "key27": "5p7S9uqAcLqMxYFeivFQJhVvoidFvZLHgNUZoSpRo9Pb3TJKYvDek413YNriRbWJm6Q9UwvEG6dNtFnhVGucdpKK",
  "key28": "2L4Vyn2mSgPJhdUnkNrYAnr4LC4Lu7TU67MzExgaXvfEZXRrUQYpdcDeFdqMFHTt6FLFjBE28DyBYBmVhNmuyjAN"
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
