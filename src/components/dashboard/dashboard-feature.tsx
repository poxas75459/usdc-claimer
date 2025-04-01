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
    "5wERehBEnZbXNaNt9brNiiFhtiq2DrM4bkdRYWBjWbXUftfRyJfqJGhfoFK99kuwPwMbzFFUMXbQZURRDiwcVxjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S3FKGwbwSqY9j5KT1VHouttQqPwwQsX27V3tFT6LGXZjWLwBA3UmZPwjrwf4Mz5o28RhuS6VxykNMzGDQyr7cuJ",
  "key1": "29z7pnoosn47sdwbFxBCeLWX9RwgBWaEeHV6EZSyTsDb6YHidJU5oeAxFHQVH5WqeqG71QJns5FVY8aqeCencAPE",
  "key2": "519ruAqemNhPKPvejJz7uG58dB49TZATDihgyt9oEMBJqwVR9RcWuFA8UW6XUk4q7PPNrAMkeNzuPRXNs6dmZ8Vf",
  "key3": "5BeX1cZaYVfuffATb3MWrPdAtc7nFe8LYPdmLrk8QVGKLMHGeCQSmxp68Umq2zSoqhg3nLhrB8o9ofcKau2iA3wQ",
  "key4": "2uAWAfLD4d5yQs6vo9SvDXZNcTwjWYDKUH8uHEdvLnktip5sruanbLCnfFRSPrJAmXLRdpkvjQbhUc9wHhNsS9rw",
  "key5": "2esxifyejhXA4i85SkbnJHdS3AEFFZERDLNHxSYHZq1jLQJ9qSPdujtmtVSgh5qajQNtYAgCzUxwLt3m6Bj6WFkH",
  "key6": "24v4f8QbDe2aRhgPicL3SPqCrNtMUzhvZqfypMF2TNhSWp7yiChVphyv9qjKToaDn7Axhjhmni6RVbHs1fp7d53k",
  "key7": "2MQiTHCPsg2k4GX68aj5oPudEEJqB8KyYvXr5UR9TcJZtrxTXuFP1tJPfdrnmQQBK3a6eSZXtht7oPmfvT43Q1qM",
  "key8": "t3ub6wWo7VHuGTrYtkVZiqynqRgs3BK2jRRfV3ufkmjXqZGEN4t14VUVGE5up1bso4ampU3H2GyNy7f4drK1VRv",
  "key9": "3JQqNW1ZZzNTyBRnE1VLe1Q4ZDKFPbYLcX2DLmY645p4nP8BAtWpJ3QzkY5KiLMB7KtJH1QeE6RFXR6hL8dCE2EF",
  "key10": "54v21v4khc8kxuUJn49Ba1CLzn63EQBGNb3ovcC5jeyHNHsEaiLwWBqAYYEEA8uHHNvMFst9BanomrBuMdRGEdUk",
  "key11": "4iLpKeuVVSBY1KwZfEzhonrWAhD53naUKhFbqbxm4y5p39EUeA8HQoC5aHqgvkZhFrxKozSDcJfo4fWgByGMZpPy",
  "key12": "3E8BDeAqnXhHwPMDmYhmaR9UD3Vft8y8SQxWv2tqeyGkCQgGYsj9pPzAxy7TEYBP8uvgsSDUZjpTyiousBEmZ5p9",
  "key13": "3G8KjxVdasTKmLivpcC4amtMnMf67RuBVQzjLjic7UTx89HnZgvbRtm3nRAiLmumErV6h9wehwWUnGbydhg98fov",
  "key14": "57RgRZBXNcFaCMUFzth4jto71WuhFRqcLi8Nfbmv1EyLdP1h5iCuZvZbw1FnfUAu5R8SkWh6MbYgwUuzt2AUqxnR",
  "key15": "2H1AiWjTQcimGo43CZ2XVhfGCssvFeBeJjKMEoq7sZVhmVbTmotGeVtcjMZ155K4ct7e8PFLcYDNFiRw9ss2Bu45",
  "key16": "61FCGUapHF3zLRrCvEyPKTGrXjABT6nBct1XmeWmwicqbVwXEAt4VswYqHVb96E6BWN1GyGJnyBu3cWZjnr1h8SP",
  "key17": "2LJ4NBZP4MJDSa33NPx5EWiUnSKQx7yAZcXu4N9F9kn61ANDY3xVtXeuyHnuRHkgdF9y3K3ec5QPbwdjqee3qu2i",
  "key18": "2dTdCsFA8zmSF4VNcFHc6yDENvtZ6edTZH8RbbH2BHvNA3HekhYxU7pBUQC7B5gUWgTSZqzoU2WyvDFXvgxogHyF",
  "key19": "5fRdDjnM8sCPhXWL7FhRcma8y6VZPSrFVY1RNVon6LLNKYaHxMeDcf2c52PYAt1LLtT5ED5cbp5EuH5M8BkPFhMR",
  "key20": "3fSJ8cvc9gawmiXwH6ijCYpAfsGvutpZFdjW9jRveBxr1TF7s9EkLppqamRfq1Tjr6QBRqkKbowWS2d6hw5bAybd",
  "key21": "32hjRmM9ZcycRrY4pCHGJNBLvcCVxGhd4TTCbrQrZkophtXRntZD7sA1EFcjqaHniGUWCojiEXPd34Yj3fZVV8Fq",
  "key22": "2PzbSagiNncoi6FN4b5riCu3yY7wFKV7eCsZ7QPY6knY4uTeaAToAT6ctafPUmwzWZWx6Nu4zYgvxPa8KwaTx4VS",
  "key23": "5u7bEN7ePasRzy5yxmmo5J4SUEP5cCPLwbnnW89BhDS8pvDqrjo2vzumpfySCYceHPHWDdFbViPPJKngjSrsCUL3",
  "key24": "5MGKwESmjXsYjiHcjda8QAT24dMWz8fYWXavXapiuraPBNSc8TiE6CiVczTmsxQhGRQtukzvXibU9Jz6jkn1wYLE",
  "key25": "tg5iR99KZT5GQmDxcCV8H282RX9WVZr9mXg1C7sCVyaPACURtaepYJAUCzwncbuLJVqGqamFqBYrZAABSYewmob",
  "key26": "53AZPR6YjEEu2NkLK6VxDiGNBEvuHTFV2uf9fdbhmSxdvgpPMejM1gJWFiCWWaHGpokxpNYeXBV28Pm1ZuwvXXXx",
  "key27": "2qp275RWcoTCe2cVsvPyWXYfXWdrdMPryde169xTtVYsRS2jaJ1du9xDNqxvGc6kvxuMtSnTSY1c4fyrdeo7ZBY2",
  "key28": "5CPHuUY2RwYtHf35yo4XCLztSDi6Y4ENJdy5YWzsSKYRHmEbZQgkkoKgWi9yZJM1q7aiDEFP2QLzgsypsHMfuCfm",
  "key29": "y6CSNTQFkDu74bns5snZGDoBkkiDNKrMGiLgeksAcS2jvyJ1ti3JNo74YSSDrLXH5UqP6uwmgntDEcWvzfyHP6a",
  "key30": "3hzMy1YYPKrASaRcxtZ3xHSuU5SFuoDGMSC9GuPPoYak37LrANTX2ncryBk8qcRXaQjYXZGYDcKXKMpfU77nSoTW",
  "key31": "54HXHYuFSxrhtQbmiUybmAW6td5oinRftG7L8SetZtZrP9MsUvWMs5ZevyTW2KZToKo9VWQbQXYJexbiTRUnLrD4",
  "key32": "HVM3mkPxHvRu3UAjPAK2Lu1Na7GMnmKtWsp8u8dZAWs8vYrqZWhejrerMKUEzzUp1tc71H2GiKNdUCr2krqckd9"
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
