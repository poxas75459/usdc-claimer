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
    "2XnqswM85hQtdM6b19CRTmaVHtHxSiuPbZSW5K3sHs8LF3eYALHrpJjkPu3NA4A3gMrj1vzqhFm1B1sSjL2JKQct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KEn6NErL1y8hsF92smnzQkagfHc7Yn29SCp4qbBxrGX9XWdDUtXxB54YEGhADjWhScaeggm3g3e3pZZJXpCfd5W",
  "key1": "2bo4GLpEDSiDZuckdf21H4v6DZ18xmcgm1aoYTEks653jA4iN3HgzKuDTKfKbXZyVYgY6JKEMMq2gUCMRcvyQqmU",
  "key2": "3NJtRkgMf5kM9sYmPCWbYsyAvFzDaHYG5k4wG6DWhs163ikzJrQ1HzX3XqK72Lj4QexRyPgeWxfjFwHcz1r5tTvp",
  "key3": "3YTDLspWYLRH9Bk6u1s1UcAc6eDRrLwh7nrxPiu448Y9aR6jLLXJZw4HvAqSrtCRDBvXvo1bx5w8QWoDWmBA9BFB",
  "key4": "4SfVXBB2gg5zJjBGMpeYhh7mwgVGZdUq7RLNJtBs8VBm3hFLAy4o7PcC8EALd9kUpFafH7akfQTWGNsL2uKT8yVb",
  "key5": "hpWTQVQjdQEz8mfx6QBDZvAKbZyGCYJjnNzn4toLDEVbqgZpmZZ8wd2nzWooPi94zYEQYvmzLLbANrtsi36i5jc",
  "key6": "4y1pvKuWwAbMAuqs6MJotdPKVTZtWkbNSBnBETmdxPR9Xdo3HJubysXtMkED4akq78zQJBGepwxHJL6PnbucmDHW",
  "key7": "4RrNNew8dRuieYNk4CsvC2tFgbveL4ifX7EvAkxSmy711CWpw6zHS5JyCRQv2uXFmyLSXTchu2iVZVYMMYKr4Gu",
  "key8": "3cJoR1R877SkkWh1XdidYTJEtysADQrjY48RunhRW4apZdVHaFUuq6o1ZQd1q7QoDEjXxQTz8nMH2Mh8ogrLitGS",
  "key9": "4ie4UWoS6go4SbvFseSyi7V32VWCKenx2H2ZW9fQqaqH8VvgnWv3SfoTH6XfvpqxBsT8amRtzkhih7aUEaTYwxPN",
  "key10": "46T2B5PCkcRvSGLNv4LHC7SjjAdcv9JCJqPuMCv7bgVi8xF9ELKC8xxcb7cWikuNbi5y5t3M4uJTWY6dtpqxsYYQ",
  "key11": "4uqAXbJ8Ab6DNPw8PYQmiNHshWxFQkiqfbYL8egU4YnaCGS8358LCUJE3fPNsP7hCJwZK8a11tot7bAcLWBJcd5F",
  "key12": "385vc9tLpUp2aFLwkJmF6RBzQy5uHQ8vVRErqF9HsoTvGgR7iuR3EjpNM1Ey6d4pH7XycMBe3vvZbH4xR3AXvNZQ",
  "key13": "42fco3YbfYuTfvK55MFHK3E1JpkmC8TDnimVmPnwCfiBG45NuUkxodECmCoHbNZjCKsNW3M9oSXUQzx8oqkvkV6E",
  "key14": "4XEEnpBpU7nFEBUCX3rmsi4sqwWQHeN24RuxjRb85AgYh75YWXxRPeVUw5bgdJneyMDSv7xsV6k75pUGzy2S4h2H",
  "key15": "4pZ7fASHp1sDhpQEsrWS3opPzxZzzjg6KFbN17nRYhB8f3qbKjMyPBPFMMj3EjhgWR7ZGTw7ck71BTbkoytsuYo8",
  "key16": "5hmTXAK84gReAdZRgY5JUg3U8eKCsHUmrPR3xrmTkiKq8hyTuhubCf6jt1dHktsXXMNNcicixWsPLpDYjucaqdNJ",
  "key17": "5p2E4yBfLCkgLcBvpzCDgFzBGjpW9YnXiuUhPvkzD6mNQaV3a61XG4kyP3t97885mYhaNmwyQiADjLLpNS1UvVgL",
  "key18": "5nBY6gAiAqeUMLgDgqpGFpM1qxEqrkj5cLEUYcrtXicapteWR4AM1dT5cyym1tWW4UZEpt8QAqqorUH6GeNJLvKK",
  "key19": "LeQ1hBC7dhttmKPSAqP3cZt4T6AeaTZZPZymbabxiUYFVeVwPjMpP9rCQL6fyQFihHvSFym3iFVzuvk2qNGJmhp",
  "key20": "4vc6MvEEnSYmyh28brjuoY6ZtbhJArTd12r1xRwV3ofNcq3PpToxPu9C78ZqhdyPG1JvVtgCzu1jCDAt61RD4mbe",
  "key21": "55WKpJ21oQnRfWXyU37JEhK5isgEiuXLqY8EALos9oPQ6J8M68MXnBX1AqDrMRGdZbQFSws2SdXsSr3qXiea5xBw",
  "key22": "2XqKLkgr1iBgqD7gDi1AKFJo5zAbXdGevnedEgiPdZge7bKyShh2nqu1cJtQhhqPGdvku3qLFpuXtQsCuQKBRvFj",
  "key23": "4nR1iJxCwLJ4iraLChYvvGAnZM4S8Tqj27ttejsixkGAAaBJBPRm1YB3grWt2LRuF5dcVmWZ7AsYg4TfYUK17FJi",
  "key24": "4EPjT7qr4s6b87mcJ3N2sC4zmP9bug5Qetu3i8yoA7GShHvJGACgNwbKJ96UvnC3WFGg7usFB6Dui4NNNcmAWuiq",
  "key25": "MTwaoqSPnLZ6nypwj26hcf9LHZExqHhzSy87KdaARbQ5vBD7Hw9e8PcPbAnYTfyxVzxwE9ii5RtPPwiD3iE5hs7",
  "key26": "m9dQqtyceyXZVQZEp3kEiP3eqS48mpi7hWQRGxkRmeofdPHJ1GgnBaAY8oMVAbA2DHTCDXh1HngNB9ztDH5Lwnn",
  "key27": "gUQrorFAtAUFrknpZdcXap1muzShCGtthF3BYcQjczkjzHaDpfEMCfwpKMHxqMorJiQXdo7VsYtDpDbdxthFdXh",
  "key28": "3rrkzwQRt1sWPH2A8WquYkHSmCKqensSJ9zm1iu9kYAYsb7UuE5byXNhHhZSBQWojnmUuz6sMGAVsUeco44TptvY",
  "key29": "DvfTKxrJURR6apyV94JFfiL6okHDz6h4LX8Xgsbc5ocHkhJvzjoh9A4ue9oaCAyN7tN5J3wrPgLv77DNzMKSSf6",
  "key30": "5DzCZRJF7u9TJphaxrgMsiZWapSAcNXHsJRnXZR4SZcTux3s5KfKXNRrmnN8n2cKd1u42ywJxyXtoFAiQCxQ3sT7",
  "key31": "qhxQpi8asU33nDTZxsVTC7NJLWy2De19Jy7aWgpetrBHp9Evc58QvpsJ8EJaV56tVNjeUL9QMYSwsY2E9TpbmaB",
  "key32": "5Fpb5vsu8Eq9q9gQ9UPvvGpsNVeV4z2w4zwCavhCKCF4FLnRCXAJ7UPE2X8b7ph7BhnDFw3VUgxro6RxGM4TASvx",
  "key33": "8wz1NtFLBuDkuTRs9K2aJ3ZWZofFY44wCcQbgNqPbgmx5MZkiufY5Ab1ekrf6tYvVVvUqKGta1DPkzE7usYbWcY",
  "key34": "26wa7MLLr4ooNfSZgEyKiGhY2NowoSB18U7e8rDmvUvBpuzBg2txaNqct3tvgXcemyQ3jNAYoPykBY9GUU58F6oY",
  "key35": "AF5gcojVRHMBGDgN1F9s4wdx2oEcRLyPTTsZnn8xnEviJFXnQCE12h3pkM9pBX3YjWr4Pbu9V9EMd9fRNpPoxyW",
  "key36": "2JbrzpHXX8CSqLRntCE7fk41r6c4gdhgZTBNLUMM3Sw9L5QivAYnwt5g7oSeDwxKoQRAqpsPYgVBbBXvFVu5Xeja"
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
