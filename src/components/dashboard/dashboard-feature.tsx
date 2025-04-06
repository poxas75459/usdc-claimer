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
    "2ViufVBY2aY5qf8Akd7576HMNJxiXgcn6diSATr1YBeV228jCs8AFYtvyRNLgYtwYCR3Wgnzo32xEzwKdYDxhnGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pwZ8W1UBMX23Ev1tXS5mEy6zgUmGboujZykMkZiKcYCkYDq6NYti2KaNhgCGu8Yf8v9eZEFC7TSm1BXnqqMF8Hd",
  "key1": "3TrBytdQDZX6CeW4jciLo2aMpfZovsAnMwsSPaAWUF44dWDMzujWS2tTe1Tr5kxLaVRwtNdN9YCWK4nrBRFEpzM6",
  "key2": "2WGo1AWQw4VrM4Q4YHBnUchCB53JQnN22suHdRD3wiUTdkafCn3PtSxb3n7vmRkm6bdKbLtjiAxAHSHmZ5fQ7PFi",
  "key3": "FYXuuHP7LZU4xCBfftBSm5w1ZifkeqMpGQzQ5m16453XVgJmZMyWmuRcFxdDZbjWzpEQe2eDKH81Vs3q2x1fYLr",
  "key4": "GFBNjBEhuacsWzPGV6zLmXMFGXbAiFmNQH9gXvBFE6TnpvTxpCg6RbTUc2aWwc3GCN3phtFCnHAhJ6hcKgT4vXd",
  "key5": "3faU8LLU7xJmQhBEhx1iPjYzEQd6jfdzEd5UaKAKUb5ythvXRXQj4pCqVsSBpkv3L33trcZmDqGhaQXqjs2akmC8",
  "key6": "2skBip3HgdLgHFCp9FFLB3VEPNASy16uQnuhDMQwHqCjNHxtUTzdi5iZFGvdLpZEgb6L6CnpYqTe1Qp2VWgN2QBL",
  "key7": "238xuYMBeLNsaHUKpZnMPknqAaRvgMZV8XTNANPaaYGSr6fAa6zpiFGCcQAjA5rLEhMPo7m3paFHT1ccAL9TvM4N",
  "key8": "5UZuscA3RxP8gWdTNx3S2Y3xFn445TTCZ8YKjN5Ff7EDsqn9p9YYSphBT2Qw9ETHTfM2cMdCXefu9tWJTZpoEHXH",
  "key9": "42dusEoe243D2QhXfKhgSZFNeSY4DW2kWApAf9N3tC8h45aXqg5Q9BpudE5Nx1tpUgZ8xxiHDoqLnfqdXh91eHzD",
  "key10": "8nikjaX4sD8u5yHjz271sji1wsQvk44igdM5xs5oSrX2qoBT7Vqzk8pf3947i2t6nQe3HzXcw3wJfbrfUfpztc9",
  "key11": "bWqNPtBYAJ6zmVzq4H8rB3BKuyesoUPopbKdB5dtNG1WKRMPbP7xCTcE6YPb5ftX7ofgwvvpcRsqjQq2v9EvZ2A",
  "key12": "66zUnYc2eGGjowRYKG8tK8JaJ8jVNGicUEHWZyvNzKSZYV5jBkKCSHeycXTHnaERBHkteVu8bFvPgFUgKCK6Zz5t",
  "key13": "2Q7wzXePzBfUa6XN4yK1uXNqUHAdrWFQQLVtPR22UXRgYzmzYMYwaR8axQUwhRiVAd6LsShRzgVbLgj3YUrNzFXU",
  "key14": "TYBNEp2h1qJNtTrRkgzUdzJT668L549BgcV2VHxSec6XyyAMJWCgqbBvQukugMZxDmUqjh9idx7jyFJDpStyVje",
  "key15": "4ojS9ANP2EcrmZgAiVvTaKJssMRiLEM8zkDFu36r6PLSxrx4wEs9DSJxYWk6YyujLcfeVVe8L8L5TaUUTY2DvKFy",
  "key16": "53SbokbPiJp6c9mEWr4on9egm43Anp6dtZN1G8NtY1m6LceAwfTkXVcmjbFpsT8J4pjgRk1zjidRanxBsrxSutFK",
  "key17": "46RGXas99HnMUyyyBua2vJrayzdTrY16En19YEpfhmi9fZh56Sguf2XqKLbjPZqHBrxK7HcacF8RgLyQtMmEtEdr",
  "key18": "ZMmtRU6cAdzH1waNrFjMdxzAGf72u9enG5hptKegHiHAopZmWuDnyDC851xWWHfByCsPirVwZR5SP9RJ1TRpZDi",
  "key19": "21kKYL4Gpi2nj92SKEL1TbrcQySeiCYrQ955ZT7EJBUrWZwzTujRJsTL3mtbzGjyobVyjwSnNNT9aB6jqXyYxGzG",
  "key20": "52nM5BMpzYxbr8qyqWDDhArHdJaD62S5T1gs2ULxeq1AJqSoq4VYhrT6RsjXKqE3Txh2MCFrBAhc5KwXXH47Lth3",
  "key21": "2abTWi4wYubZNS6omJPKjXHqUDa2wpYDXBSaxLaXu2FbPAwdGCPQsZU42U3JZz5rW1UPhWfT15rfjEDZ5AMqsFFv",
  "key22": "Uot4dba7AV3gjHcN4mFkL4cNefDSGQeKwsbPzmTzcbUW7MsYBExvvZ7KBwGDskKPcYTjx3sUrLbvJvc3Uz4YuMN",
  "key23": "4fvGfrzwtN8AY6LD5TChDvxcrcCYvdZjhue3YPGeDV71ta8X3syxn1XpT113Zj4yAAwU4P1Wo1bBqbKAKdHYhuDT",
  "key24": "2qVx71mB9hAPiawXcdNWK3vE3cdTpNJ98po2e8zvsFhtyTjw8w7w7Nkxp1aW5KLvTLW6Np7sXDwP3oCyBkGrj33K",
  "key25": "66tUcWwkeMt2CFFvyrFkUaGCbJXUDfa8pUPxXxXozdbdWXfVcAjrwnHcbDvMbsjqCahufJcXaSoD1u9xQmrSsJHn",
  "key26": "5Wccd9XoBGZejoR294s2X9nBvxX55ghjnPB2x9m9X15xjjb5C5PHRFzgtV5XM3Pte2zQBGJ759fk7qKdvRRSE8H7",
  "key27": "3ZdhZVPErzNFapQ2wuZCheBd4yBMntnaVrKGQobgbfVsK6sS7Bmna7gDc6tt8oBAdBCpqi5Yj64Yn82DdBJNPQpD",
  "key28": "HB6xBbo4ZTanwNJXHF9JuxW2YYtUQGXhpiUNVfg8A6G22Dc2Sf7mvfcMgTx9qgVvEGqJAxd5DVyeXYeZEofso8Y",
  "key29": "2Lb2H6Wxk8f68eCz7uRcp3WU3g5YxdWxE9y3z9C9xDoSXoXnUMXhZMSRq8P2tPkwPyQnwDvtUhZCXxbqhiF6ZVeY",
  "key30": "5nMRZA4ieJYSAiFvRtMigstyP8ZJXYJwUUC8Gp8XFijzXemoD986Am2C3wygRJVfTAN6nJmKajMxYt3mrWBPHSY1",
  "key31": "421MTVSgZMau6sxif4Vcr369uM8eQXD9TGgRsKdjAPK4VdEf5LXYWuATStw7GganVx7xzpRJACMVdyw2WbBgtjoA",
  "key32": "5KKPSX6vsBFEUKSmVMksmZ1PidzLanJf4zEKgbB9rQRWwg3k4ont86yagt9VA6hWp9eG9W2RRerSZZDX9BQNzzsk",
  "key33": "5MuGJbkhrpCSqiQWoxqftNWuiePxUSLB4s7vW8v6Ki4dB3c64R9YzxY7aVJj6uVtMHYD3oca7T79NLwqUc3Raczk",
  "key34": "5ascLQEgU7wmeD1hqK6PS5zL891GD9VSQi7hW9bdfAfyKKryJembCVmQK6heXrPiy3tyASHaaydkqAE9NWTWbkJd",
  "key35": "5xH4yim5UNeL38e443qXDj8LULJrMNXrxqXzqjJpfRoze6KjxB5qLn6TpRwVPguVUxaNEwtTwecd8CA6NN3sMkTN",
  "key36": "2N4bq1fMur3CZZ95CdkJkug4Mf1A2DyR1XBdWBp1QM3Cmq8yQPFkS9vT4csF2GJfdAgWtDezYHXptkYTJtpgUouf",
  "key37": "5iuGe618Mw5A8gRCnt3uucKf7yoMBJrrgT1sko4dt9yHAE4yNoWkeLNiqEShDSxUNTmdx2r8m93SWZ2aaFdm5Ltd",
  "key38": "5MEJdqj3nRfu7b6SCJxyPs6QdwspnrmnphTjqnoAVbDsGuoh2xdA1Hh3SPh49oAiKLMvchw4AjEjvvRHwn2BXcH8",
  "key39": "oWAz6fhGp6zmenm5epUdZ1fJEcoNinYiCo1LNm8APTwey29jhk5Ugk1GwdB45PST95C1yf6Hytut7nHg4KzqJ9U",
  "key40": "3aT8Cq81G9MS2XC2ZTgjuyCtcrH6UVyYPPUaUUWZQwXFLcLytX3euSqMJQokdLehLgnNg9bEjYYZYY2xwmWe8Kdc",
  "key41": "3apsh1dcmNMizkjHEJAJhFv4H25PofbVsyGuVv71LvvY4aJCMTyHMYVcEzW2P9eK1wWVhKSBLSPwG8UqPPtorABv",
  "key42": "5s9Mjc962N6Limro9si5diaoK1w5zkQLoXG87EXvnRRCCeQsdrkNoy8vsjn4YW18uiCeqii4oTFRez5eNZc8uD77",
  "key43": "3K3E11sgX42L9V57X4RUzvUX85sYTZEtfFuBPgAQRwxrwnAMppvYUpXQDMSbwz44tUEPZfmwF5XB41SPDdMWePrR"
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
