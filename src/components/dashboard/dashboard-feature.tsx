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
    "YcrFLTpgsZ6uMeJ7oN7B7y25JMs5iwC5kmM3CZF66LaZtb9ERnG6GRz8FZTQxqPzmYWMT828bvpWw4UEyvDxc35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28npUdncTWPrvW1mvW6vmKRqa8iXH189H6jgh6Hm31RK7c6WjT1F2rg2eDb8br1SoxGvMUjXUNnQwVBCDeqt6adJ",
  "key1": "4SnXd9rB1omirpTWNWqN4vQSaWchaWYLEpqYhDrUFH1byLZxdycK4B5tmNd9tC7APu6Vbz98Eh9nHPFXPVyaZKbc",
  "key2": "2sfrQUHtK6qYqq5RhAPqjr4A1t1eg3pxrGewZpbFBZncyTTWZL1c1dW3L6KWcD7ycFvK7bzWjuPkjRcBtQzNCjTg",
  "key3": "zpRey4ety7vj6e3cmqqjqpU9brx52vcvY2wgXSyEQyzkvtyXQ2FyVg6BtqCyiJArAYJQxpBsXcc1b17c4Lixb87",
  "key4": "5nkYtM8g4uBoiEq7zUhRLD7fMKkPCE4w88Dph85z28yPNJoX84y5EwZXR7gmXgAK1nWKqs3hRfrcSNuvGxtMUJBW",
  "key5": "2LVxtrBG6BMEJKbtnAPwczNuP8NDhk2m7osYb42hxzj8R7v2PaDxmhKjExYDMWWirFiqstUWf9gguPG9ZgkSB9CT",
  "key6": "5R6CUYJxTrnkhAP7zb4c43bCyscsDhs8QXZ2LP4fRN9wmBzbhKGukbUC7T8KXZePBgVY4nXvaYk5roYmJXirm6XG",
  "key7": "5Z334XEQXnuiqiKi3yDyirPG27RHSCm5PRYT5aMWvnRBZEAqQTnH6RfeYMFxSoEzvnXfnLV4Yz2TKM63hubuBgD3",
  "key8": "4q5zB2pDQiX8fHAxLpxmcXuRL9WMHcySszeqzaQVxmxVE6WxBMhWh5GWoTjxnEiRPCGgeBmvDvV2hy1ECtfiLc1M",
  "key9": "3exY4TJHmgtcTMDmeVnipi4pnX9yXuQv2dWxcZF31YTpHn7eMj861xNp49TnwEGSVvdM3hNuzKmTMkuq8EaMdPPq",
  "key10": "5TBboc2yNqKXn3Nh4qci54GRGT6KePk2D7iaT74ezStq5drfs2t1jjfmcLgqMAYLAtAKppKqLVvLUYN4ZTtpeNbC",
  "key11": "RSta7bAL86zPnP36F9zTzVWnUpVnShJcvaVxR6LiKeQdUhw5WYpat3Vhz7WEgUawnd91P9FAtwYYr49MTyhHwKt",
  "key12": "42y7XfPnFm73qftB2DhidD61EX67aMydWor1oyw68fQHzw7K91iyi7iSPntN2ZqEwdbb6KJsdEEN9WmLZc6EaBmn",
  "key13": "4ZpQLmNKmsbxUvtpNbXKYfAJV3Eo5qBkD8dFaz8ykQCiV8ZgWgcK2F44WMYD54D3sUEAHwJxTETVgLzPCrYpoNYU",
  "key14": "5hTBJymCC8TSV9VKwZJcV4qviZJweWHkoe3jSkuvZ1XUJePDzoExgx7KKhThFc2XMp6fHct115NfwWK1RZEmsgWY",
  "key15": "4xSgViL3LPaTWoondj1QAhTKzzuKsRCuQSjdTfjVpJ5eWvAHQ6W8kyvHvApAyW7F2dzcNE2yDCQg4VcvYy4CPmbV",
  "key16": "3h3ot1xFD7DvwCNu39Qidnf1bCtADe52PxfU8j1oMRafUN6HkpYEvYZhYSuu1K3Sji1hpEMgd8ZUxZzd6NizSNWy",
  "key17": "3vtMkCEjtQzChVSnafrLkDbrkbUjDT25iYQvvgdc7pqD3n9fWEHwk8ekZCceX32JuwQ4CsPFourR1FyqUfVqxDKN",
  "key18": "3u9xXSoNAUzioocCeef6t1XDKTJAVqZr4k9s3GR8D11SYAkz7jDfVTaVCMwu7wLCLKTNWgUnX7JM74ce36RvdsQJ",
  "key19": "5CLone6LeQ9g2dMKbY5ManK4ExoeuWeLRZzYB25gFVZRjc7C1YsgY8ytn3wwNKjsRrx7WkFCLoxSej6Eb8DMfHpP",
  "key20": "2jMQFYpjLNM6MKHhaGYbuv15jrurDzr43vpMfeg7yn128QWRa3FFDvk7tPy7DqzGbDEZgoLwThHgTjLLDn1mxRCc",
  "key21": "4UHxqrVpN8v1a9GBmKzqa6DXUdM36q9CeFWf83YopgSBPfTgouukcEcZyFgWHM6BJnpf9aeTa2hR6tRhmqyBHSWL",
  "key22": "2yAL2JaVfCpaaFJKd7yZ49PnnavWCCsD6Kcc4hQ72ztLRsC5m4TLPoJaiuD5ijRRUXvFf96KLLSGNHbarCGkyZGP",
  "key23": "3qMes9CJZ1yzAb4F7NgGuqVr3N67hHTSL3VrFNjpuqgKVMNRxmsYYJZCCxZRjJZUnryEKpBDQGzYcACna4KupoVy",
  "key24": "4Nq62aebz1cgzh4dW3DTDhDfwz86stNhn339NpfMpwo4FFJNGYqU3dnYEh9EhreEPode4HRDFM85M1XCHs4L5216",
  "key25": "4o4MGjqS5zbzSVXdGAoLRZyawBYmL62GYmjazG443mixQH9E8hR11V7XWQX7dbouwqsV6aUc3Yi9W5upf9o7wt9R",
  "key26": "oRrCjRhBb329iKQCo4MumJgu8bcwskgkasZkzUvbYCGXy9sfL19VxWDP9X5fhAgB5hLLQ52yjh71tTjfyjgA3rB"
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
