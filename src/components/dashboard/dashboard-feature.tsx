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
    "4SXAQkmmRHr6ovaXX92Ez74EGkFUokw1vuUM9T7wYfBwf8AUG55H9f2LCJyoWfHNAvtKHS8G5ckqUBykBeMHFH3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aMt7F9DGsRZXk2tTeoMSX8NcrNMCmjhG1wLxULEYDmAw5d4AAZWVgkegphDgBwdsU1FNw12VPT2ff6JeBEP9ycQ",
  "key1": "67GZC1wcUXimL8i8HSunUmv5Z3PEkJDcyCGZva1JRQyd8vcqpwz6xM1gDEZqzpMYCbE4W1onGSNMc32PydgoQrmi",
  "key2": "XUg4MuowzZVRNW5mPFcJKzkdELfMkwD9T2aFv3dtVj7Vj7rfiiBAXucbcyvNy4PN5hLtufRxaNbLdVqmt4k3eRb",
  "key3": "4JyMKH9ZX9CtXeVuSTFhsGxqQibNRC49V9gFuFD2N3iShRy4wzNgnfaUKKHjLFxXFB4rw5wu8wL6AsRzSdnYEZZQ",
  "key4": "ZYpxfKoxYNYfK8oKmbrrqmMB7i6SyEiqtQU8SGx3MxAXM8aQEkJiveQgdKDwVbgDNLkbBSPyhpwREKMcrDHw6jR",
  "key5": "3FLoK8zvT9YzPoSfdwXSWWHN1h3GEab12W9zDHZ5j1cZnzFjXHFkXxy3kfweiFYvqaCijd1xDub5RqKPwBbGyDQR",
  "key6": "43hL5dY3MoqzZ2SYqKvxmg5e11bVm2WoVoyFjSQ46ex3xMeXYZJZqBnqa38dpWVfKSSMSmxXKx2LRMQicD3tynCg",
  "key7": "5GBehypYsTkYp88WmJiCVQhWYjwQASsR7E9D9pSeys6DBCzVJ4UpyA7zGXH7gmHn1TJRGgFQRAPp93Ntm4Y43M4t",
  "key8": "24hMHHXxi7kBLS6GcGaeFTEM9Mn8eAzMxMyViD8aZK5YyA62QL1mw7kod8SyTYCL8pMtu9Y7J6ojNZmHWXePzVGZ",
  "key9": "3jP7stuEJtKGwqFNauYQx9x6uZjhKsv1zEugGAWrws9vVN3gLay8Q1fDNH8ZBmp55iR1c7Tty3z4ZUKcrVbPvJEK",
  "key10": "JtiBhpr4ZxEwkP6WgC53pwf2tAeAy9sZ7FepdYC6YigEQEmXVUPYXrpVyZqkHdGnZUa8La4sHNxS7b4SvDGAe8u",
  "key11": "2tSn5s6thLAn2GL4jHpt7mca9dP6NYPpRtQBsJ4ne9EnHULmfQCSohwf4B5vSG7d9sDx2kr1fJghwjqartu7McHV",
  "key12": "2Z6PKcQmktWfjzBmVoUyPLkr7qjwpnszXmcXZmmAS9vf2ktwLpdAxxELiDXmHBjzofXRxrFUGdMAcTSxbLDZt1vt",
  "key13": "5r3yTnJRyJ9invtjg476pWkjkQ3BTHZkTt9wXTdzru8i1oqNSi2Gtv4GbrrPdXtEaPPm2gPTZ3Z9EojwPFX5rdAf",
  "key14": "EUDtELaj3RRgr8dUbBaps3zSGY5Fz22a2A6ko8eeR6LV8T31fVPaXTohMbBMDirFoAMSHP3E13Lwqro4xHq9c27",
  "key15": "2hUeGk4VrPDknCVBDKSKDU27qJXpjPspoJG1FVS6qr3BbiUfKQsfYSctVZ9gxkaNouARHvEYFZFQcJTomCij1SdF",
  "key16": "2Laz56UsW19CFdAkww8N9v7wLsavhstH26rXCFSjWUyd9a6wWtazRE5Bu9Xqu38tbUVXhzayTPYZ1ATYXBoJ1G61",
  "key17": "5T2EMS9Zjw1yYZDCDotbEu8Jxh1QRAszBjbZCtvjUtUP2JXLkTGwofagmkDa9JFpgmfwkmih5iHe78qebnnxaSuT",
  "key18": "5KXgx5wuw3StqdSMR7QK3gFUsrZ2rbapCSkcRbTUjpiL3raQ3RDBZyYUR9iUQKiTTTVLywNMcZhdUe4AiCtNuygv",
  "key19": "4z4aF3TmkmrLbmNDuQXkB6q7ZMhAcj8VxiLANUtQzt6ixDBFHxzVRnnPdW9c7LxVuMvRbyBYTmMvhYBwpFNcuvWA",
  "key20": "241UqKrMzg5yPeknXVxdwQJc1gmcVJ3rWJhw5ng9YXKsfDrcQyQ12YtuJ99Wq22NDUAx5ZUYXSiUux1tz7CThxdH",
  "key21": "5SnF6CWfvcRhU9rvDeqTBWv276tKJj4MHWY1H2YPiGRGBKDmofVoeAkaXSHhFveiTgtvvJwuokNTuj5GCgmz6Via",
  "key22": "5cGB4XwxzgoUFN1PiogZbMfdTpaB6gnmnGwnu5Y9SQdafMC2zea46nsVuLXUuggdMuKcHhw8qtESeRmhsVYYPc9L",
  "key23": "5tGXkrapUU98THBkwrmXn9F7Nu4SKmnhT7dXhyMNKUjgW8fLycPScaN7kwW4aGJvHFD4g3QAAXZPyUvKwWExwJJq",
  "key24": "2p5BkhrBqXdU2MEPYPyvrPYQcny28vVh8r8wi6LZ99Lxu8VJWHEQrfLVVVnjs7yGcGwszBLQJk1QE3Ez45b1YMc6",
  "key25": "5wzxrRoSRqvNivX3K9kmoTeaetmddQ3SYWSSJvqYpwkDwqJaxBHrefnNwQryxGtgR4bZRwnLyZWBpQGW1T439ZGf",
  "key26": "juuYAZ7f5VJqc5KkPR1YnnxkmzP1EcT8u158hDVAUyZDsDCk89sc881YSxNd7Bg82Rr2crZHoZXaREa4ys5o1wn",
  "key27": "d3i9AWrJ8tv1dAv4Z8kmgpqT9ZbGxZYFcmRxYXf99fDFJj1Hceerv8MnWYSNWN6tQ23ZoPVhXCrmw1jD9ef5S8A",
  "key28": "2spWkkeufH6zMNurugQt9sqUZDXLwpKvgMhY53M6uAGG6FvSiNm7qEMWKbmkg7xsnesxdTTfCdLaPehggVMtVWpj",
  "key29": "5sE8A8yifoDtnzTsWGFeaSW4jG77k5imC9DjnbMSWfLRumgwqDqF7meyQvAtSd8KpzfXfZJRtFTCNUkLLSewtn35",
  "key30": "3UC8LXm6sZjTPgHiWNGwLMAziYLGfJJhBa4JvrFkKHQbDy1FUk9xwoQuukPY6HLVNekq2fJD5BU3wC7vMMK3auLq",
  "key31": "2VF7hiZwzir86okqJbJqHNVL8uz2oN6RCDMJBLbqSYscFS6tSJhhFqK9vzGfsNzHGb2BvKUFZB7pKbv7U7UpEzox",
  "key32": "5avXqJbF9Wgz9d9hEHybF6SQaBPGowAePKJbsDAgJS4GdBD1nKnjAUB8toN3z6vLUhiEdj5iYiV9Hu578UWaBYGF",
  "key33": "5tGykDgRb6C1ecddxZjYieBwyztW1wCdys2UAoGHrnixhjTSkgFc99XhjnN1MiCHTX8Vo7sjXp5J9tgd42oaY69u"
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
