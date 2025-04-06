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
    "57kgSDonML1F5wk86KewaMXKimH44r4JERZroyfq8oFZjxVS2kbbCarFxT7UQHp1ZnXuSRhvVtKWc7pjeFjqzLbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aC1TwgT2nB54SNuDeV14HQsJ2WzY8S4ZVf9HWgJQWjhMYXqjipzHzu97FHFKzzLcWAJoCEezNVQtYXf8Ny4cZCy",
  "key1": "5467xQcVeos7carnwumU1LhtMDiftk2qecVgtf8k88BTqqQMfuudBjdTe6tT1Ls777N2LXu6RAp1v8nY6FJzcwwN",
  "key2": "46rzXhr3RSPa4fgxsiiA6h45LqtVRKp3aTurLaqPFxN3ADnVMCcTCXHUVxGr6ct9K9EmdyFTK8tC7d5R81NNRaCa",
  "key3": "2ncmnXKxC6p9TgVDgqGXyKJeoK17fL5cLaMT8S61EfomhizzPsBk47T75bLfZTgXCySSY62ep2XjzS2hgkME956n",
  "key4": "5XDejhfr1pgyUnAG4S76uoB575uPVQBKJKnKsaQSmaqUhDw2HeJ3NcUbfhioi8h64eZZfNQ3S5VQptDKJREDG7zL",
  "key5": "2EV4ASTWWv9cHMKaBD2AQ7y9uTUbjQLgiS26rtFKd8cWXRMTXUgVc58hdPZUPxKP6TqBLeCYoi2tpQoWogkL7onb",
  "key6": "5ukSYHVUxxxPEY9a4Uz6N9PkFZwF6fD4uMycjFULTCf6aT27wXshTJHnexuK5haGW6auBEiMh2digzfivzK38WNX",
  "key7": "5SAwUNQRvdn4MgzsfhZYu3f2M3aEhLAj3KQ15JYpB2d5BV1nvFaPaosHS8EraXsSqe8Hc4iLsMk8cq5HKXENSGwi",
  "key8": "3udMKYQUVZXxoyu9eFzuTxSeXPjJoX7XsvmTQ4USu6xJCQe6nhk669vMXpXjkXJnkJBU8wubaA8EUg2QuprgqNe2",
  "key9": "EHVKccqoAG1Ghu99yjTr1HyqFXfLitjwuspcX5JLvTkwf7V13hMoYud34Kcsci4vkLnwXGpYfSuoQKvWbjZgCKy",
  "key10": "3MXpWsyyDgprRTAvxXqiMaZ8dD3UgG624EcuKtewaGTDKEfHD18LNPcVuHo3J7YdAzPnbwpV1quFVcKGd4AngxXe",
  "key11": "3ZufNBBcHg3xmojg4UwMh9Fn7ZAaRR9jSVfBKufdNPYUkjNaXyzsGzeo4iSfrPcXp31zz4As512TUqJBLSCEKHyB",
  "key12": "2soVwT7qymDCUbsgdxfiLxBLXEmSWMtSC67HRvJMYo3gSGYLmmkq9aGo2u98tthJTdCnSTBUqNDBgTvZnCbbUN2q",
  "key13": "4hL5vzp4thFLpsZ3R9T8y7TFwdBs3E9G4i5xKATGeEKghFVTyKKqvb8YdPLXeRuiaGZxXBmmLVppCDR1V8QHcx2L",
  "key14": "2MDBfe3czyukUQvVwv2akdrk6mQo7Kfgi5jAovy444UpuQnRzPReZHpWUwTVWtxio4kQRefBw5v142tsjVVAw5JY",
  "key15": "3NnPcoUap3bsTXoEP3qV4tfaocCDyMaet8orXg2htD9ASNYpSLxC2VjYx4eBLL47ebFM2yscx2v4BHfEnF1cj6PQ",
  "key16": "2P9AfEj77wfHbv1DDSUB773aUkgePCihtYRbmSvx38qsizXX3QPpBEK3acTG3yHrDeYzfGF8PMyQeFpuxjUZ5w7e",
  "key17": "2V5qAV4kX8ScqFMVGX6PRPoHTmc4wkCfmdnFtWb9wYyoyHXpLwXQDDbqxPs6qy4XMuiqwaiP3Urvcrixfe5qbF2L",
  "key18": "2eyBfYZD22FsSf4YLyiBrio7g98GNnip372rPh3PVkMpd8ytSQtV4uKq1GV7pbbgER2x7N5wD94D4BU2vinG5Lfn",
  "key19": "4qd4qiuBrc3uLjbUe5AjJQzxnU2jbLPjnQekqM5K1MdwPatGTNKysynEXAKzt6iaeHi3xM1f2fVSpxMZ7vu1LVAr",
  "key20": "paVivriCcE3CneHAjAsUzcB5SsUwvZK8zwg5rRzgJL3E2KLEzZb4wM2PNuatmbzByAb7d9WFTNUjWheVwVQgnDt",
  "key21": "3hqMumU6j5GVP5sxMuppA3gwQFjymD9Ju6GxzFS6E9y8oj83hoBcsM488TZNNAPLFzEhxeDv6LSjdxofcqkX6NVG",
  "key22": "3a9mPraFEKxgw88ZpAG9w1MhKtwiKNax2uuFttXTs8bYajvJAGLqnYE13fPrNvE4PA25XkFaZmEpeH5wSp9fTr3P",
  "key23": "24UxFafDPeyFJNjYHYVJts5dG94jpkveDgj3Rid96R2yEK6Ld2a2JLjgTPmq3RHAni5rwmUQ91qG7JvDaWanxGDT",
  "key24": "5y5r4dKKPRyhBRa76nD1vD8FAYfmyhrn2sytMCVs5YqjY7LPRxgGSNCPFcVsqsvSHsHLwJHZEoXm5j1KUBKXe3pU",
  "key25": "2GB4g9vWxL8Dx1XkCT1TaZx23aefCkqaWA8myh8uzsE68vZF86ERSxXZiHL9DgSyrFgcRxczHMWvRD78WCADdRs4",
  "key26": "57AnEW3sykwNUdeikGAP1NySBY2bo3s9sCJ3zD1hDbKYTCbGwevK61G2LeuL7ubGPD4ZadWUTV8STdRNtAgkKCS6",
  "key27": "ty3NeQyFXNEx9S1o6P794gQ2qhGCiceEwuUyrjxa4HQN3P1QXM7oFhchFRrKz8dRFzwW1TKt7p2HHvrtkC8VAH9",
  "key28": "5cwDmQEfzku6ACHZyYQDzozzw9JAuhngtrVa8ehFosenZpdE8WhboMj545tWAwRuvX32Yk3kLqZk6ax6oU1tzYDs",
  "key29": "3z4bDfoMqWrvRAQ5QXbn1V7qYA5emYwbQNE5jXhCP6YEiNk7j6RncdE71dr5jMmxn6DqCEqTYqNfSvAazYqG984N",
  "key30": "2Fbucr3YeMmkggEFW2NpbmPSyvhQRSzSZuBTSWrPgpwFqVAR4zFnWuqksNVdsEtt6CeNFKBwqnYGQ5QfmLDbcUri",
  "key31": "5gss56wMFCVz8kmV4QQdo78BDdampuAy6yxiFbk19GemvtHXRz6Y2T2C6wykAgxkdQXWRUJqQQYtKeKverd2p5hc",
  "key32": "5Q3jjMdkrXZU7fiZWzbnaCiCcSV1xFp9fWViyXcCPkfYzkK3CmWc6YqzmQ1YKunZ93j2upyBqmpP1gb1V1LHGWSy",
  "key33": "3GE1u5fNFX2BZD1vKfpptMWF77GqALMzw6ufzMnGz4RXC56QCxQvUDGjJvsWUxzCzVU9NXjVYnHZUEHHU893arjt",
  "key34": "3GREuwomW4e9pXw9XVTm2vGM25RRJ1gHfiixK38aBcew3x3hjZrjZeB2gfaWJYymECU79zhwuDixNEit79B6iBdf"
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
