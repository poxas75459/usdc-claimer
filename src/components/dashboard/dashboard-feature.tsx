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
    "3WkUbGGg5twQJM6okZH9Y1WPF7HkECqRG4CsAThzWPvRDmft5LoNbzq1XSd67Vo4QvFgUFSxPqhJYgWTBfE7mctz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31rwkYRycTASgyPFBWRPNRBJPzoWxqg2RRWFqxWDYjYY5qKFTim2JNKHwgLtYqJMNFw3Am339YpPycarqJEgKjc2",
  "key1": "2nRRTsKPX5y6ZBMjC2QYJfGU3EsELcNYxMekUBkpi9tucEvT2pKxoVVCQhHnUzCcu4quYxkpnEJqvgfkz3p4AETT",
  "key2": "4AdT9H1kTawKprJD4D4jsKw9ubM3fvorvJQJKC1B9iFye3XWKc4CvkF3xK1EnU76h7ynJZ7ihi9QSBPVLGaKXFkb",
  "key3": "NHn5tztDR72mJ7fuz1m9BAC6Us9AryjFRz6R3786oMS2MhhvMFof5Z51gqukpu1X1ce8XhBdZYcFLBQo8CrmQTF",
  "key4": "4c4Ewz2xCYFBP8X7ZGn22wGfxSsfdvap4dRxwnezX4DRCe92Rw5qxniCpsB6pkUnqneWCi6QkuGBLQXDfwVb53SY",
  "key5": "5vsYhmm8wQNWvTKztbr3GhMAhqrpw11aGYQsfG6QU5RE6MkKnVNkoUXFLcNnSGhzUz1sHdp9AVX2uf7u6SeMDnco",
  "key6": "4cGQTQ4CD2jHocSuPjACtCShZ9K283EjFRtLjbGKxuGLBjVYQN8frzPT1hS2NtYuu8WMNkpuo9vGpA2rzhjhGERf",
  "key7": "rAUMAW26PDYuKTeB8fBVNtJb1PNvAbdVxqYaTSQvdUES8HjBr7UCJx5GfLQMndkXZaZKCxgEjwxQ5AgW4RLaHeY",
  "key8": "4evx4bByKzRaSh19aCYiWxTXzvzGSx2m1izKUoyhBoCUXaNRyu9TzKoqYvDY97kz33AymktrCWLoJR8R8qLkED9J",
  "key9": "Z7T7cNbHiGVK51sgXVabRq2FMctdxmvZiQ8ew8Gj4LtvaS5UMunrQ8p8MEsU6oVKP4RTMuE5YbXra2XyRhhJAj4",
  "key10": "3XepqVvdeMscLtno2snaaXN8PHWHjZXr9xuWYC7fvE79wLoFt1udjJ3HXNXgmmm9dG3G5zKPksPRuczyTwU9x5Qr",
  "key11": "RgGQxdQT74ifFUKYZorgdr9Ly4qcEhMahnHYqtLvWFUuJXaytPCicQt6dSoMVBa7dvGfR4mFLTnzYXYApT2G6uL",
  "key12": "2PH72VYmT8Agu1jZEsaze1x5PX16oDyH5GmJXe96ME3xA8PKMLXhNzv1zKxpNVeYgUsEcfmhGHVKKYDNiBeQnbnH",
  "key13": "3THnRqofzAp7VrhZJh8ZyCuYpKNs3yhQSNrCJ2a5LV6QqJZvQC9o4mLGssSHmSVh5KoLSftr9wv5LKGVwV9g89zT",
  "key14": "4ndSobJ4rqPQ4z9Dg4pbLNSgdhCrAAFNk8246gPRyyRhPbJixvu9v2jxVAMzhkezY9UbWbcivUwGvZRBxXKjMvW8",
  "key15": "5HUu59sZTCddqGnpXCiz9CuaNm5UMvX5KXbEzShvgSuqgXyy15rniXZTiq2zdjx52kR5baiCmZVZAsdtUTaowM7a",
  "key16": "496yRcjQ2AXcFms7xJYXz5pGYuLF4aniyB52D1fJEGwvoqtAzqncgK133jxynJGhd94YJvr2TkLMyqD7oU13ePWQ",
  "key17": "XLyg2PBC359in9QzdgsuZQpKY3YuVRnZvEXmpCxfDyabWDAYMQkRu2KG2fUTnGujPGbsAJnXYvo3yddmnFcxx1n",
  "key18": "2wm28FTazxaUUJCfwPVJZw2kNHSU59iy35XToroWow5prVK5tP78B2D5KXyw6qy9oAqSU3V2KBPxNFwETziJeeCi",
  "key19": "38xsqUqoyAiJx1cHPFRA79BzkRdPmVXHZ6uLTE5p3RQDtjH9g9qgoUfz7d9CnRADSDy8hsi3rMWZ1spusMi4cNJU",
  "key20": "co86suuMrYy4WBohxeaMZGMnhr22SQkKaPvEyEeS7dbciwHjPtyAKBUDezJnFk5q1WEBWWyG67dwBdQMAMWHTug",
  "key21": "4VAt3UMfsgs2GqbpxStzZUfCgdzRKesgH3LWcgRbd1MLdbSrezA4fExW8mxe5ZjZFkmw9TMxDP4BHfUSLFwvy93d",
  "key22": "4DZfv9zoJYMAUykdfazWSC7k12crxTubXqV4137hMxMYQTQpbj3ygaea5Pnv37Z9PELJ6cyPHDw16JX6vkBa6Lyc",
  "key23": "3FKiFEpW49KKqXKmDx1PaSR3V8E5iwqchU5drM9JhjTY4eSnbGRM2Cum7zHyRUdGmdUYhJuQygXAWb5Xn59RosnG",
  "key24": "2zfepL2qb7LNZH1ToeWaEPq99z9WsUjJ4L2AGhofWhybMZ5jE35YHBMvUFhqbozaQYmUp5gTHfAseuiRRrfPfCkZ",
  "key25": "5inYAJ6962u4TG1VASBCQQaqvfa6dBmnfFU7NR6xN8pjyK8K9BGvnyXAYftPwRKNzcxLGtRnKXXEhysP2NL5PwEF",
  "key26": "647griykzrdz4bkcdpyEE8gR8KQSW8TvhfZbfAmK3uzVWuCmp5WhziPryTbfyhL8SjBamtSfCs3JvJRCUQDst1aV",
  "key27": "UmzFoUcScGFhubfPbLSiMpo7EXGXPtYS4U6FmPV4eG1z3x6VFKBQf74NhiUn1i83rx81rNRxKjHW1jBe7TbARbx",
  "key28": "2hqk4cjGRAcMnmswKRYRczCvDEu1egWUBKTjeUrUpjhG4PHvSFMw15rZu28bzRgjcKWvtnWZJd2oxUs2rqFUPJK2",
  "key29": "u5HMKM37idJFt2XRdLvvDuoXrMTpQvGw1ba881TNBSdP2c5px5QfZpB1C2fumSec18Bok5kJwhL655uo117GSE6",
  "key30": "2rbst8hjQKTM434Z11emxiLqzZADoHeodLhBUjcGjRXEujye1Y5c9T4azZBGXAmTGFhSbi3zf5cUKUTHyr4M9fkX",
  "key31": "56TeM81eqCGKjWFtvHZTyTh5kSz13yPEEbQ9sHy5BS6HQ52etawydFKvy5K5jLuM9N7GsmMnCAfzG5PkMZPvKHkc"
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
