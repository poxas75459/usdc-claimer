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
    "rcEq48TuDFmgyJkxsFdKnDRCDxyG4EeE9gjFxpR4T2jVCzHFURW2j5mJQesgbxU6w5Wt7supX5UQmrZwZoSVpzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NFYKP9Bn6hXMXJY2dbHqC9KCsmVDYTnbTeWkzfcaGBMbr5NTuCgGGvc9Tz5AnwHgCTKESWxsNvGyACFqsBQKNEw",
  "key1": "3Nva6Zp4xh1nbpUGa97UjShrLuQ3w2oRc7Sr1Lh9yCNLTPL1nZ544hWdkma9E2uCSYfxswzavJQf8q7B8K4xWoWA",
  "key2": "4M5pKYw9qEUoDzWSjd3KsSfSFvtBpsGRFWTTb3sm9G77tTecRTokAREAV6aVskkeqxb2QEc1ZmEaiiEhX4kWPbCD",
  "key3": "5JR5HxeniE7ZhU3YodCh1XhZ3aNEQ72vuUQzAzywr1HehkAgxtzobzbdviLxfMXZtbUuwd1eb7f3H1DB97DyFAY",
  "key4": "wo3iAR2y2V5Gc45qBN3Wiw1z75pFCgJa2JQDoWcW572Gqcoik8YXVb71XFWy9p3wpmnbBe9RG8GHCUySuiAdjSz",
  "key5": "5FheEBPeToN1FnzqnyCVTU1f16XeqdyL7qVdiFsYGrSVLE63xULSiSNYw5ANovJKhfTvg7cZRXg742LtJZhzUzHw",
  "key6": "3dUdCWAJrQeYNReoCRnmaCkuetACZhGxqxm8e4k2DCkxbfrPh71uNFPkyiFQkBUDpYrq3orGWHBZZoSSCPB5Zb9F",
  "key7": "akjaNCuyG1cSV86FEuetsYDAWVjdDFa5Q8FBZAALX64xAPUARJCG2STVnsCXxQzhjXsNyYLSMnckoyojNXd6tuX",
  "key8": "2j5RoZNVjQWEVmyY61rPXMGvGPQWbGdEQ7oVVFGRJ5k2f6pVUoXYePeZvDAxeTuqZcM5Nu6fZRHif4qb7hFQkbDc",
  "key9": "57zedDie9RfJRHrpgkMbp2eC3aD7wxyrg5xDg2ooN2Xr41ZuPXBXbzoDrT89VosExP9fVqoNc8jHWyMb7XbhK7E3",
  "key10": "49wfU5sMqCivqziFJdUh3JaRpGkyEU49nn6q2va2sAYE8aEgkPSqzLotNh3b3v7tNLx73yBQyCpXiDX6J7VdUXDg",
  "key11": "3L9UX8cWicepGVJ3zLCfcBhR5aXnZg4Eip97TfasVRjM8P5mwhjvpXj6Djauj3XPQTHGMN6EBQ52XVYiyyuGoXTQ",
  "key12": "2k5czjWg9ASmSQFZdiUDfsDYRLoSEeuSGjcNKhfJLyqJRNMpj3p92yHukrihoEpsZZNCtG1JEqQC1F1aQsiFeAPd",
  "key13": "aVSv46gGhjqJ8FzNt94Djz1oaiAhy6bVhPqyX5K75L2MU1WhYVhMxJr8CbkwM33RrS9MmrWNCcEMMY8GbREbG2e",
  "key14": "avDKuATfNyzv8VRHnhmdS75nUruf6xYEZUrSNzM6XPNx3yvkSXgpPSKUL2cRXKK1mYLxShbKNoRQgJKcGJ6J6od",
  "key15": "2v1ioaLMJqsBvKemzKnr8w4ebU2t6wds9ajMAeSGb7Bd6METNZUnzBEybKYAaWKD4f6MVtaHpv6Euz2PCRYGnVQ2",
  "key16": "5SHsbYbfdgZaACji6MXTxjFroHixnF78bTfkqf1eV8UKqk7Ak7AgcbPPSzK24irMxujWVivsU8CU1rn2gJ1u7h4a",
  "key17": "2uAF13pJTx1Ens1A7Qn1k9aRehrnC8nSd7m8rxBAzjduMX8jFNmY4o7q5eSdsyG4dGijrgRLU85sGDuVwULRsBmB",
  "key18": "4QMrqdGfvHUt1KkABLshWkaMcAnXN31txW59Mbp6b9XrUiDeH53ey5Ecfg8d89DuCDrYkbJ5tMynMXo8oJQeCTHu",
  "key19": "5i8wkj8VacbsPH2HvXCvFi3m8txxNNwmQG9DzyhDrBGwtwuATrCXhmcBAJuqvQkFKXz3VanL53TzrJ4CXasrDFpc",
  "key20": "5JahMhntwKDfTSbA1oSqRti3dA42Y5LsvApYCEidwakPymKn4jdZKfCLn9pf7Rt8q8FTNHEtTyVe7EpPnxFiSwmy",
  "key21": "2yqJKLDCBGZVhm79E7Eb7KngnqGiNafwaBmgy8Ys13McctFaE4TPnvmngfRWvecGs5a4tyKc5wfudu7FYeJAPwbQ",
  "key22": "57D4xBhtNqANCPpdoi4qQB2WkixBaHGNRXQyPXmqxA8Gt3eVgzatFTk4JM6rdZ45tTHdvYvosR2wu2Jwv8c9vBBb",
  "key23": "4hZedYMFy3BgiDPbsUcb8fbxm5Y5vvXiorWjJMvpKACMCyhCG2AhirwwACrjpHRG1EJngaA3edcLawc7fK9iip4W",
  "key24": "4hkDkzLKUmrg2hMFjhz6WF5ZF1umAyiNDAwYvH2wDESzn92CYcgbfDLiaFUYqUrvZ72RdJwZDmrgxBMZGwCMSaAW",
  "key25": "4SQHYmKLZjvxjmQZAAZrPagg5g6yaiKbtQZPCm4QPbhbgMp11zhABqPkkADxS8SEnRteSudauW7GDmi2WVfTaBLk",
  "key26": "4GYQZfUHdETHXNm3EL3efFYMCy7J12t1j1MB1xPuiEx3umjaprkuPuwSTseBGWH3hNUp6hRDi7mEQQfFQrUg2NqV",
  "key27": "2HFSWikaHBVJKq3K6HNFGvFtAtjz8S3anHTzQV6s4afY2tT296VBw5iQE3fc1rdrtZBGJNhyZwoPZQFnvYAcwvbt",
  "key28": "2ZMq4nGAJBaRCPiTkr59uafyZuGVsEZBrzqWCMGpXnkAdWnqyviykXJ2gRS4HnD79iabZPGd9AonJWKsUz36yupD",
  "key29": "2g2QJntS8oBuGStQhqJvVxPUPESA8m6xF6Unw9JsFUpLJBrq4zNXU8BxF9BS2ArGVRvGcw54HjVX9oPh9DmNie1y",
  "key30": "5taZsEovqCxyoqs5QBH4stUH97uKqycqHoicJKCxWmfwnDzNABTRGdKuTf4SUMBUF6XWi956UMc1BCU8vXkyihZH",
  "key31": "QsyAbLcAKcSyN2NXGyZFGdZ6itKYtv8MQtuzyxLENnqSwytLfH6Hh9N1ccV8R63fgugGCJ21vtqNdHoud2qmtWs",
  "key32": "bo7YebUYfC6yrUNM8cFGUdjhCRjw1ZzxeRz4gThSCDZyiuAxKxJXDXLwnkgcyfZPurGrFaoqkDKMbmHvMVtzFiE",
  "key33": "urKUKzpmxVimsKDnhsCW9QzRGuqAYDw1XCzpnDxjrYbhVKSxV48ABYeaPBviqMZPC2WCQejkfH9MgzFBaCKJXBs",
  "key34": "3QFp19JEbHnuwYrh4Ke4r9rquhN4E2wCJFDeHCfgbiD29q8dPmEf4YErMZPZxyacnDBPYYKExrtMp2prcQQEUYas",
  "key35": "5vCAVTyen7m56U81EJDStbWkCfDPJ9Qt1Dx8vPsc2RPbcANmdvxtTEo8PhSKmhZufMqEEDw2aQSm84nFk31vVziR"
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
