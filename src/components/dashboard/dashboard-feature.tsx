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
    "62CBPo57KeixUDmczbWnagxsTQR1p39zn2WrHF7X9EbCgMoKn3qX7GMn843EeHsL3X1t8omawyaLyJ3MJrw2eaxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DbQHJvUoDFYeNQq4dxy6KFw8tJexNaAgtncEB6VVAs6UnXMpkqQx7d2dS3EcPT5mBAa1QrVCAeEoAozA4RzXCCi",
  "key1": "559BnVNtsvvjsi9UvJUgVNxzaqUWp6GJXPbJupJ6rtK7zHDpWiyvafG2mFof8VLqiFwosyqPiGy9dCQcbhPwCyQC",
  "key2": "43dnzdUi1Mcq4CHfCmmiNHipnM1aY4RU6bqoSyMhan7h47661jvBXUocyyh7uYY3CZr1EPLdbvXGDE4cSXxFBc5p",
  "key3": "3DGToYe3LG9g398f4F5Tv4nFcZWcEWMV4LifB1mPGeMXKjXMc5CEGSKprx4ovMjtGkC2KhjB2873jh6qpWNfz7HH",
  "key4": "4RrsgPS57pHmJkoYZNLqUK3ZxhdrTxiUBLcUsXLLzdknt9BoQem1UPrh39gX4Q87xzxSX5DsVZcJKxZnyrP8gXGr",
  "key5": "38EKJCCLugJyqvr9uTtzJp56jGWKSNZKaoWb6MHzQXDMfCd6aYWJksd2ktjcd1qQvQHi7P7jvGZUezszpStCX6s5",
  "key6": "4nVdcCqcABSaB5JE7XEiwDuD9CixECDaF67bRMe4oknMmfWW7F8cPb6FLJLPpJBfhnBpyEkexrpb5GpYyKTA159E",
  "key7": "UovaXxvR9T8fCkZGyjZaX2nn7gRUU35ni9X7NzM3YwyVE973YLsSJq4WuGfhXN14RKJwoFSLPYVGPgfKbqCEDFK",
  "key8": "3GK7kY8m4mh9WpargLYs9no3DNLjbLJWwT9AYNCAShtXKBfVN1UL7ZhM8kP3mDDQgY7rkaktGKLbEYm8U9Nfi9Lp",
  "key9": "2FVLNZ2tsDE8jTjDHZK8J7QtS1pnTy5uMEkg5MwzfHtxWFp7TBp7QUQPR8v2RpuWAsfqwm4uFNyLsi4b13oCSdd4",
  "key10": "5sgttmKB292zCJXvmE4THBjtMeVmFAKNEFpdqGD1zKEx2PgGEcfrLrTdVyhtvnkJzY3BCaun8F4Mwt5cxhtV5akz",
  "key11": "24EqjRKR1k9E9gCFNqA1hkmnWSopexceJ2pvydnGoYpfmXRfaqGWmtMrqND3urKsK7yURPRSiT6J6VjP4BBKsnLr",
  "key12": "5EqT1sdnoUxyB6T569D7cPf6L8toq6uk33YcpuWiknpy1tNBoGVUQhpgwFiDaP2mGKUmZjj9sGArA1N9MWoPZYZF",
  "key13": "cim2kpVdvk3j9Y2sQwiatPFvCfWSMYVAqYVbUCbMwrZf7U6GTg38JbgFJexeF7u56GpTdpQt9DYNaCFuRPsFTch",
  "key14": "42gad1ge5yfFJ75K6sADiqshoYDtCJ7T82aJpjnz7PkPV7uxQPLAg9MkRp6sFrorT9NHdzUBht7sY13HRZWFoXGX",
  "key15": "cockfHHhVZz3kpwYFdwYurqovnoV9bNRpufkW7ZCKQctMs6DJyBuFEZxaPdwVYfVcCLMXpzW88zCRRvPLN2mbkn",
  "key16": "2TrdedepyRnga7UQDETePHmNK1Yty899126e3q4HW6bF6phGSedqpdW8WQ1j8y3ctKhiwxsL6UjAgnkMcUH4bxvL",
  "key17": "3rhR7JTG5RmPPskkSnanbb21jDQKotULy7xHgLenaPQ1rErgdGoGTs5tFJudMBQ2rzcPJ9r3mehtM8dgrfnM6E4i",
  "key18": "38o38smH4SDjZRTbD2wPyE8i6GWWxYeffJd9ZHxXiHCiP2tnYymcSeCtb8HjkMG6wAUWNSARsBmuRg3wgWm2tQot",
  "key19": "2eFxKRgaDJFmvJcPxAHUqLZS4gJ2zCQgC4vjVKrgpMYGdyqzJnSULRCFUXDANswWdmcqonBMEwSeJJuyA3QUn4XD",
  "key20": "KuXyYL6JAiWyRyHFnBnWxw2WUPo96vzaU9wufcfRJGpJz7XBK9C9b1CH7u8QgDpye3SKeGtU4P1NfJ3FggjDBra",
  "key21": "5SUebZA51bxoiHHQkm9aaPb6UnJxi29giVrmD5M6cRJr5V9PgssvHRe82KEYgkRR3oepSUETdCMTxG8ac1dY5j3g",
  "key22": "MVxH6gZeZ3NBmAvpSo6MNvmvwC8bB8ZJkHbjbpGVyLSwPkHEJuZ4bHxDpL6WGZUNB2yM8ZtM88wigK9B4iGP5xF",
  "key23": "4uLuxmEdVvgsNcbbCP9f3pGTdyYZMZrcA7raAMoMzFTCjWnm8QBcacS6UwC9FMHDFMtHAkuenapDSz5ZkAJviVnw",
  "key24": "5s1NzFfCrXrcmX1fqtUujzq4XaHkMAA9uP4HrQYGBFAk2KEVUqLvxDkvxL5pfKtYR2BEV6WerdatY6GH7R3KZC2X",
  "key25": "2RS6poxB9xjXCNWp6FYd8ADpJkoX4KftrHZbwwynnsGs3c75c6sYKNnxnbR6MMGJGMDUDsoLVMmQQrDWgqHtaw6g",
  "key26": "4GyC5dKLBgqGhzdU6jCScN871ep5Ru54dbuCGAZB1hHf7Chi4SVjs9xssyfSWXKJxz6RcrmBKK3ZCYm25a2RwiXf",
  "key27": "2oM2NYfn53dtjgTbNDkrDboQsFMftSgLdhSrBzQVgPuAdXA3ZJdWSQMtF7PsLSFS3Qe5rut4sSoQ6q6rZEyfjiP8",
  "key28": "2Ki7tnG7JWaxyGcNXMS9Qonp4iKguGMHAkEvCRU6dcTypRgc1wy6N1ZjvgZ8XtYXmTTU7BMbBswcVspuRz1uLBRa",
  "key29": "1UD8pGsTR4HpzMGkE8RuKnTKaSuGVbmptc8WzDm8S33Pu6LdoXsUAk71227wJWGU3MvRfw24qE9VYoDVWFeurEH",
  "key30": "3hE58GuLSUX2KuXL8FvUvSoMf5q45cAXFTaQU2G5rizzSGAGHn2sUHnnWSfCwezKtKAuFmXvPcEw2YTkqmSfYUn2",
  "key31": "3zMhrpcgSpVTUFXvfBCDTaJpoeY1sZnrkCw3uagzLNouS8PJ2AYcJNGRhHMH15BSh6hPRiXPpKKTVwYPQofheLZH",
  "key32": "44AS3tJ15W5e8vHdx9RtHWoSmPfexJkcQd9UM6bg82kTyczoCGZHfvWF32NNsMz44YqeYVoURZmGdJuoXKhJP4Cn",
  "key33": "4afX4E8x8CmzjnoRyY1pRHaf2G7SLAahGzC7oND47GAUjcbNqvFXhngur4sP5K5XzPYjUn89weUWTqt5r1gHxM8x",
  "key34": "2QeMyfXrVYB4idjqqbcNsFKKsCxSg4VShR9KtU89axG8P2r89Lcph2Sks7FqFncWwPLDRinqB13QXuNG1HahKXcZ",
  "key35": "ziDccGk4DuW5Fxa7ZJpvr68g17Ldu2LgLHTgqaupKWVDNW8WhVuiosY4v75oZx5QFvBR7EoN4iA1BHW8sDHUCaj",
  "key36": "Mu3nUoQ8n4RFSv8iPVynfyUzQG1jhtUsW6wxYpwUmcfRrHvK9pfAwZYwfL8qBCUWqLFo5yxtdZXeMrotvDUMkDN",
  "key37": "2TDPRocx3dRkKbVjG9RSznFNA9153Ag4D3QZtgqFWREcoBH57NkGWWKuYqvpV6A9oeNsCAEhcWADJMRCYhdBMwrM"
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
