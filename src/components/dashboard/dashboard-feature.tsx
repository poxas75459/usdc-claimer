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
    "MUGXy7tNwanFAaMn2vPqrtadwANTuAWsa9SbXywG24kCf6upAQoM2i9ytcMiLAjNqWAV8DTEuBgRbkRoyEvAn4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4diM2sEH2BjJRiT1adXMw47q6j7C41GTviJtLNgAwPTxB5W18Cj4FEt9Z5BV5AfYPbBpTF8S6y4fX9kVBd5PQMkS",
  "key1": "4Y2CznAZ99bgWqA6cfi3QSf2hKNyDeyG94tSqNYwNRPmrJZ96v8xkhjV8QPKRTLmZNAH6KvQ7eYQpo55gYwybL4K",
  "key2": "1sC7mAatQy82K2bEm6XR7MWatbgai11R33ekdiTxVPr6Ut8461zYUwPm8zQMJQyCTQiHDYFUS88vt1JDgtVJoK1",
  "key3": "5xp24hFb6DAvS1juZTat5UUdeyPDSpTaihQYoXyv1rkHzdad2dF29ub1B2824rcemmLiiXjycEanXfAdSkRumr1y",
  "key4": "3itfj9ewTLfbks1pzP53vv7VLBc9hSwv8AyaoWAngt95hkHtWJc5tL67N7L7HWT7dBUQQD622fWqwmJgFTKmkRXV",
  "key5": "5LXGS7xY7AuUQqNzCDmCtpNxjAMd5ehm6NdeZc5cdx3hpZ4G4h25MAAAL82RyHoMjdu1cSVJYU2fiHVfRKk5qsNL",
  "key6": "45q5wpVeMEdigQwtAqdQaQmZ8PUk5JWvB5Yhocze52CyszmSS5P6s4DETYkpoHsq3mbmEjNedqbQaXXZwg7ZQMqB",
  "key7": "52tuqN3oB61xp5XiQz4Mo1zT918F9TxBrUanLpkQ6c1Upi2r9XeHbCb8TWzt69xDQiFmKuZUVdUYQkCEzuy9mDQm",
  "key8": "52Y5qkvU6CBmj3m56H8ugi87VfdxDmVKq8TUjY1BAj5WQG1r8VXRSyjBQy7EnYEXWDxeTxCeH8kUnXKFrqJroNcB",
  "key9": "SMPXPQ3mZ6AY9hNcNp5HPtVa1NFcH4kh7HEnok1tooy4HpZ6ApBd6wTWNMj1gzCeeZZGPNHxk5izHkbqbpSAhA4",
  "key10": "2M1jvipZNUmA7GENdqx9cy8sUhSNcguTbmTEZh5AbRcP6LoA5G5J7aDPx9WvFWFNBcBnHkQjxCRcbAzSgw31RANg",
  "key11": "4Y7u8c4p7StMQG6xbmmigCAvvy9DjRQ9a2CN18g1c55C7K7HV2D6Ma7ARm8n8zskjqnEKBqUbrTHMYdXoEyXatA6",
  "key12": "3bUTpHeWaX3UFW7XWGFpcqS98XACdfUSNQczZS9a3brdjwNPF4qyCz3d3iaJfGvrRFf67WuX7MCms6zPDMLvJ367",
  "key13": "2mfJkGjeL6iPCsetbYBbYNTpfEXrepeMtRoyELCqRixJpy7JyEyR2drncVxZ15LiwZUPnyZoKw9SezUaqPYQCbhG",
  "key14": "4k3XauFTJ7L3HCkVi6RBPz7jt5MA4agg3fK7Nf1d99mLbmih5LZFa8Jf5UTFdkcmEr9vwZNKSkKX71r9sdhYNqmp",
  "key15": "647jfnXHfxp8BwT3BarwwneL4LCgtsDQ923WuYbEPwh5VejTQBgBd6QjHVTDFY8tH93p5fiGexctZjHzqzqe9vq4",
  "key16": "5YX3LtmsC3Nu1BkyNiR7UDNJHjFLJAe9gyHFKJhZUKpSaJf2YALrKjJQ8Pyfmg4Wm7LBv8EWgi32fr2igAtnE8RC",
  "key17": "2pAkHYdcRrZeek2VWx6PHa64MTjzZh3B6U7p5LZmWzLuAzX8tqYoMEaWmmfq2jZuQ1qYtVvs2khjvB9vgUzpBwtr",
  "key18": "YsD6PTVCed7UaiBua6tK4bwWqGdgzicnPHzdgoYgLr3vnqAAry9SgZFCcTDk1rLAxovSPBFkQ6RWMxZq2gDysbP",
  "key19": "4M6JmXLnHDmsUrc2jpspQT4QuqWCsmC4MD1LMzhZu9L7pFfzdKJPv72kWg1t4Y72LWLgPVUuYitWFHWBoRCAHArZ",
  "key20": "4cBANij1Gbijv6QLNux33NRZR755DF8DArHaMxFrm7xagXWqWLakiASHhxjE7M1uT8HGDS7QSVSu6RTWttQyFdTF",
  "key21": "3tZw2VSXUiySkuvtuMLr24c8TLitFnaymB633jfkeWjkAUPnFaapgLBrsaqTWKBpPAqHEwZKzEvJtyme9pQHovSf",
  "key22": "57kVT1CGmocQhEtUE4wQqb1kBcQbY1gWDhZVfodBHCknSXPR9sB18TK2fnPYbHRdJRX8MNzE6wjAoi9H9z1UfVvY",
  "key23": "2XabhyHkRp735MQBvfpka72xWeh2yT7YYTsnfA9odfgpSwaThPH91wKVyKgPpV7xiCJC6ihVtwEJK85HaYgvTEQJ",
  "key24": "36yW8mmqyFHMrz2QZNsjtj1Z3iB7eANXgCGh9WMRSneVWPDZbkMG3maccDUH846CWwevb6qqy3f6oS2M7uPhohQ4",
  "key25": "3QeHv4kjBMHTiYeJ7WWEqcSa4CPiX48jd6DnaMQp8m76sedcMLCxM46BTB7qCFAS3haNSGNg8CxHX2H8rZome6TD",
  "key26": "5qpRAFeLXPX2FHEj4kechZBAPUHYVuxDcx9EXnJ2T1Z4eFBGnx9cwjes8gXAvBvE6t4QxXLYeeVtaHgrYidVE6J8",
  "key27": "4SkwALHjL8C9nE1Lz6XMAJ5sA5cxpoEAjc4pPfx3EEmVMzbD7SGHteqBh8pdQcKsJqQcGipU79YxSJWdfrQknPUB",
  "key28": "hRLxpJCbjbMh2HumqLSZLuiWYEds4kzMAWP53pLuze3S6q2PSmztdxjGetFUbvt7CivTBGymTzTgmiPkwQhxp4y",
  "key29": "43QYFxPS92i5x8ysrwYZyCcudRAgvQX3ZUMuAahKRuzF6Q5erxMjJMezhtE7S1RUzZfRXyMzzwWPnA9na8HjWVHi",
  "key30": "3CroU7XwgWgnBMS2xkouA7qtivYCuNUtCksP2BVMrt5yYvyNzXfzy6tmU1SvPqKNSzPnTbsWY1feGZHnPsGfeUXn",
  "key31": "CcG3v6NdWbcyLeDvMUMajXXHj5wosWqVXEZPzeL2knbn7HZAcfFLz6HS9xKVnQWGisB1BYcHhnneEKNXGL56YCP"
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
