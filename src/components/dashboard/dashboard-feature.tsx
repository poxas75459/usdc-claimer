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
    "2UfzTBLtBbcWgAXLdiLSYEbV6dsWoMi29xyvE1wbutTFWUn6RDyz9qF5CMMM1hyhaDTSnDjA38BVczMLYDuqdbte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jTGC7HXMHx3RQ6YnWvpJw8qaLaQM8JWn5m8Tz7tk8t4Bu9wcQ6Tz4gJF1PyvBNQgfQC9MQey73PT6oaddKP3qZX",
  "key1": "2MFeCmjTs3xyxmBjvu8G6wFDU1kWn9EiWcafw6ZEcAh7Cg8JJsnSNNmgnSwLGpLmjr1Gzqz3XAvvRauxChR9oYx7",
  "key2": "2rQpb9Ju5pEC7YELn2wNj7ouMED9JCjtbu7FqLJPrBZkzjRBS7ZiUUDDowDhGJurxFEtQVD5gHH1PKu2nbbX71Wx",
  "key3": "56jgf9Vz52cfLxpw4XB67HCv53JKrs7tvLE4a55Ss4q8FrtVLe4UA73ibe47PQ7vucXGrsVtKHVgK42rBd59hUqZ",
  "key4": "4BskKNq3sSmcEUBuVMmNWY534eW98c1UcwiKXYoPx2x3o6QxZ3tbqVcvPwZzTmsgo4FxEbqxF7WUeWohj4TFvC5Z",
  "key5": "2c1sNkhRCtjYqVBg1nD4zKMSSWwCDH1W47VRgfVSqwnvakxvfRThqjHXr9meMKwcLeWX1YKq4oNSBNoNy5pt6cwS",
  "key6": "2Aq3pDwTyxZF7k7fowuT8juqpBHGvPGqF5D7Umxs4TYEm6yKwQ8K7cqDYjjTCqSNhfU4RTjAGF9JA7QzmbgUqoDq",
  "key7": "2zNmx7s1idXJTmoay626W2tgD3fUBChBnvuPXrnWfryA7A6egwajz1JtVLc9e861YCEqyVPSew45vN73Y3jHRh4i",
  "key8": "4PrSTn3AWFS33ghCRTGeDUqFsZfppTsKYG4aACzuZQaEtkgibfeEirKa9mogw6FM3pzW8hRxCtjwWM2fJp1sVhgF",
  "key9": "3bGtY1Jhg5M8FGXVk7Mdw6hrbrz5zowgxj2wAHrVCFKhDan5FdXKw3yWE1s6gnDpQGqb8ABgZ2A9QZJ4SDzM7SUW",
  "key10": "2pt1ASU53pbnCEJXgCEoiD8aXWWMEG6ojEtRiszdLtrk3W6HdCVvFqaYtEoPw1YrhB184gfnqgUqE2apjXbQVrih",
  "key11": "2h3pP2pzg99hw1gScXz2LbGka2QhXSY4eZvBFN8GXZ3jZy2kkNNHwMuGpnySRoRnodttFvsubhg8Bm7tBdSm5zTn",
  "key12": "5DgT7wgPZnDDH5dVunS2A5aTykTKXRkCEHGza5c8RQNFrFrEiGFUfbAvmDjhvrZshWnXpCNc2CoF2JEEUwx2UD5Y",
  "key13": "4EaszJpn3c7wBsLbNzovQWSomEXYKFpR1QueQeuxrZWMYWAyW7ob8cFGku49Y8NyM3Bnvi8h8FFWET9qsWanCzwF",
  "key14": "4uT7f3BZvnsD1vXpCWgN7hgrgRsFejaiZ8rS5ECi1txAap4oAYDD7KkU6QgkTuSAMfP3P2saobxkXeiow59b4etk",
  "key15": "3xfrUc9JYwuPKXyLZ8ssFy8vAG8W1k8NNZMWrgUBuBsCr8PGqcSufR2SZRUax75SjNQa3US8ELV2yYHJdhAjcQL7",
  "key16": "4gRo8L1RExvzy9RwsKGBqDyRbpd8HzbWjeMe9UUcUQ6VWRpvmcMqN7jShHQ7mPdThws3Fyao8KuS8Kg4T5vnyakb",
  "key17": "vDYck5QXkgGiFKd6CXu4UkVsxYp9y9rPowV38TwPWLMQD69LrBiLxmRLVQ47rhjVhRoTAMwvEBftYWc9eK793zt",
  "key18": "53b6ssHELkYexUHPuiofUPg6syXP4fVsy2c7t8rCzTusodympSNXQPVPDCHyxvDWbqh9mFFKeacv7VFq7676qrMM",
  "key19": "34JXe52xwbTu4sYoKDxjiGFUfGUkgLGJjQykegmhoV1hbigGs8Pe5z1M8MmdnUHRYdRN181YogPjVHLFmNHrsvGb",
  "key20": "2NwBP8KVKTAh4yzzKV9BEwecwDX4U9QcPtM6hQdQsV3R46JWUYpEYrkdBZUuu6iDZGira2erWzugM68vfaQxavUN",
  "key21": "c5ZR2tkTe6a1UzKN2RjstBD2VeRZngDspvp6VULrSaKpRrR5k2NdoGwVZ7tBf8AnZ3Tn2xgqYy2rKFq8HYjDqLn",
  "key22": "5jd8bHkNENTXYEajQFWG7GxYN2m8a2xErX6YSCTAJzTnqsg3VU2xaAxaKtP8VUH7XRFKSZSbni8kSS1oyUZHB71R",
  "key23": "4JkkuKGtVfbBTNy3KLv6bRwsBfuBUuJcXaEJxCcsL7Dymqx8rYqdMLiYnxjSrU8sbqzoqpurC1yNxcmku4H91Dyp",
  "key24": "4ARoef7zfjBpnGKkYKZxciFdzB52QaCNiaXVZuuXgpP8rjQBMcPZBDkRSWx1URF2GiPj8GE3V35KFpjEH8N9u8sT",
  "key25": "WLSsmTouQq49iy4XzRJr419TvbzAVbdNVHnyi7wSHLrtecmwxjfEB2dQg1wBVDEoE6vU3SmWaFcBrpGCHo9TBre",
  "key26": "KTXidWnULZLQ4GVRj6RvXcfh3xcMnhdgNXE9N2TfEwfeYCNfVrQ29RE25dHaBxjuCRBBw83a9jnpzgTESx386i8",
  "key27": "4iNqSJHvtRyC35xqyrsVAkxieTMCmphQqLWzGCYPG4TgjKehsASWa2keuH3YiE2BJM9mqAeY2Vwkfvs5yrV4z6jN",
  "key28": "344T3kJXx9Mxnin5YtkznaNBemGqTHyR2dmrVVzBP1YfBe5U7YMQDRvHmV8kLXZeF9wQgH2a3ft9WWjpxd2g8aaY",
  "key29": "LrBHcBwVEMTDqLZaCyh6CcpBkjzc4DLksNL5ea8BaToNoPW1V1WLS7ToShFbKHmsQQqNb949buEFKj5zpeDb7vF",
  "key30": "5ngrisa4awraR8CHz83DWWwxqVM6BbA9MVUvXbLX6ungJpzSTkTMyY7ChtmmQ7kVQtQpcwxJqVBNaM5xLLQPA7V5",
  "key31": "53ir3XnPC8Wb79sSPpX5sQhGWMV7uGyegYUv9B7wkvasVRaccrrrWPwb1pEcFCk9zyq6zqPeQ68zkDtFGBHymR41",
  "key32": "2zik9QWWjKPcPN8FEsXgi6YzeacJTfmTQMiPXCToAvhjPKTqm5JjhkgBf97wSmBri36kNufiRtzEprgHjgNBRDL7",
  "key33": "D6XcSvKVZAQjdfx9ZEZmkJ5Qo8rzqXtBtPRd7xA4bsaY1oeKiwdKZpPZYC5Pp7kKygkYbLAkPyGToZZPzd728uc",
  "key34": "5RZdoP34s5KYb8cWW8huXNCu9G35xriBEkwWwPNzEfravRrvx87CLvhZWqrRAyCFPtohT53FDrfYhteZKpDx8hwu",
  "key35": "A7cBcSiTPFEDKtsfLAMU5Lp3bcJj2BT8gvoSyaEVCHaKt6JvgkiPwDS63jVb1mKbyE1DYGFaDAnLmW9bjcR6HFt",
  "key36": "4JPDKK66jdd1DxkY1UREPcUJNRLR3oVYpi13WTcrMkkyYpjB5PYsSbv9KoCNyyB4hZhwSdkAuHkx5Bk4JtixoiHU"
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
