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
    "5D21qQpS5DPxPgxFM6K3X9tdHgNjUs37gHUgUroRiM3gLGUN5CzCbfzharsW5gE9gLeFLnbP3Rq9nU8kA9Wa1siu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UmvoDYD6VgH85m76yLqxKvo6HNeJnfdmunZLuEggQhZwFckpMpX5oN42F69P9Y4Czi2pqAQ3zD8Pj55pm93s2A4",
  "key1": "KpEp3oaGPTKJW5rDqjrimaQ9J4Cij9ZHhdJZdvEwMiiv5nJa895h4PcCgpwRcQdHUBAGvrw4ei7LUwKznej8aL3",
  "key2": "WzPhhfHYh6Zr3MDW7jHeQGDLnLYxhQkTdFbHLihYb31wgzZTTS8n6v843rsLYgkWpoXAWCVPGUyD2Zk8Hq96ic3",
  "key3": "5LiqePBs5xbj4BskPG6JaPfGX1VdgZdLYRxetsqR88kX8a6iRkKHjTD9efsuhUhMG7BjDYcMtEFV7G18XhFmhT95",
  "key4": "Zahne327EjMuoTcgiT2cVQNVFdjVhL886npHybTNVsnZf9qtjSxCDnw221bZv4ZuticazB6aD7seMsiqAzHQ7oW",
  "key5": "49bdZzcH6jkF4uQeufoBXKdsk4oSfSr7iZdTjinCvU2RhZpFV8CHZN6wrqxPexEZc3YMe9tyYaRvqzangE5CnhTt",
  "key6": "3433eR4azyAieoRbEdd4EQZ9kfErBfAy5kbVHiEEaids7D3dcmQ7GoTRny9LqoEStWJrmXUFzaEbNot1vNAqqRoo",
  "key7": "3rSUJQCDNcEDz8zLKiosjAmvGqM8iwB9AM7u1zMwi2b6fWLmwiub2Si7K5FxCHNLUkwbRL39fWLt8Arb3ZfCepPD",
  "key8": "3rdQ3DEQ7irStQNedZE6g3WSPxUrAnmTG8LBYeHQNvWCuprftoHk1rLv2bpjDv8U1LyfLfihwEwiQLphCEXxM4GL",
  "key9": "4CpZAMSVzxo3dUHNBFGmh448oJqpvhfCbrC1iJpimxFQPTS2FWTG5jUpVqUHrEXkkJNixbpKctC28Pz1WowPKStW",
  "key10": "5nCA1Q7cB5MRDKrLeK7x6KLxyn4i1ZWEVsRxAvkxVJSn1EdiisjJ16xpJPYFF5ajQYdEu4VnaDUuPZLv6drUgv6",
  "key11": "61zxdYHSgAzDTGAh6n7v8iqLoKyEi5utwGvSM4vuGi34dRLpw2AP9oDY2KKCpcMR15AtdxzHbph3ajVAyJiUNYzr",
  "key12": "2Vfzi9zwJfpeKgUv1FdbyQ4KGiEAwMpjJZ3k6T1Tinoh6PBa76Js66DTSSZuSmG6e4yfScU1wHAko4oQQFbtJWvJ",
  "key13": "6mHR4fz2gRJct9TY8mGNvLuUMFsuWWfvFZ8UdyyXXPTWLb1GmrZ3xftDsVqQWDycB9BkmtkGYcyb2w4wJ2b2Kcs",
  "key14": "uhFeyMNrXLTVwu8FYGgRDrH64t6hx4bmDvwcsWq2NYTHPFtMufbp5JYTkL2dG5RwN68bVMb45Wg85KrjMH4SCVH",
  "key15": "fB53ZkJ2FknW6wW8DVGSk9se1Tim1YBmnkhfT2WLXstxeYnf9AWvJxUUf6FtpGVhtsYe4rYJN6sc6ZbPAsehYcL",
  "key16": "2sMZ1CDxY1LYpDYc7WBBn4uZLLSDEyn1fWH6tUyBAksBqX13PdMEAqbr4h3h9qeWimNKos5hYGbUCpYsmJsT8nq5",
  "key17": "4EhWSCkyDGxG3tUEZighk71sgsBfqXXqybXaUGQ57JgEG7Bsqq6oA1GKfcjKETc78dcYfFetAdNeaQAuVUq1KDSx",
  "key18": "5oZ96QAkQmtupHWQ2i4gZtx9nCcDYr9fuAwYgmqrFfdyyoQrQbcXMawsPudNpm2t6JKZYuY5XsLUhYWf1EoJPpiz",
  "key19": "9Hbs9DufPyot5btQ6dW9BcFziErWvmQo59JVnX7tUYtc6YYeYd9WMxzxr15CHXFNKDcqjs6MLzdZ2ecFnYYhs6R",
  "key20": "4CfXws3stfXCLRrTCHBtYfzLwBvmoM7F6HwM7ATHZa2BnDPEvXnmU6HuCLh3p5ZQMcf5uoZsuQ8PYnopva8T11MH",
  "key21": "2Y7c2pBZ5Z6ma2Fc42FcL9BHYB7rZKj1mDFPTRYhqzDPWA4iuHEzZ7WNqsqkuSU82CJiugV5tXCJrZUPXSi8Bi9v",
  "key22": "4MmJ7AmfAqwx6ZcQmYyLHfAqoXkyDWbtNRhnEpMKyyJJyE9T8Z2jniufAGjmpHamrLFnZypuoSWRVUnjAngXQdur",
  "key23": "53NLqJqGCBi72b1byowsv4KWyJKgx1EubdCqdwHx7YZa58n9HzVaNooJXf4YuLdW59ekmom8xpx95dcqTPHPevLW",
  "key24": "5aFkDmbrMytBuoBnQFu378KX9VBFeknNxVnQs35H4tswS2QbCBDe5SN8xVaLBLFAa17JX1kiVkAhsoDLFHxhfwY8",
  "key25": "4ue1yvmGkTJjV37Cp7eyTQNe3Kd2CMjeLoD18aH8HR3MftnPdWTPbaW76jYtuGV2Kd5ASzz2Cv5m4bm2oyWsrzpg",
  "key26": "tSBrTJaQYSacQAY3jTjtonw25biVwzpuaTYZWH2LTNvYjYDpKDrWncKUb1Tn8PfMkxy2FXbA91WxDNbz2ViNBJ9",
  "key27": "5rD1CxFoxwZngfCL2RHnUzJhMBDTHjQfAkx4Q6JuPBPV4y8bNEL57BZjV4PET8PFRnq5SPAuhrx4Ck1U8aKBKx5T",
  "key28": "4jV5dZWr7AVeShMHEw2eFqEcWTfBioQTZ8NqaK2K3B8u62bwEQ9NbGgkigT3bUnUHcHMAPkCGqYzMMs7cMCQCikL",
  "key29": "TgwiTD4ChkZw9yAjGjsggzNMVRoGd2RWDhPau74JVUJeBQDqG8pDBxQfPj6uX8sVSbZMq1qKfzuJUFY3PbStnXh",
  "key30": "3zAjZaNVmnGd23nhJu9i8VHtnccfWQNbajKzsmXpB2zGJoYdD52RMwrdcyq4zrCVa1WUfJUFD3XFQM6UVuiceS22",
  "key31": "HRtBJGa9ZM4PQj7Avg7QqfTbdV7aYCZscMohtvzGW4qaHuWB1hWwnew3VDgSozD2hrQzEfoYiEnfMHmv2cQCmYA",
  "key32": "nMEuU5LAtsCxXsv6hHZVorW1FxF5fmpniXseyo3GS7NEYkCv8X2CKgSV5w8DM7e6KQCfM65A4ZC5944CXPQn2s1",
  "key33": "3iugKoUF8PmtuSpemxgZJSTTvy7zG4zREFBcY3wC6wN4tytxhbFWtDXPtgBT5A5M9UAph8xoU8A5zyvCq2man8P6",
  "key34": "44TJGh6xPoAt2UUKEc2BFnQ6acnLSfQwvUqUjqq1RJ7UfrGcJBpH22Tpne2BHLdTx8kwSjkaXNh55PcgDVM4MCaK",
  "key35": "3xr3qnvayZuyGwytvqzLVrh7w7mhnEQcnwzk86RzLTn9cyYpXQ81D8WhEn68iSsubdPXfXUmenq3Bdy5r7zy3ktN",
  "key36": "5Yp2d6xWWhX2avefP6JdUx6LTt6isZZsSRbo413MdzFN6SkApaw63BXqiV8AHpWFNsSn6nbPEdheFH43kBCi9Mtk",
  "key37": "5TXmJAeYJTt9xj8QNSmnU9Ah9c8k83yLbTzQsaShKk5dTrcTDtbLSJPYx3ZXB4gf8VXanFajx4ssZXXc2ii6Utx3",
  "key38": "64urfLvtKx5mhwYf773Zr4PKHw2EYYNFu6L5gZuk4UadWjwreYRtrgLZ9kAPJaPAxwVMPQfoAj5vJEa7K5C6ksa7",
  "key39": "2RGZXuVeiXTMwEhiTTDHbERef9Jrf5roeNwm4x2nggNq4W99j5ZezAzDnZVXQ7AZMf8iSY2ijMDC6h1jaRXiGXGp",
  "key40": "2e12j1WRSWTBAdyuNWrWvCKCJheyixDuzzqDJRUaNZDDhwb8DHPSQrNNxUapt4GGDw4Z4N4FbE47gyKXbrshm5JZ",
  "key41": "4uj2L4c7nU6UNiTdeMRadyvGnHxManTGx6dbggUnmHoZoT1KRATyvKFyxqS18gd2pA22dVv9BkxM8XmNFd5BQH59",
  "key42": "ybGnYRM6xuLttCUvV9S9whBDR9Qpwia5bCtzCxvd67SQiRARFz2KMWN5S8hpo6ZLx59Xaq3akkFM4xSQYaHvnew",
  "key43": "5gQqv6yKBnxzfsyqzFHxHsroT8x95P7P4Dq6kTiTzwYH2t1Woseuirc9WYmu4QxaM5G9PLdrhS5W4vEfeWggwxom",
  "key44": "3mkbg8pJfGbzQreY78c4ZgwBUznp7iSqcefAKW1wdfuHBoGYZqSgRfHftCoR6MeftA4vDRdLMBWBw2G5uuamm32c",
  "key45": "2fkQ31aDLiq3zh21FiBNSNm2E3tjF3kq9cfnupCtxM2g5rDfY8i5yd415uwQcmrbhvabo7jU5yoD9H7Kmx6cPa99",
  "key46": "46T7UiM2W4c55mDSd2a1M613giTcPPZLAv6K4hzAvUyvbDqZ2q1hiyU2DmMppegoy8rC9ShsdGiCJ3May8mhMcph",
  "key47": "3pxYzCV6pL1Xea9dyPyLjwXxtfjF6TKupRMWrptB1P1qZHzeUfYpUpHACckF1xZmNaxzTxumpD1wAWkKZoHZtT4C",
  "key48": "4ZHbjJcH4KADtZM4CXZrnGhVWRYCvyYc6GP4RQGRa8gyytCCSWBNRXLNJsTEYUC2DnAicamsyHKnP1BhKebp5Ypq"
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
