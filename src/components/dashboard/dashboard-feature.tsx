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
    "3ivMfcZLpzfWsvAFiZymXFkLk5xKyCWLfg1YBdMQ36qNUmdqPwM9czfs614BHUEREk7jwkDfsq5AVjpJZsrqpspy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ogE5RYjUrAssyt3FyZBGjtip34NRHoNd9YmZN5c5J18eD5kdHLpxmN6yAooAgtq8B3MKRoVJyzVPHRkL2AByB7z",
  "key1": "3Vgb5XGxKJqgUHZwewstenAyBeSF5WnpNCYfWTdPFHrfnNxU3Q1FZGDEghfoLmZztsw1NRibDLoko6gGHSETpo5c",
  "key2": "vFX8hBBWC2CyjqkgxJF5QkUKLQu77raVjLbrsj62KV4j2pU5y4L1hFRsga5wa1hst8xbJEPE3E8sw5Ec8qSZMRP",
  "key3": "z5x5TCy3Ls14yW5PZUFkFTxxxyUKHKum3BdU4gE1MXWUpBNtxAYZL9q9rp1CmpQzE6NRWw9gnTyxihSvuvNu2Ap",
  "key4": "s2b1kDruV7ECJCjC3s1mbCJJCg3o4taHrUJ6NVE4oweZuxievWgec9YXLB3utGhsr1LPbCtyDNNHmGoAQkCNxSK",
  "key5": "pR7KX8iLQpj6u3Jvu9u5ZQgS1qPinxQQthhDLGp58WMSTRbdB2DH6dEkQtfwz4UxxkXV5NJwoKZLautf1ue9zeC",
  "key6": "3TJvXKdHWzZ23U1QDbjRJc7Yat4fjzon67XDhFZmKWtWLJBZQ9nqkvJ5SZh1LmdTFMdLwbsaLzEJ47F4JzumMiWj",
  "key7": "cAtETtkEuqAF3nytagw2xs22ARtF418CdXu46ghMPQdTA35iVuHcqrpckbz3BteWNB4Fz2sK3bmhEmoUXnxk3FH",
  "key8": "3e1W4UzW3EXYyP4hoKpRpyeD6WxSgq8AyDuywexGrep8QJ1DYvdz3XL34fQFyj5uk4YFuUBhBYpC1FQdSK4upUHM",
  "key9": "3YMX65gbSz1TjGuooS4zkbNpL2v5MRSkAtSMCby39geRodQqsGAicmoQPY6Up7k7wLmDW8AuFumu4VLadZETdeUs",
  "key10": "2AkuFAcx2q7etAD8WvbASzhqJnrDBzcYcABF6SJHBvgCDCDZD5Vp53jW1ZNWaaqnW9RWcDLPKb7iBaYEzVuyqngG",
  "key11": "6kkHqM1wo7wkXUuEUWhvnb2L1YrDdKwbpsdDnSovNE2v7Wg83iZ2UK4YAWMCnRvmT8ivRWGRbEAnkNQChcya58H",
  "key12": "4hgTMC3utbq7QzCwN2u2bgzK2ULfzq6tGLZhY5kWUTYXmLQtpBMTp63sge5BDMQWDeqpmpE5kLENNzyFWVSVgSrr",
  "key13": "62oHkGVcrdhSoCSPsWiR2d9a3fH8TcyEDudLSmwcsWhoQCSh526oHKnAeqBokkj5KSRuNZQk71MJVV4jq3Nowaud",
  "key14": "3vtgKJSAChayJTH68rYRvvRa74UATJELTmTBvsEb7TFDZzmaQG2V5x8Kf7bBX9phwU4YgbvMJtjTAzUEP4qqwsRj",
  "key15": "wzrPBgkguqmCFnVPdisyMGBxQ83hZNErNUoAfuqnfABoq9GALbdu7ZZ9kXbZXdDELDcAHZcRuWHpKbMp7uZkBYB",
  "key16": "35KHHoUREjMgEDawLmsnaP3TG8aECAwmQh6L8pKjZdXgxCaLPpQ1S6rZeqs9GJabTRKAuv1qyRUk973r5xW4Xh5S",
  "key17": "4KuC8VarfmMGdUT4ucnaTBVcXXtQodwQ7GobD2GgpaYFrS87A42E9EZaZmVonf61j1py6kC5fPAAPbMs6TxtfWMf",
  "key18": "fkqfzdTwuuuqz5UJqapa3QZJxUHqqPBrhJ2YvMivFpaJoQdXF1vWkwZrjcoggsDVf5GCjZDLnWaLPAvob1wMyNY",
  "key19": "4VE18GuxdfnmNTr4CDNpfVpsZGoUdZDntxxwzAJzkYkiBsCzEzoyqPi3S5eRYA2ttj9j38tdS1MuRj4VdSQK4myk",
  "key20": "25Jo6RGrM1Q35ZN2JSRgd13kA1CPNzrvDYzK6EiMdtHPGPUyKPLddfjU8VYhGfVBxXupWAwgSZrb6G2wQB1smQzw",
  "key21": "4jLU4CzhFS9yULBf81xTxVm13c5rxEzQC6Wfg7HzDEk2VeNBYVi2bQn4ttoQpopxHBVtiuaUjWm7nMYM6tMuLkrR",
  "key22": "3KWxDNXF2YcxgM5JVg7FVJXApDchFhqycvT8c9LzmodnWffLhyHHd7JkSSrjyjMP3RLrDuKgMnM2GRwyiMa34P5",
  "key23": "2gfPjvoEMsm9Pk2AJ7k6yayu9afKEoEeDsawbmARxNBeNeRopbs5pizejbBrZoB7oahSCewcMMapyMv5RhRCYqDg",
  "key24": "SLa6Ct7rs3zZFxXxeUe6puRaw91akgoRAtXxhGdqExJp8iHMmq4iutHq5rtP1MMgBgG4EUwTQYUvB2iaQjUz2Jq",
  "key25": "2SU5PLxFvMZiTpGFeuN4FfvTGt7jsMMK5Ats15NweBMPGvkwewSVU7BBMGrxNm7dsoUDphEF5qmZPJ157t1ZHaMp",
  "key26": "5WyvzGU7m4UbsgqeXhCj12VNmqWghLRXhCZ69jrgfnDfiaqmMx7NBVoGXyXn1UziLPcjwNPcVr8XzScxy8gSwbhq",
  "key27": "359aPN14yMhffn88cQpEH6qkgvaSMUKJWzXS1wx3eTpgsy1WsspuxzX4B62opooUx2LcZpnZe1MGKLh6jcZKDgcj",
  "key28": "3FDoFneGpioaAvznnvTXokSed5DibwpVPyYsP3SoV5wUgLRVWM9QAVYtJPA42d19D2APN9jKYhKRhKQe8EW5uWss",
  "key29": "5uzwx6kiAHzmP7PHV5GmpHBQNfGNR7ETZLRPdN3Fs1LG7R8AT7JxuM6rRXesea36jetB1ytPWK23zMwD8MwzZP7N",
  "key30": "WHJRwVbYpHgjjzEXdXxz9yCrZQah8h8jMTkQZA2HwdQ4xBa7G48d9MZySbFesQwgXjnzheHMEN5WwiZTDDjrFGg",
  "key31": "2U866PZMEZUddgsLtdxMs8enHR4bHk9Tp2cXAEp3tdeiV4ToRju9314EQ8DpAAooVDxr24h7irBtHA6bv5HNU2Nd",
  "key32": "5sWTGFovacYqG3UjT2Z2eu1W3R2VyRFEfybZTSGkdtbr4kUoj3LCayBj4BR63RJrkvhkGLqeqE862VimcMiKAgko",
  "key33": "4ts5KKMZaTumthogSxe11MDMFib1cS1SuYvAPKBnj8UQYvX29endR52xL3fEgyHdJ2hskdvorGe5CzYq8zZXr3E4",
  "key34": "2N22ZWyFMbze9UwvNBe9S2bs4jo4SUdwPeukHCpadW3K8kj8VRveXFsCk5gQzudCGaa9gdeCy9ZfuoGAHmBR61rq",
  "key35": "32CKhXXkyjY8z4Wmh1Axu1m5CUS8twXrt7in3xpE7DxnczBuvdiAH8a8dUM1rnwgTX8qmCxdVpyqoKAFgeaJYUC4",
  "key36": "yLSeXTZc5cSbgUvgtLW1bW3T942PyhALmfjfZ8r3eRPKDgRFqbFetc58ktkxZfRup5UngkJTtoJbfu4cSfAAC9j",
  "key37": "4mkTpPt3otAX269WwvNicjom5zpE3R9BxGpVhVknDaXjXb34e6Pwxs7zu5UzW7MpukzXUg77dw4KVuHfg3qMe8PY",
  "key38": "5rSG8pvKX7kyJQ7L4NuMkqCnN8KqgF3B8yXdwVqoiQ4KCguzR3tRX6aEv1Z594uipxaohdWPpiDcLeNjvJUmcbMc",
  "key39": "4C1ZKEnJDVCyVeH4P9K5SfDfv8G5CzMYpSJoMqtEHHReTzDoMEcZCRMJhKnKrXoz6mgcdgGbhAcvT3WNrnwXzuRG",
  "key40": "2ySCYpTbvP3dxGckbwr1QW6asKNRZFcWyYPnQcTKToDp6myUruv8cgagzWMECc4pCh6QDr5KiHaFJETffpEazyfX"
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
