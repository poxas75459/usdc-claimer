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
    "5YAz5FZ8XMhfw2m2RJQiwrcvsScLAgdMi8N3GnDNvnX66NyLyPCsaea698wjDpaiif4Y5J3ZuEF4KAGb73Z78Xuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NjpLqbLhs2sy4FnEXrZp6SN42i6f6ZkRTEJwvqfcEgMFWtFJcgwoDsNi85fik6F3kCUitxnamNtcj2riZp4b9bo",
  "key1": "5ZZ2gR7CdDcqoLLrbwQuJ58CQ5bjRrB9E16qpSybGUVjgTozTZL7JvtKX9BQx8aEN1ntQVnqDr7pTJD14mD5StTx",
  "key2": "fcgV29wayTwZBDwGe1rJExCKgp5J7q3L2Veu4XLgqdkshVkV7GygEM8Uc1HEw9rA1AenEXGs9AdTVu3awY74CSW",
  "key3": "2ExUMfT61PQajaq4TXSW8ktVPy91P12SPsPzGtb9sZ2X7xgLPn5fNwebZP67byhYwjWDdCBDzerqP9sWbcFbetBZ",
  "key4": "3xFiamxh151aQd2qGuvMZx43hktWCuxfc9W8kixHxfQHFuukJ8whN7sHsuSz5z75pPb4RgaNvo6kwENoyPiDqPjs",
  "key5": "4qEa2pHZZWiGeTgA2eRTTfMyUPPXtcb6RPg2bs2pcWrRru8AWVBe7LME2iEB2RmUgWc1JS3o2x8ztgjFZrca3hDj",
  "key6": "3ymajQhLQYiUmzBtwkxy64amv1c2xV7De8rF4xZ6Ygi37N5VrJotqeahGqP14M9pwBMkEcYCZnw8xZK42KXqUwms",
  "key7": "LZ4BV5qcwiECYgGvE1wfpe8Nf8EnKBs2GajU251NMarnj3o4rsGDKW1GB3XHBQjnUgsMGvNzGKeacfJkBjMf1Pc",
  "key8": "5ctnDN5u4JkCZ5d8yZS1dWmg3LbUchPzwbNiM8V7bTbVd2fHtS6visxYZnscbgFbX8bxeDKEh9RsDiyUiRPxtNP7",
  "key9": "4dLmjABnKDaChyJGotZ2aBFASnBPnPnDp2XXekTKAdYDhErUCCaYm1rBBFwJ7aDqquqGZEPVxnny6vHebzEaCyxy",
  "key10": "3N61y69znjcr2J1xdzXb5Dpa8iCLq3B2HXzSHoa9jAYivgJHg96E1U2ARuEcMs2RB8tAdM6S1sB4akyBhuUMEZfY",
  "key11": "3igx5a6z3JvCM1ZwcX4HhoXnFKW44JKDk3X6eV4dWVaVF8dpXMjt3jWbmA4enxFuRxiMThVKNMPTjMYEabUbU66d",
  "key12": "4LvMAAfr1xS35fHzNchPjuzGbov5va5TuwedKi3LybRAis5dTU6oLEQMCfvjH2KNW9Gf5VTJ3gMRhUraj9aTKe28",
  "key13": "3HHgGnyNwkQWQpWSoDhW9aeUjmRMeUnpqsputcUhjADBcCC1LnLzKsnwr3r5Xkk1E8Pj8j9x2rRWfVnq2UNUedn4",
  "key14": "4tUD5Z2vk5D8QSer5RdqncmWHPyVdTVvXmrKWub2mWdxvgpUHkTmXP2strTDdMnPMs4pHkwGHCZAdb8Wwmq4NUEL",
  "key15": "3wGjGxemNzq9X8qf3vNUTXnPy6CFXfaxbKKHm9Qqkg7cmDMCXSGzho3Cyz78Rfh8PzwrdCFpc6fN6dAwgGWXnuX7",
  "key16": "iww6ozoesAx5zFxQFJYdqcTBbsaEHoEFDPUSPnMqYcNjbevjsDxmz5dQ68M2cw1tmgLrqoKmweUcysKej3R6bUc",
  "key17": "356wtBAj5694TZN16T5MHSdKJqq9efKe42Fq2RszfkkNNVqhiXZzqDma3VVZmuqxuGTTBFahm5YWL74VvpbcCken",
  "key18": "5rYBMj6da7FAyWs6etjcMj6WYniBEz2eU7XCXLsfuRfGrMWQcNJ5V4NSji76EJGd5YefySRs1L2T24oW6zLHQ1kE",
  "key19": "5qNFPGDgXQvCR6QP94AeuMmyiPjRnqynBxruK38xPGzD4gyYXctcHoLNBJkfpFSANjxV6jeVxcjjw2nCAwj6WGTb",
  "key20": "4EZohBTXHCCyk1dKt3R2ZMkBCjGCkw3yeVRdfc5oZM1eTo7aDqSJVyv8soWix3rsBjU4VgooBTNek5yp3pkxjM1x",
  "key21": "3M9qMUjo3Amo1UeWAb8DJT184CRgq16gy38CPQ23ngR3S9VPNCg735gfNefwMS9zGexsRiQHuTCJwMWtL9GiLtD5",
  "key22": "4QRkzoxnnj114eFasC6yRW9vYYMWQjnbVtExHmrHdeL6abWqKBC9uea2nGSMEYprDXYbcfhRRVftaf7D2nahoFBy",
  "key23": "2BwmCXqmvpCaX74qVeXYr6kGN7fFhWz453VQ6Vv4BtCJCj8ADQ9ux2hjr7dDJbzcRNSeeDJEqdmwpwZ5dHvwUZvN",
  "key24": "5abmYk6ZzCWtMHCXHZHtc7m9TDbeyMXs8s3wuRzVkiXirPBe2Ucmqv7rGj13LYWcSokQbUz6Z724a2SJNm8PErSy",
  "key25": "2nvAmUNRDkLJNZZsGKhrBkuiP3PDpfaQUYDUPXNhYgnBXHYLiKxyo2UVEQktfFwroSWpMRuREnnDjDnbz1nitXA",
  "key26": "28jXb5y3xuSVkxbFaU2pmANkoKi98hbvv6fw3nnvM4SzMb4o9FSWUPFCge15u5vcrRNDeeyLnAddzQv2GEddBkRd",
  "key27": "2x4j2q1N6AALd2syZ4F2S9xRgaD9rJHzctXb69XMguaLJ3PkKLog26JGTFkSA986bfFU2ojFHgLNVj6uu7QuDn9t",
  "key28": "KoEJ4F11fLbyfrbnHyZNhbJvxZ7E3TmZKPYjMBjXuMAZP2TkVAJpYYLE8etoxsKcAZb39QUKrVrb8Aj4SX4hpvY",
  "key29": "62GTgbBje5q2ZWfF7iZxfHyZZLtxrGrKyiAkrTLnjSSt6fRJLD69d3c1aeAgdnaa9C67XmZq6EZ7d2pAkLpmKfyL",
  "key30": "2GY2rDMW3Poa4rpzKqCqN8wUzi2yjQ7aZJttnPyEPJLH3W4CNewQvosQS76ieB5BZWbrdrNxNa1XExr8ibXnQvjq",
  "key31": "3AwW55WcTCXaCoNvkxabiBCk7XFxnE8UyWSbBcedfj4x4bSr3L7NFqrF54gVLo96LXPtrpbge7t4b53so7HcZrBV"
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
