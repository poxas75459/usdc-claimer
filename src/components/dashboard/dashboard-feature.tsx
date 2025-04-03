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
    "uyFheLeSVC2m8DdWo4MBG5qXB4HyPXSfRZfHt5o3u6cLQrueRGbUVs8MgnZQesBbJbMWJUj26zNMxcG6ySMt3bN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ua48MjwNqsKmvzXvZGDGGthFhQdAg3vNVSmbR8Kdbx66KTePKiRxSY3U3ouYHAA3ss2tEzCZFEPjhoxNd8ZKMiy",
  "key1": "5N1T7r6opVQMFHWDzhhSLnpTRWhVqkowt2HvVtebDwgs7jMBRUfNZ9MgGTjW8uBzHkuiobrPmmMfz5NLrNGXfobz",
  "key2": "2WrQ7vxKpcPY7aiEfoteULpPX3kQqB4DuYMurW1ZFGDEvj7MGkPvAMqnVtMB5bQZ3xaqaLhqLFA5iTRQKnyJCyS9",
  "key3": "5RDTAhQedPro8DikAusmRoUappAJ3QQAJ1X6gF8pK5QGPau6KoAy9qDaKzHuwiXaF9oYdN8ai655NLDpDYDsiNPU",
  "key4": "mRfbigwBPLXfksSPTjrrvPsHW1c1KKBC1RhsdqHHM2TsE7ss8mLVHfrVBhyUBR3quZ2kp8C9kNA8xh2caCfvKTK",
  "key5": "DzMoofvyfow8JaYtiqCo71UTgkDK8SwR78SmDY8FWJwjs4azq6a7mZE6o53JkxnFrYEwDt237E6b9mhV6atc1Qh",
  "key6": "5t8x3s7wryupBTFTGe9yCP52gvoP72HXc1LTisCSBRye1PeodJyfpHdQYXRv1sHSzgBs6bxrEjZVePG48i3JJAW8",
  "key7": "2ofcN5ZaGqXPu8f1a31D9npbb86bvtn7ufxjTvqtPvDiFUyWvwr3GmsCWSLyrLniX3x9RHi9ZidpQiT7hZPbpAxB",
  "key8": "3CiiBXaAm8tj3xq8rCYrVayitWBoM48cMebVoB4CVVk41CpV4JXdwxrRLWhCW69nTat8NhGhrRezNSUDh438dt5A",
  "key9": "SzZ7YWLxr9wsAwtkZ6sMHMjfWvW7aKhFFVYTCkVb9Qy95naeqcYG4H4TJaL2gyFZ72Cj9zbxsDVLSr6ybuC6QHg",
  "key10": "3fsbAVVwTtFryK7UFAsL2UN7xhxH72aGJnq8KJLqXCxCXNXRChGcmUzVBnZofwammjMMzy31RRwBcMJS5FPXSbRE",
  "key11": "4UavxjATPv3fSLwf21cbncU5TAF9eWJLUiYkfXgisiSjwq5tYgHoRw261e1ZW43UVtiLzv29cUiPxzSXvsfr6C3j",
  "key12": "5HpWW4exiu86MxVsAdZXpz3gqCK8mW3f9SZWGUmRvwKqFLnQhRbRxAeLjogT9PUo85GEBjy3p9HhDMpUE6c6Qxu5",
  "key13": "4S22fXvZ1hZCx7JH7m81shN2cVMAChxWpyoWGfnsRLFnadVmNswP5GA6a4H1MfiXNc2ykHTgndWzBbknRAJCnk3P",
  "key14": "4oAQ6pkBeeEbqGXDh9mh6czRGHE2z1XnPg3Z7M9vgHCxqqNjj3sBmgKBSzvUFWXkyNCcivfPbiquKvjm1iW5Ei5D",
  "key15": "4SGufNnoyHgeuyN8Wo3mq5yX1uuG57V9Utcxhfsy5uru3LfZhwN6bD65TYUBSudj6SE24QcZtGuVDwSkBG1CTch7",
  "key16": "4PWUdCRZHBK2T3WtTPzZtvJmS4c5NU6WDzYqduLAg9Bx5Y5gVnA8ouX3zzG9ax27cTgoDUgiYZAVuiRbqQZcBYsy",
  "key17": "4bybVztFbwGBotRszj2E3NqvsXYEY6y9Ki7Htxa4boVPCAjmBYZH4t5jJzT5g1xjc7vaUmDn4ng8T1usinY4msg6",
  "key18": "cFaEmVg7aNm1aUReSiWtuJ336uB2oSsmBU5uQBZqRu5acXXcf4CMmBB4QQR19QwustmGFA94Jc1AgHufTq2BVbi",
  "key19": "5W5VtvVvrgx6PRvcAsC2rnLqgZkw9Kk21UpeGhD1SBZieAJ66a8HTx4hvamWjdedSiGjzNyi3tHyRbCtcVqLkD2w",
  "key20": "4kbqm2nix7cV4zksRaHAfMqgZd1aPhDGWfKP1cArwGmhd1meo7hqWjGPFvmr9esq99NjGtKuz6rhTcmJtgPuZpjr",
  "key21": "3S9rx3m72jf2aWdFvW5SZh219JjXzV6y3W3i2DHh3QooUGubFvf6eMhkk6Pcyd1LNLwp5vr5U7zn9vzZS1C82z2q",
  "key22": "3VXh2Q9bZppJE8xPixd781EDaCpGqAusRtkaNAm6bcTiLynFpfdTAUVH2DrXXy3Wn7WQzgGFzoSRam2EckEJZGt5",
  "key23": "51oD1SB5SbSEuCbhxCXDRgjvs9wPaUPa6YhcC7fBwTnuRhzMJWofwwzc7RC1pmFp7SQ12wuCqyVv6szJD8MUaNra",
  "key24": "4uYmvysFjXc1dapr2HG9C6BM1arG82A3gP7UcH7Tmph56QM1rBS89ZmA9XqMnYT3AhPvmMVHTZ7oLcfRHJBZ4R61",
  "key25": "2eunmGMCyhwZz9j2saPU1Pm6DFydaJCbAcQR8P3b98sHT6vAiEJ7b6k1a5T6QbXDRjEZhe6Dm24KnRSW8TyV2Hke",
  "key26": "2EGesPzKb5y6xMkjuSKhFFmjTJTUfcwqjnQhxE2jcjxncApoFW8SegG7FERQktTwsKcbZgdsTgoVW41UCQiagk2J",
  "key27": "5ASRxAxhLZFhtj8kG1GXyxAvUdvy3FQG6TczRTdzrkmZG3jFZKPRo2Fdqmwn7dDn7YrJ7iWzXQQu7abBhJtp8UKy",
  "key28": "2yevfz72FdSrrnYH5vpmroiwycTtz9qofXaJbrg1YvT7KvAxgyfwtvveXZ1tHTxAnN65hGnUMw3mKgJ6oPWBcb8L",
  "key29": "3XhxL3PyecUqpkJvN9LtvqSW9WaHPJ3EFmCRukCdSREB5oeH7EdYGYWgZ7aaUR68eEwJ1D6oBnhLPSd4paSL78kx",
  "key30": "39JX2reYeCJDBKJS8xHvwRvsioNmxeH3m6zFKUhVzZwdt2b6XXHa9ZV6DuTNY4JASD59LEZTQMsR6MNYeMJNsZie"
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
