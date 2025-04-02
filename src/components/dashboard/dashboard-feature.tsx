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
    "3Qci6xo5iGwHTP48c5qyRSmkbm6Mu7EmNBcrGMqaWMVdyJn97dkFzpMQvbMuC8ANMoPgojriQP8uMyEM3yEktBmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "546W5bBu2gd3JibapNpbnrF5g8LivfzEdgZk68rNKh9d4J3JMMsEzy7CbXpAaKza85Eb49NR2PzqLGy5GGxBiv4Q",
  "key1": "51tvsRQ67iMJxZ8RmbEkjfU1uHjhvAJQ4qvATUznNN7yPJNwKP8h6N8K3D7GZiPgUFxPEYYqsDrWCTRr8yTycL4f",
  "key2": "4kVqudBuG9FTHv5xzoESE6fcUqWwYc3z57SUDJdWcUaNSwKHscBmcL98zEob9FqXPBULeZfzs8Er5f6jtrBrWcHH",
  "key3": "XSjuKipeBNdF4ifQ9LkKoEp8qPH4saML8mi3XCDYFhchyMYqkYDEaXMMR8gvDvjP5nj6eXzYujSJoGXwjKptBJo",
  "key4": "fqcin7jp5Gg2mGHtZto75JE7pzAeQuPcehkKnWp1UrMBTbA93KyqjeXM3MW8ANNC9qiLQ8vZhwwg3gb5UGzP6Xe",
  "key5": "zRwvsyN5FUgMZaprTirXa5ue6AxdnYuazvQA2tZmhh7m7WDGt9R5XGB7TKCN3y6TtwtRzRRboZsdFDjQM3mbFzJ",
  "key6": "5se1ZGnTxQULLYX8HE1vKoKu6H5M559DgYyb5HSX4URFjYNVs47hnegeoJ1emh3XpKyYxnL2HU4YsdGE6eVJhudC",
  "key7": "33hrZryGfd6GEm2FZ6sEjcb2oS57pXppgqTVeme7L7HGgHHUmXf81tjR92Z3rhA3nuZFnKFVwjQqEJ885Y1peNaJ",
  "key8": "5PnU4ptToKcgAhCkrHr4PqH9zMKWY8NJbnVwD72jaeuapbN5Mwpv5ZsYYotgVh4tD3vHCF3wBmxHjW6KL3LrdG6e",
  "key9": "5mLYTBdSSHDHanzGxdgyi8J7UFURtfoDGAo7jf1UfX7S3gRU3nRZSEDCfcb3aUXwkQ1icMtHbyHWBGxtrtWHUvf1",
  "key10": "5HqnHDXvYRJqjMCkLnFEdkf4CEMkuR6pSwGysogBn9SfqYBWhaXzEbhH3jC49NNsQd2tj3TDAZe5sgpfCKXQEtSz",
  "key11": "57QNdDqKJaSJkyRbmxRWdTyUx1bPYCFwhgG2CtzzjLBevH75eBzzKjAhuGFAycWbPnMUB48xugWkToQSGs2MZRMp",
  "key12": "34bokiHoZ2fMaX46kw2tnPZfwsmUwjYunQPXeLrjGeRzGouaLKpogaT4JKmGii5ixLJZbAdNG7DHfUjsJEdcQBTb",
  "key13": "4zsUxx4k9JsbgLr8RZHWLgkPYfmmkL8pSTY3QFZMTdt4oQx2YBMPF9NmurnSoycwF7VWzvNMwEr4LbNP6F17e1C9",
  "key14": "cXY8YEqkogbnFgu7Ydhd2xuFZKSXqaHSZd4bFz1HNMdy2rSHrDMRmJ4ZTg22yaR798ij5iCQwLtstARaXd1rPCY",
  "key15": "5NT6VGZPaF2gJM6E4uotnvu1dLJXBGjdzoJfsy4vWq6RrGnZSVkupyirBPQ2y9deJWCTkmKXj2E7RqybRvSB5cJ2",
  "key16": "451rGyfH3Lo5rYQ664aYJEMAGiVQsfYJNqStQngmKGLPhev2Kizbp314GapfF3pfz5PFbWMGv6Hti7eE2Cn5HBSH",
  "key17": "4u3jPLHYeAWQdQws1HPp2twQJiFnCvPVsdnGs8pnrzo6oqfegfRCzHbzdMmyANgptsGnCWg6ZV5JB9fyL3nmEpSx",
  "key18": "5HrffPhraet4UFc24Er6teNeXqorsykHyYsNgwPmz7isqpTJuoV7tWipBWjaTnoCSoANksEsbchrry28v76BmPKX",
  "key19": "XjHwzZYamE7VFFrgTCCSMa2a33cHhQiDdnQo6yLsuv8JQhwUwDYVsvXKW6B32UuT2A9dsPNcAA8YKAY6x4woBJe",
  "key20": "MzPnfgFaU3c7BawSQvAEZx4QEUZHuPuezuYiq2i7jxQGjZ8qbErjupajCBSC6krSCkg2R2KaDjBu4L3LMCprMai",
  "key21": "2rMd7PtX5iaUHfDgZE6LGb8hnZ6vCADHQsBsuMhsrcseMTC4ghSFYCYPE1rPazB8y6XQEqBnczgjiozCoS2wvWmX",
  "key22": "5e6J4zDQJZfb8c4VLHXGA5hLoohwgxDMTh4e9dSCYLVm2ewzoAxUi4ozezL4Wh41cxY3LsYufVmAUQiHrtFcng5z",
  "key23": "2VfM7oAevt1A2xX7sukRYTmLM86nax8reXJwk7DYchxyrkj8fv7L5f8WHv9JgCR6YycuVb4bKT8kYgRan13QyzJR",
  "key24": "282vpvEjd1EYjxjmJvoTM5v7W69aqgJYcH6PvNJWiiWZZ5kQbfMtxDZiZ6hqL5KD9s8XaUDsizbbaQC7Ybs8b7YV",
  "key25": "5HuF6nvpfUfAkkW7DGiE8Xawybs2SE2W9FiYagwCrTKEeXKkw2oFCX4zPkDFpu8JcvFT9eYYCogyZ3uvYkq7hT4J",
  "key26": "4So39p8UaBWujSr8MUdnZmCFbP62pUsZbf1Hp4NZwhnLUZHKjBTE9K55g1BPWjgzUbdJqtqPbZxv1PDmQ2FLtoJm",
  "key27": "5FT7oSyDNNwU2pWJ51rtPW3WYHeBUvzr73nYrck9xfTAVciyQJ1iYFtRNggeKypNGpuV3kmzrxdqqoKYqb14XEZN",
  "key28": "5UPobcshwsWrufJBWoV4cMKYjuBNRfjM4xbqRzjG4B8Nb2PL1JTjdjxHRVyz7uyf4rzMj2G9R2EGSMPHRGP2BMAB",
  "key29": "2AunPEnh83mxXeYRe1u3Tb7eXw4sbwpgAK4osFBPGfPoJsKPrjJ6oeDuZSvNPrEHg8BUN53pLscSF99GGdXiwZ4K",
  "key30": "5Zay62rQBMxwwcoY8pgdjchF48TDAjFJvtFC26oD4fvNATkMec8Svu2sDZbZXoRC1VhJrNxtjjfr6h9puzc2SGY6",
  "key31": "28bBmEeVZfnxrpeN4J1CFpagobr6d2HQqtPrfgCWab7aqVArJefzv2KbU8d7xyxCwUBpupwCUZe7xXLnNz6tfppm",
  "key32": "nPAk1tJazxVXHjKtj2eBSxUsfTtiuksRBsevgdv44butPVrNHwerNopfYNigXobuF29FD7NvxLevMVxJvcS7j1Z",
  "key33": "2rejRTT6DJNQqjpHFkL8KTNbrDaYx6VTAy3PaTqsXfxxMGYmzSrax8bjwamrp1CPK1Qc3ZUa7qFzzf5oXY55QryD",
  "key34": "3qcbNuFvwzQpxm4GU1SSujiSXj6hwXdH8hny9b9QtmxRC2WvG6XFeh5843fhFK4n8Lz7M5d5PQLJAPjJaWDwUsjd",
  "key35": "3hbFekNM2zxdgVoQuJDZvnW4X7z36sxyV6QoQ55ZRVcxSpEMng1cYAVcNoLzE5Jsq9Ze37CxZP216C14oxYHN4Hp",
  "key36": "4zuqh2prtR8fNFdFGcLZxvEXqwPCnwpSFH5bBKQWvHKBanx69yxc7MErpfZsVvahYq3z9TepkXbPn3oAkVC2qnQQ",
  "key37": "4nNiHrgB9wev2QzmFXSdVueN5uMwg5k5nhTnR199pjrCs2A92W5apThzwnTzs6MjghNbJJjiJMFK75cnNKSP3xkT",
  "key38": "4SnNhgiFg7Uj4LpnP27qE9HxbsxXqKUuYmkcHsFt8W2PeKTuAPSBineRVkDNsAGt4hM22bsipcaZaPKKxwY34g8j",
  "key39": "3HDWFjWUt43ucuAKi5SQTHAp3WLHiVdrsJwqxz3XANfFvfABmJ3MfFKhS4ei6ydEMNooCNrHdroSEgNnB4HGR5yp",
  "key40": "35yDEo3gFBcHpaey5HengzaF1g14xcMmu18bxamiuURFURfiQDG6HxzoaqEShKACbmgcNAGbpNC5s24nhUPbK3RA",
  "key41": "cuySg5QcaVY2QuivDjQzMgfzUGoLQoPNYVogZGJpJHcx1SqGtKgzevPgx25UnqAH7WNhMziaXFJi1yVLJAfu1Ej",
  "key42": "2NsKkkiJ4NUrsrHHVeenTP5dPpVJRAURVPLdGbdBfxrQKHetkLFEZbMeBaiDaRFWnpURY4p8EjtQucS7eD3qjr25",
  "key43": "3NZYMmXNnruvhVQxGQTts88L1Px2nEf2Weuzha6HxqYMk2SvyhKEkkgassZNUex4YMJiyBASZYYkaxQXqVnQQuW4",
  "key44": "4QvyrXWsQvZyk4uH4XZbChwqZNTwNmvSgYRGpDuvCRjSbreht7u4D6cA1bSzbVgFyLXwq1iFoY2UFWwVtLa4dVkR"
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
