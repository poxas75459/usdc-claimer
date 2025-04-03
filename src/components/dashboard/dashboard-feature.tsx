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
    "4UZjuNrjzSFm6LaXKQFFLo8zfgonvxU2QVgexr9nLpNDSfVQSSw5JtZFzWefP6FgncRU3UATqamgH2HXTDPQ82Cp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wq7PzXDeEHf1r5vwXQPHrsZKYQKp2DAfmVdTeb8Yz8boRtEg29hu9sc5Gu6VYsBwGPBxv39gmKsYvBw7Eq1nCxH",
  "key1": "3g4D3gta2AL9CfEDQUhS7pmhrD6CaHdw5pEy3HCivFNb3T7BZ3M4bAHYhwrC7Ny44MZSN9GmCL9mpbQBzTuxDVHS",
  "key2": "2cJohCZneQjV6p1Ja4tCgDNkuyJHk9WnRSi2mVLXpZtFYWotzYtco6Q6XUwdv9UMFr7Xz8jon3HuDnQqRwoXPt5n",
  "key3": "52FTkcdPwyRwBj8e7jtGpCuKZMSJeh9ZTaa8mwqMRUxAix6RbKrGgomtLuetVrdJZqvzCvp84VegZF5MfW54jyac",
  "key4": "4gZtixX6uApvWjfvVAfbCr86mA7PM9otwhuo3GNQ5bVt3RgaMBM1z7LTCaigeGyWjMirsK4ctcnv55D4H3hYg828",
  "key5": "4XM7a2U2hFgmb8YErrPNAKMmNCpUHTrHnoHUYWzPiuhwL9sWkKjnhBmHRvt7f88MqXuucuhP9tRkCFZVTthCVSk6",
  "key6": "23wrK1KwfHALMTScZD84rm7g6RkokFuegZNSmhyCQxsKpTDYaQMP4Am5u3sYVCNY3xbpy9apWaSbqHjR1iYH1dUm",
  "key7": "3HQKRxm1BasFc4PUiVcZagneubsjTEChDSmtupnqpKKnSWWgp6nmaFRjoL5sSCWxH78capS7NcnJk2xuqFr4tS3L",
  "key8": "4eHFstik9g1b8uzzAhTBoQieSUhVK7WRihDb9xT4DTyiZD2FvFYby1TAWu3aULz82CguFmZNG1pPKu36g5gUTX1N",
  "key9": "5GiDqyLMeAqvHTorVaxr8AJpgfe64EoPqQeFVEYVv1e8uiSxr8wBbydoSVWkHr7ewaovVxntxCjPahYXe6hXqSgG",
  "key10": "3TV3wTmsTMPSPdM9QuPZU2LJ2gnuC8F4naXM6WVjDtEMY561Tg2Bn3bhkD6uG4VvHLf7auGkSZozjHb8mxP7mQGD",
  "key11": "3czbHhe5hX3RJC1CpZHHhUzjrbkQmZQiiCUUHu8mRvjFhuXuPZ4kccLN3Z4Y9H79RaKqanfL7Fx3amZBkA4zkCTt",
  "key12": "4T9LN7sbSYaXA2PZB8AdG9oF2WmsKYB4xzFX6V9CKwgdxg8LjzkrExyhEpBMRdn3P7w1DsUUd54jgaGv7QEunwsc",
  "key13": "jZs8Y8DE854G7Uiw8L7pPLEKoKvaSsoYEWPSVDRATMFTkJ9vZEFsVtRP8k176BcWHSgRJs7EMtG8qawKwiZZyx1",
  "key14": "5TmB1Yxviq3kQgGgik8M1K2pfE5Vf1wxmZ5pbvNZU6CwDKgRRaFscorLpwrHHpmfQz3MBcqcNgHYGYeo3f3tHLUd",
  "key15": "3Bd3YUwFQe9TiKFCStpAf1iXR92ZhcgMoxYicLaAiefkyPm3B1z2ce6xpQD8NzQ7RYZ11LXvrp4HMhYMBEUcVRD1",
  "key16": "FjGNjagEAxPtwzA1L1LFQxTWJTCHWKKDkoFMJ8xwXAVSKsaaiytmk1vgHame9iraj43bTv1sVJxnzDsLBUULZUh",
  "key17": "5CPdxisBe9Gm8zw6vWH5obvigQYAsLiZgGPZCoryxnMKnTsfbWcDiiNySFDkyeePV5tAFJRSYNLaQ49NTWybQ6vj",
  "key18": "4S5jXoRsDwSu3EN5TUakysWJj4pdjdhE3RH7dAv1XpoCBJXdsWNnWxCuySNZByXqMDMXABvvp8tU2h2r4Y4f6Bnz",
  "key19": "5Bn3Lo3HrvVCuWxCvzkAyQTWb4BPi8LsFnCupPP6ePxNK3JabmEdNWuaKTrREhoJdnX4ddzWXfpuFCfLpnfsBuH7",
  "key20": "6CJwqs2ThNUAAwwJwRKkDiaZGdzdvZYzzQRSaWtt6K1S1hMxYyVAqsdzCJiTwmWupRjR1DNPJJU2DBKWvNGL2fw",
  "key21": "5aa1G6zBXWrTS7vfrMptVNWJp4aD57RtUH6fDGMPm9mgwZ69pQKZhC1m1pTNGABRCv2CNx4prVD59m7JUCh8MKja",
  "key22": "43xcxFxB6eA1wGaecAfhPaewcURhQxmYWHFCA7V3pHcnjzUhpf9pcCkb8tK7xtSU8MUZaZNn7c5qjRfP3WK7We6j",
  "key23": "2jMHQBAuohStP43NwPhwvhoYsgJUuSdViKBoksqiG5eApNUxdoDUh7toqCYYdaRL69G9P8x48hqLvPyAddrEQGzz",
  "key24": "3GoAY9uHdFN3JqHghef64z7wxcVT9c4z6FqBvpGN7eJUF8C9yczjW9MkAu965ga1eVSYzVEDKPrwaM864Bszy6SZ",
  "key25": "3ujZx7npFzyXKdPJ3DRGFr6co1crZiXq7mSkqfdPiHfRkvsEdkaSmD1ANduiLSQXvHLRNU9XyzkMQT5kVGpQHBPU",
  "key26": "4hgCWDBdNEJPDNeuhNW69Goo7qDLBGZeTRdULaGjnnJYKh31PBaqe595RRGV4wqcDsYQsANEoLXVfUAsuWdvM1qt",
  "key27": "5Jio9CyDFtuKpg8Dm4LqoSDGiAZ2gNcz4x3JSgXv4PCHG1jgbG2oczSbGGZsiBaznM5Yp17Ra22GqHBPkL9PSekC",
  "key28": "2qwGox6cZ9ZLgsk8t29LmEYA69FQjUhZnWQruFft9LxCT5ppzJMywkxTHLkqzRi8m9Wfaa2Bp2ecyRjnEm9baodL",
  "key29": "38WXBcv5tctGG6dmujRhf1cZU4VTSaqg9ar3DhxY2ZLpMJ7z7CNGwHbuDyVVwTKh1JgoZpRDCz8fT8WYjmJzAguH",
  "key30": "2RwKm8DmRGuwoTgkMTbuiNiFq3UtLGYYZQ8bQn4KJNFhUWqgPisHtwbKqGN31GQKwM9bEipFgHev8AvacQ9QcrPL",
  "key31": "476N736oLg9TDiDsSzDWdxUaxNS6tg4QrTzZub2MMkauKmZNVCY8qvMfBASPq5qexGuHN6wx2NY8c3UaFVBcCFKG",
  "key32": "Tjwfe6tn5gDFDNmkroxd8Vw6dPFt43oSbNLtNDaenCL7mBKSRMjmFVACGKwpuU2PVGKVTuEdVVJGbjfsJEzGkwS",
  "key33": "2CrV5tKZMc7MDki2d33rGd2718N9LYh7u6ZMKMrrzmEuUioN79Za2XQLZY7D37wdQEy7DdRf89y1Maaw1epNT4DX",
  "key34": "jdfhKoTg71dMoNjLBJgL5JEp5C3obebk7CMzMHdnKdad6dUR64ZqW2Mne7NzYQEkaxAZffRJ8CTYBGWoFggAVGG",
  "key35": "czgLpkRPEkEw4bv6JorTYEC6nqqPPE3bagMVTi8DzzNVZHssiF1KWybezLoGA6T75LG78YmniBsRJM9W6UxRBi3",
  "key36": "37mL5M5NGkFKZDBFfGpfMriC8Dns5gnhJ42bSRSRGkoLifSHuJbcSBMXLTCyMtDetcAYM9BpfuBkaHvYu45sLuJk"
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
