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
    "24y9MewHZD1BrsT3yyu99Yy2y4CTu6TbYkjk3sAr47c7p3adbko8K433YBnC1aCH26qhuUwq1ky19GiuWxMgefFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2whwNw4SbPbb1jnQNAZHg6KsoT4jgTTNQBBy8SuemgJmewENvXPhwft4DKuhVqp91Hzkn4bBuGa3zh9pHLf5jvwA",
  "key1": "4b7CAq5vo79TM9nAqWinKsLnQZPeAhwMFg77xzUY576KaJru6rt3jFjGcRaLt4ViPVwppV5ffedn35rzCGzQ4PUf",
  "key2": "2dagQJE7cnixpGJjJBE5SghS5sCmD9qzzm2QcKs78tPWNrmFRm7QE8eUz4Jox5JKZbavR4PtiBhQnGaSsUz7fkfQ",
  "key3": "DpyXYt1bTd9p5dpiHc15skrnks6pGW4NTeDsh9o99CKHRmi18LxAeAuko94nJrx9pZXysAYYhz6N9eid4q3Sj9n",
  "key4": "3F2U3ZoCNGwzJH1DgsxcgPWK2vboATrVnpTLq6RBizDL7YdW7CGz3CuWByJsoaomrU7v32VEtyeg4GuwfhKoX2AC",
  "key5": "4ZP1sW2FYR9FDo79dnLeyyRmn3cTf3Nhke2B7NNmrXRt3bTBPZpex5dbthDDX2DS1LQ8TLc8uZUNmXvopG3SWn5y",
  "key6": "58nYDQA53ihnXbg7wvYfYgQTtpx2CXSXCpFjN4e2jFRDNwZFBxA8ugr1vufHQ6AQVtMafMVjGNWfRr7MDVQRtcBB",
  "key7": "VvTPTDH1YockQyP5B3UH7xf6Z1UWRrLraLFzUAnQDNLXTdbumN5MCzgunbdQVa6bkuj8STTM4M2wcNfDj7GhPZY",
  "key8": "3qck1LZ5y7KEKZ9Wwf982wsBAq5Gaz9pY4LzKcFodeqUhYMgfr5guQfh2QRPapWmgV8w38edZdKQ9hU5FbERg32t",
  "key9": "3Y4A5doc7GUq5BDgmpF4mtduTrvYNRBBSEjqLNw3rafrdNzsMmrkuL6Jm5PPjBTwY8gch6v4eDC5Ga3tGM1aw6RZ",
  "key10": "STAiG8HoSafBDVE4MvGVB34x4eCNtZgRxPGpWHTBvAeWvZgNytZ7HmcXAjJ9r5LFvDNurRq3i8WptbDhnctrHVm",
  "key11": "5zSi5vNe1JNstCv5DLPfmixDwMPbkRdiqX2SGtyvx6egSgaPe6jzUWH8AmtAviDzbzjrJSTdNSXCapNiEGmbPBQg",
  "key12": "2AkUcTvJiFcefakr6r3GmeQ1oFBJwtiaeqic2v29iS7g4MHn2U4UnMfX4ncwGyG93KTzYSY9SMGuqAo7fj1maoNW",
  "key13": "4JCRnPRtCvt2EDWsZRX72zee9GW5XL3pBQm3rcLBRktF66kYv15Hmi8opiPsUipSMMfVsL7fMincCCdsxdESqixX",
  "key14": "2LrDGJn9wybmKJNfXKjeNzbWfHY4UG3frpaY7MMeuLrZhMgT1tXyeyCH6w1pYykwN6usSpbzwsLKnz4MCmenaQaY",
  "key15": "3QpFGSkxi1eKcxNYW5onP28kVFZszAKpgZ2KQthC5P1PLvohncdreavfmxHQhYnTHjSXbZz8dQFRm8Lfmcrybrpt",
  "key16": "3okx2ZnmCUZRU5T3yrmNSCgiCXCbgXQG6b4R7FdPvSSXsXzk5Twt4XgbSpvFsS219DyJtmuVCfQn5bC4tSokw7Xj",
  "key17": "P9bVLwGE1UJyZLULqS6XpfCWiEXdY2bDToH4TNGjFxed2EmQuq6iCXB3wqWiyknq3jHY8g4xenqgW5sfmLjR1kP",
  "key18": "2A8VUqAk6bxxMLeLjtDgHC2Y4t2zHYtUP8RkwSTNWKZKpBjujAohqNT629pC4xYTDsA8GFiz8RmAjwg4DoxFX3eQ",
  "key19": "3WaXMAa8cRsfBpCDghWn2L6Wek6NNa22Lduvnj19xK8UjAxerBU4PDguwfs7eQSYLsVk2baMpQEtNeGnHyUgGQ1k",
  "key20": "267f8hZMutyJyxwSQkzKDt4Jryyimm13kcdsevDEV2yLaGpvDGGTwLZQzp2cHFHJh21Cnr1D59gXFzKNCDEBBCc6",
  "key21": "2ssKpWpRVd65sWaMWNeZEjfnDAaXdUhzjdz8K6Nen4Q4dhuPcwpDzW5KPPoJTFCNFHdTv2pfEDbTAEZhAnu53utR",
  "key22": "YAmwCkCTmawxmR9bdxZZ2T54f22FjKkTaU5estTUFW8i8Ti8jTq8WbsvwuqnMJdh5Jpvhwgf1hkffVEGeFAwMFd",
  "key23": "29H93LREe7ByD1XcA3mEfc1Nk6Yz6pXxyZaBUsWnviLx6mLuumVGGyAp3nFTuESeJC8Ay9YyGymvhAFNnygmnSyR",
  "key24": "4iupgjjPQ78sGujNF8GPMTnraYE7XVdUU7gzcpYYVxmqQTnptMNLtXVE6vHgFT9zgBayGvbnTaFeV1XdjU9Uo67k",
  "key25": "y9wxz1Zr8udKDivBXbHFjNj9DCEcNMkFEtj86f5RjayK6jf6QFqPKdaH6cXCEFLkoCHGJX8ETAEwAi2BsMpf7WX",
  "key26": "2GNF1YAEq4kHozADtRjvhySyhQvA5G8hNptBYgAGynWZfwWLwauZB46sePe3RuGZiYAHDpYcMfmYKXBJTEez6bwn",
  "key27": "TQxmTn9Auz8dxvMLfnsEaevhZUoRHa7iBsJTqsZi5mjQsYWfM5FDQWwburYFSP7ktPM1kfTBzMVnAu4Jcv1Kpaz",
  "key28": "4Fr2FhzFV3RAAFWPALwA8Fc6y9vQ2eGk3ohPAgd7Ai1qvUy7QV5k6g2xfH45LkWvXZ8cW1o5XvPshL82T5uzXRn5"
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
