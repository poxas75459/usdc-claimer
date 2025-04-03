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
    "4ZD74zUm6xXKS7X2Nwu32sGppKYij1mrEzWgibpwRwZbnvRHV7tXvSpcGwexzGEPCbDz9SGmeasb4HKgr8p4iv6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rFv1iAoiUfA9LLQ3DSTqhfsBmoEptoxDzdLPKYjJvRZCBj1KkBrDENWuNeJDqprjJ5YFibcXGCnrutey1itCtHK",
  "key1": "65GpQMS6MAPVYyX7EFtRSa2huVYEMo4ytZpbG5JSEScNNgo8tnWEzQqYxJ4eTy8pCZCo6dE7gHLnsngFrXhjMTGy",
  "key2": "3gA9jTnjXkFRvRZjxKzbmW8qWxthxTSnx2EiUAa7NspW4vrw8rwY1UvT3qBdA1oVWqNvjgyoAje34QvCx4wxtEzX",
  "key3": "2YhNKXk6hd45cKhZ8SF6br7LqfYaA3oJjcueLkTCpajCmkR2adMRSp9nMtFoLEtopHNdjq6joJ9ULcyPZNz86H2p",
  "key4": "2u87qw5mcQ461eMc2rvaTYEoVPs9fvZMSZoc33pmjQm3czt4AmovmndSzaHYYSEwU5VoHWL4q9xPaWiCTcrK53WC",
  "key5": "5hqJxGRH6niCPKfR8auR4YmR1r6XAgDosJnzEFYgg6AG9DgjjTJudZuTccH76XWXFZ3gnxFGaVS4Q7jkEuja3xGM",
  "key6": "2i9mv1ZRtuX4QZyoF4UNnfrQr3mcaVCfFmLfK8Pk18NH7K3vczFHnjRNzBhWCANoPekJUeooaei5JQxbR4PfDnmb",
  "key7": "5m94d4qZwvJNd8AKEYwqZGae2qhB96k6HNtDVK1QPKf9D6k2KN4ZS4m2Sk2ngNpfuMQ8TmyKWmDHPx24AaQhQFqD",
  "key8": "2icRNVicKVw2HWv3HXvX9LGLiLK94BZyhThZVx1LXSuJ72y9PPKLSMQFRtL8dS2jMms9oHA22Ax89MYTD7PVgduP",
  "key9": "4dmYKmAQiw2FQAyHwKxnwt1kWDKBPUAaMdXQ9pyrvuQNMfgZv3P2uB1W75UpGjM7n8eFAAy3pA4fSFWpbbHz2jWv",
  "key10": "56S186zhcNcdcv5FqnJZ1uy3YsXNjregV2wiJHWd5uxrsdNkMeCAUA7zMpSCZjC2NjD6rVQi6PjpX5mVv3UptTw8",
  "key11": "qHbwLHkdm7RvCcCQhbMo1cZBEpY3Pj8J6rPjkCutmZktNJWFeHZ21HTiVeYpqtRJE4ZuJ5Bef1JQViFoVK3Rtg7",
  "key12": "44z5whnWM8jMiukWKh4uSZe1H3RTFiSkSMEbwFQ5yGAZG7GbKdUYfbX2xLuztEnh9Fa4fwiujTDFtfuVQQQDtX87",
  "key13": "5YQbEyr1xaQH3rEHPcF9aA6w6a66JHnXdeUPnpMBs3dPXxJ5h3AAYdgc6aDzy36bhgpx9MpUWZrjvBwmcyroXdyS",
  "key14": "4WYX6z472GmnyB7gbf17bHsscNW1tfmxuus3DvygBUgqQuQMPJ7b8A4TFpDDrV8ZaPA8Y5phgnScPcNH1jdaSrTS",
  "key15": "Vg6iASGayzTDqiDH7CGW1MFAbsEwigXQnhWNGWDLVAoNfDMfPJqBNX5EbH6Cyi4DQwhVSeK9uv3kPAYTmnPKXHb",
  "key16": "2Gny5pqYVA2ciZZw1y9rpvxxFMTjzPC7vmtXGWqaaVcyz6MRCeBeeRQv9dKduwCYhVy2iDcErbTsXTc8441pFtCv",
  "key17": "4RjNhknXJGLW93r66J4Rbpn3MELy1vJsdhhQynAJP5jMaU2vdfCbSRx29HHL7DjnzS5dQpuf1vgaEbmq6UUbjAGo",
  "key18": "45Z16pTyr9gsxTKwJgoxey9YD23fUZYwXDCo2RiqaYnrNkZm3JPutAm8qkkBUiDa5auMQVBeVetgx9ugTMXbaiHS",
  "key19": "5qpTz841uyvpJoePTVhVMYwi3cCVPmkkdViDt3R2bygemL1cgDY6nwae7XYtgeRN2pnCZLQfAyYXPSkLC1eQ1SGh",
  "key20": "4EBhAVo5n1JtZ3N6FcijhVGP38iYWLZBvsAvn6KcDPvhqDEDmrnw7xw4FUv1jYK2CpUD4tcBPVFeohwYdsFARFPf",
  "key21": "4cMdz35tgLdA7Ya1T89kfVvjbfFzUc4DUzgRLzin46YhNzaPXDB62aTreXyLcpqAPkMbBwSTnd95aVJYPrn7QXuW",
  "key22": "3NhueW8xgSScQA5x9uJbbPnmxJvYg5uFuZ5RfdhyoejizNAvkVBXbHyFvwd158xCsw6ko9xTvhKarv4Z3WmFSPKw",
  "key23": "FeZRWXPC9kmGnSWD94Ys298zSsqebjbzpCQDDd3vRrQwspw7BcEsvXvDZCoxc8xbEEfcSr6wm78iE4XUeE4kkrg",
  "key24": "4h1BN859ZhhZV5mpuxFGcxAz99qRdagi7g1NjjNu17nzHW6r8pyFkY2RUn1tBe2f5dJW3xHQBCRpApUoVztYwxgL",
  "key25": "3zgitDErBXagjuCTUkTq3kHuRR7EvJW8Bm72tSkYfhdSsNZJVun8pGmH37Jo48uJqUGQJtBJLvfGZCUoFUnbNwbj",
  "key26": "5aLTCGGFixKVV89XnZj5cEZNEGM9a2pJPj6mG3rEPQSgtq8xWTouNh3iyakrK7zjM9GainLiLR2LGa1MHo3zF9JM",
  "key27": "sxyaXi2zfA21c9AkFDhWmsLzAffaiqe1weDBGNBGKsczS83MmCWniD1Zeq9Hk5EViWUGfa3NzrJ8YLiDRXXvFHp",
  "key28": "u6U7KEuzTASWutieBecbe4nAVURtZ6zvgNrgTUCoDHNM4zMJuUxvHB8mS6suPX1NV4EK8Gw1ySqwgVQztYDR6SH",
  "key29": "jvBkJfgSFLqKCtSbEfqHCzZd8aXnt5fzsGcy76RjNB33QC5PT7rrTrEsFnizF7gRrFhTupjRo3vR446KthUgMhP",
  "key30": "2xDMwEW85b6rJUyM9zx2iBUYNUV3RYagdnEh3xU76RyNSAohsaNuQtwzfwuhMoMK6q2jnDy31iRFBqzWHwqaryew",
  "key31": "E5EhBnnq66uJQKuCisH39meES7ei2ovKYqCfY7o6UzVRnDgRsNtGuVyTAcew9tXEEoQmAtbbXXG6u8nFJsszUSj",
  "key32": "2LsBotVLutdDLSZMA8MeDtyynr6vXvLKFdoWBxJXDgupMPUz99PEsYcj4UxLuyEhAd755WxQZXXCgARjiCWzSJ6M",
  "key33": "4shCw5nLuiwQooVXKfEQRuRTVyz3zQUiigNPMFq2daHXVXrfZLqcAPVKjmceGpcSF7cCVrAQEWCxQRGKm4s6qqMR",
  "key34": "oo45h885Nopv859SHR9edxKfWgMZrxhVmmgUUvc3oqCmxqM9XQSPDKSPJMoqmphkwBeqgimkaUnDUgELUgcKcjM",
  "key35": "2hYm3LUrWfncfk77QbemMCfXPePxpZ4WC2APmc8xZJaHEXPKN9FJSfXCALJE4xz7RTUxe3NrtJDEiqoHNNLHnP8d",
  "key36": "5UdQMuHdwjxaT75rFYCnWUDZmtzu9TwvJ7UTDQtwhxrC4Zbeu1rsv41YFtc7G3vJAGCksJ18Fz1kGKzDq62CDQeA",
  "key37": "3PfmN9NEtZ8HuzX6JCDoqXF24keLk2hmtC1Q4JNnUtQuFJYHGb9N2JDS5KWzroa7AUJKT7iKoGBcSyF31qFZe46r"
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
