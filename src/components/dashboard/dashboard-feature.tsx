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
    "3AmR2CXCp1qiUMZ3zzXBfov9sa8PNUJHnrSt7YyBWUzTXs3JW29fa3uYVMyMZiuHj7z4eWBv8bFSW7EfH5s5NXmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25tugCj4AppXq1Di6acnn2NZSmfKLAcod4VK26WFv9ubG62JxgwWr7Wzz8VaoqGpNjurnV4qcx2cHASvv2LzQXFp",
  "key1": "uKDRHVKUgD4LNfADhoeJeiyykYV5mKWF4jnoRGyrCmKfX2hiCJJYgkxbiwpabnisvZY8u74YjmUbbahmms3rrmq",
  "key2": "59KzVcAHjSqX6Tr7rm8ZmBfsAoG9SykY45iBcfbeFmTt9QZpGG6UkPeZTo3mbhDixf8JudrVnpTNsDkwnZdH1xc7",
  "key3": "58KTSzeeEBsBwmYQBra8MsVVAP92mXFUQU6oAAwhe9YwBVk39uyDHwe3kSSehogbGPyhFNdrpvWNTuPseaom2Hp5",
  "key4": "5EJjYMJea5QXAt6sdxS1jXMPai8PCDFYv6RN98oWeABx3GVQzjppamMMAzAo74rz8QSK6fCULdVeSv5ChPwmNWQQ",
  "key5": "sKRRFzejN59UptxoKidftsgbi1DdjTbaUWswETw2WFwG1c1EdRWhXgxB5qsBVA7jxAB9PJWUE6Wi5cvDGw4j9YL",
  "key6": "51Ny2bH5FuC3V3Z4JUtyTTtEmo9b2QYJqThShri2Rr2is5xduswpUytTNb7Xnv1iz3NMfGHGb4duzhpAc5WHYxtz",
  "key7": "mTTsGnFmELkUCfmR3ruLqN2gmidKV4JPrMsneADFd4cKVLXLhRnQrbzjF1d6eyc68dRRp61AJ7mGPvbkMG2pANQ",
  "key8": "5GTjXb8DY2D1i1UbXWi9s8HZPDeWJmL6QNRnDAHTTaJCxsPPNReuhhKhwkAHXdqF481M1SGibXTTLrjhvAkZix1g",
  "key9": "4GgQx72NCgSEPCkDzBhRUdWzxZRgg2HwkcaJdA4ZgVK7RpBdRaAxUVxKt8UUQMoQgqBDspinVxLbjpUQAj2KtvrF",
  "key10": "56nhXp3DXRSHZjxJJP8C3oR6giPg9GBLXWL5BfUbg2oExnaLxrpSQSLFqLun9wByBQZsaw3E4WaEeEWzNjCxSZm2",
  "key11": "5dAV3fTvTUkaAw5qPmoTKUbf89yXg9iMC7dzcH8ottJpTgf4EodS9Csk47DJMFn8X7g4etGu5NHvuv1pYsJpopqb",
  "key12": "4JK9FmJB9q1c1t3yoLmnNZBroJiXi2EzWLK2jN53pb9qLWVzLqGXbsDcfSAZFLq2XyhAnACnxmaaD4RTSRHdAW3s",
  "key13": "NrdqfdyXwzJJpQCGuEwRABJmPxNX3eaWFymACi2Z7aduUBw7TkUkDiDeeNcjrXwQ9yAAJ8WYaJn24wNTtY5FsT8",
  "key14": "57QrirGeMczRVF8EyF13VShGvYURsUaQ3rmGukye66b4VzHkvuHyKA8gi53ycFUt8gzgJvrr1e2J1eKPtKnhpUd4",
  "key15": "3GfHRJs495pMAicNHDQUQv5kdm8Y6kUNFnnkbHHq9w7sCMAr3gELG2euA1b4Yg7Mb2c8f9RDj3YCaf17rjeqTFvx",
  "key16": "4SjteQxan1YmThjUBo7Favgdq7wt9bZ4zGBbmd8W7sWJkeijMcMMDPzEaFo9ZPX5jEDXjKsYta9bUX7aBKUxxnFJ",
  "key17": "2BuWHeT5pX6jt4AwApeok629L7pDyKysBATvKxTjX8rvZD1kRrrjBDC7XZtD7zNiF81YhKbD7c6fff2KhWJUqktv",
  "key18": "2F1vxabtk5mC3HxKH8JqAnc8R3LGW4a9WBkdBYP5HRjW2nUVgpiGyVux5KsWJKcYBRLyiHbcg6SZJvo7Y6ZnskrR",
  "key19": "2uoMXUwEmTeci48KPjoQqKyFgoeHZyDLp1Qqq3TGVK1JVAbPr8sBR6t3x46ZrLbCERV6zk9LCvJwwPvkws1ArN1",
  "key20": "2phEuBQvdfbw1m2pGMviyhd99v7q1Rq5spv5B3BLx8QPPKM3kgz2s19hheJzWyeBWtqEjnBAV6M2B2tn7mLuNGsG",
  "key21": "4XsKTQ4dLCJGDky6cQHo7oiVyGzWniBigSLciFGQ4xRHU8z1AbPc5fQxyG3zT7Zmr4G5AwZirZMDAp6j8uSUzv9",
  "key22": "54PYMaw1XynXBYc6G7cLFruaW8W5nzcLw13kwp4SRCB1dhoqFfw9gpxFkbZ8xbhqS763bF8WLmicm5UB9CfuyBaC",
  "key23": "29zBxuDyimT29v5oxiMh2GAYA3aeLX9rpL4Bs341iXN3MJGS3v6aEHGxXG3YRyZGgC7WNEKaaHQmMaqL5YvqH9so",
  "key24": "3Cw73SXqvUE9eUBsaembawVthB8JZ5hAAvLYeYBSsM2kQM5mJePBiw2HD9t9kfQHivNr9QRZJjXUVgwYQR7xAqD1",
  "key25": "5d7vk9w72k5kdTxAWeQmg8Nz38aeKo7PYCqFmEfh7CmujRr687nqFMzkYFHXNJ58adNFK4N1gPQW6n1E8gLL217p",
  "key26": "3K3LPpjedwpekJMfje84hJ5crNYH6agapDycPJu2UEtvVmosQi6njT14SfsgeBHQe1qq3qKooyfMUKcj22dBD9if",
  "key27": "5xNsJXBswuhNQJ12hc61ZKaQoPETcoyMT7XTJSL7FtuG6vRA7DJ3nvDbR2a7pwCYshZFcC2LHymny2wQ2oJPaPRe",
  "key28": "5yUQhZLQppL4USufGJbWrxeFMbcS6fMrBqr4NmvJw8h8REzHkDnbGLxZ4MfivUHGDTRBcdte7LfYPyJRepWginKy",
  "key29": "CEyb1KiSLQzqmV6uca2LoTE7YUmDX9Qvfuggvmu6vrvQM7PSfGHz5iKNwxvX4qPNZUSQ1Eve6KaEwHemQfjYoFR",
  "key30": "nHgJtwzbAiYXjmsGVMP7c7PHbSYxN8H3BLv89WKfTCL4xyZ3Fst6EuL7ux6V8u4GEArf6Nxuc43yvZjWu1yVnLE",
  "key31": "hrsJ21SnGuP4Lm2Dp2G673U5iGQSC8rwgtDbZthtkanXHCNupbqN8egjB5PqysJhdh7JMcBRzYwmWowW16uyABK",
  "key32": "45yu5yRzh2EAJ6tGFj66JMoDk1C9gimdJYeSpSPKyR3fzFUh4XpxyWhucafJ629WS6VGXUHFurtcarL3LKQLXY73"
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
