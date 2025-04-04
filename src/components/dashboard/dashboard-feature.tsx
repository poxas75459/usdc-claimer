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
    "359w4rtLSoCdj14xmesuLs8y4ik7kugYgcrXRXQncJxVi9aQtN1FPTsHBGRPEdnL7e7EtwXFgnb6C9DMjvwpw7qH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RU4xxU6oXWTrVfsLQjJzUwmadLqzb449pUwuMm2RvgLCwpy4VN8ffogCuGcTKcTFpyyG2xbtNh9J7qKjkgD7hBf",
  "key1": "4wu7Yo8L5u9YtEsmcFdcA61RpaAGgZVrVrv2F7JXc2i3Bp8myPVhXCCbtz3y5W6vGtQuVoBJXWzMVDZVVt97fctC",
  "key2": "2NUzdWQWZFSg5DshtvCpcLEaW8fJnb3YoQxnEV6iV8zqZCh5htzTW59LDKjPxAM8p1YpWtCFJWcBNAyHS8NzwC1o",
  "key3": "62ScpaYqCduD5oRzjtTtV1DSpsYN14JG2JygjdNf9gMzYsMfJhSzNX5daCkjQwufadihMGsqGJ5nqFyq62a1gzWQ",
  "key4": "2CREDgh9Pp54MMgZeS7v1AZzA1USU6GTFgcgjCNWKaygEUipxaA4fGkceAPTVxWeTA1ySfPkUAuhVvc744ubt1Wv",
  "key5": "8b1GJmdmegvFh3VRtJCYKcSAjUvmrM8m4aoPtY1WJfAXhmUjeJBL7141TSU6iy1hsnULip6x2wjfGmDeaQNQNeh",
  "key6": "2C1KLWiwkQj5Wug6CztAQEcmsWr62uw9j9mqanriv62PTrRN6atsfBuWTXjxk1QeXfqmzpFQJykwF4vJtLYBm6zN",
  "key7": "5stxKk8ybRsDHanDkKgT8Xpdd1U4dKvbwzUNzSboMXmEjXdVE6y9gzF4Bt5WSu5vqrXgVvaRX1J2QUg1eCFSLZFs",
  "key8": "aoFQLwMvHkhCsYs9b2MuqQ1Paxme554pBDEqh9XVAFNpwYmgpwrhD1zwmXgK56myDFJB3iEBi8T3zCqPKGbeb8D",
  "key9": "5mxsNDUgpanjYdtEXF3EkZ9YNfqq6pjGdkaMkwwYwm2xjawwMQQBZAwTiB8PJiAg2RhY48t5eZs4FZEFgiSLEaMZ",
  "key10": "2QXizRMLtfatah4R3He8cffmQeuPpyHuV7vASS2bg1DExd35YnjUpavD5a2DfPWkCd2ZgKGCJx4vQGExS3zWwses",
  "key11": "3Ai6X64ZU2hD8H4EnZiQ2x22abY75bZGUi25jT9Tpv16FmSP95sG8XxfnYq81WwEQSXJmC6tcPguSQS6gsZePmrL",
  "key12": "5BHKbGCgAFXYTCAu1r2qYXGRyXSJyNUZNDzN1cegH2HXiGSacdwPhrTY5nNsWHFaKTiBLU8Hs3jHHEW9tbpBcGnZ",
  "key13": "4Aa9dBvCamYmHTPdCCQBf4iPcSByCDsBhoxsyTcwSTN9r44voxKka57g9oZCofBXkWv8f64YvMKCNdNYnFfzUWnT",
  "key14": "4e767XwqCWgnLtskKxWPVyXNPgPLqHcH9maLi3gEydPpYJnYnjrguMBv5R3smcnLDhJ7E3923iHpuujR6NpvxhtJ",
  "key15": "3LczXtH5YPiV2SceGCaojfCaBuTsAJ4Pg1R4UZHcStcvfKfq9rnd7bjV8G4N3oE4pnrSDR3N527vvSui9dgGm81S",
  "key16": "3FC4GERbEfGnFpBocxvjttqktfmyeuWUXmH8uKRpg6rWcQHUAqbNEZqfpUPiepckyow4uTRxrwDM1xVaJMi5eAVQ",
  "key17": "zEVG5MwVjRA6wSjB9GGPHFzN8YmSbfYpWQcvFvJqdTFpLeMY9hnrx7NvfTtjVhJY5NjU8KvzSk59f5VvVaYc2FM",
  "key18": "5HuuiRry1ZkQ99g8gvbv8FjErvDYKrNpWYvvnYCbx1pRu7dY159nBNhDMhsYBrFDJiGiGQtijtBRThnsR9C9LjeP",
  "key19": "sEjU6LQyaeaSANS11CVxAy1eRTDk23bBuizyyocAEDVKCmDkz5S9v1wADjrnENJod8r3Ch19uCv2weeWCpQZZxX",
  "key20": "5TmoMxbifDss1WEJw5kW1yu93ypvVuqx4LB3H4EmjLRQh3ZP9DQTEDiuTaupZAEUUCWN5J3EnkAovJedavVmYj3W",
  "key21": "4RjdaFa8Nz6T81tAWKD9zqiEN7ZdWoP7Kx1kzG5TPTt53GVEJBs8hTrd8nhk2CHfBe3AA21C2shgieTXhazMLbi6",
  "key22": "3W4StFKmYjwZfmMZjJaYNo7CMLUZ8r1eku7zvk1c2h58YvuGxQC18K35sHw517SkniXSDAfvNnx2ouHoMRDdQSyL",
  "key23": "2t39jcT7aJg3CMy7cokFiZR3KXwLYvaccRGxUWEMknmWiY9qD2yjjeve62ZKh9LCUYpCepTu1599VngE6T23S1pK",
  "key24": "3a5WG7jJWUjwPrEkP5fhvRr1JVRbtGHQNvdnc7uNMDJ4wE8859ZThT1okhczxqwN56tfAncr9tam8qAyz18TJE89",
  "key25": "5EHoHBakrmG3KbJdWn4domfiNihwyxFWJyir7wAkfuYPPB42nkQy1G31e4sfRBMq2Ucer75YDCqktjKpaCVnx3S2",
  "key26": "4zLXN8WAL3j83mdikw1wi2CD37ZneMjPFiv2n917JGZcYwikranXyMzv4bKJJEV57vXAz15ebgf8MN6C21h91hfe",
  "key27": "33vfpXCtgY2h7U4Jyjb1c1U3LH27cVjR5Nhjd3S44ijev78Q25rc6A8eJqTumTR6bamFJsQVuNQUhbqWSCHXuoxk",
  "key28": "3XhKtdiNfAVzPj8rJegJ1HRPy6qFK4ypqGuG7GGpCMnohWjTkPnpyNNf7nkKnoL29jMQiukQw6xHA8kboSZkJ3uF",
  "key29": "5LEa3zx8rg88YagbCVAXE1cXJXN232wPJ7MtL2WDQm7Vhnw63dmZrVxXEjqAuLCVcUxUiw8B8A97cMryKs6TVtvK",
  "key30": "4CSQzrSgkYejyHZLRgdSbgq8WodtYYRfresc1Yvr1ABR7cbEntohy6GoJ4Jdt6ZnNTpQUaeeqrXQfdt7kny4sCCS",
  "key31": "5N9FG72dGdthyh6Tio5JmoaWpSQjuTGhEWiZqjVbfy2E7fAU7ffq2bSAWvJHZy27wpGndfvsToPQdQZmQyYdA8qv",
  "key32": "S4vBsYEyhhLHrHhHGRJfsCnBxHvgiY2fV1oYhDCpXCJXtjto57Di1wc6jm3Yx4VWcyY9RtpCcoNzahms2KDQn98",
  "key33": "s4UqcQjHE86RfXw3Jbd5eiG2zsSmzqjGxTf7HwcxLQNrx6y99nuL1UZ26R1qqp4e4FXmWU2k1ETEPyLPVSbCfxG",
  "key34": "iprHbUzRjmqAWMrRVMByfJFGsovfBFKRpwfitGRBZEReCC1yJ7jUfFVwvT9abkrELFNwAggJBfeWJPhjYQw8Z3d",
  "key35": "5hmwC7DxRbTZz6JZkiJxbQG1pEssp3yTeWPZWgCBSc2VatJBJVPcxYS7UB6j9ddM4ctJ4QvC3mdapwUtgsNNwhuG",
  "key36": "zJtKJseHmpbWdCNCeeAtzH6jhyjBYNqWkY5YSrQJqP4fT672xwrV8WV7qyCqVhVMvDhJp8zs8y26eHRDf7SRcGo",
  "key37": "8TrPV7QTHrQsfRMntTNT5iKBK5CuCuyW62tKDHRaJChByJL3mfim2AaDZkyfLhKHbt2NbPAThsHmncm7LjSewHB",
  "key38": "NtHPFtb9mFKk6D2vR1PRH9GWUh46K2Et16H9ywCd53woj7Vw21bqwbmT1B6mHBP8anN5aU33Hyh6veNoJYbMD89",
  "key39": "e5fqTKVQUQJqeDBGFmgmm3aFuMW4Y2BqJHzw4U7kbG8dT6xhHZsu7u4zvF3TidCKcecQbfZD5GtGBZ9dynZtdDT",
  "key40": "dBTuWYhrv8ctaBsDiFCTfYWEJSzqDECGQzDxJDjEn1EUUS9pEMUqa8SXG3Mqr4qv3zNQHXnUzZSz7UUpNHb5Ydp",
  "key41": "4y6gbVGLWYq4sV8eF3j7zyJM4d3WRuPZsgiHVP29SCYXB6XEA42hJaVqgQfYeBbrLHRwAAQk5BqdYMax4UJURPK3",
  "key42": "41esmjWMxe6WFsZKiLHiiGZEsxUUjsHe6Ge9BEAR2cgtqggFU7Fjioksu72Tw94BzBct93EhXRdNqksXJ2zMWe9t",
  "key43": "3c9KwpfeFPbeqU3vK7a9RHSUvJ2xiCMhquoY14SXA8h9gJ65ZRbAw3xaQ5e7ryhUzfE478Ck6bUGqY1JGUiqxEeQ",
  "key44": "5CS5HZ68RK7Hs2dMJFr8GQ7ZYhJxjE1hQ21iouunYxuDbrHhPF4hNkrLjSYUFEdkkkwSjqvpFXjAiJ8uViUu1duV",
  "key45": "XL8zopukaxM58VpgaCyiruZk6Y2cbwh3erKms459FpTLuzh5KdjzPvhXqnBCs5duuAZKHjFxVyJGtS3HPxxB9UY",
  "key46": "ty8jkmLGcxYrxpD6Xs3ZeQGvkgDe4Tf7o92dKnrhPkS7zrcWRnDqk1Py26oLMLWpjaZxH2qNUeai3LhZ3kLzmdx"
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
