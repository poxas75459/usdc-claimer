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
    "35VGmGDwi8jmYToRjnj1WmbqVMWdhwNz2YPhyVHYT4uwv3PkKgjBtT9RP491UuNUbcBBPRieDungYZb5cHFUbgiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27pkPab6Wh9KdGo86kLMKs3QSXMDZwJLgmkFxYmwKseGM2s16XE6gNjzkZ5DWNqsHhG77qGcfvHBBgpNpJHyRCGm",
  "key1": "LD4PrBKKfwftadgW78YmHfdeAAisLZ1vBforH8PgvwtkvZr2rTJSMUrz8anKP8YgirYrCJk7U3ubuUUYu9D5TWe",
  "key2": "35BYiAEEdNSEkBwqZBfJQ7DF91Eb5Bb6wQzkT4inzP56DvNr65tTfZSiQcFTyAciCkxx4yCPbtKyL61o8Eja5fYD",
  "key3": "5ovLHkYiEAdX69TzDUyP6TX4Ft4ELHXPiLQT4TCumZFFr9K2ooUwXBwXWiQkoQrxy26bfpcum6XbMHb9NzxuomcN",
  "key4": "3yna55PJPsNvTeR9pfh5SiVybnm666gYwhQtsrxvZzVf5jKFjFLcWk914Eus4GxseV7crMZ6nC8wLq7GEYJwzEuZ",
  "key5": "5YsvHA8qZCWze4nmvc9G78JCKsvDwbH4waq9v7HUSRKDUnuMD7oYonMba6DGHZ43Xo1zA4fJNNojdg9fi2m5QnoC",
  "key6": "36FM56vmq1uihJo5Ew2VEU36xLjBc5ZvmRNsipgLCivjhYMH4avmF8w9gm7MM5GC6Ug43q8SGrCYz8Ko77YM7oZx",
  "key7": "MvVrtqn9kngcwrkMVJDRH59osyb8Zd5bw1z1KenMipdRf23nnixbRJq5WwktwcStV4FLAQ4oyCpJkD7Hrh9SycV",
  "key8": "4zKDUAkPrYAVaxPT8BsZiFKrWc9Y7jdP5uUW23gX1ZSe9J4ovj8dofq7aj6bFhSF2kDasoHANpzN1RM73gy1DkEA",
  "key9": "5AcSvPnp1rG1WGVEiHGRXarmDeUyYnoH9A3iJUGc4cUQSLT7g3kdUn8aBnZhEVHbjG5mbAdo9z5XqMSV6WAJ5uf9",
  "key10": "2Lmt4zjavf3vzTvhrus4GuAdK6wg81Y1kd3g9zubz1hNYBqgrY1SbpxN8vL4vixmssKAFbHzhj6Pcvemo1Z8CgHe",
  "key11": "5v1haFVudCf2QLb3P5Qc1tgKE6BbBsEctbMNu7jwdeVWHGipZug7pQ4mwEDDR4q1qLHmHWY1T2J7vn9PoLM1Gvep",
  "key12": "67KiNNKH4nyuAoaLqWiBu3Ddqk3tmkhXvVRNMSLWYtedMgFmQpQXK5BthSQiSEFsArHvCSqhcazR413LdzDAzmb5",
  "key13": "23DtE4MXgC4UJP2P6GeLRcxE7hPQUVGqcpykMy7cop7qgrnbknGoPvkfKFMnzyf9xNN4zZKa4qXLPcePfdJPB8GA",
  "key14": "5xZy9QLRM9fPW3UMfLLC1EVkcGFpbp92X9TZMhpAaW1isZKRhZVhA3jEXwJdqyofpQbvcoGNdfDg4QGa2G7e4EPW",
  "key15": "2aAPHd6AWALFEFhJWahGdD4UHznVnHxbAaLxCZGyCjWE7ffserBJ6ooYE41va5wGMrU8xLBdoh7dUQm8og7w6MGP",
  "key16": "RYBwnrJYLACGgZMk4yk99WD7cSPE9eKCH45StveiUKi61Ejj3CesfY3WQMfukTu255iyimrXQVNio1Y4frdGo3X",
  "key17": "4ZTo4VD9EkMMvpLkNSzD23rpG2sXEdfNg1AbXXDmoz8ZAmcQzPkEEyCCL3MHCEaWtrCm3Tcqr2fUEKQsnraE3M6h",
  "key18": "4b4vgL2G4QZLZT4QN8smEGtd6nP96fm46b5sTzcn4nZbLZMvqKeJcmnLZEBEWdPMpDbykjqv8m6K2KpBEX2TSHtr",
  "key19": "418Z4abfKC5CjAkq1gnRAaFCENjnCGtkMAWiESfZzjQQnCdZtB5iEsdKCgzgT5Y1UNWHLtiegzYsXCRrxkVp5r49",
  "key20": "5FZBwBqM5VbfhhtxXxjVMn1cZ4SiEVNPJcrDV6ph5cTdY9d329EiQQCNUQ4VkUxT34DfG9cmeycD1X5np482HHVN",
  "key21": "62zfJVUiZzQMg9yCJMd9zr71jbUfcdTH7hNucxFKqYR28XfRHcdjWvEdRtRMbW1Foo5EjUCfaxMtfKsJabb9HZrw",
  "key22": "4zU4gEaozjMkWFnqC9QHn1DdGvuvoXdu9rT3PN9V74xw369uxFdnk9nDvjxks6kzReGUai7BkkbQQB1uo2aA4QNJ",
  "key23": "eRQ3z5FKCrcHC91becxNW5xD8PStKM42rdoM6fnySUWrDxRbQpfcDxkn789NGmBSfUZXh53ax4pAoUrfTv8b4zX",
  "key24": "59nL7k7eUJL3CdanWhZ4oqGuB62qrqbb9FMpeKUQq5q3XSs2wNgvK1PU7N9NQoGHPVdrjYCySXzWrkYHyvmnmYjd",
  "key25": "3QFkZYD1bnGRVnMC9WK4t4rKkbnmziaa6VWDua2Zcjkrz43oxP8jG6nxqAy98CaabVmUUBKyip1mscShjbN5t3Bj",
  "key26": "5gihQq44ySwMZLG6cKSYbB3ES4b62yetW6PQHUKxpynsu2YRqFt5fYkZicUmmy1ftSYr5m3jToC55VHUdGg7euRX",
  "key27": "fsSSR8RKL33aZqHsnfcateFLVJ3SF5Wjw6hbiJfGAmTTSaQ4v2tNHqCpZbRQkF6PWjKTB3cjGn9yyzLjHQQaKTY"
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
