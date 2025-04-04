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
    "2dV4o2C5eWjbSKBuKU25Q2wy97cUkmErbjRqmkSTX2bbtV1dVE1zRsRp6D6uV55WzEHzcNvMs5b2CxuFW3vgzPGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57VsWUaKMGkWNwChBK2ZZB18EDHkCe7BgdoubqjDiCMSQqqk3jjxxg8Ftgj82iPVDBpeRRudGTjBcZpYf2tA8qde",
  "key1": "3F8SrjK6BcWypByacDvxSGv4qUkaJjkAYzbqKmp9Nxd58ZaEGSy9BDEiFAQNibazw217SXkv3G67CYDuFyfbKKCW",
  "key2": "4Ksjt7M9KyTLyYDRkz9ofDXbNdohDkH1jhyb1JGcL9pmQF4wJW2HpWSe3BbYQXT5TTCP7GQfKpSGKSmL9adJQeEs",
  "key3": "44LzEQiKSHT1oEXqQRUhA4JP2nWZtU3ySstYaX7661AaNQEQdJ6uZmow9KXNVNQaRJRNs74GGDAfc6dEGVQFerik",
  "key4": "F3T9LasEiyozF2P8FhAR9xXhdAjAwsu6MGE8TH6Y1v1H3RhZTzWfvLWiMoZb7Vivt22zPyqvwPxMLjpKs4Vc4He",
  "key5": "36twv2qLYFPdKHYuEtRXjyFBZrsMEF2zo5tYemjdoEQWLWZ42Y1LfHGM8NjW6Hp52gBWHNQ8WHsgMQ3HSnZgAFfg",
  "key6": "3PsZC82Jz7F8SrYwQGpdNmr9KevAKFY8NcZtoHfcdnFZgTxyyvZse5zj5CdyxXEerYCUJit83ZR9N7sZ4tLU3ksL",
  "key7": "3D2qeUSgcBZs3DKb7vF6BnPqDrZ7j6GqP5CuBWx3dnpdETxX3GLrNaqBn25ZSxZ5wfdB9NMcdksQGawskaw2z7Lm",
  "key8": "4KUo4R3iRp22VTVnqdT29LRmeXBTdhRow7JbUtHDK1mxrFbWHsXVTXnTKkivVuM4jFeA9uNMBKZkZe2V7MA8pn38",
  "key9": "2TEpaKqqNwDv1wujhY5qLG3gWSqiQtGr5mXoAwFt4GzQTTqadP7xVdZ9CyV9HZ2Fi9eXiqUhiePEQkn97eBGnGAc",
  "key10": "5A7HWrhwzhGoEFSSDoEGsgE54dsZazedei2Yy4rFGGSHxWPNLWkzT9XePxyPotkzngt1tHm9taDiPrXjMohwsVGZ",
  "key11": "3E9aFQdsXo1pgmvTfceGzzaS8xGB7wbgRTBuyueaYzKid8PsaFH87V8uAmqUcYZUTzU9uo12vFQonAxBFsYx38Tc",
  "key12": "5i1o8gMyKhztWf58GibyGQDTK2memJDQz4DSCCnrBoXaKbVXNnXHyngsk5cJdZyNbFxmATfnVXxHJeR2a5bnkkbM",
  "key13": "37vgiJ9WDr8ZLY8uCW69UYm6yiCGa1FDwLJWthEta5b8txHH8axxsM46FH4mDhvPaUinSqu81r1zKhPmRYMYR1pV",
  "key14": "3fv4DBWfuNoZKZvo2JDsXXzr2VmaFfSCtSyjJugo5YDTFzV8dvAkQNeCtAN157aaKiBU1PSc7Kmxjz1xVFe2Ey5j",
  "key15": "23BhmPt1ByDyxq3A6BmSsVJf2fXadq7VrqnwwmbNTWwLWYHwfPNQ61oNxQ5Vov2PLKPb5jkJgS3Ma5H2sr8Fp5ao",
  "key16": "5gtsjMF9CuNK7MFrTTUWZD7ZzzH5QjaVx13AySFf9z2MAx2JJqz7uKt1aku8CSuZwcBuv5ZETLKkWXE4v4dFcPpT",
  "key17": "4Yh5HciC9uErqCezbfJxsBJjQXRs6wmJr5G2nq74DzgUxxrLnS95wDEcQ1W7op1znZb37iF4FqBNB2WYGPkWCes6",
  "key18": "5EuEzxLtYNzTKrXny4WCXe19biHf25kY9dJrSXsiepyZG1DQXhxtu8vK32NsyLXYRfgZiKjqRL8qe5ThApgZG33q",
  "key19": "5kQEJJJQf5ptQzyx4UavQ1j28etktdhHKpK8Gq1APyDKNmP3ar3B3npD2eK15uz4ryzBRJYPP6BNdctf2F6jpBaE",
  "key20": "2v5MiLxsL1EDD8uPsk3tvfdf5SGziTqpZFNX9rVtPX1CcxLq3RRikwbk68gSw22KpPFoQ1kyMgS85WDkLdhJebcR",
  "key21": "4EeoP8uKXju7PMt85MNnbkL8ZWhmQyPn2job9PDKXesgJCJttqDYG3mw4tYDt1u5baCwaRaFcMUdRhFQSMxpqVTa",
  "key22": "43E3dDTxFVwPhvDD2FEhoJsfNMjYfJSYZCVYRJmAT8fsjd41e3sBWxLmKQQtSvYDwzBcnuAyvHGZ3vqEEAPc2KW2",
  "key23": "3rCU7mRsWPA7iqU1YopUzakXKeWJ3xjzoWGYU2pZD5ZM8wNSYDtZt5m665zif8vdqMxYKGm5U22tTJaN5UyhE2UE",
  "key24": "3DiRWnaRobhbrVwCNP5zgeLGb58g8J2Me5Y2vXPxBypedS1Pv6Qtrrz1dZNraRt6mVimzhfjXFpz1YSqonTaWDeX",
  "key25": "5gCTsaeHDkAVhmBHshyevgYeCsu7raXoMiuCwneccbqhuMsjx7rJ4B4MQi4EVYXXPE1zPAU8Ct3TUXVShNVJivCB",
  "key26": "4RsLPurJcyQ2QJSZFrENC85YA7G2m2sqEiJ8bQNF2pR69JwvPUC9C9TuBvKkcEshnsLGaBRhwkgb3xic8AA9raUZ",
  "key27": "2sY84dbnt3gfBX4WgimFUTkz8isbKoiw91ksNMJXYt6gq9Cu83eQXRx21efd3jCJDvMv8ceQ4B337E3eVnbxtPrs"
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
