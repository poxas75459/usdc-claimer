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
    "4pvQd1WUosGoyFWB9TLoxWeh11pTXMpYT2ZFtmjMSsoyPhD1rzdWGoe3MP6hQFwh9CjBkLAixCJR1XKMUZ8NN1nd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ctFtQGynripTZdcg6yncYT2Po6CUHZzdP544iSX9PtdkwKf4hkUYauo2JytHkSf9mDsbZdvfGYLTrQr27qUFrzC",
  "key1": "3kiD8ryb1g8SjhEkALfs6gMapJxLXyLs1yyNaTgNBxLombNGnQ3Mf4fLHMfA6oPenDhK7xFBGeFY59KQmJWa6Ryn",
  "key2": "4j2MHyEWf16XhSxysHueHfhP53H1fXbfYCqn6CGHcMt58YLDxN6n1VHf8Pu2B1HhmfELXoRpkbryeQqvDQakjEXZ",
  "key3": "4Gb5mAmTvyM8GVGYtWhHncFFn7GPK8zNwrmdPKhg3NY5tg9JFywCrfC4hzGVvcGjAG3m3DXCMgYnxLuabofFUyFt",
  "key4": "5u8Rra4b84w1VBrN3sJA9M1B4j3GmGW86qmz7TSwotVC3rsi2BSWT9NYj2RhZAfZRhWy7X3UUGxET64pRV3qEA8V",
  "key5": "2NMLaEcmJKPeu7Y7JHdEAwnyWt54tjh3QEoERc29etnUkzh8W8nwTjyKfAawupeXSu1E8gccrkrDC6BqnLtAVEN6",
  "key6": "ZEr4D3opKARYJSWxVpEDRKQXbRRdqc3PAWe2VTNMPpWAw7qC7DNruKgvvU9wBS5CfFx1dcvuWuE3QExm38ebm6H",
  "key7": "5BqdrfjuGYWstnn2Dqb2DBeow6CSqxBMJorKptJ6GxrDSqExE1eoYGZj6JR7tcwn9CWEuw3eR8kfgNX3wUDTokZu",
  "key8": "jKDLsKbR3FGf5LsuXTBjyCmadKDUuXg7PSPRsMVaiHQ9iH3Ze8mdYFwZbfdSYkn9dAefmCF3SnpaRfJsdJdER5m",
  "key9": "25NsPmx1XsFK5bEEeX5LFo2da5Rsyzv7vskpJBSvJCr6QWaJMhWufJaStsV8V5pjjrPFTUd8SCc86tfYAh8vXNk7",
  "key10": "5N8Uzz1LpRkLQ6RggJH9vxfDja6NU2dTM3mpcWLd8NFEPSofiXUXSinkZE5nkRQZEyJUtivqGpCVYQf3gJcmuQr6",
  "key11": "3i4NFSXyrL8jQzdhjVvkg7DUhqsrhRemeuofcDVpsawi9r9cb7RAAYgWaz2kArA1PPHpDGLyy8aDeBhcntschiBw",
  "key12": "PVxSkqu6ze7PdDcmJHDBPRWxmThGHkRF6rxkUs2GrfenoFmbPqdMRBKpjjeRkXEPEWizCVnsmYAr2Ps2Mr5Y4G5",
  "key13": "3HqD3187v8H5jWRvW7EKRMsgzUmXW5WrK8Fgde79Lc9q2v3HtFXFVotprZ8WGn2hHvZ5EfTy57pyCgUUqQz67fQF",
  "key14": "4VVqmMo8yQxfKdNDzTNVB6mz2S9Xu1QA7525BpYhPdVpfTzEeqvoi2hEWmyhmy8r5Mz6vy3ajibQjt1DHn2aLH9P",
  "key15": "4qKCoVgJSTfAgsZLiydpwhwCPX9mqeDeAj9UqxkN2bB8RRW6m8E3wSyprKARa9fmLY77ZNdSw7SVJ2UnD1GTwV3p",
  "key16": "23UtS3xZnkGCDofuYqFi84WhYtS1gM13zqDM4jfME4HiBzhPYYrwWFVFiMpKzTav33YG128XooWxRJopZvE7ECva",
  "key17": "MxjsVNhrYrN5YyqmVY1JENt8huhgQXBLAQX1gcB2kjCu6tNWJ3KGUpxw9c3PrYchLVjtnjrXaWUGSqxAFXiUrgs",
  "key18": "3mKe9dG1KqddSgyYjSGqnvTp7c4y6ndV1gs2EtHyW7dZ3f1CwNgCDPLGQzJzbsphLotDZLmuDCYZr7UwB4uWba9r",
  "key19": "xbQTph6DTwLEXt65Y47H4q4QDDUpiRnRgY7qQuvx944NFhUcUu1d8McMbV47ENa1zV7Z6yZfkRZyTtRMQ94pUpo",
  "key20": "3885GNkmgBQKdebK2ZY1pjfS1Q7pAfQRn1GQ3eDUKDFRjzCtsQNmF8SCewbdFh9UU7ZeKTCLTu5pTu1zDDUozcFm",
  "key21": "2SHnVNr2fwxmapp9D7XPJqKvCaJE1Huauqpr8fRXHPUWmko5gp81Q4V8FqzL51XGReucTgKS8e1zXfy2NbW797q4",
  "key22": "5JAVSdSpE6UU926QEXYAXm4ZmZhvqKy6WYQbT6hRSxn3ZjRwQFR7ggjowfk8wziKCQDk8utPs9HcaKzqzKtV36Pr",
  "key23": "2W8UmPKRgsJjktExoPbMdw4FoSRT5FRvgWP2FkfYqshUbXWojhf1yccxPrsYUPkTRdZbyBPhx3JuCXKYSksdQk4J",
  "key24": "3sCa1J1bV7UjZYyGVk9g7rSYZ8CP2vNePybo8m2EtSLht94jGkBPXAZzMvDS7e5XzduDF7cQrengHdqs9XrnKxgh",
  "key25": "4xNdiKrkUyVvAzmo4cw9cjBoUyW9G6t7dWcAhZ8jJ9ts7nbubV9PC7CAreBwBmv3zUwaqHLaYRHddY3qVBdyJiLt",
  "key26": "ymHLsVKBAKvt5othBmpjFY6bq8GApTqhAxML5t4yKxTNhMYMyDCEiahj5NFEdRqv6szqBDajCEK2f6NNMwZJUaP",
  "key27": "3epiBcCR3HtT2PTWugj13yAEskhazCcmJkdn3LnSeLzFqqxhJ3591jgHZbqGusdMKob2oLXk8vJj5d3u1aafxVfT",
  "key28": "2FT66obmyxtghepEFB2jyDDXEQhGHfun7P3BW7Ccwr9Vn7F4wha6pu6NBhRU1Ye79cmFfKFnWfY5xQosTcBuCVVn",
  "key29": "4gMG5ppzwbZzaSy6AsPq9xPjXtcFwYjaB7UiArQzvSCQTi8Sj8GioVU7kxvNnPu2aZgJzLZ26DjRdwK56o9PgrNb",
  "key30": "4npsxMY5WUceFT3tLPt9yUte81CWbgGk8oTQRPh66Enpf3GjzWjFxrSedFpRLZPMYqnQp2qrPG9jHDt6hyUh4h5n",
  "key31": "UcdeEE6t3km6VrrVH1BTtgEMJ9DDumtDyQDLFM83sgc5kWwFMcKW5worZcxGGNCykxonuHKLyN359GkCHYDpJWC",
  "key32": "5oDivDSr8LW5bDj6a3bSHKr46TVEcbwwPuPCPpMUntcjXDZRLhpcoV2c5VxjPFHcZqfaCinbEb1ZLh8yJd8aTX5e",
  "key33": "4XEQ2bonedsXBiD9bxZLAHVKjtbFaCoBnmQcgBH7H54FtVX81tUCb3qiNCU2L7yhSGpgevXFQw6CrK3UFvXmnuWp",
  "key34": "5FkxyFL4hdX6BmrUXW8LmpH1fZ25k8XSneAxKDw6QBp94u6zKLYeemKnup3iY5whdSmsMjcRb5TMjkSUcVT7QQS1",
  "key35": "2jJHkWGUFsWvdb2cbj3WiPXaEKGe5F1tgLYPaSnfCUd1usRcQGxdMr9VqZAkzKtaKiAh567dctDzArZnTb1MC6jY",
  "key36": "2hgvqNosxUvw11fJPr6J2TbeSAK7dcMCzRE4sqCWtZxW1ahHYYs9iATrfjUm1ahgoq55Vz4z9udUHQFJsuYAr27g",
  "key37": "33sHUgqPeNbCt1bKhp69K8UxtMv2KeL5fVEWfQygfXZXV9VsprvMwtvJT3BuhK4rzXM643kyJfd6r7EXhRd1Zb9r",
  "key38": "37LtM9sDT3sHK3rPAX5mR9FYNTuSNqeBisQU2UqPsi7GqZpWMdtmEPTX4UKeAEd8Bg3tgHGbFqiCCYKrmJoogTW5",
  "key39": "2yn5zNGdcH9jvyZJSWwR17F4J7QFrodMbboH4YKS78LHcwDp3YjXc8xmeo1XZ8i7zr3BMXtgvMVsPXhvPXpVhoaw"
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
