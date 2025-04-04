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
    "2V3gSkLAnaEgkcAtZbFaBRsvW4mWPE54NcdjuXm8Y5xeVF1aVzWMTzSpUAdSAPx1JEVnM8UKYDi1C2b4a8wxw6kK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47y2AfpeK2t9YXdmQxut6Q4q5nhpAFFKczuotnkzNTUgTfHVxBFyAQoMMe4Kutw9X6myWH9Yub72YKwz5m8QEmuR",
  "key1": "2c5dDAPkmLHuqr9W9MwWGCuB5qHo9WhHhmgDYyBy1r3EnG4hUCYYMharJGdFQT9ZJba3QQpbsB4WPFYyqv7Bsbqw",
  "key2": "2NkXfvAnffCntdwUVQHmELabVZZrxh7qQ36ALRKEPMghh4kPpbzRyiryzcG26YuB4C4qpwnXae23bSrYMapKe74N",
  "key3": "4JD71PFmtXkWoSvNdpBcjXoDEZbhP3BE3XtXNZZmo6y5U9otvstAnYGNRWpZNmc98EkxmG19sPu1CxCUDh8u6ndb",
  "key4": "5K5f92n8xKkQfkeqsVy3irQf9XvUKGt6ER5ABZXWgBHqwrbSWm4aNtyhmA8ZDmkGQdzbrMgEp92biJdELHG4MQQ7",
  "key5": "5D59cFnPF9F7oNa5ZPuPDBZciEK7ujSJv9vCUAFZGe1fFqfzaizB1iBgKam68pQuMhoiLc995YmhMiR767XQ7Z9i",
  "key6": "o595TL67bMZegvaBSYgzNNZgiGaniwq6HheFV189MiB1rCiToUtSPwwY4znpoz9nAeZfquuNoAqx5q7JFoLjGAh",
  "key7": "4ShxppspdobRrs7mjpnDK6nqUx3djoRnonSVUf9Jf4UBHxFLN7QQwLxNEiX8s4grBiHVV1MaWrhBViXbCVLcfY4A",
  "key8": "1SrYeawH8jULjVHP3AdkuXMm7r62NAwet7YQZGcyRNvrzDA8mRsCR8FBaKbf31WvcdsP3cvDardXGBYzsmbdFvY",
  "key9": "3eKaUAwARvyUNxszqMrDxa6UH357aFMD5BEP5EtY6kFaMnWBLsqN7fthdsyfA6rmrvxR7mzd2WF847RdvG2gqWoD",
  "key10": "5fqJBLZfntLinUfcgaKUeyoqwridj1MKpLaPWne4nmoTQomGjynF3exzMEs7cYUmrvKmj2NoaXqVggB59dk9Ys5f",
  "key11": "j1eWXcrhEjrMAE1rzkvoQNKyo31GWPu7CDHkKhQrZFGTTaMF8nXPEr9xRJoJdyMda7LfsAjgcoVwuU96Pxa5f3P",
  "key12": "5XDjPPfMCgPiyyHRmyxWuqAUiFegpezwAMuXhwHHoJ7msf35Q6vgp6CwmRMWGo2s7ddh5sRqccnVHUAfFwFH2DNH",
  "key13": "5PXJteYxejnx15WD82E1LThiv6wGvwTFcuf2JaKZvwNPmmac5vCMe57HGiv6mL52atnqvAwjm3ozgqWQW5JZJK36",
  "key14": "vLpDCcHL5dxJ86cZocdnL5vYVnBFNU2qaEPc6mr9BArtZMEUnJEq5kqPwdi51LRLmPGnQnspTW7RfoRTEvBJiYS",
  "key15": "57SXkcvMQ6USVtoWjfmdSu5747fgepVe53mdty6Keg4zwqmQWAxnAouAYQknhoWnxE4XV5hMRzKop3CB6e2gc5JT",
  "key16": "2Qe112QhGDJh6rMHbET7zYkAHc6JRF3PJLTpxPvj7NugLnMPZZTtVQmBVgXxKYNsowETWSMv6hpwykZKAVQDMD2H",
  "key17": "4NgHQKdY79USUAPSoPUrLAYVBy2N8dkMmw6EV17eTZDL5onu3M4Dqc4ZeHntq3WccK9B52KtYjizpjAnvBfaRUC3",
  "key18": "2LBF9N9HdEgz3yUePrvHnofarf5hWo8zX1AnRZBo5LzokBMUHgxnZGpQFu1e5KqKzTrSukfJq93rTUMggwjC3da8",
  "key19": "58F6w3YXEMGn3qcsor5V7Rq6gx7cHjaesyHpTZ8KqSWBpYTXmvoPUuQpYMxv3sEGcbH9zGEdv5Gu4jMRStzpduUC",
  "key20": "2QCKp8yu2Q5Qj5zNBybFdvggxhuGEALEC4bwpTnDa1DNBBcmF5DHpqPz5rVTQN65RdFWsD93pHfbreVuby42pcQu",
  "key21": "2jtDZhu7PjWediemQVWzQJVGq1vM6iyvn5fywgrK55joiWfWZMjB4xTAzrkvbTJD5K7AmnVHZoDhASAeNcpbUZgc",
  "key22": "3CtLkFfYZLjdA8y3S9AAGsvZcZEQPvD3hDG4PU3gdwwFxkY9rKU7mNkKGmNz55rxtmuhmWL6mNej4rp5HmQ4rCG3",
  "key23": "5sEKSCbjr3jCV2Jp5pwRNF3GMw7Yk4q3A3Yxwnp1vykXrym3BWqH21ykk1EDpvm7B7q2cAYkk4YxPAEpSRr7xiYC",
  "key24": "62FePRR1Zw6G95desfRTrkFBEZsDWt9tWbBzaA5M6fy3DrbB8UK7AHCVr52HFFxWKVpokEgfuLAvqhwdG3NVUzjG",
  "key25": "25kdPGtqhdZEQEcb8YY17ZantgRF2VUSwXUxQBXXAbpseW6jC9BrFQZN1CmGrEmnTSoE7CrcMfJNHBFGrdzsQH65",
  "key26": "3QvcE1YzkSVLWY5hzQi8cVAoGXyckCaKcKxGcjEPUh9ZGYHsR92rLSvrENcUfs1UY4iX2ijDNEGQ9CXeNZkhywwt",
  "key27": "2rrDV7ebBZcpFHVjanY8HZQWp8P6RQt4APfmXHEQRAN6p9zACqdVd4ULJtgjriJc5DzZx1jeqDmYdL1cQxzmKUqt",
  "key28": "4HoKZFZzy6W4vhYQTWNHFS6ju1qjeELiujpsYDvgRM1FuFPWE9P5Zc8xeciALBitsSoBDRUDiHfU2SNHMeYYy432",
  "key29": "2TkHDw9MQcLhnQXCDj8PUzq3xjVM1H9ywML1ovPqg1Q2khxrCwzyWueSnxy6WNmeHGtuQRarusfxrHJSX59FbdmC",
  "key30": "2q8KLUjXQJRcKxjNz9PGARM78aAgkjQAMrpM2WJ9zmg3FcyYq1PqspnBivr2APC9dTM1hWZrgd1fbgnzasvjZHum",
  "key31": "5dEg42eiVXYkg79wCZqZyK2hqog5AN7MwQKQjPgXC3LFCieFvcQr3mcoTnCC1DtcrARCynL4K3KopFNmoYHNexD1",
  "key32": "2gY4yobi1NNhSoeomxpq6UZ5teooW6ZaLxyEQUVrym3g8Q474skucmL5FW6phpmUY9AEwbJcCrCYseGqG7fcocY4",
  "key33": "51r1Hrg42rm4z29BZytHrL7xXxbxdkWW8mrZoY9jeJAoF3PgLkWHkFpDcdT5Cn1MC599e9nnWYp8Za2b4s2ghGYs",
  "key34": "24tXNpXvsrvqWAHSJ7YgsPFCquNnjzb6EGbXDXHoRqNyRV1hnn9X4JsMEmrXujL5DVKDesBExm4F6tEN8H2e17xX",
  "key35": "5FG8eiJ17XsXLW52ku6UzLUw9CQQozhYwTy9zRFri2BcpVzbUMHtBywkBVXNaJcNeBCs3gEBs85nfxR2YzUm3khg",
  "key36": "2pFpv7EecsdFhtFcxCcUymdpyfyR4ba3rUT9FKVitKUmuHBj6S8ZZqLKKwvzx8q3tKDPccn79GqjAVoCqeS3MU9u",
  "key37": "5sHjArgRQHs8EAxwmb5Sm23yCwnUkcnnDaD4XopBDzqtE16tc5ns4VSnEooWsvpXCcntrUBjLcQwijuAuqgCvGEa",
  "key38": "5bnbYBH4XUWwMvuKqhM1znCPxL8DMpoqtEJto4SKs9HRwWwqAE9EEun3S1pjktse6cp2M2YpU6TumxBpzMoCLhNj",
  "key39": "4ESbErvvyEvq4HWZjAPX1gt6w5ewv6GJEwF4hPbeTFgkzUny2MgadoFGYyZwXQuF6zqEVbZQVP8AnunYnvqchS3Q",
  "key40": "4iebutTGbTzzN9Wrpc4kDPbkg64B5s9znsXtYgfnRT9fKbJ5a7Ds7yrtvRVaQTzb4VaAa3XC6mdh63koHZPdShmV",
  "key41": "CGbD4YuZWKdiW9HyAWVpeh1ZqTZdvLVXU9eTMmZJje9wkEbVPhp3rKwvhE4X6h4rhgZQFJJg8iMw16tfxyDZ7wo",
  "key42": "5WsvZG4EEFAXxQT4NSeq5NUKSzAyHi4X8xBmApFcYXGJdyUpqavemZkQtDc7SjDYPZHi1sb1T5MJjxih25zK4X2j",
  "key43": "5gtdqL5X3KT1ucycfMFdwZrrUBFje8zrcZsKQtdvriRXHNosws5uCs59Vsi2a2YxDqRsR3TVY4rrFREn9MBmJXmY",
  "key44": "2Mhoj68s463GZZujXR5QKb3svhxESmCca1ruQW7wjawoFZ1B8tTnF9PLUj25kLHmywNjN6bcxvaCsqKXinUppe6J",
  "key45": "5VM2PUtdm8J9W3Ecjz4QqNUdjrah6rmqkfQTQ82C96Gza2U4VEdPLJPoeH9DZn4o7facLR9FyjEC6RFQtrbb2TvJ",
  "key46": "4rFxy54mbVHFQAXg5BNMWU9sQdEyFtEcuddJvyRpBNGGw9z2t1uT6p6n44Jy2XK464sRbgFQqEPrkong7EQ4GGyF",
  "key47": "2JoBHQJ9JXiPGNfu7c63yni1P2XEFaLKHrHZSB7YkEoX4tX7HzyQuLCBWW2uQm4rhPrPAGHepLFH1RMPHzUZaY1f",
  "key48": "4EZgRRRexusZm4wPZWo3gbeUy98mukrJcJAbTzvsMiBQ7VCk3JGUBUuJnPhC5HERVtXrhRMm6mXjSc27Wo3esper"
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
