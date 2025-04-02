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
    "UbLdKXn8MhhiUu1zH2cE45dGXHugETmjMsSNVaw6UCFKrZ3JxHpR9TpKxkifjoZiUAjzRCg2tftzexaGux6RvFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C5iyEocBQFRbhHkuFT4fEM3Wow9QjkXJZniKpxEM929P7Z1p4ayvJ3wTMPZNERMZ2VBDKxYYQmLmAYNKRoGLNAU",
  "key1": "2h2kBwji8Yik8D3ouiTMV6gtfKDG3mmL5Y2wtTCR4PAU1jYGwiQzgkdZQcU8B8UJxcyj5VELsPLtDNnnF8PBdEDt",
  "key2": "5Cjd54eFcd848YvYqu9o82P9e4HZxrxRdb5qB8bXsAcczGkmqSt8vnDKwzFHV26RhbGaRjkWaBs1g2aFYdUVBt4x",
  "key3": "5fw35puvEK86xSvDTgXV8tLTsdKJxLTPyxW2PGF7Sm8UCQaQkf4r7zx9NN5CCMT29VLmrMj333e11xhvGpziZV9T",
  "key4": "5DdQrrKTD7qg5SHmn3WTW8Na446eBp1g3EoskEF4AJZ3SfgDxq3byQQYpuBJTN9VqE2h3JcNfKHULMZgoov4t2L8",
  "key5": "DR9zN9WiAbnUWyVdx3XryjbqkWLNs7pYoCgp27FYRgxf1KSRq7fGUs7zFLALXixrinb4W6mugigGNjUx2wqAwi5",
  "key6": "2P8CUZm8dHK3iDcNjD7rCvwymfGUwRxsvd6dHESxdWG7hvNEJkiaGfkkGVyfht3jYSdGeFCs7fCjjXERyuWDnWzk",
  "key7": "3TjMA5MeWeHWdpgSevKWdvjMFq11P21kTP5VSTGGYNJrjX5BngfhYoxboDowVxHCUkKQq2RYTSFuDkQNyLdqzsQD",
  "key8": "4xG8U16EGcL7zNxC4NMP1j2RE97DuQPvr9RY5T2NhScQcZ4WJ3TfiniaeWwHKjRQWvMaegn4nzP1aFSas4LejJAv",
  "key9": "5z3XKFSsRMNEt6YiH5svyFtgpWUxEGDY72jb5NMsd8hjG2WxcF4t8NbGppRReYknfY5cE6m9ptDDdUPQKj383NSb",
  "key10": "35xqXCMqXMyxPuwDpYuz1LABHziGXfmTqNEGoTsqVK9Se34EW9PvGxu3oTWrTjgC6gwxzaJ76EV2zGGxCGGq7hwk",
  "key11": "iieEGNt6xJRE54ANWsWHtZu8UUWPc6MkVbowSzXQTdz4qjo7dDRgVBE71HZv9oFVYn8Wg9DurLwSFbEghaStvsm",
  "key12": "4kGbtQyKVYGWAWncq3CFxJBUPPU4vLwVqSpwBqmyy1CAVdcrmmw5rZdePrbjeTXdBGMiiTyuGvqDvo6hGVQraET9",
  "key13": "66DARy73uzwUQ4sLgepTB11o1jrghzfdHFL7GTBLt6MqmzVQjnaN93U6mecijuqzKHxzotJxzPCjASsBhL9nCRrN",
  "key14": "A1qweG8feD8zHA5bqQ5zhpYioH6svfjaMpSpHvUcHFc7iuPWgXSR4MkwTAAMP6XTGnUf2TZMXqj3xmczLdb4UsV",
  "key15": "LCsx8zSoskKJoP7TTkjB5vKtXoTCCiNS959CxfGfqeaPNpVN7Cjkt52wazinxsRGBYHqE1pmuxi3de92SFy8fH3",
  "key16": "4Rvws5XWvrn7Lt1wE9jsuRstreZGrXc4AKjgdhHTVw8hPtv9ccvDcmqdcRJJEthGx48YEy7kC7kgnjFFNmsP8ZVH",
  "key17": "3LhXXAJNVx6k9eFt6WckWPebUmSTkm4dQcUXQjcrQXCoLCBTfdmYAv3Ap8VkbfDnRx5YEMsvXBuozeG5exbjmaRB",
  "key18": "5RRsjwrJWW1kgzdwwofHnjF8QKmcxGUxwHzH1Ba1heTGJia1MUoxxbx52byPAwQ68zhmWgUfwfGevRvrHyb7qMwr",
  "key19": "4KAoZu65nLcFLEwYJ3wNUMD5CYmwWFkgZnfsHwGjPTJ93Rt5mABRNVkKs1deFfbvT6T5b1YJVTYxbLoAAYGsd8DL",
  "key20": "gqvYNHDJMXpLqh6jR8haLHQ2jMncMyDGbpytAtgqraABR15HhXx68u7jNoPcS9ijxnp8LRwYY27uM85sSfGKZX6",
  "key21": "Dgf3HWBF39iAJRndMdmwRzFLhDjYyKKeA6YQzsn6xRPj2LMJ7t3WfHBNMYkRdwWK7s2UisK77cXd4TkVabuD1no",
  "key22": "33tkoh6qapsMUdeH6ARfcviq1YoYLdSjrwufBgbBAPz8B2zt2yXWE3xFKff36MHguryjQdsyhb4q4UMucYPAbrBb",
  "key23": "4R4V9EZpwh7wYAJgD78QdABAWBR9d4272U8JHTis8xfzikdztGMxyCR1Sq3YHYBprDvSAKut9ArUXpTmXFFouDQc",
  "key24": "5iPVefHVNMLce62CSJg3fj5kfxgyEoR8jqDcqs1AhPCypQB9n17KQ7EQTEwYa8P9ueKkVwzjSQ7ZGFpvvc949mXM",
  "key25": "3Nrrcqhht29Gf2kChXj28xHsvZajSwh26Wg9a6GUqfJ3aeXR14WkPSNB1XLZ5724HjkYBo8FDKSajyZm9QGFBsqB"
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
