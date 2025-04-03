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
    "5dHq2u4YkQqGVzQg5NnFtUYbxbqzYCcJ32ZKh7FQWugz1xmwpYK1vqcb6XEtbB2wD5CPwzsehQF6cQBDqTTbbDVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jmDFhJwhBvsvKGdQ6jSfrksQPL79XjCBkktWmUwokLSqSZT1xSh51426bajLKa4Kp1gQf9AEqbxjrKexEVjXReE",
  "key1": "315RR87NCmPwxzNHa7QKDZbx1PpbgN4DDAX5Rp2kNeMKdjT8PCFECSFUDZvUPLe1R3AcoZ7KGcSd4Zp2E4TNYDeN",
  "key2": "aktP7JMmEfbGTpkA4oaZ9D88yJx1r81pHe2FUV3ZgDXNY7HNT46yqUYqJYWFFVnJ5CCGTZ9yTM8XTqvcTUiPYxT",
  "key3": "4V6s6jLCbjyqt3hDKewmk4Td648uUcDUoRWE24fzor9EpwXy1N23kmqFZSxqT85J1ZvfzotHNjKDiDuSRA5pAyuq",
  "key4": "jdsNgcAW6ZFMp9ZtMzykfgy6bCwe6SD36wgMJsK9u9UGMFyYAzDyHZg2T1XzxJuPEUM3RBmexeg3v9rK9tVne9j",
  "key5": "4orSDcHCWgHjmqFQczAPwWYq9Sq7zArzMN2NHKjQZpoU3DQSrmG6UFqiN47aMo4x4dMqkiQASVyDyXwWqAbFcoWN",
  "key6": "jsEFwJKSgAqmNjMwMzxHDVBwXT154w3vD9a6CRC468ALcV4Za6urhFJZtQWAmLtdtksAXmH28LGumB7YQGxmSsY",
  "key7": "RrcNGoDepFxc73C59nEXS6NC1JrH5mSsbEjomiz8s65mAeNDkz36JSMQNvGXTtasKskngcUhoiuHwUDhRBo44J2",
  "key8": "62v5HeNRVBtxPTWLh3iuGqX5xDfsGy4bjxv5rpLZBpihQzXyVQJ7kyvez6xk3NtSYC8CGyr6fzdFtPFDHD4896Z4",
  "key9": "3fJPTNpptFgooAvsrouyofwgAVGvk23Lr4JrCRpKce2qoKyRsZzHxgv9qo4rbh5rdZ2DhsKsZL7LQS7x4894XiMD",
  "key10": "2FCzMcda9bBGyE2ie4kGzNybtTmhVcEey8zuBJCBJa4Q8SR24ZN6soXA6rJBFwCWLzEpr2Z9pTAnvgfcnt6biYHY",
  "key11": "3cokAQvBQ3b4fgrXhZ86Mz3Be96wc89YQ9yQQPJsZvPRkNe5rJGtmsSPzXvk5o4o6jGdtFKrMQDDCE3mS5t4hB2n",
  "key12": "jt1JZbrMpgJiV7Pi4hq11nSAFE5rwqm9zRDkPtr94uAhft3AirqhSqanPjEvaLqJ67JH8b755JyAccgsgS7MP5Q",
  "key13": "2dXXuqTzGp4eEvnT3zPTCKzHYBVzpEMJG8aEnzZmEmkRnigUGrXEwMRhNwPjJwfHekbuSJxhvQEm7oyW7kWpibWj",
  "key14": "cjXaWmcBXBPBx76tdR6CKzUqstEuXCJCBd23oVBgFJm5aqwvt8CMbuaHE6KyM95oA2814VitEZPu29TRECaSRB2",
  "key15": "DU9cqQjsSSe5QkTvgNYCBsmUpEr6LyCwHHMHfRwXwqFpCK9eBQgGba8WHqtUod9BXdZuHcK3h4DwAaf8HzAjnT4",
  "key16": "5hdky5pT9VkDbGT8YXcW9E6Y3TFFyKE1QLU7cQMC7tuN8RSgDpruzRV2iRU4hfbf1oVWSZXFpmbi5AaZYnefUZsy",
  "key17": "5kXsaH8B1E4sEN8fqRKKrBPhK2ZFjj1QULBa9p9aXRg1YDe17vDayuSSNU2qYZ1UvNohMzhPSmTPJLfW2r8SmZcN",
  "key18": "4WWGQjgbEJhyVdDyrf2qtukfT1M5qXXUVvCR6wNDYpBFMjnR6foFadFaWDzZa57pEYBWM5hBAPVn25xn4vGzV53P",
  "key19": "3hjXLGkW9LMWCPEZZJ9Wiu59dGnBQTHuD1cALoLiAfdp6UnZpydNGAPyi2vVsfzRpbVrS6PVT3SnXc1s1T3dgyT3",
  "key20": "2fHvqUrXyyL7bg1YZqaHRn9PPCZAN6VkSoXBHFNp6cdr5iTYFD4TcVvfp4VG684PWCDsdyXW4hFPNMp757BgQdZ4",
  "key21": "32nJNgBVDXKDchRqmGNMkfTNaYZV4xikw3nqEZYNZCxZ1MDAKeFs57mfHV4skiAkW3j8CtDzbjPCQVKCja5uMPhd",
  "key22": "4HWcr3oV4qzFVfp6dMV39QUU56zHD8exJTarsKbSZoxmUTxy57nuSrAMmpMthq3BrPuzaauo5xmermHGhry4ZGuy",
  "key23": "2GBdMT5dBJrf66avSHpcRrV4cUnyrn4eaUp6voDmoQzB3jMZ9zhvMZRbJVXdPcZn8widTmVexPiqT8ZKgkNfcYFK",
  "key24": "5Z5gXpJTUNTS18afDnwAZJhTGafAX345VXfEk9e9eQts2o38AAW8PwfNbARChkoETjnB8JqG8tEjx5oy8njVEmw9",
  "key25": "33G57Ffg7UcRd41WQVtgeUsGVFpGjuJwRrMNySo8UbtsqJPzvLssFi9eRxhTrsYo6e3AEshQGaKrjjz6mpaeHWXo",
  "key26": "4EcSxsxmxMNN3mTuUrd9fqBZhbBLRLvFizBzoqtgyZhBh9HwrwMsoBb3QC1rs6mLRxAEcJxQ5M8JM63z9WstQNPk",
  "key27": "2SNuaHvtn9C6DvwFCCUxKQfow4oDAVjYiYK7GkfMFVXMsKfxw6RfhjVKzFUTAYJ1e1gRfwxEaYnyAoLzBrJVpi2q",
  "key28": "3cJeyvPc5MYh3CdWwLgZMYPDjHdquevsWKqVcbv3D5nNaVJUkFZBpmigj1z14UhmADk8yBseZ1AYzfg6KnSKtUX2",
  "key29": "3Ud8yisvkicWvpXnaojNRgRJf7WG49j8yhTpjN4vxjKwa9R4977uaAQ2gNMfsspvrNh4MaFpqxRPNJoyt2XHKm4X",
  "key30": "445RdNAVTtUSAT1F6cxqLrctYW9sHLxTzgaubeVh6vPsXzTF67YpymbFSEXPSTvJfd7gD6z2BgbYUUmuTEw84W3S",
  "key31": "3gAv6xrGxJtXzJJ5ed8QnKMAGhPG1yVC2t2sj75hGz4im2vT8AEpfadAdt1n8sqcft5YCZKEDzv1NcLKfkwxTT8g",
  "key32": "1XfXA135dBTGCeahPDsDNkcMK84muR67Xdwq5aUn1WER32YexL9Y5xMjfrtt9ZTZtepKYFuFNZSTRYrW8v72xSB",
  "key33": "6VvzXs6Ypxaqb9Sk7rjwUbPjTXGNWhxYzikzigbwWoxenUXjg9RCPxwBkEPoy4E1uj7n7w4wixbQmi9bvAYuKVE",
  "key34": "4rZ7qk5LEAr1515QnjZZ9dc4keU34LQAaFYLYcbgw1UrYUsKbkjHn87VkjAbBrWGp2P4v5itneRvuZxvAt2eSaBu",
  "key35": "2WDH6jWDsan3VX2sJH5dMJoW5x82pkqUbBg7F1mnNF2TzGrgakRr2RPy9SzFnDNrV2iJgywycripgiZ7qvLe4rH7",
  "key36": "58LF9idMd4suP7j6EAt9cPahU9mYXuaz1C9CQsYMuVLUSQvyug8P8JnAjXBYSAG4uPX3GLGfSA41dWyZ96ftjGX8",
  "key37": "5CcQRMqSPA8YMttpADyhSxsRaGgQv1spSWhtVa3mfAZQ4BtPQCGwikbS7wDq1WdRGJgJ24N756MGAA5uV6opWGZv",
  "key38": "649RMghQTyg33GnPL26RcoEDeaLnHLy5taUSaQQMARpX8aE5nurFwGYXFqHcdGaaLNMci7w47zw1aNqwDhZg2Qhk",
  "key39": "iph2GMy7LGsx5rrq73pEv1pL8HSskZwPzmnUcJHZoXbKB58JVptmkj5493rJkfr5Z92XbcUPK9DzUbsVFomSWFN",
  "key40": "2LrnngghiwF8sxXC6YgufSvYBrjfbyHvMUEcg5CPmvuLUYsCiqTdDZWjbaTmfCF1Ar9bzvopQjcpYW8CpbjvTb34",
  "key41": "8sR9bQedeSbuDAbkAwXEDuJTdM9fD57HGv2qWtk1P5iG9diUPcXB1KkQfnjBKYhCQsXrBpfiSC7SRmA4HAHXVjn",
  "key42": "2WB8HxTEZUjnPiedPBv6M7ui21uqXQKKo73NioE7jaSnJsFkydt9nutrWaYAZipnpKcxjhMqamXnHMkeu5a4tdBJ",
  "key43": "2gvWya7rnbdiLKJSkzXVFqxPdK51zvpVQpiC6PvosD3RXHdsVnvPQte4U1PrFVELwcwZ2f2YPdeMmgwKvuULKPM2",
  "key44": "SPPv3NEY2MArRa3hWkLBppFk6WQnCdyZpuBUbKupEA3VJfzLK39Vr8q7c2RKaqfi34W3NFhsWiuWrSc9aPZ2fwn",
  "key45": "5J1X3T9h47nH6GomJ2ocV5AWrBGfNK3PRn6yMXToZm2k987cffycVMX5SFzfoUZ8NYBXWZgmpFmwLgh5M4aFN4sj",
  "key46": "2s8bmdZTkHQ947jHiJSQBGofZcsw6qrKecKsm47PFgnxZk7FRVdbcZQEtx8MCtGKEJef5kJLTm9WnkZUAA7XmkKw",
  "key47": "415tnu9tuvqy7BEaiZpTMKDDkJfipNYD7JFdoipgMb56naepoNquMNA21RAXMwgW2NJZKu9BqgVzJqqZRMkahWZA",
  "key48": "3aCUZNFQd5XoqNhTgkC31YJqwVzjhZ6GiUxKzMXALudbvTJhZBpAsZcpMmPV57cDbrzJBe6zKfsv2GAhB41MWqD8",
  "key49": "4o9DQuxgcYrDkRnm12hCBwH9pzHubWBkLfC9ecosuzMvHEcx6qpfuJEaGpqkmeHjtmDrmnAtVJ9EmfjNRFaDyBe4"
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
