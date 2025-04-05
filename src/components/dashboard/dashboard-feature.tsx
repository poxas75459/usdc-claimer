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
    "649ffZ83GbKPWDyj3Yb5AeAgzSay1f3ynJK4HVrKS5CmA38qqBhwQeZkR1oJGkfP5VJSZGiJGf8SjkaiKRKoFCNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ehmaYG7SBieabXRaj2BQ4XvioEXTUqWAnqaTc8axo1dJy3BvqZDmf649y6S9ywXzVNDj6pLsC199MmUiWZTDvVX",
  "key1": "597Kc2oGsNrVcP6WxuPWq5jcLsgqpH7mHqC1jCESd1rw6TM5cuJ2ymjHsE8gzMWzwKDoo4zFTKL5jyvxZWz885ju",
  "key2": "43KKSLm1xaVwo6WtcHtNSBAXZzeFEYx5DdSHCS5eTfYq8kBm8DB84gaNaAJG9R2MZs5H95DYxLGiyx36waSxwq8K",
  "key3": "5XzYacvX27FEoUxKHLwE75z3t5d1QWLQe4PmrK7zq2YidNSYBu3nm9E7E8TjnqS7gVDTbaDxGLi8g1wcYFz7w3oU",
  "key4": "3Q4Zd9avdQTJYfT5GBFoZCUMTPzzqoEDDKEBeV2SBxS2tsBbPMbwApNctZx4NoYh5XRrsWhJ8k7wdd9Genpz6tDQ",
  "key5": "4qVaeWzj8as7iVBy62xPXjpnh4PeqssYE9K5h4PHhZAzQUykZrVb9fPLcCb1tvmnMzNrn3hEtpAJvUoufj4a6tho",
  "key6": "4u7PEVLWRHAWJmFZR1iVs7mup3ENEhhchrkquxeVsjFYd3FHcDTCKwdtPhQZWTTgtoxpUxNruCkaxuApNPbDtLa",
  "key7": "BDkCpAQKpvsd5NwaaJrqjJD7UX9pgUitytnHhswVdTniACKuYPUEYWMa9XhKBm86pin7yWFjo5yhunWvANebvJe",
  "key8": "3YRpuu7RWetjWkKwr2NfnkGye3npFyQ5eaMK85oqmUuCuPPBdAfZsoccQsSoAizd5FJrjWdwXKATQXSnLKCip6uC",
  "key9": "4M5Sc8DX45Y42LnUsj54kjHXUPLQFuZPC34qWFRrQV6k2MmWDingx1rnNEUnDGtUdhZDdicphso5rXVaeXBd6avv",
  "key10": "4og8Q4AmXXNSjyU2KDSz6L9NTUvtPksSUFxM59FVmCixYJLo3NXKAe1qi9rGXJU77doRAqagtLaW8qmvx6TVk3q",
  "key11": "ACyfRqRyn6xdbitHzZudnqk9iMo31vrL1n7SXDuXXe7nHS4VZu6JicKRtFQzWuJnTWG514Ms7c5cj6qhUXTUUFN",
  "key12": "5RuWBmxQ69fxrdpFcGx1GuSn4RN3n2bURUayYK5HvAw2dj4ZsPRCDpnsx9dtHdrP74FVJdz7nK3B1vyEzLzC9Unn",
  "key13": "4L9ysFYHSwgfyqdidheSBQfkVaZK3RWxDiwPkij5vQKwTH561eiFtThFVTXDQRqGFtD9kSPorztPtwsXdingqKaV",
  "key14": "46KW6rmkX1c2RPGw82d3t9d5X6oGmgZ9RMAj5fetn57fm2fkSDKYfbyfMxyBuV1zAqN6pMVQ7Nb8PzUHn6o5etET",
  "key15": "YbT5RFhvjmQH3E2xAqDbhXJTem8eXsQ3genYJ9injzqAKVqkjGMUxJyKWzw7LpdXtsuoMZwWuZ6ETKQKmunvyXj",
  "key16": "2tYnYaoTkt8ABvmnPjjoHg9HLUDTR9ndmu5pXAtrx5hkDMVxSSS7YXzFmaTY1G9F7kB6bYyeJYt6ShqWucfirmaA",
  "key17": "i9hZrdDGWuFm6HYrVHyHdd8suudohDQBiwie1Xgin8XznBzyL9dNynxgzfpA1BEGauM5HGLxu4R3PcbyXsJEqvg",
  "key18": "2GWcwCveoSjgLTGh1BiYdyqXF9mMimKrgrQ46G2cbQUh1R9BtTatoim9K984pFdnYJtHgnmPWrYDpV1EHvrwCZhZ",
  "key19": "mGjwSsgSheVJmypqKMnAGh3tMk3UxNMfAY22vsGtodcqL3oBMDo8XKdmvQhLCjZUt2Ud4qJHxyMWQHJd6yYXMmS",
  "key20": "qg39hy8NygXMNtdF3TMCSsa7xfUZC9urcQ7B9qTDofxjxd1tTqk7iqFSB8sL8mAXQx3oiCftPQdwgPaFXhVzyHN",
  "key21": "2w55HG3fn1fjqqYSnv1XvLjTE8T2Yp2xq7b4m1ELp1hRBjwwFwSMBmVcZeLnJ6Y9Rx4mXxj3kMU6Ay13vMvm6rKF",
  "key22": "34ioxpoZBi1b9AfCF3iGvBQozpkS3SdrQZiAi9NBRhKAvXXetUeWovVbSYrNhKbkFWz2eaQtM75czXmWB6mauWma",
  "key23": "2LH7DNEDnqxDPDzdHip92pywcATzKDEnuTEScZdhzYyvUZsTKvZcm9PFHErpkTcMcQksLYCNDh7LrEC2LyZUXdHV",
  "key24": "3HggGFEikFnjzrE3ksLD7FbdiWkDnscva3WDfKbC7TE3fQQZbsNU6MDCRb5Ajrrfg97ogMpw7ZvRxzGtPncCGgE9",
  "key25": "sy86xFPN5NCjcV4dmmQ24gqDJj31cmrNmmhuXEWae3pm88HmbTA91ommevedHw7frXMGPDAKbwPQ7nfWKEyf7DL",
  "key26": "2bQYbbShDyXX5E55zGuLxsq2mercLLWaCjkhTNhsmqGfuuWrLD6vaJNFYCsRe5i6kVuHmPCBzqrF3SvY9KTmsUyH",
  "key27": "37j8wS39Ha1FFe3YLZQNXZ7X5aNNpUHqoxSxDk26eL8YUszsYLvrgsw6kfcQKTY33WgQhUUShCABnDNRbFZUfW8T"
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
