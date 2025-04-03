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
    "2z5VuoQoDnCnH5uuPrDsmuV41Pa7REohutSYgUDAKZUyMAPgM2NKSVfUhsTizBky33di9tETYM33bHTTwdD3u9cp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tievQuQ2ZJr5nhjWLWNFdGjKMZuAXcpFMmPxJHb1JXFULaCb8292FcBF2zdwfwE9yysREu2L57TZD489aasWnUQ",
  "key1": "2DVVoEpdBRNc9cpBnXQrgr7L1rZxPJF8wi7XQDA9aapPGDnBzdn1yjACnhdeUzYxbo4P53dgDs15BJ4TgF4zPQt4",
  "key2": "3DwSukUYC7SDTzY2xbEqQKWjPJwTnrR81czNtoKDE8fZdtAU9YHa8uQPr87U7LGpP6y9ybF94LRpkrFEFzWnPVru",
  "key3": "32moxYKGVMj1CLMNJELmNHLy9MW5WNyCzd7DCu7wMAqcDGrcm6wH8nWWja3nUuWnvvtycV6Uu9z8YwehyazJQArB",
  "key4": "2UnNrD5YVZxjSQ72HSeC6izyzkkiJwqpzC8tfi8HP9t9oadH4GCxJ4RmEUjLHCeee1RddiAyGtnKZacZ6FULzCCL",
  "key5": "4fCan57sLKGvX5ckyfFR1sAakQj8RmfdGgeW9TVhqTEvM58znzLEAU6BZicELJtm57MbFkaE7pPzScCa4R4RFrCJ",
  "key6": "AkbKSSxz6CwzZAmWUFym5nidR7dCsV7Y6o2cne7YjiEZndY6pzhgaTHiBPbJCgT3EJVPhM7ks2tsv3CpbGqjRLf",
  "key7": "43FoP5kaqPra3X4Sk2foowNw6Z974praUsS287dxtUPTdrXxwh7dk852QgmpRmqmvp3EzkD6Vx63NhCcoHPLyVpt",
  "key8": "45C9GM73ANGfCsrDx2wjp8UvnugUvRuafJ27H9uxe7q3FbLCxXmpETH8D94qEA1Vmn5VQReq2ZQMkK4sKQGnWMXM",
  "key9": "5Q2VPJGCaJX86emSLUxAd6c24xnWH2TZtfqyWKBE6AKvT68j8KapjKrdQJVnPsnq8NbzAZES8PJM5kpZfe7PXFja",
  "key10": "5z3tBHRX8tKRPneLCpYvZMb8phJ1cirvZjnQQsf4nLsBCRAb7LccwwWvrx7beLRn4EPrBKAtpiqgvWAX9GRjPquR",
  "key11": "4dyiPMyzn5qT3f39nDcaYaYgzJehFV7izmBcfpyg9bYNT5hdYMoJBCMaHnzbe1f4z6wYPfU2m1Sbndsc9CPsYiaG",
  "key12": "5EbkiE3U1rGVfHG5U2mZEMtKmbojGCSG86n122gYKeafzK6Z4aKmqGYmEdL7Z36XFAB8MJepQvPhn64PjQn4S4Cr",
  "key13": "5LfB4DH1SQh6pRqswGjGbhu4VgKsHyDPCfNmGKBov4Sq1rXqYNLHR6E46e9AjkFUWrap2WHzb2g8jXUz7T1wW2MC",
  "key14": "3rQHbQJJqHebdQRuQ6ZzQbgRkWLQDCKAdCx1sc8CogxctxJWMpFCViW67NmDbXwmyikdcpR4XoBEv4L1eQSvssU",
  "key15": "JgfG3a9V1TZJ5r3ZkGyT6go2FT7D4ZUnGLtL3N26RyjhZKbwJagajzcaUwgx86Cvore52rbYkPHaPFwh9FgX6SN",
  "key16": "4jrBBqVSk444RwTxMbdhN9smtJnhXhU3U2W39mmbKjF3a3hX2hNCPHfqfYNwSkurAzvuKf3EF38WnS2UW5myYafJ",
  "key17": "5iNAMEYruWpt3nfwt1nhDxv8uKkUaVHyGphyb7zXBfXpGzee4LDMuzCvnTSzrQxRxf9rchLYC1AyCrNMqQrUGFMT",
  "key18": "46qeHqJsRmjHNorcR9W717uDLRGrCTbMsx4eKaFZ5kWetPBBVHUqBcqy8TG7ezqsoHKuZJVTHf1og7QniKiT7i7a",
  "key19": "q1UKA6QkMvgFpxr5ZLJBo2f8ZC3irx1EDD8yYeZxetySPbQsvREVm15ZXvwb7Mhx5aqBNwFPp7MwtVr3vstALw1",
  "key20": "qzAFL4NL6s5NUEKWhFaXwVKiC7CW2879EygTEh7E4SrvafxF48X5GaAL7zXebsf5WwPScAybzonShigKi33WHsR",
  "key21": "4CiYMfYEzndhjYqH2r4kcaQHiYKUZpJ3vkb9U8Y9SxuH2ca1mZEZm4Ps3wujrqimww7ujVvXMVQnF6CgokmLYnDM",
  "key22": "3ocB7cx7BBMDEyozUepFVw5zJw1a8NmgPEMvZUbRNvPpDdcgpzv3nBpLr8yDpVRGAffb8TWMRAdfhsVarY1hLYA6",
  "key23": "6edF7x3vvieJDptVukdVZP7bdz6oe2BnESWssdUm95TuocGnP4Sfpo8EZtvSBdbvcmdBAsqDH8KKhDTtXs275TP",
  "key24": "4nkR9EJ2eMeZyW7CmjrwPR32DZczMvT6yWJCaLFkFNTu3SDZAV5NJF9W76S3JfbCbzbtyndjG6UgAoRR9FZCoUrx",
  "key25": "2rDLySVTjFRNspoRwkbzEzFG4P6fLjRuoGuET634dYWmovt6rfDyKjK6ESGjKYYfA4mFRwCFGw8FokRVpJf7SG64",
  "key26": "5AWY55oxiN4jW56X6mm6PFzLwyi1oJBXiWzN1PETDEommyJHzc6oCDmM8UC9xkThjsJqSYsoZJRvqqKEVmcbMEbT",
  "key27": "3EMPqNSgXT11BKKwdG3DsEUqzYkhhALKKKAsuXnUrGeoodWmX2nJSkE2rvbErn7eC4se2vpjxjmvC8S6c6eqWhVT",
  "key28": "437omFy3XW5PJEUxkjtpUpFt6mTWu4qVb8SZXKpo8p3ChBAYfKgPAwtr8ZzzTgswgxeQhQSK3ZTQALpkw2BGA512",
  "key29": "5VTzvD5FfxxUwEwV2S4p3wQiaGhFvGGVi4LFMgbkb27eWrH3LcipZszfM4NGjF9c9qQ9ZjAfcBQDxeaJ9RjviLeF",
  "key30": "UAHtuF3ybJHuPB3iZZnyCufYN22m9CJXwWJdzVYGkHZaK2PE8JuU72D54rUEDoqcg81DWSXQRSGE6TWXrqmXCU2",
  "key31": "2caEfKBvrvFdjyUuoLL662UQbCX33HUUzeMrSovrFCwiCz9GkscvvxpQPd1xmDH6Pxex8Rv2d9rbXPZqrM5kK896",
  "key32": "2VPZw2UNo1RywkYwoktyN5S7JzdK7rE7FMg2MViRvRJvm2FajdqGUDAYLXkHxRC4XVwP4UCr9RVWozBFProHesES",
  "key33": "2t688d4Lss8bsTvD9wAQ6ovcswdYMz3chUD58hm2gkR32xHqktwAKnKH1qcfZv1nkpsJ7ipwjBiSp8S4jaVLA6JL",
  "key34": "5WdjjyfNSJgw8YiKBHJBeo4BN2fWbPcrvXLqsrzycn7yCCoLi1Ebo47LVHxMs8c9fMdUKisUfTcgic7sRsaFirRp",
  "key35": "5CPEhi2qCWXBwC9nECbTAv7qo6dgGhU9m4nNYqLuMPCw2NxZEP8zM64mJqMEt1o2eFuDEUELoL2hiFfGNvdWYJ9i",
  "key36": "3F7rarB3ATgq8S14etQCj2FNzNvYuSPXE3smoisD3hSEpNRkRi4qYeK6LfCjzEJ2gVkNqDQVaMz23jAqNnEFPx8u",
  "key37": "3sGfxwi385hPN1GN5o32qhL8KtjLMuTuT569aPwc3txHfnhzT2XNa1AKRAEN9KVB6xW4HUm8Tnv3Ho9LzST2S2pK"
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
