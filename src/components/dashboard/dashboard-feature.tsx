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
    "4U2M85eapNeWaqcMa1gzjfqS23CMcU4RWQk8WwKpkHAWkp3jHPQ7FfqpqFiwvLqFHzt9jWJkLXKEKrvcvfm9Uk5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zuHxLgHfPdCapht3xCSjtRq8DMzucTJBoVAh1AXzqLrGV2stkwWxcwVvrqJLbhcRh2t4vg5WPxQKb7Z4cj2gk2R",
  "key1": "2k6c384SwV98PUS2QGimLuYdfUUZ1777r5XM63YGbjRrBN769eyWGQxd9MQyd5NeYZEcvkYve2JCo6zAQm116rzu",
  "key2": "ZSdPuUbaVexfTr3jfeEh51UPQbNGxHH4qde4pBMjbdwxFwRG7oji9Q8B7ESB18DPfGT6r3MMhgs9T6q3M9jQQ4i",
  "key3": "4ens7kF5CmNtdAxFCxAYsf1JeF2VZFHPmbTNhMUfmCwRyPQMPEX83QLQRuQrSzHecPYjJ6Rnd75Dh5PhMysiGBYS",
  "key4": "4phHuV43xwLHnysqCEY1B7ZMnW9oG1DrqzAMLuGRBPEyQnXpx7Umarq9Z2wGYANvj26SVQ3WJGi3fwdCLoeRNbiy",
  "key5": "3Utv8SDbf5DemMLb7ikZueaWfPHsn9xrfpY16WU2RgysexTLdWNnSyZErSKZhub5x1vdrhGsvNSBz5rJhonFwXZN",
  "key6": "CBkz4zhKF1idAMhDKxzEXD1guwyCDSc9DG7Zxh5gUzT5nHogyFTjk6vgrpxhKMyzFxRRwBQx7D1GUZaWoZCbgow",
  "key7": "4mxGFdEWizh9wJMsWZSuB3psP2pHbd7DWuYqVSkpazm4gDrBD93wjRpW6ryoKwyY7gRFMWnPx2rYtpNYN7jrB7ER",
  "key8": "3nrD3PZFXMizvJWSzMMUvW1SkvGwCLMbErZc7TMG7yEWQYdpqhfjNG26fMHS8fkUZYhVP7EgCJbsqBqvdoQLdx8V",
  "key9": "4bpNNPTVjkwjPFvvHi37s25iWoC3LRTg6Sb2VUn1gzKNGfZR383PR1QS8yjaJhMrjguEQhoes4dvsqDu6275gsE",
  "key10": "3AwUFf7c8XZZpMbYFk5v2eRqMLnqNtSQpziYg5eykh4RfES4bkd3MavkHF1pfvSq2rqQewY4oahZwwdTsiQzo193",
  "key11": "2dEN2THBaY8mkvQymY6vx2LiVdymPjZ3ercRakB9gUcS2A8XyStEiLDR3ae9oPiK63YwvpPT9ijiYHiTJd1uvXuV",
  "key12": "5G4pZsq9a1U5PE1qfR6A4CLyNo7f6sivVosdYeoiHipdBjL7nN9WZmkSwqSHmzBBNux3ZCXXu8LykEbLnyYdCwfo",
  "key13": "sFU6bLV6CeLYEE8Gw36ma947RRxaBvxd6wXPAkHFn95ufmUcrANMbLFnrtDDcc3TeUv9iSrPUcTNKqz2V1GhTYB",
  "key14": "5K7epi96gdvDavRZxCEbrq2b7C5BxEeVRktezff9LBQ4FdFd1Xz7HxrZJVPF2jfZNxDU54SDNY5rburMiLJByHcT",
  "key15": "21eR2A22ib297apZr4C6yHZeQKKGxWXqdAtH6HUMzKVbaz4aWSX43MWB3yo9GKFnNM6yZyNq3LzorcW1YwRZeZ1x",
  "key16": "5CLh6qAgtLfs9hXbtd1y8znrQCD6Kb21hfD9G9Gu67L6prbtr1UY9nJtwMYMf9qT3mo8aRKGJQmHeek7mpeaHuWa",
  "key17": "23GBNRKbv4KcGSoJpYX3USD1vCNMF55zXVkW5TFQLhhDyh63bQmZGr4euEwbh5GGPxYEtGm3PFQUygqnY2AJPd82",
  "key18": "2dAnbcs1diqEGtzT73HAgxPwG7sjjgbAqDaJGbmfsoCYYr46Bh4uixpbVUFZ5nspNic451NVkpdrhTgKexhkMRDc",
  "key19": "4tvnT8CjDqe4iJWQruv75nc1o4sUTpLkYcQtmAwBy8GSeAsiSfTo2Vt1feMQ6jW9daTnKRsgC3ShPV42izmDF5BL",
  "key20": "SvLxZvB4ctodnEdWBoD2bL4q7cDfZujJCoQHY2u3N793yYyevTWGtKzW2YD3Tnubm9X9mQh68EK77GibZ7HM1mR",
  "key21": "MNvMFiVQCYibUr3YVhF3NTc16CV91ndkC2qySjWbQ8xA3b69ErZ54ZGbHoGSGEXjBUDbmLmkuqZMSK6GVi8X2us",
  "key22": "5Hm9Yp93AzsNrvJ21yqHM1g1ujaTAW53Ns1GKu9i11N9HwKHcDAnSs7ojuE3v2MEwHrRdKYEcB9zRLbz8i2YVqpE",
  "key23": "5M45ovGbKHQ4JDuifWfgPhGFveScAdKDfoMFejWjjVpCL28YfNHk6XcfQFLg9ABgoe7j5PpuMw1VqWkQoSFcAb7r",
  "key24": "4wPLmWTNSDG4ZUjAqjJ4Gtvn98WP71ypPuYs9DqpjZxeKnkSLGuag12K1GPhxGhUriUwXCURMNr6xcH5z9PdgpcE",
  "key25": "4H7RxL8hsUHVUhU3oCC4uVtPkcpnTGEHMsoX8uve6AemwsVhrZufd6LyujYF1A4HLaXes7uHQQ2vHdB29iXXzzGR",
  "key26": "5V2R9sQGV2r5xo1EjmboekzuNJSeiWRC2Uf2Yti7UuWmzmHXRsfiYwoUeFK3XXXRzhPqNe2j19fepvXAyUbjDC88",
  "key27": "4a1agHf33s8kQ3jLJ3pb9Bdp5bGwkvi1sNbjyQ9rZnTDQE15eFhrDsGSF938HELr1pRKJe4cseNNXuDFT8nCtkCN",
  "key28": "37Di9qcofWQexfXFQGJAiKYjiwETdWWY2m1oYBt3TGaerg33Mabud9Y1Zz46DtwFnCy8JGHZJsu287ug6PvM2BBz",
  "key29": "2e3if8C8xzUUyqdBSwYbY1bRjcUSW2sNM2QRbHE5mx3ZPv7PAcza6ujkAm97UAgpVkHDkixmMzGeFRNHWSBBsWoz"
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
