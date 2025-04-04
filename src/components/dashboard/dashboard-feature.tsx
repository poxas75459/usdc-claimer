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
    "6eKeSsAreqrYGnLeBLaQWXfnbEeKZfiEG5JzyNhDycZr2X6BuSJZa2mMEk6JdmmBdfkoa9PWHKYPYvuvwXmok8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XoRtt5mgbye2EgHni6sqxgsmqtnVskMyv7GviCncb7ydeSHBWwhLHv3Gg11fbvftNe28U3sLMes1jeRr7qbqWb2",
  "key1": "4bHd4efxnU23ySnMMfe8SJRsMm1d7Mxq24Ksza5u1BS6L4DSPp4UUaaYem7Q9o33QX4PbDZZT7fG5wXaqQf91ewN",
  "key2": "2gqK6h9aHERS5hYbALYo1pvcgKuMytjb4iKCppuLSknuZRWLwUmmD4tR4uP8QsJ91ZN9utgDd3dmzRUf5FTQ6Frn",
  "key3": "5f2ZmQPBEhv6JCNNbSuRG6295qHjQZKjEVt5vS9RQ4vskWdqozAt4VJ2AvaVdqHHtiYXtrArTDfvVpXpUxVrBwSk",
  "key4": "49AAoue3zufyQiVLts1Rk1vke4Z3GPW1gzcJXYDmbeKsaW9UCu64tenn7qCJb7PP7BcgfAG9cDRZbf2Et1bpvPVn",
  "key5": "5U2k3aSsPmdiVPNQcXvQiaWoYweeQYSqV4uFSXX8gweaxMiYHhhLMjU6bY2KKJAQc1bjYxEgVfXfyhXhSCcxx5Lp",
  "key6": "3A5zX4kSu1mdimDA5fRENVwMzA2XDApS8jv87R565SGp6mFtfGFY7apQNiuXnFr84Q2yeHKv1u4cqwkGEP7co8Er",
  "key7": "2n8jYELqdnKFL2Tcws6Y1x5MRa79fte7qGtPxaGaE9rH4fK4d4CmJLAS8wiBKJwHvqtiZQLjaa8xp4PmJj5DjvvJ",
  "key8": "2KxjX4Ao8Hm3Vvu9mvYPmA7P2vtgYiNrJ89Bi8sDYRkKknbNvtCUP4SzuAmhGLerxqR78UgbDQWga1YeD2Peui8g",
  "key9": "nZVPANZHy9PnAmsX3zezDcjxgDxthyHZa4FTjME5XhdoGNn61H5zCk4QJhcWrBLm22GyLiUaxHyykzVR5HCZTg6",
  "key10": "5GeZfyEMt9epES7Yu3VaGVj6tmreLjW9QRGeD7NQhjhjwuCykxj952qKYZE2N2krW58nQB1pnukaUa2BThN8j6aB",
  "key11": "4yTboXuC94ta7oNPKUd2iK7ThgQbmwEmCxTp7K5rZk9gWwjrXVsN1W7ueFR9bx9m6kBTuFdRf86njL1NfuKwdxAs",
  "key12": "674dPwM6NURvrStw8stGYgXE9t3f2h7zZ1jhtMSsdJPABS8SeiqjGTmSExhJfdNDkVTCiEX56fGmeioxSm9HHuY3",
  "key13": "4Hh9JVK2rCnAEVmhBgztXcwtJn7UYk1A721QCLDBLcJMNTM6CCmUuY8h2QMcu7D4MMQxajhq3skG5uriRU2rxtAE",
  "key14": "5v7rEW3vpdmfhMJJa9F7EgBtsMy8PWAHFpRYVkEF54qdcif21FHJXJhVELtmKxupUwjUyd9zUh4zsNEFZmPw65XD",
  "key15": "59qEeFSQ4ZP6RX7CQcaMvgR8835GeedC8Y8ukVBBSdk3M88cu15sckHuMer5bRFvtXLjEo3pLs9cZgY1SySynKGM",
  "key16": "3ictzf5XkkhAB8cgUnFDNptcyvwJyY2fArxCzryk1kX4qBogWCFjGyFE8qJBwmu6qSk1cqkWGPp6FGxakVwxy4Km",
  "key17": "2om1vuueRZaEtPywdh1PDXkqwSsRMxDZNf179iy8HM5GEmwzcD3Upw17W5tkgLZYixgSy42W6Uds67mVmrRQU19W",
  "key18": "65kpob9EBTZMm9TjSow9mfktAeSfZBr6x5f8Ct5pYaFqLpUK815vo8MRQC8R66zuQkocSczt12hydpAs3WyxhNFf",
  "key19": "rSrA1BCPS9CUWrKYgVhXCQub3eaJMuYWvFfVxNKAZpHMYSEfABfNwy16acThsWuDPQUc2Ug7xExCTWr4yKANApL",
  "key20": "2EpTeQuffjzAGFsNwd5SgxhqKuS8F1aCfSHqRLTR5gubDBFhcv3fvmVX9nfWarjwsGnK3Cyy72GTZYo4KUxdD6DD",
  "key21": "4zKWg1YEXwe5QkK47kPvpxkjmqCpp7QyAW59erPfVZ9SU8rum2kY8rru4Cs7cdjiHqBBDSS6z7zchcYv35w9wYZm",
  "key22": "2BmrmvEQLBpJ75wQixHACbUXtREWMU8pmm1bo1A6Eu5JGmZvwrvhtsiEycXKtVwymJkCuaMhfhV4NckiEHyyPY8n",
  "key23": "29SAr3FQN8xCXTEoU93wPf7DBCZiCTvPbAnnRwXmi6ZdhVjcPVv3bcJtrQLifWUsNxW1mSMjM4EihHopRjciNfXX",
  "key24": "3eoo2c7gj2Wh2bCDWwqd18wpztuKB9a8d12H27igPL1bgm5My3RGxd36UQGNCPJSRnbMB64xPfYDffvTNBGuxcq6",
  "key25": "4UpyztuGdESNwR6VhCa2ksFND6k9zxhAbWzQnVqvCps52ooXGQoBp8tTEvFb9Wfouh7oxWCJidaS47evhnzXFYqz",
  "key26": "4fmJpQS12sEzkgi6zHT5mkyh3JnqjTFWfeUETnEvjZLmL5kgAdjgg7akYwpAVajmHwj7owjx8jtQ97mBQRCGTo4A",
  "key27": "5NEJ1U15DqLEBQyAsCpAVCLMddAdDjPxTS6B7xkmLWmhDm2q22nsmjfeXcYKdfWe5tv1xR3dSZ6Kja5cjRUEcXdq",
  "key28": "3KDnoRZ7nfuEqzEfFNsy4JowXwJY9eWaGkgSCsZFHcsLbuNYWomEfJ9MK1refJKaKX4kjQXPoWcxLSahg14Mm7P7",
  "key29": "27ZYdgRYnFJPzVHG4vVmnjJaKPeRZx8FyehJLSCH5SgpqAjeRTJ9ZKmMS5iDAKQa3Ysd6thHV38Q2hiZbzcGAn5R",
  "key30": "23Tq43q3fg6p3Gd1vuN4ftqVX1UGeaURstDCjLtudj8c6evnCJ3hZD3eySHR2RbMwcvhA8vZujNzdStrJBeT6SN1",
  "key31": "5SXkgXctuvLin1MTfesQyKm6eA5xvFXij3BcTvcqoBL5ukUu9TEVeipRNfBD5L8A2PWqUw3B9JEPfzw5n6VPw9pM",
  "key32": "3vz5mQNYDXAsSaK2HVUxsMHrwaPoVbCz4bSPLgKrzpKGTnYDTDsjsCj9xDHtGZeoS6d4rAGQ1HyXW2eJikkP85ey",
  "key33": "46p1zs1RaKYhHR64FfZh6qdvu9JRspPvSEGdCqCLTPo9EUBYMqzuFBMf17bXWHswA2VsDDHGa8B1ib1hLhEz3zQ5"
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
