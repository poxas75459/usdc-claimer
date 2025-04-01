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
    "5NZarhFPYwZSWNqTNx1mtFXucAuf5BfK53g529gRtK3mAUSpBe8ecvw7qKARKsQtDRi1V3BUiV9sKvPJx1cYXxKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ntf6EiZbYRUFQuiccpAqwxYWzXgYYycEtkH7kHmXWKvPpk4Z8ytneEBaBszPUZQcbsWZo8ShpB9pqM6VxRxRoZN",
  "key1": "3Ygpw97HapGg9ACZzHGNjqDbR7GbWZjhNCg1wbVHzR4gZ5bsKyz74WKNeNdtLYvhKaTL8qXRKoAUFWtKYwZ3Apyh",
  "key2": "4aeDAnNtM8XY7y8zg9B3aDyq3eYBUAeyiUFfvqNQ2QFaoJBfvFLCtPyeNCcHPmB9RQriuWvGPa3H9RCnD5jRXjog",
  "key3": "3BXdwBsEz5pdmwbmEYVC8bzVAFT2Y3kYc9HjUGwW3YHpVLnHWiEEXyNDX5JiyqQHytUHkW2ncwo7RZqCPQxpfNHs",
  "key4": "5idHgNfKYcnLnguBL5kGrxP9GuHyjTudhXvmwM1HhC7j4Pr7KiV2JqUaic1ixMW9miKrVoBvSmPo4Erc3rvttkxU",
  "key5": "5VRZFqHGMVRbqwGZGNP5EiSZYzLU6Q1wFUDLbc3GNs61b3bRk6Nnj5Hy8E3PSJstg3uL6bq1aHFb3fabfcJhDe7K",
  "key6": "3payap75Z6K1YhtFKGXvd4DbN1XAAMsnmW6ggQBVwRx3ezmLobRUadnLZQafS2S691nqJVMGQ5YJC4edKyGZ9nEn",
  "key7": "5zvfxC314QambBK1nvrgnmh1ZEiqqtzwcFQd73mAyR8TvdpCZhVBdqcC9kanyChbrxBDuAvdANvsE8MuZSPGmZQg",
  "key8": "5uBWGRqya5WPXKPa6SQGZUaXmg4Q7XWpfgUcg6Ykb2nobN1NHSHn9ee9TKUdwvKnQKtsMgwCEtws7ptr2hTzuv59",
  "key9": "3R8oLcQk6PvJQ6c6cucnqBvazFDmM15gGyoHdfwdn5Q8p3NGcphszB4EueTZ3Aw8ZA8BJL5UTSgVy1PEAzStMjxB",
  "key10": "46xcgPVVeDYT8iuJV5Edb4oNkGsXvLmKVKxWStQKZm6rUL9rDSq7JWoZm5ttTm4NAw5iyfe9ynxD6cejpAmgsV7c",
  "key11": "VGQ49wcsq3WLRyK4CSj4BceWUxQthZapGoxfdeCEHroD8AuQLoCiUSXrj5a7tKpQ8SxDF13L3WWh8JDHJuTeH1n",
  "key12": "2kZiv7MPtRRo7VJWcy84vyX12L7GY6drJzofmxDwKE7oXcgXDzByS1nAQbuoD6qJ2NmEPfUMvSJCa4cm86rYfPvC",
  "key13": "5XcVBCSyR5JKdKX7o47HRZHYNr7mWt142gPXzWP5YQQdwFVtMZLcqH1FnWLSxDb8QKXXR3uDenEuwXattBmrNxtX",
  "key14": "5NCWauamiDx8mNWVsCE9wLQ1dBG46b4crx521watZZCq9T8SP8MjWavWqsyvvyNNLXAjDY6SdtTPWhXfYp1BVXkJ",
  "key15": "3a2UHJWRuZJFPsbDTpT5UftbmbTctrWE1oWPuDKQH1qUgdxazqfVtWdFeXGShx9mJjbYsc7VcLLZTLhss3UozN14",
  "key16": "pBQFEnHD1G9KDxzZbA18RTmiHJ2b5fKdkX8wSoMB87kh9t8MXTF53hKfxMdiMsoKdv67NRSWNywd3iu2iGN95ce",
  "key17": "3RJtkomrJ8FyavbiKPGvM45RN7mUX1FDUgjMQ8yC3srFS735YEBjHiSqjUNqnT4b7emo1EPnBu6Xmk77xJxxBaLk",
  "key18": "3Hj8naLU6k4dnM5KC25QYFnaJCUcygiVNbJeW6wWG4S21qnuDznw8AZZZrZf5KKKVvwvknG11cd6BjJthMUzgu9o",
  "key19": "65qa8hbT5ncVK2sSU39FXsgeHuhEm3qELxNsjFMtoRPm69b87DpkU5pG3qjzyTYWNB98ZV4eMv64iKFMj75FHvEX",
  "key20": "66WHPx3BiZ9A6MiT1TX4Ug9nFSLrEaLPNungbkK5FS9TQT4ivzdanguhjhngyNBmwtSRFq6wkMjJ72hVnxQxDMDf",
  "key21": "iX5utEWySGaaQCP8MSvFj8NiGDJW93bXcEJoLhX9TenWCgKTTgh8pFXtQvuFrYXzZvF6oodhxUJHm1CfH9FnNya",
  "key22": "2FB7wH88kR9iBinE3WpDEQnbZU7SJbvRKrZs8kZ2SQQXwtBpnU2HWTi6ihg9gxKowBsCpz576ewiAX3KQehYGggp",
  "key23": "3kLv569iKhiyomHG6cQ7kP69xif7oy4Nh1DEW7rt6uKV6PbtnWY4XFyKA7dCS1bXybvnDJEs5xsrYvo21f8nGRim",
  "key24": "3z624iEHTrbkqYwJpnMQze2NxH3z5ZHEj6JhwDJkVoXTK8JX1q4VwqyMHxV6QCjhrP6TD5bKBp2Cmt2VKGh6SNDH",
  "key25": "2RoHDsQKgnuj4MnY9WiGcYwbobeJSZwgd3yG7eawuHNaHeWB8qNM38JY3DbfsqYCYR3JyKnUQhM8QEjCzNETAEig",
  "key26": "XftuReKVqVWd86zoi6zt3XP9ZyM8gKqZ9CCAuXQ1LznntRfHUhzzVLM7reK5tE1pLDVqQnrZDKuoJ3ZXDSfTvo6",
  "key27": "4SXc2xgZss8NEQXSraNLnKyaX7Wvr1fE52ZyZpWhh6UbaUMw6ZADz6d7SDC31JajYnVukfLVo4Aj6eH9HL537sbp",
  "key28": "5WME5TahnKkNTBpfRCZjCB7HhXoM1d8HtQGrzaJ2dabVS769cp1P64q68DUXnL829LVu3BKxGH5E7k2WmBBasdRC",
  "key29": "3xugyM6SKQ2NVaQg5eKskQksGzUPzdppq1pZnKjTNvSpFJUigRBVYFz68AQBFx6MVm1sbsKnsPGVqdjmsEhWokZP",
  "key30": "2AGuHaBh9CH3nDmeXJvYMzyRixFQA8qM582kjA2TBzDxUX265iwyxLnxrAMcnzpMGVDNxEy454svCVHiZavebbQa",
  "key31": "61hxLZQKr37SyWHNwUxjgFgTA3FF2tFkzdEJ3YwBRkzxPxZewRbexBB3UQMHrcxw7Dt4p7av72AJEokeE69eYCSB",
  "key32": "3FeZLP4Bsyyf2Ct4XbCWLir7sRV5kVeMg4YAiHieJ2T65J83fRBN8PuFs2hbmJiRXFMKKejZaX7kLtLbrYDvVxA4",
  "key33": "23ALP1Ub54ecnokbt9BFVqDzRrQuvztHWhHeLpPxggTGwENzRyUBvhxUvzKcsVyaxHQPKWD1hKaX1z8ccogkY7Ze",
  "key34": "5bo8bquXDNxqEEZS4RwCC4vfc6tSzEyp9Po9umybUEG2oaW5KHJtPQRzwYRMDy1kp2ixqp4GXbST1ZVcw2pn9Ajf",
  "key35": "3PySxEn8NC2xboeHnpAWn1WdRpAQzwya1ukTDLcJ6A5kzuNQhwVCE4G54c56yki3nFUwVRTQK1Dr9YhR2aPDffaV",
  "key36": "4UGJUsdMrpMNVxALuiUjSJM7FXGUdiZhFYqueXaunNHHodjGf3a5MsjnuVTBwidD9kKcE3rNXWUFBMjDDt3nu3Bi",
  "key37": "3rXDgiqPZ2oNaBAqF3sBCNDdbUfNtMSosgDyb7RpmXAqC48BgZisbwXkdwT3ifKJtQ1vhAGrJCeijtiuPKmtjvh4",
  "key38": "49bEhRSBPx2zrx9yT1okmH3QGQtwR7VTztEHh1d5mHPUa8tp7JHq4VoJ5PdYVahnAcTh6F6buRpwd82wnMiwvn5H",
  "key39": "3Cmj3u1YKJsMySgTqJ6Zbp7JwFeqXBikVMhEbqn5kpgSo6s9zyKN234jArzH2v9gAScUPv36fHHpGDtjcYmW583z",
  "key40": "2EbwdePDT1JYuYzWa4s8padfk6DAZNJLDgdMmkjidLx3ACCusfcPMaiYMqQWHvXhJhbZVbGuwv8rCGh7fuFNJAT5",
  "key41": "4Sejy8tisiih7qV2Ks8to8sBeMxH3nNdEoLu9PLVaAKA9JxeY4nuWGJuikencqRmbrqb13H2aAGh2RJJnuvdEw5R",
  "key42": "32QSb2QM1wkpctyUweimBnbrYofriQCYAinvrb4QQ5MzXRGX2q8LQ6n9ue4PKfEfrBd9ajXxDLXLZxxPkUk1py6X"
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
