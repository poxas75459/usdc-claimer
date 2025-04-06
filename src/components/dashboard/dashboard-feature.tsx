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
    "4Js2zP2ZiUbDLGiZ5ZaTTSfQXXunHKzThVEhHErhjKEjkTa5YxA4eSTSSTbWXvpNDbWrhSqef1Ap5tgoKokwyCxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oh2wKru45nLumDJATMFCUb6ULmXfSgFuEfXgfo9seumAKbz4HP17o4dwfe6gsT3E8mCXXxgL6yKdwLBneVBrwm3",
  "key1": "4vBYhs2h3HH3SMtTR6djCqthHX8i1iUSZkv7gHAC34C5Bd2pgdiPURoAUsSzFrvQKYtLsK3Zp5KZGj4hQJ97PrBz",
  "key2": "4v9vb8TDCNbNAusw1JAJcLKQtSFKRSGsjbJQLL47NtsjpdNSRkQrWHwa1A2GXTAuc9Hn66drnJwPa5hFwgSH1BMF",
  "key3": "4LRcKYYfwuvyxjdfoLx2ftT9cyMK27VGCwwU4ARLSN8xM6x6UqZVKVg41ozKpKxibQUJZArtkJdnDy6CDSsH6xse",
  "key4": "3APAdePU4i5DmHzWPfMTorz319WzsqmyqLjWt4Bf5Cs3xTwVdwP5BKZ5VCGfM8MhEbhp5aWtEnJza1oCum6vXWNy",
  "key5": "4f59pwZyEgA13R5LPSwfiyCenDHzjDyciZKu1xG3hBBkE4GapRwpyDLR9UQJy2EWPgW3BnEGEa1PcKPDa7yi2nda",
  "key6": "4g7PTum5XjwW1XUgrxT3oskfmoQRbLdp83EAZ3ocePVGyGuE5PqkuhdiLqAhoKcP4yxCYuVSVZcuuxuJnA5kLfic",
  "key7": "5aChGxb2E9XKXc9CRwoRmngbNwmy9KumExzt3qfixuA95B9GXHW9tpSqAAkooHP3YsziEwbZoLy6BY73hD72sxWd",
  "key8": "2U5v8ukLsrLRTm9ZSb5Di7Dp5JroPUoxpmfbT3EzZrHHjnKoZV9FjBty4wCT8M9kLq2YH8bxGnEEfmehjw5bca3D",
  "key9": "1DgpUta8my8DwJnvvgvix3xtngp3JpiwvJrLHTUUtvyQ3sFaVciBUW9z3DWTts9X2mTTk5EzzzVMZv5EzUEgXd3",
  "key10": "4rUwCTtJkJgrjs9ezp3qYRrckZXeyXuYu2RymDn1osbXMSCgGk6C1GAJGmWC4fgvmNutzfTGwTwd8WmoJd26sK8g",
  "key11": "JsGAMueoGUMaGXR8nCoyDfcLEuXm9yxvtYF93HTLm5VmbsaZ7ShK4j1vpbhBQcbi5TyiYRtjmvkK9EVokUcacjR",
  "key12": "tQpDFzrpmnUZatEq5ja9UpzfMJjabVd8xiiHVr5xzAiGYQ7pxh3Zk3aXfuVArQwCdJz1rPXnerLnp7dqRp9irUT",
  "key13": "ue24FpCFNFat7rQUgf3SZRKGLBpTS3JwuM5VyKYEVxJSxabR8n6FujiZRUx97XznMESCc7FR5cCnsyncvjFzG5A",
  "key14": "3RHgKBERRyWdExC4M4fB3gXD2kq1qpBf3ccF1Gv6UGQLn7G2wJd3X9N5TZc9JPbniKeix2poSnYyzAtjeC46v7JF",
  "key15": "2XHtUydtM7jQvBPS2UXcqvmNQwdawY6svMXMqoACyZ3DAtX8wFKE3f76N4sadbvnsyGLDZUVh98cdg9Jb3bRb56M",
  "key16": "66n1VwU1EzFNJ2nqicJ1J1VbMfwYMTdyqFUjQm8RT22dWqeJG7D5CfuC7Bzu4ihZj8P8j2PRfsnWZr2EYztpuGyU",
  "key17": "36xU4Fx6fhsC1anEuvD3LuS7ETxvWmuJDYr4xKwLVmVsX8RUALGheaeZGVzNc3aEoX5br6bVwKLwFTduEx9XmoYE",
  "key18": "ySzJjSKuih7nYymi4XDQTr2r4uKGtBt2qEQAfqQnjXmoVyX1cVg1YAU4ZP6C3FNMnMjsWEPA2iuoediM6yS3ash",
  "key19": "3p9XjxB2Bp1RJKvwr4F2SSxqwu8c3RKQPaWV6g5sPNskKQJamsCybUtgXBvqKMNbQqgKCtFsMpej59xe3PFeRku3",
  "key20": "65xJApvwdS5AkMAFLFU3WR3df1dS9afSLe8jCcNHtBR5yKpCGYFQhaRbtCnff3hAH2zW1ZdqeH16Lu9SMU8XUTew",
  "key21": "4g4dSv9jUXNC7EAJQjfcMaTPMznC5xfpynKMfvcHoVfRKVP5MKqBzmvDzNijB7psFbup9LtL9EtMCiQfMoKdNswP",
  "key22": "3gHDb54iS46UuTziXr92dkrx53X4jkrCiQ5jDeUqypFiRHR9jRRi1N1zDP7hcH7XPgRec4MpQYwuURT5LkUy5wYH",
  "key23": "23weAWQQkWa3Yh5QTHh2BGCiZ6VPuEqPre4TfRMt13mbUeNk8LRbGNaZ9QiMX5Uwg3UBp6G8826tezUJwqNSYsu1",
  "key24": "3xYVteeP4RaLh1GzpXG4fJgJsQ4H11MQSt8XYWmTX9jcSz3zGyBusxJxUcPHey9xE37riQGrXauMFrSkxwUDSsPS",
  "key25": "4eGFRVnkNJQmUg2hEQ8mMt7RgtoXvCRR94PeXZFfRo4182r46L5CrgsRLfqs1hJ92wM4NxxPnTa7iedjn5VWoped",
  "key26": "5LXcQKgG8yPs42pLnYh9STDKbBrymUFnEp6psZSbQiV8HkFYFwQdtbpTNDJqPsDfmKJzbjhC423W9wLUxha6ok3L"
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
