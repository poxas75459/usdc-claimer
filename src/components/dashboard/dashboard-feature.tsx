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
    "3MswkBvM3jLpHMGq3qvZwjBRCWYEc671pXTnVVEc2aVagNPGerG4ucHWF9puYzAWpXFg2f2yi85cmvJaod8JZ55t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DRo647kkGZmTD73kWb9J4ATDB3nf1S1yRDBRKQH4RHthrzJGftN2HeK2abMDPvaP1CgoGcvYn4CfPLLExSs9iE9",
  "key1": "44z1zF3FbpKaddzrEBT8DKEMDyU4rykmhbtDqzj4SPKcMB9w5NaugropPo39tpaYE5haVTAvq24baR6sEygh4f5a",
  "key2": "5fkAYNmLqfsKJbRWRNi9m81c9XrrKmFdxuC4CPW3A7iTXChvXdmh3sqjhoVb9EfZUw2dK9Keani7xH15nTn5cgE1",
  "key3": "2VhkxUjQdUqXLJtPLhj3SZ8ST4j4sVeYgKoaajSQEvfrG1tQZK6MpUpJyvrB3bSLthfBoJkAvh6iAwmUnkRhgKe8",
  "key4": "RYZraWo82j4YgGYtPHZASx3B81AZ9VYp8SmzSrQAa1eNRw9bHmyAYYnGWay1XkRVSsPCAp7Tsr9yKdi2ZWzjM5V",
  "key5": "btnCwsConPErcYHtoePizezrSEjEpGnKKbjaPauuVzY6oVqcV2FiWP2KnFD9bjrsqrUaWtbN43JiQTXzexBGRWt",
  "key6": "sAuN65k1vidKP3cLq5e7AB4MJri8F9G3prj1yjhjBWBZLzFR2sV1XxDZiPrWqZUcvSU3s2MrZ9ZrRRVsckvCFgo",
  "key7": "21YMhJ28iofd5SgUh6oyRECh4FCUBx5P8suEZHAyEAQucGdK2ddSRYPqqQcxHWhLwztfSnJsS6wCWe6yvvZTXUnN",
  "key8": "k9AP7AMBoSf837nSgws9Znqv7Wux8273MMwU5u1ws8xwbQ1cfD7x3cWaxKnmKRpfYD8cMquHvEjfggXTtYiLeCC",
  "key9": "5CRFBdTh2XWVrGULYohbBL3cMNYZmfuntMrh4qkfj8GJN7DT9KFhyF4zVvv7XHkXtWjN5xxbusRmCKxWs9VTRrEm",
  "key10": "3GUF4ssbFrybwUkuMQkngfooHicm9sjocaxV4dYs1B6N8HSSkyyHi1UJxwVBySj8SVMvN64Antts1yijrPJyGKyc",
  "key11": "5vTLssMoB4heTYgwmKvhD1vEzWbtZjgoguWPgTBEDXLSSHAHJyE9ThpbcyyNuU3JQc2XmBRU3pw7rmGFpxx9C2n1",
  "key12": "4r9CSUP6GmMF39CJ8YqQaHe4Mqh7U9v1dBNzYkdiwH8jb7GujuhS2ahyXU7FGX9wPoUWxNiJ8w81inogcu1vr27D",
  "key13": "4CT39XvxM5akG6CwrjeqWSG6aezL32KudLApqxK2M28X3EMr5tfm1fZ53nTXTfnMcwsxWGaz9vQBx3ur7yXuRNx",
  "key14": "2fSDsmUA6oqYnpCD5oXeyp7tpRuRS2rGEYV6g4BfF25ThZGzu3YhohbVVG1xS794FFjsBGVSF6GSYK61AikgeYww",
  "key15": "3ZVqeicqSbk9x4hAYAZ4RoKhsHZbhVKvu5qseLXPVwdXPyTCXh1VNr5B6PKCx8L5AArbjBtBzRgssDaSTBcDNdDL",
  "key16": "5CANvHaXRRFRKmmuCB1FRBthCPyST1z4zZKqEoHKzPLA9grxU2xLXrfsCTxjfCH4YvG3emCdQsQD9WQTReyy6Vp6",
  "key17": "3Bjpoq33FWo6YAga3y1yCw19eR8aausYGksuB2CX7pQfH7fkSASQt9FFh38VpUKyLP6ogYVhKXsBvuDQETFMk6wJ",
  "key18": "2C9FpL6PuHk1TENCQg3VWXaBoFBw5ZUSPCwv4oGPTz4BrD6RwAwKQKaaYaNLkezMr4TDRZhYJrRLB9ubHfocLU7M",
  "key19": "2mefYpnx5GpxmpWoqVuLqkPBUVDEhtet9SV2NabhtW28DfotoTXWE1UcFAiH6SocRrZpZ4RtAKS4NQhV1jNfH7gW",
  "key20": "27Vmqy93WF2gb98HAnWv7d36QV6SwgFFTMmGAsiu4mTmDAK9rPwURCuBbBLihLXqqY9n5WeCuFMjBffCNeAjVTBh",
  "key21": "3Z19iyEHSvFDxntrD73t3DXjo6CPG9V8e5f1c9pxJaJJMnYG4HBmPhahvCPP2jHqsCaan8n8EhVm2KXHdLfBa7eL",
  "key22": "548TLkRjfmNh9LVekyevjHB36GiCV9vbCoo36v6syMkgKKYKUHpZWxsCLzjn3Wa6Q4gMMrVfUtznxsNNtNCJBjKJ",
  "key23": "4bAzzsW9pddxzogMnZ9WabeqYpKNgQuxVdf5YoXhS4Aa3ffAU77CUafK6EyKKq6JDZ7tM2eb8mwSmjdjUDg44kAx",
  "key24": "5g3ueCv1ZR7TFRmohCxNg4Sv8zLziBq1vKhZbkFtmXNeFn6fE9HoWKvM2tshMsuwEEvZBspv1CnGArTuo58ASMMP",
  "key25": "2vxfHjNbZ4LbJMpfkU2VcUPEMzKxLvSjvXft9NpoYHjZzTyWTDsTdSgsQKNfhqr1P2mfgq8HZ8d51japF1WuhNBj",
  "key26": "5emfAKx69aN41jyWTMzM7RwvtvRFbTZMJSeeKLhfCrLxN12kYbAFPb56w167QzoQCSURUUqta1GSC51xsrmKpjhB",
  "key27": "S3NQY1wy1mcb6tTe792b69FPAhKLPDi9hy1wtBLNJCT8qL5MJaE7K7qtFnEbGt8nPuZe8SyNihVJte9jQbwSiYq",
  "key28": "5jt3ni6f8nfQbbCtQGstnQenSnbPvSD4Nm5jyHH9V4R2i3LuQhEsZy82AWsFjNdftN8ns3nFk8WRQMLtbdwDSCLh",
  "key29": "45vdNVYCGEtfTJUo7qRrGGWtioVg82FwDpvHctmiNKmC6DjxxBRNDJagb62XzN9ApQqHoL8qfqUE3V2Yvkhuw4Qq",
  "key30": "35CXExjy6ef2HZVFQb5aPsHShKjCkpmR1nTFsHQisTwuET29SPenraT88Czgsxw9BnhRQ3XSwTK76tkA4wxUpQZq",
  "key31": "2313jU4S6mh8TqRDu8rtwb3YtQ1nBe3TnmMtkjtNadhHSEjASefVL2zPNwJaEshPzczXnqZHUELifocdyU9ouqnh",
  "key32": "3aqViRJTkT18goQA7gfBaBJokgja31S9ViQ6UbK7Sox5271hooLeFU1GisvtMiJVDugvf1S2GBghzDEkPxR8b5SR",
  "key33": "4ufbnEVkrzdvsPL4Ftiimg5shRZT2pztFKb4Axzg5zfxagbcVkiC6Zb9uMiiNfP6my6Fmq2aWeRXMDnbxjusMByG",
  "key34": "5eBApQuSJneHFYc6uKe6ZWyS8bmVYmNFr27SZnKPSU1WkG8ZVpgELqFuWSwartghQzzWDeGpXT2VrVPcgJhMQGuQ",
  "key35": "2VdMkV7ZPHUt7USGprmGmmuX5WUWjMQDyzhqq4QSzEC1ukUtspEsqG1vzttxAh3k5c4sxc8tiYtRSQPUezRMB5DB",
  "key36": "4DqwkyuBBkxKqvGFdeSwjuzUUBmh7tNH2xrojUk2btT7u71fuZjKjsVvVxCtN4djv5ExACWkEYTvzXgRLUNTveRo",
  "key37": "4Td1rB8SqfzZxgM28BmNK93nFwxx8PvJFdoGUdkETHv7XWanxEe9W1Gt35hfmNswmGs8JC3euwKYfcXRr3nEL9y9",
  "key38": "28QQC9d6Y5Cs7Sx5uzZZmeW2nojTWWridB8DBWGGKGEwjvnqC8uSuwpkBbX1m7CkvzX5w5yFik3tBGZKQNEdQApz",
  "key39": "2VQnp8XPPyCmjZApRyhLhHJk3RAoGRVfewTouHUsN5TFGiQaJyDGLw2SeEyNm44z82MmLfht4gFH2hkvptJAUTMx",
  "key40": "eLzfuGbMgAW5YRB8XVj6eAEvVpsbYEnQTLkUgF4jUBFZqLf3ovZ7sLBBQyj6qVXSiCgRuXbFdAiX7NzWMg9CXXk"
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
