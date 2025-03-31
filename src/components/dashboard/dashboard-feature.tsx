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
    "4B7B4FWznCsm8e1XfWxzfNPT1krY4WxnDswJMhoEG5GDw77hetthteJayL9V9165azLHTXuDH9EaUw4HUGBvkL1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YmuFY3UNuigCfmXW7QL95d64qHoCVaTGBUoinstaS65fCKqubbGgcCkA5bk5SGkH2Nanwa2kg1q53uyJ3ZaAzJ6",
  "key1": "5XvfgEezGdTxJdLYv2eyfysk9swujeWpEFwfuGQgnCYi2eacoz2H2r9ELbAeYd8abGxLRhjieTdtfS6QoBe5GmYu",
  "key2": "C29KiJ8wfJjmxbJvWr4oXC2FgBFmDd3fjV8a41cyWG8DnDefSA1PZGuUB5hdaKhNy8SjXbvgqeCEBdFfF2JAG4N",
  "key3": "bhM4QqaPxpBseHCyG5nMPzjFeovomsocMLUyBAdFfw15B1jpbdsvXgCPoc2251Yo2y9asEKbt432GiYvVtTg1Y5",
  "key4": "2XdQuPXXTCrNReQ3ssArd2L9SjGA2v9qEbtDWrwM25iC7oMyhbeyexggmaL4xgpjPtXhkvmcUsxDYT2ndGrpdbSc",
  "key5": "JRQWYGBmo5ZxFESmLq9AsmZLHFsmP6se9x93tcNhghvp2DoY4eH2CRuLyzxJBuYJn1YZjM6HrVkJfj2kTkSdo8M",
  "key6": "Utnx8fBAbxC4vwV5BfwX1hvJM4xHcVSMrv6owUCN1xsk6xEHwvuuHbwTyRsMT3UbkSGEAUf1dgQPUv5S3onmTgM",
  "key7": "3cGNUaZe2TVSHhbgX9JYNku6pa4LWYcv3oRmKnWhJQDaLAUpfqbPPcJruiTyzafv1Btt1v48zDtFWJXmkAPWCfaD",
  "key8": "2Nn5Ep4vy45KZ5GNxvU7k53DVZ1uxwdhPZTXiPCNrWjoKS7kySm5gSRBGyRzDGFYyoNgGwWHuAUjrr2G6FdpJBoQ",
  "key9": "2NDs3rxPYfGW1cDTtNrugP7vanZbi48Nwknwjdu2BKjo3jZG3ndowkLPx2AiZt6brAgFp8uZMpUvdcKiqTWzEnoA",
  "key10": "2ittqHFQQYdaTtrHPk1GDiqtmuYM5C8pzZpcNi2cLEPqGtoCdLNayUvk4jrKUY7ZorVfWSTDGcUtfE6ZWtVYufWB",
  "key11": "2ktbJgftEdXxumxi3tAFL9Jh8h5xWHK4g5pERxTPxXj746DcoumYpfF4YvRxzBE66m7kcjhXCFA4EZZ3sCNGHYAz",
  "key12": "32jZrvpcSyaa5Upxv3CZjfCzKzLd9ikAwx2idWvk6Zso3QNevPVmMuhsd3LYXKnPKLD4VYZPoofDzr2D4jtJG5fb",
  "key13": "WggEDYEqmy5z6KPMBCt3A4njiDT7FEYwHKGwuffdXSBraeCSqg7EgZGxZAVLbuc1BXs3o1aWpvz2hWdLQwzPw9e",
  "key14": "2Utsh3piHwc9ZNRMCpSHguLNoWyULJwQ77E7xqBPW8u11T5kD7Q8Y2DfnnNoisZbyxLtKf7UdfeMP4o2N3quwXVG",
  "key15": "yGUjeHwqzDwuXU2tj8ZzMDVGB8Lo1KoY9AgbTs7rBdwFoCmoqiMRVFe8VczQ3zMznTeJ5m33Ans3rsWu1ii8VSH",
  "key16": "4NSAdmQcNHzJj7dH5Wh6uvU1fKJ8Lr4CPquiy2Z6vLJ2FwiPnRPzV7x2r5P7D5iZoLRpkLc7q5sgMsAGYTmFMjy1",
  "key17": "xpD6Z4S3rt8trdVauXnR71RsKKShG7hj5hu8z4V285bTa6xMUHhURp1SFfBYVWbnZdRsvnUV8aoAF8jyzA4phT3",
  "key18": "42cfEVpSciHXCdksFALQE1ZPvWkqjnqua9cQ74YPuuococeXBu4DYBNULdJaw8c141SnPZzgWB6Fnzgpvu93G7kP",
  "key19": "3NS8yoSHofqDmf7Zcer66j2iErrxBmHmmQ7D6Lj8VV6GfDgw4TWxYVvGpMWCQCA9oPfhgAmTaCfNLLFB2LX7na4z",
  "key20": "4cUhoiQ84c1buZhTq7gukaStZUHVLaMcqMDqseP9yGe2F4ovDSo2UVG3pUicMmqkMRXK2XuqyZpApSKEgzodpfU3",
  "key21": "3CEzMWoc4eguYh2Kfqxfkn5b7wrAF6yPFH6Wjt7uBLWa7w3i6m1Z8bEACb6Wya1mT8AvXB5hrKdAZRrNggJoSWHt",
  "key22": "41YfQrQvfyc3yK8Xnsv3R2JwE1hrsAu2d3UaA8EnJVLrBRHBfzBxgbY7tzJw8EHCEmt2RK3zwkohunT56oDxnVTc",
  "key23": "RwRg7ihUKE7kKpB8cw5SauCG5EP58S8Ajn6PadKZm3cJL3EkoeeU4BYA568CfZpcJvrLGcZKxHduLqbW55zfrHk",
  "key24": "354Yfp92nVxNQoRM72kVjBNqjQ9ng74PVZ1KYYwa8xD5LUqBiEyqkSgQpwt3jVFA1rqouaR8z6EK9dZ763P5PVkT",
  "key25": "2tspsZYYAGBj8zY1u8ds8hQKeJe3D9Cm4as6qVwNRts4xZH5kdtTfKhEChvkjHWyqPcWjrAjdZ8sSMJVSkdUwWqV",
  "key26": "2yYKcw1vgpEEMxkQaN9DoZTQRcYSNCA4XPRmdzUZYydCA8nMwSC42LBbUg5it8AeJHqroQZRLsdR5Dh9mqvteytM",
  "key27": "5zxRWEMk6jQLtn2vpuhs1hzmGhQimVKMDX1XNReyr5FKHdBZh5heAAG2ds6wfnnunsJ7vtpQ5RMfS4NMt9m43pRv",
  "key28": "5GEQ9XXXxhEtN6SQZ6zTcUDvh6pR6ZQEu1CaNSVymNzQsDEauvhSAw4rfSryJ6vHHd1s3ore5ufJ4G9t7zw1S16S",
  "key29": "3Y51AUbLf2jJgovsbLfe3QXk82jjBcbRhN6w9SQreijQipmf685kv3Eeb1TF8J7XHFT5rBPeif2K9y9TiLyMh9qY",
  "key30": "299tFaWJf9Rz8B5ygj44pDTwAvyw3nDUs7zCcKAXnEzoWL7kr7ayENkwngNVVXSJePKK4KBBQDM5JT2KoU9idPL9",
  "key31": "3rWkSPb82EbHedwWP6dRy6soS6gGr6VMhS4Yq1WfLZZJoy8nPvZaQU1jqKSxecfWVJjVdQvYLnHQ33MDs4oNkByK",
  "key32": "E6JAXb84ewps2j382JnAEeRBzd8xR6d1bNrc7oirJyqbp4WKWt3txuPqagUnVQM7WDEfe95zizBMkGXSmnbUieG",
  "key33": "2tSYvPpqGutsErQCGwpyYY7MQTHmKfhjJvym6ZNrXirT3213gpn2FhsbwyCgtrmeNycp7zqxqLJu1FMgzzUEn35Q",
  "key34": "67LJ5vsVHQdzYZExWYLw7epzivGZcvvzykpRQ3q62zRpuCn5jyebvjXrgZH2SbvQeXn6p1B96vtV4TxbHsRR3uiS",
  "key35": "5s9DWdcVri13osSducR5aiFFajv34h5ihxN7cKofNQ5FKQWE1FJmqkj9WJEsimhMefb6YQX11aNvZTK7GoxZPSZf",
  "key36": "3i1TdHaRn8pyKT9Myhgx5D12iywqVD9V1MUqg9ZaPjWYSh4gLeVxctGeM2XPzj8MicBdpPeUg61mPuCjYQ12Czu",
  "key37": "2NUVhCFbCqMXh6KKJ5NHNL7hzVoC8L6nS8cJUmAbBXjGhEKqkxafR3fKc6pw6m2effy3Uy8VdN2c4RhLXeXU3W99",
  "key38": "4kDkvRuDVagkAYuXbFj5JnWXMgaQZhD1u6BM7CdvU6HdjdVkprZ9cL3S29z4kRBbL5E9dnYTWg68A2jaGG7skHDN"
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
