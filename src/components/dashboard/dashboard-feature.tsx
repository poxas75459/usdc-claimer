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
    "3NATkqwi52vGByBuiyvfYJXCkcsGkjnrQUxVeVgQbTuYzDaonC2EKpusPVwdWxMQffucjgkHEktoq2amz112CnmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4me4fy9ccBUaE7ecL7Ckk8Lfq4AuQWgDEL9drezFWVgLnQTJ2Bt5x1isLUEJ2NvK7pM8YWBCyTU5ucmpv24nuWEB",
  "key1": "RcuD8gAcmMBzNZfZ8qk5QtSsFjLMGoiXGFMqmfzzpVqoVy2QFAxRkAWxYMRT4vmtCiD1S3ypkeHVGcNdwC3Re61",
  "key2": "2uk5m4cCgduNELo7Tg417Zex7bYooHFj31cmkKeozJEnDSwWek7bMNoujGrHshMcGD9qLgBeWk38JTDN1MccnXyK",
  "key3": "2Cby1ozqzNdP5zn2L65cNw8LSsfAb8Kjqui2KrwY9rR6bC2wfYHfeAzete5XzqntcbbhJiUUJrbzxQYtzstLwqsN",
  "key4": "tmgprPtfcVrnuvFEJzwjRNd5ZyJu1neGK8rmczNUhRxMTb2DzVfu5szZZMZfF1dSAyBg4BvVMLcYLEfKYTznYUz",
  "key5": "484otn8wg9v2coLwbUcEDawDX8nzomd5mKr2tXY8rraMz9tD9JRdU9eRH6mn54F4fcBoomhBfegEVYXXbu5B1qTG",
  "key6": "3znxrcvon6JpWkPhLxQU5PWYw1HaZ5Dh8tUp3PvxBywSWEQxgnvUkcjbqigJWvWd44p7fY6fqean1sxV1bY6HUZK",
  "key7": "WitjC3rNYpHKHLdHUSscV231nM1w9t3EbD2HfoCVELZNTryG7P8UHGrdzJdtRkH8C7T2tsrZHqCdE71gxu4k5LY",
  "key8": "vghHTUtxT7Chw461Ko46JKyxtL4vooHXYEA8MtqyFZTSU7GvWY8yvyTwmEahz8ksikxhFHq9VrRDnh9NckWo6S7",
  "key9": "5No1zfbkXTsMQU7YwHc9sNGWKJ79w2e9No6JJe38S662hvb9vfRm4U3MHM7xW5t6WFL1Mb2cz411zzfBPmozesrz",
  "key10": "2zF478rFWpfhsH9BUFF1v5dG2bm7Zt8Esv8CociwqWLEEvuS1Qtv9jL4zcvuPLvmCC7KQuW6AMobzciXL9pdPNdi",
  "key11": "3NSpXVYcFUVRbnhqjni12sXn8xzMEXWpJDcVaN2Pt9uPpUfs8nNN1BsPb8d9JGvfhSfRUtMXgXE2qS2qa8Wwty7E",
  "key12": "2XXXyfyBKqnfMtpfmz1VdiEAmE7FhQKPatk53twdieDajJxnnXvbksHzMUUeQkw54Ykpes9q1kvvrL5EV5tPoYJH",
  "key13": "3fu17Yir8uPxWU7aqJTooCxjJ1qKozLDrDViSDGzqx3FZ3rcmMiUuFN2fgtosGDQ8avYbCGCGd7fLAbi8DbkCgKB",
  "key14": "3m5KfDjQnV5fPzvrhC7D2HChM7YBmHUgSMViEs6vcrdj936fdUQcSBiSnzCH9P9uyEjKesTe3YmkV8aP9jkPz5id",
  "key15": "2qZTzbay8BHLbeNWarDDtF87qcdPKHX93MFL1pGuP4gCQTiD4TEZPwVrGCMV5gDHBmKnn9BQhzd8z35mWUTRL9zX",
  "key16": "4Rp7TWSKLwKzvs7HH6bvcHTYuFT75msZERCtTHVsyK9oGwrpeuofKFtH94mzTYgYmps6QKyTYjUABP7TajoDAf8U",
  "key17": "3RCRJuvPGwd2mWQ5gPBuD8WFCdvdc5gjXF9FBRNSjyv4MS3abAnGTwL7MuhLPe2DPjeJPmPpWRL21vunCVmDRca4",
  "key18": "5ai852j5bXt1cWsrbo7hC96WdUxRJKG5wyXfMR8kgPFajXaNWDLCu27N55RjPw8ozEsNSBaTozi7MqVC3oTdeDGY",
  "key19": "5jii2gvZ6YX7H6MeJ2C5Q7zSF2S7euW6KN1aET5rgsLfhkUzrqA5PQYPpxcsbbakwYtxgHpznnoy22kAreSRBinV",
  "key20": "315je6b4iw6s1PhyDaPYBQgY39YAbHUrfdq2QqfMJ6ksn4JMhTeEbmTpXkRo3XTMyazKYkAt2vKfng8sLHV1Husb",
  "key21": "34WSbYD1C3wv4HjYfkJQMUAhNXGZ67t2MAZcckaSmj2Ygi4JGakV5tTnT5ZeCg8smbAc4riJT3cMGMZW7Y1rX71v",
  "key22": "2gd3aP8iZJKy57KbxZVpSsLP1YBHBtcTJk8KP2K6Nr8XQx96ZU8TSVDpFtKiTUVgrS575KFKjrv35tMYQ3NcANS8",
  "key23": "KG4X3ihd4R23F3Q9mKmaTMpzkhswvsAT8RXC7DiErJfhj8u5V7ubnVhvpv9s6sEYgssnRAEUUKtJtbab7965yLr",
  "key24": "2wH2fnnRP6GNsyDdc4uivhyB5cvkS21cjchqyoeBVyfmLa5wTV672L9ELaFKu7nsuHAM4vqS9cnFBe7KxTTYdega",
  "key25": "MCgnAud6CVNW8JamnuLEWVmM2gAUJ9UQme2JbFkD6ohps7mnQTka3HKwrbhN7ehnHhwbms9gxHcGVShk2rSzDBQ",
  "key26": "5Csuui6M9DNZhpQ5uoqo9nJJ4PGxymAjqMUFDey9mcDSQEsbDLNXnvhSAq5hQeSRVA8PssYj8pqaQPmjXs8LLREn",
  "key27": "NhKk41haqeMrUwXuVuxPQqVw78n9No9Q33Xahun2RuqrqhbDkZMxZ5GVuZgZVNaVw6NGNtqixxCbiogwdzqCqLn",
  "key28": "NsbjFxA8f3gGQF66Z4L91q32kCSoGGwNCLzFrmJAinqpTgaum3Zn3TGbAFy31sq7HVyG9ZrambKq68ifz664Pia",
  "key29": "3z2x3N9FFYTPscCsvo5bPFYntxVeTBUN4xeposxBhMS6hPGqvDrrkWABts8C8fCNitGNcY8dB8v2PAQPK1qMnwvw",
  "key30": "3JnXMvqPkbUVx5Yhtq7KsjWNbFeChu3BxquEshgM31nQ2kpHDrnddorEFAhRS98WqAqZydYA5QSDt98J1SBFaUnN",
  "key31": "63Vb77L4MDm9fE85oG8HdnX9YUtesy4Djm5n3k2xcmH6fjWBTdsyXFYj59pCsfL7hBg3n4cmrMmbYFV8wjoA6J1n",
  "key32": "rtbPVc7WkNAsu5pg2GENabYNaBRhyg6RynN3y1x81bSHnPwgMK42E5qvpG8DDH86yptL5LrvWY3LMYuL9BDBVVx",
  "key33": "5DQSbfCehWQkXwN1ZrW5EzawNM9va3M7PHXuR5AdCpCH9a9J2yJDcFYPp2o8s9U1eFtA44ARyFNxYcrNbnCe3n71",
  "key34": "4yJU12qFyJ8ew9ojwHm76yPerPCT2sJHMZKVcNKv4EVqSfseDrjZZQqvi4J2VNRxWLcgjoFYmciPbaJHTk2mcEpf",
  "key35": "55GZ4YruhyfBLs65ikXXrrYebci9ceWwTe3s8WC8fZDwGVXoDLsgPUrxb7xFgbo7hfEMN9en9Qz9C8hAxGbF12CL",
  "key36": "5KFUyiEHP6hH8nvyVjerHYM2QjBgdVz3EhVrTsesfkdXN5itZ7xB7Liqpo2yeGU2yBjFEoGpDN8RU3JzQdZV1QQr",
  "key37": "2EX8GYiLADPVa2y6C6AAYzBY27uiwfrXvziCDT3Ebg2Syv459cdDvynjynq1vYnXoKyahicUB9UCt61CSdoiSwr1",
  "key38": "jppabS4iXgxXyxN1LwTzsY1VVZ5LR2Ur7x2yBjqmPAtoPYHrHn2iG2E171mV6kiWubvgoo1JvxfVxwCZPjeEfYi",
  "key39": "3KnpsQ12dPepWBatqnN4t9qEJ7dHCPBPtq55E8o5fAN76HsxCfAn3c78f7YniX7ESa4ijuMYHammd2mF7q7gLJCJ",
  "key40": "4E6ErBd9wkRbe9Rzpt6MifQGMmS4Sqn9eJR4fosfpUofLnX1RdeTC6r743xDfgdZbPW4A6ezq7bzfqJS8DihHk8j",
  "key41": "4vDrgHsjtM6Y4BzE27p8XsCYg4CB4Cfv1jU8EJemsJNKhNzaU38ULX5QDCa2U68gfpdT9xa5JJ58QmRscavrchuh",
  "key42": "5Aiow7ZJTi41MoYnueB3yVV9u7SA2rZtFdtg7SWtbfPp5HsBEahWjdY4ZYVAvZJ46oUTmeUPgo4bKVnJ3NFvZQXY",
  "key43": "66QmP4jxxiNwRkpx7vFGcwxFMsYt1CLgTDgyoq1EgeJdC8bV4pskHrPysWwuNsnc3LhqfTn8SKoSwFjSNjYUvEx",
  "key44": "3EefsZMnZS57FScdENuKZ4HYhLQvLxh3GPaA41EcZdKsqEvxT49RvfdfHfgSra9pekoztVVBALdGnC2QsTfeFUxA",
  "key45": "5WXXNnHLESar6JbhyE1V5wShqAad5iYNfinecoQksmhGLBT2GZvLVHS3mRxKJpyDffCSUQ56Duo8F5kmhu2cp6uf",
  "key46": "48NHQxuvowBFo8z2o5h5hKoNM6EAQoxKEWwN5WkYXRPrEuHTPF5g8TXXVqUVY7pk7nMfFw2CQidEt21mGSmi91F4"
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
