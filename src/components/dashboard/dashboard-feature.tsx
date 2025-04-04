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
    "3CyBWiWoawWyh7eCxt8hGkMnHb2ckXMwozv7kN1D8CKW6Xo5bsUjD1aKYBXGNWHiBsJKH4hacDaNh6jPoPeTLMNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wJQwqkB4M3DXyQEQPtTxq3JaFGSnZNfuW7efikXLRZwa8FxUtmVfMSzyC8W2DXZJtYUeZW2ffwL1S3HeDHtTwNC",
  "key1": "2Hf2ij7JEaY2xF24xmQfQVkgPivvRkHfSEzGUzxwhtzSz2FHZqiztwGaqHQeJkNAg97RFmHvmbR8m2PAp8zFvWmN",
  "key2": "53M4aPwL2YTmGCWRMrV16E2hywYK4tiP4CN3GuXp5S1PApV8QCeeHzWMR2S7zGGPS8uL193pGqQwoeV4fLSW32rp",
  "key3": "4U2zrSYcda1h8PD9b4TFdWTLNkwLUjHRg8VPCYgwbUsHysMyd4ovrDdePAefPdNACBYPH4mvPxqpGMq1UuufGAas",
  "key4": "31XYUNSoZpDEWE5wQBpu9mxTLcA6EvDXzi5w22cduKCm427uCbu7659ceD4DfcPVgwRvSiqCPrA3tBqqnJsefgZo",
  "key5": "4i4S6iw8kjfozL58JcUUHTdooiLa5RX7kdmqjmThivgCQJfVkNr6fk24tnP8cBQ6J5H5AfHedDJSNNvbBGJBeNNB",
  "key6": "aw4FsmXjhNUiMPbgiUJBXfkD3ezoRr8ECqXY42fGLdWWHL8xTzzufDKzJha69vsjFMQmcKQEggDhU8PiZx3FyDi",
  "key7": "2temh4gpoStCZJkcv1U3pwMUZMGctmgwYKw1rVBjbKmTiGEH5qHEKJZiB4FBwsuqWWzRCkPFyGoPm8UbwUJmzAPz",
  "key8": "4JX5q6mKziXRL2GXR7jjyp8fxH74JyTDFfe7MWRoYDdh6achSRPJeViEgEu72ywEWvPisVuDDcLNCTGz5Nwg5PHk",
  "key9": "5CdD9fcgLvrw1EYZ8FCQuzPESj2aa9sEFeL6LfRodAKUfSTudu28toSVtk2KkvAUti13fJH6Jm8xEV1Wm8mSZd2p",
  "key10": "4xcNpKPDzeu93jerqyTSnkrLP5K3CXqvihNGAXvu1dy1xs8jckWCBP8P3F6tEKXQvfBAwJFD2YhBrCVL7xFFUuiS",
  "key11": "2uNvgTNK9L7RQDHTGAK5cG3VK8dXiWgpvK8nhwzny557x9SdwFCyjTbvjiTn7RjzviJAeD8XrqwAhmebQL4xpAhM",
  "key12": "2cvoALtGq9xMcrpdaerBAsp3z1m9DieJHHxsTGDDrdmPcSFMSSLBkC3JNC3EkFmuERsQ5DqCfa37WW7Sx58BgK5N",
  "key13": "3zePx7ihUHw4ufMuJ6RdF1NPvL8pTwPgJNMRJ62MPyoUqwBqC3hHRoqL6ySt7yiJS2ibU5YNm4JKWmHmyz7kCRRF",
  "key14": "2pTTT2UpEYqzQUyqnwsShCv1kk9hWoRz5fsSUjnkxjzEsQvsB7HKftxZWvRAnTEgRLcVMU7XPedsnT3soKDjbQhA",
  "key15": "EQCDWPKLFD4AbAKG5mp7RzkQat2uLbWHTmTruDZqDT6cTznwCLhC3KbXD8sH8BzwTXWSr3NySVs6CPbPiVuSgMF",
  "key16": "2qNSogeEL8wKgsFHvdd8A2endebaeUAMwYarCkKsa8YE8dAYqWWNziZ5YsrVd8d7mTpxvgHTeMph7VXiBpeh7Qtt",
  "key17": "3WgLiLsGvLqv7ZXb4Suf6ShduoYTsyLFFqvyLUnmDp4GG62ULaW8Wojr9FEKovSMWuygZSvRTW6nrDvVvmizCehX",
  "key18": "bcSQJY2EBowCxHpRf1LYZ6dSokzLxCasvRUbHx39DxoX6zjbwukQHfsv8AP23g321ZL3rC8M6sVGuxdvhvQ7EEJ",
  "key19": "5bVQqy8ViKjVdS7U1q9qPhg7q18pbbrpWErgzaKqunDUMr4LWnfDecPfiNc7s9SPdvcnkvApNLSw9P3Awi81NbYY",
  "key20": "rKDFx7GsWqBHmtZiuS24osW9uef4efKu2JS3mB5wbRPgW2hTVZgNMoXobThRDsYzpscyTn2v4hp6R1TmEqymzzp",
  "key21": "23CqiR9Wbc8AAxb1yhgLSm6n5Ta1xMME11FdyWA2c7qaJjPGTJpzUBC1gMjKzox4WDHGy1Mzi1fL8SB8mU3nsjvh",
  "key22": "3EMSqAYDm5qc5MoEwxGqMzyKoDb1KE2N5EbZNJQpuivChLgkBTWo149SKoSzMGBSHwg46enCoPmbDxrAUz4LQbDj",
  "key23": "2wCWCq4t4MEgGCn7L2TEDqv4uYLEG4RR6mvaQDWrMQV7bLptTFMmM614VNNAUkQWuw4hk8L7K3m8CsKNK4N8NzG3",
  "key24": "4rt2s86mAuLbmvy5qkxCGLLQVNKXRAgqqY9jiuHpQQeqobmuRizJ3JQeeJshKRZWyPk5294fFWSvU249BqNKvYah",
  "key25": "34uSM4cn4VsK3vmuZnCGKEnfdVc1jahmzY4uDABDA2raAKKDCeXbJwtNoPPriMkNbPCcWAZeRjfHLxankxReEJmK",
  "key26": "2G5KaQczQqfg3QuoSS2EevfxHB5i3hZYdRqntZ2eFf8A5rEKBvm4DFybfRaVVZrSSQH1Mp5X9gARdefdBB2Upa2i",
  "key27": "2zqCgaVgAk3dh8ZN1aYsS8z6qAdeu3Geoob1LEfZswJ2dYQ31Gy6VLxsrRVWTu3Nu7quNJD1rfMShciVKorQDDpr",
  "key28": "5sSHoBVQNTgNnPKexwk1jCmeruvA3ymN9cRupJuQZbHqsdw743gueuusbJruyvySxhWyaiP9kRqjjcE67qz89UYH",
  "key29": "3qR6fBhEaaw1BFUzfM8usuYZHipaYKRiyP1t8NFCkpPLHsR7AkPQ6e5uNFMBvdYMvzKsB92Xd6UsVUHh7KmnHANb",
  "key30": "5Cz1v6DwtKcbHtXJqmu6HHNXVZJuhW5781kTCiYWv2nacqywixomYQvoN6aNTWCeqxTa8aDvmVpuzoPMD1xHDj2g",
  "key31": "5cUTBAmPAuSwAnnatV8opSVxvtGhdmfg8xD7CUYZyz65kFS6nUQhHrh23yLQz2SW6yi7Zi799kJEVy5uSaSmQTYd",
  "key32": "3Urqw7U78Rn6Us8Qv82Z8AQEhP3ycsjdp1ttFZCXVvF6dA63JU74uddEjZdoy1f65KuNFLCcqBArzpPZYrSD8fw2",
  "key33": "3Rarw97jn1aTcrT3w5ipQ75do2i1RggRFK3CBKRzJjjeFZNxv977iSdbPwbXG2cweZcV6o3wE8rswo64VmdvBich",
  "key34": "3ztYnbvUhbFe2jHKCFwBEiEToYivjqCmWWY5T7NHY1VDmGJro8b41vDv8Tdq8kMy5igHkUSgnCZjkenyLkdfdQVM",
  "key35": "2oE25qike76MEJZ8WbPzg6rYE2VTPHPUCrRZQNtvvxB1kCETnF2cSXT86HutFh5h2iYqMqL3LSbQb71Ux8p2Frsi"
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
