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
    "342NQ3yPN6iQuq3fuXNHqhrugd2ouxipYFx5XrYfCxpnnvdDampSLinVXZP82h2ihUuGC7BNnSvYn5wgNLZtT59W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ezqtYcEuJRdx2wDzPoAvgx3AaS1TZrvjffshuKMGbNhwd9nY7phrvhwFKuWnGa7tgBJBWRZPeGe3jG4n2X8ZqMz",
  "key1": "2XeNxN1zEuohheMQBi6imcWJkpCctVAiaLYB8vhiiNBUJ4zzCNMnbsVMhbHPW5nHTjYyamDdU7KgMaGcHM7hfRA6",
  "key2": "5BjuPzRnigrRBPiMJxzx8aE9Z2nPb1DfDDH21bBCsUpoV5TfwSvUd5gLzv95bduLqgPAX1cuyo92KeTHUau2oPnk",
  "key3": "4ofCTCDpwHJus2W37xXWoeFZMqiGErRzyKm9tKcjYsvon7CfdYdk5EMzu2SVUfE5xDxRiEd61weCDWfwtBf2Ugzo",
  "key4": "4uZvnTq5QUrpCbD1cdQEkZvCu5T2863A1BUkK1cEXoyrt4EL7quiGSfmZWL4ZUECHtcNdVb8y9B7fRJCum73CvJG",
  "key5": "2F6bFy1TS9HH6AEk9r1HSSKGt2uZvoWvN4T5czjDq6codSJRKyAytYihq2dqWj84RUfGa835a56qhPYUTSxdj2ae",
  "key6": "4BFvpiSH6geQMbgEJCCZiyYgrTD4jbqzaAQTTB2Xqbd2LzqSbJzUU1Leen6tAR5FLiwkbN9jpXatDVsHmUwpJZ5x",
  "key7": "5urdPwkdLXGNgVDpSCSZrQxaHDDcm9SZjZ3ivriM8UtsxuvNUeMMyGsJWZhF3Ck7h38N9vzBkQpQJ4PweduUGDg7",
  "key8": "3DfdnqtXpFF3TMfdiuxNTgjygCorRuRFfb4ddmkqH7qv3SnbMjH5SW5bMqjbGcpdXmV5MEZoZGiXwu2iqRoaLn4R",
  "key9": "2QhphkUQUCPePQGJsE7FNZLEsK8YpPx9vF5hcSfP66LgkPAjfsrdS2pSjmhcgtrbfvo74Qukj7rPC5jyu6pf4JKs",
  "key10": "31JH2jRTmC3RLzdXq6opoTPN1pVA6XogL6Zkdb3qGAZFsaR1t6npcQjBbabuWsBp7J4dssGRKvDGwwHFfzWesw8n",
  "key11": "4AT9sWmbyPgBbUCCzxV7h7SCZXUUAXdxe6TxkVmNPU26DLxghttfituzcPTvNBfLxeA7C7EJ3KtfftMqa1UoLD3b",
  "key12": "3CozamcgRn5FBv7GVdFTgqsJP9g14mptj1FMVVfEME9s2cHMiQYakiWQJqz6gyafdiV1Ckxdi6kKK1gya9st1Zeu",
  "key13": "2YsEAhKN777vgbaWzgNqdqvkLqZSq72Ue2PikiFMTLXgK2EFud1CdzcqvFa8vUzHMXK9SSGpeAgKiQUNLd2ts7qD",
  "key14": "5LWYqnnRmz89TRAU29r4DjNApgyJVLTyJfqNvJvw8moTuskQ5k8aB25wnuk8Tkd9kDSPuRUaRRhKVw5qP2eChd3x",
  "key15": "5NARcjCgujtCumTSnfpZjbbpFKiNyFxJLzaQi9fBzEu94J1zJpCrsugASEzD3Sxz14Uw2fwg169fq25Nu2nhkVPW",
  "key16": "5RnE5pBDXcihBX3eLVxjkUY4b97Pn7xhpMoFsobHVf3tZXGjhKeRzqLmiu3AKe6fCVCj1r3S6gz2CofQCPgh77jK",
  "key17": "MgKguucvgzoyMRJCfhrrGjUB38MAQvyNq8evuRhzsLdgd2R219LB7r3H1VeWK2fGSDpBYezCvDSqy8f3epc4hbL",
  "key18": "39AkCPUCZVQVdAUcu2cAGA15GHCUdYtkkJfzzvdQ7xtW8xpKEn3uWKqavM7yQQxM2CgMcDoqKsg3XHRe9woLTZH3",
  "key19": "3KsLbJUZKXjYFSg3na412WkwRRkcMiAN5tkkhFxmnB1Mt2yh8W7FUuQHQ5ykvdnpRkmgeaKbtrEnnL3GFoX67GhU",
  "key20": "3G28nzoTTGga1V22DYdecPffsZqXyp1yGBSDViF66Qac4tCDLt3MrxQsocni2rrqoaqcQwh9SbfUkvq6kkr1zHof",
  "key21": "7PyEv64dsTMwWMxbQMNJfphRPT7hGyhhp31QBG2v2McbhnheQL7zsNxu6ZYah6pk9hrfVHB4zCrTStiNyszVSrP",
  "key22": "5rV8gQhXLsjjyoajDoc6zuyZEFAWqx6MT5p5oKtjfdpw8xpQYwY8bJ71qmNmeHgAnyXMpBEXQijddjNQsK2xqjgT",
  "key23": "5HGbNrdBC5kQJyHsD726oyJKwSLnz6CQAbfgzyzfc97k2C1SLjERkdVjTxVADf2GBszCWnRpTaiiffbKko7fNiWT",
  "key24": "5eKce9MpJ4DEyTZ6dUkTXnYUvPxfjiyp3oiw57qVmeUFyqitdLmRWCoqRpKed79iB9jxD3TVfMPrVBsq38jveEws",
  "key25": "2JzwGngEYSrZCDvH9y9yaXoCazjLe83HwSgmYLveGwZ6BoduxnnZEQVBF9XDeJMaNbrEJWnwcABcajUekgYzJ7fn",
  "key26": "3hM947M1KPLR8fyDRfKY5Sdzps7qVdoBWv1QjgtLZ9FEDSfFzubU1zbjmSy58Y5TRkK4W1xeRTdk29n17YMeHuP5",
  "key27": "2qxG1TZpj6yrpgTGCWmCLohPR4tjMNnqkS2bEV4DnWGzgcL15FjpKkVx9kCmTs4iH9JRWgsHPJ9xD7LnDZaBE9Av",
  "key28": "591Ch12n4GwnhBT23hPdJqrS6BBx924tAmwizr8JECLWwNbJehVQ6WKiWd1nGr2Nn2tD4Ax7Xxw2pW1ZQG57CsEB",
  "key29": "4Z4pJ1Z5WHAtfo5Aioj7igx7hFsupLqwDS5XowPLqS2a61vuHMa8AZ2jTT5Mvh8fxLxBPMpKuQLRwUY3Tp4w1JgJ",
  "key30": "2DDhzruQmVEcCFgWsLGQXDipLDB5PKot1QDTQq8YnNLWgc65dZHPkcpeGH7umPWCgBKKqQ2CaWmbktt9pTHcrr1j"
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
