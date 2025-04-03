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
    "3LJkVNGmcSGGkFDKwZVBZpZ2C84jv6u6pV7MdvrFfrWdPSWmnK9ro31dwQE9oAUgjgU1o861ppR9sab2VFD17FY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24tfsSd3RBNc88obZ9cUDo9xuN8W767Y8gRG5MmNQmgCfQwgtaDKmyP8SDpUqkD4X4Dyy3XhBM7dqjk8sauXsPFg",
  "key1": "5bfafcCjSCZdwpSc4n3GfPnPPj2DXr9rRjQNnnHLo7v6VgbZfhL4VjshoS7fDfenk8EGUQmEWGgHra4t3UCQMtCP",
  "key2": "wM5yN8B69cXK45itEp4EXq8iWDMfKiSbFW6iqWC41zrGaB1AQWx71G7F3yxTfX5T4EuRPfHbirypfyjXAM1F3mx",
  "key3": "5vZWS9pEem1txf25AG57Hg8uJ94YhjdRu8tkn3AafyUL97nQZPjGCCHzvAZNL9kz6Wfk8oDdfsd1xqurR8K9ScMX",
  "key4": "5N7WDVhC9QB2CpzNWj8nFChw64uQVygpLzWgvkxSM2z6XShcq95z6iXZ46rmNvaC88u2Wy43NuuKauy4gXogipBA",
  "key5": "4KnSigmSoSTzHeM9JjZFb1q9565GRDeAVKBvbvrYMSREGY4QnwmeDipfZG72XbDdNRu81YSn8tKz5So2Pxy9cK5j",
  "key6": "2RrUAEkaRcciGjqkLz5SaLLAYTLFWohqcQdBEKGeHXysiAcmC6Q9oMkvRMTxoXY9saaTiFQA3QTF24CYr8iTk8w5",
  "key7": "2Cj2E73SamtvdwGGA9m2mcHTBJGTvGy91jKTqPZ7mZkn9ahpL9ZFX1WUmZPxkioxvCqyB2SqVoaNVV78AXbywae5",
  "key8": "3ev1deudVsNCx24V9tfZsUarSXZbpCriMPse6NYBdxtdPhZYU6fPX4fzgtbX7CrpkpZmPJT46d3wWs22QH5cXjL1",
  "key9": "2dfJ8j2UNvRRZCHzvtX7hEfhy2rHmcfPnBnp7ixuHgmMiTcqceZrZb4zbjMtDii94Aooczzkgx7GYqoMEY9bGsZD",
  "key10": "5sZGQZVj9PtuC6yYTiGmpHRWiK1g2bagPfFiju6PvaudKiD7p1a2kgRHhd3TiaxV85aizasfodGtmQVuKqef87aa",
  "key11": "2eZYhASbhEUT6j3TaHtE1RzGr9SQXZnAURBm8QMXsboFPaCeMSkxf1BswtxWaEuTAhxfMF5dC9WXfmxXdh7DAuz3",
  "key12": "25dUMEC9rm7ThdA8CV5SfEyBk8tz8VKLW3JKUBAWSwte9PCPPoN2DBJ8uy6EWxG334gnT9Z7tX9FebgdB4pmyKPK",
  "key13": "6782mHvyt7vxDD4BZWhAeNRjWGpGXRREbRrbWZMtXBBo4EpEwZHod36einPvZoP4HBJYm3nuE7S2f71L16vkWfyi",
  "key14": "5KWyLW1T5M18vWye1frtGiszKx5kNknteSSuVyyTTHPfiJbgLNshe7wZqzjx2xMhuoXEcu87D1sDAFsgrCKnthCB",
  "key15": "Wqp1Tv6TmAG7H6Jm3AUrNAkjVcfr3yt4KgJWNBjmUPg7zn3wgcJntagJs8bViqRAa4e3xZsgz4RAPHUth9DQSR5",
  "key16": "5SKqL5YrP2W1hVkyPvABG5LMtoNhNCKjjQsjpjaXBAmkwtzEQxghyd9DQ4h9Qbr8Pe6MPBMHkdE7wuwZYr5sFS87",
  "key17": "QfF8nPw3C7KnY8s27SHG9wPfdyNuC4wZS5gEFbTi6aT2FEkpgFe43AAT21p7VveLp6nbt9FibgGkr1KC7CSc1ZH",
  "key18": "3g7yyqS12P4e4mFUm9MAw5jJkT4xsSnp9u5ZqspaCnyZ7SSjand4eEvbH3ijzVH6UCY4Gewq8pM14W7w2fhtGVzp",
  "key19": "4TMJqsyy59WY9oP1nR7GRJZTbovRPoCgTYmLx3byLFxTmVyY9aZnJ7c3TUGNCddW3Re94QALQL9nBSKE6JorkbWe",
  "key20": "HVDXHdSFCnFShotbZiPq8XLPKHqtYEeqTE9T2J2Gjah2Dc6iP14CP99JchvqjF3omoq3AvXRXnZgTY8a7Ji3YiM",
  "key21": "2SjhjCqPmhfvsN1X2ChZpVFXfirVnpVX5pVsF9MwWZZDXcML3uQATSEptLMVBWpKv8ZcW7Wh9Nm6CJ9WH4GgpBSu",
  "key22": "2wZVaFPesppTAMsfX3R2N74htk9AVBYaSCgsydYSo9jbQPVTCqeLcHp1E5ABKcqJiXhioNrsbpbUXq8kbgWgdVr3",
  "key23": "3qV5GBn2L3cZjoqjEk7AEwnz2ykASTaBd2giirMg5SscqhZApguqSfkwwwJqisZ25k19sRHoKLeVwfHd9TqdnvGS",
  "key24": "4xfKJZfsfRZZamUAbzVecaUBfmdQ6zFxzLwVG8PfeA8weyeabwkrtpGw3EVFTG7bdXfwQtJqjqL1NSnHYetLx2uo",
  "key25": "D5YYHqw8sKqDLmSxgGT61ycJsebKQfvrDvmwGRkmgSPeGiLRSAjEZwp2x1NBdgT5iNtLji2AS9PsUxEHrKL8z3v",
  "key26": "9yCxGKBkXjAQcsvJuCfYnyFPo1qFJHPzctr18LvijoQLaLtbc5D6tGLVRYbSSDMbvq9MjR9PjWDtABPH6nDVBeJ",
  "key27": "2BKPiSEMC3HpVebkEttmEKdJLzpUkUNhd3paK1Yc7XnAuTr6N7f1J1V2VH2H6Z5o9ecpyxfaX3VwcMcrrozNA9Tt",
  "key28": "3hz8SzvKwMyWJbT7M8Z1k48a5R538xg15rxEV1dNg5C8JH7qYfub9f9sW3hU86mqr4YoTif1ca1x4Fgug6ENHQYa",
  "key29": "3j3YvfiXZQyBBCf6Wd3AevW6npufs3Ytjx5A8XwN8pJqyYu7W9G64dPc9rG9pP3zqGJvQSkkWHNVHpcy21ddSjTj",
  "key30": "2LL5mbYha5wvxn7sn7UJn2sZGGxLcqPZC1Do9v1e1gLHcJ5hTDTR6rRBVYVPXnbeWwm2XKu4JPa6yCfKn5V2V4D9",
  "key31": "4hWHB36KdwA65firPViUTGn4NWv7B8hP79zj6F38WMoLcqkMQ9HCujXDVtugB78gB3SZDYYvq1xdDnbERRB6FBax",
  "key32": "2HyHt7NTNi6RvuMcWfnsmxPjTySjSWjgQKVQZxqUW6VbFnL9DDZfrjhDaTaMnvhpjG5y4tfMe3Cmd4RF5QcuAjxJ",
  "key33": "ZggmrYm91k5ZgshXFTVFNhS4m662w6jLeuFxzA7aGYd54ZHwrmtY3nSZZU1Y1ivDWp1DrHkWF23xm4aPVhU2r8T",
  "key34": "3vN8NUZFGdr47fkyrp2FqxeW6ZZH2pz1BDVY8vroE6SGZs3WEJcimTdG6k35LNidDmFL4PpNMA1LwTMquqGWXdRj",
  "key35": "2YDv9E5xAYiT3uktDM3ERKVMvELaW7XQnGjBTpxL11EJr42ByCrb4owHvzT2amYUhhmnjam5CEhkzqeHg7UHdha7"
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
