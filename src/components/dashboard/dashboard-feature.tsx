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
    "3ugg4LwM9dmcQKrESR4UPNDT3d9ZN2z7Q3Ybc3BrSxqz6twDGNVx8jNZfA8T2t26VBZpC245W15Q3gLj1tVaLNsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z9oiiBJNrV2AW2eZXvPvMMUwa4MGbrE8Z85C5FsMCZuCnymZ9yqe5ksK2JSk9bSxP4Lmm7ZKfSXQ864iUbyxZV4",
  "key1": "3jGUvzZwL1u88esyF72yH7dTow1ZpBAtY2sDrjCiKJuEwAjr91GTXNXTVXJZk2stfo5zYL6Y6ciptCFBqMY6hVpF",
  "key2": "2UkZ2M8nxSZRecaG6v2bBPPyUehQ6b2bQ4jQBX1DRDAxu5Augs45LnSeqA4dFUapqkT8ofa6uv7D7SBkVg2RknVS",
  "key3": "3N66S5UxZ371po87bGC8twJPapeqGsn4Y9RPDhA73vAvmQg3VM4keKhuL7ntrZzdbxYJXLTp97xtJC8nqLNG1fu9",
  "key4": "3uqaPH3c1UZ4kQeEN9YQBeAopL2zW4ewoykaRRxun99w69UeuR8puRbQ1h2MFYNuNQchDfFdARefCUMLgGd1b36t",
  "key5": "2ZjZWfbMJiwUajbdSoXCUSLdMdgdQeZuKTcVpvqAJZ49QBeeCzsWqSXAEpjLrudkdpJRYbDpmKbPepWaSjwZ7fgW",
  "key6": "4hP2FsuBxCxm2QoAhubqVYJnSPucUPjSNqZTdGc3ydUqZHb2o7zoWgT9Cc5xF8X1pxmH3aFAAApV8mztCvEQ362C",
  "key7": "DDLPHySsuXTUaeoJijSfr9pZZX3hACRoAcLSWirkGHpLmTvBz7CNtwonvpWQKSz8Z8k7i4MXrmJQidzdjSVtjwf",
  "key8": "5RgNpGgdQRajqa7s7XFj9ZuwsKGwsgnqcTSigfRutBASnHZFe8NkH5VcRpYvE5BAP2dp1f5uSJx4sdq2v2WWaa8k",
  "key9": "5Y3JcLUqRCQKdxNPcKqHfpADGFBW5ueU4mMBb4KDT1ygUbXpGNb91qiYCgJSBoev3SWpriRuLnAZ1NA4sXxtibrX",
  "key10": "4Mfmcwsu13wmfhq2Gr5D63KJVQx14p5jqdE7eGUa9AogXvhkKAuyp71kbXbseFNHbuvYEnGX9fDZdGjqu9z9cC44",
  "key11": "5NNAu2WYWbCpGVVx8S4GZXqfFVtvbDeMLmm5HcD6ukzjiLJGiXfHt2j52fv3qsaiDU2oAqMgEeKfrxhdFcwPXcyg",
  "key12": "39NrtDFuWoCSTFhd7n3mcEjXzdYLaEavFoaN79te8t7v1gZXCBrMZ1f1VaXjytRKmjzrzzFei6sBWaLmtViFFPRM",
  "key13": "61vWdfX55PvuEZgEsjAj4oeMuGszWvfkJC6cowqJaNshb219VJkF11zJMQwAxR7VnGiPxKUuYQqyYXxsvoVtR7he",
  "key14": "2AympTEERyasLvFy2fT6oWUuanBKSmAfYvcsbTP8PRXQHQAzPJLRAw7Z15f5jqMq7AAHJA88xjxxkNQPXubfNdaq",
  "key15": "2rfYhGr5PbT7Efk8AjhVJpJWrZr7reiomG9ESSYVZZ5FTxN7y8y9mgUJi4ai8rKx8HtUoTxHdeE4oDVnndNpjaQg",
  "key16": "wTg17BMefy4Fcbb3Xf8Ai5D95z8zwvEnjpm8mTqHHSggukSPew6xH1t7NWTXq2vED9BcGUp5b4b5jYNkrknV4zN",
  "key17": "34UcKY8KcS3QMo8bp8Vk74cWVxFSjT9w7C8GmDwpN7y3yRNkddCoWQ2Xez9wp2NEXQEJQQ28SeihLtDgeu3BiKWj",
  "key18": "3EhDsnpdTiPZCRTY97HJcJhrfAjii1B5ti6XA5mK9YLpeEVWB71C7jyNHyYBEhhRoVUjoAQGkiksEWgFXeBuHS34",
  "key19": "4PdvERTwDKfP9cKEpRgi1gV1XtYPWajEFTTNkMHojvwJ6Xw3LqLTSaEDMyjKr83NA9sVEetNULhgdF662GS54DTH",
  "key20": "5V2XMji8xNny3JHafUhwRsfgoJsw7ZjNMNdxn4BG1M4GNKWK6fZYT5yZzNJx6rhcnFJd1BnL93LsVAk5nAEEezFp",
  "key21": "hBRyfjM4BjYxKr9VhxsfD2d6X1ot3DVk6PLV9SteywtuxrUNDPaxVaQXkf92nwM9fo6JnPbQ3aKhjdxFGuF27SX",
  "key22": "3vqHH897btLRQMJs76D3TB5VPo5WGw2Kito4ErBtxvyttbzvfW7v7SNjCSckcc25WerW1sLf4E4Jx1axYUuxQ5Wf",
  "key23": "4VS1GdGpwHpgbvw4S9PW7hNzRare4D9dWnrzgaVFvSHssSyhQM4xqdtySfgxppBVdCpt5sSond78zxsA9WdcMfAs",
  "key24": "2nVTTdTMWUsyGUgbwj5JsVXxe6qQmXF6h3u6MJcFWs5b6kBdUQpV76utfqQGKBbCT3UFLk2UC192NGQjEqT3wzuR",
  "key25": "27wz3yNKMvf6N3qPk3Wtrp7wHonmwcahGWiuzMqqUcscPG7QiuC5Wb4XDNN26e16jnGW18YjBWFS8z8XYekCoHcK",
  "key26": "363z7mYb3DYHi23vG4ZCyU9S1g4LoHNsHNDhLxVVn6RpwpCvMfnDYnmmhxvwuqUMujQcKhfbKMUm1aB98XZcymCu",
  "key27": "3PAVkBtDdYZrwRtE9bQ99b2M5H7PZRBPpJMTzyEtTdt45wVRr1ZUawqNgsuve72PbFDX6e8cadg6CHGJc9UKypt9",
  "key28": "2kLE2zKr6U8J4ji3ZQPPoDoC5vrYvDsdwUb8XJk5BhH2aFCK6ZjE1b5AhAwN8GRVLsJ3sBhn4AqGFVwGUHkX27sZ",
  "key29": "4qRkBGpLNR7rbttnAvtsLkuqbQvbSVtpHUTdhpohdpexQCPd2dttEZsXbbmfjsDwj3pEh4jGdsK2s8djNehBhjfd",
  "key30": "5Ba2dXt3bZhSDoekgjAu6WZowKY9CWiHKrRWRsWyYXzxnnAoB7QhyVH9v78yAR6Lg19qpdJoxDRdLNr7hVmSXAQU",
  "key31": "2uEnFMr2NFciSku2PAFV81EhvPiThYnu6D1PtkDKQf7CdnqEJCK6Yeo6czhHo3m3LaU6hNBENxy5G9oRTNe9cS5F",
  "key32": "2JAS2BmQ2i6paBxYHvdUHkaZP3nRbvmMdwsiHJwEkWQmaNeoRJxw3GTiDNjFkf52tbfX2RPgrf1uSEDmRYWf2tgV",
  "key33": "2G8YyyCtR4yPn1XFvPXQjV1KT5tCjxbs7uBCSDUg9Aappu3Yygr4oaE2TkwkBSeUpu3j91UD4D5CjBFyKFAvuhY1",
  "key34": "FWf6jCNweG4u28d1Y8UtM4NnBMTywFUKGcMJXHRDFyYbsGNvLEargmRiQBx3WobgTdzK9dvyUZy7xsM1D2GLW5W",
  "key35": "4urxgWron8Vj3ExhTyi7QpshXhcLD2FPxcQWAogs5Cd8HoN8U7pP5sLT5LPHxvDXZv2xgy9p9MFZ2hZUqVRU1HSn"
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
