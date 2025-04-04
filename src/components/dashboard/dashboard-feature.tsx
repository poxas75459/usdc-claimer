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
    "35VBJuQUmPqwqS2F8vd4U8bAmfPrnBepMJdkByJAauzppdjpxS4darFBAJAxm23x4JJxPm7mEcnxYN3nDNZupwXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52vFtSFz7Ya9NgDFUqX12VXozAMy2K8YojAPuTZUCAHUMuQV4kD5x8cjYM7GM2psCBHGZSxYUSEC4hVrLHjxscEt",
  "key1": "63sLp37BmtMkgpd5wYxL3m8QVQtfq7MwZqXyPoGRx4svWRzLJB62vFEYuN7fC7Agp7vgCnyz8U8W8C7nr9iovMBT",
  "key2": "3F6rK9WVwGbr1eAiAwGGnLmFX2XfgvpmQfB5NUQBEthJbHXRHjCuJaxwJmJEfe94ME2Q958eAoM8FnWSWcDzxvoB",
  "key3": "5sEDuW7g6g1mg3D1i33MuDYz5WEngApX5VzCWZ3bFzG7Xcvayy5uzz98cUG1dKbkNowSqPwrVdtDX7N5kB1Xn56R",
  "key4": "dbbZmkuBzRrt4PwKpdyrUuWnzd6YD71dc8qyUDKmSsQgCjyR8o8oL68ENitE1HJs3RJGVKPt5DD5gu2QUv8h8n5",
  "key5": "2SLc5HmvEas21U1GG81RkjPPTh8xAvLnaG5CGysQZ4UKcAyPsC1hVCoqPyiM8sJU1jNETknrWhs8r8bsyPHS3TiR",
  "key6": "3UiYLiQU4vXyXw6xtgRVu5u8TsRVJuFnWUgLzXDiHoGTvzKWDaDWQTP5fnjD9s3sKcQN6He8jQVMCV1Tbi6aQVhU",
  "key7": "4is65PWiG1HvskNXCFnRzjk7yeNKXpJ8RWLfV7G9mqFvzv69cEA8Vtv4rvjZji8SZzhXacRgmE8r6a1kAwMUBwKX",
  "key8": "2Ko7LBk7ocFiB2phDLn1jygzuwMoy5usoDq1vnbQCwikr98Y79kbYeAFaTmAtgaF4qGk4L1ybtgVuGUy53NmCReB",
  "key9": "2oCsxSTL8uWoLaKaBRGUpAWoTzdR32duGcUDj8j8VZ17qjY1FsYwKyydo2MVacfxnnyoqPN98XmcVVrAuJfET6He",
  "key10": "3LWd55uBMN7E9zLyDiNm3w9cmB9b3YAVZLEUNd38iCJhyyea3vMfE2dSvmnfW7GepGtA1YcK1FfV6TyahPk5eHts",
  "key11": "2aAhgjVwpaw5YtkqojwvTQFvGXD9StVwSdMxh1JLMTM4VpWhK5WXfWrism9ianSKM4cLyUS5jUULhkK6AvMVegAT",
  "key12": "2zzdgxyisae2NehyEXsQw2DApXgdkNTvQiRtJaf4L775sAqpr1sro9JBBe8M9x8znwqnHHsgsAtEcDFVZiKJwE4i",
  "key13": "3yffXxZUcghMxo9K7HBZuQ4oB69xUm8JXdCzDUiBzUTx7B1BeNc1nVMr8pmc1ui41JmTWNTdxZSzqgj9XJHzeagm",
  "key14": "5aY6WCUqt2CfzE7KUVtcWTu7wBaMtDrTyMoxgCNdGXHsSrvK9ajyaUXgYVSvnC8PDVtxDxUGxjTUBp9Ckj6e159w",
  "key15": "5x7CCU4c7r3pgs8bH3WXwL57AiJXZsZWcV876TDUgHvopkpV8pzibDtsDcTYo6zT9fsgmmzUvXWQs1rwRncwE6qT",
  "key16": "L1sgm3Lt46kuR9GzU26J43A132hdxtC5JTgKKDY2rYTvU9Ct3EtdFvpLabMDRqTMPyXwB31jYo987Qfo48nKqBT",
  "key17": "5LY6tnRfu3KfeYNWfYCSz5NHxomj4sgbomz9smKnPy1Hugiv1VtQSU5XhTTX4r2FibfoHLDVn6BEHGtsgixbjAA2",
  "key18": "5WvBxbffx34oHTrppNi9YtgUkC1GwfPExWaFJsvyeNkjexYFqT2pQ9xVNKbMDoGZKRbBBx4ar8ZWnaNUVZBn9uPu",
  "key19": "3XPY53NpFK2eDTtYrh67bab5uHnyWshVoxsXQFzDpCecsFzmehCKnnyXfhxAKvCMzsvMZ4AuMaAWj96ULbpj4xMA",
  "key20": "5GwtXZk6UxhKkZL4bAbpSNy8K6TuozrB1AHt414qqJtSwEgFiF89rgAjbHMMaVMgRYJSS4i2M4EkKwS9gRvQvby4",
  "key21": "4hJJDbmMmnKaY9S4mEkAvT6M7U1joemXoe9onvtryviwsH9Xyi1J7HMo6krk4a2amY9nMgPj85C137CUYhyNh2KN",
  "key22": "5M82KVsvH6WGNG8vnSakS8LQwMtXt5fn6A3qCzwRNu11Ymz7CqLGFtxFZrrAjcjCAQrHbjYASZoRJuFYwypLtcgS",
  "key23": "3Dse74MYYP8SNVXfYjkzusHY6tNSUVC3qoyHRfdJLRW8oXtgfSeK4fytREmNJpW6gQBxDiytMCAVAYHQ8J2egXk9",
  "key24": "3xYDrhqWJJWhs8Tzm2pRU9Q7zf7yDJvq1hAGK1XwCog17FbKqyY6rhKkdidFkKS2tviyee2Qx5FX8bpc69NTq3Eo"
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
