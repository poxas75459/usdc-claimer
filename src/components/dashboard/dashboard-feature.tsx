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
    "4zFTKxsRUvf5dHVa8LeNDviEmXfhNs5ZB9AgyaV7aUw8cvddJnZD3V7kw2b95MCt5aSvdUmy8sRiSTrBacevBf8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vLmLD3bQWygrtLj6eY5VsegKXfoAeTj54jbwwvwzRF9it2RdR94d4SWg6Y7GT9DBFgMny8r63cta96SLJJUr71o",
  "key1": "4ztf5UUCg82yN9UFB2RJivwsUrP1Et9J7XTipHgPbd1ghxu3FHsJ22422DjLNBx2WXwBVtyJikww5UBidfEECUtD",
  "key2": "6XDhrA8siUE8nEJdC5YzDXV4nX5sCM1RE3fAaNPrfrMP2SzerFow1LZmdwd5mVMbjxcB6qMv77YcLyq66qCGTQQ",
  "key3": "vBVR9S3WWLUDNfityT58xcqJrhpuLfqchZSRwHVFCx5hLuQjmSLXJP1mRhTCE9Ybd34DgfweSYw9u83YxeHdYMS",
  "key4": "2jmbcBikJUYev8AZSy3FXtWG8E38nCyAA4Y1uYYGjvjLivGDkvvSyjgvdCszw15FLvot8mUR9HXwNPHpJkpo7oR1",
  "key5": "2eXz5h8M88aVZQKh71BYr3viCHa9LWxs8HemzhF8wAU4PaAWiPe5zEjumoJytd7VUffcTZBmps2TWMcw1s2YkLPu",
  "key6": "2wuxdETnjTZizunsxoHoy6ywhRkzUHQGb5ExCvQMmwZzX6AjE5g3mAXwdzUS6FXjMGqCbRJPX1oTTD1t8WUVmTF7",
  "key7": "2j35uAnb6pUuZSsRdtnfAN5yHp42qWb9fCyc9k9MiAUUiqtucx58b9SNvXmqHwvTrqaBcSnKP2Zw4Gwcro3cHTkA",
  "key8": "4kmtY2vXo3hgJ3pUP5B5XitgzSpPqV8WTBeMsnXwfqaZYxim47WpSzMYaGtdKwQFr1RwQDDSXs4tJ5b3tFZDHdbg",
  "key9": "5c1BoDtsxujRNMvch6XQvoP4F5GYP2E5pBQcD7md8zab31mcDqGnm9P4FKKZbUgnbpgwG5eEVSEBwZziE2rR4r3E",
  "key10": "5XL6DcbhCMdJAuc2sKuUr3jGmJTQ3Spj142dQ1SMxRGNKRpjcGW26EEzFkSppn4fCpabVfDiLckuvXHUdmmnRdUq",
  "key11": "21FZKr7icJZEypSqjXsCUZsD1xK3ur5Yw5pCZ4aVYwazGVzjCd9wC2NDs9ZJ1E8jd63XNvm7EP1J8fprWHiqwa4q",
  "key12": "275o8HiMCNE3iGKXifXjmLGbmqK8jN77gqVTNWrF4GaREifq9mythh1D5SsKaUZpnMT5dh7S7iGMp1dLqcD1LN6B",
  "key13": "3wZQYPSx1TpZr9q5FBKJ75ytUCkUZbjPpckS7wbJAbKajpZBUy4tF59AZs2Ve5FSm883sPBn1LgzF9XX4uanaUQb",
  "key14": "5igTZyevYHyDLoQYLtj9oea2X4fnpWnFnXRU4X5hdt5dp85DKgA2MG1baaVyweUDzmra5seYHMTuLeefEEkSxUdg",
  "key15": "3Tok78D6nrXSN8cBygSWb5KK3b2pUC891RCrKnZ16Rr1f8iCu1gSTGZecfRKbHmS5cPg6hTSDk7i43T1TskJLJYS",
  "key16": "VdHaAvTZC4Yup6CgrB9PhBXGu2HXQ5CSWC4TrnAv1YW9X7Rcj1QN7wYMguq8VNdv1cR2B76UowoqPZqRLvTaVGK",
  "key17": "4MkBG8iwV49XGiEnk4LtLY2DjxFUMXPJ3WYd9tDJ2XDoMZ7mgeyX8PJsSqpnD62vBCWvwjKdrAKKv3AWnh1Bw8y5",
  "key18": "5YbAsWuu5SXsok4FmpT7qUCuuXSHGakWF6KjmEkY6LGavGEzayMseuMS3334BJumQS9FGfVwNdk6m8bgn25mnGqF",
  "key19": "3AHdCosJzYtnvJa25LXxXHqNvDUbDQTvKnZkSTcNFe1jEXRseWhz7tdWY8HXHyTzayE9WVKoT8ntPHfFarJAM9Va",
  "key20": "3uark2XEVnkTsqCc9AjPtApyUjwhGuHencmG2Ad5yUk7GLfX14cLXHFdLtxaR4PA2aXSx8gVw8XzgMtvTor6unQT",
  "key21": "4FDg2VwSjss27nozg2mNMJvhMK69zi4Qwj9vDpofEtn8Xa5r1BydjGcbsEQ55E7TnLrSTRgLaFdLCq1BW6rwKRkL",
  "key22": "nuuMfQwbgK6Z3HPP5iYuk996EEV9LXQBB2hKZw7v7b8xCnEETPmq5C4uG8ccPiw76aCc2HEzA6XVnE9dvGUwu2f",
  "key23": "4h8VkjdehTi5DKQMNArhCWR6YvRpkbeowNEonu2shMTp67VaKC7ccJ8DwPAKzideaiSDupxNEbPFVTaLWWpuWUud",
  "key24": "2eNbFXG6bCUHrbuVtwcgGBrNgN1gXH3nM88eH4tXWbrqK79fv2tfv1Xatp1snL4Y3vMyQS2YSahRbSb1GpxmHcAq",
  "key25": "6c3S2L6gyjqRWR6176Jp3GAurUyCHSMy7udoRApRk4S22tLMa11KPXgzms9vZ6jLaL9xykU39CZtW2G7bB1UzHw",
  "key26": "35LSECmQQhMu1LmmPkN62Wi5CeYd9N8aUH1hP3LNiQ8XAiDAvkYPRs6QcW5atwDPg3UcNxa6m5344LcV3Vrf2THs"
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
