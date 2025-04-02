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
    "3KJZTyiS9FCQEHSbbyGGWb5GRwsph2nK4kWznE7s5oGKSxYDtTcnrEobwvXaCFbizva2ZxKb79nYdmhQjGF54RJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66LiotspzSjE4iWngyyW2Zjvb3v5hUMBZx8jVEsNA9SxNNJwCxBDN6e1TeEPNXHNzhh9NuvuAgJV1su1mk4MNixr",
  "key1": "5GUNN2j4VHQ824XTq24TPJycNfocQ3ZZyqMFiHtEUqw3uUdkSb9ARdPoaiiRAguq6Ms7irFfEXF31trzYNcFikEJ",
  "key2": "63jd7y4hpAYNKy3izGpRwDXUJoTEbnW9QH1c4tAWEQEDLk3UUy1FBETbPT4rBbHpnJ9YTX2rmXa4CqmwaRfZd4VQ",
  "key3": "kchsyQYZAzKLJbLtMmE7xHLmkRRj5ESAW4dPzpjUsJmNGWrviN2czrvDD9dXiXxiGHG4HnDcZuSsukWPgWDotMn",
  "key4": "4wwxVKf9HPQzfuBsdXDa2u7fyyxzMdtk3RLjpZAbZHELW2hzuVDmSwh5cM2SFFNah2GGJ2hMmm8NANH5CDWs46yz",
  "key5": "5oiRuCwAs2cNHFq4RMwwXHM2D4bM65XdgzC4k6g2qRa2vsKiFesSeDKyrA9Vm8demTN5xwNjKrxdypgkzBCvBTpy",
  "key6": "4yRfnZ6mfKfqnPTpdJwaUzMsHwYyg4LYkMeEMbhSWa4TuxWitAuX28opRujoY2HMdEZT3EVJwWVFRwLPjLqhRkT5",
  "key7": "4NKTKYRaiEavEN97K4JMbwahd7eVa1rp4ZStXkNZZFVLgrP2Pq3EN6NrNde6mLgzNvfeJ3XBoMwqrvDpNhUMdSMy",
  "key8": "5xhxGzkZpM1s2JHGCviNdffeMEEFGiGYN9CSZBduTwvnFvRKYWJijGnTd4UQKZLPG8qbaGGiYTdwRdZBUuqqr2gY",
  "key9": "4kcd9pGHirvS1rFopyzXJxZMdcJ5RYfPwdSicjkJtXJNUa47RQQDoAcB8MhQpf3hbs7qAwXq4WDD8BhjSeA9TCTo",
  "key10": "5XzyahuWsXC3BxWx87Sqwkp38jxK3yHYNFmSyPUSARBCKb8x7gBx1XVsnbfYGk3pcjxNR9q2JJ2LsFjg4K29w5oQ",
  "key11": "2CiXBCNsEtAVVUirBBBG5AiWqyuW6SXDgfyC9hkrym5z4u37bfn3VuMFpv1vnSehZpywQmGq7pupoPqwd3P6E4Vh",
  "key12": "2xhu7b4ecTqSX9bbgJneBopdRnbUkWc6ncVvRv4UQfUbGnkjjLbfEo48t26fweUuzqT5XbJxGkydd7V3cxpVEWqs",
  "key13": "2VfF3vnx8Uha4ZoPkiiP5E4S67xjWusVYZGcxFyehzSTRsyd7cKA3x2Bn555UjwXSYrH4EyT9LcyHL7NHtSZCdHE",
  "key14": "3JhNmdmEvxMpAzDw6tTq1DU4diGiwWcz3qt8yKQ7d6Kkpg45E7yT3yDC2mb78todSmsLtBvUzHYiS4bWVM8fP4xC",
  "key15": "xt62z2L3U27nSsKNaGvDSKBnJvZscphY63H6BfhQuQQjAsSRz2X3yFtH79GgzMhsFPEixTSP1q6ugHLyajRzLiu",
  "key16": "s7KZwQY8y2gyBvEoUJ6m51iJzKJKsp4Uzyspiz77WHkUf3DSa6UboVskcC5GzQ2JZtzDBn6UUaMf7QAYnm69P2A",
  "key17": "4bPZCzo5HkAn2o48tjduyArcG8kJfBCSEmK8KnQM8FhaTvRhQoVaXjoa23KYvcCppqDDPvKzraBeZxmmNSoBtsVC",
  "key18": "4wwHDe3zGfvXoLWtMpBU4RNNoSEs7e8pUMvhpTi9SqPDGStAJdupNf6dGr24ZRwCsxMA8gtgBtajgG9UtvKmnNN9",
  "key19": "26rd4ZiMS8kKQ9J6Mz9SqzyYR2Ct6WHLsRmjhV4dkx7oEQt8pWMbzSDD47v1Qrpsx6HhF1wyFGjYv9aNcAMSrrXB",
  "key20": "5Hu7aziARURpWzec32bRqLPrpRvkM6nGhTEvrkaDmnXotMKUCHE4pHTmCMtq7LihtvE42szTCxoCQxvGHkUXCAnY",
  "key21": "dZ9qBdpFATY8A7kDD1ofaNXsL91jTED2sZnmESBPup7ywXphAWbF8zTjMnMBsyYQrb41eVRWkgBaiBH8tCvfPbN",
  "key22": "2YBh3BhikUUFx4TNdxmU9tDxiFrjzNv8HxN45g4uJcPoDu2TFeswCqLV7p9DPyEVJn4tUK3154iowhihWdAeJBNT",
  "key23": "4aaSxn467h5ZUH2KnKJsuGL95rAs6fN38e8qUoLXo6Y1VdZ9bS2PqeRJUNjfMYkh5GrDq5tHtZTPTnm89e1mUpu7",
  "key24": "BXEuKLyeT8XwjivYwpsXMGMu1YgiA2jEJAwiyMJcYAcTVa4bYPzrseTksc7LugSGQVXYgNUY6tWiyQvxiZ5Qjys",
  "key25": "2DW1m6pHUumif8HeRm7znPro8fx5eeWkjqRKKP7ACCFwmzgx7bzAHTuDDfRKwrwhgN1p4vYWoyEKFNdVWnpWYkkc",
  "key26": "53it7r9x5tVgwaNPHKbvhTFMnWgpJKjb7wHYngFvax83FxNcJCjpTPVPDafnfaHgoMQJ6o27L3x87mFK3iaSn5mC",
  "key27": "2h7PVHd36yG9uh1JuxoXpTFM95VZXXwNaNkTVwojpGJvR3fhRcNdwxnnuNQY3LQABB9iPVUvjkxt2qohjDFyE3aW",
  "key28": "5r5cpwRTLHNP2Q2yoyFiDzogAtAGySRAuKDFJFdet8N3yExoDLDp8jHFFmqEMqVuakAxYqqcSdnBrHpLEXe88WN",
  "key29": "VMTZxaRfZgTkVLDZzmDBnkvnbyMtLSamPEr3KKGEuvNBEXNV55Lu9Pzx6PirSfoT7iAu13zvJkNRyeapcuaE9aQ",
  "key30": "WTxmcGbEReJZfBhhQhYs5akN7G8nWTbibFsUgnXYZVjp4JkBZ2cXSLnsf2mVkivnwoUyv8obScAj4pnpFnSdxXL",
  "key31": "2wK1y1omioKekjLD8yve6ftE9YCtFxGeKF4kZKbhmnZeE5fjsxydtjvasfWkTVXuriuSixkoX6nqrxfDb8o6WswS",
  "key32": "5Hyq2UE9BoGg6xyTQ3ZdWPX71vozU354No7foJYnsknu1ARpNz4PXJ3iS3XCPKEqKbJRcQCcW9WXPMjTCZhASkAr",
  "key33": "27xgQxBF5zjdcbvDm7r3HimEiBs1miggFRuC6X9T6xatZeyYA9gZgsr3Z6GhBkxzd853dTTfmSZjRW5i4n9W29w9",
  "key34": "2i8D5mCwRqHC3udtJ9xhE9NXFjZLhsbtTc4RWA6habLCoEKPAgxERK5fD1G93x5sa1wP5ozcu1PUffLNiQbWfPsW",
  "key35": "4UC5aHTZmkPiBnZgjWDowqsLDzuzFjsP4x9FvAKLyFEZMtvStpJ5n564xZLDHViA7p8BbwhLvE52PhUMkizHQqRD",
  "key36": "5seRzg2iWJQxed1FFeoKxExmgKjVM98WbhFdLe8o8Ja7MVneVmJwoLXhvWs7GqG6cXh3FhwUnDYbPaiXyLczb3d4",
  "key37": "4vKAW5dLMaPD6N8RNsRXYEUvRXbL9FKamXBfghRTbjSrkD3LCmV256r44PHRE8BMVivKNqZtMWeEyAYh4ntDzaMK",
  "key38": "24M4rzcCWrPPnT5ocy5i7s3zx162K3UbzcEXZYEeEHGVLBte4mnWUdMeS3UEagKZ2JAcTmQ5v8xGtxSBXRQoqJKt",
  "key39": "3KWDSr7Ssji5dGhyCyY4QaexntqisVN2ovxBwBmqyXgxgBMLZQKLotSiRwr5mn5DckC3Vuw7rnWFX4cWMfn7aMob",
  "key40": "bMpQ1rX7FvbKLXhzeibUgoLe8nV9PeeoSZiW4sE7rXgpSSxnudzEXjtFYTREy4cRDuPSiF1idKqkwjinhVKTrWy",
  "key41": "5KeKqwDw9KgiXV8gMgKAiEJ1F8sGxHz7JHgyNUtLDgoeEVB3MJ4Gd7qieUzDstrJPgcmK5b6J8cSvrNB4s2S8Dux",
  "key42": "vs9CPMRSimAqzfFCS4w2TrAMEZoAdmg4oh7ev8wi5adeq3rnRmWvqixn1zcDUz3oMHXeRbedTfGfrKA8c55Udcj",
  "key43": "3FkoWDf4ReZQpeLHzTVJEfJjBWQS2R9Hg16WUYTAYVAdz95ztxnK3W95Adv4MsyBA72DpdvdaWqvfuGsf9bNfLAp"
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
