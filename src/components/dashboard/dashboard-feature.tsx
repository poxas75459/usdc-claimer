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
    "5oKagnn8aKGsKqrs3UMvJjAkAaDQgBMbvPsyFPV14YSKUFmxJ2bKkPs5jQTKDfVAh4nEasic6waPtq1BmdjxGYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EmhFWRaaokajtxxXpbZwyC7d2HPFLqzTcPc4xV1nokCdD2nrKUCrrPeaWreWKGiaTyMjtFRrjfAwx4n5mmugwWi",
  "key1": "XqAemQZ1ccnH3ALok8BmFkCifNRVnDbp6Yefx1mXfaU6VG1abifAaKkHHzEFBLu5fbwmCiydZjHA2grni9CPH1Y",
  "key2": "3F4SRA74X15r9BUeBrqvbrf6bzTTXmbNWGkRvsKmyNLd5hy7GRWuwRCueqGR9emToir3mNnDfkcEMzY2w9P95kpU",
  "key3": "wTgJkrccLpu69CKJ5hKN67Mb3Lat84s3uyrfhbJb899K66Ccv3HQfJibxFCGmHAgh824npwemFTYBDNsCAj5xFR",
  "key4": "SUAsp19iDGLFgCBNnBDi6eBuhAWa8xcSVayCJZQ2HDAHp6uHeYTMLdq4VXbVKAoYjPV9ZpARbnaK5KCfyn9b5bx",
  "key5": "61RU9ejaBHHY4Cjqou9GcmsC9Q1dtC1b5cyDr5696MwW3mHhm7dzDqxyKJbRHkCiPtqMgqWDCREoKTbaxXdKKZJM",
  "key6": "5NcdtW3D8YxAG66jkPt8TV4aHG7xUsckkG7vLxDWtnfL1SiRNGPT74NLKBnSgRW3KgKmtjvSfqEDRnGEbxrwh8b8",
  "key7": "5ha7PHDAmmaQQ69tttKXaMVMU6HAjmykbQLm8Bk9eLWTrNbPmY1nH21rV4KAudCGyUqXkHd9AUHX19zqu3rpJaGs",
  "key8": "2s8tRZ9SospRABL9tGQ7mfPCqHgtF51xwhYYXSd4QWVsksUzaVPDPDr4ewd6Ru88U7ZW3oWGnv7h865rLn91gPjw",
  "key9": "5FwsgJTvoagitWCZ6hQRHzWAFawwweavvx1nqXeXaaPULQM5CgLZtxdJq3VswpWdoKBVEdj5L3DYFN6nqA7Cn22U",
  "key10": "3VmSbvHw83EFRrX7CtQtDUAwBJNugRsYjhk1gQ11zAEQcqhjJtHqH2ximejuAUe96S4xS3WFLusYshUPL4gmAKbq",
  "key11": "NPRVpP6Xup9L21TbiuirZXUahbMopdn9dk3hmQGqSFSe8ERsPAVNSEuCt3aVzErQYEE25rVtPCvLRB5odhHn3qJ",
  "key12": "5xwRcAJBx6Y69V8sUKsioshHE6pSCrEwxFs9M5bdSCfx1RV4QrJup7q3Ta8vW6CahsQYQtMtGiDUf5vfjuLe8UvA",
  "key13": "67qvdEihZcfy5w1X2yQSz2tY9gdgfZrDfMxgsTnF2k7C5Bdkvp6NVCtokeqLQng6RLEkPz3SNTh5YSx1kXHkqSRF",
  "key14": "4EAAahrZ9e9spvaBjynoG3M9bVQAY7iSatsaVagtoAyWBNGesuE4gTrFh7aDnGhE2kVRsRuEePP23j8SY7p3rmZS",
  "key15": "64NUnjfSE3nrRezYS2CGWevGBUN5BkzaFnohJm5XMqakGgLkvjnKsakdDJuYxurdU7Mc5Zxx6drsWfCNr5K2zPeG",
  "key16": "oQPycZuQLtV4sjq4TpWzcBg9d1PtrYq8VPHSnJZ3wU8YBguRmQrjL3Q2ekobwvwaX6rBosw46JWsdoBF1YVGhny",
  "key17": "4XUtYegND1PdtC31yg2kAMt3rR2X9fRTWhWiBiXpG7HNjQswcQ77EVbFEuuMwGmMCCB532LFuThojvvd2giMskkw",
  "key18": "65WBCbppCofGoUzydmNn55BjjbRfdsAFcH5yyqf1sTKMCaUS9Ppx6PPAWpkF39MSTZpcstngeE1fq7RRP2Gx6vYQ",
  "key19": "38Zby2k1btbeayaVXxbMGcbtnZdqrCZgrAVvWNqsztfSkBHTjDNFd7MMPt2es3ZNHwH3RiyuR1mGurjvjQuW6JZe",
  "key20": "2PRMJqSSMZyNymrkVgWADHdfzC1owepx4jsPaBoQySUAbaeepdi2X86rpdVTmyN7GoLPhY8PKUbzUim8nUewBX5f",
  "key21": "4W6avZaJuK4v3pw5uBXfZvPqAdV8WEdH57QRz8YscTdp81gWtEwvpAspCuKAZWnsENXbBqtDM4k7QGyj1Re3q3E",
  "key22": "2PAzV4VT4hYrhALXeweq6xoti82LJJwnJERhTh3G2XrdECvtBTauKd6qwjV1y6uPmM2kwGnfUdkKvB2S6XaY9EBJ",
  "key23": "2AYnTds3LFHaoF4iFHUbPgwYfNSTURp36FcpHDVspsZ8ECn2H19EdDMaB4tWrWHPuJjkC8RN61CjtzT8UAYmRMp1",
  "key24": "23spgpjngz1FRTUG7PLLLpKfKH7NP4uKMWifjrEtCXmmdbviSPC7WCW6FPH9dmumK8dksAtPPeo1NZARafuZB1KR",
  "key25": "382KYgEjeFUkQBmhVDjTm2wDJ7USHVgCxWrsqKKkjxEgPSatzmKyzMAHSrbzVuHCDBCxHovP4W7sCgkXzwYvARBx",
  "key26": "4yVXYZSxTA6rtiXdBPLN7CXMnqeVotEzX2dEV2VCT6qCdq6UykwQCS5t3NwcM6omYTRaNnLBKcC9n3F9zihgs31v",
  "key27": "2KpZHjBTVqLZn3RBRzcjmWyru6hrmxh5ktXabF3AcRHrRWgQCMvWynTShe27aJ6k8iWxRNzLoHE81aAPQsGzJxZP",
  "key28": "2urPRfV1QdH1bWemtvXtBKYFHaCFvmaAr74a8rYCbHhvNy4mMeVE6YDPfFdUou4h4fgiUwxbGzw3zyK2H1urZroE",
  "key29": "24cyexjuFubXwQujPp6PXJfZRkgnQCXxudsrNWWTzjSGd7f6zmR3UHFqWP8M9bVdZvq6iYu4SVxcHqBq5F2WkLpi",
  "key30": "5EQKJphMbNZfU3jHRJbTFnwd9Wo6tPz4Vy92xWvo7wLc3GK1VGHowy9kwRdVcwL1nAh5GMpLYXzg9K2twe4Z5L3L",
  "key31": "2yRnFV79AxB2itAQa19f6noXLRsdaPtvdtWDD8BKzsSHykn5qdEb8ufJ2WJvePxF5to2H3o1w8kr7o57xed2cQ5K",
  "key32": "44DxKHuCoU8mz8FXACzt2mLSJwGPMwC6Fe1B5m5mFcKjMPTpdSKNcDvbBYHgZcL1y9GeDx4UHw2xkspxGHw56rYQ",
  "key33": "3Whsfpxwy4T3mN9qZppTK1Zsf5aQZhmXBbZBawahGvBrSdYvXrVa1kE4VJvPrM2fgcQyfVdVPRyoSJVi4sNepuRW",
  "key34": "5SCt6xQPprfjNrfM2JwQnfkZ91wUZu1GmjSk7iX4qxZEvkuMGWDGjypjotpS2xS8bcjhk5wUA3frmT9CNgwyrehu",
  "key35": "3oVmQ7D3JhVMdzPjN3TQT2qxvEPEWxYKfvqLGqSRsxRBTf4XdJhvMcfpqHRxGzwwFva6pHfnLodio4uXSi2vnxtR",
  "key36": "oz7EKwcAkTvNFaQN3DyHbrUV3ApAk1f5axHuaBvFosYjqsZc5WyEruvxM5Q6siw8rKNUKRKBTYUWdvWMHGZzd7e",
  "key37": "WsqcNQRrYVjyA8E3N6NGVfk2YfhPSr1eGK5tbV7eZAEaYfqPuELzaKeHKgWrZWQXMyPdJvTttdeo6iv46RhnWpK"
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
