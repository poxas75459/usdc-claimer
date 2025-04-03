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
    "2itypYGyxUSVe9oy6tUijf7Bmb3xh3rk4YASq1Xc83jSBXarnntsEyZPXu9v864nCyCuvvk8vXFe9L2EHH1XcT6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M3yF31i3K3NNcWqsXqNji1LctFttjLDG3xuqXTyBz9TkhLCYDHyaxw4wqh6jqZLYJ4X7DiAqmcADRhW2KXLsUcK",
  "key1": "3XDNrEgDqpZZ8YMfkGr7vh3fnrDChvp86hgZVNDn1hsGaDhYBAdsC8UDW17B4DViTomtpADWj13bK4Nf9K1GBJsL",
  "key2": "2sZuXQoXr7PEyu9e7d1j9YgJ3ZQeHWz88qWnWx7SzZLDAk54reRYQSaV4qSkAWMGXvb83yLtW2ZNAH36V687rpfL",
  "key3": "31B9HcHY59VtzQEDo3r5ZtsQ29yCCuhNebXQtnEjyMxALjGYC4UUy72Ek7SP3TM5WL8qsdw8Amr9ikFsxjiwkSAZ",
  "key4": "4wrGFA7oY6VypjAGLZ8Bcydbsv2E8NwZWsjUgm6ZMNSstrZKvQkh7cD6224LWV1HMEdV5cNd6AJVs7xay7QLkMrc",
  "key5": "2he9H1kKRjBMjrubcPCbTq2xtH9v9NnzqHxcM7Rga6P31FeTNbUF5JkyG7paXqMsfwPkDAjuEuboPcwKRHxERxTU",
  "key6": "53WSRFHddLcaSQe2XPYduULCseMJc3LM17UksouJwwF7bNTMXsfLociaFjnkVamxq7upPTTwv5NahRFLDxvD5Tmt",
  "key7": "2G9UAKg9ExW5BaB3EWjXCrEizCJnBi4tgXky9SRtY6Q9nRpC8vuNHdZA3Q4vHrnqX1isSDK6YHz6vpRscD3vHK9f",
  "key8": "3FwDJ4pJZ3C3bcGb5tFkpdRmdyPpRBDikC8dEkacSFTwNrJWFaqzAr1hYL7DQrQ78h3z1g6wsqwtQaMrYUm2bo9g",
  "key9": "3QyxHQj8zZdB3nv1v3wnc3xeMGkZnYFUcYq5kKN2saAxYpt2AB29QtyRhojVX4EyvoGLsDviTCJ29g5x5sLK79P1",
  "key10": "4KXpqK3hAHQec5UG3fksGFpASms4qDoFDvG1jXPDyJUKAkiVLG2gAMa3C9oBS748ECLJWJwrTQvW3a49pzK6nqYF",
  "key11": "2DpxGmL2D91Xm19d1rSyyn2xSpTCjCweAyND28y8FMfYG8aHEdwLDbquUp7V68VxizSStsEdkc5h4YtzHt6TgySG",
  "key12": "5UK9NkawfToH2vETTCX7GdEA1od9s3W2J4oP9yDo7VgkZrkvoDmLCWscMhGEuqeneFkVHL8iFD3hUzf6Ax1qACJW",
  "key13": "3KaSQGEJgFNhjtCgaHzmZGRf5nyczszMhT1jrFnDYX9qxVvW565sVcrnrsnLSewTyvFejvnK4tJXsGggW8ieTobb",
  "key14": "4W1yCK4gttNKEaXSw41TpjtEomMQjBAA8YiS58gkZzY6t4UuzxFF8um3SGdBvKu5orehHaE28hjXqvcX3Cj3BT77",
  "key15": "5yovbCYBCK57LchJWqHRbaqUCSSMkSdv2AT7SUUC6gpde2U4eLBwboqjRM7gXJucbx64fcGTquKKk4nx3NgjQB8H",
  "key16": "5pAz7Gh9Z17e1AX5wiFWJPaaWQV1WRycurU96Nq5DX2jiUUEatAnJ4vGEg9mz8v96CfkSDkvn57FHTGcr45JJQCm",
  "key17": "2Wvadh62jMs9deWyj4xYvxeQBsai5omZdbcWWLHZRmWYw8W9TudNawoFp4oVJvEtsDybEdirK46jom7UV4byqU5a",
  "key18": "5xCY9x6tUuKktQ2JiCsKW9KeLTrtLxmkj14HfeSVGjFix9LXacqyLggb15EQBnkGzm7bqKz7QGwno5eV8KdvUHBr",
  "key19": "4oYkNB6EtKptCRkQExWk9Hc4BwfaRwzoixThrS84CohJSUmt7tkmz7rmGFujAMYNKkZZYmsGtqL7PkBVnweWGL6B",
  "key20": "3J8THpn1zKbiicui2QrZycDA1HvYBiFgX2UmDrY2jmbdpu8Yiv8F2QxCAivX1B6gdNqevBDQGMy6gxhDozZvK6uP",
  "key21": "3ygFtukGTbpQ4XQyCdNCZAxAmSoEvtK5mtWYTwyzHcg68PDkrb1RfgKMvtHk3KirXLHftDA8WH6he9unr2kNqpCg",
  "key22": "2Xmc6u6AERtkMdz1bXAPJKWgmfhMvTV1SerdHVsfteAy6hx4qWZuQwpTgU7gVSw7VrgCzp9t1rREcFjez8MYXoWT",
  "key23": "4w7DGamZgDKzpprFxgyLkKjzcHZb8vLDoA2oFFWjfVr5PxphLBC8KUQgDLPre4y3t7RPtuG2tibtydgPetPmCQTo",
  "key24": "HXr9CZgEi5tiQaAQdpxyUYo8EvMaXuen7ix8k3GhwkTyDS8VVTMY7czdmpZBz8UcbpRhp8aBTMAfu7aWrfSKzpW",
  "key25": "TwQSm8szXKKkt8xoTyrmRWshjvK1tsJxxCs6TnrBTD4cMgaoA9pJH5miMrLSA9mX354cCvXFbnVZVPoACm9JfmF",
  "key26": "5JUTu4VdKVoV3HwrB8tVVqkKLm1YvjQPcxxqru3RZ3AgoAjB4XzeFcCTnwC937QBry5HPkYhKMqEFQMwDFm9NbEg",
  "key27": "3qepgfpgb1uGHUXKjVhJwZM9PUthCnaQhkMrFBrzc6WPJNcU8unCraLSfErSvx7uVDYk2HeK3YKsBa7oBNX8JpUA",
  "key28": "56a1DVWAoszWTThJ9Vaac39iSSKVktinVkobTdy5ASEr7Qg7tnfx51vpiV7rRWcizhuEH72pY9GL1aNJ1n5AgPM",
  "key29": "3qmb4QSXNUtJrNDjYLnF6EhHiK61V5uabCCYDP7af6QBxbYpUEXPLQYKAiAMBA89fSeiUDbu7iJCXNsicnmRjJG7",
  "key30": "4LboZLN3KY4Sg5dngREQj1pYWYqXhmk66NUdZkEYRWm56jziM2rfiKWKshEREQtHb2eR5Jb9UuPpE6aRdDJb7wow",
  "key31": "2c3tmbEe5kDLEHVYBPm1EEYn6NPY8iPxoEmMth6YaLjAVtmtbiu5As9urdQBzTxREjrgqv8UiNso4xL7Zhrrh8S4",
  "key32": "4xQGK72AMZQY9MJq4F3c4GTZqquYZsKEHW4xR23TNEK4VhUacNStDPvLqfpcuzHwFg6EkZpeiYejEHH5oR51wPoK",
  "key33": "2NtNmFx1rh1zteuAPci2MK35cWYLHPxLEBrhG4hYMDqPra9dbwW2b3z4pKcY1Ct5w3hb2RURFFTYrfF2F4cZEpzX",
  "key34": "5iLDT1JnWNLHrrGFJL8cvvdA4tRc3K7RVF81adGykUpn6bS5PdAdY2zPH2wcLfciLNaEe3ZU9BZuqPeYSPsZzyoj",
  "key35": "2XE4FrjQjkTX2okv2N9XLgsD9AuyHHkLZ8WDRYE2f1xQDYJaCjdnAuPzGUN7RnqiSCKvgXCY6Li3YvYbJ4JM1ZsN"
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
