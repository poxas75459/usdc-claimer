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
    "4ZWDSQDdcd3fDjMCwzsVMxvKimC6oaXkALK3v1DYfSiNccttAbghK6MGWqkREFoc519iubpXhrvBhnmXH8U3jgeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49YVK2cZr3HS6RFgVoVRmioKLmVS72sncTQhiYSXT24eidhGpeqLC4W1r552NbwKyK7HEps5t1MtwNjLuheiowWY",
  "key1": "4YEYB5T1svpG1tjVDRx7Y7jSHK6AjC4nk8aQ1AxwS1VcKNtsHXa4Nf8BMa9Sizdqe5Pgi5Zj8H2Emz7inoHRMrvm",
  "key2": "3CdgZTNHW9zuWu5NGsgCxKUB71PYuJF9yY7c53WukvdVbz3vrVw3qKudbuU8FX8CGuA27WzrzBDfREPkAJ4hi2V1",
  "key3": "4zYdiizt1nCvhiDtkLrpCn8VsGWch4xAAFAhWYodt3uYmvckG1vBigX9dbPDipXSF3FYA9XcJtSB7GmpwQ3JZY2S",
  "key4": "37L34sEX3rLH8sKVsPrLKLaChwBYrApavZwiSH1gj1wx7zk18vmpzGWaRdxCEmtXPUMSMSWkymmsSuFZUfSXArVS",
  "key5": "cCMo5qjHKjLmF5ugmHeK68kb9sb2vjtPkEYmmWZjjcSB1BsxSoTdaxdm7rrBGjj72yEWjQMJrscYtPuz7EdJWUV",
  "key6": "5FkdHe6DohbPoq4Kszrspq2NXJNhupSpyv4SF12YSiwpj2XTXPEV3rA7HswNC8QE4QzFZASnY7Xkgu3TuP35Mmwz",
  "key7": "2iWXvQfp52kwepJqCNPwsjCrZ3ZvjapxjFSLy4XVEfhA3wznVM93yxUKcYaQt91g94w3ThH61X9sMuEfkR9cZFZy",
  "key8": "4LpE9nog5T8Uxj8oH4kCg3buViyYcjuJqw97TfPoFNZkuHVgyo45vLhUnDrVRFmh6NcTA11QzHmV8rMuJqNRmKzZ",
  "key9": "5ZKXvXm5wq1veXc2wQw2KSwPs3RYj5dKm4u5k2YbPVCib3c6PaSdZvyC6Wgob4StbvtqzEF5QFih3k8araNZWxVq",
  "key10": "5hUE6QpyyUTWxRp1N97CL225GxvU8CnAQHcJrPsryuc7TcKQNrXXkUKhjFTpuFAM7G5Nb8i9teNKX5uqoRMTnQzs",
  "key11": "5RW4L4M1bC6AAFPwXLVaH5xitGaX5HsHexvvMriVTsFsTqbae8Y1G69nf2ewWXrzLbXzD8PYN528y3X5W6T9UeDj",
  "key12": "5c5VT7zHocgrcNHktvmMBjzHTdwvH2i95ufrNoz3YWKNxAhGA824URZYRDAx2D9cTZUtdAZtmMBmJHWXBaEpWQmM",
  "key13": "2SwK5mUzDeHPBFvtLVWuWMHAsyt88RUc1qKauk9qsy26UEyavppj8asPdFSM2moVVsEZjerbFsJXKKNXU6miPx91",
  "key14": "2HQK333tSXGGvA5phcYnwNBrmkpqwYCeMh4Aby8Jnrszk6UbXMHKPAgu2oQLqqgj55CuQ6pGXqKzupWtnsBKffY3",
  "key15": "65PPsoT4T7nhfMNbw15akM7SGxwQs4vdGxu3JMLg7CtzUShdUxgmdYq3mLneKGYigxDHUaZBEbFYLVejZgfKNu7s",
  "key16": "5NaSTXmh2kEAJYZnscAjMTAwya7QzwPMmhWQ5x7gQ11426EgFGKqnws4XVNWHcDNATAvgGidbhsUB8DCw3ZisNgM",
  "key17": "cytzmKE4uP2pjgUQcQHGSCnhBECwxfLX8omNCHLB6K9mfpkxaW4uTE2XB52HYC3UmbzU4eE7J5a8NUS7S6A3Doi",
  "key18": "2QJLU5uxkfw4ep9H6Eghh4zeHxDk6fZAZfh8EvSZgD39BZQ6kqhfPAqJT5CiYGfA5WWKbU5GR5wBA562HD5dMouL",
  "key19": "4i8wCbctNFdsPiNchpN2xRncsGmWeMZcrpG4DxfLQWiyBXaF78YX4DtSUjB29nSY4m9UFixGVJnvrFDjy5p7buCE",
  "key20": "va5WcyURvNTVoNTM4BgwufMXN6pbSVmCKN8kFmwtPTQGcGjrxhwurEfrMcXnPMbVjUG78sgQJL4XV95sDmAenBw",
  "key21": "2hbcYP6MzZN3c2eUMipJYz4F4QtWnnzNqsEifspfkoYcfx5hi3D8e9DMV53iYNsYt3rAZmikEk1tgVCbfVjydxF5",
  "key22": "5QkqKoLwbgeyyznMKq4EymrQXNif3gQJkVAhppnqeG52agiBzaj3sxNYTYwrgLfNwEh4tqSDsdz2n5qQvrhV3E2d",
  "key23": "47JFC11rcvaQkbpxxdfYQ5tB94PYXgcYNJgWsz8XcznPLPtXrj4BXTrjxpPJbADo3HtNMjKQRrjnBnryPLozChPS",
  "key24": "4kMJ1GVPTp3SV79AkmpZp6dTsCKqQKWh86YphMzMeTJqHHEKhvTXnqy7DZdkM5oubVz1NXWgqjGvpv5jVTQJTRQi",
  "key25": "4AHSGPAPvNMWwQJtMcC567fdecCpdzZ9VAV7cKc3Fz4en8crjJi7Qkgu16KdUfi5iNKyADBg9o7pXLby7gDHrWs",
  "key26": "56kHQERya7sWFUx27LtewKUzc1JLvdWg8mnx3brQUDERGpbmNLjr6bBi9FYC48uHyx12eULzQCDWHhTDLyeqzPPE",
  "key27": "2RYkawjfMXdETyXoAoYVmnpFPubJ1EvZq2Br8jgaHtnQ3WrhTnzD55JWJajnbq9ysBy716FabS7T8189w3HGaPAC",
  "key28": "5fyVjTBqTo2wmqZHYykfbBfFj7FR2Ph9JS369vKxw9Dn7FbW365TSXdYhSqKbPm6435gWo3tXPEKewcJQ2HU4n6A",
  "key29": "2JptJVj2a5XAPfQbyMFQXsRUP1HtRYS2PScjurZqfWDd5EqMA3QJxTRdPhuAso4ckTFkUZphPwrvhpNnAS95rBC5",
  "key30": "kzyYBd23d4YpLVVFFWn4StTfAsaHUbACbyveZ9nQEbH6oEcUM6WueCUqDHKCsTTBf6ZCaue3Djco9Zw6VM4fRBS",
  "key31": "54TkKV68inub3StfiYJw1sfef8y4b7qLmp8NkALCmxr9prCMh2xyZiVkBVJGp4rkqRHrA465fM9HtJxCaPPBmZta",
  "key32": "2466BtirXxM3KveYCNPJmQqrA9cNPZ45Wb9reMEpx2YFHrBZMNBPYKcbBSTNgF1CzSAXyMMZeDNU4rQVUUGrN2Ud",
  "key33": "2BnbnPD3KzogSu4XEVh9p2Pija6JbmVT37VprvUknaiThACCMVhXv6xNTpeTSPwk3wFN24XEKdsQYhUDcZfuTywb",
  "key34": "4K1iWLMVP1RyvQPEbPvz7u9oCLc9Qv9k52Bp4WNWxteesZJgVmf5jW5KVm3RPv4t21zPxetzuUdQTt8UZnVweZTt"
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
