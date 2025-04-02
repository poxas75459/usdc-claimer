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
    "659Qji6a9Z7wDP4Ho67HQFhRZngrKGNe7BAkLLG6jfYi2ZWqjfKWEywA7BX7ik4Pv8oaNmFG9aw5Z7HH4KzvRcKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wR2JFQK5N77uCPKSMhumwVrPk46yFg7Gsy8EcbKky6rWZ2FiBFKBGtEW2ed7Dw87Dk5ScdW7GFvPegN7PkG3akx",
  "key1": "24DwMVhhXo1wSen3ExMnWymtZcZ7GEbmiznBM1bTGDJ82JytRhCKJS2uCPevsS7RDkLqtK6QWrHCLuQb79biJeau",
  "key2": "2aLZLEeWyhowYszSYQgWEGTURxNgjx9mhYaCxi3Jjh7RgGNynJKNHiygJkX1PrQ9zohB3YikxAJLUhYEXrLZ2EMb",
  "key3": "Djn9XjcyMDbFdKSSSoaxTj4JhdUmSpNSsEYR2zG768qNz7w66JUNBmi6WnBD5iHwz34R9qVm73oB5ZdDuLkYrDh",
  "key4": "25oyY9ge3ZLniE3YfXfFA45h89jjBXTsDQEY2fdRLbS1m6VYvPF9K9wFTnPTjeBj14GSRLKuUZn1DGogmv8Xx42W",
  "key5": "pHbUndPSXVXvcMWi5CqoijePMeh3U8TJAYWpXXcvvq9VgBmzgBtD9YFQ44VGRyyQRMZyMK3m8ZRPdq2Bdyt3RB2",
  "key6": "2BfBB753LFJcyUMWwVkc73ta3qehkGvnc9oLkYV5pgKkxq9CtwgjLZSqMumHq6sV2Tvr15MS2b7iKZ4veWsUe9Zu",
  "key7": "5Muqosi49yGN3gncTzL6PAMgHMPg6hyqHFeGsr45aKTbyrWsjoBgQMquAHsYNM3nTshrbXbgCgkfZEYwQUSjcVR1",
  "key8": "5fjfkbWTfQj4QHPBM86bZCZAsbP2mLmkNXWb2bsHWjwDeZmFkZ56VGFroGN216K9V23Di8iuA6qHpV3TPPT175FN",
  "key9": "3kGqnfbTXpBgrd1ms1TdqcM7ZXSrrRzaTmKergRG2zLjwKszJDJGwCAxC6KiAUXfrgnvz2fZBgt327WAjTzdDPmd",
  "key10": "mzeB6ycTFYmQfvMDWUD6HJ6HMjY3z5VcuSpYbSdpzttkEBNAKDQMhfJ234s68G5FQ7EhCjKMMtxyLDEByRCz7T9",
  "key11": "MfCp2LtQT3T7gkuKef2ZLZ2MwKxXARZUj5bjq7NSNfGC5nfZMpFy5uySywtvxASH23Kyf1atx8L3jkFgbZfat1M",
  "key12": "24gDMgRST6MXjNpTQeEdhgku6wD4quJa58HSKpN3AziCTRKRXUkjjeCqkibfUQb6uZTngGgztxvPouwawbN1pDos",
  "key13": "4BHUp8mNVFVz53FXAeLwX65Y3f1qG8kh8Z3rebyj9pphAnHr9jPHzkm5j2gthhkyJUtSUbbDdkzDTJiwSu6gYvcf",
  "key14": "xhsspyYDvBCNakQa5ayoQwBMSs3raj8vwCUsichhvEFiv2bYuLBHTMJZefvG74K8j1WJ6p9v2yHGSr5Gixye98D",
  "key15": "5s9Wncen4G4isKNEpFV26qps7AGnzJ7qcnP4ZsfJQGduLtEQWny7oNkKbzxneXocfvm3VgyePAEuTwKv8WwXeGKP",
  "key16": "3CEaRZsSAWgsnhBNKcJYiHZ4TX9PQHoQUa75Nbj19eqobSpRmGJ21FGPQ4bCdJTZ3ab7yfHdyqt4sVyBnxBDoQp9",
  "key17": "3cTFREGWyThzjCWzL1x1aUGi7iwrBezSRrWL179xu7abyg4cUgFQbdVdB7EPnkWcGvoYYqejUHprwi8CDTf3JBjG",
  "key18": "cKcDNPFTxgfpLv4bpkr8mLn7Tgt2z97EAC6duEmHScYr1BpzXwvBHy6XfBgNkM9KHYrKD1b8KXzMgSEcdrtSbdN",
  "key19": "4UjPzyujyu4Qcvwe1ZDeEg45cCg7YhhFtaFBzzxJvtNnKZcmxBq78CHMbAFVVfRFwU5AeyYxULUBRE7odYxqg9PL",
  "key20": "2sWGQoSTLriABXBYMBtWipVTU4vP58b5RreWYiDewK3Hcxa7cbKewrwr5H44hzX7QA23PP4sGXGRLmATuRJC6BxS",
  "key21": "9T2XvykoUv23jWBZG8W6Vkhmz1f2BPjA2B3hcEMfFzWs3NgMACUZseS3K1GciQdWxXXnSQf2kvEt4Szqfa8yK7K",
  "key22": "5Xon3uKP42ESZ17UJ8NFMJPYLFT6pVBvSrR1mAKktaQaPeaD66XDJnv97m1woSeYyqnpXsq9KKxyJ82LZdsar5AW",
  "key23": "3SWai8S1BoKePxk7XRJ7niZCLwUjEEKK5AFSHny3Bv6o2HdHnyRx6KPRRXVSibvVPkb5SZoqSJa3J5RVWQPvEU4t",
  "key24": "5eXz3Y7iUUStawiZhM1rA3n7yxw7okBgfSKv5XbA7Md2uB68Ys6RAfuLuZwJyBi5PjR7wbtcTK5YtEiNcJ5e2wRq",
  "key25": "5GvnpXMBZwD248z4b5majnVtiUY1vzFmbtb6gqUmFDyEfRfje83iN7d2t9ReSUXyYnh98ewRGg4WF2hH8onJNaKq",
  "key26": "5khftVBDEGk7rwY958emMQWXLFxKYPMEn99U89tKYdmZn8zVXPhfkeEpmWakrMochAzaFc9HQghG3ko3UaD1hnXq",
  "key27": "3j49UV7NEoQtz1c8Lit9m6wkW81BeVjKekicdAWPLyY4GgNyPwNqaxb6dr1HQCSZhNvKnsiyLV7y9WU1U1LeKpZV",
  "key28": "LtVMtdS3wwpwFn448LAknGwgZCatFwEEcFXtiGfQo5XXLkpvjywLLqKuBCMuxrj2CPxbLXXCRLaQtCrD3JJUFzh",
  "key29": "3nLtz5YvTWvh44ufjDcHWq7b6rQg65HLd8BG78qMMe6TbNN8N6wpTrAd3eFfLAF71NL75UUGMM2KjmcUeejffGd3",
  "key30": "2QjSQxgqyA4qCNwEhk5yjmcEseapqrho1MxufSSkjDKGTdWpyBybrGQF394X2UXKeQ7QhibpHSSwQbc94e3kQQYR",
  "key31": "53J2o7eAWWRVKkUp1xk32XuGGLA1vCbtqq3n4SLnfw48q5wJz5nxDdAVxmE4PwWLrSGUZ1RKCBaftacKwoafo2SS",
  "key32": "5kwCui53Bx9YnE71ZwQsShzMCyjLKSGRhBHtPaEFg4ftYvfFVTUtCqGpzgMm8Z4taXcR7ruafStWw5DuZMMq8pFy"
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
