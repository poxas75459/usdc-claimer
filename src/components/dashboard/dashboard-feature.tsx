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
    "5kTzFyzfMcefHsTYPKiMg5Wqo8nooKiXMp8eFi9cF1b4dRqyXM9Wcg4k6ZKNEoZo7kuJUrh7Sg5kyxhLEyZL1Rvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M8wbYuZDFYL4YqKFhKcAEuV771MmtELkjNXSdsPbS5rtyEm3PY2yoc3uHeoQTDnaWWf4QUPKe4TKvQA21NsuSXE",
  "key1": "5hHmxR6Rr4EAv4k33yfr4QGXEieNQoAdY3GzVZBro9f8a7xBhfbKnAc7sUFtM4tzDdDTZQiYDfhM8bBLUZvSjK4t",
  "key2": "4QNTgEHfgRFH61siiTfs66o18EBEXs6HekJ2XXo4Uvo88G4YLztEBmHq336Xh41rbs5P9LJsHJxixdhLRHDaAFFk",
  "key3": "2JHUG4uWYFm4dEUvPKiymUUg5mEqobrzhXPS43sEiKHdgGCSjEHEek1HcGW3DBcXRBqUj8XMTa3ovrZKb8GGcwDT",
  "key4": "2AfJiLwuP2khyKGos2JNfFsZHjfG8gmMt8urguuzp6ndgUj76jVtzrEJeZ2G5qb9hHVtZ5eamxbEJWcMJbYCciR4",
  "key5": "43dwJdRHwKEVPPFUoqEwqiNwGXAQNVtnxWXAqvUACummedRHkSzaX495HUG7S9MJBk1YJAw5jUn7NNXk3VsAA7p8",
  "key6": "26BH5Wk3Smu3Dx8WYa3CnuxdynGCwvDpR243sphrK2ajDGeZCsFwq5719BUW9MRWYX98usmPTF1DRDveAYQz38qk",
  "key7": "4GckrUzdBgsjdr2RMvs217dgQaj5yoeNEiG6fMAjgNEjZbSyPM7BnLxxeNa95q4CYx764KaJ9gKcAvYH9xd31NM6",
  "key8": "45SgnqjTff2tZ9dvbkziYnZFPMDu4zXWsCSQCQ33wPt5fww3QsvG99raV4EMProeSmgvWHxGq7ifhuG6624Tx5MZ",
  "key9": "sKWZ1oMV5kH38SUkQLPvWqZPzMYm6y6XJQRyTd4obnTvX6EqGpQ19X9S9ccG9VTG4zdSWLS52w14YUsDehB3EfU",
  "key10": "GjR3myXFnrbt2jDMVsPk2p5eFa42cFxdeW7cxsPWxUiV6GYYprtxxSsVTcTtadts3bRUoePaEu9i3HQWF21FdA6",
  "key11": "39DRGpuztVJjh6E2y8oJ7uBJ7At6XACbgVScSFbSTHepXrJjA1yUoP4bxqdiMY2MGQxDsSRNzrbcbcWVaoCN1PFc",
  "key12": "3UcK3QHHKQr6a4P3sTwQnte1j7RWk5XRFQesyphFtYjW9wCfARsuRMfWGtDvzKyULTmaupfcwWu3NvyiJZ9Z5bAP",
  "key13": "4We9Qou9njLuAXm3tahu8GpUCBZXEqgqdUsLTPvkKzfTaSZH3CLdWBqfaE3c1RASttF5mTSxQMtLGAkEttwfW9sJ",
  "key14": "22jLSi6WMsa7bv9czhiqMMFhRv87W7B5xUDUECEjVLu8XL93wtCiKLGNs6eB6ivbFovvGZkpnhuHatQ9gkZjn4fn",
  "key15": "9jzcE6V1WwA5TUqTRm7zPPfpFMuZnXCHmz7ygiHK1dG9Z42SaqqZK8YyShBVvRZ92kzGPNeBbYpFrJVhdpezuTh",
  "key16": "3TaC35Zu8KJEC8ebTFRhZtVHpSktn7oPe9n11aXPV3WdYVGWgyD2fZPVpuLoiz2HQVaAbvxWv4GKWXP46xxAs7KE",
  "key17": "3MbsJPnshNXw3yP55MqXtcqR4BZMyqhH31ejjyyZhYkHG4fhxUPPLWFhAXvKSQrr6rviiV1cGTjXPGMi3cszuFn9",
  "key18": "8VLrvGb3XScFEhXW3hwFA4t1y5FoaWeRb3urtC4JgGwehK7RHV6JyUA2wvDCEPx2He9p8xjD6hwXFCdrPE3Kaeu",
  "key19": "3CC34TH6DLuXPFEfpRFN7j7bvYnAMgxsGbbZWrXAXVdfPjXRKqJyQwm8PZajaSpicBw9PF32UK436pvbnHXM9xYa",
  "key20": "WQ8NEZhmcTogXXey3SC15S4a1hhy6iDUPhcaCt3GNTAhNG5poFtDsPErLuW7HTaZNBVPNzHD5uyPL5bDyncQk4R",
  "key21": "5fqerqudn5bBzD76JRzLTjKMGaj9eFjftbQAnTigNsZyzxU5BtAzXaGoTvjDb4UkZaJ6M85KKcdRcuKwYtETWf4s",
  "key22": "3P1CgK5tACt2RScPpdzGKBbPRmGzKWVG86xRUATiJaYCP6cHEcwP8uTRpsLLy39mfwbN1vz93sp7Ei8mVtMbBnBi",
  "key23": "3uHxu12ZgENpx3GhUteGLfNFwjdFSQGCMW5homPXcNiRXhVENTxNw2CmGPmi6jsVTMFK7kVthK5fPoZRDGVwW6X3",
  "key24": "4HfYc9CUewxkuVar26GiFVyjwSQD8BaTLJxRE2rMRu8ET1oYwDSMTgSP4jnnvXHVBDaZ9XSjuAzUTcLEzWuxBk5",
  "key25": "2KepGXfDsx7B57uWC3XJ4KRtj3GyjHEP3LiAxunUhD2aGJ4nHujMKszBjC6ZYmG6pd9AA7wgDDmMQungWBDxsrs2",
  "key26": "LVv2n8eACLqQxdm1LAg2TCuKhEwJ21eeUjEVwYHmfBdUmGDLavYYWjupBo3UNNJcycbqBr4CicqTcXKbr8ErSnE",
  "key27": "3QajkfuvSqwU1oae7PeoXHDKqEMHEx7fdJMrny8uy1N7HQues3LjRGTr5cJFEhpu1ts4SUQ38TGSK7e6QQASGiRN",
  "key28": "34Ap4PtbW6g1f7kajz2BTEjETnnbxbNkHoPLDq6vrqvZjNjSxKCRWypBGUbE6UD9kyrJeE1UiM18hhvWvBoSiQPD",
  "key29": "WbpULmX51CvDjdMrsbks58eRdn5e1NQQLuYpdCNtQWmmAmsLGeQM311288sJCAwQxPsXXX57mDUrCVVCxeqQfzr",
  "key30": "37aEpLAq5L8x3j4s2s9x5GGMhqLvN5YD367sCU3vmgcqqTVMLjdJ6qNh6PtkBiarraH4xUnNvS1xyKipowJNyknY",
  "key31": "32YyKMj4qGx8fKj6rzounwTyVgozh3W6LPKnZP2sDSF7sKjnvB2C2oFBDD9Uni1vy2wWwEubuSWYvL8tnJydQary",
  "key32": "4bakXAK6wphm5CYm39dm6VP3TMDe5NYBU9XdwmWPxCRJaVhWD7F3L4mjUPHKb7aapMKfRhW8Su5MUvaCZUL7p7EX",
  "key33": "6jW6b3k564CYohcvw87S1P3yz6JYFjV67Zhv4Qh3fLiRajkT4E7H3hPVYsZzYSVRBEjWh5tBNEDBpk97nvSBzKm",
  "key34": "4rHdGXg4www5dio2vUiiZCTwnvHcQoBEj15tfSMGPDHqjDry2ERXcZE1ndQupRpJy43oZpotLzR7VSjqHcP1V9Xw",
  "key35": "2k62pbH62PnTAbtCMeCrZcyvzcwZ4CQLF1dUmHgqQtnCNhrGPYL4keZYXLCt781HFzoRPQSua9MfZRNS19TbBtk8",
  "key36": "3EkMFEf8s9kvJ1EBS2N2oP5EL15LWcpTZLhBPZNTHVjGiF4zTVT64bny2ZCZDX9ew9PaWxQpZXEBii2piLjZn9gR",
  "key37": "3tkqc1XpfJgS7NM8J15gcVZ2jieyJyterbK4M6hGQgPDtxTARZ2qD7Fa2K9uk6gX6muggMFCs2Xz3q9NVUbLHfrB",
  "key38": "4ZxzvnVoDC7rEipAxnQxdrSg1FiaiKbFvV3HvnkEBisM9bHaRzZBXkmYsxbzTo9vdNQWa8F1bao3ajNfYqh5tYUs",
  "key39": "5TtgSKEbek63he3MiS2MbEbP1Mo8Pw3RS5aHyJiPWwQGamEkpGwJqU2uNNGjeCLGsaYVsy2wgRfAStxhcXXhZzEz",
  "key40": "5wPDyPh94oytsTh5cTVWEcjDYCnNrbdeqoKaTjvgG2wGmda2HSJyr3DA5iSX2tE9s8MUDkDsNGzPqRwaZnZ1C11V",
  "key41": "26RvYmvU5N81zRp6pQoe4vjdXDbXFYK1njDXZ3YrXvpJwbGvxiz8xUNXRcs4hVhE45SH4g1KapebbW3QESPQm6Ey",
  "key42": "4R5wKKrYM6d6ddb9TespvQjhZrpUGTAuyFKMbRQ8dXApycjEepLL71m2Zgi1kdy1zW4Py6T2CcsaLiYDESYjSiyd",
  "key43": "rsXQkhFX5VKYrS4o57U2ZfcHPyrtUpP2kZF93eRBCiZnYXLM8Dgm4CLdPzTthVrP6FJjxb8odXtEV6PWBgNhNyB",
  "key44": "4sB4QH2ugbtRsAG3TFA5MMQUtJxfdXrSAj7d4mM4ewz25syBQeAhp1Lx1Toc31wGJVEJUmUGTjn5HYAYWqWiDDgj",
  "key45": "yaCGD8a2xRMsBYvkEPnt2pXjC5GnWW2TbsLYPYZdfQ8E9TDvwraBE7uAng2TYzAvKgtuRDCVqVjPKE3954CPRLh",
  "key46": "GyoP9SK3QdUXtGsoc8uN4kbPCEc5Uk1Asax8StN3a3iScxq5e1Z6kJngVAMv6WdcghHRMfHvugPtNq2qaMXRby4"
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
