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
    "2Zzo28VuXoCKsMmJBfTEF7UGR3VmEquqknDktop8ArKYQWXc573XHMzNdwTs9Bdrfb32tHYWbJxTN2urXnEHCSrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "321YB8n5M6jGTtzuDWSQP9PpjyNNNEcTY3cypcut2xUejtGo4hg8QkG4fcBRGcsvnGYHRMaRTykCjEapBKgA2LCx",
  "key1": "4DC1CYbGbvHD4sxqH2HcwuX8ShpGdP85Fb8r1yuezH2GbPcjzvyjVeLnHUUX3p8VVxyCqEwcpNQT2Y4LfBGrSMSY",
  "key2": "vpAitRyyPUrhCHj9cqwYxNgyLWNmCXJUNWCSMSF5eh6G2ctvwt38kEhogP8aW3Boj1vpHiKgsLnY3szvFGxMmQS",
  "key3": "53A7WJ6fXVFbqZ3JFBciDBytEQaPsQDpN6hYfv5J1sEPb5kbaTRZe77o12FFkoigupt6uUwvSzxQ8RVw5kuBT6Uy",
  "key4": "3m5YHr7x4bE15nwQVBg9uQerq5sayLzCEFAJJxMupidKXgiZQW6RjhgcniBGsg5oParUm7Lspy6SxmMaM4bxqNtJ",
  "key5": "32QFqUX4H4azaR2akedgyBcT5bR7uXwCyveeLcNYDk7HHXipE3f5Fwp8bho1M2EmW23bu2jRTv5FYsigmjBzhS1G",
  "key6": "JcxNuW7M9VShcTVTKcYWKqFJaaez8iZcmsoMqSCXW3rwtupJJJmRuGFdoP7hvdh1pj3n56kRDDptL3zAXM7qm5K",
  "key7": "37Rij4czJWvBzRatTjQnZsMZXvsnaDhea6qgimo6LYtx1z1RHjCceQEwY4KNP9ZQFvzxXEjsxsRYhtNzFfBLg557",
  "key8": "5Mt1mhcY4eyYpX9MdkprfPDZ9ViKmBhQypU5hwFZ3EPFNkDXKpkZ79i3wfcGsVKJLS8craTXH32vS45qcijRQF37",
  "key9": "o3uRBKXCYGSzYgNgQoo6iwiyQbjqUuB5M2wYhRmQZWL8XaK1wysyVETMYbDZBgZW2AEqojeHWiV3dBwShRReGmz",
  "key10": "5zm9kEEjSCr6ZbJYXCJAnmtcbRHzNA3ohDofTVVjdaefvpH3Rro4Huiq8HopAZv7S98rLqhAVBvCqrMiacMN5VFJ",
  "key11": "59WjGQQntEwYaWJAn8NpnH32hYCoym1Tg7wxK9a2YPNuKSGDfR12N1xPEeviXiEqSinnohUaC9qAfHpC6naUH6qg",
  "key12": "4NQZDbh7d7FQxiqxvLBqTvHNnKUXKT7F15mZHcYCwF42k8LXPbzkdWhGdFA48jUThzEpMrzTraYPrrZL2AF6DQgT",
  "key13": "5RLWo1TsBRGPadCS2ph4bfQ1A2V7MieTJFFfAAXvbx3RzLQ9F1VdAXA2zAcRcFxowM9DjAbt2sz1sd7USNoDGKEb",
  "key14": "4ysfHkV6xfJFWjihtVq6KfGj4w8rm3mvmiEhPWvEDgvazSC3tqCvJJTwsxy1CpHKawokC6TnebpTnVyK18DK2VJ1",
  "key15": "ViNYtg7fMpufuTFkSAYBjs47DAb67XCziymQyWTDz8UXDih6VdUf8D4szGCbwRVuAfFUJ6Ah7xBnEXh4YiAvGcR",
  "key16": "3XT4DahFmVaFNFsiuX7Dds6ccz4PtZDH8NwqYGr654dP1tqHiem2o9MrjDwUdmv9ZrBM5VXLReteaV6AQzvgxjqL",
  "key17": "2ubHnRRjcrRbFjicHXabSv46iqr1ik2pVTgTpuATZivRiMF7uFq3KUpvjv6RzAEyDr7STBN1Bz9kSYhEvs8GvQEY",
  "key18": "2mzAreEzhiTK7G7oeX44PjPsF52kVZrpF8QjJM134kgeyUdMYxr3gPHHMUDCK1Sj8p2XmWHHVzA5Rr4nNRfS83PC",
  "key19": "4LukjcH4yrfV5u5kw98tYzS7g8h5WDUyPJXjgPYMbiiKLNw1yszqnYd2CvzvesQgGTJBzVmLR4Xd23acaiBTLpCp",
  "key20": "2x8VHPfS4pGkGmzog8ZXMQTS6b9aSYmbKRpUytKgrMoz317dZsUgev4WQRvNo2oFy8tjX9s9tij2B7CoTi5Hyo2p",
  "key21": "tkYJaHeL6BPe7gSaFMsUzNwvSyQ27FZXeBrXEpLYX8hSmefXdi7GvB5vkVqNE5QXxbNJm9eEKC2iRfiSJgMhK15",
  "key22": "5FNseBG8hRPkJTmtvDeGyAwXkrtojnKZMhUjFQrDjuxGXVURToQ6w7cKd33y1vd51Rgy7Jtc6VYgJxPfN1kyQesR",
  "key23": "54V9BkF3unSGte9pfxsLpyM93ws9g1kv9vMqRXqVMG7ZLt1NsxvEvfdcRrwLd6zDkmC7TL9KzmHRqBiDE2rC4fxp",
  "key24": "2ZbuFiDHDDojjsU78nvU9QRYoecSfcL8nMnBDqbTodYoqT1Snx5iaeF8aooe4WHn39C1H6wcQFhECX4pUNDxAXMa",
  "key25": "3SZxjakkga9m6LgRy4Tpu6oWd4mgMwPTqDmCSxWpN1e1xMNobq6ZVKxb4gHwhF97qkYqQHUvuGC41XKhoLytPx5N",
  "key26": "36QivMwK9tqcKyU2FxQ1fsfkPyuhq9GG7DXDGBqw1HpDvZh8Akzc1pZv414qFWLfSEzuGVLUjp21eAv9oExtVR69",
  "key27": "4WiKDkWX9HXXjqCNcSLRApLU26QDSnjWVP7BrgnvK6jEex9MLzb9cSGUiDhVFP5MNXAhwJwysKbRf3xw51WDPuDH",
  "key28": "5WrFevHrxgj8vZa4PSXjGzjqagEUnTmRP3q9BTEJriMe5WYsc616g1TzKBuivnvCe2akRRvm2Yrv6Ngtuxf5qzsR",
  "key29": "4bUaTp2TT5xbmobaU7fyZMjRqUH4LCTm9v4ZWYcuFXgHLuvndk84YstAegCRwRBaL4oMQNuHBv3SF7NFWCgJDQwU",
  "key30": "2Ch9RdTr9T8P7fFuSnYiG6yJLJjPBbaHNxZib5riJbomjEfgcKoKzccgW1SXQT7Xm93A2fdfrZBLjjgGz8BEMeXy",
  "key31": "miWuZBeUWnrv9qCfkEnW72U8BSqhwg2ys88BNkGfnF4NrNLthNPYFYGosDHaDmFGXYiQLkCJSwMWXX7BCvXRm6i",
  "key32": "3cH5QxX9PCpkAcWfc1GUP7sYfWJ4ZseCH1c512iVgvJwKuqaY8vuu97YcecocmujZfgzHNkKV2YRhYCMQ9djbR38",
  "key33": "5UEj8ddHR5CAiDPQVxS2s8YUEeVW3ssPCbobacYw8rAsRLRKbmv54p91Zfoabwb9R3k4P6FC1efTxoPbcctpwXtr",
  "key34": "xuX7BLAGjRkRrwpfrEFYmA3mMWE4L2VDitDYahQxEUj33TNJvovLrnwcBxrzuLCHGiNkhKvuBEf5PdShXixu8nC",
  "key35": "5QiVBjXVQ754KAQM5iw5DxUDXMT3Un3MndJQjLoDJgfvXK5GERT5YZr8fkHz97pLoxNzDsofgmzdi4JotxJnK1U8",
  "key36": "2wwtDJrkVBMT4Fz9oLX5xKDZ2Ky1QdhWegN9qih4n4Su4TWwn2yPaRqPgdxKWqwkVE8HXZfLX6VYt2jo4GnUtwUv",
  "key37": "53SkuSGDn7Cdhnd4H2gcfDG3PsDk5ezBH4N8zMdLsZ8H9Dh3DhqJitqwRHLMWhWasWwzP3prEaLANBe2Xs8CHQ1k",
  "key38": "4aQ6LX9Qxv118e79DoueQuLhGqQDFvXGbisEzmwk99GH2VzmNFbEDTRfCcWGALfxRmuHaabFHn7WMwdeXvgfabdc",
  "key39": "3vw4yAwA3TJ4cy6U992i5vfsU955yVcwVWoQCPCwiBLJTkaM4Hp6cBQVxgva7mwdzrXH9ABfJ4U7Yjx6hzU1r5oo",
  "key40": "4hzWCf92dXTCsJL55Rcdwsj8whfN8qTdydu1oEGFoxn7n2BBx18XPBgdaw6Ez1BasreBV3Z1jCK6j8aPE1UtbL2y",
  "key41": "3ZxxA6M89Gw3h8yDqizUrUURVLHAg79nzcboyqnPj3DeWqjY5VGuNRzJPzrpoxgGAicbzcHyP9xEU3eBUre8VeTV",
  "key42": "3LNij53C9TqUrhHmU6s7TcbWTaPR92FR9v8bfbGieJJxGH4KfNKNeUR8GGmTypxbEJMA21w59VuL4gjxybKkyiMV",
  "key43": "2wXsThcWAaoo3xCnefJk92x6eMoNFXUrZrbx1UamjnKXwbL5mvkp37YbMq7D5dgRfZztMa1iaT1Zk8h9GCdEVNAa",
  "key44": "942cx97JGHPwGe5b1DqfqgoTU7oT44GGSZrLWP8ghDT3DsrgNAfe52Gc1YHt7NusRbnVBA4AWVPvRycSBFVkiDP"
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
