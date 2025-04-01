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
    "4a8eLAQxVs2vtfqZa9XcMc63qhsJtzbPyZ8sjU3tGPtQg5k2N7y3RjuDTEoA9uNkMbMhJ9K64UM1NMjBEpymChRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x26mBpgvL1dMibndyJhLfJezybM9JgXFeohSwtRgruhovoLfSetRRuZnrL4spuu3SEuwyEf6JZQj3w8TvV8wmsK",
  "key1": "bzAC7aaABBne4TGjkK4wY3aPRuEAXcknq94pWycvQ2hi6FYTRPwsWFT5tGK5Rsw58TBiYhu48tnXfRsrju8RQYY",
  "key2": "27vtP1wYKpKkPt6xF5QPB527ART8AV2ZBABpdnFvVWdRuNMVZWsrQiXmc8svh3634QSMpHuvLkQPC98sJEKffnWK",
  "key3": "4hUmNfEFdYjjLAM3NjWXaQsKewW5kojpLJGh5bKTH31zP6dgRV5f2yzgqJ1D7PzDEkRA96eLKimbtjXzZrVbsEiB",
  "key4": "4pzqDeMW7kVv2Vwee1KvQDEyJ5CpaV29qZ5CYjECgkpDYeP7WDSywD72gsEFpTe4KYkPVgrgtSQDydLeTag9ruL1",
  "key5": "4m5gAh6gQPSq8DJkiWaYt77RyxoMLgipSrZCx75Dv6rqLukyqZf4UHR22PuGXtS35JNDWCMDmvKFtHLKLuA8NCCk",
  "key6": "38oktgBjvD6NSQfKXPkjN6cuAmFWZHywyF3qkT7kGuYQP2mu4ZfhUp1rLNn1RLS8thYtHZLBvNNX5PDLNxwrAwkK",
  "key7": "HXif6oPk3WFRmvjFn4BUbRKUgBn7KJhHmKBziLVW1WdzvThxKZgTzCD7wNKuiEqv2aW8Gsug7NhDJmdeUGkMupN",
  "key8": "5c6g29VVf7udPotoGKfgzVjWfsKcQhmXqAiFsd8Fxv3ttVb8LZbLjo86jwm3DpM4Rv4SYpUp5X1DPpKFJBpLNtut",
  "key9": "3AZMy4MgkbRqnqzicPiaHNzm4J7L6UAFjnGBCRf9iyfrLWCRgMfA3gvTfaheVeH7pJpgB7bpcWq8sMETGUidJNN8",
  "key10": "4iHggMb4V7pseaKin7dkwEtkJVkC6f4kWgjSD1LphqTrCTDHKXpz5b73hYkvjwYi9EDw6ixQy2tjeH2Bhrk47S46",
  "key11": "32tudXeXGwbD8Ysre4ynaZaLsxqtn49PgtekQn4aXC8tq1n824YcopbQ4RgUK9A3rwazJYowtmEz1r9idMyfHLqu",
  "key12": "4Uzff4u37n5sjMXoeZ88WEyDLh1YeFTigkzKrbizrM2oSjscbsn5AG4DQsF8G2CC3cScD2WGh3AqGr8Ks1kvMHTt",
  "key13": "5hsPwzntHTG4eFnrWSADmnwUH5x6rNVNL29Zaa3qVpKFHQjdTf7sb91sxYe9PXXiMzrbQmLuwVnuun54hRzBQHND",
  "key14": "61FhFmcz7VJNSFWfdLDMAdPgDsy1G4za8XHZUUat8XNYT6upDVxdhhThGfDgnQW13vRX6BRKEBPWpN7XSDSXjbdJ",
  "key15": "3bWyj1KgD3mQwVK9QuRHe8n8Zunhz9nY6xFenbRZa8UcXdWxoDpbpUtjD1fEWxE4udrh76pQnwVn1un4b4o5EXib",
  "key16": "5S7ZevNVxyT9T7opu4bKhqGPs8SJHgK77BMjztmRkcaQMkLedMhdktrqY4WGvZf6VfrjZotAXXeeji8Thq1pQEwC",
  "key17": "3w1qYmuUeNbCL8QgMSRaDc9APqQAg7ywYdX2Z9wm8kKKS9xgU5GHWSWn671KkxCJYqBj7JWbna3QiKYqknTnSFyc",
  "key18": "48miK3aQdZoNsVH755TXGArU1A8p8iH1QwZDrSAFkzdVEnXKjnLJuVexTxKP3RYs3hiz1gCas2V78yXRLUQz788p",
  "key19": "2gGm64wXWWuWKE41X8ok3xYXBxjbxKfwtWB7EYFEBfaFRt9cVoYDeje6FaYGLXBjgr4DRmsHTUbJPo8yrSAnh74a",
  "key20": "2qLqS2P7CPLE6emciatam86tsRjT6MjdjJcn7sVyWzTGQdDmfo7L5couGGFpizGXfwewxzNYuBQdskGi8uV55gx5",
  "key21": "5ng4bAiPhnjd7UgCN8o7EeQWiuipFBKK2XZVtqv5E6zQYqS89o6Rr3WkF9GnV2zR7TUNt8DAFG64JWJ6SSvGGCGd",
  "key22": "5jqYKeqcBzVenUGUfhgWxktFtf4b2X73CrCsei28TnMdHQaK4WjcUDFSBuyH36HN3PpPGqAaGd9FcgNCEqKRtnZz",
  "key23": "2wCovFvAW1daSZ9U1hAecVZEDjyCp5xr818x6wcbwwcZbrvnmQrARbuq9P1dEgWtq4MfddnKhs27xSosKUzn5RYf",
  "key24": "23GmxizhgHANNfNKf3yxBYchUGtkTh2WnW89xrt5a9AsS7hu3jyHmieLKyMLHegaXhfUBaL6ML5Mq5s5pFiRSkdJ",
  "key25": "54Tb8VsCRRgezTsVwa5ECNG22ZGw3zkSCbxTuoEMTEMU7q22ZDbzHTeTQThbFoq3vUTbqWzYkNhddWE7e5xQXFc9",
  "key26": "4CnNcC6woaQC4GtQ3t27xZCtqM2AuAeCxZs1awEr79Q7iUeCjFk84DNyjAWDEheyBvLTT8Umwkmmg7D367qcMwX5",
  "key27": "4MKDCFS5dZW4BtPUc4QdeofwoHDoDEkhWjbxs6staKVg7BL6ww4vQ3eGGTPJ6vGzecBohoUGY6RhHBL4aeBDLdMZ",
  "key28": "2Ty4eBK7yiKN4uP4vV8zTGLYXhkghCxYbwoXqCRPqG1L7iWy19ghK2HTnQt81zZJD9ZWF1WrZS8PdwHawGZSksGE",
  "key29": "3WkdbrE18jhC2FT4oSX9xdkXEokTMWHuddxpCpiqCu2mjXLqA48sBH8ZL6H9r7GxSxVJy6huRHtvWwsA51suKTxU"
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
