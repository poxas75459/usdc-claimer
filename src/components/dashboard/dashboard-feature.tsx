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
    "4kPLunL2iy6JrVGo92pRwaXbAxtK6xpxaUU7zQWJuvfoQs3a2Lp1v8t7S37YQ8XRQotGSK8Z2wTfhkjidbMX8yvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65cDS4UxvAUnmxjUwTsmrAMd4jSg4GVb6xSfbyuyCoyw958AgopsGaiXvDUeqJFssWq7HbyeqQV3JdVaQjSzjShy",
  "key1": "3RoyDjhByrpNSqEEMxbJi3KbH8gzJQvGS4iCdWMMaVUb8gHMvveQmmNUHne8b3YsQkJbEqdhpY12kW5dX4vKpc9u",
  "key2": "4Wtst5TxELymkCg7vePSEHDDiSWiBopNsHDf9hj7UVCXY2t3HmbJVJLEQM335WD5MUG4cx8Dbcc1WKVvmbKmqfnk",
  "key3": "5x1WZwm12JoRXiYGK9vyq6PS2ZjHv7Na3zV1jP2pLAfqPpR7chc1Ph3hAiqjUd3RnZTniGSe8uZR6enFKQvfyksN",
  "key4": "5Ao7LbZ6Xo5w9DZ9xT2vpi2TZER9cX7QRe7USgP4veiGgNxzDqMvNb47APAYQRZ8YUHp1rWLHjQyb7znDhwPnz3e",
  "key5": "2Pp5fURv3jAq6Bw8KLg4bdeWiw44xT28FakyZwRhJF1ukBuNUQ9tgG3bQgk7LBu9yPUPkng9tgQWER1d3FPZjrXj",
  "key6": "4vTYCND3x4XtnTvXvdya3nKu3oTGDebQ9LKrKa87TntjQtfwoHZvphmb3t624hCfxCFXP4WpcqEdpkyf4qnWpRpE",
  "key7": "5B9B6iV8kmjQGzgoCHQ7L7kbX84iMpbuQ21UEKvE8s7FFP2NSoL6jXXiG2esCwe9kx6jArsBzaSzJZjK1LR9LND1",
  "key8": "o8NBnqEtBGhCo9d15DpKMmKNSZsDY4di6MG68o1qwDhe1U5zxiXhXKw2peqvFzVVdixqjJN8G97sUtXf9uwf6Gm",
  "key9": "z4gFcmsYQdzmXjfFya6M7r3CJXgEo4hDhJ6Vy3U2LnVcmcBdXUQnDLoh1UGJTNHthQbAaDVA4Y5oiJnuFFizRXo",
  "key10": "5Hcvt8So5AY1A2uJmaUc6ozv56StvmSVDbBriYhM6mfhygsvUuEuRnWN4VopFkfmpJNyR1aQkAnw4FL99jA1B37p",
  "key11": "2ZyVnr11Bnzy9U37LLzyHrJWabSW14r9Yhpu8T8GqkoshQWU9BEC5B23AYGVNwJCsBWN2fzzKgBYrvBhiaTbjYD8",
  "key12": "3FaiuNcPnCK6pjZYYVLxfbZQJtc5KvZHR4hjhnhGdq12QZPHBPHoBj91dyrobsaH7pSZEjkkG5gr4cQQ7FD3zzuM",
  "key13": "4jJo5Zgq4qBP5hSuKdep2JtKnPWcA4YP1UzWdJ3MozZZaAGzgeCqNJkXFPxcPF33r1ouwURi9trhQ18Fr1Duv2YR",
  "key14": "8cWi5adbrAq5qCxxjeLG51dnMPHC9ZwtUtwpUfoWLmeX2jZ5P9No8pHQYbhnKUHqHJ46YXeKgt6ypWdXSaB3JTn",
  "key15": "zLZv3VSfAeZLqC6MjpsxtJxMPwdw46GBjGdqNkgZxoZ1WwBsQ3tATuYyx3nMuSnUkWiVC9jJekqsqkFd2PPyXeD",
  "key16": "3aXeswmLZHR8yNhZd2VBdTSFqeYXC4GC9fSeGhEZCVN9FcgvPEqd8e67x2g9jgc1mxEZGifF13XBHUmyVz66yKN2",
  "key17": "4T8EtK1Gds8fFunbegNRLY6j2sRJgPkazXE3LMd3gkGNHHZ59jpcqn5KnTM7mrA5gGmPBe9uY174PsHUUVttgCsZ",
  "key18": "Nyns29k9zt7VrDadHQap1HVH1os6eQH3kRb5kC24BvyZRncYE8LtwvRmCYBJHVZhNaNWFyuELQcLr3b3tirQxWM",
  "key19": "639ndEgizJHmob1L5A8dXA6Zf12XpeQEK6C51SfQhytqhWtkKBacoxAcyy7SN5uLQZCzVfYbE43vKnr6AwFq6xgW",
  "key20": "21TwVWcpETNxQv4h5HgGTqWQihH5K1DjdwoLTfVYV4pk2GhwgUu92Eto7AX5nYYnHHwKT9cpfwFjGRVmbMKoY5hP",
  "key21": "3CiSQfBY2WSTqo2u4TDSE1RCRKygFf4gLKpjYcoSiiHQm1UDyJxkLef1SMYwwv4oqXwRzat3SvteTdqAWPdpwjVr",
  "key22": "5my4Dxt3hdqBUCSPL1bvBuKd4Pj6mnnxYC5J5GxrFj9nYDbyNGnMyZj5pSbEq7iPfkv9h4qoHGe316cRYJEyebAW",
  "key23": "4oim9J6fLP2eMzEdmGzsM6zevcCfDDqQ7y1AYZH5KLZWiHcSzKjBu6LsVBbF7PNn3HsLx9d4gc3cLAJoEYrDh3dR",
  "key24": "3d74HaMJpcb1sTCnfHPmrYxeHmMEEnViLBcDFQz5XM8mJnaUB6fhuLcWq8DwYeq3uoa3WrumPQAW2zFcQmMrQC4k",
  "key25": "64AbJknZCYDsTf2KM4JAhLKAx5bw3tWsDgFqV7mPJv8mqHr4K3Ut8aPkE1B6GJmz1GXnRxhJLDjwm5cc7RXbBS3V",
  "key26": "61mqijoZEHDWALJpJFscoMdtZpFTRSeDhShs3DUpCE2gRykmZ95eTyF51ePSnu2ktYcSR9etiLv3Q2a6URrtsTc3",
  "key27": "4JrGnUbbUyogjmdroZT4g6eYabuab7LddwqRfNNJKw27wGA4EBkvfhtVG736R1hfctxW7pmWb3rWLSjZaTPPMf33",
  "key28": "4DVM4UeaV8BYu2chz1a2YHSFLYtLASoLXP5eXZseSY4zukVqMz941gJLYUrdpeuBfHN2NcjrrUxe6MQFZAFBrUDk",
  "key29": "3BHZppCEfxH4haxrB9sZ5LVbwcj4YkjWGvERb9ardTNXJ3RUpA3Jj8NT9tDFJPkCtQcK1BSv9Ya46q9EWXswsNEx",
  "key30": "5eVpQXTkEzPUHRkCSGaVuj2PrKPD1jkYp9HWrQYrpHpv4kQ58kPKyDSvHy2EmjA1GS4k6BdrXiZLdSGRYCTwGeDe",
  "key31": "i2eBSPbny2cZtdf7qMyDzNfi7tv1rDyxTQYgi5XddAu37HGAaTFUsRWFRu95LPATuHxFCE2yRRjByCAkgQamHup",
  "key32": "2URjVYC2FVKgjasfB3d8BZdL7m4sc2CyzBihcAVnkxmuwRmxtgDYz4iQkhLcZm3SyXfJVgv5ZkzZfvgC9DhANE6K",
  "key33": "3xUyraTqDH6MmKoXv3B3YqQWSnaui53jBbhZ3eFy2tP3NZVRkLKcd2S9J2zoXRfVUEWBYmkbwy922SbpNCL4Z8pa",
  "key34": "4RAbsNpA7eAfNq4caaUbd9NHdEkjaAG5uayeRsRGecNNMrEwqo7DfmGMfGVG1tTdJKn54TnUMQz633gGXR4UQe5p",
  "key35": "48xbYSuqkmk98cG54CwSS8uoWL3G5B1JiLQdeTAc9s9znWaLdUCEucH9RYfUdBvz2G4ezoRh5TnhLcCjrgYuGbTv",
  "key36": "U9zZ55CEweFVju8xVkZc1k3Q1Ah7W2uQQiPkebTr7Hg2Uz3cYbokT4K2VPKkdRi4yEg2K6aWCLbLEsUzVYsbRFL"
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
