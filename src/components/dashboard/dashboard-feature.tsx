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
    "4Xcp7PGUiSVm7VLWeK83Jw1SAcMpcWxvMUqsriXxVG4vPZCdBd4d7vGCM844HbfLfUT1fzRcAc3UYXkQo6bN3iJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59eHsMjUfqNKmB5jM7bi646jjWXuY6zzhBRQj4vH2yJxvH6eGzievY8v9QfsZgywb8pfCh5Nx3sgJBUca2auCHbR",
  "key1": "5TJvX41xnSaQ3nLaP7bWZrTNRcsTcNMAw96CmKRTzrg3CBYmGSdibMxsnRPxgkKeD6RgDdANM7Lir5mqWnUDNwsx",
  "key2": "2W1JPytM71dHsVfRukmqxYnivM6tHQZCDEGyM1XDBaHhkkrUg9MAU62ie3abBMcPpPU2qM4YSqgBvZ4wRfm6a7NY",
  "key3": "pDcDb9JDRWa5wpsNyGW4QmLHL12eY7oiG4xHMEfp3v2PQg6vBG7NTNkT1qyNa6mt3Aa9n9iRVHEGQfmRyw6fHsu",
  "key4": "2SjjtdjQpatQtU1uh1zjtVL9XrxXsAjmytJSxG8woQmwa463iRsh1zLp3DTU6wCrAwRa78sRya825tcQc9G5amLh",
  "key5": "3ZWCahTKHwzD9zNPwzUnEUnLEipsGWvV6G6Fw8pfvb9Rp9VTm87H8AmB6Ao1gA2A3aVLM7G7ptKe9Hg1sg3giRta",
  "key6": "5XZsohbjFUxAqpRyPr6czHQSPzWv4D1hNPwvqKXMju4oH8ytRBUmGksQXGSXzkMjGtjKjXem2qoEo3m2daU5Kdgu",
  "key7": "58smVehdkH29PDjbKV5GCMNHaGSgNXExHr4krnrsUZKckABehXYsgC62YiSfNNePfGp6WLvUygmkz1Zsi98kHVcF",
  "key8": "25pDWb1q9Ka7JQrXpV23jFBHykrdcDHyvXYdn7HDtRd9i8Q6kdaQkSLFSZUXf5a3dU13f6Qy3LynuhGmWHFo1nvp",
  "key9": "fznruwY5uPgJ2SDsfuAzReWoRo7P77kEZ8QxfQYzEE6EMDnLt9SAEAzRnNVejUpfynx3TK7yd9zjjs2151e7wR1",
  "key10": "3689qQNYBqjwSGawkbnoXmgywSmwNWTaP3iJnUWzSMWuyu5EXfx4SXbzAx6qi5nBBJKf8eogcxAE35WYUgtA9KzF",
  "key11": "5PsW5fpSwkGVMTrEAzQ4D1CCvQsK7jjZA8NvhDeKECQzyXrHjSxPFBu2V3oad4dAx7N2sH5qyygwtn6ekNx6tdbn",
  "key12": "5LUsebnKwsndsWDjQx1zH6C1GrNRF4s4StfVT3TbWJTJYbeSCaFwZZ4hsmgqkkMLhRNPqY9pYsR6z8WVmvC8UoTM",
  "key13": "2s64oVYpg3LneKm6awSVuBZMJCUCu6By6jMis7CDNVnHfGDnTvZxDddaPB6XsRPCd2j4eKXtrWRHjKtPRPb2eYvC",
  "key14": "4NuKJxW5rYT6YP1x8ZVDd751FWKsmcAjd6BPnotWmTL5WELZKjezyukSjNr41qhTwcoVXFyiSusUUVYGzms4rThn",
  "key15": "4miCBB3qKcPKPXF4twD9NiVGUGRPmBz2CjqzeWWXTKXzCDp3hz9X4pApGNX6APjY3qqFkyXCJkgbdUYrhyMzEw9W",
  "key16": "38gAJ9vkG9epaVik1RP5SDMSNLVkLKew8j187oMspC6vwe6EYG55qrNN3FuK5jU7a7ip7wNdhZAoj5pTCDJfVmpH",
  "key17": "2ejXux4qLdL8MEyvvpevtHtQpbSBQ1qTUV1VFJmb6xYodtXsoPFUBwyeDrBbENN2NHwV5rXiNWZf2UPVSwoNh9ot",
  "key18": "5JFCUDyJX75noBujKNHFJrMdodPKgEkuK1PTHcrf1BPzHyvcr3zPf2fnWU1X7bBV6vZMoCobrchcfJ8AAw7FKGYZ",
  "key19": "3ZxKjKH54VkFA9PFrZCAd4aDzuozSQh6rLbDWbHfdVZ8HEV9Q8uB1mdkieFvd2ycruVUgaodVDss8RXU4pEQ1QBf",
  "key20": "3byEkagkvpPbxr3NKGQWzFSo9u9Hm4MZ3uzrdCKd863utaLQ2sAFw65mjEUzMpRj64uTZrzChJkaQXAqK3KHeB9R",
  "key21": "5PCC3DYEA1RrL2AXa2JNRHZHreGTzkw2tPgfmGzz94GwfBB4cyF6qd8B4bryJ3xSu6nHngSSySz2G1KGryQkiwcJ",
  "key22": "5Wty1nXkHSCGjY2bqiVse9wTo5XaJWwzYZG8DUnSrZdnSa5bbQ7yCW1GNhLMU73d1beyg8Tcmf2AqJac8ZQTFPvb",
  "key23": "5UZQoA6D3fTrPRc1g3EtUrMgnqtLhrRoSzVjyMq5ponRqbnJmDABE2zJc4XHMkWAAhkPBmmsocPyo8cKTDczq4ju",
  "key24": "kRetkZ4pD7aYrkmUymvRExW6SRmJSuCBKahHNTi587Er65sWTbmEKZqUuhDWnD4ABhzjvfo8edhZJU9zACGxLMe",
  "key25": "5XfGdkzSYfGLqSxzggiRHf1pzE9kJh2PZeZ4zAo26u4Y256svLv6FZQnKdPC6CjMqi8bH9jbTaiErQcGWKD7XVkB",
  "key26": "4TJpbSQibQw4EnR7uAFCgYZy7ozD2LpASpu7D8Z5q1tTMEnEzpnmk7B5sjoj4whhKXxNfc3SuqEc4VzbKWkHP8Rb",
  "key27": "5B1AXqHjhyCapUy9meD2we7Bg2Uto4eRDtqAVQfWvxLLgo8rmjqq5WQe2gihzhMewKutGoohtNy79oEeFjZvSv8J"
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
