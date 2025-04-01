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
    "4FGPu34opnpQ7E4voEcVpWGZv9NeG4mu2Zvy4PorEHHaLdMawCLMCxXHNT9sCAr39AQBSzipzbiopNxHfVGftT1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S7DMNnkyytuLXJhmQ17LZWcJ87VW6LnhnuVYnaiUTxvJqZxtFX5C7Wi68FgyfKGc7fpfjSEd83VHcvwehU1eBqi",
  "key1": "43mU4h8v5HRPH2eMzjm5dvGcSxEK2FepjKYigDvAsH2jBuWjiYKacJnbBmKWXuxqEhCTsHJuqpDA2pmqzJpFFJtd",
  "key2": "5n9UxKwB3A8PV4rnhVnAXqBiesPLRW7LboXrtmSTxLsn1QXwGXS5tp27VZfD7rntz557snHc9X9QXYRKhK7qt2Ch",
  "key3": "2aeBxBZC6nG8Ax4tG4MkHwZTqg8BrtvJvPpLR1QJpMgREe5Nn64pwD73ra6Bghszwiks9zHzBNNLyfxANYyZA9FM",
  "key4": "4yi8G4KCQ2kLe5KSAdTgkkGU36fqq9FMtyuTFKWxUjBuj8gyA7ZtfmKGUitHw6orUzRQ5UtwYoDChnLYHEa93t36",
  "key5": "3Sm7mQwYXVimtiKW4hM63gyVC5S4Q9oVvyFqSdJjUmoCbocLSXwSRqdL4hxDyTzeUfxmqkkQn7Z7EaBXRTfnErYm",
  "key6": "2vF1uemCieKonpRQUA3dhnGUyHxUvBRZDHUwrtkQFJKg5D82PbVgSoYgHjESmSWU6fF1E9HwayJCbkLPkfhdLMLX",
  "key7": "61QcbM4xGrictvoRXovn27J4Jz71bPRS7jHtbzzcTWDPnGqmXpVuoHgTU7nvX4dKrNwYj8nyRTyF5zH1dDhhLPAs",
  "key8": "3VViefj4ddLUo1T6HKWwqCw2R7mFYHNeqQj2gesvyWx381xQFh7wEkFSpPQuKnigwjpVnhjDax7XqQMAdbY2ZP19",
  "key9": "22uoifnmnQKji7aX1nwvF2TpWaLNrRBZWyvioghETghp5FTbYZJctxvFnuiZcSn5abqwwiSMJ7Buj9v5tmWGrCZi",
  "key10": "5wJDajXP9qY9qREDfxgS7d8vMfw7twcvopo5wrtcvYQUswBDj3yAYZEJNQJHtGDp6nfAZ9sWxc4Xnz9cmAn9q2YW",
  "key11": "4mQPUgSND4jqvZu3nLPR1Gj5wkDEWeeLSHX4M9fVzEpa6qSN32gTstDbP2XUumW5XYHHDJRasLfvLFfuB2L9yzRy",
  "key12": "sp7KmpbZpE22dtDWKgYqZTEyePTdStdwjWrBzshH1uzXtHt93GkXoyqzGkM8j7o4VPfFrWBAw7xLmnqQhiedS2a",
  "key13": "32L4y5z6ZdmbYNsiEKDww4oaZMwGNKoevpk2f3xnube9wWPVuGCJkgsm4frxLHWfAYxu1Ruk7ZsZx1w67pB8smWb",
  "key14": "3pvJZzzJDs7uhfgEKJQ97yyimStzB1JCehtffsEoNgKP45HGHC2kG8Ks5PKPNZZjF6K3paVJqJeNuE1eAf4PC3ai",
  "key15": "4WrH4NqGPw5UMpeUKBiCctc9a8tvUxk8C7wzQCmJ6HEyobbCAVkbLdbWXq1yf5At51qqZFKt7nvikiaVWAUE6W12",
  "key16": "2139iqVddyVV8S872xtF4S78r1vXK92Mx5UityQKVYCTZHbGqyR6PSBkWZM9UwX7T3JwWyULGLx5hQZEY7t7bbt4",
  "key17": "128xw63XMUzdyU6XMyuvTMXpbvN8WAsq34QL6uEpuhY5sBBZz2wZEm8Tq6ZSVj7pkpovngSJJ43ccw5TxTSSohGB",
  "key18": "3haYmyb6yH6VYD1qNJx48j6C7TELHJAqexCpQE8oNtKXc3PjAar13jDKQzwygudcsokoCvz7RcFs35rSfV7sfMMk",
  "key19": "sECNBWXYWMUhPZakcwMYpYujm3iULhgWZPVyg8gQDXM6fmCZt3XvHiBzXXFD4cohEt1soDHr3vQQv1wvjZRDrjD",
  "key20": "uPcEvHjBtq3nL3mRgQYPyG2fAsvBNoiv1RME6Q3U4b35jvKBvLFgtxq99nRfnK4JaFVRZVmy7R44FXDmkhYbwpy",
  "key21": "4Kx5TgG7zEzm7V3kwuuJzF8KqnWYPD44vmHhLQ3UfgHc3rgt6B7QzXFqKR6GTHd9ZZeZchtAoTKhYrBLzvPBdAHK",
  "key22": "2RxH2PnjkRLFkFbvF3a2dp26Mx2vBLtBLEh2gtr9yfzkdFsbpCNyK31pVeGTkyFzYQFgzdRwY46kHSJHCy3g3Sw7",
  "key23": "2Jvs8zU7KwsPHwghfYBkTdaSvcxW3JjhGgdume1PTH7FqYTczX3vMkD2neMrPePa3ahXmJmYoh9eYPgTTLc335yy",
  "key24": "5bMqpizwYeDwAaGKtN5o4VJGZ71Q52mxN8eXGgfkBzPEeqzhSoEFczXCYLm1qq1jD4rb5Q24HEQvmWJYNPmqUehF",
  "key25": "2DH3W8JT6S9P5kL2ULB9CQ1n7eaJ6CtNJrvo36RQYqKBHj9koVUTTYiGq7bbLjvHPn276u2SrUeDZ2UNhh2fZh5m",
  "key26": "GUw4P7KYdVVtoJ3TGyiiFj5Z3NVb4JkKJJHwuEK7Lc3GLb1wgQfCeUXrcqyE7VNH8QDchT7ZZrcVYH1hfG8AoDs",
  "key27": "3v4VMKsSAcv6wqtfZmbG6WEu4GnUak1yVcKLZvzpgtvqrTgxcs9SQqkzYjjb31wQT28WsqW4c7eJ4Mcg95NBAcNm",
  "key28": "3Rznbcq3vFmF2SDankCqbxWHsu2cgH2onznNSXCrQDKu5yr31ikXyn1n1jYcuNuuEiVMfLTkFvE2WZrCVjqGkYHz",
  "key29": "5zjrfoRxRStg65sHX5bjwUo1mQ549RC7q3UfugaCYCBdckewxeGyWFdRfmre1d4KXLLqVfjNmR5KeyMoqYTJ2urR",
  "key30": "3aWuChNWzMGApqxTcCjvkPHHDgFz4g3uwwFLstD4aRACzwChRX8Dsv2iSKyHbuTmokQogdZjHJCXvMCTLMAiKQ1E",
  "key31": "5JodLxbv3H6Zsx2BMcqujMNNNckTGQoD7phdseHjMY4vgDSAXJKQqXMA3VPARuEb8C9LPq3vqkU2uHuVbbtukAvX",
  "key32": "4dBM4C8keCQycUww9t7tPHFyufmFccSytg3dqyKJVLC7LJx4T7CNhN9RH2vN2kBneBeqewDPsGsU5P6hREPYFiVa",
  "key33": "UynEJaJLRYNuL85kbaxidab2f6VNxBXbfvw8qwMYo3aYvyukrC9uR3iBjNEKLQVDuPRFsEPo222GJbZdRJLzCsP",
  "key34": "4EMtJHq1nZJ27ro2wkUUgZK5Hv2SS2kSPxzpJng5vD2wM14gvGJmrJvi4UtNDHTMLu8nDbDJJ3fTPdXMLW8cyopF",
  "key35": "2pxbLpG6GPMkGaRWrKFeLHhEWCN8JHBMmGHqpCzEtsjxvRVB2tywSKuRyi6HFFJrZN4K8Yuzrj88bPcnriBr8wtt",
  "key36": "53ku3wobbrNeaQ3npBMbFj9eeLGZm43dus577rGqvnvtAuNKDutsyQ4htJGdnt6fitWQP3edWPXRiPFgALJsATVQ",
  "key37": "211LSJd6dbYH6egDoh3h3k69tKmgbUNtLgx5urQpLcxGC3rSUbg1r5DRAHqC9C8QL5awJqJLSESaPrGzstVsVp8p",
  "key38": "cKEkyrBFqV25CzyShES7BRr7LkGuais7jv2BZ4qGB4DsuwiutEJPRvy79H6uYGhuYm5zoqdzbfHvDUut7WmZzAw",
  "key39": "2NLYErVwV2jGpepVEfK1RLt2bEpuyQqNAdku7gd2Djmxbcd4qfbZyFDXX2CM8yxvSf2eRDuAeVS7iowteDwvDK3V",
  "key40": "26GVFFXB2D7obZWbrZGiCqeMmrCYddGr5zbC9Gm9DZ65ZuttAyAnvYhaPJZdD7zxgTNkoc21ynZ3WVMqTxFGCc65",
  "key41": "35i2GscndVBwyNXpVVQ4Utc2DM4Pf3YDDxuJ6HFoRzj9YJZVKm4dWLrhC3foWJGtHtzY6iHW7cnsUBWNLME2TFGY",
  "key42": "5RZGNX7rSERtPfbPCQ24qp89bxqkfkRnTupvoKS8V2GRfXWEDCg7vy99rRLNJFbw8gHmR4UnERcniD2f6DDXzx9x",
  "key43": "Kw6dJ38Lz6NqAJmVvs9SezRrsHqE8Q8wifY1TjeTHdtf7Lj5qJuVAAbshXF7y1bziZkdazJxRK1vdCwK1BP59kB"
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
