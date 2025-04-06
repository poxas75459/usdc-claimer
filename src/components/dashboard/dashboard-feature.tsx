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
    "5YVYxXPEU4ou6akhVrokLybEuhWTsQj5dUeKck4MeqGmnze3C4JKWM11DdmSnj4RwAsiJhhCj2S1K2rCWyi6GYSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RDs5KyQgJpS2rYsdUMk86EpprgqRzGrwf3tWF7KWy5vV3fAfSvUcBgdGYntRPFUK8g9uQ7qTFw3MX44UdDg7wgw",
  "key1": "4sbG53tipN8hPwEF4qU4FhMsQ7FGnNsaXbzseobXg17W9rKF89v6qmvmkjVr6dWzTj1EBNBk3exEWpQxsk8ZJBy7",
  "key2": "ZCkjMxWwPRVhXMveyaFnkR6VouPdefD3cg74RcGhHpDLR3tE3Pgpgc7yXwg63cak1btiVTbnDPgqSjZmqBDf2cf",
  "key3": "2xk9MRCXgUceqsi4Z4gsLUSGs4GQ7kPvVLctvi9NbFWb93C1zo5Eekwy2PkeBhv8GBMm8wwDQr8QkDEQaM7VaAK8",
  "key4": "3bxnASxp8kvtA6d2CZHVC3XtXSrTwskocAwnaFRRJo77SrES9Fv8ChESK6vwy8r4jBBBFsu3LSsgHd5Phmr6huj8",
  "key5": "5q5LDvdhchDxXBkSXAsKYgjWqZDn7PkiYBeNFHQsWiE4NfAz7QV5o8MAgxDZUBsv2PxJkwZAX63jaTxN7AdpQ2Bk",
  "key6": "2p1j1ismW9fhfUrdG1ZQXsSn3yXywARWXWJMyd2KsQ4TCUrCjMmBk4cP4wGo8Y9xhHj8YPBwjQ6TKUY8bNhtAK11",
  "key7": "47AjnfDvmVSqC8Spd9whMobGyttrBhzVFpt2iAvkax6E16ehWLntaTCbypHQeVik6cZqQPCokcWqM4MAg3awzu2k",
  "key8": "3EvTKe5yKVZoTLGh858pkTX6V5AsJfWkqiaJn7jQSaY9CuvzekU4oJSAj3MWnwTGe65yWxb11QCaBWHymarz8NBU",
  "key9": "2RJafnpaq4aaE6ViUSARPBY8MNvLtjJkuQk84BCdPmSGniph8iagKmzwHDFBLcbKaLVpbJK393DCfFu4gNQRkeqn",
  "key10": "AKjPeQuPFoExq65RAyaov8KjB5EMHXrbTMZhv292U6e6V5DbefRrYRZRbVswP9LCVTihvxpwaBX7zi4EvbVxVc2",
  "key11": "34RCLdACAXW61ycUGtXaRagoYT89WRr7YSVNjz3jfqrC3NejMiVtyzXDeFP1X4rioksMqYzGL4HCZsfqhioKgAEj",
  "key12": "32VZHCLJjUa2zQxNzeT8K6yZp87Yb1hiBohvMne8ZnTfHK3o9U7f6Z5WQ7pb9ttMPcSh7yHLPQeMQ66JkDtdXxNg",
  "key13": "Bwf8Ms5tQwCQwxSjSS3H8wFowtLAkbHRizh1E5b8o5ypWwP4DfkR3VANVek1fFAPfxvFBe8ujCXWsb2c6f9u7mX",
  "key14": "3WPddJJHvR47JavBu99UtNs1WJGmWM4PBP5KmZabm3zKDCsEV2YMb8JgC27BqU1REuHkvMikEXadQ6PjBZt6Cok7",
  "key15": "rwFmmXSgn7MSLWje4sZcdzhDAWYA3wK84vgMPdBLivYQ7hfW2Bc2XUMBDd5SqS79hKrZ3x926ns334C22MJhHTU",
  "key16": "74nGCVK8q8ujEz1pZdYkYQJXeVvUDcBK6UL8rUMn3nvjrqj8ip1AALt5cYpyrKfFCHAGiKuHc37ffwLG9rfsbyp",
  "key17": "5E7AhjUq7geyMEe2ePDGZS13DMAy6fMMy2bjmGW6mzPJ3evBnHPGiQKVPmpsGGmqoWg3YxaJfmZ6arQtrGYfcTAM",
  "key18": "3Wsak4hBndQYrD1wQYreLhuwqgpMuE91WZyFEtoX9XKtpLFEujD7HvEk5pHwTKBCh75Lg3CC9wRB7SboKk8YjhKh",
  "key19": "4K5SLWxgdRn38C8WJBUqvdP7EK2mgK42U7J8BiJPBr6cL2SAStxdAc62WmKmg8Lzum2chA1uvvDqdS8BuNpW2cZq",
  "key20": "4apYCgxCyS43LcTqYDuhuJWwWWiazFwqsCDipcuXAUtmCRrXjThcqfL6ENXZX56jqFVWtzR2i1yJ5BDGFTB3a1DS",
  "key21": "5MwbsyVgdXQ9CmU2sgbpoTxQADMr4T6tAX3CRjpLBqkXriYzEKPC2ppG4MZ5pEAkbo4yvUKqazdGoEcMfSqUnQhr",
  "key22": "3VjFfhhg9AUAnzeeq3jXxFRJ5ebbTiHT7zZJzh8pNwNBn6DEudKv52pp9Bpb6Z49wiNKRQKyrHDVp6LZePJXz3nH",
  "key23": "2cMhiPrjy6rMdbzHoZASFrGRaVrEPE5W16Bga6rA54ZnsaVN45dvrsPrfyybpCr6p1kh7drtpyPe1dWVDDzaHKLT",
  "key24": "3K5PBRRRJtW1PPpHyq2uP2bN1fDyFS518vqsNusaBnNKFx9bDRgcY3QUjw9edgDCZLEDXcXFj3qdKPuayt9ce2iH",
  "key25": "4syrU84RpSJjsRqRb7uuzkJKs77wpMexmr1FNVbWVM7PdWn6k9k3Q17pGxMdGYJDxiYAMjJVKCCQYSYb7yASomjy",
  "key26": "iz9BzoPp9NhwDB2tRHScuQ1pQG39YkesknJ4Bq3ShVoMufySKHKUrBoqpeCHZzyFaEQLfJsF1kZqnxcZoHbD2Xg",
  "key27": "4NXrLAyqSSfq5kXsE5goBU4X3hT8nQ72dQWDDjDKuopWVUmLbqhQCc7GsiuDdYTf3Tn4AeQtvV92Wkjpb8PT55YD",
  "key28": "4B3TumPP1Z6DTXsL2DsD4tJqTwDMGh8szntUcdBKWWKf3BrsQYhkmHT6G7RbP9qMXDG19Hpip4dYMZsJWMExoNh5",
  "key29": "ga5HY46WBvjjoLHjntZojefqGDTWWDtiUCTR1h9cixnWMZLSuHRUxpsDZCPgh9j4cwAuaXoXyG5JDmwb6ii6fko",
  "key30": "2aaXiAe7Vk7Gf1sZzUTqUMfiWpZysuNbNjR3eJi2wcsCmzmmXRxKnkWKev4ygvYRga1iRtSSd4qkVHKc5NKKGfZv",
  "key31": "JhaViqf8tjZzeaTgAn8yh6HNZJDMUn57xgPR7WiLwt45CwDg77qZJ3pxxeRTaBEigJNP2EFVPxjEMPE6erX2tCj",
  "key32": "2bj4FzRs6iDj25kq3hpmhJkwKB1qDhn4LnvJsP3T8KkWWQQic5vyPEpDY8FQ4f6gGShvEL2i4W5XNxhKcomsLKKb",
  "key33": "5xKysajEDREL1pSE4VtV5YWVj7XNiTj9MJtkP6xySbzKoXCACMBk1t8E9zk19XpyqvKoc8R2nxEpNXommYAx82Qe",
  "key34": "2HSMdDuePVMzzsncHvaHTwkzM6mNrEUsFPDvWbELwCcwDXhBE1vQtbwefMUtJfCySCbc7puyNGh4rfFPkV4xnsXa"
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
