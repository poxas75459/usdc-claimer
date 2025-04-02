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
    "5yUrpHfYJ8535oGU5oJH9iKdzCJDbXCD6GznZXsa6tLUpUBnEQSd5jNTawGS3QPkfYBtPhJB1uUjeLbpbcLcbUV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jpciNhRDdGaRY8dMynrTqNRwMREQym775VEQLcvKegSt5r9z2Fk9Hk6qT13uYFFfc5v6UMP31X4LwXbu22FWV3u",
  "key1": "vchQaVRMQWVLVe3UVxXdXqpbEgmvVj5LK69go6ZD5cmc84CfcmZs8rtmpkfvu96zbGEh4nbUwPiqDxUgDExMCe6",
  "key2": "45TkgQsbMayvpQaPHEjpPoznX7KjZen4UT379e6VHNmRScQveRcxhCQVGrHZvPRgaNeTedtS7rxE9RevjHzvcrDG",
  "key3": "28oRuL9nDPyf2nuLM97zD5tf8eZEYgFM6tkzDm7YsZA7yU2agpJWb3VZ7nTEYv5oPo6roJ4VN6mocK6L2WB165z9",
  "key4": "4Nv7RR1oBxL4y1J1SZ6aK2kXU5XobgJp8GNeoXcJrbLjyfbGDChYiNp5Ntg8Dbckw577t1BM77pJSXocFsge5NH6",
  "key5": "4H1qE2wmxazd3iPKddguAfbAE5zoZ3an6abNdeSA9HCEUxX6apuZPiEpw3FbQRMAupduwzkBZngZK6mTAMkwCsCN",
  "key6": "5e1HdLWGQUR88UGKYDxC9r95wHPKCiXcHq7NHCyQ7u31wzEJo4NP69wqhc9FAzv46SBHN5cpZZDgrYtgW6hPenco",
  "key7": "3EZBWCHr1RR9XDeiu5K941S5t2hBVahWEEAPRz7kjjsgDvBFJj5JSgbCNUKoGFvoGzJpDNhqTpZDLBLvPyC7FXiS",
  "key8": "Vriwz842sqWYHt8SwQm3YU19vX5nL5s4bqfd2MYm7QmCXBAjBVhuss9qrqWtEGdmZbuwamj7bknRkcQg9vrFMqP",
  "key9": "53iHtCeoixWE745znYzmzZFktdw8y3xbJzebvbW9uJcQTHc2MnC1mjmipCXp7RXdU9RBKnGqbM7HUgyvWpTcfpPx",
  "key10": "52eeBx6reRgMWUi1dkSuCYKHgxW4yWQ5bRsUbaWTwXRnSjTRZjLwyn3CcqdsVU5Zse9UFDRhcHGRs4f9oLoaZS2e",
  "key11": "5YcNaJwHr4NXKkPhSvkY8tEvGDktWykMCsY1Gbm8wBfUcfY8hxh3xSYzHCSXgFqrrRGhckwDutLsQRFkh5gANKH1",
  "key12": "4nxiG7G1P9mNQ19TSBVEoyLuvFYFpXPmAEMJRp9QsSzht8LYRLKbBT2s6GasqWMmJwNTtKPTjyXbmycXycyEGtwc",
  "key13": "3L3SfmR8NNNSLH7STciNjCTEtm8Fqa1m4mLvFAWp71z4X3N4u56awFu7P64Fcd9Ys4GwhmbQPcZD2FWJKF7D85bA",
  "key14": "2B33UfWz8ShYeNyqGJrPTjvpKai6RMT9PEubxiT7GWRuWYFa5TDKPgMcBb2hoY25AiSHrqnNpZbNFsx8KEnuJ1MM",
  "key15": "3MECARCPDcDLLQtmi3F8qdeW5wrrQfmZMhQYtGS2zi7TKnz1yUAg9P9ofAAd4FjEsJ3reUghCxJjGvyVpNUoPsez",
  "key16": "3JUkRzaJXVjpZae9oeFRUWyVAQntesqcvpwRcrmKQwrRWCosqwfakTSyHcjivMPje7HRSNFas4un9zEaChcXCR34",
  "key17": "2gjh2RxW7RTWSxxqvNdQzJWGEsPkWnhSnVZQr94kZ8JViXs4cVAcGzwTWvsRGnfaXG8AeqRDbRvLXyr4FPwF3MZ7",
  "key18": "53XWKmZTgnyzopmCwWYcQYHLvvqvNk7pNzWFWWnNNtUt9g9rhscCp1YUGkNP9szex37e9e96athg4GG37s2JpAw3",
  "key19": "49wTkuCUcqRN4rmJRdXjutuWHiGLr7bvodt5XN9ebPCqjvLfzimE5gY6LSjw3TYHh6Jq75Aiihf8M9VpbLGLZT73",
  "key20": "5yWDLKeE63UyFbdzXkeQoCCRjytmEcZoPuqBjyVgRoTBD17KGK4SbAYjuXssecUSSHGMEQxyWGaai8jjni7jNA7Q",
  "key21": "2kqBmLHFgBELbAtuSq98G24iVqk9aG34KwTeAQwcYzqJ5LRXenPU4tA4hKGUEGkbugNCeQE8eBbwVqHs1MPxz3cX",
  "key22": "3n8ewydgW7V4oAcJp1KQwxSmdpq5R9gtYujqz6cfiyNyD4wdzfG4ux1f5Z67AXxvBPzQNpp2FZ8LKM7JufxeSNfD",
  "key23": "4JQtFAKXgxJNPuASesdU3Zs2kiERkUzEhdFTGZW3Xk6pbTvo8SKM39NofuTfYuQxYA8KEhXjv18uuRLCbtSUqWSR",
  "key24": "25dTAZHBcJmxX5WCmPeuch4BkC4BG8dQGfPRYtXCDEQ1F4KJPLyvQQSnQji1pNm8uLd5nJH2VQPUyQhFF9utK2sj",
  "key25": "29tn6LxQ7vsyusijygaNdWurfLZrWXc5CFug3RQ9DMjYP5CGdCAxB4Xnt3GhEv4SU2F8UVXbhJnkekQfmmRBLvR9",
  "key26": "42ENbxi1ZU5qBCq4xtS9qoTA27k5zPWRgD7SvLrDXSHgctBkg2UgLz4Z4iFarNmuy68XkxiQfzfsegdw41VZRhaH",
  "key27": "2BnDphkFE4X4m3Y76enXrQ1zxPB9LC5HJApscEWR46rFTXzGh4k9oSHxBW8t8JM1FAhSkiBaGgRRF9q4p8SZSmyq",
  "key28": "K2CGbJhHbDZrLScj7uH6GimodxxN1TsUjc3srtYCa7SPgumpD6JWsSArfnEzNj372PeSLYrB2j6RFQ2xjdfdvj6",
  "key29": "2AFoZZUaMpUA5uxhR7Z2xLMBpBzZ7nYMijPxr7dR6b7XGMqUckxBHuCH64USa7noSb7nNpQYTzrhN8vN7yy3NjG3",
  "key30": "32YtkCFyVL4GFognM6t85RfhZreHMLDuCNZEZA2wXdtvYzoV7RgwwugjbQra4rEBJoD99Wq314A978n1pmyeatJR",
  "key31": "24Tq5vj8eBYgfzcZUgUVVanvDsVKQ3swmZTozCRPyDFpSty1HHhwTo3fmfYXWauHUU3q2rvKp4t3nu57ovqYyr3f",
  "key32": "3aMcc71vCkMqNHFE5ZDQwWBPM198Cw9LR3kY1ZesLBZDn44YzT3TxnzwGN6jh1xjjoFBkhX538uPMmrcw8EkJzfp",
  "key33": "4U5CdtJYp6nkdfFwEr4BSf34oqiz1EK2TD5zUQVWzenXuDNndwjw8sejoqLARkQjGcbEDVhFoBRqLJb1wZ4VTJ9u",
  "key34": "3W38RuKhwkchPgJySF1LMmC8fg29Kv8s1qp3ykPsuUFHCiBZpsUr31Aptk9CvLGhszv9rDrrLKHEJwHVrYZM1F71",
  "key35": "3fkyjqzHgHmcCH6LLozohwM8xAfzhtpNwK5oGe98dE8CndUf4Qxo1cZwhkMVTA653eds9YJqJo2MtjdkFkH9RZKM",
  "key36": "5vy6TRaiFbrTvN2HDfa9WnMyFzVcKNBJtzCLVkygSD1AeowYgkw64ZF1eTvMTF6jz1SunsDmBPAS1Y2ixfVbckH4",
  "key37": "AF3Du93ay7kjLcvw54qYifUFrh4qfP3xyzCKAMKG1RtbmkytXftPeQ8oHYuv5p8HyH59X4N9XQPzz6P6SbRXJRb",
  "key38": "3fdT11D3hYw5z4PZHPd2G8WVPQLpJEKZEVcP3ULa5AhBaaewfpcJFYpXnGA3anHM3PfPDZBGWHCiLeCSp8TGoPZT",
  "key39": "3YhVCZHE1ujhKPhpV2PvA4j7kBmcvyq3BMRSqxQ77P3Ub48ud3U4cW619zaazzwRq5kxUYAEE3LyWiv1uyK462td",
  "key40": "3s2ntgoNR7JKd68bsf7BEDiDHtBbjobYKCY2rWjdGxJG6EbLZ35QF4XEV9CcPKcmaoyBjCNuAGoWikXEwDBewBG2"
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
