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
    "3QyLZBmceH8HMXsj9c46TdBUyudE5fiAvktNPXLa7JQzRT1QTWn7cK7KtU4UGd9x9U5oxcSwp4z5DPEGEVQXT5zm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hChK1K9Ah8ueC54FzT9FkSh8mFAPVwRhwVAchS9Lhpqyjqcy3VkgydjXZfAzisRfbdjys4pd6W456WMpQJLiW2W",
  "key1": "4in5x4B7GbXJgcNeNpSFhPuVyLrkTbyjLkr3kNk4MQuFzxhkTxAarus9k4ydtyrYkr9NPjZL1SxrxY1XsKos4hfR",
  "key2": "62kLoyddrZHzrouGyktQeVaemjrJrVi4HexmFos3ysFzMWG5jQJTRts3qn1TJa8cBewpE7rWK7eBcEnJdj1N3zA8",
  "key3": "5qBg3tsiNeSzK6mZFNUjza69eGQphbdHGnpMMkKuwtD151Cn1t9zXtVsufgqBVxrk96DCCEEy1F13FSVNJMQKnEz",
  "key4": "5RAftzdTxBvBannveERbAGbpXve3L8mYAwQufpAv86UbuAqAnqmdmFuVMfjV5AicwpoW7WXFzZEJv5jihZbsXs5V",
  "key5": "u8vbVCktZzDjseDXFVPKkozFkSacksq45y3a1xRzfMrndTWEiNigLi7KTr4Ak5iG5vcqGV8NYV7zGDfhXF8x2QN",
  "key6": "4FtV4zruGZwyZbRKzRy4NX8dTFmDPRj1tznbopTapR41RpAERDSJKebdJ9fzEAzJbFAnKVN74Y6T5b6StvFf6CoT",
  "key7": "2UP43AgFFkk6hoiRDTtHPYGW9JVjCCn4QsypRKBYRx4wgstR7tQAMhesGEJoop8DoTSDiWryFsBLCEWm6E5zcaaU",
  "key8": "UcCKCQ2QLv8KbWcqDDnrNgJBfxto28uDQwMZjRhAcuHVXjVfX8UKmiUjiG26GQReZQaXtfaSVdZUM1xWyQG1MyN",
  "key9": "25fuAEYgRKt6UyUiYEAiLooLG2p7pRi36kNPcY6ei5hP6zyBCahN39APwQm2Rz32gEeSTP8a6TZ9TMYy1iuumgfP",
  "key10": "5xMSHvHP1y1zKHiVCeEWg2ofJp2nNnSxWEN9uZvTJCt8zHYwo62BX8BHQwmTdrbPMWg2aVoBY4ewZyj1kmQKSsmW",
  "key11": "2XeGg2w9MW2EYs4cMVaTTPJ73w9fvefj8Dq2oPYQk9Yy7swy8H4wMPKLpJDbDi1GDFhu8mwyXRWJyaiGjcqHsw9H",
  "key12": "64S7bM314UuXSGdpV7RGsMBFoD2BPuh1Coytfs49HYfPmHXmtg2vY6bfTLUVcrxnCbJ8SVcnMGdfVF2AVYW9DH14",
  "key13": "3aBapMttid2Aik3vFMUaabKeAMeHB7CqcAPMEYwAATHhhGzYuE3Xj9u4whjhFDgE1eZ212BLoBeCEKgVbisKsUbS",
  "key14": "3JCxwLVwTqh9SXGjWaSvCymsF1sg4BAeLJSCk1tGUoZhbiNm1Lra1P8C8eGSbTArGYKHTNmjHkFWo7YbpTy2VvxT",
  "key15": "3Yf7sJvxw6K9dKPHhMkp9xE8JFHEbx7TDbK2q8yd76xA6Aiwzo5VnBEo81WAHfFmudDMq8PeDD9szsqYAP3cmUPz",
  "key16": "qXqtcZC7kpdPXeuGw1Q5igGbdupZwPDuUBy7WVCLYk1RPi7oSjrvRDoXFSD5rYmRuNV7y9mRbcDDqGfeYt4f9n9",
  "key17": "geM1tDhHRFEWVKDLsecw5gXRo12zrFia1bNJBTRmSoxBBKYFAFR9h9NX9AQ25e38wacLKkCHdkqbCD849Lkafps",
  "key18": "2z8kxHHQf7pTTDhtnJJFp3KBeDTngcXBbgEmGDWDXu9i2h4iQ2WP6PsBCdnQjwXrYWqT9Z7jPDvVSHFfq1eXp42J",
  "key19": "4cNWCiHVsB83VREWzJw11pGXdsoAeK1e8i7Y6rgPfF7XHoUZaDnRM5V7fxkxcUPadv9LQb92ndY864JVD9SWrahY",
  "key20": "5FZ4Q7S5tgU7V3UGs7mn1mZt6KJnQFoBHxkXWigayKb8wD23s5KtSeT4T2UutWvbL6dCw45mCeVZJVra1FZaj3U7",
  "key21": "L2LKLbKnyyE74vcXF1qiYNrhqgFUiVKp4gh1KKyVZg3pjX6qFgdn1ccaesqDuGGakG5qkgGW6ZeaytL8QieY7yz",
  "key22": "3SHomaQrFuWii3Mk6p1rWrTCN4VS1hboPjjEi1bfzTtmopsvVEFfwTmL1YKdSD8J7PBpAQwEx3E5X6Qnpw3FvQYD",
  "key23": "4tbRGePSs3jnDgmVZ4Dt3J3pcVmViugKs7Q7Tqa2Q8y1fnjaXWWCwNFQyAYKGhNea9KYf3zwx6mH18DzbBFDUjjN",
  "key24": "5tjHCHhL9xiE21SXjCbandSbZKzcsDrjS1qkTZwfJY4UbLzUvYEqxMSE9bLpeZivfskKKxxuRJHdMppU976qDyAm",
  "key25": "5qDGJ7e3SnFSpiLRsFsmAEaey5mf6tQouUbJgtzUnRRWMy6NGGzv8MUnWFqzhmuPfiaMxRtgau4Hwv3yttiri2tn",
  "key26": "41351HRHA81HaJ7qerwueuMfPdJa5oA8NgYMLFJs4F7AgCkbt23iUCmCYKTBVQ58GeDm6NB6mTaMuUY4ayRsV1qX",
  "key27": "5N8TFr1LJoukuoZX3tqZcQFHn2NYSRqhcxKjgzFqfQFFkArRzkQGwRmKn1CXDHXzjiWWyaEAwxC6phQ74va5FfQz",
  "key28": "4s1m8jV1TZPK7PSwMgsVcwUMd5XSvDaPGKgwTBHrSczp47pk43RKSJiJ9mL9D4MqM1ULjsVaTvxE2P1RQRQWtdt4",
  "key29": "65jFF52t6Sszeb3bu9spiQQKRAKVkkEEafhWCHFKSpVa3Q3mReLfnbE6p3udb4VDJKDVG4QutjtRhTMVZiywBDu8",
  "key30": "5a2AcafXf24ohSxPFZaZCrbDJiNfzysBoBQnDvuDGS8TfGjpF8eBobkXvYUCRqZTMzefCZax8ufEaRgXW6Zbbqdk",
  "key31": "3pE3rX8Tu6wk8Hf1ZHWAwYCQfWnhEq9Za93gRTXqJrT4PBsE1sosHvHQsQqk82gkCAbMCk9RpjdhUPW3ZHyZviz1",
  "key32": "33foK2s18HaP2qXoU171yhT4pSqM1i9iqibKHCNCjszRhT2XVDFCbAAkzQ1k1BYcrUxYv1N5ZmvqC2sJssSXrqN9",
  "key33": "5Td9CpzJ33y445UBQaogUG9MhwrpJ7z4YGEeXEfSzePkRQm8SHQtQigAZiSdx12SB5bg1yNGm2JgWJkofBXfgKM3",
  "key34": "2fGnKqJnnyfNFNT8pSco1PaTHGkpjyPbuLqLNm9i7EMhtVoDDbE5k258svjYwJT8HnznKNFvgB17fU8C5omUjs1a",
  "key35": "ujEy2vsTxB3k5GeDzN2Yb95hdXkpeLKWfxmxMZQcYXcSBDgDU7N9kscjf2ZgPoZbmm9bAwC1pcoBpgfmSG2Rnqx",
  "key36": "2HD2WKvvK1L1uDZTfWdVQY3HHaTTmJFK7MBxxuUm8ubbCR2o6Z6dkh5TqzAShQFtPQYn51VuUmzNzZhzECb8zWM3",
  "key37": "5X5yjt11nK56BFjJrWC86KdwQeKAD34ZpC9AfeLrwosbSzLuQpaNfeGpoo66TdMq513UYbP7Nzif83SJaFJUB6YY",
  "key38": "5wEPC1cayMeB1WfdrYa1kz7b2izPBD1LdsE1ZjrrKTM2V128aSo5acnwTUmemFGHb36n5LGaizwTac5b7d6DuaFy",
  "key39": "272ZYjbmknb7kyezdptRkuNZcGNaVwhpqWzMb4vPT9vpsN5dEHFCse4gqWHcGuyBMPHtutUNCjFwZB46AqGEnsK9"
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
