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
    "4LnPs2KDNkKSvdCh9THAmnDC5MtroqVRu7xuML7ys985M4fdKtbDm2EGhr5udwHkHXcfxwHfGfTrgRuAv1avxyBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aj9LYwp4MJw5TabBEVfRAnCXATFwUq4XRwHMKnsyyw1wRNozXN95qDWQbbbKKhEzidsqqMnhwHtms2Xz4XC87ZU",
  "key1": "5SdDG4jfY7bGiLiMqatU7HerNqCEVEXUWJ1xHkNttGHQ8k8Ds8vLxvEJDwSGKqH4F8nErCNkt7mRty3oVychiqyq",
  "key2": "zNsecuhyCfhJg7CtPiG2GZQMRLPfHuqY2ujJGpmXnDsTHtoG4s5SMZgQDEjqju88j8SCSSa8iV2nUt3czrb81Rq",
  "key3": "43WS9o28dsgvZ3RS78JpUuWhNrJ8fgdYGkMpjumKmvyXbvTPs8TU4r4DRPiSz6WFMWSuWnmg5p4FAMhQZBKmc549",
  "key4": "2RkP5ZgWE7tYXgtQrJGBttQ93V8V689ZZXbjPGiUZmnzkQcg2P8cZJczvrq8QHBAYkEm3vTErT12VZoW5kC7pp6v",
  "key5": "59Y4B2nJC5NY5sxvJSubz41P3qULbp4nCZhn2fzudf2LeSwZ2mM6nBebpXf56nMcYjpj3VACicyEj1NU72EYf4WZ",
  "key6": "3n4ZGHoykR5knFuBkyvQYZHTUt3zKjwGVEAwnFx1ygeRSsqFaw8og87Hi9J62ssGzJYuz1WNNxwkmTPZyZ7zh4JV",
  "key7": "5hTxoGVM5drjTnFHTc8CoDDioH4bZhkbZASTxM9u7BcUVgmzJwsX3gSHqdf8CkJS8SnQvg83YdQYYzWKjqTRH6DZ",
  "key8": "3x3FxYJAG8YXikAExuy7n4FJCPE5NBw6XiL4PtFj9HPWd9jHeEUp6cG2aNGp3w5eXwNoChiQe877S2V4SNpbGudg",
  "key9": "28iigMYpGr4iuJb69UBmht3v6ACvVy9RNwREE7vnNPraczVv4Xsi5HQAhevRd8Gh8vgDGmHZrvy2VfmgaAuFLRdE",
  "key10": "5sXPVbvEBYVzZ3VjZn4xcWyPYQ69oUY7SBpNm5yjy1cWAscLPSb8771kaNTdD9TehKV24QMs7uPKFHLXuPijs2rF",
  "key11": "3edv9PCicP72bYgb4mC4gMvBYzY7yLTyikJ61VdjhYBvKkU9pGe2hcmdgaJsi6Rrnr5TtktEvf6MjHP6i8FdztcF",
  "key12": "5xsHWvRw4mB6WM7uAQMJKk8aKfVt6BauTSM172jvjgvjnToGh6Tr9QJRDE8ug5pzyXFYc6HXyuSJUpCYkyUw6iPE",
  "key13": "ZjQvCEMCrjDRLWiF1ZvCQyW1FScsK35bi4UM996cCgoiodFPvCxHdwEo3ysL3sttSYjc9RV1pXRhP5DYAZ6qPHZ",
  "key14": "5vk3rWSiUAeLhRT9wKe8KTCq9UszMQy3o3BpQQCjEWLW7ihH2ukWvAHuGj9jY2zcxoBJiGn91EZJcDedjQqs8kUb",
  "key15": "kTPgvm6J5vx2DZR2RoFLabmXZbtPFCoPbP48152HmN6cNNLX8twbxt78kGfTodjyiD3N5SoXx5N7eanBShnMqsv",
  "key16": "3Kr9nmAJ5GmHryYwNbPdgzf7yRm6aJt6QvvtuYFeQWqNXW1yTZdqJSC2petvy3JY6euaDjg3KUw3PzFo9awGrmyb",
  "key17": "3ArWPYuSwqS746P271gWZNWUvU8sJ5WfTT8rT1pwQKzskpvEasrUCjyXUDLpv9FV5XM1CvNpQCigmCypV6AspVPr",
  "key18": "3tC7yigr8mu8HzDVRtPe7TCvGLPL7c5JM89jfxsczHTzenNFvTAyBTr5H8XGxQpRRgZ2yzqdfUFNHTgk2XBbskjH",
  "key19": "2KMNGcbnSAfC4vQaEGpsrb9Ktn7hBWo5N929sMd4DaaCk8RsLoyLCKQDYsaRfgpDFwsyRG2dP18cjB9j2SXy8mot",
  "key20": "5ySxguEibycAyU6N12BJ3rYMcC54Yy5c2U7AHCDfRQuoSrmmXeS128gHNwbxm3XFAjSQrYvzWr9BcXnbCPdCqNJS",
  "key21": "4xPbFobBNYeAJDxh7FNd1WajNfDtG23BKZZAxPSKTk34JQtfwcLEhh1jiDkK1qZowvNg9xoLMEMXpc1eqgyE6LEF",
  "key22": "2bK8UpBaeswEe3ja43tV5UqumhAauZQKnmUsr1NnM1edGpUQXdCgF9PeQdbaGCxSs9hRuhfqiGob24pPkpo96wga",
  "key23": "5LF2Ng8raRtzPdMrLqyP5qtUaKdyUYwmWDBwrbExNz8RaQPTYDQERt48C7pPBddFf9W2RFmxRx5kSfJyhEVhmgqe",
  "key24": "2UnhEdWbmByyEYNuwLGPvLXKxtD1nSj5Kb3AqWT5KMj1ZqG2mnzsGZndLvTC2LgPqnVYTje4NsnHCyPsaCNhXukw",
  "key25": "2SJSJPa91ZBASeNZuwADnNxVAdxe6WcFLiWYARWQH7YbLAtVt4qGwX5HMkNvTZGojzdkQwjr5c3TxsrScrERbEyk",
  "key26": "5LgdNNtrFnPWKnxRiByrrGC9rRnR4P9ACzbQMdxVRhXFUxrssZiDFtCRMEUrg6hBJd8CeCoqtNzjvEskbLKk7Geb",
  "key27": "67oBRRyk4xPtxriChAypeEuCQKL89XChVuuS4Z2AXpAnEfjvy84GEXwSCirfEXYZEhzpTiVJvLdqdF2GPpqG6Kq7",
  "key28": "3uSGkFqXvufWMFxVC679uf4sM1zkz1P1KqMEBc1vK8GVd72M4EKCC1cpv3svZtD3xN4Ww6kouGY4B2BtwM8GK3uC",
  "key29": "3GhcXULU8TGJWS8NggJffZeDxqRJkRUjTiSmQTU6iZna9wCLcTxzbf2wAFCaXRgFywqp9HFvxrPwAcBTwuoKwRgz",
  "key30": "4Su9GJQFsTtNSMyj24Mvrrf1XN9Cwa9yf8SM6jrNzmfu8UV2gvJGBYq7iYipBxYsatVAc9FEyCEaqznPJvV3fygn",
  "key31": "3zYf8V3UESu59WGyrY76JFsus8KMEwZ2zcjLDXsEQeEyvrNq4iKyKjh9EzERDUtCdVuscDf94fdwi4QinDfhP7QK",
  "key32": "rz6kyxbuWhr8stM5fujNWmWBMiyrHbumMPZv1Rr4dMWQTXrrDHrFNxcCaFNt1UnXzzDirqE65CEiuRTo8fiP2dR",
  "key33": "hSmmKNwLTh7sWdQ2HcHxeVm4vW5JUgdfTFnsPJrdjtAFJi9pZYD1DHLmwbQwwkoFVYLMpsVosUJvdjefBYxZT4o",
  "key34": "5YE7FvwyvVxLRZsusZVTBZvBik2Bvqk68JxSdhkKf3Fepyb5jNGP52HgE5JLzYoRjjNcEcDxfzJNJ15YrZYcXqLj",
  "key35": "3byizEMBxrVpnAtKdwPE5e41hivnDmrFseYfFCcnWBSgu4jqJjFqGiXfiB6pRJSerfqLkTF6FyWsifx9HHqxvaiV",
  "key36": "881LrtGrEw4V8PwNjnQjqW3eC25iTuUaXaABBMWMiSWFRR3zz4sHXPf5f6f8raXGNvvWp2j1XT1hvXzRSKYrtdZ",
  "key37": "2vnTsafV7qUXKuBUJpz4LrYnGQ1fkxGeyhzfwqYJtvWHbcUtzuRuawjJG1H81yryi7RyZB5xohkrQLNV3KjpDyVa",
  "key38": "4JQtvoWc1vr4N4WJBXa3dBVAoX4AHcqKrpH74yqwJu7ggkHsZgvfw7eWaCFwL7cVD83v16R3rgLR4vxSDzvrSnCS",
  "key39": "2vyjuqAELgXefk6uCSocFncTCzi5Yb2SzYBzsKRUBv1PfTrfW9qGTdEehcjbXLFcif123SDrCbjepvndrmeGtKfi",
  "key40": "4dkj6UMk7it35ZyKQntJuS3PniBftX5R9aRx8su8KgPyRpuQRcXHd1GDtbiboBe2MbDCCQLbSh7vsXtoV8vHa92W",
  "key41": "3MUYjdaywTiSvjGdk9KWt3LNqBsyhYGggahpWpAtar6s7EtiYKnJMYtd1nPm83QAwfVqQxsPwjUXMHML1aMMyhVC",
  "key42": "3gavfsd8sJz83TeBNFwyrywod7VhZvv3qSwpSjkuZqd7hzR9qsvzpVHR5u83A6zfgDUdLRt2rLYJ51s3c5Qfe9rG",
  "key43": "4qzC9HnZrySffAp2fid5iCRsgULzrSaSVzLYqc8wFmyJ1NWbe7PsCrk1YrMLRRxSrD7xs2PZSsUXLCcKu4sYiXiM"
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
