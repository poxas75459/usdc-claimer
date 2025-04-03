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
    "5xiSrdSJdPzVwADLWs35EUmGYN1qjHGdizVYEKzVdSj6P9NyBnJ8fBWybzP2mzWnHRWsGfF6eR1ERWWxUpjYh35v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ceEaMhKsg9A6gnnMr6U7yr2P5e7dJ2P6uLQJ7HuLZ4jWarYnMtLgmzYB4vkyTCJ2CSqs1BNdPdUmh9xgP3F3N2a",
  "key1": "48PXqpksT5ziUieYvjobd2zenhXYt1ydfy7Qjth3qVzmTYeWgP8oiwNMzejtZ3JpBh46VhrtjyRzsHyoJQL8djdH",
  "key2": "uAZ1eoNvHNgLTDz3XgGw8yf3upkm8VyaJdgYEKbwkVkw6Ho6PKEWGYun162tMuX7wPEeKwK6z3eYYDVzZsh6ZWy",
  "key3": "61xD3H9SXFfru3rpyxdest8RDie7muQYMGTyNWNqx6ajDHGMgsH319vZYuVmbmc8Dj8zJ5P2DcXbR3tiw54TJzXz",
  "key4": "2Za9TGbFUQFqhDkYrmfjBLfD9n4tNFb29PYEdKKjdDTnpstESUjQ3yNpt4DdptaZKFxv2N6BYWYCbWNFjhprdh9m",
  "key5": "2rD8qURSCt3NMLqBcU3ZZ75j9hurcUKC1fdvSXdrETSqLRxckxGoiW8TcXghB6N9ogjjPdzxYfuPP4vCgJA8BWZq",
  "key6": "37NhVKQSyZuSgPYvFk2cv3NsgCY68EndiYWkMFnX9zadKTCDVeowLXhWfh9C1tC3mMrjsZRfC7yK2BSm7BjZo7vK",
  "key7": "5kWLfGeZ3NS4qa1K6N1Ngc3X3nydcM8S795f5s6rWLGrBX2ywWR6R6MRvVHG9AcgX1fHJrWeUJavWgPnLYEdPUzd",
  "key8": "5rR6yVyPeQssRgrFwMuH5cwM2FWRxdEv1D6sXpxUtMvbjV6LFreqm6QVyvoh6tUhR4jzK1RWMqetLVg7E9RorQZc",
  "key9": "fpggLpQUA8wqcUpVfMwEsiE3zLYj2cxvXVYyRmyvVH7bo98aeEedR34rjaH8XGPcZrmwxVmbL1CDtsdQbuEigkb",
  "key10": "3bYDN4T8ssYuE8nkyn7JXBdxQnK2xr3BdyFEs5x4N9T7ngy4yjv3bAAMjTkCGDro2HTZZPmDYaRStLPwbPL3i9Ps",
  "key11": "g1RgrbXXxx5sMHow7kWifHwCUApqufi8hiZZquit4i5xRoe9T8R1PwBcwjJavMf5RiBQxgBPv7qUuu8RoSSqQve",
  "key12": "2xgduphtyqvgn3Q9xwbuJc3UTpBqoURR4Kr9k49GF38F1AxfiR4E9LBBkuy4FshgbjNRvm4jguzzWxj6SRehXDY",
  "key13": "5CyQGdmpne7y3A6c4QbGzuNhjSTbybeVZCsakJUcenDZTGsc2TNh4AT19xwh1nve9hsZ6wfRRjPMMz8L6oPESSFD",
  "key14": "2xNzxdGC4x6FvQvaDPkdNiT3rpsM4sZnRC3eYuSiyHwvNPTZhBSx4cjbTJe1D8PsnbLFDhgdEB1NZ3HejTbjugCC",
  "key15": "3APVwBGSG6Q8rSx87X2B5Sf2QetKQGLpZ2AfucFWoFq228ijKaFRJr7o473aeJj7Pp6bB3Z2Aznkv7frd8mHymqF",
  "key16": "3wEgf4XogirAY5UULFtS6hCtmeX4uhN31LCHYjnrmrdLFyoWP378XN7ub6Dvt3rpnX63aCbz5U4u8A89xGzcggfS",
  "key17": "2iEvzNGLdHjnQL4L97oUX4GMsrR8HsXXC55ksYCc7obdzdXzkoZBkwHkukMDEmSMuNeawij41g22x8MFynCmAHA",
  "key18": "jQXkAcDyoCPhpVqKBaR17773ay4o5uYgpdRA7hUB2bSD3tovcDdQ9PqC6Eu9Jm81sDt1frh6sUfFXEwzWYA3e5W",
  "key19": "5ffVcutMSnZXoMQ7zc7QzBe39aWvYFDeXLEMpfq8TyfjG4N4ELZ4CXbB1fx8F1eeAWvKri5HpcFL6pVdsCcvysEq",
  "key20": "3Brbv2ydrcXyJfkfm1JqQaJi1xb2RDC2Y7butbaMUGdih7iAJgow37NJCagCSztZLbhxzooYE1nE2SEaBPf58eRV",
  "key21": "4WF7iJ5KiNUcA9pRth8o3bXAyGokZmgSMEHyW57Vjn5JcyXrS1F1fKYNGFGfMPbLasQFSgGnn6MfMRDv6MGSiSbu",
  "key22": "2L3L18dDgHCHDTVHxaMda9jWK8yVTGopyxM9gajw1MGZmcTpoQuxKWK8gxAuEDr4gzcas8Ztb8h6Zb1baT4BhBmT",
  "key23": "rcffzaZuruserXxTt3aDKGBrtG6E6oxcygJeg4s1ZXf3kfxcFLuCBWzgAcp44DoYRhdvvL65PeNmB1hsVL2H9NJ",
  "key24": "3nc6BhJxpMRGq6MfS1chzb66r7PyNRdq6hLmvDhFVsQhJUQu42eGeboxoQZnFYj9ubEN5Ks5K7isSWDYgMQibE6w",
  "key25": "5bxfYVaFvvAJhSJ4UAb7fA3PCwnZeGLJzKKr4aNS85YcqH8ckZxrz4hM1XrUwKN4ttuzHoyjuzUw7jjcrSQn6ntE",
  "key26": "4GsDyRo19XRPmcUcfcyh4iGpj3DYkQa51FSTBBYXTESrbyf8UXcsHeD62KDJNHHAchVd3uT8h92jmXsaDzmc3grn",
  "key27": "4E4v29A9LxWisKycgsyGiAPHudGEMKHBBqt4YC3vfRvEDksdT6Xfb4KTNSxRHUfqjNg2988iVJJyLdvAJFVZK5j3",
  "key28": "5t28u6jQtUV5adfkkxi49Nb5VEMQ29TuU9USBYFnyseysAfmBLSpxUy3YVDAd2sEmkwzsf3rPha5EdAVZgRdrtis",
  "key29": "S5yBDTKpZqHGJZpghMUDTg9NSLdk558pdgEBP5jUSX937J5zMX9aXrJ3X9VN6WXEKSbuKRenVwx7YPN5g9SsTZE",
  "key30": "4rJGnGvYaLNqLPFX3Mqt1HAyqaEvZRuhZEHAmTgakVX5V4syjAktqCmhLLw3W57fchJMKvHQkPBdUMiGSgzqisGc",
  "key31": "61MMUFnJ3QT63rhfsvTmhr8g472ujCTjXGJ4tJisiZ3GAWWRPzMtcsfQqmCynSBdbpPb6dxaxhJbhazZdj9CLFLb",
  "key32": "28hkjuaz9mUWoWQBrZHvrTrKaTNbzSDXzuTyBj5w5fdV224innYaV69U5KobmucsqcteeZG6nhisY2j6mY1Vmsky",
  "key33": "3LH46ZhmoWzYeLyvvzujapxnT6P2g37auaPjmQjS5Z6vEQaGu5QfyBBS2xXyLENDGvV1vq4WVQZhBjZ9Dac2Ba1X"
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
