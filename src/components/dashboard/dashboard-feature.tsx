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
    "btbf76ZVH1fAvmnijoVP288KzzZm7hBgDWL5FPmHxVBGAuCNm6L8kyPdYUtULLHoDKXYQuqJit2kMqBQ6MCuNyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZbapM2VcqHWdeYtDHW9KUmqvZQu1mSuZwuYr7zj8EhbjafQr1cfUp6oAZbz35u1y2Y8ujaxX6sp3ydggwgbwfFT",
  "key1": "5Pses9DUY8DGM54TsyrBmGxx4VGfbmb1c4Fc52KBACvJQtXjrTN8RKdQcKQUBQ2YGh1b1C27jdvTu33C1kkfQGDd",
  "key2": "VdZkbNx8eEZYHcYGJ9YuArrY3HUtwpFAT3ZcJ2cbTx2Ff4kVKKsfeMWEEr1Rx7ZG6Hw2M17UP38fLgpgK6deBLD",
  "key3": "5ntXeRh8VhAXzFVDnd4ReBUDdFrzPeRgWaqkP8QH9gxemTXtp3B8goiWAkij7ao7HR4oAS283Vmb4t1kFwv3Nvic",
  "key4": "2kZwDr1Tg2KTSewKjmF5oabpxq5bJDUQEcLsaqxjfk72wADBnhgF4EmPLrkmtSXZeT3MZgDLoypXg5qXYkxipaPS",
  "key5": "4eaSyVXPehScY5cZHxZxy6YLT6yEnoDSktHExZQb5m9yhJ1QYQhJiGqanBWNqRkDKNHjwQS3m6jsgWbeNmLd3Arh",
  "key6": "2WFdSpEbgF4yM7VL65sBuHCUL15LyT2n3BGeFkf7h2HcnNXe6K2NML6F4KKimhYiHLxiLTdorJCheYivy1viBD6P",
  "key7": "5FmNjXfLRxASeS12uLAJtsg73HGjgvMcgZ19kZ1nabX6YnoXJiF1LmWmM8UPrwRcvNfwkEf6vu4rmftAeAtk9m2g",
  "key8": "2Hu7c3EiaVyW8DsSVro7Lbrp2w1aphwj9MSisHwUYMUnNkXjnKaGEzFrJno4BK78q9kVQJDoMrBDkfu1mgi5tNeX",
  "key9": "5annzfmM8RE5bAPGySVNvd3N4QeJjwzLCjUNNxYpnphxgpeQvPDsfkDC8RrKvZ2Ssu2j8jswtGFQQgXtksfj7XHk",
  "key10": "5DZKF1W4go658c2HhDxbLt75LQZMVuiD2zKLu21W7UroEX3nByT8pFzHF3AW8MiyVAd3qdkvQcWDvpzfPc5Y1tiV",
  "key11": "2sT3GQ6p18tmT5NULbAs6LRKiRjiXn6XMLMfG6SipMGpYJJeRBkKo76gufM5sY4Gn4BKiuwZjvJNpYm4FY5qP2Ty",
  "key12": "2TQrAnFvEDkD3xGoKpX2R8i2CwG7cr7WRQhoyc76zv6tUJ2M2rxdN6ePRDnaLcCjow3EL9S4JruiLqAiGMR4fpsG",
  "key13": "5pZ9tuJytrsSn1JroDgQ5vjsBip89krdj6BgjARec1FKgLhAriYzBoxuGpbKD253tvbohq9iSoAivGCcYKQrzr8v",
  "key14": "5nfDRgD9CnMSvEpa3awv38krcKCJ8RSsoMwC3JahWoQtDanhGsWHFZwBedFVmSpaphfdJFUAVhFRgKYZxz3VVXvo",
  "key15": "3Zoh5ZDCJY7p5S4KMQK5cuzzB2iPCKPLmCFmgwqTspSCdsoDSf78oG7cX6dAUuFRJGazuKpwou7VLNND1xuzhaL1",
  "key16": "3RzYDbmM8LPEUZQrMhpTcor9C9DXFGe7hVDzK2EsdbEbYqFCs5nRQVsVL8cbLoqjvbGWbLoo3R4f87K2QUNGknDr",
  "key17": "5YseXFPisVYqBnHZUx7hKkNzuU45gvHXzVKXS6iiiVshE73qSB1D9q2j61wrfXCkzFutCzvrEBmCSLYhsFKjnYVL",
  "key18": "42JsEYVzJpJQQcGHHFBwhxhTs28yJgViGWbpbd7j4c3sx1AMH8uPQCukDy7wuty2x5cjE2wV1crDuFkxpawtCBdh",
  "key19": "4erW471MB7XhVrtjankCTHFoAPxDB8okMWgSnNMmRqgwvL7Y6hMZAkeHJh4SUsKFzshqGdZyaRWrdsnJXBwtd11P",
  "key20": "5GJRf2hmoqct9n3misAT5LkUgq8eFtSDBGV4c4e68T4kwMEX431CufXreHPsAF7d2Pa6LvbdbTNczY7E6pAderzy",
  "key21": "36w9YvNikHqAtvanVovSvk647p5s2VLftAebwEsW7pRL6pTQYX1anWBZnDrXMWve18dHNAyiNx27xojDvGvCx45h",
  "key22": "4bo9BGqnudkdYj8HKvBYHNsB423i3attAH5cxsUdzboA31Dy2xFgBkkxL52rzejUtRs8U3dYQGjEtfEqjTLP8hUz",
  "key23": "iVizr44nd6Kb4qhZaMfNpvqqwbLuhW8fc6F2wXvoqYmK8rnR7t1VaysjCBWGECUdVwcgPRQ1iE91PLZWXv5r1QG",
  "key24": "2RhMiFWBty5knXgTEXCfp48Gh3vny5MdjXchU7dBBdwgLnwsSKXCredswo1zETp9LfJpqaWbHBi5smW6Mgftjaz1",
  "key25": "2KPNkYGH2tNs51Jko2Nk8nP4ESA9ArtMpedNVtrmcbvKNbkjFB8dPHFb2DDnEzbEGmSXT6jsq9fcSf4BmKh9H3wm",
  "key26": "4pCQQCEzeK5BwzTMn3z7F9aTmdJjk2P2RFYDuS1V6PtPxh6W88qqndxczppqKP51Ro2BLnRjTQHp3eFEfmD85kim",
  "key27": "3BVJNipX5XS31hXqJps94Huyf7D6aEpmNqujRFcUJ9g6ezxpdiFvD6MtaXtyP9cBdp1CJY6Z6FgMcBVyQJCXyL7U",
  "key28": "41Ln6o6gFcwXPVE6UyMhinDLQRncKJqqp7LwaBqWDGCoCNCyQUxPVX3SCEFDYsK7wnokjHM8AHwj12b9h437sEvH",
  "key29": "39SCEj8EyxfXAUNLrsU3yiW7RzJqmvadwnML2c8z7iqrmSBjMwu9ezTNzRwwvDwHotpdLY8e5hJLdFi2hzqWbKoj",
  "key30": "qtdsLm2jyk1CbBqSLf23SsgjsczAGkYV43M4nDrDUEDKF3zZXv9NQPrr9JxEGUTeuTgbr2NNTryPtF8pbx3ZXKU",
  "key31": "3ooQuak3t8eqQVZp2MbPTvryEx1zyKnrjGswrCyDgsc8PiDS6DtBhoJPDguEj8TU4wiHy2hRtifV7ayNs8TFPiuF"
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
