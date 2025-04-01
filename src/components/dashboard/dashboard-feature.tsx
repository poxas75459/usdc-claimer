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
    "37HqcjUXzc1CqmDVi2fMrpm1m1DQg1ePPGwah2s6vzBGQe38xe5JAVNPbicJAyZd5j8o8M6LZjcQHQxxQsgT3xK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bayDQ8FH4QwsLMbdpRWYuaFwEDVK4mbgsZ5RHsBw3E9Hh7gRyUSn6x2ZYwwAnA2zpdZpUWP6VMs39HLKPRGV4dy",
  "key1": "2McB7CTMGncSk5PyRUUhdnHDYk2y9aR9fbccDANMKvfv4gHyN2TvfwX2fZhfN1HHuTv54yFfHMfFwhazfLoD1QJJ",
  "key2": "2eJttHy4fD1o1ME9zz85ejy6v4CCPfn6qZzz98zkfAjCV1GeARDkQbFnAcASytaVSKpyQDtiCazvY5fimBnt13Ba",
  "key3": "4TkurZ6Sg973AbpbRRGWFXNLbQy4mWfPTBwko7soG9pqordJggrYgDwPHMiTQ5Trmhn2WW812vNGa2yPN8nwqL9M",
  "key4": "AToA3Anxdwp84gYnG9Jt1qBiUJf1Mq6YABEghyprzNR4XpC1EkuHmC1eQ3YzidYBevhkuVYjXWjG3MXXJp2G891",
  "key5": "5qy1vdcnaMGqd7ru1zUJxTGhALge8XBbHMVrW1iSf1Yv26NzwFvrYbiudtbD4EcgLbZ6viWn4NnRzFxDsBFrhS7c",
  "key6": "3K4MimTRB9Lc1qbVGDAoaNzshZjkCRfPgjvPe2zbHV7gemjLpaDskDoELZWeA9jGVbgXCeTXecBnQAZM6FH9quzn",
  "key7": "BKrCQFs28DvvjzHKZDiHQeCS9bCrXjXW3LhyJmNQe7pSLZuKg55gmM2cpZD1k6TZAs59gdmJWLecWvR3YByGzqq",
  "key8": "4EmHvpXJTfLkdUvJzCddWkQms7AqbZfSxGwq69ufzEWzUadAhASE8qBG9sNHUy7WKZRQr4qRYAtWbVgLNv1a1SUN",
  "key9": "Ddn5U8xpYETsGAGbhDw6KXfGmgU5kAt1gDhkNaUPoDyqRyv244zoDdK4wmF7YC4opX9zQRQhVdgXFpuY44ocDAm",
  "key10": "443RZvWnMa2yvPAmifNZ3R4wZ6hiFMxZDiiwDmgjXTK3RSpbNpUrtpxktX8fsAKhnfp131GEF4Fuu8kpyXQirBec",
  "key11": "3mQ4UicrTkmHEWgjkRUVVZAyYPQh4DVFFjor9DT4WsKbAaXaeroN6dKY37HzTtBht9dWB8ScsLzwWt4nmAGGeCiL",
  "key12": "3en2jmNtaSmuTH5UdDvfhMpYLZ14tJEoqC4b3FLe7zDAx1sk6gCx1qU25TPK83cjWRauvB8J2BKdFoiH1sZNTNqh",
  "key13": "HB1TMeAnVcD5g3H6ELh5FvVXDrbARynv5VnzCrCEQLMGSgVxMPkqkoKEK5y1bayCQrj7gYvxfs6xCgBEeXTgHh8",
  "key14": "2WHxppVrhoYVQcEqenyaQ4cob9JWfYBrSmkiD2tA3saPLyRdwG9U1gx3BWzaMrYhmCq2bJMhjdvQgT4pso8Drr7H",
  "key15": "64mebFR8LNxj4aaDd3Vkk2NkDHqeT6csa9dRUAQYRtko8ot96toKv9uF4zffnLbjY519fr4RmtTR5sBUxekk4zoa",
  "key16": "sbtpp8a6zqBqYk9UCxgPHsNHo2QL589N4Q8JeJD3tDdPwadxXnrv5gqc2Yhc7w9ewTBUJwNysMmqnEGXpLKznsN",
  "key17": "5k8zRBsdwS2YEYivfZgUKioJJAwvBLHWBHpQjh127PQxcQW5pDGrt9RhXYBnBvTTArXzsGi7XwbU6NC2y3vi9uZe",
  "key18": "Ry8oUs1cp2GioDgTwkqLgqBt8bsHKdhyoQwT8uC9nhSbE9H2GXaf1F4tnp5cmUxDGw6ZCEMLarwLiroBwywiaEt",
  "key19": "41MK6fCrd3Th6S4WMNEdb8KCsfQ4Mrz2AY8Fi3kHPA8ENzeeQgspuyjXz1DzE8wPodGR7AhXH1nJFwRn8E36EF43",
  "key20": "c7bbU9WBzfYX3qxZw9H2gNEkPe8XYJvZ7KXKSfTivVRmPsYDUpBybffdNeBDCQyv4bW9jBif5bmRiGq2L8ScEDc",
  "key21": "4pWyEZoai9VSEmA9CJXUQdNQzXio7YDSYj3Qh3ubkEwUsef5Vo2vi9L9dP7Sg4udZSWKAfk4Qm14SiLkcUWpAvqo",
  "key22": "4PXPcAA3XrfYAvb2sLe63gLyddFtw4uBcX6uPf4jfLNvGMZx5vcb8GtxUrwMW16vJiewX5CsdFAURWt1VweCki9x",
  "key23": "26X8zEeNgzEodZkUkHenMbS8GiNmZyLZSpum2opsATpwtFR1vHDpLH615DfuVxUcQc2auHvjnFjnGFSWnw7HTQtw",
  "key24": "4RAvVyuLw5Vy1cxGXj4MsDyTcd6WAr3jaL6toTBwCYGq89dxxKSA8fvDtPdzkG1CRup2FPXkWfqixHnNeaJ8Jhfi",
  "key25": "2QERoXQTopXAWZCd9Ro6zRBs3XshA9Sqi3bbHWLpu9ZwD4oQPrZ9VxJxU746qXd6mp49Jvu2LHFwvqRMWgBCC8uu",
  "key26": "3yoQrz1PeHBBEsLo5y1x4U6yhoTigq8HkCcCJPcC6FVzHeDbuiJoBVKiXEExqeJSa51sweVM4mrexedXxK59PorE",
  "key27": "37Ka4uQvKC3dXH2BcZStHcZC17aGNxrxRiR9W4SD5CSBqe3nRH2QigRhvsDBcdnCELdztPudY8H5Wjmh8Rsej89F",
  "key28": "4LkT7fPtaSruTtRe3ksfgCzy14UmXfnHzarS1rWzWLgjXEj4qoArt4q5NjBg2NH8Rtb2GSFqMX5xpvgmnyb3FmMr",
  "key29": "4FdshqLRWBb6craB4yqCnhjE2WCSnjz7dqJXZZv3xPBxmP4GznLrVGLiSMsodTc8LtBgtGY1dm3BbwKaz1w6zvu4",
  "key30": "5cKv2zNH7grNGGzUUKf1xrcpyzjj9uiJRrYnmZaEyApogzwu1HwvBoMsCQs3HtUX92tW767DSEFWXDeNznrf8fxv",
  "key31": "4qb76vThshQ7JrbaBjbsD6FVsVM1P4X7ys3oeGPP5h9cmGiP37K9sNMvtY6hLkux37dUFUpBtnCjsvDqQqGzW2Sq",
  "key32": "3vv3kuFzHxjQ4hVtFrozrPf6gtN811QpN5Y3RZUKFeBfVUjuBb6bEAgriYirfr5eCAx375XfsXv7FjaTFzhfGUXF"
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
