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
    "3GQE8PygSXs8ESm7WrK1PR6uzzjctWN7jL46X52d8jVgwftwv54g2h3aLdzxFZVKt9MAiUiju7N5tdCkDAay2mVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CNEh4UwG8aCoBVDFM8z4dYTEBPqDYAVgSj4tQpyBZPCSPdXuNHnSAqG7UaWap38fokUCFnCeHRjroDbHbnW1kP6",
  "key1": "5A14ksHwpaSmvouaUjzkZ1fsqS9iQoys9PAoJMijTEWxSAt5BAUk363emrXiTqmMowB6jVZvEQqR347kzqVBw7D9",
  "key2": "cpaDaoDy3amCq2TqooZw5gkQk41tFdLBhuSoqhiuYaj1aaXi1EBnnHzETjopr8WdDVJQgTe12De33NjYc8UV3Gp",
  "key3": "59gpmmwyNUumKb4p9nShNU8kDfe1R58tqFqA9mnkfp87xd1McCoEeH44R5aASk2kquiTdrB3fc8e37ceHhKgrnBf",
  "key4": "4eQc9qEg4LFzKNuoYXE7wgqkRFXDnhPHfpVwDF8zUxCaNHpJuL6DLgCwNxoCnHYxA3eun2WcmKSR8ipsA1z8Tw2x",
  "key5": "4Q5EtiyUDMPPfWqyGVMcP8atzPc83SFghY7cy5V43pian5P621kmw1Yg8zLfkZ9zvfAGkfi2DEPLdhqgZE31FNmK",
  "key6": "3vYQgt4y23T8dXyQySdkExBJ2MgjtU9n5YMXbTZYBPr7ik2b7igr8BsyVoDU6mRgCohgeEncVbetMdFvreQ1EgRp",
  "key7": "4NavjZD9zTwx7PkKq75aS6rhmxJJsuiTiNYtD2b3gXM1NAMVMcwjpRjmVMtfXsd2obxzCYt4cSbL7R6ihFcQSufo",
  "key8": "b2a5Zk9sULjKwMkJsRHYAyi4G92ZaakohRWZrtHT2PmrUJKGmZtxwEn1yQCCQBkHYSJKYRpE8yi7L1VeVqbMHuy",
  "key9": "3hctGDPEKfViyXSR1bYWihCYvryonfDNjRx2ywy4q51tJbT7VMQFRYWXoRrY8NKLsBq5DRJ3MEDoNEdrZyAdTXSd",
  "key10": "3HZU6CiXqUAS3syuEcRXsoMo6TYujjPWmtukfKYSiwc76PLQ1jJtZGwYkFrKf9L1Qy1X3Mn7Kz9RpEs2M5hs2kis",
  "key11": "39uVGkCdfpLcLFNstTEtNBnzibVUHJ3To9zrktkH9h3amZ7GKpwvYzjejo53bdfgMEkes21H7YhK1BqzKW9tVCnZ",
  "key12": "34LNiQW7uf6sGeMczFATGYp1xxTH5V87MdTbbDRKG3ctHnHbqQfVU8uDEjzhGrkxRhZpm7rbY8dekzjh96DS3hxc",
  "key13": "3CP8VxmL6WWe1BWAqrefc3tGWKEYW8qHVcefpoB4tvLRZ79CuSq1vuotUBG3W56qPpYGZ17YLcvdZzCVkrZGy5hS",
  "key14": "43T1pFi9nj5kBWLJdufJ9atwjyF4pPqHmLknemLGmF2D2s46Px9bVwQMFftNsuHajjdxY1GaESPrg68FXNgx5oMw",
  "key15": "2P8mevCqPYva6xE3WSYXA4iX9Gu99VznMi47iJV2N9EFmJQ9V7GokBKAXdNEa3ftA1EJGvJHFPTVAAMbRZM5UMat",
  "key16": "2FaKGFs1WENASfoCcXHhQw91RtGh4n9vMS4xiZJhLve3VhpoRzetAPKVn9Qgdu4oVQVkZqaVhD5yvVBPWXzeGqSa",
  "key17": "5SFNUKknDtqn2xmVzEsctYhxnCfYY1koDWyfsTHiRbHdAmzVxDUzD4iuwnL1D6MJbcuo6EKzKNmneMLcEcm9dQ9U",
  "key18": "5ddeKC31GTCvsHi1pGtXSJMXPDc9j12UjMKULjxYhfXLqiRt1pbxbckKAvjHitS84QxJP1AbeAUKLy7HEQzvtFqP",
  "key19": "2qAm34B2t51xB99oabABdZyuGqF9h3wVjRZ7bgP4pDfAnqxDPeqraRw7QcNGmGXRFkg64t1RSVzPAfoiWLQHJ8nc",
  "key20": "3XaVYZSnFCd7JaFFhyfu3eyYjHchHt2mm3sSQXnWDGeLn3UWCisAiSxTfcPJDpV9PVys5FUjR1mNS87fnJfBPGhD",
  "key21": "32oSpzFXho7CP4eUnAb1qANtwnTxMk4ZmvV3huELtutHCg8nwtNY5KRETnBJJCWzWXuFguoY1sHX72heiW8uvcQm",
  "key22": "5TEqWygh5shPYK92z13vdqSTX5kJxKfDGXou2cdyZTjdtRJhDVK5VKtPJ7Mav6BAXti5d3mLiWL1BxTzg9kYKYUb",
  "key23": "2myL7C45qe2ZP3HGRnsEMkXWyV7PWJmQaPRXKfutZsmF9p9BYoRb7Zsbhz53pvQ4DA1WE5H1CEAWZsU6aDtDspH",
  "key24": "2qQXd4yH7VRQSodT1oUL9ZEeM3iFVAHGVMccEAJCsT8qLNBdfhsFuzNkRUnDJA7eUPVbJ8XUDAyvPzSx765nKfiR",
  "key25": "VUj8wUMHVAYiagBgzj7ThH9JnRgjwLq9A7dkzogDRPkYyoKSc86ooQDdBC1WUrS9tcDgibGaBjCxFWFMzu9uAUD",
  "key26": "63ZMCSVk4Fq1rEW6w1ZvMgbVUoqhWAR52uizhJkc1mWaCusjswSrwEYb52eGhQRpYEahZbejpX4iriCUjWRbNYqC",
  "key27": "4C3MZ9FULrTs6h47m91Zoyj4Ursgo6BdduHLKa5MT8HE3wpNAssq7Rk7FfCKiX9gG93EbfqwRPmN5M7kv1i6tVi5",
  "key28": "4pdXQEo4VVhfWzzxgBaGA2mDyHiXdbH53rcExNAKe8SiHDMH9xrgMcmiFJBJSedtX5osM9pTkq8JfD7x934mBQSe",
  "key29": "gEo9jMYpV62p4vikbw7ywFgm49vBz436KoNRocDmwDAq5yTAziiUdWAttUSFheiFn21ap23EdXX9du56UumuETg",
  "key30": "RZNaUXFzyBZxJa3Va2mssrRs6Tousu1AWibcPCcyjVcxZMzTwa3cvD1en2sjxLrMUvaiiJGU8N8CecaNhqprjmS",
  "key31": "5NBHQNmXPMvGLHSzKpuynaL7ruqYWhYk1hEdtgTxEfN4jXiy7FoaWJroBGi6jWcb2pJTP9bNPC3hsyEifX2XjZ5L"
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
