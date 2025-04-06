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
    "4Badi9gVacg9Ek7qYuQzkK6Tpj3AoKG88y5tUodCznobBJVJpvxkJGVM4tMpbhV9UvGX2oST8WoGqfw2Q6JKhcQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SkcM3Gy1zPr72xX4mZe5KLx9SVM5ajjrLCjEBuvYhcyb5TyKWxt2TWpRvwP8yNjNyYcUnUnB9dRXArtGyutc52m",
  "key1": "4Yxy4FZMvtbTT2Ac4pk1FyZxjUBepLhY5oAnzKxsN4PKreJryMbmubvaQ5joXEg7kS7cHMiDtVtQtRUMt2HVwuDt",
  "key2": "3MLVLf38DpLN1y15vTVgsNJ77NTDef1i71eRP5noRDh2Za4N2rFSzCbTKhHPkpTCcwfMvnuyA67vCBKmMeTkq3U9",
  "key3": "5EbVJ8miLzGupbNH2YuKVy3ikCZxNyGyh4y9zuQNy1B5otyVoAw2XctEx4kKzo1CC4XqwRdKbxWpbJiaVcHwS9kk",
  "key4": "3NVkJYomcbBH5AHVNcjVbLhJoyc2XZkbdz3HZr92qBYEq5ctskCP85dVNSJyHYDVsMJWwYchZeK2wqweNFdqrZNk",
  "key5": "5iqFPrd671EB9eYCoavjK9kkqarrBL9xm61suevADDxTGSMHZdQ9hkDYstKuGihRSortMvdtr6NoGXoohCR9kmZF",
  "key6": "5ZfVFQyEApq9p7KkHRPqept2aJUDQUwuCqqX1eznyLopBZKoWB2Wjp8zdUNffcZ7UCcQ7UUALby3fzzsHoTADHui",
  "key7": "5AnyqheiRuXBzaDp9KSiofzmvM8NSn25zjEMzmBdRCmiigkXzBHn11UCz7HgzYWRm5bs15hfuonLWZLJSrWhMYJS",
  "key8": "45JCHgHwifvthAMJcjyRupPZ32efWzQNkpsadNqCx1a8ahKDkQZhmLS1WB4Z75UzbN8abtnvmsiMun4EoYxcLCT4",
  "key9": "4E27sbQUnNeFBDjSJ1VGEq7FY1acR7KQPB6pwDE58zwp8RQufeZoEj37eQ1NAaRBJSEYmdgqvZZ7ETyEMpMnPfL3",
  "key10": "4uNRgNADDg7oJaqhwQX3b4cym2UqHb6yKmkTsT9ukhQTf8UL8Vw9Nf4MaQMthhCdyc1BixR5Vx3FVvDeDkPqmdGz",
  "key11": "4FJXE61LVFsmBq7qStUqzAu9Ae2ojdWfP7ztMy2gkvjrs2SUrYN5VKWdZJAkBvQzN4Pnm58HbHk5wUxYgjfRyyhd",
  "key12": "4bUBtT3but1mba2eJx1nN2pdSe4SDzLGwEfMKU4qLUfPwJJmebghnxSA8biP4rB6hYuWbbtuVMrhADLMUqtCnjuH",
  "key13": "wJC6iMJfhj6Hovdynm5jMhz1YbVCHTrCZUT3Af61hPH6NUymBFgcoJdJ5z1Dkk9JVnMJm63MuVqtP1Yc7R6ZB6t",
  "key14": "34xrgw6KUPaMdpkEA2Wh7cNMzwvRGVJGpk4gZ3CYTPiKxy5seX2dcNynLEKMWA7sqacySJSvC2pkusEdu3kvUCR4",
  "key15": "5A4cMsgaTsnprKgwBB5baqPp9BtYqcRGosqYUyAQVaNTY3xS48B5EoRuMpkMetRoccwafmhKhvbRUfRFFPBCJxdL",
  "key16": "2Frkv4UgUyA1WVo4MRCN18ziqPjnoddzCX7E8qLo9FrmzsZFc7J2E2H7m9atDxaqG9QAJuBKd8WTcPUrtmBbg48P",
  "key17": "4xbrX8utn6rxC2PrCdzY8MXfXvLXDnwv4NNBcayEiHH2RxKLgfdVZu5eWFxPAUP3V6LLjLExBUKYDFEGpVHtqZiE",
  "key18": "4MVE8yGJDnwxA2U85xMXy7i7udyy67nrBmCFSPJQdmSwFz7Sg713kTCyg3LUnz7i2NQwMQACAHYMkYtA3BK6qMZf",
  "key19": "489pNjKng1Vh9qmwaMsEeeebmBjA4fg5V3duA9g9rJiU59zSzfaoD1tST8DySgZGjdZyejij7VhmjXyR6aAeSXXX",
  "key20": "3vC9mNsBHaQbRQge7a1AgW5ZtHoeTyStDTqYAszL5L81Z97SjsgN63UsFsTBPhXfyZy2sEvgvTRBqFL9NnrQScXb",
  "key21": "5XmUFMxzLWzYgsopKrZGg2NWwANn5cbnzMebJAx7kNevoKjGtFMFzppNaUFbPZBDC7Fn1BjW8efYFWZ9W34hx88u",
  "key22": "4aAmLWRwwjXPnHmP9AX8r5oDjSa19C2Bb3hctbHxMAK53xM9HrY1Pf3MCTU1JkHwVcuCJH2E5S3w852qbWCuiLY2",
  "key23": "38jRuBzR8jL5zphgBCK5ZXnQdwxgWoDT6vGc5W2EPJrcYf1XDij6AiuaPGWmPfdjyC75FEGDPH8EZEvipic6knDe",
  "key24": "7RmdkoqyPxK7cChNKgGwKJBAAf5R8Ht5PWKUGGXYvsoGdwozTvZMjjCsqpq35KX3s2Lhn5VtoG3NKtRenKoAmNb",
  "key25": "5y1u8gso9FXd6TvB1xKuMv8KXv5UiKgYBRsjbWUKqLfEu5y46Pc7KNq7qxwAhdMu7agVvvNVuao3NnHUgt6PoYmd",
  "key26": "5de7Zu4A6fSZcRd5dyWSnUzKqztFf6x7jCEv3hUyRxywCLnPEdMSJC5V2ogYC8ZngDUxHbT4B7jLkXnEFv9XrZjz",
  "key27": "ifiCwKQsMi7nE91eagqdjaCRpfbrmTRtfPo9Ny36maaAVDpF8naJLKnPAoV6dMVSN4vcetaJfAf34ocHaH5DNXK",
  "key28": "3eGUaLkvVkjXPKh2QDDET4yTaZ35HVmAsVm9Rj7Ch7D9HByWD1PLsYf6dbv5DbAdjciNUgd2UDaf2A2wddo4Ke5d",
  "key29": "2DyahSgkKMMd8Mb76ZYSeDY8Q1jvGkgL9b7ttvT15muyqx9T33YQgB1bzC3KaevJ6XjkBTaRGeqY9LuL5T2XYijZ",
  "key30": "xMFPe2goqDe4YPRnzmWCgc8nVMgpWEymmHRr3kbkzYqgLXdUVYP4DhGNb4NHdrQxHZniJxMac7YwvxDgnxKhbVK",
  "key31": "rALd3MHSVZbcGAhsc8rgXqG9K6MBDCiSiNtadM3dHsfrJsbUjQwcpYZ1KTuEjVe7o9hrVVqm64MGeDoct18VFig",
  "key32": "32o7YnZFSjkmnWkSmYEhtZ4bjJk7pgqXQyE52TszKQgarVgvDfrjAF7qLZkuQ86zH1RGUgzBxZecXktW8gHC4LxU",
  "key33": "26SEh9HVnW4YgkDiVXDpGE6kdetY89grcF25VM1RKW35wsL3EEreVxfxNezToDtoFi2QUDfphyNbNMrQUKAwUM1R",
  "key34": "5YWcYmFpX3kJGnNGnJYJZfBoyaeEgMDWDJSkGwecpwdAYWwx1xT45DrVUktUEvar6dx8pH9JBzjzqhw2HfPbmmR3",
  "key35": "5dP4Y1Us2XbbddWNUmJK5HCxb3oWps9SXLnypqiBTyTpC4UJSYE4iyyuiNXo9MnFJU9C9hgeMTjDLpmdCTu77Syv",
  "key36": "2HjJzmdgnYc6f1xLhiH9GmhKtprMRuu3MChTkn1nAGh2MUZK1mCppb34K5vdEYbZxaTA4Yr6vUAW3oN73m7MEmx4",
  "key37": "4vBgEB1o9ULCaf8SYamE8dHnsJKkxg4prppSSiXp9D97dvF9MDP6KR9enoHJgwbza12b68TUtWdpzTQTTfjGDjTq",
  "key38": "4je9br2DL3tE32hWjo1dDtUVJLADVPWNRK5mHZF8rGqgyz1TbtZq5beHWJhWndwdCrxGxpwusMa3wFT9HML9nM4T",
  "key39": "3pjazSXDYYGbrdpgjZ4BnirqnarDYCG597JEh3gcvtTbkezXJQFzvXZjRGqVDezqLCpNqncZKmntAsynzvj13M3v",
  "key40": "5cWisaJCQdHnercwfdUGQa3sWBkAoPV6i4PL1tjz1MHkQnTzXJcj4fGZwBNyQgojgQn7jNRsCh1bUcTBddHfFnhW",
  "key41": "2HHNqC53pByYu743Rx1fLugVvzFTtQN5TddgjfXBsmLYRtQwYrs7Q18E7So2yjJkE3ep3wqAQpdGJvdurAgNBGrH",
  "key42": "53LmtEKEv5eH8dF1XTnZNNMvAkdukJ21mpxjtVNnZUDnWwHDe72m6sj9H35WbP3xtqRx6K76h8bag1Wcgxfh7WQv",
  "key43": "5d8iNr1b7YmLcb9GecfUNYM6okZVG3q73kSfDybmqicb8Dyf8U1zhXkV5HEzqDNhjYwEtg4bzAzPow1vojqK4FSE",
  "key44": "3fFPjK71qKkposn4uddc5ob4o4AXttF7RTKfc4qRZwkVmNefbmtUrwrwBMW5JHZrb48rT7wxigeTPVWjPPLCFZ5L",
  "key45": "21LisGA1NjuECXeRLs3zp8bfcQerhETq4ocK6ffSdRc6VasBryHaX5q2dWvyZg14xM7s3uUBSRT7Y8gcBETbS14F",
  "key46": "3yLo88wSV6Bv2avPEdfnAL3naNqRCkvzza3aieWPf1YoCWufWeHctP9NWi2F7Vv2zpma6MyPez1nSisvj3cusng",
  "key47": "w1wdZTweXC4VkUgfb43YZzcmc6ptdZXUfHD3xACVTYuhmgiEJriu7WdemAaJPmVXeHwZyZNhGrbSKyj1Eh5aesQ",
  "key48": "4qskJmrotYdtyy47R5NzbTqGi5oUGJNWeHSgAMZSTtTuszTAT9TJ4axry4kUCkdqunneXYfm1QPqVPZj9CqVUtwf"
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
