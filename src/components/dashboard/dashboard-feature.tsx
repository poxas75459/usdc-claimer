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
    "28mG6GTYgw8mbzUZYAQDrrESf3n78jARjDycCJzkgviwhCr2XJDyc7DqxTN67ComUJxnDpHB27tuEYqyDo5dHVap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45HmbY6hDMs4JFh57gz6jii85VynRRoTo4kC3zhCt8pqctxag4bQwy1roEMskFgSMSj4L2yfAhkpCvwW7huGXeuJ",
  "key1": "2LCsXU6VBQem8Pte3JLpVdjkeMAX1RWzhWXBzgMnJmqYqUFcpyJatyCa7ar6YBRhEm4DZ14sEHm4sR3BwJEBYSHC",
  "key2": "3cBntYCXkVduFzakYdcKfYcz3knZfcswFHtG85ag4Y1EmCv7r4TYCsXhPcqhuMNbahJmGWq4zdNX29AZBceiXrGc",
  "key3": "2cQVtrpmRkhHEQrhs6v8N3r4zXT1tiyC4vpiCwJ6CWVnm5fqFF655MDPzsi9fSzLQqGiUNj2DvEjfaavQGUjF7QX",
  "key4": "2zd3NFChJ5eqQcEWsX7XLU12wC6D7pQ4miaVLpWee7mK7zFtRNCk6JFhTsVADjZuMYD57ixHrrLNF5uVFnH1Era1",
  "key5": "4Ei8uHubzW6exuqyFpzGM29DwThMZsYqvso25UNGJhze97tK2sM6pUQ14DmYWNXpTD3Yqs86R5bT94dNPSpHfdRa",
  "key6": "BMVju4PYwhxBAHLuRcK9iHXUhXVNEo2498pvZhtd5JwSwUwgVLsQQLvfjCEo7WazUoc6T7ZxqWYi13XmaSEzGhB",
  "key7": "36pTMaiRW1VhkxwSGGepfPXJZvXxeGRiqM9LpsiFgKiZN32ZkBgwyjXMFNaT3P3qnK14FJ6k2Zrvo7JkZ9Ns2kjR",
  "key8": "5VxuGox3YFDS6Xh2pgya56dmz1MRe44divkiQArfsm5ts5LXr6Gk96QBC5E3wy1qvUcuEo6wPjT47p58WGmd78d6",
  "key9": "N6zEe5Jzw9GjWAz6QArNqB39QmTHh9WSPGU1BqGcxjSTciETsB6f5iht2M7tng4fJATdMJy6dS2sstsGwZRYBsS",
  "key10": "3iMKdHuEeUtgL5TdcNSh9tKcpbJgSqisH6nAFvwFsAQRxpgiZRbbnAhyLCBfsuk52Rn3y8nggqy6qu33GNFcjgQv",
  "key11": "2tYPqqVUiV5WUdirMJGqteQqz8Mn8UKrBVWkNw7tN5XL5znm1pi5bW8qq9YrBmWMnaE6Jeg2xiie8uLrRWdpdd21",
  "key12": "pLPdbRxY3VmXbBFmhjC5LcixE7S3poGD3JqZcx3wiG2csNnL8qMdNTTM7YsBDKSMmiL7asuLe2eZqyKYw7ssW2g",
  "key13": "2EzqiZRPQkLXi4MR4inrQvpLLi75xgyex5efUCF7N1UUJRQ1SWocpYTHDnVVuQkhknr6ULkqdBaVfqFgHp6x37CX",
  "key14": "4GezgrkA76Y79A3ZZsmf7qxiLgqqnpXJoyQJggZHQd6RwvM1HydBoGQm5YrXcuMHzAwhDCDZDpW6fUhtCz49ayc",
  "key15": "3q8k5SrUPwXyeqi6AHdiu1YvNiaLJueb5qhdTYdaoPtT1xuvNnHPui6a1uxgsvHQXcj6h1evbcGEz9CcGMe8jrrh",
  "key16": "3LAG5uRU4KKo1ihtAcNWG9WJztDxn9kJjU58FFDBhMxxjimFrqhPfGWHCFBBib1a6LWnRcVs7X5DBpZ6A2CJvq37",
  "key17": "359qFfSX33wxzsAYwynZaRTT2aWis8rWXFx5mzNg1wfY6EYap8MJDHvJTnp8thUivKg1AYXMXYTMGtd7ApKBJUiq",
  "key18": "YTNR7VaneNYPFDogAbEGqTcec9vt7Fnx6TJwjKSDvjMLAF7DmFtGHHesYa4Dxkx7GJf2kdEvLWTdJusRaco7PSr",
  "key19": "fdWWxD961wE21k3vs4RXvSECifJzX4KhGAkXYXRQg3zQ7XJoSJzoTNgJ1eeHssGk7WswaFrb1qWyLsFM4u5bnBC",
  "key20": "5GCttjG9ZAQQA6ePMkcBLiohWTrMumi9xGHMQbm99QdM5qnX1zN5QFUYvvrZcGayKmexGrxSGnXK2Gd5N6XoDjfQ",
  "key21": "3ZzF7XXidsjjcZH8LUM5aaNw12TzNyAruDpGPbJLfbJo8xaTVM1R8PW7TNJsZrPqJoFVJZUoA7vRJ3Leq18QsLJ6",
  "key22": "EsdMG8D2kNabMC3PKWFupMxarRVdDxfy5qSgwVCXthhuk1M2ZEw6rsc2VV91q9qoccLxc5TZgAg5yz6z6cP7AhT",
  "key23": "3xTx5TcTwePHqo4zbYfexe9c5axi4zsFCBiKodLcCfeUU8Uj3DaAu4RqVaftiaikFaynMor1gjBksCi4QBXWxLxd",
  "key24": "4BdpBgFcuUfixF8JYKduX5cWrmNo2DaWAuTwmyvtFYX9JtMWhmegczT3ffQfGFKHyaa1VdRiUroynWVKDYqeibzZ",
  "key25": "3sSj4V4VFuEHuk2k321eEVmE35uZcxcNQL2UWCWDbpkBVMBZvvapsAzHR7kK7weAs5SsuFhgRGcu62y4FMSAKjFC",
  "key26": "2J6y4NnLrNq2DjaZ7Udo7vT9JrPaREmfsveEYPxwP9pZzReB2EFs9MYkLfNivqkRqtzfc5cuapScQ9a8jkDDEQX6",
  "key27": "368w3aXn8xrnrMZU5q8jg5NGhTwcv7Gk3RvF5s91GSCeT7qzuwhFLpfEzKzo1GohBKYgU2MAX4NjjmHGUHjeJ6bT",
  "key28": "S5zBfrtibGrAD5mR7cosamJ6iNfks9Kquaq29xG4DC2NhipGpkRYV1mCsG4MmZX4dVyWagwPP7bzayUzivitqCz",
  "key29": "5BxD4ug8AuMpRHo7zErYdGGBvs9mT3ZFdejSz94MxsVAagw4ZeHCiXxyarRepNNfX492WBGCXtmxKaGLwjkJdir6",
  "key30": "HRkcnrbTtkRrhGnXRJyVTW14QSUvT1dkdywSz8MvX9VjdPfE854ZoYy2eJkrj2dCsWRVJk8EnLBfRu6idHpdKMH",
  "key31": "2QMQMUCpUMBd4wtG5CiwWSUCTAsyn88nJm2KP3fpE5p3qECbKQGDQ11AxYR26ZsbcCMRvmq1dJ5vhet1FYJ7oaJP",
  "key32": "4V6iTb9N64dUQ7JqTaM6kPtpxk7vmrhT6N2YM3GQnTRxBy3C3Ejs8dTtA869pu5eCyksXdVajpsLtJfhT12ixZ4B",
  "key33": "NuiSxuxLzVZYUbUHVe2vHZh4Q3UhpE4meQxVe4KEfeKYXjam4RGriZFRRkqBbagou441E9FYq8ge4d5uTSfxLNq"
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
