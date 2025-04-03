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
    "Z6iRmn1LwNMFdFV54ny2iXyyPz9kzvqAnGJdrHy7yTB1XKvwP5Mov5f4CvQ5UE5C8QUH8wF1SqRVVYBQGVe3QRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q9vcUZ2h9uNZdQi4K1SdRkB98U9hrshhGyDJAaGEE6PMod6pynGBt4DjvySuVSwKvVBJ1RPXXsLp98xb81JoMzc",
  "key1": "59eBLe6ecXQ3vo1vQaFjRwQEmZVFpebeMdNxeZ9Duq232PquZ65PJmpXWASfydN7mwVvWNYyYbn8L4wF54VLgsUg",
  "key2": "53Z2x7NWVThgDa27W3chAkWCxc2itNa3GsyrR3DG3mV47w8q9qoAn5eBeLundhPMNTGNezsirQZTCWbunTAuY7oY",
  "key3": "jgR19ezVt8XL131G2nY9fZvZZ6bn1BqNTJHJ8x3p3GkuLc5X7ZZJcRhCkAUkwAqrw1TWMpmjP6apmw4wtQd1ndR",
  "key4": "TGatrk7znamHgz389RbSGFTe92X8tGQN92Yk1iJgSXPj5uuCM89YCaBSEemJLPu9ScBpf8YnTgWJ8gCU8JnY4kC",
  "key5": "3BfD9E3m6gMQUnjtvf8SfkTNTE33vEhCmQFcJcWwRmKDrA9WeMYV8a5FNZ8URydQ3Eass9tYRFxkXoZN3g3cd8N6",
  "key6": "3g8gc681roWXZJwQ8nrXcioNYRY41vU3AB7aWFVeFg6ChQE6EMcJruMcyjprSFR3rJSh4BPFFKXpKjhrPQAebvsi",
  "key7": "4ttdU9f7XdTE2CepgyNieDNr8kPN7zZSEMPX5m5NkJ9nKZFv2qYnLjQn8EBcpzBGmUYkdC7utVEkRn5XrUfSWy8i",
  "key8": "5uNU7uBFgzkV1mkJfxVs3nBNXKUDYC6bgCeDQshK7wQZoCMRXKgKKhgkU4PboqJZroMPfqQ5xdEadkKsxEdvvq3V",
  "key9": "2YtCGZahGGnRBuhytfgoc3TYtTk1mxwGFaYU4oKZwoyoFRpq139492JBTwgjWx6tHdEUMySRSGdUcEiGMmoth48S",
  "key10": "rapLJuWGyER8LAfuNECvBrJWBZz2ak5GHnhKc7UCYZxA64M1xjiDHgX53nKNJNgnGFfLb5YjxzTBTEgoX7xd1J5",
  "key11": "3XM6Xr44YR7mNw4MGX5LHXRWToiynTEchBQx4Jzh1T597fbJ1cBJWcnuyWAJKiC2c6cn1Q9ch6Fdp7nUaVpsy1Mf",
  "key12": "7MQySyN83oAdv1kCaK5qQZ3N5ZyEtmqQCtaKrNtVNsGJRMXtnKr9qq3iEn4UgEm9sYYPUeV6dS73NL4axPh2vB9",
  "key13": "47gjrkGzzK3okehLP5K85uiVy8uPgDvTLww8v8QMESHWKjbtZm4FwBeuV4xYqbWNbgDjb1vN7hn5hdwt6cueh5oW",
  "key14": "ib5whS6gg4gwAHbk9M7V7m8N47M8CvEbaKaLMNcwKURRptNjz4LzbZWZZg5U935vCDgEGoj5Tkk3ijLRQLT4jcc",
  "key15": "wLPBxurY8nQ7NBjfc2H4KnKtr2SyqSr7a1EiD8j78zvtd8eSTuuLZghbnFpY1jrZxVZXU6zbPSC5TT1jfrXakh4",
  "key16": "5PEYqM4H28YEeTkNa6HixTXfUC4564y5ejWReWC35vwonR3uZyLWyU4ZrvykLi8eZdviR3t3E7ev9HYVANBfz9GE",
  "key17": "569Uv3UbLhmDrcn6WqJzGGshKya1Mv1hrvy3bpXV1buGv2fGjw5JwYE9wC2Suchvn77mLHVjbfXNhcYaBS9v3G6q",
  "key18": "258xf1McPZKX26F9umW4u2vjaNs84ZoqMWRvURnYwzm7a851t6ZsLGPwfdWR3znfxRPxPuXvK4pKC5GyReVSQe1G",
  "key19": "4i3suZ1KJvuVQFuFEjSVsyWNG33MMzHZHEi7XKp4HpSqxVFNSM48tvvh2hwTdjKtiCsgveUsYjmboYECqTwM3Zfw",
  "key20": "cHrn3heN2g9dsiq7XmTQsNZXnwWH9ZMFXgMEZm5TmLSrUGuZq5P8TXu86yfcN3u4ejyUnzfQNXTg7GwhaUCfqzh",
  "key21": "3Shs3KcmUsRXkmpYCRkhHjaNuvrKvyM25muAjMDWcyPqLu1LqVweBi1PHFrkAbXRoaVRJRHwS4Pyek3mf9J9FKXW",
  "key22": "X2LU3LJASARY3ScHzLciXfHMP1upyhtDrWQ9utwnpS6koVQFttt6usfL58wbbAoCaGWkyhuKQmLJKfmskPu8CoW",
  "key23": "3hFqyf9NoHFsci4C3effTfvyZt6o5icfJ1DWGo1zGYepgPTZ3QMTvYjvCr2Tp283vZjn7tBMHNSGgPbY5eCpkcFC",
  "key24": "3G8qpQqf8qhSRAJzPXrTH2i5DGTnyPXE7fGeXcmdjnHDNPjzR5MKBMLz9ueobJ7GBnKCnXdszfJjoEofhMgtDY2t",
  "key25": "2Xptp77qGkUpjKjxHJkaLprtgbQueE8W97LbXNyM8rphQAGFtsDeqkpu3qWDcy45hbPrv8P57SYF3fbswq6gessT",
  "key26": "4ttDdo16htxW67PuhrijNX2P8ZcZVWPYY7j2VKugoVTJoZR3LkwKADnYhQdcswdaaxpooTzPYXewuQdUMVSjadCQ",
  "key27": "2bz6jCkQnfgAR4uJMHTvpcNKhcNXC3PhoZvAHjgKswzEcL7AeE42cLXbsW6D4ws1Gys3VppESwVYvaD1ZVeCExYc",
  "key28": "2VrDHi2L2r8upJ2bsK41v9ga1XxaiC4pySzSAPbYyX3PVoB4zTQFTHynteZUZqDKLxANcRXVzQyzgdJ3Ypd7Dque",
  "key29": "2e7ABa1HXFptx7HLieLJVX57YDxx8Pif1LWSHKbkfKoaq1LDknjewMojxjdoZTVrfpCjaQdqbpz6aXmru3dAcFw8",
  "key30": "3U7tfkERLkVW4TCNgtbF3BkUnLCX5yi3Wocb9iGev3ewYhvPyCkt5a4YeTExQuzSpv64w7HmkWaQTdGzk1175xr2",
  "key31": "3kAExp6cBwG4ASBQFGmyzp14TjDTDXoNJuZsFypZg9X6PGxXh7AzpLvG7mcoTyroen3EXC3nDhXB8qkxbc8E8doj",
  "key32": "4pFwMWYUA7kFyVXbUYnkAJ9JkzALw28rB3RgVtrKM8C3gdgsdnQHu6Cmbkvab6iwm4YdWcouVVwSreuSLrRiuSYf",
  "key33": "4NLWGcgLLgD6e1bTLJ2a7tYh2g2mBbPHhyoF8G7henjPxZtPCxkDvfAr9G5769bJqDpRB2h1fFpq8NvpgpNF6qjT",
  "key34": "3fKysYwpsQMHLKHZKke4ZWWWUsUMur7yvfxY9V1asYzjJJsc9PgsiTCd1GYT3qt18hJxNBT6JFQRfia1AfMCBCu7",
  "key35": "5zcs5uJcW8wvYsqaypzMLeeZ5kQ2dikYZmn6PepMHQAinFkax16BRUguQ4L4hpVefdkz1LY9G58GbN5aXpdV12A7",
  "key36": "5RvmqiWJHyS4kMo8x2AEYUUagTkrzjvbXBkxhJfe6jiXAbgfHzYp5zpqyDJM959cq8FHcNDafMzVnowQNiTX9KJ3",
  "key37": "6qmG4qiaQWkMdvW6Gfvh46EzCrCFUPmT4dTn9B6VK621Xcw3dYtNNmpG1chL353Py4pXEneMX2X1PTNDWYkfXSs",
  "key38": "PzbvvWkrEM8JgZEd1yPp6jTDQLZeXrPuyBmiDonni3zsoRUVjrdTs29oXPhH52Fa2N21mktMKT2iCHjGLp8jV8c",
  "key39": "3eTC1feP3LDE1Evt9HnQmXpfMfonxLcgbPCs9TQy6QgG6v7623zL5m24ckJ8LcPDezLqeri2CyTEVwA7ESFFHLsm",
  "key40": "3xBFLU319Rq21qwapMv3EGWQ4Qb5tvHGDaGyEhxqHtGaoCD5eHwr7tYq8Jg3ouZSp4ydgM4cv162PURnyAGySDLe",
  "key41": "x4eoyBpfBk4Yiuie6jCr3qFSs4jzQPB3ihPaxv6k6xvmQpPkuBU5jAE2KqBvtjyxQcr67zfLYJ7AJvBmGjow9Mm",
  "key42": "2DnY2WzMvUQwkyPWxHJdtCdyHpD9VBrv8os9aP62CTbdH1w7gejSpty859nkL2ufV53CFwqG2xauHwXa8qnxjwHa",
  "key43": "5XkHdBVYrYeAgSW3fapRnkDeB5xGYCG2fcuzuhCNizZPjtWWYxjupLQMxX4WDZb7AkF7sovcby8JpAq9ZsFZUkPx"
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
