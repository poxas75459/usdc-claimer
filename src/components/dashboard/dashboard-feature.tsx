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
    "5jUrDxhg2VMiXP5mkhP8yL9LyK69DbHpPQ7gagsaGsKbVYnJziQaSDnKCSh2FCiEhHra7ooWBaNipkMrNWQCQKsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CJeRLP9x4c98CKrghxxtsJiQKzcHUW7Tx9NpALDLmkghcEDRKHm3oRyQs8qkYqg4tpQWQiDfRuWLHSKRgD2Q8yH",
  "key1": "RFiRgQWRz8nqQeNQy5avsUa4QcGcEpnSfEpb4p9z1NHtfRMfUbCoDqutVL4TgsQeF1rp2EJy5zTFihExVKdNfPn",
  "key2": "51hmMmbrPpBSJgHxDXD1dvVLW8DC5bdHrJtGDNvqDQhN5vKC3SHWiHMGaVGZaXR6TxfQ3VGckNyJwdEr5utwUXeb",
  "key3": "4dbsia1atgZq5NFUcq6NH9ZCoLnaVgthwcxrhg1oBCu1BZdLchCYdjKbD8YQFsTEJsSZBKfFmsRnj7BvtTJfkjtB",
  "key4": "seYkufjJ9kqcDwHX1rmR3j6PcYQhmmxSjtMfiRF6Ezi1ix4TCy4eCvM5fmmrmjGprKnAJUxCe1Uhs5MQvGyfqLf",
  "key5": "4c7Ty6iiL12io88dME9gsnVrEKhiUCXcYQcJdQNn1VSayDSNpSHqJD6fW6iNbMagWqkgV8P1dJmNt4XuSc3fZu9X",
  "key6": "3qMMSFwL3zRBymSVNaSJVEcXg7inhSuen3qi79f229oM9rpb6FwJ9UinneKGxaBugBdFH9PSwHgxYM6c2Kf5nny5",
  "key7": "4iB2mr4rYg4EK3v2DC6aTA2ueSNawff3tKKj5d8BH2KfVHExrZatSmGm3Rhv46VFpht62DZ9QXX4eJiMmFE7FZpH",
  "key8": "5HUAJS3y8NjprNktVmTQazEpvSxPgsJ7G6kTRTKnfJebnMUuThitgxEAdJgLW63VbKvy1uUMnX4MhyNkGUn4gDCU",
  "key9": "ZDD2qbte8JsJXxYG5cyqZ7hL4oChKqqBsP5Sdp2Re6S6XDKHJExZjEVuwB3J2XAbLyb6J3NRBdN5MPft7fttDFU",
  "key10": "3WitJCeqeueju3epaGjyAZdmvr4MJ7HceUMg3izAqbKrLG2HeR4AH6cEPPstvB4RaRfbqF1Dj2JypPQbkcL3LvFs",
  "key11": "BgVDvERtTdW2rkwMu5vod1xnPwPPVJFU1gTnT6ne4bYFJJYNehcbsq2v6sdGrwYTBei1qnqL4M19a5EnAj1zgAv",
  "key12": "4xrzJEBrjpnJfvkDpZXSS2STpbbEKyJz3tUS6Bb1Pgs6y4jTQ8xPistL2wE55vbiVVs1XdRG2FHgifaLYsEbAjQm",
  "key13": "5yN72XTExkctpEzJ8D1UnFEDYJgVBUwpuazXBvWNpurJGwp7RceJz2UDGfQKkvLRNvcpQTab3bAMxVGW2anmHihy",
  "key14": "4rhLsQyWNcJQHoZzFRS6PjLGzT64efZRbqwjGH3Tz9sSj67etYEsLQDUFuf6M2nDu2zLz7x2zFidxbrGdcmc2ayE",
  "key15": "2d3AuEgLvCAJfsryxZNRG3TfBL3oKSvyoVgAWMKMwoeUnjbGRAXtBcsgbpE7WTffxrusrvtT9EpWveXseSrweLLW",
  "key16": "4xHnWL3xQXfS3J95iyHigEbXgeoAug4uUtur4nrumNduEFAgH1LvC9TGJYys86TnLCTmdLBbogYk649BMYwBeszj",
  "key17": "4NuN8ucwLUNN2XoEpFBbWVegsxLtDQ6WDMaL3VHeBonCVRm9VHCKGcbBMe72Bfgxq8Ucm6MuGLEAEG5JMAx2bSvo",
  "key18": "4AvsrUfGTdEAaa1fpkvb8PBwHFWzBKiqyxtMYCgRJiCsXe9XFJ3YkJsszQo1yRkZV1tZ9HQUKMVSx871zXqAtRji",
  "key19": "5fe9Qa6QeLbmk5PA4KSpS6afThYTE3hXVAFfejsYLbEV2FcgYXc56nm5wDpsXGhSFyUGKGzE3cRgDR5My7zj92ah",
  "key20": "5yC3v2bbKL673vMbod6Fx4pr4BqaifSApbc9Xw6QNnGyaoYoaABJQi2q1FhC1gRyBcdKbWRKRhjsWhpKqe5cDNTJ",
  "key21": "5oXPLoiZwdw5p8GTmLrtRP5Vgy4HYirzcWYPUiXyTDb52EVnUSqhJ4xug9KAoTGTkZF2Qp5kXanMbmhucVZCTkUQ",
  "key22": "2Qi2SSFA5yTqgd4fGyzRTCLFYDU3e4DcxvifGnhmXtSdVpBhyPRviJSXmtwyGmHPwpcCTQBGVFt9BrKyQu1Yyn1d",
  "key23": "4MSY54QBxZkb6cyCpUWFNk4zymFZTRd74AG6txa5HHNoXzJxEwTj5fGMrjFJcpb5xVfFaZ2XiH98979uUKw8oRFQ",
  "key24": "xib3bxn7qN9rekTJeVNxpSnrwwHN1JbuDLgE8ZQsocSiy55C4ykDJFGvYY8ybs8zgYiBX5VX6TXe8U3uC9nGxFj",
  "key25": "5zudCcC4Uy4um9BjxWfvG6L6xZjxJtLEdBChk4cZwY4HHSb9FMGddiBwqmZG6T2bL3aNeZ4JBXoW3kJidQDXTJd4",
  "key26": "48cu82SvKQjnmERn1yRt4NuQqA6RQEH7rjXfoyDUJuMmzv6C3r9cdd9zmeVK9ZBqnn3d2kgPCQhh3fNutUXUkSAa",
  "key27": "4Ukma4uP85dkG22eRoXxP5qHwC6EATa2pAWptpio3TYCtC1NsifrhhGeWaribHAn1d6UztPyKaypokiDEJdA3r2Z",
  "key28": "31C3T9ydBznfn54nZudV5mR1xXiSgBWz49j2fZJ4GyjFHQkesFseVsqhutBy8N8LJiLfDQ14i8cqLjn5w3R9vTJA",
  "key29": "658yWGW4CHzCSjLZV5169d8R7QFJPjTBfv4m9PwjzXUru8ZX6WT3Y1qpMgG9g4x6dnvYD5hd4LFBhpEwr7umiVLM",
  "key30": "2WehC5vfkj77u1AD9NFtJREvLQJrL7RPSw5Ld8KAEjMydaiPgmgSf1F7Uparuiapt1HEHB7tbkQNg5QKcEabcTD8",
  "key31": "5KGXc6jWGEL19dW2qo1KPpMWDrZDDJa6VeLnYK7gwLMKRZTMng2ukxshu7vqcPWSoEga5HGCYajwUen13udvVcGS",
  "key32": "3wz9c8yUkVa55NMtaJgNrqPAyDytbyGRhNdqqYnGSro7vLVTK69gdJFe8T8cyXQh6tNP1cZxeHiWgL6NgpUkhDGL",
  "key33": "4jbXV5bFBbrSY7RTiFruvWGDKc6HCggT5jMq3nWFG9KXUk1of6b4gdL3rLRhjRcEM8KojGKDEML5n59LwFYmZmB2",
  "key34": "3KTRA4SzNF3hQXdMqC4AhrFFtDL3y5ptwpFNFErf331kTodvmvVDZHnvwt4357YxMJP3vYptHsWdo8ShBLivF1pd",
  "key35": "41W227EYQmhFJRka4iHzMLwq8RWkPGanXxM4TUDxBfHMuHXBoveedyQJjC4szkRTzj6SnjmZvHM7PiaK431GJdKk"
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
