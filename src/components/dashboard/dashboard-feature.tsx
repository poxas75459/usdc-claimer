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
    "4ffSLafaK3m4qKBFLREYosPz4dmDmkfLRdtyNoier7KZX6wPWb7TNNZhsnP31K8JL57QT4upSJnXx3wHvpTA9jK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X1xHmecEnniJMwQ9UjxvPwBSYU5LPbZs5yFAg5JG1qRL2pSvofhQPdLtoFhMVwxqqKctgnwGVygJ1LxWgLeS1Nc",
  "key1": "TEpicZ9mPpaSd3kJ7EcHdRhhDwNtkcef6Mi8MV7Uj4SrPiaTYyb1pvDCEnqZnVxaTaJ6Zj6KaoBSaNXva6bSXFg",
  "key2": "98JGMwnMvFYJVsASB9JjwzWFfjEXTAr2LaVNnuMvn5KD8a4gjHgsdXcgkn3DgMHuQEjaHVABfWhVWmQcMXZy8Be",
  "key3": "2ATJZC3bqcAvCAFg8Mqo7nQvxVs6SUhCCUvdVTP88bBXiyniwqJDnewztzFCfhZokaB99bPkvhMxW7HPziYits9t",
  "key4": "45sgR6mDs1zp9cU7ua788yKRUbck5XN8J6MJJPC2BWRWYnGURbLQqiSudQkDkyPsLrTRkp3XK1w5wnp2A91TwhVB",
  "key5": "RSXXqLJoUB6PpXFDFGYQ3Atn6wtu3rdiJsGjWvtVJGffZ3Evg3MmxHLdLNQzDUX4465Sw71c11XRatsNMWSe9Yj",
  "key6": "5KKuU2stWUqeR1CNemXkDR4mQY39nR5wSCE1hfXyc6zz3KouUTqZWmbiod5fWRs3E6SG7ZyCNzaxRCqjLhpdByuh",
  "key7": "4dYN6HbN9j8HkNgXe5uV38cnb6zo1DdoYQDrFfb2BWCLMgk7Zdc1uWLnMZCzgKYouKaYnfrdgLMRdNMtNL2k2YZE",
  "key8": "2PKMU6gzjUq1rCEXKGNSk7arzw4Uz9KuiAVMjNVcb2buTqA1zZsd4GSGZses3w1CBAuZ2cNrRM7G5Zes2Sh4bHfA",
  "key9": "2aPX8ph6DRow2pRdrW3oehw7pnuT9Bbr87UeKGonDGAwubTtohaeTg3BuemKUooVv9f1D33LooxgVu3UBW2oCedk",
  "key10": "4UxXy5fUiEWTn8dTDbkQ1xxz1LrYwWL2uumRFdAq24wgL5TmiUPgojPExUQCPmbZqU9NnfAcMsezdDkRuY64PNUQ",
  "key11": "KCKNp1NsVNafkw8ZNv5KpxWTah4RowFwdpXomBEfQ5r1pakBihvoArc6sreYmyVTs9Zh7gbd7DJLVPCv9kCc4Wm",
  "key12": "2RDQAcesQB4dV9xk1ZfTxFJPGCLidWNCSg4VExhHacmrwcqvcaiscY4jFjfBvTjYgPnL8QeYLFyYD1pidm238KQY",
  "key13": "2bfU7G5ht4PvtUFKpQY86KqkLfRNBLZqRYpVQnE7bTCrEyZb5DnwqgFxYnymoL8YjCE49GD5fHaWDhLxudC9K4uT",
  "key14": "3XyNhhCey6CkhTem4KXvA7LAwdicj1oBqogU7sa6sMmkFNMhS2VQtQgoshB4i5GyPBiDyHprbWsbXM7xaai2qE5i",
  "key15": "5kieFqXr72AVWc3Am1xPbPWNqgCmF2mfqQRuXA2voCpJzLtYtdNm98c2ceA6ULjXpznH4wd1T5gBGWBiuuwykjDz",
  "key16": "x1mWe8GFxhmGicXCgFuw8PEMe4YWGPwkm2gmk5Agv66P5AVvvNCGVW8dBmSgRUqi7cuogrSeFk1bsn8eyD5i2kp",
  "key17": "2kwAqcCFCJsFoAe2z11dU9P8At5awb2hkkijZFcnyUF63pPrW6AVvSAUZktzrgabUk1kgZiDUMor9Ju4KdEjVaiK",
  "key18": "4FfJFHs4xT5vxRK9GUHkX1qTiu3hsrAK6DFkqhiKC2i6wMcDcQump3p3bD893zRzL36PW9p5WmjcX2UEon4Bdx47",
  "key19": "42ciRk8d51LwEC9Pozeu9rfXujpVZFupWKw2EUvqdU2b15SNSFijvqtDwgY8CxBPRVdpBHuDMqC9cte4QHKxuaQh",
  "key20": "2rwbMR4LHLYD75Kgh9zvyDij3pXVM6FQnjxTpb5rC4LXSUiEKrz3uVVtiJMQyr7UFzMuVoaAtKJohvstiDwAyhsa",
  "key21": "5TMyDqSG2WyjgpoHhvySPy25X9P3hsZNkrUaU6RPLfSVgxbXJseVkczHhEE3hpCbsVjeksXcEBx2zcfaVRbavA3a",
  "key22": "46SfB3s6yNxX89YdnJoq3czwZqf2rfxYi89NTWkKWyQZqYvzd3MvaZnoPx6QavPhrRed8pfn2TAZzcSX8HU83sZm",
  "key23": "6425MkNeMYXq47LogPU7px77U4sMy21vtHEm8WceEEWSwYm7XaynY3f8ZYgeeVkobNsYx88RfPCzYSrbw5WfBPEM",
  "key24": "ACcBzx2z1abm4ubXjQbjyeM9GUngPdhuTVPd5zahtp9L9ke9DhcQqaYJkCsLsCCndaHUVCc324QcwMNXamkSEx4",
  "key25": "63q7SdfmP2onxKRNgbfa8nRG9jUxxu4wYfLd1ixUaG3PZD9TVsdpCU8jhKf2u2ZozaRL6zdPsHi1q8mfM8ByVUYp",
  "key26": "5Jbpr3MECTxuaKZnPgtQpXZQgWvbrsK87RJRo3v5smV1HLjvN6rxX8Z1kWXe5DeTF3AQoM4XajRRDNyALzvBBw9C",
  "key27": "48qDg3LupB6LdxAbBkToWGvjr7SkZU8AnN2gAgtd8iWT1VF6LX7AVqvE8zutTMyaLJxpb32Ro5GbHBwN7ik5jfDX",
  "key28": "3d5HwANoPLrbMdbCaNR2gEWDgVEcuQisaNJptUpZU5yfaHCPmMdSxu3oUQqDf3qaZtBr1SXhekuoUbSoeMMKLyCG",
  "key29": "3w71Z6o2kLpyBKRwP2vb2M9UrbLk2154eDWLcMKgHpvx9oWeta2E4GeLSruDbxaSQqtjH2u7ZBimgZiJPuLHhQau",
  "key30": "2HMnBJVMuZqhphS1w7pUYBgVP3NVxcACgWQLezWZXCBEWuvgpXWpKaDv4zpqtmPxq1di57HhQLMEKLpBsuho31rW",
  "key31": "NbdxXH3tJjjnFmqHMzyhhYTVt3oHpENhENirTWyidYV8T921X3AS2ANJSc8YQZxdCfDLf5N6NKTQtLE8vDvs5Fj",
  "key32": "2vmEbj1CpZHExFUo2AsYiwgHKD4LewQPjFXZ7Ar41sqHZZnatFPnBsayGuQUAxNm6J2uuv1ri1shSM6bZsxxdRrM",
  "key33": "3L6Mf43eW1xjhioEDrrVmZGyQAybJhUHGH8oqwz8c48fG3wM5cxRDQR3xoAPGJaomrA9oAK6Mo92XTMZz6XMxy8i",
  "key34": "2DzfXVN7LD8mvf6aCaJS31WnarnvPMnMJiXKktmVCg2NA6WqC3D5wzkgTaYtJ7Qd66TzSpyuLLTWyPpDbVtZP8aT"
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
