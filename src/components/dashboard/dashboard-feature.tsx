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
    "3CkStKaionNQ3Vev7bQ2wJ9pNp6vLBaAYEKoV2KCZYZxP4ybspTyXhAc4XyUqxw8hkyjYHiYKA7ZrRrfgc2aJnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MUn3uFFzDDcLxVmhcHNvQnmhaH5cqhWe5DJrWdrKTY9xqu4nWiDcfcYQabA6LwX5jAnCKJKXV78ykKWjEYKxi7i",
  "key1": "4BVf88Y1De5WTnQa9EddHNcB2qo9W6y9oEcij8r2uZDQKTiv7eLoc756Jbqh4WRy4vp6uC32jNFsUbEkTvBJCvg7",
  "key2": "33JE65VGeB29dqNm8YVfMKJiU8i8TwPsd9Qs6ovRSjHf4wfSKdS8FTxZgNKwQ1pwiGNgsDVyF2wCAGXqrLsWVXk9",
  "key3": "eRmqWno98LTfyU16nypTAq2GS4E53UcmPNzy93rjbBwcHrKVTDJ7Zd891bns95PPPwei6wtj99RWX6cr9jy6Rpj",
  "key4": "37Ky3gf61Q7iSzM2m8Rx83KM9TdBQ1xkst5azU9tVXvoBhpLjttSkdbB9oyJoozqhP1ayyoD8rZ9s9rGzYBJyrPA",
  "key5": "2x1t6yV5YrNxkgc998PtAWBQ1Gv2h9bTVd9AFmdEhcgvM4zzp4vQSBY6LEaVQ6C9DNFrFgpNnBWbGoQDF9sgL3bP",
  "key6": "4wgGpP3rzJd4ExUdQiccEn1gqzLHP9zsybg5nxbLAPohabLGAsx6coLDtuYAFguibbzDnEm7oPN9gx28cTVmV58X",
  "key7": "5KGda4Vi4sSBQDkP2PyJkvpFocqxwvMGtw1H9RQqCjoNQT1RFb9AQw1n6JjNz83rug2Sx7eaY3nczXYownQHnDFz",
  "key8": "uGSThv6jDedU5Ah2GCzAo1mcLb4JpC2rGx4HwNqY6WwoRmnEuSrTxvGbnVWfNLUucPJSzEYARkUe7fqZuVHGAmi",
  "key9": "4xNSyTjeGqJofgQmcsaZAQs5BQhKLsN5sN1Kt74L7yGWn5c8TnhYCw8Hk11UobvMZ7MmoQbmn4uQhBTH6ZpP4rc6",
  "key10": "4VitxM6UzdbCiDURfdWoqLjByTQ4r9iszBxLYbuUVF4SvHqdCk8WHgWsBhTM37y9U5xZ7q3G8basWBv345N8wm6K",
  "key11": "44Bdmpn2FJZmtvPDCC7mjb2Dd7FqdKmvWH4FyDVne7iNqABrRkhF48Jd35tn4TAFmJ9bA9xP4Qjx8THsvpxcdAFg",
  "key12": "4mCxcxAYXLafEDHxBpbinx6FirSF9hSTu1F8gx9s2qvRcyquWYMMEyeRXBUm8Q9CLhLfhsqg8F8fKFG95u7V4LgL",
  "key13": "5SrTnuHfB2FAKK37akpVWfjStMoSt5QkWhm8eEsAVPZrd98zHZySa5zJjdVTinBvHgsxB2c9wNkFbZ3KagCEjvJf",
  "key14": "DfCjzMzgUf8bNNMdk8rdFKDWcAT8o4C4sKMbq99z3Ye2JwkdXuVQ57wg8QzDfF4bzYGXnwtZgZabd79mBkYQeyY",
  "key15": "cFGgdSKHUD7vJhnvek6C9yRyszw5ucqtQv4aTAYYdWkuCvgRcxFBqhdjwsgYi2xZndVFwfjnxGTGmw2bg7nALSA",
  "key16": "opNKdcwMjwKoJeH1rWVVSzPV5nBzEK3z8DdCbwN1TJcUV3CzrBopmdgPEnMw3vAMYbqM6LRVAaoHncpddYEMNpY",
  "key17": "55SwJ4qRNLmWdiRpdV9H1rWqTamRbwC4Fq4t2sYYdQxFrMXqUxvBB6MyBh38x8nBQBUjvvdp1oeFbvprUMC2PauQ",
  "key18": "62HacLQmrCE9N5hXaggT8xNKbUHNN6ffSAMyu1vojup14GDFQ1Bu5vK4tK5hPcZ5t2h4mN7snNM2iXad4k2kZxdG",
  "key19": "fFngTheD53wUDX7DHgFaBJrnb8PFxa5jxr8sJyg1a56u9RDf7Xt634qh9jKVXDDv8k3Kme1jWqngGoV4dyRax7m",
  "key20": "4GVgSXKEkNx7QW2F8R4KeT91qRT1XTdfwbBHxvjqUrP5Nug1qhL7s9jY84T7yKbEqWc8F2NNXnDyaD9abHzKqxhy",
  "key21": "iQzCEvT6b17jKEWAUrrmHu9pfXLHoWhpY6coPqXZk1Z7H4M9HGxgrDkuekTjWMnCVRmmZMEY49PbRBoTKFyp7kw",
  "key22": "4nfEn16EKunFHR3udnCW291MT1pQFXptHirvcuawV1wV3Nc9b6BzzvpkWR2i9u9GZKST5Nm58mZsEeQ5pMvvrSh1",
  "key23": "RfDnSG618EgHzvut5jgzQGdjgJEv6zuBpKbvYSsCW2aT1vwdepyjoTkM3kRLYziUgPJ5cEtQEpVbdXTdzRTztbv",
  "key24": "4u5bivnyH1cQc7tYYiDacpECBMaKuKY7PNMwUkTTGvjG1XkdDzh5QTCybofwLxctgfm6yooWD6QEMy5HtoN6WkCd",
  "key25": "4faaRo8d6otAGTpzMkbJL3gCjF1XtpMe9P8tSBsXRBdYejc22FZSyM9bcyF9BGap3TXiuye2oqmBbc2c5Wtv79Zm",
  "key26": "2xZoctEHS5kWAm3Su5vKEjQtUJvKPZqDxeRM2GEFVhFP9RXP6cj5hxeM3RaAYHgFSfLvVbzPrGpk9hgXXXDJqWkV",
  "key27": "ujRfS3KvVASKqxwNdbqyAMMKFkMwaQzXLgR9Bk21h4Mz8CymHYACKCXEL8U3LpKbRqrUpczbtAGAmqbQe72Kh2N",
  "key28": "2WVLJgNy1hQBQGobFSijwTqALN53pPKx1YNB5NoLjXaCavFgXhn2LQ6SWCWKxDuQJVNd3p1t52mxXviF37bz9H2b",
  "key29": "RzGkxS19e2BGKQnrR3pJ4QNLX5qiwQ2bdP2JEURqC4iu1RqJ9QWo9qxifPdWutUi3RsUTKaN9irchyxtvmpqUjj",
  "key30": "3QVRE4uakAHREEwJAVkCwR7Hvtm91BnChRnK7t7PppSzzWKc2CP59U6BFiR66Pi7L1Hxe3q9sRRM2h9MsBBFBTKg",
  "key31": "4AQwyB8MaKoAaX2kn8uB7FiQcJX7Ta9vNjT6P5eyV37e88pTknBnqCHjqLoR117NCcgJqYSdHYnm2j9mCA6fEc76",
  "key32": "3Afw927Mj3RcCNYdcdGHKxUTB3U33J1smsEBwRxwGbggP6rbHpoopmfJTtFQacNpVn7K5bjrhxbWSydoZs1R5Keq",
  "key33": "4SQULdahLjTtdFea7EZSqgqbyE3kMh35r95K3ew1wMc9KCvyC95tMRARjFCJpZX9HBuHgA1JKJh4Fw1ZZXHPf4Qb",
  "key34": "4fP6tRfPuqE28fwKbToxtTevZgy2fy9CHDPw4a8VjeJANC8SFHd7dHrZd1CcXdALG84yRAYXXHsEp4GtGdtTKjqo",
  "key35": "44LvFpP2iAhycPySfovPaWSwFcVEpoirRdZvGmVgcGPhpk54uoV6fjuM1b2YQKgosqKKj11BXuMuCR8SsynXJeFM",
  "key36": "3DAQjuaGMMgzBc2rhFHxmQPRqnT3rKnmj45GuPmY5gaQbtkb6dEbmrwcYbfgPYuJ8SJr4sAGVBWnFfz8c6AYroEd",
  "key37": "4221FoHWtd1RDnbtb7xL3b48n4UHgKyDVopKxStKWd1Y5Q6CCxTnU9ySaad7eTxcEVX8XGyaVNtnh7NPVQZhfXKL",
  "key38": "3KdSfnGMJQ7ikjKzW7GJVrizEvjrC1fUQPiget83p6RqWVX9qLHV9FSPPD9jZP6bTuMTh1yXYEtDFucFVGMgoYT2",
  "key39": "DcPWyVxWkrvvqzfFQ6EeVmaV7tSdVzdYbypBhVe6H3Hefn3voexeU4VtDuoFAzgjijgB35cGzdBtLABTzVunAy1",
  "key40": "4VMopmJn47MEVXGTeqfDmDHmEUxzJi5Xby38sTyoPuWD1zGwYV5BJ5MdrMY3VofKpAic5ou1i9sWdPxLnj4sXqoP",
  "key41": "1UZaMGzvhspPJVDviJSTuWLmsG4ZnpRnWbX9ktECRu8zupfF4hTStgiYJgn5fc3G491sNg88m4Qgn7sCwhdYAj3",
  "key42": "4w1TfrwXjduBNnRpCxAcGi1m83YXvRfQW7qpqdYE8ZLFHKQ4BbyZrigtCcXfJ5qA8FSGGAyuQeFc5WPTfggcYR6a",
  "key43": "ACB1ZSXPxa4Jq413xcere9yhYnFPx8r1mzAiS9a8j3Dj2tS4AjymEoR64Ka7iMzscQsti5XqcfHgbKjEk6pAybt",
  "key44": "4oVNhPyezw45JLCLPPuYL18NbThPh7tgftbJ5ZdfamxE6h3V3VjQK9Wx2V1GKFcBntX5skNvQmLQdBoLaUxDPSd5",
  "key45": "33x8UTDk7Ho9nPNdgkGyAU51Z8Px9jkduWX6QMfxa36SYRZrFSG6451UkRJuULXYYRn1whqZJuxvjqJXqdpRDe5o",
  "key46": "61vQYSY2jvM3HuM6t1kRjib4XymiAwrVs6Rq86advxSf2tBJKdKQb69U2ebovzttJ3PkdZM7n2CN34ZG3TLmA7M1",
  "key47": "2Jd2ECNyv6qWXNnNmMHarCDvm6uQJbF9A9sELCeksd5s8CVVT7J6sZ2S3n4Yuj77jMrvgZRnJL8qi8EMwAd3GWU1"
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
