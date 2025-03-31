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
    "533Tktq7jMZGvpHEmWrLzkdrZKtU6x6NV8bips7Qhf4ksjvGWxsoRoVejCQPctWYpyTakw12n55Ze4xwRSdSJctL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45c5whzqcRJeWiiyj4VQPJjp8q7sfA9cpxXF9DwGCrKydLtZfRh4QiVCm9xwCchEoNLQdHFKXvSnx2S4Wv33iS82",
  "key1": "EKQLkUHEZf5Lss9URRKgmDjmpiEg8wUhFEGJpt94aGWosSNwwmU53VYvT8WMdDpPr99P2YomMeKy6gZbiwNsquu",
  "key2": "3AM6zrY37bbLDpp4ofiH9oYKGSMDSWpnzwYTgsJsreVFcDrhP5hf9edyeb43arFuFqGRH5NTyorM2yDUgDraToHq",
  "key3": "4qGEq3LEsQyqCTYbotwDBptMZFLqBoCwcHVGJ2vfhEnjawC1iVSrApqnarG39rGN4hpAN5R3oRxV61461qzwYAoD",
  "key4": "3gUyAXTamG1DznrtnAQb6UrtwTq9qZ9VQrHBghYB7v4fdufyfzhYqA5t1AWHKorPZvoSdCSFzFhFGTqPzQNpLWr2",
  "key5": "3DiBAhrk1WJtiepmXzhUzssrrF5r8cLPwgdhLwQyxrRy7Xeo1d2oJ7WnMmiYNR5hvLQ8jugk4UCu9Ao1KN3RpMvy",
  "key6": "2xdWgg4iKEQ7KDQuVKrZikVnSK8n2LX64wA3vgVVAMRJ99FrtuxQD5qGJNcvT1QzW32qSpsyz8BVEaDkXHciPQxM",
  "key7": "2j1gMradUmjqqjjhbEywFZKsuhXf39TqdVgLGK3AMVhUnnAKptUawoaAKrMzvdoZvZvSojvVmp9bqLCeGznMqDYH",
  "key8": "yf6j79kKbLHqCvnrm8yQVpPCDzY35zN4rdtPYAqs6eyF61ynLF1MgUVaT5eTq331ygqkAuZAKCbHJqDd63Adf29",
  "key9": "5ddz5Nb5wkGYEjK9Zo1qDAgkFaL6NRfoyfq2pg5VTWbJgBFUU1Zpn3aDQUNLh263kEqbxnSqxDSRaqYmbvpZr8Th",
  "key10": "4NLKFrMarawvLt1jRofzfm8CSMn7jo9KwTyTwoTD9FMqFVojHYh9xQzjLHaAhjXGDDkXvFsVNaoGKnoBLBUYHmpF",
  "key11": "bpQ7ZsgtZePDcA2bs5Gz6NHAP8XntoENBbA2cU7q5EVNghpCC3jZ22MuqPsS1TMAgRCTJQPZfijAAje7gi3UF6K",
  "key12": "48L3ge2hmN9rkXVeekGtPhCiCZzNcfUsiJeJ6qYmcyTo8UkSvaUjsvbo4MMrnDtXYBUZw9h8kuZ5ZiVAJEBTGczH",
  "key13": "61F38qiUb7pHYkZa9dzbgcv3KoTgUZ9wHy6d9zVbPSgnbtvPAMq4y7xYkmHYysXfna8ULajVEu5Jsays85mKLJFH",
  "key14": "n7mUcXd6q1XDPeoZUgEjFdRkJMHGSAL9fTwg8SyQbYtt9JRTvtDGmdyrHypiXW7GBt2gHwhdjZFytiBbBUMT5r7",
  "key15": "3oAx8oBM3DnLuEmzw87nhmwUjSsJSu8xksZFvMuvaWa8nxHe8Gx34N13L3FEgW4V5gJu9641TgcwNrLYXypYSZLu",
  "key16": "2onLXGXBdxupwYLiP6CzBcAhHQWzxYg4pyAmvUyNjXjfFPFUumimzTsAdx5znuVwRaNMz3BYYT4hjTTqM5ssyWXp",
  "key17": "gv3nkewAxPwbienwiXECihMbdfNKi4MnPQSmucpcC9DaQsj4zwHgnqFztxYjJGQWWvegY8P1AJLnz3TfReBcdkY",
  "key18": "2pgr32cG1Y712FbNtxv5Q4QbPyetT5zKxmJQLCKaFhE1hzxgr7jD7CrsmyoWR7BFaM6kSecbumBK8Yzz7ju83KPN",
  "key19": "519Sd4U7WGQuiStGzku5ZYADPUczukrHH2xfZ6APQUsAqJzxBCNj6y6ycHL44WxH8z6bshLsvVwLebLnNVsChn8C",
  "key20": "qShVLYmQ7rckh5CQYAt5cNYcd2RizTjByCgdvy6k8PrUeTFRwJd7qxYrPnvPNHXpT3mMy2dSuE7eFBmUrH1hQ1i",
  "key21": "4Bj7EKuUBT6mSzS97bra9xL6ikRwhudvYPt9V7tdeXdt6eVbWfzpWJQW8oyXQ3BjrpwmegSVqAqqbXzc63sjfjgF",
  "key22": "2w42VWCRhkk896oqNx5fRiCB7dUHjNGWYSocE7U7F4sPb4vMQGqok9mPoEWbc4fXoDtkWBPmzk3bhKwZxaDQt9ng",
  "key23": "62AaLVt4WwGP86wTaApAZKXxEgdgL71xgJGnTw9ycaFmii7L6obSHnPsi9tv9Jrx374kTDVvAM25aDCfK16cNmHR",
  "key24": "4U96sZi1odP7ms79dp8t3ZsVq4PbthLgBQShWnjvLJz4zoT7B4G4EvFaiuZr5oVVtqkMYiZLxgTSZW1tMtxG4ZDF",
  "key25": "qL5MUt3NW2GBeJY6bE5LGssXEMtoyxveAwXgZLSyxRTSzs1FdAi3z2dAbHzbGiSG8iSiTcFBPuoiFiCYanUKLot",
  "key26": "2pRLwmZ7u5NcYeCQ1tCJyWcJWZFXfTBb3SpViLKyvRD7Zs8JuD7LoXnQqjMyxhqiKmQsDvgEavPyBumFa3stQbgW",
  "key27": "y4PBHkxSFBA2eQfjATd28vkoSFn3sAAtji5NJ8gp8VfqmJrVGz5insCgZaEZPmA82TThZJZroRHygZLTwhUjEXY",
  "key28": "B6EjUyjJWQhfghkZuv15KZwBsCLZQAFyJbQBTvS2EWCaisZH7BmVzA5gMNkQVKu11szEoSsXBPeXrd3bUi8mEx8",
  "key29": "2dKZp8TxGgjCyJrWFBSmMRq1C4udGZ7oUQSzJrPs5nzzNu9xTcCQtyC3UfZAwpUXLZE4jfTwj4yTYGW51t44Zz8M",
  "key30": "57UBABkexi8fVReV5YN1PV786tSA2vc4itTNvgDjo6HWsJZcApnZTHTnec58WfvtddaxPtiBuqGguyBVTrWZFuca",
  "key31": "4pYE6kxuBZyHaenTxYhykdHQtk9QUgynh13T9U5wFAuag67tj4fCCeEK1sNJCwE3vQqCoULCCiRKLpgG4DMYJjpH",
  "key32": "572svctonzJKRXhba9Vp4TxjzVetMv4qgXe6oRQEVFKoZS3Z6VDq7D5hZnWybbBR7EMR8b2QztkQWsxbbNjkgE6s",
  "key33": "3sioqwMqTFHuVCvSoV5GpHZjWzM9PxjQJVLFPdfAubRa9fHRGHywtSp83femGxwSk5YYzNJ9obDd6devyieQzguG",
  "key34": "5Ex3USwyR7mwdyYLFFRLbqarV3NecBWHp8XPCaWwkzZUfmNgpWSYdGhQZYKktxHMG5hj3nHYkWbWEyPczjjeSTnX",
  "key35": "4RPTzQpqLhVAG4YcSHhnR3gvjqvKaPmikoZLkAKzESVR5GopBk2FRWDqAzswhKRHsoxRXP8a4q8yKDemkos55hVL",
  "key36": "5n7waysWpEGtKFPKhYNgYy3seXmt9ZXQYhC2jB7F8VUQA2wgr4AYTHTa5GaoQQbfBRVh2J3mSjUfTi8riCekR2ca",
  "key37": "2hqM7esQw98zRdSZ2rS32MyU1DM8XXEVptYDk2o7uNSi6ZxMmSja8MCJ3qgBvLZpm2QrWGWonhMoCFesSJXo4FMV",
  "key38": "296xBj5MMRFgbGehEKQaVyoKgTY41xvSEUGrA5cfiLTUQRXNjWZxpGGRMxKRvWMc7viu7A2dQyrDwxf4DY275kBX",
  "key39": "Sj7qHSHmX25Qr8ZYo9M72Ku9wgDni2zpqfcRfndzdzYKZ21XaKz4xMGWhZHugTn9vM4Jjs8mPJA8592bTVWTFZP",
  "key40": "544FZ9bxYinfHEp4yTYscZsmCEtWY9Jki2YXWg286NiaJ575x8U9GbiJpHVhqpqZDaiDsSYyJQNQp1JEzQGjurdn",
  "key41": "5dTtAgFuJg9ay3opE7Dvi1F4ZNHgm2JnECQw3REi7RaatfETiuT2j2vgjBdPKXoCy4stpodrq8cDwN9dLdSQ5vvY",
  "key42": "2CnHMMPUapxfLEzNkNjmbSKP1dyB51bTAxHHHLMnLgcvTaN5Cx2Tu4tpd3HpqGRg9tVBTh2ZUXTQv9Ry6ZPzvwzx",
  "key43": "5NgZDCikVVogFuRgT2EyNBWhWym14PjQncsWZ9fwRvVpLhAP2VTGE1sU6CzLJm4C1QhP1icNHzoePKng9czV5Uua"
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
