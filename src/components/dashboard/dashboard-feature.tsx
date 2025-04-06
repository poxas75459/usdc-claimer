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
    "2i7NhSD1qSvmtx67CgxoAjSpkdyn5pBYfW1ZfH8AFAMATLmeADykxNrHeaM1uh9vWagRJkaGEXq5NPiwW7xGjB8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SYEUfd56mJcHjuu1GedgMS4AJSxm5yZfqTbiZKkf3T4covL2sQcTKUDNqn9EtgJZg24jU9TKGENu26vxGtg8GGM",
  "key1": "4AmF4WmsWVD9uaRx24iQED4FoSD8HX8j7XrnsQYy1GUCH1RvB3CGEneC24UWnJkovEEX2fHua8aRqN8gfzpVxSpz",
  "key2": "4WdodFP64t89jU2nHDvbnhfRa4SZ7P9agiSA3tZ87hZjvFxMBByyTMSGdzTzReknKkkakywmkh298G5gxradjhWp",
  "key3": "2DgRKwuffekEFZQX2J8BUts9dn1uuHMvg85YEw6isak8BjNUrRQcVSzcEk4coktTnK9uC4jbDkm95sJaThpD7kNx",
  "key4": "hQzCoVAGHdao5rW3iXdULyULes87ZaCNMa47wcERcR95rqx2NJkXTkCTTqysFFTB9LitmivFoWmrQJWmQgadEpu",
  "key5": "2P4dTr8BFpoEBMHM139i6PbLn7oPKLF6wscBe24s9LSfEf9q2me62ZaA3adKQdzZFuwcZcDAxLagBuzP2GNEh4Pc",
  "key6": "64V6BProPZWfoUG83Lh8xRS7oKp6fjXPrE2hkxL6qPc6aksNwM8TzvMJjmcCk2u5nLqe2mvQ4ebgW9LgcSSfHL6k",
  "key7": "HDS2HgBdWBiNZx5DrACfSbLUxpGsVZNKRQmjgB2FEgWCHuYNcdYvrVSJ5pbzDWCgj2SbuoKF3jcHBz37JuvvqRF",
  "key8": "4TDdjozQNr6uwkGSs2A6rExCSz9DF1sCZZAHG7XCbdGCP8rvByoC85JKHMLVWmaZWqqo1aE1u8nX7Ys44fq7Nyot",
  "key9": "4GPPc93qMCDC5ptZPCzRSU5MoNvsUhRxgi6ASoZxsTzHEE2HnkQLrSWeWDuawLT6DDnXrT3ptZvLS6xwrWsgqbma",
  "key10": "4LhysPik2SayBiN4UNf3R5oM8tdSj9wvZHkq4ZTSm177VK2q7dYFcZEAeLFNNai8BLkm1KvQicAWERLfrtjLkGqm",
  "key11": "2d1f5g6Mwha3xxiQkXpfe9R23bw9kvpgiRMAkwLsN4JrJtBocrKmCCtG7zZT1xDmPCCZzC1rWKw5s4hbfyxiEMHQ",
  "key12": "3b82kGMNCoHMcTXCRnkEj4LeDXJKFWy6zUGQZpweyBazpJSkbvuPW8rhz1yCP67cx7bTcWsgdTA5ksbTxh6zjzJb",
  "key13": "qSWVp1ZpssaunW2TUARbroGDSLmQBQvr74KHRS7PSujDJa8oUFBpbHSnBHGssn452KyHssUsYyKCafM9JkoUy9v",
  "key14": "4vscVrYFpfcBHLbjPRzzYNAwWBps2NuqtuhzmB88aMnqbb92Qb2fSzMBh9dY9rJ8nWKoqcoGvZAu9RieCuob9WoT",
  "key15": "2sjrH5Et2M7pC7Guf5S4QZ2MpMoLrxiMVSmq721rbrHVMcB96N1SYBXdnwzioCL7x3TGPCsmd6GuHKxkJnnWeNAi",
  "key16": "2VdTnvqMpDjZ6DZgQE9rU4Q4uKkds1wNGhMaAyic3ZR6v2eJ4immY96gywLKTPoxToTtukeeKzmvCffk9AGEYoAe",
  "key17": "EnyB5k9aXHyZz5x5AKzCysVCou5FPrT7zLYqt5TG8EZL5WCaHn5e9yEKq8LZbtq3AcWWwkwgrrz3k7z49fSy6rw",
  "key18": "mFmyAg5aFGn5dMRWLjZ6WTDtzTZ8aUxP4o63bUqexGMZiFHqbm6demaPPSXio4KNzQYG832Ubumxty9FH14yEgB",
  "key19": "47mzK2wKhWR96N3rgw91nAZv7o3BUBxvjPimSuS8EaPx2jStSZKM67jyVGySuuJjxH4uzhT1RNFe6jr8jew2ESha",
  "key20": "3YfFXfxqUGUWkkzQHM2CxuWrfgHX3eXqeFmxQjQA9cqWjbSNth1jujtyrXHLJMQtXEpRPNpRWovo8eBdAra5Y7KD",
  "key21": "3L3Bmf84bP6vnv3EQxpR5Q84WwTzAbRRZSCuXAra4eX7kWzmCqD3HyA8UPgcUEKt1d46wmmxJYHgM3pJZ99ELMz1",
  "key22": "2LXhj3fMByBjptS3pDqWA11LzChU7ciDp3ZVqHipjdHazNDYqAfoXbeqBg7Dg1EWLkKRuy7Emhbo9B31UYHZdpgT",
  "key23": "5DwTNXS8TzjtjRcfr67BeHHkkpYmQxmR2itfebFnM5v9z2mTo7k2q7gEhLUK49vDkV4bBdrqHM8a7UcrniEqYBtr",
  "key24": "5RnLfaNTZyk5kPFZ8HKTvSmzmT3LQvjpMLRkQdEU2V2An1BbWCD9AWLofv1ksAFTyj9fX9FvhZEpm6S8qaR2YxEu",
  "key25": "3MgeMrWHJJZGHZoBe8yT4WQJcyeQ4DXWyvKvc2A3tNMSNST1ws3dzytQuZycz1SnnZdtB74WprBLaVnkzMLaDhK9",
  "key26": "bo5ztaSjmKCNFKBJ7FwmuU6U1rpR1ch4MtJ3jEZafCtBwgRvzpZFXWyemF1JcAyMEkPmh9EcbX6JrjNZCsRTEz7",
  "key27": "AMPzs17ZXyFWkBrtb7zPDbuZ8RnhvnrAGhfmtmBjTAQLXZ6Qp5HLFojqtHXBtLpDaRmKoZwaAof1Tf82aYUHV9b",
  "key28": "5vSysy1vvHYbMvt1ToQALQ1kFCKy9mMZY67pk9SuycxPcwwiwK1r7hruytUQ5MK8AuE7gdJWxekQC3jqXhB9PZjg",
  "key29": "2zmbhWnoqaM92FTXBwaFMTfVEquzGDJ2NuderPq3Qf81FDUdBPfZnZpKtogZxe5UNJAK9e3bvuneuQ1MiEBs7dSe",
  "key30": "4tmqvCT7nfEvRzxUzFKZMa9UWiqVq3FyeHp1WzHqaqVvzs9RcggMXcook7aJX8xhf3Hyv8qBqhyS4ejmc2U2WjDh",
  "key31": "211tLjxrqJE9H22AYAenFbiFz89bMjUHoVp2xXXY6H82Lg964LpeSSsorqYRJW2in8dHcC17qfdqdtZJA8643jGJ",
  "key32": "3cnifikK1PTtiAiudVCavjJtR1WuJwrSvtpwYvWnR1ibT6SAoT75nEx7ehFgJqFAq83HPR3BHgafNpQMbkF3DYNF",
  "key33": "2FXdUWXrVKevqmRgEaDihorfpS3ujWaU2kLrbc9vaC9exeCHUX4VJkpL6K7Su4aQViq95ayi1DbFEukyeKD9KueU",
  "key34": "3WMc79BuRFViatgjRQpj5uiFtv25eE8eiG3aHU3mom3kAarZBmiHyXanzL1pyoBzPkEea5ak4ZUkW553qe5zreoh",
  "key35": "3pVmkhp7YnP1RhcxAmoV4rp5YojaA7jRQrPKA3EphE9CMG6QqBVCoQpQYBbqymYc9ME5QyPs8BSjd6SiyMwtFHS3",
  "key36": "5bQLYJQrcdAp8TbjmVNcWrMtHAkgWFygmdUjGhyhAXzQU9y4cM2YQaJjPS5f12AMdkjTsBkkAqg8UJHh93mMA4z7",
  "key37": "3HQjhNL62AMzvihkSV9xU61qtaV4tHYnet5dcoQEEqsM4mi6ANvvZeJjbZnv5jv4AwNrLDxveKmVSi5KbiqHV83T",
  "key38": "5NeMSYDfB6oYFgtS8kbShAmhQb6TmFXyKEyGJTXRZZzubdW3u76txvJKh9CxqzUST1vHn2UmWZ8PjY8EHpsFsHiM",
  "key39": "3ykfYbBCK8UMhBS4R8KaqtcZvTctx2KBkj1wJjZMD2XCMTnmnjsaE9ZQu7sKprHZQa8qpjeVqnd1rqUnJXE13rwk",
  "key40": "kMMQcJJXDx8FVuAFvwmq8t4CZ8MPWyyGfdMAruZvTeG6GKryYCcUc1ZoSpzc4FuFPEf2wYap3JU5yZFH1DwCVcb",
  "key41": "3sdvfBeFjiZMgxgM3vrb48LJeP9h4ohdoxJWh9xEZMCZDHo1vx6SxopenoZjJAfmNW2jXsDgJmsmPPm3NN7JLAZ2",
  "key42": "2RaJXXR6pwfCQHXmzzobiSUaS3rXNRQpUWUkFCSt4ywvL9C7egmR9GvtW6iVpWVcjHy1SvNiJaBV7bNsDoBwVRck",
  "key43": "529ymWqk5jLxerSjBHbgUUZ6nz5C61PNj2fdr29NchfW7jGPra9bKM6rWxXXpKpaqhpBtSRvEHXwFdxk9g8HRso3",
  "key44": "5u9CDM6JVDpeEqpECf285CaTtv2iB2rbT5dNUVufCBZ46rLD6PE2KbAhGbX5XsY8fgQRZumQBy1MGJT4mwBj7bi6",
  "key45": "5jXTeoiGmQVZPjpsb4APDUfjyJm3QmjHcaznVo5PAETaKiDKDsYGixsijupncDPBcDKoy4dQxsHfBBryYHd6xBws",
  "key46": "3f99j5gTPiypLhqpsMQK2kCJNbsL6uqgRDQbdBsb84cUw2E3DndFJMUA7zx4vygkotxyUwpJ1wVT6hd1KMh5dVXW",
  "key47": "55FoMQKtc5rFVCxo2LF7KXtUXSMweaRkDaThYm16MWE8UpKbXqNkvoGRWwJLfx4qs99KFugFkUTU6MNszWEw2wwm",
  "key48": "2vfN5vrSgKMyURrXa7JLpKk1E9yJSVFaYFpXVGWU15CjdDFoWq5MEsryhjsnJVuDGr9APCnWQHRhTX3XAM7dS3Yi",
  "key49": "YdU3YdHJhphYMAW1AjXZYVSRiFLW9cd6qNYJFuodHrcbCnrwg8uvijSGEkNPbtm8o91ctmGndQgwEVZSgYMQfJm"
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
