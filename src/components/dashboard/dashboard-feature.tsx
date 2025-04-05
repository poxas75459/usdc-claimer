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
    "3NKSv2CnggAshHjdB19V1mfmD7gY6gwr1PkKCxKDWzXGQDMXSpUsBD7yCfs5i8pygDRVbXgX1KDbg5rjvdNsztDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28FPzydBFFL9YaRjPoqVFHnKbNDrSjS3SLLhEjM1U5iqJMHgckTmGGHnuJFwPBjFzjVpz3exKsv8WgDUip857iBE",
  "key1": "2MpYqX2meBPxyHAsscNRTxcZruVKbu2NWtbKK8xBvWRcT2dY7CREmwpZMwryHvEZ1eGtCbQV9z8Umzodu294B2Dg",
  "key2": "2aL4iRQcgzug2LTymzheT3PxXip6DD8r2PzA1Z6QPXvoXusnorY9SiBSY4iVVDP92qMrvTBpAH3SQaQFttHFNc7m",
  "key3": "4MNTT1hBXmnG2RWTQAthmSr5tRBtugDhSDRpYYeeGUNEgQVdStkN3d4CqpyW61MCFs5qsgWdZR1Lo1wRKuySRPmv",
  "key4": "Gcr1NzHSJ1Ghvv9q635hgvysvQsMMQuBNwpHZL5LEztj2rGgqph6iiYA7bLP9iu4fEEC5behn8eyNvcUhcUqGar",
  "key5": "5rhtZM1UqcuTLnF6GHNvTRRRNcJDyurSyxyZUSCKanndasMk16ekwPadfyjsBVLpiobwtvYyCEJke9Y97UiJk8Bq",
  "key6": "4VWQb2Me1cai9EpdB42kC4GStKmkqLV2aothYENpvK9C91ZRSVVgcuDAhgdaPmRouWpsy1dAWCA6hNFBpQ4qptt2",
  "key7": "sEaaFjZsk1yddse434DpytTbEkNiEceC6AofytKeLKHUmXNFiUHbbVLZJ5FjbTBhANyguLUKFCUbMssqoCurVct",
  "key8": "58PqH3rWi6KMvBSqpKemTaM15DtjppWT92kyqr8JvZZMf6fTVnWY5hNtc5QdFeVxhAnQmRxxsrRm9UzwQiuumKL3",
  "key9": "5kxdqSYeZXPrYEmfCLLf1bj2ZvQgXpHzUynmLhK1kCVHQpWeqx3Zz4z2mxp6zqNgcgcCnuznFLMwYbMdSFSWyoEG",
  "key10": "5tN1PVTudCZoi6oSBboqNiSJcSzXBKKtDE7PTY5eQDbtTLFoR3MBu7hEYvmwhtnMnCLt3WrYHPGWMGsYat7WrtB6",
  "key11": "ivxHheFBFLcjgLXcTsU54BPMb4hpezuConzet2tCVW34yHBBYmHwC2tbCtZ9JmiNyLQ7ogyJnoFXPZskULWWg2f",
  "key12": "2Q8VWJWaqM2idzGYcqFZFvAAKcG9hHrWXj7hW5qbPfgE2h97RB2UPMxQd6fXYEnUSBuk9e7KL2MXKVQMKNTAjahV",
  "key13": "5DBaMQksVrpZo5u8GR1SQrrsWbMMDWtTBY5Y5AJQUVzkeHZXVZ4hyTexNSHTXwCVYYmidswgMF5hd6STJdcjakC7",
  "key14": "2UkHPhS9rRJymEMYTUraUhBmjYy99DaRv8h1DvovVyvSqELHnCwHrr1w1p3SiTwjNh83AQRjPVrRB4h3AH9fhPTy",
  "key15": "3XZzqY2EkvXwgmqEU3U9F2MFA6SzvWAH6sPHz759uHs52urnWjn9fUTZp8uvoftHTjvtfNn8MNEhbEMvdqyqfsLV",
  "key16": "5aXeeFqVLFTheAvztjvPWTWEtU9RE5uAZKSF2D1KQYhLo7VAxw7h2warmgenhfkb6aWgFHuzG1mSv5t3kAHcJAS7",
  "key17": "2z7bjNK9vxt42YsKbyJ3TFFiwuDroQoGTnrrtQ1RWsx6zuHviEnQ8Um97gNPWAWpkMTwQXQFnAo7q1YBLYkWUCAg",
  "key18": "5qyvSbvx2BKXcAtzhtpCwkrQPgt6wPbKjsBtWTY6a2GKC9RSizN7tcty5oayjXQ34iN3k6G5C6EHwz3D16LxMkYD",
  "key19": "55YVRJGBCNdssBfbC5TuvqQ8R6T8xxptK6u32uL9RmvrpvDYh6oeyt5aMTfo7GyxgNPc3DJSjs6aRzh9iG74hBir",
  "key20": "4gwVHdon53Ws5jYkn6b28GGUTBfDkgvgHxQ2xVasFuCGLbicZBScG5fTBxxGvH7ZbyoJYpPcnydxvyQgj7t1yyEN",
  "key21": "63K2kiZS5veDZ6nb2QJWxVFPWQZgWNzvoNaJZfccdqAhdBWLW1SuoDMLpgFj7vMJpPst4pudB9FPMDMKdSJxo9Px",
  "key22": "2XtiRLDB13rbxwutf4mhbeze72HaPwidjhLVZpAnqLeMy8tUw9sJEQzDsBnbGZnSkEZDYe6JoAxGgACmRTxCPKXQ",
  "key23": "4Qzf46q2sQgVQWKbCGebDAFwrm2FYWQsyLcib538ZoLuswB6KtYoNTeAMtMbZQ7YjeH3fT1TBEqU81XPn1Ahsw4o",
  "key24": "3YKCmLTB61JkDAhiMww6NW65LdRBhrkTG8XFJKVx4ZHgk8woyxJk1cjgaTC6xHGaGKtYxZqM1bPGUVDmDih12vTr",
  "key25": "2NcshxGRmUYMj9zo8XJcyBH3gurPBmYWxpZdkjo9DjMtEq9jKUYpjXN5jXygJXoMWX5J9PtZwjbD6xCWZvX4FUdN",
  "key26": "4Vd4fdkWjNJykK97k42MiibQqXERZHtT8obdAByRNbLxDVEsMzpPy9ofQJdiv7oE2gev113zufvmhSpjdBJ1SsZH",
  "key27": "5YLf653mNJTnrkxZbQxkHHum3SkXCNFY7GasZN2wWt7Kk1AqhBxd4yymzfHbWPWfDxKb3AvsAaTck2cE7KQwpFTT",
  "key28": "UKBYC72mGdxcZVkaUgoBSAjPfXVdjgrbUtFFgZ5wjQ5ipCvdFpMBBzBfaTY5XEprxnp7Wo4LoBpxzP7dQFD6YoF",
  "key29": "4KG2qynUxys42wQmD1W9kLhYUncT2s65zevQ5z5YxMd65i3T4HdHPup8ikwy8rBpzNozthprL5hyjcVtRPVBh48d",
  "key30": "292GYB52fw1362m2sKpTHtaugMYGCENafLFy1tatCXfAYMshN1EgqgVqnFCrZpi4WrMKQqZJ4ABjYFF13cXvBFUJ",
  "key31": "48C2hvC6oKFKaDmraaaU7fQnbXBepwBNnViQTbG25HWvRqhtX1VrBewK8z8LMHUtcxyRDJqu2Fc2RPcwJgUntcN3",
  "key32": "2g3iGbZ56xjVVyPcFRne6X6NjUDV723zkoD4FdMVUdHE16Yw4adKStzxYfd1jP3QxLwdNSnZ2JLYR58cYsGphoWE"
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
