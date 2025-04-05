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
    "232L85pj6jE6e3zbkZJ76iH7nZBhTLSe2qWaewAUvSJBiFiizQZNZFWMkbCm9FoKVqidMWBdkV49GgDoAnS5wGCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tTKng3raLfsuc5QcWfgKZeubBFihvtNLkAJB3AqY4WaKDvMD6uArUQRUFFKGZTCG4WfwTR9RRHAnnffjR6ys29B",
  "key1": "5uG7Mh1EneUFcqpBTCmSmN23cFJSjg7xSqj9gWA6EbEzuHzXWU51cfbPj8Y9jEpNthnEjfk1H5JsNWNpGWq42gLw",
  "key2": "5fNpEnyg6suL49iNb3dbhDkCkz8tpEWCphTPU7uRAkGZ2T56t1sQcaQMCvWtBqQJyT8cFMiEEUck19LGEK28AacG",
  "key3": "iN13bVy4wCpX56SZjd8Mps4yPEsh4vyZ4FcFVDZBjT29K66b5RtwXnJhKsDgUrFoUQ8c6VJxotHVZAoCFKk8hJy",
  "key4": "vnoDEMg12iA9V48bfxaHCXMyqbX8KG6as3xX1UY3Ut3uspEKPVkg3rcXHmWB3VTiLPEXoUavTdWWdS3jcHMvjS4",
  "key5": "21EgfJHMe1rUPujQJqBobYqn8z6HqZgRtvjRSTMDjEu5ir1bpSUwph6qMtF7i4JXJuSBaBgCCPnSttxFjCTME9r7",
  "key6": "26EJY7FRAdDr9aSYdES1h9MsSrNnPRTzvZJpEifu875xFRdEEaSWqhXu5sjeHEQSy1sH8twt8rR3yBcJhjPwxXL3",
  "key7": "4jCCfgH1BbBMcuTuSiFuPDeTdevuVpas87x2g68JRY1reHrvaFooS5yDNrR9wkZjJeq92pE4CoBCReFZ4BkngLhX",
  "key8": "QTZHpWD1qc59W61T932YyJvyHeYie4kxDJ94v3fpoA9PkuvHbZTBrKjpUUGRdGQqJvGBU2SwpoEQ1VWjBkCxEZi",
  "key9": "2iSL8KsQACy7WyW11JR6613bzUq8CsQ4oFXwXh9MTSK3ijyHEd4ipr4gu2okPRcheo1BWoLLnMnxCaWRvfALavPn",
  "key10": "2jVqGC6XquQueT7TUVvaDLmZZ3ytXjBEovgJ361mw1pB58AzYBiUjfQ29d9JozYaRBvMDFCmTFAnQ4TbcNK7ZPkj",
  "key11": "3fsiGmopRnLc9XNwF4uFjzpbYYBk7pb7ZtKveZe97NaczDSep1csQVZ1FWuGvdiyjbwZGknAQGQ6Tei7fUfgU68R",
  "key12": "5Ye1MRmzAPg4cCQJ6myRDkK493THA8jEfhgdpbF2tfDhrBqP4bq58t8sknn2XUY2waRdr3qzzsG4pi6bworCrqHM",
  "key13": "4sUJPwsLZVmXKYTagnytCftazFTpH6PcJpgFhxiSyz7tKheVNcQgRcWPCihAtQCVU8yratZjTFcAhbDFeH5R1hW7",
  "key14": "3LEwG6HcXxCGFHEHB5CXtrvSDVmQBTppWayK7X4fRJUG253FLTR7MXqo64iN2YK1qbo4xGXnV2ydUbj8Grc5coJN",
  "key15": "21xQ7X8Zd1Puy3BBSa3Fx66nvbqNEYMxUr3pURxvpb2sEfdbhwA4YLTJUY2eX5PS27tm82c3QQYZxW5inhVWAPEC",
  "key16": "4ppTmRLMF5Et3mTEqWrpzkVCjGkBwSvXiiQkVMMyzDKmqRVS34gSAX4fx9SQix1CHGCdz41iBkH6ssZxDgXd5hWf",
  "key17": "3VZNshuujVmF5qj9egErfV8wZyLqTXkm9TfSATmKPVWHoBDLLoxtien7fUkdj26oXASYCRQcEpNnR7f5Y3d5nWpo",
  "key18": "3a44L2pgQ5m8hYCkLA1aF15EpzxboZrwVR5hj5E9USE4C2uJFoyYdLZeA3bFxq5DGs4ko2xrq5tZhYZTkGdc58NB",
  "key19": "2FkgnPz5vEEENoz7rasERE5C6k4ZVRyMkLwiwJC2KV5iqQBYZjxgjk3r9ajFyxksSxNqd1S3sMbNdVYCdQ73FqKA",
  "key20": "5CrMffJJKaiNB1QenjMmpqAgEQEbLQcEWo2xUbTVc331CN6JPQryAegvQGkjkLfYPkrTgmseQZRJ5EAaVahXnkUj",
  "key21": "231n7abPuqL8r52XuUeJZG3DtJkkCCcYbwia2kfDYWgbChfEod9kTinFW799rANyBtH4SQMmaSHPxr3AhPNaDQiW",
  "key22": "3Ym1ARwsriJyRoWrhotsQfwm2y5DajezMNjrokUSUCbMsCjZ9e9c1iQqxcVam9qE7k5tD86Qs3DRT2uwjYkqiQoq",
  "key23": "2wJ3s1uYRznwfx6N15898fsqufc5cVs9gP9Ja8bSbkUm6DGQK21d2AkP5Mqcx3deNEJ2FcvrUn5BmkcFnsL1kScm",
  "key24": "2eBuZi5ig1ueJqtgihF6MhE5H1toXP7gRbVQSHQyvhA12DunuhuTehzkaXP2J7pBKqQkdhc25v3r5kRjjNgxpkpx",
  "key25": "5uCP98SjVtbGHvg3ygPcB9nhhNHj6Pn5NBPijtCYnum7df96mQd1cvhHcQ9jmih22TKApTZGtmCuicXZdp7LemNq",
  "key26": "4xiUqzm5w3mgX8mWrSCm1hgP9Jmiqm4NXYKoinrs3pQboniNK17UyCeCMJwRd5UC8dpwpEHDWTMZeLoc8MB317PM",
  "key27": "2ErC9cxiu1fofuXXtyqsRxysTAaVbSAymq4TkbNqzGj8srs7WxpV966jRy9JaBL7KqhPqhWHKTAyJzJEXgaVaBz2",
  "key28": "pwBdvrzeCxr239YKxx9YbM3QkbQo8p1sZ2MfWf4aWRecSwuoRtFDJyKw5ifwVguUrta9JSMbymui1UNTkmu4sau",
  "key29": "2xKosBpGqwtHNkbUfMbjruC1ZEjtih7EJJg44Enetzajvas87wvrbtm8E5JkmHZWBEuRkX79TGjFhVDzWCbCMEoG",
  "key30": "126tXBinS6uqWBDsfBEwbeQf9iqAXZdWQ6XLdxy1u5B1aPkm3nDwU8tnNBcdL2SZn3coDuVb9F425Zq1dSHXUmF6",
  "key31": "5sVn9oLA8FvYQQcHtGcpV7HnoYAdfJA8ASYXGm1PJ4piqsv4EpEDrnuNLpTAc8d3LvDyN23DC3ZaPFT5Bt4xRWh5",
  "key32": "t9PKcahCNUPnt9D9rZx4AqxwQVULGdJkZv9JdkhtZwbiujQuXqV1SxJhqaXvQdxxz5epSxpgqwfeaZ6vSczXeEu",
  "key33": "5uNZVWqGShAwbY9dLacTzy9ivD5QmXzevZJ8zDRFQXnHdFHr3SuhHVYhh9h4pCn3XZnczHDuENf6tULSZjtbdaCH",
  "key34": "5ZLNTbA1N4YzLURNquEKhvLP5JkYjQEdG1F6b1v4MShUNbnZKzBG1rtkJPyDPPo8f3hKRgck9p8a1tj9cxJjQ5AE",
  "key35": "2md7nc6jTu2BNzruJV7rtjs5VJoH7kphu3AxvbmdCsjzK96pMBWDXu9jzznNrmkYfoWfCf79yPysYKsuVNM2rd4M",
  "key36": "2YxeQLRw4w9UnrHaRq52EjemL4XZv3GKiyATQ4Gbi4rV8ZZtwYmA47g16SdCgiF1SPg3xNyVM3cpWtnt6EWxfHBU",
  "key37": "5pGYHKRtyQ1sfYBc8dBsL7knFTQsvNBD54N3HTWpG8B55XW6RcBL8B5fQG5gggTrs8rCchXHWZ2MD2iNawboiRaT",
  "key38": "5BDTjr83nrmawudFiWFDjAQ7JnHbjRscYatDkDv79gxDmNMp4A5uXJ4WUR3bVkvRRh6DruikBfaycNVT7Z6jPQn8",
  "key39": "3PMAKfHgc69QUgPijVk6FoLkAEg6drzAbAU8JwTqsRNSM5dhtSMAF7LsMCkaC375n2DTrukMgrskBcnKb6YYVeHf",
  "key40": "5wos6WXr4jmkfNJ3f8LihCBcPPLW39SPnnGB9xYmbHMVHZSs4VoRhCQXwN7xweG9AvWGdxPx6Bir43a3TPCJaap9"
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
