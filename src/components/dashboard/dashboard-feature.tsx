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
    "2bzLPXp5AYQauC9kFFWg6qH8npMoUrgyfpfnDXid15Jt5PdVDY8zCKfW8Pq8JK2oToRmGH8y5rqXPmvztFV4qMtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27dWH9gFEZz3nuJ6eUUZYkRSeesfPibfGSazdJGXqbdh3sAuPjrE53u5LXD7Coq5MVbM2jzK7Sn4YGSCprHS2Dn4",
  "key1": "2weB9i7YuPS94QMQZc75feFhDvNanUauxdT4AuJ3o5q96hnbKsPLQWxdhMnTqWRYjKntFmMfERNPieHJicZbwjxR",
  "key2": "nuuna8wfy9MUKsQCRVQr8VGYtceyZoHrixBqrTTS1AKAVqsHU1TT3Ei5rzNFrV67LGs1kMKD1s4ZwAoLAWBgvKo",
  "key3": "2sTDrXKvwEp6XQGvb3ZqpDwcSgHqNHSsynB26udu3U5hDp1xNJpxHXrN2m5KKGXQ4rPTNDkymEjbMTwi7KUC65iM",
  "key4": "2Q7mLig3S18tjHmVKwgpQb1szxByoVtTvqHpgDkjRd7PEqp1NfVPTQsfFx1ikjPBkd8eh5M2eF2xaMn4DwE7ayz3",
  "key5": "4GnMmaLFstUKzNSPyiqfRaKKUiU3FNhuW8xZouU8TV4fTVybU6Pcv23CJSuYamMxexNPqaFjfdEmcW6LpLHwxo52",
  "key6": "4V3RTAKcB9dW24SZxTzCx9dgDJWknFBm6emT74j9goGcCBJhTCsFXPAjjjaQ2D3ZXhRyfBRuktD3HhhSoTmwbEmc",
  "key7": "3oELdte2MdoRw9zMcrrnihHXMoeXvATemr4oh2rus4WoojzU4Z4ouVNkPhL5rF4UDzQiAsNB1G7LCuCexJap7u5c",
  "key8": "2wVvsvqQ3Z3Wh6buUHtXgEZTFfBJPQvEJfDjgammXFbboPjNtsfVRFF6Dqfsb5iAhTt5W7jZieB69vBSpYzWnxnP",
  "key9": "5w9EtF6uUdaYKEPcq79nn6hpyZU6yiobmxqb9LKr6G9jRFhsiu8xE78pLZgJ5UKhkaKbhgrd2SBUcTDfxNT2HXpE",
  "key10": "39KQWgweaAdwerLSqqs3ePPMmpuXoWxyRfjzYwSMcdCM5WsgADRL37DFqRBvMXQKaxtp49iYAR1aUDE5tXr7cepi",
  "key11": "4nmwaUYQibQShVeXXADqRca39rztP6EuY5msiakRZBjUJpC1cDNVZE2VaCaroyYE8YpS4b1REXpXg9vZzAEczpPE",
  "key12": "5gkRLYW9ssgz8NguQuC8VPtxx9zLhqxNNKCHGDxugDZVmps226CajWBaV3iihL8cGsRrQKtDLMZnkdm63mzY2wjm",
  "key13": "36YHm9X9vsEtAucYEAW3PHFokVhvfQDYNzm2hJAr9qfh2e3KuCRScqyrxPGEsrSqzeM3DAjgkpLZaLfrwskHcaH6",
  "key14": "44At82cxwHscadTRG4aFU7cUCr1R2M3yYLaTbUr57qxVmhueph3GozcmiMrxuHZjtUqFZiwasM4AdyhWe6M6HEqd",
  "key15": "2xgZn2LvHzDM75XTYUZrToP8rj9BUXL63SzqSxmVT8zTpYe7QedWcSvRquxi36uiCQ32Y34uJdYPVs4L9rxYBouG",
  "key16": "5JFUL5TS5GDkBWD6DJPweqPMxNvpcJZjsD7QjWLZpNkWf6eE4EmrPit8wqqjmGknjvxrTRkxWqtVNXGa3CvssNgv",
  "key17": "4YRbRhN7ToA6UwZrDFumxtTgfjnxnC2zFp9nU2E6bXybmXwo932heXq2drKk4UW5qBYA9nh8cqjBQrJwgN2vedyW",
  "key18": "3Z6mykHC2pCWKMgsiWQBoakAbyhCxwyFuXCX62gGzkECjK3n1sRLhEN4eoRiWYkywAXFKMnWJhSdXNbMUPKLZGv8",
  "key19": "2sCojyHmNzoxVQEYhGahupiu2nx9DSybg2Tay6wanwh4La8UW7NVgithfBHvMnB6xZydmccXqMP6aH4iVJU4JDdv",
  "key20": "5Nv7kDyrsEUnX4ei9RTMdFyEKLyVyyv3Jpf1k6T2B17panEbu2S8uNVwUf84wQvKhxxsWWYKLnANGJuwytkZSM6x",
  "key21": "MfndjBxxcUpbAjc5T93eXcp6NVW8RqoLfKjNDYx2CFmVfrFd4kArUPoEVs1d32r5Fau8k1sg3n4NQNCeVrHmV9F",
  "key22": "ziRJ3nMyM8nFfD69dXNyWVJJHKUrrGegxzmvfJKzC2sbtB8CUHVqrZYLydDXZ9fDsB1V8m41eL77X9XT9QKetm9",
  "key23": "khJx93t8XEm1qXk3gUT2MxUyq5VWyaA4wPgYgY9MUWsEt1SG8ZvBD9sNBoNevo7Wg6GHmPVDqLfhhbHGwE2uomU",
  "key24": "2NccHUNVMkwYrNRPMfFwDXeQPV53o23ewmEutnraR5U5KS1oaovmGF2Fd49e7NmsgXFPN3YRbJyUizbWrM56WUiW",
  "key25": "4PANSJst15DwUxijDrWcEjCfE1NouPNavBDQWkLyyepRXs1gKAEugh8vdqGGb4vMhZtyHM2Jp47yiesP8PhgJsGq",
  "key26": "4J4JCrAkyBH31jVGgjYApQqeQ8XoQ5kvyTbtuyVDn9ukDEhHTAVDdM1RMpyn32VduBzKG2bbjVYMbWJmzSnrt8iR",
  "key27": "2a5kbUnymr6ssp7gSUMQodU9bDiPbNppoyvBrLR5wLGeQdq7NnvmPsLPLGLrqbCGU3RE9yDexYP99bVpnfXF46ej",
  "key28": "5PLeVNnQJCSr7KEwD8Yw6cZSGzVjDbLJc9ahKoL9vzvTEXaN3NJnhM8xotSszTGGxQpSvFwpCH3Mf6jnuEsaosN7",
  "key29": "4qC6oPV2ZzeRHth2wFTCf8aDhqr8vpV9s1FEQreRMXFHJTtmUj7Y2ANx9Wjf9ZHdbtXyz8ATybKUmeQ3REWiQvBc",
  "key30": "595eVzepKFEsREtK4pRnqTmwJuRK7GdBjT99aG8uAS1tFEeaySvKbWiirWoMFhYbTqphdX5d6jNfyFj9BivkQrQ7",
  "key31": "2RBdszd7kCzUPaTpUXkBschsswkCHDf1q1TgUVArHMntfCu7VUtgE97i2UANrFXD4PhCY1JiAWRpaVsSZf8n1vUP",
  "key32": "4pQvvnfS6i5iixiRFvMSfa3yNSEYp7e9Y9XHz6tR27nP7assxJwCuLm5VRsLVkfXTt5w8CFHswF97a9SyAiARq1p",
  "key33": "4HJcANZLGajpuVU9vNJRt67RKaYnegCKqnAi46vX1uuvZMZ9txMyhQFG5H4ZPLLgEjwZuEiSYwkg3ahue2fceDHM",
  "key34": "2jRcXbCZFgecjzzCVBJ5u3Ukp3yP5J23gqy9aw8uNTPvScgFw4cREAdkbutn9F8TYyv8tk47qGeaoYKT72msrAvm",
  "key35": "2cKeWKxC1UN7RVTYvsyo9SJVJGHEiCcLJWQVnjL5wwJDriMHjyKjSH1jjsamJSzCvhR6vRnLGy6GiGcMUiuM1rrA",
  "key36": "3DaEPqJtkxbhZVkBhKSjXpr5qa9wejdbq5K5ukRpqL8rs9XG1kf4RDkDh5wBDwTed2r4P6iUAKpQXdkLeid2H3NQ",
  "key37": "5zmvfpk587nbMyqKzWaPpkk1kVYnZvX4AVWPq1MM8VRRkU2j25gYXbY9REb7BvEvya7p5dm9ancyMRmVtwGrYmSb",
  "key38": "55X3HXwuPv1XC8Gfij8oC1HBBSCAAFiCu1mggywe78jPJXvcBCZsVqLC78CU3bUKGckEkKyNtv3HJEAJ2DBkD7D5",
  "key39": "4yfpgpPFXHNiQKx1fUHyhLgtmpFD6GXtYbMedjFWxq1jpWXW72SZvfgJwoji2EPDLxj5gK3sLE1pa4bcxpdawUbg",
  "key40": "61GbTgTREpBQS4hc9XqPgVXbGJYby1HNjFiJS6NNq2cbaZ9Aowyp3CWrTDCgNpnQZhcNMPCsG4pGV6ErswMWmvdz",
  "key41": "3S5js9RxCAsRj7MzV13fzXcyxVDLvrBNiD9jch9zhFVfjSNMp2KbPFYsMag4UKtZZCCuvYDeFgcTBZp4rCBY1Atd",
  "key42": "3DXbizwDq5Fq2gJk918qnSipsKCAJP8F9GXZrT6q5q5mJYBjgMNeqr6gP4z2oHc4TifFdHTNNRNLzhd9f7fjMQ9C",
  "key43": "4A37QpyfCDUHZqaHAe7jsduhXVQiqtSZjGXfbdfaqRMYtuaayb4RubHiSoSXL95iK3y63ffK84Bh62SArxgfHddr",
  "key44": "3z8TyV5HyvVNqkT1cTkG75bmMC7i1JPWpTDJhg9kbKfKCrbd85DFzTvnJNiVW5PPgDjQQrmQPeDsR6X1NuyHkpAo",
  "key45": "3zNayMo3NNwA8BYDo8Rm7CBhG8fN2LLVjyvh5AmgKvsiLjEDDpA65QWMSRAn665u9z3BHjrV6zLd256M9Ec76DZX",
  "key46": "5pXMPgFXDJLHfFuLRmSH5bHYdgHaR7Vot9vZ41SZYLgLjHckfER7AfYtP9XJrVR5gipzRB8vvb6HE31487AGzed7"
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
