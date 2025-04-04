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
    "4UwAGDjqNpPkZSdF3ySauTfNELJMUjRgSx5j2j5wZ4mCiXL33r1FBT5kSbcGb9KTzQgxR5P9XWzXg2oWKVPVtoq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dGqSr4ZZEg8RXmkQ798TfAzJkqZKrBMXaHSek24eNzHq3v98D4KHKvFj5x5UKnvseSZ3vcUqe2qK4L15YPpihRz",
  "key1": "3VCeDR7knn5mNAGZUJTE6thERXD9RwSzVNKs1yXbekfYNkWRGTSFEXYNnvKPRp5ASeASTZuTje2VZqFSr3x7k3Ao",
  "key2": "3iXr4ecrf6DgbD1SKLHHL2jWu61Et9Ubr95CyvbuKhS7Lfxd3VCKEKuGMDc3J9uAWjW6vtLWEtJpAB6FsosTVBsq",
  "key3": "5tnqiDVVw3jzBXFNxb8nqZ6QJ67yTLJmtvUZgMmAuYjGyVFooVCqQJxzduPuK9HaFymoshFuiWqCRb25aLHJCCK8",
  "key4": "2iuPDxpyrKbsGtcwYsm7KwRUAfxVd2iGy9zkirn4J7ecH1NEj8RHycx7FkA5uQ8MKKkd6h1Nu8wpkoc3gs8YThTK",
  "key5": "DNLvU3rYNLXYmYmgz8CHUSKBtsWfUocB2tEn281zynFGPfteXKzLAEhr9gRjbqhWa9GGFpaRP2X4yJbvyf83bcj",
  "key6": "DwxTn921bRsM39K9aAEwJS1JhnwshbJm4ewFb7DST2raVcx576ghUNuXGrG8C4iSnZ1U64Ek11bz3RQzhxsAs7V",
  "key7": "3HRw8Kh5g2HM8gCB4auk6ZXZcTQn1sjUAfW6mYtdyLNvQi2BGeErafQpPgVPifestiwNZUXHHWEVhmtD2AEL3yop",
  "key8": "F5R6UhrBsDJpXaDghsMQ4WLPnVeHYVPmECqkcBd9HX6xVW4XwXwUiNGKfcoGBxW653WFTjvnW6nCQJgVR32tUn2",
  "key9": "EL5R2y3rgRH6JxgicheQY8H7duzxRivLoFcpPa5QYhRDQ97CrUktavj1Q9uvCwCKW1dNR8bjNp5fGco97Uw7XFi",
  "key10": "Efd9AxhryhFpWEQhnyLysb7FwdcF8LBw6CWzCohb2RFJLsGP6W9FCT3JeFNESr2rkAw79yLY9HqMoZ6nB2nBKZb",
  "key11": "3rwYXiBPNvVLDpuGjax4XdrdKwqRsj5FP3QV8YT9sA8fQF23zSf78LeNsft9FB7PxHBjxWuahcxVi5AVGLVRU9po",
  "key12": "4DdjqeW2HGYzXGaCpz89EQwVx9L8Ptabj4NdRbyqwkYfiACHVysyXxuTXxscBQsqnTGLfCDTQScDoEt9TPGT1feq",
  "key13": "2MKHheHN5dkv9tMFq3CZNLhQieUqgCDjC2LGaJ8moHPHLGXExdCZbJMpyePQgNfC6fvgf2WF1TdnhWjXT3cVxVBm",
  "key14": "2MjPmVKB8RCaS9JjsM4PDPHBBLzZVSGNqQvXAm9hJWH6eXerpPHf5z562tGtmtU9AAHVxGNxCAjeJUs4dyQ9xpMJ",
  "key15": "38GSvxxPf2LeALKJYCAoYaA8Pe5A1EvNPy4YiZ5phBfyQmjE5ow57DX5YQrw4bCiVHcXuxRBhcibjL8RBgHcFHtz",
  "key16": "5esXr9wLSr7zSePXPh3w4RGhiyfz4XKEqpNFZmhuza2x9kPWFBtdXsgnnVDueEsVEEi1cbexLn5iwS2NuY92CKtR",
  "key17": "2xEjDjCxmqzTV4h7h51AkTQLxWR9eaEiQwZU9kH7qozjZRjR96RJLCW6iJwwDTcFz1Ey3Na9nDg6GwyfUfYZF6ox",
  "key18": "3qpp3tLbf72UnkEji2kaihjBgKjNpeKsuiuyKzyFMdd3BScQBm9u7wyRTF2bre2KJKhYSp5QgRcZvCtudyQ2RFww",
  "key19": "2km99aMGwMoND6kmXfh5ejaTUy6dQcZifsBZd36CG67JtobSHx6mURtF5fTtnFuzEj2AebK6UVFE14m7BTy6cec3",
  "key20": "574afb8CqtQeLjanir6uMRevjUyRaDjp2MbED3fZBXqjXkWFTtv6u2WCeDDirFZ1bPWEYX4X8SvpUWYAJEiLuRB2",
  "key21": "4uXKRZbAtX6Jk821xWWNAeKER71VAXoy2Dm239Q7obzdyTEaqwKM5rYfrguMYfnkgfWVTEZtxu5h3tA8RHyCDm1F",
  "key22": "2jUid3nMbjdbGWzSfUf6fNoHHF7beniudRFSaSpTU9T54Vxi6TT5ef4feEfLhzP3BkiBAqyFRLhmjm5TzAn9Nt5V",
  "key23": "mLx85ozSqfBfoGDqQYdg5QNX4cuR7qDPqPaUWzPxi3afzCRurvi6oXKKWfJHkXMcJ5NdzCRWc6RdsHpx4kdq7dS",
  "key24": "2FufwrDbQaqvoWgLoAzUYdXTVLnFxqE4htnQ9N5vdSL4CDu9cuBjVBTWtuMV5QoYshyg4Yerm8fsUeBdHhUxwqJ1",
  "key25": "2C9X996CagUkbU3rS7WKQYVGDvTVmsLyv5NJTmbGxuLjuavbfxbyFNdGNGg2YrmgKucE49gDhgu11jQurDnWMYez",
  "key26": "4MgoHrALPU3jvGRzfyCaMHiQfYPwXtNrKLcLsnp5JkbcnxE9PuvKBdDd7PqNSzaRMo5pAtF7CVfP6eibGr9MsC7t",
  "key27": "3b1J5Z58GXAsbhoN6UCvBzvehQTAGMSoMeP7DdGsTNS1HY2rJYCzmkvYk6Da3JLTmwBCyTFbztxH2QBEnR9TUFi7",
  "key28": "2P8U8j8GiFcish7yAtcUxj5c82RJ2m5YGPkcs3RJpKcp5PjETwzbZxKUQ9FEwzgugu3LsMTDusypyTSxrhLFvTqv",
  "key29": "oJB1PC2xH8xFtbZcfwxg7aPzoPh2ohcSCN448saDLZQ4qTo9MPNK7cCjP7zcXvLXMf6hm5TwYoMBEqBMTMTxZt4",
  "key30": "2wDrhR7mVtS36ru63i974dbN4vig1RsLVw4B89GxY7h75kH5YgSGbiSTLruVpZFaJeRjWmHZUig8kQzUynfxScYg",
  "key31": "DxUewvg3BqDif8cNmGEqJZnKtdm3vSKb4q6q5kpnPYmgPm9k6XUQRqPLK6WSmobDDXT545jfsfz9ibN58FFpTDw",
  "key32": "4jpv73HjaYPSg7tTo2kQFR7hqvT7js97xnaLE2gEqjSZCq6oLm4EKWoTX8MR5vPu5kToePEPYQmCrbmWsEW5qTvk",
  "key33": "4n6ZkbKP2iHH34n3GDbwsFhpeohat4LFebBTVVCweQEkzSJL9xCNoaUTtrDAm4vAGv4jydrGyY4VoKXRtKZfBxKz",
  "key34": "2uLT3FmPn788u7qgX2NntwoRmWxXuquoTAcKjcj7KSFX8qUapbDDiEsmoh7jrAVSSp7AwqNhyY7Tq791nwPRRbDN",
  "key35": "2dWc9jjtLxiTVjG2jhvuJZvooh5yX5PJ9jxCMatE57wETzHoxKcY3Wc6Zzw9EvYEtZYbHqNiUruxvd6jP2B7oMMD",
  "key36": "5FJjjyg7aY7w95CDgTnzcBBEw42F5mpAzfgSUFrVRENRPb3QNHuywzMYgR12o4qgbH78vYek6NKKLJSDyVBnsoSB",
  "key37": "25QFb16stVaLfXtgyhQP85mhfTvwsagSZmEqhawnBBbkeFPErvEA7r2gL7QriBZAS2Z244JE4Qx4sziMN3eVV4D8",
  "key38": "3yBsj1v314e3ggffvkMyBMgriTDDXmRBEzy36VX8h6stDp5VgupdPEANNZ27PGrbCjNnRe87oGadzWmHR3jVXPQg"
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
