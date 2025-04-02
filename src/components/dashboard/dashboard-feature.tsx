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
    "9SS4H34EzEAYJKHCf81yxXmxuXnrjUPDrTg9WFSR4mpuADFwxpQb15caJwMNYhuWKbvkfZzRuxzbgHyudAefSov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k7LKs2ZqsyxxkvFX83PpUdUvetMB6td76iM3qxMr4wPoHf9WvQ3zeBmfeksnTnY8JFLPJgYJmDNcG7J3UNfHaiE",
  "key1": "49bKWCYDygDNqhEmCi8EyWw98DAbpyvCT9AP3QNadj7dpu4JPpxDF7d2LJbuLtZBXNGCoz1DvqmZXSbDJXXpkfRf",
  "key2": "5onnxcU2oCkiyMprxqddzakv4Ma9DM5b32EMVimEhDyCvjUT8Hso8x8gtA4maGBEMqLjru5i7f3Fd1KmJNcxiFCk",
  "key3": "4enZcN4bSFBNiHA7QD5YUbTFrtxKrS3AapoeSZGQmp8VAruzACSRKRsPtUwax8fR6DbzYaCrE3EXzXQTqggffJuL",
  "key4": "3CDpctBy4hECj4cChEmor5rdTqGe2PTz8FSRoGeCpniSxchht4dLfNmHztRGzYN6QiRKF8AkrYweJqxWiewEZTyD",
  "key5": "3NezAdWj1upm6YR7aHgoZz2ABsZAAnUR5HQiNziz6S5xNcd5Eod57XZHFuL9hmgaogdFBzAKH4sDwbFaJx3kVbjC",
  "key6": "PBNLoyDcmN7aFavW54LpsPmnu4FTpWej2yrhUEydijRi7Wj89XTQHgjkP3AYzrxTdWxwsx5rWHP1kRgapzJ8qZ9",
  "key7": "2pHAeTFXLK2L44eAkkDv1htbjvFjPVKPQf9eJFkkUiCAJtCJGJHv212GBA33QuzMoVoeFtHVqUyu21UhwPKZrjc3",
  "key8": "3EA4UxpCUiSn64hwHkQbykcTaXKSxTDEE6cKeMQamGZKz4bxPfYGtuExGbniF4P1AzZQWM4igxiLRmkUtLXbaRoA",
  "key9": "53KG7F36NsQuDMvTeUtzwM8opqRhoyw2ijV1bgd94WG4iyov82XtYeNs7FMDpiP7u3Q3pkct2w13YVrvjsLDkpmQ",
  "key10": "3Hy6iLBj6Wzu3E1wLD9eScNXU2PdNCChzRTysKexDMPNcTz2qJf74Qk8Hv2SLymTyYaZ1v6Pu86RT6ufKibMVYp5",
  "key11": "bBf6jqUDpAdimAUryjhNxxdAEhCQbt9untv8NaczRtVepE2pyJbFdSwFkY66xiHMAP6uW7EyXrGP2MF1TDebRBm",
  "key12": "31HXSVbeCJGLcUuF1AUTyK19FqnJn5AwK466XdRwYob4z7gxcSmFWR6aSnM2gj99S6hqmtQgdguE1ErkehpkDvkN",
  "key13": "5JRNVBvX2RdvCivX2mDSjBq11ELmMz8Bte1LnrN1z5p3hNkHW6AKJj49oQvwqmjswaXhWf8Jo39X8epJ53eqRJW",
  "key14": "2hcLB1CyMGPvoaG2jocZQLrQA1sG6Fheo8DaRfiqMe89WNFddnewspAEnf47RwM8iAztkheAqapmHxNawF2xCXcr",
  "key15": "xKBqnYWjbTzfg8KoHoRc2GUgP2V8xswsxV7nY6ZLNs6oVhHH5F35T3En9VNhbbPpKRNnDxbpHv5UfAMABmcVD6u",
  "key16": "3pffS3ikfnVJb8x2PrLhvA4DLUMmrKJ3BsvJxvPJpFSFSwp7SsX1ahn9Ebg5WZKF7twtspvzML1Ro9PSe8bmeFi1",
  "key17": "3NCWKhCxt43tDAKyuVGRQbBjFjZq7UnUs5oMNGtp5naCj2kmhijTk3QkB6L5UCXfLEWieT4tPRnvjaDJirYESwt3",
  "key18": "4mSv1EbDV8scaPeyqEKGLP2LwhjVVDR87oUmuSgQc11LwWJgvgGi2pCWTwqExmNHAZBvSiLWCeFUYDN1t1TXrMEw",
  "key19": "1pXJxW7cK4mNBQ51YBosh4cmvBM1TeiKHXj6uVkYoWCAhPcWK1hbpK8nGcLDUfCycQXkgVSd8mCrhWqwiSHgFvd",
  "key20": "QKqC6Eqyd6t3K9KyHHLqrPa6s8qpiUBdHc1YfsnZxbyhQuVyPqHjF569jWLdLB7n88Hd7EyietptUdQRC3bYXJ2",
  "key21": "5rj2WfuyPDw6JPnbnEhjZg1Bz5wfgHct2ge5uWttNhAnDudoxZd2JoqnyCaUAAJz67f9ViUfJLWhUgeLpBWRezyD",
  "key22": "23Uzpb2TbXHp4VVz3d9Denm4TT2FYHo2L1ZoZq7qzQKKkVRWWMTdAnibAAVCK9xs8XjvvN9sEcJ88KG2iSL16znT",
  "key23": "3Rkw7HCQPhhFXAGHfHYz6pxChV6rpcL7YJ9F1egqjLJn6scpQBfDJEPSkVcwsDzTrskhvVucay8qLonjaGTD79sf",
  "key24": "3pjhmmL9n44GdHddwxWAA3LG2pMUdRsoK1gWKQejsB3mX5Q9rN1DrbA3g4BPGttWGNMVS5caaWT292vbc75ZnVxb",
  "key25": "5feK3W7eXXqR2F4pd7BmUA5ns923VNLSzLGz7ng6At5KE87Mw25Vu1ATpSLFyaYoqY42hJxgcjLqigTKkcTHbXPA",
  "key26": "3QQhrbw76TCFHsjxogc1k7Kdm4766GaJEvjGkqqseT71453UwZGt4PV6pMzhaKfkAp61d7JSzey51u7M26HkJuat",
  "key27": "5s3ZUwxpSwqjpfpn9PmDBbWKZ3th6Rb8kbGbhm1uY14AYT8zWYKr9Fu4Cck9C5xFY79TDpBffcanPtYDqNCHTQ7u",
  "key28": "34VoDYvBPoXNiMr3KsSpGkhMSM8ycNCmwVmEdpQxTjPA48F8s7WgR7bbD5ZCMF2XAhKPqEeNv9fjDdFBXR4Kb8yW",
  "key29": "WJ2Cn7ocB5WsgxB1sSsKbrPimTm6c6fAHFfoNP2VGsiMaXCLUbUEJAV6eXHZxxFTNGToBhpTFqczYGquVmq4CM1",
  "key30": "4GrCn3VSsgqjfSdJVRoxiMJCTj6mrz6akVmi22TekAhpVG1Xi47rZ1ZP6v123U7e1GWfw17Fd2bcLwD8XdepE9YN",
  "key31": "5Ysd6kDyNma1qXffQqZ2oryVa22bCmTNWBpghxTmTSsVgw5LRuzafsng15NBNwovwPdP5FbyDa3xtZYUxAQUjMrb",
  "key32": "3ZivQ6z8Lcr5GxWqnf264su7ENs3m71vF34Q8HRxbJGXftndn8B2K9xeQgRCs4XQNybx5pXXQPy1KRT9wvCZHtuK",
  "key33": "2ihvgh2dBepufpLEZx42biCvdxaasXYSw2tTY9YLgeiXcRSTGPhewKLVcHwYPEmMqQS9b6VjVf2zEQWvGgtGh5i1",
  "key34": "55SaPRBNzLsy34yCZBUtpSbcpD3VFA944TaugDNMHPEAdq25aVMmxT58S77R8egh88ddRPN3DyGas9BVRAuE6vtZ",
  "key35": "23KyRtL6kT65mmr7YvDAKqGzym82No8owRQtvw1JPYwm4nBtqS4rMgZrCT2i3v1ZctQrqVqByaRsr8ocoZ4MSBvx",
  "key36": "2hDry2tTkMnnDCZPa6d2juUUgZcQQs4CDmkrVzVHqdsDtvPRZZLLygHDndhe4egTvBdD2nwYSoaVXBqnNFEthQ9L",
  "key37": "57tPGZKW5S9Uxht12sGpKdDftzxZJFtZY35JGCPmhPXfG7Q4Ebb57xJLCC9u2Jd1fRTqjFDH6VUqjJ2v4iM5AuQw",
  "key38": "46v8cY6bknHN1y4KwQrxqgS3KZcKcfQazsVmvAL3tY6ctxGcRndcYo2sSVkjL51cB7P2ARqShL24woUPsYGWazBQ",
  "key39": "4DxZZx7eLFMQg4v5zZ7EtZUoy4PHU38ez88cvPzk3BGtVMLkvALmcWDKFtXxUV2BJGDyGyt72cf1gaR4MymcXyqN",
  "key40": "5GdCUdgQdwe4tKocDNHzWyo2BjtXQvMVM6igLagnQtFnQfJpWaehEi3d5ELpzV2hrRedSP5JoorABjtimbPGBGia",
  "key41": "wCMgL4djUdtEn19DGNQAT45Me5x6meYegotfCuUctsxrWYhZvujjHpvnHpBWd6apYEftgM9RKruPYjfumFhw9bR",
  "key42": "4ciisyiGJAZiQTuHXMxwyPpqUAjQiqcyKs8ZB1CgtUaLqZx1tevippkFhKQwgtFttkXqLj1ayVXKbisY3iKm8jpx",
  "key43": "2jh49Q93pgs4oJuKUpazchUswwKXdG7BvDnf4wH6Po7j2FEYWoq5symEvV4tdcJVV2nUHaACFEmv9kjRqeU68RoH",
  "key44": "3VgirX6WALT74BEQYnCP7Z16gKNauiyU4Ns3hhinRNHPh3wfipeXKyRmxqhajduAwojzFp7PYFS1pxTN6gHX1QPS"
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
