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
    "3r4kXv4A4qUwRWPaFLhYqf5KLq26qu5s5a42JDnBGegbF4cAb8HMsHN4cmWrtTfbx8mucUmorLpANRXLum8rcMJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F4JErvuyVU2VkYNNhFTfdn886ZgzZvJiXFsU6DxSbQzi1rYmaSESYnseiCkPZrvKFKa358K7skNsmp6yuGLQPCU",
  "key1": "CZ45GP935m34VysqZx5Bez81J3wY5m49qNo7GFzmRWUerLAa6zXF9HJjggXvx2rp2ire6Rkkh5myi1xkvrt4JDK",
  "key2": "3zK4LkXNNbYKQAbSfyjXaNr9m5gezhXEaYMPywNQ9zgo5uh2GRwhjY5qRA18bTjmLpM4EfhoGi8G9D9NQQzCwKRp",
  "key3": "2gae5xkB2h4imVjZNpKzQioF46cVxq3q9iNTLpotYCt8ciSKjgwCpfcUpw2vFu87sbVSkUyprLouX78gtAN4Kwmh",
  "key4": "DQ5FfN3xmP8ZYZvyMsDovVoKRgReYBB3BFuxZbjfWsy4zrMimyBQ23fVXVFzcX6JegPKnnwpygTm3aHMkraZkdK",
  "key5": "3BtEggWNHswYVYqpjx9AXJWgiNQ8XFEVHUGAWN64fKtcJzM3wwP1Q5gHkxyVDMcw7fK4rL7YvGDXCbmpkeAHJi1G",
  "key6": "5JrZ7oQ3RKECwjmzD8UnUSTySp8b17akvBZXR8UsB6A8THZ7eWE5aMrZV65y1Vo6tv3KmyLnu35CW2QDWopqkLK7",
  "key7": "2qwgTJLi7UvCKfYwErVHYBwEqxvK5P9bWj4DWYDVSo1nF2wrfbVguxxNe6qXq9FEtMW6YnamiuS5xCh14dHaBS3z",
  "key8": "5NbRravhL2djJFdvRkrUJ83eaaxR63vw7WrK2ETcTh35MVjirtn3tfcbgq3jUC1uSqKF73ZpDG3owGcYWXmdBKZ1",
  "key9": "5A9MeuDV9F8vi7RCRMBkyDf6RjTJasQmqnUj1JgMexFra9ct1oy3hUe7iziP2bpUQDxwYtPwQV1sH1bNHHsgLsPy",
  "key10": "5zrZwDyKWkpFYhMWgrNsZtg9VMuoBZ8j6sNXVv926fKUpZ8digfZLgbhmZCkD75FPmSvHnB4R7fewJmx8sbetzd7",
  "key11": "3FSWBW2pvcmuZeZQvmzdVGnJQgKtCbJzbh4rovKHQ5F3x9ywXp5kW4hgc32FvECsQJ9W2AUHmT4BUNqY8QXa4TNp",
  "key12": "2aN3Lftr52RxcNUNB6cUUvphKfq3jnshhKdFmBzMau5X7rvSjQVgpEYk6J7DqLRGdRbhxyKKZkq9TWU2Yy7BfMyn",
  "key13": "z6DDYuFH98D9RfW2tUnvN12nwpMVfpJHQ4gPozuXYBmhjLn2zQQs5yxkWqsJnvGJWHUfBdKH7MTjqRPdgnxhdG6",
  "key14": "57LDALpSSNQrWuvyAZPghdX94ryBjDPJhNRjXNSy3gHRmxdNGNESXQSLo6nhYWuZGB9JZkikeXy9u7rTBeEFYBV5",
  "key15": "3mtdC5A5EzovZa1c2ssvMbFy71izXUK9yerQHTe6bNUmntx8vr9cs12GkLLBc8FB6VpFKRynNDzwNQX5CaDY2Qcf",
  "key16": "3Q9ZCMLH2xPNcX22wyTHUhwcWskpei49tBbfu67B981Jy4VUETc3F7cHERe97TLMbCUqsu9QdsiySrADrdkt5qMP",
  "key17": "3najQpafDYMegmdqzyTUEEuycLuJKe2W4Fws3CLkmxW16aX5WuvYNvBYCb5m7rPZWsxbbJiC97CcqJYegxZmSF1d",
  "key18": "5RzLeZ3Xqh3rtxAA4sKi5Q4KPoKJ8g5XGMMWyRc2sXdvdX1HvWxF7jvHTopVDzbWHC1kyAt4A6MuxqFiFusoPXjw",
  "key19": "5fJk6e8KSWMWukAMKKfzX1fGCmSw6EMoHTQ6z55BavjrrZrnjagQEDsAVr9dwK7VXiERUiWYe1C6o4wabuH3UkFQ",
  "key20": "2SgyE53RvvYVZK4k7u6q3CRWoBFCfVXpznZnufBZyNdnzsYUiqURXjMURK8zH9TYtpSdqccuUmgRKfyWiRQpRM2P",
  "key21": "2iJMejEtnY64x42pnUfD3t6ZkmR2XA5uk2gZ9Yhi8jQs6A564iW5fPBEosSAdYyS5uXNbd22xjWM4TUVJ5G9gYMd",
  "key22": "63hv3iN4XC6PffvTy69mpALEWSmLAt1WyZCmYVfZdKuN2cxF9Ee9Ns3R5SaBYv6VYhJZFSCPPEUGu2NHZSSw5usZ",
  "key23": "2pcJn36n1bd5ePvhkcFQkm9QkZZVZLKLQXhpftvmb2DbAQRUcCRjddsnWuGJdmhoYrCs3XsncaYqBnWVv7BbBuEh",
  "key24": "36Mj9fxyrLeqkmEfCQXEGVntSCkAJHgTXAjeF21CXoDcBM35LbJ1qxwQB1JwtR2yBNXh3ziKLDLkxSp9tpxGsWmA",
  "key25": "PEEwxTPhSHSg5q7AHVJrYpZrfJzeEuVaCPxhgHGvqW4AkgfhPVvsJB42PnKiU6ZZakH1msBPZteERonYf7Z3dz2",
  "key26": "2aYSqTFZJCwnXA4BnDmEzWA8WJ9DpGT1kUTsmzEbPYd8pdG6fPwLMusLjRyS9xF25d3Sh7mvLaPRCshftLvDaP7t",
  "key27": "37iC5JS6rsCKg2761RyJk3ru5ymFAnT7aMkw7jTco81rbooPoyzNQrRHkTu46t7FVuBgkHv7nzTDXpSNFDfiEpGx",
  "key28": "5aLRq3FYvPrCQnxDCJSVa2LjaxXf7bvfNJNCDRENZ7Pcz1nUC9a4T8FepDvENoUNoUdKBtMSGtRAAntZBYEAewoQ",
  "key29": "4pBQ5cUDkE5r18Jdd7PQc4uZYDt4pRD3GapxXwa1LA15k5inw2zZWQVniRwbFtnHH4xAQFtwUovzvVKbttBvb48P",
  "key30": "w2Ni5xXfDo46wKj4FHREREpJW9eYPLVb345ZTmAA1vYYg1D5BSUY3vSSofgaweEErCVvVJhiTy63n3ieRcMVAcj",
  "key31": "563Q4HXWJ38rjfwxsXLXMxSTGxbQZbNyB4uJ3Qqfxw9zw5bRbmN2tPFZ9eDbADFZVkLPPjD2gd3GyVwVYnjNcLZX",
  "key32": "4tZdzFcFugRb3fgWJNe2hhrpUqxEGHnFRfy2LWRJWEoLCQGjwT7qhC1DKzoKFMeq2B55Vf7jrjP6syLJmNnoNMbJ",
  "key33": "gpjzPtuUi6U55sVnrnNJWBPL7WAGjf2wcPdd8rFmRhuszwq9vhjWCw3kwxCeTLBvM335FaXgcqtbhCapmUKK6eD",
  "key34": "k2tGByhejgQEimXrCxK34bLM6rA54NhBMqsaRb75wP9CR2z3deb4uytoh5DXxAjKWbVki7VDqR6dTWMazAiNZM3",
  "key35": "LgqKpBLHebutgc5CmExXtRPEqXMMJfzQqcChQecCz48MRDuDoraduPTouj3YxJM9YytJARMC5AiZd4JxFVp4mhG",
  "key36": "4BR1D22e3wKLwCkTDLBFMEVghJW4QgDt9TsiEb5K7gPSvdJ7u9Njwid51pkC7BkNbprjWTQCJAmYw17WjJvQeYQR",
  "key37": "fgcfjdCJM2DAQNGELJLPHn415cHoyG86iRhXT7ZWNgassAxW7FKNAUAHjZUwr61cQYVTfLeAkuoyw9XQbyENUWY",
  "key38": "iC6rZCowXLrvqRSKmZZp4wHUebaEMyHo7FmBErcqMA6g8EqwaeXkuvu1RzU9TtvnXK2PqpmcVf4eKsVLRfmos5k"
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
