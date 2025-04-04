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
    "3AdnFKrbdwkzkQrT3bZiGKig7zG24o2GJayDVwtkDgDZjmqgsfyQiTw4gvjikVopdtkTTqbvTSXGsGFhc4KyyheZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VDcup81JhAZvoctmAt2hF6ep9WqabwrLeXpP3YvPTHzyi7To2YPMnduqWBEz8qRiAxtgspLPviSB2Hm3VvpSzT6",
  "key1": "2CQQC5X3Bd6maocaejqfa8CoURDie3qYqPU9LAvevHpowhgCDshLAHqikJxvAxiukxZsehKevW9FUf2keQ2Jbunm",
  "key2": "45my7tsTG7GjVYSGFo5EwkTzjhaKig7dWeSUVZC5C2Wng4RxRXZtZpK9Nefju4hwVgFCgBKjZQW5LzvJ7vhXkau4",
  "key3": "YroV8xXsMuFG3wLw8ShtRFTg9qLKRJEmqQP7E35yzvU26Quv1aykxe9wetj5ypNUZUte8eWqXU9sc1fRTqn71qt",
  "key4": "3YemHbSpTGDP5K8Prq6Ve36fY5BvoULm2iYfpCst8eH55diQJFeyXCeSssox5cZpHDvwNULPwQHUP12DoeMVxSbC",
  "key5": "5ppcfqtAo6ePFYp2ZvpGeVdiq1uaySGsEUhXrSeB7gjg9SocRKYyrDDv1Bs3Eqazdfnu4YVqk7w3VCTvgUdyGwjD",
  "key6": "4KGEYgT7fJLJgrf8ipTxpkz4KPaAkjn5KuFk8yYLCb6tzsx4YX6pirjexSpeW2uZFWEGbL8S2wMQt5Hb9KySUX7R",
  "key7": "4pja8RoZ5TCzd1Qym9iuwPbef6wSmgSzseHJ6AwnxWopTMWBH8bfFUMGwH25t4LXTGeHzhHBJkYdzvNZnRHqoXTP",
  "key8": "6FFiqGq6v1oKDtorZ2PnQzAtWcptQMqK7Z9oDez7x7CRemN7KDCJMysz6TSzj3515NKP5kM9cd56hbaUhcXxg4y",
  "key9": "QU2zCMfLC4GJBAD3nCKsnfKthzA3H6KaT1KmzbArqczqzZzRGbNALT9WMRWqjaioah1jR8EPHGqYdYmtfBVpGgH",
  "key10": "4sBdoP9wptL86i3cR6BbGdkx7iHWAXFfn5LeksEjVwgi65NPq4LexMDR72HtwFWBuz5LjwRT8sAgRvRV9ANSP65X",
  "key11": "3w35ir4LCWcK4t3jq2jWVqkcHPMSCKNmmVFFf7dj8Tb6XVEKDgsA7NDiAQ6Myraor4rjfjuCXdi72Mp4RSkUP36Z",
  "key12": "3cHbPeVfFKQUsPbLjTemFR9HT6bq3A6eDWcMbNTxcg6ivyypAoVWekWaV6ZvXRL8QvSZuHg2Y5SWBTpYBwAoLVQY",
  "key13": "4zjKrHCc1H5911QutJqEBn2xGMinaKvJFpixUixGG65RxGJVbNZwKVDVHmpnQQ66wapVBh367RPNPssMnoxyNT6y",
  "key14": "31Rhx1x9LbS28GBVbcKXFLrwayrw22LAsraoZhf7obRdtDWdJEjptMX5WpNHiCL646kHPDsuJbuC5R3pgqyLaZDK",
  "key15": "5DptDuesQF3vcdWMrDn8B3VLMpWv3sQ24S4NtHthdRZxaHyAk8Xh2yy1oLzCBXMmMyyhN3DxtTE9Xpm94mEoE3aD",
  "key16": "4ngtKsrWajf1Cfp2NBepEmkcVzop7MdnqXtZSorqibk8RkXPNMUBxfCMgcKwgnsmJTtTMZgZhAyai8Wrxqbbup7s",
  "key17": "3HmDpHfic4m6tX4adkP9nXEveqsN2DyGgkXL6vHw6iZgwPwHLMTLJe48nDMTzZsJffHkcEUFcf1XQ89StH9SmHrG",
  "key18": "5EFquZeeKqd5y8wujBKQpRzbuZhZdV2U2J3NAaEEEEL5FmhZvEYAh6mS3hkfThSi3EsGMiGPSdZvESK1NNuwBb3",
  "key19": "3qssMCNix8dLostohA5M3BJQhrtjLaGWweogeptTn9KnMW6F2FmuahyyxVJNtHMkLHKnewESAAHW4wPmeiJMwyio",
  "key20": "3vjyd3jyQoUYUnVgYgWwK9VGJjSxPHNimmrwpaxncuuaE3PcDCfa3X8wyqKtSYEWuLU32skDFtHRgpCJVCWaEDjH",
  "key21": "3ZSvMfF1x1Q3LefpAGJ4SEUYYEKmoQ9PHoDYBhuhs5iGExZjtv48sWTqk5DtxA8YY1nTKwtDm7SdtTgkB8Cm4bMd",
  "key22": "4WrbqVTrarBzEB6a1cdfB3QJpfJpSnjEvyK7WjJEzjkSXuGds2mVG5utyV9QzcdL8yjctZSiJ5XD1cmB9em2BXP1",
  "key23": "4ECi5wuRNcfwLWMxDMoEbwPyy31vPhXk7daMTg23LTmGi1AH1hS136SCeeGLgYHSFpJV9MKCo6qFDkRDxMraLJfx",
  "key24": "65ZQcpkiRXbWXLRYDVUCqDWbFnEriJBcDmG3BdKPhBzTMQrcutUcGodiQQEqMhYcT5Bn8fksbEgyDuAHTMF1LT4T",
  "key25": "2DLwV9sdW3ui9roFLq37FcZcaZ2gfeFaCeUD8s651izfa4t3JsYvEMwqvvzdAJF7XJHngKoJ4VbPkttZVLCFsuAX",
  "key26": "3g6Bb36na2jd88mU2yZWU8XtQVeNMoLYDPxDn9bnjgTd5ujR6HKbKGwtTgBPFuNPDKLrztSx1ZFeZx9dsoEfvHGq",
  "key27": "5Sbh93mpCzZsFy4RuyB3nYcP8LrsxRtrtxDRNEdg85GeAxKpsgQgpnJVkzaHjkShRyyggMBZUEr6Y5V2kQ5wvKbm",
  "key28": "5cGQrSER8yEUXQgkTa3LfDQpUzx53BcUDX9FN3oCDL5gv9HTqPWcYqcFCiitLbWbJjD6HRYvTW8Ryys1keoEwJ8",
  "key29": "4uLUgpgLCqD6uy2TBGpXFGcqbjDxPu5yX8XMrdBqTuyJc1JDiKpusfCopn9niGg4UrQJL9feCxKaiBBEyx5Sxst3",
  "key30": "2FMpWfGrucvkg2t1KVQbKTrckacbUtKbr7CY33MqEnKEUv24bGF8yQRhkfPizWaVYRBHBvntD6kaKT4gAThxpauH",
  "key31": "2ue5wE9kDLvSJNcoi2tqXVkj42NBQ5ZyuDmMZwMvrYXGbPi3jNaESCzbVNN2xwUsGVLFeewm1sSJEh3PixRUy1uC",
  "key32": "2Gt8SMJFuagVDUhA5WMk9RqXjsjYbiH2yauqxSKj4YUf4sX56Nk5BBr8ML8sCN1rjvsJduZ7ajfntT2yB674gkC6",
  "key33": "48nU5reT7oN71VZVihUcGffTtvT3YB74PqMPpZ45L5TJigxhgD2j2EmtDzqE4uGZYgtX7QzMYZBYaiugGBVUyt94",
  "key34": "NJSnG9wGXr5PAZK1ZLzXMB4EWdF1QRNXxR6oPBPYbwKueRbFpNSKCnjmoEoyuB5b8bWejrYjfAUtBo6ZigwzsZq",
  "key35": "ZLRgb6Fn6jQRQf5WQCd4B2YTqb7Et8zvukoGXqoFYKMpN6xx3XsQ9Dq8DHSU6rcf3rzvutFBdiwijs7sat9CvDu",
  "key36": "2ej5kodkYjrS3TtdoZiNREHeESg26GxPeEokwZ7dxZzgcdTb8cEsYFNTNP7LNBWaAAJsUcERiv7WcxuzBQycNwCT",
  "key37": "5cW8a3LUUKvLnhPV5BJmJMiYDHsxa6ruZ8WxZ4kLbYPntWtByEhYxwoV1Jcgtf3NmkY3xGQVfLGXy9xunitU3ghw",
  "key38": "4CSAixmTNGD1FXKHZeTDsFX2dh19Q657TUfL5TBkGrVzoChqRcMwqD7CrEUFnGnkWtPKr8o1paqATmhkqRRoEsyF",
  "key39": "34T4HT1w2wJfPa687rFwnkX4emPpBPGVDGrHHqiyeTZHKSZq7B2gtxQT7ThEdMGSVEV9Sdv6YzHcf6EdmbcoiNY2",
  "key40": "4Z2iQbYkmcce354JB8J9ZZ4LrFZCPurjmDoXPHZNu1deJDaGHUQQ46UEJAGzdLZEwArhF8GVXVnU6C1vH9uDcez8"
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
