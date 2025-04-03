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
    "4YApKAFctnuzQLAQdCn5K4Jte4wef36cy85phJhr9hvwr4UgwPqC6fiqZdtmP77EokY5hzwcA3y6AvEctfVqd6t1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49GXWatF1B7BPtf1CuX8JqVUQ1qHVF9bXcJTPpM7ALBe3jaPZohS1jEp49e5c9n5WAZ65KE3KHTRUTch9RUiW9Cj",
  "key1": "4SVp3bbKNsU5thmqkK7MmyoHhEcuxfY4WCpg5neG1sdJxLCBYwAHpaiSmuQYmQeCP2VhbWEru29jEgkkWiyLeKv6",
  "key2": "66H9dZLHgEyQ18WS4DtPczs331qAh5L9zC3th4Py55uwWsJoTJjU3R8qUoMgBuptPHyzPFgU9ydGUqVLkreEpBMh",
  "key3": "2sxbdqCMS8Wa76KssbqhafYr34d1u1BGUbyub8q6aPYCmzw5gNUB3ZpwtUkiyapqVdcVcHWybeg3LqimkX8Sn4D3",
  "key4": "2yBYWU1zuiWpBViVz3kuYJoNx5WmMNEgzNnt3yDDK4enNQeKLA8LqaLjzb6mkUCBhSV6B3xxFyHj6sab4gJso9xW",
  "key5": "3Q1ZujyFMBbktwC4LekKxfeQG7GvxRezx2CCjfUBhohgdrjDYrEwes4WT5YrJPFYXoGg6RUHuJYXkmrMVtV3QghQ",
  "key6": "526tPFchkRG6Sn5TJVCYbyyrgnn7JcogRT4mQRkx23Y1DYwECAgCB7YLvbcTbtjntoF9fFp1tcsPzjUqgv5j8X7B",
  "key7": "sx6dKJnDBuqPxmnf2PL7vCZQBCeBx1SDkN1S3RZk1EbSHS4rNt7n4Q4sPfxkxMmFwcEfeJQWXZVXou7nshTnzzZ",
  "key8": "3KwYPqr62ZT8mrs6EvWNo9U2z7eFtU9AbLZ44NqYps43t2wsnGihhgwcCmtRZs3TBfH9ymArS8j2J1AK1BjmU1G7",
  "key9": "2JmLX29RDG6y9ieyPKKaKbR8nQvbNBwVoUmUP327Yb45BNewzpE2v9Xww5THZCN2P2PJ8ZJzr1ajRwuy5odP4x9g",
  "key10": "MjohhLaf5nWUdpNMxNz5Hw2TC8e4gZs5vntqpduUE5bmFDGcsx5U8tofxTbAXtvxZTN9VxoEsCnEWtxX9rFKnt5",
  "key11": "2etn98q8LKoCveUWNADiphWQ6W22DKdPzbXDEDYeYQkVQrtcBRPJQe1W1KvjPDL4HoCwLa5i1zGJpTgDxqDZirRw",
  "key12": "QDXkwrHTY46XXGjru6bJd4nN7JMz7E2fFSoRqDg1pH5Ghuk7Hg7wkoXezzGNUAnZvso8yR54GnvXBKJ1YeKNNsu",
  "key13": "2Hr8vMk9Pi1BFAAc7NewWPGa4EpRZg2xjcfj22FPkPXqpmfUkzQ2Zqt1fzQAbYYBqZhB3gaPsPyJbZ63hLAdbW1b",
  "key14": "6425acSfsafVK4jfMsTbLin1gczrPmLnYYvj6NSFUX5YehaaaJvEiFBMaPigsYQhUxnXPeiHy8MZs4rfBRU5nc3A",
  "key15": "2gxPs7rmTsXMDK3XAZGFzSY6vCXpLyh4WWPs8qKwoArPQ4Rxt4Yzre91AYvSE3zpYvpPhKZeisuS9ZJcpASVJt1h",
  "key16": "4Rjxk1inHNfN6YMboZKGTsavRqhrX7SXAKsX42eg1vrKXoRmpRywwgy217PhDP4VDGrKFP2QvXSExTPWyY654Pqc",
  "key17": "4a8fiC11ZnyzCuyzkbpr242W5auJrP76gKF3weWp1AGqH7UpQyELxqL19yZaNPiHw3gC2pwSkJyQxr4KupBWa1VJ",
  "key18": "4su4HRsxLk5EdXAVRVH58RwcbXQfH4nJk3KnWgskb7o1m5WoWJ5HqpmiJbwqPDYLokks2oQLWxRYbgCCsDrA1ASM",
  "key19": "3Zbo8hmGnEvvkkkJG9gBawPfc71hUKpSMa92z9kg26c2f4AhKrDTYF7kpcoYAZjBdMhWySFBnxVXWsEiaprt5qKU",
  "key20": "5UymWw4dV3iikRHoqiiXHwyKy1TD2sErFZBAXqen4MFBSwFLQrAWVFqeFG1A74AFBGpHZiGkjAaHukrTY1KfLypp",
  "key21": "3JexXHXLWRByEknPdrfmL87hG76R6Ez4W6QtJNDuKVbmt61jA9G3RpgFTW1khnpBxN85HK46Vj2xdZS84LNufQgj",
  "key22": "2MSvUQ7NK12dWBsrVc6Ai1rXxc2ZVHjznndm5FT63wGsfqJ1D17fbdETw943yZkaop8VEngXk2yjfoBH5pss9ANo",
  "key23": "4DyQAXJUdQzfzvzVQDHsQUYnKU8rFvjcmrju1Jz1yqqNRe68nsgwZGchgkZbn5FzieAXXcLaUK4mi2oeXEtSu6NJ",
  "key24": "3DkwEM63S5Z28uPcCtSu28juAia7AD2FTWKbwdzD2G62kpD3thsysJ3jwoTEHSDtBc54mrfudYb4D8tppVXo8AuR",
  "key25": "3Zju6RTgqi27UdCiweHwTU9VJxx6FqFiwaqMpgeLHzuX2LLc177oK8w8c5RkuYSuNo3Vu6DwjyMZLjZaVXQ6DVSq",
  "key26": "DEqrqMiLSZDnDYJdiNQSipvfWtQcoNMwC77NjLr8YC7i4GSqpYtoVJYazCj6x72gdZXUtoeoP8wTAKZmF2Xfb6x",
  "key27": "3DJRqDaDzbRd3mSzMY3KHDn4P5eFnZWNz95ZeC5XrvpG5SjTswQf3E5evfVDGpxNq3DKLqTkvxzfx8WgATmx839o",
  "key28": "5tTkyVM4D76doEXvAcUMbcZmuBsi3397m7rcEW1pS1X3Ct6N9ptZLnVVwLDcpUGSdHcBFvqXgKgxACyTGR3awZWY",
  "key29": "21qpAG4tjAhJLFrTkfTYojX78dqZZULyHELTcS3UBWWngSGMkqCCd17A3oqVqqdz4VNdvfsPmaZ7ePxQgaCELoCm",
  "key30": "44zGw8MzEUH1KFifBT2bw5tssDEPey4k6fqWsFUpRmdtim2crvkc3NXbwoBrwAX7jkjZzeiB3iFWDy98GFid5Kqy",
  "key31": "61EBLwXbpX1WEbh4EeGtM7qBVWKj1AiFJVsf47bubwSaJFcJ6U52vBTTRKf8SnRoVrroehnR3i73CFNp33Vt28en",
  "key32": "5geFETwbKyBeg2ViMg6UESeKLJBDCSgwEGJgoLp4X5Rj2K8z2YBUMqa17t9mXT4PpLgabBBJefo7GoEmxYipSrxL",
  "key33": "JB8MVHr3YQQ2XgpUZLuMSHQzJTKC7u5mvp2KiRYC68KDdBh58P3SjbK723jRosSiw1vQ9xSk4BYzdVYZKtRqfr5",
  "key34": "4Zat7KsjZ4Wf7Tiomvc4kdZd45LCdec4sAgi46MbzFAfwpwfH9ALGFYUYSYX9y1DE6c1Rf9ZM4tTZrn9a6KxnJM6",
  "key35": "UUoQzKQwwMQZFdNqNXaqXndoYcMDoJaW4HCj3jNKqWg7Ldu5odgaCJZSYEDSmeeEFEm1qZb8V7UE9ChsDRSsx5o"
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
