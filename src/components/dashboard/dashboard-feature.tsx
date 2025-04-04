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
    "2CPRLCmsPVT5nnh22T2S5kQaL3JtguZ8fNENkxbsmiaPZ9HqkMw8UBbjTsyh12w4yqmR7NP1FNfUtYnp22Uyswkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xCBmTRk7mjydk7mnqNiHAwNeMmPzs5eRXQBHrGr6pgGsXxBPGvKTou3hjXQTs5RaXiEjVMAxBLFAvZz27z6R2BJ",
  "key1": "BiW75K6uabGJjLPpcotJ3wUccf2m4GeesBrW3pHpNzYe5zVAV3XgUxin29GoHdKTyoAjCdGbBjfAbz3MgSi6i48",
  "key2": "64nE9AE8PUf2Ha1HxFMSiPApEn71ssjD918Dn74EtBjZuHELeEQ7miwqL8FudYfqLXKJomLCd3EJ4eoKohpKmAoa",
  "key3": "2FR5dKmCuJCnXhwTh8ZSf7Sp6uycoesytK4nkaCRhkURmT1GqCFf6WeNRDkGR8sttiZy6HxB7F3QBhrBrFojKH4J",
  "key4": "2SJVozCAJR4KvcLSzCBFyTGyC9rxts9Hfam8m2TtSucetpsq7gc7SnPD2B8DmkdVbQ6SQui2PArGbUJmSLxEnq44",
  "key5": "3iXvdBvRarL6fjVVapVFFf73YB22kQvkPFNrBx2atfyxMcQFHiJr7Erf9DnsKBMsMmB1gZhdZ5vstSATGupXWgM4",
  "key6": "47kdGPzybwDJ2Ec7sTE8LK66LHnLSSaRdYepbzCob4QfjCqFyYQXUXfpdsa2UUfUygd4fGAvjUKYoe9RDstvWg31",
  "key7": "wCLdsAA5CKjW3dx8NhLkeMafRuBLL87521ef8FLhvUmH58xgVSYqUdhWG6RZ7C23XFb2PPP5nP1XM691GQ9fxiq",
  "key8": "2v6ikzggosLh9jybL1VCk4msTPET9w8Q2DHx5GKGL34URXbsbm2ytMNbARF1nv2hBodamv7YAeMUxZiaPfLNmeK2",
  "key9": "414QcPYieyQG8MeKZ7M6HrqVQMdM6z7cdmZk7mmww5u4NhJZQNCesiZaSWKBkeiGXoKfU6wc8GMA1p8FikEnnDPh",
  "key10": "672HqLqU2oiHw8hnWiJkGTczHK78mqE1qej3zk1pMEuATko5FCJgppN53xLqsxEXrRvXjkYwixrS92a4unLzSehY",
  "key11": "P3XQhtvvVPij5BNVBVxong6wCttwyQaxmbqURGStSLrS53cqmhcbYb13iS7zC4pD9uHYx1BRmrgJ2vt4bEcCWTL",
  "key12": "4NpzDkgivrKnaX4wCDf3ZZSBFffm3PQpDsYrhim26xLAxnHvnZpr85EfcjqCqEH8EF2zS7n7BHqUZbwqiKZDNDbD",
  "key13": "2vcjLEeszajZSUNPJ9NWXeXdoUWQs9BnoU9tXkHHP6Wd7e6VDnRKStW8C5Quc373TmnmF8gDV72PYzei3GrUKfQv",
  "key14": "32569LBLdtESK6Aotvu2ANJrsMBRj2y98QqihyGvRP61wiHsiUipeWxVZRyHqVQG3C9HMbNXy1FAM7892pJ5vcua",
  "key15": "2i8BDY3ctCNUjTYZihi6aUy294MwVNbV5Fo5Q8YRf85B4kLW2hr1f16Rc7ZYyPTUBg3XbWRyZPTAGw7DDmXuuSfX",
  "key16": "65pXGssiaUYwKR4FnmXHqrTdM3nFn25ByqF5eQGSHxa1inZ92FMu5zHBZj3wfL3idV1DyGq3WnULBEvdHVHXPT76",
  "key17": "2bC3YxdE1xqmiwcRRKwJ29sGm4dq2zbf18HDqX1rwM39hQPGdNhBeUfkMiRrHZucrTNLu8jVj2TtR61akBVGcUVZ",
  "key18": "2yx5E6jbA7GLQFBexCmCygF952C5SRRKjTAY9Y79pwaahkrssnkRfwGj7hTYWB5xwNnketTPZQpGPPnnQyrTfpmQ",
  "key19": "2cjkonwptCJbRgqL3SGDqCkNWUcXaKRcJnARkgU8XXGDgZwEpzH2JowDJrjw6QZkvRK3fdeaZCBCh32iU3g2axji",
  "key20": "5Vy6ymxqMz2DQgcZwNBTXRi3nt2QrkEqqTTNLd2WRYjBCakSjb1HVco6GWFCEc95XdpeZtMvP8y13NXEVmzLQSbg",
  "key21": "227Jksr5FdoqfEMVzb33rLRceH8fnDzMd2o8HLougHTbjtaTzUuxDiorTU9LK8VmRxTwThVYoq9LEQr5kk9yjKyZ",
  "key22": "4gUonEZwCanYgbBBVrtq7e8jAhczsf6WSLXxiVq1yLysBMCpRtEJ48CSiDmUc1SaRgE7166eAbJDS6TxtDGbnDXf",
  "key23": "QNCfsjy1jRrKXyz3NUs7uhPsPo2d1yTL19ThxgZruS3WtPEuQVo8Kkvnaq87prJcbYkmia5E3HRwuvbsZNN5Y6x",
  "key24": "2iQ9zjYAybVhVTYh11boTL24MbFFPtkEWXa781iwNFEi7Nv5fZUBdyd2du3eZSin7RT9B7zGbKsDBvDEhPaESJf9",
  "key25": "2n6p7hubk63JHy6hdPxLQNWM9DH7wdfUbJ9d8BN5nZ4BwXeA5BKcSWFnVCsuVu9L1HSe4N4sPnKCVR72spNppHrk",
  "key26": "2p4Teb1MWTF55GxGsTB42AeqZaXe5M9tmEfg4WJahvhse2P6J9Ug7W9aVu6aECzdCjC2KbohUKzrzMRFobzVuC3A",
  "key27": "5LAVYmh3prgWVz444NsBxjrBPhtKR227nXYG1FnwK97ohhrosKedGEuNiV4L2x3uYyNoeBqjPs2z9CyDFAbTZBog",
  "key28": "28E3LSdRCgcXLhnYpKN7DHbBvAymYL653fe5R24MnhgFYd2QD33nsjWkxHwvxy88Abns5HQqjQmiVy8BxP3Pww9d",
  "key29": "5WEkiRhzd4Vq6n3bBHPNPTa94qqDazCCX4gL9ih2YL6jz2fLdw7D2i6wGjQQbYDdtHBnbTvomcjdDTitdDURMXqa"
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
