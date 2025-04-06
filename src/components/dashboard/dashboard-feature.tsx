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
    "5gj2ZPs2nFVFc7qX4NMwarUVb8227M4Kg3Ze21QBMdFXTiuiFnB5Kefvy7PZjLCqDrzZkrpJCt2Waw1FEPMkWwdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t9EaUQmHCwMbvkNpgDJfKjGuQthXfg27YnKjJ5ZZdduYLH1LsS1qgS2YVfQ8ac6zh21bifbmE3o9RBkhxFujGUG",
  "key1": "4GbYMbb3BWwZ85f2FVxTuV4dQEySNU1ZsUaPCXTamY45BrDtW7xZWBYExdodeTGYnoELWv2HeJDzbzFu4BmJHdnY",
  "key2": "5aPbWonYQp3qUvyjk8sibaNzDDw6UALL9BXQ8p3sp5Za1hLzZfqjvw6xa9wx1HzJwwTWEDfbDHrnTaGNUXqzzbkf",
  "key3": "eUxxqYCLHbXYVEHNz264Lx3dkizuwnk5F3hFWskM1zowQG7dn58z9bbHZRSifzy6eq5NCiA7ktLcsFumNjUvhzz",
  "key4": "5WFRKLkyAU1xTX2eVyGvb4BrWN2HfFjaia2CRBLobbawFgy6UfoGCNa3zb6JmEY3wWnrVQHGhcN4xcwTNdVf1GJz",
  "key5": "3L5XYkWinrv2YFXYAjoDUmp2VCv1px9GLRvorsqefzbyJcw5AvbBjunm6zhvPu3qj3sDk1bd8sCLa188hf43QPsm",
  "key6": "HbLisZGtrZ9eYNao6WNsVMTmMouLxJLR8i3xtTrQiXXpqpGUvzQpxsnzcoqfg8Hg1p6orhnSU6jZR3MrauX3Gca",
  "key7": "5Tx6sW6UGFpp3rjsryxfwJEfCFGEfzkxpLtsqDPBJWDVkP1DV5fbaQKf5PACy4XRu2UbFV6GNm4Xu7yTpmVDPuEA",
  "key8": "5zhijrMJbAZ5yht8tgaFrCoZmWFbobzVE5S4w9ewywAXdrtnEVqVddqubj9ny4QQs8MxKCdHHshZ14stFDvjtDEA",
  "key9": "5Mee8BYyVJptFmQE4fvs7XGtGLe9acu49dDcgFJPTiparjv8XwbBZsHy5oaBT4yCToGQwk1xheHvioSz6BmDHfqk",
  "key10": "2vut9ww9sph2TC2b2MELUb5KtBDGrNZt8y6ofjteEx71XdRPUNKCdNTtZyRypitogpK6hnzhpBkZbGEGzWtKAmWS",
  "key11": "4FPU9r6kPLiHM5QEjYiMbHApBDMqQqhsAjvgfKBLdTYrmKBhyb8oFMjL4tinxLWNguNnr1sMkkqkTAKd2YUzySrN",
  "key12": "9fsN6zfZGzqTbasuH66NBg7vPFuSTfL3q9fgEfMt4sF7nDovdu8AY2hwVBZXdazxkxLN1NTjR71RbS3zCTXS1Fs",
  "key13": "h4c1o1wx9u5DBey2AwoPtnxmoSTnsRZKAj3EXHv1g2P2wtH4Bj5Yz6PiH8eq4whQejvMzjsirhCHPU3rQVgq4BF",
  "key14": "gqKH7NU7LuBfkF32aykbM4sx91s7AmwJqd6SJ4aVduzoXnJgT6z7aqxzYxAzdWu4AoWkhg2xeYZvgCWkmx2fPyL",
  "key15": "5MRPRb8fwE7cfM1uYVtnpQFR6yYQ1K9ymEyvj8zjp43tw9wYjyuEAAjNVDv1Jo57xQxGY3bZ5YbQABfPgLzeoVWp",
  "key16": "4cKi4vCPYJffLgmsBH5HAAVdtryBwspYAY3tGSffJ7xHmn48EwZ3djBbzRdZFz59J4HvUVCT4MG1GDWngfcvAY3c",
  "key17": "5fzCJyXdhxcaW4MwhrXiLaexRg2AnDrK6gmK9FBypmfdYaWg9ByNeMzqzHZDr62LyB1v4Mib2Xd1dK9DCKfCJa3p",
  "key18": "VPuSx13fXCawzpJfWHmLQMMHj8XSAx32znPcNZx2wT5DSciMuM3kfrp7XtyTrnERAXM3RyE4oTBue7sKYSdd6AP",
  "key19": "5b8o67ebLaPEMj975KtPo4Gg4HLQ6zTmuLuEakadD86k5t8MAR1fFVajDuhRvsKyv8WjnXBh1A7Qe9v3G3XfXFL4",
  "key20": "5z1bFbZnVVyxateP73uub8bKTdmdmh3C12jXMT8MkxVXVTCo5sJJzSWfnHw42oAWu18xVRRZFcLeRuv64EhVvVam",
  "key21": "2f5tjiRetZHMYxVHM4WjptW1BXs5XKizAACcNbFYGNjkpi5Peqngj7uXnyPpUEe1szMkF2cFepdqULnJTmNEdFd2",
  "key22": "4KC9tk8jqjxw9LWysKR1tDaHKLeTRhLhC7ri6gYeUtDwsz3TvkDNELCHbH7PdgKTXK4txnPFhnKqUyEHuNs4ZDXp",
  "key23": "4SsJ7unm4Ee1EyjThUMTZR6Ri6hZVBRbQetEQQUKrpSQAvUU1xcy4XEfeFzZoHX9SENod6f1NfB54uZLueNMNSH",
  "key24": "3nSwndN9iemUZhJDmBHxEdTUS9iaam9fF8mt7u7gTZ9SUq1wG3SFhw7vG98xbEfLpeoovWJU6YDrEF6fUvxLgRsz",
  "key25": "41T4AtGW7Yind2tUzzct4vGHGZevfvZivUWbJtjgL9UNKKXbauDQJnaKajBRU6srux4hcvGeFCWDV4jCWPaDcV9v"
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
