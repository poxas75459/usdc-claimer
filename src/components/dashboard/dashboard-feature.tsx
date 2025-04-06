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
    "5T54RB9Y2U5J57npxDpF5fwER1ZwQfEz6wkryyFQru9R4rWMyHtz2ffeSG2VJLW3sj5EhpZHeRQvynP5K7bt8be4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y86qUnfYUoGPYhY8ZcnkHCpScMGCwv6KCfQ9mgLcHWwVxwV1BtF3ajLjzRyUSiftnKSqZeYvKNc8qYMh7TxnbJ5",
  "key1": "42qoTx76mNzsqagZMF3chfgQrBSxUq1Ba3hTa9mFVhaNXN2uAPF6QHjctxyvXy36DoeYqNfy5sgGfRTPpGupqqCB",
  "key2": "CaBf9Mi1Pb3GT2HB5oat3ea24USkAiFhrhC5BWcCLyZVWkKDxRsAUZaznpbmJLnZmREcoennDwxzu5ZN5mDVemN",
  "key3": "4MFyS3Xej6dXdwGuwt2PjqkCfbuZ76xFwzPxbfQ1rstFYcdo43QeRxNJwc8LWXB65vyFvbpkVoHdUUjBu6H9Ug98",
  "key4": "37ZTFqnKfgX8UUqgKPbM1eEtgEZbopQComnYkQz5ocZux7sZCDoMit97KM6kBEfeB3AazDYvMackzXdqHYxpY3nY",
  "key5": "5bQX7tdngAKNbd1umxwqw9TanzsmUCoqxGPG8DFUBY7ufgFHTQrGrY87GftbhuvsbzUm8RyhBpAqL2ENzQGkC5NU",
  "key6": "232a72YJQnbnbgcVdAuKtLW3cw7LjcRZtMi4f4y9dpkDbJmK4PrPJEsAasezmeZNLxJLKHAdA6es9TTrLUAH2QRc",
  "key7": "257aEwQkutHEWqnUndqu26uqNZosJYBRQANrFUbjcpdV84eRXHiu7fuHjBecjJw1JtHRWjDHTiczGFji7i9DYTQt",
  "key8": "54B6vC1h4JLM43BTyPf2wAFssMMMpLhU1FLEPzVAiYDKUnna5unexjqNaxbZH2cCwHiiYphdVs9H8T9mVFnKwBg",
  "key9": "ebaJSjZsKLe4q6WhM7dEGJ9EkRMVAvLpcmCD1GyiTQMiZMXk6cXBXqsWKVnHxihBBSXzfMiDeV8uHwnUZCySn7S",
  "key10": "NVduLmXfwoaDDHpcCcoT4PSXt3UMTS1iXQWPhxQ2gD8Fg4Rn97fCMte7mJa8aufGrGu1YguJXfoz5NexJgrWyGq",
  "key11": "tVRoUyiXgeXw863KhVj6JWBQWR2XhafPkPFkJUEQPFGTUb12Ptq2SfZZa2amDeo6pg9iRYi9a28Aq9WUYq2v2fp",
  "key12": "3a2qoLLAUMMYT7EEdBX3h53rSur3hBiVP6w1gQUZCfvG3VBEn2fhFNeBLyxC8GfYuXNwHXLgBa8d53BTrWytBh1H",
  "key13": "2UK2w3g1PFkn4316RkH4sviNJgpi4NkGw8fYY4v7Kohx1FsDf7UKBTmGCKfq8PR8WRMyPfyxpCjtDZYgKWrVFNvs",
  "key14": "5t61XcETE6GVXAsuFbKKkN9sdH9dpFwsTxWZzVnEbfMC8FiNkXUSMxxPJcGjeeu5Cw1a23Xuqxy7G8Lm1bw1czDf",
  "key15": "3W8md6q87z7sbnPGLrKPUt3dBmrtJh7NjVd9a3zySE6XFRJ2XC88YwFQotxYc64H6d5gT2xCvb6ifV8hPKwA8ivx",
  "key16": "46qsQSaLbwjWyzZkfqfL4rs2LbbWmHjQ14R9iVRVLCEVM4uTJH8nWYcvfTa5PHFoMmNW2AcUArQq3RKE7TGKCktF",
  "key17": "3ycGRfra7XBLfyp8rwKUv5ErS1gL3Ur3vqu3QBSseFi28BJcbVzrtYE1cVGQ687goFbfmXUZ9Yy1iCeNee54Lz7D",
  "key18": "2kDun8oykcASHDDCR7PkLTbJPuzCuErjZ1ssyKDav282Vi6XZAZ6Ki5RsbR8VztU2cMFU6CX7iga4evPF66aEph4",
  "key19": "3qc9mqCyettLVnp7gkvTFLUGrZJHzvs2R3ibFfZ99nThJEuCnYX9mvNRpmWpNBxVaPsjVBbiiWYYPRgLjGxmSdUZ",
  "key20": "2fHjRUXUiLgEMTUirn4e7XbYRE2tVwqUrC1bkcZRKAXtm7tJhBxzAVhSKVccmzncMyQDMTxSvpkWrtg6tBSe9nc7",
  "key21": "5YTJsrNfYBeiE5tPpufBQ53mgpjynQemyY6C4dd1pmSfA3Yny74EcJ1KiQw1UB3Yu33PaWGZKf6dYXaiTtgd5YbV",
  "key22": "3xRefNUgypVmMZgesFs9csSAY6mNS1mqviu1P6fNYjwDQBmaJNfSMYtTcwz5G6ANvrSSzg1iCeRXLAcihb2SuBZK",
  "key23": "4sqGvja9Jg8VyAhz5Qb3zAfVngyNgJFWN2mkKApxeSCBqAxWUSqSTwgfHLEwRtt5FjefG54WQ8KgBqSWSmUoVHW9",
  "key24": "625hv1Bwek5J8EC12Xbvmx8cXg2aoaEWo5migiQagembX1PTzzRMAtQL3HgxFWVeNp8NJa2kUBRkg8txCoNWkRUV",
  "key25": "6YT5v24sMEDUQsdAYV1uXMhuFqHL86TsMxrigw638RVWchSsBPd3qEvAKrTFh1q8B3PZAbFtywcsoU9Xbqc2yXF",
  "key26": "CYqjGRmzRqdu47cVPUVxVeHqa7PdBhMnCNcp5jG6KoAG421MbkZ2mC4B9BXTuAybCNssZABDqS9bPJWH7DnhYmw",
  "key27": "5a6C29oaLRSTPqe4UVJ8qhCCPkQDXHf7N5xqTrgExmuggStSJ6c7R3poqKrBoDwhtUTktm68xbcVsfVnVVMKx5Th",
  "key28": "3GWaTmWyqYrK7GaHfEvkfibsK79tS7iBMPnumLU3UCA8GFVgcD7dCmPB2kmbWA5sEBgCVVYD72nuDEGD46xbiDVN",
  "key29": "PDRZ5kSNem7DPL1s7fYHDGc82scUV2jaiqkmwqoV38W15fbSegTh8hBVCjt8PBt2GQfpFkdJ6M9xCPGititA4p8",
  "key30": "5zPTjo5MGJaUUCP4eoq1yfV8Pc8n1BHRW7ZWByoJLV7oT1hVHbfYuJT7G8118g5XLtsvfnWN7fcE2QqXACEYXJ63",
  "key31": "nzpYLvUG7jibcM3Chxnw4SAB8QiFnzHABsRR1M9fZUHr2grTSxtBNGisxz4B4k11fUaUzqcSpB3akMKe2PiUNMh",
  "key32": "3NxK2cgDZgsMYv5JgVf15btbvE2QrWXz43gfeKkpt4GKmmL9DwVJmsRpHE29z6k7W92z5b2wdLHfSBGBkGn1PtYx",
  "key33": "2ht8WQfEkvnfzzAcEQ3agMQ8vcSUbemNqfomRAG77BSxthkHMwrKAJEKd89Hwz3ti83MjwnXHJFGc9ZPCyKGNPF1",
  "key34": "3cZ7odoT6DxfiKfRWtPeHuVEqKjLMkoUiLT3mvzKgYTqG7PSSGNki1pksedZnYYh9LgnrFzUZXkt32ktX3f1T2CW",
  "key35": "4obvbrX3iC5JkvEFsGViJdEzUCpqHb9hwHpZvBWE2uLNxCHKVGLfFSeNzyKMi2M79jSeUpG2YENs4sav8arGAJx",
  "key36": "41GDNCJtCoUd1s4c7GT5QfAxUXkm2UfgeYaLL4Tep3C3zGfppXgh1Gq6QzF7895Xce3cQyEgrSRJowGH8ER2cqWc",
  "key37": "4cadpSzmJrG7TrZzM3rn4LJ76JQpXYvAGa1Cj284VRDQGHvVVBhAkMQVnvakvUeKBnHg2xGV8PKwZFTZjfyTFtuy",
  "key38": "4YyQ2RXuxvQSPAMHi8ktvTjCTSk1yxUYrGvE1dFYudzMDnHfoZThQpcuuSMjURYtEB1kG9mR6KVazVGBC6fjdYpf",
  "key39": "46VTQqjAuesWVYjLaL5FwX6PsQFpLFNZsym8fH5H1fWy75F9hN7NcTKLCCd7P8MCXYjJxRN5aFnyD7CRFvLGmf9C",
  "key40": "44FUQDtxwT4Y2X2h1QrHxUq1A2asAnQz5hJRZFXGgzPfW7sD58Hi9XdpVcwqNcGM4sKZAt1MpM4MWFMQ3heqwaTi",
  "key41": "2RLiAxG5A7yEeDQnCdMqqMmbP6uk7VMB6c6fhk4o9CkJFyEvK7S3x7WkFbnndZcTJ48WeqaSZfAa6uT7ncQnd28D",
  "key42": "eNtGhwFFLN5iMDrSG4XgVzGGTVSooSQxz8EoXy3zVRYiND9gEF6LoffHzpq6VpQJzPPRGFQU8hhu2Wn18wiEcJ6",
  "key43": "29hMCMgdZQCxvAF7tz8qGhLmax5w3479MdJNWC8kxdV4WyvcXeHJBFPDj4obRFtZzA7Ar2SJAPBGHrSA6e9K5Fhj",
  "key44": "3ySRnfq7iGVWh1r5mLqQLcw2X1sGyffyViSTRnn76xHq51XSfsTLjGhLiBQTRAsN7YWw9UUB4dh58U61KW9HH4Mf"
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
