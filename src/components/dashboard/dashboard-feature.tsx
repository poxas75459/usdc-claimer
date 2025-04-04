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
    "5wJr2FTPoLAJCh3Kz42kxnwAab6GpYZans6WJ5bgdfy3N7uTGtnWetE13GimeXo8cZ2UR1yAhvYW2A1Dvzm6UmR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NekDAMC41XVJJXyNM3WAKWb8TzcpeR4bSNnBJak63c44Who6D3bJEVqSY9R4BEhdvt5EncvetmGPZuEktgRAvVd",
  "key1": "5wZ4R8yMsLgQvtWsbg7emKtoWLURSJ6JcLezN2m8DYPFgxcBBbcjY3kC1p3ph5ZL4dEVFKZNdi5DMwcgHdHXJiWv",
  "key2": "2WpGaBieuueY2L9YwyfcFYho9AyVE2PSq178ioGAFqcrnCRnAjKSTbhHYjksRtY77dWWwuuSDtYHigimG2P1BtBY",
  "key3": "oSo7eMYYdsBzC93rSQBLM1Z9s6hgXGanXGKXXs13ETpEP7he8o7ksmRH5ykr6YX3DEnN8xg5dFgU2QgSgjPoAt5",
  "key4": "4Vu8B2kwXCmJUp4SPtWPF7r4owRM6Jqx5pr7XLP31Z8AkbG5xmdZjvCH8VX4CeBq36g6egJ3N1jPkMLE5fvsaCTZ",
  "key5": "5HHznvhH72VFvm7zgEEcEbGxda1QVYBmfHiwFQRRver3GFTGj2kjatra9PonTBbxna9XPvZ4J4yimpkttdoWQHbc",
  "key6": "gcBvuhUFk1ZotJ2z7cZBJZjCjtgttwSXz69G3h5ZDeFGRTUkfQ86LKeGCzyccZQKXMcMtaarBsqXjPYCATMq4JR",
  "key7": "2Jpkud8uNAhua8tJoDUuVezs5TcLoF5aktBorDUbQQAH8nXVLiVYvF8QpoXVnM4bXp2jLdBw5ZrfB6GjjNyNvXKG",
  "key8": "4E2ePSkzSq1KwEoaQnYETeg4TmAXcRrqHpLiPUx9U8YEmC3Yk1HUmctvXRtcJgQgzHfnqcNobBAB5y3mGgoB6JNg",
  "key9": "4ouYCwUvbP5hJsBESABLYqxh9sQy5AEyWxN632Up8iRdZ6ibRSiNTD25sAbKPXZSPpmNXeYT6KyZsPT5DR8EfBxc",
  "key10": "3tnkShhAcgZG5kwMMvy5wGMLCfyoHxfTbNaGNFfnd1bvXncb8ZbVhbPMeywvSafVNHZEcbzzwxqBTr6hCXiXcqAW",
  "key11": "4K158V9hpyGPcX7yi1xqcf4YTjzY2TDkHkwKtWpT97n7ShsHGY2ihXW6vAKBKLexVixaRQsJwh9LqdoUsxrVCxBm",
  "key12": "5HPKbdtU6TEioUPz1kxUVWYMbVUt9ZQ6g4icAyqzZh1xhmPjyiBR2nRF62FPPwPenEFXJaZs2RUkCBq74GD4dNar",
  "key13": "53xne3wpcUXzeWGcsTZj5VTdLmp1GJ3KyRUaA4NpmJ3T4wcebcHMC2T4dkKV2b5bngLVVp2BVR17Run6LiqR68Xj",
  "key14": "4NbBdHCw7oC136e5NJrgCK8U9aBp96SKYXdimcLghKgoWLQKR8N5F2iyX8YGSw81DTFp8Mppft3gpup8knysYG6x",
  "key15": "5jPsDZLA11AFmLarXnheRtKyA91KDiiSp4DjH8bFnzrsuXajsE7NLWxmWTSrY2xXLG5RBdxcAgUTJJqsYrfKWFrv",
  "key16": "47PdUMEtDrKLvLqCZy4oBKCCUgaxTZcnB6cd9Rqt3a1dZXWNbR7sey3g48ufxc2qkX9yybCGPZrYgMPpJYEsHX9Q",
  "key17": "2Pmjra6m4v7hMQw9j4Fb9g1FiUP7c8NU8h9rSTbtYz1x87MDJTvJyP38w96mVseqLpXJF2kWBhsBfmM9mhYJxhgG",
  "key18": "44ueAAoLPGbtkGm7Zhuk2eVfm68LHgV5UNjKUtXh3T1tDsNyWWndyU5yVhfftYVa4UKDXbGaUFfRuwS9ytJaqvey",
  "key19": "4BbREN9UPGqQDsZRm8ejwwvVPdaFDCUWCn3undGPpPjGMqT9mhgAa3rRZJszTXedjGx1crAw2fMhedcuWMQ8GUnr",
  "key20": "4TYjFzuJfzTjt1nzVVhpZCrBqDbMhvwZAR6azEUnMdZTDQMLDCeyUcBbdh7wfoPS2hx7iRJg4EJhnQ2o46uwXXXu",
  "key21": "2yMD6BWQKie58seGLGqowd3RiXidcnAchqsBJQk1jETkgSrCNJXt6V7WtJapcJxayHCkyEk9TNz2PNsWNGp1Kara",
  "key22": "4GFHJrSSbGEAoJafd2vkLgf7F5oLu2kzEKQA1t7kACYbMCaLk5sxRBcRmVgmV7zm1xM37QiDPNo9XyKW1mDXsuFQ",
  "key23": "3P1wKn7my8o6yvpqYU43AWmiuDcoC41sWqG85YrzZG3VCD2suPYKgQgnxzeJcEkANyS4rRntx4NcP7QSaPD7v5H9",
  "key24": "5gyXkpiTxDaa1L7gS1xCSfWG8XoMiH2YfivjaVNLy635rbXxTz6RDecd4mmM4tZxgQ1R2rmzsFAjJ5RCLHndSFgm",
  "key25": "rZ6sPpGmbpzjfTi5oh8M9su1cu37MQ8PgsrkuWgueYhBcgKawwYLyxdZahUkUCcVghLdDAeJT9vJsmzML5qtX2A",
  "key26": "XtDGi1PbF7feg2iJTHd5FpczP7fLkTjnbk2zq2mg5YucBXpzfCGWo1Waa7LauSziBD7PPMq3foKBFVyAi85UmUR",
  "key27": "3T3CmSNnqA6SaT2H8rqRPSvrcTwJRHeiPUbknPKtJEA9XWo3aLJc8B8MgCrtJsUHfrqtBxrQSsXca9QG5odyLorj",
  "key28": "5VNkj9VzEt5jYo9XLBBgdEgWAnQYpot7kWeSZ6Znn6a9fKbiXVFiepmyioukyu5V74JUEfHLvacrFw8RYMZmvdTx",
  "key29": "4UKGGpegMedrkGFADZMvaEUNmMLPK9VRF35XViY2ymVwd4Mw5Yd5Mv7f4KHUdMEMXVdsqwGtRFHmzrcBZdZtxTSH",
  "key30": "NYYhbopspcX83KUhN2VsVLReGbj5hkA74iXUviykfjnVJGE9xmoyCMenhefn14Dbx9v69ACiukkzdaJnS5DVYBo",
  "key31": "fy7TmB9DvMiofDVXMXbbbcpQYZrXiNKwz1uWccxLZriZEARhxVEfWqvW5YFmYsMqFydaNiXxZ9DfhUHMHv48g9i",
  "key32": "2xm4WUVcKRRAaFRZ6WMonUZfjWW4jxrC8LNhf2WGWH84UPwhmsZn446MK7uAwkPxZyKMenA4WetAkdHRga8fnCnF",
  "key33": "4dtd4M7DVEHUYdgZzVeNHL6E4fCJsuu1nXd2eY54gdiLajpSZm2yWUNXYYgxMnXT2142CCx3QW7inagSuuxmyqh7",
  "key34": "5BEKDtjyqwzkSMu9n2QK7MPgubH8XpgD4DN7zNTYaEiS4VDcB3VQyjgAoDKxmPSR7ZNthK5nCjzNXmKkerThMgoR"
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
