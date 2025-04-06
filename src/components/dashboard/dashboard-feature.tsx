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
    "5iv4pukevTnGVwFmwTcLKcvYA8wrvo4GZ52A96xpFkc2mMwup5eu32D7Dt94t9qZw62pXgZktB1oUXmQBjLRZqzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nm81u9xZbnBqgXxPELyRQuik2G6tcQaRug1C2VhUV86PTNAUtd7YV2zkpZgTsF1zAVkVsqbgXddNzUyZszvXozj",
  "key1": "58t8iojtRebSq47tideCXc5joZ5jVQka5Mqva6Gzrfyi6buvk8qWpu5mVDoZVSP15K5HXcmdNTcuNwCVdufddg3L",
  "key2": "2tJUh2X2gWpvQqFCYa3ctJ2M8icd7xJHhj3oXTZCVTF8EhbPVkvXaEfgTUR1teSJvpjHTS3z3QMJFhRwvFek4gh1",
  "key3": "5VfCG8kNnUjJaY8UxsDLYq1Xp3kNjTico2s1nuiy5NpntrRMFzwKAaE7bi5NuMCdQfJRsxynsByE7Qbz2FzPJ4pR",
  "key4": "4P3uneCCvW81c7twYkGkGPph4wCvw2JnReSxBmjayrCd8cg73SCpAwmEfhARfTRQzRj3nLAvr23kjqRSFCp2Kkr9",
  "key5": "4w5xxtpkhhJau42bYxpw5jV4pJZmopRBbrSqWEMtXuKJwe6zqTSUF56ZFq4UA3bKmoyjnfs5GiovzKMmzFwgz9wv",
  "key6": "5vTbXtUs5KzfiwVGetXDgL9VXAZ1oMB8VNWvRruTDrcCTF7tFbmENqbu2YtZxVWQmV2KLi164PDwzxKVhLafcj84",
  "key7": "2rDz3XJqsUV6cSu1zKUjDxMy2zeSXpBiW2AvjgQFFZhwRvJWSma2YpakhikoTV1RLoBzAxQqtZHSfm4MFQANUm2Y",
  "key8": "uJhy9oWayQFMUA6MMZLcKbtxJemfAK61wyk2AsT9azyQKsPpNdsG2oxxd3BWpwFhfJFvLAZ7A1fzuXwF1arUrUR",
  "key9": "3cGcQ9rVMr3qRtnXf39pRnbtYBCBXHrP8H3VNgPmS3kK21pfS211xZMJa1YYF9r89MvaTZX3gFiEp8wCbDWHtFLc",
  "key10": "23emYufqhbaP29qWgMjbAvXvW45gM76fTcJJH7BcVXdwUNeHhhhuktmTr82Bcfwzzeu9vwb32xwRmYd9Na2kbGsE",
  "key11": "4FWwLwZH1Dk2fGXEzwcmTQ22BpE3GPGg3pU7v7iQLGd99wN6LoyjKYmAu1yh2NQXYN1s4L5fiaK7PUwz5XvJJ2Vx",
  "key12": "3FUGw2zSaUEvkNmXiykWgQUN5nopD1Eaz51f3PhM7g4B67kPysRn45piSj6Fi6nC8oK8JpMSL1YLGXmsRtKdU4gf",
  "key13": "5EnK3uA41Mqmo92ZLXptVf72qio6rCZrgjcCjppR9tQgAPGe7aZFa2F8PsoDrfPmVk79hXZpWiqDfcaeegGcD66g",
  "key14": "51ipSPkQBdNTUCNvJJXPcKEzZYUee2t19W5v13W64jdHFGDjFFXBHK3Uc4QapVc1EEdSfDyLNe6jBUMiMN8EavPF",
  "key15": "hVRiR7wQhGSHCJ5xPp1hWVsej4DdvtDBScxi5j8vMNvUK3XGShEdYHHTh9L8fs5M7MzN7oTQpVE4NNvtAVa2CPu",
  "key16": "3ycJGG1YacCDzdKmgwErmtLJ16D1UcPU4ndC5veeZvNYzFsQgdRNXfw8p8bbHKhr6Sg8BTRcH9yXemSsMnor9CMV",
  "key17": "2BL85Zs746fxXXzZ6SEF25wRpkRVwCpaXcEGp4jbKKa2HrhAQRJVWWBLVHQJXtuHx2qGr9rpDK3yWio943VGPcCZ",
  "key18": "3aMmcJ3Z8Mkhb45hQXzWSQcik8bSuiVsXyJzGEWXxkKHGsb7FSMsbochWBzzqjjWNH4ZzvqUg8GbuNT6q2cB7MmJ",
  "key19": "2EtrhbD5to1sQuNVbZyiAcfxWw9pZRjDjZWj2vW5h52Qx8hHXkMPvCAqHgoBBnt9RjeixwgAnmnFEf1a7LsgMWFA",
  "key20": "23XGKMVifDHT3XprF1nmQYbREvF7ASrrNmA4icwuiUdmW4chUNVS4ySeo3WxsaMQmj7NBzRAqed9z7AgAiRnFyXj",
  "key21": "2W91oCXYSL5ykBRA2Room9WNYaDqRw1QyCigQ5Y9wwettzfZ5ioUazsUYyweo5a42oWuFFqruuLwoD3NWVPkT24p",
  "key22": "5jZyQkMnN1BFG8FrMwKtVq75Vzz47vtQoSA1bg7dFeiqojr5nxt3J38FbpqkyUujopD8TCbNYWoHSCufaHJJFXFc",
  "key23": "37xSPMPsHXFrbSaLNmd8fQaDs7YJYUbB2hJ24u4qAwY8uCynX5jd6RFyFfSYULgyC2c8bNdSxkqGY5NNhQzhAcVz",
  "key24": "2cGjWy7Y5A8ZN7mS3p4hiEFTgfiMFQRHevqFP1HW5HJ2NE4umWfvTsA8qLersnDJ9JwAFVzbQn18xDRCQPDJP9oX",
  "key25": "4anyuFovcRA8bt4oCozAaU2GybRU5TZv4JNcoXTpsBLvKEWsuASid9WJpZVcCf5uh6Z92QiLzFNVCYzbFZw38SSX",
  "key26": "5Eq1rSfYCacVzTmdE2EwEVtdyCmmWBoHkMG59NKh1RUqN9zKCwAUsSDV6SCvucyJYYMhKhjY6gPP5kPn11DXJzxa"
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
