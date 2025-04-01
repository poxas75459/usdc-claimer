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
    "2x3gLLWpHTWNcaB6jufSL3UB4PwbmjtNgNrptJrdMPfsXFAnuyhfSBZoBQHrGyYxXiUxuZz6DddjcLZXvsaxsUAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SSFtqZY9JB69UkwKL2neZnWuRAzfMqNEKzB84uQmq8K5DswVECfCFpb2tR6p9X7b8MUVSBvZd74DwT4W15KeLap",
  "key1": "2hnhRXmx3x3Q5SX3S526SaokCRRkveu3hxesPaQ6XCaCJ24ZquUAXSG3TekdqRR4c8aQxxdVbWKgwV5V2Paq7gh7",
  "key2": "bmtGv1UAQtiWTgg1obMaKDeQWrnkEZKJnwCAKSRxKuTXdCoFogKkKPpUCfAEXyBkLNzPeZF1zPbfYtfXLy25MHp",
  "key3": "2NsbehNwZe4dA7r7XnLGD2wd3oo4Wga3WMLg6g5kmuuSDwktmJkx2Y2Te8YKxobhSo2bp2tuKz8r4ZwAYDZa2DAX",
  "key4": "5o4FQkZQJZPdnzNN3tFQ1kH79fJVywpZsfVEbmneW5NdwVhWTkevZ6tbacFzjLsmhHV14DtujqXHm2yGfoUeWuTa",
  "key5": "5PBXjXiWV24N5eAAStU42JGZaLfyNtXSvQGjDHpi4SYPrkaCcpc8Env3tMdqRy49o8aEgL7sWXLYGEkyFLoFuAT5",
  "key6": "4wA8VTRPaX9w5WapVs45t21fyTGuoB3HRAwQohSA4dsQGrCyCrBZVEWfdTUu6inT3tS7LPp7584UYD4GNz8y97jf",
  "key7": "3Le6zzFLv6aGgV2aQf2SeNTH53LavuHBrmEAmmkEZvKiyNHRgrrxxfsj63hoF1H1rmqeDrGViHpooFq8tP3e7WhW",
  "key8": "25FBUJBz3WR5kWQXLF5udsehkVHrZ2EFHMitLbsNyZsy6kBeBRXD2VvYj8Jg8bwsuqX5nshoGCjiGkYMv7CiZki3",
  "key9": "2tjbKCpnEgG85bBDsCJK3MTVsGWo6YzikHfYWz1dtDsJKUBnDFM5uxAtvM23YavXpVAWwnxS2156CrGxu3Z7ro6G",
  "key10": "2pcovxS43LqCBjX1RrLUgpMDe5CKN8hah3ChKbApLJ6iYE5S5G5xz3EJ5Dnh5dTqX7RiK27wt4JJ7n5W4fLPnUzg",
  "key11": "3EXp8XoSAKxDG82QkitL2Rd9qD7gTum2xrGzdeEp85rAojuSWA74P6px9fAnmdtXWs7zoGM1bPf1ng4FRYnsg77f",
  "key12": "sFouPm7D3m2m365s8z55fGAby3qSXJXasSsvX8LwWKLa3ewkiMticGkPpZKpjW4zaxiFz4Wu5XQ2xhZU2jk6mmy",
  "key13": "3BHRqzuoR3xjCDChm2YnBq1tocUqe3V2tmfuwLD38vV5jr51xn17gnbJNbYxPRipMthADKr7hF9DMge34jRv9jKg",
  "key14": "49zVcX5giUgpYF1KX2kWdrpHTbfSWqj26peRBgrCSwdEkNxVhsM2r96TLv3JazhhKTPxvty3pcScj7VKkmJmJ8az",
  "key15": "335oQQq4yRxg8gSPhyhm7zAqUoBYemeTQN4vNwt9XCPdnb1x6YVubchc79zmFGRnqtqJZfjzUZ7dUQMTeRt9X4nF",
  "key16": "28ZqUxF6dD8B9eXZmZcN8HBZwvkrMPw4kxLmR4feJdv8AHoCZcnbFdjjSukq1AAkByCST3opHUtjegCQc6LNspS5",
  "key17": "eHvhCy6zZsjEw3kZEBitpvYARuT6sf9S2yz1XKoMxPZe2894yzz3sGT3rzwHSp6wwpqPB7MCTg9xmojxHPwDZaF",
  "key18": "4fUqLnEhn5Hr7hdyXLpbeepZS6pqqfUNDiFPFSzLz8pjjjbt7peicQmSVbm3rZgSpo7gFdG1q18Uoq5G8doZm8do",
  "key19": "22tWsF8sy6FmE3XfQYeqVBZQ89ypAdKDssWXDxAkzRFkfyjmpuB3wkcJTDFYncvWT51ZZnncU5veUog1Rh3h9r8b",
  "key20": "4koh2VfvKsPgsFViXUXu6ZkpJ5FfESD3taeL4fo1yrJggJoqmf9m6mQ2BqDssjWgYXCbn7CTXyyNvSQ3n4vy1sW7",
  "key21": "cEfbRxQPzBJAtTTA6ZgDM973aFPphzuHH9HgRPaGh3ruxKs2ZJAVoUKauutqRTuD1gsEWjpJN1PS5FykR91AN3Q",
  "key22": "3dCXMed2oHPBLzLQqgVrhSeQzGTDbLMNmdQmeMgm7xirZM3RK5aAgZV2vkaQ8ncJcLwhP7bU2PDvNNYVLmB1iD8a",
  "key23": "243tjfUnQ6Kqd5jmer6bcdrWpMr3TUiKdESe7VUp2CzkcB8Vc1ErvRN2DeZfucRkL91BUf34fomWFoubhyVRgnV2",
  "key24": "5SQZPb2dbRMACD4d8t72jWA8Tsq2o2LXV9hvjpAeRzRnLS7rm5XCuTcHeCfp1ubPJUus8dHir2GqdB154oJSS6cZ",
  "key25": "5LLQad2MrzHXZMmghxut8wjHqy12KDAuLtFuJDZvvPVrNwk5nA938X9DuJPdxTmiF6H2RP4rYzvB498gsr3YqY6c",
  "key26": "4C96HD7gYrhDqMFUJ5UZQGNraRDqQfbZ5YqmigVgxhgxFJ6W8yFy9sUS2KX1wPVJcaXFZoTcH1KWbiq9pinTDvw9",
  "key27": "5jq3fnSGCd5xwvoGexqPugzSRKkCRWxRc8KrYAnLCZoF7FkdCBDt8mE4de9ni5w2RWuWWE6BmT7nMzgUQhqqKvVv",
  "key28": "5hWBveyjNSYKvVpBScKAkgfBh5Sqpkx8JDnwUG2236s651r3nKWVYEd2CwoStYKGg8uCQuX9kWEtWB2cgNXq9EB5",
  "key29": "3TXfDL5ms9ivQj9Lz5gi8GvZk3VzCGFbkzu4TS55L7DfeygqTbFGjNNWB3eDarjHdW8TbMhjq9ydwUtYdSRJkmZ8",
  "key30": "31SEjPePESA4sdhfob6AK9RVkern5Ds5hqsHS7xxF3WkrnHtuhV9BNxPCLCkxWAoQ9J3o2gomDJxDLUaRkerTkC9",
  "key31": "3rwkmursPuRCj3v6iUKYDF5JfTe9au6GpTZtjgYYWkpDw9DdB9jsS7g3bqQA2bgPLtX65nLQWUd5MjX2c9fub48T",
  "key32": "4Efx9Kag4sDz7vNQYWz3QaYCj4itZpfU8AqCjRqL36b3rAT9HCcv4PbYJ12Mf8ymPPBPT5Zd9SbQD9u93yQQgMfv",
  "key33": "26TbN951BaPXRZ27pmpgPLDF2PvV1fAYNYvdyWgehH9haypffXKLLt2bpXgVDYrUh8jzPeUnXriNoqzFxa5GNUBm",
  "key34": "5QEwMGCfwgyGaTjF7bTPDM5mWDh9957CZw5n8fdkF6CdMap4uE3NQnn34gzvQxWK4559wuKEuXqhaZ72sEYqynGx",
  "key35": "2UpFAAzV3oNiq5oGNXNsjLqxbjLEZfttyMcnpX7KckjCjjiCho2aBnM3Yh2BECKL8n3BJyRXQFLELhE1YsRztH6c",
  "key36": "5FDf3VX3RmB6WqCQBcp9KHdbswvo3UVkMFqSePXHAaNpusr9Zv6a1ztXLyberRXJXpdudVsKmyw2i3LRbnHujm1S",
  "key37": "LNiGwebpAsXacpJb8cQjF9QpxPpTiJDHNtSRjd9sMFFdiL8jy1yTSEZYouYa3LrVEKaeYkR87qQ41FyLWFnz7Ar",
  "key38": "4xyAC6w8bt8nAaHyb6rTj5QLKLCP7NdaTJHcs4dJDJfifyRqDLPw8TRFYdrzGeM2N7wLh1Sbf3aSh14v9mhEwENz",
  "key39": "5wFxAZirZdgoZ4DDyFfE4Usjszuh711m9tAsVhASvR28w8dUebp9JRAiH3PbPJaqaxMpu6gJTf72wwgEfZwQzWWx",
  "key40": "iywqRw47nyQSMfiTfMHkMrgYwc7JAEgkxtQwvrRs3RindkET9YFPD9gWyVyrgz8K7tUmNZATxUTCMPsW1rptVaZ",
  "key41": "5uiQsWvER3KTbw12kpxafFrV2BjGkp6iEEBVnS9TUmJtgAD9Z7xn53rvfHeBpQQt4pRcibFoqZHaKGQaeKCKANuP",
  "key42": "3iTi9HNYovHxx8ydTrUv6utZvdD4xJywmhYmTQAamNT7E2sz9PtXZ8f1ZUvN65JVmwrnz72isXgDUv8NPtn3Mdf7"
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
