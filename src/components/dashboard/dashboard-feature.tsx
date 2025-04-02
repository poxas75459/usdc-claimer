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
    "3cvehgWxRVdhy8MZRaT7VjcuEBQWC5WgYnGEsKMtYT7nEPbc5Jr7Nyg12bT3vjGYEyPtuZNKpspBHD2kqLFE4Jma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Axam95kB3VjGHu9iCwkSPvaYbetb7VcuAafhj8cKJDF9H4VyyboGkvrn3EfGBkG1rzFtvyjEnS5oh6iUj7zRnk7",
  "key1": "4QEsJtbz7vLQZsSnujGF5Ms2NisYVNKiqgDxbnJ43CGo4WWvDd9MDL7NfFb7eY66qTuKsPZha2bqbtKrvCpqKDbB",
  "key2": "2Ht2cETxYpCPaSshK2eEorAcGh1nFfSVvSDgmtZPj6TRxhdEkUKqBDzjXS9RpuorRUAV7pCyJxpXsq4B6T8uGmNH",
  "key3": "24ieFF8UmvBdjHZvDV9qeMSABfzD5gQghiMqMz2JyC594uBC7wJKzDoXdYtaVs6h9EmWif2oGvoy2TYwwvUXrSKo",
  "key4": "3ncga9koXLb1tnQXrcu5cVHdzM8VNoB5AJfR4MCxMhUgsS8f3uAoDkRUBexkJZVkByU32hpFS5vBPqYVjr2CP8Zf",
  "key5": "4FCc99FCmzhV34iSisUqN9oX5LNkyMgZXJprm83WryGdWgpy6mkLy73tqTutudBU4QR5BvZqck7AK7Srg6prQAvP",
  "key6": "4nMsXnRifzudVwVgUSM1Ue3VSPge9bdynzaGz1C3ED4Vqv17VqVpuApH9yS5uPiaajLHx5diY26uTi3AtkPk5HJt",
  "key7": "DupCX8nDg597psPqg3SLQZsCKpPrZYRaDNawWtSjNB2QN6ujrj74TPGLbWZG9mQyvfjdzdD2kFjr5A5mZNM2rQz",
  "key8": "Ut31oB17bvmBDgN7pi6gZDKnipXXS5PrA5tZmSNNGtmAiVQqTfDnetotsG9cngdehbhg8hzqHEqSP5NHnJJNbbj",
  "key9": "5rBnAd6ZQzfUAamgkpGk9X8ihK5bXb6qctXb25YAbkU4V7FJHtdQDfmuGADxZ1Djv2vvdJhP9LRvmEwV3ah4GPMv",
  "key10": "3c8bd7kAbGWp6EzFeJ17ZxgaamNzaof98ZBhBF6tQAUgXBskuVy6Hv7rVE6RH4XVBuDNoMVNLpTeU71Vj3BhWmsk",
  "key11": "3bkahcGk7AaTc7Dvqv8MjduEKS7MHrQebByKaKjuFDDnfNiAZkdKQ7yfa9gesuA1583gr5PJpboAVeAEYDfKXn8s",
  "key12": "4jLyPnCuX8auqHww81GGipTtauixLdf2372zwDWrDp2gJLYm9GDA6QaA2wtgVm9o3NTruwcd3jjuqUyUc3U5VXvz",
  "key13": "63JMUU2jivk6rCDAvvd8jd5qthAk6Fhcn781wcyxUKxms9DYNUHk4WMKYDHUB5Vc25mhZUkRvvECP7RMar6aZdNM",
  "key14": "2SGyc2c9cs9UNJqdpU9PpvNzxskTqHcvFgpmK4vEgDqRqkEg8cKrL7C3j5F8o1BYfqcWSC2Csr6dNeLq3LvAaTgZ",
  "key15": "2r8WjqacSqnL8nd3sTxuQUkjZgoHUfJDhoNKuTmLZA3niesUJU9SM4Hux7ActaCrXmSAP2qYzTqbE1Hdd6d2mVCF",
  "key16": "5QfCsdtPD1zvLWXbk8zTC18xcRudKSLagueCbduvJCmNmf3BEqqqPn7yLazmU735BdGpvzQDDe8QbG65AZp1BB49",
  "key17": "imYi4R9H8dti3VeL74h8M4kcbDqJY6pFQnynQMsGAwZzMxVPuMnddJ6bQFEHWgRSDknWLL8p7JcXmFZixKXhBAH",
  "key18": "2X39xA6kQWsbSxy9wgYX1qf5WRnrQMW8D17jwV4oiitZa3MHTFDyJex2e2Wn3FvKSWCzEqWdZ7zA1tshTCMW8ZEu",
  "key19": "5Ua7zgCFMv7mAKAQR1E1WDfkanrKpHdZbAUxcmpVRSwGPU6zBmveMCqMNPJVDReCXSPug33iTPXSo2bArUGsMppi",
  "key20": "46ey4rTChV4vSPoeHaemRz856bmJQmTehvnhjaQrtmfxFiTCktgMgrzKFFoXrK7oX3zWax5UcEd8Nd5kXhUM9KGB",
  "key21": "2WAgnYRiJ3j59ippkWoMtpVaesBvyKq4DRpaJFi2nkmjbFsxsdy4w3aLfus4r3sgcUtCwuTPBZ5a2UXjFXPeRnAV",
  "key22": "4pex2gKEWZcxZy8imGEKVKm5zywYMkcHk23SbkVhUiDq8rNE4UokUmQ1P1vVgeFqYzdyCwkmnFcdNUUCfu3cDNhD",
  "key23": "3XnUT3uaHRMKhFnztaBqbX171wLAaxCxRDboSoGZZmiiKVwEs9ayDos1Y42XMEyDTbWouTvHd3XKCcQXK5CBo972",
  "key24": "2U7oAYZBV8JFWsk86thbockNaE1eeUxmWPdmJJk9TxN7qUPNtni8GaimgCwCr9c7VTH5tQ1Ajv4FVYdG8cC9BSu7",
  "key25": "2vPzFZKchtMmE7yNHqWz9w7hyckT5YewShUv6tYGMuVyx71GpVuhLBAgjHqgvXAdi1sGSv57DiS5r7Wsd925KT2h",
  "key26": "2Ta2JHrkHm38BUdbFJWpezBe6DPCwyCCEQKrYZfNwWfZc5DwEfd9VPBMkN29NPRoHeZV9CwNQpuR6brrztx5m2X5",
  "key27": "4evsjFoZs6dsmGoGpVHqRKdfV8rEh5g5WGy96KpQTF6rUUiXa3eQax7PANo9a2RT73ihtf6e5ppKtrrMj1Fsj83e",
  "key28": "3zv3zXhEHwU9BeByTxU4GNP4KgeEk6fFgYo7HWnN4Bqs2eHaWh7jAvmgQjShhK49BCQrH3FyGA2ozGKG6i2sCK6x",
  "key29": "3k5vDQAXEGnruwiPFRiwdXKDMcLZ7PinXP4Mnvq9RVSf7aq6M9ma3LWbj1BmKUCRojdVgMxJrgUmK8jcTeG3QBxW",
  "key30": "3aaGrNe6BNVEsGKi2qBy3ZKreMkiDRzwW4MeXh4gJxAqGYSUeHTtQf4FjncajwWDtz7iSSFQiEz599bvFvPWd951",
  "key31": "FG9tAw1cTZVHBX5qGQpi5D8g2sqRD65a3asABVjkaxPhqABq77FXy3Ja6UcDChhYkXpCTBiuFkLyAo5sn36DwTd",
  "key32": "4ySuaC5pbAZn71SyrGfCU4xURMKaanxDfzMpvfnRn5jy97Rr3SrmzxQHRvBS7cavyum6MxQNdKuZJShxuoUNSsaK",
  "key33": "61frFEQKWoAuA5U81s1Y4HU62APSoF5CP9cNq54wNkiTeRDquuHnduXUV77EJ3KEhXZbHBKTJ8aUsgfTqAFXWemS"
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
