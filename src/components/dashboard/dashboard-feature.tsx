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
    "5siswhmztsEFNZAHCHXQDD1CCLa6Rv3ovTCiT3pvwXfpEMoBnU1cMcL4e8MhMZteMt8mST7JQukUqPhuAc1dGS78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k5byr8Ktvf2bRByEHF6zeRy4ze9WzsMji8x7ircUzDmwTanDH8f3dUnbVNrZ4CEkpdRyLv1xTC28ZibgARYjTC2",
  "key1": "DYYJhjBbZeBDYexRRYcNLjYZgKMaDxQGZQyjwBEDR5q8jSGCiLzFHfrZr6eQgqaTz4knDXjdqJ4VCESTggp6DLB",
  "key2": "3UbWDrwZ4eZmVoNePJtQerJ2ftdH9QdLoLQAS2voqP2urioqcd1ABC2wHFaqdscXvkY8Zmnm7BQrHx6Sx39izHmc",
  "key3": "3JKaH8NwrfCxFYdBExNCgEvJKyGDsotr2Tns5Sijk6tbeB8iUAu7RFLxTqXVxxyTd16zDVdPnncULAWDjNkyTBXn",
  "key4": "59XLR3PupLzoWsiBmwUFjxRAdvs4CqsMqH8rxVbJWv6e5BiRc3MqjujYuD8jkyfqXQMhfkxW593nwMXTCaigByjs",
  "key5": "4Pybr1RmVfCkfEHM2duaNuqN2cPRooSwCyMHaTUxTJLamsFeApVBRsS23h8v132nmyESgbLFaGvguXYq6FxfTtQE",
  "key6": "54iY7Tb3q2Nwp2AHRXYj1ZYuy3bB9uXZaJANCgYYm9aMZTbGXmvMVje6JE9j86iidbwbnxxvgBdQKjgH2vo8CwCi",
  "key7": "4WKFrwyBSKtV5eh9BVyzRs26irb7vqsE3jFPZtvYu7ibTSk2XgAQU2CaNCTuDid3ZZeC8dxsC4jMG3iPg3wXcJe6",
  "key8": "3nDR6RnWfnGroXcT9CtKQsC2VYyTdpXrrHfHY7qQvEwJRhgDYTjBBT1acTLKPqNskBDfBcZphNiHHTXdtgkkBNFJ",
  "key9": "2KmR87fDWrwwjEb1qKhKntqSpFD5rieaH1gqrxEMp1sjJpdPyePoCU8gcjz5St79rHSNPDdfGFGhgtJevk6Ghr3x",
  "key10": "5PtfkrzkAo58WsB7zqjqV5EwTneTK9FhSgguQoLKcegj9vLsvvEdBLi68Xr6gaJsYRuZCcyc8d4pNfAA6Kdicy2",
  "key11": "5SCZGebABVjhG1A4fR6T5P2GBgnz6pcpq7FPsiGL4ZmUZmo4oFrnSPY3tkRXwsGsetYeT3hcvisPd5CVU1HDUs9R",
  "key12": "2PbUpKBjTLZuTeyY77puqs1X3nXsSJKMgWs245jtfRcVJcN4jZqnDvwCsLHXQHZxUfbWLoqRg66Hebxuncys3jum",
  "key13": "2jiuA9WpCn9SM3EnWM3C6i1Bamr9w2Y3193edCxCT8w738UsKsgNoZSC14fKP8mTRah9Z6dohFjx4DsoBRoyY4w5",
  "key14": "4oHF2HShNembXTKdLhU4Lq7cFinWSctUQJmtCC95HeiLB5LKTZgZvvQjCYaYSHajkaMSKrsurhqeKvoTiX67FLRs",
  "key15": "4yxrHRpAudiLBCFR7NStw7zBrfkoztEz75ryDFEtGk5LXZbDDTf4Mjb9WyH3tyxbRxrVn2x19puthWoqVrVDY722",
  "key16": "54GCiFU3soD6WoBBRi8oHpFLxzjuFZUhhFTi6J5P1zsi153dojcx2Wo6XLZmyN4s9EtkbXLBWhvH1HCCTftCu4n2",
  "key17": "4VQsxoaF6HzgfRgVe1McsuTeuFWqhTi6P9u1KfRGJsomvHAiXXPX2HSMSFqStUZPtBKwxhrKQBgHAnUV2aY9U5Ew",
  "key18": "5kU3Q8KDx1FmE4kumiw2fgWZnRpa9vpmgEB9hi1AjssWUxr8kE6TrigWwqW5wutne2oM9Rn8PUYMEJpYAGbzQAu5",
  "key19": "4HHft9KR9aQbkEniFJfkFpeLLAwV8SSUs8iQSKvfUr41YxcZDZhYXkr7G4ofWjtDjZ4QLp6gbXhJn47NMFq5TdZS",
  "key20": "4FEprPKT8U1UHFxF4YsEauwHVNncFc41i3hn3invYXHjnJTEK81S8sjfp5ZMTUZKF97opwJ1MQSBVjiVmhx1Zy21",
  "key21": "2u1L4UVRqSG3md5Wpd9jxjqFuoeXUBN9GqqMN8jk2acH5nH6rMGiZUZc8RyLwCf8QP95imaD459qUYYm8KLZ5q4a",
  "key22": "585LtXC2iCsN3dMjUAoCKuV2NuVZr8MUGX9LWQQbRgFWZYdAkn47X2dQe7v5fyboFhaZmNUbHaxtYyR5J1Ati5TC",
  "key23": "ke9Aqr6juiFzChBrpveH2upvprYmHBSuQd3exT4ehWj47QU6j5PEWhuHodGBt1eLaZGYq1jP58xnToaDgPYmbwC",
  "key24": "twNCMhPDKVxuB6XuKJrXdeF44Qg2LWetQcMo5AUXjPvRLvtC8A3dQJVukvu9jFekCfr9vajRmHYnE6ABH9KdN45",
  "key25": "2crkJPysX1vyoZdWo3dwbK6mtTtsH99khNX8ebJpsJBH8eeYgxUh1D5eCvH1wdFPh65pMB2Mqxy3v4KSbzgK4z4U",
  "key26": "4W65kktgod6kSqmcfskGJ3NHffN3p2u6upTkcxScktQZypedYnwDXspTZp2eBT5xKqiqnuL1gYRjfLwAU1CZX5ZY",
  "key27": "KokfFR4qnur4JT6U4pYFRF6LwUiZ1GMTpuhbGmhykT7pY6SCmAso21ZMu3GJfW6ugkQ7Wq5WALSorwMn9SrSc1h",
  "key28": "44SYsu5y5DbDbTGvqVs9DiZtXAKcATKmrbEaX69GSfwFjBnbRgiNdhnc6DzxrNETJ2fCQBWQ1xaX2khDHvmcudQ5",
  "key29": "4Zf33XMajkzuv6RiDzYib9aE3vPk98KTuUQghyFMMEG14JMXHim7uBdmxFK79RXhD5SqsqJrVk39eNeomDneKvU8"
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
