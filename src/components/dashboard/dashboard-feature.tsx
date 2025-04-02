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
    "4W4KBCqZfbrUhUXPH78aMjhAqCuugKBHNTWM6UwoGfZmfw41uZMiMZXFkFQvC41qvZ2GnqgUPbAeLbV4x4GWib1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GGVqxyPF2vXHMtnjDh8B65idyF45UytVZaYN7zZkMpUCyWqrraktr9Tn7NUzk36YCdVgfHiCS2XzSC46y9J9R4A",
  "key1": "21PQz6yLHg8ysSPWvEn9DT8FCLyFVH1LnuQ4KZsnRAAUqNSWy6f39sXQBkSN4ee6Mza1vnshBMQVU4gh52ADbtKp",
  "key2": "2vX5qgHo5V5BNeDz63UMr3k4RA7Fddy5PAc53necn5LBdvhbC34v2LWLSDUD3paV1iBytHFWz6d8K7hMboRaUmAD",
  "key3": "5vKKoHNRrhNRj4zZ7XWDwhGdDj61tFoNBAdms5kb2dFYW31LRcpghZfzSYYvH5L51HgVDj6BTLJZShXbseAuCV4B",
  "key4": "5negoid3cyE4UZrhn4yzBPDWN6tPwVZtJWH7sPTfVZN7WXPn1tHB7xrtad31Garwftzid3k49Yrvo3GST1ExzBnT",
  "key5": "4eCFwYt1pjt7aA8few53XT83EodW8Ja7f616maA19bABg2rcaoUESgUg4EEnA3fY4ri5FiDQzhpYYqNTbGuirTBs",
  "key6": "4avxSxMqapx7u33EpnxkSvmYcUeLDhGmNQfU1ruXQMGQQrBwHSZFvqdaJRbBsUWoRDMZcXrVi7C6NMuB9g2DcLKo",
  "key7": "aSyveHLJXvsgFmWSqPCAadgyQT5ytmy3GBaxAiZDvC7D64sZtFdY8KvM7Wi93eQAeucFT3USREQuh8BwcZx4y1q",
  "key8": "5WdXCpLpFDzdmDZFfqZRSr4xcaWq3Ro1pfMCuJmQ1y8LaziX4pXjNn1daEtzbpyrMQvKLk87zwtbXeBkteHaf9CT",
  "key9": "3gS9grJZ94Fz9cWB17jvS2LxESpSNS18i5WH3xwSocAioA1W4CLvV95yTQ2wqxMHszKRnDqxkEvYHxnx8PCYxJMA",
  "key10": "5fkQaQhhuN9hjcx5hnwLMtxTNPH1o88ZWZAptvK6TvwDLouaEy7ZR1NGyG2NTczxZbgQBjrUngtq55eHssNMM3NW",
  "key11": "63RqAgWJysszuPSLxnFswytHLVxXxEXsEbnwd4uWhqhpwhCVr1mMbRuEjHhfmGw8q1RTzMWTMCnWdtqouxbAZq8D",
  "key12": "tYEkMCfZXvXGZLkifeAG6iuwAc3WkhbyFxYqpNk817zmL84ahkvR9hSwkhUE8t1vDK3Sndx85VzXs67pXX4JtpT",
  "key13": "4wkyNaRGcT6bMq7Vxhn8EYuyRbwcPVNZ6Whd1665yG1LFF1WBgjdHgdVYBHbj4uLPNwa645ZskniqApacmB1t8Wf",
  "key14": "3ApFhTtZhRUKzHzDXt7bsrwS72vLjvoi5yz2fBpmarKc4TjydRdQKxjerNu3N2j2AGpi4VuSxNfrh2kt3rhY53t2",
  "key15": "2CwhYovMufP3tLtF1Z8KY2uwMie6GfvE2p2hr95WRuZx5eFX5eSZ7HYH6rNf8tVUr5BcLrJZRwQYBTzAngvsm2KY",
  "key16": "67oHM2vfuRPwkg7JEcF7ozXLNAYSVF2vSWbikZWjf4D2yNGMjdgZ5Drs2oQVUMDCg96DsoDgGWD6jLJdxyJsAWg5",
  "key17": "2nbNPXGfQL2CerqKRe6x34i8KEpaMkGH2HTvMEsj2tQraDMEdmePK6u9HJ2T33HsMsJdsu68tPNaHSh3kVwf24SF",
  "key18": "qfaWkeu4cdsXipRZmGmLhxWfw387yPzUBdvV7R1CFYR1PDgAtCAuVWHRjqhFMLPeRpcVFDxtwMmwV1F9V75kbpr",
  "key19": "5vtDT33aPen1SNqwxotzvFgnSS4USbVrMK4WHZmtVLuhkQCVyTNAtbDjKqFnMAzCdrGMX1wsSFGrnxctvArubiwv",
  "key20": "5JGZUt9cCqsyMA8fkR7iPEkNEzMmKgHHJEqeLoCyJaQk8sEmSMRYm5tnAvueq4jX4uXUdC4bKYoBFqhzdJpdD5YY",
  "key21": "3XDQUtdcKMc8c7DX5dBineCd7Ph5zUAExk52FepuX2TeqjeaPjQkg2XvBjKC5ncoAK5FuKkxku6oiSRyFqn9E9Bj",
  "key22": "3gREAz7XZvCeRUm7wz1BnoCuZXpkfsuYThZXPgbG2jQTaTMnRaADqaaUodH6ZMb4tUfr4StxN9PJ9bwCzm1xAnJb",
  "key23": "5XbC7juAggqtGkYjFsMkGQD2MSSiYiEDDZ5tkvWAyMcD6HfV6AW4NmCiRvKH7UkmP1y9NpTpnyJyDnoATHFyUTtc",
  "key24": "pQtoqfeXststB8jSdDCLVTozGLy4iAKLFWNFXodrjmA8UxdHksgtpx9rZh2kbgBvEcgnjncCSc82oY1aM5oZPph",
  "key25": "2eX6mReDaWkA9MN1cQp8XbGDDmvyQ7s1Le22wXswEeJjHVSvzRUQ5BzhBqKfWDRbMbSnJVRJokz5j7buW82hB4h7",
  "key26": "4vHunWUJLMTwbkGUyb1d2uRh6EdfcD5gk8emvHktZ2nTBbCdExnoyzWfrsw3Q9PYKu8X3wWfP1NJqBADmDv9oB9q",
  "key27": "4gY7oLsxynwRbFrEc3NNFm9tECUXztrpHPeF99SQnmr5Nu38jTknBWoEdMwoau8QFc2N4pNhShkpp9fpR5fvdvqh",
  "key28": "21ULxw55vVt9CW17FQN9ZLwYh9gKhFakBt2xKeAPnuKbhirLXsmN1j6iXvFoQjTEiPxJTzL4ywXY5EvZYXXFBM3q",
  "key29": "4vXTK1kd1pdJ9PfRFrGv2Hsn1JjfokhVui3iUMTHjUJQsTcrELkrUMb5vJLeK3ZptPRXFGc3C84p3UiJJhuvDci3",
  "key30": "HnfHuaNb8wa9KauxKd6VKoQx9erxtr6TaLfdWw9EmdEGDytaairMEpSWDJZphFLVZJ7XxEgSBwKnCvMqFAF4VPf",
  "key31": "c5Qw474j1gXf9eP8uQAeGit7N1jWAAuN3RkhHyPdtXd2SK9nLXSiTMod2Zf38jiJRBnjsiPVYt8avkUYv5uzE57",
  "key32": "5bTcumaxh7psgwpHn374d8NZNesoNRuQEkrmpciwKU4FcrzevcRSS66rCgrk4DJ9QyEut6bM11NMu8jekH41gEQa",
  "key33": "2M96N76WC7t175bZJhwXq7d1x2DGmwdrD6MZcXtBew8SQqSDb8PFp2dWaZuGDRdsGbjncwmghuqgqfceZ5JC9RxS",
  "key34": "643gLzc6A8JrAuuDHCFQp3j4jxGanZ1GtjKN8S2MBxaaFETGB3nXsESXeZYnVTCPjBwG2NRzpMq5xqTH8ANoova5"
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
