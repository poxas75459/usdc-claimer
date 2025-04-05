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
    "4aUA478u1vAYyFJ2nbvuyeKhPv47Dscz1TWSQ4aL9RKFeU5r9VaLKtvhDFNsqbw1cKCnppV727BRLYiAq1y8HAhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XepyUCtRGE4wJk1zoQFykpMUkcuuKjmqwupjWdcPL5W6CGR1fcKa22DeVsLZc8pPBF9uUrtbP6HJSrSWRmauMHm",
  "key1": "4f3rJx1XKD6Njace53sRJ8T6bsBJnHxr5si3CqfjWURTRFnNsk3X4yCe1Bn6iC9UmfJsNx1QDcZUBur4QaFCAEHF",
  "key2": "38Nj1y8X7M7A617YQhUDj458EntKJnwEugBP1MEQqZePpRcF4nxiWE2Cdfo87jJ9mEk41uEYmY9Vs5DziM2bCDVC",
  "key3": "qhSYSPYHsvKZZDH1xo3u32vbZeVj31AwGtdAPJKxek5GX4kzYSjVtN7K9EJYYrLvZfmC9tFWBN518oyYAcWGwTs",
  "key4": "yxfrhA4A4UkG4iopcNh2KJjh9zW4Yf2CbwtzuDw9Hxkox6tjEegV98cAWBrDH3dL6qELSbfNajWrzt49NyaX7Cx",
  "key5": "4wYAHbZeRaKXRwR4TLcwLHD5U8jeYDjU6neDbQ7Yt6SKEYWAFirRjVCPcbCtitz1RZMewKDvRn39p9XVcSBaGpBp",
  "key6": "33LQ57QwNJYYwsGvk6V2fqQQSJUGNpD1zyoja972Xa9LHXgBjCMqcMx7RVsrRiTqNqvkvq1qy4MDUgzeCpBxJgQw",
  "key7": "332jatzLVHtXHHkHa6mbq7zBi6egpfWxQpcDKxHFNTWj14AuQa387DYUG3VdQuKeiYy5YNGWtsd85QauBTxGsZLC",
  "key8": "yWDciUvD98hgo9aH7AH44xmr2ZfdEh5kUx8PAx9QbyYzpeUcJZb543vMNBAqQW5XCq9djYs68V8MsXjxpyvJig2",
  "key9": "31nMDxuhdip8WwvyXyaFnndappYfC2UK6SftWeHwvkV91qq6RvZ856wF6yM9ZmvC7K1Zv4Fmf6r4F7ePAGTksSTV",
  "key10": "2B6zh3iSE65JMqXzLCXDfYNhQ23HGhTkuKbRuAPaTqynu6Qpk38D6b8sdaFog99rXVMFRbppvF6Le49yUaZsi9rM",
  "key11": "2ZxiFvQjpqnVJFr29FJXV3vYUPv5sR1TtMsPqRiMUfxc14b5HTqFCq6WGxFh4fsfGGyevPjZyEQBKrRjbP3QG9UV",
  "key12": "2SKTydwDjmAMRgvnbjZafvAr7MVYsgkyuMdgPaUiaghHWuQNhbVKCyhUwHTovDZUabZfLmngieyEdx7mhVfFeLf",
  "key13": "Dd3D6Dd7yBQx6tqP8bBCj3u1cUUp6TJWEydMwdDGqxKX2Qte4eRmZqfVxh8E31LQDjCkf66Ao6hvLRMGLGyuD52",
  "key14": "zvAiixXG3iMuzTtbWJPeLNjc6jrLD41oAnfUF6XNQyx3QvWEPzEvaNCy5W2gHeS9kBLrc7vit8fPtFtZGQK2Y6K",
  "key15": "3iwpo8BerUBhEEWNwjuLo1soDDBz3cqkLh7zKW9EWZm6sNmgSqeiaQzwAFyrAyAyF78hYRTpzL8XdZeKpXTVj48r",
  "key16": "37vHAvCDDwUZCcvfXojVJCa8MA1L3awKuCgvFNZi3BDzhYpC5JiELc2FtDpRrE2kF3ia8ND1XpsSmzhYT3H7fXCk",
  "key17": "4xhUmnjQ4thJbK1GFGLofxG1Uycm7i22SnwGMum4DxQ9SnYH4FDPpsA66CQhfyQpjzXqxwhb48BrPUKsLB7YskRZ",
  "key18": "4BMBCe1KZh6bNB4zpuVC78WLzbru3vKAijcyA3u7MfCL1iYGL3z43btxV2zZanmFC5erG8GQVvMsp7ucw3yrmYR4",
  "key19": "4pZDbLcWAiJFDxvZVb59kxCvzVynYS74iPLh6Gdets1ByiATRzfxnq3jH2CCh2pzD74f9xVKXmwGdxb2fzwA5zAH",
  "key20": "3FacQc2kk5N6SXejKA5cwd7tDbryiqJApfeuwWPpaSAK5eNJgXr8ym6EDqPWazxaQSWnhgjAqrAUo9KghSTX1QBm",
  "key21": "45S3JGL2JM27DmZDPVgzyWi4twMTTFbbp2ziDM5rDLQFWKomVDPn9vmqEjPkhWzDTtmiGYiiMsT86HMv5UHxVbZg",
  "key22": "2SEbzFCqB1Fxak1qdjA2hUwLaqSRzvEaVnTQxA6uSTPFtG1FgXrbgd9y1v9ribTp1cEPpW1iibrFYcvpyYMgMkNV",
  "key23": "2sMpZmfBfqMQDKmXymnj2tYXjQ5K6ukgpWJr6wsGvtWVWtwdKibQLrRFzr2cq4CQ3KmRwrQGkBhMe9c1sFLktL1s",
  "key24": "3gftLTsWs9rBen6B3pnMjA8Chx9NUt7a6PPoG8p74H6s7H5U5EADddac4wAtu2AQjDcjkTKLZtmqCfxGNf9ZKYLc",
  "key25": "5BYEyf9L4NCCTp4Urf7Rk1ydL7yH5Eu8j8FikZQct8MBLtRZJ3Zf932i48F4QR2XetdydibVL1QBSw9wxGzXTMxp",
  "key26": "5biTz39cRH5XMsRKqHFSzVAxFPod2LTqjfMydnH7REmfc7HpRHRFu9YKcVcYd4tpYF8NDrjZWasszvFasJ8nXLph",
  "key27": "2CGttDgAX5eKcyy3ugLkrvALGTMJjS1hqvCh7LHXVmwpyXnRdtRe93dNbMnZFQUnbMDnfsoye4F244B5o7ak7RB3",
  "key28": "3bRNpaRfCC5DD9DDZCb2LtnqvZLEXRXZfpYdNC5eo2mgJwN9qeGDJFgjJ3KtWD6BkYVsw92UdAac38ntAWRAkjJF",
  "key29": "2EJokC43XUrqsL5Bc1xr3jt97skW7LYAZ91hHFqv9g3kRxveqm3C6v3W8CYrw9to5dfkMGkYdhtMVkbJGfPfnkim",
  "key30": "oGzVAXFJX8ZAuTVCPmSUXfzfjgTcBJqzVyVafCXFaETVza8qnSU1FSDe2co23FA2HWc9aVEYfYuvduB6gZCfA4o",
  "key31": "3Mo3p8zPgVyDyNGbSV3jfrqD9yY8hanFudme3u59uCeNpJgsmuNqs142Yzi2ebowduiG7eUr4jSdXZr1vb3TUE9"
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
