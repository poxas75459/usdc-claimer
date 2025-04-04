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
    "43UVdLSPLrcsirddJ64MEoNFQsRLeLPueUF2gQganT6YBfMaCu6f82Vb1cApKas2JHMYJzyEWg2EeVAcsiVFKknk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vMvr5nUfTiGZ59XCt55zpimfhSMfJ5w1E2tJYBa6ZNp3YB92tMBXaZokpfvggyT135VgzMWUX1WG96ZsTnAQHYH",
  "key1": "4sxxwfYDXvcZDYh4h5Z8KAoPnCjcqXrSgWkUAAZqQGFtVWzyW2G14uf5rG1Pd1zhgP8sdKKrE6D9XLQ3DVWEidby",
  "key2": "35FsRWU26RGMBqf6vEGXDfmYTw77pdumPMaYY42WNrf8acSsY6gCsBKUzii8xEja6h3h7PYLG8nyi9CPtY8yiHjA",
  "key3": "4yEbxwJePeGXJirA9bw61TiFPSrnZnTL6Yf1mto8jBpVeWosLwNegRvusgeRmsBFB3ZQCjwtSnc3ikgtysfj3c6R",
  "key4": "5ZnHyNX9eTcy7ohZ8gQFLPuLBzg3dT4jSh9ybytGjeEQBR2h9voLhUibsUDkjJJzdxQej482NjfXhyJEFdge2zqK",
  "key5": "49BJVayk7L1kDsPzMVHznWxbuhSgEHRExm5iQHiFTfshvSNb3K6xq9479aets5Q754Bem7tny3NyGdVKPppRQgZC",
  "key6": "3BLAB3QNETjykMoVPhMKZDj22XYi739dJ3TdBgMqD9t843wXBh4KegKNTuLQbFPDNkxXKkowsZ7BQzuCmx6YLtxe",
  "key7": "2PkXBeyTDXxCVmC5XdwYR2yU7Fcpj4NEn4tvBAFYRSygSR3tG9SyBjoGSh9zfjpruZG173hUtsbPYJVuRfQJWpw3",
  "key8": "39ot8wa6Bgm2tLrZp67NzEznTSztbP1T8ThiZQasPd3ovCinZou9XpPrLhm1kDT9ux6NfywZFQLAGPHDfT8Mj3ef",
  "key9": "4xMduCaJGiy2cofSQezuuQhAUjwYYeF265h6DhJnwKxQHbBKnt2iAMUKmjwt3CyKDi2jXCB2jW3dkA3cdkaa1bKd",
  "key10": "57kuGsiGHFzU3RcCVk9Wdgp8ZhWd41dDU2w1rqoYfqvDRqyWFqheEBvwXofEi3ZPy935cX1KV7gzx7mwU5vdGGit",
  "key11": "2Tu48jkWQ578SRemNqbgUz7JUxBkbTw3xAaU2w1GTERuS2qmjMAoXgQB3ejBNFeQ5GJTcdPe2RHB5Nvekwba4o43",
  "key12": "TH7BWBRkdfM5CutvAFgTwTRkjD6ZL9t1ZG7h1G6LAb3EU5uLSxwxSF8MCcRKzc7wkY3Y8nsZvuaiGPsiuA3HetH",
  "key13": "2PeRF9vdeyWsieGR9fGSwRWh8dfCHXuKZJ2CHUpbHvsqdcZ7NtRrXNzrczkbWN1zU3xzibKX9QX8XxX8s8FJ66Uy",
  "key14": "LhedQrQPHdjje9zXX5XUz9NPBpZDgxZmzgTzFgzEMeB7277KrFSwimfZeUyoUHXQTGUJSXhpZ1iUVqMijEv6CqA",
  "key15": "3iDXCdBFbKE5RXD2kR6cZr4VxMPBV3FjMKfWTZSWpDAqYUT9ywcmnpgiPQA4VLATowoBF6gKYyPoaRN3j2pybjoY",
  "key16": "2jzHrjmh15AMCg5cjT97U5eHFMKDTqDtQcQTPTkNbEJSCH4T9Juzzyp7tMuaG8QW1A3rfDGXVXNAG925hE7EMDij",
  "key17": "4gJ8WgJzHpjkU2UshD2herCoS41oMyiDFP553ysKiBsZaiFmx4XKyJk3PWuC8TbigNPxSz7w3hS3nm9KuYCwNCPH",
  "key18": "4xej4xAW3neqpHRWeRBwrVzEynAbLr16uyPM1uQ1Ztuiw7ZEYp8VFCuHbxcUmDhivhgAMC2HuMQuRfdr5TzQfmcz",
  "key19": "5pDStN7J3qdgc66w7sbke8By1ydqEXH7YGiZhDYifkh9swdhsgc6sDuomjca7Vno34deoRYbYsJaiNRM9rdrhj9V",
  "key20": "4UXqafxg96tq9ZS57BWHS1pPMU5NAUphEhwft9cmwzZJPUANQRbvS6miQfXFNdJTfoVDHd8pim5EzaMoL5P6CdZ",
  "key21": "34mQfDqcsvxwvjFDfoXiKPjXk9SoGrqBDGiBxZ1Hj94bqSqw5wCViRK7e4eAVeuJcEHS1oYZ2EDfBzigtmpogSBq",
  "key22": "64Ma2256zufr7eNRibqsWYnTkVk1dyCdgUb95FXTKc6Ex3u9JAw4ro4GRB8CNVVp7JBDb95jScTtEbooR3msre4K",
  "key23": "5UQcykr1PQzRU4CyvkdFf52qSGj6XMVrnfH1NSDJoA2tn8So3K6PgkoMGp9DELjg3TU2JmniKhy18hWap5CQve2o",
  "key24": "yuDx935kao13PKN3YqDiN7X8sDHX4UswvxaTCmTJA9uSzwdpG9uRtRsdgAYFxeWyoVYUFWmrZ8X2zCC7hZjjrAG",
  "key25": "5CRWodPfucXujeHsxAKVQCpFrYMmfdBRHHxWN5U2HQeSRJ7Tva9cTbz41uZVXcdfc4TCk4pYs77hbmMyVKQCCWB7",
  "key26": "4jVYfdDH7JLZYxAY8EmaM7UdiRQmBywMdy9dBSFoXayL5rW5zsv4aruHn7kwVfJVKYENBUPsXA9aYTLuZZ4SzW4g",
  "key27": "3xeUR7k55MmfRdHsrS7zuX13cChQc7E5wUng69SAfu94y8LuyWc6raHVziU8EM7NEjKobDoecBSfaT7hnw9tjEod",
  "key28": "24Vcpoex7QBMrzCTQffNmkGQwaz1UqNsMSUMDE2GrrKupjTZYdNwAW7tLkRbkTvV3C5R8HKvJ4eFLuZH3bAmpmjn",
  "key29": "3gw8QBo1QsnspPEcHi4RqCEwcF6ky6fHDymEPSNswpjzzAY1LTUEmdPXBYVCD38WduejgoX5CiFUJMRe6k3CVBCj",
  "key30": "53WqvuqSL84xeZCxaoRbD9fdb7fRgEdCpQ48XoUCTPBPF7rrZysfkXJNwuSfDYhpFgusF27NNEW8G4A6RFU1rjEX"
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
