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
    "jqp4s4eyjmnyiUtaWiddy78MgfQg9FcxkTuFwAVLy3TYcU9wYcwz5JPhAfzRQSNmua7kyntp6uVrJopdJ82DysF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o6fpKpqcjzXp1eXRPbuC6mHnFoZ2uwGFNx8zYa6F5jXQeNemdAKNENSYCQHiuLxgKDXsv3ErsUX6JdHKt6aHZVr",
  "key1": "643t3abJ3gd4vgoM9UjHFx9oFwvbsxiwikTNvbnNGYu9nFAzT6HLtfccVvp1BavCEBtaegjPXvHLmmKmqq2cZqKf",
  "key2": "zVZRpUHQCdJ4mpsnvMa6LwPucoUMUM3Ktbzr9ATh3br86xteHrmTDqnxiudiQrCq2Ri4PQFdQZFzSi2RLSzCqtg",
  "key3": "VqAwvj561R3AefvHLsQG3BBWZdAZFh2mxRr5S7A5K2JbPYya3tCre9Who8QDVsGycniPwqmJ7jYSRLVyXA1WRnf",
  "key4": "5a6ZMWdkQ7VMg92umZkuvPbJGmtPimeYYKixAtLwm8yd9evxsDeW8WciTafSeM1NGjSdvgvstkksGZm2hEsQ4CvK",
  "key5": "4h93weCodLg1j7KvFMBFsbiRQCR5EASd8enfeeb7x77C4fcwcA5xKMX11nsYnTSBxL3wU7XuRv1uG5fp6pPCpTR6",
  "key6": "5Yez9Jtvw4vMqbd5f3tyDVb1mXJNeRb8yYeMuYHRvp8eYXQxkSfS9ZMbcAkrbBRqPFN4R4V6AcK7yKKcGxYqQ5Tp",
  "key7": "UfVesiJXMaQuFYf7AmiZFEHj4554AFVGTgERxC3RWNY2ViaxA3NpzH9k6h9NH5h9PPE3WKkAaa9tcV69sDEvAHK",
  "key8": "47YKjYb8i2pc5HYtwmrSjfocfreeqC8SFtpTsf3tY27F6o1tctHGwZUU8awd1dLho8Kk1cnE2QM2HtpAjisYTPvP",
  "key9": "4DbhUQjynLMDAX1xHxar23A7bzjC2hQJ31nLJxFxGcAAGCNGJ2z2tk2AitUikaMM8qNRofEvTeyxEEBD4PaH1oEF",
  "key10": "2iYH5pzPamL615f4Cc8gMU2FahyvurtozoZjPrYg76obcdPm5kS92AYvDtqJCxhEvV9G6CfvEXJprrv34ADNSVuF",
  "key11": "sZvqDmBD3GYxL4JwBAsApGFCt7EGyXMx4LsiVepHsm6U6F45NHn3q45YpegCfbLJ2Pa5Qkr4Nxn9Ebw1md9qyd4",
  "key12": "3qpQ3PjVVrxJoZUvuV3ZJF4W553vt5XGGhVP8ZLTt9vnnvLES4qHiTYFaddFm7aLfZqtS9kzR97FXtMXQM2ghhav",
  "key13": "2totuBh8CfX1fxcBiqAYM62ynTgmDBiyANTRRyrTGQ9ZsNrN7JQLiU4GVQ8YgZBK4nHpX6Jwep8eYHrqks3y21j3",
  "key14": "5QkHn7knYKVnd5n4Fw1vHciLSk7ykFmsPxHPmmbU1ocXMAqxVrA8fvCjZWXhaweYpQy81TzPnNoTcpGEJofRmpjm",
  "key15": "4Eh6us1nUya1EnaTHjNawmpSTxiFY2QBo89dQZJaMGSNHieXRrGNvoqYYMBnBA93QUVkm19oxoG6iDzgEc7cJXwa",
  "key16": "5qow2GtN8HbwGaeSvoVRMZAS543kMiBGvEf5VYJRnPGJk6pRtyziziqWdbMdy4DpzB42dsKMH87L94dRGWQG2GUY",
  "key17": "V3pCDgb6NCfqXNQsVA7V2uZRJq3NogWhx5qNXQNyjfDPfssKSVwKWuEA88VMeftyiv6tXPYXZDeBfdcQXaLsg8d",
  "key18": "3vwpb53WoXqd2zwKzdGQK9yNs98VsRUNzyoGppctZKjJiAuCzFXBAou7AkM5u2NH6inc1U4G3cpebtnWJi4BPzX4",
  "key19": "DpAj2vXzWoVZ8vZNxzExv6pqSVyyfw3ZJL8q7y2CNzSrDQwfpAnXAYnBmRrguS7RSh3KbgyT1fiAhZ9RkF7TGXJ",
  "key20": "2c185z5oKEVov1etgqtCr4eNtGQj1Ggiemghjs71p9BkatATr1fMvxaCwUh34Y97dQ95EYjDUBg7yRNwcaankihP",
  "key21": "4yL3jKaLVHC9d3VT6WWvEkmWEo9nn5zpZrfotgFzk2PiHgEZwcuQ4jBg4jQQHe11JXXAVxVFWC6jMudy5tQbRX7A",
  "key22": "5xA1mNKsudPyzJ5YResmxSYJ2yY7ffrpW9YBH4QEzMF4eg2MfuMYTZ3pLqGAFHzbMTE8ozxxQbZPP3Y9Ea3VsQAq",
  "key23": "4uitVRPwjvoZMdvbP234Yv4vAChHS3LqVyZoJyHrFz8Htq5f1atpPfy5WqZtZnyboaL8LcHQjsZ3oabSJwm76o7E",
  "key24": "2XSHfoE8GyNFBXCVgHeeyVwuB68nyVjGdg7a5TuWJpvMUAzkuceWoXknjatHz771C4vdXifCEi1PKE7PjPk14rYw",
  "key25": "2FU7B6Z4BqTXGQUiNbxp6sTwy3G4thZ4pYP91arfDYmTc6Bj4HvXD3H5aVv22M8dPS3FQqBiawDAxNYq8iSM8QWh",
  "key26": "3uCJurAyUBs6EnHKczw7YnVWbgiYBweXHKtXXY5y3Bccp7pPZGCPtD5csDLSy4V4Cfaw6uBDCr4bWk5WQ246eNuM",
  "key27": "5TAL3v2PK9DKfvknAxw87ou5ASdh9BsrpLY2ttRrxrKtgGSiQ3xvXqWHgEivz1Zo1itzWNMdSK9cCfYzZoCiKSJb",
  "key28": "32VERBF3BQhMRRPc2E9KezzbZmyu6HhnbbiGiiNybPEUeSpviLyaELMma1e3rD9RJDtZpA3UQq6NUzQ5PBqfds9m",
  "key29": "5GKoPy6YHQ54KxKM5CGUsPbpEp8QBUxjyZ17YBxV1iTwEQhuzuS2NyYjpss3kwpg8sCavEE1576GaZ3w9KBMnzeU",
  "key30": "4GHEVGZEcXwZkJuFtSKBENLokTYLtnbdAoap1y4PmZR85aKppD97uwSJnjQ3jFJLMVzmd2hkr6mwW3sQzVEojTYG",
  "key31": "2u5uaYJv4NVcLMyC8cadoQoH6YcbC5LEsH1UtdngDQoNXF834hSwspGnn7fZrjN48imRY466KxgUQzhSQpM5xwGA",
  "key32": "yiL8vWiKLvd2LPKbvNdANEVrnF7TcZkXkXeqvCjKs4jQMknUc9XwV7V3fDPy2AJu7FVsWM2kovp2ux2Tes2Jxim",
  "key33": "3saCv3D2hAMcWYu8ttJU8b9m8jFkTgdeuHzYHMScLyzK2JycXjEvhX6otqNJXqU3ic9e6rwDJygPxdB7fATWzafy",
  "key34": "42v8ghknWCnHL9CP2FmT3Njw6uNX452t5eXfu1SkaCGb6sAyKVnv22UjSbqVBqtwdgf9YdsYZE1cPhGri9PBBGcF",
  "key35": "2fSVYX46hj8JrNDtd3LqL6KNugEUmFFbEmxbEeTkT4n2UT6xvdTKYBvenAxLDREi9oD2Ej9ZaUMty49edANT1q3E",
  "key36": "EuFgZZy2U9vi5BxSEmAxA8rr2kN7TzGMWbinMPugPxS2wbyrZrqcMDp95ZgVq3h6QBTqWhBcF2N55yy1SUVDqHW",
  "key37": "2X3ujYapTQWc36AJuKZAkuoa8Bof7MLeCsGx1eS7UfVeBdE7iU8KcWQ2vnwzRZSM4QoaZQxTr3MaVVXxXNoXVLaB",
  "key38": "3jzsHFAEjqMnAsmyUXMUg27ps3eh16AMK3u3fH1GGUt49LqA63bLDbWmgEKWCvuCvKLH4ygBUd8AYsogWNVzUyDn",
  "key39": "3tKcMJ6LthyvYr1H9G8B1ThT3LB1MiqnDM7ihFoz8jfeKRo359uHbZW7CnkoTULbpxc8UfHCHbzxzLQhsedHDDdD",
  "key40": "4CeemrfZe15XnGsjxX8CTVkstxBZhAoih9wP7dB2hsFqcWuhbJKujnPuP36pFoox84DnfHYQrrjVbUiEatAnzi5z",
  "key41": "5SB7VKv9ZReG6fgdi17xsWaYPXoJebMVUGXmcTVQUdhNyUVQRNnKoQL7kDndBtTXJG9VrA28d7v3vbUeV3o93KBE",
  "key42": "2Q2dewmXpaC2Du85QENLJj4FXEVdBGg37kXfZg2xXSW4iscKgdtBzDpr7w5UHthQ1d1eqk4KwGgwVYje5CpcSY5W",
  "key43": "4SiCpQcnkXifeFCTyMEptFerkRB9Vsd3zZJ8vkf4WX5JqM3vqTT8FWT5posgUEB9V7EDFCFtJw6jCeyaHx3XF73W",
  "key44": "5zqDQ5bviz16KwroQkWtGdtopGkifsqKDXBwtFsw7ZvYbaJnfRA6eZBf44WuAN82gqQK6asEPtzWNWW2Aym94EPw",
  "key45": "3qTTiTUE11VvZ59d7MfmX96rjmgcKA3Xehx7k7TTMwqHWGHnTTMoMddi3AK65gywMYzL2jPs2vhfFFUeF2AELrdV",
  "key46": "4Etirso6GtSdz6wcWeQ1tSKh57JorCumvj2Jy33yn5g6vsFdrjRpe5phHTELRT9VqpCDLsQCGtCUKCUPZgj41rYh"
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
