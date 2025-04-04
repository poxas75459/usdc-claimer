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
    "2T1B6LfuEJSdDvg1pChGrJpzdzkHREoDhWzY5LMUbj85M375zZnVXW47RcV6rf1TyRvjwczMxXJWeRv11HhiktjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ge7PmHzoMg1JvvTStLUmEZfZV2ApGf3gJWdV3VCpRssVnQ4GZZ6nxuc9kmxd7KQVE6HVTnPKZ5cN2VwgWQPmqCx",
  "key1": "3PFHrMPMqHp2FXgFjw7fJVX6EWsnr8YG6EbMntANMuFfduqdYwbPRRdvpiZvgosbekawvMbw52VXbbVnsDidjmgs",
  "key2": "47XgMJ9E87KhczStbfqa7AXnpVrMQkxErkKGSjdGhE7FQFa7yPri72zhSKqj6SJXydQdbGuiFfxxdK7DC6h8Paxu",
  "key3": "4qLaLQepoMX2NqBa9PYoctd67B7q4Crdvb5YHg1kzCGCY2svSBNUrxD7ifkZBbbqsGmUQnbjPYMomgLwAmGgHf3E",
  "key4": "5MmmcUJ4DD3XHWq9TqMagBoQ78NFYdekN6SX28mdUTiPQaosk7C6oi8rUR3ME85syr94S3Z2yEcCcEBVB7cgtu5n",
  "key5": "3Trpe6sXcaEdWm9fbixqwEXobbQb1CrPTdQB9iSVohrUVKQ4QHXMDXrMyXQVFrh8cdxURLvM9UcK9DMwGBJz9ypk",
  "key6": "qSuszjMKzE4cXh3SUX6tVPb2Umw77ZF4u5FdSoiqr6cARHbdknDxiV4AUmLGRpWfRLTVXdu4U7ozGK6Gk9uyoVx",
  "key7": "WyFAhFD2pda4DS7ZxbrLzjtMS7G4HercUKx3TuLrZGWNpm1t3KAi5MzReDsAaiRGGqK8kMerqRe2F95DaB26kGQ",
  "key8": "PHXVAPvXxm9tsqsEWnGzTRXz1ggs7DNLuhLv2SBfk3gPAtVHrj467qwajVMmK5hkGyEvNgScpgFJqmqW2cisKSj",
  "key9": "44t95t7kJxi2VLTc4JxtPmq1EcxUd5wzqbMwAYKvnbtkLv8gvJa2a6jgDWCB43cy766abPUXCrjfy2MMPtgDCPk6",
  "key10": "9XdGNiuedQWkYkhQ7aRg4UUy6vHYUvM7X3UxTTbW46uwAT2vRTtnTFG5M64SrJVYjyMH8bvs5hkfsvTYMrXiiTF",
  "key11": "3UjHkuncM3ZM4FpmqXFEceaMxSHVdzAunN1v7E7mTKzXcrmr9nTaV8bqTxtW2LTwwFNR2yHjRHeFrvn7uWj6oqJZ",
  "key12": "2ppDbqriRAN7rXzhHxGGD7ZjexutME3r3xGMZEGto4x3mYMhcaCqh5VRQxiRfS79inKJBsUvM3WvQEwGdK4PzR2c",
  "key13": "2dHp9qbXpbUbgrLWPED3YuyP7ihVWXk3y2gwmd1NaaKFH8qxDkHMys61kNVo7sqpEBJosVGqjJjM8V1hHJeXGzPC",
  "key14": "4CnzBM5Sss9P3nFkXXbeLiUaQJxXL8nXgiGU22HYmqrwj61mP81Gy9Gu6R5ma12cYnx2jdWwiCWGCZ7MjjKGK44F",
  "key15": "21xBvaoWL64AhWkztXaifVeKHMb5BEuebk7DxzcCt3oHTyYh7JxL9zPyXqmtFJ91ZSYScWT77nTCcBe6LARGKTWo",
  "key16": "29LQUZvf6Jo972suRi3TMNBtzv28fvGCP6RBA3saPMhcGTpQRs1nGwvAhBLFTZMNbSArcezFDLZB3KRhsHtvHdz6",
  "key17": "2fmzVbXLT6WZ2YDu1BtBGmZsPngcKuyPLpBq8Uo8oetcxQYdmEAY6BsjYVaBwMH8CgDMf1nzy2j1XdQeydu9Q6A4",
  "key18": "4o2pNgo9deAckX5GNiyCSzgdBnxoJYK8jictVKGKeyBPB2cJTMJ9bffju9TH6ZhikKXJ8pDnngWgvCB8xYrV8gLs",
  "key19": "2UtZ5VAepqZeqHbaLh7zi4QVcpsqe6wfGoPbARtn83zfPFWRfyQU1C5vvZsCijEPFHy5XTLEQNvQxkT5XtWV8R8z",
  "key20": "VowMwGeqrXAVTjCnHC9HfJpttAKPHAUYq9ML363A9p3otzgqEgNJeTRFpYXrYHHzPrjNT4UpJpjxfR8ZFqYxm9M",
  "key21": "2itcioSNyqSUw7erz3yaCcCim1VM3xQjQsrDCb56uoTyKoGxUE1KMA2rNaYoHcMJ5KPNHNJr49AruYBdaUcRrkGn",
  "key22": "g61SHFMX8C9DFL3MWbw5sX5Jmn7Nt4TkxVy3TpjeewGqjivqzuptaUs9qJHi91a55wy1BWeifgthnMBZHqCj9bJ",
  "key23": "29bHimKEw7jWxy8rXAx26xxnsmZRWLBPmuSxWTwbiMFnRr6pCUmJpGzdP3fG6m8LfoKkby6q7LYKfHmYn9XK3d8v",
  "key24": "3kN4HA9AtFTz12zRYEnRPpfCFPhQX4a11EVGe4i3Jkp5a8BnZzrVFWKq3LF3dbzRUUfF6rTLRxamptiSAapVU6Hh",
  "key25": "5BCMuin1WAQcRxmQ2kifygTbWfPANZ4qQ4GF8RVcLCBXgDtxbDUfCXixRQ5ac4DfQyRyjb4LmoYXxVJx6xNe4NuF",
  "key26": "5GUHRHSr1jFe6Aiho6JEVFWhPPNXBeN81ioErBr7rd9qCp5tgpNEC9iEgaUYEbtXNn5eXgMabNddpigpnSHYerUU",
  "key27": "LfSKZv8XCTWnDzRCSUwhhx2iu1yq8oa1zxR7S7KdCm1QVgk1hpvNeAW4dPHnqH1hAn8fsVrckFqCNJcaEpogZKP",
  "key28": "5TgvLutRmVvBszE2zAxVb2ytaLyXNTSLBTL5zJvYZWLzL9GtVJVrLHMkDkeY7cpVS9MuNsb5Jv69cChTpuCtHn2H",
  "key29": "453oo8FyMD1nhUTcuoYf1eSbH9NM6KinrKk2CmBZmSazR4X7m8jrAkcBSTfcL7LKrk4r3qmQcYUq4W8aQgxaQyQm",
  "key30": "4sA2d5wdS1odJdSdJFHS186dwZNicBQNF4FD2UEj7E9Cv7psSD1fu5fXcukcPdr45MVT2nhsGRY3UHqtZs9s3qQg",
  "key31": "zbx4QzgVgS4mqyLnDajLATe98bWa4YEtCsFdWJ2Wbg5qdW83koCXWa7jcWpixTjCc6n5jCm45ThNhMamXHHUjEw",
  "key32": "2UJmyx5eSiXRhRnec7x5Fm9eXAfCoTXXikQCko2Fah1DMgTVjoxFmj4ZZ7dadmB6mpFwvqt8C89M7xHEdwj1z4Hx",
  "key33": "fzxk4QdCpPcWzfiMY1Bk7JrpVm9iNS2Jaz6yHkjvkftMEKWszXyXmzBMWFVddFJTjF94fumJsWKj1182kYqz8bf",
  "key34": "n4fiwcWXvwo8jReE6qpQh77YhZc19YWt6YsNmWTJwUDRwR2ZMWevJNL8MVo4YVpstnCbUgsx7Eh445g93Ue2D2K",
  "key35": "5PAah6w612am4F2yWa1SdZ2qStHCLUcJBPZcvTsgJqh2zZQYEmTQFGNyy627ti8vALrBQH5pfSQHB7k7fsusHVnv",
  "key36": "2ueQViUmemtVnrQFj1frW7xS8eBK3GnHwi7B8FcHxrSTkZbTiEq4c7BW99Mry2j4weWmRpxgXr7QG9311YopdY4w",
  "key37": "BGpXEKBax3VCvxNwB4Yt8LKzb1N6k214812jsnmYwfRuxDnfS5rNRi6La31mMqdygrYRSThUsqHyWuLryY53A8W",
  "key38": "64sUsPsQz6nLgnSd2DEJCXiXVSMFFTnMbpck3Fa9gLKZKTJjsZKryaJK1u1p9eWT5vzBvjEtczTEMcwtsyQzWoHE",
  "key39": "4gEt53ZzCFYThc31QrQejpMSdndvTV9vxEcCcpseGHLGerk15e9xnnwaRk6J4hNwa4w6dNgakKwwQtQ3cxNgwFnq",
  "key40": "kWheeRJANBZSRiasM7f9VRtexY4SCM5qsDPLjqrMf1d2XQnx7Tws7Xzmc1ivokmwwfvBd5EogkY2kWqQvKxZH39",
  "key41": "2weyyZroh6xUEUxY9LhJmZk6Y1t7Nho52jY6pKwEJxxb1cb8EPqkiSUWfvCUJtQqsW4XqvKreMkk2JXTHQ8jB9H3",
  "key42": "2W3moHBvb39W8vu7qgcxWBWJdoFn9DKqHzpJnnnXkBosgiK4xb3riwJwbErTih1AjwcP4N9PpVmfDxYsfoSPdiS8",
  "key43": "3fitpDtRDbMYTNoPR3jivUddJTQG8kC85TDBkRPyz6RyeL5QathoBBkSz6pcuLtHvUHsRLX4biXdXMLCRPVtD3sE",
  "key44": "2wLofcBydMrKLfL994pUmXrhg6xt9YYXvXVD9k8gTYyeSLn7woadP9ngcfRPmkifT1owqj9yXwrCjN8S2ZQzC7R",
  "key45": "xrf1cKDbXjmPyd1vRDbToQkxFbdny8eHfMvtNDTA3d235kWLjYWAYcZPYDfEhaiSXQt6t5q8kx8mJxZb4gdCeow"
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
