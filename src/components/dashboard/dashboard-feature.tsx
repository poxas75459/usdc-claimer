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
    "44fq2A6QPN8LtnoJCdmqJyDERjsxfTpZUJkZJJDdRD48x2fJH4efyFtAPzpNBk3NSFxZRC3TXrpBTrvCk1HDFEHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29S3d8ur9hgjkSyL8MbeaHwRT71xZgrzB6W4RRpDKtmvq5t7eowQyjvmN1dFJ5nxV2XjDoCLcqff75Pgr9gvtHt1",
  "key1": "3CBUJH9gxvjbNbqSpPh2vojks1ztkE777RSeuRAnB5s6BtJsWGy3t8rr2R5vB52x3ztKrgRwmaJJHehxXD9wKCxY",
  "key2": "3ZSgKvDdFcDZEP3Z48R6SQZgqToXQrE9hXNi5btbGYE8fg7HgmkrQ3hiNjNFm3e3Y6vWyt911pMUModTNhr3bYaL",
  "key3": "53YEonfv1W4J5Xnf9tqP86u1b95hWoSmRqTsGGYMGJ3CkR3gSQ7aENxXKZtfwMYUmubTmZspzeupb4dvsU5U3KC8",
  "key4": "4pLQXuocvQgGzYQaEnycpXpxW4kYphazEbxzqdJENibPHuAA6GZ8fd5BoWhMSNSMSmUStLv9veU6dKUPSEEbw86u",
  "key5": "2Z8NoRan1TAjGWbfTqtBRtG2HNbEyNKhTXABRYA976LhEK2KD57u3kpVitn57apxjur2WF43N1fmGUDp1eeHrQy5",
  "key6": "nrBfD5JzLStd5bDwAaFsVWLbqbD6wWEsYh1e3ZZZXmZw42xXbxqVEx1PFsrtb8zo1nNnRzUoRByKcZjsWdoF8Lo",
  "key7": "XLgJ89Q652WqMVpKiRj8t89JC5fFh2EErKR63PjvRURB6FTrkiz6DwRrGzBHU747o4f3EKJrGQNL9j2QkwsvGXX",
  "key8": "4jYPCs58jBoSpZVERuxUK6e4YeAvmgT3hn3KUCW3gQydwLe6fQENbJRyFjhLYJLDQURavL9hm5C7D3Ut3cfLJqiL",
  "key9": "eEafU9pxpwSrZuFSzd668PR9QU5Xg2qAzJC1getoo9o44GZ1wcYCGePG1JPTQQV3hJrd12BCAQRXFvESqogL2i5",
  "key10": "2DETFp1kiihrGT9Usg98zxEjmvGVL6o1nALksu9tQeZdUwGkNrBAxKSGvoz719AEAZYTUTT2mzuHrd3FTCUbex2a",
  "key11": "2MRniQtPbw3evYu7x5d9dJeWubkWtpi7wAQQz3oWU1NU1Ybf9z45oMC6DxGKVU317awVLLJr5iDB1hZGiiZeMcoV",
  "key12": "5AVmXEMrCM45jiakDhj92u8F55ckVzhxRxeNgJm5sjDVjhTLjKE5jjjKEjwNFJxAQgWPGzHB17JbcakFzdawxmNB",
  "key13": "25XvgX4v73JARn52vJjrn8zRTkVgsKxiHvwm2S35RgEPeCNqHSWfSKFt8szbct3KUpDAaSr8h4JRfmeVSp6eTK3K",
  "key14": "4p4WbKt5wcYXEWKKjuKEEJDHmiJCR6VjsseptHvSDbELtAKX9Ea8pDaTuEEYFWLHBwEdjK1Y51tFCZTe7HTkCv8F",
  "key15": "47UeA2V7j9W1iPpxGrt9gMJp8UmPAbxQJ8UaXpkrCgm8k7jd1P1f2QSoCyC5zAPMt5Qe9Wr5nZhUy5Mtco6e1JWK",
  "key16": "2DC2YhAs2Yrybf7xxy3iBE7k6vaaUWTJYmvDkKmZ8gZfTDf5vyk89cNcY9inh7ZYKMkNLYjETBPHjy65Qz8TJn2c",
  "key17": "2V5LnMiKwFtE8UuNRXSaQLgcTF65fQEo1N4zrmpNraYzvHojQLuHNfhNJfbd2pyGqE3C4XG9Ga2xcj4iGk54UyCE",
  "key18": "716u8nefjDaUqejc19DXZLbPVNkqNJF75Facc8TQUdhcTqLMqs36mX3dxs92AJf8vLUKof4dQ8kz5eaxj49dXvy",
  "key19": "4BGXbA6SZtrY3h3SgRzqU5iFbAorQgGfGqAmSTtbZ3tJxYTeavedfXdSRWy9qeMH8c2ggAneY2ytMnHF9s4UNFbC",
  "key20": "2p9hpuX6DC3tKNHwFT5E6dWGUBxM7QmAGDjFydZbXGFj7HbWGqK98raRkg6STsKdMdiSjvb6jQxXVCeNFZpuNDCr",
  "key21": "hiPWkNi5NPUWZPviT3gC6UCGQbc73UBQuSkLNuv2xrEBag9bfHPF2uPqPFRBhjd53nj4J3ivYb9Ttcdo2juogEa",
  "key22": "5SsGhqBV4NqBLw8iGPX32uAkkJruE5Xx5LWRd2LSURDYS4sEo4piYoxqPWUmr4h53sjknxEstNVwzG9rrfZUuKH3",
  "key23": "3QG6ZhpqnwvpYmwxh2w1WSf8X27wPLgJt43q9quxa4eeErqpPJ8e8vooZguxrDhwKdabYy28CvwU9eY6QkkUYoUm",
  "key24": "5YJVHW7ode9gUhAd93PyWDa2zSmS3pF9EqRhTHtaor9Pt5qH281UxAqUU3xQNaxqvstto6waNWgvoUkW7j84KBmP",
  "key25": "sRhG4AinK1KWDD321uCQcLgWF5J1TTrdgnzFTcFqUby8uAhpwcYjbXLCwSWuah5t8vqWdizuXq9eTyeNQkX97Nr",
  "key26": "3KB2HKnNr6T8HcN622UvdbTkmVnvU6XCZqhM8VEug5jLq7kTmTHQD9pecv7KtYJmrG3VetHhqSvRNyucjdcSz54G",
  "key27": "nGFqzn6zPZuFztkfXzYktaSPvddK3hRZtrB9HsebecqpihzfUkVHaGY66zwgL1vAzR4Lf9RVZXjTG1XxR9YH1sk",
  "key28": "kCUttyi78iwSUKaRFmnMHzwihndcngCC2GQrgEC5xRteRFvyMfmndXQMJfEXuyFWW6g1ZRZrVY34HYtEvc8G42F",
  "key29": "4ym4FZHWBoDe736FoNjcU936tW3PPA4tV6xUL3UNEG1PwevCx6dqMEv6gx1GhbDd21bKJaFd9oRXmJJinbtvCnWH"
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
