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
    "5V5pXZM3E9h7zTJ2EXLiHWqcdnHB8jsz5YscGTu61h1gDshbGZ3U7vyMxfjai5SsWCvvXc885LDX5PS4fFUENPWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FeqMmejyh5ubeH8k7ZCqcVmKx2j2M8HHQnCK1zvKPB5c5uMTQUjD9bqQWyGeJAe1qUGwJ1R2CtcQUBjroy6Fy7s",
  "key1": "27Z2N3zvke62Yvcph8ZHBMvwUyoohc7EuCZEsWXc1ckoY4KtJGvmbFY8tX75UiWTdJuUbVM9eSkEEtRAtxmZDQ57",
  "key2": "UtiGCdZ6ueGj5x29MjtERgY4ZdS5GYUbt7pCGyWmz6odgnwUCMFtuWkq3AcxGkNJWzej38iF2MjgGYU4GaGP3FS",
  "key3": "23gouuBMtR9RgczQYAd5rpxU71dsP9iuUwJHjmgWxQBYETQDBje9YPFHfemxB26fz4omPoCbZUqw1cJubjyNnki1",
  "key4": "2bP9C7TNzDBD6rZTFuFaiY2K1BC7WC56sUM8zqC1grpdpZ8VVHzsrtHoB7pKupBxZix7Y9DrWyF2mS5xVrP8nvi1",
  "key5": "5KsgXhQRmmgkLmdaRiJCKWyUkPQ8owHtTMhME1SjLaK8hToYW2LCg8m48NhwcJ4eik6jKe5o8SxZwsPBtd1Ym4Ko",
  "key6": "3dzTnJ361UsEyffwuquawMP1UbC38wmtgNXpFnW3CW71QbGaTdUNGsdUNx2qczc4R6rfUUXuVGE95sHqNnnZ4KQ5",
  "key7": "1jsoineQBBin2Xo4SLrpbuc38BNEC5c7pdGHCcPUyNjmQiNr2BTWEFkA6kneTMwPKfrd4ccMpU41K9Dbfv6jAHq",
  "key8": "5BDSct2UcoaZCiVkiJiGUvUHnJFU4ftH1Ty7h8oKLBrqQoDnyvVUvE9fi9rqpKkRsrJhbEkd3yWgioS99facdPQp",
  "key9": "51nW3rAPeTFifffacM4c38rDNvod5BBam4B48nYMPPDXNm5jnfHwQFR1dXqywqtUEeakfykpyioPXPNXgpXwtauN",
  "key10": "2oAe2RxGBzgtWH9Ukfk6qxv9ng5rms4ojJYxBgXkhuEd2hvkR1SD55TWNmqjPp7iTRcYZpMmDgaZ15L2ZR75PmK6",
  "key11": "32D5hECy419JffKdyGmn15UbTLFiTGRWnbjH9c7ra5ujTy9eCoPd2C2hDxDYcJr7pPQsUiS34xc4C7bHqUiR26C6",
  "key12": "4GiPMb4HJBMtaYa94zdKUuKkR5Tw8MLSHQvVFoBdDiTXK1Dv4RTn9BDnafqz1oHgmnLn6BxHvZLFXZCQ2tjhZiZo",
  "key13": "3eZs3ads2dMMsE2ok9ZtUM5BvGcJqYHT4vZvcqxGqiijL2aVNr33Z5eEqkuGuY31pM2dfFW5q9nkyDp43pBG896R",
  "key14": "27QzMLQ1X1LtmWaj6Zybt2r8nSXsq8XmGHx2wo76i2e5k5JBNb6gzjTaa964mwoPGMUc222NqHe4fxypGtH8zY6T",
  "key15": "3uvM2LyphRfypBHgXDMtvmkW1EMtm2m8rBLwrcAz1do5YK6ojxPvRgAodK1YyoRA8bTXGXTGQrWkJxHLU4PjqP87",
  "key16": "4gCkmEuVoNVibr4SgBJhtY5QbcjfVJ4WEdEgw1Brhzaxg8L3nMJUEwT2yDuFqKPsSm51WnNpwbE5b3i4ojgqJCpq",
  "key17": "2yQ6sABDv4krqiYzt42QAGKpkaNCs7bkKDxMTt9oiVBV9F8DTq3C5SjkpkyKLRcw554HVuiUbq5CHBnu262ZAgnf",
  "key18": "4XeYR7jjYdbmDiGFNuvspeZNhNcaqDEgKPz2SKfTqUCMbVx7FRfUA55XCUFtWabVtcSRyXKnBgrQ6ccbHE4kpGVN",
  "key19": "3SjDKxfrXPGRBw4ktJ1wmU1VxQwZ6kWmyFdFCokw6jPwZQpajZweFfgDJBjZmgm8LCeRZm4Lp8wW9pNDn6EedsMq",
  "key20": "SMk955V1dUDsX4FbSWoV1948jzBotA8FXtxH3vRNzsiRscd3UEmjmnH1hSmvgAngV5PuxQDR3tdxTvr6ck2uLXV",
  "key21": "32YD8LAuRRdH6x6H9D4hFwMYuPau8BKGDtZizrcNtYUpPVEGfNvbzRog2YBrVqJP8PZ3KSu6DCMzZVNETPeJKPHy",
  "key22": "4ypVeitSvzHTustsjARM1tKbbjLAzxn6ByJaoj3am5oYd7VwnfYfP4QjnWLJYmrckPqam7SncooXQk5CqBaLkrTo",
  "key23": "29F3U5UtE2xNYuC5AgTQ2DF5aUmAYESj86B4HwqhfZmGXkhXuQB3jxZUbhm4uxtdbd8tnaqHRdJo6XTJY5qLc7WM",
  "key24": "655SUq6XWNGC7JBjdjTawxa9ey86m5N1DKyj8gg3vfdwdNwmYyoZ2YbZn72P85eXaGptSoaiUVHStRCqP47DMZb7",
  "key25": "2jsJ2DwQYZZZ9de46cJkjtG75Aj9A8RD43v8hLuDC37kBqYKKnBzSghhvCShWot7CJD4KDDfkGx1csQinoHytjfB",
  "key26": "Q6QkaUdLgE3DQ87i4pEKjMXY3J3Q2hgEMvjtHk1BERVntzVSXEqcM5pAkSCbsDLNih1ez6Vy5csFy2uDBAvvvuj",
  "key27": "rdLeWvbKUFyNxxSa9rGTevka5i4A2fVw9WnR5KnsmRp3SfTsdh5R3fvaprCNPrzTWFP4g2ZWGgchLc1Yt6dERJu",
  "key28": "3sXCeWdctMr9Ww8pNhCekh6P9Ssq9u3uipW5mnFHgRjjbedyqrLkic6qHPPL9AFyECmssrLRh8dvh6XPrqBfCCpj",
  "key29": "5bF8EucDnfKqNpLNVe2gPJT8U3T521LEhN4GS1y2vDmENKPUVNa7hWeC3B5FC9iMLrxNkgf7EfXb6tVgkpR7YAYZ",
  "key30": "YevK459E5mSLFBUDhQqt21UfuyEPMq6oYeJi9AaLS9oPExkHmvoXimurVenfxKpWoC1ArJqnwtfsuYSpRXwCu9D",
  "key31": "4hxzxyKHysqEKcBZ9j5h31oq34H6t63yqmXu75fyxgNatRWwchXopKZjeztkSfQYVC5bBsMAhkKPtYyYuyd1XtdK",
  "key32": "akLscN5a2y965oAoGadPSM4GUhxyVHtXBDxnCkiDvxcAbTMaExodZsAGpxFQxZdFq68TxKd1n1PBJjPAk3vPiVW",
  "key33": "4eW1mnAS2mGe34zUKypWrfvmqPafT1iVoxUPDHHEcv4ZBq8ifkSiQs6XuxA4acrCgWLPawa1KxWbTahgdtLpYCBi"
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
