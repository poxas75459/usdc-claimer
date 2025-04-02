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
    "4qgy5eDtCRjYZ6HATJzeSmVA1PgJxJpqzp7rUm6TTDp3o3T5iuhryQuX8QVD4asUZ3cmK8Fu2nTkER2iWhWf2hxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5obBgRjGiqaBC8CMGGancobMX8tw1gRbvaQGzQG2suXS7J7ZikJZKj3ydTRJuSi6UKVHKdCxh4MjPoX5zgTaadzL",
  "key1": "2HPZn3BhjuwAhFc68GTLZAFNA12mUcFcd16gmahJo7JJxz5VKQCwb8h4xedZB2tE1QTV4cra4jKwR8Qx9AVdKX3z",
  "key2": "2prLHN2SNqnP98nXAGKvi9uWKaXCqmsTWTJrib3HFQUZAeeqhDLSQo41Kk4MonBRCq41a7Tzu2qFqYPs7VE17KGP",
  "key3": "3Jufje7b62T7SRRJwwWDDc9PHRfvtrg6HQga8Wpk9xe9y3hPZ3KtoxX4j3vrPGNbvfa6CDwNpMCnEgKbs4QZC4Rn",
  "key4": "4xCzxVaU4xTRV5Ue9X4Po7tqhGtk49qfsbGVxv5a8Savj6DdtL9SHFzpr6w81bLCYhgGmChL7g2x4rWapjSQPgnK",
  "key5": "3tZK8AEfm1gGuWybMKqi1ohJZYqttjzTgcCaqHT6uVS3aASvpPCsJVRTETgZCQasjUZWpW3gR9RMuPhUibTcWvDh",
  "key6": "3JTZZ2PL1xzn8J1pTf3Bp7smKYWL3e3RdgFCZrS1UzqnTNWnDXoPcpRjH7e1nwMMpVmoAS5H6R8dhE2pbUXSuZDH",
  "key7": "3WioFsLybXefVmpLQVq6fGgjbWzWDg3uw5H1nMC424HVSKqrL7XtANsTdLxaLhq7XBPWYmX54Z6V8YfamCXsYnZo",
  "key8": "3w9qjvEQRincKcPDu7k9CrNx8CLwRvAgj5bPR12GGX1TXtXvdaZQLPuWn3DDt4ZovFwiYTDEe2dR3KrThqPopgFY",
  "key9": "3LqHzWsbqGjYw2esq9UgJnPtTRse5i8wnj2mrAPk64pb4Q1Kjp8wjBghWezPGbFMdSHF9gjVRFKwEKugspCUYaBr",
  "key10": "3WPHQxitB3jHtWbMJ6VWWUgy6ZXRHenAbcE8kaSxNVGnWBFUx3A2hFaWAe5B5uWWL4q9JWgWeVVQaDmDpegxvjY8",
  "key11": "2sEJcT4U1VKE8FxpsUeNKPxpytbR4Pgw1CWoYxCwp7VDoNG9s8oavdFrhjEfexuKNiFF4fGKA8ebccsGyJ5hybQF",
  "key12": "5GRust1yeh6bA9phm86ZeRhxxfWPp4z6TaSEmcfZYfhv173V7NrVbPFRWrL7REYhWDp9VVnHZMw6pJQxELPwYyQX",
  "key13": "4fkcarcyuM2YFiZnbQbMnz6aVJgGvTxSZzubHGd63j3qwb2BBJBJhKG61mbUtMdnecUsKwnfnhuT978eVY1vyEAN",
  "key14": "52VwTrGWmeQjsgV4ZmjF7zf9twp2eW4gZHytiuXh5ibLTbEMSzyQkmWzUVBAXFDAatt53tyHufCcL9JoFiAcoo6o",
  "key15": "2zdQygocC8SkdYFSDMrtZgzUaBNnHsGntJ2EmUanhuHQQirdbyE47YdjABBgGUqh7EUqsjaUnFpcsobKUwLU4RZ8",
  "key16": "3eDsvnopqTZki69wq7fnijNqpgW6ohwMkFSc7zWFTXmKAKTA9mqm56bcei1CuC9Fj21HkYKkLvkyqoFfnQbV9tWD",
  "key17": "dGK99yfQT3KFxjsGy4Ns6fFJYF54XvLCg7byL4XtRCCtZSQGC8QQHZdTuwNp3HeL8cjiGb6uPv29zWgwJnR5uvt",
  "key18": "4QJV23JCu3J6D59PcwcbW6crUpvEjuEyng87Kwkv5YfgX7K3Ba1jrHr9M1rfyujNwwe39aZUh4FSf6Xo9xT9PvMd",
  "key19": "2xxsjhPQaQbeHY3PacgsMUnbe7JiRY2ieAHr8wKGe8f1w1s2uh6XeZMhxWr8w4i8ru5gizYHVcpfS6kV83syfbuK",
  "key20": "5LZYL1DuZZQDE66M7UdL3Sp1X2yw9hrfYfyRxpxh3RzhYtqrBQyqbSdjgGBTyg9NDFZuUHrwXWxJKqJC8AwMCSXv",
  "key21": "4Hk6QgVJfxSp8TeQt3AYZqtkxom5zx4FjarqaxhHR5v68PS8HdEfuKEcfWjMpdiw5NYFHKDq1sBYDBoNtK7VHZUr",
  "key22": "51ditnYCgbD5rnzpdkGR98dJT2hxm9HKBMbvc6nfTBCosDSy4zfgdKLb77uMNJRGadzbsn9Gcf8Fjry3Be2HMiFe",
  "key23": "3aCrZcucGAaHiQeRxeSbnu3M8UH2N8oMTwbhQ9QBaJh6LDxTNovNF5d2ziw2WzagJaGJ9CViLSMcYSeZrHsQCdYh",
  "key24": "2k4musP4gzrBK7bP3i9ZUp59XYWswHoSLeo8aniKywBGbDxuyfShHW6vXEN4qowD6ADSjfHTy84Haj4g125mJSEx",
  "key25": "56iHWd9929AiU6B34GGXWDmirkiUPiznR1ox5LtUvdV6mcnsogqupWTCTHaeyT1WwePfsXxRjJYYw46EkWTmtmTJ",
  "key26": "5zqaEWN1pR7t43FPbeg85k94jYQDcF8rdtAxKBhcxyWsiKbevf6HHXJfSH8ur3tiSYuxgFaCFN5RUq9scWU1AGYp",
  "key27": "4fEvUGLbgiNRdCDFX62aPT9iLSnbvcF7NAvX9BMNTMzm5c6FJbtkUjChnje3JaKnTnQNgjhKwWJBdxZcn7ij2Jhp",
  "key28": "42YFf4rhNu8ga3ryBvv3NaK1FgrhgammVJQvkWiBcgytTJYQdBnfhiKGi89JdLGMunuikurkNfwaTmecQ5u3aP6K",
  "key29": "3daohyGNE53oNmB1vnS9bkAMGeQbcwjPFnr8qpyECrAgs5NW9UwLVTYyHDZJpbKE9wj22FZC1wNa4jptJywR4H6F",
  "key30": "3qK3Y5pVknKesE6xayXHUjtqNoQgw5cLLKbvXokmBG2bBmwUZSG99w53HL63oMm93wVXmy2pyzBDMstWJR1sYQab",
  "key31": "51bYBsQ1q2RGE7STMSK1TYuEMwJmU8GhBvdLEh6G215qX3dWkPQSuXPfG6F6JCAyMA1CfZXXo7Lenj88KcaHeHKs",
  "key32": "4MT15PzCSwmBGmnsUgevN4bdw91tRbsip7PdkHNYafudT1a7d16H2XdYSM3m76JG6DuAoRzKauhh7uqF6fPQNXVa",
  "key33": "4ezUsGCk95mSnMYJ4HZosJPXHmBdNjXzm7VyfdbVp6F5M9FGdvwRwBUnVYg39mLX1iS4L35guGbdz4rU3pFyaBwA",
  "key34": "3ff4DsCfm3ik5E2837hfVy63FyKiUw7zcBjFtk4tEvjdk7YBjBhGzuZZqcW7u6TREf3nvzBhSYjJZVBkbMVxNbZc",
  "key35": "5AqZbNgQrp8d1FyTRyPSvW6WR25F3pMHfMUgwyo2RUxR6beHsxWonYtSRUJTzJ47Lmdk9nyt2hEPfXTnxqXNZo3Q",
  "key36": "3Wc5B8vbQtKzVX6zbdbc3ju9Rwk6L5yqyUcjpQYZdooftRmmYeZxvzp9FCadTrmukcz6mfkGEZB4qwMZhTaZLNwf",
  "key37": "3UPekpswtjzZZBVS9yawATUxt8XEJ4zap4uaVU1MYFJZctGGryQ2YFE4vEP5E2pTnvxAAahnaDt6sF9MA3HUxTfu",
  "key38": "3mjaCJBNEb7SkTCitignX3KN7yYq8JkSBXCRGGa5Scu6DLbyfjLsCnVTeedtGqYup7yv1FoKhW7Z3hoDvQnP2iM6",
  "key39": "rePvqMUx3vX2KBm82ezYRDBPw1AnkZnj9m6DMbdzGMoQXqRN5P1dHZZkrDWdzvj7R56G21uLotApjsMKEZTWY9e",
  "key40": "wggVFFdUpWWpdFijUQ9LKTk5A7nfiFNU8q1iU5NX3J52UFTxCJg4tHd6EgEHtBUzuwD7HKe2xmn3mhKXyYZPjPg",
  "key41": "3buD5GphQgV1WB9MeCRiLrdkiBGoERNNvR7WEDJyxCTKLPYA5kU6mL7Hr8Lna8hLn4KxvHQfm6y2arLqKhgndaYa"
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
