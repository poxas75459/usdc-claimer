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
    "5hRydi2GbZ8SsCDMYa9BEfvFCDzUq6br42QUjYYKesNemyQJJ7YW9gLLwAtKocXF5wHgSyZJ4aoDnffYWhxL5ZEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d5uXi7oKfaewhUpAVopgfR2ugKBQLuhNXxPHK3HydbyMkV3KK5eS2845DQFi3G9aKUTbSTMvK9pNGg87Q5SjXQ8",
  "key1": "2dSYJHC6birXJ29m4UmeH3h22J2KMAgonmw5HdzhyQ9FwALWaYNJYKCQrXderkrVEGNNgjZWHcGnDcE1AgszJ8Pt",
  "key2": "64dsq9ixyY98X5mgHEKvhiWFssSo6pSCk7vermK3mmqHcBpMeACyVYJjAd5KkU3xTSTJezbwHpLNrqimXeVcKY2R",
  "key3": "37d36fszYozV4p8tajXE6bHhsUY2QiUg6uHb3rZVexx1AdnYrRPXx1Z6gj7NKEMV8CfvnDHK31fgEe66AU52uGPX",
  "key4": "2C4VZXG4BiUrS3JMSp2Qc6LvV9wdrqYezMaXNibJ8J6Siavn8ApMHUZFisF5x6ac9wYPyzTsteyzEqUdhaNB2jX5",
  "key5": "uAtW96HViNrs2eibf72ei3j2gFoMj4fruRYewb14HFPPWzgAnZ7Gk683qou1rU3NDXXJqqqBFF17gv5ae88JH81",
  "key6": "3i83G2ieZZM2EdhPb6nunz7kZncMwvX4ZTLm8pn6AHc4gZsqKUa83rMUuCq3m8SngwrfGp1RGbXW1cMwCTQE3uef",
  "key7": "47NsxQkc8cDgDJ9dTZTu2FfNm8bhE4pmDthHEVom3ByTHxDYLQQprjhoFUnDkmRsZRTSEpyQGLf5XbUuC85gE9Cb",
  "key8": "5QkPmmnUfDfNCneVk7DTWdkR35Z5cFavv5ct2vzfC931YzzerTU42XBHjt2zBf5q626Dr51Yn5E5zB62KZYPzi6o",
  "key9": "2CbtLo4dRgWwKzvZsiMVgtWrnLsCpo8H8nuMqLgf8HxFao8oT7H267Njkvcw53c2k4VAjBNCSEsyPWw2qLw2WkQx",
  "key10": "p8i6FEmKEah6FzxamDQXLpGmJ3Wuuvw6X5PCE4reDbPn533SKgCfHLsKzNh2zd5baZc3ZYBbrPJQzyEnPbC3X63",
  "key11": "4tPRGwQcgeq32Hd7BhtCBDHDPDev2r3RPW4usSYMMyAJhbUzTJzbn2TCgqVKbHDob5d6U3hb2Dd9q4BbmeVTPcqe",
  "key12": "4Nx3JHPrzBq9uggSjM1mA1SnfzAnAaWpGaPEActQZVqrMLQmFsRWqiKBQKGQCyjQpY8TQHh5sqDM4TvzJUo9d7TZ",
  "key13": "3NEX6D86E74HZWXvYQ2SqUVxyLeyETcDofYzRhAoVNyMgJSn3rJi5boxMtFEHu2G8sNCix8ceHZB58bkgYTkD7TJ",
  "key14": "3RF5TF7SWLfDXKizShWCHWdeS7QoxH3MsWR7dkJLs9kr2Pu4Qej9X66TAKAftk2giqQdfvz8v3LsgdD6iNv75ACL",
  "key15": "RAhYrbt69kzYvCvTqHt5wRfuoeiFUGa9VASkKvac22myscYDGMFsSeLtqEBXoGKSGJQ3WJ61HpXrY7dqdBSEcJu",
  "key16": "3XyNQVtYqvAQVvjbzQHc3xoqYtTYJQJSwYA2JPnmnTiC72PcvXwh26DKsek7wTkmd1pGRSKGy1BTqMt81gim9mQN",
  "key17": "3BPjj1znf632xyoxTyEQZpjUVbDg9VED1MVAzFXSKQwtNFsvBsPiPRS5F9hyCZjmEzGcZxkSt8AmGmruc9HsV1We",
  "key18": "4SgDncQRwLYd9zv7dkfPuGsnn81WLyJQVsS5TqVfopEoS2MeNJ96LzsRHyPMpDYRzBKmszFwoPBizNEmy6vpVzZQ",
  "key19": "4VdHKECcXShkAZPgLr5xfopHKBFaJqRxhdzx3uXrCAnWPSmkg3Ncau3UPjmeNAq1k6Su1PucNSzXtFAzoPYg96Hd",
  "key20": "4Hw16656ndnHaae4zCzf7QdFd5ys5mCppPUQabPJuG4BA2oM1U2p6ogTXgwntFZmgCNqwgQtbT3FaN3PHNjTQDXt",
  "key21": "4cb7VyRTwSM7nhKAA5sn9jJ8yUPDxXt7XeGvveNgbWisPm8BXa4s67sXqSXK1JcyePUjjYa8UU1KYWwsrpgSk8mR",
  "key22": "3en9sfgsCZpKNNUm8ELqWcfRt5fjb5iySVdTTgKt2FHVC5zs2migTxdP3AEcoHtFYfhtkG2zFsfPnGJxzdRD3FpB",
  "key23": "2JVykXyPbQQvELYNVC4s8NUxkVo58VAf7raTKdQ6wb9J2sjCmGC3dtHBawFen3JZNu9okXVUnr3sSfEZSpZcGmrQ",
  "key24": "B1q1wkcEzv86SjbSGGqGKpVXhiEm2W74qmRVGks8DvY4gjZKnVJ11RFe6Lg1FZvoPnqi1xzJPoxrmHMyh1Ffxmj",
  "key25": "3R1G2cnBjHpK2Fuaw69tLxHo48Vk3YfGzXsyo3gF1ac3xxRHudUfaSCPAJXVXdMzACJi4zgvh5HkipzUKvfRQfX4",
  "key26": "5PZngrqKgU1A9tzyBREaSouierj5zRAwMsCae1F16ECM5ZvfXpUf6TampBbMNFmEMdFdFzseQ82PdLgvEVyPnYKw",
  "key27": "3Z7Ph79cWJMHYh1iBjHAshw4qVXXPqUA8bUYAgqn4tZa4Uz51pqrSZKMmAbUXDx7LJ5fY6qpPupZQ8npZbeDFzrb",
  "key28": "49xBLFVG6EdjSzVnwCxWbkQ78nyU4PjtXsTfnEAgEYZW125ZnSGzpCXpZkLNoEirS3hWqotYHdQc9Vc77ZhMYpD7",
  "key29": "2EWk96V6YVZPV4kvK2BMuFU3ek1WV68YLaiCdx5ydoX5VveEAFs13iPznMszwYhpV9HyQ1e1pBNJJHDRaSD4GhQF",
  "key30": "36umyrs77zTaoFKeh9qnkucqhqiDQgyLt5ENZdM6HqnrTomUhfwsDCUx6FzB764HtaEzEztUH1dvMK9AtaG8rtGT",
  "key31": "31WnTmLVUbDazHzB2gypJvPedEAxMe98cxVjecAbX6mRSRe83skkGMoSKW7G3uaqRZMmWUiTqNhJdACyNu6BWaCK",
  "key32": "4Bh1mfeb6FkBGcAALX2D64AUFkiAPSGq4rRZ23gjhHWhTRpbZ9LBa8BrGh18eomBBYxBqb67JGJsGBhBhaJMoaW5",
  "key33": "2bmaT8Vf5yxVVv4eVEkTgbMPArkTA9UU398DX7Y4DALayCsAaT18v5oHbBvCUcrwVkZTu8NjdBB3aAPimjvNcNxj",
  "key34": "4zLirdLvDo48U8AQowujYopzwxcxppDHnKyGV2TPoPkKuFBKNMVrDfCSsUqs3F2qZPPS2eEak7EvpUze5BBnTNNa",
  "key35": "3iY78bkf2iZgTNxhfQXXQtfPkcHvMgWZfoFHfvFuoGd75qkRVNMyfXD65K4jMfPEyMDCKa4pToj4kwscD7khL91h",
  "key36": "2pXBvcUY4xK5KseQ89PQev7qN7fhTHk8ARtj1kQvWcj2qnBP6WZZWUKdkCmLLwa7ZiX8bUzwqknpA9w2kG8GVU1D",
  "key37": "GeNnE5wzK1HrVtYbcKCn3kpNAExDqiTa7gyuu6cFA6TYuk9iCkm2d1Gw5FGUmkdqDtBEvdDXdZkP9U1F3soe4Cv",
  "key38": "YkMZCqvjXT6NZn5pRVUhYs4oSZwTZ28LpEdbfHcgCNi9MxS5Y7izRJoWQBTXRsxbX7AxK8nXMG8waPnN3ZDLqmL",
  "key39": "GxNmNTKCRhrswLXnDWKbR3gDE1erZEq1PrspQxCA1mw3YsqQrUdK3NipE11YCkLR83F9DPHqBM8TzSccgziowHr",
  "key40": "3MixvunJEBX5qm8wMNgRJ73RyxKDKE6gHN4aCRNPmBUM7UgvcbeY6oyfhvBdmyBacMwJN2Z9i7YPqZttYR98CyDn",
  "key41": "46WnWxqbVcqzoKBPiZfZLBjb28YgjGPqtXw3L44PiAor6knGxYG6GT2cCxydTD9gBZTcAbeM46V6wH1Kq4rGPZZn",
  "key42": "4dwx6r85F31uRxzTgKwK7WiTtW8iTciyf6pWpSgE64Tr8NTRE1xB7kG6pRe267fKApoqxQZ9o7GBEmArHMGjJaG4",
  "key43": "4KKGeTEuKfhzrhXdSbPK7PEBxPLRuFURUSwKenEaxLqx6nEVCVKhxBFhDGYG35KpPUBcAsV1SvyGVBVRGM6txt1F",
  "key44": "1vEteAz9UZQ36XArRq88JUSViGJhwazZzgvRNHXM9jB4PtvBxiE8qXYsveT3dLM4XuvDpyAcG6vpZdxUSPQ5YxV",
  "key45": "56hyBLZhKtskRm3FqiMW6ZU8YkA3ALd3EkQ6L6utDXChJzVfAAyRaK8UAKF9CNrhvMcX9d5QpZDjJycSgd5vjJvb",
  "key46": "3Pes5vaCnKBoNL7LW6jTHVz8GdXyXzMfMbG6RbwQwM1wL8yhJZJxWvDRQT4vD4GTHBSUhAhMp13CQnNUvypkm7jF"
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
