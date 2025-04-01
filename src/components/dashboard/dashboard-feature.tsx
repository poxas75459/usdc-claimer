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
    "3EpfvUkFJghTDVcZtHA9SHBmc851Xw6oiDVt2wWSG428gSHJHb7gYh4Nqd8ACDjmndJwLPetVXfCgJjVB3u6x1hC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oAMw8AryPdavcbVS6EQszLCcuMrdwzsEHCv3KrebBi5ZKmXj2UxuvEyFAttq43GqGMPNtAstRJPAzxW7jRBZ6Sm",
  "key1": "fN6kjXHsAHubkv9fwTu2WUS8etNw49CUn2YSP3fytxYqGXtRXHDQ57TnhFekrz3NsyF9FXjVoj7hx53G94CuKTi",
  "key2": "4o2MY6PGkQse6UMphPGXb5uiw8r8SBRmucdEbEkuwi5GhntSdYeyNkqGdgLHkQvuTeSdqDFdeTMx9jBN5LyyQxnC",
  "key3": "3xBPuzxgccfiwoBZuxGLezgRjphBBCtja3jH1auHa3VhcQ9yYpgywMk3wAcRZaPvuCahwZ9kiaTu3HdfDr7jSTVk",
  "key4": "zYa8AAtMvcUe3Z3oEHkigWGY3J9E2FRHy6ddFutyj8PiBs1AqTJJqpH4zX7fdy1Hg3YjnkmadLHQp1J9TeKjsGr",
  "key5": "i4f5TAaufqFsjd71tSzyVSemAnjpjufPgFqKCZAE4YrmLiFZaKMGapMPVMQV5gSSucBzRdFj6ZgCUvsNjAh9Azu",
  "key6": "5s3AGcdC8tcQSGvD1iS59KyASwdnuYsf4gBbgnu9915jprksvvjqXAo9YPEtfmkNrNAKzQ86gF9rvAgnpFYHGtyr",
  "key7": "5Hd9Y8Ek2McMMDtcr9rZRbW2uazNR5Agze7bXGGkkjK9KJ22HovM8CXyXwrQrJuSczCNm6yYmztgovAiTRCUX9jV",
  "key8": "2SU1X9tL1vPbt1ZfEkYo1sEDnyQbVyMN2iMQRDVcoKodgFQeCgXYQ6eu2SqhZvFsEH58wRbTmD41hZZBezcei3Ya",
  "key9": "45DErVguHxP3RtzxH4iwR8zWNZU1TVTEWSraJFu7uUBoJEKJioqDY5hp1UPwTmriKmCPPmajFab9MC4ctMGLcAnb",
  "key10": "2KoCLrgBeTDh7o9GaPfGz7FDVKzbdtCJagzD2PYhRJCWZMBaxbrK5ASBQhr9HPgm9a1anxS6qDZbRM3NhS1gqkXa",
  "key11": "2SUMvEEDYtjCbMLdbADNsv9YuSw3eAuEaAwpUsVQhHopotJBGeUhWr7E3d8fDGZebNYE1U5tYQGAcGA7E1D1L2A7",
  "key12": "4L96dsaxGBaLYifxzQWw2vGFA3WbtJzVqp5169FqKCBAg8auha3btL5gfusfhtyibpw7XBFphNZW264h5syno1Em",
  "key13": "4QSkTohthSNKhKeK7G3Mt1h6kHMJE6QWdfH733gdfJsBHd2qzhzp94ozqj2PXZxPNuYkbFCpZ9aakM9SvswdTWh",
  "key14": "5azaz9m1PMREEuyKAcbA2KyTQuQLS2fK9Qr1i7B3t3rC5a3PkryvypKbHkTfZvUJqFsMvXQTd5yrDm4JgSCmXjr6",
  "key15": "37Tem1JTsCXFdWFGyHj74RQr7JqcPRmsH51ENxd8i5hjMW9qDnoDLJG9kNLnj5syLxt3oMCkuFgHRwzjFR1xZqEz",
  "key16": "5EsGBacq8qqKUUrL3tPg9VVb1faxHUNEAWUTD63S9Ctiz5zz1JFDuQGLLCVnY49T9J1qgx4eeAjfjdRjTrPpvBFG",
  "key17": "5qz3my6zCBZ8q8V47z43cdLJzwmV92C2Ar6xgvx36xTHEXJBvghjZhw1TwM1e3cJDo48enrjaV1K5EPvpaGgtVL",
  "key18": "4vRSiCbfkkiCUAQh6soqddzcdx8kgeEzEavv96kGDywemxF4bU2Y9pmWnKopULkmf6GLNcw7PhmdDCV2PvThdN4K",
  "key19": "3kAv7S34nFXx4656RRVBL8d1vt13VAhEaZuVgTajfE32eBCrnoRdQEkY5Ffs1CXivb9FWERYxpUTKyiFMdiBo5uX",
  "key20": "2BakAaumQ4TSAPzm1VVqrstRfXZYr4fe7RKFTTpkhDnRH7Daf2hRSoyRnL9qA64RUAcC6sSQEXkfyjcCdi9xSBBK",
  "key21": "3jau6bZRMgHEw6LBSB9NGD7bGCrpnJQ4Zxdxk5gTvT7C7b3xnPDKePHnTHVfSaXFT7CwbpvQqRUCFTF8mr2Vs5zQ",
  "key22": "4X4isGe7Qkw95GNnNwjWi5xc8Ke6PKQ4jhW9D8mQRhRyR2rhJcJoEyrTcBWpks7BaqEXSzn7pxELKoqkt1gHvCbg",
  "key23": "5GdHAMofqoKnWBfeSGESc6VHcwzCzKiPKwwXeWdWhYvicg5wFg1YRSvWMqhDbA6gj7DAh2cjGs2b7Hre1t96wezf",
  "key24": "4WxvBJRrYifjFcvkMutvSjwauugzxnNGwLHEWcE9ihXMkTri874XubExEXXBFrm5WTfd7K6jmb4y2WvXYUQw9UqW",
  "key25": "64XNQ5bXXZX2bvaSW2tx1t7q9XedVuSReWTGRZuUr8s21rwJQMCWnyMJHVwefzSdg7yS1sEXaypUDvCjSZPiCNKC",
  "key26": "2EyvfS3J4AW6P8Ym5yuDtBHGbMorVZfYuEgvxGVf4tGDjQ6cukN86x5rmSptVeBtAjrepyR89acTceXvcEoeNscm",
  "key27": "hMJRkAsqg1kCv56v3QzWg88vxp57gNmvN3QXva7mW8RrH6S2btHmMJKhCHJA5XGH1fnkmkky8FYQa6BPDntszn2",
  "key28": "2z6GpdrC5ZEQUprwdVnzD4GiXY9Z8RGpA2HKYhpLXXwjtkPKbygi5HLyc85nAYiEp9DfmVhUS9FwxT6xQK9qoZT9",
  "key29": "4xNSCMQRikQvaxbkuawx4WhPyyDEm2JekBPvfonpYfw5ivg9zKc1Zy8ShVckdcZcm9zZ3Fe8N665evktdvpvW7Qj",
  "key30": "5c7RvuCdDS7KSj2f2qnjh4Wk5FbrJXFXCpdbg9ZRkRWxrHsdpH1dM1oTfrLQx8wc291hwxNZtSwSUmxbWA3ytM6A",
  "key31": "5g8FBkcaikLJdsDKVCxCSiBcWA2dyMxWYg7FVQUaZgLcAWBWkfLVxRAsrh2BrLjteSnstnMSHjvv2T5MdKtb7iim",
  "key32": "2mGSbaDQSJkwNwJA6uHQWdB5ep4VZM869U8BT18tDGjNdb3Cb6CfbVkxWRHysFEgTATJpQ8ANAH4YKv6EBB1MPRK"
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
