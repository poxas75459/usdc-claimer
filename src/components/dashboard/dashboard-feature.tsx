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
    "5BoEyoKWVDiZGVjSk9sCQcYT3R1kbp2Bj5hogbYJdBJyrnqgNBY7mzJSFz36tANcAZcCF94h5QDJDiVWrmLzyQFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qT3PvKxwymCWGGYzV9sfnyUM8xgR3abPg2hnyHt1Hz1SXFbWi3E3meN9yXRoD1soot6JKarTUaK6vkMCU6BzEVj",
  "key1": "eSVRYzSr9LjvrrNn2gevDB2V9mxvSJhfwFJsecKkRNx7yduiEKZyKrRiG5oR8uW5k6s7eX8WuVzfZLpcxAErEpt",
  "key2": "53GeadaJ2DNfepKqBGqTvU6N32CubRjEYz3DDGzNdV5dnLepJjnMbtAuDYv3eFTFsH8zn9oXLNvzLsmWLXUnJ4BA",
  "key3": "5xLb2xf7aHf8erUHKWoZTUAeMRsDjiD9rReYzmsNMrfPq2F8eps6KXaEKonVUJPa2Ui4aXJhszFuPnuTBrrcs3X9",
  "key4": "3Pgfq1jyUXL4PSMKxvprBeY4McS4DLjaNeRDBofJxTP9FmDPat3Ys2JPGJcY45EZVDRoPaySe1S4v7dtj5FgpgcH",
  "key5": "3AkzaPsozmmXfGgwcoRmm1NBgZ4RAokmrrLRdQemNPUFHeCwAeJc6K6AjRF4FwvB5UZcpVbFuEnVxzFM2gYyhCkG",
  "key6": "3a4FVbNGHCjk7bjYTkGB9xrY1kcAuPS4AUjcEmKytKCPA77mTSxwpbacDBiz3p6ihCiCfhb7rjdW5XhdwC6xT8zh",
  "key7": "kqciZwzeJbYDkd72GHCTYEQ8hxEzXjsntunmrmuukfnnYb8dvtLFUHfdspCZ9sNCz2nijiZpRJ9B4V6gs6E3kmB",
  "key8": "2C1TWjPbneM2UV95Ei8BRDyhMgmprYFoNXQP3RCUkX8y4yurGWSsmPJCtiBPAhdbYMuxi9QC7XWVTRBMF5Ha2NUh",
  "key9": "5fX6XW44oPmfXv7dzyuyjk4UXeDb4DwenXrAFDttdcTJnPHiQdadWn2auK9PJDuatATK8wib9L8cob6JTBwnanZ",
  "key10": "37rwHyjNuy86JuTokEoXxGw3P4JhadniKNsyCkWJdsTvcyAhB7c75zuagwP6QxFdcidEQKq9K9zs6gmVatYysnBX",
  "key11": "3U3D2z9yYAdrMGfA4iWrvf6h177CYetebzejLmPptf1TqT3FGdwVTnN9qgei44NA9Bme6Yhfw1ZCC6jDGrjtuwJi",
  "key12": "SSnjZ5fHZp1ADEQhGJzgPQqsCd259AU7jQsKqjgExhG1wmfMHJb8djpiyrNeGEc5Yz4EU1d5z12726GouXBUdGS",
  "key13": "3VDPaKMAe1zHFNR3saL5boPTCK9dBbbhrMscq2feSJRDjAAkZDQ5jrv5tfaLCXE2sFQSahgfqz1ThLSFDhBNx6a6",
  "key14": "2zPJE1E1CbtkvuX3i92ENtVg2DbW1oBuh6Hqd9RX1DdF5hKS63zRASMeeqEdvB1QBhsQQZvHCno27QtCagxCreUj",
  "key15": "53bWjVsFbMFJ6AsXkJjf8wVexzJ3n6sL5NiyBXGFi4pSupteP3wwVAB1uUbCjH6mExA3HtZvoTkWksFcECM2r3XU",
  "key16": "2LE5HVpksxwAcjgMjaVLsRCyX7KdjsGuwhPgYGL7WC7M8P6eCbyzC4atiydisP6Sz1jufrU1KsAQjLP3GZSnXLq8",
  "key17": "4rdHqDWGSRDJLzJjjn8dRELBx41WqFXs6W4bp4QMjFka6VcP8FGNwQ7XGM6naKdYikfqhLT15ohtn1UP6PPBLHJp",
  "key18": "5wPi8qkQVNLMptCtFXCUqg1PJqk4HUaCFHgCM1Ta7Ay1dL4dJC6RJeqMYNKQLVi2ankX8wHRTfbGvcWGHNzFLohe",
  "key19": "SrQR2t5kGtz6pHpPESehREMLKuAMg2epc9qtxjAmUAmGHFkk6BkcQDTB416KF5XKYZZrHNCoGqPoDgqrkmofMPG",
  "key20": "3nvUDmaPhGeXp21Txos6441Hqs1xs4gDL7aPVEp7o6LXrz1ctntjeCDg1DXSo2ZqwGiTCzvjU2ZQG42BAqoxRbkJ",
  "key21": "4DTUQ9aEcyEBNX3YL3yH9EeLpRJJqx7Mf9pyHAMaYVXaTcM1xHthPYQZ8X7EdiMPkyjNMaqqAPtW4zh15ajdvmDC",
  "key22": "4EjQCodydmHPhoN9MqsJ6iGb6ke88BP9bGAnJE8ZcwDUzKbsy7kXGE2DVggEgoGrfE9mEC8t6t6CyVAF36hYki2u",
  "key23": "NvC8y5D8iASL65g5T6fLi9RcdzC1u9g97eaiTnM1RQtoWkLyRgWdWie8NQ9vEQVKGigW4twon242ZAFJKdG5H4n",
  "key24": "2SbcJsw7u5HCCCC1SczFNWyzJ2PadS6XhUyVWg99biCKF192tHfJ7cwuEyoXVAbYmkL5DDo8KKKA19uf1PPxB5sh",
  "key25": "mQhnBuKBReywM8ZmyvM8VS49GkNhXCPRFvzzhYEP2oFZHPyz8eHE6fKzm3xK8wcChoCKRJPzymHsnvswDP9YgnC",
  "key26": "3HD2yTrEmfi9HaSojGJ3YVomx6Jn2r8xLAKtyi4BYDD3BWyvstxxMLGuv4FckXH9BKazFGaene3duv1BwaYy2VDH",
  "key27": "oMSxieBUFHixAbrArVavSPZdZVbLRmoGdxCWnQQxDrbRYCT3xDbQ7VTUByGkbuYJtYoQe22PjpcvnAryr8PLRw9",
  "key28": "4QZySRSenf7FCxZjyD8Xi9DRPDHPe3bMvoDdHChhp6m23ANtVgfYd8hUxZk222X1j1u6JcgAeiRQxHFUS6N9LmuP",
  "key29": "5nHfx4gUcc5w2gxr3bp7buM8Cit92WCBTzgM52ww3wjr4EjcWum1MaQ2MctjYuxpn9Rga6TaGgBJCmfvj7jHG24",
  "key30": "3Be7K8VP1pfAa3xjSSZXqG6YCvtV1boZ7hJmCAhbwC3TVAKK5oD11W7bneyozuRMSdXcQk8CqaJsAiv86k3Vy32u",
  "key31": "3hYKCNKLqZSLgYatBk3h8gdNjU1yBSeVoT5W4eqGkE2MzFwjsHSpb1ydVcAFcChtkcuFyAkQhEawp5FKRcTQM6sP",
  "key32": "3BWk7ZtB6cKFztZ1hx8MTJBfFMppKihqKStwqA4oRNsRwthtjarxFQKNhors5U5SBDexhVA6JRgrZJMJSmnGiwqu",
  "key33": "erFuru61jmkhMcjEfvrPVuArXZhKUiUWc3qLJnnYbwvQcksrHi9Tbyu5Gy3ugMcsBR8zjT97WTGJQ2JviTadGNP",
  "key34": "2FSbhzTjCjFbrsfgdZgMse3juFZe82bDznXmaZTUbBV7kA6w9deHpVgiEjkTJi5DZv26uQ8pemcvpA3eq9D6ML5n",
  "key35": "45CRsT3aQrkaY3ZM5QA42pnpnvaVRBrtiXSff35LWPH9sytZczrt5Lojb1RNjMbdLJHV5pDHhTt1oLxdirW9yg2L"
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
