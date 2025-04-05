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
    "2B68a4fyLxbmPiMa4UnmtUSgmceKsCbUzA8NBM4pPpqgpjPEfkaGJ1epghMHH6YrF4Qm5FYH5JpZDv3aZnopYrHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qGVBaZUms7k3CXCTJxjtftWvqvyyjdhJ6EcgHvBrABababLvUkxrmJ3vddnNuJctfAyapbt35oyz5CJw1mfsbDP",
  "key1": "hr6Pb8qy2uG5pf4NVoAerDUjXxRRvWWJHQVdbfowdGNLA8EgBAGLZqDMggddh7ShUBiv7Ne4SxMhrDZqQ1THiGF",
  "key2": "4Js6ZSu7Lu5wKbcqURUYodwsnLtvRDoDKW2wHAnWCn4sBpeQSXzB2yQPs3H19CFa1CH873P5fCn5usxns1JDTvQN",
  "key3": "54Ze9ahWjMHCRTRBv1pTTxZpNgX4pcuA4vpRjSa8ZCWFM47bkkZNWNEcqd37dJsRezDfjZHwTn8RmSEywfjbQgQW",
  "key4": "4AcVy183iuGLEq4rWNbBBuWA3ujGvpt5ER3ReKWvo4KodXf883W6bFNoiekHpChXurt4GPK23W7axbvesQu4NY4D",
  "key5": "5mfsJvYnhk2LmGg8ctCH9wi2dyQa9cBb79FCbLbD4oCbdSL4koh9wuoi6cAzYN7Z3TNhMtREBFGhgZzoYMbtTvXF",
  "key6": "2T8Hqyg9J1AstKAZ3jc4cHW5EP1JEF1ErNa5yfcz6T1keoLSniUnaC2x3T9kPLcPBaQfreZs6TTm2Fk9A57ZASW6",
  "key7": "31jCvmPXdGQ23Tvu8T76z4TGDeCjTfTJ6EU9uvdFtxGSdFZ5FvEk5RBVXVnmuFFx48wRVrVTy8DuXKkTCoXAD7XM",
  "key8": "4jrZyEFejvyzniegBHRzdnDXou9WBzrUKKVBX9mS4eyiRcEmGgFdcNnS3xy7xxoNULtGfLMZNoTtyoA7K3uNipt7",
  "key9": "5Yan5GAefPHomzcUq1dno2FxBjbmLHMGKJSQfh9rKh9XE9NfYmrL75TDoEE7jRD6WYzHi3TVPFiHHGEGrJW7QXGe",
  "key10": "36dBTSyDRBNQMy7W6WnpLs5eEkXGYq9VMaGqU3mqM8jNReMdzGC4FcRd9LwyVL2x2mohXzLE8gUcUfDcizrnGEup",
  "key11": "2m2u6LP9YzMyi6fc5a9k5cyiA5G5LTppMJR7m8gfbWBwhCcukFqRhRjt67oFhz92uF8UWDszp5LTE6rftbz8bdZr",
  "key12": "VSV62RpEcW5QwhUGLaYyRp8wxhFTmd2wYYAAsGw6Un65pHQtPRYF4vd3Xg9kCqYXPwcaj27T8CWEjEGvAEycK8C",
  "key13": "uP8Kz366bYAwCkoBwZsMunDc4j97esKMdkvAWzezGSmC3a5YfWEYg5bNZtefnRmm3a2UHncMbwAgu4FpzjVG2tT",
  "key14": "34csLXKxwsPZoQBnyZiD6XLfG1EzkwVhKDo9UViHwpJVyT2PYCipN6hubLkwM4uDUUXGum2Jf6RoxqMMdG49uvZ7",
  "key15": "5bR3ZXB3PU4fG5XEPWeaEdoE1V5SHkrnjBhXHD4GQ7ge1BpjYcrn8uSUkh1YEC4nPunB6sPhXh42ptiaFoaxjH9e",
  "key16": "39tsnmbvrPSKYNSk1vnhhRVf8gA1P185e3rjEzgq6oPHbW9wNMktKfzY1hdDURHGpPc1dnDj2aUL1zQeh9iSAZBe",
  "key17": "3trBoeqhSw3MiULXzqB9G7V8wyCkJtFkRK7szVvaMKGdVz8nBT3Vt74VF1S8sBu34NezbCuWFvihXH26fKmd4dCS",
  "key18": "4XeUhkDibB9VzrpdZLp92Bj6RfM885tVycTt2BdeqyF4VmFCRnWYFuAF7oWT5FiRz7gTP6bpNt2sMhYA4uiKXsq2",
  "key19": "4XydG3HVGQmDkWaokC4exe8v5eaBXRvaBbGzvBbw6dpssX64p7xokn9VP82GrVJYzZdL6RK1n8NaTZdDTJ5uPTqy",
  "key20": "Ebi8FwrERUbLu95QvXzJyxYJvrbJXxGc3Zg8JNs9ynhZoChvmZ3N62MBDa4edW4GyciHFqYT8A9eRyyfd3mpb5y",
  "key21": "25CBx6xzZr3VyitNNqthdh19y3EQvA1TuLXAsPTzAzLJ9d2Q5V9f4zBCSaKkZRR1m19UYC3zhepCSc5Wer8jPGF7",
  "key22": "2NDDBcYHXDAFfmExBMcLmF6cuzddnHTyCBAVeSoTCbgVZ4193HWTHUgNwJbvkM6weB9KGz5XxbogwgS4nCLkFGx4",
  "key23": "42JmDgETHwkY1B5h3oJBs7kBnCa4pnNmymQq8JnTZbsw755Kpz4qC5WKZqAQ6aDNxDmAKPuW7TVYqogbLUoKYNCq",
  "key24": "RGrXCVStGfs5ntZu51vMvyHzgUjsXrNPMU5Kg3qsyr6BC4CqwjdnEJ9wGPRrDPKb5cQtfzuPNwQiegsYGwgHESF",
  "key25": "NFaShhk7y7xSjhDn62ywcS2R223Ydm1RRrBFAxusdEX5g1HrDMUqyZboTE22XLo9xFUgnXeKbCTYiwkgq9f2myB",
  "key26": "FKsfwwT8VSJGujJ7cR5wq3FxuPsypdhuDGeqHU4vdUsHAiwLsKJ33BHbsVDZRpuafrjFanChGUFUJFbM6VqftZY",
  "key27": "2DH5kQrZPA6To2ryPpVvURxn71u8y3w4QBN5V53AK12cHY8BhTGGX8TGuFxB4VfcqU12FpRNe5Yf7ZDZJePSirox",
  "key28": "4BgDL5LPpf5dPKC5UtgNxYuSFKoEd4wnwyZaTxxzyaL9uyGHPRXSLbufeffpNRNWpENsLjUupaNxsP9b1inM1PH5",
  "key29": "2JgAW8SAaqrsun3bn95AuDTntSkmttGQgYNWzfgyxAkmThkUrzKgtKDq2E3QnEDujyLaFvEaDspaGsSHzfADV3KM",
  "key30": "5QGKfaz66DdkET8HHPEUT9Cm4GaUwHsyNMgqkutkyQAHbziHwtefey1GrUKq3G5LLXXPUKkavmeZW9dEhHqb4tyF"
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
