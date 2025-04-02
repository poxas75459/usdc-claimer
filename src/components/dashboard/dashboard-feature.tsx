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
    "2DZX2ZRp1JNtX6bDp89vKjh5UjNA7LMPBWQG6SnE5CMVBgMXAhnMBrgZE2ziZW9kXwVRimvLEVNKftcCw7eTw9h1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xkWAbc8o9M9ajcPC3astbCs6LbFRMtXN543ybaaDBPapfWgbzUrAA918XS1QrD6iLkCpqFXimoACv8mheYNmWkY",
  "key1": "4bskzgxQjLxUE1QDQYwCGNDzZiXk85xLwh7WpGwms8Digc3hR7suDZxGTh13LRaHRkBMwP2Nj6kTfcXT9NKeqPH4",
  "key2": "3dguqusbfPC2epRNHMHSUgLDrLtKz11oj24cLt5bn9bU4T9qKu9YPFujFLY5ELsY1yjBaiETRjZ4GQnWcfGepL2X",
  "key3": "3DAyLYdPCBSArjcSkRggTBUg6JQyxeNLdDBYYQxM6CCCBpRAKrifMyCjAkzUHsgwxN4ZFeMjDy4LX5abadYxehir",
  "key4": "2QjSZqqwYpT62BUzkdhp4zkBzhUEPLJdEB88yX9iQcXu6xvmm2jnrSzZDuXV4tnxxqmyXxEMhTUwjctPyy1u8Vv",
  "key5": "WhuiE6xW7Kx3gZtEAgb1GCWmMXyJNzuvBaGQPf9MbMiWpjGMbnHdfbnWpFk8THVnCafpuvoqvXvoPskkjimUDfL",
  "key6": "2EbG9fV69L5RjPqBvYiQ6JAE1R9w276MtLGhLU5EeiFjQQig3ZMJY6aWQEpvR7GxkCXmai3vgWt9e4mZNBfrmcxS",
  "key7": "4eP9F2AubWx5ARv59J2n5X9GGigevy4MifkH8235yTtYghHyTkfgXpSLEAeL4M1K4xaZNxQMnFz6TUGsXE4TTcJm",
  "key8": "3i6Jw5Fgc6A5Pg56hHUgs5YpeiLMY9QfFNj8aWubQg3YjP41xpbrjBYbzt5c6oypcR7FAmztkgbRLyCLYXVoq7qj",
  "key9": "44fXL5nfnc7RVKNaC8aXpfYrdq3m8nLKnTruWsfGp23sTU6WQsPB2sMbUvULLP8CSHScgdXb7dsyBSocCSP9T7DG",
  "key10": "2FpRErWdTge9Ri6eJEXNshsxTtBF4auAxh2n3wGuUfAR6ipD4Pvzuyifh3ckrXGGxJzZSn2pGfEXzfx8CiqjSe9M",
  "key11": "4ZuxnYybN4x2T8GyZRoUPHj2SSmuo5Xx9YVwhnG4ARaa6qYyVpKxJxKiZqE94sv6wrKQ8fLHTitetkdyFushgNaP",
  "key12": "3rxaa76sxLgBTd76E4ZZqVexNQUgAsFTaBg763ZbP7jVTBQteUPzKr1cWMCrQSjN12ueFzCJYA7DD85pKwdZeRjg",
  "key13": "4StKqHSmmEJdfWLPyVG7NsGFSRjrHZWa15nkM9FyA3wPwPuJ1d8fp6T83x61xJm8NoL3jryauzurc86Qs3bhfbmV",
  "key14": "556fr9kLrpcUtFpS9kFqSbHH4EETKpCevbFZzA6tiCMHmy89R3VF4EnmqYmmy5YCsAyurukW3DdVDrLESPWKLjFu",
  "key15": "2xRTP1bmwgS4aZMKGUcpao76TWt1n2m6xGednC1nUHfhrYcGmRcR7Wu9adyYupaM4wkZX552GsDHCp5urNmt4uBF",
  "key16": "26sja4fZCdq96JbtzNcYYRZQgDEYAeHSNxeDpvXm8MDB9ebAo16Zih2EkFrd1Wfq4oHuGeisDxhqURELkzKkVkjq",
  "key17": "yaiuPWMFhz5wexXRf33cxUThZsjPbQsVj63kN9tq7febMQToGq5nYetFL7DLy1mdCyPFpwTnVA3cmRaUUgs6xVC",
  "key18": "2ubz4Zxgzxfxt4c8fBRP5pvgwmzMou6UKp284u1a98PxCmyzXzHYnGp6ZokEQ7TMZS8RmQYRLEw8VNpdrcXzxryc",
  "key19": "2AVmWmqQKphSn6XQy9FcLiAJNZRtyimMjg1tz2kstJwSwTu33DEEmQ8ohfpEnvFw7C7WubcCv6U8h7LboXPdzSVW",
  "key20": "3JuyA5FwKWtaTAPJneTC54AqWLkQhRES9kwgXJ1vrmDWBPCuoKuqUxzjSkjtRtVhjx8Z9brxd8X26sLukMi6pg6h",
  "key21": "5NVoLb2KJhXPdzBF63gUCQgx7ziUD5Bw6Q3xQPSGBZXApLq8WeYVZ6GDwCvnVaanNsCTFzdDg9CEioPh8phCzUTS",
  "key22": "VvoVk3LReoDt8WdPW7itgQSV39xrPHki98tKv8wnoRwfKZHMFegH3EaoApPHFa7b4RH6u3wedpPefnzuRt8byCs",
  "key23": "22hzeASexFKssLCPSzY4Eb5eVAYJB8V3DfZuQ4AbLgQJUxyzgSMYxL9KwTzQRq6uRe1EdrNrXVVBKpiXAoxEdaEh",
  "key24": "4YFV5ncnHSmE4TxQZiAW29ouXxfy8M79x8NuxpVYLhqbkePgDJBPUvtKX7hEcn1QmuFfvFMFL4qgCNXPSDE6m3di",
  "key25": "3mXv6Qj9cc8EfmwnpX3C6M8AuSkZubsvxzQ8Ca1dUEfiBQqJXcfMDMMgQBZf2MoNRaf6M1ZAhkjJyN1H5cUAzAx5",
  "key26": "5yzrWU4AZMU6p4igyWkXwqRiCzBEyTqmrvTYiTCixemVcd9CW3d5a1jbs1T2wksBUmXtSR7zMuSn4MztugASceFc",
  "key27": "7SpEjp983FADoaSyjVittsaqbhJMLSFnvsvi4AoxWLhVqmavv7k1YzCxBjWq8QG5FVBcFKjXPPRhC4hAQioGUkZ",
  "key28": "4jBA9vGncjb3peMVzY73YcUHiuDqd6MfPLd2bvoeMQ7n7rHM3EnM5HahDo93QCnFvrKqrTEp4BW9mDC4ZTUfAz6i"
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
