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
    "2oyGEmkU1oR1ASaJVmse2vTp4DbPVAJ6cEgCodj81onuhtyWttKsLrgnY9XqtP3s1wAFxZ8WngSjFGFtn5TErFwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jAxwhZ8eckreEAamF8yvBZDYXgPSrQoKS8Ptum3cQisasuoAsV1N5C5a6ubw9RsC3Fppqo619oVwaChXPBG6gcT",
  "key1": "3i3tZfuuZLzaobzXSCh8rGV8AeBPGY5XarzjsZoHyWtgiCp6RPUMSmq1fsQTzSg1Gr1wqdpcVYcd12Ez1wtGn8gU",
  "key2": "47r7oS5WKM5ZBqBmz1CYoVMkfbJELGgKXJAsU2jayuVmKbx3TeysC88kKvX2FmX4to4d6HtCrxRpMfJYKJKppjfv",
  "key3": "4MVKcBtJpixQRCy1WiWuBVyRhBiR9H52NMu9DoTwN95fusDYWTJeRp5D9cw9Wo71KSct4hsd4wrbyt7Bhx3YjwK",
  "key4": "2TBgBGNDgVnGTRex2XVnw7uEakgJrjxgXG28yFoUqBvVkLZkXbXNc1MbtEZDx4pxx6FwvA1H44qKohYEwGnP9Gvz",
  "key5": "krNVLKDRFZzmxHE3a2zYrBfqneQAi6KF9pz5wUZ3ofFgLmg6spDw5A12oSr91M8v6J3NfkPxdf9TrH4zHKf4F6X",
  "key6": "36BZjfQZy7EZT2bToDgSDxkMR6EjanUk9i6XTBDLZXmrZkV3vBB1a3Z8ntHbX8c4L57WjzCWwTjtg6AKdggtXHi5",
  "key7": "61DnjtBPDacnCGMhNbw8LTTP5YvqDavkcSTxSaP9YN3WrTErq6jBTGdWxDTLdKy5jnNbQbHqE6sLRbRzrLJdWsk5",
  "key8": "5tZ2VGJYth6A3fGnAszGxFqkmH3PnxvL3tcYZy8VzzadpD8yntGifWDniJchckvTzoXQ3mgH4NyHvL1Jdu2TcbCc",
  "key9": "4F8dumLtsFj1Fi2fNd3T5T2C6GYnAyHSzSL9d8bTGHr8qfQ8ut4sDSjqbXkm7m32WNyxpt9bL6eaHFbz1jFw2UNA",
  "key10": "EoZuZu8Y2r1BytjYQVEjFCTnqacK6eNv1Rd9m7a6jq69ViuZAhEWC5J6wCw65r634wgJd2x2CH8tc28dSAZn4JC",
  "key11": "caQ388UNHWzerY8mMs9F4jdmLYnREUpqLyM2iJwqkxsiXwNJpRTzeCNjeBvxNzEtbox3uxC8hSVWCjMjejSaav2",
  "key12": "668vyth1Bw7gzVmAwmFAXP5s8twDpTEup4qxhHk71m2sEzs2vQJ62rCQ8fjsxUWsxgyAJGPTeBHSyQQSveraiYoB",
  "key13": "14q2MiDfzjzzyFKMecjdzcZXCtbRy5Rorp6GZ57moneSJAU1nR7YDgNXbuXRGhZaTzriDomEpK5JkzWy3WwwkFt",
  "key14": "5N3iN8TFbgJbroP4HZRnULqQydkKPf8rDhYJ9J5Qj1sMGEjR5ApdsA6iAFaGSG1hgsj8WBGqe9es3YjUVZFznznE",
  "key15": "3wpZnDytxPTG3fxgGdSTv1FrUP6ktLqCLN3B6VYmKHPwYSWTo5rAmS3kHk8BSqJ5FJC1f6qkUm7qXiA7NEgBtS9r",
  "key16": "4ZESYNaoXW41b3m6Sxrti63Wi5oEHHVGZvLFTbyf4H65XaopegmKEZ3f66Erw8Z9t3RCHe6kR6rkjEqd9ZCXRi4x",
  "key17": "3f2NPWYPMz7Ur7aUuKL4o8sGXLnRRdy2KJhwpsiUjqDHz73sh21xFFCEFSrGh4PH5oeKciSv73BSJdxaT1cURDVm",
  "key18": "3PkNDFCaPw45aRsSuMBfJ8Nm6kS3YnC8GUqA6WW6DgDiSDWkYwLHZK1LXgFw1kAqfqcM9pi5Kav6bcz82oLFs4vz",
  "key19": "5tVrtCjm4yi19RERDTRaD4cUaaJPgwfTMhuVYrpm7svKvv4xhpSahCggWC6o9w8AX2yQbcYPAx1zrXoWV2zrDoS7",
  "key20": "2fBxU8uGujWutussP8svQCivPbLn6GjqJzVt8qQgmcJ4MqssuXc4hfKpov82LRDQbFe5rFZitwpMKH2RMyeiEtBg",
  "key21": "33ZHYeDBd6CUZ7dMpuvALMUJ8AjWHuTh8Ysi4sdfi5EyWbSjonzvVgveNBBHqEQJpKN1kSAwoRaQBkMatxHWbG4X",
  "key22": "2yhkMLwXGPpQaNHvnS6cyEoJbKxgK1DXkCkkf4SvbGKdarRyS44ikuJivF6SfvieF4c6VtdpFzn8sVrKhcLGHGbQ",
  "key23": "2DiTgBxU2XLjNqWTWEGSGzzdb4GRLwm72SjY9gPPjGWTKsXRNUbb6gu7o1rVD8MvuF4gWyWnvWBk1HAvKjuA167T",
  "key24": "5Cgp327opHq8PxZ5YX43JmnnGYnoJmVDFDX5HbYReK4k2NJ3BaQFFWiYSo1mbsgFF18Sn6Uxc9n3Ywb4cQkxxSXK",
  "key25": "29d6ydJfFmzsogXxVbuqpRRRGP9VXvmzRP9QW4hak3GCji9wxrQ97pJVGGkrupiJqJoAMYdJAwXqdm1RrJm3zHg2",
  "key26": "5BzBmsgi8m2MovFfKkSf6otmTj2LPJwLcF9CxJA7KLT2gGC63PoakU2MuatDD68emnB1NnFrEuDFQFrGYJEjkThf",
  "key27": "5sgAE1CJiG23edqbkgGeQDrv2kusUVE9TYrjayHGxC91gwpwaWG4WpZ4azkbzWSEpnu92oFobDCspRfQN27thNqK",
  "key28": "21hHHcxb2i3agAU3fQoZAuEjFsssENzB65mL9giiJeB277H7zrqdP8ANpJVsqS4bN8xMWLMpyc5jFh11rSFat17B",
  "key29": "2wpTWfkr6QqF1ZJ155k1acciy4NTkZUq1gcZpksV8LNVC4HjhqCwbPZTy5mSF9q8QiTvUeyDSBVayjtCugjL98Cf",
  "key30": "3Rhmt2oH2xWkctUscmD57TXvL54PEUTF7Jyge5x78Uzc3oUNCSBkMtqHnupVGDDuxTg7mJWRMK76ufHgaeAVdzuC",
  "key31": "5VfcKqi37tYYpakS2NxEpPZht3CT9nREXg7YnA9qvd7r6i62faavLWsEbGNo3KY9LHQEmtRsV7FGQEqJFCRW4Sfg",
  "key32": "pWsmBKquqJeHqq34smLJNczg2v1nuaSAyM7epTQfR9GfPYVNpoMUT4nzfkxsCZ3cS55MtHHHMhkkBDYMixaKWbH",
  "key33": "4Yx7hyGpFoLy7WWagxo191qrrCDPefEfHvx3AkmodgJ7VkmgXvWFKMSfzPbJZKNpLqtAAS8yTsd84CdgYCgfTsbH",
  "key34": "35xiBTgfvmdQrsfBr6aLh6eg1JQZCbFgvp8pArWxN2NdSPe3qf57PKs4cGKR6MboDcrioooDpw7ufaTToUvKXEqa",
  "key35": "4JU2vg5KbJzfXvVmr4xHkDU4D4TVdwmgGGUsmZipRfeMi4dHUCG9sjhTq95iwrffHEeqe43dHa1kGUfn1es3RhqJ",
  "key36": "3HG5ARY3vyHnTRjYMRf1Pevx2rooVT1bNTsvyVE6YbgfPr3Tk2nbXV7fW3hG5ntovBvHN296dk8twtT4L5WssoDN",
  "key37": "38KRR3vXgMbxTXCarNteJLzQZJ3WEwHrw7dNaHe5GawL1doR88d4kQWmL44kyqDuftpg3dK6dEhpX4uurFZ58tyh",
  "key38": "2SJPxPFtdCuF6VxF1eHYmAwE1RvtBUJR4pJaZvC8SSEjtGxbUhJFHqqCVVBQijC6imzFzDPiXWCJFbrDkdVL5Us8",
  "key39": "58pW7WxHRyAtbH576Pc71RVdHWRjQbFQMpcp2skitXuoSiCQQt4EDGCtKr7dLdTtbuCcayGJvr3kQw5QWoAYDUTX",
  "key40": "2u1Pd5LcZZjvSW5nfcjoeF6tehGZLQk1FNvywQGFfyuUpXCwMSxCUvmMjLcwjtCfqGF9zuuFH6akDyjSb7R3CBLi",
  "key41": "2Eqpef5Mja7sWNsH73VrgVicGm2BYEomWBzmuNjMvn3Ch2cZRgt73CPSQqK6zbepckNqVzz9bSj5QapmM9QQYvey",
  "key42": "3kd5WgBSXwSdL7PqWZQjpVDqaiz9nVWRcjCBmdsSgHMvKm1CAm3zxgDbJGxR1pPTTXUnUum7X6HdaaQ2V9iiCA7y",
  "key43": "2dpkiMgrUU76MzUcHDxbCnfNCc7uHs3qQy227tntwGH1dnqFUm8svSUNXbdhtek1ZYH78sywggYW3rFWvGjgcxep",
  "key44": "52nBjWay6zJk9zGaNfdxwiu2bTp2M19LffrZBBWYkt2fsm2anopgTboNgCT9u2ngQxDPSswmF24cB8uaJeMpQayS",
  "key45": "45AjNtVJeY3QCWF1ptixcJ6XDD7uBwCYbSTtshmN1zf7Nf8QoiQuhRiBjpNiAs43rgpnnJQ3uR95gDYNuJDCUtR8"
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
