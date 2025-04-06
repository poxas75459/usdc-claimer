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
    "63bfPP2cPjAE8XCMhQqjsChgKRMgHZDJGWmt6RsnNNrn61jSwLqzPwPyg5HH3furyXmwSSJu4jj2hrGNrPUvdsh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4foPXwFKNTg3UTsnU1hU6Aw9amkn31sCvp4VTbbHbbffnAKJCBRZtQz2jHZjypA4QJrCHve7rexaer9P5jpbT3CW",
  "key1": "4vJFpesJJHpRrw2uhnEQ563P8X5CQkw2kzy9mvvcQRMupjSxProARwJxVxA4rCdfL7mn4AgPiQRcwAKG2xWX5xy",
  "key2": "W6vhvMfAJPsMGXMvBUnPenA3CpRgJqnxNwtvWpTEuAtL34mzP6CUvj8CaVe3QeN4AEfkcPkCtXgxEm47TZmgoX1",
  "key3": "3SymqLKcLpj4afJWJspUgct37hQtYU7fG6DMNBYHanp9giVfZYN5uhfo2kWEcoVHAZGhfcfLgZuwdiH2FZaToqjR",
  "key4": "5nKpc55GSHZbHNKdnty1Nqu2CoFdEy756cUqN3Y3NTMpze6SkNSEDVdR78rBNpYLuHkT9fHVj3mbrYWXSXq1btcL",
  "key5": "4K45oTf5wYrcRgrTXSRnThs2V7WzDSgqRnbgKK5vfitir4FNM42gyepJj75xNMmqkdbn2px1m9MUevBbmNG3zDkY",
  "key6": "aux7KQB8UEMiFs3csUi2t4p8KbvUkXuYDpjaB2UCetCEMCg14vDmsKScsBvcxFJpGDAhF1K8e1ubRwFhNKcUuiM",
  "key7": "2U7UqJSKKhqJrFUsjoqLmakBAojSa2hYpfAAfETnMBU2hk2CnngiDrTmjR1B11VRpP3iw1uBM1JJ5zA8TjXGyZ63",
  "key8": "R24UjcY9oHb7JKsMLcdGZPVfLnjeKVNRdG7xEy6fmr85oX5sSQrYC6YJPEJQjKGLEhoQ6GSTK2g4ifqLtKD5UWW",
  "key9": "4eaq55PkKNTNy7vwLKJEXGj47fFcF4dedVUzigAcYyhDaekVUxTkXKvRCYGfZ5LKf887xPaghwNqEteMdGU9bBx9",
  "key10": "zgPnYnHMjNdmj77mvC5jVnQiLzQTDSoE6iSZAbR3e7EZziQ8VPXXumiNCPYPNNDqn9eC3Ya2wKETxAF8ErQywC7",
  "key11": "4CGu7PJJAHYiiqhFe8GEywiMaYQz34km8dCCfwPvMEME34do9EsyQzbovi5GBdWuzPQjRYFG3AHcwi1C2czABRYf",
  "key12": "355xAjrMcN5d4wTud87pDi4R9HTKCudQe5ZDutsNmnhNa8BhKXdpVbt9oK91gkRV2KX2PwZkyQ7wvEkGoVamvoJb",
  "key13": "4GcjQ6jrs6SFku2kvypHWq6XfW1wsJyNMKByNjVZVoxqyQKUMB6PCwdLvJx6zKNo8atxxJaEP8dzoHKmM3Aatdd3",
  "key14": "3JooJAh4HSL2gdcK42oVqW2PFaksbGBTVnFWNEmopAdXMqTfo1Kkj7piZDy51xaE6XoNbx1QkQyhSmXs5mrrHsXM",
  "key15": "xsRSN2HEB2ZiqHe6rTDx1bPvzePx99ZWM2Eu2X6rbCbshGuGeJDj43aKkK8R7iHroyNfwfhDUW1TBRDzguFeAkr",
  "key16": "5wL1Bvkvie1MQwFqidjC99T71H36uja6Zdy3k3K1Q5iqhwvRWPDcK83FV9NtrymnU8TS3cfxAbsTPkr2Fj6yoRwJ",
  "key17": "3bfhNQeGYqtTMaQb8bvFvroBJNj8TWA6hMQqvP1SXphfAME7E67gL8WVPGXN7hiQmt67WVGHfbgUg6QUtMK7Zfx",
  "key18": "5XXvD2fNSaHUqt5GK2i6TijvpkZp1zPg4yogKYf4nKFtUGm1pLym8xv2cq8LFy1NTgj6kyG2MFeW871inHVshvCU",
  "key19": "4idZ8b84yrx3nCVNqrPqxGMoHLgA3Bzy7NGVRBEYiWdsoA4Hjrrk3TfTR6r796tJManwEdC3jVTaZUqjSMFY5qWQ",
  "key20": "62usiVZ7N16Uj1z5TVg25btRDD3wZJcwXV8EciNqgrNbwGpbafRczTsx948uE7Yri8gbWvj4HTL8CvBdQhZhESpo",
  "key21": "2A8X2E19zZHmJWzFgLPzUgTUNTpdHnK26iYCWB7RPCS41tQQBicvYXw8Rve1gXabdBJ5pq4i81hSuCWMua8Vu7ta",
  "key22": "WHJ178udc3sLHPUANgLqpHxB8hmpottyE4qtgkZ21odkRdN1mVnHwC3u3UptH3cir7MDm6E4HnwTyun4XhGfETq",
  "key23": "47EKyEtvCvCT7a4YhkVMd4pZj1wXgWXxM9gmv9FP3tMnpcg4zQjK1Uj5ADMHs6tVoDp5LZN2iVc5ivMTQpKHpTVT",
  "key24": "2CQjnS7RcVt2pVDPCq4gcyrJjVSyk7uy7YSakHJrJegobHpKJUyVmwqpSFRSoE4SKE2DgEkkkUx6cHg6sa1819Eq",
  "key25": "3LitUbopZqgewxgnovAiwQRsfyBndcu9xQw7KfJcU2daseHnKVchfMmjyfyCSJLddaqGPWqit7tDEh8W21vTFBfU",
  "key26": "3LtGmPemCrY5gXmqJJWik4A7L9z7oozJG4NHgVy5jU7xVSviUA8z6H38iE5hmtMcYnGE9M1gSVHAuyWB93qLyrHm",
  "key27": "cRShDuNkgom7iXHMDFQ41yTyKfBKvHrM2BDqpmHQpQGto9sWx8DmB6phecysQEJJBLhfSxAWued3gFQHM8hH4A2",
  "key28": "3d3PtxmfpnM4YhiQdKTzoBkMTVv62nUo7PtdGKLZeWkJJCcJDakP9pR7aB9gAzaNqc6eZETbQdXsNTyFeX33egcP",
  "key29": "3fcWBSMQpNHzig5EhEf6h7Qf8xWrvQHpmCdaWbaqiFzJC4VhdgY9NaHCpSpUsoZxQ3QxHHCr89oVzQ9ytEqtCaKv",
  "key30": "5wQEGL6mbdgCyRomxyDQ6BTJ8FfpeLbJuLTx35MZcP7a92aztuv7wpjUEwZXFheyHh4Ym5NPAeXsqxcSvQ3uDDqZ",
  "key31": "2hY15Ho6h5uPFY8RwJeeRnrq934kZa1vFM22EQUdXpoxDyTAEVmqtV4CSW8CAWuHAQD6ZGWoohmTvV35ykgFiYuu",
  "key32": "3Ev5hKy4t9UP4QYRjG6mwdazRzdviqx6aWG5RWr74e6s1gvt6JHTDM6GR5HKtv7pr9uyLqYv3eEVhRp9a6m8pLBv",
  "key33": "2K1qsBfBcDa2q2cmMGAkhmD2zFT9oURHnRFDhuiGvGZnUXhyNWNcoNCUAHKf8QqQdy4jMmBEnmSZNUUDBAMLV5dQ",
  "key34": "5TP1LGfXbLYEosd2ykK5G2PrxSziMMMckWLoDovareqUfq69vGKus8WECnQbRpV472uPCV44JgtQagyGD71veshF",
  "key35": "4ABivPLufYM3g99zPZP2mqFfGndb95EUEnyMZwQkRdbNu56Pu4GRYL8GfZnHTqFfKanFRSpJ3JoXTVYD9c2D37oN"
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
