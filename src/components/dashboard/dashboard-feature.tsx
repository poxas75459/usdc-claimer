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
    "fgdshUhVzQL2idFKJvDgGUe8fSNeYUriLpxfPY184vLdBEAUfedyRjhjHC6WwBLu2Ait2vrfMyFueLTcW822MSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49sDtMsCZHnZH9RaqVhhF7kfHVVg43geqEbKgKPBRij3rTGDpH4awSvt1oXdUj6mvWLivThE4SDJWzGp7wCPXShA",
  "key1": "3dAmvu1dBLFhcMfu8MsiTCUdz3VYxq9aUMSTSFsXc7oxTVABykyG3dHw8Rx9MfgUej5G2fitmasdb1cPmqksiCWV",
  "key2": "3gDb5EC88ndiES2HvVH12Az2PqZh4MdJHtixgCppN9LVLg3foRuLXACg7H3nSJikkMtP6oVCJSYFvbxWnio3WEH4",
  "key3": "9ob4KbWmvDXr8PFWBFXg9MN92cPjym639W6fjU5aZCvhWWR1Hqb3DnkAVxaAGdKfijC2avfNAxkfsTjzeokfL2z",
  "key4": "JWZX8iSFAYFxdAHWUHkBL5Y5Eu56roz2MH2nphDpziRTowRe1PMjJNq4McqUz2YhLfX9rTvRCZuyuACSu7nV8aQ",
  "key5": "3pL2VsQfmkpC7CYtAkoTo8Hx1ZM3EUU7qe1ZBhMPWaYfN3mqaJVnLtf7eSdB78DmBpyiFZ22YVtCfN9iFdijrUqp",
  "key6": "2puqtDHVw7JGUHvkqaTBFyimR4wzSoL81oGDs2c8P6DFmtLbs4RQejg3G5GoovBrhbE79AtAaAAbSBo3pXD33xgT",
  "key7": "59wPKQswRqVNCFf7EgApaoJAoqKWzrJWFG7Z8hghsJccbUXbV4tjacMCBH4pG73bj4ssnxUL5U3E2Pc5r4Ar6zH5",
  "key8": "3cCHFrgKDKBttb9iiCKDigJ4pSEhS3HfzTmima8UHmprebqFQYbqknNsczp2epArTUCCdu2JbNG4HrRbQ7hAueHr",
  "key9": "2Z7EHa2nV9qYe8m3rWRRVJqKhWWKLw1N5TDmhnicCjMVxWwNa74BQxtqsUMem1khABjRArbzKPPAKNDDmXhutgAQ",
  "key10": "3Su8DSphLAtBFBqh2CbQgvMh4GKjPJRyyH3dpr77CRwWFSHPL7Y5GBvBAhiypGQZVKcNShPSTnDB66cJm7C1mMN2",
  "key11": "66WyhNRMFbcSqg63PDUFopBrATdnH3kDqY2nPNCqNCTfKQ41XUtuuYzUjXQdqvZUeDbSZNtb5PuWcsMQP5Di87Vh",
  "key12": "4NBCUVuGbwtrZUvNsDFnPdUnuJhK4tLjKccMZniwnxNjPUvyC2QHnMdbqXtSsoAsRS6vkaVFmWe4omFcCzUofphg",
  "key13": "5Wy3B7Y5r7BVPAZGYykkBcvh76tXcoVVF7A1WqoGEoJggmnEksPb7Lav6ygs2gpk5ESvAWWW5uVDr8BuhzMUqsk8",
  "key14": "3SRxrnbqyTEq9z5Cb1F5EbSYC9RC2WLYG2wW6MTym7cGcwZrvP4bJHZNFJEJZGTJt8au3fdBuvfrFC9hqgRCNGZZ",
  "key15": "5kLNCByTqidPH2iucdtjZzJyQPEstFoNCZnqRNAnNbUt8KRbnhvKZnM226UVfka3cipmoDdCwPi8X4tXUSiekANE",
  "key16": "2kWJbQfA2TTy7HwXt76HB8KLazd2EM9ZTyNVdZL1U81aPM6JeRJ4rWcPxL11kPVdXUBdQda56J4JrCZmtAvfKC4x",
  "key17": "5DdJaDfsZJR4Vo5FWnAZAfupyVTWhvnkx9NvL8uzCyCZYoxA6WY2aVPQm9UTudXvAxj9ph23Q6AZbn8TcNsAR6wE",
  "key18": "nTgrrmjuKnPoKdPgd1K5Cn4UoPwYqGAJj8UTAEAYJjPgQhczr9b7ctMyL1oKmWsCsuGui35BsUjfSEPzjDXCXKv",
  "key19": "5aZbh1NV7kUhi6QLHwoBq6JykjggMWi6GLhngPR6swhu5BSJazAEpc3nxNbAJ5vkpczRquQBJaSvbWNLab1Crrj3",
  "key20": "2jZro1Jfy5DsxVhKgqXKVcc8iUWPk1r7sJ4dvboPivpeCFv2EjWVXNYJ52YRKitztEwosV1ZAWUAnnfxhKMFhpfu",
  "key21": "4oTedn6L2yFL6CmhD4oFq4ZxhMmMLDuVpJJcK8NWZVjw7bS2xzsw9XLYkcHuD4BUR7fs3DxGSCuoEG4e7kEKW1Yi",
  "key22": "3LqNzW1V8wxHEQCcg7KLLApf4rLfXcm4ZbVNCCq7ery5Ba9FXy9r1rrVqFJovz5VQcWdwLMXX3zcMnJAS44P8US7",
  "key23": "3MUvfdxt6BraZNtBdLxm9zQyFyb5chYiKuVzFU1NnRM8mPxYFZRtWz7Fy1q4BF8zAtH2fhPRym47cadzUnCXB1fk",
  "key24": "5xjtZtnbc3noPWmvUs7n9xq2Ac8j36AzejPnEDhR8cySB3eVmXGh79ArPr2TWb9k8ByVSxUFanVQ6xhfr4f1Au9x",
  "key25": "4secFuLSyvsTw4oVu6DuTsNdKvpPJrh37P78pU5ULRw6bydn8orsE3hKH51JwNSZzHvaBbWnUZcvA4cH9pRhDKRs",
  "key26": "5qHsGxxYAn2uamB65iMjcwWKtLziDtVS1FPbW6KDGy5dk7Jd3nJSydFX3KTbgdKazhrkg7zW7hEqzEAAr2DjBg3e",
  "key27": "4zuRXmsKUJ4DhXE8cXDBoY7Ke9Tqqy41db6aYjPnqwtVPWyjizgTxJYFxYKU2W2KgiquqWJSVHr5XK193J6r9Can",
  "key28": "49kdAaUinDFi2pT6AY2ksW5NHAPnc6ikty7jeADNziKHwsoajA5fAH3dzVhHacnvrzrqW18krhndxQKs2LCt8J4f",
  "key29": "2uA7s1qecyuHa4UFrAFBMnJEJUd8FQ8D9kqx7bEtT2ratFA9tyogefJtw6KeXyC3vG71o9XidxFCEao9TP9LC1v2",
  "key30": "27X59gdodd4rkCUnoCVFW5HXTd4TqLPrZRHnypE5QJCh4ojA6Z5HWCX4VeXFZ4kdW5V1Rnhr3m8S6Td8a9nj7tnc",
  "key31": "uqm9x117JtJh35nkB4NyJCoQFERqHpdaVNqCDQ5wF8rP18vgawtps62ijdB5kHinQ3eTSRw1RR5wMsCwkkGKM3H",
  "key32": "3cHwoNkHw5jHFkNoCp42wJnK11PFHwdtXo53zvUYpQWRzDK9DWXJfxJQY5URqN15yG1WhzkLQxNiy4HhAZzS3F8D",
  "key33": "5E5bAkXiBZZcrHHa1jTcbY8dZ9JHXxRaikMjU9tDjioxaGqhtftVt1a8xhidoc56QzBE4tViXx24jPVHRisuPtG3",
  "key34": "G4VsQVkQy83G78Fy9mefr53FhC4xSfXXqQcNhxACUUbnYqpunGj633xckYETsdHPXWqUnBqgnR2a8vVqQR5mvsa",
  "key35": "4NxZN1arfGJb6wS2r8X1c3abNAcMvFXWENRVfb1gXh9C5hHeNdd8gCjkrHDuP5GeMxMJxY7thBAXUQTgiesSiG34",
  "key36": "44pARGspD17ESSsd9yRkekKqPwErfnooDNBgQbMVNQk166F2EsHWpu7PEaEKWnTjrbtFMKfaWFzKn3RpwddJ9JCU",
  "key37": "5NPE2GrpxYXyrtiGewf19neghDPDvgU2HeZYNyknpg2iQAhXYXQVfdof797ch6zcCL2BnVLRuVtCCrouskRimvhK",
  "key38": "3NhcpQBTQWTarRVeWdXsbN4NmLXUyqecqezk2vj3wdD7XWPbyr6AKyXU8u1mJEP3h9XqYe44RCBcAUys7654cUnn",
  "key39": "5NbTFnMRyuiSMox9UJYirhsCjJmbxzTDekSU6k6wwNy6VhYnXam6VYHrWeeW1X9hg3DpsmbcJ5jkiKV7E9ktSWLE",
  "key40": "6FYQCpx16wvQWBHTd9WpTWGHZXPh5wqvWVzLBoFhRtUmHF7dQVNh5DSzdVPZoXPWJw45kZvvk6m7U5pmsRYnbKZ"
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
