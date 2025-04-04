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
    "2TbcHLXWgNA6FtS95JPsz94M7UUo7TpHX23F3zgiZHEak53rrt99QvgbVMfMW4PFjyqUzigQg92tig8m7wYrtMj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uaHy7b3rt4yqdBjjzYTAZKv3cu2oEwca3qzCY5aAkMhFNccFJDk4etionmkYcPTkF6TneA1C56oH1czssks3UGA",
  "key1": "4TmYRFpEGEnam2zKLirVroX2xbNhBWkPJ635GQuYDgvJ5qh4Bqp4BZ2m54ud1cYFsyHmSVQBTiVrfjcpEDN57rjD",
  "key2": "2XwsV8PiEWrViWrsdk8HbFsFzamVahMLuhygrKWMmA4pmpUD14UYMdP16K8tvmbUsH7jQtkgxuftPSrMFeg5TLow",
  "key3": "ZduHQ532JBRnsaV2AmZGPkt2uJJvBpfRdrhCrW8SLGaQtoSRWusdSybQy4MdJvrWSSm7eS9GQUmugMNERrujaab",
  "key4": "2Dg7FQzTkiqzy9XCAkAZaSZYB9dHi54rMBAoGzL6LSEVFekFBC5bp8bVuN3M9he5iMUFHsqGWLDy1qZG8ifzXsA3",
  "key5": "44jsHVQGysHfgQqZzhrLuisUXiJuS5E1qpVx1eCCRgsh3cT4vuEGdR7ti8TaHfx1zMgAq7FGTqKv1T3NxLLVgswX",
  "key6": "Li4UX5Lwdd1GhVGMfusyxUxkZKKQXpGPq3edF9DJQT5JtpWytrEEW6rx15uBZSdDCnHPCBJnhbbPNiQaZ1GUYUS",
  "key7": "gfbNSjsPFYmGQFzERDfTsFZ1EPmEEM6tSdp2ttpJdX8JcMrXiLiSVARNtfb3GeVdVuvZ3iZyiCP57Sww4uLs8SK",
  "key8": "3bCfiexuynT6DWgbCAznvk3424ySLCaHsoBPYhbZH9VkuetFtL4hEvCW2W3tvYCkN7Sa9Pbd5FRjSgrYXpSPMqsS",
  "key9": "4uLjhporWWoVoy1oAoT8UyyXCCzTBUbDSCedcdJvdeyNAMWEwhSZpjdfSTVkZt4SCA5mezvPdfpN4jzSYU9qQiFf",
  "key10": "58RGj54gKJVUugqtX6RMWjHQbaiD5QYpSKnTGbA2gZcX8KBj4viZ9zjGYAadet5ymzgGFvduGNwKuthaaqPWeiir",
  "key11": "3X5YekAh1fxppMBB4Snvtp9qsxPrD7Ba4CupAcU4VGqDdgiDD8Pd7G41GhYTJQF4mYDUQSZZKh9Z4QfCXAMUWUWT",
  "key12": "2xJbf2HML2jeyPdBUCsQ9JfWVjqd8Ws6b6U3uVerWDJKo5kUkkxf8ZRCE3eXiHP9WnDLujSCsGhwyVHSqwUHcZJn",
  "key13": "3sWeDVRMrC5vNT9GbgreNXWCEVBpWoXt3LHgvczkHqs9QSEuxS5LRhd2DnEWEL2957LVJLhpH3iSAANNSjQgmbzH",
  "key14": "5yke41BNYRjBQb9hNDZQL8UgtB2y4U9dHvca8GS3PwvPrQ2UG4fZunYAmnHfAWnJwz4aMVjTSmTP4zboYFnAoueg",
  "key15": "61QcMqdp47XtyA4rgkVeUano5P5RtZoXR3DSaQCyU5AkPXuLgggorxX8hMSU1UKr82itYkBEfBSv1DZJoJ3WrvoH",
  "key16": "62wVTfT1GvE3btMNYpKLEDUBqYaNiTTt4vB53Zqwqjomru9MnKaqaUtMRcsBRs43vdGLQRHELqF4VuCBL6XuGiMh",
  "key17": "3ezC2zzW94uSVzFvwo7JUvYhpT6w1DX8C8sTp7rYWevVZ11aD9LHYSiLDpGJmXYfidwjQSuAAzx2qMAduEVvJMTF",
  "key18": "2dJjCKACS2s4gi8cBxZd2CVHXemWhYPLtjghyugMj9xpHGA4XxuXiGfyK2B4ccfhjmDg4onussfCnYKzMLE25REu",
  "key19": "2TLZwDCvTsfRENB9iuXkijTUq16ti5VQ2uNiGBUQXadhzvcx2Z42gxixsLjSy2V3fF7y11PBMeLm3vkCcDFAQxbe",
  "key20": "oHHGNAd4jds677NahQ42CLG6LDAV4HemfL7PuXj8BqZ6tzYBHtB4fbQ6DjXYQzjotBoYrpBKmsSSEK6GguAF4aj",
  "key21": "3ZQqxrcCgf7LGdvwbHGUErgAqzJNeuEoug2GjFo3xWpx1hETTRFLSYqUCKzB76SF8AgbuQjxv9KVE48yd8oMkXBv",
  "key22": "5BiQiCDY1VCpEXMvdcVYbeNaiFt7Yn96XwwKd2Z7sjfAcpWLPACCeKcgXgCkUnEdKaFDj5yzQV2yhRqrmMUw7mT6",
  "key23": "2dwh1KujdpyjAUD1rm5VAX5PSXbnrDfX3LKU9oqySugG9Yn8sGimScdAQ5ku3Kt9S8tg4shRVGdMUgMnUGD3utwi",
  "key24": "4M1YnMLFFdAiyDQNcWnFbbFm4qtPKKpVT9LaSNcHvBpSsFrtwesiY2MPSizcbpbdvALCr4cRorHUWYfirJqJkkhk",
  "key25": "L5MVeBejN7RfGirWqGCk2FZVaYjfyisfTnAeJ39B23redirzoNfAroysqJzqqiUj3mVcCUyz2u6VotW28atFtj1",
  "key26": "3ZGapqMS1WxpmGKsYg27vyDtxE6wAa1m9LcJcdkkw6hfapz7DChpNtpUFveFsVj7T9tLrNhn6jvKdZZCZzBEvTM7",
  "key27": "2TD6FbBF6bmYSXTw9Czv6zaqFhaCPqBui55877BUhrTC2q85w7ewJrgiZ486ULBcdsS6tZa7z3ezTLYS3T94UaQe",
  "key28": "4gFsK6zqnCqTQPsHyFqiSCqSrWGf21P2Zv8zo6bMk5C8k1U5LycbBcdeMVLWTJDjWNBeTz2Be5nc69yc23PXvKps",
  "key29": "5nmn8Ybjup7Gcp3uxq6sNJshxKF13WmNe679NwdJvaa21FVTLUMRacpPD5yDfRYScCai54cyGEyLzsrBBiiPQDnE",
  "key30": "xngyf3wjMyhgzKU9trKi62tEieT6fXTnssah7J26NpNDsCoaNT4Cwsoj9RDuAAYWMuLLUmHeBj9h6VuvPYKbAbG",
  "key31": "3LxrVgM2eSrBEykAZmapi18WUkywCpRXtMAA4DCqDiSkCC3AxV9rBAF583YKzHqdThPFgVWMhDVG8EcrykqGSuEc",
  "key32": "5btdp6FY2hc6mmLrDnyMivC64gMSjiSGmGbo9XVPGrmcSahV4g6b9ZR4mjdZEssXMJTfLGWQ9g4uNaPASr5vQDnK",
  "key33": "TByLDbSUS1iDsUT3xzFsauPpfTJ6HGHLrahQLKinXBbfpuqMoBBoVgAgD34LNxSC9BFQGo34d7woAzmVpcALzqH",
  "key34": "4v5UrpkdrhkbSe749hQvQKa3aCaWdxeDBV2KixkqTTyBGu1K95xJ2V317xsLp2ZLG3Yg6uYFrWpfD63MzZ3XBDjh",
  "key35": "25iUauM5CEM4a8J9emZfqhzc3S5WF5G2VatnoFTjgVAmR8EEMjypyR1LLs3CRBj6UXe2LXMEBACCnM1fPGySPkmF",
  "key36": "X75BzoH79gHBiNVrTDUJfUNyDnC5qzZ33F7oLwMReqPaVFRDKzRbqeStyqWCMpAE9yQih4mhFbZF9cymFs1qwbi",
  "key37": "2bYcttSyGy9vZFJxnnpfE7Zhpyr91aRwNYgkcnYUWVYLSFB3naXYPcK1cGVB6BE7Lv7pntZKwSBH6mGuk6qJCWU9",
  "key38": "46Qmkyh14ZnSGLudX89cV7fnApuUPDFrj2XejqGt7s8iXHwoRp8fmiwr59BsbJeSxv6hxwCF2PXUUnzEPvABmU7p",
  "key39": "4vs1wpMsixtGBAnQ9umDHQcFoQmbm6dvahcwzBJzVU5dGGPJLaWVbUqjdiQ4PmEyyZD8vYbQdfVnUtfQ2GujTXzo",
  "key40": "3WAdcEUD9a78tH2gXCKDtFTqVRk2nKfST2UiH7ZcbnWxkrVggvsam3skUGoEXT2SgQmQftekWWwPz5ucsqXW9PJo",
  "key41": "4iKCoViCMscBvB9FJTzcwD2YqdPawcoEcptmaYEuK4mb3qvvprTFGhU7Ytm7wMxFgfzc8ggXEo2VA1P89x4eAmTs",
  "key42": "4ZeXpvEaKrMWJz6xo1QeTKno5GLuP9AaX7TQxN3bs6fhdsPq7jpUM7rrTkRuFwyUgEfrtmXWG8dhLFaNSK7e2aMn",
  "key43": "26AcVjM4yJcz5AtuJgJKCBJbgbpJb5mw71GR4VD9NRy9AHYUYviti8hzNpTKdGjuXvTAiTkV7Bdpq6J6nPk5ZuCc",
  "key44": "3NMWNthRNea4XJZBbAuDxQaLc14JRcuWCHkK8AUZtXuqKjPHqLY541TZ59wBJGSjPojcEzYED8sFGE2D7MpgYjfC"
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
