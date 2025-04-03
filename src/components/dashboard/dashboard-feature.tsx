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
    "4EnVjTpDqC7P2coXtrAKqNE7JEjz2gazWXeD2W2dQitEBx2cJSNaUPChcRLQVv3P94MDgh4rZA5pX1M4KgUwqnZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AiJhY4xzhf1xVLC16CVSp3vVvmngo3XBgn84ev7HJHBDywgPjbPEGGpxUccZ3oVWoy1xX7Y69U6nwAEmxvnqeYZ",
  "key1": "2ioazsHXQz1dcAaVhXAw69tb7kRpq4irxoQQaLLcDPcfpqBAZduqqSrTQvMFvA6aGVHmtrm93tL8WXqUFkuQvBuw",
  "key2": "2MjJVT5xL7pwhr9zyNYe7zp9Rkyw7Uu9h32h4E7onMjAw8EpAHN7YGuAoM5htfgDXWAGGW6TTRtRLQ5fU9DHU3Ew",
  "key3": "4AkHXDBn9zQAtJwzFpGPnZNawsY3E4wwBzgiCQeQRtddmn9XvFgNT7Yb2Fmyn7aC98ueLztGQWtubbrrFMLgMwb5",
  "key4": "2qWFinNrKHX8JxhgPQfYEbQhFnSHL3GtVXnbGeCTXfrPjy4BLPm4Z59DrqSfR8Dj6PQPWmReyCzGBc1ZzcAd9voy",
  "key5": "5ML7NWh4YjuTqjxdQp9TXPTbBiCZSH4XTcmzPBbebWhJNHzR8zJ2KvstcaUDrJaY9G2ALrGiGrHnpbr3YtV2uSTy",
  "key6": "3eZe91fm7M6n8L7QeKBXbigvWRy5iN6N6wtFnNsT3AoVNPXgU45RUaEhcmAtGfnTNffLdotRD15eHA1DYmXgrJu8",
  "key7": "5yJegpfLxv4vNBPwLKPGKRxjhBWJSsc9A6Lh3aZ1HkQ3qMZUeAPTr2HPMmbmZr2VXw1MqPXMKy5iyBH5Gk6BRaeq",
  "key8": "22g8YuRzUnZS9JBTxkcM9Sm3ZdSMnwvcoqkUDka38utEabiMfuhqwETiTbDCDPmt1XhkeGDrNXaX2wgYCX8C3zAB",
  "key9": "2ryugznwo1SndmVgKgsJAVy6dYzmhvDX59G7LDr2fHMT2evUxiJvp8nd74V8YVpeErS9YsTWjxDzvzmZ9uquSBu",
  "key10": "4Y7gdz9tg4yE3ZVwrAEa4MxMPcvxXzqRuwAqTfkVFmSVi2fYvJhRQKDy9Dwda4gvi5JjSFwxwqSCZHHpeX3T5No7",
  "key11": "2ZTP36r7tx3NMXfQEnEN28jkZzm7Gy7oVxaKpiaPqTAyMxZdrHLwChqTY4y2C76SZbEQkKWVoovfFMHUk7YBrG1Z",
  "key12": "hmLM5quZpa1Z8Jc79demQzYRuDQS74wRXHLGrA91zTwktRZRD8BV2bbdWT8swE89iHEqzUV5K2tigB7g9dtvpZb",
  "key13": "38HhMuZoodM6JmAhgLsGuzjxXrwcvWZccMp8MpY9SSjHmwbP6b4z8J4iiex2fBUCXiLc7YdWTK99gGrvarDjTszL",
  "key14": "2mL2egngH3uY4Xg7uQ1yL2mk21SrixGJH5ghr79bJiNcux1VDmEbiMtDfTZg96ANQEdF49MisjQWCxVRtxMVNxcE",
  "key15": "xjE83jMXjk8TTYMYEo2HXTPmCXYTEbUVhRf5AddqQC6F5XcSuGrTk758R2PXUwj6J2Jy5v2HCjhkPuXTGbg6b87",
  "key16": "21PJFshTYPJkFdrLQ2WPnmgbiPsojCy7vrmtXXsa7tWwG7X49eaTFkPL741YttxDrY8VZuJ5zaXa4RFgA2bXf7Q3",
  "key17": "5qsoN2MyKH1n3aFazhShjinfRmRRjeWXfKs52QYG6FvcjUMAKQqX8zpmsthe9pwUMPXF6VQEsofKMADLK3imjjBS",
  "key18": "4Mva3XLsNsXLK3iao9eaRNYRfkQZ8ibPMpAt8WzUVXefJkcRiGBASmBNpRFYNKzxVhnMahufsGe4BmKcVAGyN8EM",
  "key19": "4L2frNWDNrYfhNPH4zt1BvVXirVHveFNsPGtVFyUrac8D9UTJWQrWvqs6B2aS6SGWqGqfi2Bj8XUSBLs1ERe1rRe",
  "key20": "4GuHAfgVbMdaDtyrVuPAVqffDg4XQ7Gd4ZG8dRuoiSZPUdhPCupsRWiGXMC2UuRtzZK3nZbqaBg2eWxMRPgnsgJW",
  "key21": "2PMnDi8Uzh67iveuFEC6g1WegHqsj4cNsQsL2DvTkXN9RXRBU2EazKcBWnTHQyitgVXMG2R4YyrX1H3m2MTJUd96",
  "key22": "2uVHYCCdhBM9Mm6cQEykMyvKyn6i7FcnW1jkM3wF7J7VcXdnQx8TmNfLYnKpgz3qDyd845jeBvfoELkaSzAoHs8Z",
  "key23": "3iuWNmkSTP8WYMLazUag2VUjonDC6mj3NMLAnvRQ4vuj6freCTPvXPWz7L9xCWwowZWtRZ9hM689Ba8MaMTSsUUs",
  "key24": "YJXUZRo4CPGf7cSn1sKCW1qzmtV6dzNzFj6fGez3eCQJKJYS9sDrLKvZqbcfjvwqLcdNahkrm8DfmkmFJ2jKDAN",
  "key25": "d8vkeEXrqRtdmLreoHEHS7aTfTdPtfquCBuFq4az9t5u9Tci4AVKefDwZWp4eFyvRMZxH7TzFVd1MDm5EyDPCdz",
  "key26": "2MQ9yyi2SP2Xqs4H1ZcuDVysPQ1Xh6SwkwaQcMXdPgHZNhGq3nTvZ6ykR5jk5fS5h1Ko3ubsNaRsmy6tRRLewa8q",
  "key27": "5EtM4dur9Hq5y4VztxJrzbpk7Yx8HuwSb6EZhkraMEp4eSm82dGeLKUeG6xhUnVyZpZnvTjyASyqM8veKNVodnzV",
  "key28": "5hJ4SiP6MBkDhfKDWFjmo7p2E6Q4Avv4ZstD4XW77sWLB5rC8d6q4tXif4gRjYkT5FMFX6mYg32AstYkXvQqoPC",
  "key29": "457pZ96YvyoSaW9LC6ZDYYHD1uScARgoM1KqkdLdMVnebukMnQEDmxM5FKJMZ3Uw9dLPpHZQynTKZHhTsM1TdQ8o",
  "key30": "4y7vhWePCo6XNKjmLMn2uxFm17PobywJVotqoLew822ZN8Qi5kP2huh6T6Q6gNThvu9SQVDLTgjrUxnzxiaZUrBC",
  "key31": "3tEYCYveSjMVgbY3scbjUpZq5DhnzYnvBK8dNV2ksFRNr1SCZ4Fe3JiNZVG7KDNjyitiZwoZZG3nutCnZftZ3oeS",
  "key32": "5HsCmfhFRQx2EPvahESZ9gfFKJQpAkMMmKNkVcefyxdGCK3cu2DCitbY1YMMmBd4UoKHyQsaxVWRreh6BXCvGDDg",
  "key33": "259UaExBaH1uBuy5BKXrN6tTQGthDMNWCBK3ZC9ZdSGxtXf5Uk2wKsywwx6kRXL16mL71Go8YiF8k2oqLeGK5UUf",
  "key34": "ecQ5JMnwjyvfEp9bk93hgTehBFtuSEhd71aq6y8JbpRT59WHedbJFLs2JjC2k9FyhS7s8NoXYzpDqiZgeXMh65b",
  "key35": "59Wu5sQkadXex4frrMzWtH6UNya4s8d8fGpeStW8Eu64bm2FFQcK5BNrgqyejvn6DqjR9c1eVp6SygeuYxf1NGPi",
  "key36": "33USc37oTrU7a5DgTidqtdr9PBqQE2QtdL3Fth9MEPttr198JeM61kBV5eo35gWSVHJjD7B8DqKGqVFFY8ePBCmt",
  "key37": "5ZMx9HwaCXofbLkk8yKxNNjqd6wrh5H9HFDmv5uRQkJ6oWFtQbpEveqG2546mD1TfJcZVhdpydmwXKGUeWQaTJta",
  "key38": "3sQEsgJwXr21iL5uULeDugEDcE41XDzhV6Ra5yBRQh6BX9dCgkpeaXyoZ2Bv9iMEgNngDbKWuE3w7SBJG4abrVqe",
  "key39": "41YSNGTJwGsB9A7zqrpxAzbdvfQ877jfkFZ8FBvTuYvqwNTycNbu1Sx6GM4HrzyfvQT5znNQnrdd6T1tTEFQnaa3",
  "key40": "5to5szXdTJvkv1D883FKZCToi8kNLcQaAiXRi5VmwwhZgtFasUVL7NDPye5fc6oSbpFgkzsGoDh2LLMGRTnmh4MM"
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
