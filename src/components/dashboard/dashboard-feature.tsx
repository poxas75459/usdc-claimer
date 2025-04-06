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
    "4NXtrZG5a8mhkj4B7KadTTrMxnLenNTLQAo3Ghzd7jDKnvGUZ4cQnaaTFS9Dp6C1Ue8hSDtPFsfxawCxamPgjbBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D2PuDjgvNYBaBDAbnTByHmJAwNdo9EicVHppuquDB7wDoNTf3aJ96ahiTiys4mELqdgG77ujJyMuEaZXmgWjD1Z",
  "key1": "kgpFtcrwYm7xdzPpsErHVa13EXWiufpdVDkHd6KnoWrdPTKt6Fexdz67WAh9LQschy1PGSc6NQCgKRbogaz7Hzp",
  "key2": "5ZU8CdLkV8AoXp7Qpky5yDCprUFoJ5xSM6RpmQSy3rEL7djzVUf4McU8eLjMn72T1D8pR9pMLJWtZvSj3v5TZiq2",
  "key3": "2rYSwjqbYqUdPxCYCoi1rLdhLdMBbtZRc7DyKLKg1u6MStgjQktED4NRQ3B2Z45XDiDKTJpqsDzRJVccjFmXUpMT",
  "key4": "4bTfu1fpQi3wGYWyHR7ZVB8EranfrrNwcW3nuFAFEfmpvcMAg5DLgjE8BwMXzWKkBxNbk2LbE2LajeVyivGdkX5D",
  "key5": "32ZpvEvc59FutyTMKjm8ggYCBVoX9iZG1TVq1qXRbpbfzHePMiZ7SMF8Gvu5p5XHrCMRnBvrXjTGHNt6A4AhwztK",
  "key6": "4xhhWzkPQHAt6NP3MJvEbU8hE5Nri7fozLPNG5cmzUnKtbHykVqhjp9tExLW7MaMJvAnRuEi4FKDAmhQeW3gqxeM",
  "key7": "2YLr3EXUEfW9ZYeVHPVRH6AVUi7nXAZhuXycD2MdmrauQqYfsX96khbXygTusFGkSvk3tYrRUG5fsVWGF1uPzimN",
  "key8": "5Hs3cR5x6UNKvZ1C9aDndjKQVAfLA2kkYgZAVCxoPCTC9JwgH91pukZcvsYb6Z12xqsksw1oM4WoNHqtzryynQCy",
  "key9": "2Ey9gCMEbyC8oTmXPgSbFY2TsdKKHDAAe27CN1VgLG85DWDmwG7NCyiGbKeSGrnsBynKFftLKtmfKUtWUsoXUJeh",
  "key10": "5Xi5xji5ELjDtCUcY8QWefdmcfS2r58YW65EHnvPCpRdqydhuunVczWBfvFKYugFb4hx9Jkuue96FXi6856jgNdA",
  "key11": "3kw1Yowt9inL5F7jq5q6HaY6W9NJrfuupoUPxHLwKJ2g1z4xGngoMFXE5kkPEefzg9GykEtABFrW2y6PGvw6sXms",
  "key12": "2GckEqD72NHWhbjojm5irix7qtfcof3J89d8ZzoEG9DwysQe5GyFLKbAjJWRZuocZRDv8S7SSsqh4niRuhZ2MJx1",
  "key13": "2BsHPbmDNKo7M9mndbQ2aGUriwBF3onkcBgHex2C4fusYQcMpEPPZJJpnEACu924MhyQpB3uZpZnzjs7ziR978PK",
  "key14": "66uYp6qdDZNwPi3bSoKbn854dwXZW7wqPSC28nh3vL7DZkTRSWH51JELV8S4RNg432yYy1U3xVQ4QQDEvippvSEH",
  "key15": "5drgTKHFRpjeQQxagFSXfCsJdddtL4YMA7FZCnxuCq7i5xAFoyozTJr4fL6NZf3fNKUtraXV4AVWe92gYaCbPSBL",
  "key16": "5s1bsrdSmipAMxkLpn2KzsE46EaAj2shdti8mJ4LCbEW5UthVKicWb8LU6Rn1hFKnVberp8vN75hFUPvARKj1DNj",
  "key17": "2kZKG7fW4RSkkZdfkqgkai2EXWGU7z3DK6h6vyqJxk2yUD1TdVAVeWRdpJ41yCLiLooethQcHVdH1FkQeRH9XSMy",
  "key18": "r1PtVK4jQ25ikXRuAjCN8PpsQyyVM7S1ENRKoe1YMhxq8E4buJ19gY9iBgFT7Z3fDAV4GJ9G2kHy4SpM3r6fz1G",
  "key19": "3k4ksmpE3HjX9zTUvLUWySofugZ2guitGa2X4Dobtd5iPHxF3JKih4CGn33GKn7ek2SjhQfo78iTRARbu68tUzo6",
  "key20": "KCtsQPtEqBhPt3oXKUDrsDRSNf1d8yGRFqPKXnaENnzw9x7Db9H3YvM3LjgdmMRmBvmTssEoU43sxu1X9tLqR6R",
  "key21": "26gHRRLDkL8YBbCAZedFqsEKtVcDDLMF4hcnhggDthrhUFbx1LJTd778tEEBEqaqFisbX56xLznAqdmSEqR58cHM",
  "key22": "5jsRQrS76cXavT6rMUqqsiCfpfToed8p9tkRstEr61gtCdtmAbNDAvj2bPXzrqSWKakVYR37Yoqad2UoTKDVxQaQ",
  "key23": "2FduSQYjXSE3fuMzmNxKYbvJVDWwc3fhHg1C5KMEGyzGdpVZVJxbScdDwwrLTsFVuqXNnYAqcu4y4pKPD6Xh6vK6",
  "key24": "3YEhDzmBoF8ao1UGYfGan41xCZnEHatBZ3Q9uzAC7aJKqCjRXjCNhwpq4Ctb952SMY7HGTNJWoUYnAsa7VbuEaiy",
  "key25": "X5ynhZdMgVjyjqdyANycB5DtoY8aEnyFJzc2RUutnnzQYxuXRvqAsfsvzyTgJT7nYuF2pGehqMRAKwBtMLWtScy",
  "key26": "nj5u94A37YMWRYNHR32XHXRgEGMgAnjJyTBZXYUZ3ip2PEd2E57s6H3ctwd2TzF4G7fHR47c8RxcL4TxTB9L36n",
  "key27": "2sE4ZXDgfKFjuZJLH5BqKyf6XQPREAPzBg3k9zSNV95PYpdXRxTWi9oL7EVP1BK3uSBEeKr1QUXTDmQGHmVnxP9Q",
  "key28": "2fC9xzEPv5QKSkwpbWfDN34hRNbGXViirpZAbnQQioUdAUKqXvdfcBaqn27xGZWavFgvyoHHZp2r4heRaGv4HCct",
  "key29": "55TdwMJjEvBEnLngV1AbpwndNMuM5XDCKVdqSmYPDKfhQ3diYz2NgzmDS9qD427Y9j37pbMWmh3MdVe1XsVPXi8e",
  "key30": "3oRePrjktE4RGvNe6CEDCphepTgcuMGTUgAMGyrQqESwaCef9yc6zRj7FJJHexAW4EnEgfKMjTJporiWgYns4guH",
  "key31": "2vb5nBZq7ioidTA6rpCKn85x3bFLVqKvwochJ1DAg4abyP6VMBL7NAx4XgSWwrfDguTsVSrkmLDYDcnxvT4grKkN",
  "key32": "4vxGX59QgsdF66NfprnGnxy39SHxo9CuJHXv8mNV5TDzRqSztVJLtSjR1Bjqukb2Di2U5ZAdJ2gKbgPQJjmN7QkZ",
  "key33": "336j3ZtNwwnPd86eC3rGrQvig1r3yDTGE5RCLDjZFzJoNR8W5n3D2A8W5D9EcQPu4kofkv5spuVc5hpwCLwM5Nug",
  "key34": "2KPsiYXHm2wjfLJKNeRdMx2ymn1kHnmDTHWHDen4yRYGsgaW1cp6YkVPKbBFQhUDnJjFvE2nZpQ5wzYWBBMvDSN4",
  "key35": "4rYQfLSCmpxZt8dNajA61CxoAYrv1ieMJGqRjbXRaDyrZ9xX2wtwnMNxn5Tg1ntBKydHgvv885zpDPTWFJJ5N1FS",
  "key36": "56pm7tmWL2ZX91RNiR8LJWCFnu6ihCtqvPic5LLPQERiBTht5aWUevQKDvkfRwWEwTzVRgbZRYRY1ZiJGQduKL9g",
  "key37": "5PP5jUvjPnmRc5Qq5Afv48v3bCNvUfQmoseBaZctaFzYCoJKJpnFbLZJnpxUrPe18SNC1UT7DsPfVLzRDKtV9jfh",
  "key38": "4tNC8vkzXT5uNukbCRyavj8dmzXJmfXAcmnVUDrdXaV97MymBwPjEXmcfi3ixvgn4wjxSM2QPXwDqDbBC2Hp4VsP",
  "key39": "5mahN2XyUkuoUR32ro5TQRTuCganjPsBjzxzLTvtZCCztGuvMEVpfoV2k4yfiYPHxtrfnrEG9hxizPG6Bokmd1yR",
  "key40": "4187f1Jprcoj5EmxoLtCKpdU3g9bbZ9nmPw3ZAoTNJ5rDNnNWnGBEVKVfAUB84hZAkeTnXpoJQZMfzzhsdBPK2TY",
  "key41": "4q5Q9SbMiHfnJNCmyGr8b7LxXoGM9vonaDCp2bBLurMNrjd5bwt3y5drtygRYrCxpMQqQrP6jcsP4fHHhhzEzswu",
  "key42": "4ouFyF88nLmY45d2M6ktLkszMApr3RJr6LurUbMz79f1s6CXvRbUmLn23CNHvorSgY1Hs6QG6neYSGXtu8sVE42w",
  "key43": "4xM7KfWhW8AKJqMTMWFfhJunq2erXLpsMVrV4JdgjbQXsnCLdAzbZAPd2wE7BuFGMrfw9tg68hK7Ey6nN8yd4SgB",
  "key44": "hfFGFZUJB2jp6L94tXApFLrmzJHrBFbSLhUKzi6paGUwmZq5Ymuxz3ukNaGfHfa415shU3d28F5PhiGSfuiqZn1",
  "key45": "2xXkEExD9mKGFbFGTXDcpxguSc7wPUyQoFn5NJH7n9i4oazuACR8wdKzXykG3upxzpZFPjxn4iBTT9HNZuNDxyZP",
  "key46": "51SPz64B9SB5uhyGsxZLGTRrX4yvvC6ncARcvMHLZrrTzbVHvsoKuv49eSC3PsxLbo9kMzUTiMCGJXP8vfdRfWYA",
  "key47": "39ZaN81DnLdzhtcARYntxQTk6W9QudrcrVrEoYZyzDntqiUyTpjB9w93d5X1D8ZyNm9iGWCcQKLULFJea5HC64U5",
  "key48": "ddENUcQ4xyD3mKLRDB7aa2Fi5wWAft9HR5ZeDkSp9WoaYYEgVATHqNyXseHvd5cdfyDG8HqyUMMR2FLgXjiuhdS",
  "key49": "6J6sBBohAqGQznkgAkow13GXqR2Fg4xf1AP1EKiHNNgExVwaSdsfVm2CFZQNJo9bDXoPYA6UkexP64HAXzKHF8n"
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
