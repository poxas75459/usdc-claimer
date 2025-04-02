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
    "5HbHLpQHyjg5ZYeXY7vk74auMUgDnxTmGCjhsCZC8TvH5WFUq2Ruj8nH7Yjfc6Z54haHUNgRwy8ec24SUF7FSy7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "THLxUe2KPXeMgWjVuAPRdJfMAe6yiMbBhfWjn6xYxds8YL8sR5FeA3en6Cd7LDXuKgrM79kqqpNPexdY2igv6bY",
  "key1": "2zq1HWe4UyADm1oucmLAsnba8ShsRZZaWVtrXAxsiXnMWmhptrrMioHFx8ehs1EG3EjXu8QzYjAEvp8HTncFeijE",
  "key2": "4GjqBdAmgHDnUeLwQewj6qLqnc9tYJuyTWhR6rVmQf7zh2i4q6Bc2cKn7zwwcV2U3fTpZgjPi6PJ4SjU7GXwmUDM",
  "key3": "58oJARUziok1WwEprzsnWLPduLfb5TSQgHUng6i2WNuWsmtpYjkWKQN3onczpH81kXvFxx6shbNtKojycZVV3gH8",
  "key4": "2LHEr7fAfiiVSZ4d6kmTDm79byYyP9PVpSvp5FeuAwKn3HC2qLp884QXceLTUEd639acYLBhvEt3DQ7yyGAdsDRJ",
  "key5": "4yqsyWFd9ohbT52PbUWDSdiV2MxeugxjJJMg6YmaH5PzbZYgiYW9c2y4XRYXwa9xAgXMDPBTdvPZpN5QPXcwRLRk",
  "key6": "4PkFQi21wfQX7M6zUMfYHt4RZquwaMwjhQktRELQu5oo4i8QTdBcptRRCUNmwHcQ5EumtKwNzQLeHbr8viegjQJn",
  "key7": "3R6HRZwdjhDHCxSwcpD7BDY7582nPHtcbinSDTFvbEqYz1jUCHCD6cxmNGXYnvsZSjmUerUwnMi5E3Ac36ubZz2A",
  "key8": "2nVkPR77vW6BwY2zt9A3DDiMG3fNNLeZ4LGRGT9UKArMLqc3XHDbgkdS8srg2c7mjQhi7TLFESRKiFji2emcqrGB",
  "key9": "48Hmgn8ZqMCDjjpJ5mN126u74JxwU68krjBe4ZYd7p7HefbznQ9LSLcvf2qKxPw4ZpHYhpj9dK9hc332XmZ1Cqbc",
  "key10": "2T4Jb5f5b6nEXqGzsK8N33k9Pix3EHFKXoh1Ng9L5riBmzQSb8Ki6fENLhhvTHmwkxcLdHbkrf6d7mdj75QETFZu",
  "key11": "5aBGwUd2gyaeamjQkQdm1eGSdZVLbNp7bABPjfLtzgPR3wF2pdEYtrdHm4PeZzzj1YTqicsCXSfW1SpNYTgaDk7H",
  "key12": "GiUFE87aYxNFzhz6gzGvD8fstq2DcF63gWKToxhznqNbTSWbDBZQeKPuGaQCbutod8wB3bZLgVkBSyzMsdZB2Ah",
  "key13": "3D8DSxuXxXXKf4sZbJr9Bw4ogLZXEa5VZ2LdJDPUg9zbGNoBN2eWj3Agh61t2RcPxsetNeorbxA2qoBYtvbFRfHa",
  "key14": "BcCVzMqG3DF3Ts9rNPkNGEaPB3Nr8zjpCzextoFaHABqiXMHaKpNiNqC59TvHHGu7obQcCnMtpvpN4BmYHa6cPi",
  "key15": "FmEHMA919gRNPo9eB2oUvThvx5sev68FvziNSXJhEq74Hn4NPbmBVP2a88YW5nojgHREUcjnzTMoqyXGuAL5LQa",
  "key16": "beNdmp4D5SLjyoMvcUKoXX9rXM2FBS4pbLubwi9eNt4H9pxUmgP9jaLfmXqTMuEFNWAczf8g1e2pfPH74Hzg4JK",
  "key17": "4ep6SGxAGFWQtffqBy4VLMeZFQBMLaYk8Suj1emJxo3UrXb7jTNzP6pAQFmJvZGZKedA27YKygtPhLvrnZXLHp4f",
  "key18": "5tDnHmMasSVbzLpSeWUKSg6GwGuPZit2tUwdnDUg4oaAVy1ZfUj86ug616ttKDbZdPUeAztFPmgDXEwofSovu6R1",
  "key19": "39BvTc8rvcg4PcbU4LLWVSbbivQbL6H45qVe4XMuUg2F6kyNBsjEtQMrDnrkDcrLDjLYFWpgojie1E887AeFfyE",
  "key20": "2HTqXvQ1WDGfwntz4Q2YWhK5u9c6QiuSFa652mnbtqgCvk9YHEb5tAQ1GGEZVmW9R4tovcpdhDV5BUtfowmvqUg",
  "key21": "2LJMuQzgVTjsYXHeBku4aW7MfNokiPD83un9PXoWq9MrXnoocseS2K14L24zKUw73E5qBGDqjqiZnHY1LXEPwy3f",
  "key22": "4VP2yd5dMPywqH1jALqYTKMxLJu9xWxpWNVGLkQnQ8BoVtvxW3TnruxQpcZR8WfshjR7jEShNzKvyxwuktCCB7CH",
  "key23": "3tYSj1SSf7TZxGgjJcUywR5s7JXACBtjeCprxxg3JZGT3LHgrdyeLfWgHqhuFFiLZMGzvhNagfBkHhV58tiDr2EB",
  "key24": "3MGZEFSuxL8JPQkKTopSZw9TjQujjsDoUQxPHBhgvpBi7tSZAcqd9d89Me8WTSi3iwkgxy45sWKD7aY2ZYXYUnBS",
  "key25": "36zH88k16KQMsUes8VXTpVCdm6xcVK2ydW3HWiwU4dmsaShbAiAEJs3XLrh3jeRNM459q2vBLGw8P6NazLWDrKTX",
  "key26": "3S8cRZTGmZueqtrQreHn34fzmTa6QjvVKdgYEWNjbU7xYxY4QRw2J1AW5NUsg2aMrCho3PQMjmHC6tfxJA479B7S"
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
