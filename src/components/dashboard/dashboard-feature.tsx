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
    "2mK6vLQhMUQUcKCWTvGmdRNRdcWkFod4xWybDcfzDr9PNRpZ9RVHuK5qFgcxAPoQkNUijaxjbdzvbGL5uMg6wzu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TuFdAZ2iebfKW7HsurHuNGmEhWQWUFTprvfCprFBuzHhAhmvVfnMXmrADia1dYBqpvB25GKAYyVe46CT3LsJboQ",
  "key1": "Ljf7nqjHz94T1Zr9Jr96WQgasyi2QXFQEc8dndSAVtMH8HFdvmAFtmus2AbXWNbT2jLNhK6BJ13LurMXgMH8Rw2",
  "key2": "4Y2ct88uYowMbRKXzRKeFCZYsCVjVwHxqJGR1K1vdLmpymyhAceWai2yYGZJ9ktJjiEgvkHbV17B53wHpxYtNjb3",
  "key3": "3vgM9gK3PHV1z8ydTzruL46fc2sa6WEDPwMtSx7EWB9G4mNUoyGBiS1DkVnQRbW3N3r8HjbcWFtR2owFFj3Kcf3",
  "key4": "3kx6ZDXTnuCqRwpTnMMNELVGZpLVUdvtgk5JCSmtKvwDNVRbvZtv4SxCDzkwpPNa6dyj29reYDoWhbo79aDxk6Xi",
  "key5": "wVoC8cgYZLz3m3QasFTguV8jBFsFB3WVueDcRYyVPsxaexjZ1SRYEShswnTJ7CW4rvmPu8iagzxp4qaxHxWMHwt",
  "key6": "3z7huzAj6o2PPoe3G9NycWn6X3tPMUj1nztn61fCwBwndR1wkt66fA6bFe8FdTQNdNwd9ysuV2YfsdTX16QrK35X",
  "key7": "4SRSAXSeuSwR8fFdp9hrEsThwf3vJz77kCGC6z1P3VNvQPUYFbeDanUkNSAqVjCzRb6A2H2ATzCFKj9VXafHt5iD",
  "key8": "61WqAnsJNs7i5SPDPi49kgnivdJpxkir9tKCHVDYnTWyZLEn2Bhub2CyAAGry8JvyqxHpNSU4hwavBmLtGVgA5R4",
  "key9": "3yUfacbmGHRYXEfhbkaTdpahXDzHrFkLkZXiJAnFXiCBrTDbiwkKEfeQ4dyV5kJY41B1x1rb58VktXvgnoPqVekN",
  "key10": "5Ata9KFCYhjP1gRc2t7HoZgwUtpVrpv3sVjav5VzcLrpj8u7tE75L6fG6UisYrvvqdcTAUKb84dcyRUDSTmdKwCq",
  "key11": "3JcoVoBtszfeNXZCtphSp5xh2CFs5VBkd65frzYaqazx2fWyzHW4MFPa7xk3DhSLkmfv5LtmRo1GDofGzMzgC1rx",
  "key12": "26xLg8obFxqY2c1FcxemUTzAd2y5htzqfcn4aBjCooyrmQcvPRVUA3wiT9sg1gdTSxQxPr9wN8hQuiY3ZLqHWEnk",
  "key13": "7fSRXct9xyqt943LHuyYZp6adv5P19SbAXmkXi4aftxbXp3z3n2GVkze3odNHx2KRK8hpESax7S2iYG926idv21",
  "key14": "3MzGoqFXAbFDL4XCg1Gw3cf9SAAhyG21oEbSdYwRAKr31t8jX9WpdMWPSuWnkczwdHXjvXyLBMQMigpBgLz8vL6k",
  "key15": "4nTScnk88ksiJ2w4rQCoBMxjmDkPR5YpTQgg3BHgSa3vkZXZudk6bnhsjesxQPQYXXtVj2NcwJCwYHAACtCBFboJ",
  "key16": "382fKcvef4qtpqM8JzeW4SNhCuEiVTKxtWF8T6M34entqzzXA7jaMowP5mZ4bXVVMgQrv42HVDZ6jgZa9Xge1qFU",
  "key17": "3F3oEgwnvJA6vBEGfPzCQdkzwmewX4Ah7HwtgwconndN4tYSDB4wFLVj75X1D4c4EYYhWjK9SeHz3rZBjLQeW78r",
  "key18": "5FSAMqG5Wam5mX9KskRufH4dACtGRifNR27re8wuwJv7rMd8gKqFk4SKE4GR28kt6jfZsigvzkrYdMhoaTTyXysG",
  "key19": "27DLL1s6P6vtfQJMRZZ7RcxWEDhny1WUnHwhw65AP7eixNJo69cveTvHBaW1FoH2gEM3aq4N2nXywhi4HQCZ7uop",
  "key20": "4EjZjytDLbSgpe8q221Anvpuiy8TSKZsMRRYWmAJHnAH8M61qRQ8WbMQ7dumZgdqMDCcRdGmszgY4RcGrcePGZVg",
  "key21": "4LdCgB7EochHJcEMJMmPKXpSqvvhsH2BYvgFQ8CD6ndANUUZXGpMrUjEg5fJhbaEGCivhbiLF9cbT41jQmKK34Xc",
  "key22": "3RHiCuiEJvDYCTtSaNF9jUyU5hfWowd6LX7yMYyNoDdZjzCgCHjp8sXhosq1xVKoQ3gSGn4jtPiwXb8T6xgiM3D6",
  "key23": "9Usmrwem1QzJZZ4r56k6L2o6CPS4b3TsuqKVhAByJiviseDG7k5ssDvibLk5mAVzBYN5pQ9x9nijJzxAJu2D39X",
  "key24": "4JXfrD1SYZHdvEg3hwYytdsXaPLtTGi9FX54KwrgGk4kuP3tvYSHCQKdt7moymUZqq9vs7Pq8fvXqjhb9c8yHQFw",
  "key25": "P3fhV26266GJXM55cxBkaRAR42Sv2H74PGXzE1PRjuNPSUcJhZ8z98aTHrJ73hJnKMTD8NT69mgnCRRJJLg7qK5"
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
