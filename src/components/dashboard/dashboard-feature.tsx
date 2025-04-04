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
    "66CzoQj19Fhg7YKPDKPEBSrHytTi9Jgr3jdLZwXMNUZ3YXsjGyMUGggdXxo7K5MENbUztwEx2rhZHZxQceRPQapa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26TQmFdKjhYxV1EhwhLbnh8cGE84m8xgq3LRkwjvUobVvkwJpQmgtyQVai6MDUjE7FURVhwjquetxx24bvJMpRJd",
  "key1": "DsCNQxenJsPrVPwUV2iUxWnjH9xsQxMGNVJAnEt2rNmvpxPZxUM183kVqDYbdQxwNVAuzH4TtqFjNsj1NXZm1ab",
  "key2": "WLzwC5CRFhFhLBG39k2k45dwNUxBXbZCCeCuukpoSG2EcJpqSqNvU1DviGH7E3YSad3ZvcYe112sh9isYUm3UAi",
  "key3": "5RVfC51B8HUz26ECNWzgQvgmo6xtPoBy2CowYL4Qn7UkaPgRJ7VWWxqHFPwjMfisTYpQmBbjjHQwUkibiSs9v3De",
  "key4": "UTLuiJshJsJpJJuggZ6msHBftZ9oKMuqruHKwtLNhe5npQAjZ2tXRL9UqYxKT3U2NxRAjocgJcAZDLQbXJwTxni",
  "key5": "5LKjPxrVmEThpsyFBK4SaHsPbhe1UybsVPuRr9rm6GnnfooZftN8JFEsozU7ie8YPrtybVCcpF8RPLyRgvNCToF3",
  "key6": "2UPXzUBVzTwZb83nVGwvLeaTfnd4NZeBydBJoNKkwugH5WjrZ8NzA92x65MkJ6MTBqQ4jL4iN52U9jmNdob2MWx6",
  "key7": "GVARpTxRBF3ZGxx74Esg9hvEbbWgKvnvYqWfVuVS1AwPjSZSNWGdC476YcHUxMBTJpHNdaVNSvyi9p7kSCwsMaa",
  "key8": "2XDuwE3r8AdtWu3KQCkaYcKLhfvqLoRsJhpjGqBMxYgKWoS8RFFXr1YGQrQswSxnibysKAwqQe6DofwkMPphNQ5m",
  "key9": "5cDWzrTz2tFoh3TxBpdPph5aeJ2kSoYzFq6q6PiD2DFadDhbi8SDMmqPZoim2hexX18RiqaScWB5EGAfndZoC6hp",
  "key10": "PAorNVHs7oAC6FKjpiBtLSiw1SSuzEyetTuRqGyzShgC3dX72qraaFQf8jcdmeq1tFKoRaGdCTUDkUESALy9Wqb",
  "key11": "2pXd8xXErdoe6ZfHvSxiSNyUuZmLc8KdLcVcrSMeJhjZuB9rfj8Cpk3aGZER56xtWMZksGLxEBEETiAKKaEzvpyc",
  "key12": "3x3PosVq7fBncaQnr93QLNszpJcWwiNSDJKmJrUVt2cFUuAmM2tX6EfRereazgreUssyMqTzA4S3VykG9r7VUxAr",
  "key13": "2w3iuqqTNsjPeNn8JaivagsxMC9jBDZXzEEZ5K8ELT6AkTccXiPzYXzbVtXnsUhUYgFH8sGygQc4FMBeECD2N38Q",
  "key14": "3qiRuLakCao5dhUsmURioaC87VDbF6z4eDD2ZeKsgXrCuJNLii55mdEqKJS37SSPXyBnnL9XXtZCBohbdojnt7bE",
  "key15": "31NY6hTRufwd2Uf1aab7tLmabTV6tSsSxeqc5UJwP4ber5oXhqirHRonRfdYrGXUY7k9gLmfvvuyvhsK314MYrqT",
  "key16": "5nkEjWGN8QQShnUQZbjHahXbNSRYxEnk6fARdRuRPQ4qzqi5e8q3Bx4Qz9k52Hdw9bm8xDkz18htNj6baJoQWNoJ",
  "key17": "2uULkxTTZgcGwctRch28UTrH8n8NSmm5Gieo2u5q77YW9FAAX2uWf1xCNB7bzTXzt4qgJtd2AYnuModZroWQAdEx",
  "key18": "66z1b3hRs9UXMe6Y9pVzh2W6ZKrMYhn4JVHaggpSvCc89t7FpJJ6WLwkzp13qYghvxc6s1LnQcWacZ9zETUm7ahG",
  "key19": "toJFqRapSteU7fYjRWw65zmpHw3YgfivszqyxCVb6PraGZ6Qo2gyuajEGSngbzuDQdABk8rtRBP2ZfvRQRgPjxK",
  "key20": "4RdcFrmBWQE1VCN6UPsLup49LZoMF1eWP5GQpw3fb98QxKxG5cDcJA5nGyszXK1S5NE9ZFGaoJrqLrx5eC6xToB6",
  "key21": "2PB8teBcStCwTnUzTiW8UbrqpkWkA2TGoYi5JToZTkHJuRWpWfao3q9yydKTePmffSd99GUjxFxnhc8Nzi5tmHsT",
  "key22": "3QFggVt2erMyh7s2jiCLXFb5RG3YaNnXGYxNS2g8Zg7AsLynern6xaZi5VLmgAwKsB8o7kiwCEHmZWM7oXmijuCc",
  "key23": "3bY2Lpx22BpeZeTwXfJMz6W13QUmAVmmDiLVNCpSXgjDXSZaAzJsTTrX1YfegojiwSSTqKi4u5HSHjeS8i3if78c",
  "key24": "rvpRi8bCCjCfyUXpw3PGJq9EkfpxwDkE5FQpdRjAg96SsGPNrDA3dL8E8Wr7h5HndYgDttAKpZtXc91rzZanum5",
  "key25": "2iYQ2L4Bu9BFysFGWUBY4kosR6dTnYynDurDcYDSX46QptJnorQvxBPbCEGFw2w7KGYxLKnx4cKQQVVD4DWSsM2X",
  "key26": "4z5tybhYHsX8vBPdFqByEhngyQ7hPESWmfQA8G2xBpr3RgV2qxQJiGig9JErGPBD958qyXeVYxEUDd6VtprVsg9g",
  "key27": "3ascdDKTzFJsDaZdXDAgh1r2RuBuSfeLZ3NczEbmW3z1kR1YpQQR4skyFN6KXWyWkCrv4L8BYmJEzpvN6vcBALGo",
  "key28": "392qTDF1V8AtsWfX8se2kF3Faq384BxEv6vbz8hKMLXVV6YsEeNzycBP8mNAWpfF1QqPMMX6Gu8Kmz3oowqAabQy",
  "key29": "oy1khSrsfu8nCvzqe94VhYRZGii589X4TyCXzh9UHrffegLnFy6S16pYAzcecExfYCfn2fg67P38bY4XgooqmV2",
  "key30": "2DCRhhn42DfNda8YHeg8S8ktGLZccGYBX7mDpXqfKH9G5sqfRiwZkZzVg85L6aHrPRcUwYLq1iHwt9T8YQdwRipo",
  "key31": "ma8D4gyVnwTUQNoCyGrinMuQs7UqXjhZvMF2iuvUK6DzqFLWBzdDabonUWE6woFNWfZq1dk93VXboMMwbvtfGaL",
  "key32": "5qUpo5djKYq5s6c2HCWynVigqpqfrWEfHbrqST2jS6jhbpmkDyzJxMn4uLEQR24n5C8KZRWmt435E3n42mPpvQrG",
  "key33": "4Lis33devt4akzsuPnmixkZfj7NAGGsuhUeySzgf6Ag7VdCp6EVnWWuETT8o6iQUX66UQ4QVdCiJ6fLAviQhY9hR"
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
