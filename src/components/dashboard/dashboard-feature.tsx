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
    "4CBmhRbEYDuUZWLUMKQkwgiztnCEMPfhGHgu7LYasSGmXQXpBW33NRzpRBZzZheng88k4Fmgtm9z2rTVpEDVr7T3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SSz8r8uuu9WRM7XVa3yo819w1Bw9mANQyodQNDi22t1CTrLSd8KmXotB3KmsGAEQLG13ju33Bv3d142ySvqactL",
  "key1": "25qMHdwyr4wHfHUhcBtbzHsmkUtfhYFQc3ZZ9XLPAubd3q8hNAjSFm5vVP2AaNE397aoEMqVnq2u7cdVuz4frG2b",
  "key2": "35XtmDnk4ajsBmF2dHTjzAyfeEQfzTtTPef2JG65bfFFSUr1K8Xi3weH8NZGvWZL3MooD4MAeq716fKutVP7mgPT",
  "key3": "pCdD7eCrij6aifs78HkfEYsM7B6UjHWuDMn4HXZDKAWiBsYz3mUyKZskq3fcLimF92eabqtY5SgCVEf9GLnigZx",
  "key4": "3eLneLb5bynP2r9RyC8wwjjeMtfAQ6LiqsNyWPYwYWZZkGq1jSnYJ8GR5tGp2KYpxkEssKabbmURzPZCfRa84djh",
  "key5": "LiB7NQpgg3nsr9Hw4eHgX5R6y4xL7YERuJDBFR2N6HB6iAPiCQPVNWRmAjKg1PVQJ13i6Y9ZWxWu7Kp5ytYqJEU",
  "key6": "4Aqb3NYKXu8woGo41rUxhr8GweiVTwa1CZZfLZD3sYpYjBAMoriSbwXFRhYLik7RAqYkJ2RHMiggA66saTFEKvhq",
  "key7": "67XiqUqmav3Km9NRQ1Vu6Fx5cugoKBHXrJ8ZK3AJBvZuHHZ4xQFjCnXXDBUJRQ56NsWdnzUPRuzoZrF6fXP4dVt5",
  "key8": "5r6f82vvd7qLg43tsgYvNcw4p8wvNcHPDEmbbcbPy335g9PHGJuaX4VoBTE4Ya1ozJkyKNzN77YsiwydjzyrRfHy",
  "key9": "9WpExF7Eho3FUyDeo3wcNU5ubQpKgEDUf4oAjYuRuXqenv73cZVQDk4DmxPoAb7oamLkBz5cDEf2b9F6HkPwVN3",
  "key10": "sGuofrwgZFWLcfi6e6xgkfs7VsgwY8WXnTM8W8XdWAqApM5A3kSJct7ftZtGb87wEYgGctW1EXzJN2oGs3Wp6aG",
  "key11": "5cpaPS9zZJZj2o6A1jGJBibVosLLL7A4TzvaLaRPG7Fycvr1oqJVLRH54UGMh63wZV38xnDg3qiCq5N5mX6VFLpd",
  "key12": "3C3qKGnAj6zQiQnGuMpEMLjjddXqLZevP65T5Qut5gqRabk4VbX3p2t8GjPJo83X4YK2QJwjHNPNJHF3AxEQudqU",
  "key13": "7KdFwtvDAFCCH8PRN4rtszgswQdaG13G53C5x1Dy2LHXoCG2tAsqNWVF77dkrnSL7tKHFhft7Jm2z2RSKWh9tJX",
  "key14": "2GasnJ7Rkf2CmxYV4GcbTKoT2fE9sbcCT5JCDa8hB3daAm6bMRJNSJLNyExVfLtbDwXtuEjyvvF8HK6a1DGa3PUS",
  "key15": "4L1EJVhLB9VT7Zdm5wQFmAHhXFKbYArReQ1zqyyGFrNFjeuHrWPR1P7YXVFrTqmcBEKoh9xitvZqLjAFhYCaxFJ5",
  "key16": "58VGKmHR3MxHi6oPpH3XDc4uMZdAN9WxEGhuRpXHzgQk4ypuxo5J9BhnBC1t5MFXh2Nu6H8KcGzxmMsi6JwwfDum",
  "key17": "2JU32JRWbakmMq7rapjcZEQRARS9yfD3zTqEZkL9xH5cxQhMnL3AcPqPEmxB859HRkzjjTvB7bcVLitqjhtyjJXC",
  "key18": "5edPrYW1SsuPjheScZnYjdKyq2ChAr4XN8XX2h4jJ8t8x1H2x2smL681wXhTL4na5kDk1snetzoAx7WfPL5vCA9R",
  "key19": "2Z9JRxhSbx2ru8rgg1oridocUubK4hUh3BTDoP3ikstHhALguN9nsA7i5QkPYnhFHFq1toTCGzGuAjVFJ4Puf4vN",
  "key20": "2m89B6zoW3UKs2HW78xe8cPsFi263pbWZQUgs6QP1mJAuZn4stm52c1YjhdsFE1UdBejapzyHNt9hHksX994M8no",
  "key21": "3rxH4w1284Q31oHXCVtX45obHNcc8KMpbGZQkY4sw5WazTzDeAJqpDnPqNrkiu5WqmC9asyNQwiGXjqCuMwcF3rV",
  "key22": "635azJArRxq1HWPge39Atn6xcQgH4XHj31rHrSAyjvoxuw3RiHGYA8k1VqEJtwCyw3EKdzj8ARegkTEU7RM4NcyM",
  "key23": "24EEcmT5mDR9fnXJmLTejTxNVK66T4mdMPDqNn2Vw1joSuMCkPmpGi5bcCmVUx7rwkoYpGv6acp58kCWGEWrJRuK",
  "key24": "5bxjcKSHSpqqqSoPPhnCC9bXKqkd5t1DkCR4ENos4cxsQFKj9fc95LMiru6ThCQqUQsS121bzY1wTTXVhMKJkMSd",
  "key25": "42xgtvs7K7VUMqB9KNHdmzaPbjRQnSYpLrz9TkH9V26Y7FcEajjtT5LbcPDkNVN1xTgqM6MB6UHtMGbiUGNEM9JX",
  "key26": "2S56Jibw9GWkJ3SBMyHwNMCmLxzCU1ZasGZ5ppQe1WZj7AsqZKxcWDpg2YdKXbqNxJLo54j5ayw4YsbppZphse1W",
  "key27": "4QaZUSLibeTAymstpQ9nr7qGgpuTe1UuUAes15LdoiyQZTF6g4PtC3FVzwNaSTeBGF48VzrzrJjSKy1i2WG3ZpBS"
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
