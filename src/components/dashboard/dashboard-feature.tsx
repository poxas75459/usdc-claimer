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
    "5aJgt4GF6k3eitJRaXnaoiXgSzV6vmVJdh3nqH3TXpPevBUuX59114sicKiGfr9ZpTfkMVCspRRq2PFaK47uZagG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UpRbQuxWjPUuZzF2gxsFSjCRBmWDewEMAMsGb61RbPoXsutEYZFg1DAt3HVyEoqxTSn12UxTdhrrjy55333mUoQ",
  "key1": "EswcnaynwpAEpB8V9apuwpHtgrY8D3TfNfTNuamJRYzTsuuHbmSQpX2Wu5uFswixGw7Nb4XKn7oRFyGqEq3FYcG",
  "key2": "5hjadZxSYYDERmsYujaRTvuJdRJ4eXQy6XHPJVi8a8KFHGmbBxCEdFwcXe24YpPu714Jv2w4gCUfP8wMrzMkmqeV",
  "key3": "4psRBb5D62sAAw2GCai1VY41QnaKachC4oi3EgtU8FcMJVgcGi6Va9MTNncKk66MYn7dBpDZ6oTQExvRFYo1tH62",
  "key4": "62pYzJ57FseCvQn6bEzZkQXiWnZNQquqvHqs2LRMwDZbaCCRPF51BEiuVFvuDWebt1CEY41seNab1Hj9jpXfkHn4",
  "key5": "4PHK9QgwPtG2kNZiJ6BDcvmSvonv8fPJBhm3jy46XUekSTyZnVCPwKG638rFzoJ9SaL4SZG9e5zAsnghb69Z2Vow",
  "key6": "3sFr2tpoNKAmFg9LqmNNA6GWczvE8uZ8hHiPTRK5yMLdNzvUQBv4NKwTnqiQkpuiU1yrYbJ5xVME3pw8arLM4Yxm",
  "key7": "2D31H9i1qnV4wWqxqnNvQnJ4LxuyNikwwuVokwy34shBTCzdwS62F4st8357Vq2fWRMyTFsUVZBARHBon7irUT6s",
  "key8": "xrWRaS5Pt13hHUpWZrixwwmU8wz36ikbrcDL7Yw1JRZqu9v4eU2a8EkuBPnE93VTov4tcGLT6dDKTSnx9d1b3cb",
  "key9": "2EocLNgGUv1m8ipp54bBxU3mKLVLdsP6iDx9JbLHjNhxaByXfrwTdiq9SrKmeyUtcRHXYjBZ4SyEUpTjgpyBGaUL",
  "key10": "35i6jpD1nCcE6qhcaG2fnme5TL8A6EUUjg8JGvXbtMKaKj1b2BbyTVSpRU5NLcVcMr1ngwzn7ovWroMdRELodAk3",
  "key11": "TQBD2RK5ByahjwCU3TRrBSGSKrPzaz3zkqprSYEo2QJGEZ8NUgkufmisyczNaaYcL7oVJPsjwEU1RYPV9rAtiDV",
  "key12": "2iW7qzQdpnYRkGrHBmZRBqyzEwfyFKHeyqccGF4ojWmcUwS1V9SHJr64GBGE4zTohcF5Z5iZ6bNdqavQmXiy5GrP",
  "key13": "2LLCKYS6bXFwxsga3vNif4jdmjJzwanMmcJnqcE4B9M85iq6RZ8u2iL9CiT5DSWREa3BDe2Zaed2cxkUYUqTV6dc",
  "key14": "2zcrh7LdEjbDLjr4wEot6z1xbs76J3RF63G3mVY96Sru6AKEXHRQSLkFeiHACkEjf7F6nrc2UYJ1rT3Ans3BgbF2",
  "key15": "d3C9Y5t5BCX6DMq1HYyeswr4qKYP3AToJY6fyzyoTK543k55EeqyQEpzNVizj6TCxX7s4Lp2FbDTVvLMGKyVk28",
  "key16": "4f132DRP9vfMKV9xf4XdEdZkrXce2i1fGasRHPVqfGVoRRhvwMzvkuF7HNrEovGtjj5uuSnKff7WbAZiDAb85Wwr",
  "key17": "4RGcRMrPk87eWTV7f9YFcxnBiTGdXe3UjyGCSvHDUNquhv3SgramcFR8WvpUzrUJfwVeKpFUqQRiMBY2bS5EiqXh",
  "key18": "5QQQqBWgR1ezuioJPRAKQPPtQ2nR3QcokSjK7yxAM3y7Xv6vNWW72DU1xLTTkJchFwnuELDXNNYa1zYiHp1X1HUL",
  "key19": "2PTwpCssXkwqsiJYcSJQwePZYmb3mE7WFoTvECaWk5rAuLFd3UfVbQgjCBiXnrZvTXQZKBbWYcS55zSD2Zo4j6f7",
  "key20": "yV75Hqbg5pW6JFtwri7PgKA8Hb1ZEfPvECDpNir5aZWqaNtLU8AFEBST3E4vU3qvwsaKzogJhhLcRbDu7vQKHam",
  "key21": "4RiCXb237Tuq7Ae8ahPqtTuiRCqYDnH2UVfrcQnMdsuk9foyJPpYVsvqE9tdTYfpbng66Q1AjDzmc4bd2yAwjNw4",
  "key22": "51Ht8uAcSaNKd3Ftnq8QWTvUqhMt1iSkJTzELNZGbVNfFw3dnsH9t9zWbeLf3hGKBtZ2VD5vrzWAFdQDx6Y4vaXc",
  "key23": "2jTJXmfgTokCXTZgqychnbJ1hrftpojP6tCcYLavsnnVkcXJSmL3iMmWpwJoVRGLguU2CXeUWR16MatjA5qht4YX",
  "key24": "3QaPmeHRZwh6DAxWLnvmNtmd4XrV6XQGTimQf8ZWZCkwMiQFznaDAAHwUvNmayrvRTMsS2EyyhfaHbKQsFqsZvKt",
  "key25": "57tWhr8YJyfgBWFHoiMbNNKj3owCi9mtcV58ppPgB9HyhYA2nuEKey6sfJeirzfoDzmFdEzQnS4vfkHucQxs3NpG",
  "key26": "3MxWfNRjL7rycZnxvnBLL2rzJcL3115D3f2HHUPNMCsVq9ajeoVKT6cL2CJTwgXZSuohYFoAg7H2s8aw9MxoZc64",
  "key27": "4HD1uST2KGAeTDGY97DwMTfBsJkTvuf5YkHWAGMsSTZmmus9goPPskJobLwzYwNoJuzGFfoGM7Rtrv3aLxp3ersq",
  "key28": "3iE7BswtwhkbdNsyye7fmCd37PrQLkHQPn7Ksh6xwAxRzb2YMX7vfX38ufik3LRodLwacqKxuWfQf7jmYj7c7gFW",
  "key29": "n6sopk3RL5g97rANjYzCU1b5F3yyzJWKZHz1bhM924CvxCfnSPRVUTvN9dDiUp91uDxYB1c17j8hkQBAfnGTbEP",
  "key30": "2grRD21uMUHFCEPdwM6XtdqdKjs1Y32dgwW1BSKiCiiyjtxbTBEKKu6ApsM1cMN5RMJ823yyCuSQySnXATfh7nid"
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
