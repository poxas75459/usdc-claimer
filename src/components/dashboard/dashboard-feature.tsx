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
    "VjXKajtZRvik5EAATgxW8wgxdkLFdd7wMLHRTWuM35EQguM5pezacfRCiYuiim4KyWkfaVtroa7nq1LRcvqajR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tgDV9D55Gyry15fU1dG6Hyz35YAUqifboe3sGpKrX5XsYjjd9SxMLtuMP8UW5mjefEcqaDVhc5K4VbGrcTe2gKw",
  "key1": "5xm8moMVNPvn9qJunHTw5BLpMv8UaDbhAHfpLuvGi3whCEf6sZ9gHYuBoCFKH9RX5qq3nDyqyszczapZpgqtkVKC",
  "key2": "2HhpgbgyamDfsEUkoCVuXohRxNKLJuy9w8JTssyuoNfZEyn6VVuQnGX8ozD3ecXQ6T5KUWj8mQcMwQQSGArJPgaR",
  "key3": "4KY3FRmc6dEAmRwLV4dCKzeF4QekWccrXe1pzhWWCkMKdeP6xL4cTZ1iAPihzZrtGenwQ6Mupn3dGdEwaBwy8U6n",
  "key4": "21bcNgJbo5PaRudwHWqWdgSSmtDjCQuV4etwmuXsbKfp85undNxV86cwpC6gdX7BMBD6vCJGuxRVaRzEX552MnBd",
  "key5": "3sUEJX5fCbR2MERzdTwKvK3PC8FqsEpdgdxokwaXrB4YXdDFQ94Qbqa5ve7XAuaPddgq4iekEvuD1ZNaH6pTSTeD",
  "key6": "2voHYdbuThhAxMGsgAjEvur3qAUNs71pp6Wj2Wki4hw9bsD7WxVUvmAH8p7R9qWMRtLXS6toy5tgDsKTDVtD1whm",
  "key7": "k2KMZDVTyhvUaNE6bho6apXEoWtCEPnznMwv5XBqZEVoTjoLoH9wJyLA6aYnHKenaq2v994F3ZtPF8Qy8wZmGUv",
  "key8": "yesmaq3BcJuiacVKpYGsrB6KqhKYbtwcrFGHcsjBKD9Kp6hY9efMn95D4niStJbkUmXpnjL9ZGYui5oxQ2rjtQt",
  "key9": "4zNtLYP1Zq3SPXf5ufRj23SXAndtd39LJibEot2VsgzSGoCGJFzFM26X6CLdVFY1CXpTu4iATn5bGMiDrthVBzJs",
  "key10": "2T9CuuGYYvkaHt3wZtTmLoPrr2fvgqVDSPHZteCXfVHrBLQgNYAJpwyJzS5C7gBCJ7sxN2ckn5nKuLeC9q44pvG",
  "key11": "4rLpSXEw5fZLfbz7XbZxdtGn9JSQedbVNjAUUkPAY9CxAJaX2i4uGYupzSEMFsRvibf6QmuhT3tGxftjXCFoMiyg",
  "key12": "3ShtNAcxcYWM1chWaa37cdrHXpRc3VEpyLsE2MEgJeV8SWgPRFh3HriQKzQixUGhdycqzfE5iDPmesPdUKP4KhKJ",
  "key13": "4aY19uPjUzPdTRP5MSAQWLBBVG1SoU9Mvuab9b1ens92P27tiSb5QM34DaFTcQNTw7WqHFLBHh229iBERV6RL5ZK",
  "key14": "pR6Pd1BRZX2rmazgY2CZsex6DRjsUtrb7ypyL5M7VULyofML6pgjsgXRaCLWkbDNJKgkFxdCx8JqKq3HjmbnXBQ",
  "key15": "2H9RFzwGd56tYba7us53UBNcFhYML57t3sifvGKSbdW5Luhreiy6gjHJ2axnTUCpJFsYLaWzTaU9T4DHESuY41KC",
  "key16": "BHRJDP8T6WD67tSvqcuXJuiB7RnobudjmxNmgAA5LnvBJ1QGF1nrFdXuPeRg27svaGEwojSwQdrB5LkhKh7DZUu",
  "key17": "25HnEkiN1kWiJNp3GzkijagZSnbeySUNRXbz8gM3hFYHDTru2j7eVTqHajHDW4kom1LS51Rt6eHkGPeeFwJ7a2QK",
  "key18": "2N67i6mtPJVLZJbDJrE9dQsuAPkxg6RMQRgvQTpA5oxe6YEAdjRVFksTdfEGLZAY38qrGEzhdJvri8Wx6757i8Kq",
  "key19": "2tg6xMuRDp7ucAUAeFuRb5iHjCe7bGmYLmDTtFaMz6ufrxjXVEmQcA3Cpb3rFpidCtSkHqpjCDbNiSfKq6yuqiaZ",
  "key20": "3xXBbni8fesxAC4yBqbuPexj1CrMcTjXVMCizuD5Gup76Cyb7ArLxG8vmwZSv4WZVA3uKas5sh7BeVU3pEwudQDN",
  "key21": "rzhYgtXoircH9AuvjG8RskJEZLUCmuN6ZjAk6ToBuC4SuWUYPmu6ZDW5G6KgfcpxGgd4neERiRL6w9cktWNBahs",
  "key22": "4ofDypsFxSWWAZ85EZLTqzr2AV6dCKLvofByhxjWrCirSwcfmT5f36BWaRSeLacU7d9CsYmGynGC9WNZmoCAfLpx",
  "key23": "55iczycSw5LCujwH9AxA9g5arzU483etDP23iBCg8rc5xdVZi9EZxN7Et9a9bq3RvAdABBYmyLgscRzcGTSF7fn",
  "key24": "49GUovXSG85NynPEvPT3eivBiA1m8oVS96NcS2A8Z3d6Hek9G2vsjfhVqLAKfbyH2VPFLjPStnPDqW2jC68rGPzE",
  "key25": "5VXn6Nfgrc4Hijsa1x3owdVN79qKztQnLMhZz6kDoi5ddx1pQW9dCpjzUdeetdRySmd6gP6h2gNTBoJ3ahpeMtUG",
  "key26": "NHxcFc4LKG2nX5RnfhpavXdfSuLiHNqrpwkX2nuCPKGcDzC7osPozSHHzMEXvy8wR4SPrycoNoVoRw7h7KFEavE",
  "key27": "2qrFt2S6WU3Xiac262iQB2wwcVAkcbSFFPvwMyc2LeU68RtxDvHiCBExfXVuRuC9AtTwLQxmL51N6EBZuQwEB1iH",
  "key28": "3MrSNMuHmePLkXT7iTwvRiGE1PNnzxSHbjeewof3ny4jHUgdgQzhxx2PZHBBQixrZ7E3uynptWgghnjbMzM1JK62",
  "key29": "2HRoHtmsWvW7cJVuSRPXDn2apRApqXe9DkpitY74TZE3sEtuRrncDXxoxgNNaTs6RiCDzTpYsmT2hXFiBmku7jut",
  "key30": "5xE7NjPmzT3sNPbDMEcz4PuQngvFYhga1WGTc1RdkSzcEwrnTZzanPA7skT6cbAmD94N7MQmJcqNaL82Ue8k9dLN",
  "key31": "27QoeidzNgjRfZBTT6iCDeLECtitiZuuXC1wGsUKxQS9gwKa5SsL4LsKcBoavXkmgZruQErBiUBES1mhm6j1cQes",
  "key32": "4BLjjL3VSi7hU6PkDPrB7dMnN7LUXbEor6grd5FM8MZPBjDqGLNR6XRf8NNNpCDRMj6EizBgSF5deWvH2wEtpp5M",
  "key33": "5NpM566mmVX57uQgUHfpsvTFvqFkexWWNfJxPqXDrisJgLqgv4fnGbLorMJqjCdME9afqr9NPP6FaNipqDrjE2bo"
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
