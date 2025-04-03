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
    "3ndq9VyEyyGy2vT91tfx4trezcXPCEojdGSFLxvYAhXR25uz2R8iKQ4aXx2k7XNmD3cuVuwZGGSuWXbADGTeuFGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nRb5BSP7bJ6DE4jzXyATauLAxQKLWvPnEzw365PXfMoJMs7qDczoMVfVL26yUwkd8QTrfkRvmPgiDGsJSG5Gw54",
  "key1": "3fuZiNW2CkdCYsJyF4zmz1kzBze11GUTKS5Y3Evo4MS7iuJzv6EU68vh4sGXMaahRwWUXMhNtNzLLpdVQbud6Gte",
  "key2": "T73QeDzC3N5jWPYFQ5XEdkHCnQFT1VjuqK9KZ7XYfVfCrQdpEBxbAsiHWQk4t3PnKqKwYpsAaVBTa6gMwCru8N7",
  "key3": "4NeRBLvmSoXSaHKwoFchrzKt6WudjUpwiaCy4LE7DCVVuniRpfreCPuPqVVf4KfNbJ8n9kRaW9qZRrMxjyeSUvcd",
  "key4": "4aZysdhEj7NVTsDAY6yBpJcuwgNT3keuCvaWL25T2mheEfdXDp6eUc1Xh8GPxs6sLCqtR4RyM5Z5s2tBeJg5vbDj",
  "key5": "2F8rvU9vmsLvQ4inaRrXVN5hUyerzxGq9cgLFBgiyTjX2C5kPVtVNCFSpnfceq2kRNUgoGivT6BUNPnUHT11Xd2H",
  "key6": "2TkMB4UBYnAATTxykvAzdqPX7fQeg2wQB2LdpB2vem92Y33fQXCRYuZiM1MNh3iTcdxmBh2A77fNsvth9vCRWgcL",
  "key7": "3sKix1TngGEmsbGtqQFxUDaMCJyncYdiZiU7iqMb6B1HQYpeLRULwunwCHwTnDTwZmWN1HBGP2mVrMCabWPBPTA4",
  "key8": "4qeL2VGQHvbyoE9PHWjX6earQb7PKk5amhZvv4dMxwGa8SqpxHXj4LXBsneT2f6RUk5asUJysxp5vkNQRta5hM7U",
  "key9": "mw7xQuaFYea8NEjRMVuzMWp4ccxv3x6AvFEBi4qDda1gzQ6iJXp72HV8bJEdmzaXhwox7jK7UGmxCAQAFLSySqc",
  "key10": "2LZzcX38edch3G3TvbF2V74yHRFVSa1HhEnguiuFPAMhshc2cHy7WSBP7kceyqYL8L1sAhbZ6yBzrdfg3JfHwNtH",
  "key11": "5N8FEyhb4kLJjXcNjjo5FJTrCb3rgQb17Hr2EvQ5ShMJ2gDUzbfHB27ZErzBHz66mbUqLXF1gqsSMYDcrUGwV8Do",
  "key12": "2nw5p8TGPvaBnnp3zqcVRpjbX5bYGKvoSBb6SCjyYXvDEg2dY7MMCsT6EtVwqWwBKTtxD7it7QZxx645CCSYckHX",
  "key13": "2YEEQRyuVmZHWZ6Df43gHHcj35K1RrUtcc9RyHFr423QYGZyHtL9bGGCT8tgwe7aiYWoXkqx1M6j5QGRpde8gfrx",
  "key14": "4D9Xm7MFzywySvwF8RBmnoti4jxrc1cDgF1c77oAH7M6DzzXvEAfqw7jmcAg6hwwFawpnurTGitz9cCUJNPgXKEH",
  "key15": "2bhLzh88uZx2cWj5MkC2PrxgrZwCQZc1GuzBW2UmrVQWzvqk4B8g9ZSkwp1PFJrHbY7RBRDxBDJek56c21oVe1TK",
  "key16": "5rQyLYndUrJnXhTXpNUxY8aDDxsbHUeymw41ydbNWjugPfb34bBPs5uWzaozKTKbBhpNULZgMt5rGUVCzaosCNGa",
  "key17": "igAtPsk6AjWyV4CV7AyafQrz7CmFggLtgrvwg29zfANjmCi3HNujwiQcTw1cvNC3H4nNSPV4CepFDzJNXwoDosr",
  "key18": "2JQAPXENPuusBNU4DeFjNWnQVDmEe9NQdArSw6V8dwi3QiuFnodGquFaWqyxWgE1VKvUa5qR2FgHKxXGyzVN4Ufe",
  "key19": "GDUYc88RJK1C2iZvZ8tjx1rQudUTy1ybiUi8xuUoXs61K9e6dwewkK87tABMqLicMg24KwRKuGvv5NBVsisqNY8",
  "key20": "5ZVByxsHEBEXJK2ozuTdCF8eutB6iydvDyjefboUCEGDygKCSz8MZdjE6AbaXBPw6ZUX489Aneh9qqkhJpRGyjaB",
  "key21": "4RCuMRHy193SDBZPwn7yVjhiYTNpPBex5DkeHjhRJqpX4W5TDikK6Btafc1ZVz78NTFDWzqSqTrFMQm6vhn8yksi",
  "key22": "1jGsc3xK9Pfgwh5ZLAwWweXJvnVWnZ76ERdtSZCzk8TrxwUxqzn7vyjcxKHEjbkGLY7UMW3Kh4kyyCqMynEpGV7",
  "key23": "5vEGD2nGjuSsqhUquww9xdYVb5G9xfWQtC9MqTGvVAe6HLBnEEWUfGrzjKqBwB2SP89pK3cknFqnA62i6BtGstFV",
  "key24": "34P5xUXSyN3svkbb3v3q3b6CQuCJztf1rTHijs4j476hn4dAUsUkseBjqNDKXHbMm1WXuWWHLmKmVzNVzjLByBDC"
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
