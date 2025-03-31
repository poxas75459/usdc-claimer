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
    "3oVkSC3FMQBijLi6QNtg3XAXx28Mhjk7SDoiYuaLKfBXSqCY2zffLLdfEJ8MDskQx1MrdZ235D8AjFPP5Pi4C2Wm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U6x36CiKZTd1LArTYEw2rc11vPnG66RaK6VX6gpMcgYV4W1xHbdW5Bq2XjF8Pg7h51f1zzb12Y36S5oqSZGNPDw",
  "key1": "3o4N2uPpiN69wiNnKKpZ99dmmE2P4AQh9zy8ARKbyaAdf8FmSYFbZoocv48pdR7Ujy56mujYLBLCKf3Ht7aTHus7",
  "key2": "kPc9ckveEKH1QSQASJG8DAYFbHiAtGNS7EeUZG1CZR84qBYytGWAumPgJECb5kmVKQvs7g3aFi8yvoxnruvhTNN",
  "key3": "5iphrAg9QSHXJLMG1kweKTBvTppTsabBQUKLYrUvdcLVvei3ufp8kRca4oojDshutQDLarqx83Fh4pJmYzzpAdR5",
  "key4": "4RJZ4bR6Z5BkLYxKwkK7euv66kVsKLrGH6e1ETURMYw9VVfuqscZSX9msRGd5uXojQFEYVqtCsnbN1eoAFiVHAXw",
  "key5": "51HfYaMGVCaybnCmy9gpBm8w1BbVGvK2vZmAoXGqLAv8BQ1xGT1rbcB4dkHdvGRe4iG5KS5haoLyk6qjZAsCbzkM",
  "key6": "2eZAnXCrNa62Fr7cKtTa7i6mrVMMjaC5hWBXdYN2WfK6oqHf3EXE7JZFHwZspdKCUESuvcMtwXHMWY6ZnLosBmw5",
  "key7": "4n5q5R12PiyfjogEKd1V6t2zYDxzGjdddNjfGb56JjuG7qepob6v1bDViLpC4cfyXVuM4xXRg58qfDVyhPrNPbEY",
  "key8": "5yA3cmF4Vi3XYDey9x6DbXUJJicHRq3mzUkfXyLSVHKDsrf5NWPPA1eKLuT24GTYjecdfobR4d818ATvga7eWrQz",
  "key9": "TXKrr8LUuesjxoGqG5Lw276T2bpoYRHugHUuPMzbEcf7naosxYrM9Ff9nMPcsAcdNYThDgYH4UsUYDjR4KLfUND",
  "key10": "67oyggKUgCccSVtZX9CkhjwFtGgHA5siv8DH36EydreWf6itZaxYKYHrjK1XA7X5hBKxdWhnfBKm6xgMYw1dAr2z",
  "key11": "67pMfHaotUstF1MH3dpzhBmWafBZu5CLNCtb1D31QxgqdUQHDJ5EEX1ThB6NdYEc229iUDKSPRXXLUhxGZjZyJcK",
  "key12": "2eYnHmvy3NZshUyFtJVjST4sS9DfN1UrJNH9RW5rtYqGvC3JCCMEuimRGDvdPQfGXDBSQCBwij72uk98av462FG8",
  "key13": "zhiQkHWRGvQMn3Y9AxBci7rpTvN5Q1S59mYJ1SewCFniiY6XwQeRDBQ67JyDLfsMX8QZwo6ZGh3oVj9nihTwb4H",
  "key14": "5HRHb7aUq4Ps7ZTygn3uj8B1Avc17j9YyvPYB7DEKrsqkEU2MFcmjyHQoqJdKerxdhyph4c7xdN2jiqBtrgNcxZz",
  "key15": "3PtCaJvb3Dsp2RDQUE7f7c7LAZEXtfJBKoHtVqUXgfJ5VSE8C577zAkyXZ6ETiDQ2EoDAKMWqXhUMq7Hd2gYRVWJ",
  "key16": "4iE1qzH6SAym6BuMNbhKg9sN6cb5LzrxbWvpXxmFzzvWqK23JPAnfBSjv7eQeTiFzxBrpXCx6fFkaUMSWwrXe1Qr",
  "key17": "FFc6VQZqUCz77wGjWSsRYTK4h3bcbwpeB4RLKw87BUoUL2AWfVggje8kSASFcWZiNyDR9Kz3HLroe4xB4cX7dxS",
  "key18": "4NgkmdGRujMgjqiLxoXd6fNN7sEwxupXbHayACV2dpQPApoKCm31tyioYCMWZnTZ9rnY889kEfdGJs2uqLqoud9b",
  "key19": "2rd9Q5KeiK3yCdzJcsjjnMv6gA5aexw39qT6Qp6fgEkdmHrbCjtf7MTvLijBNdPbJh1VHhNqddnGqBV8ZaNPfB9F",
  "key20": "3bYJiZa3grPLe91jYgj2ccPRLCWpUzDpLkve4TwjBoJH3Yk1KzY66UHqRKCuar4CU3X5XVy9WLpsmzurjG5rDJ2r",
  "key21": "651ut8XFRCqxMiHKVJ1g9qPr7zVSWQAJ7dEAmJKs4GTdeLYeEAQ7HcCUUJYZ2ZrDpgPrjamvVoTbAvETQeyw3ALT",
  "key22": "28UEspXNwXeLKYeKgLWtzzB5FvRCNFGsjvxYc4XurrzMiQZN67ahGVwWgDP7yyDprqogMmjN21ZF4guVQRG73a7z",
  "key23": "2iTQEB9zT3t4Tp5Kzz3jkSkotb5h1kFkSsh7mcQE4rM18Hrv7zCk1b9jxpAqpxkeeZG8vf2q5Uwj3dYC8chnAFZz",
  "key24": "5M68usLzggFTk32ET8T9BNrhS3xQo9xxhj5GKJrRo89osxvnbHCwuvWSkopBs8hkoiYjtuW7aDU47gfJCSsjT6Bg",
  "key25": "4AvfSP5mgZSwb7ZKw5DxWLg6N1Xn5XpuJVffwa6zr7gSFZWxzwDKECmbsv2nycKvaMpGAAszGMGAkahgcM5H3eNC",
  "key26": "5FCxzZ3wXtLXsqqG9CKSmig2WLdWhkK1Drc7z4HYd1Y8Wh8GD4n6tREzg3qe2t6fT1juKvo2FCjKZonWL3MmxHmy",
  "key27": "cvSwWK8A9uFKnwsRRxqsmXquALtQ6WaJPx6pm2v5Fw8Wr81SzBSHyWuox6CXPkyd7avtEvV2p4cpt2eVDQFpRyp",
  "key28": "6Rdzrjegbej2TMtqj4HyPFiXTJCkq9EjU3JEQyUDKQSHWEXw1G2YUpLWqdZ2XXpUGHTP2k3MT9LPTjiUsdNwisP"
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
