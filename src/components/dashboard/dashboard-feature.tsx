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
    "4qvRcNPJdSw8szaoZrAUTQD8cPmoAZSo8uEa853AvZaqMFA5yzGS17n2vK5yPCrxLidtcTcWNYvSzDBi7N1SRo58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YcRNp8CFw78phDLCAQHUxgNoKhcKq474Ld8diSCEFD2CZQPLYEpZjAAUnvw1JWLX9MzUYZJ6L38fiBpaN9tnmwz",
  "key1": "QC8bLuzWuKXtnajtFoxgsTqSkURDJTMVj9zNNmUYoM9kLnJX8L1NhDMBbN8qENNbEmRimK5a2iskh1F3NQYH7bE",
  "key2": "37xnk478nmDdrU8KJaMnsjRXryWd8JdwMpwqV81UZUmFbLCbiFLwLMYJUY24ZmaNfLaeBugr5MQ6yEv2MwBZUKcT",
  "key3": "vEDQCCZ6s8epxXcPvS5yPaUV45SK93mKQV3zNME9vf5gdMi8NPa5sDmQkAzBKbEVniZDmWU5BLL2DesXU85te6G",
  "key4": "3jJUw5P2H2b5x9uAf9KNmwmj4oVizwAoe1oT9XmV4v1NG2bqvKRvjzS4jhbWsSzHfodUu1WML3e7McAW5xqPR4CJ",
  "key5": "3SCWrKeC6K3WJum3xL7WLhqRzx4ajghUPbcj6N4DrKwXQ5cg13MT5ema9w1aLbDGnM3Kk56msGJLZbXnPmbZ9VU3",
  "key6": "GiPtzqhQV1v1aXwypciyLwSfpJryY9LhpNHKYF19rpkcT1z3mbS3WKhZDYaWRvsCd6NVJ4pgi7quK5NmNyRYr8t",
  "key7": "2Q1bk5UqNAsBV3UNAs4vV1BroT7bq1r8uXf2Aoazzza2r37hkXa2Tk3NSkdTpTN2FZWBMhgwLxFrqjDoBRcESL9",
  "key8": "48QZRB9DLmve3K8QKLUQ7sXxr3RYme4bXm7UQhBqbKn97mHbz3He6m374QBivQx243ivEyKfYRvXXecRPU6amwH7",
  "key9": "46JAv8etwNRvnKDu74QpBhGLmh18vwBBfDmi9v4URyV4R5bNGPo7WH4Px47p6wY8PeL1XiTMJ7bfaHuXTkacqvcz",
  "key10": "5hscxzD2W355E15NB8wXvfcZ4Rpsh52s3CWmyqLZZYbc3s6ac97T5zVnGWiotPtNkWQWRFNKt3xh8Qv2D6RquGLC",
  "key11": "2pRontrDxY82xFtagEygAh3WkW3vRvXiivf1VpzGLbCAK4NnPVFEyQM3VbgHLjKjUqZkQQFPZy4wGjcyq13PUEvv",
  "key12": "2jH3V38e53bJyGaF9f2cCp9K2pwDBX7hq3Pk8nZfeMqdVdTnMC89AoYTJQDMDv8GNqUowNjQa7duyLL1tePqWYTj",
  "key13": "4hVNCE4oqbarCi63y7EfiWpeTrf57EGrKB93vnjZVDK7JiAViNyfPE4E7gJ3mRH4XZ9CJDN3aTuKWFqb5YsAwxYy",
  "key14": "4cUw4Ru97gPL49iLbbKgnWmRvkMtAbCkWDrVaU8b4dyZgM36s4sFTZN555eMP2tUcdy9dwVjEoudr8Tg89Z6fNDy",
  "key15": "2ZRkWDWKfki77geZT16mdjBu1wXFsoyL85Vpoz4AX8oJmKWGAydqgXba2x1de5j6Yz6XdXJwPpRKUPBkE9bRm3Y2",
  "key16": "JDMrs4p6oCAkchd3S4KhCtFjFr7Npc1Mm3Hvo7vDpywJ6Y8XhtKfHDTjJkAeDdtnLTbxAs8r1JN4877kWP2Qhmx",
  "key17": "5XqqtFJYatEwZfjvhBRnf8SirqdGXDSvyqMFj6ECQqPmULnAmnQNQuVDUjSiZjjaHxZU59XjhK1qyoGXSxmy1A7f",
  "key18": "5yVynGe6LBTvpTKtBBe8p33XSBq2SRo4r7SXMNxvgQ8Hbpv8FJ6BzJYJ5yg134icBfx4iy5YtwFXLY28ZSHb5twj",
  "key19": "4gqhVZP5Tn43LrCzbPALJMj3U9BHcKALxYbbauGZRDPoyBcnswHkwjLSXbS1Waoyd15xMgFUc17SppaYRycJxb4Y",
  "key20": "JEcnQqemT9VL6tNyM3dXGoTYsNgnBpsZkSD2fQvZq67SU4Eoiu6thXgVPuXoHVvqpDjrra5cJBmPnvMmitU2q6h",
  "key21": "4wZNEUrmZBuUie9BENwQoGxiqPfxtAYxisB9Z1mWT384sHTND6YaRBs7sHn3fQoDJa84ATADa3YJ1EyXrrfmUBvg",
  "key22": "hsiRYK8ckNhVrQMv2oKnGkxbNYzDd53pyr8LxdzBMRwB8b1xcVsAYnyHZofTDcY9B35MbY2TekFDAKm5pSZ922W",
  "key23": "YVqdmv4ZnK1pYcSA8DMYhKupKDWBHQj35UeYnfPqVe3CTP1QyaYV8r2Ycu2ax2q5WmzPxLV1svNLT25CQavunZx",
  "key24": "3snCZh48DBNkqPnry62UY9E9Lg8ymy94WiEpM242sY2tnj7WUntVZJj7Uc3XFJsyGXpSohMBJbigWG4UQ6j6KcqZ",
  "key25": "xHBtzyDQJhzt7yUdufK3FqoiNZHBmPJC36t7pC2YXvKhQe1AYJKSTFw1rT7ZBMLUmNGkBir4b7tK2Aexe6vrU8v",
  "key26": "4u6pfB3UssC7BiRssBqDJq2gTC2pB7jzWP3YbmSM1yYBC4QpyrwSLu1pkwUPmMnDKbcd5nin3zw575VohZR2EvzA",
  "key27": "4QuNHwmehjVD4GnFwKFZ1eK1uxNN4yGEetH5LeXwnHtXnRCnBwVKRCN3471sy3GcQR2x3YmqcxDtsQzvPhpuEurA",
  "key28": "oFVe4n7dkQqAgGyVtHXeCAHRk4UtJ2JtVYgU1xiMxbBLUT6rBesbM3stYNFmF75zqavuCUhGkEL5Yhbz7P4YAfP",
  "key29": "5eGD9G1LuZJg4ytW7LzGSyFu4ntDvxXGdk7ButdRHTfbwuBiCr2QVFXxyrTtoiNUZoxAakCGEAc6pc2cnPFLohxi",
  "key30": "2dmNZyEqCbZCNt2sZAFp7nBGujyBk8ZzjPLLW2rc4MsXWT7TaRWfUJ7SwABzLN41dqWdciw2pk4CLknivHoA8e1i",
  "key31": "2unsLbqrTpj8XrGSD4iPMDUcmV9xSCYABtDExnNgREngLyVfuhpDK9UWAPxysQwCa4JD3bVrfLyzSQSqTwe5vsPv",
  "key32": "aDQnkXyrXmhxwc9tCxDPLSegqX7CeDg1HmJqVtCTL56drXZKMU7ZAynDnX87CqPagPYvvBvamYbgpeq4PqnQmFn",
  "key33": "3zqNom63YDhtrdDCnrdJiTozYGJThb4TyJYAdkq9NVeYvzZybXpH4KULUqGsb1hdQxbc65fPS6Maz6458J4nnJBA",
  "key34": "5cdmpE9EcRYdEMG6zMHmqxkk9goKUbXiqnD7tZuc8rWj7cXz3gqPC1DejsneFyGJbhvTu2gg2ia5ps4wnPzSC6v",
  "key35": "4NDNB7eA173aSkxBfpXT6gD51wzd8wTU4HH2s9v5aqtMtEiiiJBdfMSiH9F7o2U5BmS4s5gFnhjtLbmgFaW7uxfw"
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
