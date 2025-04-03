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
    "5xy1xBNYbVim1UAiqyPTKMFQz6bN2HGcBi1iWhMBjCFBL4kWs3sc9ndFfwPTPEJrHpB2SYTG3L5rcSLhavWciSpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VGeJnzn8yBfDUXYYjSXZ3GR1xHSh1XZDgq37D1W6t9HmLWXohWx1KnEi1jzieiZPS1WMhv8pPaegmo8RCa7zcTG",
  "key1": "b9CaBFnqy9mbqfautmd8SPTo7FJV6aCfUL3mYCnxnJFUKtkbJeoAohUz7VXW2cymXJ1ZpXpNWQvs5riR58BLk11",
  "key2": "3vpr2DTNyHQUnmUnbDFJey3jt94LVdNN85jmd3zJNC8jmXagK8M26AN2wRfERqKiaFenRNfyGTgbnWVeMTEnePbo",
  "key3": "aJ1sEafNPcg45yF4NUf88Qr1MsJ6DyDY9VzEs8k7mSnsyFhU4TJTxxVixMtQy7PjF59QMq88VuPYUeLyaaQMEA1",
  "key4": "2ibME4BH5xeFymxEUq39nPyvmJqt7L2hNEmeLpd5u8tXATjE4DVH8BJQUo6gSp8mZwNq6cVLmmJHvibT2xWzktnM",
  "key5": "55ALPVoGR6UFgKVLPdAh8UjRvUogMzVFN6pUw2tikp1b5zrwjVBN3xuJqciTohgy8ERCTM7vpuhiraG6qyTo1gvs",
  "key6": "5Y1PyqMcbi8r5dnVwNLLcj5fhGtWLgLPpvJevVtWXvngsgeYTTvTGoFDLiSgsEHj1AcABdKHzGwmrpNaVCyfThQv",
  "key7": "KhmZ6dxgXPcdZK7mVGdqEJ9SzMoUAN5WuUBHx1Q5ix4zMhfXHVMdx4P3piFiRZPTCfCqeSfHMJj9zHCsEcWAMBn",
  "key8": "2UAXQDtk6DLwaBauTvoovKDMNziwzkoyvoq1ZyVupKXaMs8QiKdu73T2tNxUkYrgb4U3DBsCtcwLiXXWSbDFfcAy",
  "key9": "49LWTQYMZCkDLYXhMb5CMjbFo7BRNcMRvwbgVFdeG1Upy7t6UT7EPBM6JMYmrSSg6v716kxnEoBPkgJ58WLVCmvp",
  "key10": "2uMWm2qLTmgQsZTohpoJo46drf97FCZcdWmZCiP19UrMZGApcMND5WKsxWqjR5eRVeaRrYLXGZScztgwjPLQdoKP",
  "key11": "5R1x4Wj2dyueZ3JGeRMjC2fC3hrB9FoEzN9JVYeyeqxy2YddY84qppPN7siC2HZdKiE1rYXkcdNaubtMWMp8ziJn",
  "key12": "5GaCNwXYZZrGw7LUhR39neDJaHNizGoszZc8SBKz7iappYPAh6gFb7YTEQj7t2AtFwQR4XkeJJZxun9a3w6f2xsP",
  "key13": "915AH2Vx3woqLrQJ9wdcMpsgzozjCM6DZSwBg5u6xAwxPkq9aPgeoHyey125Pvs5mpJRsagvaMrcJb2rjCnDh5a",
  "key14": "4Vd5myn6CJd2vgAzA7zqCaYD5pSDK7QrViHy8XG8n7C5BoyFqrUmeNaaqm8LX75g5H2vvnKihya9oBMRyWbS5qNz",
  "key15": "2ZKpSSrAbdgzRtQxr1iEquVYQhh6iAuirq75ErSQGMtbLLkNRN6cDKYpW6QXskx5ZRqxUj6G2VeZkk5oJuLFotmA",
  "key16": "36ZpLQ3474XNf44urws65PR1GwF5HMH6emnYa5he97HjRKnBSw49vCb4w7nsc6RbXmbr2QqN4kBCd6Fmv78yAvbt",
  "key17": "Bo765iLcUben4h7Kw1wLXZQN8Y3XuyTtkXJNtn6HpvM9N19u9KRUckuym3waGANPyizK8uUdx54uBFCUhqsw1PG",
  "key18": "2e2CBCcBG4JSZTfCyfBKHaRzkyyFiM4HRYx6RSWKwT9KidEv27RyUYDFyPBTDq95s8QKUnxaSmG2GnLbZaWzTKSD",
  "key19": "2B7cxVf7kyByVgGD2EQKW3dvqz4jzhcDsjLFng6LUixasAPfeAqK9yy3o9rcRwxBLvzkxF9QQyESuT9xN6gNPawc",
  "key20": "wAUwnmiLXMFQxjvMgQ7eMz8o4Ddwjzc4xnJHxv93yboTLCXFwdTmZ1WGmtGoF2yBcBpEX8vBQ6jdqHgaazzkei5",
  "key21": "2VcTVDAD3w7wNB17H6w5qUvH2yGLH2pwVUiuDYFZw3obuP1RiXusbYfnEW5vpSgCEn5sNJn99qjr4oi3TkMhL15P",
  "key22": "3Nvr71FzBrNtGm8L1WfUjCGJNndpDbaT3k73HBFNK3SqExfvSsKBcNCbkX5bdxv8PCpKsyxdAMv3hgKBtzZSRb7b",
  "key23": "5LvKPQX8ZiZNxB7LnhhpczvKpQUbmwEpim5nQDTzxyoZwukiZ3yTNMJawWFYtRNVzJSx8vb5ZniyavzEKevTzvVo",
  "key24": "3YVDoptqN3AeWrPoWcg65Y6jsEhUAJH6C1bkJrS8YeDDWcXbfAcKsYBip1rrqpZygucWhtAM8eeATBU1V7zt2UPD",
  "key25": "3s9a6gSttPM8m5ss7gkHC9bCQ4jgUsd3G7RNBxjwd5EqjntTkH1e48MukWSghzXDmoxsFqsTfFTdhTtvWU1ekzCV",
  "key26": "5B6ojdzJpKbkuETcyuQU9WmucTGGAhAVMfUg78ZFaW41dsxWcVvurtQPdGWPWkwDNbreN9NTCejc6y6VBM5EuMU",
  "key27": "4xRFGciu2aS5pGxnrB1SpR1ymTozE3Nq3zC8vyMV2GnMEjW7waYc1h6fjSvgQacEFspA2Ux31K588qwdX41TQY2Q",
  "key28": "4NhQMXpUxSifcGNU1PmfdAa5pZNhyCVJsSkrEnJizaZVespvnwbkdXpSPGyNGN5RK6WuDSgPWkardYW3rBvvijYw",
  "key29": "4P4XXdruw92PPLdZHQbe2DgrJQk8nkFMvXzJNjJ8Tx8DP29stCxyrfeR1vw5VjaZ8w4RsWMXWE8QFuz7Y1sB1H97",
  "key30": "3JvVNRDjqEMgfXScGYc6KrLYbGHKW5XEQwBC2UJtRBPXSPsUDdPufB9a6zQyKB6EKre9UcFopGhQ5mHRn1XrsWcY",
  "key31": "2zTHm9eeXrPuDDREuSWctn7wVppHbHsgW1yqW9NYYC5MEtmUYoY33JHLbiZXuzAL9uoWDhv13L3KtED7yAX22zzw",
  "key32": "23VHwHnu2g9Nrt8nwaM9YHKqhL4yVveAe863HjAoFAcqmmWgTaY63NH7kRHN1qkhxXDxXdae9ASrpBNQiBCcu5w4",
  "key33": "aFPVw4mR9mmmMNhHw3qsu9ANAMGrPKYyGjxVQjpQRCPw6yFC171wix3n6tA2hC1pRuVfb19S2A8gaSdpjffYAWE",
  "key34": "21uLVQiUcbz3nKYpRdGZhC5BLbRpXycriwUChotgWYMAFjXMRYi5UZ3BTxbmSc1nWDKwK3qR9Eut55rvf9h9XeW3",
  "key35": "2DL95jy67ukvn1tExUAdsCwEpgVjaLZ2sN33UtEa1Z5qSqbFo3aEZHNCH3FqfYD4xiHs6sVYvrbuydp5juVQTvrK",
  "key36": "rckiLFbLJQ5Po8m3hiYnktDe3cxRmjwkY1t3XMTZMmvfKqhLP7es9Wax7RwsLuzDHvcSswFWBjpJgAHWcAReqZ4",
  "key37": "gHQ4LveWTcVJ4qAnkmgExw8SYCMqNr7qX5E5WQwpwh8ScDxuRdLUSuNbTUajjLuJkcVqKpWAxXby7QoLKLGuvJh"
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
