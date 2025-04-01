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
    "44dx23tTYBSsVuUBBTBXtHx61PSVoUmWJ4jPbaoZvVaMJfGWcZUqEMAJyz7SuLEvP6GHSyQBTqoAGwugK13ZaLqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iLpTsGqk1xX8BiGuSM8sRxJppWHBNfeFEPr4zENBYj1cM8Td4Kvb9NsaFpCSMwC2XPTmLgLKU4rvZQEZHyCCaLC",
  "key1": "2jaMbTWCn8SdZCVbkxPaRT4deyWtQsosR3CJz1ZfYq4MdhiTx1Mj1etkMGs7gAwyhZtfAhNmAcMmac8ps73uMRYD",
  "key2": "3q85Mh8qJ1tq1a7Xmcs6rdzL1hRU6s6M7AvmWYQMbMvCvdYMpmcxt6Jtz7pkRASSJcPcVAdSyK2e6uer4LYMavB6",
  "key3": "5Bcvr1u7yAdH9gzusFirKPwGsrwNGLmEYSur7Pjb1gL5vKKHuxZzjUryLsWgqYjFtD6zdsS4cWo7LpofW4i8pGhW",
  "key4": "3teQ9bsEMDNiaViSaA9bPrJ9atB5L5ciqn8u3UMT2ttLcYKUomoXViEcZJrHLA3ktMaCZqyzmk1bsqLnX1Eb4Snh",
  "key5": "36943LVMnPpNeBFEybUhwUuoYosyogEff2W31uc2Z4gbdHQuHp4hZLihzAX6BmE7AsL1fVu314Fy2EKTW1CpcjAD",
  "key6": "5eQzayeZtxrwhbvxc7w81aXJxEfDF7EFqWGuLPz2fT3LMH1omyhDYYGcV579GTU5Nfvjsxd1H4NDuE42gAdViVx9",
  "key7": "5aYRNDS4f7tKoee9gHkmP2vaSVhizeBZ7YS7NMopFJUsfNQS3wy5TNSRDoxU15uqhpmdfbfNjuH69bp52r6kZgca",
  "key8": "2GozHSsESpPonVaZsEQ6ZzxB6846wgY2RA1D7drKVtzkvuA4LuRskLHsSCZDLusL8VsPe44C2g98ZuUzgkVUUSQN",
  "key9": "4X8Ao4hquQN9yVJn8tnfk2p3kiEQUQHU1uib4twNjhxfJVjFL267zbxePKieNBuLusAhP8Y39v6sqqJzmjBP9qk",
  "key10": "2zYECsH2sv25BR7rhNZGvjrJJvfk7nPmz5ZuVWBUybD4quyfJGkho9c9Co7yZJvY1QGVEMfs6ychc9x9t94UA6tM",
  "key11": "4g6bS9HkxRMAnGC6sCC4HPW5Tz5pxvXUiCC4md65o3nJFkggqUvJADw8e5PdsWU9twqGYBtz4d9qJYu6mZQH81sC",
  "key12": "5N65ZSXKV4Y9PWCs5g97SJzcJH3YeRCmv6PrAVbfkHdxYUUoDiPMcsAxbUqFQtsCrVR5Gfi314xohzth6y4K5mAv",
  "key13": "5KiA9QyQs4UjayBbsBc8zded7zK6nTKLviBdAqE6tGF1AnqYxY2tQMqGUAN3xb2DCKeXE6TS8aTDGgjbEYt6d5hK",
  "key14": "41Ytv3wm8ve6XNJFcah9byDoT9Z3UFW1XXxbBSPrUBqLtZiwYuvMddsuPKdVUGWU5EpzP9mbxfJiwSjM13VK2wdb",
  "key15": "2bDxHBw46kmNcajYZ3sJ5VN6LCWyRQwDitdQuYGkbk8ghosTWK3RSHUZW7WmN881k6E1DWYF379NrwzncCgURX2v",
  "key16": "7w9fTd9nZCxyJiQeiydmxsWqSBgHuUjpVV6dmYWPz4weUZkpeA5bSaqBvFoTHkH2xmiiWKzHFSko5wsYb1VmJgX",
  "key17": "3EdryyJpBt6o7pxudrPVnJ6oG5eNitYy8CR47EF9FX6ro2jwH7u54a6xEehWKz8VQvsxW2Sy4uuPWHhdoE6GY5vL",
  "key18": "5JezTGaWoYLLcWaofhkJWwujn1mFdpHAJX3hB2XNMTN7DkKxLWLVZaowLZ776ciJWgWHjzFwpndfr5veUsW5z7bo",
  "key19": "5G95kff9R7drowRAyiZb47aQsGpaCR4noUVwhAfe5NiVjuazHViGTVRDd7X3oWmDSfbfDuhu8hTHm6At2coXQnWw",
  "key20": "2s879oCJEqG7otW6PWM5vnv76MYvkxsTApPro7gtNbQSnvk5hGe3kMPXDTSwDsXwVdhmcs3F1WozaQEWGqJBDBdu",
  "key21": "3X62d54MrPbNGZVskJBiQZedXfjZWP6KoV8hUtBS36ANrxLW8YN7bd2VSAyJ1indcvqADHLL51Bo4SJ66A9LtDr",
  "key22": "2hGMzdU5wrXezK5BSwKMGCBiuKMqYnhUFUHBXzzotiX43b5aorNF7nXiY6esefekGtex8XV8cxZFHA66QMiBMSEj",
  "key23": "37iBkae27MmBvVJvQutX91xbkse7yYsh4f4R83HbLkCRRQGKqgZrVZKv4vMZANE4kCViVGvunHV1HiTsiZrsLAXh",
  "key24": "N5UZFLiyhBDNem3JonHVHHPF6DPQF62SCT5RjuUiknkjVnBGHjeV9am9g8FQnQJNQaCL1UTFSD9NN3ivLXLkxWB",
  "key25": "2ZfvrB4MWXhFy4SiJKW7jhp3cxQrdapoeHMfW1setf5ZfwutZmyTj4kjWQNsWHeU7w8Ww9qhLktyXTEfaguXF9CF",
  "key26": "3FsBieGvdkAb6ntMsLvRvMURyQbii2zam6YWpReXNbSgxm4yp4t4zGw9meqQGZ2CDqJdixMYRaUHjr2LqQy1wb2T",
  "key27": "8xeHbnYWxwCN6Q31pyFpxRUDxCdWVsgk1SvoQhX19VmRmTobMpwdDbPqHCAqqkpfrzMZYCDmHkaaNVuZufFAZzB",
  "key28": "62wzboiod31ha455Gou4EQ925bdW5w4ENhQX2vHstMTbhaGxysecS2MN19G9RozDtGVVvbR8hduRpkgzGMQfmneb",
  "key29": "5sp4xtaWVbxTFXxjqaCcuLruBhVyGgXC75mx6Uwm4N7hbQ7jVjGDDra2sjJpVSxSb2XVkkrXr1whePEuEFEXhi5v"
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
