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
    "4vXcekB1C8kjnE3qA4nEzaDtMQzUaNPJ1HBQwgUoDRchwGnknQU6sYzfsX6XxEc98KVYbaeH24Xmz8ykCV5Emx5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DpsPVRRGzuBhkdzNQPuHqHaeFS4qbkvvSBnVFcWBPdJi7WnNMh15MarKomfnNCF2dnuT5eL3vsuHhah1K86hzK2",
  "key1": "5YKZDoDdUYfcjp9r4ZDU7aFzfgbrxVQjCteS5CJ221YLPhDMNrgykFZrWU8JDc5fwFnN97jGB3QKk2qRSNGzYoe4",
  "key2": "xmdEAb9fGWBc499YAchcxaxjpfWFHVNmShatK4Wbz4m1JSW4A63kkobdmZszCWx1Ka9eTC5YZ4w4zXX2LphUxxy",
  "key3": "3rwt7UYXMiB9ffC1rzLEbjnhwgHDhLyoaoNXvLz7SvdnsUje3meC57FbTsD6pGzFGjsrr1vSN7tupf2XBGTWC7Tx",
  "key4": "4FKwX2x5X7289g5f7ySTeMbXAavGKFzUwgFXA6pq8nwEa6aCcxVexiMo4P2FkWWoAwbSej3epsy8nZ3uzLx2HJtk",
  "key5": "5HHXq5RDHR5aNiZWzugoonFpfmbo8Fgkwsyp5dHUFsHhN2S8Dmmweqa6QcoFrxpsjUZtPyrH1F2JJAeq4Jd6Qhvf",
  "key6": "2PmzwWXm4a1dCJRnAmWyHhZ3fv1MdnbBsreGxECm4dYiXuitRNnrUR6wjzyGD5ehgtcwGxzexyPNFzC9NxhM28ys",
  "key7": "cdMXPtpRrRZs4VgdU4SyfZ5ndLKxTq9P4Kmt71tRxcn7L6tv8c9FVTsEhbkjAeb9uZE3K6v7jM7RsK6gBdVx3gx",
  "key8": "4AkN5NSrKz78WdgYgdEu9DYSnSXWde7TgY9Y3nKLdg9HMNVa8m1Y4362kTsJpyobJx4RN2SCRfyWWHsJTG7GfcYk",
  "key9": "67iXi6A9TqNMgXUcLtF4MtqfTqs3UJjvwjVwcM9BrVn5udnmkn386nKv8nAuCHKgZ7bggHBtuPb2aKhxSAsKTPL8",
  "key10": "4b7q86KG9uE6GKUX8MRtrWLUL4xnbQuNUpKiCRJB8n5Hse19UiGBEjuQT7i4c7VcZZcwsbze7iPRdZTw34cfm8Xd",
  "key11": "5NPXKUgUmPce2wXeFzxEVqzAJK4ToN7njignVLyVeog7royHW1XZcaQWHFPpTjoDFRgNUnyKGCf7tb2zspLnptVk",
  "key12": "5JouNpS5Hb9Q8aPGR7ZHQTXk9JVHJbK9iESeDEYsy3aGejYU2ygMECtYEqzHBxxq1GNumaGi3UZMLzF2e89tfZHQ",
  "key13": "2yYtFyCP5fokujMLL9n9mWE8maCJ3BcCEJW4cwmUMM5uPYxGepHh2pwCxKnRECFFYY22QH57xxDs4P6etHkYNhqE",
  "key14": "GZHQ6aom95ssSCp8NxRuG1gcL8qYz617ocnm234Eoto5WjAnw1Xhrgg4y5Vu4pqDWTsu9UC8Hxs9yJBGQPtk2uC",
  "key15": "5WN2i61SVgdGHrFU1XuP6aXQZo3P1T7xiLhBHV7MtuhnyfXipSSxPYpDNe9N9X4hgwM6aaSXnEQ8m4gKgrFyJeAQ",
  "key16": "2xpLjeHSRN9LpDLaiq2Fi5SXMbATnozZVppCekAg9XxiZeKkXbhTpzWm8hBETfGK6WsznJVSh9j72T4R9TWjPm8o",
  "key17": "38QyeWLrGMsiYBnzSXJWnnbEXYEJVzCpTa4ujXQgC5nDXmziays4cDgRXKMhPBwcofjQLLkmLM1qazkCW7ouiN6Y",
  "key18": "4wpWFkwwLEZjqxBgVcvZZyrsFMbZC8L9SyJyZZm6j85dde4QCw6uy83NAXgtmnxEZq7DfrgSoFQvzyYF5AsDJ5Hs",
  "key19": "4V7XnZ1iP9C9Xv8gcHb6oH162mLTJHXK3qmpcjDbTamPaB2G4HYtj7ELnJoNyUr6EPBSt4acE4kAFmSfZF7xTYkr",
  "key20": "2y537XBfbQpfA2t7bsFtMwDL3Eut4RciP264Ncfv1BSNS9PDdU61HkyCTGd2Jf8bga4AXGrqpNocHxRLqmgt5c2A",
  "key21": "2sYwu4NG238syEKwaVT7ZPdgH1yyCMn53qF2CueUGCykhq1PQvK9bvfqQgLZMZTfPMQigPmT4wyYCF6sWo23dtcj",
  "key22": "54h1Hgi2K1jiSwV34H4KgZpTNNQeKPm6dGi7NGF7TnF7qBYdTFQerXP6GtvdJhEJH51udG2dj6Z2xtwQdkQYzbRZ",
  "key23": "Fe3QhC8A3ggWnuBgonTVXtWAqHwXMeQtkany7wnjPHyh9R5JxZm7QvV4abkL6cHuwcGUts2UhG88TwKogTPyaU5",
  "key24": "61eF7DJqV6YjFKCvqWSZbgdUDvAjPrYxsnua2q5k9CmosRyowpanqQ4q32dvzBvKZhB4AoqyNsVfqtqatZhPQG5V",
  "key25": "5zKyEBF5yfKSFnDHHy9D1m15kiSgtfybsMV7wscAdfLm9dfJkLxrdYWNKytzAfs4zkzNi5dP4RFbpubwXfGdA691",
  "key26": "5CW5SBZ29BkBfM69JJr47j5FMFR1YnxTWLRhbDrBZn9EFapXZ8Hc873q8ZSzuJKztjBHR88ujq4B7PTMKVhnZkg9",
  "key27": "5AA4sptiv1UVTcJbRjRcZ9mkSB8KMShUZ3ppauB7WwnNbWMRyPE8vqtvx3d8ty9fLYHXPd6xthXpVRAZTdbTzmM",
  "key28": "HkKHvN2FA7Zx9zPTKbwunNV5m7QpcHHbq5NPcs4HyXejTGfLH8cVkHgf1EkdiW5NsHem5wMBtYbBZySiVz3rQRd",
  "key29": "3tBwJeoD3mjNp1pqsUKTdWFnsH6YznQpEULhGs1p6TgWSQEzDVNSLhNUDyiQbcefFRScSx1asBGQ7SKiSKo88dM8",
  "key30": "55mcBg6YnyEDXNjHPs94j1vWrtoNh7BSZLDtqGX9k2mFwo9soc4SgpW97w1T4vcNK6aXYj2z335L3oVgpm5DfkxB",
  "key31": "53iBZpGrQvKFRiVP4e1LKBQ9aV1sVDa2o3N65RPvT71AYuDNacUwoYFQZDuGnJcZG2VXCBuyb8BieukyqxrdXA1U",
  "key32": "37TDGthXvrqBobC5cf3W7W3pAgfYi4sKkyV1X1VfvEqynwfvHFvXL8Gbwg4PAFpeguYF2yFg7cEp3VpzLx722mof",
  "key33": "o2UWNfW96UuHheJsRRtDVFzcGRm69HSVjXRtbmQfrahjDbgBwJtA6i4kgicYZMJC8SidCMdNd6VFiZsURRYuYQT",
  "key34": "5MPyiCUQvQanwUgN3zzU2dQpUMTHHL9jPd3KBcvMt5XyYFhdL8518msEMo9VV37ANo9dgSA3DCwLWDTKHqrcCLg9",
  "key35": "5nsH2phS7VKLTraAziCXKAo4hY83KhDJ8KgZZmq8cPRrWRuDJQvHw9ZFiqaddLZ5Petrt8cv1sVzswiehgVe3CZD",
  "key36": "3v79dn2zu2Tn16tKfyJaBtyNP9uqhP6xTHwncSj8UHyvPFmbJLmp9nhLoLaoWXkudtscS1HEQpCzwm15Ys7VFdJB",
  "key37": "RNY91c3kNjqwWsWjk84BUmrrcmVwLjMZgiCDEpQPgPPzPSzUsccs6DExX5Ph6xtNCz1WQDXwMxt9MbW5pNt5YHE",
  "key38": "3CpB7AAqznS1kvPSQX3cNYHz5whS2F84SP6ZUVC3Cd9rMj4KnhfE3eTbomF6zUri53P8ZRxLKKahN5Dh956ULkug",
  "key39": "2uoVwYWbTVWTwoxsqBMJTjvQkzb1TyRunFRLfdXAF54W8hQPTLf5QQu4kVmvdMchH5bWQbQhyHNxqQdTxAkWR1oo",
  "key40": "3V1Wist4Gu1u4WC7Pm1dUc1xPexVeG3GUFJ5M2QbbuhioDifvUX2qEaZybmv2WibJf4BkY3HdibEm3AuJVyvDKKx",
  "key41": "EXRb3WVTDJZEyd3gkXDprFWbXyAfAhfECT95FXKFzFFvsQktkPYhPC3P1vhJToY8Kv3e24yCwsdsz9k9uPTRfw6",
  "key42": "2Hgxw9iuDJAB3675naxizjnMQZmsQA2fPnebZBVpp6s4AAfP6zXo6zBia6t8rbzBG4Gykniz7SayzbVbzQnnKaxr",
  "key43": "7tFVGdvmNJ9ecVMJdRVyLUUcjgV1uqdSKMTKAL5N5TUzNwtre1pzyejw74EJtVAFMR6EDCTw8A5e3c1x3BrHU2o",
  "key44": "42kggpsHF8mrTDzs3QfSxsoXg14vrVn9UhDMMLyuvC5cydMvx4nDAjNYqeVY6iU6HstdhSsPq6FzWqXevNEzmBTr",
  "key45": "2orduhpK143PnjooGmAh2sjRhRxowdaAfEDiVPavsGuVznj9pJLKdqtw8JnmkNbhKAoFnA5tkcoQUtTAr4QBTcHf",
  "key46": "416zZvnBxxgzjFtRiogJQKS5nH6YaKjJ7njbjAGoUbtULQd2EpCJw4siwNeqS33p31z3Pm4PgHkEP595qqAT5E2X",
  "key47": "P5uCPfMMFaLioJZm7Mz2rF9YuDKRsaAWxHNTEcMgXvVH14aVCqMSwGjKkftmVY3qCb4Wgva8S4KndxU3c4Yvt3c",
  "key48": "61s5xeo8DdX1Vg2if2SYzdxFwfQY9bYDfSDH3auqk2g3PQVeFNxYi2rLoii8CrudfJEWTpq5EgmZQ2DRefJMqh3K"
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
