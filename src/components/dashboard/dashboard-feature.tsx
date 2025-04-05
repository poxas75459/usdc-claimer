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
    "52BQoYULu1d2m2ufLEpawUQyGSnsCxVJsUhHSiHEaYbR15TCT2gn14fZVTHbyT1V6n9PAZ4TDrHerNtQzHFBCCaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mMAiXqWbFa9kGMnU59PUZdYbUP1fQzFBEZwRTb3UUr1uzYznmeeZ9EY7BSUYo3f1PtiGhhKH9FVJxtFpXhVe4BM",
  "key1": "665rE98yGfA9cZp26ti5gHneekQmN2XqQd8kifrgcBKFHUCjeRN1fYxqDcHJoX3n6VTr3KXxQVydaYKpN75DcZQX",
  "key2": "62r5jNoVVgeuAVpLQpELfFxCzzTaX5oKVXNA6kXag6VWwVXqMQ4GEayPyi5jgEwh9wUNoLXp369AcFazv3fQextz",
  "key3": "2BQUra3g46FqF3po7ZFBgcRX42tu2BYvsg9FASDVbHVS2aKhqRENKe7mE7Bne3fu36LDFrvgBYU4f2kAPNPYWeh",
  "key4": "1DmTzhGqkrGXsir5G4UfJ4Th3uXBJoZw9dN2z6LEUTDKEmMfmFpfzNGt3bdSWMJvmcSKRZ7CPg48dJ98UYL5KTe",
  "key5": "3jQotjXQwypSUvW7Gw611uJxRKvR34Wa6bGUoSjMYZMToNsx76G5xmxXPYE1rVsb2MW9nRRxsvEQnfMHZjvyr4Jw",
  "key6": "2m6475gbWsCcpH2WQUPRxLcDCYNrKKwNQsCx7KaE3j6eo99RaEG89fZFsKv6frM15T4dAfo3xQELqJFpockLXUQv",
  "key7": "2aLLnHLJChzHsE7uop8AphrU25DqLfhQGmAVLQiXwJ5FSMt17oL3L4vPfaJmZJn5YEk4M4yFWmYQbmpe7yKMLAdT",
  "key8": "646PYgRdABE4FLYnd9cQqJMSBxZhc52CVjDkM7jCSdiCQuzBVFmVzxpWpAvffu3YMyB2XqEWnhhk24GgQ3iGNJ8u",
  "key9": "3Cdm56GPQHJ7JCHF8jSZsuNFgtARELnSaqcA5EA3GQReiZ3DzJwewv3LpoVm7Gjua3JZTkrUZNqKk5iczSdX7mJN",
  "key10": "43RkBehaDEFs151pgxio6Pha26B4SewoZKsxor6GbEm5CRhbSRK3SAAmBJXTC3AvPRNf1D9LJV5Fqhkonzv9oUNd",
  "key11": "4M3iTEb3N6HRGnQa2mD3iDSD4ujtcutvJzq2qN8aSQGFpvBKgt1jPLZHD5HZERWkmJSZ1u9GmWgbQnaSYZQNjQRj",
  "key12": "2tU3aNhXRcSCdw7SksKUsn6Axik3f3m34c9g3HdGfz1HdPMpu7W9Xpy3MSd427fEu7JPxytYhjSgyyLbbAXb66LJ",
  "key13": "R4U9p3GgP7Gbm71zsb9XEsARfRqgz1Tb19urEeCUadyGgYmqsneJN6mmLBkEoN9drZG3gznJWgeKXYnzNE9shWX",
  "key14": "4gybzMkYFQCgB9fHW3CxFULoSN5TsFKcR7GfaLpjEvn6V3dY9MZsjv31HTvoEvNANZgBT3mgqWeokCdz8dDS8NLF",
  "key15": "25s78bnVaN4qEQ3GUZj3UDgQZ44C4KGLxV5EH2Rqh3ywp1Yvro3KWHiQdHyNm4PeuxUr1vdaYtPZp3ZNDqrCVPAa",
  "key16": "59FM1GacVd7WW7wESVyjzkxwP6w2ee5ZC2DayAN85YLW6virt5x6impdB8hSfjmH4Amv16VVDYsE4n9RRoHuV3DV",
  "key17": "FuqrCV3rTABLHeFSrAm5AVEQ5EL1VCFe9zKtkNTCRZzecvETBdDnsymnmBGTHPCtSd1z3XNbMXrhhP2md7u35FL",
  "key18": "3EcWjk2BsS8w1Fdf5djqgZoHw4aDcKj4YZTrNDHvP3HDmv4WihXYwiFo8EtubWbcPui8ctaPU434mmdYVzPX8Bbm",
  "key19": "3VY4dmyhKtyhDnagSkpLKgoXsHQeYfHCXGSV9HT68nn8hSGHJpg5PczEFDHtpUk7nZHAC3keHtLzbmdV4C3kxVv3",
  "key20": "p4qtx2yiY9ui8ZSxurDz9sgSKBEuLxyY4WAuNdjvomRppxF9FPAHEsUCuJA7WF1UYoNvBpcDBKkiFtg8mnpkbS1",
  "key21": "2MeyTmeeFBJ9rByKsbSzfEqQzyaTGH6zv8azj5AH7N14WjK8E2p8NvFSVeY7LwFmdX92JvWQggRAZqSfN87WCSyG",
  "key22": "hGw8XLBSkfYRaofHTo2ZnUAmR5keqWTmNLHaoNzQ22hXEQ3N3RsWtL4BxwAkoJ7QTkJCLeQ1TcdsFWEmyfaNHir",
  "key23": "4GpYyCdqqVUm3C2rAeGUCmiySSFVMynJGy6Y6zyPFxc3xQqxKxme1VAgUkySvTobRsYQfTQtGt6MPviEqD99iUtE",
  "key24": "2jairfyPK7H34Bg2PLX7E1sB4a5gneti8ApNDwFR1EmE857W7WdRssw5ArzxTv5V1x4RmffxzgP6sByXWxUaLyj4",
  "key25": "UmqbeihFhTgHsr14qU8WL2LEEMtyBfRoRb3JYzPEM1NxweAnVxmXvtaj1ARVgAWfo9hMho12VnMSteBYyj9pvhk",
  "key26": "3FpqPCPZVpoVXUjmR4LTLZ7dxjEbvsJJvhCZACaMcPim9jBkfuUPYnbgakmTyAtdhrgrvk6XcUtxXuMzt9cowEiC",
  "key27": "3cqBL3A7tcBRafKguiSxdFthjmqfQwe5jxkzpenJtt3AFGuWzWF21sTq7Vyh2tBNzoFK1b5cSwhbDYts4YEVeSp",
  "key28": "3k8tLfhcTXgVtAgtgUpJZvhT2wzQ4ScmJKzuGwZLJtwzDw4diZw51BRTEUD9VGxsE1mMXX5pFddXAuBnFmzC13tH",
  "key29": "H3ocEptauWD5XiLgaJo3gDQvqFmrv7REjAsefaWimB2pzRvWRosFoF75T5RjST2xGacdikEcPEQ5NnfkZnqYrvq",
  "key30": "3XtkTFtvLjN71i8h656vJZDzZhQvm3ew9zJgeEnLYn5xsJ4SQsxGSWK2dqCnUVQ9CmJjT9YrG1XSyGgAFAhWJcet",
  "key31": "3VCcUfZjdp1ZB49eHWgp3kfmuDcH2rLL8Kz3xcZEJQj7Anocdt8YJjvntsneWG37hsk8NjmHXYcxCaT72UykbZfm",
  "key32": "B7okLCJ5TtKHYVJwUGwDhfWwCzmvmDi7MDFbe7SFooMNERXo5SPQJbvXMXXgmZqHPRbkdZF5qd33tG7CbTmHHsT",
  "key33": "STufmSSFLZXt8StZmXQw71WXYwznfQyc5ZeUdLJHBdUgswHc9LvdyAiexueMDaUvK8KVXRSRQCymioWY4wxVMPh",
  "key34": "5T7GUmAuDL6ogq4psTGV1qJUSPo6ZowA3V9e1geZAd8b5dGQGoSeyWcPutaSBufLN8cTkphpjLnyVps1ivHx9vcQ",
  "key35": "3kLv6dS8QjUbgFe4aMDZ4rFXhiBAmtkFFo9faRkinXVeDF4fjfUTJKidjrLrwp9rz5WpXXDz9zQoK8nZN98emqAt",
  "key36": "5ZA8tJAQEVVhRJvS8h5YGfriKdvPagGeLefw17VvuLG3MajzgMs5QKUgPGpQ3YC3FnRZ2W9LvfAfBERzWH6ta38N",
  "key37": "om3yBvGdv2YH6pKPXhu1BviGhehXkPFuZ5BHVi9UidAUZVqkb7Jiu73Scy6H3SR1LDVeeBx8gj136QdCf1ePjZa",
  "key38": "5dVkYFjyGDntMarRzSAUiqGBQWNnPP5tK9ovPdSxn6bVJXVDojGTc5AbfYwJkwMaBDspPuVFVpzP1kji159ftWRv",
  "key39": "2g8fbcqzxeEt3tuLTtAqh3zbKTx4ZcSdrLJuzdmoEgmzLhHgbWfXmsCJBnMYWSab1wVhL9g3fj7mmwYMEvzVdLEo"
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
