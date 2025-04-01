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
    "5KPgDYqjaqceqRQwVZ34JXAdQ1ZRcXjGCG2MTBZGgzsz1FcEaehzHg4uwQkrhHWcajKX6oYh98WZqFUMvejf7zLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EHSZyTemeJjgdsoRA8TWx4hZKg4x5dVzrKEvWyNDgcToBXgZbwNtgetGKngNh9qQiFaH4vCeRMzx1A2wECm89kb",
  "key1": "7bgn1Tv2oLvLSzJSpjPR8to5kxFzg7ZfQbwZrY21mJ1tvykCLoZSkE4obMhnNgT5rJZJEWLg9TcpJb6Px7yEpGY",
  "key2": "5LSjeUQYkU3RmVYyKnN9iu6kosUhhMFcGyHqDmRWPowHKUtDXpffbi1HiL3gS9M9guoDQvNo52svp1EevJitHYLj",
  "key3": "2a7iz34XFBZaah8EF4UtSFa8a25Bt6EsAyUMt55bsFchFGoWKqPzvVp7pSCunLh9J2QiezDbVN4VNw4wwiYb5Mhh",
  "key4": "3qc9aGmpiBvJFrtY5JnVWFVV7juYdJQN3zaLoazu31Wctv3MpQE6oXLjmUxE3uSwdD3geWKA5atUt3FvYFBd6qjQ",
  "key5": "5PTcW1JMzKekxVCMfwEJaSBHECRtek3dNDbyD7DS5hqJASxDMeUWuKeSW7nTC7p4hizTHQpYbtne7czzJY6r8p92",
  "key6": "28vTx2KKVhhP22H9abzaTLSWvGmdqUgZKAwnKQHz4PckSRgisnhF8xAumCdAZULdbQ1GrnDSvtrUAH4pbeptj86z",
  "key7": "5B1sPmFxohwuwK8HhUt5M9utcdJug3HPieYVSyDbRH8xxjo3QzDiBXczGBMEkRkvjgo5KeHZr6sTsNFqSNKY7HmU",
  "key8": "4AEBoJjvA9ZqMBev7R44DwdEAPf8jaczigQBK2n3aQs6SY6nfrXBpbzif2tN9kzkDbju6JsyRT9j3nKVBnE1PMss",
  "key9": "YuHzXrjRGPNX3vNzdcLNba47pLy5RUXvrDgC6PYbEzJdQxAoBmSpLJJJLkPcAYjKkGrGvRsTTZmSVyhR4WspQxH",
  "key10": "2iEQGxhjE5cfjhYL4DPUsaZAy3wci83bo2SHn24qyL9iC6dFkeMFBy8Rg87tiTdjMyShiDhHG1ZAQ4ySzvx9Tq43",
  "key11": "xBk7viypA3i9NUCHJynUVPQfwsrCHawcWCryzpQyG3mbtHveLNTdXmdYpBRB8GFo9Zh6Q2Dug6HocQYn9npHhgU",
  "key12": "5Nz7vdkU3yaqRFs88n2G1YDojPY2UnoEgReaggrodhwcF2vxnqamWXuy3jWh5EcKeSM529GDx6ZZcGv5bW6MZtf",
  "key13": "39BBjXG9udsAMKcPqc5Rsadg44CHiAgPJaqzdHrfLTftBfiMhNXfqDgfGHWwRzRUcYuPrGALyzduKRwdXMEfpzvZ",
  "key14": "5wsZtEHdHWgZo6b7o99E6KU3KVbyeqZJWaitB7FKzdmUzi79jDEm8sQufNSm6KqUu1TzfEw5Jx3j5U5gcCnFwBEy",
  "key15": "4Mx2KuhQWbvQbcVvuNbuZ7UX3xRmeYSdz9XrBeReaoerCaHLAYiw45RMgy44UfShhNY1MtBz7VQajAa45MbJtH51",
  "key16": "534avfn811KRdWFUEUX5EgrSot7wAjuE6FnbJLWx2wbWBJLAPW93jVFE9LGVqtFw9b4WDXn3f2tQwK1MVtDwmUvo",
  "key17": "5qSohwWfNse2Uqfe2dCh9NZzu2fV4sH8fqXaNF9inP81gu7ALC7J8Ee6XGUg6jRq3JuVzMWX3ZEwZdsR5SoT4Do1",
  "key18": "3c7WudazfeviyzHiVYE1ZgPT1jzDFaAHR3miCNNeMNLi4t6DLrDhBR12nnJQAdUdny4cqRQQKzfAzM2hEUjcgp5H",
  "key19": "5N9359MMqdHfHcRz4xhcHGs1sngyjMEzuhSHwG1w9fh8yFfZWBNFkvDbefDhWHHBhpiz13oeReajsjhro97ZFqjn",
  "key20": "45qnhSpNfjpifivykuBkcmbxmneyJ9owWW5GrUK5AGwudN2yTMwxXbheVUtSx1XRdqcgzEX32JV13FKBpTFQNy2n",
  "key21": "3NGGZC9Y9BGDhe7DN8hAN7L82BiaFfJdWkREM6pPkn1oCPuaewxJyifbUBKfr8Atkqh3WJiCdFALiCzzDQTphfiV",
  "key22": "GpwhutdXrRvcCRXSiRUpF92yb9h6wThidW3AVszh3y6pW5Y2NghaLRFavmBiRyBCuxmQHujGenMqHUMcR5CLHKj",
  "key23": "GpD7pMUZm2z8YuPZgAdJxEi9YaAqdW1MmC86BYxfhhSuhWj2FKUd13JY2tFsrWqgxVNLzQNhFccWaxs1TEHjGyF",
  "key24": "5yyciqKafqVJeDALqprgwzThbyNQRvcgJc5inUCaCJACRuGj4wDt7ezjKSEoeF5PaKuLcN1TcWQHa7LNZ3wDmpmY",
  "key25": "2QRHTr13aU1sBWJVj258uzpoyud4G6mqgRUDaqaCasWL6428ESuiaK6eksM5xnAUCfeMS1fDgehEfmUUi3xuv32f",
  "key26": "5dLTkNX2SfdcnyQ3S3P2punyAHAze5irHqt8qCE6VTkbnHv5tGNoPEb4DQW6x8oNWrFP2R65t63zSWdRDjwbnuDz",
  "key27": "53juKK5Jg4qDrvxLeBjP16kwuVhvUEx21iAJNBpQXfqSA41bbSTPbAb4oRzoSjTQJaF3hm9T5A3nJu5QkuiQxQxC",
  "key28": "SBSRCgD8vbsy758mKnngA5p59GVXpYRTCSgqNXdsZEGkPEipXa78qM6VcLnswJe4XPgXrcy8DAdF3TaoZzhrnJe",
  "key29": "BZtqREadW3K1g8pLBCr5ALqmG96ZjFarPGzNTr3EcU7imyKtwkEpKDKsvnZGqAZsy6vB19nPN56eAA4DBUpX2to",
  "key30": "3D8u6U3oq1xCzwp8szWk3okii4x55chc3EPorersFgmkWvUkKNoHyVCZR9yxdezZCTTNnfdbQ4wKJ9st4fwfCJac",
  "key31": "5QVtEAXd82AafdNFPqGjUtZJkpEaznco8obXwrQDxJKXUqhjS8WifT2HGercwMfTTV3WdRS1s4xHPPPD2RRtjZBw",
  "key32": "4o6vqYeCikMXQqGe9xA8GBikbULxbgR77nh4pwbpS9k315HbwKJ8ictAjguBdDYLgnusapTJkH5565qdDv2Z6Thq",
  "key33": "2JVrGxyPuuHi9TtAsiQo7Rr14a4vUcpwKADUDjZsM7rmvw99LZSKKeVrYgSrLETqKyCyf3kuXoRU9yLFFSBoSGPW",
  "key34": "3QJX5LzZACSPWPUmRMzyNJLYBZSie3YMhFY2wDsSgaWSJXxHWSvVK3JP7uCZFx6LW2WEXnctzn79JbNGyMdi1Xow"
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
