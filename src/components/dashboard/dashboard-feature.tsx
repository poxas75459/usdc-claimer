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
    "8jmnPTN2eKKWT2kveFGM8B6nkaQuZXr7fJ7rxWnLnVRTENU6XhmwADxKGe9Kftz9a8mfig5N7tLrnFcW8M64oBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oquHRzQcfN48eg5R7cHMMczacEJbpUvT1rN6svk9w2tQNyQ73yDtsYzP9YLkHHf8gisDzkQZPWQnGTZmvcEY6ec",
  "key1": "5pbMQCMziV2f46fFMbKSLSYYo6Ct9U61nKpmDHqXmEYLiqF99dr4ZmfEuXZF3kyEyTWAAGehWfd2HqqkGYJV2hM7",
  "key2": "3Yow5Z31SjarH82zuhRKyZ12x2zDBaTSrtC4s4WiVCztWPdFiNSxbmuTaA2Gaj7wz8iXWdRGkDHQk6MF2KVvvseo",
  "key3": "3V19xTAaMbYRuaVtKpHsFHaSFkpWtYHTV1zydawHNrcyQx1XiYZovcd6VvBw5Rg5puuhu6am6Vqr3o2hdLoFF6Kh",
  "key4": "4N5oA4Q4ktJQX1HFMTVKfVxJGMnfg5a8nQBvDBLVqzhtadHJwouz6bs1fBm8tTzCCHYmcEku9fPWthJ8obuwk6fe",
  "key5": "65ML5U35KWc2peMzSgSXu9YN3Mhq5Rh9hqY7mbZngAd51qit2V1Y23XqKmYit1iMxPfnJ5ggME5UZpS7ooJrKeag",
  "key6": "437hEtsWbSP5NZKHpLZ5Q3z1vVfLZ9a6ScMTDF8XuRyhGCGA6tCte62ZNjGBvME6M3ANE88CGqdwtpWJJEdRyAcV",
  "key7": "4z1mEN6TRgBWRye5rvwDDA1eL4Yg6qqmz9MrB87PEWmY65ZaZZb38F9HvYQorXtipeT3Xj6giXtg5v9iVs55XyZ1",
  "key8": "4mDK9PjBYejYpDr9s3intzG6JyK6V7H41xNvnTjMo7LuZCyoJ9imwA32DKnCooSM7PvMVycvZr6sgSiguKEqF65P",
  "key9": "659M9LrATun7EJN2A6WCXQkudK2x14JwfYigBSQXTcZBd1fUvAGpvwTPnw194qDmFRyihD9C5VEmtqr1mAnMNoWY",
  "key10": "5anSdbgMzUKrjzEqdZDhtuwxKocdjb9rBBe6dRxP8gsvBUyBikUR87ZD3Dr4w7YrhutGRHYFTXbpaJWowzGgpcs9",
  "key11": "2SgzFKDXDjvS4PBazSp3W1Wh53ibSum2W7aSZRdgc5UJcQRdqvZpcgNhKG6KdY8ty97RnHVZ4zg7CKUYEHDoFbSp",
  "key12": "5ZwS96cz7iYeWUMi8yQL12KrXfMR6egtcP71gzhCrQubmK6JwDkCR7oZ4Nf8SjKRkaB4YGrxNasW8LThBfWG8Fub",
  "key13": "2g4MonzJAuCfygpCvLhJ8uW5nYJzr1xsNwMVn1TvWnuniuzg2kfbdFcZDqipuE2fDZv8mAAUebz7ByskB8aVbGiz",
  "key14": "q7LJpC9zB3R6tN4LWe2Y26BAHHF5Jcjef4EjGPuhQ5fPL2WRuT2p8MeKKqAUnHBfF17mS7vumjG27271UMK76LC",
  "key15": "3yj7xbZUUqjpgadeG6FXm6bfu4pK74PPHaoKAs8Yg8UxvUwu44Zom2XKkKEpY1NkDmjB9HsxQwLoMinyyJ2AyJ7N",
  "key16": "3yFLhgmzoPWVDqeZV6jMq64kcQWUQPMcAt6rbp4npUa6NdXWg8vQJrHuR7cpWvtjmKvk1HSVEh2o3QxT7ZtWdSCq",
  "key17": "4WP9V8tWG4tKphaKyWrKFMZbLeBnU1dGqKgYDxfGB8yf3b3Zk4RsR1vVNdnCAt3PwL1DKcWNSwsdZzrkz17PD3U5",
  "key18": "5m7LVtDGuXrhpPnEoL3cpf3xmTXVhreiXceMZC1DAtK4hRSqdWpF7PtMBqhVPEoKojPJ4ZRVTh2T9QBWR1KdKKwW",
  "key19": "4jvY56jqgwzwq2n7rm8jEY2AvhBqiHAj8M9Hjwj8pRnLjP8f9HPbbuiVefkyQHLDfTAS3neX2tgtDYDvzERbvXti",
  "key20": "2unRxH6R71GRD4JgB5d2c853LBwiHtvgj8TSorH1J7UR53RiF2Kn7E81VhtbsMD76PyrBbTv8mud6GP2od6sjZT2",
  "key21": "5PcXYZKJxAnY7wLJh4BVrKELsidD5vRAvkvRHEmuhmzqr5z64ATL993ZJWRe4fqXKAP1WiANNmnyuCTVCKHo91ih",
  "key22": "4s3srSkVMBxuCY8JjAnwSMjLmZmXNAqvnr3cggnsQwLB9hPULFLrqzSqkwKso2xoqu9P3D7UVR6XfHE3BZ9PBisk",
  "key23": "2WSq23jo9mWDTP5wfoGDsqiGuJMT2gkKRKXCRPSpcaDVgHAtKdi7gGf1M8CDG4fVqueubzRQCXVXaqqvhwdT7pv",
  "key24": "5YYGZtrqCfUYDNUdQVh9sFtsDpCmUkXaraFtffWuZFdHw8pXhPwUDoKFY4mQRE4AUu72H7WhRgZttQtqTWoxfgJb",
  "key25": "3GkRNx44jGtTJzE6YQg1yn8rtLqtq9PqdSjij1Ej4CPtU2hb19By2fCCmQ1rshrcErNzyR1tFnx7zAWEF53XzsaE",
  "key26": "5FXatPaRiT11m8WMZPVbmydJ2hMgLWMne6qEJgqadDh4TzmQCiKxkoyF38wQruAe4AJYRgfPjdpCJjQXbGRRwDzj",
  "key27": "3koBSeb2CBLfSxMTdM2GtxGnB7H3qBWZTV8MtNHr4ztoCRgyK92ggpLi1MqEKbJ76D6hS4ui4SrBxDBHLWLBGQj2",
  "key28": "5WjNJVsX1kQjdqkwuJULYXaXRaQCDaydALhB6jukFm3tDHRaUeLc9A4MmcCBxVKctP8GkradX6YbGtKuqubRA4WF",
  "key29": "2oCjnFbtc4DLeV6oyzStmzkqAogkEVZxcMtG5c9xWVnfdGHFApXp9vGcf9TTb4WD3rpHBivhW8JiQkB7nfZEJomC"
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
