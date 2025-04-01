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
    "4ZPMTZnJApXiBaFftWawMht3JKeKyomNMUiDzSDWUoQXZ4jJnfrScFYC67uaEE2NWXTVWqLJGx3BaZTtqh8iq4kt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZF7joFLXJLR3CwDFkrEGNL4YAsuSsdRmho4QiJdd8ThJAjokTroBuVyowK4XLmTV4sWdk86JWGB5M5FHrETFp17",
  "key1": "3wjW2eA8e7p7GfMp8a23bCJtmGVNSc7uw7TPAFQud7z2EsQhbukydSMabPwr3ZJFjZKZYEL296musEjXBqcEFHfm",
  "key2": "3inVMgsMyQ4eSiJVguuCVcB3QCnzthXXmGjVoHAvZT9f9Xx3edikTBy8bWiEnHRA8A4J8ChB45NFxS426T3vwign",
  "key3": "4cefDcLoyNHnDxwS9UMsVed5T51M73FRExs3npStJfTgGbJgQeV6ZD2VsXYwquTMMF3D7Ao9W9X26dXKnshgcy6N",
  "key4": "4pt2s5ZC8ypXzF3VT9coAMu7BdQGSzBzuW7MwqEFoHnKtoxhF91qSPLDfGYhKWpVi2SyExfAHWousLev7t2Y1mvb",
  "key5": "5jtR29b7Q5P4PE9imqg4W7KGirwwi9xrnRJXj8pfYMPWZn6XyC6E4VACDaAqGRLXknXq3WkyKKYvu6YdoP22JnT6",
  "key6": "2V7vHB4uxaTsPLbvKUz9t82m97wqtdmzvex8NwCKiavqRnjTErTRnioht1JTBZbo5hCNh1jFeH47nuBz7FFfyNrN",
  "key7": "2Kd48BVLzEFRTqUvB3mRjEEvQuyFKjFEtTy35rtX24y3gFyzZHyKceQmifLa5VpBh8mxgVXCdpPZaQ7RuSKXr9w8",
  "key8": "62pJqrfdL5KxPbeBdzWBCQgh6sULdT13KdXHBPJCL7cBgg45SSZvXEz8gKtGhtTj79Pj2oWrdZpwUikorjuNdBhB",
  "key9": "2aLJfLEoDpTxQM2K6facpLjpL61XdnNyZYeYVCMNTL7NBwMLnKzaKnJ8vMwWjwwXtYJuHUQfjcy3xpAsMuQ8SCL7",
  "key10": "3ZxunkfKDBx487BnQ66F9LzgveohbZRwt3E1neNj3FDA112NVqwTN69pWy7aQeuWhQVyqhp4Fzbkiysuxw4Xoq6b",
  "key11": "vTsTuco9YKd4MVzj8rytFSf81xmr89FExK7WAr5yybaf7EVePR5MPfrKBHFxrWmJymGQYe8sF8jgoab6dr9vSN6",
  "key12": "2CuVK4iJRJeqmaUeERAvUizqHHKjC92N9rg3pSLDh6Dsze6XV3TaSHtCS4uc4JgQE2qKUjLR2PYMNvQoGoXXf1dP",
  "key13": "3WstPfUXGd6XKn5zVWDjZgYYyVEBEq8gZXaec9ba1c8vpg7wEZx2LXWe6nMwa7L2xbFTSkgdy4e3fx9Vbgp2kWBy",
  "key14": "KSJ77tXvNr7wG2RdCVCq66m83dzE3Er1CDZ26SoCyB8x6NVXsh8odvY3gK3sdtYg988yjSB5AQyE11Et5odctzG",
  "key15": "2eNfTdc1NcKneyJS9nx7ff9LQuchZx31kLp1hvZfYJiRTiELrn5MCtB5uutjrsKirqakK1dsU5n9YNrAcsPvRtPr",
  "key16": "3Za8jwJ5bjxg2DpiDD6N785uP574rvVdzXnpYPm6UpxYrHtAZA25uSMFPv9qTs3jofkzJ6nzMnwghuGNHSVj5KmL",
  "key17": "3ZRVujEy2p5W9z1tCGgRT9mWaTbs93j4zUUYajndnTFj67xFXFpZVy6PKcx4Q4GWz3cyWdUz5pRe4fqFNUZAeAxp",
  "key18": "4cawTFTBkLfpne4WcUUeopVwLUkuLesPxdHRDxhnPtFFbaNC1VMX8porYA8YWBFvKcJBFRiufcvAo6tJyADVnTKJ",
  "key19": "5p2xgtwy1uUBcS6TdcFbNvsdDL2Hw4jcK7AwDTjR9zhwxp6qp31sLSkW8m1MRqjmxrFuWCoXufwNDmspe68QuG9m",
  "key20": "5dc3wE1ip877kZEwsytJAJMnrdDqsoKVv6UbkEr9y34gKdetT255NoMejMdYHsAcEzFBwNhgDBfGb3YRvJnVwXaV",
  "key21": "5pF2ivasQLF6VZrLTRjz4o9mfm7DB5fmEBpsMtags8SRqmb2RrKbXn1aYGopVWEQbPF83fJh7B88KE8DuLNpszvX",
  "key22": "4z1KDVSvqKAhkZKg2kpens3ir1NyQiqjMd5epbkNDcujk9YFBv9hdzADLa4CNgj9HbhWfWaQ2PGtaRMtU9SM4F7H",
  "key23": "2irxGNg6tsnVf67qSnJVJVniCxTix7W9UEDqWjLorEXDoWnhwfQmd7NxpBcWKejjYs9E8FSZ3bN3jMGV1zHWWew6",
  "key24": "2opxMtFEyxDbD1xDmfYLUgsmxdxcSw7kyhB4BVYY9tuWcwPT1iqqeaBfn5EBD7vryD8hPBLkpPbLqr6KbtzBed7M",
  "key25": "2h7cD3h6HUe5d3pqfgfdvwUDdVB1gEBfCSRP8LfuHkUN29q6MZaoMtsdwgBZ7zJSK6Q9HFnTckpmAGNsx4jug2TZ",
  "key26": "5LK5rcGjgjvioBecuT8nuWH1fayDfuwJ6DdmBtMovQZF8pjhbEPyzw7Pud5aHzSw2YwdS3vbxKz115obdXiD4o3h",
  "key27": "246YrDeVUt1y5xCGA8rB7EMxyYmkxphU6Y3FjcHsbenY6cUnUmb1jqTHybL5iHcNpHd8NGKk41Ef47cwXL3S1C7C",
  "key28": "Z6eh1YWWoky28QWRXagZnqDdHKYf5xFUiiT29qZcrSCrEunhBtiCfNxeyDrrUYox8299QHorndpN7gPK5RXzext",
  "key29": "3LvvKuCz3iG7qQUAxJR2BsCiM2WHpGCyiWcwJMweGykaqfUjCD4gjtQk75EaDD4731c74gi8WAosRURT2TzEZ9k8",
  "key30": "557rZwnp4gcU9Tzvb9xjo68guYHMdXZRCENNdQfZJu9fDG9x7KTQ4tSMHSGZbgTBr5edTJGAqZnHxQRmWfYaEc5b",
  "key31": "3s8mBqDooGSF9FjiCET7bBdKWQV9FyLhhtHDXVRe4VSaYjiUGsN11RCXpEwuphwFYY6Jaq14JXiEjA6x8bmy7Nqg",
  "key32": "4QYKRrBe3S2S96Scn2u9mXx2cehRQMcH9vEiC1ny7SP4S1zhjBB1H6zr1emvsvTdMzoLRAYYNb7j9gniKrcvW9XN",
  "key33": "231vxWFhtNQsC5EgnjhzAQNLeAyzS2tVENmHYKeaffu6LMyEWtnFW99L9RhqndsBcfTDMYNCB4kJ4pn3Y1qVTGZ4",
  "key34": "2xQ6Wz393vJ4yZsTuCVzy3oMwGXYJY4fAWQuroFG4Eh8r6JdQawQCXpAAT2c5yfXwH9Jb2J9ZshnMqDsrDSrzwV6",
  "key35": "38FsbMHdZQZApzaSGeL4mAnWs8SNfZamXR5DvwHpxnjesnsUAiiKc3XEgWBZbWCSQpSzqgSBsPrdRsN3hFrQLqPr",
  "key36": "43h7pNUyvBe1EdJC2cP9eKeU6Ye3TQK2tdNYGFxkR7MzB47uWqcyP3PiZMVtpR9aZd7hfThMd22YiFxPirAuemBP",
  "key37": "2j4S5P3TqCrdTWHCWzrNGzgEyL818KUMAvNPYBY2huz87AdeAv5zg7ooGp3UoYd7ivmocBp9DDcNUYVWdSEREKNo",
  "key38": "2T3YGj4mnCJPfwYWRdXgzvG5FxM6vvXnXx7w61yAQSUEsstoCAWHBhRdFBCxDziQYj9sSuWJweQit7BFCK6qyhqS",
  "key39": "5stiwS9M9gkTquRwjMYngQb42YAygQTxTuBubGM36XRuPDL4H1UqH5oTpicjoBrqQjr3G9wLUqi5xDhFgzDagL18",
  "key40": "2vgbULCXDNV3sL2Y83YBi1a6811QtiB2ZgzuYT3P33eW2P7rwkWJ4e1WcHGZSPKnBgFrxtfm5NAvAQPYy5GdVDng",
  "key41": "2v2ssNU2NxvLpGLjC31xw1pg5H9QsR1DrSFbPfneSj8EnHD63nkmHfYAasV4EMqVviJWq1ieMMcthPkgQmBqCdU7",
  "key42": "3r4hU2CrnwANka95DZrza49jQsCazR2p2CHsGm7R3ePii9GMRzCcG6QvVyHpqrG1KTLZdqRX6HJPJSFgekZms3y8",
  "key43": "2ncaSfHfvEyWfwL9BrvbnKFcvpuggnC9m9VKhjamCkGZr4S8wCfukWVUDtxb3EHcGFtJxHqEiDUSDj97KStseuCs",
  "key44": "2MWZapGurba9gat5x5M1aScWzxKeQ5p4v6x1Dpagcw1skJJKAdVVMhYyDEyVaSqR4uA2wHGoGdeNrnHT74je68i4"
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
