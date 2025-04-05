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
    "M3z12Y4frDr7xhxhH2STRcgzNjLndQJcdhK6kCcJ629atLXz9sk66G2t84LwNYxU4kCWrYbNAT25cPi3kuQcRoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "353TVSgqyY6GEm8sb6TNutXV4yvVALfR5KScatxeEmssxTW6UTW6GRBetqd7cDkgKRXLMjzVvfodmJ1UaRZGXukR",
  "key1": "NPLBZYpRJChmisK1JxSvfUSzmGTceaWK8uNY4iECfAzLMeKvNXHeL53QsqV3J6iHXU2JpQhUNaQ51NAQYzmqiyv",
  "key2": "4CHXjJyckQ5wsDew1k9vxLuexhbQLKMjoywVq4obKc5MWDSyrrnhfaievma6PVJpbsh46DVQwwNiATV7TzqKJUyL",
  "key3": "44mFmLzh4BWAqUNmBaZeQevYjiDqx5FBE7S9QP8NW1ugxkcAMVqeCnEBnnYYRnACstbLvmU4UwjUXVmeUTHqFW5h",
  "key4": "64P6q8sj5eZ57ARdCWjnAbyswutU9dpRJ3DrXveVhuwWj4zuwFUfBk4EunJbT9NCHuzri8h8sKLbNc1mntzEkNqe",
  "key5": "4QMJP9oicUBbyYKa6bMHGAwQC1E5yUiGenJr3mnUepfghp44q2uDUQVoQkvg3kSJgyZeVy73iSsx3EmrZ9FmxQR9",
  "key6": "2gQKsfsJPFcdLhJuFE3WH1hJBVjCxkc3omhELzbHqkqvTVuoGF9zABWcpR7GGjNCGhTXEoJ5j7eHuzxLA3A6or4J",
  "key7": "38kUGwqhn12HKVRaKxFbA1nKEH43F5NCpUNPVAAg4pkxe2WgxUxQxYwhXRqWEqH8ZgwwBpzkwmobNVuLCrUjQDec",
  "key8": "2ysDmXokFm41CkxnRdcLxEjTbtCfTXfZwRqxee6dyCdCwf9EN6jZUcYVejmbmo7DooRvHzLdBFdB4e3EurLzEvf9",
  "key9": "4P17WiiDiX7GBVRsDjT5Xkh3F7k14umGsgfjAtxUGVim3rqqYh9ukga33zT7ZMFUnw4rePmobwRx69M1S5PEzfpJ",
  "key10": "2omow2gTNH68euVz2GJ1Wsxv2rmHYGG1Xf62HSCLE7tqEtbquqqM5khXgasXosfsg4qPaTZEjcx4ZnKcBLzcMEMT",
  "key11": "3Z161K3KWy44mSzB5kVyFDa3xqb4RvwCRiEFdJ2asJYcrTW8pXWCnrWhD21Pz7uNnQWeUCGJuZZTvLmBgPN6MwLX",
  "key12": "5tNLvfYusJDDwomitG2jczQmwXyT76kNUfAf9w2RPWFyo47pfyYceKc8xH5dQYybHokzoQgGACwi6ahZFhJCA3P",
  "key13": "5Bg37JGmvHYFWaZy79Ya8uLf7aD5KMqpGagCEhG3wjsHvzKHNUVe6zBatRYZYxmkLrT7dQFLt1vGswRHEeapERav",
  "key14": "XW4p4B8XeS3iCEmh8vzX9ZRwyFA8U9n6ZzkddnL6MTodKnWgDZXTscFyhhVnFrzmqXPxbBTPhHMgjgs9sU6YK7Y",
  "key15": "4Qd7aqsVLfhXVjF6jkNCi9sYwKqjHgU7ed1uFcjQrZFGVmB7DRVqDqp5xZtE5w9zJwK4eTYWFc17xU5sgxR5AEYm",
  "key16": "2Wyg1XQrmowGowaubSnPhNomq7nL8DeuXUw5fgUeZkmaKEPxeA61HtYMSie5t6kVQh5Z5NDJHWKM6y3jfFCgpvd9",
  "key17": "23LgLJ6xvreeA8rqpZEF6isqtJ13Vu5xhda9J2DsAZ9Aep7tC63A7WXGgfX8TWuhCRrgGM6b915qLggAY1rwMERt",
  "key18": "5KsmuUUKppTiB5NhearAFW81wDpH1GoW94phKGQjXkVfjKmHjtrxCCf4LuXTFXTfrBpysdzgdN8VDkFpg7NgYWGS",
  "key19": "3XUKyi3vnt12MNKE9St1zEK6fvBWwixNACvZgtoZ76z9wXuYBX4enRiCkP3oNq5gnNwxnd1SgryzmbRGfuMf6Hto",
  "key20": "RVC227WbESPBEFjf3622aQXgiKyvv25xii2H3VcugtweCm8yF8XnXy7x2eXhzuJNFhE2PYDTTbJ2ohSKr857YFX",
  "key21": "5TirwDziUFBmWTjREbSJbsuo8SNSCR2JgdPPqUrLcRZfR88ddWQ2EeWRTr1gDusoAQt9YZyNN6vHeZbntvCwYUnq",
  "key22": "v3AK1GD1yUnUyBjMrZgmSr8gu1ZVbU3n6uvMXtTTTE8nT9kzb9RPuazcczPNez7wqhtRiSaPH4h1CBa8MUgAbvJ",
  "key23": "5v76iLpbgrcPX1qkcR3qbN7Aj7s9ijfAorS214BytmrPKkNYdmZ2qHYWRCjih1Pv752VsvnEv3huwG5Mky8tdVY5",
  "key24": "5jAuqE6h5tCrXGy8dR1zMWawaykPB5SgiCtGHxzrNjUhdwzF6K9zZ2VxYVtrzQ794QmXauDqQhds8E1xHwvhF159",
  "key25": "4q24czNC2qHRZiTNPDWXRtPPRb63LzLCaCocytTgu4a9vXnWZ1MgPfCT4tCLBSFephGbWfqXNVVS2poXTjJYH9ry",
  "key26": "2YHFf956CHihfUjF91W5n5iHbk8onNezWmAYnBu9zWA2RAn4e1PsEV21NosTrWAJZbKHHbJqvpiThtrWxS9br1jf",
  "key27": "5cUbMfFV63UYaPJneoRUKrSC5m8S54rqngh596YWnuhKciKv7e7CkoNvzK1ASemGLQ7JAoxGYTksVVoNjQyPybU7"
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
