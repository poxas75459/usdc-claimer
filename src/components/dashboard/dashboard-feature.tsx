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
    "3QXYLNqLC7gH82Ae11je9KZixgN9iAYPwGSiRW6BKYEopmHP6KvZ8J5jMPcvTy88dwFSARAHWmJeMEhrxpuAC7JP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46MM2xg557MtbuLC7vVuQVxaVUuqMifVmod7egntzsy5rqhERUGU38PFyed3ptmWVb8vr2NYC9A9krK77noA4P6M",
  "key1": "2Tka4vgoUqQU9X6D16JCRqeXR4W4UsLzK2CVGjLt3qx8o4oXGG2Y3YRq5a679kdRD82k78Rn1X4hhQeSzmiwe31Z",
  "key2": "5o8BcwyqdtxQzwiqu6rBbNUEMHPUM4z2SD3YQYwPaVPnARJoXyur9FLXgkJosRMKJnvkLVhTbX3M2REsp47wPF3q",
  "key3": "2r1yZCZYMWUmz3YC94xDeLRHk5Md7N3E8LcvkWkR33MiPQmgvtq5bLTs89jC5dMbc9EavFG9CzQRSPJUK6M24j1f",
  "key4": "5heNmjBFZzDBCSgsEtsfWhFAuYNxQz34k9RmUeNJKXuBWPMVJjNvHqwZtQ2gWwCYFcMQbh7KCqzsQBj4h3vwkdtL",
  "key5": "3Cs5Uwe9wKd3AKBWvFTTvRWUvEkrKuSvRxjfvX1gg6XSu9vmCpTs1Jv3dy2rqRWd66wijNzF4fxRwBxdoQiHmHNR",
  "key6": "24u8VP1fpv6U8JTGwuqwwptkqFsEpTPidvJaTYD24gEfmCyvgaoaND4dztKHi7GGPuAhBL6Xy4AgMFtzX8HVDAep",
  "key7": "1ZRwLgD6QLQUkFc4UG7aa7GjAYHztXMfHED4i5iBETqHxYof3dteF6bDTZKsqorTFB9GFm93RLdaG8ERSa7BZ9",
  "key8": "2CgW77wozpAJF5DBdNhDLHtUdS8Jq61ugJ63qX455y2f2WJ9UhVpgYrzUDHauXqFG3rBUvSeyczYWr61wnNVyDVs",
  "key9": "3VsytQX8wFHc65eVsP8bECVkn6vrR7FGFiFLwYzVakuTm6KwUb8hdNXBMP2GU7cjfhzCqs1morLFBNMhMdMma4z1",
  "key10": "5vGoqcjFzCBFzEeBW3yFS3EuozyDb3TUXg1UnMSyxgCd6A9gazyrSrFbFCM6PPwZxdp62kBy6zqnSXR8M8bLbsTA",
  "key11": "4UGqtpGHJVwU9Zik1CjVPx22XXqDGiZgVME7s9aCdRRg31qtaXkcXZztjfEu6QDxPoGRMKit491rygLegLU94XVp",
  "key12": "2JsJZnPsQ6FFcYFr2nnsvZdQevjVBDWkdhxzk4PLZp94zyD2KV5A6KgXLn2eV5L6xxSfSW2jmuhpgPmo2EmnfZNx",
  "key13": "4nmRN8Wq8St6dSU1EQn5YNbkYFe18Arrw9wspjuTtHbcu7hms7wGz4aPejTwx6LxxFziSvE8L4xUgLUZ7BUgxN5j",
  "key14": "3eAG3ea2PPpj78rXZZQtqhJu8QAbyFJ9urdcfwoufjf3z5WyQ75fFvhbB1Qhd6YfLNiqoToJxAMR6hUVxdnY5tq9",
  "key15": "wPhscgj567dT7jh9iFyaGFowkCrSFfMFQ1SN1b8EkUjisBMevjFu8DdB5WMF6o4FfRSDAm24hNtmAPRpjFWCnGh",
  "key16": "CykoLTJ4ysu2fMakFje5j9U278tvapai3TYot9Bt1oX5Eeu7qWMYEh1GFQU7aQhXnGQLVL44PdofMMbNk3nZ5ws",
  "key17": "441f8pqhhwLsbUfXcDTXX7Z2PohntY3jCy9Un8gcpBNMF1sV5v7RDwn5pYNFqV6D2Pqa4oLSY73DEc5wKgXkET4i",
  "key18": "4CLPJDh5K6id7nBfFRAu9BAgcpGubcJPG7KTLjBWoLe7foVHoW7JkA6L1dcxqUfdbaGPv8WfQJFYhB66JT6uVN3H",
  "key19": "5iaYud7wZZUaRpoa47GbBvkUfHCv1vigZUfueovJPPm5quYAar3JtmrdjXB5UK1uGRunC34QsRWrAS2Ztb9XPhYX",
  "key20": "2pP9mZegKeTbmjdVdouVv1jHdgFtCLRC3x8qvzcZ7kLdQNr1eSHYLUxYbVhQ9EBpkcfUmM2ykMX4Y9wEodisrzCt",
  "key21": "9N8MNra8Kx7RHiYNhvNiP2vNwN65u4GKmLwFrTg9QcRBLsnK76DTss2xNvWnawiAsv7aKy74uPJemFpi38tZ683",
  "key22": "3Spbo9VDHXW5u9xva7usDTf1tu12gD9oGwJTxupwmM2Bp8jDMnQoWfjZabxU1wX4g6byWZJVwGUxwzk3csE38qQF",
  "key23": "294hTvTxrqUfbVhQEEQxLP57Ax15LJmbFpCU49PNVACba51E4R9nt1eSGUfqtvFKA6TWKV1Sr7C2Nvpzn43oGqPg",
  "key24": "2gxyEhSXZujvAirdGix62CWn85cXMd1s6Eme5oy8wWYQzUzhLi8nfv7H78TJaZw4VxtWPp3peqW5TphoHmQCCgF7",
  "key25": "xkDpMyeYYmf1E1tww1kDV3dzuUNAFufAcrVv4Khzj3s3Aw8YVEBgcXGf3boKpYtpo9NvhgzEpdhHEvs7z8MgYxb",
  "key26": "58btkFmWzyHmy1encma293gvmQb66zbDB3gqHEh4meBrTJS4ZxUYRVYTnVoycrPrdG86m2WukKXMY8eyVT7JJ94i",
  "key27": "2nLJL6bNLi2wM9bAsbRAxjssCAbkKcYkTjT9xkpS78omEaH9PAagY8A9L6o9SS21JrjV7Uyw46uKF37DrYBzJ9cb",
  "key28": "3LyeukTEcZ9Fa2XUsmpYn6ujQfkm7soFATnUiP97zbHPa5uL5tR3mmV2XX4G9VhF9koXhvnZ7yt9u7mvpwSGLPtt",
  "key29": "kc2usSMbo47DHZz8V7SqzGHQJyQqypwsrCDTCpzpzgBd2N2PLDrRJAUj96pmKJGheJbAcmEp7nwq2Jjyj1SMYWz",
  "key30": "4ze37JcDueGQAnqAGGNKwDVmsrDL2ohUBsmarFyTCRUpDN2YGayqiXkd2GtNNvM8GGr3HcL5s4csh86CPvt3w1kQ",
  "key31": "5PgJsh8esKFqch9cCENaF87362z5wXiyF7nWZYn6nvuUJmSqecCuxHkkhFZkEA22wHuwUeksxidu3FkAa1Xg5yK",
  "key32": "2AyrocxAzubKtR1qJcoockavphpWwptPn2hYqpAEUgWAjhZYeheTEadRcGtesyeHx6e4nY3APwp3j38YPdzBkJy7",
  "key33": "46ZGpBmFSrjvyn1ZUKEsn1CZxhEerwaagiEjV6XMeHRZqtG8V2Z32QWwWLziPKnjkCAaSxWw6fx8E94up1hebVCa",
  "key34": "UiVvrXk75BgCtYS4TTPQgLH62tNtThiVHtdZqq8c6mGruyhNQvXGbHqzimmGqbcvgDAEVWZxVDCtLjo4msNSabC",
  "key35": "5QWFoMmQdXPqgPh2LfFBShiwNpByRW4NcP3EkE43AZ2ZbmtMo3YF1UHnrRMnG5io2naw158WgoSUoGHX3W5mUHsg",
  "key36": "2ywb1TAJmcHi4MaSRGh4sKvUBseM8MNostoTp5viZthQUSEAnouVfyrqGMRJnGsWsrfkmNbvpHcUdtcwjXeH6ykp",
  "key37": "3rV1J4qvDdRzrcjgJFT6aU5o5ST9sxKgutsNTNwFsoWdnMQYuBqTYhuJUkE6riFazjbZ2Z84kfLgLJnDJ4RAGQPv"
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
