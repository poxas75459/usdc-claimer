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
    "JatHpBJyS5FaZ3LD2h1ansP5SBhY7QqskhpHKt2VYpw43KM9HjDKytz4U4pei2Poz7LAz2XSpBDaTc36NFRtHAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wjF4uspXpkXFdVHS2gKJX9VgBqKbdLxuQh9qtNekzpAw5tRhsZdt24us7p4fpfkKWKAi14HeT9m31mqs87HqueX",
  "key1": "2KskuzsmUZMvahs8E6cehNTSYEJA2rD9uqkARdcVSANUkp9SDmXhoeT7kmmgVScGqzKidjFCfmFYKR93aQpkt2oF",
  "key2": "5dQvekGkgxDKm8zL2MaDdD6gVQji66DqFzffwikHHoJvVfS2HroqdUz3N4HYtwgmPYQevNu1ejQ9KW33HdNrcqWW",
  "key3": "qeXWuiM2pcj5aWK8KNCcpQ4SPQtJdDEeTUfuCGn6BwCmqsLGfNr9BtTtnQ544TXVsorqv7cR7FjjyLHttB3gbCR",
  "key4": "kU8MXZZLmRa2iL6idmMpkiaNRE29WnzyeX6zfAA4wseRjTM81B1N6XEfXXrUTmusuN7rnTD67ffN34nugdNL3hJ",
  "key5": "3ARSuKScfKjEQhQpZwdn2seSUTK2ose2VxF53sCUK5yY2gvJho5o8EZV9EJLPh42xDAgxLbo8wEJztk7p1C43ikC",
  "key6": "53aU9ib3QTPKs4ZrFsATQecMd3W6LJymwb72jdtYNKdZFmTw9AdgJubRxyn92U5hjTXDDzeLcC866FfxH3Sa8A32",
  "key7": "5fPk7uS13X91Xq94hZccoKhsreooXJEhJ52JpyB9bRKcAxPkDfLpEKVPu9YnYKX6VJx7YYmQjp17gqzRs6v6Duuh",
  "key8": "2987EUP5uHw8s8wMLYbBbc1wjcwmAC9JaPDGRf8hTesWrBnXSFUfufFmSPEy1ABgnAzFC7zFR1SatxJ2TF8g3PEu",
  "key9": "4DecNwomTAna4PkBaMgeBFCNXGVkcPfKJdHAX88ZA3zsSQe8DmMqyJoQyn2SvKJxPvauzt7ATpDm2ymCak4iNNNx",
  "key10": "5iQhaT3NTtpDLFds6xCHDYzfWgLeWfdpJ9imvcM2ZxcL811HUFU3KUPMz8dyRKxx4RGNuPby5wLtNAag82xcaCH5",
  "key11": "5dDpMKXgJ7FKNLAMZccgwM2Rpb3Z8ideCAw1pxFw3DRL47EoMfm7iVBCBURQiKNpZ84ka8MeJYYavqGw7itnLVTA",
  "key12": "4CM9twyXd8uKsJhbfP6dj5bg9dWXxY3vsvm2vssSmx2Hctoq46Hqb9P8HnwRGWcxZ2HCa7CamnTwix5Zmcjgut5r",
  "key13": "4QrrTUAN3wHgZBwjN1RHnf7xdAinEdh9G7pzrBgiCzDAc32zCZX2YG787eapAVbee8oqwXkTMmxqeRWkrEVuxWQN",
  "key14": "4EfWgU2PhFCCnS8VMgV4wNiJk7ZocP23zcevUbgXYrizx1zfs1E8dxdkR29xz8dceegLmzEJhhE8w7suPxNn7Q5R",
  "key15": "3wwoFnH7kfjgQVLMycorQWXYr4CnQ9b7sFa3Qtu5sBEGtEqfsfopd37XH3i2hVuRup4i84YcNa2VkEQrK5DB2eNZ",
  "key16": "3cB1UNA2TU1YAydk3crwpBs8tnb72LHnJKHbg9WZBpF14RbkD48429psu5G5V7cU3UpBp6ZPUJv19hTTHkmbrA8s",
  "key17": "364612tfpboMb4nYBMF5vAbZ6oVXPMLzQPfaQaVNCkGdajYUCdUSfekS5JuaiHNFHbrrEfhD4w2u2TipkRoYNDcC",
  "key18": "2XoJCFZagdyiHYQyUVFkiuZjfMDYfGu9P3r8CTsmQ3XPYVTvjPCzDFhUYS7j9fzE4LoJW99g9SZoJoPPiprazaU4",
  "key19": "2wm6YDNYmRL3LhzVevUYZdpAZiu4AkKscK15SpZp9BrXcApox9DWmAoUzYLCx9zSbwDyoQfboZAbSWU7GSqE8BAU",
  "key20": "2XhE3XqgF36ec71G4q6btxtJMhHFmXzLQ8VviNQrUmiiEbdurbks9UmkHTBQbGJsP35Lx8AQfrwURaSD7thR2J4F",
  "key21": "2zXZsAFrdNT6DiFN4akZsGx4JtdRErMc7Lq5dLwen9dueshp9TqAWU8GVCKasFe31MZdsgVoaiTcHcwqb7vqERH3",
  "key22": "B16U3j5QgS9kSufvLzd2Y5nTZv4dReK5uWTjZ2hUZCEbP2JWRb84c9MW2qxUJkEzRJzpExESMZw6T2tvjz3NpzU",
  "key23": "2DXWnmPxG6Aa2D5as3FVy5zfhXShErjBcrkugVpVmfx2vFCRTCHZiX6Ugs6yFEX5E1gUMdY1yBtuxbLNxEBzaTaq",
  "key24": "3CLqRApTL33sPHUiW2JZ4TMvSPivYfGDdZfAFyUG4VuE1bFvqFJMBTrvwVY78UMhgLbehGRA4LNRJgxaZZQtQK4Y",
  "key25": "3qGde8HyvNtGpoPvXkyrJDxzNs2Tyjy324iDCCQMSbRwKuyWEn8QUJ68hBSCsdCWrTjcg1qb5unbGJLSJuMLjjCY",
  "key26": "MK82qKSdxR2yt5XUqo9dsPmdcfd1C96JfSmuXYXnxfmoD9NicJuNFDD5oDvgNK2w4wfnSd7oXs6QAGYi1E2qZoR",
  "key27": "5wnDCDZva1UaTSJGwaAsLcebHkA9jYpZQedQcmKTQsgC86QHhqSvwR9FdSSk8DqtBJ23JNYgVAu774Ev8WB7Vn7M",
  "key28": "5uGdo3k33ndYfuiUGiK7tb9o2CWatFzgdu95g9waQA2ZCssSBX8VsapowTExzMTnJDKLmYYQkXcFktKv7nXtKUtE",
  "key29": "5DKCqjuW3PqmWVq65TJRHbDminHK84kS7ivRdWvYH8caDRspezLvrhfppj9qJvNddfQHaoxZjYHEQ7DbNfHvRV7W",
  "key30": "TMqybdVQk5e85uc8u7dDFF6QDnePpajEzqf46nefKf5tHjGa8Y3wpnFruK9Mhnc7aWhTWbKqHCcrbn5jNMXZXpt",
  "key31": "2FJ8gxw2ChNoPCC3sr7ztU59ephdNoiv1tQFDAYtoQTprPshMj9MDqXMBpVrdpSvaZvEMEYF9A3Qdfu4rEkKPYcp",
  "key32": "3cYvDipTT9NYrAa4nhdop5v3poKXBH4u4ePH18bN1kfihRUrdHqtb3dU54FwkfxuFsMnVAvruG2ZTsRTN4uDt326",
  "key33": "3CRHq73Sep519RWNraesxFF2Cd4yv3WUgff7R51X7FtxCxJNymP1ZzWpJLsfK1WEqRFfQVJNiMNNDtfRPNjA2emC",
  "key34": "5ULx4bf2tpdRDGK4ngXKS1eDVSGiaxyFFZzdTXkHwoHj4hq97ASc95XkfJjZxXWDskQBYwmEwhxLuwUus5xJ2tJB",
  "key35": "2UYvaKM5h2fWVsCN61DsBDezSRugMkoZpM95rCeoUQZCsV9V6PxazRzEBxTYYRJ4NUTxYzda88iTE8BssKx8zdvg",
  "key36": "NqyCua6EgVNGwyFM5KgFwKhZhSPW3y98RcnjRK2TBCTgxPdMTCgb9FVRt8jse1CyeX1eQyGvqU6PoV8LWvgNCwj",
  "key37": "5voqkBQ6nHEpaeytSqccGQrXPxrLaWT1oPXvtTQ6Mcnr2YfNuD6a5div6DYm3DcSRFECdU4m1XVee6C2itxFd6FQ",
  "key38": "4jh6dMh6FnTncBRABC6nnW9sexoWzs2xSfp6s3YmWSmpH7Y1o6BW7yCTiWrdMyWHv3UZUdDsc2jeYHjUv1V2w2m",
  "key39": "4w8sWV16RmyS8J4rDKnfARQHS7y76F522C2Gtx5ELsPSx3xZxjAfxfZ7g82Br4vn3VLJfx8ffmFSZHDNonJXcZnb",
  "key40": "3AYTpJx5NNWciPo6B9KE8eCdeDXB5snzerh6j7NknYKByzzGRNaVD4Q6WRuPvV11bNHdysyTMJYePHFhobfqByAo",
  "key41": "1212f9vyF48L29mkebHMRFmUd1Uk1Ak2S2q9hrHiXnigvRAdG1om38EHUhnsBMPu9cnt3m17FaNHDyryhXFKCjdZ",
  "key42": "2UWFVZHBJtBDF5BS6VBfTo7pNiZg7jqHSZSz9TvuYm5AfJ96uW59p5ZVGDD97jQvpKrmhnpZg4wPF1SG4zSodPBS",
  "key43": "aWkdjmSn22dgoFBKYETg1uxKgG6ps1JypMseXuYnaaJFKeUgRBAYB3YGqpcAkqZ7KStk32K8FCAjH2VBD4bZxDm",
  "key44": "AVwVT2xCFb6uhnsR9pZPBU5icKBh1XBpFqPXjsN191sDYL9JAhuWGocC6927o19hZjrXvdKJg1Q54KFi5y3UEnE",
  "key45": "3JNYT7YNm6JJhEzVYbwAHRxYJyWsQgQdV1KEt8HGAtaKkSZ8WhXwzkxxLu1PmaS1VFP5p4TbEnucjT6D18mNP9pH",
  "key46": "3LnqRdto9EcVdMjcScmjBkKqT5fFyr4NnVSazV5CYM9t9MDueAdDf9RMTodvbk373WoSzANREAW73Fa6HeuiqFe9",
  "key47": "31tnbN99bgV6bRmk2DKkDu2q6bFn9tVjYfgNeYN4iQByVRmrbQdpnU8FWB2UDiJ5mLrJSWaAbztQ6DjsNya9aNcJ",
  "key48": "23grXzcoc9vCXH5orrXn5ECwLxuoaWD8RKUttKziAzptUsZCFccsYpwHdpirxSMLQ2gAWDdk4e86HGRXmqj6MhY3",
  "key49": "62chJrRchTrZYoy7HaiDLnVb6wiXZFcuUsYEHYvLk7RajL78eSbxFcMuyB92MaNs1oBqHmj5ZwVRZoULfeoGrczC"
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
