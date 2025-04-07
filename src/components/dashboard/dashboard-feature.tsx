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
    "4frCrmkyUaJMR8K32GzWmMiranC75x1RXrYGBRPNafJ2fLog9FEvYctRuwMGgA9SZVQ9cLRmaZjEfSDBU7m65cGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47KFB7LCPEDg5AertL7duaVrZo9PBSKGy45BmTXBatnmMf17yJdiT77KXmoXkqNt68KZS27VSxzUd3Nw2nxEdR6y",
  "key1": "4Z2SWcoewPUMaEU9CC8HLFoTt11RjBbYtNytgbKn6mpDNK5uSLYEUa61exk2aSbgXYarksWJYktWCgGiN73XpzVF",
  "key2": "3HLbs4CcYRRNy3pRw3aHYiPP26XKuKjRHtQMAeGi516tp97839FdQG3a8o6rsvX34ufzVujRttUsfBjAT1xxLa9Y",
  "key3": "5RtYbbiWWTe4dCyY1s4re6uqbrFayxGdi2exZvCFt6AbyuFekkdHkL7v9NFBUXxcotB4eEvoiky7mPiWm7zPoswU",
  "key4": "3yoJSXXAejpmsmqkp7f3BjbrPrtQcbMydipuRru34fzpfiUri2GPka346mUGEYtBCuLYTMJKwgsYri3m7NiBeMAQ",
  "key5": "uMiKHQjBzSCYdAafYVetzpsJbBHU1mYZ5Vvnv1t7PLve2biCxfigYfXUyL8Cc8233PAjXTCb9WzHHtx4d6GXs6T",
  "key6": "ad45bcjSzmhQUeHYrZF9NYmF5bCYuzUKoGtwhNatsWxPAqzwfpQhubhUNYjYZ4CDfkpKBbQ4LRwfXU9JvcW8BqN",
  "key7": "5QQjis6FABRd7YMmv6UQ8hkoNKLgw2WBVV894NCy91jxHtXTbRGwqgh4nxKXfo9TfmpAMs8yhwcjHLr4jWZSsRRV",
  "key8": "5NNuTJWiCbEipBHhEBqsa8vgXCJTP9Efs2UKmtgnsCd6d8LcAF2pdmBESB3i9GhkFfbjiVnFyrEbiNdqp5gtPim7",
  "key9": "3UGb3awrDdCyEvLZasQKy195Gs7c2qMcCqG4Pg7gmtAn1NYKB2QwowYCwgHM75RzbpN3nnuZyTUTkfdG1V9f3J65",
  "key10": "2KG63se6RkUSsy5qzZKRt6E8n5GQTUYaMKktya1u122q4zxB4Aka2M44eVoNAKfgrn81unVr4kbvzgTkVfucxZwC",
  "key11": "4ZPPKhNVDo2L7MURjL4oT3x8yLJJHJHH4MWeEd1stPJDbtJW3nwFjHhpCr6RLU1XFaH9wdm7677gnpvGh6FqXAwy",
  "key12": "5WpfgNP2USKG7XRDVsTzgLEWGsFFQMNsTWQJiJMDs5PZ8bxJr9TxEmiS5crzQ74zx7gaos25R43xYaLsGzFZdzwr",
  "key13": "2FQ5o8SRQXeBafvMDrHbVqAZgb9Nqr7VS34urfVLeSEix67bYxRivJJz9t8FDaq1CSa65Pi8CKXhHfrn6ddx9xyh",
  "key14": "2Qgc6jSX66Eo7DJhJKBhzGKp5euyexbzJcWeBsjYNZhmN3s4y5npxs1MSDn247YiLe35ykwAn57mw6N4TVdXSCpy",
  "key15": "fFviaq8KWxBUYoj8axYvtPPFJHx6pU34YdbJQNKuAX9ixpQa9wTMVojdU4FVGSfrgqBaV2JqnzTZJrxSDxQCG2T",
  "key16": "4wh1HC7v9Z8yvL1G3W8Vep8Vk8sEhHioL8PyRHJ3c3fzDSE2K39QvR12SEz6tguSyoQSoBm7AT9T3jeASGveXXHB",
  "key17": "5Nzt7yEwZq2tRwua4fjWBmJuGBtvt4hffPwkLZ7cxVKmf5NBgaXXwhv1rLGQG9bJECdJHmNJ6vRUX7edeQJovDJL",
  "key18": "mXDSCjqnFHVeGH3iWtFbgYqJYNC8qebkiztP98G3pbsV4vccFgeshZR6tfq7cfGPaE5gnBqBkQwbPPpU5MJHenq",
  "key19": "37B9Eg91hALMyCMaEoKUyS5tbTz8ossz92dpqCT2DxsCQx6bE9gWHL8CZ2xtr4cQby4rENmmbdLfACHavoePgoMg",
  "key20": "yoiwEfruZNn8dtfpubVXiMRuqTKEQ8BKiu2oXTJnH1fN8LAeQPksE7g33miXuep3Jo7Yjc6z5XaT2CTfdbMq5CR",
  "key21": "2D3aipJmTGEG7EcCKNuWHG1Seb7seD1e7ya9VrhdEuYDEsuDm7Gbm99vuDfVRQNGXsBqQBh4Z4WZHP4Q5nFcHn2f",
  "key22": "4iFAYc8nWheqjZeLb2g7dRKHjXLfiByY7cjGwdGZbJZNz6EZ4dBzfUQVzsoTWWJkF91e1G59AQpH1a54pL5pu6vD",
  "key23": "4H1X1rSNEyqFREkAGE6w3mw3sbv7XaAjDLELzdNdBTn93o3yKqF568zJAs1WG7TAYfWmMZFDE2xA1zRCwYa9pHTL",
  "key24": "BZ2SvcgCj23s734cigvxD93mixvHaDiAKboWYBZP8SQ3xZGGFScCxs8gQUmKCSCLzVe1YCcX8DjTeNB7BkZsCmo",
  "key25": "2JVPwfYhs9FYTi13wPTykMRMuzPtbt5sZSvxANrxjyA1mgBHXqXV999h8xxGgY5Dukgfrad2sg8sFWuGdy7RXcfx",
  "key26": "3sMwQZNt2iJpSFuLjeezX7oyuikWsn7yrPEJ4vDYxdn6xULBzUSM3kuZv43vMVj5TyiF98D7w7icdaseqmHd4AMS",
  "key27": "4mVLfgLNw7FgNqhVrMoYiqQQ7HAiX5RkNziPcAmTcUqGrgGZ9ksWDBUDf3MbpvohjZMd4ZVsfa7nAL3AjUkyE1h6",
  "key28": "77NCfcVdC8aSjE3zWiKUyrhquxEN89etDwUHkcJVz4noavvNGWkEKEyYnXQnkFJajS269CZd5K6ymQmqA8MLDhs",
  "key29": "4o1iKQnb8sSj2zgU8tiw5tLAFe3irMA6JmiEN7sCyTPgKn2th7Yt6kohtkJHuWdHn9RaWrusbK6yu2sg6K6FhU3e",
  "key30": "21pXBYKD84N5LE32WEfBbcVZ8n36XmXFHmNga9iZiJZbyMZwMyZPqQtW5wQJAW6w1cQEnxRbWJEDJYPyShzRRC1J",
  "key31": "4RhptxdbLbqW3g8f4CPE8EhZaqYaQrHaBv8zzmYqegisgjVVdrRE7DigHLjDdTdvESh6YSN1XCmDd6aqBLNbverF",
  "key32": "3pU7XikRSfaxeLMPJ14Df8rVy1dfoQCAMyAFESknVTnm64TcjM6PnP3qiVd1dzv58G9vNhTH8RhpcGVS714aedxA",
  "key33": "BKKUurnZbWXpEX6Jt6HPrpFdnHGfCbk62MZrj1K2kHgoR67bDEpLxkG55v82JjojYaAD8hFBQ9tFxiao4CBb5FN",
  "key34": "28Cb7CUsbiKSsWMgCNbKteJaVjMsu1ArH3btwMGGgP2tHzxoFEzs49xpWvwK7MCu3t97PBLycLsYNh9FPi5W1c1s",
  "key35": "3LeZuTb1NRtRHJN9t3bwHRDGMu4woZyYacsYwtjU4x5VsxpNNdaBYDvMaWJwZJNPAvvR4voPYaMZkLHZn8vZfjXW",
  "key36": "3psxBq1iC8q8cDZHWAYqSVHVAG6Ws5rjM6dok4v4jBh9UyUhUNRC7w6MGYm6LtHCgmykzjTyfWCqTpfeboKsimT4",
  "key37": "2SLokMVonfrJQVtaRAyZiR3caEYn4HTreQGxqFZJZ1HZW3J9v5aEBqbt4wZQ92Y7bskzoF5SB4L8exHWCT4jZG76",
  "key38": "23AjyASY9ive96CYVNnjWDcvgxf1Peq1EvFomkyb48xQ4DhWg9hF8fwWUcF7XdhCSDE4ZF291MGbKBaYLYymbLBy",
  "key39": "4qvE7stHLbxSh7aBznabdNJCoHDCSs4CHYGR9tZPWUqzmxAETJPBB2mxmpgpewQix6WXUUuAoZhU2NH5VqRx7ogX",
  "key40": "4GUQP3dSZEjwGSeaRedr5HdnoqrR3i12LigHTLgw9w5yCk36yxkUdB4EHi7PmqubzEsSnBne7aKPwgjUsvJD1nMc",
  "key41": "4rt8wa9PVMpmSkgUZ1acDrQ3KwRCG7akPoybBXKJGSz3eZ6tt2r3E8c2ckTARmgwc9MtyZVihYKcpSdbPtX29wzo",
  "key42": "4aPmp2LNLWMzW1znWQvEqR1wT1CPBxS4o9gs5114fc7htx882STkENTeH2VF7EgyZEA3nGFbePKNzi4HfFk6Se3W"
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
