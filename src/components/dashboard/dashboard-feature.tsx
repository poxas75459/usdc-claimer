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
    "4nre8L3cQp5KS53kepBHNULWYD6yWa5MAqkp2Q4dBV83AWPWA6T3Cb3BwUzYHTBSwT64J4oVpnW8C4BjNAUVx3yd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RD3W9UcYczoiQcjpEz2Lxd56i5PGRbCDr5RY6ma8YQdCfqSJ8L8U3Yyha2JEQBWXyQQNfdqG6bGNSDw39exF9cC",
  "key1": "3YZCFuEZJu92aNpmFJFNUHziVDpc5TSim3BtKJZkFfrPW73krvSkAyDGrNhXiS6Rfq9VNt6pjsdqFBQ3TBo7arz6",
  "key2": "3hcvNjjTZ1MENuQ5jFEErPEt23nruWSdHgYqQHRghj8rpEvLb76tsL2aNYKgcNsCpBUgnaCfWWBD6gfE84unh8NL",
  "key3": "5HHHcZveGzp82HjsZrErZ3Wk9bMW96qo2PViZW1ERu2sjru55irE8mecvwRRXdFQ1BUHgfK1Wznbwgc2xxE3E683",
  "key4": "VTYqKkcwJVh9nEGkCfGy7MF32ZeD1y9RQidmSLFrZ3cgpCRC5ghT3CjSB278FCSFoGyJvcYUBh4Hz3Jy8B1hfQh",
  "key5": "2FEGV9pLytS4vxhJA4wmnjzsf5tRghV4eeapvxneHmcRaAXwHv5kJgzDWo7R3nJCv9xqeRGDBwDDHws9txEMt6bj",
  "key6": "3zdryHqw2aaweKgokK6yRrvrdXsGjSS3YmdmqGAMKznT2oPLNBDmzYHXZrQXTxUVV7trdENXfPF1893oWG7Ztkp9",
  "key7": "3x56FpxpoevyeTym9YrDv1qVCGL6zD8baLTXYDgzmDJJSAzX9Zq1F7Ab7ywcg7kMUbQysK5DvzemzTQ7DMzA4wi7",
  "key8": "3tDhKHxvd1bUoVu5Gh4Ys8rtEq2e2JX8C5NRQG33Pbj18QE6xZ5qXMbx4XdFM6roo3iRBAdDor57LMXXc2U9rQhN",
  "key9": "5j4j8WEb2AWkEAzUbigdK9XWPvP6rEf4Xn5QT3DjHD1RK2zyrfZUN9ECgDudSuFfaGCQn92ip36pZpZfjpag7Gkc",
  "key10": "3jxyTSj1VPg1shikaLjNS9FUteSEHP53JE1b6G4XQPcjEZrnnDnJhMAp3exniJGRvyp7HuVkjLJv2avSkzudXpnp",
  "key11": "5VYEn3zJQSyvTQitCK9g5Rjqw94Wp8UYrK5piz61mrnHsWmHALWnHiMhq4VS4pyN54GBH9cL7BQithzgqRUe4tRe",
  "key12": "4CtPimnoPwRNy5JPanQm3kX7QyDkEyR8hxghcuS6rZctpTHGuq3ZY7gjxzB3gGcNqAFr2Wev7JMiGNFLgCntHdYb",
  "key13": "2rtasR25ZWjQts7vYLzYgRH21QsU38WSeLn11EXPTzqz2ToRvgWjCt5KjkDm2HsiEHp2wF3hK4amJxi8G8gApjnr",
  "key14": "gA7GwtsH3XPbbTQ87g4ERq2mTrQmQ1pa42Nv19M5S5EBgsvsRba1RUey2MnxzBQuk8e3ZyT3GC3p2e7fcbCtVUT",
  "key15": "4h4KBajY2xdUga4oG1T577QomQLWv7E857QFaaq7EpbWcT1XdjfWcCYpPDCkGiGWeGBYKivky66hjeThNdZwNJYx",
  "key16": "3dsRVdQFNCrcHxkW9MPEi6343px3nCg66x3LaGTTBpBjBJkuyB32Fn1JS9N6G9hpzfmdsQghct2pGGmGdMM3RoDd",
  "key17": "5Lqab348v7EkLSwF4W7kEdExdzSNTyw14m71F1jfLw97NQM72YvKH123KmbEMcMdSvJGNjH7SgyYWoJi9om3Dg8u",
  "key18": "2EuUjJcZ8g5QhQtYLUnNqHyrVN7Fw2dxyibm7GNvTxyozkKny3fAsM68nU1Jd3Yw8eG9nCwjbHLYSqLSRkhBanM3",
  "key19": "3wwj2uBMJS6ezUBddKczjwtiKfagqv8DUhDJ1WqcN6X5mChL6etqfNnnneQcgDw3YLHXMSZFbeMzVJF1adVCqCZR",
  "key20": "nymGwum8xhGGvh5nA7oainW1ppbSaysGgtc5ZJKANHaZYSUgEVQsBWgDsMJjdJNMzijySrx8zKuQSosW5CfFjRz",
  "key21": "2qEFRd35ZHkNSwYEsdtGFG5vuFeSMVh7e1ZLYP2trh8YCKJwLJ1bHkyusvF8EUXptanvu5xpMP1b1ef5dUX5Mden",
  "key22": "4JrNN9XKjJTe6yns5KmgCDmv6MeCSRZqXdD4gB2NdxcEtWu95NxZdGDP77hiwGy3XvHo1WGPC38ZCoegXTjYrqBB",
  "key23": "yxGo9Ybd15tzM8gqxfAvzffddCz6ZKNbEQCNS9QiLwxVLgvBs4vQUqgJ1ZdgmywYHLViHTzYwe8c9ngXwDZGcpH",
  "key24": "6HMfBRzKNNSwXFHVhKg2bqauJsvYfkecmHbPnSSvTak7WGtYFJkchds2iBNSg5wLyBHoJ3gS7BFLzKLJ7LU6gvG",
  "key25": "2WTyaRW2TKxyuJ8w3BE7emqaK34VLpzPbjsHn4xA3xoRHNVtRgT931i6fAcNPdYFtDnwrT9jiEYsHc91tXcSbcQZ",
  "key26": "3A5kV1TbWuuasjs3GPY5SgTUGKeBfM2T74Jh87DVASqzX2Fs9kLwwCzJC4nVGQrvEptCqFseTtXJYYXwrMbbiemk",
  "key27": "umW7wjoCrD8xKgJSGLRvzhPZVgFroDcDpHnk7d33smVtMpTLdP2owCyu1QpGJxNXcUc21RXNggBnw9kzL44of7X",
  "key28": "WvbCXQwGtdrCjT89hgQAn3wGpyFZn5G5LVYLZyhwp5iYqf3DZ7d5CKJH7UX7L95vm7TLzugHm46UJBaZFdAz7c1",
  "key29": "271R4YkFhuczkPKtrAbwpoCEyXSyw3rUcppktiARGSTBUvLhPgPGUnRDoyWJcbZZWu7vU7wcmP23JW8ZsRYb6veG",
  "key30": "4HJE53cK9ENAFSvfLNJACnq4omuf9LPA9j8mrfdcuWBg7oZKqBDzUYvchqK8UM1P2iwgmBgjWdSquh3BT4iL7RFq",
  "key31": "3YQUzMKynCnia5ugUpiNWQ3mQBNzQ9PggL3rvuQTb3vmEk39Uq1FyFnkYzM3G8T19s3yFkdki7HrS4LRJJizqfaU",
  "key32": "5bFD7jYSztRASKTTyQrCS3ChjF4ymzbSNoz1DeS7LzqsTyoTcRsHVYSV1xMxeRBCpYJ2rvc61ioGoDBCwoGWX7iE",
  "key33": "3vhPDDMG8RMzdFPsRWYqqohZSzSPT7JyxZ5WeoMUQ869Mfbm2bktjg28xFfXiGeRa5XFohEYiWKxPw5ZYyEw1L1X",
  "key34": "4YP1w3sWdrVgwo7ZsSzi1WRj2q6zCGrBK1w6TjLvHbxzFwttjK7QoWa7KngioYUsD3gvrxXkfvz6XSxp1FtzXzEx",
  "key35": "5BLWp4erdoc5Db5KRjufseaYpRW6UFdJPQTSjd154RtiEQxVhHoY1EmYjd4U7SqLJzvx3PWqF6aUiEQLMNHihCeC",
  "key36": "wVEyryxH4NV5xFuNYoVoyXt9WR3Y76qP2xDxRiGjpth39oPYSkGqJEajquX2rbMLenB16kwF7qnpF5tbNAxdtDE",
  "key37": "Kg1JL6u6vComJnYm8391LgV9hePuma1KCg7Ki67xwxSXLkHjdpy4KAcr4G4PjbSAakCSQpZuAv37parNQsGbiSo",
  "key38": "5VsLvqK19Cki6uu1isJFDXSJ5bzLWevgMHtxgvX61Vnit1btij8KccjcGAXTUt9NccW9AV8sXyCEpwjudeRQERQY",
  "key39": "2KNHqKi2hkNuHcVWfh48CbfJAeQ6NbkPKzoccwZCpGVgsZW2jXPTraWkCC6qYQFo1eX7XTiHXbeo3VPCMyetum31",
  "key40": "3RccVSZzKkFR9cMwKu4nSvtqRRUyxRZ5x7gTCySsdgQEaYEBqTp2hsHFRpd2yiCKUY8krqztFcRvKH8ACvmHwCs8",
  "key41": "1nvMf8SJRNUE7HQJ9XPeJoC25613ooXdkY7rh3yS5DgiYHTzTptdgJqBXcojkVdGhzW1rLzJ69yicDhvrF6hqtq"
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
