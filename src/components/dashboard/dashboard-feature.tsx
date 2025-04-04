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
    "2sS7tCQWMUQzNSYMFtWY2GKbLQbXFqLiuRQBeCWaK3MXPnQyhWyQojKyhjMB8EVU9HBvaZeU6hEq4g8JYXyUpqfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "272sdmjF2uevjGDV6eU5XXUHnkTULs4Qe2Q9rbJtRV6BYpG4NxaUvCwnURvFPNqWGCWcyU4otaMgaeAB692VnixQ",
  "key1": "Jkb8LkjL9cncm8McDwaVKoKGbEpherdyD9tv2nMv5SPqVREwspJdT4YxyjeyVZ2UscnJkjxiPPJFr8HBLuxP6FM",
  "key2": "KYQuA5r3Wn9csUbyLm5p7LqSdABzjteNEK5KLFi6MG3WuZd9RUWd56D2gyoV8AFuNos4n1egYYyXoL8EP56pFu7",
  "key3": "4Y4UNhCyQRNZxyh6KCT22UWESzc6CfjKypLYAgWc6LBt2DVP4tu3cQq7fDRnDPkC5ekb2azv7eyim6xXgExRZxp8",
  "key4": "5sXajDqscEKJumx1y6NvUdj2Rr5RnyaN6S9BZjPVLQEGvbsD3zzPVhyMLvT3s4ACwcidYZLMnaA3RHpP9RafrWAE",
  "key5": "4X2kb368XNJwewEu5JVDLZN4KVYdhtWg9tHQM1RoAEtAnZecx4vxKBfLw6Qo5mS8gLBzCJUpsBcYbHPybRSXUgXu",
  "key6": "43L98sKJp5LtQ7UPP69YmFyf2UEHGbiCyBkktmaZzuJBgwqKEyNBJzWSdrwW63dQC1PAQ3AqoHNbjZteujKJE1yv",
  "key7": "5keEDapeH6EYBuLFZiqJ7pn6uKf4Qoh5jtQcyfrKTgsAR1MWwcCuguqqMQZB2CnHTB9StA1ACcSbDUwVpb6iEsDp",
  "key8": "SDVuXKxHAoCdL6sMvt1sVDZRBBvNnedaDddXfGCpDUdkSa95CVMsPnsm23JFQHcwFehAQe9m9Uzhyb3ctxqJBf4",
  "key9": "myN7ceRTye2ZN69oE4vqeZqx1VdiPf4trWY6RYGSiiQDscG6fkU9YUCx6ZKZZxyhA4kAG6jWgjpfFnBu9ULYsri",
  "key10": "13s8pAduGRBpnAM4aYK2R89mNa5p16mTRTeR9yTZCH1q9S5ScMHB1zBvBdXPZjBMfzXyv6z6cTUGA6CreNHAtj6",
  "key11": "zgheMKW46coNLMrso4yy2517PujCGwLehPmLdfdLCtGxnof9dqKBzxzwqeEJZoFgA6cChYy6nSEAD1RmuMiaCRS",
  "key12": "4CtK3nbagSXBRvm6VW9zRDtvPGLtmhwPpnj4UQku3KBJC64QsWyGUfiRmUKmK84hGUNiUPkELqd8prj9kkhyMaUo",
  "key13": "66HxpE4Zv19QTNZi5aETYTGxEwWM9X1LhFQXmZbAVCTGnTnsNK3d6F5gGFkTeVEp5wqm5U4AqgVH8yWrq18jEFcB",
  "key14": "2h6YGiMiwByUvZ2jzG6DnmPSAFKpjqkxUGAACZX2o4ffnZBhX7BzSBvHXDVFN2mZdWzk84wzrQ3i4gdJqbUKWiGH",
  "key15": "3oRpGcA8Y13qXGdVGwfnbMbincS3no2HyntPKbN6xm7JjdRk9kTbx6R9RCbfTU7pjYryJTb8TKcRJMtiDXWtj7p4",
  "key16": "2zH1XKowK1MwwGjQeeqn1XfLxhhwVE2Df5DTdoaXFQavKRoHUWpqFNqLrGNjuRgKqoGtKxU3g76LXtvKimEu6Bdm",
  "key17": "3p3nKDXv4NyUgrfqEHHj1hsyGRc5y9V7NbCmi3EjenKJXFZzrWXHqEe7xsgAHjVK8d4tDqf9rpU24fnxCzxv8TQR",
  "key18": "vkzzeXe1dnJyAtBKifQZcuU7nM51rBdHSVpKxqAMsHUAmuESP6imxTbuH87NhwRN21vSj7VJNb5sJDVx2wxDJmn",
  "key19": "BojT9xhUFj1KzbWW9JAjRyqj1g41mx3bVowUgEfTuoKSX2tNSiYBgCZ1mNVkgHX5zfGQrmzW8XEx2YYY1KwG5Po",
  "key20": "4u1r4j5zTSqH5tkY5VyzTiWLT8wC9E4Br7jTQ6TMMc59LSq12PUrDFY3Npj2DDWMMq6nJDpdCUvv9gQuVxE3V5Hc",
  "key21": "3mA4DQfE9y1HMr12BXa4gKGNGtpAoAKQpnG8MgJ5wobnZASv8ukraAUkoBdiA1YHvtu1ygmqAb1y64bDMC3GGM91",
  "key22": "615VToKN3QnvLeLDUwDMA8pG74Qo2Tz7Yr6KJ44adB23qfnVvHefnEtmuZ3H9FS6nzKDEkQKbAG7YjPqJd59HABT",
  "key23": "SVWRNurtjNCo6AukPb2sYqfq4kD5SuXZYzXXAib2P12pRUxhbJnWbY6Ac4W6R6BpSxcqSQGZdotqSQvJRdqExMK",
  "key24": "2JBDd1REPJDL6EjUU1j1yxxeeFuTbhPJbCmncUqLV48fDM99fYFPJGySPn9oqk9BR5JHZnceZhA1pJHKCgq427yS",
  "key25": "2ZaBT3EcVK2i7NiqxhMCh9tvT5SZ3hYrBHrzAm8ajL6uihXJXyqrwBwv7hfFp8LCbSSFBtx131jyNbB1zWnhR1qW",
  "key26": "4H6dxT4WbSAx82EgvkCZa1a12nwS4HWd2G6TtvbSyKogAkagaFjG2mFqXcnL3QbRQa1ZiPr6v6aL3M6MiLxAWH4H",
  "key27": "JWmK1J6GeGk7CZZah1uBCTtpkXP1RpXeugwa6HEPLnp9VvRHuEGjYnkoPEtwj9Ro53FnsmG4U1Toku9fd2HbHFj",
  "key28": "2caFDA1wqSfn6PS1fpSnDN3nvKrccnTAG4DVBbAC1NMLPkCzo8AV61VDve2EjTKQTqakrirmpCiY6uAdFKQuj2rm",
  "key29": "2eXhdCR1dc3uj3xV7xt5L5sXTrM9E6e6Rjh4S1YCt9cFpwF1LuCi7uhcji2A2hTdxsVGhjbcjahychejtN3QcBxD",
  "key30": "26FdvDMbNR27uWNtm7ajtbERGnB532Q4vztJWSPPaa7uHHUsn51A2dHLJT18oruUCQ1ChnQSBk7gCZSEK7VivqDz",
  "key31": "5gmCury4nKsyv91dHxiP3dJ41uKTYL7hoUdpEXpjqDtQPVe6fuoUJunNUTsQ4PfrtiHV4jj8WgEFQHkL2qfSEqUA",
  "key32": "5rvN6F1C8dPEsCpciByDKoRCLpazRkHMqPdoPVV9itjrQ3Gpoz8cahtLYhQV1R61xCxjJALLnH4d9FcJ57XDQ1uL",
  "key33": "2W3vtJvtGdiyeqKQSDvzuwnuQTy1az1UBF6vXPJg51Cun1DczNEEfHawiacyeKjziNbwWaitG4HRH54go9pzBgVQ",
  "key34": "fqHudjeoU8YiZgBYRtHbrR3WZvPGUAYSeG3CyNfRpjaRLtoht5iDcz8DcvP5bStZiYu1YukEckYEWx3bP5GH8UA",
  "key35": "63UbhgQjzWnkQShLGB5G4XeJDAx9cCFZmoiRXZCMFQaErDMdE8qZWYNPPEfKEaFC3GnRLCbrNa2VfTc8B1i4Y9d",
  "key36": "4GZztiWzvJbrDM757AbmhKxQRDvQ5yjcL8EvRzrpaNJk1rdZxygZ26QJ4Bg4apF8Up8nbGuk1eNKJjXaGcErgT27",
  "key37": "2W3wJjr8UE34JdjNwUiRHAHPsXqtvZqFtpGgpmPDGSKA9Jv6m44CZePsmLg4tBQ3PPhJvQbo6qXAbeMLX6qveaFK"
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
