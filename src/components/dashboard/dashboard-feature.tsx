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
    "3UQPBZ8w7GhvDgiUMEkZey2hx9bBhRf8Kj1NujBNmi1NL27NjXimUgBquk5LJik8EPVXwY2FLZ5qbvCGSxsj1MxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cd6HEJu7rvDiNXToPRLK9nnsKC2EaFRduTYWy6xhJ1pTaUszbNZGxxo7aLQhwCBY8Y8UP2KhS4koKixxcmC8D4c",
  "key1": "3exoPcBzem3PFZktfDjGdQ92yhzns39vYBaphUbYPK9BCaLxkYFpz2Sp8XEQ7LtLsF7n8Aj7RPFGHpMvEKBaU6u8",
  "key2": "2nfnrg7u1U33urDVeS3TfQvbpbLqsR4rFLxmpDvCkCQ2S8AeTmMsZBuNt4keGrVoCvRmQuwacYqiYLYueuSB8ZUa",
  "key3": "YWutfgxXcAWyEaVM1CraMrc6RBGYF2Nxe3oamwx7F3C9ELp3aF191BbsN61CiNM1RNbPc1ALbmLLUdetnFhkLjf",
  "key4": "3F1bKLbvn43k3iQtN4LKHnyPL5jp25c1F5CJq2c15WCpz5idvXJhYnj21roxAZhZVd6x4jmMDHDjd3xJCPrb3kEw",
  "key5": "2GAAV693dm3siaSTpKxK5Awnd1hSgrJkBbUBFxdZQfiboQLFyjgY6a8NzCdWefuv86oUFspqugm9acXMEQWuoNfj",
  "key6": "4y4udYzPCNBRDxKHGyrS4zUQRD8XL2Pb1MKoLjg7Y6fwSbt4p75E2AXuQnfSYdLhwDGnqP8Qz4FfgmQ2S4Lffh9E",
  "key7": "4WUCdj8kscR6jsra4ARRQRKgEZBKmUDw2XNFFQAqFWCp4Um28vVPb6koFJ39FpWdpfJZ9PLFAvUYuNehPrB3xfSf",
  "key8": "4uBbxKLkkCuNMKCTvAfcx2Pt5RoNBu3X1VurhzkpTZPoceZYTV7eAGBuLbe3g3wG9JgevYPTnHK6iwf9r8FgRC41",
  "key9": "32LJvSEqWSCEXPjrpmyTfL3gDkJWBNGPhbDZ6cdSVUqUGHbyasmRMYkuGwoieSo7Xz3HJzc3adgSz3d1GQJjWYZ8",
  "key10": "3Bd14bbzbkckKAxA1xSbh5rDZwF3zZxaPwELsweZ6KxaEy1t9AV4xQcytFv7CcV8xzMzUL9C8ujDUNeU8Fqzv6v9",
  "key11": "cwVXis6bvzXWtGS8Mudq6NR76ngvtom5nVaCMx1NPuSwFYLJaAKgmbPeUiJ7EYcPaR5VN7GTXwhrnawpq6o6gHh",
  "key12": "RXUrWPowhhok5VLb4JXYzddC8B1Aam8TzjhR6zeZg4CRac14Krfj8yzzYxKKrpHW6Eb7eE1tUDj2HtfoAx1cLod",
  "key13": "4D9XvtpBatqaD9zC3taf5QXTPyxDDDpFfQv4uWRecwbu35DB6dZvZiwy2o32Ny7CNGRahRF29u7LcXZSNgGZ6Bvo",
  "key14": "3U1XUuGuC1DZTmJRH4c1UuUdXqqua4t6vEFR5pEfoGdcJHyEgfuoc9zHeC5W6o8QN7z1DTdVfV6DGvP6eCmhWrYx",
  "key15": "4BBYZLbuU8kZJMCeTXZThGo3KVeiEkSawaDqwH7FQtaii9JM1oDaBqh58obftN8K9kLUWQDaz4ALUjnSiaReG5Cn",
  "key16": "67Ap4ZmgY65nAiHwWSQ6vDwULFWjii5WdaLQqMLmsJPYrGtkeMUNH3VLmAqJNdKwjzDv1FVzQ47jH2ERkvbJYtcg",
  "key17": "8edbxLMqhtmXxcLp9tri5cku4miTRd5aA56nw7CxkP1ZZxAW7edTepGhUX1PeH7tk73rJu5c4jf6o5xGLPK59R5",
  "key18": "pi4iJkoYgU5LrKpxjhS25b4Myu8cUWLsf6xiXqnKT11Ag5cK8w6riptoP2GzkXpPCgUJVvfyu1C7JqsfsQ54YP1",
  "key19": "5QfeJSY8oe8TXuQXhbjLbZ8xvtugUqY8reFPBEoT5DZFuLq2X7g9JfGAQx3vEdx4Ze7ssLHCCDXkySrRcTj2Hrsj",
  "key20": "3vqrYgLYrG1pmgauDebiowTaYFdTnyDtfxmKWnky5ZGdooqMxyUWQbfRegmh4B7KUxFw6r3UWvE5kKAAuWdvY1NR",
  "key21": "61cYtoSFZDHsBzYv6Hfyo9B2EZ7WjC7CsYCf2U4oxxyLf33txSDm5LQkrh74Pju3nXF47eUx84UArasuBkGYMdCd",
  "key22": "4A9D9xLpMRiFn2LkkogJXZ7P3KZXLhtUi8FW1tJ5YzPZnnZKhxG5FyWx9xYYpa8qCeKUsWvMnR4jdPJm1qWPBzAh",
  "key23": "36rUX3YqF3Gp7itjzwj3XWqxZGMfjDezAcQS3cQfRduwahy17fasgXBCi2yTMqhyFou1LtVcYFGUhS25igmGS7rK",
  "key24": "33331bX1ToMMuheYxqyVcyJ9SHYdB7iYq5cRJkjfb4n1ENL48nRq6wab4epqHovkbkEK4iYqGJBhNm5G8tVy7HMT",
  "key25": "2dzQiB5VeRfajueRBRVYVnVTbYtquqChSL9XZYipJvBLY1yehfnMeppjfx2A2sw6GMvbyEH6irxQXvWEdtjd5ewT",
  "key26": "dmGrHFS19sKYQFmTVLMk3yjohU4ruZJiZqVoYjsTaYhSNCxBN2L5jqHtDGKEMcFwgQGEHphYokd6EKHD8tFUNN4",
  "key27": "42gMFHswqwREft8yBKAJcW8HbinnnY3yJ61P7iENVR3H91JBT2Gpp5NvGFg2opPQmHcaophHXdrtbCGbtqjtojLx",
  "key28": "4roxcJB3d87FB9pF4vmgfw3pSR2XkD5kqLuRPFsmcZno7ZUhfibq4wmKkGrWhUham5AyAv3BTszgoShrQddDxBTc",
  "key29": "euinU4thPEZSm5zWcYmgbqPRs6oE7TC5hoXbDixJCdx2qP6LL3A6zfNcfdyiNXhBZaCA7qm9mVLdnbe2PvjnbTe",
  "key30": "5CTAznYNzBTy8XxGpKEYXpWAysfc5WtdiW6r1MrZoaR9aFUvqcR46gfJBtEdd4uwPvNGraKzaDSTKTR1YobmEQmN",
  "key31": "2BGS6oMN2RGYqVAJD3vb4JDuDL7YCw55XLRzXnFfL87dQdbthJVKee5ixSnR1boAbVbS74dnFSbjL9wQiZLtqLyy",
  "key32": "3wqcwgrHCxK6x3xx8cawHBbEW5Rz8jiVeYQdTzbt3BNJttMRezJju2sNiUMsVwRy9edAP6VBVt7HDNJmhEceUs66",
  "key33": "5c1N5hSRRPwvLbSX8EiaVZ8f3wqzdgD1GCDLG1L4a4cM6SHzZwhdBCJ4Qha45kfa72Lk2DEWSP24KbZo9qc5TZJr",
  "key34": "5Lcoj1zgmLsCtxLYwp4NzjnxVYiP7AAh4ZcMEKWiQj7M2UdwCuCer6TEqHnCLv8CZ1csiEq7ibK5rbCvwbCrXmeJ",
  "key35": "3q9gDaZo97x4F9syxQ1mef4AfJKQSnCwt9VTSRnRExibLVqyKSWubvcwmjGni5krX5oPxu2CiuEZn3PJAV2Po1PC"
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
