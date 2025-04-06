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
    "38fsN6hbzoi84Xa7tWL83q6XMwzgkFgSioBnE5J3PRruNuPkczZQQwh4KpkyL3hp5jzofrRU5sEHf4vWv6ohz2Qz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QkC3MA7hKssmuPZDqYK1Z4fidTBeRUuFJQVG5uZChwD3s3FcF9SnAuDKhR5MEwJGuz8FDWLWAbbDsXPGqQHY3iG",
  "key1": "2poPsmPnMGod32qhA8gwWxeVQg21saMGa6nz2a433rTMa1GBuV33vs7geZSo7rzCDdp1SKYU2bKJT7GJ4oWPGEPW",
  "key2": "Wf9mst3wZ2Gx7JApb4oh3iDbCyU6PKTps4JzypPyERH3UqRQBDREdRHwAYA43LGZpm2LMnxnmMzoAG723a66ekZ",
  "key3": "5QCfDjBs9jyASh37drWu3iGLJ4D7KjKHFGJHo4XAy4YxbgxQdBpgmMEQkrCehVKSMgsnZvqwPvSiNAPUAssZUfC1",
  "key4": "347VbJbMaTbCUYgy49pXdmx37jGcotKDyznYcu4Xz8yv4A5C3sEBc8cBXxAe9h8upWQGVkZFciaFGZDK4EecWND2",
  "key5": "jcXBBF79rpNNf7oWdPTA2nkYL8PN32miYmJDsxQGP7wdjU5gYJHyUkWt5naG3nSwY5GpjZMQUZqNy5XsuKU9X9V",
  "key6": "63Ge3UqZxJhuHbxmtAGztmsCnTLjbQQSUsE6wpstqzhQdCx88TzZtrZ8jiVsXSZ9BYcSjaxCAcgDDZ8GTjkf1Uv1",
  "key7": "4USfqKZKuttL2y3gzub9JyqFT6sqaDmACLQSgPbfeCdH37rTu8cAidpRfm3663pwf8jBzJMh1E1XeXbXQTLErEGA",
  "key8": "2nPvqc6z3RVDiH4B7ZEJCsWEcmntpntZgs4WMo7LJVKFQ3MhQpuvvcsSk95D32178sABkho7geYtMHE97X2CqTvp",
  "key9": "5xZwxf8qmH1Ma9YTNREBV5GrQ2SrcEfNpPJUThzuHUdXWJkH41xXCbUx5qgKYiTUP1aKSWVscLY6koqqRmsmgZES",
  "key10": "5PAa8A3mCqFsiJr6ZrdWFaznuWY8Ykw7jpy9DkPcJc6foCvrDUyWGHrWCwS3duyn7fL2qMg2c3N5WQ7D5Jcwve75",
  "key11": "2vLv8hWAM1NPnJRrb27zRbr6EoJPrETTxvJyqvUbGAEzJDrTahvpe6Di4qvUpNf5Aq2qaJ4JTNFEsALnspKFpPTr",
  "key12": "4HsZSi1RSdyuVaUQFAcYzBdqnf5Anc35rrj59MywMJjaLv1CrUj1tusFHof2QDHPkfXoKeBP36uZpXMPmcLWRqhW",
  "key13": "59R6PxF13Fc7idNTx25BCEGWNQfe3z1KgthincruFRgZXbJttdq1LEU3eE5xMtVURCzZsngnRwMSsUqWQYX4WCJm",
  "key14": "2xrgaTkGX124JZcqRZruniSmZwsHvwjjBiDvCarFnFqvQKLM4R84qrhmwpUGmYrxC83ha9oqnBoPKexZQGqimge3",
  "key15": "4HGMiKacL6PLyPu5iiLKZvMnBoLfV8U5mLSiaywWFT9fjsny5P1f6NwukeGFwNfDTpNQ9pfSP3b5W3coxbugY63",
  "key16": "5pZsYcb2C3tXigTX69d22kZXLGBsfJwG3jXnCxia6D1dgcgxB43jFTzG5FDVK2gr6p1mEgHn2BpuVES6e55kg2C7",
  "key17": "uadJ3ALoENavxuZdtJUumDXMWvg193TbqxAVHHYyFWgs5T9QMNrGbC6cp7qBroLLv8zeKHQypx91RB1fgowtahB",
  "key18": "3hnWY1DKsgNzJ8iw3NV1pgnT6iTjn8zxjmpkDjFGWVBEtBvawPVrgWoTViMA8byuNQshuVaCS9uJxemC4Xmjvs4u",
  "key19": "2ZpBveYcts5bGsEahKWYacRQ6KRsZwkrsusHxkYEqpsAhmojYTXt992g8tunRVufShtyCKmxRJ4XdpuYD1JghKvu",
  "key20": "4XdSi4TS9AWUHWR3Ny2JVPyVB5Zoyjqt5bTPcfSZNrm8b2GHSx7hts4NoJPLfoAQXJHr1Uf4VYAuWDyceCDp26ES",
  "key21": "3UWKYQm9gsm5yrGfMr8PezMgx9wWbLqogRB8g4vq4bakActfHejdGBJU8UGR41WkTWgkLoA8XRkpSnTb6fFEs1iH",
  "key22": "2nUeY6o6frLZHSu4kNCNwwm3PeHnLm4ik7bzZYyk1vbLY31hyFqw4u6HNqcAegsrTyaqF1NyAVADez9GHctJLtQu",
  "key23": "2PctxJaMDoMRfzGWY619ZCVsZvN3mJ57MCRnaoSpHZwv8n5SqFSNR6DQY6fdvXzCXq5bUe2HSvDiCh72b2uESVaw",
  "key24": "5A9U86LXGSh7jNBnprgRdG9HXPG8ZfGBiskMiQ5fj5U45pUQ3gqTG2tAYhqKZ9ok7H2aR2R2KQGyJVbgw9ytyRoa",
  "key25": "4Uz8ycgGFzGwKWxTzddHZi67gCBqXR8a28RBYBfDsLTGaDQSBK2LkhcgJL98MgKNC8sxxmxPMyXonNNdBToy7KCj",
  "key26": "2gtffSfDzK9N8ZakSWTz51eEzpvDLgAcJRpSrgDjwBME3drsntH4Rq6vTgNnMHe89i7eFB8NVVJmxftr3v6vfyvS",
  "key27": "4th94aERFBZ4eS5Q6of1o65NGXLcHPu8RuBUrQ6UUiSQwC9d1mgL9oGD7LMVWrpn9cHY26X9sDybph7hpijDojLR",
  "key28": "2g7gmamPgqxcjaJXZW68AGLtqcoUcwHcaUr6g3KoXSkjKxetTu7quhcmZu4Nvu2rGgUjd78YF1qud8Z9XAHq61qA",
  "key29": "hHCpq1T7kuQEFFXCF46ofYRFwLvhrGmdRhGSrLbom9CnD1LG1kQFikAEJF2XWQoNzGeePbuxsb21EyS9Mq4uyFp",
  "key30": "gyzcKAWq1tDXgWMkbadTwD2gsDdny3eqGKwPFN7SBCPrvBDVQyhxkGFrz5afJ763gJzDu5kTyEzRobbgkcoW7Ph",
  "key31": "2GQzu64udmCnVtoQHnvRRGQYqjrrYuPgA9mczikg38rLMNyJ6rD5TtM4GtXtnbRuML4Qh7zMeFp49W2auG4uQgfy",
  "key32": "3dvVUgzFRx9ZaVtnUt8U5ej7C3WxDUGcvkCLJuDVGSY6g1JD3y8pkEvM9htaxkuB7M9MiGK4gDFRXxTFycS6sqSR",
  "key33": "2UNq94nYQQYwPwEyiobNMqDu63v1pPbyvBd2V614ChivX3gmoEUzRmGWUeCtz5zFET7xWkewY51xBL4CErFhKh69",
  "key34": "2DQrhgGSwGQTG9c5Q81XdRp3y3Z6DKnGNfji1B8wMipRxXJGnFkMSBMq2DVaWks2MBuS7m4fV1aR5RD8QR881NCL",
  "key35": "5rvLu64pqf9nDcLjK2n9SzxxpKmki261L9QmnMiG4FYebw37zNxGbEFtRFLxduMV6YLCP85LjuVj7BewJQYnkHZc",
  "key36": "38zRQNhiesxmkbBXhVygWFbheJPw9CuggYhDQwQ15uBxUdQBCTwD7oNeTqLu66n4zbfcpNKH7Dx1KYXmkctaDpEN",
  "key37": "4evKbvEw5aC4VkwzNmvEAyxznNXPSrVfshmg4sWDLMJb8TqVEvt7v9Y8onQjux6ZLntaqr7qst1HrZZYAJHMSyFT",
  "key38": "5oqLp2fXyPpZgCmDWxgifeLt2GMSMNV8RjeHhPjhiBneNYMdu276mVkF6s8ruG76ZG7BvA5Ly6c1W3zP3a1ByUYd",
  "key39": "2aRvep1fjg7JGCJtCh1Xo6Gxo2KWQcQy2SYVstptEgdpgsGmUwijgVWC7Sc2VdxS9Xo9rwEWdMdYZrbvS1p9NYWE",
  "key40": "x9FwrcpzrgthFnVnt6tih17aUwHuhb595YCSbWsLM4azRctBHi3MxaZkHL3vEes22bmKQhB8agcY7RRuPHgXxaR",
  "key41": "396NKwk5t3ndaaXPfiWS5bxcB8hassUYdnZQHWTFouT37P3KXkmAq2Bvw936w1PczeqRVUiJYpY1aMTuaaPxXsYn",
  "key42": "LmSFn7eRDpyuZAVMg6DiyA3xB8KRvpP4N3Ghj63Hzdu2qhS7bH6GoouWYHh13Q65yNiDuytHyvhoQJAH8bpXqtB",
  "key43": "3vCGa9exDYKZbNFopaw13XRHnwy7HJaaBgBe5uiNV1NS2mUnPzz9qq1mqFSUrewQdwz6JW6oxamRCadsH1CVEWdR",
  "key44": "5Zx7VxruGK1yq6pxfsvvZ2kDWkwf55qeGtCxSncZ4AtivY8CAE8CYWw4JcoPm3vkGP9AKDETw75GXMA4LVDuTiVZ"
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
