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
    "61NgpJbP9F1pEL5CChXDxs2BRYgPk73qYkevwJw5afoUxwark9e7NevHvwWzT5gErZbdBPMxuAppewBxpQZ7iuRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UCPguCUc5zbU3Du54JFxrVvCRP5PjHvrQBF4KwZWPMv1AWYpXS2nAEhLT5BPc5dhp2cdwuSiY65FFa6VpTLDB3q",
  "key1": "zR18EFwCMv9xUWEx9cVDh5tbkHdGNWsHyr3A1VMNDMwsqfb41ZF6dbmr9a6uSaTnzrbHMpePJre4sdujSjpFopU",
  "key2": "4DHiyodQjAzYJMMuLck9ec8HkWzLiN59ZMGcsMCSDNUv7gBt21EmdVzuMmHEShm2w5JyMhhpXnRekABvfBkX9KU4",
  "key3": "3GHDTTpnUrnnVqFLfYcfkbr6mmvcTMeyBzKCSB7bUyum8dDRChwx4wc4xh59VKezUHcTFmAAziVnWS6vfr1AWdBm",
  "key4": "4BaP4xBQAd7Q7vtUoqkYB7SrU8ZXzWFSqcVkwxbssaMh7ZYNb2xSZj9SrxQZYjin1rLECqSVynHaFYsMdvFBDWCY",
  "key5": "4vzzJoBNJbbfVfzaMgT3fsdLAGHZDP7raKHVGHwJ8EEkDfULLUdjmCtVa8yFpcJceQ8yZ2ZDDq5KwP1Fup1ZML63",
  "key6": "xpwmR5AE3phufs71k6q6ZJLyFrzkWiTqREPVrtY8qfKA9291HWyKNJNxBC44wB193UEfdwKnbmBqFWgSnHDThmd",
  "key7": "2sDXCFN3Hj2yZ3GbzYr2PcLBLWJ7XLcuVgnojdo9CZaooLkdGQGozgWNET7NNFMvj5NCY8hLKoBzmAMcfUMqg1qF",
  "key8": "2bnw9eKKXzoQvEYQzgKmSzGQZqAvUotM3Js3MKJ85wEKDYbvRvhCq4LDenkozBFADjWAmrAfru84yyNx5wsyK6mq",
  "key9": "3s3q2YYzh98KuBeTE7cfYVuvBtcBnxDPk8QGCKQYY7LA2EFMWBMBzKSGeKuN15ushXFfBUdvuLGmUpQqkQLB6UzF",
  "key10": "2KoDDra7wVByWByjUuQohTRmPRC5WUs8mCqNvixnPRij6U4U6gco8QKHFHBEx4VwdZc819sFvzqbaAE8AXcrh97S",
  "key11": "2KaN3zBASPnfjMXAicxXAwhi2vn9VnqKSrmMTuyiuZMYHaLBLbBvqhXGWxDUxoSX3L4d75ftM25iGxpdqDhxvGyR",
  "key12": "2A1rsk4YwSwg6Ne4Xg2JqdMmphxhmquaLnEPFhjm4r3vbrvHpy1gGpiCxcadKRYGF3gwe3ywxTGCYPLoy6WSX2oJ",
  "key13": "262Va54yc2KGkKd9sRzjx5G53UXLboa2jdZiiAdKTX8BNNvXfRk3GZw39o34mfEPvHqKh6rttTAdprhWEXRy35xc",
  "key14": "2LTkLxvtWXm9tYB2QMtDLZVGPLmAcbR6esQkqmnmrTLvrgThN4C3hRUSzkFufkr7GeJZdMkSGGhzEfxwjmsbaU1W",
  "key15": "5DWv6Ei5XRnnoZU82EMtXdTuWeSEb4V9crw7U8zcCsoZVWJhA3hssM8FTGn8jH9m7sHmjCxV9pWCBUQa6v2eVnN",
  "key16": "4fzceAuxeRLZKdwbEWmF6LCpqmf18QSmuYr672RRXB2Wj5Y7XNxhUBpMMMHxtR4KKLh4p5kTH3LzcG7GFg2dfV23",
  "key17": "4dizyAijTR8mXtTk9sTLb22aoWxTeGD36tey1KDMQQ4VBNGRRkwv8DRMWDmdnoxxN8etSgiz6pdvChqzz8xYYskW",
  "key18": "1GGXrTLwc46wZMzZGD1n9Xfak9LtPfrE9s989CPv3zu9XWz5QKAM1uMy55TaUiD73pmAS8DMHw5qdBHsNo1xz6F",
  "key19": "J9eFZsw5Qysy9z5x44Gg9HYnRYu1t3nDxSZxVb3SKK6YmYFnDjCxWXjSu72favNUPqVNQmrq3sF2NFXJYSntQ8R",
  "key20": "5Rs3BLhhHMgiU242W5jZb3YHGJqkEikJ8x2XtxQah5Hcyu7LYt8KMQxMzpoQMQYKWM28KCxCQDtLCWrUhricMEV8",
  "key21": "SQqRxM15Gf6hVu5j3cbaQ6pd7pnFt2FRLdaDEcmoyqZwjBSwJ36fHYzaJiNTAhaQ8fzKe1XLxNC7cXYdCPHrpZg",
  "key22": "29X7H4ruKaXXikCQTr5u7PaS4MxUC82kRuddqZg4dJi14ewAQZsASBncKQKxGSaJJjU9So7KL2DREHC2wpNhxaxN",
  "key23": "64ChP1C1eMZMMx3NHajBNs1AKiXi1L5JYep61EnnPZ5AgFKLQ2aXB52TFZVUB4k6DisYMyMZwNqoyyXGkBw27rpi",
  "key24": "5LNDnJ3M6vZ2dU47uRFqRD7QpKeSvVa1WKpamrq9b7nJvvp2ngWDazPC8BPHpqL9bh2F3LGRLAEP5yFPozrkpGhd",
  "key25": "459xrQvqsuFca2deqm6692mkmuVT6gwUwV5C8PNczv5Rir3xvd1d97HJ48kanHbcix7yxekgAMLP6eod4FBrR5mY",
  "key26": "4dVuzy5B8P3LLNuLDb1TabJP9k6FkKmVmnyhBwNwzACA71DVa9J1vcDVJV4pZGE6Gtd2sV5SVWu18aWRN2uPfBcD",
  "key27": "54ZBevvDtRScS7FVtzBiFqPPx7mQwX8eTrLjEnvmanVrVSQgSr1SqdP5t82wig6HmPwFtRkPqYv1fao77BM5LkFz",
  "key28": "5DdaxJquDUUMVqy96BgE2DE1Qp8CihPeJbYN3wHmYurJCJzR1ceHwwTbrh9iJ4tQUjLrox9CwV8WAp7fEvihXE1U",
  "key29": "5PuJ5W8e5p6iZxMFUx9v4ttwECqn1fPHC5D62XBA7YEaf4WeDpQ4JdGFiFiGSSHjGDFDzvPifqvJkU7yJTnDBv6i"
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
