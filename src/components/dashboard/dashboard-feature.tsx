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
    "uW68p3JQa51d2VHYCtHsdRjFoSXGVknY6LPDfjumHwPpPESXDCjBhB6N6VvFrB7zNrttgDNNPMdtqAXHEvECBv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49CUCsfaV2Zz31qaD4YtHNsFyF4BSKMiRGj36ep1t3wPzbtH8FsiShkHnQMyoUxqmzEMv6YErgxV4qUad2yRpHrS",
  "key1": "23oveM3brofJr2Eo7r8ZPdHyKsi7tMx9855BnPX55uSTowZvgM1Ege4ezxRwoqLzWyUc3jBEAnPZFwfpZRZUVKPJ",
  "key2": "5iZaKkTwEK87Zo3Cux14xcMm2ypdB6B1i8KXsXwnQ5URozNRxB3oVT5NkBe97rdT6tBWsYYq4PVXnHJgMckH2FYf",
  "key3": "4iofCMU3aJpbewqPGUuUBWemPsBiwGvBLRToqgucseCmD4uhnFXYoRaxqJPHCTRHerZVU3415167uzgEvk3njn8",
  "key4": "572Vc4SBeWMetYUQFWVDHRBwpDL8Nx8mDkqZWxCiwWy9Uchnwz3JJtejTNx6RBcjm9hdV6gENC3xu4wk2uY1idX9",
  "key5": "3RrpcG315x2dm6avvDcpbTuqBX5ZExozi4RqX1iZnHMBkoe8U78RefKuqik9CvUHhFvvHBsGtMr7gRivPy35YnJZ",
  "key6": "biVvp6Tr3buzGwHjHYmsvyNaHfPF4skrAuis5ADpZtscZDMmUtUK8dZBiiBf41jxejatSQkUCir12KJ1ugqetrX",
  "key7": "WTCTChvj3FpthNszCyjrsRnHJxBh38NiS8pwXrcFDzeSRP7GJPvYN3YwMPYD6TWRyCF9aKu65d3MURErZtQP81Q",
  "key8": "9sZP9eJprYM6BKRWptaRv4cN6PK4GC5xzkGkgvRK9sDRqtUxSRb18GecuFVLP1cYF46Xv73EP9Ej7ZHERkCHa1N",
  "key9": "5bihNedtfce461YpmZQBzLxfg5toY9Je6ESN8VZMfnrAupUp7iJVkxLcFzQiUdSJMHzywvcjy9zCd7Lp86nsGNgU",
  "key10": "5rMK121aMbJVABVGxPmymSa6eLns5doFAfL8LW5umE7JhiYCFZyZFFvF9TuqLBjtS6F8wQB8p815ZT5XWL6PWJre",
  "key11": "5MJVXWdKns48a7HLoENqnwgN2BJPQKxSBLs5c1Q857qsp9wJwFsaybgmzWiAfzZerX4QiKBjj2Jmey2biPazngHw",
  "key12": "3PvXFgRY4YGwxU3h1V3sNQj5xG96SgJzqNzkpHiSEhLrc2nu1azyKr7XddrPiCd1NZGAr59GnqeZJmkB3ewm3mGG",
  "key13": "34JGLeRGqgXEnSaJ12SS6fC6LvRy6sW6GEeznMTp2nCDxQBRCrRQdfGQLseBMw1hjMXfcH9yxp9KKxSM6QiBQ1C8",
  "key14": "2HGLUaNzUKzdwgiMbBHkPaLAwWUi8H6bkFfpsxcdEZWR62uWXMNc22Jbud37UMwMTk38tehTzztcpCMf6HJcpK77",
  "key15": "3LwLuEHesqU5JWtP2WyQ2Z7pMCfw9Y7UBV4F6fYz71WcgAgDbCjLRYUkxnQ4AP33EKykCiKW4UWhdUoCMPCZmDxa",
  "key16": "3wuWGhUUVaqEeGebdYrKT1bWjZj8RGqRuhPyy4cZHhwyYhoQqGjFFqQotX3Rp2LnViwDNZCnk7RPpZFStcgnbgre",
  "key17": "4i1AS3U8XXXwkUWXmheNbbSD9b4JGeGhsn6wFPWvLq18b1EkvHtaoGWyAhrf2HtEwnotc8RsE34SN9y5TrCpQjN4",
  "key18": "Z7WKxTTctdcFhcwJkea7X7MmbPkmV6KsvgERGYBp7JFn2TKm9DicWfaR3zZKmHEgpjLz3XXJ2EXj7kdQRTSBB23",
  "key19": "25wGmRJkU2QqkB3tncLyFfmX3qC7hVoozBo7EAQZTsRWEKcQTJZL4UhZ3jb9Da1DQ2rPtapsFU32SawSHaX9Pcgc",
  "key20": "4BcusLNTL3vVszBPBEndQ6M1t8pwagWqAnZPSJxsZrifhDQj2EEnJwXttQe1j1FKdv15fxQ5V84wGRu4UM3hsjjQ",
  "key21": "5CYcwRMRZ6ak8qQM9NVG9wMadDGUom7HUyte2GqmeTxyKYcwY7QGwN3No2LPNgyRmdTBNBmwYv8fGxyrR5uac2jc",
  "key22": "4ucpyXjbrB8t988mxHY1PoeBHx8kRyqrzXCHSQ92PLARvBpCskA8saR1td4RFEuHddxT822dYd26bryN3kciTkKS",
  "key23": "FeMffZqSgjXm5FJL5GDf8vJCECo1NtkKjWBx7MuKhAXA7ZjVthuU6L6PCSWwU6QxDDdSubjFnMv7ZXDbU9N5ntM",
  "key24": "2Xfp45VJ3CLpDPDKWQw2MLQVKoD83mhZ95Wm5JucBM1UUgvYqCjQz3o2toCy4eaFpD1YHYmiqcKQcTEsFw6fhKHe",
  "key25": "5w8GaH3GHZJj1Swa4kXuhHATYCBS4gCDopkNAiFENtFNeGj9XGN9HtHgacSRxYq5h64nFVxdxJkCiCdmT9LL2Xkm",
  "key26": "PxiLjbHUjBX37NRi4Mopg6YijPsZMz2PBA9BUQLyVABY1jAdNDu1BjR2hFpWkvf4sqSrBPQE32bbwTRTaiKZrjP",
  "key27": "41Keqhb6yFyXQZRC1ERa6XveBoykG724jBG8ZTMawfY422JoCWMP5mkZHSdZ2fZXBLSgMStHd6hTnCjs9C6sCB1H",
  "key28": "K7q7GRKCh2jP2QWdxaYwQ3sWTmioybEbtXspyEpwYZFjd2ioQ5fWxsmkyhwakgSZD2rocq2ogbUFsajQjUdFYBm",
  "key29": "cWaCxFPpjofnbLLcuFw2SQbHyCtZEFfHp9dXhzFEZgFHEaiUfY9FdeHHG3NYztPqHm9riquuJRNmnTYhWPjjaKa",
  "key30": "5wD6YC6NTAzM247v4cyv1URCzEKcux5TZy3XBWbinLE9WMva7U5YUqQ5mrX1QJv4VXjf7hX6HZoDeKUnExoAuGgf",
  "key31": "4nuit3C5pbcNKRoTHAwVkzNQC1Kyzb4ogwUmrLc19K1yk78r1psBNbuj9aTdShy4N9s7H5MYpnUABqXsZmqVmMTE",
  "key32": "4MJ1cU1cdjfSriVPgMZzbHnb6HjXfKeHkcXkjhFcdZ5ZrQ6BCYGDRPjpmAGRyCYKzByTvAHGKWDD3aUYptjze4JJ",
  "key33": "iSQC9WxuuUJDTVkt1otKcuzzCE1vFyM4ekNVvke1aM5UysHCG6TiE2Z4W9SAVQ2thVk6AE3pQt5WzJzhGBzrnev",
  "key34": "3YPRXZb5oJKTGDG3eAJVMoD6ecWbvgdKDTMAWdcwsPyeXU9DGjFMJX2CWBbNsJDu8UrUiPPPnjZfc76oqStroTef"
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
