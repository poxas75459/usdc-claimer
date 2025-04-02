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
    "317ie3Jxpeymv89gDfjgsvWb4C7UG9tqsDzcQwNWJy1uJQhnmcwW9dERWJVz49DmEsg5TqA2sNXjB1SC5DYxKmni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i9prDGQsb4SiBrikHDYKpLmMTkcE6n6mN2fULExtoSmVYVR2q2STNbL8vVvCRmZydzcQXUbvZQ52J28Yyov7bVT",
  "key1": "3x1DswyrQUvtzdTLBXPPcDPSDuPr4X2Euzt91JarpqqQnEgg6Kk2GMyrA8GWt7zFPUuQ8W9sW8ZP1Mdhia3TucPn",
  "key2": "4aGsb9Xi1ZrztkHxJXrQTLwk9vxHqBP6b2BTMACCyzqCeq1MwjohLCsKcs9LPE6U2pLRHhVFVHvbC5BU5Ta9zKUR",
  "key3": "r4wJj6K1RTYoDmbSzJWpPwqtkGTTCSUPDBWJxJqi9U2AWGjXpUYjxSbevKrtyKEq4Mq9r7rXrhzcA6gJ6KL2C9a",
  "key4": "5RxkTkCy2YPymgLYc24hcFisF8G329V1DuYpHbs8qXqBWPfS9Zq4n2qnZGLSm4eApYzxXgD13JXmmFgBsd4vVfVv",
  "key5": "2c9Qn3rSLRowCiY9TPToqz8bo52z2CFP9BJYrv6vhiFNj3hDDM1H9ru7gRTAykJEXWxTKcJaHXHZepczc2BNGVFJ",
  "key6": "5eL2MZHvzqzZJb8FHnNS9vhUPMDuKmBdr1EumPrXP4qVecxSEYtBhW3uWE2mAsDGV6HzXCRQ32KPVZpaah5tRBw1",
  "key7": "3njhhBPPyxvXRA29J5S9Ly7jUNEMMpchKwGcFUvNHmdP1j77wGdutWiuX69BLqqZrtKJyxTFMb3xMPECeesMMAYv",
  "key8": "4jTf1vvm3jQByyDaYngJPdD8bK4bDShdxKed3EynLAGt6f675yJbzrybHyvyEhp6knFxsFwucumj9tTnuhS6HG2Z",
  "key9": "KGsLeXe4xS1Kk3rV7htUaMW9XXWDQ3eAX9tMASvRhCQrm8jtVyG6jhZV31H3GFqNPcVBJfqhc7HRNhNVke2rSSa",
  "key10": "vqN5QVCVKWnxpdXDF5JYBf6vH9tJmeZuHXo7VNmK9iPfMwbV54DnFTpX6m7mgv77XPKhWRikAnhxxvkxPoVASgd",
  "key11": "jcr83jZcT4HUPrVZm9PpE56hKgR77kwqoPSdJm5FZfGLRwr1QyVVfmfnosxFEd7cN7B5PoBsjtiPsEiXNRVxGo7",
  "key12": "5Tqc3jSHzqqKWpyNgdoXPEr1ZJXBSuHHi7hRgsTDP2c3KAeKsX5JBDjEsczcrvpuo4HQHyBR3uqWtKUCBTLgP6w9",
  "key13": "3gHZeNPEzpcmRAKrWMymbv5Av694oBZvhARU5N2AcQaT1VwZqiPHCHVdg2qo7xC7y7WfHC5voc4Y6EVJnCjuY368",
  "key14": "2PEKN5q3enzTdDWRKrGbe1u5mVQ325XCQPPKTBSsukGduKztzWFhK3JfB3N92KNejKD3VCdSki2mkVS1XhqtqcJn",
  "key15": "hWxFxJhjDrJjN9Criaafdenbi2R7GGSBEGdiZC2trXMXHFQY5MSCawRxxnvjGjrDJzsf6sFKpX6WojjSTD7fUsK",
  "key16": "qd7JMmre5eP8DUk5xo6dzZVFHLEYBfzmHLzVuAwQdMHcwYC1teALA2jt4pRZX6FDQ1rNJBVyn8VJyH7RVBHd91A",
  "key17": "4ZtWNrfJhpCP4mQTFtcTD5KZgtjt54F5cNusm4gLCTu9Poa23cz5LV3LaDv6r1w3pPUpaySYYS7fzTcWeWgfQsr1",
  "key18": "5kfwJrtPDMpy6FXvsRFaez5iJwzEYrbpo5hZGeU3bnqXvY3EWwFDop3UMDTqYGhfb6jbDCXooScWyxzdb7Jh3jko",
  "key19": "KhZwNkTRQN5THKiJS2ATDfQpZHQ7gzokHf5fnSa2B4FWbPQKHHqJPFVriH2KHhkXa9h7ZtqEUeyDXxanJPyTeyJ",
  "key20": "D7z6dSDyUKZDNiiJLbJfp8EyHSzxxv2LAfJCxM7UGCiGw2S4JLZDHnieUKcV5k7pmLD6L8ZyT2ByHbkafwErA6K",
  "key21": "3PWSQbv3nstaUDRCBQz7v3Tv1y7c3qtL67pQZwfveK614WX1FLfBBvPV63jrRKzetBatqkjxFKX4AfUTotuCWJzg",
  "key22": "5HcHvJ2PzDNwcvHVBeGDb9tGJgN4U4vePggnnxp3JNK9FJ4Kim8tA7ny3Kb5VJjss2g2igTdvgo3wCvzMCFVm8M2",
  "key23": "2sFxdB5NymGPFsaw8Zq9Scpiq7cvatpVT594uMpArrFCQUJfhCkDoLm9cqUGWR4ZkcV7e7ge9ufuEaLBUV5BiVFT",
  "key24": "5ragRTNQ9qC7ujjkHoeiDqfSZCY25Yu7asBRCV3Dhp8XekB9rdbtsp88gxiDSh2Kp3jTVK1h2bxrEviMTrDCPfsv",
  "key25": "31UTMrupK79NJ1h6xhmKriWEgA4hTFUHCAgMKx99nF9ugEWmToxvbZBL4WvRDGXSsydwTMTxfhe1FdaTpyC54UyH",
  "key26": "4Tr2mpyEn9tjGUUUBchNmoeccUNZzgvkQMcAxskFKqbZxdczbE94oqht7HBtS9WWeK3CFN1WpFhdPLAsKdGcoT8r",
  "key27": "5nXjpnTdPKYfSqeEXcAAusGHTkjjzDKz9uAxkgJXMop99qo9ER8y3DmfCxsxsuBgapz77FFVeYirMiZmJk2tYxuq",
  "key28": "5CrC9xMNgUaPuTU7GAXVBCTwFq12Xw7yEnaMExsurFzytXoVnBfd2NYH1QrZ2UQeB4HaKBtXGCkE4EujhoDRr8Q1",
  "key29": "2Lht1GuBYEzpEKMzfpJEVfVusYH7n2m3j6uefKBaXmJJ1XAawqZ2Pcm6F8ZQKjm5vZhLkD1DAjiDmRKLoxjYqNYn",
  "key30": "39HmmYsuMzXf2eQv3oQfWjxp2UhhyQ84jJsq8YwmoeecfJSPuSNHawcSQcvcZankZW8yMJw9fwWBjo79WgWEHGBN",
  "key31": "4kync4bBxrCGUTeCB8WtXSBmearUekLfys2HFr1Wg7sF1wV1qQHT3kQDwKVGNhPUo7d8TZWLeExQSHyEioe1QP7L",
  "key32": "2hHha2FM3VPoyfXmPn6JqndLdiBnm16ntGrR6qCe6Lk6zQ4DNSU5zmcB8pBjpAVSGMsS2rF7tvKZSS9bW7QNWLHP",
  "key33": "2tw4Z6a7XK5Cbc1o57QpujjeutAM1CLdUfqUL8SRYUPmYrYMVdzCb9DMPMoAqSUVtyqEm8UKGubDPyZ29PyJMTZN",
  "key34": "3bz8Kfq958bMUp48yNhv56eJcJFzQtf1ENzur3tYhPzPprb8Z69iWA3hRDoD7cHkYxpokt3Z3qhUebPe4n2Ff7jZ",
  "key35": "5eJLxtVogbEGSkBwGbPU6W7BtJg6dk9H6NDuBjB4r21AktvuYo9T2RaEj5Qg812CCeSDFmyortLWV86ecNH2tC9i",
  "key36": "5ULJ8fEcpCivRPkr851Hy3AZwCcoxvxgePsmPs6Wk8UCfpTVeUytUyQACvCorsLWyPZfx31LjxnAt4ovBP5th9CN",
  "key37": "27ZFjqh4WmJkKGvdSDRWqmXfnJ385puuG8vfNzTjH8kECup8AirreMxGUg1KyZph9H5YRAV4WDVduYy5iZPp5Mng",
  "key38": "3DyVPsy7QYG1QjG6qXaEiXJZFZowi9yi2Y9a1aPhrF6S9zwELgxNDQHBbCLvopHT8BNWyxKNWTx9xdyxcvywwDR1",
  "key39": "4PahdE6kET9fXjfkfESJg85WLZFWjWXsoHxdYXoce1CVaLtzTZmiwdJrqw4QgorntSD1UyXCvNKQmGpiaNEztUwZ",
  "key40": "3XxVpeayKhpnRemctt5778faiFBcmzJpCuNFNULbBWHKX1PF9vrtmvSFrYpenKjqB9E5qn11ppYjBxr6L7Pt3v1C",
  "key41": "59n4JbuyKN523WH3X5MhuVi4BD829Z6zYQq8GMErT7nRX2BuoGs4xqUu9ULTz8p558wvvQkC3Wx8RZZBTJUQGy3s"
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
