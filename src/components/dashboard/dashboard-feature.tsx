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
    "3hJ1JCANTWBPooEU8q31Gv8YwDq588Ee7RyGpAhtv6yqRXDYzGpTbcda2sLW2DVZg2dLwKv6v4TtmRZdR9NntLjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V6hYMURoGH3M2tCWdsn7Tj2AV1xgTnbjGi9ZRQtQbG3cvPUfp3reZtjXydKB7gLVdm9FFmH7r5BTRA83umnQkYT",
  "key1": "34cbGyNDzVukWeRLngHTJ7ZDnxhGGEfEaLfkedCiTWGbEJepuZj5cqXRuGZxUHeWEkqjvgzdLgFZisiJeC8srZRe",
  "key2": "42UxsvWy16XQeUGzymkHEntYw1ukucHfSPTroN6UStNCFyk2BbtzRJKcA3nYBd336168yXYTTxzuU5L7kzGk9rWL",
  "key3": "EjAm7DPMhQTpfSx5WJmXusKbneoHqidwtMUbtCGHUDpoaUxi3XTegKuv1reY9SH73pR3bELFzMZ8UgLhYviRur3",
  "key4": "2XQSqVoq2zV66PLmdxo9xoxqL8oxux1fpNpFoHNjaGZ361NonUDRw24VU7c9kwSJySuoeLMNujLUo17ovnJ794ew",
  "key5": "2uzjkCtws8auXj5MZ8P51fJ4NZztVYUf25SAZFFv3BgoJUNmzLNFZw162KsqjTfxhDRVXR8AjH7GyiT2eza864ff",
  "key6": "bLc8jFSg91WcbyCEU2RHhQXnaWMY4Q4NigBr2mcfmRtzo1p8A8j8rTjBPXd7QU1rQqBWxy6NB4YvttUW6YRqm3b",
  "key7": "2oAD5FhzRiUJiULjjfqt1DXgpg24xhZguh4HUCMdvgoQMz5P9QevewvfkHboGLysKgjaieE9RsL1jsDcgivkbg5L",
  "key8": "5RmQ7AatZS2hJ3qX5tvf946NZ1MgzAgrfnSFxRprE2fwmZvqpEkgDPEj5NCd8Vzr2TvPSx9uL8ye7PvXsEgwKpQF",
  "key9": "5qUPrbsbr3xAoj2cXoKoKoAnPyPTNhXGsUtUuzvBqiDJMxGf9YVcniFudGFhcmoQYE7RbqN1M3gfdo1mtR1syg4c",
  "key10": "4DHe7puUbT6ejPXXTezjQEHoBAk6irDXTFsGuBXxFB8xo794Ge1JhupX3Sako2VWyqi418D9A8SSGBHUgJoyoF9k",
  "key11": "Bk53BFpykKcD6sNzhrDAvWhKRmmX6xgqcc6c6uDvKXMtb1bz95M7E6skWGpLyuMV8JRjPhbhuV27LyqfYRuhkKi",
  "key12": "2m3sjwxz6PPV5xUb1u8q96Af5dHTpNMbKz8UZiR5yK31YNWs7YqzRkU7EtvJu1DRvq2smNtcejtA3vBt1Jhy9As7",
  "key13": "4bMt5pBErLZto4dVXRrrMGrXx78pNdACt9tyBieDq2WEpxUc5SL7CkNkhWwHNvDowHXpgy7qb6k1k4uUgCNNwK69",
  "key14": "UEC9nixe44oEmz7ojvRTW6341vqTvMN3EteDhTGmfewnLXJyMNu19KCX1YzcoazGjHRyMW1SKoWPEvdnAV7qnkZ",
  "key15": "2xP7W3cByzL6Fu9kWJkwM5UgWFWJc7nyChJXjykKv3okRoUnnf7exV9pKMD4iPLpxPsJ8uzSEityejnaeC4bqA68",
  "key16": "3MT2dFKrY4Mofp5MLZmEku8E1Nqpa6LWnXMpzLE7um7Vg1bhcVpKfR83TkXFTYdPv742mXXCiFoCkP1j2edPZbPt",
  "key17": "oY3bGbSvdyBACymMFn4knnKFTKKGYNokS2NhoE3EZzZjFT8xkUfcaKyas6Q9yeuKJZQHWjvqnEQVTnbavCLiQsr",
  "key18": "2H8hRVbRvu1ADeve7wQAfn5KqFatcZJjSWSY1xDi7dHSSzaymqE5a8fzeZnzkZEzw8ASkqG49AnoysHMYWAJYL57",
  "key19": "42jyHhdRLJqUnXEjfuFcdsP9pfF3QuY9g8VRQXj7AoEDEkKidUkcRdMaQ2ZFoGKS8rF5HmNeQe51GK2NM7jm4EN9",
  "key20": "4ruCseR9QuS8nByzpd8rmDxnkNBgWtDrXr3yHaZkfXgaMzQNnUN2eEhHmcRz5gQMZ52psQhncmnjha1Z4SPP5zGN",
  "key21": "3CXL98t62toFVhDr7ThqbESm9BstmyySQMgMu63sRetBLpap6dRG4DJqgBXooPhdnEKgrg9f8bHwtUvXXysUHHz1",
  "key22": "b1YUqm1HpKvpVpxZEHzFHgJ16x674tNQEbreaySLpxGuNFSywf6BUdNX4UqVEENXvjbzrKwMwmYrBH5JKJ5Q9qu",
  "key23": "5E4pofGMytH2jVvMkN8C9KFqgs9BfaN3HDFMRcwhM83aB6wgVnHVeCPs9Ab82kUpwxdshyaNUYYcVgB28eB7gidD",
  "key24": "5cwDGNW8KLEEqZkmFHWr68xsGtsbBMgDKr1bsztTshe7i474uVkAs1LE2Ga2GBPBw1pEmrX38v43NaNTB2a4M1ua",
  "key25": "2wc1cf3mmwYxYtdg2EuTmHYADNi9ZPUebmwhjKBVGA5z86n1Z22TXY9FdSPgdEkwhmPKajxLuTPzKyLLeqfB3Us1",
  "key26": "4Ti5mMM5hekzcDy2mRhhFhzwtWtkdZPw3vFNpwHSSRmNmVp8u1ARXiobRd9MVFa5a1bTMTQKzAqZLdXXR7qVFSDF",
  "key27": "jEd5N9pNPXLLJT8439dxoXvq3gnUmRgoUojZPGKPPBPse8J3CijSUX1hBvgxo7NxNhUkXSwBo4A8SZbTZKrDVKp",
  "key28": "4ybCwrom9s7gEZjRepjURb2ZfZv9tLcL4jwwWrfDXB99vczhpYGubMfcW9TT2N72wExkQQqN5wL6rNJkVM36KuB2",
  "key29": "38VjcqGo9gupWHHC4QEsDAuc7dxQgZkU4Mt2L9WAxiUrrN8S9QVaRkFnD9quCmB1sJWVHbCRaKi3hKX8tGBT8syq",
  "key30": "3xW1bDm5nrGbG345daCpYagtzBAHmDfc5sVAfaojZkCxGiA2qkA8YGTUfWo7nwR6auuCzhtikLjybfmm2oCPjPJt",
  "key31": "3eWEZ23BQ7Eh2kSfp7vGRFwdSboaDQT6xAJSGoQpvojzPgzJmyEGpTHfBnnqR3MS88uHHEbavU7ce6MYs2wLyghD",
  "key32": "5BQbdq46fh6k74DuXLfMriUJacMfd2hw7MktZQwZhs5JYm4PjZs5E9ghpVqeiAwgbNbv56MPJv1edDUzaUyVAUm3",
  "key33": "kuxNHHE7EmfiY26NNVcgG7syhsjJbhDgrsGDomG9pSBmp7FyUeAv23s2ZcAg3fkR5J7zb9Enx1dLqLpZnK39PPw",
  "key34": "4Fff1rmkF7pJdc2jMvd4xB7vdx7dMPp7PDCDZ3zpTbD7ex8Cy2XdTbtW6RS7MecHPZYB3YkkeBppiYu2PJmTXcys",
  "key35": "5Vobb3B559vB9v5ovSAaw1QpiSZbA1oWqADXtQnQjFgiTV6SQEdzsRif2HgJVNYn48U97jLSXBGmGbZ7GMux5BD4",
  "key36": "3HaT5t6fYThSvGWpxeB9WEvXEEJpsR1vE6V44D7NCRxnSNpQC2kTqwLdGLuKthgwWbDT9SLrqf6pq6Y8hVHi8L7N",
  "key37": "2wmbS66KSe2JCHpqnUFiMhRXGdy8ANKbc8MVsxvPgoQ3Nyr9iPjXESqxiY2ZuKh2fGzA4QfAfSw6hJGy7pFWQv8N",
  "key38": "5ZR7NQZtPVQTqjMGZWcBQHDbdz7bsP7hzHuheCkuMcCpjm28P1dijr1aS59DpYWNTJeEftMHcSwyP7UUXtjmvNbf",
  "key39": "4MRTrec9W27yC4Fxxr3bLvYg99dERYNwiPGFFghpmQKU6LE4cxtCNSE8CwPpTHoDTnPM3EofnirdaAH1pFYhqW77",
  "key40": "3zJgiLcVdyXoeoZaLePZfdc9EbFtNHQQHmfyD1Mm1EQxV4nSsf3LS7d47nY8KTHbYnicGwdpd8GDqckhPX9fmFsW",
  "key41": "5iJFsN56mEPHkYdussdDWWQHwaJeadqku2NbU32jGQLAiPi3qx2Pwu9yqs52wdnqbkbwem9599K7wwbBHy2pKQzG",
  "key42": "29tM2DYg3Uqcpa8SjVEit4Et7k1admZ7o8YsdGtQsmLJWVZNyJjhK3b3fon2mqB6CqHdJgWgxp1kbswc3AyhXv2X",
  "key43": "ZkdH3ecPf4GmVtuuTXrotAcAkngK8zBjt19rSw7Q7tGgNsTazc77QikmqHw4QcjVc79g2x5WCe5wGNgWktJzGP8",
  "key44": "KWUPkyWVh8tYMiesHMb4fxC6tjrfsof2DBi8PkjCB3eFfpJJsGTLheW8JsG4R346D16jKvhWT1K2bKysvkLMq88",
  "key45": "ckStMDgXcB2F96ZbPwkdbuw94tVKKenbQ9i518BuWuzS9ADUiGKVVvemQPrr9i3Rky5vGHyFc677sLXpZLRifbk"
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
