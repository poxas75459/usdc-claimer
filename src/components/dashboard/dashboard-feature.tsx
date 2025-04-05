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
    "4GWsm9aNimkWTDJ5VrFsESQMTfcACiuyryZEBX4QYam3kpFvYsUoJwUWHDwJJKKddGwmVp4UUVucZhBfapu3RRiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r15tGfZePY9PciJAZFqEkT7QGX5dBQAnpTwbiNNsVDMvD1H1inazgv2Z35cP15AFU6nuV6vKGS7DP3TteGiuUbx",
  "key1": "2q82naTxShjKU7o6oAn82iSdGyws3UD93btUTCmG7RM7Y5qdi1Gx13JByffmwdfUf3kE1rVB2Eqcj86MwLggHcHL",
  "key2": "3r2C69jJjZmjxgD7fDwVxWRymjjPRte4QQLWujBgAKhT7QCStkmiTF7ffi1N14NgJ2659NSHY633hsXqyW1R5mBv",
  "key3": "39uVhiJZg8PHmbdhbA8f5JYtKXevH6HGaGBfhsVWoMqxvJgmB5wW4GAC3Q6njkGqAmxZwLToUBNnYQD9rzicR2BY",
  "key4": "5v5y48vGTpouGXkTaSjaZskVQ5DbEV7eVHSMg4mf3FkNnQfxhnetzQNAUYjjYLSSnZVcJSJTGSanTk3CnH9bs8yV",
  "key5": "5FUJevTjuXFJfgM6PwGBAtx9AhxtJ6SkNwMDUX45hKdHWkzgmEaWc2ztxSXeCuvKGspA8kDnVieZrDpkjhL5xAtu",
  "key6": "2BuV3TGNjb6JBLKvMKWEjVpEexot1f2XAUXzEYXeAqB2HnxAyY7sKFBkf2uusnUc7e6dydReYxUNiG9GD31srZLQ",
  "key7": "4sMLWodHHmsYnEpSeQfy6gip3ihhkZsToyCj74boLb6DEdC5chbHXF9chdjNsiKAR3H2Fz3QdBvj3q37FyX7T91h",
  "key8": "5auVMUwYSXjVzwNjEY9m8XYBfH3ZNuczXFdHZV5dWSxPipqBy2ec3qWURnh4FRq4MKDZz9vFtnF8xwggSEtPUVHt",
  "key9": "draKhZrPfHP8n3zFevh4C9Rowdsntix4YYtd7UAFLYyhSoXMLwG89hAgRKSGTKwEzzFNvUyxubWzx2cVKAfM1YU",
  "key10": "oZfYnVFRke2Uw3UG8Pmu9tQcT4yX3VwMd74WXircmnWun7G9v8M5eboqudNVXMQWGXzFLLrej3AEmdMFmN8dhjX",
  "key11": "2M2GrckYJCqQKa7tcAZQu6rfeqAit3EJ1jyMxhJamDygKoQBXKkwcZNcy1XJou8dyCTjzFiBUz9RyguF8mBhkPUE",
  "key12": "2sp6GMqmUSLabTMmvdhqd9ovA48TAnCs7bVSCGc73EuUp66gNHHrm6ATtsHR25ju7468hoBm85wKM8q7BqY6ktgH",
  "key13": "XNCsKuafQ1TjmXjJRJMksVf4m1Fbpv3eM7SCYrZ7HHrtrJtwsRXsM3DS7vkPeADpqRgbBMNMBeJ4QSqpzEEywRW",
  "key14": "5gGKz5WE2NaKdq2ojVFWJwj3JQTerPoKTxaJxyJk1xcZPtJrE8FiZDgWNa8Q2N4bWGy5LQtg4ubnUSd45PJ9M8Vs",
  "key15": "5wPzuvMXMoS6KDGj69quUBKQuVjfdaSBJfHnnWbT1Y3duEiUpc2BNQR5GypiXMxaSrpjEaLvfeP3v4pXrjpPHNrP",
  "key16": "4s2j2vAFB8v9NH3ts5w8tJuMpjiMzWoD9bdETb7dTrsH1BSDfGZr13q7Qj1cNaeL2vz8jBpNf9rftZxMpkFQoAXY",
  "key17": "yhson2RmguSLCa8znhm8t28VjiP7mgFVuLAkfhmzzrgoJsfVwvmdy7y2FeMzcP4Lg391yxDMfUK33WBkM4f6dac",
  "key18": "3JHPCSm7XEkXETDbFD4qHx7EX9Z6Bkq82kZC7eJfF82eiTvn68EEcu7PWt5JPEkzndFqzpDMms9SEiDxSJtSCDeQ",
  "key19": "49e3gaTTTNAR23kdCSgwJsCAQ1i8tgpjoVpjmcSqYtsDC3p6xqErvty5NEJyQ2ZB2WTAkYuqoKFMoq382pbkYTC7",
  "key20": "W7WvnGX3pJc9FMQo2y6PZVwsazBjiBQ9YiUY7HYPDDQXWT4cVgpupS9zi44oDcBY8VVbGkQMek2qbRMyMQnTRWt",
  "key21": "4mauRCKb9VGqMUDXMQKqPLgHYQ2K5uRqTaPE1KVhkBD3H6STnkuUzoiHsjsYmqN2eTM9KmMFzTX8pTc2HE6ZKJVV",
  "key22": "3DM5SjHTjHy7dy9qoiCqRhez5j1SqEUT7vZrjmuE3FYi9vD3MVx2od6TjrnX2tLZirXWcoVFENGUxS1h9rK2maY3",
  "key23": "25U98F66PwUzNDpksk47zPJqarMWjZYyYC9fvgFVkqsnTonAFST4fhP4pjdb4JdCWYt2C735eXo3QSqGuQ3fQy8o",
  "key24": "2jbaXBrnruC6g34X8fXeGXdSbuj1RkPjBekzLbtCpMjMKkYMofHKmffQjSrFTSMFVfLg8tsu9K5xorCHxULHnarB",
  "key25": "34euPJ4F8819BjxrC4bgUpGSfuLb5gX5vstMpjqWAnTM6jmmioU5H8dGvsgbfYLDoYfXibzFv6Wqxv6Z4d2ATJ6T",
  "key26": "36HvL6mtVW9RMcQ5qmcW3H2MejrurqkKBxbC2HShyXM2YjQK4AhJxH3Y6YVXFM3rRhNqLCpd5mHFj5yz7mkms9Eh"
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
