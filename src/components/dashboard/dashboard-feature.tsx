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
    "67QBGdey4eABZzFoQsReMSPifmHo8riWmFNQ4NVrHYZgS5vZPNL77aV3p8qZNg9S1A46rNrqJYWqqvUFH5pakSzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lx52WtvVX5PYtHjo6dJiUyBw9grMJpBYywovPQkViHwdcLdYnWeCbKT5QYUGXCuzfdMhetcX7HY1BTqk3Fw7SDk",
  "key1": "Hy65Gv95TtsJS7WBewYmVMDq1wfKUFV1dAJn2mhhQE2gKkQ8pPCbCrS9oY4oGK7met5E4H4muzru4eep6bvRTp3",
  "key2": "37893rUagJuLDuBnQejHcPiWXD5sTte9SzFu4vrCbFuRQgNjFDZHeYDPDJEeyWTS7HFhv7SjLyyX5vYKmcpmZ4GC",
  "key3": "21xZPSz7heHeLF6ni8zMQCSzHBWbMAPJHPSeC6EwnPXKmxYYJ5j88eTQbbiNzuYZL4Vz4qx6M6DexhjoSSDvXE1i",
  "key4": "5D9R7UrTF5ePbKwKbzZTf6KsJnZMjUcutanCBwN8rLuSwvLjk5adaKtuxLcGvrQH757E2EXPDjx15tqxukdpuxLe",
  "key5": "4H1s3bbe1xFLhCFejfJeSEAQDYE3aSvqyUaugXSZDTnpJdknA9xt7SDikZf2Haa6ZBAbW7fvWMVmacmGX5W89EKi",
  "key6": "4r1oxfYyVZ74PZPGKVGD91K1UiRqME5nCjRwZddDhGG62Pa3pzcC495iH7tMBnJynPi6AwGewbD9erpb7awPDBXK",
  "key7": "3QWWnYKpM5TDrgngBzfaEF91EXZN2vt76QW46ZGWbsv7xg5CciEoxTLozBgvNqpFB5FpUGKicxWhzneMWsqEqSB7",
  "key8": "2hv7RKsKvD791n7xDvBxm72aNjN8jXG7jgavnD5MUPp5SzXQvuddy81CttmjA6uHUGJd3q54fJS5wZqwG9Vj6Nnh",
  "key9": "buYe7MN9eMj8WJTDDVg1RZbGAfNjMFkjxVzZP3dpwzFb6hvx8VzAkb49XhsqAZgMV6cwgBaqVE5igptqgRrPBMi",
  "key10": "5yi2ytmapY2T3iZ6nDM2sJmkTSJjGUD2ha4G54oQGWEsX1YVggUBBSscjuCZMkE7ceQ1CMMaDyn5cs6MS784cuSV",
  "key11": "3fxgqqZkqdpBU7LfbSW9GUXHnfVv523pvfDDzXujb4TU41Fhe3pgBMPiqZomAfw2royUPjhaabaJiAKDXLhxx32K",
  "key12": "2CybVmGZr12mYfyahpcKHZ8eThYUpQedCaJqYidVNxGpLGJpay3MY6o48CSnBrDTKoM2rTy15ERp32iNauftb4AA",
  "key13": "2wH55kn1gakpZ9QTGhFcZ3hATJWSFgV57RR1GTcS4AcaFuxhog6sb2miHWcDk8kqQfKAjbLjt1fwJEJfMSsNpuTW",
  "key14": "5nZpQBdbiCkYTZLpbTK9Wn92cz2EAUdqrkJoTrMopfFcrjd9KxEnAJmrkUbna4i9YGUc67NW6onNt4abNXhSB8af",
  "key15": "5d8fDtWCPEAPZWekzfWXBFwASeNBskT9zuRM9wc4D73AYhLVEJkSJicESFRUQTVa29Czws9GFnSFjvYG2FrHA2Ub",
  "key16": "GknrwCeUBevyFiQn3m6RyhX1AgLvHKBAgFntWzaGPrM4e8f6UxL9qj6ox5ZAAWa7NzngyzF4FvcUiDhaCmUHYjr",
  "key17": "SL7eWeAq4G9ByKM4gMsRCRSdosM6m2q5sK8RVKhD8jBWo1iRvjc9GiKjvF9itMbpQZFBWe4ZHpd2Cp9cEP8TtJy",
  "key18": "5NgDP97FLcGAJHVDMHzhWHXBSUbe1e549t4zXMwHFLXzuZiuN4Nr8D1AADFCVsmwqCyKWjJVNbdeaoktyRLJ5cvf",
  "key19": "4TYdT94e4c1cbZVMFXmuz1xsP5eiGr14NQy2oVEZEY9sc2MyBTZX2MiyGV7QyAWTeNTrhSgDbcckJr5hC4SszDLN",
  "key20": "3XAyxo5USGhH4x2mGV1vYHC5NGrZLffgxTyXKSp8LTMU7BX2RVB3rzGkaHbeRa9A5zQsNt1nkUNr4guxijoEcJed",
  "key21": "5SGt36PNJgjU8tUPqVQMApD7N2nAyVSALZ8bauV5pRBsaNXeawbeN1a2nAfr7hXaVehRCXE1sbXnGxsdiRzSurRz",
  "key22": "sG3KW6p3WW8e2SxVkYYp1eYEdcQy6898LqxLzcwMpQMQgwnJATgMzDCZDoarcJUHKH3P9S818msDJCitTJBQNqk",
  "key23": "4nQvCnGp2T8y8Xk8mZTZv1PQRvX7fWE5BHVkS9TMTAHen7HHsGBoWSBngUhAtDYJ5EwG26E6XYVh9kKGXh3gbygi",
  "key24": "SXMQjhFEwn8dfPZyVTny6aV5RKhEmcfH2MGUaZFCmc3ma9dtjQeEAQJy7QHYB9goFsgWSBsCNv83DyCYB1aQ3tv",
  "key25": "5bCJDRFVGQ912pGLzVJVxqqjFxLimtfvWrNRgTbMiUgZJkaZ2u4ikEv1dc5J7aCw7RuqZqVogyPkdcrT7s2XShLD",
  "key26": "FrPn3cJXePeyCtRRSPrL4Rnhkiv2DWrbZsNt2vHpFh5JHydu4RCUTznqszkguYG7e3iyYLGuSoLkQ58FRZ54qD7",
  "key27": "3QKmviCDMcvPGHiAULGkkAv5KuDHk7SocSkyViv69oRK2j9r8Hzu9xH9yGqdZDQ9a69S3YKvtekU1LUZ4BUiiAtq",
  "key28": "5hydVft4EFCHvUSu7kbcND5CmhNUAAyH1YavuUNq2cTHffbodL3wniKYXra2nJn83kiXeNLUKGSv2EB9JK33ghwT",
  "key29": "5wLyEbPRbSCRtGTqavbzcMqpzac1HN6Pra8Dgq7MzxjtA6vutgxbUdfVQpLZ8oVgSwpNbz916Z2hajshCrG16CBE",
  "key30": "2uqGhWQmiVJKY29TaZYR8Q1SE29jhJcLtM95x5Tjztejma4rYy8tUX1NKdiQWhwiVtpL2CrPky6uFNYyS12JjHSW",
  "key31": "Uu3f9PjqGeoVfE6ceLPa5UZwfmma5b933G8NMMr8VNyeTSJeW9onPnvuL5nKHviaFUAXyeq7mLHAjUDuYZLKD3N",
  "key32": "gSS3LbWCN5JYxaPfGYpo9SPNs8N4ES96hCWngUKGPHkRsa9VDxuxWha4fUhmaMGymBzBXGP1sxxtXGePAYz7Se8",
  "key33": "4cbCXnubQ2oKYBSUK5fiiCMdip3mmfsrJbqtGf4x4aq92r1S4fu7XZaB2rKPay1CcW2AQUDfZbwrqWnjcb1UVmfn",
  "key34": "43aanrTGGagjVxovWFeBPHvmHDx5GKt1C96e9aJF23LcgvmM6PC5nxU2N6eT4syNrvShwEsujcdZgn9oWtkXkhKh",
  "key35": "nCPcRoAqmb6wa6J6yP7NpvTDcGjYkvaoTcU7UV5yy3dXao5UZq7zK7EFH7GQGyuncoR5Tpbh9fEjmispKaibhYj",
  "key36": "8MWePkDWoAfb1ehVFQyT3XhNpqqJPgdaxmjDmtsyKZRuvrZ3Gm3HnqPQVTNAedgzQHYbx73nLqtWkw1L4kU93X3",
  "key37": "4vCTs23BydGA3R9Lu9pPo4WB7vJta97AK59mnjqMfm4tnUZvfGWz5wGtqKPA1QegjfKKaSh2jYpuyo8FCDf5ebs9",
  "key38": "46wFo3QHdMhP6BGpj3SRkJkiWtv8yrQiP59NAUmELaV5WFgmTDWkgQAByBmNFeh96GA8XDZbmhJvAYdjM3Honusq",
  "key39": "63MjP6Fnak3fjy8goJd3mTeMxTiLfDBXWS6sDkebjFpPRv3j1jvtHyfYdsdcp1ZeX3FmnMsG2Tp6H1qMYjgB1Jun",
  "key40": "5mHuvC2mTK7QV7kCCzYcCS3QoxQfiUnDyfHNmHhSbgfqS2WR1WNxgVzFvhMFpqARjSmyxTVujhRL1qYdzsEYL6na",
  "key41": "2oKshFK2fBaKkapbDszcz6rm9RupPNXLcqF7ARgRBQjLom14V8zXdfxpVyhUWYuV4wdC58YYNhoh9YeiiTTuZEo1",
  "key42": "3LUEidEkcEgQXCaZgCMmbMmLvJKs1yMS11xK2TioL3JfMXi1uPVhaUKEoj6mgiTTmoarqHvJdhLtAxD8T73dGAZF",
  "key43": "HJidTNMMtsnZnJqCaazxzF1rW1e55uJpUgN75Ugi3WphdpWwvmzKFWqCp658JgpFUwejtBuJ5cGBdiNxtjnMuzN",
  "key44": "2aUAm7JqFwU9AwABDCUAxDtkz2SwLwt6tEg5qS1AFiz24GGD8pTnmzFzYQGRZ8p2TREkDTaJ12DnnNJqvGHNtVMy",
  "key45": "5ZX1DXzb2Hm4qLRi4YMkZZhoqvEHTuk4cgHcExBBEA3ziLfLWwKRGu1vASwRKDzyD95T65kvVNkgCRU8qf7RhR9o",
  "key46": "26QG8dm2CFhgxZUXWdE7cYy3bXPbZNwwPRwZgxPy7hwDt7eWDhWjJ9uTiuQg6fRRmvkc7gmBkCsvoFBJDn4XFByQ",
  "key47": "5FNZYbLLPcbd8D84cm52UXKvGcjrn5aGk1JcNFRJmFfmDnNQ6UvgpvKdKNnquR3Csm4rmLjZE7ZEEG4QmWDVMe8v"
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
