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
    "3B8YzSd7JfasZBKkk44pRrLLkk4BrbNgCAKafiopH6WxHhuDTT6GApwBV5sUmoXmS4yYonB5bctey8u2gCsocVeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53mCzLFuB6zE6csVsp9B8PzNEXVEvizUzwBvisaVKoyWgTJvZDoX7NRqrCta1hZbhvAfK3fBG7wP8fd7LndP6kzM",
  "key1": "5UJc4yfBFmzDa8KEbvQn9U3Z6tZQCKEzx5h1XyjRqhEZSQN2EVzhhtBfUMiP693nnyDKgnbTAs8X6TR5NAxv4cDr",
  "key2": "4NNrkBSwEU4SKKmW9G1oUSLDTysPAyv98j6b7fNYmBFUx8d3ZwUsu7dPQF3JGF7TqXb12AfTd7EUFhbb2VfdL4H6",
  "key3": "37MTFu3LrSjqcmrEDufHgP6dChafyGqpPNAJn6VxVw1nDNXn48RhwHXLD4YzjpR2GLvhHY6VjosAXrwhkgi1FEou",
  "key4": "4Ka2HsXvkJfY91enRSa5bkEbbanVtnV1tFYaritEvywaU5iBYKamyFR3RFfoYeaG3g4irZVddUWTLyuGEqMec2ZP",
  "key5": "5AwWmTiyx9Ly7M6NhDzYvPq6NxUMobCcGmroLjzAa71YYnKncFnaaPd9LSufSc7nkCiJKtLTF6F663LetPxA28Kx",
  "key6": "X6SyHaEQZodjTVcFSL82j3dXFu19CL2at5x9ELRM9HocLskFx5wyTHcogvDUkYNwa5KpQUjyma8UY4k7vRkTBa2",
  "key7": "yv6gKg2RoTXs27fqqpQLeEU7dGesrh4a7JuySusBSNGMifrGxNzRTU5yv4Gd44eFBfMt993QpMBoHRayiFXctN9",
  "key8": "QwGFBY53J6uuwLWxcuFrwyP9xNqyVruc46M4MhiXjqq6dqy6fTU8TqkuWFJoExSJV3dDZjDJxFJXZ8esQVk2JJY",
  "key9": "3GyzZtGo63wVGhJEzw5PWxMR88Vu1njCqLRSgmWw5hYn6HN2B21QhkifVr2aTFEMDbBkZZJCEKXHYmjusSPHwpC9",
  "key10": "3BfBuWtSFasSGTf75igZFX2QR2u7drgp1t1izrLhe6Sgn2SB485bi8yoJ7LznaD8szcSpr9wJF6HkPMZkXuUtTSb",
  "key11": "4Qc4b1cyjncYcT9u5KWcv3KFWz1z4UPmUE4rLa1eyN8EqqkBc8LC73B5gyoHC8M6EfhQQNrQMjwxFA6hkVMbrX26",
  "key12": "VJZdRSYDVQDvGFn2mHM5eoqzbrdq34mC8yiV3kVs4mrKYmkz7H3JkdHTgMwtfzUB3irKao9wuH6F74bFrp5JSch",
  "key13": "36NPpq4RcrQznaYBmH8Rm1X5Lrk5jwhjg6Ao4SevQ5zUjxtoctpjskh9sJin3TCJ3TAGh4YxnzrByDftRFyg4Xtf",
  "key14": "cUMbYBSTHamu3oJuhLVqSLNQsv3nkwvbb7CoUuuTGykWcnAYNa4HKSu6txmxDsHVFg56UV97hVYD36Ayia7rG5z",
  "key15": "5XuL7tQZmm8fEoAMDkKFtcjVzAoHLokheqZ8VVSpVR5ZMW9tiPMxXWxRnhBGd4dUcQgHkMbGvX1BeeSoBHJp21u",
  "key16": "4caX1d75MTo3r74UsJaW8uY7YyrzvuEdqmpZ1pRvoa4uJ9NEgSAQZeN9uuRh194PBLEtVXYb4B7CiN8swJfhqu1R",
  "key17": "5voAqWtBWXW1cDMv2LR1FAFv7YVvmXGLqtAzeHpsVNN6iwtaaxuC1M1hd5Uy2JfvM2AwqtGz7CTCWdjMfYgyjbL7",
  "key18": "298suPoJ7zcxCcpKEBcet5bmtbYxgVFJ1XNLMU1oWVcDMVJSNoWCXj9ySWUpidFUrrr6yx5AqtMhoZzo643Bj7Sw",
  "key19": "4PXhfbLgdxVqL3FvVq1Qd67FD3K7jDzWvqdn4decfhuYY1vsBMTQT6kHCfhobyZFNrz23yKR6UC6Thsm8A6cWRQS",
  "key20": "4J3jNSw9rCVhbT67ZCcSdnqTtwaWd88RtF8t2S6GgQ7fTYLr3sm4TMGGgtNpTUrNG62hbz5jFvJ4JErzw1A5pxoF",
  "key21": "585k1tqBzu4QSpRGj8Fekuf7GMpz6gNNhShyUVVafLLjBNEuUaakkgUpYgC86xmnvUPhia6HYrNViZJMusDQiH8T",
  "key22": "5zBVYtahCFQJZgJjZxMvGYfvaoDpKCEvjTdop3fZZnmoZs94JqSYuYmfXj4NsZmaz3PjVwRVGNvWREuyPrdWQuWy",
  "key23": "aRQmeAvgBezNBFijajUJNLpHXh7cCFq9NkVrudTebQesVqqYNCQTF5YJhsgQRMo5brWitjTUKBvgp9APY119Fye",
  "key24": "2tXRDto4NrFj4W3K13FpF2b9dapRm8Lh3N5UWGy3f6VCdCejS8sY6xMAuJnNeX3BDBfoPGd2MnFMjCiKR4tUTMmt",
  "key25": "bah4QwBTSursxiQ4ruLRE4Akt7ZibzJTcEQjEmKaA9ZpiDPC4F5PEN7A6qDP3LkaWV9Ahg275tiAPy1HNHiM6FN",
  "key26": "5byiuPQ6z7LS1cCheBkPyxkvjcsQxNHsoir4WZw7RdvTYhH6GQz9Z5sqfZK8e9SWBGjqjXS4aTXyhKtrKtyuBoZz",
  "key27": "uGmN3m1Bt9NrfLc271FRkvSnYq3QqaDAQfC3jcMGUFY8NE3ho2wcs7CzLfbPrb1P7LESShSVeNz5pm54CqtZ3GL",
  "key28": "21KfWur1hccdWDjgdmAzcXvdg5Woa95Y5FiP6kain6sGCRKtYtdoQxy5fJn8ARz99TUckzTnSqoxWXM92MGWVoPD",
  "key29": "463DFQF4nYz2YDwjMna2cXohPwDMzXiTEa7pq3ztoujmaGSdwkXrJnFuoeb6PZmiLThL7oKY6gDa6epkCgyQ8ua5",
  "key30": "2yBE9KootBhQn4YSNPJD8hVwGG94fRXDwkeqEG7zo6yetcMfLvuyTv89PRb8kxH4fPppr1KScYnwRtGs4BbrtGcK",
  "key31": "3KChYjQGrbDWZSNGfkLKjd2LY635UJy97YxqRsRc42vjUwmDaCDnzrWUmLHd69yJpQChfofRhBiiVdGa9PN7myJ4",
  "key32": "9BRMiEjSpsqpmSgLZFKcKZtF2PhUHaShyH1fJZkr1ZWQ6n2L8dYXsfuLp2RRqh98p7gusNkVS5fpHqo6228rjQr",
  "key33": "4BDsv4Mq12QRnTP8AhksSjEXFu2QcZM8gFEYxRACYy2ykiX4XQfT9oEzSHsEkmWhv6qrfXEcTCahwpXveFrL8mVH"
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
