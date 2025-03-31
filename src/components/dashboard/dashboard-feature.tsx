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
    "42fGTJ2cWE3Hyvo3EYSJAyNL5eQE6D92P7e9yAehsKdScAnmGgZDaqn8re5SYjYKMXypgtLfDbNy3csAmJTgKn1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52J7g2Nd571VYR1uuNiVqCDKxpP1Be2a3B1ihSF4rELQPjX6ig5na4kVFpzqHifmFxcAe1KRE63FnXrYRXGu4oZd",
  "key1": "2oum4oXwjkeP6uyws91TPKojuBK3VhpgsVyjPBe3Tjp8mEDmoGHUeT8Zi8CWeYU7yH3nJDiYabARvN75fxw7btsr",
  "key2": "4uYMsd22wgzXPqPf1CFmpE9vF9Z3z1qq4C2yLvuhhxCBTbrwyktCqQTxPQLMVZw9Ep1Ze2pDvLP38n7jwm15NUF1",
  "key3": "2jFPjE2FpKQJACqyq6KdRbFWGyv3Uw6Y7sZYzVwbEqjCJD1aumREw7mrRUS7tpYU1a5L6Geaa5Fc4YbXN8hocyQ8",
  "key4": "4BMio2pQFMgFaE845tH1fcjYXi4MWCokjdh1Faj72pCx98dyBXfc7vdRw76SAeV7tTqfz6bG9P9XVD8vrM66514H",
  "key5": "4JhA238wsdH5B84PBo89GAJgbR3dT3hVfvWotVLE43YY5NjbvY5DAkPNqR4SbK9wS2MbgsjJAu1AiLUFDi1G62VC",
  "key6": "XwRVQdh9s2jEsZtf1VXCbeFKuJSP7qgx57RcS5ks47GoYShxRdUHL4jsvD1mQBRGQa7JooiRjs7Tvt1mXUqwkpM",
  "key7": "3v4aDawSqk7Aq1qtFUY74YcAKv7nxH7krcmAk7UCwgxEtyPJF7C3QtJMbfUmoPknDmi6qi8uM5zybA6bVf21ZNN7",
  "key8": "49etEkhRVSiSKZxrGvqDZmck8nX1aBeeDey1GSd8WD3StmdiU3AUsEw1anDWedpw34dhd9MbuC77GP4YEUqK1BoB",
  "key9": "26DHivCT4DH1WdcLyJCL49vKP2sWRNefGEcE28Qjv1pqnebK1mv8q9Jkz8Gf5xYt91eYCX3xPGwSEB27jtMjB7cm",
  "key10": "3TM7W67i1M35d1mE81hUpK1qvkuESZ8AG2sco5Vz3o9J4EdioHaNFzJmyDPUDEXYZ4JpWDS5xAFjiLFtbBvo1f5n",
  "key11": "3HVjrJGJJPCyrP4NaC11gLZ8hc71FELVVhjnaTXd9opbuTq3gVkEfSHhm26mJkmu78PmG9HrqG2a4JvUqpDWXtBK",
  "key12": "593VZXMeDTfjY92hjgnfVTXHeusM8LqXbBrStXiJsFW3MmcZb5wXWinAoN1eeNhzbvEmTiNwccYjoeYFPa9gsk3T",
  "key13": "3X4C7GDevLD3TGef4WjYTimPY3u4AzKFGHAdrt2jX4QAw7SMPHhuetjD1FYzMyXaeUPQb8u9kzw3TFZHQgKEtNeN",
  "key14": "5kogVqGhnJf9xLT2vW4CFFqjE8JQue9datQE8oAJBJycXs2FrXz9xjtxPC3sUJX3VhmzYwrBGUQbAEWiXh69anQy",
  "key15": "RoCPs1im3txmVNQmPEwUNhm8bjsvZtKmnszcvVDM3qybmkaS4vaENmuX2hMYyVad7FRkL5XwoG6XswhiAiv2g3G",
  "key16": "2egzYPeYWJVFqBaQqM4cQjUn6Bs8dUg9xm8L4Pauh65CCUeuWToEVdEcfMcBbH4r11E2jrqPKpZ5zNHfirn6p6Wu",
  "key17": "64QfmKY8WJwwYZL2EX7EjgmjEJAQuqmD5b2A1FsRh8M8ugdvdbvXM4wS1BDqHUBjr3wX2Uu18okoC1k7p49mynth",
  "key18": "4xCueXj8DJ9V5BTZo56NEmbmLdDUpWjhHWsvRrBEoskdiLnvWDHuNwspf1zPKRMgazJDLfdN4YSUtj73mJyxZBK3",
  "key19": "3dDxonHaj7mCHvrYuwZL6gohthjWdWQYsn6bgxkx9uD3yPvXNxJt9SgDxjc8RSNqJaxBoWsyA6iwLWFUyWQXmVx3",
  "key20": "3BdKgE9L9yzzCjjzB4A4tj6PmqLjS4z45WFFsoheatiY6hsnsGKQf3q516deYG8cvgFPiFGD418bErdwy5byRjVA",
  "key21": "3ZR1sQC9o6kqDN73VsJk8weut2bHQBFhBD2WpR35e3hH8WShfU32ZU76au7v1H69nLKUczN8vbqJdCb8QZ332kqu",
  "key22": "3pbbZxaSQGcqTeaysTGsL9SvAsaayb8kuRNCYDnEyo5KbaLPyXiRmVbW2k19gwBHZLu7vt4rHMtGMMbzrUCLWLKZ",
  "key23": "q4N6ai7XFPedkcBdMguSFM7veVyMuWV4CpTrSfffAdS66iFzmMWUb22DmrMmaQ1JQgYSR4W2mUp1STJE6NJ3cUK",
  "key24": "5a88g55i9nkRVB5ZJsVQvgcDbzJZK23WvYweHSVGxAKhioGY2Z7BnbVRyYPoipi4KYDvnzMsnb9tigNFy4vSh5VW",
  "key25": "29QDKeS7v2JXBn2t4DsRUxkhQq2axKU4gKCHsdv74FRexDULQ6pASHe2DCeLAVAVqW4kAEa6bDQv4zhrqBdgXdvL",
  "key26": "3bhMdUTPa7yVtm57GKxkG8NB2wQVxu5HAuKGEuUgWM1WB5c3KvgKBq9c3cvLjFGsjzfGtRrUss8Mpdjx1VLHVjkZ",
  "key27": "4wpFNu8pFMCyComMy4KUaZ2xEsHEPNyHVucAtWUJ4jxtrtfHz7idLTyXS57aWCRtkv7vW1aXkxEc3tY68ZJPKUvA",
  "key28": "3BnbrTy75uSkpTGiKPXxNwrqRzAgZLZwQvPDikhFK7zzpu9yyRzqcF9dERa2BQAZuQ1wgZqcHET6mmUg642MTzxj",
  "key29": "2jTfVqUVdSdCmvm7MTfwa3A9DmaqweK1KwPfKBFuQoYr8jPGUwfKYvgwdV6mBjybrN9FvmDAkp1T9WYS7Z8ufuSv",
  "key30": "2dCZEhrcbQxcXqeLc1LzuQ5Mej8MVBMUuEXzxvY4A4JVXKux9WkNcUmPJHstFYNksuYPM6WmAD7TiSuUoS3PKk1Q",
  "key31": "5JR5kRqaD5iB8vkjuK5BpM5EzkuQEY558rr3GECattCBnoNXkQqEwV7mSURrsQyXYnJzvKSXQXfbuWFe4wEFSLm3",
  "key32": "5yyYahKbFjYMdm9m3xXihSwVpD2yv4hr1xp9KGNwvMsH9nsumxTVHTv8YhToV8AFP79Ep2gfSx6BPHfc3crF5bGw",
  "key33": "iqP8xBk5UtM1LHhiRt6hTuwyq2wrUmqwFovttrZQZHnmuQAfTTfdphfLKfVRHDffU155Mz9njv32RhQPfkyDRJa",
  "key34": "4TkSRU1SEfkGZmMuJxmTZCzojrimtGRBcysY1gFqFRNSHsnmKBGniVkRkJB7mn6opD5uHonvwL1mPQMioNtrRNkA",
  "key35": "2qCrJ6TS8ew9YByb4BGRWKreXV92FiiVdcP6M7keyMECDfNHTU9jChv6ChcWuLtJyiCm2DEouuDGarsA33BCpmMC",
  "key36": "2EWw4zAdfDAxgzjctzEveGh7tHC1eEQm818XN4DYMHuimJTL63oy1viQqfTn8iKszB2uhHRJBaYnuAKMniXnxqp6",
  "key37": "L2iV6iMNjktjYuHGm9ArU7x78RQGyd1tXJ3pFfdRaPcbAhRKrJeiD7sYMJ5ihckJmfyA1oNbeVa1bEqHcfNWkT5",
  "key38": "2UdWnEj7Lz3Kkf6k5xTroJdNCxPTMoWN5uz5rg4K4yF7C3wW2AUpCQc4XArKvp3GApFMjYSUJZngkUuNAJqvAp5o",
  "key39": "2qfKpMdtxun55cgLodaFjxZUp71gs78WZK8xtqpg1fboQ3BYasS8W87RgvyREwxyn9HvFa7X2cKD3bGWGqnPe6J7",
  "key40": "2udbR8jxxuKw6jJL6hAAjisUiSUZXVZgFzBip12QxW3WGoM5ZVJbek1NbwSaSiraxNLBUxPCodgme28ysfvm4BBb",
  "key41": "2W2BuoR1U4Q9pvLn1bjHxr5wfD4fg933vSUs3omKzPqffep7RcAcjrvZ8PkUag9sCWSby9mbcJ2KmfQAHfBi2rjQ",
  "key42": "3WdZLmp35FodwB66fQ6oF5xhRbJvu9wF71AfiB4DjR4XWypxCUGGqXbyCczZgoN2xt4KcpeER8Bbb6G65HdzeoK7",
  "key43": "3MoqSiFoqpCUWTt71JxcmvGhkaGgx5Sp5ZaoeYFdLum5gJsdb4hfFcVws93JqtLXKKM3b7TtKZXYvPsC3VxaHXxa",
  "key44": "GttBQbxrSPbdJLHem5DRzWhefToNR7kziJfExW77XBTaDdBQuGX5ReBVAAdUgEDDPYYi6vTbpAX5CEmbtGdgor8"
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
