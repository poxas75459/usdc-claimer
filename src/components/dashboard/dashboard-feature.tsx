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
    "4WYyv8LjqVGhi93iyHMJLxUWQ17aXnCKvXyqpGp8fJrdJDZ8pn2FVagvfXamSoTeaHYpnNebAzYF66G9FocaL4Zp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3buZ96ubCW4kTNZNu4GFsWuJRiMZUqZEkbVYMzHqqkrsUC9t7Ek6RtummvzdEvJDjQwWwWRa1ypqanjzHjNLEuys",
  "key1": "4PLUcBWFoiy9Eg5NvTXFXEvCKxrYnEC3t3Uz9NiKBHk2HGrkp138wEayWrui7UDxWhpTzcLzc26wXCKT2RCXDHeB",
  "key2": "5pj66XySNhqr6HpqRMjJC2uZpDnud5RA7c1vKNtbNZqZuzfdBxseejsBW5XRDbFdwU95KSxEHfXXymyvqwEHzZQa",
  "key3": "3J8eY4rFiTa1e2ogsQygjtLbN9QSgpLhd79rgY9wa3To8pquDzqMwM96bsxCUfevsa96KzWSRT7kHmVMFb6GJctY",
  "key4": "4gmNR4vBA11tsm5qXRfPogSEtzUPNTBStEg5Dj8efRQeYKd5g6vcf7F7rfeAtT9Y1svpY65yBAueHvKo3dgXf8Ef",
  "key5": "3XoUwZRpiNWS7EvrcJFPUVu9CHM3tr8ayYhwjKUkFcuPEFurGKyCpEbSz9X2bs7akdZcrZPojWipBYEeN33mWE2u",
  "key6": "vRATEgw4PJd3pFxgZ2711DkNboBXDfxAqUefV6ceKzhdsivGkgsu1biN47L8fbaXjNXLDCLmzQmX7ZX63DdLw4h",
  "key7": "z9T1q2uU6BecaZ2iP8Bgnu14UPTHJ53m4VoATrQgx2xeptMUkDP9qarCkL1AE7yx9K7XMMK9s9cvqgc8fPgCASi",
  "key8": "2E4A3ivkMMFDEMzom61U8ZMZpdvLTvEqXkPxwsTrvKwh5dyTzYYPJzUgbx7rw4GKRYwiswd819i9qxjbfeCtxb9m",
  "key9": "4hFvjUeSchztJj61dwrXP9rzg532xUE4hJ2D5JuspF2jQWqnEhzrNjdPcDjovqc6sccxT5DkA3uVEBibtp71ZjYL",
  "key10": "3JKdjFch6CkXWbgzwVtJ9D6za8xxyhVNkcNxHBXZXCQxfzwCQSDbDgwksdkR6Hy3yu7H1UQmgKC5Ysftm48Zxn7K",
  "key11": "48t8mTxVPTw14dMTb7hzDAGdit1g5vm9TcE9zLuaHYHQbUqvXv6hjwwTKqcqGG4TG5t7DytQjJfxz4q5zJAPdeo9",
  "key12": "J9viGN7PydEjGUNezrkQDMKxP8fTKLE91yGon27dPokHzJcMfD9qgWPbzUX9fkau3ZVdyL86cUPnr1BvqYENFuz",
  "key13": "38kbWD2uk4Kn9Ufn7qNyZYEN9TsPDxaA4qFrS82npjo2U5ZSgbw3CojACG7kUFL25pnu9v5i1ZiPdteQPsiJDkpv",
  "key14": "4NBFtzCLbeFpUwj87uvyYefjSywjgjEMfTGggTat2FHgvRg13CHZSzWoRTaApzzeRMfFr6Dq2h9s1gszWwZgLo3x",
  "key15": "SyJgGZGM4Ke2csnKR17ik1xdDtcgYCRkxd4eaNnAuyT8MPQDetstDmxiBVtz6vYQniKKz5bjyrfTjWfUmt7cHdu",
  "key16": "3zBx9TFopAPKKphXyKAcTK95vrLWFqaXNrV7JaNqaXwchcu38b6RghmBc4PuP2nU9qZK71tWhhPDexeGyLjco5J3",
  "key17": "127VPuQRbPPTLhcdutm7gVxjMootyBkFixBK1MpLzjxe7Aqp3FFotQD8pfzRmH1wgAGrBpVk3TZ9TDFchcuWN3ha",
  "key18": "4MPErdFCqq3MmMo5qtiQjyVm1Nq4Tc1YzxUMZPpigx8QE2S2Ph6hzyiqGzCT1Mqqn7Z4nzLSW5JNhi9Naz2isBpi",
  "key19": "45RPeXKqeMUZ2NWHKKMr395GbPEb1qL7MMT6hvWvTUuj8Stojndk2ELqvjrQWSSPQAnvtbArEi8bkLaJFPejFc3R",
  "key20": "4S3W9AbgkTwFpFjndSXB5iQsc6UoF1oBFLhBRj7z7YgUX2XFLssUFLPCWQTv2wX9B1hpFCp4zH3vUe7Dr9aqqRQP",
  "key21": "3TFuEn2rQH7usSh6hA9MRT2Mx36zzPgksmAbSDniNX5xUiHxnRL1Z9RJRC3fVCgakPJTPsooTY9AEctdLiA7u4u3",
  "key22": "2HRu6Qj5LrfqsZLhhtBH3xogz3gwss7vBjLZrt8oAwfdNJqYzkjJMZokVvTYdV7rgi13xJmYA8HJnVBiQTv5oUsG",
  "key23": "4L9YriyAGDLrU8JaHqkfV6rge3cwHtoTs9ri88ST5HqBpvboeFhb8L8p6Xza94fbTnNJXiJA1cnfc7UVXuy9CdCA",
  "key24": "3e8ER9PzUes4nCP8xULdoefgUeTgohjMD2MyJpuMgWcq1NviT6H6b2qw8wsEkN2CHe1fwstnWUZs716Lxj3z1SQm",
  "key25": "3cAVsyCk2h6WVas3PhJwk9jLVWEUj7iUEgPZcgwHjmGP5QSBYuAYhMYYy5jZ3N9dH9kBtFUQ7yjyjcghe6s6y7Yb",
  "key26": "49udy1V1J8MfXZ3HGX3M9oG8c7d14kFQg5JYMCvfc1BEM2tpLzm9B3TYF5yVddMbmoUxdxFQg34UKpRYkwk8Jz68",
  "key27": "u2zM25Mc6zWExSZnFkH7jN4cJ4z9goX6DtiAXQrAxJ4swUmtDsZSZi86YLekJcNfNwwif88Tf8Q7dEqfEc1dg3W",
  "key28": "N72foSCzgrNionUvZztqCoeBQxkuECBLoFnyhcRNNw4XudpA1NSsfeB35HDNJnmVWWhiMtu4vRDWc2XyCbRzRQD",
  "key29": "5SaUhs6yAJhDGwbTyQweTB5ifS4tEgDwCnRSA3kAW5qV9pybagUCiiFasJE4aqwnhApmsYxxRSi1WdXWzk3ko4ZH",
  "key30": "2sDWhDsf5Ri93WkungsRErCrsHFSeKCeTUKkEv6ppW8J8oevvpotnVVvDs65YF2dDAztch3TDBq99h8Bht2acGCw"
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
