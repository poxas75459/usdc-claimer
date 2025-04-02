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
    "5RLrQoHMzV9D2DvLZAXvjNJkvRUAPzRnmA3hF2HtmNeR4Nr6zWQ6JMEUdUMm9u66VwZAChLKQ4KFaTp4uKrAAjB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BNfetAnBfswzofXsyBPFTtaJdR2iDESGq8fJf1mmyVniBRtZLug61uQAfsabpM8h83FSnoNeBGvT4DhHhJCfzyo",
  "key1": "49HxMP39Ss4WLK5FLJvufj8uiMrD59gWyTu1XoK3F4tu9impxDCcUQF1wiytB7Y1BvKrqGdHRxkUCS52KKUjB5ob",
  "key2": "dvYp22PtV1bNWRzS5pt374VxJqQwZuLxovA1HaxNYUySicnfSL6R8pXHfowFFTLLt558sc8fYQr7SCJwTVzTPAe",
  "key3": "4YB2XHYK7HzCHm7mbCxCywHHe2q2nYbkqiV7e7xDUxJ38pZ9SSEQFyDEsTtfGW6py8GumtG7aGUMFgw7GmocTFSh",
  "key4": "Gs3gBE1BxkkbN6RdThUFQ84cE5SyFKgrqkDfDjuXfPaBZvqzkut6Mu8pZAdfrNKa313tcexaG1JiyywZW7TTNhb",
  "key5": "5QyNiwg5Hu31weT3NS72j3pqyivXDyXwr5YdEPhPQwmHzgziZDYksd1oXUx9S3LFMb9BPjgG2AowJrPXpSNNqJoW",
  "key6": "4bHP9C5CMaqZyDh1HdfV2X1eSkpLVu4L2SCXa4hfQjeMzgExXeUVu19R7ZRKK65tjDUnWZHZLq2MGQ2mqBxK3qeX",
  "key7": "5PcEtAs81PqPsi1pLsSq7TkEZ3k8n4sMie84NoHhr6iNJY7w2m7aUhtDUec7KyL8bwzTDDyBRavf7UoGRCqv4QLv",
  "key8": "3GKkK2GJbcFc9HPD23Xm6us8ss8emBnWeKtJfSpUt14ccmZkm9bzbjfPi6EBR5AhbAeB5SNpyyu9qjzSkAuwMo7Y",
  "key9": "2TVxpk58JnNuByHk8b7AdEP6fLJJEg6wxW1Ff4xgFFC1KPBcSbBMQ5RLAYgJZ4rEGALAkbjywAQNFbbhzdzgReMC",
  "key10": "4kFMTmYWNHeGBnsBhLiGPi3XxmHt17UFEYmksC5JaE6aV2PfJLgvQ4jv4P99yyB7rDi92TUP3JrBXzxPco1khfbQ",
  "key11": "3UUcxYNHKbRKAJM2K1PTExSZfXSCuvoHdmnTWffiMME7WofzWdbu8c7TzrkGr2wkWAmVdbwYfJ73C9X32FJkirR2",
  "key12": "4QWYVE695bkzP5BbFqb8WCUUGmJZwQMVvPjD9daGLqxcaPtPMTP4NjUtZ1MaaESf3HvnL1mczkRF92MTGHKeid2F",
  "key13": "3Uq6pGar6MwcZUzNm9eWiwo71uyvrn86i3831GWh9VA2QC7mbtiGxisHGC9NhTTD9gCF4vSStZnvTnA61JsN4mLj",
  "key14": "5zqmQTNf3UXZ1d8kUh5Z6LNEH7MxFU24m4Kab34fqUzPgZdGqEvy8NbHmqfhkMgmTuGdaAcFdEcmAUhfTKFhg1e",
  "key15": "4ZszZDKApG3uvVMK2TNg19b4jLZ18hmdsjSuxgayCgZaBtfYtec5dV1PG82j6Ln4UZ3NCLBN3SJgqXyc73XBHtup",
  "key16": "k9oBwfbhtudViHtiuLghbcWHr3boNW6CYVRM18Ado7yHMjGWSr1XCum8MQFccZMLrYaANyGz3jZSz3AnPP79ehU",
  "key17": "3PC5fC4xjseRdJsogX5d8PpC3X2xvKjCWXyKAEgYZVs5HPjVJBnPrW12RKk23vsXS2wbouYTaFtzGsAat7MWdwbu",
  "key18": "5xFzAVh3Wq1PkJMGKnLmbuhwcn1TSeNvYD5XtNvEBteGkXhgaopXLPq2qvqTRaiMcerbpRZ3sxCCL3j4gxvcmdxx",
  "key19": "EKBT3xRwZHeuVxvKwsa5d7WeqmLrCEFRdWgxC8rKkkPhydTcewRE5irK181vh8G9YpphRERCQzE7vGZC4Wvk3kY",
  "key20": "2xczbRvkVqNwdXpE3gYNx6iU7iMwgEDs1dESVkvhFoHmrbEdtLMKB3uWWQBp2PmFp4jzrZMpKiHN8sFsd21hUswd",
  "key21": "2qbbHzzkQD9mqvXQvg6BVQ45fWxtZU3LNxNrSyKimfhcLUyqTAPepqk9NeUUAEfBKLpHFJ1A7PfJG6m6F3rPqVxL",
  "key22": "443P6si4sRrwXcr2vyTFikJoMLai1NqQgEFJXJTzrbycdgSCizP98qSJbwUwYKEBdm8TLB97pknw7V4ZS2NCmtxN",
  "key23": "56agT14rYJfxRPUHaGp5VjdwhjzRirf1Gxswz4XgSw5DNnAZeFshZG2knRvbrqBePELxW9fRCU7jjJbJbAjrgj9s",
  "key24": "2j3LUSoey1qNnw2bEacz746mNiAcF1CmZjCGEXQwrjSqywv5dMJ8gHKEpYrWEJC7BiMYurB6hYmCEbtWZGv28qA9",
  "key25": "2ZPbfKsE1XF2iT9Z4mSFzD5VspddzV2PqRi1oK56GCJWAvubpcewJSvkY54MZPXC7u9P6Lniof6Zg3T9LpBM8zKR",
  "key26": "2e9yT9qiVSkAKKNgZsRZ4sk8Wz3GJhfkuSNYD1joDHtQnvG4GhRZhXkJN36hc1BvrReuAqSC3gfGBKr3LFT2v2s9",
  "key27": "336CcfD9CZ3b7Qadzxfmjb39Ws3wRhdETWjSR4zU1sJNzAm5MDZUpC6nb5trUrBkoNCTy9aKMsAAdBoZ2zW1QeDC",
  "key28": "2kAxYJ5MzUk3R1v5zwey3f5VMSd6BnaSKMs222t7JM6jDuTm3osfspFjJHMEYGUTE8jrRe2N7brJ5P1MVCya7GJ7"
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
