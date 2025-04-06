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
    "2iBKSnMHaLzdwE8Ga1ot5bFyE1GunjUJ8eKtki5DDmoEtCikQiemDDYHRBALY9gKD6brkXUqjsotKA8xovTXi4k3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yz4mPDBjhzwQDdCqCS2UgwVFbbiLsFafu1GZgq4crtTdwiNKQTaDHgR4w7J1F63mYpevjMRjeoJVcQ1UjKT6bRy",
  "key1": "54AAEEwVkUrkoBNhhWx83RRNEFW52FbZEZAkF4LmNfuK1SomNc8rmRB9HRoL77ixZZCibkQUenrqxdoZ3zJtZaGg",
  "key2": "24LxbSS2YLo78k13UP7wnc4dkmRmZrJXJ25psZJA4yiKFutn9vcZsGWmUvAVVqC7KjJy68EZ4iJ6eZ4ni3aXwmXy",
  "key3": "4MLQJNLquGAyTTy56hAJzcDuQUSkuLPd4qswA56RFAXaLiUiFUy2eUTton1UD6UGknKHuu1U1gU4GW4qHetgk6NC",
  "key4": "zRE4LGLZmxirW4HJJym7TVv9GsmmbsXD7yhU4woMony4XmVZhVV2nxWWqdjmLVmdvaH18TUpG3pKbgDt9v1V5h5",
  "key5": "4qf3oPGVTGJx5hwRd1fEPkokYqZCVpcbk8MFdEWoU15XPhtbPnWtGJKuXVPjJQTwUj3XaBFAmTrFJN5RVfWxQiwh",
  "key6": "2b1QrMZHzaNiu1vY8qCMgwyWkE5Exsn5ZR1kqjazn3xuPSrEpauHKChPUwu5TzvAtkiSKYnJGhd1ZkbV175ikm4v",
  "key7": "4PtL4gz6RoiCtYDVYKtTaiLYbWwCfqTU7jwH3VnZV9tYpEFsyGYGLsykepDzdcHcRmvYCwnPdgVPgayNdY5ja6GU",
  "key8": "32yW8VqwhbAfC3zNVFjcuMoVarhaM3tCMKWyNWukTawvSGGm6cGELhdNo74kP7jfh1v4RzWog5ECzKUCGbxLftd4",
  "key9": "3g5JQoe33YhqhomJyFeWZy3xRyFk8ZNL99NYcxFbFhm2f7PrQgwCkXU3jQoGiTHEK1Q73eVSKkCNW5GFb9Tjsot1",
  "key10": "2Qfv6z3gbZfoYJahu7KcGxME84wcUakG3AqmSiMijE4Rj5XY4kTZvZ4z5CKaWnh8TsgarfTw54zMwkxrP5LDCsk",
  "key11": "4yJJzGPhxoAQbtoRFMV4Qy2pHmyp6HGeVAWQRLZeBcB9tBC5AymATDF9VmJiFMHdaycno5iNMQaZGHzdCfEVaM7W",
  "key12": "5Shqnxk85jjFBQ6XuuWpk2AjPq9B1yiKgbCZxEPKhYci74WeD2pEsfF8MDkq5apzGpdv2i9YvvSirqmqaGm4E9ca",
  "key13": "qmFqULCZZAJ9pMGaUc1NoXUC4phvkdHHaq3tEFPix8SoFNndP2AmFciJUFAL5hev2TZ44umnuM1rQWdZe15og2U",
  "key14": "33rvuw4kq746okNf8C8dSHodvB2iNqKjRWDKir6cS3CEVJTmUcWqqNYDeSMYneRoX8JRbsLHQFkuFYz8vmQaUf72",
  "key15": "8caSS4VmS4Scgd3uyG4BiyLsCsD9KLUwjstx3AWfbF2M6khTQZp6DHNSxb4GNuHJQPxevUzQzQpxsqHdfJyVNHj",
  "key16": "5aFVaicWxHD7nfTarPPnaY3b5rWY4QoVSpAwF7tHUFib78F55EQaEXqhHRBvjfmbUDYDJWYypgR8rXUJyy7YyKTW",
  "key17": "3Fy7aVQnwJmtFMviFKLyFZfWdegPoEwvncoFsgb8nFTbQaiJQGG6tH6ggUA5AfwPFPMgNcA1NaH9wdhHATm5WWpK",
  "key18": "5DjAETzxcUpjTW6Hz9Ge32qBgm2qd74rNmuVtKVuWfdSyrpHP5hBmW7WGtKyC5YEZGThFqsdgoJcg7FDVZtYXVAG",
  "key19": "4zV1knwoH2dm3wew8F775J2HwYex6TDTyvU3oaNLZfQvxwYeCB7RoEj5aMvu5ZUtKG6n8m7VLvx4vSdqzar5cSJx",
  "key20": "38vM4nDUKUss2C2Z1o8GBMv7LexGXhrof5hdS3t6GvQsKT9xAZBq8K3BuWHjkUiKJKmsPxqYXCRa3PoRwjeMXiS4",
  "key21": "62HnMAC7jKLdwQ6cVZmJKrF11qr9gCvDNVWAi3VrprmQGHQ7r8V6ZYbeHxTbXcfypb3Lo4U5KVFP5wKVS4vba4vJ",
  "key22": "2cd8Z1wqBEAwwCziUC7Vri5GtemEwGawkaU7UtxaHR4SdrpJxHykASdswsFUg8bYBHdf2UaXH8d5aZxSbVUNbxY6",
  "key23": "q4U5hyopewmrSXjQ42LhGG5LVjzc9Qv9tes9w3hbHrzk5kyd5MC93QdLxC6BuG1aWJb5YmebduApyqJcPTqvisa",
  "key24": "2q9UArMdSnKiayjx1E2KNbLiLNUMp4KH26cQTJnSeKRyjAKUxTbQ3GXz72LYGyLkghZiZ1B3cfQJan3YhPgbVpRB",
  "key25": "ZjEmtVxCJR94qLraL6UWujaLkeY2q94S5qqjzhzurFWCHQAYyYRyJkkwbMRVEZkoqYd5Wc2tzhuZDKCeYX8CU42",
  "key26": "5ErMve9mSGTs2UN1UnhSvDnEjVGnNumBQKkuYVfY8NR3yCUKybjmeTL4e7nb7yNHfC4JFXbCEP1Hrn9RpcYhey6C",
  "key27": "38XjzB8pQ9NHeyEHiBA1YCZF378P6hcaTSnmqGz1EUu7DUW7AnM4GNjk1k8VGhjBh4hmr4gz2fwktvtUNVzjuoQy",
  "key28": "3mqz7zmXSoDNjM4TRsBJouRznYZRebxhVr86QGLh8uPgAmZpKj6XcDHe12qYF6dLxY856GMrQaKgFxoFTzdeD3Cu",
  "key29": "398DmFoiQ26eonR8dTjfNPU1Pu4hVS9ipUkAUEPrjscqmhaTfKt9qKmo6XHCPKtyX6xotK66a2SV48J5fHpYr7y3",
  "key30": "4X2kkpBo59A1gjXNTGyLcL6P6SpXwiGyF1PNr8sU9HUprnwaQ4k4BFLd9greTG5etpLQW3MEe3t7XxcdmnvaS12d",
  "key31": "4buvqHYX5mjqEaHQqKjMoVXoGv9evXAuXBxvejuZVVbreCAaWsNVUdV947Dxzh5c6WMf1sWAGwGXVoZRCmPfPJVs",
  "key32": "2D5he71cCSUDQ1HPHdVnV4RToNjH7TrmAMMX21UySmhJ747CkfyHCvT54Zja957t21DGmPEHTWVbbu1UhJjp8TAF",
  "key33": "3DrtYuwYjukQ1UhX7FS8jsso1NSgB8j5qnmF2K9waHAuJCe7x2UmTDapd7cVkyPSrXrTGXuJzJuDpVnbknbyx7x2",
  "key34": "4N4qSjdoYw4CrPXwQHqaiD3BXgwcGSTpcBGkyNPedX8S7wzquT11PGKA5NDn7KJysgDURxVSteJ4z9vypft5i1i",
  "key35": "2G8NqcmEfsGLoMachdeUngTZD3sBZowyZ77gbHgrEMg2uQuVNH2Su828jRqa8UMArFbqHUVVLJVzLaALz5yC1Cwd",
  "key36": "2kKy15sc1XNCwbZcdt4kZwXrek8zmqoCFoZt1dyKDf612qgPMwoXf2FWugPjhmwUnMyeU4PuPKqpZjybRMtChnVZ",
  "key37": "4EMEfWzfqJgbkgupkFJgizABbSQLBsnVMN49GemaJYpn2LnXNZyJTE537fQJdJapRN7Azv3t7MELcNdpZJxhZLc2",
  "key38": "49do8JFZKJMFoT1AUoVeg3cZPYKgk93VzyD61xZB6fukYjRY2fm8CfnqjLoMr5cq7Ffj4FEFAbapv6xpLFbWXjep",
  "key39": "5dGvXGoukPMQqRxAfoFViumXAefCKfCoWnuky68QS1oiZAkBJb1pKxZC5zLFk79QYQmTh68geNa8TXXJndfKCpPn",
  "key40": "43uqgxaZBDLGx4W7bMxRbPo6t2No4uU1jCt8kELy1mWHteRvrfn15XccDvRPCzMUccwLd1faeSvAFNd1kbaAcwAc",
  "key41": "2XETadtVy6CrtcgfTRZynu621qoUyYuPhLULxiXnp5kHdJ8rGRvRrh69h6U8iUk6y9BzhhAPeV5TZmGhDnMUypdo"
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
