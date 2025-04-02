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
    "3NQatVQ23aQzYTZ2S65TZ5oe3Y1raGGDv2EPbS39DinMgQLS4oEVYQe2PdQ1e8GPEz5sJGymoANo1kKyLXPvGTaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26LsDKJDvrp9k8eMPDQ6KQ9fRaTCjp4vseBFAJsFx2E6fLXMTfeHvtuqYBSZcmsUFZCGDtGPad4qYmCpCsfHmeiL",
  "key1": "3CUoEkSy4aPTaewdzmwVS4ez4XZgJqjReAeEKXcWnArHyt9MeXPr9iFPVcPEbffzSWfn7PqhY2e73VwTzRPKm9KU",
  "key2": "3b2swP1DkuitQqgPzD5FnkQMERiKDuNVCNbR89ghVj8JWdmAxbgShQA5q91MLs4j64Fm8kazY5VaSPGKAmeriaSM",
  "key3": "5emJoqtYBvTdoxmi33u99aPNYxdaSDgXM57oUbcigx89SHXNVpdHcqBBCRTGY158EyXzTEx4qatNJBR5nRR8FAZU",
  "key4": "4cGSx5PFFhCNCwVSKFkzuhKSBr9yLfZLZgbEz3Vqyv6CKrmNiDjCg36sBAgYqZgdzNQUhaQX3YbEkujcX5peQeJc",
  "key5": "2ZCcFo1Pz7dZJXZ821yuxumiFtMMAXuFBXsqvHh9bpf2QzMwS5eqswjKK2f3LKxvzWuY7bcZoptG6HSni4bKPuLM",
  "key6": "4gSeGSBazXURJo2Bkw4f6xf7SPGTNtynr4TA4y4p55d4tCeWhCMoJXBfwErrxz8nuL7rE1brPWqHnW9wZizWizcU",
  "key7": "41edj2mxdc1qssPYpkxQNuq981NF8t3bXPQynW3Ue6E5dnTxpkdQeKNLkZUJRXWgKwwqAASARffKRxETEMiMK5wJ",
  "key8": "4YavbfG9uubzVfF9jn16wRWeBgqfQEpn97Rrc5T3wghnDkjwEa8vNnexdzrmiRQUwAbaxBBDoiCY9tw9uktWvDCt",
  "key9": "4eqyH4j4JUT6YJgkcY2zaUuGqTdjcBvmBdprnZDkkpjisnRYGbsP8vB5LMSeeWfGrQi2uBXVtCewNk1Us4tx3pi4",
  "key10": "2nNeQiEiwG3vWvBdHobnQqs5646QiU18pkXYx3MMU33kxrsNbc4rvzY6rUWxLwbAhRjT7YF7XWHCNoRW4aF4oUhX",
  "key11": "5QCHrpRcBDmeEqEHHk5i9oebJZaEA1z2wbrNFiEPMpHY2EwAUWCZFWFZYiLKDPiupmMxCwNkuN7CPDMYYRp8sZtM",
  "key12": "4tTpadQXsu3nusV45orc192SCrFQ3ycdm4t31ZkktVTe76mJnACSwUtfnv5FRSdawajFszEcYxxkfbrp9G1CAQ7Z",
  "key13": "3mm1xey5ymPUBLAcFiG6reMVSY6SekZAK71Y5LoSuuxJXQXmB9q9g1E6oCGMqBnWhPboZpcWgFx6oz91DrQYURZf",
  "key14": "fKipwuoMNYJckQqwRNXcTtdg8h8Cz3cZBCostGK1uHk56PmeYBEH2gURuNKKB113ZoaUMPCLZ9MvWTsbU3jp3ZX",
  "key15": "4brkMzbuw7VqftCKHPEjg4YnbMW5WWdP13LSCw7n4wEuxVzLRrtMNpFBhEpRmiA6p42i4BrzYbz2YRvRojTEqy9t",
  "key16": "4sKaRN48Ks86kca4oFoczVDTSTNJvMCtEYicdpsCo5R25XB7Ken9eWFgsbCBxvbCYjEutwjqSd52Uv2KQ5njXwEU",
  "key17": "5xwTBZUG8kujESiVKF69NijvWTVAtgMzWgo7928k4aVtZcfw9bHPhTtzkRPfEk6uVwQbtYtHavbTykbokC82wEgp",
  "key18": "5rxzjSw9Pfo2HXVEEr4tpMTbC2DfKEPvY1enZxw8qZA1B94T5aCY7YhjaEecW4Em33YCmEPMMNj4mYnNm9zhp5q5",
  "key19": "3ynrP7T4vcC1Jbnh1hjYzUgq9PwN4ERWbvrVpnxp7RGJESGtZPBMfzzntRXJpWsVxRvC4c58FmYnmqc54wJUvH8S",
  "key20": "42EEafk7aFTQeQ8KhfV7kFPShwgxo2Wh2f6kvHGN9VeFFUhF4vTW4zz8x41h8L2meRsDPPYMf42Lg83CLo1xzHxn",
  "key21": "oaqBqbUrtFMEbKWLppJhCumY64pYZho5ZiWq99saiYuukkPK2yLiTKjhnjvS9LkTkuWJb65DpMaNxDtGxrAnbjK",
  "key22": "5FZ3wKzxsMYLbzchdoWbv1GJMbGjYYnsNCJKgPrte7oNYndFCURC7vtezcy3jjFXhadvCDu7XeKKPBhPP4a5PVKb",
  "key23": "5o6D6hVN7yFebxj3A4uhfF5vdinXUnvxA4THWFZL5zkTxKJy1PECCYQ7Jv4yugMGjpjNhvbqf1whvn6fQBqFZduK",
  "key24": "5yrZRdxgkuKhinESdaqkVu6uGiq2GRWHKrRJzfSkdU8RYLuhKGN2TMSBj1Ut3fj4ExVJFvk9NyBrqN6fhn5kwBce",
  "key25": "5RxaucxCLVjDX2Jy4NyQNM4cbFvVzSRRThifzjdq35fbb7dPP5pesWTUHCTa3rjUKiPkD1UrvrqCZYVSuBr2jkbt",
  "key26": "5e7PB3uuyzMXo2fxvpA2UgbsLijGBo3YHqn4Bpev3jTP7em9GibrcVpg6dxGm4MA7qMyprYXHHT5SnMQFQcB8ZFo",
  "key27": "2KVYxJKSs8zfZnbeqZSu4BAfpNL9WfWQU4FJJ3rghuJwtt5Nj6MWtBeW4V5m1zADLaaxVN1W9Ku6YdHRYSLjcKp4",
  "key28": "3EhuPX6afCq4tQhZaZ2VDd7UimWbKtXmsq2cB3vT2VhSrpXJDiwTy49FwS45kERRQ4pBQf7Kp3P2hhRpXQrxdYff",
  "key29": "44UV9ApH9q9DFf2pxKLiirpfLykd8vEAjxpPmMxuDw2jn5fxWkDuXTcgLf4E6nwtF757ZJRtpbZzXn9np8URxVLG",
  "key30": "3ruLqEUdfwKyBLyS3RYCqSpKfaPaCH8V2or2e5PGRYBuun7mbukNj4sVv5tSC33PW6zVKwc7GEuvzW8nLoTMpVV4",
  "key31": "593R3btj5256AFocaSraFUgpBowgCq3cqBDeFJMjqAwFLhHxxWakhN66nT8kAP7cQC6zjwMtnV1JngogToQdi2Fz",
  "key32": "4DXHb6hVsQsgFiFiTBXGWQ4Rv9Ue3ZHeGpcJ2GTdKm3NBGQDxN9fXKTTszfazvWRRddjWs3bpHQG3M9LkLAdnT3i",
  "key33": "4jhszicoW1HpZsJNQYge3bkQx1xYTM1pvCZgufYJXzVve9uT6hxPhxcEYuv1tBz5XXBMqqvT3mw9sLeEW4HWTVYV",
  "key34": "4AEc4qvGFeD5X9YkCASWzdTZTfuLcEWNZSCmcpNpJ216XBbDBkbVhMdE3tjYVRQvzMfKrVu5xmHwcQTo1K85mcMn",
  "key35": "4p5ZMpAUttmc3DB3x4ZNEGvx236vCVKoSvwEUNxz6jfwHA7xS8TZVbPp5EbDofyi8swqDFxbziWbuPPubsg6FR69",
  "key36": "5Ffs9NUwjHLPFV1vizPk6g2DjnoA7Z198Ttvfps92ftixuExtJ1TvL7oVHAA5JAixFQtMXG9wjPPC5EUoV2F9eYr",
  "key37": "3yS57WR2UKVoAxT1oKh8ff7SHzk9YutMcCWxFLALTMnCcGGZ12NpKygHHr5FsUMSBogec8zcG9TBPTskzi7W2THd",
  "key38": "29yVmaNLJBXGXMTjRg7br3iDMNBS3PzoBWYGNMQr6bu9FzDLGB1pg6NCm58E9rb4SNaJ3codwvkTWzR2ppfMZKPS",
  "key39": "58jzz7aKxhifqD88fh2bPZxh7XsJovUk9bcPTMSLNKxh6pgf5HmXpdy4Ri4Ycjv32vJDxHLzRkf5J3foDRN4aF3J",
  "key40": "4fCokwFi2jS8nN5uZp65yoniqi77EqFSdPbrJyK7yiY2xXz72rHK42oPJWismYg9nDUcoHKob1q1VncFVxmpmKqt",
  "key41": "4H9vprmQH8wTvBcZ7S3y7QtED5vghTQCQK6gx9yefXExLvMj8br6erQaYacQnELRDLh5uvf3xev24CSYABCrCEX9",
  "key42": "5b8ktbA6be2naeBEBUM4J1SDb8zbgaGwd7JKNnWsQ2iFHian8CHgNCXYk4yMKTMja7cQuqYMk5gHRFrLCcn7bkQM",
  "key43": "sBcwmKec5uvK4Vxt6B7JbKJZLJzRtEmZNjHLLoy2tbvTxUtnxMjxBDdru5pUeLD3abBoju45GV91qUbxtjuFWrD",
  "key44": "3iBKQz8wpAuS4Eh1P96FQUpji5FkyWQj6hZA4c5QP6J6cY2gvypSeBFnmcvJJZeBfr2WfpifhW4poVjQ7i3U5bpP",
  "key45": "2Fj1LJiSJdwBE5r5bxhPJ3unjARGipM4xLiHCsaJ1g1a6a4ttZVBFLuFRFJa7VCrz8EbQQZ9PHFDUyYfDwcotxML",
  "key46": "5zGBg4NYMkiURBuxyfWtVQEaFyohvMVqFDvnrMHKWuJbJTC3TFM3TRL3AYvWEqr6itfqYA2VczzbJnPeFg8vhKK6",
  "key47": "2xkETkMQjuCBXf634Sn2sfukN8r4Tzi4wqwT4GNvXrQDsJ6AKGtJsD3ZAowdFQ1GkCwLMmeJaFFuzerEbjgcmz4g",
  "key48": "KkjzT2HeQnzwwgWrUafxg7etZgpt7oiLQuHcxJVP2yReWUEQo9yk6UJcLZK4PoRBthtu7VKZ2TGfymE86gGq4Zr"
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
