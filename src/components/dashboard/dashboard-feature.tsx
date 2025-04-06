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
    "2HZUj6badukigZR86UBtERsdBjyVTFNjYUy6kWAzhqb6NZyBiUhB4pTuyZwoQrMXoVLpEaArQNHKJyDovjzxNift"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SzWd7fLXx2rE4ucYn87vbCbVaomHNBjya2qY5UzzN8BjubTLAm4MWiGtiazNETn32Z56fft5MR4GzoGWSPEwhSy",
  "key1": "3QtnESBWQLeN59SR1iPiyd9FkCcMnsU85s72mf7vynTxsuMe41hAQQHrc5t3putmNHRYfDUAE8Hi13YQ2qixCjKf",
  "key2": "Hq1aiTYDbmzEYiqJDutmcXh4GAH1u4MdbNQNZSFcuuGtr3HWn5JVLSGvqmgNdt4vbe2AhK28wTQRtmZC68nuQ4R",
  "key3": "5HKF2uSf212uAZzFR7meo3oU7utyX9v27dYwiS8hcpMKLG8WNbHErxa3mj8LRZCKGsjRUVsQwfHWyCVgKmwNZMeZ",
  "key4": "65dDrNN5HFZBWdQMyptbNCwVccicr8vMvKV4VbAWQR1DS3hVhKGaxdg1qk1LdYWRBBrVAxUYbXZDqJqCRJpoR5C6",
  "key5": "67L7VD41X1AYjCS1Nruuhk1x58etr7B5RsxWEXmDn2utmKDGDpQu1ZMJhxUsavG4z59pwp95sVkgj5ydviqb7gqT",
  "key6": "2sTwCuZoQLS6yMkFfUm6vkra7HGf2LawUJkS9cjubsPs6fFDubh17yvrUShW5uEYaKgmdoQ5vt1v72tqsj2YEwk5",
  "key7": "49iDDwabRuhBTJfzQmmQE1V34dbstJx2ux7NCpdJ5ZThswMmev3wfMCRKqspMpeKkBbjoGtjtkTeYyV3LkniHPna",
  "key8": "5NWaZ8uGL4iLr4W4HsAUSVBFwHCe3w6ik8wS4JiiSfjLrZvXKKVu4TWEmHD6nUX4VRJLzcvtGz9DqWr41Bm9N4kF",
  "key9": "5uFCAmfjz3neaAqebVxQBnxcVECCY1owxfYusjhnbB2cG4nHUBwoyKiSJTTRbbYYTrcpA6DmFwH7oFvLCqVG2iJi",
  "key10": "5enMyMFXwBYPyL7MSNEBp2Mm7LSKyHL7y19y2i9r2tgaSF7khm4GntRgMifmf1fVhXxo7qr8yTkb92tJQia6wLT",
  "key11": "5m1ientmPtGyaqRM62CZmxuDFpUenCvHLaBpHNaiFyCMFc9AKud65VCeUXw4jxEXy1HsQjT6A6ppGkCUvDFXpqoP",
  "key12": "3cryfN22xjBSit9Rg3yUFUB8nJJXXKeRTqEYYvUJi1H2KoKRLEvXURg8tfKWXthR3mbnrhHmZJdDcP1h7S25kDHD",
  "key13": "4whgE4udhk8k4Q6UUaPu2udzZjRWrhuusmujYgBg6dR4zeH5em8TKzzJSoFEviEc6KKEMQ8pBDjUfE6GCuEHbNJJ",
  "key14": "56xC6omfzKynyzJCS4iNWTAgmbozzByw1KQ1mwanyTe7CqRzuUAa8weGKULc2C3WS8QckfWpohuaZHr9QTQAES9G",
  "key15": "6RqdVsjCCENtpeu5wGtP6LkG12fvLZRZY8sa2NY7ut2r5nUTJbWfFizJcz2PXyAum2jeLtPSxb8GYhmAW3dFjAx",
  "key16": "3uZHQ2xUAtaPjhnJuUWkaCWf1ZpCczXJgyjpCUXXd9rHWgYKkyZ1YXye4B7cVFEcsAmjyR4K9oAxD5ShoHzDc1TB",
  "key17": "We7fc8v8bqoeGBNAEqti4aHFya328VqBWFnq9MhkCuear8jArPAXiZJf7WjsJCvcLBZcyUjkrayiTtDHxu6yFkR",
  "key18": "37aRJuCMEXt3ZMMHqzEaeYLKPYAdQaz7Hp5QXiENjeC3skAQz9LhGZjyALavr2DkD5anskGhapnF7CUXEfzNHHvt",
  "key19": "2eFpYPMmWcKAN5zp3kEkhNSyzVQNp1hyR89HAZRGXJNAuQoyKzdkJ9Zyykyf6prZeh17CDXBzZgL6FmT1fPUm5QG",
  "key20": "3VxZgNZ1kjjKWKqVYFAs7gQiut5sqq7Lh4tTWNPbZgaExCTbbBRcaBMrNP2e2DJUhaNYKTmfWbdDPdp5XepRBjKC",
  "key21": "5Ewv7oTRNsYozUxYoNMKXaSw8NNCmJs8arm9MjJCWwmiExKn7fbUAoNTaH53oPEUwsR3HdioHizV9X2uvgV3PtSK",
  "key22": "qQ3YAK6bUBYF43qszVmaJYiA3c6DZgJeVh52pBWoAoJ8QZeZjqNui9dKYHRjgBgfFGCx2vLwrN4mE9n4DViHLsm",
  "key23": "4TcwMwa3b9yVwppb1WVu7xohRJqeeHEHNJTKuJpJGKx7kmpkGK9VwXpcXLbB8gMpx1dLamXoDqPEwYhnfUTPv9i1",
  "key24": "55PpdGEKG5gNuV6fQ7qdiagHwjRcR8aDF4Bd26ZRMYyni2UxcSCmre8SwMAx31Sh8ooEr9xCdLbh6N9M9nefwMN1",
  "key25": "4CiyMRh2NzDjBPbnThPE6iGVa66CrgsiukBUe2nzcTCgjH5czd1YrxMoCNw3ugXHdKwSJ51H6RLDMBjroG1Kj9eR",
  "key26": "58idn4RZZhVNUneXi8z4fWtNDGDdvTTZLRfjnrA2RSczEJtseaRFS8FJpAVmW1xXueMRnPABBNGnpNcVzL4sLHgk",
  "key27": "58XWZmxQrACKjfybH3eNUEWAG7cnYuBh2uMLXTX4kNoGZf7B6gQ9cm2eRmyf8PxxvaUch5nJREz9oJjW5AgLR8Vg",
  "key28": "59na4MZkZaxa2bwz3SwyEcu6pM7PeuRZJGFWqXHuiq3tzu9vygNtypGb2Vxdi6Fn36YRFjzJHK7oxkES8CdPgQaV",
  "key29": "5FTvBbv72PPwwZ3R9nAnobEWJ6FxwSWyhdzS2TYFWFyG6L7Avq4UD6VthGTNyHVvdvzFFa9mgVKd2Ph9UWvEH1nx",
  "key30": "53bGYkZXX8NhbrxUrnbzimpTNAcitvfGTvCH7VG4F7pKo6LW7q3JakyNcrnwnr4jvVutenKPNnazLujNPiDQyXkC",
  "key31": "2eyjDb9RwRw4BefLVTRmXXXJ1e1hpxsQrXWKKr1xAipsiywFeoqAj75ttfdTNLqVZ1Kj1YwgaFR1XxYzRH9ghyTF",
  "key32": "SzNt2u8CaYBik9b5tnpFm8JQa9Crm1YrUMVhJepd2xuHbPaLSTaaSPfb8ynr42x5jwKifanAT8Wm1P4SnMrHB8B",
  "key33": "63yaBKULpVTxskMCtKZnr36uaeQ9cDyQ6nPpTAD89n5V9XXNVbPn7Tj98w6qjjGrThMEqJ1sfXJx9Uph43KiHd5R",
  "key34": "4RcYhJtaozrhRQRjcC4KdJx8xNJkBPHLfxPU9g8ZyAz81NxedeNshsGmNLkwyiz9Je2R9kNW3oMpVNaTsT4hwpzw",
  "key35": "5Yg3NYoKLpqHwDQMAkh2EPNYnyGhwY4ecZetYn6uWKe4rRT7jKxHRXMqhoTfS9tgVQvdvym2A3SXjVcitDfHnBr1",
  "key36": "2othXCXBXfXNak1T4nLtMJxeoFiTCjcCy3DW73BrYDA2mi3DpogBQho5hjw5FSLR6ZVrXuuJoscMbQL7ezSQVX9g",
  "key37": "57Yk1humKcow18DRD7CPsMqnEr2uSyPy4QoeFQ27jLyqNVdL33XV1TvHuTd7xKzynP2hJQAKtzW2H9DLHrtBmpNP",
  "key38": "5sc3eXHRzH4yyGEhEKZWM1JrKZ8d9Gisj24rnmj9p9hhTKuPCFm7dwD3UkaMJTt4APtw7fK3nRjUk7H3R9jxRoFv",
  "key39": "4361EkZacp5Fdc18f8Htjmo81JWGEtrSjuBzU7jS84rRsejfKwMTsvht2aHMghmqsrAvH3vZQ2VhiHbXfsxZA15R",
  "key40": "2ovHC8Epx5w7i9QaVXsUKD2kRZF6qZSyeZCXqwT7zMhEtVcVorN1Aczr9qH3Z2StfejBYMBgwQv8ipxCJpXhh8QG",
  "key41": "q8gPBSJz3Ry7tUed2TKZfr83Hv6ne1iRhxKxTa9hp2c7z1m5hdJEzojrcfMe3D5mzfSrtFr2Vd41zHPHJpwk3G6"
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
