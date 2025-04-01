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
    "33Qg6jH85d8hbtxT74DhD3gng6kS5WQzXsu1EZXoUGBXGxFg6HM8qRT4SKswXnktmYGqWrj2bnTBELeaLQaB22Px"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fuvyoHRzQYezBo6WLpeE7sk1nJ81eN4Gs5cJHF66F3yX5CS1PWRn6A6rDLSxuCV1AjhR5v6Y3Mw66k8svwhcn49",
  "key1": "5prfGWcewbWdyT1Tqsu2aM1AT52ffVWnXYiJkGyNK95ifqJuAoyCXoEb79CjhFSp64cmjEiqnvwMZ3QmqbSuQjJt",
  "key2": "4AE4kxtQXCdKCHgWptjQpYGwKKGoTB31BTMrj3UdyxQA5m4zfFTbUsQs7FD9vi8XkU1jCXzTuoEnXmxpGfFpLr8F",
  "key3": "5DVREbxY7avpChAzJEVAePYpTj64LPDGsTtk4841YQCzSZ5iBJ2S7etQEWei1wfieQEgLYux8JnpJ4VYcNeEkcKV",
  "key4": "3j7JSdKdRZFqM7ADjPyXM1s9WPWWHq2R3A8ducFS8rAtHJroitrxyYDUSLPMWVyhCZYaus8RkvgSgeDqFDrGYHiw",
  "key5": "z8mng5uUFnXrpCxQS5LwEHKqHBEAmLxLzMFWquMbwmbV2yhzT4m4CzLZKV1REvHpLWzB4Yz2nJtJVqeaya5kPS2",
  "key6": "2YNYkg2oNqp8X7emTcDzvjfWvkSWs1APttXPwfmncZ9qe5iRdcerFK9skiweFX8NjVXxHtcfRd6hWL6HDUTJ77Zm",
  "key7": "2NL1QxrER2GYrgcPL4jffo6xyYxAEZXydxfrDMEsAaaM7QmohCZxhPp8jfiTKZLEQDgR4Vs8DN34csrwy1gqgiU4",
  "key8": "57BL4TiQhmooni37mk6uCkqKetoHBsc1H6dTxtcAkqEHRq45oinixPHjsZoy8voo27CtJTAoxHZuZhET5DR654dK",
  "key9": "bSAvzX9Y2yxH2jgV3W2Nmi3p6toL247jVspknRD26bZyWQT2ivxBK8syPEimqEc7Zfw5NHS4fNAgLpibVNrFwHj",
  "key10": "3iQYioerUqwSLW4AFdXbmhYwG4CTv9f8mmmepTJ1yKnk7Gvrc4E2hRvU6QJMmDkyy7zYvrsQymEic61BEnMDVb7D",
  "key11": "u2GeXsegcXQdDR1ev3UMYakz9QZoVRk9zNYso7Q3jiCxRRvyXCXXUdWdRUkUEg7BmAvFh7bycma3o1Zn5fJevb4",
  "key12": "5SWH6dDxZE6dJuTT19B9V9NRYnfJf1pp3RDXFxiSsaCEyedkTawz44SX5nmXiVs2cDHxgqMNH7MPBQt1LGkDYMwT",
  "key13": "dht9ZGPJ9TUz1cXU2EgNvMYmCDFkrxuDQ2Wc8tkZNMAk3oYE2DbnMMu2RL7afREYhMqiRPAZTiZzNnQp6hiu6Yh",
  "key14": "5y5kEs8nXHS1BJ9PDyrN626x2Prwo83Ay8dcEcD3kUMCYz5835BiUcvcy8Sp4tFYLjxYq4dSyuheuoepbsaf7xSf",
  "key15": "2GeBwJjaSHnEaNCb4S78cHiFeubN7VtrAe6bboheGwXhezQy3sL76Vnb5oY91U51JHzetMCk5zt8pdiRsiSTBxU6",
  "key16": "2LwBB36EknfJ3Dy8hXQvFLnFpMATTym6nL2mXTjuX6XDjDKzcbyK3GjrAoJTsH2PUxTsTdJ3gYk82eYHLM9tBXiZ",
  "key17": "3TRXg3p9Dmgarwf8vVs44t7LqyP4K5FbNGrau5VEK4prXf1zrB6Ej7ENxs63WSGB89Z3Nj8tsL8mvjVBPnKsFk25",
  "key18": "65wR8AmbCmuoQvpZiJsFEwKTAZUNzcTAujN7zPFrgKUnomo1oFYQRMHsngbHnc7UJh6whTQVHeBvUf4iDiikt3nt",
  "key19": "xG1G8hJTfwNzdeoWcj9LmwyRnsmdYjWCE8eE7vmyKw5W6pxan8G2LNYrsmUi4tc1HAWMBctSDCaHXmEpUnoVegx",
  "key20": "32mVzy3CmGDejBWxdqmZTt5aby2bRAgTkMw7NMSmT5TRATmfXJyJyXVYpx6aT5zPBydVHACsZ6c24aSCM1U5FSBq",
  "key21": "5oG5zKWi6QbwRrZXKv3TQcq3HX3FG8661purGXb2c4EvQqethEEDRHuUnhdUnn17iG97P5swppLZGfwXG9i2UBdb",
  "key22": "nDXHxeqQt8HbFxaNYrPkzwh58xcRj9JGv9AWu2pASYnbhegSAZ4iG4namGuV8ZV5AQW4kNFiMk8A72jreNaxEz3",
  "key23": "5ZABz4NLvYTCBXGmz1Yv5SZC6wpQkNcLG5wyR1p2zEher4W8QPJWRxSYX9GEDX7vwwkBvvvAgYta54k92zpsvN6W",
  "key24": "5chR3LyoptnbDKv6Rw3AyLyxo6URAJGbA4DQ99tmUUBiWjJ62fEahSAxqm67nQ54thqF7kYr24avU6tqng9bszev",
  "key25": "3ByVZ8F2szNfQGe71cTgt92XpjjvX5ngu1YwHvHwWxXrqzk5EuvnEhBW3rpXwT9ehgYY4rRciEvrQYWxMMowa1Zr",
  "key26": "4TsmiAdwGxpfHP7x1o4hjPapC4E1J2Wzp3o41pzKgA3Wtezjmw216z691Nso6qygnyT5CR1krxkXiAeM22Z2Qt8V",
  "key27": "2tnVV3Nh3L6QVatRuKZkuBdsaEFhwBwi86HJCiG18GJoPxmQngjAXpfNExM2U3LEf9ZFCskB2MR9VM53yKtBk3Zu",
  "key28": "oKjeoNBP55b4kyCTpJxA2DuMpop5YCbnmd2r1hArkt6vmYKKQpjM5U4V6ghb2BHAix3xAYUc7vVr9s2ZsKsGKsu"
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
