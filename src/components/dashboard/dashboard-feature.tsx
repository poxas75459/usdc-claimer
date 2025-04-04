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
    "HU7iPJmshFnf8wFeikKAreUNk5wbfzxg1V7X2tP512gYLaGWoRrwqZ7Rf1NEnnJdcqhXXmroH7yLU1kiXw3aycG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ag6atSDt5nzHexSTX9Lg3tzUgiLtz2tZPV1Fhzat9kgqDE78SqEnAC1mUjUEBB2kD2sUitDxDNm4CMW22hyXGh9",
  "key1": "4bZpQCiuPDmTUD9coYgXXjtgj9aJ9GuPGGbSz2nuMQ8nGjYbjerBJ5xhosn8Uic4EL7DN55NhddUAtzBssLtc6S",
  "key2": "3hjBDUHWAQG8g8fQbJ21qMRuXwxJwD8HMFjSNwErTeVQAN8aC482YZPKqvpmD8DBijGnreyt79FVbkACEf8vB3Ju",
  "key3": "4nb8JKEwFbfhbDXMsE1sZL4WraJuC7Lr1uEDzo9GzoXj5MWAdjhq2GUqbQEUwrkEeWAQtSn8kpTzfDTJphQNEKCn",
  "key4": "3VnfmaMhQzNv9c8SETKmX67afuBPvvtW2i58SfCnnm5Y5NRY3LgN9D4Bsm9Hhs8DVPoxNnVbFAPHynv4oCT5zEUS",
  "key5": "569GYNTXjaBCANKYarXPq3Dc9YThx6jjWKjHtMDhSF5V6yex93US7YGPMWwXb5XeZJbBxEmg17sFcYYv813UpV9Q",
  "key6": "4S7y5ZtRWMtSzwzuFb8rpV9MSF4h3fysqZ1AD8DL52tSxT8Lhuni5jGzoy6cjKCbkFuUTi8o3m6cpP6VqJTGaH4R",
  "key7": "3uKrJ9GfViQBP8hQrbvFZm8dkukdAighzsDChx1VuYsKSk5DkQfnek224KneUEvyvprQgESNovWrjmbvSfG87CM1",
  "key8": "4s6GufYB3BJBH1tFJszJwaQSk6XrxamVCMqNnjRrjG7mJuGchevm7MMFWDoz2VQJ477Q5T3TBgyWjFr8wi5rTQ3a",
  "key9": "4WXpQRUqmEyGDM7cnNo3U42XZsCPu8ETvRSz1v8VZoLVndn6saAZJEH9nmGL6TGKaZkvUz7kvNgNEbqfdc78QvnV",
  "key10": "5vQmVGZZU5Q4A1Q4k6jfXG3grGxQGLp9oN4sNzR6GcULVfaS6QfRDFuqvHnREREJrJNhV5End9mTa1pB4wjFc5wx",
  "key11": "3tqtnLpHzFLy8Z3HZTuDnnnwJi6WywS4zzkmrHn1udGyc9Xvf6TmtyhSRQzv64wNwpBvNF1vZbbf2kuG8AymC5xh",
  "key12": "5dMdu351gJkWB7SMDX4Ja1xGY17Bg8yXa3uhrRbMmwJR2GA3T9wMd8UF83CgGLJ1uP7NjimnvNpYuiWHK8h73Vqm",
  "key13": "4ZsBDfcZrKWCEfWe3bX78ojNpez6WdkFwAWC4L9ofRSiupUf3Kj2kdaoPo6BZs6GZX56NHZovKscF6g6rRkbhnoa",
  "key14": "4d6EdDobQhpKqT8v5kRQdW7MUk9eD9zwW4fVmTNznsV5H5jETibBmhQ6p49cWv2W1va6GPri9hWtArY5x2fVEn1d",
  "key15": "5mTcUQkewnDCfgbnPzMEYBMWp3TFCb7s29DLMY3qiMFXunoBGEV9P2LmadjMWyZ4XpP657MonU8azYUzznn95mJ1",
  "key16": "32B3SmbY8FVUrNifUh8FuhFXe8nb7P7RBALGXxRgdq5J7yr5dzz27DmFEgPCMwXFS7MZY1LRBiMRSTN1PaV7WWw9",
  "key17": "5vQtR29aTxPDfmNegyMryRvrweN9J6sgpDp63Lu1fA1CP1w2iSvUWmbdwTuNUkiUhsNtJZS4ivm2JdsZw1GhwNA4",
  "key18": "26HkyEaL23Cj7RN4XipnRqvhqQanqXs7GoMerwDUcqu3nDL8VY1iNJgvYH8ApjBgEEdSTVJfa7hBozWpYCksEmmF",
  "key19": "45wjWrxzbg1c6eiZt5XoNLJitANFggA1gFWHnikTC1tiri9A3EJRxrLfkzyzwvDmpnafjRvsa8u92xMLyZyDecXj",
  "key20": "5v8XJKCdEeSbrxqCfQifBnrYSQVhECyk3Sz9LqQMxBSgtdMDpocYqC23QVQfqBZ5syQUFsPtG7jxdhaYhfsLY8h3",
  "key21": "46xniKABE4gaCiocyWSmunjVgUL6UfDQf1q3zbRvv7qiyr2n5bqBMkMm3LPFrcb1YMuTXNxKPFQTve4WyhTYVyBp",
  "key22": "5ZmDmvAu2nQrvvewaAS5SJS5F52TcK9U4MKmKYzkHkeTg54nA5dAwkHvyeMRY17TmB3vCEts3vA9jDVfVEeZWfrE",
  "key23": "5AEFPs8apqJ4UoP417aXGznv5pqe29nt74nrin8veGmHw35k6CQFNJUAK94AM3V9NQsfsjtLLaAZT5N6HgphevxQ",
  "key24": "5PJNjwfhs2Sahewgf7VWN8cYmJPqU3jmHa9ArfLkWwKqxrdahBcT1BRZQp5sTuDWrgY8mETsDgCNeAwtNTLZGLLp",
  "key25": "5R3kpHNdk5vUUgnxRs459onX3SmVhM4GsurAiYei8KoUcgbdsHmhXRtPWuQubvggq3WZKyzFKcjxmqc22zLJFuza",
  "key26": "c72ccsYEAtd3PkTcQHySBaDfn233Q3Ri27RrkJ2RJEK76r3xAATub9UGrYjW5TysMgKTkzFhDSs7RKQ7sxLFDdf",
  "key27": "5St8ktJ6GnAF8c2XNRpuPgvUmmrK5eDknT5EMRWsu5DUefRD8rNpeH9F44BP9F86fDFFLwVHex6eEb8qkm9eSBu3",
  "key28": "4BMaWyc7pUDLNp8PAKnHTRHtmktahXsA9Fhfd4UbXWsmzJRNrnsnpn2jBcaMoZP7HsD7cMibbWq1HY1tisndBTpX",
  "key29": "2sELh5bXozWszk9uxsue9MvvViwtykGyPGpBwdQL5uWT6z9QTUXC1JaRKBYDc4Q4Ko2mn5UFM6U6q22jzeXDuYay",
  "key30": "4ykQmGUsjDjahyioPWAs5dEpnjaYfebgbPGcMgR2EwyHGUdmFMYC9E3AjS1NDV4FLAQPF32VBRtBYCcr2MrxkhZH",
  "key31": "3bHFEkEpoWedJEVEVrvyxpYYxfTTRwGgGFqUryhyGGhDoVqFL23nkzTo53qTzHNBZaZqSytkBG7kw7rYiVdfS9xa",
  "key32": "34nrLrwdtyQDvVRXkv4D2ChwKHgJG7Dmq4WjYT5At5mvHqVnggrnykVZWA3iThDFd3oHoenZxxWkSihka9BhfcZE",
  "key33": "566kUwjzKZeYH2oSofwHnnHQgVB2bbb94kV7Drydm1kehqBT1TqA2zYocoRA8kZA8fBvgfxiuwxuUvEXw5EfR1nr",
  "key34": "5KB7wgxYDh7dK6TmpeCT5AZuLBfuVcG2YeWzUETMPp7Z1Y2cByqJVnCLLGmEqsBUMTPAyMFAiNxGxeBNp93s9GHW",
  "key35": "WDP1cLASp9Aruyn5tQWBQ26jrB4L4FndpcsVoYygbEjGkapsdLTWc6a4Tb4g6V23s8zdEP7PUrs7tjGQKxXvo9K",
  "key36": "PDWxymAR9Tx38UFv35Fveuao3bA7MHyYgeH3gxmCBbBx3dB6v18CEznmUtg1nwPttQxjdC14SRhPKtzqrn4XsPq",
  "key37": "3u6kVBi5H5Q7bJCRryVM3pGyKD5ZqBAdcPB35ibENUfn9eMuRKHThLfkLHWDzSxbxiFZCZGBT8YMdaHu13pGsUQT",
  "key38": "5KHvMiEoo3nPatMRbK8bksqEHE85mo9tVw6QkuKcbjQTvJgzoKDvKjywdi6FZq3febN7u5EwdzZvcSScDwNNayYz",
  "key39": "34H3aY5N46yggnwASimbriia9vvbJ98XjdjaXuMP9AcrRQHhjKidgij4HbR88tW8bCiU7U72z7rx4qzE53KaYjGD",
  "key40": "5r3T8TvmL4VnSHhmsUzd7NnDjR8itvZVY7UbaHWAVMSY1FnfmM8iVHcfFDK1xNhvyQc2PGB7ySqc9Lj4wZ7CZz9h",
  "key41": "2TJmdR2BjjktzTWb8VkLLEgTx3dY2zzPvfF4nZANNbTKsoSrRRDca9VpZ7x1f4X5tyESdTbG4qAu4k6QfCJFhbPL",
  "key42": "RQwuaxy9efaTZq6R4PMduMiyxX12yg4AfZGXFeVqvYAhNKwBgP7VLPdLcazyG3pyJ7SWYZ3X48pxbbtjyToCBVD",
  "key43": "3NYMYcZgrj8VZdzgsKQ7LiUA77EaSWBH5TEL5yivtp72wGFg5aNxkoZPjVsEH7XMk8QoCodSHrwFTgnqBQWxat2V",
  "key44": "1qznKeL18FjFZBgiYbbcx5Sf1KrEEUTzktqVm55UrffdGYGwtGqJCACDQp7snu3bRHHYpXykSiS59ADbjVXSgk4"
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
