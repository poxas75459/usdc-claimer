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
    "8wbLwebZMbS7iXdBSgYJhifbdPNSdv5934CRVnERK9dt683sthPKFSAv3VM7gZCKWoidTLdjoa6J9r8FRMcNkPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29hBZYzAAaMg96Sj1CseuqfcXJs5M6ZuVNbVsfF7Mn7XFPbNF4mBKeFj55uLvmyjqAQnxZtK3sGjtX57j6yGT1EN",
  "key1": "N35NLu3FusZ7JRCT7RX2ED67T3PjLud8YhR2ih7YymEBYeQTnDqpeVwf784cTwWJGJXtt94duKp5e6UCg8FYQTS",
  "key2": "5zg1mGXK5sLpnyLx1kd4BPdJSHZsuWtcFa5akNba88hzmHWEDiAfYV4XcmdNCqUpE68x5ixqoxXCGqLGx8GX8RuB",
  "key3": "5p1aRJ9DCxN4mpbG4B8BX4sg6hP95GheQ4g7w5xQeJ155zE1YGTtyGkGEfL6vdm97kH3VR5jMiRZyCujvvD2Q6e7",
  "key4": "2CHfjKNwDEQKpK2QghZqo9bkbeuaixTA1YZhkuC3szDwL1rRbM1vSBFsm3jP6aosBJdeBaGDMShfCqFcJUFUc9Yo",
  "key5": "3wT7xgb8LZzSUnXJ5Amo2m2GXiuf2Lg87zSTCrJF1L4cvj5RgQYPYAujBFNrU85cSQQwwyBLvAHLo3tmAZJAeR9W",
  "key6": "33ddWAo7KrtZNHv2Krbi3mdLRVWQHPdZcLLEP1PxZBTERuyFT2R8yi6agXxed5yJs6Yazw5bAQAGiWq35YPkkxRy",
  "key7": "Cc4t8L4Gg65hKD3S6QEsJ1m2hStQyewFHkhXZ8PamYs1UF7ydo8EXTWLkg9cukjULijJNc1jojBt3XMkWUAZtJU",
  "key8": "61uUsh9QfZ9tmKE6dqUE7WLRNgqPZZNXLobYteDLkn31bb5LZbwg5yEFLv85MwPEvU8VejrNn5J4ZagL7popSR7o",
  "key9": "5XbDu1pGLFsH45P9YJa9LJqK6MU5yNwxiRUVVMaQHDm4cFFvDsbcvQMEwZpUDxbJH1JfDptzPNHmGpw4weXdR34",
  "key10": "2s227q5nPZ9XM1yp3vYHehzE5oAPSXEDpz1iLhSGBod8LST852TMqrDqa45UEoHgmEwcMuudJNiGM3F4i4LAF1f6",
  "key11": "4eJiXrMEzVtEHhW5dyPMYhLiT51MGAsDFu45LDH67L1tVSaZx5dLX7w6GduYDw9JRZpCEeTYeHcoauTUxiCHT5Fw",
  "key12": "4vYqQk7jUV1QhFJaMTQFYJ3wHVgjXyj58m4XnyDdVwm7Edm8zPJVouxy5fRFPB3FnqFojosRJMJTvYXnP4WRnHFM",
  "key13": "4DpnyDAwSfVgnZhofMfKXtCkebB8o7ui11zabRyQ5bB53zyyiAhqq9CQp6raYUKVYiGvyGAbqe8EiaPK5aYq5zGA",
  "key14": "7e8P7wmb3L2LKNkKy5GKXzvNDabeoYYNMvUaVpzBdp8rYf9VrHgJp2VQ2xxtnX1aQ5Po1mE6Z2JpsDrskpaM7wZ",
  "key15": "2aBUqYKdaFjkndFUEqJVjgZTovmAYojvEHMi2g2XXSG3uPZaoWhAcSBYLiRQbvJJqQnYNVF9PNWgiVtK64TDSZbk",
  "key16": "vKkfQWN9MoiwmewjRzLvSEPLywdaiy4PMTmcgFEtJocM2MfFCUR6B51tAvwd9qJ2FaZYf1Rjru6qkN8ZA64VsA4",
  "key17": "3Pj9Bu5K7mEndBAuHnm63nGBJGZa1eLyLxEni775FUMKeKn8UtfQQidhSnDuDsZAx8uTPqcGksqjwzgTrBWMRhwJ",
  "key18": "3Ws8S2uk18yqWvbP68MfcQioWXSkfH4GYGiVdNe3nvpJauncu89iR9Rq2sbxSNFsnYe8zQg4Z4eUshgXYgwum7pJ",
  "key19": "4wVPMVd1jBsViKcbTwUD9FeQujgzwvQmxAjpLxmQXavLfwURYuFnnbb4WiCj4GoiaXEbruXwVJACLQvW5WJsTUdH",
  "key20": "3nnmFPQxNuQSkarM15gUs8nzuqKg5Fa83U3vLe38J7WcgT31fcerUoCEPE3q7wgwiH1krAYBoS536EAsJgSBdpPe",
  "key21": "5yXrovD48KsYXeL4sSEuK2DMQ2wge2AewXH83bCFdduzkdZg9gFMCkFGXDSVEUfL1PaAANFRQ9CG6uZ2hecH3E2T",
  "key22": "uz9C6XgQNnZSNArRACuevzdMZMtWuHNQ4wQifAvSYGrW7ujzDcr2vwKrtHRp5mTBDrRpMLCqFpDaXYqb5KfBKg9",
  "key23": "3nrtE4nDxD6ndeQUTaDjN8iZyUzrGYZBgBXmuN8F1hAyLzHhi3EBrMXXW8vj2WamxtDPGwouxgBcEE2MfbwEMS2o",
  "key24": "2ivhWxbSVBG2fK4MMqidyxaK1i2iLyYWKFV1LS593axtZLdxtsRi6dPoaNQN1DVU3jETvNeXTedAuvtGGtQTsXHu",
  "key25": "i1xXoSLzq1d3uXn3H1wufxhPbfvR5YACwe3sTMBFGLcaGeW8WpXkuYpunVakexqv6z9ETHXdZVQYkkeUsnyTNyT",
  "key26": "2S1BKX7nhCTqyg1tPm2Sbjha7iUZ2QJP6wkPq59Ftaz7BRcqLCs63gdFoGVViTcJSkqZ91uEDWaS8kmwUmzfDXHL"
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
