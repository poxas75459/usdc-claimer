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
    "5Q3ve7NM7tozGEGmWPrVHf1W8cozB57EqeQ9Lbt2u4yZUzbuPRHPaiTLTk9Kmudj9rVPS9YmFT1iqdTWmmRdB9oD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XG56JbUR4yJECsfhb6DuMSyQ6VrXxYLR1Fa6fheJE6GkfPNVsTyPXtqSemrvfEV3HuLUvi9V7briiWLZb2xDZms",
  "key1": "twKMzVrBn3Fb4fD6LgTaJrqvawC8VeYwRKz6DGRptqCjLCXvghaNE5WtAYZiUjTLXEPnRhZTnG9r97chvrX4GSc",
  "key2": "3mj9U2ndiavo172mMgyJrA4qdves84TCVPWHMyBUfquwABKafyeJWpNHyMR1KPRvgqnUoUKWx4hNUwbSL4kD2PsA",
  "key3": "4ZiRUDbBKxtzDor95CM4JpRdv5u1RN75e9bj2bKk2oqUGACq65GEsBoekWTgK5LyApo2kSYuAAR3KnqNUhBcxWwP",
  "key4": "48TA4DodCDzgBBZVBnuKHghsoqeVRjATJ9VEMFWCRVeRsZ7rFqzWEoDcveUPgQWAvrZMmAu9m5JxFqFYv1Z2Tp8J",
  "key5": "4nVeRvYR2CFtHqzXrgHG3tTFsDhAbcviw3LcqCRY4mC6ZYz4XkCjYj3JrmpnXu2YVuNybJ1QdxZhVG7pqTdMhebo",
  "key6": "oGU6DWNczQBLuC3pbsoxMLzHQ9ask8tXiCX9PAu24c81kitamAdPDnw9gwoHErqf6dg3BtkDrQz6VoKU24KWseo",
  "key7": "41TkyPw35HRfvJrCavDDyDnriNmx85mTXPsDRQNxpso7ovfjK2ithbk88AZgrfRRcvRriRiedf1h2RhHgqFtHEye",
  "key8": "STjiofUJCT5wk62rDXfjwibK4JBnsHPFs9phJMH3VZUn19o6SZMe11Uah17vGmvvC2JekzCpZ6rpuJ9NyNGBKub",
  "key9": "5R3vvNNoWMZNGwyqMFQpPKGnx6ig3Zf9d5xmvGGHbpA9RCC6WnSg1X9HVzZnosVteGPqTMRcKgwErwAaTGERQ36v",
  "key10": "4At9adZeAtUHcceRBgAHqFCNtgJEmAMCdZnENwiT1q3Kaf1Jmq55XnhHprAEfz5NSiNMmyrnrGHmHFuajxHa6pyc",
  "key11": "4Ga59YFJFgA8U3XE1vN3jSpYVpNzQicxruu2zFaEAb1ffmCrXY5DTrCGBQzvMB5BrR3DBkUKaDSMsT9WPsS4rSHK",
  "key12": "2JeoMdsVrY3KCiSGDUfZDdE5YrXrn4oi2dpLPU1isFLc2BMojXv98GK4m5cvicfVPTuZDRNM3npQBmoG2DHg9VWV",
  "key13": "4w7BuN2pqyPoFojTE6NrXMzbne1reocnL7RWB4Sua9deSyqfaqCXCq2kWRNyiBSTYbkhig26pH79EPs6dhocieTa",
  "key14": "kmTH4db2RbR7u9pCKoyozztTW46cFSMeadZb4Jv1w6Kz2LVQshufmZNLGgVPspjznKEk4vCwXMCDBJeSS8VLDkc",
  "key15": "5HvmNcFHr5ZCSs7oYcvBwbR5FPm36KH78XB6ZZZQgEqba6hMque8jo6fPAvWYCuQ9EpHJeRBuK2NZbYRMUTpCiRH",
  "key16": "4bCK2ckhhRjMxz43ci1TrqVSGC4iYegZuQu2iGrNuy5pdXUGr8JAuQSCx1LCyw1q8KCKvpFsPZWLHNfQqnir1LUr",
  "key17": "4NLBvUNCs3hpeQzdDrg9YkvyG39dHBtU32PfaB8ksv8pB3ZweiVQHDcCYXkQm4PZEuetJe2kodLNrqLWxts2JKx2",
  "key18": "3fn7AmVqNvjrW5uB4JzvRqr1vx7PSiXnNNDRcyjrqE3EoSXLDYE9MCDKbxA54YSCd2kT7NNXhLYjgoXfenYZ5WK9",
  "key19": "2VFYBHp2JadP6bzY9sYLMRpLTqJU617v9fEzx2PfXVjmcuxKmrtSyKnvvb5K8m5SUMfdKr9WpzLae4jPCw6gaByq",
  "key20": "2kL8wuDCwkTdUuHLjcwRZQBkyBAqpvmgYJdisWWpdpQFzrdFpDuoyBRHHwGZXe6ewyeKvczb6owRdczhRKpKpJ1W",
  "key21": "2B77ACXKse6kSWqKCyaNWHKA87aTAhJWpsQ2ouLnrXpReAPVDLaqj7tekqWg7JRjUyHGdxrdb1zEtdXLfaUtsLay",
  "key22": "4NePpFSsMkjTFmhL44YMaDKghcvGHq9VdsMnqNeSCs2r4Skj3bNm1jrwYnyoUj4PYesjsuLaTbjN8698ysSfWyeA",
  "key23": "3EimM7VhjWfEdeMZbFerjfScNKJ4pMqkyyWiXqVKEzbQxtM98r9vBreUGUbCwV5LmFMQm8j1WKLNvGeXKZ4dfy7t",
  "key24": "JXhdAxdJb9UiDwgesyoDPaSRND3QrUAh5rDee1bQbhNSD1j6Af5sqtLhHie59a7HviWyZBZaLiWbaob7dvPV83x",
  "key25": "4vwEtJErwdyrpcntPwguxcta1GaVDdAKpMxrK9dgjqXc8CbNeEv6PVEgku3o3QppepVGyJkw5hvAiUTJ8TwwqnZF",
  "key26": "XrYPMU6TaZzqL4w7G2EmXM8iGQKs6p7aGR4Fgq9AJFxkt3GHUG1Vrs5qKoCmoaDdhGZdNQ4EvBxQbfbe9ezb9FU",
  "key27": "4gGrNrye2C8nHZBEvw9foz1DQzrcAQfHGsJHjGZsdBKzbeGoTbEnNZ4asWxfRWWVdN2k2w1YT5sTE3BWTkgbd97h",
  "key28": "61w6fSzBo4geUxGGVYRCLALfYKVGMHjfk5EmZSzYDhiiWb5Gtjo8WAQpwSWb6F5E4iGgiJBJD2aEHLWXCpXCogPJ",
  "key29": "AaCfwicfyhV1sHN5NzJrDWJXrhTy1zt2KeyR5ZQosVQ7T6iFnpvCVueyVFJhNhbTqFHE6aDuZdaof9VWoWh5F99",
  "key30": "5aAvNbnkVBCd7nYSFsMEfnEjek3u9jqJUSyoKY8Safd845b4k6SBzJ5MtWpgQiMe2L4bX7zwNBtbSRSjvo5qwQbA",
  "key31": "3cH1XK7KKt1YuTHCQu2HbwZXi3Pfv4fQ9hKknnHUCgbsiLMHsYAFVYQJ8WN7fkVWgoux383sjrvr4co1yMsmU7MP",
  "key32": "NNebCaei177GKbAadNwNwWJbDfXEBfZwEVGDW3FPdvtMpuWLmaxZakZbPUF9GAsNhCNPwx5kqDehB5fyBdwf1Z7",
  "key33": "3HV6z6MR5xrUzVSddKhXiAj5YAsUH8y4p5wmSFhPAW9Bnc3g6sL44pofKbBvukKnCH8fkdN5Gpp6yQ2h7Y9Kv4Y2",
  "key34": "58aN1kBfDrU2xSutLdahx9UYxDWGZZZfMRgKfpQVH3QfW7UQrTUHR82drPJ9MkhZRV5zz5S8TKpH8TfwKkrr4qQ2",
  "key35": "5jpcnKP3sZXKMSQStiUyYvq6qUfJGvJNi4uSBQXGV68XgHc24Hp83wenBcexoRZP2aqBpt3s57osH6H7MWwKhjnB",
  "key36": "5rwUYyRhJnKbRB7FNRamdG27BEojTaNRqQHBfv157XQXNcn3V8cT8AGR2uKAxumzocjhj8xQMZEyarsZ73pFmcWo",
  "key37": "2p3eKTPQZCqjXVKievLTEKRDdqAYgV5Jx1WL2F59pV9JxRWJJ1W8SppGSWmgHkQ5LJ7WtC9bUm1VW8AGpkRDvyZK",
  "key38": "4m2hAfx3mCbq1XvK7nSgQGdhPXaX3otwwrAU24BYL7xEb7vKVdXwUM97MmoBaToG1vjW34ZY2qMea85n78NUfHpe",
  "key39": "3cpT6eH37n6LbRV5aXBC4auRF7fgtGCSyo74BHpFMZuCZSpAzrFQcuMUZGpE1QPhJj1d25naKzWtuoEavb5D4BKr",
  "key40": "3mcemxehYthhaPZkS9iqZxLKzwRqNwZphk1kvKYsgsqrxnoAVqd9nj9bqYvVDURWcQHyv2tVGiwUZ8ZwgDKjvzgn",
  "key41": "rEiU6YHA88bQzekj5rdb7GC6jPvAJv9WuxKDhtNHQhn4g3MrPG5bGUKKqx6FtGVvJMPkcyRgMp8WFwZtAoYrpRz",
  "key42": "5XHpgmsX9zBTDuMbUnSqWu5DyPXDvjvRjXfppHRcdTE4Y7Mpm1KyouM93f31uUpVWEDRGLqxM6Zg34FZnRe6u279"
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
