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
    "5CxpbTd3KiWj1aXKtAKfx476kWe3Md3aheJczPWkNhwsXU5NYw5dZSTDEXMD92LkvJeRMBDsCjimrckNpL1PyeE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xXJr48hjTWviK627CLK1shmrEfq7xoaZnBaNQAdfKehK9yXwhjPTRWfKosz1QBXFGo94crCQzmsCze7Myox2d8R",
  "key1": "4zRU6gqiQLvkXtrBr9DANMJZTa8VSKyHbrubg7jwQqzg1hLSJGby3EhMQxMXhaZbvSFMtuPsuLn7TuTTpsF1KZQw",
  "key2": "4veghqJ7e9DtJgsPtcLzCBVs9zT7FEnrHmpca83mG2ir1upTKRZBVMEx9taLun1BbCzZbLv8ygjT5w17nciX5XHZ",
  "key3": "578uxeRZNzFhsNvpoPHPB6ZhSetXPCwdcuTFDHBPJ3TrotuSeYn4EfUKGNBM4BdAWceUbUWnKoMXZt1VDtVkxZoD",
  "key4": "5c8Eb18Vfz4exyB2fff1YSz46kDmaSHW43fXw1TqDu2bq3k8frPHViyTqxTBb6M5AwF12vkWNSwB4xnmH1FJZd1g",
  "key5": "5zt7x1mzpxfrL1jL8aad1xZ4e2m5SdgumpmsjPhWpo6PyuHe75y2iruqLTAPgNdHchf8PeeT3zJBHM46s2xsS7vw",
  "key6": "8Q3epKineLSzz1wLFhRMRnMkGtykNRiRkdSh5g8eLcZ1hJFqDSqEGRvX5fSSUcagWFuYA76VhfTfGuzBvJL3PWH",
  "key7": "ChSrK9EGKnQoeKcLEhTZHXG9GRoe3eppdmmz74THw5rRBrW1EwEXBEBkybobfRD4FwEDVQTqrVfsYhcSbsg7dvH",
  "key8": "4jvaLou5DS45ZwCw3tsPm87KUQirEDSX5a4BrN4LK7mGNJxamzZxz1BNoB8vrXaXj6pHGu6PqD1PX525swUeC9s3",
  "key9": "4Agmm8TLrEEYooGgSidRa139nrqaCBNguWCvkNZoTk6Td23rnRgFQbCdzC5bat4eyQgFvXeqUHzx54NEz6YWmVpe",
  "key10": "3TkPrQEHMYQWsBdPtaTkmrBpfKf4Y7aBTLKpfBZWhReVYrWhi1BamCisptiv6q5dKFkYc5VHj6sBWpe6keTmi2ZB",
  "key11": "4Cd4SLE8arvsBq1ym4JSF4L4uUBH1fPSrTTBZdWs47nYCU9xrf3gDWmjBT83rM7EqYE2CPysNNrp6XuHw4abhcj9",
  "key12": "3Ctaq88DvNby3sf8npDF5yFs7YAkr85HvFeLp4Vzi3usfdwArPiefHqNMmucDmAs3R3ofNYjnFxhs28RpGurEAns",
  "key13": "3D5CgXEuhHgCDB4tgW4fksPTn3Pv1WaWeyUuhZFmz664zkAqsvSTukTwQH3AuptCGht9FSwiBQ6UmwsKi5h155Sb",
  "key14": "2X4ir4WAhnAp9E5eVPxC358M2FAcfdXPjdqWyAM6KgcU7aDBpdks16EZAR4RuFhtvPrM57QCkJzS4w5Qv1XvYNQN",
  "key15": "aNpVV1tVPLVJHXKC22TnGBPkyTm8ZTARP52kvZdMUBhGu9ETcX9owJz323v7vQZcaia6SjLfZaNxDH1EfP5E7V3",
  "key16": "3nrpaQ1s3XzLCxTc4XrjFer7F3XniLPp4RWStcCTMyc6Cbw6EfKf98bGp2dNJu8boqyCnZgeKe32U3VjEJRephdg",
  "key17": "2BNHwMJh8Pb6xwA6owCPQfz6WbFUnXFvoPTmksZDNa2CXZuiLFf9ASbgH64nD2k2h3hn6reZTHvWUyjp5TF7CPrK",
  "key18": "2wBYkMJPVfasPJF2pdkc59PrBB5hgJWK3mZDUKTVaf7RSGKbSA2FZApFRhpi5T4zxwtXf6UDB1tMGuwZHzDJAtAR",
  "key19": "3o1qxNxvkpjTVAnX2oZ4SAhEKEnE2aPG1pu5JoAYqMD7rfUrvGDbLCw4NAdM9cPWncGPEKX7aqHXzTXhECXNvquH",
  "key20": "27MbT9YK1ucV211j7WJSxTmbCeKvNLUAGPnmQm6sxoeYD8kPGSggsrtNnDifijpvWYXTriX7vwyh5ooECDRehJVV",
  "key21": "6EUGZq7Sgpme2kQavtoVRFA6fkSKacZXpnY93JwztMPNgCdYyHBA13pRWBJDS6UFwE8jt1WWa8GE7Sx3fw6cRnv",
  "key22": "2uSEqN4zb4wLZ1S5g4FH2cpvLnesRRgtb1GyuRXGxbja6xEHcHHVAgniVKjZ42nsMaoN7VTBcjcprLtb5Y8TiCst",
  "key23": "k6shqzUGZZ5kF4uNp4QLvBm6TzbRQUjnbWnc7oN4m4FgFykAMVePHhVmYDqB35KDShaGn5en6CyHLuvC5PPfDHk",
  "key24": "29iC4Z7FbcVFFWj1AfowP6Xm3YcpVFJGN3awpzKU8YHdewqYQJfDDgefjLv7Pwn6a9CRHJsCzbrAcn1BUHSYfGYE",
  "key25": "2cRfoZJbKsiPXCGsyqc9wrdwyaydUvQjvtRA1wy1YF94s3sXCanX2cmDjTaqMUnZk8EdiYHpXMCoFVVXLQE66QFd",
  "key26": "4sNSV3YGSjF2Va6ye1gbPG3zKMk974nm5TBtNQpPKW97M6vVMxipV1Wkgu7N73pY4wBkZLBtjuXShX6hRoQHT8ER",
  "key27": "4cqcw9vsqgW8QSWCX8dYZn5b3ZAvCf2aNPBabwh2vibamTjoRB59tsPRX1G3eVkkMdrUt9Ucf6STcczhSzG6U7W9",
  "key28": "5kfzokfxW1fXvvAHNy9SRh8P7cv4JGBcGFi53rcFCmxVZ7Z4aJXaY4ZaPZKJ9FdqUKzm2KdCWuFje5V73pZLUZjw",
  "key29": "2pRD68FEWYNRoWgXS3n2zz1WUoGWK9f21mAp5AALL7xBdpp9WkRbxfmcMCdGtXWnrRyi7azMntjbRdcPbepQPu5z",
  "key30": "42epFoKJhePzAzKHN5D3WFPnMPXLssfB7UR9kEhb8nitLotKTptGMN9Stt5nKe87N5k1sk6xhRsdim1WospRsyZc",
  "key31": "2MeRZLuywrrtS9PMFm6BAYprK37s9M75rZnbEswFBiv2ayuxQ5rnhb5M6gZDMzcZFZ6NkHYGFGTiMYjM3qb9SKFi",
  "key32": "34rxXRNZuk5MtGrjG2TxF5VNgnaJqNNvVzEuMcSy3Tm5J943XV3zCuZVnrJMg34Nkb2WWU3un88vwN7BrS5uWzLi",
  "key33": "3sk5cXWnefQw7aECwFokWyGiiZz4N1nVsQC5FuuSj4pgFibtaEBwbYyXaUv34HeAGGXrTpbwjYP7fQzTirhzpnkz",
  "key34": "3SUNpKukMPgA26nakS8qbFDJBTCkssk8DZkHKzigcgxdcv9KArGWpajVUsnWo6vv8ZpdhbHmHtXXiNCrSpGc4tJc",
  "key35": "5rfkjLowkVmcwPbqKSJubSVYnTSgwjJLQGLM22T3A4mS4UepYUGT3ino2PddznRbFPpdmDvMgV66gw8rzyPeSBh5",
  "key36": "421DikSwAzWCj5gvmnG2Kofkrou5B8LFdpt7jSg1sQZgxGUVNwFYv12nHiiEdGpvFnH3LFKxSfFaE4X1ntEY5x3R",
  "key37": "AvjJjo5HzEyJ4sp6ugLi2FbUsQKHVyeJMzvudpcH9BDTm9GmGoETC5d3egndgB8BQpoEDga9rhydrE1Usuruvff",
  "key38": "2anGZeT83K3KwcfyK6NNmFV7U1Sr6cwSXyTVwC7dKKToxD9hacjVxeJkKCygQArspjUS2tU16zTDoYdV9jdWzY2C",
  "key39": "5eM8dfyAB4s7b3HoPkFCFRZD7hmPnnJaJoXWoqGJQU14raL4CRGffwg7CLa31FpW2P23rpbWJskgvdwY8KXLGwzz",
  "key40": "2ZeqSnHA3iqggUumMNe4NLKg3XLfcZF93rF4xXmL4FLLYZrxSSAsoaAW8V7dKKv8oMybXtSmAZwZRiYNirdSgBry"
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
