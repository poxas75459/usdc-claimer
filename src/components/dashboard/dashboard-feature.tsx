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
    "c3dHkEauFGrfJ5iAJkjbkEWiwA24QodhmoyD3KqHMZnXHUCNwP8HnrTW2EtF47NM961jmHfpTPwvLKU5rxpsXPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JVUrQHaGArRhcThUTG3ScJCozNxoWPoTGYj7VwM1RDhvSMgxxYB1h5pr3hiDYFM3GtdzigUxynYo6BQrMyshvwy",
  "key1": "5TkSy3xZbtnjbFXGSBVEACAwQhGzFhgkNW3JXUsW18XiXSfHg48GuDWGDBMppa5TMcrdo7wDqEjecR7seCmZEECg",
  "key2": "ysLMGEGq9wGtYgCsTbfSPHWzHGNBAD3ExaNs7AeLkWTiwtyv3jtDjD6KjCNwznTUYcaeeoFFUMrFwUJus4yMCwq",
  "key3": "2A5StSr71HYw4keefG8mqrJx9uGyCCVjp5D3bcBuPoRwPW5mKYmnAdyxCLv8uQpdMsPEbXozK3LQZED8BZ3opgpu",
  "key4": "48fTr8FChKRXoreELktDxM9FcRw2Nd6xXByXewkrBcLNMri5gXoUVFKjiXWJ8rHNDM5wmMbwLVZsJXW1fpypViHh",
  "key5": "4EpnUe3WAEEZuphsk46HDkVBcFtJJY4wWkNRHehNGy31juGJiokeSimH35qxkA32wNnTLyGZFgEfLGakEdiFrmHS",
  "key6": "2odhdFsg5YawtEXuok9ccGYwfNksxER1GyKc1zz1WjixDA3wqNcXfBvhecCEvMgEiTFXEtNRc5L2fXCJZT9nHK6Y",
  "key7": "3Kf3PBRbQfSHev4uykJpYDLrCzyTmcWMakVchhtJXe1T1AbtJ3jcGyt29xn9cNobACEDinHpzA31zja8mUwMyM9B",
  "key8": "5fo93Ao2iJYJC1PKRPTbvXrxFvYJ6hPENnZk4ggYU1Vbsxt2dgbPSdCQ8NRYKYUEVdYtzSfFhro7zPUjeDjWGQxV",
  "key9": "3u6cY1BdujnRS2PaC9XsQU6sW2s8GB7Xp29YHX4yY9Ky3qG6YEtXEbJHYHM4rQX335WwoF48qCxUYNosV8S6dABK",
  "key10": "vn9M8VtBbDHvjTcuXRSs8qiH3ThgYXu2VbJR97ZzYw6toJGHGmWcYN7qhwEuqHFe7euB7ckBhAh8Q6hFD2GVy96",
  "key11": "5EBSSXYqb1RgPtg86UmwpD9241JTi2nFvLWpAbr5kmcKt7Lj4duVhZ4C59DnKSnxGJHpDhduxLEStp1sWVz9G6Rx",
  "key12": "o87icv9scxGzhpNNrqS7dimGeYJcEqJfXtz3p5PmycEfRrzCvByLq2tGMuTS44qhcFvxsrsTaMFqX1c2GHTDkHE",
  "key13": "CJyvQQU9XUDKLnisNDt8CL9KaQ1ubRtktAx2U5pb36FH6LaX8FkHrjeAdTHP2Hm3FdtbKboutSbAL5rri4AmrLn",
  "key14": "ty9gQbZ5UC3z7DNnvvuK1HnmbiiYrafXfhhoFsQJApuoBNKWLauhLoSfD8X3wyPbFT4GW1sWu8oJTyP61mW7Cpm",
  "key15": "3iMxA38yvJajoH4aVPkHRSWCNtfFT7Gf74NtJRzGj77uHPEhEXPNhm6GdjJDr5NtioNAY9CULPpTSqHLqScUTShf",
  "key16": "ae9trNiurVdHNwQX9nnYsawn3MRCKEgYyxQtK62jaW4cU9UaHmTPsJyK6FS6oqByZL3utjkxHwRehaZi86ePuJf",
  "key17": "SbEDeR635Kr5zWfVu5J6A1ytYB2YuHeXRZMWS2RTCFvmoW2Jp2eVDZdBLhzgBgpyzPYVfBWnVgrxww2aPJYueK3",
  "key18": "2F6M6sU51MEF1HUx5qWZTJyRxEvuNATsTeH1ngesa3cT68c6yt56NTz6var7MPiw7EYU8AkmG9MjeGck28YcQbDz",
  "key19": "2vCrASZGf7pPXBD7RPyQMQAEZ7674jAZPQjUysoLiRphk5VeqcinfTiaWNPCv1qSd8unwAzAEPHG18NN6nv1c8D6",
  "key20": "2ieyiSwgtqjywJJqt8WCFfjcHaAYceVkKALD47MGcAGRjMuYmtGM7U2fiQtv4uCizV1k5ZUjGHb97SmbkcKp4PUg",
  "key21": "2SrQqFE8u43ypsDghkByxb6CZffpthouxP6AvmuYfVn8nd3TQD7VccjZv6kibchMAVyjsfX2DoA3NuZsibxwLMYc",
  "key22": "5rHSfmNXecoEjqr9oLcRWDuAdPxZp9zfaFmMSUkr6aW3BMaGpHzP97A9CwxaJaZWdDGtaJsFsuvGWqT7qhyiUUz3",
  "key23": "5fy9ghGLfH2mnCwXPZTma8MrwhVYNdj1Mkmy8RXf3hUbrJzuohMP5sYL31b48Z59noJcKa7TEu2FCYtSiRw3jtFJ",
  "key24": "5kigTW5eaaSCZsgBk3rjs8xMnxSr56Fig3vLxifBFo7GHppCsgczPgUvDCNaYJ28dtzzpo6kobbNTdmScW1rPnDo",
  "key25": "4JBp4VXnUxdbhM62S14TRHNUz925ZPbvaTUi7tPs7guuop2XfZKum5UGmYfUcLufMJqx6z6rDL9nokhZRRS4gCWU",
  "key26": "2guteAN9HzMbppJtuQWRQn8sncKyz72QHGnTrqQZap8nyX7fsNBeWGF797FhCmKx6LtdxY2DFBaxA892zK96rqfm",
  "key27": "4HdA7RDBohWx5TCdiRyGTsjR3K2k9bmqb28sHaPgygDC6uoNQvAfTdSMNKLZmi8wvx7DQzKe4c47PpE1N7HQgqZZ",
  "key28": "w668bdqdAg7fgmdDRCgf88Gk11QMKumKsBgn8yj9vfkVNUw1PwEoLDrxsRgWWf96zKBbc9NyTWrxwS9Sg2E1PNJ",
  "key29": "4XCtWiXwdPYdFi8ASp44qtpBspnM7FyK441jfvTPhTUhbyDLLXfWzi6rxaTGc3EXgg7RBDKoshLs3KDFZPgWHL7r",
  "key30": "5mfQqGE9sSGBEWPKu2HKJDVsTT5UsGKTXUDYt9v5NiJBjLDDeVtDYwZkk1749SqGjDh1E8Qc8mRNRDHiQN7LRjmr",
  "key31": "66LhFmXh8WzUx5eS6R5MMd9Nmk6LDeiHoFCovVLuTZKtAAtDztGpTkiiJwKi7LVtSYsgmVZR2c3wgQarKf2ApVz7",
  "key32": "4ihuvuKmnrTDpLoSEECgwNuragzSqTV9sEqF1RCXJ13suHWLFYWr1HpxsKuXyPxiL7wwhBKBdo47MXhco3teZ4Y4",
  "key33": "2oBnzEEt6eHXzSfW3FypCsxQMJGoc17yTR3mNMPpEqoKd2zyFdVfyxRETWYsm9brMpkn7LdMidhvEntN2fA6vE1i",
  "key34": "34vuvfDoukfeqRQfT7FPyoTyJVSFfD1FL8U6PA7esCKi64Bny9eW1wSAQntvJbuk8yobyhkzNWMhSJFd7MxtaoZG",
  "key35": "4wcbQZEge82642wgJ6JuyXiSafvK8kVGyy7wvkhvLA5giskEcijLJ1RgpLnkRehYJVj91wMYc7aG6nVTYzwXaWwi",
  "key36": "5s2hdHRTRpD9BKvvFwPAEP3oqUUuqnXAaRuY1GXLC2M8E3mJ9JYJrx1dgJmsycUwwUdfDnLanq8D6D1bpkG9LQVC",
  "key37": "9791PkiTyfh1rYss6BaTdf1BkNhNZc3xnoWnp4tAiGbMMLbTB6w9G681o2owKzDYsRSDDpUYB4xzKDKCUpzWX81",
  "key38": "36ygfLYQXei9BD9ewy1aPPSMBiAmNQr3U9yvMTY6QEsPppicMfi9UuwZoArAJ6XpHAfDmXg5aw1eu6FyA2gDN2dC"
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
