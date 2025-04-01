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
    "2QTuxsGKP79nHp4UCywCJUtMmR9GDq7mtHr9NcCmYUGQs4inD8Ei3BsAWwfsDfstrgYsUStZGm4uVAwJwMcSofw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xmoavq1sdcw3zzyrRLdFbenW8eHz3kR52Zqptuq3dFFMthLAbUxNyh5WFzCn7jPYjgNRCKE91RikouDVF6N4YTR",
  "key1": "3y9gP5LVs8Bk81LpbQTkeZb2dHbzihEGzrQ6kCqQPKsFtnrMV1JdHj43KbATVDg1LXV1mmZkt8KaTcjtyHCmFM5g",
  "key2": "3U8tQtLoFABATcdYv6qaAqBXTnyNmWYc5wLKg4G9AgQ1rg9h56WuyoMWWieZF8SCQaBfmLP3jMyrhKhYPcv4nTXX",
  "key3": "492w7ZGmp8X4cMf5BPJ6neJ7LJhY6J13hh93xsANDSrRYeYvPdKCAFxKWSov8NyoEbb1mwKt1eHMidt5gULdCuBx",
  "key4": "wRicCX8G72PLwGJCfcZpBhTF7ZfuGuLfHTS59ScPpxnuwEMDgpmcusB1TM8kknChuJHS8KFqCSA64PJ4NBQ7rd4",
  "key5": "4nq5no26WL3XrYrXFyiH9K1yM3BvRSViQT954Z1j4n3A942kYqTkFu3n7qyKiFVuoLd3LrpNpEZxCqhs7jiNUSxs",
  "key6": "q6xmTLHf31aJg1gB7RDsa6E4m3Xj9hTx8eJCJh4rqyrdHDYSfz9w5ahHmyHM1ftvSCofSBhrcLiJdRyEJzLLzYe",
  "key7": "5TTDxF8gGca1Br47zwhSeDrEc2czErBuEapQVCTJUkkmWczz1ZpZpAQ4P8MXEmuaN2caQ7YKhQYuXnpfcpAd61mt",
  "key8": "4aq9NkfQkboSCS1VR31oiRWg5tSWrpmb9icN9Cc9a3L9UUxTfiaUe4VWnVMiRRpBrVJFHZeDbaumSrSRA2sRJ2KS",
  "key9": "idaNzVF44nVNUmtYf8wDPcfxpTvPxn9oBSgTNvYRndLDPf5FrJUzB4qBwQ8fjXwLusSLk68NvHxFDya4UoMddzF",
  "key10": "66MBMNRm5anv7T8HiWcnzvY5DEi5c6Bg2eEpJoaRrwPvFjZhrnadDb4jH9XWCzewQKPSJVY3tFTvtzH4HMivM3kD",
  "key11": "mkavrVKkEsLkXtBvnAgJEs3ZA7jVBwxXoGfj3529QmPLWL4s68KgZWY38PKb22qhiCvQiL3XCB728fEWY93hudH",
  "key12": "5eKx1WRburURF6T9Yx4asctGf6JzksYVpwzpNa3gALBgv8ScAUwW49D4MnLeNMTAAnMm4qv9WTPczPq1VWyNcq7c",
  "key13": "2GpAPDRjZ7uPT8GdZvosLUeJBH4fMe79YmEiEuMqQijRP962Koe1VTSYZJRm4Lp2JEL7FHb5FydbnJTr1KXuisV",
  "key14": "3ZFMBFdzfgdi9KgPGFDgpTj6t35zVr2uFA6QfzzkTdzFgGrn4MDgPcTR7kKhpL5chHocEHn9wF44zrk9fyrv8675",
  "key15": "3QQrCKbMbpbrU3ZuU5DsgCM6agiS4S2ncK85z2fjnRkWEyHhjgAfnhZamVueAZTXY5xXA5j2Et7BS2pVhfd3cGe7",
  "key16": "3Pk5sJkEMro1LTguJcVpKs3EdPTB4yjPREm7NEohSQDjtA9uxcrgqDsF4XawVE3NddqNLrUtSRYgvFRZs38uFezD",
  "key17": "EC9XdfmM3eG57XrSdan4eNVNGpRgRi1F3woyftpPYvtS7mkzjyHufSaT5ktFTycHt2JhW7FPboHU5aYQAtzGzUk",
  "key18": "5T5MBNhqyhn6Vc6mx7vBsGhaXy6n4WW3x54S2jtayYeryN3s4Xhoxoh41ddimZDrTNPtC5SxACGeGyhzpJBfjuBS",
  "key19": "4eXhDnx1tSUSwMjEyUyzP6QkHWQu8upBnwvZ7gWZ4MrVheVRzjAWZgKv5REjUfBufsnR9348udxDxXkHwA7GBrew",
  "key20": "LXPYr522nysTtzQZTQXYDqXzKg8m79p5ZqkCxg4pkRZExQDQSsezNCWYfHKmeWjdubmi4jLqwA12qfHCNGwAC9g",
  "key21": "4TBHZZtQqpcaQpihe7PUH2xWzrBk1tH85uDFkPUC9skQwEUw8m7pTUc6Zu29aeNLpdoa1mQQhqkRhQJR4QUknzKk",
  "key22": "JtwsjvV4kyhK6ho68xgK4rwXahJapBwdfUFWpkY9eDiTAavCVHawmzKqyGZN9rTu4namgTw5zfMmU3TFJrwLtYx",
  "key23": "5TM1m3C58s7zKhmQBS4YLKMhzEFgjpRoEzH8y9K5GhmhsEtcUNs1g8dwo4R8X66nvGgWT2QN9VsShDvhrx2fTaJV",
  "key24": "67omxcB7BSrReT4DeVDeVVaxKbH3t7eNiSai8WF3r4BUn8CHmiiaBiNgYGzNS5tCptdoagPznBeqRxkjDQeXtf21",
  "key25": "3kh95fCTbWsAJNuTrkPByUqdeUwKWKNys63ujHJ4ugADkUHm1HU2WZx68hEjTd3KoD1yAJZPvKPNM757CkjGywfg",
  "key26": "3hpCo3ZDuA9MQYp9YAfR4TbWg9ZAhHTAkJ3Wk3gdCXtZdFtrMSQJkx3WajnMSCtoak4HR9eAtR8PbL3hLUxjBma3",
  "key27": "2sqJwJyvPc8ZXnBDqfgkmWSBnj5uPhB59rkooTPmenqNAtpDzBKwqs3Bg5U3XKH7h51Wu17CRjGc43hoMpgJwZV7",
  "key28": "4sxUdfMdLd7fCS4JUs1yvD26rXUyrp1H17uR2AoEfuBYnZhbzJvbgYJzNi1L3Vrc8xk1hJcEQmhBjY1FPkEcKPNy",
  "key29": "5x1VdC1HgR47tkg1sqj7gzRhrsFJJG6KJzSVGQp8YjzddQ78WQSAksYRjfqEfwuU7LzQTPLDkepF191CsjDciRTz",
  "key30": "5iQa4Z5bZ1BvnVmXJn5Z3cRSgHRYigN8G1jk8qYNSJper1MmS2SvGHppvGtkfF5E4wnWLkRu6UBFZTncBjDZL6eW",
  "key31": "41o7FZvGxcjp2CV15k2BS9NaA67B9YkHkFdd9gPJjW4vXMQy3Jia1ksxTcqNmkjHStk1rsi9j1hr49y76aiodMng",
  "key32": "28To8zyscBj8BFmqyFLMw9HVJ3v1xrX1jrWsfqsGwvAzzewY4rv66uXATGYmjnEZHiWMCTtiBgqBF2WCJJ7LMaTA",
  "key33": "57wdKM39VD31pHHUxoiDZ2LXceAsaSrQwvyU2yr7CGPFEbdwnABTAjKf2kXzHVEPrfwV2MX12aA6XTFpinzb2Pow",
  "key34": "3jTY9XSLMw69LYbUoteVL9LWVG9GzbUCkPuyNuxrG2uE5gp99iJRHAQZp5Nv8Bex18wDSN44Sf4jyXBeZTbDkm8k",
  "key35": "pq9e7eXVdU73kw4ENjdRF21sRVWiJoVhTnPdaLwqeSL9tYrWQjADrkQFDfYqEGX3DNRR9AXDeUG8NXWi9wDypmq",
  "key36": "279dQSVKaPATDtKmohLXSGAWf3YvUK2Tnnyr9jazGWjJD4vQ6yu6tibHeq85bhY32FFYX6bAHwPeFnExdNfykWp6",
  "key37": "4d7FSkSJzKjmdN5D64B2rEmzBEhbgjNERfkppcbbtxvhnwYYez99zDNBDukUYDeUEK4w1qm8j2UYAfaALExCN7RS",
  "key38": "5TMjHwp6GYCGAGPJxfDRc6aF2zm1qbtb65LXhYhFeuQG2nm3aCTr2xxz9CcGJ5RofuNDq3baz3CJVx1irL2bmhwh",
  "key39": "5Kn5Gh7js3pULXRWhNyW1LUrnUUj1sUDYHKAmsQkt23jxCdcyHhN5n5FVBRngDTYjTWqprMZLFXw3sDdXNoPS2cJ",
  "key40": "3Cs8TdGi4e5bWN1UzRYZT2Q6YR8BB7agUCn9Dm9iVGCXokRDZnGTeNKH8Fg7u1XfVcAd2Qs2AxMhSjP8JBtNszgd",
  "key41": "jbAfVTYrxmy2bTbE9ER25tgdkxqbfPxzpU84Re9bnRYWxjBk2ngHGCgmswD32tPTPxQDgvJmYUMHuHY2Mjsdvxw"
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
