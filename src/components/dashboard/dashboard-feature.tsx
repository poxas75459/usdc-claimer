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
    "JW9WGeygRe7xxiukXuSN8BERfK8Npws2dPz69HCHDiXdh55n4hvvifBsvjW7uKbVmv2bNbs6yRmJ3JxskSXeTqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RNuqsuZKRdSsmanuG5BmLwzskihALHt9AdSdUf3VRjDeg2FWR2xwpYdbZbNd3nBs1J492sFYAJ8e77jYA8DCG5F",
  "key1": "3ZNMPevSixFoybFWTPwV8SbJerRL9J1vmwNVxXdDowR4zn2ZrarXUmXsjHAmDoVYCgNT8HEBTfzjWps21w5fkTC6",
  "key2": "4wGzTExkPCzjLSa7VkkSkq5k3DENJGbdhfrAS7iMTWVyoa9vf9vvPukTsUo4hM1uFfZPF4BJvtc3zMDts9wnoMfj",
  "key3": "3vnvzJdxKERM4aaE3YCr66yPxSgaYd1jGFyisvDvVdcG7t9Um9DvYWr9Bopm7irLyPoC3A75BcUtNcDettoG1hsZ",
  "key4": "4bQqAbrzowSSra7fd3RSURbuQgLMhBGaugbspiw3KKjxrdnFrYxDEfVR6T6KT6pAhga2ZA8VH4UTgVfmyXFWqrpA",
  "key5": "2mV5Rgw6LfQ3uqAnXh1SxSkVAvU1FWNdSRPHC8gyVxs5sHCERZKsSVRV83W6o3CafTNEgc9Nim69fuuahs4VumAZ",
  "key6": "4E2PTWoHXG7a7YEwmKBceHKx8bDnzjCMJ46eUPMLtXHiCzCPetjgVNi7jssxk9hJEs93TmD4gjrmY1xkXtptsN8U",
  "key7": "653DTSnGYCfb8KtKd5jyGNeNofvCHXY2Pis9biuov9QzWdFqoZswYLeNUnfoeixQUY9X9N29fncWAmxhNGuRZCRn",
  "key8": "4ijGXKEUgvtcTmevDwkHJrHLAh1Wx7pFUUxwsvh1uXWXY4RmyCgA5QUXceCWHqQS3ZtKgf8mzBbLxMJqL4hHeBRn",
  "key9": "ek69tSrY3ay9S5mju1xRJxSy35DXFEZR9DWxE9wp8z6PymHcSkiauYcK69p2Tw1ribHDDruEzGnptt5MSmXXcoU",
  "key10": "5nMUMnZg5fuJaNr8FGno8CLUfmmWi2TS7qXtUuGgWbn3URB8jz6av2RW8K9BEzFbQ4eGMUgERkPmtTiHWynvHvsa",
  "key11": "3FVYxzvmscB3VZS7wVSDfzAHhnvvugeDicFj4wS25rhL9Ao7EWPUVdjr9P1mwQ1mg9QoP8eyjDomuEo5yCYUSe1E",
  "key12": "5NuPvKDnraAiXw97JGnKszEcMVyNdQPyAhZdwn6S7BhK6nzWtHF7s9gb5qwhYUQVTuQUNE2jBYLSt6182eKuDfRq",
  "key13": "5e6VZPWsWSx33PojSP5SyqCfed47e4hM5h9HamJMzMmam5rE6uotxxZP9agqXWkoGujsXi3RhAGqFLALRpLojziR",
  "key14": "213PXHKaG4xmpHCfnvTj2Cg918eLUH5Ugej4xAUAKC5CWF4aZ9wyKP3fzersv5HWgX8nq4Y9Hv18teWXY1hVvP33",
  "key15": "48X83pWJHyuHh4vBGfksrYFTZZjDjjYP3vNGkgXZjH5DFd3dRJHPbnept95p28UNVd2NtWNCTVNqMmg3ALAo34sx",
  "key16": "43uQgkywgttExwmjpgF9sUUkFzhq97FCHnbeLaM9He8NPbwwYASSVDNx2mTewuCpj69vqzyr2Q6wsc1cRaTuppNT",
  "key17": "5UYdGM1WT9sfWmpBHUaeFrtDQGCCdbQdjMGDBoy4xtikKEEq817DQiEthmtEBrLt3fdgM4hnMuEpavZUM4V1iaPD",
  "key18": "3ZpHykcr3CNmZyLi3P7nEWNyBYzikR2wHDnU6AMifNZAooNZgBihnzzjtv23KrGi7zPDgWjoeNn9r8aS8WzQobe5",
  "key19": "3roP8TiJ7G5Hwbdjf2Lwm6Z9L5cekame15PUaVrRFUvkvSy4RLRZ8b6umDxHNXcmRpyu97PkWFKMbJx1YdVkBxiM",
  "key20": "2VYzBWnMCcW32GznRagT2PgzHZ4RhhW7WJhUaDgAeo79N3BpLbcP98HXqRpyrs7yorfpijCYWDgdtBXetNCtR9xn",
  "key21": "4dQDswijYDwd1r8PDCvWnyuacHXqJfDFvYZSASdzgevZE7wxqbwbBwedioaJckBworX9PTVibEr35t6xZUwFbqcX",
  "key22": "3PiAYMaeERVAD6wi6DSAPfVoBTZsWSb6v3zoibWCBQ89PtiRQkYgUx6KZw8WCiEaxZXa7k2Tjtwhvim3aktSoojC",
  "key23": "4sjj8pAQHo5mrLWsJTTjFeLvHHJaxP9qpGHDovV7PvC9naywRpXp83M7emEJz92QFih54WaATBXXWZLvocn3whhz",
  "key24": "5wY23tYRB66U7wKSUVET288ZTgadysbDcsgghCJ6BEAPUedyTBnmWaGS9pbw4gofKAxr2G8BfnRDgvum4V2uhMhY",
  "key25": "2jZ7FzxFYMzZaG3UhSPdFZaiDzEbxPC55d8DETeisECahhLvktHf8m7arm79uVmBno34sjsDB6u4n2z1M2arJv1y"
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
