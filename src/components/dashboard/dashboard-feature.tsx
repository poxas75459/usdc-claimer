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
    "iXWv6xRrCYp1mtnGjF5ZcjFUZ41Fr4G5GAXmr1uZardzGnx1V7bG2wKRMHggd7jNZm2Wn1nZYEMuC6Cn5E5QJRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dHZdm5vaHYuapSECMQ2jWKuUToxjFYuHDRiPm3324RgfXUXXMASH4gL16G4ruvyX6PmBUXETCwARHe4tuPncjpR",
  "key1": "5rZQbngF7kCHmyZeD1dUUCqrWAQajm4PkzDq1F7MWctJaDkd9U7FSFhxGV2nJFyWJzFeaCFGoo1LUojVz7gRfabZ",
  "key2": "3qjA6LfRBdaEe8sRxagXCrBHu1DpQ3PxEw7gcThWgczKA8SfMeEWs5J2AdwAWGiJQCV19KW2Pwx3Vbb9t8GQ968h",
  "key3": "5H8c7PL6V4FFDphFZ9FKEo2izDsFSRrxQ1318iWTyYvaRj9kunVdvf6MMHB7RE1skaVGkxNGQYSMwxiJLndY7Lz5",
  "key4": "4bkiLFZ45NhvdZvxRSeevJL9ZWP4NuZ9sPTyjVVnSwhHpd1MdGgfJ8TqtMthHjS8963WvaytsLwEKR2D7f89EFEg",
  "key5": "65zhbMm2drLLKyum3cSEfNLJ1j76o2ABQLaZyqCtKT1gZ9ogqsszUh7VHcFB2VknbQ1waMLumQtg7akr5Bsf8cx9",
  "key6": "4ThjDSQaiyTZBggEA9z4s7tDZpzX6CL25p1KFB56x2QJjRfXn7WqtsdYr3YeWyZt5X6kdAwSNJqriRwoWn9fUj68",
  "key7": "2m11QCFTzXAwKZG1hQ2ZZpsi2mTddn9trVUB4wwNVuK7EpmuiwTbcP7tpjy24Tka1cQERTWgsVUWkQqTsCeZaaYH",
  "key8": "23fnsLHarWDPtbu7Jdc1JxDhuJnfCYZz3V9e52sMicqcfnSSGjmy9xHiFkDHq25p8CZbdsSxyNLHY1HGg587aqB8",
  "key9": "5s9LbCGTkywGBhaa9YSGPwkwdn6ftAnETwXHYWki99usq9VmNEWx26ojV3eWvwHdD51pcu6FcC6878NrHkdzBgj3",
  "key10": "5m36VYkaqBCLFSKApvzZQSx9zvDsjWVz1EhYYitZ3VLD9G1SmMcDcYs2U3DXvVPpyvjEsm6JTxvTV8toTk1XAuGx",
  "key11": "3n6ybfNTmaYarL5CKD8Cccecw48dg8u2F6krRngtPQZ46iGeJ1LCBwazKcp5mAUp41Ep8R5HPVQaJTMKgUejUit4",
  "key12": "5vGQPcfarSaqVwzgs3VykRVbd8KdeYAJHnpxrdrwCLFHWFx1MfWgkRUoGGBKm2AMTvCNVYrtYtENqAbMbYvYeMJg",
  "key13": "4ij5TKKqVxbPMao2t8PthAbsqbVR2JcnDuwZUVLVg57mbDfVLKuW1FvAxZJ72MafuoR1qqWmxYekhJN8cwjyQUUF",
  "key14": "4dCf65WTwx6nDqdPGR9pqJhzAhRjt2mvBujhBTkF4U9KbP69C7oRHE2vp5N9wFg5giYGbkSbb6gtiW2z87SFcgXK",
  "key15": "2i3dAsqRnncYS615aj44bPMPTctECYDK7GKgsu1ZWnKCuU3M1ubDjjbXyF2WufTA3Df1RSsqVhVyvftChFwtQ5kP",
  "key16": "5nTjdzSBwWMDRGVi72eCGrfPaxe9hT7Ez6LTz5u5CsS1UXfihRcfNhmA2BF9KRyJToLhHCDtLLv3sc7Zpwi21VP7",
  "key17": "3jFCdoJJqKSxL952Nv7z4zDyJRjdzTWWpGfq9gZhiuTBXcq7eUwqiwesbne7AaAJk1zDDTtYTQ1F7wQ8naSFmQW7",
  "key18": "3n4Dd43VmeZCmPFU7xaMrL9qwtzFDzFvT8brcdwc5m6i6cn6fhmRpADjKpWpMxdEvQUrmhxS2fTYutGjDGmPJvM1",
  "key19": "j2HjQSmNBkHjNn4c75JYVshdcu8Z5E4YSXxGzu7viX1onDy5t14uVxV5tCuCkCERe3Js5TffHenMTqnfNyYqodj",
  "key20": "4K1RmkbFcVDrq2xtfHwxt8Lf2V1QUxFXM2A5mq4amJUzhi6QAu1LpQLqbj65r5feHbaDG2r3hB1FAvpHsPqi3Hi",
  "key21": "5GC1kU9cHKpZAdcZ3bHTKQcvCmysAQjDRAM6qdeVEKepYoytB2EJY4jqmMom1Cw9rvru3uY1v6HhHYDXYgRUGZzW",
  "key22": "5LReZEYYU3kXUiL3Q2T8RPpdnRtsWvBUfbkpBnnijjYr65SLQeNbN7XXryR7cbx3sHxnbQzvkPBNf4cRuqoMWGyL",
  "key23": "gmGPeQiPv1LaEsUNtdYAABtZTcxVWbBSUGcrYDC7U7hCbzYpHy6Hmko6HRuSDd6h6t3nxuAZQedceQ4gSFe7hr1",
  "key24": "2pm1j9QNXomcEMSeGaXe8cQSsLm1onNkT9b3SVhN1sbk3eiXLzSH5uVWDGtDEJwprg7qxUGaNRnRk6gEDaZnNJFC",
  "key25": "3EcWLwho2eSg3153CvQ3LWEVpPmFF82iztaRfpJFiEWUfm7JzR5SwCKxuFcFR5bD2VrJoMtLkr45FqdbZaKpHkA"
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
