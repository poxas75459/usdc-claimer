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
    "aGXFWovuA9nJBnycSrnPYGgVb25qZC6wCFgA75QdYXF96WNKWJA834946zdqA2bcCMvY2RVX3Uwwy6rTCbZvc8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mL3MNZWx9mX9swRGAnJVup6Zc9Krvouvd6skjCxWANzqAFdmGYjPKpBsVWZC6Fjq56xtLVjEzvoh4tEnX69EvmH",
  "key1": "2yRBkTj1rfueu6mjwf4GRvjX9r93d75xbHvT38WD8BA5jKrjJpkKfLPDNvztnwfMeacMrZNrMea2Ap3X2hPT215x",
  "key2": "2cU3s9CkhpLedgqCX81H7Ce5kNuw615PtS5fKs37xJnCvTKBuhRw9Cmb8sTHLYtc5NdFmh6ti5jvkt8UcpqAYeE3",
  "key3": "2gi6MXJbN41VBe1ok86S4oZXcYxoKkhnv8MRj1R8qKMRDUDwggZDjUEeimqcHeFq5FMib97ESbhaca6QTX7D1gpR",
  "key4": "4n5LSHnhZYuaZavoSZjmJzCkMs82TcWo2RmqVx937BMibUPxyHYeQgG7tTsoNvWCAoS5juAJ11CHmm56hRNJgtDp",
  "key5": "zSJ5sNGrYVcX5fEjco2HJoucVafcD4sz9nVYN9kME7a7178znJRHDHCeYUnTyxuw3xG1XKnFkLkYhA8KuQ2h61d",
  "key6": "4bFoKzkARxtA1mEqnwB9tzGKntFED8GFKtUUA2UMsnM6xdyJfDKwm7hA2LydTPTzhnm5cexhnfUDHc6bKkSoSKSm",
  "key7": "32MJxsQohTVdrGFqqhCu73H9s9oLUgFy4dTN7yyvgF3qgjBVzDsgWA8ZbMjdCfQxRGmmDJ5Ps95ekZnBSz2tesM3",
  "key8": "pDci7Kxa6VZGa38oinBzt2hV33vNdAg3oBXtwgjZXmWrTVeMbSzJkG66pV82hUetXPsh9bUHhqGHgoPa9ihH7FH",
  "key9": "4wBkhkChdHhcsFhpuBf4eSEqZo4AJ97vEqL7Q9AeKru8cqge8pDekFM65mANj5vfej8Lyg18qwGBMyD6SpURMyUP",
  "key10": "2LTMhiaJcYGngQvxq1JNwkKuSmoJopD19DHD9YtfBV5TVA7bubGhz7SQEJqz7CM1Uo5YpE5smC8UDNYetMfEU5Vb",
  "key11": "2M3V3kSmWVRLSDVgqfMwj8pvWCjLbzC2ZZW5UqFXnFE2ZHeo2P2UmqY18BrgStdbqVJPWQaQaQpSHgmDYaJZo8rZ",
  "key12": "34PD4BFFXfzQ1XExhWkSdTfY4RPpMB3YraRXwRimbzpJT67VXncsM4nDB5k977JPY4DdmhEJt84SX7Qdbt1biNJh",
  "key13": "25rriGe9wzUZvXdNWtxVCrtVVPxvRkGeLSCgwRCUcPqwh1b4J9KjD18jn3phPPHDqBQ8yvfBiDjATqScGZtTnCqA",
  "key14": "34kKJkeLaAcQgpHBf1Lk7SCsnX9wWzksiq99Ng55JJCC6HMeB6PtiEy1CyvS3AcHg539N1AA2ieqSidzoJYjh2LA",
  "key15": "NAX74cVf47XFezF2GT9Rgv2Wi5C8aFrj5SyBdhdPJi6ctTWwv3bAGrMKCtNcttEQtaeVQ6V2SifyPMKVY54jY2s",
  "key16": "YFuaaVdRtFeXrFRX2rxioAfm5a28PqEyEvTfgFMUFChGXUVXabNxYrfrrwzWqFKQsr36gTz1jc9PpjFPiW848uC",
  "key17": "2yVRXMyemeKfMNpVXM6swFWq225rmzgYuAcHsj884noBehEVRKpwmPP2b54Cfwoe1ngP7rDGXUFJmXecD8ytGHEo",
  "key18": "3mtnnNfQQ3Am2Ququhj1WfB55rCxKodByEcdbFYTbMuyQqBqjhqnVjjEN8mZu1k513joK8LhKTgHM47XQn9ocGr9",
  "key19": "rrZca6558iox2vsYJRr9bVtxcNLPupxkTYmUbvu1avezwiuBFRgNfv6ypv39Ms1w7o3qRdNXvBhCwi91g5bhs6g",
  "key20": "3drQLgNNfLx4W3KDGR4H11y4hUgbNfocrP5zYWV2fuHdWn1P7Jj7Mwebsop6gTZb3HTEKs6Sz2Sfh3evJm1TKDvN",
  "key21": "33D6VtdP76gZH3yRSxmGB6dqWqbDUQDMoB8f5pkb6skDF5szjKBzLka2KVQEwVmyScAv7qjCeEXVsvPmXfv3SFeP",
  "key22": "4WZwZfcvjqYH4jLq2ZRXFUReXPvBUQHurkwiwrTegTMMcxQGPp5ZdQZqc234d9QDpMpXtSkqvTdHjPCLpQoNzz8x",
  "key23": "3W8xMoGj89siugs85NoJUiBGd1aPViBr7y544hZod9wfBQdxPGdVa8A2RiTP5omExriXhVZKSq1fFLS13eBqWjbD",
  "key24": "5i1FnNeWmsjEUYCE664gvmfvhEYj6nSfJMXhLtrcUGxGRYrJSvdK1Y9mJh8je2zxuMu2yP8vRhECb3AZ84UPb8JE",
  "key25": "3syjPKaaoZ45hid13QwtxDVTKvqcG2Lm8Be1UP2LThQ493GdxXKFETBy3HMYX4R1v7vx5zyYCEiBrPHfNy4VyDpT",
  "key26": "3X7WnZuiJ9GWmXmaWUNvYvfNhQSS3FpfmNoAw2ytoMmFoPs9QhZJG84cFPjoTvs6ze6Uto6ByDeWfSHPw87V6bvS"
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
