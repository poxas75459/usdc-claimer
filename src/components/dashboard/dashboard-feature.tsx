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
    "39v86TSNPmbf7tjH4V1KQzPvcD8jrUGRNW3sNfo6JLaD87xFXRBtjQ2UrfN1TNVsfBV5LsnhQhsPjvCKsgtAWY37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kknW4RaVPPTTAVXtd9459uzhY5nT3RiTicyuFgdHBhDs7naCi52oMEaEYYpmRNUS3LDyGw1eAwppMJu2EJgGcoy",
  "key1": "2viQfkqjBMDzNxReehP5ngnvdPojg2S8gF8dCYafNKR6fMK4CVTz9A83NHqJrXkrz52PtyFVFn1wttTXxKRNypCm",
  "key2": "3oczudFDvR9YiwTV6CdFpASgmmBVKqZ19uFJwfyLL5rT2igp3XP38pRMZ58sYayRJaDCUeajW3igsoxUQUoo56bD",
  "key3": "2QaqJ9qikiyugtbPaAbm7QFomMbJCzPbr8qoc7UTF2sTGr9UGQ61TBL4bShDfHnj7a7PTj264NPVeT5B5y3EMYsq",
  "key4": "3tmTgneCBBKXg84uae6866GSS6YEKiYMB4EhtCtJZJMTN9feQUB9fNDMwtnJzNAUGGdXazow1BHVjn62Njb1ERby",
  "key5": "4Hs7WBo1hnPDyPPii5muoiHB2fD3CokyW7Udhgiroieqcv57m52ADoUGErDacrWtPKED2p97fMEAqAnF2FgaqbrG",
  "key6": "2z6M3gMhLE4XLVxJQutaowSJB1qmf2PqvDQNLXJGFMbJMSSfbj652rYqC8kQo5ciNHoTg5PP4YFkz6Dyw1gaN9XS",
  "key7": "2jhpAmNSaXT8rHecmbm9KbF5knwWUG1JW2EiXHrvNe8qBhAKLWgVFTGcJXwx2MFHjtKYRrnmCFUNkjLjCCmLQr2y",
  "key8": "5wZRgpj4Cz1AZ7aCcXSpFx3rHb6mdBjpksrAXyaqPUqcmmcZdYxJkuZhueY7eqktt7XuTDsYEiJBCnt81QXwR171",
  "key9": "2SDUiQSdLG1YsPGX2TyagWGgfPaGPBb57PvAogrTqAx7w7r3HNbjafUfkbSpy3MP9EYk9JUk6stkXcTG79udXnb",
  "key10": "3EzVa4kKHVWH7A1o8VQPawGjmpoK79Mbxz2RbKcWMkToyGyPhm1QvVpFvwcbR7vx28JuW2yJLfsCVPNag7MJZZwf",
  "key11": "3mmpwxG9iy8kYuTJPnJL6rm4EEDBhgyrKDU7BuxmdPbYwAFKN9MRCzvfoW1t8d4GSzDDxqcxUF4e5mVWLHhWN93f",
  "key12": "2CXsaFk6j1dcc37djwzitt1L93CybiWFaBrsN3iBJGX1PevP4pfg7EmYk3D1ouzAVRs9YK2QKsGqRNs8pDXjfVqL",
  "key13": "2V8fyDvNYPb5ypoSgr5Jr5E5TVF54pvs9GNDR1bfXygGW2Rt4NzRQvZGRbV18zf2RyeKGnK83NX1YHYnwNmr4vws",
  "key14": "3jrf8mW3SUps2ris8SatSFMiUJ1NGLgBLgYYGyYsP7wKH9AK2BbH3gH83dPCPY7ksLKu3zjpg5tjxE4PMnWVSjw4",
  "key15": "5thS4A5dcLBhoz2rqJsy4u1zKKza7SyUkaATBmN8eesX3ru44BsgXRU1jamrK1AYrUc9MJ9cN7uz3LbB7wQkvdL3",
  "key16": "5ps1ehu9hC28GgMAdALiBoz43tmR2R7XshSKS22bJMYQnAKju4jRHB6jcCaRHF39UCWJhU4p5iKzoafY7jcMqvLd",
  "key17": "3HmRdPRtf7yWVPEAAfUjbKdc1HbN8pP5KbVCKMBrJ2WrL3rVVTRUz3Lb7NJPnuNKNt3tRY5XT8MYMoXooptoJtqY",
  "key18": "J6ZYcmhFDpC7TZycsAsiG5c6o1qnQwyTBB3faDDqYwHz724N1W2JNiZJ4wqX1NsTqKVwKkf3WoDseC2Xb3Y3oxz",
  "key19": "GWZ3FaDXdvP1vW6PjxEempVsmpwsMDoesUrHJiVDF5Dk5eS433Phdstct4xxdpc3TTuwmyAX1vpeAkreoccscib",
  "key20": "2cH2bwCJoDXECfA3fQB5TmuEbgdLDeRmGAa5BzcCR1z5qeDCqfH4dFyYkoqMYoco7nmcB4YtFxvH7CjT2q6a2Eqc",
  "key21": "3KqYuhRhrzGMAzAj8yFt2FSzogVVrQKgKUtgKGzNqyFbVrZum4JErExVCr1shj1Hy6raoo4uhCexwWfKaC8Cws4T",
  "key22": "5g6cr3MS8gzkGPTcTzVb1hiowxDpjnrmK62k3ehFNEW4QLL2com4ufXmbuVhcrYokJrW5dAmWaSUTXBHGJrsymCC",
  "key23": "61CGe91pLoNx3UCu6HxcFwNZDBTUmccQEjs8p8T3nWnt3yL6wgbcAQfaGsNcf3fe7MzLtkvDx5NiBHNsNcU4S5rN",
  "key24": "UzoaTrh8kVEj1KrMWvnFb4vuT8Z5sbhfPB6ugscaTZrPkMdTPq6b7Y5g7F2wTMwuie7HJhS7WbemJHBLERa4S13",
  "key25": "52VmKT7jLxKiF3fyeFUMg6sRj5xjiTWaq4dhjZTkJmQi3yDWJm2xHS3rbE8EfdA7TubHHH6USw3z5XoX2EjeWuoH",
  "key26": "5YHMcu9usAb8QAiZ5cxULwCUkHB3czWKYmWXD2ZNMuwEJbqbKPDvVNr3m4JDkNVQzfi7xTRGnvKtMBSyVMJbyH4o",
  "key27": "C5mKYH2P9262aXTV2pd1s2HXLMkUD2W2Kgn2smtdcps5fL26ZGkZMudC59pLbVRffZCLgshC4df4A4G27rQvFaw",
  "key28": "3cXWdNDoJTA4oFij8VJ4WbT58MtzofUNoSnARGQu3mJ71oKc2yrK2QHohUTRmzvkcraqbagrEwug3mNKMG6U2k4W",
  "key29": "4qAycC8TDuVyVspbNU572TYtjJNHta7rPvnS6Z4Pcbkg3YbZrbxnPhm1fdHWpB1PG4aUgfhyjSRqtLJB3JM4a5HN",
  "key30": "3pTZUNVFN4LTroPpFwwos1yPa2FmnQKEc1Vwtgx6YgVj5d9G1rzfUt68Q2CVFCjpfUyjhouiccYUc2QwovmAh3sR",
  "key31": "xi7G15N4rT82ZdcuG8DENngTx8ZPJ6SautR9yHKu72RqW5rd9zDwFxwDf9DNFqz7pGLmjfa1fbpwNw4yToMibGp",
  "key32": "4tj2VV3Q9FqBGt2gPETinH53wWBiK3GEQNjQzRbzcghiHHh8xbN7FSPxWweRe4LAjEZz7DkacXQuP3NPFBjd5q14",
  "key33": "5Kak8wipAtTuMhjCE2EgxrG6n2sWC8SJutga7vpYCCNA4V9Q4bVeuxU8v8zSNMsigd3F3Pis1bRj9km2mgCyEQwh",
  "key34": "4sAHwWGGaU5pdjWsUoKzrRY3wJ6vEz3o4qtM9nbpGJCWXH4tz7QMfZV8qdwMoo2o8rrek8opmpzKpMMtB8zQNLUZ",
  "key35": "2dATCAd2efs9Wdv3PP2uSRecVarT3tH6XusNK7qE7J58PhaDqCwWneWqp8k6acUWE5BTxgkNVMujFXW4hEYr4LEk",
  "key36": "5zjHdyWw33WpfaX8DLkgU9FFghTDVbkCMke49dGgNnLHxqf5Y9oHtcWzdCqConEqePoRJPB9g2Bts6M4u2r1spLR",
  "key37": "7LA5jWmky1D1kt5pgvdpngF8Z7YfRm1ZSGCrxv3AD4sRKEQUJCvLSvEKjaUh4wDjJ2aMNcL3iGS9U8h1piuwqJ2",
  "key38": "4o9kK6PTK4ECcnHa8oYHEnRBv9pFmvbqwPQxdH2TR8ph6wv21pu7XNk5xndMHPC7Fkjpi2iPLGHMLuVdXbdJgFTV"
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
