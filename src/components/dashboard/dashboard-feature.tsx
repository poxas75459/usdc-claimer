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
    "2bC9QZJJpKQ681DjxyzHmpJhRjHq58tjHtZc1YRCyXoXhDnQyHfkkftAakauA3NxWNhneRWBVJSaqgUp3nqrYJXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P9yCaAS7LF17hGBJp8WKQwhNEskSomSsEKHEihvtrydKw8uNauMyiudS2WCkFmswbw1Gaeqew5EBHNbNM5sGPJW",
  "key1": "4Taq3wCSn6Wep3Cicy7x2176YQanMYpMn8TA1XEHTPCiZanbsSeqzVqJ6TpAPgxgBSHLpuH6xUAcjxGLjDopqFyR",
  "key2": "31PTaTPv8rBxYjbZqgHDsD1bnqznHufZ5jq1GSHy2CmFSqwMC9vkxkrpVGZSbU5MkboGNHPsL7A1NxGn74oDbife",
  "key3": "2ESuokbgJcnZc987nqojeinNvSr7pB8k6Q4esUmbUDuQ2AEx3KvaaQ8UsdvBs2ESHhNb9C69owCeQKiCb1zyMuoG",
  "key4": "3wFLsEbYz5DhHor6H7rnPTckiakVjtucTAE12aFxovWT9osLbivp1LCqmTptyaxDB2CzrrRSesC3WyzYS51wgsd1",
  "key5": "54BvEVYLqU5MYiyBfcUbrcAYzyNsgS6gSjd99sq3ee8F7ird2V9Hgo7fLmk216DwadUtSJvierrV9piBBiSnUU7B",
  "key6": "3g4MdW5z4e5BGyaEoacNiUqEpzXB3W4xhHtFQQEXbjCKmaFebxd7PKopufKjEZZ5GrXQv46jkw8qxBjDvcSMRn6L",
  "key7": "5dv7uNPNEHu97r19QLEpX772Pod6UdMmqxFQm1X4UQLa5MP1xUERRUyYhHRR1tA4e1GDtHZk5oPd6PaKjDcPHBy6",
  "key8": "5t86suCBqqf2VtemuordVwkLxHNGhruY2QbAdijQUG19iXsWBZSrPiNY1QLbFgGe3RHABZh3NyAto6AP9uKNKzjK",
  "key9": "5FMd5noTWfsXDmNvMcpdyCkrAdRUctC8krHM51s3QTEf7a82JhKX8ZH82TZverRTuVwoQVGMCZZCLGSwVuDmbQXY",
  "key10": "4ApufktTq2zD1WggXdPNzDdYpfB232koiLGD8KqTW4RKAFTEjXZG279nEyBGUZZ2kCFFt4K5hvSwHVE8TjTzZWeb",
  "key11": "5TgFWD1PsXeJ7y73XAFX6hQYCuj8KZHoK9h5htHCJ9V23FpkciUfbeN4XEC5RZoroekbqiZ5dynZMb9Xc8Y1hkm2",
  "key12": "c469aWJa3kUzCSjuBbCnoCSsYgUAMQKfC675CaY6b4q9Ru4hR4dB9zgcD7wdvT6fvRJzWVoWHDLP27WrGhJb9PB",
  "key13": "33ZEakRVjx9YPasr1DPj57Yf8Nti6xmDpZ1j83FwZMV9cLc6zTTM3xFy8bd92Lt1ouMCikSsoWiddA6thMY3DoFU",
  "key14": "zXFpbbsYuNqwKJ1Y5oKF25KBFxnJUak3ZC5R2ggvRFEhZhprVsYDwAsfy7GjxPbwEHtKDWNb4KkJsNBXU5rFPzD",
  "key15": "5PfuMQTqNWv2tFxpiMSHBCXYpPBStDcvzdjTuGuvBQJBZ6vKfC1PGuTqvQadmYJLRsi5TrT7cTAroGbkdcgsVi4d",
  "key16": "Ms2iWytSVgDssVLK5C7YA1bxb6YmCRTj1oeo7Ag75H7eZtK9ZpzrXddVFpfe3gkrreYhHw1hDZJEquVmjhz9DGD",
  "key17": "hydDeSCprzzoKTqqv4foE3YHkLxH68ecayFETuvZpvHr5Ks3k9AbMKZk3DqKL7wkiLQFEnmq9uwJcu6JqVT5juk",
  "key18": "4NbabRQNVF7zH4uPZ6aJ788PF3waa9bUrqN7G43GY9Gor1CCYJrjzbmrYxNZBa3NrAHmnquQaeuey5wopysyD3NH",
  "key19": "5UgRedQ9LjMPMsNT7rgSqasbPb3SVBH9ninPwH8y1bfR7LrU7EENnnqYNwDof16zvKBRs744nwHhogkBUTWkMSxL",
  "key20": "o2TjYxkjL78yKC6ByrJMXMXyZ77KRzk5so5vXCwKjEhj53kNJqu7N6KsUmo5sUiDbos54zDQU1zuoTNuRYaUqN9",
  "key21": "3BBjDPGMzifuRoUpPNcQkCNWv3NWfiWmg2JHg7RnEQv8SdAGDqVpdCYVQ2wWPzWgfWdJ5pQMr1KwbGpx3dapSnmf",
  "key22": "5eDnHUeXcYyGSaxYJm3kWHST6ggZgFgiarSX5V6d5YnK3mMudgEEGC1LUzsyyhPYHZCHTpMaaUqCWpcC5KPuL1bd",
  "key23": "pKrVsMWarhAdgNMadhKzt17W11HFpwggKVtMeNFtQ3VuHpMkQ2AfyDs27VfdjkUDa1qKAPzWa1G95owEUhXCVRE",
  "key24": "46Xri8gevTTrU3dUe6JmcVpe1e1xXR6n1Lg561xsuQ19UZAjph15PoUNhnW51Cnzh37hNYUxoQV2Zp2jHw8edjSZ",
  "key25": "48eo1oHU32Y6SKLfuwVLkL6nVtFWNvitwbpy68L5vJgr48AoQTZEEjX6mgnWc1NhJ78WWE8zXfzhesoB7yzyo1kk",
  "key26": "3AwQAXJxW3itF2vH4gVEZQvuhYpCJo3f1M8HwEsnCA4EMtNBMWPe2k7PNcCncpDdPdaBZqSeYXiEUZYVFskeGYMK",
  "key27": "4NZ6TrhMhnGYg3JYxL5GVYAqsfEbeWexTabBQT8G9rje7FGWzQzg8GANTUSdWRHSx4WRKfa51z6Yb3PUAqfRGvCh",
  "key28": "381va4Lcg1UAKVXFvMGBDUoir8xBCw1o51ojw23rhA5tfM8LR8xVgY1PPRE8kKzFqz1vW9P9YAXrKAH3f6uT4cBg",
  "key29": "2px7EYQ7yEds6iM4KhekygJmKeijU8DC9tHmDyaamJVhW6g3yKomVsTe1ssMwS1tfjms2mJqZh66hFWh8Jos3B56",
  "key30": "4Sn1GH1TF3p3NXVYs6TkbMXQCYTFv6DRHViswadhL1YqjmzxmKpECzhAQ6uRZUpviCyfaoi4KSKHt45rVjkSDrGs",
  "key31": "g7QBcmPkHTqNY4Jd9Nix1WvetEpQLMZCN6SVACUbNaByPcNcV69d4m6jtu8SxpQifi5zE6yDAm79aFovNiXLq8o"
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
