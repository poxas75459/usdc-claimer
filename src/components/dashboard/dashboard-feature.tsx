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
    "4WPuke2qAnQvcDRcrZ4Ldj9JiYnDbQTugibL4FSwpfV6UbjyCNca91Z9uszVEjFsjDyBpbY83aNW6QtqEWLKJuGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T1fNqtuPP6HNvFERSLcJjbm9TSnt86SzhzyLMutD5z8EHY5zs7dpzJqyNb82WqWD2rSWKMw8pc5EtDDBamtQyFy",
  "key1": "3wGnakWTS2P12z23TAyrk7AQHN2vyRGYjH16NyRvjkAcM9NrBGxsPYwsu9iB8eUvoS9PsKscP1BwCVWKSHnF66d6",
  "key2": "47CZzXNZoEaAD6zJjtXQRVNqjQcJTgS5y3WDCAJqzF8Db5YDfPc34qqqcNw52CvzS2evwp3JBih1Vw9h9XC9kTPD",
  "key3": "4scNW5FdHrhbo7Sa2oUHKPT2p7nya2hBrYuctmh5aCDupTBtFmkEsjzuetSN4p1WDtbpBHayQcBZdsawVjyyasiw",
  "key4": "3fSCCaDe5hyZSrGPkTm1ctXn9SoZEkKxAt7D9JEJ9uLQnnV9YxWwZtEp53Qt5WVH2Q1ZtUxJVY2zU3AgLLuJrtw4",
  "key5": "CfqyMTvtucQYrBCXGnUocLZvxFtUDJrgH5tH119MX5S5F5Hg1vnfTnez12PsmJoVKmdqUKoiniqFvnzQNK54YmH",
  "key6": "28CS8Z9ax1DBAG9wWRmreFpkMf2NYfqwsvMqw3Zm79kyBH42SMTdgKzKpKhn2rz1uMa1Fg2hgPgavyGXCopH5BL3",
  "key7": "3w27KMnMwEvdqQxtaXL58xdttZYuf69mkaULzr2vnmwZoKWYNkBzdGVH6ZYphXHGAKDkwvA1cXjcahqH17aS1wkm",
  "key8": "jLYozQ9S5KsWokqhNLWtx8Rw534zAnJLiS2jXpTNmb9VuH35tUNYvDJTccdbCW2YxVcRvDuvG5PaJEmCMpoKEwp",
  "key9": "29b1jLUegaNCWqAAQ8ijB1cxm4bogMPF83aKu8mobdxmQauyZCBYLFRKc8jKFXJLnudVPCMZfZbYu4RjJVnTHsVS",
  "key10": "51VVsPdtctjfEDJf45VQQvyzSxFKwq7XAwdLBhxvadsEpYtqYLXzC9xEnWiD5cyxeeUBUuMeBPHZ2NYhqEnJNAqP",
  "key11": "3XPBhwqzyTBqu8rCF6GHbFkgcwkyWJgJfbahxpHc2ATGzWohPJYz7GbwQ8XhQkcEfZnoHRNLp1RcLk1zCzUD7kSp",
  "key12": "fhJuzzrGbCD9YsbyrESVRJ4RRsk4bNeyCAJvqN2DsGb4uxCdZcSFdpgpzo6DFYzLRFEb9bzrxhUcMC9PExZo8Mf",
  "key13": "3q7J8MYXJNHw9LF6ei2SVXS1jeDdCkS1epGW5ez9euvxdao1pm24Vm1iCvjgRXqURW1LeCKEa5u1fUuSCy38VvHH",
  "key14": "639U3bRjNRgrV3JhkTPsjXxApPVoMUQ37YbxUF11jc2ndUoNHbiDFJNQ1KNuSeHmUoNBHenhcJQBWEbAo9kq9wtJ",
  "key15": "2b8XP5hdWuG5bMTGLHUEPcvNKueX6GZJvMR2feJN7SHh5DVTMuqyRwRTxTJekLbRTgsid3FkawXQbVoU3c13KmRx",
  "key16": "4qwz9QGkYsV89o1CyVeXVF6gnfz1ABsjNjWE6vxZVWg49FuWyjroCHowixp5nmyQGyxtR7v87YupeARWfkiBGpPG",
  "key17": "i69ufNSkd1gJ4HxkKPQhyrb4DGV7gNVwTAbr1stexYwQNqLYw9ANqeZYFp6YCucKCty3s4os5bUYYGUudv1XXUM",
  "key18": "358ttnwqeiHTBaM2XpZxW5gfsUyzJWU3tb6Red6vb536JYtsB2QWSGRaKtkfDMkpS3b4sTy4i7nxhR56axJELEqw",
  "key19": "5vTwswEYSwLmRkhxQzwD58HrAFRxnbWqLnAKLScSBeSw344qBQPNsjCVNpFGp9HDpspRhSdFNzKLY3LSXHsoJuiC",
  "key20": "2RnJP2wd1xJgVuM62bPXBqjHQfwQgs25C4NEpe75BhRTnwHhi48F1xk5w4oRDpU6rC7xgLyFXYkMdbez4c8MWeos",
  "key21": "47owbsyescQ57tYWLyxqpKqPwvQbcGxjfn699zMeznPHfX4UE7j3zL4AUWMseeFymETf25RgSZKMXPxML1N79D5E",
  "key22": "2XVVmR3FFBufUyEwRuZBsCSkP7q2N64nSnPGLTTnZLqFkbeQHszW3RBmsG24ihLjC9ic4akdrrTaLWmGNL4rovSC",
  "key23": "ij4y4LrNPei3ksCVtKJKZETm6SBsJ7ETNTokZT1dg2mDFGNbPc2nZjRXmGePePkfj8orFQk4W69nzRtTHFEgso5",
  "key24": "4eFo8iaMZBd2adtSpw4PvwHu48EAoojSXu9pyHXSqp9FnnCR9yMEHZs56eWGG7vYFG2EyxYrark5Be4GWiq9cxHx",
  "key25": "2NiAvdyijuCinn958a3VTywtKuFNor53QWh5uQA5QUfNX3eGFapfq8umZ5cUajLKR2nkRpg41V6SuMGdFVChgqMc",
  "key26": "N79weYHTcxRiKSWUHWYaDNqUwQZtea6tLgxjQnNBM3as1cq4DuBNTWRBSRtMVL2c1i1pvRCy9RTZjQRA7r7zeYQ",
  "key27": "2BExzjD9zLv62cKU8hHPQCd3Prasq3knXPRaUfcNB4HiHw7dSYfCV41kKjgJiqVkNHGNJ6Lot2vEDCz7Fxd7puTW",
  "key28": "8mtFE8sdrQ2qGFUsZGAV6MjdwdAwGAxdvwaTDSkrNJJYksuctNLUZyXQuCtnvLGBkbYPNamuV1LAZ41RodjrRof",
  "key29": "5S9gzEGUBJu2Ed9HphVkQ9AJUfoSgJdnZBAZajrSq5DWy1vZhGWBc4W4x84D18u2cP2ZHAqDVYrvTrCP3bk4hNYT",
  "key30": "AyKxq4n6rwnYR9EoTKZyZ2Un3KVmAXcspYcSPRbmF4EXtT9Uaz5B53DwJA4atKTQWUxAeeAvfyURbkLJdNUAuHL",
  "key31": "5Bbzga9y72p3NQgVhpUNn9CWfwNoTM6vSuW4bJmqZFcPm9TUsWozPKfyiaBZgnXVqa1N4jeA4u4t8LURjfvpJpBe",
  "key32": "3CX2CXprwezNwsG1j8YWC6XpA2vq3qNbGDiX8tUC2yEA43nBjDy3NrsRNA9FMkYhejD9UdKRBJ4G6XPsKbBSMppn",
  "key33": "4YC1rShYAuNu3xYEQmLdjYdAnXGTDtEULJGTXnEiWaQteNSYNGn5wMBZ9DHGHvzXdFWCg3LP81usspw9XjVV7AK7",
  "key34": "4TJNbyzAJzM3baHoZdEVHBwaJfjrKFdPKswVrnvJZVfSbv7rnwYpeWGz5JfwXWBYWjkbBz96JHhfquaDNoYBY8hU",
  "key35": "4gvuQzy8MMhmWkysvkfpz2DynTwjCs2JLdZVMLUuAMujkJkTAKJbY4nRVoqkgnPoQyC2aGGkV9GUqEiWuKBjRR94",
  "key36": "5AaQPCZNuAeRWM5NF8ocQGbZuTNNHHpStD4hBY82hX1iFANmZWJUHQg5PPKy5jvZDc1VxkPFRRNHeM3Ej5MnjRWf",
  "key37": "vocABVTZJ3utSoND8QpeZBYruwKcB1wodeWxgbWivyV326VmH46UmWJr9YBULewEVugaWjumu1SRuQH4FWthi4Q",
  "key38": "4dEaLfu12mAtYtBJEM1V3jrcym5YnaaZmZpAnnKCYy5BLwxb1QKxKZDKonPWPrGUPeGGZCLBmdUo1JMksysHXhrT",
  "key39": "46udDxokiVkREi1w1whtjQD6TtLv3DaSaxuJo6t21qp5d6maXVQqhuNT2VhBJD9uHTzWm6D77VmJiZeVAd5ZNWCr",
  "key40": "4XUCruTgnzYyNyyo9QnrRfvz2C2XWDmAtrgggbtBu6uk5FZwLxeZ6ibZKQFc1otY9Ep5YUPrM99YKhJAnQXH7kss",
  "key41": "SKC4kC8rR3QHozMeiWhejLGH6uLdPrmXcwVH4wZoCTtxyhjmVcdkH1RhxQb4eV4PkFVWq4wxn3MDxEbTSE4G2pU"
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
