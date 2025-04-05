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
    "2bXqdWogyYR4Fo9dMKLnrkiPs4mA9eqZeV6WDUVi1xi4U6c21noVQexXSMjxk1spjitvkkvoQZ59rtmgydAKBLWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sjCqukvL6qTD1cHGS9TvTWYHeAzvJN4AC8qWzUPoLFs1tMQPdyVDkyPzL2w9QsBgUoSjTrN1Lhof3CRtQmKnRoX",
  "key1": "8SEijRDXy1nnggyC5RudmXRMwrtVvuwBvTagRMSDAMZNXVxJU2HRgTqHU3E3X7TmstpVozGmJCo3n7kwzQXaWdx",
  "key2": "2AXj5ySF99YhdfdTR4dTaQSNgv8AAcJ3iU7yRVfHDzDjFKf5siUd1ipENrHYqzuTL6jdtrmftP1suqLZcHmCDSY9",
  "key3": "3bFUhJiNncETpVscKBJn8SS7HUttJtx6KGQnVbQdtWhKKAhaAM5YEPiu2o4dfmcYXRhU2KyBJiCTqFdo5Ja8iKr9",
  "key4": "56tyqW3WhbRTc2kqd3uAzhesJfgmycamw7stqomPA2BS9Fx9yK6XbG1Yqt58C1m6K5rmJ8gVE3bftQrJVPgHycfr",
  "key5": "3gPayYYvumSGEgu8zedkEeo4FYakWiuFdhJXQgnejcdWJkHQhTUgckZgbDroo9fvGLPXg6TBKjSo4ECDdr5qDexe",
  "key6": "2S8xVqR2kXkTyv44r495BcocXLvuz4KqaJyGyLZcTYncRPMvBeAtsokj2mFSdm7twxyug56UC8dtFcm5xBHc5jLv",
  "key7": "4XfxB4obfB3mFUwRM65YkfwyuafViVsYiBNDBeWM8GNBMwAStRn2u9ddeFQhuUYkVeq4ftVQiDYykSAiz9qWk5yb",
  "key8": "4R75Vn3tFcVjcfxkLEnB2Rep84v2SVU59L1yfTNT4EVhGn4VCWSFL1dFZQQB787piSMZ4GXeJWeXXBr7cFJG92tr",
  "key9": "2YVvw2iCbZGwNMCSpgeLMxbaDNmioUKkL6AXvJYNMpYJwjbb2uTwraKegfh4irhThRvVmvUJu1UcGFG6tn8m1BA6",
  "key10": "9cXfQNwdDFYRqWKgcv4wf295Ba4u7YKLg4HnkRVVUeb1yCfJuJ2rZVi8mwsnF6GVpMF8jFUXqCK7itygakp7h9c",
  "key11": "3VjbfejY3honJkZturN7iFQ3nvvAAxAdJ18CeYDPySbSZEU1kHSGW8Xsi91FboP1PrDUFSDsQQXyFZea1HHo2w37",
  "key12": "2RQGUj4PFZV8aqbE2aGdRaeTPYZ1ydkNpnBDp8PbGE6uUXSpnHNzcuXjh8dgHLqQ5kH9mA1JLnDvTwdSutWNumNj",
  "key13": "2Ap9kfdqJVSWvE8jNMPjuR2hNAriPKzKNcEQJh33g1XV8scAA3u45AWYcPh3JA5BnFJQpVW6SMMC7sxM3KxarwTp",
  "key14": "2DxUmkNenccUdkwvKDtYRRZvftDcAfuit5Et96uc3DfBpp34WPmjHCoj93maYm1haYp9ounML1auzJLnx2RVkGpt",
  "key15": "uj4JCCLBwiy2V2U7NMLDWNwtD4dk93BzGpdnqPKwMn9Kaop6aH9WNj8TLhbBxm4xYJU64cPK8trA9MciA57rqJa",
  "key16": "27qt7v7eV9e7gYSdbYgDMHPzzjGqdfHx4mkQ8jboaEmBdPSNaHc8r6jk9YxC5pZ3Dbh21tWNex1kuUqGB1iSXCXW",
  "key17": "5paHsyGFnuwRgWR8kPUQYJFT66DJDyJhnB2nYR8tWR5wsN1ABp2WcMSaMbGDe7v4sGqpEryW2ATbU5Bn43on7paa",
  "key18": "GbvWH9nYQt6TAFFrB4519bGNNq9zDKmJzHk9nkVVrDHwgMaH9zG4RYX7WfYDrQipSyeb34Zukdgewhmo5wScfQM",
  "key19": "42huCVaS9byhXEtZo7bnht2fagEr856qBnnEgrNKuAckNDN56TbQ7Wupuj5MDLnMRBALHt26UsEfyiGZKFB2yK3Z",
  "key20": "2zYNmsij3FWht4uJ49RmoHTrzrsd8sGtZErt5E4DJ3E7xk3NJLkC2qmiaXz8pndgAPYieHf79W9B9LR6b3XKiruT",
  "key21": "48ZhytAiAtNdZ3FKy1LSGqSas6p7saR6Wev9k16MxDDSrwskStKgG2GtJkKx1CWrVnajL1FZauBaCvsepJBcPVbM",
  "key22": "2FFV6TtRdRnMnSTzYixP9usjUSgCsre1Qy5mtLgnGTwLpR3Qtys2Tg7oB2bFYb2RjBbgj5WhSWsAzZf9DW1EFmLr",
  "key23": "4BxKczZsBcDc1GWUiCWN4auWaWyJfwHfHv3QhfQqv29tYRsijHCz2BV2UdFeXAKGdoU3TBnAo1Ndrfn17rXpmgdR",
  "key24": "39uaBDYt1Vv5wG32Zn1W81guARKr9ujyqKCvoJNtuD5PoAKzHqSqusJxthz2d5NUMj6XXz3w3moHxost2rmyenxZ",
  "key25": "3w2E9z4jAL5dGqZRTd1PPf4HRBdnKXAmSdvv134VprDAT5KJh7sHMUrHiX4mUNyNAGwq3MGm9gT2H5ekeENvodLf",
  "key26": "64b32ZvjQrqi3t3cgYV5Vdc52D8EQwDPSDzhV7gZPw6LoYVz3a8LQHaTnQ48MSVSVSksxXErJT6VwYxBZEmQYRcT",
  "key27": "ezgCnqQciPi7eXyAA4phHdkkVLPd7Pv6KFBN9cLAjT6EsbxAgfXcoaKjuQ41F5kpErT34k1GAMdTPLaayH5RCso",
  "key28": "iTnoBjTFuDpdBA1eENw8zZzjjg3PBHV6TvFGwQSvmbTdQ9PYcmq9JqrexTmK16krjJDTskSeXF82tz9GudHtosq",
  "key29": "5JE3khVNex3j7cvCcAJWWT6hwycoCEczEmWWEn5gBxCNtTZA5cDZKCnu4PVsyrz3ZeR5wcq87FWxdpNUFaAECdqq",
  "key30": "2CdFTH2GnudCL6Tdo9VMdUuj8DnYLnFQsk9qAX282BPbP1W9HMdkNZ8njLoiaQL2M2BtAiXigK6V8aFaDD9ezXKK",
  "key31": "61Ys5KypbtuQVZHzQxf67jCxNV2wG6wUBVgzR3g6b7uiWQadZ5oMS9hCD8ASTbg82yyohyLABC9PnvAMBNT76Wvv",
  "key32": "3wPS4Dnbt69Qrr44qxRE9b5tGBJnYoS2FAXLFxJS1byQaYsVHpPcQ8VPqRCUbwyGfKaZvsvmv7Pc7286JF6Y5fNe",
  "key33": "ymDpTwHrAkcpJSGxQGdf7AS5hGgBcECDsnXMS5YwbcvNPKS7HFXfWRbFj9qqQFfB5ob7mhkMSSK7KqbGy1sRX42",
  "key34": "43jfgD2JrZB4oTLvgvNVhMJ2ayD5715GUjrE8k9QYSFDv7dzQZEtBGCbuu51sk7D4Jqo7kofAcU2C9yAH3Emb7d4",
  "key35": "2RxV3Dx8yhW2ubVrUZDtfzDYjoNYmyERPecjzYkKiPCbVLTc6k4bJSboqZ9YoXBmfu1fDQov7m3qLWtd9bpTxomD",
  "key36": "5mzmUEcUCYK5jkGTNEG5nooD6kjCJLv8E9YEg3JT8hCJWPmbeveprrSsTcdaJ1m8oq4tf8rZfMXPkob5do6w2m5",
  "key37": "2MjJAwuCxhW7bsn4MFAZB7eLXXDa5WmtUb2i7GwdnUHo7JG8vfKXpcSmG6eK6Mej6GvQJKcfC8ath6rQSZcd55Z1"
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
