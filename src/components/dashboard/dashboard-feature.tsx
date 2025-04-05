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
    "2MaYVhVKdy7fEpAbAnXhk7ayq6i9hzSA19C8PgdfNLKk7eGKEAgJ7JfXBeCYbLcELvToNZbEW3QoKHQEyoY3WJcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kS5iq7brDC3ErtKAo31QrKkAR3hd6t1PeheXxA63o4umKjDqeu1wZomqZXCXAx9UEPZHvxyyXNGw4Qzmxan8Xga",
  "key1": "4NnS6Fk7cHTUKyom52XZwyh5fXMXLHgjMoB9LRg3beU2SW5kWKj3TyjAJqgKfgBLLAP4sw9dSbXwcxU8GDGGhVTe",
  "key2": "3QbtLdqhM7k2vRwnpSJEWJVpAHGRiTSqJ2ECqusum9xXRfumCDDhQPPJtoo1qX63v2pCJMJ7jupimGgL92MsAPez",
  "key3": "653p3atTyNuNhaXTeA6aL4jhXBRy9SGNJjx4Xyn11PPG8jCveqa6KGTZ6Hg2JEGwLEZCKANPu4BdBTz9PhM9oyNZ",
  "key4": "21Y2ujbocgrwcF2oydPxGzo4h7vESyfJG3RMKzWpZxLZVMs6qksGKeRHPJPJiW4xFDrdQuWN2BHXcmeAWRg68cti",
  "key5": "3GXUrQimntpHrw7nfhXY75tmW1gQZDzD6vS5E82zxXgEpurCPbVLDz5XVqCoVBEjxoMA8aBSzmrSMBdEooWtknfY",
  "key6": "2a7QNrSUiMjXbbTS6i3TLM27DfgpodRvRmujuqXte5N1CJ84bsX9xiAAbkcpQDauJWhDjNLfgo2WWqw13mFshxB3",
  "key7": "nTWHL4s4CbT6TcYofwvZyYKh6hLF2QCsZSU4BweEgGHxJb7BSMUtNxSF1XidVpF4TCnVGjvM4MkVzKBv9hdRq8S",
  "key8": "3BU2cfQGVX8dNHEANUdcSwtvTZgHQ3ePLA5W3LrFA5ENMkvmGdZ89eKqHhzudjuGXX6suA6gbjJCF7NxQAPKHVat",
  "key9": "5EvAzCbcQLa5PmBv1ab4EE6uYCaZ8A7xeCk6q4ygDUzZM424H4NeYCP62j6mH3sD5Z9WUw12GYE9UYhLwM7ABWfX",
  "key10": "2atGPU3Rz5gbKzKBQut2qf4T6uJ1TY6GM4GwK4QyNTjcQuqmfpPGnSB2EyAhfQNBmxRJn24TvA8ECeh3iq4jLkjv",
  "key11": "5ywHg7Koas9TgrFEqBrJgdBHrhoqtgMFEzvCANYE8MCckkByTndL6gJLSFbf2oLrrKu6Q8tM8Fy3BiepcF16GRBN",
  "key12": "5hdLhXbn4QRuM5mob2CYFdoxro3K8i2zLVmqC4M4thsjJpcdVuFGHapeWzYiDzTveVTTuvpgxVXFyn1MN4QDsS3M",
  "key13": "4C1FMGoZZTZrWYkhqsqY7Zn8KxRj9McRwvKHZwzScYLxMgeSTZKjcTLQx55c6Pvgji91G21MPZmDPSVteoM2ADPQ",
  "key14": "4HUZgjGXJaNVrHGmD5gYUFTCL6E1sf9zXHdiaNPYuDieW67gERurTSGtfYZkqXn5aL79UgVGrspxMor8Fyytrz92",
  "key15": "3RwoWcyRBTq2B8PJfq1b7Gu7Jf56TXzYrMurT1RMpdW1wwU9bbY5bnzEgtkWSEK71L7MqZKkBPMdKj4b57m2keBF",
  "key16": "4Z5UnN3fn9CgQnHNoSpAGy13dc1oDWQEBXJuZF1SPmX1pCDcfcroZZZNGZWPDEWEv3yXa8MKFWhSApPQ5siwRHgf",
  "key17": "3Wq6EethaWzkxxLdWsRee4LYwbPqU3iN6pGpSyGS43kLAzg7UYHk7tc9eCKKJ2nAWGsAM86hFubb5rGGQqBq4Btb",
  "key18": "5udvvA6FfUYeQve4kFdPAYQhztu42gE6GbdAotghsMLyQWvwEUcr7FV4PfkfHCkGFRACwZRhyqNdZEEqpfQVnVKU",
  "key19": "3ehna7H8QuPUtfjPN5MG9spGfUzoXv85f9HqRaN7cuZkUFjqYps2peqo4CbbScJ9soNNmybpzsUyhoGgstYZYAGA",
  "key20": "Hw7UjcK2Kx6EYqMsYRtJwaHcp2yFXGtfvP3G5r4U9rQ9jcK6K4ByjNHoZzupwrw4z3scoXw2K4x3RNx25HbT43y",
  "key21": "Kna2eWhSh4rNuxddjzrKAfYfPjjhtYnmNuqm1AKjhpjQ4HPYnV3feZuSuaqJGDXTyCkPtVetRGKByNdRtb6tf64",
  "key22": "sxiQ8V3aDCpzzfAdfRrSuDErm2Q66RG4Lq7URVJhhfxe1VoVKoJbWk59Z2MhFA7LBE8ixhpbt6Nri6t34pPD5i4",
  "key23": "5FtRqXBeP2TCskxaTUoWpgxpSQFH2z2cUvjjfHH67EzWVidpgKNZivYzaWoFLgR6Q3DcHiUGK2DZgWPSW1v5ZoGL",
  "key24": "2NZSbm1UxN46K3NJrsPRty5Nji4u9TE9cJcV5fCcCzTA3ZB2avnwYj71VHzput2BXLNtGRKBHzP1zf41NUSE4Fq1",
  "key25": "67qzEzZkr7bA3DWP2PoEe5iNAUYTQSwdgvtKtQfuHgYieKTaAFNzPZbUhTECY2Z3bRPH5fRRYCrTBctxE4egPgH5",
  "key26": "3Jb4vfVm7VNLWwNDRz858RT4UqBUCyP5h2BXLCzwLY1E9C3mPtHxu5LMg8xF3GMbLGCS5U3u9HtJniFy5kfBMkrL",
  "key27": "5m51AQChPW9gNgSRXzdRCGuSoBgaoZaHzN8mCFc5n99zYjAJfntkZs8aVB8eGwfewkB32bmwWAWaFQtAPPvNCXM7",
  "key28": "62SfP47auD2U3gDGMENSGCwQGdNsXby5xbL3bQNQLsNopCSSpDFQS1qUZ6V32QVnzphP1UqkFxVvHyixSPePXBbB",
  "key29": "2kp4rnz29qxAQdsx4SToD3S3kzUrsBDc1MZufdJMgzffohGsxrVgviRcL8NUcNM8Y2Pgdo9ndTeQwzHdBuxkky9x",
  "key30": "4rUcH1vqVxr7JEM6qv8zZC8WVD38mHWxitgj18oFbpfLahhc1SixLbqp7aTozRmr75bXbVFAyxJDWN8aEKHbBsqz",
  "key31": "5H2v8YZjs5fpjUfcgVBC9qCb2MB71Zfiz9xUTArLjADGh1gAv2oyE4fLW9vkaYUNQZBbqGvyrSBEVdNSH3PuzqmP",
  "key32": "2QhXp1QyQdRTgeWSTBTyV91aCzeXpy1MfyJagat8sVZBYrVrvBJdbSiFekLR9MbSdLSjzno7ypxYmCP3i4ZjDgEc",
  "key33": "3Sg5ow65fvxhs4EqMsZViXHzGLq4X9soqy6bR1RQU4rR63V7wBy8Usfq5nmwspwintemAhSUAZSiAo7PBU7wramW",
  "key34": "3tSLJESE1vuwx1X4yPxLXs4rpb7XkNT2nCQHitgsoKxdBpjzDtfhN9HN9Kvp971LNE1Ngh9RaYxspnh7LwDmgiBq",
  "key35": "2w2kB8s7PhwqqgffbHxGT4VqAJdFvQSb3juqh7kDdmwqUuoKr9azP8bT1Bm5VpCwQvC4FUURPte7QRDTyaoXmAGP",
  "key36": "58MT8Ekkspk6TenuZK7f9Bdt54R9uNHt2xAAAKMxfwAaxQv9pJKSagid4RdaDxFoC6wiRQaUu8fRgYEVqAe8GDUG",
  "key37": "gWwEyvsKiGUmue81fNGKYTN7oF5zNDXTkTmydbudphZjmbuKKM4naPyKj9confBhz16aUxzQmhDh9RXQCupBjUW",
  "key38": "43rByWjzn7raJP1nsXnBJPu4tRwaQ9sFoTQ4ivgL1uqf4fV5jSkyjBifeWMgi9vYoefC8uNVbbajLonKHBwwPjMN",
  "key39": "56YWYae1XxaPMNf7xmug9C4tqibDTv3BYtcw8pp28rkVUmEUuEcufJRXQvZP3T9H7ULvq8DsSvaaZteiow8dr7er",
  "key40": "2TuFRJFQZ92PRwUoWd7ssMaXcC99ejC5D9Frad4TXaVPbWrztCo3tQV4aUfHSiopdP1eAH5RKL2W8eXQqnivH3cH",
  "key41": "EUtr3VsecnidZ62sCyQMb4dtN6RKm3BRRC7SpuGar1Bt7UF6QKpqMNUC9UXp7b6RB7o6xAVgFSKwVuNmyLAiYto",
  "key42": "5vPKLEisVSabu99zZ6z13sEqshZcuupbXxt6eszC5EUXKuSLSaccGcZdQxgoWxCuz623v5WxHUx5TkYUYPeny8Lg"
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
