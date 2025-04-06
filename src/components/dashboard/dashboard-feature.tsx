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
    "4Q9ZAX5Rs7NTjMtUGq6LwUYGsCLQLfsL4QjrLhrZsWJf9uiWq9tRYPiUx25547L5ScZY31RsddirsBKb1sCfCijh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NT8moDwKctcU8WWuoiGG1xyUFL4CWitQBhbwf6TqYRjFqf1zUcz6Qo5ohpEUWyNLWSNP6aNwDmV6JoaQSzuBSPX",
  "key1": "5NbwLfgaBncGeuKBhjSxEKWyUevKhtgPah295WDLvWLgSyGVNfpurrDPTkVAee5We3vDFn2pAAZa1DP1wFN734i",
  "key2": "62ujxA6eMJvNumrc21MpKtmfHXdiGbYdrVnR4DDeew2dFuQc7fjZp2HwrkDiPjBJGJQsmqGjmk6Ceszz9NxNsWHk",
  "key3": "4Y8WhUMEN1DpTzvarW5rV57FR91767fhrn9gWyvXigcYGjBkWdp9Zm1f2u2FibAiRYkGQkHB7JfeJHzxveL4kD4m",
  "key4": "2ky1j8Qz89FjvJc4qfbT3JpSVYvMEjzdz2LXTbVeyXhX4grT43DK4kuTwkyvGj1kuYq53EqqztC79UQzZD9LJ1rc",
  "key5": "S67pzcZEdorCgkfirXuMRrJtaAddSrjeqwr3Vw9fLcarpW3qTKMnXjrsBgZ2n69tz6QBrgbakNd764zGDfyfBEM",
  "key6": "4A4Q3wLnZaCAg8yUjf7pCM1MtpEGqXi8CHNFKYEXc4KczwHAaZVQ98FHozSXX9GegdmkygoG2dXkniSh8ugchC8z",
  "key7": "63BfvhUghhhyj9VDf35po6M5BCJFZHB8qmN6YwHB48KjEDYkH12bLPxNWPXst1u1bjZmApqorqd816cEWZdsb7XG",
  "key8": "28ABPi6eAPvr8H6crv1FxhqTQ8Lmzdo47aL7MDHuz4TgM8UFdkuB2UdBrZtCPZ4FerD3wyAoM2ByB9R5gESRL7wy",
  "key9": "2nuiHkf629jLkwqtiBwiyWdkMVZPLspif2K4iYKFZuLVKJbzEJm2NHrtiGgnzMeNNKHvP3jDY24R7dxA3t27vSFz",
  "key10": "55fCPQmALm5nEGx2T9p7nt3dDKHmZUT8H3hRynuQ6sLQWyPknw5h1uWQ7kuUBggC8SKEtLzw3yihX89RFpoPE1Wf",
  "key11": "4Tzcv4DW9irrbFu5dywRqXC2LpvCNem5TbvWeMJCa8ih4YGi73xg6yvZySsDDcrAaWbktDgzpFRd9BUruGBSL2gz",
  "key12": "9omCCtRV4wjzr8Zc5Q9kQm52MvmZMRzyYs46R7DFrWuycxpksvSVkALaHqgpU9W4duos6eSzHZxL5mb4tQjx1V4",
  "key13": "4mxrnLWuAbvhVnj6CWszZzXp6iUYSnsGnigJG3EeipwGD49cDDKJ3xksvtxmkPChhdNvNT2ad14uzmfBRwL764ZT",
  "key14": "4mm5FJMySA9nQ83iNoDLpvFLMq4RtjaoCX3RqXPkBCg7LHjJ6bsWZQLnMnVwNYwQp1zJ6R35ugNqpKdZTrMA5vvC",
  "key15": "3diTQsexpNKJpzbdYPGwFYogmarMj528CisWAhCiSW3ubdep9zkGMK76JJZsU8w7zSHdYH74WpMaQ7T3MSxw2AVT",
  "key16": "4wFKzkPD3voe2pR6mSiVjA7dB1R1rjF6MGb1wwJErP3vPCYNN8TSijVUBexk42VCqBWCFBwZNuonSziZedMNPbWD",
  "key17": "LnpreNC8suyM3bjucaSz3ip7Gpi5q5ZYChx2gV2GaQaJhHvUYhWaxKvmR8gX5EuhirdASK8nBLgdtBiQ8kyEz2y",
  "key18": "2DL5UsqjzBFX7Bij9WrgfynxPmmJMjXLxcxHinJkDoKZtbW3BPUWuWt5JqGwLLwNuwyKWnhcjfL1a4XB99KK6aXe",
  "key19": "Ph5zsBQMFViCbB6VEkMJHVQqQgri2Buxthk1ik8HzyYFjCMmvrTsLMhn2VHymkH4Ye4gsrrXvEp6HUQyJCSM2ne",
  "key20": "3CKvN56acJ4vibaZQhzq1UMbQqNHgycb43tRmo3V5A32f7sn8u3HxxVgcnfT7VtRS8b4tNrv9mDFCVbWJAZKfwwC",
  "key21": "3uCtCmNJk8t2ek4MbwarxvK9ELFbZ7kPtKJAyFFB441vypS8gkfWDznnBcwrMn9vEu4Xx3kvRXv9ye8eunUMxdjq",
  "key22": "4jB7cDLmuZre1thbJMZG2grYmaSRkgeUfxCeeTBpRVcActEEX277y7A5vzjP2Zmq9WRiHtmYY3yJvMojLn6EWDpU",
  "key23": "3p61TiqV5etUsczQc4thWCk9eeko5NBjXyb8yyMrkp1kS9ZYX8M1eWvp6AMRmT7DT1Mev4XyWKFmyTS57jcHKR39",
  "key24": "41W2JmjSBuyqeedDYSYpPekjVBonca5vmkhkgVXdKtiHPxynCSwu8nquPBdKKhW8AAqvdg2e6p9VKT1sYNJ9su3H",
  "key25": "3eU8JWZcExPGUn1sEgx77RbwU2AnT1d1fwwCTcJErgC1hDYys785SEoMWc7JoWHbEzmzVcMMpMNa7UNR8ACQE814"
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
