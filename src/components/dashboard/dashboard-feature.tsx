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
    "3QeYXWCsdCPo9fptj8jRFpbHshDoZVLzV7YBiFLotkHoBcyuj3c9HEbDz188CeaVtNyzuTqYasqQw8zVqgx8xw86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53CidW1rqjopdvQNNdbTEuVmEDomAv473wSnkJAy1rfN8iQourfpU4p6hvQruPFTfajqjLXEbaFKnBVB6yMpe64t",
  "key1": "3BAsF9cQtAXQNHhXQxLmVM6968Eo1eia5LuRhi3pkLrnoFKbqerrSWY5cc1FCvB9aRsV3CetChM4whdVuada7LoR",
  "key2": "2Abr6xGitj5E1Pcph4LuZJPcWd8goD9uuHwwmxMEEYMnALCArtbkf6AvESif6GbAfyq2JQbWf2F7MdwgzuguERqJ",
  "key3": "4KndYzPwC4m3ATDxJuM9gYH3nCkZtzbysHMoyFe8Kp95L8b5rJ2AX8Z2nGy8EQS9LGcwGz5GihvZyMTNUrq7ZWf5",
  "key4": "2o86Wx3RyRZGYkRrQv38DzyonLr8Xqnr6ivfAfE1HB64dLg5wLqV6jrBBLrjB7wWvDJCNSXaWtWHnfPnqbq3qifu",
  "key5": "4pWf7KuLChzVcLNQLQaBfoqdZUjZiqAHEacG3cLXErr2H1d5TjMe9vVzNvEpLJJ3DabJ7FDZaS5TjDcf56N8RG9w",
  "key6": "3WAwqZngqv8SnVgmdtNVCWTQAYTMasd4SU7daNtqqXgHu7mpfHuEAyicx8P2sKm9peFbzgLWLqDKgfrBsHW2UX4h",
  "key7": "5KppTLXBMuQfYfrHLmiHmhU5kujqsdimp6AuyzNFeMxstQmhQXyyvkXqHchNSyRTH9dn4t1a7pBgvWM2PR22pECm",
  "key8": "2s1m1k8G7ZgJTg9nRS8P5aafyr5uFufDwzB6trEfmGn3G2iNxG9y3C992F47BMJVFv1HU2n7jCKxqGxapcE9ZvgR",
  "key9": "35U5mMTM1dFsh2Kose5N9wiD38iAGECybuj8SRKvMnbCRoCaZdTnbhdhn8QgwyziHhVkhKBAkpLV1LgHqoMjABCW",
  "key10": "2UPBa2cno6W4uogihXhUPC4UVwLSnuxT3ngMEPe8nhstHWPPZLjf4zMVobgrd9AcpKU4ox1R5PVcAscB2SsCtYzr",
  "key11": "BV7CsZpEMpsBdiXHgYp3fhpEYKgckzyo6B6XtYHTauJRdJP8yVWNPXMVM6npQkbZViBoz31gLVCKAUf1uDXXZbq",
  "key12": "3PLDNdLB63vEnzHEbzGZ3naHuUUm6tYcBAqnWB8PkAP57kC65dVgHK7RR66WrWLYTc26NiAT8NhHih2CBiNja56R",
  "key13": "3SuVbMsWNJDEnHcekuV5X82E25cLkNFxbZhmTotrMWabbTGtUM27ykci2kErgDAP1o1aAALTRd3wNpyQufN8bwc9",
  "key14": "fz8e4deV1rpmh25TGhZSyYEkuAgvppRKftvSNaSnaV1Aoe9HG95oKYHF9cLKx1AFsUUxMb6Xaj3GSftapGPgsD7",
  "key15": "FTz83G52DWBJH9youc1Dfc1i9CuR6Xpymc4K7zpf1ADYVo48NM4kNqNF56NTRw4W9NBUDqXwSdNiP6KSZQkbVpH",
  "key16": "3EaMKoZtpK3Z1sbbSYWuB7e5NhEg5EuEEbqEDVfQG7EFvayeBpA6qM5Z1izdC4vm3nmFa1kmvxiDP6Ux8Qk8YY6q",
  "key17": "3qAoN2TSs9HNKwL5G5gV9vktVN8BW33BKF9NCXxUuUQRpjUKAhXXYSFUxpcbKcHgyg26pRYDsv1YdacV25u2am4Z",
  "key18": "Jn7gRu8t7GTudPvkGmKFDhtkegbK36CozfTCN1RyAVbyhEw8RTwnXtvaEnJAvxvAWX8fs6b45nuXiceZbdp6XCP",
  "key19": "5YiPjbDxe9RBpWzse4rnmXhgFeFbqLiywxNbMtkwT2KkKm45iFNCrUEx6bhM3Y467V7h1fRhdshwpwrizfYQfAbF",
  "key20": "3tg5RHuV2jKtP3gdC9eAUeDfe5Zyo9qrbrZYHGkbrqAqcYvF8UJphg6DBCj5rYbsZj69xPnBcjFgwFhi9fPkDLm5",
  "key21": "35vxsafLn1gYLY93SwLrSQiddyRaQXA3dpby9oVw4zXNLPgvoFztPLA5sSNNiSRPVroTCcQVzmRypYMJwu2VVKXc",
  "key22": "4kLWKKe1JkcfyfU3EufVJEaHgrE9mUTLmX4EcYejR9at9qy8nDQPgYLjvcdASJwY2y1mUUVCsvsmYFGoTsdm6wsJ",
  "key23": "pj6NE8Xepyn9c7CX1jAKZ9nXxFPTb2M7xmd7zdrpHcUkvKnkYZjja7zZxBbfPKsToRKAKRUdeRxjxaPyeNjVSHR",
  "key24": "2CBDC6RqRkXhsSRSH4VhHs3emHu8xPvqzwEaJQ8wWqQqD8wBjKmVZCptDwmN9muDeZ6aggxTeA3QjMF2LWDdrdF5",
  "key25": "FG1f8is384fms5xJxtgoDm3vCtenwKwaR8fnQLMQeRRjLzxcQa3NKLKS9DGq9SEXyumicC58Pmoodw2w3NLon1X",
  "key26": "LR7gT7DNS2sapX8C16xt7edjAZcSP1hwCCLM83pV8PaK7ScngX1BibntfU1GUActaY2iByRySYZfWBprmep85Yg",
  "key27": "3ywM6TLbtYMbrzGLDaax6NQSFXogsGdy3G3x41uu69DA3wbLNR2sAMz425cCsXzt4YVLeM6gsJnYsX5tke4YhkzA",
  "key28": "3R7VsgSJ6FvLh8X9CdvJAqzuihjSYwZEqsDLoNKs4gLywrZTuXHFfTQ2Q4w5NqJrd3ZzoDunRYWQy9eVkTXRDE2p",
  "key29": "5emAZUoUe89qtssL3B7yMooHAgGLQXo1umBxV8snG3ke2KP3E7a1suJayr1ES2mbdG2Bas3m1SfXtXbZQF7F5CcH",
  "key30": "5ZujpRJJ6kY55B8ndhcVsi8ztrNjo1z3CJz6G6sKsRU4w3vV6RMv2NDGT3ThoLW2SCfBnGF6W5U3FcUKqTVbKVTs",
  "key31": "4r2dW8Ky7z5fZbJboNNCmLwcbN8HtriX7MCMKAcjZQGDb9vQUjYcTHdGV3Yv5He6njsBXhDn5D1AtTZU1ZLvBSd1",
  "key32": "34vC965e8QQF55Pip1SRzm8fgyBn95o2GaafFNkbYPs2FgZCeiPBM28iRGndRM5azvGLZpcRnjtzbEbe3dKmLKVg",
  "key33": "42krnrzesSmZhLZz7NaBATqQzUyiwJeQxeuTRMtoJUVkYFmNxDsSC5ismBxZzrx7JwXjH5mErGfayNWyNJwjhgrv",
  "key34": "4qHFAo3uttNpnXAMQMn7fygipLU3sPB7mayKuu6RsB4LVwWkKc9vyvshXGgy5G7B5XjLTfwYmrxZbH7oXCBqnNYc",
  "key35": "5f4UN78JpC5EsvMyfLapzFXaS4MaFRFXgLPG8wcrGXDD58GBkVr1EoTjcdi1MSvsHApPW5JR9HVj54oTbKAHHvJv",
  "key36": "2bdSXj9rjkjRtnp6BkvvYtagiQTwk1EzUeH5soCscQBrP1fkqVPU5AYqjVguonYyfHwccRQV1c7hVif9C5qSR582",
  "key37": "56p2aFPruapmNrHim2Q2Dyeco7NaoqtrDceJyWMU78gD5swu8JRNvFJzHzxcn9tyy7PzqeYfXvdg8Eoxa1SMn6NC"
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
