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
    "64YqtjH62AYtpRXqMvXCs78Dx51VGyQYvT7iR5RUMywCDgDLc3fAaPKPYfRoW5ZSfiCnL9Wi13E1yHhvkfwghgFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j8TSECUPq8aSdBjZmfxf9iBAkeU1Ge79XoWxaajxzNKrJEgFn4nAVKajqJc6UF569VYwxpHSshxr41opRoHgcqP",
  "key1": "395LJ5m9RY4h7sUrk8Uis4oLQBXXzN9wMZokki4jamVfCz3d6RNhE4VUXXpKqHUpJacdqqYdhouPRMDd5MYdr29s",
  "key2": "3yjAnvoaZELjFZ1q5eLpre43viyRu124n9tbhtQhRSrc9W3QGLssKtpHaET7oXaiSEJvDK3mkXtS56QiPAxiWwmk",
  "key3": "5w7h5sR51gHpLNKPujyhdVS7iJeC66fokFjQ12nFMMuv7Ny1QZy9MZitGWy3LprPR5fCtAtBjjY8JLW7TAEG4Ssq",
  "key4": "4qfowPXRBf8v1zWHvBVKZ5K2ppFo8YGztHXFfMko5vh2T7KL5rKFSCNTe8eKM4P7gkyPQ41BfAfnpHBa94JkbgbQ",
  "key5": "3akefCNUstBrErMaCKydnrDEpfgZMpt7gxx4dEqiSgXUCjeDhysJ7kkvCF17moJbrxxvzY566CwzmSBKL7yNTNp5",
  "key6": "28Q25EJPgY8sAEQGN8TE6FgSpoomb9DtXm5Jxo3pkCHYRtDGZsJdNwu1LF69kQLzLCs4tM9sQS8CtB5rUEJ9QrFZ",
  "key7": "2NRGA5mFQLZj25nddN2MsM3oF6BMjjdS1RDpNSr498pkZBU5nPafTC7xi2zWYagLRZGW3bxqvLMVkjGNBobb632q",
  "key8": "28rtWKWT2VwZkhjeV9FBcwZqBMgdMmMjCtNu5tmKnnT24QXFveiPJWjg2yXhXV3BFu7nWFDXK9bWjg6N8dc42BqC",
  "key9": "ZYRyx2dGTP1qopbk2QvcYP3VtvvQmVGSG3hyEE39gdpBQL6EdpqYv85R45s6iq4Z4FYBc4mGgF9UzgV8qCCGQff",
  "key10": "5BfbqYMNoFT2qAeLGx5YpZzL7uS1yHwtSmvHwTLwUh9whKbKXsXerTMPfTCkvwohgzyi6ZRfVrYXis8ksmcLA2f1",
  "key11": "2K8W4H7P1FK8Jcizi6vFcdRSj2ckq81NRc8VHvXeYpPyg26EnN3VeX3zQ1yF6ikNU9TbkGR3XognKb9kFDZkpkT1",
  "key12": "217DbGnp8xj2kbWuk2DJ3VEXGFvBNMgyiFvHNAxAAw2PXE7NizabWFB3aVNS6RrB6ZRaL9rEf7UZ7m3bP7AGD2Pa",
  "key13": "3ntM8PJ3atWyihgNycBr6GuYzV2PEpAbZvA1NMW9xiUz6t5THjz63DUL5k8n735UeH4RzLzZPfijncPeZjvNYQci",
  "key14": "28ubVDuifXhWaFQ2Q6WqhfBBa8g2R3XYREhXpRGjY7zFn4avKSnbPhgQnu69hy2NiZvVeNDUqUphHCVYdavHCRiG",
  "key15": "3AppeMub4AQh7AN8QgSx71DS6zpiwjXaNWW1owVf6kowFb2Xgb4eurceaU3s4uoGweppAoy4su56K87LpM8E2jsX",
  "key16": "5UxyAT5xC2nKHf41CD4gPUJEpok8fJAjzgh9Nb9bJaqdC4QdcSyuUBxHamVesq7eqE7xUBPGdWXGXAR5CPWuJFE6",
  "key17": "3kjfJQQ5VUYGQatio4N528xC5S5oRNqQk7NM4Zbubf2GsaJKoHjY7UaWsbDtctQvpkszLLRYEaPFQXgGC1Mf9F49",
  "key18": "3fu42fWgpZPDCHLPcdex1YAwZN37cZw4z5WtmFHRfVeDgxku3Y8qk6JdLZF1SimMENNW5N9V44wXWbpuqMWFCmL7",
  "key19": "2ZcEu8y2RUjRvojnroeiMcADmUNzWDw3mehZd2QfxvE6mUD1GnuLu6FkTDm3XstukPegDysWyoeEjBW3QQhJgKQJ",
  "key20": "5XpdrhdUMnAU2hMwBegLgykr6ZU1esSA34LiW6eGJSn3MYRxakANQK1n5Qj1y6YhroufNbPDFM4UUAPoQFrj517e",
  "key21": "5ozDrpv3Y4itHQMW354xG2qVc3mBUEV4qZQbniSKNHjvA2xHJbuocyt9FPhgmGzVV1rwG6QyHzUp1NGYK11LE2BA",
  "key22": "kK35e3XCCdMeCMRXhvAEwFFB63h7AxAy2BH2qwwwkxQvuBm5NNbZia1epbKXjyN6Mk9RwRmHp4wMk42tvyDvkEs",
  "key23": "66UpAVR7DY41hj3MPH5jPcmnUy4xzdos9FFTuRvxqdD7TcLMTz2AwmGCgPrSgAZQypWVEYMAQ2pS6oP4P7QtMj7L",
  "key24": "67Jbyai2WLdHAbZX1hs6kNE6UMYgFGUZthydnBCfFTZtXsRm55WnmrTmGYv6NvWJjMbShDwyVzenaCdRkwpeWNba",
  "key25": "2FcGNZqvU7moMGZ7ePvoYhHnYEb5WeFKZL9yETASBGYBsu6qcxo72UexbXUuu23551AjEDDeAU2nr9QA4nHSsqyx",
  "key26": "3uJhhNDsU43B8vaG78McE9XV6fH2MhsGZCD3YXzG8cKT47FVTMaVy1U7MHSoVxqFYe4LQmZ4bmiKnfWJ5ZZnQwe2",
  "key27": "5QNua2zcgUyoKEs9RpCN88pNyTqodCXB5eyR5DXvYnAJcSC8KatmXWuEpyoMheAWrmhibz4vxySvDnkFjbowP6uz",
  "key28": "26gBjiSNeA1pFqyMinr1GYXDUbsjtPQCc7zqi18CTRNphPUdYxsqjCkFSfkTtXyEqbEbbN8KHgMDUeMrccoHp3iG"
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
