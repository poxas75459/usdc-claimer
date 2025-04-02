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
    "5YDup5KkRH3J6JCsDECBZP3nZpt4rCmv9tFq2pURmYoRrCRm7YhVd3ha3R93tmuCGHf1R3DnBDAKJLwzJVGdz4mi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tzu4yiqMicPYKtCx8G3iqGDpX29fjsqtPWmuyG4NBMoPQSBzL5hVJF1HaVMKofVceY2hkraGy9sdXU1SmbJ6LF9",
  "key1": "gJYPgsh5KaUyAT153UFRiT2szdfBQicLy3vECJdDx7LLzMXBTBGVK4T11xgZEjqWkXctcepjruAsS7tFWJgMhLP",
  "key2": "2UFqbzoZNSsDxCednzgsbcpdSjQpVwYcbEYrWnqMoqtPEExmYu2r8mBj34oK6tfongesVkUpbC4BATiJJYzo4NAW",
  "key3": "W6HvQpYfEAGPia6iP2U4v8kPEePQCkFk4sQqUzFYoAYtaQ9LcX9JErkrW2WeqEK92tpqJWsgRErToGK7RRrqKad",
  "key4": "4CHW4yDR1UAbSwTQwx9s2sDSbhQytsu8nyFVU2p65Nfkd9qGRQHLsA1JeMi1W7GrhTLr18NmHuEUKQ4hraCUnd7J",
  "key5": "5zVz6uJLFAxEsP4ZQ5DtxkUt5mYButdveMFsyU7yNky74aYXC4pRwGtzJnC4PAPN6NFUfLrNTgNTyHRf2b87zY83",
  "key6": "5sqgSMJonRWw5F7deoJybUbYDusg33UrCBN4FzxRR4yRkRpDwnTQfrxJ43uCH89J5JQgawJmBX8kaKXpfnmVyorr",
  "key7": "25TEd4AaJcZf6MS1DapjX1GvbuAeoApCRpz7sARHhWDKvx8gZ9hsNP7DvgqgbAQhwCcjy1HwEfYHBPqDopdrAgke",
  "key8": "3z5rHdUbyUnJuVuR2VNUtoM279xKdtujvz5iQoNwVCakBPPgo8N4pqdY3EXHv1bjUReHkp2fxCfrzqiYkgkHEzoK",
  "key9": "3jX4igUUZezjdhkoksaHebQUJmWyiVmXFQm4KS3Q1PP2yDatNpALUKeL5Cx9CbHSzx6UFRcsjT6aJV5ZUNzc8Afm",
  "key10": "66mjdXffUdYGYnvdL9gaobm4vbTvTQYQUMH3ZX1uz36bLnijRVQaM3tmD1Qa5KMjkYZrVMtSnaP5EbrAGd5CS5n",
  "key11": "xtmyWmvQ4vLVFyauw9fKC2MercY1whmWQxB5bSWYTrJEA6h1d2nFNguWUwcAJB9PNtGTkucGU1UBCmKbap5Y1gk",
  "key12": "26o2t54ooGELnGdyouR7MbJVMsSF323rfNRUVW5wXobchWpdS3VFtnH98TMb5nZynPgKQTMqDHXjnAvPdFdpkRqh",
  "key13": "2xjXYdbFZyHL9vMfLpUQGgdMSnRF1o13URFZmwj54EpaLAHNQKbsCB6AouNWVuotUHwWqLveyDp3Vws66fGhchYG",
  "key14": "4dg2X38vxpsyGjPbmDGmYkzEFkBgmn5ZKeSuQcJwWcevzd6NYfwM8xCQHhhg2SbWDt3rv2gzq6Q5VR1QwtMArqwr",
  "key15": "Ybxb8Rt55XJKSnG6UNutjj9hKeJkaZpx9AznsrM8rRrMZP1BzZTQ4iVXoTJAk4ehXHrk7ViufpTh3R2vLEw2Su1",
  "key16": "2uCTxofGMpXAcVqPVyzo3CcXPfSt4rhitSP7nbHSoBGQFd5CMUzoTw2AtbfVqwErNJak1eavFX2grQh6Lht9ip5H",
  "key17": "VhfenN7oKAai9tXPQ48o8ZqTF3BqB5a6uKCfwzSWpMGaCJpCRHpHYvEk7w7WKSc2rGehtmdCj7mGaVsJDG9EKDV",
  "key18": "4orNw9jr4JFUSivMUqfLnPYpYZBH3zPnw3p3SsN3ZVvWARiCwuPfkhafEVUvfQQrp1sik6NQ8XsgUWXxnnYSoMHf",
  "key19": "5kfGpJiSgjajGipKXnMTo422G3o7Du8tSgHFxyZzGchfZz4zqAHRLrisaQz4GQ2aE9EEPijTRWiuPoCjhhTAp3K2",
  "key20": "JkJ7fhkx75tZczwyJDw8JhZSMQJSdC12mF4XbmxutCqAnTRg5RraBfKs9f5LJ9KBWqNFJ1zTVcwPQ56ZJi93WH7",
  "key21": "SgVDhhQ3zRVDbvL77xhUAujUDhBEMUYDkz7G6uHZi7LXxf9UMZ7jhVGYCxN8qp9wcvMShZHAJ3ovb36A8koxxWU",
  "key22": "48ojP5SNE3xaM8twKy9JN16JKCqwQxYhK3n8AyHSCYmRL4VHrgDgUTqZTynGnximPur65tazjAiHwiNhBSFMpwPc",
  "key23": "FaQeHc9i3KECSakE57Z3GDr2qkT5MzHJB2xWym7kej9L4cUiiuX4JatokeiTpQGa6RgZXBygeDxH5s4nKKaueAQ",
  "key24": "4t9e3Vr1JJvEQ1pUcy7LLH4KjfLk2af7nDnzqPeeYwJCVv4qqg82UQemCG9MjtVvAoT1PpWWUH7YzTy5Wv5Uy818",
  "key25": "2amAbU3rYSpA1TVceNF62sk8xv9iWSYZGzKaufnjcurLN8SUAftkoFwTmFDgbwMyUT17SqMgEtzhDCHPJ2AmzGyi",
  "key26": "4KkHfoMZjqUq7VFoUBwUG7hh6cRR2Gf4yQjJ2kxUTkjgq6mHugTTRi73VaQUQXmX2DGQnoBtvt21Aoe8wpyNAab1",
  "key27": "73dVE334ix5isZw13Ept8YXfB22tbst9ecTzk9sNWRTnuGM9ABNXY5umSFWEGcSzRU2VGPzJXys7hUcwS7CvKEi",
  "key28": "R4zJ5aeuQGXFsRwmaCvBmLSQgmzd1XX858xxVTpP6muptKkUmRmxN7PL3EwaTvCcWAxbXyEuMY8J4xtRgkxQqds",
  "key29": "66AtnmRiivmyGyJrNbp7742cuXuLThbSgQ3Hyb2ZCzhQZ1WL9LcxrmUZsPadBiE9zAmWcHcHbzHqszEr5UcmTvNL",
  "key30": "2kpViFB8SjzLHvPrQ2L4HSu6yGmmTh5gWUHSZZeqR622swRW4715JE3wXFB3sgGp52BPXKWGfAvi8PqGvWBULP5t",
  "key31": "2JYhAu9Yjs3NUQG7GnjPSoRLzAjztrdMEskgTLzHhtw7ADXjuP6G8BbxTQx917ZfPaiKNFoNKzvwHSaBz5Th8qWt",
  "key32": "3KMYWfz4o2gFnewyoXQKTmkwEeq3dPmxaT4kchoKN77USNeXnyGFZaF4DQ5XMRNjwD6TJjqnQFfiswqfHfLnYJR4",
  "key33": "2r6hqGENSojv1krXjgng2QxSp3bbXk1tcKMiU4Ly2ChhYkbrHsd8krZ3Rjem9G7RceGew1PepN7VAnLYnT8h4rXX",
  "key34": "4m3acF1JvfCPqMCmu5hbecy8aSMFKdcrckAuw6suGqZ2xmYJFjRdnrt3zUXgcE9PkJwrGxVgbgX6iwQjKRjSf81A"
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
