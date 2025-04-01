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
    "4rn4gKEH98zWgyrJnm2asBTHdoywCayNxcTK67gd7mS7Zz5RiivXCDGyjNkDmtvMRfLrmWoapqG88nr9PzqE5F7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3okvjwRKq28dUPTjbvKfrnUnKfDQZQRFTsKTnSrXWf8dEhgpmAcMKMrEUjxTMs5RM4UCsw2KtLq2cuLHh9oz44bF",
  "key1": "3ji8iRrkLrCVHX4GHKsPcnHFxNWrxFkYTpkEdqDuzs6T5RhAQtx1jYWW7HL4dtMK6ehkoyVfs5w6HCjCY5GZKvPU",
  "key2": "5vTMDd7FzExmXCGDhZiUwdvUBumCE8DP1oqHb2iwJjAwAG7B4GbVMLzjGczYXYMeXBVrkx7TnE1n8pFcfFV5dEV2",
  "key3": "WfWHfbj7GjC2TDR88NCgCos986VsnFY4wdXPqji9hJUiCn2NT1WGtAgqr3EwgpmuUHjRaGLZiQr4MvPfDk5Tzzq",
  "key4": "3HhB9y3HXjfuifsmzw9QGzVqLCPs3hEqH6Qb63YCJLhSrzGHhrfruzKxcPgdw78BEtPddaNyW2oMPDYXaNiKHCkE",
  "key5": "59YQ2Rybi6v9vZD72XpLY2SjPczeFJPEa5D8gV9YCfb79WedT4An2ovMjLDaAzUR6amNVcQ2u6k5RJsUAeQBe7kk",
  "key6": "2CYRLK7xgp2MLNAusF7KxHuHZiYK891fn3sJ5eoXmjtjzRJTYMRQ5xSwMaY5mWV8EAfHTxTwvVycNxmCUf5esHFj",
  "key7": "3VcwCYoyjQitxdRaqDWL9q3mt7eagTGHBi5dYnbUYppR2gNDaVvTAVCHo4FCtwNQ5B7wLS4NUuLNxpidfStZaYot",
  "key8": "64jLExTQQWM91fMF8uekMiwXAB8NZ3kjgiWWoCQfeqZTCicSRzz47DMFLK3d3seCrqzX68yWNjZwVWjxr2fNnhyi",
  "key9": "3SzJwiF1mo3PXG55WwAxQUzn6z5J1QtPe3bFL47nFBjgiXi29RSzqAqJ8oEnwdjsoFiotkVQQRAdjiNt2a78S47Y",
  "key10": "3wR1uBoERDpSuMKKNU7tqHBdZjEomFEe5ESENY5MaLrVz4wArFcWbvq9vmL7qjKc184wkSzmjfDtLBFS6oQ5drE9",
  "key11": "2yrg9j1pMDtGhoREttD5fKoKjA3L6HAnc921aW4sWLeoayNEb1RcUecw3FvwkfzWJn4ednk1XG8KzS8Fwt7DZAc8",
  "key12": "2GX8LdgKSNHbCThYBmnWrvK8qH6JvjJMes4oDcRe3QaUK136fsBLgoKm1VFNBWi1Z7sSWiJ23hj1kV2VRFkMPWdH",
  "key13": "236JEZig9b5sTFQWMxDcYaMf7HQGw7o4PpBXYL3pPWDM8yiaNEPjjhikXf7KBsGKNFEhFgJnKuAGKuVdwH4PuCMJ",
  "key14": "21AaciU7hqdMtLtBQqWZjj86PF2GFZoiWt5SxABn6JWSWgFe8a8SwCyGzkHdaAzAuGnPZybEoSmge2boByrwTJRy",
  "key15": "2bHUuAxdSMwazitMcMA7VubB8VaVJ9tGZeKAzgPm4ZVktcxiDUYnuPv5DBoDuAV7p5WXAqdjoMa1DRx5EVikbeZo",
  "key16": "275iiXRXhWEmczmx4J5dSzXwVnUo1nPCxJXauPAn8hfVbRD9czin1UBwQCyWeYDbiCgiu4S9iLafmgpYHHPH1ZUv",
  "key17": "3vsNRVW3Ft7Q1cd6E7RpDxN2QNgGE8iCVN8oe6TE3n4Y4LUYd9Eh7k5Cw8SjuVp2rWCfv34WD3AqHzJryxzz8SMq",
  "key18": "2CNAB6MCt8Lzi6c9anEVtGWENSCoYE3Qy8Rojb2jsJ1ZkGPs7v8WSXUV5zFg8nbikW4WaG5S1xGTSH5SRZdKHUr9",
  "key19": "4GvHh74qZEhi5Cngn9br97puMXtSNbTP1qE9J5Mym2aWxwqaE5bTqThCgzPkQcsnBb3vfGejF3KMzNr24qyx2UkE",
  "key20": "4oRuR1qEAoB33MqKpoYF9yk6GetQx9s2MHmnEajypkEWT5ogQjHiVgxduvEMkwn611zNVWUqY8SQkWMEmtpC6dcu",
  "key21": "2E1upzjdaXccENhDj1LyQ5ff48di1rXGdbfFPTrhwuqPBhbAxrD4QCbctLvYxEs7xLRzh3UqRR5NYUCTmZBDZV6u",
  "key22": "3RwZS51PKvjuUmKGd9QhgCLDJaGaSd9QqLk5nBvQdYw9TYrKETTH7h91f17YPrGGuqDRUNzzqgce3U9wfc2bbVHu",
  "key23": "2TyaRjbSaAWtoKUB571jqZokC4Kvg6w8sUwsN4mHsxFpXwZqGhY9KZn68t16p716iogfbsPeWHyyYrfNbodFFHYR",
  "key24": "Q4zDkx4UULaQ7nRbhGJBktCFRuwzrMZ8CkCSCATDZt4Wofe4ZDDWHvz3sVjt9RAmRBGgP6vVnvkbyUrP87G5JPb",
  "key25": "61EzU98zZXdxuWvEvto2D2yQKGWCGBnpob9vEXSGA9GRmBLgeMF9HWuxcWrHnXdgjS1rs3nzSyVVeHbUBK9464EY",
  "key26": "539sQZ7AazzxK2cQo3q2K5TVbuNVWNeVBfyCs2NqyHwiaDCpEcr5Ni9ZSmFB9XUA1d8RmgQjNCkaXja26ZyBd68t",
  "key27": "4U5ejbKG6c5mgY9V1SytLGh6NqqwZ18RY9hRnfBHjHusYbA5KppUgbpUdV4bJmoewcwbcztzm8sY4KweCvYXTZyG",
  "key28": "62VJ7x1mok4ui2JkoeFAvZDwkpc1fgFwbj6pTNjqeZ3tVV5T15GEWTsLJMdAHnQe9LK2rn8sCNb2vnchzBFRHZi9",
  "key29": "57twybEc9thgXeo1HHu964B2ZYfftdjL5PXAJ1RqJVfcvC7D5xwnF7RmjoxpUG6aCWWErKxzWe7upnXEAcrMavq9",
  "key30": "TW83hvXa2a4hnKGoAYae9cQv9ym5C4BCRHrUMSQYCWdXL9DZCRNYpQgYEeMnU3tDtfD4Cb6g16k887VkRVwowBX",
  "key31": "2HyEyaA8HETx3zHCV8phVbZUXpGCMpi7jWHERfHGtNdw1igcKADJXK435AEarYWncyKPTqHX65nW7FXKNUETSrE7",
  "key32": "5pkwwygmd6TD8zCHNCWCc5SNUBRYQNcxCw8KPYjMzuBrv8MQnuj1JwmqJp7VFMGpVP75DcSQWRdDawPmyRGirqsc",
  "key33": "2nFYgvzGJhEubHvULpDkQ1Di6Z2AgUn6fVUTY89mSLUPFFq2SZTbW7qMNHe8yLACHFCyYfgH3Y8CLuyKQHBaMfBE",
  "key34": "5xEvWJpez3GyZT6BJinSkpEtN7EmeBceivwx8QzBBYLJHxABWsUBXmTZdyPC1zqTQXQGYreTYRGQioxXcT9vdjEe",
  "key35": "5ZZfdYtZizGJ3yMKgis4bfQS8q9CV7teLuhAGt6t7sxLnnWkmeBLH1rgAha8XMnABQiqzLdgFCm4XqehECZwjAo3",
  "key36": "61G7XjzqLTSyYVbHcHxuLWQYK66zmtVoUUmGViuZPUEwzZXZ2qfRUTXbyrxSW3yeYU1NLmqKvjQxasL8aifPJ49q",
  "key37": "2Vq7FrvZAqug1QsVX3sTRLEFiAzZFEoTBWdFLinZpVcNzcv6ejAzzKbernxRWPzjQpwHUfdUneqTAoEvfRXQ7BeK",
  "key38": "DbNpmFNxGd9MRZF8P2dEE9BmodSZJYo9KAjVBoNeS342djziJEf2P4UrNbYVfRtXxHudQzJYm8SAgTCZ4197i4V",
  "key39": "2J1yZYn1CFXr8kCGHndxJ5Q2ki1KzgskQph9befnnkyxVCAgodFhUHp3g76KFwsBzzHrtpqoFu9qeRVUprr9znWZ",
  "key40": "3G3w8VRFkNpsiop3i6fmt9L418r42XCi3kp3jQMUAGQVh1bJqMhvKAa1E5BRNBp3ykqAqhqsCMQcaHVJJ6kzzSaG",
  "key41": "3137N9bUtTTugg3wWTyz1nufmNrnb72cwFCuDzyWeLfd9iLW3VBZPWAF3Tz4WNsSrEoGum3qCJzrx5VuiTkqaM2c"
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
