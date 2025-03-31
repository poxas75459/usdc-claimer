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
    "465JzBrUnTrrccpVtw7TPMu3ncGdSsAKdAgqFHBmwrQ6BD2G9cb4W7SgRxQgU73p2bb5VcV4pbJnpCVuskrqapce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o7AkytGX6hjH5VNCBfXauRQ39vQ5MVAjmc8w3pQMWSjTMtf2e3YJVuie5aTfaN34t8ZUAh6C5n5Fmj71TUn5xNf",
  "key1": "3X8Gj4jJ6PMBwhvDVqRkDp9v1pbM8XnwfZVGqLYWTBVc11qf9AEsp4bFdNQMVUnWNjueZSGSrpe4z8vCFQ9yPgm1",
  "key2": "4XNvr7NDS6Ag13dVzdes89iPoHMkyvyvxdPzyejj8kgvCTvXKKUnwnaQhGYFUAkqaqvHWBJ1zkMmhM3SGPGNuc4z",
  "key3": "N4qPxFq9MMkGuRxYCz9oCN8h4s932T63v58J6CKtfgVuMJYKcfjqPfxZvxbNRyZCrU5oqLY4StCoS1dJMgRHcnN",
  "key4": "4ABAUgKVQWRJp451Q3P7t4kxTPXsV7ELWRwVbJRFD4CosVHgexjGTcE42JqkfXdfQCTScDpxZbNHiox2mbYDgYmU",
  "key5": "4WR9jzAFWroiemvfg7ZRBjvKea7fpFGwLAQjNp3AutBTP91uaAx8SRNaCFuRbikktS4c243iV3QGPutPe6X1wjP",
  "key6": "4PWHcP1YcgdoFxoXNQEnK9N324NZuFBDGPTyEoxGeRUGmsTY4x2XNP4Pe1EkZkr2M3C8w1Aq2y46jezhKAycN5Ap",
  "key7": "2u6jZqFEywDWeXA3BTd3RRDV8ZpRGpzubLhwiqhUEQigXpJPZq2GFrfw1jJ4NhU6fnPqUkVNTVyC76C7WSkf7RdW",
  "key8": "RfMMtjSJzXPR4Lp3Q2JEzDEqvG4Aertt9h5yuzPdLaQACrLm1sjF78SWF5onsnwo1f7NvNiGZLA1ws2F5Kk2axL",
  "key9": "Qc4WzexrTEw3gNgZzUzZ9nm8w9d9e3x8aRw16TPfMtwEsCNraEiHEfsLj7rGjEsLq8iVx6Q7GYNnMWQrSwT78vC",
  "key10": "4n1VsqRarfbi9tPmiFDVuMUM83AthJaYJxjHvxupP3G7D44WuRHCbx8gobkeicszMBu23sxsgTu32rtDS3mvUH1M",
  "key11": "3xACNqom2xY4GyB5D8bVfQMAdQmrW5MStWLn2Q5ti7G5m5nveUzeev92dJ5vPNpb4pwWQ2oJrPmxYvggSUU6BW6P",
  "key12": "3TKdcx3ZojDfBhjCLstxP1wpEoF6nsKCorwWUdqMAZw2pRkZ8imR3XvHAf2Ng84wLRPviHofdEvyPGBVnKu2EemW",
  "key13": "2mVfP2Ut4ULEZH9hSnsKoBtWnvrDrAWTYcjgsPrDhpH4Xn3T58AtyhDtiUzLs9EyYReJg3TFPFNvGHAaeNDrk8X7",
  "key14": "5pMaGgKHfSVobS2fdyYS51itMGnGR3VeSRhhdvWaEXCBrVyMJ4uxSnwhRGG73SYJmKFnzgEJ1rHznD23E3VrkmKy",
  "key15": "3PmQtGyh9Nq1hDHPADezy91qAXDLBo7VeCvSVN9QcfVjZEuhdiV7hjzacSx8hNFxzJVsT3GafwzmvdAD1ZgYghgA",
  "key16": "31YtKVMH1QSZJSzZpVCzWXm8n6LBotCJJ6as3o7Vr9yPSAX6D5h2WVuFTtfAJgRhQHM2UwpH4Mrfz5s1xNoxqHoT",
  "key17": "2V59hukexnFWTRZKNktc6BEoZkgJdXzGLf4oJhsht16vwXEtHM8zHeWiyLn2h27YaqAYGxyPV3B6bnXsTeELneg",
  "key18": "5vpq8FK3aHnxqrT5nu1Hw3MjXd5qEAEb6p1xgNdLdeNnmNLmG6J4xqdYj67AgyBPdSUwggj8piSYit6ZVnVLLnHX",
  "key19": "5KrQvcVvPSH2dfeCWyb7YWKXHNby1efasHGg7PqGEeAnfYGA3ADRVGaRDK3TXmzRGU6fdx7HEDUGdWookAiMsGo3",
  "key20": "2FGeGgRz1dtT3h9Jb9WEEZGPvPSjY2GtPhkPMeGAuoo13T1TT1atf2TjS2qq4QTwVVtQw9NuFEBz8dLAoZEEND2E",
  "key21": "67eVTnEtUTFVHCBntzUVDNbuFZUSziWYPcNC4VPn5L2r5m4F4zyDfXsQkFJDf5BkoTqezJsKv1uyk1GrnJCQb8vM",
  "key22": "2rQJasc3rjkTyFGxYqPXksvTqvun3ikXGqeLA99Cxw92jdGA1xY8T6uykQig2ThtuktP9xgjdyQp5JPYBH664t6t",
  "key23": "3EGeyEd4ikxXps2DUXMnAShywwXamuKSnnkA8StBV3fhX27xQv2URoGZvCwb92qBCDTk3rr9DpgdbSTZZ9e4MDBu",
  "key24": "3HvbRaitw1iGJDKP9jqmHZSAqB6U2z2GGE35FC6Hh3yhBirutzXXEzZVNm1Y32g5f6YvNiHYFzR2o3HaEqkkVvbZ",
  "key25": "24gxTUtaYzTnkUJsppRnYoD8YbEmbkR8NKBpRDLErS4Q7u9F7qV85ZQSBYenVnJWW9VsohBE6Bui53Wz6SWWivqz",
  "key26": "2GBRSurxzFfyAvJUqCeR5vzihHSrAUXX6awPTAj8aFApSkvkV5fkcfagYTWFv1365tKZ2uHNqaE4tMQegeupjQUh",
  "key27": "59kxJ2tDYS3V1JLbTFjfgrtKnfkfQ7EF79RNitTZSiydHVozWL7KUDqaugrxkeWQGmczK6GrGpePsBmM2pVQPCoG",
  "key28": "2aNaNwS5k38tDJyLp4RRX2mwXTwNwpv28C3wvX8nqWnXyQjbVTAiYLX1iy2KtXuyEVLq7DuPY8ubfJMBJtyGRepH",
  "key29": "25PxNKM4UnUZgAVrpQHCTYaYDN8y1pSDjuanUJ54XdVpoq44Uidcp9JJAKYET68DvgZRszso7oy9FL6P4HWbcA7k"
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
