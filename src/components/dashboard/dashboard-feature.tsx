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
    "3wV85WULLNQaWZoR5NAvV4cZqPW1YncEFejHwbBFMxaqLBvtonR2LufyijrWn2hDtpnkVo6ytKazjhnUm449aQ4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e9mW21gfJ25sEkVWGhu9UfjsBE1Y8mXjTxNhPNizu6ADXuLRzNipGLdkMK3Us1UduguVgxYUVv5Az1YtBQnAG4b",
  "key1": "W5PznnT244uLugxJZXkZkbqKqxApGPqAM6xmeD3JCDxwF5xaKNUE7RbwgZVoT4JnVT9RZXqVu3qMb7e7WseEYbk",
  "key2": "2jPShPNgXQbkGoFmdi8wbN9CVg9KBWj746sn2qVJt1qX9ozR8fyhYtX7tSDhztjvNbdeqqTypmV5fP6e8j2H75gT",
  "key3": "53jXPmVTchPyxbn7Nk6MbabyYDs7eoPqqQVyJmN8CDzsUjHFUPHbV3pYWPbvLGA6Xm8WbGcBaaxtDGiyWRV4g1x7",
  "key4": "4KYCkKKsVJgiBrQQsUKsbaoMc7w6KYz39vQNdwFkSUsYy2oEPLSdfUir5AVtXUVVTdnkWeyVap18kmSyfJDRx1Wp",
  "key5": "4DpkkUEMfwAtqHspBCk6Zux2f3SF2wxkfXx4RRjSQoAd2Q59tJn9jRbVHTpSNVroti3RXZxCHxS4jv8chXvZexLP",
  "key6": "2Ee92tMXZJc7c69fvzwmyaVtq7nzmgNWPmoeQPi1UswobGCQu43h3zCdz8Lpk7M7EiCQDnuGriYijPNGWsGfyr5K",
  "key7": "61esHnXzhu1G5PiioqMkqNRtmLW721VJqs7EVs8nJhar4idYvZ4pPXnAoNrPeMKMkLcdcFsy4eopzwhS7CWBq3Y9",
  "key8": "3bXCz3cyATEt3sQah265czxc5m14JzC1TtiBPK1XKkgL23TjLFMGNAzjUs4TspvD6LhqgzgArshJcDFNk7DGVn9S",
  "key9": "3ecKD1wktzTuhvqCEQaP73PvArf1SCqs5Ad5Csqz5LR9W3h519uVP882JVcoABRLvXXZD3FbfuCRoCNzFbpEWUZp",
  "key10": "GwPkms2tXrrM6CkPycZR96edx7KMKbBMCWdwmBkLpY565oPtLt6EdxFgewVDRbzGJ4ussCRo14ou219iXo1XX7o",
  "key11": "3kQPZzTvbBvhHN9XoBYGbWYcvLxGT3h45xzLrhUCZnbu42Pfq3i7rDeY3Cekj6LR2K4rr9poSDwZGGET1SDiWumV",
  "key12": "5JoshGyRTGHys3ZJ93Bi5CZwymvsWNHwnEF7P3yDp9f1FW8HH6Nt2YFzyzigdyquAkaHLtwfPdm812wSwi9C6tAx",
  "key13": "5QAcubq1SDqXxe71Qo8mjcqvqeMK7zmKoomm2skkD2r3wkrTsP1AXuC9PGde4ad1htLXzaz99gqtxEMgLvuaLQny",
  "key14": "594RwCr4WwMiVDE9Krj8GiE1gXnp6RjG3mxyABfwGmXRkusz7dZ1swor7QeeCiDdDnUtTWqCu6SN15ZHS74hRNCA",
  "key15": "4xPifEY9w73PygJUxurbihhjnKrLjYiMBKJJVB3WBekAtGxjU1N6N1BbmwTDFZtAaDvFQYri4bDEJBkRndrcviLe",
  "key16": "uQHJm4RZZ21Crzbi87XySJk6i2zeTmVYgkJxYQ3WCA4YGtMXXPFVFj5czXFdFN3RoUaJvRmf4ZXMYsPKe16YKNi",
  "key17": "4tEQkftzm95tMynWHXcJijfNxmHBhTz7iErD36ZhDoHEK4Sw6U5F7b4zqKwjyMpyihFQyPSSBfqHwU7DKwGQg7c4",
  "key18": "4hghJR3RgjwC3NbcFDMAZok6CN3H6fZYdTf5dvVdmSTJ9uvfxQwnqiB9ctish3JJc5P2w8T7KXv9y5VxyzdQLmZS",
  "key19": "5YhWKYYy3jbfhzDPc3RfksKCV6jd9J8cbhLuyiw41WMQ1vFDmqbW7PY1qDjngVSgjqUwDfjCm5BStej2UtRenEjb",
  "key20": "5MXWq7Aq8UdkyBAYBuwvNbt9rCRqjse9QWNVyR29C1ZExvspaREHX5m7zFuqByUpZgTEtAnxm96AtVKzVcrGe4Mr",
  "key21": "2KwxGXHvNLqCrFzxcn2bZMnMwdbGwbFofqKYPgDkSA93vnFKxAMpNiNPqry2DK5CLXU4nt7HwYRLnU98SPZ7qxcp",
  "key22": "5JJaeU9AUwMVRJYdVQjbqoMJbKCRLaF6n4HXeox1DsCGjwfo6asF7uyXynTsKcbTnZz6cQE2tLGtG3HunKWLxzBz",
  "key23": "4FaTg2KRiKmeW7RGJyjPHQEJeCCEERbJVsyvYr1ey192cDDu2GVk3XxWhD5SJJ1yBumdD2qbzLTzbGgnYTFGvdwC",
  "key24": "36RjnLRyBcJgJ5opNHvmEDvVfNC5N6Np2eyzgqj7HQsuJnsjqvueMCGJ7iP3ufdGpUpiEbLcC9xx42H3mdRNgLUR",
  "key25": "oAVFm15w7aCtP98A6xdFjasb6tEskRqG84qjd4PqL2MP19orMqsSptazE8PANoenQrnXX2bAaayVtuiBGS8CJgp",
  "key26": "3Q3SmaZHybhLYoXGGqWHJcZv8qrodZ29txPguY9ZFw3tsRaR1bwsTn5YUFEu3YZd8tUQHDM79rWgyrXn3JPi8UUE",
  "key27": "gLkuYvkSNvGwFixvdbsArN4ie7qcETgKssfcHAV9AZfDgDDPxKRS4wLSqqANkgKNPdtDHHmE6nSTGhseMNaPWrc",
  "key28": "43eEsCfAVxK3Qxh3rYQamdHPd9vEdtRSybFwZoYZi4xr35iSujzzJMhhL79nAa6vf7i2Q342AuZMpeyjXT18DXru",
  "key29": "4o8NtA7GiNA4BGZBYA54dQ3R3E8PrTsV5aDxTW1QV3RYJTWTKuk85zRQvUFRVexKuENeWTSUMdoJfk8TJQLuexeG",
  "key30": "4AhG43w3WTfe7WULG16FpM1hDH6w9qHxbnbMrxSSXoksUn4FFQ2CEhL6oNrj3egBbt7vun2S17WNA8vka25yZrvc",
  "key31": "2LgnZyX8bstXfVfjs5rXZwFTc1viLLzqB8pL7CJESW8d5pcpRYHpLP85YE7fFgSjJZeUE7tCinHEHZF3R6nXM6GM",
  "key32": "GM9m2JZCVKc4zoLFdEnoxeX2GAhbrDUBGRgRq9jwqPthmACc3YjuqUkk8N2Vioyty8z6A3p3TvAw5brnfj2e84X",
  "key33": "2Q1dsPy4xy4D7QJYFC4fpgHADjessuhvuE6WYT8XLZicoWReXmy7zjijXzCqRiAGmqcr3FQRUNG7AmevYzpiAB7C",
  "key34": "48zyP1pWYATcQ9vkjpKz4P5W49cVKfRQJtyNEAygdEq1C19igJV9aML3Vzvju9XnXgYkjjRswJfCSeWECCyzAhqz"
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
