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
    "3LQnwwfr9ZHHkaRLbbs7uNFdJrbUkktu3W4RRLX5kNjsJ9eNtkXzbgFxUbQzX3FbfEweUV7Mcv9imYA2Q3Xoa4UB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9VCNcigLnT3c278cQeKTpPyCiRXsvyk7NU5hibdimtbh73Risgy5zwea8NfEzyGVRY1WicQ7aSfVmnAZkdp1EQ1",
  "key1": "24Su9BofTaRmL6ybonZSikNQ9ZcX8dh4yj6vRaVRwoci4AaUQpEpQcKFLGCehByNAuTd62JG6cxFct89UWEcxrJ9",
  "key2": "3eWDYhJMZVmEmvqEABJLREgYkkR9WgDeaAH7ung9115XwRLq2eQfMwT67pqcDr7oks6fZ4FEiSDdXGpKcNdSNCBT",
  "key3": "2fUppgFPoTbRPiyyK6nBU8CtrhAMvnWx1U699mtHSrYm3q2jBUbCtdGnmJuPVLC5eRaTGR9asVQUgY8tLZSdoQPL",
  "key4": "24DV7x7gEXpFhb4ZgkPrPJPqv9PGBszn4Vfb27gMAyz1PM94zmduTcxEkBquKEBrQYG6D3CZtHT6TSLtakXJ5bxw",
  "key5": "3oyWbuVP7e4BsuKUrbBv1C5Qq2XhBDcTKKLb3hWzYCDQBR1qN4pe8iMJj2fsaa5pTDcrNTDyD7PeoPQQuKovsTNN",
  "key6": "5W3oiqNgywuzZxdys2DzsHkZERWyZhwBWZaxTNHDUyQs76ajYQ58TpDzVpXuKa9JUyDURXarBvFQTNVm8WrEyFPq",
  "key7": "24Nqz6WTSXTzjzrH3zFX3MoM6C5aXt7QNE5JvDFpVVHD2n7Fu5T3K81Qc2kVVJrQNdhcEs8vNJ6k62Gw63Ro4szj",
  "key8": "3C4tmv7vdp7aDrBFymy9UbGx2vJT66tvtB7u7qttoWhpFKaeWCMzU8bQKRMxp5eKHWJqjhr7asapcjVPaBwyfqXi",
  "key9": "4m6CCaRre1csFWXk6jRKBUpvBMaWvpbtmnUohL9Siq1nx6RDmdwDKso4NMtoTPmrjmpAF2ZUHK5DHJZL3DF9JHiL",
  "key10": "2EqCWLQ32UTgfbzPqjrjwD2wBwhdw1ZMNucahdJVvyGruUN7iPv7EcWDw9WsyHqe6YxjDT6itTYYkKE4qqFLPb9U",
  "key11": "4F4N3RJ6TPsfvT6Nxm6MGa6dqK6Xk4peQnrCN4dUPQ5gU55bKCcAkVjvEf3tbqwRhS2PALLFchiYUuW4crRD69Z1",
  "key12": "5GyVWFNKS74GgB1Cx4SpXDdFynTc7Y34nD33y6efjRwdzwRHPaLBN27qsNSGymCfwqpHMFSMHrLmtYfbyabHpbyR",
  "key13": "yREnkK5oLNSw5r6sHiG83e484My3CnFncz5DntLuoGQiwH4Gn3VZxaAj3X3HMUmmnoDPK9PFhycxQDb6UeL6FJH",
  "key14": "3XaA36HQHYu6V14HHVm9iF9BTwS6GV6xWUFYY8ybP31QCBYEJZ4xsUSkeyhkGFsX64AGq1pHF39ThupcD8WEHoSp",
  "key15": "YktWs6nM8vVMx6NcSWKWGm3k1ABHwooxdAi7zHQcZxrFcaepTpjQL3MeyjNCnWTvevFvwJbHM2GvrQEiRYmLaES",
  "key16": "2hhCFoWdHPxAnTDXw2JfxyDSFpAs8Ci7gtmbQ6ax1U5EbLAEkyA2r7Nqa1sfyhjAFpbdg9TGXMH6W23Fa7sf3cWY",
  "key17": "bfaS7sPz9w9yWWXQQb5nzmFF54YmccLnkmXCysgzREGHU5mcgHMcbE5jL3w39hgc4dQfHkqU3Tu5vbCC566uXKd",
  "key18": "4e5wbw1hdtNFsbXakKC89MZphBuFywSTPBcoPZvLTaTqn4yeusedpcRRztF69s7ztH6Js5uZsxUYBLVkYBB5DvD2",
  "key19": "3ec2rh7ZVP71hSb4dyoYDNKHtgAj6Z2zRjBKuXckfydpEbsehgUkhyHRjNYrky26SAsRasN8jDHJbT1M4B1tFkRR",
  "key20": "4Sz5n5Ly8kytJfAvjUhv4m3Wd9kCum8bs4WgWjXVkcnqcM1bucJxxfEX7gQXBEQrtshySXaXU3yKiegcaH9Nz9Pc",
  "key21": "4ADJ3uogrHT5pPvdQhwUhHu9D8aHKjMDUf1g9c6PfMdeeK47u2R2W6eLPSbaX2UJnrj5uJw1sW2PpGTc8KJmwyf6",
  "key22": "3FqgL3Z2GcvAkY6BWY855oo8E5F7F88XhM2rZcFp3zckrSArqfG8NfRRCTAgEWqKAmWZEzTk8z69rR4xmA2SVPmo",
  "key23": "33nnVeLb4EmAytSJQrCAGYcT8uqvP5fmQyheC5H4rqxTnzozhosWqBddcK8r1d4YTruCNxtEmiLZ4L8BqQeJ7ucn",
  "key24": "2mLCMoQwJqb7Z3xHmLaEmTiu2RTghZPPpqR6nUbHmMfmwFGsuN3GAnKbuNtC6uVcTT8wkUHorqBsfEUcXXjJGagL",
  "key25": "9BSeLmNaA6wCHgVCNbVSpgAE8juuarWaXHQLWNHBJtn2ZXrgpEpWz4JTCNtdFjBDZnuZDZ8iZaHJ3mQA57RU5jr",
  "key26": "3qxjpEaP3KEZtYdCS346wP9wi7uXg6ygiSEbyWuSdVSb7Ews3zwtHC4czsNvPsDMKweiYARiuM2UVwDAD8vM2D3T",
  "key27": "5YAkX6X6a3Pp4Q98pPDN2yoQHBa3eCgRqRDcccBzzdFU4x5B5FUatMso9vpD7fva3yNYr52D2G2Dw8HJHVmZGZot",
  "key28": "53AxWqmFh2ggj8yVLLrpeFBcLdWXJzN1ULekbpcsjprjnC8PqSM4YX4xfxAnaR9jahp54jtruugPCnKz12nxRVix",
  "key29": "3teCzJ6P9JbYuhxoUwdBPpEqcUMM15R7X3JNt2jZiX1um49ayHct7CSStMmqya7oqBjmzW6tkGUcDPcahNGr199F",
  "key30": "2qif43TrH2LDjkUetLra3n8pjivF5TJWJaguYjDPiX4RexXedQC5bnddTJ8Rncx77KmhYe4mCF1ohX8viemJEL3E",
  "key31": "2JWPSLR1qn2CMEf6p7m5WSkhqqrAXvKwTc6adjPy6JRiGETPZNfCjjcQywBJm33zKoYXYPZxy2QZuPDF7RHoBg99",
  "key32": "5G85jvyiagSPcLNw6BkZFAPYqXRfzGXDh8uiQkeyMJ9qauh1e7y69NTvz5GJx4ASsyFN4VQTcj9t8Wpbsbxax3pJ",
  "key33": "64GEf6vq2CNZKFBrZFcczbvJCoJ6Sc2Y8VJUbp59egsvb8RhgBgpcGGVKbXo96VrhAq9ogGLsUXYGjSdsUV8stKw",
  "key34": "3z12dd13a42q2R4vk8L14q1M7ReKCYhFcL7kMKGHLbyR51GnyyiUtdk32waRhXFKKZkkMQFpqYueg82KY5eW8T1E",
  "key35": "3pqCjqvtWZtgQma9yCdLCHjGMoq3eFNGXTQFh9VunmjACtG8JgLPtNsae1kg1g2bKWwdpiem25QP6dcYr2BxyGuP",
  "key36": "q7e16V6qWdnxJW4oK5CYSNymxhLnYDRKWEQQu5Tdtbp5bu1sU54AatDB2erELnzBvM1udMZrUsrfCyqCBpmneaJ",
  "key37": "2NsDxFnm4CKuMW6VpszS3WvX2uVWk7DVRXkPYyQHeMdtBv1rAjgCGcan4Cy2JYRJvrYWQnBzmrChYjdtga4pHfNA",
  "key38": "2BPvBZT4dNiVGFiPdnRF2sW4y4dCwxNUkxxpokKMFT7ZsRaenoxG2J5cSArwSAtgJ3f9mupNz3myfdWQTXLc3GYA",
  "key39": "49FMyg2YP7GZkT6bBspj4bSrM6FmyePK61yxzCJ7aCFKKJVsyw9Ykze8XtcGXiZugNpwWJkHDVjaNESwtm1rXwBR",
  "key40": "YtAWtjtnuu4cKYKJ1dweAuABbLtDQ84oVfC1rZtUJ5pL5n7Hsf8jKNgxhPVwyWZkMwHL7yqKU3snQs6bJUgq7p2",
  "key41": "XkYSWAiCdMr7zFDrV6gGNVqjid5bKThotsMNd2W5Ln683ku2chi4294eiXc92yATizoGhgd7BRfozdBAQe7NDZE",
  "key42": "3nZMrR7b1eMQjVN3TgJcCE8H571TfwYiVmvK3LhdLuM28pGQ3fHwsRzNfz7mbpp2QfeqkKkrAEo1PJgdsCqwGBXi",
  "key43": "36JTgxQzUjSPa26vMfazPazd7NmiFTXhRynZaKUgU9zZfGEsV2Ua3SuUevZgPfMLMsUThVCyhwiGdKEF49KQwXex",
  "key44": "2UREfJfuzFYEtk6aaJP5E3VNBKfrmAG2xewzZN2ta5cx3uTdTM8xkUnoTJkdfatooehDkN98eRSGtLuSy8RvEbbW",
  "key45": "2PmodpskKj94vnGB2M6dzf2YKdD5CyZz5W44XPZjEtjLktkAf4TcA4XaGKoj9NBpaVQzivesutEWQD93Y6FawGGB",
  "key46": "4oHfqbviSHdGrfHxKUX5d2WF9VuomsP3XNbmgwmxq5T48tjLrk5P5wgkqAbTUnGempFeZdWVCb34TpComiX6wR66"
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
