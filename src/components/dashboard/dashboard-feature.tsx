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
    "NwcGRMypsQpt6HHthq8tncZGdxf1t8wvygtxnBumjeKdQxiep3Uf9pigFgTQqVYhULfn7gwUt4zRAdSXpqonJuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RPNmr85au59SZFEuSTwgJpNY5rQv7pJ6Nsso525nWXYdyXUmHknaFH9n69ykqLV3dvRwQGogsmCZVajDQhziouY",
  "key1": "3x9gSvosTiBewKiR4d54kFjWiadXmW7Pw4HeH8SMkDF7u3oev6uo4DwX8wBX2wfPBjveLj1A8SysHw8Hk1u3APad",
  "key2": "3NVMuVjnt29XjWGbu9JbtAJvQSfk7MRkErEYMgkAmALAkBH8khksE864naeqBrRLNgQ6zvAmhAMSx9xNjt62Mppn",
  "key3": "5cbiQdrLJZvnQxEeFA7PHrwAoSQ7CvFBhHNeB2VXUGjD1Sz2CUZFY7rEvo7iMejUd1o66Jgc2HSD6MooLC6p5coQ",
  "key4": "67Up1xoTBmZTBQqC3ffVbfzmo9EDgw2kCnACci7zyqST77qMLtCGKRzPeG4Qy9aKVJFbtvkZP3SWopR5eRUCR3Ne",
  "key5": "5KMgKsQN4hUawgB2aonXNsWkFYHLQ3oeau1VoLXixWrd54KmwN1k5usCrtPAUg1uEmrhDFKcLhC4Wo14pqA1mSL7",
  "key6": "3EBexRrBg1CEnuFnr9cG19qPbswZhfCAFHg4T834Hrzgnva2Gsj22ECXC5WPQpXc4pfExXR53FpD1wcdFJtQEMcW",
  "key7": "3T34KnXz8iJhLSFfSP6YAiubDYHkqbhPLb9nPScTvmkWYCqr8y6ZCaRZ4bWfMArZP4NeFZcsRuz7v5c4KgKR9LU4",
  "key8": "5oBMKKovetiJvnmKfHGzyt7v97CdRHRSDAATWw74PV29RLnbLHFKrvLkxb7S5GaBpLiudejvi44gU5JpPSCrSfWF",
  "key9": "3J2ESN2v53eSw8Tk8FnrrXRMVignyoDLNF1oqxrktDPeXfmpthwDC4zAoT2V3aqNd1WE1mgWC4MTX1ex7wYPAsjx",
  "key10": "6dmJY91xadK6zHJepP2HTjpU45NVu2yVLAyeqQvgJqH3xLfMM5Cgb2SztpLQHyJow7vxHBPJ9V3r46uJATuY9gM",
  "key11": "r1RWu5Ukyc9SipT5k7BDytpWLxP3WGLfxEBtdsdZQn9BF9eTiR3m8MkmRtdjVFcq1wDNnehXiqxxt1nwRmrNjQ7",
  "key12": "XYBN3wxmkhcAU21NM9o8iQi1o1zbpCwBjcZCL9vWAgQRoNj2wKBiQtwRyfFix8GVmy7sPpMP2JeAAA5JmtXGBnv",
  "key13": "ZkYUN7Nbwwz78TsihQpbtX5tmq484hVpX8B53yAjCDmQ5dwCAcPnPCrk7djhvZFThy7XnTaowp9VYHicPDYx6jq",
  "key14": "28qpoHgptpv54UFqCP4e2udFWEiLdjzj35ZrPov6AJrhFggR92NWYhqe9KWQ9Pe1ZgLCZ8L4Bgv5Ww3TXx3ouNzh",
  "key15": "5BtGC4sRBMMqFg6nnCMEYqFCoFSKi41MD96x7B9S6HmC4SejNdqjPo9aNHD9fK8pGGP9ivaQc84X5m6UtHYbLzq2",
  "key16": "3skZJTRMccZwjpbu2UgkwWkK4XdS3xyDNqfGU7qzmsNJqAjC3rpDaPVLvBNpB1kmcGJpsAyvi1GH1DaUXCNhLyo",
  "key17": "WNqHNYU6bjHzpWoKJxovrLXxGpkgT6vtQKQM6S2kSv1VT428VWn5qVn3a7KrkyYGn7oR5W4ryGkG7ZAbaa8q5Rx",
  "key18": "3Thfa3KcmXSSSDhB1Qk94f6p8QDeSQiSt2efPoLXASLaMpHNZy97QJquVLPzVRNY8mL6zzoauDMYnruJ44kmVnFo",
  "key19": "KLKqy5P8iLLje6hhA36AjeFUW6PS1DCdHmNPn7Fhwmbbh9iAPt2eXoMNG9RHXiJPpLUcLbqcMEcGGgcoDhu9TCe",
  "key20": "Jdq6w5hs41Wr2dGZ2tTevQR2suS93H5KHYyGiDSv6f1KVtqvDL4ztbJpk7r6UHfF7G2hmA7fzJjx9dWCFYAKbxp",
  "key21": "3gWrye8TrVZ9KMouqqakPitgj54JXTi7wWNM8h2cidfGvQT9ukibLoMaVRydZagfEiUoD4GDBvc3jJyXreSr2yHJ",
  "key22": "UNf4K2jXBDVsRLXwnrbRHcr5vk7KMmH24JWjkrPgokfCgtavuCEgYXcCmQh2KWow5qxsaoKfjUUoDJi193bwNAp",
  "key23": "37Tsjm1rcpFnYXFRB6F8AVRgBnY5aUJQiNqKPa5QsShTpJkHpHBNvkXvUbpEwdvGSUtQyoPebBfLGznd2GrVncMZ",
  "key24": "g1m2eXD7kKr1tHL8ELUERpywXs495qZe1MS5yqp5qdjDSsbsEQAR4P8jgxLhFi992RCU26NtoQRFtig6hQ6Csbw",
  "key25": "2uu9ytYpSqMGwjqJPxyu4GLiX9DSkkc6md66yHx8PUymMNVh5BUmWborKevKWwvFRVhugstZ5KkJ3pkWp5csEXSS",
  "key26": "cpeAyLfnw2EeqmtfX5cUTEicY2DAKQUCw4WewL3QiobpTQrdwEfojkNByyHwK12aRGNEpzniXLyHpR1jXAtecKk",
  "key27": "5bCLhcJEj2a8tDaKwhCjKxcfAnwxShNcgRkQxa23nAcfmeyJAYepRsADrDf4zCGqRT8UeWU36RPzzP3GYwAJZY5N",
  "key28": "4zxJ8FmznBMCxaqgQJk2oHVdRotrVpKndRi5shuVoEwzWKaMXYnuHRvfWHLjDFznX6bZ2gDz3ARaimkfGLrBQvRg",
  "key29": "4D12W3fQ2fZnzN589QY5vk5fcBXHrmvGuu8S5UfwDtQiqYd12KTX55uwRUQmLUp3U6VNuw5F5EmFcqN9Lewwfc5b",
  "key30": "3deqyQVqrTwN4VXZZf5JtXyUTcmNGkrcUabN1WxDNgZdQXg5g4qRBN3QqB6zq35oK8dpyj4Vw3GSFtXRcE5hhGk8",
  "key31": "4NuK3oqyJayucickjfqCC9M1GaVbmuZSEVpwF4j5dVbqEU1BbdokdvfUsGHZmdZeeLnVo8qfQ9LMRYo16oQdjEqm",
  "key32": "3cbPspvyavmp1wo4tL3sh1TqULdQ3ALXBCqU5kouqqU5JKRT6WFC8K64Abyg6qdmhQ5i41LkaLeaZXK8ai6t7yE2",
  "key33": "51qkbNPxz2DSw4n1FPsqZc4pULLDHscuP7tvquqTcTj1aU5jA9CuqP64JnbqshYVhH8gbA8vnhon5FcGXwSr1Sn9",
  "key34": "3TLLNYa3wEGvyKjyz8PavB9To1YM4yd8bf4g8KFB5EaHK9wTFY4Kx6dSobu7cLj749CNiN1K2e8ML4q3Ktedb64d",
  "key35": "3tFKP4wwRmUAqn7aTtVx7pq2UviFANYnZa1gXJWZQvBQP41M85dRMDmJEN2oCy4ex6hGQBZ8a1NcrPNgLBGopL9A",
  "key36": "2aotcoixqe9Esncw5frS6Q6PnutKjvNW6gZnRjUjY4d5CoZMtrVUd2a46aKnijEVfJaFPJbnKck6MXbvndg3gWoS",
  "key37": "ghMfKcgicL9AKmMsn62u3fmshHMUs7SyceTMfrNJruYZcuHpYchYAVC96BXH7z3zqe5f2wqkdeQnU3WHii3asXG",
  "key38": "52BtCmNygKgymUr5T8ksU2ADsq4UZ6GuswXr9W9sGU6fJe6ULUaquhLjny9jLxKRZuisnKkfBo2FcZ6qLaAj9MXm",
  "key39": "27guxdmbxQWuJ4xneCEuCoBgUZbifohHZyFWXV1h8aYpXwrwuCxYJ47aDqw2MzZHQR2k5yJ7n9LQ4SvQRP8FJ8c3",
  "key40": "KGPQ74f7M4eXndrjhTDojDHNAyymJR5rfy7m5AQ6voE54U2TbJaVaQohamH5E3QvzXACzwyA3PfobRxsTKN7F3r",
  "key41": "2YJUYyj4jG32v7eCjArupQL2H2Yi6WJEMGPYgmYP9x2wGCWqRZBJm5w4SbVgY7EMNzoZ8J62nH61Zua7AaqoB4j1",
  "key42": "3Y6B6tbY6G2gnuEUZpzyZ8uKgrLsFNZAjnsYfSL5xnRpxvtoN6N6N8u4NanRViDmoQ4b3thbECoyjg1LBTwZziNU",
  "key43": "3cWk1KBTUHDQY5ceNA7sFxQhDJ3zrMPfmBFiURWQfmAKMXMjEYcRiSRbHWAyiXHsw4uqgAt1o59t54UVT1t4AY7x"
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
