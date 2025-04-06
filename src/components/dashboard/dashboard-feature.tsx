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
    "5T83FJL9vQRcP9933MbMhvL7U8vQioHFUPEksHt5kvS4xNcrAyZiE4pQx3JqwUTvu2xWpKTzXSsWvWGZsRE8Jtuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GEGBhqyjGPSfLtaKX4eR2MtXCN3PBhbNohng7P9cUC4o7uen7jjHkp2Dp4MNrh7d2tj7sPguNKuCsrbNkTtyKHG",
  "key1": "4xqmAPMAEYoijyvxwgUgs2Q5DrmWuxLdghFi7Du17eH81dKar4owK946Abh8ZiagTbw5z8LDedepzvbPhUwyYgzP",
  "key2": "5eeENrWQTvpt21utJEoT418mcTUwGoWQXcN9dShc3Qu3JwWxsPzFg1hUQTjxx5ef9NnfP6UfJBnaQqXYwTY2zgR6",
  "key3": "bQnVxAh5kQTuiPwtgm2VN63o6jw5timcq6zfer1zUrH7PPsSM82omVvdcBwW3DrULh3Ypihq597ASw9y12Dkych",
  "key4": "5DRuY1amh2Js1YvQbYSoJ37yQ3nmPMgdoZmyVNDPtyoqeXEZy8w8yKz3od2K5RmLLvwjJCqaQSJoV2mCSpJs37f8",
  "key5": "R5JCxPUtGfjpRgyStwhSH7SYXcoiDmFV6fFRw6kDNAr4XEFLpLVf1TXGPU9ta4F73kLGuzEUZVFxQjz8vZznfaJ",
  "key6": "rbUZ6rczJ8XkvHFC2LzWYiDUex11QFxkcs3i6D1jKQ2iK3o2qRVCvzQLesE3D6had29BUuHpfouXpW1WKX5aKGJ",
  "key7": "3ZaoFNZJLG5e4HSEN2ftXHXcxRfp6cwxdw9RXZJSx7Bw2GVVv8uuRAb9zicg2FqhjRYdBcwLiNRmf11dFzH7frzv",
  "key8": "483HoM3TG7UWpt3XBy1V6Gpg6PBCA33WyZbrAXNscvM1qkbyM6anrBgTbEF3CUvYFt7F3tFv8tJX9WBdUyYqamPB",
  "key9": "2uoBKehDzkjV6GwVX1g83NLNwM9YLNn1CDKkstDM1VrgBxeTo23Q1UFHf8NGQK1ZdiWhZ1ms4MpP2KUWssv6MQSa",
  "key10": "4Xq5nVzVnsjJBJfnLGx4FKN9kZWifyDuR1uY52s2QYgeBqvK9twSWowEUpXkHvbVVX4NUP9xoyEhMtkFFh2hKYaG",
  "key11": "kgBhtG86LrQeMFB6ChoSmXNQBu6CGSb8ZSsNQKJpdGE9hF6vDpbvuZpahrxyXc8LXgsLzQwu8yRrSe9a14stENW",
  "key12": "2QyMCgVvyzxg5WcBf9Uavdog46bKHkR4RB9gfmPTi8CVP9axs2KCofDuq81u7U1RE12YBqrofWqVaZ9CaZFPJsRF",
  "key13": "34FfWEyp2fHrDo33Bniy5XcEBgBBzwbF7s78pXjgNbcF9FKHBe2GboZu5jNgyoBUt9W459KgkKjBrr1jKjPJ7jAe",
  "key14": "ivsniG6QJoovLTususXMUPQ1k1XWK6eBBLccLMpkTiEE2srRcyjqV9YeyGo6PEhgCzU8wyP8Xi9PYV42NgBFWRx",
  "key15": "3ENujZdMvkMRFTsnZajNsWDSkzt7LDDYPYuADNU8jvDEiL2vkhMnhVFx51KkKrFrJ5UcV1NmDUhgZiEMgPdG1hSK",
  "key16": "4QL5pA16MvTses4SZgFX8AvLEP2QAYRaDioAL5z3TrG7ojmfMLTEjdrFdp5e51W9HbzzTkKhHghHW2LvLthDvSUc",
  "key17": "nZkDBNCV9ky2M2jyo5fjgfTUSfqnctB6GuFr75M5rcYwcF4oevUsHddCJk9CbusuUZYt5gb6C2wvB2MqaqWXMFd",
  "key18": "4LqroC8N52W82wx6agMJaYEkM92RyUCsi9FWxTy7sMYzf54T3aLyW4fugi7ZhA6PtsCXaZtHBDpyhZnXPiC6smHo",
  "key19": "ExHKH4gvjAqLDKz8PXEutvULLepWkBviGCGydYbjFPSnpgMbpYwGwEbAkr1CXsoCi2FDLbufwKhrFH69NC6NSAx",
  "key20": "2KZgmN31ymHaNeJcAT832yaGQ9qQjobYJ1cV6oniENkXTPXckVFcTALeHHSEBwEsdu4US8pkpxEAdFQaDYhJ7TYo",
  "key21": "3PkkcKJUCaVezpu58o5VpZ7UY4Ch1D8AUqJnq9a28vvHsNe4bt4X8U6RFzwNhLxzc8nfA4maxFukDGK9tj6Mp6q9",
  "key22": "3RtobZzQwPeeKWmdZLBLGbGCPQ6d1E6tmoomunkXgWdxG9XpUYMd53rwLgfzd3k22S8zRNPTNJgZytG1YUzQb5ca",
  "key23": "5vioNFkPDmuTH2GHgN3YbJ9N6FhR9Rxh3DcmFnwjqStsGgaeY5HyHcqyS8eRg7HjybgSFggRcjupMSwJKs8V3N2V",
  "key24": "3iK68f8KDnGrXYHCf3Xqa9TZcyQR81AKg2kEhWX9qLw5gGu6xG9fG6twngjFsvtMvSxpDpBRqNn2c1K7xF3xsUgi",
  "key25": "5s7pYsT8ToNPxqVQp3N3Z8fpz6rt74KSY91r3bjFNwHkM5sF1hWYonD7VMBXTcGaCGBucnhzohfNGRH8Wygf7PqD",
  "key26": "6dLQh2basChLKN2MG8i7Vv31ihRzhTMadHJaEgDjCwpPsaRKD5SVyFK6gjkwkGp4cRJi7icrzL9UAM4oZqGJp1q",
  "key27": "5xSSFei6X8LjUWupFEiBj5JNyq93AXw5ttaLNz6KoE2QnfCS2AaZ7cHjaLGiqdMiTnixpQGWrttC9b3ozEFzvwep",
  "key28": "4SBM7BZvEvjDoVaX4dixRWDWwFTCgYiTv3dYgdeJVt1PCSi6XXj6nndop62LK3CwEMV8iq5ofMfyxpP1soqSN6UV",
  "key29": "3JbCzo1G9vujEmmaG4CfJshDmyXAUSagxC2GGMdkN8rTYMmqN5ZxPuUwHBJk7pohVDWhwH5W4rvwDKhHjJVqfA9V",
  "key30": "5cdUXJRFug4kLAqXEvBAwP6YK1RVEkdeud8UbSj2FY7FFBFz2R9gsJmichGGpvAB8qPuoJTRRK54k4z9zK5ZKVcP",
  "key31": "3N7FH8KkdXdZEARPPQFSo3wqdRkgFoW8dXH6C2sjaBEfTexpyuYYEnR7nGQi1eZzHbWGurZucBdVdMsSSHiiJTkD",
  "key32": "QnxNoLbXyCKje5umUTwpEP4rWjhpKiVXzKXhyp8yfsb5EDJD2Ssy2QRPXXdsZxaCTJiCNyhMpDW3txk1VqCV4uW",
  "key33": "4SWtFDNovsDrZWsBYiVimurEyEZWm7E7LyUKiPENa8Gx5Sdg2rePwR3K9QJ9qJQU7zwTJTY9NEWQh4CwHX6crw6B"
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
