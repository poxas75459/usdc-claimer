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
    "25nuUFpveUASkubdyTP1aykpNB7tqtPzDztJMZeYVYRYKPWyUL3cyY8S9KsErZB787PtoF28V6b3KncZeGRBDHL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tUGStocM2FcMgjKYvR3N5jjP3DseN5DTSgishmNpeodZhiSBjiACaYWvsQ9NPLsvB6XRaDRc33rL1xKzT8UhqxZ",
  "key1": "4DaXQrk2QQbf1mMQK9B8Gb6jmZY3szkTV6ErKK22UCFfWQeECRUs2XCx3tuwD1BUbiV1sy6havKJmga5UeqjTqjU",
  "key2": "7e2dCWf5icB7rsVSww9xPJKB17z25PAz341aJPUup2bxGEMEa3tQfjHKEMFMw2uKcqesr3L77r9SJnPKnjY3x1T",
  "key3": "4nXEaEwZkLRQWi3REQsS71UXUVc3UxM1YhG6tU6CL2x1SQM332H4SBQ9DrhwkmH1TDxyxvRiHoEsU2eypourPCbt",
  "key4": "3broynQ5tMo1EQAmAe79fHCrFE39Kjn3TPsnZXCv74UWPYPbp9ZRamayB4iwrps4Zn9mja2sRUKuQbeaS7XjJ9jT",
  "key5": "3Z9tGo2imi6pkyr8iTcjjJzAeXx7Ubpf6RxDN15cSVVpfJU5KMnPgw7vVpRyYwMamec95zaFVjPBLZqeEZ6FGrrN",
  "key6": "4YcdzzDwH5BdE7Ev5swJ4q67pi1Taf5dhJN1zLXL7pmvj9bHL6KserVWa2XEg41QRnWVQJxx5DJnmajBZjFBFCVV",
  "key7": "3qrd2QMvxQVv5dPnNht1v1Hy4x1QRzjcFLUyjFmTRCNThsuzkuUJ513RAagoi9B65KUYnw9dMibRthCUKJaXz9Jn",
  "key8": "481D6LCJzoGWfKwS2Gyhmvq2qqNPR9i2bBUAaGaaRDKtf3Pjt94AD4trh8ayiJvFVRSLe8XE3hCgKPmUQug5Btxh",
  "key9": "4j7gyPdpmub4gPfUhNVZvSAY2dhgf1AfxjgJGgvffmPCCDSD7NVEr5jr5GJQNTjdE3HYB6aCt92H4XYBrdnHggwo",
  "key10": "2FagATs6GKTEFnVqk1xx5ArJ848sWbg26nQqKPbc3YZEr9mjTdmtnvQyn89k54Wn296jxcqSAyEhSmxiCSLbutSc",
  "key11": "2yaXnkMQyjZisyBEYdkNkR4pEP96irYV2jGgT5iD6ha7VrPqbi4uZJ5FGZh6fc4tDdkvfE29zpRtHu937CNCiFJ9",
  "key12": "5C3TSDfwuQfM7Ff33fSMxkAKQUWnTgzSD9smM9EtTVtCniAkC2atRQt79hoSAo7dAZ7HKcTqt9EdvKYGaVXRyk4h",
  "key13": "coqof1C47yFEiwC4QtREHqQTmQ9DVFkwUXZtWmdN12VBvCgdSwBHyL8gFQhhVq9Lg8bEvZ1LqZCE9Lzg6EZAAhy",
  "key14": "4pdcz2K9MFDU2Way4BCjcuqNjKiP37cc91yKwyiZnv5QmfgvKT3So6Ndsd9TbmAY3Wq6ZTP8ygR8BC85mKc7bmxX",
  "key15": "LbceM6fm7SHLnFAp4EokgM5hyJXQRSwfaEYnkWoNPhbtHjDf19RHg6DxQTAmHHPVnLkVox7UEt9CFkT8KM2rsnt",
  "key16": "5Mju6dJXNVxeyFrTKgAQMa9bsZLH4RT7QCSstjekWsq4gEEAq51JqPeMo3pHWQ2rFjtij74s8eytMMb8YsRv4YoR",
  "key17": "2Kj8NKiEbqti5yGQXM1FRn5BVfJwGVKGpYuyUsLEChq8ciHqitmmS74LNAjehGPQDfwHcPqcyHAE945YW6JE5SP5",
  "key18": "4RNpaStsPFsF2LTCZWkK6aKdbfJX1ma57LRhZc5Yxx7XHBCbnhg5APcSsgHRNKTwXP7Betei5QEr65PLxmgPASxS",
  "key19": "hWs3P6ELFhGbioDadwcY1x7HymjAGWm4zvMkQPuh69UTqtoxzb8hoLrSxLp9ZGe7c8Qcs5hxYPPtv2rkd6f5eBj",
  "key20": "iLocBQf2yAfQbhqVfZA8ZQ8yPjgCTDeAsCwtjFKR5baQdSNm6Ng6RosLUN5SKeziv4jBsDQZz5c7xVFVavRuMtp",
  "key21": "36LDPexNn4GwtnMgsoTCd7u2DJLkiCW8P1kqnkHqUjc5XvM2kuYZdKgvyL5bPnyL7ZCrBqJwdWuBmrD6Z1ZJujQv",
  "key22": "3Gcd4tZTvKghNj4rZFPqkRgrt5pEbiVSg2XxK82raTZB62kUZ61yviWAXUQJBGWVN7W3F1BKY31y1mQLj5VYb15M",
  "key23": "nZuVtWdyP1hmuC5jg4u2PeSFzy2F2Xtdi57RHjAy4wYigfogK8MD1KqRTYrNipQtrUywGkWKNnoF96HMAhFrP2N",
  "key24": "9y4sc9J2eyPBjZmHQ8efMyqiMLN2kLJmRRbiGbBKchxv5zoSykGVGyproyPQhg1iUQfrFgphm8YqcGSZuydE9cj",
  "key25": "3c4Ux9ryWkJmiWGrbckzS2iJbadJbEDidEz8TqPDewGS5zWPwHiLP4NScKdTabFDtY35mFhbJhkMjc12FLEojX6m",
  "key26": "59JU3CYTG5iJiAfLS2wmgR9CX4ZjtGRz3PRdnCVDARtJdzsdAYTVLWeAvsWfrXKQZxpypt2B7w8cvNG5C7eDkdNY",
  "key27": "3L4xZXLoEBLxiAieYJeRprWHgYSqW1rVRoVP3k8F5jNQfbzMU3pHs25FoEBuMGNPPw9eZU4XSJvR94FdB96fUjCo",
  "key28": "2rrxvsv9YkVkoGufXZCnrGYkfUXoSXgDr6MHapwztpwEVSHAZtWTfGHGRDKWsYN8NKqXu45xjUi3PjQvjrx1mfWT",
  "key29": "5BZQ861Rj18TYc7i7JKgmVnByb6m1hSz9VKGraXzDCo6b5jB2dhtJ5AVtp7pn9TnNCHVCjd9gyRoP6QqfAknkJst",
  "key30": "26qfxA82n9Pf8kYSKQ9nVdSRZyprWdAqC8abnUkYtwGNkqSDeAT38JGJJWaQr3uWkpFJv1d5fQrijvSkRsTdESwm",
  "key31": "4ckdXQJqwHnkEdvNMn5Uirfr8xKeWFCST4wrGAW4TgBduZUZRjLUcCXFAGVhCSibGNFAPAmJvQxVDJJDftFEHbfX",
  "key32": "3LM3M1RZB83S64hauQWmPjFiFwcWLDwNy4r7saJ2RLi9yqZymummw51TdHWnZubYKRzmXVZNGXyyvrxXsWr4KYGq",
  "key33": "5dLnLcurKyf1vJTc6MtqykybgvSaZ1tdxoAzgrJRJdFQwTY1wxPH2u5y85rPCVqLDiQywVQ1qqbQWDLMATbte2PF",
  "key34": "2KT838srYGMN5r3woYg6chmAQXXZ678eqiw3aYWHowhQJrkya7mKoSqxH3AjuuGvi7vdjiZoaH6uJmmoXVTYg8vQ",
  "key35": "34eRZ8i3hPvSWdtg2vKxacBf39Sh8gLqR4S98VNEWnrtiGqjvL8ZQwHVKiPCaxZ4xiRPsSSvUZusH8qVdN8LqHDJ",
  "key36": "W9FW5Pnd54zuQmr59ykxdeQEH4X1XzyhymA4jXAejFr35bYYH3zrCZQZwCkzf1f2yUaaWZrAazgMNsrUKWgS3GL",
  "key37": "ZsF6EZjhwG9mwvWYPEud4wd9AarXm7Bdw7oGm7aqqiPLtx6jrZBZPmKWpGDr4wSZL9CWi2CrjEHcxVABXAiRJc9",
  "key38": "4BVHUpR43SDCTd4ZnNJsmmW937x4SqiH3imUzdJzxFhuEVqEFFLS3P2AcuH8bbDihsS2pisMhZwLQr2Y6CGVdRqw",
  "key39": "3ZqzL28ZqgzE7tzfLb5igm1Aub7S1n6ujVEZj5fVxmBc9mZVFz7wQ3pTZ9Jj3zzZcXxn9KETSvWZQvCQErkKGN5j",
  "key40": "2Fu7neuwcCiYYiji4jo87QtfRbMmNsGQQEtwrssnoGTAjFVg5jaA2ecXEemaJzPSBTPsJGjUGoDi9DLB3oUQxghx",
  "key41": "QG72AJ1bibR1up6ghLE5GWT9k4QXQFpQzFyULgNkiT5Kk8hmkfoNgiFJsmaVmFQBP18Mde4xBMPj27vKcdnC7s6",
  "key42": "4vTSnQ9qcD6RkuUQSL44LjMcZP7o2cNkc68rZcrDUCHRNPtq1VwPD9q9kMTdvshmZ36g5No2EwQ9Axbk7kHmzXR9",
  "key43": "2WgjNrJiZJfmiVfxqftNfhpgtWE3qQCsRMq2v2bHBkwpu2PsW6rFzZWf9KF2J9HWa1TibQ6KYMmenK1bs7bMHee2"
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
