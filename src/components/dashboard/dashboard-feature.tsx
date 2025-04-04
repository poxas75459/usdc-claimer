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
    "2FQx4mMajJowHwqLprC6s2nPYp9CxxorzxePiQGhfAgQmD8G2SeqrAs3P4rGc5s4Buan8ES3mnd2QVRKKpkXNKqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L2CVR4Qz3AkkCZvLtAUwVzmR1FyhceqYjNQuzfALDdQAtWjcxcochDn7pZuSM8JrKXCjymUdjssGBiu8sqLwTrB",
  "key1": "45R3C63yJHjVeg2zvPwdtqZYNzWcF28U1rLuFetKJWoL6GfwvBMWksAA1A48AXgFK9YWf8vZWGfnbMcz5BxgJWut",
  "key2": "4WcMzqgocMHBLD1mRFfo1tKAUTKuCAuztTXTNPWjyN4SLgy12TPEnYUL3VoX939KK3mbti6Fu36T4VWT6tW6s2w2",
  "key3": "2vwZVFx4MGeKUCtViFGfutzzLxsAWLFfYajjK2qAgp2d9i4XysvvLeCFf9EXR1yGmvBmPYWgHMEC8XKffjnhUr4N",
  "key4": "3TNMxNb5CpcNbMagfkhoqFUfTPNRArsYYaFPaU1PiuasaAYxmrwfPGKSz1btj9qTJmRXSLWuKt6EbqDNUvCJNVAH",
  "key5": "5x4TVdrECoBgDTo6Uhsf4jSfzKk418Tz6HqnSvQCr77b3BUfZcQZ2dBhghVeWQ8wqntjSnqxkwPChFZC9uNTeTTY",
  "key6": "5AA9EH8atBtpJ6TeShvb87VxnEpXAhhd8z5Z4hk3k2azhmkU3Q4vdT7boJBUfG3mFwuCRYfry6Mkmc2y1smPTSNW",
  "key7": "3ddKVp1DaxTFURraQLb3UbgMpgmPaCLNvBnrKSHmZcxopfCRmZb43bZhpAyVsngMQoKDsQ5d1wXXS2RDrHW11h3R",
  "key8": "2oe36wXAtzcEe4y3rM8SLxGJcS8PRM5nRV6R2BkhwfvVtERzgLC8rVk9RLbDNbsar3jnq5xEmFc6xJ73DCf6PovT",
  "key9": "5EZdBEYahAgWEgFNyn3en8KKnj59nWf9PXCETNFsFiEigC79T4XhWnWAUxsBQfApvAvQyM9XuydxuwJehcz1iSHG",
  "key10": "4xoCQWehHYgGZoLtx5fdEKJFTfN4mmdvTTTYjzR2zDvBSnD7Uue6vMqzPEuQpTyWxHFpswNMi11NDAJy6qqggVBe",
  "key11": "3uCsJLUyfE66b7Liffq41E5rs4xDz9zq3yF5bAD8rxLt1mNGnuuTihkKwzuoi4rpWnfD7PntVZar6knu8NVNcBLf",
  "key12": "3g1BYXmqtPQhoe1rEAMZVe1XSgw1uQAE6r3rPw7tQZ45PgDhU33pigthtckADeXAGwuYuFbrpjPrBT7FfuWHLGzb",
  "key13": "4AxLPp9vKSpoxeryn5mfkHMDKpLdupEBSpx1S9CZQmVuBApawtEV3E1TvHmprLuAVjYwyDk4988hy2JKTD3PuX3L",
  "key14": "3hgGhhescpyGXaEMqLYS8vC7SCGxm5b7Xay9QNYymC9Z9Cza5mMJYyYdoYrJn3Bo85bFvP4G945GPvjoFEnBiH8D",
  "key15": "47PJJiZhRivhJueWqRptv4s2RbDmTkg29uBx53yKmXz7BpH9uAiXrnfjen7BB7kpGUEyExR5ZunKCxZxz3Jidms8",
  "key16": "52a6FmM63uRUu5nBEPxdqQaCv9DTPNZCGUngPNUccwxATvd4EnBmsX8ZqphfpvV4sdjnkdTUnv42LRfKDSwtyzaq",
  "key17": "3zWzigUPefKFFvqvWTmeUuZV25WfA4zeqfdsWW17W4qkxCw1BM7ABP6M7rQRMX7Jn2SvPgh5qtMqXn9TNq6sR2xc",
  "key18": "3q1M6vaacHMEALkJieA6K73WFNx5BoWSrnQw2Y4D9GWEuZLtqXS2jTe2fkqKBa4cfBJB2JcaWSFheg39XsFz4mN3",
  "key19": "38rsH6zEqZmAkvz7g92X9KpegiCRyQrSsrDbwT5mkV8JMMrNmKSLNk5UAcUn6SyxDw7Yf6FLVGAvBWUbZ2mhdQqH",
  "key20": "2UzcYTtwZE1KfHjT16AMrGfBaoPxDKJTomDsB56KH2pEnLaj3T1pkVawJBGRykCoBFNmUYFPpjwZgns9zogvP6Q8",
  "key21": "4MftfEs1eE2XReFsFKWsbK5xhNgrw2sqZVeGhhzdYT4ipmEZ4DjaSqiKDag6iK3C3pa8FHwa9DjsAQ9DQ2Qz48GQ",
  "key22": "5JRPvupQw2xvunhb1PgSryqMbavTVz2m6UNa4JNyufDw6zcbkf5esr3EMur3VdJTgEwX2Ndq5ouoPPEBn8zcBxhH",
  "key23": "2399mUHJV8WUjbJYVgm7Z4LTTPZwxCj61pGHiRSeZ3pZLjHG6zmQC4BrLrVoazzsMWN6B5AAMamM9guYtVc3C7cb",
  "key24": "2KFXzQz25VMRV4EoxaeRTKgohFKXRUy9tQgfZZq81MwoBnmHEyFmnX9PyZ1z6vakEeaEVMPg11iqfZuSkqYMDoEH",
  "key25": "44YPDGEpWqDdnnu65d2UTughq6HP41C1U576U6HhyjQgQiN3G9bp6P5RxqTrs3Vn8sK6nxoZVwGcBRips48rxk6N",
  "key26": "4SFpt7F96dM2HARoiz8wRhs2QfYRoufX6cKswdNK7L5Gv7DsicjKkKzuWNx9yv5mNiwXZVKo7wzqZewMAHtM8xFF",
  "key27": "3um9qNSeKLDkVE7J5FyC1xgghrMKatBmHiiWXTTN4iCYBa3D8dkRRcbkanAebDwbwQamuXygzuc6Lgw3wGU6372N"
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
