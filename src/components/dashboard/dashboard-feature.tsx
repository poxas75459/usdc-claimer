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
    "5UXZQxo5ZFnpYYnCtLyntu1BEiMKti5Bxr37SSXaNmWwHTqmkt5UNGiAS5nxRem4ZnbokRvtbynnUkSGVv8f69bu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YnwnSvHKAfuRDVCJ9gTgp3tuaFUrdGhDXpGK7WsfoQn1AFRRzmbnjFzD736dcHshweaCcXJxSLpQ1SfJm7AYC2z",
  "key1": "5KYQiHhaSRoVhJbUq6JHhoTa7iBPqxp7wQh8MJZt2LPHAg7DvmXPm1N21odZpBBgBYjpUtsEx3oYRsPn8UPphG48",
  "key2": "3kGRMwif6WkmKt31GdHJese1XGTqqVWJpnafsdXwExdh5G9hGpAXUBfdCMwcX8cVcD7bMG6UTpsxWT8jfpdWB3bL",
  "key3": "5hsJhegeotZhfZ8686B8DRX7TKW32T1iGwChpWoQMpAmFba5Gow1Xmrua6vxr1mYgZ9vuF2r6sBu6JcfmczPfuMJ",
  "key4": "4YHebRPQi95o2w2TRbe5VRDKGELqSEnF1NwDucNcny9oGgEbLvn3YQdXRkY5SPoLqB8NWXWEdv4wwD2vJ4bfUZ4S",
  "key5": "3t3krPvFPL6bs3jAMpEc2fs9a9GGNG3toeDL8pETqoQkSSkpNZcDzkCeTiePBtJTWE9U2RHdTV42x2tRbzUzRVMU",
  "key6": "3YYB2BAUmZ2fvZUeSrfAjQkwR1YPAZJsmLE1AmhSxGMUSwnZBcfzWnP9vSMEDdBaYEY2fTWErr7xcBakDSiBfRM5",
  "key7": "4BUZpPRp2BctJ5cxBjrWiXWZj6id9yVKf2Wp8pC6cL9rkV1TZbaNuqXYaDUdAYRKypfLB8GhBXtNfBwD7Tvi5zvK",
  "key8": "62N7Y2pgZCim8ptDHxS3R9bZoSeUqui2JwZ8EgV6pUbgL2a2fz7R4hAQnKAkaz3JeoxFxGEwjPBGiKU3Sb9EX8sM",
  "key9": "4eYRh8kVUSLrxkFDRfmRzhQ7kdpN6h98T38KNv4YfRTdzb8BPrayQrNnT9FgUJQGgjdAkm5h5awE9EyaQkgkqzvW",
  "key10": "2EUSKRk9gisoJ3iyu6ad8DMRiymRjiyHdeRTUUuwgtinumU7HFuDr52ADatmtwiKU2RWbVQB79ZvdtAJ4YkkznSk",
  "key11": "4fLxUEpQ5dVujGhTTGgVRF2iE3XpgGFLeVf7J9SPGjDQAC1n5VwF6hqpAfuXknfi99DEbMrgaFerYJGHyKNAQXG1",
  "key12": "2HuMEmx9eKbULNdPaX3Ks9HTZLDsSpux1FiE4cAVBWyxBZpk9gKewfAWZh3yKiBWdqqwvD7F5UgiZqqBTskahJDm",
  "key13": "rZMChUJUZvHurXT3VXKSV5dfhcYJkjL8NtZ1MkNbi5d7GFxCTWqH1BJLWHcmReKm9FqZkkdkpEkNqNhcBJAKa8i",
  "key14": "5XcW1k6NbDK7rL4W3P7wWfYfmx7sJ4PmdR4AB1w5a1NAhSZYte5TA7CNQJDainUA9iEDHkBPVawvnVVDH1y48QsG",
  "key15": "4wZ4AGLRQrdfryXrxh5NsyWqjnHuKudAiaE5wA3xGNFNutN55FfftVMJpWY9ToKbz3w1SYUUnGfshqyrQXJK13om",
  "key16": "4QPiQwBiCGWtLk1y1kuQfpek8qhKsQQRCtBdWsAmaxoo3TNhm5HTsNA4HRv123e2DwLQarEknpHn189rcNVoQ7H9",
  "key17": "3LRUyDYdQ6MdjNXpqGFH35cvQ1Ytge4mpNRgDLfbw2dfVgSKe4cgp3aUuXiyAhTMChVDBh1zFfoL11D1s1XhF5uk",
  "key18": "5hPG7JCrhPhvhmosrss8AH5GZBKKsMiHp3Mg1dWyz3TsiY5bt3DoV6KZAUZLSJtfn6poiTFYop3rTGYwDDmyQ9CH",
  "key19": "2rxaQZcQi8WHnEDFsJPVSX1xnCaVUQbDQ8uc722bQQFcKNjgGnFSDuwbnx1rdzNgz9wEfGtzu1Cv9BLENc7HvFPb",
  "key20": "5WvoyLzHeMiRbKFGkapaVnMuQ5ktuVC554x4BPGu9MkdTz5uUatSeR3d4xVNbYbA1LnauVeZEjygVq4aE1tz5fRw",
  "key21": "2eWM142vua3ANT9cWov6mLFaSB7QxjCJFSTdpQpHxxMdJ1vVJSd2pjAE9bNPpomyexgVh7ihBYPBaYbdgmBfqFXV",
  "key22": "JfdHoWnRy3BCUdW7UXqNCbPHbUn3dSE5CnDqQA9czrLwes4Ee8z8SXkdSkUZHhwTvxASxzeM24iHZB8r7tkiLk6",
  "key23": "5gHqW71fvcH8ygDttdco4P8GNJucgWBf8uhW5XhoZ8rc646LyijuSCWsj5nuj7NTYKti6Wfbc3hHPhGiwXm7oaRg",
  "key24": "5YgyeBg4QFb2EBLrMYqVg9unRqkXdWdbFoQj2mdwmAdFr7P9z1q8WusxA879r1ZXdRZL8GknC9XSyT7XbTnoEKJz",
  "key25": "5evP9pEumAKUj4iacYGVnqPkzo7Ewg4KfWc37HE82MiG2gZ5Kuv8Y4qx9wJ6zAXzCRSLbaDTQSzm1NvCvS6B2MfL",
  "key26": "66RJCjajPCVNeV35SFNyoYWWVjsjEqcwPW1ATjnG6ehf6dMECRXv7SJkUvazf5d6y6y44RiPWFYy3Z1Cg4rRvrpi",
  "key27": "qmvx1S26JCKp979kw3kQgfoaFmc3xfnawNRyuu8s1K5143YYsEyT4vPrJ4A9bdWjzKHtz7P7zsDd7uFLVFnAQKh",
  "key28": "5eU6ynyy1tWHjzQczkwH9rJr4AggTniDc27fhgNjuNcwdLau8BTPXrL3SDdzW2N4MiurpNzE6tLExXn14Chf8nhJ",
  "key29": "623MDdX4ZjaGMahauJwLBnQABqDHTSSQhMx9pWhEcSSVnLWfZN7CKbLK1yTpSXKmwas5iEUV4KwUmdUMjxAGqThL",
  "key30": "33EpR3trYXEnzvvZkPdBahDAANJF5zdHrtv77gyhkkKQpEMug9yrsnJvbNso8BVk2B3vFA3Sn3Vum78f3DuRSPhk",
  "key31": "2c8JB8UNFhjM1jVVJaoBu9WJbgtJwB1mnFkxQSHRns6NZYDYXMXHvQH8CvKyxkj1GxfHMrz1tuPMNyiWrWgj7BLh",
  "key32": "4DbmTq9pU3iKVouFFszUeNWiDgA6LvHyQeEAqk1ELPweWb6LhQxDkdVTXjPg2foXjEK5rAcW8V2ei8uXBrz5jXom",
  "key33": "4W6Jwy74CN5jpTdCBCCBGYTax14YzW3cK1rGFiYgTenCaxJ9S6Bv2mGrmqDywcSnFGntL5BvqzMURmwCrYCb181S",
  "key34": "41L9jNFgZZVK38zbb3ujeXLCQqJRsmB46XgD55czZsdrn8LjEUkNTf3AjvPAyfkrxx2581edNbETyYShxv4u6rcZ",
  "key35": "5DzqoXsqz3QTM8isNjP67qBDUxVFGsSJJSaQvbxVGSTmGzSRB1EWdjYCCvrvu2Y81rsUwEf2NgzSM6KKfuzi5mVr",
  "key36": "5zApBAoSuseqTFiUpydyAm2L6b5V2jDgqbfA6tF8y59ERXBNQjB9ga4kv323RU4ztJ3VJwqjdgzfEs24g6ymTSBH",
  "key37": "2JnFcueguMh4CrW6wU6rcTm5NqHo4zjYaHf9Z6ib48F1p8hwSxCUntuRdcbDVUkrPcEwiPfrPsnp4K1wGCypE1SM"
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
