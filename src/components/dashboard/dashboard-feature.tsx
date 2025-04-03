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
    "4HutLxNkr5m7V9BGhb4K53czkWQXoL5smbp9oA6Zn4y4TPADLQBKDUEEtXj3oMVFsovJ5iH5YHdaw1GaEng4iWNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K9g4BrQMBdY9C4msf8f3p6z5qy6u6qFDJsjSPziEDoHEyfdbh3nENP58ccYDEUXu5EZrJeiq1MoTmE5z2J6pi36",
  "key1": "4isCDsbaC5A7Xj86AB96h5VERjaQaCHZdG9YStX34uzgzfizWfyHdJ6Kz1SB3QL4ztVVehB2peUqUzc2567Ghk8m",
  "key2": "PA9w5Uf1P4zE8vJgPXPAgA15MrX3e35Ui8YkrfZN7oYGudQapTeAkahK8GrXpfUe6HSgKDEi2jY9ksrgV4kF1mJ",
  "key3": "LRarwi4KYdAwWwAAdNQTtq3XMR7abDe122TQgpzCBGXLr9F3nejRe2ZpkbtrqJbVS5AvviGUhJXtHURjgJ5J3rb",
  "key4": "4BHP3dNtZFg76MYFky4LxBqNbQyT9nx3vtVFAC7uXVbckQPgRYfG9kR7DhCd7QG1W8mphZPoyHcLWiimFWUd2f7z",
  "key5": "4Fp396BE1ioEQV9eERairZ3H6rqrt2xm3VXRtstrs7bozMiUXPmqGfVMeFYPKBnC42RZGaCsUZWE8NbNWZsFtCEy",
  "key6": "2d8RcMcKrPwQfh2hqV3LjefYymwjDPEEyhxi6eHvDWxQ1zEMf2oVZmZUuuLZawPtcMsP2T7XmL8hywCVUTTWPcuL",
  "key7": "3avvDoCDEgJ7LyD7p2i9cyRQP8MUNWN4DvqbWXRowwzbSd6noh5PaZc9VptaXuZqCEL58SmQqK3ihQ3cXpqrQfhL",
  "key8": "a6EFAkiF8ekpj435QmeY5sgq5tgkzpU3crfeQXAXY46FPpfskcTETKPyejrLJALvRuMLwdNDG8kc5D7PVpbt4gf",
  "key9": "22igCEBaZboGGqZQgrdrxwtv8xEhT6iXaTSk2A6t8C7DdyTDptVcjuok1HDv4xcyGqFNPLMvZuYk9dfAWUomNjod",
  "key10": "5HirY9LzGL4md45J4Xr9n7gCpJDdbPXL87Vc6ZgP3qjKM8fn3occ1n8UBS7M4cAw67YmGhSwn1BcU84ewn76M4qo",
  "key11": "4otDpE3EZ6EN1XXUSYqCYQGLuKiTiqN3yRNsfq3ixX7GztZyiX8fDw6eGiMrdxYChjZPJ9p58EYkronTECqb7a6K",
  "key12": "5SXTRPddzCwsLc2DtDBPnnyb5B9DFr3EXHaf86esAKWTxuvPiBBZtbWZYaKsZjeMsiuVQ1naZVZBgdyiKvpZYiFa",
  "key13": "3MGaFDAmkCQ1qm2u7dUj16JAXLJM79RtnWuaLTuSVQe78rj6o4ZP6L7RkWM8qmywMRUC81RxdCgoXNmyMmRTYBfs",
  "key14": "4JSsgpBKpDd2DunvNdFaRVv4dzTpufRftx8isBRaMevbuvcrfknRxK7Ndjwe7nhMoEUigcHjAn3Th2CGWNWfT9wb",
  "key15": "2jLwXbuGi7aPewdA7jKpbieyA6Vf2EM1QM25TG1Tbd2q291HNA14x3wUc7Dhr6HAZAYNzEnPDEx6ZHipvXgR4jCb",
  "key16": "tjUc6GPRm1GtEJUPddgf9Zc3spzVhDPumSR3NAcBuF4JJ3Dffsp49djR22TH5UPPsw8T1virJaD7DDTtz9pNLvV",
  "key17": "5ZLZv1GCdgDMQifbEPsBRwQh8AD8iKbnCyD5CeQ57yWZ9CEWJiae6HavciCSymNunemW18u2YaofyMZkHsCsvYN",
  "key18": "bgNctNgA5FQfKSkPgq4AyJ8UgzRCqfLytFg32mDJ4iqWGiXYKuk8uxxnRE1TkM4YBvhm7AyuTCk7ry3cT3X6fxj",
  "key19": "34kzCm6UoHqKuA4xnVmdYqyTN9DaPcT4H6Py37HD2en8trsYWAHg4UxB5vQh94hbYhew7jiYoMHz5FgoRa5dFRZG",
  "key20": "5Lshhxn1EtKG8q4JPhtoqJdyM9jvnKPLHYScqEZ7MxNnwKjVGeHSBnHAiEAL7NHUt9GnxDAzWxatLmfTyuyaJ4Ub",
  "key21": "rUfSWq2bMmLt7ozdR3aCq4YK4bt3c5VdM7UZt8A8xXHmY96UJ2YQzmqSp5CJexSLc8tFTdgxFSLrHkrZ5w6fcWD",
  "key22": "5WtLV9HPhpZNkD2J7dpYzvtisQ8o1KwsyT4Cgeune4wgmomBAJmSCGpqcT4AYSnsyJthB39WDBory6ZAqcm9Zrit",
  "key23": "2HTe4Bi72bi7BLrAqNRTC8MPHBUgKZBbk3FNpbjZEdUSZsuxD8mBsrqByiQ5Y6vcrEo1dReXZ3eVXXzQf3bBRZZK",
  "key24": "52LWw5fCekzvztXbLsixnQ4kf1pEwnsNQKcqGiNTj7LJDssezPnUZBJzNpUMqYE3TcUrWsknoHoapuMT6c1pKv5H",
  "key25": "fg8wcVo7nncWmSsFJgnzPVpwQvQqsiXrm5GLaWF7qCN3VGTJUK3ft1mV1CPfrTiDss2fjt8N1gA31KetsxW3c8d",
  "key26": "2b7hGsGQaPMX2BauabDK6ZyJr7fHsNqoXnWR5sxYbTyY8yKd5RFWSG52w17MiEdiyFTEnCdRRhac1unrNj5PqzpE",
  "key27": "2kW1ZSwW6Dkn1TbeXNmgcAjwCXjB1Z7jrPNiJ2aVPFD1nkoXxmNHpisx5DFirGRgmcb8XKJwZmLF5YpnZSSQyaN7",
  "key28": "3qn2Yw7WvPsyxkhAdAc7cp9DbDsJaWMNRs2QQmNjfEqhuhVo7n1oeCdtTueQqdSXeB9aKQM2tUAsefuhEeeh2kju",
  "key29": "ZxkZcJ6ouAFEzH28vGhe5Zqan9RTMB6tqSKMc8m3GrsH1s6G9ygjknrEqcpxrsXyzX3Lmgze7K1Z3RqsGC1a8f2",
  "key30": "4BPu5CkxN6ghH3UhpGt8GwdtrzcMzkdADoPWubg4etKP3egrVf6dZffyngXQdshjib9Ktamp1ZouZEFGRqf941qo",
  "key31": "2KXwniEk1sgBZd3VK4tErAPzmpMznKBABHBCtqdbuE9UsDwyeHit1VJFhSRJFX14tYjag5ga4MMnse7moWfW22xf",
  "key32": "4mV5QhsJeEFkof2W6pgM5KA5HPNn6WhdiqaKvju85ojtfWHfG3jtSbaGRpThGMksd9hrLLWKbt7RCRrrLsbfJSPa",
  "key33": "3ZqD5EU5L5PVARzbXAoXwqEnt6M5xo4SmzAg75HbKpKizk8SWEUEE3EBbsyZMEVP765EB53XoRCGnK2BDdbxunjx",
  "key34": "4qJahN6FVYALXgBG8TsSKuME9XAemiHWLnUaGsxUKyUgmREa8XnjN4KedxiCGkJX1a673n5ea58SEZqJsTViuBpo",
  "key35": "5KJaAsUwFByPmhEwAyqQ7pVKHb9sjEgWmtQ3LyAVkNWyBR2m9d7HZ7SvzXUXojLHGjbxxJY9aeHy5faEQBJpnFCj",
  "key36": "63n4txAiWTYLz1jJguL9SKCwnT2ToHFyNuqXuU1XnuiRWcFUAfZXrW4yyvhzqnYXMSRBUK64JoSuaDfz9YGj4mw8",
  "key37": "5qrsx6T13MbUqfji7y414npv3piCEQF2trWK2R2pqad4XwmPuqBrXBGQLABKg671QCHw4JY4W9wrUPpdZEz8E9w4",
  "key38": "38Lfqq2qvCDrMuLj6jbbZpbFAwNi9UZh4Qc66AGVjPjmXkxuYTam1ZfgJ3uNfCCibfYYVvcCfL4s42idScsSn8L",
  "key39": "2tPmKmVZsy3JVGQpvKhRbsZAesyrbGEiVJaPkvvy8tRiGWm8cdvPF3uPDZ4Lk8B2aU1z4snJSE3Gw4md65BniAgm",
  "key40": "3QV8Vkecid9boYd8Ydzuos5oAAxZNyidGV4FcM6MNLBtNU1JBkwrTw8HkQic43LjWpezWggoXsC2NAQhPre7tM2L",
  "key41": "5DxnpSa3WHpMcyweYJSmMYTW67qWbduc4xgfVrjrjVSLCctFjZuCuVDrc3yCfruMXRpWM4H6YS2AMjquiboKMTiR",
  "key42": "239pA2qNM43ra1cuYEj9E2D9paJJ6bEcf4AYVdudmPXNR8pMbtgNgHVdttZzB75MFwHdcetTvUJir5dhxrcprn7D"
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
