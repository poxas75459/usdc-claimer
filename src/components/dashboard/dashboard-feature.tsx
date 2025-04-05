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
    "5FTVXUWf3xTnrm6WzUR1rMypriKrDyfK4TpufQ79dZDUqsPewtXf2vKXce3rbgSvgBmUppHz1rnnQG2wQVHEKydq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cKFtTr7fBopEkXQPYe1zvLvUGuBvruhzHJCpu81jLu7H1FS7Gxy1362FeZ2xJYb5TmPVKHLHGRefe8B4ErFkRX1",
  "key1": "ce5XxuvcKJPDEGCVHZKDNyD67TLYXRbUzgbnBUznmmWEJ8HKTQoQKRC717TYy3cFgCFUfqJ4vf7Q6X9zi6jvZRa",
  "key2": "4wCB2MtW3FHqd5RUSTmerbDNNS7MzpBQas13YpQyAsS8SDyqkpK3htRchLjPZesNesNknsxMzyNaYHYkPxUbneD7",
  "key3": "RH5fXzg5J7YNrXktahT6kDrzWxkkTcXkGtqt1yQaQoVtY69DeYH2fb7bv9yee37HcaGc211yeHoSj5kSH1DuiTG",
  "key4": "5yL7bw3tP6Z2QjWFZj6Kzu7Eqf6MTGNHf44TweXLdhViJsf7h553GJddxetHr9Mngth6BuRD2CtJeiS4LFV2vd19",
  "key5": "3ZCx4zVfvqHB3V3RjZeSJNRRTh2WF9oobia64gAiHrdHRiWkNLxZpbA8cCwgd42kA1kQMzEgdXK7SBcfGv6wyHYR",
  "key6": "37vPYdKQFSNsJwY9MVERo641U8eAmssDhw4adnkYuBuEXAZgWDLgD4KeyBfjpw1Z5QQKy4RKYfrXCCwnPmCpDmmv",
  "key7": "4xzWWr3RfY3eau2WgnJLnMeuYBw7k2Um9VPsykrys5nhNUnaRFXFDs9sD8dxhpDLJ8Fa3Vpft3nJihY4qWvD5CYo",
  "key8": "2U1Ji6QvJv81SGNmAE2jUjSkXZVbBjgeBrUPWXLjoyG41f2pkUNgiqCRWhNkAgzKNHQPJLGtaRjY5exo7E8aeFaL",
  "key9": "4qKmTbRhVp1yQjsDxcGT47CxxJVMgXz6La76kPLFvYDKYwHhxo1V7euJULZpe6e6frAubJg8b55KTx14NwznwkX8",
  "key10": "3mfENUH47S3hdHrQqC3o8A1fQycDUTJnnG86Kt9urAohKrwBknqCRQPUtDxH5cEne8Gb8eDtdoGvLsBeSDhW7qc7",
  "key11": "kaNWhNuZreijkikvtfnPmoYGxneRNeqch9HmvhUKrSE7DwTgqrBEqj3Y7wD6eNhb1i5Y1AwDKRjzeWmMvU3X9kq",
  "key12": "2dvz1DeT7vQLdDVu4Ygx1bXzzkwwyrYNiZcZr6sikcfkTD33ZqWqPX24xYX81z9ZTdhCirMG2RVfNBmDvroLakf5",
  "key13": "oWQtNdBhHnJ4ZR15UKqZwbXhGZxcbCBQ3Drgz1aDJQe9sNGXMjXwntmyqfZGkzsLRRR5U85q8VGBMQZ9oHsStro",
  "key14": "5EEMNFHbYkJu2g5PcGcUCaMvd1LpkHuvanhAt1zAMpEf5DpBm4aqW5rqQkWEZ3nio1HPe6kNZbWEZw4ATHS7FkAE",
  "key15": "5TtYxnsXhkTY7ky9uByn1g7bFfCmCdRXR5QEv7axXMNXWsPR2LshLh3M8Mu7N4b6jRV6WXZGveefNgSQfYpunqoK",
  "key16": "3cZAEjN865n9FyTVbnTPAhu5YabRU1s3SF7mMT9a8W8A6NZaHSUk4CCGVDWQnsqtsyr5mF2oEA8GTrPKP8tRXiMS",
  "key17": "5kMJjrqSR6iZRAiTqnCTUSVJvR3sjW12hMUe1cC3kbRr3nvhnXUgHSqApcFBBX7YELLtQfsuinNfZ5SwBDWeW7Ly",
  "key18": "4qH4btkyKReqLrithj2mW72kBgYG61YCLBsifYPC7WPB4kWMsyzaU46d4TeZ4ium9t3b2t6mmNgzSUnz7bfgQCuX",
  "key19": "3HyH1ZL9hNt8LLvJP5F8DaLEKQkqdhChboRUpKu2RiSt6QtY8gASdYfg2hZKk7C2YUFJE54xo5F4TQETFaXNqMNo",
  "key20": "Tzb8SrJLPVBnHr5Cs2Arao1kYq8tZqQ8G1EpPnfYAbqiewNhVvYiQmRUXQ953nGgdu2sB2mcRJnmLfyaVsnaLmt",
  "key21": "jgAhqYaRtCcxSWcfJJLraN1n1o7RvmDHBmGraDjfFSy9SKTrfawTZYSydyyJ4P7Je48NpqySiVfBktxNVXifQwf",
  "key22": "5YyvEeURj4g1yxxCQEYrdBqKjjLqVy6kN42rstmbNG9bQ7c4JMjZmQ1vSnNW636nzZj8xaLY4hmUwijSvfbnonpn",
  "key23": "5U66eQcPB25xGmLrbMfEKTxfaict23CMjwoJrAwzcibcimBNbeqAs85VGN58EiU6qnPU9UacUST1y7e3apcgdYfz",
  "key24": "3gMYhMma5LboHNudu7KP1VByAFXR9Y4Y3VRmyf9ej1u2aT4FSRTgJLxLdmxV4PKM5dnXu7d2uSnuURrpRHTJ8URT",
  "key25": "5Cev3bGVFM8grGQrVdFcCA44jTsuUeX87ahyysNuHKFzvje5bfRPJ5u7RinrknjjqLJLAUwrfSAyNE36MYVbv9Hs",
  "key26": "2pYEfPshb5VwWKqvcGPsQNNLNfWrPZBZMYEV14qqNSx9gQmuRufqumXFmEN1Hbzm8UNwEZr4QZUwR3zjSPtV33cf",
  "key27": "47ZEJsw9UTpqzUK1iTvoaAuBQY3NF5qn29QS7pWybTsZdYYBARLpvQGhDkJTVRkTdHtB53w8RiDQoofHL1SQRxXQ",
  "key28": "3dofdWN4S1iM6NhppgFHo3V78FN1J49uFwRUtoubiHaLEWAVcVj6V6GZNo9HkizRcYw1vcGkGJ8wSrJ4WQgALVNk",
  "key29": "5kLFjDxZuzBDKHUFX8GBb7JEy9dmwF5XdW4ujrgbiqCzd3vAH6JwaSwCisB9p2toDFDFq2oMKCMDiChKcRKTixQ5",
  "key30": "3G3JgPAiGC76XLsYLUUJCHpwsZqdeE8eMVTyk3XumCWp4zH8xaESm7tyQUKh8WrBktQYs8PYyUWj7bE2tddfgX9K",
  "key31": "Jm2Ebb1pfLK22LyTX1bf1BssmCJXkB7h6WFKEt6Bu5K3LrfD5tB7QMAxM18gbeHbWYHAwyncfEkbrVQnUYBnAeG",
  "key32": "616PQJvndbSmt1SWvjoPetzkXeKZA6rfZnPGyb9g7UVedkY3kYXJFiLn5g7kZg8rWr4gBGnZFySZGgyeBQrkZ8NK",
  "key33": "dx5JjPfdD1CVDSemxFPuTxPi1rFpLJdhFRzKC6ss4aV413rMv7QfkxhFsgbVTF3MWVVoyPD2AP1nLy6s29mQhNz",
  "key34": "2YbSuJ1swQ2Y9Zmvt6LmYKpDkpzrobfyD642VubDUSp8BLuSfr2v1HRxAteKfXHyUkxxo7t9P5MNUvHB9YJQBRmp",
  "key35": "3zxtasNKL5bhg46B7WSeASoU6k1GCTFChLhzfEshNkSWyikRns6zd337skksECKmpU7SRVmKWFUSm87rRUyBnpjg",
  "key36": "2XCL745QN7Le9WjP4N2CVu2LD367Ld1dDxXtPBVUsXHy7iQCn93v13uBzEp6Sj1oq2qmFdCDFMRWDroLucodR8bF",
  "key37": "2d5K2ULiKYXAEJwAnmQ4EwsbsX1kCdtE44YBpEsXUB9H69fS42AY1zMM41U9XSkjyQgMdkzDrrCbqZTnJt23jF4X"
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
