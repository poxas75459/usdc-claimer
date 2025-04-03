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
    "42xcjvpQEMdoqkVC5UYb4X4pCJdaTy3rytC6eW97JNyoastCa8xoGAcZwDKxzNUj6ZnSzGKbQnCjFnrR28fSVCe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TdNGC8FmuuKfbW8hsLw8ShgvVN5A5tZ7ANLnmkeWRdSHEkzwh5inEg2t3Hh8veibfvQa1g8bziYZhNj341ELTqC",
  "key1": "u9AZx74ytogb6eygPGziFhcFr3eneYtzDELpFiyd6kGmGiSh9X5UTRyccG1agqisXRunYPBgDgMqy4nfX4ZNcXT",
  "key2": "5Snm1uvMMadpou4WDmmSb6YBR849BA5k33TLGFDmfAikrKCdBAtyi37vHGSNJjuPRs4EJrmPKj2P3xTvVW9aXpjm",
  "key3": "5vDaEWWbCUQUeceUM7eeWYquPRYRWM1tn2n58gUfVcWC6NYSfUNKzvkiFg4Xnek5cLureTaf6cnRVArfa1W53CQe",
  "key4": "228LfHPHMLff9wgu8qqBRcxHy3s8GfVteNzKn6vXtnccpH4y2AjWz7DtAhsSbB5sRbYipPuhEkpcpnQEMi9fmy3L",
  "key5": "41sMPfAG5PagNi5mEXEUG5V7PvopfCurH2p4f5weLNCGYQK88J77UDZ33v5xcB5ppLuN1KAp5tqG9ZGgBiGq4xRw",
  "key6": "4pbVAJ8ksmK4EWZ53Rq6oAMs99QG2LNbjP9ToRMsopZFNvVgkofm4Jb8D5U8gUJKJWMBeEGjPQMqqf31nVvdB1KM",
  "key7": "5i6u3VLyFUc9CFVX9MisNhseHkETiDHtmthm8H9DJXwrUJuvmJS3s3GoEjK6RyzhzNHe2ZwmBXNcHnhJdp3YSXGT",
  "key8": "opZ3ipbvL2We8v5DwPkqXqoBCppb4U3Wx27kkeriaPW1xLaFLyVYEd5kCh8wJQXgARgCo2WyovScMcVMwGiCqmR",
  "key9": "3qwMyR5BK7DEnz6CjsSjLtvSjpbjvS4BAPyhjhBETF2S9cLfsmXHgeiG58m9UmFwv94wz2uiz5YcTyMG2vrATHTt",
  "key10": "4t33zJDegzn8rKzVoAS6bPDQCTtR8Z3S5awxp2M4wgznHmNbt8HXu8qurQqR2MzmLX2L733oyveifiUFgNxG78r8",
  "key11": "57WzKMFwj31LCGGWsWo3MFM3zxgcJ8wWHgQhERiUoyHUzFjcTP7gC7b9LUkUmLt4aNo6ACotoaSomywnQDKTKbPv",
  "key12": "DU5CSCbmvz1ceJYBEv9SvckEB7droTQJv6JgSaS9TGSdADKLZWDH5GfFTpoB3EHeunT4X9BNa7MNMHy54sxFrxX",
  "key13": "3Nm1zMRV8NUnZNy2yvKZnTNQAyuc2VqTRz9unasqCGU5bj3dUucd5dWERAnWmSuGMQUMoYqBnXe26vYDMcEdUk3U",
  "key14": "5bJCminbAUy4o5EL1xcXJDPMDGZRhGrrtqiHuWqsPa5V2zzsAmytH1XoibY3XwLfJc9pHPsdch6zYL8VqWKgNP4K",
  "key15": "4FNNMmtfe9uCPKsFeqB7BrDCcs6hvYXNy7ZX2PD71ZJPMef5q8DAdwgR1ZUbDriK3qd3DwWZxBruhycV3nQvcX3p",
  "key16": "5DAZfw5kcVWDGyXAQ8pijhaZpFvXyyTYtunKuoJFaZteQbLdf3qYfu4TuFLoXwwBTy44w1G7yB7rJE2qvkieT7jC",
  "key17": "vdrZSoAgB7DVKSKLRYrzcTLMVwgDHrzrjnovdvULgZZcikyVpMZMAagMfTJFPiN93MM2xZPBt4mSzGnVXMhcGYC",
  "key18": "3TDRF6hZvPumBKXVDg8AnRefD9eZ29YTW7X2GLs4wNjMtk34ZHpzqzvX6utMjkP7cqTZGr6BNJcj9Gg9SfiobMCE",
  "key19": "58idy4W92UhNAzxyX786uUBrRWK3Z4D41dkykQKwEzbu4Hv8AEBjZ69KZjmcznrWwBE17ocW4VA51xYkpdVXpZoa",
  "key20": "54McXtWvSxKTb6xSzW3dCiL84ow6uVf8Cc7feyVd4nXbxAJTGGTspPvHyDjwbGE79vomwqSAPsqTXf1ncBmhiNWN",
  "key21": "62PxJrWkDNT43E7WNdukoqyKYJmxT6JwDhZdpv4ozUrya9mFvEnyKjjpyDYiMbLjovCapKPiMgDmV8ugWjGgeRrw",
  "key22": "2PjFz7zTobDD8mF5HWbDiJm6sNSeeFvKB4U3i5pUz5ykrNA6dccSXZWW4oz5pjhPj8FMivYTrUVKCsE5oM8zCqRf",
  "key23": "4MdWi5TcgfFBJGUWdE5kj3TcXtEZKL7yh33wQRZDA7GA2wni4Pq229TMbeSTQaYbP7X32wCSizcF1RxGzH9r39Fx",
  "key24": "2Ww6JiwFv3N9DigDaMTPutecETL5v4dg1fAfHYDbRkGmVnQ5AiQ63mE2ejDJJXEATBSZ7M2EaSHpUrFA72e3dJJi",
  "key25": "43s22Epc5PpBGDAVPS6wNRFDAbpyYaF6PxP4qSPBRrkuTcsDq6twRpdoasBaVmxy9ApjjsZYUsQso7PSuFf4nRwJ",
  "key26": "2DYjtMW8HGnCbAFiVLSTih7cFNZLGp1sC4f2JKoDoz1iHx5WPm2y1QMhjuSu2SAvec1U4mPb8bQaSAYPt7ncanuV",
  "key27": "4PweuVjmurDV2DPvMHpKthpQ6JBJKLcD4HiE8Y7AK9kzSof25Byz9zKrQtuSAUfdYQNLMAb77X9kDnwY71W7z3Gg",
  "key28": "2KNnkCnyxtSDECsMno2Mw5h7CcNnJ9eaWNKYwUq4eMXCFWrB7Mn1qQwNPs8xfvnAWUQhVEx22HYmPwV8hnnrXR2H",
  "key29": "5uM2YcPzqD6AQdiAgMLLA2sBKaVfoT6RTXNeXtShvggrd1GRde3hS4hh2TJ2kBvaoXcWv48xNaDSiinxfM1QzZeg",
  "key30": "5W6nCaoPFTup8YSkT7oivS1JzRRRs2QxKD1ZJy4JVUW7pv6VDTUMda4VkEJAnaznmNfAsUXMUbrWfoeT1832quEw",
  "key31": "3jq7nKvmVAXs1WKBqtnnzuxTYdwu7vX3f9hYWoRB4iPMWiju47RsmqMEjPQNdjrZmjaa5nHk7JmH2ZyFSi87HBpy",
  "key32": "5o7Uq9c4f3Pq9nFaKGq2Afin6xo2SCs6NvL8SrxxYgJ4SPrbeoe9fQDw8xu7TjsJUzYWvj4dQ5avQEoCZWEjFbtB",
  "key33": "5Lv3eGpmscRHyEZBiyrMpAJ5CwHjr8xzbfhFdsFYGw1PXHzp6GRgZzLbhPkZnkm1vb6DLbbZ7543qsLbTCCFnpWM",
  "key34": "33zYf17efDgxcTRXqPdDNXkNFDzvArRwYqVmrT73YwsZT5erPDZJWh7VnnvB9rfLh7wES8ebRcLwnX2Kyf9ckAog",
  "key35": "JTvgqp9RUBgmjAVHN5gk9mm2NoJiVcanqtbuAJC7JhQ8EnLTZhLWYrxZp957gBzQ3oMWNu6WQQQPX9pUjtXQFVV",
  "key36": "4tPHMfe84qw4r8hYXbSvmikuCBnCoqfh6dGAquroyrs6ojEmwJF9Pc1soKDxnV6zLJ4bQwE9zjUQ1SgDCCkCa3ut",
  "key37": "32pC3xQyaeNep8cdSGNstWxGYagSjZaUKypitEATjFDkkdoHRfwAscviDsQHXPTLedfBQ9CRYJcU5mjBnwdMQKNu",
  "key38": "3mXwaps1wzKtKm7CFAM5MMXacTymLzRNNXe6XfbKtGa8tpYzyKxwhEwotPraUhvgqXShR6GQ7C651MDWN6jaVoC3",
  "key39": "48oaoraNBo2yXBnChhU8LfkJXdceDPGgLZFmZ5ucYX6RjHAh6wH8roPdZFw3zcEfAosk8vrU6feuSWsmWZHrAR2d",
  "key40": "79TF9NJeVJvgLXdhAMGBiYWbHBknqu7VPtLHU7R2kHPjGLHVde6Ur6FWefxftYArekGXFdLHT8YtnMKaNqD7NBG",
  "key41": "4dr24fdU1muXgKMmf4GYPGuUBLTwxQerkncwbE5pp8y9a8QSULtZNJs7UX4qUmGViCyUW5rSnfVWoRnzqyBW3eEP",
  "key42": "kbbPb62mvEmfPUHkiPHvpbFd8ySHUCQSwMNeXbqWq6ft6MtDjpm6BUJDaPWyWDBCHs28e3URtv6b96AVbmsfNTj",
  "key43": "2CsX9J23Eop8MQapxfjAQshUEH8BznYswomdRgU9RUbBFz4cFR11xufpg8CHJk3sGZQ5y1mMLkEmF9kqyEvVA9xt",
  "key44": "2mC1mYU49dVA86swNKeAZnbL2oeTfNizrBWJfVv2ZtLDNqsNjeTB4a11gzpmNqxYxy1J1yVak7tTfvWn4dyS1YYZ",
  "key45": "5mnn6pgkvxsm8kPMQFzza7HWoyeYQw7kjuY924nUYak8j4v92cS9CKMvLGzhvsWrXx2f7NoQv3knpEHyTomzuMo8",
  "key46": "2uuCGf1M4Qto3cCA9GJrcUBFvWMLLQ7XjVuTptJzRBXvTnuFoSm5J8HwXt8W5BY2xC4Epz1qsnaP7iws6oPTuwuZ",
  "key47": "649jwNUiCZhPDsj4d2fRRCvxyGicM5gcDZU1qmMd51uf34XGUoygCnDQ9LAS6qCuaLtAghX7JaABh982dTGse5vg",
  "key48": "FLMgduhvN6H9VyWMoQBXPcb918eu8HNE5HcFMWphYLMEoA8B26iJYfRYjGHNTHKDJ6fDSEGmSQwcCVQyxtvrX53"
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
