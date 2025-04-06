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
    "5MyAygpVyiak3NN8XhpjLdmbruYmBaG9FAFE9G1UmzPunfFbNZBXe9DdQzzEsQozBkynRY7y9Qyt9mR1nDtcdSTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CvruNJtGt6kVTgVJrDB1GXerk7z8QCPGLAVZ9UKGkojKJENKipgg6p8LLa43TZSDdTeihjB66Qy5CdsnnfkQiG4",
  "key1": "5Jj2Rb7HUPqBPHJ99TLf2fFmz1eeNZm8oEEX7dDab9N5bvgDNVXTUySGvHJ9cRAwdzuks1x9P7xMNLWTA91i6X6Q",
  "key2": "4bpQME9144L7weKJMgtgSSGHWZ32WLok2t1bedTkgahiFizQJYJ9AEu5spbcN6roNCEBF8X7aSNF8CwHdqLdrKs2",
  "key3": "3GNgj5o4CtFLdcQBrNUZ8jTmHBm6aXH8yozHAZTJHqnzqkLoErgzhD2hYE5eNghPw7QouQJdSHeFwL7mSUVQNk6W",
  "key4": "4WmiR9rrLQ8tMoTFMgQhPzNaNtuQhkvVXYFbJyi82MKPASEhdtgojQsnaFoFYzZZvVMT3ThmeeKuaXLdSYWMdYut",
  "key5": "5u7dC8xp5Lyj1Xzfw6qRQXwLAw5Ha8HsAngHYPWS7MU7Wuve65oUD9PUppJxvD1UB5ZYddZu1RpPL1rtSjPzgsHB",
  "key6": "4fTXSXAPJspnpt8Cg2CqxD5GcBTiRhH167LSBbk8tfp94uYVBnB69ozV6DcjhanrM47FyZxYD4yMZDnzWzQMxgUn",
  "key7": "2yywzGJQcEFrKe1FEK7mL8yKznxKco8kdhj16icr6Ba33u48gKHgUPvz8WtugydRtGNGXxgTH34kmdiNHC85vSYa",
  "key8": "4yFps3pqc5ne8GfzZdgmPuVh9JnjKC34BquTkaiX9Ut9n4K1MCvsKWZ7r8m3JR4c2qDipKJvJqHYXQsrjr4TgF2a",
  "key9": "NnDXxqcnvqt7ZsyvuLZja2dSWBN2ruSn6ZmwnpwZbv2gyT5DBpTU1HP7iHrrhPPaY1qqsFPetZV8AAmrEP6fiKv",
  "key10": "3eW9r7bwsWSeLKm1WgtffStRdiAF5dcYCcZubhmJxLX72Q1npgdFdL11ARN6FGVAmGEBqbf3MH8WEeqyYjwKovcX",
  "key11": "46R5dyEmhSSrgact98xBeCPXD9PYAboDrBcPb9BHp7h4wT9LuC9F2Db3ArrzjLtViX982H4RAsxnf1Ay7NgV3gJ5",
  "key12": "4pyg4swnmnnyuNkHyjRuKe1yeoq6jm1j2zyj9f4bWtKAhWuxxSBgRsbV9BGcBWMXWhzpwNjCdxbVkvnYDWoPqes3",
  "key13": "2q3Y3kZmSBxwNzxpXbizNEEtFd3GT8xUakCdVsyNYdThsTNqpg263JddGotDLe8JY6AsRFR5kDDeqt3Yr2egonLe",
  "key14": "2hBY6skzthJC1tTa26SArgxemHCZijXrRsnyyrDkTA4cETzLQM4PG41mnZWNMEyijkisTjcpfgntYF32noF1nCcR",
  "key15": "w6vj2im3uVUmrAxC9daeZJeBxYq8HRxBR6FkifVQqjjjeqNTA3B223dNNFnD6JtitDcPDP3a9Q5HDEroXXm9DnT",
  "key16": "58JeWmT8zahmSh5Cyr7SBpDzKLVdv61tPXpzwpBSZQPWbbat6SQHuHjhrguNBkmmRBTsgZ2XQwfNpk7cQ8AGEdjJ",
  "key17": "4dFMFdnk4W2oxxcub2Z29LTXs1a3nreR2MANeb5UhccYS9D2b9xzMU5wrZUxrwDRfTL9qjRt6J9cBX4puggjhcnL",
  "key18": "5RSnkq7EV8WLcotK8M9uZB2utkXKWrfY5J6bM1A2VpbNyYtgcVcSW2fi9kcs2VnVKGpEQbrEp7Ev9uNHfo2RvGst",
  "key19": "4HnpLcxZvvvLPyxE7kkD83AMW49j9bxfSnAdVThgFd42K3D3zuY2XWXRXbD83i78UFkYB9qyhUdfFaeofrSixANW",
  "key20": "NDvwAaFnihRUy1nuBvRBSVwK7VM7mVdhcAftamjtSb9VTu2GT4xzdzmS4SG8bTo5rpaWV2PNXyoF3nJLkLJs1mF",
  "key21": "2trNoKEGSxVWhdsGPD2tvUpDaLepoyaJj9WpHLXebDCxqEcC8q3JkPc9jQ5DWerCVCUx4K7WSxxe2YKKUwk7ETKB",
  "key22": "4AYVo6X7A5mLQLHth9eJXWUpoQxtf4YtHiPPz9aDmHh81EsdjnVafrELhQGK9N455RTzoBb5hBnit9JS2FY4xM9g",
  "key23": "2vwTU5eUkU5qdmdA6qabBCR4VRvV5QArP9CFnAC32FHKAqBZQFhEc4BbyVhoWMsvRK4ZTckJWvUJigDAoCK2imwR",
  "key24": "4kLf83RRmCVCgLPM6y5km7DRhX1prPge8zKytb4ESHeL43qEkyy1M5xMUfLzSc85EJVaKsNEXza7LkJST8LUH1e7",
  "key25": "3nTKC1NtifBTV88o7rmhBv3r4iBtFMcx56mtR5p9XuzMS1zGEtAHaHfGvw2AftUMJ3YVTBEJyRPTm52rj3w3UChc",
  "key26": "53qiBNDTqJq7Q7Rh75rdmmoJ166uEsmQ45VmUui8g7mHx121rG5BzZizGyzumeorqK7qq5gyiRVvYC8F8HduKnZH",
  "key27": "4bg9PzehET4BTHvRnvPahrZNFNwiSTiEB6pzWtjhvXvLXqTHqvhSiwWgxDVaSrmQSzopToxrQPCX2JiwhXSg8S2S",
  "key28": "2unwxb3j5xehkee1usMA3fYX6ci22MBnJNk1Bzi4C3EHdxdoUF9ikahQf8JgCi5ijxVYW6LEcfs1uDGQRLhnDwqW",
  "key29": "HNCSAvt7fs5Us1Koay7zBctWS52NpZMz9qpXc2nrRbD4mpgyuHk73iZNqhwca4uFpf3PckqRVyzpABJNC2Fn6Ur",
  "key30": "2LqSwTMFHkW56W392FL9vdj23jD6vELmPRgacrKQXdbA7JNmGjAeShCCQyiZNvHMYwDKVk5AD1bRKQ3dMVCVm1C",
  "key31": "4rHyXAxMLs6Smm4DBdrhzxCU5b429aFr6MxKV9TK3jDcxRiBohgvfiJUkvFbza2byeXkKB2LFP15d3Y2mDSMYa1a",
  "key32": "26nr9UGnDYg3k9jT5EkDH8HCBcfy4zVtnGjaQarXJPy62uhLN3Hb52Y3JEp7xeDdXFGcw6amv17UuoJf3RcevMsQ",
  "key33": "4q2y5sqXqT2gbMPxyJYGqWxXU8jVGCmcQZJpeP6vokyvWhgpGzMrn5f5yaPUDm6eEmx7iVofmEzvU1gKE3Vd7jjM",
  "key34": "2kQZbgAnyXuUybbMrDzBxXNTQ2cjQS6tyfzVWAWZ96hvtaA7iZyWYHGriXyHGPqiw55yjBFzUDCYEvU97F1UEK1h",
  "key35": "678A4jLYVCHpRxGQWK5kYLoUqTqHCdUJhwPuvKfTUBKsjY5ds631Avq6ssgjyMewnmoagz6p7K6EsvarCBPgA92a",
  "key36": "aRrVzijR9WcUVG9sW1CPQN7N59dtsqdW4jxZ8C3uUWA6AzDuBJfNfWnQkBiyRvCACfrWQUvF67uELy1wUvkmXJN"
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
