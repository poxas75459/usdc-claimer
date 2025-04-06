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
    "59WopZr5phaMs7drv716rxFd21VxkMeSp3BcgNP3XXBthEfVCMjMB9puoFZ3njFSrYCXCHgaURUdt2usaiyU732a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Poro6uLFRme7WCtpc2vE5P9fBsRe4bdRvt57dVst8rEtRCxi3iYFxjdfVAwzf1btg9TXGwHvrpE2fFfcdHphfuo",
  "key1": "3VtwDQ5KJ2rJ7vSi8qEY4rKipdYvnx5usCeKrPv9dvw7mo754iRXmDwtEMWopSa6Pjp53189z4D6QMSQCKN3owUd",
  "key2": "QUSkAkxbszA5Q147esD39kqUeSjb4d7qRwuzDdNj6QvpA4QKxoCouw7vaMUu1ghfMgkPmDEAMEq1JZyCMZPfXJS",
  "key3": "34QNVKuc2Mx2XniMPwBLQ3fUqk44y9EXwnVdC8U514VmNGAj8WuUCbdy2itfq9HSkcdotyMVoZSiodXeD1KawoJL",
  "key4": "2YUfCw4Mj59vg6RAm4xm25UL2Qw6Bh2jpCcktpzRjLz1YCcyA6LFRW6EgRc587oDyqwPBEv1ecVFhuRckFzKeSg5",
  "key5": "4wJCA3Ha27WKeTD5vqWPjU4BMUJxJTTxYxizkWVjvvLa5kQdY962YwhGmh5wXo9YeKZCSZNsYEwTdJeWcjtvqaas",
  "key6": "JzHttxWcJmU2hhfaCVxETwBcVBPWc19CavRe4JwFyRSiYXKUHuAMjW7gYABrv6W2veFASXt9Eam2cWF2ftXEsw7",
  "key7": "vmiSo7isqb7Bm8fpoZyC2qXHZZQu9XrYkWVjXTL3GG2Bk5rLZbG1hSL94SRKWgGAnBANagJYwg9JqVpExC3UD5W",
  "key8": "yg3hDFvGQkT19MWp5ynoadZVSCwznkXbCLmXQUwaiWJpHbHTq2JjBvpu5umLt4ciKZESYSqzygP5Ys189z2Cr8J",
  "key9": "5156PSv4BAxPqMKBMcXn4ZAyRMvL9x5jbFt78MhpG6JzPS4F7BbotXggmdFD1K1W6LqSvvqXGdQ5Y59juiQQ5sUK",
  "key10": "5GBk8rqXqJV7hi8esePwhnsXT4zDzGF5zkXn6T5qC3uMughm18jmBPYpF9YHTpqktmHjwitmpTfx8u9wU8pNZbcx",
  "key11": "4MzAqvzrPec7UUgmfwS2TitDXFkFSEUfou7VpYCcLbD167LU23Vztz6tggrvagxUTPQkh7HJcKm836EY7x2a1iWU",
  "key12": "4LU98pqZcxMFpScAZW1dVD4mKYyLTvp7Wwa4nPkgh7EMB69MYR8JkpfgwDAuDoStgBueke6ms92opVDZhia32mE5",
  "key13": "2hJHRqrbBx9vvzJyKT5fZDBivozxd1U35z6jfU3sMLd8n8j7MQ5mzJdGVEfEJ45D1tP4ds6w3ZRe9XY1ubSx1gqo",
  "key14": "449X68MJDsRXJgWBVHc8iqeyAkKiuokDAPBRtT4xeYF5yNP9EdcbsdGSm46ukrCg7HWmsmcFTFczL1ghbpxa5iyv",
  "key15": "26SonwD6C5iGBi9iE7AjyMrDixKPKceEHvmVjQibkqM3pVG7TrVZRvScjXdnNi95po9N7q8tVVNd88zt3rJ2E4uG",
  "key16": "2s6vspLKdQwyZAfE2djv6teezfmzgjNCYX3B8LBr1sPxjyK3c4Yu2iHcLU1FsNdZEpJ1t4HZ1f7yMdoXohusY8eH",
  "key17": "3AUXRWdfyK7VcAVtxXfHTgMXSPTcZja179tWuHFcpEG2rBMXBFZiH7tpxRaHMiFjxsx9AfWjwxA6r78Y2Gkf3bQ9",
  "key18": "2oCL9igHgUdRCE6WJZrQta3gMQbWKn2KFNF3o8agXgEoWrEBWin8tHKC6jd5sNRkMCYJQTgMd7LT2JZpFCprjaQx",
  "key19": "2XDxaMRPPCjdvz7pB3n72iQCmADpL7mJtLr1zStV4ANRdhKBUgaFW9crCxi8oSwpEud6qX9LtCwwMQwbEcw3FiJU",
  "key20": "489sTzncD6FJW5VfJMk5ejeY3BNCza2WR5PCjijzdb6h9AwctSn8XTj5WhW4A4qHxqJFMCuYemK7vZt85svmnrCc",
  "key21": "3e49VYtHXE9WHtBLedTsA1e65PP1qQd5hSjp3k2Ga7dNurjMi3dVFDUmL53UXp6Lgbmkh86B8xkbfvNDv8e21RXi",
  "key22": "2oN5nnDrWDMAyDBoNiKcnrKskhPs7F3BFrsDW4E8TmtWafSoACDFEzpj9UgnBjiStEUkdpMc9pRDF3pUfq8N9KDd",
  "key23": "5nws4gHe7En6LKR4XB2aBoBNbrPyDsJ8reL1nCRayKxH78tFvPQkh4L3y1MZAf4u8avFTsBD37WnjDba4vC4K29o",
  "key24": "3zEjXbQvZvW7AfgS4badmFjASExvJaHA5LELQhNu7n93j7Sv7LLtKJfXUMyzPDi6UvtV5Qf8qWsVJ7FewbwL5fDn",
  "key25": "5jtxiG6awmXXcXW3aEc2ukZxJhXrzviWanC8tRTKMWMk9DYTn4JMmhdR5rKLbPSi9qkK53a1ekfV6wE4vMNxCtaY",
  "key26": "4MNZ6kw1q4M4vXZxXs22fGBTSCABTJ1EowSKTyoxPTk3Yxs6HCx9PVMbb2SBnhCcdGM32ZwvnmLXwrLSasgJbm8k",
  "key27": "5oieCbFg7jLFFKhMvgSJiWMr4Qvb7tr2SwXNGHhikqsmNJTXpJmmyptRWG4ZQHSieUtpJ6k6j3SFpoVXigNBmyqU",
  "key28": "2BWQZh4XoddqNTkviPkK3BuRkCUb2tDoDo7kigmfNMVjnwZQim1tpjePZukfruG4NyVJF1cArpTdnLwPTkmAv2Q1",
  "key29": "5EkmDQcAfNe8TGWiTnFQ9JPWqRiMGfeJ4q6hgJGJmYzJ7nxSnEgXCdXcz2Aej6govEhR58HtqqSjhASgTyZkhzzT",
  "key30": "4AhAperWVBKNHQSxfLap3oRYEQ7CjypFBgmAN32SYnsiRpWsAN9RTaLuP2xTcDqiJFLwchAoQ1oau3pnATPC7grw",
  "key31": "4ec82hs7dvq8w1RzfnH6pvabst2M4Nkb72xio64J1RXTSJmYjoVKbFMKWzyt39rq37WjVNrjiVxFEni4fgU7m6nN",
  "key32": "4fgBZGDnQgMA7RUjDMCjWnsCwVVszLY8g1frL6DyTt21Qsjj1uARaP6qtDooZKHf8FM3TgnxXAqR5dnyS2nefdjd",
  "key33": "5QSrGmBHVN45qgSbXwMApkwW2koC5bj4Jv5fWLswLYCgs5UkLcDnyccuohnb9TAeaWPino32gMzm97ujNxnahcJs",
  "key34": "41bHwVpd4WAL4ia2DP3V1TmcmiMYecLR8LRanvYU2ziq7hGkGpah57sCJRQG5dvwh2S2tUZcucJtvxQCNZRU3V4k",
  "key35": "QeBwdxU2vqEG3idQ8uWJLqqa14q75B3hGxBfWETtmQTAQnvY22aQADAk6j6NWxw7LVYNheSYwKqH4LW8tADUcX8",
  "key36": "B3D6p44mhz494g2Z7UnqdmUEXPegXSPH54CR8oytd8iukSyjqNjjafSL7kQVwawaq3yoKq349h7bcUvhdCePcF3",
  "key37": "YaRecVHZbE2u6VgRYtL6svtVDWNwUxedaovkNRvJxpNpPpk1GCSR4ZZsSSmpXwJeU788CckjsvakYRGjpSSZniH",
  "key38": "i3RuZvEaALXZKxqgfaC5LYAUHSdU4VzwSaofQqaYX71MUymT3xrj9KnC6S51EB7qAAqLTXPknFUATAFsz56HW6N",
  "key39": "3HSYqcGjx287gMhpwpHc8ZeXKqmuxgmCdAAKGRB6gipNNHknkXswHfscrAztboLrSwyzesLArsukxPEjdCXEx5tU",
  "key40": "4ZU1zsiJHgdSM32BquEmymNPaZXsgNhCwyLBhudBxxBVkzZipKHSEXAZik131uFNTTRPdFQM1KAbLFAoZaMwbaGK",
  "key41": "3r8ixnMKWZkcgHGWJPL6WYM7ebxmj5Qo1D5BwKHLqw6RN6gbLqrvAbGreRAxQQqPUPrqSuLfKNMss8cTPZFeCeZr",
  "key42": "2MATLdFpZksPMSahQvvmsuEoFTHToWChZrSHmxai3GA3ETSQQMRpY4ZRZRQdT46SgDFDMVwsEkBVEBTSuMSrvrSa",
  "key43": "Drmefz9qsLaibyMa7ia7CZ9tndbXrbFve9zaPYcEW8E1zJzorFL9XdhDyE1b9NxLz5vvi6bfFJxBGqZwpvfswNe",
  "key44": "4W3mZriepu8RrYf7Sgiga3TnQTFmVpeBLvd15c4gFvhYd69EeUEPes5KvNpKs4UVMi1QkD4Z3waheHKp2DAGFrX7",
  "key45": "4xLVyfVXARBVZ42tzT4p6qWWotgaDfDvxgob93A7cJ8CNXi7agPpuaKwzgwWYpQymyjaYFSJMJscVfHuUmQHighM",
  "key46": "aZ8pkgnMgGt5yB6xrDJhhoK5QfUkFLcCVysw8yC1J842WNBty79nbF4sypYKTKfjfPCSfSsMgkNgMdJGgyih6ps",
  "key47": "2sFgwTPPCL7xuKpzZCxbTdEVFTDdQGdUSsK3eQgnbn54NQtfkJpse1aJpDrHRPa6APTm6jM86zPcMhuk3Fzgxwdw",
  "key48": "wJVoBYstGTmeAXc8jH8imNmGMW11CZfH7fFoEM1acfQA3pdFE7oXy5tqQCK7g1XMmFE9nG6SHkw6D8c6yictRum",
  "key49": "2Cxzt6vJK8qcZKBLDYkg3RtVSN6Ptsi3xL2m5TwCTigK7mQBWMM1QAVuabuNQSxmKtzqB8mxWV6WPkbMdV37hXZN"
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
