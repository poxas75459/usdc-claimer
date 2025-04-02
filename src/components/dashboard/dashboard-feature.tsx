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
    "pBYcSgx7HbCGAsc8pFG5xAfYzGkuLxm7HPAkyJkXP65wFoWi2FnZxkwxEXF3EDnb8rsbJaQkpq7V5a9tM72cm2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zNM61qh4dQ5MC369QFSe2HACyxMNwbqt7SJDfybCxxeJCbTqur8U2VV5kEFfzqPp6wmstoaGzr4nvUDJ51pc75",
  "key1": "5UYN7agxL48ki54kC5t4CnTXEThr6uxCn9iLMfVJoE7py5v4m53zsfQ4Ur6fovWSoJVEKX8natHaG3gDkDA2dkA5",
  "key2": "4bxcTD4dCdVZcALFrWgUxL3rkyyGc2gnmGcuco1W9Wr94pm6iBWvRuvSKT7qtTC9uCJStVDYbiPdjwJ7HHLz3zgX",
  "key3": "3qmoPZtKaWHAg2DTnNDDJVsFy3cgLsgc4RGqMBUquuvrEKN8t4n5o787VESWtvGvEiHYy3Np6S39fTaVAQrush3m",
  "key4": "3Yg4jRkSZxMUvPCRNgaeCcLDZ5saD7NPyu4Vx7yENYZqSjT3oebmGVQFoqMSgAnpMjCSjWSWBJPJpckPBPK1EfdG",
  "key5": "svAW5HiMhNfctZREZRj3x2iReFCTQSgacZugPjWCWgeCZn5wBNJ1PAUBGmFdwmpdz37BthXkzDP2qC3dY4PmnV9",
  "key6": "3SoGugWa7MefjZrXadJGruNQYwpinPMWdCsevasKrNUf6ZS4h5csxAjn6GywkPu1ka6QwsrLRbmSDaUA9k3CFjYF",
  "key7": "3SynnMQXkYXj3UDRtzWWC56ipbCPfqekZPt5DZvpXJE3ck9cpPESXmC2bUxPRry63nKrgb7rVnDExBKufN7SKWwi",
  "key8": "53yoQFBQENvBJh1jU4oVVvbjs7Dem31WWXJbwdQL7tV1DQMc9NwLa88zFhX3tnvxozcS3C9FuhBciGTpRtkNR8s1",
  "key9": "4okcNtRjSesFbcbGnNbDx4kr4jf4vrjhnyPQ1wkwQgsPpMPeG7tEEpMcYV2tspPaG3VaEQnxLxJEadqUefob5v6m",
  "key10": "3JvrWUYGmZvykVx3cEUfY5oP1oGnKYJXko52PCuP7JPjnXG1VTUDHNzE2yh9U8MyJs6BrUzZX8GN1QC9ZiTpcScP",
  "key11": "4XVJB5xydj3vWqAkbUeqXkG1N5MPgeHhH885Nb6ES2N2hwXcvG76S2SY5TqNMvoU4vvNfdLqTE5U8gcf2gy59uZB",
  "key12": "3k3e5wrdWfdqfbKR7L6PPhM3jo7WNCKCxaBx6RhhtBzpyefYNHyp2SYem7mxx52huSb3byihpT2FHWWyuJv6DV5c",
  "key13": "33ZmsV5CwQDpBjDCG2xTL4Njxs4iCQQDiWCcptug922MnEuVx66Y1KMRRmnuiaMC8bsTKeon2m7V1xCCGk8rXGKk",
  "key14": "21qg3hjzXEB89oWBzMqtieTeripTAaxc56FkeyR9iyiyRPMrd6MCEP9ArgDLxevz659cmfYq8DowKoReBVauzB7z",
  "key15": "3PVGLn8sEkHnLDj3K8QyRS8NQqGGM9HmcqUd874jkYQs2mTR4zAv3ivbozvfq6EQu1vWKYxWPgU9SZPA6WPSCtSN",
  "key16": "3GEUZVyRrr5j4V122aBkvi52zUaGTQ9xyxTofPKehCZku3DWp8bvshpccMSMNW58xptWUkHXqnwmPVQ4h1942bLA",
  "key17": "5pqJ6yo234Th28XDa1HW2vmPiHTBi43Mu3Cks9BcmSC6bcsbdjZ6n9opBrvSu2reAquyenFNM3Vkqf819xrH4R9D",
  "key18": "DpKbDGePhEwDY59EeHjU4nBd2h5imyYn28p6zxm8HcHaTMp8oHYACCFU1jgv5wqTPCEq6xMGENJgNnCveWySWAF",
  "key19": "2ffKDJNfTRvv2kejvgyVpzJWeVNxMvgeGzqxEBThD6pzaafSf8CPZmNftpDnNPrkHVUFhguDahDRJHU1BAczaC4x",
  "key20": "KtMt9n548EUzBLrnsugdwBiva8EiBzEEjizRFVxzFJGWYb26AeTwh1p5NDxMg3zoTLw6MM1cEqPQM7oQJADeF6w",
  "key21": "5LPewGyiTiw3wcynEYeBiL6Qy1jo3yREPFXibRu6G7d6mrqV1JdCqc9w3bJkV2pD446MQD6tFEGBC7mjCjMDGf3D",
  "key22": "5QJe2x5tY8zHTXDnbdcWKLQ9W7XcdPx6PWw3iDQYDgWjMB3E4tyMHssNuDtLQrbdGYWSdWidUdsaSZL2ybpeN7L6",
  "key23": "42h9vXc3GabmcDYLUg53Pa5ZCFJ1DBgzonxnTHS9W6dgZsyu2pkMj618rGk4ukrrdfvdNitDGyGeAEX7vKYKLSzf",
  "key24": "2HfSc15gYtSD2RU2ADexHbtd4h1cBFNas5Ci9fCRbMBHiQpiwCQzwHGRjVFayTL6DFEmoQpf1Yn87Kka4J54U4Uf",
  "key25": "FBRbELUmFhvXPwrTxbnZfLBxP7vgKPLenf6cfii1gomJuMwaKjkrzzNW6Yvv8rrv3eMLq18HUwDffBA5k1bAozM",
  "key26": "4drWCWjr9z97v2XbxkWrSndeKe6sCqSPENfc7zSijPZcwTg7NrrnqtcTbJNJ8nfFqJLMX9JZTMnx3PEPwaPbKv9b",
  "key27": "4PgoUwmo6AmGiMogDFGiG41dYC2bJxPPUqyCPSk4Q6ywrp2TZbf5oVd2qx61kPMhCnZ6fhzDw9VD7DPPq1qPRBmv",
  "key28": "58YQgpN2MRGnqvZnCpRXzYKCt2HVZNwprpC223nQVRRKgLfQszsyiM2bfaL9Mqz3C7EdKtV4ujg2qkheAJxNCE7V",
  "key29": "4xnRkkFSvce3e8rYj8SrRvtioMnBERgpTZaYhyC8GQuHtX9MzVvQdPrjbhgmsihqkBbsxxwUMJcThRpoA9WeWypa",
  "key30": "2935WfcjAidLCBWedtV2jeEbaib6WVKpGTF5tW6F6GjjYbKp7sbHUET7PS6a7gbVzwpeCE2pMiRLje7GMFtH8YTq",
  "key31": "5f5zJRAy2bvGtxSBzHKAECmigNcSjcp5axVWm4XSaRuYiMZxFYC3MHZamMkd4vG9JDhV29kARhPU4UpwYLXHivD9",
  "key32": "4qpy3WXWFk2ULFGWiB6ZBibnfGFUThTHamvKq6buQgwPyvWAmPYb8kXV6wBRPuE3UuF7UvvaoE4UxZun4g2zyDpe",
  "key33": "4xHGrn6QPrrEYBuqpbpwxGcTVSBdQeuzihvPjfNrCMhBkciHNPHG8QUhoHDGEMGXaRYC8RmTZ7rkgVqrHMTMeUCb",
  "key34": "2eFcacyT7pbcjjqW3549PTY45W5HuZUVm1MYbkXmEvENDQ4bPWw428VLGUWrPyKzkM71QWD32TK9Nc2caMZKixD3",
  "key35": "4nsF4KAsWQff5mdwSvFHUntSpo7Aqg6uS7qVotHZEkGjJ2MqC9YY2WCffhemAfRuxoLoGFGTovXVaiaWMywLKQ2a",
  "key36": "4kQPVd4c1x4ayocSchqdghLXidWqB2yGjR5pFyQcneC4hm8ftZVZbNJaJ1Kq6ULrjhosmZMabmLcpUhG9MAJWCu8",
  "key37": "22Pk42uh4YiEj7poQiVFrMnbRMSu3aEvfHfShAQuBgAwVXX1KNVs9x9kRez7auw2225SMz4prTnwwp1QxXsQKfSx",
  "key38": "5ZrTrL6bgPNpADzUVjzbKSMA7KBJSXVZdsjy63jtggeskwevoaqHZQ39oMvqFQrfA7VNsxRF43CZiGv4D8H98znf",
  "key39": "4BSQnNecB8JZ6KBLC7Nav6ScG88Pr4EZJdCuHrKx3HfRg4NRybETyBNWYFHzpJw7hBBLtX1ABtEkeQWMwEqcP6Vo",
  "key40": "3mMGDf9w1v5xj4gKGo5UX4f2E85AgqtUMPdkqLRUQHh2DPofFiG8BLM4sFJzStDrBbna3NCMaNgUNw1oTEEgcmwt",
  "key41": "4etNKTWVAdgmDooLrSCJseTk1Rczjudh5a4mC1fXsFpFcYqt9pium4Yo6panUGdMtEDbfAt19e8iD86vFHfmx7fC",
  "key42": "Zm56eF1SVb2AwPwdTJFSFsxWaANDbsRsqtqV2PUmG1b6ntVL5BoJdjqRj6EuWGjL5FUKjLrJ7rWaCEoJTag5eNT",
  "key43": "4s4awf4unzRHPdLhGg3PyywuhPJh8ArKdtnKQLzsDdZnQ2JhTttUWK1JYSQJXwD4YALEkcWwJqSM1VGYe4NtEUzq",
  "key44": "29Ava653dL3pDwbPWt4XeFJhqPiPHZgz4p8FoRQXcnX4coe8tLQy6YoQNoDYnk94EGzsJZtGFPSsgggZVUnL93C6",
  "key45": "352Jjp8rPmP3XPFtfMXdQCxFKPLj8VvK8uKzaJXMuE1sbN3RgJJaiKKQZHdnvVE7yWpB9dVzdALFE9zZ7pahNryB",
  "key46": "4WNEEAx3a6ptcd8RmFNRhQpdmvsJL4Tkef66tYtHUZzKdRYHAPz2dF2dxAsRhLG1pEaAV7srvQ4zWNRH9pLWUdTD"
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
