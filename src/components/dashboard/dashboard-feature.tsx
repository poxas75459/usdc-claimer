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
    "w9yVgw1wpDR4YKZnbok66dZg6QrUpMsw3hx5ALzFVN63Bn5cfSG2JoFKBLd7CHqL9zxyBjXKFhqwq29mcdNYQZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mct9fsobtxuUYLk7aAXYeTDpD4xA8nUtkiwKaYjBghiwCv6HovAQvMLP62WtzPfFQwcNEhnUYr9cp9H5DDtMzWo",
  "key1": "4HKc36AYUpqVjuad2MiDv3jEV6rZrbS1cQstfbSCc9LtDxwaLmA8xZZSrueShBDsshBv39BGbcUqfS1UH8LnqH6z",
  "key2": "35zoDBiKVChE1PNqeWFaJZnofLohCefxT61A3uz2FHLr1R54QCfTB457T3EwAKThENCZesc9KPCngT2mWn75c7on",
  "key3": "4JcWt944gmLR8zjFBGGWmWM6dqMLygSQnHkEZpFE5EdNqsznv8hZh88R73tfKTLjfYkR7bcreoZczBYpazzvtgfF",
  "key4": "2DKJauNPBMu64XoaSkVuDYfZvqfXbb1YXSPDQiKkyT9MaDAyyMRmWHrw8uRFVarHEFK7cJ4kRfe2gnJp9gs87rgo",
  "key5": "5obeScG3MdBeezehkFk4Pv451S6A9HfXnzgHQHnS7dhTDv1GpvXc493biy5U3yPpsG4rE8HcEBAAn46oPnrr9eDk",
  "key6": "4TJiPnUGMuDXd9Yf6tQwcHbjB2g9MN6UsRuoXDpKxAyyhwQuXZ2ZqUMfVgyW2JTmtgtqsQGuJ9RVQnkf8kjJfyG8",
  "key7": "2L1xpN7w9f6mFPm734uVnFg8zzDMNUEwMBZzCmc3oQ4SBn2x2dcrmxGnveAwM9FCD6cwWCaagQB6N2qcGUtUvycZ",
  "key8": "2Janj2Lym8aY8UV251S6KkQ2zeiXgFm11wuT68Br6AWGqzaSrbk8FHNjgogn5aAxnctdEKR65dbmYVczwhSkGbGF",
  "key9": "AQC2G2kD19jzWgMvNhabQRstV4MRopCPpEKUbYfjcH7iYkiXRFrS5Lya2zHxy96PP31nCF39wJX52Dx7SHxa5mc",
  "key10": "CSBHAau2b9B8Vdt7v64igSbmsRi3QGifwujZSSrfNkCXAbLU4fdDWFEkxQS1j7ftCP5nqt3nVs4YF35HWrd8Dsg",
  "key11": "3PR7E7DjruAMmD99qpGRq1ZL2vXTAg9cSkobZE9Rd3THQpvXBNDi7ajTCXiWLu2pzcQ7bpCFwqeSzV7JdQZ5uBWo",
  "key12": "45q3j9ZAGGxERCq1B39PdwSdrt7Humy85kUCrWwHRZb2GMoSfS4tnuK1R66UAuyE34dRYk1AoR2orqndLzHEanko",
  "key13": "3YufVeKg6avkPipnzgDpk1Nj4VueMRQf6HRaszXSJ6Fn6v9R2NZihazMq3kErHMr8Eukyjx3zhpfgepZGAZqbv4A",
  "key14": "4rfBcCJLfhnzWFNcQVro4rsSHW69HnbrfMJw4Mh5g5fm4n6naWoVsiYhHiAzypoRN6PVfRBRCx73LQNX1DNAJFDK",
  "key15": "2pANaZNhUUBSdb8HyJQGKKJ7Hy4EPdHcTsyiJRuAucy5Gz17nFnCSJZHFgpKhEUr2a2sEzZ1iZxPGPxHgJ4dTeH8",
  "key16": "YNLebr4D5czUKEeSgGNf7beKzyHU3aXBRiKZyZVuZis5pShW1xg7t5qZsdjyWwBYPREgBNejgYycariTpJfYpvB",
  "key17": "wJ7gaWwU2fSowcWgeBx3GHHLGjkmfRvWVj51SEe8gADCfvYvLzhCADmZ5xHFJeriXey6t8K2EK82faoY6GSJt3R",
  "key18": "5ifdRe7tb7r3ZvwkZkJ1ccphZkLiYP81VTXzmtHk3Pc3gjvyj1JPkgeeR2ELsfqgCj4rWqTcFKiupQrtTReum8BU",
  "key19": "2MyqjuPY7PfETHv2WNiN7cAu3Et3Yw34tGbFyf2NgG99P44jnhFyStr5fCbwnEYq4LFJP6YFY4JVYpCvud8kzQ3G",
  "key20": "4xxmGenpV9itT6eeAqA5PTX46QydZRNNMsPCCQS1tLMbEk8ZS5EqmVRFbFr5Wezfh9s5aDv7JbFNfn31wnGSZMvb",
  "key21": "3myxx849vsZbV5fy5HYJy8iKrLxs5ZDFfACj7wMwmX1N2Mt8ckhCXM1oiE86tWiAD9L4RFnsXNQVSaKifWMj8DTb",
  "key22": "3ZhMzQiTSbLiFTbPEQ9AMNGSAyASTnJmy2hZTNoh91TdkJpe1vsojCogwuqUD1CYW3MriZeDXCV6jrpreAnjpAtA",
  "key23": "3UYD8U8oWnptV3Th5ATmmoSD5HPv48Cn3iZGnvJ2zR29YrRJQnxuFwiyw6vvWMneMTQgHhfaHm52tz7Es2jNdEvV",
  "key24": "3naMeFkLjy4V4XBsXxrdazVYtxnFTJmttwCfj5neFMgLL5Zi1GVxcYXjBSnxAvs4S9zEiNde8YKctP5AxJBc2SSA",
  "key25": "3mrJk5uLhi84XEyqmSQF4XQqX4ADc17wigGUhs83NSLZutkc6zU8bjff5zpRYTGdyDH9Aa16iHCUfDmgFMMZ12Ug",
  "key26": "5aNJE4qeKBfk8UupWGGkxKMGo3qcUe4sRxi5JQBhyLnSJYVrZjG9hW4E4hDsz21KXLXXXtSapCU9zicHYCnApDda",
  "key27": "46KeVXvrKFdJc1dCFxM9ptCUzqcupdBaLcLb6mzzTdqLqcZsNYDSg7oXQ5tDhQVGz8jL9wg52QxaMMpWGc7Nmiw7",
  "key28": "qH8o9Jb5RrYGBUeLJ2VG48nH39RMHJpH7TjS2Nif5wzckXDPhVPP7JSmP8jUtuwAQiLEYqwGfd3XQT1f529Gm1h",
  "key29": "3dUJTnhEafDzqnsKuCodLWH6bZ4eqf8Jx4d18fUTexoWpH7HHc6JtFfC6PnHsDxdAjGMAXdsFNWdoNxN6NjzvLUM",
  "key30": "3CJkXdmqfBN5u6DpDoacbkMG9mtbCwfGmoDGSKRmE1qoxEx3h844SybWn22yyxx4w9bYoMgN2kAEJRdjpfe44rTp",
  "key31": "HzvpeFfe6ssU1KdfEpHHTnVeLq1WhUn5QCXpTKUZNkBv6KvNuuqsix9PydhEq64agpWAfa4y2LuJ5yPrJt5mcRV",
  "key32": "nSXnjmwDcdaMzujqCaLjheTbVdszoLg1ULoQnoadituLAP61TB3xhi8BizvY7ery8hD8DGnbfeeUqyJCp38JGb6",
  "key33": "3oTeM2RXtn5nmSdobsLrGPXaPbm39yefXmsD7LM3NuCNqvkWMHqZTpF2A9bN5dxySMg8T11Xmih4VafM2g3QRqAv",
  "key34": "618dP4co78ujC5DRKg6XT4EUQgHnJHJg2dVzn9TBtqBkXpnm5cSsmcccpKJY1PmVY7tGERdyazJKNjSLjx14uNzb",
  "key35": "4BKzDpmCekiezkpfJSFzqxpdwVS6YZavZq5Lqeb6Jk3k6kT9sKP6WMoaA84UNXS9GPzKmovkMTCNqCWv7cMGKnSc",
  "key36": "2YynBzRT1bxKisUVjPTioAdWsFEwzZDb3Mb2kEKioUkfktHcR9h7qMHt7HwXFGdyZsLasUmBMswY4UrXVKT2CtxN",
  "key37": "443msW8hdkhkVuL1hrFFwBdsmuV9L6YWRmjTRmqBjQDSoad8MiyBvTT65KZPwV5WKXBXJyGRFgarNnWC4Qj7Z1QA",
  "key38": "SmsQTzcgHFy9piaBFQ3vT4gpyTh9ivNkwfV5bBfaTFCioRUPEKDdkT3tx1z1WNqQR1EH1DqwPEJudvbYhbTvem6",
  "key39": "2YaW591dhb6b5N66wDvRLGrSGypeatiq6hdA1abRA8fhGTnZvULtR8zrXuXGDECVhMEY8nZjof3X4ZPqJ2kfnNpz",
  "key40": "3P7UsxsuFobhsfWgs2G2UdqaKjaqyKmkHZG5RJ1qtAXH2yrVMK8ptASixtSiaJS9mUB1VHrec3qPzXSMpM1FddAJ",
  "key41": "1FZNdzDtgFgCMTMmZyYm6xgKmYJK2jLxAx3JvoGCSSL7cg5e7h94stcycsnxqtRv6DDr8vZhikhGU792EuzKubJ",
  "key42": "2sXQbmwMBSHhwek7YZNaer4u8x1QimZFCDjkmw6S2E8FEuNPjXAbJUL6dQGscrdy8fycznhQjj3hPV7TghdGVfGB",
  "key43": "4fK69Z4NTJi9tEZj6PN4dk9EKfjb4Szr5QtsYRhKe7CTnypaD25SWzzkH9JgmVSVgoRW2pTu3Ha3wgMooa4tbxLT"
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
