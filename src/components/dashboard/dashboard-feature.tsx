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
    "41YrVHqGTM3tL59RFRtPw5h9QhrthsDa1HKZcBr432EDNps6Z6kV9NdAYGtX5JdTyju81xGexQcJe2fs7QQX3mw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bvwFNz7dTxVCB7L1xpsUotvtf6Msg3ThbSoczz5zVUkWZNHiWsD3kfbdavdXCxh3LeSqWSC589ywggqQtzAQQ9o",
  "key1": "gz7GcGpiiaymRCGNjg3aE4zvXsnGz7NNjWRki86JcwHehshfB9LssHfqGXCP4ET7WE1Lfk3dYAG5CyppGVjXkHH",
  "key2": "Cgjhx7Mg7fVmyrJZKj2S6zRYXRN9nQnVAPyeBGMHDW2dLKEuQKQSpiaa1ArbBR7S1B22hdvXsX9LEpsDoMianu7",
  "key3": "5Rorvaji4JtsjZj8qKYUZMKZ3RN1gviCnabyYSXM13x6Br6XgLUVDYKcJE2zjvjU9Hbp7wFe2t67r4RPAQGdgNKS",
  "key4": "41sLVBzrM44oAVxUoyFr7oJHqQ7W3QKRFkQTWu53gBjezL88eRSvufeu8PCtXzkGNb4FDZwNgosRhtZc4DCev2Ms",
  "key5": "372i8Zao55HjE9WV31NUXFk9BRyQk8wneHYtmBYr4VfBX4XxUGXkwqhWbGRQq2RjHmh7A1fyhYr4W31bDpdWYTLn",
  "key6": "35M3dD5SUVX3vXBCnESzgMxtG4ic4Y1pFc9zcUzrQMhLyh4TAKooL6F1pAJVYPqXJhKwHudWCb9T1uLzVqKBFzx6",
  "key7": "2bWaiw782Y4UdEq5sP5h54tNWgpDbhAkQzuayqY9Y49xGsWFa2ZucBBwtuxRf1h23h1yBAAD74fK5o32dtfYW6GA",
  "key8": "3itQtvzkdpyvzXeMJoLYwDMGMuDsAKktifFcoRkX9jkiq4hs1Ue7jzypsAPThDaAzsmPeQVgf1sdkMNnUp2o4tuY",
  "key9": "4enTAD4WGaMcLEGxCCP6ZDEsqwHT3HHsfJpfJPgwsVXy46jVN2snTTgC52R13mbU5YVRropXTYJtQvi5bpStKreP",
  "key10": "RybbMd1oqDTDei4eUvJMSPFwZ5ded32bCQQXy5KvnoKPzZrML6RepPZMe3C4rWqBEx7eoeVQ34xa7vSYYWPKJew",
  "key11": "2ARExjDok2dmiCUt89bpFcoso1KLM559N3kppvrHaiHyKjE18Ti1jHMwu1tD7fiR9MnKP75LGtQcoW1Mm4Yh4QY9",
  "key12": "5xwULg155VcVD6BB3ALRzSGzVny17tK5twKiaJgK1bpGa18JgQi5FLAbe18eosZXZdvW7VzscaAy4fxTeyhbM4ip",
  "key13": "4Ym419xHfaTr21Y2BS7vmHgo7YP9BsqEgbrGfaJZ7XEsVJYKFBuKndSqjtMH8bhew9TYzSoixWeBQW8vpiiFVY5p",
  "key14": "2TvC8zsQittkkVp3uMWp8NVXPquSWZj1vbAWDLabK5oPUjcC5VAvnfWc9v9aYHhPRXEcwACBfcnA4syT1HVjEBt7",
  "key15": "KzoUq1ZxtRQKb5k2UFt5FkKhtv9TbSpa23V2hWw3Ptvk8mHMsZL12AvbCdPxufBKPJuG1oWoEbezrDM3we69YXA",
  "key16": "fbpw1fVub5dF7QsSQSBoP3zukqLxs944ifZUESTuEUuM5PGuo8i2xvadgoaWkYHsWcjEdCEBk5Ammpq26txFg4z",
  "key17": "3LWox9WCfDh4xeXzaCsR4BSCYetryGxuL346mfK9nDurL6hBrYP5QEwPA1okFqKBQqh1iksp1VW4FZQLge6wDodT",
  "key18": "xUbdsFaxT1EKPKwRC7SMSWgGfesZpKgeJURpNcAwSqKJLi1cAzxbYg2zDpZK2yDG3mMyNo5w3nxxJU5N8rRyA9V",
  "key19": "4CCjhGA4yKxexTmkrdt2aGtmhpFCG34Ln5rr71JVRxrDV4JJUjwLdJx7hMk7YkqJnaHPqXmhnfPxyJnvdwYYDKyK",
  "key20": "2F2NT94kugVuQh1GbXmG7LabNsJz6USaxztMJTXenr35xUqyDuB324TuaLVctfNxbZsAKazoh7758oCMEFxHtHV",
  "key21": "2JWYRdWGCL55fAdxBiG14wGCQFe2pE2ite8Cz6xHDaV3mBaquYZU2ezpnpDPWgk9JxLy8ubTAtVEGkopvdHDPbnM",
  "key22": "3FKdHTXASUtDxewcwmLtJpWTbBCzBrA8fiFY7Hgsc1SqQuJVcBJoatMLsw23jz5WVPvxWu7eQxrJRHdDqevwYAb1",
  "key23": "2LHjv1ozk3a4VN4nGDCE8rudJJeTEThidcqh1JY4sWRNbZwYwsxCdAGrfm6VqpaJkxZkRgFrc8zS3HKNJBhgvLRJ",
  "key24": "5xxjutttNEHLkB95BpYjyGq1pc9HCAivb7HEdXtroYyAHcg9PYRjKc8StqEvWEm93n6ntSBbTogbBiQjqAKeTLHk",
  "key25": "5vTH8viT4sy4JTDzCrJk4nyTp5NZkbxucCkDHmACxPHFaed2hXHFmrcKgjbWp8yKtcxFEtwXyxvg6LYtNwChAsCV",
  "key26": "3w7EnXK7q6on5rZbrsd5cB15yCTBEXiqw3B9CxvhEM7sJWrC25dUfGeJYiKQUUQs4ZHebYRbNGapVChu3X8ejQbp",
  "key27": "63hniyhQo5R8PqAVWTwKhkcxu5gErEPQtbq3RV3wEbr8Ytanyay4ACYYD4SyDKveVP6CzwBk5KNMAZh6gEX7f7Xq",
  "key28": "3MaPoQQtf6FXitKNcS37232xTJbTa2BkuWczrfnWcrWLZsyoupNo9ZNugTNJJNa3BfEstFGQBzE4D5gtbMSgzMy7",
  "key29": "3n3kJ7ZKggTouTH4WoiJRF5hyyTBmSbi35gsYA2MiT9e78MDuTjijqsBSk5CWaKpTHsLPFzxrYCQKQMJkwjLxgyf",
  "key30": "3BwoDGJsHzj3R35TJe5xus7ZT1chigr4ncartQi3efCcYxgtxH5KN6puCcBhZCCZ1Zw5inbPu2P5xK24FvY2McKm",
  "key31": "5fdo4NebHEFbgSGQs4FzzfG1LPzYRhBadz8nDjyRC9hqc8FioA2S9nmxGq3ivL5mqBx6Hg6SZE4YPj2ANn9DdiDw",
  "key32": "26swKfW6nn1BLbgARrg3Qvze95jRtWnJ8Wxxo2yDiRnkVmNC41ZwK8qhFZCY7FFnt2eFjrQs7d7nJhxBU23oukuA",
  "key33": "5vfdTXJ6oSweCbS8DHYqFDV8segMeJShU124z4DwW2rL933JHc8u4tMhNgLj5qrY81fjgjuYt3AShvgrRqGxuSDf",
  "key34": "2oukwsm7Q2zF7PyUUnFNEsnxvqYPdEuhQPQkZxiKwfGYD626SYWDw1VqBeAy6AWQbHphXnbxihZAo8JVBPJKJoLB",
  "key35": "4J3oXfU7GvVn1CoAywRwCCNSAhnUySp8XcRTFUYGdYLkb4JYNgnAqtJQ7A9TJHRw48Tc8XXeLChFvn128mxSeery",
  "key36": "5iwCWJKE6Wd9eYF5A5bVC3h7WDzVMexsc9VBAVDbUSZbonUc1cRjGZHJAQcaPQvzuX7gGiprdB9tniUgQPYHs9Do",
  "key37": "5gybgw667EYorSqY13oKkxqF93xdtN7wTPSc2jNUUbEEK4D2ExfcwcZ27sfEzfoXJ9cLcXNct48hF9HCZMbupjYo",
  "key38": "3KRskXCXWi7rQvjDNhv3CpLsoAhJBcmQdEJLMShb2nP6CSTZMMaQithvhH6aWLPH8rqD6TzaFNNGxtm18BDFoTUf",
  "key39": "5T4F97bZXvXn2aedQVPFnNrbGR7ivouKRMW8qS81sXgJeNjHiWXfWQreiDEfMYTmKzBP95AuegL6yt8FeK4rbYCa",
  "key40": "5AkUc9ZrGLPtgXWrg6oSYH2BCWtMxHBoMmEGkYzJyTVWFw5LhdTaNKj6KBS9Wy7th9FJN9q3BcMcnYpLHNb4EbV7",
  "key41": "2mpg5L2PUEY6J4xp3soupwrNrNrvFPGtopM9kHc7NA2wwviA5YkF71jVi98hwBS98yAiUyQ5AP7EotA5HnXYMSq"
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
