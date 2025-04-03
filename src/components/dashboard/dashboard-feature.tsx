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
    "3Fvv1eiTuGoY3CVY2Co5JoJiv14iiucejpimZjoZ7Y7XwkpALRc2kmcAat3JKo7xGkWyqy2uvcRp3S4hZGuVkmYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rf2cDbdFYsspL3jQkjuK5SxQM1kuuUhfExRSXc73hSR48H4uNC5RcD57xy4Mb8oUABrVWrQWrABmiUbCywAoAk2",
  "key1": "5HRdcesnghsfcex9Rgxcz1qCjtftjud2xFsbUGbjGx1sryLQZ34n7dr4mWL19GhpLpgHu4hKQSbZzQdpHEfALLRt",
  "key2": "2bMqPKLvNyrEYzPXH1RGKzJxT4beQAPrh1pJaSAnkgzo6hArGoP6Aor39T3hdWmc8A94azjaFowUn58jQ3QXF1fx",
  "key3": "5SzDRD4cVUaqKGfbNAGT5m655eiukxCFTrfS7eE22gQMVoPx2pz3MmGMyg9xs5eXGQZmSkvd2rYs9apcRyMTNcVF",
  "key4": "29x3EEY48bDfUmHjMH8RjM55juyKdwLMfcHwQxWqMdhkTvTQMK7rrPbXUgn5V6kq1sC9C9rNvWdM1PhGQ3r7DHLQ",
  "key5": "27H5j9EEisZHUiYYhLiBZysHNGDHyJMnaqU4uZXMLocUypfrvQv7ujWaShJ42mXaj4sfRMeKbLtcnTvmxjkzGEkV",
  "key6": "vf7pL8xVG9ssJBfAkrvrU8PTmDeZ2UWs7BkotXXNeLyb4QgfNvmuFamt1cXaEZYFWqJktbhYyDUGQTjrZK2Y87K",
  "key7": "2mr4NzxWdvmtnnwUWdYuRAHJkVChFHJcGiAqetS7ZKpXowVqiHY2qu5AVsivjQTst1ycAy6moEAby4uUhVL8Pt7A",
  "key8": "Y3yNLTcKgtkAw536baS2hNJhS9VYrXkXiDdc8zA2fYBWc64DEfQKw2DybA8VFf2yk3LyVmr6Hu5v27jEHkBr3sM",
  "key9": "4gvn7qwF6wFoeHxteMJJopBaYoT2wf6F7hBh72uMG59iTMqV5DrkrE9syLN7KLa1f6xdBzzUrHRus4aYYZAZPQLt",
  "key10": "5ugUA7LE4DGEpWWoy8k2unibu3JjLgwbK6sfFHNaKp9w1JCZVzj6Yv332En2MiQEupbqr7WahSLhsivYAZYjkigA",
  "key11": "58irFhcN1MgQVvH3ASj6kFFbMAXyZ7s5mBbKVqZu9rLNqCfCeLN9uG9eE3T5uokuT1nNKFCS3kpNUgAenUV3XV5L",
  "key12": "5kD3fisEP6woF1zjxSua9yVa4RamGj3NbCNXnvAnJrZqce458uMvpnJhxFiVqkBFsJgkRiJHFNYRf9aj7rJHxNEp",
  "key13": "2RWMDxdHFWwwpQBNrk5yrdLszTXpFUFPohWjTzDtpTt3NeEWmFqwipNB31t7HqBvKiNYU8ij7db4JHhqEH7CMb33",
  "key14": "3XCcJvqghDngFeVQ1SqDiPeakZCRyAHcu2A4c7BLnAL3ZzH3EUqRwwqbSEsCdNQGnk9PHQdUyoGYCqQMgLJuvLJF",
  "key15": "3KbjuQM62d6MeeQLa9TtTB7FnWoD64p41ucNcAXGyNeLHAexBcPC3vNrXrfLGbiZXGLbFFA3AbgSqyBRr3QSwiHR",
  "key16": "5WDsdkVTGUsCCLXmBFy36S9WAWa1KzzMR1ehoM1udYGPpUK2uYERHpbU9dzwM4qcQ1ok5FRkWmnBsq75bRymRzYB",
  "key17": "5DSsvTvCyZedgZ4Q5fU962C2qQ9JCAJF5bxsEWXi4Qc39patoRkD7kP8p4fEqRYppuVeBkCigFLzknVim7UUE46K",
  "key18": "XqAmKJ2t5icqwKpHoz4UnqM43fqBoGrSR1rAm1RnmSj6GUQk4i4BK6HNvF4TJ1NR6iEQev85KntuquvhriwnrgR",
  "key19": "2ktrYa1Vc51RBZczSBziUhqywfsMxXc8zjhsbtFokhmYmvEHALRm62aX9Dc7AwFZ7FqHaY4ZFsds4SkqYa4NpWPj",
  "key20": "65JkYFDN6cWFXupNNn1zTU7UP8xxF485czff27n46ngXpCgbK3NDScAk4h7bU6gHh6RtDxBvA4Ln9oUaiw7oFcwy",
  "key21": "S5PegvLykqLjyctVnQ4UM73kqn21YuQoifqyHTp9JPGfgMFsHEC4GCAo7kUYj6QS2rripEmndDpmW9D8Hihd3F3",
  "key22": "2cXAm6Ebs1PPhfSSpft1RcJpv6toL4zifkyVPwCPW8y1G2xEPre7cijR9bZcoXtwhacsbvPPKqnCFM1oYEMYE6F5",
  "key23": "2fbKhsJmryAg2S9EDggDZsf1zmpZaBDWHNA6Zh3Z2Byp39D65N81DvEvTrsv8y6kZUoDMR1AZBBoHQex4AfrJG83",
  "key24": "45FVicHQ1hVEGDuPkkb4jhALHtDuPoFkyamFHMfves9FzF2xCCTRQCPvVtBZXZbfBHQPYXcYYMKraV4TXp8oqTpE",
  "key25": "86qFAhyHsMng6rsgqmxWa9Pv2GTcRnEcP3rQnCWrWv7xom1GDrKmyPJicwBCKDj1By63KNLfM5ztYLxGSLywmij",
  "key26": "TbDwTCSAsrcFJMBoKJzBwyfcpTg1zcpxDm3Cuhhd1yTRsYh5e15yDBrMztK4WGkJtU1G8b91hkDUoJoa3HpbTQn",
  "key27": "okmzdqGguDXJGhnf4mjp21ETTVCbaVak2iEoCpSCqDsnTiStQmc4Uo1fRD9eafGntt7wCn9YzJV5cfk6g1kZejq",
  "key28": "3Kh2Qwv9mrgjn7fZAX26Sq83QKgaV3ULGb7KBscstaEnYPpkdU7v4TfhZgDgb7zPTCQkeTYuHq9PMK4kpimNEsvY",
  "key29": "2ci7mhi9DGz7jWZ1kLyXNCuFtqfKNc2BkmY9pcpxJZZjh7WsM72sN7ekFDCSZqJ6oXFBBGFbXaZtmLGXu5uY9Esy",
  "key30": "HBmmk7pwGoZpA2hkUGur1FSBC5PRuga2eSKKPs2VhJLQRt8v8ZbPAYB8vuhfrnnA2AXa6pwD9k3j7dsEqZghRAB",
  "key31": "5uktL8P1GwBy7RnaogsBDdjzGfUNDCmKqWVDPjh1t33fdPtzGAceXaUqc8QdvaBpq22EKJqVeNcSrhagzrQjz3Ws",
  "key32": "35qY95Cg6RbDe3qW31iXVXt9WPNKrQ4WcSvFPE5zJFXWqBS65UGBGdUiP95UFCFgajjj8jCBbVJWg3KeqZkTc6yp",
  "key33": "5A2LF9aFgzo1yHRFzpXLFpK39hACrBywo69BQvTGRfYdE37KGes6mJdRuXTK6VU9eGKkRXrJLD6BQYMgYmFHRtj",
  "key34": "4LqkuJFnFUZT6C4QTHgb4vwhsTZe9seREZ6bKTV7JddGukdLdrgEuRQuHGiHftTb4YkjUkKSoCAJsWGExWkAaooS"
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
