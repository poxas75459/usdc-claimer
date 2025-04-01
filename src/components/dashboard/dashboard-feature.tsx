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
    "5mDntdbBzacwyXEh2CjfdG1xT7jH5JBnnk6vtebp8GX1fVuSErEL2yRvjou3umFLX1eMydJEJK8tER3YnidVwovH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rg4WeTQWUJHG6Ttc6FSFxstw52PuqxiQuDdUgLi5e6CaRCPDPTjqu7B6MK5AK5Y57vfdz22ibu7A2wMkroPbWn4",
  "key1": "2QAi6aZtxcATYDoYJtAwpP7UxTWfeHVdPgyg2zN7RXwak5AYLkkoBPkQSdAPEXcKfQtKBFfPsa6jwDGfyisDWKH3",
  "key2": "3HMByf4ZP8VPQKFmLUr25BnV2t8yNJJHDfMfuueQ8jWcndTH8DBBUh4LDJHRctQnkNGJQsRsKnYMHmqm7bLCywvN",
  "key3": "4riwrcVbNjwGB4JA28sNUtP7ePfHMMpq2w7xuj4FdrYLntt3zig7rGMqhXGsA3KQJhqZJvGg3MytQCJ77YQDuD8J",
  "key4": "5T36E4CRdKZtmK7HkM1KxGZ5NSqV2BPzYagBxYNjcTKaHhzLu13FcTDxeUz9E9XkkbFQChWvdMQmPuCiF8hx7pFT",
  "key5": "2qD99SDWdCiJgP3FayTPz1WmMUxZqxqr7FgTv9EKwXYmgvpCkmo2CGWMFcJJSVzpxrYBYHmD8p5Nd6UFPh944rMu",
  "key6": "5aCFP1ts1BMh6wJL78eKvMPAJPmYviJ6Xrq5PYAxBAo4rLparWw59DUj9BoCyRJRzifMPoqmPGdz5AB6RAs97Cd8",
  "key7": "CnGFktsyuuCYC9WEx2rTQrDjoVYppufZzpVXrupjK79hXAQi3k3QzjHXqzgaWB2vMjZABZCuoMKaZeqAsnvMGJs",
  "key8": "4SEtQziDjhTMBDxHUbNiM9ZGpfNVy3pZxHotoUwWW9DZ73MxHMBHRfdcv4QRva91vGeQKLLAb7xeNgTnUVPAG696",
  "key9": "3U5FJqQsErWVP97iputt9Vf6vQ3Y5saRDrwv1w7sJGpRxb1pAf3zTn21zAiAdq3s8SGRDzaNvbHQxfjW5phmxf9B",
  "key10": "2e8CpWD6GdECBjMgiB6ACNn9zsZntQcX3dyUPeRLNMrGfVw27s8pixdXZ8F9N1FbZZjQJLXWwn457U3yS6gaurQy",
  "key11": "NBpDoo7q7CdZjkikpxdDPRPr6NBSwdnZG8gjdZstaKBx9HoHvAT6Bp7opn1APFsic7um1sYRK77wmnUJee8ysWd",
  "key12": "4gahJFApsiL81Xpy6gEYMdq8GHfPoCPPoe3i63dn5LHSjeZqfGqHutG8L4jptRDoY2V97ZnVomQxgNbm92RkkzbE",
  "key13": "2hJbytmJLBmh69u23ZNYAxy3nMAyzyZyBkrqZcrLgNxjuNE85pXZkKwd6s8RfeddUvv3wDs8mAStDmyUHhSDAzX7",
  "key14": "5Ugeh6x7XiZDU68d6pZrMpqRC6qqqKjQHZHnixHyzyW83owMAeUgeCdD8CrE66dKMR9CFaNJ881fjYZDkLsQqVjU",
  "key15": "5f2yLke3JzRSkunxbdU8wJYSH39xhrbkookoHJTZQB2k2gUppF5cYtHJzMH3NUWBck4y7hoTpMBGzEpBneeQqq6C",
  "key16": "4wZ77AuzK2JYSucHD89VPBQhhYmLtGptVsquRrXxcDk821AcGMDJWVtHGTBXCtZoGoDMhK8UtEt55wJXBx7x3kVk",
  "key17": "57jSDeEWCkKvRZwqFnD3xw6A1B9iwV1FakoXyrLnERBhvfMQ2VU7Xrrjmui4LZtJE6XMX8xqXgUp9nwRQCMJd8vG",
  "key18": "5ANgRqPvtPCYK5GEsWYb8jcAxHPGhs5osXAQLCJPGqnCGw3ocHh7vc8wJRVqvMauXSCVcax3JVtWBYEsk9msxqWz",
  "key19": "4954hHzERdGYfZmYc9EuyAFEJUBWigtkf2cAzLwnrwJEiouCCE2wKR93qYBzaXdnHxoYWonrHMPB4DwbCWZbVSvi",
  "key20": "TpKGwM7xqrwrqSDQWoHQ3RKzyZBu4Lewfq9aC6duZNRKZbRaPWmx89J1BynmmFDA8ofyfRZvXDQqSH7W1i2MmVf",
  "key21": "4v4jN3yRxS6W1n5tQjr9EawENmKmRGhXEnHstQj2cZZkr1iGB5dATejRJUDz1JoXGFrYo83V8uu1nkxyxuX6Qx47",
  "key22": "5N4NrWKHKTBZkT18oahhCskevscqEQZses9dnf3sV6BdDUhXeKb7Vk7Vjr66YcVSWsxPZc9jwd7ivdC4jTafVJpu",
  "key23": "57XWRXbtJhnTdsi2WdHLEyXRnpGWQCrAMtvV4XNKocUfXvwdgxeCGXMyZgYmm41V1uapBebWYRubRms83JSsWJ2g",
  "key24": "2qqLGygD6VW2c8BimBQRoNWUzHXLz9jMNns5vGtTwYhdqpDms85wmvSvUwdu6L4PTXYW4DeDaFuDqvDh6EvWWLEF",
  "key25": "2SxGVocBrFkwsQdUNcfUeJ2wqkgn4vGZh98iA27w2gX2Yt37EQvZACb49pYoKwDGCrqLtWcYisBci9ZPj2t2PPhp",
  "key26": "2278ThjQk5AvR88rn51bJqCCBhryoAuVgR8ypHCfQ9cGfu5yxeg63rBJXj31RJDWwqFYfmn7jSMxhaycZw2Ryntg",
  "key27": "58DEWhV1SPj1VX4gwrcqFN2ukbmCQDWoZeq3W1WGrytAtdMa7tWCTRCu6TNVWHhq9Wcs1xqgJKRDXgWfy1kysoJJ",
  "key28": "2dQEAKAnKWgeo1kXCjLFxVVQQ7GLFXx9VND6A4MHbPo2QtgFV5G6bZfUfC2qSF6soiPBXn4KAGqCSUN4rffq5rK5",
  "key29": "cCNK89nrLhyUmGdjRt6aCcdVgtvxCDywkwRNWFFPWZRYcJdK3ZHC69F5aDrv4AmserigAcPZjct78juH2jnYbVM"
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
