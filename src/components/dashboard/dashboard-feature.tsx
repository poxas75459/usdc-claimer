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
    "4GikLohiovjzSdEjw6VDBGJYKJkGDBXUJz5pjDBywaGtRPLA1NrRJgSdGFemGERF2pHg91VSLHJA29ZV8QFueJP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56PVq9VucbkpgafjuFb5rsJiVdt86uqt9u7vBU63fFpJfsj1rDQjkht5EwA2dxoRYtSaPhqAeHHzu3LH2YGYnxhv",
  "key1": "5mXYNDi5ELYZfXg5gg2FkQ93kXY7ijJ69CCpSE4EayFrAY2wjpWbcCUk8vbSuBKRnoUk2NWHMsAxb8CUxyhYoUCa",
  "key2": "3tdbmbkKsf889jmVZTrfgTgY52VBcGFa6RNmYMSKPZC89Vnh3jyQ7TZ5puQvP792RLEC2mrMWrNyNAcDeuM28esh",
  "key3": "4ToDhM5jFSoeuVSgXR4AE4dNK4jZeNmbAt96xLu4UVWnA5NTVi6WuaxkdAAaApe9qfk5UgGjJUEGiWbGuBqNNXNY",
  "key4": "39YvAp4UaFPuPrjAELdc9kGjt3kRoYnL9s17wCeeipoQjbnESMSP42BezPJmNmxijGDCWLSRqWbCBJA1nSoC88MY",
  "key5": "ESL1nrpAqMnp7qxT6WezJg9fkvEpEJTXzy3EgHXkXr4ZPyc1pkvqWRwKeppjBmqXEWPLkuzdfeB7jnFQ8bomRAb",
  "key6": "24Av342Fv4DrnGc3JjgXzRYN7wwF9qszUG1tQYpEx12z2qByDFqXXRn464wKUKhCQDiVjxyi1rPZV2Snp9j5s5yC",
  "key7": "3jxZo4kvER4bTNwsZZt8dYpT9pBPxDmU2C8PPm9Dif18sD9ErSRXSTX9q2kiDpDEBctUuWyvmB1xbJnz84QC7rzJ",
  "key8": "2uwQAJmVXzHntKzeiUPzgCUSekSqQQ3MGRckoyuacpkCLofdrpdKkiymk8VQ8c8QsnWytSZ6G9obKoMbqwQkT9ke",
  "key9": "4CG5SeAc2uJfXuQhjkyjh9DhQ9ndNktHWz7cw2unsn7xy9Bvb5mVaUhvNweTx6hwGyqfFakxKZm7eZ9DUUQVQK6H",
  "key10": "5tnKsY9MwWSM5CyDMiBLkV1BSeYHhtNz2dMPvrqDQmXcNgc6HysRhP1q42G2yqAbkiaRWHTagNDs2DmwmcsTmkVP",
  "key11": "ztxMuQeUqyT51EFLViGJan986GUzkwA8q9MeqBeniZ6DmhjzfNsjqss9hQomj8ES6QxDibT1V1aKZ8cJXHfFKpK",
  "key12": "5M9LohqKsTbxuhwAgi7HQ8vAWdczWZGVEFQDkjR5ABuqu5G8TSrWdVcyeMhbPu9SUSsAWtiUcWFPJk74K4q2DgNb",
  "key13": "5mEV4VQ7VTwFVLGSY1Da3ar6PmFFwaJXWTxa7dgCCMWJj95f5CZkjrL9uTVDgTAU7qpfat9gCDUKhsk7MTmRzS3z",
  "key14": "yVgL1SWUNr94FW7QK3ySWHSi6wbLe3erCgZA3cuqw3QnvJgw19j3Suu7JjbB3QqQta6xb3Qn8PttLkwUYVjmn9B",
  "key15": "5eUmArKJ4KX5PCGHcimkmL8ZR8Skvw3VoWQYViZ4iy2XLnkSYEfUFg5VJYy3q74ac7U5cVBMtEePDz2ktwrc9nok",
  "key16": "2jK5yzykzP87YrxXLUJkbTMELQmDEUh8FnvL5GqYZ8Dvc8kcJizMz1wsGSZppmEywkePHo1qsSz54Un7NEvxd5ch",
  "key17": "4XRVqC7SAwv8KiRHn793CFtoz1Rz6evhsnDLCccPab9NVov7bMzjnEqdxUyGjtFaGNik1btKh8YsLwSknDhgNpQw",
  "key18": "3ns3ewgjfHmH7FBmGrh7qsakGgpNfa1sF49VpkCvUP4FTANpq9Ead9QmfpCM7Pr9tumvfh4763jXvofueuyGojYS",
  "key19": "53bVqwgx8mRgBrhRn5UGHRYN1aZnwMQqqWB4fEHiJZX5VbV7XQroxeCHcGKTKjxkfSb7tBNQndb3vuXadxrdxxRq",
  "key20": "55RxrcGTNpR3ixQWagqHmBd4anRBwJ6qa5DR1GVSGtqsivs25hLJe1Dc3yDCRn8JnN4eHGSttdxrR5HLJaiuuJX6",
  "key21": "f9nFebjjszRUSX9Y6EGgB5LAbyTFm2hQQdMHXJ6KzyPsEcCVqJNWrdBmoSryMpG345jnHqTQYFdq4A2JKfTiLpK",
  "key22": "2pLZw3z8L6xnJAMcbuqJSRQnyj9gA7wMTpjcALGSZsFhc9fDEzwGcx3htwpYukpKKh96StkhbjUTLKvZfAXWgxVZ",
  "key23": "36FbbNZj8bFRXNR31ND1KAcdBKTbZ4UHiy1s8JwFEkjUDia9vyNoHrjtYJCdbn17WR5vJE59TkjEQAZwnqp4sjQG",
  "key24": "RAWwriH8MZSpsiEiwojKn5NsjcTGhebUDKCYfitXTmMfKaThjSpFvH8QH7hLDmqWodeBbM6TuXtmMGk9GhsJwjP",
  "key25": "2JWgVvGiHTpxxMG3fsuXLssj5GhJzPaZjXyYviEDyDoxT2gPNhJwxCkrVZVBC5xsFa3ZJTejsUWvzXw6xRLvEaxf",
  "key26": "2ndMWHGcj3pqj4ZzRLjbUecoEimUwRheZfG2Q8kZQQWgZrSD14YtgxbowhuaCDX99RhbiFd3Nhxu7smU4qKFvBor",
  "key27": "5K93fC335J4ukPodhpj1fgQE8rnWwyrqvd6EBAuMLgiEbSZThiFzgR3ushHetPYSGz6UMuVwwZ51XvNP1SMabkYY",
  "key28": "4rr3EkEKfnffmFgAig62uAWYSHCsWk9aKcwYNTgH5Yr14r9BALyMDgCFRUmqmfzTtEjqwLkwijbeueWDqNSfc8Ut",
  "key29": "28KQvRgqY3xYZhJL9Ci26Cm8Kd3A5fQv6RDLFDht54xUrXNN7eUgwaS7e2k8GtA4zxBtHbeBc7SgoJ9vgvzG5uZP",
  "key30": "492XLEFeDfdSF11RxYJDRiPQ57H6JALcdgAodu8zokPjeXuNpLZ1SRAjK8QvxC9cWozAGTudqm37T6wPY1rZemZ6",
  "key31": "3tAScMsGjX7u61q9iofsGw7vnW3QgmCVCCUXftKUmo1185KQiV7vxE8Ses7JeFEpGkL7nXKbR8rqkdvHEASMLYLU",
  "key32": "2xFd5K3nkHP1HDnqLNo21pBz4yW2maRezSyZa6TRmjLbf8vFiGCE79veFRjPAQQmTpcPDzu9Ny89jywJa5VasGjj",
  "key33": "2Z5gaqkbEEmxSoY1xLh82JSCGtexowUzpFjLzLpWbNqmcRXfRCwr9sA1se6CV52kCGnhGbvgXvLA68Utg65QpioT"
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
