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
    "2RWxZHUPTj9XpEbQQyM6wpisqyDvoyzfJubyMFVx8g2QeTeuinQW92wbtVfdjPZAp6mapfzesWGEpLgiP5LhgXP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AWnHB3kVs3sG7gSMYS3iudfuTsjaLDnz2Aa2PcbUJSmzJzQG6wr7iaQ1xuxgdH83RyKuVqmTyiYmGVVDyZQjhhV",
  "key1": "2x1Xya781fmvAi4ASsj8UoHCpfcGqAjwRdkxsiG68XQ79ayz5ogKbZiTyZPfbpBFwTeiwKKYTaRgc77ok8Ai6hex",
  "key2": "61avoHaAxPe6K6QcQe79dZmeQoR14QvK7Hf8Hiz4FSBox8paVDXsUKe13VPtG1nRk8KLFET591sqB2Y19DnJBxJ",
  "key3": "33ZnqsfpwEWyyrToD1PJgUM8NY57cvPMpJy7SNGVbJFrcQTNQqTGz3ExMX9jwJjqZHWNxS3a8fMvt1bA2ufynzwQ",
  "key4": "39T3rWWSjXPwUHCE95zAjDsd9XacyHkGsDwVvMUQNCSL8eNPKmnmZWNSQQKoyXyFAGqt9fmRCFzwbBx5zdqr43TT",
  "key5": "2W4jjfeCQVGjxXcff1gvwKeaaRb1P3CSyUfY7shj56VPFpkTDJk99CDBUdoqNciMvXpV8shDJUVC6GLhcSWJmapZ",
  "key6": "bYadYiLgJgKJRWodySGYVDQFz69V94arnwDj8VqN6yRM5iTTDGapCEuoZ85G8taLBFNew2PiFVgWeNnT8mQ5hXU",
  "key7": "2xkWKT1J1F3g96rjVDGjrsF9ZnpBGcSzHSug3sSKnX9Ww2mmgSij7fTKQAfmdtX577Z5yCvekLWWrtdQpHxoNk1J",
  "key8": "4EFcqEu31uZmXzskWAwSwDNjuNNvJrAFcLPr3avKri3b8duFw3qNooUCUmzypVnJbzj5UbNn5e8zVWG9sizSd3Je",
  "key9": "5E383fWoEZkc6oPN3VAchCM3LouFRnaoi3abvk5csCTZzb1BLdBV55EgkRzA3ke4q2FusxtaqDKed7UkBU98ujdF",
  "key10": "4VNrhWf4ugG9Q2ar1N7VgMsV7KAE9pYyxmqnBmmnWg5RTqqBKmCJn1vKhihHGmCkqJ2e8Um7kWKR3Hg9XfCbZ28a",
  "key11": "3UyKiYkBwYVp4F2JXyDpaNRPS8bney9Jdgg23JPfrNzettrpMsGSSpjNBRmxp7UMcRDwxkpZX9JGEquzxQiqbNko",
  "key12": "ckUdcHMyk6S5AT6C1kLVuizP8fy6t8JQ1AH62gs5JhXL3zi2E7SQ8WhH9FKZVNxyFsBGykixdbwRoRjc7heQJzk",
  "key13": "4ZiFSyMtih3FeS2Z9joifEmeN8CXGxuXyf5QGV4Fp2aCQi9Ns3XiKVzxk4eC3TpqUoqPg3fiUiFf1b9AsY1XVXib",
  "key14": "JWhLvRWkkuYXb455Sukmtt9SnJV9jT3UNhuxfKG2JA1MFtMf7SHzbrRYkNc85gGBxjAVzRJjShnDpv72CGjKyC2",
  "key15": "4eN86RMvk4oWwvY1iHaGvhaLjEyuvVMSHbNPEBjSN1ZeyTUQ5WgaQrGeGJ99Wdzb58dyvHUWTjUwJKr7Jpt9M769",
  "key16": "53vY3kSXtQ3Sab44XcLu4v4n65DX5PnvUNmoMd6jpPgZ3Nc3Qfg8B5W8dHvB3V2MYnevdU6wxPT3JWTaY1nkP3Xj",
  "key17": "4eyAv5Wf7CXQg2VMc4Ldy5D6cwykw5kzTFJ3WHx7A2Uhzj11fVhCyzPmFWtD1AJQSEuN3dpht1rQ7CE8hGpnCWPJ",
  "key18": "3XT6wWrZJc4NfGxgR4Mqk6MmM1QLFzgqS6Led9FUdbcWn9TmFep4yWxzjg3LjVb1cdGfvYnsgTds8EDKp42CJGmr",
  "key19": "4CJmM5nTRbpwgQFDtrV3hqQXj1Hq7rAvHeYMpBVxskVwqALSJiR3GNByf2z4r1HDn4Bht2PkxwcuhdNVdaP7A5e5",
  "key20": "4kfKGzLhTbtLnysy2AfSU9iUHzA3tLfqh3paUgysWLRwCGa3jQEu5vziGDm4Z9vPJWcUAHs5p7NUbUFuoMmQgUB2",
  "key21": "3p3wbZ8E9ydLihrByJYpaCHJp3jEJ9hUaniFtBqgUDJDkAP6fe3bjH6jKS68yRPbjdbG7DHz3gBUtW9759dPrNR5",
  "key22": "2At8M1AR2MyvpjcJkBsxHnK3KrGwYGveXRyPtJsPASsph4CFGDZ2DKP14t4ySr6cMgUQxjKYZUuRGkb5tZiJRQtD",
  "key23": "4wacZ4DnzEjBV1or6dCHxRmBbU8B2LUM6nvbCGGs3w1iiFDhpmGupFT1qhjKPEJFBZr89ZCUYjhcWQuiB5v5ph6q",
  "key24": "6o11y4PZrB3gHcG76wnjakEofQgjd5FGvasRBw5uhreXyGS2AxwNdkCXS6xvMAUhfABHAkzJ7ptDDUWgGtgDewG",
  "key25": "43P1TEZu5McNn67VfsfnW7VSKudRGC1hoUmvr9pjpXMN8sPvHZaH7o1DjJqSuv1PUfSDTVsrmqsvXHm4AbiKJWxk",
  "key26": "62QjrdTr9WhRkJeiDeMnypZU1rUr4uBLGEPg7TjF5sUct6enqVe9hiUZd6LZvjuSkdjW3Bo2Fp8h9rnbbSEkpAoM",
  "key27": "4F1vEKeHet1QmapmFCxbBqermysXtqnWx5J2zZBLSxJB3EZZmXXX19UphYGmrh6QcgJsiQ7seiuyXTbAKdwHBCRd",
  "key28": "mzbto6AFSey8HRtJf38i44mz9qdJyBkgrkReUUv47Vx67BrqVWyTnDWoDm8E6Z1Sm6XYcfTtvN3Hs34FT9F1h8Y",
  "key29": "429NFmbDhTYYsRHAUNzKUV3jSLsNfc3H9tppX98kJ1VGx3kJnAwfEjR3iFtLpt5hgb3vDa4Fj24NxVhjBTwMXCMd",
  "key30": "4KPJ2zcUbpH432uZTrio34pqxoSTgEe2W5vGvnhBDAoxCLKfoUubTeWkbQMm8FQffpDBxNcjcz9GCPcUNFThTCZF",
  "key31": "44oPToGEMyv9yZkePHeiybM8XBNW6vzJ2YY9eqThfiLRFGp8SZyGETTmkaCNoaSbfpcFHm3ZwBxNLA24S8YoKTGm"
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
