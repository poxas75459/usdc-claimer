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
    "3AJWUnVKNkCMR3LFoLKaWMrXMHNbiXdZLDvmbdJvBiEPVsj48AJ3kxVrUcLoNcfJABF8Pu8KfrD3MU4R8kbW7Uw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UyizZYXzh2xEV5SBg5hySqSbfvrvqvaMAH6nAJCH3TCA97eFe7Z2YVk6eQLgQcXDbZzD32FoZW3N6Xbk6XDDFSF",
  "key1": "46TKzhi3mx6XEPV5dDxsC6bTTWWk9DU9i5p8tW5quvBMpikHh94ZPCrhveLGycVsnYcV8AHET1HgG8MtkC1b2cSn",
  "key2": "4AbXNFmTtFBcYvYh6nqAtqFqTAGsoG4xsZYURTPJJ6ZhjqSCePukRENwbcv7oNCUq1KM9cov9Bu2f2k6zppzqwfa",
  "key3": "3PqXJTJHa9bEprQBc3RGbF4gHKWXLi2CdwN7DsDpWhHUDiQH4kLqYfZ53cTGdY1r89LM6f79Ygr6rAGPtaao5Bmd",
  "key4": "2dX74CmzZDcr6D5BxtXn1U3m8266iGC6Ce3isj3W7QyP5KouNwLrmcSwFnZu5ZPFpGrQoavbvTDdfoAhfNnzUB5Q",
  "key5": "4oR4xiHzr8uVdnVSFTPNPuoTquev39SwJ3vUjsGRcXNWWhkj82ktnwT52PMPFf466sWhu7Dyt2nqJibeZe7RwUXQ",
  "key6": "21DpmzJJ57ttZsjbYsZisTnVBz9Az7RGrh2qaSfbGBFfeu2sx9EjFWd6RMjWCBBB56BhC5SD6NnL6B1ysBBQU4dM",
  "key7": "4oSAQBsYMc1rPj1bsPYDTeEPxvPPXsxJ9NUVXhRd3GqxgGyM7Ft7SwA1LMozvaSvTvz5BtCF3Z3ps5sMeCmgAyxN",
  "key8": "48yeZi5MBmtsoP7eCVkuPGYmUfAuQcVLk3tjKfXXu4vTnVFT3zcQ6dHv34QZzLrS6LrjjPsVqoNLSXZfdq2w3SRq",
  "key9": "4XVbJaUQMmoejkjePTeHZEsigpvoupCxRhrmZLE3hMYmbkYwA5zfscoF2rrSkbQQJ3yL4HppTSECzQKEPWnTqedJ",
  "key10": "2qnaJd4R1HDTn5FtADTVSWdfax5zaT66oFqPmKbHozdbgcUz7auJDYLBouJo8Qx61KDeaHei2w2F5g19JuMBbt25",
  "key11": "3bkFw8Hby2H7Ntx1Va2FPGcwkPJvE5BARDuvUB4Pix8JCYtFoNpeBj7fe95bvtsw1xxNV47wCNa7Nuwb17N3R9Lr",
  "key12": "5XivtGt6uUstghGt5ESs39aDbbzRkkMFoHTaQGhDKZYvpYi3bFFuugyG6WdHmS9cgrw8V9Zb9G4vAgZ8E7mP9asv",
  "key13": "4Av3fYi5RWgZD6EJsmX81N3hv2kKKCMFiGMLLMigBSkWAiuVzZHDnxRzS1aK9BxnxCCWzDRpQbdruJyr8z2SfA39",
  "key14": "3Z3goUcrqVHprpLzcoX6qRYRvN6CBQ2U5fC76ehJA9RKgX6gN6FioPs3rogGYU55h5CKpaevtVsxs3A5AL8vEna4",
  "key15": "31FYKknxxPKEsV5npLz1XuHCyMysB5YDARYBroAL6RsDiXVDLuucZgzYoX2joR7GPBViBu61UdHeWRSZ9LVvUrMw",
  "key16": "23ZdMiYFubF7a513MVGW4sdEwMXx4pYGcaBM8DYPYED3GecMBJEiu3X183b1Q55qR4WXBZaQnPZAqgGcgCm4UVYS",
  "key17": "3Vvoz1LajSaMFSPaBYcFGXVdLnfz1AktJ42yki7sJH8xJ98NNiYhA7uYAKpocV2uwgnf4wQ7ySDvm2ACVnqZka6",
  "key18": "4xaTxeCSKRSjPEAx1NY8i4AJTNnjac9D6ufHrWhHLTptkqwM8kcazCVtWAaVW3a4tBQ9LcgcVctpKQ6KzjmJ4ETK",
  "key19": "5RS7TuE2oxyyH3GJja9MciHNPpjFuwhV47Tu4YyM7GkDWVgNTvZkPzTtWodd4xMmXSAh2s1HXafHgtTV7fTTDhv6",
  "key20": "CmKyBiqKfHzuoHCzamrharNXmDHQby2CydqXb2jkM7JZWS9PtSNRqmfoDD1pQQUB9QBpL8qpyGfFtLU6umL4yuw",
  "key21": "3xU7ygm31ewqQ2L4orAwyzUgzJeBeKeRDryj63RBYp8inH6TV77BfT4xjuqyNuLycktQECRTrYW1fn6ugKwZv5q",
  "key22": "5m8bhM2ohM1WBNw7FWo2Fnj4nisQuWPaKDUieWLehzyxgHjLvpay9WTfKHMEuevVzSp91vH2kqm2DBd1nnDjeNtn",
  "key23": "3bYdtmaWf2oMrP9TxHh3hiTbPdFdn1qDwcUgD6Xn6c6XHsqgji3ACWoVUjRAdR87hBQXfThQNwFxnyY5kZ9gCep2",
  "key24": "4uJBAnSgM23MsaJJoF3jZtPFPLB9LBNN9Gv93rH2iwPsRnmkRzdKjm6PWhH8a8yYvg9NfkhDGjfF4t2yLh6jcCjL",
  "key25": "467xPENxHVDpqWHnKj6fD633hCV2Thj839UUxEf73ftQ2Mjjx1tEAKqerkCVuCwsEj8LMXoXwPMzeLCew617CHYm",
  "key26": "5VczJF8trabTFTvZypAk4EZ2S22hCRUxvzQTVpfYu2UGtzRGGond7a19B4nHQs6CWh6u2kqEpcSJHeKKEeQJrUuX",
  "key27": "NW6YCkZEAyhTQwXDSFXZAzqeLynnZoJKLnN5YtdqVrT1n8xDwJxcu4xqHoV7Q5BS59dMZaPchTDQAaERXnk7hWN",
  "key28": "jhLrJJSX5qe9AC6JBmUWD2MYJZfPhCfNQP3bSqySfxt1i7bphpG6ZjQaeB3Ea3Lj9PFf3Rz71upMgL8QQzbXdnj",
  "key29": "4SxsaefRgXX6notvJusMoALCaRb6pce5UWvx7J8qYPAkeEbqBJPUd2HzsC41pQ2zGACe5zqWQgk6euY5HBDSTKkD"
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
