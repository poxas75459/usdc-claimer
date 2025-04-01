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
    "4b5MHuHH2fbAktFfrkesFsLcLX6t2aZZyQuigWSCsca2VB6VHWyha3juNgTkRA7GQTxFG86k4ccGedceKNWGdFcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29DmwE2QeMu7Fnx3cFD5SmfR89mkPonWMwYmuG4dUTPDkqtr2rgZXRLdTYkSL9cPDTeUHxLtVFGwaCAkbi6yGAe7",
  "key1": "3VcgAFmbUGxuK61LiBSccXdhmiEQzmTHUNRsUjVCiqauTv7PU3B1JcAxENCYnkYATkWnqTuC8yeYLcMy62iZJwha",
  "key2": "CPoca6mbZhwpetimQ4RmXesvH4VLoDr79EqtDA2JfgWiEXHh1ZQGNW8SpRrhyCrZoGsZ2cb8JNEF5TU7beuXhDr",
  "key3": "2Ny1QL4pxuBAfY6eMgqakbHEpeRCnPkP95KYs74s8LnGjE5NpsPYCUkj4m12JJi1BdrZVz9SX2Jvn8ZnA6ioZ4pb",
  "key4": "gRtn8yWZGgUGdw1zyVF7WNdy1JkK8z7QpBqn1FgHdm26ehYG99tRjLFWgmbtmDQMWi6QJWC3uP1WsZx3GhABvWb",
  "key5": "4NAbXjToMgPfakuLxdALVTgAzdEDTJdAAFjU5w9UxRg5oJNXuVpUx2SGUS93o8n17Htv6CQLoKbRbj2Ff2xqVjXS",
  "key6": "5LNHtmc42FWyTufM6PB283GHYjvg6k5poRQWXP7kVv6iuxXynmdSECg7axCw2xwnuBHDazxP1CA4GTGEJdDEfxzG",
  "key7": "5jrwVYDaWni4YQYxjrLK16qo6bPmg1ny7wifwbjMkrMTXMWzkau1YcRJZ5N83ZZmpqkx5ZWNRg57QJPmQunK3ytP",
  "key8": "4pwRZvMRpu2gPKV8TDj9MKrC6KRTb3B7ny1NxpeRuyhP9cisa3F3173WC54PkJE1ZGU2Dumtr8waremZufdgkugc",
  "key9": "29tks1bwGJBdZAPbjP41BhE1qNYTiUgWHB6sypbGpYAbhZzXF18iM9j76ropq8H3bPTdD5HHnmaqKnP5D92xU9k9",
  "key10": "4NAMe8QWkAkjG2o5h5chHZDdkDfH2yKziehn87XGu2qziKTUmowReRezPjxP9FZC1pHcUk6FZo4fo7m65Angye4b",
  "key11": "5bn6DA1RjwoEQX3zSwW2JDrJWBfCAeW5PSrqjAS76CUVu263yRtk8wjiQvM3nvdLfg38QRv5APp93neWEax9kCNx",
  "key12": "21bJ7zRM3w9bCzmrTaWMJuDLh6SthaqG6tdwG8NjJkB8vVzF2yvPoVr6bQxdaQkzja9B5c4QBKWGvAec1aNmNJR7",
  "key13": "5Dp4ZvxuxfvjmJYTKDrS71tEtwLnL6HNZBzJweNFfgphJtvj71RooRUcH1xiv3CH4BYpuPQoMjCsQhxTXsGH86ow",
  "key14": "B8NSNQF7CgBZzA7pFp8yvS1PTqCBLLttEnfFAePSoyztDuGKyRxomPghkYP2t2BFLmc3dSRJcmwfL31XVFfT1qS",
  "key15": "3io9zihAPjxty1PLXX7szPu3tZyyXMbTGXaGsuoVUHFyAJ1JMbXgvTDqatzE3RuVj2XHvZ7oG3nzqPnRxEvvqCPD",
  "key16": "3DxwWECoZm753NngcCWPicAq9mj26m8pLisEpwBxU6RLw27EhydS184hFP69GeqaLCYg2YBndPf9RXt8WA4wm9dY",
  "key17": "3y9VdX9qK7e4dZSLBXPoJtdzZD5CCGqmsuTv4kcsLkagpd3KRHgk3Y5Jo43drpHmC6uLkCH3NgBRPi7EhnmaKppj",
  "key18": "5SQjwRvmWj3sb2KmFTDkeGfFYzvbxepD7q7bL4refH59ZNAD8CWx5dxqTA46rjSPmVxb5Tpwkwqj2tHtnz5dJ9a8",
  "key19": "4Uid5APLRdycBYBLZDpmhCEHhhRJDW9kEsSFsJoaPGwSJfYaWFtGrKnWj7VXdyM1t6JaPLDjRRfVrqqRps8RBotJ",
  "key20": "f7vSKChZnu7CmA76d9h36t7QSxkj5FmTbB9yvhDJUZkQgWD9c2DTvT15LQArQLT4i39fpyKYipsxyybeMcnQEeC",
  "key21": "4tXAsMRyWaviiutna3cTqW9wQatodxLFS2vdM8han5mt9mncUQKCwyqkiVmijegzGiF4gCeZxhbrnRNd4trRPMWz",
  "key22": "5zuLXezmmeqUZVicz4RD4WnoF1T87r1vC14eUPi4DEXTtPGxBqqVhUX7Byas7SnVqGgUMub6VDdoeaHvQRtMDo8E",
  "key23": "4FBJQxSuBPydqdMrYvYvc9dPry1W828msyyETpyVV93y1tJ6qMKDBr52NuWvE21JGWvhwEexZLYpS5uziYKUhTej",
  "key24": "277o1y7PsaPMq7zedxMbBuotB7Ac4eaQZ47x9FWkEBLYLvMeQCtqK1aof3FpWXCercFNpGys4YbA7jsBcrq3NfzL",
  "key25": "2ov9mgQVyk5cPyqFAmPCdjvuH9vx4Q3RnvfLx3QhnRZupc2H3m6r52aiJwvMXL154t83E4JmfMHiFDKxBgwDRq41",
  "key26": "5h2VMheSMdf3CsVsf6NufR8yS4nTVKDUvqyf3Q89hjCi1BKN2Lay8uxwg1NFe9eLBAyDNtCRfGEPVUoMD71GRXp1",
  "key27": "48VyqPHbnzKVVESFBabYAhBrYEENm8ikbc1WiTa5EFy496F8v6CJrbypDqMSHwVdAQiZkvBTQS3LwABso7xGW7f1",
  "key28": "3QJKNu4sm5um1q83mpDAGeBGxatYonS9Lum4c3rvcQUq6GyfLXfDc8efN9FNGW4ju5htzwqKmAR3pxthGF4ttxAM",
  "key29": "3GVhGSo1H13MrAHQxJKaoEMVta9EC25TuPrB4er8MKmfvQKv63QL5HdCTVkbTDDMTBG4EcgpagMdbGbfkAHpBCyy",
  "key30": "5XFBUzCG4xkrWz3RvpThC7DBEsnzQTRLAdR8TA7in4o2rCCFuSL1cunAQ1ymCrMjdCTdh478ARqLmvvcrVD1K1Jz",
  "key31": "LXaVdfDRnCuu2zvHXDUa6KdvEpSMsqqughmtaujUxRfWf5yMNJy3xnfGoJTJpNGHhuQWFK6EejFiNwHejkbHZhT",
  "key32": "4hF9R8U4R9k4MFvXwnqXKAKbyzae1E7mczEzG2t7wHqh3xHgKh258wdgS2MuC1697Hm9Jc3mFci2GLHX4xwPBajL",
  "key33": "427Q8auUek5HtkyvxRoFeujYTePHVHLmP7PnYTR7XWWec51s2TvyMC6eTuB3uZ9YXtchaB4iyqT6aaAhF4qN6fG8",
  "key34": "4ghQgCVoaLPSEeHBC6vHnoDRZ48W7fLpU1N7gYnzSMEcsPczjXN5tw9HoAdUmHcvdqGoTQWPJCdqaEz4zKoW2vzW",
  "key35": "4yVguW1TKsMGWpYdpwhEfEfFooDo6gK5cJwGwEKBDABwmoWH7SGiEwCeZ5F9exZK7b4UpwRdcJTFw8QsVYXmTaf3",
  "key36": "3vbhV5Xeo2vMQsd38bWicHZ5oHTMrHmPjo2jmx672xUuqiac3JGdtbv7SS5XQrxiQKvx4rbP2AV6s5usHhTfmpaE",
  "key37": "4nqWn199qgQg2b6LcDQNZaUmLotiG5wXPp4G7uUKMaFCArLqWiQMwYjYZo46McXVWP2Sz8q7DsdU6KzS7Qrgi1vP",
  "key38": "7KYFk9MHtpXFuycb4d9uFhFHkKqiXVpUmvCVHix5y1me4g811PYMVtsBeQdxTuD2td46M5LL9HLN1w9Tu4pU5Hk"
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
