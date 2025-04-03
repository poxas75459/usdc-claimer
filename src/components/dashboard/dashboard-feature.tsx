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
    "4dXt99iMnrSPv7fUV4aupZSQypyH2jZ6BjzymPPx11qBFA2aHA7bBTNL7SXpA2NA4x2xxWomctmAeHg92sD8uFNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RRGaXhv5AdvVBE3BEuLsB25P9ZiVCeXqhqaRt7YavCmptcUk5h8ChxGGHDrN4VVBFpPbCoxncQpF12wbVDxxWv5",
  "key1": "31X7MNHcBPWnYjWmeK24p3w22GcmUtu31kq7d81bdmCcmz5PFmgCm5aBEEMfKGJziMrNSjGMBaKc7nD2VC3mHMFK",
  "key2": "2zHSpFL5At2B1BtxMdJoRCXorhZbzsLDwcn41Z7unszedGrtwiHvAp5DaA7LjMc5gbR4FdMaZTRU64GdVoNbL9Gt",
  "key3": "4nuHajyxbX4U7azNeZcYNGbaaHXnrbjBztdq6MpaqdobHeKrGHFSW1bsjDU8bAdyktKSZmjoGkWeAqxdXuZNKWPr",
  "key4": "iD1qHCS82KZvhjPS4p6mE7PTXguNmPgyrDqk2NzKEmnh6uoqNJZSV6R4brT53EwMqpEGJmmUc4GbWYXurhjB9Eg",
  "key5": "3Q8egVDFid56gnhpL35FKzM3V5zCREtrsthpERUFRp689owgk6nbeX9Q7umdKpHCwXc5UaTZPxs3v5tLJtVeG6hn",
  "key6": "4EYUw95BrY3DQnkiEP15zu5HSiEfb6mxNtzY9BrTwxpb8JNdxnVDU4q85pQBe4Thh7h5iNzob7NZoaxHmNdBY1c8",
  "key7": "3vivDfiM9cFK291QzQmk4vYXToDexH8UCKfST34MaiCLjGKZL76n7tjrQLNZ7M1Tk1M6FEpJ566JSCyzAxeBWus3",
  "key8": "3oqMYEy4fipNtnwJyyLBDhBPMjt3NM6c8sNR9HaLVfLM3XHcrSPPQ3wBJruKRFHSqF4waiuJcBK5eLz3vR8FhY2f",
  "key9": "2CSBdaP13MSaN4wsYZBzCxWiSaDno3uM9V4R3xYSpdXVcKRiFDM6gcPmcGfkyzTMbRUJ3hh7bg1Pb6bWwKhw4Xsc",
  "key10": "3WTqS1m2vsHRU5h5BCPVGV6EvayG6NU44g4zZu2khYS5At7vtKKPvPLoBw41M6TfTAYtN1U57w8TACuFnBgwpmkX",
  "key11": "41x4LtCYU1U9WNHLQzUGJNWG6ky3teAJcweb1LNyaL2hLgWcUywuKQ1e5uuiMbghu4SVSfZiiFb27DXqfZCEduEc",
  "key12": "CkrdW4JUJFZVnmVnyzNT1nGw8HCmboWyuf8GGBZzjGcCADj2WZGkU9ZvakQXTU54nnDc2JLDcVdud5oXMeiDNJ9",
  "key13": "2q7VnZvrcDuxfbsHRchx4HNQvrkqPMR8Sk8jY2Un1V56tm6GdXe3KzrvjE9MJm9YVP8CJgCThwuWprgbcc3dezAa",
  "key14": "3TxNPcb5Jf7jhydmoDVmze7hUqppTkwUTyCxpTTgnNnbw3avsTmQqGpgpeqUxbjuo2iH21wht5eDvKi8HiRUWXq3",
  "key15": "49wSnGA7g1Ud1jJFChAwLE6CN6CZv13bV4dwnZPUydRCHABjXXSXsuBcjJqN8SZG3TaRbc9i1qQyQZjTGzSSAebP",
  "key16": "53Q8MVRD1aZZHGz84VZK1nkHBQ1zerP86BnLKQiA3yDzQshfqqtAcR6dFfV3mL8G8E4mYHnFGAhUysVkqG64iBk8",
  "key17": "51M3pyk5Ua2URdVtvGbpBBzefk3iUFeoJwmDvZSZZpyzJLjCPKwNJSoLLjbaUD5gdoUiYKB26ppHDCU6qvUzwFCX",
  "key18": "62E8FQTupGFLy9caKyv57igRVoXJGaJDvtRPW45gNUKQZoSuUAH9XjYeZUj1q6k23jpYi1jaZQCMi1nT4aUV4TZY",
  "key19": "4YGqZ8BxcKsTypJ7gyA6KKzs6vdLwVtX7GQLugF3mZd8wiAZpwrBcxWKU3AeV62fxfELZpTicVMt1YS5pqis1o6a",
  "key20": "2UBWx214EucsX3yQHJ5KJugMVWn231SXjwCa5d1dczejWjxPoDu98SXruoMXmHnkBWVgMTXk5RZhuyV25KUHvm2T",
  "key21": "53eMDaq2zG5vLeA6adG19QTxTN1XRrJ92fMxKWKPaZQo5osLwkfcaydYccGxPPsVm8oQEJe71M4fnvLfPVJjvs7R",
  "key22": "2ugWnDw7PyjnhVxwzjDC24NnMEuPqmQbb2ys1GTcUyvdBVGiE4ad9PKWeaLJXJGEJ9c51SJHtaC8tFVxHD34u4Sy",
  "key23": "4qpUKBHEPvsKzWddijHP1YCqeDJCH1Kf51nNV2XrwuYrJpVjZvwaXSq8ha82SctbEKHnP1ryFkQyQDgcErNiRgAQ",
  "key24": "418AJWzEDokSLKmbkney6UtihST5Wfu2KgMEjVHJuS2QCVmyAsa9LHqSTpL5Kfj4MkdXDVhLWrGS5Cb73yeLSSwe",
  "key25": "4jVoAvw51pWAhakyxkEFYpddGvkZyBuMT6tY4nmXqQPnGHBNtk5wh4mrxFGuCwS6w5rb6YyFL7bnNn9XewywmeRg",
  "key26": "23pFEPuEiUgiNvxSHAxbBBrDJrXmrvVa9oh8ks3446B4ABEoHeuMbFXyXr2giZmkydXHbBf8gNcagp8pvBGbcNQt",
  "key27": "5RVir88xJRB9dHubmkxWyGnxpVVF3JTvZd8JsRV5yY7jA4cmaCgct4EFDD4c8Q8h4jXrP6riVEF7T6VvortR5Wke",
  "key28": "U97fCtxjjLBubXa8fAF1WPrZGXiPmwHdphtTaQU5qQMsvUZ29PqrJVEktV5jueksGqSajDAJD7DLrv7V3FFnsmT",
  "key29": "3BVfxBo2mcrtxmWCP3gjbMdN2BncdANMKNXFRreAJ3DMmH3ydZL1pPub67qHTEw45CyR6pV8GYrXujTffBqetPjT",
  "key30": "52GWXqXZdwJ1WX1fAp5HMT4mf9v5hdpwMQyzTs4PuYMTKKXhXXiABvuxE38VvWVWENsLUKkvibiBdHB1tSVA2th6",
  "key31": "4USbtGbbkagEvSmfQmUKFX4NoKHr5NNiGspoZEkgtwtV1DXeFmS1Lj1SambDiJu7LMyZPPrCLjtimZera8uUF1X6",
  "key32": "41MsEPaQtAtczkY9q8hdKmMJ3SqF8ZmyXMYqpHEes4BnavSucafvQKXyyUwrxvM38CZvH1XofiWVW6zbGAKubgY9",
  "key33": "2nqT7wNRV4xVEKLu3DENGF5Qcp2dG9mmMWycR3cx51mLcPoV59CSHTCFycCtKH5kmhUCNtopTFWiH6vyBofXw83s",
  "key34": "66Z45iaJDeJFm98NySZiLyMWNyDEwLhVWGYE4o4vphrzD7s2Aw2khuE8GJzeQSnr67CwjYPnzGRvnMNtAv1Ya2F6",
  "key35": "KCMLhbrNKwSRQYmuThDMyU6XPseyKiJmVWJjaW5E8gqaAbUmXEpMZJAAyb8Ztoupeig3QMqoXCLEBDtbkQnecgg",
  "key36": "3gKZpNfxa13sX1GrwWLs8rr88RnFALo61EBg19sq9fC922vaKsba1n22bBNdLE5pfCZCJtdC7zAt7YVMaQogGcJw",
  "key37": "5PkDJRY5ZVpS4KsA4hdtP88yYzhTybgUg7scMNzALoWnE6s8hB6Nq8iogNoinujamHmDuYHTPxRfVhGcpk9bsg4Q",
  "key38": "2zCn9uA6m3ub7G68JaweRFeViBUVzyNzKSfoWuoJHezUdPJcqgjSajN7Fm4gisSU3FR7nRWAvm8ZoyZLCCHRiMME",
  "key39": "4mXs6ZmjUA7m8Zj1eEMcoVRMVkjSxgENqaMBA58K7x1VpcwN2cpRfz3AACogQLc29DuTQNCGNhm6e387QTPJU93w",
  "key40": "62Mx2RBSLAyEGwtEjzEAvgbEj6FSktuAWXBGJDRnds2SFC7ZTfPJd5LuurnhnsHXsJUUTWVreAbuLXEHMo3Zg6aq",
  "key41": "3aLiaj3GFGFAFbRjgovEQnW7RKMAaEkuE34LWjEbiqczBZ7qeYbWZJ2G7kwmxWAQ33jHSDsrysrTME7AJSPDY5cs",
  "key42": "3FnajySNhdu9rAKw35jm6Ewpk5HGiRZxzKDrDw5D8ReGAG4K4VhgpAaTpNmHXuVQp9D77YhywWs955327ku95BbF"
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
