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
    "3X45yzoyqX4BSMr6WcE4yfRpgCzD6j9rrcvzkTXwDoptztibSNzbUgE3zzqrQ4aZTJQRnhXaU5TYNfyXxqCXdX7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MGhbjutWqX34BZaUCApiqjV75yr4XD48nrNtHWPjS8fpfuGY6gQsdvzqE6sSiJ2GtHyyVfhQ1n1HXhyAoDrNNNJ",
  "key1": "4eF1eeiYFNPijYeMdgu7YjSHGGMjVwaGWhYNYVNNBatYcUFwVLUCvTc6MP5W14hCpNMiUBbwyGskbL2Zfw55uvuR",
  "key2": "2wCEZsNeNPjvMpEDY1yST85P8fuKf4tvrV6G3UjicpscUczWjCq3h3fQj5N68WswEPgFL4EZpGT1nfB4jrvwyAPX",
  "key3": "WgMprAkpdQ31u7ptPE7DA2DYHtkY9vUhppCu6nCzmBEU5r22uqrmn1W987kCYsFjYJfdnRrN1E4k3EGdQ4nBpES",
  "key4": "31njsVvY6ZCiyNCpWFyG6iodEEcJ2bUzQg5wbEwL5X3FboJoMs27Bnef7x7bL6CcfJHpCYQFi4LBw2cY8h4XHTXX",
  "key5": "55inWuwkYXZ2wv1CFuoou5FXBTxNWfB1cdoydYvp29JwBZiARdUKpDFgnz22MAGZyKgnXnb4KrqGVE3ijKz26soX",
  "key6": "fQkJuAb5jbNAFgCTYuJpyd7Rki9LjGL26xa9CjKcohZywGGmLdWbfUmWcTkNYoRo7SzajSu2owfxTY7hcXwLMR4",
  "key7": "3uoZD5eBTPLQat7ALdoDKqnfmLV3Gw2p19ZBFGiNuTuJ5KxesfS7xbSogr4BEFyFCB8EZNUbnDnCG67xsAe4Kwyc",
  "key8": "RBGxQK6jxNQV31U22zHYKqAW9BTHKkFVhscZMYdNsecU8t4UwUTXRz1BgXH72XrdPXjeNWeryHR2Vs4CiyYeDj2",
  "key9": "5Ea4816buvJoQCqT6Z9cNiMrpE2U2GXdBjUZR7EM5cbxaCD1Eqppd7dkDkuHJJxxyfKLSY8ftMASdKbicUComTT2",
  "key10": "5ZcJqUftwUoPHvH3sHtm6nRDFGDyE72W8s2KwrZATZS7thr1F1kcPa9go2iGkEnpspNw2SjfoyB6dxP1owS6FAWK",
  "key11": "65DbnW5twzQ32UnmcN6afwKwjvDAif8527kaaZaQTE5PygpJnZktFPzERvNfuoFF9Dh6bRhpZMo3PJLPZZtfsnCQ",
  "key12": "49sCetgkJvZXZJgyCwzQdZGCL2jcrPK57wc7L7NKr6dM9c6pypuebPrcQ5AVkyDUqkGdPQT9ZFdwL4nM82cWzs8P",
  "key13": "3iyLczHU8YR3SMSeKR6RsTTPhSEQguXaMc88SFnEueVUUnNctB16f87yS5tU3DF8Poi9KP8g8NFHVVvSDDbV5qHH",
  "key14": "4bnsmF3BTgqXpB8YEBQhqfxeHucvUbS3jwnWMoatxaBMBcsPXXim16gCBisAaD7RjLUoyskgniu488kCqWBxVZLC",
  "key15": "5iprm9tQeRArf2kW4P69FNsLsedzZXMvwN46nAKaMopUXxBtUYLmQXrBfiELLYNovRvnVtGM8yZEtujPJ6Gr7XMC",
  "key16": "jWqWjUs8BdQaVtd8wSCtL9QsqqZqKTMGFBF7V4NeVyFy7qcUxPR95Cf9AvN5Xoeu4o9SquPpv7AL6NHtTPtFBDi",
  "key17": "3ozNEY5dLfEJ8ASwst1c7a4cdFrgQRZPKQ6isUAQjafG8WHF1A5LSRTJUQeyZrys6KGixkVeJGixh11DvRSY6yrV",
  "key18": "57F5hEafLKzjrs1v8pEipWW2efQNTS1JP9N9dsgi5KcQ83KRh1Yd4QTauvB147EtmQxdAwLjnw4uZhiaAm4PfXRN",
  "key19": "2fWcTd8MenFSKYDqtqe7p4xiyb2tZbPkrS7u4AtPezK75iQo9ahyYdyTsYQ6vVGJumoBkA3oTxo3xQUC5AUufgEd",
  "key20": "cyLzRCdvCNXof8PShN9vQwtv4EnpD1qvZMsFvBN5Mz97JwwJEgo4NiqVWa5EZKnSf4SywkYhxneza3Mh5Eppok8",
  "key21": "5E6BwtzofiCkVWRjGi8XQXpMFRVmakgZuL6BTeTrjnqWpx2RNLgjDJqYptnoSeT1wb2TpyLrka26wG6Bik7yWcq7",
  "key22": "4937weehYj7yPSGB6gyDcFbsjTmu8hUB2UjMrxjXS1Su8QsM1W9f7pLHb13AHyqqxxDsYghyY4QYGUwCZaMriTPq",
  "key23": "4QHuHABVvquX5qBpmZGmva3HPXGkUZonWvzK26Yg1MbsBnySAx879eaDhBpPFMLWNVxuTFDPC4F4Dmy1vHBDuxic",
  "key24": "AZ7QD2XVXGhZtgRPoPEWNeaANv45jf7otUfJKGo3Xp7MR98j9BU9XxiNshmHbg2u8L9aV6YLJU1Vqrmc1vqzPDk",
  "key25": "xkidaxpneSmySggWomqPLaYPRTvZYR6gPkPrZhEtihHqLBZaLk7iMbZVX1PwJWhCKVhahYyMdvjLqK2YqpKr5C9",
  "key26": "3oqEqbdUqewvw9uV39wDeSKZtYoubYNC8mQPH6UKuFVs8a5oEvgFQZcYrY7VDMRpCxEjXv8RQ24LWaVDqFQtaZiu"
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
