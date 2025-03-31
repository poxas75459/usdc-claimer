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
    "3g8XeNLGjg6qZCHoqzpY7r9XCe8XzVUUbA1LfsWD8Y6kbnY3z42NNccz3LTuiwXudTDTKzEGj24CCtEBFDLGmkex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y9iESGWaSoMETv7q8RrE9LyjCRyCvjYvZZNcVCYD3jhY4mLQ1nz1gsMqq6dVJb1H8Wmz8ZFQLhHRdhffh3SD6Td",
  "key1": "4PrDsYG6A4Armike5yq16tHZtRSKCojnnvRNiEvzNNR5GbQzoBXZCbv3mX9gY67CcjnCqvaFMTdiPs85AXf2bwZ",
  "key2": "27nnotQMHCmfKujUd2D1HtiYJBy5VRXihvDtmStB7JWNLon8x4tjPiLcWUp1h835LeDCyZQVNf1ihMuB5597iuk2",
  "key3": "5rrK9TocyiVQDM4ZjGVUMwPtLxUgeai5Cfn4N46naMeL3TAbQKgPrfLZVZxveDtWHUH2CtTXX43QRPbii2M55FTQ",
  "key4": "QGxBUNZm9PeCdAAKHceunnbvtvFa2TyJx5YT4J293YRBuheFUzrRT4dBsJGua9GaG5Rdrsxx2VH33ehxtkQr9Z7",
  "key5": "5pv5ybe4yPevFYDULLGkokkYsG2oPEHHRV2SDxFTie3EAHQkmPBrPdqNkc6E7J9uSQfzub2wSFtt3vRNEN9jUYdq",
  "key6": "hP7RsHbmMksjmcXUCts3yBU9dtNoKigLcQEgRoWXUnH7K7Bw8EPBVr6w95FHLouDhxdZGdEaxiGoBMv5GZ4t6CE",
  "key7": "eWGWeFwGNyUFh3djDofaUmycD3Wg95NHwn2wWL2xuqgy2sRLAyBdpkrHqtFG23pYb1JH4hAe7jdYyBnXhDKiacE",
  "key8": "5eTypbiuu8NHfSLP5qFbD9MxPAiuELi5CiYUHFCZgb3P5ennoaeJeDUHpMUgT3RYhk9x25CXq6vhL5taiYqfe7cm",
  "key9": "44UZN4d6FKwG9yRX9N8pbm5ZBHD3AXPfVeEzVuLhUy94BXaHKzQbXexoWjqo68VzpvLWjXSaEiBbxiK51vDqPsbL",
  "key10": "37bHCMqxynPMxTz9Qyr88FjQ9Yj9wCSeJQ5h5goa9B9aFQ2oR3hj937Jp3DXTw99PCweBmmEhnwEdBn1WngWBaAG",
  "key11": "3Xkp7vEE9j7xCUD7X5cZ8G3GWe9gVZ2sHtPWdhTN2naUP4t6qK8XM3bR9cYkJMZzRWjswPmEZX72LF6Sb1AtgJNW",
  "key12": "4YBqd4krhCeXVjQCRTzT3kzXitFsxopRnpUSQej1xX9CtQwDmL3x2BwVey5ftyHNX9yu6Dodwrjkeq2kpZJFoJMK",
  "key13": "3knu4D2TPaiPVEdJ8SpW1CGwWg6JhpMYgYePYe5ymhCJuCzevx8LZtyAcbYnak1Ss4FnLhjmo4jPweK3iChZ4mR",
  "key14": "47TD7qBVCgYo3ggMB6pAH9YUwU9jm7uDpTW54PDVSZQMEVEqm7WgpvM5teRH5fAcA1RUerKwMxAQxsJ5SJ8idE47",
  "key15": "4fbHwsxfG9TwyYyF45cMbm6jk1ueWJLn943fFWTanCZXXU94qhXqQKYCKMGt2P372GU5cVrXu7cWoEfCycuSKDCf",
  "key16": "p5BTd68tqikGVNMDTAvw778rANo4D8361Gf2bgLW58411fHL6DJnztjamueNtEwucA82oUTbM4fBk6zRXxrNiya",
  "key17": "4YcSyuQ7JY1y5ZukFDnm3Caq5Hmr7RMBoZAUr1Zcw6qKSmgjK7TbTkvEqsdVSgpdXcSKkHFY3teiDKv9b92pARiZ",
  "key18": "2FrWXrAd4SGAUiJ9j6wD6JZHy8s7XVEVnVQSTkAadgBoZDes3QVSVHduVmnBFEJYgBvYiJKvwJc9nJS8HdGA6tGZ",
  "key19": "3erQWmLyugCHA8CY2wJpRdAPUhLkQCsYpXPdDsfENeSKxQVo24yGkuR9A8bSYcaCCCikPMFMAMiP25AtojUrJS7h",
  "key20": "2fJkjEnkLqarihVEUwXuVWswpuo6oezeKNeDP8KjsnS1Bo7UWorgFXeEhfhZCs3Z6GWyH1PYWFD4Wvoye81w9ijx",
  "key21": "2Vh7HDJt4iaZfUPe1Y3BPhKiuKJkYmgmWAfpqJc8BYYrJ1ToLwCqcCRGhaSC6c4QAkfvRstDbYZ9QKMcY827tpbp",
  "key22": "2baTPF5cvXT4w9esx1dci5PqB4Kz4gDXHcS9fWApsTpMcbVqi6a3zRhLo3yaxp1qVAnffzxopjWKoFTQRn552sVd",
  "key23": "2tFXEkcgNfqrHKsrme3BCkmQQ9Z2Ttk1CXGHrMcD5CuPdfYufxyMaBGWXWu726NLhzvoj7Lrgs6q9i3Q8cia5mQp",
  "key24": "4RkLxy76KqKxhroym41Xw6GGGuDdxj3odNure2yQA3GNWLBScL2AFVVJHB5vksZyZ6HyG4tuAas74DoXTzvX2vgZ",
  "key25": "3tNgVaBkE8Jmf6cP1Wh6Kpt5TS8U2rzC4sRavBsauMVcR8xLUwMr7zEHkcTvtWKEujfKW4DU9B7t7nskL8t8iTNz",
  "key26": "uRwp66FLFHuoUHnoLw92BGeHSixzgAjBrbqzSQ6FNWwQ3EihCJCQcVHZav1T7U72pWuB3Bu5HhpmwwJRostPP1n",
  "key27": "55Kk6mntRad519XgVmeht4eka26N5vSMtjDZvtJ18AN56aFXxxCwUYbvrBXqwZNCjSM7ZcTJFcrDnwtqUE6jGfjK",
  "key28": "7CGEpcTpYindm7Wp6FbBmJ5vKDL52eoDrRgH3D3SKxAhTZ8TSs6N9PDJQGYGHZY3wEqmjHcYFj8suhxabgEGDwQ",
  "key29": "21Bg9BEFhFW2MkBKDiAnd4EFxFGUky5fataEL75HjgNUGdxbsE4WQ46zdHPtbwuTjLStbLibrd79dAwpwTEdBeJp",
  "key30": "odkLXx2oVbZHJ2zRspePrKzQGB8re4ZYbgoeFgkMDGDPM7uK32nDzfXHPnxjDRP47JzTArDCcfMrjvkdZHWLu6H",
  "key31": "3doYAKYrAa7KdD3PqjxzAyD8EomtifKS2DH3eqr5XumYGpAGBHBbtsJeQ6kR3JvYipnRxqGYNfLSe9A6F1NFSeQw",
  "key32": "3dsVSJArC7JjntWDWz6S1BQSpo9Mr3rVzTqhobrV8wF39mhDahV5CtF3zZuZbjgjnCaPKLfQeBFLmfJ7KhZd8af6",
  "key33": "61jHdnELDaFkXgaMe8sXBzzxYVnc4Dm8ZfidMegAd452RY6TpwRDTAe1Xq58SrfXcvrWpS9kdeQqxTQ1VWLH6Yst",
  "key34": "3BHk1R9Qi6Gri1BszWyqFBcXPybWNDDTX7vDUqbCJ7zAUTLiD8nvxuRMdDmvJoUfsHmgSeLMdWGK78LZk7Qb4r1Q",
  "key35": "4W5womhTDU5W3QGjZMKQvGFt2tjFgmMb4Ey1fPsX2YyE2JVhKecpd5CB3Be8WEQjuFTCvqSQ1juZSYgpPhqo1YwH",
  "key36": "3wmMCWsf7XA8APSmn4QVrDkU8stJPpQwuvXSXq91kfD2rr9vFGvw2gi1d1AFtTutp1kT14NK1UE43spS9d9fZjN",
  "key37": "57Pq7WFYbqzBEJ5o5pbQ866DjvorfEVbaPGpGCpi33YM2Ktkmkxb2aqK8vLXkd74N8UEp4MbyKPGXa24yN3Wj2ED",
  "key38": "54mb2tqfnG51cNeRhDqAjCAjffuruYffucFinFFpsjUQFLE3SWmS8zM78kc6Lc9xb7K1VjZek7dnYRLY9eaDMn2i",
  "key39": "2DhnhJeBcYNpp7QsZjrbFXShuoh3dhZNkFy8fTobKvwcWD3rCf55315VFXnhDN4GQer2L449PLAF6HksYzFt7PzX",
  "key40": "5apjdoG4pMMSnMtgYQr6iW5nSYuFFVXFGgo6aGPn7DZ8tBZVQM3b6JjYGcwRArf5Vzpy9UtMcsWoFugWR7LHmZdb",
  "key41": "2asSGrXsAeFrLrcztRKpEhGmStoYxn8w5Q1jZwpXs6nuvCsbh2cvq9fe1otMhS3nbm1S1E5raGoKKkdLJCAeUboh",
  "key42": "3EWSRh3HysRUjxiNDjxk6a8BjWUNCjW5GjZ7WaLvS1PK5zMbrsGbHqkZ6U8JyaiJBBoM4PLVw3GVe94M9DTpERac",
  "key43": "kW9zh82JVwU4fojyC9WrGccTVaJbdHagsy9bJVWiQFBMwsTf9cfskHfyGf9ZZodfxLqYprrVZAKtZdKLdjuJti4",
  "key44": "412U8xKyBxbNLJrDqSe1pCuiMZNzLMSRqJ2Hyomt1n61TdMEiZ4SQP4ygZ3oPsyjxKLHwMFPBftEuVU8yXAeA5tn"
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
