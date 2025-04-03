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
    "3fsoH6qfAqYoABg4k5zKt9ojHXEEhV97FA8JCv6xQ87o4AvPL8FdAcmcwmCShMVtsCJ5pk2eD2aEK7w7RKLSYumc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wq9sJ7rqaHqxk6oSgo2PhdgNsFfSC2R8Sh22mThdfqHooA22WRheosH1KCPF9wP4pQMtsP5J58mjQh1peC6ssea",
  "key1": "4hUm7pCdHHYeXPDPLcLpXD6e7ryogLnyxd3WR33FjU5YqCpcVcEYi1r9XvHo6ZeUoQctjL4MLv27ZYrM6Q4sK8xt",
  "key2": "HL5gyvdQQNc6KBvTNDmKTF7YofQRv1yQoNyto7PiAnYN9yU97PKkvZqUfsM3ng8Uz54YK7eZW2yZFBvha2NhfFM",
  "key3": "2Zci3oSD94TVmH3LE3DmZUDHrT5PBhDdRBANWqAT1rRLbnn3PUWt4hxBnx9ph7W5iYrQRCjsTrmhwxN4A8GXSjmy",
  "key4": "BD5AyPzrusDP4shKxWjMftQVHXmBVCsCqwgEbXtYcYd2zvJ19TCGp8xuEQ14crfjZ1FX1PahZVnrPqPBBByYJyT",
  "key5": "4rfYaQMJE7M9tQ2p4RzqouHQqzqUN8a67cPPvSM2cLLJDt7AANDCtinKETJBjvxqDJwfTzsBpCfSgqQ3fUFxGE2j",
  "key6": "32G6hhcXkEDPpuNb5BgyoNGXvxdAzd25vJWtDMt9AABP5nhzZQHpdgVJMBXdn6fSgsQjKW8JTJZHh8LtHGw3VHQF",
  "key7": "3iwtQQKu9Ppgu2o72wicftLnDyuy6vHPULgH35RJVTc8y4U1HQaYsL8KF4jHWvXwbZGuZodvQDZHK4DeKJ5CETmZ",
  "key8": "5W4sCzfyPHcvAotA298jzhPBGbAHm3kDA4NqUFwHLbTLMHw5BwJrvSgQ89noQm9iypWupk3FVmHYYiFo9Pc2V23h",
  "key9": "3M78MLEv3CseUpq9TdgzpRMNtanxuij7AHYPQncWnL9nQM3zf4o7oKn2iCaB8TdjzwqEBEq66r85oAJaz8tmhbdR",
  "key10": "2ZZyi6iZwQCyA8Kx6o3fASLGCwKoCZSf9WF13DfYrcjSbfTfjSezyPFdUQDwj8FWmVksa2pz3hJANVb5bAg671hp",
  "key11": "3QJabKgkjtGHMXTdQP7wRFF3DG9PLwWjAJjV3MyPXAd8C8d8cQJVY7L1etii6B6dEZyZV8WNPA9sXgJLFHsq5saG",
  "key12": "AzgE1aQzppnPLgU1f7e9weUJdWHNWMbB2B7TJ2FvAZqHPJChrZvjMhDUvPCrg2BHpzSEFV3nVMfWtBpMeTrWsWb",
  "key13": "2kDCkSKz3z4gXBRESG5MAhzEawX1ffdVT9Qq5n8HsXFWpjG8V8WZqAbTDwtRjrJNp9GNwFSSYFBhviJdszJEtYEJ",
  "key14": "xLY4yAVQ7ZcpTWkVuKTd2MBoNDsdxabwesJT3uickxHoXELZM2gBzsrD5v1Bp7rftcmFVDJiQfHEx7DLMsvehRZ",
  "key15": "5bornVGngVhhrDXUHVHdA8Uy1kaUL1anwNre37Ss2mfQboeh1sMfNRya6o8tQ7kTsyQisYXo2aJHamMFnY7iRrsD",
  "key16": "4KyiK2CkzdVwRGJavZmZT9RZYR5etBLFwAKmCj4iDWWpZ52ZZUzxnVcWhHf2TLDvkG7mZsFGR4Kgmyz8SaamCVYd",
  "key17": "5GHEvb9VTdha9rXf3zCJJBkyBZf3Xjsth2ZQtFtBn6cLRXAppAtEZb7Rug4cf8ayxHje9QeyXksNbpurJfRqW19H",
  "key18": "3Fn6r6hmf78RkQw4sWH1VZAxZiEt5w8oai39iXDAxAjC9Sbp1TZm6fns6jpdGY3fjhLtpFRBhas7LU8ofZ3nsBpo",
  "key19": "2G8feRkeZbWHqqnCCp4vfcjx2JmNvvVaDNG8qfde41n9WuXjdS2Tn4YPvpj51PdZxJHLpNDRA6i7GpXPVBpUrXsd",
  "key20": "ED27LvSe5Kic3CZ7j2zDR19zr29d81G7yvauf7b9B32RmTivJZdC4ynNC1SQaeroCACy2t39qhZ9qBGEZrKzcxZ",
  "key21": "67LYrYap3DC7VBNrQgkpBV2qbXX3Lj5VKnhKE1ue6ZtBmvtJRfS5m4kpmca7FQHoo1SUSihPwrBtK4d1w6EbGdJy",
  "key22": "2VEQ8njqUZooec5AEFbvf8Z2qgWQhH4qxizhRF1W4XTs6oMnruMUX3G98hyZS3VWFeE7NWTVVE38TNZG5qd3FJhR",
  "key23": "nZ55XyhfAcTxNepbsCBbVpwKNPwuGpCQH1JnvaNgyLcpfTyySdRkVhTmcUeuhfbz44LZhrYc42qCXFhDQ2hWii8",
  "key24": "ENyhk9jvcuGdQnefwahCc8ZtXucUCqKAiDm18zXavja4mFx9mRU4nHBPxrghxNgFJTfa6GTVxnCUvfaJf7xMHAF",
  "key25": "5pveiN1BrWYK7cndbrD1LgSHmB5ek9qopdsHsx9Rh5gMM6xBMrC8fP6CkV2CiHfxu7QCjFyjw9MkUaoiyXhwUbwL",
  "key26": "3umpGytmgXi4e1C1SPGhcr5hAFjs5gPCkEe3THKFGwY1aFPGoT7NJhUd6VfmFC4W2Ra7cWtiDmvh8mWjPzddnaVR",
  "key27": "rDT9YBHamMYPVrWEhpxLq3cZi7zPKrGapnUF4Dg15EhbSShPp9L29dKB5dAM7JRFC4h6o6iXRn1Dtp65eoCanZS",
  "key28": "2vWY2L2Up2X12chnVA4VeFU9hRSQgQUzwttKSqBmtuAwfwAQr6QWFi5zMV3SqKH7fdtjKPtgm2QqKBxheDRhgddb",
  "key29": "2HJVHhA4g1p9BmD5xV92H6UTpJLkxZpt9emZkMaNLB31EQMW3LjvJCk9TezUyknMpBk1zvuvVNKiWBAxB18J4iiK",
  "key30": "2YKGM3JF1MmWC5JdxHEVUixYpTBkb2uhuvPGuARGhgmZo1P8mUCS1Q5m9ezcAtEawDNCDhqs3hPMuAv1MWaW3uTU",
  "key31": "28Jq1fvb2PaJ1tpLDc28xf99R93gjRt9Hrn3uUVJpDHwGQGB6BaMQk7P7REwfgzhMkABqzn3tKeWeZ8Tt7T2F6PF",
  "key32": "AtRSxAmjAvoVcDZ5hryfWt85KgVT8YcP3fJNHWfde29HWNPJMRwUuvX1NyNZWNF3HNrrBC1e4B9Q9oDugqpQYZa",
  "key33": "32oStyKo8EnHf17eB7TXEKZGudmDC1mAztHYtVi9JkZGFu8WYmn99LwgkoxLUM5WRmB8kC1FiGNXPtaquNQ2MDrb",
  "key34": "2UecHVdWEVbbGDLopZ6Jm9NL7XCesbats7YSzEyJvEEpcEyTQ6FMi1WF7ByXiLU6EYdVfYgtKN1SQB77CYeZWq4A"
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
