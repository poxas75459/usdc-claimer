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
    "rTh8ZFDGmCYj8Vsyv7t5YiBU1YUTcgCJSkZYPRoDsKi1PAZS9UYv9RtrgdNd1cJK2ys6crGzsSqbtKerJGsnLhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TH4gxqyFTLxG2F2tv7yuz9KEc9Ab6oJhwXjmSwnwfcVbFxUQRhoXKpa4p7RsSWYaXUAUDSZjs33E2NACbEqn2qP",
  "key1": "2muriy2rYsUPxvivQb1UL3GLgTtucnMnwTfRZ6WxuorF1dgLScNeWd5NWsgLBn4gGDXh53aXHaPC3J5xUuaBu3vw",
  "key2": "5q7QE2MaR5cfPCweqxESt2RdPGRLvTYVgpfothTHXua1Q9mznU9nyM8Vz6SUPb5Yr6QYSiSBApRov43q7J7gMcnr",
  "key3": "4UAbLdYmgShCQTtvtpfZpvDUJb8N1oWduu9nU6xoGnHj51YGu2pmMuYibCC3pPUnnKSqxNMtrBNwJDf2Kmy7BgMj",
  "key4": "5KnpaoZqWdMwCT1CEKYcArKHkNWb8nZptzSzhBYTs66MFgqEfghb5N5y65raJhdwBM7UStYSSb5KzZ7XTfM1DaqH",
  "key5": "5Rt6Pz9XekhetgL6tJwZntyVPZEMedGjMHdsJTJf3BpBayxPfR9LJy7tdthPQAamy1iYxei21BT7iSFjSvFzEyBY",
  "key6": "5Vjcbd3nqe4Cw4V5i8Pd5zptqkSr7szWV4wsCmJdXsHmzfTskTRRq5D4wngxEnjxkQrQ8K2nQ2JNDuu3aCqSe6q6",
  "key7": "4q6pb1waomy5bPNU7kqPc1ApHQ7py7XJrW16vjncZMvasavq9T8eEfk3NK8W6xfnBcEs2LooZLvAgHhQ5BxNY3ng",
  "key8": "4tJ3foo4uhgjyzgqYfx1jbJSXprD7C3CeofEfFybvxAsxhu9AghRaaMDSHm6joajjGhrDxavmmBpHgwaoGEM35Xo",
  "key9": "2sbjkP3XwCLD3TFbgYrA8jtF7xskdesqj9sG6ufuJdAhNVMDtwGWcAEoRwsxkZMKeR337TUwbi19JFDzkbbmi9FY",
  "key10": "Dy7YbxBfu3g5HGmndc1xcey2J1pZf9dGE52nGrfBYKkYWQ1gSGh8CZPA7WVg7eeAdTagArf7zKp6s7pNSFVbEWN",
  "key11": "4dseyUkZF4DafZ62q5ts7hGSPaMD3L7KGfVpJtRSBweVJNaSXHjKAJgF85JfAoXGh66jaDojdk2S6oAtZf3e9o8K",
  "key12": "2NnPmsvKzCDwBmSHaGyETo7A2exvtNrEKqWjh63sKk66ubQcG6SnC8G8EwQbR7FLjEm9D7HDpkBX1spFM1pEhzfE",
  "key13": "5MktPDAXtvd5Pp9L9xoSzHyPB8Tw7cwqg76VLcgD9aocGavaEixNJrfCpAf8WbkMaSgRLf78MNZHEy3g2KuDeSkU",
  "key14": "LgrQHdF6oJutx143FUwWxHZRkEEy4AC2bPqnvwuVVQq7dRzLC5uUrw7P5ryLseztwc2bQMstRaJiheHsTUZM1HM",
  "key15": "iuxTbrJgqnrz4BmmaYDR9S5fAvwwGBGo8g4XRjZbkwS6nZS3Qe55JskjioMAAELEawu5nNxwiBFFpWMKpLjARmy",
  "key16": "H6aNvcnCEjwpGXqZDW3TEbab4TkBwE5fTU8WHLGsmd9Bbv8xU9ZiPPdWgtbQPmA9KzB1F86ACDaG54fDPJLf1Pb",
  "key17": "38GiSnm6fP6neJaTKFdQsnR7AXwXcvFuiCbzNaovcJqRBrjomYJgkwyQ36T6XHaj6xkz3ytqEusPJV1U1BFAXtg8",
  "key18": "4FA8DqEgqPvgGxon98EmnDecsFs98jiNUFDLfcA1f6Ka857jsKsVwvW8d2aGafgpccognHXtcucquevRtu1fw4Br",
  "key19": "5YNGt6rpNoqeEceVejhCTD3LjTNY71YvgpRDtzYsZm1wSf2TJeNuG8M4YmT354iA792ydrdbQte3nn7EZAfp6YuC",
  "key20": "5CVJp6suoW4DnrcUVnxUuMBPsysNJ7UeajqFZKoZJmpQiK67VnmifaWoaqxeL7qAa4EyLtPJdkMz3LDSw44D626f",
  "key21": "3v4NFHAZoiSt29C6vr93oBjETa7E9YEUFMxpA2QxjUYGxZVtZbi39SG3a8Rh18B9ihNTLbFrBq5rjJRqWCZH5Zg",
  "key22": "47qYQJPUQBZY3sd4VSxidKDFgYV8wabY3V9JP7qCFbHvJy7knzYSVa62MuGmXCDmr1HYAjP4BLLTY4GyzLrgVz1D",
  "key23": "qE5FkgVVehQRmF6STvzWTQ9KaeZ1S6M8MkAERubc8gaKTFa8YGfCRoAnSZuL9GJTz6QbrNkFQrbMgpcnJHYoJDJ",
  "key24": "bTxB4LQLXDKWontXrjdBmmLfsTzQcLhTNwGfaSVET54SAxs7AL1Hu9ifs3snR9YPUGXKC6E1yRS8WnETqepPWAf",
  "key25": "33yjpLuWsmW7aAffuix385VscqUjaLxGpWGsRmYvQ3XRdHEwYQHwyXVeu6Bo6Ub48NXFCpuE1px7fwu9rtT42Tfe",
  "key26": "4WxtE249RWGVv96ibEPiNmaLdUP3uM4T8DgdzzLPjLoXXp85TTr1hZ1kUa48EeWfqNarYpv8kj8jF63AohUyvMN2",
  "key27": "4RDFAgWkjzHFNJ7PhM14xBH3bh1ApRFVKBqwqVkWJLxnJNd3PJynyQ4MFDHXqWxGZwqAjzWSSW8RapPVav5dtVfs",
  "key28": "2ZmjJvFTPaQ3iwueKzzdn5VzmJRsFYfhB8ZZjnmtDioGf6KsmtUxsVZmzGKXdc9ZuXk9CMjDoPapgpbH9t2C6AoE",
  "key29": "23xYSzE2rubk1TwZv6ipYeVdokjV7jGTfPwQsfQfHQYen3MK4frwWqRVhkAbfAGjKvSuZ2wpeMpPFekZsnuaMosK",
  "key30": "4WKYrcHJ5khc2exw8hDLc1DQapsE3iPPwi95HZhUe64BjfH78zGbFpzBgGL5xAisDMStEwd1tox7ddYbSbJT2aAP",
  "key31": "LRmMrrSSDGGJEf5qxdBKujfrmSFSbKGXZLTowmdcZB5NAvAuFPv9PuP57WrNVBaCNCrwqLg8KgaW6fXtCznxFxu",
  "key32": "2BrEvsSwqTwZH2P16xfJMu9KSZp8RZu4P9B3Cvr223BQfva3P5uMysmENLW7WfuEYvhyvF7uCjk3JFgsz1T4W5fA",
  "key33": "59g9718at48P65W4Xeo7rt2zkc3TbsLzemP6k72d38r7HXY9aqxPuRhW9C9NaD91AoafN5SN5Chum9uXLfbKiAjz",
  "key34": "4TWVgtsfqgw3QKRtATeHrEZ38d6h5CB77dWaWqNcPJhZSPd4KYPtu86X5JCXcsttuquwjGjrvxh5LJWfTBM9gipn",
  "key35": "5uZiwaWArHUNnZUEyXNKyMNecgvHzceLxKy5fbRBnNT8Yiqp48m6SyCYScraW9wWzsqLRRws9hwLvJAt4VPU83TE",
  "key36": "yoHvsbf1zaEq3rgDSbVPhgCa5pVGgNjBPUXZv3UmAEbMQHk2upqon4Sx4ZMyjE7HbVYCYmAum7JjZu5fECE9pQc",
  "key37": "4BR8CvRojtGsjCYhHETKW7UJKo8nn9WvfVji7qfK1csB3DH2vRzH1gQEkvRxHLVbkThP8anKBsm5woieWBnC5rM4",
  "key38": "5ABfY1dDb7KwZiURzPLu3oxdEznfNenExqxgUN8Ws9Cz4En6NfSJZp6vRaDCCLdno3CPzMzrQDBfjVNN1M1fmb6P",
  "key39": "5zd75rrEG83noEJ1g8rinEMtjYZHMeaH7H2uAw5ZqpRe3srUehtE3zqrKE49wiPj4Vb9VVS9RwGDjHiYLHyVUXqB",
  "key40": "4unoBs5WowH7sQ4PHJYHJWLmusLzqwAFPMwEVSrnQBArjuWCCmCvoWAjGbsS5KLBqmN44sPiKFDM7SNLZ8mnL5mS",
  "key41": "27HjGNZThFi6KUYb1u3pf3bHwgxGQ15YoLMPwpa46SjqPLD4BBMGAt7iwmCo8RDWmeTCaRcYduAQrbcSbwWpNGRM",
  "key42": "XKeXW8xwT6D97LfiQ23upj3SWLpWTPy42fnsoTT8EAAhSqFLcaMiZywnbn3aGsgHnPoU8XJrrNKywGDd68oM599",
  "key43": "4WwwqXHSRD1axU5U7peub99kdQs1fKPmbf1ztGrNWijpcNwcSRzndNopiE7J4gHf15MfWe9tsUMNBxMnp2wpTPNE",
  "key44": "2MDb14tYKUxoDjGymNfV8pqabVVmdaEG7GZ5dSrD9wJNkrdGrck3HL8aRatHUJB6wiZ2qwmtPUqmn2KGeC2iTMon",
  "key45": "FxgCArGMpsdTjWWuooP4DgkQrEWYUcE9N6neFaPbigCHjBuscDyuMccTecn8Spexmf9dZohpZoJuNvY2Z4w6YnA",
  "key46": "5myUvruDK5Cuj9KU6vAeDuofnbZPy2SfxdwDXXC5uTCmJZHszqfZSuD6LPVhVLdmtdwEpjENKZ6yzvoDk6XGYbvv"
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
