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
    "3c5E97XU4mZKy6nptJu7ZqkSt12kx9YKKCQgPcSgnN2uf4jaNvtV3iLGrLE2KtNnhBCipAqG5PBT9MYq6uPJHtTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GyJ2C2WGWCc9KWRXf8DZ7vkxD3SvS9gj8oCLvyeK2X16gqJhmaPNbwFBG6eQRkpz18iPxWE1kznB7iUnmK6CsC3",
  "key1": "32Y2C2MLbSg9cEcDZcjwHjCUvFeL9a33BJAfkfU69ySCEACC5d44uJLrHnKbso4qQCw6C4ZAXCVopvLb4CaykXuo",
  "key2": "3pxVp7po7bb9bLtR7x6qzDmiMu8cbnqqH2qdcAgFuVKoi6AW1hnH5xJGs2sLiWBuDuvXABB3RTdVPgfa7vLSh7Lj",
  "key3": "2AbscgKcfeGG97HafnSgpGtpi4DtLRGvk6yAAzpLrqrQnSBMxfBkevh9yY96fD6KK9Tj5tiL1qfyvMbnsLWYvYHo",
  "key4": "boTo4UdPbfpNiSQJbQALeJUnACmEQTGtRqscH6xKd6Vp9dNNXzZdv2K6FxVKniYw44jBNcS9TRRz8TwMNvEmXay",
  "key5": "3ejLAFdAtykocqRp9tqVGsTGF92kCsPBMLjCLsS5L51N3a5PcFtGUXqksHD7kcAezvWhRY421JqRnqKPwo1qMaqg",
  "key6": "2rwRmbh8GJpKCbK494QcPtU1TCePALhtGpL5ULubQEqQDtSgKY5nsUc4bcq1ZjCjEpLqzN24QdziUqc3kwBxaVeg",
  "key7": "5aDZi4wWs5Am5e4r9Bep84fJ2CCBMkQ8oCoxFHVGhjfv14mwV9VGCNGQoaQvbsVYVd28buGhhsLZfMhXbooprM5Z",
  "key8": "66ExsRNo8izBMarzxCV6oK4Uztc4i8EznDo3LpqdJoBRph1poURW3UhEwdvTupeyxTUmRQcdcT5SRRtEopxjcsij",
  "key9": "4XzBaKwVMLXM4xa8Hg3kwj1gow4aZer4KHYKiXaDR3uU18o9Xu6HmcLSbLiznMAHyL9Bqgqy9dCbbwsbA541Pzso",
  "key10": "pzr5pYRp6igA8JiRMhv839ymWodb6F1Ff4jUAUfprUbEeiVtW2o1u46Y3YbkcjU2TNnTSfyrCAXJtxTd3hW9ww9",
  "key11": "2jFd1yk3wzWCnjgqWXZuggyn2LSADAasEMJqAKsRwvQ9m47dNjMFVAv9DvBA8LcVDs2ihf9TAMUcrh3BPjEh8XQz",
  "key12": "4GSjoqH2zMJM3pZJahmMwT28NWD7RPf5xhhX1YkyCN1GvTS2tS39CRW81LcZbFa8bxiNG8Ztqf2D58L8eEYXa26h",
  "key13": "3rcEbat5GDxE6ZFH9rjN2ozvQgPHeajsRoKyBsR16qo93dsfqiDXa84rJUezH6XoFsQPETAuf9HTvia4MiCDUX5u",
  "key14": "3VrTNCT2jCnZkh9nga6HbaCbo3LjRTqtMbbEjVQ3ttZiZiqanL2AygtweNYgPhxKAp46RG6iAr28GYNdh3Bvena2",
  "key15": "3ajpRSnmxCVP8P2G2sWwG9pfPTb42ME2Q1Z3jETsPeVH5DNahzdXwV6qB9Pi59kNaKKxH1kmvF3rZAjvtRLD2NYW",
  "key16": "4r1HeLNA1yLWKqWFbCYvm83fvpTGcc6UqqLMPu8TiMXz4J1RvpxCKjKivEw5r2paXV6s2VcQCBkCxGL7W7ugEFg7",
  "key17": "3xFo6FaKWzQywzQSEFNHekufSNQR2fCpCx3M5VsG2cNuUCeZ197rzuTEUzTptyYPhKYJAhp7AHRurRfg97eV3mw8",
  "key18": "5pDFjYrJ4rCMzG9TAEzPHNkd5XXXjDzpeVCaGLKJhfmx4TXthhNAmECKr6viDHVtBS1ZxLvMD5gpurFDxwSkNDGo",
  "key19": "jX9DJQQgHQ6FRZ6Lq9oPeLjgkmnGwJ4QmbvHEL8CM13ckckMgKZzSFLBoZY9ZUrUTPfeXzjmjgPuKRsXZtQ7jzV",
  "key20": "51Aq8K3dwqCEJ3z5b97uSE9Vssffr3BbEEVnrj7v4YiX2HHP3QpG4dUsBtSFj51861aMauXZirPXRmFj8r7HRBDE",
  "key21": "42dQVD2of3FpufLF17N8fWwc2v21VrkZYeymmW1eXta2SjgXK7YjmdK3VPJYQig88JGdEDGJJFFrziR11CBjB6hy",
  "key22": "5zrAEFpFkLbQTA4GkQDZSKgKNivcWWuXQRL8rPd1gyvbgbCaCHp6sFZYniwZSJJ9uL1m6DmU4jFRJREuHSAukiH1",
  "key23": "2aHACDTKKLPHThdCfLsNEc7EHWQyobcXk9ghkNgRMgXPn9wC8pbyQdjvh5SGpqJ9PuPvghpUPK5ajRYrB9cr42oF",
  "key24": "5TPasD2NaRg8ENitJdhAj8QffeqbFF2U8DESeHzXPCduLJcez5BJcG63RYKqLBAYGy91pi6C8Jbuna6mtSBbSBNa",
  "key25": "4JjYQRuYWhoYGv3YhTJV7TsgSttw48SKQfDvRrzQVSkcSk61zEDSMn3qFmsTuvirTe8kcKwm5439gnw6DUWRBdCK",
  "key26": "5QFG2qJvoawTMxveZ24HeYVWtegaoq3fj9HDmnrxfSvLoAPjDJMtxeD1U34Nut5xNDYHPC87qdEbZnGmM52GMyK6",
  "key27": "4GX6y1DUXe8o4AuMuCMTburY4ZyRd4fnx5xJTcf4dTJkTp9fhXHUT6YMFYn6LWrkPQtAtCtBASc7nPkajworeog3",
  "key28": "3doD566d46M6iS84k3cHFNu79FG8qEHxX7qVkbCnSbfURTE4u6vV87DVFNRUDr4mUF1uRANZQYX3wSS89wZLjiYK",
  "key29": "43ric2uFRtKrHptsjxAYGGSa1aL6aeYS5dvnfBZf1pP4UJZWWV9y8EXYo7NEZ6u6CFcZVL1ZAASCt7WSDxzG85mg",
  "key30": "59NMgKecwW6odCKTR1WDHvR3xNkNtzyNiW91ixz6P5vc3bNqEE9qpsgnF9fNBVX3UiUD4uSQcKHcTtFEPN5iAkFt",
  "key31": "3xuDZMBexKFpZmf79veU7FJMaTNfpaiXhSjex8rECM3cQpbRBHcRu89YgxhXuhc8GYJvjXjC2EVPNiiwVYJTciXy",
  "key32": "28fwM4JWhtJB2AFg9VcLqx15kg2MM99zpyk16TAcQbVPePiowSyRjYTJR9vBffLSwUAhL12L4oYHjVMK7AF6dk2u",
  "key33": "3AD7Ma7NrmA8uLn6rQVoKMRNxp2nWpyvMsUrsLPp7shGt4vAoJmQ63WvGz6xSGYfoV4uzCMCufTzczwQy4dSqVH2"
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
