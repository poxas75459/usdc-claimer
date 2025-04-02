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
    "36Y8qfSN28QEf38rz8yWDFcF33jrSG7u2u2cgW7v7dkdHXrUoqfVreZmTTiKx5WSbdp8mK88LzaShErPRd6At9nz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aR7zCrTv3gNKqYa3qWK6owrs2n4WqNK7YSzXgxxK7STU2f7BAP2QSRobkEobaqSwfzBk4PDoWgRhc8Q2RoT41YY",
  "key1": "2YJkE9KgNAd388JLvY64VExBgrERzn7xMXeprwysivf683A2gkV9FgrBixMkdaDeDsCenCnXQi3QXi3XjSHaeK2M",
  "key2": "5gAsRoyPoBTrHBUF3d8sEEo1uhhYeyosbdbXqnTibpwPx1rgMnwCURghcp26ANj4faycRKkXTF11va2wkNpWASSX",
  "key3": "4xtX3hT7HL4aiVMhqvj7PaH95HsiMMfHDmj56K9AanhBaZRmHX2UoeLfR18Zp3uUAWPQ2fsb6Ghuy9QqsWvfkjLr",
  "key4": "FgQ8uP6XjpEyajLz9Me256cMJgqLkvi2rAyYs6tAfVuq1W8ViXZjoyjxLVuAG8FcPhAPhuGxz5aY7mKaoxixSMs",
  "key5": "5jEavkhKqyvYzLt2BLaNqUQxto93N4Ba8M7FY6ZNUSG4Ap4oPqXVz5oCpFCXXbn7b1LsNPvaL4VcUAtoQ6expwJF",
  "key6": "3rZxsr7gcXAumfzc5sKRbt3AW5o63y3Pt3zHMuSuyMF8fFrvurQD8QZV8ZwtMgi6aHFnrn1n5aUEDwe6r2eo2E2f",
  "key7": "5QdqaDyZgG9m9ptTxQBMRQa7mPJ2jHJazBAPFpSrf56cNqs6Yzh6TQdm4EaL1txesPdja6pJiWxdHttupjJccnQZ",
  "key8": "2DUhRBUA28MYHuQKBHxLJrKHwpEKUa8F6xvWzfTXrTDKzjTKeYw5CDL2Hm1U73yxkGM8tdsr9vRna6ixFSLtmxpD",
  "key9": "2emyCVGh5dhkPYPAcmf5nY8EeRnRLkrsZwgey3EwPVf7NtJDSYW7BH45Q75rPqRhymdPHzMGLAbRcdoCM8vjE5nx",
  "key10": "5dzgjnwd4zTqDumdxf9QZs8FoNXWrEqV3gyg18pVKUdB4WwQ4dF87mEz5Yg8cx6Ki8Gi8Nuo6xamXvxq4FPsGW3U",
  "key11": "2oPQwW9rjLi7Bo2mG3SS6kY1vEMEuMaHEeahWJNqSxTjxwDSHisG6kDtsjLDZ6DuT9ybQYe3M6hbkTF5vNbh7muU",
  "key12": "dXeJKieYTE3sSZFAxEdd1yTrEk6682dKbsrYBTTiQa9y4bQTKgVv7nMt16LmKeZfeWzfh3yKv43hwfUWwSNpJPu",
  "key13": "4HTiLXWY3yUk4KyKraNHntawpCuQhW7ivEbB6noNYvEX2YpxrNcPZnfZpjqhM7sbUezPdVzqaSxjWPdf8hkqEpda",
  "key14": "37Tpmiz2zGea7YnY4TeCfYvn5mABjfoU7sUbCwny16TeZwaqU3RQTF4Qau7aXPVSahMB4q1BU3iNE7vg4EoSVFE7",
  "key15": "5dWqjbjmELZXXxkVz4scSB8XHpx8RdBaRezABZhiZR6nv3FrTSipejscCkv1kCfxV4uC2Ayi4GixkZUyYGBxK47t",
  "key16": "3BiPc6LxrG2wZtbjniJYeTYwW1fLbk9VfU9GRtndpgnciosTXn8zuuJMhy919tzX6UyyhBwpLUkUy4ZfGxfJTnQ4",
  "key17": "UzGWpYp7r3dYJScb11QWYT9GpeBVZ7m3dCpVWy22NXqfpR8CEDKN1fJnJKTC3cCcpgfDPUeWd8bJM5Y2ztoH7HG",
  "key18": "pTQHvh3aKEM55KjtBJdSARshWNLWUyPQB3tyVfdDBUAHgVut8FBfX44eCnd5wKxNCrq8LLGLBdyT8h35oxwb1JY",
  "key19": "4R4tRNPA81ekgJyJKHMR9QKY4wknQCKYohkXWaaJUSWz3q9rwrhKRkD6FahrWHtjjMTfLvR1s2LPfqShUBo3J2zu",
  "key20": "3evL7KUAarXTqvTvuWcJ5vHpGd1zw4xeCQYbWBc55eEMPJ5sLZgUFhjtUvafykSxruHNoV6cJYma6J8om9vdeVkF",
  "key21": "47XvAPtng1j7iCwJP1QFT4gQPQZT5gpLAKg5GQqVNJzpvNULUmgxdg8FR7iuGL6nqNtmgt33eQXadGc2ZZ8B9hc2",
  "key22": "2SGszERwD6QuzqCshon6UQdsWUvAhxJAWnrCe8m2pkvkdMYKrXwv3k7FCs4YEVrFbKBVoAFSHLKWPgVdMecU6CUi",
  "key23": "2gebBekgx5f9KVjq3JXBhCDXxEJvjMrnvh5fdqAq5B3d5AztYfcbJiisCawhKWzKwzh6HsnUaMY45XEa8VNcN41h",
  "key24": "27z7s7oFhuVL6PAuZVEFw1iFVS4Y8FSBwGgHBAP21MHAH6GHUVwdA4pgguvc8Mj8det8aUcwzKX8YoTrQgY2W3k9",
  "key25": "H45WkHKXfYwA5vrn819BmMhrpWPsSSJpFhtppkWWHqFHTiytstSZaMnVxLKxvLrVZvyfcNsa5GGtvkc8Fq42pt6",
  "key26": "4GMCuw5H3NMJt7HwtxwGLLcvoMpMHpYtjsaaDycnmapoB57DthsRKDTjKdtPYvVe37MbjGQDQfe4tBaZ3ztkVM8V",
  "key27": "46FYZz2u33DhApqfNBQAE1SDcTjcuYjM4qWR3AbmU2FraHXuc3hkXJRLnNb7voHpZLgXeG2KYwGyH59nPZVcSGGt",
  "key28": "ZmJDTkHV21KFLW64DWvrTZBCo23DDGVfNAvrSzjKz6oiUd7xTFge27FKb4u1SXHqFZNHHp5neqkzqdYYYQ2b7GS",
  "key29": "4TFtZ6SuZTnskAyzdPB1DWFM57ArCkvWX2UwoF8AyNC5vw32s9QBgRoCK7jJwZ9kVPCHgRpu6cD8f4SjEi6AtRYU"
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
