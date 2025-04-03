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
    "5hQvyMEbmUnsGkDBbLX7z7f2hZgx5g5dmCQkkGxvooPCcw82YwyAAfMgR3bs3nKVVtbVJZWZP4urav5KpFdHRud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FJvxMe1z6RhjzJUg3tS4nW36B4Y1qYLRRVtTdTD2juaLU8PqQKboqk1BsMyx5ZbkE823E1fGnmAJRcUmk6Wn6vC",
  "key1": "D21Cg9AAWsjPgJxP32oLa7qpgLESikDdcvtpBKeHx1wx5f6xixb3665xipvNTUcoiJBWotYfKCE3RyRxwfmFFxB",
  "key2": "3Pu7KDQnmmqcCteXW6Aps8ysRQu5GPQGfCSa8ZfFcgdo4xMGjhSz9a4jjw6wvATAwPXAkcEmBJNkoWSHiQqZXfRr",
  "key3": "2vq45aJChLz127t3dpj8XpvQoi1kQYjCB9bnMUngrivudGV2ivMFKhrEgCkvrWsx8NKw4msjGyiwxwZfWhngVFiA",
  "key4": "4Eaj8j7KbT6yDhb6oYFJohG8UQzaTzWMxbcpyQBswnfcBpH8LQyUHzKRU7xbU6MFbbWrrbEPRPppxTcjwm18rmoD",
  "key5": "3fwUkVbUaquKxQm8ZYV7HxEFEtsJX8MoES392kMHfHeJZLBJCSzo7e2Dp7U2onjsAHMXxLQyJkY7ZE1L6MX46SN2",
  "key6": "39KtDv9o7ys15FhkyScxTfTz4eWsXdJKLNfircg1MD2yYarobEMHy8ZfaKKwv5zxjnAh2fNnrrcRCEs48xF4wGgA",
  "key7": "4BpS25nxDjX3do1AqyXXHP83rUYCip3HYdXLSr6G9rwD6L33uwHucTjbCvsAYYEoSieUcFh23q1QoZAvnaht6DsA",
  "key8": "5CVdByWXBK6nNoCr1XF1r2gkyzs9JnmkhfRahrd8BebMNPMhnSpcQfb17ijSumtN2yaNwcZ1MpBy9saJdJArsXYt",
  "key9": "5SMq9u6UVpjkqt5sXHwKZEvyZX2VShacsfLo832vmxUpe5iUF9kWD23htWmXsvS2kUP6CnMNV2rd3GYkk47WoD3i",
  "key10": "Xie8suHQCDjxgdgyi4tmLqrhhmR7DMrGDtyf2iQDivyx9tXk5mc57i9Byq2DxDaQaWYBAYEfshtSQXoG7zwv8eq",
  "key11": "EJrJ2BVrMRCdUYbBmAzkUQidhwqXNckn1iTZLTAywXSsihTrjDahfd4BKZZmJpHwwexMZDzCFiEnhZyN7PF5pcM",
  "key12": "5N9sbfDbQsfAZZaeZxLS2h3NxWA43tYFugwFpaNZ3oQEqUDtuRjmJCEsJ2TtAYMi6cG5mnFcvKayYh2bm8VF7JV6",
  "key13": "4mMnFy9abofLPZh3WPj6MTAaycwX57tyqKTXoFJoPtAeFH3geDyzm6Rd7sbpt6Tmjz75xnvZpsw8ryFM2gXhLrGL",
  "key14": "4SsvtVLvKvGdon3coU11o4FUfLVEnc5SZRA5rFFueAQcPhDgndtQ3ovy1JNZu64XVwwonxh44WKEzdo3JQS6Aw4Y",
  "key15": "5ZXxXtFrQeCXyJgz4VGbxRVJPyP8LapAGtkCh3Eeicwpqy36cBZ6Y1mjqWpTZxKzrPLgZEk3QkAj7SopE12fwP6X",
  "key16": "5Axkrz49EHkfrs9NADthpkemspYrXNgqCpbe8zMww8inaQMiGSrxgNtTHRp1tCepscCnH35RhV1syB8uxHbMCjGx",
  "key17": "2GZXWQLb37FR1ThsnLSfQY5sCim5poKR1SNNzHYRRpC4DrYBk3NuLqPpp627LbG86uNc1U5evdEjPu6Xr1EVLHW",
  "key18": "3UCbAWgDaeX5BXGjRXeebj7UVpivY3fU5YDEowuvojSHyosvPhP8SsJGKf6GnURcnLowUkdqmViG37ETLTjdEssg",
  "key19": "5ExN6Xy39DrSFwDBLXDPasLE7ernqgYXX9BwyQxBpLkCc17y7FH8Tnqt5N6c6gsFWTqYukYzwSN5MKc1DEq7haBp",
  "key20": "cFW6nsQPz14EfJA3LEcZXnBJzbsAYtZQ7rp62sX6jCdbPzGufQ9CL1JTdU1AvUr2Rx7rE2jCgwY3CyyzkAt74GU",
  "key21": "2cai84jPzRwKDaLyyTHuDR71svyRCeSaNUSDeraj5cKH1kUDQ5fv6YhC5jxuAtsBA7hMxfVnbp3cqBKoGckRfw83",
  "key22": "4FnnDrs1V681Ny5RzqmQhPnVC8FGFKMh4mttr9xwS1iAi1igcxbuVvV2jCCFsH5N8JaSHK67kxR8m5326AtUVEVm",
  "key23": "56dZSNYrSoLRYj2zBWk228bD8PhAeaUPyJovNfuFcJcPj92vVu7czveE1YFgfynhmzdH3Xe31M582DXK6SCuwVfc",
  "key24": "2EDU4N6ncq6sfJbX8mLuB8ir731hkP85B3WiGrkjHn1fgb4oXG8kvAyzKj3GguunKHcKnmQCqq8aWQC28DYksw4g",
  "key25": "9PM6exX4iME7rPM9JwZXWaGJuE1n45PGSrxzyvjWbCVBH8Sg1M8yLvdm8nwg5KRzDD3GxNMph27uR6o915WNG28",
  "key26": "3B1Z4WgCLZtkJDTiC9LMfbXXgdvbZpAGZsQxQXZLWWWv9e9dQRKkX2SGDkkAvwqdqvtYHAqp3TKkoXgNqZbDkoPx",
  "key27": "5Msj4zXDznQU5hV2CGuyeFfTRjbeMjuMpsuTXh9iSfZi2ui1os8YpSc6yqB58f6w7Qr1PVjeVdtipFRT4tVucvKU",
  "key28": "3LfHrwkRk6vYeN12YVWyA8aiXuakjw1nfxGMmh9kF8gLqYgJ4uFfQ8HKXpnsaozXBBqf8APLUo9y5qxBLeh68dfe",
  "key29": "5Xs5VbCWZ3TKnyo3rhjFqMZZPabncofuBGLyDp2wS8HnNhVrK4h7P4VkdCEdaE9jMXEotgHo74nAfuwMSWGaSjsC",
  "key30": "2Zu8zq3rbHJHUGMKRLxataikfP7WSg5TZtywRDAXp7zD1KvTjnCFadPsC5dsxEPtxdQZuJnEvFu67EGK5aP6hT5D",
  "key31": "4m7GNBpjRK9nXxWYzYdqDJkwotVCpEQzEjyA6bkzFReG5qxKeT4eBKyvazv4QuY8NCakchaFjETzE52uKKzV25YD",
  "key32": "ZJSa1guM1n9FNai8iN5twpWkZvs1Yq1A6gpKurcB1FdTnxHDbvRp3GenZcGKG3wqzb1tgiBLSGe3nazv6EwKqPg",
  "key33": "4SdzYJzN8JVhuryAryDBYAemgRxEnB6T6mssHs1jTBK6GbGDsNitEM3ED5C3cQ3WGRuRheRooxidjMh6ucS7zCax",
  "key34": "322PHfe6FdQ5VyQt1qJYAFTo37cMnNxrDsAPMah5UnvkSf2runMnawETaNEmgjaC9bz4RbjjvBXeEqi91N5wpLGV",
  "key35": "5jfibiaqZ8DZwptnDBXbFdYVLwsNnFuh7g4UDB9ZWuubcmQCpKF6JT2SxNLzAJAMnyXGAYo1qLwAb1ab9mD9zjWQ",
  "key36": "3dBGwjcmzm79hvBwYiPTpTNLAgEhCJU26WipKNtvBvzC1seWTmdrkWzTWYhE5kUxGzVuACPDUEkF83jpsJVdDWwG",
  "key37": "4tMbs32rcCvU6gp5mhdR6hsMBHjujh4NGCPF7MoVF6DjTTh2eh1UjUwCyHWtWwdx5W8XaF6iYZRw7bbbNcG9pPzH",
  "key38": "UE9rqPLskPTJZyuwXfeaVZgU6pWb7qcDDaUCxbxg8DwuSSWBaXJVea4qHZ7fZzh1fLSFws1BoXjE8DPPFGR76fg",
  "key39": "4rfEYXnVC1mVQWNpcnzKERfhu4qQduCUBkTBZ64F8REHi2X2NgyujNKjFDH2C6wB7u4tziqVYDmL45eGwsFh9Wv3",
  "key40": "2zAWj6HAw7ezkvVfH6HkQkJqYD3xXEbjTQx3q5aXKe5ctZJbiPFWTGpXSJM15dguhgBfSxCbxCrzJ85Yuak7hg4y",
  "key41": "3wC6pUsiK121TFaU2bpQXGFGuy9EMgbzuiJZmYbLhbfAeB2oEChr1xL9MtqsLfwraTtBY7J6QufoSJHpjQ8ngACD",
  "key42": "2p8AXZYBnvFrBJe6JonXZkAbkJ3YM675cFkhnEyFJ1oj5pDu8EiTsTZb5kkB6kmCnG64UdsDNtDAGw92GVLdyCdb",
  "key43": "2pnAUqHx7KPxbau7JmFHff29QmZWArT7dfZHtsV7cR3oc1fJ3UDhq4x1x5rhMRSGTW3VwZgiPLwKJogY7eXycXr2",
  "key44": "3UPDvnJz1hKqQ3spCovgzup9KC98TiCUynwknjfCQcoDoT29SVxoJrHYQmrz9xnL5Tc1gH3n9E7SjEzxTnLPBfvd"
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
