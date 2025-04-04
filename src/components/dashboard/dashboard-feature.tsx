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
    "2NYF7YvfWb92kEJG89MvTpiyxZr6TB9tZ3sQYqUFEPgH3sLVqZWFSWXwFKMcU157BeXs8fNhYkznjuMb9P9AGGLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ch35xgECC2UnJEFUtBwme1Ls9GWy7dFumy1PaCLFQuuEhiR8zLMLX16JczWuDDFmjandbgBbxQxi5bN6JDzdPkR",
  "key1": "3UAEtDC4m2qHAoQk2Ha6MH36K5YignozL1kwocH2DwrKzmPPCFCbJMKWDggzv1kBbYHCbGFpvED2RFYhQZgyUi2f",
  "key2": "5MzPTrocCcMwTmaRoPDnaey5VuYEx3mQq7qBPTKLeDfDVSCVgCdcNkAUp99n4JESoh8DKCefnda5YSKmWs1SVAdv",
  "key3": "4ESdrgCw4TLFL4nwcZTec7r4BQFyPTLCfzMpdsBsjkSgiwS2tp8jLRKWybCAP4hPd7Sy8g4XhvFaJEfPMdB4tL1z",
  "key4": "3jcwc51ToJZsqAMe7EfDQDfJnUztQ5MGeXBbcpbqCMNt4UV5EGumMUhuYkNkQkR1nQcSot2WEZAsjwnHFWqY5tMW",
  "key5": "3pikZV5D3hhkgkgZgKZnPkxv9oUMzog5EDiodVwTWfcSxMTn3T4qDAscrPsyQ5hBBBT8THyprBD6ZhxQUbEP3DCM",
  "key6": "KmHUSwYXT24pgLatkLXi2nhZNCz27vPpwghsn38nkP7mgz8W3DvBqmzATNZsaABYrcvbrbGJWZ4qZYLUajrTA5q",
  "key7": "p6eEsVDpjivMYXZ8UoRFMaSNhaoo1xE6J74TQK844CyMSySJ5HkYzkKX4jBCB87wAiEWdGJGoP7Zu9fGJjoMEoM",
  "key8": "216ebcpdLdM3Adrwwdjn7x5otDZRx6kHs3Rp39gm3FELNdUaAijpj9WtBLJS9qEkqB1V4j2LbRVGNU7c9KbiDotv",
  "key9": "uPmwe5ePd4b2g99of415FRUG9njafgWzSqko6pWomyuMvNNJUEFp5jZjSPuVCkemssqihhEsgeM7pv5uk6iSCiR",
  "key10": "57V9zXD7WuPSrWsuEmt8oiZNKNd22kpvpqo5u1vqFMhcMVyEMkW9vdVp1bNyKn5SQWUkDzbmfEMNmHXQHWCf5Evq",
  "key11": "4CGUGrJcm521hR7n9VHMjhy6TAM5xWm2tEy4cL1yMQMzHEbQoANU5WmT9HChnXDq3deXyrXDMcXfWBPU2Zi7WkiW",
  "key12": "2BF85yrJSpSRKrhrjMXouBLGVLnAfRXvppDDVGNCocAo7XwXQEvF3ApMVai9VjWEu4TzVT5t8gJxXGFzNvDS3MmE",
  "key13": "fDaRnbBrZJG9Ah6hm1EsexH6iQW6cMSMsmTZUJdY7sEC4YoLA3Bheqkz4FHJi8EABK8w3C3vAGjpxe44ekoeUXE",
  "key14": "3iWABdo1mCByzRuv2FPbfvZAYRx6zaBrGk3NJBEwPRqEZ5BCdqMDv6t2k6Kiy54xgV3Z9hK94o86PktrHbFXG6je",
  "key15": "FT9sxaHTb1ALJnKCEEfjS46GxCXGFWToRxAefDASTzpX8CetrKGd2qorKZWaEFfFww61yBfbamHAQSiuEU2W7qL",
  "key16": "4rN1cPCj3r4Xos88skCgWN4MmrcyS5H4frb83dyWHLKWSvHMaSrg1xxMtYA65NEWXgFjdKuukBjYjrC7ppfuKCgx",
  "key17": "4VoyPXw1JuAkJFKwKF6urhA98uJy427H8Xfo5Cy9sypptAQA8TCUxi35W8KyDWzkVDpdKXJcBQwRkMxHRMVgD58f",
  "key18": "32fRrutdZVauBWcx7oMf1k4mYCE5199N6Bsnv38qopnEgwmEdYg2SwnjNLZKeSWq5zKWnhWm11bAYYncWMiPYPcy",
  "key19": "rZkALRVWads3LgA1Ttbgu2sgzzxMRApcavqdHtkfMobetcUkxwdMMthScWgkCTBjTKsGY4szfckm5DJUAMRQE1m",
  "key20": "35u9XyUfPtAPkbBg7N17mG2Jy5jiocwX3k4Ypu8xmCnev5K9WPtBstB86LNPGd2SsQxT6UgRgLad2S42TXWDfKGx",
  "key21": "1Cnw1XWK8nXXHG2UUaJ6KqhNbRzVoWTqvZuWVb65Cuig76kuvuayAJMrmH9G9NFU9ZQ8RZMjoULHWwUFroyFnbq",
  "key22": "vbgorhfurfmX4UMZkW8eEZhBptrRFwB2c6uPHmgCAfxKpDkQ4PCtWodEWzjxYGiXNBnkqyWkBUSmFBqxVr9uR6q",
  "key23": "3YY4kXrDJDsgGddeQSJDrc5dm729nM6zLBxjCCR41xvcqoxf1cXtYHEoG3nb8ZNkp3xXHwPNGtnEwA9xQSoZp9q7",
  "key24": "5X2HtNN4i5BDqEtXwB17uKDbFbmomsiEQxLpZ8593pgtyPASGTgLqrPH6Vi4xRAXVNQgNDgo2v9GgW3Dvnq19NBe",
  "key25": "3R6pGuXAJ7UpkpVXW8VWPuEHkeB2ML39bGs4jmpt25VNHqaqhnoZbNSabgZLcDaqq4dqf95Vt1NzhH5w9CyhjDw1",
  "key26": "5WsR5E77aT1A1VzXP3DTsW84DxFXRefgySJoWKweQTMKxXjsrmjGjraquoyv7xUqyZYM8iEHizTSsUyjSfvrkSHK",
  "key27": "npqcvA9zkST25wJ5uNDQSzM2UKxARsJKamHHwFgMuhjh5V4Ko5FHJjhtigSDXnPtb3iCj5Zgf6cVehg5r1gup4v",
  "key28": "5HemzhAzW4d4tNMFUCdwQ3axkuEM3StFn6nDtz5FfJDd1rwWJodu6XXnWq7AYtTrtmxR3Lr4mw9hvSSxFP9iD71R",
  "key29": "VBY71UK64HBe3P7D4Xz8iiKCkCZDHFSkc3cAfws6rzk2YDAxxZG1Sizi2trxTBNiLZ5b6aXUSx76eCcTFTU28nb",
  "key30": "4TGiZAxkVYqSAMiP37bsMpXHEjbDmSSuTXjZxiZs1bqwwNAPwprzfyXcaxg5kNn2A2MoeSc2s1c48fc4JP7UNJra",
  "key31": "4DeRrb54tVyoWXRpob7HvA1Vh4zrxQcxLQ3qNyzKGPpjgmzkXEFepc3i4vvzjsimSLnZf6uC5n1xXQ5WDHb2WGv3",
  "key32": "5tzL8HoLCfdHthQbuSQj5CRwodJr7DYDqF2KYxFFpUBHWr8yFTm82LBq7RVQzKxcFU7FkSThXwSkXZkaHYDHxMQH",
  "key33": "3DPxfsm93FWMw32APmRVi2yccpnUF68tzJDjJJA55jduFbDRsALPhjXSk8CeUcWVwozY1DHMs1YVRobTLNZYRgxt",
  "key34": "YbJuq1qqNV6JvsqFdwDDyFZbpLvLaM4V2Zku4wLjgc6CFPvQTPwcQPTqBWTfb43qb2XWqUdkDNK5gRPPpe9GrkX",
  "key35": "4Ck8DHaZMSe1Vyiqvp8F1inWUAXRNBhQqvDRQYyrCX1qHt8rPNrR7XRa188tuJL4Ftx3hXKxPrgPMtMqPndvHDmN",
  "key36": "2KyzJwDe7yKUVoGV75AC2W9cXapy7ZfvC25nRsW6j4YNuLBRrJuqbSkSk9XJ3Kti5KCdrqLALFrJ8vHLEdKf4M5H",
  "key37": "44ohZi1UcwJKB8yzAg4NTJXRfS6wYSyQVn5heGE5PgLWPGMvxEzH2hh85R1uccUxavWNhg21qutnYeWuS8UgSjXE",
  "key38": "67M2F5YoUqxhLzRgDTp5Mhvs5oRBZVQXFvRRrNxvS3N3GiyS6tAZJrzE3EW3HZZsAVgT2siH84AVDVt5dbJzvimC",
  "key39": "3NYmkp3kh6N6SueFBa9FFeUpwrEDDzPMPKZDCRaCNvjXgPu5Te1MnBn3sArak6NbdCYPq61F1PcsrB65aeZPjiAV",
  "key40": "5iNDodhuqgxf6a2ZdhLVjCRm2hRGWXqda6CczrWiwQRiRWHjDKSDw1pPNpeh1Bpnsti6wxGD6c8QVMP4jm8U8Tiz"
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
