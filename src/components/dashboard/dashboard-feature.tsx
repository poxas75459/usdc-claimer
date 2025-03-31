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
    "594Qttsj4dkXoHrugUmqcqBtnstJTpCcfu3oB7rCEEUZ3cRxyaCPtZhCoJq59NyVt7gV3mrAyEp5DPiBAPmd6b5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kuJdd6uBmPL6LtPPJuAaJG7G8gejQgXdx3jia15seqaD3TGeqewpZNkJuFGkiNY4AuHFsWdy4t3WZYGExdgAjpo",
  "key1": "5zw8sAMcHgjDH4pAg39aonYtRDuepaftRsANb814yP7PSC1ANudLsTswvbhrLF7rKWSzLhhdAUFBjKpjgBMquNGu",
  "key2": "5mGvb3XsTXALi57wPnCznuLwevBpK1rGYXuNPPC7UA2K9VVCtb975Kkgmb4Z64iAZAHSghKbfGe8hyXDWeX3Jr45",
  "key3": "SQfC6PTY71u5w7S1GjHhuvzXtTfzaMpFkNx9DV1a3CHUPTtbgHCutgBBiLewz5XC9d4BBgRC7EVC1pCNByANh4s",
  "key4": "2TWFVBfVBy7DZtKZznuaVu9AaVZF6SMYrqKqJvoQ2aXkwFTNucMmnxFbPQ2fgKJjw2E3dGHVfXv5HEkBGv3Fq2Mv",
  "key5": "3UeVPG7GpRq2CqUkqeuPdFdQRFwVdBS7E8Gt1yUdEeKyPBub8tp1RfEpKdvhyeX8SCF54QcqT3Q13DR8JoJKPJ7o",
  "key6": "3YSQTc9zG7Ts4kYgxTonj7EViPu12PRHT7AG22kQTEoWCWbmaDxqrrWKj8tuRdSyGtifcHK2CGbF9iatRaxEwY4n",
  "key7": "5veR2FgkaqRBmghSpRawkMXx2i4q9x1yyf5uhfHNXdL5C18vi6nvj3w7Da3rPjxDuDrAjJRdRmuVd2zykf3x9Gp2",
  "key8": "2HKyKW666XBG8sRKtsaBhHCF87votEY6X9fyUpVKKS4XwrGCf58ohxCtdbpwBnhcsjZZg2Pjy7V7P73TFxbCd5no",
  "key9": "n9oEVBEGdx2fjr1bdr7axoswu88hGsDfcT47o1H9VLiQ5kKroDLnDjBX2swVk1BZhtSbfrnTi1Z67xy3gVvJ98L",
  "key10": "3fjYwyhaQjytmopwbwVRNMT1NqZ4BLCJrZ8WpkavpTyt6A4scvtd9R4UndMb8U8qV62X5XdAgUTLAovXi2MfZmc3",
  "key11": "3VUyaEFoS2yb7qinGjgH9SXCpGmZWknfinyxUddNw5e5A9WM1pVJYQuZ2kEBdLiQK3K4X2cBJa5uPkXh9bYxwSRD",
  "key12": "58kdzmg4g7JVz1nVa2tgLtE2EodDe8KHyKmgsCZPh3vjLcMzbmPN94K4iERNu692FDd2kvGfb1mebW5RJKUKu7tH",
  "key13": "2hFhx3jzPmr3wRHLiHiR5HPWb5UNUTZQjujNtHULoNNAALtnieNZCiB7sgTRK5CJEsDc3uJPXWuWsVDoAKT2CDB8",
  "key14": "3KYr7Yn8FkmS4fSpnM65AogUcRd6v3Z5iqpQ4T8qKL245azYJy1SBocsVfArmMTduKFxiqadjKfBQTgjCBxabfuc",
  "key15": "4ebcUnB3mgVLUukw2CjWFhQD6G1B2GD1eQxwWdDM9nz6DBC8FRvvZzAGPe2yZ6MfDFuLmhKAASeqx4p3wDJRfMR9",
  "key16": "4VLRG1nkogSdcbBwKkDk3Ls7K5coLmeJuRRkx8h7G9XCC8KJJRMWPsR5Pnaa4NZ7CyHkcFj4MftS3Nzu2251dm1Y",
  "key17": "5BoftoWiuqMXTMMU9X48AAQrDTMPzEdaPLg4tXh6RJQDkTnFFJcsqCLRcvjae3YwAVxUoPsDd9o1whakcDhna67g",
  "key18": "2xSiXECbp2h5xhiQY8gtbQsUkmpM6xvXYkGRyznXPHEpZxbkncKFCF7vBZr7gqTuVUWYTUrhjCD3pKabrMTgeTfG",
  "key19": "4V84PVQ1GS67qsCQb2f526EFtUTsKhGPy5DCq7ezHVJ5dX5wmidMQwNKnCJyLANAh1svyHKFi1ihNssUzetV2MpS",
  "key20": "3jTExbeqV6fPTy3TtU2sYpVkht1nDWCv6VQX8k9ZAe8BgDKzwh7W6NJtSjGLQPgmkdSTMQxQ8rQswY9byg3yhSj9",
  "key21": "2Cu2eYRXXps2tiDawvnVYsv692RxeUMCkzrQPQZdVBDbt1aVaJFTN6Jzvkvv6p2xFGoumqNQJT3QeNqRiG1TszWn",
  "key22": "4cLb1tEzc5a2TteAhdRhcDnYunfEs92ik1i7K91G58TRipXmxBjsUyr5cF96QtfrUCGopgqyL8Qtq7JjM4nGMdqd",
  "key23": "5CvzNZWF8TBPTy7DQaY2RVQZgCvchhE1K7Xg3yqbZ9XvHXwZ1JvVFiCs3XJeDm2MSEYbs8gVx5okgv6dw8qeoCYu",
  "key24": "4wdRi1oPFk4umfhdgayUsUFjhHprq4imieNTrS5hav6tWybzQidvVKRLb3JeeFkMoT5xPni6qtZrX4vQCK22b7CE"
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
