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
    "2bjL8FBXaDcm7qQgAELtTy8bTqWYDkZiwzsybn9B3PHsUChb7cZwh4eRk7t4jfYufVGA2h4bgtV6vv98synzgPoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X9qb5bSnV53RzvriFZCN2eUGHkZjjg2R71KfkFJYpWe1zQLVXUSifcpD88KYcyXhMyWfPsw3DZBe76CGc9CvNqY",
  "key1": "5rkUpcgdHH3TmJTjpP9bXUU3r6dd2EkKkZ7HQJtubrPzXa7y9hbkoRuz849VXQmiHVm3hhtxWuJg8hzQizMborqa",
  "key2": "gk1UvZw796UjhhAp56dny6VFYmF1cQPrPLkaoan9bmPQ42GD4qtquHtKr4HcVi5P1otLkL6p2trR3we9PkMcJpp",
  "key3": "4Zpu7bDfwYnwxep8hUgFSYZtVRWqyCpnsbmuB3D3CCU3ZVkjtthpdskCPT6C6CacX7jSb6a3b9Cj5pZzB2G8ZHXE",
  "key4": "4hzSrnmKc4wxseLrMkhnnEQf9AvNnvPsrztdAxT5iTzMCBiGbDD4DgSSoLMf4DJPL7gvcvex9UeXtrm6r3W77KMT",
  "key5": "3BNqo9amLJs6zzYt5Fxk1EkskoJXFp2nAZMjgZE7p3Z7A7Ug94LfRdxAyA6HFX4hKVcoqhPat3LXWCzNb6FqTms6",
  "key6": "5kM9gxZoe3AmPwLCrxqQJDF86nVmHyyyRVUPWuU2TJoxdqhoxQv61rYxdDZ7pyNYvBS57ZRms8qzp2UtU2yukqyV",
  "key7": "2qvf9BaeAmtoqPCoYUtQvKM5DV6Zeta7USUFguXZnJxm8uHaz65DUQBuV4rUs6tKyKP2owqVGY1wkY4ZGBcJm44R",
  "key8": "45epT7nnMFZt26UQHAMiKGw3opEdPsZ7RdtRoTqjdjr9s6Js5Qxz55Vs25pAqq5GCwJxTRwqCs4UcgvAtKxcQrLs",
  "key9": "3eRB9xAoGCWibiLqry3wdU5LYPuHodHbdwZstqJhGP7iNyVEgw6wJ8fNKqrqB7eAp5ZMKQWX2Vr9BrTYyuJJJkjf",
  "key10": "2YU7pcjBJ5ehACV8AAapRVRwuUZsXhDzXnyDL6Pg8dAcm8Kiv6nLjTUdL9MBi4EPYypKwXtNc8GU8WUVJ5RzmkLT",
  "key11": "2NWQeng9aDiNrw2AZdrnzLQsAF1tfrrirAkDdHc9Vcoh6eapFaLmjhpu27qqDPoLpHkjo34ZxR3gz7o6qz1aZARq",
  "key12": "45L9gCYYZZtU7D3oVJrLRCaU1LD52UGhCvMYYtjqFK9EfFCsJXHjPGumhDXzLBLbQDiof4zj8qX95J2wg7N2mwLJ",
  "key13": "2MjMxrPBMp4FrPgHuCrPf8TBeQCcwzvm5NsuYqPrP7e8d1Xb7u5zpoFPs6QErUXpWzq1KBknkPonW2etFn96WfQF",
  "key14": "p2Ch48cXBkmwkcuqSmigDMX5fMb6zpdfEmmaKb2nvmh2tKci6vqBbMsAULWBw2vLAvAKzUV8qEpLwrcpEH5wwzU",
  "key15": "4fDLgaooFXtZTCXW4FRHbsDZnZQTVNnkTeBRfyCQu6dSADqLE6CCH88E7zGhoZFjJU6MHrwvRjT2ziXtt3wPReRk",
  "key16": "5kQUzbGExGEJGpp35vfEwj2m9jb4URy4R5szsTpQQW1VMXMopQq8yC2n1bAZ1E3aaLs8ZBktEHGVvAgjdjpDShP1",
  "key17": "3zUJxFRy1FmToKmSVyxTYoDYzcR4Z2fL6c552sq8N4MV3ZEq6DrppbkB3ivAQjndMCC7wnj1GqZxEwiZoz7waRtL",
  "key18": "JuQSG8mRJVrSj6CLky2JV8P2wGvHjPRYKPnjvkCZmnFXMsUgiTU5HudnAmstEXwT2wg6gPTvSX4hv9iq9QY8Ydo",
  "key19": "3961NFGFvjPkyKM2sNLcmZVYjxh3ScVpxt2Gbw6CVqSi3eSmc5Q83eoSLcP8SQMz6wU3Pme5XvmcEZj1iHzQ1roP",
  "key20": "9UZnFXqYkK8WSqMZfRVP9FRHZL6TNBTUBSAG7x2c9NQzcsXdFsAM7icApDiBRzZPXumt7WtnxCXw2ZsSTw872dw",
  "key21": "DxLjJFa8Z42bA1ypMP3ZXrzE9HtR8LV2fJnjGSboLrhLm2jYYPMhEiBh3uspE3RikpULBgD3fKshhL6J9BU8Ymu",
  "key22": "5SSiq2CXtjem38oKmV5LNet96TdNwjVfHc468x3DmsHiRZSo19V4Fwkh2DkNgqigSHWYLx8uvuZoSZsiABpQeXyQ",
  "key23": "WKMYqoCHbKtFDKpF2pcXxRKhGY4UHaQTLp5EVdU9cSNtba5SQbaJHFhnLP4jJiJ86JbQF14t5GNqfbTmadXyy2U",
  "key24": "4dWQMDgQ4B8hhVQ9RKfLEKmR2FWZmn4hT8jXwU4NjoQ21tmGJMM8v9TAvhFb2hiKs8GAbmRmhFudBjuUJJsJVriq",
  "key25": "36jPy14GKtmbt1PQjDHVZsDLMgZyeWwjrGLJ7H3ZQ2gfvZHDzqNpue9WTVPa6WMto8MqxJCXBLYPKVoPALABjpjT",
  "key26": "3WSKWdv9KwVXBkqxLaeTsUBDUhMip1ZKPju5An2eYDgnbMuhxiEpoEPpgMzGUQ94cXNMHRxuL8zyKcPJ28w82w58",
  "key27": "46j4ezCYzhFUQrxkTQexU3DX4RuyFDjMqX6p1y8pS6Hk5rQv6f8mcMKve5wTxAKGAcAZfjZRUwf4QtZpNwNkDLN2",
  "key28": "3iuuwygArBs8mGPGUgEdwBovWdudLHXHkoHzMjPsYHbnAJ33ZUShtaW2NxVaJHFaBDFMZe3xBTCTg4yQagXBRxdx"
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
