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
    "3BVEyyHdMuck7EpVsFJ2xVsXs1oeApYRbL1hSRWLFyYQB4ao1RUraHmHkqC4nmoTjgNvV2EwBmnPLu36a78pkfqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SVt25k7zsMAQgpEsFFjh6XzrkuiqtpsyLTrnvFpr4YHNECmWn92AsxDdrGBbohrfKbuH4t8327iZeDuHYqebDTp",
  "key1": "eMcG9REgv1DiC58DKtHTGUi9fGMgYKBVkV2tazbiJ3RcB8SpV7vKqGp5gyoTpKsb2yAPkR1RTi6nMNZFCxhwS1h",
  "key2": "CfCHoTXRd4LrrzvyD65r5vTUixokyjKUUf6k2M9tziAikDYT6SLJuyjv1ZXaUhHuFb7SgWuxCVAFynVvmPwPZhs",
  "key3": "52wkFzuVysxDkpyQjFL5wqNr5rdLfVemioJfe7PDPoaZc9NuqP7eRHvniGiDeUL14Bfn57GmkYp1mapGhfPJYUS2",
  "key4": "312CgVpEmFTCsisu2jqf8YAarXHV3KZDQ9vqWpSESiVkqXHksCyNUqSfUiNvE99FwduB43p8x27VunX6Q3GZyTiY",
  "key5": "24vSN1tZHNVSmFSpPfucUaVTPKgJiq3nvwfvFdsmwEoSnWC8wCQbocrK6ASmFZ1syeDpPeCfLHGwxtuD1jLAjEPM",
  "key6": "2CBVbZeFC2zdzB92sdY98vAt54NfW3rrtGSudK2wftXTyDiFai3QVw52tDgf11Qf6eEAgk2Aw6MHJXPwVZAXfwXz",
  "key7": "3AwZGwjTqNVGqP45eHthSdFi4wJfJAkLQs9Ryq1ioHcsvgzfsqSnP5Znc6FQmaFgX9RwJyYK9syt1fnNdymKgZbz",
  "key8": "rYF9gu9PNivx2RMTGsNHBAv7nN5SYoxUHXkQYJFju6wMm52N9832c58jK11RtA9ScZoy1tfCKF9i9v64UZpLW1n",
  "key9": "2inCxwZ23APyAfaPi7WtRuKN8J8YkwaVNP686zUTzbPC6JxgSNEhqoJVzy9hERN4HB9FJTiq9VNH9on5MNnqTpLZ",
  "key10": "2HC6NxnhVYYQzkgA7Cq6THdjce225yQsnyZBBDq1eHRFYnF3opVaQXtxsYesh5R9qbQTxTwA54HzzUre4tEg7sMn",
  "key11": "2LKHc9ieFi8zcUMizvseLK7k4xvvMGNyKetekNZhuRNhwudP75CYoV4yN5e2L7BRUdbrYTY6i1p3VhUrppDNBkWU",
  "key12": "3XFQ3dZ6aLrfw6Grkr67zk1Y1buTQrUBahuSdvb7biJzXLy3SJWA29d4zsE6LU2SeBjBSTjmNfKY9Buo46qPnTo2",
  "key13": "4KMGJSFuFC1Wg7gkVDCahB3Gp3FYw4oPboL7spjU47u5y8S8KKDPpd5WWyyMNWkN2hyyJ8cEZejqThXjfcNCuRJr",
  "key14": "2eLWUtENGUx6xrhtCTQa31RRwVXk2iZdXnFzoXrkZGQj61A9uLYvDjb953sNH8qLHKHNLcY5WpstodcgvmGKq5ky",
  "key15": "5W21Byy6P4WygAYrCSHaDfH3tMR94kGr5jMrr9Uu7hG2FsrjC5N6HBmHfeyLxqbT23RkTMgGhTboY7m7WyFfZHXV",
  "key16": "5uMrqWLQZVQJasHoQ59GSuDwZihjAXrLNex73JUY8Zs4BkJNNitMbNiFmShaanKgAUMbkyWm21jWb1Rwi2scXHq5",
  "key17": "22gKx6FCh3SysJCY9r7xyNoTT6QvtoY2Db1enzJ5YVTz839tWwsZbYCKo5R8V2gGRkp3ReqTnj3ZyfXWWQ5h7oZn",
  "key18": "2G3riUCx3uWBLTxjzJyCautjjFRspyDfYbBYjttXYGbaQrh2uQrot36Bd5mzBH3MK7KVG1Qnmv2mED5RCzvKVpsc",
  "key19": "2d2c38Y54ewAaJzQ192QJ6c3eQfVtzSQMnosoqy3a8Gjywzrmg7FBmLK8t2xXFqfK12iym1zRcAmaLZnHZR2wwig",
  "key20": "FJBJgvNHAYp5ickHeu2trrRNopZJPusaAuicbgE8oxNR9q1hL3yHunrHo2HhdwFqJVxsmpXjjSmUeC2PdKNjdwG",
  "key21": "2VNnQkGbvKxghT1rcYCRkbEYyAoxrg1XdHCxCHRAf6WHmjdgNyh7inFFtQ3p9w4RV6RnGWGhK9VJCpBMsMnnAPSe",
  "key22": "4QQxNhmNix4RyAzq7YwAA6dcuH3t5XNvQfetGtzXXRFTiiEYcre88PodUwb1ZRdVBzjMg1TLArtYN1ZBunnQXQGx",
  "key23": "3qAd3z1okpxrpTbJN8J7ggbupxabBeZTFfnNWbD1Pkknppndcm9UYCAGfiTqcaRMLbjGta1XXTTSJL1D1nHfjtH9",
  "key24": "2CPwYggvj9kY7jxaowMkQG6CfYBhk5KzUh4BLHRaHAWj5xYSifmjwgbDHHqx2LPSQgLn4z6hdrYowEdCshqeMdp4",
  "key25": "7xExUBaybgfdmgjx6r5wDHJNq9VDfUUfFrAr6VeCznSz9uFWepozqCa79vjZjQtcVzCRPorKNoxURdBNkgEYbsa",
  "key26": "ztWY53W4W4pCejLF16zSfCuQfM4kSskF46BUuMafXjUvbDhaZWYyiHXETNEhZPygai7TYSwToumMG83MTr4Q4UP",
  "key27": "3ZoFxbeSk4sZNV1wcXt1hHDNnpPRBbeqTzxjrvp4w6UQ5yfRbVtiLsQ8NfgQGeRiG88KPhdzKWaAPPA689fUxafu",
  "key28": "57wkTNM1RzEjcd4ZDPDUF6TBkFSVbMnNJCBmBbwGCheYdAfRrQHShRusctbRAugX9YgkMHn487Vp5zjwsjHoNJh4",
  "key29": "ZAkw2r4XgtTJLn7PjGzfmKJqXzqaSVNXhSGgZiG5TWVKgQn9k6R9bKdZVPkH3nJyrU6iGMn6PKs1UDFLCaRN5jY",
  "key30": "2rhVCUnDHpbEZWLd7qpiFGAmJ5NqnQa91ZeeJdXBUUeFxxqcYHdCr7RwYDHzueVLduRNshQVMH86LijLXfxqD4z7",
  "key31": "S8ZZVwxuGTCMPmwQU9Af6HXJeKkrQU5RAkJFZDZAxBmmBCuCTBw6ckzyszP3FkFUeqEdCMSvncyghvMcqofhb9w",
  "key32": "3dsCzCXbbdbZTrXXrP1GTtNxRoxYgd9i6EP37MosNJszohKU8vC77TJ67XMvcLkVAMcVYxfFxkuFb5NGv4sYGWsR",
  "key33": "v682HgBztAgoK47Djoo72j8WCXoQFoVDs6TYo47fXDpNRqGnxnoMRiYo8CMy89xrDdkmWRr8kYQxw4ZNupNA4sf",
  "key34": "39xm3rTzddXWz75FrNSpMBJ5v42utyxLJuhNJNAXfwKUQ99hXDAwvkg2h51pezMPx7vefdFxoJSzhqyNVcSZALBR",
  "key35": "2uEWhuXzyGbFqySgPK3Ai9vWQkukZXAwGgGDDVKe8axWutR1CDQNmhYah9f6S3obqnxSxkfRdbTFuS3VSDVokUqB",
  "key36": "3i1BR2mqHcwX8bQkBqdWueAW3tdmEkV3Gg1A8DfRms3sKXcoPjwGLWH9ZA37d72DzWNytAKss4Tzpz84zKfkg9A4",
  "key37": "5eQaTiDfu6H2bohDf8XbBbe1ZtzNEUE8jYxpvTT8DVpZjT1quKB8k4eWbzVSx3M6H6QT1GPSqLFQBLUAuaxa6TPr",
  "key38": "356dSCYCr38yX3veMkkceK6Fwt6vwjFjVUBWyacyXESct886LW2jemAAFFaXyaJd5jkCvRex5KDiwnye2WmtPVDc",
  "key39": "4Y93sGCx24XkzKSNQHcTffQX399w4DEN9d17PbDWHDdjUFVwUc3ZrZYg96RvgpQ9D3KBETr4Cj93GtnxA7TguvWE",
  "key40": "4ZyvuYFcBPUKjEgTtmUEKL8kwodxWLKYXV5FSPnUM4g6yPtvjJYreSpbE1nJ88MhDGk2k4iexTAfnxYPf5KBY3VX",
  "key41": "zpaKdCPdnx4DyeGSBeCSK3BPAcuFhWvLyyiTtm2zccHdnz1nrjb8ZRZ84NoLWHEtYa7usM4B2ib9XLzSfUeg7B6"
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
