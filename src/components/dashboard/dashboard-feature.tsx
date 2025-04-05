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
    "4uN4EBgFnTRxry35QaXd3Fn5SznEymnnXtin9PjqKJTDEeRCgtiM8CTKrKxBFrG9PfrR9onwq5sCAuchKAQhNk8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EUPPyFyN23oA7rXDekrT9thpJE6mAf6zCjop2dqzqPQnHigkueRBVsie1R64rkstcCAK9JmHmFcYSNHKvv2xZ78",
  "key1": "2x673Wp5nLoPm72bjSkJuPZ75haHhjFBpNFKswHHASLzkPBsNASS6SyGrkSbNUFcKHow2RhsDvyuZSTuEfd3MXyk",
  "key2": "3Z71w5fqAt1MqmaxzWCeqq2vLdhqHau42cCAKUTEJkrrJk6MWfFVh5tySuuPRY41pX23zYdUdbSXCMQ5aVDHyzhw",
  "key3": "5r7A5PMyzaYXd1vJGTR7LZiuMhBodF8HwSPVe8ZbKE1Dc6hqEKfNqQeifwgno1LbFwqsbGoq2Qnx3fBHs4nTqp7r",
  "key4": "5bjGbLeoGyiFXX3sRa2SNRnCg29kXGpMSjWL3psr9nL7JYmbSVCYfekDeFsMyUy1Drw789fr9voJ8TCpn63tz6wB",
  "key5": "2ic6AFaZfRB23hjQBPE35Vk3C9K6SN3AXKrAQZYYqkNrxPcLGTKKc6ut5v832K5yHDXrz1QFBpA7cCBvdEJKCAtg",
  "key6": "2m9MdBxkCWrBHKn76n8LZRvEKjNfmszBkz5ku2ovf3tFF1LmasWYe5c1979X1cNymRkyGgj7W2ZHUPBc2juh8AMY",
  "key7": "hrCwvsJqKnKkFVsR32qMrCRGuMToGBc4VXWtpe64j83KZ7ppnjmbNaR8QsMw5mqb4r1cRmCDKcPiNrgkaQhYZch",
  "key8": "4QdW2mG2dSx9qJ5i1njvwW7t4sYnNf2EaCXWgrKiULvoSAZ4nvmdM8Y9ANWhjNyaBF8gRPBN4nsqxxP2GbEiazia",
  "key9": "gAdEvQTEFMFK15LL5GiCjzeMVnU9s6eDurjQDT6EmZo6hBKRktkvTFbxctnrf95PzDtc7sKYr32bLAmpRWPoeoH",
  "key10": "3Dwr6JYJLdrcgyLmk54jDWsUmTWtCyzT5RSQZJoW4LaEFDhcmt8t4sXntzoVUDC4p9MMbM3vQS6WAZiskvVHCufU",
  "key11": "4mYw9muy2UPxxLGawd25818dGFQpPcSfcmFhc1Q2x8AxyEZJqKBDbAtSMpBSokYBMGXwBw3MwuB7mWGHgDwPZPFu",
  "key12": "4LegZDBM64oiQvtvxHx7oMyAdSSir4tZMqg4EdUPU17RXExJ38K7gzh3CLQdP5UKfUeunshgXfS5DERtmzWSkZyb",
  "key13": "2ngxdrgVy21xxsABPbtRoCbpx3HyoHPJNm6EugFozp1Rrnk78PnDLSgxgEwG1etKjpPqsUtbJSFLb6shhiop4D9c",
  "key14": "3BQ4VeKw4rDKDeFSG2WZom7qtNvtVmKWf8NGish4FhNWTxSQhCrMtzugWuDPxTwzHR6Zb39urwcEMhK6KVf5bqnC",
  "key15": "5eM28XkU3CxeFuSmvFRNa4WbqgVoyThmEWUTiEjBRB5ziz9d5wtxgdmhiGAAQUW86boQPTgDh4nruG9jSdDoLtNC",
  "key16": "54BC6CbcwLpfuqLhYWC89v8BXxbtW8LDgYXEjjcFyGFVX2U7fkfM9CLQ6EXhVpybRMi5Et6j65ybNTg8c53UsMJb",
  "key17": "63BACZj7kc19jg582fj7DJ5oSPpeoWJ2zj7TyeWUSVX1SMLjwZSJ3vy3oXVV2gFffp3rPbDLYgDJhqDsGNf2sUyb",
  "key18": "2W9FSa9Sbcg9qSA3wRjtAUC6nMGTiK762LqbxMVbG5M5EZKnPUKvFBhYCYcSUvWj4zV22P3AgpEGcc2GiHr9D1iZ",
  "key19": "5CKqUMTG2kZbuzRB5YKVd8Pmh84VBebexf2YFLihmFhEgPaHb6tYZd3Bs4Pxu4LpWJGxF9Gh5sPHfNDkr5dYfzTN",
  "key20": "EYyfPH2oBBo5PE4h2afsW9LyqPcNATJRvzULnBoVRBJrc65bRtwXrgnrVUXUW6XCE7gLXWpKw3BYhSh7GQQa8DB",
  "key21": "5CtAovYw5ahdGrvWiKxoVh7AZvsGTtJw5s6FWYoQhmDJkNbo6NxdU43C5YwmrKprERY5wRDYwRNfPny3Z1K6P44",
  "key22": "QTKQ5sdyiviFRxXEW2zmQbyo4sQ8RZYpU3LHvBAy9P5ai96y1QaB9v1Lk86akvBG5r8dUopsSgnzxe9jqJyx7ct",
  "key23": "62QDRugEdTnWdYzc1xdLqjLiDkonEg5qHDqCPqYnsGUAY7tGUEAPDRTPAhKhQVzd3aBGLPrN9HL3BncuqqH69y9r",
  "key24": "oyqGrodqpXwnhJbRsjkic77JhUgzxKtmFFWo65uSS1idJrWsCt1xFY25z4E6CnKra5by2Mbde6hp2dpwFQUfZ2j",
  "key25": "Ug6TrmJz5zguYZ5HoS2XqJ2bGnWBKNyeP9f5VcbDS269aDsjpS8Xnz7WCXZVsuXs4zk8kSiEUgFMgMw95oi4WU2",
  "key26": "3gtKfakXrGTJxctMSf6jbdZavmd2sargZu7UYxjuGq2obGb9V1GWgbGh6xS4gaZj6NcCpXqCqQXqym197CJgsQPL",
  "key27": "vYF46CwivoRBdXLHrtE3XCB5R7LsaXRRUA12TCYYw5uzHSzijG1SUsTupvmQWc5Ug6b1eSyEdjJyaAd1BqLsY65",
  "key28": "4ffYpYxyAjBpUNUvBHo6kWrhKtTbfhVJjHi9bvpuKDx2vXfc7ZBEkwe8j8UKu4L8akqiYkzPAF78GGFxwfxwaDMz",
  "key29": "4VVLa3Hg6CcfVqc8XvSUzU3YJwJKdHygT17bs4CkM73AoPzyMpWwE8VavdUhHL7Y9iSPzniibt1C3s53BM4fn8jZ",
  "key30": "2NkQcx5hCQvzMevD5ymDKHDvSJ7ojtdEN793jiyge7kTb3aJxzC4EXntXJ6xQmk5qJSFYmna9JSg9E1x9trbp75Y",
  "key31": "3UgPH1brvXcrvmwK9hM3mSvHzqrQTyMEvSYCXxtDc3bYUq45wMUie3Tg3aMEALvSXbhzMajsX7YXsYQkvYAVdKc9",
  "key32": "5Ens9jqui2qSC3ppCQDR3vbiL8X4wQ3xUFYBVLynbs26LqcEKUorrzS3UYmZ9veBB6F4bvhHqWG3ZrMS4L4i8cwt",
  "key33": "Fkfaxdd9owdGBK8aHpugDuXtyLWi3TNbMhrkCAuE5dUcQFRNdSFNDGxV8dLGLpH2auK7NxuPa91NjcVpcYysbr3"
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
