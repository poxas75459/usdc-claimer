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
    "33wUX2hUEa3jt3HcBNkYPW9BxSLkDV1YC1vfdJtd48LnMWsxPwNAnLfUwNCxEkF96KwZwoVWHbSZzJV7mHkLCr1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vgMTqi1MVegPi669S7NYgDW15duYAJUp6HneSvx6qkAjUE5Lyvmm23u1VCTne5C6VAsMaegpAKoaL7gMzzAJgnA",
  "key1": "5x3FGYPJuhjNSpEkVvpybZqAhbYVF6bRPHMf4jsN7qp1NpcHRY65KWNW9mRJfRw5iXvKTzFgL4Lk7MYZt42KzaGq",
  "key2": "3ZQwp6ZSrB4q734FuyNc2RLPi9VJ3zjpcEw98SzSrvbBfgYm8nmGGU8kF4sWVa4MhnKaLr9MzhnqFk3RgJR8aLb4",
  "key3": "5rY25mQhc192QsNnA7yhFrDQf5KxgWZgnEK7dqeWa3rSvGE7VqMTdidwxG7hpvpmmBsViyvYHnxG5Z3EaMnynTpE",
  "key4": "ynwRxwbAhmcBhjLmv4UnMnBF3cV5XXxf5EKHm22BmguBjyC5biCyD4VHqxqiZMgzvpZmdQCkwNVPsD2ML6S6qhS",
  "key5": "3bQCBbF7NEaGrpqRNpLtYM1U6bU3SGvihouPTL8aoQBafaksQ755DAN7DMRnwBhGFGrwGZgAjjzjvAc2kCNniBE9",
  "key6": "2R3VoLRdQnMQH4T2s16fj5o85UFNxkexpZn1iryW4R8Z6Vvd1pUWfoQGFWEfuc9JSCQSTUR4fA7QgJh1esHhauhD",
  "key7": "MquB3MLzviAksLgABpX8jvb6hvsr7ZvESx4f4tHjGrnqGC5nNv4uBYPKdVH96CPS9Ya3YNQYbp9P8kKdAKQxXH1",
  "key8": "2VBzdXVewBE4BffdkAJDzAGBg8ofKAHDsXUKw77gJkf9H1ydLjSzBTLVEyXQx6y8BLns8Vkj72pjy4WvhmRV8o9b",
  "key9": "5rNNPb23r1kGoBw4pwieHF3jQzuip6ubxEzCAtrj3mfYe6sX8HjNAiZLWRtaZP1ACCVEkGsB1cfF9PDN9msTgzXs",
  "key10": "5fXxrh3tSLxCJJW4F72TjMNEtY8poEZLEbhYjFmMXZpTqzmtJ3dZoUzo5rFFaP3UXPthM6xBDm2csfwPHqaE2cEd",
  "key11": "3ryw2sVM2xEK917ch7YR7CUiyM73G4hmtciTd61V2byqfRA6AreXmVSypmXFcaM4LVcv4odLFzGCg7rCF91jsBiy",
  "key12": "2niLsyxziWZz2JVSTXpjwXnd52aZkUiQT4T7LjaTShnh2jC5TGFURWW6iCsJ3oCHN2onRLPLcYLY9j1uRLzbrRCK",
  "key13": "Wi8cDzZCqotQPPh39XWos959i45TcfwryVVFoMRwWFtLK4ZP9NPnySb1CZ74j7DpfY3NW2Ex4FNQWcSUu1T3857",
  "key14": "3y6RgNAatar5Jg7DFcPcu3V8Kwmdf4zex3m88VXqEpB59tFsf2KmXr2hBn7qKSvmeJ2TE7DQiZfT2zHWfbnAEuNu",
  "key15": "3Fd3Nmv9Jzu3WS3XsK7jxvhaZ2PAkWSmvbt9csaxjG4MFhn2hFcp56ZfNyNg1Na4a5XeNz3P9hsM9o6Ut5ZDrqcm",
  "key16": "Z6Kk9tbVBh25fqDaHhYAjuvy86v3zup1t3LhQTqygwYCP2ytnm3mj92YuuJkprEune2VvwwA7trUY6FmVJZ4Kfm",
  "key17": "3bp449g8WReiQjCi6HTc4p24oFDSCwpeZuiic55rrtzJDcNJ2ZmU789xAXvnoDHpTmuoJX96uqR6ryhiT6UDaK7x",
  "key18": "2eHdaBNra2DXhtYwvtyFW8dJ3Cwue6ryB1UC4WjKGxtHQNUzCJdHX7PvmCEoYLkrdDCEQYNNYzvVxXmr75v2GPC7",
  "key19": "4deMmBtBn5dgYYjrKtbLbQfsRKNCsKjzw1RxN6Wew79rCnXtWX4Y5ceDixwZD9yvYL5TDwQHfvcBrpebT7Ci4GaQ",
  "key20": "2ejJiRG3RWRKd836bhJs3YxNc5TKYRsSaBdaC2ZmTQLxZt9cQScfhEo4rj3AgvLL5ncLiMYQXuYCkfaNAbb83DnC",
  "key21": "63bU2B7VXCbHELqyj6JjxCsdQd2BCMyLLTSo5tV9kpgoFp2NiYhAJz1eo8PgpZML6DjYpiW8CaieEhyHog2Ppf16",
  "key22": "jeyZQn8oUmHVaoJDMi49r2Jo1YWRhpfCfcoDEPUNHyCGzjwdX3hLhwnuYzHu1NWycNELTGhqVcEKaoSbnSXvuvU",
  "key23": "5pa9yKnpgwDoN5R8BbrgGSnnZdsPoGXLbEcNBBmzzJgcF6vBu41kMjcL9ReWwW2u28W2EyN4TUjdRm7U8Ungxu7o",
  "key24": "361Y55Hgr3XDHZLtHGuPAZu5VYNZhLrrhePWUvXsTBVvv69m6ZYN8QhGoYUF8VNbGSjkwSy8qBwjwVGXX3jNrvRF",
  "key25": "53EZ2zdrVLr44qEVdUXtpZSDCTM2BGoU9gSgRfE5WnYGVkpgh1NX3bA7uPFCnKxcjY4JqkWRR5NJSLf7aG1hVfzQ",
  "key26": "3vEW5BMZV2ubury8CrqTT9ykRtHvs56oQLRCmHKLvvfZFxciMv8Csw6MkkkQGtEtT97acXTYEdioNqUfsu3qawCD",
  "key27": "TQZ1yqJWNxWoVP85oGH9gi9kKWZXsPpijmUdnoHKw5HD4NQVzgMcT55VqM4k84JjcgPYHthhMMofEasod4EL3qJ"
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
