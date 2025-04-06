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
    "4Vko6AnuyDongg2LcumtiuATpvpLEg4XY82qgVTjPQqJR7ZmJySVsrRpycQfn3rG1BML2M9w1BayHtrzvphawJQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AWXEVVJZuQ9HLeGtggGmQACTbxhGg9rKCkBeunwYfc5KUQ7vao6mPMGDut8n3F7TuAw6gucfTMbqkvM6dpyApCv",
  "key1": "5KyXwZZvNRmzvvTqpuorZM7DxXsJFZwePBPsmbs9RHUi4TLSsf35nxLDXuVSZYvT8cBM8TpimUwr7p9cjAFyjfVw",
  "key2": "3S3qmjN5hsE7nNHRdgCXHLsaCwPNRG6QaF2YbYG3zX4oysVJ5fJY5D8EsZWy2NSgLBdhKEgUJ8vFYAmGDShLVmdk",
  "key3": "4LBAat1g7k5EFH6VC8GfhxFuwWgv216AUVRVUFNJ8Ne5QRs2EJ6MgUEwdkP3KQn12o5yraF1RvyEVi9uVxwRJ5V9",
  "key4": "2g8RnBttJ1MzKrNXthqRcvM9Jgx93QLEtF5FmdVTHFijEwWH6bu7YBH7M7rnkFHpkUsAop5fzno256aJWNa5w9y5",
  "key5": "3wZrCg8z2otK4T6ArjjMWfhN2H33BdQbXRH9C1c5yYNTgvhTVmtNiYqZtizVjCb1ZH31NGPSQcTK76cJxsAY459J",
  "key6": "2SZNZjvDufx1mbP8MaXfUgi6uB9HkaHPDgyrbsSgQvCYgXruZexjf6cP2crmkP4hiZmc9DN9e64Y3bU4VL6zfyfP",
  "key7": "59QMsLx9RgXBH4cKgnq55TrRbsxReS5qZuTbya3cXr5kSr9uyprS3gvDVM95WRkEm8nGDo3Suwpm8VWyhnX8M3Qn",
  "key8": "3H5fay1tL32mEQMiu9RpAJDhJfhYcC7VuGaVgK6LzzEwhQSwbA5Lk9oGr1Nk5fwJKQdXe6Yxrs8isTWsgCjgykrE",
  "key9": "3ZjcKftxDqVc4C8goSgW3MnYta8chpMKmqniKjBKqTzfzjDSEz28aM2mG13mNJ8rNrsWYpptv2SAnf8hQvBgkP1i",
  "key10": "6729UUTQAXZbN1BR7RTxKiXDRNEXzdkPVJsn5kdDgX6zTa7t497AkKxsNZ5GMSU54JfpzbdVFHr5mXkRkgwSSzMN",
  "key11": "4DjRWvBwEABZ2jUaUD3Jqxh9RXviv3HztqGAoS1562SJEsMphzGoCFySEqmhqeji9GJJ7Zakjv8MnohNoCmMtfYW",
  "key12": "AYRm1p2pTxwGACq33aKHrKvoQRp5Uq6Uqb3csxYx21VBnYsRdxi3HGbVJUCrjTEdFunkpai1a6MbjgVEm8QofWL",
  "key13": "2NNXiUNP1hkJeTQcxdFD6a7UVBAqxa6QFAYWD1bhVGwbxURbswRo4SEXgFH9xsoQb5E8uUgnRQXybubqSWszszMw",
  "key14": "3pbcMhAxbEjPBRLVUF8kiHQeRgd8v9XDDVCS9YWq14MuURksjXDMD9fy8TvQa1jqV91bqRTcPgPhYBu73Dvu6Dat",
  "key15": "321vax7BxUSXgW5Aoif3wGui571UV31HCUmwGraK6Q7V7G1HNyjpsQwL7scoeppdNdkgMoaQdeonKQNNXczQSQQW",
  "key16": "43UTUuCu5mrDMYSZKbjZhQ7BHCK1CXaQW3CA8ZEF8BkSbcpVGgy2CsfH7EmBosuxrH42vUkoYjvQZ5LaCr7XA6Pu",
  "key17": "zEFrPfSiWS5yG7ska7t95wDk8oB63miTB8LKevQx9zU9RoVu7U4apfswM7SWscoQ4Sb5AbQLYJwXS8N7mghYDVt",
  "key18": "5qbgAsVp4aaGZHZHifVUp8w9YgGqsr6ttzCcLVgXBwFVRXf2k9rneqS1AZuCzqZJfc8WFy9wDzVmKAXv8B2sSeyN",
  "key19": "4swpiBMuKyCYUhZ1Sg8k3yoQo3S223mRgYgULbi4L5TYTd2Pondq92BPLJj3KPFm87YcwXvyE5371X2c6XrVPg4u",
  "key20": "53z7sMhNj58HYVSqYP5E5FQ4CaLJXBjwiz3k8YgfrXLGJjGx4thLvtQrAA6MW3TaQxzdEznCoszZZ8evCYXcWknt",
  "key21": "4c1oLNq45NKLeCxB98NbT2QeHehP5tU5qfkUutPJxWDnVdEmjQxiDkNW1zLNHUMByfKmQW3Leyf9wYDLuf7r1kAQ",
  "key22": "5pBgmJevGFtPryq1xLFM71mA6P4BYsRSPjegbX9RQhezkUzGrE9bsQuQ5zPms5WqvbrKxJ7qhRKCofLDsq6Cfdid",
  "key23": "3drC6dXhXKbCXykgzDAzFD2ovEvn3DXKGPbLti2Z24gb5sYm3F65FcRvgqf77GqTGNTvppfDttAfpf3198NqSo7N",
  "key24": "4r4eqCQJqm18qi5giUj9gxfS8GqZPTHJw1MkmEboJ68FSxREuZSGHevrTmYx4fFtH2T6uDdXGPRGrvR5ba53Cph3",
  "key25": "4S8QJQD276qhB3fMk6vSqa2Wu4TnrD2U1GE5F4XgDkwAwQNF3QVLckrk9sazoXD9CUnUeLuJdXKQAoSpUeZyUn6h",
  "key26": "3ZhG7ygVip932v9smx5nEaaW68o7gvghVAY8fjqgcGnsbpurxaB28MA5Rp15PbwfojwbHqqf4GzjHMt6GUZSyf8f",
  "key27": "5gnMDGaV5P7ZpzvrcDWynuStaqYzLZbsEqe6HUKpbhmJxEKzJNtsYZwzDWgxqndbpLKyEZbc2nzGsLBPN3ea6q9S",
  "key28": "2m6XVa4s5rkA43yzCzG8QWyp94r1DvE29tr5SQcQb9VvT9FMRfJye8ecR9wTviVnefbxvxo3aoM7uWiZt8yEuJiN",
  "key29": "2nyoBkuN8JhPbNcPHfbUvepdczBEGzDSCjbQuYeE9hFaDbyagrrPprohwVR6TTqS4QA5CZi8FaVJhZWbEi58UWoz",
  "key30": "tSE138t91eiNV6LPmJC24g1jegsQfBMfJ2HtEBWg2N5PT8WtsH4tvgP4icCF1cd8WUBdVTeJNbqpB7j7rxqm6Q5",
  "key31": "4ee7vHitdaN2ZsqiGYajwLJcirHfJtFZ1fytzpj2wXsNrboC1SMrZvPh3CiL7XT2Fvuo49RuzrRG2RaSyGZSsxLJ",
  "key32": "t9AB7YGmR6FC6WDndSKaeeNRWR5fBuGSKdGsavnSA7p8axUsMyTAmHCfXp3iyaEdq3tVGNdf1BaxbEJhwu8kUjK",
  "key33": "3aZu4hCWjamRzxuJxdg5fNuKdqEnbJWJCMDehdoHBVM4b6EgyYYbhKmFQMLxYLLb1A4ojuptz3zaPTcFmBsHonhn",
  "key34": "2jtbeBRmAp7bqwyyTBVuWBxyWDzQuLzeBwe9m2cfSx9XxxvHLD6YcxPsMkWxorAtxVGmnbcU5bvqNVrKVtaLCLLw",
  "key35": "3c5SfBi9ANbK2MLZNDmkJuhhWwKrq6nNu11vMks7QYedMiZs2pPfz39oTtTjR22aMfRA2E4RHqdmBdaLJM4CSKRb"
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
