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
    "3U5j96LA1istT2K3PzuG27hvmeNViyqHqQDP1eoBmnD398BzNTkFfSfs4iMXNGqypdRCEEMGBV7C7BAAEdvnvYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UmH8jWe7VaYWjBBReRbXnoXtdZVr7PYkjxDLid8va2xv54oPd3YNH1znascuJF4eTv17eWHGALdMSDmys3ctEPJ",
  "key1": "5UTrWwAgRA5EwJVenLexMvU3NMDFDaQr4Ubt2t6M26ds5sKXhFbCWhweNFRCenA9H4P2ncDG5yZheZuJH4zMUzD6",
  "key2": "65L5eVE1BpbZYQjrfHhw2C96prtzJCdgpgDeEWnsGVngREDAbKBYmmAnuUFpXUu2koKUJDHb4fgySwNL9o2kuBPo",
  "key3": "MQjhS4XRmideratMYBurMMctNarAMuPdpktm2csGPzm311BMNMDo6b1ThFVWB7Y4ro21wkA8nj6yr1FN5GUdJ4J",
  "key4": "3jBdJHP9JJ6THPenUKUAoCexHSrkWkvzihJj2pwdi1x8qg2DEZrHgmT29qvfE1z5K8HuCat4FVpttAwwT2fYuKZz",
  "key5": "BkW4W7fBayYddfDKkkLQsdpDsRFifuDwdSJeR7rRWJy1zazAXmk9cDQj13mADVp1ufAzrvtAiJ4RcDZvXNoGQSU",
  "key6": "29yyGU5bSzCEr2rSJo6sb7Th15nReqa5adSnqP4Qyu9NvpoEHNWykpP5BHwxP3rRtXBzAij5NSiytXAmR9jpY16N",
  "key7": "5L4sgCXxygs7EqwumzCw8GbSC6opW4fYnpTGuP1Ev3Uy5R95mNwoMkY2K7r3VV9Nfweh14ryRwRf8jLTyncy7RKc",
  "key8": "TsDKVAE6tLiYipUYV7eEGEhsi8N4a9msD5Sis5GE5WhPZceggt4QvdDJXqnxZbogaDDH5R1SqaDXCFK44gRtkpE",
  "key9": "5AcK82sxURUizcKcC3dvEBnaEjvPKdBKjGm5KWoWQ6TaATM3wLCn8bYzvJDeSqcjWdJJQX3N6tpojUwNhxvxCCXp",
  "key10": "4wzJyprPTD4Giswiaepp6q7nFnwkymqK4tm9brvt61ZovNnHBHZTU3UMCn5CvUN8xV4m2JVP4SCkFW61dDmbbxkW",
  "key11": "ZH2vKz777UGhmj6it5rWEUsxNRdUV87dBXNqwayxuXtw66ybbBWy8w5WffKw3fzA8z6BwFmmG6hKVENJJNGt7Xh",
  "key12": "3yS2FAuRCTud6S8F2URbGSB5jYSdnv7Ywe5ahZT4vLNBekZStojwhM7MemJsNihs8jebbn9Lr8YpXgHiLsPQMbHL",
  "key13": "539nq7UNAGR4tWXnzJhxPTfvUZE6UCsKNs8djWdshUthkGrkRsaPKVuoMjRs9akHKZ4i9vf6AVfkEGZNeag8A2iY",
  "key14": "HduJPbub5wA1dWZFkchpurLzhHQ6zF7staRNfkKSXP6CcCoRUUCJ3KwsJRJQfAV9xv9tsZZNMjrKcqyoDYnCzHL",
  "key15": "4g5kdsJyBKs6gAVxKB61N5YVyZS2FCbgvVa2oes18wjdLLhcUyGQgyBo3hiv7cYpXtCE5iWFWBsHgbyMiqGWnNSQ",
  "key16": "2v5s9mV6hfdHCAV2tw7Pssp3rom93oyb9KUr1pAs6LEAAKTjjxd4Ga6aFZgUabc88TsWjvRcvw2YDtekT4raYSNr",
  "key17": "3PChLVoQVjHnZjsdmNM1Fv7Vjof7r73Z3JfTAgp7VNPQK83UfoKqmX6XMNsJWxUPgZYeAQzjjBzkuk3sTJLGKazu",
  "key18": "5wv9WfqmXxubBwtL9Xg1ND2ncJDMTCemvh26GNaYdaJoQ7DTfSieK1N5u2QLkjDikEqssE6ih98bj1HB77EGpVAo",
  "key19": "2oJc7NMR79T53KoTSzpNG5oWsaFLRyhAL9XaaG7VX2ZCzseQbgSSgQeTcu2TXtXtnia1U1N493nL49q2zZinRRma",
  "key20": "3yxPBDFqjtkn5hvFkoamRd1qy6AZHWZ73M8pSeQGGUjA2Q7eZbb3F9iJzvRyaPJUoVyL5PwshCCDS7ZhMFfYhxYQ",
  "key21": "4ugA7DrxvVSnrC22WEj8WKNPK4ALNaS8VeaH3JVk7tUT9gXZYbJzJy8JnTPFd1Hxey35HfSsiJ18xmiBGm1kfPiY",
  "key22": "5tWq7BJjSJ4XeGW73rMwnheu4Mvi1iHodFFoXuqGtNFcKcQUBJFoj42a6iMvvKBY2mFqVaXethqChiAdSJx9xBHt",
  "key23": "5PkCb2h6C6hp6a5bz7Q4D75ojkiGnoCemyxU48J1Z3f9ANPAiRSxBiY9fwysRBJS6kbrco8UURiBqGvfr5yEikPz",
  "key24": "4GhzPt9BJ8nimgxEcit9hYG6XqidQVUgPUqzjM28GG4aiQbJEqGyRWjCRquFCpyDeWVzfxarfgHC5hJQq7GjmNoo",
  "key25": "2wjhGsfW1TatT94ipchGh3nijLhokSi2mo8fRbjDWpFR1fJ4zDyoMNVH5pwXjoHbYxoY23PsGRP2eVHhbBtnqLoE",
  "key26": "W51yxFhe2Hqy1eAeKvD1YvySABgh554dAyadVYzXg6bdUCK1ruDnBkRhSSMa48ndv8WjvAmqJGSe5GjGQD72rWF",
  "key27": "3vALE8QYdavF3MdFLECMr1pxQWBa7GcU9uzT566N2Lf3xs3jtA3EzvYPW9hNTFK77Z3nS62j8iAULgj4sbeQUo7h",
  "key28": "2DcPMafm51CsLnr9P25xZyShDh4U3ursNMk4MMQkkYzKDLzom6jKqyuN2FeHjTgNFkLyoUHXrwF6QgQ8HvBta4SB",
  "key29": "63vZB6rpteuaqAPCmLAyHRy9ms2PoZtByuTuTVdpjXYahBBVYgntFrc8Rk6om2aHqAp5X1L5iuhUMtYg6v1GYDJd",
  "key30": "3TNTqmmihENLkMz8VqV8tpBJraGBEB3Wz2M35j2CpBv6qk7kxQCi1tjPL8EjXpnQcMqYTXJ18qWwbfEB9CaLR2Le",
  "key31": "49Cv8nAYoTDBrwyc5i4XLw73dJJ4YSNQ2nR8raSjXGi6uAgwsAEc3mJfWc19kE3wBnB9jaxsMVZVqcmUAtvf61YE",
  "key32": "5zhUQFiXyVoXw26FC78NhCFC9MqYtX4KGJwUkGSUSS6R84y44a1vMCoSRfTXWiUUdMZPLS8qw4ikwoJcXvvgBCig",
  "key33": "5xoN1LauvdF8ET3yGrZz2R6EZFxrehsSs3GdihMHRzu7N949xqAEiVPtZZr6cGMjaoVbTQt7gJNwjeNTyC9JeRS6"
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
