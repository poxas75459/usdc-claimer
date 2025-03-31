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
    "2TMTpdZHCypYBdApJU8eYaZd9P1a8xJpKadnoHV5tx5MjrgPhAchuvE3MPRaGrDoq4ZogHzyJrqXYKoCxH4mmaMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QTrsbvdntxaBWLpiZeJefpWHUBqDh62RFSQXXSMrWRKUsrvhBbXE944CU5keogQVXzUV8drJ1QdLX1ywRygd1c6",
  "key1": "4vPYg1ai8tRhX9f5FXUbrjYpDYeihAQ9KFRQWy3jvq6Ec7T8L7Pk6qxYcz6XDFouL4qbTiYLY7hKdcbpwbZnsmh7",
  "key2": "txfGYXk4dgs4p2A1oAM1Sr1zwM8SdjE2pTgxdBKNUFNYuirZkMxWuiwntGuC5oEFafHxtFkr2o3S45sQhrgM1J2",
  "key3": "513WeUM8WhfnU1Uu7hDNbCyTmGEdpfcZASTnWtH7Z2E8abQAo1fbvsbmBRGedGMUuNtTr1mPxCETqXP6mA5HWzij",
  "key4": "2wX8tWrvYeMfvRE7EXZzMvqdRBqCXW7z4tvaTGYyDjceMWdefok12vRi5qMoz4E5ykQ88Up3NG4JSx8uTvjQ1pks",
  "key5": "5U2u1UAm71zwwjt7i2o7XEG7wMwEq4v2YdHHPcEMHRPUMNcXCMZE1TLnLs9zBaeZE4Eoznod41gdPUUoT6oxopq9",
  "key6": "4sMgiZgie994keyMXaQXKMVg97rH26Wq71JnqfzBdtcZiJNtxWTXmUmTndsSFkR2V8EHwT4oWSEDGCU3KZXYCkvW",
  "key7": "4rxkh8r2o9aJfK7VFx2GcMtupA1vVmwGWMyWJbkLrkgXT5tsEhhsgDW1SubNeperHnqS36FJAd8cUkRK2SP9wXaw",
  "key8": "2WofFoUcSPGfsViJe22z5VTynybWBHEfUL3dptQUVu1T8urdiMMfpHUc9TZQwF6fAXCVB9bkWMBJP3C5xKTAJZB5",
  "key9": "2GcZEBGJo3TF6RxQjpzVuUKjtsCRkfArbYFsyRXw6LZZ9cKJTgvX7fEG9QDsVyYRMXNySZF7Qop9RBfCD4NiJjph",
  "key10": "5kxBy18f2RXvcBZov735sHUMwe4q6vA4LPqqMJbWyo2XbAZEn27YuPKUjT7h2X6E6JXspss6UgzZyj5f8CqAfxi2",
  "key11": "3ewv8zmX1HHgcygtLzLGy6tCM3q7WBgFnw3bTtmXbF1Dhpdnjo3ajQFTexHMyeCkWx2RRjdudKACd9V5o2TxWrjg",
  "key12": "4rhZyAQHwDeVCuqR1jin2RSPX5DP5uYqXPSfjkUqeM8Q6SpxLwUGxH7pirnqgPm11jxumnPvLMQByMeQNM3JTCFd",
  "key13": "4L1jEWBgz8jBo1scL82FrE1yNjcXTEA4NirFezQgQQoZnRNvY66LfaQNWhRZcJGYg4fPM6bYv7TRoEVN8zuDKbSA",
  "key14": "4rGdvbuAi8GRJ2cQYrLK2mHteJ7TbHVjazisa5W8n4ENjfQEwW5iZ6Wjfe2h4gMG2uFCsQAiAuuHGM22i5j1GV2s",
  "key15": "5kqQEajBGUgY6kxW3gqRhwkVReS3AFGVfHQNHfhjCJd2pu74uQAYs3oAi7YtzFq2wLvCgXD6xZiTSA9MpjYAeZXM",
  "key16": "67RUGJXxVD9BRWrAVFtQta9cHM35LcUkNPkQ7QsqyMwrmeMfckJbxD2Fn2EocqZbqmR3zN3cUbWCpGRCgRS1dajM",
  "key17": "5PBDB7EW8zwU9KBd6953D2XvPPmroQG1Xb8MbAkHkZwzjDcZmaypMXXxZeq58ozfZVP1EqP4DoUMtqypmsVASn3b",
  "key18": "5HtVPtogiYj8iMbvZ7B15CLQr3XLYLeEx8N8opHXAsRbBFJRGAkJ5vP3eCMpxHY8HDW2a1yixQ8s9qr6EG4DBNCK",
  "key19": "v38tpgqH63pP8U8AmcWivWDiubLxCHstbNGDv6UPrwukyr8bsT8pF2FBHCy4yyDXwr8RX2p2LZtMjGNPHXB6yuZ",
  "key20": "3ihazo18v8sj5K1squZPyNvcnKKvoWDehjpsG9WZDPi4WQPXgyJMSfefoiw1gMubYfx4eCsKHKT8y7ogRuQSmue9",
  "key21": "4Sri4WaraG8kFqSwHFY9MHcDfupN25TtETCZSRT3rpcHcC1JnWftADMbvhmsfTbnNwDKvT2RdbXymZnt7V5LnDuM",
  "key22": "57PzLQChF5H4L99o8GWUxbMebVBXEeqjJMmD5CSmaRr5WRFkGP66aqEoWpJSnVwwkc1Lsx34dX16tihJPvBK83Bs",
  "key23": "5Srpw1LMpT5ZarbtjxcPKFGDZ3fUkYwfwCUbsbf88rQBw4KdmVDDVVupT3PM14DzjE3S38j79JtTbtSjDN25sEDw",
  "key24": "37WKHx9BW736x3qvoLwh1JpVkkhAuCmt8KACcEHM6ZLx1oMjuXcihyhKCZjRuCHmWc9cnZY4zbWRaCQPnfqmzV4k",
  "key25": "2DSq6g7hZHrjWmxSceRPuHVsYcUTHFZs9o9KGwe3EjVWdeNc8oJAekzew3Exc8wMftpkSFuxaWKA1Sy5bdVBc8j1",
  "key26": "2SEyygHmicJaz6jchN11EByZK6wEbTUyu4KPpaUsBU2Mt87iyYWYe7Y51aMiCLhRFHE8ki1omVvnMPg3FBAghXZc",
  "key27": "iWjmhkPk1uJeNN6JoZ9EetpR15ogaD5SzF3QXrSPGo2YucPoWnbamWChiStsTWeogPnp9byxARtfBjS7U5wAANn",
  "key28": "2UsET3UaWShrptYM2gL5dB5eFnVFfHLyqB569DZ39M3stb1EiWVgYnoDRtek48JwiZA1xbecnRMGWuHWyg9FwQoD",
  "key29": "2gvcA5tBsHEbLkpmH9LnkE6GW8i5Np8TbCBy3FUBhVB8AXLihc8KyXQYtafamDro83HDqLPh51hQyBp634iD4zWY"
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
