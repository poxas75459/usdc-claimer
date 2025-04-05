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
    "4BWM1nLyHRYTAQ559QoT15KuPF1PnVE34yAad8TRVk3148GQqePd2KyGQLnqRBVSbWFwsNAkKEHiZXVUzLPnufiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XstBkGX2VTQhQL443YDwUzjHb4VQtFykNjjZDX1apzoCUcYvzgHaFW41AqsmUEfUjbiFr4nARspaKfgUwCeSyru",
  "key1": "JUwUr9MoGYmuRjgSNYtRaxDuhE7XgW2JUrVc5Sa8JUmCcmYE8JVQkGzJQyVHNEUxX52MyUJJD4oUbynJwkkYAK2",
  "key2": "2Zt3gwZuS6n3ABJFmpGnvdhgkXVtr41NcGzBV3u17GfaFdpGdXMG4i9TBZiuhTwAWphFuc8E61iGvMrfeRRXrLCa",
  "key3": "5yTm1g84VW5q7WieMWSnD85Rs5cmHwJtJLy3QDWh8R9bdtdtX87jzzn8rf3iUQe7bBrVxxHXucg1EgE6JvDNUiE4",
  "key4": "3YT7c1ab8odt1m2phEEvSBkhQvS9jyja4zrjzu9khaaK2Yigp17tjbQL35URiP13gCMCxx6nus9d23kapEFACFXf",
  "key5": "3ZJ4zUWF8VxqayEvbEa4EuGRzTkYqLJ3tSVYmbR7KXXTneCt72WTTsf8wSnTaiYDNo96sc7dAkiNaPEGUW1Zbk2q",
  "key6": "3m1bPSGXBPWnqk4BrSuGHeQmFPotHRopzwqpzxXhw5vPXU7HTeBJZHciizFqus8dYqze87CM4y7Ho22VUxWRBwGM",
  "key7": "3YoYXASC5qcRHEya9K5aY3hjvfuaBENNSgU8s1GjWApQqDiBvmhRupwX5cMwAQCsPMsGBcb7699Cyek8WxvJgGTb",
  "key8": "5wPebky1pc3MpGCYaixQUfq9s2oHZYDZ6Z9nyBAsPftKb9S7J6cwy9v7HN5igJXXsNi967ofZ3dPebi9AgEEXxKX",
  "key9": "35EKFLq8fcp64bqyNn6xFrohahCJUKndC72vhxWdz2VaKRgg6xQwsecACwEzsA368pzK6iZwSTgTDNagbXFsxv12",
  "key10": "oFFN8zFHqD3DoNorYLaHrpTsE81QoaXfv9LMojrxcX59JSYaG3fKj2oc1UsQMt1kq6h31ishpz1fCEDizUJLxNd",
  "key11": "3fDGtT44n7kUJpMxLCej4p7c6GKsQ5Yjnnj1bqiMsTATBqDeUbV9ELZDHNyFPpDBoDStKDmy3QE7ZzycdJwDB5cC",
  "key12": "5niJMw4epGmkSa8GWtZdQpBDzb6a5uyFKkVaPXs3WrXg4yneDhy53qBELE9rHVHAjR5FFrWrhQ4yKVbbB91Ju5kT",
  "key13": "2WBkCEqSy4hoV62Sgs4MBPiEBUeyQ8tczXeAP9pPNfyYWd6FBJqLxUh4AgSLc26yFQykpY9fTSf43L9VJWZ8rwz5",
  "key14": "4TK8tyFBbtT6o1wHwatYfJWs36Q3ZMa9oiipSMkdJEN8mxj1JMent6QoXRJqaTs7R4cH8hkEdViGdkhvKKQxhvb7",
  "key15": "3uvqePijLGaax4PdSVsyf1gZ1gwjCSDRJMoMMVt1jTU2Kj3SdK8kaMzjv5KYcmHJzbvVXMMcRj33TRVavSkwDG9t",
  "key16": "5C7Fw4JiJvBiJsHCyvUm85ALBybZR3ResCLg9R6ppas1Q367ex9eoJxkfbkFy96m9ky8rxmeihoDWiyJUeiY9ZRW",
  "key17": "Qis5zG8SJFdtfQd5Z5A4v6LbAao4kjWgKa2DyEQx3BLnbjo2TXCDHehdi1aNCCJUF36dDwv4n82oRikEtiVPQFk",
  "key18": "BEhSUZE22jGEioGsnfNHCzvQepJfDSmYiTUX7wtsWnCeQY83X5amqhzMF8t2T7eCpNwjbpGV3eViw5qwsf3ur1M",
  "key19": "2EMMQN6hdcqu28zKj5fDv8GYgtAFBKBQjcuFZUf78MVW4vZDaUrpvme4RTTsJBHY131e5fxFZEoQ67w8buyoqafZ",
  "key20": "4bdAnJyGLcbngkZh1wfdwAkha3wdRAmANiPmcwaYxPRFff94jingGAfxawwnFVKVbPXmWs34B89AbySo3gXKNqDH",
  "key21": "K2X36YwWo4kWFLBHjfqF8XQ9JQgr6aLairyEVRf744VcPt1Qp76aWHiFJKb2uecv5mDCmqxcN2vwimjHFAEJbX7",
  "key22": "zbBsft6ZSdg3mC279VnUCtYXVtt3PJuqogeyZHDJsZHRvPhbastRr6b5DNP9uKCAvmEtJtu9azQgwSRBgb5fLhM",
  "key23": "4LPnpGW48Wisk7k45SaDVyH9fmeyGVRH5Rj63N5tSgwZVrbz56AgoLZV3wgrC89aGQAHcsQgsR3hJyXRfVumbFVr",
  "key24": "5QkQJBQYHL7Wc2fGxC923GF7p37XJDa56iaLTjD2jBoiLLgZZZbmFz6YNFWq5tpfXMCwiuDxjJph68Bw7w8LFdeN",
  "key25": "3ryDs3haBnG55bNCXhWxYEi5jhxjwEZsiPoiWiGFx5iyqC1QX82w2BW3Ko6toWQaxizJesqesvQqo2cDKhGWn7Vx",
  "key26": "4JgPnJHwgsUjipkmNzkyJo67Uz5ugBqVS83gPa9VGQc3r5ii7Ra2FkNabb21MLHeaJ2ZWcnyXCJXJhETbe7LBcnv",
  "key27": "2fUWjtUbTQFb2G4cqh1qV52UTPnHU5rGY8CRpWdXKtc9GH1k1ZBVJY5PEyrbFSNcx2ZRC4JvMzdoDLGPeSQUK6N5",
  "key28": "3JUCHvMH3n5k1ZohLbZGpHBFHRM2vvpAkH2t2wDqqrsBgm4fV4tWa4LHNz4q8pq97LP45WvdP1UhAUcrbjSUENz1",
  "key29": "49tWYxSCR3Ct4LmYrPBuZ5kzrEuzjV3JWLBPPBtTU4EnSM1HNWujFGvMzbHEKX1CKf1UPSZZeognWAjVvpwZXiZ4",
  "key30": "4kjDSHfSWeXwipK1nqma5dVNdHRfCee1bGDeh1uLmZiCmPsnWzzV1ij3k4XEcTqwV2Q64dKzMTZoc7NGZNAfJZ6V",
  "key31": "MECEr2LokYKrAsPQyEpoJQLqtxL73pGMYSxLRFRP8CK2tNiEAxeEXE5g7G4WSorP6hzfq9sQp2TMDg76G49c3kW",
  "key32": "2TX19MHsWnYLGpU3pGzyj9bmZTGh8ygtsSD3RURF7pJyGAxEeRsdZYBebzGGsLh1hiegsPLUq8KyUFvExRNPjo5B",
  "key33": "3zYcVgDWAWdudSyzSrpsUMrgLYftYcCJq1rRJ3BBjv9QTDWiWKAZPsGPpEurUAoTPuUhpjWZBFTPsgJjfS15KguB",
  "key34": "4tbhkRZaFYJwthxqkC2gRQPFivj738fszJAc6dzmVTH1RLmiaM94afJQcUBp1NJXKFQHA6YYvad7hU2oHZGUBNAJ",
  "key35": "xJAEy9sHSqr63RJChgU2HHfEYZ5jhWPh5SaSQZEjGW6gMynU1VkWKN9ePWhsmTuj1BN8zG4p8nDVPes5ghmQmx8",
  "key36": "5HscNw2YAeZ65NQrhFFJYGAd7n8MdVJ8HvpwaYWeeop79N5RVyEYqw9CGgcg9YUH7MqDQAXPZNBLx9vw8JgkP5pS",
  "key37": "4UKnvN66GQCswkxvUKr8vNJVdN8EnEhhRMgfHdVhWZNMx7AUBrJRkkPR5fJWzjutBdp4ENjz9sPPpHFqgq15sW5G",
  "key38": "52Xxjh527q6uR5a4HPbG3wQsxT9HEAq9JQu1tmC9d3E65GXYVm6KCjE6SeQuSNixjd8X1G2DkjeaEMNo1AMQCbS9",
  "key39": "3Crqx4g4bMvwWrkSTVkmjwoS8REgXPHsddyh284Tf9DqS6Qf32Wkmnbrmjr4TNQ3PiVMko4tjfm3mLD3v9Agbfob",
  "key40": "XYVgDVFUFPvmdxLwBbLtjMS6HePwPgHvCtqGeeiCdhDHzUpm264aEBzm23Pigq3TNp8dZFakgeiVRdqqWgvnnWx",
  "key41": "65St6nGnX7DdiW55ZKxSnqikZ2TxXwpUb9DzRuBXvvhVYfY2Gety1ZQg6Bsv2VppfXtJy49wcCFCXggZKfv8BDcr",
  "key42": "5etx7gvKyumAZyKh6McRrmYoLTdMC1399BNvcxbqKmnqpe3r3iE5MA99d9WRQud8MnEiJNNAUjqczJbFPxqVQANJ",
  "key43": "kyWbDjW5XGqKwgXVUcUWKHKp51SVrAwjvBQTHsUB1sf7qwbWw2xJD4UBYUeZ2USqLRaRPPGaijxFYQeWNUZKePV",
  "key44": "rFkZt1BzqSu7WS9Uz1yJgmoXLZ2VhR3yghyKtBZtkYRS6auiJzgnqSJRFUHuhUsFvJjrV7AcxLJ837GS8a6dTua",
  "key45": "3w91iG7MHHyrwxvxmwXgAeywFHaNqRLgpvRrFnFqPjaviXpiKxRsXMkJmpLup1hwBz4xuUJ1GCNcwTyETTh1PczY",
  "key46": "7ieonRMiV5NUzNndGonfUkZs9siPx9q8rbUD438DFmfejfK1RVvaT95JR4gujX27hAFXtvwXGCLyNUbaQq9cLwy",
  "key47": "4U1L78Kt9ipWQjJrFk6A9XV4cmyGHF7otYoyqAGM7r5xUcCc6bt6jK9uGFRjipP61oui1xz8U9uWRAwtjhANefDE",
  "key48": "9XFXDbKdxGSvwJbUz1pFbZrUakXsc9TJJxE8RXqeAfV82YJJ6KGH7VDfV1Yj8ivj1sz8dMm3dwtsyo9wKsaJgrr",
  "key49": "5pjgP5SfoT5BAkTHpRs56LaHpxHcRvfQY3ug45U2FPyxNM76XYPRkXqdEC2hbdw7qk1UMCAPRKcFyUtPqAjWvjos"
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
