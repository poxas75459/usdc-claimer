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
    "Csz8rJKLSj2v8BSen7isuQJv82keqFo7Tyf45F7DUbANbS619czXaUHeSrybmw11GHc35Z2sLHsA25Vrxz8TqrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s8Zvac7SeaQom7gRekrkdmw36SKXDdf7sBLV1ffr2L6K5Q2P1x3VTgyi8kXXryPC41ku29kjAmQgA5RHGhknQkp",
  "key1": "3wUrb27MLPPVu1RnA7NJBUzyjkMfm7YWVEP5QmASvoBDdmNe6JqAFebB1TAAn2psbpLw4vo9pv3Xu7LPBCgYViUR",
  "key2": "aGBfJL9RSqD8Kn2GDYHuhxApJT9XMDmif1tAtvxACLBh9yXLwknVuQXuBn8UMme64RU9chR6z4awXYKNAZ37rPz",
  "key3": "FtNkCbQYxC1aJbzBHQQ8WQJ5DM8tYFizGRb74RXSnhykqFN5T1qtTvbBspuXCZDbk8JFaTfQKqDpF65YWD8kpTW",
  "key4": "67Q64wik5sbeyPxQhrJufL3BW5fJ4U3HMiJNLkRsQZ3ZpGY7gWrjBjdaVmgga8kLpqMQYey4wPHbToHHSvdWgUyH",
  "key5": "4XfgahbLpSbMtRNJYKqpncBuVL2sDgJvrDCsAV7cBcmcSsPWowYQu1yo5oAQywwNm9tF44JwTMXyquo3avy6AVgw",
  "key6": "WjTb9FhgmVsdC6sUqospgpZeND97LdjAi2HUvC6HZoBy7nXH4va514WAjA7yvkz3kcvL7kBYYXfGxFfjc2he9Pg",
  "key7": "3bta5431h8w113gKB32jsGaKxQXGZYNuP2eXnotobL2hnhmSGxcrqVjtUNrA1Yaf47B4hk5Zz1r1DMkgiVpun92e",
  "key8": "5vCdiKR52K9V5kALbZN68WbQGF5JqgMnwYHNpGGQMkDQHLQ13QfwspgiQ4RVgz9UfUA7Mu6kvnVs1kmf2iGjPvrj",
  "key9": "LvorDi3ENcCrE9P6utBjpt8MfawMmvUttZy3B3fUve5m1JHsyKhJK2DoDZZRx8YXGwv2UjCKo7wwd9HS8drvDLJ",
  "key10": "59sujqVDjxaJ9zfmRwXXcGg2N7FbKq3ciFUXMvWtZq2zPHQXYYFBBWi6Cx4vjMpTC5HBBrraUR3NgFBZbNP59Ey",
  "key11": "4vAkCHUeyYgAtjypUC8xrMP9MSCW5CugVkzmJp6zy5Z4mUxuSsFEncViWyPMsyZaJqqXMuqbtWajCpqB2Nzbfo8V",
  "key12": "3khoqf5461djgrahGNkxWGcjfstjHC2kNUZpXksXD8iCkvk3rr1HidaLCtVq5XPhm35xLbAR7oe5kfY31UzNa99",
  "key13": "46KxnsrADECyhV6KmiZ1W99uXrH8mR7Bsk3dc2MhVeyEAewNuwNveZ1pPyWjjx9LcJ5somxpwV14HZHpuYqZGqYS",
  "key14": "4cuWhJfaSoQjinhpJGe6DzCpekAMM9mCCup1hGxqnigZxVGJ6JJx3Z2SfmB2xCpDVVTx1xGWoWEQaZuswPSWEiZC",
  "key15": "4egdYJ6jYBMFfZ8hVDyoY2Ekeyn59YDruw6X7qJsAGYwoc7VChpKExuHLWo1ss5e4JMbuXVH2Pj1H2LGu6oD2iEH",
  "key16": "2NDpPYnRtNzYqvK9M9bPeiiNFxSNY6E61jkimsghjFALMcyLxkaLjqRSvGvi1reBaPN6XRyC9MDjkD5WD14rGDKg",
  "key17": "5ssHDh2KVTi3G76q9pKmt46AfFzm4LrNpYubBFrPS1BvUQLXamSyr8FtxmEjWaZkNedQBhp8iwvGSxiT3w3qK6QT",
  "key18": "4HbPCUFkPq9eHQmn5gWmLYiFLE7hyZY6oVuDwEZZ8yrGSsKi5LKJVTBKPs8UkQFwexSQpzLtiZQeNXzLZfQatDdT",
  "key19": "5xbMRjAghikh5jdNRpXYLvgpLUcDoqQNUfVppxSChwVj9V85JCDc1Bcyr2Gr2dhmN7wtPL8NSu9AFoHDK2daR2ER",
  "key20": "4ThSgMtCXHTLEzqU38AdpDAQpqSe1zD85sMSRzVBAkesVDZGWvGcPrPiHpuZQU8W1q3Ce3HxvXJkoP1wfFD3zGdx",
  "key21": "5WaiBQuk9hrJLTw9y2feG5M5XspUCVqLrkKFVn4p1MF2rJnCphtx6STpMJSesW5rQQwMCnEcb5UwYxTZF36uuim",
  "key22": "2PoLkc1xV95yipSkgXwkRe6LU87mk1LstuQA3tcYexE43fAqURLCTJqWuBuELfPcbBuszw8BUPPMk98beZXRGZrQ",
  "key23": "2cBCCDCYqqgYCuYUXDPn14hRKTAEHWxnQJ15uJfVfCFTgwiZ9ZhbZwEK46JBMLT2bV4VCWn9qT2aq9JNcPA32YNV",
  "key24": "3zgAN8XzGGggpfk5ULgwgqJqR4iE4Q8qKtBHLLMBYhMCQ8ZRhfvKtz8XuAYxkrq3qqbqszBeXxrmRJUkhyPAGPVN",
  "key25": "4b9Erc9LpHTeBndUMRAvy7EbjnMvLX9PNGTY5VSjgB1TbYpK1ZkN2426PpXQRjPi6iN9Z91oySFPAZyPU7XSQCM8",
  "key26": "5STwN7ZrQT9QPf9eJGnPdoqJu5MHMxZXNF1JggT97kLeoDgNwGzEWQCqZBncomJwVuzZwVZLVaXdSEdvftevdUQ9",
  "key27": "2MyjUebrUqNq14x4jUMFPiogkcuQfvBBnQyjAJEA716xz1tPxNCwvNHSvuoQU1yhTPk5bqCu2Z7MhotQaEcyPFi8",
  "key28": "JtjkUsz9SMF9QVvYAvAhy2njb6cQxdMGpbYFP58r7QZCg5QFmqUGwU4vxMmJYu5Fhyu2B7Zb7pxNDvmDroBRe4C",
  "key29": "5GEdMvqmKFYeSeeWpbW1SQszAjSZyNMhRbU72UTSneEjG3Thi2zhFPYF9B25FxhBCMu1DhD8Zj6UydDtaGXXySmp",
  "key30": "syke3EaoQCydqiti8pRotMv4CBbK3qJEHUaFwwpjUvgdCDDhhFpgWsHnrbgcnUYYMTmmrBcT3L2CpFdz5uGj5Zq",
  "key31": "5CF4iCNi9R2ZdAKYM52ieMatwPEyMALnE1QRR7EPaf8J3YNx9NvooAj7Aqa3rGPrMzLyMnzpW63uxVur8EVMkgew",
  "key32": "3bgHPDYtXFbnJpv1kXZMvNowcF5ueewwdefR8rfnSs2mPrSZcqbB4rMqbjmFJnYzDdgPp4YNxkHBCNBDjLXt3pT1",
  "key33": "5V3C3kmr9taDmX8MX9YfzydtUy9d1H5jdUdHcAeTtJ9Z2xqCAqYC8aginEWTXixgnuY4LhABTdevjNhszRWTAUjN",
  "key34": "4tusiYjbW8gjaS74sRTkJneci8yNPXB78NSYj28g74uuKdHxTC8H3BaXJeAaZ4mGr6ufJptxBC9i4wX3v15UZMsK",
  "key35": "3BGWbNZU9ZSe5M4Bswu3APV4Jm1GGvVN5BWzQn26XAfi46aS2Nk3muwSUtATqkHiCtYBCRPC5MdMFXaKcmedfAjx",
  "key36": "2hc1bdBNGCKh6yfa35qjKhgPdHXSntmZCLXqC6biGYWCNjmL3LUyic5KAoyp5qo4dtxBBhvgMcHW2cUVCoYfnvJ",
  "key37": "647N8vtsyZwkCRGBnfxXiHyGwyb5BN6jyQG1o4RPVRny9FjBnASYK6gXbE5FVr7nAM6YtatcpwQyTZnTWVHJC66n",
  "key38": "3VgKYNyTrGZ8DzBrKzYGJxnv54om7Y2C4HQA8vL3dbGkE4iCqLRCpQXCu29PjVpz4HBKdkuABvAZvBPvZfwzP3Vi",
  "key39": "5tLFfXtFsrq2YwBf4HitP4DaVFZNQXoGM99q92gMiYSt9fEgug8Fi3R8kHfiw9uajQfkoqseLheJZefUnbpK41cQ",
  "key40": "3mRSTCmK5x3EqrXRYHqs3ahzUp65NoBxbpnTeAvmma5EtRET5748i4BnDzdAMbX3tSbSehpP4pS3SkgDmF4Qj7iD",
  "key41": "4RgYF1deYPUPbreBpsqQdCfn5dPbTqHrVJX8aEGKUSndHF79Tuqto79CkKyWiN7keWixDpPKdqJdB4kKhLCCxsgB",
  "key42": "JQ6hwcfysFPx2eXdL1rvSNPi8SCThbnJmdiDnpEnR5QG8w4aKXQpDcWhWKpsCiashu6145bSQ7jT3JE9dgeCWhJ",
  "key43": "ghDwuHpVPFxw9njyYgxT9D2hEsPtGMEwQb5Q2qtfRKv4scZpS9aBtSt8UuhC1PZwRcTqitfixCwN7YUB5q3vKsE",
  "key44": "4BJdK88JYN42KU3nFjBRygnZUaMPCdgmmj1dZ9nTiyNVcHpBGQs1J59qkPPZTrUHUC5rN3ZyBW6MD2RK91jwFdPc",
  "key45": "4v8FeFFtkEB7NBNGaTkBb6jxVHZ8RaAHUNTWrZg911QfpTmjuc5y92uPZFAdy7hp4JpiC18FwsaXDGMTAckjUy3h",
  "key46": "3LkkUWoonxendMxb4wEZ1bEchbnNRAziFqPtKRYRWqFnMkqZys6v5P9UdoJyf6bVgiiBtzXS9bTr8FxEHBwAUXVn",
  "key47": "3tzi7Lj7zp4gbtKSEa8CutUgDeND8E5ihX5YsbkddxvHBBQ5UjUzJsfUwZrLhCrAvzoyi9AtYJ9N8eLhJo1MUvhf",
  "key48": "5w66n4udYB4LaAHhLRo9KSaXeuiCUKiWjn63akYxkB6CPRKMh4prJgh9pie1qMwaemA1XKeVHcjMnuAvWfvRziJZ"
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
