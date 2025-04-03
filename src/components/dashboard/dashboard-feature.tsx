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
    "5HZivHtWqgjd3jvm25LewZhavM4RyFmZf6JgaKo4B8wqmoT2Q9s5C4Bnyoiv65e2Q4TMthKcM2LmX9N53cR86jk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NVAqNQAyNCsq7Zi94yRFVPKeK1iQpYUNncNa4fRRXFzzr7k5BRSL4Z1oXmRPvaKVbmu4vYVTAS3cNJGd5q462RR",
  "key1": "2cTeM4Pt7R2E3MSJah5wDNg73WmZn6yejM4J3ggT3fZZB6bBUBc9svoNU78yyfAJvWEu71HqAux2vEd35hS9LGc9",
  "key2": "4LRyUBE3icTAqdUVzAhBSX2JgvjpTjC19GUqTcxdg9M6cQvyXijxhb8RY5N1UiU45c4W3cox43AXHcQBrV9TNBZF",
  "key3": "5pZgLMKXHzmEYNuY4BGXuHDGvHcwTMi2Kux2rxCtThXGWAKwbDPjSaJ3MUJL5zJwjQ3jmAD53yJmcmyPAtUtYWk5",
  "key4": "cLmwtctxNz6WW1tT2KpidHSm6E47hi9ckbu1UTbB37emGfw2ZjbZrKjGPqiUqbaRokWZ3BhADabL5qj3jUNZWoJ",
  "key5": "6513q69yh2cgoLE7Rx1hvTbiPaSz9tTGj8w4ANUicj35j6iQECeBzbfi9bSEhjLNCviRMuV5iw3D4oHbm45Hf6q2",
  "key6": "6qx62ofPQ42wwLkWoXNz2Nm3ZNVRuYJ3JScb9EjYteMKoFQM7wnJE3JP9SLYYJMbcn5Rvj1q8xE9Y9fb3Xztmns",
  "key7": "46tvmH8HSgTQZeQMXZZ1wFRLPXnbuoEgjZxPH6fWMhGZ3apiRtDDRSMGkoAZPSUhLYqhN2kDFfmgvSQqeRyqQ7sq",
  "key8": "3shiJpU3JZ8rdSbgQy7ffe4DdQXs7zBV8EZNbtamU6TunVnAD83BytBLyYmnL1qgJn9TLmTmxcQp1SGhpRBCntCM",
  "key9": "3Bd7yAZfwfMRUNo4McMLtW6n2a1XBb33LbrQpend5CxUZ5CrFVdozLeADEPJijB5WEZNmkqgrEAtBK67dRJ4znVg",
  "key10": "2o5eZUvmiFjZ5HzpPWWXwq7kTYFkQCCDETpMWfujRJpdqAuhE7i2rDigwY2cbSR6S6rb6nW84t8y3PHirQPAFnGd",
  "key11": "5a6wV2uG74DB7BEzysgKNDtisWiv667MK6egZMGnccvvBCTthUU4RqV1YgvqEwVf8VNxswkgB9Q4PQyMQVaBsGVK",
  "key12": "qD4RtXY2nMFHuWM1Eupy3c8akbZnoHKGL9KEZK7deXpMt26Fh8TTs6MFoNWCXR2qEp1kWNByWjq31AoTKyAM9dM",
  "key13": "ZUAAQECYR4Xk2975aGcbvsySJRazf831bk8cUzabjWrnURxfFw6fbbA2RXazMn56cKUVzH38JUsHtY67XeTkKZX",
  "key14": "34hVZE8LoV5raSe3y65LnAnANjEirA4b5Zg6GG8esQ3GCFDAisVoxGfJyCa8iXecgUn7YAqCmiudYTKoEdySGA6S",
  "key15": "4vTQfytw7BjLLRk8DLZ7hwMLB6wndM2TtvnBFx1a3qz6KSMtHCRjWwXjDTS4eQYSuLf67zix6taZuBLPQPsZPJSV",
  "key16": "34owsStqFm8pCfcnh9LW9yMtpH6JBkAkPiJgY611WYDsSeSJmQfkPrgX9R11XcYtteopPQMm2jEChPQ7VTp1AbHP",
  "key17": "2HSc2c3guA27mJxeA2ngKKoBjXQNPg7tcJdVGMCoSHyujJEfjfsifyxvNyMvveWhc2fzVavrPY2uP2rL8rjKH6Za",
  "key18": "56sxLrpUwRiB2QLAy7AMigbY5p8uAaFKRFNEHp7UGkTzCjdFJEg89fv18FBQydx2C3Bm9KSMafiD629ohBJijcLj",
  "key19": "3Zs6xFZ8fb6HgVb1iZK9DoCtmWv6J3jQc3QH6uZmFoC14qSKGGzYrq3GGFYnsWP9YZYRTECUZBWx6Hupgo1rtjsJ",
  "key20": "5xCGJGw12KWXxEvgePbJkfkiLK3wRNmWqSRCzvghKJCGHdU4j7tjvTrxCoU9KteQtzt6u3iiuiLM2vtkafuRVfe9",
  "key21": "3zNQ7wLv2ummxJe2ZxkZ3Guh64NtTXosMGmFHiVHewoQaS99C4hrw2svTZdFcrBF5nmbMTn1TxT6ewJE4zmQaewV",
  "key22": "4oMFdeNYLJmRQ31gs3qtW2388ZuDMzfJVcDbuVudM9oNV2YqfqjFmiW8owFTy6JMCxJcop9R6CxGMpZWRamkffyr",
  "key23": "41vUVGGmYorQBGzsEvk84LWdw7FayzHEJqcHgnomz5cYUvvkzNqM1NSRDRwvpm7RoqjM3Z2axYqsBqftR5ytEGLz",
  "key24": "5GJ1gus9eMAKcz32DtJFYW53FSbWU6gtiCheYHkKnnff2PE9gtxdRMDhtLrkL1Nj3CqEVcz2YS3A4RxRDJ9fjZfq",
  "key25": "4Kzm2jvV6Kba82CaGMagN5v3DiTnYJDJdCeLVjfq2D3aT5xUYy9dc7WdihYGbwEmTLUGJQzguWpDrrYk32eMo8WH"
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
