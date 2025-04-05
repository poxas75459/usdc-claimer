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
    "5VySFMoSEmbEuW5p1BiUmvNvFVDmYS3wHSAhRm9rkV2gPFjMv6Ur5izdpjZSPbZQ4BCAbMh5nsVk3eJh4RjCxaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N2tfjvsBAunzdySKuRLpjBoLB8JgfNMgNe6UfRekKyooPGuqWWfRW13YyrMEWXspQzhELFTsdipWz1GMmNEEGbW",
  "key1": "3txPzscdzc39AQ62czMyHKrCRdLXrpwPzyeaSJVDvzwyYjfbnd6kg9Mdt39XRwJHbYAS1jJ6vHo2MnNNbhurK4n5",
  "key2": "4YxUjSKfG3AZHX8RjHy3381YnAosZVs9t9GDs5FoEHq2Ywn94CKfowHPwviFieGYeNGnfUT6G9EDSMbydbFwFcHv",
  "key3": "2mZMvvqeTJ5nf9BpaqnqYJx3pp41bSQWPprjsyYybRkDMk4yL7XuUDqt1bha4cwDUU54Rog1MDQq7a3mhKpdWfCG",
  "key4": "5AeynDZULK2Ghn3ShMxG5Gofb9hXX4jsZKaoFN4iQPw2HiszsxJt8esxmTLsv6MdmrgjYZWA8h7Yr4FvGbbRyMvT",
  "key5": "4L6ypCcDpywenGryZ9a6GVQspXVjwqBbUshyzUFNqNVTDWPA9PnAxvykeJ4LiHqMmUQZuoTcnrGMQf9PWwCjvfb6",
  "key6": "2sm5FUcK8ZvxnVfz9TTAAau9vVZE6Zf168QmeC9P9QaqVnxt5pBrLSHMXQSnckhc5zdk97SgFvWGpe3Xop38XhrP",
  "key7": "wL5p924k6EmW1kp2644fH9BSpgZ3QVonWoSDTHDLjkakwCpNpaB3VK5v62Rp8mNWegGmqAZWizj3e54P26TCxfT",
  "key8": "5Rkf5kgqT1vxNFCYTHqaz6F68KPy1XJ9e5kR9xYTDuyoVwgrigyRQ8UKeJkmBfKCKJEeZBPGcBzyScKLZ9txCUNh",
  "key9": "5kH8Lnie8P7EN8Cvy74r7xRaChW4xVdiP7sCB51CBpQNwysqPuZ6F34THPfuGxiGwmdpg7bptRE2s43isaZWcpMy",
  "key10": "3jiy5QL9uUrvd2cw4U7wFaTqwbTuDvfGS5ArWdZR3KkSoRuPGDkRqVtaSikkoMJN8DEzWqaCHnX8fXzx6wEkFkxT",
  "key11": "5hJayKLETe3B7KAYycr2vLvW3S2VdDEvnDJCUkuhtEsLUrMRyCXvJGC5yiVZBNE1Angtvv9zLkvRKZf2xjtewpBN",
  "key12": "3MFBDW4UHSgYSsQPHct1cPXFG87JaPRCKF9pkYtgHjThJmDx3ipxnBdATaSQujo2zwRAjFsxo6AbYPkfaVS8ASbx",
  "key13": "51VdMmWEcniCFVYUiBy12oWpwqMpJcUX8fPGXaxn5rm9RcbLVgPmQs211sy6PZrc1JCAA6udDb2FQo4tqN8YogJi",
  "key14": "5bUPnjmioGKA1GwAt48jRi6UPfJMg4NTJPu19kU8qh3cFExqNHKBJnWFsq7ebWH6GQxHxiQGxDJ6GkvXrPZraKPF",
  "key15": "2QdyhJqDQ74QfsE9aHHxVoECqekVycViQvvfnHCvefSvXFmTdVXskHmCUve8hm36ZhkJ9ZD3KEFTAFN4A45t5RAC",
  "key16": "2McPQHjpicWYAQs2TGQ3Mf8cy2ZvzAQKVA4EK3SuYVSpSxY9TMo1mAVk5DQfES1VB3qn7yyJU8wmxiJxbpRgxCQJ",
  "key17": "4HFHGwk6FGLXfJUCGLL21i925k1LzE78GwKtdt2Ezo32mj2K1PHSziv9YXqkpSeW6BUvJ8DQLXtvAwwZ3GJusapd",
  "key18": "2ZGc7z4ZgWiNY9ET7DnyVz8nV1kwXZehy5SVHLbi628Hsoa2cuYJSxjYAU8Rpn716RquFYf9oXqV2rzkRJZpnePg",
  "key19": "xw9Z5meuasAoVDuKQdz2oizaUjJxSr9b4bP8PBniHJTRzM76pXqQaz8kPfGSWJvTcXkSKCZEUz56aH2Uz5EfNjm",
  "key20": "4EnwLEju6b1Rg3BQ3NH1FyS23s86PSHNPDorcNtQ8sN8hS2Tg4Sf8tM7XQN7XhpNGsKfCdUCbcUe2WmVMTVuN128",
  "key21": "61RXiQRjeKmJKveX4ePohE7Rr2ckuGiGFnTCDhmoP1WvEeixTV94b2oQWXTfiys4EQwXWxwR7FtSJS3X2KbZmq3y",
  "key22": "55jpb42mG7gTALwFcrh6muqap71uGq3vn6ygupBNGrhDSvzK6f3d5StmFFjBmeoZL1DJW2YhCMYEUAj69Gm3yFhM",
  "key23": "3NLHuKDih1FDRCuWggfjmqJ3NGSSCQr3s8XYgvmNF9uGP5diwdpPoNtfJAnYXcDcKUY3dJSCunwf7NwFEkT68uJd",
  "key24": "22EjjSAgza4hpDhuzg1UHdzZqGR8gaAzrttXjcyN2AVuouQbwEUqycXQEFRMvg9r3wEH8FPeRoRjwhFXXTZNS9BG",
  "key25": "5B3enW8CaxMfaWqNuRsQFVmeQTFErGQb5A8P7ceJdomHCpaKEzMsHo3RWC6WVNhqUhbdzF1DjZrb7DbdepV4qQjE",
  "key26": "iUH3sBRZs1L5e6LYYcaUJhhnLBU7ypTC4io8hVGD1hAMLpCJL5y21RUxVVygAMckiSrJXf5PpEyZyGJTbhUyJvT",
  "key27": "4DhFXLHeocGP72zjsymS6GkcDieo4GyqVaSWtF2ieuftvkr7bASoYK7GXBbYvFCEuYEqAxkNsnTV3c4wYyqqNBHk",
  "key28": "3PRB6pdSxm9keNxTQn6SsVT6gWqyDRUxyMKWkqWubrVoogNxaZKKocWAjFZ3JxDizcfQMfmRdibSVWVYcBaC1PMr",
  "key29": "2v5Mz58W3jUAf4PskkSr6hUqsGMsSGYuqHV9EWG9DSHcD67K7M4xZsNxVEn4gyFPwoeAHzp43U5WknnvBks8D5nG",
  "key30": "Nq59MyzvvLtin9BEa87C1NXvYTREQr5cpCh727nzXyrkNVJULntYrFiTcAxTy2BQkA7hLv8YBr4gSH55gCN8XMy",
  "key31": "3FQPn9Dqt2VmwCbFFQ5cdzdYRJiq7qPhoWuAKdYiEHJSdh6G63ewBv44bq1r75KX8oT4P1tm56Ki9q9T8PBE6YUB",
  "key32": "4aoHXggMU3ZqUsgGzJPzqZ56qAmV7UM9eCHHmcFcdRn3GFxpGvjqbGTxWv4AYRPwX9WaE5iSRKmhMu2tUVoHzy6f",
  "key33": "4fTVk5CzkuMwUM1LMLHAiumSKGnJfXi1qj7sF3U2FqUGitiBuXwWYjqsjKQmHmKq6v89AMn2sZc3irSa1a1Sajgs",
  "key34": "5Qon6ENRHYdwWDeC9simzs5bMmBuBRExs9hf8tAPpke3rdCJEwTk6vW6t98rQqdMkFX7sQknBfnLxac1mU1jbDSi",
  "key35": "2NCLFatBxjSBPnariujWbRP9fKaCTdrE4uJje6RhkAPfaFJPqCo63Wdp9Vci7MFwuvbD2C1Xmfuj4qnzY6p4EMn9",
  "key36": "5Jp9RPPC46gQtrEkXWdrVXJwj6HhvNxT9xLc273vg3bFuYuS9mhR7LEAj2Q7aQ7r2Kx7mwvxn3AQB5nUY9kKtLxE"
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
