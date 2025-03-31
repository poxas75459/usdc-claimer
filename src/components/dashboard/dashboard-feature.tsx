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
    "4e3dURt8AdHD7tzkTcE4k8Xnw11VewmQ9R93UxAfceubM4BRZi37g1ohRYz5RZk2H178F8QeRy5n842g7vdNpUnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cpCMpCSiuVpxBcmzkEHjrKixPg6muTTs8P91BxET5hNjR59REavZgHWEoUck2GRFtZpwYm1qcVwfr7JKk2LWtJf",
  "key1": "5CNa6HTrJ2jt5QdkkEi1sJdWZBnHVZ32jJTiAZBtxw2R6DahqMPGoicEHZRZzp4pdzfnSQxf21sHe5TwBw2DvKa",
  "key2": "2bdrsyjpPwA317N94bQ4h8kprtLSsB44iptAjMmbFk12YVQFEMJqGDigpT6kx6vkNj7kadxV98xZ2NsDvy7Q7pSw",
  "key3": "4KXm41Jh6XkM9S1rVpuF8UxmwohHSrnVnWDf8Pc73QVqA9f8cCHLzAUv3xBrTiQUaSXcKtSnrpgLNJqHcXYdFcSp",
  "key4": "5zDtV6gpAvWP7faKfJrDmmLjqrH5EL1DZ3ipqEkyGRivyVXJEkz68JEoshddyHWZqttaA9CSZsq6uuvHUSSpHxZS",
  "key5": "3PKwpZpeZBPy7CaMzqA8Cva1eGzUmXso2yHyfi2tX5JQKsrx6ZYqGKBxRcoE6c2mouCn2mrQmMD238b91nbhp5uZ",
  "key6": "3QBBbAP3jAWxfWKMnvKXSL2LuyKVGAvPUpQizaVrgHUZERdTBV8DaqwSGmPndA4s8ZStga8zdGZRMZoUQ6AvvpJb",
  "key7": "5R5rhUfRR48YUe6Rn48RkjsgwrXvH4MNvhPijsgLsXhCVci5jtcTPoStKXTkwu5HTkHnepLR8Et1gw41tpYDzhdX",
  "key8": "2DCr4cYsqvxwh2kbXyUcxBgKvMJQtVLMdmbJHNvVB74jZSQxmnP1KEp6fsTHsospSq2Bkk1cFnaLjaFzCeexmFzm",
  "key9": "4BD4NxoL6jhJ1qchpVQ87s6VXw3ywHai5MzC6AAJDhF2UuyzUWZ55oaAqH6AcfvQQhHS8U6tHSq5ikA1xfG9VXFv",
  "key10": "Xqnicai7TaBwUbWifYc2uE8VMzSxKDMXSKvACV6yhfXEVNzfcxuEQrb7W4zqDYYDYHcYqdHi7nedKiN91XYQcBr",
  "key11": "2X5DB2w1pNYYHdCQwExsLEDq3DS65DtXoiJU6RL7hNvd8LG2K2NREDZgiWgwbKVqmFLvmbbGQU7JY9hwcjUYL6pR",
  "key12": "4wQxHNrjsXZgUSvqtQuRwQpCd6HhK8GbWuxQg1DztBGDBCm5QKNRWyeZFdryf4BLF5xzf5s8Gz7SayEqyJWcw6UG",
  "key13": "51AkCgdGsmzdfSUyuDMFvD6v8WgGzWg2fqnfs2YZ5X6UH7TLSPiGJcUFdUp2nSjxwjArAbMnGfxA9fSzdQw92dV",
  "key14": "5gbNQvGaYzBmkZMj8R98JcjgGAXCcLnKD7zE8ByS3V5vfHEvmJbRWUhiQ3bhSJj7KwKNkjSjqpv856PQi2G9dKQm",
  "key15": "3DMtcWjki917rfdq3gnU1gxqtNiCVfDTWukG4uuzfheSaTbQWsH2q7sniBwtZ1Mt1uuwWAyrhgMjBFeWkgorANaN",
  "key16": "4f1qt8U8cvfU5owcqFbRGJxF2355m7hedLM8K1vxRAim4qir6NYA9L14Lyu7fox8aNNSuLXrwy7eSwSygXhfFFNh",
  "key17": "5gAK7TU2cDtEbDvpWN6EK5EaavNduDzRjRPP83sunEpGuzdLNrSC2JvvfG4HNAu47Ys8k3aozhn7WLPhAXuY9Qwd",
  "key18": "5N26qz7TuDHD3qRcmvuB3VRmYSsWBdceYa1pDMXzxHsfigZs8ezck8U3Ge4dzntG4XvGTwASzvYkySFDTjihf3yV",
  "key19": "5RFCiZN1spiNAQLrijbMQaTeAHuo4ecVRhYMkkmSeSKD1ScmiySy95nKQWpw6j5ds5AkpSdEBdmcvc6u8rQBNig8",
  "key20": "4ndJiNjZHE91pu8mhebv7atAffd19TUPg3ucdFo8BBgeUHW214HXkFLsU1NwCzv77WDtk1DkDbTW2VFvPZYWr7kS",
  "key21": "4AouDukh4eNRBNmtFDx2eUof7BnDNJsA1C1Rq6UevY6wzyxEiL39WUPo8HeZSKBbXSg8tjXmEevi2aCBQeXpnsf7",
  "key22": "2hn29KY6ALv7eAvpkLTzt9QL5V5ASsgX9NB1mPHXz1QeJ2EtXUCFkfTGwTREpKgnTjWvzBqAVn4sHaTwj5ji6tmP",
  "key23": "2Y5Gk81mxJTFfBokDdsigbJXzj1wXHnbGwSEUUW59jE8dkE1cEQaqA275tmtNjFnrnsKStttYA8T4x8YuUshpA73",
  "key24": "8B9zvxTgQV95pYuuMfHpEBWA2gbo1WuaXsDfDkCG7JK4Csw5bZZv5D3DAbeZHtArYJoEBVD2pwne48SMPW43FF5",
  "key25": "4nLmp7mJ6RKAyq67NmDkAFt9Lq3ZZaMC3MsTgTYgd8UGYuZarrVDS167PipWKx5mvkatLJEPfmxR3wNe7mC6ZEP",
  "key26": "5sPeg9sMvZunEGsHCSdbukBmeo6WQBszTfDHdRkusPMqFhTpJ5qoXjKGso7M6JXb54GitTNjHPpEKvLTtmaau3CG",
  "key27": "4b9JVnV4oyUayt5PjAVVdt4s5dGhBtABwiqLDB7ZekA3b5r2tiX5h5iQm66enwktNU7RxkU3cKgugJQYaacXrgjs"
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
