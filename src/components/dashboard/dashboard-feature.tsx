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
    "3K4Q6ubg8PeSUDVrjS8cpH9b7P45SLcPUth8fMuDGRgvpfxW8oHM4CwxrngQwR8BYnYG9hJxFwuJNpwx4H49fJ1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ghiGxYeQsZ77SkPh6awbJ3cPkjnBUUCGKAbi6XyR8JbPiG944SvaGKZ6Xfbzcq2cxL4e9zdrVh3d7osysXYD8BK",
  "key1": "cLWssiThc3KRxzdKQHEKobUfDBog5a6FAJv5VR38BsbinHq5BWcZ5KxSAzFG7wc5hmh1mry66yyHRCW2BRJ1vxT",
  "key2": "4vS7j1WA7C1t8M75TqQuKCpsF7x7hSrST4HHPVEfNo3g1recjsiGDqGZcov9kGbdhXHStMKftq4skbcDzd9rAnMT",
  "key3": "4AJ3BxuTpsSt6pmbyucydzzUJqgUkgqD2qyBD7NqcKarDvRyuZUj7bmk6gDQ6YeZLMno1BeZkUnS5uoMT1459Xde",
  "key4": "2CKyq4Cjn95MqHgrAoU9emWGHLmc8C28xuhLXrgtB4HGW3qYKqp7zJjQGRSxTHZLt3facJRPKvdcBMyrmQQTa6Xj",
  "key5": "4zzFcrmLJAXj1JzHeECrbm9kU5GxP58NjsF2MhfoZTsNfuSjLtmvuEvYCtEnBzjNBMWJc2SkWuv2he1FwghnTr3C",
  "key6": "3rVzyzGpeJTXHYEvryA7mZAbmq9TgNMBf4rjXRcNmP8vMFuf48B9WTdXykGWd5KhpRHGZBtBzTQWndKKSCH1Kg8B",
  "key7": "39Ucxdnoy8LkdUuhMNzuNDU3QjX2c3uqJaBhaXeUFvQFwir1LDSPPXvejHp21MJzYtzsARdnfJLs5aNmkrYQH6iU",
  "key8": "3YCh4TBcLRJUsF1eus1qFBEvBeeFsSBK7ABFJsLwseLDk8miFpvcvcvybNVmxtZYQLZaDEQz4DQhUeCa5PZzhnkV",
  "key9": "yicx6dZKkbZne6RhrQCMNWTw5iTRNYPbpHih4dW7bngs3fo6vr2EZR9Xjnhkx4HG3Ske4nYPgsLcpHFdEcyt5dn",
  "key10": "5FhxUUUUMbGcgwF1sgsJFJMvkPX6nMdFXJgNnbacd3QpeoryugsgjneXUXzwXfmUCUiQtNopApSLnyq2DeFYm1bj",
  "key11": "2H86KtSS5nzbxhnVEdGvGugiQJ2en76s6Y1jM5kJEHQLYadnRdrapsSBHMA38XuezbYLKgS2YUgmHnBYhpYEteZD",
  "key12": "39dqtzsHUQdaZz2btuuPD4zJUfNa3EJaDSzS5bMqcFPQrVJJhB5vSGSzzzftgwH7ZZshhEcfdYZxFYLNZR9ZM9n5",
  "key13": "43jbcabEtfWbfTyasQKGmH8nohLHHLTkkJ185MdJP88wq4KjN7ZesGLrr71vVZuaNqbRnLgX47fGnUpuQVqeZFgH",
  "key14": "oKCw5g43zj6QgjsJmbWPmeFdg2Vq6wXi9UmL591tufT3m1Sa2HZbuiSPjwQ2FSL1Tbk9HiNicWtqQ9TwF3qKz5X",
  "key15": "3HVwcUbNT94qTkEK1J1JbH4iaM7S8DQiXR3duDcuAuV9G9QuwQYfFKjk2aseTVJu8NVUBnqamWspqwp73NT67GJd",
  "key16": "EDZGt2kP6KdBVbLsamWnnrYnCZgnPJLD4Qr4X7uuN1LPWzH9SoMgxGfRqDwwkwfhQaRpU1uphToo2714PgHedyd",
  "key17": "2GQTWyCG3k39yJZRkUziAW2HwAqQ11oBA8vQm9zDFunWk5x5q1gvjuhCEaSxB44VrkEgMHLqcx7wC4fwHzF2ecB4",
  "key18": "5YFR5dWqcrkLLS4o34ponURWJCw7qHDYnUFjknTsewf8yTZhz731EN2Vhu9L3AYun9kdtEUfW8PQcEKHEFGzNNU5",
  "key19": "4nSKYkvjUFD2GzPsbHeyCbkjVbDUCZ24aGujrUGWYC2XCWxwUSNJe5oGERUcDtLvy9pwiD43RXm1rKQNjsptiM7n",
  "key20": "3Bdt7JCYJMSc9T8YNHrCjkznCUTH7wEydbPSD9ZNXekUdZ2x7tqLdFAZmY56GEzeEB3ohKyoumi8jhBYn8NYkGcZ",
  "key21": "5wMUz17oa4hZvMW4KcgCUGpEuWXwe21Tw4EXE8X6kwkxfn3tdRriKdiLXUqdKD954P2cTpJKnGsG3rmtxdXheA19",
  "key22": "a7Ns8th6jL1Z3x3nyoHUCfs5RLpQzCQ3iWmzTcswnuMeHYnNqRfe9ERwgnvKjXVrgZeSanVL2aFCvxwVfESZczT",
  "key23": "3VJ4SPWTtdRCmCh5M5BWzQNx4mLHf4ssB8Rki56SWEjW6TowcRoVCLCKVDoWiXG8bQgujFz3kSntL13ZSUxRifdh",
  "key24": "gWj5XuBmwhBZ6RzjSRAuc7RuzW6Vdt4M2iaNcDFUVo3DyU9EefReprpmA8B9exkMbLTK6dAroUtKNrCnbdNyzKj",
  "key25": "4Q5dPs7zcpb5CJq8TtFAHc2h1UmAwxFgLSbXq1oq3fkqywcptpQ3t633CT6FZGRMWNJyzy6KQzpxBteoydfxuSma",
  "key26": "48m7sTi6uDGvft4nSsZGZtkkjm5cV9BkMBBKtAzdW6YsfVGdfThkBrRuKELHiWyqxruEC2V2RErYW5osEPR2tmuw",
  "key27": "3CcHSprkskbTQcS8e5pQGonpghHgYpxYe1BRnULi1yiooH6XVyu972aUVQYPzabYnSSvGAMY8DpDTbkktLLP8PsP",
  "key28": "buk5iYw1NgpSCQu4a8iNMuWZf1vx2LFQ81rzQJsaJZAn4F3YiKG5WxAahMP7Ri7jFkGCXBe1fKwxLR41cTcSpGv",
  "key29": "5rDtenxdSQYRQ7cjBc6QsX18drZQs6SqAkFutibqYNiHczG9SuWhUqZBZaT93ANydCtmQEY4Ez92iZh4C7EhwyHi",
  "key30": "72pnZdoQjNLUjKAgneWpkL8mYzDWwKCa96iw5KkWANR62cyo1Af9RZFYqLAHs87iueCdh4SqF3zEmnhLxekCGSk",
  "key31": "4onjgvHrfSzhNiniDVzHTDLDbQKHhtpnB3KbjFVd3WVhV1bT7iMnNxeKiFKNM9NJ7Gnfn8hqwPeG25DFsMEregfk",
  "key32": "i2E9raZv3papJ7Y1mLC2AJxYStkStiXiEB8EsbGPWt6Cbb7fAvf2vQL6BFgiJLnWLEuYZM39mgM4U9ZKk18un2J",
  "key33": "5ab66Xvxdf7QmiZrwyY49vKDq6it5qaofZbH8yVfAdFdccMrVJ9i8GmDtdgS6XKVccQM3LmnBZiSkQWaDi7EfYjX",
  "key34": "6743mgfLBC1X2tWxaobSPkrrusMi8uEAv63FEE3jMT2fUN1vQNrpPMvjUL1jNRfb3r5QeyYbeZWWgJgyuikr4tvx",
  "key35": "zKxrMyeyet152NhN7zB8J6hokEuqe9J16gMUdPRtrU5uqs1fWQBk6fk6Sq2xbMzZTsFKndLYR6VtRpTk78L4ENi"
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
