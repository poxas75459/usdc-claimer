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
    "47sbJTqUGFUMqvGor3d9778BkMDo8vifStKuHjyfRtw83ZbQsW1LgaX4KDJPvEYGH84LchprBTDmSpai5WvbSudB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i1pDkXHBqxEDsGexUMEKyQDwYAAg4ox8j61V7ZAzwvPJUH9pZS1ZRp2hcGqjh4V5tut3EWWnmxodfhkqNRGqPz7",
  "key1": "5hd2ftYs6uxwUWghd9h8nzzZJaz7kc1MtbVtcMTq2vxZTUdpUpbuAe4Hqyhk1ud27Gc67vzBL8RGEJLDZgrdv5Uw",
  "key2": "5zHCyroxhcrqVX3SaZr8qecwhckbsycdXU2qTDhXNVPjzEj5Kj97CZDh5n4T6ja8iHHjm5vgvf9nJv2FjHXrKDKv",
  "key3": "5s5XFoQNVTbCDsf3zGfWkep6cgFsgnQaDSCQ8Ubj33dbTrsVcXPo7EjUQvF8D7PZFjxRQhhapQASFTs2Yfhsq52q",
  "key4": "3EQhMrrZjhqov8YGdpBA54gzbWVXmT2BWswerwbGAcMfrvMG565L6fd2EKGPcej56SSmTAXzadDiuruX21baNPag",
  "key5": "2sjgyQDCHFVmWEqfEVnKi2VkFXPmaLL1RZ77cMXWzThiDVvM3gaHRRQPDWW5h8KEsunXfBeVoqP1vtxo7f6zBZCo",
  "key6": "3DiuAchfqCRsSwC7YqF1u3QEZgeWwcSKCxtepk5nQJGrfQZtcHJJ8E61Kw9gh9YVqm6dfmQStftNpHon7GsTqUwt",
  "key7": "4S86Q89R6yjtCFVFuUtdhhyiEvnpr8VdZSvPxxKGbwPp7reRGNjzPLtxqex6uAtQAhzZzzE4Ljgb4zB7xkYsdgpX",
  "key8": "4ctasWL7tanxp2wyZc8mhGXn7QRdSCGHPoBwHLf3Kja6WEVj8UwooeYcDzvW36G3BjAupNUHLcZ1gCdEWF4emyF9",
  "key9": "24ve6stH64MXoeEY8eSrp4vMVRhdSZD6DJsZ1YU9cewZ1xAsSPfLxeunbFvuqA3sganemVjtAaKP8tMxGJY99nGG",
  "key10": "4EwiX42fiCiRx7WfdQKMzd71PbpncGMdPUUk7oHcCekRY69mczJYndnnCum3qQ1YFByXM5uvn3Rm5euLqpFhMqLK",
  "key11": "2aRJsAw8hRdGmZJRnYKTVmgEJnCRkLBwD56QvCY8u2CtSD6TUMn6KkdEeymhipu7DX8Zpui9HUeRA1MSUCDp6JPv",
  "key12": "3sKZ92GFzKzzUL4cxDcohxCcRJxggJ2PFNV7SnkakqCBDLP3C5mQms57zAeGFgTkYbafNiT5ZRnPncNyZAHnYmaQ",
  "key13": "37Ey4Bh92HBg2XzVZcHYwV94Vc5QrbGUDtYdjmfW7yzsLbJ2Nm4fr6R9vfhqft9HJuzo8vwcPd3TTwKVYp1fK1gR",
  "key14": "3nU8onW63QpQ1U1NZ5s2r9GUDQir5SX9FaP9eEWRdg11h9Q3hNrXp3g58j8voyo5HmUnqxod8dQ94hh6ABkEAZTh",
  "key15": "5GBoPBCCrVXQsJvVttweSgHyzGJoKd1zDX8ydyhN2HxMDUYvGoXcZXbxR3nKjKhXfAdxC21b5yAX1tukV8UQXhF3",
  "key16": "3FFm3NbiMh2jTJVZVvmSPbFnnhPLidfLuS8M8y5D3CJDpjw1tZePcwkce1u9Lzc3VkC2bYi8Awy151k3cVGcDY1y",
  "key17": "2mjDMrq8M73UjvfhwqzMEhZrmRjoQEw7WYZ6qq88DqPsvg6huFqns6PZoS8kY7vtbfsTskncG3yw4EmAURbuPDag",
  "key18": "2fTodUp4wkPFgpDQ65AotH5KRhz5e1LnMHRNgu1d5YRaAciwyahsYoiRybF3jJoGxja87mJ4XVkgjyXhAdxPiJYv",
  "key19": "2snP2CU7bF8U5WcquZuc6tx9b5vvLSBjh6zhWjtWuCHa3SCmxXeMoiF2h7DyARYy83nkNq6F2fMagjBKmMFWgdWJ",
  "key20": "3qvMjkNXbbY2w5iXdrfvbL5LAf2UPxA1iacGeLy9boK3yZXxJKe5LXPdsCsuLtsP84645sBcRu1YyRfym9UbCdMs",
  "key21": "3kcPoChUmdmz9Uq4tUa9m8ueCh5eCXNpvwu9BP8tkc9r5cMqdR9ZdLVdygeyUzhtvanitha3wmrNuBq5pR9KUJ7d",
  "key22": "65WDtnor6eRL7vVqzUtwTUo9wPtG8BybhxtpnYLp9zJdPooH1zn6TxvXAjZrSY7pBgg2iacKmpRQ4JpcYhfafHXZ",
  "key23": "9BEQt7ibGqthASxBfgSjUfyBzLFA39KTV1jAEM8VFzCoavEzTEndbNoAErHi2cQaAjsDVA2yvcfPAf85sbK14W9",
  "key24": "4PxMRSWN1XACFmH6x9LzPCyVfWsn9ZMrK1gimFzbmAuF418VkECZwARDbTjc7LnqW6g1KS8bWrBdxdELK99DrhbS",
  "key25": "4StkiE8ZkyzWz3UsAHCFm5M1n4qd34bzWNHqCH3wKLCruZpzmReLxxJhwyfZW7dog6WggJQFLb1hr3Yfa8Nq8HLf",
  "key26": "3zvvv2Sk2ncntkc7rxUoYcApn8kd4cRSQazNKBBBtiuUp6ZYcq5iuNHZu5erMCxVJhQ5PWR2Zu7Qp8XQCQ2cZwPc",
  "key27": "5j4dHQqLA7ukjBhjHxFa1A9be4XXqva5gKM5jiuUhYppwnAW33CW5ehemgNGGZpgUexi19C77yZzoejxjtnzjqWs"
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
