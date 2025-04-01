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
    "5YrPF3dt4Ax6yBGHFEZXo4EvKzeF1rzmki3vRRhAYvkFDeWrDhp7av2AeXJ9jrVRDBhABziq2U42N8FUHutDqhWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34aEhusRUmxV9ajFL5PjyZHeRKKvL64cTARfDs1JKQqXL8CmmhkVysepQpBjxgZ2k6ecog6nnvoABimb4BxbFLnX",
  "key1": "36LcdG36UcuoZURxD4k1ikKfYwcvJEt8NxyBTyeoKdJVLoZS5usWjVoYeeKXAkm7xwq2T1TgrNrrQoghGEs5HYCS",
  "key2": "5hSkzrkwRTFAnwUAFjY4dh5EaHqep2TnqkvTfTXYVyxpAy61SaKTLukE31ECCwHxbRHT6xQL8FSEWsSLmEQuGF96",
  "key3": "29KcsNWPUFgcgoiy8aGnFGtqcEjisn2RdQkg2FHMmUUbWFmsxpBzsVpdbvoH4V4Po8Pbjd7xyVawNQduZrcR8Puf",
  "key4": "nedc79AU3Vd24UhHmEL6Nj79pU7zneSnivLrNKK9UsTE3ptHK9rCNsC1utU9BZiyNSFH9FPJfP8BB3gsKsCqMSQ",
  "key5": "2Pjo5Whu1yD3VVFvo6eZqAnDhkTm1jTH19CLLviQQLag3u8b9yFFarUXs2W5M385yMkPspmrdiPriEq63KtdLa8v",
  "key6": "3keYs5wzjtCpdg6fB971ZdSxfR3m88z1oNoCG5nCBocUAnYUHpEn1S62VwuEGnLuZ2NjFRUzALo5Artjz4Q4vvnB",
  "key7": "5Znp6wEEMhj1Rxcok6h8n5y6UjduxTGHBztRqKogNJnMYeQhXxEd6H9VjaZaUT6YS9agXKTDYYmzr9uScdq26KEa",
  "key8": "35eWsuJsLsLQbDbpRpmyyR3juHhgUhrxXqQCcnAz8Ym4rgcwjtDxe2CKw1wdXMWwJArzjRtz2g769MKKTtazQtNq",
  "key9": "3XDFgWax1VB2Xg8kT9PXb9ezvEay2C9zkH1QvZrJij7cnvCqDZ3Q2guNFeQct545BN7C6wHisxCTtiLcpGJQ1Duu",
  "key10": "3179bFutyDcjq4T2bBmdSYyHqze7cShgMUKeSNSJew1JZy2hKQqkwP7Xy5rSzEULUMR4YeDWeWLgreqRMQ6eVAaK",
  "key11": "3AEeLGAfWC4kGwqmhL7pgBkEo61QemFWUw5yjSzUkC5PARv77F7rpXtWkBpthByQ9qWgCojB6TCJpFTqGPTVYZF",
  "key12": "2NQhjswqZQCXkKz2ywXqACunPac2JsBXRLKVnaiSTTFnqospmtm86LfwLkPULS6cdK8DhGrer5PkrwGnMWUUDtAd",
  "key13": "5xBJbShSQhHoLWpoJYKX1Br8wLrweieBgWZ6JTE2JYW38gkWDM2WLr8qrNQ3cUaN3SGEmrqGDo7nuaa8X12b2oy",
  "key14": "MV7dbQV3NpryrGYCUTP4GutrQfivRWCsNpnBZXXc78WxREBXoH1cmD7C2ddSES6EQYG5r3zgi8jfs4oPWJs83Vx",
  "key15": "5S2uaUX9B3ce74SKLJVWrTUPVKeB7wTnyKvwmJUXsiVJeUkQQqDLiApRuMi1kfrwTxNdsTqch2t5Rhao8NgPVaVJ",
  "key16": "3E7wdXsWRziZUEHc1FLg5NYSRis7LF7H77vYbfGkrsyvq4J5GFufoEA4vhuSd8oF8u7DgfhQpvfP7bMwTk5sKfro",
  "key17": "5zLC4axp5mUZsDzhYEhqrqmVJgZL1N7xoSaZZuZ2WJCmk5mGr3TbJMDzbnhu1DaRCG1o1Vq7VGSXuqq7XHHhXTCa",
  "key18": "3jVRXWEapjpX1EtFPnbqCyvQhmDwS72p2VUTyu5Fd8nYTNeGgb9M3kBvwu49KrgkNxeNeAfkNvrS2EdRZpQragqU",
  "key19": "3HZdg2LLy8bLCxi2ForzZdZziMKKCPtpaSK6iSVN4KdrFcAb9o2mWHbUrcWpFRWaNVGiDBTZXTgUJGUMrqYidJr7",
  "key20": "4N1bM1gUewRwoqWmV937yodcL2eVEYsDSktBA9M5omXenpV2YyQvfgVsBrnzsCyjB2NWGGZAyQz8EsaV2PQPcF6X",
  "key21": "3W8eA5B5C3Q1GgM8axHbXhfebhDvACzipwkrH5irpz14qidtR1rm2Q6kzWrU7zEj2NVffzHQqrT9gU6oMR4VsiJZ",
  "key22": "2pqfzedyaJL1DCJeuCZ1a3ob6dZbbNgmrukpAj1iBDuwhkoRqmGGQgMPzdsU5KC7J9rsLTCQa1ZSZyNtA8daZqzd",
  "key23": "5aG3zYguxHYoz3EJ45oPxyE61M6MRP3nCo1BRenMFkFYx1HskxCc7M21eLb43pedYhTj7HTtAesKHGrSkNXdm5EM",
  "key24": "5oWoWn5vaKzp8fYvtiJNRnaWg52GC4KCGMjGxtmiHnV8Un9GCHkqHySwYe74Bp2DYs4Tr11jRBgDKhDfmJm5d115",
  "key25": "btJH7yYj8EnRya91HkxmKFgXr5f6bxbNGYg1vbyEGwtFBxr6HkjTpGm3jLaFovU5K7bJ1bWzY97f1zFh4jhqxjd",
  "key26": "3X6frSvW1sHxXkos3BC7eu9aSacyv6H4PC9cVRdYrivPQcpJcFhTWB8suys1vsrKhpbiSJYtSaBUzypxAwKK8RX3",
  "key27": "66zabWvSR3NBiyMhU33tpisWYxj9zrUAFFRTXvWbVnNCRs9Tmo2XwhQzfbpE9JjqXCqfmgJefvWiyzzJSu1Yxnur",
  "key28": "2TkbHJt5KLjJ4z9zHJC1B2aTByJax8RLr5Wbm5EgUUtfcK7y1VcykaCf9XmfufB3aSdLG5HCsSEij3k2d1XoPdsp",
  "key29": "2rXX5H88GD17kzNScAUsnPbvybEUwbnC8cgQtz8sSCpna88nLfZ6Fg6ipvhqdP7FYXhXAW2e4rGFA88sR9NATvMR",
  "key30": "4aSJabv9ng5q4Tig3ut9YLvpKfzArfUzGxS4CGHXxboLNwvqmbyoQvgDvENKY1RSmX9UiHdgmXHWJWrb3dZVPhXc",
  "key31": "3qSLQmPrRmp2ce3EtwK8EF2bMfCw2k6fxYxXfduo5PpETPYdJqwoDSrn2HxbbUZjWvcDowPieXVfQmJ2M8WRNu5d",
  "key32": "5d4TZGNPSuqvLLL17Hgb1LUFHcSZnySQ49bj8h8qrJdNoaBMuERn3A9ixGVgRoHi4oUbFGpwBopHCNqgdDB1bq4r",
  "key33": "Q6n6S7HP8gBjwMcCaxJa6NP9sZBLqTMvy1R8qR61gXGrHBjThZGdKgitQjvGqxW9CwXUjXYQFP6D9gqgvogEUc6",
  "key34": "4i2Jii4BNdyke89dHKBBTNxC7kP8fjMp8JcYpBwSCnhMBJtq18qqUtmvDk67fLyoUL1RNdwESS6SPyWLfbiPzZxC",
  "key35": "XkmiNQbZAN1tf7Zf4NSrJ2nVvPsjPZpuKizCyZa8RVgzR8YJoHkztrpidZHEjg5vAXmAeWLuTGVkQ7i1hrMwWPA",
  "key36": "545kSQVKUncYL7pWTbCCNRfcfhanFTjNv8aqQVrxy2kztGHhRyaESjfY9AsBXQ7audDe1biVqcbDvp4a9vu6D1Zn",
  "key37": "65baifjZRgW2UFYucc5wFm492szBNJMfKnrecG269xRWV5vpALnn1zWgeSARBwwQAfbNvPPZrHBYXJMMNmUYdTw8",
  "key38": "46AmD6HJ1t6bMG9v9WEV4VPxGMGFw7H9LzvQbgwyuPjWwbiYNwFJ9ur3G7spVPDuFLcMAMjT7cGFokBcZ6MJDncd",
  "key39": "57hqUniR51ivXDzvnrGDu4WdmdvQ3zG6N7B3qRaDDGxfekbufCWy4UfrFWU3MFjXWSpUxgmar5FpKsgko1ujAVkB",
  "key40": "7A567f4nUtrtTr4P9wt3YKcGir14ryZd5pD2JodNaFCZYLMUnMroV8rNMsczppTwqFcKmgRVAPQPToWe6m5DKcQ",
  "key41": "5pHTEAYqEz2414woAo1hkztui1MBo4oT93bpBRapSBmBJ72UTEK9FFYyFccFiLNyDwnq2WiUA7H8gLjBeEGiBfWy",
  "key42": "2rM7nGGSb7dJNgvQHZRCTpfLmNMu56FN2dQUFVhzDS2DNwwR4m5Md7YVFt25bZvepJBF1TS7D1fiRbPzcBfcRHX3"
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
