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
    "5GS6PL47y2saN41Q5HqW4yEJ8tB4CGS3VjZkvzJ6jUBwXxd1UTRNhCDmsHj4W8QxxmsBhwYRrNzdCqfydivo3uwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K3gHDnLrxrLwHnAGQB9o34qgF3LduKMfy1PC5ZQXxFSfRgzKMHgS8VMwvyMktcYmiFZeQeZjsFB8UVFRXBJ7Wkm",
  "key1": "qADbCJ6cmiopGhCYgkaQzQCy3NEjTn83os7psKiJq2va1KgPLGsybq6UjqmVw3qP4QFuDdoysNpGYgt3ywA5yiX",
  "key2": "2jd5utDoGqUTSea77P5FK1CwCJsLx1zkuLYBcoxzsU65AEWVhSfU2JsmHZUVJUGR5dUb1o6ntNpVNbW8RyPs9YFK",
  "key3": "ZFfinVjEc5VrCLu74E2XVVx8sKXx9ANyAymsyvbjLszPxvY1P2rQ77j8HpYh5Px4k1WmDZVuEucWPiY2k9Ztr4e",
  "key4": "5e3ejJnfqLu2DGjLcmRHxL964eFuKs96Ny8ydzx9W8ryTi77nCaQZxgby2dbURtXBU7FXDnMZ8KVVZCrhp9TwtHc",
  "key5": "4XymfZaDMSbPrb2uRnNVehv69iufoY5h7k4i7JoxnWZXBR5LgcHjmgnvKBpKJ6xtyYesrif4MrSLWENE8ZdRJefW",
  "key6": "3xf1aF5NmTBLkmQC6sgmeeEcs8sTm4YJyJ2XkAWVjFQ8r9ei6zxpvbvUFZEup1NwC9EJicm2vGRPCJg4X6af2ed2",
  "key7": "126rrD73etVLQSHYoxmMuPShHCKRkvwdcGYKeLx9eqr6BtD4xbakohuLDR1i2emcD3C9YeDPgnagoFeNaVMK9XH8",
  "key8": "2AJR6yuPJYNezubquJ7URjnFTLXmuvLGYRY7BB11k8YmHUHHVZU9FQ538cA8aSyRuXzihpUVeApZURtFkjoMAft3",
  "key9": "4gSrrAbeSrS2mZ6efgwhEFQNcJ1yXfWUoNBJSVzptgf3s5B6ebGA6auCsVLF5q6gZYe3zzMLr3WgqLMCN5UbWq6L",
  "key10": "2ZB9X3tWpiGe4aZVTfB5iD12TADCFNC5Cq4i1bDMVt1HC1pq32Gp5wBR2zgBsu7qyZnu2D6rqrUqqgQ1CK6HDBT9",
  "key11": "5txptrCwUgmRfgUAZpJ7hpuQNoUfpV48NRtuzjgqspQjQGuvRXgGBt76f9GLJEjyWA5hji6seudwM3cLagRf1PZw",
  "key12": "5hmH6LutbwyarbZBQLfgGmF5q29MRhP1ZHEmW8qmkekHJeiZSNCwx21Tes8MzdCBXuwAG2jGxwqnDmBJJaQFfLfq",
  "key13": "5CMN2Zafw9ge5xh5jfDwMNdo1WBCPDKAQTiXahtN5dM3paxfFxNgNTCEkpcDcibStTwvosaKTQnmupnQJoXaV6H",
  "key14": "27NqFBfKpmGgnJJtBu8xtr56ouHXg28G6JVbF7qjg5GcUAeZv69X6akTbu1vQQs2RLQ45GNd8vHCYvrh7ATo3mYK",
  "key15": "3V3wMG3EvpdxhvmXiK7YVAFq5aGuRXk5hzJpcqJJ3yPWjpPsLEB99FVkxvtz2AxPaokRTDJirk81Px9PcFhmWUeH",
  "key16": "2ywY6L5cWaTUWnHkux46FDccskrVnFwZiK7eGHdeBMfCAE1sLAAbShJHBBrHqJvESxWraJbZHPK6TbCCFWpuyVpr",
  "key17": "QSUQtNaFzndwgy23VocWmwGEKjyJarJKmtBtm75tYBXSjVP76YV1jYQdKLSDjv4cQW6MnxbkeaZ37LaehauZFte",
  "key18": "NDhSRM4grjxDCHENvEkCwRn4PSEHxFFjj9QxBVadPGBidemqNkDEThqX9WT31A6LZccnt2NoK3JK6nKxypQM1Nf",
  "key19": "i5At95Tfpsdj5GTP7kgotUf5rmxhZL8kTZo8r8xMKtEPhCia4kXzMAtCSLZp5eYCgWVvGprg5oPPGLNXNpYvnxV",
  "key20": "BmivH6NYEkbuBEjXP1bZ7RjhUETqgfdd5Hks26KMrYtTfFV69dzFEgqT33bTQs2pujruUQ5mvePJBLLX2tvVNT3",
  "key21": "4eFFPNmbBh9nsfV97hCavnaAYxSeuAyvKQCGzBUnp9MsfnhfndSYqEGkYkvenBEabtG1UM2DxuAzhuTZfQ15Q3Ae",
  "key22": "3BEbuiXTuCNp61wJvPCWV2yR12DJEgqPHqfoo3W5Y6JHmCA9iCxxuvBHiujgsLbtcx2oi8n3qWvnqDJBg5cBDFN9",
  "key23": "34MpTUyiybFEaoiuErq8pJfZvrjdyVaCJ1VbbdAxNY8oXNEbAV5d9eCt6Ucyw76B2dbsfpcfPDXFR821JkmU2XKr",
  "key24": "2z3yjXPFkW8S72AHbW2rMTorwcUgZMuN5T2YKHC6HTCcrUgAKjVkCD792A8NN5ffrgpKkbxd1fYMqXXN9NgzHdUJ",
  "key25": "3YCKLiNdZ9dzHEfCzUcDNA5P9RmV5BPYioHiL7UibGovSCG9zn4nmKyVHbokTwPjvrbzsRMtupmbeMfngwubiSd3",
  "key26": "bBXAnjkbkAHT71CUTDJ4nkPNfXyuytAC4jjELc3VPsJfZXAyqZ21dqybZe5pDUbeFhrAdsGmeqrdJLFRkHt93Gd",
  "key27": "2js4K35nF1sboR38LYcHbFZ8LmTUkqDX7NzBjao8sJF34w5sd5YeeSvzymyqR3XDCbVJfULjB3TSKHLcgQitk2Ga",
  "key28": "JDPbJACnob7rDXkrB5Ff9ACtkwfwvaCYpdujgA31bgqs1ghdv73yicWwTCpqsNHDq4YbfSTPnvunSfRpbDKn7Fh",
  "key29": "4xwJbaeQQqzZLENeQn8r6KZVELeXePdcmwYGhM15zWL96KtDDH9zAuHVE9C2YtTnMdY6i9nXaibYvPEK8HSez13z",
  "key30": "L2qavPMpvhX45X6G3uTGfZ3fk32KzV66zzxoc9sZBA64j2uDXsHZu6TLXdbaQHbFGv4YYy5DZqtuG95dw1a7s45",
  "key31": "4zoPkCY8Fd3bDps8up3hffz9BPN9P7iuypUoAUkfL2eA4D168yZowpxiRwyiyFukykhzynZzCKz2PtybMHyBbFMx",
  "key32": "3maRnMYXJMU1TDzZT2AXQd66Gm1e2PZNkVSyLCSXNb8JyrSb8KwG3wgKZKXkDXn2ua2iKHjrzCFVJ43MYumNMV8T",
  "key33": "5idgicwFDNZApFe5dQh5sPQj5LBSWsziRFiZg4kHk4mb4z7RwxVALsUHxM57mM71mWKVzn1YyUamQcFCqUB9gq2z",
  "key34": "5ib2ro8zvqNRNrDb6aYRTLG2ERDhrfLtKueRKEhuxkqemWUK261BENtjB7XiE9zXyUgqtVN1kMaPFoeyNMoHHwgz",
  "key35": "5mzxvAjnL25md2AM5YoKwtwVUVPfG24JnAASmEfuxGuLkB7SgMvwaDnt2L541i28esbpRWtGN9hFiHYTEQXSEexw",
  "key36": "2qFBw9w6FpYoAbzMTzwbQCMepSczxHqbfv8H1Cy7h9kMf6AvVw9eGHBFADHZG1teS2myQmfKL1nk6y6DadXGcyNp",
  "key37": "uWEJEDoQjVkquXiSVQ97g3WEDqiEJ97f3xRRUGTduezGSwySpRdTvV9ntwDcMroWfVsFrgRScMEbByCvYLBzJby",
  "key38": "2rFZzE99MwX6589U3xnV763rYhmFF3zWJsEoXY3mXh2Ki82GkkZf2hxfzw5onk6z2Fr7xz2HADxz3ZLnd7TvbCHX",
  "key39": "2AxJedyRnY57JnPLe2QqWBVNEoJ9MEkpBqheHHyqrZaWm6KqTkCbvkwqHRbTSuitJ5D1fKqWgau8onXrfiwDya28",
  "key40": "39SVSb58YMX6ErbpkpxwuEQHFjGYwwxSy5buawYkJumgAGDu2VEg7UDqMQaLsqzBmLpRpmrfnhn6oBJgkspEepRo",
  "key41": "3E5zD3k31CPvkFyFLAsnpM4xuNNmFy9MEBMK48nPNqXx2p2ByD5g2cNi5bL7qYPDtzioSbQ5g2h3Nnb2qVCPicat",
  "key42": "5TU4AC3P2YxLdiv2temKhUpCw9m4cY9kPTYsBxJUhsJMPPXmhjGjytvp17zGr2EeQ9g686fCGRGP9BFxJYU49Pbp",
  "key43": "63tZPUuSSv2YLqcf1zoqJHUsP2A1uxiaX7xKiyXNxhuiJdwSp2m3HRZLVcemdhpzchVAEoBzqz3tN8xS8nrCMKc6",
  "key44": "4yWs83ZX2M6nH1HZEAXesguv2frH3HGN6qeAsEFGgykJJZLwqE6fdqNRMCayc86muzhbXNLSgAVVTL8NNFdpWAsk"
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
