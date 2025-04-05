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
    "5HRdunc2cXh2cCrf3QKPaJJ15TvNjgkGwn1GeLjhuoUyMkJpDJHJTcDHEXmNZjEF4egoMAKEWrBKNhQ8Ai4f6WBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XAqmEDRivHofWEiCoiMd46CbYkMifPwWQRGXEqqhw77w79tg1L72HERXKu33vJtMGqieBDqDCpHHz21bmpxu637",
  "key1": "2qp6FqzPaNQd55Y9ZYSQF32Sh7ZbJFTqHh54zjzA4WS2RJQuX6QmSDMgKtSNenyQ3XLuHfwkJQjYi9Gmb2eQvEq",
  "key2": "2GBCHHnDGcFBgpWiemxYh3GWbZcUtP94N2QovtWKgkY6c4vtxjx2YTdgw2CLbcWhkjUrK2jrZcMiHaRw4ZUUNcKM",
  "key3": "4X8uYSHVC6SsuuoqtjJTkC8wLbqH78669vWWLhk6uC14ocFaYqo1EdxxQ5nwUbqna8zpxBKbyv8YLnaETSoNd5VX",
  "key4": "3GxSsUhKoBvSwXFG4MuhSCr37Hdyv9xc1cDaamR6yhFKeWuxrVcrpYTV9nn8hn1GmB83g4gB5HZMB4vh8GyQ8bV8",
  "key5": "5d7NQZgnLHm9JDmucZCLXXnvmxeNf98Hid5TfQY4bjKPyMFqvXU3CQDJJChKoZhnp8PyxgMVnuy52yX2V9o8YYqW",
  "key6": "sjdGr9z3CAQT2H1Ee4sC4uhQ4R568p9enBKvNRPuLZXF66HJptffWALCRVEVR7fedAzMb39RZoBEDbfUGpG1GZo",
  "key7": "4ovjWhw1MKHe9kqxhnaGLW9867zCfDQvCAYmtn4qGXNc2gfLZ3GrCvTRDoGJ5F4i7cDKm4Gni8pSxVudeKWfqWVN",
  "key8": "48aeir3kdtz2qLHQjgfnkzp9pnvfc8Eq9STKbh2hUT8R9tfdyvWGMaT8moKB6VxBak4F4fJJM6u4Cav64HLCPujJ",
  "key9": "3Tye7CQaEKdFWoTT2D5PHxLvtSf2KF1Wq3fnxL3qRJJ6N3H4hPgXB6SLowfLzgcmgWFRdwJ3wYXady1o8XULAg59",
  "key10": "2CUai8ekKM6qw5qwr4fBSPvRFu76TP8mSs7p89kszFbaaBsTKA69kcSCHg6hR7MQMXgbUC2zQkcCyNFZeY4xjGpd",
  "key11": "4xQb9KRy5mhbHNek56xxEzxmE4L6MMHpHSXY5Jv1jReUmmZxfi1EAxTnrzfxjoKsH9D6rvqFB4SyErYGU7m46vMt",
  "key12": "3HT85TzdQdZVMfnoMv2L2vRUU2sr1RQtRp1eQEYPQ68perazHFGqKjR3S6QbFjK838WTaBZv9sYLxFemggRVQ3Je",
  "key13": "41ygf7BbviGV436jbA7P7TEUzGoj1X5P7BJwT9rTEnZ58QofsQKmMCRRxWyZVjzF7LX3rVZkkYvLKKpdMqUrJuCJ",
  "key14": "56HL484mtTMmTvGsWeLmkFEX12hKvUhBvEq1oHk7SC1oPpDsv1NFReftJdUNDzPKbXnbSDuh7RZ8kAkThXA3MEtX",
  "key15": "36QbaRNquU4y4Zx8F456gniAoaYj7t2sRp4UofP9pokBBXFAJ6LEVijqQRpshjhXNGQY5LdBMRVEpuoavJVwNDgM",
  "key16": "AyvuDaqeigH3UfgSPaJF2AsvSUvQRWJo3dJpRAgELJHJQtinCwdwLTYMyHixBQNUFSdfAzKfbJBshY5qoUCUrwb",
  "key17": "4WP6zpMoXJ6FgPoW8v2Gqj8kK5NubhBFrXKPd3w3r7oih17PAjYpwqhGMAGuiP89WEgx8KGfD8UP7WfSGq8dLQqr",
  "key18": "5dF6nZBG8mVvLudMVKpqmxB4sMtuESEGuW1syYr4c6vHz2NYuAR5nJrSX3RkPV1aixx52U2hEW9gSMq8G92c1LFC",
  "key19": "4AzFrZaiWzVq4wn9bpNr8bHNqLnhb8kDnsNKgne1mXpseoZXevvnRK9CvKFH3ibiPnQLaP7opaNkzNzUKYHzSwnK",
  "key20": "21qFVMujYw16eTk5gezJwQSf94j9JyoHknNDHtF8qnjTo5h1NkGJ3TduAjidCRA4AXtHTaFsnBFBD8QdfUVmTscT",
  "key21": "2VtZCx88N6h18241XJjnDvp3Nhyp2EfR2dp3cvWZRijaKV1coohJP8n9h4gHVM2M6FYydWTxVweSimYJbPRdAq4J",
  "key22": "3NKhygui6HaUWJq5TFU5Bpyq13TiVQFV9ZHYJMWnJLerau8Gd8eqj9TXMvvAVw2ddV7i6vPadjNS7dUEu83BtdR5",
  "key23": "5G1XfhJfQrGpQNafJUYqHKxh7mEzbhUnyy1ZN5yyoJhhE5zHura2DukQTS8ga3iia4Wyk5Qsov6Kb34mzLqzDwpP",
  "key24": "2mgahikvWhbQLYPd6GUtmXEBxhAk8BzMN1MrKJX2xC8Q7Tc8bWZKu9jLM7E5Msaxx8EvVEjpCFDjAw3WBaGSL4Eb",
  "key25": "2gYJoxxaUQ36gBDZZhLsMYaKMwUyFXSLq2SpsR5sW4nhiB1XsrgemMbRPiVRGAmdbcszLnoQFf9dSgUGTaxN3gKt",
  "key26": "4Zycf5VMDjgVN75M7LLh6ARVNVF7wysVc4bNHbAr2zrTVfTaNyFuGPJpCMXKz8nXnVjr1ewiXeQvJvLWWr6BMfBF",
  "key27": "3MiyQbF7HaoyjKV8R88HjE31r4oAkLWicup9sY8dvX3h4GdmkLGQA1K6bBLsdE6fv1oVJtLnUKAt3LqXr2T2usVd",
  "key28": "41pTPnp5DNbk34pam1XR5WvpQZokZHFy8LUpDRVZfLmNjKNiVvjDBvqAUfmGYj9v13E5HmWpNfzB9yaNZyetCnkp",
  "key29": "54yT5ZQXKsW8FrHADmXNgkDe7GAdYNa8ts3pQ521hyLiyCK53eQoone1E8h975eCzpEafzHVm17dnGN9mr9VWz5g",
  "key30": "4jwJ4NFX4RBHkhUyRuPRGM4x516GCikF2xLqfJR76S8SBo5WHgwmuYPUBFvmxo9Z1PduLnCfaoHPwR9qVoJvxSKj",
  "key31": "kf7o11keeXVC7iF1vCHdUuJrsXgT8nt8W6uXWSCtsuPiVM6XvptKv4h2bubg2WfqpfK3vnw3fDjLA7u5wxDKF4U",
  "key32": "b9zajQudqzHx8reRyMjmMCvHRT84oWW8eBeCNYZmLWiwKcbxrm8fXBYawrmrLZXnq3fMoSsDftKXYYEtBapgvUE",
  "key33": "3iKoPR4uZenqFs3p2wLoLsiPgqfw37Gf5pe5zdZ6zD6h2bk2HMLbpFgNhjvA6eos9pSVMTuR94DB3DRWcMBjT7mW",
  "key34": "58N1SB4BnQEfzG4Jzz6rog4RfQH6V2Sxs9CTPT61WpgVxY7xMvU1B3wbvZNxwrwtHXYWoUZ5TYe6Ls7EVTgvutJ1"
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
