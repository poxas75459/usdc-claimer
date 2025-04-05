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
    "vHYnsaUaqH491Mw3hPuyLRKWxEqGfJqoS931iYDRvMjbtgof7M8P6jTEdQASrNzFUGLSedFK6iYvmQZMoXuravJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fCVax22cfZg958isRZ5JQUgwqtzGR2Q385AcZDzaFW1JD2CJrZhMh8jHTMSNPy75Z7Fgf6WJXfqMWg1Wi652YXT",
  "key1": "2g8dtTeFeXN6KhDt2ZkoEKeze75cb3mTGh4Rjrmf79prsTHgYBvxwXcuYccUjRcXCf7ZBD8jxhPcbTLVZ18H111H",
  "key2": "5rrN2HnRTLEJvPKoxKfXYMxkPfo1q5mGhY8XBY7xLAvAwjdjDTskfTdYFscuqVYRiCyCE6YrCEoMh6Xaewgx8qr1",
  "key3": "3dCzgPXreuxs6dfoCj1Qtmaq32RccDDF71kugYD29YpqZaxZ2RrvzBMuHtTJEhGVF4QxfFtCyhwrfHnM6SaPGWS3",
  "key4": "3LbPSrqzNABgpYPcywq4jngG5qErbi6zypq9phMwTG9HsJbDRrQpHpe12Q1r7jUGa4dxhuhaHd9qX5XVRpxwtc81",
  "key5": "5qmvBrvmiJqZNFdFJkPEFpDcatWzCfsNiFaEWSBWuyay4ovfGfKS57YsHrcrUQ5CFVUJnF9CSjLJeoxkez4aoXLa",
  "key6": "3h7kHuuZZTUrvWSATVqpqCfCzkua9ppDfmQQYtkFYysfrRcA44hHkD9Qwt74SqA2iur21CwCTkcWhhuBp8EsGNDX",
  "key7": "7pzT195rmuDnDNZLeoXnG2vvgNhe744vve7yX7tqiHhj33H6b41fZgoNht71YbkFHWUYHW8JeE2S46J8WEroF77",
  "key8": "3mEh25jugGcafkHWJ8ErFTQK65Mdcn4h6waqNLeUH7dfcBYsSR91KFdQaDJtFom5WLDmjyJd1mrPZxLSeyUtt44Q",
  "key9": "2HYfxnH68pvs8VjZYq7Jnqr8R4SsqGTgtNUjVg1jjjy7hqk7xWMMy1EjaNHqq7y4MzDSzAm8XCr25xV6twPcF5FM",
  "key10": "soWqcyn7CBCNGXdy17XfkjMsZYifnjcB9Jk8dmygRjfEZWwpduhei4k36m3gyLtDe2bFyiKHcAuo5eiBY6fBbq6",
  "key11": "65kc7R6WmzScTLq21cD7DTNpdv1du6DVfqkkTH7sbjDuUr3nmxFqXCzwNQPwn3u1k5wckTMxJ7EFEWgNurXeccyf",
  "key12": "2QKzvXW4gg6CH6fyUHfLTNyS6BCZUUMaYNK9p8hWZnTHm3z8bzQnx1Nk6CabujKQhhAYd9LnvE64PaZBqL3qT3PB",
  "key13": "2w2VPvmHo9cU1vwZoRT6644QPj47fgh51ZHAt4wBMRfTFJMZQLsVbWZANNtzuriRUesNdVGHpb1fryLu3JeWxTtp",
  "key14": "4vAog4Jyh6DYwJ125My2NSpB83U9PPvPNWesgqmX3ExQ9EJWhzyBG5oRMNiDDAJMTQQEEVNT3eC1SCjdW3ZnSuiC",
  "key15": "34LvaafALgoDjFPTDDSF1hW4F7f551T7gzXQPyZ7UGPC13rZXy9G9hjrC6YCaPp1VeFMjeYTgC1TMyTDBQSgi3tu",
  "key16": "Vs6XKfyXHSeLFVZYoqtW4FBUxhchEXPEML3qkE1H1iibBLQE72SpqDpSSEu1r7koTMNsEVRyzU4pdYBsdaQPYYa",
  "key17": "2kDSYLyw13mwopbikM3z78Mi5L5fbN3PtjgMzbivsjP9m8BxAkJH5tMYhE6BUzZxjjTj1uK3yRje5tnQpB2G6G6j",
  "key18": "4CQ9JqMCCuE9eUYpwcQLw5myzEeLjSPhap1CN8Ye4JqrmETDvuDHMDFx7CFM4KBRoJsHj434rJ3EJmNok6bM86e5",
  "key19": "sBqFGsftcSdgj45zzug3TZgUGPYzspZCtK3BZEz55DD2cc5sX5LfwwS7YqR4z6y2eVKKj5rg8ocvrXboRTkygjN",
  "key20": "8cFsKufCEJvXM9XR2m2N4WCreTisHb6RcbxLYpeQRNsN24mxtTHT42oKdiFg4NdtMR7YJoGRZiamUXKMLwaCw78",
  "key21": "29wraZTwdWgBV1Gr2egwT8yqAvhAHosFbqf6xLZXCfDUtdi3KB97QrK82Xu3vhNFQrtaVhTwgvwp8uLxkqfdJueb",
  "key22": "3FP5XwJNrJkMAaCz78YdHwCogkRcVZ51nSQTx1o4uQmwgbVZN76iqh1iVCnaWgmEWhz5rqYtr1AP4iDSZ2ULNojW",
  "key23": "Q1muL7rLLeYvyoAscrao8oQmER2uqqc4hUaox4xFZCXw57eawfHzG5Y7VL5rdhj6hVy8hdUFh7DDuTj9Nifp7hi",
  "key24": "4akc6FCzmiJ3oaSfetaJBUn2v7mJ7rg6vpLtU35UZqLWu29iiXWkyhtbAEVAnDTeSNysezNqa35U7ag9pqeUaqgA",
  "key25": "3ori6KYkVcf2xB5BgrbCiumHM68pEKXJYxdsTcNYPSkWQ5TLddyJT9tLu6UTaehrm5bseDQovCWKMqHNVx9by9E2",
  "key26": "4GCFeQ2jrwf46JqhcUq99KVYFX7yN6qkp88oEp7bfQvRCnVFMWYUYZwgdKqSzfjkz7UdLQWxBFkp96HEUHFLXCFM",
  "key27": "5dQ1PdLEpNciZmgpy1PtpQwq5hPck71EE8hmaYvz4C2e6J8ZQS8PHUYfCFk6M8cq6H4TfvYqiKCmx1uaMddZ6ksa",
  "key28": "4jCcF8rhL43383ZXAiREVufjPEZtonYaEQDySaN4rmLehd1CQUSNCyGSUGpdpQ6GsWBgq21RW9P5Lf9mkM7DixGu",
  "key29": "2fMPggsp1Hws1BJ1WMKCfLswwXgb32yFh8L45HfYmgUGgPdvf29emG7tHhdfsEmCA4a5LYwr9vsDjZS1CvfL2Ltq",
  "key30": "52uA5XNgE71nZeTvCXwTxbbkjcFVscytF29iTHPfSAQ6mPLx9j3XeD9p3KYadsFMU4TJsSrTMQzSmNAUmNDFUMfF",
  "key31": "5Nx1GnmM5Sh2yNmb5ySiydrfqYoU1f2zjGY9vsaaHKkczGzBabqodzyGYpcfFyHN6ZecXJ3TrqEWSQAVzcHiUhps",
  "key32": "2CjYAG9G3wFMYpHbqk3HSrEYwpAM9c48CMRPjHikJfPGfd7eZFYewZJaH6Wpcvz1sLR4CSVmhhhG7jjBoLMfCk5o",
  "key33": "ksuWNvg6zZ1jJAfAzauNku57QHkrcdj1fTdJrVL2nLvjxxBKKnQJp3m7wxame2MHFWJZxzAKWDLguAE7shdnsNz",
  "key34": "4985nVVfxrChbuwwPcdznDZXBZ3U8StffLGyN1LVo8KLjerH2WmPqvdXHLNsYRpPns59bNauBS75RR3jAakY6Z3a",
  "key35": "wdgjuZL22z38JCBng9HZWRWq6JJ3r89aLVhyNMZnbcSXpdoB54VwXpemoiHorG6EiVU6tBwv4LJj6mqG9gDt8Ri",
  "key36": "5jTmkEzYEUjAXcGrbNqerTZhNhEiuREKP6YTDcLtyryBUJs2z5GHJikqxszinVkBM6k228q1eAMgdEDeEDWsWFXY",
  "key37": "3kFsz7DLkeHDi2c1yPdtZ4UMZasKMfRBEuqhfXuEC8Szd9JxQAsvQSafUv8AyVXqsKBZB27EyWwWXgVJ8PPZTpKf",
  "key38": "3cMVjAZgYbUQdMcRZpVcJBh9tRSiA8CriWY22X9CCtGb6Q7wpYGUGbrEkujNTCFzHFqRsw6F7XpAV8cz7amNHX82",
  "key39": "5vMY9v8h5xdvC7VJ3YxCo5KHHhkLhrJsUdKPzVx5cX9ULferQhASWxWNMJU63zCiA1avTUxtZzaGTEuZJHrrxAwM",
  "key40": "3xCmdqG46wy4kKjNC9tXDhHqrDhYxDTpt7H7ku7h2DmhsRyFQw2xSgBLT6EP3rnFFrGHKeYvJDnWif1oPmzLDdAk",
  "key41": "2cJvgxritJdnkANCjnCzzmWe3Nv6ZYn9QB2BJQDQpi7XGdprPbj6yfbkcFTWj5XN5JdrBb8XV2DmnPvEThmRmcqE",
  "key42": "5yhF5cu5f1f1WuHAeQVY73gPsvfw1ybihCh4rRF7woC1u3DvbgxeRezFcTnEQrXo8ce3MYK8dDkALTHW86UXk7rk",
  "key43": "3ETs6Cd1tL6mfxbDSz79sQKHdDKZ1A1Shp12s5NAQmeo3vR261zEQdvY85ycruSKL28ZzsFEFtFwYJ6hPRdcRm6X",
  "key44": "5wxip4gJTSbxUyqfC6CeyhUVeudubE5Exi21Dr8yaipcyWxVVQTynEhzUsSvYbJNEmq27SkiLAvA1qfGjBDW1vZz",
  "key45": "2HFS4qE6FWAhZD1ACBR7yd7FVmozeEnttx2CwVNMeTofNrAwzGfSRnCqDD9h6kUWdC1aSYJixNhWDGAnHXMVuPyr",
  "key46": "3jU3kgCz5DAM3R3383Hm2gVrJzQvWK8ZWfmTtCA6agJtB9fXvr4ezhtJzLEktAqa9EkRjDdNKxGzwrZxHozCrGbR",
  "key47": "gPXrbsVcQ1DSQosA5kRTJhxxYX55oAD4M5MEoQRe3v5twij1q9EPgNNXseHE9hpHWmdui5GKJAkTozXirfX2TaR"
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
