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
    "4XFzxwCrFNfrtivkpTPreXqAoTsCS3csHtHBEoHJtvtD9ZnvLrW661dykgz8QGhfMywkRpTZk7MBPhM65Axeojtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GADk5C2GUKa8PvSHtvNbxsyQdkQ7nA6EXYjwgucvUFKBuQvzFeXCwZ1J6ffjeeo6V22CD1wFuhTqkzqgcnqZmtp",
  "key1": "66Yb7RmwRb1wkT8TMWbKLC9T86PFmEMgogQ3qefXuRQRnsboU7GJUVeVcj1dpheTrGut2mPKfQQAsNgUoZxyf5uH",
  "key2": "2c2basQqw3SWSDZiNJ95FkkaYFhZFByASZmCn7HE7eRmZQCzxYey71Va7gXjFSGC5TNPhMHvHRK3Ai8oJjKG5VU5",
  "key3": "2S4V8deQuHwre7Kr7X4CFvTVtXZUkSNQAQ3irn9xdxwU5nPNkDeju3FoNBEe2Hdf2oDURHQhTZ3e2uLMxnB154sA",
  "key4": "2L6zH9e9Fm2FdpY8Mh5QND8DJGspfqoBsRSYgcRUVtxc3XtxVqQ2TngdUqfBZW2WqbWEftaq7GL9k6qE4r6EbYFw",
  "key5": "3MUm18X4dpQG5SEzUeC8f3zjz1chejNbKXUdYkf2wXtzE2ACdwPYRaoNL6QNjR6r7tMzCQqkyWk4BELUCDGsfuRb",
  "key6": "43Q48qXRVZp9nPGVPyeVEzWDYE6QmXLjDq3XkUJFoyhGtVBJy5NVMf8Muwbzhw2SgJTBkPTWfTjNDYRZ5r8WDk58",
  "key7": "3xFdccgpYr4Ewfxg9VqvQciKvfjL7uPaAaUB5daQdfVbtyqWxvDXLXjnqxpnq3XnF55AKchfN67QCrNsj46U4TBM",
  "key8": "3di6hYhh4uaD3DWVFgJ2xJiN2jNh9YgYVX8R5FhZzZ1cSfZiWDHrbx7Qi8iMaYofSYaydPjtP4PTWb5nvRS9nsUw",
  "key9": "56tvZTL28w7BiCNRd2FEM1qNMKhaxqJ2vrbFQH6UkksxtdDvDoU2Za4btxAhYzUoEud5fhuqGXozeVTp1C9mdtKm",
  "key10": "5jGXrhHMX54DUubVxNSHy5J2pst7oEgrJVRAU2nws5WPcVvDYHwNfyeDPcKeubobYCbZ2b1VHht7i2JhGLkwf79P",
  "key11": "5KnLBysyRaD5kNk38YwxTrKdCAGt2pCQmD5Rt9bx9tfEDT4Cca82XKgt7Kj3sUPKy8QvAAtpgYyr6WsGrP6BLbAk",
  "key12": "5cyk6RKGSR13qGjGZhxCdEkaeJvzvNmSh1g99qFUibJckEAqEtXyfPkFCqMCxRM5k5vRK4MMhogTEC7Xba4UTDqS",
  "key13": "47mxAwghyH5wvkXgT9HSUg1k2fJSrfzkCvKUJbzPyzoZpc6Rkc3ChPLFcVeMJpnXCSSXVsqqvdNviYWb5dxGKbu8",
  "key14": "2Umc167v7GyFQigv1tHDTyJxv3cgRcmZC4kdmYnUTPENVr8iyXc5LY4fPvfu4BuSrtLj7CeVgaponkdfTYZdN4wb",
  "key15": "5W1VD9LZJWsnfhZuk8JxoXr8a3RioFS1voXtwcuWvh8w2NSi9pVjeLMfXtAHKqZETq4yf1ZLfTCQqCKuRpvM2nG1",
  "key16": "53snQfrHBTr4Cy8LFD1SqWtigxuUqhZcfFeYL64hmruqbb9hY7bVphuhHdz1PoFFpj7wEd4u5qRxxirDBf9GuCmF",
  "key17": "41a6w3zy4MMq6vUAKYjtvZA6T7ynwocS18eV27bNN5n4mfc48RPtTGUFG2yonwFveQZWASo5Yki51KMPBce8mMZo",
  "key18": "4qWQnpyA4HP3nWXQM2SefT11AzqqxGY68SfnJsbVbPqyXQxGvmzTkZNbtQLYkh93voiBcPqi8oDvaGUBb9KMkDjE",
  "key19": "43M7BuLgeX9x3Lvr2dfXnLHJmR9gN3Xtc11SHaYRU57SKsVCUJMknFXvA1QGTQ3PSwpHyEbmEWatcyL1u9Y7BYqe",
  "key20": "2qQJyDKki3d7R4FmQzXHoDFeXM216ATzetLvoms8AQbtPm9MtdyFpMSDaiJVfGLXRqCiLHw1SYjy1Tsed7MfBKp5",
  "key21": "48m9H6fyTUh4qGxjku8zzntGf4NdpRZcAVNUkydW2XYSDEJR9oKL3VoQeUe1TysxwKDhRCYbkmsWHtH19bqk6dHy",
  "key22": "3wPMfm5NMNJcVvXqJAACVByzjadd7e41Ez6XoqxNhHPey85B5XPLuGPcKC3HBEb1czyTFLzCJuSx5UEZNWVLUpHV",
  "key23": "xkF75qitzhbNH5DFC6nbyveonnwZpyH93QSexRrtqeDZ6FPe97sztwDVn3LMYqr5evhAWC6vmyjSvgeaz7kAm1c",
  "key24": "2agj35LdHV6TUKtiVSmCTCsBjn64jZ66wTU2zCkjAnWgLhFMnoWWfGHq81gPqd2xH7rb3L4RCi7PEmZxmWkJ26eb",
  "key25": "2orKQxk2VuAW8vVHgvdQjzJ48vNxDsXTSCCCdDt7axVWLNpTK68ZUQcHfgpDgocop4JemGLbVWqNX1wFcokBmb9N",
  "key26": "4jfgZmZi6m6AUwcYX9SsQoBdzbYEDeApMDkB96gYhwXuQjpqQ3LCYC5wWuycrUTmtNdsEGSfiKZzqGZEC1ouZsA8",
  "key27": "3WnvAWzxaZ1HoZ5c3rRPijtf2whxnRR3yteMwhngnCfHPYq55xYVFHkRg2qcXu9sGfRxeDBSRsGhM1A2TtAB85bV",
  "key28": "4Jeh7uZy7WcEkaSvPvuQxLiXrGZ9B2kufVRa6jTRkcGrvbmJUB8XkvGS1p5UazNMENwnK4ABtfzzz9uEghceMsUH",
  "key29": "2TwYF9Tqpu7xHn4gTocs6VarG1jNQZg8EbNRNQp5LxyLdGWTXuqGMsee4JL9cjr1jnDJmKgxWEqRTdBzoySyx9B5",
  "key30": "7WZPYuZ2PwhofeTxARFH8vj5Mwn5xa5TkwmLvu4my9H7NFjh4UmPBkky5SLFemDTRxeVjLFJ6hzc5EWQdbJREaH",
  "key31": "52cX8WJ18Lw2Sc3mfnFsdczmpVdeMuoks79F52F7SXTR5rRBCHizFoE81mU7MU3iV8KaWoh2dqUFbnoQ1afPjpWp",
  "key32": "J7YV5A5YLH4TMkrSLZ6BmboqyYuQWUizDYrB2vpmzhA4CcQdz8E7yM3CmpUbypw5YQVF4HYMR84X7ptv5GvY7bJ",
  "key33": "bVLEkTMjb3oH6GNYWEFWsvaXQ9dYgFogpEH766yPKTFJhHZYdC964GQea5B9dYkYGzrMvcCf6YEZSZBwG6ey1SJ",
  "key34": "21HxBjm7XYddD5mMcAnyqguXcRZoy7WJUjkrVeY669pATYaX8eP9vzMGM3ZdiGJqKXoh2uvxGLmvbgGUvkwkJBTX",
  "key35": "64Z54JUdtKxfPu64kfw7d1xTXeoBzwPFtQ9Cj17m4zpF9tEDUGYoYseD7n68xgmxg4ZK26ZePcD2U8jv8wTsmfxq",
  "key36": "2puafzYnNiSKrLft9RsrPrH3DcuA4HTW1BSABUnPjQkDdzJDZWfPePnxk5NUNJHFhvmTtwrwq3LM5ohP3Fq3ZM3w",
  "key37": "41YbzihFYWjcGteqSro5F14RyHTTSTX6HASyaULx6MWtQgJNUht4QdHW3AJvzJbP1BobasLJyQXP84c8vAYh2arW",
  "key38": "61yV4WSviJNvMMGhbim1LDESrV41RENYtn4c25V9T5xGaFqGXSJTidn6o3YxFB1TfpZZYi7dmVxqE1SZhzuY6hL2",
  "key39": "FdL5LPnXUSMvpVDc9Bs5pvycvsvwFsLxno36yvRnwKMcHoHrJBMth7aDM8wCVEynZhtHf48dDG412AdYJQHASN8",
  "key40": "642FePKxv6gaUvQKur2a2KNFVKquCgQfN1yraXQ2dcTEctentdW7xKyek42BHdcy83WaLCcsnYmbUxY6unLbLnLw",
  "key41": "mVpRoPviWBqwcDvVdN9AeNVAd6PeTJFTxzC8wBUSHTPaxQaPFBF7dRx7aJ2qSC1NJ9MGKF8tRPQmS8MHNB1LYQb",
  "key42": "3nyVW1ZGfehXZ931UNv3eR6TqXGq6isHQ77Tz9oSQ2QjGkRbRShRTyM6k71H7TddrcY5bSXPmPszFcuWDQCh36fY",
  "key43": "5MtPjBJEFFs5MdnQCpKrkuwtkGhPnMd2oFskLzDSTMJNCY2Pu5Lu27qDGBW9JoYotfwB1w76CcrnYLaHyhBnEQq1",
  "key44": "3YUEgJqb1BPXwYDh55fPipTt9TBzd5oPnJvJF7fqv7vhRSSVW5Ze1HJyWwCpotczi2fAkXsANFvFKCYHK9Z3ov6F",
  "key45": "52kopeq7dcfjWZ9aotbqCmepx8yKNxgQ6UfzwUE4mKvrgZGYa1b677a4apvBfJSYkhgbB16JuMhsAdA7QpuCewwu",
  "key46": "5jjmvHPKtGkCkdAUEqX2pxxv39MXspiTLXyqFwvaa9oxEE9UiMP4yAGUyZjFyyx2zALHbvgARxWq7eUUmxbeYRjp"
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
