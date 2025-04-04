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
    "4fnPGMRJXRVbSeUqLSGKS1CMnwKMNJXhokQXwXKCgGAoDY8qZ85mHfrWAJqK4JfGRXWDPujoaUu4WhzmsCZKYayQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tdXUdahtzKBbxKn2EJ6xFi2yR8eY1F5L7LdwLocsuhpk324vYNdfiXE6VoqeqtTAVQN5TKabaBfgaEzmpDBxpif",
  "key1": "5d9bAXhFawbeGMMzrS5X6tMfwxZ9j8zD7x3DeEc37H2vcoWYs74Qbzn1cr3M6akXf1Kg2mviFB5MfYjRiNi3huQ9",
  "key2": "4J1d1kk76kKwDnKTHvNe1g1MbbdkbsgELPUZFbAzreJ949geGGnhPHtqiCi27niWEV2PNCLaLeKdBZXBL8mk813x",
  "key3": "BvSTqpydGGwnpK97Y9mNoxztKX2kMeJjPef7HW1HToMMqfcDktu7yDvaA1U9N48M78E3HZq9wSCmpVuEHas9VSb",
  "key4": "5w9UCZLrdmtxCHonF4ArUizrqdc2Vs5XagKRPkpLkAXWX4rsQnY4j21HeDiPQAZDvf3g1b548DPahGzPjyu3MGrH",
  "key5": "4dcZpfDMMYCpyaVvqrL7aetZigL2R2YYwj2XFTy2kk5rZ33q3rDvJteQ46tAqpkD9Xde8fbC8Q7yJowcXzKYCdPi",
  "key6": "4pwQwG9ywfDvj6wNfodM5YsmXwCxHneYzFicasAVfsHGCDzfManUTKHFYzQjEF4j7JhBenoBVpzWNZkKK3cYUbDb",
  "key7": "3aMSaJu5ChKocWA9ksXg1wbgQFxg8JwJZM8GCgf7mQ66Fn8k1QC3Q3nxpViwKEQDC3fpR2c6uhCcHRRrxwYq2SwT",
  "key8": "4u1h1d1RoLL6f59fJNprbz2WLZzskszdCQ17yBnDqTdM6CpiZXT6TSArNVNsbxuk3CBoAJGwgDXPNUwbQGv4WiC1",
  "key9": "4JrvMQJ4a86gYCvB5VgkGPKngxpzKt6dWUWD2FifsWmxaqAC2js5qz3EEUwiupuDNYyE8Sjrv4bDtMvDYRNLkd1K",
  "key10": "2P9vC9JykkYAaXS1ah1FYJPHRh1Nt8UndAWJBxAeDu9zNZu95kekPAtyWtNmx6Kgofe4UNzWNP1XUz8v2kNB5RzT",
  "key11": "3WF6kN3yauV2NRp8DA9XuK799SMWCT8cWBpqNUtw1geoFY4FnHXbKZcEZDY5P9J18kdgE7QFbFoJXABqN6WrseeB",
  "key12": "4ALCvUb4u3pLr1WnHcYzKdg8gJa7joZBGcfyTXGoXG2WSaPFQsfkXJgcc2nbo2oPKXVZ7EgnKV1vDys1msvAQ4jG",
  "key13": "4eetHiR1qLbtUM3Z7VJvHAuyYgKt3MXs4kp9RNtP7FgtMqS4RVYkJpHFPNPiXctwT7rG1fbk3kXDnZgtjco7AR6s",
  "key14": "4uF7kEUqizbXyHRkuyqA5FLLzFMPZycDz3TW27LJtaDRDSYRkeLGoocJmiV9zTc6sYUWVW7KvgyeJHRukZabbxVm",
  "key15": "4HgsrpPkkQ65EYWiQK3DCTN6S8pYSfsznCR4cbhgAJ71UjB8KpLd7VX1zbHBi4CUUeJZ29hPVuBvNVTYixK4pqo2",
  "key16": "4TrQghWjNBfKh2mfwJFZKQRVvpVdhK18iAEsqeiXE9DbazHNGi48b8JAPMWTcG4xWbdMMZdjQLDNhMMsuPVhhB73",
  "key17": "UBuQD3jjsKGVnuocP1SViZCTQv4539snfT4gjSrrUafXovPRXzX4p5UjNcV3ga7rFowWwt1fH9QKRmjd1bS3Wak",
  "key18": "2e4LQzr5hweYjwrAa2d9BcuLrKbMThgL4oFMQf5TEhKHvUosdgGNk1S5nmkqHpCWTHgb3ru5jjfFtYXGDg43raX2",
  "key19": "4cZhrW5r6UNh7Lui3zKxc1pdG2ML6idMyHr3VrcCq6fRV25oSBThFeLRUmYyYm8DTHCaBSDDGJEA9rHZewSuh59w",
  "key20": "2BH3SRPRLJ3y7YYaHiiPW11SoyTZuJZnULAFBCVLsJ4nY5knFysvVU429QJaN8BxitAxRbiEqtN8AjT2nrH2fb24",
  "key21": "2iEZ3AmwohbVU4uizzqJo1SrpF7ya93pqV6vi68jAzKkG6zTBNfVrn79QvkhbVavd3mT3XZj8RjYswZV4kVGk5oG",
  "key22": "2v9xfUj3VgGwvQmpdNpSguqa1hGV5VPRKyrH8Yi3U4NXytCx48HAWrkgz4NeqpaaJ4CccBpMqDaPxLkx6L2ThxRm",
  "key23": "5821cUAGHN8Tm7AA6we3eoGSjBoQaW42B64pEjBECvFV9YBpH9B8U3w1gLUSvXEFTbnoDFUWY6jnbuPgiyuRWMsb",
  "key24": "4nLoNXaHqsV4npizFYshh3qa2w2xgBbVJqEcqgaYf913DdB1VwQGe2e7Zx5cpJfey6TXuRpBDKdbKbTt4NXq7BZB",
  "key25": "4UpyvdwRK6EpSqhMZtXzi18UkpZMRqULm7eN5PNWDsReQcN754YD2gtxqBY4i6UrWTsqEqpLakeR6tH9arnQ7iXA",
  "key26": "3dLz6BaKBzydNgRGjg1NVDkqVUoZbn4dQz4U25ZSR13sLZa7J6G6vcvvdRKWSMuPig3xHAge5X27pXn5hSi1hgw8",
  "key27": "4Javufnbdk5Si4maQ7dL7iALDd4pjHyF7MbyvvDYG7LPDBNRiAFBThcA5bGT3gRzTMxiXhFMRXYQ4XpBa8isqgjC",
  "key28": "2Bh9xfhTSDLBmqedScHrj42Vm9cSRNiPGsNnqkiRnQsbfqGYBSYKiYbx5CzXZnA1wdzcpLKWhFdWyGX59EBCAsFu",
  "key29": "2JdUHeFXRPmJZM1r1urCQeeh83qqnWDafF53matNqDZXGchjV9NmPKSGrLr5DjbNGeqdwBhwyQtV7ZXDBRDCosVk",
  "key30": "5KcG3j88yzHjYi1Vhi9EbXmA3QfLCtppAwXx2vtr5tNYM1bHkqCW6Q3RPpywJD7J9EcarWbsxVmNrk9jLyLTmtCL",
  "key31": "2kGPgL9225x5ex8DAotS122VEBjet8XGLK7f1KaEf91Vut62oCdi7iJ8ynjWHLU8LbSFCS7RiqgaJkTsmajzbaAd",
  "key32": "3FcPwveC1DtFJ13kSTeCUmDNHvAVZFVADEu9C3dWLr4R149dwDx1R78D6MihEwY6nCbPiZzwFaM47FmyyFL5nmRF",
  "key33": "8FS5JJeaKn4Ag9nu1ciYCiR68aWE1DLYqVW1bk6E3A8c4CVfpyPyT2tjCZbYhvJFfA1x1yQLwj8UhnBkmYmTECc",
  "key34": "4fTQngsPCjjNCBNCN9kkhHPQ7jL3eAYtBWQCz36BkriiPHRcdiXPd2ZLjBQLmkho2mKjcx8HYVsMfg4Ssuhq37ru",
  "key35": "91sgq6fecKHbjxLkbT21unoevbaFugyFexQ7hw8H6NorMurfrSsfFFhzTkQoc27JjtEqsKsAnd1EvyPfJR4D5DL",
  "key36": "434ZL5kG8H9EWBHVfCGXSSSEMMBDW9YPUoUwdKt1QLocoBFLfcPRZHYT6oz8xREVen5aUKoaSKcMwizhavrU8tLG",
  "key37": "4DvR2j8Dhqzms9UxLHG73AxsmFmauW9nPhorLUNkdN8X5ws4wmFL35YUEdWqwHpki52jtY2Li2dd1R4Ut2btTvEJ",
  "key38": "WKAHW7zz6Bz4gXYvtCaboAxEFnwVpC4y2er8Nsj277c1RWeJno3Hq69CtgU36SabcqYXBUkmfqdUYenAtGv4MqG",
  "key39": "5A42uqWRyKpBr9TyB8RVyPaHhVE7c9LJvK7AVBq44YLXWBrJdcXPDpVAG9afXuCPGWuXGsmrCzotMBDoK4751Fgx",
  "key40": "42Qgna1jYSWSUarx9ygekq7ruFWsujtMDhv4VytTphPaeiX5HQfUDsbuqDmwzj1BnvM7xKA4Wrvzu2Co337n2rDG",
  "key41": "2VAJescuGArPkunmabR4fZKJJpEokeTKB8oBa3c9SXGAx7sHsx7HXRzyF4ZzvScEUdwWEJekeaMREE5EM848VS5L",
  "key42": "kfqqyQ2iCX6cwpDNDPUXq29rWPN1L6YUUKpMzDLJCm6VtJfKV8ZVjNygoqjqHrsJMUFBxM8xAeAcbgC96Pm3PhV",
  "key43": "63UZxpNpgvqQjQiPZEexRmN3Zssg6JxQh2HwY8WHoorfDjYL2awKCRRSjos8bh9BamQMaJYH5xsSJDTdcVtJ9pTg",
  "key44": "4hSknXbs1dwDQ1LUB27L99bexceB3fmQuzSNtXUySqwRyDfXm77g1Fr7HJtwRThFwsToNETvKn91NR9FfogM2PQH",
  "key45": "4Ue3MwdxaNPa54TWhgwbcBsEq6ZwQcbWQkcRjbqet3NFbKtNP7koWvezaA49MedyVs9ksGZZ5E3AsXoL2Xcee12b",
  "key46": "3YXpZv96RxfxmHmjb3nYfAnzpji13MMADgvcx6cKPUnp2rrf3J8VxpWxZoSky3Ei8kZx5zy8cszuueZmkKfDfp7t",
  "key47": "2aBgSiSWqenKfJgRtgwGKu6fYu6iFBGctSayvj6is6e5bArmF2XbdJQfm5MEbvvP82PLqyorbzUMHNoKYHyx7LzX",
  "key48": "RDWrW6wyB7xoK5mmsrrwh9s7D525JCUhVXeeBvAh7Mvsi1JBEjJR2QLXbMV7b69kosULeo5avN2wiSxbSfmwaYz"
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
