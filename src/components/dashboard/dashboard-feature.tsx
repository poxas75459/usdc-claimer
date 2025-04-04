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
    "2xuyERc91bBKcmeeGe9w8auA4SiHoLYEEadKyXTQZw7DrY77JknpstuQ2L7ekretmqasATaWMQbbiNbV9DJ47Bt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bmJpA7kT9DENjrmm8W86sMeedtTApRB9MrwhMEz53sP23c3Fk8ss1yNaAkijA8gNFkoFJRFNyAUpNXkvpyh8cS4",
  "key1": "5oYMyyrjjhe5J9knu1tzbFDeBmhEARQC9L91BHZhtJ7ZzWnL3e5kpQARxQjLPuzkQNUyGhH1iJdVy3rbQe288eRp",
  "key2": "3Dn1A6ZaBuedMjBiVKDUhgMg2z8Kxd15rUw1jfa3t9ipg7wNaVuQrYRF5zLqtc9iKmDynp3P4g847BmNrwp411ya",
  "key3": "2Dw9MEMh1567a8niBP8YtDiPNVivRsyHRLt7NEmxr4cMWP6b8Vfk5kQMAtUfM9zPoeDike6sBLHH8YhDzpLq5G3n",
  "key4": "3uqgscx9CPHkaKWWq6w3sDoNPBPUEURjFcT5nfBkCdBHQkJeem6XUzPkg2ReiKP5Wfeiuh7ju2UF3PRPjejSroon",
  "key5": "3VWPf7GfoSdAzwHEzY2pZBNUpqrGEoEsM2fLhVYY78fKEAHZWosQvXVb6zThfFKkE9XWunouenEvKmyPLPdFW9bZ",
  "key6": "4ynpiFWeAfbDGKakv83dk5pKZto3rjGX7zeERE1CaLdEhMZ8ZodPLK9CHXJLTo3SxSXqFBTyUx6J1qGKsH2SnpD4",
  "key7": "2ixAfKRmf1SiwSheJR5Njfow1uwBJAaGDmZyzAmozwf8YHBBBX8LaztpoXPXw2fdFUcDd7udxs355fWpTxRmn37w",
  "key8": "5GN7spmF5icUkZihNiy6iR12pofaKeJATobG4E6MWKCxkTziVXG9mbXAi5XQyVvSWKD4muYj4QTT5HaLJz2P9bRM",
  "key9": "gmJbtRR5d1DWB81nsXTjfJ2sxCsNYR7e1SgtqSSMtcjXXLSGYKh7HvfQu8oPJhrsrwT5xDBJT4aFzHjsinBVtwz",
  "key10": "5WDwfY5oAT2PutKstNyAiv9nftow7efJB4pmT51j7FWbD6WwPnzLVGtj73y6TbDbmeaCbRM1QZksFzVW7aqWAk33",
  "key11": "2bKHwPayg7rJAxrapSooB8RZoWbtfdhax2HtGLuDBtsoZX89pdW2iH8Z6cjp4fgN67WKRDpZmmYEnkrStxuyg7Nq",
  "key12": "55xVgNciaDBLL38P3HRuUYk2xcWpgzcWG6irJoLWiLpqu5eLtdfnqCgESW2nJAif1JL1ngdqK1S5MsdYSERmuZcw",
  "key13": "2VsWjKAgoNtePoGJofRH66EEx1cVxj9fSGjuH92sW8zByXA8mYvFgSq8NuqitXoL53sciqebRnVqSbTRRJuj11yz",
  "key14": "5tEZnhZSGPkrBVYadEF4V9xtHd9w1wvuLUf9LA8Lz7bPgGwGXddBPTmfB4a4xHoQMJsiHDRrPJ9wULJK4Tbo1TnU",
  "key15": "ytibcYugJwK2ZF7qP4PsxVPWYkeeeFNJfpfD471A45RLwYWVX6u9gqVaQt4KQ2VrSGwrUv5P3CExpKn6DuJ3Qrp",
  "key16": "63eF3vvF6XU2NMLRX9E5qkSVwMq6CsraZJgmCuag2oonELa6n7u4z3DUgYSCz62iJTN1wHHatxxm7FhV6ztd5je7",
  "key17": "3DRG9e6WfykgjVB6vnczrtVGZ1gKr7dNKQo3SLRguxdMJ3xSgB9GzNRs7LrT43P8Fk4DaNSHH53TCXrkccLoWsTd",
  "key18": "41FVG4KxZsgz8LGGuqWYhewk712QCC3QHLeGaQS8byfQEhEyYspUQX9aLDNnUHJ3LAa5EkLv2w4aecnKjLJDLxmY",
  "key19": "yuhMRNpwiKhovECPvDqNDVekv5ugxYhpmSDMHquPC8hvey6RqJpMnmt1V4b6Kg1fPpaBeCogWAf8YNnhjoW5JnK",
  "key20": "3aXTyjfM4rbhqwAgfD684pECMxLFMf2nZMkFhGaDKx6eurFJPMVdUoQ6WTdFSYGPGo1UELS7jRASVEZCjC411WX3",
  "key21": "2FULDPDcWmrVPQYK3HohnLHvLBCbiAS84JSzMMGhMdooQCHsUFKjDUAJg2DZ1jYuqPUw9rfEMppwyqX1KuLL7AVT",
  "key22": "4LaWNuyquz8dSQitfCgmDjUb3LHEKgxio1pwLHzB5ZyopHAcVkGpMh55sQDwtNFpZDqToMUsCkzWTvskm75zNa1e",
  "key23": "4h5eohrUD4R5TqVrBSXZNtnqReU9CWC8huNr3iZYTV7P8XetPJ16pDPAEk2qfMizx8ZvoTW7jtqSZhosuYBKFhVr",
  "key24": "3aJM1wvcJXcrcNwrp4udtN9T6wfpF1gMWxnFYeHmSg2U33W6G7yCtndGCbcKjE2HWpeko9NqhrJrARG3tLtwxfXC",
  "key25": "3eaw5XwWmU4mWn9bYDqn4M53yzx7tTH4TUdn1K3W9AKo68HKsKKaA6EnMmvNGVSGdb1phEiAhk8Cb7PgCG124BZj",
  "key26": "26jStU2c28P8SuG96uW5gw3BhWVK496FojU6Zr1UR4uGda2yUZXMpWJmUPhot3a8QCsN6aQBNdMBUNqUd1BagTY2",
  "key27": "WoQ4MdazSGQdxJjm6HaGxisbUnHfa23PhY7Za27cS8U7qW9JRsJJ2yzF6utr164muK7kj9KhWwvxRwH6e9Y6ps2",
  "key28": "5yXYYNJAqXa2THDdhsTjqy7sfSvcV9pjo4jTkHq6NDUiLThvdGUCaqSG9NDgmCQwyVJN4oMC25kT3qBHpmrmtgHn",
  "key29": "3qbcqmexDxxpgxD2Q9ssxwhyiAYRziJb8jc1H4j6ofTqLQQ4A3qgqDiCGTTyYeNciWnpGTKK4uB7iU6aGkhGg6fL",
  "key30": "5G9zRysseLUfsLEJ84PJBCHLmJrFrE1KsLKpPM8zwwHxfTXHkeKUoP9mnWdMBfzkeo4nHF2da7pLsvB5oDs3RtA1",
  "key31": "34cvjZu9uwD7Rmou4LXvMEA24qVgahLPw9eGr69WF8KPPhJKnSYgPuqcdhdVGGsdCN29cwvQM3tdeo3V1RRGditH",
  "key32": "2UHjtWUQSoVBACgie8D3GbpRYQVjHyLwuDVkkFjFUqgETU6rkjM7QgicRk5HVEEKvj2iH8F1dLHCkexSpLPh5gi",
  "key33": "5XmMcsWv1dC1AKgWT89VDDDLvjgL71e1sDfKEG5mfVY9wcZWA6ghxutt6fiabQytiTyXAwThwmZtidhTVG5Qx7Jq",
  "key34": "3nf66FZ2dswDCb1aLdfVnpn9ZWxwPv1xpHWSuh54JEpASuXCNDWBxEzDK8TvegPVe9mzTvm6oiku1e1cjHzdXKBa",
  "key35": "WEZEQ29EyjcJkBGHp6RNUXUPko9EoLmhgikcMMjDFuNnUMHKZroW3dnC7Z9wiv8XB4XtiJ2B7YWvULwUFsGcoHM",
  "key36": "4SAugQo1CgmRZBpe3eK5YCM5PgU24nPZsG5xmNFHfrFotQFqbMLtCV9EVuVZMmH85VBKc4WHjPcLaKu9RQPo6wox",
  "key37": "3rNaG1Gg2eCtXxcuDnpxB94y2dWfZbWavEJTUGr3YFd995E4dDMJCZgugeER7h9agNVyr9gbtqiemQQZNY3ASpsE",
  "key38": "5xV8iDfD7gBnBQSHmLSrVYJWS5Tzu9KtbPyrMKdLQYKLNQVoMv6EdFxxDru1AsNThaFMvzmNstSuWGDGGUmy9bu4",
  "key39": "2o4423Fbwo9j3BCAcwK1YoFcfvxYE3SQHpTHtxVGBVsd9r9nSdp4dn6cGBFKxFe6CE1ze71z2x1shDc4edLgatTL",
  "key40": "5fBnMbWb77k5TWkD8VaTBSaNdGnuMUokGzs7CpcizRD1REJjsZjBrpkSe4gryJRjyujFMtB7X3smZMps7VQb8jiL"
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
