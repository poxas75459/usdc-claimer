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
    "39QYoY96emeHdoFiibBHuAaVP6AvFLwi5C9mudrQEh2rqDMNPbZLZL2QduH5AbTCXpN8wXwL44VUEwGBoLVS1swg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jQaZS8kc6ssa5nApVYtz8LtwFaN4TmhL9SQvJ7EAp9fm2HYZDmuQwSN5hyNmJHd82Z2tBjpTBSximkrjM65M83q",
  "key1": "55daSyoBB4EUhoSz9k6bbDdx4nDJ7WUhSibLN8s26LhCzVLyLZ8hKF9WLYezis3sCq2H9qMLdYRhCnmJz5S4RNcn",
  "key2": "5NSbvAfkWj8v8n3PbAjpmXsQoa1n1s1RRdWnhR8QH8LYvSvw9nw6mzjbDaEL9ammdRScjpz8KeW5QPNx1vJ2ZzdX",
  "key3": "4wKfpi2pG8g2iHSx4grVpjSAP1rsoji6os2EKn66C5mhoYqb63dvpBcHKc7cxSArCrj1GKdkf9DSTx5eBfc24rrk",
  "key4": "9JE4zC3dRosQAmtNfjE1pv9rgohQ27MKdAMBggyL8nuVUpH71f9jQzeBq7ZGXzpruzWtTCka7tKNBTL35ekHLPF",
  "key5": "3UoYZAUDDHFxNA2WrGH86rx7cTN7buszmEUudTSPAdyge941iD49VxxRenGDyz82LXPxayyvyKNTRzuNZkrPUxpx",
  "key6": "3BS1CEyWszWeowrj5MRVrP2W4jTtfuJiaxVgYmpW6usDGwFKZdQBWa7evmeMAbsmL63nXgabjQAaJCUfnTH49Dr",
  "key7": "27P1EawTVR6QdsWEhXXweMUaEWsFgEpsPn7UfnBLaE91X3jBT9GAisXDMtebvSppif6PxRC5kymMKjqqzaxGxdw9",
  "key8": "4FhDeeX21P7bdCgUiGGJ3e3Woatg7usesViu9tKWosn84Rk44TmeDejqzqAXd9HA2kNoTsZAL4GZLFmpUpUBnR5M",
  "key9": "5NsEYB5eQy9uiL5aysUoDoCWU1sqfX6iTU8ACcu5s8fAaoHWZFQWfBc7DPSu2FUEByyo3RL9JLwsxZSzVkj8Hw2H",
  "key10": "gjeYnrW5QtmpicZ5jvkzuDzJBxpkEL6h252BdFXL7pZbUByuXUTDtDuYg9vFrpjeboe3Ys5iAddz26piJhVwu8h",
  "key11": "4oBuPdRzK2CogUKZbdQmxy9HA22wYazdSujoPqij6xUFMJ37xb4VXxhmqj4WeUUVpNQgPswkYoVqtcEjW7GPZFG5",
  "key12": "2gdMfq7WQXQWmM474TjJc6TrurfWgtHPECwm4wFSp1zoLBvurBgCchbxik4WhVhbeCbc6t3Ao8aRhpGZfTgRkARx",
  "key13": "4iMZK6V7oFewq3BAGWugrJyn8SZKoRa71tRHVqiQy6jZF26TE3LTxv4pmTDwjfqP1opbVWZyN87Sc3arcFfP5fHt",
  "key14": "3Qat92eCEpmDqZpyxaFh7SJ6YdWKyzJ3MK436rMAmBv5kvZ1ayJz4pcPN6R1cXunCBUopkuqmujczVqGkikcR4La",
  "key15": "jUJweTj2M4Y1GBCbVpz8vvpgLqWngSfWbTVuVrhpH541eYB4rUYvciJFoHzHuakXHFvCcaeV2YDG6TndMb6M3m9",
  "key16": "5qwAN1TyGD85jw9BYujzzLUu6hM7Mn2PEwN8noYQ3T25CSYT6ErX7Zw7Cm1b8Vamjv6644DtjtcNp2KVAEfV4hUs",
  "key17": "8x6xiAkChJYws9YiUms2MmZ1kP1oWPuv6frv3FnBy4QnwK3Kg1znaMQdtwcGAogQ3Wd4dpEGwezUcNXJBrkqJuz",
  "key18": "2xEza5bmzYospq9gV5N3a2LcRJUzbU2EnQhf1ePPovKUihV3hdgkAnY9x1Lu5KNaW7Hix9QYEGKKV1vRutzTYmHv",
  "key19": "5f85c2qQzjjaiFCTBSVCSTbZQrZjc11BKpaUk6MBc1cjwnUQFLaeLX2u1hqdvnKAe52i7CVZrHG8xBGPz3YUfjcf",
  "key20": "3f8vgwnL6FQt6bDAJ1TTYCpWNoXY1qy7xJjHY4J9LT3JTSLmXuPrU93BRRSCfrWEGj38ShrfgipKyccLd5U5uD2Y",
  "key21": "5ixZJxe7RQG4g89SfNCZyS2egYRnjrqhn87J65pB1ta3trkMRFashZcKhH2wcrFFgbSCCpcFX5BVoTnxzogm1gXS",
  "key22": "huaZ1cs77tZtZsRfZozYeDmZmYMFrbSNdrKvWHWSKVByeRwpnZrSiDBAkEKjir1tRgBhotuKg2e4aVnWRdA6rzd",
  "key23": "35wmZDo7uNbLECjzkmuP3wsJEFQaF4uDMt5B4gKEyREyAMeEjFqT5PRKVkVP6N9FTfZabyV6vtk1V5UDDaUfm42k",
  "key24": "PK3YEqL9Hn9M6K78sm5wCdGbuJg84B5VwPpfCTWRTaUKMNiusjboDzHNTDKr97mtoNzHHACz7HCDu7w6HGKmHaz",
  "key25": "2PhkZ1W6ntMjs3momsfhePDxyyxG2BNFrsJ6zKaiNWJP3PCNEj1i3KSSRmkxUibUL3qPEYdJZ2hKjBt1HdpD9d2z",
  "key26": "64Tf2zEkUbfaErni4MNbbBvPU3SsH994Nrgqitqp95GKUTNzqEaj5Ekb96xTxiGUgCC2aAsaYNzpF9FZ1YouJSBJ",
  "key27": "51XoAPyMrvKErLyKvvxMMW86um543NoDnwb8gM6dqBsinCPUPkccEVCneQ7VUt4qeuwiQMvCootPRP8wzV64wodB",
  "key28": "2LeuatouWcQNXKeQ5qmZc3TtmdZJdmdRvnk7Sx8aidcYUy4dpDmgQ5M19dbwBgJLCHgijfbQRYHqskkbNLMtnd2z",
  "key29": "FJGr9U5C8iv9Ro8yxJeWdC1XdtH9kbpG4LTTtd3cwXUBmNkQUCDrSaRRki9gKfS71CUTKhKy1Lfrg9CaoRdvRaQ",
  "key30": "2YRuuXRP8vV2PMhq1hqyquHZbDEXHsw8e9QaonTkmUgRTU8qfZW3sGLyVVkVpMq3RqGCMND3RknqJfRGDxhS6EiY",
  "key31": "4WziDE9qwYYFNv9zBVtTHwKczqirvbo8zmMqpoUCpsn3kD1SYd69vfYkHF8KGCGG2RQkjojERDtuE37SNe1LA7by",
  "key32": "2fGBPzcu8BXSYPhZT43L9hE6Fh7rFGJu4jSnsKfUGD7jLJKhDqQ4qzGsqq4pmAWzDmyd5ajNgp2cqrNBfnasm5ow",
  "key33": "3C39CFZB8TGHnnDaMsSwoAbC7P9RQAbY8N3tyJLeL33VYrS3qZBVz2ETf45SXUXtPREeFFhh55rZC2MF6LyMVZkf",
  "key34": "4SX4g1Xw6pTaAHVJnHpFnLqmoa6YBRfewMtCJzjB1YsWfsh5pvhBh2Xpq6XciPyUPmNbpoJgeFHGDzbSrpR8H8iu",
  "key35": "4uSe7rDmbHbRqoePb8rM8zD2dLEEhwxnNpcY8uNFszSw32qgdWaVymjm9MW3znxHqvZ3bsEffYnhDQPy4RN4ceRj",
  "key36": "sPCdKyHxdfsbFUzQ2yxdpkv1xSyAdpnPVyyVrmesRQuyeYf5oZgdQaG5SAACk1iPe4p4zA5aTUkc97eKYeqsvgr",
  "key37": "2LgAFF8CdbBuG2WK83bCEiJiTxKBkMbrqoAbtsTtaaR7VKsDKtrish9fPTcjrwfHSpajMfpdWyjYDZhZMaqafFHv"
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
