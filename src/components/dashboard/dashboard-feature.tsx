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
    "67pgSEESWnAiUGB9yDyQSyXhE1puSL6bSoxobpWTvvaMeSaaFZYRXZc3qb5xQYxSVzieoSq2dWeeyMJYUXqmkj4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RGfm8fg7YGSkbUX61JX8z933VmCyzHKyNhcb88NWP11KZtwoo1dqiZiJZtuGm84FVoH3yn14b51cTbvvaU7h37q",
  "key1": "4fNDcCUC2XaQF12SbuqEQiBW2Q5uAGsxjNZgPqNvms3z75C3vnj2hLfjGwBJRtM6v6X7HviEZKyJoAaffrLsV7kK",
  "key2": "5yWgczvqsFenpBEyGKuuPgo653wuLnK3PKgrV2w2SWXE33Ked5xG9KoJr3MeEE3CkHkCceFCYdxQha8uRozYHQmW",
  "key3": "2JdgzkNvvhNrQxvd7cP9hdYhc3m1zcYHCr2iduVsu8451WVynyRvNeqdWicst5mTbYnmy3KthQvLegoCYnLJg4Zq",
  "key4": "4aUufcCaUqPKrmX23HevcxYEZaGeCoGprwWT3YTjwURzHQH5DpZU6Qxsb6bRJTXj6JqHGKo9GSumfxfZspvFcUHU",
  "key5": "5m1cBRhSs8FfAUvwGbJaR5ahqgSVGoxAmVLU55xz5nojF8CBxxRXsP3QEv4oqQQanMh6MWGaGFXTgNoodtFgEHjV",
  "key6": "2gFAU15ShAqaQhSq2YnihB6gLPs2sribmqYu5eRTHhSgvnetYxbcb933syDuftHdvYJoGADcfWFHABgvVRfnvf31",
  "key7": "49Wj6oF497PTFGyzjuePf42N2rSKKNZ9dgKs5Vfg5DjGDN2PwYrrM4g2ftSisf3QfwgvqnCYB7Y5umUTnqL2VCa1",
  "key8": "3yDbiKMh1DHWs43yhDkkjLK8jHXFRRJshotyDYLJ7BA4SaTrzRd9TMD7aTPApBaCP4NJrGLqQGWb7DHtfx2XhGoE",
  "key9": "428vfaBPQd4dT6JikPsJvfkFvcjQfQoZnQNWfUmEaAUrsCjitH7ehBEabcuXEZW7u9coD747Bv11UKHFdcgny3Ao",
  "key10": "3oDpSqvKUD33Lr1i7ZWvgdzdZXeCEVoJj16nFDSpit2ciXXLBYDmyd4WWXo7JRz4WkTNwYeQBybKm1XUAmwkmgg5",
  "key11": "HMYiHFAtTG8RBkJYJu3Ui6W4CpcE8w27NwQNdiWWRuQVNE2kmJd51LMoD29vj2mEphmf8eem9h5WSMCStf7hPTp",
  "key12": "2jEnRd9vXn8a6DxZ1C6U5kg7xP43qevprGrZctLjMNqfzu7ycx72E7X9BCqs1UFFinG3zEgBvruD4SpfmCSoenWH",
  "key13": "5xLXFPw2Grz8V1bHzBHtNDmBsBqdGo4tm5R7pRPeHKvY43Hs5WkviSLwFTqHwrVxLVyepAG3KFkqku1mdLVhrBmu",
  "key14": "SwHzpELnHMxT3yGEMTLVHsVDoWGrKgE8x4xKpUSducHMFkrup2e9kcfR3tovBYXUsdb3X68nVzLzpqePZzb6zwW",
  "key15": "26kYWSYgf56LHS6GP6cPSHU9a8tLVnz94m8EuMbcfALvdEqq3bypTn25kUMjNacLpL58UEU9RLjkrJ66ULi4K7Qb",
  "key16": "2B4pkYQXwr5Mwos1pdNK1iXP1UCohrD4RCz6vot6jrudKvZ3DMym9ieAf1pz1UGB6oyC2edi4c2Gk7FnCDd7bbtS",
  "key17": "5G38yDNghrqi78isaGX4Ci3yAzwjrRy729ZWrf7SuJXnFYjDskiSz12JofyiMdBtruSPYQd6CfSDq3LD5H5QaDj5",
  "key18": "awoSEs8hcGgvDDjaswvahX7h4ewBshQpgMtZXw3t7fQNLQSvDGiX7eYSAKcv1XKJ9bEdoMbmQvrhaurqgPUY3F4",
  "key19": "W2LASY9SthvChe9RXJvZr4RQ6mGZZD6UvCDQXikHMQQdoubtYk5kmzTD7R4dhJ8EJ1K7npmbooJuTdMyXxEtGWd",
  "key20": "aK6hvWJeYqftviRsx3UeuGnPUdNsKZKRBxW2xbY53ormf7Gac7KxDPBQWbGKYpJYgM1uEiYkfUuoBTUsiGfQ4xW",
  "key21": "7dDVBMsqBkYFvubgTdXJdSrXu7xkVEL9sbnrmbbmoaFPpwNRiHc3Yk69649r2nQdyWD12RDBEo52pizQehHQdKW",
  "key22": "5q3X5KwYY2z1KVcJoQHTA7RKjT6YMRoQ95zbpdw2oefNd8Pyfw5bX5BSvvstCprYJqMkyJKC5gNRNpNEEpYcmsEy",
  "key23": "Baz5ghPsvBuMXKiDEJbfDSomZf5b4QawG8Q4jERadEcM6NLZZNnpzCB71L8fvFWcGwftWKWbUJbwy4cL4SKDGkq",
  "key24": "2ErH74FrYjdKLSxxUmgMDYntmhztW4pxz2roEQJPoKp5TpoRG9276dtLmATaHySFnaNL8KstWACrawcrsfdwBCRW"
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
