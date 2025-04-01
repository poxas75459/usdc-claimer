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
    "3LTpwRDcNYLLkBLuDCtbKzgTuTEveE4hrNoamMrtNTyXec9ij5jXkNcMNSjQP7QLGthuacASXVN8RmhZMjqhfGpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BG3z23aHymJZoLXecXaz9DKBSeGrAh6GNg5g4MjtvNmjymrEFdmw9qkcPFeooCgWzagEnx6oXxueGSzLiWJcLBg",
  "key1": "5LAiXAuC4zh4dcgjEi5MC5RVj3R2ggv3bKduhkp5bq7QhKBbKpHnE4o2jZB5nZQRqNaPNhoMGZqCNcfddHo7BC93",
  "key2": "5fjvigNerviHXU1kdUbWJkARWBdgRxPGXEwpLdYkhJoTqE6hZwZSKsXZWnEjfhU9Wu6uMGwmdhLjv2aU2mXHGat2",
  "key3": "5SUuPtLkLN2ipJmaC7EFQPcSaPS2xM1asJq33ddqY2wv8S9wBWgQZGoG8Figj8mjA9oUtVZEXgVkvymGLTDeGwGE",
  "key4": "5ica7viUuvzLtmkX1uXVieBcrii5yuWrMVqnJR1BWqskXc312ZZ6n61Dp44DRg7YC8ZG1iiLNJzdQjGTJtPVW4xJ",
  "key5": "4VoVNCstkhfnHMCpLmrT1VsMEaih5CNsRe78Mjr6s2eobsFm5t5CM4yMXqfwizhAwD9vWmogb9HnjhiyU7iFh6Se",
  "key6": "RAHxnoD2TYJj63axZktuh77k8oRRiuBiuJfXnGXwpa1VistKnADiwxsvtwmq9jmL1uYfhQdzYFpQcRMu43XQ4s9",
  "key7": "2Gx7rhSQzwoDcesTZ3BmKMbeDTa1vJiEQawX76WYPjeJdqNr8rKzTHkqTGo6NNu8K4aBqHpCCiPM6yoikf3VE5GK",
  "key8": "54ECqJLsshtHnhN6kPJcDNgJh1Say5hrNk9WsUUEDPA2yuzocpBromnEMM18SN5j5VTvQnrtBQXVhqU31AFE2tyi",
  "key9": "2yE5YyVof8hJkKurTftgmripw5wytQ9xaYEFSp1NFBsmp4yQWXsA8AE2RyZyXmVCVrTQ9epawvSQTFSUTgxtUUT6",
  "key10": "4ud6kZe9J7Gh3VW38aF4JfDEiA9SAeqPcmT7zX4Dsk6jWyj5Ek4KGYyXovDyGNnhjvXKkaDZ6TQNUH9Bv1CwBt9f",
  "key11": "jmABKiVkgNW4jEBNw69Z56CVTknygG6GuPhwPpjWRHakArStsco2QDVb8eUzHhJzpvseGz5wxatMVhBjrWeDxe8",
  "key12": "BRLTvoSH5cpCwnMDxMVeY8Wu5xLjn8ZCpiHfTyPjJkF4wawUmw3kSEkzNJepKPJToTd1J5rhEBixHDCmKVBspdA",
  "key13": "2SBFKGGfqE1kxudfVKc3meWXecpr2AXhh4Ly6LyXzuV6e12AJ5ZvnTgaggGtRELp8p3DeEDYxxMTSjswnShRfDCo",
  "key14": "VZ8pgWtjsDsdGPTSQB2EQHH48s5rVJ65cjaJsknU16MRVHhp7DKiRjG1BqB2MjmZdbmCUdZs49LNcz4qsc74Kpy",
  "key15": "4yrmeTtjsCw26KRLXPncr7SHjCekEztJMyrNQ37tw41dyqS5v6DNuTsUZ9AQpc4NUqvnTvYnLiD3if4gziiWyCWw",
  "key16": "54YW5EjjoSnv5RW8WNB94U6hCFRYEYcS7HGN7sGrswG3bCB4UW6TpmWrJ7d8MqaAnjAEzvH3D4c2KxV59EUNPHtm",
  "key17": "3XcAhwk6we1vspirKTcfjdJepWNFCaEWG1CX6UHgbEo334P5Fy1uL7uvWZ2iywWdRPYPrvCijx7Qz9XA3ryZw8vP",
  "key18": "3RzhyFHHL21AxMg47dGiXx2iSkfUA523YzE6jRgmE3TpL6vFAjAQeNDPq3SNWcEWbDzbEdmTqmYbMDMYPsz4uY9q",
  "key19": "4dVzcF6b1cgEth3yLsTiBhqDf4hLqMQ6kyNW7XizumUbRu6W1hKiSy9ud3iRxVj77i8T4CLXsChmfbo9qLPW39SZ",
  "key20": "46MFdxLQiYx5BcA5uBFVqhha1SWF36JdhP3K7MP9L99qRhkEaHntrRQzxrvgamYpJx43AwEEtVFZyKakUe4TWqqG",
  "key21": "5bGqx414T3KofiCwF9W3XBGPzQmkQLpyX3EnQeDTkW3h1oYYtHoF3HPVQoo7TK1hc6RKDPbVwcNCAfa9DPLZo2kk",
  "key22": "2aa87csvi5AjFMpRFHGUsBKdaiVFyf1uaPq2EqHJorcrzWzw3T67M8TM7FMSu71dbbBpA74Q8BjMW852thLQamC3",
  "key23": "2dEbrXZjBqvxPBJTK2yCGNsLDg94pz1dP9EdV6ghFPAcWPVaPL63gEPkkAe3ZmS4grgJEXAWWWwnQRYjDxSpfS1t",
  "key24": "CHZM8yjuGdrLYhdsJkVk9KNzVtvYvQ7JRvMUqf7tkvqAQf1rBJirjTuXpvAPvLe1tyf9TwksmMj59meDCiT6bPB",
  "key25": "5Km7dtHM8AU5J5UA3dWTpDfhUZJhfXEQ4g6ANdc6zz6tK9sdW44U8gfGsJUcrHa943p1NdwRQepyNLbfMBveNg7F",
  "key26": "2K31obG4oYyJTLzcQZHE8gJDeAdbMjDvJhNUP7dDjYzaD91kvL66NArDKLjQ9ncLzzK8KQhRUaLnC5QpJb8oRQZ3",
  "key27": "3PzjjzU5c8rXfAkurdDhajQPUFpogC6QYgNremFVBJZzCZ8CwgsXmy4ahcL68GPGerMfftjEfMGfcGYN1ZmgZdcW",
  "key28": "wLEeNBbYZ7d2a7RjKqVQdyqQN5N5zwpkkWBZxymRWwpZ2cAwRFN1fFsTjzbqeX8ADXbhM8bhTf7Aq1ypzTwE8Pg",
  "key29": "4DMVjjzPjnUdYjx7oJtZYbQmvXuL2mj5t5sp9FWejAuyY7oL59Z1DycEg3Jbrz34YnKpXwbp4jEwHsByfu483gKF"
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
