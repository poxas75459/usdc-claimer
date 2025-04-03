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
    "61Sb2bGa3WhxxXJYYPDDmY5sHPn62AnGEwNXMQ5F6aC9shHGF79QuEnKMPTePbFvDYxtqXZS8DePj5381L43uTdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57JKGrRDAApmUKsH7y3T3B7mPhbTypkvWVVQG7Rc1am5LeYzuv7T2Zt8YGmHcVx8AuWmMuu2kUSJT5arGMyxHuhz",
  "key1": "4GRxAXCEPMMTyYNiAkcWNcrm1Uv1GxzoGcRNuH38TpKfXya2G8pPWru8eYn2jrw9FtweTuHaGJ7T7GQfySFhrztZ",
  "key2": "42CEVDLUmfN7f9624RB6mhPs5JECTwgASPkAisKRKvf11LuRj11RDHyJod1NNcfcAjbSfGpsUAYDxPrsZ8VbHDQ7",
  "key3": "5JKb85fhmqAAbdYoQ4GU8WeFWoa4mWTBxBBXBPoTHxgtFk5CpXXwTdiWTtTfTm8BFB5ckcg1Zn2FRnLibPk8z89G",
  "key4": "4JmHqzmxVpSCkvuCU5aabANSFfqxcgkQHqv5A4NFNeDf3viLF8GXkDmwZUNWGBKG3H52XpVmGSbbGMDCKe4ogvNp",
  "key5": "4tkPPkkg1vu7v8jg2aSTLtzbDBNKsb8tUT4HrjxUvmgHZCPgqMd3QXWNVUNwpYJTkbj8E6jMumUi3ViMu7QAv4R",
  "key6": "3gyYQkJoMb5Pr8sxioDVt1oRjyrJX88tsEELuu1gyJHo8qyVQEDKVQmiEyXKbMy6F6wvn3wxfadgQQU37JD9LPb6",
  "key7": "5MXUm8ThqX8msrrMHPandvN91z2PEbN941pvFXrwAmMvVZHsgPSfwCdsZjm7Ytah48mzC7hbmG5fjcp4cvF2C91W",
  "key8": "Eg4gnAaWx5WKuPeA2gbsBAoR9BsqzbxryH34G3zL5W95trNc7WWEyJDKZANUDfzb4eRriWvnXXr7aD6TigR4Mz5",
  "key9": "4cojEwWUhkF2VJ856m9XcroG4Zo75mSqhGn4T6BGrDxwEYAGbQyqXPhHAKsQhyz7y5PHLmZewcc5r8XjhF8uniAK",
  "key10": "oL31pfKTttHt8d1PGEScDvJwLqBrA7nJHdG73Khyj6aTn4ddh6SCVRiMqFYWHYHmzopfXiWvUSJZRBjwg6b7FhT",
  "key11": "sBCYf8i2BSzM4rP2Z77RRHN3Ni2gjCxAzruKgDJGjiarvwL3YaCh63WRnSZm16GS4eEHPog5fGvWmGt14j1CYKj",
  "key12": "35i7FiGD7Ri6WZvKEEBse7L4fK8LN1jqgG5LKkPoSttJbz813qcW4UoN2UXCrGyZpX5Z2RcWbAxBFwC5jw8RUxTa",
  "key13": "5k7whABCZqG8s6cWpK5JJFFCLPA7CUCzAwbg73HFv6SRAVKPQjo9PkPvvF42BbtbVFHV68b4tjooMo1ZGjEJbi1T",
  "key14": "67FSzmz4vaCSeWMUgEqBtaZoDY3nXdN3w3mDsiQ1uZ2MpsqjzFHuDVWwUzwo5VaKtz2jnUTnpgFwhAYD62sKi5Le",
  "key15": "26qNxuz4hNMh8qB397hfJWWboFAisehVCjR4yXtE1or6ue45AkpDgXtNazNkxkmqct63wDZ3G1QmGMHpP1VceAkQ",
  "key16": "piU1ZudfF82MMZ9bUZGLmQvB7UYfCmWbuMBvDFx87CBxB55dgbcfBAa7wx6d3jtR2LXmtB7PY3mchma7mE5J75v",
  "key17": "1yKDMgdpWgGwc1AHh4WEVVZNoHLXonDehwGkqE2pKX21p55gMPxtnzM699z46GPh3jaC9s7Wqxvp67GoRFP7wVg",
  "key18": "63qTFcYBMUk66AVjMQXFwTuDVaCbdmV4r4VgcWn6rMVnVZ85iAk4CnrYJMo94SJHSU4ExCSYYLqUM19oWeczttA6",
  "key19": "3iA6Hk7boixJtDjDzmWmY58tDfvnepPB4GUPQVmeBb1ogkTHZN3k5zHLeMR5Q4RyLetou549ys8YNakiy1rP1fan",
  "key20": "5LqWreFKELRUKNauuDQoHgZUaTUFa6JT6uBVPzcQvKWCvwPc4zre6UJN1SWczUvgkiZN4UGoLe6bxaon96D9NdBa",
  "key21": "5BcGeeBovuKEitLun4BnFXaZSZN815CD6yCeeECQvNbk31aCLATBRb8gE43dbxkv5asp6acx2VFDdM3xvxK7fVyb",
  "key22": "2kY6aLimKeDJxttuCTJYMm5YaoUKL13q5NdB1irTp3sBg2ao4BLK7TGtJSEWHeGxgPK95xAaAsDUz9jrioWYdrvf",
  "key23": "3rxsFTt5bb1dYvmpJZMREK15xtZDaCDgvirbmDhEmbgDJxCKr2AeSPnrup4tvV7AGyZvc83QfkayWLehYoZXmDAW",
  "key24": "2qnumm8eGxbFVwjUCDjEWapvwVPLuvnwz3sUrexz4zz1oEvsHJHiBA6JwqXsyKzoAyvsKFRXhrBVwt7kAxkLbQ4m",
  "key25": "DKhaiPnC9JoG25GCTf16AmS4GaySbdNmfqVYVoN6A5gcUjJkQXxsL7yQGxqby71rc1u7HHrXFTV6ejZP2gtiQ3u",
  "key26": "NRTWV6oX76uNDqWvhqzjQu7rQBZbsHRhcDdehrbHBvBn9dtAv4pY8DikzqSye4r7ZZKuWC8im6AK2PTdZzW1v1R",
  "key27": "2Zkj5mrkn5VYZKe4iqW3KMDKRDbKryczontsPBkPiizD9pWezK3LaqSTcszcrk55JyveQRqHNikBxJQ3k2u4P6Eu",
  "key28": "vKN31fr7paHKyvL9s1apw3WtYYAPPPCYNUQ2ZLabt9nAK6tQL7ZjLhZtUTRxWn8KUvUq6LXDqUjgBF96BHLntdV",
  "key29": "5RFtM9xEAnYfzdSGmBia66LtwSVxELrYALenYsXbtJy8fLAtchHDCuKoM7ZMrjYqVMBY4cRJKQDbTMhWGspVcDFk",
  "key30": "5gE9ZqgcjS7eVZcaFn5XHiGHgUrbJJ6Yr3fLQzDESATsxgTd3T1dUg3yDDXBAEHHjNPxmZ9vBMqDK9bVj1wFXCSd",
  "key31": "42rRsm8fiGB9WNuQbQZ3D1vQNiZzw3qHNsjwhnmgsFsUvByLvqT42KrELbBzX4DC3aCzf8oKv9L6MY1yErT8PhTk",
  "key32": "2uxaW4c7nX4XhZp7KnT4t8imyQbWYdfkiUQy6VQAUJ51PsA7ZKzYWvEUfGE4wno2Lf6rHabAeWcyw4wEBkxTtHct",
  "key33": "5wx2yAFxrnomQtd5VpP3FyD6rZMc4FHjNigPzn75RMsUbmNLPBvoV4krY7SaTbuudgCV7dDatU2qGN6k3HB6Bzr7",
  "key34": "qqDWYhU5m5NvZ7gemjeAVW43CxqAPozymwLremALSTJWHVttY1yvYeWcfgpiTY6aariRaZcc8426VbSxDp3mpJU",
  "key35": "2rcgBVMnweKn1JL16Y9P5g3rwpBWYWxDCpDvomD18MYwqPDzWJCQLKjEmSSRetCuUzRnuh7DzEiXZheZwVcs1HsZ"
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
