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
    "2Pe6PSmMDkJZW8AtSNiPmxtUMAnDm4vFFrMhxaeC5AzWSn9PKYmQ4xrXP7qgw1Q1PsS2TDeace6dr8USaGmbuaV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26inpUebbkUVFUnLRpQ3UPEQCyFba3hYWTi2XURPUjzdpCLQ3i4XizFxjs7dsRUCjQquTtSc3v5h6Cx85yGFrcCU",
  "key1": "3N7naqinvkNoZ9VgwCeo6mEUv6kryVeDbhgcGurzxExwzbbEZAU35zW5m2qcdLi82oTzsG9JSLrdVbowGMvHor69",
  "key2": "2TUUDCmxFVzEuWvv3a8PSziuicuuRMN5smQvvrVwyX2w8D7MF4n5ekkw85H7X9uTHsZ86Pvdev1jLPcCC1YizSun",
  "key3": "5tRzQzj43kBSeRU3HY4zzGBLYu19rVdYcQ3KaYxbgkFZkNa2D7jxjB5XLWiUztawh6rZBuwS5BfNXPAUnbCcibpU",
  "key4": "57GDbBW17YzbcymC38SueojVFycDLmQsud4Hm1L2vBwoU2jU9LKfjYBfTgJrQX2P5e45BaiwPmtpYKmPBcg2oywB",
  "key5": "5kfkaZkfeV5FxPxjsZFtwTCiLDSSdPVosaFvp2nZkb2294xot3B3DYH7JxcSKndBshh9hBR455ZdonuV4KYCajk9",
  "key6": "8qMWFMvgPidwEge9uNG5acxvwYfynZVHAzM7MSPGqhirCq6N7KPbAuX8ELEvkS2P8QynvGVkoc4tiCgoJU3BBNi",
  "key7": "u7Q6TYWohVWMsfDKvaZrrjSMphuYDkQmc8A8bJYVNYUavomp8sc9XQpmgH3H1qsYj8uz9AfvSf6HuWP3LrBaEJs",
  "key8": "35PNdBcQ5kYC4wYv1w3f7jTQ5uAd7HFSr1pFE2aAqdAuFEshYuZy9Q6ShMDU7JM1kVpQf85VEX5JojywjMWpT9wD",
  "key9": "3G6Y1CeajYvFyYNg39Z8u9uU3Nae4U2USvpdkTq7xymDdesoKZdnri4nEmK5bqjXHQ7Nv74MHPwuRd1NkvHL653K",
  "key10": "4gyVpp6mAN6UFwCWKHoanHndDiu4ZzaLzcvX7n57v5UcPGvLgyopBihhnKgkvZoiPBUhDaRmKihfL57n6LRyrSmq",
  "key11": "2tvLDL9N5oM9kMJ5CA1wAG2bnRuQVvUsMwGDYucwQG2UG1nvJHTXgbb93DxoKaJrjfzZPMcxnJNUxut1CvcJekbG",
  "key12": "UM42rvPRHP9wo4rGcFUotghw2X4VJX934hGgCLTPvrDSbDEnYdY3HA7MwbsSCkPEJtrp98u7BcSf5iSViV5SQKV",
  "key13": "5EZsLW93TfbGj93FvA3i4j1peDDULRJigNbGEQCYPAuU4ViWCyixofoHhij9rHU5r85o3UE5a5oK2dJuQ2TvzQph",
  "key14": "2CCmmVFDF3zzSVtzfTd2W2burDKV6xJY16d5mX3ZDt4ucnWzWk52fGVXyfkPCW91i9madWVi3jgNPvFT4tecTxUh",
  "key15": "3AewWuo8gsXSLeJfNvF6CM4BLugYoafXTmPpxVVi4SQVqNZcemmLYasCr1nJrXfcC6fPVbUrCyganMZKHSu2ggm3",
  "key16": "2oBk8x69qVXf7VQhaTAqRA1ak5Sqwf5vWmoyaojWC9xdB96mFWZTPt6BPyLVm6Zsir3EE1yUNxMZYYC2YBj4xbog",
  "key17": "33HbiuKSgDxPWsVpbpJvKmEgjFnLBtov9oGUKmA8FXxDbyPd6RyfFuG9pkxFy4nrxqixVBTH4e9ZpRcjur7QYvB9",
  "key18": "2dgbmcCBGJpAGkyVQoJzd6eF81TxA359tQ5JpZHau2DdSSjcz9QN4W9LexdJcjTgvBfw1AfkBeqKAqdHLYNni7nt",
  "key19": "RfnjWFGHuHFWYwFSdJhKzezgseVbBfmcj8p7WYH9U7DGmZZUwdvyYro3SnrzM1ThgkCsNtMaLa1hmdvb7pb9xRd",
  "key20": "28rSGRjUixQov9QQn54taKm5F3TaSEeLdgD5ZihJjqQt9KjA158LcTu2k3caa7XSpCV5JewvHp1WqqneWKep2vmQ",
  "key21": "2t5J1a8HAS8cHtWwuCjPgW7Er9413LYa2bPYD9aTL3YYntzbJiVdQRpogHepnq8wnYDWf4cq65u8AdgSkm6izyAC",
  "key22": "2pDiKbnAQMKX7gyPqajYhD8Z4xk8CTqb3sTKtMiVN8k3DFd1jDQGJySeWhbg2RMdRBiyBFhB2EHWGiP8Wzz97iqY",
  "key23": "62fWRbg2mf1VpQQXFGGnhz6tVeCrxNkdxVLf2zxvWTqhbDJ5fqAuNGxFerMmxBK3UE9xXDz7Z9c2NwdkuyMAeEft",
  "key24": "2B4wiqBkJqpD2JdiJsU74FdC5NyU9FJxuZXUK94tfy7KMEZXRH3ejCXdDvx1B7qoDd8if7qsbFEL2SP8qZjZPV2e",
  "key25": "4SLtKuW5ng9EuCDrmzSSjcRJXYJxFfE1JMhi8yJwpH8pWQ9rbQHM4SFBR4G2CLsjzbSHKdkbJgkJb5JDFo7eAoqU",
  "key26": "4eQi7bG2QLJDfYWmXnZ4syDDoDhMdCNdquTVcRo7UnQ7cotEVQ84Bk8M1j7E5mGqU9QHvdsDALyviSb8CwE99BAt",
  "key27": "51mLwAVE7RXvdQFpGjnTaX75iYocqa6CCwxE6LmheNMHjBTKKzh8mxg4TWJhTnd7rXftVtMdPn6bJtLAS7tg3sRk",
  "key28": "JdYpEe7FqbKk9Gqzk2ZNHrT7AbAUxA2Ui18PS8QKMET4CFEcP3aMZitpdLDCaGmX2xGp7n8ogynyaHLPjqnd57K",
  "key29": "4phPcYtyLtUKwGLEHvJJPUeeDitwTCyK73BqjrF9nTqMX1YibT4vXfBAorw9xD48JSE3ducDsbQzZACs9D3mi5C7",
  "key30": "3ULcE18a3NcPcaiX9pUzoXWW2hhAZ5CmVUjmKAdKohpAitnKfmtRQccMueeaJ6Ae3Pir8XJ1rUSXtNMTjov2sD42",
  "key31": "3X4mQgfndX9Aoji4B8ZWFSUFRxohMM1CEUSBxZF5HtTzdJGujP8qFYHbN7d2Uwb4FWYBYSqBeGYSd4cDf298TiZN",
  "key32": "23EA6YsLGgaD7tA9cwQekwutoymnWYe1993UkGcTbXZtTh7xkhZ38CDHrWRQPWpNMmJQpH85ro6g3nPk7FbpFYM9"
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
