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
    "541oyw61oN89BFGRxaoJWc2jn4eimsM2rwB3WVgpfCqak353bCnTaoZSSaUU2SVa3XioDsUHaB7yNFLtpuLUYHVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VLstj4nWFWBP3c33JDN7rdcEBAXnv1Z2EDFSXJ6MQJX1SvxGYezFcGAcHp1K2Nt6LWJmg2XqYV6QPoVxW8kee5u",
  "key1": "3sVqx9QWNMu2pPkng6quJ1cCw1AJ7C1ZgPLjiWfW1ADQEtnGemqo6hwiuBvr7YNJSr9v9XxEGkemMp5CJBsksjfZ",
  "key2": "2gwUyA9wvTg7jSYB2pwknh9h6unoReVoxgVprEYkHwpxQtVw9rYFW6a6Ncr4MjkhC9nGLoam9Esi9bYQPvS8J9PH",
  "key3": "7pMVVxzZ2yfXtfRdmhtf2exrhwoRTJ77ZLMD1yjQz3xDm5K7aBpRuyWff4HdCSXkNXMRUGas95E4oFKR9PQMhHj",
  "key4": "4GW87QXjfZgGv4BuWVEQNAvsP7pUaSCdTPnMJueBaNzfeqG77wN6pRDsv7ouPaFDmmHhtdKjF3hkVXYajP2Ap1Ew",
  "key5": "MWSoLjvE2EsFW9UnrWS5c8KGusSFCe65y1Sd2uzEAmQcTmWeScd3gKev2esRajVbArpVe1RsdWQ8JYfndTAfy7x",
  "key6": "XmQt3AaGfTyhnXPV8QcZf2ctRGMCJgMms3RGWGWyFjj57hZaiCbnUCjpipf4QVTuvepUXw3HVrBJ8E6jMHk1sjf",
  "key7": "4znrAFbYFu8RpasYERHi7YXGxEui5XubeEcZZmQJnZcZXL77ZXswP85bK4CSvRrBYJPePNxbVBo5XAqveWqcYpUq",
  "key8": "3aMWRp9PKj7KVKeVNvtPzCHBmqQkZJCAGQknx9RDTBrUC8fu9jNM19MztwPsz9otbdPyBiuMCnApeTVwCJRbBMKz",
  "key9": "2RZwwhaLuGxdWNwheAZ5zwVHNZ98DtTX7EEcBRZ7mxL2LM55Nof4MkHwHsrd6KPx6QEuVzgE2LK3Y9voaW2UeAgz",
  "key10": "N2NWDSH8XjAxyAUeE1SfYmn11gmrYhPYXtdkhTW8teh8JehDicvPVgxZWcBjCasLsSNEEvcPCEanCpLmWiywPPX",
  "key11": "2McKW93VEqyAwdFfuYEucs21XebV48z1YvMCUjkqdu1NAoDwTGNq48QSq6sV3N6NBn5ZZvGcVqtpuv1xwQuPd2yD",
  "key12": "3fZb4S73cAYDrT4jRSuDfjS23uyoz9fgpZdXZya1481UMiVHpyiwTU9MDbrJXz7N6mKYH4GsqmeUJE1xBdFAdYqZ",
  "key13": "AVapTVmBS4S2QwWyBAjLNtWtDHd5uPN1hpyWsg4vBcK5wkCdcs57nurYvBt9iCCWLcEQKMt7phvmiWxrrbAEt9k",
  "key14": "3HKmhQG6ZegDSYHMnsj4gYRsKhmEHWrMyigEa6PzMoUCyMp8UPZ4ME7cWpKhshQXWUegEBAX1XKYdRVSCtRs2wLs",
  "key15": "51SMgAGmTw1nuiMt8emdKiGBpvCyZAkiMqrPY5WRj3H5uePfdJ5ZBy4jTv2QRrG2qXxDHhLAQRWZEhPK6M85RTEb",
  "key16": "24WUWNVYqjhqMUW7Wug5pgKKR5ckvwqUtuG2HBnyBN4BBXNTTuu6JXnSD8ZHXYiDedp7GUxnUdG4Cf5VtNoiYp1S",
  "key17": "xKepWRtV2HWDBw6BFFcNXk9PzgvCs8T8gG17pwX2CPXmmahJJ8ZG71A8cpUJxTtUYctfJ9Rf3T9rTxQj5tXU8FZ",
  "key18": "51VEZjcfNoZ77LAVbNsovsvULaiAxj1dPibu9WUWzmJFJrpG7gGvNS4ydPT1YHVt6ZMwEK2qLfUMPPgcbPjb4f9S",
  "key19": "3KyYrBJf6v4GXJNUbngoCMTnbHfpmwid7Xueoc8wHN5t854fJBjpjBsG629aKFFzmVrrsAdaCbLKVczTXVXUwunK",
  "key20": "2yzwBKj9zoGfaw3Ue7vgvg1ggM9dpr61BfJduVt3g95sPHb7aWcGRp8m3NR1MmV7Xj3dJ8avVQnpchu1HwiKSLPc",
  "key21": "57JsndXfwvVFgByPJ99jhDEE2b8ipgcwoF5hvFXwMhDN5KmZAteSsDny4V49t1f8tpYuwyXd66V4e6ZJ8vF97wBq",
  "key22": "cVsqC68AaL8yMNRCSvRgyTj8xRG7nPqGPz642XG4MuJnwvMthGNDgSQLaRLrujG76967Y3xP1aevTYhKRgTKYyd",
  "key23": "6JbAz54q6t6sEvAtvvXFzQiprafAxRz9Cs3pVasw8wjyDQ8ZyKqEC17kp3zHsgciXY5WZDfwbquY1Bqtc1modzx",
  "key24": "5omC86ZbcYXczUiutLGJkAD2YSf1v74Ceqy3LaKVBb8f1ktedecGGoKEELgw7sffP1cCdntg2TB3MzP4Niw11jFm",
  "key25": "3rLENps4sCtzGfsNrtogFTSuXuMoxhuXxpNqbD56JfAvK4g97euXHeA7oaebAtj3BFtX6qPgXLUYRxUbqngX5xL",
  "key26": "3JqXRtwxcAZtY8JCdxBcAxdNDF1isUHt5ww71whyGVz88esCmvP8aPmv4g3e9M6k5bV8Droo9hrbCxFdojkSFSd1",
  "key27": "2HuP6tMGhFYBa6qcS8YHMJEzjHVTBU7kcQUkNxJL35kz46k2zY4YAv9HXAYbM7YGB5dGRMu47uLRSpmCiDV1h6Zr",
  "key28": "734fakKnmJr8LqqCAvBccGkDm7QfgttoJtvCjd8AvaZrn3DRNuDUUYbZThQAxfzB3Z1C3mNWqYpXJbv7VUDZw1Z"
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
