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
    "5gkLin7JM7knDT5Xz5fyTDDNzbeF47UTmhywmV4jH67CrXbmnBarMr4pbcdnNJLzDnBCHYxXF7udY7e9UR67M7BA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25TqmMUh3G8xdt2dtRhaHe31U2hQQForALUpCnDADFP1RFc2cbbghVoj2ruxHXGnDdADPDVSfc41PSwz5eRtEb5T",
  "key1": "2wYvCVEEKrTJJsaMDo5rTpG2xH78pSUyGQSZ5dHZWtvrvKWQATFvXVLUF1B5nmAdfRKUarBLnst83apLTWTQ7D74",
  "key2": "3pARMxLvQ23K81rmSpy7f93vraquXYG1u4j45LjcmhnXexQhYQn31XX5RwqSLaeJ9Kjjt1wVEricSuqJFYh5Baxz",
  "key3": "3du6ArhvyaNd81n18ocARb763oweqKTKw5kcKr3onr8wEKLNt8EkhrvkUQUpspkBw5qZU7CaPDqzwWXmzDYGrhQ9",
  "key4": "5QM3UCxcWuPdyM9tF8U1iwNKsbeCjBAuNE36kwwR2L8hQ75J9BSBtWS7RgV2WDaRqVpyDtpYwChkRRUSVAJCeb2A",
  "key5": "5shEuNy4xK7PX6KnUNDMomyVxxD3myUtx4KV9fCRKU6J9Z3x7uB3d5rcxS3sRPj21HdipqH7mHCEsiy1ZGHHQemT",
  "key6": "9wg87TY2NmwUVfiZ6LDQyAMBdGTYT3z1gm3fWf5xhd7WVzphgQhGYz3qdMbCKT546xpEqVsddR4fStFTz9p2qDB",
  "key7": "4choZQqWVh5gDS26C3xjTL22eZUaF8DLyQ5MSzzXE4trh9UQMe6H7sNGrbEbKmaaLiH5XKaBoDSkjZaBhDAXtXJn",
  "key8": "3HMkqGWdHvAMiF2ZBYxUQZNkBcuF1nFrWfi4iESqLQzkW9uzuUuPu299T6tx75nVbkNXtNG2U5rHaos7Yt29eGNi",
  "key9": "2SwWCXaE5kcUkAHAhTJ36K5D876avNWkoywhai1XmruFsWVQPT2FrDUL7S1MFBiPatGnvpQpwAP5RAM6W4r68gay",
  "key10": "4hXqUtWj7j1TkT7aa6DVMfxc8tDR6uFqgCJAcQEcTWNF62v9xeo9CYaGJaVjCo2i1aqGQ5mK3FxJGWXyo6MgYKiu",
  "key11": "3Sthc6Xg98pjLgg63HbtjS4ZMEuoejE4i71TNx1PGD57ZQaGBxB5gXxH261ALNXmVXHr7paBn8v5JBPQSKbM3tNS",
  "key12": "2fMconXCkemS7UhuCeeHC5gmuoG8YMve7YoEHn8tue13kyG8xCmr8z2X18NhvEy6Qn8QAQPAnxMhQcwRrVpzatvo",
  "key13": "6tre5AEbiKhdygSG5WLt6stgsKWDxg8GHuQjGXdiecM87faGqGsqTXraT2Vc63FMUSkqS2jCK4bppD33mrowsFx",
  "key14": "392pnrrdrBpJDbjU2ojSJTmHPz3whXYH3mrUTurBSf2Euqyqqxa73M2znj2x63p1NYzvCXXbrNpD3eZWm3WMkDoR",
  "key15": "4zrtG2v6dDZnoogRSPUJhpRfZrpcSkXG22pvrceK9hFJyK6tmbGmXgXfTocniSFVJRyrgudjDJHaYewCrpS6tgih",
  "key16": "SBdR63Mde3ikMEBZGBWjrMburEDZdnwesLpr47UfPE45ccmbevZ4YodHXHs4pG3H99x6GsX6mtVRLHgH3NhKpRC",
  "key17": "3qx96uicdK9DkGHbYj8Bir9yiB7Vp2Mh49vhJQUaxxoPUt5hDUKms6VtxHZ4iXn1o9cnKmkDWpPxo3V6scQRv4bN",
  "key18": "3RHWe513b1hdHCuqdWCcCQwEJWJGCd4fW7t8hGaRJpQ7VaxPZrJkx4nazT64TJFeHrguLedEwNA1HcK7ty8wiAH7",
  "key19": "3R3VjhF4Wjtsj8tX2TyEFye49uAHd5BFVZuJyvub8Wh7ohoz9dBoXppBkKqTvoHZK9RYrVMyBAP9XypuiJ8mAAdy",
  "key20": "5z9ooZRyNmF41TLxBVYisN1j4bTdJsQJ8tPwmEFFsUi5vLxFVsf1cPnWKJr4o2By1mDqGDGfxWjFv4afcWwTyvwn",
  "key21": "ouUJLscCawcWvrRUvDkgYYn6ffzVzhKoPqVfzz8LAXA8owgtYca3V3PzJB4sojNgrobz6DBYx3rdjdYy38MoiRz",
  "key22": "3baxLcNeypVfdm9w3cbgzAz3tNu79oNiS8tYnGjRWvhC43fSd7EMc5jRythsgctN5sYHPG2KrKRcVkxmaRFqPHFK",
  "key23": "2AYAjzfFoM6B5RsBVBhWCcKekhtBR22YeYdACAYZFoWzcWjoqt8EuCMBPDnrhDriQ4vjYMoqNWsfFUunBZ2zo2Ve",
  "key24": "4hDCmKKZAmzHzJ8g4cytmzcjYmhUgqUrmArJapc1mS5mH9wWaJv2EBLKhsXJMjYmxfiieFxtBnqMmdSM6M53rdXf",
  "key25": "4MMm8WXuotNyMV7M6RhBX5PQvuZjMESc4eLMEqCzw44LCcfpoDjH9nbV3gm8PFZp3WczJFisCwNFGvtKH6cBaqkm",
  "key26": "4dsbKsn3ghNuZcj2ZXhEVuwUKqa7a7fGofh2H8Q6eQDu8kyeeZZD7szjmTdtoKQoWmaF5ZVcFc2HixUw235LBMTo",
  "key27": "3nMxsqrmqqFi4SJpwhTpoTaCjny91uYNhZbBDdSRSHTmKLDnXZ7xeeCS6GQDqepP5EodnJj64wwkoqeV1RAGEGih",
  "key28": "WZgbjxF5tqtE3u3z8vixWxuTJkL7Qm9FZXiXW7NQqwZQrU2Vx6Y6JYmMBiR77xVjwG9gR7AMg1i1TYYUaSJRMf1",
  "key29": "3ZLxouUepdBiyHF2fA9s2kL98KniEDZFjAfsrnjP8pbRZ5LkZQgLWWsFkq3pnqBWkAZFBUEhnna852RBBZxDS2Fx",
  "key30": "YTp762FGX8gyR3UzQEGE2NyhSEnfYGc5eNypZCXcGMdF22sbgFmLrppG2nV1W2KTvdi7bP6EGmw7HVWQzsT7VWv",
  "key31": "3LDiJ4zfggEamoCDnCfyBHzdNrym8hG8miEZNmbydkWXLLWaQtmRAf9PaFBNH3fMJjkLW9uteQk1aN4LHBb16mLF",
  "key32": "5jBSiLhtSisgK7nfAxGbg6PMLRjgxLJMQK3LXUVCPY6w5abGyakLFvEdFfSSTuf6DL19B1BcuwBRPNjxa9aS4W7W",
  "key33": "5Q3Nw1QmJfCiPgssvTG92TxtcTsEvYY7pPvRicEd7YDAmBWxnNxLZxqsdzqAWYwmJ4qAPm64AnPiWa45nYUqfJPP",
  "key34": "9N7Jkp3qEnvDaAcs7z9AuGp7hsZKEi5CT61sou4iuDtBMiCHLLgNbKWkzB35RSqPjFsyqQzvUUn1RMDtEM9ZkEn",
  "key35": "5kFrwHhVc1HYvu9cYZqdU1yQM8xz7nokCF1gxETqbdfMaxD2UsTrFH4P2EMjHgm6gq29bXN6JLqGqsGf23fVk3Mo",
  "key36": "3Ht4aHKhBxGXWcTqKkXcfX1GzqbWv8J9Ls2anctmP2eE6Zf26sx1yEpeUuVjpjxmHzyysjzfJHRq9HhmcxtVqCW9"
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
