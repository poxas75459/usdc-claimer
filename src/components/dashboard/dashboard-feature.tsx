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
    "2ouaGDz2rEjdmG9qJF76dupWops7PrjJ2mcma6WaeBXYf3ZosrfxSXGyr2exo4atgwvY2MEn9LcKhSzHLUhmdWxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sXFJShcaEfTDQk2WwMUuCX67WhBmHhggp4vLSd3DU87isFs8mETcBy3D3ETzrk2KDRXf6Uwcmd9GcPUeHSqFVnD",
  "key1": "56obp9hihEqY7iYTNKyjCBtqLqffk6nfzUobCwuFqDamSgibkXoToMr2bThBd7yKa9GFiQidZ9J3MgJQPTVRbkSd",
  "key2": "57Dwm1WCyuENJ2bJpduveb8TvHJefm63bHjqP8JjuTn35nuj3QjTTSFSUc5dsS27XNPk6Z95784ofP169b6W7skd",
  "key3": "4kXgoDAzt9DPzeBYDkYfk3NhG79nwUFprgoDkUJpeSBquuoXRjK7HFgLxC2cWFSBBnyNgo5B19LAkApQuGcfYsKg",
  "key4": "kYNVMcxxNEji5yKkgPLngskUW7ZWNZoPWgqA1p6Rnw7kmXM7d8iZD2ScUYyyNLKadEBHNo3uysSgeP9BGAeEUdi",
  "key5": "zrPdQ3AKqXVrneqigxFnv5bQF8aqQCCpCz9cUonw4GMFzEZMv13SswW5puj53qYDuWA5TdumdvuEVmeQfo5mNv6",
  "key6": "2HmzQWdPYxwDn3zMoQ6dWeaGVW3upcHxPcsw325bubcNz9wTpiHQgKazq3QZyZ6GNZcojcDyK3YePZxNq5pDYuzL",
  "key7": "5cPLVMrHFvHzbBxHKHjk9okD2Frs4vwBy4LPrpJDRbReBpan8Ghd9HwmWuMimJcy82UHogzNoa2k62xzrhRBV7ZU",
  "key8": "3NRjCT7U4jpFUktacq5NHAs15w8wzU1wZXj546axp1Wwpuo8skTZboKhqQRHPpZbBqgedHbCWDYVBUka2CiXKsYh",
  "key9": "4uaoYdUBa3BPrC3RdyoStZmqi4KLvFFESfXjoFWAMJggKEYkKQcn41xUDWTNLJbcaoLoPv2Bhw9vh3NnJMuvxZf2",
  "key10": "47SHrTrznTomr5SHnEDeVFcBen7n5n1XSYHVijmFf9aNrbvLpH9JsfbK1CDP1Sg5JBVtGZMUt9vanULxWcYZW7SM",
  "key11": "mPtFkZWzCPyd7hU6758H6EfuxQspbh2oPaMHGK5gxvPDKdiFE37LbU45QCBkfu58SJdVeJYaWhTXunaC6JBfRrc",
  "key12": "2wEJRmtYXmbETDHr2R7DvETAJYrTaiXaUacMNDK8B3iu2ieQ7WdBowjuxbxnoCRH8NnpWmmDM2DJhferCGMmzYf",
  "key13": "3FCtbnNsMsWovUerbL3PrEBPdM6yzCYpRSWpe7jJH7DG4eTztWy4UxDBC1QXF4w2G9R2A21G5wgXkcdUi6WiHmP5",
  "key14": "5UgBsahHAc1T4khLhXGtfh5XynSbQCfVcW9Lw49ZZDxvXkfenUzexJ1AevVyYaG395cqJvjGqtHuEuXtxVz5MCVn",
  "key15": "7HRu7YS9uYjFH1LCX4Dernxync2raDoeTtd3aBUt2zaU16PHK8jJ9NQzHC4dZULzyAX1wSk13ZhnUhstie4ZBoA",
  "key16": "2JoCQD2LvfS6qSHqafmkyQZaLegjSYdwsz1uyx3b2e2xP2yZGjkvekNEvuNCeYRPzcpuf3ZEti1QSLuwcmCF1yBq",
  "key17": "2Urfv8zBD55xVyww3YJ3wBo5UFiZRLMmAAGcgxD1jGAFDMvSARqpY6ZudoHjKwpCtKDMWCzgBGYe1D5hN1GFPtEf",
  "key18": "2CqqroqcSvmJ3XSBQR3pF59SCAByZLYyA2mBFPyUgkJFGTw68Zxk8hCLqkYBCNkCVqbEZtPJGmnrKkQXpQmYqg1",
  "key19": "ETjFyN3Xs9kw4sbSAPjEB4PkPXsir1zSfveJgaGVwiQ4T4ZwZWBMiXiNrXDfXgFWaY3mvEZFUuR5Drr1TWGeN7z",
  "key20": "2cptGyX7vrKpBgFcZf6fGxomRj9p6zPkB7po1yueTRjKaTkBJtp4788hKu7QScUdXpmsFXD6UMRN5A3xLY8fcxJs",
  "key21": "44kDfnN4b2fBwNKAk8W5PCvo2xexinUTKV6QQRPdZAYvSCJb47Wk96n699KzSKkh7FhHBhmMDM1Esrp1KnCwAJ4X",
  "key22": "31neoqKkehMsUvNWiMRKAcH36spq5GkGFddW3dq67hgbNZRJXzANF5oqyJoQycRdDG7jGVGTs8CvY9agbMKKiLub",
  "key23": "4A3qw9LPrG2LFsvYTanB1xvVtUxwiEq8hb4FvqMQNCW1q5ZMgcFsMuPHGkVoUtLiC4Ge5nHh2a7LgTEbHorjw22p",
  "key24": "5vHRfRH8EKVyVmdMrTRTg69Civc4DeCHpe6PtGehL6tQj7N7uUZcY2U8vcEEYnSHQ6smR7XgLTGCB271SZSPZUuC",
  "key25": "5jN4r1DoxmsCiYQu8DnEBj5CDpJGsLEZn93VbMvn4vBkaYJn6ZGSCNMK9D2SGtXELGw3eGWR3THroTdFhUAKWu6Q",
  "key26": "65ajyqtinVpJFAnJwW1RpzUbXsyk8RBxJGTahwrTYDv6p7wiWC5t4mm6zZmexLp1FK5KFJkpaQko37dRUKLwRpE8",
  "key27": "5BLkJVgVJoJiycN4CpW6WnHqp44ySu8KJ12sjvQouszwkbfV4E7VspMHqTEVuXQJRWsHEcgE1m5J4JZJmARrsCDm",
  "key28": "5vfujaefabV5Zurr18bGi3eCtJZZuGHysF2M2mrJZoHE62BeHfgqS8uypDmUz2YyKyVrPoRLwsGjRVsjWVQtHfXW",
  "key29": "2WBSg1XdhyZ9WfBUXgTQDbaDSig93DNr7pqCX91YKowyPtZw5jWgNaskb1tq15RCntiGph849iP3fs7kiiL6aM91",
  "key30": "3GNWKkC7DUPn9nsSz8bA7tsiPyumSHLUd1aEcT317UTRMbkdiNoeYFsYqjnRKBdFEPtNK1gJZEbozgNQeetwQFsA",
  "key31": "3WAFZeKWgCEY3nYdfWdkM9TkA7S4zm4WCfVsEE6iv8RxnrAFEZ855uB6Jm88DsjgSCD3CWJGbiSz61FZuDR8jx7k",
  "key32": "3sWnQUz7HXhHfcSAVpgr4fqrWUQmPH5jpCXULfZaMhtLGjojgJG7CwQ6r6adhFuyDiPWtzjPxzWYHQ4j7pbnFNnD",
  "key33": "rGX9eJn3rsmjDqaMAaqUHisUviPpbYHk7qecV1GgQDcb15R6ZwCv4TN7qDTMZGHRRp6KCY1JbNCLjpAB6xHHsNs",
  "key34": "57QLh6NBraBSm8YJJ9dypbAQ1cxY2sBXKwScv3ZtezNqNUGP65S8WPZvxNRgkKWH8acaTCGuSFY3du6aJ1G12KTc",
  "key35": "5EYwLfi8K3WtoRfUzXHYs9w4LVFJx7QCwzpyUE9FMKYGTvBJykWVb48wTedbh1cUtZDzLyf7jD5QwX5R5VrHzYBC",
  "key36": "5ykX48Hzvhh7bEuMEkMfanemMtiq8ncT1Tct2QjZZ47Mbvr6aXMNQT7gXujuAf4TnhmDNnGpo3XB3poCocH4VHiY",
  "key37": "5o4AQmAnYhBS92QyMEXrhVHT1A4vstpRJZvSh6q55pEzEegFDYvFowKSV8WHyhGbz3p82JJijMepYYQkJuwYgi8B",
  "key38": "7CYFMydHiCZNhFzEPRX5jrtozL5X7AZDBqR4CXuaEtQXcHK35NvHwku7WHZna1zjcqHqo6o7sdhx12TtwzXWwf4",
  "key39": "45Th2uiLR7AU1muiWAnynu2fCWnodw9zuAGJofBfypC7VEtpY8mFXUtjv2T7Ktmc2hxZHwmCHhe1fBGGa6rk9XRx"
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
