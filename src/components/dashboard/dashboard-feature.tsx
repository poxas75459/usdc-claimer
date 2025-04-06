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
    "4NVH2B7qpEttNmC6HNU2VRxoZ8vB578ZLG2gg42xbSH9TKv1qbFPTAgVgqsLwUSuzi3QWmw5rgrMzuNDH5y9jjMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cy3JS4E5k8T7ftWce2WiRPUfD64aMmpFhdsy3yFKyb8HYzVMRonQrzJpmgBXZo3aN4va5Ur96Ec9venFQUW13HR",
  "key1": "5n9JYPbjPYttCvirTYPD1bgYpXmsMEsjCNVjFxGHr51KeNaEDsR2FnFX32ocscKeWYgYJNxFBWHCwCg1336fza5D",
  "key2": "3a7CAcYVNd6bjdzRg6YHRhH3dEF9LrGWxC1M4PPMhTKqyiUZnL7UET1fThzVLuY5y9rJgtA8KgmtUY2hhAiHcoS5",
  "key3": "2yYCetdezKmoW6JeDm9bwDqKsS9oLD86S3kfKV6cufELnAoPNgVY8xeNbYWrYpczdU3mnUnD53vNu1bU1GW3ajaV",
  "key4": "2QZwwXiYjBkjFt5k6vBZWT2wz7rQecwiD1wPDWaEN8bryBVQ1FbdSsgWikdVUqVHdxKU7JvHM6WB7ceWHckGBySY",
  "key5": "2VpXMjBdiTWPZXXDbT88qDptr3Scwt5Jan4mHoX1wUqWbMDcW6fJN9nMcCHaUmH3AfY4kf9aM7ncdFhCmAPwizv4",
  "key6": "5mUNRug3nomGuKNNKd3MPWH4BWXuQjModBkstxHsz8LzPzYqqAQNQCQ9LwXvtfR7AwdmVNo5ToCTAjUk7PttHY3M",
  "key7": "drR3s8hhGupguUkzFqJ3MLo7AyJFpqZ28AfKeDkwTCJwHdCNLBq9eqC92sZUt5mnDyS9b7QCc36dKdiMkwxMMAW",
  "key8": "631oj5Jrzi7kr1LXaEumLg2KLii3AjX21dxQsciZPVs9FQbr2xG8ZjTDBxVEpandn6KKXXdPWzVxYfdQa8LaXE3v",
  "key9": "3tHnAaZGv5DfxP9S2ygrAXT4p4p77hWFKixsrFJS2oCDHhRHL6fbS5cFu5WuUguRyaVXEr6WzqT5XAP77QkKNRPL",
  "key10": "iaDZPYha2dVzaE7HEugzxtBCJuyoSPCaaG735YVGa9C3gnnUn97sCcMVzagYEyZYDkNBMTeQAzKKC2gHSH1YjWM",
  "key11": "3kfxEh3a5fg4T9GASBBY7Q9ducoHZf5wMKFWBqadKjAHJU8JFfgbDzJXS75dxFGvSytJhoHEcV4gFMBPRYFy4uyh",
  "key12": "4vTSozqhwG6FiMA4YgKT2BLqASBtaxstzWxxRL6yPHcWkC1eJCtZL7vmo5kHMAL9D9bPcvSwBkqZJzfLm2xFjKZA",
  "key13": "5P8Y65Cv2PXTuU1bCdgwnQ67ceMwuRePF7wk6eFGN1jTCVsuW4hnN7ewhfgs2WeBh4XZcxW94Ds624ka3wYPPmBh",
  "key14": "1LSPA1GdH9CHiRc17k9QiNcbLFy4geZSkjoEpWq5pkzCUQvuvyPRf3rAjoKEWvXJqtNUfWafJdbdb3Qi16W2nSX",
  "key15": "3PLVsmfVY2n6NzDorbAUA2ggsBrv9pyzWCVcWHpP5bSJmEjnXzCBW6JkmCySNTdJcVZMBD39KYUYwZG3wYE5s4zD",
  "key16": "3XHN6iVeKwW9LGy5TyMokahn5y3Vk2JS56cewGQbnspncR17HfANV1WYsMMXemsb7dtn9s9f8HHYrTVv84c5RjPT",
  "key17": "izRX5qqLa9VZxZdGehTrcFnaDFRMaiX99EhYGPjD6kJaDR4EiTKfNGkArwcf5ByVGAU571cZiPRULnSDwdx6PMF",
  "key18": "62DBGQNqSZAeaBDJbXbVFNKtxLsjQeZtwbynQxj1ueFCq48BbBw2X8wG8pLfPTcQ969o6WaDiUz2NxvzQYZzqK8i",
  "key19": "39gN6SmY6Vp2dG7151pNTWFqbh5n4fZjc1vCAkyr83xpqJP7wNSCwFd9zTChkbgDXThRNKdMgfYNitghfSkLJHfR",
  "key20": "32Wv28tMJAT1NmbmrYhM6LxiAdftDC8EEfvUFcDVxLznTd74h9sVCn4yHCHSkP4JnSHcbPcZutnj5oYiREfHTrZg",
  "key21": "3fS5r4gkwFX2i5LCsXv8LMXnmKSVsQqTyea7GzRpt773MfgYcmSXTZaiVrgyhguj3ZH4N25UQRT7zsmXA3GkfgLY",
  "key22": "4ZKgBVKy6xCqadsjX6qJ2BbMpGZFAQbxEde9W6CTT5Zy6PG6hzhoKxpc6KJMMJvuPkGojfcyEhRBpyxroKXCi1Yu",
  "key23": "3U52PW5DndsGcbzrMRVbr8xz1Rn6kAyumefCAGuan1MkGTfF75RwBYkW2tQ8oX5nBCNoEj3kLw2TM3APFeHo7A3z",
  "key24": "zxin2tmbbYvheriSiYgp17Es9K4bry8ezxRJbuNUk9u6F29Kc8Q6x8wt9rU3bCTuq9mGii8mDHyP6HAEXDRFCn1",
  "key25": "3ny1g1Nw5HiXQN9quiyQ9RhwKivuyqoWcnKDmU7PDvXkkjdu1V5tikdRVCyJMQgSAjPvLAX5FuohouH5DWnJ6K4o",
  "key26": "3cEiKjdaW2tgw2GyHwrYSAbtahs89QpNFnotKrSwBH8ef5GRVFn1rUrpLPG1phWXtEFK99UA6yPsEquGfpghRXHP",
  "key27": "3cXSc5SWdE4Q5hQYPp6AKUCERU9Rdo1SBR7QdjMDyBUXEwuoNN6UfnXv7mxtStNn1jA2dZn6LhRCvaPYp1UKgxc6",
  "key28": "2cmnxXvAwDRRUamizjB5QYBzhR7go5z8JgvpDjrrhDPSGEHVdhJd2fRADUdi2vpcBSxevNrN1X5crGF7cXnqQpV8",
  "key29": "3r5LPQ1TrQwf4MgBmBRL5RH4FoGxBvraAmLvFh1QRsge4SZSbzwM5v9KsZSKVukiT5snJhU9xjzNTGyFSsD9oYq5",
  "key30": "65TwpJma43Lr8VxxkK5ek5onHtNFc2sLaomVMkip3QVmkuscoxX5rvcUWC11L5ATBtQDReBNrBtQGvXdE9gLxueg",
  "key31": "4xnRxLCiEVosNanqXPSdfcmsE6UmbzhMfMJemP8599CCy8uyDgo9yWmGUydspYbkUZ2FyUuXz6AKDspwX6LpyvyX",
  "key32": "5YkKuWWGh168fVaHGYdjEFte49DXJgiE4F3Zf172q8pKmuWcwttdqhz8QhbUTb7eQe4LycATe5H5JWmzneDvRqFm",
  "key33": "4Bjbi2Ed4oBeuavoSPMMni1HQbktqPfYJCyNssdkGpqt6XCvKGocp9bsR8oAAtKBTAaSw7aKT7rxQY6L3avcK2HK",
  "key34": "75EdaLBihPxhk1poBk3ysjsiKfP3dCz8SNNHeeqYwhSR9LHpRRLoymBa2iJpX4EgtCSWP7JnENYnK1SpGu9vhkz",
  "key35": "5AGS4Mdguk748X6pfhGcW3vp23skRjM6EpErpo1RoFU922f35r1YDCKTMY2yyL1SUaQ9tj1oqiWAUFvHJFf514bp"
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
