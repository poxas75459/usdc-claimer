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
    "34s7vFMeg6V3VcmGvUvmNd4boebTbjLBHFBQQHdifCwrNoR4oeTVPDhqY79rcEUfdyD2EM2j351U4d1CabKcSTkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m1vjeUVd14Tc6iYt4MRS9pWduLGYhq5wEQi5KuXCjAjUrevxQrQtZHe5nADThRxvkA331Nmb5o9wJa9X4tsLZqe",
  "key1": "5V2cd1QMfWq7hB9V6TiP8utrgZnaWidpYHbUNTsN7Bvo5G4nTFa1mcWd2spewLe8sKiCnhqMRsapW3UoTwkTYo6J",
  "key2": "3JJGhUYs6SRoiu1D1Jaj8zVpvvjHZWyjee18arVVz7zS9SNuWD86gAi3qunUg1F3c9jnDXZXQGTN6g8wc85Bjkq4",
  "key3": "4FC1EZcNTa2jSWhFzQXh6ttffdFREZjjKX9GyXgWdwAYzS2HbUVZYYB8oQ491BnECYKUf34kj3HgDp14iXHYn9Sn",
  "key4": "Kq6RraLsDaKvCvduth86Kfo97N4BGLohQWJb9oS7fSM7dC6hGdWBb1xv2kogzypk5wVwyX3wZeA9ij5J5wHs8dn",
  "key5": "4VSFTpgrJHQZeA6FoSv66gkv5kTga2kWtuJEisPFeeinDRc8d2v8sCvqRgzifyVWFBeaLzzx4tfZ7vo5Az3im13",
  "key6": "5zKa72NgcL68uijkSJbqmz7A8kcrVPZrRtd1zEj7iFyfUeCeC3d2BjLY5L6XuSSdNow999jNFRdj7HNeJUy71oZ3",
  "key7": "5zUmYf8QR7TmDVnd9617cPyhbaQCgG3L2qFY8zAag8xyq7r3CVdPbQHuv5miiyQNUugQwFSmEpZXyZv6jVJ7eqaw",
  "key8": "3ErTBaMTsKQMx2TFCCRjAohgvPcewYjLLye3APmmJsxaW9dN91BLX1zKWNCoSJ2MP9LZm9MUqrriQ5PjfePD9ndg",
  "key9": "45YhgMDv4VqzpccJRECNQtRvenf9YaePSRh4cNyjtVjwEPC4hs54XgXSXUfa4UQqjY9o54PymUA2xfz6TvUYLfjj",
  "key10": "4ffCoPv9Xa4cwF4oXAesQWoFvAN8Yq3KX7kYdP2d2wKsVxRhJ4V9H9uCZDLWDL96hdbdNXdzZBvFERL9EvWXcc7c",
  "key11": "3ETLodi957VEP6Tt619HxgKh7z3UxyfbM8gPAFbHDYVPuZHp91q4jPrLGAJ9LkSL67Fy7La8PCNDH2FAsdbixToV",
  "key12": "57qJDYzTPavgopc46kkhLtPZFUmPdWuXWsWdUpvzbnj79EeU7DmBR6FvVnvxuTdrzZ2iJguBN8GBnRc4pzPY6K7D",
  "key13": "duJNovEFf8H4WhAJyJzmHULtTrNAX2xuLnvnUQpJDjo7bBDwaWgtyLk6vfGh3eHcGrWZCs5vAiVVCrieJKcAmZJ",
  "key14": "5rB8gY6QeaYczRuMbzcE2RcCf7tSsdjjCbDxuHQuMF4UWH3MG8SfmUPkjeR9XEVRpGxxewxZELvEj3C7mqFaxFVs",
  "key15": "3NxW1Sjy2VbGCaJ8woMNFsiAHfBiXj7s21GyGvpxHc1tFTs3yiUzwb8yKZHEo6FH74a8T8xHir2fvd5bqcqYGyJw",
  "key16": "62ujjB8K1PfMWEPAotzQSdkeMa76hK3CpcxKg6Po5FhbgqAfs5pcq1WK4wkzLiUgxQH2gD4Asd7K6bci4x225CJN",
  "key17": "3KqHBrJNDFNdq1PHPntWp6s1zYJUvt5sm95qTAFCRwVuy6jMSK3FWUYjCr3xk1Sd3b1Dyme3xCKats9on1uVVHmA",
  "key18": "3csQ5Ji7H4mCVjyjhJPBryyLAbA87gbQeYfozFixUNLWjoTPeEBDymukLYjsbqvb5HfHZXu7MceDy7FeUq3nY97s",
  "key19": "sqocBLsT2BR4AfR9UX87RJ8E1Zb57ro9DfyvQfQyGFVYiAvcZiuevVa4TxzvqiAfLAR82tLhDUQoMgh8JRndZco",
  "key20": "3qbn5M6mf6weupk8hmbvuNUukyjDPv2cqjhaV9b3PM1SP6wdj6aygaNLaSd1Lq7gMsgkjhPbHY8QbrwStSCuQozy",
  "key21": "5Ytu8pGKoUzEJDdrRKmbGc8hTGvPWgr9USrueFesToB9csPa2WiiesosBq2dpfm8i614G8CxBLSD1tMomg3jpYcy",
  "key22": "421yEQoxQ5Crvimz7o1CfghosvZ7AkvgvDXPjUNZaMqQVktymowxUbJUXm5A7gKpE2ZNG85ecLQV6XvBpKpE5ndJ",
  "key23": "3iGTot66nRu1kXxTPuv1yr668Fc1ecn2yjwhMFHrPMYaBXCJbnGfdeaya4xnwQpzoG1LiRUR6PiMUASfYUQN39M2",
  "key24": "5FE2H5cz3fzMVmoUYYf5mkBA39TmXLisafZwDkaqiHTbUQr2pWiBnaMswg3CCBGSLze6cnpWzFxNQPtuWwNL5xzC",
  "key25": "5Wckk346XWxyaiR2oJCw2d7FGpiyYH22mLn6rdowrjQnH414KgMHFRDxoNnWKU7Ss6fbaTfbx89VTTxwzNiuDgT5",
  "key26": "9hWQH7zErV8PKqYqDqSPJ6N5aWwktQWh6UuYtcmop3y1JeGjdWCwBBtBMXUP53YEmpAXLVU6JVjnRWRbsgFQabG",
  "key27": "8LqnnbxC5xbSZJV7GwcYmupBoydBvS9mUxRxSBJYSRY3JqffXLhQjSqA1Pe219nTKtCNan6DpQ4V9s7bCJndoXF",
  "key28": "37YYocPFWpzHopzTBD6PhrjUfDqoKLixSagZZTSisw3JSdnuWDLEwUFZcppEBTfnTFD1xbZ21xytuWT28sUTZR3R",
  "key29": "7A4nPbawJqWXwhrnvQjFbMfev8gfaqEs7HGakTob6wjTqVH8vPSkP1n3Xe974dAP45gQVwxXKkJYmK8AziUxygM",
  "key30": "31j6uGziVvNaDspCvxh5NboegGGtTTU2B1Y7gyDSUwxFQYoUo4kY6WouhVDerkqDUb1gJdYudy1MzasKdWLZr28x",
  "key31": "5QkntrsfLxw3wozckhn5y4bDRgRubyGo7UTKoiPygwgcQAXZVtXSKS63NKKVYBkuQTEDhzoskRRLJmy2Q21Q5Mms",
  "key32": "5kDQj5ZBTNcadpaNtVAfqHn3BkgQ3fTV7xwiqZUrz5oxpqdKxn2F5daesWYA4TYvweZLw63DiLdESPUVLcitjVya",
  "key33": "wtXnzUxqdRgHVK332vwWgRnydTyR4GPYSMqpEiA3gE1NSRviMtxaeTkgzp7F2T2uPo752bqmfkEMVANJxLUNVAV",
  "key34": "2gT8KXqt1cR4jQuVmgqvjjrihnZyqEnQjKLQDUcGSw7gZKvjihNvFT4QfUC5WUedPuSEosHhdzfWKoyP8LN12f6j",
  "key35": "4kbcbijc9bvQLe6yhFiNcqGCC4AGDLdGKk7PPqY8FnMhMaTcXUqY9VCRr7UpwCHCRu1nMkA37tWWqGKqJKH4L9iV",
  "key36": "4faT2ia5FaEAccJ4Dz1DPLG77z3aNbstAZKGap3oGh8tnvjHDNxTwsVHdycK7jEfbj55gqSf1moLzA3Re2rXdLry",
  "key37": "63oXS6PDxHdoXuCth1eDyG3LBdaSwGvSadZeSifvbVgNstzs5dthkK26HykjvZResRY7cdYP7v9BPkyNxFzMHha",
  "key38": "5Ac2kSDnxo3FgHmDAq7PgddjFvtEDe72edaDoGd6Sqb2nVQuXfjB1BJfuizypm8Sv8VwCD6pjueyhmzjs4KhwnWZ",
  "key39": "4PhMopeWkaNxAcfGtHrQww1R2yroDWeL9kLuJqN5xMKULtXtZPMoc9xGu8UZHgnJZh31EEypKarCox1VnfeWWGWs",
  "key40": "522PtadetB7zFM7mHpBTFLsyEcWqf3LhpW6EkvQwQMwdgGnEiZz1m4vYBgnsam9Hn6EG33GdQtzZddehysNeo6m9",
  "key41": "2EN16bM3HHE4yA7vgLsJ41H9Xoo9FMUrDRg5FL57ShzhYCgsYtDnxth6kYXgtmtXzBmZRnJodDPDmgaJxtWMWw9b",
  "key42": "3z1y6H94q5mWiB3YSVtvJhdLPE2b65F7RoSDM5ETzzDi1GHbpxLwC99sdMVrZQKw5m65H395FYmjCJsyPqNj2Maa",
  "key43": "QqBThDZCeo8i1JGvwegnsgMonLKad1qeqPM3VfKpknNHyv539Q6gHepJbND6sCQ4qTFuRseGNR7VG7tGAAs9yDD",
  "key44": "2zu5xXYTXP3FKNWqbnoHxTGSxSKXuxvToUFHHEQYPFADnA1nXA2WSGwuYBJwPaeapxCBzb4QLw3FEasCwD8ayD6c",
  "key45": "27zhw3QUurSRzVXSNFWrLuGxWJhYcjS4mSifjK6LTbXTZE7B5G7SCmjMJNQxykofcMAZsPVCyTQmjeVwvdthzHZt",
  "key46": "5zuJXDK7kPmxwZqbaMYt3hT8gFg6i45bhjXFRXiXWu9ZDg9n6N9MKUDEQpvzLEpAxThyXNFuAfH64uTnYfTYLjWi",
  "key47": "59GF49w78jr9ppF9v1tQmXpMK7QXUfBnvC3oDa3xefqPmZsGqj9RHT7NjSgwRzwQrwdM6DUFy3PpWacqUq7A3NEP",
  "key48": "2Pp5cg57rrXzmDUefm8yTL3LiCZpqnyncXQvCyUqoP3Z63ZxHsUdo7M4ZibkVvc1H2wyq1BmkXp1HGFS6fwqWcbj"
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
