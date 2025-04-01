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
    "d3que3iNZDrwcnoqH3dB8e1ZWHCic4JbqCPtDJUwFba3N8W2pDLj3wqwhA6dhTwSfSSYKijjoX4poLYptP6i722"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jTqdcesj1zZMmwSxmsAJ24EWY8dN6ifJMmGHW2WjTVzznTvjkML1awtKh1watgeM3Mz62i9gjE46XR6kJuSqxmz",
  "key1": "3JNTosLFhwZGPJp853o6Rw7SuZ7Qb3tscNBDpKjGgaqPYWbxRm2TFKT7fenzZtGZejXh4pNkf4pVjEEA1gQDVKz4",
  "key2": "2dtSJii8ymagaNdLKhM2DgeujdMEVb5D533EgPnnEpsJ2Wc1Zg9phHSextX3XJZMmy8hLY3guUD6pqdoNn4ZrLcp",
  "key3": "5bWqJdZTaBmDeqcjtQGpbxMvmeAZWHEMnFfd2ddTKzRwgz22GiEvmzSBrzfVpHiDbDvdogxNy7Gzq9SsxJofkk8X",
  "key4": "3txkedW1wjMpWUTCbvSpfQpb21sx1t6mntR9bEo2xpFzwU6AZ8jkLgArqMxYEzEPPAdkDSHQhX7LtFmvnPNcAsfr",
  "key5": "8D8myobFVCWPEymqoX4hEKAivAjfcQVJkv567uYHuBKyAtKFjgJzgTP1MzdMKkAnaiWHsMVzTN9Fjn6Q9uhKUGY",
  "key6": "59samRru7WDMaFHFjFKNKuj1TmX15kUgf2KYHpaoqS2qn76Ja9z3byqELesAfLVgx8EXCCkUknTkJXjNgoaeRTuw",
  "key7": "2WyQEo34wiQ6EHHL6r7oqPRDJrmj9EW8QKt5kZxBAeDSbABnKshfWJii7az4M4KMLiHdijETSvxbLpGRZYf44MGB",
  "key8": "39idRaYoZbogzwq5W3jbaRwaed9xHv3Zun89HrgqLDohCsgQKehQEiJPbuiTvBMkVx5vBcptcr8X6kLNaJ5LVWkc",
  "key9": "46CnzC7c6EE964NCANDK1oNzD8SmhtT6g2rYAekB9GffVjrjEwBCGQK91exocTvEbtQGV8ty7zFxJT2aNZiJMtkh",
  "key10": "QKP13R85uYxzPGJxaX3zmVyYp1nxC5jr3yrZgm53mbuU59une29b8qaRgfVUJKJKQqtfSdEX1CBpuq9cG3bmDYW",
  "key11": "5cbzz7oc4PmcN1vsnHKWWhtym7Td2c5wavEkzbktpeqrzQH1iugZRU6k7pQM7uY9EHf1zBY1kMJvmfsSxDdTHXKc",
  "key12": "TT6qFj3uJ97h6cmg4dSm8gDvn9up2LUyNhWXcQCHeq89y4rUSia72a3LqM3a6jkEXJmyMTZhYEajfHJHRdfaHcm",
  "key13": "5EBhzy4MbvPdn4kD5scW4uznhZAfSYuEEDTkDBwJFnh9J6w9GFkPf71kpw9Rvb6iPiRq62L2o2zsYe1xuFyKMdxw",
  "key14": "2fLDGKQX6hVdFa6jaZ7QB38bxqPR8HHCEfY2Vyi65C2wCQEqRPAq7ouPmGjJ8TtcSMF1utXcjSv59t4PoZfUfk2A",
  "key15": "4hyrAi6cYW7xxbrehPPTiH1KJTPYqxJsjUsaYE254FtjRrvtw8zwNRbM85ofZupmhWeA7gv3BbZWNxZAq7kNm8Ue",
  "key16": "3fEpL1EeEvgU34wj1QxJTKNhiTZzFHdjHv2hL5trhkC2RmNenCgbMFAHUUFLfwtiDhon67JkGEtHmDhC4S4Zrgdb",
  "key17": "6EQobXscrAfgnBJ3j5xRFeef1UtapRWevBZpxb3FRPLSRRwqYtSVGBCn5qCUt76Qk8kdqxZSrfLyKztjJ9WXYfE",
  "key18": "2yjR7hjKmscv9Z43disi6ef1tEhkHQkXfSEpouNXpJ5sU5DfznhcCeRkDkHYDE6mMFvtLRW6D5UQWAiBn37KkXcn",
  "key19": "2SS7PCeFMxtndu1cMcYgDJFCyc46tqPWcGDs2TZeBQqDFQyXt9Jq56WKRq9Dh4Fi6zovSDn8uY5a9K6YT3gzDQ1J",
  "key20": "3k9mDuSsCKoZc9X72o5NdiMaxJt2nHXLna91R5vwtoec7HVyTp5REe1DNh9fSjox4dFVe55puZpegFM3ysSgK1mJ",
  "key21": "4FKiBujco9YHZfC5m5n3Kh3YzEsCh5eTTb2WP2NfZ67YeXLnBw3rc3hnNP7oKY8QpTXTFXgvEZ2MLsvT6KGdndkX",
  "key22": "rF75wXCRBK2zbNgJji5x7nEH9CncjafWWKJjdNZjScGN6FzYGrsUX4dURdkZD4C2LAtG2tWQJJHa6nsUP1edU1x",
  "key23": "5WaQC2ju9FHBnTnVPbRVy9SNYQYjb32omJDRgtWwQtemoyoJNsxeHe9r5JnQjoumKnGQtdDrRf3fPFkYRTQRD54",
  "key24": "5U457MQT9T1t4dUgRVYb4kkz5jPcNoMn7DUyyDxy8PK12hsiYxNENuqZezX3D38jQECC3febqREBtP3Wf28ZGZLE",
  "key25": "2FZHCSJ1asJsU6MNxUkC6YXs6ZWc8chNtsxwHN1trxvQF1RVcRFHbGa8AMyBAxM9TwJAUAEcKGsQ6guTW6Npt4mz",
  "key26": "3ypADpSG38J3UtsRxEXQzTgVoNsejxAwaaFAkWvprvcNASMTtiMJqcpZF38kzDjMJF799ovEejipUKLsZwzNrLzT",
  "key27": "35TdoMnJfuhcPdj6iE3dk8Jp3wCUgvEibXUGfLQ21eJA7MVJmHTGpgKPqNiVnd2wDkywFMBk7mGCo4hXhSRNZPiP",
  "key28": "2inSTj6RW7pRAcibDy85tnQayWj8KiBgkyKc6Lu2JbgVKw9t2xnRCabZJm7K9A6tuTgTvGLwt9avw3zcJ4dupuT2",
  "key29": "ADSiSgtuasqQRqgh8T4KMngSoRg4yTDYhLJ1CW4K8TP9sZ6R8hrbmgAxqxhVGW2q7HHbkpqFBnVBP6A5ivhCxHJ",
  "key30": "4XVgNeK3bQ5Kxf4LnFmp2hJvHQR8kCbW8zMozjLTRh4AY9D9Bmn2bpCtvAtw3DaWE7cY4YoEWgH4NyGFZNyCTRfz",
  "key31": "41a7Q7P98Rd3S4gtFcaUPFbvmhqkwpy1gWvbMtkgyWkNR4RNnfMMe6z4MUNXMuwaABiAiox4G9SZjF6sp9TAtBNW",
  "key32": "3DBnTr99pZDx7WJtAPbQKg27t6gpQ9TDmxa6P8vtZT76TtavCgdp3QX6HSq25dWAzbFh7iM4ukeKM3daTaedJXi4",
  "key33": "3P3TPe9xw7UDpDPGHZwSLGUrvP8CyTPXo4sQ6jT5TcWxXPTsrBgB3dQpMMAByTtbHo5HmWELkPWLKLDLR2gn9QAf",
  "key34": "4E2osf4xVgnVEjmscARLBP7Pi5TF4mG3BUXShR4eRr4scjEk1KDDyvnyCisjqr5G9qmVoBiXMwVDEi9bQuCVSZGX",
  "key35": "4ctRCgvUDy1o2BTZf3LFKZf1x11DgBdxBkLD98hnJLKreDuTGWHaConzBdcHQ9LSD2HwNFfVKpd5PzxQ5G29UPjJ",
  "key36": "5XDWmHEwEDbza51hnLKzUjHxvMDSPjNB96RDLGhBLx9qaYwJuuc9jtycU4Z31vXnce92JZxAnWsdNszuiNQLPdDi",
  "key37": "ESfwA1BJ5ud72jntL2BBkgW2cJYbBtnA7vw2S7BKssgxxDt9LkjdQajfTC4NBrpCvwqk2mkdyWio9t9gMHaRqtY",
  "key38": "4MoqVKLDrJzC1W9NCuzUAfRHV1uco35UcEgDRug5JyM7WPGxuGF8GuYK9GKx4HsKB8wXcH8dYufrnaXRdnUuS7dF",
  "key39": "4fiCUovppB7py28f9xuyyZpiqXiXX1P6XjRSSVNQCVffbQFMEoPL1QiPx3snFCfa5abibTe3fvg3QRtmkQW1vyax",
  "key40": "3eSTEYuNrBJTEK86FX3GHctKJSEnURLok6XzsJHzMV2Hze83fxdu61hDzYHvP5adnHAAkjjzw85mHszx7nYnYMLw",
  "key41": "5iHBgBvjKvjsApETwVF6ivH4FsujjQhisNzPHVry5Hp5xvQpLFMCCen9rp4EZ6agwFawseaG22UzkXiTsFbn65tT",
  "key42": "3Gmjm8N8NYJBkYu6398EPMEjd3gej9xkThAorD3B3BEJR9A6KTfwztvdjhKwUzjAhNcm9fCWCF1HBbqHnhNno61X",
  "key43": "33DTtd2mRQyDVX23cMACkF1iz6vDsr3iXgSQjtSvBPWkbPQS94zX23JpzdsY8zrR2ZY6x6A6h7CW2BUPFuKnWchi"
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
