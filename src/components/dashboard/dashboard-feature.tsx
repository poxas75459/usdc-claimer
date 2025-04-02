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
    "kUSX1ueiEVXiiKvNuwrDNXqCZqWJ9eKJnTT1QVgozSYrzykzciCkwQjXhsLyJNtSCYhtE8fattZmwNnjZNqSQzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rKYKD4GdhGuhr9M6w8AyX3ZTcdGt15PquPvrG2fJXUQSwuNTVPc21vcFq7scCNK1gDcazLFCf1Si4k5FsRafwrt",
  "key1": "4LjZUJKn3yjCUgVAuGgAMXhjuCU4zVERLEsaMQE2h2M4Xw2HmT9YYKKCdRGRR3QZ7J5ashn9FfY3EaqfGFzjWUGx",
  "key2": "4SGNpowBXnhfeHbh5dvUk2nTA6RE43omik6sRpSK1niTvVQkfa44XTwoP2sBzN8xefztX7jXJL1YqKNSF3Jf4dtW",
  "key3": "mhacLLLcUWTuXbev95huwMBnfPRZYtpy84hcduzkV47XMJjWqXyukPpj34Uyg8d1weWbwaAxK11GCxe97SdLubR",
  "key4": "vyYgG5AWqDsjRtK38Ais9Xr6zM6369gUuuSiCW9yod1SAZ1X7vNYDQfNUFj3A69QsrRx2N3ABNF13uHrFGBvWTS",
  "key5": "2B8mDtcgjtUEwJjDn37qKhd2w2goFYMB8mMM6CGJs75uotAYKX8QZPUxWbKJp7UZmhu6AgxEVQA2Lfqn3rxBWHhk",
  "key6": "2yXioQryK8pqy3j13D5jeTW5M8BfFP4U8hdJubPyLGWHsCf5K3Mw8UBsrwHkG6MFpdv3hcVLeHL26B1JTz7sa8gR",
  "key7": "gKoLZQNPPQYsqqWn2fz5ToJTp6TNH6HgW3WcntK6Yfd7b3A1KV8aZRGXr8WFPGFruhQvQMbsLnyCLpQtRy84TKj",
  "key8": "2RTLcMCVcWZ9XR83R6c1MfhjEFHLHnpaVSbNk6vy1pNaRcHa3DcNZWf2r1i1jLfzS3v5HUXs2epV4TErW4od5dKQ",
  "key9": "2dKCdKmMTWdQfwmvn2AQvGenTfKD7ywbn1AtsViW3T5TKbUoSd34MEcxkNKiiA27BubJNW2SokK9D1neo7fyTQ76",
  "key10": "32e5SwcPrCNqmvhM4YEPadhW61QnewieVi2W3ym8jAvVNnmkMMoEQ7JEQfs3E9WhMAgSkHTqEz5g3NYDP9mef3X",
  "key11": "38azvv5XVEmSy9YTQKGNFjtZUwizWfvnAo3W1Z4ULPHaZFmWJRn94VNWvvH945YfVwohuR9iUGg42XRmbtQfnYD8",
  "key12": "wzJP7kTw3xQGkFfvc9cNzpN4He8N2byA6wEeTT2rx875kJtV3D4z16jED94mPn3kS9UMLP13ZGpGF92vxuNk5Ax",
  "key13": "2rBwnvixeDNEQCx8MEdwEfiJU5qSA3uhDqCaGXbWAGRR7RRn98cJgqXjU1fw51MSnYxW8VqGAtNC4p7LWEJB4JHa",
  "key14": "5Nad4kwfCT1NfjvHMZAoMA5mtsQiGnjkDErmVea15NEL2Z3RGS2mnHxrtt9damhrHkYVb6xx842JW7UTtNsP8M5",
  "key15": "5GbE3NRxBF3GXx1GZQPoFidixgWqfjtNammGcY8qxnh2Z7FSKEaAohy32rWUBRA2f5NH9iJNHBW9M7fDb6NN3Xcv",
  "key16": "5RUKtp3m5cDR72JVV23HtBcFKbybdWULAvMT8LH7oTNKKKkELjJM9gQwef7h8bGcSkGuhnzLr6mUqwceZFWV6quY",
  "key17": "4mmuc3Be7GnPUz2BAQ2yhUJ3UY7BK72tczuzemY3uz5Xd8Kcmy7jVJ7szqWowWkAhGY5Cz6MAu33Dp9AqfULqAG3",
  "key18": "KCMKEPoSacmkNb1VHqYTBuTbPvskubLdGRAJSQ3EV2zWKKNJ8pHe99pBxSVxuz3qSjJ8zwdYHYqjj17qppvAio5",
  "key19": "5GJtCeteiUqGLK5x46YeGmrULrQGCwiis8mH5dcZiCjvN6TBGQrMWQBG79GBfHxVLJMSoPeYuKbhGRFkXzy4ErsA",
  "key20": "5ad9Fb8DTU7B577S96yAFbD9AhzYfgR89gkTZWbmXkVSPAJjBjNySAHB2oSKKewnBx9hPCzAysdDEbqmVmf5LQgV",
  "key21": "T4rgZ66cHtUKsX4AxbMs8ewTsXtJXz2mCqxQ9tUqYL8sc5snYHAcQvAXnqMXG7cJyuZsSVwpcp7mjgZNUSR1YSu",
  "key22": "GKyESvQDK947iyq27xuRtiWvfMAAD2ye9Uy4X9JhbMajBg3NLrByeaAYACTS6zjfPo1N1UAwFDfum6Zp4szCQPk",
  "key23": "3QEFQfaMuo5BKQVG2H8bdwxfFCm46xzegqpDrDk6YD6jnn31kEQoSmjfsMaQ1tdEZdDiCLUaA7akLAGLH4jT4whd",
  "key24": "44LVeySPy1Ce7jrkPUHf3DnzYxbknLzWDcVvKQx17t5rAMUJLyC56A3m13BjerRCf4LpHkdVDGQm2DJxKZb9pdXk",
  "key25": "4bzLKmD9EGt4Y7GsdFdNEBV4nb4gRGgcJD9UHSqt4T9ehUhgFK43Ebxi3wvnJNnSwB3x3gjXGZ1kkpfLwvGmqPNX",
  "key26": "wMPZ1r2SVP5k8XcF2GU8ezuVyJup2Y1o26hXDUmXNQebHWXsjvKc7ChmWTModNtoMEQxYh88dCweoUq5AyxmUfs",
  "key27": "3Sv92MerrH1gSkHT6A7jRuZEBpFXhEGCVXiMoJF7g9d77rQBXq7oPMXoku6dMHL2wqcCL4g7FQTbY2EdNj1T3KUz",
  "key28": "2pGiH1bq9sYsZuB5xwSCFmEHZiqrCmBrNZGDP31hkC1r22Q2ZQTKywVRFUBnoe2TEFt7fFRgfQevDC8CgMPJAKZ2",
  "key29": "5L4ZNyRotKSbb1M8zPMs6bp8FSfXxJgN4aJ1z2vpowsgaeyAi4zmyf685n17RFny6Hd1MCUoBXJ6oUF4TQ5J5mPV",
  "key30": "4PvYf9PDXZ7EXGE45hhTJALvxzDGrSCrCTSsBLTm4wi8rJMBMo4xTuSCozP94FbLLUjKFRJ4CAtQF6cUBpbEB3WM",
  "key31": "38zShqSLHGGk4CTnC8gQactP9bCcs3FsFgSyThoxeTHjWLLVM8wjaGpKpnzvFritK7LSza2hjkNCsXQxtKntSZzi",
  "key32": "3ACzZwrCinBMQ3WJFHyjWZ9Mq6FPqKGsPoLqZb7XattB8AaMPgGAepfZpUSWSkpvBUVvz9E1ZEWSTBgegydrXdhK",
  "key33": "46CszfhYpxzHUdoyVzhD5Pdv2yW7sfgcf5qFYsKJLe49voKXrfpEBEJnxUAEEDoncHLVArT2e9dFz17SD8A8cV2w",
  "key34": "3RLinWY6px4WNKmEBYUkrMreep4hrBxtRKqx8nRewLMM4G5i4QQ5WPXbsb8FJeY6moDN7P2ZkcrdyckbeS5E74e2",
  "key35": "3jkDic39c6gS7qF3yTdBWDuvmpj6bd3cJhjP4fwpa6Qtk8dL7CYBr5b6BB6qnNLc95YbCB4dfRQWRNCihPY1dVf",
  "key36": "34wpvJVUmMtL3ZThdL7Ajk1ZGL7ABf1auS29T48JnqckbgeZfxkc7roeGuQwXJFZeb3hxK8G7oSwyeFcB3bXRsvj"
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
