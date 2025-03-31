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
    "61D1djUpoMjFcnyJ8Hnf19Hg9ytgVoYDT8dET935GmM8TQgUc1q933RSS7cJyo7vK7w7dBWUQU5TWaHfUrgbbRi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X3TsPhqEtAxCtzNnibVjFPDfHg2Y1nAWBqj2DAJvz5YhpCi5uWjTic7szd83PsTcFNv8PduPv9y28UoJQ9LsjCY",
  "key1": "48VxPHhfqdbmYUvQAYvKN9rvghq2C76jbmh2pCPQXcDXEhAV9urfHKgFYD83siN9LgPipAfaGPFPHMMhQiGAaJ4j",
  "key2": "dmeNtBKmSU6f13osa6uHLAQpGpdP2AU1J1f2m5fx8wBmBCcw9g6xzqsTLWCLmdzoCZ4dZpegZCZHxfLTdwGf5cW",
  "key3": "55tJHSitDtLAAKHHRUGWzPFRDgr9UnfyzVigmRKAwGj89SfX6u81vGzuFb3irKHCp1XqbgCDTqr71u1CwwGdMhJz",
  "key4": "3EaM6bZ6imWcxxu7QabKPsV2shtyZ3nUFv9GpnuQBaRULzhrXknPasANNXYQXXPHRghQrnFWWmLqjp7ZTA5EC2ki",
  "key5": "3HPvPhmWmEAyBNeQKcPzQg2muTg2fWhg6RHGpZvZmfUBwfrjYuK132xRnVhgrsBAU1HJtQK3PMy65cT1BaF6G6HZ",
  "key6": "44bkhCb3vhMgohyhpzNP2rEZf4iKPEo59tDXZ8yN3HLLoVeD8HsMijPchds9Z9oKMYWuGZuhRbBy6rsT4X2rkx8B",
  "key7": "4PX76m5zMc3LVARw2wNEAMFZrtVfMR6sU85frgGVf9QX9jMk5ctZaGUTc4jVc6fLZTqYcNfRRWQVK5mzjAACxcB8",
  "key8": "5SMNptnXggj4UwQMj4RUQtSzJV8yKZJfMZNVG1tAjpxvE7ZKocowCyrxebD1wfBc5g6Xz6kBe9DirXbSoSuowT6d",
  "key9": "5zDzxPLoe5V7817inqzCMYS2yLek8UTN19VoHmimZBRW9fmQHUc7KBy2xk1PpSxkvZp9Vv8zc54TE4cnaGq3SDHc",
  "key10": "4QZ77sEeEBMpWWtitHEsH4PPGUpgi6QiQ5hidZdjvGtkAqwcWpBDu8wYNQFMJZ2SzkTr5CDPAvThzXxemBcTBnLj",
  "key11": "2Dy4FNG38LJyyi43VuW28QFaXQAaC55jjhtyBKXps3Ai4QuTxeRNFjCvD3piyZEnKDtrJ3BjhupiP643nhXkFzjd",
  "key12": "C1Lr5m6cbecZLCuXsVv9L7BX5tayAWiTECehyHvujxLQ68ZXREXxo2uSJaj1qbQBxu5GcAdyGU7GJgQAyHGigSZ",
  "key13": "2NZtTREX75dGg3ngugtKjfopMSbZpwybz6GG3jp9MSGa1eWFRFGhTEkqgn83DmGcXHwzFdsc7FjF8qGBs5FxR7Me",
  "key14": "5y2A1d3captoHQ2NDzqnZjzYKfVNSpR4RoNg2kDNMA5Nn5mpWFXYNZvkDtpBEET7fkgnP8eYXbmZ1v52PFJmzxkx",
  "key15": "5AJa8xahiVoK674p6f1Pw7fTNKBHotLyCx5RedqGmGv1JCFQ76ugHr6xv1qG8YiQPx7aWKhJLQRuLGm4nMyG2ovc",
  "key16": "4zTNVTSa8Mm4CMEQWDREQE87W68rC7fpWcy87LxXovLaCTvMFWNDCXDGxCYy3CbZVQY7gfon3AYaxzCpxoU4X2Ms",
  "key17": "3jQtdtqmYnFA7ft53yX1g4bfWCCLLNp9WSDz25WiHbArjkKegEADox4XA2NRDY2AVbGtHNmbHP1wp72KjkhYdKn2",
  "key18": "m7c377EhSN3dxne1aDec6FdF3PJwTsi5kxXZzFgtYRGgQpxkGATBBBCbE3uLhn18mQd95xBGqZcKWdbJVSTXEcL",
  "key19": "r9gd4BN9Wcjwz2AKCRpeAtTqMNkSkBcsxoZD1Fmzo45GrJCiYQBacsUVan3bWfSdEKq1v7PYPbVLuGqtpb4vQGm",
  "key20": "4Xkrmr8PUc8PKKfCUCrrmUKcnB7f6Njp2FTF4FCmLPZzkSkGcnEHUbGgRnMBXYN6V6WnEsBCLw8PbbVktnR8hLFg",
  "key21": "4jpBebJ1KsNu6wZaEoRLoLajwhctGcDGrGXkdFZ843rueribS1VamY2XAQhZWtuTkVdceQGjSd98YZuzz7UygFfy",
  "key22": "9Uy71va7zcKwZa5o8GxpD71fcr2pSPjiXYcfBc1Tf42JGgGtkexvDxPA45CjXTAXnEcFic6a3obZZZUaAcyC2h1",
  "key23": "5GQCscr9wVTELofzFhpwKWNKZQgWxosHFQPAsVSUWWQykDnxtGwkHaCKGbkwiboMWGjUV3cFzjfpSW5j6ag1W4Hq",
  "key24": "3V8kdPwhWzwjU8hE8dBpDb3iacVxSZdJfmfLZDBtyqqeQXSWbAq7o4Wow4upVRsD677gW7YvbQXwciGh2q2SjxA5",
  "key25": "2oxo8ykUoUAEXvDxMu8tBNYN92EHZgbTUnjDa8884hDrn6My33NAMR31NesU98C1qrbozeMYsByaCL4qRqoFDY8n",
  "key26": "41F65PssyHR2FhS9eYNE47iebfPzrg2imozuuE7554uAvqBESJfDcUJPL2RgC9YF9xCJLcWGEbeFehvCmqNsUw2R",
  "key27": "5NhLDDHHJ3HkGNXaEEe5ubAY8nyWnky6VHEKC44SfNmsGkBv7BgqF7xy3md4QxGf63RKQfhZwB68J26M14Hy1nDc",
  "key28": "HoVibtRfcjfD5rKySgNuZgds9AqmjZwG9tJqi4YNh3mfn5sp7KL4zierC22WYsT51a6Tm6HDcUiLJQ6wxuwAcpw",
  "key29": "dorEpgGdouwSXrcpmQ5wC9WrS51XDAUGYFUt7r9d5nEjKY38aErbcTG6vCEhnC6NVnwaG6vuCDfkz55BKhsu84a",
  "key30": "DLAfKVR7Zv8tVH1N5XfVXWww5ZpAsdsJNzWHkT9bZFKvdK7wi65Ek1BRjyLGydzjG7Dq4bQaE4BN2vUacWyR2Fb",
  "key31": "2dfZ4BNeKrCpdDFQg73wu7cTpcUMMvoA6kGK1cnRWm5d19grXhM2kV5VVaGPnvhFA6Ej384JE1P6E4xtm3jnGk16",
  "key32": "46rVvg33wac6LjYG5BxYcoQC65jtgWVMzt5Qz7QMU9Pe19N6QNZYrFMTbgVASkWrQuD5rZar2ck39JBziq3QC1aD",
  "key33": "6167DmwGCb1u4TaCpLiyg8ipSar4qM44iHh8eRafk5TAiVa5XuCYT1PEHFYiNDB1X33wHZqeWc2B6tZU5TTzMxtE",
  "key34": "2ejSdiV8jZdtdf2CsHJT5YSFp4NynxXFjLbDovoBcRfm4mCznGytx1uo4LsTMmKBEkGyWaS43QvnTi1LwwjfpG6z",
  "key35": "391qzRUprnfVcg5wRf24myjVC8eyVWfnb2sHmdMJKVV8wdnUoEjnudQikE7TnNEjCbjoCA4zPzwUqTdqUtPnSbiH",
  "key36": "5QW6MdrVhXL2bTrWVp6cnqfiAmbVgoLqAyfKxEC66VtFGoPpR8NcdZf4BMZtYhrhCFs63WXLexTqSjCTE5ZNTG95",
  "key37": "3gNNBd2ZesiUuWVjNR3F3JFosAW3qYPaEKbsxspw2JiwiZBmU58kuBoJ5MJ1EaaEGcrDhL1eHLE5T3TbjHBSakcA",
  "key38": "45EyPWAxAQx5jJ3TjTTHpPC3XEakypWrTVno5tHKevt3izmK4bkGNJxvGc2ajgT9Djb7gnyQgRPjVTXfp9dpyEd3",
  "key39": "4PwPrCTDUFnjrngwGDsfdxR4iSKkM1SdyAwn6dfJc4Vwkew5a4fGvU7P34DBQkKkz9oTMouP55GovRW7nYgriQLn",
  "key40": "W89kQRGBs141PTzTHVmT7bxUHnsZtiU3qnxHwfJcRFygZnSXNQguwg7hkX5J7g7C8ePXmKSvDaaWcXjnoVLEbB9",
  "key41": "4nNTQHHYDpFfq2DByD6Kpw8TfCwmHcDEgkyWhVgiNVSxLegfrDxEScRsjdsnwpWJiD2J71XRPN3xAKXFVjFQt9KA",
  "key42": "5r18u75KE9XuHaYvrKQ7BzJwV6M7wJmRL8qDwMjnhYMgdmkN6sw5KjGVER8TaDAeyaE9VXHSKFWrB1zU8FKmiYwj"
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
