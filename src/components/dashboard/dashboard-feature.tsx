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
    "57yms5GfQKwX3qinoVjyxfB5rqtgAvMQDE4YG86LRSSh11WscpQwPLmi4s3ymJpe6rAfyzSqrRo8ijkwNBiKSec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lwf2SYJRGQqBQgTBjTko5gJbKUj8NwrPD3aXHdkdgFtaANRAPAf1nVAonaUM62Ct1r7sfQ4tV6CrKQTCJgK2fpr",
  "key1": "4bB46Q1xDLRMzBmazSGktGS2VDcYzQBTcRu6ujQEwDqirfd7WR6y6YMhinacRfKJBwqCq5gPMwZXnjf6zBrVMmBj",
  "key2": "3FhVPVQ44BqmRRCWeaPr2UB3stEKC7zpLXpCQ9vCsqcWdxFBdT4zNkerEAu2YArCqpjk4v8kAUKjEXp8BZDwcPwi",
  "key3": "56Dy1aan15bE25nxNUJa7zwZati9tNHw5uAudGVmjgGGFCvqTKNErGBJyY2XpU9gxtC6DivkXURsvztLeiTxauG7",
  "key4": "3z8dvGWyDKmtZbxSguBWLit8rDXM8WDHi5eu63uZVP7SwrSkRXm7tWhkF1aj95iCKs77oa3xc9zWPjRvTiNp7RSv",
  "key5": "Wo9KmkqtN6BwQqCWdP3jksykfJ2VSPoVVkpSZReAcbrUqk3gCWNB3D5huzAnxv3To1HR6BkachzwQ5mnEyXypNx",
  "key6": "2vPbU99maAwzK3tfk2opxqt2mzLCuKX3qqw2xWiuZpcev1Ms1pMAimjwJgEgBBb8BvAe2vf7QqXEocKfssbPj58D",
  "key7": "2LxP81GBsWqAJb7qz8DVPpnpgwWde42s1zEZE3hzi8bXzjJdk7sTFa6ECHj7BuKcXkFYqRutChNGgjgBKM83eCNP",
  "key8": "4me1cK1t2G3TjX4gNCvueVbntLURr8Sm5KpZSZxzn7Qst5BcMbVbQWryAoypdaf9xPsojoAPvFbCxF6vNEPDVGMA",
  "key9": "3Bzz6uA74XbfUT8qLekgqgEAH3xprVfnNMKDQGTqZKnDcYLL8nPkjaBjdNBpzyCvwCnaaeFL49YMN8Wg15qYCDf7",
  "key10": "KbhW4XNL645J6P3Ly43pJzLYotReWTLju5jS65mFKMEVweoQKzpr9vhm7HUp8kvCmBTQLnJDMEwsEtWJCgqbQ3t",
  "key11": "3GN4BWxtY9o2xQmQwBYtbFPrVr7CpvukdMLzCMqvkD2UMK4nZUgyqdq9bfAugveremmH212wRaZfCzz3RDHRwUxo",
  "key12": "36jUoJkSLfLAAMz9Tmf514mrEx4tVsrLUotBoE8BYzKxkcv6jvygrHMGfMfMbMzsZXyJLSa57cN7DkD915SdCaz5",
  "key13": "2dcdUpYCTov3qnnTK1XwiYm4uDr1XULCmsw6bdHCnnJ8o8ByReTMrLJ8Xdgx3B6BYBNdUjqzJvSGZSN81AC2dnDj",
  "key14": "H1m6MoWZq5H9rb5hAs7deuiqbf2vRa8RmpX6JY4XU6qBftnJS9mJvp21Z1K5yvknMR8PjZ1vZJQBo9JLYJ1w9ka",
  "key15": "3acY9re66bCu6m8XjaksXyKbPsPiKKYGqr9CiFk7tbeg8YwDuWZxzmqGiyZa2CARHggZTLuKPnHRD72jEP1AQU3D",
  "key16": "59UZeKF13VyrVbF5fmMg92ovb1LfMQn81BbiywanXiBR4KzHwZ17AhBeRhURZiarKzezkoHbtzD32fhxA5yRvCbJ",
  "key17": "4PMgWvzU5Z67R5CRUimyKM3KNGHzAy6DePMmQtRzdcyYP3HP7jKegWfD76im7gPwFBG3CUny4cJFmoowjNpAkXv8",
  "key18": "XFQ5n687eAyRoBDiKXZm72pZDtkTVbsdiQX44mq7P1pAxYt9L59fxqy3xcNxoDdL3Paz3T3gLCe31oXAdCvmgeK",
  "key19": "3ivejtwY6K4vkr13gGCwHSM75NiJHQxRhRTLGRvQssivGc66EJ4zUKqJsFvXVhXKBttXSFMruzLofCvPJyrBpGVb",
  "key20": "3tVu2p91sXcFB8B1kccwH79X7gm59SYFKyWoDrm62bNbukABZootyinbtPxcafQNMjDRLY7J757SWjKHAicp13pN",
  "key21": "2cGrwpkPL7tzba4yJtCMqwNr8hUQ6brtm9WqDBYNgNooRUJWmFYahLojXFhB9CwmaHVh6vXrC6x66iGXgfqmDnjH",
  "key22": "3ERps9RWYznQMqB7T82PfmiDoLcdvtQfN8LqGBMW3LpGiWhpTXQJn87iZDWpb6sZiDPRpawvfsK5KPXcdwjZef57",
  "key23": "2Pm9jf9JSH4qemjWwzEGH1YwKyGkWVanHm6VrnRxPyuXMfiU1D9a3cL2LAiUZqZm1gYTSXygAJ4MtacPs3wMNMsJ",
  "key24": "5c85i4irY1qbKNY8xiHE7zTwZPQYkQwvQxSC7JHkZY6TfQtzPnbvv2YKjMcp2LbL85deToHTSzQoYAHuHYWX4D8h",
  "key25": "27udzbKwESpmEEDAPL97Mi6L7YuUNTeirEMKAw2FuGCrhYq2vqs8vZ8aBRfsUYGw5MW8vgEiX9GPag2YAnnyweXg",
  "key26": "BX3CawkBCARKCqAy9Spae1phU75TQVXUTL4CLG4YUhZannosAEgFh8HsMDsjY7p94yieLwPaWs3KFqiDSV4Bwd8",
  "key27": "3gDKE9V9NiKQD2jxakFUqimzjmaEgz9p8RAufght5yR86Zkmu4rnbG8KiMHABQ2Rnr8pKD8fQRfPnumdj4RxuuSj",
  "key28": "2AA8zhySyxiXQSJfpLuB9w4uZ94dRdBVJ5Kix9TJSiM35JZBiWx7GBeuQ1mevoh8Jp39rFBYCKU6Pf6a6YCCynN2",
  "key29": "45Qbz2iQycTYYigZsrxz38tNMHDESAG7j96UbxF8LFwZYjqqxaN6y19QWWS8xAH6NWMko4oRNNhe5j5ddgzmSYmU",
  "key30": "5prLJ4t8K5Y8qboKvpfL16aFpF6s5h9gYjrjvRDrupQPjymJPFVmKcrnSgGXqMFrotwygKwdSfyPvUo23ufkrtHq",
  "key31": "5RAHxTGnW8Ch6dNJmf9vfdSe3b4iY7dx1WBX2vvJoMjdrHg7uvhZd7QKqvj99KchqrZFb33hQDvwXCZNBcNCL47T",
  "key32": "bJ8ePGj42c4EmMPCqDtRwMTNPeMmUa5tXmV8iqKZj7nMZp5r4ZozAuKWPWpMhoFLyk36xP5D1yfMLXm6eU45YoY",
  "key33": "2YdDASjP2DoSsVrdqVkAwAxuNVxRrDo1hwAu5njEeAnQeEppY9bybCu3Udba8MSeLwYdPm3td2yLt6X25wKDe9GY",
  "key34": "4RyrVMHG6riyQSEsXtyzucCQFFjmsmymojtLmJAfjTpjEPNtMgrREV6HkwrY34iLRe2xtemGSmKsEd8s9smdFciG",
  "key35": "5px8y9d3NpvDSzerNrGywS2pZfznvgvnSMKtVuahC1bHbGJt2C2884qFQfRRtGcCJXLhhCmmpUy4ZqPGE2zV7Zgx",
  "key36": "3uHYLJ9bfPUsukVaZU6qGmAzuRUjQKHkUEJJW3QPrtvczK8cT1n8FuRsgLfyhcVZfBLzhUz6GpRHcoDzyGWVucPb",
  "key37": "4eXD456ukD1ctG35TeyjjPJt7qATcHysvDbrgwKahxFNvxyhTGFhAFz422nvRAqdyvQHm6UyNERaaitXuLVALJMy",
  "key38": "4RuV2bmoiDW5JXrG7pVTkBa7R8kfAUzhckYqwSHdEA1EL2yq3Rm9QphZpiyHQXvkgDQvN1caoVpfqSTbRusmZ8Lb",
  "key39": "7eKPBWEqMqs7EaVe2KqEiokZRzjkxiMAHVU9m74xos9fKV1Pf4c2fMeQAEyzPxiRTURQX5Y4HYEbvkyp1amoZHr",
  "key40": "31xjGtUDRaxHzFixyqBqVzwB7FuPM4hwg9gGrbyWiMNjatKhTnTbAjeciTtfzS4evgMNoULemxauNb1Gu1gmutX2"
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
