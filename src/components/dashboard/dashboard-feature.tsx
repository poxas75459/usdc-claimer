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
    "5ziy49QzDiTEr3FvNaMJtAFLpqkAnQuCjaPUo8BWqVT9fEaVogeoDRR8XMfAjcSLgtEVJe8be1wD4GLeB9tBZE3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CiFsrmmn6xDuRm3smi3FAjRFs69KzsA2PSc8f9GztDy3kpV59PQeVacvYLKTE5DHKoZ2NgAtLJtHspH5a9zFESq",
  "key1": "3oQUD2XCsLgBKfL5XFg6XfmuDZFAeynaLHGUEszj9tvBP7daciL5gpE5zdEtFx7wokYxQTDLKxFRQW1T1Qgq9i1h",
  "key2": "5qZePvn58Wk4YyoxVdgQhb5dHuubVLFuc5aqYVqHNvJrDp9SDyHyNV2siBVGB38HShzpwpr36EsRCFknX78pgnLb",
  "key3": "2bgFy5a5gCaxGKyN8q9pNXvVGtWZX4UZfVGbvD6YXwm9MRnQQmfxAK2UFRRBGYgJtAsmY5QdcBQt5vRtKafZSnw5",
  "key4": "5oqvwGnxqxcC7QHEd67LvUApZArBFnTqmhag3LbtKhMWnZGGESa48b9jQDt357tpKLB3q8ZVrKtgigVcsQtBSVcj",
  "key5": "3tAqVQ5JYvcw2sSYfPet3fFz1jKvkDmBg2QzftPwsoEbjqfdnkKeymv2UhyCpZs49ZReHkYzo9ZvV9eNKjLeLGAi",
  "key6": "2iTDo8eX3hXYu4ipBrPvjMUie7xNHzFcARmU36D2jF4PvweSLPWhWqRSdXyFT4WPUfoshAp5hXL4kMmppUKgFeeC",
  "key7": "XRmaWFP2HcZRSJCN67M5UekK1oZHgrLyG8wkghJSpzhAQbRf33YxM6yfD2aUPz88VTez3A2HyvoVnRSsEmYisD2",
  "key8": "5NqzRVfY17P9QNacnQPc7yvvwUERGy8WALYBP1yy7evF7jF6RGf6wH6TzGbrnoAMhZeGMK3KWNs1kfU6kPa5PymP",
  "key9": "4taDazL9eRsDpPuwd99e6pek4hK7DULLnmyPP3FdESUPEUr9VhiD2w8AHDoy8f9VrCdV8PtHkgP74BxM8DYNFqMx",
  "key10": "4MkdeiE2N7dTzFNMrGiTaMHKaehvpVpdXmmWK6saqyz6jdaLtBi1EpWhUXKxYW5PZjH4Siq4XT7EfGDhXfCM6dtk",
  "key11": "2zdAYktVGL8UD9JbMBQX3nBjVkKVw7SBSsrrUtDRv2xvy1xNkcRA7AJjHe4ydmpdbTrQbuPRwXQWoHWJqkiEynhv",
  "key12": "3bCNqVXp7mSy9zysjW3WgbFE2FGoZ2hmU89Q3DpLsg65XhDEGRcb8kJz4B4aZW9ZSzeBDkgTED1uoX1Ha4ukabFX",
  "key13": "j2ccK3NLGR6StqDAPHQakVYNAxsJBZWtnmMSjGuPrNnFHtyWrkaFnwxy28suTL14naxtXdk5KgVoe6LSkpgjTs4",
  "key14": "24h8kjQx6uZrQHvcqZKUeD787bSirTdGvhKEzH3hMpLVXpPuinu7SNnDRSo7Z3giv1YcSH752nC9byScxa1Ttkiu",
  "key15": "5L4ih7Tiuh8y1ywpSbuJzaiKbm5C5o9jTVmytMfje3KLULeYaPvPnamCueW7xKs4W9Xzb6dTLCVCP8tXxGHHTPza",
  "key16": "4Jbtf1eitwnZCummfP16J2kKoS386jpjwDbzyqE29Xsm4K5sT1aVrWXghEfk2DpPfQv2CzAoYrhF1E1FtKw2bw7a",
  "key17": "fpmJYQw9uXuc4dpWAhNXu7oBoSPiDQkbJxbrMWcLKAq3MmSKDbrCfjQm8W74tGbe99M92vAfy1pxX3MxtpmE22h",
  "key18": "5iJjtG3rTuYhcv89ky1EHxR7D5sAgvTPBCQi6ssLoTt7uKCvyRdBiLUVYm7RkrngU1EfXu5sTwxRDXUbht3a1h9F",
  "key19": "3UsHrao2KJRWF6JGjXLBY1SzU6Pvt7LXXaQD7uJAuU9i5ZqDFaLWdr2aAA5bccGtdBEDQnAQM9GtzWqrFFAWAhWj",
  "key20": "3Bv7Suj9hiUpbfr8uXurp8eJEHBuSmy1DfFWue7F9Q4emf7uF7jv6CmkZrwVkiiWTHYmjYia6RbioL6FKkvNt4Ps",
  "key21": "65RNtxB9jrDZkLtJ7pXFwvAEHeRdoVJHwL7XMFhAsjeyoX2UsgduZz5XJEE92LLGubXVSj9hFcnLvpaRkhmJKoMT",
  "key22": "4WBP9ttQaRa4Aih1K1Wt7eAgp2cKYVE45f7qrdoAyevPQPDAbV5hLXF3rENRVVGf6x6QLK9AuHpGu1XtzYdGyvgC",
  "key23": "5k4vzstQTEzoAP7zDZGUrikR5uY8GAqvhAAe5DsKwTxH8fgWdqXVenxRNdQ9Kz7z6YCVNUjCVY5ckuqxekx42czc",
  "key24": "3eBcKwqMLaznUZ5pCA9TxmvWhkZPvBDiS35dTeLgPbaURvW2j1F67ZEeXuBK5JKbD3GWkg9EQ7rH5NhLDMpgAo3n",
  "key25": "3b7qGmTRiX3cf2Koy5xuC4wdYvKX85JXwzEKoNt3NbTj6SeqgUymvkwUzN5VtPGrpoedkHMBjNjrVytNFJBjTpsb",
  "key26": "3KkVXBGyp8BufSwDNf8pVTpxxQASYnwoRYstcMH1e8Fiucde162MvfKLrA4pKzmGevkT6NARkG6FSV6uegzfVh2S",
  "key27": "dbpBSm9rev2rVUBLaNXqsAJsSN5y91sXoVC7cFkUswfDtfQy8vx4LFSGVoVi44s3ZhEZxobQwMKtmirZ3JSEssK",
  "key28": "4utGAKW4HgTofPsSVzQcTNkc9zjYKJgNrT5eiZP9YVNES3SFAKnYb2XdHimmpGUi24oCfaKnCGcHZ3NZMWnF66wT",
  "key29": "2KjSRWERL8LsTBUEV9bmAraZgjs3XrcqryJ2X2ZD3emaZ4o4AYZHccF3DML4qiwbjYUb9auxKxmpgqfCzfKAtA2f",
  "key30": "3DoWeQBvsraq4u3GhpzKamzNypNQWvE3sC6X3wJFZ7kw4mP7CXaJcpXxKbvBUAGjxWtbexLRPzYkj57HPGiF7cJC",
  "key31": "5G6Ud5CFSvrWdCL2GJcNRrHSQgHTBMEwvFz5mTfYEXTnLP69qEGt32foxD8KRT7MHr4gGbba5PTLE77H6EWKA9sX",
  "key32": "618By9dGQETzUkvU8EwtUXSGwSnD9oULusi3mFUexEj6fBt8VpumJDLxZjSA5wBosyzUgnbG4ngpjZ6d4q6rirZe",
  "key33": "3ZRU2wpX6P958bevUw36tyKjVxJPpURBvhxMZw74enDsVkL1nvzT4ipY1bmEtGMenKePKezJwtYAmceBL9AikPDt",
  "key34": "5ZHDmxHsYaCh4vf3rfgtEhFUhpksNvjNzdmi6jQ96A7Ux4swKD3LP5U6VFnzoMESxx4yLRWAmEazFej5AwPxTd53",
  "key35": "36NSDU8ZWcDWvaYPi6xugYUoNPTwVXVd6ymgjSmxcU1GCRQtSvqtrx48weXMjXBaF4fNnBpGDpT3sy22VbCzo15",
  "key36": "gz4n6JZEDCKppxBoEbsM7DBvVnrWsadDD31QdTB2ztCvRnNkvFqEWLAK6Xzwx44h5z1g8xo8zyNp4A7xJTnj9dk",
  "key37": "38jbodW5H83Y9poRKjBbB1vHu6HwHyNngTfUvHWwafGgycCZegEqs1jyvWhLVUxapbcMsvYxK4S2mmJ6VWVWN26T",
  "key38": "5L3iGfBFStq5q8NYUgCwRWE5Ab5adza9WqT6V7Xp7iULm7wrfowVYCLSqDS8z1G1RdVsWgxdfCzBaSrJCCzUXf2U",
  "key39": "2Hn2sbiJp29npjJaAYjDU42vYmckex53GZBngBkP8JugtsVTGfUDJZohcpmtku7Q49twq4vHRHU8asiPoJwpP63K",
  "key40": "2PmN1Xct2AwFh9niFdDZt1mNQQV2gznFhtXZENCFjBYmRzDYusaomxzxqcNF4QR2L1Qq5szdk4nyNJRWygWWNPFQ",
  "key41": "54F6hPdiu6J3yrcWapzRWLhZ3BHohQU8LNa2ibUKsphJdyjs8dzfhCqw5cDEbkv8MjRamwYqTfB92Bdz21gWsn2e",
  "key42": "2exiT144kDtgKySEGEbV12QFkEarHDZb6cXJSV2EpEmQERbPAmcAzkdiUB1gS86BRtZXf9ZaEQ3CXuaCjSCAtXmg",
  "key43": "3B9pPZu7pqXeW7rGem1Hz5qJd5FXZFTDmxuWmsAEXUzzBw6tE9w871dzHiCMqzCoHXqogRW1ULTRGYBdCwmGnGCJ",
  "key44": "22251ByD3L5DNVBQCgcSZkS6NgjZi6ZKJRtsVEAYd9LMufPZbgSRkoL6wpPzWtkH81HJq1MP3T45U7sUj5HaMv22",
  "key45": "4qAQVxdUK21T6rmhB7noh6KczzADXpFa3qXsKPg9CPNj8kvcrCXmZBRaPKxmsKxAb9xdjY5qMNizSFpfgQVRgyn8",
  "key46": "3YTUktGXyyq4KFhqMDpwhXfwwoW6WjZKm2Pu9iSiVnkN3PqohgUUHfvW3aXDHyFRYESvZc7Gmfv9SR7k5WEUUBMr",
  "key47": "gmKWP16VzSHbqg2BwURZaoxSGpnw3QYkR3HyvmQamm575q6Ut1ufcHHoRBjtgGHfhAhNHTqp4iNRim52m97NkgF",
  "key48": "5ZsH1v8prQzWFzhP8VtLugf6Qpk1JWsJtd2Tw1ETNRQKhdEJ9jpxJkx8sDFzTCuKWQU8AqmqCwfDdNX6YNMshw1c",
  "key49": "3RknWqR52EW3qp6w62oiFH83fWTFxC1MJHBDTajMvo5YzZWzMYAH6z9qbtdix6VAaUH5exDpDVFy5LB7YffmDAKg"
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
