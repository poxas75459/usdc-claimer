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
    "65o7dwiDNFYQERezbpRC7Nci1NDpCRUngyMYS6aR3DHQEGjF8zfCjxgc6xmuXo8Cbk9rWig3Saq628onzst4jwsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GULa6APyQxHTj8hCbJHhxiNyaaTur1cL3viqp9kvAcHdsKBrApuno8fVSZfxYFJ4sYfihgGMa7AWdqkvXGyKrqc",
  "key1": "2WazhA2sKny1jFexXwiH7jw58aHgW58cGuU69J81a5JeUj7Rk9jMBGPVvpcGQcGs1JxiFAs2kZqftUNiuEGGzqbr",
  "key2": "4Nv6E5opjdoTNPSCDnKhLV7bpyYQaJBz2tGJ8GLaYMQ2E7mhsMS48sR9MteiTZt12R7k4H8qQgKLXBNTtXCtWhWU",
  "key3": "3kGHoo6sMxMbbb5fJMFjp3W65Df6rt9mTpsmJDEjgSCKEyFBQGfmPiVjDnpVaLcqzu8G8RibSXvhTP1jfmpD5zBV",
  "key4": "2EYKd66hASxUzdAcjK8FKuP8Rca9FjgEMSAUnZ47Z7oeUVpv4eZZ68HVmmrE8JfCDtB8Zf2edASJrzR5t6czvjv9",
  "key5": "5C4B7CT6ExvBwj29zy7MmG9YMTDA5u52b8x3PqkYPjDrVpRKqHSeySvueKSMZH8xLLAezjQ3eJ9A7oCDLDHS6s7q",
  "key6": "5AK2FMCUo5SE69N9zs2qjzQDMDmRqZ3JrtxDJKazxJC57muH4tz5vKuDei2Q2TTKLra6AuG3K79pFgTpCfMN9279",
  "key7": "84A1gRaUUWNaRrTYvhu3HaMR49j8fJLvXwkoMBByzkxQc36RYrAy2Quj5f47VbjoRaRETprjupucQYQYsRc1q6M",
  "key8": "5aMq5fvAg4MJjuyM3KMQX13wdQswTzZM3g8eBLZcEBNAe2rM3vs1zZiwt77dfh69YSkzyGVezuQMqaqj4fDodm8R",
  "key9": "478BkWN6hkRAdrzwCEBggnBZM86ASyGYAbDoQk2eCYgNVQjqnMnwWGDBS6EUST6jzsW741tA2hnt6MV5o3qjgWR8",
  "key10": "2f1JEnhaZ2Fz7snoHJAZAbZfdsYHfmXR5nFKMpdisBYQQiTgUKYuDmrKCnJ4dYF2sBwWS6YCSyVpP5pioEcFvYPq",
  "key11": "3Wscha5aMzTsMDRvexU712hpjYeW6V9MSw2CjF8fkTr1GL83rkMgWTz3FyzVut9yXVB4em1XjdnDnuwAqjQDLPtX",
  "key12": "3yyVLnPSxqc3KVcVBWRL8sxJyNC4qi2avpfJfXkHztRqhhX2E1EyNKVxY1WSVin2qWkoSEiY6MDJiS1AenViq136",
  "key13": "24e95FprkQfkFfTs9sbRQMu1ahVn8c2N4sLqLXon4XLKh98tgbSDRJBwv1NZK5ppr8ZkxrELfYFVzcC4LLD45rvX",
  "key14": "2MEJ3ZzkCBxSTpvYxEn4pzU69WFF9nHtBxaAAMwN5Ji4ihQCP64Z46PBnfxXaG6Q61VHFxpmcrWV5RwcxVWxZRpw",
  "key15": "7f7rKZCpvE7YewXZpz29ijwNvDT47mMiS9RRcp2CcXgqZqQmhm2rLPTKKAM5WMpATh3q5bd7zrxrRGpdMRG9jof",
  "key16": "4RPzPyP8kvNBKCndJYzj2W3omcPa9k7X6C2yTiu1dAGFVXmupKWTj3DdSWQWW9DMRYELyeUDZ7Hp8gXoJaVVFkJo",
  "key17": "4obJmmCUXdgjhwsTNd9xXKDxjqEUVufKFD92mKYhkiSKZ9u1X5mJLBxMM1EHDmZUhdRczwyK9LPkBtC7dNdY2Bdx",
  "key18": "62SN5jXM4aZK7bajErdwKZpJVgiaL7aibde7nxSGuJK4KCmWSBfxZ2Ahzfqrkj5Dzg6E8UfwiKu4EZ1DiLSepdC5",
  "key19": "3bRR8EADCNDAmFGhAVagXAkoEHaZKwiqPxdxAoHq4pvJbLwDevtV9e97oqGejUf5qFwEYN2Ytt4QRijNrxuGgYkp",
  "key20": "2GubkPWyhz8RsZQeqduAGe1uKSjS4g6kfjv4xqymGiz64yMsDb72pPEPwxi4k7G5kQxoQmQ3UTk843Aka7P5u4Dh",
  "key21": "3NwBvXJqMPTLagcEFmNiXthLrfmLCvV86i4EWPy7z4CtsuAx5k26Y3mbcNDNdu6hAZiVrFHxcj9KTdYfMcignoa",
  "key22": "3MUpqEb2ejVLWs8oD6FU45RMhAs9RcCHejCWdPC9YGjyRiGYNcHWJQjQcP2PoSZBG63V53J2L14ZAvasGBZCNtdW",
  "key23": "2snZxQtAJ1NUGHGRARG5Z5RDxSdLXyGB7onb5VeYQK59f99HEPNYhJKSfYgh4DkDkivbXQ6CLyiL6HrLp3wSyPK4",
  "key24": "2rR6js1G5RqTydLx7V1RxKFaK8RLwcdeZ2rPKKpQmVTZaxTYqHWvNmVWNGrVfz1Ew2h6UCryxvtCL23oZz8q4xGM",
  "key25": "2YWske6AaMrK4VVeQDyJrrRe6hWmbWowQEzuKxEMy5cpbd5mfXyCRpqQbhDV5veWDDSKCSek7tSM5P95KoH7K9AJ"
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
