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
    "2X7GyFkW8mhGawGWZXpGuw4rQ32Pj2Q5JmtUM1LVRHG82vcQKbYw1o13uu1HkZBdF3YvRSiQQiTZMihB6ewxhrv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59rFP3SVvYGcutTEmeZkkQBD9642YKXWKXydpo9zqUL6AWUAt4LfnymhRZLDPjyeLW4G4BUuaGxjLBwDs4tH6Dat",
  "key1": "4u5j68wV16B4mfNwQn2fKnbXgFB37WBmYCuigzwYkvvcfcC4pia4AjpPJBVH9y4Yc4YZWmagVS7pHoKibn1vNcvf",
  "key2": "55noBw28UAUCuw2EHQ5BNDabjZGWWWK1enrrvQB3fkFQvHs26jSAoDChXUfvd64TEWLQFCq7ukCKw9XHtAQFXeqK",
  "key3": "2eWXr8tWpfkfaNmShddw9drqbPHTHudXmitTzz5TCHQVn6TzVsfaFfpv2EhzfmoWMJYkvU6MDZBNv5Kjq5WDnQcv",
  "key4": "3vjhyLBPFtunbPNE7cjBq14xQARomQ5JC4CyzoXAo8QnhzeZ1xUgrH2KAMfUqDURy3XVtsyRUjuP7F8WpjXd418M",
  "key5": "3GXZRF6Tse4fn1keDzLVb3JGyFA8aWLiUC67yYZnzEUEjLGHQQQwe54oHXjKdkioEd24AC2i6KpzrbKctytiTzQ3",
  "key6": "4DK87AF41qMbYAVywyDtZqDQ3UnrJEkqDeJnT8JLVVmZgsY2EYC1CCXJn8ZyH3ccLAGi5CmB6AQaFaqKnN47TqJj",
  "key7": "2iQ4unHytiVRoX9JgXyR1trkTgipXzUmDNz6hQKWr44at1pzahQV1VvsSJaqhFd6j565G2ku4GQFa4Yxd7UywVG3",
  "key8": "tNqfVkAihfDc5d2RXzZYeQRoE2ZafAFefsMZjoaJbL4pA4tMRZGaNuZNvZiHDcsxsR43aqhgm4wfxi4gBCSMqDW",
  "key9": "myz4A7QyL1iGQ8rinrdyhi6HTgHGDXmxjXQSKUAdNbTCTFEm6gio3M7WGctJ2ZC2rThNXaE8BSQSEaN6ntc6j74",
  "key10": "2eifU6SUK5yADM8QSpFZDZ3YYo7VZLcKQdAYMauUxNrfxk5hghNT8cA5vdAJddBPgk5Bb9r9zUDdTMgZnechyXkE",
  "key11": "5SMCUXnHVFukHE5YyB3T8miQY48wKpzDHZ8iRyzSEWuCgH8M5VvigpcCMmdgwU9NsLJVM9zmRBZnuTZtjHi7qef9",
  "key12": "3MCbDuhThRDcaAea2LFTnHgUoTAg6oD5EH8qvzTpsNSvFeBgt2SSE9QPRf4oXV2EVXo3Pg7yFuPxH1ALuREdVxvv",
  "key13": "NVBmzvm6s68uAeq9Aud2p11N7vxWnJ5Ze54TQ4p18VmyDtYtbEfQSbpMpr2dVezaKiGfoL3hnZAnQwe4gmfioQ8",
  "key14": "BN3ZLRpa9wHXkhggDZe2gdee8sAaB3g8Uy9MNUpL1ZHhGLJBPN5j3v5kKWq5weFGxW5JXgNpG2A8VFpSeMH3FjX",
  "key15": "4kabGqHhzAn2J5GQe9mYWHEMkXX9YgeVbwfkVqERiKVfubPCtxnMDVQBFD8NH26fSijW5c6KyagrRkFsQnsUATpt",
  "key16": "4ZFWKrkWjzKmYpBcJ2k75utFAm5vFtk54gBoeMCveZP7mmCPkSwBUMbrG4kZzEwGkzNZTvzT8xQCzenGzH9sudEj",
  "key17": "pQnJ5DHZ37xzFsebHjuXru1XuwEV3sdN9dYhzHvUnCWBa4E7iHUfZ8zkAypnnDegpafKGDJXafHJgwnsWmE4YdX",
  "key18": "5bGnPybbrzKCK5A6zYFTsuRdfMut6BnuSuYvUCi2FvunGYvgfUqgJHYCrFzCvgMWEds53hoxFh3FuAsaEdNNDJaS",
  "key19": "5CHKPhCtaLW2khqjTXFgLppQagK85CLufYYvwncsM9MvZhmffmEW5nHWowhNAtXg6ef9KbPG7tKLtmSzyGCjnzqR",
  "key20": "64mNMraPYLdU2q8Z8ppHbNmtJi1P4C82mcMK9e7FG1GqjBBjeHw7Q3jjtDPHkiLRurkUR7WYXfDYTVm1sVnrdYWB",
  "key21": "3kD6pEZXCFewHPxPU33tQphA5ErTDpxmQDHkZsMdbASzFrJWjRsWyd5NKaetdt8kuhm8V38H5PLdFzXoxuWTwgss",
  "key22": "rFGQoa3MfeUnVyNEdUQ8aBHmhq5Z41y3M9ctWx6SatkTcrgJvDWVq1r9Vq7eoaNHUSQJ7pYKtwc7H1j7v22XuUP",
  "key23": "21onJ1MMBbpAaTSsR2cPUt1Av5F6zDeaPqjGUvz3rCf7U8PtMAYfDhzeKbEDi1sJMz1V8BZCq45MXcWoHLN86ioS",
  "key24": "55J2VaYUzbmXCJNm6EMBpP2bSkLw4m124kXt2AKgefXa65yNidhJWh4njXLqpH2o88eWJ6pUakPFCURckRSZDbFg",
  "key25": "5rkGkVgvG4dt7RT278jnHwimgL1QeHFZ36PWf46cU1yUQPUJ6xWT2yDt11R4GntZ4WbcvP8N9a1w5wKbraojirpj",
  "key26": "CTA2kDcdjXeiGiMCempCC1Qdwe3jAGE3vZUfh7AeQ8xoUCc8SZcnpTWrDvo9iHfmVa5PA5RyBEBYzbPEUTSk5fL",
  "key27": "3zHdNZADDwsDqdnNMCp6Dcr2XAi5ymSrJVEacp8t1aHvxszLqwf3UHS6aQPx9GV1TXZqp2LabZ7qY6SBiMMmBynb",
  "key28": "3cduPhqbLDhv4KQky9WzRXBRcjm1rztsBFdVVn5uT1SdZJ4qdnSMHVGxKjkpXyfAfHRPTkGnYLs1q8qVF92jHScE",
  "key29": "5YQCRgTkLGiNLk5YWvkwSJrYzTTyUbPyPyeaFJqZLS2kcd6HATPNFwUMhWraK1AUb9vaigd4kRjWyFRTaPdWfzPm",
  "key30": "4tbEk71faQB18C28N1k9Pdwkhw7Ncqy9V6AjVerio4vnMjp1kfEefFZDip82PPUD5z3pvscvz4hgjk8ahLWzPvtw",
  "key31": "65pLMgMjEhDFXUcCNPGaSR5GpFmvo5PVFsxhxZGaC6y1iG9Qe3PWS4xsQMrcqXpX9oq6yyUVskrrLnGH8inJ5dgS",
  "key32": "HmnvENDeGp9LSg3d1BPqCiKo9AAiXYQTJbQeZeEkRtb1G2qUxioD2ZZaFu8x7KNKnFktQ4aepn95DyB9FUHyBTe",
  "key33": "5nT5uXntkgZuKAiTcVQhcWYzpBiJtoiwqtPLMuyYqEysPesaoTWXKGW73fnzps4P21E5xZkhGEUw2Z7m26paamc2",
  "key34": "2Th7BNf9XjEdJJDedGUVx8UTwjxYY1yyQuVkzDuB1p8CNcggxBpzjWpM31QyPCLqnVRP5ACWmHrmk3Rr1JgRaDj3",
  "key35": "4Cj2xws2ExuwAAgs5xQVUv2TNdcjsUyXCFsK2yWGXUvRQgPEsVGF1hT9BEFNTJA3LdyHQFFthzNjHGMABh3BiiWR",
  "key36": "2jYKhPiM1RMST51s57xvskYFaqa3pDMoE43TCsGwYJ89agwwbtKdjvp6UQQvxQiCqQk6kdFD1WVWTLsUCJTS6Csf",
  "key37": "36TrJvtXXv9PTy5NDt7qwTjCuydZQtKzsz7xqoTL12WgrXcUi5FrT51EKqpbcrDxhrcpkNtPTqi39aS4Noe61tAL",
  "key38": "5a3z588MQwgG75QxvNmDf9XPUoxWdWPB7w7QpFmSnG9jbbtykiXkUXy6PANxiSyyzrFip2sQg64YE3JzRdFgjmyG",
  "key39": "5nwPBAqK8yMZBivNH2rfZo9j79QiYMsN4RWYeBGax6YiiKuPMw78EkXzuhJYYcUxxxgSXKh3YngHbyRcvEByq861",
  "key40": "5JBeze5vDDYf38NkLtnJKQxou6zHcJPLvDK5ozesiiFtDo7k7NMrANWtngPSZcku6tzJrLR8nT39zPW2LX2WdsCR",
  "key41": "5cmNpATPVtJcchBAiJzssd8dZioFsZ1N1NpNDfvqS4rJSAY6pgRKonK5zaPVQKijJmJdxzT2ipdpZFScJSRDr8gn",
  "key42": "3JbWW8JwfeTovTuCCjXoxqBMq3pns3bNbAD4Rjie7Wcydrc9cw5H5KyDPKELtp3usiAsvwiVSqtQvQaqLMTWQCPy",
  "key43": "TKDsLidq523x1VjQ3neAbgidnxwr5VcpjJewLQxMWDgFm1pzt44LbQw16zqcHyRgkiXRC9LEVv2J5JSBfbEqYhw",
  "key44": "5bBaa9WRP1aBGc6ZNmx5cFxw6VZFzURYqfKUAg8JE2ToK9YrFRHF7pAkY25cdHYL5L9mo3RH4XDhKu2zjeDmKxg6",
  "key45": "56aPGKDL51AWeHVgMskxZSuJkGK7eCNUENDr8RTvZWUzAkTbNmRaRMnvy2jkcxSo8EUnSP5coxYJWPUREY3Hrac5",
  "key46": "53EjVkDTLLLGMo9D7iqNHNurDX7kkdUHtDKTL28qnBEeW26zg78p3YGeDa6zbzQmD9vvgLjq8Nm2xPmTgHsojyCv",
  "key47": "3bZLmQjTeJAcYc68zUJgswHpMqapU8C7X4UBwFC2cM5cw3R4sTxQJ1gwv6duXCkcKVKp189JEHsaVE3YUEAoQ7Bn",
  "key48": "3FjqfKE11QPx5Ayqh5fwkEFrbq8BytYhV44aNp3VeTLvBbRhfSZwAbTShMC7qp5wczedzE81J91B7HFTwMjrpBRz"
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
