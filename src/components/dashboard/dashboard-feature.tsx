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
    "tAPAaySYEhiNCK8JFTekY5ieWRib2mNKEdLrsbhzv5eYg9AA5JyUvDmD7BKLfpqANYNggjLjDBHEdJDx8Uvdoa5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J4w97hEPuLC7k77ELUqkatuazhjxdRNbaY14m51S8QWdzQuiXS9QVqti5mcFSGBd1xghJjz6fdSPmDm4MnWtUiA",
  "key1": "4CwTbz21XvPUPVBWwuzL5wdrCDvdyNGgtx6CzmeP2GceMM99tLQb2XgUtbjsvWxDYpSKnaPNzkjyAzjzYhr6JnyD",
  "key2": "4QGH9gu8PNaUFuf9GuAanjeucK2UQY4gXiGRgJxZLSpudKbAuv8SKpGuin9Q3L9u2H3pKUHTokfTjcJxqkmzkjoC",
  "key3": "7mkvrSfZRRiZ1rkNuoDQn9MB8gG3EH7rXBSpQ7fegzvig61tjNgoHYGogXNJ8ALdwWNkJQpSLADpdAcBrArJnxH",
  "key4": "3vi1H3je1z6gBN9uwXWdJcWFcFjuf4x22G62ZkkYxCkjs2J9CpNo9hfTiuJcnUW4w7oADYGQuLecnWNUM9ooXwEA",
  "key5": "3gjHgxNWgCUbnLg4feWroP9nqAHgpxgqC93uxGNAX7kSF7bfxLyv4dWaFPAPYRG6XXHMS8bHSjsS1yFYBoy5rQaA",
  "key6": "5k7Ag8AaxhRT9MbUYYYZ2svgv8wbgkmfnonFsHW5kdECX9z1sFiBegiU8Dx98Ex8EH8vDtxEQVurFacEngHeQmqm",
  "key7": "3BcRv28mmZCPocTgQtVexMdAPGAJ3A4Xf7KEheHG14szy2RtbybXtXQVxvEt2aSVNAh6gmMubBguCdWcXkDRTfwe",
  "key8": "2fXUEBT44dKHzmgELzsXAj4orWGESvhbu2Jbjgcrbdp7kqTJbCXyxXRU95H4icwTVyTrrVLaBqQkYc6PZrzcpY1K",
  "key9": "56y4b7VLipHofAXA8nuziMtqBQ28HZ1hq71d9A3HhsxSZHYPLtPWvRK7o7Un3RsjPxQwQaTcL1jg2YC46c9VvEC2",
  "key10": "2EfRc7Rz2wYn8eH1iJwJ3az5BT5HdWLk8vPVAo29mBKDtHnqPhkLuAQngiP4dppEb8oWnDUvHvpA1QU5pc6y27ww",
  "key11": "5nzqKTyP5wwKGpHgiKDgq3Rqfc9h5pZH5sR92CDMcGnj6gtmWGckXZrFKWc1T6VZas9Psu1M5d969r1J1SKp7oLo",
  "key12": "4v7fKuju4y8JupaT1gcxUin8NzwJQDUa8jCdJGTyAdbAuGVzQzZt7DtPcHLMpxzx4vE4ujDknfgrVDLgeWjZUYYm",
  "key13": "5TSiRFCE5nfiEJ9mWry9ptc6kR8c2vShJHVGXgBigR44Qs9Hv9u9Y1EuQ67ExxVSMdwnDWWjz6N1za2yhcbSi9Ey",
  "key14": "3PUnS9JtTNRiJfuHuceAMpjSSMES1wBd4FWXdnR8kmLCKnHxE19i2X67Ls3HpuiBgjJ98eZbJYm991pTYTDYgjM3",
  "key15": "4UfNayzqSqZDiyp6jVaHwoguUMRwkaNBH5jPtMw59oFWGZiyERfFWPH6oFuEWBrNmLckvRHZJdzTwvWCVzucwkjB",
  "key16": "2CeRv7JDiTx7128FRaUoDdiGBcsr2K9UqkCwkxrN1feGQVRc9M2vFxucCSB4Jki6uBwTncCpgocxxqGy8V1aRykq",
  "key17": "2kvGPUFh2txYaUmtY9Jgs1pxqtwJwtCzmNZKmQwZnLjCV6yizYn1XEFg5BgpdVgPMjapo4ZerKsRBFWNyFukSjpk",
  "key18": "446vpSTdPMAYKobRVcPVYGa3yDiSGR4za39GucCtvuCNu7v5YqYumEsYb1xXTpfSBcjhFTS46f1psBC9KdVkxrsW",
  "key19": "2fx6oi1X1ryASS3BtqHdTUDejZ2dAsD8v5XSe6rE5LhXNPRdzJhYvDtdmaP6BZmZjDMX2SAUBciyMb97TgBqFWZK",
  "key20": "3eA164V9uXiZPJdSHtWJzXDCNEAQ2Y1FdfUhCL3TjhqTtwfAQho5hq1Z6Fe5MGJepnHfhGzMyrsxfCC6Ns77Nv9Y",
  "key21": "3SxwPJ7ob3rqDG2bzPz6aYJr4J8q13zmHjnjYmFgcNE9zqbWJrSF8ePcc8X21hMMnFPdk1tD14xqW9UDe37b5ZDw",
  "key22": "4z3mTn36v9dJgxrc6GQm5Q7CDiWS3ajCEp7WoYU8qWSVXxrKSwsauUcitwzBfpH73y3awT44tq2zDb7c8RZTjoQU",
  "key23": "22AsLSYFTPpkPFVSZatrVUNbyDx5hCT161BorYtZUtHP1k4aq4bVJt2BL4dRQAsX4ZdY6ZaM5JHoXE3DtcUSMszz",
  "key24": "5HQoYqecmRWWoeWYRdJ1qkGbTVa12fvxyT5Vji5xg8HY9HV3XDM7zj31bsE86kEpQRuUBr5JrqCxxjgH8MKh1WvE",
  "key25": "4vB5M49grym9AL2XvqPRuE7SXpM9FXm9Q2dXJpPzVxX8HJYPPNbnZZP3MEj8Fbdqhd4bsuHjG4Wi7nexUUo33zPj",
  "key26": "2Edtbq3rdt5GPXyS6yFDptdhNVcNvR2gURuNEcFG7UqXPDX4TiFbiM57Zknbi8LHxH43s3BNAMVz9mWQsQWRV3D7",
  "key27": "Qjut6anL6V16PBMTqgy1k5rVKaErKoJLRQSKpJBCASE9f9aKpJy6TmVREJtEY4JMn6qHcuYzvr3durWiz8g5E1b",
  "key28": "9pDSFfvy826rmVLjNufTYiemcjjtJhXaFHc4s2FWPKMbDLLq2tuVxn1ss2gjN7Eqit6JcTCXS22sN46i7dCFqHQ",
  "key29": "f9LFw6mYbJnfXFDMS9vCVvzQbVyM3jYsQ7Phe94HFLLYksxdcuErzEA1dwzWAtFU9VCMnSevNLQzuwynQuCiuVT",
  "key30": "35ULvczw6cbdFNfxtp7w96hUSp4zCTQ8dmBjzHMfvjgvrvnY32QsMR6WkVY3PHsf19W6bV7fZ6ep6RRRtw6PfRZZ",
  "key31": "2L4pdxqnAFe6pE4WveTkuPue3R6T7yvZHgvs6pUHMPGWJ14Z4KFRDKxogACoBX7DpHKLxECY5jm2Luyv8KEu25Ry",
  "key32": "4py437YSfSZD7orfnt3n3VcLVyNQJ3kH6H5u77fvu1Zn5eiose3ugdvoGpxKivvfBtdabHDmJ8zSFQjbPpKWmDmv",
  "key33": "4QgaNJMjk97hREVEh8tgGqz1GvbzLV2ePRreicyKEGbcLGPRudaYsSTFHVTosQFqKkEfgZ6sm8c1C3P37pLdUUTe",
  "key34": "z2zr6FERigQgc25VMGWovqd6PH2S95sAfCowM53u9hkorR1TeNmiWRFpK23JzJnvQKM3AtxuokiHzar97F9xC7Z",
  "key35": "xCrPbTmpkGBVWouBLAzrXSiu826M2cCEF29ceEA6ddy9WyaZkvVVBGPSDaTdu8sbJnDFudrFjnbg7L8vBESk1g7",
  "key36": "2J3GMG7raeLs8ytUEGyD2ZzZDoz9UqySq4xTPk7Xbkk2Fc52VR2oyU4EGcz5htqKvB5DK9fpzJCXKSySSgAvpk1V",
  "key37": "3Bg6r11V4x1Jhr78FKYKBm9UmuqvdVG3UYEshgihFAztxRed5cndg4PRggcx92Nkp52H7ZoXYuntrbBAUkqe6hHX",
  "key38": "54GGMH8uoZiGiq1BqAXTWFVTitjVXQ6amTnKVaS2ybhB2BpPC2eq6Wh4mYKLCMadJLganLK7ypwrEhwdxkXGTRn8"
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
