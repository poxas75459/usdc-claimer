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
    "3gVsc4euRjy9QgB7jFHmKDG6Aq5vm7S5AoLdPkgbvF1yp7PG6bPCiErS3FTat9wUMpyNqYVV4SGk3BL2dkB6Gks9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xy4aavNRcsX96L4Et6Z8XMzhn4S8fsiHPSNwEVneB8DRfWayBbCyyca5FmgTxKefCD1B6zmdPKygeEgvVtJgtP1",
  "key1": "9Sbrtt23oGAje5aiqFnR44tGWarfmZjrgGCUiJKPYzZxtqQaAtAWiPiW3d4XwxVrD7rx3pAFy4opBWNPCrXni58",
  "key2": "41L4CEVb4PxMNKyrrT3Zbp9a1ZhqeFpazSDyBkurL71XQYoM2w5F3ALsPVf35KaiXu8hx8KGd6sVXkRBAomttVCV",
  "key3": "4LLBx87nEFY53DvQ6RH9rLkYxwXEaYGJQSwLZR9ykvEvbEP6eJ4B2fuWksJvTNV5efMoXFeymRC3qP2jk3cNSSYw",
  "key4": "4AZvCpBjXpDA84iL19R9MVgNKoKb3eFHtY4VQK7cxRqMJFc6qeupVBfqA8zCmpa1iGkVQpeHPUZq7vEh7GLd8qGw",
  "key5": "7bcjP6aKN9KuboPZ9oMUjrS1rViKG8rmQC5jGq5h8r3vPzSDX7SEnfEZ6mSTQXt3AgVQQn1i6oAWEEc8RyVe3bG",
  "key6": "4CnEs5TBqyDfQdJA3qruRStrWv2twCEW9u7gN5Sb9v86kCF8kHceSnyHfUV855nbdKR21MQ2cnPfeYc3CJ7catfZ",
  "key7": "4cb9HHJQLjhL2wtrAKFgKrfj31KajsGdMS3weV6G4X5xBwuvrrdReGyqH5Ak1zAPZ7m64WAXWfVw6nzhv1ipAAW8",
  "key8": "33SqpgLgrUwxGtucADb6P8jdPGDq5wy9gvTp9xcJ44g3hqeVwWwwrCumZSCitnUgjHuCAt1naKZaXpfm8V8uTR4c",
  "key9": "4vedEp3dnHx4ji6gvC9WFCPyGSGaX2Djr58A7ram4NuwehzjheVwRP8Y4CZ5a9PZ2oHRnjUpWwjBgcKPT2cwFhnG",
  "key10": "33vBRPL1tssM8s1iBcHgkFEBoGWz7r1biGGyUp9v7t9Vgw94P3rNRRtiucsQ1VYNqqsqB5L4dxZVcefFsWfyq4T6",
  "key11": "54QJuQqGbayufiDsxegtBGVuWeq6VheJVjFxEPfGzbjPQbuh1Xd7wESUTtyYNF3j8f22EgHE5nwSSavy3HjBLUtt",
  "key12": "4ytfNvn2xpVpdd7SBQYBZ6dCH3SuAaGkQ8YHouypHaxtCmwUKhAix5ASxfyLN7EDb7BfhRFCQLEGh4mtpKqoiAjQ",
  "key13": "NsqD2uqHggsmgSF7DJ9sMtZHoXpUvFtAyWNueJQvRWZz1a8N4bNUELF4adws2RhfmxXoqL6nXLiWavfTWqbu2vM",
  "key14": "5mCV6u4LHMjGbLNcfr4BqueUn6cCqybmMDFMEboUWhM3oeq4oU4LLGtPGPP7ktHjrbZ7ZqMRRY9Qxz6pThkSPeKZ",
  "key15": "z6gpGsMtsM5apjA1DfseeDsb82VZZUbuqaSyUePS77hZjfq8mw6TrRHnfHjsJiihw7ey51MJvBgJjACgXhbVKFi",
  "key16": "3Yw63HoSsH6S1qZKMym9yjCqXwV4Gu85ksM157GRQEQ72t6eRXShaycmw5jHDKiomFzRxkCa9dqiUMDsBe98Cyvh",
  "key17": "55cKXM1ydzidoEWN8gEW6KRyqMcJwgoasjfPBr4Q7dWXnqgFLY9Hq1BTg3MVXqAkXKGnV4d1c15g8bs6V2noAf1c",
  "key18": "3eQxb7wkFkN2a2YpNANPWPDyKkS8xGfnLh9TviRdvabGDhgc8YwJReYaCktG9DdgAx8SGXURtScCHeGSLuuAkNF5",
  "key19": "4rcxTBc3zkmrDePdoTsDWyoWdcqP7PJZYFwaLeu9mtTAw2JXCP7BbaVmf8NHDZB7wcGgxuKThcVEiyntR1J1rwRL",
  "key20": "3JfhXQAjLkxP9q1XGdbN169YnTknpJzBTJKBt375yewjYWXSrrRUsAWVcnJ7qcDzBFrrZ3z797E7ZM9zrLtLAbeh",
  "key21": "33A9twZ2cmerrv2TeVEn9twn14dFnrWp5RsgUWVShJ54X791tgSg5Fp8qQp3zm9Rbw1uQQ4EPtJMXqkyhT3bViKZ",
  "key22": "46gVbCkjGWTgiSAWuLXbRc1qF9FpezyRSnRxE86fCvJvbos1i1mg5YqsYCMC256Ego1fiE22qMQkXwijYi3aXyjL",
  "key23": "3axYXagDxL1FV3RCTCgThWYTKohrHe6py5zbwKYCntD6h8rmJsB4WEBAG8LSzDuxMvLnvgnis7Y6NQ1BKNejwzdd",
  "key24": "1RNsqXXTpzuJWee32SNbx2GdSdugR3JZm3rRE9ECGV5qUXUf73Ad5Vsof5tTzLabctM1pRotDDRhyyjhKFHDqQB",
  "key25": "3X5KDbNPPATnGLNCDtjLsnAhDerK8nopRWZZEQfCv4TPregKfivw87emRBweEhy16CWKYmKxFgNa3EWshiSArQUG",
  "key26": "fvPvc4vRE5CtjHbxBrPWUVcruBp5UASijzQaDsMnvXoUfvT9RByUrEVtDdotuXo6K4W28KR9qqtjWFdN6dkHhw2",
  "key27": "4McHDqpdwBMwGVrM72qBPL2RysZm2i7T11dUGai6tvji9hGK5DPw3EYDvDyfVX4VKfWJceUCA1JSjXZUY3zz4meW",
  "key28": "x75PrbKo6XDWpf3XGqd84a1cN5Z5mCsnbW7LxPS8SNFp9qU8KJ7hcoYyXKfGuxvKXjuizQY4einDdJfSNh9Ex1f",
  "key29": "3vWC5RD2YmqWCpc9W4UGvtoidd1N7g9u9i6thSSy1oou87tEFNiYbcCgxNjSQhipos8FQ4WEMHWmATTQSVxgHV2R",
  "key30": "237j6GACSmxQwtWPVztKfTeu48tiCTtpy4LoyKRLGT9sobmci69mWXh5HCrAQGUKJUcREvtUy9HswvzUhJ1zJTSK",
  "key31": "3suhWe8PNS33DojvurD3heVbrQgiuucK3KPcBTBt9wRXt1RvbPENucCPRAEESosKCzET4Dyzh4AKVss1hSex5kRv",
  "key32": "5YpVsLW7UJRmXdo7VEqMcoAEuDV5eStxB1ex3a7YMQURkrieznq4y12kpfYZrH7R912nLpUnkwNAB2MGPmbXcBgv",
  "key33": "28qEvUG2CmqWNBmfWt5MUj13TzWpnrb4z3cnUju1bz5Vp9keAvG8qMLE7XtuqYdApTDypkfAFbaWJG2DwjX9BQ8p"
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
