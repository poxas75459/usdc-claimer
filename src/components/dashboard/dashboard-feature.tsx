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
    "upfWbpto6saYNCPQVZBXNi4weDCEuZC1kcBTCYbEaWp42aBdBrvNrCsH1tsTr6JPf5bhGsDdfZWFQbBo4bApVZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZcF1cEeSoSFWM5mpyaeiwZi11T69iWdPBkJikjAtv9mDpfQ7h5PH5tHAr7Pbu6RKiztM9VH4QeURZEgMzPoNUSX",
  "key1": "34BGPrQtYZR5GEsLqRibfDktWTrPEBdf5zyaissnhkRUoRTZmBGmw72wD4n2F4m88mXncyzhSH7MH3DDW9w5R13F",
  "key2": "4yQSpk534XxhxavZnv7cDM96gU3wJ9oPQVqhugUsZfGULFP9NcfNVYDQ12QGJUwXKq3Z5e5JiBFaPnhDvSPmoBza",
  "key3": "5ZZqdzxVYKyJxgN19zhwMVi4NZepc91BBD2HDMtc9T8opoQXUxFp8DkkcXSEBjz81F63CryuQcC2vfuoePbBQ1SW",
  "key4": "5KvLqJYTUpqwA5AM8rvmXtRn428skN3ZAhZ8ZzjAPQWfiC3yR5YwtHB1gks5L6nCp5RDDNmHJQBmLNCci1Cz4UWq",
  "key5": "jNLC5LPERMe2UBi2ztPpieEjtASNdHyGzAGH6fVbZ3hdpdKS71C4wTfGnH9KoWcvf2Xk9trcxPxxwWnbd9P9Scg",
  "key6": "w9NNK2bqAAca4QZAQnh9qwb215TbsvKx5fPnTeDU89H4ots34D5ULXRXgnsXr8XhzwYf4Zb5gRpzCk5c6NgwqoE",
  "key7": "bcokddyymPyZDqSUXMKdAQMsFSf6rfCju1RoNwPDE5x5qAAYjjCfZceay4gPZuvQca4J97C2bUFYF9whLUVwnzG",
  "key8": "Zi7nE6juMxLSShwgnvGUFkriRy6Bep21m8oDc7zzDpqsAdxYd3a5oDdLCmaov8BeJCSvs2MxXNm33dG5QLquLox",
  "key9": "2xVWidDktdEpjRFU51iX6kao6BEfUvsieSoXyghmF4VMmpDGLVvKc6aA79nFMqaULpYdVhsWMVtxxt3xWjvLAVS7",
  "key10": "4fcrWtHN4QybsRCCdj1UNzyp7jJ92mQrbbCU1pRp8S3q1Fosk52rX4bhFEsKRNia7CFqwzkAj1mAUtLEPAEwnoPQ",
  "key11": "2auqqFXzFpDswRiLcV2XkHNeMtAUNhDKuwLS8LxztAqksu5g9AY7XGfcagJHxnxfae9uhf5vgP7fHxFe2Mh2zbge",
  "key12": "3JFxDKwLtE5JetktgtnS48dxDqgHJuKQHNc9giVvMczyEr7Disgjas488YGwYQLmbx1WraGNbv2NXYXxYtLWzPQ",
  "key13": "4CuDR8bXS3FdGhcs67Szzvq57p5sThCSAwKkeQotfKhYgfaTHQ9JvvGQkTJvX2K1jmNAqZufVWo3eKNogrfcNnYM",
  "key14": "2B2sbUZT9UdmMKWUCEM7ufzyHQ7z31FjYUbYRKSvRz1gFDAt4qJkjcfJj4xt8x64h3T7RhPBTYEgraLfgRKidAfj",
  "key15": "5nTsmHsptfXj9FZPp5r9ioXhpbgdEWR19QdCcLSzj1BShbqcz8oshWpgzMFzPtYboSmdHksr2eAdh2meYyefMy6X",
  "key16": "626CoVfwNFDd1XhKUeCJp87HwzFnorGvQirkgpXR2CsDvV5np1y8TMmKakP8FvpGKzeBFGEbaUXTDE7qBZFMpf1y",
  "key17": "5HDMmC8d4mqRD7e5HXssVhpfxgqnKDFbAddHZe3U2wt3ma9Sgbs1hGzZsTYuaXDAX27UCBmo5iaPhcc9ykmXV84Y",
  "key18": "661gsDiRG8ZVoYNSq6WSobWZ3bEUd51H7fqZQwfZ5vTijS7rYPBcwC1mSdyWivPgUXbhUVhFPPBF1v91gYNQJTjU",
  "key19": "3X6fdegaCnmdwVfVVaQbAfd7LueKXf1AwsufVpTJ32G3uNuSvNVDVbkbLn51SRiDVYKWhVn14CTpwtLNUcE87u14",
  "key20": "WGk8pjbC9BkFih5infEXeFfsLvcinimKPXzL42xJUEjtjx9GLYmGi2cW715RArji8fuMNyzVV3wFqSVoCD9PMsV",
  "key21": "3vkALEAE6Vc4hM5Wtui1oo5t3nR3go7X574uS3gqHXoUoXh4AaqnTaTzKkxfGVdsfo4tT7pfjpDPsNEmT4iY2FFB",
  "key22": "3rHDWUMPr3aCpdxEuxACmGMFcxkJRTn6s3ir5kb6FQ2JT9xjYYd2Y7yuTn95AqUHZ7yTaXLWn3AG4VLVAmupamiQ",
  "key23": "4ii2FYgrXKr6gUnEvXK2yErvCLHN1V6dDvdBcPVufytzWvZCktsdoT5QCrhJXmwGP9BdhCR9Cpq3ZuVZSFhke7eX",
  "key24": "3CPDZeSr2XzqsR3Fb3fMbxGq1gGtFZRAGYGbBdEJSy6sN6BQBov8SGgEytcWeftUShJT1G8MrXFQfYQJHW1YzSaY",
  "key25": "2pBNqAwWFXzHCJwkudE3NpWdy31gRE7AUAwNZbqJiFaggmGMyVq7adkwEgaHDbGF79VsFcQdpWeQKmY36oL74vtp",
  "key26": "3NHHbdryHpsWvsjP6sxXy57inTVKL8FzSWU1KFTf3d9vgEGnnRQ2kovZA9nH5XWrDwMYvNzWMFkM44YjU1zSCdQR",
  "key27": "4CwPUtbj5zQ8zj8ktjrf7qJ5j8rtih2NSvsTpvaiDFzvJxQjDxps5ssup9NP44ayvZcoNy5gXwacswb5JGQkt1v2",
  "key28": "AFEhjr2mdnxzYAF8zuFobEsevrVsZDFbxEYxZX6Cpr4RmF5Gxodq1DrxoKCym3PwLiuKkYJkEaj6KM8zMFrHaAC",
  "key29": "qjisFjqZEgeJKGcj1tvMsXwVKRUjhGRL5HejBZRCpaKrgNgco6QfRdaik9NMXfBEoaLebDVK818CG4YkyVNfoVz",
  "key30": "5jzjLTKniRhVFEYPmz7nf3Azypakk7kdsSvES9p5xKc21EzYkNkER3AqSB2eq72zPnzPutQJ8hjh3B5gUXMDcbcM",
  "key31": "2FzJPDb2nkz5iKXhCutU438pRNqom7uUX8q3yh98qPgyvSzNmkczxTDUzKnehfs8rTDRuifLEEZeG8VHqFDBEme9",
  "key32": "35vqo8CvdQnV8SGqk2d6rMZGjJiZ4U9ymeYW5curp4VHZEeUnQiS3dzwREZUAYXkmv9H6HunLae74GErRYqiNBTX",
  "key33": "67D92CqR1VyJzbLLRkSMV4uGVa6wVtNH84CSX8sDu2PMU6z73hBseJjvcxAVqWGQGZmw6H1XyjqXRHGTr8kdjWh4"
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
