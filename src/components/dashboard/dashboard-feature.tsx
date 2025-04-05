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
    "4PY29mdD1xFPPjhETbq93Be8N6GqsyHxPzGmEgyjk4FYocGucXzL99JZVfY8js7mbYgMYpNxJQKsxpZ157o7FEAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C7f95hXTVhrh4uwZV9WjY43JPaMse4E7369wsStFnSMrCiHrw11nKMgZW1Pa21MRdQLi89ro87tKRNtiTxZbADn",
  "key1": "3arDMMCZTtVopXmoDcUBDozwtR1kBGKTU5cyEhtEoxM3eYTRs6h5N7UmaJq5fprXurHWFqhfW9mVS8Rn2gUsDZhK",
  "key2": "5h97D1dKu8FrFptWeGipAuL3DsJ4zENqkA98VPb17QtMMoQ5JPcMdLKaTencyrEJ8cFGLkeNijfs3p9QF2CieuSf",
  "key3": "2sYcPgj67LVxJ3botoVxvnbcm1vYmBUJLcZCvUfgHQM4MCZ2amgfGfwLCzE6swJrmpag6X8sMhYz2fWXA4cqb9RZ",
  "key4": "53Eh2H4bAPZKWgTnV9dqTW6nXV9Cp53pMP8gmwoXneVx5a7WCG63BL5MTzaJtWjwok2Xd8PYDzYor1v7RPQxqrRY",
  "key5": "4EMJBNi3DxfmukMZFC3cVSyDy4Ud9uYiMp613tkKaroXEmXaN6xDmZm1wxESoq99oDckoowyBuoPQWqAFVV9Ej3t",
  "key6": "4uizfbJUunhrFAtXdLnfH7AYmn4cSjFtXaVMQ8KiZhqGTqvDRa8s1xTH6ZHDovaT8UFuNZhLQSxTNPc5jfursTx3",
  "key7": "4DvMrzwrSVb3SiYg7Pqi6UqAC6zGTR64rxtW6eV5GLpzoKwXbAEKrLVsu1V7VPaTirJrSd3PEGdtBM3f7F2S28F6",
  "key8": "2k9hkmBT4rjfKngbXfGDuJujjRmnK6QBwXYiQiWF9n3oCJJCdnbVFEWbY2FFjQu9wHzMTk1yoq1ZjkyJRiMzT7bs",
  "key9": "5XV56ZcSZYQpK7ChkvFtF7GLKW4urDuNVhUoP2SGdfzQewzs8DJvQybsVZ2h6rnAEzuArj1eTGDVbSyxxwwgtgf",
  "key10": "58uubk2yLjYEGanppsTxGzsJ9yC7vDrvQdXPzHgfa822D9SBDYnDY4MV3J4FAYUMnUcbHucRTiZ3gtb8VaLMHeHb",
  "key11": "rELYrPuM6jF5ynJEr7Uusy23Jje1A2mmNqyyYxtNoYfKTLWqjifT6DF1NRGVWgSq85pAtDeNkJv5K4Df17EPLqq",
  "key12": "3i5EsKtzPCwnSBds4F2LLX6sxawmqhWsP2iH7grJ5Ai9y5uJV8o61xKZiKBfFMNEnAegMKVhWw3CDTUW9TUTLk4P",
  "key13": "4pBGsG6TSFoRhWrXnMDFqjVg2BMk7uh7NB2wAAjkmThWth4QMWteei12HVFC2QCZ3B9JWACi9TdBarz5PejHVboF",
  "key14": "45U81MdsLsUFSNyxiQk3gkcq1T4fgdQ5YgbewuYWk3ZvdH3RnWhCrGSGcTQ7xuSSVqX6i39FjoNN9tcTitXpuGNS",
  "key15": "4UQ6QiPB8P5YcNETFgvGxnHXNG9m3RTqnCDYHSHdAAcUoVUcJHzg2g3F48KGNQBMCswSb8buMyJuPKvvhtYA6CGo",
  "key16": "4RMDmCSiVNmfos4992QHE6eQmwYacdsdcYc65K3coGLJ7xfEDj1jmL2NnaZ4YhuEvPUHA4SSf57ssnRY2czbALyR",
  "key17": "4xvHQnAjDwZxpBereRk5Bqk33TAmzvL15ZMTscJdrfWfx3i3LXMrraSiNqGPQVrm8L6mFJRZXXTzw5yX2ZWBk6Hz",
  "key18": "4bVGpzr4Xv67LLT88XH3vtTkK7VWY4jU4sar7JPpHrBzkdiNDNpeUZsDh8eQQAcXkwvtesxKKjfr86yrZx89FzrK",
  "key19": "xVnTXtYc7p7jD7tatUb9i7Zee7eCvKrLJyXC8ZdKv5ydYPTf1wBhUQULjJgEPLce2XjmitsxwaCzsQ9vkfPHJzy",
  "key20": "3sMWqY6fS8e6aQimRDve2RmrvNxoE4aJNTuWXeKMQU6yQp9L6KZ57MComFFTeDaqzb4BCAguN5GamTwrfXLm3NGE",
  "key21": "64gM12MSTeM7AUsbUGAfxLxYmwQToUdEi4aACtK64En7DbqXJRkp8QE2g6VqcQr484U5zzcVeYYUgy42H1Sz9ZYz",
  "key22": "xGmTDqwXgXXPRhJUMAw9KwCj9MFtEEHoJPbx13nLgwkyEnHirhBtUGoZgtHWTdtW7WTXkDGUbQc19WVaRTjxX2Y",
  "key23": "5mCQg4aUZGnFUd93sRYRmdspfa6B1itjn9HynhZfUB5oGtv1VuZmsx8y2wqbgMAypS4mJX6hURP4bCKzA4Yn3Pyf",
  "key24": "4i9NrgT99tqXjPV4vfx2BixQ6w4gSNY2yASMTo6dS6j6NYxuS3XmSFvSKbYNjvPbPBCuRdnhnS941PwpouNzw8t7",
  "key25": "2dkC3C1ucCco7x3Rq2cgcehjzgLFPWbTUJuf96M9m9CoFBdYdmippMPTRUSMDcopG8ezz8hqn8ZGdGUAhRNzH26N",
  "key26": "3yUBzBjQQpnr46wZqDWYdzFYyxzrqYyFjWD1SW5hLfMMQbDqSzbmBRqGghr2T6KosePM8n3667f4WXVH6k2sVD1V",
  "key27": "uDngQTnupKJSrun4nP7B1JFNpRN33ukkeVyp3vFue1pV7vS9V9RtfftYe3LNz1Jo8d1EWbq6etr3kGyJhX2uAZa"
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
