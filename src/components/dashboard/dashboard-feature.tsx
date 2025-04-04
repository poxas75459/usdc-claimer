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
    "4tZ566UN4shmhdCEbBmpne9v8nuvPB5kvY9CTxSAb4TtZ9BfnJKkiG36ZfktHk9kkzwBERgTrLAJxRwCHLbDkZXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uV3JK6xqcowLX4hzdCrD3NycVLsLUsPBQkGE3xTBG5BHJN4EaaPhs1jzEeYG4XvMmqsmeAine9WHQFZJ5jzigmP",
  "key1": "5dfgk1nE3RFrYscebW64BdtHng5zfcyvtSwZ9XfF9jqD62J5magciSudDDAea1iQZ4DCXha7B5XKnsvRriPccRYX",
  "key2": "3NWvaWkwuTmeXQyPurQrmWGSPHr3tMY3FCvq5WbtztQ5Zh1AkcqNrEYdfyfNGNq7icyqhYAJ13Ki8nyGzUFFcGGF",
  "key3": "3jGph5gaEfo334Ks54bLFZvawBWzbYt852Ntp8GjASwuRK8f8hNAZJGUK3JpsT41PJeuA4KWu46ieDPz7R4FThpN",
  "key4": "WgjWoSshMKfgGQPPGsF3uCPYnLiuxKTnNP5KwExJ4RrnEj9Va9Wwq1gjxHwZhfBbfenx63FwXgQ2aVf1omLESaP",
  "key5": "gZHmQ5LExQtNkHMabBx62f6vihGjyNDfCj313Wuz6mVkVr7N3ZAEqC9VnkVyA2fvxJ2oQ6MqTH99GhgRb7SL7vL",
  "key6": "5dQe5B4vx7gFvJfGHt644mEg6qERjAZ2JQLzt8RL2iYqJbq7hVrimXQ8WtcNHgEsQEywULPCm2aDHaSZNRsJWh1j",
  "key7": "4T7JjEU5Fh3n1FvSWM6CYDf7LdNJYbAqTGgLPNE5HwmPAwZKWhbhghmkoAnT1FMLnTrFcqiSDdZGvFLmv6p5J63c",
  "key8": "5iXw34zr2FzM9XeCHYANLAxNACodXkXNYPoJwZ2z5FeZNRvKm9NgKdfbuhSnmn7C4DUQVbWoxJiLWg5iq7tWkhRN",
  "key9": "4SLCTYNtUXDDnu88TUJe4fGbJUAFZ3CDse6mBwjtpYAREgYk8gk7CVhtawannnWeazSyXkVQCVQDwiX8VkRN8QEG",
  "key10": "4sr17AxAkJJ7iLrX75qsT4hZextFiBH51odD9qxxZUTiShVhp9FQttgCPxWrLE4qvL83m54PsXEp5bTnqFJGJTdV",
  "key11": "msDJZTsSAtqatuWj9TiDh2e1xscviMCZZdayTPGZqspRPAfJC3KScrX4WP4UykT6Zb8sreN9pg69j5nD9cfL4ro",
  "key12": "AzpbqTLFwJPncvgiPBZASrr2pC5fT1DeDkDRjXhSi7Vq1aNP5K8RSYd7Rrd9898KpG7LJjNSAES7T2SoVo7fsBR",
  "key13": "5ybcFTFJb5z9rsm73sw3BRpmPsp2SbnNeDxNRnVpuBND44qzVvgT4tKJettWkeWgoMTP8ZBrQzdyW8sBrwfBRUCD",
  "key14": "3zuLBcrSeWR4M17vp1bfUKNFRAauGWWbnoVEEYfQpm7cn6QyPQpUNhpA6SzCFfpwYv9CG6vGNMxADgRfhaAd55yG",
  "key15": "2shGdL9ptNBRxNiHTGqH7eVBoHm7kvj4L74xJCq2rbG56bPU1SUWmyWcZpkLz3eqAZLRcdQTvwwPGzs745JxYFAB",
  "key16": "xoDCpJw73Wmr9JR8CFFtjmWeSHfTrahnaC4UsajBtzoWwF9VcuSTuBwVy2ikd4wjEPioRsjg1YwmEbX9tZGDZxP",
  "key17": "62haxSBfSxFWcCURgkTHCe4FMbK4vx6Zc8Kf72Xe1DC5rCWdauVXp9zShv9TaSMtQ4mANqAitT2wKQiXHm2MWSCx",
  "key18": "21uMdSACjccKdnj4xnssRG56HxjSKNLgTxj8NS7WRXJYNj1TJ615Yrpea7frhU8yBhNtMffzHG1PKuQpn9DGzddz",
  "key19": "5beG7fhzyG13oUbHTkoMVnYdR6kK2sa1jhC5KBZd93djP7mT7GmbxZTaP3ntBG7zCyf1B7ADf43T4jyfFrXepKym",
  "key20": "3b7xRJnnrabqouPFmUthtA3S6MuRXeuHPKrmKt2WG1jCLgdaY86ZTCy79BTmGSrbE3SqoM95nuecb3GcGsycT2qr",
  "key21": "42SgvmNyfNNLciZkXxh9DyaqYPocbNtoB7DGhXE6jWUE2bErYFxmW5yZad8LvUhDxkLVPKqKZoG7RqzsfQ7nczXt",
  "key22": "2nqLNdnSCo4S8ogfAwXPLL7aTN4uovEzwCSXo62jAgi2KSuiwCvJhhV19Y5T5tonHGCdwNHiPBYGqmFxFZVQiWMT",
  "key23": "4mP5EyBdCh6HhbGSs4nBh5DZo9bAx5Tycprycq28pzyh9FojnkJxbJoSqSnjkfPbtneU7yCyw8tTaxWkPpe3cjRz",
  "key24": "4Rmc1DMehzEChxJtj3Jy5QEsJKpd8HQGPh2HR4LApGnGgVNXq68FAzhvZVBgz6tvEcXtMYRiFThF61bnhKf4uWhw",
  "key25": "2GUjCENCcn2opEo5bW3hMs3n1gGwFedht26gmaCxQyzHEBUij4ZPoGVoUJ6JgWYmPf2T3j9wwuT2RJ2ogFVHj7RS",
  "key26": "4LshMHQkohKVJxMscATKPe9WevsMuYVowVgrCEg86o1mA5y314Nuv6EsyfePByh9eqTw3jn88NPk2gy7dqMv2DU3",
  "key27": "AZH3ZBvxAmvHad2oi3p3yygmhhJ6noLeXfVyrFCr7TJk1JJeu1b7JKNXqVRU9U2Fgn8YCb5ZPVkUVsgNbpQ9epu",
  "key28": "4XPwbncARipHzFfghmwi6kthSkRQBcxwy6ZgNyeTZcd7nduxHVkeFfLbCkxHwTP3hdoPSTppXpP6qJTnwQVGnFmk",
  "key29": "3xQsEwx2RqtVzDX174zEqHTTc7CVHzdLCMNyq9pWVu9p43KuGuVaTB19ux1hfxm8xCPELceQsSnXDTGvJPcByxR8",
  "key30": "4mrtzvb8MP16QcFmRf7KYRtKmXnFNbnjzqX2K2EfrtnJBghiqG9WLAhXNaXFHw63APHabcsDij6bvDLqwWcAaXw1",
  "key31": "453WFpcnmJfzYvVKVFKWfq26iUMKephCuUeYaWYQprJtP9TVqCosBF5GD9buioMdPR8uKeHLaw3wmPzmsWHfSQLZ",
  "key32": "5BXfXzzoYYnFAEviYWmBAnjDhjuAgEsM4NCm7uXpCsSnqGNdCJ2X7yAo91eMR6D63zn7uFAHjFwQ3feShZuRMoS6",
  "key33": "GzB7ij4t9fXau5fsxrYnBQXkc3Gb6ZWPxXDia7Bge5G45JKmvPPf2k3tXrGkmntgHijFm8NHwHzzmd8jAGbA3wA",
  "key34": "2dH7L2Dx5hXAntvpGQPALKT33cvpSUqZPEaa1JR9X867TQakawBT8JxVsHy16rghzmEnNAPgLCE7ebA416Ns1GiD",
  "key35": "n8j8raoqsDLg8UZBK8ziwiJyXybMa4C7ErdAQL1ZJ42aBNJLo34XYFZk3qsYDJFfeVSwmrSAviALbzhcQWNtUJ2",
  "key36": "mEBmzqP1zDkLXRQ6HNzk5Bn6uRYQyKARcSRyvNHBiU4EUtTTYnQyUXEf9Mfy9gBLZTBFeyckGMDc48u1mPBu5hm"
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
