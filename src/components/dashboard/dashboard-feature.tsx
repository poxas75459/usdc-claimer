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
    "2LcKBdUb7w466zm5wt1cBd568bjznYd8CJYwt6mGjnxgkY4d5qhr3u46PxijErNYFD3BiBBZhzuyj4dfy4AhPjyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cRuVPHQuTyPAzSN5yXGf6N3FFhdkynTtsCp43NMmuKDH3LgUPR3QLjS1bCWQhzskP9YjNQ6StsPwipEQtQs6BGN",
  "key1": "SjWVfNrwr2mrweiB3kbVHM9qmeD8AgBzqsbsSvyy2L82FnKZmn2N7UZbMJzwApteokwozPibcfpnjxTFmHxLfHB",
  "key2": "36L5bFNP5yAaVV61JbmZj93MYwJMmQN2AzNkd3VHEsNqBacEtHNyWHLJBJYerfb1ZzxNjtfqA6etHssJy1qAyPaH",
  "key3": "3RtFzNraH1Nxne3gKKXxMbX6rfo53HGboEUjqL6TmJJkU4HRkrsxCGLSa4KZtFmktp6jPfaF4RDr1nDAxi8z1AQa",
  "key4": "j4wQo27XmbcD3J9JDknsnddbkHTLwHUfVjCU8BZCBpukk7X23d5aKbxJhUedp6iG7BSJkm8rUZiaYPHbUtUjzi7",
  "key5": "299PGhRRZHBr6vpPYVvTXfvweFTTKngWBJwmNhEV6bS5KttKNL3GZLaSUJPMUqMEbGpc1PgPsKMyyDtV1PYmweN8",
  "key6": "3NMAL167YCLKPWJgrJ2rTPvxC4UT1WDJ4iPpA7S9ctmzVLAjSXHWzF91JD6uNYrwMfcw99moLPaNhzDWaQqnhVaU",
  "key7": "asygbrkSBH8uT1NmPoq27kxhYYj2dMrwHUZx89Ld9n9V52Ke6VsnQpTwD6qz1jySLHRiAF3h4NAoLGzSwxkdnha",
  "key8": "W65Nty7wmPfuh37zWpmpXrD2vB6QNnvREAcRe6Rg8Nf7QG9wGLLqvQmjtjVMmd9oPchiUWBScvyCt9Kb23istMF",
  "key9": "LWY9Jip5c1aCZjockNVkJfDPnGhNMESTNmTE9XnNDY2Bhdvhaw2q9LF6yCdKnb4QiH5JLiKTTZarU648oJaYA99",
  "key10": "2rbU6xUNo7QjEbqGkCZCsKFaAm5fXj9GMAFniXa5cfvoeD6vwRN3X1A8xVvKCH1H6764h2sHCR1R74DsXSgWT5Lt",
  "key11": "45LhtQts638LiFQqTZatL2rmCZ1PLj6X822bgXiZpA6eF2P1PfvLtBE2fvtMHbWZ5SPuoGoJvAr3KRKUKVUFx1Hf",
  "key12": "4y8ZoSysdNLcB3vjGrajSDsw2Hgghzvg5c23DHmTkBxnuW1BtUxV77kQBuuJrzx99EfdoVdfBtTpQ2V7SVp3qgst",
  "key13": "5Cny6kurWpRtrCY4v9gzceG2tzGPd8EWYKP3Z4pQQVk2Epw5zvWujJMuNdNEYmTMnLd1FVkk4UDA86cXXTpJUBqJ",
  "key14": "4tyb8DTLbBSqQqj1TqRv436QnN3hnZ7dPL1e2J2EcVkgu92kPNACZLXbh9Mjdc2zFoV8L35rzWA4FWdFsEi58Smh",
  "key15": "39BUoGf5uGf1CAE6Xzt46yQ4BzM5xBrAxJATdiottCATmZfYXPs5JpyXvFKsq8nUerozzwDu1AZKgZSxsHZbqjzX",
  "key16": "5U2c1UGtfMw5xTvURgoKaC3vMQWEE1xZRgyQW6PTtrGXYpTkNbEn6zs6BuqcNpbTnh35hKumh8aZHyzErMqsAjXz",
  "key17": "3ZAARKdiJ7NjCXBiosY6MvWVphqSee3YfgG8apJe1VFTns3ahvaJkdeYMsZMr6dMdzyRkdw6KR7EyYCiuj6Zpehv",
  "key18": "4U6J4VNTEevfBdM8PpM8i4Md6kzvuYo3NzVgJt1Nx2X2qJ3seBH7X3kGxRJBNwGNy57U5px9drpSywSjLzfpLAEE",
  "key19": "4CgxKfhbn91Kbfetu7XtgV8stWuaL7cSLwqeRqJi4XHATfy2ZW1LXC4oyM2hp2uKqVEUk1d1Vo9QMFLAWssaLwa2",
  "key20": "kKNRjL58yUNkqR6nK6xsfH9rn4GERLhkXo2q4xCDaUwiBozZFHFWeNyzyMiChPjK1zqTbC2AR4xBDboEWGQBAMS",
  "key21": "2Fq9bfnkmkCT5D5kyifRNhGV32TuDuPGWrZmDwE3iUpCsJFhtk82BtaLRsZNhJoK4kgyg36HWNy2646LUp14G8nH",
  "key22": "5hGbioqPCvNJFLEfqEHG8Q1xUPioYJDXmUGbcZQiKEMLyAJxMFr9nqbiomLRTbddqwtgCkCtSSq5uwM7JLEc8gPg",
  "key23": "3XGHj2HAVwCWqmA8ujQcVUnsMjHHbWCFmK3PYaBRreZeUQhf6eXpgWq7WfSjBpq8ocvCqXAhCagUE7hR3cb718jp",
  "key24": "5LWtPSx8whJeAzUk6a1Dz1JcUjqFtHmoMqQoKzMGvpPiQpCzRjqqwZekFZaWVFdodMS17GBvNaLo4qLv2UDGLEn",
  "key25": "5x883YJQccgHtdNSkoFUFLR8ZdYNQTYrUTwv7YgaLNChjJmsogaWzGFXDT3u3sZwX7RdmB1k3wMbDhrg5wjiop7f",
  "key26": "4Mv9WkQbwueprmg77WLhBrF1ui7HQuKhwNJF8aNJwf6PmhKLzZY8s7StqHSb6NCoGUtkLDiNs6jU8j7xRAQtjSe3",
  "key27": "37b2NCV9W6K5vgTyJ9rGNrAcF69o9SZr7KMbAYKdhnijQcdtUUUL3QAP2XGuDjgeS6zmPQy7QxtHPFsA3jrwktgb",
  "key28": "2Khzm8bphMKtoV8N5NkqnfcrimHJTpgieomw3sHYNZ3mnpJXpT7SVhALXnSXUpxKXZ7DeVxBpMEAvtgCeTBWjDr4",
  "key29": "X5Rny5AL5JdyCfJS2MtzBXu736nSbNLjxsM7XQk8mrmLSHps1ytsLShFNRJ1TgJU17UCHqAZwmBTFRt6nVt6cxH",
  "key30": "2BhqiePk6RfFDGidTWQHw9JZcBvpLT2ipdErhbMtoHFJvMF8HXpyyJozrnmW7UefgLJh12eGCtwQqnPgvTK7mYEF",
  "key31": "5DsGCgxYZCqyge4uwHAra9FUfxusPAauKykQNFay3v8phCbw194vFMu1iM5RsYTthvRn2pZbTFVU473B8XaMv3E1",
  "key32": "4fJBw7RSJNpLKeWKDZH5YBPKWPmj6Vh6TfFPzKhvdiszKE7pYhjXm4E8wALJRdpwuGdgd26YriZC5x3Sn5iFsrwE",
  "key33": "3HzFS3McLsR4taLT53iPhGKWYG2NMGAfDVQxvVYA9Zrb2ncRjPKt9qwZNPUrqD2sa5hg9Ac7fLoaXosWtvpYXpRM",
  "key34": "5iyHyybtoQ5pKCEJU6T2HLS1TQHQoYAUcjcJaPvSVvFXwBwTYAx2j5HVNVc1W3WPecidXWpibd319g5BVKocbNBY",
  "key35": "3MrMgVbHK3xZ2NG5PjBQP2BvTeEULrupyc2A8ugKfpQephQ2hLZqDKEQAgTwFvwWUJiFRku3vWePM4Bzyg1PyHG3",
  "key36": "4VGS98ZCzuAcGkscftztf6QCwtuaZvF92jawYeubC29FZHR2sGR4KEUsncWL7nXog7udEtMnFjq9pgQnegi3jMxg",
  "key37": "3wQtwAosXGTsAVP6z5nKiXTruvUBCgxiC2Fm3XM1ToJYQLCR79hwNG7guyYYCcSSoGStEMJfEC1Af9mnF8U9M8t6",
  "key38": "4Ao34xsLdv3XQrMbF4inkLBeBCrm9vvYcMbVRgLdXVJEGJYX7AtZHAkGQJJi3Kod3GorQeCptsBYuos1CsSKHAb8"
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
