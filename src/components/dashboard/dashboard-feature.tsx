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
    "t8HicpWcHdgczWzVrVFeB4C2jHY9yVgkrBrRqTJ93rxTVb94gAckAvBHXbbtduhYEK1ub9rnzh1xV1Y9vApkoMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wEpoDfJ2mquoUpKWNDWV5k8y7dqFwSfd2GWUeHaMY6TdXgAZpAStZ5JuNNNdDtNNg78zHtNE55AAqVCnZqegnHD",
  "key1": "5xmwChSiHnBr3WKqX1Z6tEEjziFimdHeKcMaBGuCCwuipDbCpP1BzSw9BWRLnWg2HupNQHoSZWGfKMtWJbo1GKvN",
  "key2": "5NqY3hDjfTck5aFF8E9UxoYgKSVxopHVm8yiz1BsAH2iAV7LTweAJeXNQRvGHXhKoPhSyzUEx2scfuecVjoGvVnf",
  "key3": "2Vc1qiQq1Ab2gCGodYxVwTpFwT45o7AXg3axo8tt372g6qhqxhdZzhQZEVQ3jpbnaYDhUEKG5EHtpjDBXPURJnWS",
  "key4": "3LssN6VBbxKrVqVLTGrTn38qpBGnfjemPNApbE3QRfBH1sTaogibDjx4UJyTDm66N3QpiVyD6sgCPoqEXUdCV6zo",
  "key5": "3ZDUnZArkjAxnLMD4T64tP27Huz3FY9fANy682K6KThCSenUj4U8oX3YdjDayzX6N8E8iidGM61249gNauteGkS8",
  "key6": "3UbcGqXcy4t3u3qdLMzcqMNPR1EYmJczUevYLTLVvfKnYQeXk4kXCRYiVhBDQS7PYoTzzvLEj5v2KLwhQ5giaYQr",
  "key7": "3FPVC3gwXkirWELqT3RT1qWWxYGEdseGjYf1cekaxfb8oGZx2NAV5niXxLNuFrUWTqja32m9MYhAE2kqdiJWJaen",
  "key8": "4MNK3GPSpDXHPUpNtjFnoiZXJsqr3ByiAwcRQFsXJyXn3cE8YL7jjjAxgaUR6yzvMRaCgYkceYyiNzWJwDxseoR4",
  "key9": "5CtpqC7gf5d4BvztSwFrQQmwXS1ewci89cfcBb5oVqNvMGe29B9kAe81j1gdNNPvJPJiw6C6P1weEUpYwrPDLoVa",
  "key10": "2fis6kCesAswc4A1tiD5jyFyXQ2BPy3eP3y1NifA7mDCLe9CoodUYzHotZsX9iavFaz7CNai8ZooFx4XmFj9bFvV",
  "key11": "2vnm9YF7hDBuTiDkNjkoa7YDUFZwFRqiNHrpjdzve49hbZVYWaLmARJ5gmAdbaydFRFUHQi5mhx7b7P3np5X6CRd",
  "key12": "2pRhAZJCKMs2LzHQE6ZYkAmtey6WsaWvfbwUKMCpCAT9LmZmC6tqD8apcgVksVeLU81g9a8p1kByFEhQZBEnYRSX",
  "key13": "aQ9w5XKLFY2GFvJduF16tKZPNWMMj6g4yLVd7MpG3oHLyaoJKwaiBemw6Sy89tSoq8tkGJbjA9E5b4y5ioPhNak",
  "key14": "2v7PoCJsaGqsh1HaXfQgCHnn4BTg4Crh21j9PHNWe95VYEoC1zo5iWD8KWTSKRkpxjAZnmGCAhnemLcLAPVZp5sT",
  "key15": "TCYT5Wp5Ua2gQzZJbmVgNGR14PFUqAvm6fPKcKPqv3Se21p8vg3DV2JxKwFuZgcB6DtRb6NZQtsKLiqvTrW8ikM",
  "key16": "2VYFft61kWTp5oq71FDmysSB6KCNiFbtvKZUrHwjQdf3ANCV8F78bBbkqEmvGYyoAARFWSJ2bGqw4wiPYv1GvVbB",
  "key17": "4N5EU663ycLjj2ydG1dGx5286AhXA1EHLKSfhMMVgBx21ZSXjbjmzsREzJ7mZ3V9jPpXQjauc7iuk6vzJ7XXfu8c",
  "key18": "2oYgsKxs2fSGaUjSFqK5wfwVX6136nqD8ZHBrxKqyRFyuCbs65eAhupuYFPcos2zdLSk8dRG9xphEHGeEUw9eePH",
  "key19": "tp1k6j6ThU5zV7q9AWazVDW2MxMueFPLjnYCr4A7nRdmwob99wXtWftLZUuJWfpty7MRcocQwpR1ppzzSEUCxb6",
  "key20": "3Zbt8KS2NynNz9oRXM4ktP5r85fnffnFHdfZyf3ZLr93U31UYGZJhRQaA9upmTddWykNax3FWoa4zgtTa4wdVyiy",
  "key21": "27Hj9mBqG7gqvdMGTnd6zrC5EcyN1VpnkHUnFg7Fd16Xg8Z7MjoRmVhtG43HL6CZHz4ErGzZ44KvSBXzUdG79ind",
  "key22": "Vt4JqUQrox4UH4pRUPVzLCiEgcdznze4aLMaTUF3SQccTxTBpiUPV1wR4hRVGNnpkgo7nUELx6seG7V9VqiC7X7",
  "key23": "X8hwxXGuwGh8M1Xxeye3RECMkKyCdgXsGw4sXsEZ93vEKcTypLVHjwg9q27iVdo48buphJknEaJLf44TD6Lo8Nn",
  "key24": "5EJnEAjAayJtS5sKjByJJcimtGYPaExUFT8UutCyo2tMWuXAkmkv6CywWKLxk9HaFzqLdeV8LHeJhGctxGp8sYXE",
  "key25": "5ERSJE2ADnqvtsYtw3mQPjLmNfHGnmKJA3Sh1hMTvaYtBd79SYUnYBAXUDSqX8kR3JeGzJupxBww27K3UWBXm4kV",
  "key26": "4TqyiSjDrn74G4YtVkZ9EFvTuE4WetEVdUhtznG46rwNFurL4B6FA6AKj5LbnB1648SrPXtrMF6bBHMXVwtJWHmw",
  "key27": "2KydJaw2LQUvoLqUvLbNZQyFSeJeNEdGtgaQXVjNoN3ZhPywvr2CtZwPA5zVCqdihdjwRTdGSLzKJSLrFuy3FdKE",
  "key28": "WWEXWNfmo95UthuSHTfQFKds3KxNUeCwP74ss1fN7zwsGpKxvKX9HDM33LakhAisUeEkS4P81FsjZHHLgwvt9ZR",
  "key29": "2oA3ak7JzYdzJmX7eg9XWv2bwPhiMNkSmm55tzxEP7NJfAHbiHUMcAAc1un8wZD2U48zL28cTyQSqdNYrFdKFUQR",
  "key30": "5LFkfFTqbeuZVJFZBp5ZsoqnYKx9y6qo8qwrY1UgNksoFYsvXG9PYmF6agYsrc6St1HzZURXHnLBfzDn17smhDHF",
  "key31": "26jbqyBTykbPio1Am2eqTSEgfSmdMQYugTHsge3fvSBAZZ1jnSjQongpmxGfiCq5Bnai7K7ckbccoRcGSgGMzANA",
  "key32": "82kkXbkPBmRMnwExynvhT8DHjNeVSgjEk2y7Mt8Hc6G5nQTE8FRYrgajpTkkJsSET6nkxVP6Kk3qgZYbpvG6yfF",
  "key33": "66G1G12VXfngWF3ywDDtGpvcsrf4GG5kep4TE6V7dmhBEZnJeahTD232UdZ8C5B2Jsqek9upw3nFTXmstCQ8XNZW",
  "key34": "5Cp822xycsseAT2yNV5ah3RvupaGya8YqjRxyWUF3efU9c3FX1okjnoDoHCUXWLuh1JwGJ1PmbGXrzwkMgu5AUSc",
  "key35": "3hCRDWZJFGTatcx6kwWPdeBDPbpn6NXErheWtZdnPyHn8gjPYKmkc4bX2K9PRmtwE1msr1Exi78HTT1Zaj3odqwE",
  "key36": "56gHf8t1hog2oSfUjfzKDWb3mCwrTpTxvfTZYTsCPX8KVRtVUZbQ3dYeA7x2JsxTGGuKzLiRfwWzPmZdDvqtKH38",
  "key37": "4vdWBZsfVczXhzxwiGCdkbFzE7sVetA2Z6e8MDwrqKy64p5Db9SDiHweFeG7tMzVbPL1PoRgTvSriG2efcgkr9WP",
  "key38": "2VVEvbM7ds99NXhgenXfq9aqVSctjRi3zvwWnKD4exkqKGt3KC4b6XJahqqtg77Skm65DYPYyh68g9bztQMBzJsT",
  "key39": "4VfzozEib1sMLDzT9QYqXfVvc2AGLX7kFA4VeLJsFB14VxBNmQuPz29VgDtRUwJCaEx5KrZsXZBzmRPCnq8AtA8j",
  "key40": "4Xesns8A4vgYfkQhSh5ovwqZa6Sr6R3CwpMb1WgEBRZH7pH6CY5afcCZ8Zxsm42tDZrsaBZX4jjuCt3mhRediqzg",
  "key41": "YThT15STi32RCHWo9M2SsHyYfkAN2Sc8jgCu2kVpZdYmNkroQt7yLpDFEgDNWPUi4R4qvAFMxoHgdKPsjXqQpDr",
  "key42": "49sVNFnqfnr6VnvDKDmhy4WuXYZXZWPa6Wu3LjzBe7wttXZkQRPU29ddqjJzb4SygYeSkwcAWoaa5GJx3h3TyenM"
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
