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
    "5E6AM6APyhYToeXzk9WuiaHQ3sca5fMfnsr4LFFZNZ8zUewrDggSCtcqGoEi8Uotm8JyXC9gYkTsaJ22uvx6nVhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N27xWWbV3tfffAkiqBf468FjkZ6dxJQyjjUNsZSi2CsYs3kavgX6LuGB4SYiyDXSUxA9zPC4vUQq1w1PhCEvF4p",
  "key1": "4AkGZh9BaXcQ4MXd5z4ijeAEptBpisfFnKEuAWR6x2yNCNucVKiY54Lw8uGxj44rzDsszo9o3uX9vmweoh1yfZAT",
  "key2": "4WJunSWLMUEX9kZYf3jtEhwpAHEm8g68BreSX19w8t3qeRC1qnKqR5Ds4x7TdErrLGSm5vhu4AeXyrBXL55PutNJ",
  "key3": "3fXrNcawdT9Q8J9Mkk7GjA7ptrgKnpehFuDBgZDSSR9qbhjWtRCGJT9nrjAhWgtQWmMxYZKLjQdT1umaL87seLbG",
  "key4": "2VS9YNMWdsETWeX8tFz8zsdsiGc3xUmWDGsgskMFF1W74rt6jFLRuJGyT5gv7LbiX6FXatMKwHrJofgjKKM5jVrJ",
  "key5": "3sXifFzKw7PCTx2FirGwJjQC8RihF6Zakv9Yv98PAScBQgZYvg3ZcW4819px1Dz8VsbJVmLUyPdjxS6hAJYDbbHw",
  "key6": "3AgE4kM8g98pEgkCwYxzWhz7gZL8VvWdA3pG5qRMfN4XLT4GJ8Tjv15cDyA3cqpdbRarWF4s8dnh4rRJ84q3V9ms",
  "key7": "2HKstuz9tUvgNsjDN1sQW8uxPamws2bFi9DE3ah2T6z31ewqR7FJt8SHGBqkd5ASCFipsqg8ywpmQ6wS4NzgcrSp",
  "key8": "2vHpyGKR993a6fZzWBmSAqj4iv88cuQumeLojLqwZNXmpzpduQjMf1XUFroZKRVJSmdajtzsP8yDd6AGunszS1au",
  "key9": "2ZTEcUX4WSFDWxw9n6vt1GvRqmSCqxxYrfuufdSW8EdNxaia6HRMAtuMh49w3NoSJum4HbmkYrTCi6gZr1MPTQLo",
  "key10": "M3dJTiJHDq48NNJGXb5BnGk4GfkTdve74c6AkbB2b4NLhMidBXHXfdSxvbtexMabxe8qWWzcRXPcvuMVTXG51CD",
  "key11": "22pBzqSwf6xydg2wGTWYruXthBQMUsWSfJ9EVKvqCWfLyyXAgKMRevye7dHr3jABhcfYYTEEa4oFqCHiWJSJzN7m",
  "key12": "2bT2ZMn9jesr3V8obwx1b1NkLJBf2aEyyfGvtyprKLn6ZREg89uk8FoUEt3eqLrdNeLQcAE7QAHCqis9gWRd7ctQ",
  "key13": "4pmZFCugiYr9rBpkw3DJEp5H8UHByDke7fPFtZzVoSf4RzSiatNRDPwK3V6sZ6QsQ1GdewFyxJcRLWxxnVfRBoXp",
  "key14": "3hLv7hYLC3vDWdUbPQqhNUSx8ySF8PtaNWsEBoph96ASUMvaLnk2xe3x5oaH2Y13iWw116yUqLfFfoG1gfmieR7c",
  "key15": "3Lmt4CmkrCWaYLjJWU9mCaXELVubm2DmxPi4w9cPcjV7aDrypi5GvzrftKdZtEtWQrw5gQv8HCQH1cwCbRJmJhTm",
  "key16": "2PmCy7u9CESG38nHNx18VrLc6Rc3PfK42g74r6gUBZUdzWL72KJVjNa2s3Cdgd3vVw24Gz7h68WN8h5BeVKHNdkN",
  "key17": "SVVcuERCcf7DAmPGSSSNP5Wy4D1vPxgbngYrEKpcBQjXxtcmscAM37FTjT4Nd1fMf6rSmg6K76dKMJwK612TF9w",
  "key18": "3G3dvVKyPVrh8eH3GwpZ8uSNVrW9UhzzWxRUupKLSFqPZBRtXwSacRCKBYGkjgCx3nTXmQW23uXkMtUjmQSWkofb",
  "key19": "22B7Mfd7c3u4BTrzZP8qTsWaqCkDrP5GGxgzdh7Somd9eW3ABKtQpMuPURVYWph1e8qz1DKqbbXBXSiZcxPafKsK",
  "key20": "4HqqjG4RuzZe9bmVaNYiyMCEPQWHnXY6WXEp21XmqkmED4jit2FLRSjVDKvsLQMqxE2qNve57oYYvgLoK2z3iY33",
  "key21": "3ah4uS19j7ztrRyXjL3kNar6rEfKj2XpJTtEK919oWqBVD78R6a2WF8UwzCqqJcH9DxoMbuV1pGp6bTQJDZh61Rp",
  "key22": "3D3rRM4fseak4zbXDP7M3SZDsPp51JMD1NbiSNXHdM5CRGodETb7TS3VptG8noiufgZ3jWE2xQVLTCaxyAqoPUb",
  "key23": "44vhQeiZpy4eXFs5woobzPv2XWNyMwJNU74JLzPLqNJHyEsC4QmAUbgf73PRAYFTttNtzXgrn8Ki6Huowr2D8vZm",
  "key24": "55FrKFfCKvfVi6Vb6XSdQTM8zz1MFUisJTL4SLB7u3D4wMPWrCkgo63d5NNhUU5UUB3Z8Mr6UP4jfUP61SiXRSFD",
  "key25": "2NpocnFMJozoX9GDmh3XGvkhAnrAWBKoAjtsfZBRNSM5xFsyzp4veniqXPU3RbGZeHR9kVuRsYzmvtbgsXvEX6R5",
  "key26": "26ngMHhWjWjwVDscT4QUHYeMKk6aBVT9UuRthGbwPsQQqpKBwDZLwjVoMxwo6GNu7zLzHyaxspCHgKFrNf9UWsJ4",
  "key27": "57WGjNTFsSkAnMEUy535TUTbceNMYgjBJtsrUU2gwnYAys9BHUFUyuyGNHJCRyjt7RL7S9MbM5jJzVvDbUpyyDdc",
  "key28": "2uCRMt2pPwhXnPxk6c5coQeYnHZ3dB5hb1So13t83MFJQ7YxrYGmxonsGQ5U1rGTPUbHMyzGjDxKNEUZLQyN9SUG"
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
