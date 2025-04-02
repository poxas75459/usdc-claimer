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
    "2bZSJURCtWi3F5z83PRzFEM3itis9KKaaU6MAivrGNNZQc1ko2aLooaiw4nAN5ZydhTqQMU6QMYkdJbekpfCuaC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4285WQ2T5SKHSr2By8nArtiqsA32p6kTc9XE7J8a5y2s7qXrHyj8YqBDXvZrSQ6qvB5FGyjut5dcYhVQ43XcbGqM",
  "key1": "3Pv7F4dwBZZVT9WbZ6z3dnqgvwep6G9vUXa2TPjHqqKkUmnhuqGR6aS12PcYfTaGsBdzCMf7Dpm5F2abSHyyP4X8",
  "key2": "4XH1vbymkZWSUi5LUjUSryph62CNXjcf7Hyxico4gnUmS4XnLmzRdzFh6kX9n2mzXBU3GJo5gwemaw5aXYALyYpV",
  "key3": "3pMgsybWnL7vAJP4xzepRUZK6LWiATEsJeF4tH2M2ErwWuRRKNpP8nJrJgjsxm2ytfyNxE3JMxzeywi1QPCFsRBz",
  "key4": "4Z6q9ZKHprvis9wiiDsMNvFDo12fXhttURzux3JJpdDkN2xK74hTaPwGY8DaTNoc9dN5BLKqdU6CAYn2LE31Y7M3",
  "key5": "3W3TdVnejmoef8vRUJXQbVHPUM73jjcc4S3quXrDbNXnfv6M1ZwCJJDaqZCoTGDoQDjnKCYw7ieh6jHt8VHHD4Gy",
  "key6": "36NiMWXkmPG9kHqdUapFS8XQiojjnmNMK35K7mzjcSf4RXrwVMSzVCevyCan8XmKsQeLdWbkFgrQSyBXgnSKPJqe",
  "key7": "2rMjp4t4YzcD3BJApxUzcLpxErbe2WTRCNtQ1x1weZXyXkhxJkFDvRwtDr4nN74vDBuyHCoRPYUHQPL3rNq61sqK",
  "key8": "4Be7pSXTj18hLmyspWTsFXCLr4fNK5e2vaFcCqekYsHHorubT9BcoJZvUJyQ1xuf5E5uoDRpiaSuBLs4ooKZDxZ3",
  "key9": "3GtwKAW9srcQc3RQLhUn148tjZDEqN37zMhakMLqNs3MG7HKAe8adZQ4tNxeV8t8UZKFWc1HuWDeJaGfLQroT5Y1",
  "key10": "3a5t7X1myJ5Leajtytxr9iTuyPPrK1mvwWPqoSiDeaNnXQeQwzzd7GYtbHUUNSFgy5kZowyeiN3U6r5quQZwRopK",
  "key11": "56i2hfmAYHzKTkFkoVDavERHuPvU7yLiJCnka9Fi8kUtrG3cFC3hFZBVvMb3K187t3yVZ3S5r3LxJype993gm5aX",
  "key12": "2ynoEgqmQbRhLsLCJE1aLwUokf957JuQstCayCYzXBLJqxxSS7cRsnKNVgGFmHXUZcLBFZakBErkN2EpoKdn8Ba4",
  "key13": "2DYUVipGPgQnZMvuAt7ksJUQXhSJbt3wcHx2wRZAjq94uLeViWWCD6NZkgeGgvb8jDcmWSz15gkTcmphnBZ8myf6",
  "key14": "JKw145axmLBvLEmuAzJ3QqWHazR7XxJwhV6Zvc98hf8exuGGfdKdTZjKfqRizk33s8fB85g9XZ9NPzkQgSV7zhv",
  "key15": "4LMfsuG57pjMYFfT1a6PDe3io8waAm6F3QFXUaC895kJ5pCQn6S9xEPqS16tutcHe3KZ86cdsyv38ZyLVAFf7AyC",
  "key16": "3L27j5kx6uogcSb7ofh6To9wxZy1cB5WykFLvSxxfZfqT5U4YKQbLoAaLDhYnK3CNCuuVCdRwmr6hSzJ98FMxxv9",
  "key17": "2fLTsGWnenmmmszD4fYec4nX8gYqjLEbsXDUsohCdqTkBnUdJ5snW6aNHbkReVqwg1xGLcYL4vs9dqWwVz7Y3eGU",
  "key18": "99JuC2CsLaaDTXuDnA2s2vmB4yqtmSHXtEmzgceZJ5G7Kt3jvMHaWCNB7euqwWhvoNVCuJFNPhRSAmcoa6aeZcf",
  "key19": "f7yNdAP1SrkJurz7am5E8RfHERAB4jYxbSFBAfMEfCrvnYFGNxBBENPQZ22t5dw5A6rzNXZGDhWeB4rY98KAZBA",
  "key20": "5mejq73gPujHhHNBUd3yLDYHcbuToEba5aLL3RsMLD3aRkVF4XBQaMEaViyBGaD7CDyH22FoF9wGsniV5Xtiym8n",
  "key21": "3q9PYTEGRaKxt4HjNEWtUTXcTFL6sZ2vTCk4Nmb7eQNRuWafM7duNF7gDELRC3F7CNrdqsi4PYF9BXdKyw2Bs8S",
  "key22": "3GaHytaYJ7xmdYjbBPVaPXo6yWqWkdUJTxLpjTR7FK1ErvwrC6Bu2xzsz2Z61gfSw4eALFzvW5sXEvbNAh9PzVPs",
  "key23": "2TWbgbrsnD4X1mzt4u1xNvDzm22McMfW3nYrMU2oX1aPZMizq53z2V5gQEzsNvuokz6RungV3AtVTY1tp8fCdhDA",
  "key24": "48BpttL6P1AgMiMeYEtxWvzShFMNMvDhJHP9kbWjrG2UoTRNYAcjij2cZwsYhvfWBTXmUUFsfRBNZ7JaUXhZMiqQ",
  "key25": "55X6n3RiKRW6E7pxC5uK4FwhvjX7CJswLaMEa5CdaLXZ9A1zoCnH5BSRzLGH4HF2Xg1jbbFdVjJS956RNS8MPyjP",
  "key26": "3o1Nk3QgKuJVQVzjkBQGNDM1xrn5fKnM1sVAS3pgqa5iLNP7x1Tc2zV12ML1gQCFJPuNTAhTkPoSaZRBCGR7VJh2",
  "key27": "3qFRmcEhHoFuUW4BNpwUCUPVpxQVo5quU15bfcvC3K5QB3aRBLGMpPrZevBMKmYVaijFv6NC2NX5dv2LE4HgeU7r",
  "key28": "5chxfM8fiFMnvbLY9X29GUrFeVeXZfrkGTSD7tvWCu72hkJhmcJLQtotaPMM7Af7XRAEPK2Fb5uVLs5zzrHTBPd1",
  "key29": "2GWcgwqYU45e2ZySVq27oQsUEMW5yRMNGjdNr8a4Jk8ortvZzzd4JTNCpXfHdQPBT9P1aNnYUr7wwaVtLE4uR1im",
  "key30": "2U1C57zdEEYthTKYHL5LKTEgEecAykL2xUrXB7cg7SY38V5JBb3w4xzWYfkky91fcBr4Z9ac5rpVNSGq5SmgQXAa",
  "key31": "nFC9W61w6wjtoTbvFhHFRKvKx55LpQndCTvULwUgmnLk3gRfyknguNmvtcTzoA3PfRuDoYQzGeEHEJx6erJ9JgK",
  "key32": "24ziPHGzhb2LuA91WoCu5oK6JqbyrJqQsttyYJEpexNmHy61QcJeZFoeSh3ZYCAcynwKo2dyD5qDW51nprerbgBH",
  "key33": "637cywvFDRUUz5yyahnLuXHCQ8VDPvWMvvh9wNVmQJMZFN6NvF4aVmSj1chxAPKLLW46e5kuDKAuiweamFwtkRW6",
  "key34": "4n3mPMYZUiHkZ8eAKuUhS5hkBkrj7eCzCpJqMom3E9KnBe6WP4pYrfhVnZw5r1B6Uc8PCKroXc4HjoKCP7tEaVji",
  "key35": "2h91uLdq8SgaXaZeXzMtTovtfEn4MUgFeaimaNDFqYc11VSh34t4Mbiu5DsE7TSogoKr7xV9H7yPPrUWFJXJAKb",
  "key36": "5uJfk5pa2812hsFWvWabxrnDs4kTyNP74ttvWFZEkewfRoGmpyGXbDM2zDcZCezfLn98fqbS1Mrge8e2AzTpbB6J",
  "key37": "5Td8d5pizYtm2oUuLaba1SH2kZq4Kp86FtGL3nxHkkStBUUEveg7TbqD85u8Yd71CCbzfGxm3oHb7LtZAJKpohTJ",
  "key38": "4nUa52cRGhJkKmfk3XQdfAwfGpmwGbTweZLdUz1ub8TMEHxfnaeRJ5TvMhnf9EwEd3FnDFrkZTxWU2qpZUrhB7sP",
  "key39": "548cQ7kHFP9qW8eXSvPDM1Lg1dReA2ohrwFunSUmBN88GnbzoKELXhfxtvYMFnvgLanV67FFZog3xnAstP7YFgXS",
  "key40": "3o6eCJZhYoRHMUi1XkKSfuqXor8fsJ6Up6DMy1V6UsDxfnVw6FLX2XjHyHHpdDMvWeL9FYZwBurJj4jbVYc2qppE",
  "key41": "2ehPkg9ZzYXBJvruGs6ixGEckCWCb9dVWUb7CmBqvhnDTVaKYESjcjFGTAqJLttZJ7UUW6u6GNFKwNQkQfS5NsQX",
  "key42": "5jWUoqFcr749DVYPDYMJMfTcLQ2DZwqaB2iv8Qxx4P4wq1ZAqd3nDvXQxbCaKC8uLoLSfpsQ3iDAwZGXTmqrY3QT",
  "key43": "2zh3UvxWWheSqyWio187sB689JwKpNXcy25UgTgo98JF82baSHjp5MRzAT1stp3t9zCPPsmEGn94jwJ3jeTvfbP8",
  "key44": "42kGJK2ynSd2UVyh7fRsVxkw3ypsXvNAftyngx5V7qQLRMZPbTo6u5Df1X5iPLqcPuJL3huW6HXyiwhqxn3x2JAb"
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
