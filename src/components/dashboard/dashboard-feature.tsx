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
    "4nNSZ8qEsRLACXys5aJoDbr74KHcvxPtUhjjeMFcGF8S7pngdwiSdevBDGLYcdB94ibT4UJ354Gsfm5W5CuTsCE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w31GdSPiETZdo3KDaRtArh5BXPkqEfMSNYkn8NgxRUDnMMed9d11k7dePEF1FmBAXsQUMCGMuPCrPMbBRRFHKa2",
  "key1": "5mHUns5b4NbeXHijouPmD9jhTZMFN898BWnJ4poo1HGuCkB2fyUh72Mcja9AuE46Cqywk2zDhcLEX9TqkyJMeBBd",
  "key2": "2RsYTj367c4wsr3HbGMWnV2hZRFnAJF6gv1jqLDzZBzG24NRiGRJSQcoi5U5Vszj1BgBnb5iz7PENa85bJM6Ayj7",
  "key3": "5VMxq3b7v47aLYs3qFV6rjXpZpWtug2UjCUZ8PsneU12MGyDBi6B23H9ZpQhyq5uFkquP2dWnhfadDtLB2SzVjct",
  "key4": "5AsHLdxB55qqoM1Kj391BNQaZSrMY6tJHnqHn5judjWyjhynV8oRsrDWLYFpk2XNq4c62D7iXm49aDAVziwL8MUG",
  "key5": "yz7tZaTDHBLqkHn3xHsuKsvztB8Wz86AwEEGEdPTB9rvRfzYqHUGuq8sLNw1nayv5qQTY9d5zqhQSmUe6hDGv3s",
  "key6": "5XnCtVEx9csskzKHbZ6GTdbcaUK8rftD3PHpyyy9S7rhVDcbBucdbaUHHApuVeSVondVUEFEj5dwZ8PHpTizV7s7",
  "key7": "oYx6xvsqTbpdjs3nJmWPNT4E8XwBKbng2o3hEmXBdLNQmo6gScngossWGZiQ4Pm9ES2Lrcn7BZhhRYtSvorpgMa",
  "key8": "BtfRDu3PfcFAyMiajNdDKnmyKistgaCxYaZCn5LEHnxkPaqeJCg5tsSzy6HrwzAY9BKx1kBo9sSndrN9LNhbDuV",
  "key9": "cNuZ44FmMDGJ3jVSCdzZ2pZqiexVDzcGieU9s6rh6FV9PDHg9f6M4XaWedbEcSuYz2iTU5oPfeM62rmeob8DCMk",
  "key10": "4ctrhWDZEdkF2B8dkBCmp8wUNsAQee7T8dqK9quaBEGkn61coipjL1FgV7dbrs5zsmhaE2Rfrju8CM6Z8g1jD6Mu",
  "key11": "5pAyj3vpkaJGE1vTXMuuzco5TdvMY4ezbNRzoF4wKxhYb2fMHMBh1uw23hfe2srS3a4gUJwXZV56JmBhez7wtota",
  "key12": "5BbK6ttGF3ZpmttysyE1EKQDHbhfQvVrzR4mZT8pRA2MDrDm9pS23G7bfp6bhCRSfW8s6jcZ8s16qaxEgMmb8KzC",
  "key13": "5akuPkxdTEF695vY78h8qmpBVvmrMsDxejNCwRAV7398HMN5hHdVAP8JrMNmhgWs1weQwAitrPCKEkt1t6DpTmyP",
  "key14": "3gpZY3Gbr4dkqdRHvwp84F6EwCLD7ECVJDPpPiWLJCQNYAeyJFbU2gAvzZHBJp7ZbRsAXJ6nHZ4aXMLUqpVbCh5Y",
  "key15": "2R7jUsvfQvzvAz2toBS2apX5JVFzgV1UHWTEL5M3RDbkCRZc5f2dVojP3dZKKSLY21dJVRDxB4kRW5BvUVyAoAAb",
  "key16": "3qCaDqeXH7rCYUNkkYpj8NQ9jvsyg3HGDQLVs91XFhqXxMGm8qyYGhEL9gMbLCzaPeJTKTNvcz7SWELzs8AQ6cP8",
  "key17": "5UznV1y2Ttj9Ac5PwDG222i5gWTsrEXxXxkYpsNgFTtsdPbGzJEMEUbRKo53uP9tbxma1NMni8EmkKcgVhmyhSof",
  "key18": "253U48xG9UKCTqhKiRb9NwdCM5UbgW89G3Y8nkrimU5mCkffYobaY6c4BfkL2vPrivuAw68YAbP9GeHQT1VqzRGU",
  "key19": "3mqceYTaKtQ2P2hCAVneAL6jjMCPvMbV3fuWfgA2JAmgVEprSHJesctJNCapqoL12qCLUZ5wNBXL1rCvYNa69JTC",
  "key20": "5o6u9NRUv3NFLEF9a8UpJcNnuaXCR1sscfbqh7qFV5YYKXTW3pvmNmu6dB1tdNWsSMDugkhJvPwcXrH16nRCcq9u",
  "key21": "49HxzksnjiT8qbetRKE6wEqHSH36B8hwkFrGgKW8ZrqtMdWz2veCUPTRKyWPfPpcw8KwdXYHp9RrZqp4phyyJCsx",
  "key22": "4BfzHk1s6FeZDyBve6ysNeaSPnyJtprw1Vyv5wkuJfQfUPakURCruekLw4nTByQfkMxVs95FMoGdwDGV2pCHiwZw",
  "key23": "2K1pdRJd2VntVrGfV46RuafaH9tyUFHDHg6ord2tNQsvaYKXgV6qa4q22XEK6hUHrpx71mZoDroSaLhicBLG5oi2",
  "key24": "2MZabTNWBSZ6CXHE6LaRkA6byj3f317DCFGsBQKgCgZZrTRqYsEC2nbA9EvijYs7huTYWk8GpwBBEyrBbJuQtYG2",
  "key25": "67WTsfPK6q4UX8Sy3czkeuzDMXLRW4jkRCsQP96TZdKhmjDL8Rt36yrqeKogaxCEngDSNPQ8g6itNfqsMvHu6kBH",
  "key26": "kvupo89LwwHZLcnLp8hbccfPw5WNiYoX1TCLVUSEHmhMA5cZ3kg8BZRbDpi4BoYfrzsdb7VRmHT11QT3Q8DZShU",
  "key27": "R6UTUFV1ETwPL7BZUEfd6jQvY6sjVLegvb89iUrge8Kumxb6fBdVFLadUQoJYrgTAniUMC8EQZYeCAMiULftb1B",
  "key28": "uAPkw16dj7o2nGQGAiD9SUX2vbZjcVCoaSZMBnqDv6qVi329ZeVMGVQDPw2dXMNWCjecpCpeg5ckbfa39Uu1zMz",
  "key29": "5KzScA8NdhHp1VPMd64ck6J3F82DCuzhajy1rmatA3Ppu7ktT53RRzFhwq2dgNVL7c4HiC6f7Kc3m91Jqz1cWt5y",
  "key30": "44zqaab2Wz5KQ8B6RX9aqaAi1tyn665bW8ogYpHCii2MLej6kVRXxib8cMYw4BS4e79zqgfXPhc7ohy52aJ8Acr4",
  "key31": "YpovgHjmH4T8EEViUKgrGaBHZJ7zWJ6A2pxd4u5XeTPTmaxxM72JzfBgPvY7njExWJWcpLQZJNU8Qd3EWD77Bz4",
  "key32": "3A1dP9QtdHydW6UDWTQksxdzHjQ8etbYHnRncynHDhZpF8aB2Fsf1tRf9J6dRnrArskeqB5zqzaTcarb5bAy5TRd",
  "key33": "JGQf7idRKXtbomhgYA2hXKMVdoqXaW3NDn1Aj5H1BGKDVkMe8YkuxRCXtn6QMz9KQR7597Qdoep1gKbJuKDfmDu",
  "key34": "3KzAT5nm2oUTh6fiDuT8sp8JWEcc2ViSYkXdw1b15EjP2zZyRh5AbLeMR21vm6HSUTAxrUDff2fXkw8JwisPWzsP",
  "key35": "5jJjCVwkCRS5BQoxufkorzBURs64gLEe57EmchjTJbYurNodAKbEto1vtANqn7iaAFZy3ghf2kPVhjqRs1ZbE3Mz",
  "key36": "4t9YFRQ5QGNQSYt88Q6JyheFX5k5eJ2UJ9JTtdNTLQF3koTeNM7fDhEsQH3YLoaxWddDS33sqLcviBij23XfJCmN"
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
