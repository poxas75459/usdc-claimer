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
    "2GmsVXJBhuDUe52i2a4vh7ZjjyEkjwM5gWYeJBrw3BssGGcxVNCLkbJPxsqignkrNvxrwBqyqAyKnRdb7ULg87ev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zw9jjLZYxhdUAPz9VdhQuWPgQdg9VrP8AUwoxRCVH8cGULBy4KHbASw6yJnqL4T7pjUzsQdQ5gG8mzDWGPSfQko",
  "key1": "2PHwGrc3V2MtPicp5YPmeeDKkfdVkBJdrqiTXm5o2FA5WYQzKHrMNtSvc8JENJ5ikENqSYF9Yyk7HSkvDKCdao8M",
  "key2": "5rZbKE2Rg7hTq5QYkKGHaZCoiou9CkvE6ZSZXdyVwv6H728E1idsr9JkT5oweb2ToNohnPUaYRngYx2Cu9zHMzBN",
  "key3": "j67UvseRpnPRCNEiGmtY2g3PcGfT4HX42QdmWs53raBcrUwf1YCHLZHm7bEF8gCCn5PZzSmmFKNhc3fsxJQV3tA",
  "key4": "3xWPQtMakHigHkRg9ZaXisry1ZGkGWBXgqNZMB7TkBZYC3QYqN9KEwXNgdbb3YGw198oyg9ak4htqktcHeRcM33K",
  "key5": "3rQCTzg1eZdXZwfps6UjciSrujBvY5joxstCEnQwSLU2jPPscicrptJmKSSpmC9gDEc6FBCCnMzsro5nT9nGb35c",
  "key6": "3smBg5v5D5RfUKueGVLH3M4YEW9vFE8JRwvFfd4tn7TRhvUSJD4wytzrtZo6gyJGLfsMdj6WyFbZmsLLZGA4MmaF",
  "key7": "3YiLzJg9dxEpjNwUnFCeYaR2rNtXrhidTUAuoNaK6yDdNeeiC6tQRiUUh4QGivd4qGmBmR7xtukbctPTKJhDxQZf",
  "key8": "4xPz2Afdq2bqqMywmBhVN7YdZFa4kmhs71eUXWt1jpfZYgGaN3QsxkkVEtXFkAdVxfBXiTM3WidZxvbcMWdu1UdJ",
  "key9": "3pWDH2ndhp4MLNneYQkBXcrDhWhTQXPuf1bHteNMqT6p2WhbpuatsjB5BdFTGW6SxVuKwFATKf4PiQMimK7vCWox",
  "key10": "UiSmdVYYvJwY4HFtPfKBRBQo9ZHopRrXMR25sATKWp5fg4qLgAgL8WpLaJENszP5Ge5kqKAU66T3HSfm7cayM1Y",
  "key11": "65wDADAjL241K7kTugTLihAZ8Nn59Dw2cb4brgfdSaVgzuthkWVWPndk7iTaa79W4geqsUqXVk27ghvHcHaNh5BB",
  "key12": "5bNttgvRPjQpxWMDFGtMuaNJuFk6RgRhgnNt4hzijaLd33eE4eX9XP5ha2RFrkWaFe8r9QNBgEWigWtzGmDefDQw",
  "key13": "2rWFzgWBJQEvnKbGJpHGAqBVdAPuvejGTb5WGx6DM4YvTwyoZcD5drBSHM7nF1bAwyQSeYEYCRj4my29TwRDcLaZ",
  "key14": "2A7Ti1Rg7a3y8WaX7y76uCLMhSCiNE435zud6tKDrQQrfTMxiDrPRiBByRx5Ad3tQYDHQq1BsTrKnFB89oghdpno",
  "key15": "53oDrcYgRZEs2gjpYR32FKKmaozZybBYAuw89icp8QjXm4cZpeSNB1xsRnfcuL8rVtfkDYkiJAbtNwkk2GtDAeAW",
  "key16": "T13ubUFg4ZPPBeUYHK3jcLjkPQ6NEnaKC8c4U1GSKYXfXUvKyypkT3A9KZPXNH1GJTeZWWcqvcKorgs4ssrS9dd",
  "key17": "5J3FmsjtwittnFG1vA6dAcJigXqSby4LA2cJ4AQi3FN643uQSHyChwVp5f3QafmDGkrzNdxZRXJ2diThtCsigTBz",
  "key18": "4WGHxRQ2ba7zmjiiATZf6dKJtLzA4AzUUcRCcixaNaJNXD7j8Spbtg2FvYmr5rx8QvSGyC7hg5BENsxDmAoyZeFG",
  "key19": "2ZtUncrqXSMA5c7iFPP8pRxckkL6M7q68HWkQ4P4FNecsYJEj6HT14bbxKtawN8G22yfHb6uBY6Bwyc49kNQiAGF",
  "key20": "3cphBkWvET4k8NjEgg739bcAvogo7EbTBuDSAyBU3MGtRYNgvif7Hr1n9fJxZ2RrTdV64kt8FCJgFdtzfgmNaMyW",
  "key21": "3LAhkBgXJUcDf57DmyR8cBnLNUG1e8LuoiuAPfvQxk1ujfRm6775W1HoXb5NE64hZR46gpuN8gAUu74eKgDHaNSc",
  "key22": "4o4iynyPzAinfmieii7bZmd2RETuEKcpvLYeCYTh8CLbnfBtZTCfM2cvzaKAot4F8urKJo3Kcz8nSPSo1hhU4PNd",
  "key23": "Z16xe4tZ3cfRFiL44jyr8dNKtGe1zNCPXEbG7GuY7ff4vb7zhvVo2RWo4hUirCgV2TCh6ZW5X78FEKq6vv2KnjL",
  "key24": "3DGroVGkXAD7YYMkaZwJt39EAxdvaTFkvnhYB1ghsGx7k5M9HfMgrtxL7uZpdozosaUYc6ijdxTgF9kkFaoQYdzV",
  "key25": "2Jixh32bue4DqBXYwbsfKupeyrVLgaSjJp4Jw6zKzrGL3ugvSH9Uy4zw1uqTD7qqz5RMBjaN8BY5dGqD2njdxf4P",
  "key26": "Q5xVhsr4LuACc1eeWZiUGbrv8VSNxVHHtXctQ67HicbocMrc7yScSMXvcsX7DnnWQFUE3oJacS6uSrrPohgP3jp",
  "key27": "5A8JgrgwuGoeNZ9TRnvrvyyKvZc63Y2ENfcETAwwdLrRi7XUj7CrdTg5RkSQoWammp7uVG9dkCAYYrVbBRSB7AYe",
  "key28": "NrwbuhRYB9AUwhTrJFRM2NLXTncAiK8H4kKgJpyVdnqFyVoqHeXbPRw14B1GN4s6CYUHHxZxRP4G8AHg2Lyc9jZ",
  "key29": "u25jHyAPAxE8Zu6vEhAwEqfpPR3LUn9CUXWwf92xY8yQXzesiF7nWkYQuse3Gop6xcSSfevGXhnpdwwe5NBPsJz",
  "key30": "2EhzMTgWxmFtuq463ifAE5KULUPA5XXb3Zjeo6TVXWJyKtTT3zBj9JCJ339PngAvo6zs7HoaDRzAZjKrY9E33nD4",
  "key31": "5TRywYUULxf5sHcHK3G9ecu4jSZUeeJqV2z2x2sARB8Dat5YKVdx3RhJRf2WUHuWaKUYX9HnDV4AUqLw6Kc6ShP4",
  "key32": "3SApQ56KKGnXP6GfGntZ2qszcjUnMgjsEaV7cjChU6D72QZ5mP6Jtkew14Y7oFSDJ3QguDz3LAtc1eWcEgCnbcc8",
  "key33": "4651XtU7D8gE1guWT2HnAyY21Rt3H7HqMGsGTBwxsw2pgAwj65YJmEuQVeTBQv61guimuVpmioYkHn19siMu7eja",
  "key34": "EX4F64npWkX85CrpyTKifQdVQT8E1RdrNeokFkQqi4hqx4dRKqinzQmmeYphQ8ZTJRWvKaHUaj5tP5Rue6sYBME",
  "key35": "5y9o8aKAoHmVv5iphVhuTCTZyh8vdxkovdveYN5PAeCSCyG5gh2VhS7vovJ3yeujL71aMyH3eAycHvsXDJdNFKhP",
  "key36": "4H3zpEUq6S3CmzKYbyNDy7NvcFhcp1W8znVtouVSUpaeMXcVEf15o21kLPUgmHGD8myinicGj4udBU5GBmYVqEcS",
  "key37": "5CMbqoc47U2zgNBcDShACrbJkgdvcfRhjR533S6ipmcuK6gKdxDFxdjMLvYU5Wn2t1qrzwn5N78P6ETsbVvsJ9MY",
  "key38": "5Gk3NQ8j9cHHpXnKrduJm3X8os1ADKsLFWZU4NkCUuZDCsVfjC2LrVQU66zJ89nSLEbX8eFYRjg7uVkjSQbfUtSs",
  "key39": "578FZJZCBAuLG8N4EDnFP1fQRWdfiu7Zb7vSxdDs9DMV8B6kR4JXAWcWK6TDmfXyYdihSTmhpnJpvGp5gnrbzSjQ",
  "key40": "bXxo2iFDz9vYtVtmXMzyGuct8pdBt16xFUGoxJDvzKdyQpT1G28HbCDg64sxmNMTJbSjP4TCuAaY3ADmJs55tus"
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
