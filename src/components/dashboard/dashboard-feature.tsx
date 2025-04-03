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
    "4q9YdxSTG5o5wvBWc5aFFttfvJ5qbQedMFPgm3VhpjGMawbLsSEnYEMcs1JNRbp2Vny1QtJNbcRPnNhsR2fCxeqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uEYK8Po8EaAAcqpzAhFi4acNnuDEeVLYVvps6e8jYGsXwYCz3UuktSLHsZVdS3uTxgKcznRY8wdWN5D3AaeGWGj",
  "key1": "5zEL4jLD433Weeib2mFHsiXkGndqu7pZ69311EfYww84icndSWihUSDsJVqc7S8HWAU424dbDWQJCv3gJzq6TowT",
  "key2": "trjC3rQnY3nsDp6tDZVofTzsCk7g5WiPaQgkQcqMSQXKerXCkhZvw992AdSJ5JCqrVHuCUhACNiURneUQFbcxoq",
  "key3": "41oG4QRET4N9KiQtFGdaNjrL5cpADvXJpABj8xn4gMi6L1jSUupPmaVWRyvNVdo8QWxC1fpnBmLSNXhEZ7rY5mUu",
  "key4": "2QSeYmdQUwvMxRWsD2Mvbac98gEoR3Xw8HSxqQ57sAC4x2mvMSLkQ3rFd4zMisEA6p4K15coLTU5H8dk9h6ec8YW",
  "key5": "5bmEKGSoHVtxtq9oNFMpJGbzmSyatsfjoQWbyRV6MrYru7DWoygZNwrUdP8XFvihn1SpxG5Nj4vr4wFj9A5fc45c",
  "key6": "k669Nd1D3mMhpezAybnmGWB3zzpHVZKiC43SkcBQUgNPFyQM5nwWryV1uX2CoQJxeXMnmsmREsKh3qGG69JdfpE",
  "key7": "4ecZdaJMLEMa72MEAbBcJSaZgyU2v7xMcns8gZ3DXeJL7i8CziBBu7tbTXPihgdtZzAvZ5qHZxEEnsQfvhtLPtBJ",
  "key8": "45XCLAbTXkzu31ruWwyUHM5DcCDAimYQGHXKK1vgaQaK1wBGff2E7b7QVeY5dqABGSd6E7MCh7Ss4AwoSeitGizq",
  "key9": "bTMRk8uoKdqAguPYPtUMSxEMREbDt7Jg15KHSzopUDnFvKCTUCGyEQRZfDSYFo8mvcvJwodRmVB7TydBmH9uSGZ",
  "key10": "4mfNFCKrgaEyQVppVPhxadmXpzGXvHVcGfLS8UaUupa4pQiYNYKwJ7gSdbP6JiqgVXKKi9D7KsYDCYGTm6nKaBAL",
  "key11": "xNRq2Aa1zCEjKoRP5cKVs53i6uDU7KNmtSRCFmFqgDVcPCaXgPnJqzspNgcCkBfbCdsTE1to1hfuj4dRPujbGCs",
  "key12": "5rpCL6wRLqubdJiqgjErVsUnTQLFUpw33rtgGWteBLiHoms3VBTcfwDUB9vjs4VWgjkqb4N4YhBLk3LzueAJ23gz",
  "key13": "31e6Mj1XRV9EF5NwQobECaH7GhQ6oexAcTfBBhXjaFM83dHW7XFXhQq8bkJbRTkRk1YFBpHW1Y9CzeMZN5y4CKvQ",
  "key14": "3B596w6bwn67DBSVhTsk6VCHNBQvUdQVim3dRLbLgEPMuA6FpYRZZrAeNNitLS2aQBR1pWHnKjbKGptTy6LVVZDV",
  "key15": "5QuP5puW2DMNZ9dt7Djes1jpsJD1gYyY6YgLHL23t3gDk8qSqLWtzdSErV8beJtvovBQVdEhFT5ZdQ6xJSckdCVN",
  "key16": "5gBMqyuBb1os6HF2tuUSrXRiuTYFMsWzdznNcdMTWbLvUXgtpdEw3BxbZ79bi4SG7ZSycGDERWMjPv76cfgHLo3v",
  "key17": "5iKQsjeRCCoHe7psUpWBdH8kb753788r9dVDmBdSvcaTuCFyrJvFnFn4JAfqpm86sSuouhcXPBUzVBHA5pG5s56y",
  "key18": "iKBkZnwmAfFdDP5Bzi2Xq25W5apAkunKCLn61WzPrDAq5pTozv8KgSeU3ZkqcX9maWAyG9tXJ5uccw7o6YBbR6o",
  "key19": "5BCz1dHnm22dAprjUMDMNFFyscaYmLNEk6CS6mokhxQjsFNDtRLnqNcpzf6Dm4DBfx9SKWn3QznLLBpkBQP6EmUb",
  "key20": "CF6d5rLdoHvdFb6hSaeDhyMCWGZMQKpCKeczs7ucKwCx4ceX3MSSpeqr1KHwKtbQikgLktwu1k2FD4Ef52Eih4B",
  "key21": "ehrWxFdJTX9YNQugBq5LsXCxEbkpL1r7A9nRFJLDinUt1nzbShM5JdJefDjW1ob4zk6Q6wZA2V9XrzFkm6qiMRH",
  "key22": "4bcrfTZcsCxwdhqLmcpK5NMyoMSmAWo3udML3UqWdqxtsDH7ShKUWxBNPvxbvV3Hz1693yN9r9wmsSmQcgoPcimS",
  "key23": "3jkAxq6eccvqnXZKfWTRacibX9dE2aPmX2caCCS8Y5yX3JrwPCuVLJcLvJyTPm5SUX5cHbJ1Qq62EoFe49TsCVQq",
  "key24": "djF6DtwZ9YYawHYhXgwGytQD96Dm3KwJMiMWomLqUUNLYC9S9XbqXzRBYQuMXrA9aqsXXGubCqHhgH4hNwLHwN2",
  "key25": "2Nxg5rRYEf2tyL1vcJ26wMBZ8jdjMC9PcyUkZ15QvTcEso1WYYeVkHXujG2hoJqz8PWtRmonnnLAfkgyWMXGdJNm",
  "key26": "5ytvnGyeSEHs2NZsXXaey576d42HD8zNwuiVBZ7jaavFLQrmhKemdSGHbqHbkNLaYYRXhCm4C2U89m54WsVUU7Ha",
  "key27": "MxcFcTnCG7zUsFavkXfSeB2LmHUcwDZJey7AdK6F2Pz9RnSMrSRBqaSCjzF4MjwNL4fyTgkuDRuGLosVivdCXrT",
  "key28": "3UxWGwVHdTMZ8Fgr5hZHCHf3tRGT9FmfZbacKaGkEV4FfxoHtU32dc3AVe4f3MU74M3utgVy85pHtqJTRrHeDT6c",
  "key29": "611YeeJnFCsVFANgFGX6z1vwN2ox96ifLaMdHTYRYdKV7Gjh9fPboiRzwLTFpW7WZnY79WSmBxxNfRDPK4P3kN48",
  "key30": "HN6U3q4JQmbymimXuAvr4u9padBoZqq72jQrtpwsQizPrCqhNE4QFG2FwjGgPYweFYTt84PHmdAfyQ15jXdfgBy",
  "key31": "5pMsCTRV5hU9WHbeQJsAUTaRZmNeuk6fy6vV8X15aQbMSDGvHCqvphqUCGtp6o7t19C8JyCjk9Ha6NhVFLQwPrpK"
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
