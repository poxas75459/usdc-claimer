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
    "a3LQQjPPwnXMjnKQuSzM65rpbd6vtALLcUb4mEkEJV6Et5PL6mbrkKhntHDRyBYnmYaxdcptTBiVeRTN9NKM8NW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "375KjKac3XB6gpu1dPQgqgm5KC9FtQeZL4n4NNecno5j6YkLR9hkUthQGbNudKEWvf8gaE3hYqr5T35UApz8pWbf",
  "key1": "5UdJtMsBDNDNf6Z6JfRyYbQphHkdruwnpJotb6mzie8tb1MUX1a6iKNuY9PVs82eDkAwnV61XcyFCfJFyEWTJuXx",
  "key2": "2Kn2XUKQmZ16ZgXmwMauysWE8tm9QaJCUehoaErXq7TjxYHDYmZ1mqWhQRynPNK5PNL378vaxrye1khNGqwhEs34",
  "key3": "3pnKjpeCJsYvaunoqLCY26o44qSrt2Gsvr8AYFCwgz2dCjMvxCmjNbD7WZqXVDSMz2yKhovX3cQ8aLrN6U9Fqr9S",
  "key4": "2t8RJjqDve9k1GKoRJ4fPnrmd8zXYQ8KHuZ9KWuP2mxtLCx6t1scYSDFHbXf71CG4q3fqtBu6h2qrQgpmCmVZHcL",
  "key5": "7xGze3nE6ZWSoQNiDiTGgJBteSEyi8q8Fy2PHXL6J5zxU8wmKJezoSGKuLCGTkmpJyXTiAWPSHQgZP3mb1tsK12",
  "key6": "34WJUp2XuprMpUWA2p2cec8rdjGLRUzddoNYEPE7UBMQgiQuLRyT2pL4531rgV5u6MWzMKsEe3nWqJZwBcGy5znh",
  "key7": "2RDVTAxr4FKKPwLPDVCY6Bnrpb3b3Jh5xqSRBSzYBF9EDhJ668ivbsG5St82jXSNLuU8dRokjwPZmGaGjbU87Uvs",
  "key8": "3PpA76AD4SdUHmZNW5W93KAxxoZxCd88EzdvUAsjWrcJsc71qnPyP37TyaDC32USPvjK31E9UK1Vsg9zK6NGkijA",
  "key9": "3CibLzdjdueTchzidnyonNiCQyzBp11mz3mP846jLrebEdDu89YxymUdoB5f3Ty37VyM2NfXdNEEmJp9Pi7n9oxs",
  "key10": "5pe2SQ1kkoM7amujotr4aPVWkm8vqW3h3jxzQmHDdDj1K94UjUgMZuASevW22QYkJXjmMbWMJaDQE49Vw1iN8gET",
  "key11": "3xGVNRdKcdocPYjuBoRFRiTUU23rDLJoVVPSdw1SneVTT78oxdXPFti6etNLKm2QtuLBaLxuqVK2kG1332zk1tdB",
  "key12": "2aTH8B3VjCcaqNkGMvCNXPAUkXidjaWPoyqPa2Q4GZqAQUU3mbpB2aMWrCb5CfdU2nDdcHx1KmxkN7XDgCTphBUL",
  "key13": "5XcZPR2LLPMEEhCr8vYham8egguJ8VSHRfj8aNusoqnSCC5WZnCYpVzPect7SWZk1y2RcowLvV9SWVuCY8cn7spK",
  "key14": "XpGt9N5ae8GDquPCRVbPyQdk9QiDa1bfX3NanRDAzt3ocQBP8XA44EF8hDUnqHmRY1QomwrLjkMuBxjxx5Ad6dH",
  "key15": "541dtC8hj8k9SQoV5hEXX8wcfr9n2aL3Ffkm5sR7oZHaj591UHV2yUkDEyEz14dYGgq7d86iXAp5FH6QbXZtAtWB",
  "key16": "2gVQ4P4sazAPqxkgiSxqzptEZZYtVHXdGJzwETp2azBbnppAkK5GABdy8DuWkkXcK2LX3zrbCMTe48rJFrkDJAUz",
  "key17": "2uQcxAY4kQLzquXg7FFGJjhfhetsH6EtXMaFwCRmuxfZaw9r1zmS8goRkaJMqAFHxL7TovUAkvQkddMb5qsYu1Wc",
  "key18": "Ny1Q9hxFCj8ynTscPbFKQnZLJaenECKctLHWhfr7o2kjD97wLQyoVigu8ysbdnUCjgYPwBjggQ2BHEcJd2k9nWM",
  "key19": "vfkbfGjGm6jgs34ANwaMeYbnZDVeHrEuPGefwBXapbhEdQThYSm8crf1J5Cp6uUF4dgJkeVQUzwBN4oBjbNPF9C",
  "key20": "5GCFgya3EPQxbsBksReAcU4kPZ9GdD7PcnbZUVXx4wujodJkffvhgXo4PPW6qkq2X3eHeEnDLEhNMsZQmHLhkxHL",
  "key21": "xQYiq6C5tgoNc3bmPosbFQHeEqyKoi2dvwnXRa9iCRwG3kQgUqCWG18rPLzedaNXaHnW7oaURgsA4iD6ai6anyC",
  "key22": "4K3t5nKphkjVPj43Vf5txxtChHSwouD7W7s8GVp62dcEzcP8fJFwPFBzU3EY8mVrnY7hRQwmPUGTsSDgWsNbhQnr",
  "key23": "5W4wbP6biEMBx345sMfrc284yJZvcQZw9XTU8ZRmHpRTZ7uYLaRtPtua4yZXnn6MYmCE6rGVRCZsuzywZSbaPDBk",
  "key24": "4bMb8dnuqya9Y814xGzNTu4RTnVCgBk8dk6oLcHUXYbFk1XwsWPrZ92DUwrKygMqEGykMJpP9gRp1zq6KwowiTvi",
  "key25": "3q8at911hLnnZC3viT8XadgJJZNLs8ziasz7x2hkC4SJMQ9cDqX6bYTibUCwFms1WHDxdvrw9RySigNoPkwx7UiK",
  "key26": "4r7cGxiZocseLrEH1q2dLepNmRxMagj8gDeWCviPxYqSTZxt715oewLuRspKc3FxksTeng5yTHwYRDB8c7vU131b",
  "key27": "5fTv5fteFXqoE5qzCrQdZ6e2RhWRTEDdSrWf8cxWtFXFUTxCDguB8eJ18VHij9wiz4WqajFFWmvUHESueWb3urEY",
  "key28": "4aPGkhTKc64d3KEpRkzWFhUPD1yF879sqeLZQNkncyptUM1CmPHpfVvXusA4FTRegj5J3ezDaupjJoNPdJZoxDSv",
  "key29": "4A13y2VaKhP5ZMUBbnuDv1TvtnEExHmsHPm6wTvKvshDzVqrHnMRsGpDjzZRck6qGamR8SvkjPFzeXzmyNxG7xGM",
  "key30": "gjeqh2EGtNMWqvp8tiyyokYbugHfSTQYBipvQD2KWy1aGeGT6DgYsbcYY1bDrCwuTy18aAjiC72cGSQ6Q7rfDrR",
  "key31": "Jf1wBfMKgCf1MHdDZ6HM91TYeVjaDWFci51tJ38GcY8ovkz8gzth4BJpgYVqfcsYr5gGCzJKn6TdmB9uMpYiWip",
  "key32": "2h2Zc1yAZ3m7UULrAsKgtbftAJAUYqu7WhG2qd3dzDbPx4Qpty2nA2Smt5mYHxtp7H6EKERhS73A6dxuvnYPtjMU",
  "key33": "5NXGVzdaL9ksTeTHDSC25ghVNNmQkPZZVJ1vtkP7DENPZabgmQPXaWpmfSbWXsQhP2ihvvdAN7h27xNNZyYLKPp4",
  "key34": "2sW7GQyqPvhc5Sdsrgz6S5degVMurAgLTXyT1g45FjXBFd7PwFtsUuVfBZG9GHdqEN6eqoz66x5Q8e99be99ETRV"
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
