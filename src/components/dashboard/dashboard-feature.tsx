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
    "qYe3HHc6gHoEcf6fqFhA5bvGrb5UJT5svWcWKZkxRnf1fERWZwyihhjpzv5VKRBYvPAEnqTFA9gqY8SfVU92sNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hWbuBboth4HTs6yxBMjMaBPUXj9RHcJJuhAobEAHxuc684ZbNviPyVnuTbQtHLoarRwoh9bN2mA3XUgk9gv3BQo",
  "key1": "bVfZpxj5tLGLrwbCTYcWH94CNW8h5DsdWfJpqrPwhcx1AWsfnUjrGTVPRa3Xq6hCXxfPySYTEYjstViUMtZbsge",
  "key2": "66CVP4HsfPuKfNvxGMnq41dRYt7XZ3EVkhcAfSjfxi1qhh84W6iKYWdtkXuJEqnx8bSpm12WeDEMP1Mh2sV1RZ34",
  "key3": "CA1WfcYvRTdJqCKmhyfBTx9mveMJDamqtJxA62Z8KtU7aSKrZnWbwnCjhEvP8LudK1EAGE8zoYQHhWxj3tEc85a",
  "key4": "qiieQrr6CjMeG6ZqoLnA47p4BK782prbpe9uWgT97ywZ5jx8kxurEMzhV2tLuKtY6DyimKqY1sr8pFc7VZCCKXL",
  "key5": "4gsHi9ftvbrftVPAozHfbT7S1Pk92Wpg79Gs9KSDs7czbmZDYDbdc1n2FF17PnH3kx6EFvVbQgiNS5bCCkJqjP9A",
  "key6": "27SYfRo5kgBUdiKrSEvY7WzS7WYdknEhMnoSA3Af1vPuoN9tHLgN5bZdME2Goiwmn8UK5LXLXZpsx5XyfajYeL5e",
  "key7": "e6PTsueAz8URsYbWtPj4wFp8hpYhxjr7na3q6Pi45MkVuP8h6D2EyujP8vAmmKUS3gycjbvQ3HNptgdUg8nYToS",
  "key8": "3KgkppMXzphiTscXTS6wNnMYPK1KpccNKj9k3YHuynpD7TJMvyAd5jbmJTXVmPRKSTt7zgeGi4ATuqvXXFTDY2A7",
  "key9": "QqzMrqyDoBKVwqTYqaQikSnVDryvsSq5xyvw5N38JaKkW3CzFyAtFeAxNrJjNT6qhtj7eYPQ7EVbrVTZqXeUJVN",
  "key10": "tUVmZujCejD2FYJSnmQubVZjPXxfFHkn1ZnJtNv7gLHNN6DGo6TuTrPDyDd4LmgDJz54m2u4EnceJkwzp3YcVFX",
  "key11": "LXBGiHSm2xm8Re4SZbysPT9tc9YosGGED2NSJWeirWFbZ7ep2qzgxxub9vUJLtQmDCaGeWy9Ks2HzbDMU2MAEkr",
  "key12": "4C6hM7G4xvkQ199868La99A9vRjQiDZwhBtyjBLjHQxTmnmF2vczLo4cV5d9yu2YZSGy9Z24TvsGBiMATWdrvv9U",
  "key13": "LHBD6ypGibvPk3etafy1KUtMhkUuV1JchZzYjFs3o2RFJX7WmArPoAgwZMqzE4rPh4P3nMsA1BuxY21qYzH8Tzw",
  "key14": "xkwLRhVsXRiqtFdMUTC3iQuQGZXBqxtGtt3oLmNiTrxE82vmZqCWncKCcxGCGeR9coHM8c2bKSM2iJcg7vP4aEc",
  "key15": "5NkN6k1Zjwhzm6Y8e7FM3peemAc5F6K4dvD6puNKx9BHNif7TAgGav3T2qW83fXygaRNxkcY3CU9sofWvqn53ARE",
  "key16": "382cSn4k5E2nnzVu5xzDNzbkuWB72YDBxkZbjqEQiA2ujfQEA4cB4yEBoxybapzTip2hphdG77aWNpFkjmXbEpKU",
  "key17": "21N3ztZ25up3TBcWUFxgnx53uiQMfE1p8GaF6R7KTJ1d9pHhtuhatXZUNwg6x7ZJDsfgLh3mwiVAHwxzNxaW15u4",
  "key18": "4pFnuP2Tu7Fh3Wvsi8REgMCRCAkKS21XP5hsdQwzJvPnzAeuW1wy4PbtUcsrKgXenJM8CoF7dj7ggeiXXZeppcoj",
  "key19": "48FNCNjiDXxxSBc74eVAjhw4cu55aG6aY52WQzWUCmQtRbWuoymyd127Lp4yyVH7Q4o82YXQGMs83iDyhYFUoo59",
  "key20": "3hDe4tPNgYJjN5PtK415j1xazoVi6LkVwpHxyPA4hghtqi733WsxXmQkKjFM32jC1KsAJUhPfhpmsL4LZ15Mxcab",
  "key21": "4FG2oSewbAJb9ShCJXddr3se3KSPAvXDLDH7nWCutvkHd7yHsLys7yqDHdJ2E4e6TSKPbDYodwc7hmVSuBH6ywHC",
  "key22": "3oLiVGKG6hbCxtR8XcqURwvTqnbAyxSS71P8VFisqWUpAGXBbPAsWwjphge5Vpua8YAS8qPkFQYWAvd7u3NDLsoY",
  "key23": "5TMHXJrcgkM3CgpsjfLSUXy9gFV9jooJHfBaKARCBvxXDiBpqdEafeDFqHpbaaZefMZTm4Wmrh2hnTvkijoPMky7",
  "key24": "5A5i2tPek1FYtEeYttwKZHAYU2uREdw7qxKcxpTE7SYmv4Gg6n1JephPTfYUB4cp7H8VGujBfa7kjjHkAooHgMGj",
  "key25": "2MPRDdjg9u3pqprHGrrpCtRGHwyYJxbWLst4862V3SGLsUPxzqefQcFQwZWFDjtT8mZwh6eEH9pVtT1ycnrxrPL",
  "key26": "Jk3fjsgVzW5Pqjttn1n9m9JixAXgThxAtKbLsgxp9aA9dt1DXGde74sTwbX1tuyXpqcot9ZycBtLeYr5shnoYDD",
  "key27": "aMq2DnXCYxBiSNDGvdzWDo4gjLVCRt5B5s8g28EmPdRnXrcQ2RiWV2QBxppEA5Vk71njLdn41c9HoteYRPvbQFa",
  "key28": "4T3G6X2kVaE14Zj2e4cCUxve7nSaSiqZFBXysu5QcihQyumE2xeUHnFrTKR6RM5Su3pbsrSc3A5MuqWgtnTnUWB3",
  "key29": "3rEhgzVvPYLEYERyw3UF7Nn3cLLEPkxdpuNxtcFTb6k5WEXae5xdNDT4Tf5BE4bYyqCfJmQ3PetLb2rx78xJqJ8N",
  "key30": "3oB14hzFks56chPghipbRnWUhmcNgoqCn7GgNvqfNYPJ3hVB2LPhdhJsnPfnXnStVkjrA6FX1m8cuJA7LDyQ93Cy",
  "key31": "2exw5Qc1UUiKrWtnPuS6y19K3pgu8cFE8CBRbdGCkZe6N4AJe2Nqo5gwRTq8HhsnERKkJn7x7MDbxhPYxL5u8XZB",
  "key32": "3E7LWkZVzQnF39ob57YXuXckAg1fgLvwLnNKUnvjS65TdYZJxt9oxL4vGVsoAZpXJ1xgGjvjzTP6Mt2jjxv3zSfW",
  "key33": "25ULXgLgWcgfgsYQPEzeYzNA58GjCZbo8stpRmDDzmFniy4pseL7zcAgTey8TwAECU14ZnsNf6dcE58XwQnUfe2j",
  "key34": "2UdW4HVRganKXvEs9Yh2SfHxHw8aUwv2GZhtqGtYD3GNch5T6kyVAWR9NWHS1r9WkRMdEBtNZmwifdBFfUTbpThS",
  "key35": "2gH3NgX15o9Cb7HCNDhVnv2YDoJsG3MUgLnhbhUEi4s19JjgVr14KfmLHFMS8K6zeJ6zjNtwH528FbRqHR9XSsKn",
  "key36": "53C3KsNwuemguwJaoCyMGcSCxUewwtCsZyfMBoEF53A7pBGHp99vitmEx9L3C7JoUvMviZtNsuHXVbC4avqu5hQN",
  "key37": "2s15aUnk7eZ1Yw5WV5FAPv5dxmnRK4i2MXkFopz1Rrci667C6QVxd3kB7Y4CazGkpynm2Q132PngczHBKy3yPyNi",
  "key38": "2qraphk9rpcN4n3oFHq7FcdKEuQu5MULu8TNTE17tKzvFafKYHdmfWGJDRnufJohDX5WKDGBrxNGudFySjS5jFBb",
  "key39": "4CCyHQ4W1nsydgyvtj34mPkrPyJ5d3g4y72EB3v7P2ToKUaYBKMRT3tGPK1eJeRtL1zCyKqBsBkrrXeJ28ckgDHK",
  "key40": "5QgYx3JrqDUkW9j16SQGHFWjqAa8Kg3EXyUSJ1FxwKy4YQAm1KHJzzQGjba6fGeayjtyKmke8tDGb3dhW6ceikjS",
  "key41": "ZjRdbH7MnZkdJifqew8hfXKXFaRB7uEqUpSKBrD7DjJ74e1btSjRustXM4a6pu1mgucczVhG5HMv5FJbg71JQay",
  "key42": "4seCgh9ZPXnjgbNxxM6Yf5rbGqK28HfBwVksuRo4sNf4D1Q1gvEKYPaouK6fGtwhfyMbdieHLMLhEPJsUjNFHs66",
  "key43": "3os9ng1A9qxQ3wyg7PUGgkbBs7B2BSnmP22hATbUozaKT5VGPaixQDaTRzjM6MtcWhkkA5KPHbE8qhnYUSKRM9oB",
  "key44": "5KVQLFdUbN53XcZMX9MWYnZ7pZoQpBsv11ERvRgocEQRnm1UUkXNgpjzPhKCCi729A8ZJmqtwyR9zzP1cPwzgaHK",
  "key45": "UySgmji6CJroFPCWKgEFg1v6ZStx96xBriK6UrrciiBggD1uPnb9T3Mhi262G1JaQ95YyWuSGDDAhWvZfVHWMYA",
  "key46": "4oZ9BjMdXfgiBnrgxyFwpPHZWhxm6ENwmi7ahGZ2EBipgSwq3vXERmQNy4DXKkhQ5sU3Nk9PgxFQjgX27nMxGd3J"
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
