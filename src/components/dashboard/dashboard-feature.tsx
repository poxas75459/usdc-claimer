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
    "61643SP55uVSCyk1gPp59zg8nmBjjNuQuvwEg3KkkmHHMtpyoysYe1ZzCNmhf95e4S9FopDSL1Fu2aXD1RXektbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DVPQz3wGfLvrzBvZUP46s5zKM41frwp1CbnjjAgd4rbGf82iKpsKNXFMBCwRZHvw2yT9ybfVbxYFHnMWhj48phg",
  "key1": "HSc8tJPvMuomXbAhwbE5aBas4DPfTHozUqkjGLkWEA5KyMwsPsoLnMqBbRkVcdisTjTTS358FprXS2H6qZTvurD",
  "key2": "5YYZYsjP9i7PfBmpTmSWpCRAsa4eY5XkRs8zHpJVbrPGEHK2xLFj2vivn7AM91TayrFjvYcMwwCiaXc7bG84bt8g",
  "key3": "3Mf3fk9iEPj8qjFxTMAjDB9VkmuCKjAzF9oNmhRFoB7f8JEhSNAnguvZprv5mLH6MvP58mLLF52bnb9kVvz9mx4A",
  "key4": "5Qo1u6f2Yfcn1D6U2G4GHWvja1HzunsZGhCtDwVsJ9tp1Z3NKcscpv78VEfysMuTp7uDgAm7Rozk8GM8317PJ8yN",
  "key5": "nnW53WVJfJTUvisREtvfB82Aor3FBC1kY61wSaE93uzS1LvTRtbA2418T7nRMPgV14fL7zFqnJS2AzwMDmrrbcK",
  "key6": "3YzbVrA9pmHF9xD5y8F5ZqctZTonQPZEo38zDkwxgxH8Urwpsrffmvh37YDGrMiMrxTPF1WDUUpgU1w5u71E3KSd",
  "key7": "WGsAUDTsHwKrM4cAvksGry79NfF398zrmkcABhCZHGjgh4Yhw8S85b4YTuqjU6ANUbmdLvPonwRPG7SRU7zjsH3",
  "key8": "2AAM69PM41LGUDV6N1hJMJMoAkqntokVv5F9xDCUM1vxVgBf1JYsNjDGtdgAfyA9XTbQihvgJy6wPgtPvvod4bbD",
  "key9": "3sDmSmCsMMydoD4YCPJLUwnAwbyFuHoFCjJ3vrMXwzaJKoE3mG6ij6nFV4bf3fAVzmTu76EHd5ANpuTo6854nYas",
  "key10": "3kaHjMjs28KTArBF2652gxuZAwSupxKVCRct4mhhEXxdjeqkCbZgUzsY7gqu7UeCQrRJbUujr6D7tmhcZGr98Bt9",
  "key11": "4a7g1w2RzJaScNUocAZQfSea8B7PhMB72XYYVnuUKNf8Uy3Ph9JdLdaCGVcQ9kM1jUSXR4MfwpsoKQPfqSX6BfSh",
  "key12": "2zE7UnEaWkVbPAwCWDNEDNoEwFpAQ7r1AuSBsgjyKddTgpMUXTar6dL99fh16hBC3y81FURUpVvMqUWmYLb35RKA",
  "key13": "5k79B1nPdpc872rccQZJAk6jm5tqZ3Sjmyik4z6zhYT3BwhkbPiYXcUuo3CY3DAKJwLHGqeErKckLTtzCrqqJZW",
  "key14": "PiVaW7goNQNUUB8Z2BBMTqbwnjYkZ9c97vZGJwJZyfscyGoYxRwmFb3AphoZSBEPbE5EkPpM9z3oNFZAyWtiLdq",
  "key15": "3KrSw7s1U76YdnTQNGL8qS7D5Rw6Unt84cW1kqNK4KZAHezKemQmrsahS56ersL6bh1JRnVqA9QrwNhKJnP3PLzb",
  "key16": "4cZP85hcT8FkJXBhUVqTDcJtysY2Yprjks3xsPzDcSXqSs22yCs8t4z5WgZhFMcKjHJPaDJ6ctUCXfUTU66ctEyX",
  "key17": "3mzBYoBzViocrhPCmzVvjZpkqiymGTMJDKeFFkebsGznRXXuYb4s2X3eMRvyEbYpKAMbCRSjpqjr9UMDe57sTZup",
  "key18": "3VdvLfncp7yf7paGCDKukk2m7D6g8CDqsEPKKFuyyU516gaEZgzqVb5JatzjRcXQxFCkmH2QPb8C92BcQUn9jXPJ",
  "key19": "4L99dX878wvpVLDSExhAEGeyUXw8g4YeSsjBjKy7DygQPi1ygjHHEBhMChjeMFPqrdQTqbHZQnLowSVy57Xo9q7",
  "key20": "5yB91ARAqQHgJ3CXgyf1ueLe8dAFAkc5aQ6q3rPsyW6Xtd4DwfYCXcRgGVeJTQcH4DkMLbqzT65JjfDhY8cjVJsG",
  "key21": "TT4jBR7gG4YuDVn62u57kP6yUe71yyp3dTpuDDNCZWAc4qB3PEAUBBhLma24ek2YcvHGC8TCsbwWo63tvTjnEx8",
  "key22": "2NMoNgb3y2MqdfCpzE8K9jQ7AfXGqcjLGW7UuZaJAeP6a7dMwpgDWEhTgyqxEiRntn5wubSNjy8vFj9k895aPTno",
  "key23": "4hEgSMVq2n7fJgQTJXzEyhXnnBbKu6JtTxsRgdbewxwDmDaK6Pn94marxmMFWgWg2sLs8DTBLpcyPgnjVnebWD7d",
  "key24": "2YbDLb9TgZpVdn9AzgBYbGwmGrSbagygEEz57n8S3HyTbxX9bQrsGeDzL8XCbcEsRdpfHvt7q4tRe998uKAez5zL",
  "key25": "5snXnvG9S347giBMLMtyCx6MzbCjNF69dhSh9f29qs5EWyxzaad27kY6xGVovSfBR63QNzvtMQb1d4LGh2H7bXEG",
  "key26": "3jUdFep85rbZJuGzkjcDNAmS2KWLhbeq6jozLzZornKMjdRChUHDF1PQ5kfz1fY6t9fZn7uNEX3Z7pqRKxpCYkF1",
  "key27": "3beuFh2YNtRKrUbwrY679Zj3GQ3VekhNiLdZ58pu1UkB6SmvcYkY8HGj7MPvQEpeFpeQBbf785JP6akkuB9xE65N",
  "key28": "5KbRx5oTaNDGyWfuDSaz5aCvvNi16LJ35X8nhNU1FftRXmnqeAdQWFE4bw1uzSyB39eZR4R7fTHgMtyy1jDAZanE",
  "key29": "2RBmuvJxtrBBduZfwZZLYp7gTqLXyv5e1qp3pnhTxEDoLJ4WwKrKDWaenWTqqLdEgWjgzQTL7yQ7SLCTGxc1K2wo",
  "key30": "2VjhBET35y9fYC35Un8S7WvZNQsu8XWbv9Unwf7ENMo6W6TNEbosQafyHdaT7gwo8MMLaZtEqSu6Qm3neG6Ta46J"
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
