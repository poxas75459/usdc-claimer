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
    "XBPHorkbHcVpieS1JYYH4DuUbD5D66kLoAiwjNCUjogcYvwP4cZEp8FQBHnrhZedwGW7pUHJJgarvvZwFHUwwTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RypPLdDxoASKV5ThgHABcNwz6tS12hwyTgSxGGPTc413VMjMLjinRLHV88SXpJw6JxC39FCXzVtsjWENZNexe95",
  "key1": "36rETEPrtp24VeXT5WUDRrhoaxaYXmBQeSdmoXuMJqRs3dmGvxQPb4Xgc7KPNNVj7XTK1hU57wYj8mmv67wgyx4F",
  "key2": "4XX4MSiJqon1uD8ZC8ibfPpxuiVJc7SEs7W4wrR8CQJFWgs48ziQNkQwDM3tcqvgsE18Kigq4PXZK5MBTdeDWdX1",
  "key3": "5AujhgnS1BoAMkg2aMJsoh5emB8mqTmPaikgFdhqrneREPGkyV9TaEtndofMY2vhKJ4fMREZHB8FLY1LsGbwApDy",
  "key4": "4pWEYHs2beyRhQd4KJpeDmCKZi2WJpqLZV7wYoDMavDLoKd9M3EyLAhR8FDAQv7c4Shmwr3MB4cBi2by28rjSxhL",
  "key5": "2kdrFyRcXu4joYRRWucMmUBhXU4N7hNovB9HhBJVA4s3yQxKyyPVSovb2sHDRaFLCx3GFv1bK8WptQfvXUTfGcvD",
  "key6": "3W3Us98EfLNLhdogUJFhqmUctP6UGRaYsyZLZxkGkuVAtveAdHotSnUdAAam3TqyVJXvD9jNva4Smtjc2XJBxaea",
  "key7": "59pZdtTzDuFMf85M1mzJadbBv3KAR3851k8hdzZej6s4v9Tzj31ENmc426PFi2EUzjXneR9jK1z1umAAWohch6Vp",
  "key8": "3TZjDEcj5hDG3cMMd966rdj231Q6m8iN5nRqoV6Zf9ZAVH6uWN4kCpgRGNi451MCsRMcLNrhkxoX9iNn9W2Z2DNt",
  "key9": "5aqxEfCWubsHic1R7d1wq3dtuCeZQVNPTd7XrHWRpedw8LhtVE1bv7pPT2nEvCmwRY5nnAiGFd4fJuVgAKmvXqeX",
  "key10": "3b9vNbHHfmpxpGPxZKcoE5pMYFGy2eGetWsKFMqCRqyhb4HfMZPUop5G8j14D2HDbDzNhFgCm9WxntvAJypd9MAQ",
  "key11": "5SnUS8KgXtMLSfYaJwVRWVVBoa2UCDiEairhoxtVh7xupSfbxXc4Ggyian3Qat3NotXMmwGqVhiNj2X8G8BhCm1p",
  "key12": "4M7NHDdMUy7SvHNBGkwH8MXw7rmTQJLVhP12oPLktHD4d4rvQr6sAwbVZytF6JjNXXSxvhHrGJqPE66ZANqnEG3B",
  "key13": "67DedhhjgzrWhwj3pdeMTSANcdcGp3Yp2dDrmgCNXRs7TPFNEPf6181pF71DvbyzVAL9JQXKpkCQ6V4qRQgbmamN",
  "key14": "5xwZhRBZj1ffJDyX2NKJUT8LYShbVe5ZC1YVo7KakzdqJhF4xkFMEni7DumveD4xDfBhGaMYnRAk11qVo34uy6tY",
  "key15": "3CTpc6g1DXH8L2MFbqd4bH7Yeo7Ta5MEhWqnW37gMTBF6j4SDL3d2NdgVEiv2UB83iyEDbVotEkWjqQrgGpNRYwp",
  "key16": "2YLLzfJPLiMVtNQTZv9QhNAzWzrvxst7fpJoSifa3TcceNim5L6A5SfBnQHoxFB7eo8typ6sNH4f6TG16G3BCcny",
  "key17": "3Fk9gqgrjR9kUD6D9zqXvApbCL6xLG7QLAmUVda5yTnX1zVRPPAzGPe41VMJ9V8LfcNtqzNZ6cMoYQ6gzHCjkuu3",
  "key18": "58fzFt6WqHd1hqtsTzff9V8n2o4LakmDK4GaDVKQnjLX32zFjtE6uHJmNTqbU1WxCZnMZJWCHysWH8iduvmD9Y31",
  "key19": "35zeBXHw1Q7Qkw7JZfyA8rs3DPQzoru2LJ15mTyP7wt3iBwH7VkvVvs5R8LEYtBfra8MMs6Jxj7LZQofMhedXofE",
  "key20": "5m3BYSkc114BuLsoVDRVrbWCf2MeFCJ9Wr3DjnA2WzczBXxvjoZxcoZ6PfTgRFoidkwRENZdGwoeUD3V1JPudR2Q",
  "key21": "sfjxDHeb8W6os3uRqG7XBytgi4RAUqcF9qPqpCU4xf9j5i3fCTnqtfjxaLgCzg9NWznbag77JRhd5pHLCeDvSJH",
  "key22": "5mV3MgyoAPBEQNJe6ctfyK4dRedRg2VU5haUD9nxmVRScawzorw2mkKACkTJpSPCcqqhRvstxNv68YBUhTefJAPS",
  "key23": "cD3kgxS625z9mCe9Frg7TtJtJSkBp9M3t5B3zG5uZus4SxcNSGdwpziXfJ93wYvd9LnJYSAsy9hrVBRYTsrk8Q6",
  "key24": "5jwESjAZagZEAUmCPR3zTYjZKdZp1PLhnCJMJ694Y7HZTkMwfRevN7G6qSHK2adeSBkWnryrvhLpgZ5A45AiKMK3",
  "key25": "2uU1RRi3gqFHs87xhN5CixWRUoYAfpJrBj4pt7wnkmsgqeXEPc4VLDJgPefTBF8BdBnvNnKwoedZaEwEZW7q1UQw",
  "key26": "2fd4gShTEUbNzUUHS2DBhF7irHMHQNUS3zqrntWqqKC6cmT2gRrgKGeswmShPJ9pzjjpQ4fcSD6JZrgU6Spzor22",
  "key27": "4PCrNoVfEiQGCV1MJKyaPzBhGxR3YiQZw5rD2SVzgva6cevuDJPsgFhdrbQuYB7fgPRntu7ugGhb2ZSwzrRPMpoa",
  "key28": "4f4mWZyH9BUGiydkSjSdpuESkBCNvJucufY8aQHP8XAduSd2v8HkmQLZdCVWXjgjf7cg7XgbQHgwB74xtrg4TWVU",
  "key29": "3Q5bMXNqDRnHYo2DuDaNS8STLsUcZMUrFgv8hDDf75fv8GJBGV5ZQYEe7dqAsL1nizBtNptPwDNjhRqvz2CGd4SW",
  "key30": "5AxciT5BpZy99Crt8RzP1nhufCgrESV7VBnctxg18TzPccVSeiH6tCHg9oHAyfaEgdCBQPHRpFpzuLLvfmaHQkWN",
  "key31": "3bn81fK4ZcnZzv9D7UQdX8CWXB1sASnkoUf5iwuuZwUq8DtwBENW5Eez7jVNxsXBbZiF3gLtxhLEKR7GBwihLkA1",
  "key32": "2ZtdUJPR9Arih5vRC21WA4QSsDcBR62eYiqvu2KhLwr74CeuErsUuFm57kDJDmVyEaSMFiG734ebtx6VMYH1NMfh",
  "key33": "4E2tpkF6zUZaLNVpToy9RFiPkE5J3Bf1h9T6qjcKCDrSKvpmmAuXFRv5EuReU5fHEwGrCjYSuBeRC3Fok9Ex2z64",
  "key34": "2KqiD8dntgAkV4Jdkv4rfrAhsDvLbuRFvzMkV1WpVqASoPNZoRLrMDuvZbmMWzDKgc2FUVara2k41GkAW6zJPSfx",
  "key35": "xVCTDW5D9k44xShSPYEhjdeWNSz9t3RypVUVHMhqoT8ocWsDfvJA48YbWJ7qfbbs38oY12HmkPDWkXBJwMNwjPF",
  "key36": "4kNt9XAJrV1ssj8eC3xY9hw1zaKeSzmHKRKYti1AEdjqtsVceuSdeRV7fX9W6WRP7xraw8vFpdG1CmEBkxrQk7Nb",
  "key37": "464GhKZNqJdtqzjRUaf656o3EQ4t8WwgjaAGntHHhL65ZSuE58FFPV84vbfqBr4UX4NrM9oUgvy9H5qpyx5Pbeye",
  "key38": "5JC3Gu2tJ5VSpsrbV45GmXnNAPSw2oHdvgg7bmm42F6tK2ts9yczuiP7aD7XCAxZWsfgWCL6maw2cq9Regbp57Mo",
  "key39": "35HaMKSD3k565xQq9N858cxfJ5oMGxALF69TdZPSF2SFUPxzjrtPsNCAvpsnP7b9fcDtV1QjmAJACaMqzQ4KsjXW"
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
