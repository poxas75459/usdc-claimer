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
    "xSZtFdFrJVEHA83hscVCXEi2zdCFWpg6kRAtNQPhW9DW38wxfnnZ83wkTd5HgtBNihuUjfoNFedgCkkhQpfRpyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZAJWQDkxSx7boaRr6VovxLN9rsFHQzD4QqihNvm8ZPttidWdMVV3fGkE4NSuubaTWdh3YvtZi2XXnoZhw1uYmvq",
  "key1": "5wUD3QXsoVDww9T7WRQg97Suqv5RSmxg73NV5unR6Q9zx2iJakyP6z8S2PWszy6Hm1mi7Azb1Ef7YJPtny2Aj3ZL",
  "key2": "4AgUEu1ZL2TrGboKXYkY4WmmeuyLRxEuLsfAG29sLYwyggqCoXeraBJPiy54TitsK3MZzkP4orxsvYGW2hDLL16d",
  "key3": "4dubPwtPqc9FnpusNySDKorxZ9SAZtpW485tNfX37rb6YPuWwM1wkD4QoxKvWhXrSPSmyBhziB4QNoaZpyc4wQVp",
  "key4": "5SRZghgwHKpznVs5PW7WTyUYZ6vj81Wgjb1LLVm9zhXFQNNK5DtFqWyPZ7vJNePTFDLkRNZtay67m5nVTjP828rJ",
  "key5": "51nxodi8cHproAjoenABWgzDNAamov49NvEmitJjjA7dJsTDifnd9uaJN28pbkVEd3U2nGrNgHhJz8Ce64zNUWZR",
  "key6": "5M3S95TbGZYwPG3Cr59rz51CWYeeaGygwTABzLjzZoD5EFVxWs4D4UWWxyN1RPAK5M6MBS5TfREvCPvaRRNhbyxh",
  "key7": "3YfuGohq3Xhpdf9wwYudAd8U2MuATFuwSwYKcGjbJyroMJ7DnScMJExGpNVKjw3ZHQanDfy4tar4xFMhfmLov9iw",
  "key8": "62vfnZA1Pa6cnovhnr3Kxpk3aK4LKaswnvJKePacddJL59mD5FC7XMbjzfCLGYeSFQ6rxD4QYqfwuFmfWy3ms1AD",
  "key9": "51b8w4kwxzowTconX6Myw5HBiGfWWEXUcgPthcPFwBbkJhrnk4jPU4tNB4UE2NCmcGsmWrTvYd71ehHXBGgy8bd3",
  "key10": "3HPhBqJRAvQng7mWqBp8JveCsFzUmAESdSbfZPHLPDWqMkRZ5A948FdsdfHhe5GmWWGX8h92CVtm7UngAQToKFr8",
  "key11": "4K4XzrtiLJJN2uQ2yUUQ57sjHB7xLH2MJqyZukPpNLQg9pH1MhpLg8Lq8CCWyoZHNGKYGGFyQNQufWUUCCFEWQeN",
  "key12": "xoGzkT1oMYLdxKm1aTMSRw4qE6htz5jcKPoGX1SbaCTJ4J3hn4MwcsLhrdtA4bbgt5XXwUSFRrrkLn4qVTihZkd",
  "key13": "543wVfzxL7nivA7sqg8AN11aVnY7QhYVx5dp3QaeSQcTbvHCcNNSgJHbciQKhSxTXGiCqzaEnhXjTSnuuRZ4qUcG",
  "key14": "3VLLpVccRGR3hE3ADSsHC9mNtnnMvUA66UdgYbdy6JwcMjvE443aQ2ajCaC3xPr6Em2Dc7zSWPP9sra1NmSvSRnR",
  "key15": "2WYNPFuPJuoBhXCoPffads24UFQZTkSm3Gxxb47C2nho1TXZZj2gyFQ7phm8EZwNdYSaFGfQfRmcfoqR8L2PVJKQ",
  "key16": "4gca3nURx4rg2DdYQxUaWWY99rW2jJJUzZi51r8kMLzyQ3Kdth36dtpyLcejsq3euc6xds52F8eG2ZDsziXz9z1y",
  "key17": "2XomPxwd8kdCLHvHfvK8mPQfC7CEupn663jCzWX3CvdHPwTkAwCygyerhAz1Po7vz9QMdCxTr6sFSGGwVtU7KN1B",
  "key18": "uLrqjGwWU6yY4GpRwi33Gf9L9DH6maEidwv7zcpU1Sp4sZ5zB5KWAtv8X3G76RP6imPrns2BCSM3yvwETS9HqBT",
  "key19": "4v8J736mmcgGgcgfLMyWSJZ62qPPEUKnHzRBo8JbKEGeZYrSkxj7eqGjEkXucJeCnhtRqCJKuzNFP8qNi3tEJeCV",
  "key20": "4a2cNuvmsw6C1uR7X9j5NBVX72mfBJHvRJfJyiAcY5r4azykTXqR7mS1tBcBXjWE2AUWJeaph1bhdXUTodG35Ttx",
  "key21": "52eDTpSwuHXw7zNDR2jew4dDqezUKdWCJwsR4VDGAe3qnh23DvoKY2PDvEB5TdGEYPsX6irag8X5UFtH3jBbEPsn",
  "key22": "3AM5JiJFeSSk9vtnCqKcLnGXDVRBM8ZRDRHwmjKcr1q4xZ2Qmpa1vhN6pXetSuzSGxtdx7QhseforT4s6AGEtSMY",
  "key23": "o1Bq4u4Tcgp4TE5U5VVypvuRGbzdWopgq6cakGBA2zymWZVFtzpYUjcsoF9v2RuCmsNStTrPTrt5tD3S6cvhnzn",
  "key24": "2va23xuD2dukb6SLkSASBQhCGbKcp83rGm6JVx8zhBqgFFgJ2XeCv7HQRJEQtr6MATQsDkkvHB3ikDithgzTCzdE",
  "key25": "3JszejzVyc8SgBGC1uMYBiQRov2fUjkF4VchQhULA2bVVzTYRBg5MLeRjXitJPdByeASn2UauhHZcvNP5t6X6a29",
  "key26": "4XW5LQtsaEks1rBeFSaCvKqLuE5TsxnEQc6sWkL5D4bYz5NkUceSjdBFQX4pPGZnyTyQ255gKJWZxuZwyzYpNJbM",
  "key27": "SmrF9PB9DGaWJsXTHFZHvBPdhpsEShWchyBLCDAa7bzJcWbYzf3jccLj1qNCk3EQZYNUiBBWX6Dj1esaiP7oS8e",
  "key28": "5e23pTjFCjBDwhDTGu8HbMvKBYwrMA4BGXiYq4P1XwKDshwVrZKstAwUv68fb4jphgHpVqcUZq2w9yvtCenmmaCe",
  "key29": "5bC8bBXNGvjTwoR6xwQVSqpW6PkpNP4H63tHQgj9eXpGR4vDTqyTnuyy2rfQfBpRJ1rC8KqgzJphDpzjhq9vAFRJ",
  "key30": "2F7tVZAQwqTE5dJmg25VRYMnJba65bswcpvYY2iTxzNScjbq7hmfGBPttDAeZDnCsErzeChSrvUhufhoNA49WUFW",
  "key31": "a5c3T7re5uKgy6SPFHg8FyTYNJAaKLPcvzGrTbSR4i4qNVXm8VJ8eZhrA8YqW5j9p8oMNJGbHoyBaDbtYrN1AnN",
  "key32": "rvRexd1TTzmTe6HmdNzNSAtVMsv4h88HD8ZNYiQYMwA8UCM3zin2kQzjurrDjQj5Y4rM968tHLC2uwuvTaUVG22",
  "key33": "4DrZ7T8um53rzwrmyHQxih2HbSCYCjm26nMKceLXedV2HtEeF7eCDmkdJqDNJkHggDp5amkG7mAwtrzmybwFUDKc",
  "key34": "fCDyfGuD4pvfpjRsdwwQLnyJcADNyxjVvYU9ozT8nn1nh5vNWiUhhDcZrf1Vis1GvFSmh6YYP7j4aQPjfZxf1Ws",
  "key35": "4mQt5v5bJWhikCKAMRokvER8TQvWcRbVKQb2YTogdfXEHaKdchdeoMc36uhuMV7zpfi2aCPPASSN2MQHbsxtRSzT",
  "key36": "R9m1mYyrwJ6XyKuuMRLp7vzJ1a9xVVTt2huZysNCcSsQ1BHkN3bFxix4cMANF5JKjdc7hYdyr12TFZPKZrRGwZm",
  "key37": "YtLyLTrPTH5WboYgnBdUrdeESZpLHwnxJQycbku2Gddvqi5wQ7hTZHP1xzSJBFjhiFuE1PEfGRLhwHLEWirn1Ex",
  "key38": "36jz8F6au79VAwoGaMdtuAy4VL7E6Ev5iWiPcUj6YW7EkeWhwJWt1cExbH5hRMWjyURTUd2pWphNVRuM4m212hpU",
  "key39": "4bYVnywh3CyMCNpGmjkLd3rsix53MxzYsCvpVFQPXSxWnW9eULvpoCits3JyoAU1qk6v8jxtq2E8FPtcZaQ3gvLu",
  "key40": "3jKdMmedTi3JRAV2JBogrXLQoqDrg5x82TgatWBsqH3YTQZUV2hjKw3ezgJqhTJCKbNBRJh6QN476GcFgrPCVDhS",
  "key41": "25PsDpqtvnykEdBNPEz2r84C2CaDH8QHuLz7ypREW81grPBn9tYpaTY7DFYtjBbaez89wrien8xZgznkCFj96Cyy",
  "key42": "3Z2fEQAmzbw4CPDivVtQ4jwJfgQcvegS4e3eDZTsnz2k3EMQ7ZCvgDYRZyacHdgPpGrMMeCXwYqERnMnyBR855Pw",
  "key43": "2m2Tyiwty3QDmi7F8dKJpAinipsg6d1pH133egqqwVrhpuhQ4LQn3Uk43PgmenVjFvnVUE7Ghtrm9HWCYK2HduPg",
  "key44": "3eMZfo7ti4gYEGH9jPoJK7Szu4oo8xStAAXkvyfjigmxQ4s4ypvE31rzC8FJ4q6mziLddZpuV6Zr7RyjTksNiwCq",
  "key45": "2w1nhD1H8VAoFQgsQfCMmXGSLsFJ8Qj3Zob86Gqige1zXXwGyQyYTJBfzEU1krTYwkSFB9pHsU3cpB7UWNu1j5uE",
  "key46": "24RsZmDseKR32ypeTLgT1DAjWmDjraBP1Bfbir5woLhrbnJX6GbgAXsjzXk33rT2re9d7Mq9M5WzXvMkVoAYXH9h",
  "key47": "5WQ4yys5AMbrCaWHw4UNaPjjvqoBBR7GwMPgqnQYdHLhE2V1oBUPBNt6RJmfhjLY1rZCWRdTEUeRW9opJeNaUzGa",
  "key48": "fScNVZdZyiwMbYFBo8txyKooGL3R2YmpFTtMNa7iaLHMPiXaE15C82srmEo2v9HahcFMhUusjkiH75W2L41V3jx"
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
