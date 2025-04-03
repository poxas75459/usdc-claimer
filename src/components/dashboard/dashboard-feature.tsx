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
    "2UgKVoibr6ZPu9CjnsJsPd7waYboJDS3VxM51yTuv2qQyiMarrrWqaMpJ6uF5ebqeRx1v8DoTxurXALMn2UuyRmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "295GCE1aYLsy38Zy3pRiwLtNxutsCS47ZJBVG1masxEk2qT8HGeWoUnfTbRoDqcrusAGVhtkYUsjnf6L1CtQ54b3",
  "key1": "5WqKsacvXLEpTib3U3rFohPkagFnr9wMg3gCjmdt6z52rowsFpRmsRS2sQRSBxNUTxyFRRs3GxjhdXcnRDCt97bN",
  "key2": "2ySKXDaJqVSViQrreg7FT24sQoVN5QT515LoZGELqcs3hbgsUYUcu5xEJBtQNz9rRoeGaVH23ivXiBaeQV4sLjZp",
  "key3": "5eq9NEZLhJfGxQf8TERYtq3MpK36o4F4JNBfgXwz55VW5xcahtvP6juMkPJ21VCZjhockjNLBC6avnLJ53fzkiTf",
  "key4": "4pG1bVs8mhS8Uvx4eMhiqJbo84d6srg27czEbXtoNxR554iZCkLgQ2mvou8AhY7y9Yy2T9syUdnMQG1WMFfLWD7S",
  "key5": "3RFBW2YoUVEsmSw1ZufsJiApvm3dNXJa96MwJdqVkgzz5CBwtpEFoT26G1QvtGWiWqKZUHFTftmckwPgy2mX8TeU",
  "key6": "5SH4smPtFvRDxLcrcKyTobGdxhuBKybBsKi5nw3LYmtyZ9xjrrN8EzqUa9QqqR4Ho13FJSs2yaCzM6TqxQt6mMLF",
  "key7": "2EdYFjGKXwbNmsJcGJSEVdwabGP9VfZ5UcPNCc7B1z5ermzYNxZDNn5dPrefbZpk1EWopPjHMkohvH1v7ighicgG",
  "key8": "3Ja37rEiVgyMavGmrRiCX4dsGkm2dSCQ5Q1ntWe9fYv5oeNPwaLDEJXu7h4qacCdtaihJt5nHno5KxR5RmqBC5n8",
  "key9": "44Ze9oNP5vd8CEoH3wLwvi2Z5bSUvj32X9qFSFjYVADgXWZpCDzj1o6f82CZBhrUc7njyQ4JQsPtHDxR2yfrb3hV",
  "key10": "3mQ4x5J3P6u8xfDHZoM12cNYkw2eD8VoVMkzooWL14cEBx42E3JT5uifimEwASQjNkdtrJhCT6ZoW491gcLSTMYt",
  "key11": "5P6Z2GM7eNo5TcbWpWkPA1apQpYgbs2U4ALPq6hXsqah2Z3DHbasMeET4ndau5ZuS465sgtZah6hJj7VWh6UJzMJ",
  "key12": "5tGpqADiyXF3NJH2bYYHC4ePD4MR5E5qAsBMoBYttoF14Ut7PnvXDT8C9ypVTLBaaFLcuJdxVYdR7n7krSmtUv9A",
  "key13": "56w2oMfhAF4Nw72TG6b8aLhhLUSn6bTzJt8mZ766aNKhwNTcgTtFEvJsgbQAag5buwXy2L1r8FAPCW8WowJibmUz",
  "key14": "5o4jHwfRefhQQFi8BBiUiR7GYinaJ1XvZGZbzgeBqqPPPeaC2bXg8h6GuLBX3GqApfqcLyxVSa1KbDXG9CAUviQu",
  "key15": "2Qb2xXo5BuUW7SPYhQ6m2M5k4NDT8M9imheWSP7Xyrf8KMcgKekVzsP2y94kJDM3vjYN1zvf6Jc9uHL9bUhmZz5s",
  "key16": "gCaPWBWf9rQHYWT7MFkxuC2Dz3iebsTEGg8FwxpbccQvhviT4bemuLbVtdfX55SBzmj3Ret6wX9Nrdu34ErQXJw",
  "key17": "PpWTVheWKPfAC2Rkkc8QnvbHyy2gvNVS3Q3PaPnUxqdR94FY3kmgn9zqpEa7YYGxnbkxNAq2yEfPxaCcs9zagpW",
  "key18": "572Rv8PpvZgDAjaoWphwr4p5sKVicjeLKNWpL62uh1ChBbqqPiSjAw5Tfq1D1MqkyRY59FCY7FYZTQRFc4dufrp8",
  "key19": "4xwfb7svHeByLWXybEGEMdrGysPQN5Jk1Jk9xc2b3uECzsTcGqDbwnQ4bWUKmBH9t7CSzMfCG3As1eAmNfJcgR6T",
  "key20": "5qQps8hqYHFnuHSZL5ucsHVieutghwtQJz11eebSenJ5iRPUbqRnXEMdkK99CYEBTyQjwLMbwfxd3UNCsMED1SH2",
  "key21": "4rgPHwmkGwPBXADjBkTnFJNnHTSbHkbNTQn5U2WQeQGVkNAeqx1WtKeEYk4yio2z3F1NPJrQHuPP4JYsS1xyaLrd",
  "key22": "43CfQvvxMJEXMbvHDJUEYYNQ3rks9fZ7uCLu6HZvZ8axfQChMQXi4QKvepm5oTmCenLLVEQ5aTRuBWx9hmUJdp8F",
  "key23": "4uXPRp78b12k76VgZGWxtiUc89D16N51LGbVWYeTGYXHtkBbu7QzCfKkR8c5euXbwy7afyTvgubv2MdHRnuk8i2u",
  "key24": "5ipBE9Zd3CdnJgpKg8bDa6kiNSBRuEriKksyC7LJrN1g5opNmjSGWjJ7kRt4hnXhWb5JFkgYTX8goF1eyhwLvgWk",
  "key25": "2XCHf3MrA8LJaft2qhWKinnJhfcuLsQJ25Fp3pHrSjrfPLJrt8eBotcHAQghdeP8VF1QEN2vZH14DLyEG2iLdLPq",
  "key26": "uDwGcApFLvmhNcVsDuWjJA78YP8qesVaxh6qBr26HnLJRnaxtDxB9tzkwEhuaXdwrAMrDHA99vU2GZmJbbsWdtN",
  "key27": "E3PWT1bb1rexHSrSLYZyPBH8Ny6MCuboe2WFkTP56EGSVW3h23RuVTBMhncawbqHPtrBiyC8ZJwN7anpjTKWULq",
  "key28": "4XdEde68EFTaFMN6ixtVUgTKjWgBQ9bCYKhUzoZQsgmvkiW1B1iiAQtKXiF8wcgUQjoyXZrPxJmz19rpK9WenxMr",
  "key29": "f6cu51CGnZ1QrB4v86gEq1k7g5gS2CaDkinkc1Eaix7Mw157n8LHERqHHMGj2pRsfVr3xWkfj7BEwyVFva8phxQ",
  "key30": "5j2J7JNciwDs1qbVUqeW2WaavVdwHDWvsbu9Fsi11uEKMWbQiFzrboRfNV2ZRK5M5eU7XaMFDbnbQF2NkwsdzV8t",
  "key31": "3T4mtw6vjMNbXYXe6h6hSy9iFBnRarLkAujDzEuySMvZ12ZRP5zezv5uDVa1qsvN91XpnSu7gCqwCAxrkpjnTWey",
  "key32": "1sySV7XQBNnkYARVBYZsUq5Fwemhvk5DqRpQc9BH3EFU8JEXTBqXsKN9ocFjaeK8hi4MWBMFRpuUWXHr4hPvDVv",
  "key33": "5c1Ntn5E4iwK9NpBS3uquNG8GtWMTJh6y5qi8eb2nxuFzxJm3g1kof6cctL8DuyuZD752c5yUZMe5H4dXSyUScDH",
  "key34": "ugY58yp93xCeY4uDjVKR8nrCeqD37CYvJfocpDheEwrjhjBXz7oVSyAZS9rqSmCPiHeZZYSsAPQxT2b6r3fd8et",
  "key35": "xXNZy7QrvDCcAzANqkPm2LrSD6vHbX41mx8oyPE5MwwR76BsMKd9DbsyyMGbxWHqcNvqwdhAPmrCjYT5W2HJ1ee",
  "key36": "jCE9TESWbryNsVV4hpxYzf5ZwmPVfc4hkim31WrDmAx3qpFJLxeEaYYnmLbsuPrAQd4qMJheCiyrWG1arYiAUaJ",
  "key37": "5d6TUMCyhWZgqauqKUNYuoBeh218bYXunDbXa6iHJW6nzxRECWPYYviChGCGYDPYZzLMvNiTpPY9BNvg5b2kTHJT",
  "key38": "58iNcaYdZSz8XFutPvDyEHxh2ZWmEFYiTkRneZmWvsEbdxekuFUFApptb3sU7w4xCxrtqsXsR7fX4cX4bobsRNJ8",
  "key39": "5KUSZfi9Kmcu9YyPAhXtsQ89ty62Vt1Yr4fKy2AcfKKtKKdzX1BHE2JZdG96XcxGbjrhFKa6v1kUvEs4r9EVQYGx",
  "key40": "2ZcQi4dtA3zizUUEs7rHdZErPWmc1DkTFarKdtF8nXhhnap3B8KHqDEspebkaVwaU74PS3KdMjwdxqLkALFJXuDk",
  "key41": "5W2RvindH4r2pq8dLU6xQafCo1QpGALHyXnMNjdZjpuibj5Tozo5dU1j2occs44e8nZpRHyogujMUwJU4Kyvhe4D",
  "key42": "6mTBorE2PFNg2iBe33XHkuWUMUKGLdVQkWpWmZACSTDMH81dN8bwzrGtShN19hFR5Ufn6gRpAasbW9tC5Y17ZsL"
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
