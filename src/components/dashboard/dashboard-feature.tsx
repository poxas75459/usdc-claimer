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
    "2jKFts3pVpfA8Qy8eQaE4zRU1ukma7n1sPpBWZjLxfxmk46ctMmoL5Wqc9BXeGMw8zdW3uACzNs7upof5XQ2DPD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o9NPYcvCSRZGhwpfG9PdxSpJbyAn5kEznkK5nBeGXdA4uj6K62JmcSkpasC1rvjBK7HBQJ558sv6kzaDmous7fX",
  "key1": "3Uba9XRFPh9YXLWABr5NC2mu6sQMa48qakas5sAx1Ho8wEb7vKKdrtMpvTsFuWfNciR5VQNcHkkKeoXTWQwYwgEL",
  "key2": "csW3bKzQ7wA1AjGPh4ryXUa2UFYRRkyW3XYa9mXe1Viw6GzpEpkbXUTdm2VdabY4ovW2ktdMBN16ZEMytkfZfF1",
  "key3": "5MKZjtGDinE1yYTKi3j1Cgkfm334NCT4ZASRWSf1jPvkvEVT8n2XZ44snUwk9sm44NRmxk9xAJY5o9ifpyixjgm9",
  "key4": "5XSQWvLqcs1TsEYjmUmZjfNNtRLGDNv2txtnjrw8dKDd8FsETfarXUCdVNKAEDx8AsMWyPYomusE5qxAsrDmkVjY",
  "key5": "3Lejh5TXZyEknMFXFktRERb1QVM6o46xr9V7P2yy5zS6Tm2xFWGisE8fZBbbWDJeAxRPGkxuiCBHEavrRpc2eED5",
  "key6": "5LxWswkgRdT4cVD1RxN3XQpyUeZbsbdriJD8k8BUUEmCp12eqVD6PAukx7uGsM4P8Vc1A7eojnqkGp94nVxwCNKP",
  "key7": "21bAFg3fzAMTMR4PW5uiALPKe4dShj9S8L1tBrERNvPXG9PhpofPPXvSrYAjfzgeweMn1pSWf89NX3WXH9A6RHnA",
  "key8": "2adtNEvQEnvUxaiQrVvz22fmbseTsZ5m5Z4gFcnW3jhtaPCp7XAwuLsFXTNJtSyY3x9jWifSqqfVmUm5AJbMoApT",
  "key9": "3PngWd9HZGStAUqYCVntfoeEqh8KwJ2CnfsYuDTzx4J7tWoCM6FaqG2o2kB8CHQcsB8teyTnBYb6NR7sRwqCexUK",
  "key10": "2LsDDBafqLwypqEdS9krqcMAxbrrBNw2Sg9Yt7zi3MN64d4HvyDoa9urpDGufJ6zYfPRFEGZ6h1XU7JgCPfDkYRv",
  "key11": "2xKxoKByQvPU8DkB6jskcmphCSdsK2sM3XoanV2eRFT1k2VAvUPZr1x3vWmxUk24p2Sp3tURKQvMHXhAL1x2e8BD",
  "key12": "54ApiMNrnHKkFWnKGNFAEVWLpBYhx9PFy3qMhQM9nABdcWW5okGktzEpb7bZKwvbsBksoY2fG83idiwZ6V4C79eS",
  "key13": "5VFmXUbaJVmYkjfVna5zWd482FnriDSiLebtonT3ZjipjcX2cvHhJ4F1sHwwGaveEtq2fFVaHgPHy8gDcBDx6YAB",
  "key14": "51zLpiXWXWpoBATN3jJESWwY8v1d2h2t7uBkyQiCXypQKZoSfbxUoe9tYW5urY4GZs4vaSof75nbr9RGS1Pa7G14",
  "key15": "3eR3asAEcQq2W8prNV3Gt5vs5gnjaUUCjPnMiESKpGrsvWskaFwq7oNfewjgUAQjQ7wjuZ8wC4Caqmjq1X3CtH7f",
  "key16": "5VMZZdhsXaj31Z8BNXbeJxLhURV3uV2zs7dsru7ybeopB4AhtXWr9KybUJZDu9kDkGHgBVWLQ2EL1vopvreAKJkC",
  "key17": "UdtRRYKDRxSW1XH9bCJCSvCV4qgoBV7RR5L4U4mc2wZGMRfbbJAjPpPX3jdguCZiJsuDcnN2qZ3nNfbNvHZoZHh",
  "key18": "4xQmhFS1uzbecVwbYNkUro3sDatueqatiEaGfPJ6RgHnUttyQZ92TZwtA9hV6FBPXNoVEUkJ38ZKoMDxTvFqsx6a",
  "key19": "2GuH3qXC6FyTJrmzPUPKxnZmPFMnLcmo2pKY74hky6xFADSe13ZQ8KYKRmdu2RigNgKmT6HK8zWo44kGKu3YJeoa",
  "key20": "3r1CA5hDTqwjxPHLuY4SpgVWE7HNT6QqL8VmsCQD44Qji18PpPnyVztYYts2Fs3sLr6tcuKQRXmV4equokSUskt",
  "key21": "DZgepPzD4qWNSj6agmn83gkNVWpxh1PjXbrDKAhKCkfym81BT3SgSWLSZTwHFJtByFwXcpBzThBzZF2Evy16pPm",
  "key22": "4TPyYFD41i9JhCJ5JwsCUJJ1NBbhjGF6QsUHcPkDwGtFmRTpM136g5cJUiX9cvFhMih272R5UtqYJxZ2KhnvDGxe",
  "key23": "iwcawZGTGUAVBE3V1VKGBBdA39VQwTV9Xodxb5amKwTFKsRZuLc2cKXT2wLAejp4UuAVDEuaBzeHURra7yfZJpQ",
  "key24": "EAuQ4EEeQiaXkcVGjPbCbHA6RaM4Auybsy868ZkbrbScKHALn8voPihzmbLuYwFgWRgrRDq43rfxrZjVmTchVAt",
  "key25": "5ASAkmJ1MWeN7zJFu7vyMedWvNt7HavmtUTkgVoyqd3929Vi9eU9EgTDXpgrRCGSNrbhnkGFESB8W9fQtGrgieCk",
  "key26": "5Yt2vqCnny8AoA9CnFfP6ZkWGWBz8jRQYUdYyrMxtBP3g6VnhveVQD6CTij8FU89VmR7Q1drkUMB9KdcDwUmbkvc",
  "key27": "36LeXyRVTaMXC8thKNu2fRjAEanjefkEwugjhcVn5PTfSrS5voAfcrmV13cr8KtGYXBY5dqnd1szBbmEsPF6z2ss",
  "key28": "63be7L19pa1i6C5N89fraMGKcZSWzZaLTuBktZq4M7MWUKijF4fhWHeByvkzC5gGyGfopPKFmaCXnueiRpGdVaKZ",
  "key29": "5kvj2hbccBXYEkUCCEtMRRpgi1uuSaNV3m2QkZXH8BXTbdZ5b6LYakfFmqS9xWMV8VsEAeC8i91F8Gd7iHQAu43o",
  "key30": "59xx4Mqtszs54oDXLwAjoTKKi57q2d7v6Xgq9dGPxLjrFXKFHHfvyEYzQcuvuFYNQdJCFk5kAFAVhUBCXxSaHP4o",
  "key31": "2dWC5Dg2fK14BQdCJVZyo1hDYtdHeVLp83js65CBvFREU7K3Dz6oDaPanthKLMkQqzc5yKQHfbts1NZhE6WZfZoh",
  "key32": "NGoKXYtH8BNYngfy1to943nXZv4QQvRtLtWjcacKY3KGGR5XbJLdh6GoBzSy5TP8tQ4SFtBfB3w8cpNiyLUFmwm",
  "key33": "52ojYED9Ypr994hh4UEiBHKYJG8pb5WAfvZEFmBCA162oaNf5n4hc1bbDTKrNaUKJekD2rcTWu6NENAnR7FFL5Yn",
  "key34": "sAGxTFhmjBX7tUFwgUhircuo6ACCuorkofeJSKRZVnsybbc3SJRnXLo8ksA6FzAaAcTttYgWddepAuXHxzsmWom",
  "key35": "4ExjcZbQ4jUGmMsMgx5jp8knKc1XA57krGrvUjSbUVShkV6aN3XRijDNdx4nsb917Tvje8p2kRS7HDQEFAcbpqye",
  "key36": "3Zf3qkpHcK3B81mg8hXbyhR3dmLppxLMcyU66Y54C8x4eFMvGzzGE4mEMR4LsfQU6xvqwdiEyJVrtKn17RLohNRq",
  "key37": "yRJca7kUvWQECR7mwgmpbsY83QqGGBqCwAuiFkjK5PJfSmLowMR7TBViUexKuToyFztgFvhxYetU2ifQKWX2LaS",
  "key38": "2TRFuJwUxwcb3DUTs7qG3JMewyswV5Uxdjv6Q5KVVhsc7CWUs9DN9iKYqkNdGX5tgP5G8zR2CRLkrj2sGPjW56DJ",
  "key39": "9AQZmYvqjmGfHUeodztjkWXrMvxT2TPgVmfCDEzLJ1QgFmceQJxHhwGaN3zyJUkcQdNnfcBQsT9HhxfvZ6TTdrp",
  "key40": "4pwXKMEPvA6FYpb7HfLzMLcG5zfu1VsYjvzCfkJvxc5wg7gFnLRMSBB3vDU5cvmJNyYrHmVTK2RN1y6kPtWTcEoo",
  "key41": "AzVUaBryE5zKtcMV7VR2bu4oD1X6PivncmYHin4bf1GKLkpJGYccdqhX23YGLUpSGVJxXigoKV5eKTWSGTsYTVE",
  "key42": "5TrThvAjGJMxYcR6pQv8WVKzrDbirG1rjzFWKXFLqAC4wGBkm5wn8vHmprP2WiJb1zpuRQ3sFtZCqyP7nBd8Y82s",
  "key43": "4thBksCSH8dGhqXuniJQitAuYtmccrGbfSBdqEMuxBos5Q35FXz5ZXc7c3dVreFbk7Ygb94G8TR9t7PDQEym3PE3",
  "key44": "2WwRddFsM5y5WmTvYB2QA54ghDEytqGAwumkqXSC68SjTKhqotAmmD18oiw2GBnk8WtCnNH9HLD7hjzq1TJJQosL",
  "key45": "2MndRvDTm3HtCaCXdpWcuAB9bNaZ5FhUdd6166s7n78ZSQ1svtJFm1wUoeKSTGtkFqnt8tr5uEiEsLiwxEXkaTVw"
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
