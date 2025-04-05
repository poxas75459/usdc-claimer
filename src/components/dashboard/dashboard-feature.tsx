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
    "5MpLh3Qd3da4M2XDymPn4ZToFkpcccC7SjsgKPFVVUjLJKsZymdqaNuCovHvTyG381t7D11FEY3E2ekHkqTHzZQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GJ3FknEaGP95T6kRNTi9UViyc4XgXX6vPQgqHcvYVZme4Lspay9FvjVvH2W2dNQ5h6q9eEk4ohEy1ejRoZCGYEG",
  "key1": "2Lo9BabaZUxhGCfsTwXfJVrBk7yMsgBD6TpHvBNbUsqrcGHW7tVgKo2fjpRvBJjA1UQV2EjRrdn9S3M8GFUUC2mn",
  "key2": "m9EKzEbM6vf74yv7iwGg71Nhm7ZwkP9GcvyFb3qy4xW1agmQhkXVKUpCb4YSVfkVdsij67snxwCwCswxihsVXgE",
  "key3": "4XbZD58TienLcEG62gd7WQd44vS2eHmzdDMFLtHvyw1BbDShNC5a51pE8tV9GSVPj9XrbTSosHAEJMeaMzuYqspf",
  "key4": "3xC3TLhbhCDRrsK6ChHNEuNZu7t5RoPC24ndnMrdmkX1FFBTMy3F5c9KsmSfshbokkYvA6Ap3UWaHK8VenKL5vRJ",
  "key5": "4UFhH7fSQCykdZkcA3KLPVWYYSkCNra7FhE6iG8hMmbgmi4DabhR34btEFfFytrfVSkaWFchceNP9BnY7k5HJwJA",
  "key6": "2pgHGNFRviYXdUyv9D546uWBzAJUZh5WCcekoK9cXVns9kA2R4vjGKogfcrTk5TQcSEcE14TAVKSXvxGm4vQqQxS",
  "key7": "5MpEnaWS5aQ1go1D8QzTqnNbXmzPuD7a6fChYAnQFLutxDoKHDcmM1EcMMdzLoYAwfRkopH3o3M3CmJnMQTQ9ZZi",
  "key8": "4vv5ZdFAJL9SnthNmdi8F9xnSDgvujmEZ9ABT1NCkivHz75Kv38hfk9vWnmaHibKju3myvEKEX3jEkAAHX9fhjsA",
  "key9": "5jagRG8xay3MJYH7PZYCNCNNi3UkDAfu9WpafhG9Xjzy2UhaR93yg7PZY6EVsVyGcDdQwpKtU3eJoLG7iZNPApoQ",
  "key10": "xB4APbtKiYPKUJgZnyJXMQJvCkHfbSAxVxAnSpu9SxEPXgP1YLpa5KrJ9HxUydSk5f2LWFxfDH2TRm1PTSGYc3f",
  "key11": "3uJAp5WZZpMRDzhvBQhvGoDZTexGnEkwqNMRhxenhxZiRAsSfZ1YwKUGAc1twg4kUs5oCJJZwGfWtYJaH6t5siY2",
  "key12": "5Qxy2d7QpnYQUNevEfxY8WUDs8n13VYy12uH8fPNPvfveLbwK8MNhSfTTPZhGM6zJuSNckAHnpHaqphv1FxMdpHX",
  "key13": "3TNjPn48HAz5YadaMi9A81xkNct4Mz5XH9ByAzSkHb7M9iKGzqasSzwsSe3zcXcxfQb3DnDXoKzddKrJzUt76Hwu",
  "key14": "48A8cZ7GFKFFiHquHtcNzFo1gJ6pKaf9EPQFNA8eqCjVNdbQWhmxk1vAUy6KaXLnPPLSLL27GuBbVLszQJtbAKaQ",
  "key15": "23Q4CbZRGzuahMCfxbNixGG3acmQDcPf9bg8B7p3hxfXPHKu5Q7ZpecC8dPAHrphTqwBXubn93TYSduUgFEiuqw4",
  "key16": "3W3wpe4HqF81k7VsGfpUwp8JbdeeLhg4DJrVDCXp15KNAwCGA4ps9tcSGLigFqXNjQQwExrWCcmgSFX576PHbYgj",
  "key17": "444YbPTfHx4moofW82Hjuuy3Sz6n4jPUgPVtXsyxgNSJwEHGpZzoe8gggiq8euC7UQHoC6AjAGtktvE7Dc4ZZrNW",
  "key18": "4StWmKKkZjXGBujkBrABmqAEEjvJAX1R6xyPFg2GTnMGXZGBBbQXpmLf3ARrbRxHpMtb5QuVqRVYfowYofTEaSkd",
  "key19": "5fXjBnspUwtz9HNeHjW71bmDaF1HFzkZrXruZkCTucsvKQB4jN1r3mLGG7Vv12NHA11jfz8J6J4fCWiZyhmE3dNG",
  "key20": "5fWnncR3sJ69MAchjeLPA6U279sfjxQaTZtbj1goneMdR4EtJuze31cT2YXjKkfKeo1yRDAZCsFfUvd5a8nCgL75",
  "key21": "5PodzshZGRMSmNdA4Xeh21kyHtrLRbmV7e2txGQef6ouqWSjZ7HCHJd2AFYrwv4LGbtnknDuwrLxTwrRoHj8Dop3",
  "key22": "67RS6TuEEJbMyePLXP2b6coc9MiexBqHLoagPPzS2TnHDdJP4jR7fwGXGyrEE4fnZqn2EhGviY1R2JcxMSC8XouA",
  "key23": "5wD9T3KDwwTESB5W1So5VSwBB89HPfwBTm8sKomEz5FfxzB1f3fihyLGCJqVrLHkifoQBYzv4jqRGywYauTKfCG9",
  "key24": "4YMhhuueusitDQwcZEUoTq1wcSg8CbHN1M2tFnhjhHPF2eDyEa1R1NGCwLZodCKXQYHNuVbFUdbkuAshAc9UYccX",
  "key25": "2XvPinuUDroNGAdPQmBwnNDc3J7fRHr6NetcQPGY4Ei4kZduz97SLhV2QAgYJrJpCLtWAeQeoRo6UFztYP7HP3PY",
  "key26": "gdph9Hw6pX2xGAQ5Y3qAsFn9b82gZdAYFW9kJVVLfcvQye1pohWkVyu9uN9PwTVx1S2kZgz3Y7c9d187XFanjuv",
  "key27": "UuSFfYrpxvJfSS5GWG4MDdiyPf34jjDM7Kz9e9U6TjwKByhqJzvibsNZKYyYBaZZ9dQYaF5Nu4eMB777SotaWKU",
  "key28": "2HR9aAoBPJ6WqJ51DNk7ULPFd8pXUdoVWukP2vx9HeFz5F8fUwETwk9kwwBJmuNyM6X4595tq5Txh1M5t2QYr5tp",
  "key29": "Vn3FV3acR38q8GTGL6j7MuPxtpF9xXFEKVbqfgtsS7JCax7V5HzWqrBDpVUKWoTspK8CuNRsHyLJ9tKYm8EKEUy",
  "key30": "5aSasRvXzQntLr4wiFR1CXdCRM63gyp9pnC9oZaPfcGa9g1PFD4CKZQmarY4LQVFvJZVUBLmwN4yFuneJ7HfXrjj",
  "key31": "2Cy6x8oMytZo8PsQVXNq1kdfWef2wVLQZ9a76hd3cX46DnUQPcqrZ5wJq7crfw7hJZKeStMbsb3zAaXuAmc1zEUJ",
  "key32": "3fYS6tfaPogzqQ8Z2ouZ7V8dqKFyw9UHQgrWGsXK8WCu9VpRHreSifzSqG2UvxVYyF31Hz18Nhm49H1kAhkqZ4oA",
  "key33": "51Am1VwWn6UkCVncSJngDuXFLXxSpMhejVT9LwxKFPBhCev6DvKNRV3rL9AJHxj6KHvHt4uToKnwsev9SiE5knpS",
  "key34": "66fU3mR42HQtgawqS6j46H9BXitDzxtSsFtHR5Eju91Csu2v1UKJRx8ED7E7vN2X63jhh4P8yxM8DSayzgY16cgQ",
  "key35": "5fNRSJaEdiHiV6Ht7bzmGy5g6e8Z74dMZ9ziRB3pJyeVoPLjcy9FL75cuBb2Qp1iRL386ydeNYx3t1vP34efwyap",
  "key36": "MXtGs79z1FkVvbqG5uM4i171gwksGaSQptAamWaVHszETmQcFA2fyCBaoC4esiHpEnhfNmSDQNPii58YQRvXA4v",
  "key37": "4N9K2xh7T2o5jtbiZfTVJM7vMdhdTuUujNAPoXX7jvb4byuVAXQzzCpZayfnpL9zP3GcyfaMEjBJ9qVpfZPYfsd6",
  "key38": "626rye1WZJLwV1Wc9gwfWw8ZZMpAtE8WhPBVHca2kvbVcqsdeHMMyyGKTEATfj75zLvckwG5E6ZHTQirKQo8Svf7",
  "key39": "5E3k8dRBufZgx1yA9DunC2hKnnPH5Rdxxz87VH4UoRvHpMA67KY8oh4upfPnpE5pw7BkP6FtiVZDgNhCwxPmdTk7",
  "key40": "5kKUq11aP6zisHZ6Kn88Ubnmcs7w1GaLuaNjqw5VKHaaHqjKhT6LH4gEfb4LExfoMVuvsbKsnnTetiFpA98cu4VH",
  "key41": "4qnG3AeH95XGMKFBSKrFbL3ZhWK26KJiSQGBjPWUbsr8LrQaJ2c2jwiA6FRb2STuzKkprio3CepwtF4t52kzZG8L",
  "key42": "2WHhdX6A4VZ1KZuqC7cCtJZM2p7ihKPm35YwEKS5K5N1RnJyTkByW4sSEmVzXQEC5NkhJTLgG72P5QX4zW6muzrk",
  "key43": "3VhWVNe83eKuf9nxTVrQaHebKtrJDvc3N893EJX6LTkyXkjJn2G6Jr472ehmVmA7iUJxNyBjHkQwLd8iB2Hiq7NX",
  "key44": "5Zr4f2dKGw64TiQUbwtvzy33Vc5MJcZ9rjUFqkqQzLHh2s9EpEerUz8wuVPos2ytzLuc5AhDGZiMJeP9Jh7ivczG",
  "key45": "65WkpVb7ht9JgAayT1AetafgV2LVpJ4aREFsUmucm2pD82jiRGwcPfTAVwq1tyRyRreMZUk5RFDESVNmUX2jAgJF",
  "key46": "2BdfWBnxArLUCuf45M5r3DUNTVRTcYTCcrDxKCtb3xsaNKrnztyGChQxxVKK6HJarrgsVPVeny5GW5zvgCf3N4aC"
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
