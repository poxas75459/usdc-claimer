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
    "PEgLzsdvWAEhurrBKyo1mus1PGdGzcVHqbteBt6ThxzjRapXuZkJX2Bgv5C7y1fumKpGnYKNtehJeNeL38yFFqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mn8hU6M3tKZrNs1JkqcvDdkYqtHK9MsAxv3CTMdip3kFfB5HgJfTFzRrhDr2C2MJddK7CFpwb3KziGaXcew3xNN",
  "key1": "3MmcdQjuot5k7FZ7ywtRmpJFr7HQW4vhRfpbogoaLHHJaiC5hx1Vo1b4cpQ2fU1PcJrVzDzxsaXN6X7xJdLkUvan",
  "key2": "3iGy6R83GW6UVg9yvhz9hC7pfM4fGpJChSkt5EGPiE7BH3AYjV83DPAZbdrc6PbcbAEn1z9sDdn8dRAqNSEYq1V9",
  "key3": "2JfoPsh8YeQBrNwWMKJGaMHBKDTpwAPBUcoHYFV7YhXn5HzjnTFX5222aHcxAQnZzTQRSx3k89EPnF1QwhmnesyQ",
  "key4": "S9sySKwtxyTsLQFX7CjBpjdn7zjsgEFpwetEyPqSBGV2fzVE2GMYfVFWhUiV28sudRCHiZnAL1WYa9yPb53QoSU",
  "key5": "2jasXToZpD126cwBkRBj563fpdbxQU6BbyArboKJdKKXybFGqsDEbJw2seFLRUJb3xipaWFmZPKfH1vjZKjGKQfG",
  "key6": "3NoXQ54HGAusdp7U77J7PwoNp7G7yFdsGUoywqW5MoGW9HLsAhdXAxBEJgsZkSpjtUZmpivwsY1hUYUz8PnAUgJq",
  "key7": "41rap27kPzyo7a6azg6SQEKbZFYSKkUBGPAX399eK6gHv2FjKqMNLKsUSD3GohsTjfVWNNfn5DPntFDnTs1vGNpX",
  "key8": "2BHndPQpVGbGu1Sf2C4UfyqkucRjuvJstnyz18Wf6QnU8GfCfnkBeJRNjYDmZ17baN7XWMYdzEbub5V1W9F7k3vn",
  "key9": "45VVUjvNiQztGfskFcXVAccvwNMDW8fDLzacJM7X1CLZnfB5dsTQ1LCnEWkpY32sBowFGWGgjVpFbVjS5dAW7zTy",
  "key10": "5ckF6WM83SwEv3AmKZ6LegjXk9TDErqra42hRJsr2T7EaxgSppeB5hBGoj5FFgXtSaLNZdndyUiNFBRjoUSgfqgy",
  "key11": "9UZDmua4WzsswASKFvF16yqtCgjhzJ4Y5nv1HqSeUuDL2diLwH73xL3PFr5t5MvHfomxif8BSXKL2ntgigiGVvX",
  "key12": "2oWVmbbkFUbEkCD4J26HQodjKmaMzHVTgW8GswZToDKkKmJF8SodSX6V6BF7WoFkSb4TSr1b3CtqWAViYSJCtRej",
  "key13": "4yVQJ9wpxBHcBXegqJ3g9jgBXwv22agzqbU3eJAsYKsJVXmCvWpm5jFk8zwKkg9qpafFuj8E7QQfb9XorC24MyVN",
  "key14": "3CKoEeDxWjsSuQwbwsBZ3CrCAhnFkd1Jdamn7KG2KRdyE4XVaGDriG9YGf2KkBxsCZr6G5JdPjHpvxE4rrCq134j",
  "key15": "45f3kdhUUdAUg6ZpG1yueijBWWXxQVovT8NAdGcqriKjQj1uTzLnx1qzoagzdFxeTEsVn3ou2YXzQSSVbU5i217V",
  "key16": "3X9BuJC6hC5cCd4h82K3poi32gaCBrJVDDFR8yXk7gG1EVEQkV3RQSLT8rqY27ruHhr1Kzeai9w7TJBi4eHXabVP",
  "key17": "5GYSC4zpf6WQhZycBY4FFzRcQrETiHpfUSsowMH9aQMdHububr8d8ov2fyvoo9JdhzR6Shu5amzm7G63SGyPCjTj",
  "key18": "4HVoTeBGjDGNHEHRnYKfAidQqadjsMTZZNbuKPjbvx3rru4ms2YVepEwueWBNAZKd3Q6DRUxSM9NYE2PHvHc9N1X",
  "key19": "4LT5EXuUCE2FmBNBUnjgKXpj6TKkxKYvvGCdn19X3jVS6DW3u7uEM3N9MSyFUC5DdXDzyhVW1z7FqvzzUHZTgbEV",
  "key20": "3SBKVWrSUF3i9BGsfx8CrgoXZDrA1fXvCbSdahQhE7o5vaFjwdmoAqqz1D1G9SDuX4hGKNTDMQJVRGa3pAimRY3u",
  "key21": "2fZJs412rLncvezvyTZpb77uAQF5b1c6fkTQ4isLXWnGQV2r3XZj1riwUmGoNExXaEVKducz4MK2X4SMHkvXLcqx",
  "key22": "3UU4Q4A8CkPkzhV4J4RDJy6HnZ2oLz5eJBHo6Nkpp1FLjAnFZSjVtZ5LyoWk12kKz4qabuKpGLbvr8aX38pJFycT",
  "key23": "2QfJn7UQCj6iKRYZhFMzKrHim4W9NseLtNgCehCJWCXsy67b8nvcaSjervZhiBuFL6iEhgX9fajUQ781wjCPVUw4",
  "key24": "5bddtBEzf6bEm3v92bNg2kpYMvjZuFYZrEBJBoVTyjYAh9FEQHgn1afS9Ly8BamtCMyynmLdy6SQRpzprh7wmfLf",
  "key25": "64dRJY76Qxj6Mj8RC2MG3hBfA1PiyaktGHCYHBS6joiK4iaPrU2XZheCG2GH9FrASjm88VNuKfMvtLKfJoYikLFk",
  "key26": "3MccD16h7E8HY3LpcoF6giYsyN2RqnjwozgVqPuwoQdZDnsChm1yEzebWdBu1XPkfemSqkfKBeYMLgTB336omPof",
  "key27": "5Xwqe3mQKy7XkDAtTgbt2Fd3Z72JKhXzBSaBWw4yQTVNKALMGwoGroMtCAQ97GKgw6nr8DagF1U8jcyrdD9fs59W",
  "key28": "5yvHXBcL9qobh7MFVj7MGzZ5bMB1EW3D37HJgWtcoimLPVG26mXzJ1oyDSNDNtsPjx6y5q5E3Z5iYSHCU7CkY2bV",
  "key29": "Sx32vyJecN4fguezq5z6K2ephrnqzZv8nZjpA2RbHDqnU6qAsaWwAtoUr4tgChLUuwFPbtf3DFAZLj22cMRUWWa",
  "key30": "2jemvgsiYJsQwbGraimXpN2CbJTuLz84EyUpDdABvaA413sN8JmjJPWn97biVb3hpWibKq3EQ4pqemXyr776srZU",
  "key31": "2uyMtwrDA48gkWRm7Cv4qjvGVD2BJgHvbyRQLbTMATbGGMRPZx9XE6ME1dDveLWeno773bdqL9JUjvsb2RR9samL",
  "key32": "57JkNSpbWaDy41FaT8DxNAzigsqdfQSLfjrapLryNqCRXMT4M99fuo8RojJhVpneiPtMYPtxQ5sshVN3ntzXRr8q",
  "key33": "64v3RzWXCm9FZnkCzakE9vZRRGQKojSt6fVUMJA4kwuDyWaNrjH3TLXReB3RGNag1bognfA8DXXeq8dGmRkPKTxW",
  "key34": "3rStg3LshTZm1kKtuteHFSxzyzEr2vjzpCQ578ywVK9pEuuXEqyzZAqoG84pqytT2JeTtw6uVTr6b5WYqhz3VKXY",
  "key35": "5FeED5pYrsaEiqBgVFV4u7MJPgiR2L1Erxjs6QbyznaTaDx244guvNvG1wnJfAk13j6PNLkWNvHufSZrKSTh1LNp",
  "key36": "4rFU2dY3zhxtASfL7MncyKxfpJBPKpiG54m4gyk8sTR77iHXViFyYuVERDDBx914uGVurXDURh8PZcLqsRxFV8G6",
  "key37": "4GPaWtrPkTXbE98TYYW7qrCd4P54SdU4LZsXf76DNwqKdwzr2f91LPvcRuCZ6NU9vuBSC3JFcJiuyi4687DrQcGA",
  "key38": "da9a6SXUKA1xGtNrij4DDLK28Zgm6Z1Pe2hofygfXXLCy7gLKqxAwycHVzuMKFuoaVNU1XknaZrrZB76XpBT2MQ",
  "key39": "NksmuUafiBEWT4uPe6P9ayVLsyX8hJw46vdaJPqTDXrGNnmcVdurLutFLTyrT8QsoAhAeyGH4gMVRDNmgEjoeB2",
  "key40": "3bGi2Y2N4dhh8F7oc1dAYFqMuhcsaVNrgaoniNp5wzcs3QBpMepuwBAqBJvisgPSuHth6GFQh2urJLmKqdiLpR12",
  "key41": "5e4bCF1gGARXHTLCjdAv4n6LysRz6RVcnqcL3r3DoT3xP57todUt7yfKEmUToDMtiNx5c9yJqu7BcwRz8s3e3QTD"
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
