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
    "25SXun96QmCNjC3b2x6yZaLXe4TEm9wAtPTWCMHx97E8yCFKjRUrK9VsyP3zPcXh5sHWo6orWPKDvRBpxnjgTH2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5erwmwLVoc5FZK3btofuN7nCRts74UTFMtQLFA1kyALL4n8CToVUFEFdQavm4hNba2ZSzofjaF8xriLfBAzrnnsh",
  "key1": "guA4enJ1ck6BnTUUaMUjghmfeMtCt75QePgmMWUE9KRpY8jgA2QhWMiJim7d6ATA367mj5tQfnr8SFHN4UZjWoh",
  "key2": "3yvnbs1eeUMxCCnB5S9YRS5BtkHVevafaJ6HyL3pg5k7if8oUZqcc1pZZA2Gg22waiem6baitdvg8TykufBhcLZ9",
  "key3": "2qu62yd3guoxh9cWTqJGghVtACGdR727p6nimgCgc5oB6woNG3dM811miuPQKQcmPSFyYKFajyP85UxTmz8B8Yvb",
  "key4": "5cbWyyM5fagTWFCtx4s8q4QysAFPWLPjuqHj8YvQdMecQrskuw4J3Rvr6CcDzZEE63ovhXjtUgmStPUT9awpfX4G",
  "key5": "4yUBdrBHaBQrPBJ8jV3f68SwBbT3tzvH2pEVXJvzoo1w3MDdUGRZVVau7ZDrox4SE8TBzcS9hFBknwT492DkD3Pq",
  "key6": "4vkwzAWbT9vz87pWk2vjyQ9A9ymmi7qM2RjXUyeLaPY4bfAKuvZBkaZnU2smU7dQhStMRzSZP9CSQbfQj9YWt7uc",
  "key7": "4pSyGV5uWYtSRKv8TxmUsUJngb95QDEb5QTbGqSy4oxjM6zwjyYzuByCCTQ2FB628kjChgwcizGXErU8TV9PwbQm",
  "key8": "4d4cgeWdxMCq1gxKDeDUhagUM8hH8SADusXu1ptLeswqyBbATJqipMYowvMwqUhiRpjHkQawiDTFEYkKnL9uNz5B",
  "key9": "3pNrdbZC5qibWqWevVHs3qKYAJ7NEmej3VYEkUdTKPZj7cFQMjviWRMa4ctDhs8gpy44fybg9U7KSZaafwke54Y1",
  "key10": "3Lsrc2X7ksTRHYbYphro3SLoVgewu6s9xmSChZZSNU8AvRmHf2tU57aRyYMX9f7QSKzeqpLgRY5WMs2RzanH29LS",
  "key11": "3F4DPSbbovbg1aPFijsbXSqEmEscXMZ24pnpoxoYMi4beGxTq3f5TARkDYew8f2RMWNPfVUt97NbYC7PwvR6qL1J",
  "key12": "2aytYCnL1VB1wV39FkNPtaW9T1auxYDT1pEVRt4xgYPeXhDnifbtDtKSco6pmVH8LF8qBGYX6VCz8yhtJiKZ5eKd",
  "key13": "2XKfGrWhjdv5PsdVDLvwjkJjmP3ecor1RS8jPxMhtdm5qbm1RaPNsZjhigPm8nXoVp8btEGFVmSZTQ2VhzhvAsuY",
  "key14": "ctdnEd1nhgY48FMDyPNGRox3XgyicdZaNY1mcJi4c7bhXbRzkH4P52TvGrMnj2hQJcab6m3xTw4pMQ6F6yc8Tkm",
  "key15": "DMmiU1TMV4KtttJ25abh7Td12Zfbc1y9nVDHYpf7oC55qBYEUZCMz9gGSKmrfdXBMkwTLtxjqNqFhTAggVSM7Py",
  "key16": "63MviQhvR8B5xW44oUHgi7a9bjr7ijoPX1UeGfm1es4fqtb5tczYpBJZKPdHzAv5K9W5kdL1L2YdKpE3Ri6PR8kZ",
  "key17": "4ZfJzc1FEjmHPWzFGR1EfTMqdNNJMv9YZxn2KPKMqE1uZzqnnXaJnEcPHTF6jYLRymbwqkRfouE2h2GLYc1cNu4e",
  "key18": "5jJXJa5xhEfR5udkuzPD5CLnkGm4isegSWYu8T3DoR6biRy1trhsDcDtrFM24hidEnU7MjgEeB9Xqxzi2FALMegL",
  "key19": "TTGTUKsPQT7ntrwDHidFQrx8mRMmp85AFG95h2wbYcjQoiM3ooZsEsUsv4nGWed53dHV1FTsKb9aiCqvkcSSvMf",
  "key20": "5UwDrRPJyH8GsVzFqUHfFU62ZaN7hGbh5NyD1H8fEBjN6FvUtF7oL5LjRbArp45pLtBmap7YjLqedpxkktJkTDK3",
  "key21": "3H1cWK7U3KQChJBTEkGbrTKX2BWSDJoR6bpqiFZwwpWw451mw88KUoyoD4MRknjc2tK6ijwQVELjjz36nETFWR2v",
  "key22": "3SCCn5Xu4i6wr45jYHGwYoe8xaAsnxJbARAhSxpRT1B5D9DU58DQBAbcrRiMuZTHQAAbTaz7DwACASZVBQEwcrZF",
  "key23": "4EPk6kEpm822ccjYqGPoGBQgZ8oqEh1Sp2MZUmQX5CxZ8LZBuGurAs52N7TqVjXQN4Wfv92G1LjjNJMNhGyFgZP9",
  "key24": "3AFHFbaVUW3igujQpjw9yWFVUoR7Hj6YkP6k1PUiZ98t5XuZKxSzwaPGdnj6LuEsz6ybyLwhMUH1eQz7SbDVKLA4",
  "key25": "4XaKMzC1VBeJ5iUSijiXVqHPz1n5Ukd73X1iyToiR99qUq1fGScYw72jnXQf6owzV2HYFNmzBReHZbo8NRh1azjk",
  "key26": "4pt479DNUHarF9r4syZQ1GHetkqxwAMybZbNetvqBaie63qHoKBTJUURXd3VAv3jcxwNouEmLofcSEHiM7gRz9vq",
  "key27": "4JXs44t1e7aywdxmZmMoeRotEqPgvAUNJJaB5zPHjskP9Zyp7nFso16xPNQn32T4xBxUXA4q9FB3BBLCr3mkmJxB",
  "key28": "5bf1JttoNfHjrh5zvycxKAeFpmC6CHyz2pbm3fYNfHVSQknkLbCrQKjAbwx3XHSpkwnmuYgHyW1J6yXxvNr7KgFC",
  "key29": "31PS2QynjY5bxToXrNY6HvaKXFrX1s2SQM6baxW8EjgYxFRjt3T2EytbxPgBwUbGCquVKhT9CqYSCUGdrfZSVQtB",
  "key30": "2w7CXYnTb75HsnQgGc38XUBCi6tn81ZTenrgt836DhK7ukCF3x2qjzYWyALnxui7nNX8NpUU3iTk9HNy9S2b7M73",
  "key31": "27CsiUeYyDXVHcWtcp15FfdnXeSdbQC1btGCsVNZVJZf3acNh9StzNsoUM8y6Ub3SFLwvQYhqG1VYPc47WENErv1"
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
