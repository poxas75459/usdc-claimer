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
    "3WrNCd4xDdHeNaWvDmB77pJUzt45CQhpKgF2amXqbYtGJfv68BbitF4zbzMyqYRsR53TaAzt6upvgnNE1TnVjaAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FmFsNf1PYkM9FiepNCqxaBU7d1NRdqCzQUkhGM3Hu6SwgZ1sVGPikYPeAGECknbaspVYoJXhA77YpugWKqFfqy",
  "key1": "3KDPuohAV7SDNMm85VmBV2GDvhT4GCtL2mhMMsX42BQPDJyWykCRqnsJLhap4oewkQrxn6C4cXzhQzd7fnUoAp5z",
  "key2": "4t7Drc1mQDqMWusGG1LcoBCvhZB6Qxrh9nnqXDmdgLjSJpwPuP7pWQTHFuCMrhiLjU59AJSa5LUYRRkKunnX8d5Q",
  "key3": "3DPyTUTrRHw4vrgggJavinWQXSFuH1rRCW26uj8zx2EsgGVPhajmQcfbHF6eLjBbLfEExxMoGomczuL1AbZSxW2M",
  "key4": "NjNA5SoDSNJwU5ZAC7N62Rm31SgY2ixmX1mLpz55G6rW7FbVL9QMQJ6KRhVPxK7sSeegUhe5ikc9Zbmnz7GKCNB",
  "key5": "4Znwf39j8antqx71ej7UZpj2HyE7V1XpKPW7B69CWSN7HS8fTCFiwnK1YdKNozUnzP6H5WR1nErzkTmBZEwcifFP",
  "key6": "4dhujbgMQHEeXRrjmtgPsfdznoCWygYLxAvnZPBZDXa4AXTLhuH4beXSrpi5Ehc7JWD6BZ7u6gAhq4pEDavqjueQ",
  "key7": "5wKreku1MeDLWQbKFxDXUyj91CDKoXuR5xDZb1fBKVafcv7FhYef9AUKbvAsW37JUG5A4kkmzAjimrTBqpetxAQT",
  "key8": "3iPSVG4hu9kzpWdnM8ZGConyFd4onLXuYNKqcgVJWqe8kvkpPWTUo1vRAktYVBm23YcMaJgQxpN9h9tVpuZiBzzz",
  "key9": "4pUzdCPRaGaRif62bDaDiBMM44GS9wqvdfyCeSDHyv17bPF5ARtoKYuwQejGXeG6MCAoSfLgEPc2GKZuZa9pDkkk",
  "key10": "agT1B1FfBq9qwW2xSMSQBxsqDdyiWz1JZwY2819voQMXt8ADwgiXXg1zLXR8Khf9cod9LuYmmwEnUVFNfBiK7SG",
  "key11": "eBDS3sKEhNs8gMJpP82NcYCzHzs3hCszENaeQNi1KLX6o9z5TD8hBS6BmzY3z581tRAXNSpGTrBMztaZfumN6Vj",
  "key12": "3oVXtPPrmV4CsvvcPCkUgjn6B5PXYfi8Ey2UFJPpwkSHwGiaGMyVRErnNgHkBkg2Pwg2PfbDEwi6xYW25FCF4xmu",
  "key13": "2y1jfUq3n2wZCaqUpmGPNV7tH1FT6LB2dCCEdhFDgTB3pvZDpbh7fUTwohtVzVw12D4TB3Weizn2dvJhvhiSKQtz",
  "key14": "4RU82L8AJrAhCAYVPVJM6z41s2mWPRaz3iAyKpxKf54tRCj2kpLrRTeFja1WKt9aLHS6tiAfHSLLNKVu6nQzPBYe",
  "key15": "2BYCSTYAbstiph5S42MMsgeL8DvzNwjYUvfnFQzHcU7Nx485kDJDtRYuT4EaVKAS7v8xJMQqycMECe8tHUu4FYLP",
  "key16": "4H8psPaxd4dQbFNivQJZ2yuAykr2ZP71HWus6i5ztYxSD1fcVRgRprVNfJ7njipf5ttxLh2f6DzD3xnvqfNQu63J",
  "key17": "4Njfi3cCMRPA5SxbJa4ocd9DShkLSYb7M7RNwjqtSTThwefWP7iRrGix6Wm6odp9KuSXM3BuQzzNEW9C354tcntL",
  "key18": "2CxBL6EYBcdDTS8vQ88cXRGWJa7C8GF6Fsi3tr5qV6yyzCXCQJJwjgSndnTCmGNcoaQusCrzLL55gvu8bDCgjED",
  "key19": "39gbK6b2SGa8j94XkAEqQAmnHLWZ16ydfCbd6cMB4v8i8Uki6Zp7Ue6iGz8EznDNPyU5GV8Hnxd59Fq6uUs3RHY6",
  "key20": "64oaCByYShsQi8mvgqHfuJFZormcTMJFS3PjwesEktRENzkENHdPusz4rvQxNnCMk9gHMZ2ZzJ9scoFPT9SFKCBs",
  "key21": "66pahfnYwrDqkFVF6waESZKNdKX4Z3jHMPZfz6NFrwETWmXnE95VTsgNig48HiXkrFbcViGZFnw7sCxieYZ1TixC",
  "key22": "5juN4SaFNePgSUKTXysbBphLqKzFdtLXv1732V4nsL4zdtLC8Kv2boa3uGioY7royjbH6TYinJb5iHSV5y7KBgRV",
  "key23": "x97NV82GZuCDF8g4qhpdCU8ncx5yoDZ3685pKPeYUvHZWjbDHYmTapL18kHwFcY122dkhdUGu7EpcLj3HM4Book",
  "key24": "Y2WRkqY3rKzgRJfAra3j9gBsR33bndigeWdfiBF2G5EyrVUHLib83RzM3wGmFdCyoUMGMcKmqdoWbWPqzsztqsg",
  "key25": "53z22mSucS6dtkoRkCMdE5vC75L68bnZsRV5hGFoVtRHWcf6mTfHq6rNZfXDsbDihy7Ptt5j7YjDvH7X7BYvythr",
  "key26": "2eW1uuiiqwm4Rvna3b1n4UJh8Kbf6BtexoQoZwEn2BeCLu73bKnRRwmjBMWWVJ96Qw9AMtbDmf1xsySSZ4Uzv1jY",
  "key27": "5iiDw68XqJmi4W5jpRV4pNiYTFXKMs6txs9fxZq6sKuG3ovqsLhMch1ACUu5GurAMFVLZwgQjjiJ7wUfXnJQdmfF",
  "key28": "2PTcKCxWxoQAdG6mY61NK8TZQkqovPe38g92kk8QRxp4qxGn1hgrxA7h8AorgsF1HjNSKTLL88vhYtCpZ6ABadKe",
  "key29": "4HZi91aUmDqsS81HMTWqNH6FhFSWSiiuEvw1Dcso2YAaf5gvnVCySoeQiDumkKErxtw3S1rb3XfbRCWRpMyuxgBD",
  "key30": "4VeqwXDqh1XKacjZkDdpk99syeDMf1NgPVR1qDCbjkMbho5hH839t9zYpg3sd8jJJAubnaeTn5hHkV1tnorqqsnq",
  "key31": "gp1KSLR69sGadrm5BmbLUfgkDvXwBUain22QW89AHu538VbF8Gcx1FgmBv4LrPvJM7hhogjnqT877H2BSt1tSi4",
  "key32": "3nVKw5JPwAoH6Udx2aJ1AQdJoHh47CiVb56W9JuAJaBesysstGygdZBXSKu3opFqa5urUEG1y8muzKFSFNPwkiWb",
  "key33": "PnjQoYy3Zf6X7V8wGUzNiKqTtHu51sCqaeZyefX3ba8wEcfDbRZckBVSZ2mKwXY8c3nCLH7VDcxjjYC5XkNhsQG",
  "key34": "4yStb1Xfz1f7RgX8LiEUq35NppNgPGt28fLhaLw4mXwgobTykNh2KTaEN3qqspFHMNevSGpGgXtbUqYpMZXCUeCL",
  "key35": "5PwfUZs4UkgLXYHu585nKtfR598iXcVfVdzmpAHwGjrecgwKZ1tPH6ayRyf3LLFmmKd3y8oVE3A6ToznL6TLwhbW",
  "key36": "4FdQjUHqzXDKkm84gGwBGj2Ek9AodjhVds6n6RiZQUfRPqEhb4um6JCdqXDutys9gZDxaXFmd8JHaikhN8LyoQuK",
  "key37": "4gk1yYZUn1b5bir2A293ofxUuhdyVEvTcKoqzszSnMF34o931ixE1DZXuhbDTJ8oZLdQT5YtAABeU1vVRDudc7zo",
  "key38": "5t9pDw2VhiYmWyvK4kmBHCUpkvUJ8eLPJrH2ymbCrrsYdHw7uNBzJ1XsUTfbKmAaySA96nxou77UfSvuSfkLHSzy",
  "key39": "2WDBWXNsonxfAGQU6TzFXzhHsQ7MqZNVDgzsQPG5LgvoQgi85GiEDKY6PSiDp2WukL3cjBEi71vT56KftP32cvtc",
  "key40": "2yw3JEfjbSjgMmPNrLDJcmzZM33QMq4fa5CxKRqwZgPZDfL2R8zMnuBHH9AxLHVVYAzDH8USs1mQbi79QRR7DsZq",
  "key41": "4hCdSZUCVtYabyuQ6SXyzYije2WHdMLCEz8XX3mWrhtDN7wSQdqZoU2dqtvTypHhSQUuqkpwajWCfrzZuizt6fc3",
  "key42": "3ysuUdD1mT9zK2PEUjZQmpGYTxEmDv6jqNBWxY87k6t2sBP5sfMySvpFEPxkQoT7goMBhBMEfdsCJPYDp8TfnoXk",
  "key43": "4TRfeAKVhyzJFop5chUAGSg6WBe34wNoAtYgqho4sjvamqEZhbt5FZbVFcSzVcATDXDdYRg4wBRbCwCMxADJYKc9",
  "key44": "2YH17q349q9xJEVcJdovKrKhG68mLQ8oCXUHaVRn3CGdrzC93xrbYxKC7axtEaJW3mheEyvfgFTn9rMFMtqeWiDP",
  "key45": "U5CtcxbVedVFTc91Y8jVynUQXdJc1GeVr51rt8KnJi5RguASNAYYgt1nqniqtX42dwnGpQ4RcBgXoNNeFfrBVeS",
  "key46": "5uaXPqgZSbHaLTg857Wfykf97dURT5i7gdceVWeSzdpf3pAKfheFNyWQDzg4AKNps8fosae6EKm3jnJSYc2cKWck",
  "key47": "4rDZBwvWj2v6zh9fgnoRRPUbSPZk17hZ7J2PMtbzR2hoDc5LMGJj8dDETU4RmFMs535LE2QRN62hhT1W7cAgUaU2",
  "key48": "4qprZS1GQUYbQJXY9FGBRGe8FkuQUzaavQ9t1yYxzjh3YRaKmK4CRvsanwPmNwFBHQKWmTUFSvVBJ4ZDLW5sZt1p"
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
