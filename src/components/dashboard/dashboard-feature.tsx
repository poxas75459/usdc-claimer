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
    "cFxK12B69XQfF9oYZkV2zQHjcuPKipVCWVuDS1jhfqDsmkA9ErqdURHyjPCWvLdimjNRBibvDxByv5syGPqd51T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VjZRGmJ9heaUbNSBnomi3TsjkkjZw28RgW53t6WmVcJ37GwBC3QyxN14TpehsZ4ZZc1LVZc3siUBmpvzvZhsuED",
  "key1": "3HCcH81y1585sJJMR4jkeuHchY5E1QuiATnxSJxAgj1rS7i36EwxVvW5ZEwQ7tVV16miuj9XUxrf2XNwn8TQWZYw",
  "key2": "4hPwrA4bMD5e7rDWKHNAiy9sQqNcbxnxqAzaSmNQJJyEtqdriLFFwBYgsH6xb9UssQiiLMs5d9NN7qBjizQfe5P5",
  "key3": "5M1k3YYbBEAPoZEoxdjqKC2MVeroYXMTDtvxeL1q9FQhKyL1H7k5p4Ua321zd1S5CDMvfwKfoU6EgaCBsEFd344J",
  "key4": "3AgqzuuvSBpQKDRKkEAMUWorFosyDVFfqp2gM1LrBmSYNrejaT5GkBepGZX84tPJhnjYy99EZ8VzNxwAMgJSuS95",
  "key5": "3DGhTo9efgihRer3iQdPg8RBBYBx2aWzjXaXPYvngWSPd2FQzEDC6c24vv58ZFgaSjzjSdpBZ8MpE4P8N9EcKyLK",
  "key6": "Qy1KSkipnTegSY21TVZCjXNiZUAG8QzsV57p3ZCfVhHkBThuN3BvamkTjpanQCnv85fPQToH1wXoHkmHuUbfrNQ",
  "key7": "5HqsYoQKgnag3B6vwyiyJSLQtmmU354QWXko5FTcurkBnNQTAzfoJhohJXnt5TypEHUZSnKZg3TsTdBDkfjFenzJ",
  "key8": "uVJ49wRrgikaYN4Cz17jnsVDyLxXY5GACwEUjdp6mQmEKdJazygRE7d2JGkUYBCHxTdyFQGsZV72baKBB5oYASq",
  "key9": "5JzZW65rVh18eMWtVA5iZAnYEPP8DCnwBfjYMwU3gxiRtLpQkq4uX5riRja23K38SfHDrdU64XnDTBEE3YH9mmGh",
  "key10": "bLgtyVSyGgBRQcoWVMTvw6ZH65zhqU7Skt5sHA8nuyGxcib5RdPeP18pCZAK9W5KCkkjjvQ13J47NLJoy632bE3",
  "key11": "61xUvjz1DJoo8dCcAvPj81r9bZmdBV2yPMrn3X85VxzDmp465fD4EKMm2dSJHCNvu7GM4kqUTqNUkx3RPwBVaiKG",
  "key12": "5Bj9dtbymoRs41qgxP8j53pkpcQGzx1weCRLpY4hFzgr4zTBFxZMNudStsgPa34XWybsa4RtGzB9vdoSG5RxgZ6P",
  "key13": "47tSwK76hTiPBiqERZeBmGzcPxySsEA1ohdBos5WZdTLvEtoDAqZy1v36JhJpUAGpJkPUuc1ubmiWi86i9Et4fsF",
  "key14": "57htqLvUihN1RnC2diRhjuPDVaEua1xTudTfvE55tgHJrANcJ7cHM4KaxiwhW51Q1CDsBMdrXgNw2sRYHoqsatqY",
  "key15": "5Jc3mRPKBLbRCmYJJZBcNrvMubi9WeLb8b8kDNCoByPDDHikuVdEppk117Fw5NFE4AgcTGVQx9kc47PhmsW5Gb2J",
  "key16": "56MRoXxP3Ls2HEVHytfz9Jtu5PWs4QAFqntcgoKJhfRVhDoo8BabQp4JFgeC31x9C6LNYGhBcSsZZswnfDYNBHm7",
  "key17": "5NUZbY85CnEGvY47YHTAsjSZzWFwjJEfL5Z4pGz1VWGTS3fCgXoNi8ZYpzA5jxVRaEVUVcoTTjGd2854MDhW7FfB",
  "key18": "5jiVVCFL59B7NhD1oocS8hgbFEj44PQjggQ9PSqz2nicbsnenGhqHvp7BZpbExRPGq4ePJjg8wAgY6sen2Yu3jgf",
  "key19": "48yKyiUmqxzLicUsodZSWrgrEUzw8Tz5jEtwiJBqwJrYExPGTXcBegve3tDiuV4KEFPqDHxQmbGxZBESxbtCdmkA",
  "key20": "nGTdav4NNN1wDVpH1q97UWoH65DoQqjm1tPo5bi8bSrdQDWsg9WJRvFDvyCu7e5L7ek65R96WYUVrEh5hRxT5RM",
  "key21": "2bQjT5vc4T4NN7TkmxHVEDy7QKfSorPaCAMBqJTXkiFWt6UJghPjgbauUmA5uYunEbFVrSypejg1Fxji1VCJYSFD",
  "key22": "2BAN1LghfaSzJJ47T3mGhJCQYb8SJSmMhPZ1H7hiDjSatXgbhS6wciqLCU8FUmebMcdxRHTJ5gMekBkhop6LRHeg",
  "key23": "3snuRa6ryzejPbSats5eCyXDG268ZXXUQyMdQ4EgivPpobdRen2n191M47ZmSJJ5R9D3BV1UczTc9x81LV9mmbJD",
  "key24": "3iiiGopx4chth8ciLirNySmV9M6yQ9mrrc65PJyUpTtXF1bm85kBW22apQ3F3AMF9rZ8guw1RvGmDCCugkUbwZRR",
  "key25": "477RgQDAce2Z5iAJgtUVWqeCNddL9bRLcL1c4MwyaNbauVim9inUMxTLr2EDB4ghUaZn7A8jouBidFs7g6xv55M8",
  "key26": "3hYfqiwBVdbppDgYsLWcGZeaQux68HaV1vNJ8AzWAt5U2P1DKhNK6xUimHfTmmb9P914opnHNZ5owsn37rX3pnu1",
  "key27": "oSWKJAUh7eHUfKJL22bLMLpkk2Wx32nBTsypUngpUVaSMzuBtyWF2Q1bNnpPwRcjM46eBrTJSJJrxm4tsnkvxFv",
  "key28": "3596mYeoSR42yFuFSu4kU6FA86SR9LcL5d6z2M2MoucTBDBYD2z7oggjg1zKmXEsqv5UefZk6rTmWZCNcCK8HBHF",
  "key29": "4HwcvC2gfjyesZd3odEezMYgBxHhexPE3JoQ3pW9Noi54PAvrvufRmXVXz3JE4sbCQmQXvHgFjg9ha7Nv1ykr1F9",
  "key30": "5uUnaSBWVoDhyFDnA8KTFypJPCmQbKBYtay2inG1og2ZcFKKquCAgx4d3MtxSP7Tpmw8m8RQzRyg56J35nK9JLKX",
  "key31": "3XgQ4HbiTTriNhgqgFs22JYse9vYBFDvDjVtEzEdncNp6zvYsCgNELaT4s65JztycSXnUnaucZFhj1DfciUvMTF3",
  "key32": "3dfNM54ZTVE1xhL84SpQDxitqEEALmXv42WnFECEewSCUoWJq5MHsZ5QsG9gyYmB9n8vthD2SqXhQJZ36LYv58KK"
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
