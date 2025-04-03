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
    "2mUaFqkVg6gGMytTMEwE1VHUhpECbsJLJHp7kpRMB82LEmNbiVGF9XX5fXSiSJehNWndiQPq5PQZ5QyrqjZyrkjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C2JeTHD4Vnopw1VaohqzGRi6326zFZAmz3ywttrAWhFu1PtmexrrrXPioBNayU4AKRwTkxu7fUNKdQBPzvmqcMU",
  "key1": "5kmL8Y1Rn3dQy9osJ8W2gz9kgt8eaCF5tyNpDuj2dppNu8TkTKriQg6CS4B36XH1t6M2XH9XJef4TvRN2QBJFXex",
  "key2": "4N3M4sxGDTRikr1bLztmvJv6JU5ZsZj5UhmRhJ3cK9oCCKqkWJPn1fJKZaTBDSgwsJUenYS8vFkcdRwjtTCcdPHG",
  "key3": "2SncCwXMHrV3847Y9AEwWwRYvgAzTWEe94mX3XKoNi2o3WnGvXjxF41TkUupi9ZLrwBmY5q6kMMFQkPcN51J37rE",
  "key4": "2w5UgucDnouMvvwePd6bjVMeCp2MjgGB1cmu89SuZyFbhCXXH7HpnvsyoMwoCAR3AayVb7ZuV9a4mvJwHX3Xreqk",
  "key5": "5vaMV9h9BRmtNA3FHCjkMqMSCBMw7KdieYVEF44HZkRpE8DdqF2pQarGgGDHwtso6yn6DF3EgZxT8iwZQRvkDHia",
  "key6": "YcNhtRoXv5heCcccQDZ4RBQjuBuc3cXqfYgWAdydgn4egJSinLU7oYWo16m6EyBh5WjXUp2TX6XC8WCBsKZaBq2",
  "key7": "HQo1b13NJuo7iUQpzQTGAkd8vGDb7Xms9pU1dHy6rBRU3zgkdoDdr6DAQYnKJ3Q8Jd7GCZkEi8DTrNYh855Biwg",
  "key8": "2qSHkGDeBUCu7WceEpuRBCT9qJqzGwoWqW5fisge26wudv5punMKGfY2EVia72rkakgEwgfaotGaXKovcWkkvrTG",
  "key9": "4ocSZZNtR6EfqZpR3eiUZ1EsgMnVwSrkWW2RAcs9C48XL9A9jFq1mESTszKWEc2PwSNDqj7Q6TJ4uVEr7qfynH5X",
  "key10": "4j6XoeDkvFKrVr4iQ4SR6ooTVspg9sPUnTPrgevVpUncqkpuXc87fLoUeoMEX8cGjvEiXZVDzh1Ngpxdt2w9eTBb",
  "key11": "5zDEk4rLzpxJGNdqLByktqv9WmzPHQVdqn5PPrYMmWyNAqvbwYaM2QF3G4yqMm4EJ42GqNV2YUoVnoS8E8vY6SSf",
  "key12": "4JAcHK9oTPJY9vbgv5sfU27x7dJAYkjuJgcXkXWjNcGWYnJQtjSFpq1ne6Gxpg5RJThhjAGxytcj5rmZqHVuFPDT",
  "key13": "2vRjyU7g4XZZCq426kyMzoXXhhy4QxGGf54mx6dypr4Z41J2NWs9cUnPR5uLRKRBHZf1rjWrwXirCqNCeHHUVLhE",
  "key14": "4oUDtt1LSFCmw8hnh5PAJXt6QvwVX9qjUp9DavBSeYUpwkrBpsxJ88iYSxoeBcGdhcnfdWB5J9i2Q2PA9pHkmwFW",
  "key15": "4CUFr9GvsVpgUrrfHcU8e7tkcrZZ4dsgpmqotkGppNPJ5VGc3fP3hiTcTcLKFYLP8FPsv6NcRr1nvvE5Y4oKH7LE",
  "key16": "48Ntv8672e9i3vAH5y2hH1g6FHPEyA1SYsG1N8jYYj9GnVZRwcX99xixusgh8GyToEAJVJ3WxwV2etuVgT1e1fdH",
  "key17": "59hL5cC6kqVPbqMYSjaVhMeZsdntA6fehuyWkemEDaiTBTpFWPbjFcC7HL8vzTxTRF24WcQgu5TAFkSbL3g4zxXW",
  "key18": "2r6hZL4oYHech34m1qxRwqyhpDQLMPeWayAQ5xiC7yNUMxpwJWx3ctZmqJYHtdgiiMESh7NggtSueTKhVtLeUxd8",
  "key19": "tWHLzKvExDqMvC3jbDUchTywR7RqnknueJGnLVtz6emXUuU46uj7kyVR1gvw4a6twUudmiW77tJLuHhdr31BFNZ",
  "key20": "5S3xP4bbGZAtMcrijSDenKh2vcFTqhDcxQkx13fn5YPHd1fjqbWas95ms5d92Avep14GLcgMMadVwVSgk7qTg1Qv",
  "key21": "LeS3ktD2E8FAPyqXx9HrdPyk1EHPxrUwBW99WS6wg97XB4tu2gcjVyWGGN4N4z4RHdF7bpwCttxYY4LhAa2G6k1",
  "key22": "2cDNTWXN78DpTGGWHeBKP7e41mcMuBWQ6PGxhwQkpELjqp6Z3zvWDWhFDahbEmLZktWam2xEMirsDtfhhH72LaqH",
  "key23": "34UGLKHQ8842AgoxhdqkQxJwDskTPZfhi9xoJpCeVB4UvoKfE8xcnYKkU8rN4qCgH4VtpjP3zyuAoozyrGV8Fgbd",
  "key24": "3eXWF5bXceddUf6K7GDCPfXanFS3SEQBkKSGqAX262R2SzNbEwnaP4eddoE3k3GYFdXCppGjUmsxSvC6c1G3s4cV",
  "key25": "65ThMcyuyLgnxwZnht7FTUSkF8WVcxKedJPDH18cqcgcmZM1bDmsg7ZneMvVhE3gRnGh1KGzprPS6L1USxrQcy7K",
  "key26": "35p4Qa7MkJtdh3VgMkPuone6TKv369VyxsTiNVZ94ZA5LUgQCGpbGy9qHSb5eQco3VoSX1237MvrDXn71QVjAmjf",
  "key27": "2E53jLLktsVvJo7HS9F9VDExEirbY9oZeYfPUVNW94PgHfZMGY21NB3EizaQM9HW6voL6W2DpiKMeWp78UheRsD9",
  "key28": "4qXw5FZ1Eh7Lhhxtfgm8yrHL5nLTW3Z6MSgbybCPrLAJqyoYsJttGvXwKXjgERrgmPBuLBWAh1WtGYqPbwWGa4ji",
  "key29": "5WQLuFbkcHwPpU9zbMnkuwnpyXu6ugosVeQ3WhGmhUGmnP24M8qr3j72BceqxzKk4a7L5Aqfa5Eaqcm1VywQXi14",
  "key30": "3BDaL65aWKS1b4cyR3FFscZaHqNDFWiBNiM6cFMFoLRQZrs2Ht8Fwc79xhKj5J2kuy91dkeEmFhgHmqq99eV7cGm",
  "key31": "49WAx8zHbnb3DeL9YcaNVxXjPdREoKWfk165FoHgWPtGX7HFXjAfMT1zBa3YBMr8129W86TDzPDxS69mt9jS4D6A",
  "key32": "3dSg9zWZ9T7qxgodJqqLsTcugLpxWfqcpyWE5Jf8Nd4DNBneZYfQ4tm8vZ5exa53Q9n3vu4iJcDUPSchryAi3zJC",
  "key33": "4UR25uQzrq4Lqpr5PBAbXaiv2aVGzkpJyi4t6sRZ6ywgUghGjDXt74SJ1VRjsXNy9mkakBAXPf7jGsLV3HbJih61",
  "key34": "62duJx68T8P9YLVx6ofFyGCsR6BDsEw1i6jQHnNGxKFX99m7qQq7SLgzw9eXZ6jsfdSox79jpTPpiZNDotY5g4J6"
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
