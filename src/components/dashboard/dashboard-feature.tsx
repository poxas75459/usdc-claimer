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
    "45BfvF18kqHSdH5psXr8YmBN2NsGtmYF368VdiuqVcqx8y76hm5ABU6cVFKd8Fk7XXfCSSnUT4g5nJUByCFYQnnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YHnDBqjZe4oLtCmRTct8AVS6phgv4BRBo5e2yZwFoBNMnF8wku8XBQrFwGjjyux8q8bMNzGJpS4j75xqW5JizRh",
  "key1": "2u5L8chyfBoCvpER5XHz7g5gepR1RacMxQUoAFbppibWyRb56PYUqFF2c1sKb9NRahnTFE863mG8WS7d3MUVsgAA",
  "key2": "D5Jgbc3UPsEm1xhRBssr9XAsXvxwHYKG1PaK1BmPv8s2pCm6M3dzdE47WVRTRmxCkhzsqzVJ1V2G2wkpzYHvdgU",
  "key3": "AEiWVzFYRpApGrahtwgn9aTBAWqwtjRrX7cwVNZJay53cU21NDg3oDYZ1igabWSh8X27PBVFEceBtVgGsCK9Axj",
  "key4": "4YhhXqrQ7jw7RgeyrbC8BL2hRhJAWK8iXgG7YhCg2p9airRFnu6oEiVhLASf2TfvHJSz7Jn3Z8NXipVj1JpdDZej",
  "key5": "5ckVZ3REGdWWrRgYvWBYXmNpVL6wXhzE5JFM5mjDAatK4cLoup1RNHTupGMKpaYKqHuo8MPLHC4xfANJsm4bQRHn",
  "key6": "2d2PD9qWzZYWZiDoeXfpKDHLjakCbAx85RRco2wqjjH2umcpEzb3C14ZMkK4DUoGSpcLhAq4zvcMaK5g5NKVDjmo",
  "key7": "5uxAbkW1Gmk48ZVsoniDpFdaBD9SzPoMLfHJi3f5edcJsa86yECsyGjqrxPZTtMztHUYtP1jbeCuJt1wbTyeLL9D",
  "key8": "3WHm3DsjADMRK7dfr4w3b3CvvC3RvrLPAmcGeKq8xE2P3WikHgTzWc9uvnzR2NWgonDe7iKwyiEagdLVPbeNRxrd",
  "key9": "26dMgciur57aXSAhNwHmKcr2bCrM869nizBjuZ6iAYwU2ADi2tBMzn6x2CrmLfPnzb9CC2e35nWkH3K47Vw6ggyP",
  "key10": "4WPcXFYaFv8EbffXDu4DwAJjz3WsMxB3wDkLWc5CqiXZtGEAoUuYDVcKuGuqRcZeJvg55G3BfbM49ChZfXA4cdS3",
  "key11": "xHxtcmS3CfHeB4QdhrmuaNisHw3BmYVdhbQnb1zYSshAo53yuqSXE4vFt3QyhdCB4Gp4wGm9hvNtZshFo1h2Zik",
  "key12": "65BKoj4FerwSLqgTiHxLb6RgFHNsRuYzbFBTfediFhCm722Q8NS4zuq9W8fK3gDD3G9g8LTL7HJAbUsRwuyKqjC2",
  "key13": "2pqc33jK1Ge65s3ZpfEYYeDB9nxtwJrtj1GXRAJDBWvin7zYpbtqsStxBSfAt5Rp2wNBQj186h3iGVdy2nPaAyim",
  "key14": "5uddeoSNbmzRiYUx4QYEb9zaGyAtj2RxHj6pKnNwiTukCkDoJHH1Pm3b5UFruWxdpZyhMDrsGpPe49E2rBAz6Vna",
  "key15": "43CqvoQZGJ9bMiBTjQUeovpH3d8m6m1m3xgxnjAr5aGgtzapxzEu1xx3nwZ2get8vufaezVUyfU6LUSs3PrXQPMJ",
  "key16": "61pRUqpEkPqBiMCuVwPahAPbcWs9vrtaDo1LRApeQS5WbEsdst4yFV8svqwmjV6LmUe7zoesZA3QUt1E7dEYk3Cd",
  "key17": "3dsnA3DxREFXV8g1boZKGafrjMuPF35ixsfpJeLHnc2bdU73Dik5DFLPiL24zoVfyRggz52Cs4Q7K1yqgY7Uqc8w",
  "key18": "BvHyT8bq1Stk1dR7begk46VURsBmPwusnvym4t3UUuHAvoXnAneyNDTvBen9tHR6ByWMH5PAFg4qSzp6XNLvJ3g",
  "key19": "o5fLSG9Jm4xGJCXDoZFa1R3pTA2D4NgFkn7RCzM8MjqBjJRdY58ESq6bzPHW8cVRUyHFwVzMBqqqRas1Rj2Yn3t",
  "key20": "4awxSDtV1VQQVsAwcZw5YnnUaRkYG1xCDsju4dsuPrFrVwLnqCrYoagU7chxie3uFtw2YYJE9CiQdPfbHPQoKPUN",
  "key21": "5xfC6R1kjjKpnuKgy3EYVY8PfExtCm5VRc5HmQ9HLQmELUzQQ6Jxp8tWv4ZLasXtk3fQtRc9kFNsLoFPCWQdbqgT",
  "key22": "5cbN1QuXtzWm7ez6obo4GBnH2Mgc6FnXByCwVXa5LUPewiStX7x3YKXAkCgjinXtSoF45MjKmg6RdoDkjQ8xUunT",
  "key23": "4BkoUVUnJGY5UyL8p5CPcFmpnrrGhWaCZXxgXUedK8jL6za6JTGyoXQH9Fciuzzrt9GgZu5zw213Hk7u7aSzkxQq",
  "key24": "2Apakm4dTMKQPdC9nbWkuro346jrGanzocrDjPU6wExwexQZD5bqAmz2wp8VBWw3FkEcRrREtscJvC5fcwuH4PLZ",
  "key25": "4F146viJgQX7UC1v79TQVEWgjYrzycKYMHxMLP8154BhdLmRnzHT6RuyJV8Fg7pRiRWsF1VkSdSn1yxUgP5PR7gQ",
  "key26": "5mbggFYTQJ9qKr6s1Lqjrfpg5Vbst2M8qqRRhbyhdAGs6rTcrgztfrEEiu4QYSwUAfE7cWr1Aww6zZVxxdPUtLTC",
  "key27": "5zX3qsTGAnFHYtQxHDnkPUfgzuxyoYXuEKwWHxgTgEmJLUrFbQVRg6Xr58Q842MevjTPe1tVr9ABgACd9V8bgGQv",
  "key28": "BhexWU16AaECbekH9JvKwdcNDyePNvJXNt8xYUuvFrsDHgRHczWFmSx7ccH6ugJ7ccaNG6U2VQCeQejH9jH6FbA",
  "key29": "3yWNNPPJXcZ7UVwfSdWXKZkEhmFGkApzMFq77gjKDa97D48vKYaqvtKtWVGXLoU9FgD1Y8YPx9irP1Xu1cdjKLhk",
  "key30": "3vVAnEKiruwVRL5wAifpV3tUuUNc4VVGxbNQX93acRrmfQky4CGTLPsd9Lk8PadzFJsV1xFafEWj9bQ4jLDCSwfA",
  "key31": "4FfARmNm5fu5xoVMDEbb7atWJieSfKNkspAf8BktL3z1hfATt4Bk8bAR4mcZMJzPT5XJy2rK845KBwaSaLpCfDYc",
  "key32": "5gDySWZbARK1hja9pjJi7xQYYpG81VQRszf5oxxKXrNdKkQ8uHAhwXqhj7jeqg2RkteJsqCbE5UFswhkC8Xws77S",
  "key33": "65K56BBvEDLe39rvFUmfhJKckt2PpVYVECkrQqR9bB1r85hD9s3edYYatST8LbmZyTqJ3kut1oMcxUvGY2MDgouu",
  "key34": "57CVkHzM8rfQr2hvEHTN364iQ4KxrCABAHgoykSrQTrBKuR7pxKqEna3E2or6D73ov5yBm92bKu9Gt6KPH6nnQQR",
  "key35": "4Avn8Y3DRb4ZHV7GqVfM9JuAwoHgNx4veejL8V1DHh1R2GDhFso9jGdoMPZzmFedfxuv54xEDZHttLMwzfrhejm",
  "key36": "xDxjSazgkkQEQYdzaCGpg7mnbGhsfw1bKzn4GYMKuGEqdfFhkAGskWYL33t4sKX4pVfX7VUeqohQsiwgjs5cwEY",
  "key37": "4JBtP5EkuSBpH2yjhmHzzdY43m78DSVorZzLn5oBFFoLTDnzy9nnTUYNHe5E7SXu9K6sdWb79KJbxgBcXYjWVSoG",
  "key38": "3dCGtjExZKvKwTHjx5MtbMYB9KiboHoZtcb5rWneJCPH59RXzQ3QUjgKeN6PyS5CfxdaqMRy9csCPrZfqbSktgee",
  "key39": "2infAjMXQJS31K8a2K3mZrwWg3wy6WXKhXN7p8EU7XzVkxQGWfDchV53TYXcxK8ntfAeubS46t5enp8HNvB3483E",
  "key40": "MjdYEMjuCXT4fgZHAAU5gvYav2i34Wuz2FNr2aupmdPsNzSsQGaB5M5gATQAM45vucNvcsdmmXNeeFJZDvhNECU",
  "key41": "5ACwrFD4BHay68nWmMVfHb1iLzNauSVmDYvP2Yq4hFj46JgZpLv8haLMPyb68b2aFEnLub7AzuekFFQTiYmHtPt1",
  "key42": "3qNLZT65NbcZa23zN6rzJJbLdbRUzLdwvmj7h8ZJv1iUkExksrj8urkdb7qakWFYw5Ak1JhHp4sRfwnkgoLN7iCQ"
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
