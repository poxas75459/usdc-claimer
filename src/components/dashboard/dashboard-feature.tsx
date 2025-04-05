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
    "31gaAgvUp291aegUbrSiq4GYTqwwmFh9HMc8oPudc2RJaWfVjHWq5HD2id4mbffbPJdp1KcC4rpSWvWqNJfuKQQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yMb8gnR8ogPrPqNStwZ9YqaKmkrsPAxUfLzcfEm7Xnkx3u4Z5gDYie4MW7gtxF7FfDonG2HsUejYWMXKR8AurtB",
  "key1": "2W5SsARG5EVCEQt4W6cne3ezSPjH3JBdjmfsNahkqt6kcZe9tbxgGQxWNdzLUaMiThHFcb65xMjLwHmJbbxysAhK",
  "key2": "4DKHSQLBshDdYwuHtb514mBCvuvuDEtN5z4mpm4GxSoiKTQBPrZ88BxdYttWTzsVWYKrigVqTMqooKtvvkw5ga27",
  "key3": "5pngNP6uLeGWxuUXExY9ZSfdJvJ3HnBftSd7qZJA5pSGSGR3m6rVTXoDKtH4PnXeXp2nP2dnJ2D31P8Ky1EewXLo",
  "key4": "5J9SW16a8uw165Dtokg5h8ssiKtveiQ991SmMu6atmiVZHEWxR2X98Y84BVPtMDi5YRKQ3nFoS9RM816gW4DdXke",
  "key5": "49xrpJmemQRdEXSb6omhHF92BQSQvBzVGPf4URcWYhvdSKeVUfMSAaaXaQesEFfcc7yWLb5h8zxAkDdM2qfFd3Lu",
  "key6": "4BKuMSDTXMMtrwfUshtpenYP87Lq6XutQZUSciUW2bwz3pDnJoeYtYySsV9Jb7Le5ScLKfirXAB1LE2qFfEwwAAz",
  "key7": "4FNZKoYuvhXqzi8NeW12ycHP1voeADedymyd3xHGon2hHXQo1KKnM5oFwfquCyhuVgFFxhtn7VJbfkb1W1WuXsbn",
  "key8": "2RGZgqMoqkVTC4o7gmuVFb2yCcTwGZ6TnjysFYz4qqtSRY7La3bE1NaCzxKJZc4G1jEMmGEQdY5SuMM9UaqRTo6N",
  "key9": "5H8V56jofpXaeadKfGmJfyxmEEPdgrrpg4GZYt8PkRzJiPQv273XJxkQWJ5BS2uHPqaYofgFeGPaAMRmTmcQ1oCJ",
  "key10": "3BvVCNKZWXa57ch4rfRE5YBEf6wr1URmb3zdzM8NNsoGKfxdWW67erEh8DVQXT1x1EJ7E9U7fexWNg39qUJ4FUJM",
  "key11": "4g8SNJRvwV26oD1aRVH15DY9wSm7oKmC2FPp3Ny7BT3R9WmspzdLTtVTVed5bNLGWdWwW4k6DPJbNxvDAaJSBaR4",
  "key12": "4njZdjTKRnaoMpSCunGmDJZmNXwPR58wo13NYjcCGPmX9vsp3LQswMtAha1yS46ZV4WV2Ai51EGRk1YmPtZ6gJgs",
  "key13": "2pTouvKNHLAnoRE2LQzZjN5ALCcP4qe7P4VHwrfR47xVovinpyV5iDp14y23J3Hu9crydpgHM3DxWhdyvezNKe5h",
  "key14": "z5Jzq1MWxvVqU4v9LfigN9TULqc6BJbk8AVa8avZLobJxce8j6mVui9pRt7Mrznfr37J3XqGmegvWiPiDKNjBrX",
  "key15": "65TM3rPWUD7vZqcuVEenVpv469MeQEFG9aemB69mJMcUxth91hCtFWwbv2zu8B9ZQgaw2ypzhi7FvviPsDuiQFcq",
  "key16": "4tWbrKPoTWbMRPhkJgocRo1xmiHGFAMjBxveiP3sZeaTTvxKBXfchuz8RuWEneX7f73SmJSURHcwbGCHqmjHtYmH",
  "key17": "zE7tcpggjyKddASDPG76qy3dkcMqix8rG79S7G4qRmSMuxot39xRYthyWEaBF8AGVQJAFDhebzimsxCh9keo4Ed",
  "key18": "5aPTkZgsU85P3Su8zkL1SbFjdw2yJEQD6GnDcfmq2urE95AUzESgd1KJ6WSgm86A7AZC1A8oBuD88v2jBEfU3jYV",
  "key19": "37kPb1XDxrYdScBin73rkTDBYNJF6zLJK314nJmWgXHoD8BgNhxqNbq8zEJzKZCJgmRqzoQrFr7b6TYugAcPgg7m",
  "key20": "3QK98f4bdjnkEs11VeeRDWc9eUatgvQkfXHpfsXnXBEyFnxmddZVQtKr2VmZch9FRsFmrqsrNguWMwbqTs1wutAC",
  "key21": "vAJ5joVQQHSVypcADmsKqmuDaXq3aDvxs3JqwCwiE3CfVwyR9gqU76n7tbqJJFwnCa41KCawqdPxmaH7DH7e1yE",
  "key22": "3vjJEJqJT6GdGDpMHhNiEGfDVq1MtdxtpDMVAg6g9oZLVBf5Xf5es14JYZuCABcLZNjLjeMJiycHWF29iZ54Jhmn",
  "key23": "3PV28vB5NcZZWPuzzJEsohc7psfX93BwjtazrwqCZsGyNiGT3oXkzcBQW7fpSSXCwWuk3wmBR1hWdy3VE2XQb5m1",
  "key24": "2amjwMKfZxqPYR1StSpkaW2DFESHLhgwF7PWZqtKejzFUnoFMNGUQRP3MAtAVXjLY9b9VuMrFL8uHLJWiEeLygiS",
  "key25": "waCYAq4z1guYeTDZrzJrmDXCaeFSDY1XnH7wjaYpGyTMsDb3GTWTn6qyDzzKF574vzco29L8RfmjBTAveR1TfYY",
  "key26": "3Ab8HzybxFAezmM99zsjcbH8CLzqhwb3TV1zjSCAmaZuAUDeXGjkU9CvfrdribRXQe2bS7yahXtsF8Jrpa2wDdMZ",
  "key27": "emvsLSx76YUszvUUgmoHynENGCwRQwVRLqz8B8gSevRrb7uKCVaYVJEoV8qGoAYakSiHBsDSGy2jV2bD9vZg9kW",
  "key28": "2tYpUvYGyJ74UwdA92L9ZgaYu3B6YMTLyMb8RrBTRYn2EK5CzB44y2eErcP17iQh5KwERj4crqxUz3t2Na3LmBJS",
  "key29": "58pozTieYabybZWGSojHtNusXEqQESdqVj2uHoXv8pyA2tqSFPiSuJCe4rEZDrSMLAUw5E1h5SMwZxZqqvzSVaMZ",
  "key30": "4XkNUDaqc3geMs6SfVtpbYNFYYt7vareRUAjfmvNF6Tf36PaDc1yZo8qcjApRRMU3aC1XuiJVRvssiJ4obtC5iE3",
  "key31": "V6V6Xt1z3wTWMWFfa9d4Jvn1SqRREV1CVD1qfjn8yb4q7LenBEnHyuEoB2EmKTzq63VjizZqWu29u3hjNn6N6Gp",
  "key32": "3vqNY8t9Toj66QCAsFXjJjP1K1v7b9uuWAvC5BVuXBqH2jDiNmUNdVHZMZvYVtPQu9M5KtMGAvBc1RVR34Ds7d6y",
  "key33": "4N7aVKCzLPiBVUB4eYeCKBLcvHyheEi4fwhSufzQ1SmGnVKRrGWz4gCWPPoSec66eHU5QQw8gMxHknVLCn4UFgxL",
  "key34": "29S5WFnHXofeYMjn8zwkGbx5E5AxJZtVsg3xviN8ZLeRXadBqhPKC65gnkuPzG1tUahkjHMecKNDcdYvXUMrajgK"
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
