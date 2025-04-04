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
    "5S6NTKxtuvyyMKLa9iGMckEZvKkfW1rV9APenU32huJ5GWJar17tDx5MJRz6ph8MSEU8ToyviYb2xuwQVyp8Nvot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D34vRX4xhFXpoodj6CEur1dTy5GC7KKLumwRDGpvk7UGmRQDqeNNQJnkjEw6fDm39ZaoFFk5ifA5Z5sfUMiSxPa",
  "key1": "5jvCUST6yLHJfyGAETPizXNk9sANxuqbhVqzAg7noG6qKamDVy6P7cGr1XkS5A2JkFVmgrnmA7Cz4i1LExAYH6wM",
  "key2": "34ey2kniPEoGFPEKkZmQiGjtfKKXsCon3KQ9FZWhUpMpf5Yjt3anXZ889xC3GNPsjB67219SeTagsz26rH48K6aF",
  "key3": "5am7BkYKn1avBd9uKHct9fm6o9Qko2yRxCGVuyvQVZkBWx9ue8C9PPkzYa1mDvCeLWRoMRt1mhLFNZ2qqkBxYdBz",
  "key4": "5FVRUidSAiE8nBMdTgiC6vDRks9UAhNSTfignF9LHLKmg5aAiTbgamgRJGzk6SsavM4PW8uLaybjD4MK3DtPfLpu",
  "key5": "3y6onG6QvHLE5BPN2KPa6ij89JNovNv4pkkU6qzqJLVj2a77JPoGSQtxQyqn1EYLFhVGJ5fcTApsGkxQAN46iWig",
  "key6": "4aLQLmUWCmAZw9VQHK5Q6K1rysvEFW8Q1iqw8bvHoQuwKKTHR7hRuxNwCA6NwbmvTyWZXZNzxfBfM9DQPmdLPcdg",
  "key7": "5oUZ8QKDRKydh6aV6dBoQxmesEC5MgeNshLNQRr7TEyFCnwsLcUP5MxdcS9KUn44bXZTxY9YTo5pQ4feR68xhV9F",
  "key8": "EXyA8cw746cE7tY1fgYTkWpv4LhXqCoAYUkWCq68NP4yg7mAoCYUFN2sTdCbGz1HwwHJefUKHjUzHx4JZGSBdED",
  "key9": "3wGDDpk66GSrJ6tBUTQZRvVM29zfAM3HuN3guupyYgjxDetUZBkd5bewKpsuUqL7Li3PWpQ76h3VRtVr2uUpqweH",
  "key10": "4Thw6njLvXJPmuQkFmxuManj5GVQNgpsGoKXGgdwaXjnMsRWTtpqSNBkBohwZkYGreqS2bsRkCR9mCW2TZX6CEzh",
  "key11": "2251ycEq43pZdty3yYuGT4FLHHHu7Miw3Jca74BUvGigyvCmgEUpYcuqKKypEuP7u1hLeVXyDZoDeWy4X5DPhwFX",
  "key12": "2Bo3jDitDfhm5ny9ztUvR8RLufuCQBSkHRtcRe3pNUVM4KZBbHLjS4T3akgCdFhb7gUtZfWK6YY5pogGgjSEni7t",
  "key13": "4PfhmVMFb2KjGQiKTAybtVnEhJyUnYS9r9mkqxTc1qa8zHDwRGmqqnor4qAaRHosWoz6cQauaqcobN4LrMbezxY9",
  "key14": "4CbPhXragNQr9AkWjAhuyhYk5NJLUwsbfcEbXUtfxdb7vi5rfgGjG6JynDPGDGiLn3juYHNRRjNT5cuBMzytgjry",
  "key15": "4bdYp1CPeGqtKAc4Jq5o4yNZkHa7YPvaUHkVQFLZNMH2fqHsQzubDomLdKPW3UMt6qrnpnhF36sz1CWUm9AmisCr",
  "key16": "4NguzwBW88ETBPYKCKJF6TL7zyetHKeZmgFaHP8ZDetdqdq9iULU2pTACAr5dJ1xdGduCkXMymjNur8KERhJLcqU",
  "key17": "4kWC1a9RFwmekjPoFwBDhEybo51ZeNCAQf1ZYimP2G9yfNRZyZEXZ7HgKdVuPLi33RRXDy7pi13pvKSc7PsyvM2n",
  "key18": "2ktQ5g66EaYiifTSVtPrNoCcKBvbX193krp4qXQnhDa123CySC9haugvwPU2qSYyMKix86fY3VDeqhHwknW9AXQt",
  "key19": "38weALKu4CaUo85wVE831snrcXjTFT8EP8WfimGAPWiRaBpMNUDFPvHfW4q5fZfGoiRckYRcBZQ5cjqkonqzgEQM",
  "key20": "3A6UJvMDP32yHrKVnPjzgR4CTkxGesGc4xKmvW9D5RnuQ2MvGoBCASJ48iET6RMzbS6wzD1fpCb8LWbbxTtbpH3k",
  "key21": "3Bv7WUYjvArAmYYCJ9z3j53icE53CT6pGbBu1Vj1GrHCsnVHczfGLXGcTU41WrPXvWuvZ4TenBgfohS8cJcnLjir",
  "key22": "2pd3NWCsBfhMMphe93QLWLiSZPV6wzq3vuzgLttXMjhvcPrdug9UgXjjue51eWNbPEma4Zqnsrh4ddkg8VpwUtbv",
  "key23": "HRECgy8227Ty8wR6jcV79c65kCkDEfJ4azXRVxoQ4aAzmeVXGSUaQj8SegJHkJGuuQu4iXQSPwWs5spkFjD9Gdt",
  "key24": "6GfHKd9sWa611q2kkaZ3P64FMJbD6CDzYgjYi8JwnZ7qPVwNBZT3C6r8BjbSCPfqhSV5G6HMWusmoCkSSWdrHSE",
  "key25": "RwkvAzsrAPSP9AMWm9WkEmSdL2Xy4tXohvZ7nX6T6oEue2x2C92m6LzMExfrBk2oWNVbtK8JNbsv2aumCSBUaTg",
  "key26": "5UQ2hEXunCpakXZqNgqJrtrmYf2sRouSPevNe96vtob9roGitKXrH6hBxMUrq159saZEdDTU4MCA773ydcDtmxBo",
  "key27": "5PEfy83987oLyXyhxwWYgMA7sEoU3AYyBnPwtqVWAsreJZvD17eAhwPGeiYL5yf1dbUgJ5xz2rfv9G9nft5g7isM",
  "key28": "4akoD5F85iZujfNoGSENZHqAAZHtckTyekHZavVfhNLu25bK6f7fhoZsRxMRr3HYRvMryuwmu5eJhfQperFYSipf",
  "key29": "5pGfsbvSq16mf9uEWRdppFUc4HGsZ6KSsa4VqMVr8m2Zf4E9YPF8cFEKB7YqM1Vf8VRAiKuLWHvgBr2SUQfm2kjj",
  "key30": "3Wbik3YQgYsvAVLBPSfp38ExYRFcKjAHhxugJ4Dmh6VnhA8ky26r5oKXxuGvqWN9eRdnU5tVEHrWLJdzz6MsZ1wT",
  "key31": "4LfUZHt4YNikbsw9QvpEFvuczzpxtXuj9P7cuasgwDQxAHs1DC6MJtCyZTcipRaPvWsHZLiPCniQjYnU6a6HA7tL",
  "key32": "5AUp8ZvowvHeTdypi2rcm6iSHGNCGaoToWXjWG6yerrc8dceuF9tyYn6aWZkk7i7NjbPWYsqCgShQBqbX96mmzZp",
  "key33": "3Le1dHWf9MijNfGYKpiijuMSiBidaWCKLN8iuuWkwVkWvLPXNxV8FPV5A9nDET2caMhqF657oQ8fXE5tRyRVcDxQ",
  "key34": "5AuCbZgu1etfGEqrgVvuufkuyN2hyx4YYvik9N6wKk8aebAD49CYrF87PqZDq1fGiePAp2DzW93wiqr2rkLTKs4s",
  "key35": "4xygE3q16jEod9n1cVgrSBiqNTBncHcc4ctysugqcF2vrYRF821X99T5rXgLVRgNmctweiXTfC9Dz8dU2QfQDLLv",
  "key36": "hUkKDhP6s5XMYhKWRGchU5Mq3h9zKoE7UZp8MUMKf2JYFRRHZoXL6qXJE647XwT11pNzkBq2tanoPwgAX1HC556",
  "key37": "3zqzfA2juCJaWWJXdgsf5AbRJtvQCdqgMQiZNHZ293cgcd63nTfVYRMAzmCR1TEiFG6vv6YUWgrYyPW9NmafV89s",
  "key38": "16Qfhsx4Q1WSvoG4q3sG9pNEDNK9RREKyR2ezKagR3DLr81NW4r4BXWfZoBPB79bkSqVTJz43kmDew6FM5nhQbB",
  "key39": "2eCKdPk4Prgh7nsXHG28ao5bzpeAUnfB7FUAmqATKc9kxZHFh1HM2TdUG1YUWX2r8Q1yGu1JWcFqmV9AtLpMhSLP",
  "key40": "4wyRriqsYYbjE241kjsoZyQmeVWgYo14FkQZFuu2sPj5b3L8rstYyreAhsgfiDMc6k4FwJwUGeTKKPXkFZfJ6XMX",
  "key41": "3AwYskPjeJ1kEqQhhH8VTAK6mKUTC2Rk2LbiCdNU91DWfdwPDq9EyAvGaHYCQitYceh3uhEwezRMAbVqLVjaeavb",
  "key42": "3p6gJkcBaD2WfLbKRCrCUM6TNTcdboBj6Shk6ZxvdQUfvUAroQ4guRxBxcH8sKUBnGNk4tZA3nTm6gq36VyVKZNT",
  "key43": "34dPyiCTPH2bJgMGa8DqGLRGGimeuvp6BxScDp9bXrDGZmXds3QAE6iMo9Ko5azDJxJfpo1utAKgwC7DZh5fK43F",
  "key44": "oRyof41rpfcwPhfoRAUNtstVcVsV2qMeFMKp4524nCeTSFrS8kFgoDb3UxdMApNNbiSsaW6WX7xY2of5GkYWL5n",
  "key45": "RohGumHMD6CBCJ6cYjJBqBZrhqkks3XXKZ4vZLh5u96VZJponhw18u6HhYJ7PviCivu7zGPFnkWF5dyUTdm9kE9",
  "key46": "3Npa22ZmoPEC29KUCKsRSBnugvrjbrMWBySv6BNYJbyX81scLvFKi1NiKWT8yxLRVXqp2vQrm46yQERt3MLpwvdf",
  "key47": "kqpF4EL7KxFPQPY2ZdmxcTQmuPnDHkDXEUQV24EtHE9HfYV1MzHbLFvuoZbVFm4qaqggDrzjcnfpF88P7su8rTs",
  "key48": "29toyBdQyRjEwVEos3pN3mHjBKq8TKohAJZ1TCpQVRituTirFu9f77dtPseG2PGme4phDzi7B1A2SRgUh9qJ6jtS",
  "key49": "5Xy475Zjp5CTuZQBzAh6PYYqGi83WYu696u58M2USB9H6mcLVPJsb4JBMDbVYJgBmy9YowLKN6bmzdxVH9ZAsWi6"
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
