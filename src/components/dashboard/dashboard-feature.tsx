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
    "4FUJTCzDk5WcjfE2sDrdqfBmkkaJwnC2Yodztz2nXJ8eedcydYBy4yktQoziRi9WYW9Fade3RY3RHLXrEZpLWZRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T5NqLjxvZr4ctSLBadfwf5ifN7JSvUUaWnhEwiGNq1QsowZRgEjYBBjqQyhMzLMS9mxiP2sCbK3Uq19imPs2kL6",
  "key1": "3Y1QEc4BgYf5zx1szVSZQtJVPTJHjSUvHUDME3NnzUXvPwuhiuixXWVTScfXHFa4wKsJsJxTvt6wSmCWWqYt2hoh",
  "key2": "5ykiWfz7iYrgvo8FUh8YvK5rcGzH7n1WrrNEK9joQjLqrJtEX2sgPNy1VuUAtEXtzjJHxAgUb8CeKyWVjCM1EuAo",
  "key3": "2QkJ4HA1Z4LQW9Ht6fQjP1jtGVcHgwggsV11XDXCeYQPwwNQ1ZiAWSb8uJ1d9RfSKBf8hdUvBzEoXZmRWAV54Gz9",
  "key4": "ae2VhMDfMVk5f3UX6betuzHRu3RK5Ua2FVAd4nUSfQpdNVXZiTtoFnbMJSmwFjYNgV7fVzYMqNDS7jyjUaDdGFc",
  "key5": "4tgU88oDzMDNUcstUgYZahLJBqYNEia7pJFRZWKqJ6JrnpB8pos1LkWFtETVrFTe9jvjCrGAFGe3fTEmH9i7iXJE",
  "key6": "39wKVK9x9cLmf7zTQtGKRWbWbpTNcxTAUd5a2qtpiS75jLUXVLncadYrQp4dE5WRc3mCdWo9uJJjJkSiT6rhxtSE",
  "key7": "613Nw5HD2U5bj5yqvmg9tfsJUYTZCMM8JysQ3PjP8eZZRfuepAG28kTt8k2UBQPC279JdpFq8zbWBMSz7qYebF92",
  "key8": "BWnaz4Pi5zaVcjuCFoxNoke74Nt1bsjLXamZbxHEPy4Hf8ZJ89aKXhCn1pFTVV8nnzWSHb4M2hwi4REtrE1VYMx",
  "key9": "WTgMDRmppZNsoCsFRUMXFZLwEZGTKECPMpSWJd2Qye64WemBDXs2b5J4nSp8yrSby7bEi4wKuDNJd5qrSz3fAkV",
  "key10": "2pP8F7Wi2Y1zvs2oEa7qdayJ7WiU7XNwevnWsZqd7aj9NL8sfYaCtehRD9i7gFKeJLwuDvJospPykrjCZusAfJvN",
  "key11": "3MezMyD38h9zgBnGt8GE8VBHVr4WtBJYhsFCTtnGLHtBFJKLExZsrb7eHEMnqTAjYdtveqFzLSJNP4Gn25nANSWp",
  "key12": "4CQaCYLTRe8otNubDVEN5dkxNpYDF2WfRNEesNKogw4DukUzw17AdAksA2bBZB2KtcySyGpAVfyXih29ntuN3EJU",
  "key13": "5NwVxNZVHNEGApM7Y8AEQwTfmtSwHpNGGfcwop82D5msgaybjuwYEkSwginokYScQ7WN8hUm4pJyuabbbqSNnaKs",
  "key14": "2nLoRJqhvVCWF8sRDbxHE9jGYXEgmdUHEkE3kscdZpy7yYmCjxyGsAmj18frzv3CiT3Uv36kTgdZGbMqYqRs1si8",
  "key15": "2ruY11NeCnKjhZg86bzsQyafip3JtLQ6rmKLuhtRQyi9WKfePNbpeqivhFcRcgnUKFXVDmke5ABtHp5HfHY9KnsG",
  "key16": "Q5KTTXLHMbdFxxuDJRrijXrArrgVRRBmqhA4eB9vCLuKWX2Nisqaa6q9AVS7tx2r1Gpk2vRykkiYqYCCnPHTjRn",
  "key17": "3CA1ij7Qrpc47RczJcQ7UqkK7d2433uLkzChgdk53f5HjH83afHDa9Wp1Qnft9StKnkZdx9dBJPc8j9ykR4uwaD2",
  "key18": "3inoXUSfhV7FChV9xMEaRvE6HJDpoqdxLEH7VjuQCUzkqeCmC158YmKk9f62ebn4CUKAiCMipACriTw4u7bVpJuw",
  "key19": "5wGxAygrWNwbCgLXsDxY9avxdADAwWGSFZG9LFGD2ZopyH6o9cNFsg2Tp4ghEVbrNjeA7Xpxru9qdThRLhHJ5Dbd",
  "key20": "i3VMw67VU6dhEeEy65qKnfViGCgr4PpecP2zhwBmbnpbgwfbe6sAZRS5ksiXF7ZkWXp983YMEshJgugDWsQyEbY",
  "key21": "5J8yWjYGRcLTqDp4Z8uRXEczX5SHjKwA3Lw68o1fNuRfbRzLCRQTecbQyyAzPj3LFkHdp4Bjwj6dXkvtHvcbiviZ",
  "key22": "4kmekBGBJXYxh3FmDRtH46nmPX6LapSs37QH5H15wEy7eWGtbtPEmd46LrdZdYsc6N6857iHpDXQDJUhToWPrMHV",
  "key23": "599aYjwurihgSMKhBLdbwW8d14cK6YvbzxZqfZ6NPYmmxf78M6TSFYE6GRSABA4aSZNjHQa1ULEUnfdH1SptMB6Z",
  "key24": "46WCZvvuATuugbRXAgxTEVRun2BovvTtojKZx4Xd11ig5U1LaVfVghbELb7emkrmdroXnVq57HcQoMHFTWTi2Dh3",
  "key25": "3sQZWVLURMBvTs5b363VXu3i2C6TJn4U612HdrS1m2fKWVc5PNK9pix2Fz16p3Vz8QEeNv8ZHhzP7sM3r3hdknop",
  "key26": "3RKrs18BGGYcqiQa7HyhiE9itmzYMbMg6tLVhDTE8HNWn9RcNjWEgxKESRWE2MwhLsrFeLKKSntjgAcVNcGdV5Hp",
  "key27": "5nieZoKPbo78vsjqrdYJ3agt2wsCKo5YZjTjL92yUyqNvPG1BsPX43eSfP92fWyVvWJMFWUgF53sS7FZjt42pcX6",
  "key28": "2gmcHw1Fn8DzF4URxQQpFgJUShgRR4XoRHcTZMTGzhC2UknxhyS2VPRrpdqSuUYpunQX3SgLVQ9jDU1g8C67Ch8D",
  "key29": "2mDxpiFsZbqtM4nry8ynWFcSn1ZHgDoQJNu68KeJtC5rkrEVUe8KVzrLjxiSKVbRN6GH82751LmTSiteKrNAS8Lo",
  "key30": "2M7S9Z4cALsUCsHYstkpaKqMhzEuxywD2xy24F1M2gyZ8nFqaUsHnshGpYjJWvyngKZokLWywa1zVPs7hUMdhTHQ",
  "key31": "3RNkoRrqb538H9tvB6Mb6W4EeuQsGVPDjE5UUZXf3xdvkMMW7GdMCyZ8Lf2YFyVcVTywSuF9gVKJUxjRkquedXBg",
  "key32": "3Gb1FD1sq18faLaLztVpDZLTmqDVtSfx4nR9FditmYzBugenEjLgvghxDsk9JxnXXfJwC1QRHdRtt2GqJAwTZQx6",
  "key33": "28PuKeuzAFB3yxpv6ZbJqxWhYkfupdLhWefUxEKxCfM63FQRRrpxaqaTxcFBbS99iGMHRNh57RS6G1xd2WUc2mJq",
  "key34": "3tenKkww1oU6ZhSiV2QmKTW5Q1MdgqLcXmLUeikdac1ykwZfNG6hv6TWcxGRTvxUZDQfUFiQdomUbWpSrbWvkXWi",
  "key35": "5oa4c1zvzuWwJ3KNZWUafJXyjcRGoySJLbzSWAJoTEt3tyMGsaRNSuAMeMeLk4BomyxcjW21EUYm1bcb7pd5bEjq",
  "key36": "5JD8LnHUZT3xVTEiYzR5R6YQDTizTGA1RYfCP4YHp36DiZwhrtgBbFgtPMjXuxvp1qzGRrWg2wdB92YRQHQbMGpS",
  "key37": "3XDRxwPESvkKsDprqeuQC3MA7DPaRJK7bSnond1J7SyN8Em8jrQEwDBMRV5bduXCpCsgPgrcjSC6DrukZJL4vSRx",
  "key38": "4MmtBmDqMNJkEcujqWe1ipMUtkBUU6Y25ps6XtjAx2b9VMMTTxKd6mDDkN9k7E3E4qna2pN8K58cqoqSkhgU5v7h",
  "key39": "446GSZkQv5F4RdpE6bjWs1DGhzmSdnANDjqgCeVA3FAg8wA416R97n2ZfzNVgWKKyPrFrh2jdBwCQnrRoykSEx7D"
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
