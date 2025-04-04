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
    "65VR2u3KZD8PGyDrEuDPtmuGbGs6ZimwESQcgm2v6Co9sy7zf5HrSpTBSe4814fQsDhEh9daoYPr9mMP9wJBahJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62F4b7BhLmyZmMxZwEyC5r6pY8bHZhSjYac1TiCaCusm1JnV4AWmpSXdwXusfMLDn8epkZDsERN9QPhJx9qfw7Cj",
  "key1": "54pQRhpfYBbR6dT4WLdfKhPHqrGFS6ZiwWYVB9FAnscdNcK9b29r6mKcZkAR2M131htYiwiytA4r8t1kHBLHWEbe",
  "key2": "3p8sfsEoPjK2P5gYiYvW31MKFG9YTBbRhPNfkdxJgNNxEBpioZA6nnrxmgGzUaNh9fCR4d2bRMwiejuWEwUTDULb",
  "key3": "3cxWP7DQ3rnpJYadH2zfjJyrhLucKqUgumgfNsRM9deeLrGXgYBtQsdmwiYzTQ4YbUUaK8GyLweousmwP1VqTSgs",
  "key4": "3MV7uAtWkpMYS63EmX7eU2M3HzGAhKa7d3enBHVrXhr6V1is6d2BgQJ8jjU2r1tPkyGmoBsFn7RogWFKFLeTp5oJ",
  "key5": "2DscBWcHzu1feNgCZU5SPCDTMYCpdsRsZMMJwsemqxxvk5kfuwQvy6cqw12xMqgD4QesVF98Dz28hcXyL6Tu6LfD",
  "key6": "bm2k6ihCA63FZdrD49yudYwtr1XH2m7AYfQy7WbBCjmwF8jk5d9hBfxeEhHnGriRbC3AaUc516v3YmARQYE9zrt",
  "key7": "4Au2n7iDYFn8yxH1cbFyZ2m58gSVCBR46jVKWjjp55CZgGLSds6eXHZyrpjQ4Gx76DdvTxQ7wVMgvdZsAsBVCF6z",
  "key8": "3PXK5JkEdnaBrznJ1ibajG4Y4Jb41cZegR9ZasahR5J9NqXJ2Ht5QURvgQAedc6trWfgWSwsdDSpdhNn5RyjZFA",
  "key9": "5jHGWqYjD3SWdzk1BTGjXweUjarRLUeG9s1RCxgLft3HQw8RCMqLJy9sYsfgxFqTBD75g1kaKGomZMB92rc1bUtX",
  "key10": "2GRHYdZsP2aBgCEbkfnNJajxR6E1cSkvMMxmvFetme6GtNtUCEc6C36oXXHo7ZNyC2mowDuFjcSdyH199i7fdWRK",
  "key11": "23QvEKYF7UjBLx3hSPSdSKUAqQdmrQJnYxikfHiJbv8XxXREtfuriqcndYbN51NJdz1mbKL7LYzobdazD556rcC5",
  "key12": "4TURMhypjkHroXAVG2x3226x92sk1n4JQwMCz4LSAbnE3y2pjMqPRdyocyBDjw5FvhZ3yR1vpcku8Z3vtrwrjger",
  "key13": "eSJuV7s4FpXNDD1f4Rh5WVkPipYxzFm9zdks4n1zX5KcJvaDKcfM4nDLMqomJdzpeVp3GTWovn5RA8wypoUdpHQ",
  "key14": "2QMnPyeATHC8Xvj6A5DTHFsbydigfuEveC2WGxps3P1HwQgEoztnwZYaovbbPj7Lf6CUAuoPh1V5yDs3fgJ4igi3",
  "key15": "4pBk3oMYg14zuy55Nt3XwBkyHsexxsWChgvKwr4TkwY5qDPxkLsoN2fJcT3mVgVxkA1tZia4u3FaFnN9C8czdri6",
  "key16": "2vC3Zj2eYxc7HQMLAgukbhahZh8u7NMNG1R8hCKQdsdhr7KZT5aUotK2Xp9ymzhFy7NoLBBnio3gso8jkqfxCiK7",
  "key17": "7t6DGwff5G2K313MfGhJWRChkwDiAWqKqSPgVxVcmpLnn8KJ19T3H99VTVf9a7ULxCScP7JGNKMKVuQzQCVW2tu",
  "key18": "4QKD24WAU5A7GdrZsJRYU9GcFiyJnV8JvBuY7vo8XXXHQgYsYZzgGeg48EDmcuK3Q3ipH3JrVamT5a8CuiXhXfzi",
  "key19": "27a9gWuMQjUthfU5YNZATsQ2VT5AJEwpuLf3wmuUbodkDqA4P2N9zcayBzkT8gf6QT9nN1G5U4QagzaReGGTyUYc",
  "key20": "61kt1ndv6RJjZqZzyfisAyxnFv68dvSBsKbD7ojLoyPMQhHwUeueYmXMVaATgNeJijyk2PeArMkggUFBHgJvaw4J",
  "key21": "47xERBho2Ddd7HUfqCC52XeBdxeAvVWPFkgvFM2eRLkPP73XXYmrFPkWcqZdgor6skANr7sVvYkXrUwWdnFT7dgG",
  "key22": "3qnhKzv9Yb4khYJodpCeaP85ERrkZmPUJE9tAUJ6rBT675u2TDq3Sw4qcbArNnXPUmtLKWhQrGuvSESuve6ePrva",
  "key23": "5EQuKEiJNcn9MaXtw4T3ckj7SPcBtdx4K3UK5oZMexsa6nLnZFnoG9aTS9EgE9ww2ewjUiT467S1YzZVTictrbpS",
  "key24": "5UhJWKXbBVDtEm7iKxCHwe7eSwK6q82PMutCUaHnnTySPkWUZfUeFPnhNGir2jmg7enE9Eyf8oKpob5PR2Na2ghG",
  "key25": "3wepGcnkDdvEVKUB73B1bNoNsATSkzNzvNqxdxtavRkxdTykhppStFijjSADqqu8d7ezTaCpYZuyjepH3DYa2iDu",
  "key26": "27y3TSGdnCnaCgfErC381HWZHzNm4dKS76tC4kPMZP1rMprtDUHoejNbMHua62o5LuA5oCjsCNHKTD9uRFtZBTvN",
  "key27": "61tkda9c9o2F2kDoChtYjmrriur5rx6TgkucXTB3JCurzeZF7Dkk4vzYxjkPBHbP83Zmh9F9gwCKCrwReMgyu8j8",
  "key28": "5bmw72sKKRdA6S8tMfV5cCMysy7kiJHXhJ3EnyBjBW63XTTZVyhLEXYRB2KdV6rKwoK8KJQFW9Neb6Unm26qoyGp",
  "key29": "5s5KD7HTR1m3edfbWWM57qsBgNuvfGEDYVn4LW451DD2wmZdXAD3DyctZzfTeuLdhF8kFhqEuE6zrVpkKXHDoKR7",
  "key30": "4YqvmeWaZoeSjYgtawsAnK6TKSA5Q4xQJtM2xYr54ajm6QAQEAXzBAWobjbiXRP1hYSEZZt1tuRhvSMnHqMTMCJz",
  "key31": "3tkiVMGueLvfuw2npeNxWdUDKypwFCWwXcTUoJT8F7K5ndC6udrV1ep4kpWyVWTUpGDXXxuV7jau62pu9E2rzizP",
  "key32": "DyMp6L72DX4UuJ2Kd7uGQtc72WSqpgtoX6G6kmgZxtt53qikbVbkew4y4AghejV3NrMUAPtf2zHgZ33FhdnxqRq",
  "key33": "5t3Kn6KawU3MXbuAma5iKzoCGqUC3KHCi9uXp4iTy93AgNj155pt37ZdFi2keKYQNNB9Pc4pXgnsShn2hXJogtZi",
  "key34": "4f4ScfPUgG6Fnr3MVW65AA18iCV3PzjBNXnaRh6CCjQVov3PBa9AD143xFaYxbDEEpMXvCWX5WS5JMiJ7F7mN3rE",
  "key35": "5dtLkCSvkpJSmsiPMgCLMawUJaXmFotVMVxnQn6cG9NsJqkgvCahRsbTUzXkpwxdSmDQWwhWksqyUGnCdFSnmpd4",
  "key36": "5o2tBGvFMCAtn9vhWj5qsisyyFcTSimCrQvkeYPh4HvsgsVyPc8yE6o9RtCpmBetHvrqHDef4vWmdw61U76NmPgu",
  "key37": "5rL5smkAUNjUPsgcST9Hpah9jTJKyAaJo9PoYMtZ8TuLuPmbZ2JmRKCSiD98Drb7TfxVBsawx2dLJazQJLKSqm5D",
  "key38": "yQjtkCCcQt82N6iJrBvP6oP46JQP4qkGSqYQn8LdKGPniMTmC9qtiiEedq9LrAmUBqfW3J7CGAHpDeTLm3WodNk",
  "key39": "bFRBuFScvgjfUtzv4chBssJc2bZS5ho5SfGV2RMsJS7wzE8MVhqWq1t1B91Tu19s8L3RZ4H9WnbRoFKJnHfdHN3",
  "key40": "2EWPhck2FkLm6ZP7SZeNSDVToH5eKukTNagLw1E87M9QUb1ewkRGWFLfqnZMGT3GYtsz7YjCXNnod5guCCgTfL6T",
  "key41": "2j9zRrcQVrTDrNZgWa7WGH2beCjMBk3M9dwgnozsErVcWsWYiUGrXBDHcQLQzK3Nm6hZtxLgC9wMz5DMv8dR2nXf",
  "key42": "2yXBJ1CMbPmTsyoo8w9eeyXUogxTUaU2kK545qgpaRhUGRfWtvTASFuH1rTZfowrNvUUqNbg7q48Kb2rKuqPiBoJ",
  "key43": "2muwNMPjAu5GGYKpf79QHzt56cPuRoaFekMWXwQrD68TvTL8Gu5LWihtokiYa2ZY2ngc2eKM6YCdaZ1YYKsRgSAd",
  "key44": "2QvS2hSAQb7Cc2LnMmjKh9oDLGkP2qSVsL5F3HoevJGyUiu2MbQM5GxGe62T34ufQYV8y221WHyfQk4WERRubQ39"
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
