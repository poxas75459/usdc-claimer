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
    "4iLebpYzwXwEqJdA3C2vrjziFxn6erCPU6sL9w3CK9aEEHnHhomqvFsCduKB1JW5vfS3rGBZ26qgdSLJCYbuUYV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4syFJyNvjQ7sPkQfxvppVSReEYrGy8DLDxtcTDGJ8jhty77BKMy1xRK86Wji9ujCWYNG5Hm7ATu745KjUhtN4wHn",
  "key1": "M4dY68xFoM2CuugczWDfnanBXt9oB2d7oePB3cy2Bqj1JR69VK6mhMZLKhtUEPYbZCSABmBuH7WAh9BWSFFD9kE",
  "key2": "4yxzQ4nu4TMXLF6icwpbUndrcS84ri4S4oEo6miaZj9JUUM6xEfXeancpuRbttBFcdKmkmF46qXgj5epYVwxLt4z",
  "key3": "k5J5pgY7VtjY354NQb1HT35RpBveaU3HU1Wevt1JpN9icS64gyDe8Mm66XYiEBHq1FrxCYxSSSXtSg3jFL19uFU",
  "key4": "2wnCYS15AcVGZKbcn4boRKjcN47LjujnD3Rrc1ZMG1kdQF9jQ1PABZUNs4gdkqY3PqQt7FAVQPEAAJnDh11mu6Yp",
  "key5": "5erCS2HYsDTDBtuVLJizDDF9WVwz7zvqJybLHDSKcnT1JHQHPUyd3ZyJbgKwmG3TrqLaLP7so6Jcfa2GUhLcHaMQ",
  "key6": "4wb5fztyY81L16qGDs3U4vqXrDxyz9pdijnguAPaNyEEQx5m3dbVDpS2SR6viPgJcBRKe9mb6Ud4dk7V4jGvCfGd",
  "key7": "2BsoJsG9Qdw2f6DVdboZe2wdZdVzx7mMX1xpJ7y4RcHzqg3D5JJsAp85982gZYxq5RsDPKpviMmY2efzR53BFZJG",
  "key8": "651MpTbguqvTS1uMxpzSUDtcWgaJkHDhXGGF3zYg5KojSVCToZQQL7aytLuVQo4YfgrV8iH6nfXNrcgnBzKDHYRo",
  "key9": "2gVfm5vfde1yARCkkWTgsCow7E1mDYjVnNPTcnqs5oCx2RW4zGAE3Xz31vURXP3QVCjyQ6fwZ2W99Fzgom3eL5Mx",
  "key10": "3bppW4pSLPWnbgFz9RUdn4eno8ATT8aP55mDKHQf3PrF2kxJjD1QF2FaS3yUd6nzzdr3BptZnfQSPUTf8STYHK1B",
  "key11": "3a1sipFRSLr6mxTj6jxo21vHWJCX2W3mhVJ8g2DQPDSsMKS48M3gAR1AwTf81fRYE9MhMpA9VwFYCeYsAgqn8xtN",
  "key12": "pHhEwq2NNamVXJdtTzugNYx6jjDRm6avX4kRbJMKwybtr7MFLmUW4ZMAHxL5vk4LypGRfJc9RJYiE3Db8gj8x3M",
  "key13": "5tB8sbWTr4mZEbPPChcbT52HXdLmCZhKGANo1PYp6uyB84FQLCbPLknnG6YFikKJ2GKa2Y5fowGvxA1oYG4vrLJx",
  "key14": "zscDygisUvGyGYbnouP8FsfiAMavaSu8YMbfSnEToRif4fdREVJdiQ4k81ibDbVuUBBQY2z1pngwCgFhV3muS4B",
  "key15": "4sTkHdizSiuPCZskutVRMWjkGzRnsQ1yvaDQF81dKSHKLXmBoJHt1cStiV9kZ8kwsHZ4JrEqg84vCvuLnr44YPFS",
  "key16": "65SKNs5YXxwU299GXS627DGH6AeMAMtqcCTmABF6sXFGUG7rRkJYLESsPcnfLvnw9MUrwDG7BpKab7iqLYYvFAwL",
  "key17": "4CAreH5TRYSw36wrTZkf5XDT34wBYWGu7FBBmk2d1MZjHs4nk5JU6V8aQV6di5FEZNZp545BKybmuJsDsAr6DTEP",
  "key18": "5r9o8mv8M7jgpgRQA8wSh4ztj28Ky3GVPctLG8nZWt34hhYuSYqTpgrmr3X2u9iAJ7NGabSR9LArpuGyfZ4d2P8o",
  "key19": "3fZaLJkFLEzCa9faJTpxrA2NocvjLrmWaeAdKhKGBMgLcdFsn2FgUgXhk8F7315GHR4jwNMbdSn6qJPb6fjB4Meu",
  "key20": "5tjSUaHZeChLarVv8Vvuy22aEB9XyuEz5xp1vG6j3tnVZRVJhPvcsa33Fknc3J23gGUgGMX2cH33rfUvX7eMLgmn",
  "key21": "3E2eZf7PWsho5E9PWze6dM6TgAB5BtDABuRzNJrnxyauswqgrgPDJka8QFPcJ2tUkeg6DnZ7GtLowK4oSqsb8MCS",
  "key22": "5WTpc9narkrwVAtuXoH1CVt3u4tup6stHAz92k82FwBvprt1aFBDYTC1joMkEE2mNhFMtGMbGxTVX8NAF9vbGjsM",
  "key23": "2XY1fNrTdoNSuv3BVLT3XEXcX7jsvecfdGjEZdSUHpT6HKjVa9PeiYtA4BgUuByNwiqs88qrvLubNjWwkx6SYQAc",
  "key24": "4Z8SmLAGSaawZX9wvigTKACk18bTerEAKQnKawB2KMMwhoYVcae481YrQjbabyZBtWHm6YREB2BNuwwNDFgHo5pu",
  "key25": "2rYhMh8pe5ghCT7AP52thr3XJYBdL6t75SXmsnAYU1Vcz9UhYVXUkYQjqfhm6WxBob29xDyRKsyEAcpCkZUthBM3",
  "key26": "4kpM7dj9PhKV5aVdMyXjmotfG8bUZ1ZrBJpm1v6yFA6bLfVYn1aUfz4vtpXcP7tYF6UCER8HZJrrvGucopFGEgEP",
  "key27": "3HNSg9dKh3rtBySSmHhyQnQBNUZZqDDXwTGcgYPs49mucVqPBkxWucqQsmjnCRxvWebmmqPZGMAYZBhTi85Xtdjh",
  "key28": "4e3DPJ7zLbmY8mfpq6GPh8kHr3eCjpGRVqfjnWbTuySoAwcdxFsJKo3NDeoyo2tSM83o9dr7HfDZ9BX5Vh5G2XaM",
  "key29": "ALcRrZHUn3zjSGPnER3jf1J1DcjXLUZVtNzey7M8qu8kKYPpSY83TgMrJYM3xpUX1K3s2MsjTA7KFhSFCyfmQJu",
  "key30": "3kVcdFPr3NoU3PbPscbsTBiwMJTdWBJs62vzt24Zee9YrRn6J2PAkR3CvNvxdba93rvhw4kSqiZdxdcjDd5hCkVu",
  "key31": "21rp6NgQbqS8XQ5JFEp7aVm543MBoEhgrrMGRLESxCC4SwppNNjnScbBJWmuFdpQNoRCMpn1naFUofrAL9ZA4rXv",
  "key32": "2Hb73uk22beuCjQyQobypy6bHTLGtHj3AazXsQL8FZAbJ8NACEewcMBfmKHDtrQczPBYTcXStbQg3DrNtRhMgLp5",
  "key33": "67AJt6HUSz5vu2wPbzGVwQiorzbKE5rcnpfmfzhp2JySJKJmBCK5ytxrAVwEKNC6j8LAVReFqhyiNBSXgH3NAXsU",
  "key34": "LMQLXMC74f8ihMEhJFLUm8R1yLPXSf7EXwjKDABEa1iWFWpey25F4cUKmLyCU5qreWspXsnjLwEPTzQWX2oJvjQ",
  "key35": "WUNMeTuqmU5nMgqVmawWcyTiFL3tCWpWDmiHCAxFAnW73wEAC4ejEe5peeMKoByGXD3sC2yi4B4fM8dQiw2iHmh",
  "key36": "2TacgpGCVwjTAkqUaxgajXCn64HBdAjDzjnBPYaJp6gPjXAadTqKSQZ64Qmt4dmrGvArmgormnEnmNUsC1zUiGQu",
  "key37": "xCU5xDRGJnYnDzpGJWhtJCWC9agu5rioXEc5DdwXeSoC7CkYwVTL29QFCXkk2Y6v38BU9K2imkbPJBUXdq5FrDd",
  "key38": "5eMQtea3uLLRDpbTywmh6HaxN51hNDvNTAQYUYqghhMXS9guyyAeoHu5EJpsLd2w5CQMoRZ2nTJjP2oz6WH9fRRT",
  "key39": "4qrLUeEsoAunuPhzNfEJLbPwNi5Hwoq5jKymzUArkbbBc1dyxLqFi4BnogqJad7Tg3y6u9oELhkiGQD9KWditBcy",
  "key40": "3KdRUFzfbty1f4QsL9fCpYideMN281u6BzDfbSrio9hAjX28kjw2ZDNqUbDrutvQuA9xGTQ6VeXzshR2UWx4NNb3",
  "key41": "5qTsondXvvcwaKvEe6VkhcgSvgqhomE9yXfEYXSRjXqzLNJi53BohoMPfbcrhvWnpgHr4iY9MqkZJnKSEdfDYrZ8",
  "key42": "3stU1ZHW5u9GdDgsaM32wJm1pNwVGMogUjkwG7opJdiQ8ysd9m3CRaW3YYCr36u3bCd7yE3QZMKBoopak6DckPj1",
  "key43": "5bYAd77PheS8pXkRMXV2iYKMr7nN5jtrQykoYQ2pice7o8GTiCDhUMZmrjBScHumutknNZicqWeU9hCwf9TxwDtF",
  "key44": "4ePMd2yeYpwESzjZAFJsc5JrRWE1WWCDi9HcsUy6CjYf4jPuVURu8KoEE3p8mPVcEBsSGKd8yAfgvZJgfhuqMoeM",
  "key45": "4oHgozU7juFjao55DdyFisoGrY6VZL6iJNCas77uQCjPKNSBN8TzvbCTXoTkNcKnuaDmenmhFu5r2vjiS8vLBnJv",
  "key46": "453dayyvV5Bz8okSAW34MpoCcEWrnFBEFvHSEANMoxTfdJh1ySSeEfffsa1PLzCNw23Mag7yvakUpNibSd5PkoY6",
  "key47": "4rUzCpJuBSMu6n312BNVNjqSbGncBvmmduwxLHdwNQnhr4C5CU9n3e3eCNxZTCtQgeob9Mf9ujPUQWrWsSJJiGCC",
  "key48": "HhQFZwTyPX3bAvmKmrGXM2sMQc4EtL532zHzVh5TG5wjyWvYqjf8FxLRvP15KWKzHRAUtfdQbkuE6uBJcP7erfY",
  "key49": "4ph51owanqjxpSEQxY6qkztEgrEBZnav5q7mJSbcPNj4iSHqZNGAZwQGJYrSM37bAcjwSBPBkgH3cu4rPgoKyPUm"
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
