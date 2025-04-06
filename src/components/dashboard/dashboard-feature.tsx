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
    "2euDU1LFQw3kRdZ2Znh3TZgdMr8KmWGp3Fq63ok6q5oEpwLpPKLwzYjRvQ845jgQcvFQrinEziby9GNLzASzuTHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i7L7swBW1oVVqPmxia6MsTRKPCmz5ow7EMSrEFoHCr7wyFGDP6vz3feomupiDnsneVJFa2v6pK4EFB1vo7R6qJ3",
  "key1": "YKmBAvwvPSz7bVZ6KoBYkcjo759T5uCj1MchtwZUvnKroP4VeapGgPAZjh5wZGLgWWbQdkUwNKkecrcKiTAanhS",
  "key2": "4zdcdXEhQCN3qTnSQ3VYp5nTbjZxtgFV6VJ2UD2Yo59du7CGyCTDG94JR6Hxg3Bhaz5Ju3E5otahiRgJddqhNC2R",
  "key3": "2kqwbXLiDmEuydAhWXJbrEfpyiTihbyQn614pa8KHGxZDBj4ASm3P66qpi2FaKLdKrxHY5EkKGWWhMMsMLkJFbxZ",
  "key4": "xugWAUwBB4WFjbhXdFtVWeutRV7hfA9TYnV1e1PLPyofDedqE3QAmgQUgAkbPkjWjwz3LhfmLBUFoEHxtiuNhgs",
  "key5": "2wnXg6FejNt7vWxKrwCvQMJ53hjXWa4yeLR5NCt7L5JnpXRC6jnk5WhpZR6bS5BP2oiyc8B2MkwjtsfHhq1DkxvX",
  "key6": "23wSYdBDc4ZW5qQmQp4idpZwoeNQZKi5XsMhar7mn8Bi4E6ybkn1Aiz2WkCWp44CShtbxEZMi7GH8JU9mnaS4Sqd",
  "key7": "MCRzreqNj6WxHkziqmuBSdBpeLJDVeqtrH5d9DBy9h6NC2uSYsRb7fGyeMdoUz9V2kJSwiNwKYkBUNvPoovLatP",
  "key8": "UWpuefY2ioXi6HLn4gcNZk8WDW5Xsu4Jb3iETmKGpwJVAqifrLNtviHBws9qA5UkavaayQVtvn3yNdo5pKXWCUB",
  "key9": "4aQzXSDNofCH44SBgUjg3eD44tMuvdmhNR1XW8Q94AQ34c4s1mvc7d95AhShBE91esLaK5qocSLoSPJknx78kcKi",
  "key10": "3mwjv7jLcuskCUdrfSRmTve7uNUdDzFrw6fbGdSP5DYymjsYX1Kh4gczjridfGjPgGfNE5hoRL9f772iFwjLNhbY",
  "key11": "5xVQGKTVRY6r6UnqknDnmandsBn7hCcsZntLm7Ki2HgD2DGvm9KZL2jMYmgbyazbgLEcW8LyGHvbv3CkkLJeMDkN",
  "key12": "3fE5bHsDW1cXtykdridGW1A2zLwKE895zkqdVf7pJ2JU4nhsceB2qMnFYxgJd2HhG6Pcvf2mbx56qQuVn6t2Vo8V",
  "key13": "2dcbtExAtHxR8euf3Sn4VEZdRSUgXS2q2GY4SCtjkS2AKCdrextnqd2u3GyVaVsrudUGro6WDkSZEqxWPS5BzCWG",
  "key14": "62MmSU6hrFAqsPzrCC3ywpfEHxKskPrsnxWNBTc8v9EtSiTkDy63TxdSeatiDLdVxj7jh4fNrqA7pj8rD2X3PD5S",
  "key15": "2SRYAEGUCpXbqehYbx5aRGTxssA1sGMvNWD951i9k1ocadAKgdMYM5DV1T7EJqA1QMZf7k1jbgMSkuKA7kkebz3V",
  "key16": "5NAAGVPVPnjiDEgDQkdXN9TxgAXj6a1w146TKV2EkGs5jXoajnfwrmBuAcvbec6op61UeUHQF4qEzxM3Uoxv8V3P",
  "key17": "61AJWfnMydA7yqKLxqBNRY43vrJvtng5pws3eepppTuK71atX3j4HXPHKH9h6bdYeUQygeookm9jBeMHpimcLj2H",
  "key18": "ukG82NDfvUaoUwqDxoc3PyiD1VfmiVHWMY2TxZuSiWp7qEk5pmdVwPZsFdwrinjKNCBZiDy1txPAc8mFeKSpKwB",
  "key19": "2nSmMt6GZedWX4fU8DeBxwAmXpLnP5MCbvAVKz86o1gNffPF71844beyqeP4LjwGQ3oLE1Gafoy6aeRi31noCiNt",
  "key20": "2DtrqoYnuqi2Nuzyk4NbxTYWoKxzVmxwg6UhX2kieNveaC8WXCQ8kgqua7yruBeQmS4g3rDmK94i3eyB9F3mzc5e",
  "key21": "9kjRwcscHs594y8dxsTr4uduadt8RKoVaSfYBAfTjmMJcKY8AgoKketuvLtgCMy3Hmw68RRsZsaCxKkiDE1DjJm",
  "key22": "2YogEBh8bBvTt3XBRDC2xKNqf6BZxou2QyojTRFGHndAJgATe1HxXmb9b3nLJK4G43yusVXU9G2Jv3x2gCzRZN6T",
  "key23": "57gXhTJv6zQSszzFyGUfgXxp1i2r9RYb3MKiErv3ULwZgbetMDU7JioozHGqkTNmECkt1S8C6Mp9iPmQQsvz5vkP",
  "key24": "6uvjhfDi1Z7av3G64kr62hn9WL2raHijaBDwZX9H8KYgXCc9xc3woBtRA93sFdL5HZ31p8TUK1oUWbYCHKaqfCz",
  "key25": "3VgPpgLfpL9rHgWxYrJjoE35qM1E2DTKjcLsAsD2bcqooRV3sb7RtUfo3SLaGeKZMnXm8GXpD6SjJpX84wQcszHR",
  "key26": "3T5px6eHtt1Gc8bf4WjPKxF56utm2zXDTnTCxsQxUVeUzi8mnERBQS4CE83fYiUnNoao8QbczjhgJo5yG6Fj9E3d",
  "key27": "24DD5A1umjFdmZbbTuCi7wCdK8nuCeydfToZaEzsSYGhQph1YB4CwX8VTvL5sT5RdN7Tu1LrzafoL1VZ9VbUNoAD",
  "key28": "54v2NYwgiHVL11czhBow3sQbPqmgwT8u8QnGBNwYibtcc3WJmh5BSUKaqtcm9LUD6dgHP9gZt5MMumrJAAuE4b6Z",
  "key29": "4m6fMMuCFcAabAR2y3tWMZtX4iRP4dGhKCam1bVKEGhQTMKtocQULkZRGHLJvu7xRdoUeqB1bmmvHGdGGhctpZDM",
  "key30": "3SgaGjJ38N1L7fgTRkEdsAoHhjVCafTkuKv144yK2na8uJoDxwzDVhb5X2m2VhKY2Du4xPke2PhKXm77kL9qc62R",
  "key31": "ngcGxnBZ9bi5hQ7bDMg5nH59fYuKsw61Ked5jCTcTDvpd3cYc3bWbiagq8zo5wD2jJ81jFFgZSZudT2uVymsG5S",
  "key32": "2FQ37tPsg2aeto9QwszxZFMjFSpc3UCXKZ25YNW3aMxvYrSK8igU8ziW5LqL6jCBMAh5VX7Dsq8fJsZPzZWJWDKn",
  "key33": "4UYxU9DkrzbN4zU78fCUTneZz1rwEjNUAHrCaTomPXxhhmUXqPHXVb7p3sTLG3YmpmzjPoyrGFaDaGCFgCRGVEw9",
  "key34": "3oH78b5df44RVcQDqTb8Y5yqXQB1DUdviVSQzb9pi8v3Uqj1vnReC36m6PXrwtTAbR24KpUvZGtvFkNJJprdrgDN",
  "key35": "2ryGVVS2wA5QrviTZ6aoqmwgYnHgnCvB2XdEzRiH3kgnptHxafaZ3RZd9b3Uw2vDvVBjNdtBJQUbYogX21PAg91r",
  "key36": "3nuGoyDmx3bJQ78PVzBdnnFCjt1grBWwHMRRfoAngpAhwFSRXpd1qSwCbRui4CPGf6tsryfwFR9HoKp6AYhLX7AD",
  "key37": "37rXKRYk46J53GYCPUhd9EsDNuv6sNNkiL6gAW5UoBBKon8nwXf1cH6CVoP4F1hxLH6mYHPrhaV52h7pAeRkYaHq",
  "key38": "mXcifJc9KHnfbpoZbtY5EuAikkKi3LAzkk3JSakFRhGYevVYD21RL7MP2C1GNQ7R7ScK2zzW2QAaLdxhxc5vjMo",
  "key39": "ABcS5pzPjfhVogpe2BGxpXbESc9YiU6bNjRpH6Ffx5Lghf6yeQSJcWHQsqDe7YNdvvos85CvjhUCdi3PzsBQtWn",
  "key40": "5MhpjZJhDqTzUaSUchseJkqcLuLc4ipA6TJJ9mivYfTj4RXjZvAQTiyU8BW5nvFKLURzF66jK45MzcYGJCaExd4P",
  "key41": "4hB2FbVQfUYNKZLkU1XNhL4eXqPd8nCym1jxSSQVedgAVDkirjgFVVrhuT8qUgD4k8WgfaGFw7rShjyEPRJPS9VY",
  "key42": "y3a9Lx8EHsJQe2psM6FCQwf1qSRSFsBPY4xzcaR26GGGzwSrMgbxmf5j2tsz4cNCpHi5uXp3ZzT2tojVMVqN74E"
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
