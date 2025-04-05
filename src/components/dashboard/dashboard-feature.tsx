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
    "3sStsMgpbwu89UxZceS4zPhdyZ7cu6cLYaZEsRMP2DbLzpVRRPcvzGomXYGNd2P4H1BgsVSxyppAVivH1PEcYswk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38VGBihwqouWDrr2pL3k1PtsTcPLMz8vf51JVd3H89yWqkekaP5pW2vcbrbZWtVNpsgPDS2o5g3HdruBtYwpnpvz",
  "key1": "5f6HJuPTQDyoTgMHbt2WaNLHsJMJnVvHgT2vW5csg69eCt9V5j5bywvAjdaS3CLchqhLRsm4jMpioBm4Qt4bbygi",
  "key2": "jhenExiP6AY5tUjJwTzfmBDYp6MSpGWCf5LtyjECuXewzg8jMo5BsfqpMDHrgsg25CS4pUfugkxM7V77wNKAKTv",
  "key3": "2nTAcAje8phnDpvi9juaQ4AzbscYZumon2CM7AiduvQsYxdCgAxdtJRWZDNpjuY5VC74yfmr1YtBsw3wbo8pFVrw",
  "key4": "42JquWSEFutXAhfoQg6ECbJ2vWhkVpiYWq6jsEHprts8bowBktJie2FdtCdynHCHTDABAR9T5yynh7NewKsnoX1w",
  "key5": "hzXpWC3NQFj859gQdGKCPKm8ze9Sbqd1JJtvXD6KK5PPoDg8oaRPCyichMTJqrmPq5GZHcskdPhjbJtV5kgp5uf",
  "key6": "4eoz71M39TJowiUsh6Sqpt88qtsznuGxEhq5AMoYZaJWHVpNeZfqTmQxNgjc43KQa7qh2XznVypgLEiTZMBeVkBv",
  "key7": "36QPwuZA79g8u7asHeUucYYfbXZYwK9NB1eT7xQ2GF6xCGbbVahtsp1DqsNhocBf87Qfqoq97axx6wYrJcGwYoba",
  "key8": "3A9TfNYo9eb6sgcd2HqzdknfgV8NaHiU82QnrqHS4yEZUHJkMuhn4ixyPmeAbSHyRvSJqBdstNEzZwwTGSVUuNMT",
  "key9": "SYRSVQoRdeUmV7J42hsG5ZFiPpH7nL3jhSBZg1URMvbXdmE54X2BDtaa633sAfYxGok29QgqE5zt3Lu9K3jsRrV",
  "key10": "y5ypoUncj2fGgqbxnam4Y7WQtXMbKYDupVZN3gSAwzhZdBCaqcWFbP8KyJQEHdVAS9XvdK86uEwbQpFCYzKyr7F",
  "key11": "4PCVxCNbRfPiEMjuTUMRBHz5rBmqX5pgzCxfx57KVsQBMaKj1QL13WZcG7dCERBjATfaDWdppi5LyD9EsXtsB4oM",
  "key12": "2EHkBWvZEx95WpUoHSsAAfmBRc1yCXKcuHRDcFY8FBiKKULX8KaH1RKNddy2bqMzW59H7Lj7c11DuFnsftiw7u6R",
  "key13": "49hz6BGxT7xrcJ1ie5dLSyyUujTiXKxxwpUx46VpQejEFLqu2rrsXsJaQViqwSp7dDWuRXJt3NXhSNE6ngFW7bLR",
  "key14": "SbC2NmszDnTahNhKXB7DeYPbHo1Ln5VvQsgiBWyyUkYYSZeEvAJzvQftmGwpZjGBMDWU9SLTZ6hCqRofBYnq1UC",
  "key15": "5gwRdhCZwHv5uugeKXjuLJ8a15usiJVSjEhpKiEG1xpctBBdgXtkp3HhwshggLuDxKa8HpN822AMaPm7i1PG2fBT",
  "key16": "BDMfPZzdoY2ebkzgS7wyiSMRLFR9stRsF2tMDGegALdpUohGEkbFePNyfdraQt3gHsoxhunC8b2vp9n1oax5Vvz",
  "key17": "2FH96vEPo1oKZ1rLQBYvu29hTvhLtmcHXW51nxBRWuQHuHobzMmEzKSGjqpY6ouoLjddLycdNUtn9Pem75yaRsfc",
  "key18": "5U6Fo4muzMURjSLFVcx5zwPLaTWJ1cvGWcfwdAdZ52Jm1x3gyCjsfbJr5mso9BGDQHK26Hz42Vi1SHJScn9t3p2",
  "key19": "wDrGUrXLaYs2Vbb8kR9qXwVjzjadBBHu3LkJuAMWmufwELWCeoLrfXtgZEYwN9NzBiBjwEYfEmmT2aW3hnaDLz5",
  "key20": "4DXemdGeKKC4GitxFFjsfwzQFJUxvbsQGY8NvFaRBHbPxXonzQAdWYbcWAZjzxWjZmb84NVecCVcVNwMxAZCxAoK",
  "key21": "3tjmyKLvisoPPhqtqat35cN4HpPsNwjiRsJtvZ1L677yZrpby7KaHE4bL2u7faEQ7fLg9v3vHMYvYeQt631c2rzX",
  "key22": "3957PfGyToufp7TBWzX6jtANHpdmi9uNBBrm5CUgB4wXKGDoAq1pyg1Agz3wMzzSNKmcZ8H37X2CuojaNBajiSyc",
  "key23": "3KKYp55nH7R8RKMYxQCTYqhUMqwa8HhVJ5GHcyhQFecPfzwqitaMrnK9aPxBuKs2DjP4QsFRXMLhFzZmJMfQ8xwB",
  "key24": "5WWoCkHso97FhPPGX1eqAh7s1wixYFfPY2Btf36UVt2JWiJN4pPTnRfg5bi9d1dgFea6iMDcEPPyFWNNBw3TDH9i",
  "key25": "5tSCXXX4zNGLi4vGCYhKbQmT11tazbrNaEsYisbrLT5gjN7hNCQNTaCMYioJkyRWXvkkrdfRXWpWpLpbv9wRuT5N",
  "key26": "L3NJoTzZA8x1rfFat34PChj5gm6aZTdJctdoSR1tAJn9JvngKmxEHFgDw27ADStZLiCFpz1JZABmAVE6ykq5qLp",
  "key27": "2b3q6cpaddR5dL611iUUVf9v7oAJ9LkKaWd43F8jy8zwztVENweybKFqptmKaj1sX34PJSwvx1nGD2vUBUyWiEgj",
  "key28": "625VweDf2PFZDoaKoJRiX6sQr9HUW8UYapDZ2nbiTiMThmsy6s4qjr6j4aMvWfkBWeo3ug8J3SmgwP4VppaaNaYC",
  "key29": "4nDqQakm3YjNAaVrcYAp2ZG8D8d9VdULbSPzq7dQkaLZeGBXuKVUnHs6iwNDoJaU6P8wgec7wUAVsQCEFfmDp5RD",
  "key30": "uUAsnxpJRdDF2duD4NGQ26f5WZCLKQu9w7z1DbdofybAPwACcZnYY9JeBKQjSKhYu7VwnUZP5KKHjLS1xrP6zY4",
  "key31": "3vXNetWuvPLLyrQDVm29sgyUCAszQiKUBMJWnaUsFp4xQnyt8dnpdpBioT6g27XQVCFwpDuMnrpFHtiXQjG6MeLz",
  "key32": "5B6dwsDEhPTTiLZNYASkg6s8aTbWXR8MM6EEomf9v9QS2AFQKqDaUNPB3Hf51UQLTqZmMDJvVD6opEiSnVN1VfQm",
  "key33": "4zYRyS18Ab8xVGv3VxVw27HNyBxasgdvQJ57TUmun5fYwVc74cVUufKiEgh5SZRmPRBFyfSZE1on4Y7sSrAC36ik",
  "key34": "5NXNseVqceCyUeeFegAQoY6ECzfQP8eeb7eb9W9oUBndrzxSw9ygQMkms9zZK7E4TAW3WJXzKPhTvRYgZvkWq9rD",
  "key35": "4mvxiUR8ciLPngd9xe4jPfcYJ53fa2s5y27W74vruYLFuMYJS84Tb9TPTSoBoJArdCdPJ6WL1xULwCVPQ8z9Lprs",
  "key36": "2zniumiGjTS6Eyqpvkn1kFcv1T83jMUsDw6TMiebxWrYN8Jpum7LdNb9ooB7yDyURsobbeC1ziPmuwtVYSKJVXh9"
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
