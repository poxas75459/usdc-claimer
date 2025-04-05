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
    "4LqTXzzZ1oetVLmT3sQeBqiqFEC1z5HdxYiq8Dk7kFLeJThV5aQeoZzwekwPNjvtv67KoaRYNBq85dBQhcLaM5HF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UbRoEBaMdLmYZm5xiwhvVZbETtv74kgR6v5ztCjHXx6LngpLLbMZEQSq23C8ZvU2BYjsf1MvzuSDKpeLg48BmSo",
  "key1": "2FAcmsFfL4Qjq1Y8qAuam8wX3VAy3nrzRzh9yYhkMvtFxPmX7KuN5kA7GGbQmU64nsFmNdUKt2J42V723YAjNHmL",
  "key2": "4yVKWNXTjF2urANtJyEX31KhggBmceJ9vhJot1oGsGfMaufxZNdJDxTqarSBCbHmdjbH6CKs8xHvitvoMfEeH2TE",
  "key3": "28m9U8NEo6gyRkHkYBgKtPGPGWqQae1AakZtro1YB7ksST9u2SS4wJGRcfd2N3ckQCPR5ya3azax8MGqxbcy7gvB",
  "key4": "3EdtZfP5gbdpm7S4gg8SEdsHfrskFtuquMddxppT5AxCJvE2mN8KApZ7NhJMzJ4qeSrYSwbZbqYD3wYQ9PMpzpY6",
  "key5": "53QiRVvnAe49oDWKq8VMQRppPuhMAuLNeNXinsBkzbzdZVFgjBDb4y4fUiLM2MBkhCBkAUrgCs68JSXGQdgVFusW",
  "key6": "bpiZsFanLoQhXhmyG3B9sBWVdeFhYJv1RUJsevK8VBTrZEAkYYS15CwT8CPPK5xpvk2y7MiDVTg3BV9mmRDkfNQ",
  "key7": "4T7cBozupMbXbf3oJF3DUj1qbCN7oyQyFnfn1j2SBTDgeKz9qTkF5jcjLQ7pktNboZRX2Pd9NHnQ1TgFZMpyeXM",
  "key8": "mNj9Lbtpi26kTNgXmfG5YzNyD3sjpY25Va6FN7Ggb4SYGK9QXKypdGAd6ohc5Rcj1YdnheLjREuaXEbCjD3s5YS",
  "key9": "3NBmVpsAZVvUUDYozNLQbo1UZsRcZ9AGF1f6RAEfcRYfpygHEK2iHzAEHt61UGprfV2wMdVdAngPopdzXoNKzHHH",
  "key10": "DPZYARtXRmw1xEY22gGB3ULbgBJJHqM5haHM6GZMQLFa5paGh3MQizz1y98MrjWz1HRQWP1pimMDBemKYro7Bja",
  "key11": "3CKHU8mUdQRpFXGEdX8Cdo4jUnvF3f87byvHfF5GDQBYUEg1V3P8mCZgSYxccGGCfKWo21ErNYfrvEcVoM8awgeJ",
  "key12": "cKqqwLwrKZJSp4uqaAwHGHur2UQZT8SnXMPibaNNK9QnhkkEyyXzzg3WJQAgNGMiDNr5eXpEg5Z7VGz3HeG52CJ",
  "key13": "2iRH2AZ5JLnZ9GeSfbLqAZM34ULpbKb5uBDS1EaLxt8P5U3RxyGFndS2crbgNytMmvxCKcvdtuqRSdcVkLt7Z68p",
  "key14": "5rE58UTB3QdKSE1dKxe8p6Z81T8zZQ8WG6RAojz25HwfHfce6vfDS8TnJ4ecKfiDSa9jfzhGwkDPQNxMtEcm1ig3",
  "key15": "nEAfcx98AGEx9nV9YaE1RJ83mAZB9deGTDBGLUuTbNmkMtHmx9L59QCgDwB59xud2ctinbFhXBtmGTMJEuhGWit",
  "key16": "5hbaEiEM1eCPo2hCr2d3McPDHgLhyTEqLFhDiQyyyFkmVr6QBfwEPtvHWRh7NsKM8wweQzSpRAJHpaWzHTHqbbAw",
  "key17": "5a72pJXK45XvNS4K9ssJYKqvP9u67aCN3pVc2SULT7kkxWfxJ631BwjSDZgikmje2APQxqm55LnXjXcgqTZSRUGi",
  "key18": "4sUFgMiB8CUi5yxLHBZ8wiLpqt1bPGJzgdScqMj4Np84AS2MLSpQwVe5PSbTQsw7zmQw9rn47ZzAvw9ad4TxF8VT",
  "key19": "5RUYkozq6tHiVyRSvnp6K5TyTDyoWzpANwoVchnDFjwfwCUQua5nKFUV7pUsrvCvtpogmPbt6gBHDASPx82V54PP",
  "key20": "2pcW7AGmFxk5QkYtbwds2RpR5PdzHG7Sz1ZTf9TBALQKGvFebutnptwn7azQfVPpfcA8pkm5gQRPmGMmgLg5u6eF",
  "key21": "wAP69PE3Xcxqp2eCpw9TJoifjXGh3x8tH8WFg5GndeK7aekSEeHokUvLKECa46G9r7WvzJwF6HJ8BLXDQjFkygf",
  "key22": "4uVCwgBaWnUoLM1YD9GnUjUmtkBmtjzcRv6TByDdsJDqe6prDsFs7b1TGRTroR1CPNDfJJAMysdqExNTVAsw69Gu",
  "key23": "39sjP3TZnj2p2se5nEHLRhRutywZxhpxaVUb758BddPQfA76qRtdQVfeH7bQjViVugEcqfjW6eQ5vLzHG4z8rjn",
  "key24": "2GMhGhidS2ofHxrzbEVwDqPca5JDxLvTvT4H2MvaB6L4kkSauAmLmfGr3YX3MjWv7vLVZEvemnpB1yPbGwLQn4AB",
  "key25": "4g9zJFZPRXkq7kVjnN6NsaSAWwhUTqW3FP26KeAHiZL8qFSbX8gXuAXhU9btFi2mzqDwosQbkpzLA8GKEaVikQD6",
  "key26": "4Nz769Q4TpXNrvseQutaEL8ehTcpqZvoT5tcnHNAismXPPqBtLvYp5eYoMrAau2wZuxY5iURoK5tnPziBgiviGMQ",
  "key27": "5eRq3euWNSexjTPShNfHioa3ZongUTpXRLFpprp6goCX7mgPf6V8rvvmyC6BW1c9J4MYwv68ESbDzKcJxKkRqeeF"
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
