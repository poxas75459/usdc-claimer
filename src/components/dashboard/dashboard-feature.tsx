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
    "4UmkQmzeRSeExfcSrapsFRUnTkuiPHsJojJ5J3tx7acihuQddVosLyEXqeDZejRc3ueTFUHRsnxe21zFYJ7ZcGce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rBUiacRDyvke1QcZuCvRWUBoMoTG52yMrpJR5oEjZd5uPQMcuEQPEDAx2DgVyiWek4kGY8X5DijTVgKjSM96xHw",
  "key1": "58SeX7fRYwSvXZrUSEyGwwNYLWzwdmhGnxPPqSLicKH1RM7qG3TyoXrEMPCSZ671N8GMKgvmoWRc4JLMfx9BeRKK",
  "key2": "jERU4Zyhj1WdhLBcuT12ouWnwExdLLTgRdPHY9SWxcLAKeQ7AWBXx6c6oiHqyDRmYTRHqRLJ3d5Vjsvyi5SRThC",
  "key3": "qmA3qXf3UpWfL6K8AcavcEor47jZcui7mqWpDA9FXJwHDxhe9WpGAajP3Ju11serQLwQHwgr6cwPvGCmt6p7pur",
  "key4": "4CuKHq6p7j45DZ7r8P7Uc3yTgpKwGnGMDqoncEaNhLmZfYf5RFbXpAwBEekYuyaB2E9WXUjY8E2g17x2Ceikkb26",
  "key5": "2NK9dTebh5XfUSrZ79CxHBmtpMEwD892tdFPnKJ97Xgh5qvjKNx6zpk57d6BoAGkL3wGDWE9aQjEkN4VFVNxWskR",
  "key6": "npF8LL3tofQWcF6H1PWYqy4KVgHmeV9WSXJ4WkMsz3D4LZe87Ze6aEdhAoHW4Rg4e6fDXKvLrNhMhx544CToUzb",
  "key7": "3xKivCaaxvQh4nhJTaKQdS2xVPoj1nWsrZPezA4i76gPxMYer8r8YxmMHXnTtGcDUfv94vX4QRJAWSo1syVJhY4c",
  "key8": "WwJB1mXDiE2NfSgFFZdd1P3VWgazAfxFkfjiGu14vkkuKHcaySiGk7UvfG81KLwr6zQmbw51M2jdUPYWLP4mnun",
  "key9": "5Vei8qfrT5uenTgnxpdnEfggSv2Uvhee3LphFZjoX26vk9my7nz25i2MB5Q29sR6dScpvatMcagqqTdV8MBDqbcW",
  "key10": "2XZ3QriNUA1LRaAdyZze5ZyWXyEHmgPrpF4KbgiB2pMSV3khjU8KViV8TmuCpd7x5YkgPjXpUWS5ijiKHtf8shmv",
  "key11": "3MDHX3Yi36B1KBmPKruASVzTFw9GJsLJetdobF27gFj9NQ4o4WYGGb4UucRzE3iSNn6GTnq6v4WajoVpzP7saCgd",
  "key12": "bpNJQ2amz4dMSyQ2bkPnjaHHRaLe6jnRonKuYutgmeNAjWauorKwPb5xt7aFXPyD6akyRQr1EafkV2QDmuC36p7",
  "key13": "hNXwkG9cJRDbKNYBwyVh6GT1MTExJQogPKTjmYW9saCLHj1khmtQvZH2oPSmS7uTaxpWSwjErc9CNszrzTSaEog",
  "key14": "8DCHgPR2QukXBG8Jz3yURh5VGwp8H6GdU6dvqqgifecyVBcvRdnoFsmXjzytDnwWNkTfFQo249EKUm9DKUjWNgo",
  "key15": "SVdZwpqGaaPWuWFUk3S4ebTuq254JyjoiuzR8zer81MR6JALHbKnnwUBXBfAm6BbhQCaSpPAKyvXb7ogDpysV3g",
  "key16": "TKgzwU5UgR14N5vTGSrocEME3mHGyA2T2x7rZEvw2JBcdMbdWaxEdgDP77g7VQBikUNVeL2eriyPGuWXDUzaxom",
  "key17": "5NLwSbutdAoYTyvbVUmPDDYYDRWrsjKYF9NBV5yLEuSzZ1PzWaM3LJBSotzirs3xKdQczFVd3YqbLRDmT4J5oSfQ",
  "key18": "5XSpc2LzQNQ9DcziHH8w3GUq2TYT2UF75za3W84SduBpsZGPBUQaMvdeFG55xMUxmVQMpWck1eVBCiT7kvnyDL1H",
  "key19": "2S99m9fn5BjsZmd5Me1PC59tCFy4CLmAodkfyyZtyXhM7NDY2N71hGsCzpPiB1fcNDqghbiEbFUMwe3CdqyNBwu5",
  "key20": "5AKPuEu9LqiY3Vm7XChSJfRBgmzc931vZ4Szm2MkcRE2iDuBZh2Ryv7NDcG86WNKJ8r5oFkRfS4ztsYBZoDS5SnT",
  "key21": "ihffFwdmPZF9mZTpfkN7tF5WTzNFeiAtaxCvqRWTy5gpHXG2zMLFTyJb9FREben6agmJVxAG9MB7HefBPyhFNjB",
  "key22": "3UMbFpRBeGbhDYH9xi5fUuaTbkCyW1iXFq5a3n3eVfPw7CRHAGRo8mLMxsRAT8JEruEeRXkwHxwhoA4xHEpCLhz1",
  "key23": "3Bqo84eTP5E1cR7i1FXqtVt1QKbxUok8vJ9YYcDC3uoErA5k5sHLiVaeNGVayLoCChi1tijKvPQsAwNQnCrs3Coi",
  "key24": "LW3XWk9RJiXyYhZAQ3HDgpYvNQt5a9ETppSxewTT7e3zp1x2CbCqhJWL2UwsWeqjjiGxjVHhE7TbuuGUdYAT5wE",
  "key25": "4rrxa5krtYceHY2KbedPLJawcNraE6txQyxHCnBVSvd6rzgyHiw5SD4MwRiHZN7N41otcg7qHuEj7BhRj2xVjcYx",
  "key26": "3DPx2yrca98fEaJMQxuz9u18z2NFLwQ57jUkw9W2gAXE9uQVVNA1V3EnLBAEQNazenTzqGDyMbP4goLBgKvCN9q4",
  "key27": "41L3ih7Lm3E44vraSajox9W6vMQU7vCNZto8TBnjsoaVvTVH6TQSk62cbGgAa52DQGLD1qv2uDMD3MP18cKWamGi",
  "key28": "p9Qj5VHtmEMnEC2DdiuMBgqu6MLorJa9oH4XLpTbaXWfK7BKbWauVbYpgLpNsE7J2XtNYSWwjX4sQsAhZcbNa14",
  "key29": "3J1HKTdATmsmhGnh7fyjZ3hdaYvt6hNHyDyq6BTjmyrEdPSXTzurbSbUz5aoQSAcJzALjMimtgxhyLXRH7gNkSQQ",
  "key30": "tSJuCpTgXDS6bcofjvm3LA9mAi7J1MN5VCBiLwPgts94dJwoxcTwvwz6M5mryJk8SjDNMe99pEGPPrfuvTBqNze",
  "key31": "2mbQ5yBMJowB5nrtQRw9FecHo7ThzxQ57jjdbS9VeHGDPNWxsYVyJXCvbasD9F4ifgWnkZkfHz7Fh2CMoAj1bWpb",
  "key32": "2f1Kj3mtjuGA5uXvnoAhK1nfqrMhtNcAbR814ajLHczzc35AehRQak7uYGux8h1BWJhytHYDQbidPyyrUFCMyvEy",
  "key33": "tm6UYSrEpykwHzS13pAYigfhQAuUXEonEEbQaHVZyHwwvqAvUaxf3iWEhhC2BcmgSk7gHumBspQCGPfzuZEiLrY",
  "key34": "21JCJDZgycG9vkk6VFGpkFnA51Pp3EH5ezrj3prBPb1TL2yuryPeSztAikj65fYNGqsyFZJywUU9UwCKqjbQfD8V",
  "key35": "3wrQzHgeD9gmN2Zv1nU6tj5ePuXRJh3n86wWK6YfxJDzCHgncKC6qfnJjxzApiiELGfA8ewoR9eVQS4VToaDK6YF",
  "key36": "pfPCSMCgpxgWaXsTFchKvvVeM5bBo5XhU1T4hk7oR5hnRmZHeQqUn9UTYyv6t3WXTLZVLPqbFX27LUyt4dYbu5h",
  "key37": "3y2cCKHPwBFPunT4doeggMNiyJXpR4cC9qYu922mM2bRYhyUEYmXM6ddQarXVAgBPi1BKccmgLvj3CTPv6KpSwTw",
  "key38": "4txMUg3Cu7pmn4KqGsPT7NmFnhkikPdRFUHnQLpDhrF49oVdE2Hzd3MzCB7xaMbDEZzyf9gdA3yfR6dbrhuLHAEZ",
  "key39": "127Qnb16MjtWD8onzEwmpe7H4rHfhHxKRHyRcJtDswcTYAx66PGcnSdjJgeBU3W8TURErbrfCAd7zEhiqMg2f9Qk",
  "key40": "3kNTSLreacbgxrEXp6GfowwFzJuHbZnXyzaHW471EK9ZjdhLyF1azm8PSoqx8DT8uqu2fnyQQgYM9LtPeSfN48MF",
  "key41": "2BugN2di8STkEPraMGDMYpGP5j85h5ARFaUH2BtrjTTzBtT5BoYSi4XLvXDKvEvGokPVQEgxCFJeMFUUMc6ugS5x",
  "key42": "UQDZFGeJ8a6TkFhqyHgT67yPhdYXT4WsrVWRYm8MFtC9kXP5a9fK2eMtNLgULAmBBRZoQxBS9MiM8JGYQaniF95",
  "key43": "5Y8GvpnEmYXEnxKdysfrqXxRHuTFa7Xtfe6RTyQvvZMAfWR6X7tvKVAGLG8TwWXVGZ1sHA6cyMWsf9KuJDTdN2uN",
  "key44": "4NCKZFJZXyULfd2mQQYsmURfjyr8Poa5E3u8NVZpv7w59wYWqimrSH9pY9qkEcFfsjgXEdJtHhWQHdNjFUvZT8cw",
  "key45": "4pq1EijY3sHKw234xZVZkmMeDerjLK4fZzoCy2s749b8ZfyMxT6L2wsykb6jJowamee3s31BPL9cA2oLpDhXAVHr",
  "key46": "4MyUKiUZcGvjgSX6wmo4U7jfdGprs7PA1uCnGGVAoPJTxbobhKvkxtb4neLHqr91rxR26v34yAFXc5nmH58gHvEA",
  "key47": "22GX3DScRK3Xs7DPkUcegAME6oanFE5vZV5VVUu5Qa8aysrWQk3tWB43La3CDSKY31FdexLbdMyLNo7NABvgEYdY"
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
