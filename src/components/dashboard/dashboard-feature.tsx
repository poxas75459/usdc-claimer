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
    "5QV6bXx4sYUjFkD1Pnz49of9QsmbFccUgPCH2ECjiWZ8YGSv2VXuN257E66XZrgP81D2ikWvV3NyH23LV8C4nzC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rovYyVb24sFDebSsrQDJv481c1DKtFDadBRsNLTMTvNUiiAdAG8a1sL8NfNMA9a5qQvd1EGeJnCv3i75pHJqxpM",
  "key1": "3Xpv13pfB4pmYFFiQQtyYobrZR3E1hw8o29byEKqqo54f77fXY9w8UsyAi9PSFyoqqoPvBTpCSUrxyDF4eJxY17n",
  "key2": "3mDdB58Byc4yKBDEv92i7AyRgffK82qDtvfpjyMCWevFuKBPpomuZJTZPY5oQRvQzyj2zY93Pb4kSDtKBQofQEDw",
  "key3": "DU8dbLWbGfaeEfen3cxhVAZ5m9xchxKawQ5vsWTZRaZFGUFxYSWDExV6mw4qa9uSqTBM4f6Fmyeq5L5fiohB5Ra",
  "key4": "2FceqN2g4jZnrmFkquDtDSxnx5dhYcR4cwYB2KMHeQkwiDx8qco1d8ssdgzU2XvnHgbBfyBzYRjkULAXtoTJXFkV",
  "key5": "3p3nR2BHPENZQRW3VUxV2WYXnmVDuyxATgrwjFJT7Ew8vcPc6cVSrgXVLJXbDcMPKooFjt8MevKCCfdkp257dprY",
  "key6": "5PLW4o2aXCKuxsMuWEErr4rzcuCsLr3Skgd6T7hwArRFwRuvFfoF7BaPwRECnGGzRjfPna8ZRaVUSpQUqd14drwY",
  "key7": "UQgK3npfgpg1Kn5x2JLQh1AZyNUUdYC8AXTG6BVyRApBWmDUgKsENfvDREB1W2Ffr4cQrWvVFj6A7fyQwiyDWMr",
  "key8": "3F89JNWaU57CQcXuWxPb9WnRYhYBZjN6m5qvMkaANmSiWEXrT5jzG6h61NHWJHNZ2nYmdwtoCDN7ZSqL8ZftbAKw",
  "key9": "2Zy6ucEo7CiNfRvdxCFnSJ35DZsuDEyqwsmFh1JiDH7a44mp3w153FXw5j1PnfrgL9NabK7pFruvAnetHc4z4sRv",
  "key10": "4hh4kB6vsU1nvN3jvZxyT7ShDZHbv39nTqzUCpeDy2AibPsXyiKiBJKqPCskg4RJ22GgXKGCkQ1TNwLT8C3TUYUC",
  "key11": "5vy6N34KuW9qxoX5BQQL9P6J6aBf3rxNB72LJj8QZwTMT9tdXMdMYHQ3MhkV511CvC3BG8Kn5SQbP68onGYWgwfX",
  "key12": "48Gwjs3q9Wa2a3isj94irEq4XgvK2Je2ijm9ihkXi5aZM4FY3uyATdXCypXjkQKFKQapM8EopNZJUHRc3SkLd3B5",
  "key13": "2Ycr6ZSqXSMXe9QzWdiYBzmwrtuGuVbLacCQYWZuesJNEhFre4nSZthpnzU8FYDJcDVqv2UeXXSdUWYJRbWx2xAd",
  "key14": "3m8CjSBoHJWPw4n7QfGDX4hZWdV5N1thgwC9n7CcGXGbSMtsZAcDw6V7uSqBiSyTELtRvvaxZBrUEKdM9pZpSmER",
  "key15": "3VHMJLtpwXDMvwBzECy4kB1wQN55nneiDwGeGFkA8kar6k2dLnmaXHvz22RTunntFev4tVx6yrwmie5Y7RfETbRL",
  "key16": "RnC7cJFWGbqjQQhdeW45uXpXTG55qnMfE6Q9cQBrCNaL6xLz12fpx9uYq146SjE21xsqMZHt753ozcfZGqJKXrc",
  "key17": "3VETGtUS62RYrMxC1YkTECd8TUCpJbao7LrSvAumzNxqy9zBn4YstLkAyJiGWy8PN4TZEQtS2Wqqmt4bC5MXa1r6",
  "key18": "BX7ooUFgXXQfE7qvBL7XCBMXZnQc4NG5L5WQrtcAzEoy7WSkFEbTMrMPxtcNXWAJT3LWjRCxfNU3Hpyw9J4axLz",
  "key19": "2RCDaBSkaWYZGh3MN45Sq9qz2RiXUhhMEDUVLW84zcTLKyMKD6RqakmXGocQWiTa1UxcdckYhpLG7ZPD3dTsCZkT",
  "key20": "3iXNGLmi2gsznjBf1BE9knHZrHttMGE1Lf9Ej8SzJVwJkDx4LJKCtJeKnNFHahZ3Mc9d2gG3wZZ4c9vjDPDDJz8m",
  "key21": "xeoYhsghjuwFMPDMLmyu2feC1N4nRhDMx4htpehKp3GLA65MVAGTvRCHZd9VVX8Z8ky2ZVbjc5MaECMTAFe2WUm",
  "key22": "S8rVCTpHfMpx2kZ5DPfCYYvoHWjL3nxBtMtUvx1qc2MxXo6mZt6Mvm7YoURManXSxfvP4dCG8Eb97RcyJmU27Ys",
  "key23": "51sBjRefFXQVsJH7Vm4pSmTr8NUj8tq4RWjAdQYW5DESbpfjPGfTnJ3icRFec6SjjKLMLZsByZ4erPrGA8GL3q4x",
  "key24": "2xrsSYAHdBTuaEvS8UTNhqeidDp1RyboDZAsHBZhDuL3QkFN3xBsqV1gW8ZJpYKrzDnw8WEU6eHaxhPTiJruiuPk",
  "key25": "5msb91tv93qYdMUEBUouiz5S8sbd99ZsyXbNMAfNXw5cWFcEyLt4Um1Y5qnPpAo7GtQRv2tv388ERfnSM6VYJnVk",
  "key26": "5wecSuYzz45VDirXAhQx9xNyT1tsGnRYuecTBAu2nNfmNReYNjYFX92JvVEVatAHFqvsapaNUNua83L3u3DoJfzq",
  "key27": "odKY4UezzCWEf2YB3zdrrtWhYkQH2FbeTn8jgkBmdFVbUXDVBHZJinEr1b3VcG3LyH2fKd6yVUvL4M1eRWyh2PR",
  "key28": "4mXSgscesRTLQ543sdL3eLRzz363dpqkaiZQ4Pw4KeJZ4WLdUyCr2pMBDjVBy8BVGRRdo5LcmAAtr1Ep4yVccCxW",
  "key29": "2kfC1NN2gRdAsH7hRZjDWMJabpjeWEJT7cNkS4quU6CLQP6WVGZ4RYk24xnCKCsc4i1nxjPkhSgLrP5sbhUsJ3Ee",
  "key30": "55iZfjUMXWxc4Dde9d6HgAEih8GtsYTKChCWxsRiiJCHHbejVZ548JuQDRBEhZUB79EWvnbvd3tJRfDcMm5aYzS6",
  "key31": "5snfoyc6sqCpEmr3thnfDNg856xTtrJvTaRB2nU8iqKkmH7Y5RjyHTvsTA6DNasj92upavaNVEd8odBdfB18iV8j",
  "key32": "4DqDkmQmL7MhXYP8m2jk3jYSLVyMtoWi2yn4qf8NgQCmSWGcqiUaDGeWaDTFRWvtsG2qTXdajxorw8F326RaqnBt",
  "key33": "3NV2iuAoydRix5TvhPaLq2bBb2pBvqC4DHHkTXhCCSZQuhP9ntsuMje1kgJLnS2CQBCVcNJXtoToz2PXfwM4pN9Q",
  "key34": "4t47CBc6w8a6VpyZbr25sZEU9ueBTVbDdiY6FRMwyGaqhS2afoJRS986DQWhKTnHnEoyXYfHa2dmdHXkmZ1NdrJ6",
  "key35": "3VvP5DyPLh3NQFe5fvMXrova4k3sE66vkEcebhjPb8SKBEcAbaCjXFDybNoZxj1cdVgp7VPNKeZ8FjgLmboYUxm1",
  "key36": "Rvpg2pcA3AJVRaRLpfVB2gq8W3V3eZN2Mch8ZKWBtbYmrJXeZt8fYcUYdmG3cgKP6K3hXidmndkvYeKgoQAky6V",
  "key37": "HEF1RRQWRkExGAfKAgwnfW3hMcMnShib8brqzaWBGKv815SyikDuMmAmLpZSHpf7ttb2kPUyNtDpxgb2ngm4Rfp",
  "key38": "z6Nm6Fz3Xc4h5yTYFJhiuCQ2R5DUs2cjMhbxkvhrDYcYLKTB6H71xBRxtPfi8ZdQ7ZzQfspZ8pUkq2yaiLtmCYH",
  "key39": "25R6puGVeyqFgzNKvj9V22dgYNike3RzyqfaNQQSncRWYH4mSBzMWJHwQcstUthraFegZe7Gsb87WU1cVwuhY2AY",
  "key40": "4M7AHbuipxfZEoggUA7sxhdYfionM57GJrL2feMQWs1DJooYnSLRkSiSis7dt3c1MXTwnQieYkCeKgvzkTu1hRrJ",
  "key41": "KueJYXDeYtQWjPxqE5DMUhZ548ygQvSGYMjfGuDVwpUHzG7yX2Nwm2RpFXToaAnAnfBzjGWYcehiZQhfsM9fWAX",
  "key42": "5nhrX7KrPUgjrG3usb23bi74EqJyXhRhY1j2DxTk9NGKG9YhhfmpekC8FArsVLub5PfEx66jSDAUW9fZPrTPr7EZ",
  "key43": "a1kAyVQwxS4SZUXKVyZgpCukSkcj1LWcHF2coSwFoSzQAnjKRTb58fBmDg8yEDH9n4HUJQu6tFoLdACWVQKVF41"
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
