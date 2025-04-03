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
    "41rgNYxkxWiyZtBhytFHN6BkTPwDaTCEPKtXKiWmYbYNPA5KbWYvoPmi2EyKfza2D5HGKBhGeUYPznoh55fDVjjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B5oXmb2rVF3puXmgJ2mdJk84TBJKb6PpD9FCfHZRkjrmJPWtd1hDALQo6tFqrLRfcHJJc71DGsY7vKxxX2XeuEb",
  "key1": "2ukBJbg2TcnK1hMmeB4GHPXfWb4GimBYpMxdVA5ZysMJUNeqkaBEYzY3aqY1AfngYQXZ6Wk2HMnX4R7SmnpateVN",
  "key2": "3uqedBEGEBQR7C8A3FHV6eLmE1N6mMMDnv8MwDUgSxN5pRbMha7UqZqJCD9kHT4PPDHB3cARSbThh8GRmQMDJi77",
  "key3": "4eGqHZuwPvyMzniXWRYMX1vqh9iiXzC73NG8RGe1kFzvXQWJer5r7SYygpdPvQrVLgGEy2y9tAHia4NYzqf2PxtM",
  "key4": "4cdWtVvJkv5PmycYjPgfs7AhknP6C3Vv17MYmbvA2PsketE9hCBb4cgSEiXSuzztCyXtnXCxgETzQvXwX5zwkbgs",
  "key5": "5tERKN1ZQopEWtUjNyzViQ8RFBf6MTauSU7cnS7CnTsTaEPFiDL1w1HksyikVxovBCenCbcs8cDeD8heVJ9XxstG",
  "key6": "wvLWCqhT6G6PvC9NE4G3UNRjft7Q3A4gFhojLXcxq4PFASBKLS9ZGvQuMFZK9ivnHc8Fy5d5SL2a6529Qf7K7KL",
  "key7": "wf4aBraNJRgdceVuoimUSVUthgDVUDRJC1aVbZwLnaYnbE9inxjQH3whZkwfRhnZDQXyTf4MvwXosoQnoCLdRKP",
  "key8": "5hKGePzVoFuWhQJBjJn7R8ZoxcZEAvfRXSSgsLrPA8VFXqJ9paN4MBRdY2B4uZAa2NxRsXPG2oKo8oZtQe8hhX5D",
  "key9": "CmtaXXgQ8ZWsy2vYM5fhLeZDrQpQT2cyVfS8mRUi6msAwPEUiESnyB9g94VvjSoVGq74uPrTxgmMFPAbuDTeWyb",
  "key10": "r3mrVwCUfRa72MPpXXJVZ8iiJJiyiZji6bVsaZLQziowz9LmPvDTamTrfKa9ptrKzHennkQfCvj74okf25AxzbT",
  "key11": "2nCPtxXC93hkjA2Cm8yArvw7WdWaCmX9zmSNHZtgSTWjb897eeTH8Sq7gcChJjT5pG4FfuDZKztaA7k6g1NajNhp",
  "key12": "248CBDuK4u2GFbyyKYg1bqvryACRN8UvqxHTdoFrMxC5Yazn1f9sFLfECTb9nUTWzKzSYUh9nB2j4UTr13Q5ZR8T",
  "key13": "4GTbtBWSe8MYdceMvkoQwVnnSswmbNvBG9ryv89MPbwQ514LbCEK8XTrchJxcmhx6saw9MDTRgj5oxYPvUgRt6RX",
  "key14": "5zWMMmUovLei7CmFc4NX7hFTTEjhf987q5KDVioktneToDYWiTTVvjSHqBEKy72BuFeJzJZf1BpCbPhptMW7vAk5",
  "key15": "3WiJEupHJzEFksFDudRFVFCSPfY6zNTabHJcgJnX6NTt3FmxuN3Y37i68BPurnSWnXZMZ5Ds65MfP6DqUgz8vY3c",
  "key16": "52WH1XkN4oZBMLdQHyihqez98Fd7wsvL4HZzXMr5CbdB6eyQzhhME3HfgX3GTL3nMGiWcykenVn4U92KQBn5xRP8",
  "key17": "2VMaXaxwwGyTqdyYm3EKK3QnNWfxAEYhsruzAdJzQPvDDYTcyaRxyzykKfHNp4AFsL99hkvDK9eT9tK8XMc3J7dH",
  "key18": "4wxu2aMs34u9UZ8kdRxmZmjarXPYMv5CE53rKAp2dxmieFRxaR5Pkag3kDNmFnLyBLKtYAUtVUkg45H4L1hdxqxu",
  "key19": "4PWZ1PF9aVUyjMsVVyTeCiNYnPApvX4sqYo15ozanoSrrEWKh8fpbSecgi5KYYmoPjpTZ3X6qjt9aPFuEgE9X4yr",
  "key20": "2Zerg7UumG8BayhuyyEjCemEJ3FsdeCTGwJbj7vvGMAD1Lm9kWPJ63nGPtTKBYbcaNzKeyQvWpjcGNcCB6PwMHZp",
  "key21": "2y1mjmukQH8E3heQpZoh4PcceT4Dyxk72CjKmWG98jGFSGoBK2vwoZLxVyM6XnX1xYQiLDsZ8ChiwGmrXesRoUov",
  "key22": "2S61ARStjxM8TuTiFNtBbAWCWDo4wimgKvhR5zrVmVRmsWLBVCztQTmTjaKnW8c5roxj45w6BVJD9DoxndMZDUA3",
  "key23": "4gkAqky75jCauD969LbJrkBCWcPb9mSeK3VGuWn8Hyhdv77Ltf6mX885wD31Yz3RHKGS5fgEWwA7YuSmhr73ysGs",
  "key24": "9jNeAzumLNhahYH4HhA68AtCwjqVr9qw9oVuYb6R4iD5e4in4xe8nthEZmcuMwjkqQvxb1sNb7XpnoTZL9mqbXh",
  "key25": "2TwKMCV6ZVzad9Zan1fa7YeJdGzabk2dtfUmGecPjxrCzohb5kxAGP2ShoHU9bKZgvAZJ9DDaGdVAoXVRKp6n2ya",
  "key26": "36XDD9QREUkySBTWPGNhrek9if7nKGonpVuMYmc4iZoMwinuYFbigqnVrJ5QMkw2CW8L1EiV5ZaRmUeX1JxNddXJ",
  "key27": "TZr7gtaRPmBA8tQHCutcBQ6UQjWsCYaNBLui5hrXProaP1gmsNASW38bwPyE45BeXHmtjTZxtcYUGZncTipiVmj",
  "key28": "3v4FbBxHViUhvUHTSm1txvVje6d2YyuNfhrZEDpzWSJWnZ94MwWwFvJG2yVxBttfuxTH7SxKbbkCi79z71rYVJ3L",
  "key29": "2PC8YDhT8vmABMvm6VZi1xkjrgwKvUvnkorvCecrnpRdk57kZXo9MsmBK5MaJqParHzbAMbY2G5hJ72Trjqu4hyN",
  "key30": "3dFQULP4KRh5NqF7upk1fB6DT6wwaV1HTCgYSjXkd5hUKTwjvTxoYqCDwYXhK1dSs4Eo3npyM2WdhNYrarLYNM16"
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
