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
    "3VqNYE1eBuqkBc7TWJah5upVXcaiXjc6ft4c83ncJkCL4seag7erWhnYWXnH5UWU3sAkwKppR3eyoCoVQbYBNufV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZeSYqKsJWmkkpMHiepmWju57QKepfz6ZrJkbQeAaSjoYtuvB3jj3PjjcAL3VWS7zMLoynJKhaK9yoD7UmTQfZh",
  "key1": "4bkfEGaZrgdHaifZCGBDhceFwk5sDrFpCSfRarZq9ZCSnWsPTZdzi3B8XMexy9FWgfdGNbJ2r3Xqq3U7WzoeX49A",
  "key2": "2mkeRwdVBLSYHad3CdpFfjTT5t1P2q3Dn5NzhgMKw8gZ5aNKrDJ27AQbXE58Qd6p8NSyaRvKxja5iQgNzodmb1CN",
  "key3": "2HDB3sR7NWZBZHWFBuA7eDcebqb9m3H4bjFDVBMcZcpfVuM3n3WUjG7PFppCzbAY5pJf3xdaPUjxVLp4onLJrhwV",
  "key4": "2AMaJBPMADp4aPGtNhB1BjEqRuhQvysC7ZGwQggeVPLXkJDMERXY2jwT9FyiRZAQt4GUaM8WXpNvggPbDPg2bWZ6",
  "key5": "gTqjrnAqnHhamkQHBUdV6VwoFdmWAmuP7tpCXQbPCuvudUok3LoYTeGH9oUKdLMsvqsqc44nTguz18sfv9awLT2",
  "key6": "3JbtSuw4svTCfivAQsStw2xmjWdXqktrogEYBfPQg5zAZfMERPNmtneCRSma6fZso79xNMmqAnhjeMW7vhwGKMAs",
  "key7": "5JiBAgh6gW36JgiEJUk7nrrk9Gkoe6gwAyf84h5uuzkf7TyZruZCxCEgy1HPUGXgnvNAGWYRtADn95na5HFnsziP",
  "key8": "32tKhD6orYRi5P7DDw8uwctdeXKBKEYu39vS2DtDMSiuJQEDjMhQHgDJF1jz2djUpCV7iPxAJYEituRkRfRDtvwn",
  "key9": "2tWgFvwvFh3CgrbDUCLizVTz36pQtaj9i1N745oaJeHBn5o12N8iwAHHG35hfo3oZjHKaR2PJ8mbfxrNFUqZLMZu",
  "key10": "29J7wG5Tp2hPvkXwgaXu57jQJmA9XsRUwo9PfJ9iJCQWhXDeLot1sYx1B8NGscZwhMCoUN8zv74Acvhv5BPwBfJv",
  "key11": "22Qzpp4Govno1kGWwF9p6to7qyg6bBTTVyA15KmrEk5vkZq65A5maDzi852JqhV2ZG3WGW5gxencdaWgKk8RMGK3",
  "key12": "48qbDjfiVZKcAMQSUGpUQ6DuT6XrBZvpMkybb94MRo2W5onzXcsRNGHmfQdnkvL7WUdRwx33hzrnCTycjYq5Rfps",
  "key13": "3gtxgRoAadBhchoR6MwFmu39swf21T68DiSwddEyzNktCvwHyrG4HBp4uMC7ozJxD8WQgmKD357B3qVACFVCuxm6",
  "key14": "2AtYhoyW2JTUFHYGNUjayiJW6FigZzErX7HWcFYkM43H3atmeC478SdUYvmaNvMSW7Hk9RFBP27fGzwJ4tRS1CVB",
  "key15": "2nzDfCcWcL3hgDXG91gPnnEFte6gUAcxG5KVwu79qw1E32mmPgCTJ8EaqWD8U8LEdAWku4PK6oUWWzaenTHTKfji",
  "key16": "5YXBrq4fikDXekFzMsYkd1gmXY57CKWUBtmbF8Jh9dqqyuqQkXMUtQqm7jZfEeMSFnCJjpFUYKYpFk27HhqUYJu3",
  "key17": "2k4FQbhGt411wNMv8Xz9TFaXN8nZJRn5MZcndainPbL4j1RcF9uWzPGYn6MVsw7aJn64WobzrHeMbzTzSzAND9Zs",
  "key18": "3GnyXW5gYF8srHxwGWcHP6EWYhkUcinoew5HLxaQCFHeJyE8ZdUkPEoMZRVYPypTTjaYBbM39cBvAP4MJvsDGsKD",
  "key19": "24BEewpbvC5GTxr2XBcPxGuoFd57VULEG6964Q1K8nLm7HXYBQrujf73SFMQXnNtqEZmHCCaGHmSy2CRrTXM9p46",
  "key20": "3f7mxyNr4i1uQWgykfdpZxn9W4A87VUgHiVExDBzfw83NHzSNZUPfHYGnJzSPM77hAcuG67bycP96pPcvnKcEgU",
  "key21": "4Q8919ohKmDKjwvrgqXzajaoY2ic4pADyKLFGFNdrszN8pbkJug7jTKoEg6xnQJPVphCM22jWuBkxiHz3Df9WNYE",
  "key22": "4BmA4psJP9n6owSqywfybeRWNzCcMe1utqATjJ3E5zwraZFvCZDvipnymoFMrZicTkakM3LSLKQPwwe6CyPfABTE",
  "key23": "eGA9415a7pHPFqVmJ1iMGwvekivNL9Ms7arDSf3z2TD3R1afty7hZwYVZtp7EkvEuUdByWoUkGsdyr3yqvbHvB8",
  "key24": "338hxUe6ToUEhK4rcvdfQicedKi7dgrUBjzE6ADjtdPT6GEXzyd7FYPBuyMYaE3R2vrYPWVFXxS5j7ELaAkso9xf",
  "key25": "2fhi83qXd5LF4f6S6cf6NaFY8xuVVrmpSrGdtxBKpwYubzfLXRdt43S3V1dgMw9b2pTd3QvFKcM1CErDPdyJ4EXU",
  "key26": "2FgxiFZcXdcgwuHTXvDkbmieK1EuJ2nRMQvxVn56r8317uMvF3hboKLLakNFo2BWUpGLXtFhxnnDcgYSUSTN2XyF",
  "key27": "5C3pFiiEPpz7PBbduwf8FBDWxdpmpoKS6mRrVSSryURq3WDMWMJyFz5rne28gQ5reteuqtNjYahaMLwUnpBtUjts",
  "key28": "4yFhibMhpbTZJUVnXwcm2T31cbGgB3tRcjPYEF9sktN2HMJkuNbNydGKF6FCypRVL8TeyCbzVTvBxrUSR4kNGZe9",
  "key29": "7Dr39o781Qd3C9S8CnLYzFPkoNqXKPEaYBtvujzUttu4Ytu9cpH29YKGWSJ44sFUDJrCoNTfZa9LGU3ZZhGsqLH",
  "key30": "28Xcj7Wkpvc7uE21PBBxJQbo3qfimJdzVcZZdyX5WnjWUUL6q87VrRjeStxUAKWNsGdMq2xMpoem1btH1oWGXGwh",
  "key31": "3Pzz3LimRFuo63vpamH4nLvj1EWuFjtt6XrYMAxaGNk5ZMwtr3314DxsdvLUf2RMYXzNbqi9ep4BcyhhYx5Zkb9q",
  "key32": "3bWMd2EJoM729sZW6fYaeJjsy7i558HAkBsyfegTzsMhQm1wnbn58WJABSmvXCWvmf4q6vgKw6rVw3opu7W32CqX",
  "key33": "duYV9DeH7bLUcG5AzXCtVpkh62wamhVVdjiKLTN1aKioFST1G2S4rSsSZi5Psp3mZ3a9S4tqKtS21BkTdnboUz9"
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
