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
    "5b9RJ9BXD62j3KRgBLB1ah7anPkqVbKgrk1mWy8YeByaf91eisR4VBiBLXfZMoXCxhvHQhBChcu3f3tKd7Nndcrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j1ZhRnjkBV5zgXDiEDrmsYbhHTAEfYWrfZpLCYC4nQcwrz9gARnYHkBcsDY81TuEsc5ANxJXjrhCZQ75FYhjhgt",
  "key1": "34PSQpxUwjo2ay22r4mKEFjfSckdM8EPvGeZkAR5UBmHuAJ7yerwuQKzUTuvffecjNMH24x6q6kNY48EQxKaZUBQ",
  "key2": "5cMUSj7RDNy826r5oyixfu9xRVoM2kY7Na4hVZJ97LJAPLU1XyndkGqZhXMCeCzGXFwFsrxMCks5YDhVxqwLZrwi",
  "key3": "wmGdH2UnpfmRxF2aUdsgjWbHBmGmZB3M45v1QuCneTBTCTTFPSauxfEvu7duaBDd9etKYzfZStugVJ1Q89pwF5Z",
  "key4": "2iJ2nHXWvds3NMSjphRUxRMSywxWKkcr6ai91XwfSi4qo4T7kfC6Fw8zCQPkeK8MpXG35Y9eF9KXkskNAivmw8w1",
  "key5": "21RDm9i2LJsiQVaszWEaovCjwKYuPwahk7qVQzFyxJdAaAnoFQfzg3t55NFJtz287LpjiwFRkfLBWSkMEE7VGLDp",
  "key6": "3bLrFdX2rssSf4tmgQa3vR1bzEmQMB9wwqhXEC4MUa4TwwPecbDHXLrAntrNjkTAmKj76sNaSPXMSCfpFio5V1Db",
  "key7": "5jFRGDP6aUiZHuc4sYnryyDGcEEyVDDuSm4FGL6qLvkfsyyXJNhnyAxLAbRJHUN1J8fDB4twEHfC7NLBKBgRYPBH",
  "key8": "437azF1PAKvfaW2TheQ21LMANK7z6qnTNfEC7TG4kPCnZeUr36AbDxVESrkhf57AA9z1BpUNycmbdKj4wexndJFJ",
  "key9": "4yzQwmuhNYYy6b8fsKyikASayAN9n5htBpK1St77qbv3q2gHsWWqejDoyoi2bhdZd4DDmKSV3KxTWCemN1bRCqD4",
  "key10": "2xpgscF2GK7B43TxjgDy8Ngcwg83itNz4eyybJ9VPZ3AqW858K75wwfXQi5yjsFM9YjZohZ57LRJvrDVvWeigvpV",
  "key11": "45vUrDuVoEpCiUKisAH6Hd4MYW1QA1GYnHy4Ks7QuyR8McUfwLXnyEQGJy8i1fH15QPvf54HJCvtQoydhHYiHotf",
  "key12": "4eVSR1XNSVWFNHgqr46L4K6SL5jS51Lxs9XP91KZHcsrLg7ruT6TpYuZ3uVxfUBBHdvgefnZpWMtoar2YFJPGmm6",
  "key13": "5459BNJAhC4ELhFqZxm7UZjFgtoTJV9n8carR9swTcyUfRiU95iTww6TuVq1TJBMSDZ7fr1RPdGFhMxNsnYSVnnX",
  "key14": "3JMiCKzzZWFMmzMZfC441wxggS4zEqJ3nxBDrtUPUTm5sCnDF3nwbtgXV3yUEkxgpw9zJX2T4Awc5XGPYgws1waH",
  "key15": "3F3WftomvuuxMBMiLuxkevJf9RAhiWtv1WYccsA555AG2mPGkvndSkQsmBPvxGVdUant2bAwEseTWgM5qLEEiXRB",
  "key16": "c9SmA7nCV9a55hpNPRx1q6NoAqxPHCjsQG9G2zJ2kmjEAU7zaRsWxnxHELhEztLuHvgFDDLkxCch6fpFivVaRzW",
  "key17": "5VsRck9mokkNvMv2wDiZi4Lw9JsN2qxaVDwi3Gi3MXQ6Ms45Y1pLwme6NCCgTeZMLedfeUzpkwcmiJeR95dMqrNa",
  "key18": "356mx8A2NaSrMB3SC9iN6vQXxNU3kz8CY75fDw2GA5FEDReRLmhRk4XaSPZXgTDLfEDrZSg8smgotmvyzAUzxaF2",
  "key19": "2xFudQAJze11qy6m94MHcXc4zN98YeQJJyLUg2LSFhYMag8dGBMk7wqsXzvZkbTMTtJoCw4ssoaYoEawVGAxm8Yp",
  "key20": "7ZnPrTptQ311cucnM7g5rTSMCZsbHkyZvvnF1hFoFEECBAP1rXNukqDys4oS2EqbQCu1u68DXDLWFmwA3EdDkCg",
  "key21": "5d2Z7BMpNwFZxgjejfqvTrxggW6q7ZZGsUosFR6xrJxNPvC2BpMtb664xPoZ6xS3PYRZz44qtwvw7ZDAbovAo61Z",
  "key22": "4xyhmpWDFjx122ZyBY1uoZMfc59i69BHSndVZYpcPrdukwTSN3tNEEv4VYixVbmSexnHcF53tfJzJuaooEyr6xo2",
  "key23": "aYHba7C7S7kQajJRbntcwA4CuWFVGVQn1bhbqRDDPLByq3UX78v3Ngq3iq6NnD5SC1tB2BpYY3cNVeSjUtvsoSq",
  "key24": "4L5MfQHfKjuC5z969ENeZvXLRGYRLJSMeFTEsvKcvFSMAiqoLYeprqoVcNCvhQypwL3iEJpAkLGuNJgMackWzL5v",
  "key25": "5NJZspQBGxZ49m6Re2igvQpYZdcFsZwpfE7gyicyimWPzZ7362NuspuZr4HSp7HsgiosmG5YLJjcgyrqRTavQhDT",
  "key26": "58QMbCgvpKBMwySTnyC7GHmWQ4frdYzHZviTSwKkuwmu1zZVBP7mrjKV1ec5eQF2j6qX9jvixAsCuc2uTd11pLre",
  "key27": "2cWM2dV6oCiiQBcbySsZumDBQShVPVHpSg6nLwV4Ha8C6nv5ymrDF22xAZ9G27DEbqzzDZ3pAJqB5htRkGZAaWbG",
  "key28": "2nLj9UmfVS91tR1g4rT7rqXk7NEkGpP4Lkn5XF8gP2Bqmkf7RizJLtHfiUH8opdBz6TYWxZDzZvqVzWBHkgoxFcs"
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
