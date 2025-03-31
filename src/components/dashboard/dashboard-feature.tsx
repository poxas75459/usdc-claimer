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
    "4Yjbxuhh5oedPZvbLBiJ6NyqZnj6ud9EsFPXi5YJz3qq61tEYJ2ufoDTok43dkXPp7yBXyhxWn7EKAEZqGEPm1zc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rns9UNCvdm36V7B973FXBXQUrLrnpbNhwn6Hw8xNLkrVnoZJtspbhytkZXxSfYRiP6HMt8txnmBmu1hPFi6dnCj",
  "key1": "jkkw3ohhUU5mdthjfRdjJa9TVoK3M4ddtRWT3Yw3dhKZaTbmujM98EqMhxaDgXXgw87FEYhfM7TFUhqBJkdQ3f8",
  "key2": "4WkSFHC7RfFqQZptdtwxQYetywHpndhba6pcDXuRp5Ky7FvQ5Rb4RH53NCgXxHriwftvPHQXWAVNS2nnvRhL8ccS",
  "key3": "58ujTqbBJRzUqLguwpni16AzXsKsxKmNRqRxtdv8aPKEPApFwB2UqhMjhpsa3s43H9X5kNh4smSvT7LenBMWKzGP",
  "key4": "FVUnxQHTVTSNrkcdHrGXHYicHgfHCyztMVYnaTer3sSc7tmDRA7MCGBHiJxoLNDPYs6AKj9iLcwLJ9Dgc1kTkCJ",
  "key5": "4NEM4NALDpyjb36KXqBTuqwxUTqYVChk7JEXqne46vZK6DzMDA4JZiZni4YdT29fpRFeEaS7qg6svaYvpf5DPoma",
  "key6": "5rcyB5KYYTTyj17sQftnZ7ffZeJXoFk7w8U6jxC7cbWxieYQ5XNFHv2jjU3ZyhArqvDi7gVWF6RMrDVqXYmriuqx",
  "key7": "doCNqcrYHFyWBLTqgkwFQyWHDqsK1vQHuxc7RhSBKi68vdWxuuq38AMJTcBYpYL7VQ1QtrVAvM8H3nm26d6tEFT",
  "key8": "4qSYLvrUsQFp1KGJWFAsNVmKaxwRV3MXkEPjb674pS7n5gM3jNcjBxPCCzcZDnVUA7j6XS71sQswWWKAvfr8PxmL",
  "key9": "3jLSUFaStxCwYtisduyHTWVuW8HNUCd31xgdKK64x2GZkKAeCZgHiPm4h8FQ3qNsAPgAoW84id1iiXmvGhJL5MMK",
  "key10": "3jsVFEiU9WNX3W25U4JFNSn7qXrc6zrZto7iPpGca4sPShm1ZuVTE42WWvWkdx5Md92VBpvzuPnnDy8ZxQpQASi4",
  "key11": "3hjWHrvyvTPhTFYk5Q3s6pwF8xPFcAS7t5w9pMLa94p3JYh5dAcspMWc8u1mLWbrVjhUmxouQbL8cttTrRgHWgng",
  "key12": "2yKRbqJKVgqJQ8kYjDzUN1r2qZfsrpEhBbf23Z6s4Hqr4JbrssJ4YfjjMDfLzhWcXc2qtTSATfBwvtMtBM7D2Pmd",
  "key13": "4wH31Hb7Hi22TxnE4f1BpmbgSGUeiDK3B1FGA42nGvMkzjPp4A9VAx6FCsLHHVRFositEKHurAfcbW4Y23DbfhSz",
  "key14": "op9YHV5aQHksTKx74aU4RKwbhHHnUNQrxZCQsjGTSu3RqXogggZxCTzuMHp7Eeka5GM17dPzDv7r2hUaarPbFph",
  "key15": "5KhwtSu9Fke8HHtLUSg3pMEjgPU1VRNuyzZFphbGzb5sFSceZyntdAS5ENNcHw8nYxjdzTvZ4ct59ZWX2XnQNQQm",
  "key16": "2Jzda5sCjph6xgfVYKPB31FurbHcyYRnU7UBhhmmuAVsH6jjX8ywewjrogZ4FB5nJ8qdgYoL1gZftEPKfePz5hRU",
  "key17": "4wfXYKHaGPnvKQBQufbAuCyCXnGjWqdyLS6mrbpESQCFGJ9bZRXxtUgp8Y6qbVXkgdQ6jmEpmy7auGxoUetEJn6A",
  "key18": "3b1p6grWKBh1Fme4dNaPJKJiBfQE3EFWPoPzSKBkJ5sJrtuC5cgiWeK8xm5pmhVf9327N93EQzVQx4huapQXEeey",
  "key19": "2juAq5UwgQnRvgxeaEM4Fzg75cMWEweu37UBcsktXpeSRJ9vVywM2pB1c6NGPYQgFdZr1ncMgggjDrePQQ1Ew8rN",
  "key20": "2V7sh9SyV6soJuTveXrDK3NNtWky2XJJzWLM13vAKkQDwhEwtyAPqgfYEUiR7aBpUauJxM8wqpir5scUfXLzytsp",
  "key21": "266jw8mckfTBDEsE62udxvRuTHshPHtoJxxwm7UnWoeQJow6ba15ZJyQYfwddk6rkitLjrieub2rsuomnLuXqxm8",
  "key22": "4SkSCpYxCZogt9RBKaQN7ZuFsKAzPRN1G2SUC7NFnpcjSQmnCQXCEhy61MN8SArgDhJHYQJ36QT6NRNvoaanXyFH",
  "key23": "JfoWHrZui92LamY6HajaLe27odBJjnRkCqG3vehLeVYRrYkFpE8LHh2snS4kRo5kK5gMAqi3239xSMftUcwZgRC",
  "key24": "4zyukoyYtnFW6g6UxoHc1QdVbnaUpFcSJEGv57bqfjxX2UTpGwLn4mDVXboetYBRS7hxsv7YeMxAoQxMje68JLGf",
  "key25": "4AFZnuaKK8Ck9DAbRXckSVgudeT3q6RvCEuRqt39wAEoT3UvMT7Ny1TBpu2r6nLo5U2KoUiEyA48Gg2yHaymnBYS",
  "key26": "4QwYsQqPDrAS1sKt4iWpsFGNLtMmDtan5qh4U3oRTf5qJi13eYcTiJE4Z2QK7HDL5my5SjwscZ1i5MtBNyYWBRRQ",
  "key27": "4GWSd1rca98rR6ywUzG3Y4vN3TVwnm4N683pCxcfPxZEtTVgAh4muUHEpmuQuBgFRRwppanusozaqjfypVRrXFCb",
  "key28": "55CM5UvY6uBdEQNJ5aZvVbaChhjmHWty6DKriF9YtRx8q8rct42Hx6MNSkG493zi5KWaASbEYW2qASUxodNtYusb",
  "key29": "3Mn8VXQbCPG3thnMwVtrcRRwG2BD3pTt3gfCJVLvrpj2tiotW45shxY7q6JWhPY97tQe9s98qTfSjFedyFvF83UJ",
  "key30": "3WDdyaBsLsH8GGbdieSXagoGZPDpVFru5TFuzSJdJtreB1DR45AxkRZdDgwc3X9ro1NASjUdoZUYCjBfWwj5i8PN",
  "key31": "qypSqJ9TShnZwSsdEQCxbHAXj2EwXLZX9f3m7umuuRYKaN5xmVLD5spW5NHdpFuJyng3Nww5USRVyYC2bqZdic4",
  "key32": "121YXxdTuSBtnjRuRFNCdLg3Ch4vCGoe8xpao2LWFxGTkWQCvv6Bkx2gi5egVwZGG6zaTruWuLJ58stuWKso24kc",
  "key33": "3LkdweZLiA8YYSzDykJ6F2xfA8E2PcybuBPCeZ1jSviTLqZd56QfQPZgmfuktCNkwxSkRjXGEdxQyVKAMkc9f98r",
  "key34": "3y3WmmvSDoccgdw2iT4RZWKqTEoEhduvLEQnAAseB9Jb8Y4uX3ZwfrFCXB1iveThJH9KbKqE4H9MUsL6zhRMxDo5",
  "key35": "41pFtMi7TgXZnuheMsgWvtUaE7cwzACzHKvRhYKgLDBHoDXeQwMbWkatW5y9LEbKq8ESkSAN5qTquCtQrGjbKWCu",
  "key36": "3WsTF8Q9fF61XdR8uLaoXG6MQV928o9JUMNwq121PyPerFQS5GjQWUAcGKxhSzC5qoR7f9Ug4Rb6TKXby74mBZnf",
  "key37": "2gKSf1mxZQuw7JHqjCVSow5dEbuTkgesKVAExKuZvcT5xUkXwkzWxa1coqnJi4fRLkVD62zsWiZqJ6xeSQGEBvLb",
  "key38": "5rXPzTo6TetZHVCejKazButWxejaG63FqDse6obDB6qhg3sEkGLUWvDFp5Bn26foDz6XC2bJ1U2w1HN3EirJ7tEc",
  "key39": "4TfVjTmVXwvVYMawL9zAHJqMZewnthn4ai9AmvJnYjmXZ6EEohMQAuJRozpSrZqPeA8DvPACUWRZMWfVEe6WzEth",
  "key40": "5oxoeZrRkGY5w1dbEc9TwYRQ13qgXTzfW4EGkDdnKe5MJHriJ4iDG74AYoQ6P2FeBjQp4w1BBrmNfW4yjRTbqdsm",
  "key41": "5chddJmoPyLvbB25DrT44Rk89613MTPyBjvB9ttSgEtz1q8nasLJNJ61zhKt6ztF5G3W2g9etEFQNNPpP4bWqXV5",
  "key42": "4CGQ1N6eBXWmkeopHXuNg3tKqE1e9qSkYigR7aYAxZ913xvpEugsZtpYCuf44ipXop3eQKy8nqfqcJJgKj3sZz2g",
  "key43": "54jHrHy4X7trCRNvCY7g1ey5VWgoRw5dUYJcDWU9skuKGZHuGHwQkxV9RxVTmyQfGGQakXb22tBy9Gmz4iAq4J8L",
  "key44": "2iTe8BezAgm8Ba7swxKyRF7Gbx2bKZnUFZgCSChDgfk6syHXUaYNFc6GZHrr1Zupr1zD35egM1noyiHvYywjp6ft",
  "key45": "5rkzEpuscJVBvt1LgRkKzGSkDpa7abJFPmaj6vw7174NM26PnacVLxf6X2VC7K26Jxvnx2sZp2FwFZaExSvpiEN4",
  "key46": "tnFoSzR9R2jyksWd8mvcPU1Pr4W3Qoz3b4PUZTd6c8LX5xJncjJpQSfoHZaVepxcwzrH3jYxjMNNxExnuomLjMT",
  "key47": "2bVjwTEz7MsSdtXNuoNkY9o1yzh19MytcnC8H3xc5breDyFwMpRT7ukYcMfYTNh7a4fFcMxQc8gJ2qr1CGaH9wo",
  "key48": "3fsdTLfDx8ewHCo6KEQV9kSW3yTUDs6QGFqddjX6kscR1Bh9uPKz7kb54H7igHpRbaxd3Z9iVijdPnyB7SdSZYjq"
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
