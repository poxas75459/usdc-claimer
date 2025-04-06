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
    "4Mnz32EnCE2q8SU9YkCTKrj1RvS5UFdfLmBvjRVzcKTfEYEMftdSdjvExEomH82LbkoxVVBHcHafwRS1Bdyecpaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21KPCVowSdbgPC3PLktRfkakrDLjNCt1Tng7eHf52Dnbdrsy7KaXhkVu96rfd8Pf4SfYbjn2xob4xGdh6dSqZgNF",
  "key1": "2JLYGhto9dqx29UuS1q99pPcEGCq9B3nCzkrVtv7rRysA1mciijvHbAeupq6VcYvUP2oRXbt1FHJYvvjGWKe4vUT",
  "key2": "348SDfMMrm4Wfv27QrykuegEDK6qv9ndXWxzHYHa1HD949QLuRz957GLo28unmSZVxvcWHb5igBcidAgxC9ZaTKZ",
  "key3": "2M2NS8E3XvxmaCnJJGLrru6ZZ3W9ybDUvPeuKWWyGKogABQgDFxf2pW1rF2XUi64A5Eu7d9uDPXqnCvLscgW3bw6",
  "key4": "4f2vVHMd6LHvFwduJ29UEEHBafEYFt4eVMufzfBxLjM9DvR7EGRoH5zgrJhHEdUgUHy2bAwB16VnZY9J221r6d8b",
  "key5": "2P21DLVH8wmXMvmrkGkxLQ5df45J4sKCiiD8EReTtYYrtPQNhKivpM9yML99f4QK2oHXMnUogoXZmDmSB1WcET8H",
  "key6": "H3EgKXCon1VJxJGFYPF8yya31GdYGcgCCN9YqSqBXdRgxKb7gnQrYdxpfh4ffZFdYtwqm7FrFKFKjVBrfz5so3e",
  "key7": "4tEQPXZkLgfCE49r86roRRng42uWAcVpimFvnyLt8WJPEit7Ds7XjwP7FpHT1hM2N6ofQKXQby4smo77qcL92cYA",
  "key8": "3J3WS72R4yBiSMCVmUMq1TuvwGXyhXSkugGX6cQi3qVpNbSN2rhwwNNJzgJQU1bgFFkwwhjBy1Y8wUrHGZN4hfd1",
  "key9": "64TggpZPKTTu9HcL7bumUJ26aUnbRxv9eodhMXeY6yPGAT3NTc8shP2M6SjX6KEEQXxoKe4nwo4XrtB53NtojfVW",
  "key10": "2FjL8XEnm72uEz1eBGHPtJMRQPVy5YPnfBtJiw8LJNxQ5sWhiYdQmYjYY1LmNrzTHVwA1Z9W1jDM684no6M7fCky",
  "key11": "5SZ69fYM6r7SHETncQwEP8WMYFWocznXK4Hykxi2sRTZxWXdq2NW5sKhdG9Zu6A6nTZGYav5JAccHchJS9YDKoJt",
  "key12": "P8o8onwFU7q3okTF1gLwF4KopfiMn6ar7SduxqW8uaxuvm4i9TeWkgpcr3cxX412VsGfD2bSZXdGwxGdncHKdKF",
  "key13": "2KEGnV3UXxWFgdA2B1h2XyvazTLMNSN1B9SdPt2GitWosg7y2wqG4dMQJ6HiUoLmUXz5WPDz4AXSP11bPBD5WvRk",
  "key14": "46qcoVsfhUGSYwtzf65iVmkBYB87SGP9KNtAF96wtsecfms4VJW4Xozz3cRxDNAxBWaSdj4jZybS55owCbH78rad",
  "key15": "WBiu9yN6EAuv8mhw6MDCLZzJRZcyw6Nc3BS9q7YYq74gq9mCtVJPJx8nnrqsj57pCcDzAMERVjNwbsgSHaFVMH6",
  "key16": "4pbzkAV49Miz3srwjXm5jm1wcBS1RfoZQ2TTXHVADczvQMuVknTRjwGcn9jH8TZGBZWTdDLkZkwmbwzLRqLyQXDC",
  "key17": "2FqXeq9QbMEtUYqRtkp34ihdtoq51VrUUaNExd29qemktDHVryPPYbGGu1Mjfwgm7rkT3iyDu6RkNBxq1DGVzP6G",
  "key18": "64S3AvHwfNBTp5QRBgX4QNRmzUuSomdunct2BV7fkPYn3GULMXP4C7wChXFxAL8UxUYWwnqKfLtaPLDPxLFsbDqC",
  "key19": "2znNpe1N3udbWqwsomtpsMExAuaj2JdwBWg9JXgSQrvcqECCBs9Dux3ND8upV8rCaXA3RJgv155HrJA1vH8MCr5A",
  "key20": "3cxP4f5XeBB8RZjPYYe9bQ8uG7tf3JJz4EMsigMWKLWejScbrBdDLtKmSnpgYNX3V8i9Z6aiqiNMSzCvF91LLjVV",
  "key21": "3HdowbcXWGM7AEDBCSdCkQ4i2xsn1DmxNm8AEoQT1b8sBPeGCZGxk3mQaYnNgxYABTPyaywGEdmT5qqP5ScdcFb6",
  "key22": "aQPUTxTuZYKEcsrSNVQLDRF5waF2eFCNsyfJXLeEC5sY4VfGgFzQEUibUgWfBo8kNJGS2tZtCokne1xhFKPRSVo",
  "key23": "54URBB781cCompYEqCFXqxUUT6pAXc7Ecq6G5FTq1nPY388LTVk2AhTTvagvZLc2ceTdMk8ioagvcbBQSN5DPSb3",
  "key24": "BXU7dwnya2ccRxSs9SMdHz7S6aYFrYoGkJvyMfKhZUzX9kSDiUstNMjrQkNqxsKGMQnradLPxdXX1Vwb56QgZmH",
  "key25": "4JNnwJRn6khNYvhuiUdt4co6D1n4MEj86UXLZbgzsCZnAmpU6yrAyDwmjuShfQhP7XTeB2uea94VQaCoPuuTuYqK",
  "key26": "4sfL8nUYfU36Yy5owD8JeYsdtCcucngxGnv9ik22J8k1C2AVPswiZUbxW5681qkhDxMk62ymFeQTvTcLcjbH1Dtt",
  "key27": "4dTjwWpMxgtAqMy86iNcJt8D4sa7WW2HNXzEbXKcZaXGMJZkC3kEbFB1oxpgqWwCeQJwHDTfPdc8nF5WxeoUhm9a",
  "key28": "3X5tpXGoA8a3cjGt9xobydaNkk8HzqyrPtsySS8VbVSW8sXzbAKPNc1YSuNc2ud1aJcBz1YtPKaQydv2uRdJLkM3",
  "key29": "2smqpZ6uba3oQJFtDAG1PAkR3DwfnNfaDeFmmczU1HfLaAJQS5Eb4G6mS8mXH9fwGYzA5ntVduWwxoZjgHVgjBNa",
  "key30": "5fr5ZWweNiueaGoC2KEaMrZUizbspU5LZcrMJHrMNCtfW6adGskvdDbX3PHYuqBc7CX2mjinckyfUuX3KZMLeSek",
  "key31": "35KzKUsWyAWRbZs8K4NpDjhpD3BnLLQNRk8yXwudHuwMHZjVcePQ6mkppni78Edd4CD6V4ZfACXtHUwdVrX1RtSH",
  "key32": "3TAFjXoVSEeX2diytcvEfetjpFG8AjQ387hxBXCCZ65mEUzZW7ryevD9Zg6bjJVnkDHB5PSkRMvjXeGqz1m4XXt9",
  "key33": "4W2v1mgxvvgKXBPzEmVg3oyZ8Ujk1kYeeFvWUB3YjjDi1jsUBKWkc8v4wnioXaDvYjYtL3EFMQrV6MFyJ15DdKcw",
  "key34": "2VicmbcNsixNzX6SKbwPga6rnQm1qKrkZpVRyw9V7uwTZiDBAHNyVe7QdKt2MKhFwWvpNksncQagdsKCpmprDu7x",
  "key35": "4Aj2585p5xXRGWEPbYL8WLQ9N28H1HPSiHzSKWjKvFXHrf46QRWB79rU7EgCkwgEEdG6u8qZeqsGh9ViN63LirZf",
  "key36": "3AihfQnTwSFS2SsV7QTEPXQzyEW458n6V9z6NyA6TQYvJFiyDEzQBzUqDwmFGsHDfnSojisxw8NTCkgHsUXLg7qy",
  "key37": "3rtTn3knBeG57b4t91xruGW2FMH1enQG8dxtUV3oqEEDbLAaodv4y7QxuH7nLY5dN9jTkYsQ7XGoj89ykxCDHtCN"
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
