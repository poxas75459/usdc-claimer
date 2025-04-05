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
    "3EMBbAmwDcojmPvvb5EfHfUN4XMQwoFPucg9thMeMsWY5Uk9n1pbanQR8Y11eLj8ZwLVC7ckfTP8C9bbbQw8E3uA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ey64fe8ysdSTeDXbibjKVGEqqYmGUQFDwZQB8zPZT5jiSb646CxCVVDu72JfesqtCPBxLFMQTkJAqiTGz5gGUgo",
  "key1": "Bb9QpDBJhYoP1VQRAhDjjE2yK1HLEKG4LuaEt1ARGK2PigVVQvLZzjE3Wbv5f1PPKisk6FWiNQ42wcG8pfiFbJ5",
  "key2": "2BEy6zrjSRCtMz3KxfqqYjY7RkauaLvYPnkjBKgPwVKvvEFcaofFuQjScpmoGdBVPkCt1V9wHJWazADdzajTdyPa",
  "key3": "4s1AVmGnDhgeuK4HgwDmCnY1g7NkfRecRj3UPTEKQYzpcgFjFEbnnsJ5wU9thZNbfBrPToYmNvPT4PmQtRvRzVdG",
  "key4": "3V5riJH5f8abYRp3qPTs3ZJYP5wWVXSQFXfZ7ByeuHCEjiCAo4e3aARnnvNTdzkTA3zTA8n1nARuYpHeBHZwxq5r",
  "key5": "27nSYDK6UeyQFLMkYrk6QBs6qxh9USSjRR8BnTLRVG4SdEwr7YuFUmkcySGAraW6h4LVakEgTVW1vrfaDbJxQSLm",
  "key6": "4L3XYDxHvaMDsrXgTAiReuhdCC6DoECF7o6THqdiA8SHL6fypPK7m5bSsz7nBfuvBbKRn44h4tdAxs7TcK4m5ckL",
  "key7": "2WbhqqRviwNEcRXVW4xPKfVf4XPCnQTNfuc9kAjv2EwxknssWNEjEezjLAK9kEvpnPeWBb8NuAwsayWmNGFVWL3w",
  "key8": "3eFTWSPnJ9xHd2WTaCNsqJkxdp7BryUz5ScYaceLPjzXthMaX8VwN5PPai2hbv2vuUKAzXY7TQmKxk3D2XQvxwKT",
  "key9": "4oXw7mjqsM7t3cKCfPDk5jBxsSSzC2J5At4GAuK9CiS5nrfHw7qGkWJKPiod22W7xuaWAVB1t6vEHiC8vPqxv89j",
  "key10": "4YQgDEwfzehxM37Z3fLnQ6ArAP2vbc9ERMPzhWrxwtXVXgr3SMooisG6NbRyAHrFYvtvYYVr1huqadkjETC7MX6k",
  "key11": "2ThVTBQ3YceyoBCSDuWSnejVBA4FrqrGosPf7S4twgfBwUZBFqC8HR2goey6rZrfYSmMjCbAsQamFyELvvmgjY2L",
  "key12": "26vCtQN6HX5NxgT8aE2VHg7w7HpC6XpkjMgwrG7rnXBFyDJ3XVb3m7UaQmzRCMvd4NYtiU18J3NHELdjc94tRtph",
  "key13": "2RMFZmJFGjpwaZCyppNy2CZWs2t15gKuHPbMMeVunqDGDVSNnqGpcFAgBy4ZkFhYohjEK8EC31UmD4qfRACJ7mFi",
  "key14": "3DA8LaqNBocFQmGqptwvF8HVRvrmghw93pVdiB1vNXi57uJv5MjK6gXS3w7hhBMZps3i5CxjrrwaAe5LGfhzUva6",
  "key15": "2T8sx6yDxNzy1L7eL5fpkZi96Hr3RJXAzXXHtLsRH2yGrg1uqCAwqo9UBax3zAzFi9dQ68MMgzxNthxizTzGe4dV",
  "key16": "djd3obrZnHVnJkCmq5nE1PVjqryQ1durXp4jVa2G4DxaRkmJEmz6nKikM5z7ds7XukC2kYcRtFwcw73oqCUaGon",
  "key17": "4tUYf7yJBvWDPN33XsYQ2gC2y7b8xbJTcSRqQPXaSVwySmTqveFfyA1W1ksVADyzT7sye15q5Ty6XRkxT11M34tR",
  "key18": "2me2NmVjFLJYjCJ9GsZ6gufFjvXruA36cfxTRsTAGXuhgbE8cQfto1Qx5z7LbyimiZkAoQtcYD8MHxdZxVyReGsK",
  "key19": "5HdS2abbizCeyKPD8u8mfxWMYpXCbXS2uDCUEyGZeQAYTRvmnpHqTxvEAQfmYJTEBGNVgnbrqGbQjDpfavpiwcZK",
  "key20": "j6eCT2sKxdTWXQMZa9keSkvicHTqFBoRiXVR9VxdK4YXFNDcRGyXyphDMrQ8Bds5q46Kx4YatYEGbXDmHVG2aPn",
  "key21": "2PYJD9VypknbSH7NPhxfmavC9rxFneoZcrzsr7yP3L6SJTVcFcaHqXcTSeF2mKeVF33FKr1mm2W5xDHUKk19DH9q",
  "key22": "4UcA9i15nHdE2Eei6V3LcCWzxL8dPQbLC9f2XtNMqyvFHfL3eQ68UhbqZNDDPMNvScqgkx3oestYidcWJJzb2LVs",
  "key23": "4aL5roJYe4wKjx38wvvx8u6VMAtRp6tj5dsj6Dzm86FrwNHV7npHWQV5ztq1oPAmDmF1oXMx9ApPQNPbTiqTFUaq",
  "key24": "dQfqRXYMArUjV5KWGq8Pz5PCCNkLfG5mMwkQJ8joXfcYkt6L9g8vTeEREJgvSsFDUj63dZXkLb2HamJ6yy1K1Zy",
  "key25": "5XfEEAZURVAExwDpDmbHwwwbMphsXLRgfdDRajhKX69LiCwCdvbjRD6EKVRD8oXouNAkVUdpbitxn9sLfoL2ZNro",
  "key26": "cBciqxNVetB5Z42MVzofzatoUz4isgYVgDxaGGMh2CfUYvz26fgqGZEYjQmBTdurgjxKK1p515jVCd7tFbuwVrk",
  "key27": "36GaAqRL91DkqNiKBxwAXjV4tQHGwLP2nRovz9bJSWP7Kuk2vDDrU1MHy9D3pMoCfRMxoEL4FCbAcgxuS36HEAkS",
  "key28": "4zMSHDpcmnQn4VA6XuhLz84AtjkFWvYeFgjfxCHexyxF6W36HAJQRsTejMUaGvYWyXEE6Pw4hVWPuGbDuNE9Jue6",
  "key29": "28nTbKM98JNHbyaTynLSkdkpWSmwEW8NqJWkg5xD1yc2q6XMXpFdduVFMahumHYXMThfiqwUMKRzvR7kGQEdWA1L",
  "key30": "3cTAPiyBwHgKmwqXc152vM34FsmAxNdWmPMZXTnWHPuhibHurXjV4j7E8qcBMCjmCm54smnG1bYPMpjwqwr5k2Zf",
  "key31": "B4SbmyUvjNVJ41KuxDVVppHiyzLp4N29GU8qXopdfBtF5xNBj4pjVMiW2RSBpcyUGZsRXxsDjVfMPYAy2MPkbzu",
  "key32": "28hL4NR2o2NPuEybvpV39Syj94jwT9XQ85SgBQ8BMzbY8hhY71ZLejUoRUfQfNQyJtpaFG7qi86Beam8LiJ611Eq",
  "key33": "3vVyuXDtgfSpp7SLLu8BjiZ78u9HNB2u5rt3FyHMGQMFadp8DVe77HHk7MgnK1KfsF3iUgNMA3u1MWNudBZvG6TQ",
  "key34": "4XeLgUgvUYar8SYrVnDSfdKMgQSXBZZag69pWcPbie19Ceia6weDjNKFfJCvfyePqETcinhdjQiR2ADq4UKBtg3s",
  "key35": "2VAkuNiSpJxWfzL1YwZZGJ76UGSXz9fVTWUUhFbnDuKYz2zT5WC5US7qvLtcvgCi1teUpVVgXWyP2Ycn2w3VtcVy",
  "key36": "4yTc6mkLchMEQPrztYFohqVVRPcBz59cTJjgzYs8JYgCP2CXiUV8VSgHcqqz1cLRWrDLyeDkvbBP5opD1fFtMJhQ",
  "key37": "2KdYQBdmK4imYws8BLKzUYB7BZdnfHN7DSFEfg17RDBXSv3EXeiDfkQyypfCDqQm4kCyPe42CGcMVgusJQCnTcxP",
  "key38": "2nwyamU72uYF1RaR6CyAdWFFKPdrnhSjH8aCVjy6s2764xWUkwenkqrWjsvY5cHofS7UfREkCfaYp2R7t3ZCLb7C",
  "key39": "G9c1y6swUepVAKA9th23rhZaYqHhkTpMM78KoJdS3iXBPnYKFBVFM8fWaJNtQgZ3vMsDbLUBzjyzgezN6vY3YoF",
  "key40": "2tVHUdGA6WkDvfcfQpT5Qn8wGEZeFaC82LaQqh4bCjQhn4VzsVxbujpjD9UrVy7LFoHzgC89j1sxHFvnh8E6TpTn",
  "key41": "jkUfiq53o18h5FuRM4e7UiE7aFHbrMsxHhpHHgGzg1e2YxFgotZYuFivdyySKwh9cGAJnWDVmL4k69G1ytM3Swp",
  "key42": "1hUngpDinijkgG7Ubx5CdUGDusJRddfhR1iH2HV6KinMUzrJbCaLTX8hDee5ZEGeq1Npb9mZNCHNtkn2Km6S2va",
  "key43": "qhjtpBL7Wme3BKCt1UpzkRifaSV9zUBxJxChCNHUuxKfTV9aeZypiCspiN2PwDr9qEMTasvQkpe2KpyHtVUq4so",
  "key44": "3NfV4KZQ3gXTbiPsYGB6F37zSWeXkuE5QwJRqg9RgVsWYvgDt75TRzqoTEGgscPJUZScyQCNVQ1rb46xHSpi6ZeZ",
  "key45": "2cQYUb4WSYTTPMajbyFUB2NJZWEviMdHnhNNXF3TwWRnZy7KZM9yVvRroDsU62skvE6QCKxcn4MxrE6Jwn2TBgf2",
  "key46": "46ENVuCMdkKQSefZdt8GcG9GEjQVq7TKBv5gR8WeouetsDGNXFsTEdXKQMBm1f4yVFdB8UuSqiS2otkkbZcuPWop"
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
