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
    "4U5CMXaUvZs5baZ5n9htoZcouBDv2txEydrhUNX9f6oj9DbUKbLpszKuvzMA26QSKcrrNPZACtYHrRjoN4Pn9wGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZDooxBbBfVGa2WpjLnJcr1qYo2xJduME1EQLjKSuYmkjgTa1r6Lb8Ubb68o48P51d4LZSdVZyAQu2DeL4wqVYsw",
  "key1": "3S3KSSgcaUAi2Z1pGwEZCkGWhmVyKnNHPXwgRgRJPT8DfddD4ewL4yYDZCbRBL6L4Qop6zZ2Tpfbd8q4wCSGKUUN",
  "key2": "4gyd63qc3FPdKZApFemEC9VX6H1VQtK55AVteaCTgvwureoXeFRuuCmEYp9J6knMnF6xvkznF9yWAqfZgV6VngaV",
  "key3": "5X52UfUAAE47prxx2JSqCNsERm9HUVpj83a2FDexjBSFcNF8SNrh32zNeQPXi3bP3eqV6xUR2k7MndS48wgmgPmT",
  "key4": "3zngQAUAySytCEj66SYjtShrsM98zrRKYdd26yHf2ijqWYfEsWvHonZBENQD7JHnKNM9FtYrSdyMtYgfCiEwPpKP",
  "key5": "4Hz7iNrsThd5YojFXnSh8PiyJkkzqe9kST29dzwoRTaygCqDVebzicCEa2woNVWDJAeWgie8ogsDHZmuxhoe5jFC",
  "key6": "2Zj5Sx9wALQmUgXU1wwgD66bib9DbsSGWDGb5CpwouT6u7tvpZnrPabDB6gYBysgZhWKWgwWrdRJbboe6wHzh6eS",
  "key7": "eg4Me5KwhP69D9wQgzNfpVEBCw6eygxEqERpdsyXaC7S9VZDEK4yHaQcRXBze9wprBaea3GboXZXKoqd86CErUJ",
  "key8": "jFU6H3Lxxn7PGvApbn3FJpz1wTRUNcJjH36m5LLLPA7QBF9cpPPdFGRn8i4xyE8rJqXakQehnhj1ns5VCEHigah",
  "key9": "zjWmrY1EA1ZEfETHyVqVfHZhvEPUpTYF8dAPFdQPUa5MVmUM4coPcC7Tra9FLgfVJPN3n28M7Bb6B59u8Pbz6NM",
  "key10": "afMtoTCW2GewvzubWqXzBNJaAepcbCWSTVjWFj2fYJSg2ejQZ9ZBqyCFvseCjNQY3fgNjiJ9JcBFutZHa2mQH1C",
  "key11": "3gkmC8S6hJJz7Ww8qDABJxBR9y9GJZcQGe4LCgCtmLx9UTCgAMBFay1ZNJYFd57A2RmELev3pagcCU6RtjUfR2Xv",
  "key12": "axZRRPxTutvQzobjM71VZyaqRkp4BcQumfCuGLRJDGNJFk8jpB4znXufxH8JCKWk89SSQ7rLniboL2ccpEijWXq",
  "key13": "PBeNmi4tcdYzMmqepUsi2q4Bm5gMtix9bbwRXKowcB1a93zQT1zvY9uCjPvoB1yaVGrguKHxkvh1eQ8A6KDi7rU",
  "key14": "5XdkasKeRwRaHtkoWpdb7rJBz8CTntJvsEEUiw45bn3r9ztie4XF7Cz1YeBAuKZvyAa5h8umtF1SS6R8obvRjwYz",
  "key15": "i4TWs81NAyNK1NJi6uqKmBZnXkNGsr2gEem6yYsWuAqJmLurfZ83JjQdgmfFBUcgjzziiY69zy9kxVD4HrLtWPC",
  "key16": "3Gtss1rg5WwSojhz2tT8Zhkitp7Lq9mvJ27yvWzBk4vNeh3VKog3U8Mptgt8fd2JyWYAWxajoJUvgBc8decbchkH",
  "key17": "4ZAKTFx6wXv4rGX6VYd3LpE8uuJjBwJe8qYfTK1yu8E5Gw43R1bJUXQ8N6cQ4FjUPVqun1S1N2Rog1AryTuhjTov",
  "key18": "2X9AT9cmm2JZbEHjAD9UKNs6c82tdZLhfpwfbXS8esUEJ6EhPuap1XWLDtcuXshk5W2AKL3qsGig1YUx3JyuZ7W3",
  "key19": "2kZTWtPvyoJFuJrMmhNfkfHaThZKsw7cAzUv7XwH4m31aLLGeNpKcXspi2dCY4F897xDKGmx5Mc8W9XU1aMPLpPu",
  "key20": "4yRsAk5aW9BGF9PWEZ4ygaCazGjF339xX72VNfipKecKTtwr83VfErnSLMwk2BxJSGzbeygiQZ8yuhidroqmpt8r",
  "key21": "zRP7QLxx2tTZfLYGV3JPXjW9WbMFsuGjrzHu8f1sbriX8uHXQ75bo4mYUHDYQc9jyboudzAKNSUgnAsMexbML6D",
  "key22": "494Q7y98N38oc2w63gvFnBwgaADUYUHijsxfbwPiJzrJkxgD5AijfMM2W9VbU8q6ZKdVPSkg8MxcL9UfHrCTZ5uN",
  "key23": "2bBDBFR5gyq37pGWPqysFCa5FXLTBpQG52Lk9sjbvp1onJsdDrVnYVdVZaRHwe1zmqVAEVE84BHaR8Fh4SPvRcjF",
  "key24": "3zn8kFoQFYcrCrg94amjrvNHvSGJwxsB3KW6yjWaES6iUqCnk1NojPHzQhAiSm45iNMwXCDsmaduqcpNzHcxFTWU",
  "key25": "2MKKc1D39PHw4AgMAqSWdJZhHRAeFnBY8cfTrgVbA3TpGacpuhqSaN27V2k3MLC4ynr9prVUEkLkCBE8nMG47svD",
  "key26": "4oCdSSYzpd6x4VvTz9sfC5S3awjYR5piMrxXRbXjtSrpr39utLqnknaBJiiXAdku4X24SHbLvfgVQRJuUmSfAifC",
  "key27": "U5kGQsEoxgF2YfoGSyaBcWZNhhP7utYAo49YFwBmh49vTdRdHtL9cLzqN9xSSvdpqwzTKdybR7P8DbTi7WGfZS9",
  "key28": "4bEnhJncuztaP66CLtUDrYfzwBzGBmqpg4Ud1hRHB4MTJojS82cFm1RgNfeXkDKhMxkKeHvfSEnEoJBY3yfmca3n",
  "key29": "3NjsjdH1izsqFPgnTnkYFwcprRC7H5wEBhzNtC2rMU3kUNrrEoW55aGnZ2FS1WbNSMvARHnKSiSP9QYoCEnMSGY8",
  "key30": "VLuRkjuTDEfngAF7brGkoPA9TfypmXuFcHdTzn5nVikraAcbazQTjtUZsfoubRShk4hKXn7z6nSWBrM3ifXsRyi",
  "key31": "59yUBxSHcv5VGJL8bsR2hkXDAegSmMak1njYBm356iDAdC2c3DtQqTkiWTcQGXRDx989mbjo2dRuuXx2RH3dDvrX",
  "key32": "2UTcNxPFgNWjAXGuuHnyVsqyAhw9fMqThgUYhVTz6UxVMtwfWbjaAf4txykqme7KAk8QgU4DfP2GbHtH5CNEHSzL",
  "key33": "3UH87XJd2vLNz4nBd4eBPVGCH7A6KDEhktpYsFUuVV9gAfeprFf3xXS5AS444p1P4KJ9jrh9C9Z1ZnULuerBW4dv",
  "key34": "5MkErsKtdQSr4XXxpVrJPQJrNq7qB6wTzyTe8Xb17oTsLxytkzXhFepj4TCCD24TqWDADkiDR6trCnTZZpxma8qM",
  "key35": "41NTGizBdMF4irvZmgb99KNESfdka3En4yyms5r7zoEqNwYAftRc1CZmzwKA23BYxBv8W9EZFdMcon9HUJtcrWXn",
  "key36": "66N9uXkX8zucLwaQ3nGLSE45vT1UvpG8Yv38qC2GxZK8q92C8wWrFQUH16TaMMwiixSARxNTf4MqUCaFARFpWQuv",
  "key37": "4BVgWbZwhamugc2E9iziPkPwvBWrsHseHDf9YsRwRnxwVrTFdeHHtD2tep8VmkbgkVSgEHsBNqqNQn8s8gLgxniq",
  "key38": "2m3mDaCEt7Sk9Gy11CohqxNonwbVSAa2e6r45g8QVUPT3JzCFFmuj3RCG7NzRWc4u18pPFfSRBD6B2QtqXtfGU4k",
  "key39": "pSypwBR3vD9ycKis55cpfzEVr2DMLbAigpfcETmsHJK5ob15U6aHv2SotTbKf5jnKx13KQYv72kgS6tH2B7zuue",
  "key40": "fXQWUmi2vVBmowvUguiDyXJ3yoi1mfj8cvcJQXPHpVkwZ24FVFJySo1LMSijC9cGRaKZdadP286eH84SPwxk6QY",
  "key41": "nZsPFWsxSrT1oAMJbSqV6CuTnptRthcycYRVZFXmUd4BoE5Bm9MDaAwhSmuXSRvoV5cyiYWN1X3dRZZp7b2o9di"
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
