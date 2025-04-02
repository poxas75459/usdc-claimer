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
    "2i6YcWDofSQTneTeHe2jNuAbsxmwP8UsLaJbWqEx28x1KNSA4SXM1uJkj61RgX9W1ASrZDLqBCPtSfPbSu9CtXmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SGktGpdsSae5FL3uR3Q97Dn3nqVoTtRtmNWgMPkz5xpebqg7GRe3XuaQRUXVCUt1RfJS6qMGzZmLVLH4ro491Cb",
  "key1": "gQmsi79R4aLNbzHwCkWUS5wGJNQpNXrQDGwCf7yTFi5vDT6X7mTiERzNPYcimuAdsVz5serXKwu8GbG6E5QRZLn",
  "key2": "4ueW81JixdGLe5eVycPFg7zgL1hA7mVthAJ3aZJ9ePSrKSCQ59VCyvMmAxzae67kRhf9RftVnBkawWPXYk7iTTyk",
  "key3": "2cMRdpJ4pAHWo36xTQJwMW9MFMQzffmwUUVUy2k6z9B59bP53ByFTgAGuow1UWsXhD5WGcvFoULLpea2an7M69GN",
  "key4": "2ifMJ68F4KMLKucPBATvUnzUdivsXvCSR9xo4fRf5xKtPGM8rLqmN3yicbAzTnp3RrFXJPcRgRkjwjMPeAvbSpr5",
  "key5": "iGjWyWWShQ4BK5oNd1cpUaqKYcgMoTmnCbiunzWsbS53yDiCGA53BniqLwm2fVB1WytMzq92iZEFKcHwoaN6yEb",
  "key6": "2snrw5k3nHFc961ETnMTMz6g2wDWpwaxw2qtbWecCXxPg1ihEWAfUzCcWYfArp7dyn4fAGUYGJxAjfmnGrg7iq4T",
  "key7": "5XwS5mmdQH3ryK8kzhMV41iky2aTegmk9ufUDnMBwcLpJGWkcSkwiDdebzYuBNC9s6eABxsWSS1YHRzCYKBFUeWp",
  "key8": "3VLqfqbUigWCGPwu16w4VsBmUChp4xNM8LbvVtMtdokStB6VjbprGGCVwt9TyjAz53sTsCvn8tdHsuQ5vPqtka7j",
  "key9": "25irKokujyUfWXfGTA7FtSL3vrz4g1yWfWnBkAzJvpjXNukDZpCkomYEXH9rU5CveUfNp3eHE3aPVawR6A2KsJBw",
  "key10": "UaWTMuMWUmXpP3TAvhtYWKfSb8uBuGt3j7r4VR1EXABaXqHNiottBgxr1UUhGdRi7hHWN19Q67WiXZkX7ZvcKm3",
  "key11": "5g9x9DTAr1NsBUsqZ4A8xK3LKfZJW7s5V4eEYNHebu3eNcyEDxtoozPd7zs9uqyDdZVwFjZGTmq6MoT8sSrTgJmX",
  "key12": "5SBLs6scUff1f5ou1pNuLya6hDmB3b6ScqBqDbyPBqmqyeEXjW5cXuvGMvyZ8sx4ToWKC5oUa4KzYHfN65r39Jp6",
  "key13": "3R7kRcPVpqxUQX4q6AXRfkB5cyJPUtUMJNTVLGPrXvRw1h6Xi69hi4BnhQvg6EEbHFYjGnbRXT8mM6qXNcmmVSvx",
  "key14": "5KoY7iqc3qHDhzN8DUdeh5McuCvwNEHCJ3Qw9j5KEyq2PFxZK39EmSeYH95SB6GDvBaHa9Zah5KsssG3jDV8R2MZ",
  "key15": "4obuVVuMEabGMDQtmGXogoDgkgyuRwSrQCrjBimTDiCTaauFRoqUvQipKWjzULkBx1xDPJke1zJZ1WoxJxdeBxGj",
  "key16": "2s1kATuKfGba7M78EVLQT8LTzdSqyVUF698BG2k2VeM9kxwU9e6DpuJiETNz3QWqLMxsxD4xog2KvbrVMwFXtAcs",
  "key17": "45XXbhjD8X79ukVbC5FaipECDedsJxDTZaF7Z5CXCoMeC96Y2akWe82BnbatjLDdayevi7sU1sXxB82wQpLRPLzt",
  "key18": "2k8uEUrcNZDWifFzmffYdgrW7JbMqo3jysnK5fpqKF4EUusfU3kcqjTwnqth28PzB5RtEdRrdqbukfGFstgx4STQ",
  "key19": "4FzZgUhKP2gFZnctWzWUccggQuHQHo5TupcEXzW2dWVS4yTSX1jwTS2HcLiFP4anMvfAqqoK2enYnFpt3916YhqK",
  "key20": "EuWgC6KpyiiTew5Rj5VyBpv1KiAtFzEt3Eiu2AWxHtLf7mnn3HbRJhUaiPUWmqYs8HZGJFjyj9cYsY3tpJ6SVK2",
  "key21": "4Y5dj3BqmDbSUh8vTAaLZ5LdzPiBMy5ankoFiYx7YBkfBqNzMtbUdqNb4YVdQWVXS3Xasx3ipAXkFHq55YpbJaPB",
  "key22": "4ZavMknLDneNGqzhjKN3Rkiqj34Jh66vehpeGKKcnUvhSPLozVkCLG6gm4qdhBNrNVSa1FMZVLSkzaEcwLqMkuuC",
  "key23": "4gPLoKfd6CUQ7ajnet8BEua3d7NhuEmDCtmJhD4RVsDkmEJb3qYPux1PMjSf948b41BSiwbKumT6yLoCE89t19GJ",
  "key24": "41xq5opxrG5ezH2TGrVPg8QWBBEUwcoV6Zqix4ptoMf34DwnCb6WTXnus75nUkLEAuBJ12FaPZGmy1bpZZrmchUJ",
  "key25": "2sDiJpjZh2BRTKpEV3gyXfcsPVw7tEmpCxMWLTGiFWJcPL3oA47C5PcUbpp1CnrDEvnTune7ubwRn73AzNLRjsuM",
  "key26": "5w7pEjJeMtkqtPSEK2YHHo7hSC5gQYLaDztoTwWpAVCjrqQLVbWAZSKvZgVKqYFFW7XGxyDypvugEZQD29goQhry",
  "key27": "5dYXb1S1AVm1GaMorY3GALjonr6YRZpk2FxvnVN8it5BoMgrYLa6zrcJ1n94KWhYvXoxXFF2Ar5DdABCqbmDyPGi",
  "key28": "fJJmiFn3DTrWqvvVG37eEF3GuZH6iSw8yvTzFAkqReLagfZd6WL4DvnFtwMvg6PHmZzxQSBKDwS74pUthDdfMeV",
  "key29": "aKfq5crP9pwahUNEod9N7D4k1PEDWHgbj9zDLVLyvfU9wv6fY491mueBroSVua7MtbQonToYa17ykTbLeFhpm52",
  "key30": "43ZbLkp8i5RnzRERfaU3dXZgi69GpujUtCbwFk7WZT572MrerqpnEnMAkCmrUiNR7cxaefWErB343UbTTsfLSDHt",
  "key31": "3vkx3fHbtbs7Z8NPPmpsbSHWN8kVSTS3kkYy2QqRuQjqJFhskrkAurnyPZ52ScBQfceTNXoroQcqr492KAifvYGN"
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
