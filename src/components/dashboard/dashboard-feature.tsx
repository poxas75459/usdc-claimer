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
    "3r1UTZQd98xq9h6nt637mn1yeJ7v45jUDFapwc6r9oAUv72CjjVR4PCA3U7hjugTW2DZ4Gty4HJXS2iAqg19DkBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tMK3bt85Yt673cdqAtCNG2bjNznuD4qQmQaQd39EmfAkj2tWLLx2UpEQZswagFrGHHB59JLE3cjr4ax7YNDvGfN",
  "key1": "585z954JLJXn3SeSL7EZLTShEB2SDyk4Y47Ub4WpeJ8ESkRZibetStAma9ijHUoFmXrjduQR91nFtQaqxvgkkPnp",
  "key2": "3g5LPj4Q1G4bK44WDCf8ammAMpxqdefX1vxmVp7vuE1GNNu1ZhLEpgEybD9kR2zs6kiYtriBkWu8GAB2WJnNQmts",
  "key3": "61AixPVGQorLk1zQM9uLH3Ke68XdSNUecYu49dXzbF9oMq9RC2CnzC4mwGzzF6bfpiuADymq16KvkwF7ouEQtfSx",
  "key4": "2Sxiw9218Sdmdv5bkxVy5pHLTx5zgmtXrHdSoXX6tbWtsfZgniPjf8QAksPuW4KLk3uGzL3PiHPFVNg9fbF3C6Ep",
  "key5": "3Y5yEMHJveBuEfYYqwfRatVUVfPwY5wqoL7WvWdAfvNmJjRadjA5ndgUonfwXBCDUSGfJddQ8fWXhjVgvaVo4j1M",
  "key6": "3eKDe5LjrStHAYjywcMdmgDbHPEioHbgAjgYCs8UAYQHBFFqSi7X6p7cZifYi9sJwNDW3xbeuneNobmcjYibmroF",
  "key7": "cTF6sG3uAeezf8377zf8iVr47aVn1Bfhd4n5zwMtXbNahKaKNzmrqDam111ePJXdvkmgJkLm3iPEn94zqKozeN9",
  "key8": "2F36jjxheHXnL5gT5uR8mhLctw5AsAc1vsm5F2fQZjyPhKHyriQXbEWqDcCpoEBddKsRMnGMEmxJt23Z7JAyoy2i",
  "key9": "51Ki1ZQA94UP2kZzNJYcHnxYFjxHrF8SL1rrxB6xJhQEVkuG8GAsFH7oLgwvjN8UDMYp7v9PejPa4CZZn5gAvjtH",
  "key10": "2j46N5m8PBvU1GYoke6ZE4HJqDJRe38VswRiwVxQyrsn8C9RsNhZFx2cveR4qRGmq5ohf4fRATCc7ASm1oYSyVRc",
  "key11": "5zKXBD5YN3PCd5vtwnDKDcSprAaBedfu9su3zupWfLnJoJKSMDGYXFNtimkxcQusoi7CDZiVJ1XVNkwuAkvUChWm",
  "key12": "FQrXGMuoy8wvvsMTuXKydPTNpoBNDzGCx5d7ioVsE1RhJ7BiU7Vu91xpf7KUGpBF84yNme5r77oWo1tNjSDYrv9",
  "key13": "33o4CvmW6mfGjTaxHbRaRbwKGLH52BQdVTRcbqpMV2ehC8B2piiAvtY4gv2R2FrQwZm2iVKSfhqWoHpZf4iaMAnb",
  "key14": "zuYiwsKKqJVPa7diJUGR7UWYX3B6UxWMMxRbdBxPNfGQNEz3R633jwzEAQwyYACJfQtoWZtPw3RH2cd9og7y2Vw",
  "key15": "p4nV3JPH1Fh4pYypx3NwTmnREdMnTZtUQV8NgbRnvGwfHMNSJFazxg7d4tiAxMGt3nUn42YZKkbVqLqm72ZweVY",
  "key16": "5dBw4hbyAGGV4SrE6iEUWo9xmLc33QiwCwEmfQBTET4fsCjx5ivEJP7zDaUXD7USN6JPRPmMEH9YLAhBTmaYzsBk",
  "key17": "5XwtqnCiaC7t2Xfx9KvAkYphJ5Whj4C4sR6FxrpYtbknBBa2v1x4HWfxrqu4LmtpEmX5VaxpUUnuMeq8ECFDnoeM",
  "key18": "5525Td8EgdzbVKfQCcNiLT4yH15yTYHE19FKP1aDGNhbZhKDWFvwUsLuQNRV4GgaHpnkKzygU1V4JpYdSNyCpvKt",
  "key19": "4H2VKbhwKwQhyqbgDYpL62imWFe27BTTwWnCuGHqWynknazZETSo1U76dTggyGPHimMnkDtLVaEQdNvLD1R1D6Z4",
  "key20": "2tvF3E6SZdwSth6ANhwb2bYKibBiDVtdsikRyKdBQBwWedHfnBpi7uYowx9VJD9yFqgHbRBiGrXT6nwF4ag5Avy8",
  "key21": "3H7bzJ5VZgWnsHjt5hVHzXDnJTtRJFRbRtWAcS4v8kyqK7neShE8h8AMcVxyjmUy1scUn5qb3ed6cQbgAN9zYbo2",
  "key22": "Maczf3MRhhCjputiSFKsrUyVnCN9EcxKDXnAeEUTr6vA546sPwvmp46qQQdr6obUHjY22Rcmj1Mn1bN8hDB1d7e",
  "key23": "4ikxG4E6nmMj4dgSCVSAd1xi1o4vbd6jpNeNZTwnTggWe99QTAwBMwX87jEu6ui54Hmd7MRuQ9WjCgGU94wmwE3C",
  "key24": "neVbyDXQeFfU1sVABEiFXG1x2yJPfdkTgZo65Fy4E4gV8wTSH6Rmo5U45LsHKyyFGmoVXSAn9bwFtWhfse6fPtv",
  "key25": "59G89DUxtqLheNuFzCqpPWZySwmKvLK62ecnQB6VWu3skBEBVwwKL7hAcfqAe3eikPVgWmHBemaKasRyRmtfsL14",
  "key26": "3dDEUPtSMpWt3ebG8v4Rnhz87boRFe31o7jGJrSF5HXwQRXMuocEzvijgec6wsGScduM6PRVgLAk7fWLXiEyM7Z",
  "key27": "5BgTnzFntWUyznERgHyojf4X3bGP1mLMdmPRvqCSJp8KUbBhxz6diDSMPzMaKxBHNAQ3qDxevVEXmzfLj9zDLAth",
  "key28": "kndJVYfqWaTrtXRf5ECbP3QeJwL5rBSZB5HetWLgcRWA29q6bNqKmvx13ndBVqQkwq9vtGfwdXG9LE7BoYgG5Bn",
  "key29": "4W1rSTnwK2GgXH3W5mytrhahNCP87zha6B4x97oJBcMVrZZQ4gmQemjBm41TsE8EKJuwTvMwb9g8Ut5wjwhzZHiT",
  "key30": "2x8w9ghk8UXbUqoPL69BAW5ZL235aTU3heDDFoW5Sg8KiocwEaaFVnqhT1e5ZKaqnM1xLPLUvPnHu8CEonKYx771",
  "key31": "6pGsKbK3Legt9LiZb7uKvHEop4uSwTBAVURuY4qGf33XLXnuHwTdHLSpXeY8g1mhvJpvwN6otkBouPpSD6hzEqJ",
  "key32": "4BR39xdpgXMiQA4V9bvvpkkh5NNZjG6inJL9dsayGS7hYMsaP1t1sjnYv7fdqDKT2bLwQrQxwikvSpJZe9Qtr7FJ",
  "key33": "259z3bGLQhiCDLkYXz1Kv8ffKfBofLYyrGioWdptF8GLtDPdCrmyJPG8zwKWXYa9LgRgn2nr6p3oSkuTRTems53b",
  "key34": "fQ8DbJ5553r4rxDx8ivAYdWz2MK4ERj6tCtPeDRWruzzpRsr1Hjv3bwbbfN6pAuFK55G5jHGskVFYqQYfB3nAnb",
  "key35": "2REXCvy4Ta7DUzZasCZf14TKMegPBMQeNBLSbCTwnmT83SGFCw25i7CVXhmABSQM96n2ZKWWNkHChYMM4Z3V91Bd",
  "key36": "3S1Ukh5GC1hXUaZ5i74FVXEujz8HAEsENy3ueEKb6YDV87dK2xjP5sATMHS3UEDh8sC11j8iyVRA8NGs92uTTB6b",
  "key37": "5FSVrobucWGcVkLzGNFVYd1vthatpyFr2HKtxVM74kbDt5nAmYKapE6eZ47J6DNsF3oMcMUfeuGkUBsmctwu7bxj",
  "key38": "5oFaC2dcN9wiY2muf4pvrZZXn9YkSmiPRMPtSDX5r2G2sjgcdJsq2FXCiabZGPJSqX5La689yXMpLZZ1WDRY312S",
  "key39": "3t4HmHuzbAittw4bouABWhtNrtK9rryAsx5cjF1T2Viy8UfWfw9GJoqpm5wEhdK5BYviZZQCxRNgqhTcTGxQ7vhK",
  "key40": "2AEbgcE47tibFfrq3jwNgkLYSfW2P784eYnTFUmTWqoMLZKHhxujMabzMwVRBk8uXFYUerYkdnpuYLx2dQ3Yk1Tc"
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
