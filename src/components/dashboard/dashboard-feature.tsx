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
    "3iWyyLJ6psigvWjVdGJ4mANwmbjxMLMk5FApuS7UnPmGFcSrB2PzxmKTUpoi4eSPx2UXHGx5tVxjBaJn8pBpFuNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dDjH6LYCAJRkrWXRuJWtZCgTDsy2sXaTQx6hvLuVmLMjEwPN5Mh9hhKMpZtjbqbS5xpZjJXS3Wzb7ANN8CZUzWK",
  "key1": "5kPGNVCzMepauZPPCVkQWNDMD5Veo5jziGM4Tpep1vqsGTHi3tbYsGLFEHYswe96vsfktmoEDfgUH89VkhGoXFq9",
  "key2": "3kjA8qCf1pvbjEskBhfYFVhPbgsgSV1HUGwkUcSFraYFWLK1icxJAg97usuK2TVNoStrDvQ8HBSwSELHcHFxJKVe",
  "key3": "5RaSekYeZRhBSn9Cz5NyqjqvNus1Yj7MBWA55YhtM8jqsNPTWAmavu7nt6M4bQm2272JtjwFg479icc4yz86JQh4",
  "key4": "aJ3URWd3aSaNqME34nBnHdHxrPTeHGdAkkKLfptp6eFVkevBzz42psB4mSJU1bFf5jPU9NwHZUPbaQNzjjSy9W4",
  "key5": "5c2ak4ZLVMUdf5JnqEZitenX4dTYS8LbgqYwe6qtAJQcTyY9Cy78BXLnrVXDHknHsdFi9CK6uwpi77vZ8xE6khaC",
  "key6": "3GyLpEs5S1yBYnPA6ybb84FPcNDZF1BeJAFDU97CHkGkksjXdsX2KMBfuWKDHwuT4uTUxnSCtf8fnL2Xr63WFw5w",
  "key7": "gfZAnnVBMK9QrhkQn3GiBx7k42wnXs1eP5xnzknV77erJvUB3tAqyVGvoQDwvkGUdVyAM8qqNaczgg7VHFcjQec",
  "key8": "R1BG8e1oWwAQ9if6zkg1XWBtvCSSJSdPfQBmyLKzcg4XSYgtP5o7DGVWcgxcLLqmxRhH2QVDDt5sgMwRwhNGmYt",
  "key9": "52jcwYBatp9m1SkCbU5KcGRb4wc9qJ13aeDMr7JMJh28rxu7F7h93BThr5LDsCGtQA3GsMG9rwerQZZ6XhzPfWXY",
  "key10": "43spsi13EUVGZ2DjMgFePzC1PSbLvupV8feEyVzAKS7DU9xBpDyJktzzTjZX65cMnGXmPf7arX4zLaNVsg5KS4rm",
  "key11": "5Syjk2MMUCWYsQuw3ARPxna9XMMstYbYY7gJ8KJt3eUJdR6Rf3supR2upDUiBLXRTajFHDcPoRixf4pGgsGydQRa",
  "key12": "3uY4EPRK8g1bbUa2z42gge4HnbxW4kdFQba4re88ZWTSghvNy4r6fwCLhDfLGxQcsGWRYBoJmYZUy13gGG11RyHe",
  "key13": "5WuSqw64mg7fauyPhXEDkp7VVUCucRn3h5kKACFpqWRRVgsMZWdNELfvyCJNRvfyjcXmvgoQciCP78NJaAQ9S3h8",
  "key14": "3WVoqvXgyESFmEPM41rNiJhVGyCeQYqZWX81yLLGXFnFWioZjLQAme3Sch7QQrZvJ29W35exJr1BrPCUyi4q515R",
  "key15": "2TedUuEQvC8R6MMg7yKvZdbCKtdccKn491fDxeYABh7MshevGfR2VXEbqWzeK7yc7K8TbMXHNw17nGWcJr6Cu9jJ",
  "key16": "3MzzyTNvvgRBC3z3ymdAV8puEntyFmUY2m8K27pimE5X8SJLDLvZfV5EZpT2ahb55SkspDX4FP5Hi2gHXd3mYRzk",
  "key17": "4vCErGs9QRsFYnwyxaL8YDmFUXzmcyayVQPqUu9vQzfPe2NXoBzNdJwZ8iJA6ButYvopeEu61r6uq5p4xrepkTBr",
  "key18": "59M4Nq8tQUoVe5p9UmByHDUtPMCN9qdWJdfoQrmaHyrouLA1KbCuufQz1zF87z2bQjHYYcgj5hFkpkVY8cLRzWTh",
  "key19": "45ExQpehzM4BNMVeVKGHjTGqNfWGr9csJqZmpsZ5GVBGfL99xTzBay2Bxmte6HuVHzHJAiL8KGREobGcgUdgMx12",
  "key20": "3sPRnhEneqzbS553Tf8Adc1fEwtjrKUbkHDAvVmYcDuyugJPEAUQLAfo97rWzXr4jh1wM9oJSDvVT4vFYYu8dBwf",
  "key21": "233db4znDeyD2w4TRPqbPfppu4JG858onfHq1fS5CLFX7Eq5xRt2EsGJsWf7Nby6QqUAV5VmtqXmqR8ihPMq5CuF",
  "key22": "5RALQXCM5oLcKDom8wkDrKoHXLiV5746qdfeuM3c9eBDbw8cLa5LP44AegcvCEchiGCD5Sokfip17ALtKouqefA1",
  "key23": "4NjkJzCxoykFEPsBMzfYEcW2oKqNvwQyEow3z6kSmA8uBb9YqnEqCxmMitV2wiQqdEy2421XJ2teQ6C4FxE6FVYW",
  "key24": "48m5YVrvt9aFXNihe7w9HEywQyVBEWNR3ht14sKS1dA4rYRzV57ATATztZ5F4X9aR3TBebGspLTJyHmaBzjDed58",
  "key25": "5m4qzch9rj8sihfcEzv8ZFwxDPKrjkKckUrHSgsfPXra7bSWNuCDKLbM4HmNnWiFUY4LHkXRDU9jecfM2X4jVEQk",
  "key26": "4DHLWL1YPUvEwhQmoXrAa9dZH2yQFCsoeiphKwWxjNVQLfH31sck52qKhoZcyns3esCAxVHcY2Apy8EHrk3PQNtx",
  "key27": "3jdGJk8qoqX98MEC6jmm8iYi86gtPG3cVBtjsjBLMqag2XrJ1XT3mhTEYq8L6aD1xuUPDxdKwyEfFcegE7irwkkg",
  "key28": "53Pr7wSgQcdzLfGMMuz8LH3HFDgLUZcE9X72Jmo1uCbnLq5s9d48wHXgsJjhBSkzwNmMAxsuN5tfKW3iEv8AmRLs",
  "key29": "59RD4WSzg6FSDcn3UpHXXQ3d2BAdiuYGx7Jh1QTMkLjTywkdNZkuBJ9BBCj3TuxWh4PhyeuCXDgjTnbcbWDjS6XN",
  "key30": "btGaWQs2nWLpzbHCNmJkwSC1s8qQqjbxTDX6ukJTda7dy5PK1FLD4Eh6ALrrfQjwMu8mjiHgNqe84q5HCr7wRRA",
  "key31": "4ZMn6o7CfHiDznACLuFaekxjuwVbFLzj86Yi2zhJhYuZx7gXn7tSA8x7kHbPo975hHF6d7YhDajah6uGD9GH6DaN",
  "key32": "4iwWcQKNAXmSJiDTSi7JrfxqZQFXC6okdkhSmLdh4oqefccQJ6MHBVcwmCZ5zCkHUcGxXD9NiyVDErccYf3p3fg5",
  "key33": "3TqF7YE4BSn2i2QeJPGoEunJwrJMWnAmriyH7nzwSJd2NiTYzQ33povkyfFHPnRXewukipSTBJoLBf7kcNVHB9EG",
  "key34": "knTBhmyANbAWMs9uGom36WrZAen6SpeEwYuvqKwZKXSWLttDqqpuCGQME1tjior6hTLXbGjSbxnxpE6R6UcLjav",
  "key35": "22titXZKLP4JmTS18TVEeGSL5fGYe1jSVvqFdDhHazRHNn2sAX3i9f1Jv63uqUKGzHtgaHUFYDJ57Sk3AHL2FSMD",
  "key36": "4PnCJiPCimWzwME2peSQyz8odz4PMSefdocAVqCgxWzNtH6RWWotZ55LQyxtB2uBAxPaKgSt25ehn4yqZEwEtQKh",
  "key37": "4Jo14v7aaWnf1Uim8NFrBgudVfNDWdR8WGCLCv94ieanugsd6MMXNohTibTFnRuVmLzCbrw8raufgianD1wDSgmU",
  "key38": "5PQXXd9hv8ZZzUxXHrsccUUbXseHS1zP1cazt6eZtegoVQzSUZXJSU66VV2cM6JLrFic4L6RCwPTMcMpFFMFvwdR",
  "key39": "w6QUuhoWhMo3Z7YUsQ6R5XdJWkxwHtoHic2qYkQNJTwnmExZAQb8EcEdoFrveohUgDJJHJkGScEueXQQ6eJk8GW",
  "key40": "3X9jZEF2AUhCcKauMzLd1i7SCJ1q31qdHLDZAgaSvYMx8ucEHiE6jwJNw3Q4D8n4HJd4ePyKAy91M7N1Mn4PXoe7",
  "key41": "4q1bGV267DxhTGwEUXbii8Q5jiUYMsaqYbo9sa52wegNA2AfpMJnDCdRixcgHdSbMatixdV5Q6ecZEFNnYLdrVRC",
  "key42": "3UGczQ5feSjv66PSFCLkvTtko89Xo1dc7ttkTd4UVD3WRYxPCKDj4Ej84kVt12HbZxqxQdXCiR77ZbJaYe926ri8",
  "key43": "3dFMEdLsbGwT12Kt25tT6QbtymA25Q8dNKfh4uGCpZXAkauXYLxCkiFHBQ4ADgB8SzfDNt5r3ADNuxJtDUvnhopz",
  "key44": "4ZbybD5vYDEZmdBBh7uJMCft3Z44CnAodg8xazAtwgQcD9Tjca2woEHLv1Zc1R4g15N23kWPegsMFjnz7s5L9ARA",
  "key45": "2HZA9pRYdtnJqrG1YJ5b9vVWG3ahzkz1hpE2qCe534eFLXHMrftjdUYqHtwEaGt9m8ier5AZsxuEAQdv1hYjq8po",
  "key46": "36ohAJWBV9yv4XqtQKngBGXzYRGF8Mbk6yznRwumWHxi2LuhQgguSA1uH4noAXeJczDD9w6SAaK3mSrzT6eAxmrd",
  "key47": "2Mk7Sexbm7QkVmfLXcxetT5Bnhx1XAcPL6VCYrMkaCXtUGfiBg5bsiQmHktih95pkRRxHeQPLRbcFMP8izRNBSot",
  "key48": "wZdfgKVRhd7AEq24dU3G8Z4UvX84QEZ8R9ijrtUtsu9hncrBF8xfXqcSAey3X8fcw3ZhMvYnw8EQvH8yUUPs1Wa",
  "key49": "R38U9koynKxJg6YqJDrU727GgqtXvb591HiNKbSi1nybqneQxTpFPVF8tCk7ua8nrnkHozVg4SWJTG8gcQ9jcw5"
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
