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
    "36VJij1ut3KB3FHtRBSwvvRJPefzjR25JXMPMn7iwuLxCDrVKcmj14L1DbxcVwwKXoAiMsRNu7jxhV1CoQ5XVHbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42XqZhYmXQ6Lbm8PuEEvkzDkDaqBVZUKjKmE4cAY25B5ayeWdQ3hBqJs5ooERY7oPjaoQh6k5Q63CskxoWAf7tbR",
  "key1": "3D8U4T5d1PA9XKVJ7jNLkdpUQ84CXWfqZX41kAwt3fTtccuzkzAicut4nGLtBrG2xQT4RyVbLFtapzaFwiTkCyx",
  "key2": "5RXBGpHqMjDb7Djyvi6RnQwJPWjNcHzMEme6NpshbpimtURQdbMZriHteLYvh7KZAkL2u3GcU7MuC4tuFd7igNMq",
  "key3": "59nHr4nfVFjFqZ9pwj5aPk7KHEyf1z4HKtok6u6b4CEmpq9SDefCngHMPNjLMAstnnhwWRucKHefMvRjGhK8ndFv",
  "key4": "2JaNFK2yPyHnkWyABKRcZQqSM8bEJTsFCftznuwygvJSmXci7haoc1snT9kMdktZdJtfNxt8fadbFqTkdb2VnEyk",
  "key5": "igTFcaRgmZyTqyYMnHpobLDeM9riDjZ7bHEjfnWHhML1QNhNUtcJTVwThkGAtDEqM4knMWPmSYRGrdCibkz2aMM",
  "key6": "5DrNqACm1XqwkAEgMwRVtLXvsMsQDCkVkfqtEAsBmTBYTLkn8V3oL9w8eo3HE3qW5YZSLDur42vMyxHn9naHU3tP",
  "key7": "23e9T9dc2ro7a58eWHJ1VwkGVFdbdRj9St51cnjB2bGKMker4qnQLPAix7EBcQbjm6Qrd3yTAXDx9QZGujkmM6hW",
  "key8": "4hska9a8prLdxrvqhAuibbq4hXka9h6KCT8q2SLxMhjhqQMeRpggUy8qsHUYeWLDtXh5saHC8646XPKLkMN17EkD",
  "key9": "rFtpdsqRVsVmokjWz6jthyY9cTf6a7f3DhbKRkqAp7mErV1kKSAJiULTVtk5XJ8jV52LGmF6gNo2xDK5XpCJnbn",
  "key10": "5Ba6sGzfYM663Tf8vBGJ1kRboR734koMiE3QoTzEcJmAbkWgSB1pvSWekfrYJ3zpAahBp8R8vWwnU1zrB8LomW5K",
  "key11": "4yrogngzgQ72nhjAtzEfyaAFRYN665r1kLYbARms1C2YhBiyh241ZtF8ZdkHtdpxWK3TvUDdFbTLgKt4hXCHVyEi",
  "key12": "15s28TC8aNdtViowzrcoXsJGfpKQMf7vr9vEmBhfBXGBWv7zX6CSveSs9NoGbmB4fDbwjTuXmzM3fGXs4Kx6SUN",
  "key13": "5MzHGa1vqXmJfeniX5yfXbJAXxXVT8H1rumkYbZ2F91ev7cjGH7k8xSXVpD6U4eMJCDuAD9JfaCWRK6KqYCyK5es",
  "key14": "3bb5Z3oTfoPA7gGSy87ByvTnmy6hLoara7b8h3NYJpv79vAUb8uQN9wMUf5AsHPXLSMf3SFWf3LiE2Q1iLiuc8sp",
  "key15": "2QsozVYcpysXTKTuUc8yXLqabWbrimWBppcmZmKJMQeHUgr4vvRoDcsQyozNWX5T7RA9tSZd6JXKzMYrYHHP8Ex1",
  "key16": "2fzfRtUDdAgrJmXgTDavirAKwWiFrJUMRH93zWABLkX9ucu7k9s91nnghCn61iCWZP5NYyrPWHziRdZrKXy2n5TN",
  "key17": "4u3YEcXGp52q6nyAzhj1h5qQKbXSDjme3WWjjWAsFKLoEzfcGVE6c4EoaLFm6NB2ZqjfWMVZBXaTNkfJdDyUh7AL",
  "key18": "4njyhmVKp1SpM2xF2aMmBtp2RRrJ5wn8taPtPLjVWY1nrGhVeRwCcibaSPh438vEDq3r1TaaEYN9Eek3eLsqi2uJ",
  "key19": "4UH3PPYPgqE9Vwrsc2DYebvwQUWPSagTs8EoirduyjMsF12EHC3NQj3CeYJYYUBFet5ZCjTNAryoTS7XZRn1Pbhm",
  "key20": "2aFDZT4JZjMVYBMPfDWQicFgWLm4C4Bhqhwv4xnJyT4JLvmiXUzHShmwgdFr1LhV39CMGwoCNxZHKe5zbtcE1D8W",
  "key21": "15zJZzPA2N8erEEHLfoaqAs3LgQ5H3t5FbDTbZquvGXGyoLaTzvUhTT4F9RSWMYVxFn8CtEKasicmZhuHKVf3PW",
  "key22": "22ftGkaoYjLNbhHHY9eQrPMDos9GA86YJtHuwqDUjCjz7HZYucDX5pHaowhsGZvKdSVU3ZnyJuQZVQiTv2ZzSmLo",
  "key23": "3Fh5wqeDqbjZuseNcYBHyz8vDaXJc14eEeX545HuUb9hEd8ZXPLjA1YAug4gGtGNxPL9bKPScWE81Zvn4s47f9np",
  "key24": "WXLjvPMC9tD7zJXLG2qiLcUcrisBwJ79ZBTp8Y3FgzQAQkMcNjQD2wKGqakPDxJpmuxMh1Vc2Ccjc4n64eUD9yZ",
  "key25": "5jyP5JahrjqChcHbgT3XYJygcWbkxJ1tmquSKjQKeKDsyiAvxz1NjBQJq2Bqta167Lk8NNKH4HBRgajDqn8ERwUH",
  "key26": "5doGAv8sXDv75muV7Bpwaw1tqxzGzhCuz3u1mdWFCiQSMAJKZjL7PiocZo7ZfMKWf6iP1w4SefAB1CEdzVShGo3F",
  "key27": "4dAo5gW3SxKvGsH7s8Hqn3TLiwSgYYwEwtTi9dcM4aJhi2FCPA5mgMQtGHmk8w3wLCuR9UUFDrX4JZW84oj8MFPg",
  "key28": "ZbbGbubmgNKH5iE6jSFeW31ssQi2vVJ1Ev1g1rvhbEtsZK2MgGQeU92KDq5RrEY1KfpGoq8KkGSmeEya7k8S5dJ",
  "key29": "2LaRJEYRc1dyyg5PXc5J6b1BozDUjTwqMKtf3fYe1JsGZrGLjGhpEsTUXzFEjvy8vM7kdM4C9WGAsDMkmHPk6vr7",
  "key30": "3sod9QSQysPqtu7Tp5oZBxftLVcZGa5owKpwg12rzo7Hya5Z6DUvVAEAN8BekvG2ji7eTetTX4Nmh5TasDYhXUXD",
  "key31": "411XAfvSUXyc7eCfNf1GezRSCAyQYFXH6saUtK3T8QAC23FJ2r3cvxbtPuR9bzUfKAPMZoLEU9ssMae8MD5vMf1A",
  "key32": "23PvKiaygKRPL1LfVpKsRhgVY65d5AUv4JsXCsq1GobjNWEztnB7g8aqs4sKHcsRrqWLe4BMErLX4SD84sQeQ78Z",
  "key33": "5LfA8W1iLvBXEjr6ePyTozH6h5tg26vfbgwf8fdMUgPggb5TidUdR4HtWnQyqiouc6VfsGd1Msj5NNaYPSSLR7ff"
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
