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
    "3onrtGzQoNDvXHorw6M3C9KsZybHjwYBhrhXvmakPM8HtDayyEEEDYxasCZedUorZE5MkP7zT32FFKcpRPqvhWx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qZwGrR2W1KbnvBwm8zL8ES8k7yogDxtbwx1GwFB7h2HXsW6A2e9NEgFS2Fh7gPJ5U3WpwSXo7n2mWaCQUWeJify",
  "key1": "5yXxV4fx6KpY6ZxE87Rm2REVkBsuoZf15xpcPfwehYPE6DkmFWThRyF8n8JwV9vGGriFZ2nkSGJn6VWJSLWYsrEU",
  "key2": "55UEN3x5SnvL2813x2ZEPiih3cEufLAL8rnKWwfiscGyhA6xtkoKhRdqnGLPbVNN3DvdGEVFpdanssByPeU2tkbr",
  "key3": "3TDP6HHsizJ31boSBgigfdAZKzEMgan8Nqc6XGkbo1kgFqSoEvvYjgTfZFRjXE23XWWQGMa1LwaCDmsvR6j424Kr",
  "key4": "3HE5mkRx7nMtZaVdvRCR7gV5kMMBcTgvMresFLS2ttsMY3Y8MuREZvBdwj6ikWudUZdc9G2MghgTxCstvNTfBgCS",
  "key5": "4CtR6Xmmg8AvykTuTBfCzSVrV5D57m46jJk4yrjrdA1s9KsS2vidQVN6qMHNGjdphxcLC21rrEtGb4ZyDpogig83",
  "key6": "qCVJxMTmnH5DVP67j1wgdW4rrJkbAA121ZJRRCHPTStqSvaNTcs3VqLQx6xGXinU32yjhvpsVj1qQ8Edz4epTHZ",
  "key7": "4mNUMSyWjG1Nf4bgNRYzpDpsdmB1GcDErxFxzk8PDgK5mEctxMU7SmQXFXay24HZcjSMtTgqzLkSFQxCzWWfm7Pw",
  "key8": "2AFMicuUHaFfAfK393MtYSxpKX36JpB259c2RqZxswNZRzr5LoG42rJeMPGknPSLnSgAtn7gpqFcQyHHqCu1YgYy",
  "key9": "ivjjdUbaDagSXWfViKrhnspbaegpor8RopPjjShMT6yeT5H2BwCWsmRjyUm1bfj1ppcYjzfvjtwjXbQ6641qVHc",
  "key10": "4xvXarbNzENHoGKTphCnqTqLLrPSRGDjpoMBFKnG86LnyFbiAJZjX2PC3oX7XquSFHxVE21wGDdSuNLGeEXPY1nu",
  "key11": "76rNAGJA9xUEUohNBUp6hC61v7dBQ9N6tVtSxv16jPqmyDnsJfXhsfBwjdSJ2dipVNTVL47XauJga2dyYV7vHiV",
  "key12": "2HoHACuUt7KUUeFc4BFnsapLGRHKho7oNzL7q6reW9Nx5zoqPgaL8nkGGyLAMcWrWsEM3mLm5EmCyDx8LcdjqFWE",
  "key13": "psDDMmo1mXaBiJrdxgta6KqK3BPrYMrNTHY7RzwoRFArQAPQ4wQUjKbCjyFXbJFQbERdF8RjjGsSL3ygEJAGaJV",
  "key14": "FQ9pdLTxvWzchVfoHnDW2EtUnCkzhgLCmvdjpTiPdmjGdueN7XfxCyjcHwV7ixJUfLwFuczH9iTrXurnazzonhr",
  "key15": "4at9TF1gyKqRPit5Zjq4WWcbbM5Hgk2zECQn7K4oVMmPXCqBvJhA2oqnq24hBrbqDFst7L69oSANH6TVf6G47Ppz",
  "key16": "53MzJhSBQhN7xypPCpc1MSxsVADkvugQu7J4tj3vDK4F3qFrFni4NeTNk4WZKFzw9TMa9jAy2phLdmuFr2F8nZ6b",
  "key17": "42rM2ms3vheVwz8YEbFkeVY6q9PpoYMmaX9uRciMs4yXF7RqfTUFG9uG5nz39bUimECxefhLyEHHNWvUAiRgW4pK",
  "key18": "3cyiY5jpXNgm8Vk5S42e2uTsuiwhE7AroEwnvgm4nia8Zn5XXcMmcjWVw9of5Bf5kQDUir4qqbPRgwa3Ed1mhZca",
  "key19": "5isvt7AcCKam3WRZ4WhvTyEwemdPCyBgY9oNZGyH9HXocBZHtH6u3GDHQtCtykrisQXK79ozQHyf6XnGWygA4sEW",
  "key20": "3gf23cKyRaAoqXNrdtaKADJZvMQ7EUyDpQspKHSWontMq1Ey5scLXKBkgR3E5U2hPYwvfRKVfzcfp3HLdSgnqkW7",
  "key21": "3tYwbEEe9DocB2n7CF4fobkzxLbQv3sc67Ne3vT7hKqgsZFY6GDvahXAbmiFExKWw8zSP1pmMwYMVVVH7ytCHgzc",
  "key22": "5GB6epwPcAp3QCrq991jB2xDuWWQBfCWejiaFxjBPnde1Ct9UBPiWBYFzmj6S7k9VtoFNTCkDerHebq9kz3fWtb4",
  "key23": "2TLEkbEdwRnDpKZxxbEvPnhGZVuzKqtMP3Ch5ECKfBbVqisxpPdgL7j1MkNeyPZnxcWbRykKVZzRhujPDrGVZnqr",
  "key24": "4V7fmZRZTiTA6e9RCHHvvD6tduzNrn4FTdVwoykKE3yJuueCQFBtGkn9nuUtFErzzwzwLMSXdZtpASeHE4DBN5Bw",
  "key25": "2hP3EowK4t75g7aXKMRXVUNCejYQUn66Fe7DQ4V1bMb64RCFseRbVighQ7Lx3VseJeyoxJHUPePSVQJVLSmtojPZ",
  "key26": "63khM13fb3ceJr6zjSxvhUcQffgsUEPECcdJUFeipuHrPY6wFij8DQk2n9Up9T789BTSFTFir1yZHggAX2c1soyA",
  "key27": "67iJBT7bsT1isgSgA5nWwUd3rPCLquLqMsLnS2Wv9h5bx2XVLVkzUD8mwjPAFTsD7v6BRJYV6sef9r8h31Y7CtLN",
  "key28": "4t2cjn14D18ttCbg7KnaNQXzUMmrHnRiPpfzsLcXKkBZ4wqXE3VvLSoFCjTQM4hEMwMYUEUAvA2716h86U8cHjH",
  "key29": "4JuLDHoQF8fGj6jVpYJWKWKDgivjCmc5q9AzCgrWrVKVdyyvUnpv7couEqDq6QSGvJfdxEmntv84HQB8wEp5m1Pq",
  "key30": "3rNomNCH92QSPzbLNQ1pdaDbQkQSkmfstwujnUBGESRstNjiTk5pCPokAHdEHqERbQvBGPoJTVM2L96RMRQXT3Ur",
  "key31": "5yDumBZrpGQHQxjYyGGk2qT4HneBQZhs4igqmJdHUjaTYnS8fb3acMn79bXa6qSS1hL5eRkp8u8VspEUMHkg67c5",
  "key32": "45jLEXLqvsi7FDZN8XhNMuxk1tcM5ZLR1Ve837oycUeeXnP8aHvQ1LHLqrnhpAunCozPLffJvf6y7X3zu2wjW5Zk",
  "key33": "37WaZqx8LxfNZpo3cdGiqVr6N8s4BMzVxMFBrDqMbcw9FrHQMru8gdFuFQaxy7VHNZm74eoJJSJWcqjc6ZaD7zSe",
  "key34": "2cvS99bscvTWDvaXXeowEriHh3PKuetB2a9vyrsfz5tq6SPcx7ZonLq6xANfXxPTvBqk79ErgfYChAST26Lt8gkY",
  "key35": "p1Jzy4rmnDCANPTExbGMGRgg2DKJNjF8yG4miv5D3YgtyRs5AGLw7UpGCk7kfHQeePdTXVxvLCNSf2hmkBAYDqf",
  "key36": "45yVeXgLGNtZiR3dQZHX4xBcxtuF1WgSBf6Qk8DL5L43hK3JKA5KJsfS9t8SLscV9kQGgPKQDnqNJwrgj9eVuWHC",
  "key37": "jumgExeQqu4MSowpHzrrg1iiuvwJCuGD6syBhX4ctdGHAU5RJe8JD2d42AMJoK7qBVgQhMSzYP9mux5VY5CGmWa",
  "key38": "4M4aVHiX5jBNgahumaGQxidqjQ5VGpj5rN8iYeMPfrhgZnvT7NH7BpsMBr6aBxADmkovYGXvJSPLzdoqxCZwkRBt",
  "key39": "3TV2ywC43m71yCJ15Qs3drrL3LBKXbNDye5Ctnoq9yuDQPAKBQshG9RWWg6Ri1jc26gCte9yV3UakGDqExGZYnVK",
  "key40": "3MQfDMbsFyLo7vMVmnZbjm1zMSpMNoMqBYW81bsqTLxMkmNbKkZgw8WtZP3MT2faCbLAeMTPGZyCBcDKe8hYcHai",
  "key41": "4diAKMaj2VSs2QJph9vjSRMRNejjLQNLYuz7ZUb6p6eGjPFJi6C1qxER5EiTYxdezoL23yKJbeTmA5EZWaHo7CTW",
  "key42": "5en7oD2GTSZfR3WytvAJzTiW4sLLBs1384wM4zzsY8Q9sfnh8ZzapVEhiXUKZUx7c1B9eUGvp3eKL1dCRJgb7Bp5",
  "key43": "5cQsdcexUodWfgYvtxS6USFNdSw8sfo77h3N1y9Vm1YuoxDYH5nLfvV8QGqcpkwXkKPfWVqYMEkGsMmUr6ptXpkB"
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
