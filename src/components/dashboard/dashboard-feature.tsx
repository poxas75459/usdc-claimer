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
    "5w1gcSEqnTZcrWpvM5tU7MDuNQsm62aXiY8megSfhY1wgunb6iTsCg6pJmj644ay5J1Vc9aenPnqbpedbBD67zTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Ao8tztpWGW8GSH5M1x5voWGkDFacqikQwtxi33JJMfuac3AbjCAYrjEnYB2NoHhizzd73nnkKjZj3ZAr8D5vcE",
  "key1": "3h2FmB2opJseeNKWQ84NgNsWubWNaH1SgEqBFzDcRLXnXXzCnc42NbQFX91v7KnyMTxXydZBrcBuQBEL2MaRu78w",
  "key2": "2igfJD4wnrJPNvq8cCfFB7CqktgauKtqXBCAKnxfzrgAU1BCoj4yUEJEiQxiJAbn3tKVhQDDUukgoRPCUhvgUmMJ",
  "key3": "3XpWsekx6Gafi96tKv84BpuSDReJJ4kuPh1wnR536m2oJjSePA7EYg2mpUw2BFTsVL6uFMTKmkA8xZCWBoBxe9eE",
  "key4": "2AirR4tzfFssCZoMurxvivEh4seHWn2bBR9zJ78hbM3A6TNRGA5XukHYb97vX61t9EN3jqgAwfVGfAMCSUZKLYbB",
  "key5": "5hG7Upu6LBeRMW7GCy8VVSCQumAks3sH48XFr6S36ZTeFryibJiGZMA5jYV768Ey3brqme5stF3ZgUPcjGbPRNa2",
  "key6": "53J8Uw1GPSfKoRSufobPdC9g5bWDHKdUqRoYZsbq83kCwMWmsh5xc5ArNc1XAwuTHVuGCtVtCaT2XzNaMXTMRYoY",
  "key7": "5KYxyWPxvxNRVxVya4cgQgJgdGMWLMNr6cLyXsTKTMuwpVWm7ebugeQik2igc3LDCfYkrXKL2mFdjoZ8AFfSSk53",
  "key8": "3jkm7ogq9jw5B4E57vYhQf4Fjq4mWKATseLaGjt4u19Yaf4eJAkihmVeU5yGg1WSa6KVx3Q3ubjJkwv9uaM9cnHh",
  "key9": "4Zp5d2QjCaAncpcD7pYiVdWh1W42H9kvak6ovnPWRM5DvDK4wPMqXvomqSrEKrLw37UDFJVxppX4ge9gSNaQv5j7",
  "key10": "UdjEhMQT4qzTEDoh781xCiDYmRwWMdM8NnwpnDtkMetmtXAWiRforsurkWAtuVZkNpgA4MKVQWX1FVeRExMnpt3",
  "key11": "CEFFos8qGWx1Zm9KK9d5ufjaeYpH6ssAckRfLReddjSLZZwGBXvHyefW8wjvZHQ2doCdfnyA54fvUALf7UoFpDD",
  "key12": "3HLfn7Xki735Bjg86GW58obeu7b57XsRSjeeBbhVvgk8GXtNqm9bRuHrcJFaUZHEQZBtD8jSJou6wEWow7RKV2r8",
  "key13": "3tpzN1wU18YjczCMEYd8sjwRHCshGrCtg2BMA73UdRLGsRVRvdYr81cwP7PnNysiMJ1XiEJaB2XW7ixtDuEcXBnZ",
  "key14": "3WTFzUb6STbnPCdCVkuPqcC7TtDAPLMtnXwW5z8Dt1hgVUfE8Z35CL5fdY5jibwuvR45vCtGFiZxw9sLsZK21VBL",
  "key15": "55EdWAE2D6qLJMFbbiThpe6LVESBtRoznxp1KCuM8s7M3YwxyptJAM5e5LTXErFgRWBpGgVJYfxoc1ApzCKtqXuL",
  "key16": "2ozaa9J8iqsM8aYqm1sDTW3pXcwYCJBWbZnLqDr1rBrtZxBbw7p7mNHgRSYSa6ToQ8nfjouRfp4EKhU352xKaFYR",
  "key17": "3T6jxB5tuxVFBUkoDhv2S4N5GaeT2xeem4nbffxAdrk1iioaBufhnQ3WyyHFGB6wdAdw37oXn9qHtXnye4V9Y9Z6",
  "key18": "31eGLigfKZ4SVVfhb6TWCsWLqgmVCZMb3oyZCzxAyPK98Q5tXkrmTCMf8j4Vx9QXhAgASadQuaT5FXLkUwu9xo6L",
  "key19": "hvbgQs4QkmSTgKTi1SgWapA7fLKghu9PUWp1783YmRgDm4z39xoSKpb6Ke16B11DoXxJQ5JAo78yLbSWxwAx4zd",
  "key20": "4Wea6JHKJPhKahZJTLNv3ozWf1yDrJwQbeifMmMG3KfAtZtYnhogYZ4Rz7mLXNdydRYS137FiYLYuDDHNfz2ndxD",
  "key21": "2ujaBD9HxyXWWHamHMtS4kHhXZ3PkCngQ6n2HGLdZPdmnATW1ZVg1PkWfYivLKbaoc2BASz4UYX3jWjbjwHGfpFz",
  "key22": "x4nqQTFkedXSUutkgSwsuoFHNzHnLZCamq87ZrJes264838vYrB5Rp6M9pZfTEUMyfh3MbjKSyy5LGqVYixMXHi",
  "key23": "RV2csQ42iZAsxiWHrxEvRitA4CN65kpjfvxJH62cZVfznZLhsxc3dDAKdePnMkSq5HuhJTyycsvVvvhRzi9Zxcq",
  "key24": "5Y1fxbtkyuwjkkdhjrHNJ9pJmAFf5XGFnpBU4emd65vqpf64E9ZMeqFi4XmGXg1LQuuDdUCFhPTBLzfTyDmWVwaR",
  "key25": "3pmVzYEjYHHagKwQh8wggJpwdTp1t9qkVMHsPWnNoEqkTsnabHograkHeKDK3xnLhkQwM1KZyVqVs1mADc5t3xus",
  "key26": "B4J8zbGxxKAd2oQwVNjdWEbM9pwMPGvkAug2bvEK5YUjVHYcZqB3bgZxw4fuP1YdFbpcRo9Moi4tXwsf3fy9kEF",
  "key27": "3wViuC3AP51BXfdVNhqqmw1Xm7MrN8WXNgaSj1Jii2WQZxDcrXXyCr1S6FfvUMFThFKuBAF83bEbh7AkGVqEBJMr",
  "key28": "3SheH7mLGxxuZgiDG2bUogagzy4DBPr3B1PxTHBUC88kaFP5SLnkWVUihh643KFcQxgHjro31tra9cVGYaB5HwmF",
  "key29": "4VQKzZdqsXuMotfxLQHhG2v4VL4fVxwTYDETVsEjeX97NsWTv5Up6Puj8agVFNsvd89PTAJBxuCd6xD1Q73abpez",
  "key30": "fz95MdbXZr9EHUo9gajqN7Bu89aoLS6Ve9HWEadHq4FJ6HA4UC8sQUSTYXRAaXkmjiiNqs5wwjjuiyPCjG2TxMB",
  "key31": "3WK6zLYkbS4J9x8zSp9vcvoffjiTY8nVnyKWd1f2xmpDEK4mSegUuYcCdMwSVL3Waw2c5ogA7iexrv2wxT2WL5kc",
  "key32": "4QvcdYGdP4sbio9GCcwH5K55bn2Yo8CvpJE7sZmfgiMWif3ZNUHqwXquqXm6btu33z7VQafMcj4rtdm87cZGJdyb",
  "key33": "4B84cVXkW4RtvMGTBvjzFrQn5UAidaV3W6sASebrgxA2XsUd58DUc2XS2mPrfy7r4SPefkgoJAqBAeFPohMVJxEW",
  "key34": "67nkGkkRSoye2rhUjE8BiGe8j2D1ssNBr6eJ2AjY2D9g9ZN66U2AVnf5vohAvrJmzL7KimsYZwyZVPjp9qWtuihX",
  "key35": "3BALqCER2ENka3U1UdGGwiVVoz8kSjXYRf3Xk9q4uJ5W78sKhTQxD5cb8MLh2FM7HDJ7W9DUWMuK9tUQLttyTssr",
  "key36": "51dQhm6gptxyqJfzyXVkXKY9aWQUadsD13JL18xuP1ncyru3msnfwBXkwxTmHyidoeP7pH6pMLJExju9LqEh9DkV",
  "key37": "3SauTqQD1a8xdXxnCVsFnEVG1hvLN7Maif35mjzjYPyXtTeXhRT7WSmiNi3G9DpZMShrqvke2NRn7ctii3FwMyJB",
  "key38": "VNYJXpf4yxcGxfYsjVz7Ciy5EBpg5R4JjbGCGouWrRQH8Hu6zyoFXXbJiRjNqJ562WDGQYPAQ2HgPKPT3r267yt"
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
