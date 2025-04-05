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
    "4i588rrjCEmPumyPXSv2oHfvc1xfopGEvc1FnhZhGxSfXyt4JM274GgsrkGMSSbbRDk5tVSvi9WueVU9BykoWbQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47rEWDM114xt59VBStMvZiuUPC2Y72Kqc6VV6aoXXULR9QXFrqBMwVUCQXXiXyaWWfKgsrREL2JwAgfkfMa7UD5i",
  "key1": "2PRG2vY2YaJw2GF2xNiuDUqG5vyc2K9Ycp6FuPdw6fJrJSHaWuqkKn5KDb6JJfTSxpq1ruUdpAMRHHsbYvs3rmAA",
  "key2": "5EP7ooUmwxZ7NSex1JY6voqhJmgx9Af51yqBBEyW4w4SrYmQyA89NrBBQo6XxQcU2eJgttjoG3ybozZ8mvbroCtn",
  "key3": "pbfM1wWQ8q3VpZsmWTx74dSTcXD6f897PVBvx9vkUHTdafrwqjknJtm9Z3pE8aCDqS2dmWUjFWtfqbTX3bFxadD",
  "key4": "2wApjG8kAotd4SEbMgp3YYbW3jC52BN4CZaqRLKHp6RYTvumJ4YRFKxYrqWVGwyAsVzwdcCeYtUXsvKTPQqSuJNZ",
  "key5": "4TfMpqyuGs21eatZcyjJesJZ6SM6FzhV4icKTdmXy5ZoRYmzZvz1LhqtmpjMQhjpNKAnNDqCqgJpgT8BeUjeoRmy",
  "key6": "3SFigHEH5vFjHMkaS1QLsmk59DfFqLdpQJobPu6eHbRD9iEuoTb4bp1zM8uvjwUFb6ZWMppm23jTwH6W2cZAqP3x",
  "key7": "4CDNDrhK6NthtcRdLQAQwURaMJ4gx2ui5QoEXHeZzEztzs1DsaAmhWm3RxGLQcrrPqiT55Pvz2wstkJkfPGS1Gws",
  "key8": "21cjJc8AJEdcQQnijiQ5uVJuQPQFLEE8hEi7EeMVzAZR3PdPJiuakGx37RpFJ4Ydez3yqaXc5sa5Sa8vZ41QuoYJ",
  "key9": "2GD84ia3EbWbs3yB7Wnzt1uTpmyVWKXtzbncVmrHujqXr5aPvTbCTLg9FeSHaQfZArAWa7u1SVKvkCP2BGePkH8P",
  "key10": "2ud77fRnYwUqB2rHhgysBfbzKYoGW5aUcs4MJ4L474xDKbrxQ1dmTe6mUzLRb6zb8pTHBYWh3Hde8UNfdX2BhFJj",
  "key11": "5WN2mazkGyrSbH6z2eTiUPvafFumtRyGLhutJkeXCNZNNM28k684FULoyQngoRmNAddtmTsL39EnBCAP5p9ptnuL",
  "key12": "ji1ejmas7FkCHpJRY8bpapvd1Kii5e6GxLTc3WVqGhvt6cKyYBWA8LGmrNqXS1VPw5MdyZrXwjF98w1xiBT6yrY",
  "key13": "uVTuQNEXtN3pjm4ZWbdEUoURyX6pbo2ebFYhh3QFQ5CbL9z4PFzc6v9PchZsHW4QjSAGXwQxg55AxA68fyTzEuA",
  "key14": "9ZzwxVRfegn9Kq9BrugDpgLRw8HoACRSshDKEG1N86CpKSJVG6t2SnUfAwgxr88h2PCNLcNjcU5hoQmd9jcMyfW",
  "key15": "55uwYLaZDaoDsc6JhXBrQ7cgZiX4NLsF7194GbhaSpcAHofLKf5YfL8Y1pjQWDWt29AEadCvhyDuS2eM8wbdUvnw",
  "key16": "2ZbCP1o5JZQCVTpcEFsggJKLdbrrcZwmPc8Nx1UJkKBs4Pb5fJQwUwcD72CkeUGFznh9LRJN16emcXBGSiEzCez4",
  "key17": "4aKCREDD2jK4Xd47eDjJ3ERJJeYdEpJ1r9C7jTu9WBPA8AY2hnKBrPYd2bisECvqVhBNcnSnN7QYSTCPRnKUQesV",
  "key18": "5bGY8CWmRUjV9RAKVrJEYWe1rZtWmtyu3G3ZKz52nz4to94F3qCgJ9rY11fPtnLfqRgiMcuXZ4ebnd5kqi7vGEzU",
  "key19": "26f5DBNmknRBtLzwkeeYTTZWHg7f6BwZQ76VwMwv7HrGCj9o1XBPtSH6T4MEv2GG19AQqSKdP5e9ND5oDWcPkdqf",
  "key20": "4yNaNdWvffwVfzAsGfRHpHVd5Z8kBMaKEeYuYGaJhBd55Fao8cfUzZVwrnDrvyC9UPPMkSCXfk4Wyhueyz9zxUUA",
  "key21": "2gSUDVxFwQGEU3KGPK4uoGA1xQ5chdBQDFFPUFekXUmokqc465Avpp1G8dsgAANjdjN845UwXbwiYmf3K1HK4nwF",
  "key22": "5DvfsurDjNuKK8CruercEw7uVtGyMGkpYyrrGmUc6xzj6zhJVx3itLpxWYUnjFh3ztoshv5Cctm9NuhEu5iiuBjF",
  "key23": "4aTwJvdXgmykRmq6mwHcz5qwHkjsHZk7VxZSxU7KPYFU3EJqgkQuZfXziJRSKr46oJjmrvLqvSUC7N5jpN9xg4X1",
  "key24": "37wgXBLhkYucjkMJQe2ZKX4hLeBBLGst5d8FHwvbDAT4Hg4axDfMcqjxUr7AS2ncitxskqCgs5yZUehB2PAhJyir",
  "key25": "4xogfKnj9EXC7eT5y5fxtR5KkEuBpoPbqsHRZ878J1ZeaY8vfX1VX5TnCJ3d3AGa4rJZyYerdYazRrztr8LvzdoL",
  "key26": "366dkmKe8JEP6mjJ2xfzG9qLbyi85uKQmByGskg2RH27qJmoHQ6NZa5vakdWvLbic6aH57oFeJHs3XGBj8xRpMym",
  "key27": "58n8beiKx4pvvjq5pKphtD7CkffGXhahQyT3nCyMUmidvJ19TcVvpmApz6ShP932JkrxmshWeYzJd1A9Lm8EeFp7",
  "key28": "4YzVh2Qk3RS9o82D5URuMTkjVZmA94WDCKvYkq5n2RExrTWWpsc6KSQoHv3XWQBmubQgnny4rux65XAhoytUBDeS",
  "key29": "55JLWtTwkTGCis95BaPgD5gSBVyTkvuJXG92ThbcYxdSSQJzPRY1rkpsJnM12wjiBPeX1kxN77XZZAD4fsgc97mN",
  "key30": "5bdSRJTmsL3J2ZU7gT7n249xjGfKSejQxPWWGE6yLL62V7MJEc9BZTLsWxC4X2ZpbqTQp4Qpbj39TPjY9KDJ44LH",
  "key31": "2v3mfpozSrC7knJTJCER7n9wwwQsHJgyXyJLFaDMj51UKLjxc5cLHSWwwCABxcif83DPPNz5ag9Vw8GsGLLFEjwC",
  "key32": "4oCz1NTAEvsuqqasZy5aSfUNnMYjKKEohWnMwMvGdxSyxkx8JEbjryG3LsYSkxMgnNbfbLvhfWRj4M7FY2Wfj8PC",
  "key33": "3XAQFwifAbdL8AHnU7RQQKtyZtS4DfzZoEqePfGSwuMv22UGnsn5NydrKHAdzg7aTCJdGSjHUKdYjBLuajqSEhfo",
  "key34": "5s6GAUNxwHWsLocreEoNGnd4JjTXeFu5DcarbxJ2ApX8pspHTXwRuXqN7goxVJAWa3wnUrTxrC8aSVgqLakcWfT5",
  "key35": "4HThm8wYMhks9o3AKB5V42awYS7gqQT6DKuPULzJj5csLTxjj7yuXu9E4mtar7AMmg54RvXfdWtdCVGvDQLVgpXV",
  "key36": "3eNvRJPHdTsaAQTB96krdCiCr9veogmbCvSomZHdiiVERaGM6xFrqQGJ2JemWnBmKXx9rxXCyH8evvg51qFPNssu",
  "key37": "Q4QB4LP8kTcieBWboGa7Ggknhy7eJrUeQdVgiTUsYNty6faf4SFB8dULyPDUNh7QSmspc23MtQk6MYj4WtBtG3P",
  "key38": "525fdAYp7fuxfPz25bjaZJkdZAeagMqXa1WjdqVuX5ZYjo5g6wQNW2FK4VFbD2DPNzk9qsT9tiPTbTybTKCR7JTk"
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
