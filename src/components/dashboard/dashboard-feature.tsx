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
    "4VLG4SvbhHURgvCM8YYcDs3SbQT3sNc8HpGkc2bJGnjBJX8oP8HQTdW3pSPaioQiXikyydxHWfQ1rVb87nr7Qomj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n5FGJSGZUYAVPFwn7QugDJdaJtvRCGPbS48LsojVoXHZdP3UEXKmbNiysS6xhXndS2kp5W75FmpiSmnFj26oHa8",
  "key1": "4PznxMiUvQMeqXq8BCPiN4GCGm3WvHYn6vP9pzrcytMekVYwxBV4cHumnG3HPrnszL8YfL58V6CNag9XpwifYVoW",
  "key2": "29NNDzZbruLpXirYZvSV7SiAMLFqFrUMoFCmVagTx7dd9PaVJnV5vnQUwtUryr4cSTPBo8fEDPmFctu3ovmW17P5",
  "key3": "2DBsLnwTMFuaYvmcF2DWC2cqRdZuFRwDFV8t5Lz4mqqSXv6BJvmZMrV7J3BcAs2ScBsTvRbtbP9afRob32AMMaYx",
  "key4": "46cExyhqqXicUZFNZRN7G2qRUNhWo9cSA2saEty53qRWG19rWJCszZsNDkBsk9zX7dwiD1iPQdyxY8rkepfnEgnA",
  "key5": "4AWfzvh7z6PqNfv6brwzb8CcnYr8oy4y9VqbpnPcoaq8PaiLoDFkwYwvkq7hMM9ygq6fhRoUzGqHNFk8zXmyrJrK",
  "key6": "Jpjd3GtSfPm1ABwBNu7WVCnA6HgceQY3u79NV9ktKNvdU5WCT4CNjuTSB46LduPUWnAQTtyQ4gVXHi8WQgcsgTy",
  "key7": "2Cri5ARV49RCrM63HqUMio1RTCjmf2bj26NcCu53Fc66ditc46kvZf1515ATCZxFRYVcnnDJQtLvHHsWXsZmtgpQ",
  "key8": "4mmaMzXX9z1J5JP3DB67GoAcpWyZaDymqdLdMbzcmjtK7XuxeN2az2cX61MepxM1mDyLEdDpFCXEhJ3gbK8eGrjD",
  "key9": "3YJRgaTP41rnFEyAqbZXorq95QoeQ8vtD16VDbDPfr2EqAaNsj4mMVjmzwkiSdyihodrRK5EpT2KFNFwRVU7RzZF",
  "key10": "NiWtCLUB3uKA17WLniowyfd6pBAvhJ5V8xPHxP1pMgRnwkxr6sopTdGL7XRREwCpXauvZZsgRv2UmA9o1FTYwrv",
  "key11": "PKAvP8GBjyGommKFLGmrMfDsw9J2hb5BANMm3y2SQtq9cbGz2yXkB39VkQ7Wx3aRsD279w6zgzWRyfpcxYNkLwM",
  "key12": "aJ8W7h5JxMUvGshk9k7GiSgKhjaXL8cMpy4ms7UDLWh6Wk3tQjyssEGrt4Bac8D6H7Syz9iRUtdwebopahN9fp4",
  "key13": "2v2AghWFa35dDJgpGjtvTJ55QixFja3JzwX46EPPih7FjY4p3RhrkiV6pebSwFq5JYMToJccjEw84RxTsugmVisJ",
  "key14": "2MrvMnepRE1MspyVBYLSsdF1kDKYuqkjUgReczVHwDpemYrfd9f4ZDvfVBKMCziCiAXbSGGa3VKUMoAHE69guwtZ",
  "key15": "5EAebRgq92KfeUXbnahd2yX8z2TA7ZQk6GhAKuzpWfcTwmtPqZvk3nvpysgd7ETa6QSdz2a5LMno7eX5AaMQAqE2",
  "key16": "5b1hTmw4NoVfa4KuYw9PHJMrJ9oVN5ajt1EaNvsoK3FCf2xzeY5a2gnCeH1DuPjk2VVxeAQNFTRLX32YFqgNAfkt",
  "key17": "5sW5jJukPtyJQjHiYJcKqiNKpktpuTM242d4QLxBfBgHx8eMyggR5TH9mP1naKAaReA5onrJy8NJmv53TfUZZSVD",
  "key18": "66mKhmWcA1dKGfJxfRJkDRFBpVdQ2FjBQVAuor7W33zJcH2CRjK99yE2iLY6TpVEYk2F2pgtdqAVx6ppRT8FDgoJ",
  "key19": "ceURhim6HdrYFdpDr33B4RjWHzwzFnfDAzrU9VajnZWaN1vLv3uo388gGwhCRyz7YeufiMHmSdwkEgpnoq2snw3",
  "key20": "2uajoeUzzoVGp8JCNyk58Nc4kE1bcEWEpqk1x65DuMjGaZ3Pm8GZ2C9ijGEfc5eFxmF9dxQawYroWcpoBCy6AjSc",
  "key21": "2axQtHUYS5Fe2unsB8gBTpYYS9qfFnbxZcRLBcEzQRdTFDBZuUpt9HBdyoJ8bgCA27hRpvrUtMsFFMRS3TQSjKqN",
  "key22": "3gcvprey1SQynWxwChbrikonKMiFh2nrfrwciqAoggrHuiVnBecN1xvYq4rKypiptpDM8qo8TtyL2pHxv75yzKmE",
  "key23": "4Lrysi15WA56XTqMFEDkYQMUcyph3FVx97YVqUC47s122WAD7NCoe62kHXqMKUu19teHaPbueGGtTuicBCyjLyYi",
  "key24": "4qyQ9K3oBfbmGNZLrEnkGvzYDjBaqhV7ssUN5PXTyjZtE6aEjzYHFQuUvTNznzng8wkAcBy4f6jd6qQ7rLRUyBLE",
  "key25": "37H9aHGThzCihf212XsSt5kapkLZCcAybJFpU2wPCoyPJNjm1WeHxd5ZH4Kvy4gJETTc82CreYKEykQaK9SCCnbJ",
  "key26": "5Wx81pBSkBwehnZ4pyacPV2kMEXxpMQdp2hKXbMhXJJhoAdaLfV4E7CKoMoxoKHCRSgXsk6zZ6u3FAWRNVspQ2WY",
  "key27": "2MvoWTKTBchHroQakMndgkLZc7st5LvC4G1kkV4FYeGuL3uKEvRowH7Zhq6EVd9yMUBVJvTBV9i8p2E63Q2yxuiX",
  "key28": "5oQbT1zGfvDdZzRF1t3zJemQ2SSwHoBvc2jhEa7ztU272t6suaZdFp66S5rYgx76FcptQWWvEyeP5FXbLsXo1Wpn",
  "key29": "5SffjWbj6Mp49uCwXkKwFcvhvG6HYyqnvBm2MVNFznDHR5Hmamne8Jdsaeo7a1H7bk9fScALwetFHHoZGDzqMcGs",
  "key30": "2snWL1BL5fg1yp6d92ucRS1CETx1g4RMETPpk8gt7CSJLNUmT2dmrQPPhuYxhpKj36FQBrMmhDSXyTHe4MTvYKLr",
  "key31": "2pXhTNdEtwQ1pzRSL8krxaQk8ccM8HMzr54pvUta9K5f6B6DQJPj21gv6ywjgH2UrLFrZij1fuuo3Cu1cVYakm76",
  "key32": "129SgkzAuz7yiNYdC6sCjCsceH7mS3U1qY1puh4UE4LaKPqVjjgT7E4xPoBV57d4zDo8XTXMwFAyK9ww8CSBKjNy",
  "key33": "Vswz57QcbeiGbjypwW8S3BSwKeZUhfnpLQDLTytme3TJWL5wu1KiCpFZ1iVob4SjR8CtBRFJh56E5JCbNXkpbuh",
  "key34": "2graXTn1kN5XebqV36EePuqNDjoG8FbPz3HeEo5wWrR9AjJrXDaewxgMvSj6EFoJHXf5ashErnFZycnfD6b2YQg",
  "key35": "4YmwBLRQpgYv37GFCUxuxXhJngqTfR6wkcSZ8WCfzEqW1CrHqt9oz8v6GEK2LitH5j2vh94rxfzg8Kzph8AFbfKK",
  "key36": "5DWi8SdJpSVfgBAiMbhau2U58Kn5QxVL3qdz6Hjej5g3dFYXN2DZYskpzX9c1XChBkP9V6pHrzzfzEi2G99savm6",
  "key37": "3SNsfn7arw2pnagBZsUYqchCF2X9pAnNo5XLwD8Cmb9pyRs2r5XkjE5V8ww4983wiMbx95PxKVm7dZcFNMqcZRMo",
  "key38": "kxUyMtwsijaqy1JpX8K2BnxEJcNUkQedKxjzAPhMZgKSyRQy4v41jMDwgMnusT7wvtadhmhWJEZC1crLcfcHHUU",
  "key39": "4xKSVG2644MVW3sCfZ2Sp3evTksAkJWthyvgavGXfVzV7Cq8UKD43gwtdcEywRirDSTwzqiWP3eM3Smujs74yc1F",
  "key40": "4JKkthvqj5fWgkoNh2dNFiQiFs67b5AjUbS6fYuJfbHuEGyxP31yZZxt1wiCRVokksHim98iZt1XotGMqExETEpj",
  "key41": "4oAeZCQCaRpewZu7qAVfjDzAGGCUkFauTrzP32e5b5DXUkdMV2S2n8k5ua5vjV63vRmqyBNdwrxxK2ZpDxjAYA7r",
  "key42": "4DAe8s8L124hCUP3VdSouK4khKagpQds8D5xaQEQL1uAwB4oKhoZSJC7mVnAjR4HV8BR7vafXSC577Vcd2GEHhup",
  "key43": "jcC2JRDjStTJ5Ge1vtDuVEmv1HCGD5gzTLFhxwA6oa4hTXxYAW1vZ2NdXXVMSk3vEvkApG5CXsHGAdrf3Prfrtk"
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
