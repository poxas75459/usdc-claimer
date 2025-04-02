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
    "5DGvBzuMNhYeyjfnzd8uHXD9hC17E6RTPZbaeQbJbkriU8m5GBk6NY65poyFeXm12UTfY1ZQeu6RofCHj5h3j1fm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TAQRTu3hBmZV6twyDqhXEh3wn2u2kGxCzbgq95k4xnbELAXLF3MVosEibkWJd7fSu9fiMSNKFsPiY3rXvKJZ8TZ",
  "key1": "WaDff9dUeGLZDJtEVtCHxypAaQvNefYGVccMkuNrDbDckfTSHTEDoznuedJiKVGKtcN7EywZvFdZwtMkMLCYK4g",
  "key2": "4678Ls8LXiaMUzxNSwfEScrAmEmBcWMNCiafyjim9WHWk1tyKuX3q91yqx4U9c2F4actsKJbv1Y8UtFm1TbtWz3",
  "key3": "2CJaFsr7ZEwgUWb962EdhnA4DZGmBrZT5gcrchBcECva23bLsj6qU4YxAokKwqa29gfGj9kxrGxcHBLPoerm5X6h",
  "key4": "3qEsq9KBFxvk9NPJKpJbpBUtaid2tCPTNztynUY4pvm3W9TKosLSCdMBKCL6bdq8WLyLF81m1dE8dc6qwrNJ1BcU",
  "key5": "21H9pVQ93Di1y2sa4dYtj5Rc6B3AqLmHrrZKGE5XqRCztBJpVxPLLqiwRD5KYnvkg3UhMpyc1SB2gffLaBAgZFgH",
  "key6": "3tBQzuoiWkHmhfY9zihrWbYQ8T4ieXnscUHVAh9ixtfVdtHp7bhC1uQt2e46WSPWKFkmcs3qMbirLQJrE2TAMHLg",
  "key7": "2X47Hg3xonjFwbCva4zdxAit5xS1Kfhqqg1rZzaxogUAx35JJVsGYnrjXRw55fhJuvz6mpM7HEzArHQTmZb9Fc3x",
  "key8": "Ao8jJtyj9GXrNey1sYoNzKnKnUekrVH3hcQ5gHDwPdhicL2MpwKrmFeS6iHLXZPueUWfqomdUx9mzXgsVegFHf8",
  "key9": "dXFenZH26YnPHzxXJtMpiim5vtDC3KsNMFgRzNjJfWv3GEi439yhiuWA4YLWsado59SwKp8t2b6nkcnyHxK5zEx",
  "key10": "61nMjrJFer9RxHvXDExBapcHzmqC4prmuu1NJFLAxqPVDrhW6v6ucrAevVZAPXDGN9dtVBfqGucw7Bkhr9SYjLxG",
  "key11": "iKjo7KbWuuSkGNHsBxpxPcKCXzjnNSCak4JxRAx2X975si42vumCFGzUTSqa1jADHehRNq9bcZwDLU2ZEHHYq7m",
  "key12": "54pnxDRJ5zrLwAbzxomqcqGqYJkZinMp6mSdUqibYbBULSNQs44QbfFBs519HZoc2RgmqJRHJRZ3Mi3dLUYdw2tU",
  "key13": "Xo6198eM8coarLRTdf4nDcKH3iyHKz8uAj1jVwU6JQknJa4aXmQmvtY8aXd8q3rxar3nbvGW7EL6kBVhCkfMaBd",
  "key14": "4k6UVuLvMGWiHvpxN2YCUbaWoe4YRvaBBWFgZS2H6dm7utGQGRsE2eoZVN4jBMhKNB2frXfuLSShEJtCBgRPykFK",
  "key15": "5NdBkpzpNkSebzfFAWKCfafyVi8UiPN9TPcw4QQss3LBZdZHT1b5J4BkQvkQDfgp4KwTcothsp5SUV81Vvwf9Uf9",
  "key16": "2gM1dZhWefw7seDTdjVqsXoG4REk5Yun43V83qNg2Y5X4DPyD4DeAsrwCQrC46Rq7v4Mk5UG66pnGcxnrXuP9ghS",
  "key17": "62ABf3f7TtqZwzkxgMr9DzLNuDu4RoVJcBHycpCDkEU5qLheYwBENY9WjjeJ8y2iVGhA1QSTQfBYKX5LF3jw5ZRv",
  "key18": "5YLpBK8Lw3MfTRU2Co7dbNhSQiwwk3u4cYvuE9z6SAoMcLG7rvKVh3mso57Ri4eW1MpPGP1CEEYCqLa5WGMoJnuZ",
  "key19": "62CXtNsVnJWg691v9tM9DfmjJxZM9fivonMa7UMQPERMovQxgjUma3EadnSaFHhfRqf6zrUZyDrXhaocgTTWYLde",
  "key20": "3JmifqKGLyoRQBB8LS99VuWrFaSHMokixhR6QAPpW7uucaxYajtd4DmULANewG2UmmAoyRrGzsgVZorzR1RdS9bg",
  "key21": "qBsmwWPQqxvBrukjVWe9sXWoe9waMENM1DRRPa8EYZxoMApCXEdZvUZo9voHWRK2sfscMdsxJx8L2LgaMc9xkFS",
  "key22": "61NZ7QkU3fc3AorQGgqqJ4GFZ93ScTY1dkRECqgQHfLkY8xh9nYBcF96s5MJNAzhwqhSNoSKrCvfmau1pDhvYTUm",
  "key23": "2CuCFFxY1N9VnA7p69e1t4cbxPMAE7qKRgcQyTULm865mmfcHR6zg25BdsYhvH6PgFPCxSb3dx94cyUh7ssDUPbc",
  "key24": "38kcs8scaMpvJ8JSe5AYdPSXJdhuft8N7stMPNhkfUbn8k19NNnnu4e3gdkYmhPNXmX8wv4Vhativy9QnVHVZeXU",
  "key25": "26PWnj9xxxpZdkqEkGXf8wRSffBwFBz1GJNyqiQGL98ZMh9HSWY8VuYwsSEG7xySCfMMMnUYsw8T3eDN5Fh2532c",
  "key26": "4z2PcCF8styTDegdY9VxXj7SGmkQtRvRXhfvuUDgcJhmMbnapTDipQib2TGM5nyTZkgsNkpwURmecZyG9QafaLK6",
  "key27": "35UJRmSDg3QG6NvdaG9mkTLTfPYAsWWHR7Esf99uguDtdRDG65oLyDX3NGoUMVf6Axw3ysfQKNSNoPyZpA4nfRTf"
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
