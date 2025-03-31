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
    "woWtYJH6gvjRBV4CWAg8KpAKAnkUnqz4NL481QWzqqbjqPh1NfSjaajag1LBCV3VZWRJB994MXvsuMPd7i7E3Yi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DZ79D6kaLsTy7UNijqQT9RG61nY9QL9pMPq1JKdv5N2rkc5pz3jizrvRJzUoEcXDwSZQXKziJCQxx7BnJtkDsq4",
  "key1": "59fT9TVUXtG31Zmx3CdhvKqqAZjvDyvghRhABwWysuZg7C68QKBv2B5MbbhmR9sx7pTU7mxJ6AsFFbxGVASzz2eJ",
  "key2": "2y5zdujGkYce7vbg7WsbMBmPk6fd5EProNKVg54VK81ivtcRyY2cFF34SoVeLH9BViUD7AaapGCYyVKhPxxhMASX",
  "key3": "3nX4uKQb1t3CCmpaQiP1o2mBUdyeWzdJ7k711pywU1SBVFY2RaqA6igEMGeMfnkhHrC8a5rm4QuRjBiw1xLX9Lci",
  "key4": "5oHaa2ozvCiuUYewWikUybLDuEMXwu8kj4RdgeLTZLJ5AtJk1su9bVSu2Pe3EhvLZXz4pACkNuD7br6SbTSz2h1j",
  "key5": "mXGayoAX95n6QsnH8y4arS2m1bj3HXAbbtNatR8xV98eDN1fmcJ1XqnGUvk8GRPGDde2TAbw67jeKe8GakiGBMP",
  "key6": "5BjhErmZVhhMKY5BskbWKJPPTRjgjwecum6AQLXAgEDT8CLoPJUhMUPXKp95veajpDSFUQ7xVLpQKNiE4Q4JqdCg",
  "key7": "5Kk3t8RBzwmGW16wemnSsi51Zi7GHyY17RPAbeLQkZETnQB1fpHN71Y5h7EipoNCECLZEGocgjpc4zi1hqxctcvU",
  "key8": "3bc6Ku954V7ffDkjqFzEfC5EU4h9QWSvmHHTSx7mYzpP7pwSLZQyJpt7F9JDmj2eDuiVGdqbKUWk8YsXUNH1vZ3e",
  "key9": "2PsD8okngMH4h4ZFR4AggBM12UYY2toGszh5imQ25H9BnDLSQAsvLoA4ntfu7SMbx3UMNrYgRomhcKinhanrFvr2",
  "key10": "5J8LacrmYNcdSPTKG2JTSvWjGtvZzzNh2bxEZpAYJcfQnDZjH2msGauBuGxapiUANQgCMfrpU61uJrdnBUSTBgCu",
  "key11": "3R5hiM9AsGL5hmchYbiAsdG9uUiaSMWspEp6VdVcYkjZpJ5py6Lx4uVqeK4u2GFb3iUyvPSVLrTe9QTHM9aWMC9i",
  "key12": "64LMsBd6wmoaRB3rd3djnt3i67CPtFmmgV7LRhgbisRVW8twcLGUQJAkZgZQkS1PYqT3VycT5QNadm53ebQft5EU",
  "key13": "5yZ588dBPUHkCSR1THK3jjvyKy7qAWDx5UXF2noAUnqw6V9YiczfSzvtyXh4GKuy22GVsvHTjdfQuyh8LsZHoAWx",
  "key14": "4ENxrkJpXaTdpjq8UHegXDZfQcsPkhFP4nNsBXMFD1WwazEKmgNNmTAhaqHHeKrmqawSMkTbcY2wBdnCGaYk4rMy",
  "key15": "xusGh5LZMfpGZfiaaXuzhz5Nigt4FnEaQW5tMnDCnR6W8xYoccwwh9TJG7Z9iymdXjvWv7KBBbBQX7coRQgc8HX",
  "key16": "4CKAGJiMLsSi36SUCBMiCPv9T1CqL7cRBXRXUZif79edSjVBawZBcdciejPNZG1gce4Sr9S45n5v4hc6eZbWKYkX",
  "key17": "xJy3M7epDgB1mb655TUX6xwwnY34arSzNQD8pL1qNfckBKVneNNfbD4JrEn58PPeVEA6br3PqvCc1NpFwJuYq5d",
  "key18": "35JtP6aKrki8qsVPVN1wizcBu2YnWZFGTcNUuqPKg2eToTYvn4fmT89cSEDgFAmqzAdDpKkjWA7UgyFVqp9Pt4Uq",
  "key19": "PGJDjZ3Zec16Mu3fTabnX5Ls3eb874zmzAxPXwg82giGV3CArFAxzjN5YBZBqUWwouscCJZe1gcJ7V89s1CWQ2Z",
  "key20": "2wsvPcJHucATTpVar3vfsSoZn2g7HtrF6h14UvNjFp4wfXotoAPwyJgQ74TxUSGJjGDeCsiZwhkEjh62S7QPGpcv",
  "key21": "5kCSX6xCpqf8ZG643pQ2skWiZuMGcNioY3VfNxSAvPffFrDCNaKEU7vPQKfjzG7vGuE4wBAQ1LQ92PNX5vD5aXQk",
  "key22": "4qFXmdKuxXKKEZvm6EyoN2GLUYtBnt3pbG3hAAfquCtAdePw999nBgmXk29Cxt5seToLVKYHneRhRmnC85FhDPcX",
  "key23": "2WMMFLhHMGzsLdXNr4EdS7B7xvbxfca2yvJrswnJp2uLibjjcHEcipquzcXHgbzBS5gTGhFJwL3xEY5YF1Akd3hD",
  "key24": "jkkvLjXhpHNRrzcfb9irMjK2EDMSj7bNvF5zKmNZSvBd6GGtjjHZYJGTY8WDy8E8WAztChZ3tnHPYFaKGnxGxtR",
  "key25": "4mnL4u59t2UEfg5JsYXYVH58eAwMCZyD56zM9ZPqvSjjXqSSHg9d8pFeUvQNrMHQ9cmcuiibWGa3Jke2nrWtSc3e",
  "key26": "3jxm4vWsYWD5UDCYmiyVFo28UViiwhoHhfAg1X2KfCxda9gDhcAnssmXHHBCcTVr9MJfeQ7rVdpBsGoZ1dsfWJU4",
  "key27": "5UQmwRHUYK2MNT1HSCPqxq8RwCJDEmQ7Skf2SsUMQoQdH2vjCPz7Z2iiK89bPiNutECpJSG3QMK2NpTFUv1ev8eD",
  "key28": "4KQT1yWcFbMLrS9mMCH5vf5Ea6mPKXtWTXVJK9HkkoGGugAkFWDd1pFAxnk2zoPtypCLntxx5qp41EHxczfojKtQ",
  "key29": "5Z2yXzbP3FGnRERT1Sckkbo2GDgeAc5PHwy8eTyh1NMeB8mwyfKs93q2x6nMYfz2uSxGgn36HcAQNsu1hssCf8EJ",
  "key30": "2DkAN21xTJgT9JNbBif9n2zDNi4k9uTYvsi9MfXUj6HbnETPvox9FJs3v6VyoyBZdhJRwUtmPftdfFDMtyYAH7eW"
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
