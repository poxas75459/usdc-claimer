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
    "vKnWYj6SRf9FNe8FnumTpFSrEqSpmhovRe6FqvDyT1x79fdQqFAPd59TzeKhhJPXDK6Ek1sLhnLWmXgVaCWedCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2beejx3cPgTHEXsWWQFKvkToYD6zgo2L4iuqcRcP7YJuzhUyGpTKrgPehScZ3grzZtJHCLYKaJvXNYxSapDVfcQ6",
  "key1": "3dHr7yFhrzg6hvimGde1PY7iB41y95NeniftDx55BUhJvwaPXXFaz7ssoZey6DfgXzaK1kqoYU1hfLy2hhBnCR6z",
  "key2": "5WqbH1QFSBWhh2jiyBvGddvAYT74D8u2CJdgdbUapAb3rECFEdbjo6d8kA5g4KmjrqJAVsoKPzBWNSZfDKCnpgei",
  "key3": "33q4GTt6DMstiE6teFEPeR1fexm85UnURZ3nV86MBffL6v9FgmwHj4k5tx8QYxCPGyeTvBXav3qQ2ZpqhjKA5y6S",
  "key4": "mLYTVsMJB3w77sQ4VSVgry3hcrFFGg1JTsjnAbtXdxw5sireMrpicp48iBL63SqqCEKcPaAqfyH3L7ofwt3fq8w",
  "key5": "c1yaeet6VxdCRUKM3HV1CHMApGkwCiTmKbN156ytQyBACTBdEnGUsXv12oyYpq7TasN7TES7uQp1WWMaXZPHXhC",
  "key6": "SK7PL4rRdiKD7qMYKqsXiznMsRvXH7QhaBHkX6mC76LjuYJNvJdHrguvqLNLMg8jBQ2SvS6khJtVKd7mfY9dBUe",
  "key7": "4rJKPqzyE2YvAvgDDc2RgE7XWMHD77fLU7H7tS3UbM44Mw4weUzcb4Bk5DRXb69QoRLtsUrJvLBUFp6BwwBVzLCV",
  "key8": "5xiCS4t2divhrhjgYq4WmDA1nUQc2SyXdeHDpgFmzxXT27D7y4teM5AfWRu3bYheUGVFNKWfvXQ2ppEzQJHA2RgN",
  "key9": "3sjbSfzM8VYdnQBatEGVAef7YXJr7XpYthTM81cKRnL2Dc1trchi9SSkyoTfeVXnEAHKcj5vPG3UEHf6dN4WYw6H",
  "key10": "H8DYLDJZtV495GzPNLwFB9px2m739k7a7ryc7dyh9HHfgUTYX9N8ytPWVFhMaYPHfeHAnfaVHwgViozxC9w5CL4",
  "key11": "4g4up35pV3tViWXxSRFXFBvur9kgL2QCyF6Tujge88PCQ6opBL1KqmmGh7sEViUqN5UaHaSNxx4t4UAdxUiT8tM",
  "key12": "5M4GvQJFa3PtJ5kGd6m17i9ciNVVe5RtjJeGhdiJqjufJrRccYf9XDQak2VfTESJvXW22FTL88owR3iqMq7e5eXk",
  "key13": "4sik4HbMVJY9pi5FiZHAryqof8P2Ty6U6cvFP5GYMAAZ7AF1uCq4ZKfGmYXtiChrvaxmi3LHs8K31syASQ4T98PS",
  "key14": "57XTRCAPVyuFWoNXrDiS6tLDCvsZb8fjqS2V4Z5RvdPyXqKJCZ1313vM7g6NkntjxSLsbGHcxTMJ6jQTNdVjhnwN",
  "key15": "4kSDvYxkhmcESoaaWbviL6T1TQK1P1A41L56AKynTTugSCBdsDJ5Ls5y8KHn5ctUy2pVRt6Jib4g21cDzJvWb52Q",
  "key16": "3ChcJtCCGenS5iMizojd6j7kqAnieQWEThbEBZ2fDhJsGQC3WyyifAGsnRMRn4M1QP8zwSeLkzUTHXz69e6i9Cyd",
  "key17": "2UdZBgCWx3qgBHhafSqVVq5xsY8usCA4CYyY1cg63x8AWGob8SDSnk21bA1KRS4sDAwWL51JQYcdsRXVFp9pKi4i",
  "key18": "4L6A54mP5dKVYQutWuRzz1md8vkiCSRfiHU5F883x2suHqRrNxv6D4hmoLuLvfN3UaQkpeBoE3H3eMd7x1xiUbjd",
  "key19": "2MCy7MoLU7vqbb1NztGbsSt5oZrdKWBupSymnbsmGMJ2b16sa84RUqQze9BLX4ZqoCL68gnMfQvCB4KD4XYroSw6",
  "key20": "3UpKpsx2soPKWFeRQhkxMoVDdVxYNAyTMigwFCme53smcXmpcXC4u5wmqXnNshUwbkAQTVUfMLS7CGT8BeQ99uQ8",
  "key21": "2TbQAvE9vR41Y2movBfyrC6j6vSaQdPJ18kJtWUM39k5EcxQev9wNMQdgSPgAU1C2ZcD4qqxZimmqEecMZjjKEgm",
  "key22": "4bBMfkicpANJX5ZEtXsQhCaieBrm5eqWeb7Gp517TvGiPi3CabvF3iC1MLTzPPQVi6HHTNEkv9i1Cr8UcxUiFqQe",
  "key23": "5fP2Hd2PWzXSwuEs2tLkfViTZckAm2hvN1j73XDx6JemF6MV6NSb3VDRemfNv1cWpw18cXSmu9NPto1TSX1be5zM",
  "key24": "42Hvu8byeRkdEhXsR6u1aPxWGMiAqeZ61KEhJx8W4GF73uaGojbr71rmPM811o7bcAGnQjnLC5BsP2qQc6rqFeus",
  "key25": "3oEYQbirKbzPakDwfW8JbnALovv1R2bpYCmDDVHSdahfTDAWxcLkP1NppcvGACCUsfAHZLhK5Ai1DwESHuRh9rFM",
  "key26": "hD42PFd3VodC8kzFaYNgrG6tA37ZG9SugCd2gKoR5L2LVFRvMtEis1i4S5Fv7S3a5jtuLetEwcuEFia1BXC9HUm",
  "key27": "5H36noUq8q9qmM2XqQgJrxyBJ84EGevCG6oz4sfVhgnk8a71AQ9iUgiQgpBmuP796ZSv9Q1nyPf4s8Q1pFosPjCA"
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
