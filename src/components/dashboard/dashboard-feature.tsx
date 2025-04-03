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
    "4UiPZn9SCrPpECZ6VayJtMF8vsjG1KjPq4qEVNGVrzwc8a44h7UKq1wfZUvZRYKtn6ZydUSKGnN3qAcRoZ85Ubm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HUXEjEwoAMngG2cUe5grcZQoJLcBAG5T5NgwxTrYTWotEWnBiXYaTmhPva2wNpfJ6TRY7W46L3o3AJqsPU5DtWK",
  "key1": "E3Q7RLXNi8XVrCwKLcKVNZBHvDCPGX8d3eqxVQ5VBua4dyQaUfJKNZHZeHnq9PxUsQMmKtE7m8WipUMiEyHb9NU",
  "key2": "3whPnzXv23oV36fqVjz6Y6MHEnUMNdKbeF7ziTzZgnsBFUXmKBK7Y9TBEcWksdwGLVMGshVG4N6pkgJ9E7tihjfU",
  "key3": "4HJ45dNjE5zUsFc7N7mf73J9ZwmrgjhDwMJCcgkEG5amHkLdqDqPCFFqumJMHDvPzKY2bk1yHXaHEVgXY7TA4CTM",
  "key4": "aBMdezQREiuiCE7KurXDHtK287BQV1hSNziy5LGqcHm1mrQnUM4243XWvdx6Y2UMK4Pd6mWwfUHGJLo32ZGw7Vc",
  "key5": "2NBmFn1NdqmsczQ7zKWDkN8xTYe884xyGkF1o1MBmWTpLeMh6koftXZCioLvikcAL62RZukWrHuQVqQ7RZ6etgBk",
  "key6": "5phvrzHgtiLCxgj48bwcRoDjSTnHsHmB41kY2jdXwFthv2mcXzKbwD9rw67hDFQHv2Lz2VpWSeVxRLxS2VdEvuXZ",
  "key7": "5jYeCvpgkYW7tzSmtBpjtz7tsVxJNa7VqA8X86kDrVe7eyGmVboMd2jWny4BTYtgxw3r17oLJkqHqF1U9akb6bPv",
  "key8": "4nC6VGo2RW24JeZ1Bs15jCVGDkUCfMsvNcL3jHhY3d7nvbAWBZU5BHj3yu5Q5SGnMJwBSdMzb7V795aJkEvZQKR8",
  "key9": "5fqUNDioxMa9QVjzTisbabh8mNtwimc8zh9k65XFwQVX2Qx7Ejo1By6SwRceorEjAwmovj6VB2zZpfKC8qnXSrXL",
  "key10": "4APkvaiKMCjZWgyz2WLh4YRMxiX3KnxT5omu7Em1yivd6msgHBWBz25iwXP6KmFBvkEtYFYYNJcENNn3iwW5Jr94",
  "key11": "2Bgj1BJ9exSyjqMK9wFWwrj2Lqca6KGAMaEeFrHRcZuNQtyfwRYKP5S9W4jbhQYP5GmgUiieQsvDSbUGH1PctEPW",
  "key12": "8WzUZyHjQZD1ffSuaTzmsHJcwjXVwb4eJ7qU9t8659JWirjoLUMX6Cidq27ekoxgVh5LoEGHJ5rknc8n3yto44z",
  "key13": "3Ja1YwSwp7qCuJrLiSaQDu7NcjktGVuupmmxY1ziujeMWBpFRABhasnGsPoaRkVUaGRisEf7B7eHbbfvynKPnTQ8",
  "key14": "4k5g7AjBrVSyYVQ5fWgQ7gbW97f2fL8hFBSNwdrjCgixyUpcvLGFm9RnvYHHgAzXvbKExLcQm8pAw5rDdUpp12ve",
  "key15": "2JYvV5ZqenNiZLeXmtM5nS4UpLDYEmY2oS3ia2hnhtAaVkdFKZDSGhechVJbrcNKRrN4pzswzTXymNqrVpcqqCTg",
  "key16": "35NSitzsyQGuyANWMxUiApFQdtnXmAifK4RyRBmckzsMys2aUwDrNdd5jspz6Ud9d4e6TcQSVQ2ArqVs826KMsct",
  "key17": "2hgZvVBMyNTosbUVsKv8m4PgufHMczyJaRzyKZkw9JTGXNyDhHcYgUcoJyYUnJf8XeTEjFwn9E6nSZcGfZFpstuG",
  "key18": "5yCGFCUsKDu92FoduDwQyZF6Z3xzG9KEpA1TExkjFFAZ2LY6GrsmBimSfByL8PUtnHEc5W1GjSmKE44h1CPB2UVZ",
  "key19": "5NR7DxSaGPU4wVSBL9PgMUNmCCiSR8s8ASvDoWPGxnivuWtAaSdvn3B3v9StVTtBVSHAddr7enPY5H2EijVEikJb",
  "key20": "5SmgkS7hhfhoyzJHFQATSiaensLUX2ER81xjCes5UP8xKXnZtkYUuPNBZeZuuA3iDLx8PtQYu87WwciFb5efawzf",
  "key21": "2yJNEphgUo2izm3csTBBJHpAC3nYB3x3RWE9oWpSyeHG2JYfT27xRTTqfxQkpYubX6it1fMQAEoFi1dSg9UhY7nE",
  "key22": "4yRQ1zHKRS4xatF8tCBf56hMg4zL8d3jyJb7kTzSqByisD7R3HHRMgmUzrUwyDXNryFHjtbzDiZpSg115g6B1isA",
  "key23": "2f9xUqHTiGPBRsVrtr5u3nvRjtrtSH5HgfoNaQSZ7YLKyEDu25AwEECaWcfhdN1YeCLd5Uyu7pLnVyTC72G84u5d",
  "key24": "3pRYoqjJxjtzGkGiuLC8Pk7jD6byKicDFPCGo2yzx5JywE128Lc5phHFmadaiYK2McJTr8fymKskQV4LwmRy6eWK",
  "key25": "3nHFZ4KkXx1i5pSZXwjLggHUrvb1YSuHVhc4dpyhQyHC3c5m3yQPdx6YyrZwcdqCPzGMjL4htWDikzGQ5WQPqNc4",
  "key26": "42WSC1gy8b3dKjHDYJ6nvP6CPpnkuUdMiV2YkKV7t4HFamno6jxeuQUncYst78JuoKCyDk6bc7qieQ8BiwhbJUqH",
  "key27": "2YSGnyiKFaSe8wSuDoqiTM4rFt3e1dSEnJbVRSFaubzCLHeu9eFpJqM3ESgtyjSZnsrtzV6MMEfGX2wiPnP3PxG",
  "key28": "4nktNsUUN37VQodsCkWY4L6tu9ngXt2ezCTvhohJpM7vvSN9TxWHDfiFLKc1GmBUmSqLwGcKGkSP1avvwckjowb3",
  "key29": "4z8vuRQbNWb5vgDo484ptRtc7SY2Ma9yJG2Lf3RS5DvXe3JLXeB62bhehsZSPVwmbYbDLa8KGnN4Soke38Nxxc4B",
  "key30": "2JfRqoTK8h1U7Cof26Gi3meKLpkVuGxTXQ5UpoLo3BNAPft6vd8dGkLqFxDey4SWE1qow7Akgg234NPqy1xEPeJJ",
  "key31": "2pwhBATrzfMd7DXGaX7n9sxzUQ6u7vCSjX8tfhMUGDrQmmHryKypttHiYEAFtwG8xLYaX2tgmV2mgsakpHKBapny",
  "key32": "5ZJFixv87R63cF1xZ9C9j6ccWSqxM7p2ntt1FTDYE6w5kzSzcmHT4j7MYQAuD7jpZAJoSzX9M14Pw8f8K8R4H4gr",
  "key33": "4zoizZ5tmUX6Gu1BaihoJN28Ms1JcC4gXEukbXevvLHp7ALyU7psDEvPxDnhdEbX5rSQLeCBeZDUKq2ZsLv95n8Q",
  "key34": "5wse7g2WeF6WyRboHu7sbHxL2pux7Ew7vBVs2bPTZH26VXbrwG7cVQ3fNCWWXj1bWYLnkHCtkZeCRMizWRgSysTU",
  "key35": "3yKwUvWUBJStjCU1Xutr1AH1FS2jnhPrKbuRrJ4wjWakH9abSMrwwfW9Zt13B4fHWXsBE7WRBanoQ5oPMTeCdFf",
  "key36": "xxSJXVj3U1X1SvyPduJuhTf1GsG8CFjRCoi9ir6HEVDaQzKQNUvrwZcMAGYURhbJ171xzXmAb2GLSpQM8cC4BmD"
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
