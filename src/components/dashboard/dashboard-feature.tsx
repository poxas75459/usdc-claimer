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
    "5acnegLwNvcGLoteV2ShZtahCxwL2ueZ1UNfCB4G7CKYDGSJjwcF4PMxwdx6Se1CrrNVeLbXaerDmDZ1D2fUK9Vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47WZ8NLDwbz3zwHxcr4w96MSTYRHoo472F29YYRykg9jyrTBCWHoDBQVcpyur7VMNJ5MitgL3aQYTwwoLfxymxPy",
  "key1": "4zGzE7df32VG18i9avSAnxhKcMeEFp7ibFck5KGZshRnHePuyXYmJGoQob6XBS966T1wkt9TpNq7uHk3rPrLoVpP",
  "key2": "3FyxfSnRmPh1qGwv4Dn4a8B2zsWiCXM4pC84eZQDJcdM3otn7vegZiDMgKDryRmHmNC7sHqhj32MLs629Ygtk1Lo",
  "key3": "2XxS1ZVGLDXqq384um5HEuPSWYjTdjwfiFXy2WaSsXfhWVVpNomVVqoaJgAeoWcWhzbTtMB22dDrHmW5KT2Ussqm",
  "key4": "2KiVfxp4rqMXWFaU2YLigokuvxuchECDyhxpPjAhuQXBkLoTWCrHwuazqFAzKTedsdTSX95WRcEvFS2BxYQ3Ta2f",
  "key5": "5n1UDrVWMfJcCLEMsTXTK27dsGErpQEf1i9VvR66NCpRtaQQPxT6w2VXsgnswPu1iRpfRSgZk6B5pLBsjcvvqFAr",
  "key6": "rLG78ggctprEjehLEQw47RLuHjJ5GuAQcmzxHV3EwWW3ApacaZA5YjkznPLPGCo43vkh7AELngqvmxeGuox3uxE",
  "key7": "2ZqwBTbkGTHZnneQPemsoyiDkur1gypE7cnMaBWVJa46MPGWePzv7g8ZasRbKmcY7paGjm9JeQMPAuzwUNJFznPd",
  "key8": "4d6P3yeGyr2XqL6T9byB65qgunsiqTHcAg5qr46qG1kZaFAQMpnkUgRF4PDyKc8zbEemepdrtdBVbpDwTFqpWrpu",
  "key9": "5czDrUdw8kW2oVqG7EN9MjBmdGiS21E21j1uB7FGKmYj4YD4Mbef3sAt8JJ3mb1S6fsPfPHiSfkrLhvv9A33cr2T",
  "key10": "iGMUyFbebAgPqJopb9mpvXHGPqtrVgNFfipQ4oV7NPQYKCtPXHAmmU3a9XVd8KBfagYpjxvUZpRHiaG39Pdyn9K",
  "key11": "4iTouqwd6Gw5Afsy9hkoZRS9DHpkTPJKx9wBXZ2bN8TxEZajSYBi2Uu6PARzbKULBLHVk4Gs1VHC4xmcCRDo2w37",
  "key12": "S2nJEWwqa6abDHZrL8LVHb8GnTBa8TvuAvV2cXb2MhNyLEktpokwFSVEzrT5gaYZZh9FvhVT1WnL3yosLhi7QAG",
  "key13": "39d6wP5VvMKtvGQgmrSxtMMAHR4QGnjKJt1pCp5FQgG9iPAN66FfuJVMTUfxztNSsWWa2xMJ1K8wXnZ22F8iPLYu",
  "key14": "2CgsSFNm1zp4i9nXnVcZyRvz3iTAt7sNTk6AaXEjrWXqXWpeiDgEC3A5E9fXQEcfXBE9NBLppWyQABW9reZHAJwP",
  "key15": "qobvpuUG7jbZS9NL4EobNvGFHi7ys3UKwkSmZd9VpnR9AZYqRbML6SQRma6N9pdVBi91qqnjG4dEYrfG7rQDtGP",
  "key16": "3nDJeqTrhy8TZ42aJLtNteffg6jEmAoeHxod9ai3ULsr6goET2fVxnToRA57FxGURL1uxwiEFC3FG7uEifFNfjxy",
  "key17": "5VR939rtAsoz8Bwtwfw9UwVSJcipvMEXv5BdQe8UJbUXqwrqkXB9zqQWtWyuc35N5V4xmvcmABr37Fe7iqsQ36DR",
  "key18": "UCFQmkD798DxD6EQRGUn3kCkYGGRJaecvNoZx9U1R2AWpw6ggBMD9LHwq8j2RFvxrmTFFXDTvHVQgUyAHchX4gR",
  "key19": "61oj6HzbYRSPuogychtrDKhNts4QqjCGs6t79S6kqmm5xRnMJHhQincvn2AEWV6cidisKKNa6QtKSJodFLZMMDwD",
  "key20": "3Kh4x9nEuCKouL873XGK3YBWgbrWnnL5koc67djQuwqhoFkJpUvoh9PYjbjhS4LDf6GC8at3GwaXA2ektbPzKajk",
  "key21": "4pYKodcYVPbaRDAHTM1eqhCfkvNGkJ9fftRxy2xBgUNhCzMd9QgTkDscmmxXrMwyzH7oCRtRym4qXfiRw6weC3z3",
  "key22": "4BfgxtS7MbG8sBLnyydDgT87K54hPoJ8JGgb6qcXf4cZoDbjU3G5XqTrxEzcxgJge6b4wdggSHavYnTVaAwBwkmB",
  "key23": "3FFiXvLmqupLa2ZnM3wQjjsRBrsDgmcjKo5URD9BuLsa6owrMi46W43VT9q8eirexTQVEkaYjfoVjGe5o8mgftpY",
  "key24": "5gADFN7p8dzzcGDN5LQu7keiiUaSEEk1TBPtD93ZNUKpjuqpVbF4CBmYpntkamSgSqQDY2gFc2UiLsxsWC9EiC8V",
  "key25": "3n31ufAaFZnQQNaHnSBi6s2BWm6VVpytWhK4jc7K8VTesdK4k4chFdWmz8dyVMLTsNJFUMVptThd7FLt6PhrAnHq",
  "key26": "XxLAqVKwnCBCHiZfmpzNRJEiCSw2cb8iXcu9JkgT3WN5R72wcvsU4SU3i4QnipCPW3en7QZgFhRvPTLpVUs9gj6",
  "key27": "2hwi8DiN8SKMJRNDz4whvVsWu1ZiKmaPZvnzPmGudnTNcmMeoJ4zDHXT8xXVYCoCkpSUU2z6vVyPp1JF2qv7kDmM",
  "key28": "3rczDUof8AVqm7MytxFhQyg7j39fymbbK24G4KQYptvgRKunYjK3uP8g5vMkMBwWKLW3Hk2F4Gqdipny29gCd997",
  "key29": "51xgf4bLScyd2Neq1wjCXZ96sxveLp21ArJo83hGsTHqPpNqX9EimMMDiwu59DEGiXmFsUVse64ouAqtfV3Aj9Zc",
  "key30": "5eLk3vEhizSPK3Cwnumpritrtmvvi4vkhQrQVeZkDqhSuMfkyR3EqVBKVkEWCZMxY64vLaFn4q8MGkMJxDfmBW7c",
  "key31": "5FBYhnhP8Ty6AjNcNpWQQcj1jBYxVt5JL4zoPZoxRoHN8BDsfgYKGarceHnZYkaHvxJudvA68AMgfptVessHSHKG",
  "key32": "3w25ybZAhSPTy3xKp25Z3pyH6ynWZBx3RffEB1cdy8LqSXF2jsBjBMqWzVm7HARZ1WNQjcKBsUmyWMnRGAx52e4U",
  "key33": "5uT7ai4bCrEc38qa7YskTkZMBDnLp3Qbsr9YyecQ6LcfCPYUBe81juPb7k4xKVY8aVWJZoz4djc2YeFtNL8GiCPv",
  "key34": "2S5EybUBZHCWQrZcXVSiLeCqDo89tCsSf5uvwLgaMQvZrdpvPzFYL4LtCV3NXiKXa7uwv2wMicogVk651AagC9KG",
  "key35": "58PN7MuG9NGXczBm2JFHNG8kV8hLgrijDm6kCKxhi7tpY6znfqqpXHdPZztNEshaEDcZZkqbz6Y3DGcwpJNyd8Z4",
  "key36": "377Kxst8QHYcJkcYcMiyU4tmzDAb3po75hXVA715QbgeMjsZDooGa58bfxiroY6sd8GAFpvKXtUbPM2PrrTuiTKo",
  "key37": "yb6UzNnQYyLRkorN6tZbRAH3DUeySJ51kq1hBg6JkJwuTPtSw8YQWerLJXLbKUBXkFC1mFBvUNJu37KuixfZKaB",
  "key38": "62MR2cQdhCPnAN8pPEN8bXgXiYMBdUHue92B6oNmDEJq2CzsLsr5DBcMY8MdixvFBPFHZj8HhwYDqas6YBCnGdbq",
  "key39": "2hYrS65kFCdpB3Fu5jXjLAQBLst271YxYFEMPsK5LkrZBf8oPRvicKCPBoJA1RjZNUnrMiNffFS4qLd94S3CLrux",
  "key40": "vRuPdu1P5PorVsd3p3kKLzrdjj86YCEXYNtfmYqXZzxSBz3eq5KhgQax4t7QEYJkwgGMK3bQY4iF9jmwWomNa3J",
  "key41": "VwyCG7A3oqy81aUUq7nhhbfbimwQPJG9WqTsC5NPBR5vNffRyi4hRvYXwvWE6QpWY5KRsUeWx2rCwbVupY7rqGr",
  "key42": "46EomYVEXMKKT4erngVatKbM4kan5hSNQeNdkwHvwpm4Td7pYL3VjjauuRCDcUppEv9HQCeJBRwrt9PW22jjnr2g",
  "key43": "5wHCZuzdBgQH6fJDGpqgxjx8MWQ88zvp4PsLvgKZt3mSX69xTJ31ABjA3LVr2dFNUjjNzk1ziYG2pyeBrDYbeNhy"
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
