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
    "S9YvN1yQP5Mv3CxnAAypGDFHfDimKznrBCFZXhm9fZ9vE79ssStoAKESD1t8P8rRzPbSZpkBc4dLBTkFL4VQCHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sHZdZLCjab9juEyjwYvXTqtEqdwdxcdZWSv5JM6Xd1YRNHrgrXa5tRJauD9qUeQaZE52kPTi8qrLPs8DQeXfSXy",
  "key1": "5wF3xFeFw3mQf4aZHAcGKio6WB5VzMpjJyaauPp5JPLBa7Z7VZUhDa23YAoo7JQgQst5bKHP2rKFTNkFh7rr9gWh",
  "key2": "4xsaGfaFsHa71YKKA3YfTjp8kpWoryk7R8DLFyVF11erhntLwyXwt8YGp89RP8Hn7wmhTvFNZhk9EoRfCucoWcvN",
  "key3": "2ZyWuQjELHJLxdLVxaVUThQEjGejC2nNSCRxbHpERPEKQo62JFrhext4UwPaEb4Q87wdMmnREoEPyA5CkRvaKs19",
  "key4": "3tpNNuWAvSza2J8LSycfh2DMPEn6CcbYFP6U2waXhQKPhwaewadDydJZFY8cmkCHmKZgLB8tkfBM2bFoWQ8DQWUT",
  "key5": "2pTNe84HfoLiCoqjoF3JQrTNLkjkrbqFzYkTpRwDMWzcCZSMwjhkAUYEfX759JGtzBhwHuG7yqUmRbpekipAK87r",
  "key6": "2yHnkQdZCT47vgSKRPuCaCSvkrg5i5BHqfD88rv2CfwUHdY1iMKyiwpLDNuUyrxmDqXyWWnzkjtHLouPoweASqom",
  "key7": "YKg5TzS53kUQacBbypMerxBvyaYsa5tTaHuy3DsAWbFGvvcrHMFRR5CW12vTm2dVw7ZGRcmK87UULg4RDGaDoix",
  "key8": "2XqLzw1ovM8j4u9yP1NKXBDbHS8bNonZUSJ9t375QPMeRWTiWYuQY2Ac8QjhZ8ysg1Qe37bexD5FqznWnZLzeGi6",
  "key9": "5nW3sFNK7C3FcdTerZQjxmRWL9p4igPhiRxdy5RVr8w4qrUTwFnwJsf5cBr7fufQkqMroRrsPE9iUrctgQ2SJs6d",
  "key10": "49RKzNC8tX1X9pRdNvHB2os1PnGpgAmqc1WxByu11dLCrayRRKXxkKMtQqWRWwpNE6FnQN48GRki58z2bZSU2RkM",
  "key11": "Q38aJzuFkPdrftwXwmnJJ2FqW8pdxNAnwxPbvCAhD4anf3cnJ2fhyt7obSdXFukrohaJ6BaXDv7HBAcJGZjD6wG",
  "key12": "35mztt6jbmNqv9jZoqtZTKc2zfGNvvN5LBMQk1aCVgiKn6NQMaS8ojeRD1nsdCA2c3w9gqv4xHA3jNsE1rCipYMK",
  "key13": "5661L7Z3AuoFE5E4Qy38k6BZHxrAj6ZergRNX5tviHMK4R2d4rYsVVK2JfqfLZaEgihjW8Gi6AUNqjVhDVnr5z3Z",
  "key14": "CBZQige5XcQfiA5Xmo9tPWgwbkwh3QUQiGuU5RedoQWxb8gD7XLFosTKHz3C6zFnkmejqybmrzp79Lo3sfqzjiF",
  "key15": "3YvRfKL7uTbmUrgfM9fzpymfFZ8SXEdCCXsLAPmYxbuRcoBsjTSwusB5dw6aATe73tdDc6WmJ45bgfV7XqG36PZQ",
  "key16": "29KVPLsXNFu1ydUB9w5UkYqdapjZjDFHF4J79ZGHLXUMmmf2i1XPWix7dn8Tf28nXviyeBXkjS4vo49SxpssR2FE",
  "key17": "p8SqUqjTqbgBK9YAy5GaB8xcoAuPFXB3wPpixnmcvwLtakLvcNYNL5A8GjDY7tmiPRHX8QaMm6DCLsRQy8Mo6yQ",
  "key18": "4aHRC7YLTGDm2WZfhCAFsKF4YVZQacPwquqGmXtz8XyCwz1cxBJV9JjVYSkjdUuubE99MsopkydpVqZdj68y1Nex",
  "key19": "2fULMfZqhvUMy3fYWJoUkVvEeiMVWrrD7grerPy74dr4nWCcsrLQmtqUGy8NxiopwHewjUxVneQJg2weVFfqqF3N",
  "key20": "34KRcagGzB5f6gdt74HuSWBQZ1rWZq8iaUr612wY59E3U33zn8bL2ApAUWNQP7R7PGtMswAto8AgsSMCoLeQdhDh",
  "key21": "4ZDT9HX1q7JtB5n6dENMUBHRYxPtjqScCuoNQ8NNAC3CYaSSFdxrcmCG2rMos1CWR66mRA9vhjYCGCJAwKRy8kJP",
  "key22": "5dceRdtFkmQqsuD5LgVMDfg7p3NQSy2fNc8BeiLd589iwNqLZjru7ngpnqaAJLeVLpbq5rDzXEEdVnpomZ6Z1Ec3",
  "key23": "4JRgA3as3SsJCpuJ7QwBBHNv6SPjiLAGD4ogkMpbXJNbDn2zuk4YPUMyPjEGhoZK2Wg4GEMsbTpei9iLhrsqc72W",
  "key24": "fjjEsUVTuzU29zp3SUmEqfgYLzoBWQGF1TS91a9PstxhuaJAnpAAQ8xTjTgArrUdCJrgS5nHcNqYFZG8rMth68K",
  "key25": "5G8fx3RgMFU5pwa8mbQiATK1zjGDs76NcrWLFTNcHtYXmoc1cj9bg8a9iPgoWvA2s2mmh29iEGBe1n6hEaxHbMaN",
  "key26": "AGdssfxahjbMMLYLtouiBHsS75ptyUdwtRNHbctAzGJhNB7bQJzeEW8EiT9WSK2tG8Zcp6kqzcoEyTTbJWNtTVb",
  "key27": "Zj1r6dNkjGi3Gv1JC1v3bdM1SqNmAmR6dVY6u3YUXw6ThPtV8gmnGACqfiErH4KQEMKs1dZxkiB5gfriqDrkwH3",
  "key28": "2nQEYMMDxX3L9KhejW2nyXUs4iodpcN1DmFsTts7RAJmG78jiNSV91nFfjUnUf1ADas619MfnDAW7kWJoQnGfrL4",
  "key29": "2shhwZ9HvAbCgNfUUhGf9uFdZCYx25NKuucc89FfjsdBs3UqAAsZYugitqgrp8DS5ZvdNfn4AogVr9qJMCdGQzcf",
  "key30": "3reHp132HCfmNSqHGwFsKHp3CQC6RmeFjdyNJqXWxY7ZyW5aP9gR6SYCRY23DYqH1n1XCp6hwHP4yq8uyEtwPw7s",
  "key31": "3xgDEtxaP4BxHDudAmfBdDofHhSZ5H8nqr4o8nXguoZXzBUpezP7fSMYjZJy5is4AYxWDUqhEZy9SKxfmvvR3YbB",
  "key32": "W6MsRqHdpkbwcULfMPkUekwrKx3SgtSYY1s5Erd2FJFVZHZdbEzcebpDdsiCJFHVsTukgfrCpKCZaRK3X2XhwJ3",
  "key33": "3ZnNAVcUK2vA3T38yrN1cj7yw95cEjPGmYwNEsMHGMbWCMCpi8eUYh4hJX7rVtDgNHQjANyqeBvN4DwgEct4iHWi",
  "key34": "4vFomAXz74SoRFCcgjTdxBCKApck9ZeQVxYgmsLzFJHsbpMzgozXFBmqxfWr8yiir33nMhi9VqB3zyxMiGvQZx1j",
  "key35": "PwzjJeKXG99Nx5auRtFEJ79fQoAdMPhFns48Fdckhc383EJJoVernyL5psqVLCpzUMb6h9ZgNugfMtwx9akYM6L",
  "key36": "2JNBe44J5pyJx2rdh2vvLLobdPhbx2uZdKJXFvnkSieFz628DzpLjC9oeZDbz1bLFRTTYtqDzgesCbvwpajKH2p8",
  "key37": "3HJQvefFzdZRhGibehaEXxXKJfKXWPuxg8PCRstEDRXUM8sUhcD5Zs4yi6PpcQ2R7D38Db66aCkvXzNmAW8v8tpM",
  "key38": "564eHsgPHWg9sbm9TmXYVggcp9yF7wxa4y8hhnvPJmuyTumjNgbBPm5Zfidwfv9h7qkX8Tg1jawczGaTNDt36YNr",
  "key39": "2o4Cto6Ayx1TVYtsuRzpfTJf31mp51ax7J631hsytHjN3eUDS9Cb1dV4PDQYSYJx6HVPtUk6vPnKk4KEFfsX9V94",
  "key40": "3TFMNBwPSbG2xpmJdd5xRcCAWhR5VRSxPJXFjeLZCProYfFSVyqjkcVZdgzBkwqsN5Wd3qb81v5QozvHhBrsfR4",
  "key41": "3Zmj8cfu2yNDELeTZAz2g9GPPt6jKtkxB1pjKoYDGiVPjZDPozy23w6QN3qF2WXsExky4sHwrbot2i9Z43zntUX6",
  "key42": "2jzwrAW5Pq5iYhoDdE4uxiZpPg2mDTn1TGGSPdkM9EQmZmEQeJo6rz2kz862sY1LKofqkNSYy78ddVoKosh45kgo",
  "key43": "4UWrpLcLDn9h6W3UqKJiThJ6Wunni3UpCUYuXMQ35FcKSZWALcY2zydJhv4Ew5UFS8B1myoSXCHrBVjRF8TPqsfV",
  "key44": "5ACoQwPVLckA1phVcWAyBcyj9vR5Ng6aMNSmFJuirRAbcKsBqkArYJuiEEC6NzcXFvh5RFeHsxrKNY3HD4pzzN7j",
  "key45": "3RuhWqDB2QvgfL1JaS2iCkChVB5YSqsYwEH8muo3BEfTTZvvtBACyawyLNSXzY7arRxgM1DHzXDWHv3hHQ8eXDQP",
  "key46": "GuMKZCQyomkae1vyQAjXo6oPuMQREnnAN4C6f7i6Q2suMtoyFsuGR4dYgSYYNv5te5K6rJhdjJeXBRJjVahKqcv",
  "key47": "5PXRuAqVhBtSJRj9xQsj8NFuot2yG6vQpDuYKQFtWKw8PZdkwqsf7pXTgavtg6vd8qq4HfUFZ95aoX8CLGYkBzZk",
  "key48": "2PtT1Dzkc4YawTpgm8owGXh8AH7ZhFf9NbmPG2Ry1F37PAWSuaNg9tDciBjJfHQ2Fd3S9Bq1zJzUBSmtAHchHptA",
  "key49": "KZvCcNKSKCGBvWnFnvwV5PtEyibuW6LH8PQeKUDL8YVDpNuEof97vw1gbavRm4Y1XpnqWjzNMhqtuasaD5Ap6DH"
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
