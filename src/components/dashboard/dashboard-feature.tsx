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
    "3TAVRQ8fMWAAY1oYELA8QLb9azi3snpXMHDcwzzCcd22o5zo5kdSxetsKGD4fGAyLuyKsJszH8EG9FctDH62LeqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cjtsiFg1oniGjFAhLvmdMxewq3LMDyvuv9kMscEFvoTZwMHw1ykm1GCa2HpaPSY5ZRjqCcmgCtPKfoRZGzazFLv",
  "key1": "3MgUZn87V57Qnumn6KjydcUTLrBCYheRTxSAv4ngVPuQtDuPeLhsm6twwHNSLn5t1jYUViJSwD93RwrJ1EdY6sCZ",
  "key2": "4HybctqL7rfQ2VNqVJveZ87VMXfGZRQbLcafkyWrfgsUtyzo8rCoFwYYATrsMxFUw8wNaq7VT2D118968neZcqiv",
  "key3": "4zapmubQsoV6JzWfbbc2ZxEJNBM3aubB14Gv1qTotXMtuPtUwn2jhBNezVj7CCYVXpGD6hmWoontY1UpoRdaCscF",
  "key4": "3VJtq7huSiyu66NBwQDs8AtGKTQrSaK7hULujyNGgZ5YHcNPycoyQGVEqTcTZceewNLEaFbHQNzVWZ1F9ecRtLXE",
  "key5": "42uv4UQDzPTdjLJNJFzTQ8vSSWqreRpxr5StGP2wuRCqzWQpMULwYaJqfqzVdNAMvwra9YCSVaBjrAsvrZHieChq",
  "key6": "2N9FNuaJ1qzhaVrbaJxMdHQ458C9i4okaiLpbP1UToqMJYd1ttJhqdPft2owqgZ87oZy7HePmR2zpWGKNRYwKZBA",
  "key7": "3Avi93i28cT4XpUWb9Zor2tHxr2iVZGaE4vUSgEA29H2tcs4nruvcFwSCuB8gdEUqw6Q8feaK3diKQsanVc8ZUxm",
  "key8": "5t9Y5WXrzBPcRr57YTkDCiqFdhGQZrNrP1tdfd29rDrruTw1zfxQZKProHfbAgkY4CBW8rkDfki3KqaUhbtdQAGe",
  "key9": "27psdWphPVz7X3uvpdnaFEEHQ17febPgThSdyFU26c4NdnEpskq1GiSGYqTJoTHUx8UbYcemBRLNJRsicUpnYY9b",
  "key10": "3eVHexZeQRzAgNgKhdno8p94HJvgzAytnkZb2bHbfjKENagWHtRAgT4D7T4FmscZiq5E9tyyUSAvSvnhgbQxLL3Y",
  "key11": "5miKmTBmk3piE5uxdWJbzVHd3ss3NrZBdEehLpxbqHtXDjJNPxbQwEkfUmjT4Wg4L8hGYRdBi5GeKBe8rmarJNig",
  "key12": "5wp3fnfPPyceAq6KbiCNr9X9psNhXmBQjYS2JXBoXfVYoGcUFq8m5iUMJ19LPjGaTLt1qasHfZp6Andf6HkTV4CR",
  "key13": "4BCpkEQyZ1waDDaxuVGeXqvpNvzDGznC4PZkzkyyU6tBnWS4wibZUWrroc7t78MKQfLuGrEQnFDhDEzx5waVBtKc",
  "key14": "5E3AJaYHwmZkEPKEMEnfRPzpVBdCjiHb2amawg5PBjste4yopiJQ3wtAdCWZMQrCwsCTiaRzsjfzwUxtcLjXUbr1",
  "key15": "ajKduytuwcModMSTueCeUePff3sdcuMbYbNoPGmPnJXR3NNAtey3NHCi1Q2GhPphggJxFixA7oLQRwur62wRoXU",
  "key16": "5eYDFAPYt363mnJ78HVqqH6PUVNjB2oDwEdrzBXYQZAi3YrTwUCuGyQXtwxUitXD4Nj3T5mxLvfjYeVeimnaPPjW",
  "key17": "3jUwymnegu8urBmXYjTPZ8KP2Ywdu7rLLjLzGE46MkKRJcdeRk7jbvuxtTsAbFdkXye9vizka3BjzsYZ3tgmMRam",
  "key18": "3aKNVt3dpwiJRYAdcSEDWGKBvGn6pkr4EhusEgWLJbcqsDxGC7iokh6UKBjVA4jBSDfTUGwo28qmgpAMGuBSKA6b",
  "key19": "5bDezHyHQW9atQfabq4PK9qFGnWSzinxST9ui2cfxCPLNdRHpB4amMcPkg74Pu5Dy183FdDmvy1yrbbSJ7c5FC9J",
  "key20": "2FTBCPwpx7uQUKhLWJsZJXpNTHYq5GeVkodenjVNzGwsUgodbJDdiuHcQSjT6JGm5ivC2Y8rRw6Yi2fmvMR7dRxv",
  "key21": "fBanw5m1efu2aH3E5g3aXAeZLkkZVXkAdXBaUN14B5dZgRkz3uxHKmzozKpGgL2R12EGj2A9Vy82dpxQ5svnh3q",
  "key22": "znG18TT8XVZHm2CpBrXeQjv9NoFGbaKV7AGXBkNRAKdVnFCBNxhpHTHhdVx1wWAx8XrLHS4f2ekJsoSpgRUxfs9",
  "key23": "4VPP6VKxrVfTDihEbbAsjDATWnp6RfW3pDPcqsNxwQAyrKBf4iuEnRGWggnxZ7PoFoRGpgpNDeFSpvU96x5orq7T",
  "key24": "5UpXH2Zche7XpBKBNBCXS8E2iFjHbHAogRVii2jBjjWcbS61UR956jxaNnNBmfs6uHdzEeY5LynpsTG4YZ2TVBML"
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
