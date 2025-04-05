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
    "4Nut7L41HazwzytkdovNrxBZLRDkxBNGLkg2Wsg7yopSuCbJXKzHGi9tVgfdoBXCAJ7cg4LGQMi6eew32RSRLQ6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B9NGNEq5KzyK6MVJreTS4mwCLyUrGjC8vq7TUX3CLk7fzTnzEvVfYZ4ch3LqyybKQS8d7Cr8YqrAHX2zxgrepCC",
  "key1": "4HAoC9JCxuhVFSgSKUvKBmw56VReCDEgmGTNpaQ7oAyjzBHViVarPhjgP5oXemdYvyjc5CTNwP6st8HoMjPirysq",
  "key2": "rxP7V4jN4muirQSy9CW2mVaCmGUvMbogdx2GqCdbKPQSgdqgK58VUCUpaj9pNEtcz7RwBD34bWMXF1JZoRU2i9W",
  "key3": "3zrnMmcwAsttbwxkByc96tUbT7ngX4MNLdEHmfXHjsLkjf44T3nsjD3JfWqT8wy8r6Wfk4npV1rBF8jLM9qALPF2",
  "key4": "2XKu9JgQEUUBEKBW7DiWboV2msUSsDyviHtgpiSZ9fkqzRFgLwVow58QcriWu9ofQKyZmEqK7siNnrRqgygY7c56",
  "key5": "5bdr5tYrRAmfxW7dCJj6eY1HEkpbRNSFyhXW8b3TzDnu3jMhDdNFArkTVWo8D6pEwa8W4ADLoKBZUHR9yUzzVmEu",
  "key6": "2L5fvkk6eTB67jV5tihbHjMZ51eZFtyYY3pRDUA63hAkkejuQL7oMiCmLS4ST2N5Hq2JPD4WxKU3nRGwJYN4EL15",
  "key7": "3ikJ7NN71eSmXMDtMMwARrNLMNqEKQVVtfEwgeKDWEM2odXyzZiiingXikvAuX5Dy5Pxuc5KM77Zpt5fUnza2Wkj",
  "key8": "2ryC3GF6w1maAW4MZ5Ta6qBHtcGjjk7y884XDgJkBfzbhf8JQjv6UGQX39XgbtAKpKrT3ALUehmTMiuLfHaac4TY",
  "key9": "X4osu9kr2JcYGYm5zXJcUA4eFcXrMfNRW6BWVTDoUMuRgGX7U2o68GY1AJvdhJj4yiEy9yk4DxidX2DLoh2dwPf",
  "key10": "XZqh2tKrSKw8LQMaay82RGNCB7wmqTDvmMUMmXJC6nmLQw4PK4C43pkmpougd7UiqGfRGXeLov7XSjd61AdWF3j",
  "key11": "qx74dLJ1QdPkVaSgLiMKPvMwapWCkUGZvYx223uBFk2YdDyszBD932eL7CZFxjnSqBH7JcPZSU3rY17SAJuSijb",
  "key12": "2M3S6pYw6ft4ZrnetjGbMSmhmp67wzLDD2Pw2pGxmmuPBHVk2ntKy1rEmYr3fRhUWfxvU2AYSuUuEWWaC6TqQSXV",
  "key13": "4QJ5zsTRJRaDXcd82BwQzuiRyQPAGgzUBepBq4zuhtvxJUsXo1cSrVcB8NvcVkM1rbtbJcSVSKgkaYwm5dT8svaL",
  "key14": "34Xsk9KwgsnccxpfBLEfpa6SUSnRtUaycQyin5bXaygxbcqA7DSGto6jgNJUr5h5ZZwDnekYFp2kUXZmQq9tuGKC",
  "key15": "4xERALAFnEYHpQwGxq3xM4YaGszh7xif58YnFY5ZxrF2cjxJgHHFnGLbvFmqL4PfEkV4QufBndFSwmyychANGuEM",
  "key16": "63awAY83oC5CSDmRLy81hiAzpM8gcGsa927yfjVfEyaY836H2c6s91A6JZw2pvtKignQPTzWcVWk6agh1jTCn8t5",
  "key17": "2uzhx8ofKr3JhnSwXabaRs88w4d58qLZx7GvQfyeDsTUQ4dstqnJxvVh5wX4jB8C4NSDXJuRSdugfAj1g8h62ET2",
  "key18": "2VugVB81BEnHNhu4rcxFE1pMnsuqyXHYAwiqL3CwU3X3ok7ya59ANg26yNcjxpmBXoLnNv2oqjuuHxmPW1RW3f1F",
  "key19": "65Q4dAHbmoQ2xWeaAfZ8jFHiyqZSZBtn3UobS7T6oNnPKrJ4W7xzZGMv3BYqqsH53EvNYCvenf5fgAe4tTXaPmzR",
  "key20": "5xtspsreiUD5ysie3y3Cvdc67Ffvt5QD5Lpdbhg7U8u24zHL5sYk6ADw6U2BBbnX47Hjqaw1wsTgQtCLRYiDYEEA",
  "key21": "2s7BNy77qiS5aC5aR4CSCQkLmJ5Xvx6zKt496qMrHMA3PWh2LsgveoDeMdm1AuUoP82cWxFJQqbrxEEDiRZnzgx5",
  "key22": "4qTXvndcX9naQYZpqy9CC9JBbureuNPWhjJBjWYVaQhTb8cqa5f7EeQdUbkF48kfCs9qq7i6rdYudNUKB9P6XfAH",
  "key23": "3nYUEYEzaXemuC9hv5cL7fcrvSPWFhMsymWNjJz5YGyUyqYwMNrFs6z3c4paHg51vxLENWyBUrxKvAgjt2CETvM4",
  "key24": "3HLk3nif6PRJ3q3WWPr9uBNg66uhP3RYqWmRFkfpGVwtRRRjdG2Ef5Cdsn3fuiwjbmNP1Ja13yN5cPCuinAQh1Y2",
  "key25": "53AqEnSacC274zoTs5e9eisj9HbhpPJXBdn6GxZxLdW6PtQQx1HzDxqdHrU6pHjQtUtS9pTV5ZcwbCpjSGzkp5s2",
  "key26": "5qi9yoJmSsenDsHPJDRs8jdSeWAJxJjx9i57pZxaoY6PuL6UCKYEwYvqG9MMtCereHa2rAHr6Rft55dqH8Q76VW3",
  "key27": "H2KBeGkgsh98BEFvmG4hamRm15ku9orpk7V35p2JExEKKhoJvfxjtXQDsewfcyUjgqYoh9p6K5jtbCc4gd2Py2n",
  "key28": "2X2JxEhvWvUwgNA1NpSQHzGd1ti2VFZCWPLTs9B6zBdL5v6ok7nDK6vZfpDMVMkfHLFkfEiTBusKpgTb6VqYQpe2",
  "key29": "4ire1AFG5nX4LFCc8At1DfjJyQf1wBYKNdpJdnWfsWtesYmWV2gyGz1kxwpK9PSzXDf4i4VYpDxfVMd8sfvkdo9B"
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
