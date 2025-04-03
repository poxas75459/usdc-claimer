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
    "5bnNyCjpBvw3E9yKKZ2bGxfmYqN9T3FoUE419LjqUZhKh2R1kMTHeu7QpqrS2Dh6FHx189sHtCnqTenoh3MxEsZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FZyUZC3VBa5daKteLoKeZ2Qb9V4R97YLw26LjkahdXsW5wF3XHwuVzwb6x3f8ukLaexnY7Wb3sBPMkuJx6EMgNE",
  "key1": "2UQgkAeWEnXfqJh6dLiuxnAJR1mdUUzkgZ7xQvU1aNQZ5iKkH1iaymGZuVtXUpSSqWM8TVKZoN7xfRg1wwofaxT1",
  "key2": "4eghx3PS2dj3zdV7BGjwq1WofAW8pt4PbuuFZ9bYeYqYya2UihfWLVfwcwrZ6iQdzBGZd3WukYhPNfzoezx3KioD",
  "key3": "67wqQAe3F3AbK3hi5r1DhX9HgEUH6ruAuHrJbyqqvakHz5tUUoVMth4VhCRiz8h9ZYJj4wPsM88ryei1Fzq5KdG",
  "key4": "3w1ZnoetjBqw2Wq973mmMrSzxM3zsB2ECaQ9eiirh9gzNXHhtPbpRoCPWdBJb2pLYY6ANoHi4i15agX7r36givhz",
  "key5": "3mwh3FXN6BxuYCTngpK1uyGu193TN89WFG4v5cJEtXcUb3yikmBGAnk9BcqQhAd1bvqjziaAvwgFZvPvHjfB6xVs",
  "key6": "N9aZFUZDyVEdCCzwrTshfwJMT4XztLvxKChPsJWZ5VNwzdoeLeKWt1SsNidbQuC6cYHeJPYK6Vsg3XcBivgcE8p",
  "key7": "3Z6LvP3R8SCGmzciVKKXLY3qZPyYG2KxTmcDQyv3o8PnxGXDqXDB7YRYmx89aEnFmTG52z4Je77ksm6q7aRQViGx",
  "key8": "3AsZZ45pFG3DKm4ShLQrBuLUXyFnwpUPf9c8XCxWxRybnm17vPAGh1qqCaZEHbjtMPjrCRfxAcj6QVrsT1z7hksE",
  "key9": "3evQ5Zat63155NfQ3P4KQsznTi5hFk88rKECqqTvM9jSxJr4GuKZ5BVqZWSfrvn1FoHWU5w4u651cLqTca2K4C2b",
  "key10": "vDne2E2G34krXqRGnZJKJ9kXn4cgexqanZj74h64NeQq3x3r2kdRgq91BCTUxH2zNj2deZzMCUtomDXNw7uLebt",
  "key11": "49LLKuf7AMDz2k9RsgJjznzdDsd65LgNmscsBN3VMH7g4dMbuvgQLm1LGTmpofiGP3v9Kb7pwd9RR7m3kf943WMP",
  "key12": "5JRyuxEohhHtHHiiGG3RejreDyFNC9D1dh99x6KYtNep7GxqRwFEgZAV5qNiWzwvQDuDosiwBuwYdAiGcJ4ZUjA8",
  "key13": "3Wic31kjmzqpUeCk7xNC4a5chygVs49AUb3kGseqFbtTgUVLym9KX8gKKQ6TzUfCxAr7VEBWxS6435S2hZJvecpV",
  "key14": "3SUbhnwyFvvTNPoJsyWGnynPWT9XPFQhSYuVRTxoB8J6U4fuwnGdyBjy6Nv8ag2RBUiRjkc9jSfoeqfc1iPxQRPS",
  "key15": "23cRjfwknaciqGGFvuhgF15WfoH9tvatPEzDDFKkjiAUMPZu9cuHYmYBRKyMVLwWAZC7hzYm4jXZRThx2bfuYA6i",
  "key16": "4pKwYr6FRorxMxefKuAaDJawCSZUkfBgBWRp1SYvhQLzXy8yehv77z98Fq7q6geB9f84uBwDLk6KD9GKx6HtG3aS",
  "key17": "3KbZvR2HNtz6oPjFaW7SkVBVDoAEfgvRcuPMJh3hWV957rDj87mWD5G2D5mzHDz56YcDqJDTDoXTXSgt4WsSXubD",
  "key18": "T9pgE6eFqZK2WWf4QkEHQGLAXBziyrVpahPL9AkmdGYyRSRb5KTzpbzHfx9ba3u63h7RLs5ZhaQt3LxmXuS8Lgs",
  "key19": "2cefLuguibjeXDHxExCMHjEJb7EZnk93hWDZ79TAXp9uKZpEj2xKXVWhCimCPspZPriwPXorenGRv4DfEtjzS5xC",
  "key20": "47BV83wf8Pe286ZjSPTT6Vv3mpGap2HEZBmKpr2iJDyfmxJrj3jxTaKHbB8p7vvZML2DHwu3UERbo24ZAwk4sTHK",
  "key21": "7skCnNPtjzK31epYvKvawmsEDF282bEpa6KU6e77EpBiTpCHnE2oLTg4Cij6rLAJHAExzFDzAWVuGjJUPRB4uJz",
  "key22": "4qRrsNEhoTaWd6MPhwdWorTCRfMr8k7rpCHYoS3JE6N2EHHVBwTL3uv7Qk9cxxE8AXefuCdnfHjNsSmhNYMMWXmn",
  "key23": "4AiLyViBw97wi6ZqH5iQpHdxTD2PLmY1xRcVdhMMWjbd5xyuAioK7hRdaAAGxHuoTqG5AjtfRvGeb2mcE2ugsY8V",
  "key24": "3rDdvp29xcAvJP8RHQuRjwTzeqDh17QpfWwbvYstFCg6Prh9s9GaPJPu5Nci2oh7yak5HBLggrmiAd3fZYpLGX4j",
  "key25": "4iYH6Gnqy48wi3tuJ2uYuNk4Eq2gmbaZTukxQcNyVxoMsgPwzYj1PZxVHvBea4kwrd1pRNnDBqCbmFCXF5m6RcVA",
  "key26": "4SG2EWFvhzEFm2ALLNCwKY1SuDZYjkoBXVikuzmiuefS4t1BFBDroF2VavZ87nJEZEaUAEvSZPziGzDg2AxSsAM5",
  "key27": "3invdbB4i8bF5wx9A8QCXy4uxUWpNLcdBFExaRCzpfhDbByVJGNBT1EdTb2miDxSGJbFiWAmKaTZxMRer5v8NQDk",
  "key28": "74iT1S2NNrR9aNGK4ykVCq91LB9q6QZV1r7jFx4K16e6tiU2RBACJBM9NnkpNRgBfQc5BPocuJ6jPWcNGDqPGf7",
  "key29": "4xgZffgQBNs9XKWViyHH1mDfTY7qK8dXb8LmSWzqsypLZhqrjkhzaZ3Hzi52ReZXuzzXTqL9Uywi4oVA8s2CoUKF",
  "key30": "3iNHk1hvuidWV9bnCNNAGXT1h9pjddZ3tKNQVgBuaC8YHtKCK2VYuHj15F7qa5Luc1MtpwrzPVDEjavJzPfJsiS1",
  "key31": "4u4YxJVvUDRy9XChQYFnR6FTWcsHEKJ5tc6o9UzFEdfTnNggbfwQRUHwxRQwn3Re88EVvYkDgu5mEn3HoeSdUbA5",
  "key32": "5UnDaTVcaCKZbbUb67dep6vGQ1q7FsmexxTcvrqhEGqNJ8ER11Kbj3EtgpKXW5V2TidNZCTUgzg7H5x8rNwMPA2n",
  "key33": "4SrSCGMrVhg3FXGj1dXVodccGV39m4P36iunkQCaEeW5ujiSXniBt9zaYQP3V1u26qgNJUYkS8WzrtLNMeeE7pkv",
  "key34": "3xBMSKUdjJZcXmcdgkcHyrvVjS5Tx7WUzbAqvJqg27FK3eZvFmkXYruxKRHNV92ydwS7q9VxxKJdHnXawD95xDTt",
  "key35": "4fLvPAkv7Fuk2RmxE8iEExPBQLKbFyzLoe1iTjdAit9thYMRbuCuQaYAhmhroF4gJ99uXwaXG9L1MwdLhkZGjV4x",
  "key36": "3bCN7zncuX7JvggpWU7Rnn274ZA28Kh59Dedef4BXdLpXXGkT1YTwMV6Qv9HMikr1PJRDKfKnsNGrbeK34Xy8QWH",
  "key37": "2BnCpLDMhwii2n6NPKdSmy89R5A4tLN8cJsmtQry7wTc7v4f6xrEhVXERmMTvPCgQmJcRgErFyJcE33eP5Uv7BsN",
  "key38": "5TLHL9ipoH3eytJCtuR9CPfk51fZ1AzVNaeDCeye5fGLonaatZdSmvCuLvQuDcBETrXErVLF9S2K6pjwKLYKSWNe",
  "key39": "NJ3m1Z1VYek91zf8JgrTK2ciGubr72HFRDRxHTk1adjGws2nX93Y46x7WpabjJg8EMBvnSZH752vGhyqzJBqjhV",
  "key40": "DsiwzCWLxQ3LAzHNohvjVy2ddeyZ89fK9bS1rjkPaiZZjhnYzwQXPNDestgVZRgiX5A9fCKa9GQF9DAaoHQfAni",
  "key41": "h12oiDMuXe62PAzgBHKx4KHGgdB4MbvNA1dFbx69PshZKzNVbVMTAM8LiBSPGQmHVUTPNPSjuoqArYhbLgZyyB4",
  "key42": "3MEPYNm99kBrVD3GaPgRvp5SjxzcJw5QiaVMaV4dh7qta3ZjLzQp3du4Khq4BnwdA35ytVtpkwp4RTZzAnzvtzrm"
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
