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
    "GYdj8HqnPxb5wguvo8WTbQohFBeEbL97MYW8ujaQCyU7Dm1y3faS6RHXpZo3BNNXQRqaVL3oSVEYW7VTub2fad7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JxAjMkpFxQNdsE981C9X3ZiautrZd7BXqKGu95NNVDUG8yaQcvUi7sQF8ptm5CdbPSm8XBqeeFgDWAdE9Gz7n2X",
  "key1": "3TccD4tgv2cAdmgSQ96xb6vzrC9nhiezAaQK2STAaqMxvDqhEjTd9zVwgfZAqFzQxtmrT8ikSL81M9MiweJcuSr8",
  "key2": "2mkYfY4QWf9TY7VxsxLvGA7Ju4gYsw9d1qDzUJmGD9dEn49PNynYKXHkmFbPdmxEFGkdAUA7Jcm7B4FovTD7M3a5",
  "key3": "3rk82BVTJSRNPmjxDQmA79iuoJHdNP26mkqUAUNvQnVDzvSRpvR2DcMFpbCcoEC48QGnHSMtRxkDWkgSBicMJd2k",
  "key4": "2eoCWo1Yc3FRDFcW85Ty6pTeD83qiiKwRyxigzNRGXZA2JtESnDyErW1kFYnVKGyU6ZrJprdZpKDCNmRAPjjbsEq",
  "key5": "4g5u6wFv1M6W3GUN3N5TCzPk6HsSrt9tweRhLzdBubsYDZk1ryuvDppPF77Ja8iY83HieheqxVsLEu7vGVR4863A",
  "key6": "3cqgc6VwMESjvGTd4JesYk5kdqwrE6QPhFhkQLMZydPQq4Vds22jnZWLvHoXDNFzYB9BMcnp5veSQSwj2fi4KvWW",
  "key7": "32oE89ULhFF64vuhifnx19ctoNgcn1dygL5CCwtufgDrbjXSiY7iMteY54dWCzRqaJnK4Fdv5WtphacB6UDHk6fq",
  "key8": "2C8xdaCHDvKGtmHFbCvxis3DBvDmsUvWPWJP8BPr3yS4yogj2XpZ1SaqJnXChNn8PKf3vcURL1rWjcTy6yAs3WrH",
  "key9": "2kuv1Rjx3Gf8LJbBYYdV6e8ppTvR75HFpRiTnR2bzpfv7AC4aBGuEFP1zqu21rMuD8BguYF7S6JtRsSVjJrV9kDp",
  "key10": "4kYzbe72ACpbLqUk3LQUdgX7fhaGJrAjoaUvN18a7jUzg2CFRzoDavjgEiCCfiwBLeu7ZConN3mL1Qb3nVPJF3pC",
  "key11": "3xu2UEfVC2agSxtP47J8jD5X3TBwexgLBQ1RLPeXB7pE8hdkVCDnZnLj7zLt1cwbCtvtVHbsytP9wsAcq8TcJisj",
  "key12": "soHVVNJCuhZwioCGSzmSsEcbKRSxtrmxgoAV14BEpLhJ8ZLEkaBtJpQ5Ubvyi6bVb1CKuydqih3BpLLZUFnTSa1",
  "key13": "3BfNEJcWH9s9GMXSWwNNpgz8nxeLmR6QMtbaWZgbssCnbg3xf7CdKQRQ2MN8Xk4YSMwtaajgsgSb84vBJHdtgbHt",
  "key14": "tEmEMuGwcw8CByQngWEjb3dcdcEXTjpn2SGtsFjgVoFQeWmnpb5rqh9CZYvsDLPs888GdGamwAsjPeXugWrCsL9",
  "key15": "3hrjfXjcDbpWBEUvwd94aXtWH1TqXYtF48SaKRBqQ3k6xqrLPVgmNDS259KbWR7DrPaes8Gb6NGYHLdDcUZvRc6W",
  "key16": "5jJydwUMdqU8av4GTxsxjVxbzLYKBkeMpeRFUWW4WeQmaAswvrJp1qcXishQX5gKPferD5NfuZGsgDANwZzmSQ5E",
  "key17": "tDWVE9MJLvNCvCA2sZ5JkED55ibFsUZ44BpF6rDmnpGoCNDRp8VFWSYgpq6XPyPXNUASQQCU28xHerkTN6ffzpV",
  "key18": "2GFQpTECZ2eXKzcequHSyn5unry8QgK8jdgQPQDjAeYuVdcDzNEXaY9oy5Fp3PsfVwGuLX2qBBCC5oqCmhCHssU6",
  "key19": "3g6ed7QGQY8gQz4yL57Y8DqeG6qj5XTTcg8QHp44nAeciCBCJid4XxVhKB5FXksTik7KZM9wkiMM6ERhfULjeg1v",
  "key20": "4AGWAkEPb9uCWNj7nupqwsRuXGtrctVYGtnGbeXCZP72YbibMiLCZa8DzLH6dx44GgohqWp69rceFjxZykaDtfqd",
  "key21": "2DAwixavqf7aikfmV47Dq7wQ5uLSLSLpyLKhRYqgBcDowRyvEXkgWs5AWyXKhRjWb17Q4aHmGPkXWkD6QihhztNs",
  "key22": "4fFiKiDAPXBY6m227v3tuZrWqHMjJys3oXjJ2sxstvjsSRAAZeuEzNP5qPJ9QRKZkX26VJvk5noa6UqTi9H3AAGf",
  "key23": "2nkD4gZosFj5GHjMzJzduAVp3GDRf9MLpTrPST7NRBwk64vF9fgn97jgdqRFDVkPGFhegqSp1KmDJG5bvwp7F4sA",
  "key24": "3Amg4HGgHmrVtFB5vjKrQFw6Xjt1XNY19pcQo8SRYZwrVJm6JEGUX3TawBJJx2RzaocEbKFWrScdFZDZ2MQMme5d",
  "key25": "32nxEUUicBVG7syGmLjPKAZcdDo57K9TJ68kLr8kqsTZqBEmX93MFwBJsBtb1SQVG8SYpHawvJbR63oC497nb2W2",
  "key26": "3Yc5zqEdkqGsJzV1CoMrAuihz7jviPqb4LSTbB4ggKVyenej8BSs4fySRfqEqn9vvpTsYg4q83XA7TsHKqkeaMtA",
  "key27": "3WieV8aTPqJYFvnbYU4Mu8gNbbPvTzc2MpCe68KgLY53y8gajpdULFr2F5j9e5Fp4gFeASp34xoCrnpCKKys2cZt",
  "key28": "3G8aURdkHL6gD2dhJNdcBXYwYnHdP1Smzbus3n1z4D5qZPuYTaDhz7NEVZiR1ocShx6dVWAajNG367QtwffVbecY",
  "key29": "3qT5NApimGYMSxXdAo8xKRazZmmskbzYzvpC7ndoh9DEx6gVcGXoX5YxfdWzn2fGm7Zzr97dVeap5hRtzwP3ihuA",
  "key30": "4A5q7sBtAVDAPVQupJXQ1DJozdpVxyLKq2yJG7Ny9dLZF8Ksgsg974nAGR32Y2S3xdqufZh4KB8vR72So9uRnemA",
  "key31": "34MVjgve1RP1EfHimhiPrVCr5mexiiFuvR6ffqVBxVeXrZbiakpuUh6xncpkt94CBvdU8eys1pDFemDZN4wLeLtc",
  "key32": "3ZpwFM2WHXc3R29wV7gH16KyMEbLBVkwEihE3r8YpdSsPDqDaS9Ux5QtAPiSHz8jh3zQ6MZ4gRhYBLzpHvQH9oB4",
  "key33": "5tAW13gC5g9k89wgdU6wwh327ebXbmE4BeEoW5e5iQ67D7pcQsEEZkd8ied8iVEYkEZFJTEPEEaAHntPMVaV9T5s",
  "key34": "3GeXdx2yzotGU1KBYamMNNUrBKTuZGWamLuGVzytVEEfQjqGxmo2aXfMyEVxuY89FoCsPMfffJo18iSrijvWWBJK",
  "key35": "3tGjKyAZCbRDRN2KY1Z7RvFXfkTn6ZP79g17ffLhPudNfNN3hJU779b1Mo9HZwtorjgFEP93tHz31n2kaXz5Ng9A"
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
