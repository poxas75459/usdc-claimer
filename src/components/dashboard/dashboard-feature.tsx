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
    "5wBQMCEPNVy3T49jcE2TAuJ4fBVY826VoKzLxAdkJev5ZXmG18CJvqnvNg2YjEFBpvq4dVCmDFMwcm7did5thk4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MFJAKbsdVvuUeLgabK7NHraSVx9JY1FQNDJHr2Y2YeD9HfNojBWYi7cPtuos3nigbb3tV4F5x8a7U7onWriSuDm",
  "key1": "xwtWixkSxShNczWLcutoxnniy1cZ8QwUMaDRG9daipYNAp2F4epiR8KQEhpVwDEA5SH7Fen3F6L8WHtaPw1yX1j",
  "key2": "27xDk9KQJp8cpYUzNgrBqDBJNgZpmsKRKeGSLNbQzxhRaF7pGwJMu5RDNvuCnB9aCkCr28qVa6R1m1YKcgELgWSr",
  "key3": "21oLeC7K4sLcVFXro3u9iV3n6kaeqxPPkmnLdLkYdF67A6gwm4a6P6jTxQMFVuSLPPc7GZC9jow4nDMdTzRsP5gM",
  "key4": "4MWLenXn44uTCdNPJNuBLoVfngxNkPTm1otUGQBG4SonsL6sNPCrmyLP8majYqPsh8X4VTA6DGSWVCwwcQYhYrkP",
  "key5": "4S79vf59fL24Gh1vXbGWEXSChLPi2KJx1cG9AhPJBqWDoHD2cLSE7KJDt8PM8xCfzyiXr28uZ1FMvsXSfAxhgt8G",
  "key6": "3kPu94JNoB93e3BTYQo5YTrhnGnqaJNkN215DRAPvrRzHybpG4F8bJXZ5GF7waVH7cCq2eBRNroX3LCekMqacFnb",
  "key7": "45kfdnCLDPhXq862x4TiJL2pN4xq1sKHGriNJuCJwp1j1Mj5hZwMnE6jdsbjLBs8zxL2W4LwEyUHtdtFm6nEu7C",
  "key8": "4trA1eA89zoZucJsP9ZKjq5kKX48jros8HoymmHHkvXYBVyoxnG1nRPp1gKMyJgc2onRUALBNhYXU7AxmEuEkUjW",
  "key9": "3Csd8LiZGUSyqW59ppNmG6cvtwZwAaQ224CXaEq7mvwKv81GP9yUgmEve88wzg3HEczRePJJWyoya3WvoWj3TJBQ",
  "key10": "2bFDruMDygSVSzS6pt9F3rPx48hsArghEMQ2X9HYpCRjqZTJfoojBpiQVRDLE4EZ7Jizj16b1ZHEv6kCBxUGzo5f",
  "key11": "61fCBEnzZnx35ABn13qRHCmFiZeovubfdsTS3zpWR4mPhGPFJCEuF5WTzCfwsc4VReNYHyPRsEtUzvbRZsDVFbEb",
  "key12": "3DXiUgnbWKpERynJz2Gy4zompKPCrboa2idff1kBCgBBEMinQYZiRT8q7n8iPSMzpGTegkaCHPcY1Uiss2AhFXPV",
  "key13": "671NbHm24je6szecYTyCZkUP6DvJS2eAqkkF2t4WF5b4DtQyFf3T5sj6mLxibE2m4MD7xqEtpztCNZra7vbjshPG",
  "key14": "5g1XouAMmyeWr5CmdkSWg9HgowcHNuPEYvhGjNj2mHG2MYkWQGAzaQhyZmWL5AVjaxt5dkB4zDsjicdENanrho2u",
  "key15": "3wHeULrFCa7EbqhnHKrGFqrPWMfWunZMj11HCvWAPgpx2dJc9Qz9TSd9MmzpR4B9h2aB7GiSsXaHVX95cj4ZpXdo",
  "key16": "5biisJQkmtL78vqFGzircBJdcyw3DpC1dq82KP54zHR9insSEPQo25XG6AYYUgewTjoQG6XGNwaVQP9UWobpDkNp",
  "key17": "5zCDy7uYj7tvh2Da3CySmpWjLaEZBfDMuopKkJp8RMY2cw35EDbpKZMFAayr7YdaA9F4RzPyd84K1KiPZffocwoN",
  "key18": "eMTzKQPC1TosDP2ETYbYUTfeJdhfKi2aUKSvySeS8nAgxrh2CJSKU7VWHYQU5a5CyiytD5faaeYhwZTk7JMamsK",
  "key19": "3MpvR2pMYwhUfi4Qr1iwFN4Vd1K2vdWFEd9swZHrsQ14y7wc5b52bgX1Y7bZTYzug7fwgBoyo4c4nxLAUnos1rE5",
  "key20": "2k25sNdGhG8qEWwCHtSzVFyTgDCPCk6wuxrzFq7v8DNkW4fdXGp3CbNmc3BnbCHfW7FdHT2F2m4UyUvkrEXEmyVR",
  "key21": "51UW9FrSUTgge4HRxChiBAPq34xJBrM1p9og7c6DnKaWP97JUbDGJXUVKEsxMBUYSUNtdRcsjg5A4dDVXdw3T2Ph",
  "key22": "4Hav5eqmSqzrqUB4dsquYVpqg8Pekp25Wu1GtLzPoTANW9rnJicsrVWYtv9FG5KFHd738X9pCxpSAqR2VcNb8ETv",
  "key23": "3gNie2FPUc8dG5rgMr9muVYMWseEtzXVgzjPTrp9sBe9rYYhkCsdAEch5EGpoM1PN6J5cD8fF3z7XwDFZAqmddRJ",
  "key24": "hah1jZxUDUMPPFay6hu5PX4za2wVczsLDoUY5JwQoHw3Njq9eJJem9PzDXEqWEvRpW4vQWN9G1RG6UqBNHStSSZ",
  "key25": "xU7quKUoasTHf3j4MWf6xCknruyf3GzuYeytZGMQXRrH5Lw5izB9hN2aJ7c2EGtgAy4iBjYhfUxkL6Wsem1KJYq",
  "key26": "J52xCzVY7AaLajUQXn2GnxKghJUHRHJhqFUNt9kvVykz2T2aH7kVK3M79jMo2pKhXUixSBQ7dEfhiiaWzpvLJtp",
  "key27": "2PfmvUmhBHrEaEE8APMGndUjZUpfLnxzq7fXixATa5wga7vN7s6pANBek2Di1WMMn3nwzWnmVYgm1tUQNG1wbt9o",
  "key28": "3XhZNWV5qwqJXwm7YY2hGzyYckdfGAFMmHbNNU5iCqp1rvtfMY6hVmEt44A2v5wQapqPu73V8rKavmUBHuaXEZ5b",
  "key29": "42nvE8ckzFrprWVF96vHEpuG9SPXosx6EYLKtnqLrePmFB9fS2gjj3q8ygHegheK9oqtceft9NzWnDxaWj6dMTPp",
  "key30": "3QLEbhM3DFP3N7SvdmhhDKi9Z1QVi6Q2XbRjGCr8Jkgcc6gTmA6aRbZtbwgzPc9czc7kVRojHA7gWf9PPdBDsU17",
  "key31": "jrPJ5jXQgSJTFDKcpa5U4sQCuWQWnfityYmGwjvPrc98qtSAYcY3TbDCxXf4NQXmjQCjas3wFYANbkjygNsKtzw",
  "key32": "5jBQ5qf6gENk3dAS8qa5b8aa7LTzwoFqgNoTKahGJ7MVB5htbdTAULVGSRr4cWTXCNuKdnqmwaXnsL1LkPxtHYzr",
  "key33": "3dUQwWjkWrr5aWvncF55nnEd2t742EoZxb557br5aySEiFg7CYMZVYTQgkCMwFzFzB4AzgFQf4eSJxji7kmHWcxC",
  "key34": "3fTZcrxrAtb3Qrxv68UurxGWfz6vmfbAygAegsTPt9JFU8AwZLmaQBbV2NnE3w8YodBGjaVsjsEcetcZnZcLuLx4",
  "key35": "2wn4c2XaFSjNQwcKfV9FpFsT2U2rNLaz1bUXXodst5gUgWu8QRuAJGJSzbkVmaitoGytwkTr9xXb68opxgnnfMBk",
  "key36": "371zbjfRQo8YbctPvaHY19wJPExuuwtMAsQp3sYRJSp96tdesrbrgnohQNAVGDBjVCa6V3VTDc1N4EFVDJVMcgMz",
  "key37": "cf9F2cExCbmqjbRVA5hrSVts9UsuAihfwYGTxd2Z8zT4sMprQi6s1FzcYL41yDRQbLEXvadeqaEep2FneGbyqQu",
  "key38": "63oXs3cTYTMmpQpDp3NJkjafokbX7b1dJCSu7iZga4QKkLvFS4mgCSwUrnZaq3NK39WjQ68DYbACAhnSixiZaEJz",
  "key39": "4hHvUtk7G1keW6wVQjncNa8anBXNZyyk8NdcSxbqAhNtzdmX7nKmM5Pey3JZJ3sZDubnb5z5BXdww6eEPAh9vx8f",
  "key40": "3xGMpcw4xSPtTaeeL9L9MFTLtgDhg738BJa3baxPeMgUW4VGMimgRAMyVm85M5EBePs3Hv9SJecrySFPsCUXQpax",
  "key41": "3nQmHJmLGBNkAs4Vw8YggbBL6rLBt8iXVPUjBEezoYhxSoZYVq8nRqKgqmU4jos6xcjk9n234TR9cpZCLz2GrADh",
  "key42": "4RQWRmQYHd1z4A75e8Gt73QoorHTUCJ5cVnVcyomZUXhYVtuiSGKsfPbNEQYAuX5MwKM6UTMZRMevPXo2afmfRjo",
  "key43": "3Egnk5iy5Whs2HEdK1FYDidHvgLUouNf2nBR7dgQXDSh8ft7czF1u9tYacR5D4VVvzkXnQiDGt9QuBVu4FBVz6eG",
  "key44": "5nNCxuKc414S3j1FLMmbcDc4Jx4hJ4jJvL65LZFfrUZd6wPEuBVZTJR2DqyhxEMKgqPkhUE5VWZ2JUffnkvpjq7A",
  "key45": "5n1YSz6SXiGJXqMe57mbSkRFinp1bHyiVqzwYvK1pkStXVQtkQQoehfTNVKWKXAzHodLmaTLtszSQePt4a7J1vAb"
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
