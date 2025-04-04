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
    "2fPXkFT8yPmdkxBJzCD3AQmjZ4S9NjShCYdXMgiXhSEwSXz247YC4kpyeiTNCbt88KpG8RjiaQ64eRuevgJN3SCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61EkZM9cJA7SVCLn21VvS3oujMSwpXsSfCzZAiJci5xYhXgoF5RfPyy2hV8vmjm9egnBd9KY3gKA86iJjHhgWWu6",
  "key1": "rVMSUr5mumGEm5P3qFsxQdQpmq7oMVmrnijJF7bTF85a6ej4Ebe8tdkie9ci3kGofKXPve5GFqXYWi7nJnQfzSK",
  "key2": "3jb3nb26Qmsj3QAsY4Tbxhynm46ZBbSVt9B4pMJ2FAZBWBqKX1X4nqXfv8p54ts6ZGtyMakuUZD4y8tARyRncMu",
  "key3": "4h4iAaLimnt6MXjmyEYKpnduWEhPCJU8CcJm9qqkdVNufG9bycT8UBWiRUx3Z6Hgcs3B3ELzVnuF3ERRDAyQJNv3",
  "key4": "45zUGrqpZddMSW7PUAQPfzV1D7fSxdrkFHiAiK9DaPkoDyH3kiHxPZyDPEWP4DQ6rHiicHSopDXxBLFABcNpxxi5",
  "key5": "4H2ECAtnERcozvebJamzznthQw9rycdqPcWRJZ96SBn3ZSuTbjCHKa4uBrFSWx8nDRsFBgC25QwRbQDb6GuycfBe",
  "key6": "4UTpGyR4aFjJ51ZgSe1e9qA2SGLALWyMBntjGoapxghSDneztn8xQGHAUHDy91aEFNi7dSZ8D71FNLPxjyxqrqKQ",
  "key7": "3ZiTAWWj1YXyYNmGcSE4sagBSe7LnbApKHmAzLXFSKcggEj4QKLSkmdvCei11xmMHY72piaUntQXcWifW8NeTpye",
  "key8": "4JZihi1X1jREJroHwgc8RvvXswgWGZDS4e6zjgyTQKMKYupLeR4YWtxoZAVbwfaQBHrskZqDHoPgHhK2mYgjeyMb",
  "key9": "4rEeAmPA1BFdXZu1bksEipqpQFrUitEP2HFFjDzJqsjooQQ9q3AG53eMbxhrFu1FJADya7JF42EnfQvGQ5kyJc5m",
  "key10": "5axX2g91FN2THAvojjBWFwbtdRjLywkFqqkYrv4ZWUFQdy9dToA855HwJcGZJLUVK55jPqp9AokMNymkYYxnQPit",
  "key11": "3pj4LMN7LChM2YJjJwnBkpx8M95FsRnsVwkVCvM9M2HUxKg7nZYyNK5FmsMbtYaYVoSoNapVuahkxMZrPzsMLCWF",
  "key12": "3H9payGGYZHAciAMcdQM3FogSZ1Dt7xMJKRwRT57gozirZrF2WFiLD2KHkqTKk3mHg4X34uuQu4MTj9SNNpyxvwJ",
  "key13": "5X8WtuZSeD442CATXzhKDcu6hzYeHCx2tFWTvzBshwS7BYFX9WfZW63HmBET9AvQAhy7XrpLW4YRs4obrMacRoi4",
  "key14": "4c757DpmGaBXN6gmd5yajWpuqyKq9tAKnk92tiwmaK74RkoLMSjzXJwjNUeVuZMvoG12gvcYQBiFq7CaT456tEnL",
  "key15": "3cMm8JPtP693wBgphzcCqSadpXrejDmmtCnrDHtdyT98CNH1mHQ3z9AdWBz4TysJYygqmhwGoGST8rzjvXwejvJt",
  "key16": "2yf7YSkrTAubT2iBiJX6MFU2A5yoDSe8KEQFdAuua4v5eG8T4HHMvh9hY4RBSf7CQ8ubWb6rWGze9BycoHZBQ9ft",
  "key17": "5AyWWWSetWAEWLpp1Qh8N1txDu1sds7usAqSGRGZFf7RBA7p7z17NvhkUkCaCQRPcrzFybBjqJPJbqW6YJKpLP5Y",
  "key18": "4tyZbF45gfREjTzmMg4kn9DhCHAP6BorcEhrah4qRPriBR9TjBaUGnokNHjXBCcztyD15SRN8mHNViVuxbr7m7pE",
  "key19": "58HUs2xCdB1fSgVA4LYwUAu6BPgdphKUn6DVXgkgeLuczoLB5KbtX7TPUP8xNJDNS5oSuL2ypeYx5MzCcYVpQzCz",
  "key20": "39zbrtGQMFfxb3FWhmrd4WmhHxgEzaAvWdKqFttqbThs8wv1brhrQXrsdU1vwa78EiXNZqtymygzC8tPDioQr5EL",
  "key21": "4HvbYZAKE1NBi9h9TtPwjZfqw7iPVcTiKJwsewVzeKvGaVmNo5fG63C8SrkcrwhA93V95RzLsRDfo9VepRTF8Mrw",
  "key22": "46ZfyocZVhpDfhT2qcPNvHyGSbq9mdrBPQaDa8DgJ5V4YWXjVXJCestk49jMviUNVAdKormzEc9DYEfaU5DVntFg",
  "key23": "4sC51WmcVEVcaBJYGc7jtFVdirLhG4RoLytQMbCd29VmHykqnHns25PM2J9pAznAATGfhuAqieFWSZ9xTp3dU67R",
  "key24": "4AV91wvmo2CiCvq7cyzgTTT7Ziaky3ZWqJgDujj9eLS6U5GhFFCC9tuyZAyviBRG3qqXn6sk8BYgdrJFTdH99TsE",
  "key25": "5tkTcJzcXFyfmjUjAaUSrji56mN3xBqQHk2ecEap2utxo2oAxFjZrczYyZarLWi3jKmpTUqoysvL3eX2hBGm6j8t",
  "key26": "5cVnTis2votiq7L3PQJyi1R7beWQVNGKTKxzCPjxoxpzFFKwiGYN4UqiJ1Ya1ZxxaAE9JEttPExb85xBRz3SyPhs",
  "key27": "453pjepNDEbcUkcVTCJQAuhk3J3RBuo7dr1qNfkgTtg94SexRPGfwWVDkFqz7zASri6uZsPdEBmzUg6KkAssoBMM",
  "key28": "5W7x8R6wXpVFSPnq1ddej29uQgvbraUNACrJoWQSfXQXyWGUknGmZ92bvmvuJmCy67XdVn3fvZr6ePqHUHed7xTJ",
  "key29": "3DLUQP5Q9osR5ur7qXrSZyzf6V8crYZYNoYkLPeRgsQNzszzENFCgfQWoLGfW6os32pgr2TJdLGi11L9QU51RhsP",
  "key30": "3fyjhUXCHVEC7mTsQ7F5im3AL9rFz1KGX22c1UEJ3iKr6PzRjWY1pfidJQmfnqnbECEqqmwWsRa6a7J9thggFY1V",
  "key31": "2BWzauKg9NMuhoJrfc9eNBtSC5UK5q3VkRfPajNdXTUxvuVwNgMg2gCYiKpdacxQv2vVFwPEKvkw6Ht2EYL3GdBY",
  "key32": "2niWNRktUErME84hWR56AyKiapiF7ByYyBtB5Tx6oscjzVpjDVGK78yeVHV6JXyXBeKeUer7w9ZAgQv4SrmK1Phz",
  "key33": "H822XQ4Lw9yBrmSeJBsmyEu5ELqeqQTmCcD5mpThzTyN4j5oJAbCjBY5iKTAHZ8u3MAZxVK44vVNnwJghYV9NLX",
  "key34": "3jUSn1u7gGntCLVJfNQTxL4QkEAhJwkY4k8jYeyjK76M45DKBoARAmsVT2avLQjAuPVQdRWEKKW3kPFjojwDpzUJ",
  "key35": "2qm2zdixswYLcAfomzo4o5jZ39T6GbVXUvTitqXywVPCJBnuqnXX6EVphUDowH51GPyr1SiKYtXxpUYeNGCGxboc",
  "key36": "5vMEErsKFpaq7RoUWqrqnx5s9BKd4mFyGJEynCEZCvZCjj6ByqXrJzt7ma12RtSqGLz4caPd2AXTuA43doUKer1z",
  "key37": "2DsT6A27NRWWyDi2F3pVqYFBTssKbSAVFc8R3zhYJBT4Xd3rJKQuVzbHMYtZu39TTWKcvCzcKsZt2WGdcJTpumvN",
  "key38": "VAg1L2NfvPwjEP4rhBniiVLKXByUyRrnN9LDigyAa54Eig7SHjN4qQsoPKgHzpxsU8wwmS8G65HJ571Jwg3HYBg",
  "key39": "2DJPTUsQagTyzuDQYoTZGfQR3yBHVn39dzJQojfdxxoeswaPZjiLUbk4VFEDZFPQSp2iHHE4CWDxhzKa4J6YWbPM",
  "key40": "1RPXVdTLVYa9Nie1VHVsBUdhK9PJEWgBMpUmmufgvDDPaoh1Gt4if4dqy8xwGnsAWME5iuHphuGigrbp8CaS8PD",
  "key41": "3iQe3X2oBm22LsA4wN2gRxcR76hptaQBYv5eaDjyqwM6atL2reVuMJyh4oarSWpyN4YdTSprM9VXktLTHE2XhYYW",
  "key42": "4g75W1LStkWoAo2m4sYaLTr9bWfpKow3PhuzptUngBgS2rTpdYoRkWpxJHcJaicpJyk7FnehxZRStAp55mznwNjG",
  "key43": "xxUoJW4GFqCTnFzo4YZjCTm5hDeiBTT1wFzDCvK3UJGLb8H2BxqfTpLLDuNqqLtPzZWHADk6y6zdsUd3Hf5oLhD",
  "key44": "2p964GDx233Qe2TfqHCGaT9KjD5y7NeQq4UfmaB9XoeJJgt22yD8aNtgzXWzLQv5nqHMX7PuApvggtERGak4bpoJ",
  "key45": "5YCHfhHUZgBX6rnKJCsLXgUqbLi71NB8WucqpyU544ThZEVedeykCeF7HXTRsLNX73GSuwkNu5MpsWU47CDQNer4"
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
