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
    "4Cp5yMT4s5GKCBh5kSTMxfq7TjGnieAeMKVBzFc5w5EwCUPhYM6YFgHdhvMkDw4WBG9AETEHzK1hWBr9mEdBczdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GNivpcPFDQkz2UDAd1hAbzjSf6JCVQjVuj3DMHFVd1m5UQMAD8qqWTsGX8Tc9RiNrL4cGoUMVcp7tyqfGpyyoGv",
  "key1": "3DiTCQWgLDQXptAoCgQsYgj6UN2NT2waCrYAGa6HVWBDQofgd2dbjLCZUuk1EUevYjRCVT1vNrGj4RKKh5QuKn7",
  "key2": "4h6fXFGpxQchdN4JBR629iocLZypPfXY72xzXmb8v6VJ6eXx2FsRiCNUW8kx5ncwTBYPDB39WwUE3jaVaCaSY8aP",
  "key3": "5UWwogk4A3m3Pgm2BTg7D3B6Tm7fhCG3i3toGTt2DKrNChpY2G6WY86YdBRHXHGaqBgixRAmZoDsH8cEWg1hAxBe",
  "key4": "2ChHRNgd4Co8ySXZD4dTHN98bAGqH3TWGEhmLAzFaXiR8zK4h2HK3n7JFHhLrxDQjLBmXPKAGpkgfUH4BGPSifgB",
  "key5": "3ti8u3trYUhRuzwmHUvUBcP1mTS3TFdaTcaQvqAViN6yT5xMJWks8ojduwNvCZ3oX4dxzBABdRTPWynpEv1Ty5sr",
  "key6": "5s9iMo76hAamWxJNBc55PST4QisEL5F1BJ1kQaokftpsY3Gz9oosJE32b2unHHxcjSdhau7RVvZE9kLkXU1cgnMe",
  "key7": "5xLEHnF9ZS4P29bLPXNBS7bzTtGXboi6qqdJXd2WPWC5VAMRTDLUdKDB3D4SfvBFse6kqAAMgMT2rQsrFyQ1eTCP",
  "key8": "4dcfcZqt7UpA6cqEAkkiccspuaR6XfZAJG3N8YSXuwcJavvw8sHdY35Fd9wAgnLFtp4tdBT3zesmEa3Q4LBMGiDj",
  "key9": "5jnmYBk98oRZdQy6Udzyqwv8iLHTS9zGc79TvbrZ4cRhD3hFmQhFswdQoYTCwRvAZjRtQJ6Nu42D7BqNVHypdznz",
  "key10": "5muREPSitJ3xySZTLd1qujzMagb5q1TE86inA6GoSfoW8fPNsQo4FtypPWE66pTgjiFAdD78S5ArjiYJxmEQeeRd",
  "key11": "2TzmUsaYXVr7cPZNyrGxzNQ5PoFYb5FEGtVPXX9bTESgFqtsJuTjnnvPn4xDB2ai6N92ReeDYZbWu1G7CtoqiasZ",
  "key12": "4M3vFgy1azM4c21Z8Wwe6furYV2iX9xUGqk4YS9TMtG2HJPbvG5ovUsTtZNRDxNqcGDVXGbp2XtyHxo9ypFe5mjb",
  "key13": "2SxbbEddm8cAwCHgKM5LPrKdvEe9UJW1CrswAZqiS8tH4T6J6cfK66wJvK8tEup9zs2KuKm6JgxdJLMztJvLktLS",
  "key14": "5s1wba4b9LCrpzedqgUS3Rni2dFZDwZnJpJuS4M2k78x3LUZ4K9HNdYgWav2aPV4JQRvRT5Lqn7cWKxhFMLxJVni",
  "key15": "zU971awMaXBcbRXTjKvnLTa8TbUukQ5k1iCdCFWRwCeuHJPN4Ctd5xLFdhwTS7TzCrZW75tnPDjCpLbzZsJ59w1",
  "key16": "65A2JX5r8YnQTb4UzFdQWag7c5rt8rgWGVkwWvjARxk2tWvbHx5D2Z9kexFoVoHmzxbX2c6TLnoZx2inspKQjx7x",
  "key17": "5b6JkRpZhGMRNJXxgTELugiQ9DyJkshQdbdsPcP6ZM9VhpCo97R8LgQziCTrXrzFDhNMTFfxMHivejmCYFR9X5ti",
  "key18": "7CdpTRETAB6p76nKCSp57XcSAaVhuc5yNyiTfzDn4NuLBRFR1GaVJxdpHkccLBwuGvmTRyJszFiTwzykRPwg6KS",
  "key19": "5dUJNHjv6EkT4KfkDWEavxq8K52v17wYJE6nEfVF6FodvEZRXRNxAyAAn7uTQrDZ6xGKzgi5NncxXsQ7vG2HKr7r",
  "key20": "5NWXUo6LQb2KA2iF96YrVvgkruX3reiiuaUgbAd7WvoMcafmvWferPUnmp4sgFBGfxqbUz3DjSqM5iqV2Y8LmMdN",
  "key21": "67qnxhWFXiHa8KCVzhrqv82BLxQ544kNzxziR4bUeNpNZg3hVRfCBfuEBo3XfZZWTqrHrvp2mnV9bQ8xtHAmVYiB",
  "key22": "4u2qHSKR1RbghxDGzyomy1nG2NoBWBkA7Vi14aPkX17e17KJXNeCkTaX2zdZGyWsyLcyPmN85KcpQYGtbHB8xmBJ",
  "key23": "3XVrbLRZZdQWY5ukRjD5qhwTeRhNeQHrCartmYbyFcPLLfnQqixfFhtEk38frhadUkaE9rTEkyqyKMCDEqV4S5BC",
  "key24": "5eXthdSRkNjgNrAV5fWoeAFSNMvXkGkM7is2gg8oUu5V3gUsVHHi1zWfMx91Mc4PxHBsFSKYVUQXZWVMdsJSXLUU",
  "key25": "4JVv7fb4DaN9cSP7HuTsvq1kmPi6iioFVUJYw9kf8xw2ktztcBAtGJo7kxcJVub7kPt2AWYpNDcyQR6dEaGRb3zg",
  "key26": "2iXCHSjuDrPWGMxbr4fKx9QzthGZpCrt9EmW865pxvzZVsah3TnAZTJA7L8Lx2h6LeaVV7KZ5F4mEqGPQTxLnpcz",
  "key27": "4M1yYSXUWZ1xZZZikUphorCFKUXPw15qmd16XSxVugFBJwMckV9J1tz9S8pDAQRXo4XEsnTvSj2MipeiwtwkK3k9",
  "key28": "4b2Ke9Wji9yhE77iMWyBSeAyBRQngBBFevqESpuQRzxKR1ySMPMh4S4h1EbTcMzJD394NZ2PxAoVUnYTMTEr9aP7",
  "key29": "jVrKA3uCqcBPBKJz6W2t1CGSRLpXZBqZVEqDykaDjGqg4dfgrQ9TWRPXKyZK5dTGKEDNARXxQXskESe5yrnmN4Y",
  "key30": "3ygNfgL7FVHXrxKhVP1Fh1K3SaPBBEpq9MK8SWkH3iDsfkQ6AM1zoDkCGwpLZ2zYdxSTqt2uvVfuVx7vrv5jKPmg",
  "key31": "4pSPL1W7APayjw36joNPDSbkPJY6fcc7DDmfoNbyjkgoBmspUjZ4yT76nD3wokaQ2srCvL8btpRTCEcoKmbNC7Uh",
  "key32": "3dESEVknM9J6Vy8CDQQxvcDYYcbYyQsyFkNK77SBSqguT1dZEWbLzDtMUkSMkDJjBsRWFRizsbpi7mJM6XqneEff",
  "key33": "4tCWXw2NssHsxZhDWoozo5cXTNfCLzx937PF9ECDubrWJBdL4A3guvLBhBbYvbZoNhBvTdv1Z1qTACzLSY47NkUR",
  "key34": "3spewY9gwhtsvzpJ8ZCFddhtf5JnAip9Hyq1kNfwKEhsSYX2aWbc7Z5d8dxzk1C5hqhB8bih1aLX12srxQnJyhUR",
  "key35": "i3PDfeZb4g6qXKmyWr29pEeQDP83ZMsH59cULdD9BadxTKxTMUrcHHrQWfMRYKvqnmUGM1PfgogdrBvWUsuVgKN",
  "key36": "5681uMPCzoBM9HgmtJchRGqxKNxYpBY4HUjuNDfC6TzEZTqG1VRzAfePJaDcUcr5uvTd9EbJZtv8MaLkwYz8r188",
  "key37": "4cJ7QX5utMuvVP43kSixj8gdbwEbzYsDYd3w6zNWojg4bmc1d5fQkJni8czJ2iMhykA9Tmgm1i5Txj8GTvLNtw7h",
  "key38": "23vMtLxJmRGBWjJTB5fVTtdsQogqxUwTk5dhCxGRAL9aiKhw8e9dc7noCXQU5o6NQh2oqTeLfC585aWSutw4uYVL",
  "key39": "3XtFXbremtGr2uHXS95JMh5ZfjEPdJyBaZSgtv8yUoTYExdwXYpHD6JTBftVYzxzft8Hongp2t1wfnsKwwcVtvj",
  "key40": "47G4UdBf1ypch3AukpMcGTDEfBhsL6fxSjxuwhb3f2mUsdMfy6uyDoA8W65cLiixKqGyJHHRVM2D9abj29HuBd3B",
  "key41": "4hjEK5PTA8AbnF6eHmCnsQm7b6YfRMwskESjxEaTrigY1JM8MDK1hsmZQCXFpMF5VmdQQdNKgcGocRSLH1bq4PBR",
  "key42": "27t64gWd8zJVt6GkjSoBnopuPfgFCUQE5eDAZyLE5w6Tb4X8TaQ1HpSpaNnroCcSGxvNkJ7HhMUUMdSXyRqmXw2x",
  "key43": "59qbM91L6S4JXppsSQoW3q4pYWdZ4z1a3UgyxersSLeCq5Gk7KKjZcYi776oFeF56zttNWy3vVe63Kk1pPUVZhvo",
  "key44": "26kgseVBBxxy58YoFf1u3QdAznvxVc7y84HzF5mSisY4rh2CTxPZCPc3FQwKCZmktDsQfz6dfb2DMRzcuo8ZHoxb",
  "key45": "35KVi5WTomFMeKZwv7j4M99xwrLK6rze52DvTKWxCJGmEZWxGUk3GXeiLW9FDPH3f17bnKLCnn2DrWDQqmajY1v1",
  "key46": "4SZ6xunnQDHnoKPYG5En3Jd3sFkvDG5GmmF5rasxRXgeoRL12vYY7yuRBaXTuU5Rzg1tQbQhMzdT1QVQtA1y8ywG",
  "key47": "45uBCsq4bPHSjQkcWvVxut3NRLjXBN5gv3orARdujoWgWPPNYccmHzU7KsPfkeJh4DnYoHH3fgudGuAupJZFV1hc"
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
