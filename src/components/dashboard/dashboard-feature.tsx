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
    "5djHgqnR4PsiMxT7LhmpLntSQytDEARnH5U8KFoQVCCJyasri4kAapj65de5oQsbxh7uwJMa1GHpbEXq2G5jbBZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uC4BhpEaUvsgiFc7F5BKb7WfjrFMf126hRg76W3PEs852f3mdL7jF2sw6XxH786AJNj3gGuvc1LQPWZb8etZZyR",
  "key1": "5GsjhTfoPEbKPLmriEPaYBkqeox1hucVSUyJrk5znhwnnGzdi7M5q8pUHp8yQQjWGxVR8fbDCeAesh4HPDdpWcpg",
  "key2": "i12JdJTu3ZVKW4GQrHAQdd5FrGyoXBrEnVubxRDbQ4mnYJ63HJrUHa4kQECyi4zuPvJmLK3J7G6ceQCf1vrNxYS",
  "key3": "4B7YUDHnQqZrYFAsEbpx9DS9qK8c7FSCmQqTqshGWoybK9yTBiWSDRcthsH5arcWmAdAzmY2pFtejut5NfVX9FnK",
  "key4": "5iXvJfbctSRSxLCqKLbhtPYYvtseGFrKywM7wNtNY2VFumht8B1fWknWgRnD17GShvRDA1NrMWgpgoYjBD6Eyn5T",
  "key5": "4fxnEsy9UF9BGnVGfhw6SptmZrfoCuYjeZBsTFB7yUN9S2xY6gN3Ek19tJowdRjcVBg9Dyvjfun53Z3K9Fhw5hxA",
  "key6": "5WYN7HQBjNFdHcBufhkpfGMt72i4gJmHZy6t5AyCkJbUHYA1GRHQwV91ennJiFRUQWy4YsVWCehGHVU82ojA6YFL",
  "key7": "SSSQ9CW6JgJJ1niNopUwYMMhyvXRmUkZoAEsG2iS1pb757wbkN3qS2pQGx43FK3QpiDNpp55ZssgtQmCQVeCzJj",
  "key8": "4we4P2YpG3QrhUbSAdAiUM1jH7cnHVqEkozpTt5Mp7kh1eXGWwAutcBrNPwst4Wm2ggm1iXgoabVJAwshTK8Ya1X",
  "key9": "4zw43GJRDB1F214h661fgU3HTsoEk5QPrjsva6ad3oHJPiBBJKYk3YzrttGdqYR6xzEzQwyNUDa6rAeh1NpdEoU6",
  "key10": "2RWoA4VKE1ZTndmpDd3Y9ur1pU7tKe7S9o59kFtofcX3JzdqLHJVoxAXXwcfPE2SQQW4Mh7mnKMQjhd9wv2UxpiX",
  "key11": "5QY8PQBMvTNoz57nWkAcBJ49ZR91n69AiCSZDbjbx2caFm6Sm2gRAYV7REygDPkJSR5tmDe83tXkCMTcv4ywug3K",
  "key12": "4MP1oUkffM8SwatYSsPYLGVAzWFuLrav6NSrkHVrYYGFz9Wxv39F5uj96E4FEm7iz19yGTFEiSUege9eqxJVZK7z",
  "key13": "2x1W4uC3Az7U13eE33aBEJvPv3XxG9JFZ8deNQRD4192By91SfHjStmXzEKhoN7SSfrdPApdretQ9gZh4pgm6mBb",
  "key14": "25rqzGoAbGjCewAZdyHrZBcWGgcSAdXSv8ryLtAwdjM9oxnYX6Fs5oHZwGW8cWWW8Ye8J1ayLygJapdw7GXwnXCo",
  "key15": "2gatkwswRUkruMSat3k7nhTcAsCQVv5BMEcoRUnvgmGwztgQGyXVtRp63Eh6t7oxQCn348Fne7g7eubuRGrcpbsJ",
  "key16": "2L87xEw1EcbPex9Gwsog71X9shKKNpkRNkhifk88UqCGpspQChQUYnESykntwetPkXCavmRNrYsxcLNYWSc71ihE",
  "key17": "5LVYKwaHBBUB95jcVN4VqGEPzevSzf41mFBPYWSzoSWg34VnLBU5fz3cKDKqNp7bq3iYY2Vdo8qwixytnG2tXMSH",
  "key18": "4TtqZSbuLK46pb5nF6UNM9zK6VjEx55a9o86Z8oSpQRdHW4qgd61Emmxtfg4fg5HryMy9UcYKREz7JDQjeDhuAVM",
  "key19": "55og7ix5Y49sq6W5ywD55ohKqGDdAFU1UtESWN2N2hwbD5uMSCXyquAVbazsGK38Vuk6CbFETXYqTuaiPeNR4R1z",
  "key20": "55BNbbh16BPzMA5CHxTLK2qwYQLn7JjwEe1TEVhRGTRnvhZNijQEaeRjdUwMKf4K9gPtVvKMb4dqZH98dQaTS2xw",
  "key21": "23YayTBxpfh6NJBVAKZ2m7VG77eXUxtFSHMvjqpVa8koevBqiVpDQFCsCQKhf1UrdBq3zsTNZ7kRQdBXHrLFE6fK",
  "key22": "4MeS1H7Gm7euPHAgeqszgaEdT5wQz1N47mcvM6VyYXkJbYCHDCxbXxN9VLePXzDDwuWF2BC4StUfHZggzuq64pMb",
  "key23": "2mJRXEja6Jw9iv8YGE8jWN4m9B6LPLfn1TSREvseJHwooC4sUDzS3agdpLitC1QRdomokbBaK6RxuwzwziTxB7cu",
  "key24": "2nSXiMTH5WVeg1vCAC9BD3EJWotPyt4Pifg8L16khrRUxPNsBCyrFrhbeZzRrCMmeLgCpjPZwQEDT7Nwsothm73H",
  "key25": "ijsbNCZAJyFGgydzmfbf3qoBKJWKMHGxHmvKHaifyaJjyWFNbk7XDcHKEAyqXcMRghCmSCA5r4M6prur7NhiWR9",
  "key26": "4jPdKTRqtPLVWTN8nQD3D6ZYaE4xT2QaEcfj9tM5A4rzcvkyHWKLn9K4kKJSQE6VwDgtC2RmDUP38TcSCw68tqmr",
  "key27": "5dyuHX3xmGkdYgDGM44Zqq99MGTgRBUTHKJSpXnQbWPWWmMppLJDcQyCP88Ck6kDooi6LEWhqDLLGUcr6GJig6b6",
  "key28": "59ox7XRVc37RXQmeC9KCa2mn9mnq9QpsQneadPq5XEL39oTjcgX5GjVQLgG475o8hLxgp59rKgF1FjPuW8wGaSRY",
  "key29": "mxZ2m6V15iuj6D4fWLvBVCuU2WdHgbU5G1etYLAY1CvZKXEWMuAUftmfsJMgmg5WJrBkpej4ypnXzwb54zrcZaJ",
  "key30": "2X3DVi93dC22rBKW8GJyqmiJ3U7if5kjoAYwSsJ31QZMnxu37xQQVtjkSB5JELPp5dPhmYC3tqVKKFJ6cWxg48Gx"
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
