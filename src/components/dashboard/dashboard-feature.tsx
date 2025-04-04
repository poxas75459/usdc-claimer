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
    "nDGLAZTnmtvqqUXeg2JQSnsuuTUZn5gyEqqyQuFeDJrEQeTs7YzM8qZVAfHjEaUgfecCU9TE1Pc5FxRxKcpV4As"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UAuUsY95jMc125LzRjTUAkSzmAStT9pkL5B5AC47LoUpKJwZGGHzF31xNVCRPQnvtNL4oMkJUQj9REhvvXZppST",
  "key1": "4H124tVJ5heTdv8jtGJv1HKbbQzww8TauMoi1DfhMpwLwGBx7xQxZAePNenzzchk4iMzRFSK9U7qnE7wGNjiSWuU",
  "key2": "4NbMWYfvsm92etGHJZtTCmEabHGLic8JbeUFwT8c2APfwNcfHLGfE4x6xUMiMvcAF8FqCSuyJiW9g6Y5zc6zMhcc",
  "key3": "4uo8x3BCaScgpiQ9igPJeyshoVqnxoWLfWYbB52Sk14TVUy8G6eCXw2sageJNSnfP3kSoj23eRH69LTg7e9XYfRy",
  "key4": "2uaFZqH3ByTbyWyM91Rc8jbpqst4Rn9e9ATtSBe5trpST9tjdVZy4Rb4vnq3SqgdP5YbabbjCbCsGmb6rzv6zXi2",
  "key5": "ix8casCjnEi3sSNBZNGFDDhoSJxSGqcGaMmrN4BVhVNX7omegmm9bFkEWDyaXDUy48iqCn2e2E8hSm2ra9DV7Su",
  "key6": "4nA8E9sp9Yrw3GhKKUCGMccHsaasMNzfDQ3DK6xKQWy8xwKCnvPH4L6jUzHaaow9hA5zySoSYpXFAgbqc8L5hPhA",
  "key7": "3BgFurh1nv2k8UAzE4ezi7AcP1fGg9FUfTa6YdYwV3Y9MgyhTFvshugvZz8Cy9svhd3Fzmzm5TJAvZqNr6VrWNqM",
  "key8": "51R2WrSxah4YSqRQDpYSzrFhCGmWoC2A1Rs3NY7NDBRTQiGDWNUGaJQXAEtev8y5u8isMtaiMfHvXdmJbDHPY6Un",
  "key9": "5YWScWaciTrRCttpeMV71gx8ga6P5XAvYG3mmDULYBmLN7x9SrDAxUf2auM1rcgpPvGCLqYL4edo3KQ1taxNnFB3",
  "key10": "5vkwfzkHu3eafpn8yyc6wuHKrUUFt9AbVnJfTrAv5VZg4122AN7vSCvy3UES8MFgqiiGD7ZmXgHABtyHHSvbgxij",
  "key11": "4aYkDk1osPZkt66B7dfs3q8gqcPBgYhbVgzkECeGf1Hc6nNgyFVyetREqaTg96yrzPFP9jKN5CqnuUwb9c2prwF5",
  "key12": "481w8VXEwejLJnXXb6VF4VbQPbuQSXZjyRgne4szS8Dkfs69MTyvvUFRCHuekPWYqMRbAgMvSWff2i6yiCu7NH33",
  "key13": "4Ffm8iZ2eiaaQp5dDQn3kr1pJV5pdmSEWHDuwafXP2w6R5pA3Uz5Wk2anwfcwKzvR1foDJtkBtm1fxu8KoVYSGkf",
  "key14": "5tgQR59XJvnaEEXChDmwoFGCnCKub2Axu9eHj14GHCmopTvPyvthKAmhBfj98hQnbQSAz3wSKZcvkyLWimsFSfLQ",
  "key15": "5iCPUoztYXih18YHRDUYTn8oiwH5XUW4QtWyy5F4GWsNDMCnWe9fBideNFty1wVXqEU4TezgHd6vhJjpg3F9pNTi",
  "key16": "4DfLUKun4x5HDSJKw7bCZB9T8LW5vqxD2omPZDyCSiJeA7RThWDxuWubvXaEhZXGJ16dby4xZ3Sx5AUJrGukHT4R",
  "key17": "3WAn1Y9WaxJTgxtEdHCKtfoXPJ8RjudbPzxq4PSrUznFfpT9wShxSJ5vKkbN4qx7fKMfeCHnhSjW6gzkmfADhULD",
  "key18": "3owRqCdrLMEz5G6dVqR1rs8Ab3poi1JwfSDZM7VZabwfpYzhB7W22J3SfDfc1EK4u3DB2dX4NtHT1FkkPoeWsWNw",
  "key19": "3FyScotei71sdjmFe1AHUPK5Pywo6oTfFHSa6meWWw34URhZP88Sbtct1BVJF5nU6B9bNydK7Red2zpuSmapAraB",
  "key20": "vFXa6Z86eHaAiFaDHVDQcYm3E9cLGoXonE28pwjm6P2QDnY2UzTvr5oJSdi1j6GhfcXm6xZEBHqbRT5B4cCTv6q",
  "key21": "sFf4TajeubrYTgQmJFoGuTqycsd7fL2aWYBFkEySxcWWDdjBAyB5eViKPC2Bd7wyfvk7BTxbK2AkHAT44mCsLAB",
  "key22": "3bpxXyFDxxHJwV38HEKP5GZ2aSreRe4dPXUqiDgUP65kDvPvbGRZ1Pexhq9dnm4pQxcp9c57zLEdLhc6VvUNaCcu",
  "key23": "4dQZVC6Uf74RpkBjUJ8PdoYfndnY7cdAh2qBKmREaovkXV6hcGoJLKXg2U3oCknssj44BUe97DPfzDeAcoLSPxSE",
  "key24": "3CcsgwNQewdtghYfdkU8rPfK4QVXg8LGkeHzAaVW2N1GkanNZGqSn6rk1ZL67ESb2Ahmb2ktBUB5p9PqwveKe5F7",
  "key25": "59ondNZ4gwUxrrw5FajmPQviU6HFnFNHFe3o1PYEmsgRVUHQY52qkZeVSqa7FNy1Sj86p1furmMCgv4HhxNtxSkT",
  "key26": "5SQjxYJkEvrbCgCLv6pjhSsA7MQvAPbkth3mdcyFkw6ie817tL1Ywxy3mG8RWU1kCyEAVXgT5VgztgU5tf7J5eBK",
  "key27": "Jt8HagH36qeAHQfQhhJDPcj5V7oVJDAN1xx979uRQZY5oVJrSkJ2AvCvdH9WnZUfwFcZgN9PQjz5GKre2DgQVxe",
  "key28": "2tPJqdrjzgqjf45UD9gvN88RCaXV7PeLmw2mWRJh27d9GpfCFwAA9j2YwKCPGS8BigsKTF9eq6cmaHtXmukrn6Va",
  "key29": "3QRkKZ7HxWzRdzwwFERQZjrqaTZYHwfjVtH2vEtLxL7rTesXKQTK29XftuzznJ7i2wGgPZXhs9KzRiR68HerLHGA",
  "key30": "3q48RCPG5fhUGYCgL9nKwWZK63tS9cyNXbETTRqxvMMeWbJyZd6sJXEnXW42V1Sk5xybirZ5GjyFXZJWXEjqyevm",
  "key31": "4px8DHHZUooRNMxBS95YHvQJaAWJQwt1HwAdov99Z3HzkW7h842ezSVsX8hTx1uenpYb3Js8xzDK4XHsB5PTByuJ",
  "key32": "4KnZ43cnHDbYfU9wnigp9FRuUAGJSEZ5zL2wUK5LwTQCzRUmYweFyreC27XhkuBtX3wPiyGSB7z99JkuoBqxKV7F",
  "key33": "4811aJnBR2GxwRMGLXGgsKbw415pZX4BCAMM7girABC1LNCixrDEZL6nuniJ2gMnQvDeSf8oMgAjQNxH9VxEQtib",
  "key34": "4ozkJuXf5ysq9jCbBWtP76YFrSEowEaJdobajFiUUSxsQgJrJajHhZUSomGKHn4oFrvkJJJdfF7VReuFFBtnfLmW",
  "key35": "66nsEEbsK57FBocJ5hgfWgYJCPcvY5HiRwmVLJLGat32fEXGTVF7ERUA1fu2iyiFyWzqw6CNvAxBx4oumr1kW7zT",
  "key36": "4qQa7jMSxqD5muJmf1a5AT8HVWoN2QsfBcCmjsEYJ6PZnPnARwvSHwYKh3inG4fuh3EohvuSYwQisJCqiuWRYJRJ",
  "key37": "38DW8Wzo68FXyuKGwr73pY8pwUVpAUdGiUQGhr8dUXYG2vh3NLGUayupx3ihxRtn8sVybJy9PQ7V3QzWW9b6qUUd",
  "key38": "eiScRaXqds6qnN35PQhZbVL78XzS2FecBHAAHZHeDCRsufPt1vE7BB7br4A9uLR4Z7EfGqQC1Gh26AUxWLBDkFp",
  "key39": "3933cryDqGsms5ekLBcYSSc8qmBxc4zu9EqQ3QydRadLRZWMK8xVzoUyoq8immrwWfns37ShZHZ2NJKcqFQLEHDe",
  "key40": "3Wq884j3fpdaSKA9c45dHCZHK9hK7VahBDk6QZSsrWHxNkCNYQrXDxTqTU6W228cbhd2q5qu6wqzhEK27cYHAVmn",
  "key41": "3ZP2M5gPEmu6cWvR7iRTb2AjptjAJAyBe1cZYcS3SAPqr2rr3mdrzU3MWKXyE4ifiSTRGhXXHs8aBPLxVgGvb195"
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
