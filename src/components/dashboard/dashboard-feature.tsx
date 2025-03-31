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
    "4a5Gp87Anm6BPaoyDMu6YPnUsDeiVoVdNdVd4mTkaJ7K5LBHnUQyPxb1VW9UK64uLgUVFY81yQ5gn6Xa6ef7SUZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QdEEiJ8pp2N4paN43aQEe3ytVZmRA8JF29gNyC7JNbKtChz2esa8quDJ4xPf5hTbN7R4SD9yNqMMoRTsCMCYCY5",
  "key1": "5LrWLyWTvx6DFgB2Saz9qUbaUPTV7ToHdf38PZajP47YFPUdysMxhotx8s5JoTVRC2fRgpRfZV5fqjKJFRcKCP2c",
  "key2": "3NTLgyMUSdcYs6hd1vxLUigPptZpymz2HP8xAmVBCAjpEq7icgZrutE836MSgfEZuVkT6T2SdGMXz56gv8hwrv7W",
  "key3": "ayeV3Q3wrgkdv4cYQyPmVniH9BYLV2aDhmMLr5tcr4w35S5YHnGQgMVQXtfyLj1XPWzdaMxNyon6LQ7ESJSMiXk",
  "key4": "3nUuSh2Vy7iTqcFY9HHjn9oiCivTh6qpVBdT2d1L6VQUZMZumh3s7STutWdmdzoPJJ59SmiMCTobfccyYNieWP7N",
  "key5": "4kCzJsuhPSa1aHr7qxCNuVBGM6c3jMMkjNb5CVdcDJjDH2QFuCJ4vWsVGjCkApd8hLD9Y8dpyEVkbCPAvcCQXYMB",
  "key6": "HCFKg36UZe5EjzGVw8MbW7WD8UyJhNVGsoxxCimpvEBQm6Tu7ugoWKGW68JovPWow82qqK6L82TtiEwEkdPzi2z",
  "key7": "5PZbdVWWaVEUBQi5tApCcrouvxEx4zG2dwN4D8dsUptnCSwPwizxUdy5nGNsj3aeq8gsQang5pT8V9ZVQzFGB4P6",
  "key8": "5uzkYoAK8cMbXw4F5htFgndBAPk5j2TwBYaJQ7CtrDBuSVMoKAr5Nt7BzXYkGW1Gr8oK1E1EBtD1BxvFXPz7Pzv3",
  "key9": "2YwKQ9CW9UgJtmHasya6WPXPGnwCvg2FyChhD7Ntg1jZ5CA1o4A5ZnM5DZrAWTydUevHe1fS3GSo8RoTQVDK79g6",
  "key10": "3XZPenJmPkEGQ93cL7jx3PAoXCNg14NxL1nYQLhcKAs75t7m1AZjoRydeZXSjKD7XiY2ESStUZqY2czdNAmkyp25",
  "key11": "3kmi6x6G8QgVtc8a1JT33g2RdHvfFtNu9j1H17Tn3N2NevMS5mxd3oFrBRNHy8C9AqnXikPbU4VbNk9yj3TaN9Rf",
  "key12": "5LcyRB2ri7bERKELXdcYyrEU18bm3QEbropEAxjSXa4vDhexcuDM8SKGyYodxAAiFpsAh9mtgQP8FjhhGWUDsLgL",
  "key13": "2SAGSY1hWpL8RUWyE3rvjsbpJVi3tbs3QSvhvn2SvD4GLenGxdg5Zg9wmvtm38smSVoBTKdouDrks9gr4gFUhmMj",
  "key14": "SfZATajv5RLPgdvvUGrUL5MZVFRGv2vS59xfo23syJQ2f94rMo487q3LmMkuiUjYWgDSjrngaswjy1WfmWevQgj",
  "key15": "3V239azYkYFqTUgW1sf8NMFwg6iJ669kXArJoyNaW5x5Bq3jDm7d2abPL4r4b36ucCkzRyqeCY1tg73JMZ4eUsUC",
  "key16": "4AqEYx5kSGiU1KUJ2osNVQpNdQi5LrgLroXfMiyRV35Ghyt5n9oo1Yn1N4yCq13oNC7jdt1kSEPsyc49m4BwTbqD",
  "key17": "3rvLkLZ9eeb4mSEBCu7y8tDpwvK3QT5DttgtN4xTCrTxLVbZhYUW5u2JZidXdCeu9g8enRmDQuNhrB8mz3pxVJ4Q",
  "key18": "5BdQtJBNTfHUb3Pdca5wdHeNmEchcSfnDqxpceHGhNTNQRXFroNur5yYnYJuMaSsV1pWRpVZtRWU675DEvmxv9CT",
  "key19": "5EQDp6jSPpT5t5jL3YYph63nvdpmWjqzszkupEKJAbxcw1H6RUkPeHyg2sqMBemKFcEWuY6QbrRDwnqtmv63ccQf",
  "key20": "5LRsBquSk1Pb1vrGBzXJ6EcFRpHcJi53v6QiDFgRRxtQKxb7dcCsam24TaR1tagibWqwjALUif3NKXEeRNMBm9pn",
  "key21": "47urmG4inKMaRYs5jpD8fnohZpy1G1sNfhAFx23HDzx5kytXDiqVmPP4Qafj5fwrLD5sRCHQh6JkKSMexR8MsTA5",
  "key22": "5DNoLh5G1cEGysJoNLqtFd2TDwJQqh9Ki3bsJKKTGTnbnyYwUyscxu6GAJAP2uSMySZtZrzmpvWYVUcYUzJEc3ci",
  "key23": "Y1h4PotLzc6cBwuyTPWbf83Ev2PLaXAKamWKx8j4AzUEZoiSUwiz3g4ghPYXPZ1zFh4KRvzVy7T1LSyiv7Bx8AZ",
  "key24": "2eZm4PCNLCdqbTVknLea1DVD3Bfo9he5Q9kujiVVKWBwhoS9EtMNmhSgzLqhWsutj8SaeaUpFivT5Nw2Wyz6ifwy",
  "key25": "4dYuq7U3rNjZZRWhU6uXNXBpBZQ1sjJPEdyq5SxNsvmA4TrQAxDuzKwZAbWSNrE8ZveWpYRRF2SqJHBg1rTMt67C",
  "key26": "2Q5LQK7MMK6KpP8j5ZqXrc16bdznk7hGRA4DDrjVWf7pTVAr2N31QMKb75oEAAcC3R3T6JQj5UFDm2vFUZbUChW",
  "key27": "4V7evh9xaajNUEa6Xs28GeJcn29cDKX4xsW2M3yxqNpRyYwYHJtzxJRmDkThru6jTgSKNfq7xKdnNqV4bWqhpjEb",
  "key28": "5vFvKrnNuzVSXfzPMM1R33ZT8wwHEqFbxtxyFfZkzKodx8Yvcx4A6gSJTdFM4jWrRWrD7LJrBidv3RnW15R6LrGR",
  "key29": "2SNiNebvD8UMHaBnfpkg1Rr3THjSeSL1iRPpAPses1edVuTKUc3xiF66gwm1Z7uyficX6fzwDnWce23S52KvaNd2",
  "key30": "4fRshbhdTKonpxxWEc1RzJt9tdPKMMFeVfn8xWu15hXVfNDHb2irRanv3h7BzpTKNxeUUVqYE4GFT9aM8EQ3ZbPx",
  "key31": "2y9yA3P3sJYD9ZwP1uNzLnReT7yVJaYzmJm9dhTJEMKkSHNKbkk2mCzhmWL47GxfhPZbvdvAJ9kQmcmVCjypcoMn",
  "key32": "fqX8qqLCRRJcVoAww8bgvAQu3bDzy1FuNEu8Q5MoEmE1VLZME5m1A2vKfj7BUGm8KBgDH63gFrqgrYuUU2FhM56",
  "key33": "RrgDW8FzUg44HK44RSWHTkJLA8hxKdd8QJqXJKAzfBQ2CX7BFd2SXbaX9E3cd8gMcn2sP7sFQ8H8e9WGuiz8r9H",
  "key34": "32mdAstTYZKw98Fdp4wvWptPtTCvRLiWE4y1kTiGJpqeUoGuopR77bYPQBFX6s1BjCA8wmrfdjyS3xfRhm5ets4j",
  "key35": "3mbKD7sF2x9nj2rwodeYkx2xEZtVycMy1JVkcxpbUrXHSKAXihvHdoGJbi3jQzt8PRdge36ncLMK9j1ePLUw6qLo",
  "key36": "5CuAUwsnWb62LiQSXHZxwrkem13JCs1Uh9G53eYHjAr7zZStQLLFoseUKPMzB16o2H8YKT9yqboWrGAoZ2fqxk72",
  "key37": "4fBuc2wBXGK5ynTuP3q2H5gEaR7mXRh4NRqJ7Hd9gFv1kfv8QdBAcLzo4k1FokDbHu9arQnxDcJ9y8CS3PWsFxF9",
  "key38": "ECTHY1nkLEjUDP23sHNZqFCbzhaWtqgnrxA1aEVkNxMKBkfL4sEf5fYrzp5BHkYakM6WLUjJGa7AsfqcyquwQq6",
  "key39": "3oUEAqbz7gaUPVt7acKPygmYA3fgZtBpuTgCRWNisxmpAKSoJm2KriUZjek2L4SUTpd9nSjzENAWToXHpKQSGSBg",
  "key40": "652rcSwda5jCAVSZq5C1nMB3hq2DNPp8WhTwbvAmBhagsJpgQQ4e2CKUddtG6d7hFYDS4DJu96yWfU3Po7LoysQX",
  "key41": "5wMBfrg984UUUujK4PGH2RSFNbHrWoxJVSvyUdA7ivjnZ1QAWdgcQFPYmeNJtmJC9NuVhnNuJugknUeMaYDXP2LS",
  "key42": "Wu4vPyMASjU69gAPeFZ4KBApuiow8oaThCDxpMNujq9pN7Ausedjm72cZLxsok2RhX8mzatmhs8zuendK43cgtu",
  "key43": "5rTZAUBTU5HfB2CvF3xaFhjFUnn9uvcpeooFcDUfyJ7R4cNvLR1Ub2mUM4Du8VZuUaTuZ3vLr3G2kNNNA9Yfx787",
  "key44": "3dzoY7QZKf6UBC79hHX2jyPDev9zqSNwhXH9vYvvhcsnGkBsBGcjZQCPSqKF8tKjNxuFv6gi7qeKVKWy2xr71zBn"
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
