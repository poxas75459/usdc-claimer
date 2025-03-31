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
    "wHAX2cmgqbrRsQkViaif1JJ1EqNaeF2pXte3YEriotYQ8cuDjfpdSqMbWwcpJQv3eTDobvCiB23zrKyQ23V1xK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EzyPNZWhpsTK3RxBw3bYYYfMDCT6KnmGQt8m9gKycfx1gPuYfjNSUu8ZdYSLLcuVbnN3uV85mcLpt8RRddheWTQ",
  "key1": "32nAx1rFuE4JwFNhwh7VRsPAvPQ1f13ZqFnz1vRoMzoWJrqenkinR51595rpLWt6XW95P3xN3iCQcnUSBDMgQ1B3",
  "key2": "4iDtFV545UAeMmGiNRLEB3cVUTNopg3DJmFeeFbWmAb2NGYKWCtxuX5dzNTQqh3ZcppbtjiGRGrKmQn42ep46YNM",
  "key3": "5kgFbPX734tkAt1sLir85RQ3uLx6TM5ArqS7AVcUgQAYVnR2T4JbnyhouE4NRjLdN8WSumeLGwK79fNps1zitUwY",
  "key4": "38NgyekiBhjz5MxakYZ5qFDauifoCAVeUUqWLJLeJFLfcysRSUXKvNorooM5aqRNQm1VY64bMdvm8p6Nj8ikTLpD",
  "key5": "AaJ2NnyGtDL75ib2VUXZeF7wYd7JeceAfG2X9aVMrMPYEwz83D8jDQEhFECdDTvC6xAtDQFhkqEBzrtzaR33Aen",
  "key6": "5JKBLdah8ZcWszLprupqCpzYCpA4Xei3u8HQVoHBDrrpKwMSZDeK3DDxoafLdHTNBecyF16tB9Cc7tx6a7GJpmtP",
  "key7": "2PN86PKpPej2eyGjURsFCyTBJTXfYUMFs2uR6BjaYTTH7uhfjfQ75JWWu7994zobNRDJ1hJbRnrwjJXVNhKNBU9e",
  "key8": "2btAakDCaCmLu9ZZ14esD5xkNYeUomChKKQ32TMqTovkoYr3jHBegmrR4uf6XfWqYyFYepNAfRJnWfTSkBGz6fZK",
  "key9": "Mhc8Ms7HJWw5NUY4rkcHt1St1t4E3r3fVAfM5dwPXAGiZkcmbjyWsKnnCJNNR5SpcTc36Y6Z3fZyBh2wsCs2Ctc",
  "key10": "46K2GQnPwZzVnYRy4aPmStoa68fyJth7nBU823se167B1t8jt8T2bdftJ1DNDJTyDRRtAcsvTpBt4os3TsSMtk6Q",
  "key11": "5qaatm4KgXx7zGPwWeKJBiomHNYoZdT4sm15Uw8Y6Jrje4HvY6yLG2MeqhWFUrQufjDrrXCjM4ZcF9riN31ctm9f",
  "key12": "3qQCMGbL1k71QGkiqQC7bXGkNmq6zZsxW3BDSCDqAdUhnFgZz6MQsEZ6nhktNJuh7Pnqf43gY5a4UUJ11K1TkhfW",
  "key13": "25msdw2gjP8SJRYrxnLSNYwiXMaZJM9vzXTk1Kuc8XqibSEb7kFUPjjv7RsBhcn2yTABaGqEbDC3y8zfQB21SLPs",
  "key14": "nAM7Xs1B8qMVDEdjWLYeedTnawroirAwdzMmDZMUPe2RDQJaBj2HH2Vnou578SNsdSXbgGpDdYVA4YpishQi2ue",
  "key15": "3CQH6co3GfhQMSyiA4jNxfkuUtDwkHiwc59HbhTKxkJzAUmwKFC7xNB9F2K6zLT4YDXqe2JCmcud1Lf7FVijgsMq",
  "key16": "32UB2uG3MbfrHKVCeQjYRbq7qWHYK5rRAJaDhodwUYTvuyZQGpWPF6kCSPi5onKg5fjqhhcKXWszo7EjK2PnLsYU",
  "key17": "3zU4AV4xFhJj8fYJDNTTNbpfDgaBktP1hZV35uWSbSYgTK3UUi2VMjrGTB73ushVQENcP7rgL4xLmFi9YZWMc6HJ",
  "key18": "53knRrUqwjdd7q6ZLjc5pcf1ZRLkCNisrFz4UN9oXsAeDMpcTVA22JgpDF6HrffxdpbR4wodsjvq5soSGRobBa98",
  "key19": "47EFSi7GW47YiNiDRZMdiERrbPKefjyStA6p3AMkrntuXEMf1PBGsMUko4mRScu7N1fsLtvZyM9NcXDpYbEQfeSz",
  "key20": "57XpUovBSgKstmwbQUMsmJv8p8bsJvEVLNX43ySpjMWjLgjwqthqVyhePjnMFdbYzeHYmH1F7VQBvUmsXCFnD5fk",
  "key21": "3FF5rfVtuovb1uu72Fymd7d3Gnn9cxysoHKCgDuPthVvmcjxd7WdaLZB1BNQzztW8aRFhGLU75u87jhAkH9aE2b1",
  "key22": "3Z89H9uo59ap5eZxtXyxaA2VtQjNubtcuzQbgpT2ADsc1VirBdA7tR4a9mM4765tsj2794JooKo5fSxRK4MqfewV",
  "key23": "3hvumAZ8nhBsmQhAAYVfn9MdYWUpdd8pqc7rWjmwYugTzjh9u7pFn7RW11nPk9Fyrq57v1E6tw2U3VvwAFFdcgmB",
  "key24": "3B362puLrbtCgG7EfBQM14qJSHqQScUsGNaDdSrtMDjqvfDwKpYRywCY8MkqGkCJoK9q6Ly7dxjm6XrkYX1QogHH",
  "key25": "4ZKMqq8kndAs64TWNabt89F4ipxiSq8SrWDS7iGCoy6tKc6EGFSk2To8Cqwecn9UFeffSHtHw5ejiM89uGHZBg76",
  "key26": "2s1X1VpyoLz2YeDt7jaPvKRJ1ept82h8AMCjAKFKUJc2kYBksEbQK7at7SSJjEaQuDGasZXzLRGyor3hbu8dVb7g",
  "key27": "4ZRQCZ3dFnhzMCWVA9ojiNxCJkMagBUhKUmZaHiKdbY8NoydsEd2Nh6G5u364B9JGr8i5qTsYxtoBzxdBiBaRVEN",
  "key28": "2dj9prNLTNYC1BuwTXWR19DkWV7g4oLwRKrQq5R5Aya3zgXd5wezWpJstaY3MkUqYsF1dpVgHup7iwxq2jyQDnhm",
  "key29": "2r7msCPyXJbPi8gJ2HENzH5bKjLy289KUsDkY7mXmjQaLTCwUPyCWbnLYXR4ZwaJcf2gZos5eHmQsVjKN6NnRGt3",
  "key30": "3UkXJTu5eXt5buYqEhvTaJQ2U12MeKxJxWzZvgHqCSUG887MEA9zrz43jrxv1i6YZHdvn747YbgmD8aSdpdZFuo8",
  "key31": "3kM4MoqP7kwXX2V4vxZKGnVb1oESd6Rm5hwMhmzY3gN8SiPM1REqV8j13wpYxaYGwrjeeBSGaRB5WmgC7yac5neS",
  "key32": "3qfWSZyEmar5EncTxrWoD1iFRwxtwrJoT27EoaftD36yhcnfSNDTHiqPbwg7pAKgHZYyFJhrfrPx2Jo4guL7pMqT",
  "key33": "4m3s2Q2EdFMnRzMUbMXnmd8WUNKDwUNzn9AYEZvWd3dkbHYv5nsS6UtyHubFk5F9KYuDZ7XW9tvsSDqL9QQrTN5H",
  "key34": "HExDxzpWumCKpbDYK5U515HXGxA2K2mYsJf4YAMaQfk2gUYoRKVJrJ2UbAbrnzyMLDsr6EnkkZXkiqxEwrtEB7D",
  "key35": "3DdFj3isd867gcYCDy1MfNtuF7vcDgVJgYJHUacBobx6WtVayKJwma5NDMCENN4HFGJz9jWLQFWjyK6iJPQDRrs3",
  "key36": "491bsaiowinsFAQUzDA6hKJZiu48yE5PBVs5sjmPSrvjtLVbrLyH63YWcRznaAeyLUVFWLwDBiqmAxUwWYYVMawC",
  "key37": "5HwcUiaDbJha19eoZ1HKvdzfUxeJr9wJXGTSdpaqRTp6nuqqcYVNr2SuoH7aNAZY4PXixFe1Uxi4ZqtStn6wtbfa",
  "key38": "5AvngoTePJpF1BCdjgn49G5tZBFMWp8r9pGPGLmbsjGXcCqreGd2s1dzot1b5xyi7wHCCYnE1ka1W4bMsJqdV6qe",
  "key39": "2Jbc6ShGRd2MbNbhQQg3zjk1Pacs48vZEH1DT58nVYikTeX38YbjG7UYzAEWVvDBrFG5phbapqaznp8Z6X6rDCVn",
  "key40": "5Q5rNKvLm8viEaTsnQKn92YbpjHMLc5HXjvFGc73UCADyzpU6mhVivNzpgb7fcq8x3JDUZTioE348fTusuW9dSuy",
  "key41": "v7SMWLv4hQPQQxhmUphTB28h3W43PgVS6dTJ9avC446Ea8kT4mot9sdnV3JrA2q88uzkRAJdJLJoN4Ufnqv1ttk",
  "key42": "4LFjPdakRQzMADyyADS8YXksHEgtsNybjP1duWYd34odYW9YNbF7anzjydgCxivrxSaWQq9gf1CfeAVAmfztXAn1",
  "key43": "hMtdfKgxQS36CssCj3GbW4Br6wZBhp3zraf47SELsdM9GcUjm6cewDvMraoducDWnpJCvdMYsCT9azL6mMNjSct",
  "key44": "5PhQ9RPbXHgPT624DA3t8NeTctYTb9UHW7MzYqbbTC8MA85oTPxyfqnwLCqFU3hyhFDZLszup82ooQ8k1iothG5s"
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
