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
    "KY6kjdtDsPKVAQFCHEF5BkxnDbmVvKEnuidhKJQn7EPGAhiFCjrBqgAmJ7tViGyDG3xfeyLHgQA8saVqtMM5fzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iS86o3Mggnjk5W9edFGa5wX6FDUSM4tzCD14xw1EyJDYAoENGhv1YQV2VPVF2dXJJVj98ZbChZqCiHxg7Uja6KD",
  "key1": "2ovHnmZZPtSSapEf8ZWe1wB7C1aJDKrcuXxPPGVVLmSxJPAus2a1J7sVXr3hkdjN53heMM5jgVjYtJaiAJy3XTyd",
  "key2": "5dzjdgBFSjfVUaTLyyBdYdBYShtwt3AC51co1LGX9iNY63mE5T1MiVdZDCwBybHzUZXU6daZNyHpn2bxnmdNhfkM",
  "key3": "3anBE8b5Fny9EdFwt6AoZr5JFzsiNXH8dX2gW5kotyLKJmTS5mT9E2y5eQnT1uqkQKNZLPKRPzjMXviCcjfYUnLi",
  "key4": "Jpq8L5CoudSatn1261JgTMWbYBRygaK3XMLgJeK1ADjcgAiE42kTWzbdxBFjeRDwCTY7APymwpmVKxYmVidMZbb",
  "key5": "geEHLcNNXui1KZgk2rUYuEtvNZXrWFGFoW4oUZ8E9rBscqTzcMvQDH4TW8N8Gw3rHHA9fV1Sxcd3KgdeY8scu8h",
  "key6": "RMcvxQcA2qst1bWW6Bhi3UpvKiJUpHRF1WdV2d4FCn5vX6mGkJvwKYC8qKx46YU6Mk1b9epbaWroaDLzHWedTZN",
  "key7": "dVpdKUhmaaZjsxB9BYfYLxawPkwwEiWQGaHkDjqaELaF16y3GjzjmvVov8JYdyncBpDUvrmTX7ULCkyAvqS44rd",
  "key8": "2S9TrNmRjSH1EgH8twjJeCmjNYJNVRqZDi5JRjRot53eHgGrgFyM5wDso4esPCpCF9EhjiZTWEBuDX7yaGHhV2fs",
  "key9": "4oTJeDTLFQaKNLuVDqPQMQbv61SdCz2ZNKVGLTMHcSiLhEJ87vc4Mx4pqN4Yze8GHLb5X8qYMYRnNeqTGny3A52z",
  "key10": "54QkDXy9LQecbtce1PTLfadccp7uWeE9Hgswe1ZUEWBmFah54iK1sWZk5Q1VZJ4m7bnA4NYVHpr9iHMLf1W3JVTu",
  "key11": "4DYTND7tqKWsshWWpJhCqKTqmziyrfDfKwguuN1EZqp4SPZSQmjm8T1mQzniAwh7rjfNNdUVSL1sQJEdyJi8cjzy",
  "key12": "4C1czT4YK4mNiaeBTePQtKW69sUx8kS2eAihNQkitJGBQhyq17uspDFRjb5zR3hxXUjowcxNiK13WxSLsnYftuRx",
  "key13": "67eT5FjXtj2FixtgkWUCNw6SHZzCgChAHvQ2UMzA9oTxu5FMs2Nv26bUKgaSyX9gKcrgMFvZvAu9ozvHZrkNHcAX",
  "key14": "3BCbJuDVAnGB91kcQUP6SivgcbM9NJ273MCzSSuzmzKmoGd2uGUTjuDt4mASGqmPPpebdjDt5v578fyRzCRMoDVT",
  "key15": "4oEeaGYQY3xiaDhw6SDZccZw5ia42aaXeHruF1QaEDWXG9oK4LpiLfuabcHsf57dHnw3ovjRQ8Js4orozszDV32j",
  "key16": "4svkat5MMBMqAZ7YVTWukrEKKaLjjHTiPh5XcFPW4WhfVMEm93Em4d5XdxmMPEVs35uHyG5wJqvc5pFC2Rphavwp",
  "key17": "4tc218dVHN19KEbA3BNyj2hvmYb7C2BDaRYYxnxh83K4ZJXmYdqHuT2moVgHvxsxN7Gw1UUfSfkx7f2qCz3z6JLY",
  "key18": "r8RBthTycrCYBcMuQh1K6kBu63RBdM76JaaAcyosJ51vz6ZiZCszoqo8mMHSWwcAwRvk76WbT1sjnVtKN7NAP54",
  "key19": "3qx8nvNGtZq2zzyLgvJAt9tcqCPganQsjiA8yS23ZPz9FG41aV8pc9nbHR3nspPkrp6usz31nuJNzdmW4zCPWuHP",
  "key20": "Sspgs7tN4wrijwSDobXpjZShwgn4djCnBepi2FmcLQVEWHUX1q1pT29rj2eGUGo6mRNmkePafFZFm4EJ12DbcvX",
  "key21": "64Xu2T8TsBV2FuJij3iYt3wFRL69DZXsx2gobwVQVujvJjmf7cATQSu6oeRYc2UBFHYRBehEr4R7x7FxKz4KhEdS",
  "key22": "3ervDU8KuJPraQAyAcegia5J4jZkXBu6hgLsVmkgXcPUWEtGUN3XCKECBGSj4L4vteLMiqfZggjYpKdmVqSVADBC",
  "key23": "276Aha1h5NrGdKHFqGYUs6m5kYJFARGiMJVWytQ3RjqofXPsHNc2LTRToR2YT6taBppkchDVTakLVekNEEqjQtSP",
  "key24": "4y46N3EN6WqHX5sv249ZivqSKKrEWfHEMzGNLp4tdGcRtVWojNKT4JWT5gHY9WMoJ7E8VNUNfy5w2H3xzRmhUE9E",
  "key25": "5YRYMKbQrPyZrZpQpr6GUA78XC7Dy4n2Asg1yRb9xwBVntMxicbQomUszdnSDHLE74sQjpmSasksfVpaXiEHymHC",
  "key26": "tWByxVcij2pvuBjLo3fgDaUfCQvUJpPbCRNzLC7MVkwo8SiRiTUFLz194jX5xcamSwFi9xaKj5Zd6kjEKgDKLty",
  "key27": "2pnhRJWBQ2E1k1WSGPVdYDSFEwRmSY2aR19qy4L5yj6CzAj97PmxkdPX2DXfFMRtmQCSXRDhjLmLfa2Csf9UHAas",
  "key28": "Hu2kuFqhG9ZjowhAjBdmo83r5P7wLpcXtPco37HHBdauwD1PNHipw1s5a2g3Ta2whrBLgthVHPQdMnTZgsCK5dE",
  "key29": "4SzYHHYiSUrNYzsmRFFBxXi255bmmtTmp7tHorajbNg8Fc1RGoDS2dhCfX3JT8CRAFEraViAnQZbDUGEhUfxXqvN",
  "key30": "5Bzcq19B9wHFpJCRkS6JN8BG5VDVc9NZtYNrjRf5rhwcceVo2yJYcgKnkdwQF1NmRDLKP9Hs2MZx2avSWaszGynt"
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
