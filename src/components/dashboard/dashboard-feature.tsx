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
    "41qWKTmdJmpSxCy4MxyjhD9wbKuz8xwsYY1SREjPaekgYekFyX3Z8pfEr9CYhWvJsUuCGcbu611iTZwhsAMmz1yx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ngGYwKyTDWXTVxfaw3Fh655NuEXbfKTYciVQmqgemtcqLqnWsgAMrnFRBQX2wWrakmTYVzwtcEjAS4kRDJAiGqf",
  "key1": "3HmbSKmLMDpeJLgxfay2H1Zbp4uj9M6cyEGcNhs92cVFPY1RcJn8xqhpsZjb71A3BQFTVw2FAiGyYUXYyV9zsVKz",
  "key2": "48zYyxC22jMGaqtMMgwJfiKBFMhPBjhiz8cjBh57cbrA6zjTMb8htVDLfLFiSJmjT4azX6GWuSkqaaHd9x26QnqW",
  "key3": "54ELXSsjA2aWtSZ3JhpSe6eygFHqQWvH3774NfUmkzshYc9C4degQHvxnmmUWoUdzR2qGHr95TemLjgsatGkLJRA",
  "key4": "4BtrPeCGbCuAdxk4crHAJeL5Ei4c6cXsJoCLMdVwzZ7YiEhEhFnrKrSoZcBkGyH1SZmmVZQ47bfM1qFTe52726UE",
  "key5": "2hcfNhT3YmoCY4KQNkM3m6Kucp6aqfHABGvQEPKvPJFvzugDMYEsBWSYSkLaN5QEipsEokpYF2oxUBRKgbvRAhM9",
  "key6": "PqP9V7eET2yFq4wbfNwSir17R32NePNCovrgZcRDoretjDfSEu7EjyJME7R4vg7kCUvNt2TXyUSP3dp2jr7kHnG",
  "key7": "3DDtF9p8iRbiiYFYkcZAdE18Zz43HDuy7vcLM38xejF9vGeDE4rZwTVP8USkGreomiJMrSgjPoFWBnUUXiG3kftT",
  "key8": "4tB3vAMd7rCqoJKheFEgzxV93NeQXktp8FFn5GUV3Wh5e4CDMV8ZXy8uTuXiX5it3WV7LJPRoLHeCHNNmLpwHk6v",
  "key9": "65jNBjFXmGL1yU6cbj891bf7sHrQ6dXGb75HX4akkMwsoGvR7mWTK2UDTQ2xTxBDMDgLF9n8d2G9sGnwRFDksmfH",
  "key10": "454Y6jqkzhRhmMBLLtTuAJvKrHcU8sbBH8U5RRbKeKTddksMGgMr5Yb7xWfNUguXviBfs8YH9eaurKPaTj8Baw6e",
  "key11": "3b5GGYZk6SBTqeJAjrLzuVkS2fTufZXD7vmuZRvW1PruJkb96wkFvNoqzdvpfFE5hRvwMW9HDYs1ranTQULHUvmM",
  "key12": "gB6vWrHP9XsudPZvVirueahiPqTLGXXYz8tWcZN9QXTvY32ZcfoyqGEw6xxXYmp5zLPpmdygUx3QcA9Pj3ekShV",
  "key13": "2JbH9gL9Crm5qJEnzSAbe2w221syTfp3AXeXuSP4T5UwMvuh14zgN3yCGot6DCMn3CipKo5jScfHVkdXLcXuTo4V",
  "key14": "tmt6D8GEXD366j2UaYoDQdVKh4xikuvqr2mrNeSqbvDyzbVroPtKAd433X4NWJccDM7cD9YyXwj83K3ZYruDttC",
  "key15": "2yUJ93YbNp8GudRDAfGD8FGgTjdLneey7BVSsQRcBwRfPkqJHsSahRiYF2nB7YJ7upUTcD8AUS4wwR4gnDfpUyrY",
  "key16": "5ApMUCyiRaqcvbMJcesaCRBcQUbTwb5BMdpZxzX88eZqtKPExPY66Fe3agfVAEkD3YGM5CsFyNcFS7V1Wy2JcQzo",
  "key17": "3mfDaboG2yBbUHvoGBXDeUmVj77WDWcSszF9Lg1AUhehKhpkNfyxdS1XsyZTpu3ZiunkGZmq1vwM3dN4ytM3teY8",
  "key18": "3axNAhCf4KUchApqNpju2LZXoRxBpVfD8obQyJ2Mu7gjSqA6ckoAz2MnAx8QNDMPt4k4Uqp3zCrtG5n1XEWcEeGH",
  "key19": "MkE4YNahdS3X61EcnWJEQkMMpA4XLhjtAk2FVcMJMLL8EijaNv5qhAub6FaDve7xfSHLj2ZXoXrrjjgfqUWRPnc",
  "key20": "3dhk2NjkGsWMTVtxiT2CAoTfiaJHbBDKTKtyFRzNq4TRGFK5VyUcK7N1XCAsDwRSqYADxyYKGouKb6nCy4SrEBrR",
  "key21": "5BkqiX4o5stMEPEJEEEavRbWTqrU84czs82oFoEGkeJ4wek4pQrYPQdkVmuNffTK1BQYCoJc5zkzGCG6Mk2gD4qG",
  "key22": "2T7jM5CxnciWcxiret6rsT542eEiFm7gzU3F8wjpb5U2DVGzBw5QYimiZ4SGFvMxy4dFzjVAF1sFExZKKsnQ7s8P",
  "key23": "3W4hCjqSB7oha5YciNomAxogbKLNBMqkbNd2gkyTXWUBrufFWM16GLPvRWYnndCUMifTLdSRRg9vbMgvFbbRtaRB",
  "key24": "cPweCyBD6fwPZpbwK1fwE8hvPkymrxzTC4npEUk56hHknX4BKKS3VSwEgRpPDQrt2ANzJ2ERKuszkqRmSo7CABx",
  "key25": "CdqsyS7wxcmWbfuKLm3gJK1znFW4z6W66k8kJd8ffH658u1MdKie7qDPC3wHVqW8HQiokqqJQwFzPv3fP5v7VKM",
  "key26": "3hBm9bjzDfjMJp36ycDyHT5GA1RbRMhq2kFrWcLcGrWn78eaPSMoh4KV5eRgbEwtjd4D4Hamyi9bze8dxnsuhrcp"
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
