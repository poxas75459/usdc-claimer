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
    "5JBq4LoK5aZec8SFBh2DS51KygVYsDc7x19JycqJqDhMwSixKpfwVdtCZDFWnUTzWokorSTY67KqwNDurAcLof6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q2cCjfAfJY68m3H1mGZqESjhPMMXrQ6N8NC3VKaDK6iXERa2ow3modys3KeYk48Tj6uLrV8FHEjxVC2LNTDhXY6",
  "key1": "4LWDFdEaTFmLrCNymZaQuJhn6tPyR18fxyA7sejwyyy1QdBMh5AkJp9DpNV8c5qTD1VvK892xdC8gvKoBCnwkkbB",
  "key2": "43EWou2wmd3qafVtB791svHuakfh2EaK6RMvedPNgvRUq69MEkdnwEg2xuP5G9dySS7JB68knW39u2WzGsZS6iSU",
  "key3": "5ESgXakKRBgN8ekfPtZYSftKziqyUK9oN4BxviJv23NdgoQbsgQin3mmEFBYUsM75BApUchS8qzqSSrg8Re7wUex",
  "key4": "52qtjtEDgLy2bk84PdfYqwEnM8E3RFgW6B7Gb4tK4N5ADNKMrHzFvN2dCXuMe6QdUku2MvYTr376Lk8iCLKbvT5t",
  "key5": "2h45C65chhKe1n5sgUEUhQUn7nUV43417ji1Gowk7f7MQZ2hCgVXvAsN5M5xG3eRcwwSp7JL4Es1LPHUFxdxqRwc",
  "key6": "5c7mcV2dutLSP9TAW6ANFHayztqmxUfvNruyD9WpDFQHHcfoiDnDGwDh78anc1HZVLm4xJ4WChUxuWu8v5RqAvFV",
  "key7": "5FXt9dYnkE8rvSpEr9Yuz8p5zVTs25vvGF1WX3kMYga5tJg364P6A3roskcdMYQvQcdH74dCwQNeyazxqdnNTpxH",
  "key8": "eykquYVE9KESUXxqEuULmaCM3ztXJyLPkW8ziki4EbpzkSLkv3U9Mu84aTaVsjAXaZRhzSyd8ezZEKc9PZ2YnGQ",
  "key9": "3jZtmghW2ffx3S26dDwk2z6Y6jzdM11BtVxL1LTiQDA4JUzbccphthpB9j31DAUE4vZfvT2oDVqX4cEX9GgZKE8f",
  "key10": "2tWW3RP8zLk6DBEkbio668bFFweeTvcC8zPYmSSrDkvRL7BYrSrJYRsBR9F89mQrekwdiuzfsQUTb1roCS1T6yPp",
  "key11": "3aREfDa5zfvv2quBs2FF6qZ4C42ekUiX2AGmXSJyY9dg9jkJSt6f87q8N4HPV8UpPZVF6hHKTtETaAKesA61TRKV",
  "key12": "sSNDq9LdaSK82ajNiKMQW3NnQq1cTPQVTpZWwGUCG7kFxGrmCk2fLomS66avhDowLtj1NRUHWfmgfT5xsUoPmNP",
  "key13": "2LZraQQrB1VyKjB3uKjrCCTU4PMswm2d2ASYHvNY9LDn6wHRtWEEdoryh1FSBXBdN4Wbo19qLSeHxp3b5WqQzB6z",
  "key14": "4ReNEvApMxd9Vk5Gg5jBHdboZRWhPzfJAcn3Tzdt52gF8Y11WeoQpyeDDH68FynJfS4rGmcYuepDUiarn4N6b6HG",
  "key15": "5Vmnqohp3kBkCjqK7PwwD3qQjFYMifsFaq2Gtzw8WPzTz1hwG7QF55wUApCfSL6SJKdHEwpRZU9AajEBJSUjJUDe",
  "key16": "4VHeW3yM9qmWEyFT3cG1VDnnVQXHZ3Ro2wVfFinGoMTw3LXdQ95iGYM4zJBQNCf8guAbS2fZz1AHWf4vM6rYUkRU",
  "key17": "U9UZ8eGBmmRTPKeq2BDjM5WZ18BR1qeVsAHp5NH4UAbvcFKbCSkJ3fgsVjymCyxK4rWvpDmfDbQPFmx9fvKxEV8",
  "key18": "4BKyQrNP19tZYKVC5YW8SQZLFuWh8hTfuVpLkP9gnYL3UdJVgowbU6p4W9agm8tdvgugZoJ53SY6yz77GCnudgC3",
  "key19": "3au8puWVV4hR7etmf33rDh6pWUMgyuQxrf793XwUUTVaXm3unAxVsSsB2tWH2foxEsutpav7T3S83gWUu55yzECy",
  "key20": "dKj66f7W3X17kjycCoPSHotcTRXC7dd7WacaJ7P2g63jLRfr1Jp13uYYQ2mjXFaRCNjogowQDwj2yVxiK9sieEK",
  "key21": "4yJggTrEMLr3KCzEYDiqEr2ZhEknjCxpBEziEF5354o8hRptBEF587vGKUSGZYdMqvx1tJYCkeqxy6RYxxC3GZhN",
  "key22": "5ry8F4dHDV3n9TrMEn4k65rhoWFP7QdWV98e8SoZ43KuH31Cqyfr2rzxbBhzhjzaiGWTWo5UPJ8VqkhenuA2o9LX",
  "key23": "4jyMfc4P5V5j4hxddNCDVzuv6b6n9ni7CYLL9dQfXEFc5TWdnUVN8hdcnEnF4WtywRsxxozUf7YTfrgQhp8t4k9",
  "key24": "2w2MDqoBpZYbKtjASuJEWHpvoFiz5K32AEiuoQmpR6npNn6yNoEQZpxhUpH2BH5wUXZHVoda7VVn6xUUms72dDGt",
  "key25": "2u9nxTwTZqxhV9C33Zf1jcqAUsDeWHYpUdbBkcTEGbtjseUS2N6FDPQu6regff3CWf5Et1MQRFLLe1d92W6LurCD",
  "key26": "3wxnQuHAkaHaGcuaU2nqCiqpnoM2cWVNYd5nuJnRR7xdbszKjoHitaZ7pWwuyRY6F9uDhL1wiNZfipiUZcREJSio",
  "key27": "56oxRuLDEkRfWPkAyJXhbMPK2hjjrDzGz9zXqhB37Hsu9eHbfwVF5TuVhT5JN5DpuewJZFcgiZEsiXNZfFee8V5w",
  "key28": "2pBMYKbpYh37dwrS4DrhqEvaDPtr5HFNechAqpVMykPFfAP1MeYPXn7dfoFWN3DruUGrpyoQSNR82p7LWvebeg3W",
  "key29": "5qZK2bTv96PngPPXhXvEaP5tfJuaCe7xMMRDBCwi5LJ5RLougckdZS2nFivL5tJd1MYbrEtCKYDCtQNrmmhZdkfr",
  "key30": "5gXz2iVvPWV86njQaM1hRqJNw1M3nj8c13V6Ca7qpros738FCUtraf3CfjkY3TrXd9Yc3pKswVsR7hS4gBvcnXYk",
  "key31": "msDmSegc9AzhNt4sLWz1nPqWxyYrRVxmoLtGRJqz2vqxWDqvntCGkELWmUXnARtskJM4r7T2X1bSNYoPnuJTGyA",
  "key32": "5fUQdydZEch1CQUpNBgjcV8z4RJr8YvzyKyX3vX5iiigNamYwDWtYn4R1P9GxgBZsyRPNXuvYjZMJd5C79AbJhs2",
  "key33": "3FmywhwhMpdz6ak6dS4pBHKMqs7Lm8xW8RJkZS2o2TtcfmnzYfu8zCQ79oNQV6tCF2zEGnys3wVXP8SgYXpsXZBW"
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
