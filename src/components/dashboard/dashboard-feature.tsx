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
    "ALgCoJc6bgCDWBy6Bd5MtSKXVup9uT6R5m8EHsArEPzyrJHumCtfBK1ZLq3u2QhQtXGzgMx6WTbSZUe49PHihB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tpe3enTbSwSm7kGmqp9pEAqRdmtsED7nSpJ5CuUpkkK2SG3JTpVtorRtBbTPS9ffsCJHeAb6Yf6g73rUYcsbDBc",
  "key1": "4kKUEtap4WZ7LZBVCMmBmwpHPkqVDUBQP1HjVXmAwrT9CaWmUsnw5vqPqgvS8P9VKZ3baMvtvEwUco5qLt784Wa6",
  "key2": "5rxSBKBxdcMzZZvQqerkXquJ9qETsdpsNPZnYVEHrgVQLgYkRhBB8CkaFnfrDzw3r3swSnHusa72g1VCTY88Frrs",
  "key3": "4CLNVYfZiQg8HqQWyiqAMmis3gfeK9VoHvZyEfmHsUbWvGFB2J7CrokBUeyJemtgKXHv776gtNSM1mQ3GSkswKzL",
  "key4": "24zH48x4AmUEaLw9srTauXQhUe6xxr8EYxtd7c2yHi1VQaoq2iGsqb11hNJNut83o8opDJGKb25pNhDnhfxshnwP",
  "key5": "pDxyQmf115FaAxtCcF1E89at6cRHtNdWWQwgPLhHyrq9sTvVMuHUvwLQB2G7QwteEGsqMUoNhr5rQZ97DzLXM1i",
  "key6": "4toHTrx9fyh8UyKTJRyUJK4yjmzypKW99CdC8cdknBrT4zkA6SKiRg7jLwy2iPg2U9wX1QDGmYC1oWhEMZoZX6Ao",
  "key7": "2SVbSwjWJtjzmhWEZ2L2zaBAdryvtrg4GbVbvVTU6oZWuUTGN2qkYziSfjtsahKrnoUcosny74JZhJgULgEXsLsb",
  "key8": "4qkbKnbzpeNKU5QqYmFmorexrYu6SL6jVFzTbLns7iEz2LPBtXdQn5aDAtznQF6nCqjsJKDHJvsxPNqWByp9wrLi",
  "key9": "4zEWFMZQk8LVd6GKPubA3Wkj4Fw6fNAuiR5XDrwKTJxW9gqw5eS2fmxvo1bo1jtQkr9G2Gj4FCJi7mkbaEiJs5gE",
  "key10": "2eUJy87LiLvUrLLqH2qiW7Atd3YyefzhBwbRfSG34Haxee8KS9VMmbjB9pNCdvRTSbRbwDPQxJ3fdeMCz5jJ7a3s",
  "key11": "3qdGXSWoUZ9GJNkffT2Qknwom3kKWHAdVofygRevGW7TF5UvuXtkXovuHusWWKXLL5E2HgEU165FjNVvDFXRp6yc",
  "key12": "2mL9VuTmVwDRzDyGa5F6deMG2Y48z7QjRuuSzJTM2eXzeMTsmck6pNWqagrFa9oQXzJa9T4e5CZh5zges1RnCE16",
  "key13": "3NBGkZLU4ia9gf4pgf19ikPcSBS2SHD8gxM1z4hH7vdqUpNzZgGNrp8dwEfN2wjQHJWGAd1NLxRBvqisLJ2mmvh7",
  "key14": "mjBwgtozJTxAy4ZSjtypRYBaevc8iD8fg5uod8YuWrRYVKr7nxRAM2SxfK5hioUsxByUM4iN8gq4sPpgBLtjRQz",
  "key15": "2U4BYmNkGzVDfn2egZ9TE6FgqSGnojnX6sfgnf48ywRwedKCsZhnVPFR8q9MDKiaeyS6UZGfifdeLUrtNsjfF5mv",
  "key16": "2PVBHTm4ZocxJrAjjHKYWgnvzxrYBer6eXaCbHRvXcDENR9AVsmzLfjbtLqjqueKYhdcrCd6MxjL7s4u83nfJLhf",
  "key17": "xwhCEruhekv23JU8G3zpbB3Eqe1z1rULE3kNf8AQwZgH3rBbQMm99VNpZGJSVuT8PvTMPY83bLaz6tCgcwf3DHw",
  "key18": "2aWhwKrUWFPSxoUyBKv1TAZgSZUpGS78jx9bhKrBK7mJswUdRxBn5xboKA5KMxn1c8j3pZhSe3VhrKsEcWM6jJUS",
  "key19": "5XxxE1DkqjXa7JPZsQ1CYg7CtZ8j3Sy59XJqELXQcJqLJs2gt3eNnQcUC3qkHdV8KMxV5J2SnELM3fh5uhLrhPT",
  "key20": "41ELwuXThwvvUFZ9Msv4zFiAtAV3XXEYqSnDQwY3CFXiXdZVKvWoZePZh9GK75YyJDTuvRva37AQh5bsZd1i87n7",
  "key21": "3wDEmr6L9jp1yJUvNpJvN1CpbhnEYoCtmmr9TY55YEeUzEvLnwoC5zA23SrdyQCM2wRwvyDSvE9JYpXWUVnWTMQv",
  "key22": "2FsTeRSdetE31Jae1iSjmdnTcBcEsQfuf2mVQx9hRbhNPAH3xibaaxSSwXYQ6uVGNA2uLUF9YgJBeBhGJq54jtDw",
  "key23": "2DPAmwFbeXiXoU9dDWRSBh85PoXx5VKX78DhfMaciZJKzaeZJVjzor5FESugSJ5p2gbz2FQchPtfvEcBEF9asPq1",
  "key24": "PBAZPtWyZE9A3w5MpRnH28rDAyQLg43wSvSKNq5r3uUJDbbiFrDAWEqW1gCn6KektQy5Vgvb8oJMCLrgqHJ7go6",
  "key25": "52zqqCqd1g5tWtgLTNLNQr56SYCFtPXvoGDFWw2SK152ciqd4xh4gb2y79dEWZVbXZ98vK38jCxEi1egFmZHXFsY",
  "key26": "3geboka93T7YF74y6DfTqvnVsk68YmSiDjmRqfFmPyuESqAjWLXaVheArreRjoGpa82cpfeZfnPKzFTh8SB5Kv15",
  "key27": "4pf37oUNYF1rX3ncqX4Yqc2SLixV1mmK124ew11SDxYLBa7SU9qGMyHjX2WbDEYdw1ZeKDAEubt2qxkREkwgaY6m",
  "key28": "2r51EVhVL7QitaHMYcxy7yntap5RqxtHJaAxAstmNPNbAokC7iaDAMgbG7b6hS2t6uMbDMksy79ZUJY4fF8uT4T8",
  "key29": "2hnK6T21cckCY7tEcbp7LUyiJhnMXb6bopCWp7sdtNgiGb9gdEH7HrHTfHqUdM6dNBYkAthJhaPsngkbXRYrzJvT",
  "key30": "PTqRQJoTu3FRp71ygRSdrGNPXhiCQeuYTMGmjJEmpL9MpY1rAFxnfHtAh4cqFivXzFMhV9CNh8CUNnHEXN6VBEK",
  "key31": "AkrGqp4cHCagu6XhHg5h6N1a96pgvmMcHpA8WZPmLYWRCjYU1C8vs71siK7857zV8Ct5PZ6JePrMNkCyP2J4ApF",
  "key32": "4CRzMPLipUzGtHjiUJA75ELfJg167mX18yo4XcFondDtD78ngqnWeUgQSZ2tEEHMEazs4ubZ6poHUJvFkMDopyM1",
  "key33": "316JqmQuwqgFhCjSBVj9PskiK3d6Gb1d1HTEKAhzdSEHimKkus6t97u8mw7ZKEgNZvjoGbJnHBCsHk89gAJMAwJM",
  "key34": "2zsgWho3x7EQHopkbAFupAqRsc5qyGSZn2y1kkxLTivoLf75EZZg1iuEg6GTT1ty5T653Tdr5SZ5jpPWsyra2sWT",
  "key35": "3WZSY89hCLAN4CV1pGmxBEbYDnCKaaS1G1bTPBrAcHHnRPgsQB2nwb9JUATjZeZ9hVNx9soi71JwdBVQBdMCQ7rz",
  "key36": "4ysikNJJCYoWNjYWqjFY4d76gLYCzyRbNT15AUs53ZB78j8564BfGfYenehz9qCUC5pWHW5DibC4GL7vpoZ9bdb8",
  "key37": "3vMjG25oALp56PzQu5C3rGN5Y5eumT7hVACgTp61fJ8qJggJHHA95XzmCvYu17Uq1ZSnTLNoyPnqfiZQ1u1Evnuf",
  "key38": "Ph1LFrqK5ZvrLfK7qTYSzNxZtseUwTrByENMskKxwKzfGXhhU2L3e9NVERriHzMiiGWMFqGN3yduD9fehcvPhwW",
  "key39": "5kBFkE7WUuXA4rUPBPiHz55o9A6ZsvY64XPijNkvFjt8Ew3LsBRQ6jSXGtetBEwiZ4XMHLc2fAwHWnoxEM6fbVuf",
  "key40": "Kt6b7wZh8b4itYQrxKM4bnGixRpeeUzynCe2NK7tnC5TntEMsPsoyn64scYPr7hyCxKdsndkuUt7nvtqVaXC7Dy",
  "key41": "2AyYAQ8JbamJr94JcGcn7d1HfSsaL2GDhTDfWr3rZPJ2LKqxuSzxxWeJL1BoSX6qZk3EAFfmTLtmYgEft3Zf5ARu"
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
