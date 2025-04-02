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
    "5WNPw7cqWEZnwqs12AsDQ5WBDKmj6BCD2VgGcgYHxkNcAw3XFHuioFRK8A4eb4jKJta3hzswEsvdZx4iZCLwyYuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HzWNg4jyDx84wjwPeULNaoU5RdQXjzYWgmkeRMXWKRWh1WeLrheTw3BkUwy4WfJM5kB9YhG35SPWWCN9BLMRFW5",
  "key1": "7KqWnMaBjQSWPPjjBNwZsKNQbTbRzrnHwjxWr8DtiUTix5EahikifMEo4E9fm98SmNHdxhmDMcuNAgAzygQnytq",
  "key2": "2HwnrmECfq7nwo9qyM7pjuyrAZUqhcbQK412XgYNigfB5NMeS9EcvrP3Z8Qsg5xtY75Gtwgqc7cfaDKxEoPk99p7",
  "key3": "2MZZdzuhJ4VBiA3B2ZsYfJxQLbcGUWRxnM5VD5TU3TxnCZgt3ezcPkT4YsffPg5HGLtocFpsLAty2uLi4DdEdBuY",
  "key4": "eRKgkJRB1v8QV5C4NitvPrzYaK9Q9GJgqUMPUKTyJk5wPbZhAgQ9FrWjdVPdfrncymxQrqNe5jqSi67jgjpiZy8",
  "key5": "4QiJukhPoF4aMcCqGH37au3ZDYe8DqoW4rc7gHCjNR6wH8aHHUwgqi8T8cTdjPxsPDVsW5TJFKPqTGEnChwCjbtG",
  "key6": "2t9yvjdtcpmyPXQVRdDCQXvKqxj9cNJQ9pASEs5SrqvHbjZ12TCp5sTx9e1wqAUhET7aDU38Em6tEmw6peZNqus8",
  "key7": "3W8bn9HM6UYXdpLWrx3FRbfx44qtL53pkep4quDXyH3TBsLv3curLcz4qL9FjLdCo2nWKaP8Y7X3syRa6RQZb6KR",
  "key8": "4tfacnAheTVnk6YP4FRvcVwX7ay6bAa3g8ifqgKWcACi16RCRAckt6Qxq3RevGQC168wnKhxx64RpCHU7fFbwAkA",
  "key9": "5QPvfU1ucuXLb1dPvQ89johcSfRorS52RLnZWjdtQMswyegmNLonkED6LcAVT61gScZy7rAiDQV1tqFpd5HqJ2dX",
  "key10": "2JDGFaCvPRdxZLrPMyBrgrgGd3zzfDqwdZyDMZQM8Xpxs46kyaSBcQdBEu27LGaeR7p7NkHPQz7Nvar1oywn8H5Y",
  "key11": "5TSvra6fMhyEcujjHnKi33Ko5YT3pShyYxb6foNuz5yBxqqdBJdPs8NgYYCLErpSshjcXoAPS8ZJfgF3pswnM3n8",
  "key12": "4gMNWRugpkqDUBvUdcWfwAKcPySBuUU5nNvxV44VRWEqLZHpcSaEG88xZpGG1i5Ta4sWKX3Ly9QchEpuBpWgz9SU",
  "key13": "28QCJJZkKMGvbsJiULo9J3UjD2J2YJpcvn1NAavytstNgXYm65g7CPhcJp95pPvz7avuDG3c6yf11LPLH1ckE6Gu",
  "key14": "125cYSiwvqH9yNTkA6WRW1M4Ro2hMZAkBPqc8wpgz2tvoapUmpUpyjLNkeuQZMws1odmh5i5uCbL2Cs4KsFHToGC",
  "key15": "2sSnZR6yjNZcHFksZkX8bX5ojRZ6n2gu4qDn85skeUAc6BehLrtZE99PgWMCuKLfZFNGdLLqSWPnksnnA9rw3DGA",
  "key16": "3vG6eyMbeL3JYm7VKHtPGZ2Fqwqtt1PDZSsRSYtej962xVXgobGw4MmmwjJj24eqzWzNqdBERADrRnruqPAfgxDv",
  "key17": "5eFXMeXdbA6849KwmU7WAmpKB8aPdHpajbbszaJjQeWP4Cc4LvuyUxfZyyE65vkrfmdoA4BPpT9sN74bYw2pi2L3",
  "key18": "5Xns1Bvnes5seZ4hWGkYo66U2LhrWExnh2Fnw44w74ACNW8ECPWFHUKMNKNmCUj5reZzFLw6rnUxWnTYschzZDqQ",
  "key19": "2h16RMC89jGHzLhc2KXBfrjvk9XfcHv2NgVmmMJCtruF4V9LCZacBUNLu8XsKqkY2c7HLcdoiyVKhhfN9FninjP3",
  "key20": "BcM7bTGQtbfDfgVhvb2dYZxvj6ySP9mopkMFXSXuaFSC38qqqtLsjjyLm19kvkmWdj5MNS32ii7zVUgMPs6Se7Q",
  "key21": "FvmT45gCqey1W27rrbG1HrkAMmXBjYdQ5PvT3eCijG97EA7jR58Ce6Ppj1UEU5zqJuuicTLJ7uhK84h3TkuqvgK",
  "key22": "qELi6ZCq7kpAgbazHnw7taemJKpVDMJ23gwjLQU69YiruMCnB9PcfbZiGHFadNycRH3fzU7vMiiJDr8NJz2BkLQ",
  "key23": "5WXBGFxML5AXfV92yWnGPCCSCVCBbVX6HUNhoomRokomEUsDAfXAzb6iqqaL5nuhyycLM4QFhG3mbGsyU41FRcxv",
  "key24": "WLQq5GXWjRNjGTgi7Qneoq1wH7AEarMkPTzy3dqgXRFtCnfJ1y7Abcp3tzYjjTpqMSfHeZeLWxj2aK82g3EqWDG",
  "key25": "5hs3dPUoaNECDGP36UiQWURQWToyV1pV94bQSJko3ansU2SbFskgbBFmkiUotxyowC4NRNyibCcf5wENcbesqC8x",
  "key26": "R5EC28evSfyNrYCKgGT4d5BY7xVLLwGgrMcCMBdwztVMyAG6Strzfmj7admReD88WP6zA4rBxHNvKgAuqvsKyyL",
  "key27": "5akpujCPWPVTVjTkB4hEdy5wgshU1Hi914mMrJh7DLLbF81q6QoMB6uLdQQaSjzoDWEp35RXBNXqgLVk5VNCsDiW",
  "key28": "5CsCCtVeTcpPbgTvxLZXs8Gyr6rfE9uTSAeA4P5WTZBtefjSA3ouPfbjYsyGaz6dNTXeUoWcSCsQeD91PMWjPixw",
  "key29": "3WgfhSJyypS3ifPnN4VcGzJL325t7g4BDuoQ9Ky13GawAwoAskmqpWGgB2hXNTkH1wRBBBAz9eqeryUpgxXUa6Nw",
  "key30": "5tEWB9pXSSp5qMrxCybyEZakCKy7hdZ14e9ZsL8pEkyYxmmph4RHEnDSMkAX3YUBzwui2w8ywLeM3hxT5C4tRTh",
  "key31": "26p5KRmSncjtvEscgcLGcxM71nQwWwAXsZekVMKSfW8oJAqweRSHbVxCyhrfjehbAz6thfLFbxwbdxEK1p7iQRiX",
  "key32": "3RrSxZVUqajmrJeuBzRgRyVNkJwruYdt2Ep5swULn8ACkoyR8ARnjK4NL8cpiDGyvoaWad2sZnb2NhSWasX7VEQb",
  "key33": "28k3JuZWiwSogUyGvueGSAG4iDgSyW79qa5M2VGPU2C4H7SATNe5Nf1fqXsKf22t6sPw9A3ALTTJYquuvJUVJTEG",
  "key34": "HrqNaBDu28jxJSeZenBZaR5rE6jMZmH3ScrMHGpjP5GVpTW3rKjykN58zCVY9QQPg1Q8bN9fQUMfbAkXmi8sYSD",
  "key35": "4Ed6H9iU6jVmD1LtkcBzu2Z1pxoM8T4Mqz4vZrva3734Nk69CksRRApnx6Awd19qu1aWrzZ17WkAad9P4Tq8zuiX",
  "key36": "nGyb4ZWJj5jb1t2ZTcQCTSnZM3kjFKPVjzqP78Vgcd4ZzDYK1v4jQX3zYmBmYJtuSjFYJCuW8HnSrbUu3kipjPT",
  "key37": "5wezFSu9K34rcxCQYxFfNzsvMfkBhi3RcABZbNVRCkDYAz5Udo73E5rkHQrSh5W7T8utiwNeUfnUczZfmdaqdUsu",
  "key38": "2bHNsAjMN5wMgKHepyDcTaYrVR67c6bwWRt4ZWcqFf1PPQCxAAC7ct2wxY6DctdKwWst5dx3VfZvkD5ATW9ETxSz",
  "key39": "2UYXj1CBGnsykChTQhMrHZAhMcFq6HT1dQVV3AMGbQo7ZZRCPntjgQuAXAaVLXUUTg5a5VzgKNgxx1iugnX3Sq6H",
  "key40": "65o2GEPxutdyvtaKAH8A1YvMWHXfZ2QCNApXyTSfHzFiDLhUBZiQGa9MqkEJSZ9Lv7SPgajVx17mA8oNRv7j9uqd"
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
