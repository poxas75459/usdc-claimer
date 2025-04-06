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
    "5yarS5QZ9eAU6QgEi4kYuKNZxDTTdCHEXGRiiA4hUjgBSnpJ3RAzeeckFAKWBoX3mFrnappa33rqG1YAXhtTaTPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FB5C5stMhrvC36wD4VnuRpnmTnFF9yZEd4ETFK5FbPfSpx6VeztbGjyKBAuv6g8cv4fr8ew7eQu5f42Vhj4AkKF",
  "key1": "54rjr2KUskJLbmaKN7TcfEKaJVCNZx3M9sCvCmB6wsNZCT2faigp9YtWF85cpwadQhPnRTEkVsVk6LDagTanovfu",
  "key2": "hBTcPYfktck864QzkuFEjATw77PgJ6goNzPhpKhBw8CXMiwcdRzGiPs8Ms4c53hkC84aVXdBqxL1mUvy34DGapX",
  "key3": "vmdvm4WtppV9gmjQmsL1kjZmJighXi7mRfNue4MyLeJix8H79XrEu3LXpjqVKE9JFi5ok6FwYEo92sHQhwsWP2T",
  "key4": "5FHTvHEsb9ZbwV5re4beVVs2AEihAXF1tysFCHRGxYn9Y8hTQp3391jANuac8dkPV9GzLPyg6gE7hHoAQmt2UCG1",
  "key5": "5fkehjKSS7Bv81m3hQ5uG82eZmjod1zEXd8fnGdeXcMucbwH3y7TQeswJ6kyFFo2wBAjgMvfy8nh9YX6jSyDxcYy",
  "key6": "4jVXG1vivkxiU4ALRPaR11JuTZbYfawg6ZRnKojrhQGTznq3AKYB1wo8f45KxiAUA4i8PNdysasbJ9znha76UgF5",
  "key7": "rbnxZR1S1jwxrbDcCMh9G696Tqc7V7Q6meew4BfkCKzMiW6bhTeGhCgHuRy5hwhHQqbDT2hL4tcXhXDeDgTC9Lm",
  "key8": "63WtQoxympWqA7XUiYYkDaUsMP6SaHbot3yWoSx7nANyGgCSLvhU9xKW3258RaTrXmrGh3pTESmGDTSxQ4khTwdB",
  "key9": "5BcFMbFjH2DUgmHwvkPVJA1gRZUU1nsutPNHRmmZT7detdFqHbTmosMdtGjYMHJbXwSL7qpyiopcburnCNSVo53Q",
  "key10": "5mbVBwfTY6xoLFqXfMWTAg3Rp33s6zNzYXzS7QdX279ymPt9MyfqL1qZXbMLdsV9exAvBAffz4TUZ1Rgo1YZXcqo",
  "key11": "4Y46EoYsnsUxgnfQ5kzTyx8d2VZjSaD7KLbYZ95Pf3inkpZnJZGp5YHFy5Y78BYSJHn7wUhvFWjCsF8s65DPHjVQ",
  "key12": "2Wj8GG553v9ipVncEzo9dvU4boRUAHegnwtHFZRH2FNTSnNoaBjF8MHtXhjQRi6ESLQFdA97jCDEJwLRevtQKM4m",
  "key13": "3bciXm3rgQcHrY1JPZC7s9Py6AejfUsN4s2zsXRouxXN1GgfDTwdwWQBfgBtdBBxWwqJrWKtbhN3VNuP3besbb34",
  "key14": "5NMyPeB649HdoShMd36736EjDzJupPvk7gkuFbzrt9GhRDd2XPmkBj7JdqH65yxgJ1xCiHipo56UUwb3razuXrkp",
  "key15": "5Xvpw8XSDpGUYCf2GBz7y99J98NxijqjX39xtWyGMp3qU78b6uDQy2nLhWoi7BPmkVaDjJMqenrMfqrVPFQMGXNJ",
  "key16": "54AGFhrxB99gBe6m2UkmE7Eis6DS9dX4AFh3i416rvQFnRTQFHzE1Kd976T4pDXpuhKJ9VJ9TCTS2AmN82rnzm9t",
  "key17": "2pBmW6ZiqgKEoyQcXqusjCkNnEByhKamgYsrywWJvYUSa7n58cTtYeHUPCabSY3NhfoqRX9ALzZr79EbvdbPtbB7",
  "key18": "5okeUPrM7zdzT3tEqnqGopuK5nNWdMBPnvQGSzsC7te1y65ioB2CShHYiJLxKfovusD1ERFPRwwhK53t5Do7fMEu",
  "key19": "4TA9bQpAdTewtemaMRLSJLbKSSYLM8jdcqsdbh2RCLw6zopiLM3VG67GP5o2PkEd954arTGC16eRx7vBsPHeSqG1",
  "key20": "Y5aKTR8jATqWsZFgPyELU8D8wR6ChU1NEiJZ5Ti4J9KRMew2RKBjWsfHM95vZapqAULZ2g5R1pCf1tpL1dv6eY9",
  "key21": "3CZP2tWkVoWgGsJvZNDVfWpAddLn8WPV2dPtEs95QnKL565LcVmZ1CVN4Pr2NYCzT4FwedTXbJwmoVMwyQ6TDt44",
  "key22": "28yC2hCd2ErSAdDXLatp9FxW1HP44JZZazpGiJx6v99kd8CBZSMsobQhubsyYevfg5FdyZxb1qwSJB1gQs8sN2R2",
  "key23": "59GUpJ69hF4NqSynKdTHB3vhKhSCEMSuGB2NZkVigw1GMWyzZbLB95aroHzQLenbupYCEXfVHEmCHw6Dw9JxQZFj",
  "key24": "2nQHGRrrGjBPNDSnKWN8KPn7ZfoRmMkg9vWRTevbSvMpd4hgbnE2LZrGNB4GvN4NbtvvP9B9CTNMhHU8kp1B23rn",
  "key25": "2sSSbSq71Rn7oHpcbcRA7SvxH2QaJJXZXtvpuUZE8hwaM8D5jjhFauf7JEvAMYZ6xqXPgYAGxoikYhQXBMvUujK6",
  "key26": "2MABQjmNG8WUfXm1X9NVZWkFidmoyER7oi6TmvogvmiTLZcaQiVpxmXMAd29G4sHGxKZXk7gd4WCu4RPVgmj6mNU",
  "key27": "5HtTvREfZRnTCUU44nEbWaxiWrGmazETint1yfpRFapLu9GwUPUsnu8bxX2VH3PwzyHetMg53FdZYCg6tEGtLZ2m",
  "key28": "5XTLiUHecyFdUZHZGkxZikjmw6uu4Nj5LJT9jZHb8ca18TVvSxUtdSfXpczRYb2379pCQY9gKiGVqrjjnGrBACo4",
  "key29": "62PxdYPFwCMVkHoBmNo27iHJoX1AaZZjWSx1ecPf5jqKDdUh7Tg7P7rm6AA42aZSJuKHW3oMEVi7DZ1SksykKEHn",
  "key30": "458BZ8FLpCMzsjdtrsAPhXoDZynQ35ULiSV4JgPuFFras6McYrea5CA2fyLGBNLU2Qqd1AghD7mEjBS6WwsxJbZP",
  "key31": "2aeazyLBnsBG7wFAQAQcZkQ4BXtkEDzjYLwAPFtDfc3LdC3zZwF7sg889zQEH8YjbPGQaMNrfsBKFZUKNNvi3GK6",
  "key32": "mwgHiKHo7fdDNpGqLy3p9LQaWR7TsMBxWLMJ1Q5pMKisvijVybidYhTxrXqE3XNbu7hDptnt1T6ZsnovyeUj5dQ",
  "key33": "28gPKhH9BnX5qxFFmkZRQDTgCjP2Gwm7Q3vaRGHZo7vW1zRYwSkCShFoBn6ARcjTdYf7Fpeoi2zyaxVwMUmwDi29",
  "key34": "5ndVth5uQ7ssyqgPiFX3mo8UaTMm6xdcyJJJ6psvB2DtaxSW5hKxdBNMhFA187Ccs9NqwSGookZ7SvjJgqkw1XPz",
  "key35": "55DRbpbLVcKHtiqHsavAUzTjnrVCxybkUcNrExZjcxeh4bvfEUF8D94oPJw14RPbATMVdhpBWMAeHbCV8ZZxu1MV",
  "key36": "4iJpd6FPFsFnLNDWppH5jWVrvqEd7C1fUpYZAbg5AqH9UALy1BBmPUsGBvche3vcKao37rJ4Rf3VeFMUM3xV6xVc",
  "key37": "7PYrqTRobsqeDSKJcT6w6mh3DmwxqByFWUMt1RfBtJwB8nqgoYNRrw59Bky9N9AyQHg363V1NBZBG3iQi1zeAVZ",
  "key38": "4StJutp3cZGrEX6km74ZQ8vAReSmE1ELa2arMcbiGEop2bsQmGSSbPcaVft9xsvSpYWk9HPJSR22TDgss6PsxKci",
  "key39": "3MwszWPrAjn3toTGCJBsbKwc9ntNKDG4kBbbLhKth6Gu31ZVZfj4kPp5FRKvtEjRqqUiZkE8CvFHaeCN2T2LPXV5",
  "key40": "mJd6f95cGfkGGGNcyZDqLqShw7qjMFZcmKLpYAmWwFKJRSP3ZKZBZECbeUCvu5JZNyfr6X5zDF6abNgPhzMGQPo",
  "key41": "3wsVDE7V1D5sQ9aESyjME7NsQiXHq4raF6n8Nf8cL4yoL1Nf3U42a4ArbZ2hnJvpmUTq4HAb3WWNLXCxxjBRp4GD",
  "key42": "4VXb2QriJgYXkXweUzofGiVWt1Y5KQkMuFxa1uXRF94mu9iJjxKR2yBJeZbq3JT8GPLxuCzAiDxeANVS5iuPdeNA",
  "key43": "DPVYG7Jnx7inwcCDkZcSRkbMKDBpKBKJQ1FXJPtKsyqPeCsCpAQzd8Mfd2kSZ4fhrWQDSpHJEbs9AgnBxuxN2ia",
  "key44": "2wNaDKs2LB1ojMSnM3bMXb37HGmRHUWq9udgpdn4mA8H7b82ZaSz89CeCxzTKwczqMatULCqFc6YX8C439tVVmwo",
  "key45": "2sDzav8c1nLwj21DrShxdkAerWKATbfKE7kEvH91BGgK9JcaYFPE9JSLFtKofKvfFcAyMk6PzWJmNGpb2sjAx3nk",
  "key46": "3oumtpLnGF5eNej1J6bbzaZtgJBBpKCcqG4ZK43Jz8srNuPu9bAuFtkqM5x6KSQhyniCJX27g14GobhFLJhxVMCf",
  "key47": "6652atpoqjuuXxUhwd7y2Z88ACnJtJ7uwjd7WDNT8TgSABvr3Qf7tZJXJrE4m3UwcgWGanWf4oMw1CKg1fg2ykRZ",
  "key48": "Uok8vhS57gugxDxe98ih4hRrFqno4Pc2Zq3BZh4qLQRuDMcUNpH15XoDq571nQk4bqNHLDgTVJgcwnPo354WWgg"
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
