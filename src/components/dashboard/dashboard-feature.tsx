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
    "XWuJDQeseEWD7dGeDXfk2rJ9rketwXm9y35U2yVomtBDtpmzDqGAgyFSG95rMXwAe1PKQYrSkyTQSaaTLXUSq4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hMVo8QXTUfB4ipsZs9LwC4rEbfwHzrLquZmajhQidV72cgUU5sHZ6aaC7aEjaqYsJf63K3hRWgufZ9kmzeyeP3J",
  "key1": "44oEpm7brBgT38xiTFzwEPJ6HmuWxXmKtCfToRt75XwJ2v9m9zp7gy1KheY6HjFS8gcpxYFESwdp9nN9wPUbWuV1",
  "key2": "228VWpLVBRbVjdcgA7PhNczmHd6TnJpQMGAjBrEvrB6bCqCXr9TbMnZ59y7tH4Rasf4cruFqSnwPcFGFKVFP4Jyk",
  "key3": "3NSwL8MvSTPftwoTWU2dNuMcbAdKuJddnoz98wSy9bqJi528jcyApmM9DiMnEvD52KvTPg9bqBC4fysXJF9Derqy",
  "key4": "sTt8m4m89yf2koZVTGcajhNPyKmnT56XZEFi2SxwdswoJrSbHoYKXChZhdkedbv6SF18HZYVYPAGFVcMD1zCLFr",
  "key5": "4WajhcnKfGh131KR2TMxdVSxE8wN8QADCHHiCiKkrW3Fucdy32pAExLn7GZVzg4HS47jbGymBsCo1DKyvm2Qq4kz",
  "key6": "3rRLaEsZojZ35A3ypDEfroJ83wKMchRzfUFx6QovpHeABvqXB637MUErhzh3aDunPGt29n6tXdZZGzUXLYans4ji",
  "key7": "3vqWZfCfQDJgAgsMXaZLTAJCuKYXBqhnEvUvuCST9CtF7DMEaVn2FPnDcKAGHD2aqRrsjYDwZdAPf9FR5JXMQyd7",
  "key8": "5LNXnMojxobhrceBkUvAFW7HPgcnYpTva1YKyDEGQNUvMvpEwS4FUfvpsDSmL3chgbWZdzuyub642XtRU1MRgdQv",
  "key9": "2JFV6jy9xsTdrC2hrt5f6epTaXRU5i7tcQMi4szZ9sTsFnjzkpwtL77PS8EkuEYi5os5T4F7wanNVrQM6H6FdB9S",
  "key10": "qDYMrcgjWLPdwRECDB1GGkfTzckRkuGjcrCyqvcJernhSdwRRTpsu8zm7vF6AecArnGP636W9wJE1Qs55RpNsst",
  "key11": "2AdJy6GpWveomrdmYD5U6DW7fG4a4GFQxmVyyakEZJWTnjkdTE3qeRxDBoWTGCb3zRFkQb2u3CfoTeSNEZU2g5Ys",
  "key12": "ZYFi6B7AJC9tGQV2bTcfXEdkpvNecTHb74DKFtJa431nN3VLQcJzyGEqAo9kA9AUvrZGBBC5LcAnuKP3nKGCj5q",
  "key13": "5kP5hmRbkbRsPsFPawm6vbpNiGPmQ5Dkk21926jvMmFydTrTqaej7qd9DbJkvyv1QKyQrAXwZe3jvgdyeh9CTBRq",
  "key14": "2wjNFNKL6Umq596oC6YYQC2CduZMH6coMYs4JHj7QssxwtFeJajT7Xf4qHGwkZtEvTBxoZRJFpNNyYibb17vw4Tq",
  "key15": "5gcyeFZf5MsPC9cUq4JMqDo2N8LbdLBdAm9J637rSQsvV3HnhxC8ce6GRRExKYcM8S5DK1715CCL4kfUmoEVr2NB",
  "key16": "2Kf5fzhtege29mF2w2DGTF8exULJWgpgMcUSFtcJ54SPoEhuHuH8bhmUhJUZdbMaNTeYhR8eW4A3NhsFUTZrTDH8",
  "key17": "4rBcjsvchPYBmDuS9wdHHGA8JeQS4F3DmXnhwueJTCfJ8x3VWnB4r9CoiP2gKSrYtUcVRi9jvZaSj349gWCzAkrR",
  "key18": "64z9Npq5TnW1byF36vojDUpmwB2VknsgVjAB5wYdJCdswCkczRfUFMZgF6jDuJ3aL8JLxYM9vmsXMEpH2TQX1zt2",
  "key19": "2a3y8kSDdR84NpsdXevxxiaNgY2C6mqHZ1afkuSgpVF6WBAocin831aV2Jf6vJcT9ykKrWovr8BAX7qrPS2nqSAZ",
  "key20": "2PaPo54X6k41frZn2UgTvQrAN1KmWRYbwmwfu75XaCAMzr6sD7uaN1f71BxzAsgFZoRLVD32WrDDD98swQniVRzy",
  "key21": "kzXhEYf9mnX6HAoc2U9dBBTCWqU48UPBz8kW7JreHT7gE1YGtQD4Mk8fe9goWg8qZ5ZVhrHp3eFe2sbcSUFQ7wS",
  "key22": "ZNUXR1LPeaT4WzkGR4Sry2K33Ut5YTpmEsbgoVMJrLbh1M9zYJ1FTxUZm1LL5o2MHggh64JeLpNoznATnPpmL7B",
  "key23": "5etyzrcDqjmqXFtkF7B2kKWQpVdwpji7Ftf9temb1KvdVDZwwvfYgJ23xfmmPwTAQqmkdf42W2JbvE4Sk3ewreen",
  "key24": "57w99EFgvjEmwSCAbKBfBPrTM8xpFNDzFgqFpHoV1taV1AEmxJmr8w6H3TkBjZek7aADoMSWSGf3uLDyqbxwtvVi",
  "key25": "4MBxaNydonAg4DMGpA6ADKXWRM5Gcarq2CxFCfn3bFBXerFLXMLhdh1Vo9346Pf2AutWVAENfvEfubqgjjDYQ3me",
  "key26": "35Wm9AprG5RJSYpHuJbsanN7LJVuCeqPZ8Pw1AemVm2rRosSKaWEgvX3FdAg7yRCt5MAcP7cgavbgE3aLNbJS5i8",
  "key27": "tupGrCYfjUtxVQ3Nm9i7kSdhwkjahbwXjdpjwpnEi9D3zbgj53pVaYE6dfD4mcSptcMaZE61374cLUHWqqpWqkX",
  "key28": "3HUfQsYjnjUhxCCXxSNXrvzTFrJSHxiqpJMcyca3NysqBm3FHinGyki87LsRMVdiRx4425113oUku14yMU4BppHF",
  "key29": "21gjBiv9ThuiqjSoCcSDDEdZ6bU6Zdzyy7BKyF28XcZ5WaSKM3M4LYMpuGRF3QjyEazUGnVgpgxyyG2JnXraiKJY",
  "key30": "NxGm81SGycEoAW4KiGA5nSEd56Fq2MgkwJhzS3zs5i5J2DTfnMqwt5GHG6CDeinSdhzWhuxVbjzMR2Df5Mo9WnW",
  "key31": "JMiYXJprPfG5uzEfQ5avHWqDkNy6DEhQ4sNosHg4ipMcnyZBANyYnWPanXTa4cPvdfcCPPsEKNXdLvK9kYMjT2m",
  "key32": "Y19vH7T9u9F5QzXiqqxtkXPcNKAiPQrPRkkcipzKs4RT6y6kfSyk5Gu952rtuufmgVC3oErw18dqdgCNyFWiWWG",
  "key33": "2kd5LTUfq5xmJ3nKZL1KppvfF3yg268XXexeR3sjfZVtEFA2z7tDJYkmJzrnRUQMwNQRxHXXmywPgiJKGHLjQtvX",
  "key34": "63ULjmnXqXEe64DPsZ6V7nQ1d7KhNU1M9UWz9QCqESFL13drBbn3JJHdDvDRoCgfpueqsEFnyj4cDniuhhcxdWuW",
  "key35": "tmehkovE8exekcZA1kG5nmZQr3iBw6mBYQRT8jrJqKyMCfXLCtWa5mAaJCZJ4QWwQFBDufHAZ7Qi74JwgkfCLvL",
  "key36": "4YVNPkVm76ciLfPfeuUJKC2tVzJ91v71Lk5jrEqahmWUesuQk2eaHBSnhpBaEvisozXBYjtKEHDfMALvpEZhs6dX",
  "key37": "3n5hYsaDvnFTc5cw2EYcZCQxRPRsGUe53wB5qQShDvZmaj8AL53J7kvdc9GdABXFuhDRB7tATJgpTFve8XyH2wRp",
  "key38": "253vKCwZHvRkMU52jPPwLpiqGsvgU5ksfdBCp4v5MEdcsv9trgkXrThsetyxhfMCApn3jZ1BxYcapWuvghsBAtjd",
  "key39": "5ooUwwreBddc3xGYgPhEucm9j57N5oX27eUUwurzjPp7MUqZo83mF1g4Jd6opve5H6UuWpFcGuwBRrCQvYdYRRZS",
  "key40": "24DsxYSFTuBL5MgvpcmTpemuu1iaX9okU18jG3JjCNkg9azutBuXztvGdNV27NegkggQzMuNXudPmwgFGSE7xFhU",
  "key41": "5biBt2EPrt9PTqAmx4m7X7sdMvSTvwxbNikm6Ky2jqxtt5bnTWcxY6Z6pqc1ifGSq9Df71kjyKzRfgqqiiMcubxU",
  "key42": "uKsZrmU8n1xhSujPYU3mcj8Lf6JeBnHWCNisSWmWFxySFcDnHRmvLvdZzHRtkFVCiVZvcvuCJ5vRoWNm4KZDiha",
  "key43": "2x5vfvgWB4JHSDJmAzbV81ZmopN84RszupGJiBEYMhAU7yg5g9j9jHtpi7yaJAentAkB9DcMixMfFFNSMexNVmsZ",
  "key44": "5KZbZ6kA5RULjpRVjg3JqXFWKaSXpFmgnRVQ3wBWF1MWrPw5X2Gv95WQMGFVWMF9DLDGHThnGjzgqr6Fx9r6VDqV",
  "key45": "5XZ1YDHPesSgZoM6enjjf9Zd6ndeuxj5jXJG6mRv4DYsrvqFgtTibzJE4SSBHtRw1tWxN3RwxwUXdriSrJH9ELuH",
  "key46": "3L7KdqZupZnqxP1mPMmgf2fuGwrnLmioHesCff6gdwRnoEwKnQL5PeYDPuJCaoDSHmN8XHor1HAUfq9Qf1r1J6Wh",
  "key47": "5YmLVa3xxA5oPhUzCxhpk1M2rVG1M8zSX9iiVCD1S3qa9qSL6ZrmbDdV1wUfk7YkS4rjHpZ7yqgUye57VpnWBaiK",
  "key48": "57ezrztqQYEbCX2FpFJHqK8AaYy2XYCkbVNpxcz5rjqYNcSbhm63qmGJXL45njFppNKanKCdQkBqHMNiUck5WfkT"
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
