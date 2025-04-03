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
    "5aGDA581XtgVvdiFk8CSYdQC5opScXQyU71WMn1beegoSWmp7Vu96ihqcsrEB6r9GtYyy8uu5jH3AqarJjhUd3Xq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ESDsBopBxh8Pbdxv4bvaSVs7pQ8gtBcXDyGnV7uhrahpp1Kj73ydothBNNhcg6w9kPERquPDYY7pFx68raNtfeJ",
  "key1": "5UCZQKtEb1CvUBGBiqiEL9D1UaaBRJSDq7tqh3kmUqiDVyc3iqxNNRkL8YVMmJaBCchJZ3MCZSpcFNFqABBXkxUZ",
  "key2": "2o4WTAkcBNKUXAuNdMvKq5xuqbzcmggEifNtSni1NUF2vxUuzfPsDxvKFCvfBrCMkuzZ8LDopoEh2tqNaKJoWuTm",
  "key3": "4SRBE3atvQApkA7UMk6R3BTkiNmJiYjnUspK6cLMXpx34Hry1Lqk88Gota3B6vhktR75R868tnq8WqZMsNrypRPo",
  "key4": "cieRiE7xvV1S7f8CpEn7SLAmSfYHkPgeQJWTTpiLssRDPZJM32ebKBF2fcCr7qUrSERYg296k4smHWxyojTbvyc",
  "key5": "2eLUjqSBmpRbHSrP8QKtk6DHKjKHoZWEkBAnv8etkjcSixacRP82pYZmVUH8smr2Dr7a58CquJkqgpLX5GnqmXf",
  "key6": "2BgpSGGJW1jSrvcegPh2UDFxAmP9NGukjtXXhntfqW7dV4KqBBseD56MPJzjGFoigg7oex7w9PHTdKLWixZpkb73",
  "key7": "fWXAAMqawf88N91kZ5mf1uADwrTSHa4XWiDBMwxNjvyVRNKpnnqG5crRMLsNju4PHT4mHee57Esit2xQUVLKbkZ",
  "key8": "4YW28XteeyWm4X7H17kyeZJAQLhc28Yyw9TdFzi87XYjvTEh5vq2eVemnEkoq9mGTQrR3ivF5TA3ZrqscFcnmJj8",
  "key9": "uiHWE8JGvtheZyBHLg4scBpRgj8hQWNgvKbkmaJdqYVkfrbwF37qM8pivQdARsXn76UURQfTvgboXWQKsnvQW1r",
  "key10": "4By53q2qYnTmAMFAuzgsNtKaA2aaBKvDTQGh7kSqXvBfQZ1okQk29xWgnqx8s4T3Wo3VBDEjVJUz4y5oxm7J2h8F",
  "key11": "4CRNkNefL6eiwNWjDhbVqbnjcXuHJL5ciFzs9cpsMvZB57Fjv2N1341ccwrbd3obz6j3MLrmqYjAt43Sc1eNnuPe",
  "key12": "3apqVCq9cAPaFFGCJiKF6H4NijWotUcExpqU3CzQKvVTmugmSZDDEeQ1Md9uTathnfMhrEZtoaK9uCHpwnJqZfHd",
  "key13": "4aDeSs7foQ4rkiPtpz8V561mvcrrXz8CPDfAcKkCGZfaHTeRWhFfddJWShvsNzECZJXwzC8j4LYB1DSV9aFVUTVq",
  "key14": "471gtztcKKoJ4zkMcZp6kPKwU9dsnBnm8fm56Q3oqwtheEvewPM8uiHdLPNKZ1M2tTsc3cqAXV3pxawvfGjBtz94",
  "key15": "38V2hb57BLxqkXfz79DQR2PjZmSJDf5ukGgmsk7jUcTJP5YhsTTxr5HLShoqSuTRVEsdf1F5EsjimSFvZn6DAFik",
  "key16": "4UztRDSPchGM4CQm5oXsqsTncqhevpxudbPfkWCqopo8EYsfXjktg4Wa3FpEnh3kP24ryGcuFqiaoM8n92Liyt1q",
  "key17": "4T4grt9swCeXGQNDa2mwqTfAef57UUEwUnJdgfiyZnwxy3tJKjKx8QiYLRJmadeHvfrn9PSy42W81t9zxELFpkJD",
  "key18": "4RVzCuYT8LRaaxMCXvPtE3hifhZCyWL2hcPkogPQXkKviMtdPouceWHp15hgbJ5xpnCtc6KBYyNjcNfGjdi6UbaE",
  "key19": "635JV2hLjrnwSQ5ueninrsnFTdUMJqc2SfAHG2GiKTivJ8ofGZAYrp14yd1x4Rh1824xF322bUkqX75iaANazRR7",
  "key20": "4hK1FAcvhBvJZ429W15Y7J7tZovTUzWxQAXWHQMqu4R3YSDkds8nnAMcF8T3beHSSeEVjxytTGrwiywU5tutj9X",
  "key21": "57XiRDgcL15Hf4FF97YUCTR4jPb7MTx48jKwa7FSvmBoBESPHYbH8QSuhxbZtMoMdRJ2dzuDv8pxuPiS5DuudXcL",
  "key22": "4nQ6GWQXBU5LosoiaZpS5pU66nCMb13ws82BSt6qxuVDCFjp4sfmwxgrd1hnYuqgBhv1GC4DZWsF2rey7GWCDgFS",
  "key23": "3VBx4tCTVLAin7CgHmspwiGzc9gsDDvUmKYg8sVYgPtnjdo8LD2mM24ksWxKsizgKGGyymC9kHZVDvzPu5yoaRYq",
  "key24": "5YykTC69pUZgZiqnmJyTvZaYieDsVc6QPJ17NTzqq7WVDt9FrjD3pFMrLeH29hJkf3TrGLH2GK6KmrtsGQ86mi5u"
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
