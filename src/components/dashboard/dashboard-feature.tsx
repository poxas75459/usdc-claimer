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
    "sAVcdpzTmsTDHq1wfShdhxLFn773HFi429vkbZ7mrYwCDqNfRoWYDdALyQwH17AXBHacvNteAv44abP2yddxpJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fNgjKucnd1rzfGMqbqZuy4ay2TCycMpsDNtF1LwFoNUmuNtRJrFhZV9NmTEtu4JQgiSWvC3U15fbVdzgoWaGG7A",
  "key1": "WjQGq4X1mjXpS2SSZcFYW9bfRqE3JLwijZGyrXBMr2A478TY4PPWAgdcQCYg7XZXxUGWT5KSkEGCsowzzNXKbCw",
  "key2": "wigcqgGsDoBwrr2GuWgGqYUig21UWFLY5tL3stXdxYv37cn8WtQzn2R7U5dJJYpUdE5NDnrBfXM7xibnRq7VgLo",
  "key3": "2ajWmaFov4nM5VLEjo1Bk4i7xnqjRpVcZEe9yNoGPugWVPKZ1UYQV3SbTRiHsgc89iYNaYProWa1A4KtVXNP5Lk",
  "key4": "48GFQDqhh7pKjA4aK2jsvSyByCJfN6qNT5pQ12XUugPHuSgeFzfgWG49iGo6wGbCLobs89K4pt2sLsRBwQ2cSs7a",
  "key5": "3axKBv3H6YkJBSfdRqg6cXj6psi3U8uxnFLVPrPRuuL7cjWyjJHwpFEVQ37xomPBPMyijR2HFchRHqXCskpJLFy8",
  "key6": "2arux9CAEYLffJMgu8e26Uf99Q8aUUMhgAkKPqns1mxq45hH6CQMH4wBZrthGjja7tgnrwGeUzoSfNpwXS6wKr3w",
  "key7": "ZTj9zg1yejuoypDYYV7w9jertPWLzJz472xUshxBiW5TnVdFhjRFziPPJutrv1vkyYNmPDAyQDD23uo5ZRNppHt",
  "key8": "4mvSVzGc91Dq7mASEchGJc7pFdGBmAnCwvoVmuDYSK8rDNPFc1d4qH9jUn8eL1TPJqXV9FFsT4mT4LkJ6kRJNyQb",
  "key9": "2DoNnX8buPJ42YudoeHcumWGYPFD7mHqDWtPTuLwDwczqRoRTWLhGjPJ44xNVgkpfwRPXRSnfeFPxHfpfAYdMk3m",
  "key10": "5NrwL8zqSRNV1ZvEgtADwhQ3jBtkFk4Lp23bwe76MP7RSeVPgUFriWnggzqqhYirSm6KVAikt7GuD6CbVpgw1WDd",
  "key11": "2yFbKbvwTK4woK1JsABuyTc6KyMvt8AZEM3LALKhDTTvL6ZZDEKBU4EPz4rAJPcKsGz3UBtcE5yKX7REEzEVGooT",
  "key12": "4nsU7HmgRrmW9Aqzye3rN4Ava4K13mzyfVF9cHmKq4jdqg3aNTtHrfeMHJdEhbtji7wpdGcGjEumpV5FLSgTavk8",
  "key13": "xSNrByeCfT8kDe3TzRWQuZTP5awDSofMHZfhihp9V7v8vdQyYEb7EUM4wNvvZJQp4ES8H633xh6Pk3Czmsr6eD3",
  "key14": "4yqqRy9xPbNDJLNnv7h2rwY12ETceDQGvRUZ4PbUGWQAMYcuLkgyVtRrnkqeFRqaTQw7HHpxav9dGhDiT97QfL3e",
  "key15": "2tdcVo4bkR6QwvriBwxM8n5TBAwb8pz17pPgpogEtaCdx5f2CDpW2DpNoxJHpz4enZYKkhCGwCvqRjcH9rDmKqNZ",
  "key16": "25fJCeb97UwVBLnwK2H7dVzSkW9EhPtuQuJYJQjrRkuFR9xhTfdEzqwMxa7z6HqS5xKkh2Feo8KXz37Hif9pj3fi",
  "key17": "5jjefKnrHd7wanAVs6CmwqgymRAPT4TNiJ8GAXRyCo54EYWdKTCBoGDA8cmnuypJd53NGJvqzduQdABWsc9m2gJp",
  "key18": "3Rys5vbejSzB784mXkzSFRwrvg2rkPLmCJ5itjRPY8svWTYwBMbEyMqu48m5UBJfTUsoTEoVkW8h6BkDtJe56hna",
  "key19": "LYdaAfcPioxFbbehhozMYc5Z2rPBG2m52iMdPLgkVf6Kdwzi9HqdWz6o8Nx2iZnBTbMPJgUizn8TbpSW29aUPqw",
  "key20": "3DpWKnfMWYLvWJ57LQSRFWs3tGFmuTpc3z7MfWxsTtKpsJijmpnzaspSxnNESytSftgfqWTt5cH6fsNmaXW1bwRq",
  "key21": "54VB2G7Us1jo2FMyWChDqgpZYzkGPW9BSYyxvF21ajhpXpcHw9g6m2ecm8xNmscACtqmsB9aa2YsHQo9ua2NnSfW",
  "key22": "3XKgbZQme9zdoWLNmKQPqERLVybdSdw3mGLhFHhYFJETS4TJibtmoKq3CSY4DoxQhBcCg8AihE4k6Vw5Bq18qZWq",
  "key23": "md2J5w1tpFsdaw3kVY3fe1C1GFxFcd8R7ChTqY54XwgWxFMxYtTYVbXZtTfTQqZgSYJKRdo99c4bcKhuqj6krQw",
  "key24": "3xeeKzAUY5tNp15gvJe5sKKxg9SP1vu9z8i2yvM3yZ9mJqhx55qs3fTRq5GnfCNb3k5tnQXoEXsjnUiNGnJnTW4a",
  "key25": "5HEPcEYSRpPn8fdzXrrNTz9E1HcWuN1ZBqjUQCcJJNVhFwgCzZeRmXCJ1a1kmVxfaFGA1jXsqKQwQU1TQWu4roLb",
  "key26": "AkPGRnP2uKdNXzm5uYLcorSAB14vCvt7UAGY4zsSvATffmgHjqR7eMPzYFezeNuG45dGybbbmdetaceS6FmouTp"
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
