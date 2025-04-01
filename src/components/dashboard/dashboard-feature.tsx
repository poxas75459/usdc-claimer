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
    "52iPHsi1m288t5AHi16kK3otCjvF2nJytUPsXMaZEKMrCtPeT8Nyp4pjVRK92Zm3Y5KEfdjtLqHs1pri6PYcSN5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f3WGuCjqeS8p8roX3sGC7HEJg7PQRHXajB64QTLXsoPWMGdPyTQpsZFopHY2531xSvAwfxxf5WJuujCEM9MfLW",
  "key1": "1eP7ebi956y2XE9wXFcEQZbdqzpC2efkRmJU6V9nqppzsScWVLrDLt6WqHzK5RC1Ury5nUbiqjU3reFErD8DmbT",
  "key2": "3sM64MyCVeLxjvMh6PTA3h4TDHzu8Fdn1Ni4HAqq1MvZb8s3w8HNC1iAcoHZhJ4PsJT5xoVsHBdf9Rn2YquAQYpA",
  "key3": "4RxvC2rBBzKMsxBz7zXBVSbxNgxH5dtf5jcXiPKb69N5ZQK1y4Ad8wov11HwDYeuE1u6QfU2b5UpTJ3ZMjquMdWy",
  "key4": "5GggHFV7HSHdutmqKD7Yfq6eysWxy2LLMirJna2Le7hFUTZpEw8QVpR1RDFZxLm449zi46XWuvwchfnGAgviENeP",
  "key5": "3mQwVA4X6RKc8b8WSA7tXrGEepV7CagqCLyqDQdWjAm9pmudENWf5jG7G3y1w1FutVGQ3jTwaFA7LscNWBF5S5KD",
  "key6": "5gSn5ESb7H537VaiMB29t7vxmw5EB67osUWXxy1Y9jHermVarramaowC6yKzgtkB5Kpr5jwP4bvgPKuQivfU7doo",
  "key7": "4VLtChTzYEyGBPCgg4bVKfPuo2TMDXRR2YQYHcZbhjKGzLsmKkEkkqrXKU3qwesBNVVcxCjGZvCwMmTFsxHaYSrv",
  "key8": "5VubUP7QczntQkNnGH7KMnkQ4L2WiXLWE7TR9v8FZsFF7bbJuGkb9GmT1UnPVtqTNHTX7AzNFjzhmxonqegCk6fb",
  "key9": "4eWaGMJDhvyKT5b7uLrC6dZgvFvi4FTepHTtV96NcQ4HRni6ur3fX2EPpoji7pubJgV3yVv3V2r6uQu5KJzz5wAb",
  "key10": "3o8RbmG5LaGe6UrqRWcyRE64x5AnBMogYtPUd29SeMhwyVDs4CoXjTyCDfTLt936hDNEDKeFKFPwdpQBEViBymcF",
  "key11": "4LbPUVpDLFFHx2A3XPRBu9p3PRbV7XyMpFTUVYRFvT7uUXwp64c9mCkj3QRt2SfJG1z98aBTgabkfTpr7h1Yefbj",
  "key12": "2dzyC8Bs1sx9ViNfwosA8C8zKQEvj2uhkgSBhNaaEuKS8Dvqhx97q29CX2ge3TmVVVg3G56K7BbqBfxV5j8mtqsG",
  "key13": "2TktKfotiaYCzTBoE93Ba7U3jQbxv43FJGFDb1ivRdRwVNaHJNV3FXan86skQPfYfq3JFUwrQcvpFFgrLgYLzLx",
  "key14": "i4CLhEbtTXvth2rDZwfy2C1y8hizhnyMwyBBZoFnem8uFbS7J6gKFmCwQKyqM1gXNy7yTpK9sfVt1Lv99L1sms5",
  "key15": "4L4ZVDDU9M43RmmJ2RsD1g24Qd6PjoL954XiumX4buU8kbQZP2itcMTicYQoYd3WEStYjqU82MhMyDjLcRMdCSY8",
  "key16": "4AgppwoExVAoMgmztB6xBMTEgxgmTPCGyXnZHRsP8J68SUn1Uh1NoctVNdXrhKJ6C4XkVT9rpr4GDocso3nVA5UW",
  "key17": "4phCkqdhLrEtYP6ASyVpwdpp6QcRxTFZacAFrdzZBfMTWp31vCseYEV1JajD7J2NVqobR4yir3Lzo5HGeK3p8acy",
  "key18": "48rDaM3BwY31vd54GSiHCvKMxEfarbTXQWZkkQr53JyBmNaDxp4UMuQfjPbvetz6i45bo5kuYDvY8iTNv4RjAaSd",
  "key19": "5aimNzrmnitSSh2TWwNU7XhdoWaHYbsfRQ9JroiNVnebu8Mi8kkxUw1AbGudQtfpDeWdiBide6f2d2ro4KTYGJkN",
  "key20": "64K9VkPJiLChmCL5ckApxLA9MC4p6zQxHUMAYKEKmenpCoYqKthe16otqPSUFZf9hVTdmWYrCYnEczuxyXFFUgUY",
  "key21": "31JYvQMup4kkoLNPAZHpZwKYmLbtiypyurtnf12gi1TcmrdZbScCYxgC2ZSuB9ZTfPZ6BeNEkGVNg1Bwg6rLKnaD",
  "key22": "X5jA7MezuwgVBSnGHC5hNq4QX32b8jXDzD8bk3RLutjBan3MEHkX1Ro8R8VACXET1VuVwUXa39zsMaD85vAmKji",
  "key23": "2dHysWRAg3Qn8EFi5x624tg8Phh1YAELMzbSxed74SrKGcW9f2BgFfkQhV69DMrz14ZyUGxbThsNrQyFhq97wRXQ",
  "key24": "3QYk3ezsVAmJFxbDbsv6N5dfVcGDpaRbnoPicJNwMycdnqAj1RpH8eRcS1afDikjHuTGvohyi9s2rUWov3LH6oLe",
  "key25": "36mPbYhtZWS4JUUmCHr3iyvEcjbBJBCncedJfaEaBR7idjQG2wvfBB1jLQWpTiW9Ssdc73NsLXGKjZaURpuuLbyN",
  "key26": "5n2ZQQe4xY5W4dqd9jjqbBdUL4R4q6GvcQMuaYoPVM1AvP2zGjDn4xmmqXmdwY88bGB4EHkfpnoCffBsq86ood92",
  "key27": "67Buko8TJHH5DGwoHggKdaqhRErUHkmprtxQnbk8cK79o9ieXAUs7iwXF4NVhuprT5mhuT3ZEpmVpL2M2Rz6716b"
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
