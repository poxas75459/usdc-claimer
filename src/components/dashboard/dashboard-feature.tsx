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
    "43EpC9FhcbWcxysbVRWQStKaKXaXgMVTwxNyhA9raVasnnGYsHjvzZGToE7hipSg9LtyH21HEwAHFcqNU41VEQiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q65LTzfz4Xp1B45TYNcRxU8of8P76ZUok2gChiywbgXUwFcjaYkW1YqMUUe3c27vEXx8G7Yv5G4cFedUuNUh9Kz",
  "key1": "3p9nH254zfQMEVKeQoXifNBHmLGU6WoAnEPWuX4GixRiaoWwpo2pjbDpPsu11qp1RyR2aiRNje6Qohafi2TffZb5",
  "key2": "v8LaPkgx5KAdWFaE1UvLzsxNn9MT2JP1K2BYW5apPUe6JRCc4kQobh91JUjnKsRHQLhDji4rHnJGHiT8M8D24kp",
  "key3": "9F7bATyHN9UJaCfnCZntEB8zh3myset9u1csfHgwqiRmJbAEJWPXBgWUz6GLH5bZBvh9T4cQFZsyowzveC9D23p",
  "key4": "5FMz4U6mVAAXcyzepsAu5qjoCV6jkCvJrcrcXa5hDeJprRcjFApmhGhuJ2feEBYTEcDv5UiXmp7haftJ9eKKrfHM",
  "key5": "4gpWUq6q48RK6LpDUZoVwccDTtPcoqSKeh1vd3Nffzx5VknoPaHECLt6vF5kXhvbsYSrDySW6FZw8GJBZMPCuuNa",
  "key6": "emh6ZTR7bKhT9h7g6Yo1Zp7j189zbw72rRrH479rQBN9A5H134y6jQbCLor2Gi4a4ffzzkp25krGPoVR8vUWGfo",
  "key7": "2oLakCy38Hqbd6B9rrNoqvhHTgAbCv7QDe9xJLgM8gXSPKUCihHhr7BakxURXEMe3xuAtdQhfVJ2v91PzkD2JDV6",
  "key8": "2qGMDzWf9Z5TqpGYFGgp8J6XAWFofeKXNRHMzsMPydrSYFN2prWxGpMK75gkCqbCdUVEhDvqHLkmTH1oLopXNfUg",
  "key9": "3cTXbCRojPyRxarNbVV1WMkU8t8iAxryHZ61vWVetQeAgMqprepssvJWWBtyjBc8fot9S1gYu93uDjzVrPx74RHv",
  "key10": "5PTdpLCLcNhqqHaFdrnhi1Ms6m3qB1qiAej51zRNhgNvHxtjfwnqWzwhVhfdTkVGyggPyFbaR9rjGrw4KvWsgad6",
  "key11": "2GvtasbXRjAFEmJax5aBaUUHeR6NgURLeachCk7zd369uAz2iRD1udFJKwPMPX6gHdXwqnYZENvAMziizK6AYSjA",
  "key12": "4X8NSqx3P7b2aZdiG5QDSFYe5CaNMguR1imC4ZU8KJkDo4cgG5Q9hD7tRYzHRFuDq76XMphWzsyGFKPXvFsgQbam",
  "key13": "2WRyrL1ctDmxrMBgAQE4pfdkrpstBZNNLZKdDVButrjS3LWGBxrzGdJigYeCamCb6BYfmeRqtUPveZ7g3SFjdHch",
  "key14": "4Uc6T21YJ5aHpRzqRQMtQGLN2NmsMxA4kjRM5rs5FdUryekiye7WZftRfYavZToPawR1soK5XkHmPEzobBdxhZWY",
  "key15": "WjPXLTheJT47fUSjXhmEEbEESVSWgQ3XZat81EMBbJZZQEVZPJU75jarj764hbhwyHJU3KnEBmzXg56G2JVC9kZ",
  "key16": "M4KfnxkwubZQMDi6x1CfxLPDYQvmp2wbenpofjZBcpUxyEyBDhoFufUNFdgKg1zJMAXKZdgZksDckmakiMzmZQA",
  "key17": "EwkUfGHzmR8GHSjAzNEN2hiv9kMch8zMrdpjL8Qfs8ppjwgbT2SGuGZUSnSz65KABftufd1vgtGCdgJuqrzFTPS",
  "key18": "5wK2NTJX4qtjqVGXHgLSw3dXSExSSCvxyTaGRTtmrmk6CxjV8LEPRQWB5Bd3oLfvUviejh4x7YQwWDZ2WjLcf1Yo",
  "key19": "akyK2Uu8sWyfB6EdWeHh6zyar4S3Ud3kfcuc2Fmqm6ie8i9PVYPekhMHvKDYS8dPbnXYT2M5gzP1kVvReJFWvVD",
  "key20": "3bCDfnvyA4UP9BbC9wz7nTX6dbPDaXveR7KC2ZznJ4HyMoVvju5aCdCvqjw8Be3kC6s9ePqhtzwszGNbGGsGj55M",
  "key21": "3fTdqB1uC9XSpjmY85aoHNwXfEJtyDaUQjnMAmPqzqu29R1RnyCArZeSANx732gPdifp16rptpJQtuKRoNTMfTU3",
  "key22": "2YDUEzJGEybXXAtYkFtNvX7Hrx3ZwoWZHS5ckZkb3a5Y66SEb2Sfj5DgL4r7xvYPA7MfuVEwbz39mhLPT5aQ1BFV",
  "key23": "HiYS7fD2G3DaR4PVP7p4Eo4sjJvou4rSoAJxH9e5g6EYbaC2uqHqtXCDSmzNm5bE7McSVvoKdKLbzPvuHv8i5AS",
  "key24": "3g5qxkMaANMrLnc2zLuaLJM7u8UJ7oshi35Aak2Hm15BJwm5R5rQGnpsVkQbcFvc7TVGKYiYEwCUF7V92m1uqa8y",
  "key25": "235Dngf1QeV2my5RKHE16exxTSY5R8Rteg2SKFhQBhh7cdTL5X2m4fS5KJGBegajpvWMCFZTAXQmZMoxsCXMu8sA",
  "key26": "3n9QRxm8cdStfxMvPV3HmCS8g2FVZRXkHoWaRLgJFg9Qp7UJEvNR1xRkHv1Zxd6dt5BK6gc3qtJPqRcLcM7pLq7U",
  "key27": "kfpASyeBHQx5nLhpM7AKfGgvthLfcEUmog5q4FQ3HjySxsV3HjDA6EdvwUyd2fquZt9nE82kSmM6TUdRhnVFtVn",
  "key28": "zy6ixxYpcuCFpcLRiPy6EJwtHpfC4Xw2KhUVPVpgkCQchMXkv3iDQ3K7rDyRVsLAeL9PB6QhBhveHgZZbAvX6oF",
  "key29": "37s1nN15a7wSieh9pBHZZtoryq4zsSn6E1pobicSBYHXTmFrxcKGV6n8G9UzQQ7xMKLVM6GKW8bV5MksVSdWPttD",
  "key30": "2t6f1yi4d12q3H47fsFHRZ6HbN7fEcYAdhUddsnJpq5djksNR747DNJqZL1p7QAnWFhr1r8f2nRZ8pC4EDXHyVNG",
  "key31": "4kH1VbBHJNve5YNhMTsfTmWfnCbkP23ab8bGfWiBY7Z98PsJzA3tF7aW9mcMeSGaT6tiGW967VrV6DKc8aH18PjA",
  "key32": "3V3G3f9a6ikMEiAp1yUbrbva7g1AmbKTqGnMwGg6qrSUNjbqDTn9BHumSZa8bhEdeps1i7gh8RUQSfGkPVfWryof",
  "key33": "2MmQzmE9Z4vSThwSEfQpQkiSZtb34NsRp834bvZ9VkgqtFQGYhdnbmdXgT6pN2MWCr8rWi6WVT25UysTKmQeLDxx",
  "key34": "5DfrqXbCCoXdmQDgMhsqgF1XvHXZvWYVB1tvwSnvcGjrbc7B4qeMvxZanwVKnWkc1xxDpMLqh2XkgBPa2KxEmFac",
  "key35": "31VXcuPbEMbgBm3yKxNyXDH2hbxffKT9vN6cPdqReYWPFKjYQMZxcLRjYawrwVscA2jAN9Zq9AvZmER8zbRcCcPG",
  "key36": "3aGPvw7JwTWeg1GABU5t9rzbifgtMeq96qefYEbVMNRwGL6Zqg3yNSCPyWkV12MFPZGAnzTTQFWAs3wvLqb8ZqGG",
  "key37": "4scNaqRRkSJNGFU5A3pBMv64LHMWweaJ2v6hEmagVPzrEkLjmk61bCAMHcrvGM6y7YhSvU4QnqJQLAyUTt5oHoQx",
  "key38": "33392G4V5Yhz4G9zi7Y7uwUcso78HaZhDB6ihyZDnrVGMkLn9gPNHqXpvZQMdf2HDHso1xLi7oPPYCYtgzgCDySb",
  "key39": "2FnvYjhavtfxQG9t5TMYZgTu5PaKBYvZaaUa3dF2trKAWVyEqsugLHpKTNWkf529foEyiU4JNgxyYkWB5AEKxydj",
  "key40": "43qKAjovtw36o5b7KrTdhzvafn7frYyusUJeQszNd5Ta4U5k6jL7US6eJ9SWvCG8FKJZzZpWMSz5etX5UiQeMtrg",
  "key41": "4ueeDSi6YWkwSAHCzCSDzaenATbFHtipyYhuN62xApg5BJ5159GpsS6iU2B8fqvcgMsTFiTe2cvsZfaQ4RoAr7CW",
  "key42": "31rGyUm85Eq7NKVHNF7bz3NVbgE2P1okjesutV1krv8Gai3gxx3SH3Ds6XQBVgRqQo9SMzgm8xkh92GYHTtndW8L",
  "key43": "5jHZhS9KE4yEV9FmsdE9t2VdiHbA8fFBQ8rV7vUbgu6842Kkxq5JCkckrZa8NPE7FbpKiGP4VGmguMx98yNXREsz",
  "key44": "621RvbBh6seb5AiegfiKRN81ybfnQwK9V7MPWS4g2WFDtofbxAUdgcQgDK9W6CMgnjLieHgXLroL7VijWzDvPWHp",
  "key45": "3zbQ7to14oanwiCMV7Aft8iCyrfJiVC7yBu3ACJTqkaizNNwvaTCgAjRXeMMvUohq3rcYdKNFMEcGajmyDVK9ARS",
  "key46": "3p1pBND6zv79xYpCKZU7aXNeRZQyd7CHxpNPDbTMSCYyBBhN66kgEVTb36PhMy4fUTH8BVSGeYrCNZ7i9sGyo4us"
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
