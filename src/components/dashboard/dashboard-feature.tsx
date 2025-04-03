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
    "5GWubiTjUPnb5oH7MqGhqD9mGvgcdeKUshaJBhmc86Y4SX4M1TrdfuNUo96EbH8fap5AQ6HydUoLM5NvGGVL6bRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YKvSzrKvs9qKsF79BmiEZA6GX6kDobJCud357gBmj9xk15neqT2XdyrbXk5rpkSCHaP2ejBBU9WKzwUicXFFJZK",
  "key1": "5yqy8tNtpR3VW7UBzg9E14Lmt7NrGoU3sg5gewCwpyXyP4UmEf4SbYmj7DWHaYVYB1EbmNtcxF8tycEjt68JWPur",
  "key2": "4jMQi1wDMnhvoKBc5zZXfgpcF3eGb8UnU64qA776Q4ZZbWyzeZNbxYGAbQM1mmLGegxX8iFEoExWiBz7m1yrJiYH",
  "key3": "21KwBfo62DuqtQUPuTrB4xePyMmneVceWBR3z8VYZz3jWnZVFS84qUc9HWXxSomvq5tP749oWCz2qwEQrh67HkCA",
  "key4": "5UKEN15HMQvT4qrVyrvxqcAsULi28rQUyfm3o65Xi63YrDjQ6cDx4XXLx6adtBPaytUjZSW8LcKsuwtQ5ML5Ddn4",
  "key5": "4XPCTLhMxvYHThhKsVTFffVCLXndSZrZoVE3uJdMuBoFV7k3UAnviZN3z9oNLb7vK4BNYpreN2y8t1j4F9vCFHNs",
  "key6": "3mFKhhzZiVFyKk67o5R1mQt1PRwMp3g4mQQsnXSFeENs14NbNedSwfzYnz5CX2ZbwjcnkySXHcVESeKzgk16ZsUz",
  "key7": "5xfPwjmRq5Ua9PyZfY2qsJz2MwGnQd11bhPx9oVQJno8Z2o1XHWP3hkvV3qo9kqyABwJ9qMv1ERra76LetRnVg6x",
  "key8": "5MDFjuy14S1UsCAHHjFawJofPUJbcTKimzhRvCCufyWoznL9jBNybqLswCZsTm5AEq3VL4arYiSrdzyRkBLuzY8e",
  "key9": "2hsrDPXpuCSS9fWFsMh3Cvs7N2fq2Tjri1mW5iUwmUQyTtjyk5uNXcwSZPVdkt5b3ecsb6j976xHqZHtSCiegGzn",
  "key10": "2SFN4cjcexofz8tXuujHhFNvB6Q98FHqP657XZHhXR8gHcc5iMg7fQYihpCCe5mdttiq2JwHgPaE9Br5iqKr8s33",
  "key11": "2m1tkGySgxksfLX1uDmmZFT7WvRE1adodY4zkV42PDuCt4ZG5wketLzfQmLfmSva4WVup7oAaoa43iUhrYXmM1xs",
  "key12": "2Xkqfa7YcGwQZstADEqegpLrmhZe5sXxqowBHBGJiiLjXA6hRjQPfKRyaZiJSiQGBo9DN4SWRjkpg34ESdELypyi",
  "key13": "G5CwZUXqWioxuUUbo4FidGcxYoq6nCBUfZ826V1ByrEQxekNH5Zcc5dcdy1MhnCaZ3kMfvvVQdAwxb982uTQ6Nm",
  "key14": "2kHsZinWzT7bPxcdJTisZyj5Q46jPpzWWrSSH9UZCTeD1dBWGa3WcPb8aD5HvD1nz7XNJswWBqsHrwhENcWrR9G1",
  "key15": "3TJSZZ6SdbgqDej7PnwWXsNUWXGXcKhwaXyp6FvyygfyQEMnC6L9jWYMS4KpMXscpF5tSdK31wLEzXzmfVG5cAnq",
  "key16": "3yJKDzqf9pYfzmUNMMxauTuc8DExjnkH2b6AP9ToBwAEE5YyhjLo1Ma5TJCEPe9eCWNZPyEZXcCe5KPgnZ7J1Sqf",
  "key17": "3bo66Ha6hTS1fmEXsdTECibwRgvw3XErCriExXJVgYfBRsicg6kmU5mg52AcgtfPN5hX9R7TVgCnCBKTSrN7ZKNg",
  "key18": "37G8yTN4WCCZq4J7ppt3KnnW7fQkEspWhpMcqQs2Nma5bjGPuPeyBkfvi3bU364Yf4TQqpbUZmeLFkh7LSWRMSZZ",
  "key19": "4CP6kjyxcrpmPXwfvmbBNHwEuPyRXgaxaaNYSnvP2Yar9gNVb1VXmfsB3GJwmmtRux82aXmBCynDTvfbCfaNQLWG",
  "key20": "5TAgGC26kbWG3yJE7DSkvMo63toMZZhayc5Wos6SJ8GUgeAV7RUQJvB64QBsFFpGyPaiKk3A66YvJyEUBSsu1wK",
  "key21": "4yJz1CXJ7V6fwn99XAiHwR1Vsvc7uxrpNA9EJP5SJznFC7uPGPiXF3Uh8nHj7EE59ETH6KpWdwny6cJxiA2QsWh1",
  "key22": "2ihPWTpDbByBi99186D1hHfrw8ydDr26WW8UaCswpts2RnUwJdsEr6PLYJNSgKqVuf1nKJA3WjXDNy57iKo9jJqS",
  "key23": "qRN8RYuPWzmg9V1pgHJ6LRgetPTHsTaJQ3hMxCSbuFdt7cC9irVCyaGW4d5fcAG9UiKtRz8SEPt52WZE2tLEZNK",
  "key24": "3y7WJZDhymhLEEHigC17WDNGZBfuXWjTh7p7wDBJs89maxP9i5PUPxJeEKdba4YBkYR7vLy48uHHwMHrSsbxs4P7",
  "key25": "3eGTZvd7L8tU67AgMM31Cf8XjDa6CdGwFV8R8upSad8rdNfJnVeRYFdBFic2moDvDhq11dHUM6C7GqsMbVSVU6FQ"
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
