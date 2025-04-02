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
    "4AtEKKqDhLBU2SAMMMmwrg6gJwim2kPasGsbihSCA6ijFwgz1jutuh6ohywbPsR5qgX5i1Nk2VTBfbn7ue5w7Y3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RjovRV61THY6RYQK3a1w4Hbmb65gR1FgA8Sp3bKFymmCAroWxCpMqkWR1HQgZv7P3qrR5o66tqZr8VPpw6c75Wc",
  "key1": "4yo6ykEDeirkSJi6EyVHmgAnwGaxMGRrfAFb1PUiWwDefmT56vG4yQHHjjNUUARxNmmwPi7hNgZYgVjpHkJPSEsL",
  "key2": "X4oabo8cdZzQuXhEo3KsjHgSGt2iGUP5fgwjXXDwAcJ6Kqvh8uQFjEUGR9bpwPjbLjk6Yya7u5DWXqTk2PkNLta",
  "key3": "2cJ94LAHjYjpZ7RaeKSVKq2qdcRqtiUNHgJVmFHdRrFdq2B6CRekdazXZU72u7k2hZq8nAUkUnZ8yw3NFAd4h3yg",
  "key4": "5WJ33zmPYw8nc7m1SdEN7LGh8fc9SJntqjVYRperJMUfDTseE9xaf7vdLjvrPYvAK15kxzWH9WeHQ1DEkbwLc8Nx",
  "key5": "WSdcH4nKtGZuz187VJmwSX4EzWy54tJ4udYvMukx8R9BtpUspyE8J1iG2aiKp9QQ2cGXydSScUQLA1efuBr4w7H",
  "key6": "2C3ow8Uaatp7ybJb8GDLvzkEjAiLquEauRY7gd1PZgKYzA33YcqY3L8w6MTmit7a9Pjw8ZqwHzPxQYzD7aCYa9tj",
  "key7": "31WzWgMKg44XDKAUo8AtFenacadrgFq3axPj4rdunMAes5htSZEtAEDyVDEduiwjkMnfexSkfQhCPUpC2bYVfe9q",
  "key8": "MUg9nzzXmYNZWh8xXURYbj2CJhBCzhQ7bikDyRcTM6RoAosSST4c3hPohrBnUektXc6RpCt4UTpdCfQjXeKEqtz",
  "key9": "5DGQCnkgKDBwu5mAN1Pxwa7qEq8n7PbGKwtWmRuD1cLdJhJEsyX8sU87mUve86FRUULaaMiZEKiFBTd9zBBKbcNJ",
  "key10": "3ShJJNtr3ESD25JmgXa3spr5vm3kTrwZhu7mpetqb4EZ2xAUVdqAgtYXRo7MCdW6GZg3Hxsn3wNajSDfCQ3gmCkq",
  "key11": "3z3fzejStwkStsKM5voBB8Nrdbhn4BUkP6Qu7ZLsEs35UhChs6gskYVXSp9LFgxmkx4mRcKxG2ycZ93YVj2XHi4c",
  "key12": "sjdDEX9uthGUUncmf1ErNC8RugwWupQgDpgnsxEKF5a6Jfyt8742CoejADfcQHVMWeCZopknpHLf4SVypx5PCFF",
  "key13": "5JZQpdenGU7aLFgTqQvFJpdpXv8YdR6NurUAt5pq8Qo8KDDnoeZPxpaSj8pLERvq2L1jovb2nFbHtoLdPxeD9eWM",
  "key14": "48vmX6CHNvY26HK1yeewaehkzDvjcVQtG1c4Grd9YH2kFvfw4ckraUDXWp3zzM4YmZkANz3vz4WPN8EBvFcqBKDF",
  "key15": "55Qhc29dQqJdjamLgAox5Lfaq2JifdFcEcwc5MTzi7ysZmPrZBNKPCHWxoeUMW8Tsj4KWW1kYVScV4fH7htAPuGb",
  "key16": "3e4F2G4DrXD4vd2LuQp7y2NK6BjrTU5HLB1VMowiRxehiwH7W72jbMJU2pzo7RXZaWVg6WLqrdKuy79T8NHSa1d1",
  "key17": "2HZdZHBJH5Cy47S7ipqGwTxsnKmKJxnMWLdANyTSXLgu8xfsFKy6TV2CsHrJ1L7ytdZCfs9hJ4XJMwzFQVtK4S7g",
  "key18": "5xoUb1LvRuB1Sns6ejUhnt3eMfHUGtpzZk3wHieXqc2qvB45uWjadEkLzqcqPQpaFnXLXhW5CTP3rXbw5GbwL1hL",
  "key19": "rXJHt8RuRaJTwQPg2TktHskZ9hQj2A9SR9wMC1tAHXVSJZuE8n7WkRm9MuyAkSGuK2tvAShEyxRuqgGbU7QuUXw",
  "key20": "3X5KFbckfefVDbXCjj8fZGraKWh5BxYpMe4QrqLLkrNRH7GYVnkCtr2N94TrtQ8TWeY1J3kaKfRwnwmh3h4pwFRS",
  "key21": "57nYjmmQ1DmxwCS6MDnR4FTGstxyv6rSneK7wC7oTUHcxzF5YU7tMj4958bNTSQiQmk1LJ8ej83CcyY2QPC3i1oa",
  "key22": "2p8F8VgaTKgKbaQGCMivvETsVCM6oVaKdLXzDQDrWrYMmnaPsriKbWeTN8nueGXTX6yj5TWzEhdim8Ebc67cTVkp",
  "key23": "5eZujkzKrHwgYUgzzGg43aC13zLQLyGNpukfXn8FaK3FbTNoBrbuEUs3jLSDSdo89PuS2TYRDfpnYQG6YkqP5wpo",
  "key24": "4btgJ8VQbgEhj5uRwsEo3FNLLPS3JZd5dBEj8yppqLub6Re2H52JeqyHpibGQn8KhTX44UndF9VQavnZCP13Mvzs",
  "key25": "2JqzNawb5iWdY8W42CN3HVpnUNeF4zKexjA9BFLBNkAdXmLshSSGmqiAttEApqHjJ2hbTdySqboRwawfErK1isKf",
  "key26": "Fr357cvY1Bx9R4X4g48V1BZ6oTzBTD9vkK8qKBQbQ5So1HA2sk7N9yPSFkVGoByvqVbK3jxMbYYtbcQHfriXobR",
  "key27": "2jeyeNeQrv9HYMBdGbSX2VjmiVnzqitaxG1946CEuBquHGA4nKj8PePGac4dGLgQTvAJ79vQ9SR7MxLmWFFtsTt7",
  "key28": "PJkE2MpBhD7R7hiWASH1yStJWVmr2frx2vMwtzG5LSW1pN4wcLsQobCKLemw1oLEQGnP8veeeYrHtguCiVdi7S5",
  "key29": "5kmYR9RN9ZHA3q22xoM79JH5ebp12TSo7pZcXQqH8Pt1FvJexqwoAWym2fihMLgk3Sh3A2ZLLHcMge75Y7orp7pn",
  "key30": "2Ygy7ssxD1krULS4Vwch5Ltqan8oNepbDPVSSsfcZWkgng2xiFaL4wu821fU7EthBHfUq6oBbbj7Q51DSnLsGe3U",
  "key31": "3q4RBEm5bVEgLidJPGFC7dwcDueeaN1bnxnd8FZ9oxYwA4F8FWTxiJaP1YKke4xg437mmi3HjJosKFR3dPXHHbNW"
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
