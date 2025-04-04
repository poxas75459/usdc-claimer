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
    "3mXBvRKxuZ99vPu1W4ySsyKPc9uKB7DoWfezz8B8qSYvC9ANaks8Q9AHwzTrsKizQe8fA3VRGhRAfF56HgDUEdd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ACGMCq8vbE61o5R3CDCypGaWAtnkcgohF6a5m3HAdi2CWUYQJgVuAcKQwAWJgRUKSjWgCxBEkYqHqBvPd7Snwv",
  "key1": "5NUaa4ZuiPeoda6pNep5HWCxSDtaXEJxs4PgWTSxcNm6CTXqs3HYS9Rn9RYM5JgMRAEuNgNz7sX3PUuXMn1Xjh9",
  "key2": "SEeJR6wJvmdazwJHMJvTpuhFXpixHLgZK6XPUq3CFKdn3HfVUpLnvzEUMKHGXTJGxfifvgtqsXFLJoBTpvX8Zot",
  "key3": "vHD3s3smxayerMenujaWDSFcnCxf31epHT8urno1yPigA41LfCwR41v9fGaPTFinFnZrgDPx1kSQuMfZkaarJs6",
  "key4": "4oUYZxsscipJbeMnE5m5HYzFpevhM6ZzTm8uRbA1d9Zo2opT2ChXjxv48C3BN1HYU5v7adNLkH6T4W4hS5aegCJE",
  "key5": "4e6tR9Rz7hJ7SuPPDVuqYdo9JHvbW1aSyaYRWG2hhpXsfufmU9BMJgcLupySRgejH6n7stJ8QQEi7WF464grDfJn",
  "key6": "RpRh1L2irfQM1BNcwp8gmKa2ozoHS9prpnFcgwVpCqESc7uyVXU3QWAogTrUEuXA6b55ancrmJuRKsF3qJnhwUw",
  "key7": "4JsrRFboQ9X6WSYtUhh29nreDGHga6W1XYt9c2MWHz1mkf1GncGH8iGdwvBC4C8XbPjQuBsA3h6R3XUyWov4eACx",
  "key8": "5FjdhuQua8u2FFWwttq27Qrhq8KWUUF1ewHANdB3YrG8ewCxJ1n1TAbVgHDyRQAd2o6q8VqBzB6k6wLnuL3gP3fL",
  "key9": "4xzwDRzawuUHQ7M5bDtUT5GgRKVCjNWQLsppTWjowfAXx4jkbk5rFWfG64rcAF5zd3SsBG9UkFCGuaKJahK3tJuU",
  "key10": "4rHcgfUwoqFaYKQWUgbgNEquSEZ1YbGRGGwEPvtqpvrYfyRtvFcpFT8nS5i4UC61Cy7uvRMWHa9ssp21pmJ6t7r1",
  "key11": "5nFNgZRbfievybo9NUnH24TsyG13caVco367MnxELJVoob7tE32Fvmbhn7f1kk44aDyS7DYZQUuuHtdcFiHdoeqZ",
  "key12": "47XMpfTQR2qWgPhUGQs2WousdhkFmQctWyBrn9bZk1nsma6zV8tqHFzy2bN3r88KUupWEnuyaPLxZ8yNnsRaEJfk",
  "key13": "JUUJzGWHTSXH95XWDqeZvtB1R4gYgi6kqnaR3taLNgCLcrwwLHS6TfAqWCzazKptCyczAYQ2Ji1crViYtfamizw",
  "key14": "QTt5T72df9Q4XYno1Ekn4sEzp4yUa4U4T9HF3SaAGHDUy5iTMJghRF3r5bBse3vhLUw9z4iTeesByW43WixcJtD",
  "key15": "4T2USFSU2BjsQAQ1JojbBk9aZ4gZooo3bitmL5VKgcLSciAB4MLV6wKieTX4wGGyyqbdrVXB2cTp2eivmdrfFWSG",
  "key16": "4z3Vs9dV66gG2NGovJRR84BogN3a3agZ2MR8Aej4Rc3dL2pbn1zox7aWNVK8KExXJdr2dTq4kLKWr9ZtfugoWQhE",
  "key17": "4PFS9sP7t7fntp9VFwikHhRpiL6XwPiWoarAasVE2q57XsKaWUeHwVDg1o4K8XmhThkvu2htkD6A9xxk2Pd3YhJi",
  "key18": "5xARpkPk3QDBXKFVt37kavJZbeCcpnNgGy9tVEdwHKQAAioY1AW27RMcVHyrZ7E8WDtXTnpsT45AhaCq6sMNedK4",
  "key19": "42h3RJ8QgfbqyuUPqrxBEewYmhEVfhtzcJU56J4HPEPgUPUBKCD9QE62sSrHNfVBcuD1ft85K8ydF1WgCpPZNT6y",
  "key20": "5G8k344nNYgHdQfmxsGSsJN4q89y4GnYLWLBT6N4x9UZguZkbGUpKscazLBiDvnMyZE83DMiPDtVEof83xYdeEN6",
  "key21": "5jBRogw1Dh1LPDw6NuL1zxYTMtXYGCoUgUP5867U49fjvvYg78XkL2QMS3Sqt1GTokNwkhhEPM5ZYrYbEKZEPRrv",
  "key22": "4C7xq99j2roqU9ZAEWxiicpU9rtVVnsKvnkkLJfPfhQ49HvPMxcdm99RQkWF9JJBDr98kpsVBH67QviA3gJtfMso",
  "key23": "2efA8G4AJzcqJhbZ1UrN5eYJmdpuo3K1teg2KqbZoGAgSRPdjNeqkqCE5TMHXndrNeNpe2mZNYUzryFg4YiZ3mkr",
  "key24": "3X1eXppkVmQreLdSxHCyiHxaYodnbjC6wJnw6B3TTGKmaXrAckyva8t477yXcx3zHMASxQ2KqDByWXuNW9iE7ntT",
  "key25": "3YR3hHHzPU9K9PQEbx7xirwyhA5TfNYh93REq1jwEnegzn617EKdW4of3cCjizcPPUdC87fZ5T3HqQN4kuMZ1h6G",
  "key26": "26pM1871M9JvisP8TLxN7Kf1XYunWG9ZKWdfRtX8cHdrfeZTDDAfc7szkXdeyLL6XKUMRybAAM7byKxe4Tyf7Xcr",
  "key27": "3nSavSsDNMKxjWcSfqqEJkVq5DmAa5eycyXsTf7KnXSSCdQwAS79M2SAwbBZ9ZQtDVHL874Cm2qRmM4bZWYmVGwE",
  "key28": "5qVsxVK43ztg72h5dq9GYygqtyZzXE91UokK2efRbk6CaDLHbL6yoZt9F4hCJwQzedNjch7qJmYG6jagZZjaNTQp",
  "key29": "Wc1vwhhsQjXXhiPxvcvf2maZZedTB8nLnke7viLSEfh77uMoWax8HXxE6fuMHT5RE945Jq9hqvz6T6JgK2skvSE",
  "key30": "2XvmAE63Nt1WvnQs5YYTmaXfaefcAP4wgacMdmZd53u2zFNhoX3jPDjk4BL8yceUFmfc9nBHeeQtVBxqfve5c2b5",
  "key31": "V8CmoCj8Nby5YftD2yydDeumcpttYr18F8Mw3V95V3kX55WsFKPeozy3ZsFhbG1FcALtKbcF21rSQtEZPh7pT5Q",
  "key32": "FhyBoBqhFxU6Ka69hE4NKZYfqxVEHpqsqc9RGJsf9sHN6opR37eemU6MDNzbGmM9ZUuzjXQcw7LgQJqyvG7Xmqo",
  "key33": "5Qk3Z5j8iBPzZDqHaKSf7qPD4LPC75bV8S5Am6GchCG8h4HDp49zAJ669Xy46t7G39q4xVhsgGGNfozZRUWzwt4P",
  "key34": "2g8tdgZWNFmfn5JCZ2Gpqq4zhp5Dw4eu3uMeVNYfU2cnrx6X33eT6PiCNva56Ej7vVjAXZGdhCixYdRCbUzzVeyw",
  "key35": "6iXqxaf9PSKcLhEB77fPd8fkvSFdohs9AmTQe6ArNaPe2LCyLKkZHEAoMQPNbW5tRo3DVFkxsCnwQcruZExGEDK"
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
