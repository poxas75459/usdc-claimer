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
    "Ptot6BMyaqfNcWLqFmNAt7qZMCjKMiUwRgrhm5nSCYkVBSTaURjWDDqxQCJNW1TwAShXrhzUv3ThiQt4MbVmuQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CTkyzAfGuJLVJcBm66yXyRqLa1PFCdz4og6GEiExUcBZBdhAJwt9vwszid8NwYgYhMtNXKu3eeLh32QRtS7cvsC",
  "key1": "47DuXLGdY1HSAtouqCoGjkVKRcKSDWzjpZwPi3wQgW9nxoib4JXr6sdc7igzU6ZQ2ShmWivWvwE5G9KXUPYAMwNV",
  "key2": "M61iNT85mCSKzap6b13Nj9P1hGg6uAp3rmWSTQMuXcuRXwoco6nT6GR2kUzPyqDHGk1mK3dgWKrSVDKGpAZ4zEN",
  "key3": "2U19oFhLcKGu1f2Gdn9mbvaBHmC1DA4mxMZ6thYgR129Qmykpd33ccBZhiQGcw9pZ7RbW8xW2QxtHQG6jq4Mefiw",
  "key4": "2WfLxkzv91VjaaiysDu8jcHCjke1jBi7rgsrVFP9EjpUvvayoeGjet5gQXufYppG2y9WNpRBcSLbTgeLm9o3KRo6",
  "key5": "1LAu1bbrx1WbRHu5cHVgLX4sy228HVHwy7zXkxuMXemSBsMX7UAVwkvy7H6K7oZ56dRhRGi3pWX1xCuEymxvvd2",
  "key6": "5AvydBzpJuT9vjGQp8EHmkNK3XhJFotkuyH1dthMAnRrLjJzy996EMXXhkjz6V3QUD25ED9RpNsbHKJ3ExtNVY2D",
  "key7": "5FcS49uoM1n1zJsjsWPHRn1GUvn6i1McUduYNY6nzLU8iD6M2zLtKxuQfQpRxSajo5ZA1XX4vozg938vt7wSaQ2R",
  "key8": "5Qmk5VEv4ScpHZzzzW8SupMAEVtife3RWDqDV5z7mtLL6aAfDUvyM5LjqmZ4wAkBLU93JgP3xkUVt6dW4qDXKhjZ",
  "key9": "5mGnfp9sWzory5vrWqrXKkDemSKpQ8SE3BC1V52kfoosbxs4vJd4frwuWbrXWq9SiyAXhq5MhK1TnqoYApob1g4j",
  "key10": "8yVozRivocPpgP4oWc9es9NUKnLyY1tZBtvmNzY7rzbZtfC4WpWaZaYSoVWGEKDYbbMgfe2mBQVRo87HPdN2gTv",
  "key11": "B3g5bxBgh4RxHAvyLJy8fZL3BdcX4JjZXDPiMsgniBrnqffsN48HGoLh8mtJbcxtpt1pPkQFxtLH3SncqXgEToB",
  "key12": "4MKJwFP6fruVM2kQhSzKcnGRf7p7TXKGi3KKuNfUeUxft1hnwZ3EXkdqR4ng5s14EQ9wGXoFXUSPBddnJXdjxw4s",
  "key13": "R2rfz2896LBMH2naQZ1FTxbFvg4h89s2342GSoGbwwZhW2FWE9zyeU7n769uYBp58m9MTrvmkHoLSNvqtA62A2T",
  "key14": "fvPnhqwH1a2UYFhubZBKQx7onZ5bucWoTFxmQiQspLDyosV8PY7g4HZ8ZgxxqdqbVF67LeTjrbP7FUdrFhn6nEJ",
  "key15": "3SjLnKrVqcuxi7dmtDsXBBDfWfTh3s2h3Nhzzi56YVM9r1e1nz6vT39pj7NGB4hbt9G3CuMzFFWEeEt3kJeBdAN",
  "key16": "3KaLZ2dzV4YWPBCwmx9dymHPkJaRqShrcS8ADbEKjfiih3tYDMniKBSoU7gFsWbc59vcN4TnD4zPPnMPpfxiGt82",
  "key17": "5Ro2bZ1haWyYRDbtcuuzP5KbxXQuGZrmChzcKJAv3dUvCEZAJ6io8vroqrSgU5s9Sr8KcmwrA1zNbnRid71yjJc4",
  "key18": "3Q58KJny9R2ig1bmu88mC7T5FqqW6PFpC9YbeyDZeLep2pAWnCYzdS5PST7U9YJBbNtTRegpkGoXX6FAtbSNQ6mt",
  "key19": "Lb9FvHCtC47UavDnBETt4EDuuEfiPRgjx5sa3DTmwfixJpDh4nUFdJctVL5BPLPweH6pVVfhhwKB71qiD9udetR",
  "key20": "2A7eBL8geLeHk27Gy9nrBgcrfHCRiWG3D7jnmhgKySWRVKcZaBwdniyetXwf4EZZ37naLAfrh4QEWtSf4i9psnwF",
  "key21": "636mJBchpkKaLbb9Sjfdnr4zCh2s6rLawkMZeUhEc5Vyz1Y7aoXtCCV4t7A3kSqJnChy5bJnL1xbwfFFUs5Gps8Z",
  "key22": "58tu6r5uUnTwHdpvMLrQo12bgw4KewGXUqUFKeQpFKtUt1UymGRjHvpWAWgJaHzrqNptttMCinBGkYfgQXboib94",
  "key23": "PRsoAA43FwZB1GEcEfs2YPRhkUrQLSKKXe5XKymDQUukGxnGtaaChX17wtrCT75S3mNBMLNLLShtNu73oruSe9v",
  "key24": "26TbM51Qxeoy2tM78GC42EFERbyNdPsZVCoCavu6V7cg9Cv4X9bjZwogL15zpxkToXCuJ2fxwikaHbormn75vTdh",
  "key25": "2vei5woAcUBJ2hj2xbL5vttuSGq7Lu3gHeaaqcBDmVGKEePKJrjq1HfzhRcft6WX5A6ZWkcRoVnDLmMbENoxoY94",
  "key26": "5F3sfm75qKDWRGyQ9sRcFcyUGiuuA8nYEMZamiUvULV8hZ7BJbnuhpgxnQ9A7dNZUKZejnAF8snXW3nZDcsvTe1R",
  "key27": "DFnsySENr2RdTe9cpmcFchgS3tefBqSy58SvHNzbVTedqzdFGaVY4jEUnRntV9iuPwfc7jZVsZvJNQjQmmjWtc6",
  "key28": "2sFAQwR1Z74zgtUA5tXJwWpcfGbrgQZnhwzA252Qknf9cpLFNKe9C2shcoYYCnPWeCkk3vH1Ers1RP7xTZHpRnrv",
  "key29": "2EpqC5SApY4wYfoU42haLoVNV1QZMNMhTiANzYicxy5av6HwiGSccan4xNZQ4DcswEfdnquwiR5BxYJaQVzEwC3x",
  "key30": "4abvSMZWN7k3DBaJByCx2Azka4qreH4S8KUNEhDpZ6qCcEZzftGPEn9oxR2yEEqHduoV6F8xefC5r9kVxyrBPneU",
  "key31": "4Sd6DFZbBCmDMVJHdrkHe1Pg45r8f6SwvPozDjqfiJGDxdacDGkghLWfJEhvHBWFSq8CTqQbXgy3eqXNa15FpDTW",
  "key32": "37xNU66S3RouYYSvWxM8QZKHTPMHuZJR4TEBm8EUnpp6jvL2YFPtvwRDm1hZaFct2xpyAAY9fi8YSAQNhWLQ9kAH",
  "key33": "4ebZccdhdUsvhEq183LA4yeBndGLkzp57BQ39Y5AVP6jfFMQWXMCop9VY5gBcv1gP724nyvZqSQKb8BPKHm8p2Ra",
  "key34": "2MKrB6kp6tPugH8EkLA49thH6U162E4hSHysSw1WYuMEQfw9qcfEzwL59USk1FRe4GyuFGrDkTr4FZ9LJkpNUF56",
  "key35": "5BBpm7uEDH6a6rB1ZwFxwiF6Bizu7e8PHJSzoSv5ipry56VzJBkU9yuHHa2tZHPjc1QRuofZ8NxbMJRYjChjTJAu",
  "key36": "qLbWzYVpw1XZTEZhMii1oPVbKbggtUUNGK2mfxUXShyBTF4FM3g1oz8jryTWoKDqJcBjui1NQFWRkgkBbrw5UcT",
  "key37": "593gX2Lsb2BjaSoUQKgbfv5dsWDzVW2rus8BfCKEMpzv1vHwEo84UzX1ofSZSDyTijnLaW6MpLjQFqn4DsPRLEhb",
  "key38": "3vx5MSrUhibwgz89uGdGMjJrqUTAdoV62aemptsWpesBsuvYv8A5yQM2afP1PcPLPdLH6Q7ArEa7tNHeEAwcBEkq",
  "key39": "3eGaYL9gEPVRTCRDBHfGDAqGPsgis22t5FctyedGuSJh1bH7dMZtPdPxFJtWvE1dMbgtubyuBRjzHNM4MLCR4aVT",
  "key40": "BqLJNAfCKm7V66eFQfXNZrspWK7s9VCha6pqDn2kXAVgvFXwTHkiZHse7BD6kc2quwcUa7fpL6gt3sP15X8HUCM",
  "key41": "2pQZWNagVLCEBFJRtLmRamqpoSTtm9Aa2hAnyCrRMKzS6QsTTRRH3Mx9RMEMAbxfY9zdc4WLTGu9sa97Hm9hmrJK",
  "key42": "4W2b1xaTz1LVDTVdgQVMbw2mJhBQuCt7uYZMeTTSiFRDAmNV1ka6ezgYv4BYgK4YAjntPWBChtsAHWKkLhYN5EWi",
  "key43": "3jGzUbogFZamsUtmiMhRRcyvxn81qwyz9PK5QYq62BiZdBWcxqxzm1jJHYk3793bRUcdu7Cp6TKQR73WQKwudjzH",
  "key44": "qMBTZCXua78uoKdXpy3RQTeSBcQBKcCe5nLmy24ENiQXHRZDrYKsPuvcRDmWMwDAWQjwrwiSxAgEB1eQehuowN2",
  "key45": "24VmjnGPywu14vc31uWTC24Nst4ySXUQZkydRz4HWcAfnyxqEAbatJB7wZ39H5mL1Nv7caJiEfpJzJAGH3Fxx5BG",
  "key46": "rLRdkgLBrQZB691Pd7CkY6Ncf8Hr1zEacFZr9Fx2PTLkeR7viWPgfZ1SxKKnj98chrd9P1d3a2zQL5cMy5jYxUh",
  "key47": "5hNjLAvkHo7NNgRR5UVy1ydsFKbdYyJvVnWaYarBc7feZpoJHpLFfX9cXm8yR98nrS1khCg3xN1nx1icfKcksRSB"
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
