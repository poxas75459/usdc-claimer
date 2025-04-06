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
    "4yzZ4iDaoKSfTW2eGDYcRZTu2vVN4i9JAehUsQYN35EDLbPKckSTzRiTEo5baDcQFJh8YjDuhQrAevQKEGCXhaPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "468GoKiW62D7gMBg7ToMsnHdoMCX4DLneZ62bM2fG1DiCYCfJELXAn7DqqxNHuGBqfoeSPvjtBg9sQB8ohkg1xVt",
  "key1": "3LUFaMXiNdk9fRag82NzGqMF3KoUgQHwTbBaYY3KKg24LijMAaV9EpsEp7iDU7vVArEe9YbuBEk9h8uJWqCPTLmU",
  "key2": "5bFn9nS9gDZJ7omeuY1ncmCXiT9ApqpFF5GRaqWaed1b7AHLpDpWNGCrvfn1LGwNMsoEyzNey7GENapDBbM14vA5",
  "key3": "nvP9386dRASi31988cMMA5cTthRMb1tzeEt6YEhczcAxCxBtf9v5JyKkpv16f2USvDsGtTXK7gSQcQQraBJtXPz",
  "key4": "65GAy5DPcppPGbLUqtDBgxpR3Kz3ESbqWAqZ8nj8UGdUJJeZCC5bF3v79MCWJj446kkV2iU7DfiGu21Yty5nrirm",
  "key5": "z7LNgHUE9MvDBiieh6FqJQWBLYxMYhs14v8yrZTK6ChzgtvSHqEdkxcPqPHhSAbnHPfRPobYxGYe9hxUyqMsPUK",
  "key6": "35FDioVxq25dCwNrLDzr8w3h2EAZHy5X5g5hZXtLB6niFjVUhTRJwYVDFjH1pubNBS8i8A8GgmUKxTmYbszfTvXE",
  "key7": "4XUVK8svduFaQFvZRNMabKn6VJ5TXJVNCjQBAF76LUdYgUC6r2uvnQ5oZavvRhkXJoCHGF1nE2H1eZphq9qM7iJa",
  "key8": "5TvyC122skRZkiCLxdgqE8bdzXZyJJcroKCGEcw6yEofKQUqxkvUb9ZYn81DecHnEcvBnWNJn7QWZzJBzchzbPNX",
  "key9": "58Norax7S4SLTjnrqtMKqiCDqvzhKNoou8f6h1eq9FhEexbG6QPLFrNsm5cdRXZJ1zZSaLPLmtAnm2Ar93sGnmCE",
  "key10": "3HGDKYzFGP3oFnqskqDW5qVY7dFaBLAcexpbyD6fB5yN9BQ9ohSiT1wvm41G4DsNNjkU5v4HxqfJr4vDVLcMS9oF",
  "key11": "2AaND6TRgjsSGzP3m3p1Nm9LaMEKaHGHSv3rSjiK7PeSo13htnHemNdGrDbziG3rNMyBgP47Dj442wdTd9BY43iu",
  "key12": "5K39SusZRdfAJ2zGjPaMo9mWSnZy7wQwF5b5VPHz4TgKPnQF4Tt4HmGnmK9mXPbR8exkrakkJ5D3DVvq78fUCaKb",
  "key13": "376fNZVKPEA2hKytxgZaJCnrwhaRQaLe4CSthp3Nvf7K4P79RtP34kjZYNC2fRmu4ZChRgK2qUcskqiHzHGMQntJ",
  "key14": "3fvZTomKie5KNNWinZNqBchgjtbzwnyaMGyYhvecSh7c8irPAGHaNoxxrHAGdR5VzXJAgMNcGh74EhSFtp7SB5CZ",
  "key15": "4tQTQHwHtVEX9yHBHCAEtdedDRLxEh2zFBcTZDKKWZ5PKapcsvtb4gHuQrmStDTdbgW2WD3zPkvmPoCmwiWH6Gv9",
  "key16": "54vHPqHayv8DSKf5bsJjn6eiEwbKCZkk5rj2rmc1BKm4wZr5pFkqJVJrcU9ZMfT4D2xsJqU12BkPAaSA7oeZ1uJc",
  "key17": "23gxMyuzjcVUgUB3vfg7FVJSx34hD1x4GL8LggCu1XqQ1fT4z3p9imYva42MQQpHYwk3AXxkEf7yqsHZZFXDRssm",
  "key18": "5kpnaexuDvu7L6djPMQDV6vmexoPWnMT3JTiPXhV6XS4RwPT4mVjH9H9bCv2qmqTLjnAo4prgrMLpweMFVYntj2h",
  "key19": "5pmbXz8EMqqPXZFGUSFzaaWxnQUos6Er6C5CVktHxQvmg2jWCuLJK1LFZmQ72xnnUGR2B9EmU3oEqGzX811TPA3w",
  "key20": "3Hc2cXuJxkMoMcJ5faZCBprjvM6T6n2gHGb6pdFu2GUNkCb5wh7K6DCDwh4Q6EqRz8e49PEKMvNwdHTn3NmsW57H",
  "key21": "2LyvhX4B5nxdTwtmmuSZyDXMDnPSvH1h9po97sEvQquRj26kdeYPNkRT3ERaL4CXcc3DnfShd9NoQt4YCfbcpiUU",
  "key22": "tj8rGcQLj1TgGuESb3AX186MRg2LDaE4F2nUZEZedHBwad4ZDX1ZHZVVkYoFUoy4HgP6uFPtuhoQub4yfC2bCeG",
  "key23": "58maHx7rszFrnJhgUJjEFCD1beqbvkAKyaE8iR1nwzZ4QKhW2JBWV9213HKtPHpy4iYBpzZECs9uhNkpT4TzgZcd",
  "key24": "56bjaoT86zc23fvC8NiJyivw2v1oiARiADkYCsQczud8QkwTJQXprQRRkZHEDpTe9A5qT3JT42eoahkc9HvknFrW",
  "key25": "4YcGta7pDyFCcyqUtUDSYtNx5SjFdApqTrPSPqe5nFB1A8DUSdiN2Xsdfi2zyuvJnLEaKzY2xF1iSa44jUBbgV14"
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
