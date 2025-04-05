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
    "2ARsC5bfowMM7DLQWzHNXuF1aZMcxeG1KpAsrjW4eNNgG6aympUx2fJSr7iVCnanpPnzAzMyp2nmLWxa36QshimK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fzrDVLTNbpGbVR48YEFWTESjTz9iTsPXRVZQbYRLckX2ZK9fx6LQRW1hTp4WLgC8rHbkad7zi3tyY5sxesmLoZ6",
  "key1": "44ANVjrg71gBmqUC42ia572SPiYci8P9WLaYL7te1Lbk4EnyQ9xwz6UzfpUFNSNiX5QazCkkM3KvXapnmzXFaS6F",
  "key2": "2MLhJtEMbXJf3DDu8Xdi8w5pR5D1MXFwHu5wCMExeRJngazzpH7kKWGshEr7dHJUPLvLjMwiiPi5tTJfW6WAuKKa",
  "key3": "4FjXjrADwJkF3Sd7peiD3mqxmbP7TNK5LMXd6wttZrPzbetLLX6pn2o77oiZS5Vhp6SuFmqaD99TQGokNQTCGDF7",
  "key4": "Vyzy9jUfKPLtFa4aAMEetSS7nRJgdtUh2XAcSxmWXe4JQfbTteipda1RetRF17DvaNSUnoppdJaj5N7M8N4v3qr",
  "key5": "KNfaRpFQ4Ji3yDZhTWgNqUyHXfZB7UNCiYgf1cYweqMmEacWJdEQMKMQ5hJTKzCoT1q5mdMr89XxJMp1fRqZGkd",
  "key6": "3QBh6V5StkS7Fv6fsL1TUtC26GvZg8DPMaVebDBd5VhkVQEDSC8HrrYhKpPHG6rPH6nva4CqaVzLve6dDmNuF3SQ",
  "key7": "2EkZZ36grEYqXeZGsDBRUmXeT2BrxxnQcHkCZ9J69khxWsBUHFcuEdKypKsz3D1LsFii5Q984m8gjU9j2emAavJh",
  "key8": "23fLQfgdHtok51PW6bpAJRiYAsmhXmyVLwKz7Uqvbk53qxWo8QmgB856CLx4UmA8A5bRdMywitd3SbY7CTtbAW1k",
  "key9": "3FNLYmZQD95RkjxVRRtcVm3QSBVqeYM1xtpA3nEdpnyxeYJMKNDSo693aoR9iJV2FCWjmDNLMHzdAAJihs6wiHCj",
  "key10": "5iobbPqa3rfoKn64436HFijzk39ckv9TAaRmLHuW1K7jbSiWzuvd1jVyeTWQ2jJMePNGwsG2peJvw86jATa1ctvN",
  "key11": "345RbFTReTLtzxaYVPdcntkWhTnxYEYvtqLvAqGqv4ARvcYaBt9jTL6nZ7Xkc6xN8ZyUneQFwoTxnQT3Pi7z51eX",
  "key12": "2P9qdhZpztXtdavPp65Bk2eww5xE9W15W1fU1brwhTooCdwucoU4HUhH6jHy4Ry4E3x84L8qPuXGYSkKGNb7BA6n",
  "key13": "3g3SbCY2Dme3JzNHSKPmmYxGeTgSeS3UF9yBNPaADao8qV1r5BSrcD3qbwacrkv4eipMitd3MPGYmwQumrKwu1SJ",
  "key14": "5HCSqpDsFqKV2PLYnpWijZa4jmVXMj44ufwiz5uauj46gtGZxJsMB7V8VVaHN3VoXA7upD4fWMQKWtPyYkPZGonJ",
  "key15": "3azto2EZMunfV5EdDYHsXNKPZWUHiJeqgqo68z9AWc8aucTx144sYePnmVvheyZmQGvHw6yuSuaRXFDMtWawfDZt",
  "key16": "5qHSuY4boWkaHWpNWuNXbUa6Bs8e6rPUj3ihqEGPyw65vof36ryTPnF78jBLbyDxDxXo2rwmjbmPvazfWvv2wxxv",
  "key17": "2sfFmhmJmUFEwZd7be8vsh5iMv4jJmzFzUhSodnto5YAgDUFNbXL5Dvck4Xhv17VAjafs8CLxpQpmV5817g9veUX",
  "key18": "4Qhati2DgQMRd5W43FebV1Rxdu849mAkGHo4gAXayiqm5veGDmdfcXYdiZAED7pfgVxYAPrT5pLjchRVn5dhoHjT",
  "key19": "WQ9uGEe5De31BZBFBZMXHo21MYgGff2GGiC6sbtkbCaRm74MBhcjP8brza8YVoLkTp7keec64W6GwnorFb6DgvP",
  "key20": "3tyFA7Hfv7pzzxrQTbrD2wwCEKsLbN2Dh49L2tpCMQDU15wd9ZKby96oWjSeJUmPgBUbRgUGikXfXTM6RVRYpYk7",
  "key21": "5okUDCHMsqYCe9C5QywfyMQYfqPmDR7KF22pANFxtjr5cv33EzPgAHcL7oSqxe9rU6zYvboJKj4UY4vTpmeda2n1",
  "key22": "353gMpCh1ReP8ALwfBsqHVgTUmVWQHREATHhy93McoCBw6Cno3rzo5wRU7d6hqPDWPSnKGjRon1MuhKtRyu2HVTy",
  "key23": "S6UXxWDxWaYFyxStpeRWQvXWXuXFUBSvCpqzheUTYm9g2uMeZpnLtkVkf7LmFZTrPVvNwa2jCopcRWv5ELJKwzw",
  "key24": "2h8MER5BerzEm3GVGGMHPj6gqRxaMMY2iKGnM9Nx5dbQGE6werHNA2gaDWjvhnodN9XRoEnXHFTWr4Dy3SCKMua6",
  "key25": "4kEyiM7777m9aLrGew2wraHUmLquL1TcrB8BGCEE18QraePaAnZrmgTUfBzzafobSS2nAnjhMWiUebpWmN833xxB",
  "key26": "55ULVzyAi1hncRP4kraSkeboZEkd8J8wLXNPkZQypRJDcmhqLH2jytFuKWJ2Erg6tTqmrCtu1pmMQvhdkRVy2YqU",
  "key27": "3ZtkZ3fAEuoxncn2uiTZbv5Z2es74xB5Kspz8YUFfPe4hnrxgjLymv1tEH3tsXD2tgTSWysrJrhsMh8ySfXGTHCw",
  "key28": "S7XEDppbAAAfgH4yGQFhXW6LiPVUfjXsx7q4bBUjDy6qKZqeKDqex6nZB1Es8YNuYoGJKUP36uPMpNDdtUnqVnE",
  "key29": "622iDXJzCNVWgVAg1XpmJYyDG3fNjra9ZjgDh1NPT14zHxVPQSs1BqFzV86bSawvycKAuN3VgE5ifAMdjR6zSV3t",
  "key30": "26KeVHfs9gZJiYzTSw5KPLfieLEVjAuhk86DvjW5EJRfyt7Y5W88AUVs3L7Nyww97eJQF87ySNXFjWYwvzcAw4yJ",
  "key31": "3aAGDDawZGwAivE5ABRXtwhpd1EwTK3GqHMjADLNDTpKnj9uZf2xdPiMATpXnyiRpTJbMa6Y4f89EE9aHaqabmwg",
  "key32": "5C6ekmpzPXgYZtXNTwb6CTco5JXgcLRroG2YLt3UMycHSLEFQN6jTBUowR9XrUAtnaj3R26JMKBFDdStjhkqeK86",
  "key33": "27EVSiu1Dh9gTGWMAb5TdXv9EEP6MN6JLYrq3aoemE7atwZWdVX8r11Dt2zQwfLcnP2ACT3Ubs7L3Jye3uv2fyVR",
  "key34": "4RFBWgEvZ93PoXUcaFA9UkAW2S1VWtZZkCo2jo3s9De6iRrXNdJ5Aeiiy2Wxi9PGLJwtn3puVRzs8pwyw4eoWjvZ",
  "key35": "23gFfU8jyiC2ZVXYrS7WWUt1fUCofi7QkMWxFMgDrPNAGQbtfyuLaqHrNAmY4jK2NvPjyumY1KRzPHAZhA98rdkd",
  "key36": "ery16J5f1cATxnFXGhQJVmp2tYAXECTpmAubWQjH513N2oEHgrxvWFoAa9sU786MawTqpDmS9phJ4zBe1SWCHDj",
  "key37": "3Cnc5twHW8ZSa4x1DGQ8RWHa6UQ1iqtaJ6QJTCt4gzTXMfKznqQShS9ne8pfQgroKQ3Fr41zvhzeqaCeDbj5Vve7",
  "key38": "7MNz1CWT3hw7AZvt5w6bEdCkYEwzg4fjcLNgdhPahs9iJUbW7JL9YAWbzHzkwPxnMgo8ETHRiRdAiaGsVQC9UCP",
  "key39": "3S8RnMHQcvjRwGrdALTdXB2iv4ECUfJtpHzzd1dj7wq4sq2ixyC19z2CxCvRY9YntXWTmto5A9py8Q71cJWHDd4D",
  "key40": "4WR7fZ87WxAqt4CYu5B9FdoiA5AFvMvMKU3d4bLuYzKpjSNPh4AxVMeh9f7m5S2rH9J8U7fshjmSTsnDhQ1XyG1g",
  "key41": "RFsdAC7xUV3fWsQ8cu6QA7rhe2We4pjk3R8Yf5PM2Engtj1H9Eqa59oPweTj3rKZihbFuotXaLbaZMgDppWTcAj",
  "key42": "2zwAwdbru4QUk9MMnNyiAL7QZQ2eF5gHcKooHPCPNu2uEZam4wz3z9xno6kVwxTuYJGxzFJ6mTwrnyBGXyvEq4W4",
  "key43": "5dZtCYECB9vQ1p9Ni3QZJQmXNvZfV3T1eYtvt4iHRNPEa98hkULGaMn77nUWWr5M6pKPU1d7oYmxoC2t5zN1maU3",
  "key44": "5sjqgH7UUzR53erp3k87uQPdSR4XR18PMJvgDcr757Hy1iJecBheBrEnwX3ToMJxak3LkKa7v9qT35MEE5Xtmfr2",
  "key45": "4pvc2cNEunyG84EY2N3zYjMceDZtVYgbhvNPWWQhuuW5wTda36koPPhLkLzdX99oaqFFp88G2LXFsF8j8mjYu3iE",
  "key46": "hiH26AJGJMhnYAMBkFKisiGoKqvijVYDN2Yt3MLCc7yTNoTzpqUhk67uW65u3CMqjH6g62D82BR67QvmdA76sMv",
  "key47": "3wxMGN4s5XUTvsDVpRtPQcKGbJf2BzxvrkyLnenBEkB7saUZopyigGyzWL1X8ZtMXwhgohyQzXDFfE3KDttGdvKR"
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
