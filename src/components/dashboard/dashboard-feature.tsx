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
    "5Cwn8CFcuWP67SwKp65DX5eyF7TRbHEYWQjCC1dVsTyksDbw6PmUTUZEaAn19sfabaToKcbvrF3HyWfuHVMbiUG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32vcQ6AYCjvd5VGjtHoC936MLD8LRHHcQpzbN2zU9FordSQfUk42gnbXdScNZYLapCPP6rZjedG4YYtdYF9eVLPC",
  "key1": "4XS3UqcoPddJTZJkzi4GKLoFjNRMPLXZU4GK9HEDudPvgrfR4zN2LGyW8fiVBnxijwKzuhxQ9Z1oWDXksP6aQ9Rt",
  "key2": "o1sNfug97sqi7p47GXrTUus6LXmWsAC8T5xBuYMMukS3NEMYQp6xHJnQdw2VhfPrRhugjBrxRqftzUyv2MW1Dpy",
  "key3": "YBKySpeUEgbKSmtZNiSct3nd5Jd4VnTAejEBXYB6ToPGMMbJJiA3vWKKJEGbZWAvK1oGbZL8txaGwoo8pKSqDBL",
  "key4": "8wZb6ktNGbi5cuscQ7G6Li8sVZ9ZJC3ocbp37z6nGwb9cdcCJjhFKS2YbNW9gkeu6xW3vAdEsVrgFezKHAZnW25",
  "key5": "2xeUDZoegJ63oif7azh6rAt4DDMRrPccrr5xy3Do7WmmARKNDDmNeNpyHXDmQduPs2iZKKNb2JivbaYaMML8omNQ",
  "key6": "4CSTxrpsy4bSfUswE4nhDw3hMNSzmF6SpkBXui36gb43R9sNkDFDnPdWC91ZUPLHhUCzjKKwQfaJ6mpQQjMzCfRQ",
  "key7": "2fUfhqpDZpeSUCXfnCuARHBmmQWb1KhT5WVV4uvF2fHXCivumgJSPxHLJPNgYZhFgoXCRjc2qHr8MRSrGiJnawsx",
  "key8": "3SN1Bjo498Eq45FKBn8rS1ehXnuXaEeydMJQQ7BmK2FGxFfJXiasWTwZYczZJcSkBjnaSV7ZDV4pGM4SZdt9b7dE",
  "key9": "2dSkWkm81jzcLkftnRG4k2kRxviUZbGK7FRvwc8ztKfTs6N87KYqRyshtTsqSbDZ6AzPuYgLVssUsijS57TwvUrw",
  "key10": "2wRHeQFPco8H64c8LXvCd7cu54S9cbmG4gmmkefcUj28GLCoGR9fB9hmJTdibBWbfY2kUXgFmoHBMbwfKnF8WTHQ",
  "key11": "m8YR9yPe8oMwZ1WiMKUErWPbBWyR2Kw984VDduPeHWDGZkbz3BbeDTY9YJMoTN9ccDvwxvsrgQeBbAGLQ8f5q4E",
  "key12": "2nU4sDrtNhezraBxVN9dAyxUiWdt3NajwFPDi3U9LpNebjnAsbr2oiKGPYMQ559tiaPvquZetWFtfSFUp2NF5xsv",
  "key13": "2YJSNSL5P8Z8kz9rM9qhj13LK5rGYL6Uov6jtANXsP3kUg71qabUMQbTBZjKYtG5xJjSrcbqPiZntgya5TBTHvQH",
  "key14": "3EiX2h8THBrq6ezW9HM5F3ho11ojRSJdYvtK99NeDXCeNvL4BxV59z8EP1kLgYvxHfA1PGJ6r7EVmbqbRv1Av2jv",
  "key15": "4uH77GK2ssvhyokZaxBn5GJMt2j5Ft2jTiksBSWnUkJG1k7GduZUgsrPbJPm4NWrpZYw7wF5MMAfriQR9es7JMJq",
  "key16": "5Tns4XgMofGHasj3krh96hLN7BWzvAsmdm7cNp3o6c7cHhTwo4GsvZC7PbkbqW4pLCYSz7dodK46cuTLY1D77pHC",
  "key17": "42PcCVADgjkn3Hk3JVsyu1vmhWjtxtpF4vEL9Avu2YwHs3cY8Hnqs1CxDkgEkziEoM3vXBDUsYN4z1a3iRK9UrMp",
  "key18": "5UvJryym7ZWQ16xhiGvfnuwc4VCv85qs1MvD1tycGtnc957mLUk7o3WagvusXJXGiqqgk1gmk5fpBepFiPSFWiQj",
  "key19": "5BC1Bwb6Apgt1S2ztCg7yyMybwDc1RzhiM9BTSdQ9hBX7K9LT7mWxXUpJ62KUEAADLFWptmtzQL4EaNBrtzDNFfC",
  "key20": "657XDkKv5ya3C5ovPJyX2iNir7goAuPBcUHsYzM2nEDuTd2Hk1WA5QBitxqNkgzQtCBwwUKxeoV3hzxDiwjXZVuM",
  "key21": "FpiifMzGRzdh7vLEUB8F3QvXCd2r9YNZy2tLeFfeDZtiAgmAFAtxqimXikbRYiX6VQ2JjVrvFFyHBXvaecayzH1",
  "key22": "5xouSS4ZCy24uen8syLGLFRTGByfupMby9LqeMXuXm7T5DpSdhDtkeQLfNq3k7u7hKnKj4rs4e9RLYwyqXidDCBX",
  "key23": "gdStWRbgGoGR5EpiTUgDkgnzhLMEj9BNjXbPFzxR1DqTAELBTpSUJTPyvEwbZfHLNgsRrSKBuSFuE8JttGMSfR2",
  "key24": "35ytX2D3Ts9SgRHq9YwwQc6qCT6N4HGV6ZREPLznJecpBbXLGfX4JsEYU2XAj4z6SALJE9kvveAHi2XbwCNQgpXX",
  "key25": "3vnE4MGuymU7X1LoimHJKgmSUMH9LPoTu4YX3aDN3ac8iVFTT4Vus4QJg3TPbm6VMmA2TcRYuvcokLT7wpSj1hfQ",
  "key26": "64oCgEovRx7zjcqY96ZXoQE1MNyr3DzFgCpeCccNZaXBfo8nyiTwjgupRJ8pXTbxZ5rqRYAk39APNEdB34m3TvM7",
  "key27": "2ByfFFFD4nRqu5BEfyGjxXTUhHsAWMsNG7sEdonnimmrNUATktLcfAUYWwinWEcS8qanuNSfX5A3R8XBSDppirS2",
  "key28": "2DE7Qh42KXeU4W4VTWHPJybkEDC7pWQY4H6Nzc226jVfrxC6A84tdKjaeZyYQCwrwkTi3PSB1dM4DZcSsWiCtSto",
  "key29": "53C5jsMuem5D4vm2TZNArNrRNGRy7NqdaeN1hh3tore1XR3pUQ3WV6sGSMCeNTnVGSCSboSYJ2As63JhoBDBwya7",
  "key30": "2mYJRyveE6YcQpYLcpHpeisxgQRQYNgh2wYDUPHm7ACcYBuEXRfSmr18cQb3qAHkVCK1FcVtPRG6u1CpfvvcCgWq",
  "key31": "55wcchQmq69jMzxSBKfo1AXTcbUSs34EJLA7gu4cKvw6VLVtgjbUEWg7LuXTuTSKNA5f1u7bzqws3HrrgBC3eE6b",
  "key32": "e49wmd2koDJY4EtX7a59kVbA3Q8aMvepfpHCycVHZ7554MbqJLZfXe6zUctUibuWNpvxtLdeAzGFFatrSqM3HMe",
  "key33": "BUJD6qPMY86HnPtYfTEiUrFx4WpUrxtcWFmbWTFpdNmiEwAsEgeBTJmbQ6UUYaKqUcWipwqZZES9Uc2i9TXMdDN",
  "key34": "kiqjbSC64ez9fc1fndNyk4FiqqKTdmycd6BZbQqfgCCqNrD5oPy27TJcJBL7T1H9jYyxEvM9GFc1mXkkkhgXof5",
  "key35": "RoLxAFDtntDMzw17boNwmowDwjV2rkM2fraP9ZZfRf5wUU9nRJeiToH1nWybHCVxt34ktbyb67BN29hXxx6HZxv",
  "key36": "ywTkErjRDdvXZKMGJieVXC5YT4asgMtTvcivaUJTmTkdGfecNtBPfr85i7FRc8HTiQaJbFRQUv6Rb9FxAKsgKHs",
  "key37": "38tvSWP68uG7vkJHAz3FucMNv2WhhVEqAwnmu5VPSLnfq9BtHvh42SXbBxr6YCRrxN7ovSVD1mMjkqNtgLKsrv3x",
  "key38": "26MXDzHeBViWRPnV7icF4qQ5K4Fxyxi9BvvgspkwDA4PzppqwLKHgq2hW5WPdgQqMzya6J1owwcyZy8GUMdwehbm",
  "key39": "3kEiW5PCzbpFUuC8W2aWdd8aqRGSs96VhHADL18TumVdbPsYWsjELvjwHgwQfVyMHNPtC7Lx6RVdW7bzbVBThXtf",
  "key40": "KDnWE3eufMYYak1DMnXy7CKjqieRcq8pCuxheSKkQ9dph1EYFkEvn3hBjkFtPgSw3psRs1eMzWg3JDzQyRirQ3M",
  "key41": "26P4RdaD9zs7gtVWhpGk59mshssHYCHwLnx4EjV4fqzHHFn63w9jKQZ7q6QKXXenBAuu8aAqYiAFUL592t1w5uTc",
  "key42": "cSab7fVTpxnkM9Qy3dhhy6DXT2wfkbndCRvrMYyHpQzCUsQ6Ftfpwvg83xMa8gkr6EJmz3q9iJQo6UihD51aZhC",
  "key43": "54ytBjtAF5EhYsyYT9tAQTaia32RoeXu6xtogorqrdDpQnHZzYYNkEnm5L6ynV7CJKBZBFzvyvq6AWB2tLaUkJcX",
  "key44": "4wKjn91Cqrnd7dy6itaceSkpthTbALzdWw2Z3RYmDLgDxKj5m31PwcoRgxRnE6EvRMB11SEUN2zZsNVdbbi6ydFF",
  "key45": "pFEnHXMYpgc8zwCoiGeBHu9JJeTPLw3SEeQ2pHSrsnZ15HjcEwUJe4Fa6R1wQ58PwMR9VULbLYMc6GiiNYedKSP",
  "key46": "56DEpyJCfQqFqJoqs9Pgjnh862qgMe57GoWZhhY3TkCob9kgA1Egb1HXMM6381ejs3PKt1QRQeHhxTcFtt99rzxi",
  "key47": "3Z6QcoJ8rpT32pC7wyzbYwvBRLVyCEThGAwn85G7G8erKcWqY5h88EdJE8Y9oKvZ9BrVWvRdkg3RGHyKyKYTCeZG"
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
