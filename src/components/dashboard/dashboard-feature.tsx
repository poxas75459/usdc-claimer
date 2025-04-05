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
    "3Ui3F7N6WmyrCiJQgW9KkENfw33Hh3AUypKBWW89DtS9CDPZG1kdrYGui2DkfQ9UabwmzembnzvK4mPDD84EwKGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NyArwXPAazYnpSm6bjh3NUM6ViCHBYCLktYqni5d2zgr8thq3HappSbkodEfrUShyALgx8dibSfR9yNNHDybtHa",
  "key1": "3KB3xYWtmWhRFchrt6e5ZVvrZsLj1ZMX728WJCo45R6rCzYKifkYgk9M9yB4yLXahVKqFZsKc4MKE391V65Vkcez",
  "key2": "4CoTvC8vfgjBCBc7u99H6b4yjC3D7YBCm6e4xrrp18ypmeMP5EHhAN2MKfxGKTzwUXEGZEzK9Z1ZJTvJNn2P5QsY",
  "key3": "4eEdbMShFty3VBjDYenRpoN3kUcEF1YhStyAQ54BjV4Kd5oEiZibZDYcu2RXyDVEKpVWhDFgMRntR3LetyMgaK7b",
  "key4": "372Z7zEDwhSXTpCWmC9EktX7wTDS7NfbZb4brWA6tgig8TXi1jpaEptwu7Fdn1ZRgEepN8ufAUBoiyAPrCKbWXrC",
  "key5": "35zMet1LvXbnTxZCizNH4n51H7uSmkC7QBUCqFX1qCpjnYXZGygQAwVt3g2a9eRSXhzyLBuxjKmmadiajDaYpcgn",
  "key6": "4DjiA4JXZ41YeRenE5iPzh5QXsK3LURoFDsKnM8fbPx8sGfzmQGRWgS6bJHWRAZ38gtUBXuqXq7CpN3X2Pxdq6TY",
  "key7": "22jgkUqjpXd9eafMbLBNntTgAPkFQP68oCTcEt1n7isxLUThD51sGteGUEDY51izokpYqDVYwU7he16ED3jZPN46",
  "key8": "5BVpqbb8LmrNkfvYCAqS8Z9ixtZuqEaGWcxJmnAzg8TBLgVg3EzdCACWZ96ag2aBy4Ddq2BGovUqePT1KwcxtZBm",
  "key9": "4KzevuzedxjGRnZffqqMwT7usZxUxVCFsCha5Xc4jwt5NYdHMgmthZpq1Gk1dCUHMahzdiR47AvU4DbAyHL7saE7",
  "key10": "4SfM7vMNaAf2FqHUk9aMLBVsToVYFQSbtXaWRssZYn1Cp647BNXXuN8KdgZFWFAfYSxqaRarJdRJoAjKoo68ftDG",
  "key11": "m8yJDZ5nDyCMSVJtU6biccGZ91sk9MJMwL7q57YrE4qVRWgBGxUAjYrVSWEA6Po1nfoh11TvkAwneoXpWwUeKN8",
  "key12": "gXjE3GEuVf9vnmLdHv8b63HvmQ15PKgSfMYnidHD9z4A5gwZdiWeYczHeDDCwJCBE6XmvtjsAWFZUJV7d5k9YDE",
  "key13": "656GiDQCeSsvzwZyiZd32iB6jHpsEUgpT8iJZY648bE7gfujx9mGApCj8QAyzZWFnJgY6QBVTbAwjx8hgE8FQH1Q",
  "key14": "4Q7SMTNYCTQ7yWReAAAv6o8eTpJGGzQvtu4fyvaScc3iU3gdRwLu1hcbR93VRfKGPH2KLFhGeGXeLKFAcU9q4Pft",
  "key15": "faLU4fWTJovFGkyvAVrThNkNUmQfKFV9X4wWmsNkVXns8HtKyTvtptw4z6TxKEwQ8PquDcbvqCaWB81PXAYbLo3",
  "key16": "2b4CBFx1qxYNE4CvGhZgtfsLXgZhEBKPXpUaGvEV6zRCfLNW5Ersc1QXGrB9DFndBnaZAjEbtFcezAGpsjF9c42M",
  "key17": "2D71c4cBRcL5vTzM8P7pphWZb9rEwuWFoZ6Ccv8Cds5MxR4SEZDCitDBsmH2mzsoh7YbjcuhSsjLmJErmZjf6wao",
  "key18": "41rgiwmC9akgRCEKUejJBjb9WmfWo6HQBwMm7DzcPWvHheAYfXHdwD33ohCBUisaND48uHzKssjkXTYHumFHiFg9",
  "key19": "4ZJY88bj8hb1Gc4rquyQzdCEuwQrqAU7tLmmUdPSvh1hK71DaM8dgCD5YSVsYdFft2EATXp7k31CyLVekfFEBaZf",
  "key20": "3qPQLi7ZZE92BfaQG5xLvVfGap8mgMAyxgoZMUdvnT7kmzwr1TKadXpwZyEarBJQj5fLk2hUDj1BgCSdQ81CJLye",
  "key21": "4sMaf6DB2RMFCTFrgafMKSBiCFqBayoiCsDWZYrkFK3wGJPrJfCb6VxD6GfdVth5fAooHBzxTsQfgGPn71zLMdbH",
  "key22": "4126DcnhQnjk1bKLwzWwdLTeSfuGyjDG3gqFNfy1FPXiGjG7VJ6Ayv6FLma4Gg2VhtctRF126shf59EsQQssELyg",
  "key23": "3KbZqzkED3GBnHxaDWfWmFtA9ii3EzR6BDw5MrPCS9CnR7FzUV7S3GzBsg8QSYfrqzVqXuf7mPnypM5r5a6xPoEM",
  "key24": "4Zv1yKRusuSAE3PMQLiBwt44NGprTzCAyiumNYbN4Q8mxhGXGaZ7Ae2boKaeFPbSiAeUUwqVfhFZpdoznpnVW4tA",
  "key25": "58QLqnThGNaNs3fCRV9XLLvLCJx5VMJa86pdmTJtsUi8BioaKSy7FtsmwnuqztbhZqYPT2NojQqRyfBhaEFPaEJ8",
  "key26": "2RFPvLZbsNqph8akXB9Rw8tcJo8Sd8keywkfU28uanSTjSjhZriHPMRbZpY9unWmVHrYVoozHxwbTyQP8JmkqiQz",
  "key27": "4qBFzXtB4LXZkxNGxwUz8vAzzRNTLkFQ9tgHyPeHA3dHWNnGbHKQuwx2AnsKXPFdCWMezxMosYPR8rLxybwJX8JT",
  "key28": "5K8pfg38QVq1dmbNe6FWNsrNXzNXCE18YCktR1boqZvbsqWAK1m8DbJ8s6LKgJFFjJZK7J6xssq6UAxJXen7qSou",
  "key29": "3CiERGxycZBSbmus7NMiu5UGVSKnYSYVD3uJBHUB79o4ZJqSPWXy839L2JQmiN8qQyhdcUo8jFFoNc4vmy2WUDRv",
  "key30": "4rTSmVmQRF1zmuKzVihyBYkGga3jLVjNdYUaWTwm9WGWR4N167aT7fWSzTf9YRCyAD3nvRRDDTT8syJra9f4dJ6Z",
  "key31": "4d6rvDwUYxKKMef9vgNBN8mCnvwjb9Gnvg7ku9ghfE8A2iw9J8in96tu1JtLmi5WnC3isZpMLGi9ViJFESiFXaNh",
  "key32": "4gJkG3XcRRt9TpGP8hLAK5gtFuS6wYpubxsUFYhh7dpDBupNKbtc9cUfgDtdQQALhgvHE9NiFfudP5YCwUsPN2zr",
  "key33": "2aD8CaN9Vp3RVTQAcRgY1bRyKatVpfPCB8t3vEE7r6Ft7htvVnUWmwBNYYQvNFtpn1snGdChRpPZmCEkff5gEKGg",
  "key34": "5SvF2DkEk1BZatZHQpj4fVZHwjWrrYDBrr7tyEJdJWyYQDAWva93USmjRY72MBB4wUpVa1Rx53ntkaznRQ31XBwm",
  "key35": "4ue7fWvEitFeeiMEZ2zVS4G8NLLr4ojVfrH1vBguiEbT33MxFkYFyLXfgyNxgVGF5gt1VLzD2NjEcoS2QukKTBW9",
  "key36": "tphMshZgMhmqcsQQzBstm2Mu57cwLeCUKQccwfmxmJ3ZLQo54hCNjAkuB2mMezeDwxbHiStQCiaouBZv22qCjBG",
  "key37": "2yhbrDa7meHX4Ag2CGwFSQyuGhu1v7VnAJ6SaQ7maDdvv1mXSy4xERSzWLWNgXNdVVG6xtLx2ZsG3WEsNSc2wpJm"
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
