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
    "3R9v5emVAoprswrR8ETUZVxs8CfQ58jozvTLqag58Z9QLx4PbGyK4PARF3uoauqYDeHjYtmzVLFksKZzRoijeNH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bzWDYA7cxYebTKk4SfqgbAguDSEaeX6fSBn2ausdrnEXtSZU8oHWevHrfjU8LZGZSFEjaQQPzugReo19NpM6k1k",
  "key1": "2vSZNWhQR8Sbwpy2dUi4JY8EFtdBD5kWvwWZwTe3JTAHmR7humLLXvAhZn7N7xJsftw8fhPmpY5mzNcRkoKqG3Q5",
  "key2": "3wGhgB3gYfjJaEXRnwTCZrPeahp3bjdy3vebL5AAv98VbBYANLJesgpWGZC2DvbTYf9XsT1nk4J6kjtUwSv5TgkE",
  "key3": "2ZYsvtncEoXGWDMbT1bDm1sUefmwGHbZVLhC9sbXpa5cwpTcVYp7LCSfrxhn7VFWkiG9988KuPWhXw6EB4F3rpoU",
  "key4": "sNP4Xs2bPgmgFedE66wyXm2kRuMH6uV1N2fZWduNxFLVwYJYt5h5wu4TXhnwSR1Kd834g3x23UjNnDDMex2DhY7",
  "key5": "T3dXRUanVUVpM9hsdUXeB5i3UhqosMiFjJ1MgfAB9CQoAGj9J6jz1mdaJ6buFjDm96GWuUVY3JQxfzfXtJRGm28",
  "key6": "4b1udSPfBZwDomegoKfz3fEtzrPmELmqe9zihrE3TyEPkWECUjTWiTz1Tzpnuoz63zvcRsvxMyeFtE1TBdxUSNsK",
  "key7": "2MBhMG7jcCj3nnBQmfW5HEXCTgVTz5GgjE1NJREskeSSxdmzNJAHiWUWKGHGwGSkY7tKrjZgfhgKo5ThnedDj8G",
  "key8": "4xdYTEYUaDPXwiA4BtDACU5zgEenXG9GVpiYQkkbfh8wz2asrDLnibhF6mGQcTfQTwkfsLsw6xKWdV9DnSAPhhQ1",
  "key9": "tZYJG7QZpL5B55ZjLGHfzQ2VKWwKkRJZb9nnaKmbBkU7gyqG6bqJs4cvR9w9JicBv85dfVaxLgsyFfAgXUr9WWT",
  "key10": "t1iXCWomzAk4H3BivhkDjRsZH2mmVTfc3wTmpVb4x5QTe9QP2d66JpYWCtadQ8QYZM8Pj7FHUBJP3J5NaH2nHhp",
  "key11": "5NCBwmEJYCZKdVTme5mYUijDM6wL2ZA3ykmwTjbseMDZNCZcbo1Jkr6gwxjzDS4gbTiS9jQqitMGNA7vNpkCzHYD",
  "key12": "2K9Qq3sj9wdZEcubSh88MKBgYwiTSxoomeXoEenajN7yaSjPn2eaccz5i9H6Rv5NY84iQENd8kPxruZosaHPEBo7",
  "key13": "299BkN1dAHqukKwnrtMBjjRp2p9wTPtUZrijikRzhnaPCv725GJpfWYNWK6ZrEQ8nX7HfCChynXaHvMDeGoTJJDu",
  "key14": "3fvsnmrunDday552PMZwJiJg5s2ushYHHcVzmuxSnUTGa8qiP1ebQH3oBVgERAezYBeQ4iiLA94JzfVD9ijmquzE",
  "key15": "3yAheRKxgeenud5eN4irD1WkfWp4ZRAkJ7TyZqjXokJmJSbRNgtBQx5rQuxpY9g6kT34AnrsawtR2njsTLZCWBuw",
  "key16": "3jhHeHmpWQ51bDUS1tk8nHxB8vazPfxaVpfdBWxd1fJD2JdLYQLRtuvnJ9AXdxtj5C4Fv5RNHpQNhQu3YvU3L2Di",
  "key17": "28QhcDRdSxGMapnAnwcUnaZyqCkedFm9VzsPTa5DzPaxT2qRrhHZrBoFV6uaVJW8jaa4nfLr5PdMn7p3QgbuCKce",
  "key18": "5rvYR1Hva2e2zh4aM2ozqVvp3eD16sbCvWkwxKrLkfCTiKgvtjXaqdA49QV4TbbWSPyTPcJowG7FsMmSmyDLRKQh",
  "key19": "2TqNnx3eN413GbzCQQSFq22BfNPUi8KV6iecEzkp3AttcEB76rWE3XLkBKtsfxgFb6DYWZTWaueTdjZdy944agFJ",
  "key20": "44dKvhSKHaQw4HuCrZWWvkwRG5He5SpDaAwNpP8X9KZy3DbezvSi3bZV2nVSzoX4NfCUrbEcyC26rxXtDUkpu6vg",
  "key21": "3PG58qpUYtnHRAr2UvT7dMJDFQARjZWTnoTFEUcDBPdEdSJAd1CP29ouoMnKgMx6FBCPE7kT4DW9JR47ZsZJqxPi",
  "key22": "3Xp8vz6PQpQcz6Wwc5QYyBDuqGsWpe3Qc7CHTgoWHngShtHdktQUAb5xVTKgQMJ8mhHBgmXbqwMqabUUbU5Bfb5X",
  "key23": "3QeRjEmHF2THxKEoFPTUBXvVNT7VPFUHrjz2941SXie6SStnctszz5oXKM7MGyXwsPARr22R2d8PhkgiUpq8CrLe",
  "key24": "3JWtW4E4bj62bhpM7JXFun7qMxhgxK5piHQWhcdNiBfgZav3NDJvZxD75pn9DNRvk6pFe9C7cta1Q7dF4X4yDwaN",
  "key25": "5iM2EJm9GkbYN4MXCm5CAs5xQYDSiXT5Xjet93VL8qMmQcGSQnUS1bgWBzesEnDDLMEdoMpZzdUh7euBknWr6k8G",
  "key26": "5zs6TxC1BYutxX8EftgUUxbzJks8t6vRzXuJ4kzrJR1f3i4h7HgsbTH4eCnboXy8xeBM67i1dDhWNWiuFPRpW361",
  "key27": "2bau17KAgyrErpuePHz6v5hXw3eULPKgVzknWjbqxj49SpSvDCQfBEHR5teH126MxaifY6nSPrsJcic1JzB94q2Q",
  "key28": "35TxzGVJVRnFrQ33acfjMP8oqshWcWZWTZP4H7nPiKvZSbFjuSFDj4Q8UBy8Q7iNmrYfTiLtgcuSafkZxjrxN5VE",
  "key29": "4xUanwt9KPFTy7mb6JRCz48XsyNf312VyyvUzhdH7kYgxzYueWGyWKECSfcEFBVzBStCKBHxyoHEoJ6ixPCK5UGi",
  "key30": "Uhy9CgfNwUmK5irpM9xnVxD5yFzby1zmokQ2tbWnBVf6puX2XmTHZJdkraLCofgqdVcMM4Pr8KGgRWu25FciPjj",
  "key31": "2mhRkdQ2tuiwiQeNceFKbMNpPG5GW5sA3ZcD6ZLEjqR8zeosMT5ZAwPKdfCMBA8HJAmbosAqrtSLMVTxbjrB1Eej",
  "key32": "5pnyEgMDkxJFy3Qukw6oSAVWiF5g71QNTrPHuqudUJ7C1TxWh6mkYPC2MWt9fML4q72wr385cAweD89Y2E81f1cT",
  "key33": "4hdxGc848CMph4o2VqvDG7yoLncMEgytpQvu6EL9fFr4mtxHSFYwzYDkU4J4BchSCBQnTMDDtTzgECE4RCc87sBi",
  "key34": "5hJB7CYy6hKAa2WEsoCjLaiC2sUrdLDdMBcNKLHPi1doHiYXyXFyi7Tba37YpprrRWhjtdA1KtBzg9i88m2aEQKt",
  "key35": "5nvswtxNmWaQsRvRsyMTBwCk1ZJ39GK8Ykn2aGLiHacz4xwBsy3CM4dRNVH3LjFH8mvdHPRcJUcG85kd1JWwQLJu",
  "key36": "4U5YtmsKBNwwTc74hKJptE15AgSBkKxekX4V6Qtxcu33W53cVAnWabxayNFHWXFXepQpTd96t8zVBNydkcNWuRmS",
  "key37": "BvgLvPREBG1mFraSEQvru1RRB2ETz77HnRgUtiAqNom4VVceNfJPyQNWGyXgphQM8GpiBvCSs826ycMNk47cSVz",
  "key38": "657ZekbWBWzvue8s2sZyGwVMK4ZqW8MVN7NEnQuzTAD3m571Y3KuADbhLcafT5wHE82ofaVDeeqxfQfaa3UEWRz2",
  "key39": "3JQqJmEMUnAHZrR4Ca2eEDsdWmWXatkuUGHRAeaTp5hM2JfbMWwf8J8TZJH8pnYSJECgHwqbyWwhvm5hi2CK29jT",
  "key40": "2yPT7ctHvRWz5Ruo9vojHq9msiRnMDNxq5yEhUpbqDUTWKaf1fSMYVdvRdQpTiXrph6nfy42ktadx2976xKb3Br6",
  "key41": "2hDLrjcGd1PkdExoRaefzs6Sq5GeLKov5Y4yL7kEiP4RjTzcowyxJFix4d2zLnzTcDibJ9mLeoM9ZB5CDmF2TUtN",
  "key42": "5PVDNmwbkdD7Z3p3AekRdj6hr5HxNLFf4VJ77tTCLJkF48PnBpVDz5pmHtJZNobsF9kUQcPxSQm2mUwUQWMuWToR",
  "key43": "3zwcrYEhbmmJpXRQYea2D5wDuTqoPW3VNYXNEppmdfASBmxbFHRrr48aZg1JyRcKWndReKKWiakX8eKMPRRg9jsh",
  "key44": "27EHL8pVLL8iGnwsMsKpJeaUAFHXnXmiAU9m1YzaQmbnnHmss3ewESDSs18CQn7JHjhLN2qmaNEFx9Qx55X3gUE6"
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
