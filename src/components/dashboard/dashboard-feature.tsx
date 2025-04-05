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
    "5moffXpK4YU22bWAag5K7azyu9WVdbkJCfyvoZfMY5UFh7ma5DeKWadFUvrGngCSUG3kV8Hbbw4ARvAM3Ty6H7LR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5psgi4pzCzDFLiWfRkSq1fiGNTibpY34xMHaMH6VA6ebkeBArx5YDLEDkKYVaBRvoGHnHXjvXE1cAXRipXjMgNwM",
  "key1": "2kCNiht4dmDw7cfUfWY5UkxDzaL2mqW9V3t1xbeJvU3Bn9v5ffSbrjtkPu542jGrojkG9Ewo3jLRRAcrePrnZ7cB",
  "key2": "3KSnZwkgU886EJshG9uENmWttUsepQE3znHpW8RsbCJwoyNaQv4u1vaEnmNLEtqvDLJcby518KEstjEPbteJN3oG",
  "key3": "4qo4GwZEKejZ2JrGg6WhiVBuxszNi5cTWH3LqhHE7hjEL1VtSgxEDZ7mR5bCQBcnFgxpZA8W5fi8XV1sGsx3P452",
  "key4": "47CyPEdpBynxng9643pyVeLoB7xH8hkjUWZPMYe39nWuttAY8CvfHQBYFhfx6X8mSD1S53TxPnPrZJhjo2QU81md",
  "key5": "4zHovzMmn3BdAbqvE18WQ487xxi7UGivrbRFamx5sZHr5HKhEce8hLY2faiThEs5Pcf6sAah4Ar1hktgL26j8jcN",
  "key6": "BUs8i3ktfhZoXLYv5EUnnN2uHU2j5K8s5gm2moBCfWs4burF9TuXeGaFXvnGJUTWL4WryCVBoGGYHJfneiysVC2",
  "key7": "3BKAuWYfy4TUGriqgKiDfweytCiWza7w4b1Xqbi9zrXdMeYVjWY4SnpTJpZEhi1c6ftukSJ4dm3GoqQdm8WStU6e",
  "key8": "3VouyipSxP8H3Ri5oE2XZm3r9JGaSdiexVuJye9qjy7q7dgto1xs7nUnEfi3FEHfiCktU8hekcRGuZ8FKHbbXx3Y",
  "key9": "3cf5GCNzQ7oz4GUtdJLSXNyjG4ePRX5qavX3j6YoW1neiMZTPX7Hw1Vj6xLZKr7of1JF1Mtth2bELWdz2NbsG5TG",
  "key10": "2sh9Q5dcdkAQWtwkymdoUhrtvhc42mQLHnxVotvsGYpLzF2ULv1SJ3C1RR1ALK4wR4uPgC3e3RGvUNjqGVYhur6K",
  "key11": "2BZaudAHw1MNggYqGpLfEjgQn12LqyTuCDUPfSRsnpenN96VSCPt9y3zwiBx2AR2Pyv8MgqyodKyZPFqQCamR3P8",
  "key12": "4gDZViz8gYcpSzf3oHVAbHS8ktBzVKCwfaZxCnCtuDEZeUTYamSSA82eLjQgeLC2iUuUfe2xrxi7CfFh8mMtZs3K",
  "key13": "pFY5FEdz9kUE2k4mjsdz7LGEZ9k7cCJPfQhds8aYGv2Zz3e98zCLcaNqTzXHZjYaQhBermQdLVuVmPhkWTQ3gz7",
  "key14": "2CHk6VkwU4qouQroj7wqDJk8fTc9XHCbMZ1eF55EK9tuK5vjNbx5y98KCNtUaexemZtFZizMdQw646YavpqJzEqB",
  "key15": "4SA2553Gd5Gmh38TA8sh9gN6bWemw6Xi1CbaBMVjYnZFQ9fM2rwMjSE8VSS9Mp9aMi8MzvmDiqUe8qQMHYEpRWXp",
  "key16": "N4DRJnLeZHD5ropUcy7oUu82Xz3ZbnCuCi8CPHYz6DVfxHLr9fzwMKU2tRPRWTYe1CCi3rZzT72mNvQvfR8av5e",
  "key17": "5cXHURYCts8g9vQMoiGFiJJbj4SXVRJmgdLbXvs7sxisbxLwnuEwAe8JwiPZ2UUBucstSyjsxL2tiftV4ub3KdJz",
  "key18": "3dgPyBkUAqRZ8eZthWb1bAMWShzj9UnCXF8xiQa36Ka1XnjzhBC35G57RPM1DhvfMEcPSJ4N8bnKEy9h2uCQu58t",
  "key19": "TSexv8qc7b7yViD5BQWw7h8iDyoYc4oSkmJb3YEDVsdi5pfN9QqVygG6n43FLVX8yWYuXNVK1CTFtZybxjwJsBH",
  "key20": "3wgw8mVepG2e3P54fdyso76eoKJJLyiPguP24yjYsJ8MBjTpLS5Sd4CRe57b7yBExHi88RwJQZikU2SrHtd9ULnu",
  "key21": "3ca1NyRQnhpygFdSuuJuY8bFfzpAfQcAwjgRwezTUQdKeAwiKLEqi9HN12eRw18Lc8G5rvyPTtgkF3j5haFGjEsg",
  "key22": "5AoHg4uDMvWdtubVg8R43SN5LKWGgcBE98xmgHbiGVQLkzhhJ9wo9qZvsDb2SzSEQPW6KG1FM976CVbsxbkTs4op",
  "key23": "4BDb4VP7UkbgrcaVEynxP3QfjjY5nycNBYZxpfXdDqHmzAE56p8kT1dKpiX3BZctHZpQsXYm7YxvLPBqUYoA8MLt",
  "key24": "5tTWThVj8dmMLfP8pzx6RTESmzxZdmFDtZCcbAfx6NbZP4nvnziiXkgEMi7wgJbf6bLx3YDxwobr1LWiDvG4y7Gt",
  "key25": "38JoSBMgfAehBvubMDZQgLq3ioLM6yS9wgJ282ZccnKaKrfvs2fJSUY1Zm5Vk7g3HNgLn4DL5CUNCAyVdSadS3v3",
  "key26": "2XEzr8ZzacyjxZiG3RuPpCQRMaaV7raKExSWdtRzCR9NbJsQCxPxVFauu4rCRqZPCMCniZeDYsmTJhnyBFiTKVS",
  "key27": "3rx5DR8KG9qeV9PXPz5ewUu6cxugWt6xLVqap3VnSbCeK9nRrzXy4TwUKU8BmTigYokfQezBXFwZurKwCzxSmYup",
  "key28": "2wtMvNiLqrh8wftMVJ89rsd2AyPfZCZ2EeAadHYromee1qUbUQRVYq7wKxPYzv675XovgvTqGtmSgpMY3pbkWRQw",
  "key29": "UdLer9JTon7gH3Qof5BphF7yuoaWdRjwGrZesnQ6BnxUjCBD3DZFrwZb67wTQrochLH24Sx9YBcRuDPoQLjyMPS",
  "key30": "2jteSkCaHZxkhd53NZGrrRkFEmw5HEncnChcux1W6SPJAPFQgqpJ8yTpQQNx7ez6pZJ33Bw6KwMPZMVoG2Uo9jVF",
  "key31": "5zkRXnz6MxHwKyKNHwPswyqiC95faXErUz7B5aeNPd7GGZqCnoLhKvqkBjGmumwGvtNqf5aaki2jTgDcwTg1LuGE",
  "key32": "2yLVNDPauwmo38StGoqEebjF4qqw3fJEH1tE5XBE6WCLui4MsrVHNXiDxmVNTRcXzpSuDFEqEUWWo4RDe6dCy288",
  "key33": "5dDw6cC4tfykS9VxEG7i9qd9JbUSf4gM2fN4hnV45tAhGi51w5rtZF9U245fMaa21BTL9UoQYHPcpFYQxh3E2f7S",
  "key34": "2rmkcQxB28oiZBhtGxeUSiwxvUwYvvCTkkXVsn8VpwoGXBi4akkkurM4P6Jpnbqj3my8BhWDyEUu8sE6FVb4bk2W",
  "key35": "2hjgVuUeDuW4saPfLoeoEjTDbC5puBfjTYigFPNNK3PGKT1yL45pZ4ZNK7b6sNJovh8F7qX9PUa5fYwDGVPBXJwT",
  "key36": "DShv6i9qNZVrC6SP8mymw51XzVAgMe3FYgBnmEinwhxZiGQyPrzuovdhRf35wSCTDqNdBiNvyYZpwn6VfwxHPx3",
  "key37": "4C3CngmHH4bbGahRbB6oMqS1MejmSrbZjbm6JbEr21R4Veqf1SKxfEkUReEZnz2VVZn2GYzAVcPGsmQ8QvyUxuup",
  "key38": "2QSSmQe3xnpE32WQdUMPP6ZtWTavjoYQQhs7CpzK9mpq9rePJjkgjFFyf6kR3ji5UGv8ZHw5YEdPwLyzzCgzuyXt",
  "key39": "5pHUwHdigd7Sww5Mh74NKerg12cbYCVFAxJ5pxsLAVsW56YgVfc1Jt59uDTEpxuKBjK5wvhKvobRSNLzt2ngdq3p",
  "key40": "76TohxDKCXTAQhCAQwg7BmtXLYEY8TE7y7PYB2WviGdqNeFLpygCxvzVeJ3g4jjfA5Pfyx1GFraX1ixUSgQUuKV"
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
