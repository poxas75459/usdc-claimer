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
    "3p5HTkd4v77aDBecQ8TKDa1hcasez7J4M4zE5ESw5sDWnwjvxgPXuhxJ3u6pLMDsdebFFmoE8is3VqUbH5D59Wir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xzwNPn4fa2baufyypddArpbvcpEhrQjBs7EHTsZ4r2CTRGC6WLRvPW5FLjns7BdMJJvGSosLdNzeT9VfDJQ22Wd",
  "key1": "2JAyQrLKDiiszk2xyymmbWdo2FfPktgRQhXuZhVNADHiXcgoky6prvMGCWwm5stJrq86BjkuppwgNLVZWVXJuz5C",
  "key2": "3MEhvVLSfkqp5SsLmp2z4mKt7XJUfJp2AFZzrTAVNHbbkbDqiTu9Ry4N9yEhFN1bQ9tuMBSiDMocUJ1rffcwmUVE",
  "key3": "2nJ7ikTfH2xFPBxwPTrqtdaEoRCGBE7pNQ8QobvU3Atc8cJzW76TdHm18m9b35SaueMzkJUVxV5xpMZy9xVmXsAW",
  "key4": "3qvTWdWp4AvX7rEUskmnM637JwrhHxz9xCobskptmqZPyUFRWkqLAGnxN8pWjvN9rAvw3dZyQ73NctLEEmoFGhHV",
  "key5": "3epCqoNbATUpUEDG8Zj3EyvfS6AHA7WwapGWCn3H93RxU5ro78RHHjkRYoVhfJ96LXfkKHpcshUQRWy2iqrXdL8K",
  "key6": "3ermFbmk5DZoaNUAMkTLYJcweMBmUxYDqhCv2quuksfVWwve7F9cjtMxfdnM4PKgtrs21djh6PpWVctPohKPMtzy",
  "key7": "XSi6e29kPt8xEmcU78PjsEDuHkUML7mop6SdTWZ9cMjcPJmZjhvsFoagDj7HCKJe8QucjA12DxTcsmZoGuFRKXS",
  "key8": "2Xmrw5bAKXxniXuvn9pkev6QGoz8vJcmdnRZtToCJzjMd6t33MeRasNUijNmQC7Bmj3suL97SqAvTjEX5BTYxtr1",
  "key9": "4x2HK5PSJAWzBg6E6AsFCA3euietnbFSzSbsYdWxstyqkUUCEyJYGWKjhJm97g6bSuSJ5UxRQxhoJwSbCgfWNZ2k",
  "key10": "5MLmTWz2or6EouPpfhJkQjF3Yu9bJHnAYXoTCVUXemXeLqFquhCS1V5Umrrv4QubWjH6xhN5U6sPL6M2hwcV3ApL",
  "key11": "26iFamYiA7kWLwWw1wu3ag1iSx2YKayZaGbRB5H74v72C6QNCnzhN8qmL7zGDW8v795rYortqCKKDnHvi5pfVyEd",
  "key12": "3rcrjPmb9JYFJu2ua1qB7EDXHCubg7qVYPphx8NHKaXq6MxNQi76WAVDB3qUmFWoUGSHXcJJbKB7DB8EqCSN7DX",
  "key13": "5j3tXhbcMPxb1BA8KzCV65Mu5PoBkSmtZ8UA9vumxrMHb4Myfbu52KmCqBtMjN8cPEYDxtBuGLwUyJ3Bipn8ZwVw",
  "key14": "ebudKgyRmURMjqXmNGvF1SSEbb8Q2VYJDqf1ghoMaM5LGomadyW2BbACXKKyDe7iJsPsMbhxgEPjitiCwy2tctr",
  "key15": "3kZ8f7LSAZyJR9Dt2PrJiBnVXD5r32cDfN2H2ciL13jLRWNw3XzMrUwG5nbt2tt2H84PZLigcxfRgKVtzyQnGbgQ",
  "key16": "Bs9t1BcjmpPxoJLG7JKRARU9W9ZkgdZBu985JfH7DSE9mdf22YaufNJjBYibXptF1Mx8vfocMoD5cednK29UGTt",
  "key17": "37V9JovoLcNQidL5jHoejcKswCCjk4DPS7T7kEGxabtc5VudD9e7r97xC214g2H3QwsyPxKKNz7c7n8ZPxyfNzrU",
  "key18": "tNCB7Pe2KzA3nvAjpnb1yu3ZquCYJqcZvqg8E3936Soo1y6PyNyS6zjmnVM6tnHCfckDxxMkfMCcMLnTg3wH9z2",
  "key19": "itQn2FFQ1XK6J7UAyUvFqFgfurQajuMHtDZj1XjeuLe8LxMY7xKxoTdgpfzUfiG4Sv2q5oXQs17taCzgzBE6LhL",
  "key20": "44BRMfk8NDsTeFDtUr6BLTBBoLeXbBQ4k3NzabACVqayyu3JSMU9YZco2skdF2VLPDnCNh83LwiYnHRwTgnME5TV",
  "key21": "5x9LaJei9v3AU9oPcdgvcH14o9jC4KDvqUzTEoPAEqyuZpXEu3iVRE5dYsYjH14JYup83GDF8mW72GQXm6wyMYvn",
  "key22": "K8yjjUjtuKsLD8BSLnya3c4o4jMkqjDMmY8NSgVm3PC4iBmAKZwDAZUhn7Lwvgw4wYBKiVusq1xjCYKo4MGKcrs",
  "key23": "8rqjzWHKyQHWGHfCmuEiG8ewGZ2E2JDasYUSzgn8ozho9iDms1VmwFky4Hn9BEDRuftxC8wcNDQMMojQoFfkxKw",
  "key24": "3aUEjqF3YqirgrRZMSsgFjJG1CKS9nPTVhsutUdBVDvHpU3LGSwsUinzpAh7nUpn4zMb7SN5SeWaBCt2Xp21Bt3u",
  "key25": "3LPTg1PX6zgQhpUqijLMT8FVXSw5AX43U8Cw8By86LjbLFGxAbhWHSXEAP67qS5J8MHzWfcfuWbqGdGQ1MVN7oSu",
  "key26": "3f7UB4hEaWySSXxY3tEF96NGW2u9cXC1YhXM5xcszD9ycBet8hDgQxHdphncQj8h4GzXKF4DVcwnFmC3PFCqfDvj",
  "key27": "2SinAneM4iwE1F5p421xBXRxKJXTv4tuiW7KucJNuBixqaRT6evLUB13EeTdXdxtqyguBbVeueJtRmYUrhzPKUWJ",
  "key28": "ZPjWWEy57N1Vo81zGBkUm3Yyx39MF1yXJhNpWmpjqon54bUaG5pn9MYpWhCadRafswbWHjpt9mC3pzQQitCtvJC",
  "key29": "5CXAH2wNLSkBtWCVp46aGHxcvRARd1Km2aXtf4PzEtffUyKJAhR6s1t3wbdguN5cT8F3JJt8W17wgTyRhBMVkcc9",
  "key30": "3GRJ12e5jdCZratX6cQwm3cwTcedUM7UgE5zFyHwwBMs1B8Avv5eJCAPcNu3VgvSTnef5eaFstuTJaCdhrJ5BjAJ",
  "key31": "3kXVcTc7w2TSqvSjoETLPV8ZbcKdhQQxmttPQTXN9Yqob5nkHsF14arat3nhhncoHQPJxsiq1M9hwyZVHnMSry2o",
  "key32": "4J8MTfMuJ68w91dXS3LSV1E7P43ZftGvL4kKxyUYAzbv1Xuh7bqiCDozD2P7tpKHczPLCk47oUVS7GKhJj64VPe4",
  "key33": "5oiga8oqvKTpDVvTPCK3E9kUoDEBVuDGrCnuwx65652e7GCkJzVNkGrX64uoPpF49iLAj4LJwRgZDyVCeb66owtC",
  "key34": "4MYLa6FHdopAJJ34FdMeW7Y74NL8g5C59yMycYGotVbZAtZPSNQorWsxw76ntRkVezTi5hkGmBX8vWR5Q7xyVPkZ",
  "key35": "cbqSwk8ytDMryvyCJGEYnyu6FYf3vR1opCpsE8xxucJzPBcSsivBxF1WBXCbZVR3ZScDPq983fNz4kScHxmtHMD",
  "key36": "2GZTacWAiLEr3adNvjJ62yxXgTcMnma5Y8oL3enJBmNhoAadE1fV1gpMsgEd9MBAmP54mGaFYyhpRe8n3kKCd6PU",
  "key37": "2oVoz7CJ4Ydqncmfk5EZUPwHozWk4N9MmVm1R9cEaFeYe3evMeqUujigeLcsG33H3rsDbTmgkq938sbMQVM2tkSR",
  "key38": "4Vq8qUVcMkqwd6MC9Vun1M3Ui7VohHoCyQmupSP6QzrdXW2syTJoRLX3K4E3XN1Lh5VmwYJ6jtJstvFDLPULX8Qo",
  "key39": "2ZXPchAMT2Y9P2pa6RNeHsJdtwhVywvV9424qoKG39PMjETs1pTuAwZ7Qc6hqTZYDfe35KWeBsxTjJUbyEMQowTe",
  "key40": "3GZDbfBj8FV5DRYGnoLErpweTEe1BbRtsAaNSzXJzUpNGcqRE3fPyPeRQcKvNUXuGCwp98k1jxy65FY1BhkkTTmK"
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
