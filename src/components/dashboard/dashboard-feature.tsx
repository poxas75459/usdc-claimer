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
    "5A1WQcu2wMkoQ77rsLUbpbVoRozsPgSkF9DF9TzPsN3iqbudRg3DSFBEr7erHZa9aduHehnpCL78fUSA2oBZe4Nh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rFLLpN9WA4EWxR3ZtnceXQJkz3bNCDYpgBS3CAmk7udxUJ6ixN8NecUacKExh5KmBYPuaJga8PBn5vZjhPAz7a",
  "key1": "jNDGpmoSEDj3aZyvxz7dDJsQuH7ps7EvkKqn2R9kdRw5zawyh2yxMzsc3d6ZMADCRZia9apTcy6yrgvKSgJfhG9",
  "key2": "3bSrx51xBJqAn86guoNAhpyEa5jR43c1LmWPBw3SqaDqYYSJrYX3HgfGczpuK5jcdsS5XhWhDVknjtqPMRxxTxoT",
  "key3": "4RqfE6Yfene5JhmDszVktCekRndVjeQPGX9ay6JCaLAWqyiXwjCjGiRkfJmjYJ7nLDavPvksKHrFEqHi7ihcEwVZ",
  "key4": "2DRTYxuFsrZwbqjrMyCdmuRwXSaaeVJMbSNRZh3UQRAR3e8UakXENRoxSJj23C18BP1L3tuR4hdRZaCs7PGivGmC",
  "key5": "4cbjyszhfSvN2v4yBBKwy6u1vnEFJZmmjrbDVvQCp4EP2H1RENufnC7Y8nCdoV7vWFcfA1DZ8gPY8Cn79osRYTJ",
  "key6": "2muyP7TAUJU65D55ECrQktNzPYGN8e4EsBvKmUfo3bSHgLytVh3KtHWWbgo5bC9gUZypje7spGRnpLZmgSLp6eX8",
  "key7": "2u2FgseeGAHusd6gaEJkg7tsaBr9RsxMg2vz7TyNH6kKF5Zc4h3vof7i4TumCX9Lq9wATHvZSgwo7kr4zJ3N36gc",
  "key8": "5SHLJ7c3oh6LvWh9yRZrzi9EsRF9sN3bdRcT9jNL4UPY8Y9DmqKwHU7EsmghV15oUU8YyHZtLAmAwxkcbR5cGvvd",
  "key9": "4VKWNgxpNzk6DcjzjD7PPUgzWv98kKwdzWAwQn5yCKQVYgZJPs3tDyDHUeN571jCYqn7nWodb32ivMjZHJQBd6Ms",
  "key10": "2kgrjPTdyvN6ag6VjHMhdAStzT8ZiqVGaHHqV8mQVaDg15neXiG87pcBmzrGmJ9AA3nP9YLKa2mar9zH7YaE4u3q",
  "key11": "5S86nQtrJKKBnQLWkRCEMFZuqZESYxkqwpJGg6fci563kWsukiAKRKjy29zqczxYtpPbYXcw3nmkv5F7V6aU4RHi",
  "key12": "G8D57oz8Ae2qS8NB3xAfJqaZyH38fK8HM48pKrYWNQGVpdLNiTy5oqrSDejczu58eEwv8DRAv2nxkFEFHkxsREu",
  "key13": "37CUthUy5ms6iEaWfvjzsGAjM3oVUpkftyL8MvcBJ1SFgcUDWuCErkESVrsTymrszTVJ2JLbQj1F5ZnmVRHLMkDZ",
  "key14": "4i2JWG3Pk8NMNAaCPRE6h74oxwcp6ctAGs7HQnchcnefegXdVjY6tSWrA5hY9DW69GRFSmCwAHmtRAZxQnsSKaSj",
  "key15": "4H2pXJ1kALUhaJ9k5RfawATbk3qjTwWNrrPtBEN4b5rsPf5nmCVpmDoLNiu9E4R7jUDQZ58sz35w6MiAffQxRs8E",
  "key16": "3YErWtEDY2z3dZxSbVocBJh4QJLcYv9WffB1zrzmGxJ2ri4mLhbTVuJhQWham1LV4AjkzPhZCftdBTKbLQ42rPyW",
  "key17": "cywLmvobRyVjMfVLBBdkM8mMXh4eJmNWqoHM3oidSNaJYKaX4BFy6V1rb1VMCnoJ6N9LrBqdpGC65RQV66iG4ti",
  "key18": "5FoKjenfxzUusdiacQwhpH2hJRkfysLLRN5x2nPRBFE8dNLkj9xkMttqM6jMqzqAvGK2enSwmhhWiUaPjrNPZWvt",
  "key19": "3sZ16G8LsXr8p8s7xmoz7gBx2JXsMEyKnHmMJ45EFXn1A7VvxhZ8qYLZXozYPQ37YnXzDfCN5J2kZCjZzxzXxsYq",
  "key20": "Ev6EpV6EngEUsAhXaarJGWLks1wskt3xKz6jFSUBPgwoaydy2E1QJkfXtkX2tzVByLuSXseNL4GtWsQk5Lqe6sQ",
  "key21": "F3p7WP4PqgUkeUX9GvvbdaGETJuojbHhVVnobvxjgLHwWrFyVYFbaVbz3CFbKnECLb3R9jiRTATTf11DwxAUa4w",
  "key22": "48eY9kSP2CcyBwxvQE2eRqBkrv3SXhrw76KWyHgpWaiR7TX6v5s5kM16N4zZ2Zxh6UgaXnMJAQ9GomShZkrDSQm",
  "key23": "2EphvnKiaq4fyzVmBqqRpSqV2QVoGeTrQzYZjGvRjzdGsXMbPqpbkN2o3ZF393DbCF1nzdt7MPVBUWpG1EmdwEoj",
  "key24": "3Aw7Gxrx4HXALHPJZNks7Xo4tDKAdD92RxzA3o2J81D11gZDGip5GNGwjbqvxCZvr9T4ctRsR6fpBxCgCbEGHpbq",
  "key25": "4BFeQaoFoaDDgHs9xNmR2BdZ9VBx9eRzmX29jxyesoU3LJ3xoaAuvQRBNhmAzs6nEkqunKXpru5Qi9ZX8AYPcgEP",
  "key26": "MWio674aTkNC1wXwU3WxQDs9uJZ9vQwm2SbiqjcsYkvmynMhx9SKQ8jQL8mHUQ9NSoRyZUopLYX7csKSAi8J9Qh",
  "key27": "5iADUYtjtivcYWNHd3bC6ap9sojh5FsTw3vjCFumBSwq7YLqWVJMoxWGyrYZPEkt1AbFAFrqdGsGsBZQgg8jrWeg",
  "key28": "61JcDjng5iFJ475yRPJnAnT87jHQGRBddiiXsSw6bSpkaa4Fre43w38j2Xxgr9z6c2dLYk7xhueVbRFmJd6bztjq",
  "key29": "4QGyKqdCmP63gTgUD3B7hQhYreTAtgxfau2s9Tj1WThN31gzEsk5kT4MPYyjyQVDiNdKfAVAX2dM36fBXiLxhxEn",
  "key30": "5okwpFejn6ZinWoXPunhuynnSbeD8E19VCRWofx8m4PyAzpFRsq7ghr5rDMYcQSK7MoN8USannA3NMrZo1iL4FMa",
  "key31": "3yofv7J5YxoimTr31cQVmV9nTZL932E6sdaCrUagnca2WgiqHzQP1Wad4LHhmuk7vMhNGW7g8uxEXwfFNoux7CLg",
  "key32": "2WCkQt1sCa2eunz9wxhCB1RW82LES1SzXphSc3R1qxgeokVLV6hzSDq9YhjdwjUnts4nrGgoopWXMe357msdckwu",
  "key33": "3feh9JJPTkT7tZKCatzX6Ly1hDwX8LPwa1c8D8KroBLsAqBgtnXLiU2apo5UqM4mCbUHJ3SpYRyC3H6N94kpwnD7",
  "key34": "2braxVWRXtCGNrWJLR6foT4WhvD7Xi3rAd729B94CjfEdD2qyyVVi4sMY3F7gmDxm1Yb1xDXxTqx6cStTsqwEEXt",
  "key35": "3HBRNcfGVeZ3vHh4mw3YusjPcYVKqochjkuS8uemLMcAxo445JhP615EBNaYgAqp96nkG4w4PsbWNcUEprff51ni",
  "key36": "4LmUKE4s2H9mVeQZ3a9oCpciTShpYKVBL86cZCYB3HUrTEhB7J1ZX5sca2o5rVFvKtgnCN5zmYj9ttj6b5mprLCu",
  "key37": "4HGnqkBYxRvgpX7y2qNmCQgSgXwLQxkxjJ1X5h2B6PHxqCnDLv6eLzotE4HsSYT4PgrHNBPiwXgNqeiJsVngpyEL",
  "key38": "3Fk9eRejPyWXtcLzF5fwxAzkp3mAeQomNoBbscuKgj3hCGfvZyPwUCyzmSLJJPk1mmZq8QuuKbMzF3myBQsqkuSx",
  "key39": "28CtGQa6U612F8zR7JQH6vrhgeSzoWo4BoUZqh2Ne8kmYq3rPiELyidu1uSYcK5iK59y8Jd5ifm2ufvLW1zjP9LF",
  "key40": "7zDTVnkeQ1HPGmbANYbnqVqVyVauozYvADVVBTRkxAJwLFRSWtGfT6D7ewfVDvBVMZhAESiwPuUuhSpwfKDvosc",
  "key41": "4o1G3KAEkouZSo6KRrJ22kTsn96SMwtJGYmUzxDtLBeCDmzc52b2vfqChhhwL9ngCKbvamSj1wmqQxELAeC9pnYg",
  "key42": "4jXaJJte4PbkqaL8QQFJA1o46LUUSUqcyrTGKD37wW4qhunTSnXYfKA3bjcMXH7Vo28HcqsqNK3XWJKyyiCX2fjs",
  "key43": "3CWmdioH1dwCSDpNw9LbKJ1v1YSiE5iFNPBgxjJmpGnRW742r9LrGj2dvby4bN6oSaLzY55XWcoy1uyRjpjQHUuK"
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
