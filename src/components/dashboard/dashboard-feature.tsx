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
    "1o8KDotqcXHWUEWooiVebPztCkEZAiirksYC53y3afjJXKFr9muFo8jQwdUcnWHLQjMhghJKpKUaFygb2U6AiTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i2FNcV5MVyKz72EW3RNe4saJQRGnPUoL6mL1ys21Qy2vJKjV6pp4gs1AmNw4rtmAzGeGTgaLH53ReZHTnTzYDu4",
  "key1": "2HaoiDo66UuzdbDCKRohubiH5m4CKMALA4FPPeoTtzZvq1kM9kTijmxZ5G13dkMx9tioemiH5xERj4dZE5eBdif8",
  "key2": "2foubysGS9gRwS1y9hgFPprygJdssGJ9RV4LNm7xDaZbLQptAfhGP6puvJrb3SRQL4y7MermYHhpUZPrLLZAGEJy",
  "key3": "4ebNYzoJdhAF4wsSVfapS1acsbhJUGxjaBxmQYP172GawmLBgtzhnm1xRK7kgz7y5hX79r1h9D9vnB7VSWGUw6ZW",
  "key4": "4Rc8t7bSoBZy5xHF46LgPTfAsJUi2TMcZshKvJmAEJNsRMST6CJhKqUkHG86iHgfRaLrFSU7pZBy6wzwhkGDe8ZH",
  "key5": "3PHjDYWkb8LzyAFKfwrmX7LrC3E9DAKH1SG91AgqgEnVhRnKLrVYDv6aePmEAMA8aqtGyz87SV2aeGy75s8J7uPv",
  "key6": "5nYQkrrzhAVRNGzi3UAVcAE1jUqmSVEB7nDk7mXRW5auKKZpwtrJgWSiGPZwCXcZFUuThHjYdtYAybU16qpAWk3V",
  "key7": "fDYiJGzUkvezmLoH38Zvzr3LmacqznTDwV3NPq7bDDLandufscrCidQhUHuka9qyXPPzcPTfZnfYmxwnBLtugMT",
  "key8": "3MfAihhz25ApYYhjY6PUf1wDrtcJdt85rzk94cDonHuWhVm946Jof9cvQLSTdQ1DBYL544gFoyXuDQWmMm88xb7e",
  "key9": "47Zh6w6hmM9Lb74jhyQYThDrBeMxVCwZ6FrPTMvCtTu9Qna6wsKztsbpwcEuvEVWbz9nUyxUktVEjSt8fV88YYat",
  "key10": "24WfH4yUZHfkJMJBqh6wrCgEW1wpCawSDuC136uzH9v3MpT3rLAtWguyfYCTWbTdhbeZETa1EHM1v5vkWwQ1NTKd",
  "key11": "4nm13GhQb97bFreQMruDB4KjeEA2wB57yxDY6ZVxmG1qa5TB7Ks4tnLtxqJrcx21dfbD2iowsSeEH2JN68KpHCas",
  "key12": "64fDULbfKK5X4xgehBbTyJojtsR3SEN81QaQUMEaSWdA6M9ygWobgJKXehuaU1iu6XEysuB6bRae4oeSEn7qwtZd",
  "key13": "2BvniSCboKzj7KmWHV34LgeqfusAzRxq1v1HG9pMuXFBsjShqkAWpJ3cvMxYd85fsrneMYzJZjb2NtJD4qpuYEZH",
  "key14": "8s7cHPzVTXqCPeoriz2QbMhK4xXUTnJ3GigaANLMULNSjWrGXoLrp3ZADKBEcdTmNAuLpcvD6A8Jt5nGWhkTHFg",
  "key15": "5QEFoT5xmxmTTR4z9h6kLnJzbp2qd1MWhmRtkj16DUPbBpKW26N1etUJNXA1Y4LYpvDV3aejKHKxBSbDtGRM4yzh",
  "key16": "3ZKjcqotCtoRudK4ynB4mAKSGFAD9LWBCsxCycFtPi4fpvTPawnFdZcqXRERUws3isU3SikV3uSEpgyusqDYvCh4",
  "key17": "4tQm8nAJwryUYiGTALzujg28hRmKyo2ERW9ys99ivMixkGeunbWVdJgbVbHe348t3aymW1QMFT79LbQW3EgLGBcZ",
  "key18": "4wTM233yQmfXDiCBsg4rHHXEksEGazK6sc6VBuv4h35EZgnBMrxm8toAdCgxtV3kdXgTTK2SMppkBB4QZNKvdTXj",
  "key19": "2ReGs1A2YGJ7J1onTpE4yF2U5xxEycqUAXJnKT6QcPVMUMqn9Zic91TRFxjhkQZzkhj5bJ1URhRQCLsP9qWACapX",
  "key20": "5DGXdhxVvpCoAmwktMGfGeo6jm5E5FugHqmV8hVDMvreC2grkPrSb9vTg5TnABQAZEyoyk7ZFi8L7rYAWtsuNm6K",
  "key21": "3vjEc7iLwvoBpixn2wpayvCfburLG3DBeoNRkVZ4GfDgWpwn7ZBGbBX3pEAUt6Jp1y6E44JmS1njLcS4uuLXdacQ",
  "key22": "3EcWjYCwHGV5xyjaHNe6VsKuAyoxkmvtnsoBCQyZTGiGhkhABFrqPSzfRYzLnzJjHgdEB8dU7ZDFiHo6uBeLGjof",
  "key23": "5oz4mAHxCUHWe2iK7oQ6ZnU6axduZ79QP9zffeCBrLxFwU66jzi9Yy8jaFBmNMv26DacdA8swseUGCeHqtPpPj16",
  "key24": "3EiVQRsooTYXZoiKaPxftVyjfy2HjS4mi6tHSNSBLoWrDyrKWPSuRG79rDpGXHv7RtnrMAee6bAxw4K2A5iXUxgv",
  "key25": "2uasLb6RasQisic6eS4j2MkUjt4yWph71TjtpSWPWkUB5vyoP7nJEA3RRK2Ee4bcenV7Rv9kPc7vsvktzXYxb6NP",
  "key26": "ww2AiucEQFB8rHi4VyLxesuyXHUUveoyGa5wnMqCTFDqtRM7s6WivxnYor9JDWKYDHq672mMKueH9b3NqJsheoB",
  "key27": "43VaR6FdJC2Ss657riFBdJC5QjpY8UnzeDJT3uSx7Udud7bvB2SDFU5JH7C2kCFuMfcBumza1oihyi57W9kBWfKu",
  "key28": "4kRasbkaUkn4jnHyq5G8WLcKHf7zPQwfbeXDqR8Du1pm8ebYrevHrLAxBx2LcDMN3jm7QvmLyhupRY7EKtt366S5",
  "key29": "5r7K22sqDw891wQnnZge3oEzRGjTujwpuoSyeEmB4gVem13jBbiG1AqtSQYbJnnkC4qNUbm7b6qSPqL5TZHDswoL",
  "key30": "3ns9mUNriVpj7eT1fXDmvwzA8mT1VUTRFjVj1eDQxvGZbixnKvDdQu9kCGspML9NiTpPddbAxKpJZbywg2iNXki8",
  "key31": "52NcwMtazp9rSMULvDGhK9vbHEHyPqpPdB1H2NGJ62SBJ71x2M87BQmuSDn1zEmRk9GvKp7yJ9765bjLyEB1ZoR5",
  "key32": "3hRXTbTJScJRgY5duv3t4E6ypjD1LyiuZmfbfgkzvnbEnpsXpTBqqtEk4fe5ZXrGmiZA2As7tckZtyHL5soqhzdA"
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
