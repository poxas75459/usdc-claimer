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
    "5UZBd4N7u76naygtRXThjtQJhUjSsbR2enoUtSgjD3b8xknqn7BU4dT2gQgASSzsFaGkz6EXNN31zEaHxqHmRBi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gun4quhje92JEWh7G2YNgV5DGPP5Lc8qQCdCxBrGvuzWv3i9AArdNR3DnQeN6VriaTxqYAZW4EYQhrLoSukx2kX",
  "key1": "4HeHsQjTymhKNWCbPSqS7btDvzBYXLy8YAyxNeQMrxvYTmebT51gwJ8Aq3LH98UGsG7Sv7UZ1XEUQxS6LWBKp2hq",
  "key2": "5TMEGhoogocR14jxAboi6H2wDUcQaCKFN5Xyrn9sjr2GMaAViviHHHrAXchrqktXtVksFaTw3pyaqTRyExqCAFqv",
  "key3": "4raKLDB2a9aUynvgBkzsAKb68tnwzWZtKxqC9cAVFfxoYi5SxXLFVbjHZ3mdAKUQMoHSvFgR1Eg8kqMqoADGBAuG",
  "key4": "2nUPTULTRg26uBg2NbMcj7BPip8rFnsv5NqfFbFosdR9CoofNfLLhoAVdjjA8pLFnZEKosrybQ9a43abnqpNZ14",
  "key5": "5JpkBEbFctkienvWpsRXMVea26xonEearNjYopNUHMnZ3vgbfhPX7zhZvNsLg3mHsGMukhzT1m7NYAF3Wm1neBqF",
  "key6": "3zpyDc33LdT8xUyV6C4RdRjc67jK8AfPc5vEUmPUdqMAFb46P8dyjg2amAUAnnktVySfRNiZEJFdBbUq9JXd5xfH",
  "key7": "61JSbDfFgkqQFmtWy5PBhxAf2nv1quAoa27KdjbaqUXhpxyhhe8YnvkAGzgycEXo5Z4jbh81fbMwRafsL1xuWLTh",
  "key8": "8cH7qzdPHA43TpbuozgvYLfpzngrLMDbSJSR6hcdXyzBz18n2qiamBqbqUMTPb4gFoGG5dVz8V9VtBirrivT515",
  "key9": "2j2ggpuAeCZDGeMWcJ3ixcTgRBdSTsCqz6at99i8bwvnNteB1UYMeUL2kyAPa4yjte2eaGNhFgD3HVLXKL9jLRhh",
  "key10": "spRNmYh1SahSc4LKQSEvdKhzvjVmZgk2429xkecMu4DnMfQivBvmTk16qrQ9GzxSTGhAsfjDMSDN97csL7KBCaU",
  "key11": "5iHsQ85JR8f46kAxH7sQSLuxHCqZnirAvpJ5Lcgo36B3fJQBN9upzr4tg2pmLmjrDLRFYQoNeoqPnzV8V76uuy74",
  "key12": "4bm9fxy8pJx1wAycUimgdzfhSkcuKWccxHSPRYamouPYe65wFmAaiLLmbVCa7EKetWnCWB1hAUGqUcibRCSi4Wpn",
  "key13": "5pVHSLFpDTzMgzaZf3oz5JS6hcm42i2QjaGYRCLb4iDyJ32t8Sn7uA3iMXHUbwPf6itYUkTeVxEtLpetW8pDygH7",
  "key14": "cymNETvKZbzDpn7GtySk1ZPF91r4FKpzBfyxi8zh7KAR3fNjoBByDDbiuYHtvPbvX8FNnFj7yuv8jfUy3BUi6uG",
  "key15": "5TrwHaM9kTY6wGygVXmYR55Km9AUuXFrm1dVZ3uFkV4LQj6sUteV46BzYVjbZHVZEiDMXpGYc6s9MgyaVXKVH4iF",
  "key16": "5LrQ2qQGKuLMGPbprndRWTVTynDyrKEM8ZMpb1RBqMFEotX47u15G3T4mvtnjTuFQrFy92LCadVNcnmyjU4Q24kz",
  "key17": "YmTUnc13PEeq5wkV5LqrFAxnYY5tLuXATtA1M7rM42oiUfmUgicjg4jv9odtzyVA7tgnycDGABjiY3qjAxmNU7A",
  "key18": "4S6FJqo2KNui3GH1NJxwjBpRmaDXxp4rMtaaRT2ofnpMoiU6LuC8Ls1BWs4kr7jYm932QmKFNr5paVn1nRA41J4T",
  "key19": "5MUhGXEoXtm53m1Y88oUjWZwM9tssxcmDqE7C7xyfMcfVixKPJALi6gDiDZnutwiUuXjX2jgEoUpWz67yDYudeYL",
  "key20": "2M2GTEKoFKuqgwUvQ66vr6u4pAxoM5jA2WBGqyXk2d1ZBESr1BcQh4HDsf5tq1GEUNH619bqsuSiAcYAcRur97oo",
  "key21": "5A9iS9ouYgPu8vMNKzTzrg27mGkmUtmUY48LfMutEB82DmnonyypBM13fAuv9T1Go3AxRckNy34QA9FWE27K4S1r",
  "key22": "5uY4xbdhrsQ9n8eFzcFDHRTipeLbgZgLMC954Myghb6n1wo2VL9qspNzSjBR6XBaJ2eFv2C2j6Sq3Uxu4VyEyx8E",
  "key23": "3rx4W2oaGs7aeagSkQDYonSZP3AZe9KjmoxzC46uZyqCqqHPDkQ8oHHZPzj5YxdYSfjzCMDEfQXF3w1go8zHhqho",
  "key24": "urLEscMuy6b7YFuyCjBQFuWnBcvAQRG71pVSrxr47cqANAnvPPbqxNbtju8JUhbpaVc5WQuEm4AvAA5NsBe5ck9",
  "key25": "33jYrUaUpq4aWnHWBTBoa1ke9MbCvaJ4RfQsFnshueXQX4be3YkgXnoYCHWxoTZhe5A61QX24wPNQ6Ka7n3ZJioe",
  "key26": "4m67XZqTiJpYBk1U7fzjRXWmxVNrEDgapMaNkDEeaybENXi5cWuMRrX5mVBDZ6gGAE8hfxmC7rYYdRdkZ8PKak1t",
  "key27": "UqZMhejFzXsfWxmKNB4R2nwaa98y72oyHSw1jefaAH7huurEphCK6CjcP1TtExA1zpNuKn1ivJBSCzLtWV6cRwB"
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
