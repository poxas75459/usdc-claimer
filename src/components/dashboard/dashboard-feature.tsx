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
    "3BiUPNQsr2YWSWTCD8bUjq86UqMjEC9GTWbDL37X8RpKSyu2QztYShvxDyP1JcyJuPWsKuurhbg3GNnRsXWUPBai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mFnxprykk83RoQtZKgrVa56HfhHDiD2hprRf23osw9JWPxTmnJy7ac5oY7e8x8dfT2eEtpXCK7oP8tFeoaK2s17",
  "key1": "3YK6A1Tu1hejFu4TKu8JC5uJfMivSBkjwLWqJqEhdKARapRPvDwyhemoYRSoHffNbF6p7zMjNe56Zdq6LCE1w13C",
  "key2": "5ttYh5wnffRLS3GmTq7t1VCcohYBK64K28dzLJxU4LtekmFmb6qrCdPxKLgT59h3jQ4YMxMDDQ8xMkiNex3EYktq",
  "key3": "4Q2RfWTvmy1eyThtuuouWnEGyK1fYjwherRwJPz8QBP4n7XN5fp8vNzXbyXgmK8HyepWRQYu64hLKnsK5BYFcyDc",
  "key4": "5wGv8uEL2efqZbMYZnVk4dG8fVTAZMrCQJ43nQkUYwhumBdtiKiBVK6dmvRhpDWUp7RxNrt65kJcHSXAXMCobYzN",
  "key5": "4HR4rSwAR6wrSHGobcyJV5jrYHhXNWFey9e5iQkbyo5EShpJdLNPpzu4tarSVcsavkAUZdn5uJAS9tQ8zGRqnVTM",
  "key6": "4c9HzEi3mKB3qWeZNShQEEKm6RbJDgjofh8whDqGHfEAS6Pd8n2f2u65NSfjm79wLagVvGwUg4hhwUYXRi312h1x",
  "key7": "ewqrr4h4tE9E6XetTkGx4wdfEwSqihJvMYHH9wBbo6AzCpcRTQnxmDrmRrou6axUYd4ddsit5Kp1FcGpUYf6txv",
  "key8": "3fBFNJDcqiNP9dvp99Z9ZGF1wVvVoCWuL8S6t2mwe8LayMYwWS2VSDmxXep56bnghGnnouTXNAMLHr7Ur2GXdzw2",
  "key9": "wmWtAFuaua7uFUdwkxnuaQihJ5NWeZwU5eBPSjaWF3fQebcgsfgEuFuUU4YvoyWXAwpxTXEBpdkPNbrCBqaWutP",
  "key10": "21yi8YjZKTL4Q7YVuzhTRN61BUeJezxAyrLdiZmH49PKVVk57Baazjicde1GzL8iBQLK2ZTqzYVrKHisBk8mZ1VH",
  "key11": "4CdGDVxpWCT175ziLvL4WrAZpMJ5vymVuSEvnKYvS7TiGToKgMCjespVeeudyUrTKA31qaQNsWiBWfeS42U3tp4c",
  "key12": "5kSkhoyJoiK2vCQXgkNLhRuc1REgVBgujFdk2BPk7a8vSEF753StDZ7U56s6Jky84nFSrwocxKyeLHDsTRrK13FT",
  "key13": "2v3npwQRWX1azuiyLgXXC2hyCmZzbNGbSeSheAGYouVNhuv8kKFAdDg1L1gKZzFsU8E4BiuJx3oaPkcmRRf7d7ez",
  "key14": "62oeZ839QnFRS7trF7vaZWqh9cDKB3LMSEuVWyhyhfugsrzeLuXJFGqHmsFskATFL9aq2J1PfcNmhnkCPn3bmSoJ",
  "key15": "4bFJ7shFV2pkdmKHbH3wfgmQnFrEombNJKvzMkNSdtA8cV7yzGVZoFLrADy4qsphiYwLAP8hNwejdLtgcCbviHWe",
  "key16": "3Kptn3hhtPo7bM2K8nivtWuUFY1z7rB4zVBU3qQpMkyqq7ULkXpRb4sCGCVWRd1YaApNGvpswJeaexcNTvNzKNkx",
  "key17": "4XcFFJhkbm8DksJAHBtYdx1NPgFLG1ahy76Se3weuoFmBfX3NfuDQuXFZu4k2WikiZuRkStJ6zVcxf5mpXJeA78R",
  "key18": "4PdjMAD9qppapCsMQGdxtDxfA8Z7wWn1D4PD4pPoC222WexwM2rCiSDdTuygHMLLafhSpSj9NivH72rxEmUFarXr",
  "key19": "aziNqXLuV1JDbXmQ5PrJq2eKrnX9MzcoC1QVLq5zUoJXR8Ga2EpMbC5oiiPDotiAmBnwNzpw2Cjj1VN8nVMBD7R",
  "key20": "2EwEogX3wFTdTbcrAjLSi6CSJsskv4Z76sgycThXZY1VY1ee2gnVDqgmsWoHZqnpCFhzUSabQTPhNaLotnmqUB9f",
  "key21": "2k3otzbJvRpWM97a8RAfngJncD7wiXEsda58ituuHMgBHw3Wb3iSTpkMmnZ3yVgusWQibo1GVSKsx41yKMSHDxac",
  "key22": "25fqyAXKFpG2DcMwSKKZNLuhoexxUaWwa7PkkVtisLfDaw3D51L2oAFQj224MNcZh4XYCcrEFAwuBnrajabKBpx8",
  "key23": "vTAFeGXMTQ1hWu8f66C7UjQN8J5vJH7h6vruYFkczcemyNVXJTkpHaywaXebNst95gNwMvdPfjQW7122kfUDARS",
  "key24": "2eQaHJ3bpmpzvYrdzKwTjqgaxka5Svgb7MTq2SzcrwKL8h78eUZm8CbNnurvBZ3MokRgP8wnzi2yibRhxXsmZzY6",
  "key25": "4BKf6NXjWTgUpdh35HSfmuDdxhh2prf5PRPe7U3XGNBFCaAXQ8n3zvPUXsttaqc7uNbEeKZKARMQ6bQUgAMsro89",
  "key26": "g97QQVQ1WzzFwaSRnguzy8MafFMymHAgAkoDbkLZte3FuQQkzmFB8uy5YAbL2UKt14aZuXSWjGyY5vG6TC3xeXd",
  "key27": "57wdP3iqiPGpiRBbUWuaaL9FQCwc6jTqqGjtcjuyTSP4nSSmho1ckttP672ffsDrNZmhDD6n9FhS2aNxDhcGg1fX",
  "key28": "37ByEgJDk4BhaLYBQpiEk48BxfMWo9eAiuqkpgyRXgHd8vvJPU79E8v3rV4gfC3EHpmXgtKCQwB4wqrPD2aGNa84",
  "key29": "48rVWCyiUgXkYjpj1VERQZ7mcCpQtgsuWUZr5cmEbb5iWbJ9msQvNPUs7GqPGFS9EhESge7NymZ1riZtVcxX8Qp9",
  "key30": "5Kudnas59aMVaKiDrryZ3xuXbNoEF33QsLqEn2ZgmDGzkTG4yZx3gA1FrGJYDU98QdJfG1t2MPErv8upp1NvW4T4",
  "key31": "4dz6TQdcPuDxByDVrdRocJfnG1vstRtJqFTcnwGPAmFREy2EMh4nAvQN1nPCHwjZWgGiqzGJajyUrSatQBPE7v5w",
  "key32": "3YUctvUeJrqXpnswACecBJYAuhAiim7nuCviokRscxW4KwmyGeXkjuBn3vXaF5AQ11dR3ec7axsW5cKqpXkXngB",
  "key33": "4mn5LsB9b2wbxo21yH6nSFTGTtadA5e4pyQXtJJmynHB1Bi2MPNnfUENi6hMtwHjp4Lj854XLNMPyCZYqCiKwasL",
  "key34": "49NpbDBJkqrt5acHtvfYMwKoudZSMKmNkttSUmKGUxLj1BEprmoMVnLzqWFqUAx822hMqHPgg6hbYVjURFVtXoXL",
  "key35": "5Rw5dTtkTvZ3ZyjicJtMV1Ay9AnVSXEEyhCo1vb8HG5zz2pMfbhzEa4c2qCVraMkmzycEsPZdT4M77aBa61XvuN8",
  "key36": "31dms9aZy7RvPwsoyBk3jS1SPpvAQ857atv3PAWokfWihqwz2YC5YvF6L3g4HV5fBeJFt5ZAr7UeLG8YBJ37FSGk",
  "key37": "efJ34nGvcmuatHUtABQu1Egt7BwEV4CBZjoQHYQWEp5KvXX5wSjgKY1C1E1boWtvw61PUn4x2TffUnAvxoRCZYJ",
  "key38": "5uVNKJJmcTHqdqePKv7ExxBMSGSKwjyaeBFDfF35zZq1BmNJb3Cfesp8gvDEpwRNWLKpvHG2azywRfscRpRAkazL"
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
