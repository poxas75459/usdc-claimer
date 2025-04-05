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
    "55C6gKeRK67wv5CQjEtVBoKQgBP7KbQvqNZrAin5gGYrKbRAyR3pqf16qZMGza2HFhCzmFVai2dyox8JVzUZEx32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35693qr6fn75R3cKjRcuaMgXfZP6o4BneA52Cc5Rtwjhc4nD3KhoaXfX9h8cgxPhZRUwNic6Yw29AbhfUofhNFYy",
  "key1": "ZSBKF2w8Kttu6UPAmierN2hHcDwcsUQ1ruyVqCTWnfzN2E9PRkdiLGbVo8bLpJZoTzQHTkA5Tu9Jyrq2NGLsdUz",
  "key2": "28YqAB8ivevTiYKZhE8qBnLSNUefKE4qzL7rekSFdQW4SBDYZhA2yVMVZrepnWhfeYUwoscSdUqc26y4GVQUxixk",
  "key3": "2ZoEwSWxqXhP8xskkqsFQcte1LL41PoLaRzfVSy1j4ApsAEnSBs3drP7ha3SpTZkGuAs9hBw43EhZaorRWsuVggw",
  "key4": "EbD1cGzLu4FkTukX4SwNA8L9Nt85EqAVY25SbwaRwYfarpyvkL8s3pD1XRbgE9Li2iL8UrMtCzvQqB4t5YjEsMj",
  "key5": "49hY7pWTnCLkMqZWqq6T3tg2DhATw3UXDoN37uiMLpAGVH8FXt9ZBGeXnAqsQpuHXWV6JdXPSCdA4j6ddTzZKkjQ",
  "key6": "4C6j5c3A46w2j28NNb5Mfo6uX2pokoJsSLEXYQYeFYXUk1bnhXvXqoERxX3uiR3tUtbSdbH2Fs57TtXRWMkHFJDw",
  "key7": "4nyEfYDqvhmxQtikNTMYwu29swyvs1PSsdqs5xxXkqsc3p6sQgSBMmEFYJKAECKi9o9Bn13wSs9hVWfQYPUEHeJW",
  "key8": "3M3pXNgeh7BeBf1YUEAt6pgyNbXoqJbDFZjCWfAe4e8QDFny7G1yLbEX3sT8eF8XTg3VyJpacZ4eX3rYBj5Y8dG8",
  "key9": "R9m6Wq8pxKzVJgkNfAjMvoFyNPz95UXdVLGLr52RTLBChYj34jFBrGLscfwaWn8zNDkMMW8ikBMgioQfSk3fmt7",
  "key10": "2n5vA76C6ma8sFEo9w3TfZsJWJdfFNqPztR6WDYfAzEVoXPWN6bV8mucmzEVfmuAqBR6gQU3pcGpPpcDNzXX8u5i",
  "key11": "47Gctz5ckpTmAECd7ge3SEmLmis3zP3E2srBctGF2D4Xdy7HYEyoSsy84HX4KfnGgsKQwmy2wQ1tph8caFgxhafJ",
  "key12": "53XKytLxcLGPYPNiqCGJBCDYT7XWeA767nbW9QxWZQ7m5SYfL489oCQg2qf7jVVV1W8RAaDjNRsdyvxJgkBwaLoj",
  "key13": "4C4durjTX9YBqNvn15J4nwcTTNunppr95tn3Uf5fnWUf5RSME2Y6WZrtDHHRQunLvdziSBH1oZJccXUpjJX5rh23",
  "key14": "4AiBWeQDihkwdongeHxzNDMV9MFDK7PyyAN3M9Kk1kghY45MKW7XKP9j8UyCrpocL4eQPo2wWRgLpAj9f5eN6K2m",
  "key15": "57m93QJt251sbyLBU1KVz3YExswGZSJJP6Dx3zBC1mDQffvJFDyA3jwPjtDyjcHZWfbHb5UncJ8NdGyxNoLpsPLV",
  "key16": "CvMPysGUvX5T5yzXUuHace1yFPa7h62RwgethFGFW65bMYNAkLQikp79W9PEUPsUrnqAiqzyzryY24e5oo8Vp8n",
  "key17": "3cpXv4hmX77PATVfrqxWgWVZa7sZQkxS7g7ciXeZEikr1hHfAwvh4VjkrEmZtRfV3XsV29HNxDASyvqiGWGiv6Cv",
  "key18": "38tiGXKxUnHWgQXVDQqqKD3962bU9XHDFDoAzwcNJRGtJkgxnQ9qGEKZNmZC4LZq8vjDac5prParJYMVTi3Z9oNS",
  "key19": "T57ESxypj4wfbXkbmjJ7DPnT87YQXGeappUxpZY8BhgixRGaSvmax6hBVypGPjpVRnmFKtPCFzfbD6PGBd4meS5",
  "key20": "52ukq4xz6PKv5Qgq4SLCiLcVfuLygWnvvABFv73X9CCzj4NJ6kBjHcKdKXTs4hB1HtUQiz2ZW3VzQFVTUmnxssGN",
  "key21": "5S9VSoA9ZnpbXVizEwoYq6pmjjLwDGDQ4teC8Y5QyNp2ZxkWrsGFi8PfkJdJCuKyZVXK1NiE77xB5RgHuyvBRKC6",
  "key22": "38fXZmvNukXuXdMLg27HGGoBHkQ8f1sia9kQccHdQDuh6Ut2JTutSe9tTVsKhAwf5vss4VkUiBtHfQsszaNoYLKN",
  "key23": "5FFg6PZdAKoALn7aEzfgu15ZXEXoWP6q7EDHNc11xK5HseoPs4PWT5QK2iAeo1bV1E9a8QHT7npU533pfz2NiAzp",
  "key24": "2KLYvJwBZ7u8VHssiupBLKHX11vn8BEEwaSSqkfq7YPUhxMGM6BKhkRVHyVESKMBFVzczXVDNg3N34miq6DDA4vR"
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
